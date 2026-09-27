/* ============================================================
   Reasoning GP — The Hot Seat: add-on set, batch 9
   Stem, knowledge, model consultation, scorecard tasks, extras,
   knowledge base, playbook, links and examiner pitfalls for
   20 further cases. Loaded after sca-pitfalls.js and
   before sca-practice.js; merges into the existing maps and
   attaches to the case objects exactly as those files do.
   Educational; original content; primary sources cited.
   ============================================================ */
(function(){
  var ADD = {
 "amend-medical-record": {
  "stem": {
   "name": "Greg Salter",
   "age": "39-year-old man",
   "pmh": [
    "Historical entry: alcohol misuse / dependence (several years ago)"
   ],
   "meds": [
    "None recorded"
   ],
   "allergy": "One drug allergy recorded — patient disputes it",
   "recent": "Patient has recently viewed his online record. Message to the practice asking for two entries to be deleted.",
   "reason": "Video consultation: wants the historical alcohol diagnosis and a listed allergy removed from his record."
  },
  "knowledge": {
   "guideline": "UK GDPR Articles 16 and 17 · ICO guidance on the accuracy principle · NHS England: Amending patient and service user records · GMC Good medical practice (2024) · GMC Confidentiality (2017) · Access to Medical Reports Act 1988",
   "summary": "Separate a possible factual error from a disputed but accurate clinical entry. Verify and correct the allergy with an audit trail; annotate, rather than erase, the historical diagnosis; explain his rights and routes openly.",
   "points": [
    {
     "h": "Rectification",
     "t": "UK GDPR Article 16 gives a right to have inaccurate personal data corrected. The ICO’s accuracy guidance: a record of an opinion is not inaccurate if it correctly records the opinion held at the time; where the patient disagrees, record his view alongside it."
    },
    {
     "h": "Erasure",
     "t": "UK GDPR Article 17 allows erasure in some circumstances, but it does not apply where processing is needed for health care or for public-health reasons. Accurate clinical history is kept."
    },
    {
     "h": "How corrections are made",
     "t": "NHS England guidance: even inaccurate information is not simply deleted; it is corrected or marked, with the reason and an audit trail, because others may have relied on it. Seek information-governance advice if deletion is ever considered."
    },
    {
     "h": "The allergy",
     "t": "Check the source before changing it: the original entry, hospital letters and prescribing history. If it was recorded in error, correct it with a note of how this was verified. Removing a true allergy on request is a safety risk."
    },
    {
     "h": "Response and routes",
     "t": "Respond to a rectification request within one month (UK GDPR Article 12). If he is unhappy, he can use the practice complaints procedure and then complain to the ICO."
    },
    {
     "h": "Reports to employers or insurers",
     "t": "A GP report for an employer or insurer needs his consent. Under the Access to Medical Reports Act 1988 he can ask to see it before it is sent, ask for corrections, or attach a statement. Records must be honest and not misleading (GMC Good medical practice, 2024)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Salter, I’m Dr Lee. I understand you’ve been looking at your records. Tell me what you found.",
    "dom": "rto",
    "why": "Open question on his concern"
   },
   {
    "who": "pt",
    "text": "There’s an old note about alcohol dependence. That was years ago, I’ve sorted myself out, and it’s nobody’s business. And there’s an allergy I haven’t got. Just delete them both, please. They’re causing me problems."
   },
   {
    "who": "dr",
    "text": "Thank you for raising it directly — you have every right to question what’s in your record. You’ve mentioned two things, and they’re quite different, so I’d like to take them one at a time and be straight with you about each. Is that okay?",
    "dom": "gs",
    "why": "Validates and separates the two requests"
   },
   {
    "who": "pt",
    "text": "Fine. As long as they get sorted."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Let’s start with the allergy. Can you tell me what’s listed and whether you’ve ever taken that medicine?",
    "dom": "tasks",
    "why": "Gathers facts to verify the allergy"
   },
   {
    "who": "pt",
    "text": "I’ve never reacted to anything. I don’t know where it came from."
   },
   {
    "who": "dr",
    "text": "I’ll look at when it was added and whether there’s a hospital letter or prescription behind it. If it was put on in error, I’ll correct it. It matters for your safety both ways — a wrong allergy can stop you getting the right treatment.",
    "dom": "tasks",
    "why": "Verifies before correcting; frames as safety"
   },
   {
    "who": "pt",
    "text": "Good. That’s one."
   },
   {
    "who": "dr",
    "text": "Now the alcohol entry. You said it’s causing problems. Can you tell me what’s happened?",
    "dom": "rto",
    "why": "Explores the reason behind the request"
   },
   {
    "who": "pt",
    "text": "It follows me around. Work, insurance, medicals. People see a label and judge me, and I’m not that person any more."
   },
   {
    "who": "dr",
    "text": "That sounds really frustrating, especially when you’ve worked hard to get well. How are things with alcohol now?",
    "dom": "rto",
    "why": "Acknowledges stigma; brief current history"
   },
   {
    "who": "pt",
    "text": "I’m fine. Well for years. That’s the point."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "What worries you most about the entry staying there?",
    "dom": "rto",
    "why": "Clarifies the core concern"
   },
   {
    "who": "pt",
    "text": "That someone reads it and decides who I am. I want a clean slate."
   },
   {
    "who": "dr",
    "text": "And you were hoping I could delete both today?",
    "dom": "rto",
    "why": "Confirms expectation"
   },
   {
    "who": "pt",
    "text": "Yes. It’s my information."
   },
   {
    "phase": "Explanation",
    "clock": "5–8 min",
    "who": "dr",
    "text": "It is your information, and you have rights over it. If something is wrong, like the allergy may be, you have a right to have it corrected. The alcohol entry is different: it was a record of what was happening and the care you had at the time. I can’t erase an accurate part of your medical history, because the record has to stay a true account.",
    "dom": "tasks",
    "why": "Explains rectification versus erasure honestly"
   },
   {
    "who": "pt",
    "text": "So you won’t do it."
   },
   {
    "who": "dr",
    "text": "I can’t delete it, and I know that’s not what you wanted to hear. But I don’t want to leave it there. The record should also show where you are now. That part I can change.",
    "dom": "rto",
    "why": "Acknowledges disappointment and moves to options"
   },
   {
    "who": "pt",
    "text": "Go on."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "First, I can add a clear entry today recording that you dispute the old entry and that you’ve been well for years — in your own words if you like — so anyone reading sees the current picture. Second, you can make a formal written request, which the practice must answer within a month.",
    "dom": "tasks",
    "why": "Offers annotation and the formal route"
   },
   {
    "who": "pt",
    "text": "And if I’m still not happy?"
   },
   {
    "who": "dr",
    "text": "Then there’s the practice complaints process, and after that the Information Commissioner’s Office, which regulates this. I’ll give you the details.",
    "dom": "tasks",
    "why": "Explains complaints and ICO routes"
   },
   {
    "who": "dr",
    "text": "About work and insurance: employers and insurers can’t get a report from us without your consent. If one asks, you have the right to see the report before it’s sent, ask for corrections, and attach your own statement. I would have to be honest in any report, but I can make sure it reflects your recovery.",
    "dom": "tasks",
    "why": "Accurate confidentiality and Access to Medical Reports Act advice"
   },
   {
    "who": "pt",
    "text": "I didn’t know I could see it first. That helps."
   },
   {
    "who": "dr",
    "text": "Which would you like to start with — adding your statement now, or thinking about the formal request?",
    "dom": "rto",
    "why": "Shared decision on next step"
   },
   {
    "who": "pt",
    "text": "Add the statement now. I’ll think about the rest."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Then here’s the plan: I’ll check the allergy entry today and let you know by the end of the week what I found and what I’ve changed. I’ll add your statement, and I’ll document our conversation. If you want help with a formal request, come back to me.",
    "dom": "gs",
    "why": "Clear actions, timescale and documentation"
   },
   {
    "who": "dr",
    "text": "Just so I’m sure I’ve explained it clearly — what’s your understanding of what we can and can’t do?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "The allergy gets fixed if it’s wrong. The old note stays, but my side goes on too, and I can see any report before it goes. It’s not what I wanted, but it’s fair."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let him state both requests in full.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work, insurance and medicals; his recovery and sense of identity.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Followed “it’s causing me problems” and “people judge me”.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (both entries are wrong), concern (stigma and being judged), expectation (deletion today).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Checks the allergy source: date added, letters, prescribing history; brief current alcohol history.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Allergy recorded in error vs true allergy forgotten; accurate historical entry vs genuine factual error.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Recognised the safety risk of removing a true allergy and of an inaccurate one.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Framed the problem: possible factual error to rectify; accurate opinion to annotate, not erase.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Verify and correct the allergy with an audit trail; add his statement; formal request, complaints and ICO routes.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Explained consent for third-party reports and his rights under the Access to Medical Reports Act 1988.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Allergy outcome by end of week; conversation documented; offer of help with a formal request.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Professional & ethical dilemmas",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Greg Salter",
    "age": "39 years · male",
    "pmh": [
     "Alcohol misuse / dependence — historical entry, several years ago"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "One drug allergy listed — disputed by patient",
    "recent": "⚠ Online record access used recently. Patient message: “Please delete the alcohol entry and the allergy.”",
    "reason": "Video consultation about changes to his medical record."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and separate",
     "d": "Let him state both requests, then say you will take them one at a time."
    },
    {
     "t": "1–4",
     "h": "Facts and reasons",
     "d": "Allergy history and source; what harm the alcohol entry is causing; current wellbeing."
    },
    {
     "t": "4–5",
     "h": "ICE",
     "d": "Stigma, being judged, wanting a clean slate; expecting deletion today."
    },
    {
     "t": "5–10",
     "h": "Explain and offer",
     "d": "Rectification vs erasure; verify and correct the allergy; add his statement; formal request, complaints, ICO; consent and seeing reports first."
    },
    {
     "t": "10–12",
     "h": "Close",
     "d": "Timescale for the allergy check, documentation, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Deletes both entries on request, or refuses flatly with “it’s policy”; removes the allergy without checking; no exploration of why; no options offered.",
    "pass": "Separates the two requests; verifies and corrects the allergy; explains why the historical entry stays; offers to add his statement; documents.",
    "exc": "All of that, plus: explores the stigma and validates his recovery; explains rectification, complaints and ICO routes and the one-month response; explains consent and the Access to Medical Reports Act; keeps the relationship intact and checks understanding."
   },
   "avoid": [
    {
     "dont": "“I’m afraid we can’t change medical records — it’s policy.”",
     "instead": "“One of these I can correct if it’s wrong. The other I can’t erase, but I can add your side and your recovery.”",
     "why": "A blanket refusal is inaccurate and ends the conversation."
    },
    {
     "dont": "“No problem, I’ll delete them both now.”",
     "instead": "“Let me check where the allergy came from first, and explain why the older entry has to stay.”",
     "why": "Deleting accurate records breaches record integrity; removing a true allergy is unsafe."
    },
    {
     "dont": "“Insurers can see everything in your notes.”",
     "instead": "“They can’t get a report without your consent, and you can see it before it’s sent.”",
     "why": "Incorrect and increases his distress."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Stigma",
     "t": "Labels about alcohol can follow people long after recovery. Acknowledge this and make sure the record shows his current status."
    }
   ],
   "legal": [
    {
     "h": "UK GDPR",
     "t": "Right to rectification (Article 16); right to erasure is limited where data are needed for health care (Article 17); respond within one month (Article 12). Complaints can go to the ICO."
    },
    {
     "h": "Access to Medical Reports Act 1988",
     "t": "For reports his own doctor writes for an employer or insurer: consent is needed, and he may see the report before it is sent, ask for corrections, or attach a statement."
    },
    {
     "h": "DVLA",
     "t": "Alcohol dependence is covered by DVLA Assessing fitness to drive. Changing the record does not change what a driver must declare; answer honestly if he asks."
    }
   ],
   "professional": [
    {
     "h": "Record integrity",
     "t": "Records must be accurate and not altered to mislead (GMC Good medical practice, 2024). Corrections are made openly with an audit trail (NHS England: Amending patient and service user records)."
    },
    {
     "h": "Confidentiality",
     "t": "Disclosure to employers or insurers needs consent; exceptions exist, such as a court order (GMC Confidentiality, 2017). Don’t promise that nobody will ever see his record."
    }
   ],
   "community": [
    {
     "h": "Information",
     "t": "ICO website for his data-protection rights; the practice privacy notice and complaints procedure."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "A true drug allergy about to be removed — check the source first",
     "Current drinking or relapse hidden behind the request",
     "A request to alter records to mislead a third party"
    ],
    "psychosocial": [
     "Stigma at work, insurance and medicals",
     "Pride in recovery not reflected in the record",
     "Mistrust of who can see his notes"
    ],
    "ice": [
     "Idea: both entries are wrong and should go",
     "Concern: being judged by a historical label",
     "Expectation: deletion of both today"
    ]
   },
   "diagnosis": "Two different requests: a possible factual error (allergy) to verify and rectify, and an accurate historical clinical entry (alcohol dependence) that is annotated with his view and recovery rather than erased.",
   "diagnosisLay": "“Think of your record as a diary written at the time. If a date or fact is wrong, we fix it and note the fix. We can’t tear out a page that was true then — but we can add today’s page showing where you are now.”",
   "management": {
    "reflectIce": "“You’ve worked hard to get well, and it feels unfair that an old label follows you. Let’s make sure the record shows who you are now.”",
    "psychosocial": "Validate his recovery; explain his rights over third-party reports; keep the door open for a formal request.",
    "sharedPlan": [
     "Verify the allergy source; correct with an audit trail if recorded in error",
     "Add his statement and current status to the record",
     "Explain formal rectification request (one-month response), complaints and ICO",
     "Explain consent and the Access to Medical Reports Act 1988 for employer or insurer reports"
    ],
    "safetyNet": [
     "Allergy outcome by the end of the week",
     "Conversation documented; help offered with a formal request"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Alcohol",
    "s": "Case walkthrough · recovery",
    "href": "../cases/alcohol.html"
   },
   {
    "ic": "💠",
    "t": "Alcohol problem drinking",
    "s": "Protocol · NICE CG115",
    "href": "management/alcohol-problem-drinking.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA",
    "s": "Fitness to drive · alcohol",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you know the difference between correcting and erasing, and whether you can say no to part of a request and keep the relationship.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Treating both requests as the same and deleting or refusing both.",
     "why": "A factual error has a right to rectification; an accurate opinion does not have a right to erasure. Merging them is a knowledge failure.",
     "fix": "Say out loud that these are two different requests, and deal with each."
    },
    {
     "dom": "tasks",
     "fail": "Removing the allergy because he says he doesn’t have it.",
     "why": "A true allergy removed is a safety risk. Verification comes first.",
     "fix": "Check the original entry, letters and prescribing; correct with a note of how it was verified."
    },
    {
     "dom": "tasks",
     "fail": "Promising that nobody outside the practice will ever see his record.",
     "why": "There are exceptions, and reports he consents to must be honest.",
     "fix": "Explain consent, his right to see reports first, and that a report can reflect his recovery."
    },
    {
     "dom": "rto",
     "fail": "Launching into data-protection law before asking why he wants the change.",
     "why": "The driver is stigma. Without exploring it, the explanation sounds like a brush-off.",
     "fix": "Ask what problems the entry has caused, and acknowledge his recovery."
    },
    {
     "dom": "rto",
     "fail": "Flat refusal: “it’s policy”.",
     "why": "Examiners mark down refusals without reasons or alternatives.",
     "fix": "Explain why, then offer what you can do: his statement, formal routes, and report rights."
    },
    {
     "dom": "gs",
     "fail": "Ending without a timescale or documentation.",
     "why": "He leaves unsure what will happen.",
     "fix": "Give a date for the allergy outcome, document the discussion, and check understanding."
    }
   ]
  }
 },
 "anaphylaxis-epipen": {
  "stem": {
   "name": "Daniel Foster",
   "age": "27-year-old man",
   "pmh": [
    "Anaphylaxis 5 days ago after a restaurant meal — suspected peanut trigger",
    "No other history recorded"
   ],
   "meds": [
    "Short course of oral antihistamine from A&E (per discharge letter)",
    "No adrenaline auto-injector on the repeat list"
   ],
   "allergy": "Suspected peanut allergy (anaphylaxis) — not yet confirmed by an allergy service",
   "recent": "A&E discharge letter: lip and tongue swelling, throat tightness, wheeze, light-headedness and urticarial rash within minutes of a Thai meal. IM adrenaline given by paramedics; recovered and discharged. Advice: “see GP for a plan”.",
   "reason": "Video follow-up after an anaphylactic reaction, to agree a plan."
  },
  "knowledge": {
   "guideline": "NICE NG258 (2026, replaced CG134) · NICE QS119 · Resuscitation Council UK anaphylaxis guideline (2021) · MHRA Drug Safety Update June 2023 (adrenaline auto-injectors) · BNF",
   "summary": "Acute airway, breathing or circulation problems with skin changes minutes after food is anaphylaxis. Aftercare is a package: two in-date auto-injectors with training, a written plan, allergy-service referral, avoidance advice and attention to the fear it leaves behind.",
   "points": [
    {
     "h": "Confirm it was anaphylaxis",
     "t": "Sudden onset after exposure, with airway (throat tightness, tongue swelling), breathing (wheeze) or circulation (light-headedness, collapse) problems, usually with urticaria or angioedema. Name it clearly: future reactions are unpredictable and may be worse."
    },
    {
     "h": "Adrenaline, not antihistamine",
     "t": "IM adrenaline into the outer thigh, given early, is the treatment (RCUK 2021). Antihistamines only help skin symptoms and never replace adrenaline. Adult auto-injector strength per BNF, usually 300 micrograms."
    },
    {
     "h": "Two pens, trained, always",
     "t": "NICE NG258 and MHRA (June 2023): offer auto-injectors after emergency treatment as an interim measure before specialist review, carry two in-date devices at all times, and give brand-specific training (NICE QS119 statement 1). Use a trainer and ask him to demonstrate."
    },
    {
     "h": "What to do in a reaction",
     "t": "MHRA June 2023 and RCUK 2021: use the pen, call 999 and say “anaphylaxis”, lie down with legs raised (sit if breathing is difficult), do not stand or walk, and use the second pen after 5 minutes if not improving. Always call 999, even if the first pen works — symptoms can return."
    },
    {
     "h": "Specialist allergy referral",
     "t": "NICE NG258: everyone who has had emergency treatment for suspected anaphylaxis should be offered referral to a specialist allergy service to confirm the trigger (skin-prick or specific IgE testing), plan avoidance and review the action plan. Check whether A&E made the referral; if not, the GP makes it."
    },
    {
     "h": "Avoidance and everyday life",
     "t": "Read every label; ask about ingredients and cross-contact when eating out; carry an allergy card or medical-alert ID. Ask about asthma and co-factors (alcohol, exercise, NSAIDs), which raise the risk of a severe reaction. Acknowledge anxiety after a near-death experience and review it."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Daniel, I’m Dr Lee. I’ve read the A&E letter, but I’d like to hear it from you. How are you doing after all that?",
    "dom": "rto",
    "why": "Opens with the person, not the letter"
   },
   {
    "who": "pt",
    "text": "Physically fine now. But honestly I’m a bit shaken. My throat went tight and I thought, this is it. They said it was probably peanuts. What do I actually do if it happens again?"
   },
   {
    "who": "dr",
    "text": "That’s exactly what we’ll sort out today. I’d like to check a few details of what happened, then go through a plan with you — a pen to carry, what to do step by step, and finding out for sure what caused it. Is that alright?",
    "dom": "gs",
    "why": "Agenda that matches his expectation of a plan"
   },
   {
    "who": "pt",
    "text": "Yes, please."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Talk me through it from when you started eating.",
    "dom": "rto",
    "why": "Open question to get the story in his words"
   },
   {
    "who": "pt",
    "text": "Within a few minutes my lips and tongue swelled, my throat felt tight, I was wheezy and went really lightheaded. There was a rash too. The paramedics injected my thigh and it settled."
   },
   {
    "who": "dr",
    "text": "Swelling in your throat, wheeze and feeling faint, all within minutes of food and settling with adrenaline — that tells me this was anaphylaxis, a severe whole-body allergic reaction. I want to be honest that it’s serious, which is why the plan matters.",
    "dom": "tasks",
    "why": "Confirms anaphylaxis from airway, breathing and circulation features"
   },
   {
    "who": "dr",
    "text": "Have you ever had anything like this before, or any asthma or wheeze at other times? And had you had alcohol or taken painkillers like ibuprofen that day?",
    "dom": "tasks",
    "why": "Screens asthma and co-factors that raise the risk of severe reactions"
   },
   {
    "who": "pt",
    "text": "Nothing like that before. I don’t think anything else was going on."
   },
   {
    "who": "dr",
    "text": "Did A&E give you an adrenaline pen, or mention a referral to an allergy clinic?",
    "dom": "tasks",
    "why": "Checks the discharge gaps NICE NG258 expects to be covered"
   },
   {
    "who": "pt",
    "text": "No, just antihistamines and “see your GP”."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "You said you’re shaken. What’s been going through your mind since?",
    "dom": "rto",
    "why": "Follows the emotional cue from the opening"
   },
   {
    "who": "pt",
    "text": "That next time it’ll be worse and nobody will be there. I’ve not eaten out since. I just don’t know what I should carry or do."
   },
   {
    "who": "dr",
    "text": "That’s a very normal reaction to something so frightening. Most people find the fear eases once they have the pen, know exactly what to do and have the cause confirmed. That’s what we’ll give you today.",
    "dom": "rto",
    "why": "Normalises anxiety and frames the plan as regaining control"
   },
   {
    "phase": "Explanation",
    "clock": "5–8 min",
    "who": "dr",
    "text": "The single most important message: if it happens again, the treatment that works is adrenaline, used early. Antihistamines help an itchy rash, but they don’t open a swelling throat or hold your blood pressure up. Pen first, then 999.",
    "dom": "tasks",
    "why": "Adrenaline first-line; antihistamine is not a substitute"
   },
   {
    "who": "pt",
    "text": "So I shouldn’t wait to see if the tablets work?"
   },
   {
    "who": "dr",
    "text": "Exactly — don’t wait. I’m prescribing two adrenaline pens, and you carry both everywhere, because you may need a second dose and a pen can fail. Can you get a trainer pen in front of the camera? The pharmacy can give you one, and I’ll show you now.",
    "dom": "tasks",
    "why": "Two in-date devices and brand-specific training"
   },
   {
    "who": "pt",
    "text": "I’ll grab one from the pharmacy — can you show me now anyway?"
   },
   {
    "who": "dr",
    "text": "Of course. Grip it in your fist, take the safety cap off, press the tip firmly into the outside of your thigh — through trousers is fine — and hold it there for the time on the pen. Now you show me with a pen or even a marker, so I know you’ve got it.",
    "dom": "tasks",
    "why": "Demonstrates technique and asks for teach-back"
   },
   {
    "who": "pt",
    "text": "Cap off, outer thigh, press hard, hold it. Like that?"
   },
   {
    "who": "dr",
    "text": "Spot on. Then call 999 and say “anaphylaxis”. Lie down with your legs up — sit up only if breathing is easier — and don’t stand or walk. If you’re no better after 5 minutes, use the second pen. And even if the first one works, still go to hospital, because symptoms can come back hours later.",
    "dom": "tasks",
    "why": "Action plan including posture, second dose and biphasic risk"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Next, finding the cause. I’m referring you to the specialist allergy service. They’ll test to confirm whether it’s peanut, check related nuts, and give you dietitian advice. Until then, let’s treat peanut as the cause.",
    "dom": "tasks",
    "why": "Allergy-service referral per NICE NG258"
   },
   {
    "who": "pt",
    "text": "What about eating out? I love Thai food."
   },
   {
    "who": "dr",
    "text": "You don’t have to give it up, but you do need a routine: tell staff clearly that you have a severe peanut allergy, ask about ingredients and shared oil or utensils, read every packet label, and have both pens on you. A medical-alert bracelet or card helps if you can’t speak for yourself.",
    "dom": "tasks",
    "why": "Practical avoidance tailored to his life"
   },
   {
    "who": "dr",
    "text": "Who’s around you most — at home or at work? It helps if they know where your pens are and how to use them.",
    "dom": "rto",
    "why": "Involves others without assuming who they are"
   },
   {
    "who": "pt",
    "text": "I’ll show the people I live with and my manager."
   },
   {
    "who": "dr",
    "text": "Great. I’ll also send you a written allergy action plan with these steps on, so you’re not relying on memory in the moment.",
    "dom": "gs",
    "why": "Written personalised plan"
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Can you tell me back the three things you’d do if your throat started to feel tight?",
    "dom": "rto",
    "why": "Teach-back of the emergency steps"
   },
   {
    "who": "pt",
    "text": "Pen in my thigh straight away, ring 999 and say anaphylaxis, lie down with my legs up — and the second pen after five minutes."
   },
   {
    "who": "dr",
    "text": "Perfect. Please collect both pens today and check the expiry dates — set a reminder to replace them. If you get any new symptoms before the pens arrive, ring 999. I’d like to speak again once the allergy clinic has seen you, and sooner if the worry is getting in the way of life.",
    "dom": "gs",
    "why": "Interim safety-net, expiry and defined follow-up"
   },
   {
    "who": "pt",
    "text": "Thanks. I feel much more in control."
   },
   {
    "who": "dr",
    "text": "You did the right thing coming back for a plan. Anything else before we finish?",
    "dom": "rto",
    "why": "Shares the floor at the close"
   },
   {
    "who": "pt",
    "text": "No, that’s everything."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question first; let him tell the story of the reaction and what A&E did before narrowing down.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Eating out, work and home life, who is around him, and how the fear has changed what he does.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I’m a bit shaken” and “what do I do if it happens again?” and explored them.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (peanut), concern (a worse or fatal reaction with no help), expectation (a clear plan).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Specialist allergy-service referral for skin-prick or specific IgE testing; checks whether A&E already referred.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Food anaphylaxis versus other causes; asks about asthma, previous episodes and co-factors (alcohol, exercise, NSAIDs).",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Confirms anaphylaxis from airway, breathing and circulation features and names it as life-threatening.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Anaphylaxis with suspected peanut trigger, pending specialist confirmation — stated clearly in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Two auto-injectors with brand-specific training and teach-back; adrenaline first; written action plan; avoidance tailored to eating out.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Asthma review if relevant, co-factor advice, and support for post-reaction anxiety.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 steps, second dose after 5 minutes, biphasic risk, expiry checks, and review after the allergy clinic.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Daniel Foster",
    "age": "27 years · male",
    "pmh": [
     "Anaphylaxis 5 days ago (suspected peanut)",
     "No other history on file"
    ],
    "meds": [
     "Antihistamine short course (A&E)",
     "No auto-injector on record"
    ],
    "allergy": "⚠ Suspected peanut — anaphylaxis",
    "recent": "⚠ A&E letter: lip/tongue swelling, throat tightness, wheeze, light-headedness, urticaria minutes after a Thai meal. IM adrenaline by paramedics. Discharged on antihistamine. No auto-injector and no allergy referral documented.",
    "reason": "Video follow-up. “A&E said to see you for a plan.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open & listen",
     "d": "Let him tell the story. He will tell you he is shaken — note it and come back to it."
    },
    {
     "t": "1–4",
     "h": "Confirm & gather",
     "d": "Airway, breathing and circulation features plus skin changes = anaphylaxis. Asthma, previous reactions, co-factors. Did A&E give a pen or refer?"
    },
    {
     "t": "4–5",
     "h": "ICE",
     "d": "Fear of a worse reaction with no help; avoiding eating out. Normalise it and frame the plan as control."
    },
    {
     "t": "5–10",
     "h": "Pen, plan, referral",
     "d": "Adrenaline first. Two pens, trainer demo and teach-back. 999, lie flat, second pen at 5 minutes. Allergy-service referral and avoidance."
    },
    {
     "t": "10–12",
     "h": "Safety-net & close",
     "d": "Teach-back of the three steps. Collect pens today, check expiry. Review after the allergy clinic or sooner for anxiety."
    }
   ],
   "wordPics": {
    "fail": "Treats it as a mild allergy; lets him rely on antihistamines; prescribes one pen or none; no technique teaching; no allergy referral; ignores that he is shaken; vague “avoid peanuts and come back if worried”.",
    "pass": "Names anaphylaxis; explains adrenaline first; prescribes two pens and explains how to use them; gives 999 and lie-flat advice; refers to an allergy service; gives basic avoidance advice and a safety-net.",
    "exc": "All of the above, plus: teach-back with a trainer or improvised device; second pen at 5 minutes and why hospital is still needed; tailored eating-out routine; checks asthma and co-factors; acknowledges the fear and frames the plan as regaining control; sends a written action plan and books review."
   },
   "avoid": [
    {
     "dont": "\"Just take your antihistamines if it starts again and see how you go.\"",
     "instead": "\"Pen first, straight away, then 999. Antihistamines don’t treat a swelling throat.\"",
     "why": "Delaying adrenaline is the recognised pattern in fatal reactions; this line fails Tasks outright."
    },
    {
     "dont": "\"Here’s a prescription for an EpiPen — the instructions are on the side.\"",
     "instead": "\"Let me show you, then you show me, so I know you could do it with your throat tightening.\"",
     "why": "A pen he can’t use is not a plan. Teach-back earns marks in Tasks and Relating."
    },
    {
     "dont": "\"You were lucky — it could have killed you.\"",
     "instead": "\"It was serious, and it’s completely normal to feel shaken. Let’s make sure you’re in control next time.\"",
     "why": "Honesty without fear-mongering; he is already frightened."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Eating out and work",
     "t": "Restaurants, takeaways, work events and travel carry cross-contact risk. Plan how he tells staff and colleagues, and where his pens are kept."
    },
    {
     "h": "Psychological impact",
     "t": "Fear, avoidance of eating out and hypervigilance are common after anaphylaxis. Name it, normalise it and review; persistent anxiety may need support."
    }
   ],
   "legal": [
    {
     "h": "Food allergen labelling",
     "t": "UK food businesses must give information on the 14 major allergens, including peanuts; prepacked-for-direct-sale food must carry a full ingredient list with allergens emphasised (Natasha’s Law, since October 2021)."
    },
    {
     "h": "Prescribing and supply",
     "t": "Prescribe auto-injectors by brand so training matches the device; strength per BNF. Report any device failure to the MHRA Yellow Card scheme."
    }
   ],
   "professional": [
    {
     "h": "Closing the discharge gap",
     "t": "NICE NG258 expects auto-injectors, training and allergy referral to be offered after emergency treatment. When this has not happened, fill the gap and consider feedback to the hospital as a learning event."
    },
    {
     "h": "Record and share",
     "t": "Code the allergy and anaphylaxis prominently in the record so every prescriber and service can see it."
    }
   ],
   "community": [
    {
     "h": "Patient support",
     "t": "Anaphylaxis UK and Allergy UK for information, allergy cards and support; community pharmacists can check pen technique and expiry."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Airway, breathing or circulation features within minutes of food = anaphylaxis, not a mild allergy",
     "Asthma raises the risk of a severe or fatal reaction — ask",
     "No auto-injector and no allergy referral after emergency treatment — a gap to close today"
    ],
    "psychosocial": [
     "Eating out, work, travel and who is around him in daily life",
     "Fear and avoidance since the reaction — he has stopped eating out",
     "Practicalities of carrying two pens everywhere"
    ],
    "ice": [
     "Idea: “They reckon it was peanuts.”",
     "Concern: a worse reaction next time with no one to help",
     "Expectation: “What do I actually do if it happens again?” — a plan"
    ]
   },
   "diagnosis": "This was anaphylaxis — a severe, whole-body allergic reaction affecting the throat, breathing and circulation — most likely to peanut, pending specialist testing.",
   "diagnosisLay": "“Your immune system over-reacted to something in the food and it affected your throat, breathing and blood pressure all at once. That’s called anaphylaxis. Adrenaline switches it off, which is why the pen is your lifeline.”",
   "management": {
    "reflectIce": "“You asked what to do if it happens again — so let’s make sure you leave today knowing exactly that, with the pens to back it up.”",
    "psychosocial": "Build a routine for eating out and work rather than banning his life; involve the people around him; name and review the anxiety.",
    "sharedPlan": [
     "Two adrenaline auto-injectors (brand-specific, strength per BNF) with training and teach-back",
     "Written action plan: pen, 999, lie flat, second pen after 5 minutes, hospital even if better",
     "Specialist allergy-service referral; avoid peanut meanwhile; allergy card or medical-alert ID"
    ],
    "safetyNet": [
     "Any throat tightness, wheeze or faintness: pen then 999 — never wait for antihistamines",
     "Check expiry dates and replace; review after the allergy clinic or sooner if anxiety persists"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Anaphylaxis pathway",
    "s": "Visual algorithm · NICE NG258 · RCUK 2021",
    "href": "algorithms/anaphylaxis.html"
   },
   {
    "ic": "🗺️",
    "t": "Allergy test abnormalities",
    "s": "Visual algorithm · IgE and skin-prick results",
    "href": "algorithms/allergy-test-abnormalities.html"
   },
   {
    "ic": "📋",
    "t": "Urticaria",
    "s": "Case walkthrough · skin and angioedema",
    "href": "../cases/urticaria.html"
   },
   {
    "ic": "💠",
    "t": "Urticaria protocol",
    "s": "Management · when it is not anaphylaxis",
    "href": "management/urticaria.html"
   }
  ],
  "pitfalls": {
   "intro": "Candidates rarely fail this station on knowing that adrenaline matters. They fail on handing over a prescription without teaching, missing the second pen and the 999 rule, and ignoring a frightened young man. Each pattern below is fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting the antihistamine plan from A&E and adding “come back if it happens again”.",
     "why": "Antihistamines do not treat airway or circulatory compromise. “Management plan not in line with current UK best practice.”",
     "fix": "Say it plainly: “Pen first, then 999.” Then prescribe two auto-injectors and refer to allergy."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing one pen, or two pens with no training.",
     "why": "NICE NG258 and MHRA (June 2023) expect two in-date devices and brand-specific training; a device he can’t use under stress is no safeguard.",
     "fix": "Demonstrate, then have him show you — on a trainer if available, or with a pen or marker on a video call."
    },
    {
     "dom": "tasks",
     "fail": "Telling him he can stay home if the pen works.",
     "why": "Symptoms can return hours later, and a second dose may be needed. MHRA advice is always to call 999.",
     "fix": "“Even if you feel better, you still go to hospital.” Add lie flat and the second pen after 5 minutes."
    },
    {
     "dom": "rto",
     "fail": "Brushing past “I’m a bit shaken” to get to the prescription.",
     "why": "“Does not identify or respond to the patient’s cues.” His fear drives avoidance and whether he carries the pens.",
     "fix": "“You said you’re shaken — what’s been going through your mind?” Then link the plan to regaining control."
    },
    {
     "dom": "gs",
     "fail": "Delivering everything as a rapid lecture with abbreviations — “IM adrenaline, AAI, biphasic reaction, SPT”.",
     "why": "“Language not easily understood by the patient.” A shaken patient retains little from jargon.",
     "fix": "Plain words and three steps he can repeat back: pen, 999, lie down."
    },
    {
     "dom": "gs",
     "fail": "Closing without checking whether he has the pens yet or when he will be reviewed.",
     "why": "Non-specific safety-netting and no follow-up are standard failing feedback statements.",
     "fix": "Collect both pens today, check expiry, written plan sent, review after the allergy clinic or sooner."
    }
   ]
  }
 },
 "b12-deficiency": {
  "stem": {
   "name": "Carol Denham",
   "age": "46-year-old woman",
   "pmh": [
    "Fatigue — recently investigated"
   ],
   "meds": [
    "Not listed on this summary — confirm (ask specifically about metformin and acid-suppressing medicines)"
   ],
   "allergy": "Allergy status not recorded — check before prescribing",
   "recent": "FBC: macrocytosis. Serum vitamin B12: low. Eats meat; reasonable diet reported.",
   "reason": "Video consultation to discuss her B12 result."
  },
  "knowledge": {
   "guideline": "NICE NG239 (vitamin B12 deficiency in over 16s, 2024) · BNF (hydroxocobalamin; folic acid) · BSH guideline for cobalamin and folate disorders (Devalia et al., 2014) · NICE NG20 (coeliac disease, 2015)",
   "summary": "A low B12 with macrocytosis in a meat-eater points to poor absorption, most often autoimmune gastritis (pernicious anaemia). Her tingling feet and unsteadiness mean nerve involvement: start intramuscular hydroxocobalamin promptly on the neurological regimen, and never give folic acid alone first.",
   "points": [
    {
     "h": "Look for the cause",
     "t": "In someone with a reasonable mixed diet, B12 deficiency is usually a problem of absorption. NICE NG239: consider an anti-intrinsic factor antibody test if autoimmune gastritis is suspected. Review medicines such as metformin and long-term acid suppressants, and ask about gastric or bowel surgery and bowel symptoms. NICE NG20: offer coeliac serology to people with unexplained B12 deficiency."
    },
    {
     "h": "Neurology changes the urgency",
     "t": "B12 deficiency can cause peripheral neuropathy and subacute combined degeneration of the cord — tingling, numbness, loss of position sense, unsteadiness — as well as memory and mood change. NICE NG239: people with neurological symptoms need prompt treatment; do not delay replacement while waiting for further results. Examine her in person: sensation, vibration and position sense, reflexes, gait and Romberg’s test."
    },
    {
     "h": "Why injections, not diet",
     "t": "If the gut cannot absorb B12, eating more or taking a standard tablet will not correct it. NICE NG239: people with deficiency caused by autoimmune gastritis need lifelong intramuscular B12. Oral replacement is an option for deficiency caused by diet."
    },
    {
     "h": "The regimens",
     "t": "BNF hydroxocobalamin: with neurological involvement, 1 mg intramuscularly on alternate days until there is no further improvement, then 1 mg every 2 months. Without neurological involvement, 1 mg three times a week for 2 weeks, then 1 mg every 2–3 months (BNF)."
    },
    {
     "h": "The folate pitfall",
     "t": "BNF: folic acid should never be given alone to someone with B12 deficiency, because it can precipitate or worsen subacute combined degeneration of the cord. Check folate and ferritin, and treat any co-deficiency once B12 replacement has started."
    },
    {
     "h": "Follow-up",
     "t": "Recheck the FBC to confirm response, and review symptoms. Autoimmune gastritis is associated with other autoimmune conditions such as thyroid disease (check TFTs). Nerve damage may recover slowly and incompletely if treatment is delayed. NICE NG12 (updated April 2026) has no criterion for this presentation."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Denham, I’m Dr Lee. Can you see and hear me? … Good. Your blood results are back — what have you made of them so far?",
    "dom": "rto",
    "why": "Starts from her understanding"
   },
   {
    "who": "pt",
    "text": "You said my B12 came back low — but I eat meat, I’m not vegetarian, so I don’t really get it. Can’t I just take a tablet or eat better instead of injections? I really don’t like needles, and injections every few months sounds like a lot of hassle."
   },
   {
    "who": "dr",
    "text": "Those are really fair questions, and I’ll answer them properly. Can I first ask a few things about how you’ve been, because the answers change what I recommend? Then we’ll decide together.",
    "dom": "gs",
    "why": "Acknowledges her questions and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "You mentioned tiredness before. Have you had any tingling, numbness or pins and needles anywhere?",
    "dom": "tasks",
    "why": "Screens neurological symptoms"
   },
   {
    "who": "pt",
    "text": "Now you mention it, my feet tingle, and they’ve felt a bit numb."
   },
   {
    "who": "dr",
    "text": "Any trouble with balance — feeling unsteady, especially in the dark or with your eyes closed?",
    "dom": "tasks",
    "why": "Screens sensory ataxia and dorsal-column involvement"
   },
   {
    "who": "pt",
    "text": "Actually, yes. For a few months I’ve felt a bit unsteady on my feet."
   },
   {
    "who": "dr",
    "text": "Thank you, that’s important. Any problems with memory, mood or your eyesight?",
    "dom": "tasks",
    "why": "Completes the neurological screen"
   },
   {
    "who": "pt",
    "text": "Not that I’ve noticed. Just tired."
   },
   {
    "who": "dr",
    "text": "Do you take any regular medicines — especially metformin, or tablets for indigestion or acid?",
    "dom": "tasks",
    "why": "Reviews drug causes"
   },
   {
    "who": "pt",
    "text": "I’d have to double-check, but I don’t think so."
   },
   {
    "who": "dr",
    "text": "Have you had any stomach or bowel operations, or ongoing tummy symptoms like diarrhoea?",
    "dom": "tasks",
    "why": "Screens surgical and malabsorptive causes"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "What worries you most about all this?",
    "dom": "rto",
    "why": "Elicits concern"
   },
   {
    "who": "pt",
    "text": "Mostly the needles. And being stuck with injections for ever. I thought eating more red meat might fix it."
   },
   {
    "who": "dr",
    "text": "That’s a logical idea — if the problem were your diet, it might. How do you usually get on with needles?",
    "dom": "rto",
    "why": "Validates her idea and explores the needle aversion"
   },
   {
    "who": "pt",
    "text": "I just really don’t like them. I dread it."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Thank you for telling me — that helps us plan. Here’s the puzzle solved: because you eat a reasonable diet, the B12 is getting into your mouth, but most likely not into your body. The commonest reason is a condition where the immune system affects the stomach, so it can’t make a protein needed to absorb B12. It’s called pernicious anaemia, and there’s a blood test for it.",
    "dom": "tasks",
    "why": "Explains malabsorption and the likely cause in plain words"
   },
   {
    "who": "pt",
    "text": "So eating more won’t help?"
   },
   {
    "who": "dr",
    "text": "Not if that’s the cause — it passes through without being absorbed. And the tingling and wobbliness matter: low B12 can affect the nerves and the spinal cord. That’s why I don’t want to delay. Treated promptly, nerves usually improve; left, the damage can become permanent.",
    "dom": "tasks",
    "why": "Links neurological involvement to urgency honestly"
   },
   {
    "who": "pt",
    "text": "That’s scary. So it has to be injections?"
   },
   {
    "who": "dr",
    "text": "Given your nerve symptoms, injections are the treatment I’d strongly recommend. They go straight into the muscle, so they bypass the gut. It’s your decision, and I want you to have the full picture to make it.",
    "dom": "rto",
    "why": "Honest recommendation while respecting autonomy"
   },
   {
    "who": "pt",
    "text": "How often?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Because of the nerve symptoms, a more intensive start — an injection every other day until you stop improving — then a top-up every two months. The frequent phase doesn’t last for ever. The nurse can do them with you lying down if that helps, and it’s over in seconds.",
    "dom": "tasks",
    "why": "Correct neurological regimen with practical help for needle aversion"
   },
   {
    "who": "pt",
    "text": "That sounds more manageable. Okay — I’ll try it."
   },
   {
    "who": "dr",
    "text": "Thank you. I’ll also book you in to see me in person this week so I can examine your nerves and balance properly — I can’t do that over video — and send blood tests for the antibody, folate, iron, thyroid and coeliac disease.",
    "dom": "tasks",
    "why": "Face-to-face neuro examination and cause and co-deficiency work-up"
   },
   {
    "who": "pt",
    "text": "Should I take folic acid too? I’ve seen it in the chemist."
   },
   {
    "who": "dr",
    "text": "Not on its own, please. With low B12, folic acid alone can make the nerve problem worse. If your folate is low as well, we’ll treat it once the B12 injections have started.",
    "dom": "tasks",
    "why": "Avoids the folate pitfall"
   },
   {
    "who": "pt",
    "text": "I didn’t know that."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If the numbness spreads, your walking gets worse, you fall, or you notice weakness, memory or eyesight changes, contact us the same day. Please don’t drive if the numbness or unsteadiness affects your feel for the pedals.",
    "dom": "gs",
    "why": "Specific neurological safety-net and driving advice"
   },
   {
    "who": "pt",
    "text": "Okay, I’ll be careful."
   },
   {
    "who": "dr",
    "text": "To check I’ve explained it well, how would you describe the plan to someone at home?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "My body probably can’t absorb B12, so tablets won’t work. Injections every other day to start, then every two months. No folic acid on its own. Blood tests and you’ll check my nerves this week."
   },
   {
    "who": "dr",
    "text": "Exactly right. We’ll recheck your blood count after the first few weeks and go through the antibody result together. Anything else?",
    "dom": "gs",
    "why": "Defined follow-up"
   },
   {
    "who": "pt",
    "text": "No. Thank you for explaining why — it makes more sense now."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Started from her understanding of the result and her questions about tablets and injections.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Needle aversion, practical hassle of injections, driving and daily function.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the tingling feet and unsteadiness as neurological cues, and explored them.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (diet or a tablet will fix it); concern (needles, injections for ever); expectation (avoid injections).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Face-to-face neurological examination; anti-intrinsic factor antibody (NICE NG239), folate, ferritin, TFTs, coeliac serology (NICE NG20); FBC recheck.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Autoimmune gastritis vs other malabsorption vs drugs (metformin, acid suppression) vs diet; neuropathy vs subacute combined degeneration.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Recognised neurological involvement as urgent; no delay to treatment; no invented cancer referral.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "B12 deficiency with macrocytosis and neurological involvement, most likely autoimmune gastritis.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "IM hydroxocobalamin on the BNF neurological regimen, started promptly; practical plan for needle aversion.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Folic acid not given alone (BNF); co-deficiencies checked; autoimmune thyroid association.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named neurological warning signs; driving advice; FBC recheck; antibody results reviewed together; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Investigations & results",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Carol Denham",
    "age": "46 years · female",
    "pmh": [
     "Fatigue under investigation"
    ],
    "meds": [
     "Not listed — confirm"
    ],
    "allergy": "Not recorded",
    "recent": "FBC: macrocytosis. B12: low.",
    "reason": "\"Can’t I just take a tablet?\""
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open & agenda",
     "d": "Start from her questions. Promise to answer them after a few key questions."
    },
    {
     "t": "1–4",
     "h": "Neurology & cause",
     "d": "Tingling, numbness, unsteadiness, memory, vision. Medicines (metformin, acid suppression), surgery, bowel symptoms."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "Diet idea; fear of needles and injections for ever."
    },
    {
     "t": "6–10",
     "h": "Explain & plan",
     "d": "Absorption not intake. Nerve involvement makes it urgent. IM hydroxocobalamin neurological regimen; nurse-given. Face-to-face neuro exam; antibody, folate, ferritin, TFTs, coeliac. No folic acid alone."
    },
    {
     "t": "10–12",
     "h": "Safety-net & close",
     "d": "Neurological warning signs, driving, teach-back, FBC recheck and results review."
    }
   ],
   "wordPics": {
    "fail": "Agrees to oral B12 or dietary advice without asking about neurology; misses the tingling and unsteadiness; uses the non-neurological regimen; gives folic acid alone; pressures her or leaves the choice without honest information.",
    "pass": "Elicits the neurological symptoms, explains malabsorption, recommends IM hydroxocobalamin, checks intrinsic factor antibodies and folate, and avoids folate alone.",
    "exc": "All of the above, plus: uses the correct neurological regimen; turns her needle fear into a practical plan; examines in person promptly; explains why tablets fail in plain words; respects her autonomy while being clear; teach-back and a defined follow-up."
   },
   "avoid": [
    {
     "dont": "\"Sure, try eating more red meat and a B12 tablet.\"",
     "instead": "\"If your body can’t absorb it, more in your diet passes straight through — the injection bypasses the gut.\"",
     "why": "Diet or oral treatment will not correct malabsorptive deficiency."
    },
    {
     "dont": "\"I’ll start you on folic acid as well today.\"",
     "instead": "\"Not on its own — with low B12 that can make the nerve problem worse.\"",
     "why": "BNF: folic acid must never be given alone in B12 deficiency."
    },
    {
     "dont": "\"You have to have the injections.\"",
     "instead": "\"I’d strongly recommend them because of your nerve symptoms — it’s your decision, and I want you to have the full picture.\"",
     "why": "Honest recommendation without coercion respects autonomy."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Needle aversion",
     "t": "Dislike of needles is common and threatens adherence. Plan it with her: nurse-administered, lying down if it helps, a quick procedure."
    },
    {
     "h": "Practical burden",
     "t": "Frequent early injections need time off or flexible appointments; explain the phase is time-limited."
    }
   ],
   "legal": [
    {
     "h": "Driving",
     "t": "Drivers must not drive if a condition affects safe control of the vehicle. Advise her not to drive if numbness or unsteadiness affects her feel for the pedals, and to check DVLA guidance if symptoms persist."
    },
    {
     "h": "Informed decision",
     "t": "She has capacity and may decline injections. Explain the risks of undertreatment clearly, document the discussion, and keep the door open (GMC decision making and consent, 2020)."
    }
   ],
   "professional": [
    {
     "h": "Remote consulting limits",
     "t": "A neurological examination cannot be done by video; arrange it in person promptly."
    },
    {
     "h": "Results follow-up",
     "t": "Own the antibody and co-deficiency results and the FBC recheck; set a recall so maintenance injections are not missed."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Pernicious Anaemia Society for patient information and peer support; practice nurse for injections."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Tingling, numbness, unsteadiness, falls (neuropathy, subacute combined degeneration)",
     "Weakness, memory or mood change, visual loss",
     "Breathlessness or chest pain with severe anaemia"
    ],
    "psychosocial": [
     "Needle aversion",
     "Burden of frequent injections",
     "Driving and daily function with unsteadiness"
    ],
    "ice": [
     "Idea: “I eat meat, so eating more or a tablet should fix it”",
     "Concern: needles, injections for ever",
     "Expectation: to avoid injections"
    ]
   },
   "diagnosis": "B12 deficiency with macrocytosis and neurological involvement (peripheral neuropathy with sensory ataxia; possible subacute combined degeneration), most likely from malabsorption due to autoimmune gastritis in a meat-eater. Confirm the cause with intrinsic factor antibodies and check co-deficiencies.",
   "diagnosisLay": "“You’re eating enough B12, but your body probably can’t absorb it from the stomach. Low B12 is affecting the nerves in your feet and your balance, which is why we need to treat it properly and quickly.”",
   "management": {
    "reflectIce": "“You’d hoped a tablet or more meat would sort it, and you hate needles — that’s completely understandable. Let me explain why the injection is what works here, and how we can make it easier.”",
    "psychosocial": "Turn the needle fear into a plan (nurse-given, lying down if it helps, short procedure); stress the frequent phase is temporary; respect her decision.",
    "sharedPlan": [
     "IM hydroxocobalamin 1 mg on alternate days until no further improvement, then every 2 months (BNF, neurological regimen), started promptly",
     "Face-to-face neurological examination this week; anti-intrinsic factor antibody (NICE NG239), folate, ferritin, TFTs, coeliac serology (NICE NG20)",
     "No folic acid alone (BNF); treat co-deficiencies once B12 started; recheck FBC"
    ],
    "safetyNet": [
     "Spreading numbness, worse walking, falls, weakness, memory or visual change — same day",
     "No driving if pedal control is affected; results and response reviewed together"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Vitamin B12 deficiency",
    "s": "Visual algorithm · NICE NG239",
    "href": "algorithms/vitamin-b12-deficiency.html"
   },
   {
    "ic": "🗺️",
    "t": "Macrocytosis pathway",
    "s": "Visual algorithm · causes and work-up",
    "href": "algorithms/macrocytosis.html"
   },
   {
    "ic": "🗺️",
    "t": "Paraesthesia pathway",
    "s": "Visual algorithm · tingling and numbness",
    "href": "algorithms/paraesthesia.html"
   },
   {
    "ic": "📋",
    "t": "Anaemia",
    "s": "Case walkthrough · NICE NG239",
    "href": "../cases/anaemia.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed on two things: missing the neurology, and giving in to the request for tablets without explaining why they will not work. The patterns below are drawn from recurring SCA feedback.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting “I’ll eat better” and prescribing an oral B12 tablet.",
     "why": "“Management not in line with current UK best practice.” NICE NG239: deficiency from autoimmune gastritis needs lifelong IM replacement.",
     "fix": "Explain absorption, check intrinsic factor antibodies, and recommend IM hydroxocobalamin."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about tingling or balance.",
     "why": "“Did not gather sufficient information.” Neurological involvement changes the regimen and the urgency.",
     "fix": "Ask directly about pins and needles, numbness and unsteadiness, then examine in person."
    },
    {
     "dom": "tasks",
     "fail": "Using the non-neurological regimen (three times a week for 2 weeks, then 3-monthly) despite nerve symptoms.",
     "why": "BNF: neurological involvement needs alternate-day injections until no further improvement, then 2-monthly.",
     "fix": "Name the intensive regimen and why it applies to her."
    },
    {
     "dom": "tasks",
     "fail": "Starting folic acid alone because the folate might be low too.",
     "why": "BNF: folic acid alone in B12 deficiency can precipitate subacute combined degeneration.",
     "fix": "Start B12 first; treat folate once replacement has begun."
    },
    {
     "dom": "rto",
     "fail": "Brushing off the needle fear — “it’s only a tiny needle”.",
     "why": "“Did not respond to the patient’s concerns.” Her dislike of needles is real and threatens adherence.",
     "fix": "Plan it with her: nurse-given, lying down if it helps, and a temporary intensive phase."
    },
    {
     "dom": "gs",
     "fail": "No safety-net for worsening neurology and no follow-up of the antibody result.",
     "why": "Non-specific safety-netting and passive results handling are standard failing statements.",
     "fix": "Name the same-day neurological warning signs, recheck the FBC and review the results together."
    }
   ]
  }
 },
 "desogestrel-amenorrhoea": {
  "stem": {
   "name": "Megan Hollis",
   "age": "27-year-old woman",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "Desogestrel 75 micrograms progestogen-only pill, once daily — started about 8 months ago"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "Desogestrel started about 8 months ago. No bleeding problems recorded at the start.",
   "reason": "Periods have stopped on the mini-pill — is this normal, or could she be pregnant?"
  },
  "knowledge": {
   "guideline": "FSRH Progestogen-only Pills guideline (August 2022, amended April 2026) · FSRH Emergency Contraception guideline (2017, amended) · FSRH Problematic Bleeding with Hormonal Contraception (2015) · BNF",
   "summary": "Absent or infrequent bleeding is a common, harmless effect of desogestrel and not a sign the pill has failed — but amenorrhoea can also hide a pregnancy, so check adherence and test before reassuring.",
   "points": [
    {
     "h": "Bleeding changes are expected",
     "t": "Irregular, infrequent or absent bleeding is common on desogestrel and is not harmful. Absent periods do not mean the pill has stopped working. Explain this at the start of any POP and again when it happens."
    },
    {
     "h": "Reassure, but test first",
     "t": "FSRH POP (2022): amenorrhoea may mask a pregnancy. Ask about late or missed pills, vomiting or severe diarrhoea, new medicines (especially enzyme inducers) and pregnancy symptoms. If there is any doubt, a urine pregnancy test — reliable from 3 weeks after the last unprotected sex."
    },
    {
     "h": "Desogestrel missed-pill rule",
     "t": "FSRH POP (2022): a desogestrel pill more than 12 hours late counts as missed — take it as soon as remembered, continue daily, and use condoms or avoid sex for 48 hours. Emergency contraception may be needed if she had sex after the missed pill before 48 hours of correct pill-taking."
    },
    {
     "h": "Vomiting and interactions",
     "t": "Vomiting soon after a pill or severe diarrhoea may stop absorption — follow the FSRH POP time limits and treat it as a possible missed pill. Enzyme-inducing drugs reduce effectiveness; check any new medicine against the BNF."
    },
    {
     "h": "Wider sexual health",
     "t": "Offer STI testing according to risk and check that cervical screening is up to date. If the bleeding pattern bothers her, discuss other methods including the implant or intrauterine options."
    },
    {
     "h": "When to act differently",
     "t": "A positive test needs same-week review of options and early pregnancy care. Pelvic pain with a positive test needs same-day assessment to exclude ectopic pregnancy."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Megan, I’m Dr Lee. What would you like to talk about today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "I’ve been on the mini-pill, desogestrel, for about eight months and my periods have basically stopped. I read that can happen, but now I’m paranoid — what if I’m pregnant and don’t know?"
   },
   {
    "who": "dr",
    "text": "I’m glad you asked rather than worrying on your own. Periods stopping is often normal on this pill, but the right thing is to make sure you’re not pregnant first, then I can reassure you properly. I’d like to ask a few questions, then we’ll agree a plan. Is that alright?",
    "dom": "gs",
    "why": "States the “reassure but test first” principle and the agenda"
   },
   {
    "who": "pt",
    "text": "Yes, that’s what I want."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "How do you usually take your pill — roughly the same time each day?",
    "dom": "rto",
    "why": "Open question about her routine before specifics"
   },
   {
    "who": "pt",
    "text": "Mostly in the morning. I think I’ve been good, but I can’t swear I’ve never been late."
   },
   {
    "who": "dr",
    "text": "That’s honest, and very normal. With this pill you have a 12-hour window. Can you remember any time you were more than 12 hours late, or missed one completely?",
    "dom": "tasks",
    "why": "Screens late and missed pills with the correct desogestrel window"
   },
   {
    "who": "pt",
    "text": "Not that I remember, but I couldn’t be certain."
   },
   {
    "who": "dr",
    "text": "Any vomiting or bad diarrhoea in the last few months, or any new medicines — including herbal remedies like St John’s wort?",
    "dom": "tasks",
    "why": "Absorption problems and enzyme-inducing interactions"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "And any signs that might suggest pregnancy — sickness, sore breasts, needing to wee more, feeling different?",
    "dom": "tasks",
    "why": "Asks about pregnancy symptoms"
   },
   {
    "who": "pt",
    "text": "Not really. I’m just anxious."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "What’s behind the worry — what would a pregnancy mean for you right now?",
    "dom": "rto",
    "why": "Explores the emotional driver without assuming"
   },
   {
    "who": "pt",
    "text": "It’s not the right time. I just want to know the pill’s actually working."
   },
   {
    "who": "dr",
    "text": "That makes complete sense. Let’s get you a definite answer rather than a guess.",
    "dom": "rto",
    "why": "Validates and commits to resolving the uncertainty"
   },
   {
    "phase": "Explanation",
    "clock": "5–8 min",
    "who": "dr",
    "text": "Because you can’t be completely sure about timing, I’d like you to do a urine pregnancy test today. They’re reliable from three weeks after sex without extra protection. Do you have one at home, or shall we arrange one here?",
    "dom": "tasks",
    "why": "Tests first; explains reliability window; practical on video"
   },
   {
    "who": "pt",
    "text": "I can get one from the chemist on the way home."
   },
   {
    "who": "dr",
    "text": "Perfect. Now, why periods stop: this pill thins the womb lining, so there’s often very little to shed. Bleeding changes are really common — some women bleed irregularly, some rarely, some not at all. None of that is harmful, and it doesn’t mean the pill has stopped working.",
    "dom": "tasks",
    "why": "Accurate explanation of expected bleeding patterns"
   },
   {
    "who": "pt",
    "text": "So no period doesn’t mean something’s wrong?"
   },
   {
    "who": "dr",
    "text": "Exactly — once the test is negative, you can trust that. Just so you’re covered in future: if you’re ever more than 12 hours late, take the pill as soon as you remember, carry on as normal, and use condoms for the next two days. If you had sex in that time, get in touch because you might need emergency contraception. Being sick soon after a pill or bad diarrhoea can count as missing one too.",
    "dom": "tasks",
    "why": "FSRH missed-pill rules and emergency contraception"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "While we’re talking, can I check a couple of other things? Would an STI check be useful for you, and is your smear test up to date?",
    "dom": "tasks",
    "why": "Wider sexual-health review with permission"
   },
   {
    "who": "pt",
    "text": "I’d need to check on the smear. An STI test wouldn’t hurt."
   },
   {
    "who": "dr",
    "text": "I’ll send you the link for a sexual-health test kit, and we can check your screening status on the record. And overall — does this pill suit you? If remembering it every day or the bleeding pattern ever bothers you, there are options like the implant or a coil that you don’t have to think about.",
    "dom": "rto",
    "why": "Method review and LARC offered, not imposed"
   },
   {
    "who": "pt",
    "text": "I’m happy with it for now, I think. Maybe I’ll look at the implant."
   },
   {
    "who": "dr",
    "text": "That’s fine — I’ll send you some information and you can decide in your own time.",
    "dom": "gs",
    "why": "Leaves the choice with her"
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "So — can you tell me what you’re going to do after this call?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Do a test today. If it’s negative, stop worrying — no periods is normal on this. If I’m more than 12 hours late, condoms for two days."
   },
   {
    "who": "dr",
    "text": "Exactly. If the test is positive, contact us straight away so we can talk through options — and if you ever have a positive test with tummy pain on one side or bleeding, that needs urgent same-day assessment. Otherwise, keep going as you are.",
    "dom": "gs",
    "why": "Safety-net for positive result and ectopic warning"
   },
   {
    "who": "pt",
    "text": "Thanks. I feel much calmer."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her describe the bleeding change and the worry before narrowing down.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Her pill routine and what a pregnancy would mean to her now.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I can’t swear I’ve never been late” and “paranoid”, and acted on both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (could be normal or pregnancy), concern (unknown pregnancy), expectation (to know if it is normal).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Urine pregnancy test with its 3-week reliability window; STI testing by risk; screening status.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Expected progestogenic amenorrhoea versus pregnancy from late pills, vomiting or interacting drugs.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Excludes pregnancy before reassuring; ectopic warning if positive with pain or bleeding.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Probable desogestrel-related amenorrhoea, confirmed once the test is negative.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Test first, explained reassurance, FSRH missed-pill and emergency contraception rules, method review with LARC offered.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Interactions (enzyme inducers, St John’s wort), absorption problems, STI and screening review.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "What to do if positive, when to retest, and urgent review for pain or bleeding with a positive test.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health"
   ],
   "stem": {
    "name": "Megan Hollis",
    "age": "27 years · female",
    "pmh": [
     "Nil significant recorded"
    ],
    "meds": [
     "Desogestrel 75 micrograms daily (about 8 months)"
    ],
    "allergy": "NKDA",
    "recent": "Desogestrel started about 8 months ago. No pregnancy test on record.",
    "reason": "“My periods have stopped on the mini-pill — is that normal, or am I pregnant?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open & listen",
     "d": "She tells you she is paranoid about pregnancy. State the principle: test first, then reassure."
    },
    {
     "t": "1–4",
     "h": "Check use",
     "d": "Routine, late or missed pills (12-hour window), vomiting or diarrhoea, new medicines, pregnancy symptoms."
    },
    {
     "t": "4–5",
     "h": "ICE",
     "d": "What a pregnancy would mean now; she wants to trust the pill."
    },
    {
     "t": "5–9",
     "h": "Test & explain",
     "d": "Urine test today, reliable from 3 weeks. Why periods stop on desogestrel. Missed-pill and EC rules."
    },
    {
     "t": "9–12",
     "h": "Review & close",
     "d": "STI check, screening status, method review with LARC offered, teach-back, positive-test and ectopic safety-net."
    }
   ],
   "wordPics": {
    "fail": "“That’s just the pill, don’t worry” with no questions and no test; wrong missed-pill window; no emergency contraception advice; no safety-net.",
    "pass": "Asks about missed pills and symptoms, arranges a pregnancy test, explains that amenorrhoea is expected, and gives the 12-hour rule.",
    "exc": "All of the above, plus: explains why periods stop, the 3-week test window, the 48-hour and EC rules; checks interactions; offers STI testing and screening review; discusses LARC without pressure; teach-back; clear plan if the test is positive, including the ectopic warning."
   },
   "avoid": [
    {
     "dont": "\"That’s completely normal on the mini-pill — nothing to worry about.\"",
     "instead": "\"It’s usually normal — let’s make sure with a test, then I can reassure you properly.\"",
     "why": "Blind reassurance is the trap in this station; it fails Tasks."
    },
    {
     "dont": "\"You have three hours to take it.\"",
     "instead": "\"With desogestrel you have a 12-hour window.\"",
     "why": "The 3-hour rule is for traditional POPs; wrong rules undermine safe use."
    },
    {
     "dont": "\"You should really switch to the implant.\"",
     "instead": "\"If the bleeding or daily pill ever bothers you, the implant or a coil are options.\"",
     "why": "She is happy with her method; pushing LARC is not patient-centred."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Reproductive choice",
     "t": "A possible pregnancy carries different meaning for each woman. Ask, don’t assume, and be ready to discuss all options if the test is positive."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality",
     "t": "Contraception and sexual-health consultations are confidential; GMC confidentiality guidance applies. Sexual-health clinic records are held separately."
    }
   ],
   "professional": [
    {
     "h": "Safe reassurance",
     "t": "Reassurance must rest on evidence — here, a negative test and correct use. Document the missed-pill discussion and the advice given."
    },
    {
     "h": "Making every contact count",
     "t": "Use contraception reviews to check STI risk, cervical screening and method satisfaction."
    }
   ],
   "community": [
    {
     "h": "Services",
     "t": "Community pharmacy for pregnancy tests and emergency contraception; local sexual-health services and online STI testing; LARC fitting services."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Any doubt about adherence, vomiting or interacting drugs — test before reassuring",
     "Positive test with one-sided pelvic pain or bleeding — same-day assessment for ectopic pregnancy",
     "Sex after a missed pill before 48 hours of correct use — consider emergency contraception"
    ],
    "psychosocial": [
     "Pill routine and how she remembers it",
     "What a pregnancy would mean to her now",
     "Whether the method suits her"
    ],
    "ice": [
     "Idea: “No periods might be normal — or I might be pregnant.”",
     "Concern: an unknown pregnancy",
     "Expectation: to know whether this is normal"
    ]
   },
   "diagnosis": "Amenorrhoea on desogestrel — very likely an expected progestogenic effect, to be confirmed by excluding pregnancy.",
   "diagnosisLay": "“This pill keeps the lining of the womb thin, so there’s often nothing to shed. That’s why periods can stop. It’s safe, and it doesn’t mean the pill isn’t working — once the test confirms you’re not pregnant.”",
   "management": {
    "reflectIce": "“You’re worried you could be pregnant without knowing — so let’s find out for certain today, rather than me just telling you not to worry.”",
    "psychosocial": "Resolve the anxiety with a test, give her the rules to feel in control, and review the method without pressure.",
    "sharedPlan": [
     "Urine pregnancy test today (reliable from 3 weeks after unprotected sex)",
     "If negative: continue desogestrel; reinforce the 12-hour, 48-hour and EC rules",
     "STI testing by risk; check cervical screening; information on implant and intrauterine options"
    ],
    "safetyNet": [
     "Positive test — contact the practice straight away",
     "Positive test with pain or bleeding — urgent same-day assessment"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Contraception",
    "s": "Case walkthrough · FSRH",
    "href": "../cases/contraception.html"
   },
   {
    "ic": "💠",
    "t": "Contraception protocol",
    "s": "POP rules · missed pills · LARC",
    "href": "management/contraception.html"
   },
   {
    "ic": "📋",
    "t": "Amenorrhoea",
    "s": "Case walkthrough · causes and tests",
    "href": "../cases/amenorrhoea.html"
   },
   {
    "ic": "🗺️",
    "t": "Amenorrhoea pathway",
    "s": "Visual algorithm · pregnancy first",
    "href": "algorithms/amenorrhoea.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you reassure safely. Candidates fail by reassuring without testing, by quoting the wrong pill rules, or by turning a simple worry into a lecture. Each pattern below is fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "“That’s just the pill” — no adherence questions and no test.",
     "why": "Amenorrhoea can mask pregnancy (FSRH POP 2022). Blind reassurance is unsafe.",
     "fix": "Ask about late pills, vomiting, medicines and symptoms; arrange a pregnancy test."
    },
    {
     "dom": "tasks",
     "fail": "Giving the 3-hour window or forgetting the 48-hour rule.",
     "why": "Desogestrel has a 12-hour window; late pills need 48 hours of extra precautions.",
     "fix": "“More than 12 hours late: take it, carry on, condoms for two days.”"
    },
    {
     "dom": "tasks",
     "fail": "Testing too early and reassuring on a negative result.",
     "why": "A urine test is reliable only from 3 weeks after the last unprotected sex.",
     "fix": "Explain the window and when to repeat the test if needed."
    },
    {
     "dom": "rto",
     "fail": "Ignoring “I’m paranoid” and moving straight to pill rules.",
     "why": "“Does not respond to the patient’s concerns.” The anxiety is the reason she came.",
     "fix": "Ask what a pregnancy would mean to her, then commit to a definite answer."
    },
    {
     "dom": "gs",
     "fail": "Turning the consultation into a lecture on every contraceptive method.",
     "why": "Poor time management and not tailored to her agenda.",
     "fix": "Offer the implant or coil briefly, send information, and let her decide."
    },
    {
     "dom": "gs",
     "fail": "No plan for a positive result.",
     "why": "Incomplete safety-netting.",
     "fix": "“If it’s positive, contact us today — and pain or bleeding with a positive test needs same-day assessment.”"
    }
   ]
  }
 },
 "ear-scaly-lump-scc": {
  "stem": {
   "name": "Stanley Frost",
   "age": "73-year-old man",
   "pmh": [
    "Lesion on bald scalp treated with freezing in the past (details not on this summary)",
    "Retired greenkeeper — lifelong outdoor work"
   ],
   "meds": [
    "Not listed on this summary — confirm at the consultation"
   ],
   "allergy": "Allergy status not recorded — check before prescribing",
   "recent": "No previous entry about the right ear.",
   "reason": "Video consultation booked about his knee."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) · BAD guidelines for cutaneous squamous cell carcinoma (2020) · BAD guidelines for actinic keratosis (2017)",
   "summary": "A crusted, enlarging, tender lump on the ear that has not healed for four months, in a fair-skinned lifelong outdoor worker, is a keratinocyte cancer until proven otherwise. The features favour squamous cell carcinoma, which is referred on the suspected cancer pathway.",
   "points": [
    {
     "h": "Non-healing is the red flag",
     "t": "Ordinary grazes heal within weeks even if knocked now and then. A lesion that crusts, bleeds, partly heals and breaks down again over months on sun-exposed skin needs a specialist diagnosis, whatever the patient’s explanation."
    },
    {
     "h": "SCC or BCC",
     "t": "Squamous cell carcinoma tends to grow over weeks to months and is often tender, keratotic or crusted, or an ulcer. Basal cell carcinoma is usually slow, pearly, with a rolled edge and fine vessels, and may ulcerate centrally. Keratoacanthoma and amelanotic melanoma are in the differential; neither is safe to watch."
    },
    {
     "h": "The NICE NG12 (updated April 2026) skin criteria",
     "t": "NICE NG12 (updated April 2026): consider a suspected cancer pathway referral (appointment within 2 weeks) for a skin lesion that raises the suspicion of squamous cell carcinoma. For a suspected basal cell carcinoma, consider routine referral, and use the suspected cancer pathway only if there is particular concern that a delay could have a significant impact because of factors such as site or size."
    },
    {
     "h": "Why the ear matters",
     "t": "BAD 2020 treats the ear and lip as high-risk sites for cutaneous SCC. Examine and record the lesion (site, size, appearance) and feel the draining nodes: pre- and post-auricular, parotid and neck. A video call can show the lesion but cannot replace palpation, so arrange a face-to-face examination promptly."
    },
    {
     "h": "Field change",
     "t": "Actinic keratoses and sun-damaged skin around the lesion mark cumulative UV damage and raise the chance of further skin cancers. BAD 2017: treat or monitor actinic keratoses, advise sun protection, and check the rest of the sun-exposed skin."
    },
    {
     "h": "Prevention and follow-up",
     "t": "Hat with a brim, high-factor broad-spectrum sunscreen on the ears, scalp and face, and shade in the middle of the day. Anyone with one keratinocyte cancer is at risk of more: teach self-checks of the scalp, ears and hands."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Frost, I’m Dr Lee. Can you see and hear me all right? … Good. I know you’ve booked about your knee, and we will deal with it. You mentioned your wife wanted me to see your ear too — can you tell me about both, so we can plan the time?",
    "dom": "gs",
    "why": "Checks the video link and gathers the whole agenda at the start"
   },
   {
    "who": "pt",
    "text": "The knee’s the main thing, doc. The ear’s just a scab that won’t heal — I keep catching it with my glasses so it never gets a chance. It’ll sort itself out, won’t it? Don’t make a fuss."
   },
   {
    "who": "dr",
    "text": "I hear you — you don’t want a fuss. Can I spend a couple of minutes on the ear first, then give the knee proper attention? Something that hasn’t healed for a while is worth a careful look.",
    "dom": "rto",
    "why": "Respects his wish while negotiating the order of the agenda"
   },
   {
    "who": "pt",
    "text": "If you must. Go on then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "How long has it been there, and what has it been doing?",
    "dom": "tasks",
    "why": "Opens the history of the lesion"
   },
   {
    "who": "pt",
    "text": "About four months. It bleeds if I knock it, scabs over, looks like it’s going, then it breaks down again. It’s never actually healed."
   },
   {
    "who": "dr",
    "text": "Has it changed in size, and is it sore?",
    "dom": "tasks",
    "why": "Asks about growth and tenderness, which point towards SCC"
   },
   {
    "who": "pt",
    "text": "It’s got a bit bigger, I’d say. It’s tender if I press it."
   },
   {
    "who": "dr",
    "text": "Could you tilt the camera so I can see it, as close as the picture will focus? … Thank you. I can see a crusted, raised lump on the rim of your right ear, and rough, sun-damaged skin around it.",
    "dom": "tasks",
    "why": "Uses the video to inspect and describes the lesion"
   },
   {
    "who": "pt",
    "text": "That’s the one. Looks worse on the screen, doesn’t it?"
   },
   {
    "who": "dr",
    "text": "Tell me about the sun over the years. You were a greenkeeper — outdoors most days?",
    "dom": "tasks",
    "why": "Takes the occupational and UV history"
   },
   {
    "who": "pt",
    "text": "Forty-odd years on golf courses. Never wore a hat much. Fair skin — I always burnt. I had a spot frozen off my head a while back."
   },
   {
    "who": "dr",
    "text": "That’s really useful. Have you noticed any lumps near your ear or in your neck, or any other sores that won’t heal?",
    "dom": "tasks",
    "why": "Screens for nodal spread and other lesions"
   },
   {
    "who": "pt",
    "text": "Not that I’ve noticed."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said your wife sent you in with it. What does she think — and, honestly, what have you been thinking?",
    "dom": "rto",
    "why": "Follows the cue that someone else is worried and explores his own view"
   },
   {
    "who": "pt",
    "text": "She keeps going on that it’s been too long. I suppose… I’ve wondered. But I didn’t want to be told something I don’t want to hear."
   },
   {
    "who": "dr",
    "text": "Thank you for being honest. That’s a very human reaction. What would you want from me today — the straight version, or the gentle version?",
    "dom": "rto",
    "why": "Validates avoidance and asks how he wants information"
   },
   {
    "who": "pt",
    "text": "Straight. I’d rather know."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Then here it is straight. Ordinary skin heals, even if you knock it now and then. A spot that keeps breaking down and growing over four months, on sun-damaged skin, is behaving like a skin cancer. The most likely type is called a squamous cell carcinoma.",
    "dom": "tasks",
    "why": "Names the working diagnosis honestly and explains why"
   },
   {
    "who": "pt",
    "text": "Cancer? From a scab?"
   },
   {
    "who": "dr",
    "text": "It can look just like a scab — that’s why it’s easy to miss. The good news is these are usually very treatable, especially when they’re dealt with early, and the usual treatment is a small operation to remove it. But this is one to act on now, not to leave to heal.",
    "dom": "rto",
    "why": "Balances honesty with realistic hope"
   },
   {
    "who": "pt",
    "text": "What happens next, then?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’m going to refer you today on the urgent suspected cancer pathway to the skin team, so you’re seen within two weeks. I also want to see you in person this week, to feel the glands around your ear and neck — I can’t do that over video — and to look at your knee properly at the same visit.",
    "dom": "tasks",
    "why": "Suspected cancer pathway referral per NICE NG12 (updated April 2026), plus face-to-face node examination"
   },
   {
    "who": "pt",
    "text": "Two birds with one stone. That suits me."
   },
   {
    "who": "dr",
    "text": "Could you take a clear photo of the ear and send it to the surgery? It helps the specialists. Until then, keep it clean and covered, and try moving your glasses arm or padding it so it isn’t rubbed.",
    "dom": "tasks",
    "why": "Practical steps that support the referral and wound care"
   },
   {
    "who": "pt",
    "text": "My wife can do the photo. She’ll be glad."
   },
   {
    "who": "dr",
    "text": "She’ll be glad you listened to her. One more thing for the future: your skin has had a lot of sun, so the risk of more of these is higher. A hat with a brim and high-factor sun cream on your ears, scalp and face, even on cloudy days, and have a look at your scalp and hands every month or so.",
    "dom": "gs",
    "why": "Prevention and self-surveillance tailored to him"
   },
   {
    "who": "pt",
    "text": "Right. The wife will make sure of that too."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If it suddenly grows, bleeds heavily, or you notice a new lump by your ear or in your neck before the appointment, ring us straight away. And if you haven’t heard about the appointment within a week, ring us so we can chase it.",
    "dom": "gs",
    "why": "Specific safety-net and ownership of the referral"
   },
   {
    "who": "pt",
    "text": "Will do."
   },
   {
    "who": "dr",
    "text": "To check I’ve explained it well, what will you tell your wife tonight?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "That she was right. It might be a skin cancer, probably the treatable sort, and I’m being seen urgently in two weeks. I’m coming in this week for you to feel my neck and look at my knee. Hat and sun cream."
   },
   {
    "who": "dr",
    "text": "Spot on. You did the right thing showing me. I’ll see you this week — and we’ll go through whatever the skin team finds together. Anything else before we finish?",
    "dom": "gs",
    "why": "Confirms follow-up and continuity"
   },
   {
    "who": "pt",
    "text": "No — thanks, doc. Better to know."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Gathered the full agenda at the start; negotiated looking at the ear first without dismissing the knee.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Lifelong outdoor work, sun habits, his wife’s concern, his wish to avoid a fuss, and how he likes information given.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “it won’t heal” and “the wife told me” as cues, and his quiet worry behind the minimisation.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a scab he keeps knocking); concern (being told bad news, a fuss); expectation (reassurance, focus on the knee).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Inspected via the camera; arranged face-to-face palpation of the pre/post-auricular, parotid and cervical nodes; photo for the referral.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "SCC vs BCC vs keratoacanthoma vs amelanotic melanoma; used growth, tenderness and crusting to weigh them.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about nodes and other non-healing lesions; knew ear SCC can spread; did not accept watch-and-wait.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Likely cutaneous SCC on a high-risk site, stated plainly with realistic hope.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Suspected cancer pathway referral today (NICE NG12 (updated April 2026)); wound care; glasses adjustment; sun protection.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Actinic keratoses and field change (BAD 2017); the knee dealt with at the same face-to-face visit.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named changes that warrant sooner contact; told him to chase the appointment if not heard within a week; teach-back; continuity.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Stanley Frost",
    "age": "73 years · male",
    "pmh": [
     "Previous scalp lesion treated with cryotherapy",
     "Retired greenkeeper"
    ],
    "meds": [
     "Not listed — confirm"
    ],
    "allergy": "Not recorded",
    "recent": "No entries about the ear. Booked as a video consultation.",
    "reason": "\"My knee\" — booked by the patient."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open & set agenda",
     "d": "Get both problems on the table. Agree to look at the ear first and promise the knee its time."
    },
    {
     "t": "1–4",
     "h": "Lesion history + camera",
     "d": "Duration, growth, bleeding, tenderness, never healed. Ask him to angle the camera. Sun and occupational history, previous frozen lesion, lumps in the neck."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "Why did his wife send him? What has he been thinking? Ask how he wants the news — straight or gentle."
    },
    {
     "t": "6–10",
     "h": "Explain & plan",
     "d": "Name likely SCC honestly with realistic hope. Suspected cancer pathway today. Face-to-face this week for nodes and the knee. Photo, wound care, sun protection."
    },
    {
     "t": "10–12",
     "h": "Safety-net & close",
     "d": "What would warrant sooner contact; chase if no appointment within a week; teach-back; continuity."
    }
   ],
   "wordPics": {
    "fail": "Accepts “just a scab” and advises leaving it to heal or a cream; or ignores the ear to finish the knee; no sun history; no plan to examine nodes; no referral or a routine one; no safety-net.",
    "pass": "Takes the ear seriously, gathers the lesion and sun history, recognises likely SCC, makes a suspected cancer pathway referral, arranges node examination and gives basic sun advice and a safety-net.",
    "exc": "All of the above, plus: negotiates the agenda without losing the knee; draws out his quiet worry and asks how he wants news; names the diagnosis honestly with realistic hope; combines the node check and knee in one face-to-face visit; teach-back and ownership of the referral."
   },
   "avoid": [
    {
     "dont": "\"It’s probably just a scab — keep it covered and see how it goes.\"",
     "instead": "\"Ordinary skin heals. A spot that keeps breaking down for four months needs a specialist look.\"",
     "why": "Watch-and-wait on a likely SCC is unsafe management."
    },
    {
     "dont": "\"It looks like a BCC, those are slow, so I’ll send a routine referral.\"",
     "instead": "\"Because it’s on your ear, it’s growing and it’s tender, I’m referring you urgently.\"",
     "why": "Growth, tenderness and crusting on the ear favour SCC, which NICE NG12 (updated April 2026) refers on the suspected cancer pathway."
    },
    {
     "dont": "\"We’ll deal with the ear another time — let’s do your knee.\"",
     "instead": "\"Can I spend a couple of minutes on the ear first, then give your knee proper attention?\"",
     "why": "The incidental problem is the dangerous one; it must be addressed without dropping his own agenda."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Occupational sun exposure",
     "t": "Decades of outdoor work with little sun protection is the key risk. Many outdoor workers underplay skin changes; his wife’s push is an asset — involve her with his permission."
    },
    {
     "h": "Avoidance",
     "t": "“Don’t make a fuss” often hides fear of bad news. Asking how he wants information given lets him hear it."
    }
   ],
   "legal": [
    {
     "h": "Consent and remote photographs",
     "t": "Get his consent before a photo of the lesion goes into the record or with the referral, and store it securely in the clinical system."
    }
   ],
   "professional": [
    {
     "h": "Safety-netting a referral",
     "t": "Good practice is to track suspected cancer referrals and tell the patient to chase if he hears nothing. Document the lesion description, the NICE NG12 (updated April 2026) basis and the advice given (GMC Good Medical Practice 2024)."
    },
    {
     "h": "Limits of video",
     "t": "Recognise what cannot be done remotely — palpating nodes — and arrange face-to-face examination rather than relying on the screen alone."
    }
   ],
   "community": [
    {
     "h": "Patient resources",
     "t": "British Association of Dermatologists patient information on squamous cell carcinoma, actinic keratoses and sun protection; the NHS sun-safety advice pages."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Non-healing for weeks to months, enlarging, bleeding or tender lesion on sun-exposed skin",
     "High-risk site: ear or lip",
     "New lumps near the ear or in the neck (possible nodal spread)",
     "Pigmented or changing lesion — think melanoma"
    ],
    "psychosocial": [
     "Lifelong outdoor work and sun habits; fair skin; previous treated lesion",
     "His wife’s concern and his wish to avoid a fuss",
     "Practical issues: glasses rubbing the ear, getting to appointments, the knee"
    ],
    "ice": [
     "Idea: “Just a scab I keep knocking with my glasses”",
     "Concern: being told something he doesn’t want to hear; making a fuss",
     "Expectation: reassurance about the ear and attention to his knee"
    ]
   },
   "diagnosis": "A crusted, enlarging, tender lesion that has not healed for four months on the helix of a sun-damaged man is most likely a cutaneous squamous cell carcinoma; BCC, keratoacanthoma and amelanotic melanoma are the main alternatives. The ear is a high-risk site, so examine the nodes and refer on the suspected cancer pathway.",
   "diagnosisLay": "“Normal skin heals even if you knock it. This spot keeps breaking down and growing, which is how a common type of skin cancer behaves. It’s usually very treatable, often with a small operation, but it needs a specialist to see it soon rather than waiting for it to heal.”",
   "management": {
    "reflectIce": "“You thought it was just a scab you keep catching with your glasses — and I understand why. But your wife was right to send you in, and you were right to show me.”",
    "psychosocial": "Give the news the way he asked — straight — with realistic hope. Combine the node check and the knee in one visit so the practical burden is low, and involve his wife if he wishes.",
    "sharedPlan": [
     "Suspected cancer pathway referral today for suspected SCC (NICE NG12 (updated April 2026)) with a photo, with consent",
     "Face-to-face this week: lesion, regional nodes, other sun-exposed skin, and the knee",
     "Keep the lesion clean and covered, stop the glasses rubbing it; hat and high-factor sunscreen; actinic keratosis care (BAD 2017)"
    ],
    "safetyNet": [
     "Rapid growth, heavy bleeding or a new lump near the ear or in the neck — contact the surgery straight away",
     "No appointment letter within a week — ring the surgery to chase; review the outcome together"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Skin lesions pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) skin",
    "href": "algorithms/pigmented-skin-lesions.html"
   },
   {
    "ic": "💠",
    "t": "Actinic keratosis",
    "s": "Protocol · field change · SCC risk",
    "href": "management/actinic-keratosis.html"
   },
   {
    "ic": "🗺️",
    "t": "Lymphadenopathy pathway",
    "s": "Visual algorithm · neck lumps",
    "href": "algorithms/lymphadenopathy.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed when the candidate is steered by the patient’s framing — a scab, a knee — and never treats the ear as a possible cancer. The patterns below are drawn from recurring SCA feedback.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting “I keep knocking it” and advising him to leave it to heal, or prescribing an antibiotic or steroid cream.",
     "why": "“Management not in line with current UK best practice.” A four-month non-healing lesion on sun-damaged skin needs referral, not treatment trials.",
     "fix": "“Normal skin heals even if you catch it. This hasn’t in four months, so I want a specialist to see it.”"
    },
    {
     "dom": "tasks",
     "fail": "Labelling it a BCC and making a routine referral.",
     "why": "Growth, tenderness and crusting on the ear favour SCC; NICE NG12 (updated April 2026) supports a suspected cancer pathway referral for suspected SCC.",
     "fix": "Say the discriminating features aloud, then refer on the suspected cancer pathway."
    },
    {
     "dom": "tasks",
     "fail": "Never considering the nodes, or claiming to have examined them over video.",
     "why": "“Did not gather sufficient information to make a safe diagnosis.” Ear SCC can spread to regional nodes, and palpation needs a face-to-face visit.",
     "fix": "Ask about lumps now and book an in-person examination this week."
    },
    {
     "dom": "rto",
     "fail": "Dropping the knee entirely, or rushing the ear to get back to the knee.",
     "why": "“Did not respond to the patient’s agenda.” He came about the knee; ignoring it loses his trust.",
     "fix": "Agree the order at the start, and fold the knee into the face-to-face visit."
    },
    {
     "dom": "rto",
     "fail": "Blurting “this is cancer” to a man who has spent months avoiding the thought — or hiding the word altogether.",
     "why": "Both extremes fail: shock causes disengagement, vagueness leaves him unprepared.",
     "fix": "Ask how he wants the news, then name it honestly with realistic hope: “usually very treatable, especially dealt with early.”"
    },
    {
     "dom": "gs",
     "fail": "Closing with “the hospital will be in touch” and no safety-net.",
     "why": "Non-specific safety-netting and no ownership of the referral are standard failing statements.",
     "fix": "Name what would warrant sooner contact, tell him to chase if nothing arrives within a week, and use teach-back."
    }
   ]
  }
 },
 "hrt-breast-cancer-numbers": {
  "stem": {
   "name": "Frances Liddell",
   "age": "54-year-old woman",
   "pmh": [
    "Menopausal symptoms — severe, now well controlled on HRT"
   ],
   "meds": [
    "HRT — systemic (preparation as per repeat list)"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "Symptoms much improved on HRT. No concerns documented at last HRT review.",
   "reason": "Wants a straight answer on whether HRT causes breast cancer, after a friend’s comment and a newspaper headline."
  },
  "knowledge": {
   "guideline": "MHRA Drug Safety Update August 2019 (HRT and breast cancer) · NICE NG23 (2015, updated November 2024 and April 2026) · British Menopause Society Fast Facts: HRT and breast cancer risk (2025)",
   "summary": "The honest answer is a number, not a yes or no. Systemic HRT carries a small, duration-dependent increase in breast cancer risk, largest with combined HRT; in absolute terms most women who take it are not harmed by it.",
   "points": [
    {
     "h": "The baseline",
     "t": "MHRA August 2019: of 1000 women aged 50–69 who never use HRT, about 63 are diagnosed with breast cancer over those 20 years (about 1 in 16)."
    },
    {
     "h": "Five years from age 50",
     "t": "MHRA August 2019: extra cases per 1000 women over the same 20 years — about 5 with oestrogen-only, 14 with sequential combined (progestogen part of the month) and 20 with continuous combined HRT. Ten years of use roughly doubles these."
    },
    {
     "h": "Type, route and stopping",
     "t": "MHRA 2019 found increased risk with all systemic HRT, whatever the oestrogen, progestogen or route; no increase was found with low-dose vaginal oestrogen. Some excess risk persists for more than 10 years after stopping. NICE NG23 states oestrogen-only HRT is associated with little or no change in risk, and combined HRT with an increase related to duration."
    },
    {
     "h": "Relative risk misleads",
     "t": "Use natural frequencies (“out of 1000 women like you”) with the same time frame for baseline and extra cases. A percentage increase sounds far larger than the absolute change."
    },
    {
     "h": "Context, not dismissal",
     "t": "BMS Fast Facts (2025): the excess risk with 5 years of combined HRT at 50–59 is of a similar size to that linked with obesity. Modifiable factors — weight, alcohol, activity — are worth addressing whatever she decides."
    },
    {
     "h": "Keep it safe",
     "t": "Review HRT at least yearly; continue NHS breast screening; report breast changes. NICE NG23 (April 2026): report unscheduled bleeding beyond the first 6 months or 3 months after a change."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Frances, I’m Dr Lee. What’s on your mind today?",
    "dom": "rto",
    "why": "Open start"
   },
   {
    "who": "pt",
    "text": "I need you to be honest. My HRT has given me my life back, but a friend said I’m basically asking for breast cancer, and there was a big headline. So does HRT cause breast cancer — yes or no? Should I stop?"
   },
   {
    "who": "dr",
    "text": "That’s a completely fair question, and I will be straight with you. A plain yes or no would actually mislead you — the honest answer is a number. Can I show you the numbers, and then we’ll work out together what they mean for you?",
    "dom": "gs",
    "why": "Honours the question; sets up risk communication"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "First, tell me what HRT has done for you — what was life like before?",
    "dom": "rto",
    "why": "Establishes the benefit side of the scales in her words"
   },
   {
    "who": "pt",
    "text": "Awful. The symptoms were severe. Now I’m sleeping, I’m working, I feel like me again."
   },
   {
    "who": "dr",
    "text": "That matters, and we’ll keep it in the picture. I can see which HRT you’re on from your repeat list — it includes a progestogen as well as oestrogen, which is the type with a small extra breast risk. How long have you been taking it?",
    "dom": "tasks",
    "why": "Type and duration determine the figures"
   },
   {
    "who": "pt",
    "text": "I’d have to check exactly when I started."
   },
   {
    "who": "dr",
    "text": "Is there any breast cancer in your close family, and have you noticed any breast changes? Are you up to date with breast screening?",
    "dom": "tasks",
    "why": "Individual risk factors and screening"
   },
   {
    "who": "pt",
    "text": "Not that I know of, no changes, and yes, I go for screening."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "What did your friend’s comment leave you feeling?",
    "dom": "rto",
    "why": "Explores the emotional driver behind the question"
   },
   {
    "who": "pt",
    "text": "Guilty, honestly. Like I’ve been reckless for feeling better."
   },
   {
    "who": "dr",
    "text": "You haven’t been reckless. You made a sensible choice for severe symptoms, and asking this question is sensible too. Let’s put real numbers on it.",
    "dom": "rto",
    "why": "Validates and removes guilt"
   },
   {
    "phase": "Explanation",
    "clock": "5–9 min",
    "who": "dr",
    "text": "Picture 1000 women aged 50. Over the next 20 years, about 63 will get breast cancer without ever taking HRT. If they each take five years of combined HRT, about 14 to 20 more will — depending on whether the progestogen is taken part of the month or every day. So roughly 77 to 83 instead of 63.",
    "dom": "tasks",
    "why": "MHRA 2019 absolute figures as natural frequencies"
   },
   {
    "who": "pt",
    "text": "So out of a thousand, most women on it don’t get breast cancer because of it."
   },
   {
    "who": "dr",
    "text": "Exactly. Two more honest points. The risk grows with the number of years you take it — ten years is roughly double five, so we’ll check your start date and use it. And some of the extra risk lasts for years after stopping, so stopping now doesn’t reset it to zero.",
    "dom": "tasks",
    "why": "Duration and persistence after stopping"
   },
   {
    "who": "dr",
    "text": "For comparison, the extra risk from five years of combined HRT is about the same as the extra risk linked to obesity in your fifties. I’m not saying that to dismiss it — it’s to help you see it alongside risks people live with every day.",
    "dom": "tasks",
    "why": "Contextualises with a sourced comparison (BMS 2025)"
   },
   {
    "who": "dr",
    "text": "Oestrogen on its own — for women who’ve had a hysterectomy — carries less risk, and vaginal oestrogen for dryness hasn’t been shown to raise it. Patches versus tablets makes a difference to clot risk, not breast risk.",
    "dom": "tasks",
    "why": "Type and route distinction"
   },
   {
    "who": "pt",
    "text": "That’s so different from the headline."
   },
   {
    "who": "dr",
    "text": "Headlines often use percentages — “a 30% increase” sounds terrifying, but a percentage of a small number is still small. The per-1000 figure is the one that tells you what it means for you.",
    "dom": "gs",
    "why": "Explains why relative risk misleads"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "So, putting it together: on one side, severe symptoms now controlled and your bones protected. On the other, a small extra risk that grows with time. What feels right to you?",
    "dom": "rto",
    "why": "Values-based shared decision"
   },
   {
    "who": "pt",
    "text": "I want to keep going. But I want to keep an eye on it."
   },
   {
    "who": "dr",
    "text": "That’s a very reasonable decision. We’ll review each year — whether you still need it, and the lowest dose that works. Anything you can do on weight, alcohol and activity lowers your risk whatever you decide. I’ll send you the MHRA information sheet so you can see the numbers again.",
    "dom": "tasks",
    "why": "Annual review, modifiable factors, written information"
   },
   {
    "who": "pt",
    "text": "And if I change my mind?"
   },
   {
    "who": "dr",
    "text": "Then we talk again — this decision can be revisited at any time.",
    "dom": "rto",
    "why": "Supports autonomy"
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "What will you tell your friend next time it comes up?",
    "dom": "rto",
    "why": "Teach-back framed around her concern"
   },
   {
    "who": "pt",
    "text": "That out of a thousand women, a small number extra get it, it depends how long you take it, and I’ve chosen it with my eyes open."
   },
   {
    "who": "dr",
    "text": "Perfect. Keep going to breast screening, tell me about any breast lump or change, and let me know about any unexpected bleeding. Anything else today?",
    "dom": "gs",
    "why": "Breast and bleeding safety-net"
   },
   {
    "who": "pt",
    "text": "No. Thank you for giving me a real answer."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; acknowledged her directness and explained why the answer needs a number.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "What HRT has done for her life and work; the friend’s comment and the headline.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “should I stop?” and the guilt behind it, and responded.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (HRT causes cancer), concern (she has been reckless), expectation (a straight answer).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Checks HRT type and duration, family history, breast changes and screening status.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Considers her individual risk factors rather than applying a population figure blindly.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asks about breast symptoms; bleeding safety-net.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "States the risk accurately: small, type- and duration-dependent, in absolute terms (MHRA 2019).",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Natural frequencies, context, type and route distinction; a values-based decision she makes; annual review.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Addresses modifiable risk factors (weight, alcohol, activity) without lecturing.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Screening, breast changes, unscheduled bleeding, written information, annual review.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Frances Liddell",
    "age": "54 years · female",
    "pmh": [
     "Menopausal symptoms — on HRT"
    ],
    "meds": [
     "HRT (see repeat list)"
    ],
    "allergy": "NKDA",
    "recent": "Good symptom control on HRT at last review.",
    "reason": "“Does HRT give you breast cancer or not? Should I stop?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open & listen",
     "d": "She demands a yes or no. Honour it, then explain why the honest answer is a number."
    },
    {
     "t": "1–4",
     "h": "Her picture",
     "d": "Benefit in her words; HRT type and duration; family history, breast changes, screening."
    },
    {
     "t": "4–5",
     "h": "ICE",
     "d": "The friend’s comment has left her feeling guilty and reckless. Name it."
    },
    {
     "t": "5–9",
     "h": "The numbers",
     "d": "63 per 1000 baseline; 14–20 extra with five years combined; doubles at ten; persists after stopping; obesity comparison; relative vs absolute."
    },
    {
     "t": "9–12",
     "h": "Decide & close",
     "d": "Her decision, annual review, modifiable factors, MHRA sheet, teach-back, screening and bleeding safety-net."
    }
   ],
   "wordPics": {
    "fail": "Answers “no, it’s safe” or “yes, you should stop”; uses relative risk only; no numbers; ignores her guilt; no review.",
    "pass": "Explains a small increased risk with combined HRT that rises with duration; gives some absolute figures; distinguishes oestrogen-only; supports her choice and arranges review.",
    "exc": "All of the above, plus: MHRA 2019 figures as natural frequencies with a stated time frame; persistence after stopping; a sourced everyday comparison; explains why headlines mislead; reconnects to her benefit; teach-back; she decides with confidence."
   },
   "avoid": [
    {
     "dont": "\"No, HRT doesn’t cause breast cancer.\"",
     "instead": "\"There is a small extra risk — let me show you how small, in numbers.\"",
     "why": "False reassurance is inaccurate and undermines trust if she reads the evidence."
    },
    {
     "dont": "\"It increases your risk by about a third.\"",
     "instead": "\"About 63 in 1000 anyway; five years of combined HRT adds about 14 to 20.\"",
     "why": "Relative figures frighten without informing."
    },
    {
     "dont": "\"If you’re worried, it’s probably safest to stop.\"",
     "instead": "\"Let’s weigh what it’s done for you against a small risk — then it’s your call.\"",
     "why": "Defensive advice ignores her benefit and takes the decision away from her."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Media and peer influence",
     "t": "Headlines and friends’ comments shape decisions more than leaflets. Acknowledge them and offer a trustworthy source she can share."
    },
    {
     "h": "Quality of life",
     "t": "Restored sleep and ability to work are real outcomes that belong in the risk–benefit discussion."
    }
   ],
   "legal": [
    {
     "h": "Material risk",
     "t": "Montgomery v Lanarkshire Health Board (2015): patients must be told of material risks and reasonable alternatives — the breast-cancer figures are material to HRT."
    }
   ],
   "professional": [
    {
     "h": "Consent and shared decisions",
     "t": "GMC decision-making and consent guidance: share information in a way the patient can understand, and respect her decision. Record the figures discussed."
    },
    {
     "h": "Ongoing review",
     "t": "Review HRT at least yearly — need, dose and her view of benefits and risks."
    }
   ],
   "community": [
    {
     "h": "Patient resources",
     "t": "MHRA 2019 patient information sheet on HRT and breast cancer; Women’s Health Concern (British Menopause Society); NHS Breast Screening Programme."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "New breast lump, skin change, nipple change or discharge — examine and refer as appropriate",
     "Strong family history of breast or ovarian cancer — changes the individual risk",
     "Unscheduled bleeding beyond the expected window on HRT"
    ],
    "psychosocial": [
     "What HRT has given back — sleep, work, feeling herself",
     "Guilt and fear from a friend’s comment and a headline",
     "Weight, alcohol and activity as modifiable factors"
    ],
    "ice": [
     "Idea: “HRT gives you breast cancer.”",
     "Concern: she has been reckless and should stop",
     "Expectation: a straight yes or no"
    ]
   },
   "diagnosis": "Combined HRT carries a small increase in breast cancer risk that rises with duration and partly persists after stopping; in absolute terms, about 14–20 extra cases per 1000 women for five years’ use from 50 (MHRA 2019).",
   "diagnosisLay": "“Out of 1000 women your age, about 63 will get breast cancer over 20 years anyway. Five years of your type of HRT adds about 14 to 20 to that. So most women on it are not harmed by it — but the risk is real, and it grows the longer you take it.”",
   "management": {
    "reflectIce": "“You asked for honesty, and you’re not reckless — you made a sensible choice. Here are the real numbers so you can decide.”",
    "psychosocial": "Remove guilt, reconnect to her benefit, and give her words to use with her friend.",
    "sharedPlan": [
     "Her choice: continue, reduce or stop — with the figures to hand",
     "Annual review of need and lowest effective dose",
     "Modifiable factors: weight, alcohol, activity; MHRA information sheet"
    ],
    "safetyNet": [
     "Breast lump or change — see us promptly; continue breast screening",
     "Unscheduled bleeding beyond the expected window — report promptly"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Menopause",
    "s": "Case walkthrough · NICE NG23",
    "href": "../cases/menopause.html"
   },
   {
    "ic": "💠",
    "t": "HRT prescribing",
    "s": "Regimens · MHRA 2019 risk figures",
    "href": "management/hrt-prescribing.html"
   },
   {
    "ic": "💠",
    "t": "Breast cancer",
    "s": "Risk, screening and referral",
    "href": "management/breast-cancer.html"
   },
   {
    "ic": "🗺️",
    "t": "Bleeding on HRT",
    "s": "Visual algorithm · NICE NG23",
    "href": "algorithms/bleeding-on-hrt.html"
   }
  ],
  "pitfalls": {
   "intro": "This is a risk-communication station. Candidates fail by giving the yes or no she asks for, by using relative risk, or by retreating into vague reassurance. Each pattern below is fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "“No, the evidence has moved on — it’s safe.”",
     "why": "Inaccurate: MHRA 2019 found increased risk with all systemic HRT, largest with combined.",
     "fix": "“There is a small extra risk with your type — here’s how small, per 1000 women.”"
    },
    {
     "dom": "tasks",
     "fail": "Quoting only a relative risk or a percentage increase.",
     "why": "Relative figures inflate perceived risk and don’t tell her what it means for her.",
     "fix": "Baseline and extra cases per 1000 women, over the same time frame."
    },
    {
     "dom": "tasks",
     "fail": "Implying stopping removes the risk immediately.",
     "why": "MHRA 2019: some excess risk persists for more than 10 years after stopping.",
     "fix": "Say so plainly — it helps her weigh stopping against losing the benefit."
    },
    {
     "dom": "rto",
     "fail": "Missing the guilt behind “should I stop?”.",
     "why": "“Does not identify or respond to the patient’s cues.”",
     "fix": "“What did your friend’s comment leave you feeling?” — then address it."
    },
    {
     "dom": "gs",
     "fail": "Burying the numbers in jargon — “HR 1.6, CI 1.5–1.7, E3N data”.",
     "why": "“Language not easily understood by the patient.”",
     "fix": "One picture: 1000 women, 63 anyway, 14–20 more with five years."
    },
    {
     "dom": "gs",
     "fail": "Closing without checking understanding or planning review.",
     "why": "No teach-back and no follow-up are standard failing statements.",
     "fix": "“What will you tell your friend?” Then yearly review and the MHRA sheet."
    }
   ]
  }
 },
 "hrt-counselling": {
  "stem": {
   "name": "Sandra Okafor",
   "age": "51-year-old woman",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "No recent consultations about menopausal symptoms. No FSH or other hormone tests on file.",
   "reason": "Hot flushes, night sweats, poor sleep, irritability and poor memory affecting work — wants to discuss HRT but worried about cancer."
  },
  "knowledge": {
   "guideline": "NICE NG23 (2015, updated November 2024 and April 2026) · MHRA Drug Safety Update August 2019 (HRT and breast cancer) · NICE NG12 (updated April 2026) · FSRH contraception for women aged over 40 (2017)",
   "summary": "At 51 with typical symptoms this is a clinical diagnosis of perimenopause. HRT is the most effective treatment; the breast-cancer risk is real but small in absolute terms, and she deserves the actual numbers.",
   "points": [
    {
     "h": "Diagnose clinically",
     "t": "NICE NG23: diagnose perimenopause on symptoms in women over 45 with vasomotor symptoms and irregular periods; do not use FSH to diagnose in this group. Ask about the bleeding pattern and contraception."
    },
    {
     "h": "Risk history shapes the choice",
     "t": "Ask about breast cancer, VTE, cardiovascular disease and stroke, migraine with aura, liver disease, unexplained bleeding and smoking; check BP and BMI. Most findings change which HRT, not whether she can have it."
    },
    {
     "h": "Options",
     "t": "Oestrogen for systemic symptoms, with a progestogen if she has a uterus — sequential while still having periods, continuous later. Transdermal oestrogen at standard doses does not raise VTE risk above baseline (NICE NG23), so it suits those with VTE risk factors. Vaginal oestrogen for dryness. NICE NG23: consider testosterone for low sexual desire if HRT alone is not effective; consider menopause-specific CBT for vasomotor and mood symptoms."
    },
    {
     "h": "Breast cancer in numbers",
     "t": "MHRA August 2019: of 1000 women aged 50–69 who never use HRT, about 63 are diagnosed with breast cancer. Five years of HRT from age 50 adds about 5 (oestrogen-only), 14 (sequential combined) or 20 (continuous combined) extra cases per 1000 over those 20 years; 10 years roughly doubles this. Some excess persists for more than 10 years after stopping. No increased risk found with low-dose vaginal oestrogen. NICE NG23 describes the risk with oestrogen-only HRT as little or no change."
    },
    {
     "h": "Other benefits and risks",
     "t": "NICE NG23: HRT started before 60 does not increase cardiovascular disease risk; it reduces fragility fracture risk while taken. Oral oestrogen raises VTE risk; transdermal does not. HRT does not provide contraception — she still needs it if at risk (FSRH 2017)."
    },
    {
     "h": "Bleeding safety-net",
     "t": "NICE NG23 (April 2026): bleeding is common in the first 6 months of systemic HRT or within 3 months of a dose or product change; unscheduled bleeding beyond these should be reported promptly. NICE NG12 (updated April 2026): unexplained postmenopausal bleeding at 55 or over that cannot be attributed to HRT → suspected cancer pathway referral."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Sandra, I’m Dr Lee. What can I help with today?",
    "dom": "rto",
    "why": "Open question; lets her set out her concerns"
   },
   {
    "who": "pt",
    "text": "I’m pretty sure it’s the menopause — the flushes, sweats at night, I can’t sleep, I’m snapping at everyone and my memory’s shot. It’s affecting work. I’ve thought about HRT, but everything I read says it gives you breast cancer."
   },
   {
    "who": "dr",
    "text": "That sounds exhausting, and I’m glad you’ve come. I’d like to understand the symptoms and how they’re affecting you, then talk honestly about HRT — including the cancer worry, with real numbers. Does that work?",
    "dom": "gs",
    "why": "Agenda that includes her hidden fear"
   },
   {
    "who": "pt",
    "text": "Yes. That’s what I need."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Which of these symptoms bothers you most, and how is it affecting work and home?",
    "dom": "rto",
    "why": "Prioritises her most troublesome symptoms and impact"
   },
   {
    "who": "pt",
    "text": "The sweats and no sleep. Then I’m foggy at work and short with everyone. I feel like I’m not myself."
   },
   {
    "who": "dr",
    "text": "How has your mood been generally — just irritable, or low as well? Any times you’ve felt hopeless?",
    "dom": "tasks",
    "why": "Screens mood in its own right"
   },
   {
    "who": "pt",
    "text": "Irritable more than low. Not hopeless."
   },
   {
    "who": "dr",
    "text": "What are your periods doing at the moment, and do you still need contraception?",
    "dom": "tasks",
    "why": "Bleeding pattern guides the regimen; contraception still needed"
   },
   {
    "who": "pt",
    "text": "They’re all over the place. I hadn’t really thought about contraception."
   },
   {
    "who": "dr",
    "text": "Worth thinking about — HRT isn’t a contraceptive, so we’ll cover that. Any vaginal dryness, discomfort or waterworks symptoms?",
    "dom": "tasks",
    "why": "Urogenital symptoms and contraception counselling"
   },
   {
    "who": "pt",
    "text": "Some dryness, yes. It’s embarrassing."
   },
   {
    "who": "dr",
    "text": "It’s very common and very treatable. A few safety questions: any breast cancer, blood clots, stroke or heart problems, migraines with aura, liver problems, or bleeding after sex or between periods? And do you smoke?",
    "dom": "tasks",
    "why": "Risk history that shapes which HRT"
   },
   {
    "who": "pt",
    "text": "Not that I know of. I don’t smoke."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "You said everything you read says HRT causes breast cancer. What have you seen, and how much is it putting you off?",
    "dom": "rto",
    "why": "Explores the hidden agenda directly"
   },
   {
    "who": "pt",
    "text": "Headlines, mostly. It’s why I’ve put this off for months. I keep telling myself I should just cope."
   },
   {
    "who": "dr",
    "text": "You don’t have to just cope. These symptoms are real and treatable. Let’s look at the actual risk so you can decide on facts rather than headlines.",
    "dom": "rto",
    "why": "Validates and counters the “just cope” belief"
   },
   {
    "phase": "Explanation",
    "clock": "5–9 min",
    "who": "dr",
    "text": "First, the diagnosis. At 51 with these symptoms and irregular periods, this is the perimenopause. I don’t need a blood test to confirm it — hormone levels swing so much they don’t help at your age.",
    "dom": "tasks",
    "why": "Clinical diagnosis without FSH (NICE NG23)"
   },
   {
    "who": "dr",
    "text": "Now the cancer question, in numbers. Picture 1000 women aged 50. Without HRT, about 63 will be diagnosed with breast cancer by 70. With five years of the type you’d likely start on — oestrogen plus a progestogen part of each month — about 14 more would be, so around 77. That means most women who take it don’t get breast cancer because of it.",
    "dom": "tasks",
    "why": "MHRA 2019 absolute figures as natural frequencies"
   },
   {
    "who": "pt",
    "text": "Fourteen in a thousand. That’s much smaller than I’d imagined."
   },
   {
    "who": "dr",
    "text": "It is real, and it rises the longer you take it, so we review it each year. Some of the extra risk lingers for years after stopping. Against that: HRT is the most effective treatment for flushes and sweats, it usually helps sleep and concentration, and it protects your bones. Started at your age, it doesn’t increase heart disease risk.",
    "dom": "tasks",
    "why": "Balanced benefit and harm, including duration and persistence"
   },
   {
    "who": "dr",
    "text": "On options: oestrogen as a patch or gel through the skin doesn’t increase clot risk, unlike tablets. Because you’re still having periods, you’d also need a progestogen for part of each month to protect the womb lining. For dryness, a vaginal oestrogen works locally, and the evidence doesn’t show it raises breast cancer risk.",
    "dom": "tasks",
    "why": "Transdermal vs oral, progestogen, vaginal oestrogen"
   },
   {
    "who": "pt",
    "text": "So a patch or gel plus the progestogen?"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "That would be my suggestion. But it’s your decision — how are you feeling about it now?",
    "dom": "rto",
    "why": "Hands the decision back to her"
   },
   {
    "who": "pt",
    "text": "I think I want to try it. I can always stop."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll check your blood pressure and weight first, then start a gel or patch with a progestogen, plus the vaginal oestrogen if you’d like it. We’ll also sort contraception. I’ll send you written information with these numbers so you can read them again.",
    "dom": "tasks",
    "why": "Concrete plan with contraception and written information"
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Two important things. Irregular bleeding is common in the first six months, but tell us promptly if bleeding is heavy or carries on beyond that. And keep going to your breast screening, and tell me about any breast lump or change.",
    "dom": "gs",
    "why": "NICE NG23 bleeding windows and breast awareness"
   },
   {
    "who": "dr",
    "text": "Can you tell me in your own words what the numbers mean for you?",
    "dom": "rto",
    "why": "Teach-back of the risk"
   },
   {
    "who": "pt",
    "text": "Out of a thousand women, about fourteen extra cases over twenty years with five years on it — and it helps with everything that’s wrecking my sleep."
   },
   {
    "who": "dr",
    "text": "Exactly right. Let’s review in three months to see how it’s working and whether it suits you. Anything else before we finish?",
    "dom": "gs",
    "why": "Defined review"
   },
   {
    "who": "pt",
    "text": "No. Thank you — I wish I’d come sooner."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her describe the symptoms and her HRT worry before narrowing down.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Impact on work, relationships and sleep; feeling she should “just cope”.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the cancer fear and the embarrassment about dryness, and responded to both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (menopause), concern (HRT causes breast cancer), expectation (guidance on whether to take HRT).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "BP and BMI before starting; no FSH at 51 with typical symptoms.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Perimenopause versus depression or other causes; screens mood and the bleeding pattern.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screens abnormal bleeding and contraindications (breast cancer, VTE, stroke, liver disease).",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Perimenopause diagnosed clinically and stated plainly.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Transdermal oestrogen with a progestogen, vaginal oestrogen, MHRA 2019 numbers in absolute terms, contraception, shared decision.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Mood, sleep and urogenital symptoms; CBT or testosterone mentioned where relevant.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "NICE NG23 bleeding windows, breast screening and breast changes, review at three months.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health"
   ],
   "stem": {
    "name": "Sandra Okafor",
    "age": "51 years · female",
    "pmh": [
     "Nil significant recorded"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "No previous menopause consultation. No hormone tests on file.",
    "reason": "“I think it’s the menopause — but I’m scared HRT will give me cancer.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open & listen",
     "d": "She lists the symptoms and the cancer fear in one breath. Note both."
    },
    {
     "t": "1–4",
     "h": "Symptoms & risk",
     "d": "Most troublesome symptom, impact, mood, periods, contraception, dryness, and the risk history."
    },
    {
     "t": "4–5",
     "h": "ICE",
     "d": "Headlines, months of putting it off, “I should just cope”."
    },
    {
     "t": "5–9",
     "h": "Diagnose & explain",
     "d": "Clinical diagnosis, no FSH. MHRA 2019 numbers per 1000. Benefits. Transdermal oestrogen, progestogen, vaginal oestrogen."
    },
    {
     "t": "9–12",
     "h": "Decide & safety-net",
     "d": "Her decision, contraception, written information, bleeding windows, breast awareness, teach-back, review at three months."
    }
   ],
   "wordPics": {
    "fail": "Orders FSH; either dismisses the cancer risk or refuses HRT out of fear; gives relative risks or no numbers; forgets the progestogen or contraception; no bleeding safety-net.",
    "pass": "Clinical diagnosis; reasonable risk history; explains transdermal oestrogen with a progestogen; says the breast-cancer risk is small and depends on type and duration; offers review and a bleeding safety-net.",
    "exc": "All of the above, plus: gives the MHRA 2019 figures as natural frequencies for her likely regimen; mentions duration and persistence after stopping; addresses “I should just cope”; covers vaginal oestrogen and contraception; checks understanding with teach-back; she makes the decision."
   },
   "avoid": [
    {
     "dont": "\"The risk is tiny, don’t worry about the headlines.\"",
     "instead": "\"There is a small extra risk — let me show you exactly how small, in numbers.\"",
     "why": "False reassurance is as poor as scaremongering; she asked for honesty."
    },
    {
     "dont": "\"HRT increases your breast cancer risk by 30%.\"",
     "instead": "\"Of 1000 women, about 63 get breast cancer anyway; five years of this type adds about 14.\"",
     "why": "Relative risks frighten without informing; absolute numbers let her decide."
    },
    {
     "dont": "\"Let’s do a blood test to confirm it’s the menopause.\"",
     "instead": "\"At your age, your symptoms tell us — a blood test wouldn’t add anything.\"",
     "why": "NICE NG23 advises against FSH testing in women over 45 with typical symptoms."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work",
     "t": "Menopausal symptoms affect concentration and performance. Discuss workplace adjustments and occupational health; employers are encouraged to support menopause at work."
    },
    {
     "h": "Relationships and stigma",
     "t": "Irritability, low libido and dryness strain relationships and are often not raised through embarrassment. Ask directly and normalise."
    }
   ],
   "legal": [
    {
     "h": "Equality Act 2010",
     "t": "Menopause is not a protected characteristic in itself, but less favourable treatment can amount to discrimination on grounds of sex, age or disability where symptoms are severe and long-term."
    }
   ],
   "professional": [
    {
     "h": "Informed consent",
     "t": "GMC decision-making and consent guidance: share the information a reasonable person would want — including absolute risks — and respect her choice. Record the numbers discussed."
    },
    {
     "h": "Prescription charges",
     "t": "The HRT prescription prepayment certificate in England covers eligible HRT items for a single annual charge."
    }
   ],
   "community": [
    {
     "h": "Patient resources",
     "t": "Women’s Health Concern (patient arm of the British Menopause Society) and the MHRA 2019 patient information sheet on HRT and breast cancer; NHS Breast Screening Programme."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Unexplained postmenopausal bleeding at 55 or over not attributable to HRT — NICE NG12 (updated April 2026) suspected cancer pathway",
     "Personal history of breast cancer, VTE, stroke or active liver disease — changes the options",
     "Low mood with hopelessness — consider depression in its own right"
    ],
    "psychosocial": [
     "Work performance and concentration",
     "Irritability and relationships; embarrassment about dryness",
     "Belief she should “just cope”"
    ],
    "ice": [
     "Idea: “I’m pretty sure this is the menopause.”",
     "Concern: “Everything I read says HRT gives you breast cancer.”",
     "Expectation: honest guidance on whether to take HRT"
    ]
   },
   "diagnosis": "Perimenopause, diagnosed clinically at 51 on typical vasomotor, sleep, mood, cognitive and urogenital symptoms with irregular periods — no FSH needed.",
   "diagnosisLay": "“Your ovaries are winding down, and the hormone levels are swinging up and down. That’s what drives the sweats, the broken sleep and the fog. It’s a normal stage, but you don’t have to suffer through it.”",
   "management": {
    "reflectIce": "“You’ve put this off for months because of the headlines — so let’s look at the real numbers together, and then it’s your call.”",
    "psychosocial": "Counter “I should just cope”, raise work adjustments, and treat dryness without embarrassment.",
    "sharedPlan": [
     "Transdermal oestrogen with a sequential progestogen (uterus present); vaginal oestrogen for dryness",
     "MHRA 2019 figures in natural frequencies; written information",
     "Contraception review; BP and BMI before starting"
    ],
    "safetyNet": [
     "Report heavy or persistent bleeding beyond the first 6 months (or 3 months after a change)",
     "Breast lump or change; continue breast screening; review at three months"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Menopause",
    "s": "Case walkthrough · NICE NG23",
    "href": "../cases/menopause.html"
   },
   {
    "ic": "💠",
    "t": "HRT prescribing",
    "s": "Regimens, risks and bleeding",
    "href": "management/hrt-prescribing.html"
   },
   {
    "ic": "🗺️",
    "t": "Bleeding on HRT",
    "s": "Visual algorithm · NICE NG23 · NICE NG12 (updated April 2026)",
    "href": "algorithms/bleeding-on-hrt.html"
   },
   {
    "ic": "💠",
    "t": "Contraception",
    "s": "Methods over 40",
    "href": "management/contraception.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed less on HRT knowledge than on risk communication — either brushing off the cancer fear or reinforcing it — and on missing the practical details that make HRT safe. Each pattern below is fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Requesting FSH “to confirm the menopause”.",
     "why": "NICE NG23 advises against FSH testing in women over 45 with typical symptoms; it delays treatment and adds nothing.",
     "fix": "“At 51, with these symptoms, your history gives us the diagnosis.”"
    },
    {
     "dom": "rto",
     "fail": "“The risk is tiny, don’t believe the papers.”",
     "why": "False reassurance ignores her concern and is inaccurate. “Does not respond to the patient’s concerns.”",
     "fix": "Give the MHRA 2019 figures: about 63 per 1000 without HRT, about 14 more with five years of sequential combined HRT."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing oestrogen alone to a woman with a uterus, or forgetting contraception.",
     "why": "Unopposed oestrogen causes endometrial hyperplasia; HRT is not a contraceptive.",
     "fix": "Ask about the womb and contraception every time; add a progestogen."
    },
    {
     "dom": "tasks",
     "fail": "Telling her any bleeding on HRT means an urgent cancer referral.",
     "why": "NICE NG23 (April 2026): bleeding is common in the first 6 months or 3 months after a change. NICE NG12 (updated April 2026) applies to unexplained postmenopausal bleeding at 55+ not attributable to HRT.",
     "fix": "Explain the expected bleeding window and when to report bleeding promptly."
    },
    {
     "dom": "gs",
     "fail": "Using jargon — “sequential combined transdermal with micronised progesterone, RR 1.3”.",
     "why": "“Language not easily understood by the patient.”",
     "fix": "“A patch or gel through the skin, plus a tablet to protect the womb lining for part of each month.”"
    },
    {
     "dom": "gs",
     "fail": "No review date or teach-back of the numbers.",
     "why": "“Does not confirm understanding” and absent follow-up are standard failing statements.",
     "fix": "Ask her to explain the numbers back; review in three months."
    }
   ]
  }
 },
 "itchy-rash-systemic": {
  "stem": {
   "name": "Howard Leyton",
   "age": "58-year-old man",
   "pmh": [
    "Generalised itch for about 3 months (seen once before)"
   ],
   "meds": [
    "Emollient — from previous visit",
    "Mild topical corticosteroid — from previous visit"
   ],
   "allergy": "Allergy status not recorded — check before prescribing",
   "recent": "Previous consultation for itch: emollient and a mild topical steroid prescribed. No blood tests on file for this problem. Accountant.",
   "reason": "Video consultation: \"Itch no better — wants something stronger.\""
  },
  "knowledge": {
   "guideline": "BAD guidelines for generalised pruritus in adults without an underlying dermatosis (2018) · NICE NG12 (updated April 2026) · BNF",
   "summary": "Three months of generalised itch with no primary rash, not helped by emollient or steroid, calls for a search for a systemic cause. With night sweats, weight loss, fevers and a rubbery neck node, the picture is suspected lymphoma until proven otherwise.",
   "points": [
    {
     "h": "Itch without a rash",
     "t": "When the only skin signs are scratch marks, look for an internal cause rather than stepping up topical steroids. BAD 2018 lists iron deficiency, cholestasis and liver disease, chronic kidney disease, thyroid disease, haematological disease (including lymphoma and polycythaemia vera), drugs and HIV among the causes; exclude scabies and dry skin, but do not assume them."
    },
    {
     "h": "The B-symptom screen",
     "t": "Ask directly about drenching night sweats, unintentional weight loss, fevers, fatigue and pain in lymph nodes after alcohol. Examine all node groups, the liver and the spleen — this needs a face-to-face visit."
    },
    {
     "h": "The NICE NG12 (updated April 2026) lymphoma criterion",
     "t": "NICE NG12 (updated April 2026): consider a suspected cancer pathway referral for Hodgkin or non-Hodgkin lymphoma in adults with unexplained lymphadenopathy (or splenomegaly for non-Hodgkin lymphoma), taking into account associated symptoms, particularly fever, night sweats, shortness of breath, pruritus and weight loss — and, for Hodgkin lymphoma, alcohol-induced lymph node pain."
    },
    {
     "h": "Other NICE NG12 (updated April 2026) actions",
     "t": "NICE NG12 (updated April 2026): consider a very urgent full blood count (within 48 hours) to assess for leukaemia in adults with features such as persistent fatigue, unexplained fever, generalised lymphadenopathy or hepatosplenomegaly. Offer an urgent chest X-ray (within 2 weeks) to people aged 40 and over with two or more unexplained symptoms such as fatigue and weight loss (one is enough if they have ever smoked)."
    },
    {
     "h": "First-line tests",
     "t": "BAD 2018: FBC and ferritin, renal function, liver function and thyroid function in chronic generalised itch without a rash; add a blood film, ESR or CRP, LDH, calcium, HbA1c and HIV testing as the picture suggests."
    },
    {
     "h": "Relief meanwhile",
     "t": "Keep emollients going generously, keep nails short, avoid hot baths and overheating. A sedating antihistamine at night may help sleep (BAD 2018); dose per BNF. Symptom relief runs alongside the work-up, never instead of it."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Leyton, I’m Dr Lee. Can you see and hear me? … Good. I can see from the notes the itch hasn’t settled. Tell me how it’s been.",
    "dom": "rto",
    "why": "Open question after checking the video link"
   },
   {
    "who": "pt",
    "text": "It’s driving me to distraction. Everywhere, worse at night, and there’s hardly anything to see. The creams haven’t made a dent. I just want something stronger that works. I’m scratching myself raw."
   },
   {
    "who": "dr",
    "text": "That sounds miserable, and I’m not going to brush it off. I’d like to understand it properly, then work out together why the creams haven’t worked, and what to do next. Is that all right?",
    "dom": "gs",
    "why": "Validates distress and sets a clear agenda"
   },
   {
    "who": "pt",
    "text": "Fine. As long as I leave with something."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Has there ever been a rash, or is it just the scratch marks?",
    "dom": "tasks",
    "why": "Establishes itch without a primary rash"
   },
   {
    "who": "pt",
    "text": "Just the scratches. The skin itself looks normal otherwise."
   },
   {
    "who": "dr",
    "text": "Anyone else at home itchy? And any new medicines, washing powders or anything else that changed around when it started?",
    "dom": "tasks",
    "why": "Screens scabies, contact and drug causes"
   },
   {
    "who": "pt",
    "text": "No, nobody else. Nothing new that I can think of."
   },
   {
    "who": "dr",
    "text": "Now some questions that might seem unrelated. Have you had sweats at night — enough to soak the sheets?",
    "dom": "tasks",
    "why": "Starts the B-symptom screen"
   },
   {
    "who": "pt",
    "text": "Actually, yes. I’ve had to change the sheets some nights. I put it down to the itching keeping me awake."
   },
   {
    "who": "dr",
    "text": "Have you lost weight without trying, had any fevers, or felt more tired than usual?",
    "dom": "tasks",
    "why": "Completes the B-symptom screen"
   },
   {
    "who": "pt",
    "text": "My clothes are looser, now you mention it. I’ve felt shivery and warm on and off. And I’m shattered — but I’m not sleeping."
   },
   {
    "who": "dr",
    "text": "Have you noticed any lumps in your neck, armpits or groin? Could you run your fingers down the sides of your neck for me now?",
    "dom": "tasks",
    "why": "Asks directly about lymphadenopathy"
   },
   {
    "who": "pt",
    "text": "There’s… something on the left side of my neck. A lump. Firm, sort of rubbery. It doesn’t hurt."
   },
   {
    "who": "dr",
    "text": "Thank you, that’s important. Any breathlessness or cough, and does the itch or anywhere ache after a drink of alcohol?",
    "dom": "tasks",
    "why": "Screens mediastinal symptoms and alcohol-induced pain"
   },
   {
    "who": "pt",
    "text": "Breathing’s fine. I haven’t really noticed anything with drink."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said you put the sweats down to the itch. What have you been thinking is going on, overall?",
    "dom": "rto",
    "why": "Explores his idea and the sweats he has not connected"
   },
   {
    "who": "pt",
    "text": "Dry skin, I suppose. Or eczema. I’d noticed the sweats and the weight, but… I didn’t want to think about it, if I’m honest."
   },
   {
    "who": "dr",
    "text": "That’s a very understandable reaction. Is there something in particular you’ve been worried it might be?",
    "dom": "rto",
    "why": "Surfaces the fear he has been avoiding"
   },
   {
    "who": "pt",
    "text": "You hear things. Cancer. I’ve just been hoping a stronger cream would make it all go away."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Thank you for saying it. I want to be straight with you. When someone itches all over with nothing to see, and also has night sweats, weight loss, fevers and a new lump in the neck, the cause may be inside rather than in the skin. One of the things we have to rule out is a problem with the lymph glands, such as a lymphoma. I’m not saying that’s what it is, but it needs checking quickly.",
    "dom": "tasks",
    "why": "Links the features and names lymphoma honestly as a possibility"
   },
   {
    "who": "pt",
    "text": "A lymphoma. Right. That’s… a lot."
   },
   {
    "who": "dr",
    "text": "It is a lot to hear. Can I explain what happens next? Many things can cause this, and if it does turn out to be lymphoma, it is often very treatable. The key is getting answers quickly.",
    "dom": "rto",
    "why": "Pauses for emotion and offers realistic hope"
   },
   {
    "who": "pt",
    "text": "Okay. Go on."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "First, I’d like to see you in person tomorrow to examine your neck, armpits, groin and tummy. I can’t feel the gland over video. At the same visit, blood tests: blood count and film, iron, kidney, liver and thyroid tests, inflammation markers, LDH, calcium and sugar. I’ll also arrange a chest X-ray, because you have both tiredness and weight loss.",
    "dom": "tasks",
    "why": "Face-to-face examination, targeted bloods and NICE NG12 (updated April 2026) chest X-ray"
   },
   {
    "who": "pt",
    "text": "And a specialist?"
   },
   {
    "who": "dr",
    "text": "Yes. If the examination confirms the gland, I’ll refer you on the urgent suspected cancer pathway, so a specialist sees you within two weeks. I’d rather move quickly and find it’s something simpler.",
    "dom": "tasks",
    "why": "NICE NG12 (updated April 2026) lymphoma suspected cancer pathway referral"
   },
   {
    "who": "pt",
    "text": "And the itch in the meantime?"
   },
   {
    "who": "dr",
    "text": "Keep using the moisturiser generously, avoid hot baths, and I’ll prescribe an antihistamine that makes you drowsy, to take at night for sleep. Don’t drive or use machinery if it makes you sleepy the next morning. The stronger steroid cream wouldn’t help an itch like this.",
    "dom": "gs",
    "why": "Symptom relief alongside the work-up with a safety caution"
   },
   {
    "who": "pt",
    "text": "That’s something, at least."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you get high fevers, feel very unwell, become breathless, or notice the lumps growing quickly before we speak again, contact us the same day or call 111 out of hours. I’ll ring you myself with the blood results.",
    "dom": "gs",
    "why": "Specific safety-net and personal follow-up"
   },
   {
    "who": "pt",
    "text": "Right."
   },
   {
    "who": "dr",
    "text": "It’s a lot to take in. If you were explaining today to someone close to you, what would you say?",
    "dom": "rto",
    "why": "Teach-back that also checks support"
   },
   {
    "who": "pt",
    "text": "That the itch might be coming from inside, maybe the glands. I’m being examined tomorrow, bloods and a chest X-ray, and probably an urgent referral. Tablet for sleep, keep up the cream."
   },
   {
    "who": "dr",
    "text": "That’s exactly it. You did the right thing coming back. I’ll see you tomorrow — is there anything else on your mind before we finish?",
    "dom": "gs",
    "why": "Confirms plan and shares the floor"
   },
   {
    "who": "pt",
    "text": "No. Thank you for being straight with me."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Let him describe the itch and its impact; did not jump to a stronger cream.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Sleep loss, work, who is at home, how he copes with worry, and support for bad news.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the sweats he blamed on the itch and his “didn’t want to think about it”, and explored them.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (dry skin or eczema); concern (unspoken fear of cancer); expectation (a stronger cream).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Face-to-face examination of all node groups, liver and spleen; FBC and film, ferritin, U&E, LFTs, TFTs, ESR or CRP, LDH, calcium, HbA1c; chest X-ray.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Lymphoma vs other systemic causes (iron deficiency, cholestasis, CKD, thyroid, polycythaemia, drugs, HIV) vs skin causes (scabies, xerosis).",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "B-symptom screen; lymphadenopathy asked about directly; NICE NG12 (updated April 2026) lymphoma, leukaemia and chest X-ray criteria applied.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Itch without a rash with B symptoms and a rubbery node: suspected lymphoma, named honestly as something to rule out.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Examination tomorrow, bloods, chest X-ray, suspected cancer pathway referral if the node is confirmed; itch relief meanwhile.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Night-time sedating antihistamine with driving caution; stopped escalating topical steroid; sleep and distress addressed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named same-day warning signs; personal results call; teach-back and support check.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Howard Leyton",
    "age": "58 years · male",
    "pmh": [
     "Generalised itch ~3 months"
    ],
    "meds": [
     "Emollient",
     "Mild topical steroid"
    ],
    "allergy": "Not recorded",
    "recent": "Seen for itch: emollient and mild topical steroid. No bloods on file.",
    "reason": "\"The creams aren’t touching it.\""
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open & listen",
     "d": "Let him vent the misery of the itch. Agree to understand it before deciding on treatment."
    },
    {
     "t": "1–4",
     "h": "Widen the lens",
     "d": "No primary rash; contacts, drugs. Then the B symptoms: night sweats, weight loss, fevers, fatigue, lumps (ask him to feel his neck), alcohol pain, breathlessness."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "He thinks dry skin; he has been avoiding the sweats and weight loss. Draw out the fear gently."
    },
    {
     "t": "6–10",
     "h": "Explain & plan",
     "d": "Name lymphoma as something to rule out, with realistic hope. Face-to-face tomorrow, bloods, chest X-ray, suspected cancer pathway if the node is confirmed. Itch relief meanwhile."
    },
    {
     "t": "10–12",
     "h": "Safety-net & close",
     "d": "Same-day warning signs, personal results call, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes a stronger steroid or a different cream and books a review in a month; never asks about sweats, weight or lumps; no blood tests; no referral; reassures that it is dry skin.",
    "pass": "Recognises itch without a rash needs a systemic screen, elicits the B symptoms, arranges examination and bloods, and refers on the suspected cancer pathway, with symptom relief and a safety-net.",
    "exc": "All of the above, plus: asks him to feel his neck on camera; surfaces the fear he has been avoiding; names lymphoma honestly with realistic hope; applies the NICE NG12 (updated April 2026) chest X-ray and lymphoma criteria precisely; arranges face-to-face examination within a day; teach-back and a personal results call."
   },
   "avoid": [
    {
     "dont": "\"Let’s try a stronger steroid cream and see how you get on.\"",
     "instead": "\"When there’s nothing to see and creams don’t help, I need to look for a cause inside.\"",
     "why": "Escalating topical steroids for itch without a rash misses the systemic cause."
    },
    {
     "dont": "\"I’m sure it’s nothing — probably just dry skin.\"",
     "instead": "\"Many things cause this, and one I have to rule out is a problem with the lymph glands.\"",
     "why": "False reassurance in the face of B symptoms and a node is unsafe."
    },
    {
     "dont": "\"You probably have cancer.\"",
     "instead": "\"I’m not saying that’s what it is, but it needs checking quickly — and if it is, it’s often very treatable.\"",
     "why": "Honesty must be calibrated; overstating causes distress and disengagement."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Sleep and work",
     "t": "Relentless itch and night sweats wreck sleep. As an accountant, concentration matters; ask how he is coping at work."
    },
    {
     "h": "Avoidance and support",
     "t": "He noticed the weight loss and sweats but avoided the thought. Ask who he can talk to, and whether he wants someone with him at the face-to-face visit."
    }
   ],
   "legal": [
    {
     "h": "Driving and sedating antihistamines",
     "t": "It is an offence to drive when impaired by drugs, including prescribed medicines (Road Traffic Act 1988). Warn about next-day drowsiness."
    },
    {
     "h": "Fit notes",
     "t": "If investigation or treatment stops him working, he can self-certify for the first 7 days; after that a fit note can be issued."
    }
   ],
   "professional": [
    {
     "h": "Remote consulting limits",
     "t": "A new node and possible organomegaly cannot be examined on video. Arrange in-person examination promptly rather than referring or reassuring on the screen alone."
    },
    {
     "h": "Results and referral tracking",
     "t": "Own the results and the referral: tell him when you will call, and track the suspected cancer referral (GMC Good Medical Practice 2024)."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Blood Cancer UK and Lymphoma Action for information if a diagnosis is made; Macmillan Cancer Support for practical and emotional help."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Drenching night sweats, unintentional weight loss, fevers",
     "Lymphadenopathy — rubbery, painless, enlarging; hepatosplenomegaly",
     "Breathlessness, cough or facial swelling (mediastinal mass)",
     "Jaundice, dark urine (cholestasis); itch after a hot bath (polycythaemia)"
    ],
    "psychosocial": [
     "Impact on sleep, mood and work",
     "His avoidance of the sweats and weight loss — ask gently",
     "Support at home for difficult news"
    ],
    "ice": [
     "Idea: “Dry skin or eczema”",
     "Concern: unspoken fear of cancer, and exhaustion from the itch",
     "Expectation: “Something stronger that works”"
    ]
   },
   "diagnosis": "Generalised itch without a primary rash, with night sweats, weight loss, fevers and a rubbery cervical node, is suspected lymphoma until proven otherwise. Other systemic causes — iron deficiency, cholestasis, CKD, thyroid disease, polycythaemia, drugs, HIV — are screened with the first-line tests.",
   "diagnosisLay": "“Your skin itself looks healthy, which tells me the itch may be coming from something inside the body. With the sweats, the weight loss and that lump, one of the things we need to rule out is a problem with the lymph glands. It needs checking quickly — and many of these conditions are very treatable.”",
   "management": {
    "reflectIce": "“You hoped a stronger cream would fix it, and I understand why. But I think the itch is a clue to something else, and I want to find it rather than cover it up.”",
    "psychosocial": "Pause after naming lymphoma; offer realistic hope; ask who will support him; keep the itch relief so he leaves with something tangible.",
    "sharedPlan": [
     "Face-to-face examination within a day: all node groups, liver, spleen, skin",
     "FBC and film, ferritin, U&E, LFTs, TFTs, ESR or CRP, LDH, calcium, HbA1c (± HIV); urgent chest X-ray (NICE NG12 (updated April 2026))",
     "Suspected cancer pathway referral if unexplained lymphadenopathy is confirmed (NICE NG12 (updated April 2026)); emollient and night-time sedating antihistamine meanwhile"
    ],
    "safetyNet": [
     "High fevers, feeling very unwell, breathlessness, or fast-growing lumps — same day, or 111 out of hours",
     "Personal call with results; referral tracked"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Pruritus",
    "s": "Case walkthrough · BAD 2018",
    "href": "../cases/pruritus.html"
   },
   {
    "ic": "🗺️",
    "t": "Widespread itch pathway",
    "s": "Visual algorithm · itch without a rash",
    "href": "algorithms/widespread-itch.html"
   },
   {
    "ic": "🗺️",
    "t": "Lymphadenopathy pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026)",
    "href": "algorithms/lymphadenopathy.html"
   },
   {
    "ic": "🗺️",
    "t": "Night sweats pathway",
    "s": "Visual algorithm · B symptoms",
    "href": "algorithms/night-sweats.html"
   },
   {
    "ic": "💠",
    "t": "Haematological cancers",
    "s": "Protocol · referral and work-up",
    "href": "management/haematological-cancers.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed when the candidate treats the skin instead of the patient. The itch is the clue; the B symptoms and the node are the diagnosis. The patterns below come from recurring SCA feedback.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing a potent steroid or a different emollient and booking a review in four weeks.",
     "why": "“Management not in line with current UK best practice.” BAD 2018 calls for a systemic work-up in chronic itch without a rash.",
     "fix": "“When there’s nothing to see and creams don’t help, I look inside.” Then screen and test."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about sweats, weight loss, fevers or lumps.",
     "why": "“Did not gather sufficient information to make a safe diagnosis.” He will not volunteer them — he has been avoiding them.",
     "fix": "Signpost, then ask directly: “Some questions that might seem unrelated…”"
    },
    {
     "dom": "tasks",
     "fail": "Referring to haematology on B symptoms alone without examining, or reassuring over video that the lump is “probably a gland from an infection”.",
     "why": "The NICE NG12 (updated April 2026) lymphoma criterion hinges on unexplained lymphadenopathy, which needs examination; reassurance without it is unsafe.",
     "fix": "Examine in person within a day, send first-line bloods and chest X-ray, and refer on the suspected cancer pathway if the node is confirmed."
    },
    {
     "dom": "rto",
     "fail": "Ignoring “I didn’t want to think about it” and ploughing on with the plan.",
     "why": "“Does not identify or respond to the patient’s cues.” His fear shapes whether he attends.",
     "fix": "“What have you been worried it might be?” Then acknowledge the fear before explaining."
    },
    {
     "dom": "gs",
     "fail": "Talking about “B symptoms”, “LDH” and “2WW” to the patient.",
     "why": "“Language not easily understood by the patient.”",
     "fix": "Plain words: “a blood count”, “a chest X-ray”, “an urgent specialist appointment within two weeks”."
    },
    {
     "dom": "gs",
     "fail": "Ending with “we’ll let you know if anything’s abnormal”.",
     "why": "Passive results handling and no named warning signs are standard failing feedback.",
     "fix": "Name the same-day warning signs, promise a personal results call, and use teach-back."
    }
   ]
  }
 },
 "keloid-scar": {
  "stem": {
   "name": "Amara Bello",
   "age": "24-year-old woman",
   "pmh": [
    "Raised scar upper chest after a healed spot — excised previously elsewhere, recurred larger",
    "Raised scar on an earlobe after piercing"
   ],
   "meds": [
    "None recorded"
   ],
   "allergy": "None recorded",
   "recent": "Both scars have grown beyond the original wound, are itchy and sometimes tender. Nigerian heritage. Sister’s wedding in a few months.",
   "reason": "Video consultation: wants the chest scar “cut off properly this time”."
  },
  "knowledge": {
   "guideline": "BAD patient information leaflet: Keloids (updated October 2017) · BAD leaflet: Intralesional steroid therapy · BNF (triamcinolone acetonide, intralesional)",
   "summary": "A scar that grows beyond the original wound, itches and returned larger after excision is a keloid. Excision alone rarely succeeds; treatment aims for control with steroid injections, silicone and pressure, under specialist care.",
   "points": [
    {
     "h": "Keloid or hypertrophic",
     "t": "A keloid spreads beyond the original area of skin damage and can follow very minor injury (BAD 2017). A hypertrophic scar stays within the wound and tends to flatten with time. Chest, shoulders, upper back and earlobes are typical keloid sites, and people with darker skin are more often affected."
    },
    {
     "h": "Why excision alone fails",
     "t": "BAD (2017): surgical excision is rarely successful because it makes a larger wound and the keloid is likely to regrow; compression dressings or steroid injections after excision may reduce the risk. Excision is a specialist decision, combined with adjuvant treatment."
    },
    {
     "h": "Intralesional steroid",
     "t": "Triamcinolone acetonide injected into the keloid can flatten it and ease itch, usually as a course of injections several weeks apart (dose per BNF). Side effects include skin thinning and lightening of skin colour — more visible on darker skin, so discuss it openly."
    },
    {
     "h": "Silicone and pressure",
     "t": "Silicone gel or sheets and pressure (for example pressure earrings after earlobe treatment) help flatten and soften scars and are used after treatment to reduce recurrence."
    },
    {
     "h": "Prevention",
     "t": "Avoid further piercings and non-essential cosmetic procedures, especially on the chest, shoulders and earlobes; treat acne and new keloids early. Frame this as a skin tendency, not a fault."
    },
    {
     "h": "When to think again",
     "t": "A lesion that bleeds, ulcerates, grows quickly or looks different from her other scars, or a ‘keloid’ with no history of skin injury, needs review for another diagnosis, including skin cancer."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Amara, I’m Dr Lee. It sounds like these scars have been a real nuisance, and you’ve already been through one operation that didn’t work. Tell me about them.",
    "dom": "rto",
    "why": "Acknowledges her experience and opens the story"
   },
   {
    "who": "pt",
    "text": "The chest one started from a spot and just kept growing. The ear one’s from a piercing. They’re itchy and sometimes sore. I had the chest one cut out and it came back bigger. And my sister’s getting married in a few months."
   },
   {
    "who": "dr",
    "text": "Thank you. I’d like to understand them properly, then be honest with you about what works, and agree a plan that has the wedding in mind. Is that okay?",
    "dom": "gs",
    "why": "Agenda that names her deadline"
   },
   {
    "who": "pt",
    "text": "Yes, please."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Could you show me both on the camera? Did they grow beyond the size of the original spot and piercing?",
    "dom": "tasks",
    "why": "Uses video to assess the defining feature of keloid"
   },
   {
    "who": "pt",
    "text": "(Shows chest and ear.) Yes, way bigger. The chest one’s wider than it was before they cut it."
   },
   {
    "who": "dr",
    "text": "That’s helpful. Has either ever bled, broken down, grown very quickly, or changed colour differently from the rest?",
    "dom": "tasks",
    "why": "Screens for features that suggest another diagnosis"
   },
   {
    "who": "pt",
    "text": "No. They just itch, and the chest one’s sometimes tender."
   },
   {
    "who": "dr",
    "text": "Do you know what was done after the chest one was cut out — any injections or pressure dressings?",
    "dom": "tasks",
    "why": "Establishes whether adjuvant therapy was used"
   },
   {
    "who": "pt",
    "text": "I’m not sure. Nobody mentioned anything else."
   },
   {
    "who": "dr",
    "text": "Do you get spots on your chest or back at the moment, or are you planning any more piercings or procedures?",
    "dom": "tasks",
    "why": "Looks for ongoing triggers and prevention opportunities"
   },
   {
    "who": "pt",
    "text": "Not at the moment. Why?"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "What do you think went wrong last time?",
    "dom": "rto",
    "why": "Elicits her idea"
   },
   {
    "who": "pt",
    "text": "I think they just didn’t do it properly. If a better surgeon cut it out, it’d be gone."
   },
   {
    "who": "dr",
    "text": "And how are the scars affecting you — especially with the wedding coming?",
    "dom": "rto",
    "why": "Explores the emotional and cultural impact"
   },
   {
    "who": "pt",
    "text": "Everyone will see it in the photos. I’m so self-conscious about it, and the itching drives me mad."
   },
   {
    "who": "dr",
    "text": "That sounds really hard — wanting to enjoy your sister’s day and feeling the scar will be what people see. I want to help with that, honestly and properly.",
    "dom": "rto",
    "why": "Validates the distress without minimising it"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "These are keloid scars. They’re an overgrowth of scar tissue that spreads beyond the original wound. They’re more common in people with darker skin, and on the chest and earlobes. It’s the way your skin heals, not anything you did.",
    "dom": "tasks",
    "why": "Names keloid, contrasts with ordinary scars, without blame"
   },
   {
    "who": "pt",
    "text": "So can it be cut out?"
   },
   {
    "who": "dr",
    "text": "I’ll be straight with you. Cutting a keloid out on its own usually doesn’t work — the cut makes a new, bigger wound, and that heals as keloid too. That’s probably what happened last time; it wasn’t just the surgeon.",
    "dom": "tasks",
    "why": "Honest about excision failing, addressing her idea directly"
   },
   {
    "who": "pt",
    "text": "(Quiet.) So I’m stuck with it."
   },
   {
    "who": "dr",
    "text": "No — there are treatments that help. Steroid injections into the scar can flatten it and calm the itch, usually a few sessions weeks apart. Silicone gel or sheets and pressure help too. Occasionally specialists do surgery, but always with injections or other treatment afterwards to stop it coming back. The aim is to control it, and it can come back, so we keep an eye on it.",
    "dom": "tasks",
    "why": "Control-focused options, recurrence named"
   },
   {
    "who": "pt",
    "text": "Would the injections work before the wedding?"
   },
   {
    "who": "dr",
    "text": "It may flatten and itch less within a few months, but I can’t promise it will be gone. The injections can also lighten the skin a bit, which shows more on darker skin — that’s something to weigh up with the dermatologist. Make-up or camouflage products can help for the day itself.",
    "dom": "tasks",
    "why": "Realistic timescale and skin-of-colour side effect"
   },
   {
    "phase": "Shared plan",
    "clock": "8–11 min",
    "who": "dr",
    "text": "What I suggest is a referral to dermatology for injections and a proper plan for both scars. Meanwhile, silicone gel on the chest scar may help the itch. And because your skin forms keloids, I’d advise against any more piercings or non-essential procedures in future — especially on the ears, chest and shoulders. Does that make sense?",
    "dom": "tasks",
    "why": "Referral, interim relief and prevention advice"
   },
   {
    "who": "pt",
    "text": "I didn’t know that. Yes, that makes sense."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If either scar bleeds, breaks down, grows very fast or starts to look different from the others, let me know quickly — that would need a different check. Otherwise I’ll send the referral today. Can you tell me the plan back in your words?",
    "dom": "gs",
    "why": "Specific safety-net and teach-back"
   },
   {
    "who": "pt",
    "text": "Don’t just cut it out. Injections at dermatology, silicone gel for now, no more piercings. And tell you if it changes."
   },
   {
    "who": "dr",
    "text": "That’s it exactly. I’ll also send you some information about keloids, and we’ll speak again once you’ve seen dermatology. Thank you, Amara.",
    "dom": "gs",
    "why": "Closes with information and review"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; acknowledged the previous failed excision; let her tell the story of both scars.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored the wedding and photos, self-consciousness, itch, and any future piercings or procedures.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up ‘everyone will see it’ and the self-consciousness, and planned around the wedding.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: a better surgeon would remove it. Concern: visible scar at the wedding, itch. Expectation: excision before the wedding.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Viewed both scars by video; asked about growth beyond the wound, bleeding, ulceration and rapid change; no tests needed.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Keloid vs hypertrophic scar; considered another diagnosis if a lesion bleeds, ulcerates or behaves differently.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for bleeding, ulceration, rapid growth or atypical change needing review for skin cancer.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named keloid clearly, explained why excision alone recurs, without blame.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Dermatology referral for intralesional steroid (dose per BNF); silicone; pressure after earlobe treatment; realistic timescale; skin lightening discussed.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Addressed itch and tenderness; prevention (no further piercings); camouflage for the day; cultural sensitivity.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named changes to report; referral sent; information given; review after dermatology.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Ethnicity, culture & diversity",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Amara Bello",
    "age": "24 years · female",
    "pmh": [
     "Scar chest — excised elsewhere, recurred",
     "Scar earlobe (piercing)"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Previous excision of chest scar elsewhere; recurred larger. No record of adjuvant treatment. No dermatology referral on file.",
    "reason": "“Can you just cut it off properly this time?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and acknowledge",
     "d": "She has been let down once. Acknowledge the failed excision and the wedding early."
    },
    {
     "t": "1–4",
     "h": "Look and ask",
     "d": "Show both on camera: beyond the wound? Itch, tenderness, bleeding, ulceration, rapid change. What happened after the excision. Future piercings."
    },
    {
     "t": "4–6",
     "h": "ICE and impact",
     "d": "Her idea (bad surgery) and the wedding photos. Validate the distress."
    },
    {
     "t": "6–8",
     "h": "Honest explanation",
     "d": "Keloid; why excision alone recurs; injections, silicone, pressure; control not cure; skin lightening on darker skin."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Dermatology referral; silicone now; no new piercing; camouflage for the day; changes to report; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Agrees to refer for simple excision; or says nothing can be done; doesn’t explain keloid; ignores the wedding and her distress.",
    "pass": "Recognises keloid; explains excision alone often recurs; offers dermatology for steroid injections with silicone and pressure; sets expectation of control; basic safety-net.",
    "exc": "All of the above, plus: explores what the wedding means to her; addresses her belief that the surgeon was at fault kindly; discusses skin lightening from injections on darker skin; gives prevention advice on future piercings; offers practical help for the day; teach-back."
   },
   "avoid": [
    {
     "dont": "“I’ll refer you to have it cut out properly.”",
     "instead": "“Cutting it out on its own usually makes it come back bigger. Let’s get you the treatment that controls it.”",
     "why": "Agreeing to simple excision is the clinical fail in this station."
    },
    {
     "dont": "“There’s nothing we can do about keloids.”",
     "instead": "“There are treatments that flatten them and ease the itch — the aim is control.”",
     "why": "Nihilism is as wrong as over-promising, and loses her trust."
    },
    {
     "dont": "“It’s just cosmetic.”",
     "instead": "“It clearly matters to you, especially with the wedding. Let’s plan with that in mind.”",
     "why": "Minimising a visible difference loses Relating marks."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Visible difference",
     "t": "A visible scar before a family wedding has real emotional weight. Ask what it means to her."
    },
    {
     "h": "Cultural context",
     "t": "Keloids are more common in people of African heritage. Piercing and other cultural or fashion practices matter; advise without judging."
    }
   ],
   "legal": [
    {
     "h": "Consent and expectations",
     "t": "GMC decision-making and consent guidance (2020): she needs to know the realistic chance of benefit, the recurrence risk and side effects such as skin lightening before choosing a treatment."
    }
   ],
   "professional": [
    {
     "h": "Honesty after previous care",
     "t": "Explain why the previous excision recurred without criticising another clinician (GMC Good Medical Practice, 2024)."
    },
    {
     "h": "Skin of colour",
     "t": "Describe signs and side effects as they appear on darker skin; do not assume textbook images apply."
    }
   ],
   "community": [
    {
     "h": "Information and support",
     "t": "BAD patient leaflets on keloids and intralesional steroid therapy; Changing Faces for support with visible difference."
    },
    {
     "h": "Camouflage",
     "t": "Specialist camouflage make-up for the wedding day while treatment takes effect."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Bleeding, ulceration, rapid growth or a lesion unlike her other scars → review for another diagnosis, including skin cancer",
     "A ‘keloid’ with no preceding skin injury or unusual site → reconsider the diagnosis",
     "Any further piercing or cosmetic procedure → high risk of new keloid"
    ],
    "psychosocial": [
     "Sister’s wedding; photographs; self-consciousness",
     "Frustration and loss of trust after the failed excision",
     "Itch and tenderness affecting clothing and daily comfort"
    ],
    "ice": [
     "Idea: the previous surgeon didn’t do it properly",
     "Concern: the scar will be seen at the wedding; itch and discomfort",
     "Expectation: to have it cut off before the wedding"
    ]
   },
   "diagnosis": "“These are keloid scars — scar tissue that keeps growing beyond the original wound. It’s the way your skin heals, and it’s more common with darker skin.”",
   "diagnosisLay": "“Your skin’s repair system doesn’t know when to stop, so it keeps laying down scar tissue past the edge of the wound. Cutting it out gives it a new wound to overgrow — so we calm it down instead.”",
   "management": {
    "reflectIce": "“You wanted it cut out before the wedding, and I understand why. I’d rather give you something that helps than something that may make it bigger again.”",
    "psychosocial": "Plan around the wedding with a realistic timescale, camouflage for the day, and no blame for her skin type.",
    "sharedPlan": [
     "Dermatology referral for intralesional triamcinolone (course of injections; dose per BNF), with silicone and pressure",
     "Silicone gel or sheets for the chest scar now for itch and softening",
     "Avoid new piercings and non-essential procedures; treat new keloids early"
    ],
    "safetyNet": [
     "Bleeding, ulceration, rapid growth or change → review promptly",
     "Warn about skin thinning and lightening with injections; review after the dermatology plan"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Acne",
    "s": "Protocol · scarring and keloid risk",
    "href": "management/acne.html"
   },
   {
    "ic": "🗺️",
    "t": "Skin lumps pathway",
    "s": "Visual algorithm · subcutaneous lumps",
    "href": "algorithms/subcutaneous-lumps.html"
   },
   {
    "ic": "📄",
    "t": "Patient leaflets",
    "s": "Printable information",
    "href": "leaflets.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by saying yes to the request. The marks go to an honest ‘no, but here’s what helps’, delivered with warmth.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Referring for simple excision because she asked.",
     "why": "BAD (2017): excision is rarely successful and the keloid is likely to regrow, often larger.",
     "fix": "Explain why, then offer the treatments that control it."
    },
    {
     "dom": "tasks",
     "fail": "Not distinguishing keloid from hypertrophic scar.",
     "why": "Hypertrophic scars settle; keloids spread beyond the wound and recur. The distinction drives the advice.",
     "fix": "Ask whether it grew beyond the original wound, and look on camera."
    },
    {
     "dom": "rto",
     "fail": "Blaming the previous surgeon, or her.",
     "why": "Criticism of colleagues or implied fault damages trust and professionalism.",
     "fix": "“It’s how keloids behave — cutting alone makes a new wound for them to grow into.”"
    },
    {
     "dom": "tasks",
     "fail": "Promising injections will make it vanish before the wedding.",
     "why": "Over-promising leads to disappointment; response takes months and recurrence is common.",
     "fix": "Say it may flatten and itch less, name skin lightening, and offer camouflage for the day."
    },
    {
     "dom": "gs",
     "fail": "No prevention advice.",
     "why": "Prevention is part of the task; a new piercing in a keloid-prone person is a predictable harm.",
     "fix": "Ask about future piercings or procedures and advise against non-essential ones."
    },
    {
     "dom": "rto",
     "fail": "“It’s only cosmetic.”",
     "why": "Ignores the emotional and cultural weight of a visible scar at a family wedding.",
     "fix": "Ask what the wedding means to her and plan with it in mind."
    }
   ]
  }
 },
 "male-pattern-hair-loss": {
  "stem": {
   "name": "Jordan Pryce",
   "age": "31-year-old man",
   "pmh": [
    "Nil relevant recorded"
   ],
   "meds": [
    "No prescribed medication; self-bought caffeine shampoo, biotin and ‘thickening’ supplements"
   ],
   "allergy": "None recorded",
   "recent": "Two years of receding at the temples and thinning at the crown. Father and grandfather bald early. Has tried caffeine shampoo, biotin, supplements, a derma roller and an online regrowth kit without benefit.",
   "reason": "Video consultation: “What actually works for my hair?”"
  },
  "knowledge": {
   "guideline": "PCDS Hair Loss: Primary Care Treatment Pathway (Nov 2024) · BAD male pattern hair loss leaflet (2016) · MHRA Drug Safety Update (April 2024 and May 2026) · finasteride 1 mg and minoxidil 5% SPCs · NHS Drug Tariff Part XVIIIA · NICE CG31",
   "summary": "Temple recession and crown thinning with a strong family history is a clinical diagnosis of male pattern hair loss. Two treatments have evidence — topical minoxidil and oral finasteride — neither is available on an NHS prescription, and both work only while used.",
   "points": [
    {
     "h": "Diagnose clinically",
     "t": "Patterned loss at the temples and crown with miniaturised hairs and a family history needs no tests when typical. Check the scalp for scarring (redness, scale, loss of follicle openings) — scarring alopecia needs urgent dermatology referral (PCDS 2024)."
    },
    {
     "h": "Mimics to exclude",
     "t": "Telogen effluvium (diffuse shedding 2–6 months after a trigger, settling over 6–9 months), alopecia areata (smooth patches, exclamation-mark hairs) and tinea capitis. FBC, ferritin and TFTs only if loss is diffuse or the picture is atypical (PCDS)."
    },
    {
     "h": "Topical minoxidil",
     "t": "5% solution or foam, 1 ml twice daily, maximum 2 ml a day, licensed for men aged 18–49 (SPC). Early shedding is common; judge response after at least 6 and possibly 12 months (BAD); benefit lasts only while used. Bought over the counter."
    },
    {
     "h": "Oral finasteride 1 mg",
     "t": "1 mg daily; 3–6 months to stabilise and a year or more to show benefit; gains reverse by 6 months and return to baseline by 9–12 months after stopping (SPC). About 2% report reduced libido or erection problems (BAD). Lowers PSA. Not for women; crushed or broken tablets should not be handled in pregnancy."
    },
    {
     "h": "MHRA mood warning",
     "t": "MHRA Drug Safety Update (April 2024 and 11 May 2026): ask about any history of depression or suicidal thoughts before prescribing, give the patient alert card, and stop if depression or suicidal thoughts develop; sexual effects may persist after stopping."
    },
    {
     "h": "NHS access and marketing",
     "t": "Finasteride 1 mg and minoxidil scalp preparations are listed in NHS Drug Tariff Part XVIIIA and cannot be prescribed on FP10. Caffeine shampoos, biotin (without deficiency) and most supplements lack good evidence; biotin can interfere with some laboratory tests. Screen for body dysmorphic disorder where preoccupation is marked (NICE CG31)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi Jordan, I’m Dr Lee. That sounds like a lot of money and hope spent on things that haven’t worked. I’ll give you the honest version, I promise. First, can you tell me what you’ve noticed and how it’s been affecting you?",
    "dom": "rto",
    "why": "Acknowledges frustration and commits to honesty before gathering data"
   },
   {
    "who": "pt",
    "text": "It’s going at the temples and the crown. Same as my dad and my grandad. And it’s really getting to me — I check it all the time."
   },
   {
    "who": "dr",
    "text": "Thanks. I’d like to check a few things to be sure it’s what it looks like, then go through what really works, what doesn’t, and what fits you. Okay?",
    "dom": "gs",
    "why": "Sets a clear, shared agenda"
   },
   {
    "who": "pt",
    "text": "Yeah, go for it."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Is it a gradual thinning in those areas, or have you noticed hair coming out in handfuls, or smooth bald patches anywhere?",
    "dom": "tasks",
    "why": "Distinguishes patterned loss from telogen effluvium and alopecia areata"
   },
   {
    "who": "pt",
    "text": "Gradual. Two years or so. No patches."
   },
   {
    "who": "dr",
    "text": "Any itching, soreness, redness or flaking on the scalp?",
    "dom": "tasks",
    "why": "Screens for scarring alopecia and tinea capitis"
   },
   {
    "who": "pt",
    "text": "No, the scalp’s fine."
   },
   {
    "who": "dr",
    "text": "Any big illness, operation, crash diet or very stressful time in the months before it started? And any tiredness, weight change or feeling the cold?",
    "dom": "tasks",
    "why": "Screens for triggers of shedding and thyroid or iron problems"
   },
   {
    "who": "pt",
    "text": "Nothing like that."
   },
   {
    "who": "dr",
    "text": "Could you show me the front and crown on the camera, in good light?",
    "dom": "tasks",
    "why": "Uses video to confirm the pattern"
   },
   {
    "who": "pt",
    "text": "(Tilts head.) There — see?"
   },
   {
    "who": "dr",
    "text": "I can see recession at the temples and thinning at the crown, and your scalp looks healthy. With your family history, this is male pattern hair loss — genes and hormones, not something you’ve done wrong.",
    "dom": "tasks",
    "why": "Confident clinical diagnosis without unnecessary tests"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said it’s really getting to you and you check it all the time. Can you tell me more about how it’s affecting you?",
    "dom": "rto",
    "why": "Follows the emotional cue"
   },
   {
    "who": "pt",
    "text": "Confidence, mostly. Photos, the mirror. I think I thought if I found the right product it would stop. Now I feel a bit stupid for spending so much."
   },
   {
    "who": "dr",
    "text": "You’re not stupid — those products are marketed very cleverly, and hair matters to how people see themselves. How has your mood been generally? Does it ever take up hours of your day or stop you going out?",
    "dom": "tasks",
    "why": "Validates and screens low mood and body dysmorphic concern"
   },
   {
    "who": "pt",
    "text": "Not hours. I’m not depressed, just fed up with it."
   },
   {
    "phase": "Explanation",
    "clock": "6–9 min",
    "who": "dr",
    "text": "Here’s the straight answer. Two treatments have good evidence. Minoxidil is a lotion or foam you use twice a day. Finasteride is a daily tablet. Both slow the loss and can bring some regrowth, especially at the crown. Neither brings it all back.",
    "dom": "tasks",
    "why": "Honest evidence summary"
   },
   {
    "who": "pt",
    "text": "How long before I’d know?"
   },
   {
    "who": "dr",
    "text": "Minoxidil often causes a bit of extra shedding at first, and you need at least six months, possibly a year, to judge it. Finasteride takes a year or more. And both only work while you use them — stop, and within about a year you’re back to where you would have been.",
    "dom": "tasks",
    "why": "Realistic time course and ongoing-use caveat"
   },
   {
    "who": "pt",
    "text": "Right. And the tablet — I’ve read scary stuff online."
   },
   {
    "who": "dr",
    "text": "It’s fair to ask. A small number of men get reduced sex drive or erection problems, and occasionally these carry on after stopping. The medicines regulator also warns about low mood and suicidal thoughts, so before anyone prescribes it they should ask about your mental health. Has there been any depression in the past?",
    "dom": "tasks",
    "why": "MHRA 2024 and 2026 warnings, with the required mood history"
   },
   {
    "who": "pt",
    "text": "Not that I know of."
   },
   {
    "who": "dr",
    "text": "Thanks. And the shampoos, biotin and kits — there’s little good evidence they help unless you’re actually deficient. Neither minoxidil nor finasteride can be prescribed on the NHS for this, so they’re bought from a pharmacy or privately. A transplant is also possible privately, at real cost.",
    "dom": "tasks",
    "why": "Names the marketing honestly and explains NHS access"
   },
   {
    "phase": "Shared decision and close",
    "clock": "9–12 min",
    "who": "dr",
    "text": "So the options are: try minoxidil, consider finasteride through a pharmacy or private prescriber, look at cosmetic options, or decide not to treat. All are reasonable. What feels right to you?",
    "dom": "rto",
    "why": "Supports an informed, autonomous choice"
   },
   {
    "who": "pt",
    "text": "Probably minoxidil first. Stop wasting money on the other stuff."
   },
   {
    "who": "dr",
    "text": "That sounds sensible. Take photos now in the same light, so in six months you can compare fairly. If you notice patches, a sore or red scalp, or your mood dropping — especially if you start finasteride — come back. And if it starts taking over your day, we can talk about support for that too.",
    "dom": "gs",
    "why": "Review point, return triggers and mood safety-net"
   },
   {
    "who": "pt",
    "text": "Okay. That’s the first straight answer I’ve had."
   },
   {
    "who": "dr",
    "text": "Just so I know it landed, what will you tell a mate who asks what works?",
    "dom": "rto",
    "why": "Teach-back with realistic expectations"
   },
   {
    "who": "pt",
    "text": "Minoxidil or finasteride, give it a year, keep using it — and the shampoos are a con."
   },
   {
    "who": "dr",
    "text": "Spot on. I’ll send you some reliable reading, and we can review in six months if you’d like.",
    "dom": "gs",
    "why": "Closes with signposting and optional review"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; acknowledged the money and frustration; let him say how it affects him before narrowing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored confidence, mirror-checking and photos; the cost of past products; mood; his wish for honesty.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Followed ‘it’s really getting to me’ and ‘I feel stupid’; screened for body dysmorphic concern without over-medicalising.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: the right product exists. Concern: confidence and following his father’s pattern. Expectation: a straight answer.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Inspected scalp by video in good light; no bloods needed for typical pattern; FBC, ferritin, TFTs only if diffuse or atypical.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Male pattern hair loss vs telogen effluvium, alopecia areata, tinea capitis and scarring alopecia.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about scalp redness, soreness or scale (scarring alopecia → urgent dermatology) and about patches; screened mood before any finasteride.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated male pattern hair loss confidently and explained it in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Honest options: minoxidil (1 ml twice daily, judge at 6–12 months), finasteride 1 mg (MHRA mood and sexual warnings), cosmetic, transplant, or no treatment; NHS access explained.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Addressed mood and self-image; noted finasteride lowers PSA; not for women and pregnancy handling caution.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Baseline photos; review at about six months; return for patches, scalp symptoms or low mood; reliable information given.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Jordan Pryce",
    "age": "31 years · male",
    "pmh": [
     "Nil relevant recorded"
    ],
    "meds": [
     "Self-bought: caffeine shampoo, biotin, supplements"
    ],
    "allergy": "None recorded",
    "recent": "⚠ No previous consultation for hair loss. Family history (patient-reported): father and grandfather bald early.",
    "reason": "“Just tell me straight: what actually works, and what’s a con?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and acknowledge",
     "d": "He opens frustrated about money wasted. Acknowledge it and promise honesty, then ask how it affects him."
    },
    {
     "t": "1–4",
     "h": "Confirm the pattern",
     "d": "Gradual temple and crown loss, family history, no patches, healthy scalp, no shedding trigger. Look on camera."
    },
    {
     "t": "4–6",
     "h": "The emotional layer",
     "d": "Confidence, mirror-checking, feeling foolish. Screen mood and body dysmorphic concern."
    },
    {
     "t": "6–9",
     "h": "Honest evidence",
     "d": "Minoxidil and finasteride: effect, time course, ongoing use, side effects and MHRA mood warning. Marketing named. NHS access."
    },
    {
     "t": "9–12",
     "h": "Choice and close",
     "d": "Options including no treatment; baseline photos; review at six months; return for patches, scalp symptoms or low mood; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Says “it’s only hair” or “it’s genetic, nothing to be done”; or oversells a cure; misses the MHRA mood warning for finasteride; never asks how it affects him.",
    "pass": "Diagnoses male pattern hair loss confidently; excludes mimics briefly; explains minoxidil and finasteride with realistic timeframes and side effects; says they are not on NHS prescription; asks about impact.",
    "exc": "All of the above, plus: validates the money spent without judgement; screens mood and body dysmorphic concern proportionately; asks about past depression before discussing finasteride; offers no-treatment as a real option; sets baseline photos and a fair review point; teach-back confirms realistic expectations."
   },
   "avoid": [
    {
     "dont": "“It’s only hair — lots of men go bald.”",
     "instead": "“Hair matters to how people see themselves. Tell me how it’s been affecting you.”",
     "why": "Trivialising the distress loses Relating marks and misses mood problems."
    },
    {
     "dont": "“Finasteride will sort it.”",
     "instead": "“It can slow the loss and bring some back, but it takes a year, only works while you take it, and has side effects to weigh up.”",
     "why": "Overselling breaks the honesty he asked for."
    },
    {
     "dont": "“I can’t help — it’s not available on the NHS.”",
     "instead": "“It can’t be prescribed on the NHS, but I can tell you honestly what works and how to get it safely.”",
     "why": "NHS funding limits don’t remove your role in advice and safety."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Cost and marketing",
     "t": "Money spent on unproven products can bring shame as well as frustration. Naming the marketing, not the man, keeps trust."
    },
    {
     "h": "Self-image",
     "t": "Hair loss in young men can affect confidence, dating, work and photos. Ask about impact; most need validation and information, a few need support for mood or body dysmorphic concern."
    }
   ],
   "legal": [
    {
     "h": "Prescribing limits",
     "t": "NHS Drug Tariff Part XVIIIA lists finasteride 1 mg and minoxidil scalp preparations as not prescribable on FP10. Advice remains NHS care; supply is by pharmacy or private prescription."
    },
    {
     "h": "MHRA safety",
     "t": "MHRA Drug Safety Update (April 2024, May 2026): patient alert card for finasteride; ask about depression and suicidal thoughts before prescribing; report suspected reactions via the Yellow Card scheme."
    }
   ],
   "professional": [
    {
     "h": "Honesty and online supply",
     "t": "GMC Good Medical Practice (2024): give honest, balanced information. Advise that online prescribers should take a mood history and give the MHRA warnings before supplying finasteride."
    },
    {
     "h": "Shared decision-making",
     "t": "No treatment is a legitimate informed choice. GMC decision-making and consent guidance (2020) applies to cosmetic as well as medical decisions."
    }
   ],
   "community": [
    {
     "h": "Reliable information",
     "t": "BAD patient leaflet on male pattern hair loss; Alopecia UK for peer support."
    },
    {
     "h": "Psychological support",
     "t": "NHS Talking Therapies self-referral if low mood or body-image distress is significant."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Red, scaly or sore scalp with loss of follicle openings → possible scarring alopecia; urgent dermatology referral (PCDS 2024)",
     "Sudden smooth patches or diffuse shedding → reconsider alopecia areata or telogen effluvium",
     "Low mood, suicidal thoughts or hours of preoccupation → assess mental health; no finasteride without a mood history"
    ],
    "psychosocial": [
     "Confidence, mirror-checking and photos",
     "Money spent and feeling foolish",
     "Mood and any past depression, before discussing finasteride"
    ],
    "ice": [
     "Idea: the right product exists and he just hasn’t found it",
     "Concern: losing his hair young, like his father; confidence",
     "Expectation: a straight answer on what works and what is a con"
    ]
   },
   "diagnosis": "“This is male pattern hair loss — the pattern and your family history fit exactly, and your scalp is healthy. It’s genes and hormones, not something you caused.”",
   "diagnosisLay": "“Your hair follicles are slowly shrinking under the effect of a hormone, so each new hair grows thinner and shorter. The treatments that work slow that shrinking; they can’t undo all of it.”",
   "management": {
    "reflectIce": "“You asked for the straight answer, so here it is — and I’m sorry you’ve spent so much on things that were never going to work.”",
    "psychosocial": "Validate the distress, screen mood proportionately, and present no treatment and cosmetic options as legitimate choices.",
    "sharedPlan": [
     "Minoxidil 5% 1 ml twice daily (maximum 2 ml a day); expect early shedding; judge at 6–12 months; continue to keep benefit",
     "Finasteride 1 mg only after a mood history and the MHRA warnings; sexual side effects may persist; lowers PSA; private or pharmacy supply",
     "Stop spending on unproven products; baseline photos; consider cosmetic options or transplant privately if wanted"
    ],
    "safetyNet": [
     "Return for patches, a red or sore scalp, or low mood (stop finasteride and seek help if mood changes)",
     "Review at about six months with comparison photos"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Male pattern hair loss",
    "s": "Protocol · minoxidil and finasteride",
    "href": "management/male-pattern-hair-loss.html"
   },
   {
    "ic": "🗺️",
    "t": "Hair loss pathway",
    "s": "Visual algorithm · scarring vs non-scarring",
    "href": "algorithms/hair-loss.html"
   },
   {
    "ic": "📋",
    "t": "Depression",
    "s": "Case walkthrough · mood screen",
    "href": "../cases/depression.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by being either dismissive or salesy. He asked for honesty — the marks go to the candidate who gives it with warmth.",
   "items": [
    {
     "dom": "rto",
     "fail": "“It’s only hair.”",
     "why": "Trivialises real distress and misses the emotional task.",
     "fix": "Ask how it affects him and reflect it back before giving facts."
    },
    {
     "dom": "tasks",
     "fail": "Ordering a full blood screen for typical patterned loss.",
     "why": "Male pattern hair loss is a clinical diagnosis; tests add cost and delay when the picture is typical (PCDS 2024).",
     "fix": "Brief screen for mimics; bloods only if diffuse shedding or atypical features."
    },
    {
     "dom": "tasks",
     "fail": "Recommending finasteride without asking about mood.",
     "why": "MHRA Drug Safety Update (April 2024 and May 2026) asks prescribers to ask about depression and suicidal thoughts first.",
     "fix": "Take a mood history and name the sexual and mood warnings before any recommendation."
    },
    {
     "dom": "tasks",
     "fail": "“You’ll see results in three months.”",
     "why": "Unrealistic timelines lead to stopping early. BAD advises at least six and possibly twelve months for minoxidil; finasteride needs a year or more.",
     "fix": "Give realistic timeframes and suggest baseline photos."
    },
    {
     "dom": "gs",
     "fail": "Leaving out NHS access, so he expects a prescription.",
     "why": "Finasteride 1 mg and minoxidil scalp preparations are in Drug Tariff Part XVIIIA.",
     "fix": "Explain supply honestly and what to check with online providers."
    },
    {
     "dom": "gs",
     "fail": "No choice offered and no review point.",
     "why": "Shared decision-making and follow-up are both marked.",
     "fix": "Lay out options including no treatment; agree review at about six months."
    }
   ]
  }
 },
 "methotrexate-early-request": {
  "stem": {
   "name": "Bridget Nwosu",
   "age": "58-year-old woman",
   "pmh": [
    "Rheumatoid arthritis — rheumatology shared care"
   ],
   "meds": [
    "Methotrexate 17.5 mg once weekly (oral)",
    "Folic acid (once weekly, on a different day)"
   ],
   "allergy": "None recorded",
   "recent": "Repeat methotrexate requested earlier than expected. Check the date and results of the last shared-care FBC, LFTs and U&E before issuing.",
   "reason": "Video consultation: asks for another methotrexate prescription today because she has run out early."
  },
  "knowledge": {
   "guideline": "MHRA Drug Safety Update (September 2020) · NPSA oral methotrexate alert (2006) · BSR csDMARD guideline (2025) · BNF · FSRH Contraception for women aged over 40 years (2017, amended 2019)",
   "summary": "An early methotrexate request is a safety signal. Find out why, exclude daily dosing and toxicity, confirm monitoring is up to date, then issue a safe quantity — or escalate.",
   "points": [
    {
     "h": "Weekly, never daily",
     "t": "MHRA Drug Safety Update (September 2020): fatal overdoses have followed daily instead of weekly dosing. Confirm the dose and the day of the week, record the day on the prescription, and remind the patient at each issue. Use a single tablet strength (2.5 mg) per the NPSA 2006 alert and BNF."
    },
    {
     "h": "Why did it run out?",
     "t": "Dosing more often than weekly, confusion between tablet strengths, lost tablets, a change in pack size, or someone else taking them. Ask her to count the remaining tablets and read the strength from the box."
    },
    {
     "h": "Toxicity red flags",
     "t": "Mouth ulcers, sore throat, fever or infection, unexplained bruising or bleeding (marrow suppression); new cough or breathlessness (pneumonitis); nausea, abdominal pain or jaundice (hepatotoxicity). Stop methotrexate and assess the same day with urgent FBC, LFTs and U&E. Suspected overdose needs hospital assessment for folinic acid rescue."
    },
    {
     "h": "The monitoring gate",
     "t": "BSR csDMARD guideline (2025): once stable without risk factors, FBC, LFTs and renal function are checked about every 3 months, with more frequent tests after starting or changing the dose. Do not prescribe if monitoring is overdue or results are abnormal until reviewed."
    },
    {
     "h": "Interactions",
     "t": "BNF: avoid trimethoprim and co-trimoxazole (serious marrow toxicity). Take care with NSAIDs, other nephrotoxic drugs and alcohol. Folic acid is taken on a different day; dose per BNF."
    },
    {
     "h": "Contraception at 58",
     "t": "Methotrexate is teratogenic, but FSRH guidance says contraception can be stopped at 55 because pregnancy risk is extremely low. Contraception counselling is unlikely to apply to her; check rather than assume."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Nwosu, I’m Dr Lee. I see you’ve asked for more methotrexate. What’s happened?",
    "dom": "rto",
    "why": "Open question on the request"
   },
   {
    "who": "pt",
    "text": "I’ve run out a bit early and just need another prescription. Could you print one quickly? I’ve got a bus to catch. It’s my usual, nothing’s changed."
   },
   {
    "who": "dr",
    "text": "I understand you’re short of time, and I’ll be as quick as I can. Methotrexate is one of the few medicines where running out early needs a couple of safety checks before I prescribe — getting the dose wrong can be dangerous. Can you give me five minutes?",
    "dom": "gs",
    "why": "Acknowledges pressure and explains the agenda"
   },
   {
    "who": "pt",
    "text": "If it’s quick. I’ve been on it for ages."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Talk me through exactly how you take it — how many tablets, and how often?",
    "dom": "tasks",
    "why": "Establishes actual dosing with an open question"
   },
   {
    "who": "pt",
    "text": "Seventeen and a half milligrams, once a week, same day every week. And the folic acid on another day."
   },
   {
    "who": "dr",
    "text": "That’s right. Have you ever taken any of it on other days — perhaps if you missed a week, or thought it was a daily tablet?",
    "dom": "tasks",
    "why": "Actively excludes daily or extra dosing"
   },
   {
    "who": "pt",
    "text": "No. Just the once a week."
   },
   {
    "who": "dr",
    "text": "Then I’d like to work out why it ran short. Do you have the box handy? Could you read me the strength on it and count how many tablets are left?",
    "dom": "tasks",
    "why": "Checks tablet strength and quantity objectively"
   },
   {
    "who": "pt",
    "text": "Hang on… it says 2.5 milligrams. There are none left. I honestly don’t know why — I thought I had another box."
   },
   {
    "who": "dr",
    "text": "Thank you — that’s helpful. Is anyone else at home able to get to your tablets, or might some have been lost?",
    "dom": "tasks",
    "why": "Considers loss or another person taking them"
   },
   {
    "who": "pt",
    "text": "Not that I know of. I might have miscounted at the pharmacy."
   },
   {
    "who": "dr",
    "text": "A few quick safety questions. Any mouth ulcers, sore throat, fevers or infections? Any unusual bruising or bleeding? Any new cough or breathlessness? Any sickness, tummy pain or yellow skin?",
    "dom": "tasks",
    "why": "Screens toxicity red flags"
   },
   {
    "who": "pt",
    "text": "No, none of that. I feel fine."
   },
   {
    "who": "dr",
    "text": "Have you had any antibiotics recently, or started anything new — including painkillers from the chemist?",
    "dom": "tasks",
    "why": "Checks interacting drugs"
   },
   {
    "who": "pt",
    "text": "No, nothing new."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said it should be straightforward. What were you worried would happen if you missed a dose?",
    "dom": "rto",
    "why": "Explores the idea and concern behind the rush"
   },
   {
    "who": "pt",
    "text": "My joints flaring. And I didn’t think a repeat was a big deal."
   },
   {
    "who": "dr",
    "text": "That makes complete sense — nobody wants a flare. So you were hoping for the prescription today, and to keep your joints settled?",
    "dom": "rto",
    "why": "Validates and summarises expectations"
   },
   {
    "who": "pt",
    "text": "Exactly."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Good news: you’re taking it correctly and you have no warning signs. The reason I asked is that methotrexate taken more often than weekly can seriously harm the blood and liver. So an early request is something we always check, not because I doubted you.",
    "dom": "rto",
    "why": "Explains the safety rationale without blame"
   },
   {
    "who": "pt",
    "text": "I didn’t know it was that serious."
   },
   {
    "who": "dr",
    "text": "The other check is your blood tests. While we’ve been talking I’ve looked at the dates. The rheumatology plan needs a blood count, liver and kidney test regularly. If they’re up to date and normal, I can prescribe today. If they’re overdue, I’ll need a blood test first — I can often get that done within a day or two so you don’t miss your dose.",
    "dom": "tasks",
    "why": "Applies the monitoring gate with a conditional plan"
   },
   {
    "who": "pt",
    "text": "As long as I don’t miss a dose, a blood test is fine."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Then here’s my suggestion. If your bloods are in date and normal, I’ll issue your usual supply in 2.5 mg tablets only, with the day written on the label. If they’re due, you have the test first and I’ll issue as soon as the result is back, before your next dose is due. Does that work for you?",
    "dom": "rto",
    "why": "Shared, conditional plan that protects her dose"
   },
   {
    "who": "pt",
    "text": "Yes, that’s fair."
   },
   {
    "who": "dr",
    "text": "A few reminders while we’re here. Keep the folic acid on a different day. Avoid the antibiotic trimethoprim — tell any doctor or pharmacist you’re on methotrexate. Be careful with anti-inflammatory painkillers and keep alcohol low. And keep your monitoring booklet up to date.",
    "dom": "tasks",
    "why": "Reinforces interaction and safety counselling"
   },
   {
    "who": "pt",
    "text": "I didn’t know about the antibiotic. I’ll remember."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you get mouth ulcers, a sore throat or fever, bruising, a new cough or breathlessness, or yellow skin, stop the methotrexate and contact us the same day. If you ever take extra by mistake, contact us or NHS 111 straight away. I’ll message you today about the bloods.",
    "dom": "gs",
    "why": "Specific red flags, overdose advice and follow-up"
   },
   {
    "who": "dr",
    "text": "Before you go for your bus — can you tell me the two things you’ll watch for, and which day you take it?",
    "dom": "rto",
    "why": "Teach-back respecting her time"
   },
   {
    "who": "pt",
    "text": "Once a week, same day. Mouth ulcers or a sore throat, and any new cough — stop and ring you. And no trimethoprim. Thank you, doctor."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; acknowledged the time pressure without letting it drive the consultation.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Fear of a flare, daily function, who else has access to the tablets.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “it should be straightforward” and “I thought I had another box”.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (routine repeat), concern (a flare if a dose is missed), expectation (prescription today).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Checked tablet strength and count; checked dates of shared-care FBC, LFTs and U&E; bloods if due.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Extra or daily dosing, strength confusion, lost tablets or dispensing miscount, another person taking them.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened marrow, lung and liver toxicity and interacting drugs.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Correct weekly dosing, no toxicity; likely supply error; prescribing depends on monitoring status.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Conditional issue: 2.5 mg tablets only, day recorded, after monitoring confirmed; timed so no dose is missed.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Trimethoprim, NSAID and alcohol advice; folic acid day; monitoring booklet.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named toxicity symptoms with “stop and call”; accidental extra dose advice; message about bloods today.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Bridget Nwosu",
    "age": "58 years · female",
    "pmh": [
     "Rheumatoid arthritis (rheumatology shared care)"
    ],
    "meds": [
     "Methotrexate 17.5 mg ONCE WEEKLY",
     "Folic acid weekly (different day)"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Methotrexate repeat requested early. Last monitoring bloods: check date and results before issue.",
    "reason": "“I’ve run out early — can you just print another script?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and slow down",
     "d": "Acknowledge the bus; explain why methotrexate needs checks."
    },
    {
     "t": "1–5",
     "h": "Safety history",
     "d": "Exact dose and day; any extra or daily doses; tablet strength and count; others with access; toxicity symptoms; new drugs."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Fear of a flare; expectation of a quick print."
    },
    {
     "t": "6–10",
     "h": "Monitoring gate and plan",
     "d": "Check bloods; conditional issue in 2.5 mg tablets with the day recorded; interactions counselling."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Stop-and-call symptoms, accidental overdose advice, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prints the script without asking why it ran out; never confirms weekly dosing; no toxicity questions; ignores monitoring; or refuses flatly and leaves her to miss doses.",
    "pass": "Asks why it ran out, confirms weekly dosing, screens toxicity, checks monitoring before prescribing, and gives basic safety advice.",
    "exc": "All of that, plus: checks tablet strength and count; explains the safety reason without blame; makes a conditional plan that avoids a missed dose; counsels on trimethoprim, NSAIDs and alcohol; uses teach-back within her time limit."
   },
   "avoid": [
    {
     "dont": "“Fine, I’ll print it now.”",
     "instead": "“Before I prescribe, I need to check a couple of things to keep you safe.”",
     "why": "Reflex prescribing of an early methotrexate request is a patient-safety failure."
    },
    {
     "dont": "“Have you been taking more than you should?”",
     "instead": "“Talk me through exactly how you take it — how many tablets and how often?”",
     "why": "Sounds accusatory; an open question gets a truer answer."
    },
    {
     "dont": "“You’ll have to wait until your bloods are done.”",
     "instead": "“If the bloods are due, let’s get them done before your next dose so you don’t miss it.”",
     "why": "Refusal without a plan risks a missed dose and a flare."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Time pressure",
     "t": "Transport and convenience drive rushed requests. Acknowledge them and offer practical solutions, such as bloods near home or a quick result call."
    },
    {
     "h": "Security of medicines",
     "t": "Ask sensitively whether anyone else can access her tablets, especially in a shared household."
    }
   ],
   "legal": [
    {
     "h": "Prescriber responsibility",
     "t": "Under shared care the prescriber takes responsibility for each prescription issued, including checking that monitoring is up to date (GMC Good practice in prescribing and managing medicines and devices, 2021)."
    }
   ],
   "professional": [
    {
     "h": "High-risk drug systems",
     "t": "Record the weekly day on the prescription, use one tablet strength, and remind the patient at each issue (MHRA Drug Safety Update, September 2020). Consider a practice review if a supply error is suspected."
    },
    {
     "h": "Significant event thinking",
     "t": "If a dispensing or prescribing error caused the shortfall, record and review it as a learning event."
    }
   ],
   "community": [
    {
     "h": "Pharmacy",
     "t": "Community pharmacists can check the dispensing history, reinforce weekly dosing, and supply a patient card."
    },
    {
     "h": "Support",
     "t": "National Rheumatoid Arthritis Society for patient information on methotrexate and monitoring."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Any daily or extra dosing — possible methotrexate toxicity",
     "Mouth ulcers, sore throat, fever, bruising or bleeding — marrow suppression",
     "New dry cough or breathlessness — pneumonitis",
     "Nausea, abdominal pain or jaundice — hepatotoxicity",
     "Recent trimethoprim or co-trimoxazole"
    ],
    "psychosocial": [
     "Rushed by the bus; sees a repeat as routine",
     "Fear of a flare if she misses a dose",
     "Who else can access her tablets"
    ],
    "ice": [
     "Idea: a routine repeat that can be printed quickly",
     "Concern: a flare if she misses a dose",
     "Expectation: a prescription today"
    ]
   },
   "diagnosis": "Early methotrexate request with correct weekly dosing reported and no toxicity symptoms; cause of the shortfall unclear (possible supply or counting error). Issue depends on monitoring being up to date.",
   "diagnosisLay": "“Methotrexate is a good medicine at the right dose once a week, but it builds up if taken more often. So when a supply runs short early, we always check how it’s being taken and that your blood tests are up to date.”",
   "management": {
    "reflectIce": "“You’re worried about your joints flaring if you miss a dose — let’s make sure that doesn’t happen, and do it safely.”",
    "psychosocial": "Respect her time; arrange bloods conveniently; explain without blame.",
    "sharedPlan": [
     "Confirm weekly dose and day; check tablet strength and count",
     "Screen toxicity and interacting drugs",
     "Check shared-care monitoring; bloods first if overdue",
     "Issue 2.5 mg tablets only, day recorded, quantity per shared-care agreement"
    ],
    "safetyNet": [
     "Stop and call the same day for mouth ulcers, sore throat, fever, bruising, new cough or breathlessness, jaundice",
     "Accidental extra dose: contact the practice or NHS 111 at once",
     "Message today about the bloods and prescription"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Rheumatoid arthritis",
    "s": "Protocol · DMARD monitoring",
    "href": "management/rheumatoid-arthritis.html"
   },
   {
    "ic": "💊",
    "t": "Prescribing Hub",
    "s": "High-risk drugs · interactions",
    "href": "prescribing.html"
   },
   {
    "ic": "🗺️",
    "t": "Abnormal LFTs",
    "s": "Visual algorithm",
    "href": "algorithms/abnormal-lfts.html"
   },
   {
    "ic": "📋",
    "t": "Multimorbidity and polypharmacy",
    "s": "Case walkthrough · medicines review",
    "href": "../cases/multimorbidity-polypharmacy.html"
   }
  ],
  "pitfalls": {
   "intro": "This station looks like admin. It is failed by printing the script, or by refusing without a plan. The examiner wants a safety check done kindly and quickly.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Issuing the repeat without asking why it ran out early.",
     "why": "An early methotrexate request can signal daily dosing, which can be fatal (MHRA Drug Safety Update, September 2020).",
     "fix": "Ask exactly how she takes it, confirm weekly on one day, and check strength and count."
    },
    {
     "dom": "tasks",
     "fail": "No toxicity questions because she “feels fine”.",
     "why": "Early marrow, lung or liver toxicity can be subtle.",
     "fix": "Ask about mouth ulcers, sore throat, fever, bruising, cough, breathlessness and jaundice."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing without checking when her bloods were last done.",
     "why": "Monitoring is the safety gate of shared care (BSR csDMARD guideline, 2025).",
     "fix": "Check dates and results; if overdue, test first and time the issue before her next dose."
    },
    {
     "dom": "tasks",
     "fail": "Spending time on contraception counselling for a 58-year-old.",
     "why": "FSRH guidance allows contraception to stop at 55; counselling without checking relevance wastes time.",
     "fix": "Prioritise weekly dosing, toxicity, monitoring and interactions."
    },
    {
     "dom": "rto",
     "fail": "“Have you been overdosing?”",
     "why": "Sounds accusatory and damages trust.",
     "fix": "Explain that you ask everyone this because of the drug, not because of her."
    },
    {
     "dom": "gs",
     "fail": "Refusing today and leaving her to sort it out.",
     "why": "A missed dose risks a flare; an unsafe refusal is still unsafe.",
     "fix": "Give a conditional plan with timings, and message her the same day."
    }
   ]
  }
 },
 "persistent-fatigue-young": {
  "stem": {
   "name": "Hannah Briar",
   "age": "26-year-old woman",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "Not listed on this summary — confirm"
   ],
   "allergy": "Allergy status not recorded — check before prescribing",
   "recent": "No recent blood tests on file. Software developer.",
   "reason": "Video consultation: \"Tired all the time for months — wants tests.\""
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) · NICE NG20 (coeliac disease, 2015) · NICE NG206 (ME/CFS, 2021) · NICE NG222 (depression in adults, 2022) · NICE CG113 (generalised anxiety disorder and panic disorder, 2011) · UK CMO low-risk drinking guidelines (2016)",
   "summary": "Four months of fatigue in a 26-year-old is usually multifactorial, often sleep, mood and stress. Take a structured history, screen red flags, do a focused and explained first-line panel, and explore the life behind it — both, not either.",
   "points": [
    {
     "h": "Characterise it",
     "t": "Sleepiness, lack of energy and muscle weakness point in different directions. Ask about onset, pattern, sleep quality and functional impact, and about worsening after exertion. NICE NG206: suspect ME/CFS in adults when the key symptoms, including post-exertional malaise, have lasted at least 6 weeks; diagnose only if they persist for 3 months and are not explained by another condition."
    },
    {
     "h": "Red flags",
     "t": "Weight loss, fevers or night sweats, lumps, breathlessness, bleeding or bruising, neurological symptoms, or a progressive course redirect the assessment. NICE NG12 (updated April 2026): consider a very urgent full blood count (within 48 hours) to assess for leukaemia in adults with features including persistent fatigue — so the FBC is done promptly, not left for weeks."
    },
    {
     "h": "A focused first-line panel",
     "t": "FBC, ferritin, TFTs, HbA1c or glucose, U&E, LFTs, calcium and CRP or ESR, with coeliac serology — NICE NG20 recommends offering it for prolonged fatigue (she must be eating gluten in more than one meal every day for at least 6 weeks before testing). Add a pregnancy test, B12, vitamin D or HIV testing only as the history suggests. Explain the choice: scattergun testing produces false positives and more anxiety."
    },
    {
     "h": "The life behind it",
     "t": "Depression, anxiety, poor sleep, work stress, late screens, caffeine and alcohol are the commonest contributors. Use a validated tool such as PHQ-9 or GAD-7 where mood or anxiety is suspected. NICE NG222 and CG113: offer treatment matched to severity and preference, including NHS Talking Therapies (self-referral)."
    },
    {
     "h": "Hold both",
     "t": "Avoid both errors: over-investigating feeds health anxiety; labelling it “just stress” too early risks missing organic disease and leaves the patient feeling dismissed. Present the tests and the psychosocial plan as complementary."
    },
    {
     "h": "Review and next steps",
     "t": "Review results and function in a few weeks. If the first-line tests are normal, reassess the history, sleep and mood rather than widening the panel reflexively; re-examine and re-screen red flags if the picture changes."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Hannah, I’m Dr Lee. Can you see and hear me okay? … Good. Tell me what’s been going on.",
    "dom": "rto",
    "why": "Open question after checking the video link"
   },
   {
    "who": "pt",
    "text": "I’m just exhausted all the time — it’s been months. I drag myself through work and crash at the weekend. I keep thinking something must be really wrong. Can you just test me for everything — thyroid, iron, anything?"
   },
   {
    "who": "dr",
    "text": "Four months of being wiped out is really tough, and I want to take it seriously. I’d like to understand it properly first, then agree the right tests, and also hear what life is like at the moment, because both matter. Is that okay?",
    "dom": "gs",
    "why": "Validates and sets an agenda that includes both strands"
   },
   {
    "who": "pt",
    "text": "Okay. As long as we do the tests."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When you say exhausted, is it more sleepiness, no energy, or your muscles giving out?",
    "dom": "tasks",
    "why": "Characterises the fatigue"
   },
   {
    "who": "pt",
    "text": "No energy, mostly. Heavy. And I don’t sleep well."
   },
   {
    "who": "dr",
    "text": "Tell me about the sleep.",
    "dom": "rto",
    "why": "Open follow-up on a cue"
   },
   {
    "who": "pt",
    "text": "I’m on my laptop until late, then I lie there with my mind racing. I wake up feeling like I haven’t slept."
   },
   {
    "who": "dr",
    "text": "Does doing something active leave you much worse for a day or more afterwards?",
    "dom": "tasks",
    "why": "Screens post-exertional malaise"
   },
   {
    "who": "pt",
    "text": "I don’t think so. I just feel flat most of the time."
   },
   {
    "who": "dr",
    "text": "A few specific checks. Any weight loss without trying, fevers, night sweats, lumps anywhere, breathlessness, unusual bruising or bleeding, or anything like numbness or weakness?",
    "dom": "tasks",
    "why": "Red-flag screen"
   },
   {
    "who": "pt",
    "text": "No, none of those."
   },
   {
    "who": "dr",
    "text": "That’s reassuring and helps me aim the tests. Is there any chance you could be pregnant, and are your periods heavy at all?",
    "dom": "tasks",
    "why": "Pregnancy and heavy periods as causes"
   },
   {
    "who": "pt",
    "text": "I don’t think so. I’m happy to do a test if it helps rule it out."
   },
   {
    "who": "dr",
    "text": "How much caffeine and alcohol in a typical week?",
    "dom": "tasks",
    "why": "Substance contributors without judgement"
   },
   {
    "who": "pt",
    "text": "Lots of coffee to get through the day. Not much alcohol."
   },
   {
    "who": "dr",
    "text": "How has your mood been — are you still enjoying things?",
    "dom": "tasks",
    "why": "Screens mood"
   },
   {
    "who": "pt",
    "text": "I suppose I’ve been a bit flat. I haven’t really thought of it like that."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said you keep thinking something must be really wrong. What are you most worried it might be?",
    "dom": "rto",
    "why": "Elicits the hidden fear"
   },
   {
    "who": "pt",
    "text": "Honestly? Something serious. You read things online and it’s always something awful. I just want someone to find it."
   },
   {
    "who": "dr",
    "text": "That makes sense — when you feel this bad, it’s natural to fear the worst. And what’s life like at the moment, work and home?",
    "dom": "rto",
    "why": "Validates the fear and opens the psychosocial story"
   },
   {
    "who": "pt",
    "text": "Work’s been full-on. Deadlines, long hours, always on my phone. I haven’t had a proper break in ages."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Thank you. Here’s how I see it. There’s nothing in what you’ve told me that points to something serious, which is good. I will still do tests, but a focused set, not everything: blood count and iron, thyroid, blood sugar, kidney and liver tests, calcium, an inflammation marker, and a coeliac test. Those cover the physical causes that genuinely cause tiredness at your age.",
    "dom": "tasks",
    "why": "Focused, explained first-line panel"
   },
   {
    "who": "pt",
    "text": "Why not everything, though? Just to be sure?"
   },
   {
    "who": "dr",
    "text": "Because testing everything gives false alarms — slightly odd results that mean nothing but lead to more tests and more worry. A focused set is more likely to find a real cause if there is one. And if these are normal, that’s genuinely useful information.",
    "dom": "rto",
    "why": "Negotiates proportionate testing without dismissal"
   },
   {
    "who": "pt",
    "text": "Okay, that makes sense."
   },
   {
    "who": "dr",
    "text": "I also think the late nights on the laptop, broken sleep, heavy workload and feeling flat could be doing a lot of this. That’s not me saying it’s all in your head — it’s real, and it’s treatable. The blood tests run alongside that, not instead of it.",
    "dom": "tasks",
    "why": "Holds organic and psychosocial explanations together"
   },
   {
    "who": "pt",
    "text": "I suppose I’ve been ignoring that side."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Could you fill in two short questionnaires about mood and worry before our next appointment? And for sleep: screens off an hour before bed, a regular wake-up time, and cutting coffee after lunch. Which of those feels most doable?",
    "dom": "rto",
    "why": "Validated tools and one negotiated change"
   },
   {
    "who": "pt",
    "text": "Screens off earlier, probably. I’ll try."
   },
   {
    "who": "dr",
    "text": "Good. If the mood side turns out to be bigger than it looks, there’s NHS Talking Therapies, which you can refer yourself to. I’ll book the blood test for this week, and we can add a pregnancy test so it’s ruled out.",
    "dom": "tasks",
    "why": "Signposts support and times the tests promptly"
   },
   {
    "who": "pt",
    "text": "Thank you."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you notice weight loss, fevers, sweats, lumps, bruising or anything that alarms you before then, contact us sooner. And if you ever feel very low or have thoughts of harming yourself, contact us the same day or call 111.",
    "dom": "gs",
    "why": "Specific physical and mental-health safety-net"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "What will you take away from today?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Focused bloods this week, not everything. Screens off earlier and less coffee. Do the questionnaires. Come back to go through it all."
   },
   {
    "who": "dr",
    "text": "Exactly. Let’s speak again in two to three weeks with the results and see how the sleep is going. We’ll get to the bottom of this together. Anything else?",
    "dom": "gs",
    "why": "Defined review and partnership"
   },
   {
    "who": "pt",
    "text": "No — I feel like someone’s actually listening. Thanks."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; took the fatigue seriously before discussing tests.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work pressure, long hours, screens, sleep, caffeine, alcohol and mood.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “something must be really wrong”, “I don’t sleep well” and “a bit flat”, and explored each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (something serious that tests will find); concern (a serious diagnosis); expectation (every test).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Focused panel: FBC, ferritin, TFTs, HbA1c, U&E, LFTs, calcium, CRP, coeliac serology (NICE NG20); pregnancy test offered; PHQ-9/GAD-7.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Anaemia, thyroid, diabetes, coeliac vs sleep disruption, depression, anxiety, stress; ME/CFS features screened (NICE NG206).",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Red-flag screen; prompt FBC given persistent fatigue (NICE NG12 (updated April 2026)); no invented cancer referral.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Likely multifactorial fatigue — poor sleep, stress and low mood — pending a focused organic screen.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Explained focused tests; one negotiated sleep change; mood questionnaires; NHS Talking Therapies signposted.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Caffeine, screens and workload addressed; mood treated as real and treatable (NICE NG222, CG113).",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Physical and mental-health safety-net; review with results in two to three weeks; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Hannah Briar",
    "age": "26 years · female",
    "pmh": [
     "Nil significant recorded"
    ],
    "meds": [
     "Not listed — confirm"
    ],
    "allergy": "Not recorded",
    "recent": "No recent bloods.",
    "reason": "\"Can you just test me for everything?\""
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open & listen",
     "d": "Let her finish. Promise to take it seriously and cover both the tests and life around it."
    },
    {
     "t": "1–4",
     "h": "Structured history",
     "d": "Type of fatigue, sleep, post-exertional worsening, red flags, pregnancy and periods, caffeine and alcohol, mood."
    },
    {
     "t": "4–6",
     "h": "ICE & life",
     "d": "“What are you most worried it might be?” and “What’s life like at the moment?”"
    },
    {
     "t": "6–10",
     "h": "Explain & plan",
     "d": "Focused panel with reasons; why not everything. Hold both explanations. One sleep change; mood questionnaires; Talking Therapies."
    },
    {
     "t": "10–12",
     "h": "Safety-net & close",
     "d": "Physical red flags and low-mood safety-net. Teach-back. Review with results."
    }
   ],
   "wordPics": {
    "fail": "Orders a huge panel without a history; or tells her it’s probably stress and sends her away without tests; no red-flag screen; mood never explored; no review.",
    "pass": "Structured history with red-flag screen, focused first-line bloods, some exploration of mood and sleep, basic lifestyle advice and a review.",
    "exc": "All of the above, plus: draws out her fear and her stressors with open questions; explains why focused testing is better without making her feel dismissed; holds organic and psychosocial causes together; negotiates one owned change; uses validated tools; safety-nets both physical and mental health."
   },
   "avoid": [
    {
     "dont": "\"It’s probably just stress.\"",
     "instead": "\"This is real and treatable. The tests run alongside looking at sleep and stress, not instead of it.\"",
     "why": "Premature labelling invalidates her and risks missing organic disease."
    },
    {
     "dont": "\"Sure, I’ll test for everything.\"",
     "instead": "\"A focused set is more likely to find a real cause — testing everything gives false alarms.\"",
     "why": "Scattergun testing feeds health anxiety and produces incidental findings."
    },
    {
     "dont": "\"Your tests will probably be normal.\"",
     "instead": "\"If these are normal, that’s genuinely useful — and we’ll carry on working on it together.\"",
     "why": "Pre-empting normal results sounds like she will be fobbed off."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work and screens",
     "t": "Long hours, always-on phones and late laptop use drive poor sleep and exhaustion. Explore what she can change and what her employer could adjust."
    },
    {
     "h": "Health anxiety",
     "t": "Online searching amplifies fear. Acknowledge it, give clear information, and avoid repeated testing as reassurance."
    }
   ],
   "legal": [
    {
     "h": "Fit notes",
     "t": "She is working. If fatigue later affects work, she can self-certify for the first 7 days; a fit note can then say she “may be fit for work” with adjustments such as altered hours."
    },
    {
     "h": "Consent for tests",
     "t": "Pregnancy and HIV tests need her informed agreement; explain why any test is offered."
    }
   ],
   "professional": [
    {
     "h": "Proportionate investigation",
     "t": "Explaining why some tests are not done is part of shared decision-making, not rationing (GMC decision making and consent, 2020)."
    },
    {
     "h": "Continuity",
     "t": "Offer review with the same clinician where possible; continuity reduces repeated testing in undifferentiated symptoms."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "NHS Talking Therapies (self-referral); Every Mind Matters for sleep and stress; Mind for mental-health information."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Unintentional weight loss, fevers, night sweats",
     "Lumps, unusual bruising or bleeding, pallor",
     "Breathlessness, neurological symptoms, a progressive course",
     "Low mood with hopelessness or thoughts of self-harm"
    ],
    "psychosocial": [
     "Work pressure, long hours and screens",
     "Sleep pattern, caffeine and alcohol",
     "Mood and anxiety; fear of a serious diagnosis"
    ],
    "ice": [
     "Idea: “Something must be really wrong”",
     "Concern: a serious diagnosis being missed",
     "Expectation: test for everything"
    ]
   },
   "diagnosis": "Four months of fatigue with no red flags, poor sleep, heavy work stress, high caffeine and low mood: most likely multifactorial, with a focused organic screen running alongside. ME/CFS features are screened but not present on this history.",
   "diagnosisLay": "“Your tiredness is real. From what you’ve told me, poor sleep, a very heavy workload and feeling flat are likely doing a lot of it. I’ll also check the physical causes that genuinely cause tiredness, so we cover both sides.”",
   "management": {
    "reflectIce": "“You’ve been worried something serious is being missed. I’ve asked about all the warning signs, none are there, and the tests I’m doing are the ones that would pick up the physical causes.”",
    "psychosocial": "Validate the fear; open work and sleep; negotiate one change she owns; offer mood questionnaires and self-referral to NHS Talking Therapies.",
    "sharedPlan": [
     "Focused bloods this week: FBC, ferritin, TFTs, HbA1c, U&E, LFTs, calcium, CRP, coeliac serology (NICE NG20)",
     "Sleep: screens off an hour before bed, regular wake time, less caffeine; PHQ-9 and GAD-7",
     "NHS Talking Therapies if mood or anxiety confirmed (NICE NG222, CG113)"
    ],
    "safetyNet": [
     "Weight loss, fevers, sweats, lumps, bruising — contact sooner",
     "Very low mood or thoughts of self-harm — same day or 111; review with results in two to three weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Fatigue",
    "s": "Case walkthrough · NICE NG206",
    "href": "../cases/fatigue.html"
   },
   {
    "ic": "🗺️",
    "t": "Fatigue pathway",
    "s": "Visual algorithm · tired all the time",
    "href": "algorithms/fatigue.html"
   },
   {
    "ic": "📋",
    "t": "Depression",
    "s": "Case walkthrough · NICE NG222",
    "href": "../cases/depression.html"
   },
   {
    "ic": "💠",
    "t": "Insomnia",
    "s": "Protocol · sleep advice",
    "href": "management/insomnia.html"
   }
  ],
  "pitfalls": {
   "intro": "Tiredness stations punish both extremes: the candidate who bleeds everything and the one who says “stress” and stops. The marks are in holding both.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Agreeing to “test everything” and requesting a long list of tests without a history.",
     "why": "“Investigations not appropriate or justified.” Scattergun testing breeds false positives and anxiety.",
     "fix": "Name a focused panel and explain why it is better than everything."
    },
    {
     "dom": "tasks",
     "fail": "Skipping the red-flag screen because she is young.",
     "why": "“Did not rule out serious disease.” Weight loss, sweats, lumps and bleeding must be asked about.",
     "fix": "One sentence covers it: “Any weight loss, fevers, sweats, lumps, bruising or breathlessness?”"
    },
    {
     "dom": "rto",
     "fail": "Telling her it’s probably stress in the first five minutes.",
     "why": "“Did not explore the patient’s concerns.” She came fearing something serious; she hears dismissal.",
     "fix": "Ask what she fears most, then explain how the plan answers it."
    },
    {
     "dom": "rto",
     "fail": "Never asking about life outside the symptom.",
     "why": "“Did not explore psychosocial factors.” Work, screens and mood are the likely drivers here.",
     "fix": "“What’s life like at the moment?” — then listen."
    },
    {
     "dom": "gs",
     "fail": "A lecture on sleep hygiene with ten changes.",
     "why": "“Did not involve the patient in the plan.”",
     "fix": "Offer the options and ask which one feels doable."
    },
    {
     "dom": "gs",
     "fail": "No plan for what happens if the tests are normal.",
     "why": "Without it, normal results feel like a dead end and drive repeat testing.",
     "fix": "“If these are normal, that’s useful — we’ll review sleep and mood together and decide next steps.”"
    }
   ]
  }
 },
 "pkd-young": {
  "stem": {
   "name": "Lucy Hartford",
   "age": "24-year-old woman",
   "pmh": [
    "No significant past medical history",
    "Family history: father has ADPKD and has started dialysis; paternal grandmother had ADPKD"
   ],
   "meds": [
    "None recorded"
   ],
   "allergy": "No known drug allergies",
   "recent": "No blood pressure, urine or renal function results on record. No previous renal imaging.",
   "reason": "Video consultation: wants to know if she has inherited polycystic kidney disease and what it means for having children."
  },
  "knowledge": {
   "guideline": "KDIGO ADPKD guideline 2025 (international) · NICE TA358 (tolvaptan, 2015) · NICE NG203 (chronic kidney disease, 2021) · HM Government and ABI Code on Genetic Testing and Insurance (2018)",
   "summary": "A child of a parent with ADPKD has a 1 in 2 chance of inheriting it. Offer information and choice about testing rather than testing by default, check blood pressure, and refer to clinical genetics for predictive testing and reproductive options.",
   "points": [
    {
     "h": "Inheritance",
     "t": "ADPKD is autosomal dominant, usually from PKD1 or PKD2 variants. Each child of an affected parent has a 50% chance of inheriting it. Her prior risk is 50%, and so would be each of her children’s if she were affected."
    },
    {
     "h": "Testing: ultrasound",
     "t": "Renal ultrasound is the usual first test in at-risk adults. The age-dependent unified ultrasound criteria (Pei 2009, international) require at least 3 cysts in total at age 15 to 39. A normal scan in a young adult does not fully exclude ADPKD, particularly with PKD2 disease; genetic testing gives a clearer answer when a family variant is known."
    },
    {
     "h": "Testing: implications",
     "t": "Predictive testing is her choice, including the choice not to know. Under the Code on Genetic Testing and Insurance, insurers cannot require a predictive genetic test, and results need not be disclosed below the financial limits (Huntington’s disease is the only listed exception). A scan showing cysts is a medical finding, which insurers may ask about."
    },
    {
     "h": "If diagnosed",
     "t": "Regular blood pressure checks and control, eGFR and urine ACR monitoring, and specialist care. NICE TA358: tolvaptan is an option for adults with CKD stage 2 or 3 at the start of treatment and evidence of rapidly progressing disease, started by specialists. Progression varies; many people keep good kidney function for decades."
    },
    {
     "h": "Extra-renal features",
     "t": "Liver cysts, intracranial aneurysm (KDIGO 2025, international: screening is considered with a family history of aneurysm or subarachnoid haemorrhage), mitral valve prolapse and hernias. A sudden, worst-ever headache needs 999."
    },
    {
     "h": "Reproductive options",
     "t": "Natural conception accepting the risk, prenatal diagnosis, preimplantation genetic testing with IVF when the family variant is known, donor gametes or adoption. Clinical genetics provides non-directive counselling; NHS funding for preimplantation testing has eligibility criteria."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Lucy, I’m Dr Lee. What would you like to talk about today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "My dad’s just started dialysis — he’s got polycystic kidney disease, and so did my gran. I feel fine, but it’s scared me. Do I have it? Should I be tested? And the big one — my partner and I have talked about kids, and I’m terrified of passing it on."
   },
   {
    "who": "dr",
    "text": "I’m sorry about your dad; that must be a hard thing to watch. You’ve raised three big questions: whether you might have it, testing, and children. We can go through each, at your pace. Which matters most to you today?",
    "dom": "gs",
    "why": "Acknowledges, structures and lets her prioritise"
   },
   {
    "who": "pt",
    "text": "Probably the kids. But I need to understand the rest first."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "What do you already know about the condition, from your dad’s experience?",
    "dom": "rto",
    "why": "Establishes her starting knowledge"
   },
   {
    "who": "pt",
    "text": "That the kidneys fill with cysts and stop working. And that it’s in families. That’s about it."
   },
   {
    "who": "dr",
    "text": "Has anyone in the family had a brain aneurysm or a bleed in the brain?",
    "dom": "tasks",
    "why": "Family history relevant to aneurysm screening"
   },
   {
    "who": "pt",
    "text": "Not that I know of."
   },
   {
    "who": "dr",
    "text": "And for you — any headaches, pain in your side or back, blood in your urine, or infections? Has your blood pressure ever been checked?",
    "dom": "tasks",
    "why": "Screens for early features"
   },
   {
    "who": "pt",
    "text": "None of that. I don’t think my blood pressure has been checked in years."
   },
   {
    "who": "dr",
    "text": "How are you coping with your dad starting dialysis?",
    "dom": "rto",
    "why": "Explores emotional context"
   },
   {
    "who": "pt",
    "text": "Badly, honestly. I keep picturing myself in that chair. That’s why I’m here."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "That makes sense. What worries you most — your own health or your future children’s?",
    "dom": "rto",
    "why": "Clarifies the core concern"
   },
   {
    "who": "pt",
    "text": "Both. But mostly I don’t want my child to go through what dad has."
   },
   {
    "who": "dr",
    "text": "And what were you hoping would come out of today?",
    "dom": "rto",
    "why": "Elicits expectations"
   },
   {
    "who": "pt",
    "text": "To know my chances, and what I can actually do."
   },
   {
    "phase": "Explanation",
    "clock": "5–8 min",
    "who": "dr",
    "text": "This condition is passed on in what we call a dominant way. Each child of someone who has it has a one in two chance of inheriting it. So your chance is 50% — which also means it’s just as likely you don’t have it.",
    "dom": "tasks",
    "why": "Explains inheritance plainly and balances the risk"
   },
   {
    "who": "pt",
    "text": "Fifty-fifty. Okay."
   },
   {
    "who": "dr",
    "text": "You can find out, and there are two ways. A kidney scan looks for cysts, though at your age a clear scan doesn’t completely rule it out. A genetic test can give a clearer answer, especially if your dad’s gene change is known. Some people want to know now; some prefer to wait. There’s no wrong answer.",
    "dom": "tasks",
    "why": "Offers testing options without assuming"
   },
   {
    "who": "pt",
    "text": "Are there downsides to knowing?"
   },
   {
    "who": "dr",
    "text": "It’s worth thinking about. There’s the emotional side of knowing. There’s insurance: under the UK code, insurers can’t make you take a predictive genetic test, and in most cases you don’t have to tell them the result. A scan showing cysts is treated differently, as a medical finding. The genetics team can go through this in detail.",
    "dom": "tasks",
    "why": "Counsels implications including insurance accurately"
   },
   {
    "who": "pt",
    "text": "I didn’t know that. And if I do have it?"
   },
   {
    "who": "dr",
    "text": "Then we’d keep a close eye on blood pressure and kidney function and treat blood pressure early, because that protects the kidneys. For some people whose kidneys decline quickly, there’s a specialist medicine that slows it. It varies a lot even within families — having it doesn’t mean following your dad’s timeline.",
    "dom": "tasks",
    "why": "Realistic outline of management and prognosis"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "About children: you have real options. You could conceive naturally and accept the chance. There are tests during pregnancy. And there’s IVF with testing of embryos, so an unaffected one is chosen — that needs the family gene change to be known, and NHS funding has criteria. Some people consider donor eggs or adoption.",
    "dom": "tasks",
    "why": "Sets out reproductive options"
   },
   {
    "who": "pt",
    "text": "I didn’t know the embryo thing was possible."
   },
   {
    "who": "dr",
    "text": "The genetics service can talk it through with you and your partner, without pushing you either way. I’d suggest a referral there. Whatever you decide about testing, can we check your blood pressure and a urine sample? That’s sensible for anyone your age with this family history, and it doesn’t commit you to anything.",
    "dom": "rto",
    "why": "Non-directive referral and a low-stakes first step"
   },
   {
    "who": "pt",
    "text": "Yes, I’m happy with that. I think I do want to know, but I want to talk to the genetics people first."
   },
   {
    "who": "dr",
    "text": "That sounds a very sensible way to do it. I’ll refer you, and if you choose testing, we’ll arrange it and involve the kidney specialists if it shows anything.",
    "dom": "tasks",
    "why": "Respects her decision; clear pathway"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "One thing to know: rarely this condition affects blood vessels in the brain. A sudden, severe, worst-ever headache means calling 999. Otherwise, book the blood pressure check with the nurse, and come back any time — this is a decision you can take over time.",
    "dom": "gs",
    "why": "Aneurysm red flag, next step and open door"
   },
   {
    "who": "dr",
    "text": "To make sure I’ve been clear, what will you tell your partner tonight?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "That it’s fifty-fifty, that I can choose whether and how to be tested, and that there are ways to have children without passing it on. I feel less panicky."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her set out all three questions and choose which mattered most.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Impact of her father’s dialysis, her partner and family plans.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I keep picturing myself in that chair” and the fear for a future child.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (she may have it), concern (dialysis; passing it on), expectation (her chances and options).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Blood pressure and urine; renal ultrasound or genetic testing only if she chooses; eGFR and ACR if diagnosed.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "At-risk relative, not yet diagnosed; asked about haematuria, pain, infections and family history of aneurysm.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Thunderclap headache advice; early hypertension looked for.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Explained 50% prior risk and that a clear young scan does not fully exclude ADPKD.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Non-directive testing discussion, accurate insurance information, clinical genetics referral, reproductive options.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Emotional impact acknowledged; partner included in genetics counselling.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Nurse BP check booked, 999 for thunderclap headache, open invitation to return.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Lucy Hartford",
    "age": "24 years · female",
    "pmh": [
     "Nil significant",
     "FH: father ADPKD on dialysis; paternal grandmother ADPKD"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "NKDA",
    "recent": "⚠ No BP recorded for several years. No renal imaging or genetic testing on file.",
    "reason": "Video consultation: “Do I have Dad’s kidney disease — and what about kids?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and prioritise",
     "d": "Three questions arrive at once. Name them and let her choose the order."
    },
    {
     "t": "1–5",
     "h": "Focused history and ICE",
     "d": "What she knows, symptoms, BP history, family history of aneurysm; how she is coping with her father’s dialysis."
    },
    {
     "t": "5–8",
     "h": "Explain",
     "d": "50% risk; scan vs genetic test; right not to know; insurance code; what a diagnosis would mean."
    },
    {
     "t": "8–11",
     "h": "Reproductive options and plan",
     "d": "Natural, prenatal, IVF with embryo testing, donor, adoption; clinical genetics referral; BP and urine check."
    },
    {
     "t": "11–12",
     "h": "Safety-net and close",
     "d": "Thunderclap headache is 999; open door; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Books an ultrasound without asking if she wants to know; says a normal scan rules it out; gives wrong or alarming insurance advice; tells her not to have children or ignores the question; no referral.",
    "pass": "Explains 50% risk; offers scan or genetic testing as a choice; outlines management if diagnosed; lists reproductive options; refers to clinical genetics; checks BP.",
    "exc": "All of that, plus: explains a clear young scan does not fully exclude; gives accurate insurance information; balances hope with honesty about variable progression; stays non-directive; includes her partner; checks understanding with teach-back."
   },
   "avoid": [
    {
     "dont": "“Let’s get you a scan to put your mind at rest.”",
     "instead": "“You can find out if you want to — but it’s your choice, and there are things worth thinking through first.”",
     "why": "Assumes she wants predictive testing and implies a normal scan is conclusive."
    },
    {
     "dont": "“You’d have to tell insurers if you had a genetic test.”",
     "instead": "“Under the UK code, in most cases you don’t have to disclose a predictive genetic test result.”",
     "why": "Incorrect and may deter a test she wants."
    },
    {
     "dont": "“If you have it, you’ll probably end up like your dad.”",
     "instead": "“It varies a lot, even in the same family, and early blood-pressure control helps.”",
     "why": "Catastrophising removes hope and is not accurate."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family impact",
     "t": "Watching a parent start dialysis shapes how she hears risk. Acknowledge the grief and fear before giving numbers."
    },
    {
     "h": "Partner and planning",
     "t": "Reproductive decisions involve her partner; offer joint genetics counselling."
    }
   ],
   "legal": [
    {
     "h": "Genetic testing and insurance",
     "t": "Code on Genetic Testing and Insurance (HM Government and ABI, 2018): insurers will not require predictive genetic tests; results need not be disclosed below the financial limits, and Huntington’s disease is the only listed exception."
    },
    {
     "h": "Family information",
     "t": "Her father’s genetic result belongs to him. Using it to guide her testing needs his consent (GMC Confidentiality, 2017)."
    }
   ],
   "professional": [
    {
     "h": "Non-directive counselling",
     "t": "Offer information and options; support her decision about testing and reproduction without steering (GMC Decision making and consent, 2020)."
    },
    {
     "h": "Right not to know",
     "t": "Declining predictive testing is a valid choice. Blood pressure checks can still be offered."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "The PKD Charity and Kidney Care UK provide information and peer support for families."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Sudden, severe, worst-ever headache — possible subarachnoid haemorrhage: 999",
     "Visible haematuria, loin pain or fever — cyst bleed or infection",
     "Raised blood pressure at a young age"
    ],
    "psychosocial": [
     "Distress at her father’s dialysis",
     "Family planning with her partner",
     "Insurance and work worries about testing"
    ],
    "ice": [
     "Idea: she may have inherited her father’s ADPKD",
     "Concern: ending up on dialysis; passing it to her children",
     "Expectation: her chances and what she can do"
    ]
   },
   "diagnosis": "At-risk first-degree relative of a person with ADPKD, currently well and undiagnosed; 50% prior risk. Testing is her choice.",
   "diagnosisLay": "“Genes come in pairs, one from each parent. Your dad has one working copy and one faulty copy of this gene, so it’s like a coin toss which one he passed to you.”",
   "management": {
    "reflectIce": "“You’re frightened of following your dad’s path and of passing it on. Let’s look at both, and at what you can control.”",
    "psychosocial": "Acknowledge her grief about her father; include her partner; allow time for decisions.",
    "sharedPlan": [
     "Blood pressure and urine check regardless of testing decision",
     "Clinical genetics referral for predictive testing and reproductive counselling",
     "Renal ultrasound or genetic testing only if she chooses; nephrology if diagnosed",
     "If diagnosed: BP control, eGFR and ACR monitoring; tolvaptan per NICE TA358 by specialists"
    ],
    "safetyNet": [
     "Thunderclap headache: 999",
     "Return any time to revisit the decision"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Chronic kidney disease",
    "s": "Case walkthrough · NICE NG203",
    "href": "../cases/ckd.html"
   },
   {
    "ic": "💠",
    "t": "CKD protocol",
    "s": "Monitoring · referral",
    "href": "management/ckd.html"
   },
   {
    "ic": "💠",
    "t": "Hypertension",
    "s": "Treatment · NICE NG136",
    "href": "management/hypertension.html"
   },
   {
    "ic": "🗺️",
    "t": "Headache pathway",
    "s": "Visual algorithm · thunderclap red flags",
    "href": "algorithms/headache.html"
   }
  ],
  "pitfalls": {
   "intro": "This is a counselling station. It is lost by testing by default, inaccurate facts about scans and insurance, and steering reproductive choices.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Arranging an ultrasound straight away “to rule it out”.",
     "why": "Assumes she wants predictive information, and a clear scan at 24 does not fully exclude ADPKD.",
     "fix": "Offer testing as a choice, explain the limits of a young scan, and refer to clinical genetics."
    },
    {
     "dom": "tasks",
     "fail": "Warning her that any test result must be declared to insurers.",
     "why": "The Code on Genetic Testing and Insurance says otherwise for predictive genetic tests below the limits.",
     "fix": "Give the accurate position, and note that a scan finding is handled differently."
    },
    {
     "dom": "rto",
     "fail": "Answering the question about children with “that’s one for the specialists”.",
     "why": "Her main concern goes unaddressed in the consultation.",
     "fix": "Outline the options in plain words, then refer for detailed, non-directive counselling."
    },
    {
     "dom": "rto",
     "fail": "Suggesting she might avoid having children.",
     "why": "Directive counselling breaches autonomy and loses Relating marks.",
     "fix": "Present options neutrally and ask what matters to her."
    },
    {
     "dom": "gs",
     "fail": "Delivering inheritance, testing, management, extra-renal features and reproductive options in one monologue.",
     "why": "Information overload; she retains little.",
     "fix": "Let her choose priorities, pace the information, and check understanding with teach-back."
    },
    {
     "dom": "gs",
     "fail": "No safety-net because she is well.",
     "why": "Thunderclap headache advice matters in at-risk relatives.",
     "fix": "Give the 999 message and book a blood pressure check."
    }
   ]
  }
 },
 "post-icu-syndrome": {
  "stem": {
   "name": "Martin Oduya",
   "age": "52-year-old man",
   "pmh": [
    "Severe pneumonia with ARDS five months ago — ventilated in ICU for three weeks",
    "No critical-care follow-up recorded since discharge"
   ],
   "meds": [
    "Medication list to be reconciled since hospital discharge"
   ],
   "allergy": "None recorded",
   "recent": "Discharged after three weeks of ventilation in ICU for severe pneumonia/ARDS five months ago. No follow-up clinic letter on file.",
   "reason": "Video consultation: still exhausted, weak and breathless on stairs, poor concentration, flashbacks and low mood."
  },
  "knowledge": {
   "guideline": "NICE CG83 (rehabilitation after critical illness in adults, 2009) · NICE QS158 (2017) · NICE NG116 (post-traumatic stress disorder, 2018) · NICE NG222 (depression in adults, 2022)",
   "summary": "New physical, cognitive and psychological problems after an ICU stay form post-intensive-care syndrome. Name it, screen each domain including PTSD and risk, and coordinate rehabilitation that should have started at the 2 to 3 month review.",
   "points": [
    {
     "h": "The expected review was missed",
     "t": "NICE CG83: people with rehabilitation needs should have a functional reassessment 2 to 3 months after discharge from critical care, covering physical, psychological, social and sexual dimensions. If recovery is slower than expected or new problems arise, refer to rehabilitation or specialist services. He is five months out with no review."
    },
    {
     "h": "Physical domain",
     "t": "ICU-acquired weakness, fatigue, reduced exercise tolerance, weight loss, and voice or swallow problems after intubation. Examine, check SpO2, and consider FBC, U&E, LFTs, thyroid function and glucose for other causes of fatigue. New or worsening breathlessness, chest pain, haemoptysis, fever or weight loss need prompt assessment."
    },
    {
     "h": "Psychological domain",
     "t": "Depression, anxiety and PTSD are common after ICU. Use PHQ-9 and GAD-7 for mood and anxiety and ask about intrusions, nightmares, avoidance and hyperarousal. Ask about suicidal thoughts directly."
    },
    {
     "h": "PTSD treatment",
     "t": "NICE NG116: offer individual trauma-focused CBT to adults with PTSD or clinically important symptoms more than a month after the trauma; EMDR is an option after non-combat trauma. If he prefers drug treatment, consider venlafaxine or an SSRI such as sertraline. Do not use benzodiazepines."
    },
    {
     "h": "Cognitive domain",
     "t": "Memory, attention and processing problems affect work and daily life. Assess impact, offer practical strategies, and plan a phased return to work with a fit note and occupational health."
    },
    {
     "h": "Coordinated rehabilitation",
     "t": "NICE QS158 sets out follow-up after critical care discharge. Refer to a critical-care follow-up or rehabilitation service where one exists, physiotherapy for reconditioning, and psychological therapy. Track referrals rather than leaving them to chance."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Oduya, I’m Dr Lee. I know you were very unwell in intensive care earlier this year. How have things been since you came home?",
    "dom": "rto",
    "why": "Open question grounded in his history"
   },
   {
    "who": "pt",
    "text": "I know I should be grateful — everyone says how lucky I am. But five months on I’m a wreck. Exhausted, can’t do the stairs, can’t concentrate, flashbacks of the ICU, snapping at everyone. I feel guilty even complaining. What’s wrong with me?"
   },
   {
    "who": "dr",
    "text": "Thank you for telling me all of that, and please don’t apologise for it. I’d like to go through each of those things, then explain what I think is happening and plan what help you need. Is that all right?",
    "dom": "gs",
    "why": "Validates and sets an agenda covering all domains"
   },
   {
    "who": "pt",
    "text": "Yes. I just want to know I’m not going mad."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Let’s start with your body. What can you manage now — stairs, walking, looking after yourself?",
    "dom": "tasks",
    "why": "Assesses physical function"
   },
   {
    "who": "pt",
    "text": "I stop halfway up the stairs. I can shower, but I need a sit-down after. My legs just give up."
   },
   {
    "who": "dr",
    "text": "Is the breathlessness getting better, staying the same or getting worse? Any chest pain, coughing up blood, fevers, or weight you can’t explain?",
    "dom": "tasks",
    "why": "Screens physical red flags"
   },
   {
    "who": "pt",
    "text": "Slowly better, I think. No chest pain or blood, no fevers, and my weight’s steady."
   },
   {
    "who": "dr",
    "text": "How is your voice and your swallowing since the breathing tube?",
    "dom": "tasks",
    "why": "Checks post-intubation problems"
   },
   {
    "who": "pt",
    "text": "That’s all fine."
   },
   {
    "who": "dr",
    "text": "You mentioned flashbacks. Can you tell me what they’re like, and whether they come at night too?",
    "dom": "rto",
    "why": "Follows the most distressing cue"
   },
   {
    "who": "pt",
    "text": "I see the ICU — the noise, not being able to move. It comes out of nowhere. I have nightmares and wake up soaked. I won’t watch anything with a hospital in it."
   },
   {
    "who": "dr",
    "text": "That sounds frightening. With everything going on, how has your mood been? Have you had thoughts that you’d be better off not here, or of harming yourself?",
    "dom": "tasks",
    "why": "Screens mood and asks about suicide directly"
   },
   {
    "who": "pt",
    "text": "Low, a lot of the time. I’ve not thought about harming myself. I just don’t feel like me."
   },
   {
    "who": "dr",
    "text": "And concentration and memory — how is that affecting things, including work?",
    "dom": "tasks",
    "why": "Assesses the cognitive domain"
   },
   {
    "who": "pt",
    "text": "I read the same page three times. I haven’t been back to work. I can’t see how I would."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said you feel guilty for complaining. Where does that come from?",
    "dom": "rto",
    "why": "Explores the guilt cue"
   },
   {
    "who": "pt",
    "text": "My family say I should just be grateful I’m alive. And I am. So I think maybe I’m weak."
   },
   {
    "who": "dr",
    "text": "What were you hoping we could do today?",
    "dom": "rto",
    "why": "Elicits expectations"
   },
   {
    "who": "pt",
    "text": "To understand what’s going on. And to know if it gets better."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "What you’re describing has a name: post-intensive-care syndrome. After weeks on a ventilator, many people have weak muscles and exhaustion, trouble with memory and concentration, and low mood, anxiety or flashbacks. It’s a recognised consequence of surviving critical illness. You are not going mad, and you are not weak.",
    "dom": "tasks",
    "why": "Names and legitimises PICS"
   },
   {
    "who": "pt",
    "text": "So other people get this too?"
   },
   {
    "who": "dr",
    "text": "Many do. And about the guilt: being grateful to be alive and finding the aftermath really hard are both true at once. One doesn’t cancel the other. The flashbacks, nightmares and avoiding hospital programmes sound like post-traumatic stress, which responds well to the right treatment.",
    "dom": "rto",
    "why": "Reframes the guilt and names PTSD symptoms"
   },
   {
    "who": "pt",
    "text": "That helps more than you know."
   },
   {
    "who": "dr",
    "text": "You should also have been offered a check-up two to three months after leaving intensive care. It sounds like that didn’t happen, so I want to make sure you get that help now.",
    "dom": "tasks",
    "why": "Recognises the missed CG83 review"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’d like to see you in person to examine you and check your oxygen level, and do some blood tests to make sure nothing else — like anaemia or thyroid trouble — is adding to the tiredness. I’ll also send you two short questionnaires about mood and anxiety.",
    "dom": "tasks",
    "why": "Examination, targeted bloods and validated tools"
   },
   {
    "who": "pt",
    "text": "Okay, that makes sense."
   },
   {
    "who": "dr",
    "text": "Then there are three parts to recovery. For the body: physiotherapy and a graded exercise plan, and I’ll ask whether the hospital has an intensive-care follow-up clinic. For the flashbacks and mood: a talking therapy focused on the trauma — there’s good evidence for it. For concentration and work: a sick note for now, and a phased return when you’re ready. Which feels most pressing to you?",
    "dom": "rto",
    "why": "Multi-domain plan with shared priority"
   },
   {
    "who": "pt",
    "text": "The nightmares. If I could sleep, I think I could cope with the rest."
   },
   {
    "who": "dr",
    "text": "Then we’ll make the therapy referral the first thing I do. Would it help if I explained this to your family — so they see it’s a recognised condition, not you being ungrateful?",
    "dom": "rto",
    "why": "Prioritises his goal and offers to involve family"
   },
   {
    "who": "pt",
    "text": "Yes. I think they’d listen to a doctor."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If your breathing gets worse, you get chest pain, cough up blood or have a fever, contact us the same day, or 999 if it’s severe. If you ever feel life isn’t worth living, call us, NHS 111 or the Samaritans straight away. I’ll see you face to face this week and I’ll chase the referrals myself.",
    "dom": "gs",
    "why": "Physical and mental-health safety-net with ownership"
   },
   {
    "who": "dr",
    "text": "Can you tell me in your own words what we’ve agreed?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "It’s post-intensive-care syndrome. I’m not weak. Therapy for the nightmares first, physio, a sick note, bloods, and you’ll talk to my family. Thank you."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let him list all his symptoms and the guilt without interruption.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work, family reactions, daily function and sleep.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Followed the flashbacks and the “I should be grateful” guilt.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (weakness or something still wrong), concern (guilt, never improving), expectation (an explanation and hope).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Face-to-face examination with SpO2; FBC, U&E, LFTs, thyroid function, glucose; PHQ-9 and GAD-7.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "PICS across three domains vs ongoing lung damage, anaemia, thyroid disease, depression and PTSD.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about worsening breathlessness, chest pain, haemoptysis, fever, weight loss and suicidal thoughts.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named post-intensive-care syndrome with probable PTSD in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Trauma-focused psychological therapy (NICE NG116), physiotherapy and reconditioning, critical-care follow-up referral, fit note and phased return.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Mood, sleep and cognition addressed; family offered an explanation; no benzodiazepines.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Face-to-face review this week, referrals tracked, physical red flags and crisis contacts named.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Mental health & addiction",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Martin Oduya",
    "age": "52 years · male",
    "pmh": [
     "ICU admission five months ago — severe pneumonia/ARDS, ventilated three weeks",
     "No critical-care follow-up on record"
    ],
    "meds": [
     "Reconcile medication since discharge"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Discharge summary five months ago after three weeks of ventilation. No 2 to 3 month rehabilitation review recorded.",
    "reason": "Video consultation: “I survived — so why am I a wreck?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "He opens with the full list and the guilt. Let him finish; acknowledge it before questioning."
    },
    {
     "t": "1–5",
     "h": "Screen three domains",
     "d": "Physical function and red flags; flashbacks, nightmares, avoidance, mood and suicide risk; memory, concentration and work."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Where the guilt comes from (family); what he hopes for today."
    },
    {
     "t": "6–10",
     "h": "Name and plan",
     "d": "Post-intensive-care syndrome; gratitude and suffering coexist; examination and bloods; therapy, physio, critical-care follow-up, fit note."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Physical red flags, crisis contacts, face-to-face this week, you chase referrals, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Treats fatigue alone with bloods; misses the flashbacks and never asks about suicide; agrees he should be grateful; no name for the problem; no referrals or follow-up.",
    "pass": "Recognises post-intensive-care syndrome; screens physical, cognitive and psychological domains including risk; refers for therapy and physiotherapy; arranges review with basic safety-netting.",
    "exc": "All of that, plus: reframes the guilt explicitly; recognises the missed 2 to 3 month review; lets him set the first priority; offers to explain to his family; tracks referrals personally; checks understanding with teach-back."
   },
   "avoid": [
    {
     "dont": "“Well, you’re lucky to be here — it just takes time.”",
     "instead": "“Being grateful to be alive and finding this hard are both true. What you’re going through has a name, and there’s help for it.”",
     "why": "Repeats the invalidating message that stops him seeking help."
    },
    {
     "dont": "“I’ll give you something to help you sleep.”",
     "instead": "“The nightmares are part of trauma stress, and a specific talking therapy works best for that.”",
     "why": "NICE NG116 advises against benzodiazepines; sedatives do not treat PTSD."
    },
    {
     "dont": "“Let’s do some bloods and see.”",
     "instead": "“Bloods, yes — and alongside them, help for your body, your mood and your concentration.”",
     "why": "A single-domain plan misses the syndrome."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work and income",
     "t": "He has not returned to work. Offer a fit note, discuss a phased return and workplace adjustments, and signpost occupational health and financial advice if income is affected."
    },
    {
     "h": "Family understanding",
     "t": "Family messages that he should “just be grateful” add to his distress. With his consent, explaining the syndrome to them can change the support he gets at home."
    }
   ],
   "legal": [
    {
     "h": "Fit note",
     "t": "A fit note can advise “may be fit for work” with a phased return or altered duties when he is ready (DWP fit note guidance)."
    },
    {
     "h": "Equality Act 2010",
     "t": "If impairments are substantial and long-term, he may be protected under the Equality Act 2010, which requires reasonable adjustments at work."
    }
   ],
   "professional": [
    {
     "h": "Closing the follow-up gap",
     "t": "NICE CG83 expects a review 2 to 3 months after critical-care discharge. Recognise the gap without blaming colleagues, coordinate referrals, and record who is following what up."
    },
    {
     "h": "Consent to share",
     "t": "Get his agreement before discussing his health with his family (GMC Confidentiality, 2017)."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "NHS Talking Therapies (self-referral), ICUsteps peer support for ICU survivors and their families, and Samaritans for crisis support."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Worsening breathlessness, chest pain, haemoptysis or fever — possible lung complications or thromboembolism",
     "Ongoing weight loss or swallowing problems",
     "Suicidal thoughts, hopelessness or plans"
    ],
    "psychosocial": [
     "Off work with poor concentration; financial strain",
     "Family telling him to be grateful; irritability at home",
     "Sleep broken by nightmares; avoidance of hospital reminders"
    ],
    "ice": [
     "Idea: “Something must still be wrong — or I’m weak”",
     "Concern: guilt for struggling; fear it will never improve",
     "Expectation: an explanation and to know if it gets better"
    ]
   },
   "diagnosis": "Post-intensive-care syndrome after three weeks of ventilation for ARDS: physical (weakness, fatigue, exertional breathlessness), cognitive (memory and concentration) and psychological (low mood, probable PTSD) impairment, with no red flags reported and no post-discharge review.",
   "diagnosisLay": "“Intensive care saves lives, but weeks on a breathing machine take a toll on the muscles, the memory and the mind. What you’re going through is a recognised after-effect, and each part has its own help.”",
   "management": {
    "reflectIce": "“You told me you feel guilty for struggling. Being grateful and finding this hard can both be true — and asking for help is exactly the right thing.”",
    "psychosocial": "Fit note and phased return plan; offer to explain the condition to his family; signpost peer support; prioritise sleep through treating the trauma symptoms.",
    "sharedPlan": [
     "Face-to-face examination with SpO2; FBC, U&E, LFTs, thyroid function, glucose",
     "PHQ-9 and GAD-7; referral for trauma-focused psychological therapy (NICE NG116)",
     "Physiotherapy and graded reconditioning; critical-care follow-up service if available",
     "Fit note now; cognitive strategies and a phased return to work later"
    ],
    "safetyNet": [
     "Same-day contact for worsening breathlessness, chest pain, haemoptysis or fever; 999 if severe",
     "Crisis contacts for suicidal thoughts",
     "Review this week; GP tracks referrals"
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
    "s": "Trauma-focused therapy · drug options",
    "href": "management/ptsd.html"
   },
   {
    "ic": "🗺️",
    "t": "Breathlessness pathway",
    "s": "Visual algorithm · red flags",
    "href": "algorithms/breathlessness.html"
   },
   {
    "ic": "📝",
    "t": "Fit notes",
    "s": "Phased return · adjustments",
    "href": "fit-note.html"
   }
  ],
  "pitfalls": {
   "intro": "Candidates fail this station by treating one symptom, echoing the “be grateful” message, or missing the trauma symptoms and suicide risk. The patterns below are fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Investigating fatigue with bloods alone and booking a review.",
     "why": "Post-intensive-care syndrome spans physical, cognitive and psychological domains. A single-domain plan earns little in Tasks.",
     "fix": "Name the syndrome and build a plan with a part for the body, the mind and concentration or work."
    },
    {
     "dom": "tasks",
     "fail": "Hearing “flashbacks” and never asking about nightmares, avoidance or suicidal thoughts.",
     "why": "PTSD and risk are core to this case. Missing risk is a safety failure.",
     "fix": "Ask about intrusions, avoidance and hyperarousal, and ask about suicide directly."
    },
    {
     "dom": "tasks",
     "fail": "Offering a benzodiazepine or sleeping tablet for the nightmares.",
     "why": "NICE NG116 advises against benzodiazepines for PTSD; they do not treat the disorder.",
     "fix": "Refer for trauma-focused CBT; mention venlafaxine or an SSRI such as sertraline only if he prefers medication."
    },
    {
     "dom": "rto",
     "fail": "Agreeing that he is lucky and should focus on the positives.",
     "why": "This repeats the invalidation driving his guilt and reads as not responding to the cue.",
     "fix": "Say it plainly: gratitude and suffering can coexist, and struggling is not weakness."
    },
    {
     "dom": "gs",
     "fail": "Listing referrals without deciding which comes first or who follows them up.",
     "why": "He fell through a follow-up gap once already. A vague plan repeats it.",
     "fix": "Let him choose the first priority, and tell him you will chase the referrals and see him this week."
    },
    {
     "dom": "gs",
     "fail": "Safety-netting only for mood or only for breathing.",
     "why": "Both physical and mental-health deterioration are possible here.",
     "fix": "Name the physical red flags and the crisis contacts in the same closing summary."
    }
   ]
  }
 },
 "postherpetic-neuralgia": {
  "stem": {
   "name": "Edith Caldwell",
   "age": "74-year-old woman",
   "pmh": [
    "Shingles, left T6 dermatome, four months ago — rash healed",
    "Persistent pain in the same band since"
   ],
   "meds": [
    "Paracetamol (tried, no benefit)",
    "Ibuprofen (tried, no benefit)"
   ],
   "allergy": "None recorded",
   "recent": "Shingles episode four months ago, left T6. Rash has cleared. Reports ongoing burning, stabbing pain in the same band, clothing and bedsheets painful to touch, poor sleep.",
   "reason": "Video consultation about pain that has continued since her shingles healed."
  },
  "knowledge": {
   "guideline": "NICE CG173 (neuropathic pain in adults, 2013, updated 2020) · UKHSA Green Book chapter 28a (shingles) · MHRA Drug Safety Update (April 2019; October 2017) · BNF",
   "summary": "Burning dermatomal pain with allodynia months after shingles is postherpetic neuralgia. Stop what is not working, offer one CG173 first-line neuropathic agent at a time, tailor it to a 74-year-old, and look after sleep and mood.",
   "points": [
    {
     "h": "Recognise it",
     "t": "Postherpetic neuralgia is pain in the affected dermatome persisting 90 days or more after the rash began (Dworkin 2007, international). Burning or stabbing pain, allodynia to clothing and itch in the T6 band fit. Check the skin and the pattern are typical before labelling."
    },
    {
     "h": "Why paracetamol and ibuprofen failed",
     "t": "Simple analgesics act on nociceptive and inflammatory pain and help neuropathic pain little. Stop ibuprofen if it gives no benefit: in a 74-year-old it carries gastrointestinal, renal and cardiovascular risk for no gain."
    },
    {
     "h": "First-line drugs",
     "t": "NICE CG173: offer a choice of amitriptyline, duloxetine, gabapentin or pregabalin. If the first is ineffective or not tolerated, offer one of the remaining three, and switch again if needed. One drug at a time, start low, titrate, doses per BNF. Review early for side effects and dose, then regularly."
    },
    {
     "h": "Tailor to her age",
     "t": "Amitriptyline: anticholinergic effects, sedation and falls risk in older people (BNF). Gabapentin and pregabalin: Schedule 3 controlled drugs since April 2019 for abuse and dependence risk (MHRA Drug Safety Update, April 2019); respiratory depression risk rises with opioids (MHRA Drug Safety Update, October 2017); adjust for renal function per BNF. Duloxetine: avoid with hepatic impairment (BNF) and consider it if low mood coexists."
    },
    {
     "h": "Topical options",
     "t": "NICE CG173: consider capsaicin cream for localised neuropathic pain in people who wish to avoid, or cannot tolerate, oral treatment. Lidocaine 5% plasters are licensed for postherpetic neuralgia but CG173 does not recommend them; use only as the local formulary allows."
    },
    {
     "h": "Opioids and referral",
     "t": "NICE CG173: tramadol only as acute rescue; do not start other opioids for neuropathic pain in non-specialist settings without specialist advice. Refer to a pain service if pain stays severe or limits daily life despite first-line options."
    },
    {
     "h": "Prevention",
     "t": "UKHSA Green Book chapter 28a: Shingrix is offered to adults aged 70 to 79 until their 80th birthday, as two doses. She is eligible; check the chapter for timing after a recent episode."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Caldwell, I’m Dr Lee. I can see you had shingles a few months ago. Tell me in your own words what has been happening since.",
    "dom": "rto",
    "why": "Open question; lets her lead"
   },
   {
    "who": "pt",
    "text": "The rash cleared months ago, but my left side still burns and stabs, day and night. Even my nightie touching it is agony. The paracetamol and ibuprofen do nothing. Is something else wrong?"
   },
   {
    "who": "dr",
    "text": "That sounds exhausting, and I can hear how worrying it is that it hasn’t gone. I’d like to understand the pain properly, check for anything unusual, and then explain what I think it is and what will help. Does that suit you?",
    "dom": "gs",
    "why": "Acknowledges distress and sets a clear agenda"
   },
   {
    "who": "pt",
    "text": "Yes, please. I just want to know what’s going on."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Can you show me on yourself where the pain is? Does it stay in the same band where the rash was?",
    "dom": "tasks",
    "why": "Confirms the dermatomal distribution"
   },
   {
    "who": "pt",
    "text": "Just here, round the left side under my breast to my back. Exactly where the blisters were."
   },
   {
    "who": "dr",
    "text": "And the skin itself — any new rash, lumps, colour change, or blisters coming back?",
    "dom": "tasks",
    "why": "Screens for atypical features and recurrence"
   },
   {
    "who": "pt",
    "text": "No, it looks normal now. It just hurts when anything touches it."
   },
   {
    "who": "dr",
    "text": "Any weakness, numbness spreading elsewhere, weight loss, fevers or new back pain that feels different from this burning?",
    "dom": "tasks",
    "why": "Excludes other causes of thoracic pain"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. I’m eating fine. It’s just this band."
   },
   {
    "who": "dr",
    "text": "How much paracetamol and ibuprofen have you been taking, and has your stomach been all right with it?",
    "dom": "tasks",
    "why": "Checks analgesic use and NSAID harm"
   },
   {
    "who": "pt",
    "text": "The usual doses from the packet. My stomach’s fine, but they don’t touch it, so I sometimes don’t bother."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said you wondered whether something else is wrong. What have you been worrying it might be?",
    "dom": "rto",
    "why": "Picks up her opening cue and explores the idea"
   },
   {
    "who": "pt",
    "text": "If the shingles is gone, why is it still hurting? I thought it might be something serious underneath. And I’m starting to think it’ll never go."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. How is this affecting you day to day — your sleep, your mood, getting out?",
    "dom": "rto",
    "why": "Explores the psychosocial impact"
   },
   {
    "who": "pt",
    "text": "I’m not sleeping. I’m worn out, and I feel low. I don’t go out as much because I can’t bear clothes rubbing on it."
   },
   {
    "who": "dr",
    "text": "That’s a lot to be carrying. Over the last couple of weeks, have you felt down most days, or lost interest in things you used to enjoy? Any thoughts that life isn’t worth living?",
    "dom": "tasks",
    "why": "Screens low mood and risk"
   },
   {
    "who": "pt",
    "text": "Low, yes, and fed up. But nothing like that — I just want to sleep."
   },
   {
    "who": "dr",
    "text": "And what were you hoping we could do today?",
    "dom": "rto",
    "why": "Elicits expectations"
   },
   {
    "who": "pt",
    "text": "Something that actually works. And to know it isn’t something worse."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Everything you describe fits a known after-effect of shingles called postherpetic neuralgia. The virus irritates the nerve, and the nerve can carry on sending pain signals after the skin has healed. It isn’t a new illness, and nothing you’ve told me suggests something else underneath.",
    "dom": "tasks",
    "why": "Names the diagnosis and answers her fear"
   },
   {
    "who": "pt",
    "text": "So it’s the nerve, not the skin?"
   },
   {
    "who": "dr",
    "text": "Exactly. And that’s why the paracetamol and ibuprofen didn’t help: they’re aimed at a different kind of pain. You haven’t failed with them — they’re the wrong tool. I’d stop the ibuprofen, because at your age it can upset the stomach and kidneys without doing any good here.",
    "dom": "tasks",
    "why": "Explains analgesic failure and stops a harmful drug"
   },
   {
    "who": "pt",
    "text": "That makes sense. I felt I was doing something wrong."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Nerve pain has its own medicines. There are four we usually start with: amitriptyline, duloxetine, gabapentin and pregabalin. We try one at a time, start small and build up slowly. Some suit older people better than others — can I ask a couple of things to help choose?",
    "dom": "tasks",
    "why": "Offers the CG173 first-line choice"
   },
   {
    "who": "pt",
    "text": "Go on."
   },
   {
    "who": "dr",
    "text": "Have you had any falls or dizziness, and how are your kidneys and liver, as far as you know? Some of these can make people drowsy or unsteady, which matters at night.",
    "dom": "tasks",
    "why": "Tailors choice to falls, renal and hepatic risk"
   },
   {
    "who": "pt",
    "text": "No falls. I’m not aware of anything wrong with my kidneys. I don’t want anything that makes me groggy."
   },
   {
    "who": "dr",
    "text": "Then here are the trade-offs. Duloxetine can help mood as well as nerve pain. Gabapentin or pregabalin can help sleep but may cause drowsiness. Amitriptyline at night helps sleep but is more likely to cause dry mouth and unsteadiness at your age. Which feels right to you?",
    "dom": "rto",
    "why": "Shared decision with honest trade-offs"
   },
   {
    "who": "pt",
    "text": "The low mood is part of it. I’d try the duloxetine."
   },
   {
    "who": "dr",
    "text": "A good choice. I’ll start a low dose and we’ll adjust it. Nausea and dizziness can happen early and often settle. It takes a few weeks to work, and the aim is to take the edge off and help you sleep, rather than no pain at all. If it doesn’t suit you, we switch to another.",
    "dom": "tasks",
    "why": "Realistic expectations and titration plan"
   },
   {
    "who": "dr",
    "text": "Because clothes touching the skin is so painful, a capsaicin cream on that band is another option alongside or instead. It can sting at first. And a soft cotton layer next to the skin can help in the meantime.",
    "dom": "tasks",
    "why": "Topical option for localised allodynia"
   },
   {
    "who": "pt",
    "text": "I’ll try anything that stops the nightie hurting."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "I’ll speak to you again in about two weeks to see how you’re getting on and adjust the dose. If you get a new rash, weakness, a fever, or you ever feel you can’t cope or life isn’t worth living, contact us the same day. If we can’t get on top of it, there’s a pain clinic.",
    "dom": "gs",
    "why": "Defined review, red flags and escalation"
   },
   {
    "who": "dr",
    "text": "One more thing for later: you’re eligible for the shingles vaccine, which lowers the chance of shingles again. We’ll talk about timing when this settles. To check I’ve explained it well — what will you tell a friend about why it still hurts?",
    "dom": "rto",
    "why": "Prevention plus teach-back"
   },
   {
    "who": "pt",
    "text": "That the nerve is still upset after the shingles, and I need a nerve medicine, not ordinary painkillers. And a cream. I feel better knowing what it is."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her describe the burning, the band and the failed painkillers before focusing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Sleep, mood, going out less because clothing hurts, and how she manages at home.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “is something else wrong?” and “I’m worn out” and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (something serious underneath), concern (it will never go; exhaustion), expectation (treatment that works).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Inspect the T6 band at a face-to-face review; check renal function before gabapentinoids if not recent; mood screen.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Postherpetic neuralgia vs recurrence, other thoracic or spinal causes; screened for weight loss, weakness and fever.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "No atypical skin change, neurology or systemic features; low mood and risk asked about directly.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named postherpetic neuralgia in plain words and explained why simple analgesics failed.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "NICE CG173 first-line choice, one drug at a time, started low and titrated; capsaicin cream considered; ibuprofen stopped.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Falls, sedation, renal and hepatic cautions weighed; duloxetine chosen with low mood in mind.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review in about two weeks, side effects named, pain clinic if refractory, mood crisis advice, Shingrix discussed.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Edith Caldwell",
    "age": "74 years · female",
    "pmh": [
     "Herpes zoster, left T6, four months ago",
     "Ongoing pain since the rash healed"
    ],
    "meds": [
     "Paracetamol (self-bought)",
     "Ibuprofen (self-bought)"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Shingles, left T6, four months ago. Rash now healed. Patient reports burning, stabbing pain in the same band, allodynia and poor sleep. No neuropathic agent tried.",
    "reason": "Video consultation: “The rash went months ago — why does it still burn?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "She asks “is something else wrong?” in her first breath. Note it and let her finish."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Distribution, allodynia, skin now, atypical features (weight loss, weakness, fever), analgesic use and NSAID harm."
    },
    {
     "t": "4–6",
     "h": "ICE and impact",
     "d": "Her fear of something serious, sleep, mood (ask about risk), going out less."
    },
    {
     "t": "6–10",
     "h": "Explain and share",
     "d": "Name postherpetic neuralgia; why painkillers failed; CG173 first-line choice with age-specific trade-offs; capsaicin cream; stop ibuprofen."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Review in two weeks, side effects, red flags, pain clinic if needed, Shingrix for later, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Increases the paracetamol or adds codeine; never names postherpetic neuralgia; starts a neuropathic drug without explaining titration or side effects; ignores sleep and low mood; no review date.",
    "pass": "Names postherpetic neuralgia and explains why simple analgesics failed; offers one CG173 first-line drug with a titration plan; asks about mood; books a review with basic safety-netting.",
    "exc": "All of that, plus: answers her fear that something else is wrong; weighs falls, sedation and renal cautions and lets her choose; stops the ibuprofen; offers capsaicin cream for the allodynia; screens risk; mentions Shingrix; checks understanding with teach-back."
   },
   "avoid": [
    {
     "dont": "“Shingles pain can take a while — just keep taking the painkillers.”",
     "instead": "“This is nerve pain, and ordinary painkillers aren’t built for it. Let’s use a medicine that is.”",
     "why": "Leaves her on drugs that do not work and dismisses four months of suffering."
    },
    {
     "dont": "“I’ll give you some codeine to take the edge off.”",
     "instead": "“Strong painkillers don’t help this kind of pain much and cause falls and constipation. There are better options.”",
     "why": "NICE CG173 does not support opioids for ongoing neuropathic pain in primary care."
    },
    {
     "dont": "“This tablet should get rid of the pain.”",
     "instead": "“The aim is to take the edge off and help you sleep. It takes a few weeks, and we adjust as we go.”",
     "why": "Over-promising sets her up to feel she has failed again."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Isolation and function",
     "t": "Chronic pain and poor sleep can shrink an older person’s world. Ask how she manages at home and whether she is going out less, and offer support rather than only a prescription."
    },
    {
     "h": "Mood",
     "t": "Low mood is common with persistent pain. Screen for depression and ask about risk (NICE NG222); treating the pain and sleep often lifts mood, but depression needs its own plan if present."
    }
   ],
   "legal": [
    {
     "h": "Driving on sedating drugs",
     "t": "If she drives, advise her not to drive if a new drug makes her drowsy or dizzy. Gabapentin and pregabalin are Schedule 3 controlled drugs (MHRA Drug Safety Update, April 2019)."
    }
   ],
   "professional": [
    {
     "h": "Safe prescribing in older adults",
     "t": "Start low, go slow, review early, and record why a drug was chosen. Check the whole medication list for sedative and anticholinergic burden (GMC Good medical practice, 2024: prescribe safely)."
    },
    {
     "h": "Shared decision",
     "t": "Offer the first-line options with their trade-offs and let her choose; document the discussion and the review plan."
    }
   ],
   "community": [
    {
     "h": "Vaccination",
     "t": "Shingrix via the NHS shingles programme for eligible ages (UKHSA Green Book chapter 28a); practice nurse or community pharmacy can help with booking where offered locally."
    },
    {
     "h": "Pain support",
     "t": "Community pain management programmes and physiotherapy where available; pain clinic referral if first-line options fail."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "New rash, blistering or spreading lesions — possible recurrence",
     "Weakness, sensory loss beyond the dermatome, sphincter change or new severe back pain — look for another cause",
     "Weight loss, fevers or night sweats — do not assume postherpetic neuralgia",
     "Low mood with thoughts that life is not worth living"
    ],
    "psychosocial": [
     "Sleep lost to night-time pain and allodynia",
     "Low mood and going out less because clothes hurt",
     "Falls risk and sedation worries with new medicines"
    ],
    "ice": [
     "Idea: “If the shingles is gone, something else must be wrong”",
     "Concern: it will never go; exhaustion and low mood",
     "Expectation: a treatment that actually works and reassurance"
    ]
   },
   "diagnosis": "Postherpetic neuralgia: persistent neuropathic pain with allodynia in the left T6 dermatome four months after shingles, with no atypical features. Simple analgesics are ineffective for this type of pain.",
   "diagnosisLay": "“Shingles is a virus that travels along a nerve. It can leave the nerve irritated, so it keeps sending pain messages after the skin has healed — like a faulty alarm that keeps ringing after the danger has gone.”",
   "management": {
    "reflectIce": "“You were worried something else was going on. From everything you’ve told me, this is the nerve still upset after shingles — and it’s treatable.”",
    "psychosocial": "Address sleep and mood alongside pain; suggest soft cotton next to the skin; check how she is coping at home and whether she is going out less.",
    "sharedPlan": [
     "Stop ibuprofen; explain simple analgesics are the wrong tool",
     "One NICE CG173 first-line agent (her choice: duloxetine), started low and titrated per BNF",
     "Consider capsaicin cream for the localised allodynia",
     "Switch to another first-line agent if ineffective or not tolerated; pain clinic if refractory"
    ],
    "safetyNet": [
     "Review in about two weeks to check side effects and adjust dose",
     "Same-day contact for new rash, weakness, fever or thoughts of self-harm",
     "Shingrix discussion once this has settled"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Neuropathic pain",
    "s": "Case walkthrough · NICE CG173",
    "href": "../cases/neuropathic-pain.html"
   },
   {
    "ic": "💠",
    "t": "Neuropathic pain protocol",
    "s": "First-line agents · switching",
    "href": "management/neuropathic-pain.html"
   },
   {
    "ic": "💠",
    "t": "Shingles",
    "s": "Antivirals · PHN · Shingrix",
    "href": "management/shingles.html"
   },
   {
    "ic": "📋",
    "t": "Chronic pain",
    "s": "Case walkthrough · whole-person care",
    "href": "../cases/chronic-pain.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed less on drug names than on treating the pain as ordinary, ignoring her fear and mood, and prescribing without a plan. The patterns below are common and fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Escalating to co-codamol or tramadol because “the paracetamol isn’t strong enough”.",
     "why": "Neuropathic pain responds poorly to simple analgesics and opioids; NICE CG173 limits tramadol to acute rescue. Examiners read this as not recognising the diagnosis.",
     "fix": "Name postherpetic neuralgia and switch class: offer a choice of amitriptyline, duloxetine, gabapentin or pregabalin."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing amitriptyline by habit without asking about falls, dizziness or other medicines in a 74-year-old.",
     "why": "Anticholinergic and sedative effects raise falls risk in older people. A plan that ignores her age is not safe.",
     "fix": "Ask about falls, renal and hepatic history, then lay out the trade-offs and let her choose."
    },
    {
     "dom": "rto",
     "fail": "Hearing “is something else wrong?” and moving straight to drug choice.",
     "why": "Her main fear is unaddressed, so reassurance later lands poorly. “Does not respond to the patient’s cues” is standard failing feedback.",
     "fix": "Return to it: “You wondered if something else is going on — let me tell you why I don’t think so.”"
    },
    {
     "dom": "rto",
     "fail": "Never asking about sleep or mood despite “I’m worn out”.",
     "why": "The bio-psycho-social toll is half this case. Missing low mood and risk is a Relating and a safety failure.",
     "fix": "Ask directly about mood and thoughts of self-harm, and let the answer shape the drug choice."
    },
    {
     "dom": "gs",
     "fail": "Starting a new drug with “see how you get on” and no review.",
     "why": "These drugs need titration and early side-effect checks. Vague follow-up is marked as unsafe.",
     "fix": "Give a named review in about two weeks, what side effects to expect, and when to call sooner."
    },
    {
     "dom": "gs",
     "fail": "Promising the tablet will make the pain go away.",
     "why": "Unrealistic expectations lead to early stopping and loss of trust.",
     "fix": "“The aim is to take the edge off and help you sleep; it takes a few weeks and we adjust as we go.”"
    }
   ]
  }
 },
 "raynauds-young-girl": {
  "stem": {
   "name": "Ruby Hartnell",
   "age": "15-year-old girl",
   "pmh": [
    "Nil relevant recorded"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "None recorded",
   "recent": "Mother reports two winters of fingers turning white, then blue, then red in the cold, with numbness, tingling and pain on rewarming, fully settling between attacks. Otherwise well.",
   "reason": "Video consultation with her mother: “Is it just poor circulation?”"
  },
  "knowledge": {
   "guideline": "BSR guideline for the management of systemic sclerosis (2024) · EULAR systemic sclerosis recommendations (2023 update, international) · PCDS Raynaud’s phenomenon · BNFC (nifedipine) · GMC 0–18 years (2018)",
   "summary": "Symmetrical white–blue–red colour change in the cold in a well 15-year-old is almost always primary Raynaud’s. The skill is a careful screen for secondary features, warmth-first management, and speaking to Ruby herself.",
   "points": [
    {
     "h": "Recognise Raynaud’s",
     "t": "Episodic colour change of the digits on cold or stress — white, then blue, then red on rewarming — with numbness or pain and full recovery between attacks."
    },
    {
     "h": "Primary picture",
     "t": "Onset in the teens or twenties, symmetrical, no ulcers or pitting scars, normal nailfolds, no systemic features. It does not damage the fingers."
    },
    {
     "h": "Secondary features",
     "t": "Later onset, asymmetry, digital ulcers, pitting scars or necrosis, abnormal nailfold capillaries, skin tightening or puffy fingers, rash, joint pain, mouth ulcers, dry eyes or mouth, swallowing problems, fatigue. These point to connective tissue disease, most often systemic sclerosis (BSR 2024)."
    },
    {
     "h": "Proportionate tests",
     "t": "Examine hands, nailfolds (a dermatoscope helps), pulses and BP face to face. FBC, ESR or CRP and ANA are reasonable to support a primary diagnosis in a young person; any secondary feature or positive ANA → paediatric or adolescent rheumatology referral."
    },
    {
     "h": "Warmth first",
     "t": "Keep the whole body warm, gloves and hand warmers, avoid sudden cold, rewarm gently with warm not hot water, avoid smoking and vaping, and review triggering medicines such as decongestants. A school plan helps with PE outdoors."
    },
    {
     "h": "Medicines and emergencies",
     "t": "Nifedipine is the only medicine licensed for Raynaud’s in the UK, for adults; in under-18s it is off-label and best started with specialist advice (dose per BNFC). A digit that stays white or blue, new ulceration or necrosis → same-day assessment (BSR 2024: preferably within 48 hours for new necrosis)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, I’m Dr Lee. Ruby, thanks for coming — and hello to Mum. Ruby, you said PE outside is the worst. Can you tell me what happens to your fingers?",
    "dom": "rto",
    "why": "Greets both, then turns to Ruby and picks up her own words"
   },
   {
    "who": "pt",
    "text": "(Ruby) “They go white, like dead, then blue. And when they warm up they go red and really hurt.”"
   },
   {
    "who": "dr",
    "text": "Thank you, that’s a really clear description. I’d like to ask you a few questions, have a look at your hands on the camera, and then explain what I think it is and what we can do. Mum, I’ll come to your questions too — is that okay with you both?",
    "dom": "gs",
    "why": "Agenda that includes both and keeps Ruby central"
   },
   {
    "who": "pt",
    "text": "(Mother) “Of course.” (Ruby nods.)"
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Ruby, is it both hands, and all the fingers, or just one or two? And does it ever affect your toes?",
    "dom": "tasks",
    "why": "Checks symmetry — a key primary vs secondary feature"
   },
   {
    "who": "pt",
    "text": "(Ruby) “Both hands. Mostly the same fingers each side.”"
   },
   {
    "who": "dr",
    "text": "Once your hands warm up, do they go completely back to normal? Have you ever had sores or little cuts on your fingertips that were slow to heal?",
    "dom": "tasks",
    "why": "Screens for tissue damage — digital ulcers and pitting"
   },
   {
    "who": "pt",
    "text": "(Ruby) “They go back to normal. No sores.”"
   },
   {
    "who": "dr",
    "text": "I’m going to ask about a few other things that might sound unrelated. Any painful or swollen joints, rashes — especially on your face in the sun — mouth ulcers, dry or gritty eyes, trouble swallowing, your skin feeling tight on your fingers, or being really tired?",
    "dom": "tasks",
    "why": "Targeted screen for connective tissue disease"
   },
   {
    "who": "pt",
    "text": "(Ruby) “No, none of that.”"
   },
   {
    "who": "dr",
    "text": "Are you taking anything — tablets, cold remedies, anything from the chemist?",
    "dom": "tasks",
    "why": "Screens for triggering medicines"
   },
   {
    "who": "pt",
    "text": "(Mother) “No, nothing.”"
   },
   {
    "who": "dr",
    "text": "Could you hold your hands up to the camera, fingertips first? … They look a normal colour now, with no sores or scars I can see.",
    "dom": "tasks",
    "why": "Video look at the hands, acknowledging its limits"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Mum, you mentioned poor circulation, or her heart. What’s been worrying you most?",
    "dom": "rto",
    "why": "Explores the parent’s idea and concern directly"
   },
   {
    "who": "pt",
    "text": "(Mother) “That it’s a sign of something serious. You read things online. She’s only 15.”"
   },
   {
    "who": "dr",
    "text": "That’s a completely understandable worry. And Ruby, how is it affecting you day to day?",
    "dom": "rto",
    "why": "Validates the mother, then returns to Ruby’s experience"
   },
   {
    "who": "pt",
    "text": "(Ruby) “PE in winter is horrible. My fingers hurt and I can’t do anything.”"
   },
   {
    "who": "dr",
    "text": "That sounds really frustrating. How do you feel about it at school, with other people around?",
    "dom": "rto",
    "why": "Acknowledges and explores the teenager’s experience"
   },
   {
    "who": "pt",
    "text": "(Ruby) “It’s just annoying. I don’t like making a fuss.”"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Ruby, this is called Raynaud’s. The tiny blood vessels in your fingers overreact to cold and squeeze shut for a while, which is why they go white, then blue, then red when the blood rushes back.",
    "dom": "tasks",
    "why": "Names Raynaud’s in plain words"
   },
   {
    "who": "dr",
    "text": "Mum, it isn’t a heart problem. At Ruby’s age, both hands, no sores, and nothing else going on, this is almost always the common, harmless type. It doesn’t damage the fingers. Very occasionally it’s linked to a condition affecting the immune system, which is why I asked all those other questions.",
    "dom": "tasks",
    "why": "Proportionate reassurance with the reason for the secondary screen"
   },
   {
    "who": "pt",
    "text": "(Mother) “So you don’t think it’s anything bad?”"
   },
   {
    "who": "dr",
    "text": "Everything so far points to the harmless type. To be thorough, I’d like to see Ruby in person to check her fingers, nail beds, pulses and blood pressure, and do a simple blood test for inflammation and an immune marker. If anything is abnormal, I’d ask the young people’s rheumatology team to see her.",
    "dom": "tasks",
    "why": "Face-to-face examination, proportionate bloods and a clear referral trigger"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Ruby, the main treatment is keeping your whole body warm, not just your hands. Good gloves, hand warmers, layers, and warming up gently with warm — not hot — water. Smoking and vaping make it worse too. Which of those could you actually do at school?",
    "dom": "tasks",
    "why": "Warmth-first advice, involving Ruby in choices"
   },
   {
    "who": "pt",
    "text": "(Ruby) “Gloves in PE, if they let me. And hand warmers in my bag.”"
   },
   {
    "who": "dr",
    "text": "Good plan. I can write a short letter for school so you can wear gloves and warm up indoors when it’s cold. There are medicines for severe cases, but for someone your age we’d only use one with specialist advice, and you may not need it.",
    "dom": "tasks",
    "why": "School adjustment and proportionate view of nifedipine"
   },
   {
    "who": "pt",
    "text": "(Mother) “A letter would be really helpful.”"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Please get in touch if Ruby gets sores on her fingertips, if one finger stays white or blue and won’t warm up — that’s a same-day call — or if she develops joint pains, rashes, tight skin or swallowing problems. Ruby, can you tell me what you’ll do next time it happens?",
    "dom": "gs",
    "why": "Specific safety-net and teach-back to the patient"
   },
   {
    "who": "pt",
    "text": "(Ruby) “Get somewhere warm, warm my hands slowly, and tell Mum if a finger doesn’t come back.”"
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll book the appointment for the hands check and blood test, and we’ll go through the results together. Ruby, if you ever want to talk to me on your own about anything, that’s always fine.",
    "dom": "gs",
    "why": "Closes with follow-up and offers the teenager her own space"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Greeted both; took the history from Ruby in her own words; let her mother add.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored school and PE, how she feels about it around others, and the mother’s worry.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up ‘PE outside is the worst’ and ‘is it her heart’; acted on each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Mother’s idea: poor circulation or the heart; concern: serious disease. Ruby’s concern: pain and nuisance at school. Expectation: reassurance.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Face-to-face hands, nailfolds, pulses and BP; FBC, ESR or CRP and ANA as proportionate tests.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Primary vs secondary Raynaud’s; systemic sclerosis, SLE, mixed connective tissue disease; drug triggers.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about asymmetry, ulcers, pitting and connective tissue features; knows a non-reperfusing digit or new necrosis needs same-day assessment.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named primary Raynaud’s as most likely, while explaining the checks.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Warmth-first plan chosen with Ruby; school letter; nifedipine only with specialist advice in under-18s (off-label; dose per BNFC).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Advice on smoking and vaping, decongestants and other triggers; plan for rheumatology if any secondary feature or positive ANA.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named ulcers, a digit that won’t warm, and new systemic symptoms; results review booked; teach-back from Ruby.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Ruby Hartnell",
    "age": "15 years · female",
    "pmh": [
     "Nil relevant recorded"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Two winters of white–blue–red finger colour change in the cold, pain on rewarming, full recovery between attacks. No bloods on file.",
    "reason": "Mother: “Is it just poor circulation — or her heart?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Greet both, start with Ruby",
     "d": "Use Ruby’s own words (‘PE is the worst’) to bring her in first."
    },
    {
     "t": "1–4",
     "h": "Primary vs secondary",
     "d": "Symmetry, full recovery, ulcers or pits, connective tissue features, medicines. Look at the hands on camera."
    },
    {
     "t": "4–6",
     "h": "Both sets of ICE",
     "d": "Mother: heart or something serious. Ruby: pain and nuisance at school."
    },
    {
     "t": "6–8",
     "h": "Explain proportionately",
     "d": "Raynaud’s in plain words; almost always the harmless type at her age; why you asked the extra questions; face-to-face check and simple bloods."
    },
    {
     "t": "8–12",
     "h": "Plan and safety-net",
     "d": "Warmth-first, school letter, no medicine for now; ulcers or a finger that won’t warm → same day; teach-back from Ruby."
    }
   ],
   "wordPics": {
    "fail": "Talks only to the mother; says “just poor circulation” without a secondary screen; or over-investigates and alarms; no practical advice; no safety-net.",
    "pass": "Recognises Raynaud’s; screens for secondary features; reassures proportionately; arranges examination and basic bloods; gives warmth-first advice and a safety-net.",
    "exc": "All of the above, plus: keeps Ruby central throughout; addresses ‘is it her heart’ directly; explains why the extra questions matter; negotiates school measures with Ruby and offers a letter; knows nifedipine is off-label in under-18s; offers Ruby time on her own; teach-back from Ruby."
   },
   "avoid": [
    {
     "dont": "“Mum, how long has she had this?”",
     "instead": "“Ruby, can you tell me what happens to your fingers?”",
     "why": "Talking over a teenager loses Relating marks."
    },
    {
     "dont": "“It’s just poor circulation — keep her warm.”",
     "instead": "“This is Raynaud’s. It’s almost always harmless at your age, but let me ask a few questions to be sure.”",
     "why": "Skipping the secondary screen is the clinical fail."
    },
    {
     "dont": "“We need to rule out lupus and scleroderma.”",
     "instead": "“Very occasionally it’s linked to an immune condition, so I’ll do a simple check.”",
     "why": "Naming frightening diseases without context alarms the family out of proportion."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "School",
     "t": "Outdoor PE and cold classrooms trigger attacks; not wanting to make a fuss. A short plan with school helps."
    },
    {
     "h": "Adolescent autonomy",
     "t": "At 15, Ruby should lead the conversation. Offer time alone to discuss anything she prefers not to say in front of her mother."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality and competence",
     "t": "GMC 0–18 years guidance (2018): a young person who understands the decision can consent to their own care, and their confidentiality is respected unless there is a risk of serious harm."
    },
    {
     "h": "Supporting pupils with medical conditions",
     "t": "Children and Families Act 2014 (section 100) and DfE statutory guidance ‘Supporting pupils at school with medical conditions’: schools should make arrangements, such as gloves in PE, for pupils with medical conditions."
    }
   ],
   "professional": [
    {
     "h": "Off-label prescribing",
     "t": "Nifedipine is licensed for Raynaud’s in adults only. Off-label use in a child needs a clear rationale and informed consent, ideally with specialist advice (GMC good practice in prescribing, 2021)."
    }
   ],
   "community": [
    {
     "h": "Information and support",
     "t": "Scleroderma and Raynaud’s UK (SRUK) for information for young people and families, including practical tips for school."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Digit that stays white or blue and does not reperfuse, new ulceration or necrosis → same-day assessment",
     "Asymmetry, single-digit involvement, digital ulcers or pitting scars → suggests secondary Raynaud’s",
     "Skin tightening, puffy fingers, rash, joint pain, mouth ulcers, sicca symptoms, dysphagia, fatigue → bloods and rheumatology"
    ],
    "psychosocial": [
     "Pain and nuisance at school, especially outdoor PE",
     "Mother’s fear of serious illness",
     "Ruby’s own understanding and what she can manage at school"
    ],
    "ice": [
     "Idea (mother): poor circulation, or something to do with the heart",
     "Concern: a serious underlying disease at 15; Ruby — pain at school, especially PE",
     "Expectation: to be told it’s nothing serious"
    ]
   },
   "diagnosis": "“This is Raynaud’s — the small blood vessels in the fingers overreact to cold. At Ruby’s age, with both hands affected and no sores or other symptoms, it’s almost always the harmless type.”",
   "diagnosisLay": "“Think of the blood vessels in your fingers as taps that turn off too hard in the cold. When they turn back on, the blood rushes in — that’s the red and the pain. The taps themselves aren’t damaged.”",
   "management": {
    "reflectIce": "“Mum, you asked if it’s her heart — it isn’t. And Ruby, you said PE is the worst, so let’s make a plan for that.”",
    "psychosocial": "Let Ruby choose the practical measures she will use; offer a school letter; offer her time alone.",
    "sharedPlan": [
     "Face-to-face check: hands, nailfolds, pulses, BP; FBC, ESR or CRP, ANA",
     "Warmth-first: whole-body warmth, gloves, hand warmers, gentle rewarming; avoid smoking, vaping and decongestants",
     "School letter; rheumatology if secondary features or positive ANA; nifedipine only with specialist advice if severe"
    ],
    "safetyNet": [
     "Fingertip sores or a finger that won’t warm up → same-day contact",
     "New joint pain, rash, tight skin or swallowing problems → review; results discussed together"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Raynaud’s phenomenon",
    "s": "Protocol · primary vs secondary · nifedipine",
    "href": "management/raynauds.html"
   },
   {
    "ic": "🗺️",
    "t": "Finger pain pathway",
    "s": "Visual algorithm · digital ischaemia",
    "href": "algorithms/finger-pain.html"
   },
   {
    "ic": "💠",
    "t": "Chilblains",
    "s": "Protocol · cold-related differential",
    "href": "management/chilblains.html"
   },
   {
    "ic": "🗺️",
    "t": "Raised CRP or ESR",
    "s": "Visual algorithm · inflammatory markers",
    "href": "algorithms/high-crp-esr.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by talking to the wrong person or by stopping at the label. The patterns below come up repeatedly.",
   "items": [
    {
     "dom": "rto",
     "fail": "Taking the whole history from the mother.",
     "why": "A 15-year-old is the patient; Relating to Others marks depend on engaging her.",
     "fix": "Start with Ruby’s words and keep turning back to her."
    },
    {
     "dom": "tasks",
     "fail": "Labelling it ‘poor circulation’ and stopping.",
     "why": "The task is the primary vs secondary distinction. Missing connective tissue features delays diagnosis.",
     "fix": "Ask about symmetry, ulcers, pitting and systemic features every time."
    },
    {
     "dom": "tasks",
     "fail": "Starting nifedipine at the first consultation.",
     "why": "Warmth-first is enough for most; nifedipine is off-label in under-18s and needs a clear reason.",
     "fix": "Lifestyle and school measures first; specialist advice if attacks remain severe."
    },
    {
     "dom": "rto",
     "fail": "Ignoring ‘is it her heart?’",
     "why": "An unaddressed parental fear undermines the whole plan.",
     "fix": "Answer it directly: “It isn’t a heart problem.”"
    },
    {
     "dom": "gs",
     "fail": "No safety-net for critical ischaemia.",
     "why": "A digit that doesn’t reperfuse or new ulceration needs same-day assessment.",
     "fix": "Name it plainly: “If a finger stays white or blue and won’t warm up, call us the same day.”"
    },
    {
     "dom": "gs",
     "fail": "Over-investigating and alarming: naming lupus and scleroderma up front.",
     "why": "Disproportionate worry and language not pitched to a teenager.",
     "fix": "Explain the small chance simply, and the simple checks you’ll do."
    }
   ]
  }
 },
 "rectal-bleed-learning-disability": {
  "stem": {
   "name": "Danny Okafor",
   "age": "52-year-old man",
   "pmh": [
    "Down’s syndrome",
    "Moderate learning disability (on the practice learning disability register)"
   ],
   "meds": [
    "None relevant recorded"
   ],
   "allergy": "None recorded",
   "recent": "Support team contacted the practice: about 2 months of rectal bleeding (bright red and sometimes mixed with stool), looser and more frequent stools, reduced appetite and possible weight loss. Attends by video with his long-standing support worker, Maria. Record notes that he becomes anxious at appointments.",
   "reason": "Video consultation booked by his support team about bleeding from the back passage."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) · NICE HTG690 (2023, formerly DG56) · Mental Capacity Act 2005 and Code of Practice · Equality Act 2010 · NHS England Accessible Information Standard (DCB1605)",
   "summary": "Rectal bleeding, looser stools and weight loss at 52 are a suspected colorectal cancer picture in anyone. Offer FIT, examine face to face, and refer on a suspected cancer pathway if FIT is 10 µg Hb/g or more — with the reasonable adjustments that let Danny actually get through it.",
   "points": [
    {
     "h": "FIT decides the pathway",
     "t": "NICE HTG690 and NICE NG12 (updated April 2026): offer quantitative FIT to adults with a change in bowel habit, or aged 50 and over with unexplained rectal bleeding, abdominal pain or weight loss. Danny qualifies on more than one count. FIT at least 10 µg Hb/g → suspected cancer pathway referral for colorectal cancer."
    },
    {
     "h": "When not to wait for FIT",
     "t": "A rectal mass, an unexplained anal mass or unexplained anal ulceration is referred on the examination finding without FIT. If FIT is below 10 µg Hb/g but strong clinical concern persists, NICE HTG690 says do not let the result delay referral."
    },
    {
     "h": "Examine and check bloods",
     "t": "Face-to-face abdominal examination and a DRE only with consent and at his pace. FBC and ferritin (iron-deficiency anaemia is itself a FIT indication), U&E, CRP, TFTs and coeliac serology (NICE NG20: offer testing for unexplained weight loss or persistent GI symptoms)."
    },
    {
     "h": "Diagnostic overshadowing",
     "t": "Do not put new physical symptoms down to the learning disability, Down’s syndrome or anxiety. LeDeR (Learning from lives and deaths) reviews repeatedly find delayed diagnosis of treatable illness in people with a learning disability."
    },
    {
     "h": "Mental Capacity Act 2005",
     "t": "Presume capacity; take all practicable steps to support it; assess for each decision (examination, FIT, colonoscopy) whether he can understand, retain, use or weigh, and communicate. If he lacks capacity for a specific decision, decide in his best interests after consulting those who know him, and record how you reached it."
    },
    {
     "h": "Reasonable adjustments",
     "t": "Equality Act 2010 duty: longer or first-of-day appointments, a quiet space, easy-read information, a familiar supporter, and flagging adjustments on the referral (Accessible Information Standard; Reasonable Adjustment flag where available). The NHS England Faster Diagnosis Standard aims to confirm or rule out cancer within 28 days of referral."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Danny, I’m Dr Lee. Thank you for coming on the video today. And hello Maria. Danny, is it okay if I talk to you, and Maria helps us if we need her?",
    "dom": "rto",
    "why": "Greets Danny first and asks his permission for the triad"
   },
   {
    "who": "pt",
    "text": "(Danny looks at Maria, then nods.) “Okay.”"
   },
   {
    "who": "dr",
    "text": "Thank you. Maria, I heard what you said about the blood and the looser stools. Danny, I’d like to understand what’s been happening, then decide together what we do next. We can go slowly, and you can say stop any time. Is that alright?",
    "dom": "gs",
    "why": "Sets a simple agenda and gives Danny control"
   },
   {
    "who": "pt",
    "text": "(Maria) “That’s lovely, thank you. Danny, the doctor wants to hear from you.”"
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Danny, when you go to the toilet, do you see blood? You can point or show me, if that’s easier.",
    "dom": "tasks",
    "why": "Short, concrete question to Danny, with a non-verbal option"
   },
   {
    "who": "pt",
    "text": "(Danny) “Red. In the toilet.” (Maria) “Sometimes it’s on the paper, sometimes it’s mixed in.”"
   },
   {
    "who": "dr",
    "text": "Thank you, Danny, that really helps. Does your tummy hurt? Can you show me where?",
    "dom": "tasks",
    "why": "Asks about pain directly rather than through the carer"
   },
   {
    "who": "pt",
    "text": "(Danny shrugs.) “Don’t know.” (Maria) “He hasn’t told us about any pain.”"
   },
   {
    "who": "dr",
    "text": "Maria, you know Danny well. How has his toileting changed, and when did you first notice? And has he lost weight on the scales, or is it clothes fitting differently?",
    "dom": "tasks",
    "why": "Uses the carer for collateral history on timing and weight"
   },
   {
    "who": "pt",
    "text": "(Maria) “About two months. Looser, and more often. He’s gone off his food, and I think he’s lost a bit of weight, but we haven’t weighed him properly.”"
   },
   {
    "who": "dr",
    "text": "That’s important. Is this different from how Danny usually is? I want to be sure we treat it as something new, not just ‘how he is’.",
    "dom": "tasks",
    "why": "Establishes a baseline — the active guard against diagnostic overshadowing"
   },
   {
    "who": "pt",
    "text": "(Maria) “It’s definitely new. Honestly, I was worried someone would say it’s just his nerves.”"
   },
   {
    "who": "dr",
    "text": "Any vomiting, very dark or black stools, feeling faint, or bleeding a lot at once?",
    "dom": "tasks",
    "why": "Screens for acute bleeding needing same-day care"
   },
   {
    "who": "pt",
    "text": "(Maria) “No, nothing like that.”"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "Maria, you said you worried it might be put down to nerves. Can you tell me more about that?",
    "dom": "rto",
    "why": "Picks up the carer’s cue about being dismissed"
   },
   {
    "who": "pt",
    "text": "(Maria) “Danny gets very anxious about appointments. I’m worried the hospital tests will be too much for him, and then they just won’t happen.”"
   },
   {
    "who": "dr",
    "text": "Thank you — that’s exactly what I need to plan for. Danny, how do you feel about doctors and hospitals?",
    "dom": "rto",
    "why": "Brings Danny’s own feelings into the consultation"
   },
   {
    "who": "pt",
    "text": "(Danny) “Scared.”"
   },
   {
    "who": "dr",
    "text": "That makes sense, Danny. Lots of people feel scared of doctors. We’ll make a plan so it’s less scary, and Maria can be with you. Is that okay?",
    "dom": "rto",
    "why": "Validates the fear in plain words and offers support"
   },
   {
    "who": "pt",
    "text": "(Danny nods.) “Maria come.”"
   },
   {
    "phase": "Explanation and shared plan",
    "clock": "7–10 min",
    "who": "dr",
    "text": "Maria, let me be clear: blood from the bottom, looser stools and losing weight are things I take seriously in anyone of Danny’s age. His Down’s syndrome doesn’t change that — if anything, I want to be more careful, not less.",
    "dom": "tasks",
    "why": "States plainly that the symptoms are physical and warrant full assessment"
   },
   {
    "who": "dr",
    "text": "Danny, I’d like three things. One: a poo test you do at home — it looks for tiny bits of blood. Two: a blood test. Three: a check of your tummy, in person, with Maria there. Can you tell me back what the poo test is for?",
    "dom": "tasks",
    "why": "Explains FIT, bloods and examination simply, then checks understanding"
   },
   {
    "who": "pt",
    "text": "(Danny) “Blood. In poo.”"
   },
   {
    "who": "dr",
    "text": "Exactly right. Well done. Maria, the test result decides how fast the hospital sees him, and I’m expecting to refer him urgently to the bowel team for a camera test. The aim is to know within about four weeks. I’ll put on the referral that he needs a longer slot, a familiar person with him, easy-read letters, and help with the bowel preparation. Does he have a hospital passport? If not, the team could put one together.",
    "dom": "tasks",
    "why": "NICE NG12 (updated April 2026) FIT-led referral, with reasonable adjustments written into the referral"
   },
   {
    "who": "pt",
    "text": "(Maria) “I’ll check with the team. What about his blood test — he finds that sort of thing really hard.”"
   },
   {
    "who": "dr",
    "text": "I’ll book a longer first appointment with the practice nurse, numbing cream, and the hospital’s learning disability liaison nurse. If Danny can’t manage something even with help, we’ll look at whether he can make that decision, and if not, what is in his best interests, with you and his team. We’ll decide each step as we come to it.",
    "dom": "tasks",
    "why": "Decision-specific capacity and best-interests process under the Mental Capacity Act 2005"
   },
   {
    "phase": "Safety-net and close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "Danny, if there’s a lot of blood, bad tummy pain, or you feel dizzy or very poorly, tell Maria straight away. Maria, that’s a same-day call to us, or 999 if he’s collapsing. I’ll keep track of the FIT result and the hospital appointment myself.",
    "dom": "gs",
    "why": "Specific safety-net and personal ownership of tracking"
   },
   {
    "who": "pt",
    "text": "(Maria) “Thank you. That’s the first time someone’s said they’ll chase it.”"
   },
   {
    "who": "dr",
    "text": "Danny, what will you tell the staff at home about today?",
    "dom": "rto",
    "why": "Teach-back pitched at Danny’s level"
   },
   {
    "who": "pt",
    "text": "(Danny) “Poo test. Blood test. Maria come.”"
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll send an easy-read sheet today, and we’ll talk again when the results are back. Thank you both — Danny, you did really well.",
    "dom": "gs",
    "why": "Closes with accessible information and a defined review"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Greeted Danny first; asked him directly, with pointing or showing as options; let Maria add, not replace.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored his usual toileting, eating and supported-living routine, the support team’s view, and the barrier of his anxiety about appointments.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up Maria’s worry that it would be ‘put down to nerves’ and that the tests would be too much for him, and planned around both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: something new is wrong. Concern: dismissal and a frightening, uncompleted work-up. Expectation: help that he can actually manage. Danny’s own fear asked about.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Face-to-face abdominal examination and DRE with consent at his pace; FIT; FBC, ferritin, U&E, CRP, TFTs, coeliac serology.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Colorectal cancer, polyps, IBD, haemorrhoids or fissure, coeliac disease and thyroid disease — each tested, none assumed from the disability.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for heavy bleeding, melaena, collapse; knows a rectal or anal mass or anal ulceration is referred without waiting for FIT.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named a suspected colorectal cancer picture needing FIT and urgent investigation, stated without alarm.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "FIT-led suspected cancer pathway referral (≥10 µg Hb/g) with reasonable adjustments written in; decision-specific capacity and best interests handled correctly.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Planned for anxiety about appointments and tests (numbing cream, familiar supporter, liaison nurse); flagged bowel prep support.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named same-day and 999 symptoms; personal tracking of FIT and referral; easy-read information; booked review of results.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Health disadvantage & vulnerabilities",
    "Long-term conditions & cancer",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Danny Okafor",
    "age": "52 years · male",
    "pmh": [
     "Down’s syndrome",
     "Learning disability (register)"
    ],
    "meds": [
     "None relevant recorded"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Support team call: ~2 months rectal bleeding, looser stools, off food, possible weight loss. No FIT, FBC or weight on file for this episode. Alert: anxious at appointments.",
    "reason": "Video with support worker Maria. “He’s been having blood when he goes.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Greet Danny first",
     "d": "Say hello to Danny by name, ask if Maria can help. The examiners watch whose face you look at."
    },
    {
     "t": "1–5",
     "h": "Adjusted history",
     "d": "Short questions to Danny, collateral from Maria: timing, blood type, stool change, weight, appetite, pain. Establish what is new compared with his baseline."
    },
    {
     "t": "5–7",
     "h": "Fear and barriers",
     "d": "Maria’s worry about ‘nerves’ and that tests will be too much; Danny’s own fear. These shape the plan."
    },
    {
     "t": "7–10",
     "h": "FIT, exam, bloods, referral",
     "d": "FIT; face-to-face examination; bloods; suspected cancer pathway if FIT ≥10 µg Hb/g. Reasonable adjustments on the referral. Capacity decision by decision."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Heavy bleeding, pain, dizziness → same day; you personally track the FIT and referral. Teach-back from Danny; easy-read sheet."
    }
   ],
   "wordPics": {
    "fail": "Talks only to Maria; puts the symptoms down to anxiety or ‘his condition’; no FIT or referral; assumes Danny cannot consent because of Down’s syndrome, or ignores capacity altogether; sends a standard referral that he cannot get through.",
    "pass": "Speaks to Danny directly in plain words; takes the symptoms seriously; offers FIT, bloods and a face-to-face examination with a suspected cancer referral if FIT is positive; mentions capacity and reasonable adjustments; safety-nets.",
    "exc": "All of the above, plus: establishes what is new against his baseline; uses teach-back with Danny; handles capacity decision by decision without assuming; writes named adjustments into the referral (longer slot, supporter, easy-read, bowel prep help, liaison nurse); and personally owns the tracking so the investigation actually happens."
   },
   "avoid": [
    {
     "dont": "“Maria, how long has he had this?”",
     "instead": "“Danny, when did you first see blood? Maria can help if you like.”",
     "why": "Talking over the patient loses Relating marks and is the behaviour this station tests."
    },
    {
     "dont": "“It could just be his anxiety — let’s see how he goes.”",
     "instead": "“Bleeding, looser stools and weight loss are things I take seriously in anyone. Let’s find out why.”",
     "why": "That is diagnostic overshadowing, and it delays a cancer diagnosis."
    },
    {
     "dont": "“As he has Down’s syndrome, Maria, you’ll need to consent for him.”",
     "instead": "“Danny, I’ll explain each step and you can tell me if it’s okay.”",
     "why": "Capacity is presumed and decision-specific; a support worker cannot consent on his behalf."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Supported living",
     "t": "Danny lives with a support team who notice changes before he reports them. Their observations of stools, eating and weight are key data — ask for them and plan with them."
    },
    {
     "h": "Fear of healthcare",
     "t": "Anxiety about appointments is a predictable barrier. Plan desensitisation, numbing cream, familiar people and quiet timing rather than repeating the same approach."
    }
   ],
   "legal": [
    {
     "h": "Mental Capacity Act 2005",
     "t": "Five principles: presume capacity, support decision-making, allow unwise decisions, act in best interests if capacity is lacking, choose the least restrictive option. Capacity is assessed per decision and per time; record the assessment and any best-interests decision."
    },
    {
     "h": "Equality Act 2010",
     "t": "Services must make reasonable adjustments for disabled people. Failing to adjust — so that a referral cannot be completed — can be unlawful as well as unsafe."
    },
    {
     "h": "Accessible Information Standard",
     "t": "NHS England standard (DCB1605): identify, record, flag, share and meet communication needs, including on referrals to hospital."
    }
   ],
   "professional": [
    {
     "h": "Diagnostic overshadowing",
     "t": "GMC Good Medical Practice (2024) requires you to treat each patient as an individual and not discriminate. LeDeR findings show avoidable deaths linked to delayed diagnosis in people with a learning disability."
    },
    {
     "h": "Test and referral tracking",
     "t": "Own the FIT result and the referral: a named person checks the result comes back and the appointment is attended."
    }
   ],
   "community": [
    {
     "h": "Learning disability support",
     "t": "Community learning disability team, hospital learning disability liaison nurse, and the annual learning disability health check (age 14 and over) with a health action plan."
    },
    {
     "h": "Accessible information",
     "t": "Easy-read leaflets (for example Mencap and the NHS bowel cancer screening easy-read guides) and a hospital passport (made with his team if he has none) shared with the hospital."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Rectal bleeding, change to looser stools and weight loss at 52 → FIT; refer on a suspected cancer pathway if at least 10 µg Hb/g (NICE NG12 (updated April 2026))",
     "Rectal or anal mass, or unexplained anal ulceration on examination → refer without waiting for FIT",
     "Heavy bleeding, melaena, dizziness or collapse → same-day assessment or 999"
    ],
    "psychosocial": [
     "Establish his baseline with the support worker so new symptoms are recognised as new",
     "Anxiety about appointments and fear of what the tests involve",
     "Who supports him day to day, and who should be involved in decisions he cannot make"
    ],
    "ice": [
     "Idea (Maria): something new is wrong and needs checking",
     "Concern: it will be put down to nerves, or the tests will be too frightening to complete",
     "Expectation: a way through the appointments that Danny can manage"
    ]
   },
   "diagnosis": "Be honest without alarm: “Blood, looser stools and weight loss need proper checks in anyone of Danny’s age. I’m not going to put this down to nerves. The poo test and a camera test will tell us what’s going on.”",
   "diagnosisLay": "“Danny, sometimes the inside of the tummy gets a sore place that bleeds. The poo test helps the doctors know where to look, and the camera test lets them see inside and fix it.”",
   "management": {
    "reflectIce": "“Maria, you were worried this would be put down to nerves. It won’t. And because you told me how hard appointments are for him, I’m going to plan this so Danny can manage it.”",
    "psychosocial": "Build the plan around Danny: longer appointments, numbing cream, a familiar supporter, easy-read letters, the liaison nurse, and help with bowel preparation — agreed with him and his team.",
    "sharedPlan": [
     "FIT at home with support; FBC, ferritin, U&E, CRP, TFTs, coeliac serology; face-to-face abdominal examination and DRE if he consents",
     "Suspected cancer pathway referral if FIT is at least 10 µg Hb/g, or on a mass or anal ulceration, or if concern persists despite a low FIT",
     "Capacity assessed for each decision; best-interests process with his team if he lacks capacity for a specific step"
    ],
    "safetyNet": [
     "Heavy bleeding, black stools, severe pain, dizziness or collapse → same day or 999",
     "GP personally tracks the FIT result and referral; review to share results together"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Rectal bleeding pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) and FIT",
    "href": "algorithms/rectal-bleeding.html"
   },
   {
    "ic": "🗺️",
    "t": "Weight loss pathway",
    "s": "Visual algorithm · unexplained weight loss",
    "href": "algorithms/weight-loss.html"
   },
   {
    "ic": "💠",
    "t": "Iron-deficiency anaemia",
    "s": "Protocol · FIT and referral",
    "href": "management/iron-deficiency-anaemia.html"
   },
   {
    "ic": "📝",
    "t": "GP forms and capacity",
    "s": "Mental Capacity Act · third-party requests",
    "href": "gp-forms.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed on who you talk to and what you assume, not on colorectal knowledge. The patterns below are the common ways a correct plan still fails.",
   "items": [
    {
     "dom": "rto",
     "fail": "Taking the whole history from Maria while Danny sits silently.",
     "why": "“Does not involve the patient” — the adjusted consultation is the core task. Talking over him scores poorly in Relating to Others.",
     "fix": "Greet Danny first, ask him short concrete questions, offer pointing or showing, and use Maria to add detail."
    },
    {
     "dom": "tasks",
     "fail": "Accepting ‘it might be his nerves’ and planning to watch and wait.",
     "why": "Diagnostic overshadowing. Rectal bleeding, looser stools and weight loss at 52 are a FIT and suspected cancer pathway picture under NICE NG12 (updated April 2026).",
     "fix": "Ask what is new against his baseline, then say plainly: “I take these symptoms seriously in anyone.”"
    },
    {
     "dom": "tasks",
     "fail": "Direct two-week-wait referral with no FIT, or FIT with no plan for a low result.",
     "why": "Current NICE NG12 (updated April 2026) and HTG690 practice is FIT-led: refer if at least 10 µg Hb/g; refer without FIT only for a rectal or anal mass or anal ulceration; a low FIT must not delay referral if concern persists.",
     "fix": "Offer FIT, examine face to face, and state the conditional plan for each result."
    },
    {
     "dom": "tasks",
     "fail": "“He has Down’s syndrome, so his support worker will consent.”",
     "why": "Mental Capacity Act 2005: capacity is presumed and decision-specific. A support worker cannot consent for an adult.",
     "fix": "Support his understanding, assess each decision, and use a documented best-interests process only if he lacks capacity for that decision."
    },
    {
     "dom": "gs",
     "fail": "A standard referral letter with no adjustments, then no follow-up.",
     "why": "The investigation fails at bowel prep or the waiting room, and the cancer is found late. That is the health inequality this case is about.",
     "fix": "Write named adjustments into the referral, share the hospital passport, involve the liaison nurse, and track it personally."
    },
    {
     "dom": "gs",
     "fail": "Jargon: “We’ll do a FIT and a 2WW for a colonoscopy.”",
     "why": "Language not pitched to the patient. Danny cannot take part in decisions he cannot follow.",
     "fix": "“A poo test that looks for blood. Then a camera test at the hospital, with Maria there.” Check with teach-back."
    }
   ]
  }
 },
 "rhinitis-ladder": {
  "stem": {
   "name": "Priya Soneji",
   "age": "34-year-old woman",
   "pmh": [
    "Seasonal hay fever for years (spring)"
   ],
   "meds": [
    "Over-the-counter oral antihistamine, taken when needed (product not recorded)"
   ],
   "allergy": "Allergy status not recorded — check before prescribing",
   "recent": "Teacher. Symptoms affecting sleep and work this season.",
   "reason": "Video consultation: \"Hay fever worse this year — wants something stronger.\""
  },
  "knowledge": {
   "guideline": "BSACI guideline for the diagnosis and management of allergic and non-allergic rhinitis (Scadding et al., 2017) · ARIA-EAACI (international, 2024–2025) · MHRA Drug Safety Update (September 2019; April 2024) · BNF",
   "summary": "Spring-time, two-sided sneezing, itch, running and blocked nose with itchy eyes is seasonal allergic rhinitis. When an as-needed tablet stops working, the usual problem is under-treatment: a regular intranasal steroid with good technique is the mainstay.",
   "points": [
    {
     "h": "Confirm the pattern",
     "t": "Bilateral sneezing, itch, watery discharge and blockage with itchy eyes in the pollen season is allergic rhinitis. Ask about impact on sleep, work and concentration, and about asthma, which often coexists with rhinitis (BSACI 2017)."
    },
    {
     "h": "Intranasal steroid is the mainstay",
     "t": "BSACI 2017: an intranasal corticosteroid is the treatment of choice for moderate to severe allergic rhinitis, used regularly through the season, not as needed. It takes days to work fully. Fluticasone or mometasone: 2 sprays into each nostril once daily in adults (SPC)."
    },
    {
     "h": "Technique",
     "t": "Head tilted slightly forward, spray with the opposite hand aimed away from the septum towards the outer wall, sniff gently. Poor technique causes nosebleeds, crusting and apparent treatment failure."
    },
    {
     "h": "The ladder",
     "t": "Allergen avoidance → regular intranasal steroid plus a non-sedating antihistamine (for example cetirizine or loratadine 10 mg once daily) → a combination intranasal steroid and antihistamine spray (BSACI 2017 second line), antihistamine eye drops, saline rinses. Oral prednisolone only as a short rescue course for severe symptoms at key times (dose per BNF); BSACI 2017 does not recommend depot steroid injections. Specialist referral for immunotherapy if uncontrolled despite optimal treatment."
    },
    {
     "h": "Cautions",
     "t": "Sedating antihistamines impair driving and performance. Decongestant sprays such as xylometazoline: no more than 7 consecutive days (SPC) because of rebound congestion. Montelukast carries neuropsychiatric warnings (MHRA Drug Safety Update September 2019; April 2024) and ARIA-EAACI (international) does not favour it over an oral antihistamine."
    },
    {
     "h": "What is not hay fever",
     "t": "Persistent one-sided blockage, one-sided bloody discharge, facial pain, swelling or numbness, or eye symptoms such as double vision point to other pathology, including sinonasal tumours, and need ENT assessment (BSACI 2017). NICE NG12 (updated April 2026) has no sinonasal criterion, so refer on clinical grounds with urgency set by the features."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Soneji, I’m Dr Lee. Can you hear and see me okay? … Great. What’s been happening?",
    "dom": "rto",
    "why": "Open question after checking the video link"
   },
   {
    "who": "pt",
    "text": "Every spring it’s the same — sneezing constantly, my nose runs like a tap, it’s blocked at night, and my eyes itch. I take a hay-fever tablet but it’s barely touching it this year, and I’m shattered at work. Can I have something stronger? Maybe steroids?"
   },
   {
    "who": "dr",
    "text": "That sounds exhausting, especially in a classroom. I’d like to understand exactly how it’s affecting you and what you’re using now, then we’ll build a plan that actually gets on top of it. Does that sound okay?",
    "dom": "gs",
    "why": "Validates and sets a clear agenda"
   },
   {
    "who": "pt",
    "text": "Yes, please."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Is it both sides of your nose equally, and does it come every year at the same time?",
    "dom": "tasks",
    "why": "Confirms bilateral, seasonal pattern"
   },
   {
    "who": "pt",
    "text": "Both sides, always. Spring into early summer, every year."
   },
   {
    "who": "dr",
    "text": "Have you ever had blockage on just one side that doesn’t clear, bleeding or blood-stained mucus from one side, or pain or numbness in your face?",
    "dom": "tasks",
    "why": "Screens sinonasal red flags"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "How is it affecting your sleep and your work?",
    "dom": "tasks",
    "why": "Assesses severity through impact"
   },
   {
    "who": "pt",
    "text": "I wake up blocked, so I sleep badly, and I’m foggy in lessons. Sneezing in front of thirty children isn’t great either."
   },
   {
    "who": "dr",
    "text": "Which tablet do you take, and how often?",
    "dom": "tasks",
    "why": "Establishes current treatment and adherence"
   },
   {
    "who": "pt",
    "text": "Whatever the pharmacy gives me — I’d have to check the box. Only when it’s bad, really."
   },
   {
    "who": "dr",
    "text": "And have you ever used a steroid nose spray every day through the season?",
    "dom": "tasks",
    "why": "Explores previous intranasal steroid use"
   },
   {
    "who": "pt",
    "text": "Not regularly, no. Just the tablets when it’s bad."
   },
   {
    "who": "dr",
    "text": "That’s really helpful. Do you have asthma or wheeze, especially in the pollen season?",
    "dom": "tasks",
    "why": "Asks about coexisting asthma"
   },
   {
    "who": "pt",
    "text": "Not that I know of."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You asked about steroids. What were you picturing?",
    "dom": "rto",
    "why": "Explores her idea behind the request"
   },
   {
    "who": "pt",
    "text": "I’ve heard there’s an injection that sorts you out for the whole summer. Or just a stronger tablet."
   },
   {
    "who": "dr",
    "text": "What worries you most about this season?",
    "dom": "rto",
    "why": "Elicits concern"
   },
   {
    "who": "pt",
    "text": "Being useless at work. I can’t take time off for hay fever, and I feel like I’m letting the kids down."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s my thinking. This is classic hay fever — both sides, every spring, itchy nose and eyes. That pattern is reassuring; it’s allergy, not something more serious. And I think the reason it’s “stopped working” is that a tablet now and then isn’t enough for symptoms this strong.",
    "dom": "tasks",
    "why": "Working diagnosis plus the under-treatment insight"
   },
   {
    "who": "pt",
    "text": "So a stronger tablet won’t help?"
   },
   {
    "who": "dr",
    "text": "Not much. The treatment that does the heavy lifting is a steroid nose spray used every day through the season — not just on bad days. It works in the lining of the nose, where the problem is — but only if it’s used properly, so let me show you how.",
    "dom": "tasks",
    "why": "Regular intranasal steroid as mainstay"
   },
   {
    "who": "pt",
    "text": "What’s the right way, then?"
   },
   {
    "who": "dr",
    "text": "Tip your head slightly forward, not back. Use your right hand for the left nostril and the other way round, and aim towards the outer side, away from the middle. Then a gentle sniff, not a big snort. Give it up to a couple of weeks to work fully.",
    "dom": "tasks",
    "why": "Teaches spray technique"
   },
   {
    "who": "pt",
    "text": "I’d never have guessed the direction mattered."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "So my suggestion: the steroid spray every day, a non-drowsy antihistamine tablet every day in the season, antihistamine eye drops, and a saline rinse if you like. On high-pollen days, windows shut, wraparound sunglasses, and a shower and change when you get in. How does that sound?",
    "dom": "rto",
    "why": "Shares the ladder and checks acceptability"
   },
   {
    "who": "pt",
    "text": "Doable. What about the injection I’d heard about?"
   },
   {
    "who": "dr",
    "text": "I understand why it’s appealing. The steroid injection affects the whole body for weeks, with risks such as thinning bones and raised sugar, and specialists don’t recommend it for hay fever. If a really bad spell ever coincides with something crucial, a short course of steroid tablets is safer. And if it’s still uncontrolled despite all this, there’s specialist allergy treatment called immunotherapy.",
    "dom": "tasks",
    "why": "Declines depot steroid with reasons and outlines next steps"
   },
   {
    "who": "pt",
    "text": "Fair enough. I’d rather do it properly."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "One thing for the future: hay fever affects both sides. If you ever get blockage on one side that won’t clear, one-sided bleeding or bloody mucus, or pain or numbness in your face, come back — that needs an ear, nose and throat check. That’s not what you have now.",
    "dom": "gs",
    "why": "Explicit red-flag safety-net"
   },
   {
    "who": "pt",
    "text": "Okay. Good to know."
   },
   {
    "who": "dr",
    "text": "Could you tell me back how you’ll use the spray, so I know I’ve explained it well?",
    "dom": "rto",
    "why": "Teach-back on technique"
   },
   {
    "who": "pt",
    "text": "Every day, head forward, opposite hand, aim to the outside, gentle sniff. Give it two weeks. Tablet every day, drops for my eyes."
   },
   {
    "who": "dr",
    "text": "Perfect. Let’s speak again in about four weeks to see how you’re sleeping and managing at work. If it’s still not controlled, we’ll step up. Anything else?",
    "dom": "gs",
    "why": "Defined review and step-up plan"
   },
   {
    "who": "pt",
    "text": "No, that’s great. Thank you."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Let her describe the symptoms and the impact before discussing treatment.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Teaching, sleep, concentration, pressure not to take time off, and feelings of letting the children down.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “only when it’s bad” and the injection she had heard about as cues, and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a stronger tablet or a steroid injection); concern (coping at work); expectation (something stronger today).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Clinical diagnosis from the history; no tests needed for classic seasonal disease; asked about asthma.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Allergic rhinitis vs non-allergic rhinitis, decongestant overuse, nasal polyps and one-sided pathology.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened one-sided blockage, bloody discharge, facial pain or numbness; knew NICE NG12 (updated April 2026) has no sinonasal criterion.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Seasonal allergic rhinitis under-treated by as-needed oral antihistamine alone.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Regular intranasal steroid with taught technique, daily non-sedating antihistamine, eye drops, saline, avoidance (BSACI 2017).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Asthma asked about; depot steroid declined with reasons; decongestant and montelukast cautions; immunotherapy route.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Explicit one-sided red flags; review in about four weeks; step-up plan; teach-back on technique.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Priya Soneji",
    "age": "34 years · female",
    "pmh": [
     "Seasonal hay fever"
    ],
    "meds": [
     "OTC oral antihistamine, as needed"
    ],
    "allergy": "Not recorded",
    "recent": "Teacher. Takes an OTC antihistamine when needed.",
    "reason": "\"Can I have something stronger?\""
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open & listen",
     "d": "Let her describe the season and the impact. Agree to understand before prescribing."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Bilateral and seasonal? Red flags. Impact on sleep and teaching. Which tablet, how often. Any regular nasal spray. Asthma."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "The steroid injection she has heard about; worry about coping at work."
    },
    {
     "t": "6–10",
     "h": "Explain & build the ladder",
     "d": "Under-treatment insight. Daily steroid spray with technique taught. Daily non-sedating antihistamine, eye drops, avoidance. Decline depot with reasons; rescue course and immunotherapy as later steps."
    },
    {
     "t": "10–12",
     "h": "Safety-net & close",
     "d": "One-sided red flags. Teach-back on technique. Review in about four weeks."
    }
   ],
   "wordPics": {
    "fail": "Switches to a different or stronger antihistamine and closes; or gives a steroid injection or long oral steroid course; never asks about nasal sprays, technique or one-sided symptoms.",
    "pass": "Confirms allergic rhinitis, recognises under-treatment, starts a regular intranasal steroid with technique advice and a daily antihistamine, and mentions when to come back.",
    "exc": "All of the above, plus: uncovers the as-needed pattern; teaches technique and checks it with teach-back; handles the injection request with reasons; voices the one-sided red flags explicitly; links the plan to her work and sleep."
   },
   "avoid": [
    {
     "dont": "\"I’ll give you a stronger antihistamine.\"",
     "instead": "\"A tablet now and then isn’t enough — the spray every day is what does the heavy lifting.\"",
     "why": "Escalating the tablet misses the under-treatment and the mainstay therapy."
    },
    {
     "dont": "\"Sure, I can give you the steroid injection.\"",
     "instead": "\"The injection affects your whole body for weeks, and specialists don’t recommend it for hay fever.\"",
     "why": "BSACI 2017 does not recommend depot steroid for rhinitis."
    },
    {
     "dont": "\"Use the spray when it’s bad.\"",
     "instead": "\"Use it every day through the season, even on good days.\"",
     "why": "As-needed intranasal steroid use is the commonest cause of apparent failure."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work impact",
     "t": "Poor sleep and daytime fog affect teaching. Hay fever can also affect people sitting exams; the same principles apply to the children she teaches."
    },
    {
     "h": "Cost and access",
     "t": "Many hay-fever products are available from community pharmacies; discuss prescription versus over-the-counter supply."
    }
   ],
   "legal": [
    {
     "h": "Driving and antihistamines",
     "t": "Sedating antihistamines impair driving; it is an offence to drive when impaired by drugs, including medicines (Road Traffic Act 1988). Prefer non-sedating options."
    }
   ],
   "professional": [
    {
     "h": "Over-the-counter prescribing",
     "t": "NHS England (2018) guidance advises that mild to moderate hay fever treatment should not routinely be prescribed in primary care; explain local policy transparently and where she can buy the recommended products."
    },
    {
     "h": "Declining a request",
     "t": "Declining a depot steroid injection is a shared decision: explain the risks and the better alternatives rather than just saying no (GMC decision making and consent, 2020)."
    }
   ],
   "community": [
    {
     "h": "Community pharmacy and resources",
     "t": "Community pharmacists can advise on sprays and technique; the Met Office pollen forecast helps plan avoidance; Allergy UK has patient information."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Persistent one-sided nasal blockage",
     "One-sided blood-stained or bloody discharge",
     "Facial pain, swelling or numbness; double vision or bulging eye",
     "Wheeze or breathlessness — coexisting asthma"
    ],
    "psychosocial": [
     "Impact on sleep, concentration and teaching",
     "Pressure not to take time off",
     "As-needed use of treatment; no regular nasal spray"
    ],
    "ice": [
     "Idea: “I need a stronger tablet or a steroid injection”",
     "Concern: being useless at work this season",
     "Expectation: something stronger today"
    ]
   },
   "diagnosis": "Seasonal allergic rhinitis with conjunctivitis, moderate to severe given the impact on sleep and work, under-treated with as-needed oral antihistamine alone. The bilateral, seasonal pattern and absence of one-sided features are reassuring.",
   "diagnosisLay": "“This is hay fever — your nose and eyes overreacting to pollen. Both sides, every spring: that’s reassuring. A tablet now and then damps down only part of it; the daily nose spray calms the inflammation where it starts.”",
   "management": {
    "reflectIce": "“You wanted something stronger because you can’t afford to be foggy in front of your class. I think we can get you there — just with a better-used treatment rather than a bigger one.”",
    "psychosocial": "Tie the plan to sleeping through the night and clear mornings at work; make the spray work first time by teaching technique.",
    "sharedPlan": [
     "Daily intranasal steroid through the season with technique taught (BSACI 2017)",
     "Daily non-sedating antihistamine, antihistamine eye drops, saline; pollen avoidance",
     "No depot steroid; short oral steroid rescue only for severe key times; immunotherapy referral if uncontrolled despite optimal treatment"
    ],
    "safetyNet": [
     "One-sided blockage, bloody discharge, facial pain or numbness, eye symptoms — return for ENT assessment",
     "Review in about four weeks; step up if still uncontrolled"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Allergic rhinitis",
    "s": "Case walkthrough · BSACI 2017",
    "href": "../cases/allergic-rhinitis.html"
   },
   {
    "ic": "💠",
    "t": "Allergic rhinitis protocol",
    "s": "Treatment ladder · spray technique",
    "href": "management/allergic-rhinitis.html"
   },
   {
    "ic": "🗺️",
    "t": "Nasal congestion pathway",
    "s": "Visual algorithm · one-sided red flags",
    "href": "algorithms/nasal-congestion.html"
   }
  ],
  "pitfalls": {
   "intro": "This looks like an easy station, which is why it is failed: candidates prescribe and close. The marks are in finding out why treatment failed, teaching the spray, and voicing what is not hay fever.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Swapping one antihistamine for another and ending the consultation.",
     "why": "“Management not in line with current UK best practice.” BSACI 2017 makes the intranasal steroid the treatment of choice for moderate to severe disease.",
     "fix": "“The spray, every day, is what does the heavy lifting.”"
    },
    {
     "dom": "tasks",
     "fail": "Prescribing a steroid spray without teaching technique.",
     "why": "Poor technique causes nosebleeds and apparent failure, and the spray is then abandoned.",
     "fix": "Teach the technique, then check it with teach-back."
    },
    {
     "dom": "tasks",
     "fail": "Agreeing to a depot steroid injection because she asks for it.",
     "why": "BSACI 2017 does not recommend depot steroid for rhinitis because of its adverse risk–benefit profile.",
     "fix": "Explain the whole-body effects and offer the better alternatives, including a short rescue course if ever needed."
    },
    {
     "dom": "tasks",
     "fail": "Never mentioning one-sided symptoms.",
     "why": "Red-flag safety-netting is a marked item even when the diagnosis is benign.",
     "fix": "“If it’s ever just one side, or there’s bleeding or facial numbness, come back.”"
    },
    {
     "dom": "rto",
     "fail": "Treating the request for “something stronger” as the agenda and never asking what she pictured.",
     "why": "“Did not explore the patient’s ideas.” The injection she has heard about is the key to shared decision-making here.",
     "fix": "“What were you picturing?” Then respond to it directly."
    },
    {
     "dom": "gs",
     "fail": "No review plan, so she stops the spray again after a week.",
     "why": "Follow-up that sets expectations is part of safe management.",
     "fix": "Explain it takes up to two weeks, and book a review in about four weeks."
    }
   ]
  }
 },
 "weight-loss-normal-tests": {
  "stem": {
   "name": "Eleanor Pryce",
   "age": "68-year-old woman",
   "pmh": [
    "Nil relevant recorded",
    "Retired teacher"
   ],
   "meds": [
    "None recorded"
   ],
   "allergy": "None recorded",
   "recent": "Seen a few weeks ago with about 7 kg unintentional weight loss over 3 months, reduced appetite and fatigue, no localising symptoms. FBC, U&E, LFTs, bone profile, glucose and HbA1c, TFTs, CRP, coeliac serology and chest X-ray all normal or non-contributory.",
   "reason": "Video review of first-line results for unintentional weight loss."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) · NICE HTG690 (2023, formerly DG56) · NHS England Faster Diagnosis Standard (October 2023)",
   "summary": "Unexplained weight loss of more than 5% in 6 months at 60 or over is a cancer red flag in its own right. Normal first-line tests do not close the case — assess again and arrange urgent investigation or a suspected cancer or non-specific symptoms pathway referral.",
   "points": [
    {
     "h": "The April 2026 weight-loss recommendation",
     "t": "NICE NG12 (updated April 2026), recommendation 1.13.2: aged 60 and over with unexplained weight loss (more than 5% within 6 months), assess for other symptoms, signs or findings that point to a likely cancer, and offer urgent investigation, a suspected cancer pathway referral, or a non-specific symptoms pathway referral. About 7 kg in 3 months meets this for almost any adult."
    },
    {
     "h": "Why normal tests don’t reassure",
     "t": "Weight loss is a feature of colorectal, gastro-oesophageal, lung, prostate, pancreatic and urological cancers. Pancreatic, ovarian, renal and early GI cancers can present with normal first-line bloods and a clear chest X-ray."
    },
    {
     "h": "Targeted next tests",
     "t": "FIT (NICE HTG690: aged 50 and over with unexplained weight loss). CA125 — NICE NG12 (updated April 2026) lists unexplained weight loss among ovarian symptoms; at 60–69 a CA125 of 24 IU/mL or more → urgent pelvic and abdominal ultrasound. Urinalysis for blood, ferritin, and a measured weight."
    },
    {
     "h": "Site-specific criteria to recheck",
     "t": "Aged 55 and over with weight loss and upper abdominal pain, reflux or dyspepsia → suspected cancer pathway for oesophageal or stomach cancer. Aged 60 and over with weight loss plus diarrhoea, back pain, abdominal pain, nausea, vomiting, constipation or new-onset diabetes → consider urgent direct-access CT for pancreatic cancer (NICE NG12 (updated April 2026))."
    },
    {
     "h": "Imaging or pathway",
     "t": "Where no site fits, the non-specific symptoms (rapid diagnostic) pathway or urgent CT chest, abdomen and pelvis per local arrangements. The Faster Diagnosis Standard aims to confirm or rule out cancer within 28 days of referral."
    },
    {
     "h": "Other causes still count",
     "t": "Low mood, isolation, poor intake, medicines, malabsorption and chronic disease can all cause weight loss. Screen for them, but don’t let them explain away a red flag before it is investigated."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Pryce, I’m Dr Lee. Thanks for joining. I can hear the relief in your voice — before I go through the results, can you tell me how you’ve been since we last spoke?",
    "dom": "rto",
    "why": "Acknowledges her emotion and opens with her story, not the results"
   },
   {
    "who": "pt",
    "text": "Much the same, really. Tired. Not hungry. But the receptionist said the tests were normal, so I thought that was that. It’s probably stress, or my age."
   },
   {
    "who": "dr",
    "text": "I’d like to go through exactly what the tests showed, what they can and can’t tell us, and then agree what happens next together. Is that okay?",
    "dom": "gs",
    "why": "Sets an agenda that signals the conversation is not over"
   },
   {
    "who": "pt",
    "text": "Yes, alright. As long as it’s not more prodding."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Has your weight carried on falling since we last met? Do you have a set of scales at home?",
    "dom": "tasks",
    "why": "Checks the trajectory of the red flag"
   },
   {
    "who": "pt",
    "text": "I haven’t weighed myself. My clothes are still loose, though."
   },
   {
    "who": "dr",
    "text": "Has anything new come up — any pain in your tummy or back, change in your bowels, bleeding from anywhere, a cough, bloating, needing the toilet more, or any lumps you’ve noticed?",
    "dom": "tasks",
    "why": "Re-screens for new localising features across likely cancer sites"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. Just the tiredness and not wanting to eat."
   },
   {
    "who": "dr",
    "text": "Any night sweats, fevers, or feeling full very quickly after a small amount?",
    "dom": "tasks",
    "why": "Screens for B symptoms and early satiety"
   },
   {
    "who": "pt",
    "text": "No. I just don’t fancy food."
   },
   {
    "who": "dr",
    "text": "How has your mood been through all this? And how are things at home with meals and day to day?",
    "dom": "tasks",
    "why": "Screens mood and social contributors without using them to explain it away"
   },
   {
    "who": "pt",
    "text": "I’ve been a bit worried, that’s all. I manage."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said you didn’t want any more prodding. Can I ask what’s behind that?",
    "dom": "rto",
    "why": "Explores the reluctance rather than overriding it"
   },
   {
    "who": "pt",
    "text": "(Pause.) I suppose… if they keep looking, they might find something. And then it’s real. The blood tests being fine meant I could stop thinking about it."
   },
   {
    "who": "dr",
    "text": "Thank you for being so honest. That’s a very human reaction — hoping a normal result means you can put it down. It makes complete sense.",
    "dom": "rto",
    "why": "Names and validates the fear behind the avoidance"
   },
   {
    "who": "pt",
    "text": "So you think it’s something bad."
   },
   {
    "who": "dr",
    "text": "I don’t know yet, and I don’t want to guess either way. What I do know is that we haven’t found the reason for the weight loss, and that’s what I want to find.",
    "dom": "rto",
    "why": "Honest about uncertainty, neither false reassurance nor alarm"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "The tests we did are genuinely reassuring in part: your blood count, liver, kidneys, thyroid, sugar and chest X-ray are fine. But losing over a stone in three months without trying is something we take seriously at 68, and some causes don’t show on those first tests.",
    "dom": "tasks",
    "why": "Explains why normal first-line tests don’t exclude cancer"
   },
   {
    "who": "pt",
    "text": "Like what?"
   },
   {
    "who": "dr",
    "text": "Some problems in the tummy, the pancreas, the ovaries or the kidneys can be hidden early on. Most weight loss turns out not to be cancer — but the national cancer guidance, NICE NG12 (updated April 2026), asks us to look further in exactly your situation.",
    "dom": "tasks",
    "why": "Applies NICE NG12 (updated April 2026) weight-loss recommendation in plain words"
   },
   {
    "who": "pt",
    "text": "I see. I thought normal meant normal."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s what I suggest. I’d like to see you in person this week to weigh you and examine you properly — tummy, glands, breasts, and an internal check if you’re happy. I’ll add a stool test, a blood test for the ovaries called CA125, and a urine test.",
    "dom": "tasks",
    "why": "Re-examination and targeted tests: FIT, CA125, urinalysis"
   },
   {
    "who": "pt",
    "text": "That’s not too bad."
   },
   {
    "who": "dr",
    "text": "And I’d like to refer you to the fast-track service for unexplained symptoms, which usually includes a scan of your chest, tummy and pelvis. The aim is to have an answer within about four weeks. Does that feel manageable?",
    "dom": "tasks",
    "why": "Non-specific symptoms pathway or urgent CT, with the 28-day aim"
   },
   {
    "who": "pt",
    "text": "I’d rather know properly than keep wondering, I suppose. If you’re with me on it."
   },
   {
    "who": "dr",
    "text": "I am. I’ll track the results myself, and we’ll go through each one together. Would it help to have someone with you for the scan or the results?",
    "dom": "rto",
    "why": "Offers continuity and support for the fear"
   },
   {
    "who": "pt",
    "text": "I’ll think about it. Thank you."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you notice anything new before then — pain, a lump, bleeding, vomiting, yellow skin, or the weight dropping faster — please contact us sooner rather than waiting. If you haven’t heard about the scan within a week, ring me.",
    "dom": "gs",
    "why": "Specific safety-net and a date to chase"
   },
   {
    "who": "pt",
    "text": "I will."
   },
   {
    "who": "dr",
    "text": "Can you tell me in your own words what we’ve agreed, so I know I’ve explained it well?",
    "dom": "rto",
    "why": "Teach-back to check understanding"
   },
   {
    "who": "pt",
    "text": "Normal so far isn’t the whole answer. Examination this week, a few more tests, and the scan. And ring if anything changes."
   },
   {
    "who": "dr",
    "text": "That’s exactly it. You did the right thing coming back today.",
    "dom": "gs",
    "why": "Closes with affirmation and a clear plan"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Opened with how she has been before results; acknowledged her relief; let her voice ‘stress or age’ as her explanation.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored appetite, mood, meals and managing at home, and the emotional cost of further tests.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up ‘as long as it’s not more prodding’ and explored the fear behind it.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: normal bloods mean she is fine. Concern: what further tests might find. Expectation: to stop investigating.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Face-to-face weight and examination (abdomen, nodes, breasts, pelvic with consent); FIT, CA125, urinalysis, ferritin; urgent CT or non-specific symptoms pathway.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Occult GI, pancreatic, ovarian, renal and lung cancer, and non-malignant causes: depression, poor intake, malabsorption, endocrine.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Re-screened for localising and B symptoms; checked site-specific NICE NG12 (updated April 2026) criteria (upper GI, pancreatic, ovarian).",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated clearly: unexplained weight loss not excluded by normal first-line tests — ‘normal so far is not the whole answer’.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "NICE NG12 (updated April 2026) 1.13.2: urgent investigation or non-specific symptoms pathway, agreed with her, with honest uncertainty.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Screened mood and social contributors without using them to dismiss the red flag; offered support at scan and results.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "New symptoms to report named; date to chase the scan; GP tracking results; review booked to go through them together.",
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
    "name": "Eleanor Pryce",
    "age": "68 years · female",
    "pmh": [
     "Nil relevant recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "None recorded",
    "recent": "⚠ ~7 kg unintentional weight loss over 3 months, reduced appetite, fatigue. First-line bloods, coeliac serology and CXR normal. No FIT, CA125, urinalysis or imaging on file.",
    "reason": "Results review. “The receptionist said they were normal — so I’m fine?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open with her",
     "d": "Ask how she has been before giving results. She will offer ‘stress or my age’ — note it and don’t argue yet."
    },
    {
     "t": "1–4",
     "h": "Re-screen",
     "d": "Weight trend, new localising symptoms (GI, urinary, gynae, respiratory), B symptoms, mood and eating."
    },
    {
     "t": "4–6",
     "h": "The fear",
     "d": "Explore ‘no more prodding’. The hidden agenda is fear of what further tests might find."
    },
    {
     "t": "6–8",
     "h": "Explain honestly",
     "d": "Reassuring in part, but weight loss is still unexplained. NICE NG12 (updated April 2026) asks for further investigation at 60 and over."
    },
    {
     "t": "8–12",
     "h": "Plan and safety-net",
     "d": "Face-to-face exam this week; FIT, CA125, urinalysis; non-specific symptoms pathway or urgent CT. New symptoms → sooner; chase date; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Confirms ‘all normal, you’re fine’ and discharges; or orders a scan without exploring why she wants to stop; no re-examination; no safety-net.",
    "pass": "Explains that normal first-line tests don’t exclude cancer; re-screens symptoms; arranges examination, further tests and imaging or pathway referral; basic safety-net.",
    "exc": "All of the above, plus: draws out the fear behind ‘no more prodding’ and validates it; states the uncertainty honestly without alarm; applies the NICE NG12 (updated April 2026) weight-loss recommendation in plain words; screens mood and intake without using them to dismiss; owns tracking; teach-back confirms she understands."
   },
   "avoid": [
    {
     "dont": "“Good news — everything’s normal, so nothing to worry about.”",
     "instead": "“The tests so far are reassuring in part, but we haven’t explained the weight loss, so I’d like to look further.”",
     "why": "False reassurance on normal first-line tests is the classic dangerous error in this station."
    },
    {
     "dont": "“You need a CT scan to rule out cancer.”",
     "instead": "“I’d like a scan to find the cause. Most weight loss isn’t cancer, but I don’t want to guess.”",
     "why": "Blunt alarm without exploring her fear loses her engagement and Relating marks."
    },
    {
     "dont": "“It’s probably your mood — let’s try an antidepressant.”",
     "instead": "“Mood can play a part, and I want to help with that too — alongside, not instead of, the tests.”",
     "why": "A plausible benign explanation must not close an unexplained red flag."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Avoidance and fear",
     "t": "Relief at normal results can be a way of escaping fear. Name it gently; people are more likely to attend tests when the fear has been heard."
    },
    {
     "h": "Intake and isolation",
     "t": "Ask about meals, shopping, cooking and company. Poor intake and low mood can contribute to weight loss and can be helped, but they are not a diagnosis of exclusion."
    }
   ],
   "legal": [
    {
     "h": "Informed decisions",
     "t": "Montgomery v Lanarkshire (2015) and GMC decision-making and consent guidance (2020): she may decline further tests, but only after the material risks of not investigating are explained. Record the discussion."
    }
   ],
   "professional": [
    {
     "h": "Results communication",
     "t": "A ‘normal’ message from reception can mislead. Results for red-flag symptoms need clinician interpretation; consider how results are relayed in the practice as a learning point."
    },
    {
     "h": "Tracking and safety-netting",
     "t": "GMC Good Medical Practice (2024): follow up tests and referrals you order. Name who tracks the pathway referral and when she should chase."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Macmillan Cancer Support information on tests and waiting; Age UK and social prescribing for isolation or practical help with food."
    },
    {
     "h": "Rapid diagnosis",
     "t": "Local non-specific symptoms or rapid diagnostic centre pathway for unexplained weight loss where no single site fits."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Aged 60 and over with unexplained weight loss of more than 5% in 6 months → assessment and urgent investigation or pathway referral (NICE NG12 (updated April 2026))",
     "New localising features: dysphagia, dyspepsia, abdominal or back pain, bowel change, bleeding, haematuria, bloating, cough, lumps",
     "Jaundice, vomiting, rapid ongoing weight loss → same-week or same-day assessment"
    ],
    "psychosocial": [
     "Relief-driven avoidance: fear of what more tests might find",
     "Mood, appetite, eating alone, shopping and cooking",
     "Who could support her at scans and results"
    ],
    "ice": [
     "Idea: normal first-line tests mean she is fine; ‘stress or my age’",
     "Concern: further tests will find something and make it real",
     "Expectation: to draw a line under it and avoid more prodding"
    ]
   },
   "diagnosis": "Be honest: “The first tests are reassuring in part, but we still haven’t explained why you’ve lost over a stone. At your age that needs looking into further, and some causes don’t show on the first tests.”",
   "diagnosisLay": "“The first tests are like checking the main rooms of a house and finding them tidy. The reason for the weight loss may be in a room we haven’t opened yet — the scan lets us look in the rest.”",
   "management": {
    "reflectIce": "“You told me the normal bloods let you stop thinking about it. I understand that. I’d rather find the real answer with you than leave you wondering.”",
    "psychosocial": "Acknowledge the fear, offer a companion for the scan and results, and screen mood and intake without letting them close the case.",
    "sharedPlan": [
     "Face-to-face weight and examination this week: abdomen, nodes, breasts, pelvic and rectal with consent",
     "FIT, CA125 (≥24 IU/mL at 60–69 → urgent ultrasound), urinalysis, ferritin",
     "Non-specific symptoms pathway or urgent CT chest, abdomen and pelvis under NICE NG12 (updated April 2026) 1.13.2"
    ],
    "safetyNet": [
     "New pain, lump, bleeding, vomiting, jaundice or faster weight loss → contact sooner",
     "Chase if no scan date within a week; GP tracks results; review to discuss them together"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Weight loss pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026)",
    "href": "algorithms/weight-loss.html"
   },
   {
    "ic": "🗺️",
    "t": "Abnormal cancer markers",
    "s": "Visual algorithm · CA125",
    "href": "algorithms/abnormal-cancer-markers.html"
   },
   {
    "ic": "💠",
    "t": "Malnutrition",
    "s": "Protocol · screening and support",
    "href": "management/malnutrition.html"
   },
   {
    "ic": "📋",
    "t": "Depression",
    "s": "Case walkthrough · mood screen",
    "href": "../cases/depression.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by kindness in the wrong place: agreeing with a relieved patient that normal tests mean she is fine. The patterns below are the common ways candidates lose it.",
   "items": [
    {
     "dom": "tasks",
     "fail": "“Everything’s come back normal — nothing to worry about.”",
     "why": "Normal first-line tests do not exclude cancer. NICE NG12 (updated April 2026) recommends further assessment and urgent investigation or referral for unexplained weight loss at 60 and over.",
     "fix": "“Reassuring so far, but not the whole answer. We still need to find the reason for the weight loss.”"
    },
    {
     "dom": "rto",
     "fail": "Overriding ‘no more prodding’ with a list of tests.",
     "why": "The hidden agenda is fear. Ignoring it risks her not attending, and loses Relating marks.",
     "fix": "Ask what is behind it, validate the fear, then plan together."
    },
    {
     "dom": "tasks",
     "fail": "No re-examination: relying on the earlier normal work-up.",
     "why": "New findings (nodes, masses, pelvic or rectal signs) change the pathway. A video consultation cannot replace examination here.",
     "fix": "Book a face-to-face weight and examination this week."
    },
    {
     "dom": "tasks",
     "fail": "Attributing the weight loss to mood or age.",
     "why": "A plausible benign cause used to close the case is premature closure.",
     "fix": "Screen mood and intake alongside, not instead of, investigation."
    },
    {
     "dom": "gs",
     "fail": "Vague plan: “We’ll do some more tests and see.”",
     "why": "No timeframe, no named pathway, no owner — the referral can slip.",
     "fix": "Name FIT, CA125, urinalysis and the pathway or CT; give the four-week aim and a date to chase."
    },
    {
     "dom": "gs",
     "fail": "No teach-back and no safety-net.",
     "why": "“Does not check understanding” and non-specific safety-netting are standard failing feedback.",
     "fix": "Ask her to say the plan back; name the new symptoms that mean contacting you sooner."
    }
   ]
  }
 },
 "weight-management-2026": {
  "stem": {
   "name": "Deborah Achebe",
   "age": "44-year-old woman",
   "pmh": [
    "Obesity — BMI 36",
    "Non-diabetic hyperglycaemia (prediabetes)",
    "Hypertension"
   ],
   "meds": [
    "Antihypertensive treatment as per repeat list"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "Several previous attempts at weight loss with regain. Last BMI 36. Previous consultations about weight noted briefly in the record.",
   "reason": "Booked to ask for help with her weight — has read about “the weight-loss jab”."
  },
  "knowledge": {
   "guideline": "NICE NG246 (2025) · NICE TA875 (semaglutide) · NICE TA1026 (tirzepatide) · NICE TA664 (liraglutide) · NHS England interim commissioning guidance for TA1026 · MHRA Drug Safety Update June 2025 (GLP-1 medicines, pregnancy and contraception)",
   "summary": "Obesity is a chronic, relapsing condition. Treat it with respect, assess the whole person, build a behavioural foundation, and be honest about who can get weight-loss medicines on the NHS in 2026 — and by which route.",
   "points": [
    {
     "h": "Language first",
     "t": "Ask permission to talk about weight, use person-first language, and acknowledge previous unhelpful experiences. Stigma makes people avoid care; the tone decides whether she comes back."
    },
    {
     "h": "Assess the whole picture",
     "t": "Weight history, eating pattern (including emotional or binge eating), activity, sleep, mood, medicines that cause weight gain, social circumstances and readiness. Consider hypothyroidism or other causes where the history suggests them. Check BP, HbA1c, lipids and waist."
    },
    {
     "h": "Specialist route for GLP-1 medicines",
     "t": "NICE TA875 (semaglutide): BMI ≥35 with at least one weight-related comorbidity, within a specialist weight-management service, for a maximum of 2 years. NICE TA664 (liraglutide): BMI ≥35 with non-diabetic hyperglycaemia and high cardiovascular risk, prescribed in a specialist tier 3 service. BMI thresholds are usually 2.5 lower for people of South Asian, Chinese, other Asian, Middle Eastern, Black African or African-Caribbean background."
    },
    {
     "h": "Tirzepatide in primary care — phased",
     "t": "NICE TA1026: BMI ≥35 with at least one weight-related comorbidity, but with a funding variation phasing NHS access over up to 12 years. NHS England cohorts: from June 2025, BMI ≥40 with at least 4 of 5 qualifying conditions (type 2 diabetes, hypertension, dyslipidaemia, established cardiovascular disease, obstructive sleep apnoea); from June 2026, BMI 35–39.9 with at least 4. With hypertension alone of the five, she does not yet meet a primary-care cohort."
    },
    {
     "h": "Honest counselling",
     "t": "These medicines work alongside diet and activity; GI side effects are common; pancreatitis and gallbladder disease are recognised risks; weight tends to return after stopping. MHRA (June 2025): not in pregnancy, when trying to conceive or while breastfeeding — use effective contraception; with tirzepatide, oral contraception may be less reliable, so a non-oral method or added barrier method is advised. Doses per BNF."
    },
    {
     "h": "Other options",
     "t": "NICE NG246: orlistat for BMI ≥30, or ≥28 with significant comorbidity. Bariatric surgery assessment for BMI ≥40, or 35–39.9 with a significant condition that weight loss could improve. For her prediabetes, the NHS Diabetes Prevention Programme; for BMI ≥30 with hypertension, the NHS Digital Weight Management Programme."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Deborah, I’m Dr Lee. What would you like to talk about today?",
    "dom": "rto",
    "why": "Open start; lets her raise weight on her own terms"
   },
   {
    "who": "pt",
    "text": "I’ve psyched myself up to come about my weight. I find these conversations humiliating. Every doctor says eat less, move more, like I haven’t tried. I’ve read about the jab — can I just have that? It feels like my last hope."
   },
   {
    "who": "dr",
    "text": "Thank you for coming — I can hear how hard that was. I’m sorry past conversations have felt like blame. Weight is genuinely complicated: biology, hormones, sleep, stress and life all play a part. It isn’t a willpower problem. Would it be alright if we looked at the whole picture together, and I’ll be completely honest with you about the jab?",
    "dom": "rto",
    "why": "Acknowledges shame, reframes obesity, asks permission"
   },
   {
    "who": "pt",
    "text": "Okay. That’s already different."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Tell me about the times you’ve lost weight before — what worked, and what happened afterwards?",
    "dom": "rto",
    "why": "Open question about her own experience"
   },
   {
    "who": "pt",
    "text": "I’ve done all the diets. I lose weight, then it creeps back on, and I feel like a failure every time."
   },
   {
    "who": "dr",
    "text": "Regain after dieting is what the body does — it fights to get back to where it was. That’s biology, not failure. How are your eating patterns day to day — any times you eat when you’re stressed or low, or feel out of control with food?",
    "dom": "tasks",
    "why": "Normalises regain; screens emotional and binge eating"
   },
   {
    "who": "pt",
    "text": "Nothing I’d call out of control. I just always end up back where I started."
   },
   {
    "who": "dr",
    "text": "And how are your sleep and mood? Are you on any medicines apart from your blood pressure ones — some can add weight?",
    "dom": "tasks",
    "why": "Sleep, mood and drug causes of weight gain"
   },
   {
    "who": "pt",
    "text": "No other medicines. I’m just fed up with it all, to be honest."
   },
   {
    "who": "dr",
    "text": "Fed up is completely understandable — I’ll check in on how you’re feeling as we go. I can see from your record you have prediabetes and high blood pressure. Those matter here, because even modest weight loss can improve both.",
    "dom": "tasks",
    "why": "Links comorbidities to the plan"
   },
   {
    "who": "dr",
    "text": "What would success look like for you — not a number on the scales, but in your life?",
    "dom": "rto",
    "why": "Elicits her goals and values"
   },
   {
    "who": "pt",
    "text": "Not dreading these appointments. Feeling well. Not ending up with diabetes."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You called the jab your last hope. What have you heard about it?",
    "dom": "rto",
    "why": "Explores her ideas about the medicine before explaining"
   },
   {
    "who": "pt",
    "text": "That people lose loads of weight and it just works. I’m scared you’ll say no and I’m back to square one."
   },
   {
    "phase": "Explanation",
    "clock": "6–9 min",
    "who": "dr",
    "text": "I’ll be straight, because you deserve that. These medicines are a real advance — they reduce appetite and help many people lose a meaningful amount. But they work alongside changes to eating and activity, not instead of them, and the weight usually comes back if they’re stopped.",
    "dom": "tasks",
    "why": "Honest account of benefit and regain on stopping"
   },
   {
    "who": "pt",
    "text": "So can I have it or not?"
   },
   {
    "who": "dr",
    "text": "On the NHS there are two routes. Tirzepatide from the GP is being rolled out in stages, and at the moment it’s for people with several specific conditions — with your blood pressure but not the others on that list, you don’t qualify yet. The other route is a specialist weight-management service. With your BMI, prediabetes and blood pressure, you meet the national criteria to be considered there for a GLP-1 medicine alongside proper support.",
    "dom": "tasks",
    "why": "Accurate 2026 access: TA1026 phased cohorts vs specialist TA875/TA664"
   },
   {
    "who": "pt",
    "text": "So it’s not a no?"
   },
   {
    "who": "dr",
    "text": "It’s not a no. It’s a “let’s get you to the right place”. It’s also only fair to mention side effects — sickness and tummy upset are common, and rarely it can affect the pancreas or gallbladder. And you mustn’t get pregnant on it, so we’d need to be sure your contraception is reliable. Is that something to think about for you?",
    "dom": "tasks",
    "why": "Side effects and MHRA 2025 contraception advice, asked neutrally"
   },
   {
    "who": "pt",
    "text": "I’d have to check what I’m using. I’ll think about it."
   },
   {
    "who": "dr",
    "text": "That’s fine — we’ll go through it before anything starts. Some people also buy these privately. If you ever did, please only use a registered pharmacy with a proper consultation, and tell me, because it affects your blood pressure and sugar care.",
    "dom": "gs",
    "why": "Harm reduction if she self-funds"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "So here’s a menu, and you choose. One: a referral to the specialist weight service, which can consider the medicine. Two: while you wait, the NHS diabetes prevention programme for your prediabetes, or the digital weight-management programme — both are free. Three: we check your bloods and blood pressure. There’s also a tablet called orlistat, and for some people surgery, which the specialist team can discuss. What feels right?",
    "dom": "rto",
    "why": "Shared decision with a full, honest range of options"
   },
   {
    "who": "pt",
    "text": "The referral, definitely. And I’ll do the diabetes one while I wait."
   },
   {
    "who": "dr",
    "text": "Good plan. And a first goal that isn’t about the scales — something small you’d actually enjoy sticking to. You pick it.",
    "dom": "rto",
    "why": "Negotiates one realistic behavioural goal"
   },
   {
    "who": "pt",
    "text": "Let me think about which one — something small with food I can keep going."
   },
   {
    "who": "dr",
    "text": "Let’s agree it together before the review, so it’s yours. I’d also like to ask about mood and sleep next time, because they matter for all of this.",
    "dom": "tasks",
    "why": "Follows up the mood and sleep cue"
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Just so I know I’ve explained it well — what will you tell someone at home about today?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "That I’m being referred to a specialist who can look at the jab, I’m doing the diabetes programme, and it’s not my fault."
   },
   {
    "who": "dr",
    "text": "Exactly that. I’ll send the referral and the programme links today, and book bloods and a blood-pressure check. Let’s review in about four weeks. If your mood drops or you feel you can’t cope in the meantime, please contact us sooner.",
    "dom": "gs",
    "why": "Concrete actions, follow-up and a mood safety-net"
   },
   {
    "who": "pt",
    "text": "Thank you. That’s the first time I’ve left one of these feeling hopeful."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her raise weight herself; asked permission before discussing it.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Previous attempts, eating pattern, sleep, mood, home and work pressures, and what success means to her.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “humiliating”, “last hope” and “fed up”, and responded to each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (the jab just works), concern (being judged and refused), expectation (a prescription today).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "BP, HbA1c, lipids, weight and waist; thyroid only if the history suggests it.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Screens drug causes, binge eating, mood disorder, sleep problems and endocrine causes.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Addresses progression to type 2 diabetes and cardiovascular risk; checks mood safely.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Obesity (BMI 36) with non-diabetic hyperglycaemia and hypertension — a chronic condition, stated without blame.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Correct 2026 access routes (specialist TA875/TA664 vs phased TA1026 cohorts), side effects, regain, contraception, and alternatives including orlistat, programmes and surgery.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Prediabetes (Diabetes Prevention Programme), hypertension review, sleep and mood follow-up.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Referral sent, bloods booked, review in about four weeks, advice on unregulated private supply, mood safety-net.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Deborah Achebe",
    "age": "44 years · female",
    "pmh": [
     "Obesity (BMI 36)",
     "Non-diabetic hyperglycaemia",
     "Hypertension"
    ],
    "meds": [
     "Antihypertensive (see repeat list)"
    ],
    "allergy": "NKDA",
    "recent": "Repeated weight loss and regain. BMI 36 at last check. No specialist weight-management referral on file.",
    "reason": "“I’d like to ask about the weight-loss jab.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open & listen",
     "d": "She will tell you she feels humiliated. Acknowledge it before anything else and ask permission."
    },
    {
     "t": "1–5",
     "h": "Whole-person history",
     "d": "Previous attempts, eating pattern, sleep, mood, medicines, comorbidities, what success means to her."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "What she has heard about the jab; the fear of being refused again."
    },
    {
     "t": "6–10",
     "h": "Honest options",
     "d": "How the medicines work, regain on stopping, side effects, contraception, and the two NHS routes in 2026. Then the full menu."
    },
    {
     "t": "10–12",
     "h": "Plan & close",
     "d": "Specialist referral, prevention programme, one goal she chooses, bloods, teach-back and review."
    }
   ],
   "wordPics": {
    "fail": "Opens with “you need to lose weight”; lectures on diet; either prescribes on request or refuses flatly; gets eligibility wrong; no mention of regain, side effects or contraception; no follow-up.",
    "pass": "Respectful language; takes a reasonable history; explains the medicines as an adjunct; gives broadly correct access routes; offers lifestyle support and a referral; addresses the comorbidities and arranges review.",
    "exc": "All of the above, plus: asks permission and repairs past stigma; explores mood and eating patterns; explains 2026 access accurately and kindly (why primary-care tirzepatide isn’t yet open to her, and why the specialist route is); covers regain, pancreatitis, contraception and private-supply safety; offers the full menu; she chooses one goal; teach-back; she leaves hopeful."
   },
   "avoid": [
    {
     "dont": "\"Have you tried just cutting down on portions and walking more?\"",
     "instead": "\"Tell me what you’ve tried before, and what happened afterwards.\"",
     "why": "She named this exact phrase as humiliating; repeating it loses Relating marks at once."
    },
    {
     "dont": "\"Sorry, you don’t meet the criteria for the jab.\"",
     "instead": "\"You don’t qualify for the GP route yet, but you do meet the criteria for the specialist route — let’s get you there.\"",
     "why": "A flat refusal is inaccurate for her and ends the relationship; the honest answer is a route, not a no."
    },
    {
     "dont": "\"This will sort your weight out for good.\"",
     "instead": "\"It’s a powerful tool alongside other changes, and weight usually returns if it’s stopped.\"",
     "why": "Over-promising sets up another cycle of regain and self-blame."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Stigma and access",
     "t": "Weight stigma in healthcare leads people to avoid appointments. Person-first language, permission and a non-judgemental tone are part of the treatment."
    },
    {
     "h": "Cost and inequity",
     "t": "Private GLP-1 prescriptions are expensive, so access depends on income. NHS routes are phased and prioritised by clinical need; explain them clearly so she is not pushed towards unregulated sellers."
    }
   ],
   "legal": [
    {
     "h": "Medicines safety",
     "t": "MHRA (June 2025): GLP-1 medicines should not be used in pregnancy, when trying to conceive or while breastfeeding; use effective contraception. Report suspected adverse reactions or counterfeit products via the Yellow Card scheme."
    }
   ],
   "professional": [
    {
     "h": "Honesty about eligibility",
     "t": "GMC Good medical practice: give honest information about options, including when a treatment isn’t available to the patient yet, and why."
    },
    {
     "h": "Shared decisions",
     "t": "Present all options — behavioural support, programmes, medicines, surgery — and record what she chose and why."
    }
   ],
   "community": [
    {
     "h": "NHS programmes",
     "t": "NHS Diabetes Prevention Programme for non-diabetic hyperglycaemia; NHS Digital Weight Management Programme for adults with obesity and hypertension or diabetes; local specialist (tier 3) weight-management service."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Low mood, hopelessness or disordered eating behind weight concerns — ask",
     "Symptoms suggesting a secondary cause (e.g. hypothyroidism) — test only if the history suggests it",
     "Pregnancy risk if a GLP-1 medicine is considered — check contraception"
    ],
    "psychosocial": [
     "Previous attempts, regain and self-blame",
     "Eating pattern, sleep and mood — asked, not assumed",
     "What success means to her — health, not a target weight"
    ],
    "ice": [
     "Idea: “The jab just works.”",
     "Concern: being judged and refused again — “my last hope”",
     "Expectation: a prescription for the jab today"
    ]
   },
   "diagnosis": "Obesity (BMI 36) with non-diabetic hyperglycaemia and hypertension — a chronic, relapsing condition with biological drivers, not a failure of willpower.",
   "diagnosisLay": "“Your body has a set point it defends — when you diet, hunger goes up and it pulls the weight back. That’s why diets alone keep failing, and why treatment now looks at the biology too.”",
   "management": {
    "reflectIce": "“You said this felt like your last hope — it isn’t. There is a real route to the medicine for you, and support in the meantime.”",
    "psychosocial": "Repair past stigma, let her choose one small goal, and follow up mood and sleep rather than lecturing on diet.",
    "sharedPlan": [
     "Referral to the specialist weight-management service (GLP-1 medicine under NICE TA875 or TA664 there)",
     "NHS Diabetes Prevention Programme or Digital Weight Management Programme while waiting",
     "BP, HbA1c and lipids; contraception review before any GLP-1 medicine"
    ],
    "safetyNet": [
     "Worsening mood or feeling unable to cope — contact the practice sooner",
     "If buying privately: registered pharmacy only, and tell the practice"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Obesity",
    "s": "Case walkthrough · NICE NG246 · TA875 · TA1026",
    "href": "../cases/obesity.html"
   },
   {
    "ic": "💠",
    "t": "Obesity protocol",
    "s": "Medicines, eligibility and surgery criteria",
    "href": "management/obesity.html"
   },
   {
    "ic": "🗺️",
    "t": "Weight gain pathway",
    "s": "Visual algorithm · secondary causes",
    "href": "algorithms/weight-gain.html"
   },
   {
    "ic": "🧮",
    "t": "BMI and QRISK3",
    "s": "Medical Calculators",
    "href": "calculators.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is about tone as much as knowledge. Candidates fail by sounding like every doctor she has already seen, or by getting 2026 eligibility wrong in either direction. Each pattern below is fixable.",
   "items": [
    {
     "dom": "rto",
     "fail": "Launching into diet and exercise advice in the first two minutes.",
     "why": "She said this is exactly what makes her feel humiliated. “Does not respond to the patient’s cues.”",
     "fix": "Acknowledge the courage it took, apologise for past experiences, and ask permission before discussing weight."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing tirzepatide today, or saying “you just need a BMI over 35”.",
     "why": "NICE TA1026 access in primary care is phased; NHS England cohorts in 2026 need at least 4 of 5 qualifying conditions. She has one of the five.",
     "fix": "Explain the phased GP route honestly and use the specialist route she does meet (NICE TA875 or TA664)."
    },
    {
     "dom": "tasks",
     "fail": "Refusing outright — “you don’t qualify”.",
     "why": "Inaccurate for her and destroys trust. “Management plan not in line with current UK best practice.”",
     "fix": "“Not by that route, but yes by this one.” Refer, and offer free programmes while she waits."
    },
    {
     "dom": "tasks",
     "fail": "Omitting regain on stopping, side effects and contraception.",
     "why": "Incomplete counselling; MHRA (June 2025) advises effective contraception, with extra caution for oral methods on tirzepatide.",
     "fix": "Three honest facts: works alongside changes, weight returns when stopped, not in pregnancy — then ask about contraception."
    },
    {
     "dom": "gs",
     "fail": "Using “obese”, “morbid” or “non-compliant”, or talking about her “failure” to lose weight.",
     "why": "Stigmatising language is flagged as poor professionalism and damages the relationship.",
     "fix": "Person-first language: “living with obesity”, “your weight”, “what’s worked before”."
    },
    {
     "dom": "gs",
     "fail": "Ending with “we’ll see what the specialists say” and no concrete plan.",
     "why": "Non-specific closure and no follow-up are standard failing feedback statements.",
     "fix": "Referral sent today, programme links, bloods, her chosen goal, review in about four weeks."
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
