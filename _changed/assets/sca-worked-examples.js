/* ============================================================
   Worked example consultations for Reasoning GP
   Loaded by tools/sca-worked-examples.html as window.SCA_WORKED.
   Each station has a `pass` and a `fail` version with annotated
   turns. an.t = good|bad ; an.dom = dg|cm|rto (domain pill).
   Educational illustration only.
   ============================================================ */
window.SCA_WORKED = [
  /* ---------------- 1 · Tired all the time ---------------- */
  {
    title:'Tired all the time',
    type:'Face-to-face · 38F',
    brief:'Priya Shah, 38. Booked for "feeling exhausted". Records: 2 entries for fatigue in 6 months, normal FBC 3 months ago. Mother of two, works shifts. No medication.',
    link:'../tools/sca-simulator.html',
    pass:{
      grades:{dg:'CP', cm:'P', rto:'CP'},
      turns:[
        {r:'pt', s:'I\u2019m just shattered all the time, doctor. I don\u2019t know what\u2019s wrong with me.'},
        {r:'dr', s:'That sounds really wearing. Before we dig into tests \u2014 tell me what a typical day looks like, and when the tiredness is at its worst?', an:{t:'good',dom:'dg',text:'<b>Opens broad, then targets.</b> Invites the patient\u2019s story rather than firing a symptom checklist \u2014 high-quality data gathering.'}},
        {r:'pt', s:'I\u2019m up at 5 for the early shift, the kids are a handful, and I just crash by mid-afternoon. My husband says I\u2019ve been snappy too.'},
        {r:'dr', s:'You mentioned feeling snappy \u2014 how have things been in yourself, your mood and your sleep?', an:{t:'good',dom:'rto',text:'<b>Picks up the cue.</b> Follows the throwaway "snappy" rather than talking over it \u2014 this is where Relating to Others is won.'}},
        {r:'pt', s:'\u2026Honestly? I\u2019ve been a bit low. I cried in the car last week for no reason. I haven\u2019t told anyone that.'},
        {r:'dr', s:'Thank you for telling me \u2014 that took something. Can I ask a couple of questions about your mood, and whether you\u2019ve ever felt life isn\u2019t worth living?', an:{t:'good',dom:'gs',text:'<b>Acknowledges + safety.</b> Validates the disclosure and moves to a proportionate risk assessment \u2014 safe, human, unhurried.'}},
        {r:'pt', s:'No, never anything like that. Just worn down. I did wonder if my thyroid or my iron could be off again?'},
        {r:'dr', s:'Both very reasonable to check. Given the low mood alongside the tiredness, I\u2019d like to do bloods \u2014 thyroid, iron, sugar, and a general screen \u2014 and also talk about how we support your mood. How does that sound?', an:{t:'good',dom:'cm',text:'<b>Shared plan by minute 7.</b> Addresses the patient\u2019s idea AND the bigger picture, negotiated rather than imposed.'}},
        {r:'pt', s:'That sounds good. I was worried you\u2019d just say I\u2019m a tired mum.'},
        {r:'dr', s:'Not at all. So: bloods this week; I\u2019ll text the results; and I\u2019d like to see you in two weeks to talk through your mood properly \u2014 sooner if you feel worse or those low feelings deepen. Does that work?', an:{t:'good',dom:'cm',text:'<b>Specific safety-net + follow-up.</b> Symptoms, timeframe and route back \u2014 textbook closing.'}}
      ],
      verdict:'A clear pass. The candidate gathered data through the patient\u2019s own narrative, caught the emotional cue and converted it into a safe risk assessment, and built a shared plan that honoured the patient\u2019s ideas while widening the lens to mood \u2014 all closed with a specific safety-net. Fluent, humane, and on time.'
    },
    fail:{
      grades:{dg:'F', cm:'F', rto:'CF'},
      turns:[
        {r:'pt', s:'I\u2019m just shattered all the time, doctor. I don\u2019t know what\u2019s wrong with me.'},
        {r:'dr', s:'OK. Any weight loss? Night sweats? Fevers? Change in bowels? Cough? Any lumps anywhere?', an:{t:'bad',dom:'dg',text:'<b>Recited template.</b> A barrage of red-flag questions fired before understanding the problem \u2014 feels safe, reads as not listening.'}},
        {r:'pt', s:'Er\u2026 no, none of that. My husband says I\u2019ve been a bit snappy though.'},
        {r:'dr', s:'Right. And how\u2019s your appetite? Any tummy pain?', an:{t:'bad',dom:'rto',text:'<b>Cue missed.</b> "Snappy" \u2014 the door into her mood \u2014 sails straight past. This is the commonest single reason candidates fail RtO.'}},
        {r:'pt', s:'It\u2019s fine. I just feel exhausted all the time and a bit down, I suppose.'},
        {r:'dr', s:'Tiredness is very common. I\u2019ll do some blood tests to be safe and we\u2019ll go from there.', an:{t:'bad',dom:'cm',text:'<b>Premature closure.</b> "A bit down" is acknowledged with nothing. No mood assessment, no risk screen, no exploration of impact.'}},
        {r:'pt', s:'\u2026OK. What kind of blood tests?'},
        {r:'dr', s:'Just the standard ones. The receptionist will book you in. Anything else?', an:{t:'bad',dom:'cm',text:'<b>Vague plan, no shared understanding.</b> No explanation, no follow-up, no safety-net \u2014 and the consultation ends with the real problem untouched.'}}
      ],
      verdict:'A borderline fail \u2014 sometimes worse. The medicine isn\u2019t wrong (bloods are reasonable), but the candidate template-questioned instead of listening, walked past the mood cue twice, and never assessed the depression that is the actual diagnosis. Relating to Others collapses; Clinical Management is unsafe because the key problem is missed.'
    },
    // diff is attached to .pass and shown on the fail view
    get passDiff(){ return null; }
  },
  /* ---------------- 2 · The antibiotics request ---------------- */
  {
    title:'\u201cI just need antibiotics\u201d',
    type:'Telephone · 34M',
    brief:'Tom Reilly, 34. Telephone request: "chest infection, needs antibiotics". Records: well, non-smoker, no comorbidity. Cough 4 days.',
    link:'../tools/sca-simulator.html',
    pass:{
      grades:{dg:'P', cm:'CP', rto:'CP'},
      turns:[
        {r:'pt', s:'Hi doctor, I\u2019ve got a chest infection \u2014 I just need some antibiotics to clear it.'},
        {r:'dr', s:'Of course, let\u2019s sort you out. Tell me what you\u2019ve been getting, and what\u2019s worrying you most about it?', an:{t:'good',dom:'rto',text:'<b>Aligns, then explores.</b> Doesn\u2019t argue or agree \u2014 opens the door to the real concern behind the request.'}},
        {r:'pt', s:'Cough for four days, bit of green phlegm. I\u2019ve got my brother\u2019s wedding on Saturday and I can\u2019t be ill for it.'},
        {r:'dr', s:'Ah \u2014 so it\u2019s really about being well for Saturday. Let me check a few things to be safe: any breathlessness, chest pain, fever, or are you coughing up blood?', an:{t:'good',dom:'dg',text:'<b>Names the agenda + safety screen.</b> Surfaces the wedding (the true expectation) and rules out pneumonia features over the phone.'}},
        {r:'pt', s:'No, none of that. I feel basically fine in myself, just the cough.'},
        {r:'dr', s:'That\u2019s reassuring \u2014 it points to a viral chest infection, where antibiotics honestly don\u2019t speed things up and can cause side effects. The good news is most people are over the worst within a week.', an:{t:'good',dom:'cm',text:'<b>Honest, evidence-based, kind.</b> Explains the "no" in terms the patient cares about (being well), not a lecture on resistance.'}},
        {r:'pt', s:'Right\u2026 but what if it gets worse before Saturday?'},
        {r:'dr', s:'Good question. I can give you a back-up prescription to use only if you\u2019re not improving in 2\u20133 days or you get worse \u2014 plus what to watch for. And honey and regular paracetamol genuinely help the cough.', an:{t:'good',dom:'cm',text:'<b>Shared, flexible plan.</b> The delayed-prescription compromise meets the patient halfway while staying evidence-based \u2014 strong stewardship.'}},
        {r:'pt', s:'That actually sounds fair. Thanks for explaining it.'},
        {r:'dr', s:'No problem. So: self-care now, the back-up only if needed, and call us back urgently if you become breathless, feverish, or cough up blood. Enjoy the wedding.', an:{t:'good',dom:'cm',text:'<b>Specific safety-net.</b> Clear symptoms, route back, and a human sign-off.'}}
      ],
      verdict:'A clear pass on management and relating. The candidate aligned with the request, uncovered and named the real expectation (the wedding), excluded the dangerous features, and reached a shared decision \u2014 a back-up prescription \u2014 that respected the patient while practising good antibiotic stewardship. The "no" landed because it was framed around what mattered to him.'
    },
    fail:{
      grades:{dg:'F', cm:'F', rto:'F'},
      turns:[
        {r:'pt', s:'Hi doctor, I\u2019ve got a chest infection \u2014 I just need some antibiotics to clear it.'},
        {r:'dr', s:'We don\u2019t really give antibiotics for coughs anymore \u2014 they\u2019re usually viral. It\u2019ll get better on its own.', an:{t:'bad',dom:'rto',text:'<b>Blunt refusal up front.</b> Correct medicine, terrible delivery \u2014 the patient is contradicted before being heard.'}},
        {r:'pt', s:'But it\u2019s really chesty and green. I\u2019ve had antibiotics for this before.'},
        {r:'dr', s:'Green phlegm doesn\u2019t mean bacterial. There\u2019s a lot of evidence on this. Antibiotic resistance is a big problem.', an:{t:'bad',dom:'rto',text:'<b>Lectures.</b> Defends the guideline instead of exploring the concern. The wedding \u2014 the whole reason for the call \u2014 never surfaces.'}},
        {r:'pt', s:'\u2026Right. So you\u2019re not going to help me then.'},
        {r:'dr', s:'I am helping \u2014 paracetamol and fluids. You don\u2019t need antibiotics.', an:{t:'bad',dom:'dg',text:'<b>No safety assessment.</b> Breathlessness, chest pain, fever, haemoptysis never asked \u2014 a pneumonia could be missed entirely.'}},
        {r:'pt', s:'Fine. Bye.'},
        {r:'dr', s:'OK, take care.', an:{t:'bad',dom:'cm',text:'<b>No safety-net, no compromise, patient alienated.</b> No back-up plan, no "come back if\u2026" \u2014 and the relationship is damaged.'}}
      ],
      verdict:'A fail across the board despite "correct" prescribing. The candidate was right that antibiotics aren\u2019t indicated but never excluded serious illness, never discovered why it mattered, and delivered the decision as a refusal rather than a shared plan. In the SCA, being right is not enough \u2014 how you reach and communicate the decision is what is marked.'
    }
  },
  /* ---------------- 3 · Breaking news: new diabetes ---------------- */
  {
    title:'Explaining a new diagnosis',
    type:'Face-to-face · 55M',
    brief:'Derek Holt, 55. Booked to discuss blood results. HbA1c 59 mmol/mol (new type 2 diabetes). BMI 31, BP 142/88. Drives a taxi. Anxious by nature.',
    link:'../cases/type-2-diabetes.html',
    pass:{
      grades:{dg:'P', cm:'CP', rto:'CP'},
      turns:[
        {r:'pt', s:'You said the blood test was back \u2014 is everything OK?'},
        {r:'dr', s:'Thanks for coming in. Before I go through it \u2014 what were you expecting it might show, and is there anything you\u2019ve been worried about?', an:{t:'good',dom:'rto',text:'<b>Elicits ideas/concerns first.</b> Calibrates the news to the person \u2014 and uncovers any specific fear before delivering it.'}},
        {r:'pt', s:'My dad had diabetes and lost a toe. I\u2019ve been dreading you\u2019d say that.'},
        {r:'dr', s:'I\u2019m really glad you told me that. The result does show your blood sugar is in the diabetes range \u2014 [pause] \u2014 and I know that word carries a lot, especially with your dad. Can I explain what it means for you specifically?', an:{t:'good',dom:'rto',text:'<b>Warning shot + pause + addresses the fear.</b> Names the diagnosis clearly, then immediately separates his situation from his father\u2019s.'}},
        {r:'pt', s:'\u2026OK. Yeah, please.'},
        {r:'dr', s:'Yours has been caught early, before any symptoms or damage. Most of what your dad went through came from years of uncontrolled diabetes \u2014 and we now manage it very differently. With some changes and the right support, lots of people keep it well controlled.', an:{t:'good',dom:'cm',text:'<b>Honest, hopeful, individualised.</b> No false reassurance, but a realistic, encouraging frame the patient can act on.'}},
        {r:'pt', s:'But I drive a taxi \u2014 will I lose my licence?'},
        {r:'dr', s:'A really important question. Diet-controlled or tablet-controlled diabetes usually means you can keep driving \u2014 there are some rules we\u2019ll go through, and only certain treatments need declaring. We\u2019ll sort that together so your livelihood is protected.', an:{t:'good',dom:'cm',text:'<b>Picks up the livelihood cue.</b> Addresses the DVLA worry head-on rather than deferring \u2014 this is what the case is really testing.'}},
        {r:'pt', s:'That\u2019s a relief. So what happens now?'},
        {r:'dr', s:'Let\u2019s not do everything today. The first steps: some lifestyle changes we\u2019ll choose together, a few more checks (cholesterol, kidneys, eyes, feet), and I\u2019ll book you with our diabetes nurse. I\u2019ll write this down for you. How does that feel?', an:{t:'good',dom:'cm',text:'<b>Staged, shared plan + written info.</b> Avoids overwhelming an anxious patient; checks back in \u2014 strong management.'}}
      ],
      verdict:'A clear pass. The candidate elicited the patient\u2019s fears before delivering the diagnosis, gave a clear warning shot, separated his outcome from his father\u2019s, and tackled the unspoken driver \u2014 his taxi licence \u2014 directly. The plan was staged, shared and written down. Bad news delivered with skill and a management plan that fit the person.'
    },
    fail:{
      grades:{dg:'P', cm:'F', rto:'CF'},
      turns:[
        {r:'pt', s:'You said the blood test was back \u2014 is everything OK?'},
        {r:'dr', s:'Yes, so your HbA1c is 59, which means you\u2019ve got type 2 diabetes. We\u2019ll start you on metformin and you\u2019ll need to lose weight.', an:{t:'bad',dom:'rto',text:'<b>No warning shot, no ICE.</b> The diagnosis is dropped cold, with no sense of the person receiving it \u2014 the single most common bad-news error.'}},
        {r:'pt', s:'Diabetes?! My dad lost a toe to that\u2026'},
        {r:'dr', s:'It\u2019s very manageable these days. So, metformin once a day, cut down on sugar, and we\u2019ll recheck in three months.', an:{t:'bad',dom:'rto',text:'<b>Fear flattened.</b> "It\u2019s manageable" talks straight over a real, named fear instead of exploring it \u2014 generic reassurance convinces no one.'}},
        {r:'pt', s:'But I drive a taxi for a living\u2026'},
        {r:'dr', s:'You\u2019ll be fine. Most people are. Let\u2019s get the prescription sorted.', an:{t:'bad',dom:'cm',text:'<b>Livelihood cue dismissed.</b> The DVLA question \u2014 the heart of the case \u2014 is brushed aside with false reassurance and no actual information.'}},
        {r:'pt', s:'\u2026Right.'},
        {r:'dr', s:'I\u2019ll print the prescription. Any questions? No? Great, see you in three months.', an:{t:'bad',dom:'cm',text:'<b>Information overload, no shared plan, no check of understanding.</b> An anxious patient leaves frightened, uninformed about driving, and not on side.'}}
      ],
      verdict:'A fail on Relating to Others and Management. The diagnosis is correct and metformin is reasonable, but the news was broken with no warning and no exploration of the patient\u2019s fears, the father-and-toe terror was dismissed, and the licence question \u2014 the case\u2019s real test \u2014 was waved away. Right diagnosis, wrong consultation.'
    }
  },
  /* ---------------- 4 · The angry patient (complaint) ---------------- */
  {
    title:'The angry patient',
    type:'Face-to-face · 47M',
    brief:'Mark Ellis, 47. Booked "urgent, wants to complain". His knee-pain referral was rejected by the service last week; he arrives visibly angry.',
    link:'../tools/sca-simulator.html',
    pass:{
      grades:{dg:'P', cm:'P', rto:'CP'},
      turns:[
        {r:'pt', s:'This is a disgrace. I waited three weeks and now the referral\u2019s rejected? Useless, the lot of you.'},
        {r:'dr', s:'I can hear how frustrated you are, and you\u2019ve every right to be \u2014 being left waiting and then knocked back isn\u2019t good enough. Tell me what happened, from your side?', an:{t:'good',dom:'rto',text:'<b>Acknowledges the emotion first.</b> Validates the anger before any defence \u2014 this de-escalates and is what RtO rewards.'}},
        {r:'pt', s:'I\u2019ve been in agony, I can\u2019t work, and nobody\u2019s done anything. Just a letter saying \u201cdoesn\u2019t meet criteria\u201d.'},
        {r:'dr', s:'That\u2019s really tough \u2014 pain that stops you working and feeling unheard. I\u2019m sorry it\u2019s landed like this. Let me look at exactly what happened so I can be straight with you.', an:{t:'good',dom:'rto',text:'<b>Empathy + ownership, no blame.</b> Apologises for the experience without making excuses or blaming colleagues.'}},
        {r:'pt', s:'Fine. But I want to make a complaint.'},
        {r:'dr', s:'Absolutely, and I\u2019ll make sure you know how \u2014 your feedback matters. First, can we sort the thing that\u2019s actually hurting you? I can see the rejection reason and I think we can re-refer properly.', an:{t:'good',dom:'cm',text:'<b>Supports the complaint AND solves the problem.</b> Not defensive about the complaint; pivots to fixing the clinical issue.'}},
        {r:'pt', s:'\u2026Go on then.'},
        {r:'dr', s:'They needed evidence of physio and imaging first, which wasn\u2019t in the letter. Let\u2019s get a knee X-ray and physio today, and I\u2019ll re-refer with those so it meets criteria \u2014 and flag the delay.', an:{t:'good',dom:'cm',text:'<b>Concrete, honest plan.</b> Explains the rejection transparently and turns it into action \u2014 management addressing the real grievance.'}},
        {r:'pt', s:'Right. That\u2019s more like it. Sorry for shouting \u2014 I\u2019m at the end of my tether.'},
        {r:'dr', s:'No need to apologise \u2014 you\u2019re in pain and you\u2019ve been let down. I\u2019ll get you the complaint information too, and we\u2019ll review once the tests are back. Deal?', an:{t:'good',dom:'rto',text:'<b>Holds the alliance.</b> Accepts the apology, keeps the door open, honours the complaint route \u2014 patient leaves an ally.'}}
      ],
      verdict:'A strong pass. The candidate let the patient vent, validated the anger before anything else, apologised without being defensive or blaming colleagues, supported the right to complain, and solved the underlying problem with a transparent, concrete plan.'
    },
    fail:{
      grades:{dg:'F', cm:'F', rto:'CF'},
      turns:[
        {r:'pt', s:'This is a disgrace. I waited three weeks and now the referral\u2019s rejected? Useless, the lot of you.'},
        {r:'dr', s:'There\u2019s no need to be aggressive. It wasn\u2019t me who rejected it \u2014 that\u2019s the hospital\u2019s decision.', an:{t:'bad',dom:'rto',text:'<b>Defensive + deflecting.</b> Polices the tone and blames another service \u2014 inflames the anger and abandons the alliance.'}},
        {r:'pt', s:'So it\u2019s nothing to do with you? Typical.'},
        {r:'dr', s:'I just follow the criteria. If they say it doesn\u2019t meet criteria, there\u2019s not much I can do.', an:{t:'bad',dom:'cm',text:'<b>Helplessness.</b> Hides behind process instead of finding a solution.'}},
        {r:'pt', s:'Then what am I supposed to do about my knee?!'},
        {r:'dr', s:'You can put in a complaint if you\u2019re unhappy. I can\u2019t do anything else today.', an:{t:'bad',dom:'cm',text:'<b>Complaint used as a brush-off.</b> Offered to end the conversation, not to help \u2014 the knee is never addressed.'}},
        {r:'pt', s:'Forget it. Waste of time.'},
        {r:'dr', s:'OK.', an:{t:'bad',dom:'rto',text:'<b>Patient leaves angrier and unhelped.</b> No empathy, apology or plan \u2014 a clear fail.'}}
      ],
      verdict:'A clear fail. Faced with anger the candidate became defensive, policed the tone, blamed the hospital and hid behind \u201ccriteria\u201d. The complaint was used to close the consultation down, and the knee \u2014 the reason he came \u2014 went unmanaged.'
    }
  },
  /* ---------------- 5 · Safeguarding (a bruise) ---------------- */
  {
    title:'A worrying bruise',
    type:'Face-to-face · mother + 14-month-old',
    brief:'Chloe, 24, brings her 14-month-old for a "rash". You notice finger-mark bruising on his upper arm; her account is vague and she seems frightened of her phone buzzing (her partner).',
    link:'../cases/safeguarding.html',
    pass:{
      grades:{dg:'P', cm:'CP', rto:'CP'},
      turns:[
        {r:'pt', s:'It\u2019s just a rash on his tummy, doctor. He\u2019s fine otherwise. I can\u2019t stay long.'},
        {r:'dr', s:'Of course, let\u2019s have a look at him. While I check him over \u2014 how have things been at home for you both lately?', an:{t:'good',dom:'rto',text:'<b>Gentle open door.</b> Examines the child while creating space for disclosure \u2014 unforced, non-judgmental.'}},
        {r:'pt', s:'\u2026Fine. Bit stressful. He\u2019s always bumping into things, you know what they\u2019re like.'},
        {r:'dr', s:'They do get into everything. I\u2019ve noticed some bruising on his arm here \u2014 these little marks. Can you tell me how those happened?', an:{t:'good',dom:'dg',text:'<b>Notices and asks neutrally.</b> Doesn\u2019t accept the vague explanation; explores the injury without accusing.'}},
        {r:'pt', s:'I\u2019m not sure\u2026 he must have done it somehow. Look, my partner\u2019s waiting, he gets cross if I\u2019m late.'},
        {r:'dr', s:'I can hear you\u2019re under pressure. I have to be honest because I think a lot of you as his mum: those marks look like finger-marks, and my first job is to make sure he\u2019s safe \u2014 and you too.', an:{t:'good',dom:'gs',text:'<b>Honest \u2014 doesn\u2019t collude.</b> Names it kindly, doesn\u2019t promise secrecy, frames it around the child\u2019s welfare. The hinge of the case.'}},
        {r:'pt', s:'Please don\u2019t make a fuss \u2014 he\u2019ll be furious. It\u2019ll make everything worse for me.'},
        {r:'dr', s:'That tells me you might not feel safe either, and I want to help. I won\u2019t tell your partner anything, but I do have to involve our safeguarding team today \u2014 not to take anyone away, but to get you both support. Are you safe to go home right now?', an:{t:'good',dom:'cm',text:'<b>Acts on concern + checks safety.</b> Explains the referral as support; assesses the mother\u2019s safety too (Think Family).'}},
        {r:'pt', s:'\u2026I don\u2019t know. Sometimes it\u2019s bad.'},
        {r:'dr', s:'Thank you for trusting me. Let\u2019s sort somewhere safe and the right support now \u2014 I\u2019ll stay with you through this, and here\u2019s how to get help any time.', an:{t:'good',dom:'rto',text:'<b>Supports without abandoning.</b> Keeps the alliance, safety-plans the abuse, follows through.'}}
      ],
      verdict:'A clear pass. The candidate created space for disclosure, refused the inconsistent explanation, named the safeguarding concern honestly without promising secrecy, and acted on reasonable suspicion \u2014 referring as support \u2014 while recognising the mother\u2019s own risk (Think Family) and safety-planning. Child\u2019s welfare paramount, delivered with compassion.'
    },
    fail:{
      grades:{dg:'F', cm:'CF', rto:'F'},
      turns:[
        {r:'pt', s:'It\u2019s just a rash on his tummy, doctor. He\u2019s fine otherwise. I can\u2019t stay long.'},
        {r:'dr', s:'Let\u2019s have a quick look. Yes, that\u2019s just a viral rash, nothing to worry about.', an:{t:'bad',dom:'dg',text:'<b>Tunnel vision on the rash.</b> Never properly examines or registers the bruising.'}},
        {r:'pt', s:'Oh good. He does have a couple of bruises but he\u2019s always bumping into things.'},
        {r:'dr', s:'That\u2019s toddlers for you! Always covered in bruises at this age. Nothing to worry about.', an:{t:'bad',dom:'gs',text:'<b>Colludes with the explanation.</b> Accepts "always bumping into things" at face value \u2014 the most dangerous error in a safeguarding case.'}},
        {r:'pt', s:'Thanks. Please don\u2019t make a fuss, my partner hates appointments.'},
        {r:'dr', s:'No problem, I won\u2019t keep you. Pop some cream on the rash and he\u2019ll be fine.', an:{t:'bad',dom:'cm',text:'<b>Promises no fuss; misses the abuse cue.</b> Lets them leave with no safeguarding action.'}},
        {r:'pt', s:'Brilliant, thank you doctor.'},
        {r:'dr', s:'Take care, bye now.', an:{t:'bad',dom:'gs',text:'<b>A child at risk goes home unprotected.</b> No examination of the injury, no referral, no consideration of the mother.'}}
      ],
      verdict:'A clear fail with potentially serious consequences. The candidate anchored on the "rash", accepted an inconsistent explanation for finger-mark bruising, colluded with "no fuss" and missed the domestic-abuse cue \u2014 taking no safeguarding action. Accepting the easy explanation and failing to act on reasonable concern is an automatic fail.'
    }
  },
  /* ---------------- 6 · The crowded agenda (multimorbidity) ---------------- */
  {
    title:'The crowded agenda',
    type:'Face-to-face · 71F + daughter',
    brief:'Margaret, 71, comes with her daughter, who has a written list of seven problems. Records: COPD, type 2 diabetes, osteoarthritis, low mood, recent fall. 12 minutes.',
    link:'../cases/multimorbidity-polypharmacy.html',
    pass:{
      grades:{dg:'P', cm:'CP', rto:'CP'},
      turns:[
        {r:'pt', s:'(Daughter) I\u2019ve made a list \u2014 Mum\u2019s knees, her breathing, her sugars, the dizziness, her mood, her sleep, and these tablets she keeps forgetting.'},
        {r:'dr', s:'That\u2019s a really helpful list \u2014 thank you. We won\u2019t do justice to all seven in one visit, so can I check with both of you: Margaret, what\u2019s troubling YOU most today?', an:{t:'good',dom:'rto',text:'<b>Agenda-setting + centres the patient.</b> Acknowledges the list but negotiates focus, and gently brings Margaret\u2019s own voice in alongside her daughter\u2019s.'}},
        {r:'pt', s:'(Margaret) Honestly\u2026 it\u2019s the dizziness and the fall. I\u2019m scared of falling again.'},
        {r:'dr', s:'That makes complete sense \u2014 and a fall is important for your safety too, so let\u2019s make that today\u2019s priority. Tell me about the dizziness \u2014 is it when you stand up?', an:{t:'good',dom:'dg',text:'<b>Negotiated priority.</b> Aligns the clinical risk (falls) with the patient\u2019s own concern \u2014 then gathers focused data instead of scattering across seven issues.'}},
        {r:'pt', s:'(Margaret) Yes, when I get up I go all woozy. And I do take a lot of tablets.'},
        {r:'dr', s:'That\u2019s a useful clue \u2014 some blood-pressure and other tablets can cause that on standing. I\u2019d like to check your lying and standing blood pressure and review the medicines that might be contributing.', an:{t:'good',dom:'cm',text:'<b>Targeted, safe management.</b> Links the dizziness to likely drug causes and proposes a focused, evidence-based action (postural BP + medication review).'}},
        {r:'pt', s:'(Daughter) But what about her mood and her sugars? We came about all of it.'},
        {r:'dr', s:'You\u2019re right that those matter, and I don\u2019t want to brush them aside. Here\u2019s what I suggest: we sort the falls risk safely today, and I\u2019ll book a longer follow-up and a medication review for the mood, sugars and the rest \u2014 so each gets proper time. Does that feel fair?', an:{t:'good',dom:'cm',text:'<b>Safe netting of the deferred problems.</b> Validates the daughter, doesn\u2019t abandon the other issues, and arranges structured follow-up \u2014 realistic multimorbidity care.'}},
        {r:'pt', s:'(Daughter) \u2026Yes, that\u2019s fair. As long as the mood gets looked at.'},
        {r:'dr', s:'It will \u2014 I\u2019ll flag it specifically. For today: postural BP, a look at the tablets, and safety advice for falls. Come back sooner if she has another fall or faints. I\u2019ll write the plan down for you both.', an:{t:'good',dom:'cm',text:'<b>Clear plan + safety-net + written summary.</b> Closes a complex consultation with structure and a route back.'}}
      ],
      verdict:'A pass in a notoriously hard format. The candidate set the agenda explicitly, negotiated a shared priority that aligned clinical risk with the patient\u2019s own concern, and \u2014 crucially \u2014 brought Margaret\u2019s voice in rather than consulting only with the daughter. The deferred problems were safely netted with structured follow-up, not abandoned.'
    },
    fail:{
      grades:{dg:'F', cm:'F', rto:'F'},
      turns:[
        {r:'pt', s:'(Daughter) I\u2019ve made a list \u2014 Mum\u2019s knees, her breathing, her sugars, the dizziness, her mood, her sleep, and these tablets.'},
        {r:'dr', s:'OK, let\u2019s go through them. Knees \u2014 I\u2019ll do some pain relief. Breathing \u2014 keep using the inhalers. Sugars \u2014 I\u2019ll check the HbA1c\u2026', an:{t:'bad',dom:'cm',text:'<b>Tries to do all seven.</b> No agenda-setting; a scattergun of half-answers that will run out of time and address nothing properly.'}},
        {r:'pt', s:'(Daughter) And the dizziness, she keeps nearly falling.'},
        {r:'dr', s:'Right, I\u2019ll add that to the list. Sleep \u2014 try a warm drink. Mood \u2014 I can start an antidepressant if you like\u2026', an:{t:'bad',dom:'dg',text:'<b>No data gathering.</b> The falls/dizziness \u2014 the safety issue \u2014 is reduced to a list item; no postural BP, no medication thinking.'}},
        {r:'pt', s:'(Margaret) I didn\u2019t really want tablets for my mood\u2026'},
        {r:'dr', s:'We\u2019ll sort that out. We\u2019re nearly out of time \u2014 I\u2019ll do the prescriptions and you can book again.', an:{t:'bad',dom:'rto',text:'<b>Patient overruled, daughter-led.</b> Margaret\u2019s objection is talked over; the consultation is driven by the list, not the person.'}},
        {r:'pt', s:'(Daughter) So nothing\u2019s really been decided?'},
        {r:'dr', s:'I\u2019ve done what I can in the time. Make another appointment for the rest.', an:{t:'bad',dom:'cm',text:'<b>No priority, no safety-net, falls risk unmanaged.</b> Everything touched, nothing managed \u2014 and the most dangerous problem is missed.'}}
      ],
      verdict:'A fail. Faced with a crowded agenda the candidate tried to address everything at once, set no priorities, gathered no real data, and overrode the patient\u2019s own view. The falls/dizziness \u2014 the safety-critical issue \u2014 was never properly managed, and Margaret left having been consulted about rather than with.'
    }
  },
  /* ---------------- 7 · Health beliefs (vaccine-hesitant parent) ---------------- */
  {
    title:'\u201cI don\u2019t want the vaccine\u201d',
    type:'Face-to-face · parent of 12-month-old',
    brief:'Parent of a 12-month-old declines the MMR vaccine, citing things she has read online. The child is well. The clinic has 12 minutes booked.',
    link:'../tools/sca-simulator.html',
    pass:{
      grades:{dg:'P', cm:'P', rto:'CP'},
      turns:[
        {r:'pt', s:'I\u2019ve decided I don\u2019t want him having the MMR. I\u2019ve read some worrying things and I\u2019m not comfortable with it.'},
        {r:'dr', s:'Thank you for being honest with me \u2014 it\u2019s clear you\u2019re thinking carefully about what\u2019s best for him, which is exactly what a good parent does. Can you tell me what specifically is worrying you?', an:{t:'good',dom:'rto',text:'<b>Validates, doesn\u2019t confront.</b> Respects the parent\u2019s autonomy and motivation before any information \u2014 this keeps the conversation open.'}},
        {r:'pt', s:'I\u2019ve read it might be linked to autism, and that it\u2019s a lot for a small body all at once.'},
        {r:'dr', s:'Those are really common and understandable worries, and I\u2019m glad you\u2019ve raised them. Would it be OK if I shared what the evidence actually shows on each \u2014 and you can stop me or push back any time?', an:{t:'good',dom:'rto',text:'<b>Asks permission to inform.</b> Doesn\u2019t lecture; treats it as a shared conversation, which is what shifts beliefs.'}},
        {r:'pt', s:'Go on then.'},
        {r:'dr', s:'The autism link came from a single discredited study that was withdrawn, and very large studies since \u2014 millions of children \u2014 have found no link at all. And a child\u2019s immune system handles far more every day than vaccines contain. But I want to be honest: no decision is pressure-free, and it\u2019s still your choice.', an:{t:'good',dom:'cm',text:'<b>Honest, balanced, non-coercive.</b> Corrects the misinformation clearly without dismissing the parent, and explicitly preserves her autonomy.'}},
        {r:'pt', s:'I appreciate that. But I\u2019m still not sure today.'},
        {r:'dr', s:'That\u2019s completely OK \u2014 you don\u2019t have to decide this minute. Can I mention the one thing I\u2019d feel I hadn\u2019t done my job without saying? Measles itself can be serious, and cases are rising. I\u2019d hate him to be caught out by it.', an:{t:'good',dom:'cm',text:'<b>Frames the risk of NOT vaccinating, gently.</b> Gives the safety message honestly while respecting her pace \u2014 not a scare tactic.'}},
        {r:'pt', s:'I hadn\u2019t thought of it that way. Let me go and read the proper information you mentioned and come back.'},
        {r:'dr', s:'That sounds like a really sensible plan. I\u2019ll give you the trusted information, the door\u2019s always open, and there\u2019s no judgement whatever you decide. Shall we book a follow-up to talk again?', an:{t:'good',dom:'rto',text:'<b>Keeps the relationship and the door open.</b> No coercion, a concrete next step \u2014 the consultation that most often changes minds over time.'}}
      ],
      verdict:'A pass. The candidate respected the parent\u2019s autonomy and intelligence, explored her specific fears before correcting them, gave honest balanced information without lecturing, and delivered the safety message (the risk of measles) gently. Crucially, she left with the relationship intact and a route back \u2014 which is how vaccine decisions actually change.'
    },
    fail:{
      grades:{dg:'F', cm:'F', rto:'CF'},
      turns:[
        {r:'pt', s:'I\u2019ve decided I don\u2019t want him having the MMR. I\u2019ve read some worrying things online.'},
        {r:'dr', s:'That\u2019s all misinformation, I\u2019m afraid. The autism thing was completely debunked years ago. You really should vaccinate him.', an:{t:'bad',dom:'rto',text:'<b>Dismissive and instructive.</b> Labels her concerns "misinformation" and tells her what to do \u2014 the parent feels judged and digs in.'}},
        {r:'pt', s:'Well I\u2019ve read otherwise, and it\u2019s my child.'},
        {r:'dr', s:'If you don\u2019t vaccinate, he could get seriously ill or even die. You\u2019d be putting other children at risk too.', an:{t:'bad',dom:'cm',text:'<b>Scare tactics + guilt.</b> Frightening and shaming a hesitant parent hardens the position and breaks trust \u2014 the opposite of what works.'}},
        {r:'pt', s:'Now you\u2019re just trying to scare me.'},
        {r:'dr', s:'I\u2019m telling you the facts. It\u2019s your decision but I think you\u2019re making a mistake.', an:{t:'bad',dom:'rto',text:'<b>Judgemental closure.</b> Tells her she\u2019s wrong; explores nothing, offers no information she\u2019ll accept, leaves her alienated.'}},
        {r:'pt', s:'I think we\u2019re done here.'},
        {r:'dr', s:'Fine. The offer\u2019s there if you change your mind.', an:{t:'bad',dom:'cm',text:'<b>Relationship damaged, mind unchanged.</b> No exploration, no shared information, no follow-up \u2014 she is less likely to vaccinate now, not more.'}}
      ],
      verdict:'A clear fail on Relating to Others. The medicine (MMR is safe and recommended) is right, but the approach \u2014 dismissing her concerns, lecturing, then resorting to fear and guilt \u2014 entrenches hesitancy and destroys the relationship. Health-belief consultations are won by exploring and respecting, not by being right at the patient.'
    }
  },
  /* ---------------- 8 · "Something is being missed" ---------------- */
  {
    title:'\u201cSomething is being missed\u201d',
    type:'Face-to-face · 41F',
    brief:'Hannah Okafor, 41. Booked for "ongoing symptoms \u2014 wants more tests". Records: 14 contacts in 8 months \u2014 headaches, fatigue, abdominal discomfort, palpitations. Bloods, ECG, abdominal USS, CT head all normal. No red flags documented.',
    link:'../cases/anxiety.html',
    pass:{
      grades:{dg:'CP', cm:'P', rto:'CP'},
      turns:[
        {r:'pt', s:'Every test comes back "normal" but I do not feel normal. I think something is being missed and I want a referral to a specialist.'},
        {r:'dr', s:'It sounds exhausting \u2014 feeling genuinely unwell and being told everything looks fine. That is a horrible place to be. Can you tell me what a bad day is actually like for you?', an:{t:'good',dom:'rto',text:'<b>Validates the suffering, not the test result.</b> Normal investigations do not mean the symptoms are not real \u2014 leading with that is what opens the consultation.'}},
        {r:'pt', s:'I wake up with a pounding head, my heart races, my stomach is in knots. I have read it could be something with my nerves or a hidden cancer. I cannot stop thinking about it.'},
        {r:'dr', s:'Thank you \u2014 that gives me a real picture. You mentioned you cannot stop thinking about it. How much of your day is taken up worrying about your health?', an:{t:'good',dom:'dg',text:'<b>Follows the cue into health anxiety.</b> Gently widens from the symptom list to the worry that is driving it \u2014 the actual diagnosis.'}},
        {r:'pt', s:'Honestly? Most of it. I check my pulse, I look things up, I cannot sleep. My husband says I have changed.'},
        {r:'dr', s:'That is a huge amount to carry. Can I offer a thought \u2014 not instead of taking your symptoms seriously, but alongside it? Sometimes when the body is under constant stress and worry, it produces very real physical symptoms \u2014 the racing heart, the headaches, the gut. The symptoms are real; the cause may not be a hidden disease.', an:{t:'good',dom:'cm',text:'<b>Offers a positive explanation, tentatively.</b> Names a mechanism rather than a void \u2014 "real symptoms, different cause" \u2014 without dismissing or promising another scan.'}},
        {r:'pt', s:'So you think it is all in my head?'},
        {r:'dr', s:'No \u2014 the opposite. Your symptoms are completely real and I am not closing the door. What I am suggesting is that more scans, when the ones we have done are reassuring, often feed the worry rather than ease it. I would like us to work on the symptoms and the worry together, and I will absolutely re-examine anything that changes.', an:{t:'good',dom:'rto',text:'<b>Reframes without abandoning.</b> Explains why endless testing harms, holds the safety-net open, and avoids the trap of an unnecessary referral that reinforces the fear.'}},
        {r:'pt', s:'I do not want to feel like this forever. What would that actually involve?'},
        {r:'dr', s:'A few things, at your pace: regular appointments with me \u2014 booked in advance, so you are not chasing symptoms \u2014 rather than a new doctor each time; some support for the anxiety, which can be talking therapy; and an agreement that we investigate new or changing symptoms but resist re-running normal tests. How does that sit?', an:{t:'good',dom:'cm',text:'<b>Structured, shared plan.</b> Scheduled continuity, treats the anxiety, and a clear rule for re-investigation \u2014 the evidence-based management of MUS/health anxiety.'}},
        {r:'pt', s:'I think I could try that. It would be a relief to see the same person, actually.'},
        {r:'dr', s:'Then let us do that. I will book you in with me in two weeks, send the talking-therapy referral, and if anything new or different comes up before then, I want to know. We are doing this together.', an:{t:'good',dom:'cm',text:'<b>Continuity + specific safety-net.</b> Same clinician, a route back for genuine change \u2014 builds the trust that makes the plan work.'}}
      ],
      verdict:'A pass. The candidate validated genuinely distressing symptoms without endorsing the belief that they signal undiagnosed disease, followed the cue into health anxiety, and offered a positive, tangible explanation rather than a bare "your tests are normal". The plan \u2014 continuity, treating the anxiety, and a clear rule on re-investigation with a safety-net \u2014 is exactly the management of medically unexplained symptoms.'
    },
    fail:{
      grades:{dg:'CF', cm:'F', rto:'F'},
      turns:[
        {r:'pt', s:'Every test comes back "normal" but I do not feel normal. I think something is being missed and I want a referral to a specialist.'},
        {r:'dr', s:'Well, I have your results here and everything is genuinely normal \u2014 bloods, scan, heart tracing, the lot. There is really nothing to find.', an:{t:'bad',dom:'rto',text:'<b>Leads with the negative result.</b> "Nothing to find" lands as "I do not believe you" \u2014 the patient feels dismissed and pushes harder.'}},
        {r:'pt', s:'So why do I feel like this? Something has to be wrong.'},
        {r:'dr', s:'Sometimes there is no explanation. I could refer you to be safe, I suppose, if it would put your mind at rest.', an:{t:'bad',dom:'cm',text:'<b>Capitulates to reduce conflict.</b> An unnecessary referral feeds the health anxiety and teaches the patient that pressure yields more tests \u2014 harmful and unsafe management.'}},
        {r:'pt', s:'Yes, I would like that. And can I have a scan of my head again?'},
        {r:'dr', s:'I will put the referral in. Re-scanning is probably not needed but we will see what the specialist says.', an:{t:'bad',dom:'cm',text:'<b>No explanation, no plan for the anxiety.</b> The driver \u2014 health anxiety \u2014 is never named or addressed; the cycle of testing and worry is reinforced.'}},
        {r:'pt', s:'OK. I just want answers.'},
        {r:'dr', s:'Hopefully the specialist will sort it. Anything else today?', an:{t:'bad',dom:'gs',text:'<b>Problem passed on, untouched.</b> No continuity, no positive explanation, no treatment of the worry \u2014 the patient will be back, more anxious, more tests deep.'}}
      ],
      verdict:'A fail. By leading with "nothing is wrong" and then caving to an unnecessary referral, the candidate both alienated the patient and reinforced the health anxiety driving her presentations. Medically unexplained symptoms are managed by validating the symptoms, offering a positive explanation, treating the anxiety and providing continuity \u2014 not by serial testing and onward referral to avoid a difficult conversation.'
    }
  },
  /* ---------------- 9 · The feverish child (phone) ---------------- */
  {
    title:'The feverish child',
    type:'Telephone · mother of 2y',
    brief:'Telephone call from the mother of Leo, 2. "High temperature since yesterday, not himself." Records: fully immunised, no significant history. Triage call \u2014 decide assess remotely, see, or escalate.',
    link:'../tools/sca-simulator.html',
    pass:{
      grades:{dg:'P', cm:'CP', rto:'CP'},
      turns:[
        {r:'pt', s:'He has had a temperature since yesterday, around 39, and he is just not himself. I gave Calpol but I am worried.'},
        {r:'dr', s:'You know Leo best, so I am going to take your worry seriously. I am going to ask some specific questions to work out how quickly he needs to be seen \u2014 is that OK? First, his breathing: is it fast, or are you seeing the skin suck in around his ribs or tummy?', an:{t:'good',dom:'rto',text:'<b>Respects parental instinct + signposts.</b> Tells the parent why the questions matter and starts with the highest-yield safety question over the phone.'}},
        {r:'pt', s:'His breathing seems OK I think, no sucking in. He is just hot and grizzly and very clingy.'},
        {r:'dr', s:'Good, that is reassuring. Now his colour and his alertness: is he a normal colour, or pale, blue or blotchy? And when he is awake, does he look at you and respond, or is he floppy and hard to rouse?', an:{t:'good',dom:'dg',text:'<b>Traffic-light assessment by phone.</b> Systematically works the NICE fever red flags \u2014 colour, activity, breathing, circulation \u2014 the structured remote safety net.'}},
        {r:'pt', s:'He is his normal colour and he still grabs his toys, but he is more sleepy than usual. He had a wet nappy this morning.'},
        {r:'dr', s:'That is helpful. Has he had any rash \u2014 and if so, does it fade when you press a glass against it? And any fits, neck stiffness, or dislike of bright light?', an:{t:'good',dom:'dg',text:'<b>Actively screens meningococcal/serious features.</b> The non-blanching rash and the glass test \u2014 named explicitly \u2014 plus the meningitis screen.'}},
        {r:'pt', s:'No rash, no fits, nothing like that. He is just miserable and hot.'},
        {r:'dr', s:'From everything you have told me Leo has the reassuring signs \u2014 responding to you, normal colour, drinking and weeing, no rash, breathing normally \u2014 so this sounds like a viral illness. But fevers can change quickly in little ones, so I want to be sure you know exactly what to watch for. Would it help to bring him in this afternoon for me to examine him, given you are worried?', an:{t:'good',dom:'cm',text:'<b>Safe disposition + honours the worry.</b> Reasons openly from the findings yet offers a same-day review because the parent is concerned \u2014 a parent\u2019s worry is itself an amber flag.'}},
        {r:'pt', s:'I think I would feel better if someone saw him, yes.'},
        {r:'dr', s:'Absolutely, let us do that. Before then, and afterwards, here is your safety-net \u2014 and please write it down. Call 999 or go to A&E if his breathing becomes fast or laboured, if he becomes pale/blue/mottled, floppy or hard to wake, if he has a fit, or if a rash appears that does not fade under a glass. Push fluids, you can alternate paracetamol and ibuprofen for distress, and call back any time if you are worried \u2014 you will never be wasting our time.', an:{t:'good',dom:'cm',text:'<b>Specific, symptom-based safety-net.</b> Names exactly what to look for, what to do and where to go \u2014 the single most examined skill in a remote paediatric consultation.'}}
      ],
      verdict:'A pass. The candidate ran a structured remote assessment against the fever red flags \u2014 colour, alertness, breathing, hydration, rash \u2014 reasoned transparently to a safe disposition, and crucially honoured the mother\u2019s worry by offering a same-day face-to-face. The safety-net was specific and symptom-based, not "keep an eye on him". Safe, systematic and parent-centred.'
    },
    fail:{
      grades:{dg:'F', cm:'F', rto:'CF'},
      turns:[
        {r:'pt', s:'He has had a temperature since yesterday, around 39, and he is just not himself. I gave Calpol but I am worried.'},
        {r:'dr', s:'Temperatures are really common in toddlers, it is almost always a virus. Calpol is the right thing.', an:{t:'bad',dom:'rto',text:'<b>Reassures before assessing.</b> Dismisses the worry up front without a single safety question \u2014 the parent\u2019s instinct, an important signal, is brushed aside.'}},
        {r:'pt', s:'But he is so sleepy and clingy, it is not like him.'},
        {r:'dr', s:'They do get like that with a fever. Just keep his fluids up and the temperature down and he should be fine in a few days.', an:{t:'bad',dom:'dg',text:'<b>No structured assessment.</b> No questions about breathing, colour, alertness, rash or hydration \u2014 the fever red flags are never checked over the phone.'}},
        {r:'pt', s:'Should I be looking out for anything?'},
        {r:'dr', s:'Just keep an eye on him, and if you are still worried in a few days give us a ring back.', an:{t:'bad',dom:'cm',text:'<b>Vague, time-based safety-net.</b> "Keep an eye on him / a few days" gives the parent nothing concrete \u2014 in a child who could deteriorate in hours, this is unsafe.'}},
        {r:'pt', s:'OK\u2026 if you think so.'},
        {r:'dr', s:'Honestly, it is just one of those viral things going round. Take care.', an:{t:'bad',dom:'gs',text:'<b>False reassurance, no review.</b> No examination offered despite parental worry and a sleepy child \u2014 a potentially serious infection sent home unassessed.'}}
      ],
      verdict:'A clear fail. The candidate reassured before assessing, never worked through the fever red flags, ignored two cues (sleepy, "not like him") and the mother\u2019s worry, and gave a vague time-based safety-net to a 2-year-old who could deteriorate within hours. Remote paediatric fever calls are passed by structured assessment, a safe disposition and a specific symptom-based safety-net \u2014 all three are absent.'
    }
  },
  /* ---------------- 10 · "I just need my diazepam" ---------------- */
  {
    title:'\u201cI just need my diazepam\u201d',
    type:'Face-to-face · 52M',
    brief:'Derek Lyle, 52, new patient. Requests "my usual diazepam 10mg, I have been on it for years for my nerves". No records transferred yet. Asking for a month\u2019s supply today. Appears calm, articulate.',
    link:'../cases/drug-dependence.html',
    pass:{
      grades:{dg:'CP', cm:'P', rto:'CP'},
      turns:[
        {r:'pt', s:'I just need my diazepam \u2014 10mg, I have been on them for years for my nerves. Can you do me a month\u2019s worth today?'},
        {r:'dr', s:'Thanks for letting me know where things stand. I can see these really matter to you, so let me understand it properly. Tell me how they help you, and how you have been taking them?', an:{t:'good',dom:'rto',text:'<b>Curious, not accusatory.</b> Avoids both an instant "yes" and a confrontational "no" \u2014 opens with understanding, which keeps a potentially defensive consultation safe.'}},
        {r:'pt', s:'I take one or two a day, sometimes more if it is a bad day. Without them I cannot cope, I shake, I cannot sleep.'},
        {r:'dr', s:'That sounds frightening \u2014 it is clear they have become essential to how you get through the day. Some of what you describe without them, the shaking and sleeplessness, can be the body depending on the medication itself. Has anyone talked with you about that?', an:{t:'good',dom:'cm',text:'<b>Names dependence honestly and kindly.</b> Reframes the withdrawal symptoms as part of the problem, without shaming \u2014 the start of an honest conversation.'}},
        {r:'pt', s:'A doctor once said I should come off, but I tried and it was horrendous, so I gave up.'},
        {r:'dr', s:'Coming off these abruptly is genuinely horrible and can be dangerous, so I understand why that failed \u2014 it was not a lack of willpower. The good news is it can be done slowly and safely, with support. But I have to be straight with you about today.', an:{t:'good',dom:'rto',text:'<b>Validates the failed attempt + warning shot.</b> Removes blame, instils hope, and signals honestly that the answer to today\u2019s request is not a simple yes.'}},
        {r:'pt', s:'You are not going to give me them, are you.'},
        {r:'dr', s:'Not a month, and not without your records \u2014 and I want to explain why, because it is about your safety, not mistrust. Prescribing a high dose to someone I have just met, with no notes, could genuinely harm you. What I can do is make sure you do not run out or go into withdrawal while we sort this out properly.', an:{t:'good',dom:'cm',text:'<b>Safe, bounded, transparent.</b> Declines the unsafe request, explains the reasoning, and crucially does not abandon the patient to cold turkey \u2014 the balance the station tests.'}},
        {r:'pt', s:'So what happens now? I cannot just stop.'},
        {r:'dr', s:'Agreed, and you will not have to. Here is what I suggest: I prescribe a small, short supply today to keep you safe, I get your records urgently, and I book you back this week to agree a slow reduction plan together, at a pace you can manage, with support for the anxiety underneath it. You stay in control of the speed.', an:{t:'good',dom:'cm',text:'<b>Concrete shared plan.</b> Bridges safely, sets up structured withdrawal and addresses the underlying anxiety \u2014 patient retains autonomy over the pace.'}},
        {r:'pt', s:'I suppose that is fairer than I expected. All right.'},
        {r:'dr', s:'I really appreciate you working with me on this \u2014 it is not easy. Small supply today, records chased, and I will see you Thursday to plan the next step together. And if things feel worse before then, I want you to come back.', an:{t:'good',dom:'rto',text:'<b>Partnership + safety-net.</b> Reinforces the alliance and a route back \u2014 turning a confrontational request into the start of treatment.'}}
      ],
      verdict:'A pass. The candidate neither rubber-stamped an unsafe request nor refused punitively. They explored the use, named the dependence compassionately, declined the month\u2019s supply with a transparent safety rationale, yet protected the patient from withdrawal with a small bridging supply and a structured, shared reduction plan. Firm, safe and humane \u2014 exactly the balance these stations examine.'
    },
    fail:{
      grades:{dg:'F', cm:'F', rto:'F'},
      turns:[
        {r:'pt', s:'I just need my diazepam \u2014 10mg, I have been on them for years. Can you do me a month\u2019s worth today?'},
        {r:'dr', s:'Sorry, I am not prescribing diazepam to someone I have just met. We do not hand those out, especially not a month.', an:{t:'bad',dom:'rto',text:'<b>Blunt refusal, no exploration.</b> Correct that a month is unsafe, but delivered as a flat "no" with no understanding \u2014 the patient feels judged and the consultation turns adversarial.'}},
        {r:'pt', s:'So you are going to let me go into withdrawal? That can cause fits, you know.'},
        {r:'dr', s:'You should not have been on them this long anyway. You will need to get them sorted elsewhere.', an:{t:'bad',dom:'cm',text:'<b>Unsafe abandonment.</b> Abrupt benzodiazepine withdrawal can cause seizures \u2014 refusing any bridging supply and offloading the patient is dangerous and negligent.'}},
        {r:'pt', s:'This is ridiculous. I came here for help.'},
        {r:'dr', s:'There is nothing I can do today. Maybe try the walk-in or your old surgery.', an:{t:'bad',dom:'cm',text:'<b>No plan, no records, no safety.</b> Makes no attempt to obtain notes, bridge safely or arrange follow-up \u2014 the patient leaves with nothing and at real risk.'}},
        {r:'pt', s:'Thanks for nothing.'},
        {r:'dr', s:'Like I say, not something I can help with. Next time bring your records.', an:{t:'bad',dom:'gs',text:'<b>Relationship destroyed, patient endangered.</b> A dependent patient turned away into withdrawal with no support \u2014 unsafe medicine and a complete breakdown of the therapeutic relationship.'}}
      ],
      verdict:'A clear fail. The instinct that a month of diazepam to a stranger is unsafe is right, but the execution is dangerous: a punitive refusal with no exploration, no bridging supply to prevent a withdrawal seizure, no attempt at records and no follow-up. The patient is both alienated and physically endangered. Safe management means declining the unsafe request while protecting the patient and offering a structured way forward.'
    }
  }
];
/* attach the pass/fail "diff" lists the page expects on .pass.diff */
window.SCA_WORKED.forEach(c=>{
  c.pass.diff = c.pass.diff || null;
});
window.SCA_WORKED[0].pass.diff = [
  'Followed the patient\u2019s narrative instead of firing a red-flag checklist.',
  'Picked up "snappy" / "a bit down" and explored the mood \u2014 the actual diagnosis.',
  'Did a proportionate risk assessment, then built a shared plan with a specific safety-net.'
];
window.SCA_WORKED[1].pass.diff = [
  'Aligned with the request before exploring \u2014 didn\u2019t open with a refusal.',
  'Uncovered and named the real expectation (being well for the wedding).',
  'Excluded pneumonia features, then offered a back-up prescription as a shared compromise + safety-net.'
];
window.SCA_WORKED[2].pass.diff = [
  'Elicited ideas/concerns and gave a warning shot before naming the diagnosis.',
  'Separated his prognosis from his father\u2019s rather than flattening the fear.',
  'Tackled the DVLA/taxi question directly and staged a shared, written plan.'
];
window.SCA_WORKED[3].pass.diff = [
  'Validated the anger first instead of policing the tone or getting defensive.',
  'Apologised for the experience without blaming colleagues or hiding behind "criteria".',
  'Supported the complaint AND solved the knee problem with a concrete, transparent plan.'
];
window.SCA_WORKED[4].pass.diff = [
  'Refused to accept "always bumping into things" for finger-mark bruising.',
  'Named the safeguarding concern honestly \u2014 did not promise secrecy or collude.',
  'Acted on reasonable concern, checked the mother\u2019s safety (Think Family) and safety-planned.'
];
window.SCA_WORKED[5].pass.diff = [
  'Set the agenda openly and negotiated which problem to tackle today \u2014 didn\u2019t try to do everything.',
  'Explored the carer\u2019s distress and the patient\u2019s own wishes rather than siding with one party.',
  'Made a safe, focused plan with clear follow-up for the deferred problems.'
];
window.SCA_WORKED[6].pass.diff = [
  'Explored the parent\u2019s specific fears before giving information \u2014 didn\u2019t lecture.',
  'Acknowledged the worry as legitimate and gave balanced, honest evidence.',
  'Respected the decision, kept the relationship intact and left the door open.'
];
window.SCA_WORKED[7].pass.diff = [
  'Validated genuinely distressing symptoms instead of leading with "your tests are normal".',
  'Followed the cue into health anxiety and offered a positive, mechanistic explanation.',
  'Built continuity + therapy + a clear rule on re-investigation \u2014 not another referral to avoid the conversation.'
];
window.SCA_WORKED[8].pass.diff = [
  'Ran a structured remote assessment against the fever red flags \u2014 colour, alertness, breathing, hydration, rash.',
  'Honoured the mother\u2019s worry by offering a same-day face-to-face review.',
  'Gave a specific, symptom-based safety-net \u2014 not "keep an eye on him".'
];
window.SCA_WORKED[9].pass.diff = [
  'Explored the use and named the dependence compassionately rather than refusing punitively.',
  'Declined the unsafe month\u2019s supply with a transparent safety rationale \u2014 not mistrust.',
  'Bridged safely to prevent withdrawal and set up a structured, shared reduction plan.'
];
