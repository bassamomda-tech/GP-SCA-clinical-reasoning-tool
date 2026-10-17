/* ============================================================
   Worked example consultations — batch B (7 additional stations)
   Appends to window.SCA_WORKED (load after sca-worked-examples.js).
   Same shape as the base file: pass/fail versions, annotated turns,
   pass.diff = the three things that separate pass from fail.
   Educational illustration only.
   ============================================================ */
window.SCA_WORKED = window.SCA_WORKED || [];
window.SCA_WORKED.push(
  /* ---------------- First seizure — and he drives an HGV ---------------- */
  {
    title:'“I’m back on the road Monday”',
    type:'Video · 63M',
    brief:'Keith Barlow, 63, HGV driver for a haulage firm. Video consultation booked by his wife. On Saturday evening she found him on the kitchen floor, stiff then jerking all four limbs for about two minutes; bitten tongue, wet himself, confused for half an hour afterwards. No hospital attendance. No previous seizures. Hypertension (amlodipine). Last BP 134/82 at the practice 3 months ago.',
    link:'../tools/sca-practice.html?case=first-seizure-dvla',
    pass:{
      grades:{dg:'CP', cm:'CP', rto:'P'},
      turns:[
        {r:'pt', s:'The wife made me book this. I had a funny turn on Saturday, but I’m right as rain now. I’m back on the road Monday.'},
        {r:'dr', s:'I’m glad you’re feeling better. Before we get to Monday — can you take me through Saturday? What you remember before it happened, and then what Sue saw.', an:{t:'good',dom:'dg',text:'<b>History before the driving question.</b> Asks for both his account and the witness account — the single most useful data in a possible first seizure.'}},
        {r:'pt', s:'I was making a brew, next thing I’m on the floor and Sue’s crying. She says I went stiff, then shaking all over, a couple of minutes. Bit my tongue — look, here. And I’d wet myself, which I’m not thrilled about.'},
        {r:'dr', s:'Thanks for showing me — a bite on the side of the tongue like that is a useful clue. Was there any warning first: chest pain, palpitations, feeling faint or sweaty? And in the days before, had you been drinking more than usual, short of sleep, or knocked your head?', an:{t:'good',dom:'dg',text:'<b>Uses what video can show, then discriminates.</b> Lateral tongue bite seen on camera; screens for cardiac syncope and provoking factors (alcohol, sleep deprivation, head injury) that change the work-up.'}},
        {r:'pt', s:'Nothing like that. Couple of pints on the Friday. Long week of nights, mind. So what is it — my heart?'},
        {r:'dr', s:'From what you and Sue describe, it sounds much more like a seizure than a faint. I can’t tell you why yet — that’s what the first-seizure clinic is for, and I’m referring you today so you’re seen within two weeks. I’d also like an ECG and some bloods here this week. What were you worried it might be?', an:{t:'good',dom:'cm',text:'<b>Honest working diagnosis + the right pathway.</b> Urgent specialist first-seizure referral (seen within 2 weeks, per NICE), ECG and bloods in primary care — then hands the floor back to his ideas and concerns.'}},
        {r:'pt', s:'Honestly? A brain tumour. My mate had one. And the job. I’m 63, I’ve driven trucks thirty years.'},
        {r:'dr', s:'Both big worries, and I won’t brush either aside. A scan is part of the work-up — most first seizures at your age aren’t caused by a tumour, but we’ll find out properly. On the job I need to be straight with you: after a seizure you mustn’t drive anything, car or lorry, from today, and the law says you must tell the DVLA. The rules for lorry licences are much stricter than for cars — it’s often years rather than months, depending on what the tests show.', an:{t:'good',dom:'cm',text:'<b>Clear DVLA advice, no fudge.</b> Stop all driving now; the legal duty to notify is his. Flags that Group 2 rules are far stricter without over-promising a timescale before the specialist assessment.'}},
        {r:'pt', s:'Years? That’s my living gone. I can’t afford that. What if I just don’t tell them?'},
        {r:'dr', s:'I can hear how frightening that is — it hits your income, not just your licence, and I won’t pretend otherwise. But if it happened again at the wheel of a forty-tonne lorry, someone could be killed. If you did keep driving, I would have to let the DVLA’s doctors know myself — I’d always tell you first, and I’d much rather it came from you. Can we work out what this means at work instead?', an:{t:'good',dom:'ro',text:'<b>Acknowledges the loss, then explains the duty transparently.</b> Follows GMC confidentiality guidance (persuade first, disclose if he continues, tell him before doing so) without it sounding like a threat — and moves straight to problem-solving.'}},
        {r:'pt', s:'…Alright. I wouldn’t forgive myself, would I. What do I tell the boss?'},
        {r:'dr', s:'That you’ve been told not to drive while you’re investigated. Bigger firms often have yard, planning or training work. I’ll do a fit note saying you may be fit for work with amended duties — no driving of any kind. Until the clinic: showers not baths, no ladders or working at height. If Sue ever sees a fit lasting more than five minutes, or one after another, she rings 999. I’ll call you with the bloods and ECG, and see you again once you’ve been to clinic.', an:{t:'good',dom:'cm',text:'<b>Practical, protective close.</b> "May be fit" fit note with a specific adjustment, seizure safety advice, a precise safety-net for Sue, and planned follow-up.'}}
      ],
      verdict:'A clear pass. The candidate built the diagnosis from the witness account and what could be seen on camera, screened for syncope and provoking factors, and arranged the correct urgent first-seizure pathway. The DVLA conversation was honest and unambiguous, the GMC disclosure duty was explained transparently rather than wielded, and the loss of livelihood was acknowledged and converted into a practical work plan with a "may be fit" note. Relating was very good; the patient moved from "back on the road Monday" to agreeing to stop.',
      diff:[
        'Built the diagnosis from the witness account and what was visible on camera, and screened for syncope and provoking factors.',
        'Gave unambiguous DVLA advice — stop all driving now, he must notify — and explained the GMC disclosure duty transparently.',
        'Acknowledged the threat to his livelihood and turned it into a work plan with a "may be fit" note.'
      ]
    },
    fail:{
      grades:{dg:'F', cm:'CF', rto:'F'},
      turns:[
        {r:'pt', s:'The wife made me book this. I had a funny turn on Saturday, but I’m right as rain now. I’m back on the road Monday.'},
        {r:'dr', s:'Did you lose consciousness? Bite your tongue? Wet yourself?', an:{t:'bad',dom:'dg',text:'<b>Checklist with no narrative.</b> Good questions in isolation, but no witness account, no cardiac screen and no provoking factors — so the diagnosis is assumed rather than made.'}},
        {r:'pt', s:'All of that, Sue says. But I feel fine now.'},
        {r:'dr', s:'Sounds like a fit then. I’ll refer you to neurology. In the meantime I’d try not to drive too much until you’ve been seen.', an:{t:'bad',dom:'cm',text:'<b>Unsafe, vague driving advice.</b> "Not too much" is not an instruction. A routine neurology referral also misses the urgent first-seizure pathway.'}},
        {r:'pt', s:'Do I need to tell anyone? The DVLA, or work?'},
        {r:'dr', s:'That’s really between you and the DVLA. I’d wait until you’ve seen neurology and know what it is.', an:{t:'bad',dom:'cm',text:'<b>Wrong in law and in safety.</b> The duty to stop driving and notify is immediate, and a Group 2 (HGV) licence makes it urgent — waiting for clinic leaves a lorry driver on the road after a seizure.'}},
        {r:'pt', s:'Good, because if I lose the HGV licence I lose everything.'},
        {r:'dr', s:'Let’s not worry about that yet. Anything else today?', an:{t:'bad',dom:'ro',text:'<b>The real fear is shut down.</b> His livelihood — the reason he may not comply — is never explored. No safety advice, no work plan, no safety-net.'}}
      ],
      verdict:'A clear fail. The candidate recognised a probable seizure but then gave advice that was unsafe for the patient and for the public: no clear instruction to stop driving, an incorrect "wait and see" on DVLA notification for an HGV driver, and a routine rather than urgent referral. Dismissing his financial fear removes any chance of agreement — and leaves the doctor with no plan if he keeps driving.'
    }
  },

  /* ---------------- Dementia — “Mum isn’t safe at home” ---------------- */
  {
    title:'“Mum wants to stay at home, but she isn’t safe”',
    type:'Telephone · daughter of 79F',
    brief:'Joanne Price, 51, phones about her mother, Edith Marsh, 79, who has Alzheimer’s disease (diagnosed 2 years ago, on donepezil) and lives alone. Edith has given recorded consent for the practice to discuss her care with Joanne. No lasting power of attorney. In the past month she has left the gas on twice, and last week police found her at a bus stop at 2am. Joanne works full time and lives 20 minutes away.',
    link:'../tools/sca-simulator.html',
    pass:{
      grades:{dg:'CP', cm:'CP', rto:'CP'},
      turns:[
        {r:'pt', s:'I don’t know what else to do. Mum keeps saying she wants to stay in her own house, but she isn’t safe. Someone needs to make her go into a home.'},
        {r:'dr', s:'That sounds exhausting and really frightening. Tell me what’s been happening — what worries you most?', an:{t:'good',dom:'ro',text:'<b>Starts with the caller’s story.</b> No rush to the legal answer — lets the daughter lay out the risks in her own words.'}},
        {r:'pt', s:'The gas, twice. The police found her at the bus stop at two in the morning in her nightie. Food going off in the fridge. I’m round every evening and I’m not coping. I cried at work on Tuesday.'},
        {r:'dr', s:'That’s an awful lot to hold. Before the practical side — how are you doing? Is anyone sharing this with you?', an:{t:'good',dom:'ro',text:'<b>Picks up the carer-strain cue.</b> "I’m not coping… I cried at work" is heard and explored, not filed.'}},
        {r:'pt', s:'My brother’s in Scotland. I’m running on empty. I just want someone to tell me what the right thing is.'},
        {r:'dr', s:'Let me be honest about how this works, because it isn’t a decision you or I can simply make for her. The law starts by assuming your mum can make her own decisions, and capacity is about this specific decision. So the first step is to see whether she can understand the risks of living at home, hold on to that, weigh it up and tell us her choice. If she can, she’s allowed to make a choice we think is unwise. If she can’t, the decision is made in her best interests — and you’d be properly involved.', an:{t:'good',dom:'cm',text:'<b>Mental Capacity Act in plain English.</b> Presumption of capacity, decision-specific test, the right to an unwise decision, best interests — explained without jargon.'}},
        {r:'pt', s:'She’ll tell you she’s fine. She always does with doctors.'},
        {r:'dr', s:'That’s a really useful warning — people with dementia can come across very well in a short conversation. I’d want to see her at home, ideally with you there, and check whether she can actually recall the gas and that night, and weigh up what could happen. What do you think she’s most afraid of if she leaves?', an:{t:'good',dom:'dg',text:'<b>Uses the informant well.</b> Takes the "presents well" warning seriously, plans a proper in-person capacity assessment, and seeks the patient’s own values via her daughter.'}},
        {r:'pt', s:'Losing her garden. Dad built it. She says she’ll die if she goes into a home.'},
        {r:'dr', s:'That matters — whatever happens, her wishes and what she values sit at the centre, even in a best-interests decision. And it may not be home versus a care home. A social care needs assessment can look at carers coming in, a gas cut-off valve, a door sensor or a GPS alarm, a key safe. I’ll also ask for a carer’s assessment for you, in your own right.', an:{t:'good',dom:'cm',text:'<b>Least restrictive option + support for the carer.</b> Care Act needs assessment, telecare and a carer’s assessment — widening the choice beyond "home or home".'}},
        {r:'pt', s:'I didn’t know I could have one. But what about tonight? What if she goes out again before any of that happens?'},
        {r:'dr', s:'You’re right, that can’t wait weeks. Given the 2am episode I’ll raise it with adult social care today as a safeguarding concern so it’s prioritised, and I’ll visit her on Thursday. If she’s ever missing, call 999 straight away. And Joanne — the Alzheimer’s Society and Carers UK helplines are good, but if you feel you’re going under, ring me. I mean that.', an:{t:'good',dom:'cm',text:'<b>Proportionate urgency and a real safety-net.</b> Escalates the immediate risk through the right route, fixes a date to assess, and leaves an open door for the carer.'}}
      ],
      verdict:'A clear pass. The candidate let the daughter set out the risks, noticed and explored her distress, and explained the Mental Capacity Act accurately and humanely — presumption of capacity, decision-specific assessment, unwise decisions and best interests. The plan was active and least restrictive: an in-person capacity assessment, a social care needs assessment with practical safety measures, a carer’s assessment, and a safeguarding referral for the immediate night-time risk.',
      diff:[
        'Heard the daughter’s risks and her own carer strain before reaching for the law.',
        'Explained capacity accurately — presumed, decision-specific, unwise choices allowed, best interests if lacking — and planned a proper in-person assessment.',
        'Offered the least restrictive options (needs assessment, telecare, carer’s assessment) and escalated the immediate night-time risk.'
      ]
    },
    fail:{
      grades:{dg:'F', cm:'F', rto:'CF'},
      turns:[
        {r:'pt', s:'I don’t know what else to do. Mum keeps saying she wants to stay in her own house, but she isn’t safe. Someone needs to make her go into a home.'},
        {r:'dr', s:'I understand. Unfortunately, under the Mental Capacity Act we can’t force her into a care home if she has capacity. It’s her choice.', an:{t:'bad',dom:'ro',text:'<b>The law is right, the timing is wrong.</b> Leads with what can’t be done — and quietly assumes capacity without anyone having assessed it.'}},
        {r:'pt', s:'But she’s left the gas on twice. The police found her at a bus stop at two in the morning.'},
        {r:'dr', s:'Does she have a power of attorney?', an:{t:'bad',dom:'dg',text:'<b>Skips the risk history.</b> Two serious safety events are passed over for a paperwork question.'}},
        {r:'pt', s:'No.'},
        {r:'dr', s:'Then it would probably need to go to the Court of Protection, which can take months. You could start looking at care homes in the area in the meantime.', an:{t:'bad',dom:'cm',text:'<b>Jumps to the most restrictive option.</b> Most best-interests decisions about care don’t need the Court; no capacity assessment, no social care assessment, no safeguarding for the 2am episode.'}},
        {r:'pt', s:'I’m doing this every evening on top of a full-time job. I don’t know how much longer I can…'},
        {r:'dr', s:'It’s a very common situation, sadly. I’ll put a note on her file. Was there anything else?', an:{t:'bad',dom:'ro',text:'<b>Carer strain ignored.</b> The daughter’s distress — a risk in itself — is met with a platitude. No plan, no visit, no safety-net.'}}
      ],
      verdict:'A fail, and a common one. The candidate knew the Mental Capacity Act, but used it as a reason to do nothing: capacity was assumed rather than assessed, the immediate risks were never addressed, and the only option offered was the most restrictive one. The daughter’s carer strain — clearly signposted twice — was ignored. Knowing the law is not the same as managing the situation.'
    }
  },

  /* ---------------- Sick note for stress — gambling debts ---------------- */
  {
    title:'“I just need a sick note for stress”',
    type:'Video · 24M',
    brief:'Jordan Ellis, 24, sales assistant in a phone shop. Video consultation requesting "a sick note for stress". Has self-certified for the past 5 days. Records: seen once 3 months ago for poor sleep (sleep hygiene advice). No regular medication. Lives with his mother.',
    link:'../tools/sca-simulator.html',
    pass:{
      grades:{dg:'CP', cm:'P', rto:'CP'},
      turns:[
        {r:'pt', s:'I just need a sick note for stress. A couple of weeks. I can’t face going in.'},
        {r:'dr', s:'OK, we can talk about that. Tell me about the stress — what’s been going on?', an:{t:'good',dom:'ro',text:'<b>Neither refuses nor rubber-stamps.</b> Keeps the request on the table and asks for the story behind it.'}},
        {r:'pt', s:'Just… work, life. Everything. Not sleeping. My manager’s on my back about targets.'},
        {r:'dr', s:'That sounds like a lot. You said "life" as well as work — what else is weighing on you?', an:{t:'good',dom:'dg',text:'<b>Follows the small word.</b> "Life" is the door to the hidden agenda — reflected back gently rather than skipped.'}},
        {r:'pt', s:'(looks away from the camera) Money stuff. It’s fine. I’ll sort it.'},
        {r:'dr', s:'I noticed you looked away when you said that. A lot of people I talk to have money worries that have got out of hand — sometimes debts, sometimes betting, sometimes both. Is any of that part of it for you?', an:{t:'good',dom:'dg',text:'<b>Names the non-verbal cue and normalises.</b> Video still shows body language. Offering gambling as an ordinary possibility makes it safe to disclose.'}},
        {r:'pt', s:'…Betting apps. I owe about eleven grand. Credit cards, a loan. My mum doesn’t know. I can’t sleep for thinking about it.'},
        {r:'dr', s:'Thank you for telling me — I know that wasn’t easy, and I’m not judging you. When things feel this heavy, some people start to think about ending their life. Has that crossed your mind?', an:{t:'good',dom:'cm',text:'<b>Asks directly about suicide.</b> Gambling-related debt carries a substantially raised suicide risk; asking plainly and kindly is the safe step.'}},
        {r:'pt', s:'Sometimes I think everyone would be better off. I haven’t planned anything — I wouldn’t do that to my mum. My mate Dan knows a bit.'},
        {r:'dr', s:'I’m really glad you’ve got your mum and Dan. About the note: I can write one, and you do need some breathing room. But being at home alone with the apps is often when it’s worst. Would you rather have time off, or a note saying you may be fit for work with changes — say, shorter hours or no late shifts — if your manager can do that?', an:{t:'good',dom:'cm',text:'<b>The fit note becomes a shared decision.</b> Uses the "may be fit" option as a genuine choice rather than a default, based on what will actually help.'}},
        {r:'pt', s:'Honestly, home is worse. If they took me off the late shift, I could manage.'},
        {r:'dr', s:'Then let’s do "may be fit" for four weeks with amended hours. Today: ring the National Gambling Helpline, and I’ll refer you to the NHS gambling service. Block the apps with GamStop and switch on your bank’s gambling block. For the debt, StepChange or Citizens Advice are free and can set up a breathing space so interest and calls pause. I’ll see you in a week. If the thoughts get stronger, call NHS 111 and choose the mental health option, or 999 if you’re in danger.', an:{t:'good',dom:'cm',text:'<b>Treats the cause, not just the symptom.</b> Gambling support, blocking tools, free debt advice, early review and a specific crisis safety-net.'}}
      ],
      verdict:'A clear pass. The candidate treated the fit-note request as the start of a conversation, followed a verbal and a non-verbal cue to the hidden agenda — gambling debts — and asked directly about suicide. The fit note was negotiated as a "may be fit" note because time at home was the risk, and the plan addressed the real problem: gambling treatment, practical blocking tools, debt advice and a crisis safety-net, with early follow-up.',
      diff:[
        'Followed "life" and a look away from the camera to the hidden agenda — gambling debt.',
        'Asked directly and kindly about suicide, and found protective factors.',
        'Negotiated a "may be fit" note and treated the cause: gambling support, blocking tools, debt advice and a crisis safety-net.'
      ]
    },
    fail:{
      grades:{dg:'F', cm:'F', rto:'F'},
      turns:[
        {r:'pt', s:'I just need a sick note for stress. A couple of weeks. I can’t face going in.'},
        {r:'dr', s:'Sure. How long have you been off so far?', an:{t:'bad',dom:'dg',text:'<b>Transactional opening.</b> Goes straight to the paperwork without asking what the stress is.'}},
        {r:'pt', s:'Five days. I self-certified.'},
        {r:'dr', s:'OK. Any low mood? Out of ten? Any thoughts of harming yourself?', an:{t:'bad',dom:'dg',text:'<b>Risk questions as a rapid-fire checklist.</b> The right questions, asked in a way that invites "no".'}},
        {r:'pt', s:'Not really. It’s mainly money stuff. I’ll sort it.'},
        {r:'dr', s:'That’s fine. I’ll do you a fit note for two weeks — not fit for work, work-related stress. Try some sleep hygiene and exercise, and there’s a good stress app on the NHS website.', an:{t:'bad',dom:'dg',text:'<b>The medicine is fine but…</b> the note is legitimate and the advice reasonable — yet "not really" and "money stuff" both go unexplored. The gambling debt and suicidal thinking never surface.'}},
        {r:'pt', s:'Right. Thanks.'},
        {r:'dr', s:'Book in again if you’re not better in two weeks.', an:{t:'bad',dom:'cm',text:'<b>No safety-net for a high-risk situation.</b> Two weeks at home with betting apps, unrecognised suicidal ideation, and no crisis advice or early review.'}}
      ],
      verdict:'A fail — and the medicine is not wrong. A fit note for stress is a reasonable outcome, and the candidate even asked about self-harm. But the consultation was a transaction: the cues ("not really", "money stuff") were left lying, so the real problem — gambling debt with passive suicidal thoughts — was never found. The note may even increase risk by leaving him at home with the apps.'
    }
  },

  /* ---------------- Prolonged neonatal jaundice ---------------- */
  {
    title:'“He’s still yellow”',
    type:'Telephone · mother of 6-week-old',
    brief:'Amira Hassan phones about her son Zain, 6 weeks old, born at 39 weeks, exclusively breastfed. Health visitor noted jaundice at day 10 and advised to "keep an eye on it". Newborn blood spot screening recorded as normal. His 6–8 week baby check is booked for next week.',
    link:'../tools/sca-simulator.html',
    pass:{
      grades:{dg:'CP', cm:'CP', rto:'CP'},
      turns:[
        {r:'pt', s:'He’s still yellow. The health visitor said it was breastfeeding jaundice and it would go, but he’s six weeks now. My mum says I’m overreacting.'},
        {r:'dr', s:'You’re not overreacting — six weeks is longer than we’d expect, and I’m glad you rang. Can I ask some questions so I can work out how soon he needs to be seen?', an:{t:'good',dom:'ro',text:'<b>Validates and frames the call.</b> Takes the mother’s concern seriously and signals honestly that timing matters.'}},
        {r:'pt', s:'Of course.'},
        {r:'dr', s:'What colour are his poos at the moment — yellow or green, or paler, like cream, grey or chalky? And his wee — pale, or dark enough to stain the nappy?', an:{t:'good',dom:'dg',text:'<b>The key questions in prolonged jaundice.</b> Pale stools and dark urine suggest conjugated jaundice — the route to biliary atresia, where early diagnosis changes outcome.'}},
        {r:'pt', s:'Now you say it… they’ve gone quite pale. A sort of putty colour this last week. And the nappies are darker. I thought it was because he’s feeding less.'},
        {r:'dr', s:'That’s really helpful, thank you. Is he feeding less? And how is he in himself — alert, waking for feeds? Any bruising, or bleeding from his nose or belly button, or being sick?', an:{t:'good',dom:'dg',text:'<b>Assesses wellbeing and bleeding.</b> Feeding and alertness gauge how unwell he is; bleeding or bruising can signal vitamin K deficiency from poor bile flow.'}},
        {r:'pt', s:'He’s a bit sleepier, fewer feeds. No bleeding. Is it something serious?'},
        {r:'dr', s:'I’ll be honest with you. Pale poos and darker wee in a baby who’s still yellow at six weeks can mean the liver isn’t draining bile properly. Many babies with long-lasting jaundice turn out to have a harmless cause, but this pattern needs blood tests today to check the bile ducts — some of these problems are much easier to treat when they’re found early. I’d like him seen by the children’s team at the hospital this afternoon.', an:{t:'good',dom:'cm',text:'<b>Right urgency, honest framing.</b> Same-day paediatric assessment (split bilirubin and liver work-up) — not the routine 6-week check. Explains why without catastrophising.'}},
        {r:'pt', s:'Today? I haven’t got a car, and my partner’s at work.'},
        {r:'dr', s:'Let’s sort that. I’ll ring the paediatric team now and call you back within the hour to say where to go. Could your mum drive you, or a taxi? If neither works, tell me and we’ll find a way. Take a dirty nappy in a bag if you can — they’ll want to see the colour.', an:{t:'good',dom:'ro',text:'<b>Solves the barrier.</b> A plan that works for this family, with a concrete call-back time and a useful practical tip.'}},
        {r:'pt', s:'My mum can take us. What if he gets worse before then?'},
        {r:'dr', s:'If he becomes floppy or hard to wake, stops feeding, has any bleeding or new bruises, or is sick green — call 999. Otherwise I’ll ring you back within the hour, and I’ll let the health visitor know. You did exactly the right thing calling.', an:{t:'good',dom:'cm',text:'<b>Specific safety-net + team communication.</b> Clear triggers for emergency help, a timed follow-up, and the health visitor kept in the loop.'}}
      ],
      verdict:'A clear pass. The candidate validated the mother, then asked the two questions that matter most in prolonged jaundice — stool and urine colour — and recognised pale stools as a red flag for conjugated jaundice. Same-day paediatric assessment was arranged with honest, non-alarming explanation, the transport barrier was solved, and the safety-net was specific. A short telephone call that may well change a child’s outcome.',
      diff:[
        'Asked about stool and urine colour — the two questions that matter in prolonged jaundice.',
        'Recognised pale stools as a red flag and arranged same-day paediatric assessment, not the routine 6-week check.',
        'Validated the mother, solved the transport barrier and gave a specific, timed safety-net.'
      ]
    },
    fail:{
      grades:{dg:'CF', cm:'CF', rto:'F'},
      turns:[
        {r:'pt', s:'He’s still yellow. The health visitor said it was breastfeeding jaundice and it would go, but he’s six weeks now. My mum says I’m overreacting.'},
        {r:'dr', s:'Breast milk jaundice can last up to twelve weeks, so that’s actually quite common. Is he feeding well?', an:{t:'bad',dom:'dg',text:'<b>Anchors on the commonest cause.</b> True as a fact, but it closes the diagnosis before stool and urine colour are asked about.'}},
        {r:'pt', s:'A bit less. He’s sleepier. His poos are a bit pale, but I think that’s normal?'},
        {r:'dr', s:'Babies are often sleepy at this age. Don’t stop breastfeeding. The doctor at his six-week check next week can have a look.', an:{t:'bad',dom:'cm',text:'<b>Red flag volunteered — and missed.</b> Pale stools in prolonged jaundice need same-day assessment; deferring to a routine check risks delaying a time-critical diagnosis.'}},
        {r:'pt', s:'Should he have a blood test?'},
        {r:'dr', s:'Probably not needed yet. Put his cot near a window — the daylight helps.', an:{t:'bad',dom:'cm',text:'<b>Outdated and unsafe advice.</b> Sunlight is not a treatment for neonatal jaundice, and NICE advises a bilirubin (including conjugated) level for jaundice beyond 14 days in term babies.'}},
        {r:'pt', s:'OK… my mum did say I was overreacting.'},
        {r:'dr', s:'Mums usually know best! Call back if you’re worried.', an:{t:'bad',dom:'ro',text:'<b>Invalidates the caller and nets nothing.</b> Sides with the grandmother against the mother’s correct instinct; no specific safety-net.'}}
      ],
      verdict:'A clear fail. The candidate anchored on breast milk jaundice, did not ask about stool or urine colour, and then missed pale stools when the mother offered them. A baby with prolonged jaundice and pale stools needs same-day assessment for conjugated jaundice; this one was deferred to a routine check with folklore advice. The mother’s correct instinct was dismissed.'
    }
  },

  /* ---------------- HRT and the breast cancer headline ---------------- */
  {
    title:'“I read that HRT gives you breast cancer”',
    type:'Video · 52F',
    brief:'Lisa Morgan, 52, deputy head teacher. Periods irregular for 18 months, last period 5 months ago. Hot flushes, night sweats, poor sleep, low mood. Booked to "discuss HRT". Records: BMI 27, BP 128/78 (practice nurse, 2 months ago), non-smoker, no history of VTE, routine breast screening 2 years ago normal. Mother had breast cancer at 74.',
    link:'../tools/sca-practice.html?case=hrt-breast-cancer-numbers',
    pass:{
      grades:{dg:'P', cm:'CP', rto:'CP'},
      turns:[
        {r:'pt', s:'I was all set to ask for HRT, then I read an article at the weekend saying it gives you breast cancer. Now I don’t know.'},
        {r:'dr', s:'That makes sense — those headlines are unsettling. What did it say, and has anything made it feel personal for you?', an:{t:'good',dom:'ro',text:'<b>Explores the source of the fear.</b> Asks what she read and why it landed, before offering any numbers.'}},
        {r:'pt', s:'That it puts your risk up by a third or something. And my mum had breast cancer. I watched her go through chemo.'},
        {r:'dr', s:'I’m sorry — that would make anyone wary. How old was your mum, and has anyone else in the family had breast or ovarian cancer? And how are the symptoms affecting you day to day?', an:{t:'good',dom:'dg',text:'<b>Takes a focused family history and the impact.</b> Both are needed to weigh risk against benefit.'}},
        {r:'pt', s:'Mum was 74. No one else. The flushes are awful — I’m drenched in front of a class, I’m awake at three every night, and I’m snapping at everyone.'},
        {r:'dr', s:'That’s a big impact. Your mum’s cancer at 74, with no one else affected, doesn’t put you in a higher-risk family group, though it’s right that it’s on your mind. Would it help to see actual numbers rather than percentages?', an:{t:'good',dom:'dg',text:'<b>Interprets the family history.</b> A single relative diagnosed in her seventies does not meet familial referral criteria — said clearly, without dismissing the experience.'}},
        {r:'pt', s:'Yes. Percentages mean nothing to me.'},
        {r:'dr', s:'Picture 1,000 women starting at around 50, followed for 20 years. Without HRT, about 59 of them would be diagnosed with breast cancer. If all 1,000 took combined HRT — oestrogen plus a progestogen, which you’d need because you have a womb — for 5 years, about 79 would: roughly 20 more. With 10 years it would be about 92. Headlines usually quote the percentage increase; the actual difference with 5 years is around 20 in 1,000. The extra risk depends on how long you take it, and it falls again after stopping.', an:{t:'good',dom:'cm',text:'<b>Natural frequencies, same denominator.</b> Baseline and added risk out of 1,000, absolute versus relative explained — the approach NICE NG23 recommends. Figures from the NICE NG23 discussion aid (2024).'}},
        {r:'pt', s:'Twenty in a thousand. That’s… smaller than I imagined. But it’s not nothing.'},
        {r:'dr', s:'No, it isn’t, and I won’t pretend it is. For comparison, drinking two or more units a day, or carrying extra weight, adds a similar or bigger risk. HRT also helps symptoms and protects bones. The choices are HRT — a patch or gel, which carries less clot risk than tablets, with micronised progesterone or a hormonal coil — or non-hormonal options, or CBT, which helps flushes and sleep. What matters most to you?', an:{t:'good',dom:'cm',text:'<b>Balanced options, then her values.</b> Puts the risk in context, sets out benefits and alternatives, and hands the decision back.'}},
        {r:'pt', s:'Sleeping again, and being myself at work. I think I’d like to try it — but can I stop if I change my mind?'},
        {r:'dr', s:'Absolutely — it’s your decision, and we can review it any time. I’ll send you the NICE decision aid with these numbers. Let’s start a patch with progesterone capsules and review at three months for symptoms and bleeding. Keep up your breast screening, and contact me about any breast lump, bleeding that continues after the first three months, or a painful swollen calf or sudden breathlessness.', an:{t:'good',dom:'cm',text:'<b>Shared decision, documented support, safety-net.</b> Written decision aid, defined review, and red flags for breast change, unscheduled bleeding and VTE.'}}
      ],
      verdict:'A clear pass. The candidate explored what lay behind the fear — the headline and her mother’s illness — assessed the family history accurately, and communicated risk the way patients understand it: natural frequencies with the same denominator, absolute rather than relative, set against everyday risks and the benefits. The decision was hers, with a written aid, a 3-month review and a specific safety-net.',
      diff:[
        'Explored the headline and her mother’s illness before giving any figures.',
        'Used natural frequencies out of 1,000 and separated absolute from relative risk.',
        'Shared the decision with balanced options, a written decision aid, a 3-month review and a safety-net.'
      ]
    },
    fail:{
      grades:{dg:'F', cm:'F', rto:'F'},
      turns:[
        {r:'pt', s:'I was all set to ask for HRT, then I read an article at the weekend saying it gives you breast cancer. Now I don’t know.'},
        {r:'dr', s:'Don’t worry, the media really overblow this. For most women the benefits far outweigh the risks.', an:{t:'bad',dom:'ro',text:'<b>Reassurance before exploration.</b> Dismisses the source of the fear without finding out what it is.'}},
        {r:'pt', s:'But my mum had breast cancer…'},
        {r:'dr', s:'The data show a relative risk of about 1.2 to 1.3 with combined HRT, and little or no increase with oestrogen-only, so the absolute risk is small. I’d recommend starting.', an:{t:'bad',dom:'cm',text:'<b>The medicine is fine but…</b> the figures are broadly accurate, yet given as relative risk jargon. Her mother’s history is never asked about, and "I’d recommend" replaces a shared decision.'}},
        {r:'pt', s:'I don’t really know what that means. I’m still scared.'},
        {r:'dr', s:'Basically it’s tiny. Loads of my patients are on it with no problems. I’ll start you on a patch and tablets.', an:{t:'bad',dom:'ro',text:'<b>Anecdote instead of understanding.</b> Stated fear ignored a second time; no check of what she has understood.'}},
        {r:'pt', s:'…OK. I’ll think about it.'},
        {r:'dr', s:'Sure. The prescription will be ready when you want it.', an:{t:'bad',dom:'cm',text:'<b>No options, review or safety-net.</b> Alternatives, follow-up and red flags are absent — and the patient is leaving unconvinced, so likely won’t start it.'}}
      ],
      verdict:'A fail despite accurate medicine. The candidate knew the evidence but reassured before exploring, used relative risk and jargon, never took the family history and pushed a recommendation rather than sharing the decision. The patient’s fear was ignored twice; she left with a prescription she probably won’t use and no plan for review.'
    }
  },

  /* ---------------- PSA request after a friend’s diagnosis ---------------- */
  {
    title:'“I want the prostate test”',
    type:'Video · 71M',
    brief:'Desmond Clarke, 71, retired bus driver, Black Caribbean heritage. Requests a "prostate blood test" after a friend from church was diagnosed with prostate cancer. Records: hypertension, type 2 diabetes (HbA1c 52 mmol/mol). No previous PSA. Lives with his wife, walks daily.',
    link:'../tools/sca-practice.html?case=psa-result-conversation',
    pass:{
      grades:{dg:'CP', cm:'CP', rto:'P'},
      turns:[
        {r:'pt', s:'My friend Clive’s just been told he’s got prostate cancer. I want the blood test, to make sure I haven’t.'},
        {r:'dr', s:'I’m sorry about Clive — that must have been a shock. We can certainly talk about the test. How’s he doing, and what’s been going through your mind?', an:{t:'good',dom:'ro',text:'<b>Starts with the trigger.</b> Acknowledges the friend’s diagnosis and invites his concerns rather than reaching straight for the form.'}},
        {r:'pt', s:'He’s having treatment. He didn’t have any symptoms, that’s what frightened me. And I read it’s more common in Black men.'},
        {r:'dr', s:'You’re right, it is — about 1 in 4 Black men get prostate cancer in their lifetime, compared with about 1 in 8 men overall. Let me check a few things. Any trouble with your waterworks — getting up at night, a weak stream, blood in your urine? Any bone or back pain, or losing weight?', an:{t:'good',dom:'dg',text:'<b>Confirms his risk honestly, then screens for symptoms.</b> Symptoms would change this from an informed-choice test to a diagnostic one (NICE NG12).'}},
        {r:'pt', s:'Up once a night, for years. Nothing else. No pain.'},
        {r:'dr', s:'Thank you. Any family history — a brother or father with prostate cancer, or women in the family with breast or ovarian cancer at a young age?', an:{t:'good',dom:'dg',text:'<b>Completes the risk picture.</b> Family history, including the BRCA link through female relatives.'}},
        {r:'pt', s:'Not that I know of. My dad died young, in an accident.'},
        {r:'dr', s:'So this would be a test for a man without symptoms, and it’s worth knowing what it can and can’t tell you before you decide. It isn’t a perfect test. Most men with a raised PSA turn out not to have cancer. About 1 in 7 men who do have cancer have a normal PSA. And it can find slow-growing cancers that would never have caused harm — which can still lead to biopsies and treatment with side effects like leaking or erection problems. What do you make of that?', an:{t:'good',dom:'cm',text:'<b>Informed choice, as the Prostate Cancer Risk Management Programme intends.</b> False positives, false negatives and overdiagnosis — in plain words — then checks his reaction.'}},
        {r:'pt', s:'I didn’t know any of that. Clive made it sound like the test saved his life. But I think I still want to know.'},
        {r:'dr', s:'That’s a perfectly reasonable choice, and it’s yours. To get a fair result: no ejaculation or vigorous exercise like cycling for 48 hours beforehand, and tell us if you have a water infection, as that can push it up. If it’s raised, the next step would be an examination and usually an MRI scan before anyone talks about a biopsy. I can’t promise the result will settle every worry, but we’ll go through it together.', an:{t:'good',dom:'cm',text:'<b>Respects the choice, prepares him well.</b> Practical test conditions, the realistic next steps, and honesty about residual uncertainty.'}},
        {r:'pt', s:'That’s fair. Let’s do it.'},
        {r:'dr', s:'I’ll book the blood test and send you the leaflet with those numbers, and I’ll ring you with the result. Separately — test or no test — if your waterworks change, you see blood in your urine, or you get new bone pain, let me know straight away, because that’s a different conversation.', an:{t:'good',dom:'cm',text:'<b>Written information, follow-up and a safety-net.</b> Makes clear that a normal test does not cancel out future symptoms.'}}
      ],
      verdict:'A clear pass. The candidate started with the friend’s diagnosis, confirmed the patient’s raised ethnic risk honestly, screened for symptoms and family history, and then gave balanced informed-choice information — false positives, false negatives, overdiagnosis — in plain language. The patient’s decision to proceed was respected and well prepared, with honesty about uncertainty and a safety-net that outlasts the result.',
      diff:[
        'Acknowledged the friend’s diagnosis and answered the ethnic-risk question honestly.',
        'Screened for symptoms and family history before treating it as an informed-choice test.',
        'Explained false positives, false negatives and overdiagnosis plainly — then respected his choice.'
      ]
    },
    fail:{
      grades:{dg:'F', cm:'CF', rto:'F'},
      turns:[
        {r:'pt', s:'My friend Clive’s just been told he’s got prostate cancer. I want the blood test, to make sure I haven’t.'},
        {r:'dr', s:'Sure, no problem. I’ll book you a PSA.', an:{t:'bad',dom:'cm',text:'<b>Test without informed choice.</b> Agreeable, but the man is not told what the test can and cannot show before he has it.'}},
        {r:'pt', s:'Great. So if it’s normal, I’m in the clear?'},
        {r:'dr', s:'Yes — a normal PSA means you don’t have prostate cancer.', an:{t:'bad',dom:'cm',text:'<b>False reassurance.</b> A normal PSA does not exclude prostate cancer; this could stop him reporting later symptoms.'}},
        {r:'pt', s:'And if it’s high?'},
        {r:'dr', s:'Then it’s most likely cancer and we’d refer you urgently. But let’s not worry about that yet.', an:{t:'bad',dom:'cm',text:'<b>Wrong in the other direction too.</b> Most raised PSAs are not cancer — he now has an alarming expectation with no preparation.'}},
        {r:'pt', s:'Clive didn’t have symptoms either. Is it because we’re Black?'},
        {r:'dr', s:'Ethnicity is one of many factors. Anything else today?', an:{t:'bad',dom:'ro',text:'<b>Brushes off a direct question.</b> His specific, accurate concern goes unanswered; no symptom or family history check.'}}
      ],
      verdict:'A clear fail. Ordering the test was not in itself wrong — he is entitled to it — but the candidate gave no informed-choice information and then misstated what the test means in both directions, inviting false reassurance or unnecessary alarm. Symptoms and family history were never checked, and the patient’s question about ethnic risk was brushed aside.'
    }
  },

  /* ---------------- Palliative pain at the weekend ---------------- */
  {
    title:'“He’s in so much pain and it’s the weekend”',
    type:'Telephone · 38F',
    brief:'Saturday morning; you are the duty GP for the out-of-hours telephone service. Hannah Okoro, 38, calls about her husband Daniel, 42: metastatic bowel cancer (liver and spinal metastases), on his practice’s palliative care register, hospice community team involved. Shared care record: modified-release morphine 30 mg twice daily, oral morphine solution 5 mg as needed; anticipatory ("just in case") injectable medicines issued 2 weeks ago; ReSPECT form — preferred place of death home, DNACPR in place. Two children, aged 6 and 9.',
    link:'../tools/sca-practice.html?case=pall-pain',
    pass:{
      grades:{dg:'CP', cm:'CP', rto:'CP'},
      turns:[
        {r:'pt', s:'He’s in so much pain. The Oramorph isn’t touching it. I didn’t know who to ring at the weekend — the hospice line just rang out.'},
        {r:'dr', s:'I’m glad you’ve called — you’ve got the right person, and we’ll sort this now. I can see Daniel’s records. Is he with you, and can he talk to me?', an:{t:'good',dom:'ro',text:'<b>Calm ownership.</b> Reassures that the call has landed in the right place and checks whether the patient can speak for himself.'}},
        {r:'pt', s:'He’s in bed. He can’t really talk, he’s just moaning. He was sick after his morning tablets.'},
        {r:'dr', s:'Tell me about the pain — is it the same pain worse, or something new? And how much Oramorph has he had since yesterday?', an:{t:'good',dom:'dg',text:'<b>Characterises the pain and quantifies breakthrough use.</b> New versus worsening pain and the 24-hour total both shape the plan.'}},
        {r:'pt', s:'His back — same as before, but much worse since Thursday. He’s had six doses since last night.'},
        {r:'dr', s:'That helps. Two more things I need to check, because back pain matters when the cancer is in the spine: any new weakness or numbness in his legs, or problems passing urine or opening his bowels? And is he more confused, or very thirsty?', an:{t:'good',dom:'dg',text:'<b>Screens for the emergencies.</b> Metastatic spinal cord compression and hypercalcaemia — both treatable, both easily missed in "more pain".'}},
        {r:'pt', s:'No, he walked to the toilet this morning, legs fine. He’s not confused, just exhausted. There’s a box of injections the surgery gave us in the kitchen — is that what that’s for?'},
        {r:'dr', s:'Exactly what it’s for. Because he can’t keep tablets down, his pain relief needs to go under the skin instead. I’m calling the out-of-hours district nurses now to come and give him something for the pain and the sickness, and to talk about a syringe driver — a small pump that gives his medicines steadily over 24 hours. I’ll work out the doses from what he’s been taking, using the local palliative care guidance, and I’ll visit this afternoon myself. Is that OK with you?', an:{t:'good',dom:'cm',text:'<b>Recognises oral route failure and acts.</b> Uses the anticipatory medicines, mobilises district nurses, plans a syringe driver and an urgent home visit — with consent.'}},
        {r:'pt', s:'Yes. Thank you. Sorry — I’ve been up all night. The kids keep asking what’s happening.'},
        {r:'dr', s:'Please don’t apologise — you’re doing an enormous amount. How are you managing? Is anyone with you today?', an:{t:'good',dom:'ro',text:'<b>Turns to the carer.</b> Picks up the exhaustion and the children, rather than staying purely on the drug plan.'}},
        {r:'pt', s:'My sister’s coming at lunchtime. I’m just frightened he’s going to die this weekend and I’ll get it wrong.'},
        {r:'dr', s:'That’s a very natural fear, and you won’t get it wrong. When I come this afternoon we’ll talk about what to expect, and the hospice can help with how to talk to the children. If the pain hasn’t eased within an hour of the nurse’s dose, or he’s very distressed, ring this number again and ask for me. I’ll also update his own GP and the hospice team so everyone knows what’s happened.', an:{t:'good',dom:'cm',text:'<b>Support, safety-net and continuity.</b> Addresses the fear, offers help for the children, gives a specific trigger to call back, and hands over to the usual team.'}}
      ],
      verdict:'A clear pass. The candidate took ownership, quantified the pain and breakthrough use, actively excluded spinal cord compression and hypercalcaemia, and recognised that the oral route had failed. The plan was concrete and respected his wish to be at home: anticipatory medicines given by out-of-hours district nurses, a syringe driver, and a same-day visit. The carer’s exhaustion and fear were heard, and the safety-net and handover were specific.',
      diff:[
        'Quantified the pain and screened for spinal cord compression and hypercalcaemia.',
        'Recognised that the oral route had failed and used the anticipatory medicines, district nurses and a same-day visit.',
        'Supported the exhausted carer and kept the safety-net consistent with his wish to die at home.'
      ]
    },
    fail:{
      grades:{dg:'F', cm:'CF', rto:'F'},
      turns:[
        {r:'pt', s:'He’s in so much pain. The Oramorph isn’t touching it. I didn’t know who to ring at the weekend — the hospice line just rang out.'},
        {r:'dr', s:'OK. How much of his slow-release morphine is he on?', an:{t:'bad',dom:'ro',text:'<b>Straight to the numbers.</b> No acknowledgement of a distressed carer on a weekend phone call.'}},
        {r:'pt', s:'Thirty twice a day. He was sick after this morning’s though.'},
        {r:'dr', s:'Right — his breakthrough dose should be about a sixth of his daily total, so he can have 10 mg of Oramorph as needed.', an:{t:'bad',dom:'dg',text:'<b>The medicine is fine but…</b> the arithmetic is in line with usual guidance (check the local palliative care formulary) — yet he has just vomited his tablets. An oral plan for a man who can’t keep oral medicine down will fail.'}},
        {r:'pt', s:'He keeps saying his back’s much worse since Thursday.'},
        {r:'dr', s:'Bone pain is common with spinal metastases. The higher dose should help. Ring his own GP on Monday for a review.', an:{t:'bad',dom:'cm',text:'<b>Red flag normalised; care deferred.</b> No screen for spinal cord compression, no use of the anticipatory medicines, no district nurses, no visit — two days of uncontrolled pain.'}},
        {r:'pt', s:'I’ve been up all night. I can’t do this on my own…'},
        {r:'dr', s:'I understand it’s hard. If he gets much worse, just call 999.', an:{t:'bad',dom:'ro',text:'<b>Carer missed; plan undermines his wishes.</b> 999 as the only safety-net risks an unwanted admission for a man whose preferred place of death is home.'}}
      ],
      verdict:'A fail, despite correct arithmetic. The candidate calculated a textbook breakthrough dose but did not register that the patient was vomiting, did not screen for spinal cord compression, and ignored the anticipatory medicines and out-of-hours district nurses already available. The carer was left alone with uncontrolled pain until Monday, and a 999 safety-net cut across the patient’s documented wish to die at home.'
    }
  }
);
