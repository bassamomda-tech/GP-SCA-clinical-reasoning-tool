/* ============================================================
   Worked example consultations — additional set (a)
   Appends to window.SCA_WORKED (load after sca-worked-examples.js).
   Same shape: pass/fail versions with annotated turns;
   an.t = good|bad ; an.dom = dg|cm|ro. pass.diff = 3 bullets.
   Educational illustration only.
   ============================================================ */
window.SCA_WORKED = window.SCA_WORKED || [];
window.SCA_WORKED.push(
  /* ---------------- A1 · Care-home nurse: new confusion ---------------- */
  {
    title:'“Can you give her something to calm her down?”',
    type:'Telephone · care-home nurse re 88F',
    brief:'Call from Sam, a registered nurse at Elmfield care home, about Doris Webb, 88. Records: moderate Alzheimer’s dementia, hypertension, osteoarthritis. ReSPECT form on file: not for CPR; for ward-level treatment of reversible problems; would prefer to stay at the home if possible. Daughter holds health and welfare LPA. Medication: amlodipine, paracetamol, co-codamol added by the out-of-hours service 5 days ago for knee pain.',
    link:'../tools/sca-practice.html?case=carehome-delirium',
    pass:{
      grades:{dg:'CP', cm:'CP', rto:'P'},
      turns:[
        {r:'pt', s:'Hi doctor, it’s Sam from Elmfield. Doris has been really unsettled since yesterday — up all night, shouting, pulling at her clothes. The staff are struggling. Could you prescribe something to settle her?'},
        {r:'dr', s:'Thanks for ringing, Sam — that sounds hard on her and on the staff. Before we think about medicines, help me understand how different she is from her usual self. What’s Doris normally like on a good day?', an:{t:'good',dom:'dg',text:'<b>Establishes the baseline first.</b> Delirium is defined by change from baseline — asking what “normal” looks like is the key data-gathering move with a third-party caller.'}},
        {r:'pt', s:'Normally she’s pleasantly muddled — chats, knows the staff, feeds herself, walks with her frame. Since yesterday she doesn’t seem to know where she is, she’s dozing in the day and then awake all night.'},
        {r:'dr', s:'So a sudden change over a day, with drowsiness in the day and agitation at night — that sounds like delirium rather than her dementia getting worse, and delirium usually has a cause we can find. Have you got a set of observations on her?', an:{t:'good',dom:'cm',text:'<b>Names the working diagnosis and shares the reasoning.</b> Reframes the request from “sedate her” to “find the cause”, which brings the nurse along rather than overruling her.'}},
        {r:'pt', s:'Temp 37.9, pulse 98, resps 20, sats 95% on air, BP 128 over 70. NEWS2 is 3. She’s not drinking much and I don’t think her bowels have opened for four days.'},
        {r:'dr', s:'That’s really helpful. A few more things: any falls or bumps to the head? Is she passing urine, and any new cough or pain? And I can see co-codamol was started five days ago — how much has she been having?', an:{t:'good',dom:'dg',text:'<b>Works through the reversible causes.</b> Falls/head injury, retention, infection, pain, constipation and a new opioid — a structured screen without reading out a checklist.'}},
        {r:'pt', s:'No falls. She’s wetting her pad less than usual. She’s been having the co-codamol four times a day. No cough that I’ve noticed.'},
        {r:'dr', s:'Thank you. Several things could be adding up here — dehydration, constipation from the co-codamol, possibly an infection or urine retention. I don’t want to sedate her, because that can make delirium worse and hide what’s going on. I’d like to come and see her this afternoon. Her ReSPECT form says she’d want treatment for something reversible and would rather stay with you if possible — does that still fit what you and her daughter know of her wishes?', an:{t:'good',dom:'cm',text:'<b>Safe, proportionate plan that respects her wishes.</b> Avoids antipsychotics, arranges a same-day assessment, and uses the ReSPECT form and LPA to guide where she is treated.'}},
        {r:'pt', s:'Yes — her daughter’s always said she doesn’t want hospital unless she really has to. What do we do with her until you get here?'},
        {r:'dr', s:'Keep the lights on and a familiar carer with her, glasses and hearing aids in, encourage sips every hour and keep a fluid chart, and hold the co-codamol — paracetamol only for now. Please don’t dipstick her urine; I’ll assess her properly. Could you let her daughter know I’m coming and I’ll ring her after? And if her NEWS2 rises, she becomes hard to rouse, short of breath, or you can’t keep her safe, call 999 — her ReSPECT form supports hospital for something treatable.', an:{t:'good',dom:'cm',text:'<b>Practical non-drug measures + clear escalation.</b> Specific instructions the home can act on, involves the LPA holder, and a safety-net tied to observations and the advance plan.'}}
      ],
      verdict:'A clear pass. The candidate established the baseline before reacting to the request, recognised delirium, worked through the reversible causes (dehydration, constipation, a new opioid, infection, retention) with the nurse, and declined sedation with a reason. The plan was same-day, anchored to Doris’s ReSPECT form and her daughter’s LPA, and gave the home practical measures and an observation-based safety-net.',
      diff:[
        'Asked what Doris is normally like — recognised acute change from baseline as delirium, not “worse dementia”.',
        'Screened the reversible causes, including the recently started co-codamol and constipation, instead of reaching for sedation.',
        'Used the ReSPECT form and the LPA holder to shape a same-day plan with specific instructions and escalation triggers.'
      ]
    },
    fail:{
      grades:{dg:'F', cm:'CF', rto:'P'},
      turns:[
        {r:'pt', s:'Hi doctor, it’s Sam from Elmfield. Doris has been really unsettled since yesterday — up all night, shouting, pulling at her clothes. The staff are struggling. Could you prescribe something to settle her?'},
        {r:'dr', s:'Poor you, that sounds like a tough night. She has dementia, doesn’t she? It’s common for it to get worse in the evenings.', an:{t:'bad',dom:'dg',text:'<b>Anchors on the dementia.</b> Attributes an acute change to “sundowning” without asking what her baseline is — the classic way delirium is missed.'}},
        {r:'pt', s:'She does, but this is quite different for her. She’s not really drinking either.'},
        {r:'dr', s:'Have you dipped her urine?', an:{t:'bad',dom:'dg',text:'<b>Urine dip as the whole work-up.</b> Dipsticks are unreliable in people over 65 and lead to unnecessary antibiotics; no observations, bowels, pain or medicines are asked about.'}},
        {r:'pt', s:'Yes, it showed leucocytes and nitrites.'},
        {r:'dr', s:'Right, that’ll be a UTI then. I’ll send an antibiotic, and a small dose of something to help her settle at night.', an:{t:'bad',dom:'cm',text:'<b>Treats the dipstick and sedates.</b> Antibiotics on a dipstick plus an antipsychotic or benzodiazepine for delirium in dementia — risks harm and misses the co-codamol, constipation and dehydration.'}},
        {r:'pt', s:'OK. Should we let her daughter know?'},
        {r:'dr', s:'You can if you like. Ring back if she’s no better in a few days.', an:{t:'bad',dom:'cm',text:'<b>No assessment, no advance plan, vague safety-net.</b> The ReSPECT form and LPA are ignored, nobody sees her, and “a few days” is unsafe for an acutely unwell 88-year-old.'}}
      ],
      verdict:'A fail. The candidate was pleasant to the nurse but anchored on the dementia, relied on an unreliable urine dipstick, and prescribed sedation plus antibiotics over the phone without observations, a medication review or a visit. The likely contributors — dehydration, constipation and a new opioid — were never found, and her advance care plan and LPA holder were ignored.'
    }
  },
  /* ---------------- A2 · Results: raised ALT ---------------- */
  {
    title:'“It’s just a glass of wine now and then”',
    type:'Video · 29F',
    brief:'Ellie Marsh, 29, marketing manager. Booked by video to discuss results. Bloods were done for tiredness: ALT 142 U/L (raised), GGT 188 U/L (raised), MCV 101 fL, bilirubin and albumin normal, FBC otherwise normal, HbA1c and TFTs normal. BMI 23. No regular medication.',
    link:'../tools/sca-practice.html?case=lft-alcohol',
    pass:{
      grades:{dg:'CP', cm:'P', rto:'CP'},
      turns:[
        {r:'pt', s:'Hi. The text said you wanted to talk about my blood test. Is something wrong?'},
        {r:'dr', s:'Thanks for joining. Most of your results were fine, but one of the liver tests is raised — that means the liver is under some strain. It doesn’t tell us why yet, so I’d like to work that out with you. Had you any thoughts about what might be behind the tiredness?', an:{t:'good',dom:'ro',text:'<b>Clear headline, then the patient’s ideas.</b> Gives the result plainly without alarm and invites her view before asking about causes.'}},
        {r:'pt', s:'Not really. Work’s been mad. I don’t really drink — just a glass of wine now and then.'},
        {r:'dr', s:'OK. I ask everyone about the same things when the liver tests are up, because there are lots of possible causes — some medicines and supplements, viruses, weight, and alcohol. Have you taken any paracetamol, herbal or gym supplements recently?', an:{t:'good',dom:'dg',text:'<b>Normalises the questions.</b> Frames alcohol as one of several routine causes, which makes honest disclosure easier than a pointed “how much do you drink?”'}},
        {r:'pt', s:'No, nothing like that.'},
        {r:'dr', s:'And with drinking, it’s easy to underestimate — most of us do. Could I go through a short questionnaire we use? In a typical week, how often do you have a drink, and how much on a heavier night, like a Friday?', an:{t:'good',dom:'dg',text:'<b>Structured, non-judgemental alcohol history.</b> Uses AUDIT to quantify, and asks about the heavier nights where intake is usually hidden.'}},
        {r:'pt', s:'…Honestly? Since my break-up, a bottle most weeknights, more at weekends. I’ve stopped telling my friends how much. I didn’t want to say at first.'},
        {r:'dr', s:'Thank you for being straight with me — that can’t have been easy, and I’m not here to judge. That’s roughly 50 to 60 units a week, which fits with these results. Do you ever need a drink in the morning, or get shaky or sweaty if you go a day without?', an:{t:'good',dom:'cm',text:'<b>Validates the disclosure, then checks for dependence.</b> Morning drinking and withdrawal symptoms decide whether stopping suddenly is safe — essential before any advice to cut down.'}},
        {r:'pt', s:'No, never in the morning. I just can’t switch off at night without it. I don’t want my liver to be damaged.'},
        {r:'dr', s:'That worry is a good place to start. The encouraging part is that the liver often recovers well when drinking comes down. I’d suggest a few more blood tests to rule out other causes, a liver scan, and a stiffness scan to check for scarring. I can refer you to the local alcohol service — they’re very good with people in your situation — and we can talk about the low mood since the break-up too. Then I’ll repeat your liver tests in a couple of months. If you get shaky, sweaty or very anxious when you cut down, or notice yellow eyes or dark urine, contact us the same day. How does that sound?', an:{t:'good',dom:'cm',text:'<b>Hopeful, staged plan with safety-netting.</b> Completes the liver work-up, offers specialist support and links the drinking to the break-up, with specific symptoms that need a same-day call.'}}
      ],
      verdict:'A clear pass. The candidate gave the result plainly, normalised the alcohol questions among other causes, used a structured history that made an honest disclosure possible, and responded without judgement. Checking for dependence before advising change kept her safe, and the plan completed the liver work-up while addressing the break-up and low mood behind the drinking.',
      diff:[
        'Framed alcohol as one routine cause among several, so she could correct her first answer without losing face.',
        'Used a structured AUDIT-style history and checked for dependence and withdrawal before advising cutting down.',
        'Completed the liver work-up (screen, ultrasound, stiffness scan) and linked the drinking to the break-up, with a hopeful, staged plan.'
      ]
    },
    fail:{
      grades:{dg:'F', cm:'F', rto:'F'},
      turns:[
        {r:'pt', s:'Hi. The text said you wanted to talk about my blood test. Is something wrong?'},
        {r:'dr', s:'Your liver tests are abnormal — your ALT is 142 and your GGT is 188. How much do you drink?', an:{t:'bad',dom:'ro',text:'<b>Numbers and an accusation in one breath.</b> Jargon results followed by a pointed question — the patient becomes defensive before any rapport is built.'}},
        {r:'pt', s:'Not much. Just a glass of wine now and then.'},
        {r:'dr', s:'OK, so probably not alcohol then. Maybe it’s a virus. We’ll repeat it in three months.', an:{t:'bad',dom:'dg',text:'<b>Accepts the first answer.</b> No quantified history, no AUDIT, and the raised MCV and GGT pattern is ignored — the key diagnosis is missed.'}},
        {r:'pt', s:'Right. I’ve been really tired though, and things have been hard since my break-up.'},
        {r:'dr', s:'Tiredness is very common. Try to get more sleep and eat well.', an:{t:'bad',dom:'ro',text:'<b>Cue missed.</b> The break-up — the door to both the low mood and the drinking — is passed over.'}},
        {r:'pt', s:'…OK. Is my liver damaged?'},
        {r:'dr', s:'Probably not. We’ll see what the repeat shows. Anything else?', an:{t:'bad',dom:'cm',text:'<b>False reassurance and no work-up.</b> No liver screen, imaging or fibrosis assessment, no safety-net and no follow-up of her mood.'}}
      ],
      verdict:'A fail. Opening with numbers and a blunt alcohol question made the patient defensive, and the candidate accepted her first answer at face value. The pattern of raised GGT and MCV, the tiredness and the break-up were all ignored, so harmful drinking — and her mood — went unrecognised, with no liver work-up and no safety-net.'
    }
  },
  /* ---------------- A3 · Suicidal thoughts after redundancy ---------------- */
  {
    title:'“I just don’t see the point any more”',
    type:'Telephone · 45M',
    brief:'Gary Holt, 45. Telephone appointment booked as “stress, can’t sleep”. Made redundant from a warehouse management job 6 weeks ago. Records: low back pain — repeat co-codamol 30/500. Lives with his wife and two children (12 and 15). No previous mental health contacts.',
    link:'../tools/sca-practice.html?case=depression-first-risk',
    pass:{
      grades:{dg:'CP', cm:'CP', rto:'CP'},
      turns:[
        {r:'pt', s:'I don’t really know why I’m ringing. I just can’t sleep. Since I lost my job everything’s gone a bit… flat.'},
        {r:'dr', s:'I’m glad you did ring, Gary. Losing your job after a long time can knock everything sideways. Tell me how things have been for you these last few weeks.', an:{t:'good',dom:'ro',text:'<b>Warm, open start.</b> Validates the call and invites the story — on the phone, tone and pace do the work that eye contact would.'}},
        {r:'pt', s:'I lie awake doing sums — the mortgage, the kids. I feel like I’ve let them all down. Some days I just don’t see the point any more.'},
        {r:'dr', s:'That sounds really heavy to carry. When you say you don’t see the point — I ask this because it matters — have you had thoughts of ending your life?', an:{t:'good',dom:'dg',text:'<b>Asks directly about suicide.</b> Picks up the cue and asks plainly; asking does not plant the idea, and avoids the vague “nothing silly?”'}},
        {r:'pt', s:'…Yeah. Last week I looked up how many tablets it would take. I’ve got a lot of the co-codamol saved up. I haven’t done anything.'},
        {r:'dr', s:'Thank you for telling me — I know that’s hard to say out loud. Can I ask a bit more so I understand how you are right now? Have you made any plans, written anything, or set a time? And what’s stopped you so far?', an:{t:'good',dom:'dg',text:'<b>Explores intent, plans and protective factors.</b> Asks about preparations and what holds him back, rather than scoring him on a risk scale.'}},
        {r:'pt', s:'No plans like that. It’s the kids, really — I couldn’t do that to them. I’ve been drinking more though, most nights. My wife doesn’t know how bad it is.'},
        {r:'dr', s:'Your kids matter enormously to you — let’s hold on to that. With the saved tablets and the drinking, I want to make you safer today. Would you be willing to give the co-codamol to your wife or take it back to the pharmacy this afternoon? And could we talk to your wife together, so you’re not carrying this on your own?', an:{t:'good',dom:'cm',text:'<b>Means restriction + support, agreed with him.</b> Reducing access to the stockpile is one of the most effective safety measures; involving his wife is negotiated with consent.'}},
        {r:'pt', s:'…Yeah. I can give them to her. I suppose she should know.'},
        {r:'dr', s:'That’s a big step. Here’s what I suggest: I’ll ask the mental health crisis team to call you today, and I’ll ring you tomorrow myself to see how you are. Let’s write a safety plan now — what helps when it gets bad, who you can call. If the thoughts get stronger, call NHS 111 and choose the mental health option, Samaritans on 116 123 any time, or 999 if you feel you might act on them. When we speak tomorrow we’ll also look at sleep, the drinking and the money worries. Does that feel doable?', an:{t:'good',dom:'cm',text:'<b>Same-day crisis input, written safety plan, named follow-up.</b> Specific crisis routes and next-day contact, with the drinking and financial worries on the plan — needs-based, not just a score.'}},
        {r:'pt', s:'Yeah. Thanks. I didn’t think I’d say any of this.'}
      ],
      verdict:'A clear pass. The candidate created a safe space, asked directly about suicide, and explored plans, preparations and protective factors rather than relying on a risk score. The stockpiled co-codamol and the drinking were dealt with through agreed means restriction, his wife was involved with his consent, and the plan combined same-day crisis team contact, a written safety plan, clear crisis numbers and a personal call the next day.',
      diff:[
        'Asked directly about thoughts of ending his life when he said he couldn’t see the point.',
        'Explored plans, preparations, stockpiled tablets, alcohol and protective factors — a needs-based assessment, not a score.',
        'Agreed means restriction and involving his wife, then gave same-day crisis input, a written safety plan, crisis numbers and next-day follow-up.'
      ]
    },
    fail:{
      grades:{dg:'CF', cm:'CF', rto:'F'},
      turns:[
        {r:'pt', s:'I don’t really know why I’m ringing. I just can’t sleep. Since I lost my job everything’s gone a bit… flat.'},
        {r:'dr', s:'Sleep problems are really common with stress. Have you tried a wind-down routine, no screens before bed?', an:{t:'bad',dom:'dg',text:'<b>Jumps to sleep hygiene.</b> Treats the presenting complaint without exploring the mood behind it.'}},
        {r:'pt', s:'I’ve tried. I just lie there thinking I’ve let everyone down. Some days I don’t see the point.'},
        {r:'dr', s:'You’re not going to do anything silly though, are you?', an:{t:'bad',dom:'dg',text:'<b>Closed, leading question.</b> Invites the answer “no” and shuts down disclosure — intent, plans and the stockpiled tablets are never found.'}},
        {r:'pt', s:'…No. No, course not.'},
        {r:'dr', s:'Good. Redundancy is tough but you’ll find something. You can self-refer to talking therapies — I’ll text you the link.', an:{t:'bad',dom:'ro',text:'<b>False reassurance.</b> Minimises his distress, and self-referral alone is not enough for someone with suicidal thoughts.'}},
        {r:'pt', s:'OK. And I’ll keep taking my co-codamol for my back?'},
        {r:'dr', s:'Yes, I’ll put another month on. Ring back if you need anything.', an:{t:'bad',dom:'cm',text:'<b>Issues more means and no safety plan.</b> Adds to a possible stockpile, gives no crisis numbers and arranges no follow-up — potentially fatal.'}}
      ],
      verdict:'A clear fail with potentially fatal consequences. The candidate treated the sleep, asked a leading closed question that guaranteed a “no”, reassured falsely and offered only self-referral. The stockpiled co-codamol and the drinking were never found, more opioid was prescribed, and there was no safety plan, crisis route or follow-up.'
    }
  },
  /* ---------------- A4 · New AF: anticoagulation decision ---------------- */
  {
    title:'“The chemist said my pulse was all over the place”',
    type:'Video · 67M',
    brief:'Keith Barnes, 67, retired electrician. A community pharmacy BP check flagged an irregular pulse; practice 12-lead ECG 4 days ago confirmed atrial fibrillation, rate 84. Asymptomatic. PMH: hypertension (amlodipine), type 2 diabetes (metformin). Bloods this week: eGFR 74, Hb 145 g/L, TFTs normal. No bleeding history, no antiplatelets. Drinks about 10 units a week. Booked by video to discuss the result.',
    link:'../tools/sca-practice.html?case=af-anticoag-decision',
    pass:{
      grades:{dg:'P', cm:'CP', rto:'CP'},
      turns:[
        {r:'pt', s:'So the heart tracing showed this AF thing. The chemist made it sound serious, but I feel absolutely fine.'},
        {r:'dr', s:'It’s good that you feel well — many people with AF do. Before I explain, what do you already know about AF, and what’s going through your mind about it?', an:{t:'good',dom:'ro',text:'<b>Ideas and concerns before information.</b> Lets the explanation start from what he knows and fears.'}},
        {r:'pt', s:'My brother-in-law had it. He went on blood thinners and had a nasty bleed from his stomach. I’m on ladders a lot, doing jobs for the family. I don’t fancy that.'},
        {r:'dr', s:'That’s a very understandable worry, especially after seeing that. Can I check a few things first — any palpitations, breathlessness, chest pain, dizziness or blackouts? And any bleeding problems, stomach ulcers, or tablets like aspirin or ibuprofen?', an:{t:'good',dom:'dg',text:'<b>Symptom and bleeding-risk screen.</b> Checks for rate-control needs and the bleeding factors that feed into the ORBIT score.'}},
        {r:'pt', s:'None of that. I take ibuprofen now and then for my knee, that’s all.'},
        {r:'dr', s:'Thanks. The main risk with AF isn’t the rhythm itself — it’s that clots can form in the heart and cause a stroke. With your age, blood pressure and diabetes, your stroke risk score is 3. That means roughly 3 in every 100 people like you would have a stroke each year without treatment. A blood thinner reduces that by about two-thirds.', an:{t:'good',dom:'cm',text:'<b>Explains CHA₂DS₂-VASc in plain numbers.</b> Uses natural frequencies rather than jargon, so he can weigh the benefit.'}},
        {r:'pt', s:'And the bleeding risk? That’s what worries me.'},
        {r:'dr', s:'It’s a real risk and I won’t pretend otherwise. Your bleeding risk score is low — normal kidney function, no anaemia, no bleeding history. The newer blood thinners have a lower risk of serious bleeding in the brain than warfarin, and they don’t need regular blood tests. Stopping the ibuprofen would lower the risk further. Falls from a ladder are worth thinking about, but for most people the stroke protection outweighs the bleeding risk.', an:{t:'good',dom:'cm',text:'<b>Balanced, individualised risk discussion.</b> Uses the ORBIT factors honestly, identifies a modifiable risk (NSAID) and addresses his specific concern about ladders.'}},
        {r:'pt', s:'Hmm. I think I’d like to talk it over with my wife first.'},
        {r:'dr', s:'That’s a sensible way to make a decision like this. I’ll send you an information leaflet and a decision aid that shows these numbers in pictures. Let’s speak again next week — and I’ll arrange a heart scan in the meantime. Please stop the ibuprofen. If you get sudden weakness in your face or arm, problems speaking, chest pain, a racing heart or a blackout, call 999. How does that sound?', an:{t:'good',dom:'cm',text:'<b>Shared decision with time to think.</b> Decision aid, follow-up, echo, removes the NSAID and gives stroke and cardiac warning signs — respects his choice without letting it drift.'}}
      ],
      verdict:'A clear pass. The candidate started with his ideas and the bleed in the family, screened symptoms and bleeding risk, then explained stroke and bleeding risk in plain numbers he could weigh. The ladder worry was taken seriously, a modifiable risk (ibuprofen) was removed, and the decision was shared — with a decision aid, a date to reconvene and a stroke safety-net.',
      diff:[
        'Explored the brother-in-law’s bleed before giving information, so the explanation addressed his real worry.',
        'Translated CHA₂DS₂-VASc and ORBIT into plain natural frequencies and spotted the ibuprofen as a modifiable bleeding risk.',
        'Supported a genuinely shared decision — a decision aid, time to talk with his wife, follow-up booked and a stroke safety-net.'
      ]
    },
    fail:{
      grades:{dg:'P', cm:'F', rto:'F'},
      turns:[
        {r:'pt', s:'So the heart tracing showed this AF thing. The chemist made it sound serious, but I feel absolutely fine.'},
        {r:'dr', s:'Yes, you have atrial fibrillation. Your CHA₂DS₂-VASc is 3 and your ORBIT is low, so NICE says you need a DOAC.', an:{t:'bad',dom:'ro',text:'<b>Correct medicine, delivered in acronyms.</b> The scores are right but mean nothing to him, and his ideas are never explored.'}},
        {r:'pt', s:'A blood thinner? My brother-in-law had a terrible bleed on one of those.'},
        {r:'dr', s:'The newer ones are much safer. The benefits outweigh the risks.', an:{t:'bad',dom:'ro',text:'<b>Brushes past the fear.</b> Generic reassurance in place of exploring what happened and what it means to him.'}},
        {r:'pt', s:'I’m up ladders a lot though. And I take ibuprofen for my knee.'},
        {r:'dr', s:'It’ll be fine. I’ll send a prescription to your pharmacy today.', an:{t:'bad',dom:'cm',text:'<b>Misses the NSAID and the decision.</b> Starts anticoagulation without addressing the ibuprofen or giving him a real choice.'}},
        {r:'pt', s:'…I’ll think about it.'},
        {r:'dr', s:'OK, but you really should take it. Book in if you have any problems.', an:{t:'bad',dom:'cm',text:'<b>No shared decision, no safety-net.</b> A likely non-starter: no decision aid, no follow-up, no stroke warning signs.'}}
      ],
      verdict:'A fail — the medicine is fine but the consultation isn’t. The scores and the DOAC recommendation are correct, but they were delivered as acronyms, his family experience of a bleed was brushed aside, the ibuprofen was missed, and no real choice was offered. He leaves unconvinced and unlikely to take the tablet, with no follow-up or safety-net.'
    }
  },
  /* ---------------- A5 · Emergency contraception at 17 ---------------- */
  {
    title:'“Please don’t tell my mum”',
    type:'Telephone · 17F',
    brief:'Jade Collins, 17, sixth-form student. Telephone request for emergency contraception. Records: no previous sexual health contacts, no regular medication. Her mother is also registered at the practice.',
    link:'../tools/sca-practice.html?case=emergency-contraception',
    pass:{
      grades:{dg:'CP', cm:'CP', rto:'CP'},
      turns:[
        {r:'pt', s:'Um, hi. I need the morning-after pill. And — please don’t tell my mum. She’s with the same surgery.'},
        {r:'dr', s:'Thanks for calling, Jade — you’ve done the right thing ringing quickly. What we talk about is confidential, and at 17 you can make this decision yourself. The only time I’d need to share anything is if I was worried someone was at serious risk, and I’d talk to you first. Is now a good time to talk privately?', an:{t:'good',dom:'ro',text:'<b>Confidentiality explained clearly, with its limit.</b> At 16–17 she is presumed competent to consent; Fraser guidance is for under-16s. Checks she can talk privately on the phone.'}},
        {r:'pt', s:'Yeah, I’m in my room. It was Saturday night — the condom split.'},
        {r:'dr', s:'OK, so about 40 hours ago. When did your last period start, and is your cycle usually regular? Any other unprotected sex since your period?', an:{t:'good',dom:'dg',text:'<b>Targeted EC history.</b> Timing of sex and cycle decide which options will work.'}},
        {r:'pt', s:'About two weeks ago, it’s regular. No, just Saturday.'},
        {r:'dr', s:'Thanks. I ask everyone your age a few questions to make sure you’re safe — is that OK? Who was it with, roughly how old are they, and did you want it to happen? Had either of you been drinking or taking anything?', an:{t:'good',dom:'dg',text:'<b>Routine safeguarding screen.</b> Partner age, consent, coercion and substances — normalised so it doesn’t feel accusatory.'}},
        {r:'pt', s:'My boyfriend, he’s 18, we’re at college together. We’ve been together a year. Yeah, I wanted to. We hadn’t been drinking.'},
        {r:'dr', s:'That’s reassuring, thank you. You’ve got options. The most effective is a copper coil, which can go in up to five days after sex and then works as contraception for years. There are also two tablets — one works best within 72 hours, the other up to 5 days, and around the middle of your cycle that one is usually the better choice. Do you know roughly what you weigh? It can affect which works best.', an:{t:'good',dom:'cm',text:'<b>Offers all options, most effective first.</b> Cu-IUD first, then ulipristal versus levonorgestrel by timing and cycle; weight affects oral EC choice (check the SPC/local formulary).'}},
        {r:'pt', s:'About 60 kilos. I don’t want a coil. The tablet please — can I get it today without Mum knowing?'},
        {r:'dr', s:'Yes. You can get it free from a pharmacy today, or I can send a prescription — whichever is easier to keep private. Take it as soon as you can. If you vomit within three hours, call us. Afterwards I’d like to sort regular contraception — we can talk options when I call you back next week. Do a pregnancy test in three weeks, or sooner if your period is late or unusually light. And it’s worth doing an STI test — I can send you a link for a free home kit. If you get pain low in your tummy, call us.', an:{t:'good',dom:'cm',text:'<b>Practical, private and complete.</b> Free pharmacy route or prescription, vomiting advice, ongoing contraception, pregnancy test timing, STI testing and safety-netting.'}},
        {r:'pt', s:'Thank you. That’s way less awkward than I thought.'}
      ],
      verdict:'A clear pass. The candidate explained confidentiality accurately for a 17-year-old, gave a routine safeguarding screen without making it feel like an interrogation, and took a focused EC history. All options were offered with the copper IUD first, the oral choice was matched to timing, cycle and weight, and the plan covered privacy, ongoing contraception, a pregnancy test, STI testing and safety-netting.',
      diff:[
        'Explained confidentiality and its limits correctly — at 17 she can consent herself, and Fraser guidance is for under-16s.',
        'Ran a routine, non-judgemental safeguarding screen (partner age, consent, coercion, substances).',
        'Offered the copper IUD first, matched the oral option to timing and cycle, and covered ongoing contraception, pregnancy testing and STIs.'
      ]
    },
    fail:{
      grades:{dg:'F', cm:'F', rto:'F'},
      turns:[
        {r:'pt', s:'Um, hi. I need the morning-after pill. And — please don’t tell my mum. She’s with the same surgery.'},
        {r:'dr', s:'Well, I can’t promise anything — you’re under 18, so technically you’re still a child. Have you thought about talking to her?', an:{t:'bad',dom:'ro',text:'<b>Gets confidentiality wrong.</b> A competent 17-year-old is entitled to confidential care; this risks her ending the call and going without EC.'}},
        {r:'pt', s:'I really can’t. She’d go mad.'},
        {r:'dr', s:'OK. When did it happen?', an:{t:'bad',dom:'dg',text:'<b>Minimal history.</b> No cycle details, no other UPSI, and no safeguarding questions about partner age or consent.'}},
        {r:'pt', s:'Saturday night.'},
        {r:'dr', s:'Right, I’ll send the levonorgestrel to the pharmacy. It works up to 72 hours.', an:{t:'bad',dom:'cm',text:'<b>One option only.</b> No coil offered, and levonorgestrel chosen mid-cycle without considering ulipristal or weight.'}},
        {r:'pt', s:'OK. Is that it?'},
        {r:'dr', s:'Yes, that’s it. Try to be more careful next time.', an:{t:'bad',dom:'ro',text:'<b>Judgemental close, no follow-up.</b> No ongoing contraception, no pregnancy test, no STI advice — and a remark that makes her less likely to seek help again.'}}
      ],
      verdict:'A fail. Misstating her right to confidentiality nearly lost the consultation, and there was no safeguarding screen. EC was reduced to one tablet without the more effective coil or ulipristal being considered, and the call ended with a judgemental remark and no plan for contraception, pregnancy testing or STIs.'
    }
  },
  /* ---------------- A6 · Practice error: duty of candour ---------------- */
  {
    title:'“Nobody told me to stop them”',
    type:'Video · 58F',
    brief:'Linda Price, 58, teaching assistant. Admitted 6 weeks ago with acute kidney injury after gastroenteritis while on ramipril and naproxen. Discharge letter advised: stop naproxen permanently; hold ramipril and check U&Es in 1–2 weeks. The letter was filed at the practice without action — naproxen stayed on repeat and was reissued, and no U&Es were booked. She booked a video call after reading her copy of the letter. She has a home BP monitor.',
    link:'../tools/sca-practice.html?case=medication-error-candour',
    pass:{
      grades:{dg:'P', cm:'CP', rto:'CP'},
      turns:[
        {r:'pt', s:'I’ve just read my hospital letter properly. It says stop the naproxen — but you sent me more of it two weeks ago. I’ve been taking it every day. What’s going on?'},
        {r:'dr', s:'Thank you for bringing this to us, Linda. I’ve looked at your records: you’re right. The hospital asked us to stop the naproxen and check your kidney blood test, and we didn’t do either. I’m very sorry — that was our mistake, not yours.', an:{t:'good',dom:'ro',text:'<b>Prompt, honest apology.</b> Duty of candour: says what happened, owns it and apologises without hedging or blaming the hospital.'}},
        {r:'pt', s:'I was in hospital because of my kidneys. Have I damaged them?'},
        {r:'dr', s:'That’s the most important question, so let’s find out today rather than guess. How have you been — any change in how much you’re passing urine, swelling in your legs, breathlessness, sickness or feeling very tired?', an:{t:'good',dom:'dg',text:'<b>Assesses harm straight away.</b> Moves from apology to the clinical question — symptoms of kidney injury and fluid overload.'}},
        {r:'pt', s:'My ankles are a bit puffy. Look —'},
        {r:'dr', s:'Thanks — I can see some mild swelling round both ankles. Could you check your blood pressure on your monitor while I’m here?', an:{t:'good',dom:'dg',text:'<b>Uses what video allows.</b> Looks at the swelling on camera and uses her own BP reading instead of assuming a physical examination.'}},
        {r:'pt', s:'It says 152 over 94.'},
        {r:'dr', s:'Thank you. Please stop the naproxen from today. I’d like a kidney blood test today — I’ve asked the team to fit you in this afternoon — and I’ll ring you with the result tomorrow. If it’s back to normal, we can talk about restarting your blood pressure tablet and a safer painkiller. If your urine output drops, you get breathless or feel very unwell before then, call 111 or 999.', an:{t:'good',dom:'cm',text:'<b>Puts it right clinically.</b> Stops the NSAID, arranges same-day U&Es with a named result call, plans the ramipril and analgesia decision, and safety-nets.'}},
        {r:'pt', s:'OK. But how did this happen? I don’t want it to happen to anyone else.'},
        {r:'dr', s:'You deserve a proper answer. It looks like the letter was filed without anyone acting on it. We’ll review this as a significant event, report it through the national patient safety system, and change how hospital letters are handled. I’ll write to you with what we find. If you’d like to make a formal complaint, I’ll send you how — it won’t affect your care.', an:{t:'good',dom:'cm',text:'<b>Explains, learns and offers routes.</b> Significant event review, patient safety reporting, written follow-up and the complaints process — openness without defensiveness.'}},
        {r:'pt', s:'Thank you for being honest. I half expected excuses.'}
      ],
      verdict:'A clear pass. The candidate apologised promptly and specifically, assessed for harm using what video allows (the swelling on camera and her own BP reading), and put things right clinically with same-day U&Es and a named result call. The explanation was honest, the learning process was described, and the complaints route was offered without defensiveness — the professional duty of candour in practice.',
      diff:[
        'Apologised clearly and owned the error at the start — no hedging and no blaming the hospital.',
        'Assessed for harm within the limits of video (swelling on camera, her home BP) and arranged same-day U&Es with a named result call.',
        'Explained what went wrong, described the significant event review and safety reporting, and offered the complaints route openly.'
      ]
    },
    fail:{
      grades:{dg:'F', cm:'F', rto:'CF'},
      turns:[
        {r:'pt', s:'I’ve just read my hospital letter properly. It says stop the naproxen — but you sent me more of it two weeks ago. I’ve been taking it every day. What’s going on?'},
        {r:'dr', s:'Hospital letters often take a while to reach us, and they don’t always flag changes clearly.', an:{t:'bad',dom:'ro',text:'<b>Deflects onto the hospital.</b> No acknowledgement or apology — the patient hears excuses, and trust drops.'}},
        {r:'pt', s:'It was dated six weeks ago. Did nobody read it?'},
        {r:'dr', s:'I can’t really comment on that. These things happen in a busy practice. Just stop the naproxen now.', an:{t:'bad',dom:'ro',text:'<b>Defensive and evasive.</b> Fear of liability replaces honesty; saying sorry is not an admission of legal liability.'}},
        {r:'pt', s:'I was in hospital with my kidneys. Could this have hurt them?'},
        {r:'dr', s:'Probably not. We can do a blood test at your next review.', an:{t:'bad',dom:'cm',text:'<b>Harm not assessed.</b> No symptoms, no look at the ankles, no BP, no urgent U&Es — false reassurance after an AKI.'}},
        {r:'pt', s:'I’m not happy about this.'},
        {r:'dr', s:'If you want to complain, you can ask at reception.', an:{t:'bad',dom:'cm',text:'<b>No learning, no follow-up.</b> No significant event, no safety reporting and no plan for the ramipril — the complaint is used to end the conversation.'}}
      ],
      verdict:'A clear fail. Faced with a practice error, the candidate deflected onto the hospital, avoided apologising and reassured without assessing for harm in a patient recently admitted with AKI. There was no urgent kidney test, no plan for her blood pressure treatment, and no significant event or learning — a breach of the professional duty of candour.'
    }
  },
  /* ---------------- A7 · New type 2 diabetes via an interpreter ---------------- */
  {
    title:'Explaining diabetes through an interpreter',
    type:'Video · 34M + interpreter',
    brief:'Andrzej Nowak, 34, warehouse shift worker; first language Polish. A professional Polish interpreter has joined the video call. Results: HbA1c 62 mmol/mol, repeat 60 mmol/mol (type 2 diabetes confirmed). BMI 30 at a recent nurse check. Lipids, eGFR and urine ACR normal. No medication.',
    link:'../tools/sca-simulator.html',
    pass:{
      grades:{dg:'P', cm:'CP', rto:'CP'},
      turns:[
        {r:'pt', s:'(Interpreter) Mr Nowak says hello. He wants to know why the nurse called him back for a second blood test.'},
        {r:'dr', s:'Hello Mr Nowak, and thank you for joining us. I’ll speak to you directly and pause so our interpreter can translate everything. Please stop me at any point. Before I explain the results, what did you think the blood tests were for?', an:{t:'good',dom:'ro',text:'<b>Sets up the three-way consultation.</b> Speaks to the patient, not the interpreter, agrees short turns, and asks for his ideas first.'}},
        {r:'pt', s:'(Interpreter) He says he thought they were checking his cholesterol. His father has diabetes in Poland and has to inject.'},
        {r:'dr', s:'Thank you, that’s helpful. Both tests showed your blood sugar is high — high enough that it’s called type 2 diabetes. [pause] I know your father has diabetes. Can I ask how you feel hearing that?', an:{t:'good',dom:'ro',text:'<b>One idea at a time, then a pause.</b> Short, plain sentences give the interpreter room and leave space for his reaction.'}},
        {r:'pt', s:'(Interpreter) He says he is worried he will need injections like his father, and that he works nights and eats at strange times.'},
        {r:'dr', s:'That’s a very fair worry. Most people with type 2 diabetes don’t need injections, especially when it’s found early, like yours. Can I check a couple of things: have you been very thirsty, passing urine more, or lost weight without trying?', an:{t:'good',dom:'dg',text:'<b>Addresses the fear, then screens symptoms.</b> Separates his situation from his father’s, and checks for features that would suggest type 1 diabetes at a young age.'}},
        {r:'pt', s:'(Interpreter) He says a little thirsty, no weight loss. He is not feeling ill.'},
        {r:'dr', s:'Good. The plan has three parts. One: changes to food and activity that fit your night shifts. Two: a tablet called metformin, which lowers blood sugar — we’d start low and increase slowly so it is gentle on the stomach. Three: a diabetes course and yearly checks of your eyes and feet. I’ll also send written information in Polish.', an:{t:'good',dom:'cm',text:'<b>Staged, plain-language plan.</b> Chunked into three parts that fit his shift pattern, with metformin per NICE (check the SPC/local formulary for dosing) and translated written information.'}},
        {r:'pt', s:'(Interpreter) He says OK, he understands.'},
        {r:'dr', s:'Thank you. So I know I’ve explained it well — could you tell me in your own words what diabetes is and what we’ve agreed to do? Then I’ll book the diabetes course with an interpreter, and the nurse will see you in four weeks to see how the tablet is going — also with an interpreter. If you become very thirsty, pass a lot of urine, lose weight or feel unwell, please contact us — the interpreter service is free for you.', an:{t:'good',dom:'cm',text:'<b>Teach-back and interpreter-supported follow-up.</b> Checks understanding properly rather than accepting “OK”, keeps interpreter support in every step, and safety-nets symptoms of significant hyperglycaemia.'}}
      ],
      verdict:'A clear pass. The candidate used the professional interpreter well — speaking directly to the patient in short, plain chunks with pauses — and explored his ideas and his fear of injections before explaining. Symptoms suggesting type 1 diabetes were checked, the plan was staged and fitted to night shifts, and teach-back confirmed understanding, with interpreter support built into every follow-up step.',
      diff:[
        'Spoke directly to Mr Nowak in short chunks with pauses, rather than talking about him to the interpreter.',
        'Explored the family history and fear of injections, and checked for features that would suggest type 1 diabetes.',
        'Used teach-back instead of accepting “OK”, and built interpreter support into the course, follow-up and written information.'
      ]
    },
    fail:{
      grades:{dg:'F', cm:'P', rto:'CF'},
      turns:[
        {r:'pt', s:'(Interpreter) Mr Nowak says hello. He wants to know why the nurse called him back for a second blood test.'},
        {r:'dr', s:'Can you tell him his HbA1c was 62 and then 60, which confirms type 2 diabetes mellitus, and that we’ll be starting metformin and referring him for structured education?', an:{t:'bad',dom:'ro',text:'<b>Talks about him, not to him.</b> Third person, jargon and several ideas in one sentence — hard to interpret and impersonal.'}},
        {r:'pt', s:'(Interpreter) He is asking if this means injections, like his father.'},
        {r:'dr', s:'Tell him no, not for now. He needs to lose weight and cut out sugar and carbs.', an:{t:'bad',dom:'ro',text:'<b>Fear dismissed, advice generic.</b> The family history is not explored, and diet advice ignores his night shifts.'}},
        {r:'pt', s:'(Interpreter) He says he works nights and eats at different times.'},
        {r:'dr', s:'That’s fine, he’ll just have to manage it. Metformin with meals, start low, increase weekly.', an:{t:'bad',dom:'cm',text:'<b>The medicine is fine but…</b> metformin is right, but the plan is not adapted to him and no symptoms suggesting type 1 diabetes are checked.'}},
        {r:'pt', s:'(Interpreter) He says OK.'},
        {r:'dr', s:'Does he understand? Great. Next time his wife could translate, it’s quicker. Bye.', an:{t:'bad',dom:'cm',text:'<b>No teach-back and an unsafe suggestion.</b> “OK” is accepted as understanding, and suggesting a family member as interpreter risks errors and lost confidentiality.'}}
      ],
      verdict:'A fail — the medicine is fine but the communication isn’t. Metformin and structured education are correct, but the candidate spoke about the patient to the interpreter in jargon, dismissed his fear of injections, ignored his night shifts and accepted “OK” as understanding. Suggesting his wife interpret next time undermines safe, confidential care.'
    }
  }
);
