/* ============================================================
   Reasoning GP — The Hot Seat: add-on set, batch 11
   Stem, knowledge, model consultation, scorecard tasks, extras,
   knowledge base, playbook, links and examiner pitfalls for
   20 further cases. Loaded after sca-pitfalls.js and
   before sca-practice.js; merges into the existing maps and
   attaches to the case objects exactly as those files do.
   Educational; original content; primary sources cited.
   ============================================================ */
(function(){
  var ADD = {
 "abnormal-semen-analysis": {
  "stem": {
   "name": "Tom Whitfield",
   "age": "34-year-old man",
   "pmh": [
    "Couple trying to conceive for about 14 months",
    "No other history recorded in the case"
   ],
   "meds": [
    "None recorded"
   ],
   "allergy": "None recorded",
   "recent": "Semen analysis reported: low sperm count (oligozoospermia) with reduced motility. First sample.",
   "reason": "Video consultation: “My sperm test came back abnormal. Is it my fault, and does it mean we’ll never have kids?”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG257 Fertility problems: assessment and treatment (March 2026) · [2] NICE QS73 Fertility problems (2014, updated March 2026) · [3] NICE NG12 (updated April 2026) Suspected cancer: recognition and referral (updated April 2026) · [4] HFEA Code of Practice (counselling in licensed clinics)",
   "summary": "One abnormal semen analysis is a starting point, not a verdict. Repeat it (ideally at 3 months, sooner if the deficiency is gross), look for modifiable factors, examine the testes face to face, and refer the couple together after a year of trying. Take the self-blame seriously.",
   "points": [
    {
     "h": "Repeat before concluding",
     "t": "NICE NG257 [1]: if the first semen analysis is abnormal, offer a repeat confirmatory test, ideally 3 months after the first so a full cycle of sperm production can pass, or as soon as possible if there is a gross deficiency (azoospermia or severe oligozoospermia). Recent fever, the abstinence interval and collection problems can all lower a single result."
    },
    {
     "h": "When to refer",
     "t": "NG257 [1]: couples who have not conceived after 1 year of regular unprotected intercourse should be offered clinical assessment and investigation together. Refer earlier, at presentation, if the woman is 36 or over or there is a known cause or predisposing factor. At about 14 months with an abnormal result, this couple qualifies now."
    },
    {
     "h": "Modifiable male factors",
     "t": "Smoking, alcohol, recreational drugs, anabolic steroids or testosterone (which suppress sperm production), raised BMI, some prescribed drugs and occupational exposures can all reduce semen quality. Elevated scrotal temperature is associated with poorer semen quality, though it is uncertain whether looser clothing improves fertility [1]."
    },
    {
     "h": "Examination",
     "t": "This needs a face-to-face appointment: testicular volume and consistency, a palpable varicocele, presence of both vasa, and signs of androgen deficiency. NG257 [1]: for a clinically detected varicocele with abnormal semen, consider radiological or surgical treatment, taking female fertility factors into account."
    },
    {
     "h": "Testicular cancer routes",
     "t": "Men with impaired semen quality carry a somewhat higher risk of testicular cancer, so examine rather than assume. NICE NG12 (updated April 2026) [3]: consider a suspected cancer pathway referral for a non-painful enlargement or change in shape or texture of the testis, and consider direct-access ultrasound for unexplained or persistent testicular symptoms."
    },
    {
     "h": "Tests",
     "t": "Hormones (FSH, LH, testosterone, with prolactin if indicated) guide the specialist, particularly when the count is very low. Genetic tests (karyotype, cystic fibrosis screen, Y-chromosome microdeletions) are specialist decisions for severe oligozoospermia, azoospermia or an absent vas."
    },
    {
     "h": "A couple issue",
     "t": "Assess both partners in parallel. A male-factor result does not rule out a female factor, and treatment is planned for the couple. Options range from lifestyle change and treating a cause through to IVF with ICSI, which needs only a small number of sperm."
    },
    {
     "h": "Emotional support",
     "t": "NICE QS73 [2]: people having fertility investigations and treatment should be offered counselling before, during and after, and licensed clinics must offer it (HFEA [4]). Guilt, low mood and strain on the relationship are common and worth asking about directly."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Tom, it’s Dr Shah. Thanks for joining the video call. I can see you’ve had your semen test result — before I say anything, tell me what you’ve been told and how you’re feeling.",
    "dom": "rto",
    "why": "Starts with his understanding and emotion"
   },
   {
    "who": "pt",
    "text": "I came on my own. My partner’s at work, and honestly I wanted to hear this by myself first. It says abnormal. Is it my fault we haven’t got pregnant? Does it mean we’ll never have kids? I feel like I’ve let her down."
   },
   {
    "who": "dr",
    "text": "That’s a lot to be carrying, and I’m really glad you came. Let me say one thing straight away: this is not about fault, and one test doesn’t tell us you’ll never have children. I’d like to go through what the result shows, ask a few questions, and then plan the next steps together. Is that alright?",
    "dom": "rto",
    "why": "Addresses the blame early and agrees an agenda"
   },
   {
    "who": "pt",
    "text": "Yeah. Okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "The result shows a lower sperm count than expected and the sperm aren’t moving as well as usual. Was there anything around the time of the sample — a fever or illness in the months before, or a very short or very long gap since you last ejaculated?",
    "dom": "tasks",
    "why": "Checks factors that make a single sample unreliable"
   },
   {
    "who": "pt",
    "text": "Not that I know of. I just did what the form said."
   },
   {
    "who": "dr",
    "text": "That’s helpful. Now some questions about general health. Do you smoke, and how much do you drink in a typical week?",
    "dom": "tasks",
    "why": "Starts the modifiable-factor history"
   },
   {
    "who": "pt",
    "text": "Does that make a difference to sperm?"
   },
   {
    "who": "dr",
    "text": "It really is, because these are things that can improve the result, and that’s good news. There’s no judgement. Have you ever used anything from the gym — protein is fine, I mean steroids, testosterone or similar products?",
    "dom": "tasks",
    "why": "Explains why and asks non-judgementally about anabolic steroids"
   },
   {
    "who": "pt",
    "text": "I’ll go through all of it with you. I just want to know what actually matters."
   },
   {
    "who": "dr",
    "text": "Thank you. I’ll give you the list of what matters so you can look at it with your partner: smoking, alcohol, recreational drugs, any gym products, weight, regular medicines, and exposure to heat or chemicals at work. Any prescribed medicines or operations down below, like surgery for an undescended testicle or a hernia?",
    "dom": "tasks",
    "why": "Covers drugs, surgical history and occupational exposures"
   },
   {
    "who": "pt",
    "text": "Nothing I can think of."
   },
   {
    "who": "dr",
    "text": "Any lumps, swelling or change in the feel of your testicles, or an ache there?",
    "dom": "tasks",
    "why": "Screens for testicular symptoms"
   },
   {
    "who": "pt",
    "text": "No, nothing I’ve noticed."
   },
   {
    "who": "dr",
    "text": "And how often are you and your partner able to have sex — has trying to time it become stressful?",
    "dom": "tasks",
    "why": "Explores frequency and the pressure of timed intercourse"
   },
   {
    "who": "pt",
    "text": "It’s become a bit of a chore, if I’m honest. We’re tracking everything."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "You said you feel you’ve let her down. Can you tell me more about that?",
    "dom": "rto",
    "why": "Follows the key emotional cue"
   },
   {
    "who": "pt",
    "text": "She’s wanted this for ages. If it’s me, then I’m the reason. I haven’t told her the result yet."
   },
   {
    "who": "dr",
    "text": "That makes sense of why you came alone. How are you coping in yourself — sleep, mood, work?",
    "dom": "rto",
    "why": "Checks his mood and coping"
   },
   {
    "who": "pt",
    "text": "I’m not sleeping great. I keep reading stuff online."
   },
   {
    "who": "dr",
    "text": "What were you hoping to take away from today?",
    "dom": "rto",
    "why": "Elicits expectations"
   },
   {
    "who": "pt",
    "text": "Just to know if it’s my fault and whether we can have kids."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "Here’s the honest picture. Sperm results vary a lot from one sample to the next. It takes about three months to make new sperm, so we repeat the test, usually after about three months, before drawing any conclusions. Many men with a low count do father children, and there are treatments, including IVF with a technique that needs only a small number of sperm.",
    "dom": "tasks",
    "why": "Explains the need for a repeat and gives realistic hope"
   },
   {
    "who": "pt",
    "text": "So it might be fine next time?"
   },
   {
    "who": "dr",
    "text": "It might be better, or it might confirm a problem. Either way, it’s a couple question, not a blame question. Fertility checks look at both of you, and one abnormal result in you doesn’t mean there isn’t something to check for your partner too.",
    "dom": "tasks",
    "why": "Frames fertility as a couple issue without false reassurance"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "Because you’ve been trying for over a year, you both qualify for fertility assessment now. I’d like to refer you together, arrange the repeat semen test, and do blood tests for your hormones. Your partner will need her own checks through her GP. How would you feel about telling her?",
    "dom": "tasks",
    "why": "Couple-based referral, repeat test and hormones; involves partner"
   },
   {
    "who": "pt",
    "text": "I think I need to. I just didn’t know what to say."
   },
   {
    "who": "dr",
    "text": "You could say it’s a first test that needs repeating, that it’s nobody’s fault, and that you’re being referred as a couple. You’re both welcome at the next appointment. Fertility clinics also offer counselling, and I can point you to support in the meantime.",
    "dom": "rto",
    "why": "Helps him plan the conversation and offers counselling"
   },
   {
    "who": "dr",
    "text": "I also need to examine you in person, which I can’t do on video. It’s a quick check of the testicles for size, any swollen veins called a varicocele, and any lump. Men with lower counts have a slightly higher chance of testicular problems, so it’s worth doing properly. Can we book that this week?",
    "dom": "tasks",
    "why": "Arranges face-to-face examination including testicular check"
   },
   {
    "who": "pt",
    "text": "Yeah, that’s fine."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If before then you notice a lump, swelling or change in a testicle, contact us, and we’ll see you and arrange an ultrasound. And if your mood drops or you feel you can’t cope, please tell us sooner rather than later.",
    "dom": "gs",
    "why": "Specific testicular and mood safety-net"
   },
   {
    "who": "dr",
    "text": "Can you tell me in your own words what we’ve agreed?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "It’s not a final answer, repeat test in about three months, bloods, an exam this week, and a referral for both of us. And talk to her."
   },
   {
    "who": "dr",
    "text": "That’s exactly it. I’ll see you for the examination and we’ll go through the blood results together.",
    "dom": "gs",
    "why": "Summarises and confirms follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Let him say what he fears first: fault, never having children, letting his partner down, and wanting to hear it alone.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Relationship, whether his partner knows, stress of timed intercourse, sleep and mood, work exposures.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “my fault” and “let her down”, and the stress of “tracking everything”, and explored them.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (his fault), concern (permanent infertility, letting her down), expectation (to know if children are possible).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Face-to-face examination: testicular volume and consistency, varicocele, vasa, androgen signs. Repeat semen analysis (ideally at 3 months), FSH, LH, testosterone ± prolactin.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Confounders in a single sample; modifiable factors; varicocele; hormonal or genetic causes; female factor still possible.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about testicular lumps or change; planned examination; knew the NICE NG12 (updated April 2026) route for a non-painful testicular change.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Explained a single abnormal result needing confirmation, without catastrophe or false reassurance.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Couple referral now (over 1 year trying, NG257), repeat test, hormones, face-to-face exam, counselling offered.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Smoking, alcohol, drugs, anabolic steroids, weight, medicines and heat addressed as shared, practical steps.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Testicular and mood safety-net; exam booked; results review; plan for the partner’s own assessment.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Investigations & results",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Tom Whitfield",
    "age": "34 years · male",
    "pmh": [
     "Trying to conceive with partner for ~14 months"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Semen analysis (first sample): low count (oligozoospermia) and reduced motility.",
    "reason": "“The sperm test came back abnormal. Is it my fault?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and name the blame",
     "d": "He asks if it’s his fault within the first sentence. Say early that this is not about fault and that one test is not a verdict, then agree an agenda."
    },
    {
     "t": "1–5",
     "h": "Male-factor history",
     "d": "Illness or fever before the sample, abstinence, smoking, alcohol, drugs, anabolic steroids, weight, medicines, testicular surgery, heat or chemical exposure, testicular lumps, sexual frequency."
    },
    {
     "t": "5–7",
     "h": "ICE and mood",
     "d": "Guilt, not yet told his partner, poor sleep, online reading. Ask directly how he is coping."
    },
    {
     "t": "7–11",
     "h": "Explain and plan",
     "d": "Repeat at about 3 months, hormones, couple referral now (over a year), face-to-face exam including testicular check, counselling, and help telling his partner."
    },
    {
     "t": "11–12",
     "h": "Safety-net and close",
     "d": "Testicular change or low mood: contact sooner. Teach-back and booked examination."
    }
   ],
   "wordPics": {
    "fail": "Tells him he has a low sperm count and will probably need IVF; refers him alone; no repeat test; no examination or testicular check; ignores the guilt; lectures on lifestyle.",
    "pass": "Explains the result needs repeating, takes a male-factor history, arranges hormones and a face-to-face examination, and refers to fertility services with his partner.",
    "exc": "All of the above, plus: addresses the self-blame early and warmly; frames the problem as the couple’s; gives realistic hope without promises; helps him plan how to tell his partner; offers counselling; checks mood; links the examination to testicular cancer awareness with the NICE NG12 (updated April 2026) route; uses teach-back."
   },
   "avoid": [
    {
     "dont": "“Well, the problem is on your side, so it’s the male factor.”",
     "instead": "“This is the first test, it needs repeating, and fertility is always looked at as a couple.”",
     "why": "Confirms his guilt and ignores the need for a repeat and for female assessment."
    },
    {
     "dont": "“You’ll probably need IVF.”",
     "instead": "“There are several options depending on what the repeat test and both your checks show, and many men with a low count do father children.”",
     "why": "Premature and frightening on a single result."
    },
    {
     "dont": "“Stop smoking and drinking and lose some weight.”",
     "instead": "“Some things can genuinely improve sperm quality. Which of these feels doable for you?”",
     "why": "A lecture to a man already blaming himself worsens guilt and reduces engagement."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "The couple and the relationship",
     "t": "He has not told his partner. Help him plan the conversation and invite her to future appointments; relationship strain and guilt are common in male-factor subfertility."
    },
    {
     "h": "Mood and online information",
     "t": "Poor sleep and late-night searching suggest distress. Ask about mood and point to reliable fertility support rather than forums."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality",
     "t": "His result is his own confidential information. Encourage, but do not force, sharing with his partner; do not disclose it to her without his consent (GMC Confidentiality, 2017)."
    },
    {
     "h": "NHS funding",
     "t": "NICE NG257 sets the national framework for assessment and IVF access, but local ICB criteria decide funding in practice. Avoid promising a number of funded cycles."
    }
   ],
   "professional": [
    {
     "h": "Remote consultation limits",
     "t": "A video call cannot replace a genital examination. Arrange a face-to-face appointment with a chaperone offered (GMC Intimate examinations and chaperones, 2024)."
    },
    {
     "h": "Counselling",
     "t": "NICE QS73: offer counselling before, during and after investigation and treatment. HFEA-licensed clinics must offer it."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Fertility Network UK runs support services, including for men. Stop-smoking services and alcohol support can help with modifiable factors."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Testicular lump, swelling or change in shape or texture (NICE NG12 (updated April 2026) route)",
     "Very low count or no sperm on the report (repeat urgently and specialist tests)",
     "Anabolic steroid or testosterone use",
     "Low mood or hopelessness"
    ],
    "psychosocial": [
     "Whether his partner knows and how the relationship is coping",
     "Stress of timed intercourse",
     "Sleep, mood and online searching"
    ],
    "ice": [
     "Idea: “It’s my fault we can’t get pregnant.”",
     "Concern: never having children and letting his partner down",
     "Expectation: to know if they can have children"
    ]
   },
   "diagnosis": "“This first test shows a lower count and less movement than we’d expect. One sample isn’t enough to be sure, so we repeat it in about three months and check both of you.”",
   "diagnosisLay": "“A single sperm test is like one snapshot of the weather. A bad day doesn’t tell you the climate. Sperm take about three months to be made, so we take another look after that.”",
   "management": {
    "reflectIce": "“You told me you feel you’ve let her down. This isn’t about fault. It’s something you’ll look into together, and there are real options.”",
    "psychosocial": "Help him plan how to tell his partner, invite her to the next appointment, offer counselling and check mood at follow-up.",
    "sharedPlan": [
     "Repeat semen analysis at about 3 months (sooner if a gross deficiency)",
     "FSH, LH, testosterone ± prolactin",
     "Face-to-face examination including testes and varicocele",
     "Refer the couple to fertility services now (over 1 year trying)",
     "Agree realistic changes: smoking, alcohol, drugs, weight"
    ],
    "safetyNet": [
     "Testicular lump, swelling or change: contact the practice promptly for review and ultrasound",
     "Low mood or not coping: book sooner",
     "Review with blood results and after the examination"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Infertility",
    "s": "Case walkthrough · NICE NG257",
    "href": "../cases/infertility.html"
   },
   {
    "ic": "🗺️",
    "t": "Abnormal semen analysis",
    "s": "Visual algorithm · repeat, tests and referral",
    "href": "algorithms/abnormal-semen-analysis.html"
   },
   {
    "ic": "💠",
    "t": "Infertility protocol",
    "s": "Assessment of the couple · referral",
    "href": "management/infertility.html"
   },
   {
    "ic": "🗺️",
    "t": "Testicular lump",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) testicular routes",
    "href": "algorithms/testicular-lump.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is lost when the result is delivered as a verdict on him. The marks are for a repeat before conclusions, a proper male-factor history, a real examination and a couple-based plan, all while taking his guilt seriously.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Treating one abnormal sample as a diagnosis.",
     "why": "NICE NG257 advises a repeat, ideally at 3 months, before conclusions. A single result is affected by illness, abstinence and collection.",
     "fix": "“This is a first result. We repeat it in about three months before deciding anything.”"
    },
    {
     "dom": "tasks",
     "fail": "Forgetting the testicular examination on a video call, or claiming to examine remotely.",
     "why": "Misses a varicocele, small testes, an absent vas or a testicular lump; NICE NG12 (updated April 2026) has a route for testicular change.",
     "fix": "Book a face-to-face examination with a chaperone offered and explain why it matters."
    },
    {
     "dom": "tasks",
     "fail": "Referring him alone.",
     "why": "Fertility is assessed and treated as a couple (NG257). His partner may also have a factor.",
     "fix": "“I’ll refer you both, and your partner will have her own checks.”"
    },
    {
     "dom": "tasks",
     "fail": "Not asking about anabolic steroids or testosterone.",
     "why": "A common, reversible cause of low sperm production that men rarely volunteer.",
     "fix": "Ask plainly and without judgement, and explain why it matters."
    },
    {
     "dom": "rto",
     "fail": "Answering the clinical question but ignoring “is it my fault?”",
     "why": "His guilt is the hidden agenda. Ignoring it fails Relating to Others.",
     "fix": "Name it early: “This isn’t about fault.” Return to it when planning how to tell his partner."
    },
    {
     "dom": "gs",
     "fail": "Promising a good outcome or a number of funded IVF cycles.",
     "why": "False reassurance; outcomes and local funding are uncertain.",
     "fix": "Give realistic hope: many men with low counts father children, and several options exist."
    },
    {
     "dom": "gs",
     "fail": "No safety-net or follow-up.",
     "why": "The examination, repeat test and emotional support get lost.",
     "fix": "Book the examination, safety-net for testicular change and low mood, and plan a results review."
    }
   ]
  }
 },
 "acute-glaucoma": {
  "stem": {
   "name": "Pauline Voss",
   "age": "62-year-old woman",
   "pmh": [
    "Hypermetropia (long-sighted)",
    "No other history recorded in the case"
   ],
   "meds": [
    "Not specified in the case: check the repeat record"
   ],
   "allergy": "None recorded",
   "recent": "Urgent video request: a few hours of a painful red right eye, blurred vision, haloes around lights, headache and vomiting.",
   "reason": "“My eye’s gone red and agony, I’m seeing haloes round lights and now I feel sick. Is it a migraine or a bug?”"
  },
  "knowledge": {
   "guideline": "[1] RCOphth Management of angle-closure glaucoma (2022) · [2] College of Optometrists Clinical Management Guidelines: primary angle closure · [3] Khurana AK et al., J Curr Glaucoma Pract 2012;6(1):6–8 (drug-induced angle closure) · [4] Topiramate SPC, section 4.4 · [5] BNF (cautions for antimuscarinic and sympathomimetic drugs)",
   "summary": "A painful red eye with blurred vision, haloes, headache and vomiting is acute angle-closure glaucoma until proved otherwise. It is a same-day emergency: the pressure must be lowered within hours. Do not label it migraine or gastroenteritis, and send her to eye casualty now.",
   "points": [
    {
     "h": "The pattern",
     "t": "Severe unilateral eye pain, a red eye, blurred vision, haloes around lights, frontal headache, nausea and vomiting. On examination the cornea is hazy, the pupil is fixed and mid-dilated, and the eye feels hard. A video call can show redness and perhaps an abnormal pupil, but cannot confirm pressure or pupil reactions."
    },
    {
     "h": "Why it cannot wait",
     "t": "The College of Optometrists [2] classes acute angle closure as a same-day emergency. Raised pressure damages the optic nerve and can cause permanent visual loss within hours. The eye team lowers the pressure medically and then gives definitive treatment, usually laser peripheral iridotomy or lens extraction depending on the mechanism (RCOphth 2022 [1]), often treating the other eye too."
    },
    {
     "h": "Do not be misled",
     "t": "Headache and vomiting pull the diagnosis towards migraine, a viral illness or gastroenteritis. The discriminator is a painful red eye with reduced vision and haloes. Migraine does not make the eye red; conjunctivitis does not reduce vision or cause vomiting."
    },
    {
     "h": "Other red eyes",
     "t": "Anterior uveitis: pain, photophobia, small or irregular pupil. Scleritis: deep boring pain, often with autoimmune disease. Keratitis: pain, photophobia, contact lens wear. Conjunctivitis: gritty, discharge, normal vision, no severe pain."
    },
    {
     "h": "Who is at risk",
     "t": "Hypermetropia (a short, crowded eye), increasing age, female sex and East or South Asian family origin [2]. Precipitants: dim light and pupil dilation, including drugs with antimuscarinic or sympathomimetic effects, some antidepressants and antihistamines [3][5], and mydriatic drops. Topiramate can cause acute myopia with secondary angle closure, usually within the first month [4]."
    },
    {
     "h": "Primary care role",
     "t": "Recognise, explain and transfer immediately to the emergency eye service with a phone handover. Do not arrange routine follow-up or an optician appointment. She should not drive."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Voss, it’s Dr Hassan. I can see you’re uncomfortable. Tell me what’s happening.",
    "dom": "rto",
    "why": "Acknowledges distress and opens"
   },
   {
    "who": "pt",
    "text": "My right eye is killing me. It came on a few hours ago, it’s gone really red, my vision’s blurry and there are rainbow haloes round the lights. I’ve got a thumping headache and I’ve been sick once. I wondered if it’s a migraine or a bug, but the eye pain is unbearable."
   },
   {
    "who": "dr",
    "text": "I’m sorry you’re in so much pain. I’m going to ask a few focused questions quickly, because the eye is the important part of this. Is that okay?",
    "dom": "gs",
    "why": "Keeps the consultation short and focused on the emergency"
   },
   {
    "who": "pt",
    "text": "Yes, please."
   },
   {
    "phase": "Focused history and remote look",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Is it just the right eye? And if you cover the left eye, how well can you see with the right?",
    "dom": "tasks",
    "why": "Confirms unilateral and reduced vision"
   },
   {
    "who": "pt",
    "text": "Just the right. It’s all misty with that eye."
   },
   {
    "who": "dr",
    "text": "Could you bring the camera close to your face, in good light, and look straight at it?",
    "dom": "tasks",
    "why": "Uses video within its limits"
   },
   {
    "who": "pt",
    "text": "Like this?"
   },
   {
    "who": "dr",
    "text": "That’s perfect. The right eye is very red and looks different from the left. I can’t measure the pressure or test your pupil properly on video, but what I can see fits with what you describe.",
    "dom": "tasks",
    "why": "Describes findings honestly without over-claiming an examination"
   },
   {
    "who": "dr",
    "text": "Is it gritty with sticky discharge, or more a deep, severe ache? Is bright light painful?",
    "dom": "tasks",
    "why": "Discriminates from conjunctivitis, uveitis and keratitis"
   },
   {
    "who": "pt",
    "text": "A deep ache. No discharge."
   },
   {
    "who": "dr",
    "text": "Did it start somewhere dim, like the evening or the cinema? Do you wear glasses for long sight? And have you started any new tablets or eye drops, including anything for mood, allergies, bladder or travel sickness?",
    "dom": "tasks",
    "why": "Checks precipitants, hypermetropia and drug triggers"
   },
   {
    "who": "pt",
    "text": "I’m long-sighted, yes. Nothing new that I can think of, I’d have to look at my tablets."
   },
   {
    "who": "dr",
    "text": "Do you wear contact lenses, or have you had an injury to the eye?",
    "dom": "tasks",
    "why": "Excludes keratitis and trauma"
   },
   {
    "who": "pt",
    "text": "No."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "You wondered about a migraine or a bug. What worries you most right now?",
    "dom": "rto",
    "why": "Explores ideas and concerns"
   },
   {
    "who": "pt",
    "text": "The pain, and my sight. I’ve never had haloes before. I was hoping for something to stop it."
   },
   {
    "phase": "Explanation",
    "clock": "5–7 min",
    "who": "dr",
    "text": "I don’t think this is a migraine or a bug. The painful red eye, the misty vision and the haloes together suggest the pressure inside the eye has suddenly gone very high. It’s called acute angle-closure glaucoma, and it can make you feel sick and give you a headache too.",
    "dom": "tasks",
    "why": "Names the diagnosis and explains the misleading symptoms"
   },
   {
    "who": "pt",
    "text": "Is it serious?"
   },
   {
    "who": "dr",
    "text": "It is an emergency, because high pressure can damage the sight within hours. The good news is that eye specialists can bring the pressure down quickly, and treating it straight away gives the best chance of protecting your vision.",
    "dom": "rto",
    "why": "Honest about urgency, balanced with hope"
   },
   {
    "who": "pt",
    "text": "Okay. What do I do?"
   },
   {
    "phase": "Immediate management",
    "clock": "7–10 min",
    "who": "dr",
    "text": "You need to go to the emergency eye department now. I’ll phone them straight after this call so they’re expecting you, and send over what we’ve discussed.",
    "dom": "tasks",
    "why": "Immediate transfer with handover"
   },
   {
    "who": "dr",
    "text": "Please don’t drive. Is there someone who can take you right away? If not, I’ll arrange an ambulance.",
    "dom": "gs",
    "why": "Safe transport"
   },
   {
    "who": "pt",
    "text": "I’ll find out who can take me."
   },
   {
    "who": "dr",
    "text": "Let me know within the next few minutes, and I’ll call an ambulance if no one can. Take your glasses and a list or photo of your tablets. They’ll give you treatment for the pressure, the pain and the sickness when you arrive.",
    "dom": "gs",
    "why": "Practical and time-bound instructions"
   },
   {
    "who": "dr",
    "text": "Please don’t use any eye drops or new medicines before you’re seen unless the eye team tells you to.",
    "dom": "tasks",
    "why": "Avoids drugs that might worsen angle closure"
   },
   {
    "phase": "Safety-net and close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "If you can’t get there quickly, the vomiting won’t stop, or you feel faint or confused, call 999. Can you tell me what you’re going to do now?",
    "dom": "rto",
    "why": "Safety-net and teach-back"
   },
   {
    "who": "pt",
    "text": "Get a lift to the eye department now, don’t drive, take my tablets list, and call 999 if I can’t get there."
   },
   {
    "who": "dr",
    "text": "Exactly right. I’ll ring the eye department now and call you tomorrow to see how you are.",
    "dom": "gs",
    "why": "Confirms handover and follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Let her describe the eye, haloes, headache and vomiting; took the pain seriously.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Who can take her, transport, whether she is alone, what she was planning to do.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up haloes, reduced vision and severe pain as eye-specific cues despite the migraine idea.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (migraine or a bug), concern (pain and sight), expectation (something to stop it).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Remote look in good light; cover test for vision; discriminating questions; honest about what video cannot assess (pressure, pupil reactions).",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Acute angle closure versus migraine, gastroenteritis, uveitis, keratitis, scleritis and conjunctivitis.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Recognised a sight-threatening emergency and checked for drug precipitants.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named acute angle-closure glaucoma and explained why headache and vomiting occur.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Immediate emergency eye referral with handover; no driving; ambulance if no lift.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Drug history for antimuscarinic, sympathomimetic and topiramate precipitants; no drops before specialist review.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 triggers; teach-back; follow-up call the next day.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "New & undifferentiated presentations",
    "Older adults"
   ],
   "stem": {
    "name": "Pauline Voss",
    "age": "62 years · female",
    "pmh": [
     "Hypermetropia"
    ],
    "meds": [
     "Check repeat record"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Urgent video request: hours of a painful red right eye, haloes, blurred vision, headache and vomiting.",
    "reason": "“Is it a migraine or a bug? The eye pain is unbearable.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and focus",
     "d": "Acknowledge the pain and agree a short, focused consultation."
    },
    {
     "t": "1–4",
     "h": "Targeted history and remote look",
     "d": "Unilateral, reduced vision, deep ache vs gritty, photophobia, dim-light onset, long sight, new drugs or drops, contact lenses. Look at the eye on camera and say what you cannot assess."
    },
    {
     "t": "4–5",
     "h": "ICE",
     "d": "Migraine or bug, fear for her sight, wanting relief."
    },
    {
     "t": "5–7",
     "h": "Explain",
     "d": "Acute angle-closure glaucoma; why it causes vomiting; emergency but treatable."
    },
    {
     "t": "7–12",
     "h": "Act and close",
     "d": "Emergency eye department now with a phone handover, no driving, ambulance if no lift, 999 triggers, teach-back and next-day follow-up."
    }
   ],
   "wordPics": {
    "fail": "Labels it migraine or gastroenteritis and advises an antiemetic and painkillers; or suspects glaucoma but books an optician or a routine referral; claims to examine the pressure or pupil on video.",
    "pass": "Recognises acute angle-closure glaucoma from the history, explains it is an emergency, and arranges immediate transfer to the emergency eye department without driving.",
    "exc": "All of the above, plus: explains why the headache and vomiting misled her; is honest about the limits of the video look; checks drug precipitants; hands over directly and sets a time limit for arranging transport; balances urgency with hope; uses teach-back and follows up."
   },
   "avoid": [
    {
     "dont": "“It sounds like a migraine. Take something for the sickness and rest in a dark room.”",
     "instead": "“A migraine doesn’t make the eye red and misty. This looks like high pressure in the eye, and you need the eye department now.”",
     "why": "A dark room dilates the pupil and can worsen angle closure; delay risks the sight."
    },
    {
     "dont": "“I can see your pupil isn’t reacting and the eye is hard.”",
     "instead": "“I can see the eye is very red. I can’t check the pressure on video, but your symptoms fit.”",
     "why": "Pressure and pupil reactions cannot be examined on video; over-claiming is unsafe and unprofessional."
    },
    {
     "dont": "“Get your optician to have a look in the next few days.”",
     "instead": "“You need to be seen in the emergency eye department now. I’ll call them.”",
     "why": "Acute angle closure needs same-day treatment within hours."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Getting there safely",
     "t": "She is in pain, vomiting and has reduced vision in one eye. Confirm who can take her immediately, and call an ambulance if nobody can."
    },
    {
     "h": "After treatment",
     "t": "Laser treatment is usually offered to both eyes. She may need help with daily tasks for a short time and follow-up at the eye clinic."
    }
   ],
   "legal": [
    {
     "h": "Driving",
     "t": "She must not drive today. Once treated, the eye team will advise; DVLA rules for glaucoma depend on whether the visual standards are met and whether both eyes are affected (DVLA Assessing fitness to drive)."
    }
   ],
   "professional": [
    {
     "h": "Limits of remote assessment",
     "t": "Be honest about what a video call can show. Document what was seen and what could not be assessed, and escalate on history (GMC Good medical practice)."
    },
    {
     "h": "Medicines review",
     "t": "After the episode, review medicines with antimuscarinic or sympathomimetic effects, and code the diagnosis so future prescribers are alerted."
    }
   ],
   "community": [
    {
     "h": "Family eye health",
     "t": "Close relatives may be at higher risk of angle closure; the eye team can advise whether they should have an eye examination."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Painful red eye with reduced vision",
     "Haloes around lights",
     "Headache and vomiting with eye pain",
     "Mid-dilated, unreactive pupil or hazy cornea (if seen)",
     "Recent new antimuscarinic, sympathomimetic, antidepressant or topiramate treatment, or dilating drops"
    ],
    "psychosocial": [
     "Who can take her now",
     "Whether she is alone",
     "Fear for her sight"
    ],
    "ice": [
     "Idea: a migraine or a sickness bug",
     "Concern: the pain and her vision",
     "Expectation: something to stop the pain and sickness"
    ]
   },
   "diagnosis": "“The painful red eye, the misty vision and the haloes point to the pressure inside your eye going suddenly very high. It’s called acute angle-closure glaucoma, and it needs treatment today.”",
   "diagnosisLay": "“Fluid inside the eye normally drains out through a small channel. In your eye that channel has suddenly closed, like a plug over a drain, so the pressure builds up. The eye team can open the drain again.”",
   "management": {
    "reflectIce": "“You wondered about a migraine or a bug, which is understandable with the headache and sickness. But the eye is the key, and it needs the eye department now.”",
    "psychosocial": "Arrange immediate transport, with an ambulance if nobody can take her, and follow up the next day.",
    "sharedPlan": [
     "Emergency eye department now, with phone handover",
     "No driving; ambulance if no lift within minutes",
     "Take glasses and a medicine list",
     "No new drops or medicines until seen",
     "Medicines review and follow-up call after treatment"
    ],
    "safetyNet": [
     "999 if she cannot get there quickly, the vomiting continues, or she feels faint or confused",
     "GP follow-up call the next day"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Glaucoma",
    "s": "Case walkthrough · acute and chronic",
    "href": "../cases/glaucoma.html"
   },
   {
    "ic": "🗺️",
    "t": "Red eye pathway",
    "s": "Visual algorithm · sight-threatening causes",
    "href": "algorithms/red-eye.html"
   },
   {
    "ic": "💠",
    "t": "Glaucoma protocol",
    "s": "Angle closure · drug precipitants",
    "href": "management/glaucoma.html"
   },
   {
    "ic": "📋",
    "t": "Red eye",
    "s": "Case walkthrough · differentials",
    "href": "../cases/red-eye.html"
   }
  ],
  "pitfalls": {
   "intro": "This station hides an eye emergency behind a headache and vomiting. The marks go to the candidate who recognises the pattern quickly, admits what video cannot show, and gets her to the eye department now.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Labelling it migraine or gastroenteritis.",
     "why": "Misses a sight-threatening emergency. Migraine does not cause a red eye with reduced vision and haloes.",
     "fix": "Ask about the eye first: redness, vision, haloes."
    },
    {
     "dom": "tasks",
     "fail": "Referring to an optician or a routine clinic.",
     "why": "Acute angle closure is a same-day emergency (College of Optometrists); sight can be lost within hours.",
     "fix": "Emergency eye department now, with a phone handover."
    },
    {
     "dom": "tasks",
     "fail": "Claiming to examine the pupil or pressure on video.",
     "why": "Over-claiming an examination is unsafe and undermines credibility.",
     "fix": "Say what you can see and what you cannot, and act on the history."
    },
    {
     "dom": "tasks",
     "fail": "No drug history.",
     "why": "Antimuscarinic, sympathomimetic and some antidepressant drugs, dilating drops and topiramate can precipitate angle closure.",
     "fix": "Ask about new tablets and drops, and review them after treatment."
    },
    {
     "dom": "rto",
     "fail": "Alarming her without offering hope.",
     "why": "A frightened patient in pain needs clarity and reassurance that treatment works.",
     "fix": "“It’s an emergency, and the eye team can bring the pressure down quickly.”"
    },
    {
     "dom": "gs",
     "fail": "Letting her drive or leaving transport vague.",
     "why": "She has reduced vision, pain and vomiting.",
     "fix": "No driving; a lift now or an ambulance."
    },
    {
     "dom": "gs",
     "fail": "No handover or follow-up.",
     "why": "Delays at the front door cost sight.",
     "fix": "Phone the eye department, then follow up the next day."
    }
   ]
  }
 },
 "amd-vision-loss": {
  "stem": {
   "name": "Edna Whitlock",
   "age": "78-year-old woman",
   "pmh": [
    "Current smoker",
    "Family history of sight loss in old age"
   ],
   "meds": [
    "Not specified in the case: check the repeat record"
   ],
   "allergy": "None recorded",
   "recent": "Video request: a few weeks of central blur in the left eye with straight lines looking wavy. Her daughter encouraged her to book.",
   "reason": "“Straight lines look wavy and there’s a blur in the middle of my sight. It’s just old age, isn’t it?”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG82 Age-related macular degeneration (2018) · [2] NICE QS180 Serious eye disorders (2019) · [3] NICE TA1022 and related anti-VEGF technology appraisals (TA155, TA294, TA672, TA800) · [4] NICE NG209 Tobacco: preventing uptake, promoting quitting and treating dependence (2021, updated) · [5] DVLA Assessing fitness to drive: visual disorders",
   "summary": "New central blur with distortion over a few weeks in a 78-year-old smoker is possible wet AMD. NICE NG82 wants an urgent referral to a macula service, normally within 1 working day, because prompt anti-VEGF treatment can preserve sight. It is not “just old age”.",
   "points": [
    {
     "h": "Recognise it",
     "t": "Central blur, straight lines looking wavy (metamorphopsia), difficulty reading or recognising faces, with peripheral vision preserved. Age, smoking and family history are the established risk factors."
    },
    {
     "h": "Wet or dry",
     "t": "Late AMD may be wet (neovascular) or dry (geographic atrophy). New or rapidly worsening distortion or central loss suggests wet active disease. Slow change over months or years suggests dry disease. Only macular imaging (OCT) can tell them apart, so the history decides the urgency, not the diagnosis."
    },
    {
     "h": "Referral urgency",
     "t": "NICE NG82 [1]: refer people with suspected late AMD (wet active) urgently to a macula service, normally within 1 working day, whether or not vision is affected. It is urgent, not an emergency. NG82 [1] and QS180 [2]: diagnose and treat within 14 days of referral."
    },
    {
     "h": "Treatment",
     "t": "Anti-VEGF intravitreal injections for wet active AMD, within the acuity and lesion criteria set in NICE TA1022 and the earlier appraisals [3]. There is no treatment that reverses dry AMD; care focuses on low-vision support and monitoring."
    },
    {
     "h": "Smoking",
     "t": "Smoking is the main modifiable risk. Offer stop-smoking support (NICE NG209 [4]). Supplements: NG82 makes only a research recommendation. Beta-carotene-containing formulas raise lung cancer risk in smokers, so do not suggest them."
    },
    {
     "h": "Living with AMD",
     "t": "NG82 [1]: give information on the condition, low-vision services, certification of visual impairment, and Charles Bonnet syndrome (visual hallucinations that are not a sign of mental illness). QS180 [2]: offer certification as soon as eligible."
    },
    {
     "h": "Driving",
     "t": "DVLA [5] Group 1: read a number plate at 20 metres, 6/12 with both eyes open, and meet the field standard. Tell DVLA if both eyes (or the only eye) are affected, or if told the standard may not be met."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Whitlock, it’s Dr Evans. Thanks for joining the video call. What’s been happening with your eyes?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "Over the last few weeks the middle of my sight in my left eye has gone blurry, and straight lines like the door frame and the lines on my crossword look wavy and bent. I can still see round the edges. I assume it’s just old age and nothing can be done, but my daughter nagged me to get it checked."
   },
   {
    "who": "dr",
    "text": "Your daughter was right to send you, and I’m glad you came. I’d like to ask some questions and then explain what I think, because what you describe is a specific problem, not simply old age. Is that alright?",
    "dom": "rto",
    "why": "Validates the daughter’s prompt and sets an agenda"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When did you first notice the wavy lines, and has it changed over the last few days?",
    "dom": "tasks",
    "why": "Establishes speed of onset, key to wet AMD"
   },
   {
    "who": "pt",
    "text": "A few weeks ago. It seems worse this week."
   },
   {
    "who": "dr",
    "text": "Could you cover your right eye and look at the door frame behind you? Then cover the left and do the same.",
    "dom": "tasks",
    "why": "Uses a remote Amsler-type check"
   },
   {
    "who": "pt",
    "text": "With the left it’s bent in the middle and a bit smudged. The right looks straight."
   },
   {
    "who": "dr",
    "text": "Thank you. Is there a dark or empty patch in the centre? Any pain, redness, flashes or a curtain?",
    "dom": "tasks",
    "why": "Checks for scotoma and excludes other causes"
   },
   {
    "who": "pt",
    "text": "More smudged than dark. No pain."
   },
   {
    "who": "dr",
    "text": "How is it affecting you day to day: reading, faces, the television, getting about?",
    "dom": "tasks",
    "why": "Assesses functional impact"
   },
   {
    "who": "pt",
    "text": "The crossword’s hard. Faces across the room are fuzzy."
   },
   {
    "who": "dr",
    "text": "Have you had any falls or near misses, particularly on stairs or kerbs?",
    "dom": "tasks",
    "why": "Screens falls risk"
   },
   {
    "who": "pt",
    "text": "Not yet."
   },
   {
    "who": "dr",
    "text": "You mentioned family going blind in old age. Do you know what it was?",
    "dom": "tasks",
    "why": "Explores family history"
   },
   {
    "who": "pt",
    "text": "My mother. They just said her eyes went."
   },
   {
    "who": "dr",
    "text": "And you still smoke. How much at the moment?",
    "dom": "tasks",
    "why": "Quantifies the key modifiable risk"
   },
   {
    "who": "pt",
    "text": "More than I should."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said it’s just old age. Is there something about it that worries you?",
    "dom": "rto",
    "why": "Explores the unspoken concern"
   },
   {
    "who": "pt",
    "text": "I don’t want to end up like my mother. She couldn’t do anything for herself at the end."
   },
   {
    "who": "dr",
    "text": "That’s a real fear, especially having seen it happen. Thank you for telling me.",
    "dom": "rto",
    "why": "Acknowledges fear of blindness and dependence"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "What you describe sounds like age-related macular degeneration, which affects the macula, the part of the eye for detailed central vision. It doesn’t affect the side vision, so it doesn’t cause total blindness.",
    "dom": "tasks",
    "why": "Names AMD and corrects the fear of total blindness"
   },
   {
    "who": "pt",
    "text": "So it is old age?"
   },
   {
    "who": "dr",
    "text": "Age is part of it, but there are two types, and it matters which. The ‘wet’ type can come on over weeks, like yours, and it can be treated with injections into the eye that can stop it getting worse. That treatment works best if it starts soon.",
    "dom": "tasks",
    "why": "Explains the wet-dry distinction and why speed matters"
   },
   {
    "who": "pt",
    "text": "Injections in the eye? Goodness."
   },
   {
    "who": "dr",
    "text": "It sounds worse than it is: the eye is numbed first. The specialists will explain it fully. The main thing is that ‘nothing can be done’ isn’t true here.",
    "dom": "rto",
    "why": "Counters fatalism without overpromising"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’m going to refer you urgently to the macula clinic today. They aim to see and, if needed, treat people within two weeks. They’ll scan the back of your eye to tell which type it is.",
    "dom": "tasks",
    "why": "Urgent macula referral per NG82"
   },
   {
    "who": "dr",
    "text": "Smoking is the biggest thing you can change for your eyes. Would you be open to some help to cut down or stop?",
    "dom": "tasks",
    "why": "Smoking cessation offered"
   },
   {
    "who": "pt",
    "text": "I’ve tried before. I might try again, for my eyes."
   },
   {
    "who": "dr",
    "text": "That’s great. I’ll put you in touch with the stop-smoking service. Please don’t buy eye vitamins in the meantime, because some types aren’t safe for smokers.",
    "dom": "tasks",
    "why": "Warns against beta-carotene supplements in smokers"
   },
   {
    "who": "dr",
    "text": "And if you drive, please don’t while the left eye is like this until you’ve been checked, and we’ll go through the DVLA rules once we know more.",
    "dom": "gs",
    "why": "Driving advice"
   },
   {
    "who": "pt",
    "text": "I’ll bear that in mind."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Check each eye on a straight line every day. If the distortion suddenly gets worse, a dark patch appears, or the other eye starts to change, ring us or the clinic the same day. Can you tell me the plan back?",
    "dom": "gs",
    "why": "Specific safety-net and teach-back"
   },
   {
    "who": "pt",
    "text": "Urgent eye clinic, check the lines each day, ring if worse, and think about stopping smoking."
   },
   {
    "who": "dr",
    "text": "That’s it. I’ll call you in a week to make sure the appointment has come through, and we can talk about low-vision support and what your daughter can help with.",
    "dom": "gs",
    "why": "Follow-up and support plan"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Let her describe the blur and wavy lines; acknowledged the daughter’s prompt.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Reading, faces, falls, independence and support at home; smoking.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “worse this week”, the mother’s sight loss and the fatalism.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (old age, nothing to be done), concern (ending up dependent like her mother), expectation (to be told it’s age).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Onset and recent change, each-eye line test on video, scotoma, pain or flashes; recognised that OCT at a macula service decides the type.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Wet versus dry AMD; other causes of central loss (macular hole, vein occlusion, cataract) considered.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Recognised recent, progressing distortion as possible wet AMD needing urgent referral; asked about falls.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named AMD, explained wet and dry, and that peripheral vision is spared.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Urgent macula referral (NG82: normally within 1 working day); stop-smoking support; no beta-carotene supplements; driving advice.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Falls risk, low-vision support, certification and Charles Bonnet information planned; daughter involved with consent.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Daily each-eye check, same-day contact for sudden change or the other eye, follow-up call in a week.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Long-term conditions & cancer",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Edna Whitlock",
    "age": "78 years · female",
    "pmh": [
     "Current smoker",
     "Family history of sight loss"
    ],
    "meds": [
     "Check repeat record"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Video request: weeks of central blur and distorted straight lines, left eye. Daughter prompted the booking.",
    "reason": "“It’s just old age, isn’t it?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Let her finish; validate the daughter’s prompt."
    },
    {
     "t": "1–5",
     "h": "Targeted history",
     "d": "Onset and recent change, each-eye line test on camera, dark patch, pain or flashes, reading and faces, falls, family history, smoking."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "“Just old age”, fear of ending up like her mother."
    },
    {
     "t": "6–8",
     "h": "Explain",
     "d": "AMD, central not total loss, wet vs dry, why weeks of change matters."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Urgent macula referral, stop-smoking support, no beta-carotene supplements, driving, daily check, follow-up call and support."
    }
   ],
   "wordPics": {
    "fail": "Agrees it is old age; suggests the optician when convenient; no question about speed of onset; no smoking advice; ignores the fear of blindness.",
    "pass": "Recognises AMD, identifies recent onset as possible wet AMD, refers urgently to a macula service, advises on smoking, and safety-nets.",
    "exc": "All of the above, plus: uses the camera for a simple each-eye check; explains that side vision is spared; counters the fatalism without overpromising; explores the fear rooted in her mother’s experience; warns against beta-carotene in a smoker; plans low-vision support, Charles Bonnet information and driving advice; follows up the referral."
   },
   "avoid": [
    {
     "dont": "“It’s your age, I’m afraid. There isn’t much we can do.”",
     "instead": "“This sounds like macular degeneration. One type can be treated, and it needs checking urgently.”",
     "why": "Wet AMD is treatable; fatalism delays sight-saving treatment."
    },
    {
     "dont": "“Get your optician to look at it when you can.”",
     "instead": "“I’m referring you urgently to the macula clinic today.”",
     "why": "NICE NG82: urgent referral to a macula service for suspected wet active AMD."
    },
    {
     "dont": "“Take some eye vitamins.”",
     "instead": "“Stopping smoking is the best thing for your eyes; please don’t buy eye vitamins, as some aren’t safe for smokers.”",
     "why": "NG82 makes no practice recommendation on supplements, and beta-carotene raises lung cancer risk in smokers."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Independence and falls",
     "t": "Central vision loss affects reading, faces, medication labels and stairs. Consider a falls and home-safety review and involve her daughter with consent."
    },
    {
     "h": "Fear of blindness",
     "t": "Her mother’s experience shapes her fear. Explain that AMD spares side vision, and point to low-vision services."
    }
   ],
   "legal": [
    {
     "h": "DVLA",
     "t": "Group 1: tell DVLA if both eyes (or the only eye) are affected, or if told the visual standard may not be met; drivers must read a number plate at 20 metres (DVLA Assessing fitness to drive)."
    },
    {
     "h": "Certification",
     "t": "The eye clinic can certify sight impairment (CVI) once eligible, which opens access to social care support (NICE QS180)."
    }
   ],
   "professional": [
    {
     "h": "Remote assessment",
     "t": "Acuity cannot be measured reliably on video; refer on the history and let the macula service measure it."
    },
    {
     "h": "Referral pathways",
     "t": "Use the local urgent macula pathway; NG82 says urgent, normally within 1 working day, and not an emergency referral."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "The Macular Society and RNIB offer information, peer support and advice on low-vision aids. Local stop-smoking services support quitting."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "New or rapidly worsening distortion or central blur (possible wet AMD)",
     "Sudden change in the other eye",
     "Pain, redness, flashes or a curtain (a different diagnosis)",
     "Falls or near misses"
    ],
    "psychosocial": [
     "Reading, faces, independence",
     "Her mother’s sight loss and fear of dependence",
     "Support from her daughter; smoking"
    ],
    "ice": [
     "Idea: “It’s just old age; nothing can be done.”",
     "Concern: ending up dependent like her mother",
     "Expectation: to be told it is age"
    ]
   },
   "diagnosis": "“This sounds like age-related macular degeneration. Because it has come on over a few weeks, it could be the wet type, which can be treated, so it needs an urgent specialist check.”",
   "diagnosisLay": "“The macula is the centre of the camera film at the back of the eye, the part you read with. When it’s damaged, the middle of the picture blurs and bends, but the edges stay.”",
   "management": {
    "reflectIce": "“You thought nothing could be done, and you’re worried about ending up like your mother. There is a treatable type, and side vision isn’t affected.”",
    "psychosocial": "Involve her daughter with consent, plan low-vision support and a falls review, and follow up the referral.",
    "sharedPlan": [
     "Urgent referral to the macula service (NG82: normally within 1 working day)",
     "Stop-smoking support; avoid beta-carotene supplements",
     "No driving until checked; DVLA advice after diagnosis",
     "Information on Charles Bonnet syndrome and low-vision services"
    ],
    "safetyNet": [
     "Daily each-eye check on a straight line",
     "Same-day contact for sudden worsening, a dark patch, or change in the other eye",
     "Practice call in a week to confirm the appointment"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Macular degeneration",
    "s": "Protocol · NICE NG82 referral",
    "href": "management/macular-degeneration.html"
   },
   {
    "ic": "🗺️",
    "t": "Vision loss pathway",
    "s": "Visual algorithm · gradual and sudden",
    "href": "algorithms/vision-loss.html"
   },
   {
    "ic": "🗺️",
    "t": "Blurry vision",
    "s": "Visual algorithm · central vs peripheral",
    "href": "algorithms/blurry-vision.html"
   },
   {
    "ic": "💠",
    "t": "Smoking cessation",
    "s": "Protocol · NICE NG209",
    "href": "management/smoking-cessation.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is lost by agreeing with the patient. She tells you it is old age; the marks go to the candidate who identifies possible wet AMD, refers with the right urgency, and takes her fear seriously.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting “just old age”.",
     "why": "Recent distortion suggests wet AMD, which is treatable if caught early.",
     "fix": "Name AMD and explain the treatable type."
    },
    {
     "dom": "tasks",
     "fail": "Not asking how quickly it came on.",
     "why": "Speed of onset sets the urgency.",
     "fix": "“When did it start, and has it changed in the last few days?”"
    },
    {
     "dom": "tasks",
     "fail": "Referring routinely, or giving a vague urgency such as “within days”.",
     "why": "NICE NG82: urgent referral to a macula service, normally within 1 working day, for suspected wet active AMD.",
     "fix": "Refer urgently today via the local macula pathway."
    },
    {
     "dom": "tasks",
     "fail": "Recommending eye vitamins to a smoker.",
     "why": "NG82 has no practice recommendation on supplements, and beta-carotene raises lung cancer risk in smokers.",
     "fix": "Focus on stopping smoking."
    },
    {
     "dom": "rto",
     "fail": "Missing the fear rooted in her mother’s sight loss.",
     "why": "Her unspoken concern about dependence drives her fatalism.",
     "fix": "Ask what worries her and explain that side vision is spared."
    },
    {
     "dom": "gs",
     "fail": "No driving or falls advice.",
     "why": "Central loss affects safety at home and on the road.",
     "fix": "Advise no driving until assessed; explain the DVLA rules; consider falls."
    },
    {
     "dom": "gs",
     "fail": "No safety-net for the other eye.",
     "why": "The fellow eye is at risk and change there also needs rapid review.",
     "fix": "Daily each-eye check; same-day contact for new change."
    }
   ]
  }
 },
 "asthma-post-attack": {
  "stem": {
   "name": "Kwame Boateng",
   "age": "31-year-old man",
   "pmh": [
    "Asthma",
    "A&E attendance with an acute asthma attack 10 days ago"
   ],
   "meds": [
    "Asthma preventer and reliever inhalers on repeat",
    "Oral prednisolone course from A&E (recent)"
   ],
   "allergy": "Not recorded in the booking note",
   "recent": "A&E discharge summary: acute asthma attack treated with nebulisers and a course of oral prednisolone.",
   "reason": "Post-A&E asthma review (video)."
  },
  "knowledge": {
   "guideline": "[1] NICE NG245 (asthma: diagnosis, monitoring and chronic asthma management, 2024, joint with BTS and SIGN) · [2] NICE QS25 (asthma, 2013, updated 2018) · [3] RCP National Review of Asthma Deaths, Why asthma still kills (2014) · [4] MHRA Drug Safety Update (April 2025): SABA overuse in asthma · [5] UKHSA Green Book chapter 19 (influenza) · [6] BNF",
   "summary": "An attack needing A&E and oral steroids is uncontrolled asthma and one of the strongest markers of future severe attacks. Find out why it happened — especially the preventer story — without blame, then optimise treatment, check technique, write an action plan and arrange proper follow-up. NICE QS25 expects GP follow-up within 2 working days of emergency care, so this review is already late.",
   "points": [
    {
     "h": "Why this review matters",
     "t": "A recent attack needing emergency care or oral steroids predicts further attacks. NICE NG245 [1] counts any exacerbation needing oral corticosteroids as uncontrolled asthma. The National Review of Asthma Deaths [3] found many deaths followed missed warning signs, poor preventer use and no action plan."
    },
    {
     "h": "Timing",
     "t": "NICE QS25 [2] statement 4: people treated in an emergency care setting for an asthma attack are followed up by their general practice within 2 working days of discharge, to explore why it happened and reduce the risk of another. A review at 10 days is late: acknowledge it and check the practice’s recall system."
    },
    {
     "h": "Reconstruct the attack",
     "t": "Triggers (here a viral cold), how quickly it built, reliever use before the attack, how long before help was sought, and preventer use in the preceding weeks. Check prescription records for preventer and reliever issues, oral steroid courses and previous attendances (NICE NG245 [1])."
    },
    {
     "h": "Fix the basics, then treatment",
     "t": "NICE NG245 [1]: before changing medicines address adherence, inhaler technique, triggers and alternative diagnoses. For people aged 12 and over not controlled on regular low-dose ICS plus SABA, consider low-dose MART with ICS/formoterol. MHRA (April 2025) [4]: do not prescribe a SABA without an ICS."
    },
    {
     "h": "Steroid course",
     "t": "Confirm the prednisolone course was completed as directed and ask about side effects. Doses per BNF [6]. More than one course a year is a marker for review and, with repeated courses, for bone health and specialist input."
    },
    {
     "h": "Action plan",
     "t": "A written personalised asthma action plan (NICE QS25 [2]) covering usual treatment, early warning signs such as a cold with rising reliever need, how to increase treatment, and when to call 999. Build the plan around what happened this time."
    },
    {
     "h": "Prevention",
     "t": "Check flu vaccine eligibility under Green Book chapter 19 [5], smoking and other triggers, and book the next review. Refer for specialist assessment if control remains poor despite good adherence and technique (NICE NG245 [1])."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi Kwame, I’m Dr Evans. Thanks for joining. I know you ended up in A&E with your chest recently. How are you doing now?",
    "dom": "rto",
    "why": "Open start; acknowledges the event"
   },
   {
    "who": "pt",
    "text": "Honestly, I’m back to normal. It was a one-off — I had a bad cold and my chest flared. I don’t think there’s much to discuss."
   },
   {
    "who": "dr",
    "text": "I’m really glad you feel better. I won’t keep you longer than we need, but an attack that needs A&E and steroids is worth understanding, so we can stop the next one. Can we go through what happened, look at your inhalers, and make a plan for next time?",
    "dom": "gs",
    "why": "Validates, then gives a clear reason and structure"
   },
   {
    "who": "pt",
    "text": "If you think it’s worth it."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Talk me through it. How did it build up, and at what point did you decide to go to A&E?",
    "dom": "tasks",
    "why": "Reconstructs the attack and the time to seek help"
   },
   {
    "who": "pt",
    "text": "The cold started, I got wheezy, and I kept using the blue one. When it stopped helping, I went in."
   },
   {
    "who": "dr",
    "text": "That sounds frightening. When the blue one stopped working, what went through your mind?",
    "dom": "rto",
    "why": "Picks up the emotional cue inside the minimisation"
   },
   {
    "who": "pt",
    "text": "Yeah… it was scary, to be fair. I didn’t want to make a fuss."
   },
   {
    "who": "dr",
    "text": "Thanks for saying that. Can I ask about the brown inhaler? A lot of people drift off it when they feel well — it’s really common, and I’m not telling you off. In the weeks before the cold, how often were you taking it?",
    "dom": "tasks",
    "why": "Non-judgemental adherence question"
   },
   {
    "who": "pt",
    "text": "Honestly? On and off. When I felt fine I didn’t see the point."
   },
   {
    "who": "dr",
    "text": "That’s really useful, thank you. And before the cold, how often were you using the blue one, and did your chest wake you at night?",
    "dom": "tasks",
    "why": "Current control and reliever use"
   },
   {
    "who": "pt",
    "text": "Now and then. I didn’t really keep track."
   },
   {
    "who": "dr",
    "text": "Have you ever needed steroid tablets, A&E or a hospital stay for your asthma before this, or intensive care?",
    "dom": "tasks",
    "why": "Past severe attacks — key risk factors"
   },
   {
    "who": "pt",
    "text": "Not that I remember."
   },
   {
    "who": "dr",
    "text": "Did you finish the steroid tablets from A&E, and any problems with them?",
    "dom": "tasks",
    "why": "Confirms the course was completed"
   },
   {
    "who": "pt",
    "text": "Yeah, I finished them."
   },
   {
    "who": "dr",
    "text": "And does anything else set your chest off — and do you smoke or vape?",
    "dom": "tasks",
    "why": "Triggers and smoking"
   },
   {
    "who": "pt",
    "text": "Colds, mainly. I don’t really notice anything else."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said you didn’t want to make a fuss, and you’d rather not make a big deal of this. What is it about the fuss you’d rather avoid?",
    "dom": "rto",
    "why": "Explores the hidden agenda behind the minimising"
   },
   {
    "who": "pt",
    "text": "I don’t want to be one of those sickly people with inhalers everywhere. I’m 31. I just want to get on with things."
   },
   {
    "who": "dr",
    "text": "That makes complete sense. My aim is the same as yours — less asthma getting in the way, not more.",
    "dom": "rto",
    "why": "Aligns the plan with his goal"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s how I see it. The preventer calms swelling inside the airways that you can’t feel. When it’s taken on and off, that swelling builds quietly, and then a cold tips it over. The blue one opens things up for a while, but it can’t touch the swelling — which is why it stopped working. So this wasn’t just bad luck with a cold.",
    "dom": "tasks",
    "why": "Explains the likely mechanism without blame"
   },
   {
    "who": "pt",
    "text": "So it could happen again."
   },
   {
    "who": "dr",
    "text": "It could — having one attack like this makes another more likely. The good news is that the things that reduce the risk are simple, and they fit with you not wanting inhalers everywhere.",
    "dom": "rto",
    "why": "Honest about risk, framed to motivate"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "One option is a single inhaler that has the preventer and a quick-acting reliever in it. You take it morning and night, and if you’re wheezy you take an extra puff of the same one instead of the blue. So when you reach for relief, you’re treating the swelling too. One inhaler rather than two.",
    "dom": "tasks",
    "why": "Offers low-dose MART per NICE NG245"
   },
   {
    "who": "pt",
    "text": "One inhaler I could live with."
   },
   {
    "who": "dr",
    "text": "Great. Could you show me how you use your inhaler now, on camera?",
    "dom": "tasks",
    "why": "Checks technique"
   },
   {
    "who": "pt",
    "text": "Shake, puff, breathe."
   },
   {
    "who": "dr",
    "text": "Close. Breathe out fully first, then press as you start a slow breath in, and hold for about ten seconds. I’ll also write you an action plan built on what happened: a cold plus needing extra puffs is your early warning, what to do, and when it’s 999.",
    "dom": "tasks",
    "why": "Corrects technique and personalises the action plan"
   },
   {
    "who": "pt",
    "text": "Makes sense. I didn’t really know when to go last time."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "That’s what the plan is for. So: if you need extra puffs more and more, or they’re not lasting, contact us the same day. If you’re struggling to talk in sentences, or the inhaler isn’t helping, call 999 — don’t wait.",
    "dom": "gs",
    "why": "Specific red flags linked to his own attack"
   },
   {
    "who": "pt",
    "text": "Okay. I won’t leave it."
   },
   {
    "who": "dr",
    "text": "Can you tell me back the plan in your own words?",
    "dom": "gs",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "New single inhaler every day, extra puff when wheezy, action plan, same day if it’s not lasting, 999 if I can’t talk."
   },
   {
    "who": "dr",
    "text": "Spot on. I’ll see you again in two to four weeks to check how it’s going, and we’ll look at your flu jab. I should say — we ought to have seen you sooner after A&E, and I’m looking at why that didn’t happen. Thanks, Kwame.",
    "dom": "gs",
    "why": "Follow-up, prevention and candour about the delay"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; validated that he feels well before explaining why the review matters.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Not wanting to be a “sickly person”, wish not to fuss, smoking and triggers.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I didn’t want to make a fuss” and the fear when the reliever stopped working.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a one-off cold), concern (being seen as unwell, fuss), expectation (quick review).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Prescription record review of preventer and reliever issues; technique on video; validated control questionnaire; objective tests if uncertain.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Viral trigger on a background of under-treated inflammation versus poor technique, other triggers or an alternative diagnosis.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about previous attacks, admissions, ICU, delayed help-seeking and completion of the steroid course.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named uncontrolled asthma with a recent attack and an increased risk of another.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Low-dose MART (NICE NG245); technique corrected; personalised written action plan.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Triggers, smoking and flu vaccine eligibility; recognised the late review against NICE QS25.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Same-day and 999 triggers; teach-back; review booked in two to four weeks.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Urgent & unscheduled care"
   ],
   "stem": {
    "name": "Kwame Boateng",
    "age": "31 years · male",
    "pmh": [
     "Asthma",
     "A&E attendance with acute asthma 10 days ago"
    ],
    "meds": [
     "Preventer and reliever inhalers on repeat",
     "Recent oral prednisolone course"
    ],
    "allergy": "Not recorded",
    "recent": "⚠ A&E 10 days ago: acute asthma attack — nebulisers and oral prednisolone. Post-attack review.",
    "reason": "“It was a one-off, I just had a cold. I’m back to normal — no need to fuss.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and validate",
     "d": "Glad he feels well; give the reason for the review in one sentence."
    },
    {
     "t": "1–5",
     "h": "Reconstruct",
     "d": "Build-up, time to help, preventer use before the attack, reliever use, night symptoms, past attacks, steroid course, triggers, smoking."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Not wanting fuss or to be seen as unwell."
    },
    {
     "t": "6–8",
     "h": "Explain",
     "d": "Quiet inflammation plus a cold; one attack raises the risk of another."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Low-dose MART, technique, personalised action plan, red flags, teach-back, review, candour about the delay."
    }
   ],
   "wordPics": {
    "fail": "Accepts “just a cold” and closes quickly; or lectures about adherence and blames him; no action plan, no technique check, no follow-up.",
    "pass": "Explains why the review matters, elicits preventer use without blame, optimises treatment, gives an action plan and books follow-up.",
    "exc": "All of the above, plus: reconstructs the attack including the delay in seeking help; links the plan to his wish not to be a “sickly person”; offers low-dose MART as NG245 recommends; builds the action plan around his own early warning signs; notes that follow-up should have been within 2 working days."
   },
   "avoid": [
    {
     "dont": "“Why weren’t you taking your preventer?”",
     "instead": "“Lots of people drift off it when they feel well — how often were you taking it?”",
     "why": "Blame produces a defensive answer, not the true story."
    },
    {
     "dont": "“You could have died.”",
     "instead": "“Needing A&E and steroids means your asthma was genuinely dangerous that day — let’s stop it happening again.”",
     "why": "Honesty with a way forward motivates; fear alone disengages."
    },
    {
     "dont": "“Glad you’re better — see you at your annual review.”",
     "instead": "“I’d like to see you again in a few weeks to check how the new plan is going.”",
     "why": "A recent attack needs structured follow-up, not annual recall."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Identity and illness",
     "t": "Young adults often resist being seen as ill. Frame treatment as what lets him get on with life; one inhaler can feel less medical than two."
    },
    {
     "h": "Work",
     "t": "Ask whether the attack affected work; a fit note may be needed if recovery is incomplete (self-certification covers the first 7 days)."
    }
   ],
   "legal": [
    {
     "h": "Safe prescribing",
     "t": "MHRA Drug Safety Update (April 2025): do not prescribe a SABA without a concomitant ICS."
    }
   ],
   "professional": [
    {
     "h": "Post-attack follow-up standard",
     "t": "NICE QS25 statement 4: general practice follow-up within 2 working days of emergency care for an asthma attack. A late review is a system issue to reflect on and fix (significant event or audit)."
    },
    {
     "h": "Candour",
     "t": "GMC Good medical practice (2024): be open when care falls short. Telling him the review should have been sooner builds trust."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Community pharmacy New Medicine Service for the new inhaler; Asthma + Lung UK technique videos and action plan templates; practice asthma nurse review."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Previous near-fatal attack, ICU or admissions",
     "More than one oral steroid course or A&E attendance a year",
     "Delay in seeking help during attacks",
     "High reliever use, poor preventer use, no action plan"
    ],
    "psychosocial": [
     "Not wanting to be a “sickly person”",
     "Reluctance to make a fuss, which delayed help",
     "Work, smoking and other triggers"
    ],
    "ice": [
     "Idea: “A one-off caused by a cold.”",
     "Concern: being seen as unwell; making a fuss",
     "Expectation: a quick review with nothing to change"
    ]
   },
   "diagnosis": "“Needing A&E and steroids means your asthma was out of control that day. The likely reason is swelling building up while the preventer was on and off, and the cold tipped it over.”",
   "diagnosisLay": "“Think of the airway lining like a smouldering fire. The preventer keeps it damped down. When it’s taken on and off, the embers build, and a cold is the gust of wind that sets it alight.”",
   "management": {
    "reflectIce": "“You don’t want asthma to take over your life — that’s exactly what this plan is for.”",
    "psychosocial": "Use his wish for less fuss: one inhaler, a simple plan, and clear permission to seek help early next time.",
    "sharedPlan": [
     "Low-dose MART with ICS/formoterol (NICE NG245); dose and daily maximum per BNF",
     "Technique corrected; personalised written action plan built around a cold as the trigger",
     "Flu vaccine eligibility; triggers and smoking; review the practice recall process"
    ],
    "safetyNet": [
     "Same day: rising need for extra puffs or relief not lasting",
     "999: struggling to speak, no response to the inhaler",
     "Review in two to four weeks, then regular review"
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
    "ic": "💠",
    "t": "Asthma protocol",
    "s": "MART, action plans and step-up · NG245",
    "href": "management/asthma.html"
   },
   {
    "ic": "🗺️",
    "t": "Breathlessness pathway",
    "s": "Visual algorithm",
    "href": "algorithms/breathlessness.html"
   }
  ],
  "pitfalls": {
   "intro": "The trap is a pleasant, short consultation that agrees with “just a cold”. The marks are in treating the attack as a warning, getting the honest preventer story, and leaving him with a plan he will use.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting “it was just a cold” and closing in four minutes.",
     "why": "NICE NG245 counts any attack needing oral steroids as uncontrolled asthma; missing it is unsafe.",
     "fix": "One sentence of purpose: “An attack like this is worth understanding so we stop the next one.”"
    },
    {
     "dom": "rto",
     "fail": "Asking “Were you taking your preventer?” in a tone that expects a no.",
     "why": "“Judgemental approach” feedback; he defends rather than discloses.",
     "fix": "Normalise first: “Lots of people drift off it when they feel well.”"
    },
    {
     "dom": "tasks",
     "fail": "Not asking how long he waited before going to A&E.",
     "why": "Delayed help-seeking is a recurring factor in asthma deaths (NRAD 2014) and must shape the action plan.",
     "fix": "“At what point did you decide to get help?” Then build the answer into the plan."
    },
    {
     "dom": "tasks",
     "fail": "Doubling the preventer dose without checking technique or adherence.",
     "why": "NICE NG245: address adherence and technique before changing medicines.",
     "fix": "Technique check on camera, then low-dose MART."
    },
    {
     "dom": "gs",
     "fail": "A generic printed action plan handed over without discussion.",
     "why": "Action plans work when they are personalised and understood.",
     "fix": "Use his attack: “A cold plus needing extra puffs is your early warning.”"
    },
    {
     "dom": "gs",
     "fail": "No follow-up date — “see you at your annual review”.",
     "why": "NICE QS25 expects early follow-up after emergency care; a recent attack needs a close review.",
     "fix": "Book two to four weeks, and acknowledge this review should have been sooner."
    }
   ]
  }
 },
 "asthma-saba-overuse": {
  "stem": {
   "name": "Tanya Brooks",
   "age": "24-year-old woman",
   "pmh": [
    "Asthma"
   ],
   "meds": [
    "Salbutamol inhaler as required (7 issued in the last 12 months)",
    "Inhaled corticosteroid preventer on repeat — rarely collected"
   ],
   "allergy": "Not recorded in the booking note",
   "recent": "Records flag: seventh salbutamol request in 12 months; preventer rarely collected.",
   "reason": "Video consultation booked by the practice after a request for another blue inhaler."
  },
  "knowledge": {
   "guideline": "[1] NICE NG245 (asthma: diagnosis, monitoring and chronic asthma management, 2024, joint with BTS and SIGN) · [2] MHRA Drug Safety Update (April 2025): SABA overuse in asthma · [3] RCP National Review of Asthma Deaths, Why asthma still kills (2014) · [4] NICE QS25 (asthma, 2013, updated 2018) · [5] UKHSA Green Book chapter 19 (influenza) · [6] NICE NG209 (tobacco, 2021) · [7] BNF",
   "summary": "Seven relievers in a year with little preventer is uncontrolled, high-risk asthma, not a repeat request. Assess control, find out why the preventer is not used, check technique, then move her to low-dose MART with ICS/formoterol so every reliever dose also treats inflammation. Never issue a SABA without an ICS.",
   "points": [
    {
     "h": "Why this request matters",
     "t": "MHRA Drug Safety Update (April 2025) [2]: overuse of SABA, with or without maintenance therapy, is linked to severe attacks and death; do not prescribe a SABA without a concomitant ICS, and review anyone needing their reliever more than twice a week. Using 3 or more SABA inhalers a year is associated with more exacerbations. The National Review of Asthma Deaths [3] found excess reliever and too little preventer prescribing in many of those who died."
    },
    {
     "h": "What uncontrolled means",
     "t": "NICE NG245 [1]: uncontrolled asthma includes any exacerbation needing oral corticosteroids, or frequent symptoms such as using a reliever on 3 or more days a week or night waking 1 or more times a week. Check prescription records for reliever and preventer issues, oral steroid courses and emergency attendances; consider a validated questionnaire such as the Asthma Control Test or Asthma Control Questionnaire."
    },
    {
     "h": "Fix the basics first",
     "t": "NICE NG245 [1]: before starting or changing medicines, address possible reasons for poor control — adherence, inhaler technique, alternative diagnoses and triggers such as smoking. Check adherence and technique at every review."
    },
    {
     "h": "The regimen",
     "t": "NICE NG245 [1]: for people aged 12 and over whose asthma is not controlled on regular low-dose ICS plus as-needed SABA, consider low-dose MART — one ICS/formoterol inhaler taken regularly and as the reliever, usually with no separate SABA. For newly diagnosed asthma, as-needed ICS/formoterol (AIR) is the starting point. Device, dose and maximum daily puffs per BNF [7]."
    },
    {
     "h": "Self-management",
     "t": "Give a personalised written asthma action plan: usual treatment, signs of worsening, what to do, and when to get emergency help. NICE QS25 [4] includes a personalised action plan and monitoring of control at each review."
    },
    {
     "h": "Triggers and prevention",
     "t": "Ask about smoking and vaping (NICE NG209 [6]: very brief advice and referral), allergens, NSAIDs and work exposures. Check flu vaccine eligibility under Green Book chapter 19 [5]."
    },
    {
     "h": "Follow-up",
     "t": "Review within a few weeks of the switch: control, technique, how often she needs extra doses, and any oral steroid use. If still uncontrolled on low-dose MART, NG245 [1] steps up to moderate-dose MART and then objective tests and specialist advice."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi Tanya, I’m Dr Rahman. Thanks for joining. I know you asked for another blue inhaler — tell me how your asthma has been.",
    "dom": "rto",
    "why": "Open start that acknowledges her request"
   },
   {
    "who": "pt",
    "text": "Fine, honestly. I get through the blue ones, but a couple of puffs and I’m grand. I don’t bother much with the brown one. I feel fine, so it can’t be that bad, can it?"
   },
   {
    "who": "dr",
    "text": "I’ll make sure you’re not left without a reliever today — I promise that. Can I spend a few minutes on how your asthma is really doing? It’s worth it, and then we’ll sort the inhaler.",
    "dom": "gs",
    "why": "Reassures on the request and agrees an agenda"
   },
   {
    "who": "pt",
    "text": "Okay, as long as I get it."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "How many days a week do you find yourself using the blue one?",
    "dom": "tasks",
    "why": "Quantifies reliever use"
   },
   {
    "who": "pt",
    "text": "Most days, if I’m honest. I don’t really count."
   },
   {
    "who": "dr",
    "text": "Does your asthma ever wake you at night, or stop you doing things — exercise, work, getting about?",
    "dom": "tasks",
    "why": "Night waking and activity limitation"
   },
   {
    "who": "pt",
    "text": "Sometimes I wake up coughing. I just use the blue one and go back to sleep. I’m used to it."
   },
   {
    "who": "dr",
    "text": "Have you needed steroid tablets, out-of-hours help or A&E for your chest in the last year, or ever been in hospital with it?",
    "dom": "tasks",
    "why": "Exacerbations and past severe attacks — the strongest risk markers"
   },
   {
    "who": "pt",
    "text": "I don’t think so. Not that I remember."
   },
   {
    "who": "dr",
    "text": "I’ll check the record too. Tell me about the brown one — what do you understand it does, and what gets in the way of taking it?",
    "dom": "tasks",
    "why": "Explores beliefs and barriers to the preventer"
   },
   {
    "who": "pt",
    "text": "I thought it was for when it’s bad. And I forget. It doesn’t do anything when I take it, not like the blue."
   },
   {
    "who": "dr",
    "text": "That’s really helpful, and a lot of people think exactly that. Anything you’ve noticed sets it off? And do you smoke or vape at all?",
    "dom": "tasks",
    "why": "Triggers and smoking"
   },
   {
    "who": "pt",
    "text": "Not sure really. I don’t pay much attention."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "When you think about your asthma, is anything worrying you about it — or about the inhalers?",
    "dom": "rto",
    "why": "Invites concerns rather than assuming"
   },
   {
    "who": "pt",
    "text": "Not really. I just want the blue one so I don’t run out."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Can I be honest with you? Seven blue inhalers in a year, using it most days and waking at night, tells me your asthma isn’t as settled as it feels. The blue inhaler opens the airways for a few hours, but it doesn’t treat the swelling inside them that causes attacks. Relying on it is one of the things that puts people at risk of a serious attack.",
    "dom": "tasks",
    "why": "Reframes SABA overuse as a risk marker with a reason"
   },
   {
    "who": "pt",
    "text": "Serious? It works though."
   },
   {
    "who": "dr",
    "text": "It does, in the moment — that’s the catch. It hides the problem. The brown one works quietly on the swelling, which is why you don’t feel it doing anything. I’m not saying this to scare you; I’m saying it because it’s very fixable.",
    "dom": "rto",
    "why": "Corrects the misconception without frightening her"
   },
   {
    "who": "pt",
    "text": "Nobody’s really explained it like that."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s an idea that fits how you use inhalers. There’s a single combination inhaler with a preventer and a quick-acting reliever in it. You take it every day, and when you’re wheezy you take an extra puff of the same inhaler instead of the blue one. So every time you reach for relief, you’re also treating the swelling.",
    "dom": "tasks",
    "why": "Offers low-dose MART as NG245 recommends for uncontrolled ICS plus SABA"
   },
   {
    "who": "pt",
    "text": "So one inhaler instead of two? That’s easier. Would I still have a blue one?"
   },
   {
    "who": "dr",
    "text": "Usually you wouldn’t need it — the new one is your reliever. I’ll explain how many extra puffs you can take in a day and what to do if you’re using more than that. Could you show me how you take your inhaler now? Hold it up so I can see.",
    "dom": "tasks",
    "why": "Explains the plan and checks technique on video"
   },
   {
    "who": "pt",
    "text": "Like this… shake, puff, breathe in."
   },
   {
    "who": "dr",
    "text": "Nearly — try breathing out fully first, then a slow, steady breath in as you press, and hold it for about ten seconds. The pharmacist can check it with the new device too. I’ll also send you a written asthma action plan so you know what to do if it gets worse.",
    "dom": "tasks",
    "why": "Corrects technique and provides an action plan"
   },
   {
    "who": "pt",
    "text": "Okay. That’s fine."
   },
   {
    "who": "dr",
    "text": "What do you think you’ll find hardest about the new way?",
    "dom": "rto",
    "why": "Checks feasibility and invites her view"
   },
   {
    "who": "pt",
    "text": "Remembering the morning dose, probably."
   },
   {
    "who": "dr",
    "text": "A lot of people keep it by their toothbrush or set a phone reminder. Would either work for you?",
    "dom": "rto",
    "why": "Supports adherence with her own choice"
   },
   {
    "who": "pt",
    "text": "Toothbrush. I can do that."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you need extra puffs more and more, if it’s not lasting, or you’re breathless even at rest, contact us the same day. If you can’t speak in full sentences, your lips look blue, or it isn’t helping at all, call 999.",
    "dom": "gs",
    "why": "Specific attack red flags and when to act"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "So I know I’ve explained it well — tell me how you’ll use the new inhaler.",
    "dom": "gs",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Every morning and night, plus a puff when I’m wheezy instead of the blue one. And ring you if I’m using it loads."
   },
   {
    "who": "dr",
    "text": "Exactly right. I’ll review you in about four weeks to see how you’re getting on, and check whether you’re due a flu jab. Thanks, Tanya.",
    "dom": "gs",
    "why": "Defined follow-up and prevention"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; acknowledged the reliever request and promised she would not go without, before exploring.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Impact on sleep, work and activity; forgetting and routine; smoking or vaping asked.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I’m used to it” and “it doesn’t do anything” and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (the blue inhaler works so asthma can’t be bad), concern (running out), expectation (quick reissue).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Prescription record review, validated control questionnaire, technique check on video; objective tests if control stays poor.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Uncontrolled asthma from preventer non-use versus poor technique, triggers or an alternative diagnosis.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about oral steroid courses, A&E attendances, admissions, night waking and reliever frequency.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named uncontrolled, high-risk asthma from SABA overuse and ICS under-use.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Low-dose MART (NICE NG245); no SABA without ICS; technique corrected; written action plan.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Triggers and smoking addressed; flu vaccine eligibility; adherence support she chose.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Same-day and 999 red flags; teach-back; review in about four weeks.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Urgent & unscheduled care"
   ],
   "stem": {
    "name": "Tanya Brooks",
    "age": "24 years · female",
    "pmh": [
     "Asthma"
    ],
    "meds": [
     "Salbutamol inhaler as required",
     "ICS preventer on repeat (rarely collected)"
    ],
    "allergy": "Not recorded",
    "recent": "⚠ 7th salbutamol inhaler requested in 12 months. Preventer rarely collected.",
    "reason": "“I just need another blue inhaler — I get through them, but they sort me out.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and reassure",
     "d": "Promise she won’t be left without a reliever, then ask for a few minutes on control."
    },
    {
     "t": "1–5",
     "h": "Assess control",
     "d": "Reliever days per week, night waking, activity, oral steroids, A&E, admissions, preventer beliefs, triggers, smoking."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "“It works so it can’t be bad”; wants to avoid running out."
    },
    {
     "t": "6–8",
     "h": "Reframe",
     "d": "Seven relievers a year is a warning sign; blue relieves, preventer treats."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Low-dose MART, technique, action plan, adherence tip, red flags, teach-back, review in four weeks."
    }
   ],
   "wordPics": {
    "fail": "Reissues salbutamol without comment; or refuses it and lectures about asthma deaths; never asks about night symptoms or oral steroids; no action plan.",
    "pass": "Recognises SABA overuse as poor control, assesses control, explains preventer versus reliever, changes the regimen and gives an action plan with review.",
    "exc": "All of the above, plus: explores why the preventer isn’t used and answers it; offers low-dose MART as NG245 recommends; corrects technique on screen; agrees an adherence prompt she chose; teach-back; she leaves engaged rather than frightened."
   },
   "avoid": [
    {
     "dont": "“Seven inhalers? People die from overusing these.”",
     "instead": "“Seven in a year tells me your asthma isn’t as settled as it feels — and it’s very fixable.”",
     "why": "Fear without a plan drives disengagement."
    },
    {
     "dont": "“I can’t give you another blue inhaler.”",
     "instead": "“You won’t be left without a reliever. Let’s make sure it’s the right one.”",
     "why": "Refusing a reliever is unsafe; changing to a combination reliever is the fix."
    },
    {
     "dont": "“You need to take your brown inhaler twice a day.” (and nothing more)",
     "instead": "“What gets in the way of taking the brown one?”",
     "why": "Instructions without understanding her beliefs rarely change behaviour."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Normalised symptoms",
     "t": "Young adults often accept night cough and breathlessness as normal. Routine, forgetting and the lack of felt benefit from ICS are common barriers."
    },
    {
     "h": "Cost",
     "t": "In England, a prescription prepayment certificate can reduce costs for people paying for several items; one combination inhaler may also reduce the number of items."
    }
   ],
   "legal": [
    {
     "h": "Safe prescribing",
     "t": "MHRA Drug Safety Update (April 2025): do not prescribe a SABA without a concomitant ICS. Practices should have a system that flags excess reliever requests for clinical review."
    }
   ],
   "professional": [
    {
     "h": "Repeat prescribing governance",
     "t": "A seventh reliever request should trigger a review, not an automatic reissue (GMC Good practice in prescribing and managing medicines and devices, 2021: review repeat prescriptions)."
    },
    {
     "h": "Shared decisions",
     "t": "Explain options and respect her choice of regimen and adherence prompt; document the discussion and the plan."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Community pharmacy New Medicine Service when a new inhaler starts, inhaler technique videos from Asthma + Lung UK, and practice asthma nurse review."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Previous severe or near-fatal attack, ICU or admission",
     "Oral steroid courses or A&E attendances in the last year",
     "Reliever needed most days, night waking, or relief lasting less time",
     "Breathless at rest or unable to speak in sentences — emergency"
    ],
    "psychosocial": [
     "What she believes the preventer does",
     "Routine, forgetting, and lack of felt benefit",
     "Smoking or vaping, work and home triggers"
    ],
    "ice": [
     "Idea: “The blue works, so it can’t be that bad.”",
     "Concern: running out of her reliever",
     "Expectation: a quick blue inhaler reissue"
    ]
   },
   "diagnosis": "“Needing the blue inhaler most days and seven in a year means your asthma isn’t controlled, even though you feel used to it. It’s the swelling in the airways that isn’t being treated.”",
   "diagnosisLay": "“The blue inhaler is like opening a window when a room is smoky. The preventer puts out the fire. You’ve been opening windows for a year.”",
   "management": {
    "reflectIce": "“You said the blue one works — and it does, for a few hours. That’s exactly why it can hide what’s going on underneath.”",
    "psychosocial": "Use her preference for a single inhaler; link the dose to a habit she already has; avoid scare tactics.",
    "sharedPlan": [
     "Low-dose MART with an ICS/formoterol inhaler (NICE NG245); no separate SABA usually needed; dose and daily maximum per BNF",
     "Technique check and correction; pharmacy New Medicine Service",
     "Written personalised asthma action plan; triggers and smoking; flu vaccine eligibility"
    ],
    "safetyNet": [
     "Same day: needing more and more extra puffs, relief not lasting, breathless at rest",
     "999: can’t speak in sentences, blue lips, no response to reliever",
     "Review in about four weeks"
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
    "ic": "💠",
    "t": "Asthma protocol",
    "s": "AIR, MART and step-up · NG245",
    "href": "management/asthma.html"
   },
   {
    "ic": "🗺️",
    "t": "Breathlessness pathway",
    "s": "Visual algorithm",
    "href": "algorithms/breathlessness.html"
   }
  ],
  "pitfalls": {
   "intro": "This station hides a high-risk patient inside a routine request. The marks are in recognising the risk, understanding why the preventer isn’t used, and changing the regimen — not in reciting asthma death statistics.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Reissuing salbutamol and suggesting she books an asthma review “sometime”.",
     "why": "“Management plan not in line with current UK best practice.” MHRA (April 2025) and NICE NG245 treat SABA reliance as a safety issue.",
     "fix": "Review now: control, risk, preventer use, and a regimen change today."
    },
    {
     "dom": "tasks",
     "fail": "Doubling the ICS or adding a LABA without checking adherence or technique.",
     "why": "NICE NG245 says address adherence, technique and triggers before changing medicines.",
     "fix": "Ask what gets in the way, check technique on video, then change the regimen."
    },
    {
     "dom": "tasks",
     "fail": "Leaving her on ICS plus SABA with a stern word about adherence.",
     "why": "For uncontrolled asthma on regular low-dose ICS plus SABA, NG245 recommends considering low-dose MART.",
     "fix": "Offer the single ICS/formoterol inhaler for daily and reliever use."
    },
    {
     "dom": "rto",
     "fail": "Opening with “You could die from overusing this.”",
     "why": "“Uses fear rather than explanation.” She switches off and may not return.",
     "fix": "Explain why the blue hides the problem, then show the fix."
    },
    {
     "dom": "rto",
     "fail": "Not asking what she thinks the brown inhaler does.",
     "why": "Her belief (“only when it’s bad”, “it doesn’t do anything”) is the root of the problem; missing it misses the cue.",
     "fix": "“What do you understand it does, and what gets in the way?”"
    },
    {
     "dom": "gs",
     "fail": "No action plan, no technique check, no follow-up date.",
     "why": "Vague closure is a common failing statement in long-term condition stations.",
     "fix": "Written action plan, technique on screen, teach-back, review in four weeks."
    }
   ]
  }
 },
 "breathless-anxiety": {
  "stem": {
   "name": "Hollie Vance",
   "age": "26-year-old woman",
   "pmh": [
    "No relevant past history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded in the booking note",
   "recent": "Booked video consultation: recurrent episodes of breathlessness.",
   "reason": "“I keep getting breathless and tingly — I think it’s panic, but what if it’s my heart?”"
  },
  "knowledge": {
   "guideline": "[1] NICE CG113 (generalised anxiety disorder and panic disorder in adults, 2011, updated 2020) · [2] NICE NG245 (asthma, 2024, joint with BTS and SIGN) · [3] NICE NG145 (thyroid disease, 2019) · [4] NICE NG158 (venous thromboembolic diseases, 2020, updated August 2023) · [5] NICE CG109 (transient loss of consciousness in over 16s, 2010) · [6] BNF",
   "summary": "Episodic breathlessness with perioral and finger tingling, palpitations and dread at stressful times fits panic with over-breathing, but that label comes after a proportionate check for asthma, arrhythmia, anaemia, thyroid disease and, if risk factors, PE. Then make a confident positive diagnosis, explain the physiology, and offer CBT-based treatment.",
   "points": [
    {
     "h": "Diagnosis of exclusion, made positively",
     "t": "Panic and hyperventilation should be diagnosed after the dangerous causes are reasonably excluded, and then stated confidently. Reassurance works when it rests on real checks the patient understands."
    },
    {
     "h": "What to exclude in a young adult",
     "t": "Asthma: wheeze, night or exercise symptoms, atopy; NICE NG245 [2] starts objective testing in adults with blood eosinophils or FeNO, then spirometry with reversibility. Arrhythmia: palpitations with syncope, exertional symptoms or a family history of sudden cardiac death need an ECG and cardiology thinking (NICE CG109 [5] for blackouts). Hyperthyroidism: weight loss, tremor, heat intolerance; TFTs (NICE NG145 [3]). Anaemia: FBC. PE only if risk factors or pleuritic pain (NICE NG158 [4])."
    },
    {
     "h": "Features that fit panic",
     "t": "Onset in stressful situations, perioral and finger tingling, carpopedal spasm, light-headedness, chest tightness, a sense of dread, and full recovery within 20 to 30 minutes, with normal findings between episodes. These support the diagnosis; they do not replace exclusion."
    },
    {
     "h": "The physiology",
     "t": "Over-breathing lowers carbon dioxide in the blood (respiratory alkalosis), causing tingling, light-headedness and chest tightness. Those sensations are frightening, so breathing speeds up further — a self-sustaining loop."
    },
    {
     "h": "Treatment",
     "t": "NICE CG113 [1] for panic disorder: offer CBT, an SSRI licensed for panic disorder, or CBT-based self-help, according to preference; NHS Talking Therapies accepts self-referral. Do not prescribe benzodiazepines, sedating antihistamines or antipsychotics for panic disorder. Teach slow controlled breathing; paper-bag rebreathing is no longer advised."
    },
    {
     "h": "Assess severity and mood",
     "t": "Ask about frequency, avoidance, impact on work and life, low mood, alcohol and caffeine, and self-harm thoughts. A validated tool such as GAD-7 helps track response."
    },
    {
     "h": "Safety-net",
     "t": "Re-assess if features change: breathlessness on exertion, chest pain on effort, blackouts, true wheeze, weight loss, or episodes that do not settle."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi Hollie, I’m Dr Hughes. Tell me about these episodes — from the beginning.",
    "dom": "rto",
    "why": "Open question; lets her tell the story"
   },
   {
    "who": "pt",
    "text": "This’ll sound silly. I get these episodes where I can’t catch my breath, my chest goes tight, my lips and fingers tingle, my heart races and I feel like something awful’s going to happen. I think it’s panic attacks, but part of me is terrified it’s my heart or lungs. Can you tell me it’s not serious?"
   },
   {
    "who": "dr",
    "text": "It doesn’t sound silly at all — those episodes sound really frightening, and it’s sensible to want to be sure. I don’t want to just say “it’s anxiety”. I’d like to ask some questions, arrange some checks, and then explain what I think. Is that okay?",
    "dom": "gs",
    "why": "Validates the fear and sets a clear plan for the consultation"
   },
   {
    "who": "pt",
    "text": "Yes, please."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When do they tend to happen, and how long do they last?",
    "dom": "tasks",
    "why": "Pattern: triggers and duration"
   },
   {
    "who": "pt",
    "text": "Usually when I’m stressed. They build up, then settle in about twenty minutes to half an hour. Afterwards I feel wiped out but normal."
   },
   {
    "who": "dr",
    "text": "Do they ever come on when you’re exercising or climbing stairs, or wake you from sleep? Any wheeze, or a cough at night?",
    "dom": "tasks",
    "why": "Screens exertional symptoms and asthma"
   },
   {
    "who": "pt",
    "text": "No, not with exercise. No wheeze that I’ve noticed."
   },
   {
    "who": "dr",
    "text": "Have you ever blacked out or nearly blacked out? And has anyone in your family died suddenly at a young age, or had a heart rhythm problem?",
    "dom": "tasks",
    "why": "Arrhythmia red flags and family history of sudden death"
   },
   {
    "who": "pt",
    "text": "No blackouts. Not that I know of in the family."
   },
   {
    "who": "dr",
    "text": "Any weight loss, shakiness, feeling hot when others are cold, or heavier periods or tiredness recently?",
    "dom": "tasks",
    "why": "Screens thyroid disease and anaemia"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Any sharp pain on breathing in, calf swelling, recent long travel or surgery — and are you on any hormonal contraception?",
    "dom": "tasks",
    "why": "Proportionate PE risk screen"
   },
   {
    "who": "pt",
    "text": "None of that."
   },
   {
    "who": "dr",
    "text": "How much caffeine or alcohol do you have, and how’s your sleep?",
    "dom": "tasks",
    "why": "Lifestyle contributors"
   },
   {
    "who": "pt",
    "text": "I’ve never really thought about it."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "You said part of you is terrified it’s your heart. What exactly worries you most?",
    "dom": "rto",
    "why": "Explores the specific fear"
   },
   {
    "who": "pt",
    "text": "That I’ll have a heart attack in one of them and nobody will take it seriously because I’m young."
   },
   {
    "who": "dr",
    "text": "That’s an important worry, and I am taking it seriously. How have things been for you generally — is there much going on at the moment?",
    "dom": "rto",
    "why": "Opens space for any stressor without assuming"
   },
   {
    "who": "pt",
    "text": "There’s a lot on at the moment, I suppose. I don’t really want to get into it all today."
   },
   {
    "who": "dr",
    "text": "That’s fine. The door’s open whenever you want to.",
    "dom": "rto",
    "why": "Respects her pace while leaving the option open"
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "I can’t examine you properly by video, so I’d like you to come in this week for your pulse, blood pressure, oxygen level, a listen to your heart and chest, a heart tracing, and blood tests for blood count and thyroid. If anything points to asthma, we’ll test for that too.",
    "dom": "tasks",
    "why": "Arranges proportionate face-to-face examination and tests"
   },
   {
    "who": "pt",
    "text": "Okay. That would put my mind at rest."
   },
   {
    "who": "dr",
    "text": "From what you’ve told me, the pattern fits panic attacks with over-breathing. When anxiety makes you breathe fast, you blow off carbon dioxide. That causes the tingling in your lips and fingers, the light-headedness and the tight chest. Those feelings are scary, so you breathe faster still. It’s a loop — not your heart failing.",
    "dom": "tasks",
    "why": "Positive diagnosis with a physiological explanation"
   },
   {
    "who": "pt",
    "text": "So the tingling is from the breathing? I thought it meant something awful."
   },
   {
    "who": "dr",
    "text": "Exactly — it’s a sign of over-breathing, not damage. Once the checks are back and normal, I’ll be able to say that with certainty.",
    "dom": "rto",
    "why": "Reassurance tied to real checks"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "The treatment that works best is a talking therapy called CBT, which teaches you to break the loop. You can refer yourself to NHS Talking Therapies. In the meantime, try slow breathing when an episode starts — gently in through your nose, then a longer, slower breath out. Keeping caffeine down and protecting your sleep help too. If the attacks are frequent and disabling, a daily medication called an SSRI is also an option.",
    "dom": "tasks",
    "why": "NICE CG113 options; breathing technique; lifestyle"
   },
   {
    "who": "pt",
    "text": "I’d rather try the therapy first."
   },
   {
    "who": "dr",
    "text": "That’s a good choice. I’ll send you the self-referral link. I also won’t be giving you tablets like diazepam — they aren’t recommended for panic and can cause dependence.",
    "dom": "tasks",
    "why": "Avoids benzodiazepines per NICE CG113"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you ever get breathless or chest pain when exercising, blackouts, a wheeze, or an episode that doesn’t settle and feels different, get seen. Severe chest pain that doesn’t settle — call 999.",
    "dom": "gs",
    "why": "Specific triggers for re-assessment"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "What will you take away from today?",
    "dom": "gs",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Come in this week for the tests. It sounds like panic and over-breathing, not my heart. Self-refer for CBT, slow breathing, and watch the caffeine."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll go through the results with you in two weeks, and we can talk about anything else then if you want to.",
    "dom": "gs",
    "why": "Follow-up with results and open door"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her finish; validated the fear rather than calling it silly.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Stress, caffeine, sleep and work; offered space to talk about what is going on.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “terrified it’s my heart” and “nobody will take it seriously because I’m young”.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (panic), concern (heart attack, not being believed), expectation (to be told it’s not serious).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Face-to-face obs, oxygen saturation, heart and chest exam, ECG, FBC and TFTs; asthma testing if features.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Panic with over-breathing versus asthma, arrhythmia, thyroid disease, anaemia and PE.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about exertional symptoms, blackouts, family history of sudden death, weight loss, PE risk factors.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Positive diagnosis of panic with hyperventilation, explained physiologically, pending normal checks.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "CBT via NHS Talking Therapies, controlled breathing, caffeine reduction, SSRI as an option; no benzodiazepines (NICE CG113).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Sleep, caffeine and any stressor; mood and severity assessed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named triggers for re-assessment and 999; teach-back; results review in two weeks.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Hollie Vance",
    "age": "26 years · female",
    "pmh": [
     "Nil relevant recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "⚠ Recurrent episodes: breathlessness, chest tightness, tingling, palpitations and dread; settle in 20–30 minutes.",
    "reason": "“I think it’s panic, but what if it’s my heart?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and validate",
     "d": "Let her describe an episode fully; tell her the fear is reasonable."
    },
    {
     "t": "1–5",
     "h": "Exclude and characterise",
     "d": "Pattern and duration; exertion, wheeze, blackouts, family history of sudden death, thyroid, anaemia, PE risk; caffeine and sleep."
    },
    {
     "t": "5–7",
     "h": "ICE",
     "d": "Fear of a heart attack and of not being believed; space for any stressor."
    },
    {
     "t": "7–9",
     "h": "Checks and explanation",
     "d": "Face-to-face exam, ECG, FBC, TFTs. Explain over-breathing and the loop."
    },
    {
     "t": "9–12",
     "h": "Treat and close",
     "d": "CBT self-referral, breathing, caffeine, SSRI option, no benzodiazepines, safety-net, teach-back, results review."
    }
   ],
   "wordPics": {
    "fail": "Labels it “just anxiety” within two minutes; no questions about exertion, blackouts or family history; no checks; or the opposite — a long list of tests with no explanation and no treatment for the panic.",
    "pass": "Screens the important organic causes, arranges exam, ECG and bloods, explains panic with over-breathing, and offers CBT with a safety-net.",
    "exc": "All of the above, plus: explains the carbon dioxide loop in plain words so the tingling stops being frightening; links reassurance to the checks; addresses her fear of not being believed; offers CBT, breathing and caffeine advice in line with NICE CG113; avoids benzodiazepines; follows up with results."
   },
   "avoid": [
    {
     "dont": "“It’s just anxiety, you’re young and healthy.”",
     "instead": "“The pattern fits panic, and I’d like to check a few things so we can both be sure.”",
     "why": "Premature labelling feels dismissive and is unsafe."
    },
    {
     "dont": "“Breathe into a paper bag when it happens.”",
     "instead": "“Breathe slowly — in through your nose, and a longer breath out.”",
     "why": "Paper-bag rebreathing is no longer advised."
    },
    {
     "dont": "“I’ll give you some diazepam for the attacks.”",
     "instead": "“The best treatment is CBT, and there’s a daily medicine if you need it.”",
     "why": "NICE CG113 advises against benzodiazepines for panic disorder."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Stress and life context",
     "t": "Panic often follows stress at work, study, relationships or money. Offer space to talk without forcing disclosure; she may return to it when trust is built."
    },
    {
     "h": "Work",
     "t": "If episodes affect work, a fit note can suggest adjustments, such as phased duties, rather than time off."
    }
   ],
   "legal": [
    {
     "h": "Driving",
     "t": "DVLA: anxiety needs notifying only if it affects safe driving (for example through poor concentration or agitation); any loss of consciousness would change the advice."
    }
   ],
   "professional": [
    {
     "h": "Diagnostic overshadowing",
     "t": "Young women with breathlessness and chest symptoms are at risk of having organic disease attributed to anxiety. Document the exclusion process and the safety-net."
    },
    {
     "h": "Benzodiazepine stewardship",
     "t": "NICE CG113 and BNF guidance: avoid benzodiazepines in panic disorder because of dependence and poorer long-term outcomes."
    }
   ],
   "community": [
    {
     "h": "Self-help",
     "t": "NHS Talking Therapies self-referral, NHS Every Mind Matters, and the charity Anxiety UK."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Breathlessness or chest pain on exertion",
     "Syncope or pre-syncope, or family history of sudden cardiac death",
     "Wheeze, night cough, weight loss, tremor or heat intolerance",
     "Pleuritic pain, calf swelling or VTE risk factors"
    ],
    "psychosocial": [
     "Current stressors, when she is ready",
     "Caffeine, alcohol and sleep",
     "Impact on work and avoidance of situations"
    ],
    "ice": [
     "Idea: “I think it’s panic attacks.”",
     "Concern: “What if it’s my heart and nobody believes me because I’m young?”",
     "Expectation: to be told it isn’t serious"
    ]
   },
   "diagnosis": "“The pattern fits panic attacks with over-breathing. I’ll confirm that with an examination, a heart tracing and blood tests this week.”",
   "diagnosisLay": "“When you breathe too fast you blow off carbon dioxide, and that causes the tingling, light-headedness and tight chest. They feel scary, so you breathe faster still. It’s a loop we can learn to break.”",
   "management": {
    "reflectIce": "“You were worried nobody would take this seriously because you’re young. I have, and the checks are part of that.”",
    "psychosocial": "Invite, don’t push, discussion of stressors; cut caffeine; improve sleep; support her preference for therapy first.",
    "sharedPlan": [
     "Face-to-face obs, oxygen saturation, examination and ECG; FBC and TFTs",
     "CBT via NHS Talking Therapies self-referral (NICE CG113); SSRI if she prefers or if severe; no benzodiazepines",
     "Slow controlled breathing technique; less caffeine"
    ],
    "safetyNet": [
     "Get seen for exertional breathlessness or chest pain, blackouts, wheeze, or episodes that feel different",
     "999 for severe chest pain that doesn’t settle",
     "Results review in two weeks"
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
    "t": "Anxiety protocol",
    "s": "Panic disorder · CBT and SSRIs",
    "href": "management/anxiety.html"
   },
   {
    "ic": "🗺️",
    "t": "Breathlessness pathway",
    "s": "Visual algorithm · organic causes",
    "href": "algorithms/breathlessness.html"
   },
   {
    "ic": "🗺️",
    "t": "Palpitations pathway",
    "s": "Visual algorithm · ECG and red flags",
    "href": "algorithms/palpitations.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is lost at both ends: by labelling anxiety too early, or by investigating so broadly that the panic is never named or treated. The marks are in a focused exclusion followed by a confident, explained diagnosis.",
   "items": [
    {
     "dom": "tasks",
     "fail": "“This sounds like anxiety” in the first two minutes, with no exclusion questions.",
     "why": "“Fails to consider serious alternative diagnoses.” Arrhythmia and asthma can present exactly like this.",
     "fix": "Ask the exertion, blackout, family history, thyroid and PE questions out loud."
    },
    {
     "dom": "tasks",
     "fail": "Saying “I’ll listen to your chest and check your oxygen” during a video consultation.",
     "why": "You cannot examine by video; claiming to do so is unsafe and inaccurate.",
     "fix": "Arrange a face-to-face examination with ECG and bloods this week."
    },
    {
     "dom": "tasks",
     "fail": "Ordering tests but never naming panic or offering treatment.",
     "why": "Leaves her frightened and still having attacks; no positive diagnosis earns no management marks.",
     "fix": "Name the likely diagnosis, explain the carbon dioxide loop, offer CBT today."
    },
    {
     "dom": "rto",
     "fail": "Missing “nobody will take it seriously because I’m young”.",
     "why": "That is her real concern; ignoring it undermines every reassurance that follows.",
     "fix": "Answer it directly: “I am taking it seriously — that’s why we’re checking.”"
    },
    {
     "dom": "tasks",
     "fail": "Prescribing diazepam “for the attacks”.",
     "why": "NICE CG113 advises against benzodiazepines in panic disorder.",
     "fix": "CBT first, SSRI if needed, breathing technique for the moment."
    },
    {
     "dom": "gs",
     "fail": "No safety-net because “it’s only panic”.",
     "why": "A positive diagnosis still needs criteria for re-assessment.",
     "fix": "Name exertional symptoms, blackouts, wheeze and different episodes; book a results review."
    }
   ]
  }
 },
 "copd-phone-breathless": {
  "stem": {
   "name": "Ivy Marchetti",
   "age": "69-year-old woman",
   "pmh": [
    "COPD"
   ],
   "meds": [
    "COPD inhalers as on the repeat list"
   ],
   "allergy": "Not recorded in the booking note; check before any prescription",
   "recent": "Rang the practice: more breathless than usual. She believes it is another COPD flare-up.",
   "reason": "Telephone call: “Could you call me in some steroids and antibiotics so I don’t have to come down?”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG115 (COPD in over 16s, 2018, updated 2019) · [2] NICE NG158 (venous thromboembolic diseases, 2020, updated August 2023) · [3] NICE NG114 (COPD exacerbation: antimicrobial prescribing, 2018) · [4] NICE NG106 (chronic heart failure, 2018, updated September 2025) · [5] NICE NG250 (pneumonia, September 2025; partly replaced CG191) · [6] NICE NG12 (updated April 2026) · [7] GMC Good practice in prescribing and managing medicines and devices (2021)",
   "summary": "More breathlessness in known COPD is not automatically a flare. Ask the questions that separate an infective exacerbation from PE, heart failure, pneumonia and pneumothorax. Sudden onset, pleuritic pain and a swollen calf after a long journey is a PE picture: same-day hospital assessment, not a phoned-in prescription.",
   "points": [
    {
     "h": "What a typical flare looks like",
     "t": "A COPD exacerbation is a sustained worsening beyond normal day-to-day variation, usually building over days, with more breathlessness, more cough and often more or discoloured sputum. NICE NG115 [1] lists factors favouring hospital care, including severe breathlessness, rapid onset, poor general condition, cyanosis, confusion or drowsiness, worsening oedema and poor social support."
    },
    {
     "h": "The PE questions",
     "t": "Sudden onset, pleuritic chest pain, haemoptysis, unilateral calf pain or swelling, and risk factors (immobility, long journeys, recent surgery, cancer, previous VTE). NICE NG158 [2] uses the two-level PE Wells score: more than 4 points means PE likely, needing an immediate CTPA, or interim therapeutic anticoagulation if the scan is delayed. Signs of DVT and PE as the most likely diagnosis score 3 each, so on this history she is very likely to be PE-likely. D-dimer is the test for the PE-unlikely group, not for her."
    },
    {
     "h": "The other mimics",
     "t": "Heart failure: orthopnoea, paroxysmal nocturnal breathlessness, ankle swelling, weight gain (NICE NG106 [4]). Pneumonia: fever, new focal or pleuritic pain, confusion; CRB65 guides severity in primary care (NICE NG250 [5]). Pneumothorax: sudden one-sided pain and breathlessness. Arrhythmia: palpitations, dizziness."
    },
    {
     "h": "Limits of the telephone",
     "t": "On the phone you can judge speech, confusion and the story, but not pulse, oxygen saturation, chest signs, calf signs or an ECG. Any red-flag feature, or doubt about severity, means she must be seen in person, and the setting depends on the working diagnosis."
    },
    {
     "h": "When remote treatment is reasonable",
     "t": "Only for a gradual, typical flare with no red flags and a patient who is coping. NICE NG115 [1]: prednisolone 30 mg once daily for 5 days when breathlessness interferes with daily activities. NICE NG114 [3]: an antibiotic is a judgement based on sputum colour change and increased volume or thickness, severity and risk; not every flare needs one. Remote prescribing should follow GMC guidance [7] on adequate assessment."
    },
    {
     "h": "Lung cancer awareness",
     "t": "NICE NG12 (updated April 2026) [6]: people aged 40 and over with unexplained haemoptysis are referred on a suspected cancer pathway; chest X-ray thresholds are lower for people who have ever smoked. Ask about haemoptysis and weight loss in every breathless COPD call."
    },
    {
     "h": "Safe disposition",
     "t": "Suspected PE with a stable patient: same-day hospital assessment arranged by the GP (e.g. acute medical take or same-day emergency care, by local pathway). Unstable, very breathless, collapsing or chest pain getting worse: 999. Tell her not to drive herself."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Mrs Marchetti? It’s Dr Okafor from the surgery. Before we start, can you confirm your date of birth for me? … Thank you. You’re more breathless — tell me what’s been happening.",
    "dom": "rto",
    "why": "Identity check and an open start on her agenda"
   },
   {
    "who": "pt",
    "text": "Sorry to bother you, doctor. It’s the COPD again, I’m more short of breath. I expect it’s another flare. Could you just call me in the steroids and antibiotics? I’m too wiped out to come down."
   },
   {
    "who": "dr",
    "text": "No bother at all, I’m glad you rang. I do want to help, and I want to get it right. Can I ask some specific questions first? Being more breathless can have a few causes, even with COPD, and I don’t want to assume.",
    "dom": "gs",
    "why": "Accepts the request, then sets a structure without dismissing it"
   },
   {
    "who": "pt",
    "text": "Go on, if you must."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "You’re speaking to me in full sentences, which helps. Did this come on gradually over a few days, like your usual flares, or more suddenly?",
    "dom": "tasks",
    "why": "Judges severity by speech and asks the key onset question"
   },
   {
    "who": "pt",
    "text": "Now you mention it, it came on quite suddenly. Not like my usual."
   },
   {
    "who": "dr",
    "text": "That’s important. Any pain in your chest — particularly a sharp pain when you breathe in?",
    "dom": "tasks",
    "why": "Screens for pleuritic pain"
   },
   {
    "who": "pt",
    "text": "Yes, a sharp catch when I take a breath in."
   },
   {
    "who": "dr",
    "text": "Have you coughed up any blood, or noticed your phlegm change colour or increase?",
    "dom": "tasks",
    "why": "Haemoptysis and the infective-flare features"
   },
   {
    "who": "pt",
    "text": "No blood. Phlegm’s about the same as normal."
   },
   {
    "who": "dr",
    "text": "Can you look at your legs for me? Is one calf more swollen, red or sore than the other?",
    "dom": "tasks",
    "why": "Asks for DVT signs the patient can check herself"
   },
   {
    "who": "pt",
    "text": "Oh… the left one is bigger. It’s been a bit sore. I thought I’d knocked it."
   },
   {
    "who": "dr",
    "text": "Thank you. Have you been less active lately, travelled a long way, had any operations, or ever had a clot before?",
    "dom": "tasks",
    "why": "VTE risk factors"
   },
   {
    "who": "pt",
    "text": "We went on a long coach trip last week. I’ve hardly moved since, I’ve been that tired."
   },
   {
    "who": "dr",
    "text": "A few more, quickly. Any fever or shivers? Any new swelling of both ankles, or needing to sit up at night to breathe? Any racing heartbeat, fainting or feeling muddled?",
    "dom": "tasks",
    "why": "Screens pneumonia, heart failure, arrhythmia and confusion"
   },
   {
    "who": "pt",
    "text": "No fever. Nothing like that with my ankles or at night. I haven’t fainted."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said you’re wiped out and didn’t want to come in. Is there anything else making it hard to come, or anything worrying you?",
    "dom": "rto",
    "why": "Explores the real reason behind the phone request"
   },
   {
    "who": "pt",
    "text": "I just thought it was the usual and I didn’t want the fuss of coming in. I’m that tired."
   },
   {
    "who": "dr",
    "text": "That’s completely understandable, and thank you for being straight with me.",
    "dom": "rto",
    "why": "Validates without colluding"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I need to be honest with you, Ivy. This doesn’t sound like your usual chest flare. It came on suddenly, you’ve a sharp pain on breathing, your left calf is swollen and sore, and you’ve been sitting still after a long journey. Together, that makes me worried about a blood clot in the lung.",
    "dom": "tasks",
    "why": "Names the PE picture and explains the reasoning"
   },
   {
    "who": "pt",
    "text": "A clot? I thought it was just my chest."
   },
   {
    "who": "dr",
    "text": "It may still turn out to be something else, but I can’t rule a clot out over the phone. Steroids and antibiotics wouldn’t treat it, and a clot needs checking today with a scan and blood tests. That can’t be done at the surgery, so you need to be seen at the hospital this afternoon.",
    "dom": "tasks",
    "why": "Explains the telephone limits and why the request is not safe"
   },
   {
    "who": "pt",
    "text": "Hospital? I really don’t want all that fuss."
   },
   {
    "who": "dr",
    "text": "I know, and I wouldn’t ask if I didn’t think it mattered. If it is a clot, treating it today is what keeps you safe. If it isn’t, you’ll have your answer quickly. What would make it easier to go?",
    "dom": "rto",
    "why": "Respects her reluctance and problem-solves rather than insisting"
   },
   {
    "who": "pt",
    "text": "I suppose if I didn’t have to sort out getting there myself."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Let me take that on. I’ll speak to the hospital team now so they’re expecting you, and we’ll work out transport together. Please don’t drive yourself. Is there someone who could go with you or be with you until you leave?",
    "dom": "tasks",
    "why": "Arranges the same-day route and transport"
   },
   {
    "who": "pt",
    "text": "I’ll have to ring round. I can sort something."
   },
   {
    "who": "dr",
    "text": "Thank you. If nobody can take you, ring me straight back and I’ll arrange transport. I won’t send steroids or antibiotics today, because they’re not the right treatment for what I’m worried about. The hospital will decide on treatment when they’ve seen you.",
    "dom": "rto",
    "why": "Declines the prescription clearly and kindly, with a reason"
   },
   {
    "who": "pt",
    "text": "Alright. I understand."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "While you’re waiting: if the breathlessness suddenly gets worse, the chest pain gets worse, you cough up blood, you feel faint or you collapse, call 999 straight away. Don’t wait for a lift.",
    "dom": "gs",
    "why": "Specific 999 triggers while awaiting assessment"
   },
   {
    "who": "pt",
    "text": "Worse breathing, worse pain, blood, fainting — 999."
   },
   {
    "who": "dr",
    "text": "Exactly. Can you tell me what you’re doing next?",
    "dom": "gs",
    "why": "Teach-back of the plan"
   },
   {
    "who": "pt",
    "text": "Find someone to take me to the hospital this afternoon, ring you back if I can’t, and 999 if I get worse."
   },
   {
    "who": "dr",
    "text": "Perfect. I’m writing this call up now and sending a letter to the hospital team. I’ll ring you tomorrow to see how you got on. You did the right thing ringing.",
    "dom": "gs",
    "why": "Documents, hands over and books follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; acknowledged her request and exhaustion before asking permission for focused questions.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Mobility since the coach trip, who is with her, transport, and how exhausted she is.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “not like my usual”, the sore calf she had put down to a knock, and “too wiped out to come”.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (usual flare), concern (hassle, exhaustion), expectation (phoned-in steroids and antibiotics).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Recognised that pulse, saturations, chest and calf examination, ECG, bloods and CTPA are needed and cannot be done by phone.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Infective flare versus PE, heart failure, pneumonia, pneumothorax, arrhythmia and lung cancer.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked onset, pleuritic pain, haemoptysis, calf swelling, VTE risk factors, fever, orthopnoea, confusion and palpitations.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named a likely PE (PE-likely on NG158 Wells from the history) rather than a COPD flare.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day hospital assessment arranged by the GP, transport solved, no steroid or antibiotic prescription.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Did not let the COPD label hide a new problem; would reserve remote flare treatment for a typical flare with no red flags.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 triggers named, teach-back, call documented, hospital informed and a call-back booked.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Long-term conditions & cancer",
    "Older adults"
   ],
   "stem": {
    "name": "Ivy Marchetti",
    "age": "69 years · female",
    "pmh": [
     "COPD"
    ],
    "meds": [
     "COPD inhalers per repeat list"
    ],
    "allergy": "Not recorded — check",
    "recent": "⚠ Telephone request: more breathless than usual; believes it is another flare.",
    "reason": "“Could you call me in some steroids and antibiotics? I’m too wiped out to come down.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Identify and open",
     "d": "Confirm identity. Hear the request, then ask permission for focused questions."
    },
    {
     "t": "1–5",
     "h": "Discriminating history",
     "d": "Onset, pleuritic pain, haemoptysis, calf, travel and immobility, fever, orthopnoea, palpitations, confusion. Note she speaks in sentences."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Tiredness, wanting no fuss, minimising."
    },
    {
     "t": "6–8",
     "h": "Explain",
     "d": "This is not her usual flare: a clot in the lung must be ruled out today, and that cannot be done by phone."
    },
    {
     "t": "8–12",
     "h": "Arrange and safety-net",
     "d": "Same-day hospital assessment, transport, no prescription, 999 triggers, teach-back, documentation, call-back."
    }
   ],
   "wordPics": {
    "fail": "Phones in prednisolone and an antibiotic because she has COPD; never asks about onset, pleuritic pain or the calf; or finds the PE features but lets her stay at home because she is tired.",
    "pass": "Asks the discriminating questions, recognises a possible PE, explains she must be seen in hospital today, declines the prescription and gives 999 advice.",
    "exc": "All of the above, plus: explains why the phone cannot answer the question; solves the transport problem instead of arguing; names the PE-likely reasoning; teach-back; hospital team informed and a call-back booked."
   },
   "avoid": [
    {
     "dont": "“Sounds like your usual flare, I’ll send the rescue pack to the chemist.”",
     "instead": "“Before I assume it’s the usual, can I ask a few specific questions?”",
     "why": "Anchoring on the COPD label is the trap this station is built around."
    },
    {
     "dont": "“You need to go to hospital, it could be a clot.” (and nothing more)",
     "instead": "“What would make it easier to go? Let me sort the route with you.”",
     "why": "A frightened, exhausted patient needs a plan she can carry out, not only an instruction."
    },
    {
     "dont": "“Take the steroids anyway, just in case.”",
     "instead": "“Steroids wouldn’t treat what I’m worried about; the hospital will decide on treatment today.”",
     "why": "Prescribing for the wrong diagnosis gives false reassurance and can delay the right treatment."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Exhaustion and access",
     "t": "Tiredness, minimising and practical problems with getting there drive the request to be treated by phone. Solving the practical barrier often ends the disagreement."
    },
    {
     "h": "Support at home",
     "t": "Ask who is with her and who can take her. Poor social support is one of the NICE NG115 factors that favour hospital care."
    }
   ],
   "legal": [
    {
     "h": "Remote prescribing",
     "t": "GMC Good practice in prescribing and managing medicines and devices (2021): prescribe remotely only when you have enough information to be satisfied the medicine is safe and needed. Here you do not."
    },
    {
     "h": "Capacity to decline",
     "t": "If she refused to go, assess her capacity for that decision (Mental Capacity Act 2005), explain the risks clearly, give 999 advice and document. A capacitous refusal is hers to make."
    }
   ],
   "professional": [
    {
     "h": "Documentation of telephone triage",
     "t": "Record the questions asked, positive and negative answers, the working diagnosis, the disposition and the safety-net given. Handover to the receiving team should include the PE concern."
    },
    {
     "h": "Cognitive bias",
     "t": "Diagnostic momentum and anchoring on a known long-term condition are recognised causes of missed PE. Asking “what else could this be?” is part of good clinical care (GMC Good medical practice, 2024)."
    }
   ],
   "community": [
    {
     "h": "Practical help",
     "t": "Patient transport rules vary locally; family, neighbours or a taxi may be quicker. For COPD support after the acute episode: Asthma + Lung UK and local pulmonary rehabilitation."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Sudden onset, pleuritic chest pain, unilateral calf swelling, recent long journey or immobility (PE)",
     "Haemoptysis or weight loss (PE; lung cancer — NICE NG12 (updated April 2026))",
     "Fever, focal pain, confusion (pneumonia); orthopnoea and oedema (heart failure); sudden one-sided pain (pneumothorax)",
     "Unable to speak in sentences, collapse, confusion or drowsiness — 999"
    ],
    "psychosocial": [
     "Exhaustion and not wanting the fuss",
     "Minimising: “it’s just the usual”",
     "Who is at home and how she will get to hospital"
    ],
    "ice": [
     "Idea: “It’s just another COPD flare.”",
     "Concern: the hassle of going in when she is exhausted",
     "Expectation: steroids and antibiotics called in by phone"
    ]
   },
   "diagnosis": "“This doesn’t sound like your usual flare. Sudden breathlessness with a sharp pain on breathing and a swollen calf after a long journey makes me worried about a blood clot in the lung, and that needs checking today.”",
   "diagnosisLay": "“A clot can form in a leg vein when you’ve been sitting still for a long time, and a piece can travel to the lung. It causes sudden breathlessness and a sharp pain on breathing. It needs a scan to find it, and it’s treated with blood thinners, not steroids.”",
   "management": {
    "reflectIce": "“I know you hoped I could sort this by phone, and I know you’re exhausted. That’s exactly why I want to make getting there as easy as possible.”",
    "psychosocial": "Take on the practical barrier: transport, someone to go with her, the hospital expecting her. Do not let tiredness or minimisation change the disposition.",
    "sharedPlan": [
     "Same-day hospital assessment for suspected PE (NICE NG158: PE-likely on Wells → CTPA or interim anticoagulation)",
     "No steroid or antibiotic prescription today; the hospital manages treatment",
     "Call documented; hospital team informed; GP call-back tomorrow"
    ],
    "safetyNet": [
     "999: sudden worse breathlessness, worse chest pain, coughing blood, fainting or collapse",
     "Ring back straight away if she cannot get a lift"
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
    "t": "Pulmonary embolism",
    "s": "Protocol · NICE NG158 Wells and CTPA",
    "href": "management/pulmonary-embolism.html"
   },
   {
    "ic": "🗺️",
    "t": "Breathlessness pathway",
    "s": "Visual algorithm · mimics to exclude",
    "href": "algorithms/breathlessness.html"
   },
   {
    "ic": "💠",
    "t": "COPD protocol",
    "s": "Exacerbations · NG114 antibiotics",
    "href": "management/copd.html"
   }
  ],
  "pitfalls": {
   "intro": "This telephone station is failed by accepting the patient’s diagnosis. The marks are in the discriminating questions, a safe disposition, and getting a tired, reluctant patient to hospital.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Issuing prednisolone and an antibiotic because she has COPD and says it is a flare.",
     "why": "“Fails to consider serious alternative diagnoses.” A new cause of breathlessness in COPD is easily hidden by the label.",
     "fix": "Ask onset first: “Gradual over days, or suddenly?” Then pleuritic pain, calf, travel."
    },
    {
     "dom": "tasks",
     "fail": "Finding the PE features but arranging a D-dimer at the surgery tomorrow.",
     "why": "NICE NG158: with PE likely (Wells more than 4), the next step is an immediate CTPA or interim anticoagulation, not a D-dimer.",
     "fix": "Same-day hospital assessment, arranged by you, today."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting to ask about heart failure, pneumonia and haemoptysis once PE is suspected.",
     "why": "A focused screen of the other mimics shows structured reasoning and informs the handover.",
     "fix": "One grouped question: fever, ankle swelling, sitting up at night, racing heart, blood in the phlegm."
    },
    {
     "dom": "rto",
     "fail": "Arguing: “You must go to hospital” repeated louder when she objects.",
     "why": "“Does not explore or respond to the patient’s concerns.” Her objection is practical and emotional.",
     "fix": "“What would make it easier to go?” Then take on the transport."
    },
    {
     "dom": "rto",
     "fail": "Colluding: agreeing to “see how she goes overnight” because she is exhausted.",
     "why": "Unsafe disposition outweighs any rapport gained.",
     "fix": "Be honest and warm: “I wouldn’t ask if I didn’t think it mattered today.”"
    },
    {
     "dom": "gs",
     "fail": "Ending with “call back if worse” and no documentation or handover.",
     "why": "Telephone consultations are marked on explicit safety-netting and continuity.",
     "fix": "Name the 999 triggers, check teach-back, tell her the hospital is expecting her, book a call-back."
    }
   ]
  }
 },
 "diplopia-ms-myasthenia": {
  "stem": {
   "name": "Erin Doyle",
   "age": "29-year-old woman",
   "pmh": [
    "No significant past medical history recorded",
    "No previous neurological or eye problems on the record"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "No recent consultations. Booked an online video appointment herself.",
   "reason": "Video consultation: double vision on and off for a few weeks, and a recent few days of blurred, aching vision in the left eye."
  },
  "knowledge": {
   "guideline": "[1] NICE NG220 (multiple sclerosis in adults, 2022, updated August 2026) · [2] NICE NG12 (updated April 2026) · [3] Association of British Neurologists myasthenia gravis management guidelines (2015, updated 2025) · [4] DVLA Assessing fitness to drive (visual disorders: diplopia) · [5] NICE NG228 (subarachnoid haemorrhage, 2022)",
   "summary": "Recurrent binocular double vision in a young woman, with a recent painful blurred-vision episode in one eye, is neurological until proved otherwise. Split monocular from binocular, screen for optic neuritis, fatigable weakness and red flags, get her examined in person today, and refer with the right urgency.",
   "points": [
    {
     "h": "First split: monocular or binocular",
     "t": "Ask whether the double image goes when either eye is covered. Monocular diplopia (persists through one eye alone) is usually ocular: refractive error, cataract, corneal or lens problems. Binocular diplopia (goes when either eye is covered) means the eyes are misaligned, from a cranial nerve, neuromuscular junction, muscle or orbital cause, and needs a neurological assessment."
    },
    {
     "h": "Optic neuritis and MS",
     "t": "A few days of blurred vision in one eye with pain, especially on eye movement, and duller colours is the classic story of optic neuritis. NICE NG220 [1]: if isolated optic neuritis is confirmed by an ophthalmologist, refer to a consultant neurologist; a consultant neurologist makes the diagnosis of MS using history, examination, MRI and the revised McDonald criteria (lesions disseminated in time and space). Diplopia from an internuclear ophthalmoplegia would be a second, separate site."
    },
    {
     "h": "Myasthenia gravis",
     "t": "Fatigable weakness: double vision or drooping lids that worsen as the day goes on or with sustained gaze and improve with rest. Ask about chewing or swallowing fatigue, slurred or nasal speech, neck and limb weakness, and breathlessness. ABN guidelines [3]: diagnosis and treatment are specialist-led (AChR antibodies are positive in about half of purely ocular cases). Bulbar or breathing symptoms risk a myasthenic crisis and need emergency assessment."
    },
    {
     "h": "Cranial nerve red flags",
     "t": "A third nerve palsy with a dilated pupil, especially with headache or eye pain, is a posterior communicating artery aneurysm until proved otherwise: 999 or emergency department now. A sixth nerve palsy can be a false-localising sign of raised intracranial pressure: ask about headache worse lying down or on straining, vomiting and transient visual obscurations. Thunderclap headache peaking within minutes is a subarachnoid haemorrhage question (NICE NG228 [5])."
    },
    {
     "h": "Examination needs a face-to-face visit",
     "t": "Acuity, colour vision, pupils including a relative afferent pupillary defect, eye movements in all directions with a cover test, ptosis and fatigability on sustained upgaze, fundi for disc swelling, and a brief neurological screen. None of this can be done reliably on video, so arrange an in-person examination today."
    },
    {
     "h": "Set the urgency",
     "t": "Emergency (999 or ED): pupil-involving third nerve palsy, thunderclap headache, bulbar or breathing symptoms, or signs of raised pressure with papilloedema. Same day: new persistent binocular diplopia or current visual loss, discussed with on-call ophthalmology or neurology. Urgent: suspected MS or ocular myasthenia once emergencies are excluded. NICE NG12 (updated April 2026) [2]: consider an urgent direct-access MRI brain (within 2 weeks) for progressive, sub-acute loss of central neurological function."
    },
    {
     "h": "Driving",
     "t": "DVLA [4]: a driver with diplopia must stop driving and tell the DVLA. Driving may restart only once the DVLA accepts that the diplopia is controlled, for example with a patch or prisms. The patient holds the legal duty; the doctor advises and records the advice."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Erin, I’m Dr Patel. Can you hear and see me clearly? … Good. Tell me what’s been happening, from the beginning.",
    "dom": "rto",
    "why": "Checks the video link, then an open question"
   },
   {
    "who": "pt",
    "text": "This is probably nothing. I’ve been getting double vision on and off for a few weeks, usually when I’m tired or after a lot of screen time. And a couple of weeks ago my left eye went blurry and achy for a few days. I just figured I needed more sleep. Can you tell me it’s eye strain?"
   },
   {
    "who": "dr",
    "text": "I can hear you’d really like it to be eye strain, and I’d like that too. I’ll be honest with you as we go. Can I ask some specific questions first, so any reassurance I give is real?",
    "dom": "rto",
    "why": "Names her wish without colluding and explains why the questions matter"
   },
   {
    "who": "pt",
    "text": "Okay. Go on."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When the double vision comes, if you cover one eye, does it go away? And does it go if you cover the other eye instead?",
    "dom": "tasks",
    "why": "The first split: monocular versus binocular"
   },
   {
    "who": "pt",
    "text": "Actually, yes, whichever eye I cover, it goes. I hadn’t really thought about that."
   },
   {
    "who": "dr",
    "text": "That’s really useful. It means the two eyes aren’t lining up, which comes from the nerves or muscles that move the eyes rather than tired eyes. Are the two pictures side by side, or one above the other?",
    "dom": "tasks",
    "why": "Interprets binocular diplopia and begins to localise"
   },
   {
    "who": "pt",
    "text": "Mostly side by side, I think. Sometimes a bit tilted."
   },
   {
    "who": "dr",
    "text": "Is it worse as the day goes on, or if you keep looking at something for a while, and better after a rest? Have your eyelids ever drooped?",
    "dom": "tasks",
    "why": "Screens for fatigability and ptosis (myasthenia)"
   },
   {
    "who": "pt",
    "text": "Definitely worse in the evenings. I’m not sure about the eyelids. Nobody’s said anything."
   },
   {
    "who": "dr",
    "text": "Any tiredness when chewing or swallowing, your voice going slurred or nasal, trouble lifting your arms or holding your head up, or feeling short of breath?",
    "dom": "tasks",
    "why": "Screens bulbar, limb and respiratory involvement"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Now that left eye. When it went blurry, did it hurt to move the eye? Were colours duller, especially reds?",
    "dom": "tasks",
    "why": "Characterises probable optic neuritis"
   },
   {
    "who": "pt",
    "text": "Yes, it ached when I looked around, and everything looked a bit washed out. It’s mostly better now."
   },
   {
    "who": "dr",
    "text": "Have you ever had any numbness, tingling, weakness, problems with balance or with your bladder, lasting days, at any time before?",
    "dom": "tasks",
    "why": "Looks for earlier episodes separated in time and place"
   },
   {
    "who": "pt",
    "text": "Not that I can think of."
   },
   {
    "who": "dr",
    "text": "A few quick safety checks. Any sudden severe headache, or headache worse lying down or when you strain, being sick, or your vision greying out for a few seconds? Any pain around one eye with the lid drooping?",
    "dom": "tasks",
    "why": "Screens aneurysm, SAH and raised intracranial pressure red flags"
   },
   {
    "who": "pt",
    "text": "No headaches really. No."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said at the start it’s probably nothing. Has any part of you wondered whether it might be something more?",
    "dom": "rto",
    "why": "Gently opens the hidden agenda"
   },
   {
    "who": "pt",
    "text": "(pause) I suppose I’ve been avoiding thinking about it. If it’s just tiredness I don’t have to worry. If it’s not… I don’t want to hear it’s something like MS."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me that. It makes complete sense to want it to be the simple answer. I won’t guess at a diagnosis today, but I also won’t tell you it’s tiredness when I don’t think that’s been shown. Is that fair?",
    "dom": "rto",
    "why": "Validates the fear and is honest without catastrophising"
   },
   {
    "who": "pt",
    "text": "Yes. I’d rather know."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s my thinking. Double vision that goes when either eye is covered points to the eye-moving nerves or muscles. The painful blurry episode sounds like inflammation of the nerve at the back of the eye, called optic neuritis. There are a few possible causes. One is MS. Another is a condition where muscles tire easily, called myasthenia, which fits it being worse in the evenings. None of these are confirmed, and the specialists need to examine you and do tests.",
    "dom": "tasks",
    "why": "Shares a reasoned differential in plain language"
   },
   {
    "who": "pt",
    "text": "So it could be MS?"
   },
   {
    "who": "dr",
    "text": "It’s one of the things they’ll want to look for, and I’d rather you heard that from me honestly. MS is diagnosed by a neurologist, with a scan and an examination, and only if it meets strict criteria. Not everyone who has an episode like this goes on to have MS, and if it is MS, treatment is much better than it used to be.",
    "dom": "rto",
    "why": "Answers directly, gives proportion without false reassurance"
   },
   {
    "who": "pt",
    "text": "Okay. That helps a bit."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "What I can’t do over video is look properly at your eyes: your pupils, the eye movements, your eyelids when you look up for a while, and the back of your eyes. So I’d like you to come in today so a doctor can examine you face to face.",
    "dom": "tasks",
    "why": "Recognises video limits; arranges same-day in-person examination"
   },
   {
    "who": "pt",
    "text": "Today? Is that really necessary?"
   },
   {
    "who": "dr",
    "text": "I think so. Depending on what we find, I’ll speak to the eye team or the neurologists today, and they’ll decide how quickly to see you and when to do a brain scan. I’ll also refer you to the neurologists about the eye episode and the double vision, marked urgent.",
    "dom": "tasks",
    "why": "Sets urgency by findings; same-day specialist advice; urgent neurology"
   },
   {
    "who": "pt",
    "text": "Okay. I can get there this afternoon."
   },
   {
    "who": "dr",
    "text": "One more practical thing. If you drive, please don’t while you’re getting double vision. The law says you must stop and tell the DVLA. When it’s controlled, driving can usually be looked at again.",
    "dom": "gs",
    "why": "Gives the DVLA advice without inventing whether she drives"
   },
   {
    "who": "pt",
    "text": "Right. I hadn’t thought about that."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Before you come in, call 999 or go to A&E if you get a sudden severe headache, a painful eye with a drooping lid or one pupil much bigger, any trouble swallowing, slurred speech or breathing, or new weakness. Those would need attention straight away.",
    "dom": "gs",
    "why": "Specific emergency safety-net in plain words"
   },
   {
    "who": "pt",
    "text": "Okay. Headache, pupil, swallowing, breathing, weakness."
   },
   {
    "who": "dr",
    "text": "Exactly that. So, can you tell me back what the plan is, so I know I’ve explained it properly?",
    "dom": "rto",
    "why": "Teach-back to check understanding"
   },
   {
    "who": "pt",
    "text": "Come in this afternoon to be examined, you’ll talk to the specialists, there’s an urgent referral, no driving with double vision, and 999 for those warning signs."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll ring you after the specialists have given their view so you’re not left waiting in the dark. Is there anything you’d like to ask?",
    "dom": "gs",
    "why": "Defined follow-up and ownership of the result"
   },
   {
    "who": "pt",
    "text": "No. Thank you for being straight with me."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her finish the story including the left-eye episode she mentioned almost in passing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work and screen use, how the symptoms affect her day, and whether she drives (asked neutrally, advice given conditionally).",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “worse when tired”, the painful eye episode, and her hope that it’s “just eye strain”.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Her idea (eye strain), the unspoken fear (MS), and what she wanted (reassurance).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Same-day in-person examination: acuity, colour, pupils and RAPD, eye movements, fatigable ptosis, fundi, neuro screen.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Monocular versus binocular; optic neuritis and MS; ocular myasthenia; cranial nerve palsy; raised intracranial pressure.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for pupil-involving third nerve palsy, thunderclap or raised-pressure headache, bulbar and breathing symptoms.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Binocular diplopia with probable optic neuritis: needs specialist neurological assessment, not tiredness.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day examination and specialist advice; urgent neurology referral; MRI decided by specialists; honest explanation.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "DVLA duty with diplopia; the impact on her work and anxiety.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named 999 symptoms, a follow-up call after specialist advice, and teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Urgent & unscheduled care"
   ],
   "stem": {
    "name": "Erin Doyle",
    "age": "29 years · female",
    "pmh": [
     "Nil significant"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "No recent consultations. Online booking note: “double vision on and off, probably tiredness”.",
    "reason": "Video consultation booked by the patient about intermittent double vision."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "Let her finish. The painful left-eye episode is dropped in as an aside: catch it."
    },
    {
     "t": "1–5",
     "h": "Discriminating history",
     "d": "Cover-one-eye question, direction of images, fatigability and bulbar symptoms, optic neuritis features, previous neurological episodes, red-flag headache and pupil questions."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Ask gently whether she has wondered if it is more than tiredness. The fear of MS surfaces."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Binocular means nerves or muscles, not eye strain. Name optic neuritis and the possible causes honestly. Same-day face-to-face examination, same-day specialist advice, urgent neurology. DVLA advice if she drives."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 triggers in plain words, teach-back, and a promised call-back after the specialist view."
    }
   ],
   "wordPics": {
    "fail": "Accepts “eye strain” and advises screen breaks; never asks the cover-one-eye question; misses the optic neuritis story; no red-flag screen; tries to examine pupils over video or ignores the need for examination; no referral or a routine one; no safety-net.",
    "pass": "Establishes binocular diplopia, recognises probable optic neuritis and fatigable features, screens the red flags, arranges an in-person examination and an urgent specialist referral, and safety-nets for emergencies.",
    "exc": "All of the above, plus: draws out the unspoken fear of MS and answers it honestly and proportionately; explains why video cannot replace the examination; sets urgency by findings with same-day specialist advice; gives DVLA advice without assuming she drives; teach-back and a promised call-back."
   },
   "avoid": [
    {
     "dont": "“It’s probably just eye strain from your screens. Try the 20-20-20 rule.”",
     "instead": "“Double vision that goes when either eye is covered comes from the nerves or muscles, not tired eyes, so I need to look into it properly.”",
     "why": "Colluding with her minimisation is the failing move in this station."
    },
    {
     "dont": "“This could well be MS.”",
     "instead": "“There are several possible causes and one the specialists will look for is MS. Not everyone with one episode like this develops it.”",
     "why": "Naming a frightening diagnosis as likely, before assessment, is catastrophising."
    },
    {
     "dont": "“Follow my finger with your eyes… your pupils look fine on camera.”",
     "instead": "“I can’t check your eyes properly on video, so I’d like you examined in person today.”",
     "why": "Pupils, fundi and fatigability cannot be judged reliably over video; pretending otherwise is unsafe."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Minimising and fear",
     "t": "Young adults with new neurological symptoms often explain them away (screens, stress, tiredness) because the alternative feels frightening. Naming the fear gently makes it possible to plan."
    },
    {
     "h": "Work and daily life",
     "t": "Double vision affects screen work, reading and travel. Temporary occlusion (a patch or frosted lens) may be advised by the specialist team; a fit note can cover time off work if needed."
    }
   ],
   "legal": [
    {
     "h": "DVLA and diplopia",
     "t": "DVLA Assessing fitness to drive: a driver with diplopia must stop driving and notify the DVLA. Driving may resume only when the DVLA accepts the diplopia is controlled (for example patch or prisms). A later diagnosis such as MS or myasthenia has its own notification rules. The doctor advises and documents; the duty to notify is the patient’s."
    }
   ],
   "professional": [
    {
     "h": "Remote consultation limits",
     "t": "GMC remote consultations guidance: if a remote consultation cannot provide a safe assessment, arrange a face-to-face one. Eye movements, pupils and fundi need examination in person."
    },
    {
     "h": "Honesty without alarm",
     "t": "Share the possible causes honestly when asked, including MS, while being clear that nothing is confirmed. Document the discussion, the red-flag screen, the urgency set and the safety-net."
    }
   ],
   "community": [
    {
     "h": "Support organisations",
     "t": "The MS Society and the Myaware charity provide information once a specialist diagnosis is made; do not signpost to condition-specific groups before diagnosis unless she asks."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Painful third nerve palsy or a dilated pupil with ptosis: aneurysm until proved otherwise (999/ED)",
     "Thunderclap headache, headache worse lying down or on straining, vomiting, transient visual obscurations (SAH or raised intracranial pressure)",
     "Swallowing, speech or breathing difficulty with fatigable weakness (myasthenic crisis risk)",
     "Persisting visual loss in one eye"
    ],
    "psychosocial": [
     "Screen-based work and how the symptoms affect it",
     "Whether she drives (ask; advise conditionally)",
     "Her anxiety and tendency to explain symptoms away"
    ],
    "ice": [
     "Idea: tiredness or eye strain from screens",
     "Concern: unspoken fear of something serious such as MS",
     "Expectation: to be reassured it is eye strain"
    ]
   },
   "diagnosis": "“Double vision that disappears when either eye is covered means the eyes aren’t lining up, so it comes from the nerves or muscles that move them. With the painful blurry episode in your left eye, which sounds like inflammation of the eye nerve, this needs a specialist neurological assessment rather than being put down to tiredness.”",
   "diagnosisLay": "“Your two eyes are like a pair of cameras that have to point at exactly the same spot. When the double picture vanishes whichever eye you cover, it tells me the cameras are slightly out of line, and that’s about the wiring and the muscles, not tired eyes.”",
   "management": {
    "reflectIce": "“You said you’d been avoiding thinking about it because you were scared it might be MS. I’m not going to guess today, but I’m also not going to call it tiredness when I don’t think that’s been shown.”",
    "psychosocial": "Acknowledge the fear, give proportion (several possible causes; one episode does not always mean MS), and keep her involved in every step so she is not left waiting alone.",
    "sharedPlan": [
     "Face-to-face examination today (acuity, colour, pupils/RAPD, eye movements, fatigable ptosis, fundi, neuro screen)",
     "Same-day discussion with on-call ophthalmology or neurology based on findings",
     "Urgent neurology referral; imaging and antibody tests per specialist advice",
     "No driving while diplopic; notify the DVLA if she drives"
    ],
    "safetyNet": [
     "999/ED for sudden severe headache, painful eye with drooping lid or enlarged pupil, swallowing, speech or breathing difficulty, or new weakness",
     "Call-back after the specialist view; review promptly if symptoms change"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Diplopia pathway",
    "s": "Visual algorithm · mono vs binocular · red flags",
    "href": "algorithms/diplopia.html"
   },
   {
    "ic": "🗺️",
    "t": "Vision loss pathway",
    "s": "Visual algorithm · optic neuritis",
    "href": "algorithms/vision-loss.html"
   },
   {
    "ic": "🗺️",
    "t": "Headache pathway",
    "s": "Visual algorithm · raised ICP · SAH",
    "href": "algorithms/headache.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA guide",
    "s": "Fitness to drive · diplopia",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by candidates who accept the patient’s own explanation. Binocular double vision plus a probable optic neuritis in a 29-year-old needs a proper neurological assessment, and the video format adds the trap of pretending to examine.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Never asking whether the double vision goes when one eye is covered.",
     "why": "“Data gathering not sufficiently focused.” The monocular versus binocular split is the single most discriminating question in diplopia.",
     "fix": "Ask it in the first two minutes: “If you cover one eye, does it go? And the other eye?”"
    },
    {
     "dom": "tasks",
     "fail": "Missing the painful blurred-vision episode because it was mentioned in passing.",
     "why": "Optic neuritis is the key clue to a demyelinating cause; missing it leads to a routine plan.",
     "fix": "Return to it: “Tell me more about the left eye. Did it hurt to move it? Were colours duller?”"
    },
    {
     "dom": "tasks",
     "fail": "“Examining” pupils and eye movements over video and declaring them normal.",
     "why": "Unsafe and not credible. Examiners expect you to recognise the limits of a remote consultation.",
     "fix": "“I can’t check this properly on video. I’d like you examined in person today.”"
    },
    {
     "dom": "rto",
     "fail": "Reassuring her that it is eye strain because that is what she asked for.",
     "why": "“Colludes with the patient” and misses the hidden fear driving the minimisation.",
     "fix": "“I can hear you’d like it to be eye strain. I’ll be honest with you as we go.” Then ask whether she has wondered if it is more."
    },
    {
     "dom": "rto",
     "fail": "Announcing “this could be MS” early, then listing its complications.",
     "why": "Catastrophising damages trust and is not supported until a neurologist has assessed her.",
     "fix": "Offer the differential honestly and proportionately: several possible causes, nothing confirmed, specialists will decide."
    },
    {
     "dom": "gs",
     "fail": "Referring “urgently” with no timescale, no red-flag advice and no mention of driving.",
     "why": "Non-specific safety-netting and an omitted DVLA duty are standard failing feedback.",
     "fix": "Same-day examination, named 999 symptoms, conditional DVLA advice, and a promised call-back."
    }
   ]
  }
 },
 "dizzy-teen-pots": {
  "stem": {
   "name": "Mia Calloway",
   "age": "16-year-old girl",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "None recorded",
   "recent": "Recurrent light-headedness, palpitations, ‘brain fog’ and near-faints on standing, easing on sitting or lying. Missing school. Mother present.",
   "reason": "Video consultation, booked by her mother: “Every time I stand up I go dizzy — school think I’m making it up.”"
  },
  "knowledge": {
   "guideline": "[1] NICE CG109 (transient loss of consciousness in over-16s) · [2] Heart Rhythm Society expert consensus statement on POTS, 2015 (international) · [3] NICE NG136 (postural BP measurement, updated November 2023) · [4] Children and Families Act 2014 s100 and DfE Supporting pupils at school with medical conditions (2015) · [5] Equality Act 2010 · [6] GMC 0–18 years (2018)",
   "summary": "Standing-triggered dizziness, palpitations and brain fog that settle on lying down deserve a proper work-up. Exclude cardiac and other causes, do an active stand test, and if PoTS is likely, start non-drug measures and advocate for her at school. Anxiety may coexist, but it is never a default diagnosis.",
   "points": [
    {
     "h": "PoTS definition",
     "t": "HRS 2015 [2] (international): frequent orthostatic symptoms with a sustained heart-rate rise of ≥30 bpm (≥40 bpm at ages 12–19) within 10 minutes of standing, without orthostatic hypotension, and without another cause of sinus tachycardia. Commoner in young women; may follow a viral illness."
    },
    {
     "h": "Differential",
     "t": "Vasovagal syncope, orthostatic hypotension, dehydration or poor intake, anaemia or iron deficiency (ask about periods), thyroid disease, medicines, eating disorder, and — must not miss — arrhythmia or structural or inherited cardiac disease. Anxiety can coexist or amplify symptoms."
    },
    {
     "h": "Cardiac red flags",
     "t": "NICE CG109 [1] (applies from 16): urgent specialist cardiovascular assessment for an ECG abnormality, heart failure, loss of consciousness during exertion, family history of sudden cardiac death under 40 or an inherited cardiac condition, new or unexplained breathlessness, or a heart murmur. Also ask about collapse while lying down and palpitations before collapse."
    },
    {
     "h": "Active stand test",
     "t": "Face to face: heart rate and BP after lying for several minutes, then at intervals over 10 minutes of standing [2]. A systolic fall of 20 mmHg or more suggests orthostatic hypotension (NICE NG136 [3]); a sustained HR rise of 40 or more without a BP fall fits PoTS at her age. Cannot be done reliably over video."
    },
    {
     "h": "Baseline tests",
     "t": "12-lead ECG (rhythm, QT, pre-excitation, conduction), FBC, ferritin, U&E, glucose and TFTs. Refer to a specialist syncope, cardiology or autonomic service for diagnostic confirmation where suspected."
    },
    {
     "h": "Non-drug management",
     "t": "HRS 2015 [2] (international): generous fluid intake (2–3 L a day is suggested for adults) and increased salt unless contraindicated — agree amounts with the specialist for a teenager; rise slowly; avoid prolonged standing, heat and large carbohydrate meals; counter-manoeuvres; compression garments; graded, initially recumbent exercise. Medicines (e.g. ivabradine, fludrocortisone, midodrine, beta-blocker) are specialist-initiated and often off-label."
    },
    {
     "h": "School and rights",
     "t": "Children and Families Act 2014 s100 [4]: schools must support pupils with medical conditions, usually through an individual healthcare plan. If her condition has a substantial, long-term effect on daily activities, the Equality Act 2010 [5] requires reasonable adjustments. Exam access arrangements can be requested through the school."
    },
    {
     "h": "Consulting a 16-year-old",
     "t": "GMC 0–18 years [6]: at 16 she is presumed to have capacity to consent. Speak to her directly, offer time alone, and respect her confidentiality while involving her mother with her agreement."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mia, and hello Mum. I’m Dr Rahman. Mia, I’d like to hear it from you first — what’s been happening?",
    "dom": "rto",
    "why": "Engages the teenager directly"
   },
   {
    "who": "pt",
    "text": "Every time I stand up I go dizzy, my heart pounds and races, and I get this fog where I can’t think. Sometimes I nearly faint. It’s wrecking school — I heard a teacher say I’m attention-seeking. I’m not making it up. Mum had to push to get me seen."
   },
   {
    "who": "dr",
    "text": "Thank you, Mia. I want to say clearly: I believe you. What you’re describing is real, and I’m going to take it seriously. I’ll ask some questions, explain what I think, and we’ll make a plan together — including school. Is that okay with you both?",
    "dom": "rto",
    "why": "Believes her explicitly and sets a shared agenda"
   },
   {
    "who": "pt",
    "text": "Yes. Thank you."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When did this start, and was there anything around then — an illness, a virus?",
    "dom": "tasks",
    "why": "Onset and possible post-viral trigger"
   },
   {
    "who": "pt",
    "text": "I’m not sure exactly. It’s been getting worse."
   },
   {
    "who": "dr",
    "text": "Does it happen only when you’re upright, and settle when you sit or lie down?",
    "dom": "tasks",
    "why": "Confirms the orthostatic pattern"
   },
   {
    "who": "pt",
    "text": "Yes. Lying down, it goes."
   },
   {
    "who": "dr",
    "text": "Have you ever actually passed out? And has it ever happened while you’re exercising, or while you’re lying down?",
    "dom": "tasks",
    "why": "Screens for exertional or supine syncope — cardiac red flags"
   },
   {
    "who": "pt",
    "text": "I’ve never fully blacked out. Not during PE — I just feel awful when I stand still."
   },
   {
    "who": "dr",
    "text": "Any chest pain, or getting breathless more than your friends?",
    "dom": "tasks",
    "why": "Further cardiac screen"
   },
   {
    "who": "pt",
    "text": "No."
   },
   {
    "who": "dr",
    "text": "Mum, maybe you know this best: has anyone in the family died suddenly or unexpectedly young, or had a heart condition that runs in families?",
    "dom": "tasks",
    "why": "Family history of sudden cardiac death or inherited cardiac disease"
   },
   {
    "who": "pt",
    "text": "(Mum) Not that we know of."
   },
   {
    "who": "dr",
    "text": "Mia, a few more: how much do you drink in a day, how’s your eating, and are your periods heavy?",
    "dom": "tasks",
    "why": "Screens dehydration, eating disorder and iron-deficiency risk"
   },
   {
    "who": "pt",
    "text": "I don’t drink loads, to be honest. Eating’s okay. Periods are normal, I think."
   },
   {
    "who": "dr",
    "text": "Thanks. Mum, would it be okay if I spoke to Mia on her own for a minute? It’s something I do with everyone her age.",
    "dom": "gs",
    "why": "Offers confidential time alone, as for any 16-year-old"
   },
   {
    "who": "pt",
    "text": "(Mum) Of course."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Mia, just us now. How is all this affecting you — your mood, sleep, friends?",
    "dom": "rto",
    "why": "Explores psychological impact privately"
   },
   {
    "who": "pt",
    "text": "I feel rubbish about it. I’m tired all the time. I worry people think I’m faking."
   },
   {
    "who": "dr",
    "text": "That sounds really hard, and it’s okay if it gets you down. It doesn’t mean it’s ‘just anxiety’. What do you think is going on, and what were you hoping we’d do today?",
    "dom": "rto",
    "why": "Elicits ideas and expectations without dismissing"
   },
   {
    "who": "pt",
    "text": "Something’s wrong with how my body handles standing. I want someone to believe me and to tell school."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "(Mum back.) You might be right, Mia. There’s a condition called PoTS — postural tachycardia syndrome — where standing makes the heart race too much and you feel dizzy, foggy and exhausted, even though the blood pressure mostly holds. It’s real, it’s commoner in young women, and it can be managed.",
    "dom": "tasks",
    "why": "Explains the likely diagnosis in plain words"
   },
   {
    "who": "pt",
    "text": "So I’m not making it up."
   },
   {
    "who": "dr",
    "text": "Definitely not. But I need to check properly and rule out other causes. I’d like you in the surgery for a standing test — we measure your heart rate and blood pressure lying down, then standing for ten minutes. Plus a heart tracing and blood tests for iron, blood count, thyroid, kidneys and sugar.",
    "dom": "tasks",
    "why": "Active stand test, ECG and baseline bloods face to face"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Meanwhile, there are things that genuinely help: drinking more through the day, standing up slowly, not standing still for long, crossing your legs or clenching your calves when you feel it coming, and avoiding hot showers and big sugary meals. We’ll discuss extra salt and compression tights once the tests are back.",
    "dom": "tasks",
    "why": "Starts safe non-drug measures while tests are pending"
   },
   {
    "who": "pt",
    "text": "I can do the water thing."
   },
   {
    "who": "dr",
    "text": "And school. I’ll write a letter saying this is a medical problem being investigated, asking for water in class, being allowed to sit, rest breaks and an individual healthcare plan. Schools have a legal duty to support pupils with medical conditions. We can ask about exam arrangements too.",
    "dom": "rto",
    "why": "Concrete school advocacy"
   },
   {
    "who": "pt",
    "text": "(Mum) That would make a huge difference."
   },
   {
    "who": "dr",
    "text": "If the tests fit PoTS, I’ll refer you to a specialist team who can confirm it and add medicine if needed. Mia, can you tell me what we’ve agreed, in your own words?",
    "dom": "gs",
    "why": "Referral plan and teach-back"
   },
   {
    "who": "pt",
    "text": "Standing test and bloods and a heart tracing. Drink more, stand up slowly. A letter for school. Then maybe a specialist."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Perfect. Some things need urgent help: fainting during exercise, fainting while lying down, chest pain, or palpitations followed by collapse — that’s 999 or A&E. If you fully faint for any reason, contact us the same day. I’ll see you with the results. Anything else?",
    "dom": "gs",
    "why": "Specific cardiac red flags and follow-up"
   },
   {
    "who": "pt",
    "text": "No. Thank you for believing me."
   },
   {
    "who": "dr",
    "text": "You shouldn’t have had to fight for it. We’ll sort this out together.",
    "dom": "rto",
    "why": "Closes by validating her experience"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Addressed Mia directly; let her tell the story; explicitly believed her.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored school impact, fatigue, mood, eating, fluids, periods; offered time alone.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up ‘attention-seeking’, ‘Mum had to push’ and the fear of not being believed.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: something wrong with how her body handles standing. Concern: being dismissed; school. Expectation: to be believed and school told.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Face-to-face active stand test; ECG; FBC, ferritin, U&E, glucose, TFTs.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "PoTS vs vasovagal, orthostatic hypotension, anaemia, thyroid, dehydration, eating disorder, arrhythmia; anxiety as a contributor.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened exertional and supine syncope, chest pain, breathlessness, family sudden death (NICE CG109 red flags).",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Likely PoTS pending confirmation, explained in plain language without dismissing anxiety’s possible role.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Non-drug measures started; salt and compression after results; specialist referral; medicines specialist-initiated.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Mood and psychological impact explored privately; confidentiality respected (GMC 0–18 years).",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "School letter and healthcare plan; teach-back; 999 cardiac red flags; review with results.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Mia Calloway",
    "age": "16 years · female",
    "pmh": [
     "Nil significant recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Dizziness, palpitations and near-faints on standing; missing school. Mother booked the appointment.",
    "reason": "“Every time I stand up I go dizzy — school think I’m making it up.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open & believe",
     "d": "Speak to Mia first. Say you believe her before anything else."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Orthostatic pattern, onset, syncope on exertion or lying, chest pain, family sudden death, fluids, eating, periods. Offer time alone."
    },
    {
     "t": "4–6",
     "h": "ICE (alone)",
     "d": "Mood, sleep, fear of not being believed; what she wants (school told)."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "PoTS explained; active stand, ECG and bloods face to face; interim non-drug measures; school letter."
    },
    {
     "t": "10–12",
     "h": "Close",
     "d": "Teach-back; cardiac red flags; review and referral."
    }
   ],
   "wordPics": {
    "fail": "Talks to Mum not Mia; labels it anxiety without assessment; no cardiac red-flag screen; no plan for an active stand or ECG; ignores school.",
    "pass": "Believes her; screens cardiac red flags and family history; plans active stand, ECG and bloods; explains PoTS; gives non-drug advice; offers a school letter.",
    "exc": "All of that, plus: offers time alone and explores mood without using it to dismiss; knows the adolescent HR threshold; arranges the stand test face to face; cites the school’s legal duty and an individual healthcare plan; teach-back; specific 999 triggers."
   },
   "avoid": [
    {
     "dont": "“It’s probably anxiety — lots of teenagers get this.”",
     "instead": "“I believe you. Let’s find out what’s causing it.”",
     "why": "Defaulting to anxiety repeats the dismissal she came in with and risks missing cardiac disease."
    },
    {
     "dont": "(To Mum) “How long has she had this?”",
     "instead": "(To Mia) “When did it start for you?”",
     "why": "At 16 she is the patient; speak to her first."
    },
    {
     "dont": "“Just drink more water and see how it goes.”",
     "instead": "“Drink more while we do a standing test, a heart tracing and bloods.”",
     "why": "Advice without assessment is not a work-up."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Education",
     "t": "Missed school and exam worries. A school letter, an individual healthcare plan and exam access arrangements reduce the harm."
    },
    {
     "h": "Family",
     "t": "Her mother advocated to get her seen; involve her with Mia’s agreement."
    }
   ],
   "legal": [
    {
     "h": "Children and Families Act 2014 s100",
     "t": "Schools must make arrangements to support pupils with medical conditions (DfE statutory guidance, 2015)."
    },
    {
     "h": "Equality Act 2010",
     "t": "If the condition has a substantial and long-term effect on daily activities, it can count as a disability, and reasonable adjustments are required."
    },
    {
     "h": "Consent at 16",
     "t": "Mental Capacity Act 2005 applies from 16: presume capacity. GMC 0–18 years (2018): offer confidential time alone."
    }
   ],
   "professional": [
    {
     "h": "Believing young people",
     "t": "GMC 0–18 years: listen to children and young people and take their views seriously."
    },
    {
     "h": "Avoid diagnostic overshadowing",
     "t": "Coexisting anxiety should not stop assessment for physical causes."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "PoTS UK (charity) information for patients, families and schools; school nurse involvement."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Syncope during exertion or while lying down — urgent cardiology",
     "Family history of sudden cardiac death under 40 or inherited cardiac condition",
     "Chest pain, palpitations followed by collapse, new breathlessness, abnormal ECG or murmur (NICE CG109)"
    ],
    "psychosocial": [
     "School absence and being called attention-seeking",
     "Fatigue, mood, sleep; talk alone",
     "Fluids, eating and periods"
    ],
    "ice": [
     "Idea: something wrong with how her body copes with standing",
     "Concern: not being believed; school and exams",
     "Expectation: to be believed and for school to be told"
    ]
   },
   "diagnosis": "Orthostatic intolerance, probable PoTS, pending active stand test, ECG and bloods; cardiac and other causes still to exclude.",
   "diagnosisLay": "“When you stand, blood pools in your legs. Your heart speeds up a lot to compensate, which causes the racing, dizziness and fog. It’s a real problem with how your body adjusts to standing.”",
   "management": {
    "reflectIce": "“You wanted someone to believe you and to tell school. I believe you, and I’ll write to them.”",
    "psychosocial": "School letter and healthcare plan; support for low mood alongside, not instead of, the work-up.",
    "sharedPlan": [
     "Face-to-face active stand test, ECG, FBC, ferritin, U&E, glucose, TFTs",
     "Non-drug measures now: fluids, rise slowly, counter-manoeuvres, avoid triggers; salt and compression after results",
     "Specialist referral if PoTS likely; medicines specialist-initiated"
    ],
    "safetyNet": [
     "999/A&E: fainting during exercise or lying down, chest pain, palpitations then collapse",
     "Same day: any full faint; review with results"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Dizziness pathway",
    "s": "Visual algorithm · postural symptoms and PoTS",
    "href": "algorithms/dizziness.html"
   },
   {
    "ic": "🗺️",
    "t": "Transient loss of consciousness",
    "s": "Visual algorithm · cardiac red flags",
    "href": "algorithms/tloc.html"
   },
   {
    "ic": "🗺️",
    "t": "Palpitations pathway",
    "s": "Visual algorithm · ECG and referral",
    "href": "algorithms/palpitations.html"
   },
   {
    "ic": "💠",
    "t": "Vasovagal syncope",
    "s": "Protocol · differential and counter-manoeuvres",
    "href": "management/vasovagal-syncope.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you take a young person seriously while still thinking clinically. It is failed by dismissal, by missing cardiac red flags, and by ignoring the school problem she came about.",
   "items": [
    {
     "dom": "rto",
     "fail": "Taking the history from Mum.",
     "why": "Mia is 16 and the patient; talking over her repeats the experience of not being heard.",
     "fix": "Ask Mia first, and offer time alone."
    },
    {
     "dom": "tasks",
     "fail": "Diagnosing anxiety on the history alone.",
     "why": "Diagnostic overshadowing; physical causes, including cardiac ones, are missed.",
     "fix": "Screen cardiac red flags, plan an active stand, ECG and bloods, and treat anxiety as a possible contributor."
    },
    {
     "dom": "tasks",
     "fail": "No family history of sudden death or exertional syncope.",
     "why": "These are NICE CG109 red flags for urgent cardiology.",
     "fix": "Ask both explicitly, and ask Mum about the family history."
    },
    {
     "dom": "tasks",
     "fail": "‘Measuring’ the stand test over video.",
     "why": "HR and BP over 10 minutes need proper equipment and supervision.",
     "fix": "Book a face-to-face appointment for the stand test and ECG."
    },
    {
     "dom": "tasks",
     "fail": "Starting a beta-blocker or fludrocortisone in primary care.",
     "why": "PoTS drugs are specialist-initiated and often off-label.",
     "fix": "Start non-drug measures and refer."
    },
    {
     "dom": "gs",
     "fail": "No action on school.",
     "why": "It is her main reason for attending; ignoring it scores poorly.",
     "fix": "Offer a letter, an individual healthcare plan and exam arrangements."
    }
   ]
  }
 },
 "epilepsy-driving": {
  "stem": {
   "name": "Lewis Tran",
   "age": "34-year-old man",
   "pmh": [
    "Epilepsy, usually well controlled"
   ],
   "meds": [
    "Anti-seizure medication (as on the repeat record); recent gap in collection"
   ],
   "allergy": "No known drug allergies",
   "recent": "Breakthrough seizure last week after a period of missed medication. Has since restarted his tablets.",
   "reason": "Video consultation: “I’ve restarted my tablets. I can keep driving, can’t I? I need my car for work.”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG217 (epilepsies in children, young people and adults, 2022, updated August 2026) · [2] DVLA Assessing fitness to drive: neurological disorders (epilepsy and seizures) and leaflet INS9 · [3] GMC Confidentiality: patients’ fitness to drive and reporting concerns to the DVLA or DVA (2017)",
   "summary": "A breakthrough seizure in established epilepsy means he must stop driving now and tell the DVLA, whatever his tablets are doing. Explore why the doses were missed without blame, fix the supply problem, review control and safety, and support him through the loss of driving.",
   "points": [
    {
     "h": "Why were the tablets missed?",
     "t": "Ask openly: forgetting, running out, repeat prescription or pharmacy problems, feeling well and doubting the need, side-effects, cost or a chaotic routine. Missed or abruptly stopped anti-seizure medication can provoke seizures and, rarely, status epilepticus. NICE NG217 [1] supports adherence help such as simplified regimens, reminders and involving the pharmacist."
    },
    {
     "h": "Review the seizure and control",
     "t": "What happened, any injury or tongue biting, duration, recovery, other triggers (sleep loss, alcohol, illness, stress), other recent seizures including minor ones or auras. Consider an epilepsy specialist review (NICE NG217 [1]) if control was not truly established or the regimen needs change."
    },
    {
     "h": "SUDEP and safety",
     "t": "NICE NG217 [1]: discuss the individual risk of epilepsy-related death including SUDEP and how to reduce it; non-adherence to medication and uncontrolled tonic-clonic seizures are modifiable risk factors. Everyday safety: showers not baths, care with heights, cooking and swimming alone, and a seizure plan for family or colleagues."
    },
    {
     "h": "Driving: stop and tell the DVLA",
     "t": "DVLA [2]: after a seizure the driver must stop driving and notify the DVLA. Restarting medication does not change that. The law places the duty on the patient; the doctor advises clearly and records the advice."
    },
    {
     "h": "Which rule applies",
     "t": "DVLA Group 1 (car and motorcycle) [2]: epilepsy requires 12 months free of any seizure before relicensing (special rules cover asleep-only patterns and seizures without loss of consciousness). The 6-month period after a first unprovoked seizure does not apply to someone with established epilepsy. A shorter route after a seizure during medication change applies only when the change was made on medical advice. Group 2 (lorry and bus) requires 10 years seizure-free without medication. The DVLA makes the licensing decision."
    },
    {
     "h": "If he keeps driving",
     "t": "GMC [3]: try to persuade him to stop and to notify. If he continues to drive against advice and you judge others are at risk of death or serious harm, contact the DVLA medical adviser promptly. Try to tell him before you disclose, and afterwards confirm in writing that you have done so; record it."
    },
    {
     "h": "Work and money",
     "t": "Explore the impact on his job. Access to Work can fund travel to work for people who cannot drive because of a health condition. A fit note can advise amended duties if non-driving work is possible."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Lewis, I’m Dr Okafor. Thanks for getting in touch so quickly after last week. Tell me what happened.",
    "dom": "rto",
    "why": "Open question and acknowledges he sought help"
   },
   {
    "who": "pt",
    "text": "So I had a seizure last week, first one in ages. I’ll be honest, I’d been missing my tablets. I got busy, ran out, felt fine, so I didn’t rush to sort it. I’m back on them now. I can carry on driving, can’t I? I drive for my job. Please don’t tell me I have to stop."
   },
   {
    "who": "dr",
    "text": "Thank you for being so honest about the tablets, that really helps. I can hear how much the driving matters, and we will talk about it properly, I promise. Can I first understand what happened, and then we’ll come to the car?",
    "dom": "gs",
    "why": "Acknowledges the agenda and sequences the consultation"
   },
   {
    "who": "pt",
    "text": "Okay. Fair enough."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Talk me through the seizure. Where were you, was anyone with you, and were you hurt?",
    "dom": "tasks",
    "why": "Reviews this seizure and screens for injury"
   },
   {
    "who": "pt",
    "text": "At home. It was like my usual ones. I felt rough after, but I didn’t hurt myself as far as I know."
   },
   {
    "who": "dr",
    "text": "Good. Has there been anything else, even small ones, like the warning feelings or jerks you sometimes get, over the last few weeks?",
    "dom": "tasks",
    "why": "Checks for other seizures, including minor ones"
   },
   {
    "who": "pt",
    "text": "Not that I noticed."
   },
   {
    "who": "dr",
    "text": "And around that time, anything else going on: short of sleep, drinking more than usual, unwell, stressed?",
    "dom": "tasks",
    "why": "Screens for other triggers"
   },
   {
    "who": "pt",
    "text": "Work’s been full on. Long days. That’s partly why I let the tablets slide."
   },
   {
    "who": "dr",
    "text": "Tell me about the tablets. Was it mainly running out, forgetting, or a sense that you didn’t really need them because you felt well? Any side-effects that put you off?",
    "dom": "tasks",
    "why": "Explores the reasons for non-adherence without judgement"
   },
   {
    "who": "pt",
    "text": "Running out, mostly. I kept meaning to order the repeat. And yeah, I felt fine, so it didn’t seem urgent."
   },
   {
    "who": "dr",
    "text": "That’s really common, and it’s fixable. The tablets work by keeping the level steady, so gaps, especially stopping suddenly, can bring seizures on. How are you in yourself with all this, your mood?",
    "dom": "tasks",
    "why": "Explains why adherence matters; screens mood"
   },
   {
    "who": "pt",
    "text": "Worried, if I’m honest. Mainly about work."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What’s the worry about work, exactly?",
    "dom": "rto",
    "why": "Explores the hidden agenda"
   },
   {
    "who": "pt",
    "text": "If I can’t drive, I don’t know how I keep my job. I’ve got bills. That’s why I’m hoping you’ll say restarting the tablets sorts it."
   },
   {
    "who": "dr",
    "text": "That’s a real worry, and I’m not going to brush past it. I also have to be straight with you, because it’s your safety and other people’s on the road.",
    "dom": "rto",
    "why": "Validates the livelihood fear before the hard message"
   },
   {
    "phase": "The driving conversation",
    "clock": "6–9 min",
    "who": "dr",
    "text": "After a seizure, the law says you must stop driving and tell the DVLA. Restarting the tablets is the right thing to do, but it doesn’t change that rule. I’m sorry, I know it’s the part you didn’t want to hear.",
    "dom": "tasks",
    "why": "States the DVLA duty clearly and kindly"
   },
   {
    "who": "pt",
    "text": "(silence) …For how long?"
   },
   {
    "who": "dr",
    "text": "For a car licence, someone with epilepsy usually needs to be free of any seizures for 12 months before the DVLA will relicense. If you hold a lorry or bus licence as well, those rules are much stricter. The DVLA makes the final decision, but I’d plan on a year for a car.",
    "dom": "tasks",
    "why": "Correct Group 1 rule for established epilepsy; mentions Group 2"
   },
   {
    "who": "pt",
    "text": "A year. That’s… a lot."
   },
   {
    "who": "dr",
    "text": "It is. The good news is that taking the tablets every day is exactly what gets you back behind the wheel. Every month without a seizure counts toward it.",
    "dom": "rto",
    "why": "Frames adherence as the route back to driving"
   },
   {
    "who": "pt",
    "text": "And if I just… kept quiet?"
   },
   {
    "who": "dr",
    "text": "I understand why you’d ask. Driving after a seizure without telling the DVLA is illegal, your insurance wouldn’t cover you, and if you had a seizure at the wheel someone could be killed. It’s your legal responsibility to tell them. I’ll record today that I’ve advised you. If I learned that someone was still driving, I’d have to consider telling the DVLA myself, and I’d tell you first. I’d much rather help you do it.",
    "dom": "tasks",
    "why": "Explains legal, insurance and GMC position honestly without threat"
   },
   {
    "who": "pt",
    "text": "No, I get it. I don’t want to hurt anyone."
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "Let’s make the next year as manageable as we can. For the tablets: could the pharmacy send them automatically, and would phone reminders help? I can put a note on your repeat so it’s flagged before you run out.",
    "dom": "tasks",
    "why": "Practical adherence plan"
   },
   {
    "who": "pt",
    "text": "The pharmacy thing would help. And alarms."
   },
   {
    "who": "dr",
    "text": "For work, is there part of your job that doesn’t involve driving? A fit note can suggest amended duties, and there’s a scheme called Access to Work that can pay towards travel to work when someone can’t drive for health reasons. It would be worth talking to your employer about it.",
    "dom": "gs",
    "why": "Addresses livelihood with concrete support"
   },
   {
    "who": "pt",
    "text": "I didn’t know that existed. I’ll ask."
   },
   {
    "who": "dr",
    "text": "I’d also like the epilepsy team to review you, to make sure your treatment is right. And some safety points while things settle: showers rather than baths, no swimming alone, and care with heights. There’s also a rare risk of sudden death with poorly controlled epilepsy, and steady tablets are the best protection against it.",
    "dom": "tasks",
    "why": "Specialist review, seizure safety and sensitive SUDEP information"
   },
   {
    "who": "pt",
    "text": "Okay. That’s sobering."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you have a seizure lasting more than five minutes, or one after another without coming round, whoever is with you should call 999. Can you tell me back what you’re going to do after this call?",
    "dom": "gs",
    "why": "Emergency safety-net and teach-back"
   },
   {
    "who": "pt",
    "text": "Stop driving, tell the DVLA, sort the pharmacy and alarms, talk to work about Access to Work, and you’ll refer me to the epilepsy team."
   },
   {
    "who": "dr",
    "text": "That’s it exactly. I’ll see you in four weeks to see how the tablets and work are going. I know this is a hard day, and you’ve handled it well.",
    "dom": "gs",
    "why": "Follow-up booked and closes supportively"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let him state his request about driving before steering; acknowledged his honesty about missed doses.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "His work, long hours, finances, and how the loss of driving affects him.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “please don’t tell me I have to stop” and the work pressure behind the missed doses.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "His idea (restarting tablets fixes it), concern (job and bills), and expectation (permission to drive).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Seizure description, injury, minor seizures, triggers, adherence reasons, mood.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Missed medication versus other triggers; whether control was truly established; need for specialist review.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Injury, recurrent or prolonged seizures, and safety at home; SUDEP information given sensitively.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Breakthrough seizure from missed medication in established epilepsy; DVLA Group 1 12-month rule.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Stop driving and notify the DVLA; adherence plan with pharmacy and reminders; epilepsy specialist review.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Work support (fit note amended duties, Access to Work) and mood.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 for prolonged or clustered seizures; documented driving advice; review in four weeks; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Lewis Tran",
    "age": "34 years · male",
    "pmh": [
     "Epilepsy (usually well controlled)"
    ],
    "meds": [
     "Anti-seizure medication (repeat)"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Reports breakthrough seizure last week after missed doses. Now back on medication.",
    "reason": "Video consultation: wants to discuss the seizure and driving."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "He puts the driving question first. Acknowledge it and promise to return to it; do not answer before you know what happened."
    },
    {
     "t": "1–5",
     "h": "Seizure and adherence",
     "d": "Description, injury, minor seizures, triggers, reasons for missed doses, mood. No blame."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "The fear for his job and bills. Validate it before the hard message."
    },
    {
     "t": "6–9",
     "h": "The DVLA conversation",
     "d": "Stop now, tell the DVLA, 12 months seizure-free for a car in established epilepsy, Group 2 far stricter. Legal, insurance and GMC position without threat."
    },
    {
     "t": "9–12",
     "h": "Plan and close",
     "d": "Pharmacy and reminders, work support, specialist review, safety and SUDEP, 999 advice, teach-back, review in four weeks."
    }
   ],
   "wordPics": {
    "fail": "Tells him he can drive now he is back on tablets, or quotes the 6-month first-seizure rule; lectures him about non-adherence; never asks why doses were missed; no DVLA advice documented; ignores the job worry.",
    "pass": "Explores adherence without blame, reviews the seizure, states clearly that he must stop driving and tell the DVLA, knows the 12-month Group 1 rule, and gives a basic adherence and safety plan.",
    "exc": "All of the above, plus: validates the livelihood fear before the hard news and returns to it with concrete help (Access to Work, amended duties); frames adherence as the route back to driving; handles “what if I keep quiet?” honestly with the GMC position; gives SUDEP information sensitively; teach-back and booked review."
   },
   "avoid": [
    {
     "dont": "“Now you’re back on your tablets you should be fine to drive.”",
     "instead": "“Restarting them is right, but the law still says you must stop driving and tell the DVLA.”",
     "why": "Colluding with continued driving is unsafe and a professional failure."
    },
    {
     "dont": "“You shouldn’t have stopped your tablets. This is what happens.”",
     "instead": "“Running out when life’s busy is really common. Let’s set up a system so it doesn’t happen again.”",
     "why": "Blame shuts down the adherence conversation and damages the relationship."
    },
    {
     "dont": "“If you drive I’ll report you to the DVLA.”",
     "instead": "“It’s your responsibility to tell them. If someone kept driving I’d have to consider telling them myself, and I’d tell you first. I’d rather help you do it.”",
     "why": "A threat destroys trust; an honest explanation of the GMC position keeps him on side."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Livelihood",
     "t": "Losing a licence can threaten a job that involves driving. Explore alternative duties, travel options and finances; the fear is often what drives concealment."
    },
    {
     "h": "Access to Work",
     "t": "The Access to Work scheme (DWP) can help pay for travel to work, such as taxis, for people who cannot use public transport or drive because of a health condition."
    }
   ],
   "legal": [
    {
     "h": "DVLA duty",
     "t": "DVLA Assessing fitness to drive: after a seizure the driver must stop driving and notify the DVLA. Group 1 with epilepsy: 12 months free of any seizure before relicensing (asleep-only and no-loss-of-consciousness patterns have separate rules). Group 2: 10 years seizure-free without medication. Failing to notify can bring a fine of up to £1,000 and prosecution if involved in a collision."
    },
    {
     "h": "Insurance",
     "t": "Driving without meeting the medical standards, or without declaring the condition, is likely to invalidate motor insurance."
    }
   ],
   "professional": [
    {
     "h": "GMC and confidentiality",
     "t": "GMC Confidentiality: patients’ fitness to drive (2017): make sure the patient understands the condition may affect driving and that they have a legal duty to tell the DVLA. If they continue to drive and put others at risk of death or serious harm, contact the DVLA promptly; try to tell the patient first and confirm in writing afterwards. Record the advice given."
    },
    {
     "h": "Fit note",
     "t": "A fit note can state “may be fit for work” with amended duties (no driving) where the employer can accommodate it."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Epilepsy Action and the Epilepsy Society offer information on driving, work and SUDEP. The community pharmacy can set up managed repeat dispensing or collection reminders."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Prolonged seizure or clusters without recovery (status epilepticus risk)",
     "Head injury, tongue biting or other injury during the seizure",
     "Other recent seizures, including minor ones, suggesting control was not established",
     "Low mood or hopelessness about work and driving"
    ],
    "psychosocial": [
     "Job that involves driving and the financial pressure behind his request",
     "Long working hours and sleep loss as triggers",
     "Practical barriers to ordering repeats"
    ],
    "ice": [
     "Idea: restarting the tablets means he is safe to drive",
     "Concern: losing his job and not paying the bills",
     "Expectation: permission to keep driving"
    ]
   },
   "diagnosis": "“This was a breakthrough seizure, almost certainly because of the gap in your tablets. Because you have epilepsy, the law says you must stop driving and tell the DVLA, and for a car licence you’ll usually need 12 months without any seizures before you can drive again.”",
   "diagnosisLay": "“Your tablets are like a dam holding back the water. When the level drops because doses are missed, the water can spill over. Once it has spilled, the DVLA wants to see the dam hold for a full year before you drive again.”",
   "management": {
    "reflectIce": "“You’re frightened about your job and the bills, and that’s exactly why I want to help you plan the next year, not just tell you to stop.”",
    "psychosocial": "Pair the hard message with real help: Access to Work for travel, amended duties via a fit note, and a conversation with his employer. Check his mood again at review.",
    "sharedPlan": [
     "Stop driving now and notify the DVLA (his legal duty); advice documented",
     "Adherence: pharmacy repeat system, phone reminders, flag on the repeat record",
     "Epilepsy specialist review",
     "Seizure safety and SUDEP information"
    ],
    "safetyNet": [
     "999 if a seizure lasts over five minutes or seizures follow one another without recovery",
     "Review in four weeks; sooner if further seizures or low mood"
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
    "ic": "💠",
    "t": "Epilepsy protocol",
    "s": "Anti-seizure medicines · adherence",
    "href": "management/epilepsy.html"
   },
   {
    "ic": "💠",
    "t": "Driving and disease",
    "s": "Protocol · DVLA rules",
    "href": "management/driving-diseases.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA guide",
    "s": "Fitness to drive · GMC disclosure",
    "href": "dvla.html"
   },
   {
    "ic": "📝",
    "t": "Fit notes",
    "s": "Amended duties",
    "href": "fit-note.html"
   }
  ],
  "pitfalls": {
   "intro": "The clinical part of this station is straightforward. It is failed on driving: either colluding with a frightened man, or delivering the DVLA rule as a threat with no help attached.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Quoting “six months off driving” because that is the first-seizure rule.",
     "why": "He has established epilepsy. The Group 1 rule is 12 months seizure-free. Wrong rules are a clinical management fail.",
     "fix": "“For someone with epilepsy, it’s usually 12 months without any seizure for a car licence. The DVLA decides.”"
    },
    {
     "dom": "tasks",
     "fail": "Letting him think restarting the tablets means he can drive.",
     "why": "Collusion with unsafe driving; also misses the legal and insurance consequences.",
     "fix": "“Restarting them is right, and it’s how you get back to driving, but the law says stop now and tell the DVLA.”"
    },
    {
     "dom": "tasks",
     "fail": "Never asking why the tablets were missed.",
     "why": "The cause (running out, feeling well) is the thing to fix; without it the seizure will recur.",
     "fix": "“Was it running out, forgetting, or feeling you didn’t need them?” Then a practical plan with the pharmacy."
    },
    {
     "dom": "rto",
     "fail": "Telling him off for stopping his medication.",
     "why": "“Judgemental approach.” He was honest; blame makes concealment more likely next time.",
     "fix": "Thank him for his honesty and normalise the problem before solving it."
    },
    {
     "dom": "rto",
     "fail": "Delivering the driving rule and moving on without acknowledging his job.",
     "why": "“Does not respond to the patient’s concerns.” The livelihood fear is the hidden agenda.",
     "fix": "Name the fear, then bring concrete help: Access to Work, amended duties, talking to his employer."
    },
    {
     "dom": "gs",
     "fail": "No documentation of the driving advice and no plan if he keeps driving.",
     "why": "The GMC expects the advice recorded and a clear, honest route if he does not comply.",
     "fix": "“I’m recording that I’ve advised you. If someone kept driving I’d have to consider telling the DVLA, and I’d tell you first.”"
    }
   ]
  }
 },
 "epilepsy-pregnancy-valproate": {
  "stem": {
   "name": "Aoife Brennan",
   "age": "28-year-old woman",
   "pmh": [
    "Epilepsy, controlled on sodium valproate"
   ],
   "meds": [
    "Sodium valproate (dose as on the repeat record)"
   ],
   "allergy": "No known drug allergies",
   "recent": "Positive home pregnancy test, unplanned, about 6 weeks. Valproate Pregnancy Prevention Programme status to be checked on the record.",
   "reason": "Video consultation: “I’m pregnant and I’m on sodium valproate. Should I stop it right now?”"
  },
  "knowledge": {
   "guideline": "[1] MHRA National Patient Safety Alert NatPSA/2023/013/MHRA (November 2023) and MHRA Drug Safety Update (January 2024): valproate new safety measures · [2] MHRA Drug Safety Update (September 2024): valproate use in men · [3] MHRA Valproate Pregnancy Prevention Programme (Prevent) · [4] NICE NG217 (epilepsies, 2022, updated August 2026) · [5] NICE NG247 (maternal and child nutrition, 2025) · [6] BNF sodium valproate",
   "summary": "A woman on valproate with a positive pregnancy test needs three things today: do not stop the valproate suddenly, start folic acid 5 mg daily, and an urgent referral to the epilepsy specialist team and the obstetric team. Give honest risk information, respect her choices about the pregnancy, and find out why the Pregnancy Prevention Programme did not prevent this.",
   "points": [
    {
     "h": "Do not stop suddenly",
     "t": "MHRA [1][2] and NICE NG217 [4]: patients should not stop valproate without specialist advice. Abrupt withdrawal risks convulsive seizures, status epilepticus, injury and SUDEP, all dangerous to mother and fetus. Any switch is planned and supervised by the specialist team."
    },
    {
     "h": "The size of the risk",
     "t": "MHRA [3]: children exposed to valproate in the womb have around an 11% risk of major birth defects (including neural tube defects, cleft lip and palate, heart and limb defects) and up to a 30–40% risk of neurodevelopmental disorders (learning difficulties, autism, ADHD). Risk rises with dose. Give these figures honestly and without catastrophising."
    },
    {
     "h": "Urgent specialist review",
     "t": "NICE NG217 [4]: refer women who are pregnant to the epilepsy specialist team for review of their anti-seizure medication, and share care with a specialist obstetric team and primary care. Make the referral urgently today. The specialists weigh switching against seizure risk and plan detailed anomaly scanning."
    },
    {
     "h": "Folic acid",
     "t": "NICE NG247 [5]: offer folic acid 5 mg daily to those planning pregnancy or in the first 12 weeks who have an increased risk of a neural tube defect; NICE NG217 [4] recommends 5 mg daily for women on anti-seizure medication who could become pregnant. It works best before conception; start now anyway and continue to 12 weeks."
    },
    {
     "h": "Regulatory rules",
     "t": "MHRA [1]: from 31 January 2024 valproate must not be started in anyone under 55 unless two specialists independently document that there is no other effective or tolerated treatment. Women who could become pregnant must be on the Pregnancy Prevention Programme (effective contraception, pregnancy testing, annual specialist review with the Annual Risk Acknowledgement Form, now with a second specialist signature). MHRA [2] (September 2024): men taking valproate are advised to use effective contraception, as a precaution."
    },
    {
     "h": "Her choices",
     "t": "An unplanned pregnancy on a teratogenic drug raises choices she is entitled to make with full information: continuing the pregnancy with specialist care, or not continuing. The GP’s role is non-directive support and timely referral whichever she chooses."
    },
    {
     "h": "Seizure safety in pregnancy",
     "t": "Showers not baths, care with heights and cooking, sleep and stress management. Report any seizure promptly. Consultant-led antenatal care is needed; the UK Epilepsy and Pregnancy Register collects outcomes to inform future women and she can join while pregnant."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Aoife, I’m Dr Hughes. I can see you’re upset. Take your time and tell me what’s happened.",
    "dom": "rto",
    "why": "Notices distress and opens gently"
   },
   {
    "who": "pt",
    "text": "I’ve just done a test and it’s positive. I’m pregnant. It wasn’t planned. And I’m on sodium valproate for my epilepsy. I’ve read it’s really dangerous in pregnancy. Should I stop taking it right now? Have I already harmed the baby?"
   },
   {
    "who": "dr",
    "text": "I’m really glad you called straight away. That was exactly the right thing to do. Before anything else, the most important thing: please don’t stop your valproate suddenly on your own today.",
    "dom": "tasks",
    "why": "Leads with the key safety message"
   },
   {
    "who": "pt",
    "text": "But everything online says it’s dangerous for the baby."
   },
   {
    "who": "dr",
    "text": "It does carry real risks, and I’ll be honest with you about them. But stopping it suddenly can bring on seizures, and a bad seizure is dangerous for you and for the baby. Any change needs to be made carefully, with the specialists. Does that make sense?",
    "dom": "tasks",
    "why": "Explains why abrupt cessation is dangerous"
   },
   {
    "who": "pt",
    "text": "Okay. Okay. I won’t stop it."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Can I check a few things? When was the first day of your last period, roughly?",
    "dom": "tasks",
    "why": "Dates the pregnancy"
   },
   {
    "who": "pt",
    "text": "About six weeks ago, I think."
   },
   {
    "who": "dr",
    "text": "And how have your seizures been recently? Any in the last few months?",
    "dom": "tasks",
    "why": "Establishes current seizure control"
   },
   {
    "who": "pt",
    "text": "No, they’ve been well controlled."
   },
   {
    "who": "dr",
    "text": "Good. Are you taking any folic acid, or any other medicines at all?",
    "dom": "tasks",
    "why": "Medication and folic acid check"
   },
   {
    "who": "pt",
    "text": "No, nothing else."
   },
   {
    "who": "dr",
    "text": "Any pain in your tummy, or bleeding?",
    "dom": "tasks",
    "why": "Screens for early pregnancy complications"
   },
   {
    "who": "pt",
    "text": "No."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You asked whether you’ve already harmed the baby. That sounds like the thing weighing on you most.",
    "dom": "rto",
    "why": "Picks up the guilt cue"
   },
   {
    "who": "pt",
    "text": "(crying) I feel so stupid. I should have known. What kind of mother does that?"
   },
   {
    "who": "dr",
    "text": "You haven’t done anything wrong. This wasn’t planned, and you’ve come for help straight away. Can I ask how you feel about the pregnancy itself, separate from the tablets?",
    "dom": "rto",
    "why": "Removes blame and explores her feelings about the pregnancy without assuming"
   },
   {
    "who": "pt",
    "text": "I don’t know. I’m just scared. I can’t think past the tablets."
   },
   {
    "who": "dr",
    "text": "That’s completely understandable. You don’t need to decide anything today. Whatever you decide, I’ll support you.",
    "dom": "rto",
    "why": "Non-directive; gives her space"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me give you the honest picture. Babies exposed to valproate have around an 11 in 100 chance of a physical birth defect, such as a problem with the spine, face or heart. There’s also up to a 30 to 40 in 100 chance of problems with learning or development later. That also means many babies are not affected. The risk depends partly on the dose, and the specialists can look at your situation in detail.",
    "dom": "tasks",
    "why": "Accurate MHRA figures, framed both ways"
   },
   {
    "who": "pt",
    "text": "Thirty to forty… that’s so high."
   },
   {
    "who": "dr",
    "text": "It is significant, and I won’t pretend otherwise. That’s why I want the specialists involved quickly, not in weeks. They can review your medicine, plan detailed scans, and talk through all your options with you.",
    "dom": "rto",
    "why": "Acknowledges the figure and turns to action"
   },
   {
    "who": "pt",
    "text": "What can I actually do right now?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Three things today. One, keep taking your valproate as prescribed. Two, I’ll prescribe folic acid 5 milligrams, a higher dose than usual, to take every day until at least 12 weeks. It helps most before pregnancy, but it’s still recommended now. Three, I’m making an urgent referral to the epilepsy specialist team and the pregnancy team today.",
    "dom": "tasks",
    "why": "Clear three-part plan with honest framing of folic acid"
   },
   {
    "who": "pt",
    "text": "Will they take me off it?"
   },
   {
    "who": "dr",
    "text": "They may change it to a medicine that’s safer in pregnancy, but they’ll do it gradually and safely. That’s their decision with you, not something to do alone at home.",
    "dom": "tasks",
    "why": "Specialist-led switching"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "Can I ask, gently, and not to blame you at all: had anyone talked with you before about valproate and pregnancy, or about contraception while on it?",
    "dom": "tasks",
    "why": "Explores the Pregnancy Prevention Programme gap without blame"
   },
   {
    "who": "pt",
    "text": "Can we come back to that? I can’t really think about it right now."
   },
   {
    "who": "dr",
    "text": "Of course. I’ll look at your records myself, and we can talk about it at your next appointment. It matters for your care, not for blame.",
    "dom": "rto",
    "why": "Respects her pace; commits to checking the record"
   },
   {
    "who": "dr",
    "text": "While you’re waiting: showers rather than baths, and try to keep your sleep regular, because tiredness can trigger seizures. There’s also a national register for pregnant women with epilepsy that helps future mothers; the team can tell you about it.",
    "dom": "gs",
    "why": "Seizure-safety advice and the pregnancy register"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you have a seizure, call us or 111 the same day, and if a seizure lasts more than five minutes or they keep coming, whoever is with you should call 999. Also call if you have tummy pain or bleeding. What will you do when you put the phone down?",
    "dom": "gs",
    "why": "Specific safety-net and teach-back"
   },
   {
    "who": "pt",
    "text": "Keep taking the valproate, get the folic acid, wait for the specialists, and call if I have a seizure or any pain or bleeding."
   },
   {
    "who": "dr",
    "text": "Exactly right. I’ll ring you on Friday to make sure the appointment has come through, and to see how you’re feeling. You’re not on your own with this.",
    "dom": "gs",
    "why": "Owns the follow-up; compassionate close"
   },
   {
    "who": "pt",
    "text": "Thank you. I feel less panicky than when I rang."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Noticed her distress and let her say it all; praised her for calling straight away.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Her feelings about the unplanned pregnancy, support, and emotional state, explored without assumptions.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “have I already harmed the baby” (guilt) and “should I stop it right now” (panic-stopping risk).",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Her idea (valproate dangerous, maybe stop), concern (harm, guilt), expectation (what to do right now).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Gestation, seizure control, other medicines, folic acid, pain or bleeding; checked the record for PPP status.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Valproate exposure risk; seizure risk if stopped; early pregnancy complications.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Seizure-safety and status risk addressed; early pregnancy pain or bleeding screened.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Early unplanned pregnancy exposed to valproate: urgent specialist review needed; do not stop abruptly.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Continue valproate; folic acid 5 mg; urgent epilepsy and obstetric referral; non-directive support on her choices.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Pregnancy Prevention Programme gap explored without blame; mental health and support considered.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999/111 and same-day contact advice; teach-back; a booked follow-up call.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Aoife Brennan",
    "age": "28 years · female",
    "pmh": [
     "Epilepsy"
    ],
    "meds": [
     "Sodium valproate (repeat)"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Valproate: Pregnancy Prevention Programme applies. Annual Risk Acknowledgement Form status not visible in this summary.",
    "reason": "Urgent video call: “positive pregnancy test, on valproate”."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Safety message first",
     "d": "She asks whether to stop. Answer immediately: do not stop suddenly, and why."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Gestation, seizure control, other medicines and folic acid, pain or bleeding."
    },
    {
     "t": "4–6",
     "h": "Guilt and feelings",
     "d": "Address “what kind of mother” directly. Ask how she feels about the pregnancy, without assuming."
    },
    {
     "t": "6–8",
     "h": "Honest risk",
     "d": "About 11% birth defects, up to 30–40% neurodevelopmental, dose-related. Frame both ways."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Continue valproate, folic acid 5 mg, urgent epilepsy and obstetric referral, PPP question gently, seizure safety, 999/111 advice, teach-back, call on a set day."
    }
   ],
   "wordPics": {
    "fail": "Tells her to stop valproate now, or reassures her the risk is small; no urgent referral; forgets folic acid; blames her for the pregnancy; assumes she will or won’t continue the pregnancy.",
    "pass": "Leads with do-not-stop, gives the risk honestly, prescribes folic acid 5 mg, refers urgently to epilepsy and obstetric teams, and safety-nets for seizures.",
    "exc": "All of the above, plus: removes blame explicitly; asks how she feels about the pregnancy and stays non-directive; frames the figures both ways; honest that folic acid works best before conception; asks about the Pregnancy Prevention Programme gently and respects her pace; teach-back and a dated follow-up call."
   },
   "avoid": [
    {
     "dont": "“Stop the valproate straight away to protect the baby.”",
     "instead": "“Please keep taking it for now. Stopping suddenly can cause seizures, which are dangerous for you both.”",
     "why": "Abrupt withdrawal is the most dangerous single piece of advice in this station."
    },
    {
     "dont": "“Most babies are fine, so try not to worry.”",
     "instead": "“Around 11 in 100 have a physical birth defect and up to 30–40 in 100 have developmental problems. Many are not affected. The specialists will look at your situation.”",
     "why": "False reassurance breaches honest risk communication."
    },
    {
     "dont": "“Weren’t you told to use contraception on this drug?”",
     "instead": "“Had anyone talked with you before about valproate and pregnancy? It matters for your care, not for blame.”",
     "why": "Blame compounds her guilt and shuts the conversation down."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Unplanned pregnancy",
     "t": "Explore her feelings, support network and practical situation without assumption. Some women will want to continue; some will not. Both need timely, non-judgemental support."
    },
    {
     "h": "Emotional impact",
     "t": "Guilt and fear are common and can persist through pregnancy. Ask about mood at follow-up and in the antenatal period."
    }
   ],
   "legal": [
    {
     "h": "Abortion Act 1967",
     "t": "If she chooses not to continue, women can self-refer to abortion services in England. A doctor with a conscientious objection must not obstruct access and must make sure she can see another doctor without delay (GMC)."
    },
    {
     "h": "Driving",
     "t": "Her seizures are controlled. If her medication is changed and a seizure follows, DVLA rules on medication-change seizures would apply; advise her to ask the specialists about driving during any switch."
    }
   ],
   "professional": [
    {
     "h": "Pregnancy Prevention Programme",
     "t": "MHRA: all women who could become pregnant on valproate need the PPP, including effective contraception and an annual specialist review with the Annual Risk Acknowledgement Form. A pregnancy on valproate should prompt a practice review of her PPP status and, where there was a system failure, a significant event review."
    },
    {
     "h": "Duty of candour and honesty",
     "t": "Give accurate risk figures (GMC decision making and consent, 2020). If a gap in her previous care is found, be open with her about it."
    }
   ],
   "community": [
    {
     "h": "Support and information",
     "t": "The UK Epilepsy and Pregnancy Register (join while pregnant), Epilepsy Action, and the MHRA valproate patient guide. Community pharmacy should dispense valproate with the patient card and warning labels."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Recent seizures or poor control (higher risk during any switch)",
     "Abdominal pain or bleeding in early pregnancy (ectopic or miscarriage)",
     "Intention to stop valproate abruptly",
     "Severe distress or hopelessness"
    ],
    "psychosocial": [
     "Her feelings about the pregnancy and her support",
     "Guilt and fear driving the wish to stop the drug",
     "Whether she had PPP counselling and contraception (asked without blame)"
    ],
    "ice": [
     "Idea: valproate is dangerous, so she should stop it now",
     "Concern: she has already harmed the baby; guilt",
     "Expectation: to be told what to do today"
    ]
   },
   "diagnosis": "“You’re about six weeks pregnant and valproate does carry real risks for the baby, so you need the specialists quickly. The safest thing today is to keep taking it, start high-dose folic acid, and let them plan any change with you.”",
   "diagnosisLay": "“Think of your valproate as the brakes on your seizures. Slamming the brakes off suddenly is dangerous. The specialists can change them over carefully, one set coming on as the other comes off.”",
   "management": {
    "reflectIce": "“You asked if you’ve already harmed the baby, and you said you feel stupid. You haven’t done anything wrong. You called straight away, which is exactly right.”",
    "psychosocial": "Stay non-directive about the pregnancy; offer time and a follow-up call; return to the PPP question when she is ready; check mood at every contact.",
    "sharedPlan": [
     "Continue valproate unchanged until specialist review",
     "Folic acid 5 mg daily until at least 12 weeks",
     "Urgent referral to the epilepsy specialist team and obstetric/maternal medicine team today",
     "Seizure safety advice; information about the UK Epilepsy and Pregnancy Register"
    ],
    "safetyNet": [
     "Same-day contact or 111 after any seizure; 999 if a seizure lasts over five minutes or seizures cluster",
     "Call if abdominal pain or bleeding",
     "Follow-up call on a set day to confirm the appointment"
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
    "ic": "💠",
    "t": "Epilepsy protocol",
    "s": "Valproate · pregnancy prevention",
    "href": "management/epilepsy.html"
   },
   {
    "ic": "💠",
    "t": "Contraception protocol",
    "s": "Effective methods · UKMEC",
    "href": "management/contraception.html"
   },
   {
    "ic": "📋",
    "t": "Perinatal mental health",
    "s": "Case walkthrough · valproate in pregnancy",
    "href": "../cases/perinatal-mental-health.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you can hold two truths at once: valproate is a serious teratogen, and stopping it suddenly is dangerous. Candidates fail by picking one and ignoring the other, or by rushing past a frightened woman’s guilt.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Advising her to stop valproate today.",
     "why": "Abrupt withdrawal risks seizures, status and SUDEP. MHRA and NICE NG217 both say not to stop without specialist advice.",
     "fix": "First sentence of your answer: “Please don’t stop it suddenly.” Then explain why."
    },
    {
     "dom": "tasks",
     "fail": "Vague risk: “there’s some risk to the baby.”",
     "why": "She is entitled to accurate figures (GMC decision making and consent). Vagueness sounds evasive.",
     "fix": "“Around 11 in 100 physical birth defects, up to 30–40 in 100 developmental problems. Many babies are not affected.”"
    },
    {
     "dom": "tasks",
     "fail": "Referring routinely, or only to antenatal booking.",
     "why": "She needs urgent epilepsy specialist review and obstetric input. A routine referral may arrive after the window for decisions.",
     "fix": "“I’m making an urgent referral today to the epilepsy team and the pregnancy team, and I’ll check it has come through.”"
    },
    {
     "dom": "rto",
     "fail": "Asking “were you not using contraception?” early in the consultation.",
     "why": "Heard as blame; compounds guilt and shuts her down.",
     "fix": "Ask later, gently, and accept “can we come back to that?”."
    },
    {
     "dom": "rto",
     "fail": "Assuming she wants to continue (or end) the pregnancy.",
     "why": "“Makes assumptions.” The pregnancy was unplanned and her feelings are unknown.",
     "fix": "“How do you feel about the pregnancy itself, separate from the tablets? You don’t have to decide today.”"
    },
    {
     "dom": "gs",
     "fail": "Ending with “the specialists will be in touch.”",
     "why": "Leaves a frightened woman alone with online fear, and no safety-net for seizures or early pregnancy problems.",
     "fix": "Three clear actions, named safety-net, teach-back, and a follow-up call on a set day."
    }
   ]
  }
 },
 "haematospermia": {
  "stem": {
   "name": "Daniel Ofori",
   "age": "33-year-old man",
   "pmh": [
    "No significant past medical history"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "No recent consultations or procedures.",
   "reason": "Video consultation: blood in the semen once or twice this week; worried it is cancer."
  },
  "knowledge": {
   "guideline": "[1] NICE NG12 (updated April 2026) · [2] EAU Sexual and Reproductive Health guidelines, haemospermia section (international) · [3] GOV.UK Prostate Cancer Risk Management Programme: PSA testing guidance for primary care · [4] NICE NG110 (prostatitis, acute: antimicrobial prescribing, 2018)",
   "summary": "Blood in the semen in a man under 40, with no other symptoms, is almost always benign and settles on its own. Assess sensibly, test for infection, check blood pressure, reassure honestly, and be clear about the features that would change the plan.",
   "points": [
    {
     "h": "Usually benign in young men",
     "t": "Most cases in men under 40 have no identifiable cause or follow inflammation or infection (prostatitis, urethritis, sexually transmitted infection), recent instrumentation or prostate biopsy, or minor vessel bleeding. Cancer is an uncommon cause in this group. EAU [2] (international): men over 40, those with persistent or recurrent haemospermia, and those with associated haematuria or other symptoms are the higher-risk groups."
    },
    {
     "h": "History",
     "t": "Number of episodes and duration; is it definitely semen (not urine, not the partner’s bleeding); urinary symptoms, visible haematuria, discharge, testicular pain or lump; sexual health risk; recent procedures or trauma; bleeding elsewhere, anticoagulants; fever, weight loss, bone pain; travel to areas where schistosomiasis is common."
    },
    {
     "h": "Assessment",
     "t": "Blood pressure (severe hypertension is a recognised association); urine dip and MSU; first-void urine NAAT for chlamydia and gonorrhoea if there is any sexual risk; examination of the external genitalia in person. DRE and PSA are selective in a low-risk man under 40 and routine for men over 40 or with persistent symptoms."
    },
    {
     "h": "PSA if done",
     "t": "NICE NG12 (updated April 2026) [1]: refer on a suspected cancer pathway if PSA is above the age-specific reference range (40–49 above 2.5, 50–59 above 3.5, 60–69 above 4.5, 70–79 above 6.5 µg/L; clinical judgement under 40) or the prostate feels malignant on DRE. GOV.UK PCRMP [3]: no ejaculation or vigorous exercise in the 48 hours before the test, and not within 6 weeks of a prostate biopsy; defer if there is active urinary infection."
    },
    {
     "h": "Other NICE NG12 (updated April 2026) routes",
     "t": "NICE NG12 (updated April 2026) [1]: visible haematuria at 45 or over, or non-visible haematuria at 60 or over with dysuria or a raised white cell count, triggers the bladder or kidney route. A non-painful testicular swelling or change in shape or texture triggers the testicular route."
    },
    {
     "h": "Treat what you find",
     "t": "Treat a confirmed STI per the relevant BASHH guideline (for example the BASHH chlamydia guideline, 2026) and arrange partner notification. If symptoms suggest acute prostatitis, NICE NG110 [4] applies. Otherwise no treatment is needed; most episodes resolve without intervention."
    },
    {
     "h": "When to refer",
     "t": "Persistent or recurrent haematospermia, associated haematuria, abnormal prostate or raised age-specific PSA, a testicular lump, or systemic features: refer to urology (suspected cancer pathway where NICE NG12 (updated April 2026) criteria are met)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Daniel, I’m Dr Ahmed. Can you hear me okay, and are you somewhere private? … Good. What’s been happening?",
    "dom": "rto",
    "why": "Checks privacy for an intimate topic"
   },
   {
    "who": "pt",
    "text": "This is really embarrassing, but there was blood when I ejaculated, a couple of times this week. I’ve been up at night googling and I’ve convinced myself it’s cancer. I’m only 33, but I’m terrified. Is it?"
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. There’s nothing embarrassing about it, and it’s a common reason to see a GP. I can hear how frightened you are, so I want to give you a proper answer, not a quick one. Can I ask some questions first?",
    "dom": "rto",
    "why": "Normalises, acknowledges fear, sets expectation"
   },
   {
    "who": "pt",
    "text": "Yes. Please."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "How many times has it happened, and what did it look like: bright red, or darker, brownish?",
    "dom": "tasks",
    "why": "Characterises the episodes"
   },
   {
    "who": "pt",
    "text": "Twice this week. Pinkish-red, I suppose."
   },
   {
    "who": "dr",
    "text": "Are you sure it was in the semen, rather than in your urine or from your partner?",
    "dom": "tasks",
    "why": "Confirms the source"
   },
   {
    "who": "pt",
    "text": "Yes, it was definitely the semen."
   },
   {
    "who": "dr",
    "text": "Any blood when you pass urine, pain or burning, going more often, or a weak stream? Any discharge?",
    "dom": "tasks",
    "why": "Screens haematuria, LUTS, infection"
   },
   {
    "who": "pt",
    "text": "No, none of that."
   },
   {
    "who": "dr",
    "text": "Any pain or a lump in your testicles, any knock or injury down there, or any procedure recently?",
    "dom": "tasks",
    "why": "Screens testicular pathology, trauma and instrumentation"
   },
   {
    "who": "pt",
    "text": "No lumps, no injury, nothing like that."
   },
   {
    "who": "dr",
    "text": "Any fevers, weight loss, aches in your bones, or bruising or bleeding anywhere else? Any travel to Africa or the Middle East recently?",
    "dom": "tasks",
    "why": "Systemic red flags, bleeding tendency, schistosomiasis"
   },
   {
    "who": "pt",
    "text": "No. I feel completely fine otherwise."
   },
   {
    "who": "dr",
    "text": "And I ask everyone this: is there any chance of a sexually transmitted infection, for example a new partner?",
    "dom": "tasks",
    "why": "Non-judgemental sexual health question"
   },
   {
    "who": "pt",
    "text": "Nothing I’m worried about. But test me if it helps."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said you’ve convinced yourself it’s cancer. What have you read that’s made you think that?",
    "dom": "rto",
    "why": "Explores the idea behind the fear"
   },
   {
    "who": "pt",
    "text": "Prostate cancer, mainly. Every page seemed to mention it. I haven’t slept properly for days."
   },
   {
    "who": "dr",
    "text": "That sounds exhausting. So what you’re hoping for today is a straight answer on whether this could be cancer?",
    "dom": "rto",
    "why": "Checks expectation and reflects the impact"
   },
   {
    "who": "pt",
    "text": "Yes. That’s all I want."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s the honest answer. In men under 40 with no other symptoms, which is you, blood in the semen is almost always harmless. Usually it’s a tiny blood vessel or some mild inflammation, and often no cause is found. It tends to settle on its own. Cancer is an uncommon cause at your age.",
    "dom": "tasks",
    "why": "Proportionate, evidence-based reassurance"
   },
   {
    "who": "pt",
    "text": "Really? The websites made it sound so serious."
   },
   {
    "who": "dr",
    "text": "The websites are mixing up age groups. Prostate cancer is a concern mainly in older men, and when there are other signs such as blood in the urine. You don’t have any of those. I still want to check a few things properly, so the reassurance is based on tests rather than just my word.",
    "dom": "rto",
    "why": "Addresses the source of the fear directly"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s what I suggest. Drop a urine sample at the surgery so we can check for infection and blood, and a first-pass urine sample to test for chlamydia and gonorrhoea. I’d like your blood pressure checked, and a quick examination of your testicles in person with a doctor. A prostate test isn’t usually needed at your age unless something else turns up.",
    "dom": "tasks",
    "why": "Appropriate tests; recognises video limits; selective PSA/DRE"
   },
   {
    "who": "pt",
    "text": "I can do that tomorrow."
   },
   {
    "who": "dr",
    "text": "Great. If anything shows infection, I’ll treat it. If it’s all normal, there’s nothing more to do except let it settle.",
    "dom": "tasks",
    "why": "Clear conditional plan"
   },
   {
    "who": "pt",
    "text": "And if it keeps happening?"
   },
   {
    "who": "dr",
    "text": "Good question. If it keeps happening over the next few weeks, or you see blood in your urine, get pain or a lump in the testicles, fevers, or feel generally unwell, come back. Then I’d look further, with a prostate check and blood test, and possibly a referral to the urology team.",
    "dom": "gs",
    "why": "Explicit threshold for further investigation"
   },
   {
    "who": "pt",
    "text": "That makes sense."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "One more thing. The late-night googling is feeding the fear. If you catch yourself doing it, remind yourself of what we agreed: tests tomorrow, and I’ll ring you with the results. Can you tell me back what you’re going to do?",
    "dom": "rto",
    "why": "Addresses anxiety and uses teach-back"
   },
   {
    "who": "pt",
    "text": "Urine samples and blood pressure and the examination tomorrow. You’ll call with results. Come back if it keeps happening or I see blood in my wee, pain, a lump or fever."
   },
   {
    "who": "dr",
    "text": "Exactly. And if you ever can’t pass urine at all, or feel very unwell with a high temperature, get seen the same day.",
    "dom": "gs",
    "why": "Urgent safety-net for retention or sepsis"
   },
   {
    "who": "pt",
    "text": "Thanks, doctor. I actually feel like I can sleep tonight."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Checked privacy; open question; let him describe the episodes and the fear in his own words.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Impact on sleep and anxiety; sexual health context asked without judgement.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I’ve convinced myself it’s cancer” and “only 33” and used both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (prostate cancer from googling), concern (cancer, lost sleep), expectation (a straight answer).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "BP, urine dip and MSU, first-void NAAT, in-person genital examination; PSA/DRE selective at 33.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Idiopathic, infection, STI, trauma, instrumentation, bleeding tendency; confirmed the source is semen.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened haematuria, LUTS, testicular lump, systemic features and bleeding elsewhere.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Likely benign, self-limiting haematospermia in a low-risk man under 40.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Tests before reassurance is final; treat any infection; no routine PSA or imaging.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Anxiety and sleep addressed; STI contact tracing if positive.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Clear thresholds for return (persistence, haematuria, lump, fever, age), same-day advice for retention or sepsis, results call.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Daniel Ofori",
    "age": "33 years · male",
    "pmh": [
     "Nil significant"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "No previous consultations for urological or sexual health problems.",
    "reason": "Video consultation booked online: “personal problem, would prefer to discuss with the doctor”."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Privacy and opening",
     "d": "Check he can talk freely. Normalise straight away; embarrassment is the first barrier."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Episodes, source, urinary symptoms, haematuria, testicular symptoms, trauma, procedures, systemic features, bleeding, travel, sexual health."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "What he has read, the lost sleep, and the straight answer he wants."
    },
    {
     "t": "6–8",
     "h": "Honest reassurance",
     "d": "Under 40, no other symptoms: almost always benign. Explain why the websites frightened him."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Urine tests, STI test, BP, in-person examination. Clear return thresholds. Teach-back and a results call."
    }
   ],
   "wordPics": {
    "fail": "Dismisses it without any history (“it’s nothing”), or orders PSA and a suspected cancer pathway referral for a 33-year-old with no red flags; never asks about haematuria or testicular lumps; no safety-net.",
    "pass": "Takes a focused history, arranges urine and STI tests, BP and examination, reassures that it is usually benign in young men, and lists reasons to return.",
    "exc": "All of the above, plus: normalises the embarrassment early; explores what he read and why it frightened him; explains why the websites mix up age groups; recognises that examination needs a face-to-face visit; gives explicit thresholds for further investigation; teach-back and a results call."
   },
   "avoid": [
    {
     "dont": "“It’s nothing, don’t worry about it.”",
     "instead": "“In men your age with no other symptoms it’s almost always harmless. I want to do a few simple checks so that’s based on tests, not just my word.”",
     "why": "Reassurance without assessment is dismissive and unsafe."
    },
    {
     "dont": "“Let’s do a PSA and refer you to urology to be on the safe side.”",
     "instead": "“A prostate test isn’t usually needed at your age unless something else turns up.”",
     "why": "Over-investigation feeds anxiety and is not supported in a low-risk man under 40."
    },
    {
     "dont": "“Have you been sleeping around?”",
     "instead": "“I ask everyone this: is there any chance of an infection, for example a new partner?”",
     "why": "Judgemental phrasing closes down the sexual history."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Health anxiety and online searching",
     "t": "Late-night searching often escalates fear. Acknowledge it, explain why general web pages mislead for his age group, and agree a concrete plan to replace searching."
    },
    {
     "h": "Embarrassment",
     "t": "Intimate symptoms are often delayed or described vaguely. Normalising early makes the history possible."
    }
   ],
   "legal": [
    {
     "h": "Chaperones",
     "t": "GMC Intimate examinations and chaperones (2024): offer a chaperone for the genital examination and record the offer and the response."
    }
   ],
   "professional": [
    {
     "h": "Proportionate investigation",
     "t": "Avoid unnecessary PSA testing in a low-risk young man: a false-positive result creates anxiety and further tests. Where PSA is considered, counsel about its benefits and limits first (GOV.UK PCRMP)."
    },
    {
     "h": "Remote consultation",
     "t": "Examination of the genitalia needs a face-to-face appointment. Arrange it rather than relying on history alone."
    }
   ],
   "community": [
    {
     "h": "Sexual health services",
     "t": "Local sexual health clinics offer confidential STI testing and partner notification; he can self-refer if he prefers."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Visible haematuria or urinary symptoms",
     "Testicular lump or change in shape",
     "Persistent or recurrent episodes",
     "Weight loss, bone pain or fever",
     "Bleeding elsewhere or anticoagulant use"
    ],
    "psychosocial": [
     "Health anxiety and lost sleep from online searching",
     "Embarrassment about the symptom",
     "Sexual health context, asked without judgement"
    ],
    "ice": [
     "Idea: blood in semen means prostate cancer",
     "Concern: cancer; can’t sleep or stop thinking about it",
     "Expectation: a straight answer on whether it is cancer"
    ]
   },
   "diagnosis": "“In a man of 33 with no other symptoms, blood in the semen is almost always harmless and settles by itself. I’d like a few simple checks so we can be confident.”",
   "diagnosisLay": "“It’s a bit like a nosebleed in the plumbing: a tiny blood vessel along the way leaks for a while and then heals. It looks alarming because of where it is, not because of what it usually means.”",
   "management": {
    "reflectIce": "“You told me you’ve convinced yourself it’s cancer and haven’t slept for days. At your age and with no other symptoms, that’s very unlikely, and I’ll check properly so you can trust that.”",
    "psychosocial": "Replace late-night searching with a concrete plan and a results call; offer the chance to talk again if anxiety persists.",
    "sharedPlan": [
     "Urine dip and MSU; first-void urine NAAT for chlamydia and gonorrhoea",
     "Blood pressure check and in-person genital examination (chaperone offered)",
     "Treat any infection found; otherwise watchful waiting",
     "PSA and DRE only if symptoms persist or new features appear"
    ],
    "safetyNet": [
     "Return if persistent or recurrent, blood in urine, testicular lump or pain, fever or feeling unwell",
     "Same-day care for urinary retention or high fever",
     "Results call after tests"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Haematospermia pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) routes",
    "href": "algorithms/haematospermia.html"
   },
   {
    "ic": "🗺️",
    "t": "Raised PSA pathway",
    "s": "Visual algorithm · age-specific ranges",
    "href": "algorithms/high-psa.html"
   },
   {
    "ic": "💠",
    "t": "Prostatitis protocol",
    "s": "NICE NG110 · antibiotics",
    "href": "management/prostatitis.html"
   },
   {
    "ic": "💠",
    "t": "Chlamydia protocol",
    "s": "Testing · treatment · partner notification",
    "href": "management/chlamydia.html"
   }
  ],
  "pitfalls": {
   "intro": "The trap in this station is swinging to one extreme: dismissing it without assessment, or over-investigating a low-risk young man. The marks sit in proportion, honesty, and clear thresholds.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Reassuring without asking about haematuria, testicular lumps or systemic symptoms.",
     "why": "“Does not rule out serious disease.” Reassurance has to be earned by the history.",
     "fix": "Screen quickly and out loud: urine, testicles, fever, weight, bleeding."
    },
    {
     "dom": "tasks",
     "fail": "Requesting PSA and a suspected cancer referral for a 33-year-old with no red flags.",
     "why": "NICE NG12 (updated April 2026) PSA thresholds start at 40; a false-positive causes harm. Over-investigation is not “safe”.",
     "fix": "“A prostate test isn’t needed at your age unless something else turns up.”"
    },
    {
     "dom": "tasks",
     "fail": "Saying “let me have a look” on a video call.",
     "why": "A genital examination can’t be done remotely; it needs a face-to-face visit with a chaperone offer.",
     "fix": "Arrange the examination and BP in person."
    },
    {
     "dom": "rto",
     "fail": "Ignoring the embarrassment and diving into questions.",
     "why": "He is less likely to answer intimate questions honestly.",
     "fix": "“There’s nothing embarrassing about it. It’s a common reason to see a GP.”"
    },
    {
     "dom": "rto",
     "fail": "“The internet is always wrong” without explaining why.",
     "why": "Dismissing his research leaves the fear intact.",
     "fix": "“The websites mix up age groups. Prostate cancer is a concern mainly in older men with other signs.”"
    },
    {
     "dom": "gs",
     "fail": "“Come back if it doesn’t settle.”",
     "why": "Non-specific safety-netting is standard failing feedback.",
     "fix": "Name the thresholds: persistence over weeks, blood in urine, lump, fever, and same-day care for retention."
    }
   ]
  }
 },
 "htn-borderline-tablets": {
  "stem": {
   "name": "Neil Hartley",
   "age": "58-year-old man",
   "pmh": [
    "No significant past medical history",
    "Raised clinic blood pressure at a recent check"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "None recorded",
   "recent": "Raised clinic BP at a check with the practice nurse. Home/ambulatory monitoring average about 142/88 mmHg. No QRISK3 or baseline bloods on file.",
   "reason": "Nurse asked him to discuss whether he needs blood-pressure tablets."
  },
  "knowledge": {
   "guideline": "[1] NICE NG136 (hypertension in adults, updated November 2023) · [2] NICE NG238 (cardiovascular disease: risk assessment and reduction, 2023) · [3] DVLA Assessing fitness to drive (November 2025 edition) · [4] BNF antihypertensive monographs",
   "summary": "An ABPM/HBPM average of about 142/88 is stage 1 hypertension. At 58, the drug decision rests on cardiovascular risk and target-organ damage, not the number alone — and NICE NG136 words it as a discussion, not an order. Lifestyle advice applies whatever he decides.",
   "points": [
    {
     "h": "Confirm and stage",
     "t": "NICE NG136 [1]: offer ABPM (HBPM if ABPM unsuitable) when clinic BP is 140/90–180/120. Stage 1 = clinic 140/90–159/99 and ABPM/HBPM average 135/85–149/94. Stage 2 = clinic ≥160/100 and ABPM/HBPM ≥150/95. His average of about 142/88 is stage 1."
    },
    {
     "h": "Work-up",
     "t": "NICE NG136 [1]: urine ACR and dipstick for haematuria, HbA1c, U&E/eGFR, total and HDL cholesterol, fundi for hypertensive retinopathy, 12-lead ECG, and a formal cardiovascular risk estimate (QRISK3, NICE NG238 [2])."
    },
    {
     "h": "Who to treat in stage 1",
     "t": "NICE NG136 [1]: in people under 80 with stage 1 hypertension, discuss starting drug treatment if they have target-organ damage, established CVD, renal disease, diabetes, or a 10-year risk of 10% or more. Consider drug treatment under 60 with a 10-year risk below 10%, because 10-year scores underestimate lifetime risk. At 58 he falls in the ‘consider’ group even if his risk is low."
    },
    {
     "h": "If he chooses a tablet",
     "t": "NICE NG136 [1]: aged 55 or over, or of Black African or African-Caribbean family origin — first-line calcium-channel blocker. Under 55 and not of that origin — ACE inhibitor or ARB. Target under 80: clinic below 140/90, ABPM/HBPM below 135/85. Doses per BNF [4]."
    },
    {
     "h": "Lifestyle for everyone",
     "t": "NICE NG136 [1]: healthy diet and regular exercise, reduce salt, reduce alcohol if above recommended limits, discourage excessive caffeine, and stop smoking. Do not offer calcium, magnesium or potassium supplements to lower BP."
    },
    {
     "h": "Statin conversation",
     "t": "NICE NG238 [2]: if QRISK3 is 10% or more, offer atorvastatin 20 mg for primary prevention after lifestyle discussion. Share the number as an absolute risk."
    },
    {
     "h": "‘Tablets for life’",
     "t": "Treatment is reviewed at least annually. If BP falls with lifestyle change, dose reduction can be discussed (clinical practice, not an NG136 recommendation). Be honest that for many people treatment is long term."
    },
    {
     "h": "Same-day action",
     "t": "NICE NG136 [1]: clinic BP ≥180/120 with signs such as retinal haemorrhage or papilloedema, or life-threatening symptoms (new confusion, chest pain, heart failure, AKI), needs same-day specialist referral. DVLA [3]: Group 1 drivers need not notify for hypertension."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Hartley, I’m Dr Singh. Thanks for joining. The nurse passed on your readings — but first, what are your thoughts about all this?",
    "dom": "rto",
    "why": "Opens with his perspective"
   },
   {
    "who": "pt",
    "text": "Honestly, it’s only a bit high, isn’t it? 142-ish. I feel completely fine. Do I really need pills for the rest of my life at 58? Once you start, you’re on them forever."
   },
   {
    "who": "dr",
    "text": "Those are really fair questions, and nothing will be decided without you. Could I check a few things, explain what the numbers mean, and then we weigh up the options together?",
    "dom": "gs",
    "why": "Agenda that signals shared decision-making"
   },
   {
    "who": "pt",
    "text": "Yes, that’s all I want."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Can I check how the 142 was measured — was it a monitor you wore for a day, or readings at home over several days?",
    "dom": "tasks",
    "why": "Confirms the diagnosis was made on ABPM/HBPM, not clinic readings"
   },
   {
    "who": "pt",
    "text": "Home readings and the nurse’s monitor. That was the average."
   },
   {
    "who": "dr",
    "text": "Thank you — that’s the right way to confirm it. Have you had any headaches, changes in your vision, chest pain or breathlessness?",
    "dom": "tasks",
    "why": "Screens for symptoms of target-organ damage and accelerated hypertension"
   },
   {
    "who": "pt",
    "text": "None of that. I feel fine."
   },
   {
    "who": "dr",
    "text": "Good. To see the whole picture I need a few details for a heart-risk score — smoking, family history, cholesterol, diabetes. Some we’ll get from blood tests. Is there anything you already know about those?",
    "dom": "tasks",
    "why": "Gathers QRISK3 inputs without assuming"
   },
   {
    "who": "pt",
    "text": "Not that I know of. I’ve not had bloods for ages."
   },
   {
    "who": "dr",
    "text": "And any tablets or remedies you take — anti-inflammatories, decongestants, anything from the chemist?",
    "dom": "tasks",
    "why": "Checks for drugs that raise BP"
   },
   {
    "who": "pt",
    "text": "No, nothing regular."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said ‘on them forever’. What is it about that that bothers you most?",
    "dom": "rto",
    "why": "Explores the specific concern behind the reluctance"
   },
   {
    "who": "pt",
    "text": "I’m well. I don’t want to be a patient. Once you’re on pills, you’re a patient."
   },
   {
    "who": "dr",
    "text": "That makes sense — you want to stay in charge of your own health. So what would a good outcome look like for you today?",
    "dom": "rto",
    "why": "Names his wish for control and elicits expectations"
   },
   {
    "who": "pt",
    "text": "Proper reasons. Not just ‘the number says so’."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Then here are the reasons. Your home average confirms mild high blood pressure — what we call stage 1. At this level, whether to take a tablet doesn’t depend on the number alone. It depends on your overall chance of a heart attack or stroke, and whether the pressure has already affected your heart or kidneys.",
    "dom": "tasks",
    "why": "Explains stage 1 and the risk-based decision"
   },
   {
    "who": "pt",
    "text": "So it might not need tablets at all?"
   },
   {
    "who": "dr",
    "text": "It might not. So I’d like a blood test for kidneys, sugar and cholesterol, a urine test, a heart tracing and an eye check. From those I’ll work out your personal risk as a percentage over ten years and show you.",
    "dom": "tasks",
    "why": "NG136 work-up and QRISK3"
   },
   {
    "who": "pt",
    "text": "And if it’s high?"
   },
   {
    "who": "dr",
    "text": "Then a tablet genuinely lowers your stroke and heart-attack risk, and the usual first choice at your age is a once-daily calcium-channel blocker. Even if the risk is lower, because you’re under 60 it’s still reasonable to consider one, since the ten-year score underestimates risk over a lifetime. Either way it’s your decision, with the facts in front of you.",
    "dom": "tasks",
    "why": "Correct NG136 threshold wording, first-line drug and honest framing"
   },
   {
    "who": "pt",
    "text": "That’s fairer than I expected."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Whatever you decide about tablets, lifestyle changes work like a mild medicine — less salt, less alcohol if you’re over the limits, regular activity, keeping weight down. What would be realistic for you?",
    "dom": "rto",
    "why": "Lifestyle for everyone, negotiated not lectured"
   },
   {
    "who": "pt",
    "text": "Salt, probably. And more walking."
   },
   {
    "who": "dr",
    "text": "Two good choices. On ‘forever’: we review treatment at least once a year. If your pressure comes down with lifestyle changes, we can talk about lowering the dose. For many people it is long term, and I won’t pretend otherwise — but it’s never a one-way door.",
    "dom": "tasks",
    "why": "Honest reframing of ‘tablets for life’"
   },
   {
    "who": "pt",
    "text": "Okay. So tests first, then decide."
   },
   {
    "who": "dr",
    "text": "Exactly. Could you tell me back what we’ve agreed, so I know I’ve explained it clearly?",
    "dom": "gs",
    "why": "Checks understanding with teach-back"
   },
   {
    "who": "pt",
    "text": "Bloods, urine, heart tracing, eye check. You give me my risk as a number. I cut salt, walk more. Then we decide together."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Spot on. I don’t expect this, but a sudden severe headache, vision change, chest pain, or weakness or numbness on one side needs 999 straight away. I’ll book you back once the results are in, in about two to three weeks. Anything else?",
    "dom": "gs",
    "why": "Named red flags and a defined follow-up"
   },
   {
    "who": "pt",
    "text": "No, that’s clear. Thanks for not just handing me a prescription."
   },
   {
    "who": "dr",
    "text": "Thanks for asking good questions. That’s how the best decisions get made.",
    "dom": "rto",
    "why": "Affirms his autonomy"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question first; let him state his objection to ‘pills forever’ in full.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored work and wellbeing, his wish to stay ‘not a patient’, lifestyle, over-the-counter drugs.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up ‘only a bit up’ and ‘forever’; explored control and medicalisation.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: numbers only slightly high. Concern: lifelong tablets, becoming a patient. Expectation: proper reasons.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Confirmed ABPM/HBPM; NG136 work-up (ACR, haematuria dip, HbA1c, U&E, lipids, fundi, ECG); QRISK3.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Primary vs secondary hypertension; white-coat effect excluded by home readings; target-organ damage.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened symptoms of accelerated hypertension and end-organ damage; knew the same-day criteria.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stage 1 hypertension on ABPM/HBPM average 135/85–149/94; risk explained as a personal percentage.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "NG136 stage 1 wording (discuss/consider); CCB first-line at 55+; lifestyle for all; statin if QRISK3 ≥10% (NG238).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Asked about drugs that raise BP; considered diabetes and CKD as treatment triggers.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Results review in 2–3 weeks; annual review if treated; teach-back; 999 symptoms named.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Investigations & results"
   ],
   "stem": {
    "name": "Neil Hartley",
    "age": "58 years · male",
    "pmh": [
     "Nil significant"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Raised clinic BP at nurse check. Home/ambulatory average ~142/88. No bloods or QRISK on file.",
    "reason": "Discuss BP result. “Do I really need tablets?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open & listen",
     "d": "He opens with ‘pills forever’. Let him finish and promise a shared decision."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "How BP was confirmed; symptoms of organ damage; QRISK inputs; BP-raising drugs."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "What ‘forever’ means to him: control, not being a patient. Expectation: reasons."
    },
    {
     "t": "6–10",
     "h": "Explain and share",
     "d": "Stage 1; risk-based decision; work-up and QRISK3; CCB first-line if chosen; lifestyle."
    },
    {
     "t": "10–12",
     "h": "Close",
     "d": "Teach-back, 999 symptoms, results review."
    }
   ],
   "wordPics": {
    "fail": "Prescribes on the number alone, or dismisses stage 1 as ‘borderline, ignore it’; no QRISK or work-up; lectures about lifestyle; tells him tablets are definitely for life or definitely temporary.",
    "pass": "Confirms stage 1 on home readings; plans the NG136 work-up and QRISK3; explains the risk-based decision; offers lifestyle advice; safety-nets.",
    "exc": "All of that, plus: uses NICE NG136’s ‘discuss’ and ‘consider’ wording accurately (including the under-60 group); knows CCB is first-line at 58; negotiates the lifestyle change he chooses; is honest about ‘forever’; teach-back; he leaves feeling in charge."
   },
   "avoid": [
    {
     "dont": "“Your blood pressure is high, so you need a tablet.”",
     "instead": "“At this level the decision depends on your overall risk. Let’s work that out and decide together.”",
     "why": "In stage 1, NICE NG136 bases the decision on risk, not the number."
    },
    {
     "dont": "“It’s borderline, don’t worry about it.”",
     "instead": "“It’s mild but real. Let’s find out what it means for you.”",
     "why": "Dismissal misses a treatable risk; he is in the ‘consider treatment’ group at 58."
    },
    {
     "dont": "“Once you start, you’ll never come off them.”",
     "instead": "“We review every year; if your pressure falls we can talk about reducing.”",
     "why": "False certainty either way undermines trust."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Health identity",
     "t": "Feeling well and wanting to stay ‘not a patient’ is a common reason for declining treatment. Respect it and give him the facts to decide."
    }
   ],
   "legal": [
    {
     "h": "DVLA",
     "t": "Group 1 drivers need not notify for hypertension. Group 2 drivers are refused if resting BP is consistently ≥180 systolic or ≥100 diastolic (DVLA Assessing fitness to drive)."
    }
   ],
   "professional": [
    {
     "h": "Shared decision-making",
     "t": "GMC Decision making and consent (2020): explain options including no treatment, with benefits and risks in terms he can weigh. NICE NG197 (shared decision making, 2021) supports decision aids and absolute-risk communication."
    },
    {
     "h": "Accurate wording",
     "t": "NICE NG136 says ‘discuss starting’ for stage 1 with risk factors and ‘consider’ under 60 with low risk. Presenting it as mandatory misstates the guidance."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Blood Pressure UK and the British Heart Foundation for home-monitoring and salt reduction; community pharmacy BP checks."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Severe headache, visual change, chest pain, breathlessness, confusion — accelerated hypertension",
     "Clinic BP ≥180/120 with papilloedema or retinal haemorrhage — same-day referral",
     "Clues to secondary hypertension (drugs, renal disease, endocrine features)"
    ],
    "psychosocial": [
     "Feeling well; wanting to stay in control",
     "Salt, alcohol, activity, weight — what he would change",
     "Practical attitudes to daily medication"
    ],
    "ice": [
     "Idea: ‘only a bit up’, so treatment isn’t needed",
     "Concern: lifelong tablets; becoming a patient",
     "Expectation: proper reasons, not ‘the number says so’"
    ]
   },
   "diagnosis": "Stage 1 hypertension confirmed on home/ambulatory average about 142/88 (NICE NG136). The drug decision depends on target-organ damage, CVD, renal disease, diabetes and QRISK3; at 58, treatment can be considered even if QRISK3 is below 10%.",
   "diagnosisLay": "“Your pressure is mildly raised — not an emergency, but it adds to your chance of a stroke or heart attack over the years. Whether a tablet is worth it depends on your overall risk, which we can measure.”",
   "management": {
    "reflectIce": "“You want reasons, not orders — so let’s get your personal risk number and decide with it.”",
    "psychosocial": "Negotiate lifestyle he chooses (salt, walking). Keep him in charge of the decision.",
    "sharedPlan": [
     "NG136 work-up: ACR, haematuria dip, HbA1c, U&E, lipids, fundi, ECG; QRISK3",
     "Discuss or consider a CCB (first-line at 55+) depending on results; statin if QRISK3 ≥10% (NG238)",
     "Lifestyle for all; annual review if treated"
    ],
    "safetyNet": [
     "999: sudden severe headache, visual change, chest pain, one-sided weakness",
     "Results review in 2–3 weeks"
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
    "t": "Hypertension protocol",
    "s": "Staging · who to treat · drug ladder",
    "href": "management/hypertension.html"
   },
   {
    "ic": "🧮",
    "t": "QRISK3",
    "s": "Medical Calculators",
    "href": "calculators.html"
   }
  ],
  "pitfalls": {
   "intro": "This station rewards a correct NICE NG136 decision made with the patient, not for him. It is failed by prescribing on the number, by dismissing it, or by misquoting the thresholds.",
   "items": [
    {
     "dom": "tasks",
     "fail": "“142/88 needs treatment” — a prescription on the number alone.",
     "why": "In stage 1, NICE NG136 bases drug treatment on risk, organ damage and comorbidity.",
     "fix": "Plan the work-up and QRISK3, then discuss treatment with the result."
    },
    {
     "dom": "tasks",
     "fail": "“Your risk is under 10%, so no tablets.”",
     "why": "NG136 says consider drug treatment under 60 even with a 10-year risk below 10%.",
     "fix": "Explain that 10-year scores underestimate lifetime risk and offer the option."
    },
    {
     "dom": "tasks",
     "fail": "Suggesting ramipril first-line at 58.",
     "why": "NG136: CCB is first-line at 55 and over.",
     "fix": "Name the calcium-channel blocker if he chooses treatment."
    },
    {
     "dom": "rto",
     "fail": "Lecturing on salt, alcohol and exercise.",
     "why": "A list of instructions earns little; a negotiated change scores.",
     "fix": "Ask which change is realistic for him and build on it."
    },
    {
     "dom": "rto",
     "fail": "Promising tablets will be temporary, or that they are definitely for life.",
     "why": "False certainty damages trust when it proves wrong.",
     "fix": "Annual review, possible reduction if BP falls, honest that many continue long term."
    },
    {
     "dom": "gs",
     "fail": "No teach-back and a vague ‘come back if worried’.",
     "why": "Non-specific safety-netting is standard failing feedback.",
     "fix": "Name the 999 symptoms and book the results review."
    }
   ]
  }
 },
 "htn-variable-readings": {
  "stem": {
   "name": "Glenda Ferreira",
   "age": "64-year-old woman",
   "pmh": [
    "Hypertension"
   ],
   "meds": [
    "Amlodipine (dose as on the repeat record)"
   ],
   "allergy": "None recorded",
   "recent": "Has sent a list of home BP readings ranging from 118/74 to 178/100 mmHg. Anxious about the variation.",
   "reason": "Video consultation: “My home machine gives me totally different numbers — I don’t know what to believe.”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG136 (hypertension in adults, updated November 2023) · [2] NICE NG196 (atrial fibrillation, 2021) · [3] British and Irish Hypertension Society, validated BP monitor list · [4] BNF amlodipine monograph",
   "summary": "Scattered home readings are a measurement problem until proven otherwise. Standardise technique, check the pulse for an irregular rhythm, look for a postural drop if she has symptoms, and judge treatment on a proper average — never on the highest single number.",
   "points": [
    {
     "h": "Standardise measurement",
     "t": "NICE NG136 [1]: use validated, maintained and recalibrated devices (the BIHS list [3] helps patients choose); measure in a quiet, temperate setting, seated, relaxed, arm outstretched and supported, with the right cuff size. Measure both arms at first; if the difference is over 15 mmHg on repeat, use the arm with the higher reading."
    },
    {
     "h": "The HBPM protocol",
     "t": "NICE NG136 [1]: for each reading, two consecutive seated measurements at least 1 minute apart, twice daily (morning and evening), for at least 4 and ideally 7 days. Discard the first day’s measurements and average the rest. Random readings taken when anxious are not a valid average."
    },
    {
     "h": "Check the pulse",
     "t": "NICE NG136 [1]: palpate the pulse before automated measurement; if it is irregular, measure BP manually by auscultation, as automated devices may be inaccurate. An irregular pulse needs an ECG for atrial fibrillation (NICE NG196 [2]); AF also changes stroke-risk management."
    },
    {
     "h": "Postural hypotension",
     "t": "NICE NG136 [1] (updated 2023): measure BP seated or lying, then after standing for at least 1 minute, in people with symptoms of postural hypotension (falls or postural dizziness), type 2 diabetes, or aged 80 and over. A systolic fall of 20 mmHg or more is significant: review medicines, measure subsequent readings standing. (A diastolic fall of 10 mmHg or more is part of the international consensus definition — international.)"
    },
    {
     "h": "Targets and monitoring",
     "t": "NICE NG136 [1]: aged under 80, clinic below 140/90 and ABPM/HBPM below 135/85. Consider ABPM or HBPM alongside clinic readings where white-coat effect or masked hypertension is suspected. People who monitor at home should be given training and advice."
    },
    {
     "h": "No ‘extra’ doses",
     "t": "Amlodipine is long-acting (BNF [4]); extra doses for a high reading do not act quickly and add to ankle swelling and postural symptoms. Change treatment only on a valid average."
    },
    {
     "h": "When a reading is urgent",
     "t": "NICE NG136 [1]: clinic BP ≥180/120 with retinal haemorrhage or papilloedema, or life-threatening symptoms (new confusion, chest pain, heart failure, AKI), needs same-day specialist referral. A single home 178/100 with no symptoms is not an emergency."
    },
    {
     "h": "Anxiety",
     "t": "Worry and repeated checking raise readings. A fixed schedule, not checking when anxious, and addressing the health anxiety are part of management."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Ferreira, I’m Dr Osei. Thank you for sending your readings. Before we look at them, tell me how this has been for you.",
    "dom": "rto",
    "why": "Starts with her experience, not the numbers"
   },
   {
    "who": "pt",
    "text": "Doctor, it’s driving me mad. One minute 120-something, the next 178! I don’t know what to believe or whether my tablets work. I get in a state, and then it goes up more. Am I about to have a stroke? Should I take more tablets when it’s high?"
   },
   {
    "who": "dr",
    "text": "I can hear how worrying this is. Let me answer the most important part first: please don’t take extra tablets when a reading is high — that can cause harm. And a jumpy set of numbers is usually about how and when they’re taken, not your pressure swinging dangerously. Shall we work out why together?",
    "dom": "gs",
    "why": "Addresses the safety issue immediately and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Please. I just want to know what’s real."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Talk me through how you take a reading — when, where, and what you’re doing just before.",
    "dom": "tasks",
    "why": "Open question about technique"
   },
   {
    "who": "pt",
    "text": "Whenever I’m worried, I check. Then again if it’s high. Sometimes straight after I’ve been rushing about."
   },
   {
    "who": "dr",
    "text": "That’s really helpful. And do you sit with your arm resting on a table? Do you know if the cuff is the right size for your arm, and whether the machine has been checked?",
    "dom": "tasks",
    "why": "Checks posture, cuff size and device validation"
   },
   {
    "who": "pt",
    "text": "I don’t know about the cuff. I bought it online a while ago."
   },
   {
    "who": "dr",
    "text": "We can check that. Do you ever notice your heart beating irregularly, fluttering or racing?",
    "dom": "tasks",
    "why": "Screens for arrhythmia that makes automated readings unreliable"
   },
   {
    "who": "pt",
    "text": "Not that I’ve noticed."
   },
   {
    "who": "dr",
    "text": "Do you ever feel dizzy or light-headed when you stand up, or have you had any falls?",
    "dom": "tasks",
    "why": "Screens for postural hypotension"
   },
   {
    "who": "pt",
    "text": "I’m not sure — I’ve not really paid attention."
   },
   {
    "who": "dr",
    "text": "That’s fine, we can check it properly. How are you getting on with the amlodipine — any missed doses, ankle swelling?",
    "dom": "tasks",
    "why": "Adherence and side-effects"
   },
   {
    "who": "pt",
    "text": "I take it every day, I don’t think I’ve missed any."
   },
   {
    "who": "dr",
    "text": "And when you get a very high reading, have you had a severe headache, chest pain, breathlessness, or any change in vision or speech?",
    "dom": "tasks",
    "why": "Screens for symptoms that would make a reading urgent"
   },
   {
    "who": "pt",
    "text": "No, just the panic."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You mentioned a stroke. Is that the main fear?",
    "dom": "rto",
    "why": "Names the hidden fear"
   },
   {
    "who": "pt",
    "text": "Yes. Every time I see a big number I think, this is it."
   },
   {
    "who": "dr",
    "text": "That sounds exhausting. What were you hoping I’d be able to do today?",
    "dom": "rto",
    "why": "Elicits expectations"
   },
   {
    "who": "pt",
    "text": "Tell me which numbers to believe, and whether I need more tablets."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s what I think is happening. Blood pressure changes minute to minute — with rushing, talking, worry, even a full bladder. When you check because you’re anxious, you catch it at its highest, and then the worry pushes it higher still. That’s a loop, not a stroke coming.",
    "dom": "tasks",
    "why": "Explains variability and the anxiety cycle"
   },
   {
    "who": "pt",
    "text": "So the 178 isn’t real?"
   },
   {
    "who": "dr",
    "text": "It was real at that moment, but it isn’t your true average. We treat the average. There are two things I want to rule out: a heart rhythm that makes home machines give odd numbers, and blood pressure dropping when you stand, because the low readings matter too.",
    "dom": "tasks",
    "why": "Frames AF and postural hypotension as the checks that matter"
   },
   {
    "who": "pt",
    "text": "I hadn’t thought about the low ones."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "So here’s a plan. Could you come in to see the nurse with your machine and cuff? She’ll check your pulse by hand, compare your machine with ours, measure your arm for the cuff, check both arms, and take your pressure sitting and then standing. If your pulse is irregular, we’ll do a heart tracing.",
    "dom": "tasks",
    "why": "Face-to-face checks: device, cuff, pulse, both arms, postural BP, ECG if needed"
   },
   {
    "who": "pt",
    "text": "Yes, I can do that."
   },
   {
    "who": "dr",
    "text": "Then a proper week of home readings. Morning and evening: sit for a few minutes, back supported, arm on a table at heart level, feet flat, no talking, no coffee or rushing just before. Take two readings a minute apart and write both down. Nothing in between — even if you feel worried.",
    "dom": "tasks",
    "why": "Teaches the NG136 HBPM routine"
   },
   {
    "who": "pt",
    "text": "Even if I feel funny?"
   },
   {
    "who": "dr",
    "text": "If you feel unwell, that’s different — I’ll tell you exactly when to call. But checking because you’re anxious feeds the loop. We’ll average the week, leaving out the first day, and decide about your tablets on that. Can you tell me back how you’ll take them?",
    "dom": "rto",
    "why": "Anxiety-aware boundary and teach-back"
   },
   {
    "who": "pt",
    "text": "Twice a day, morning and night, sit first, arm on the table, two readings a minute apart, for a week. Not when I’m panicking."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Perfect. If you ever get a very high reading with a severe headache, chest pain, breathlessness, vision or speech changes, or weakness on one side, call 999. If you feel faint or fall when standing, or notice your heart racing irregularly, ring us the same day. Otherwise I’ll see you with the week’s readings. Does that feel manageable?",
    "dom": "gs",
    "why": "Clear red flags, same-day triggers and follow-up"
   },
   {
    "who": "pt",
    "text": "Much better. I feel like I know what I’m doing now."
   },
   {
    "who": "dr",
    "text": "You’ve done the right thing by asking. Reliable numbers will make this far less frightening.",
    "dom": "rto",
    "why": "Closes with reassurance tied to the plan"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question about her experience; immediately answered the unsafe ‘extra tablets’ question.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored anxiety-driven checking, lifestyle context before readings, adherence and the device’s origin.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up checking when worried, the fear of stroke, and uncertainty about the cuff.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: numbers mean dangerous instability. Concern: imminent stroke. Expectation: which numbers to believe; more tablets?",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Device validation and cuff size, both arms, manual pulse, sitting and standing BP, ECG if irregular, standardised HBPM or ABPM.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Technique and timing error, anxiety, white-coat or masked effect, AF, postural hypotension, adherence.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened symptoms of accelerated hypertension; knew the NG136 same-day criteria.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Variable readings from technique and anxiety; true average unknown until standardised.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "No reactive dosing; NG136 HBPM protocol taught; review amlodipine on a valid average; target below 135/85 home average.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Addressed health anxiety; AF (NICE NG196) and postural hypotension considered as treatment modifiers.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Nurse visit with machine; week of readings; teach-back; 999 and same-day triggers named.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Investigations & results"
   ],
   "stem": {
    "name": "Glenda Ferreira",
    "age": "64 years · female",
    "pmh": [
     "Hypertension"
    ],
    "meds": [
     "Amlodipine"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Home BP readings 118/74 to 178/100 sent in. Patient anxious.",
    "reason": "“I don’t know what to believe — should I take more tablets when it’s high?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open & make safe",
     "d": "Let her speak, then answer at once: no extra tablets for a high reading."
    },
    {
     "t": "1–4",
     "h": "Technique history",
     "d": "When and how she measures; cuff and device; pulse irregularity; postural symptoms; adherence; red-flag symptoms."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "Fear of stroke; wants to know which numbers are real."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Variability and the anxiety loop; AF and postural checks; nurse visit with machine; NG136 HBPM routine."
    },
    {
     "t": "10–12",
     "h": "Close",
     "d": "Teach-back of the routine; 999 and same-day triggers; review with the week’s readings."
    }
   ],
   "wordPics": {
    "fail": "Increases the amlodipine because of the 178, or tells her to take extra when high; never asks how she measures; ignores the low readings; no pulse check; dismisses her anxiety.",
    "pass": "Stops reactive dosing; reviews technique; plans a standardised week of readings or ABPM; considers AF and postural hypotension; safety-nets.",
    "exc": "All of that, plus: teaches the exact NG136 HBPM protocol; plans device and cuff checks with her machine; manual pulse and both arms; names the anxiety loop with empathy and sets a checking boundary; teach-back; she leaves calmer and in control."
   },
   "avoid": [
    {
     "dont": "“If it’s over 160, take another tablet.”",
     "instead": "“Please don’t take extra when it’s high. We decide on the average.”",
     "why": "Reactive dosing is unsafe and feeds the anxiety cycle."
    },
    {
     "dont": "“These machines are rubbish, ignore them.”",
     "instead": "“Let’s check your machine against ours and set up a routine you can trust.”",
     "why": "Dismissal leaves her without a way to know her real BP."
    },
    {
     "dont": "“You’re just anxious.”",
     "instead": "“Worry really does push readings up. Let’s break that loop together.”",
     "why": "Validating the mechanism is reassuring; labelling her is not."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Health anxiety",
     "t": "Repeated checking driven by fear of stroke. A fixed schedule and reassurance based on data reduce it; offer support if anxiety persists."
    }
   ],
   "legal": [
    {
     "h": "DVLA",
     "t": "Group 1 drivers need not notify for hypertension. If she develops syncope or AF-related symptoms, DVLA guidance on arrhythmia may apply."
    }
   ],
   "professional": [
    {
     "h": "Device safety",
     "t": "NICE NG136: devices should be validated, maintained and recalibrated; advise a validated home monitor (BIHS list)."
    },
    {
     "h": "Shared decision",
     "t": "Agree treatment changes only on reliable data; explain why."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Blood Pressure UK information on home monitoring technique; community pharmacy BP checks and device comparison."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Very high reading with severe headache, chest pain, breathlessness, visual or speech change, one-sided weakness — 999",
     "Irregular pulse — possible AF: manual BP and ECG",
     "Postural dizziness or falls — postural hypotension, medicine review"
    ],
    "psychosocial": [
     "Checking when anxious; fear of stroke",
     "How she bought and uses the device",
     "Impact of worry on daily life"
    ],
    "ice": [
     "Idea: her pressure is dangerously unstable, tablets not working",
     "Concern: imminent stroke",
     "Expectation: which numbers to believe; whether to take more tablets"
    ]
   },
   "diagnosis": "Treated hypertension with variable home readings, most likely from non-standardised technique and anxiety-driven checking; AF and postural hypotension to exclude; true average unknown.",
   "diagnosisLay": "“Blood pressure moves all day. Checking when you’re worried catches the peaks. We need a calm, regular set of readings to see your real level.”",
   "management": {
    "reflectIce": "“You’re frightened of a stroke. The way to protect you is reliable numbers — not chasing the highest one.”",
    "psychosocial": "Set a fixed, twice-daily routine; no checks when anxious; acknowledge and support the anxiety.",
    "sharedPlan": [
     "Nurse visit: device and cuff check, both arms, manual pulse, sitting and standing BP; ECG if irregular",
     "7-day HBPM per NICE NG136 (or ABPM); average excluding day 1",
     "Review amlodipine on the average; target below 135/85 home"
    ],
    "safetyNet": [
     "999: high reading with severe headache, chest pain, breathlessness, neuro or visual change",
     "Same day: faints, falls on standing, irregular racing heart"
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
    "t": "Hypertension protocol",
    "s": "Measurement · HBPM · targets",
    "href": "management/hypertension.html"
   },
   {
    "ic": "🗺️",
    "t": "Palpitations pathway",
    "s": "Visual algorithm · irregular pulse and AF",
    "href": "algorithms/palpitations.html"
   },
   {
    "ic": "🗺️",
    "t": "Dizziness pathway",
    "s": "Visual algorithm · postural symptoms",
    "href": "algorithms/dizziness.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you interpret data before acting on it. It is failed by chasing the highest number, by ignoring technique, and by brushing off the anxiety that drives the readings.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Increasing amlodipine because of the 178/100.",
     "why": "Changing treatment on unreliable readings is unsafe and may cause postural hypotension.",
     "fix": "Standardise first, then decide on the average."
    },
    {
     "dom": "tasks",
     "fail": "Never asking how she takes the readings.",
     "why": "Technique and timing explain most variability.",
     "fix": "Ask when, where and how; teach the NG136 HBPM routine."
    },
    {
     "dom": "tasks",
     "fail": "No pulse check or thought of AF.",
     "why": "NG136 requires a pulse check before automated measurement; AF makes readings erratic and changes management.",
     "fix": "Manual pulse, manual BP if irregular, ECG."
    },
    {
     "dom": "tasks",
     "fail": "Ignoring the low readings.",
     "why": "Low readings may reflect postural hypotension or over-treatment.",
     "fix": "Ask about postural symptoms; sitting and standing BP."
    },
    {
     "dom": "rto",
     "fail": "“You’re just anxious.”",
     "why": "Dismissive labelling damages trust and misses the chance to break the loop.",
     "fix": "Explain how worry raises readings and agree a checking boundary."
    },
    {
     "dom": "gs",
     "fail": "No clear line between ‘worrying’ and ‘urgent’.",
     "why": "Without it she will keep reacting to every number.",
     "fix": "Name the symptoms that need 999 or same-day contact; everything else waits for review."
    }
   ]
  }
 },
 "insulin-start-beliefs": {
  "stem": {
   "name": "Sanjay Mehta",
   "age": "59-year-old man",
   "pmh": [
    "Type 2 diabetes",
    "Latest HbA1c 86 mmol/mol despite maximal oral therapy"
   ],
   "meds": [
    "Oral glucose-lowering medicines at maximal tolerated doses (details as on the repeat record)",
    "Any GLP-1 receptor agonist as on the repeat record"
   ],
   "allergy": "None recorded",
   "recent": "HbA1c 86 mmol/mol on maximal oral therapy. Previous review recommended starting insulin. Works as a taxi driver. Family history: mother had diabetes and lost her sight.",
   "reason": "Video consultation to discuss starting insulin."
  },
  "knowledge": {
   "guideline": "[1] NICE NG28 (type 2 diabetes in adults: management, updated February 2026) · [2] DVLA Assessing fitness to drive: a guide for medical professionals (November 2025 edition) · [3] DVLA INF294, A guide to insulin-treated diabetes and driving · [4] JBDS-IP, Hospital management of hypoglycaemia in adults with diabetes · [5] BNF insulin monographs",
   "summary": "Needing insulin reflects progressive loss of beta-cell function, not failure. Starting it safely means a structured programme: technique, self-monitoring, titration, hypoglycaemia and the DVLA rules. For a taxi driver the licensing conversation is part of the prescription, not an afterthought.",
   "points": [
    {
     "h": "When and what to start",
     "t": "NICE NG28 [1] (insulin recommendations amended 2026 for product withdrawals and shortages): offer NPH insulin once or twice daily according to need, or a basal insulin intended for once- or twice-daily use, as initial insulin therapy. Consider basal plus short- or rapid-acting insulin from the start, especially if HbA1c is 75 mmol/mol or higher — his is 86. Continue metformin unless contraindicated and review the other agents, particularly a sulfonylurea (hypoglycaemia risk). Doses per BNF [5]."
    },
    {
     "h": "Structured programme",
     "t": "NICE NG28 [1]: anyone starting insulin gets a structured programme covering injection technique (rotating sites, avoiding repeated injections at one point), self-monitoring, dose titration to target, dietary advice, the DVLA guidance [2], managing hypoglycaemia, managing acute changes in glucose, and support from a professional trained in insulin therapy."
    },
    {
     "h": "Insulin is not failure",
     "t": "Type 2 diabetes is progressive: beta-cell insulin output falls over time, so most people eventually need treatment intensification. Validate the feeling, then correct the belief. Needing insulin says nothing about his effort."
    },
    {
     "h": "Complications come from high glucose",
     "t": "Retinopathy, nephropathy and neuropathy follow years of hyperglycaemia. Insulin did not blind his mother; better control lowers his risk. Check his retinal screening is up to date before glucose is brought down."
    },
    {
     "h": "Hypoglycaemia",
     "t": "Symptoms: sweating, tremor, hunger, palpitations, confusion. Treat with 15–20 g of fast-acting carbohydrate, recheck after 10–15 minutes and repeat if still low, then a longer-acting carbohydrate (JBDS-IP [4]). Risks: missed meals, alcohol, unplanned exercise, dose errors, a sulfonylurea alongside."
    },
    {
     "h": "DVLA — Group 1 (car licence)",
     "t": "DVLA [2][3]: notify if insulin treatment will last more than 3 months. Check glucose no more than 2 hours before driving and every 2 hours while driving (CGM is permitted, with finger-prick backup). 5.0 mmol/L or below — eat a snack before driving. Below 4.0 mmol/L or hypo symptoms — do not drive; treat, and wait 45 minutes after glucose is back to normal. Must not drive with impaired awareness, or after two or more severe (assisted) hypos while awake in 12 months."
    },
    {
     "h": "Taxi and Group 2",
     "t": "Council taxi and private hire licensing authorities generally apply the DVLA Group 2 medical standard. Group 2 on insulin [2]: full hypo awareness, no severe hypo in the previous 12 months, glucose monitored at least twice daily including non-driving days (CGM allowed for Group 2 since November 2025, with finger-prick backup), and a specialist assessment. He should contact his licensing authority before he starts, so any gap in work is planned rather than a shock."
    },
    {
     "h": "Document",
     "t": "Record the hypoglycaemia and DVLA advice, that he was told to notify the DVLA and his licensing authority, and his decision. The duty to notify is his; the GMC expects the doctor to explain it and act if a patient keeps driving against advice."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Mehta, it’s Dr Khan. Thank you for joining on video. I know the last review mentioned insulin — before I say anything, how are you feeling about that?",
    "dom": "rto",
    "why": "Opens with his feelings, not the HbA1c"
   },
   {
    "who": "pt",
    "text": "Honestly, it feels like I’ve failed. Like I didn’t try hard enough. My mum went on insulin, then she went blind, then everything fell apart. And I drive a taxi all day — I can’t be having funny turns. I don’t want needles."
   },
   {
    "who": "dr",
    "text": "That’s a lot to be carrying, and thank you for being so straight with me. I can hear four worries: feeling you’ve failed, what happened to your mum, the needles, and your driving. I’d like to take each one seriously. Can we go through them, and then decide together what to do?",
    "dom": "gs",
    "why": "Summarises the layered concerns and sets a shared agenda"
   },
   {
    "who": "pt",
    "text": "Yeah. Okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Let’s start with the failure part. What makes it feel that way to you?",
    "dom": "rto",
    "why": "Explores the belief before correcting it"
   },
   {
    "who": "pt",
    "text": "Because the tablets were meant to work. If I need injections, it means I messed up."
   },
   {
    "who": "dr",
    "text": "Can I ask how you get on with the tablets day to day — do any get missed, or cause you problems?",
    "dom": "tasks",
    "why": "Checks adherence and tolerability before escalating"
   },
   {
    "who": "pt",
    "text": "I take them. Mostly. The odd one goes if I’m on a long shift."
   },
   {
    "who": "dr",
    "text": "Thanks, that’s honest. Have you had any times when you felt shaky, sweaty or muddled, as if your sugar had dropped?",
    "dom": "tasks",
    "why": "Screens current hypoglycaemia, relevant to the regimen and his licence"
   },
   {
    "who": "pt",
    "text": "No, never had that."
   },
   {
    "who": "dr",
    "text": "And have you noticed more thirst, passing more urine, or losing weight without trying?",
    "dom": "tasks",
    "why": "Screens for symptomatic hyperglycaemia"
   },
   {
    "who": "pt",
    "text": "Nothing I’ve really noticed."
   },
   {
    "who": "dr",
    "text": "Tell me about the driving. Is it a council taxi licence, and how long are your shifts?",
    "dom": "tasks",
    "why": "Establishes his licence type — taxi work usually follows the stricter Group 2 medical standard"
   },
   {
    "who": "pt",
    "text": "Council licence, yes. Long days, ten hours sometimes."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You mentioned your mum. Would you tell me what happened to her?",
    "dom": "rto",
    "why": "Follows the strongest emotional cue"
   },
   {
    "who": "pt",
    "text": "Her sugar was bad for years. Then they put her on insulin, and after that her eyes went, then her kidneys. She died. So in my head, insulin is where it all goes wrong."
   },
   {
    "who": "dr",
    "text": "I’m really sorry. Watching that would make anyone wary. Can I share something that might change how that looks? Blindness in diabetes comes from sugar being high for a long time, which damages the small vessels at the back of the eye. By the time your mum started insulin, that damage had probably already been done. The insulin didn’t cause it — the years of high sugar did.",
    "dom": "tasks",
    "why": "Corrects the misattribution of complications to insulin"
   },
   {
    "who": "pt",
    "text": "I never thought of it like that."
   },
   {
    "who": "dr",
    "text": "And that’s why I’m suggesting it now, while your eyes and kidneys are protected. We’re using insulin to avoid her path, not to repeat it. What were you hoping would happen today?",
    "dom": "rto",
    "why": "Links the correction to his fear and elicits expectations"
   },
   {
    "who": "pt",
    "text": "Honestly, that you’d say I can try harder with the tablets instead."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s the honest picture. Your long-term sugar test is 86 — well above where we’d want it. Type 2 diabetes changes over the years; the pancreas makes less insulin, so the same tablets do less. Needing insulin is the natural course, not you failing. Plenty of people who work hard at it reach this point.",
    "dom": "tasks",
    "why": "Explains progression in plain language and reframes failure"
   },
   {
    "who": "pt",
    "text": "So it’s not because I’ve been rubbish."
   },
   {
    "who": "dr",
    "text": "No. And the needles are nothing like a blood-test needle — they’re very fine pen needles, and most people barely feel them. We’d usually start with a background insulin, and because your level is quite high we may add a mealtime dose too. Our diabetes nurse will show you exactly how, and you’d keep your metformin. We’d look at your other tablets as well — some can cause lows once insulin starts.",
    "dom": "tasks",
    "why": "NG28-consistent regimen, practical reassurance and review of hypoglycaemic agents"
   },
   {
    "who": "pt",
    "text": "And the driving? That’s my living."
   },
   {
    "who": "dr",
    "text": "This matters, so I’ll be clear. On insulin, you must tell the DVLA, and because taxi licensing usually uses the stricter rules for professional drivers, you should also speak to the council before you start. They’ll want you to have good awareness of lows, no severe lows, and regular glucose readings. I can’t promise there won’t be any pause in work while they check, but people do carry on driving taxis on insulin — and knowing the rules is what protects your licence.",
    "dom": "tasks",
    "why": "Gives accurate DVLA and licensing-authority advice honestly"
   },
   {
    "who": "pt",
    "text": "Right. I’d rather know now than get caught out."
   },
   {
    "who": "dr",
    "text": "Then the daily rule: check your sugar within two hours before you drive and every two hours on shift. If it’s 5 or under, eat something before you set off. Under 4, or you feel a low coming, don’t drive — treat it and wait 45 minutes after it’s back to normal. Keep glucose tablets in the cab.",
    "dom": "tasks",
    "why": "Specific DVLA glucose rules for a working driver"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "And for a low anywhere: sweaty, shaky, hungry, muddled. Take fast sugar — glucose tablets or a small sugary drink — check again after 10 to 15 minutes, repeat if still low, then a sandwich or biscuits. Missed meals and alcohol are the big triggers. How does that sound?",
    "dom": "tasks",
    "why": "Hypoglycaemia recognition, treatment and prevention"
   },
   {
    "who": "pt",
    "text": "More manageable than I thought."
   },
   {
    "who": "dr",
    "text": "So where are you now? You don’t have to decide this minute. We could book you with the diabetes nurse for an injection demonstration, you contact the council, and we decide together once you’ve seen it.",
    "dom": "rto",
    "why": "Shared decision without coercion or capitulation"
   },
   {
    "who": "pt",
    "text": "Let’s do the nurse. If I can see it, I think I can do it."
   },
   {
    "who": "dr",
    "text": "Good. I’ll also make sure your eye screening is up to date, and I’ll note today that I’ve told you about the DVLA and the council. Could you tell me back the two driving rules, so I know I’ve explained them properly?",
    "dom": "gs",
    "why": "Documents the advice and checks understanding with teach-back"
   },
   {
    "who": "pt",
    "text": "Test before I drive and every two hours. Under 5, eat first. Under 4, don’t drive, sort it, wait 45 minutes. And tell the DVLA and the council."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Spot on. Once you start, if you have a low that needs someone else’s help, stop driving and tell us. If you’re ill and not eating, ring us for sick-day advice rather than stopping insulin. I’ll see you after the nurse appointment. Anything we’ve not covered?",
    "dom": "gs",
    "why": "Clear safety-net, sick-day advice and follow-up"
   },
   {
    "who": "pt",
    "text": "No — I feel a lot better. Thanks, doc."
   },
   {
    "who": "dr",
    "text": "You’ve not failed at anything. You’re taking the step that protects your eyes, your health and your job.",
    "dom": "rto",
    "why": "Closes by reinforcing the reframe"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Opened with how he feels about insulin; let him list his worries before any explanation.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored his taxi work, shift length, licence type, adherence, and what his mother’s illness meant to the family.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the four layered fears (failure, his mother’s blindness, needles, losing his livelihood) and followed each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: insulin means failure and caused his mother’s blindness. Concern: hypos at the wheel and losing his licence. Expectation: to avoid insulin.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Checked HbA1c trend, adherence, current hypos, hyperglycaemic symptoms, renal function and retinal screening status.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Considered adherence gaps, the effect of a sulfonylurea on hypo risk, and whether treatment options have been exhausted.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for symptomatic hyperglycaemia and current hypoglycaemia; stated severe hypo rules for driving.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Explained progressive type 2 diabetes needing insulin per NICE NG28 in plain language.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "NG28-consistent regimen, metformin continued, other agents reviewed; structured programme via DSN; accurate DVLA and taxi licensing advice.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Reviewed sulfonylurea hypo risk, retinal screening before intensification, and sick-day advice.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "DSN review booked; DVLA and council advice documented; teach-back; hypo and sick-day safety-net; follow-up after nurse visit.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Sanjay Mehta",
    "age": "59 years · male",
    "pmh": [
     "Type 2 diabetes",
     "HbA1c 86 mmol/mol on maximal oral therapy"
    ],
    "meds": [
     "Oral glucose-lowering medicines (as on repeat record)"
    ],
    "allergy": "None recorded",
    "recent": "⚠ HbA1c 86 mmol/mol despite maximal oral therapy. Insulin recommended at last review. Occupation: taxi driver.",
    "reason": "Video appointment to discuss insulin. “Does this mean I’ve failed?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open & listen",
     "d": "He arrives with four worries in one breath. Let him finish, then name them back to him."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Adherence, current hypos, hyperglycaemic symptoms, licence type (council taxi) and shift pattern."
    },
    {
     "t": "4–6",
     "h": "ICE and his mother",
     "d": "Ask what happened to her. Correct the belief that insulin caused her blindness."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Progressive disease, fine needles, NG28 regimen, DVLA and council rules, hypo treatment."
    },
    {
     "t": "10–12",
     "h": "Decide and close",
     "d": "Shared decision (DSN demonstration), document driving advice, teach-back, sick-day and severe-hypo safety-net."
    }
   ],
   "wordPics": {
    "fail": "Tells him he needs insulin and brushes off the failure and blindness beliefs; no hypoglycaemia teaching; no DVLA advice or a wrong rule; ignores that taxi licensing is stricter; pushes insulin or gives in with no plan.",
    "pass": "Reframes insulin as the natural course of type 2 diabetes; corrects the blindness misattribution; explains hypo recognition and treatment; tells him he must notify the DVLA and gives the glucose-before-driving rule; refers to the DSN.",
    "exc": "All of that, plus: asks about his mother and uses her story to show why control protects him; identifies the council licence and the stricter standard; is honest that there may be a pause; reviews the sulfonylurea risk; teach-back of the driving rules; a genuinely shared decision that he owns."
   },
   "avoid": [
    {
     "dont": "“Lots of people are on insulin, it’s nothing to worry about.”",
     "instead": "“You watched what diabetes did to your mum. Can we talk about what really caused her sight loss?”",
     "why": "Blanket reassurance skips the belief that is driving his refusal."
    },
    {
     "dont": "“You’ll be fine to drive, just be careful.”",
     "instead": "“On insulin you must tell the DVLA, and speak to the council before you start — here are the exact rules.”",
     "why": "Vague driving advice is unsafe and fails the Tasks domain."
    },
    {
     "dont": "“If you won’t have insulin, there’s nothing else I can do.”",
     "instead": "“You don’t have to decide today. Let’s see the nurse, look at it together, and decide.”",
     "why": "Ultimatums end the relationship; shared decisions keep him engaged."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Livelihood",
     "t": "Taxi driving is his livelihood; any licensing pause means lost income. Plan the timing of insulin with him and his licensing authority."
    },
    {
     "h": "Family experience",
     "t": "His mother’s blindness and death shape his beliefs about insulin. Explore it; don’t dismiss it."
    }
   ],
   "legal": [
    {
     "h": "DVLA Group 1",
     "t": "Insulin-treated drivers must notify the DVLA if treatment will last more than 3 months; glucose within 2 hours before driving and 2-hourly while driving (DVLA Assessing fitness to drive, November 2025; INF294)."
    },
    {
     "h": "Taxi licensing",
     "t": "Council taxi and private hire licensing usually applies the Group 2 medical standard: full awareness, no severe hypo in 12 months, regular monitoring and specialist assessment. He must inform his licensing authority."
    },
    {
     "h": "GMC confidentiality and driving",
     "t": "GMC Confidentiality (2017) and its guidance on reporting concerns to the DVLA: the patient has the legal duty to notify. If he keeps driving when unsafe and won’t stop, the doctor may inform the DVLA after telling him."
    }
   ],
   "professional": [
    {
     "h": "Shared decision-making",
     "t": "GMC Decision making and consent (2020): present options, benefits and risks, including what happens if he declines insulin; respect his choice and keep the door open."
    },
    {
     "h": "Documentation",
     "t": "Record hypo teaching, DVLA and licensing advice, and his decision."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Diabetes specialist nurse, structured education programme for insulin, and Diabetes UK information on insulin and driving."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Symptomatic hyperglycaemia: thirst, polyuria, weight loss — consider urgency and ketones if unwell",
     "Any current hypoglycaemia, especially while driving",
     "Impaired hypo awareness or a severe (assisted) hypo — driving implications"
    ],
    "psychosocial": [
     "Taxi work: licence type, shift length, income dependence",
     "His mother’s illness and death and what it taught him about insulin",
     "Practical barriers: injecting on shift, storage, eating patterns"
    ],
    "ice": [
     "Idea: insulin means he failed, and insulin caused his mother’s blindness",
     "Concern: hypos at the wheel and losing his licence and income",
     "Expectation: to be allowed to try harder with tablets"
    ]
   },
   "diagnosis": "Type 2 diabetes with HbA1c 86 mmol/mol despite maximal oral therapy — insulin is indicated per NICE NG28, with a structured programme and DVLA counselling.",
   "diagnosisLay": "“Your pancreas makes less insulin as the years go on — like a battery that runs down. The tablets can only push it so far. Insulin tops up what your body can’t make any more. That’s the illness moving on, not you failing.”",
   "management": {
    "reflectIce": "“You thought insulin caused your mum’s blindness. It was the years of high sugar. Starting now is how you avoid her path.”",
    "psychosocial": "Plan around his shifts: timing with the council, glucose checks in the cab, carbohydrate in the car, a DSN session he can fit around work.",
    "sharedPlan": [
     "DSN demonstration and structured insulin programme (NICE NG28)",
     "NG28 regimen: NPH or basal once or twice daily; consider adding short- or rapid-acting insulin with HbA1c ≥75; keep metformin; review sulfonylurea",
     "Notify DVLA; contact licensing authority before starting; retinal screening up to date"
    ],
    "safetyNet": [
     "Hypo: 15–20 g fast-acting carbohydrate, recheck in 10–15 minutes, then a longer-acting snack; a severe hypo means stop driving and tell us",
     "Sick-day advice: don’t stop insulin when unwell; ring for advice"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Insulin in type 2 diabetes",
    "s": "Protocol · NG28 start, titration, DVLA",
    "href": "management/insulin-type-2-diabetes.html"
   },
   {
    "ic": "🗺️",
    "t": "Hypoglycaemia",
    "s": "Visual algorithm · recognition and treatment",
    "href": "algorithms/hypoglycaemia.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA fitness to drive",
    "s": "Group 1 and Group 2 rules",
    "href": "dvla.html"
   },
   {
    "ic": "📋",
    "t": "Type 2 diabetes",
    "s": "Case walkthrough · NICE NG28",
    "href": "../cases/type-2-diabetes.html"
   }
  ],
  "pitfalls": {
   "intro": "Candidates rarely fail this station on insulin pharmacology. They fail on beliefs left unaddressed, vague or wrong driving advice, and a decision that is either forced or abandoned.",
   "items": [
    {
     "dom": "rto",
     "fail": "“Insulin isn’t a failure” said in the first minute, before hearing why he feels that way.",
     "why": "Reassurance before exploration reads as dismissal; the examiner marks a missed cue.",
     "fix": "Ask what makes it feel like failure, then reframe with the progressive nature of the disease."
    },
    {
     "dom": "rto",
     "fail": "Moving past “my mum went blind” with a brief “sorry to hear that”.",
     "why": "The misattribution is the main obstacle. Leaving it intact means he leaves still believing insulin blinds people.",
     "fix": "Ask what happened, then explain that long-term high glucose caused her complications and insulin protects him."
    },
    {
     "dom": "tasks",
     "fail": "“Just tell the DVLA” with no rules, or wrong thresholds.",
     "why": "Driving advice is central for a taxi driver. Incomplete advice is a patient-safety fail.",
     "fix": "Give the rules: check within 2 hours before and every 2 hours; 5.0 or below eat; under 4.0 don’t drive, treat, wait 45 minutes. Carry glucose."
    },
    {
     "dom": "tasks",
     "fail": "Treating a council taxi licence like an ordinary car licence.",
     "why": "Licensing authorities usually apply the Group 2 standard; missing it can cost him his job unexpectedly.",
     "fix": "Ask what licence he holds and tell him to contact the licensing authority before starting."
    },
    {
     "dom": "tasks",
     "fail": "Starting insulin without hypoglycaemia teaching or a review of the sulfonylurea.",
     "why": "NICE NG28 requires hypo management in the structured programme; a sulfonylurea plus insulin raises the risk.",
     "fix": "Teach recognition and treatment, and say you will review the tablets that cause lows."
    },
    {
     "dom": "gs",
     "fail": "Pressing for a yes today, or accepting “no” and ending with nothing.",
     "why": "Both fail shared decision-making. The station rewards a supported next step.",
     "fix": "Offer the DSN demonstration, a decision date and documented advice. Check understanding with teach-back."
    }
   ]
  }
 },
 "osa-epworth-dvla": {
  "stem": {
   "name": "Raj Malhotra",
   "age": "52-year-old man",
   "pmh": [
    "BMI 34"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded in the booking note",
   "recent": "Occupation on record: lorry driver (Group 2 licence).",
   "reason": "Video consultation: “My wife says my snoring’s terrible — can you give me something for it?”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG202 (obstructive sleep apnoea/hypopnoea syndrome and obesity hypoventilation syndrome in over 16s, 2021) · [2] DVLA Assessing fitness to drive: a guide for medical professionals (respiratory and sleep conditions) · [3] GMC Confidentiality: patients’ fitness to drive and reporting concerns to the DVLA or DVA (2017) · [4] NICE NG136 (hypertension in adults, 2019, updated 2023) · [5] NICE NG28 (type 2 diabetes in adults) · [6] NICE NG196 (atrial fibrillation, 2021)",
   "summary": "Snoring with witnessed apnoeas, daytime sleepiness, obesity and a near-miss at the wheel is suspected OSA, not simple snoring. Assess with the Epworth score and STOP-Bang, refer for rapid sleep assessment because he is a vocational driver, and tell him clearly that he must not drive while sleepy. Explain the DVLA rules honestly and supportively, and document the advice.",
   "points": [
    {
     "h": "Recognise the syndrome",
     "t": "Loud snoring, witnessed pauses and gasping, unrefreshing sleep and excessive daytime sleepiness, with obesity and a large neck, is the typical picture of OSAHS. Other clues: morning headache, nocturia, poor concentration, irritability, low libido."
    },
    {
     "h": "Assessment in primary care",
     "t": "NICE NG202 [1]: use the Epworth Sleepiness Scale and consider STOP-Bang, but do not use the Epworth score alone to decide on referral, because not everyone with OSAHS is sleepy. Record BMI, neck circumference, blood pressure, and ask about alcohol, sedatives and smoking."
    },
    {
     "h": "Who to prioritise",
     "t": "NICE NG202 [1]: prioritise rapid sleep-service assessment for people with suspected OSAHS who drive vocationally, work in safety-critical roles, have unstable cardiovascular disease, or are pregnant. A lorry driver with a near-miss meets this."
    },
    {
     "h": "Treatment",
     "t": "NICE NG202 [1]: lifestyle advice for everyone (weight loss, alcohol reduction, stopping smoking, sleep position). Fixed-level CPAP for moderate or severe OSAHS; consider CPAP for mild OSAHS with symptoms affecting daily life; a customised mandibular advancement splint is an option for mild OSAHS or if CPAP is declined or not tolerated. Severity by AHI: mild below 15, moderate 15 to 29, severe 30 or more."
    },
    {
     "h": "Driving: what DVLA says",
     "t": "DVLA [2]: “excessive sleepiness” means sleepiness having, or likely to have, an adverse effect on driving. With suspected OSAS and excessive sleepiness he must not drive until the sleepiness is satisfactorily controlled; DVLA must be told if control is not achieved within 3 months. Moderate or severe OSAS with excessive sleepiness must be notified. Once controlled and adherent on treatment, drivers are usually relicensed; Group 2 licences are then reviewed at least annually. It is the driver’s legal duty to notify."
    },
    {
     "h": "The GP’s duty",
     "t": "GMC (2017) [3]: explain the condition’s effect on driving and the duty to notify, and document it. If a patient continues to drive when not safe and cannot be persuaded to stop, the GP should contact the DVLA promptly, telling the patient first where possible."
    },
    {
     "h": "Associated conditions",
     "t": "Check blood pressure (OSA is linked with resistant hypertension, NICE NG136 [4]), HbA1c (NICE NG28 [5]), pulse rhythm for atrial fibrillation (NICE NG196 [6]) and cardiovascular risk."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Malhotra, I’m Dr Clarke. What can I do for you today?",
    "dom": "rto",
    "why": "Open start"
   },
   {
    "who": "pt",
    "text": "Doc, my wife’s threatening to sleep in the spare room — my snoring’s that bad. She reckons I stop breathing and gasp, but she exaggerates. I’m a bit knackered in the day, sure, but who isn’t? Can you just give me a spray or strips or something?"
   },
   {
    "who": "dr",
    "text": "I’ll definitely help with the snoring. What your wife describes, plus being tired, makes me want to understand the whole picture first, so whatever we do actually works. Can I ask some questions and then we’ll plan?",
    "dom": "gs",
    "why": "Takes the request seriously and agrees an agenda"
   },
   {
    "who": "pt",
    "text": "Fair enough."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Tell me more about what your wife sees at night.",
    "dom": "tasks",
    "why": "Witnessed apnoeas"
   },
   {
    "who": "pt",
    "text": "She says I go quiet, then gasp and snort like I’m choking. She’s been nudging me."
   },
   {
    "who": "dr",
    "text": "And in the day — how likely are you to doze off watching TV, sitting reading, as a passenger, or sitting in traffic? I’ll give each a score out of three — it’s called the Epworth scale.",
    "dom": "tasks",
    "why": "Quantifies sleepiness with the Epworth scale"
   },
   {
    "who": "pt",
    "text": "TV, definitely. Reading, yes. Traffic… sometimes."
   },
   {
    "who": "dr",
    "text": "You mentioned traffic. You drive a lorry for work, don’t you? Have you ever felt yourself nodding off at the wheel, or had any near-misses?",
    "dom": "tasks",
    "why": "Asks directly about sleepiness while driving"
   },
   {
    "who": "pt",
    "text": "(pause) Once, recently. I caught myself drifting. Scared me, to be honest."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me — I know that wasn’t easy. Do you wake unrefreshed, with headaches in the morning, or get up to pass water at night?",
    "dom": "tasks",
    "why": "Supporting OSA features"
   },
   {
    "who": "pt",
    "text": "I wake up feeling like I haven’t slept."
   },
   {
    "who": "dr",
    "text": "How much alcohol do you drink, especially in the evening? Any sleeping tablets or other medicines? And do you smoke?",
    "dom": "tasks",
    "why": "Aggravating factors"
   },
   {
    "who": "pt",
    "text": "A drink in the evening now and then. No tablets."
   },
   {
    "who": "dr",
    "text": "Has anyone ever told you your blood pressure or sugar is high, or that your heart beats irregularly? And what’s your collar size?",
    "dom": "tasks",
    "why": "Associated conditions and neck size"
   },
   {
    "who": "pt",
    "text": "Not that I know. Collar size — I’d have to check."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "When you think about all this, what’s worrying you most?",
    "dom": "rto",
    "why": "Elicits the hidden concern"
   },
   {
    "who": "pt",
    "text": "Honestly? The job. If this is something, am I going to lose my licence? I’ve got bills."
   },
   {
    "who": "dr",
    "text": "That’s a completely understandable worry, and I’m glad you’ve said it. I’ll be straight with you about driving, and I’ll also tell you the good news.",
    "dom": "rto",
    "why": "Validates and signals honesty"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "What you’re describing — heavy snoring, stopping breathing and gasping, feeling unrefreshed and dozing in the day — sounds like obstructive sleep apnoea. The airway at the back of the throat collapses during sleep, your oxygen dips, and your brain wakes you briefly many times a night without you knowing. That’s why you’re so tired.",
    "dom": "tasks",
    "why": "Names suspected OSA and explains it"
   },
   {
    "who": "pt",
    "text": "So it’s not just snoring."
   },
   {
    "who": "dr",
    "text": "It’s more than snoring. A spray or strips won’t fix it. I’m going to refer you to the sleep clinic for a sleep study, and because you drive for a living I’ll mark it as a priority. It’s very treatable. Losing some weight and cutting evening alcohol help, and many people use a mask at night called CPAP. Most feel like a new person.",
    "dom": "tasks",
    "why": "Priority sleep referral (NG202), lifestyle and CPAP"
   },
   {
    "who": "pt",
    "text": "Right. And the lorry?"
   },
   {
    "who": "dr",
    "text": "This is the important part. Because you’re sleepy and you’ve drifted at the wheel, you must not drive — lorry or car — until the sleepiness is under control. That’s for your safety and everyone else’s on the road.",
    "dom": "tasks",
    "why": "Clear advice not to drive"
   },
   {
    "who": "pt",
    "text": "Not drive at all? That’s my living."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I know, and I’m sorry — that’s hard to hear. Here’s the good news: once sleep apnoea is treated and the sleepiness is controlled, most people get back to driving, professional drivers included. The DVLA rules are: while this is being looked into, you don’t drive. If it isn’t controlled within three months, or the study shows moderate or severe apnoea, you must tell the DVLA yourself. For your lorry licence, they’ll then want the sleep clinic to confirm it’s controlled, and review it every year.",
    "dom": "tasks",
    "why": "Explains DVLA rules accurately and supportively"
   },
   {
    "who": "pt",
    "text": "So it’s not forever."
   },
   {
    "who": "dr",
    "text": "For most people, no. Getting treated quickly is the fastest way back to work. Would it help to talk about what you’ll say to work? That’s your conversation to have — I won’t contact them without your agreement, but I can do a fit note if you can’t do your usual job.",
    "dom": "rto",
    "why": "Supports work concerns, respects confidentiality"
   },
   {
    "who": "pt",
    "text": "Yeah, a note would help."
   },
   {
    "who": "dr",
    "text": "I’d also like you to come in so the nurse can check your blood pressure, weight and neck size, a pulse check, and a blood test for sugar — sleep apnoea often goes with those.",
    "dom": "tasks",
    "why": "Associated condition checks"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Please don’t drive to the sleep clinic — get a lift. I’m writing down today that I’ve advised you not to drive and explained the DVLA rules. Can you tell me back what you’re going to do?",
    "dom": "gs",
    "why": "Documents advice and checks understanding"
   },
   {
    "who": "pt",
    "text": "No driving till it’s sorted. Sleep study. Tell the DVLA if it’s moderate or worse, or not sorted in three months. Cut back the evening drink. Come in for the checks."
   },
   {
    "who": "dr",
    "text": "Exactly right. I’ll see you after the sleep study. If you notice chest pain, a racing irregular heartbeat or feel really unwell, get seen urgently. And if you ever feel you can’t manage without driving, talk to me first — we’ll work it out together.",
    "dom": "gs",
    "why": "Follow-up, safety-net and an open door on driving"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; acknowledged the snoring request before widening the question.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Occupation and livelihood, evening alcohol, sedatives, smoking and wife’s concerns.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “who isn’t tired” and the near-miss in traffic, and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (just snoring), concern (losing his licence and income), expectation (a spray or strips).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Epworth score with STOP-Bang (NICE NG202); BP, BMI, neck circumference, pulse rhythm, HbA1c.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "OSA versus simple snoring; contributors (weight, alcohol); other causes of sleepiness.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked directly about sleepiness at the wheel and near-misses; screened cardiovascular associations.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named suspected obstructive sleep apnoea and explained the mechanism.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Priority sleep-service referral as a vocational driver; lifestyle; CPAP explained; not to drive while sleepy.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Hypertension, diabetes and AF checks; fit note for work; confidentiality respected.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "DVLA rules explained and documented; teach-back; follow-up after the study; GMC route held in reserve.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Professional & ethical dilemmas",
    "Long-term conditions & cancer",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Raj Malhotra",
    "age": "52 years · male",
    "pmh": [
     "BMI 34"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "⚠ Occupation: HGV (Group 2) lorry driver.",
    "reason": "“Can you just give me something for the snoring?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and accept",
     "d": "Take the snoring seriously; ask permission to understand the whole picture."
    },
    {
     "t": "1–5",
     "h": "Assess",
     "d": "Witnessed apnoeas, Epworth items, driving and near-misses, unrefreshing sleep, alcohol, sedatives, BP, diabetes, AF, neck size."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Fear for his licence and income. Name it."
    },
    {
     "t": "6–9",
     "h": "Explain and advise",
     "d": "Suspected OSA; priority sleep referral; CPAP and lifestyle; must not drive while sleepy."
    },
    {
     "t": "9–12",
     "h": "Support and close",
     "d": "DVLA rules with the route back to driving; fit note; checks; documentation; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Offers a snoring spray; never asks about driving; or asks, but then avoids the driving advice because of his job; no referral or documentation.",
    "pass": "Recognises OSA, uses the Epworth score, refers to the sleep service, advises him not to drive while sleepy and explains the DVLA duty.",
    "exc": "All of the above, plus: asks directly about near-misses and responds to the disclosure warmly; prioritises the referral as a vocational driver (NICE NG202); explains the DVLA rules accurately with the route back to work; offers a fit note; documents the advice; checks BP, HbA1c and rhythm."
   },
   "avoid": [
    {
     "dont": "“Try a nasal spray and sleeping on your side.”",
     "instead": "“What your wife describes sounds like more than snoring — I want to check for sleep apnoea.”",
     "why": "Treating OSA as simple snoring misses a dangerous, treatable condition."
    },
    {
     "dont": "“You’ll lose your licence, I’m afraid.”",
     "instead": "“You mustn’t drive while you’re sleepy — and once it’s treated, most people get back to driving.”",
     "why": "Accurate and hopeful advice keeps him engaged and honest."
    },
    {
     "dont": "“I have to report you to the DVLA.”",
     "instead": "“It’s your legal duty to tell them if it’s moderate or severe, or not controlled in three months — I’ll help you through it.”",
     "why": "The duty is his; the GP reports only if he keeps driving unsafely against advice (GMC 2017)."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Livelihood",
     "t": "Loss of income drives minimisation. Offer a fit note and practical help; a quick referral is the fastest route back to work."
    },
    {
     "h": "Relationship",
     "t": "His wife’s observations are key evidence and her sleep is affected too. Treating OSA usually helps both."
    }
   ],
   "legal": [
    {
     "h": "DVLA and OSA",
     "t": "DVLA Assessing fitness to drive: with excessive sleepiness from suspected OSAS he must not drive until controlled, and must notify if not controlled within 3 months; moderate or severe OSAS with excessive sleepiness must be notified. Group 2 relicensing requires confirmed control and adherence with at least annual review."
    },
    {
     "h": "GMC and disclosure",
     "t": "GMC Confidentiality: patients’ fitness to drive (2017): advise, document, try to persuade; if he continues to drive unsafely, inform the DVLA promptly, telling him first where possible."
    },
    {
     "h": "Fit note",
     "t": "A fit note can state he is not fit for driving duties but may be fit for other work with adjustments."
    }
   ],
   "professional": [
    {
     "h": "Public safety versus confidentiality",
     "t": "The GP’s duty to other road users can outweigh confidentiality when a patient keeps driving unsafely. Handle it transparently and supportively."
    },
    {
     "h": "Documentation",
     "t": "Record the Epworth score, the near-miss, the advice not to drive, the DVLA explanation and the patient’s response."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "The Sleep Apnoea Trust and Hope2Sleep for patient information; local weight management services; employer occupational health if he chooses to involve them."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Near-miss or sleepiness at the wheel",
     "Witnessed apnoeas and choking",
     "Very high Epworth score or falling asleep in active situations",
     "Resistant hypertension, AF or heart failure"
    ],
    "psychosocial": [
     "Fear of losing his HGV licence and income",
     "His wife’s sleep and relationship strain",
     "Evening alcohol and weight"
    ],
    "ice": [
     "Idea: “It’s just bad snoring — my wife exaggerates.”",
     "Concern: losing his licence and his job",
     "Expectation: a spray or strips"
    ]
   },
   "diagnosis": "“This sounds like obstructive sleep apnoea. It explains the snoring, the gasping your wife sees, and why you’re so tired in the day.”",
   "diagnosisLay": "“When you’re asleep, the soft tissues at the back of your throat flop closed like a floppy straw. Your oxygen drops, your brain jolts you awake to breathe, and that happens many times a night — so you never get proper rest.”",
   "management": {
    "reflectIce": "“You’re worried about your job — that’s exactly why getting this treated quickly matters, because treatment is the route back to driving.”",
    "psychosocial": "Offer a fit note; respect his choice about telling his employer; be clear that the DVLA duty is his and that you will help.",
    "sharedPlan": [
     "Priority sleep-service referral as a vocational driver (NICE NG202); Epworth and STOP-Bang recorded",
     "Weight loss, less evening alcohol, no sedatives; CPAP if confirmed",
     "BP, BMI, neck size, pulse rhythm, HbA1c"
    ],
    "safetyNet": [
     "Must not drive while sleepy; DVLA notification if moderate or severe, or not controlled within 3 months",
     "Advice documented; GMC route if he continues to drive unsafely",
     "Review after the sleep study"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Sleep apnoea",
    "s": "Case walkthrough · NICE NG202",
    "href": "../cases/osa.html"
   },
   {
    "ic": "💠",
    "t": "OSA protocol",
    "s": "Epworth, STOP-Bang and CPAP",
    "href": "management/osa.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA guide",
    "s": "Fitness to drive · reporting duties",
    "href": "dvla.html"
   },
   {
    "ic": "💠",
    "t": "Driving and medical conditions",
    "s": "Protocol · notification rules",
    "href": "management/driving-diseases.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is designed to test whether you raise driving with a man whose income depends on it. Most candidates recognise OSA; fewer ask about the wheel directly and give accurate, kind DVLA advice.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Offering a snoring spray or mouth strips.",
     "why": "“Management plan not in line with current UK best practice.” Witnessed apnoeas and sleepiness need a sleep study (NICE NG202).",
     "fix": "Name suspected sleep apnoea and refer."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about sleepiness while driving.",
     "why": "The near-miss is the central safety issue; missing it misses the station.",
     "fix": "“You drive for work — have you ever felt yourself nodding off at the wheel?”"
    },
    {
     "dom": "tasks",
     "fail": "Telling him he must notify the DVLA today, or that he will lose his licence permanently.",
     "why": "Inaccurate advice. DVLA: stop driving while sleepy; notify if moderate or severe OSAS is confirmed, or if not controlled within 3 months; relicensing follows control.",
     "fix": "Give the rule accurately and the route back to driving."
    },
    {
     "dom": "rto",
     "fail": "Avoiding the driving advice because he is worried about his job.",
     "why": "Collusion on public safety is a serious professional failing (GMC 2017).",
     "fix": "Name the worry, then be clear: “You mustn’t drive while sleepy — and here’s how we get you back.”"
    },
    {
     "dom": "tasks",
     "fail": "Routine referral with no priority for a vocational driver.",
     "why": "NICE NG202 prioritises rapid assessment for vocational drivers.",
     "fix": "Mark the referral as a priority and say why."
    },
    {
     "dom": "gs",
     "fail": "Driving advice given but not documented.",
     "why": "Documentation protects the patient, the public and the GP; it is expected feedback.",
     "fix": "Say it and write it: “I’m recording that I’ve advised you not to drive.”"
    }
   ]
  }
 },
 "peyronies-curvature": {
  "stem": {
   "name": "Stephen Hargreaves",
   "age": "54-year-old man",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies",
   "recent": "No recent consultations.",
   "reason": "Video consultation booked as “personal problem”: penis has developed a bend on erection over a few months, with pain and a lump."
  },
  "knowledge": {
   "guideline": "[1] EAU Sexual and Reproductive Health guidelines, penile curvature (international) · [2] BSSM guidelines on the management of erectile dysfunction in men (2017, published 2018) · [3] NICE NG12 (updated April 2026) · [4] NICE NG238 (cardiovascular disease: risk assessment and reduction, 2023) · [5] Mulhall et al, natural history of Peyronie’s disease, J Urol 2006",
   "summary": "Months of evolving curvature, pain on erection and a palpable shaft lump in a 54-year-old man is active-phase Peyronie’s disease. Make it safe to talk, explain honestly what usually happens, look for erectile dysfunction and cardiovascular risk, refer to urology, and take the emotional and relationship impact seriously.",
   "points": [
    {
     "h": "What it is",
     "t": "A fibrous plaque in the tunica albuginea causes an acquired curve, indentation or shortening on erection. EAU [1] (international): an active phase with painful erections and a changing deformity, then a stable phase in which pain has settled and the deformity has not changed for about 3 months."
    },
    {
     "h": "Natural history, honestly",
     "t": "Pain usually settles over the first year or so. The curve is less predictable: in one natural-history series about 1 in 8 improved, 4 in 10 stayed the same and about half worsened without treatment [5]. Do not promise that the curve will straighten."
    },
    {
     "h": "History and examination",
     "t": "Onset and progression, pain, direction and degree of the curve (photographs of the erect penis help the specialist), penetration difficulty, shortening, and erectile function. Examination needs a face-to-face visit with a chaperone offered: palpate the plaque, look for Dupuytren’s contracture of the hands, and check BP."
    },
    {
     "h": "Erectile dysfunction and cardiovascular risk",
     "t": "ED often coexists. BSSM [2]: assess cardiovascular and endocrine risk in men presenting with ED, including fasting glucose or HbA1c, lipids and morning total testosterone. NICE NG238 [4]: calculate cardiovascular risk (QRISK3). NICE NG12 (updated April 2026) [3]: consider PSA and DRE in men with erectile dysfunction, after counselling."
    },
    {
     "h": "Treatment and referral",
     "t": "Refer to urology (or an andrology service). In the active phase the specialist focuses on pain and stabilisation; conservative options such as traction devices may be discussed. EAU [1]: surgery is for stable disease with deformity that makes intercourse difficult, not the active phase. Oral PDE5 inhibitors can treat coexisting ED."
    },
    {
     "h": "Psychosexual impact",
     "t": "Peyronie’s commonly causes distress, low mood and relationship strain. Ask directly about mood, offer to involve a partner if he wishes, and consider psychosexual therapy (for example through the College of Sexual and Relationship Therapists)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Stephen, I’m Dr Evans. Are you somewhere you can talk privately? … Good. Take your time. What’s been going on?",
    "dom": "rto",
    "why": "Checks privacy and gives him time"
   },
   {
    "who": "pt",
    "text": "I’m sorry, this is mortifying. I almost cancelled. Over the last few months my… my penis has started to bend when it’s erect, there’s a lump I can feel, and it hurts. Sex has become really difficult and honestly it’s knocking me for six."
   },
   {
    "who": "dr",
    "text": "I’m really glad you didn’t cancel. That took courage. There’s nothing to be embarrassed about. What you’re describing is a recognised condition that doctors see regularly, and we can talk about it as openly as you like.",
    "dom": "rto",
    "why": "Creates safety and normalises"
   },
   {
    "who": "pt",
    "text": "Okay. Thank you. That helps."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When did you first notice the bend, and has it been changing?",
    "dom": "tasks",
    "why": "Onset and progression: active versus stable phase"
   },
   {
    "who": "pt",
    "text": "A few months ago. It seems to be getting worse."
   },
   {
    "who": "dr",
    "text": "Which way does it bend, and roughly how much? Some men find it easier to describe it like a clock face.",
    "dom": "tasks",
    "why": "Direction and degree of curvature"
   },
   {
    "who": "pt",
    "text": "I’m not sure how to describe it. Enough that it’s hard to… you know."
   },
   {
    "who": "dr",
    "text": "And the pain: only with erections, or at other times too?",
    "dom": "tasks",
    "why": "Characterises pain"
   },
   {
    "who": "pt",
    "text": "Mostly with erections."
   },
   {
    "who": "dr",
    "text": "Can I ask about the erections themselves: are they as firm as they used to be, and do they last?",
    "dom": "tasks",
    "why": "Screens for erectile dysfunction"
   },
   {
    "who": "pt",
    "text": "Honestly, I don’t know if it’s the bend or the erections. Everything’s just got harder to manage."
   },
   {
    "who": "dr",
    "text": "That’s a really useful answer, and we’ll look at both. Have you noticed any thickening or tightening in the palms of your hands, or bent fingers?",
    "dom": "tasks",
    "why": "Screens Dupuytren’s association"
   },
   {
    "who": "pt",
    "text": "No, I don’t think so."
   },
   {
    "who": "dr",
    "text": "Any trouble passing urine, getting up at night to wee, or blood in the urine?",
    "dom": "tasks",
    "why": "Screens LUTS and haematuria"
   },
   {
    "who": "pt",
    "text": "No."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "What have you been thinking this might be?",
    "dom": "rto",
    "why": "Elicits ideas"
   },
   {
    "who": "pt",
    "text": "I didn’t know. Part of me wondered if it was something terrible. And whether it can be fixed at all."
   },
   {
    "who": "dr",
    "text": "You said it’s knocking you for six. How is it affecting you in yourself, and in your relationship, if you’re in one?",
    "dom": "rto",
    "why": "Explores emotional and relationship impact without assuming a partner"
   },
   {
    "who": "pt",
    "text": "It’s been hard. I feel like less of a man, if I’m honest. I’ve been avoiding intimacy altogether."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me that. A lot of men feel exactly that way with this condition. Have you been feeling low, or losing interest in things more generally?",
    "dom": "tasks",
    "why": "Validates and screens mood"
   },
   {
    "who": "pt",
    "text": "A bit low. Not terrible. Mostly about this."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "What you’re describing sounds like Peyronie’s disease. It’s a patch of scar tissue in the wall of the penis. It’s not cancer, and it’s not something you’ve caused.",
    "dom": "tasks",
    "why": "Names the diagnosis and answers the unspoken fear"
   },
   {
    "who": "pt",
    "text": "Peyronie’s. I’ve never heard of it."
   },
   {
    "who": "dr",
    "text": "It usually has two stages. There’s an early stage, where you are now, with pain and the bend changing. After that it settles. The pain usually eases within a year or so. I’ll be honest about the bend: it doesn’t usually straighten on its own. For some men it stays the same, and for some it gets a bit worse before it settles.",
    "dom": "tasks",
    "why": "Honest, realistic natural history"
   },
   {
    "who": "pt",
    "text": "So it won’t go back to normal?"
   },
   {
    "who": "dr",
    "text": "It may not go back exactly to how it was. But there are treatments, and many men get back to comfortable sex. Operations are only done once it has settled, not in the early stage, and the specialists will explain the options.",
    "dom": "rto",
    "why": "Realistic hope without false reassurance"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "Here’s what I suggest. I’ll refer you to the urology team who specialise in this. If you can, take a photo of the erection from the side and from above: it really helps them. I’d like to see you in person to examine the area, with a chaperone if you’d like one, and check your blood pressure.",
    "dom": "tasks",
    "why": "Urology referral, photographs, in-person examination with chaperone"
   },
   {
    "who": "pt",
    "text": "Okay. I can do that."
   },
   {
    "who": "dr",
    "text": "I’d also like some blood tests: sugar, cholesterol and a morning testosterone. Erection problems and this condition are linked with heart and circulation health, so it’s worth checking. At your age, with erection difficulties, it’s also sensible to talk about a prostate blood test; I’ll explain the pros and cons when I see you.",
    "dom": "tasks",
    "why": "CV and endocrine work-up; NICE NG12 (updated April 2026) PSA consideration with counselling"
   },
   {
    "who": "pt",
    "text": "That makes sense."
   },
   {
    "who": "dr",
    "text": "If erections turn out to be part of the problem, there are tablets that help. And if it would help, you could bring your partner along, or we can arrange psychosexual therapy, which is specialist talking support for exactly this.",
    "dom": "tasks",
    "why": "ED treatment and psychosexual support"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you notice a sudden painful snap or crack during sex with rapid swelling and bruising, that’s an emergency: go to A&E. And if your mood gets worse, please tell me. Can you tell me back the plan so I know I’ve explained it well?",
    "dom": "gs",
    "why": "Penile fracture safety-net, mood, teach-back"
   },
   {
    "who": "pt",
    "text": "It’s Peyronie’s, a scar patch. Pain usually settles, the bend might not. Photos, come in for an examination and bloods, urology referral, and talk about the prostate test."
   },
   {
    "who": "dr",
    "text": "Exactly right. I’ll see you for the examination this week, and we’ll review everything in a month. You did the hard part today.",
    "dom": "gs",
    "why": "Follow-up booked; affirming close"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Checked privacy; open question; let him finish despite the embarrassment.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Relationship and intimacy impact, self-esteem, mood; no assumption about a partner.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “mortifying, almost cancelled”, “knocking me for six” and “less of a man”.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (something terrible), concern (can it be fixed; sexual future), expectation (to be heard and helped).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "In-person examination with chaperone (plaque, Dupuytren’s, BP); erect photographs; glucose/HbA1c, lipids, morning testosterone; QRISK3; PSA/DRE discussed.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Peyronie’s disease (active phase) versus other causes of curvature or lump; coexisting ED.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened LUTS, haematuria and systemic features; penile fracture safety-net.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Active-phase Peyronie’s disease with possible coexisting erectile dysfunction.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Urology referral; honest natural history; surgery only for stable disease; ED treatment if present.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Cardiovascular and endocrine risk; mood; psychosexual support and partner involvement if wished.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named emergency (penile fracture), mood safety-net, examination this week, review in a month, teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Stephen Hargreaves",
    "age": "54 years · male",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "NKDA",
    "recent": "No recent consultations.",
    "reason": "Video consultation booked online: “personal problem”."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Make it safe",
     "d": "Privacy check, thank him for coming, normalise. Without this, the history won’t come."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Onset, progression, direction, pain, erectile function, Dupuytren’s, urinary symptoms."
    },
    {
     "t": "5–7",
     "h": "ICE and impact",
     "d": "What he fears (something terrible, can it be fixed), intimacy, self-esteem, mood."
    },
    {
     "t": "7–9",
     "h": "Explain honestly",
     "d": "Name Peyronie’s. Not cancer. Pain usually settles; the curve often doesn’t. Surgery only once stable."
    },
    {
     "t": "9–12",
     "h": "Plan and close",
     "d": "Photos, in-person examination, bloods and QRISK3, PSA discussion, urology referral, ED treatment, psychosexual support, penile fracture safety-net, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Rushes an embarrassed man; gives brisk reassurance that “it’ll straighten out”; never asks about erections, mood or relationship; offers or promises surgery now; no referral or safety-net.",
    "pass": "Makes him comfortable, recognises Peyronie’s disease, explains the two phases, asks about erections and mood, refers to urology, and arranges an examination.",
    "exc": "All of the above, plus: explicitly answers the unspoken fear (not cancer); honest that the curve often persists; checks cardiovascular and endocrine risk and discusses PSA per NICE NG12 (updated April 2026); offers psychosexual support and partner involvement without assuming; photographs for the specialist; teach-back and booked follow-up."
   },
   "avoid": [
    {
     "dont": "“Don’t worry, it usually straightens out by itself.”",
     "instead": "“The pain usually settles. The bend often doesn’t fully straighten on its own, but there are treatments.”",
     "why": "False reassurance about the curve breaks trust when it doesn’t happen."
    },
    {
     "dont": "“Let’s get you booked in for an operation.”",
     "instead": "“Operations are only done once it’s settled, and the specialists will talk you through options.”",
     "why": "Surgery is not offered in the active phase."
    },
    {
     "dont": "“Is your wife upset about it?”",
     "instead": "“How is it affecting you, and your relationship if you’re in one?”",
     "why": "Assuming a partner or their gender closes down disclosure."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Self-esteem and relationships",
     "t": "Peyronie’s disease commonly causes distress, avoidance of intimacy and relationship strain. Naming this makes it easier for him to accept support."
    },
    {
     "h": "Masculinity and help-seeking",
     "t": "Men often delay presenting with sexual problems. Normalising and thanking him for coming improves engagement with follow-up."
    }
   ],
   "legal": [
    {
     "h": "Chaperones",
     "t": "GMC Intimate examinations and chaperones (2024): offer a chaperone for genital examination and record the offer and the response."
    }
   ],
   "professional": [
    {
     "h": "Intimate images",
     "t": "If photographs are used, the patient should take and hold them, sharing them only with the specialist in a secure, consented way. Do not ask for intimate images through unsecured channels; follow the GMC guidance on making and using visual recordings of patients."
    },
    {
     "h": "Remote consultation",
     "t": "Examination of the genitalia requires a face-to-face appointment; arrange it rather than relying on the video history."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "The Sexual Advice Association provides patient information on Peyronie’s disease and erectile dysfunction. Psychosexual therapy is available through NHS services or accredited therapists (College of Sexual and Relationship Therapists)."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Sudden snap during intercourse with rapid swelling and bruising (penile fracture: emergency)",
     "Urinary symptoms or haematuria",
     "Significant low mood or hopelessness",
     "A hard lump elsewhere on the penis or skin changes (needs urology review)"
    ],
    "psychosocial": [
     "Embarrassment and near-cancellation",
     "Avoidance of intimacy and loss of self-esteem",
     "Relationship impact, asked without assuming a partner"
    ],
    "ice": [
     "Idea: something badly wrong, possibly serious",
     "Concern: whether it can be fixed; his sexual future and relationship",
     "Expectation: to be heard without judgement and know the options"
    ]
   },
   "diagnosis": "“This sounds like Peyronie’s disease, a patch of scar tissue in the wall of the penis. It isn’t cancer. It’s in its early stage, so the pain should settle, but the bend may not fully straighten, and the specialists can help.”",
   "diagnosisLay": "“Imagine a balloon with a strip of sticky tape on one side. When it inflates, it bends towards the tape. The scar patch is that tape.”",
   "management": {
    "reflectIce": "“You said you wondered if it was something terrible and whether it can be fixed. It isn’t cancer, and there is a lot that can be done to help.”",
    "psychosocial": "Address self-esteem and intimacy openly; offer partner involvement if he wishes and psychosexual therapy; review mood at follow-up.",
    "sharedPlan": [
     "Urology or andrology referral with photographs of the erect penis",
     "In-person examination (chaperone offered) and BP",
     "HbA1c or fasting glucose, lipids, morning testosterone; QRISK3",
     "PSA and DRE discussed per NICE NG12 (updated April 2026) with counselling; PDE5 inhibitor if ED confirmed"
    ],
    "safetyNet": [
     "A&E for a painful snap with swelling and bruising",
     "Tell the GP if mood worsens",
     "Examination this week and review in one month"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Penile disorders protocol",
    "s": "Peyronie’s disease · referral",
    "href": "management/penile-disorders.html"
   },
   {
    "ic": "💠",
    "t": "Erectile dysfunction protocol",
    "s": "PDE5 inhibitors · CV risk",
    "href": "management/erectile-dysfunction.html"
   },
   {
    "ic": "📋",
    "t": "Erectile dysfunction",
    "s": "Case walkthrough",
    "href": "../cases/erectile-dysfunction.html"
   },
   {
    "ic": "🗺️",
    "t": "Raised PSA pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026)",
    "href": "algorithms/high-psa.html"
   },
   {
    "ic": "🧮",
    "t": "QRISK3",
    "s": "Medical Calculators",
    "href": "calculators.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed far more often on communication than on knowledge. An embarrassed man needs safety before he can give a history, and honest information rather than comfort he will later find untrue.",
   "items": [
    {
     "dom": "rto",
     "fail": "Launching into closed questions without acknowledging his embarrassment.",
     "why": "“Does not put the patient at ease.” He nearly cancelled; the history will be thin.",
     "fix": "“I’m really glad you didn’t cancel. There’s nothing to be embarrassed about. This is a recognised condition.”"
    },
    {
     "dom": "tasks",
     "fail": "Telling him the curve will straighten out.",
     "why": "Natural-history data show the curve improves in only a minority. False reassurance fails honesty.",
     "fix": "“The pain usually settles. The bend often doesn’t fully straighten on its own, but there are treatments.”"
    },
    {
     "dom": "tasks",
     "fail": "Never asking about erections or cardiovascular risk.",
     "why": "ED often coexists and shares vascular risk factors; BSSM and NICE NG12 (updated April 2026) expect them addressed.",
     "fix": "Ask about firmness and duration; arrange glucose or HbA1c, lipids, testosterone, QRISK3, and discuss PSA."
    },
    {
     "dom": "tasks",
     "fail": "Offering surgery now, or no referral at all.",
     "why": "Surgery is for stable disease; active disease still needs specialist assessment.",
     "fix": "Refer to urology now; explain that operations are considered once it has settled."
    },
    {
     "dom": "rto",
     "fail": "Skipping mood and relationship impact.",
     "why": "“Does not explore the psychosocial impact.” “Less of a man” is a cue that must be followed.",
     "fix": "Ask about mood, offer partner involvement if he wishes, and psychosexual therapy."
    },
    {
     "dom": "gs",
     "fail": "“The urologists will sort it out” with no examination, safety-net or follow-up.",
     "why": "Leaves the embarrassed patient unsupported and misses penile fracture advice.",
     "fix": "In-person examination this week, named emergency, mood safety-net, and review in a month."
    }
   ]
  }
 },
 "sudden-visual-loss": {
  "stem": {
   "name": "Gordon Aitken",
   "age": "64-year-old man",
   "pmh": [
    "Hypertension",
    "Myopia (short-sighted)"
   ],
   "meds": [
    "Antihypertensive treatment as on the repeat record (not specified in the case)"
   ],
   "allergy": "None recorded",
   "recent": "Telephone call today: a few hours of flashes and floaters in the right eye, now a grey “curtain” coming across part of the vision. Painless.",
   "reason": "“It doesn’t hurt, so I thought I could see how it goes over the weekend.”"
  },
  "knowledge": {
   "guideline": "[1] College of Optometrists Guidance for Professional Practice: flashes and floaters · [2] NICE NG128 Stroke and transient ischaemic attack in over 16s (2019, updated 2022) · [3] BSR guideline for the management of giant cell arteritis (Mackie et al., Rheumatology 2020) · [4] Hollands et al., JAMA 2009;302:2243–9 · [5] DVLA Assessing fitness to drive: visual disorders · [6] American Heart Association scientific statement on central retinal artery occlusion (Stroke 2021, international)",
   "summary": "Sudden painless loss of vision in one eye is an emergency whatever the pain level. Flashes and floaters followed by a curtain in a myopic eye is retinal detachment until an eye specialist has looked. Arrange same-day assessment, stop him driving, and screen for the vascular causes and giant cell arteritis.",
   "points": [
    {
     "h": "Pain is not the measure",
     "t": "Retinal detachment, retinal artery and vein occlusion, vitreous haemorrhage and ischaemic optic neuropathy are all painless. Urgency comes from sudden, persisting loss of vision, not from pain."
    },
    {
     "h": "The detachment story",
     "t": "New flashes and floaters followed by a shadow or curtain spreading across the field in one eye suggests a retinal tear progressing to detachment. Myopia, previous cataract surgery and trauma raise the risk. In patients with acute posterior vitreous detachment symptoms, a subjective reduction in vision makes a retinal tear more likely (Hollands 2009 [4]). The College of Optometrists [1] sets out urgency by risk; a curtain or field loss needs same-day assessment by the eye service, because detachment spreading to the macula threatens central vision."
    },
    {
     "h": "Vascular causes",
     "t": "Retinal artery occlusion causes sudden, profound, painless loss and is treated as a stroke equivalent (AHA 2021 [6], international). Retinal vein occlusion gives variable loss with vascular risk factors. Vitreous haemorrhage causes a sudden shower of floaters or haze, especially in diabetic retinopathy or with anticoagulation."
    },
    {
     "h": "Giant cell arteritis",
     "t": "In anyone over 50 with sudden visual loss, ask about new headache, scalp tenderness, jaw claudication, systemic upset and polymyalgic symptoms. BSR 2020 [3]: suspected GCA with visual loss needs immediate glucocorticoid and same-day ophthalmology review."
    },
    {
     "h": "Transient loss",
     "t": "Monocular loss that recovers fully within minutes (amaurosis fugax) is a TIA. NICE NG128 [2]: aspirin 300 mg immediately unless contraindicated, and specialist assessment within 24 hours of symptom onset."
    },
    {
     "h": "What a phone call can and cannot do",
     "t": "History can place the likely cause, but only a dilated fundal examination can confirm or exclude detachment. The safe disposition is a same-day slot with the emergency eye service, not a GP appointment on Monday."
    },
    {
     "h": "Driving",
     "t": "He should not drive to hospital. After diagnosis, the eye team will advise on driving; DVLA [5] visual standards for Group 1 include reading a number plate at 20 metres and 6/12 acuity with both eyes open, plus a field standard."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Aitken, it’s Dr Lewis returning your call. Can you tell me what’s happened?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "The sight in my right eye has gone funny over the last few hours. There were some flashes and little floaters earlier, and now it’s like a grey curtain coming down over the side of it. It doesn’t hurt at all, so I figured it’s nothing urgent and I could see how it goes over the weekend."
   },
   {
    "who": "dr",
    "text": "Thank you, that’s a really clear description, and I’m glad you rang today. I need to ask some quick questions, because what you’re describing may need seeing today. Is that alright?",
    "dom": "gs",
    "why": "Signals urgency early without alarming"
   },
   {
    "who": "pt",
    "text": "Today? Okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "If you cover your left eye, what can you see with the right? Is the curtain still there now?",
    "dom": "tasks",
    "why": "Confirms monocular and persisting loss"
   },
   {
    "who": "pt",
    "text": "Yes, it’s still there. The side of it is grey, like a shadow."
   },
   {
    "who": "dr",
    "text": "Has it spread or got bigger since it started, and is the centre of your vision, like reading or faces, still clear?",
    "dom": "tasks",
    "why": "Assesses progression and macular involvement"
   },
   {
    "who": "pt",
    "text": "I think it’s creeping in a bit. The middle is still okay."
   },
   {
    "who": "dr",
    "text": "Did the vision go suddenly all at once, or come and go at all?",
    "dom": "tasks",
    "why": "Separates persistent loss from amaurosis fugax"
   },
   {
    "who": "pt",
    "text": "It hasn’t come back. It’s been slowly coming across."
   },
   {
    "who": "dr",
    "text": "Any new headache, tenderness on your scalp when you brush your hair, or pain in your jaw when you chew? Any weakness, numbness, or trouble speaking?",
    "dom": "tasks",
    "why": "Screens GCA and stroke"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Have you had any injury to the eye or eye surgery, such as cataract surgery?",
    "dom": "tasks",
    "why": "Checks detachment risk factors"
   },
   {
    "who": "pt",
    "text": "No. I’ve just always been short-sighted."
   },
   {
    "who": "dr",
    "text": "And do you take any blood thinners, and have you been told you have diabetes?",
    "dom": "tasks",
    "why": "Checks vascular and bleeding risk"
   },
   {
    "who": "pt",
    "text": "Only what’s on my list for blood pressure, I’d need to check the names. Nobody’s mentioned diabetes."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "You mentioned waiting for the weekend. What were you thinking it might be?",
    "dom": "rto",
    "why": "Explores his idea"
   },
   {
    "who": "pt",
    "text": "Tired eyes, maybe. I didn’t want to make a fuss when it doesn’t hurt."
   },
   {
    "who": "dr",
    "text": "I understand, and you’re not making a fuss at all. Is anything worrying you about it?",
    "dom": "rto",
    "why": "Validates and opens concerns"
   },
   {
    "who": "pt",
    "text": "Well, you don’t expect a curtain in your eye, do you."
   },
   {
    "phase": "Explanation",
    "clock": "5–7 min",
    "who": "dr",
    "text": "No, you don’t. Here’s what I think. The flashes and floaters followed by a curtain, in someone who is short-sighted, is the typical story of the retina, the seeing layer at the back of the eye, starting to come away. It doesn’t hurt, but it is an emergency.",
    "dom": "tasks",
    "why": "Names likely retinal detachment in plain language"
   },
   {
    "who": "pt",
    "text": "Even without pain?"
   },
   {
    "who": "dr",
    "text": "Yes. Pain isn’t a good guide with eyes. The concern is that if it spreads to the centre, it can affect your reading and detailed vision permanently. Your centre is still clear, which is exactly why we should act today.",
    "dom": "rto",
    "why": "Corrects the misconception and links it to his own vision"
   },
   {
    "who": "pt",
    "text": "Right. I see."
   },
   {
    "phase": "Shared management",
    "clock": "7–10 min",
    "who": "dr",
    "text": "I’d like the emergency eye service to see you today. I’ll call them now, explain what’s happened and send over the details. They’ll look at the back of the eye with drops, which I can’t do over the phone.",
    "dom": "tasks",
    "why": "Same-day eye service with direct handover"
   },
   {
    "who": "dr",
    "text": "Please don’t drive yourself. Is there someone who can take you, or would you like help arranging transport?",
    "dom": "gs",
    "why": "Practical safety about driving"
   },
   {
    "who": "pt",
    "text": "I can sort a lift."
   },
   {
    "who": "dr",
    "text": "Good. Take your glasses and your list of medicines. I’ll ring you back within the hour with where and when to go.",
    "dom": "gs",
    "why": "Concrete next steps and callback"
   },
   {
    "phase": "Safety-net and close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "If before you’re seen the shadow spreads to the middle of your vision, the whole eye goes dark, or you get weakness, numbness or trouble speaking, call 999. If you get a new headache or jaw pain on chewing, tell the eye team straight away.",
    "dom": "gs",
    "why": "Specific escalation triggers"
   },
   {
    "who": "dr",
    "text": "Can you tell me back what’s happening next?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "You’re calling the eye unit, I’m going today with a lift, not driving, and 999 if it gets to the middle or I get stroke signs."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll call you back shortly, and I’ll check in after you’ve been seen.",
    "dom": "gs",
    "why": "Confirms follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Let him describe the flashes, floaters and curtain in full, and noted the plan to wait for the weekend.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Who can take him, whether he drives, what he was planning to do and why.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “doesn’t hurt so it can wait” and the progression of the curtain.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (tired eyes, painless means minor), concern (a curtain in his eye), expectation (to wait).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Cover test for monocular loss, progression, macular sparing, transient vs persistent; recognised that a dilated fundal examination is needed the same day.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Retinal detachment versus retinal artery or vein occlusion, vitreous haemorrhage, GCA and amaurosis fugax.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened GCA symptoms and stroke features; asked about anticoagulants and diabetes.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named likely retinal detachment in plain words and explained why painless does not mean safe.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day emergency eye service with phone handover; told him not to drive; practical arrangements.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Hypertension and vascular risk noted; medicine list to take; follow-up after the eye review.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 triggers named; GCA symptoms to report; teach-back; callback within the hour.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Older adults",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Gordon Aitken",
    "age": "64 years · male",
    "pmh": [
     "Hypertension",
     "Myopia"
    ],
    "meds": [
     "Antihypertensive (per repeat record)"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Telephone request today: hours of flashes and floaters in the right eye, now a grey curtain. Painless.",
    "reason": "“It doesn’t hurt, so can it wait until after the weekend?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and flag urgency",
     "d": "Let him finish the curtain story, then say you need a few quick questions because it may need seeing today."
    },
    {
     "t": "1–4",
     "h": "Focused remote history",
     "d": "Cover test, persistent vs transient, spreading, centre spared or not, GCA and stroke symptoms, eye surgery or trauma, anticoagulants, diabetes."
    },
    {
     "t": "4–5",
     "h": "ICE",
     "d": "“Tired eyes”, not wanting to fuss, waiting for the weekend."
    },
    {
     "t": "5–10",
     "h": "Explain and act",
     "d": "Likely retinal detachment. Pain is not a guide. Same-day emergency eye service with a phone handover, no driving, callback."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 for spread to the centre, total loss or stroke signs; GCA symptoms to report; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Accepts that it can wait because it is painless; books a routine appointment or suggests an optician next week; does not ask about transient loss or GCA; lets him drive.",
    "pass": "Recognises the retinal detachment story, arranges same-day emergency eye assessment, advises not to drive, and gives a basic safety-net.",
    "exc": "All of the above, plus: corrects the painless-means-safe belief in terms that matter to him (keeping his central vision); screens GCA, stroke and amaurosis efficiently; hands over directly and calls back; checks transport; uses teach-back and names specific 999 triggers."
   },
   "avoid": [
    {
     "dont": "“As it’s painless, let’s see how it is on Monday.”",
     "instead": "“Pain isn’t a good guide with eyes. This needs looking at today.”",
     "why": "Delay risks the detachment reaching the macula."
    },
    {
     "dont": "“Pop into your optician next week.”",
     "instead": "“I’ll call the emergency eye service now so you’re seen today.”",
     "why": "A curtain with flashes and floaters needs same-day specialist assessment."
    },
    {
     "dont": "“It’s probably just floaters, nothing to worry about.”",
     "instead": "“Floaters alone can be harmless, but with a curtain across your vision it could be the retina coming away.”",
     "why": "False reassurance on a sight-threatening story."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Getting there",
     "t": "Check he has a lift or arrange transport. Visual loss in one eye affects depth perception and safety on the roads."
    },
    {
     "h": "Not wanting to fuss",
     "t": "Older patients often minimise symptoms. Thank him for calling and make clear that this is exactly what the practice is for."
    }
   ],
   "legal": [
    {
     "h": "DVLA",
     "t": "He must not drive today. After treatment, the eye team will advise; he must meet the DVLA Group 1 visual standards and tell DVLA if told they are not met or if both eyes are affected (DVLA Assessing fitness to drive)."
    }
   ],
   "professional": [
    {
     "h": "Remote triage",
     "t": "Telephone assessment cannot examine the fundus; when a sight-threatening cause is likely, arrange face-to-face specialist assessment the same day and document the reasoning."
    },
    {
     "h": "Handover",
     "t": "Speak directly to the eye service, send the clinical details, and arrange a callback so the plan does not rely on the patient alone (GMC Good medical practice)."
    }
   ],
   "community": [
    {
     "h": "Eye services",
     "t": "Many areas have urgent eye care services through community optometrists, but a curtain or field loss should go directly to the hospital emergency eye service."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Curtain or shadow across the field after flashes and floaters (retinal detachment)",
     "Sudden profound loss (retinal artery occlusion, stroke equivalent)",
     "Headache, scalp tenderness or jaw claudication over 50 (GCA)",
     "Transient monocular loss (amaurosis fugax: TIA pathway)",
     "Weakness, numbness or speech disturbance"
    ],
    "psychosocial": [
     "Transport and whether he drives",
     "Not wanting to make a fuss",
     "Who is at home"
    ],
    "ice": [
     "Idea: tired eyes; painless means not serious",
     "Concern: “you don’t expect a curtain in your eye”",
     "Expectation: to wait until after the weekend"
    ]
   },
   "diagnosis": "“Flashes and floaters, then a curtain across your vision, in someone who is short-sighted, is the typical story of the retina starting to come away. It needs seeing today.”",
   "diagnosisLay": "“The retina is like wallpaper lining the back of the eye. When it starts to peel, you see a curtain. The sooner it’s stuck back, the better the chance of keeping the centre of your vision.”",
   "management": {
    "reflectIce": "“You thought that because it doesn’t hurt it could wait. With eyes, pain isn’t a good guide, and this is one to act on today.”",
    "psychosocial": "Arrange a lift or transport, and make sure he knows where to go and when.",
    "sharedPlan": [
     "Same-day emergency eye service; phone handover",
     "No driving",
     "Take glasses and medicine list",
     "Callback within the hour; follow-up after the eye review"
    ],
    "safetyNet": [
     "999 if the shadow reaches the centre, vision goes dark, or stroke symptoms",
     "Report new headache or jaw pain on chewing to the eye team immediately",
     "Contact the practice if he cannot get to the appointment"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Sudden vision loss",
    "s": "Visual algorithm · painless and painful causes",
    "href": "algorithms/vision-loss.html"
   },
   {
    "ic": "🗺️",
    "t": "Flashes and floaters",
    "s": "Visual algorithm · retinal tear and detachment",
    "href": "algorithms/flashes-floaters.html"
   },
   {
    "ic": "💠",
    "t": "Giant cell arteritis",
    "s": "Protocol · BSR 2020 fast track",
    "href": "management/giant-cell-arteritis.html"
   },
   {
    "ic": "💠",
    "t": "TIA and stroke",
    "s": "Protocol · NICE NG128",
    "href": "management/tia-stroke.html"
   }
  ],
  "pitfalls": {
   "intro": "This telephone station is failed by being reassured by the patient. He tells you it is painless and can wait; the marks are for recognising a sight-threatening story, acting today and keeping him safe on the way.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting that painless means routine.",
     "why": "Retinal detachment and vascular occlusions are painless. Delay risks the macula.",
     "fix": "Same-day emergency eye service, arranged by you."
    },
    {
     "dom": "tasks",
     "fail": "Not establishing whether the loss is persistent or transient.",
     "why": "Transient monocular loss is amaurosis fugax and follows the NICE NG128 TIA pathway.",
     "fix": "“Has the vision come back at all, even briefly?”"
    },
    {
     "dom": "tasks",
     "fail": "Forgetting GCA in a 64-year-old.",
     "why": "GCA can blind the other eye; BSR 2020 wants immediate steroids and same-day ophthalmology for visual loss.",
     "fix": "Ask about headache, scalp tenderness and jaw claudication."
    },
    {
     "dom": "rto",
     "fail": "Scolding him for wanting to wait.",
     "why": "He called because he was worried. Criticism makes him less likely to seek help next time.",
     "fix": "“I’m glad you rang today. Pain isn’t a good guide with eyes.”"
    },
    {
     "dom": "gs",
     "fail": "Leaving him to find the eye unit himself.",
     "why": "Patients get turned away or delayed without a handover.",
     "fix": "Call the eye service, send details, and ring him back with the time and place."
    },
    {
     "dom": "gs",
     "fail": "No advice about driving.",
     "why": "Monocular visual loss is unsafe for driving.",
     "fix": "“Please don’t drive. Can someone take you?”"
    },
    {
     "dom": "gs",
     "fail": "Vague safety-net.",
     "why": "“Call if worse” does not tell him what worse means.",
     "fix": "Name the triggers: spread to the centre, total darkness, stroke symptoms."
    }
   ]
  }
 },
 "t2dm-traveller": {
  "stem": {
   "name": "Patrick Ward",
   "age": "47-year-old man",
   "pmh": [
    "Type 2 diabetes — poorly engaged with care",
    "Several missed diabetes reviews"
   ],
   "meds": [
    "Diabetes medication as on the repeat record (collection irregular)"
   ],
   "allergy": "None recorded",
   "recent": "Last HbA1c high. Little glucose monitoring. Several missed recalls. Gypsy/Traveller community; moves location frequently. Low literacy noted.",
   "reason": "Video consultation. Has come because his wife is worried."
  },
  "knowledge": {
   "guideline": "[1] NICE NG28 (type 2 diabetes in adults: management, updated February 2026) · [2] NICE NG19 (diabetic foot problems) · [3] NHS England, Patient registration standard operating principles for primary medical care · [4] Equality Act 2010 · [5] EHRC Research report 12, Inequalities experienced by Gypsy and Traveller communities (2009) · [6] DVLA Assessing fitness to drive (November 2025 edition)",
   "summary": "This is a health-inequalities consultation. Earn trust, communicate without relying on writing, avoid assumptions, and agree a short, portable plan that survives moving on. Good diabetes care here means doing the few highest-value things reliably.",
   "points": [
    {
     "h": "The inequality is real",
     "t": "Gypsy and Traveller communities have some of the poorest health outcomes and lowest life expectancy in the UK, linked to discrimination, poor access, low literacy and broken continuity (EHRC 2009 [5]). Romany Gypsies and Irish Travellers are protected as ethnic groups under the Equality Act 2010 [4]."
    },
    {
     "h": "Access and registration",
     "t": "NHS England [3]: a practice cannot refuse registration for lack of proof of address, identity or immigration status. People staying in an area for up to 3 months can register as temporary residents, and anyone can get immediately necessary treatment. Tell him this plainly."
    },
    {
     "h": "Communicate without writing",
     "t": "With low literacy, leaflets and forms exclude him. Use plain speech, pictures or phone photos, a chunk-and-check approach and teach-back. NICE NG28 [1] asks that structured education be accessible, taking account of culture, literacy and individual needs; ask what format would work for him."
    },
    {
     "h": "Individualise targets",
     "t": "NICE NG28 [1]: agree an individual HbA1c target. Typically 48 mmol/mol on lifestyle or a single drug not causing hypoglycaemia, 53 mmol/mol on a drug that can; intensify if 58 mmol/mol or above. Relax targets where the risks outweigh the benefits."
    },
    {
     "h": "Prioritise ruthlessly",
     "t": "Agree two or three actions: take the key medicine regularly, get eyes and feet checked, one food or drink change he chooses. Annual foot risk assessment (NICE NG19 [2]) and retinal screening via the NHS Diabetic Eye Screening Programme can be done wherever he is registered."
    },
    {
     "h": "Portable record",
     "t": "A patient-held summary (diagnosis, medicines, latest results, allergies) or a photo on his phone lets any practice continue care. Offer to send summaries when he registers elsewhere."
    },
    {
     "h": "Driving",
     "t": "DVLA [6]: Group 1 drivers on diet or tablets that don’t cause hypoglycaemia need not notify. Group 2 (lorry, bus) drivers treated with tablets that carry a hypoglycaemia risk (sulfonylureas or glinides) must notify. Ask what he drives before assuming either."
    },
    {
     "h": "Safety-net",
     "t": "Marked thirst, passing a lot of urine, weight loss, vomiting, drowsiness or a foot wound that is red, hot or not healing — be seen that day, at any practice, urgent care centre or A&E."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Ward, I’m Dr Evans. Thanks for coming on today. How would you like me to call you?",
    "dom": "rto",
    "why": "Respectful start that gives him control"
   },
   {
    "who": "pt",
    "text": "Patrick’s fine. Look, I’ll be honest — I’ve not bothered much with the diabetes. I can’t read your leaflets and forms, and we move around so I never see the same doctor. Last place made me feel like a nuisance. I’m only here ’cause the wife’s worried. So don’t just talk at me, alright?"
   },
   {
    "who": "dr",
    "text": "That’s fair, and thank you for saying it. You’re not a nuisance, and I won’t hand you leaflets. We’ll talk it through, plainly, and you tell me what works for you. Deal?",
    "dom": "rto",
    "why": "Acknowledges past discrimination and resets the relationship"
   },
   {
    "who": "pt",
    "text": "Deal."
   },
   {
    "who": "dr",
    "text": "I’d like to hear what’s been going on for you, then agree just a few things that fit your life. Nothing else. Is that okay?",
    "dom": "gs",
    "why": "Short, patient-centred agenda"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When you say the last place made you feel a nuisance, what happened?",
    "dom": "rto",
    "why": "Explores the prior experience rather than moving past it"
   },
   {
    "who": "pt",
    "text": "Kept going on about missed appointments. Gave me forms. Looked at me like I was trouble. So I stopped going."
   },
   {
    "who": "dr",
    "text": "I’m sorry that happened. It shouldn’t. What’s your wife worried about, do you think?",
    "dom": "rto",
    "why": "Uses the wife’s worry as the opening cue"
   },
   {
    "who": "pt",
    "text": "She thinks I’ll end up like people she’s seen — bad feet, bad eyes. She nags me."
   },
   {
    "who": "dr",
    "text": "Sounds like she cares about you. Can I ask how you’re getting on with your diabetes tablets at the moment?",
    "dom": "tasks",
    "why": "Checks adherence without judgement"
   },
   {
    "who": "pt",
    "text": "On and off. When we move I run out and don’t always get more."
   },
   {
    "who": "dr",
    "text": "That’s really useful — it’s a practical problem we can fix. Any thirst, needing the toilet a lot, weight dropping, trouble with your eyes, or sores on your feet?",
    "dom": "tasks",
    "why": "Screens for hyperglycaemia and complications"
   },
   {
    "who": "pt",
    "text": "Nothing that’s stopped me."
   },
   {
    "who": "dr",
    "text": "Do you smoke at all?",
    "dom": "tasks",
    "why": "Asks about a key cardiovascular risk factor"
   },
   {
    "who": "pt",
    "text": "I’d rather not get into that today."
   },
   {
    "who": "dr",
    "text": "That’s fine. The door’s open if you ever want help with it. Do you drive for work — car, van, lorry?",
    "dom": "tasks",
    "why": "Respects autonomy; asks about driving before advising"
   },
   {
    "who": "pt",
    "text": "Depends. Why?"
   },
   {
    "who": "dr",
    "text": "Only because some diabetes tablets and some licence types have rules. If you ever drive a lorry or bus, or you start tablets that can cause low sugars, tell me and I’ll go through it. For an ordinary car licence on most tablets, you don’t need to tell the DVLA.",
    "dom": "tasks",
    "why": "Accurate DVLA advice without assumptions"
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "What do you make of the diabetes yourself — what worries you about it, if anything?",
    "dom": "rto",
    "why": "Elicits his own ideas and concerns"
   },
   {
    "who": "pt",
    "text": "Honestly, it’s all forms and lectures. It’s never felt like it was for me. And I don’t want to be told off again."
   },
   {
    "who": "dr",
    "text": "Then let’s make it for you. What would you like to get out of today?",
    "dom": "rto",
    "why": "Explicit expectations"
   },
   {
    "who": "pt",
    "text": "Something simple I can actually do. And the wife off my back."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s it in plain words. Diabetes means too much sugar in the blood. Over years, that sugar damages small blood vessels — in the eyes, feet and kidneys. That’s what your wife has seen in others. The good news is that steady tablets and a couple of checks stop most of that.",
    "dom": "tasks",
    "why": "Plain-language explanation linked to his wife’s concern"
   },
   {
    "who": "pt",
    "text": "So it’s the eyes and feet that matter."
   },
   {
    "who": "dr",
    "text": "Exactly. And wherever you are in the country, you can register with a GP — you don’t need a fixed address or ID. If you’re somewhere for a short while, you can register as a temporary patient. Nobody should turn you away.",
    "dom": "tasks",
    "why": "States his right to register and be treated anywhere"
   },
   {
    "who": "pt",
    "text": "Nobody’s told me that."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "So, three things, and you pick if that’s too many. One: tablets every day — I’ll set up a longer supply and you can get a repeat from any practice or pharmacy. Two: a blood test, a foot check and an eye photo while you’re here. Three: one food or drink change you choose. How does that sound?",
    "dom": "rto",
    "why": "Prioritised, negotiated plan"
   },
   {
    "who": "pt",
    "text": "The tablets and checks, yeah. Food — let me think on one thing and I’ll tell you at the check."
   },
   {
    "who": "dr",
    "text": "That’s fair — your choice. I’ll also make you a small card with your diagnosis, tablets and latest results, and you can photograph it on your phone. Show it at any practice and they can carry on.",
    "dom": "tasks",
    "why": "Portable record that survives moving"
   },
   {
    "who": "pt",
    "text": "That’d help. I lose papers."
   },
   {
    "who": "dr",
    "text": "Just so I know I’ve explained it well — not testing you — can you tell me what we’ve agreed?",
    "dom": "gs",
    "why": "Teach-back without testing tone"
   },
   {
    "who": "pt",
    "text": "Tablets every day, blood and feet and eyes checked, card on my phone, pick one food thing, and I can see any GP."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Perfect. If you ever get very thirsty, are passing lots of water, being sick, very drowsy, or you get a foot sore that’s red, hot or not healing, get seen that day — any surgery, urgent care or A&E. Can we book the checks this week, before you move on?",
    "dom": "gs",
    "why": "Specific safety-net and follow-up that fits mobility"
   },
   {
    "who": "pt",
    "text": "Yeah, this week’s fine."
   },
   {
    "who": "dr",
    "text": "Good. You’re welcome back here any time, and I mean that. Tell your wife we’ve made a start.",
    "dom": "rto",
    "why": "Open door; leaves him respected"
   },
   {
    "who": "pt",
    "text": "Cheers, doc. That’s the first time it’s made sense."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; let him state his terms (“don’t talk at me”); acknowledged his past experience.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored moving, running out of tablets, his wife’s worry, literacy, driving and what care has felt like.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Followed the cues: being made to feel a nuisance, running out when moving, his wife’s worry about feet and eyes.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: diabetes care is forms and lectures not meant for him. Concern: being told off and complications. Expectation: something simple.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "HbA1c, renal function and ACR, lipids, BP, foot risk assessment (NICE NG19), retinal screening, as feasible before he moves.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Considered non-adherence due to supply gaps versus progressive disease; complication risk; hypo risk if on sulfonylurea.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened symptomatic hyperglycaemia and foot complications; urgent symptoms named.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Explained type 2 diabetes and its complications in plain speech linked to what his wife has seen.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Prioritised three actions with his agreement; individualised HbA1c target (NICE NG28); portable record; right to register anywhere (NHS England).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Smoking offered respectfully; BP and cardiovascular risk included; DVLA advice after asking what he drives.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Checks booked before he moves; teach-back; same-day red flags; open door at any practice.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Health disadvantage & vulnerabilities",
    "Ethnicity, culture & diversity",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Patrick Ward",
    "age": "47 years · male",
    "pmh": [
     "Type 2 diabetes",
     "Multiple missed reviews"
    ],
    "meds": [
     "Diabetes medication (as on repeat record; irregular collection)"
    ],
    "allergy": "None recorded",
    "recent": "⚠ HbA1c high at last test. Little monitoring. Gypsy/Traveller community; frequently moves. Low literacy flagged.",
    "reason": "“The wife’s worried.” Video appointment."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open & reset",
     "d": "He sets his terms. Accept them: no leaflets, plain talk, no lectures."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Past experience of services, adherence and supply gaps, symptoms, smoking (respect a no), driving."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "What care has felt like; his wife’s worry; what he wants from today."
    },
    {
     "t": "6–10",
     "h": "Explain and prioritise",
     "d": "Plain explanation of complications; right to register anywhere; three actions he picks; portable card."
    },
    {
     "t": "10–12",
     "h": "Teach-back and close",
     "d": "He says the plan back. Checks booked before he moves. Same-day red flags. Open door."
    }
   ],
   "wordPics": {
    "fail": "Lectures about missed appointments; hands over leaflets or a written plan; makes assumptions about diet or lifestyle; long standard to-do list; no plan for moving on.",
    "pass": "Acknowledges his past experience; talks plainly; checks understanding; agrees a short plan including medicine and eye and foot checks; tells him he can be seen anywhere.",
    "exc": "All of that, plus: uses his wife’s worry as the bridge; fixes the supply gap practically; gives a portable record; teach-back framed as checking the doctor’s explanation; books checks before he moves; he leaves wanting to come back."
   },
   "avoid": [
    {
     "dont": "“You’ve missed a lot of appointments.”",
     "instead": "“It sounds like the system hasn’t worked for you. Let’s make it simpler.”",
     "why": "Blame repeats the experience that drove him away."
    },
    {
     "dont": "“I’ll print you a diet sheet.”",
     "instead": "“What’s one thing you’d be happy to change?”",
     "why": "He has told you he can’t read leaflets."
    },
    {
     "dont": "“Do you understand?”",
     "instead": "“So I know I’ve explained it well, can you tell me what we agreed?”",
     "why": "Teach-back checks your explanation, not his intelligence."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Mobility and continuity",
     "t": "Frequent moves break recall systems. Plan care that goes with him: portable summary, longer supply where safe, repeat from any pharmacy or practice."
    },
    {
     "h": "Family",
     "t": "His wife’s worry brought him in. With his consent, she can be part of the plan."
    }
   ],
   "legal": [
    {
     "h": "Equality Act 2010",
     "t": "Romany Gypsies and Irish Travellers are protected ethnic groups. Services must make adjustments and not discriminate."
    },
    {
     "h": "Registration rights",
     "t": "NHS England: practices cannot refuse registration for lack of proof of address or ID; temporary registration for stays up to 3 months; immediately necessary treatment for anyone."
    },
    {
     "h": "DVLA",
     "t": "Group 1 on diet or tablets not causing hypoglycaemia: no need to notify. Group 2 treated with tablets carrying hypoglycaemia risk (sulfonylureas or glinides): must notify (DVLA Assessing fitness to drive, November 2025)."
    }
   ],
   "professional": [
    {
     "h": "Non-judgemental care",
     "t": "GMC Good medical practice (2024): treat patients fairly and respectfully, without discrimination, and support them to be involved in decisions."
    },
    {
     "h": "Health literacy",
     "t": "Check understanding with teach-back; offer verbal, visual or phone-based information."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Friends, Families and Travellers (national charity) offers health advocacy and help registering with GPs. Local inclusion health or Traveller liaison services where available."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Marked thirst, polyuria, weight loss, vomiting or drowsiness — same-day assessment",
     "Foot ulcer, redness, heat or swelling — urgent foot review",
     "New visual loss"
    ],
    "psychosocial": [
     "Experience of discrimination and feeling a nuisance",
     "Frequent moves, running out of tablets, no continuity",
     "Literacy and how he prefers to receive information; his wife’s role"
    ],
    "ice": [
     "Idea: diabetes care is forms and lectures not meant for him",
     "Concern: being told off; what his wife fears (feet, eyes)",
     "Expectation: something simple he can actually do"
    ]
   },
   "diagnosis": "Type 2 diabetes with poor control, driven mainly by access, continuity and literacy barriers rather than unwillingness.",
   "diagnosisLay": "“Diabetes is too much sugar in the blood. Over years it damages small vessels in the eyes, feet and kidneys. Steady tablets and a couple of checks prevent most of that.”",
   "management": {
    "reflectIce": "“Your wife is worried about feet and eyes, so those are exactly the checks we’ll do first.”",
    "psychosocial": "No leaflets. A short, spoken plan; a card or phone photo; supply and registration that work when he moves.",
    "sharedPlan": [
     "Daily medication with a practical supply plan",
     "HbA1c, kidney tests, BP, foot check (NICE NG19) and eye screening before he moves",
     "One lifestyle change he chooses; individual HbA1c target (NICE NG28)"
    ],
    "safetyNet": [
     "Same-day care for marked thirst, vomiting, drowsiness or an unhealing foot sore — any practice, urgent care or A&E",
     "He can register anywhere, including as a temporary resident"
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
    "s": "Targets · annual review · feet and eyes",
    "href": "management/type-2-diabetes.html"
   },
   {
    "ic": "🏘️",
    "t": "Community orientation",
    "s": "Inclusion health · access and equity",
    "href": "community-orientation.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA fitness to drive",
    "s": "Diabetes and licence groups",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you can make care work for someone the system has let down. It is failed on manner, on written information, and on a plan that ignores his life.",
   "items": [
    {
     "dom": "rto",
     "fail": "Opening with his HbA1c and missed appointments.",
     "why": "It repeats the judgement he described; trust is lost in the first minute.",
     "fix": "Thank him for coming and accept his terms. Ask what happened last time."
    },
    {
     "dom": "rto",
     "fail": "Stereotyped questions or assumptions about his diet, work or beliefs.",
     "why": "Assumptions are discrimination; examiners mark them down in Relating to Others.",
     "fix": "Ask open questions and let him tell you about his life."
    },
    {
     "dom": "tasks",
     "fail": "A written plan, diet sheet or referral forms.",
     "why": "He has told you he can’t read them. The plan will fail.",
     "fix": "Spoken plan, a simple card or phone photo, teach-back."
    },
    {
     "dom": "tasks",
     "fail": "A full standard annual-review list with no priorities.",
     "why": "Too much means nothing gets done; the Tasks domain rewards a realistic plan.",
     "fix": "Agree two or three actions and book the checks before he moves on."
    },
    {
     "dom": "tasks",
     "fail": "No plan for continuity when he moves.",
     "why": "Supply gaps are the main driver of his poor control.",
     "fix": "Longer supply where safe, a portable record, and his right to register anywhere."
    },
    {
     "dom": "gs",
     "fail": "“Do you understand?” as the only check.",
     "why": "People with low literacy often say yes to avoid embarrassment.",
     "fix": "“So I know I’ve explained it well, can you tell me what we agreed?”"
    }
   ]
  }
 },
 "tiredness-testosterone-myths": {
  "stem": {
   "name": "Ryan Forsythe",
   "age": "32-year-old man",
   "pmh": [
    "No significant history recorded",
    "Regular gym-goer"
   ],
   "meds": [
    "None recorded"
   ],
   "allergy": "None recorded",
   "recent": "No recent consultations or blood tests on the record.",
   "reason": "Video consultation: “I’m knackered and my gym mate says it’s low testosterone. Can I just get a T boost?”"
  },
  "knowledge": {
   "guideline": "[1] BSSM guideline on adult testosterone deficiency (Hackett et al., World J Mens Health 2023) · [2] NICE NG202 Obstructive sleep apnoea hypopnoea syndrome and obesity hypoventilation syndrome in over 16s (2021) · [3] NICE NG222 Depression in adults (2022, updated December 2025) · [4] NICE PH52 Needle and syringe programmes (2014) · [5] BNF testosterone monographs",
   "summary": "Tiredness with low libido in a fit 32-year-old is usually sleep, mood, stress, alcohol, overtraining or a common blood abnormality. Work it up like any tiredness. Test testosterone only when symptoms suggest it, and then properly. Be clear that testosterone is not a tonic and can cause infertility.",
   "points": [
    {
     "h": "Tiredness first",
     "t": "Screen sleep quantity and quality (snoring, witnessed apnoeas, daytime sleepiness: NICE NG202 [2] suggests Epworth or STOP-Bang), mood and anhedonia (NICE NG222 [3]), stress, alcohol and drugs, diet, and training load with inadequate recovery. First-line bloods: FBC, ferritin, TSH, HbA1c, renal and liver function, with others guided by history."
    },
    {
     "h": "When to test testosterone",
     "t": "Test if symptoms suggest deficiency: reduced libido, erectile dysfunction, fewer morning erections, reduced muscle bulk, gynaecomastia, or small testes. Low libido with tiredness alone is non-specific."
    },
    {
     "h": "Testing correctly",
     "t": "BSSM 2023 [1]: diagnosis needs consistent symptoms plus two morning total testosterone samples (7–11am, ideally fasting) on separate occasions, with LH and FSH to separate primary from secondary causes, and SHBG, prolactin and FBC. Acute illness lowers testosterone, so avoid testing when unwell."
    },
    {
     "h": "Not a tonic",
     "t": "In men with normal levels, testosterone does not treat tiredness. BSSM [1] reserves treatment for confirmed deficiency with symptoms, and it is not for men who want to preserve fertility."
    },
    {
     "h": "Harms of testosterone and anabolic steroids",
     "t": "Exogenous androgens suppress LH and FSH, so the testes make less testosterone and fewer sperm: infertility and testicular shrinkage, which may be slow to recover. Also raised haematocrit (BSSM [1] monitoring threshold 54%), acne, gynaecomastia, mood change, adverse lipids and cardiovascular risk. Gym or online products are unregulated and may be contaminated."
    },
    {
     "h": "Ask about current use",
     "t": "Ask directly and without judgement about testosterone, anabolic steroids, SARMs or “boosters”. Stopping after a cycle can itself cause low mood, low libido and tiredness. NICE PH52 [4] includes people who inject image- and performance-enhancing drugs in needle and syringe programmes."
    },
    {
     "h": "Confirmed deficiency",
     "t": "If two morning levels are low with symptoms, look for the cause (including prolactin and pituitary causes when LH is low or normal) and involve endocrinology or a specialist men’s health service before treatment."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Ryan, it’s Dr Okafor. Thanks for joining the video call. What’s been going on?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "I’m just constantly knackered. No energy, my sex drive’s dropped and my gym gains have stalled. My mate reckons it’s low testosterone, and I’ve seen loads online. Can you test it and give me a boost? Or honestly, where’s the harm in just trying some?"
   },
   {
    "who": "dr",
    "text": "Being tired all the time with a low sex drive is worth getting to the bottom of, so I’m glad you’ve come. I’d like to understand the tiredness properly first, then we’ll talk about testosterone, including whether and how to test it. Does that sound fair?",
    "dom": "gs",
    "why": "Takes the symptom seriously and sets an agenda without refusing outright"
   },
   {
    "who": "pt",
    "text": "Fair enough."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "How long has it been going on, and is it sleepiness, like nodding off, or more a lack of energy and motivation?",
    "dom": "tasks",
    "why": "Characterises the fatigue"
   },
   {
    "who": "pt",
    "text": "A few months. More just flat and drained."
   },
   {
    "who": "dr",
    "text": "How are you sleeping? Does anyone say you snore or stop breathing at night, and do you wake refreshed?",
    "dom": "tasks",
    "why": "Screens sleep and OSA"
   },
   {
    "who": "pt",
    "text": "I don’t sleep brilliantly, if I’m honest. I don’t know about snoring."
   },
   {
    "who": "dr",
    "text": "And how’s your mood — are you still enjoying things, or has that gone flat too? Any stress at work or at home?",
    "dom": "tasks",
    "why": "Screens depression and stress"
   },
   {
    "who": "pt",
    "text": "Bit flat, yeah. Nothing massive."
   },
   {
    "who": "dr",
    "text": "How much are you training at the moment, and how much rest are you getting between sessions? And how’s your eating and drinking?",
    "dom": "tasks",
    "why": "Explores overtraining, diet and alcohol"
   },
   {
    "who": "pt",
    "text": "I train most days. I push it hard."
   },
   {
    "who": "dr",
    "text": "When you say your sex drive has dropped, have you noticed any change in erections, including morning erections, or any change in your chest or testicles?",
    "dom": "tasks",
    "why": "Looks for specific features of hypogonadism"
   },
   {
    "who": "pt",
    "text": "Mainly just not in the mood."
   },
   {
    "who": "dr",
    "text": "I’m going to ask this without any judgement, because a lot of men who train seriously do it. Are you taking, or have you taken, any testosterone, steroids, SARMs or boosters from the gym or online?",
    "dom": "tasks",
    "why": "Non-judgemental enquiry about androgen use"
   },
   {
    "who": "pt",
    "text": "I’ve looked into it. That’s partly why I’m asking you. I’d rather do it properly."
   },
   {
    "who": "dr",
    "text": "I really appreciate you telling me, and asking first is the sensible thing to do.",
    "dom": "rto",
    "why": "Rewards honesty, keeps him engaged"
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
    "text": "I think it’s low T. What bugs me is I’m doing everything right in the gym and going backwards."
   },
   {
    "who": "dr",
    "text": "So you’re putting the work in and not getting the results, and feeling rubbish with it. And you were hoping for a test and a prescription today?",
    "dom": "rto",
    "why": "Reflects the frustration and body-image element"
   },
   {
    "who": "pt",
    "text": "Pretty much."
   },
   {
    "phase": "Explanation",
    "clock": "6–9 min",
    "who": "dr",
    "text": "Here’s what I think. In a fit man your age, low testosterone is an uncommon cause of this. Poor sleep, low mood, training hard without enough recovery, and things like low iron or thyroid problems are much more common, and you’ve mentioned a few already.",
    "dom": "tasks",
    "why": "Shares a reasoned differential"
   },
   {
    "who": "pt",
    "text": "But what if it is low T?"
   },
   {
    "who": "dr",
    "text": "Then we test it properly: two blood samples in the morning, between 7 and 11, on different days, with some related hormones. A single random test can be misleading because levels vary through the day and drop when you’re run down.",
    "dom": "tasks",
    "why": "Explains correct testing"
   },
   {
    "who": "pt",
    "text": "And the harm in just trying some?"
   },
   {
    "who": "dr",
    "text": "This is the important bit. If your level is normal, extra testosterone won’t fix the tiredness. It tells your body to stop making its own, and that switches off sperm production. That can leave men infertile and with smaller testicles, sometimes for a long time. It also thickens the blood, which raises clot risk, and can cause acne, breast tissue growth and mood swings. Gym and online products aren’t regulated, so you can’t be sure what’s in them.",
    "dom": "tasks",
    "why": "Spells out harms, especially infertility"
   },
   {
    "who": "pt",
    "text": "I didn’t know about the fertility thing."
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "So here’s my suggestion. Bloods this week: blood count, iron, thyroid, sugar, kidney and liver tests. A sleep questionnaire, and a mood questionnaire too, because feeling flat matters. Could you also try a lighter training block with proper rest days for a few weeks?",
    "dom": "tasks",
    "why": "Proportionate work-up and a practical change"
   },
   {
    "who": "pt",
    "text": "I can try that."
   },
   {
    "who": "dr",
    "text": "If your symptoms point more towards low testosterone as we go, I’ll arrange the two morning tests. If they are genuinely low, I’d involve a specialist rather than simply prescribing. And if you do ever decide to use gym products, please tell us first so we can check your blood and keep you safe.",
    "dom": "tasks",
    "why": "Keeps testing conditional; offers harm reduction without endorsing use"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If your mood drops a lot, or you have any thoughts of harming yourself, please contact us straight away. Otherwise, let’s review in two weeks with the results. What will you take away from today?",
    "dom": "gs",
    "why": "Mood safety-net and follow-up"
   },
   {
    "who": "pt",
    "text": "Bloods, sleep and mood checks, ease off training, and don’t just take the stuff because it could wreck my fertility."
   },
   {
    "who": "dr",
    "text": "That’s it exactly. See you in two weeks.",
    "dom": "gs",
    "why": "Teach-back confirmed"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Let him give the full story and the request; acknowledged the tiredness before discussing testosterone.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Training load and recovery, work and stress, sleep, alcohol, diet, gym culture and online influence.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Followed “flat”, poor sleep and “I’ve looked into it”; asked about steroids without judgement.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (low testosterone), concern (going backwards despite effort), expectation (a test and a prescription).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "FBC, ferritin, TSH, HbA1c, renal and liver function; Epworth/STOP-Bang; mood screen. Two morning testosterone samples (7–11am) with LH, FSH, SHBG and prolactin only if indicated.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Sleep problems, depression, overtraining, alcohol, anaemia, thyroid, diabetes, androgen use or withdrawal, true hypogonadism.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about specific hypogonadism features, low mood and self-harm; recognised anabolic steroid use as a cause and a risk.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Explained that low testosterone is an unlikely cause and that the work-up comes first.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Declined to prescribe without confirmed deficiency; explained infertility and other harms; agreed a proportionate plan.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Training load, sleep, mood and alcohol addressed; specialist route for confirmed deficiency; harm reduction if he uses products.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review in two weeks with results; mood safety-net; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Gender, reproductive & sexual health",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Ryan Forsythe",
    "age": "32 years · male",
    "pmh": [
     "Nil significant recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "None recorded",
    "recent": "No recent consultations or bloods.",
    "reason": "“I’m knackered. Can I get a testosterone boost?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and set the agenda",
     "d": "He asks for testosterone in the opening. Acknowledge the tiredness and agree to look at it properly first."
    },
    {
     "t": "1–5",
     "h": "Tiredness history",
     "d": "Duration, sleep and snoring, mood, stress, training load and recovery, alcohol and diet, specific hypogonadism features, and a non-judgemental steroid question."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Low T belief, frustration at stalled gains, expectation of a prescription."
    },
    {
     "t": "6–9",
     "h": "Explain",
     "d": "Low T is uncommon at his age. How to test properly (two morning samples). Why testosterone is not a tonic, with infertility first among the harms."
    },
    {
     "t": "9–12",
     "h": "Plan and close",
     "d": "Bloods, sleep and mood questionnaires, lighter training block, conditional testosterone testing, harm reduction, review in 2 weeks, mood safety-net."
    }
   ],
   "wordPics": {
    "fail": "Orders a random testosterone level and promises treatment if it’s low; or refuses flatly and ends the call; never asks about steroids; no mention of infertility.",
    "pass": "Takes a tiredness history, arranges appropriate bloods, explains correct testosterone testing, and explains that testosterone is not a treatment for tiredness.",
    "exc": "All of the above, plus: engages with his gym goals rather than dismissing them; asks about steroid use in a way that earns an honest answer; explains the infertility risk memorably; screens mood and sleep; offers a harm-reduction route; uses teach-back."
   },
   "avoid": [
    {
     "dont": "“Testosterone is dangerous. I won’t prescribe it.”",
     "instead": "“If your level is normal it won’t help the tiredness, and it can switch off sperm production. Let’s find out what is causing this.”",
     "why": "A flat refusal pushes him towards unregulated products."
    },
    {
     "dont": "“Let’s just check your testosterone and see.”",
     "instead": "“Let’s look at the common causes first. If testosterone needs testing, we do two morning samples.”",
     "why": "A random level misleads and fixes the idea that testosterone is the answer."
    },
    {
     "dont": "“Are you on steroids?”",
     "instead": "“A lot of men who train take something. Are you taking, or have you taken, any testosterone or steroids?”",
     "why": "Normalising the question makes an honest answer more likely."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Gym culture and online influence",
     "t": "Body-image pressure and social media drive requests for testosterone. Engage with his goals and offer reliable information."
    },
    {
     "h": "Mood",
     "t": "Men often present low mood as tiredness or loss of libido. Screen mood and ask about self-harm."
    }
   ],
   "legal": [
    {
     "h": "Anabolic steroids and the law",
     "t": "Anabolic steroids are Class C controlled drugs (Misuse of Drugs Act 1971). Possession for personal use is not an offence, but supply is. Information he shares is confidential."
    },
    {
     "h": "Prescribing",
     "t": "Prescribing testosterone without a confirmed indication falls short of GMC Good practice in prescribing and managing medicines and devices (2021)."
    }
   ],
   "professional": [
    {
     "h": "Harm reduction",
     "t": "If he goes on to use products, offer non-judgemental support: bloods (FBC for haematocrit, lipids, liver function), blood pressure, and needle and syringe services (NICE PH52)."
    },
    {
     "h": "Specialist input",
     "t": "Confirmed testosterone deficiency in a young man needs a search for the cause and specialist advice (BSSM 2023)."
    }
   ],
   "community": [
    {
     "h": "Local services",
     "t": "Needle and syringe programmes and drug services increasingly support people using image- and performance-enhancing drugs. Talking therapies if low mood is confirmed."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Weight loss, night sweats or other systemic symptoms",
     "Low mood with hopelessness or self-harm thoughts",
     "Headache or visual field change with suspected low testosterone (pituitary cause)",
     "Current androgen use: polycythaemia, blood pressure, mood change"
    ],
    "psychosocial": [
     "Training load and recovery, work stress",
     "Gym culture and online sources",
     "Sleep, alcohol, relationships"
    ],
    "ice": [
     "Idea: “It’s low testosterone.”",
     "Concern: going backwards despite training hard",
     "Expectation: a test and a testosterone prescription"
    ]
   },
   "diagnosis": "“Your tiredness is real, but in a man your age low testosterone is an uncommon cause. Sleep, mood, overtraining and common blood problems are more likely, so we check those first.”",
   "diagnosisLay": "“Testosterone works like a thermostat. If you add it from outside, your body turns its own supply down, including the part that makes sperm.”",
   "management": {
    "reflectIce": "“You’re putting the work in and feeling worse, so it makes sense you’d look for a quick fix. Let’s find out what’s really causing it.”",
    "psychosocial": "Agree a lighter training block with rest days, address sleep and alcohol, and check mood.",
    "sharedPlan": [
     "Bloods: FBC, ferritin, TSH, HbA1c, renal and liver function",
     "Epworth or STOP-Bang and a mood questionnaire",
     "Two morning testosterone samples (7–11am) with LH, FSH, SHBG and prolactin only if symptoms suggest deficiency",
     "Specialist route if deficiency is confirmed; no testosterone for tiredness"
    ],
    "safetyNet": [
     "Contact the practice promptly if mood drops or thoughts of self-harm",
     "Tell us before using any gym products so we can monitor safely",
     "Review in 2 weeks with results"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Testosterone deficiency",
    "s": "Visual algorithm · BSSM 2023 testing",
    "href": "algorithms/testosterone-deficiency.html"
   },
   {
    "ic": "📋",
    "t": "Fatigue",
    "s": "Case walkthrough · tired all the time",
    "href": "../cases/fatigue.html"
   },
   {
    "ic": "🗺️",
    "t": "Fatigue pathway",
    "s": "Visual algorithm · first-line tests",
    "href": "algorithms/fatigue.html"
   },
   {
    "ic": "💠",
    "t": "Obstructive sleep apnoea",
    "s": "Protocol · NICE NG202",
    "href": "management/osa.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you can decline a request without losing the patient. Examiners want a proper tiredness work-up, correct testing if needed, honest harm information, and a steroid question that gets an honest answer.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Ordering a single random testosterone level.",
     "why": "Levels vary through the day and fall with illness; BSSM 2023 needs two morning samples with symptoms.",
     "fix": "Test only if symptoms suggest it, then two samples between 7 and 11am with LH, FSH, SHBG and prolactin."
    },
    {
     "dom": "tasks",
     "fail": "Jumping straight to testosterone without a tiredness history.",
     "why": "Misses sleep problems, depression, overtraining, anaemia, thyroid disease and diabetes.",
     "fix": "Screen sleep, mood, alcohol, training load and first-line bloods."
    },
    {
     "dom": "tasks",
     "fail": "Not mentioning infertility.",
     "why": "It is the harm young men least expect and the one most likely to change their decision.",
     "fix": "“It switches off sperm production and can leave men infertile.”"
    },
    {
     "dom": "tasks",
     "fail": "Never asking about current steroid or SARM use.",
     "why": "Androgen use or withdrawal can cause these exact symptoms and needs harm reduction.",
     "fix": "A normalising, direct question."
    },
    {
     "dom": "rto",
     "fail": "Lecturing or ridiculing online advice.",
     "why": "Dismissiveness loses him to unregulated sources.",
     "fix": "Acknowledge his goals and frustration, then explain."
    },
    {
     "dom": "gs",
     "fail": "No mood screen or safety-net.",
     "why": "“Flat” and poor sleep may be depression.",
     "fix": "Ask about mood and self-harm and give a clear route back."
    },
    {
     "dom": "gs",
     "fail": "Ending without a plan beyond “no”.",
     "why": "He leaves with the problem unsolved and the products still available.",
     "fix": "Bloods, questionnaires, a training change, conditional testing and review in 2 weeks."
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
