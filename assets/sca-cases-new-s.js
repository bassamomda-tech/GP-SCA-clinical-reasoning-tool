/* ============================================================
   Reasoning GP — SCA new cases, batch s (upload 135)
   Nine new remote (video / telephone) stations, each self-contained:
   stem, patient-voice role-player script, RCGP-domain checkpoints
   (dg = Data gathering & diagnosis, cm = Clinical management &
   medical complexity, ro = Relating to others), model consultation,
   knowledge, knowledge-by-theme, playbook, links, pitfalls, time
   map, word pictures (Clear fail / Fail / Pass / Clear pass) and
   avoid-phrases — all inline on the case object — plus the 11
   standard scorecard Tasks for each case (SCA_SC_TASKS_EXTRA, with
   an inline scTasks copy as a fallback).
   Loaded after sca-cases-new-r.js and before the overlay files.
   Educational; original content. Last checked: October 2026.
   ============================================================ */
(function(){
  var C = [];
  var CHECKED = 'October 2026';

  /* ===== s1. Relapsing MS — returning to work, disclosure and driving — telephone ===== */
  C.push({
    id:'ms-work-disclosure',
    title:'“I’m ready to go back to work — but do I have to tell them what’s wrong with me?”',
    type:'telephone', duration:12,
    meta:{ age:36, sex:'F',
      setting:'Telephone — routine appointment booked by the patient before a return-to-work meeting.',
      system:'Neurology / Work and health — living with a long-term neurological condition and returning to work',
      checked:CHECKED,
      blueprint:{ difficulty:2, lifeStage:'adult', groups:['Long-term conditions & cancer','Professional & ethical','Health disadvantage & vulnerabilities'], type:'telephone', thirdParty:false }
    },
    ceg:['Long-term conditions & cancer','Professional & ethical'],
    brief:'Mrs Ewa Nowak, 36, hotel housekeeper, was diagnosed with relapsing-remitting multiple sclerosis (MS) seven months ago and had a relapse four months ago (right leg weakness, sensory symptoms, fatigue) treated with IV methylprednisolone. She has been off work on fit notes that say “neurological illness”. She is now stable, on dimethyl fumarate with pregabalin and amantadine, and has a return-to-work meeting with HR next week. She asks whether she has to tell her employer the diagnosis, fearing she will be “labelled disabled” and let go. The tasks: assess her current function honestly (residual right-leg drag when tired, afternoon fatigue, heat makes her legs heavy — Uhthoff phenomenon — mild urinary urgency, mood), explain that MS counts as a disability under the Equality Act 2010 from diagnosis, so she is protected and the employer must consider reasonable adjustments; disclosure is her choice but helps; offer a fit note marked “may be fit for work” with a phased return, amended duties (no heavy lifting, avoid the hot laundry), altered hours and rest breaks; suggest Occupational Health and Access to Work. HIDDEN AGENDA: she drives to her 6 am shift (no buses then) and has NOT told the DVLA, and she told colleagues she had a “back injury”. She fears losing her licence and therefore the job. The candidate must find out she drives, explain the legal duty to tell the DVLA (the diagnosis of MS must be declared; most people keep their licence, sometimes short-term), advise not to drive when her leg is weak or tired until assessed, and help with practical alternatives — without lecturing. Also: flu vaccine, MS nurse, relapse safety-net.',
    stem:{
      name:'Ewa Nowak', age:'36-year-old woman',
      pmh:['Relapsing-remitting multiple sclerosis — diagnosed 7 months ago (MRI brain and spine, CSF)','Relapse 4 months ago — admitted, IV methylprednisolone; physiotherapy and occupational therapy on discharge'],
      meds:['Dimethyl fumarate 240 mg twice daily (hospital-prescribed disease-modifying therapy; MS team monitors bloods)','Pregabalin 75 mg twice daily','Amantadine 100 mg twice daily'],
      allergy:'No known drug allergies',
      recent:'Neurology clinic letter (6 weeks ago): “Good recovery from relapse. Residual mild right leg weakness and fatigue. Lymphocytes 1.1 ×10⁹/L, LFTs normal — continue DMF with 3-monthly monitoring. MS nurse contact details given. Review in 6 months.” Fit notes issued monthly since the relapse: “neurological illness — not fit for work”; last one expires in 9 days. Influenza vaccine: not recorded this season.',
      reason:'Telephone appointment: “Want to talk about going back to work.”'
    },
    script:{
      opening:'“Hello, doctor. I want to go back to work now — I’ve been off four months and I feel much better. But I have a meeting with HR next week and I don’t know if I should tell them I have MS. If they hear ‘MS’ they will think I’m disabled and they’ll find a way to get rid of me.”',
      facts:[
        { topic:'Her job', text:'“I’m a housekeeper in a big hotel — three years there. Stripping beds, carrying linen bags, pushing the trolley, and two days a week in the laundry room. It’s very hot in there.”' },
        { topic:'How she is now (if asked about symptoms)', text:'“Much better. By the afternoon I’m tired — really tired, not normal tired. When I’m tired my right foot drags a bit.” If asked about heat: “In a hot bath my legs go heavy, then it goes when I cool down.”' },
        { topic:'Other symptoms (if asked)', text:'No problems with eyesight now, no double vision, no new numbness, no falls since the hospital. Bladder (only if asked directly): “Sometimes I have to rush to the toilet — I make it, but only just.” Bowels fine. Leg pains at night are better on pregabalin.' },
        { topic:'Relapse check (if asked about new symptoms in the last few weeks)', text:'“No, nothing new. It’s been steady for two months.”' },
        { topic:'Medicines', text:'“I take them all — my husband reminds me. The MS nurse does my blood tests.” Not had the flu jab this year: “Nobody said.”' },
        { topic:'Mood (if asked)', text:'“I was very low after the hospital. Now — worried, not sad. I sleep OK.” No thoughts of self-harm.' },
        { topic:'Driving (only if asked whether she drives or how she gets to work)', text:'“I drive. The shift starts at six, there’s no bus.” If asked whether the DVLA knows: hesitate, then “No… I didn’t tell them. If they take my licence, I lose my job anyway.” If asked about the right leg when driving: “It’s my right foot that drags when I’m tired. Driving home after a shift — I’m careful.”' },
        { topic:'Colleagues (hidden, say if asked what people at work know)', text:'“I told my supervisor it was my back. I didn’t want everyone talking.” Ask: “Do I have to tell my colleagues?”' },
        { topic:'Social', text:'Lives with husband Tomasz (warehouse supervisor, works days) and daughter Zofia, 9. Moved from Poland 12 years ago; English is good. Does not smoke, drinks rarely, no drugs. Money is tight on statutory sick pay.' },
        { topic:'Role-player direction', text:'Be anxious and a little guarded. Mention the driving only if asked whether you drive or how you get to work; mention telling colleagues “it was my back” only if asked what people know. If the doctor explains the Equality Act clearly, become relieved. If the doctor lectures you about the DVLA or threatens to report you, become defensive (“So I lose my job then?”). If the doctor explains calmly that most people with MS keep their licence and the DVLA must decide, agree to tell them this week. Ask: “Is MS a disability?” and “Do I have to tell my colleagues?”' }
      ],
      ice:{
        ideas:'“If I say MS, they will see me as disabled and weak.”',
        concerns:'HIDDEN AGENDA — she has not told the DVLA and is frightened that losing her licence means losing the job (no bus at 6 am); she has told colleagues it was a back injury. Underneath is fear of being pushed out and of money running out.',
        expectations:'Advice on what to say to HR, and a fit note so she can go back.'
      },
      cues:[
        '“They’ll find a way to get rid of me.” — fear of discrimination and of losing income.',
        '“By the afternoon I’m really tired, and my foot drags.” — residual function that matters for duties and for driving.',
        '“The shift starts at six, there’s no bus.” — she drives, and the DVLA has not been told.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Assesses current function in relation to the job: fatigue pattern, right-leg drag, heat sensitivity, bladder urgency, pain, mood — and confirms no new symptoms suggesting relapse' },
      { dom:'dg', text:'Explores the job demands (lifting, hot laundry, early shift) and asks how she gets to work — discovering she drives and has not told the DVLA' },
      { dom:'cm', text:'Explains that MS is a disability under the Equality Act 2010 from the point of diagnosis: protection from discrimination and a duty on the employer to consider reasonable adjustments; disclosure is her choice, and colleagues need not be told' },
      { dom:'cm', text:'Offers a fit note marked “may be fit for work” with specific phased return, amended duties (no heavy lifting, avoid the laundry heat), altered hours and rest breaks; suggests Occupational Health and Access to Work' },
      { dom:'cm', text:'Explains the legal duty to tell the DVLA about MS, that the DVLA decides and most people keep their licence, and advises not to drive when her leg is weak or she is very tired until assessed' },
      { dom:'cm', text:'Offers the flu vaccine, signposts the MS nurse, and safety-nets for relapse (new weakness, visual loss, numbness, balance) and bladder symptoms' },
      { dom:'ro', text:'Responds to her fear of being “labelled” with empathy and accurate reassurance; avoids a lecture on driving and treats her as a partner in the decisions' }
    ],
    worked:[
      { lbl:'Explore the job, not just the illness', txt:'“Talk me through a normal shift — what does your body have to do, and how do you get there for six?”' },
      { lbl:'The law in plain words', txt:'“MS is one of the conditions the Equality Act counts as a disability from the day it is diagnosed. That’s a protection, not a label: your employer must not treat you worse because of it, and must look at reasonable changes to help you work.”' },
      { lbl:'Choice about telling', txt:'“Whether you tell HR is your choice. If they don’t know, it is harder for them to make adjustments. Your colleagues don’t need to know anything unless you want them to.”' },
      { lbl:'Driving, calmly', txt:'“There is one thing the law does require: anyone diagnosed with MS has to tell the DVLA. Most people with MS keep their licence — the DVLA decide, sometimes with a short-term licence. Until they do, please don’t drive when your right leg is weak or you are exhausted.”' },
      { lbl:'A fit note that works', txt:'“I can write a fit note saying you may be fit for work with changes — a phased return over four weeks, no heavy lifting, no laundry shifts for now, and rest breaks. That gives HR something concrete.”' }
    ],
    learning:'Return-to-work consultations test whether the doctor can turn medical facts into practical, lawful advice. MS (like cancer and HIV) is deemed a disability under the Equality Act 2010 from diagnosis, so the employer must not discriminate and must consider reasonable adjustments — disclosure is voluntary but usually helps. The fit note (“may be fit for work”) is a powerful tool: be specific about phased return, amended duties, altered hours and workplace adaptations. Occupational Health and the Access to Work scheme add support. Always ask about driving in neurological conditions: anyone with MS must tell the DVLA, which then decides; the GP explains the duty and records the advice, and GMC guidance describes when a doctor may need to inform the DVLA if a patient continues to drive when unfit. Heat-related worsening (Uhthoff phenomenon) and fatigue are common and should shape adjustments. Offer the annual flu vaccine (infection can trigger relapse) and keep the MS nurse involved.',
    knowledge:{
      guideline:'Equality Act 2010 (Schedule 1: MS deemed a disability from diagnosis) · DVLA Assessing fitness to drive: a guide for medical professionals (current edition, 2025) · DWP Getting the most out of the fit note: guidance for healthcare professionals (2024) · NICE NG220 Multiple sclerosis in adults: management (2022) · GMC Confidentiality: patients’ fitness to drive and reporting concerns to the DVLA (2017) · UKHSA Green Book chapter 19: influenza (2025)',
      summary:'Assess function against the job, explain Equality Act protection and reasonable adjustments, write a specific “may be fit” fit note, find the undeclared driving and explain the DVLA duty calmly.',
      points:[
        { h:'Equality Act 2010', t:'MS, cancer and HIV are deemed disabilities from diagnosis, regardless of current severity. Employers must not discriminate and have a duty to make reasonable adjustments. Disclosure is voluntary, but an employer cannot be expected to adjust for what it does not know.' },
        { h:'The fit note', t:'“May be fit for work” with options: phased return, altered hours, amended duties, workplace adaptations. Be specific and time-limited (for example 4–6 weeks). If the employer cannot accommodate, the note counts as “not fit” — she is not penalised.' },
        { h:'Support at work', t:'Occupational Health (via the employer) assesses and recommends adjustments. Access to Work (DWP) can fund support, equipment or travel costs, including taxis when public transport is not usable.' },
        { h:'Driving', t:'A car driver with MS must tell the DVLA (online or form CN1). The DVLA may issue a full or short-period licence or ask for information. Advise not to drive if symptoms affect control (for example right-leg weakness or severe fatigue). Not telling the DVLA can lead to a fine and invalidate insurance.' },
        { h:'MS symptoms that affect work', t:'Fatigue (pacing, rest breaks, amantadine), heat sensitivity (Uhthoff phenomenon — temporary worsening with heat, not a relapse), bladder urgency (toilet access; consider bladder review), neuropathic pain, mood. A relapse is new or worse symptoms lasting more than 24 hours without fever or infection.' },
        { h:'Medicines and vaccines', t:'Dimethyl fumarate needs lymphocyte and LFT monitoring by the MS team (risk of PML with prolonged lymphopenia). Offer the annual influenza vaccine — MS is a chronic neurological condition in the at-risk group, and infection can trigger relapse.' },
        { h:'Marking edge', t:'Pass candidates answer the HR question well. Clear pass candidates also find the driving, handle it without threat, and leave her with a fit note she can hand to HR.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello, is that Mrs Nowak? It’s Dr Lewis. Can I just check your date of birth, and that you’re somewhere you can talk?', dom:'ro', why:'Identity and privacy on the telephone' },
      { who:'pt', text:'Yes, I’m at home. I want to go back to work but I don’t know if I should tell them about the MS. They’ll think I’m disabled and get rid of me.' },
      { who:'dr', text:'That sounds like a real worry. Let’s make sure you leave with a plan for that meeting. First, how are you physically now?', dom:'ro', why:'Acknowledges the fear and signposts the structure' },
      { phase:'Data gathering', clock:'1–5 min', who:'pt', text:'Better. By the afternoon I’m very tired and my right foot drags a bit. Heat makes my legs heavy.' },
      { who:'dr', text:'Anything new in the last few weeks — eyesight, numbness, balance, falls? And any problems with your bladder or bowels?', dom:'dg', why:'Relapse screen plus bladder symptoms that affect work' },
      { who:'pt', text:'Nothing new. Sometimes I have to rush to the toilet.' },
      { who:'dr', text:'Tell me about the job — what does a shift involve, and how do you get there for six?', dom:'dg', why:'Job demands and the route to the driving question' },
      { who:'pt', text:'Beds, linen bags, the hot laundry two days a week. I drive — there’s no bus that early.' },
      { who:'dr', text:'Thank you. Have you had a chance to let the DVLA know about the MS?', dom:'dg', why:'Asks directly without accusing' },
      { who:'pt', text:'No… if they take my licence I lose the job anyway.' },
      { phase:'Explanation and plan', clock:'5–10 min', who:'dr', text:'I understand why that’s frightening. The law says anyone diagnosed with MS needs to tell the DVLA — but most people keep their licence. They may want a report from your neurologist. Until they decide, please don’t drive when your leg is weak or you’re exhausted. If transport becomes a problem, Access to Work can sometimes pay towards taxis.', dom:'cm', why:'Legal duty explained calmly, interim safety advice, practical help' },
      { who:'pt', text:'OK. And is MS a disability? I don’t want them to see me like that.' },
      { who:'dr', text:'Under the Equality Act, yes — from the day it’s diagnosed. That protects you: they mustn’t treat you worse because of it, and they must look at reasonable changes. Whether you tell HR is your choice, but it lets them help. Your colleagues don’t need to know unless you want them to.', dom:'cm', why:'Accurate law framed as protection; answers both questions' },
      { who:'dr', text:'I’ll do a fit note saying you may be fit for work with changes: a phased return over four weeks, no heavy lifting, no laundry room for now, and rest breaks. HR may ask Occupational Health to see you — that’s normal and helpful.', dom:'cm', why:'Specific fit note and Occupational Health' },
      { phase:'Close', clock:'10–12 min', who:'dr', text:'Two more things: you’re due a flu jab — infections can trigger relapses — and please call your MS nurse or us if anything new comes on for more than a day, like weakness, blurred vision or numbness. What will you say to HR, and what will you do about the DVLA?', dom:'ro', why:'Vaccine, relapse safety-net, teach-back' },
      { who:'pt', text:'I’ll take the fit note and tell them it’s MS. I’ll fill in the DVLA form this week and not drive when my leg is bad.' }
    ],
    kb:{
      social:[
        { h:'Work and money', t:'Physically demanding, early-shift job; household finances strained on statutory sick pay. Practical solutions (phased return, Access to Work travel costs) matter more than reassurance alone.' },
        { h:'Migration and confidence', t:'A worker who has built a life in the UK may fear that illness threatens her job security; make sure she knows her employment rights apply fully.' }
      ],
      legal:[
        { h:'Equality Act 2010', t:'Deemed disability from diagnosis; reasonable adjustments duty; protection from discrimination and dismissal because of disability.' },
        { h:'Driving', t:'Legal duty on the licence holder to tell the DVLA. The doctor advises and documents; GMC guidance sets out when a doctor should inform the DVLA if a patient continues to drive when unfit and will not tell them.' }
      ],
      professional:[
        { h:'Fit note quality', t:'A vague “may be fit” is unhelpful. Name the adjustments and the duration so the employer can act.' }
      ],
      community:[
        { h:'Support', t:'MS specialist nurse; MS Society and MS Trust work and driving guides; Access to Work; ACAS advice on reasonable adjustments; Citizens Advice for employment rights.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['New neurological symptoms lasting over 24 hours (relapse)','Visual loss or double vision','Falls','Bladder retention or incontinence; infection symptoms'],
        psychosocial:['Job demands: lifting, heat, early shifts','How she travels to work — driving','Finances on sick pay','What colleagues and HR know'],
        ice:['Idea: MS means being seen as disabled','Concern: losing the job; hidden fear about the licence','Expectation: advice for HR and a fit note'],
        core:['Fatigue pattern','Heat sensitivity','Pain control','Mood','Medicines and monitoring','Flu vaccine status']
      },
      diagnosis:'Relapsing-remitting MS in remission after a recent relapse, with residual fatigue, mild right-leg weakness, heat sensitivity and urinary urgency; ready for a supported return to work; undeclared to the DVLA.',
      diagnosisLay:'“Your MS is settled at the moment, but tiredness, heat and your right leg still need some changes at work — and the DVLA needs to know about the diagnosis.”',
      management:{
        reflectIce:'“You’re worried that saying ‘MS’ will cost you your job. The law is actually on your side — and telling them is what lets them make changes for you.”',
        psychosocial:'Phased return protects income and health; Access to Work for travel; husband’s support with transport on bad days.',
        sharedPlan:['Fit note: may be fit for work — phased return over 4 weeks, no heavy lifting, no laundry room, rest breaks','Occupational Health via employer; Access to Work','Tell the DVLA this week; do not drive when the leg is weak or very tired','Flu vaccine; continue DMF monitoring with the MS team','Consider bladder review if urgency persists'],
        safetyNet:['New weakness, visual loss, numbness or balance problems lasting more than 24 hours — MS nurse or GP same day; 111 out of hours','Fever with worsening symptoms — infection can mimic relapse','Review after the HR meeting or before the fit note ends']
      }
    },
    links:[
      { ic:'💠', t:'Multiple sclerosis', s:'Management protocol', href:'management/multiple-sclerosis.html' },
      { ic:'💠', t:'Neuropathic pain', s:'Management protocol', href:'management/neuropathic-pain.html' }
    ],
    pitfalls:{
      intro:'This looks like a quick advice call about HR. It is failed by candidates who never ask about driving, or who answer with vague reassurance and no usable fit note.',
      items:[
        { dom:'dg', fail:'Never asks how she gets to work or whether she drives.', why:'MS carries a legal duty to tell the DVLA, and her right leg drags when tired — a safety issue for her and others.', fix:'Ask about the commute and driving as part of the job history.' },
        { dom:'cm', fail:'Tells her she “must” tell HR, or that she should keep it quiet.', why:'Disclosure is her choice; both extremes ignore the law and her autonomy.', fix:'Explain the Equality Act protection and the practical benefit of disclosure, then let her decide.' },
        { dom:'ro', fail:'Responds to the DVLA admission with a warning about reporting her.', why:'Threats make her defensive and less likely to act; most people with MS keep their licence.', fix:'Explain the duty calmly, give interim advice, and offer practical help with transport.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Identity, privacy; hear the worry about being “labelled”.' },
      { t:'1–5', h:'Function and job', d:'Fatigue, leg, heat, bladder, mood; relapse screen; the job; how she gets there — driving.' },
      { t:'5–10', h:'Law and plan', d:'DVLA duty calmly; Equality Act; disclosure choice; specific fit note; Occupational Health; Access to Work.' },
      { t:'10–12', h:'Close', d:'Flu vaccine, MS nurse, relapse safety-net, teach-back.' }
    ],
    wordPics:{
      clearFail:'Gives generic reassurance (“they can’t sack you”), no assessment of function, no fit note, driving never mentioned or handled with a threat.',
      fail:'Answers the HR question correctly but misses the driving, or finds it and gives inaccurate advice (“you must stop driving now” or “you don’t need to tell them”); the fit note is vague.',
      pass:'Assesses function against the job, explains the Equality Act and reasonable adjustments, offers a specific “may be fit” fit note, finds the driving and explains the DVLA duty, and safety-nets for relapse.',
      clearPass:'All of the Pass, done warmly and efficiently: frames disability status as protection, answers the colleagues question, handles the DVLA calmly with interim advice and Access to Work for transport, adds the flu vaccine and MS nurse, and confirms her plan by teach-back.'
    },
    avoid:[
      { dont:'“If you keep driving I’ll have to tell the DVLA myself.”', instead:'“The law asks you to tell them — most people with MS keep their licence. Can we agree you’ll do it this week?”', why:'Starting with a threat damages trust; the GMC route is a last resort.' },
      { dont:'“Don’t worry, they can’t sack you.”', instead:'“The Equality Act protects you and means they must look at reasonable changes.”', why:'Accurate law reassures better than a blanket promise.' },
      { dont:'“I’ll put ‘may be fit for work’.”', instead:'“I’ll write a phased return over four weeks, no heavy lifting, no laundry shifts and rest breaks.”', why:'A specific fit note is usable; a vague one is not.' }
    ]
  });

  /* ===== s2. Bloody diarrhoea after travel — food handler — video ===== */
  C.push({
    id:'traveller-bloody-diarrhoea',
    title:'“It started at my cousin’s wedding and it still won’t stop — I need to be back at work on Saturday”',
    type:'video', duration:12,
    meta:{ age:29, sex:'M',
      setting:'Video — urgent appointment after an urgent treatment centre (UTC) attendance two days ago.',
      system:'Infection / Urgent care — diarrhoea after foreign travel',
      checked:CHECKED,
      blueprint:{ difficulty:2, lifeStage:'adult', groups:['Urgent & unscheduled care','New & undifferentiated presentations','Investigations & results','Health disadvantage & vulnerabilities'], type:'video', thirdParty:false }
    },
    ceg:['Urgent & unscheduled care','New & undifferentiated presentations'],
    brief:'Mr Yusuf El-Amrani, 29, returned three days ago from a family wedding in Marrakech (Morocco — no malaria risk). Diarrhoea for six days, now 6–7 times a day with blood for the last two days (streaks up to about a tablespoon), cramping lower abdominal pain, and feeling hot and sweaty at night. The UTC two days ago recorded temperature 38.6 °C, pulse 98, BP 124/78, soft abdomen with mild left iliac fossa tenderness, and labelled it gastroenteritis. He is drinking well, passing urine normally and has no postural dizziness. The tasks: recognise dysentery (bloody diarrhoea with fever after travel) that needs a stool sample for culture and ova, cysts and parasites, bloods (FBC, U&E, CRP — dehydration and the haemolytic uraemic syndrome risk with STEC), STOPPING loperamide, no routine antibiotics while STEC is possible (discuss with microbiology if he becomes systemically unwell or a result needs treatment), fluids and oral rehydration, paracetamol not NSAIDs, and notification of suspected infectious bloody diarrhoea to the UKHSA health protection team (a GP duty on clinical suspicion). HIDDEN AGENDA: he makes sandwiches and coffee in a café on a zero-hours contract with no sick pay, his manager wants him on the Saturday shift, and he bought loperamide from a pharmacy to “stop it so I can work”. He must be told clearly that food handlers are excluded until 48 hours after symptoms stop and that, for some organisms, the health protection team may require negative samples before he handles food again; the candidate should help with the money worry (fit note, possible sick pay, Citizens Advice) rather than ignore it.',
    stem:{
      name:'Yusuf El-Amrani', age:'29-year-old man',
      pmh:['Nil significant'],
      meds:['No regular medicines'],
      allergy:'No known drug allergies',
      recent:'Urgent treatment centre letter (2 days ago, emergency nurse practitioner): “4 days of diarrhoea, 5–6/day, some blood today. Returned from Morocco yesterday. T 38.6 °C, HR 98, BP 124/78, RR 16, SpO2 98%. Abdomen soft, mild LIF tenderness, no guarding. Impression: gastroenteritis. Advised fluids, see own GP if not settling.”',
      reason:'Urgent video appointment: “Diarrhoea not getting better.”'
    },
    script:{
      opening:'“Hi doctor. I’ve had diarrhoea for nearly a week now since I went to Morocco, and there’s blood in it. The walk-in centre said it was a bug, but it’s not getting better and I need to be back at work Saturday.”',
      facts:[
        { topic:'The trip', text:'“My cousin’s wedding in Marrakech. Four days of food — buffets, street stalls, everything.” Back three days. Started the day after the wedding.' },
        { topic:'The diarrhoea (if asked)', text:'“Six or seven times a day, watery, and the last two days there’s blood mixed in — sometimes streaks, once about a spoonful.” Some mucus. Cramps low down, mostly the left, eased after going.' },
        { topic:'Fever (if asked)', text:'“I get hot and sweaty at night. I haven’t got a thermometer.” If the doctor asks you to feel your forehead or look at you: you look tired but not grey. On video you can show the doctor your tongue — slightly dry.' },
        { topic:'Hydration (if asked)', text:'“I’m drinking loads — water and the rehydration sachets my mum bought.” Passing urine normally, light yellow. No dizziness when standing. No vomiting.' },
        { topic:'Medicines (if asked what you have taken)', text:'“Paracetamol, and yesterday I got loperamide from the chemist to stop it — I took four.” Say this only if asked what you have taken or tried. No antibiotics recently, no hospital stays.' },
        { topic:'Contacts (if asked)', text:'“My brother came too — he’s fine. I’m not sure about the other guests.” Lives with parents and younger sister; nobody else ill at home yet.' },
        { topic:'Past history (if asked)', text:'Never had anything like this before. No weight loss before the trip. No bruising, no reduced urine, no confusion.' },
        { topic:'Work (only if asked what you do)', text:'“I work in a café — I make the sandwiches and coffees.” If asked about pay: “Zero hours. If I don’t work, I don’t get paid. My manager says he’s short on Saturday and needs me.”' },
        { topic:'Role-player direction', text:'Be worried about the blood and about money. Mention the loperamide and the café only if asked. If told you cannot go to work, push back once: “I’ll just wear gloves.” Accept the advice if the doctor explains why and helps with the money problem (fit note, sick pay, Citizens Advice). Ask: “Can I go back to work on Saturday?”' }
      ],
      ice:{
        ideas:'“Just a bad stomach bug from the food.”',
        concerns:'HIDDEN AGENDA — He handles food on a zero-hours contract with no sick pay, his manager expects him on Saturday, and he took loperamide to “stop it” so he can work. Openly: the blood frightens him.',
        expectations:'Something to stop it quickly so he can go back to work at the weekend.'
      },
      cues:[
        '“I need to be back at work Saturday.” — the occupational and money pressure.',
        '“There’s blood in it.” — dysentery, not simple gastroenteritis.',
        '“Something to stop it.” — he has already tried an antimotility drug.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Characterises the diarrhoea: duration, frequency, amount of blood and mucus, pain, fever, and travel and food history; checks contacts and recent antibiotics or hospital stays' },
      { dom:'dg', text:'Assesses severity and complications remotely: fluid intake, urine output, postural dizziness, vomiting; asks about reduced urine, bruising or pallor (haemolytic uraemic syndrome)' },
      { dom:'dg', text:'Asks what he has taken — finds the loperamide — and asks his occupation, finding he is a food handler' },
      { dom:'cm', text:'Arranges a stool sample (culture and ova, cysts and parasites, with travel history on the form) and bloods (FBC, U&E, CRP) within 24 hours; stops loperamide; no routine antibiotics while STEC is possible' },
      { dom:'cm', text:'Notifies suspected infectious bloody diarrhoea to the UKHSA health protection team and explains food-handler exclusion: 48 hours symptom-free, and possible clearance samples depending on the organism' },
      { dom:'cm', text:'Gives fluid and hygiene advice and specific safety-netting: increasing blood, severe pain, unable to keep fluids down, dizziness, passing little urine, confusion — same-day or 999' },
      { dom:'ro', text:'Recognises the money pressure and offers practical help (fit note, sick pay check, Citizens Advice) rather than simply forbidding work' }
    ],
    worked:[
      { lbl:'Find the medicine', txt:'“What have you taken so far — anything from the chemist to slow it down?”' },
      { lbl:'Why the loperamide stops', txt:'“With blood and a temperature, slowing the gut down can keep the germ inside and make some infections more dangerous. Please stop the loperamide.”' },
      { lbl:'Why no antibiotics today', txt:'“Most of these settle without antibiotics, and for one type of germ antibiotics can actually do harm. The stool test tells us which one it is — if you need treatment, I’ll ring you.”' },
      { lbl:'Work, honestly', txt:'“Because you make food for other people, the rule is no food handling until you’ve had 48 hours with no diarrhoea — and depending on the germ, the health protection team may want clear samples first. I know that hits your pay; let’s sort a fit note and look at what you’re entitled to.”' }
    ],
    learning:'Bloody diarrhoea with fever after travel is dysentery until proved otherwise, not “a bug”. Send stool for culture and ova, cysts and parasites with the travel history; check FBC, U&E and CRP when there is blood (dehydration, and STEC can cause haemolytic uraemic syndrome, usually 5–10 days after onset). Avoid antimotility drugs such as loperamide in bloody diarrhoea or high fever, and do not give antibiotics routinely — many cases are self-limiting and antibiotics may increase HUS risk with STEC; discuss with microbiology if he is systemically unwell or a result needs treatment. Infectious bloody diarrhoea is a notifiable condition: the GP notifies the health protection team on clinical suspicion, without waiting for the laboratory. Food handlers are excluded until 48 hours after symptoms stop, and some organisms (for example STEC, typhoid, some Shigella) need microbiological clearance as directed by the health protection team. Malaria and enteric fever must be considered in any febrile traveller returning from a risk area — here Morocco carries no malaria risk, but ask the itinerary.',
    knowledge:{
      guideline:'NICE CKS Gastroenteritis (accessed 2026) · NICE CKS Diarrhoea — adult’s assessment (accessed 2026) · UKHSA Gastrointestinal infections: public health management, including exclusion of food handlers (2019 recommendations) · The Health Protection (Notification) Regulations 2010 · UKHSA Shiga toxin-producing E. coli: public health management (2023)',
      summary:'Dysentery after travel: stool culture and OCP, bloods, stop loperamide, no routine antibiotics, notify, exclude from food handling and safety-net — while helping with the money pressure.',
      points:[
        { h:'Who needs a stool sample', t:'Blood or pus in the stool, recent travel abroad, systemic illness, immunocompromise, recent antibiotics or hospital admission (C. difficile), diarrhoea over 7 days, or a food handler or other high-risk occupation. Write the travel history on the form so the lab adds ova, cysts and parasites.' },
        { h:'Likely causes', t:'Campylobacter, Shigella, non-typhoidal Salmonella, STEC (E. coli O157 and others) and, less commonly, amoebic dysentery (Entamoeba histolytica). Enteric fever more often causes fever, headache and constipation than bloody diarrhoea.' },
        { h:'Avoid', t:'Antimotility drugs (loperamide) with blood in the stool or high fever. NSAIDs while dehydrated. Empirical antibiotics while STEC is possible — seek microbiology advice if systemically unwell or immunocompromised.' },
        { h:'Haemolytic uraemic syndrome', t:'Mostly after STEC: pallor, bruising or petechiae, reduced urine, drowsiness, typically 5–10 days after diarrhoea starts. FBC (anaemia, low platelets) and U&E (rising creatinine) are the screen; same-day hospital assessment if present.' },
        { h:'Notification', t:'Infectious bloody diarrhoea and food poisoning are notifiable on clinical suspicion. The registered medical practitioner notifies the local UKHSA health protection team; urgent cases by telephone.' },
        { h:'Exclusion', t:'Everyone: stay off work or school until 48 hours after the last episode. Food handlers and other risk groups: the health protection team may require negative samples for some organisms before return. Hygiene: hand-washing with soap and water (alcohol gel does not kill all organisms), no shared towels, clean toilet handles.' },
        { h:'Marking edge', t:'The Clear pass candidate asks what he has taken and what he does for work — and turns the exclusion advice into a plan he can actually afford to follow.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hi Yusuf, it’s Dr Okafor. Can you see and hear me? I’ve read the walk-in centre letter. Tell me how things are now.', dom:'ro', why:'Uses the record and opens openly' },
      { who:'pt', text:'Still going, six or seven times a day, and there’s blood now. I need to be back at work Saturday.' },
      { phase:'Data gathering', clock:'1–5 min', who:'dr', text:'How much blood, and is there mucus? Any pain, and have you felt feverish?', dom:'dg', why:'Characterises dysentery' },
      { who:'pt', text:'Streaks, once a spoonful. Some slime. Cramps on the left. Hot and sweaty at night.' },
      { who:'dr', text:'Are you keeping fluids down and passing urine normally? Any dizziness standing up, bruising, or feeling very drowsy?', dom:'dg', why:'Dehydration and HUS screen' },
      { who:'pt', text:'Drinking loads, weeing fine, no dizziness, no bruises.' },
      { who:'dr', text:'What have you taken for it so far? And what do you do for work?', dom:'dg', why:'Finds loperamide and occupation' },
      { who:'pt', text:'Paracetamol, and four loperamide yesterday. I make sandwiches and coffee in a café.' },
      { phase:'Explanation', clock:'5–8 min', who:'dr', text:'With blood and a fever this is more than an ordinary tummy bug — it’s an infection of the bowel lining, probably picked up from food on the trip. I’d like a stool sample today and some blood tests tomorrow morning. Please stop the loperamide — slowing things down can make some of these infections worse.', dom:'cm', why:'Plain-language diagnosis, investigations, stop antimotility' },
      { who:'pt', text:'Can’t I just have antibiotics to stop it?' },
      { who:'dr', text:'Most settle without them, and for one type of germ antibiotics can do harm. Once the sample is back we’ll know — if you need treatment, I’ll call you. Keep up the sachets and fluids, paracetamol for the temperature, not ibuprofen.', dom:'cm', why:'Antibiotic stewardship with reasons' },
      { phase:'Work and safety-net', clock:'8–12 min', who:'dr', text:'About Saturday — because you handle food, the rule is no work until you’ve had 48 hours with no diarrhoea, and the health protection team, who I have to inform about bloody diarrhoea, may want clear samples first. I know that’s hard with zero hours. I’ll give you a fit note, and it’s worth checking with your employer or Citizens Advice about sick pay.', dom:'ro', why:'Exclusion, notification, and practical help with money' },
      { who:'pt', text:'OK. I didn’t realise. I’ll tell my manager.' },
      { who:'dr', text:'If the blood increases, the pain gets bad, you can’t keep fluids down, you feel faint, you’re passing much less urine, or you notice bruising — call 111 or go to A&E; 999 if you collapse. I’ll ring you with the results. Can you tell me the plan back?', dom:'cm', why:'Specific safety-net and teach-back' },
      { who:'pt', text:'Sample today, bloods tomorrow, stop the loperamide, no work till 48 hours clear, and A&E if it gets worse.' }
    ],
    kb:{
      social:[
        { h:'Insecure work', t:'Zero-hours workers without sick pay are under pressure to return early — a real public health risk in food handling. Address income, not just infection control.' },
        { h:'Household', t:'Lives with parents and a younger sister: hygiene advice protects them; anyone else who becomes ill should also be tested if they handle food or work with vulnerable people.' }
      ],
      legal:[
        { h:'Notification duty', t:'Registered medical practitioners must notify suspected infectious bloody diarrhoea and food poisoning to the proper officer (UKHSA health protection team) without waiting for laboratory confirmation.' }
      ],
      professional:[
        { h:'Learning from an earlier contact', t:'The UTC impression was reasonable two days ago; new blood and persisting fever change the picture. Re-assess rather than inherit a label.' }
      ],
      community:[
        { h:'Support', t:'Citizens Advice (sick pay and benefits); NHS information on diarrhoea and vomiting; travel health advice before future trips (food and water hygiene).' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Blood in stool and fever','Signs of dehydration: dizziness, little urine, unable to keep fluids down','Pallor, bruising, reduced urine (HUS)','Severe or worsening abdominal pain','Immunocompromise; recent antibiotics or hospital stay'],
        psychosocial:['Occupation — food handler','Pay and pressure to return','Household contacts'],
        ice:['Idea: food bug','Concern: blood; money','Expectation: something to stop it so he can work'],
        core:['Travel itinerary and food exposures','Duration, frequency, blood, mucus','Medicines taken — loperamide']
      },
      diagnosis:'Acute infective bloody diarrhoea (dysentery) after travel to Morocco — probably bacterial (Campylobacter, Shigella, Salmonella or STEC); clinically stable; food handler.',
      diagnosisLay:'“This is an infection of the lining of the bowel, probably from food on the trip. It usually settles, but the blood means we need to find out which germ it is.”',
      management:{
        reflectIce:'“You need to get back to work and you can’t afford time off. I want to help you do that safely — for you and for the people you make food for.”',
        psychosocial:'Fit note; sick pay check; Citizens Advice; tell the manager the exclusion rule.',
        sharedPlan:['Stool culture and OCP today (travel history on the form)','FBC, U&E, CRP within 24 hours','Stop loperamide; no antibiotics unless results or microbiology advice say so','Oral rehydration, paracetamol, hygiene','Notify UKHSA health protection team; food-handler exclusion until 48 hours symptom-free and any clearance required'],
        safetyNet:['Increasing blood, severe pain, unable to keep fluids down, dizziness, little urine, bruising or drowsiness — 111 or A&E same day; 999 if collapse','Results call in 48–72 hours','Review if not settling within a week']
      }
    },
    links:[
      { ic:'📋', t:'Diarrhoea', s:'Case walkthrough', href:'../cases/diarrhoea.html' },
      { ic:'💠', t:'Gastroenteritis', s:'Management protocol', href:'management/gastroenteritis.html' }
    ],
    pitfalls:{
      intro:'The UTC label of “gastroenteritis” invites a repeat of “fluids and wait”. The station is about the blood, the medicine he has taken, and the job he does.',
      items:[
        { dom:'dg', fail:'Never asks what he has taken or what he does for work.', why:'Loperamide in dysentery can worsen outcomes, and a food handler with a notifiable infection is a public health risk.', fix:'Ask “What have you tried?” and “What do you do for work?” in every diarrhoea history.' },
        { dom:'cm', fail:'Prescribes ciprofloxacin “to be safe” without a stool sample.', why:'Antibiotics are not routinely needed, may raise HUS risk with STEC, and resistance is common.', fix:'Stool sample first; seek microbiology advice if systemically unwell.' },
        { dom:'ro', fail:'Says “You can’t work, end of” and moves on.', why:'Without help with income he is likely to go in anyway.', fix:'Explain why, then help with the fit note and sick pay.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Acknowledge the UTC letter; hear the work deadline.' },
      { t:'1–5', h:'History', d:'Blood, fever, pain; hydration and HUS screen; what he has taken; occupation; contacts.' },
      { t:'5–8', h:'Explain and investigate', d:'Dysentery; stool sample and bloods; stop loperamide; no routine antibiotics.' },
      { t:'8–12', h:'Work and safety-net', d:'Notification, 48-hour exclusion and clearance, fit note and sick pay, red flags, teach-back.' }
    ],
    wordPics:{
      clearFail:'Accepts “gastroenteritis”, advises fluids only, misses the loperamide and occupation, or prescribes antibiotics and lets him return Saturday.',
      fail:'Requests a stool sample but does not stop the loperamide, does not notify, or gives generic return-to-work advice without the food-handler rule.',
      pass:'Takes a focused history, arranges stool and bloods, stops loperamide, avoids routine antibiotics, notifies, explains food-handler exclusion and safety-nets clearly.',
      clearPass:'All of the Pass, plus: screens for HUS in plain words, explains each decision so he agrees with it, handles the money pressure practically, and confirms the plan by teach-back.'
    },
    avoid:[
      { dont:'“Keep taking the loperamide if it helps you get through work.”', instead:'“Please stop the loperamide — with blood and fever it can make things worse.”', why:'Antimotility agents are avoided in dysentery.' },
      { dont:'“Just wear gloves and you’ll be fine.”', instead:'“Food handlers need 48 hours clear — and sometimes clear samples — before going back.”', why:'Gloves do not prevent transmission of these organisms.' },
      { dont:'“It’s just a bug.”', instead:'“It’s an infection of the bowel lining — we need to find out which germ.”', why:'Blood and fever change the management.' }
    ]
  });

  /* ===== s3. Anaemia results, melaena, and refusal of admission — telephone ===== */
  C.push({
    id:'melaena-declines-admission',
    title:'“I’m only ringing for my blood results — I’m not going into hospital, so don’t ask”',
    type:'telephone', duration:12,
    meta:{ age:32, sex:'M',
      setting:'Telephone — results call booked after a nurse practitioner arranged bloods two days ago.',
      system:'Gastroenterology / Results — blood results after tiredness and breathlessness',
      checked:CHECKED,
      blueprint:{ difficulty:3, lifeStage:'adult', groups:['Investigations & results','Urgent & unscheduled care','Mental health & addiction','Professional & ethical','Health disadvantage & vulnerabilities'], type:'telephone', thirdParty:false }
    },
    ceg:['Investigations & results','Urgent & unscheduled care','Mental health & addiction'],
    brief:'Mr Jordan Fletcher, 32, had a bleeding H. pylori-positive gastric ulcer 18 months ago; he did not finish eradication therapy, stopped his omeprazole, and eradication was never confirmed. He drinks about eight 440 ml cans of 5% lager a day (around 18 units), starting first thing in the morning since his separation. A nurse practitioner saw him two days ago for tiredness, breathlessness and palpitations: pulse 112, BP 98/60, pale. Bloods: Hb 74 g/L, MCV 71, urea 11.8 with normal creatinine (disproportionate rise — suggests upper GI blood), GGT 214, ALT 58, platelets 410; ferritin pending. On the call he reveals black stools daily for five days, epigastric pain, and light-headedness on standing. Glasgow-Blatchford score is about 14 — high risk; he needs same-day hospital assessment and endoscopy. He refuses. HIDDEN AGENDA: his daughter Mia, 7, is staying with him this week while her mother is abroad; there is no-one to look after her, and he fears that if he is admitted, his drinking will come out and he will lose contact with her. He also had a bad experience on a ward last time (“they treated me like a drunk”). The candidate must explain the risk clearly (including death), explore and address his reasons, assess capacity (understand, retain, weigh, communicate), respect a capacitous refusal while keeping the door open, and negotiate the safest alternative: an adult with Mia tonight (his sister), advice from the on-call medical or gastroenterology team today (for example a next-morning same-day emergency care slot), PPI as agreed with that team, thiamine, not stopping alcohol suddenly, no iron until assessed, explicit 999 triggers, documentation and a call-back. Child safety must be addressed directly but without threat.',
    stem:{
      name:'Jordan Fletcher', age:'32-year-old man',
      pmh:['Bleeding gastric ulcer 18 months ago — OGD: gastric ulcer, CLO test positive for H. pylori; transfused 2 units','Alcohol-use disorder (recorded)'],
      meds:['No current medicines (omeprazole and eradication therapy prescribed 18 months ago — not reordered; eradication not confirmed)'],
      allergy:'No known drug allergies',
      recent:'Advanced nurse practitioner (2 days ago): “Tired all the time, breathless on stairs, palpitations for 2 weeks. HR 112 regular, BP 98/60, RR 18, SpO2 97%, T 36.4 °C. Looks pale. Chest clear, HS normal. Bloods sent; review with results.” Results (2 days ago): Hb 74 g/L (130–180), MCV 71 fL (80–100), MCH 22 pg (27–33), WCC 8.1, platelets 410 ×10⁹/L (150–400); urea 11.8 mmol/L (2.5–7.8), creatinine 78 µmol/L (60–110); bilirubin 17, ALT 58 U/L (<50), GGT 214 U/L (<60), albumin 37 g/L; ferritin pending.',
      reason:'Telephone appointment: “Blood test results.”'
    },
    script:{
      data:{ kind:'Blood results (2 days ago)', values:[
        ['Haemoglobin','74 g/L','130–180'],
        ['MCV','71 fL','80–100'],
        ['MCH','22 pg','27–33'],
        ['White cell count','8.1 ×10⁹/L','4.0–11.0'],
        ['Platelets','410 ×10⁹/L','150–400'],
        ['Urea','11.8 mmol/L','2.5–7.8'],
        ['Creatinine','78 µmol/L','60–110'],
        ['Bilirubin','17 µmol/L','<21'],
        ['ALT','58 U/L','<50'],
        ['GGT','214 U/L','<60'],
        ['Albumin','37 g/L','35–50'],
        ['Ferritin','pending',''] ] },
      opening:'“Hi, it’s Jordan Fletcher. The nurse said to ring for my blood results. I just want to know what they are — I’m not going into hospital, so please don’t ask me.”',
      facts:[
        { topic:'Symptoms (if asked)', text:'“Knackered. Out of breath on the stairs. Heart racing. Light-headed when I stand up quick.” No collapse, no chest pain.' },
        { topic:'Stools (if asked about bowels or bleeding)', text:'“They’ve been black, like tar, every day for about five days. Smell horrible.” No fresh red blood. Not taking iron or Pepto-Bismol.' },
        { topic:'Vomiting and pain (if asked)', text:'No vomiting, no blood or coffee grounds. “Burning in the top of my stomach, goes through to my back sometimes. Worse after a drink.” No difficulty swallowing. Appetite poor; jeans a bit looser.' },
        { topic:'Medicines (if asked)', text:'“I stopped the omeprazole ages ago — felt fine. I didn’t finish the antibiotics either.” Takes ibuprofen “now and then” for his back — three or four this week.' },
        { topic:'Alcohol (if asked)', text:'“Eight cans a day — normal lager, the big cans.” First drink “when I get up, to stop the shakes.” Has had sweats and shakes when he has tried to stop before; no fits. Feels guilty about it. Started after the split with Mia’s mum a year ago.' },
        { topic:'Why not hospital (if asked why)', text:'“Last time they treated me like a drunk. Left me on a trolley all night.” If asked more, or if the doctor seems kind: “And I’ve got my daughter this week. Mia’s seven. Her mum’s in Spain till Sunday. There’s no-one.”' },
        { topic:'Deeper fear (only if the doctor asks what worries him about Mia or social services)', text:'“If I end up in hospital with my drinking, her mum will find out and that’s it — I won’t see her. Or social services get involved.”' },
        { topic:'Support (if asked)', text:'Sister Leanne lives 15 minutes away; “she’d have Mia, probably, but I haven’t asked — she’s sick of me.” Does not drive at the moment. Unemployed since redundancy, on Universal Credit. Smokes 10 a day. No drugs.' },
        { topic:'Capacity (if assessed)', text:'Can repeat back accurately what the doctor said about bleeding and the risk of collapse or death, and weighs it: “I get it — I could die. But I’m not leaving Mia tonight.” Not drunk now — had two cans this morning.' },
        { topic:'Role-player direction', text:'Be defensive at first, softening if the doctor is non-judgemental. Refuse admission tonight whatever is said. If the doctor offers a concrete plan for Mia (asking Leanne) and does not threaten social services, agree to: Leanne staying tonight, a call from the hospital team, and going to the hospital assessment unit tomorrow morning if they can see him. Agree to call 999 if you vomit blood or collapse.' }
      ],
      ice:{
        ideas:'“I’m anaemic because I don’t eat properly.”',
        concerns:'HIDDEN AGENDA — he is the only adult caring for his 7-year-old daughter this week and fears that admission will expose his drinking and cost him contact with her; he also felt judged on a ward last time.',
        expectations:'Results, maybe some iron tablets, and to stay at home.'
      },
      cues:[
        '“I’m not going into hospital, so don’t ask.” — a reason is waiting to be explored.',
        '“Last time they treated me like a drunk.” — shame and a bad experience.',
        '“There’s no-one.” — a child who depends on him tonight.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Interprets the results in context: Hb 74 microcytic, raised urea with normal creatinine, tachycardia and low BP — and asks about melaena, haematemesis, epigastric pain, NSAIDs and the incomplete H. pylori treatment' },
      { dom:'dg', text:'Takes an alcohol history that identifies dependence (morning drinking, withdrawal symptoms) and recognises a high-risk upper GI bleed needing same-day hospital assessment' },
      { dom:'dg', text:'Explores the reasons for refusal and finds the daughter at home and the fear of losing contact' },
      { dom:'cm', text:'Clearly recommends same-day hospital assessment and explains the risks of refusing (further bleeding, collapse, death); assesses and documents capacity for this decision' },
      { dom:'cm', text:'Negotiates the safest alternative: an adult for Mia tonight, discussion with the on-call medical or gastroenterology team today (earliest ambulatory assessment and endoscopy), PPI as agreed, thiamine, stop NSAIDs, no iron yet' },
      { dom:'cm', text:'Advises against stopping alcohol suddenly, offers alcohol service support, gives explicit 999 triggers (vomiting blood, collapse, more black stool, chest pain) and arranges a same-day call-back' },
      { dom:'ro', text:'Non-judgemental throughout; addresses the child’s safety honestly without threat; respects his autonomy while keeping the offer of admission open' }
    ],
    worked:[
      { lbl:'Results with meaning', txt:'“Your blood count is about half what it should be, and another test suggests blood is being digested in the gut. With the black stools and your old ulcer, I think the ulcer is bleeding again.”' },
      { lbl:'Explore the no', txt:'“You said straight away you wouldn’t go into hospital. Can you tell me what’s behind that?”' },
      { lbl:'Honest risk', txt:'“I have to be straight with you: a bleeding ulcer can suddenly get much worse. People can collapse, and some die. That’s why I’m recommending hospital today.”' },
      { lbl:'Capacity, kindly', txt:'“Just so I know I’ve explained it properly — can you tell me in your own words what might happen if you stay at home?”' },
      { lbl:'Child safety without threat', txt:'“This isn’t about getting anyone involved — it’s that if you collapse tonight, Mia would be alone with you. Could Leanne come over or have her?”' }
    ],
    learning:'A refusal is the start of the conversation, not the end. Explore the reason (here: a child at home, fear of losing contact, previous stigma), give honest information about risk including death, then assess capacity for the specific decision (understand, retain, use or weigh, communicate — Mental Capacity Act 2005). An unwise decision does not mean incapacity, and recent alcohol does not automatically remove capacity. If he has capacity, respect the refusal (GMC decision-making and consent guidance) and reduce risk: speak to the on-call medical or gastroenterology team today (many units offer next-day ambulatory endoscopy for patients who decline admission), agree PPI with them, stop NSAIDs, prescribe thiamine for a dependent drinker, advise against abrupt alcohol cessation, avoid starting oral iron before endoscopy (it blackens stools and confuses monitoring), give clear 999 advice, and document thoroughly. When a dependent child is at home with a parent at risk of collapse, secure another adult now. H. pylori status should be rechecked (at endoscopy, or by stool antigen or breath test at least two weeks off PPI).',
    knowledge:{
      guideline:'NICE CG141 Acute upper gastrointestinal bleeding in over 16s: management (2012, updated 2016) · NICE CG184 Gastro-oesophageal reflux disease and dyspepsia in adults (2014, updated 2019) · Mental Capacity Act 2005 and Code of Practice · GMC Decision making and consent (2020) · NICE CG100 Alcohol-use disorders: diagnosis and management of physical complications (2010, updated 2017) · NICE CG115 Alcohol-use disorders: diagnosis, assessment and management of harmful drinking and dependence (2011)',
      summary:'High-risk upper GI bleed in a dependent drinker who declines admission: find the reason, give honest risk, assess capacity, protect the child, and negotiate the safest next step with the on-call team.',
      points:[
        { h:'Recognising a significant upper GI bleed', t:'Melaena, haematemesis or coffee-ground vomit; tachycardia, low BP, postural symptoms; Hb drop; urea raised out of proportion to creatinine. The Glasgow-Blatchford score uses urea, Hb, systolic BP, pulse, melaena, syncope, hepatic disease and heart failure — a score of 0 is low risk; here it is around 14.' },
        { h:'Capacity', t:'Decision-specific and time-specific. Presume capacity; take practicable steps to help him decide. Test: understand, retain, use or weigh, communicate. Document the information given, his reasoning and the outcome. Intoxication can impair capacity — check whether he is intoxicated now.' },
        { h:'When a capacitous patient declines', t:'Respect the decision, keep the offer open, and negotiate the next best option: on-call team advice, earliest ambulatory endoscopy, clear return triggers, someone with him, a call-back. Never imply he cannot come back later.' },
        { h:'Medicines', t:'Stop NSAIDs. A PPI (for example omeprazole — usual adult dose 20–40 mg once daily; NICE/SPC; check the SPC, BNF and local formulary; SPC: omeprazole) as agreed with the on-call team. Thiamine for dependent drinkers (usual adult dose 100 mg two or three times daily orally; NICE/SPC; check the SPC, BNF and local formulary; SPC: thiamine). Defer oral iron until the bleeding source is assessed.' },
        { h:'Alcohol dependence', t:'Morning drinking and withdrawal symptoms mean dependence: do not advise stopping suddenly (withdrawal seizures, delirium tremens). Offer referral to the community alcohol service for assisted withdrawal; AUDIT and SADQ help quantify. Raised GGT and ALT fit alcohol; check liver status later.' },
        { h:'H. pylori', t:'Incomplete eradication and no test of cure: test at endoscopy, or by stool antigen or urea breath test at least 2 weeks after stopping PPI and 4 weeks after antibiotics.' },
        { h:'The child', t:'A seven-year-old alone with a parent at risk of collapse is a safety issue now. Secure another responsible adult tonight. Consider whether wider safeguarding advice is needed, and be open with him about that rather than threatening.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello Jordan, it’s Dr Hussain. Thanks for ringing. Before the results — how have you been since you saw the nurse?', dom:'ro', why:'Hears him before results' },
      { who:'pt', text:'Knackered, out of breath. Just tell me the results — and I’m not going into hospital.' },
      { phase:'Data gathering', clock:'1–4 min', who:'dr', text:'OK, I’ll be straight with you. Your blood count is quite low. Can I ask a few questions to work out why? Have your stools been black, or have you vomited any blood?', dom:'dg', why:'Targeted bleeding history' },
      { who:'pt', text:'Black every day for five days. No sick. Burning in my stomach.' },
      { who:'dr', text:'Any ibuprofen or aspirin? Did you finish the ulcer treatment last time? And how much are you drinking at the moment — do you need a drink in the morning?', dom:'dg', why:'NSAIDs, H. pylori, alcohol dependence' },
      { who:'pt', text:'A few ibuprofen. Didn’t finish the tablets. Eight cans a day; first thing, yeah, for the shakes.' },
      { phase:'Explanation', clock:'4–6 min', who:'dr', text:'Thank you for being honest. I think your ulcer is bleeding again. Your blood count is half what it should be, your heart is racing to make up for it, and a bleed like this can suddenly get worse — people can collapse and some die. I’m recommending you go to hospital today for a camera test and treatment.', dom:'cm', why:'Clear, honest risk and recommendation' },
      { who:'pt', text:'No. Last time they treated me like a drunk.' },
      { who:'dr', text:'That sounds like it was horrible, and I’m sorry. Is there anything else making today difficult?', dom:'ro', why:'Acknowledges and explores further' },
      { who:'pt', text:'I’ve got Mia, my daughter, this week. Her mum’s away. If I end up in hospital with the drinking, I’ll lose her.' },
      { phase:'Capacity and negotiation', clock:'6–10 min', who:'dr', text:'You’re trying to protect her — that matters. Can you tell me in your own words what could happen if you stay at home?', dom:'cm', why:'Capacity: understand, retain, weigh' },
      { who:'pt', text:'It could bleed more, I could pass out, I could die. I get it. I’m still not leaving her tonight.' },
      { who:'dr', text:'I respect that it’s your decision. But if you collapse tonight, Mia would be alone with you. Could your sister stay over or have her? Then I’ll speak to the hospital team now about seeing you first thing tomorrow, and ask them to make sure you’re treated with respect.', dom:'cm', why:'Child safety, earliest alternative, addresses stigma' },
      { who:'pt', text:'I’ll ask Leanne. Tomorrow morning I could do.' },
      { who:'dr', text:'Good. No more ibuprofen. Don’t stop drinking suddenly — that can cause fits — and I’ll prescribe vitamin B1 and, if the hospital team agree, a stomach-protecting tablet today. I won’t start iron until you’ve been seen.', dom:'cm', why:'Risk-reducing medicines and alcohol safety' },
      { phase:'Safety-net and close', clock:'10–12 min', who:'dr', text:'If you vomit blood, pass more black stool, feel faint, collapse or get chest pain — call 999 straight away, whatever the time. I’ll ring you back within the hour once I’ve spoken to the hospital. Can you tell me what you’ll do?', dom:'cm', why:'Explicit 999 triggers and teach-back' },
      { who:'pt', text:'Ring Leanne now. 999 if I’m sick with blood or pass out. Wait for your call about tomorrow.' }
    ],
    kb:{
      social:[
        { h:'Parenting and shame', t:'A separated father with a drinking problem may avoid services for fear of losing contact. Naming his care for Mia as a strength builds trust.' },
        { h:'Isolation and money', t:'Redundancy, Universal Credit and a strained relationship with his sister limit his options; ask permission to involve her.' }
      ],
      legal:[
        { h:'Mental Capacity Act 2005', t:'Presumption of capacity; unwise decisions are allowed; capacity is decision-specific. Document the assessment.' },
        { h:'Children Act duties', t:'The welfare of the child is paramount. Immediate safety (another adult present) comes first; consider safeguarding advice proportionately and transparently.' }
      ],
      professional:[
        { h:'Documentation', t:'Record the advice given, the risks explained in his words, the capacity assessment, the alternative plan, who was contacted and the safety-net.' },
        { h:'Advocacy', t:'Asking the receiving team to be aware of his previous experience is reasonable and helps engagement.' }
      ],
      community:[
        { h:'Support', t:'Community alcohol service (assisted withdrawal); Al-Anon and family support for his sister; Citizens Advice; Drinkline.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Melaena or haematemesis','Syncope or postural symptoms','Chest pain or breathlessness at rest','Liver disease signs','Alcohol withdrawal seizures'],
        psychosocial:['Who depends on him — Mia','Support — sister','Previous hospital experience','Money and work'],
        ice:['Idea: anaemia from poor diet','Concern: losing contact with his daughter; being judged','Expectation: results, iron, stay home'],
        core:['NSAIDs','H. pylori treatment history','Alcohol quantity and dependence','Weight and appetite']
      },
      diagnosis:'Symptomatic microcytic anaemia from probable recurrent bleeding peptic ulcer (incomplete H. pylori eradication, NSAIDs, alcohol); high Glasgow-Blatchford score; alcohol dependence. Capacitous refusal of same-day admission.',
      diagnosisLay:'“Your old stomach ulcer is very likely bleeding again, and you’ve lost about half your blood count. That can get dangerous quickly.”',
      management:{
        reflectIce:'“You want to protect Mia and you don’t want to be judged again. Let’s make a plan that keeps you both safer tonight and gets you seen as soon as you’re able.”',
        psychosocial:'Ask Leanne to stay or take Mia; advocate for respectful care; alcohol service when stable.',
        sharedPlan:['Recommend admission today; offer remains open','Capacity assessed and documented','On-call medical or gastroenterology discussion today — earliest ambulatory assessment and endoscopy','PPI as agreed; stop NSAIDs; thiamine; no iron yet','Do not stop alcohol suddenly; alcohol service referral'],
        safetyNet:['999 for vomiting blood, more black stool, faintness, collapse or chest pain','Another adult with Mia tonight','GP call-back within the hour with the hospital plan']
      }
    },
    links:[
      { ic:'📋', t:'Anaemia', s:'Case walkthrough', href:'../cases/anaemia.html' },
      { ic:'📋', t:'Alcohol', s:'Case walkthrough', href:'../cases/alcohol.html' },
      { ic:'💠', t:'Alcohol — problem drinking', s:'Management protocol', href:'management/alcohol-problem-drinking.html' }
    ],
    pitfalls:{
      intro:'Candidates either accept the refusal and prescribe iron, or argue until time runs out. The station rewards finding the reason and building the safest plan he will accept.',
      items:[
        { dom:'dg', fail:'Explains anaemia and prescribes ferrous sulfate without asking about black stools.', why:'Misses an active upper GI bleed with haemodynamic compromise.', fix:'Ask about melaena, haematemesis, NSAIDs and alcohol in every unexplained anaemia.' },
        { dom:'cm', fail:'Accepts “no” and ends the call with “ring if worse”.', why:'No capacity assessment, no alternative, and a child left with a parent at risk of collapse.', fix:'Explore, explain risk, assess capacity, negotiate, protect the child, document, call back.' },
        { dom:'ro', fail:'Warns that social services will have to be told.', why:'A threat confirms his fear and ends engagement; immediate safety can be secured another way.', fix:'Frame it as Mia’s safety tonight and solve it together.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Hear the “no” — don’t argue yet.' },
      { t:'1–4', h:'Targeted history', d:'Black stools, pain, NSAIDs, H. pylori, alcohol dependence.' },
      { t:'4–6', h:'Explain and recommend', d:'Probable bleeding ulcer; honest risk; hospital today.' },
      { t:'6–10', h:'Explore and negotiate', d:'Mia and stigma; capacity; adult for Mia; on-call team; medicines.' },
      { t:'10–12', h:'Safety-net', d:'999 triggers, call-back, teach-back, document.' }
    ],
    wordPics:{
      clearFail:'Reads the results, prescribes iron, misses melaena or accepts the refusal without exploring it; no capacity assessment, no thought for the child.',
      fail:'Recognises the bleed and recommends admission, but argues rather than explores, does not assess capacity, or leaves no alternative plan or safety-net.',
      pass:'Recognises a significant upper GI bleed, recommends admission with honest risk, explores the refusal, assesses capacity, arranges another adult for Mia, contacts the on-call team and gives clear 999 advice.',
      clearPass:'All of the Pass, with warmth: uses his care for Mia as common ground, addresses the previous stigma, adds thiamine, NSAID and alcohol-withdrawal advice, defers iron for a reason, and closes with a call-back and teach-back.'
    },
    avoid:[
      { dont:'“If you won’t go, I’ll have to involve social services.”', instead:'“If you collapse tonight, Mia would be alone with you — who could be with her?”', why:'Solves the safety issue without a threat.' },
      { dont:'“You need to stop drinking today.”', instead:'“Please don’t stop suddenly — with your morning shakes that could cause fits. The alcohol team can help you cut down safely.”', why:'Abrupt cessation in dependence is dangerous.' },
      { dont:'“Fine, your choice — ring if it gets worse.”', instead:'“It is your choice. Let’s make the safest plan around it and I’ll ring you back within the hour.”', why:'Respecting autonomy still requires risk reduction and follow-up.' }
    ]
  });

  /* ===== s4. After a TIA — new medicines blamed for dizziness and aches — telephone ===== */
  C.push({
    id:'post-tia-medicine-side-effects',
    title:'“Since the stroke clinic gave me these tablets I feel dizzy and achy — I want to stop them”',
    type:'telephone', duration:12,
    meta:{ age:58, sex:'F',
      setting:'Telephone — routine appointment requested by the patient 12 days after a TIA clinic review.',
      system:'Cardiovascular / Prescribing — new symptoms after secondary prevention is started',
      checked:CHECKED,
      blueprint:{ difficulty:2, lifeStage:'adult', groups:['Prescribing','Long-term conditions & cancer','Ethnicity, culture & diversity'], type:'telephone', thirdParty:false }
    },
    ceg:['Prescribing','Long-term conditions & cancer'],
    brief:'Mrs Gloria Mensah, 58, Ghanaian-British hospital ward clerk, had a TIA (right arm weakness and word-finding difficulty for 25 minutes) 15 days ago. The TIA clinic started clopidogrel 75 mg and atorvastatin 80 mg and increased losartan from 50 mg to 100 mg (she also takes amlodipine 10 mg) because clinic BP was 154/86. Since then: light-headedness, mostly on standing up or getting out of bed; aching thighs and shoulders; tiredness; some bloating. She wants to stop “all the new tablets”. She cannot come in today (not allowed to drive for a month after a TIA; husband away until tomorrow) but has her husband’s validated home BP monitor. The tasks: characterise the dizziness (postural, not vertigo; no focal neurology), screen for recurrent TIA and bleeding on clopidogrel, ask about muscle symptoms (weakness, dark urine), and use the home monitor during the call: seated 104/62, standing after one minute 86/54 with symptoms — postural hypotension. HIDDEN: she has been taking BOTH her old losartan 50 mg tablets from her dosette box AND the new 100 mg tablets (150 mg a day) — found only if the candidate asks exactly how she takes her tablets. Plan: stop the extra 50 mg immediately and continue 100 mg; slow position changes and fluids; nurse lying/standing BP and bloods tomorrow (U&E — renal function and potassium after an ARB dose change; CK, LFT, TSH, FBC); continue clopidogrel and atorvastatin, explaining why; statin muscle symptom pathway (CK > 5 × ULN — stop); pharmacist medicines review and a single updated dosette; fit note if needed; FAST and 999 safety-net. Concern: her mother had a disabling stroke at 60 — she is frightened of stroke AND of the tablets.',
    stem:{
      name:'Gloria Mensah', age:'58-year-old woman',
      pmh:['TIA 15 days ago — right arm weakness and expressive dysphasia for 25 minutes','Hypertension (10 years)','Pre-diabetes (HbA1c 44, last year)'],
      meds:['Amlodipine 10 mg once daily','Losartan 100 mg once daily (increased from 50 mg by TIA clinic 12 days ago)','Atorvastatin 80 mg at night (new)','Clopidogrel 75 mg once daily (new)'],
      allergy:'Ramipril — persistent dry cough (2019)',
      recent:'TIA clinic letter (12 days ago): “Probable left hemisphere TIA. CT and CT angiography: no acute abnormality; carotids <50% stenosis bilaterally. ECG sinus rhythm; 72-hour monitor: no atrial fibrillation. LDL 3.9 mmol/L, non-HDL 4.6. BP 154/86 (three readings, lowest 150/84). Plan: clopidogrel 75 mg, atorvastatin 80 mg, losartan increased to 100 mg — please check U&E in 1–2 weeks and titrate BP to below 130/80. Advised not to drive for one month.” No U&E since.',
      reason:'Telephone appointment: “Side effects from new tablets.”'
    },
    script:{
      opening:'“Hello doctor. Since the stroke clinic changed my tablets I feel terrible — dizzy, aching all over, tired. I read the leaflet and the blood pressure one says dizziness. I want to stop the new ones, honestly.”',
      facts:[
        { topic:'The dizziness (if asked to describe)', text:'“Light-headed, like I might faint, when I stand up — getting out of bed, getting up from the sofa. It passes if I sit down.” Not spinning. Started a few days after the changes. Nearly fell once holding the worktop; no injury, no blackout.' },
        { topic:'Stroke symptoms (if asked)', text:'No weakness, numbness, face drooping, speech or vision problems since the TIA. No headache.' },
        { topic:'Heart (if asked)', text:'No chest pain, no palpitations, no breathlessness.' },
        { topic:'Aches (if asked)', text:'“Both thighs and shoulders ache, like after gardening.” Can climb stairs and lift the kettle — no real weakness. Urine normal colour. Began about a week after starting the cholesterol tablet.' },
        { topic:'Bleeding (if asked)', text:'Bruises a bit more easily. No black stools, no blood in urine, no nosebleeds.' },
        { topic:'Other', text:'Some bloating, bowels normal, no weight loss. Tired. Drinks “not much — I don’t want to keep going to the toilet at work”.' },
        { topic:'Home BP (only if the doctor asks you to measure it)', text:'You have Kofi’s machine. Sitting, after resting: “104 over 62, pulse 76.” After standing for a minute (only if asked to stand and repeat): “86 over 54… I feel a bit swimmy.” Sit down if told.' },
        { topic:'How she takes her tablets (only if asked exactly how she takes them, or to read the boxes)', text:'“I have my pill organiser from before, with the amlodipine and the losartan 50. Then the chemist gave me the new boxes — the losartan 100, the clopidogrel, the statin — so I take those as well, every morning.” Not aware this means losartan twice.' },
        { topic:'Family and fears (if asked what worries her)', text:'“My mother had a stroke at 60. She couldn’t speak or walk after. I can’t end up like that.” Then: “But these tablets are making me ill.”' },
        { topic:'Social', text:'Ward clerk at the hospital — off this week. Husband Kofi back tomorrow. Two adult sons. Does not smoke, no alcohol. Church on Sundays. Cannot drive for a month.' },
        { topic:'Role-player direction', text:'Be fed up but reasonable. Reveal the tablet doubling only if asked how you take your tablets. If the doctor explains that the double dose may cause the dizziness, be relieved. If offered ramipril, refuse — it gave you a cough. Agree to keep the clopidogrel and statin if the doctor explains why and has a plan for the aches.' }
      ],
      ice:{
        ideas:'“The new tablets are poisoning me — the leaflet says dizziness.”',
        concerns:'HIDDEN AGENDA — She has been taking the old losartan 50 mg from her pill organiser as well as the new 100 mg, without realising. Openly: frightened of a stroke like her mother’s, and frightened of the tablets.',
        expectations:'Permission to stop the new tablets.'
      },
      cues:[
        '“The leaflet says dizziness.” — she has a theory worth exploring.',
        '“My mother had a stroke at 60.” — the fear that can make her keep going with treatment.',
        '“I take those as well.” — the dosing error.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Characterises the dizziness as postural light-headedness, screens for recurrent TIA, cardiac symptoms and bleeding on clopidogrel' },
      { dom:'dg', text:'Asks about muscle symptoms in detail (site, weakness, dark urine) and timing in relation to atorvastatin' },
      { dom:'dg', text:'Uses the home BP monitor during the call to show postural hypotension, and asks exactly how she takes each tablet — finding the duplicated losartan' },
      { dom:'cm', text:'Stops the duplicate losartan 50 mg, keeps losartan 100 mg, advises slow position changes and adequate fluids, and arranges a nurse lying/standing BP and bloods (U&E, CK, LFT, FBC, TSH) tomorrow' },
      { dom:'cm', text:'Advises continuing clopidogrel and atorvastatin, explains their benefit after TIA, and sets out the statin muscle-symptom plan (CK > 5 × ULN — stop; otherwise review, rechallenge or switch)' },
      { dom:'cm', text:'Arranges a pharmacist medicines review and a single updated organiser; offers a fit note; gives FAST and 999 safety-netting and a follow-up date' },
      { dom:'ro', text:'Acknowledges her experience and her fear of stroke, uses shared decision-making, and changes one thing at a time with her agreement' }
    ],
    worked:[
      { lbl:'Exactly how', txt:'“Can you read me each box you take from, and tell me which ones go in the pill organiser?”' },
      { lbl:'Measure it now', txt:'“You’ve got Kofi’s machine — could you sit for a minute and take a reading? Then stand up, hold on to something steady, and take it again after a minute.”' },
      { lbl:'Explain the finding', txt:'“Your pressure drops when you stand — that’s the light-headedness. You’ve been taking 150 of losartan instead of 100. Let’s stop the old 50s today; that alone may fix it.”' },
      { lbl:'Why keep the others', txt:'“The clopidogrel and the statin are the two tablets that most reduce the chance of the stroke you’re worried about. Let’s check your muscle blood test before deciding anything about the statin.”' }
    ],
    learning:'When a patient blames new medicines, take the symptom seriously and look for a mechanism before stopping anything. Ask exactly how each tablet is taken — duplicated doses after a change (old stock in a pill organiser plus a new box) are common. Remote consultations can still gather data: a validated home monitor gives seated and standing readings (a systolic fall of 20 mmHg or more, or a diastolic fall of 10 or more, is postural hypotension). After a TIA, antiplatelet therapy and high-intensity statin are the key preventive treatments; the BP target is usually below 130/80, but postural symptoms and falls take priority. An ARB dose increase needs U&E (creatinine, potassium) in 1–2 weeks. For statin muscle symptoms: check CK; if more than 5 × the upper limit of normal, stop; otherwise consider a pause and rechallenge, a lower dose or another statin. Change one medicine at a time so the cause can be identified. A Black African or Caribbean family origin is relevant to antihypertensive choice (ARB rather than ACE inhibitor) — and here she also has a documented ACE-inhibitor cough. Car drivers must not drive for one month after a TIA.',
    knowledge:{
      guideline:'NICE NG128 Stroke and transient ischaemic attack in over 16s: diagnosis and initial management (2019, updated 2022) · NICE NG136 Hypertension in adults: diagnosis and management (2019, updated 2023) · NICE NG238 Cardiovascular disease: risk assessment and reduction, including lipid modification (2023) · NICE NG5 Medicines optimisation (2015) · DVLA Assessing fitness to drive (TIA: car drivers 1 month)',
      summary:'Find the postural drop and the double losartan; stop the duplicate, keep the clopidogrel and statin, check U&E and CK tomorrow, and safety-net for stroke.',
      points:[
        { h:'Dizziness after BP changes', t:'Ask: spinning (vertigo), unsteadiness, or light-headedness on standing? Postural light-headedness points to hypotension. Measure seated then after 1 minute standing (and 3 minutes if possible). Falls risk matters more than tight targets.' },
        { h:'Dosing errors', t:'Old stock, pill organisers and new boxes are a classic route to duplication after a dose change. Ask the patient to read every box. Fix with a single updated list, community pharmacist review (New Medicine Service) and, if helpful, a pharmacy-filled organiser.' },
        { h:'ARB monitoring', t:'Check U&E 1–2 weeks after starting or increasing an ARB: a creatinine rise above 30% or potassium above 6.0 needs action. Dehydration and overdosing increase risk.' },
        { h:'Statin-associated muscle symptoms', t:'Ask about weakness and dark urine. Check CK (not routinely if asymptomatic). CK over 5 × ULN — stop and recheck. Lower CK with tolerable symptoms — consider continuing, pausing and rechallenging, a lower dose, or switching (for example to rosuvastatin). Check TSH and vitamin D if symptoms persist.' },
        { h:'Secondary prevention after TIA', t:'Clopidogrel 75 mg long term (or per clinic plan); high-intensity statin (atorvastatin 80 mg) with a target of over 40% non-HDL reduction; BP below 130/80 when tolerated; lifestyle. Stopping these raises stroke risk.' },
        { h:'Driving and work', t:'Car drivers must not drive for 1 month after a TIA (no need to tell the DVLA if fully recovered). A fit note is reasonable while symptoms settle.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello, Mrs Mensah? It’s Dr Patel. I can see you were at the TIA clinic recently. Tell me how you’ve been since.', dom:'ro', why:'Uses the record, invites her story' },
      { who:'pt', text:'Dizzy, achy, tired. The leaflet says the blood pressure one causes dizziness. I want to stop them.' },
      { phase:'Data gathering', clock:'1–5 min', who:'dr', text:'That sounds miserable. Tell me more about the dizziness — is the room spinning, or do you feel faint? When does it happen?', dom:'dg', why:'Characterises the dizziness' },
      { who:'pt', text:'Faint, when I stand up. It goes if I sit.' },
      { who:'dr', text:'Any weakness, numbness, speech or vision problems since the TIA? Any chest pain, palpitations, black stools or unusual bleeding?', dom:'dg', why:'Recurrent TIA, cardiac and bleeding screen' },
      { who:'pt', text:'No, none of that. A few more bruises.' },
      { who:'dr', text:'And the aches — where, and is there any real weakness or dark urine?', dom:'dg', why:'Statin muscle symptom assessment' },
      { who:'pt', text:'Thighs and shoulders. No weakness. Urine’s normal.' },
      { who:'dr', text:'Do you have a blood pressure machine at home? Could you take a reading sitting, then standing after a minute, holding on to something?', dom:'dg', why:'Remote examination with the patient’s own device' },
      { who:'pt', text:'Sitting 104 over 62. Standing… 86 over 54. I feel swimmy.' },
      { who:'dr', text:'Please sit down. Could you read me the boxes you take your tablets from, and what’s in your pill organiser?', dom:'dg', why:'Finds the duplication' },
      { who:'pt', text:'Organiser has amlodipine and losartan 50. Then the new boxes — losartan 100, clopidogrel, the cholesterol one.' },
      { phase:'Explanation and plan', clock:'5–10 min', who:'dr', text:'That explains a lot. You’re taking losartan twice — 150 instead of the 100 the clinic wanted — so your pressure drops when you stand. From tomorrow morning, take out the losartan 50 and keep the 100. Get up slowly and drink a bit more.', dom:'cm', why:'Clear explanation and a single change' },
      { who:'pt', text:'Oh! I didn’t know. And the others?' },
      { who:'dr', text:'I know your mum had a stroke — the clopidogrel and the cholesterol tablet are the two that most protect you from that. Aches can be from the statin, so I’ll check a muscle blood test tomorrow with your kidney tests. If it’s high, we stop it; if not, we have options like a different statin.', dom:'cm', why:'Links to her fear; statin pathway; bloods' },
      { who:'pt', text:'Kofi’s back tomorrow — he can bring me.' },
      { phase:'Close', clock:'10–12 min', who:'dr', text:'The nurse will check your blood pressure lying and standing and take bloods tomorrow, and I’ll ask the pharmacist to sort one clear list. If your face drops, your arm goes weak or your speech goes — even briefly — call 999. What are you going to change tonight?', dom:'cm', why:'Follow-up, FAST safety-net, teach-back' },
      { who:'pt', text:'Take the losartan 50 out of the box, keep the others, get up slowly, see the nurse tomorrow — and 999 if I get stroke signs.' }
    ],
    kb:{
      social:[
        { h:'Health beliefs', t:'Reading the leaflet is a sign of engagement. Respecting her theory and testing it builds trust in the treatment she most needs.' },
        { h:'Work and fluids', t:'Restricting drinks to avoid toilet trips at work worsens postural hypotension; address it practically.' }
      ],
      legal:[
        { h:'Driving', t:'Car drivers: no driving for 1 month after a single TIA; may resume if no residual deficit — no need to notify the DVLA.' }
      ],
      professional:[
        { h:'Interface prescribing', t:'The clinic asked for U&E in 1–2 weeks and BP titration; closing that loop is the practice’s responsibility.' }
      ],
      community:[
        { h:'Support', t:'Community pharmacist (New Medicine Service, medicines review); Stroke Association information; home BP monitoring advice.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['New focal neurology — recurrent TIA or stroke','Syncope or falls with injury','Bleeding on clopidogrel','Muscle weakness or dark urine'],
        psychosocial:['Fear of stroke (mother)','Work and driving restrictions','Fluid restriction at work'],
        ice:['Idea: new tablets are the cause','Concern: stroke like her mother; side effects','Expectation: stop the new tablets'],
        core:['Exactly how each tablet is taken','Home BP readings seated and standing','Timing of symptoms in relation to each change']
      },
      diagnosis:'Symptomatic postural hypotension from an unintended losartan overdose (150 mg daily) after a dose change; possible statin-associated muscle symptoms; secondary prevention after TIA otherwise appropriate.',
      diagnosisLay:'“Your blood pressure is dropping when you stand because you’ve been taking extra losartan by mistake. The aches may be the cholesterol tablet — a blood test will tell us more.”',
      management:{
        reflectIce:'“You’re worried the tablets are harming you, and you’re frightened of a stroke like your mum’s. Let’s fix what’s causing the dizziness and keep the tablets that protect you.”',
        psychosocial:'Kofi to bring her tomorrow; fit note if needed; drink regularly at work.',
        sharedPlan:['Stop the old losartan 50 mg; continue losartan 100 mg','Nurse lying/standing BP and bloods tomorrow: U&E, CK, LFT, FBC, TSH','Continue clopidogrel and atorvastatin','Statin plan by CK result; consider switching if symptoms persist','Pharmacist review and one updated list or organiser'],
        safetyNet:['999 for face, arm or speech symptoms, even if brief','Same-day contact for fainting, black stools or dark urine with weakness','Review with results in 2–3 days']
      }
    },
    links:[
      { ic:'📋', t:'TIA and stroke', s:'Case walkthrough', href:'../cases/tia-stroke.html' },
      { ic:'📋', t:'Hypertension', s:'Case walkthrough', href:'../cases/hypertension.html' },
      { ic:'💠', t:'TIA', s:'Management protocol', href:'management/tia.html' }
    ],
    pitfalls:{
      intro:'The leaflet theory tempts candidates to agree and stop something — or to dismiss her and insist on everything. The station rewards finding the mechanism.',
      items:[
        { dom:'dg', fail:'Never asks how she actually takes her tablets.', why:'The duplicated losartan is the cause and is only found by asking.', fix:'Ask her to read each box and describe her pill organiser.' },
        { dom:'cm', fail:'Stops the statin and losartan together “to see which it is”.', why:'Two simultaneous changes hide the cause and remove stroke protection.', fix:'Correct the dosing error first; check CK; change one thing at a time.' },
        { dom:'ro', fail:'Says “you must take them or you’ll have a stroke”.', why:'Fear-based instruction ignores her experience and reduces adherence.', fix:'Acknowledge the symptoms, explain the benefit, and agree a plan.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Hear her theory and request.' },
      { t:'1–5', h:'History and remote data', d:'Postural light-headedness; TIA, cardiac, bleeding, muscle screen; home BP seated and standing; read the boxes.' },
      { t:'5–10', h:'Explain and plan', d:'Duplicate losartan; stop the 50 mg; keep clopidogrel and statin; bloods and nurse tomorrow.' },
      { t:'10–12', h:'Close', d:'Pharmacist, fit note, FAST/999, teach-back.' }
    ],
    wordPics:{
      clearFail:'Agrees to stop the new medicines, or insists she keeps taking everything; no postural BP, no question about how she takes them, no stroke safety-net.',
      fail:'Suspects side effects and arranges bloods but misses the duplicated losartan, or makes several changes at once.',
      pass:'Characterises the dizziness, uses the home monitor to show a postural drop, finds the duplicated losartan, corrects it, continues antiplatelet and statin with a CK plan, arranges U&E and nurse review, and safety-nets with FAST.',
      clearPass:'All of the Pass, plus: links the plan to her fear of stroke, addresses fluid restriction at work, involves the pharmacist to prevent recurrence, and confirms the changes by teach-back.'
    },
    avoid:[
      { dont:'“The leaflet lists everything — ignore it.”', instead:'“You were right to notice — let’s work out which tablet and why.”', why:'Validates her engagement and keeps her on board.' },
      { dont:'“Stop the statin and the losartan and we’ll see.”', instead:'“Let’s correct the extra losartan first and check a muscle blood test.”', why:'One change at a time identifies the cause safely.' },
      { dont:'“How about ramipril instead?”', instead:'“You had a cough on ramipril, so we’ll stay with losartan at the right dose.”', why:'Check the allergy and intolerance record.' }
    ]
  });

  /* ===== s5. “My back again” — loin pain and fever, away from home — video ===== */
  C.push({
    id:'loin-pain-away-from-home',
    title:'“My back’s flared up again — can you send codeine to a chemist up here and refer me for physio?”',
    type:'video', duration:12,
    meta:{ age:26, sex:'F',
      setting:'Video — routine slot; the patient is in a hotel room about five hours from the practice.',
      system:'MSK / Urgent care — a back pain request from a patient away from home',
      checked:CHECKED,
      blueprint:{ difficulty:2, lifeStage:'adult', groups:['Urgent & unscheduled care','New & undifferentiated presentations','Prescribing'], type:'video', thirdParty:false }
    },
    ceg:['Urgent & unscheduled care','New & undifferentiated presentations'],
    brief:'Ms Chloe Adeyemi, 26, events coordinator, had mechanical low back pain two years ago that settled with physiotherapy and a short course of codeine. She is working at a trade exhibition in Aberdeen (about five hours from the practice) and asks for codeine and a physiotherapy referral for “another flare”. The pain is different: right-sided, below the ribs at the back (loin), constant for two days and worsening, with fevers, sweats and an episode of shaking last night (rigors), nausea and one vomit this morning, and — only on direct questioning — mild frequency and stinging she had not linked. On video she looks flushed and shivery; her own thermometer reads 38.9 °C and her smartwatch pulse 116. LMP one week ago; not sexually active for over a year. The tasks: recognise probable acute pyelonephritis with possible sepsis (and consider an obstructed infected kidney or renal colic, appendicitis, ectopic pregnancy as less likely), and arrange same-day hospital assessment at the nearest emergency department. HIDDEN: she has been taking leftover co-codamol 30/500 (two tablets four times a day) PLUS paracetamol 1 g four times a day for two days — 8 g of paracetamol a day (about 135 mg/kg at 59 kg), a staggered overdose that needs paracetamol level and LFTs and probably acetylcysteine. She found it only when asked exactly what and how much she has taken. Her concern: she leads the exhibition stand tomorrow and has not told her manager she is unwell. Do not drive; colleague or taxi; take the medicine packets; stop all paracetamol-containing products; 999 if worse; follow-up call.',
    stem:{
      name:'Chloe Adeyemi', age:'26-year-old woman',
      pmh:['Mechanical low back pain 2 years ago — physiotherapy, settled'],
      meds:['No regular medicines','Co-codamol 30/500 — one-off prescription 2 years ago'],
      allergy:'No known drug allergies',
      recent:'No consultations in the last 2 years. Weight 59 kg (recorded 2024).',
      reason:'Video appointment: “Back pain flare — need painkillers and physio.”'
    },
    script:{
      opening:'“Hi doctor — sorry, I’m in a hotel in Aberdeen for work. My back’s flared up like it did two years ago. Could you send some codeine to a chemist up here and refer me for physio when I’m back?”',
      facts:[
        { topic:'The pain (if asked where)', text:'“Here” — you point to the right side of your back, just under the ribs. “It’s not like last time — that was low down in the middle. This is constant. Two days, getting worse.” Doesn’t change much with moving. 7/10. Doesn’t go to the groin.' },
        { topic:'Fever (if asked)', text:'“I’ve been really hot and sweaty, and last night I was shaking so much my teeth chattered.” If asked to measure: you have a thermometer from the hotel shop — “38.9”. Smartwatch heart rate “116”.' },
        { topic:'Gut (if asked)', text:'Nauseous; vomited once this morning; keeping sips of water down. No diarrhoea. Not hungry.' },
        { topic:'Urine (only if asked directly about passing urine)', text:'“Actually — I’ve been going more, and it stings a bit. I thought that was because I’m drinking more water.” No visible blood that you’ve seen. Passing urine — yes, a reasonable amount.' },
        { topic:'Back red flags (if asked)', text:'No numbness in the saddle area, no leg weakness or tingling, no loss of bladder or bowel control. No injury, no heavy lifting beyond the usual stand set-up.' },
        { topic:'Gynae (if asked)', text:'Period a week ago, normal. Not sexually active for over a year. No discharge, no pelvic pain.' },
        { topic:'Painkillers (only if asked exactly what and how much)', text:'“I had some co-codamol left from last time — I’ve taken two, four times a day. And paracetamol in between, two tablets four times a day, because it wasn’t touching it.” For two days. If the doctor explains co-codamol contains paracetamol: “Oh no — I didn’t know.” No ibuprofen. No alcohol.' },
        { topic:'Past history (if asked)', text:'No kidney stones, no previous kidney infections. A couple of cystitis episodes as a teenager.' },
        { topic:'Work and practicalities', text:'“I’m running the stand tomorrow — my manager doesn’t even know I’m ill.” Hire car in the car park. A colleague, Priya, is in the next room. Lives alone at home in Leeds.' },
        { topic:'Role-player direction', text:'You look flushed, tired and a bit shivery; hold a blanket around you. Be keen to get off the call quickly. Reveal the urine symptoms and the exact painkillers only when asked directly. When told to go to A&E, resist once (“I can’t, I’m running the stand”), then agree if the doctor explains why it’s serious and helps with what to tell your manager. Ask: “Can’t you just give me antibiotics?”' }
      ],
      ice:{
        ideas:'“My back has gone again, like last time.”',
        concerns:'HIDDEN AGENDA — She has unknowingly been taking about 8 g of paracetamol a day for two days (co-codamol plus paracetamol). Openly: letting her team down at the exhibition.',
        expectations:'Codeine sent to a local pharmacy and a physiotherapy referral for when she is home.'
      },
      cues:[
        '“It’s not like last time.” — a new pain needing a fresh assessment.',
        '“I was shaking so much my teeth chattered.” — rigors.',
        '“It wasn’t touching it, so I took paracetamol in between.” — double paracetamol.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Clarifies the site and character of the pain and recognises it differs from previous mechanical back pain (loin, constant, with systemic upset)' },
      { dom:'dg', text:'Asks about fever, rigors, vomiting, urinary symptoms, haematuria, back-pain red flags, and LMP and pregnancy possibility; uses self-measured temperature and pulse' },
      { dom:'dg', text:'Asks exactly which painkillers and how much — identifying about 8 g of paracetamol a day for two days' },
      { dom:'cm', text:'Recognises probable pyelonephritis with features of possible sepsis (and the need to exclude an obstructed infected kidney) and arranges same-day assessment at the nearest emergency department rather than codeine or remote antibiotics' },
      { dom:'cm', text:'Advises stopping all paracetamol-containing medicines, taking the packets, and explains that a paracetamol level and liver tests will be needed' },
      { dom:'cm', text:'Advises not to drive (colleague or taxi; 999 if she deteriorates), offers help with work (fit note), and arranges a follow-up call' },
      { dom:'ro', text:'Acknowledges her expectation and work pressure, explains the change of plan clearly without alarming her, and checks understanding' }
    ],
    worked:[
      { lbl:'Show me where', txt:'“Could you put your hand exactly where it hurts most? … That’s higher and more to the side than last time, isn’t it?”' },
      { lbl:'What and how much', txt:'“Tell me exactly what you’ve taken — which tablets, how many, how often, since when.”' },
      { lbl:'Why A&E', txt:'“With a temperature of nearly 39, shaking, a fast pulse and pain over the kidney, I think this is a kidney infection that may be spreading into your blood. You need to be checked, have blood and urine tests and probably a scan today.”' },
      { lbl:'The paracetamol', txt:'“Co-codamol has paracetamol in it too, so you’ve had about twice the safe amount for two days. You probably feel fine from that, but it can affect the liver — the hospital will do a blood test and can give a treatment that protects it.”' }
    ],
    learning:'Don’t inherit the patient’s label. Loin pain with fever, rigors and vomiting is pyelonephritis (or an obstructed infected kidney) until proved otherwise, and a pulse over 110 is a moderate-to-high risk criterion for sepsis (heart rate 91 to 130 in the NICE NG253 table for community settings), with rigors, a temperature near 39 °C and vomiting adding to concern — she needs same-day face-to-face assessment, not remote antibiotics. Away from home, send her to the nearest emergency department (in Scotland, NHS 24 on 111 is the out-of-hours route; 999 in an emergency). Always ask exactly what painkillers someone has taken: combination products (co-codamol, cold remedies) plus plain paracetamol cause unintentional staggered overdoses. A staggered ingestion of more than 75 mg/kg in any 24 hours needs hospital assessment, paracetamol level and LFTs, and usually acetylcysteine. Renal colic needs imaging within 24 hours; fever with suspected stone needs same-day urology assessment. Pregnancy must be considered in any woman of reproductive age with abdominal or loin pain.',
    knowledge:{
      guideline:'NICE NG111 Pyelonephritis (acute): antimicrobial prescribing (2018) · NICE NG253 Suspected sepsis in people aged 16 or over: recognition, assessment and early management (2025) · NICE NG118 Renal and ureteric stones: assessment and management (2019) · NICE CKS Poisoning or overdose — paracetamol (accessed 2026) · Commission on Human Medicines advice on intravenous acetylcysteine for paracetamol overdose (2012)',
      summary:'Not a back flare: probable pyelonephritis with possible sepsis plus an unintentional staggered paracetamol overdose — same-day ED, not codeine.',
      points:[
        { h:'Distinguishing loin from back pain', t:'Loin pain sits at the costovertebral angle, is constant and is unaffected by movement; mechanical back pain varies with posture. New pain with fever, rigors, vomiting or urinary symptoms needs a fresh diagnosis.' },
        { h:'Pyelonephritis', t:'Fever, loin pain, nausea or vomiting, with or without lower urinary tract symptoms. Mild cases can be managed at home with oral antibiotics after a urine culture — but refer to hospital if signs of sepsis, vomiting preventing oral treatment, pregnancy, or suspected obstruction.' },
        { h:'Sepsis risk', t:'High-risk features include respiratory rate 25 or more, heart rate over 130, systolic BP 90 or less, new confusion, or no urine for 18 hours. Moderate-to-high features include heart rate 91–130, rigors, reduced urine output and signs of infection. Moderate-to-high risk needs urgent face-to-face assessment.' },
        { h:'Obstructed infected kidney', t:'Fever plus suspected stone (colicky pain, haematuria) is a urological emergency requiring decompression. Imaging (CT KUB) within 24 hours for suspected renal colic; same-day if fever.' },
        { h:'Staggered paracetamol overdose', t:'More than 75 mg/kg in any 24-hour period taken over more than one hour, or a combination product plus paracetamol: refer for assessment. Treatment is acetylcysteine based on dose, timing and bloods (ALT, INR, creatinine). Symptoms may be absent early.' },
        { h:'Care away from home', t:'Use the nearest ED, NHS 24 (Scotland) or NHS 111 (England); any GP practice can see a temporary resident; record the plan and arrange follow-up with her own practice.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hi Chloe, it’s Dr Mahmood. You’re in Aberdeen — are you somewhere private? Tell me what’s been happening.', dom:'ro', why:'Location matters for the plan; open question' },
      { who:'pt', text:'Hotel room. My back’s flared up like two years ago. Could you send codeine up here and refer me for physio?' },
      { phase:'Data gathering', clock:'1–5 min', who:'dr', text:'Could you show me exactly where it hurts? … And is it like last time?', dom:'dg', why:'Localises the pain — loin, not lumbar' },
      { who:'pt', text:'Here, under the ribs on the right. No — this is constant. Two days.' },
      { who:'dr', text:'Any fever, shivering, sickness? Any change in passing urine — stinging, going more, blood?', dom:'dg', why:'Systemic and urinary features' },
      { who:'pt', text:'Really hot, shaking last night. Sick once. Actually, it stings a bit and I’m going more.' },
      { who:'dr', text:'Have you got a thermometer, or a watch that reads your pulse? Any chance you could be pregnant? Any numbness between the legs or leg weakness?', dom:'dg', why:'Self-measured observations; pregnancy; cauda equina screen' },
      { who:'pt', text:'38.9, pulse 116. Period was last week; not sexually active. No numbness.' },
      { who:'dr', text:'What painkillers have you taken — exactly which, how many and how often?', dom:'dg', why:'Finds the paracetamol excess' },
      { who:'pt', text:'Old co-codamol, two four times a day, and paracetamol in between, two four times a day.' },
      { phase:'Explanation', clock:'5–9 min', who:'dr', text:'Thank you, that’s really helpful. I don’t think this is your back. With the pain over your kidney, the fever, the shaking and a fast pulse, I think this is a kidney infection that may be getting into your blood. And co-codamol contains paracetamol too — so you’ve had about double the safe amount for two days. Both need checking today at the nearest A&E.', dom:'cm', why:'Two problems explained plainly; clear decision' },
      { who:'pt', text:'I can’t — I’m running the stand tomorrow. Can’t you just give me antibiotics?' },
      { who:'dr', text:'I understand — you don’t want to let them down. But you need a urine test, bloods and possibly a scan, and the paracetamol may need a treatment that protects your liver. Antibiotics alone over video would be unsafe. I can give you a fit note, and you could message your manager now.', dom:'ro', why:'Acknowledges the concern, explains why, helps with work' },
      { phase:'Plan and safety-net', clock:'9–12 min', who:'dr', text:'Please don’t take any more paracetamol or co-codamol, and don’t drive — could Priya take you, or a taxi? Take the tablet packets. If you get confused, very breathless, faint, or stop passing urine before you get there, call 999. I’ll ring you tomorrow. What will you do now?', dom:'cm', why:'Stop paracetamol, transport, 999 triggers, follow-up, teach-back' },
      { who:'pt', text:'No more paracetamol, ask Priya to take me to A&E with the packets, 999 if I get worse. And message my boss.' }
    ],
    kb:{
      social:[
        { h:'Work pressure', t:'Young professionals away for work often minimise illness. Helping her inform her manager removes a barrier to going.' },
        { h:'Alone away from home', t:'A colleague nearby is a resource for transport and for checking on her.' }
      ],
      legal:[
        { h:'Prescribing remotely', t:'Prescribing codeine or antibiotics remotely without adequate assessment is unsafe here; document why face-to-face assessment was needed.' }
      ],
      professional:[
        { h:'Diagnostic momentum', t:'A previous diagnosis (“my back”) anchors both patient and doctor. Re-take the history each time.' }
      ],
      community:[
        { h:'Services', t:'Nearest ED; NHS 24 (111) in Scotland; community pharmacist advice on combination analgesics in future.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Fever and rigors','Tachycardia, low BP, confusion, reduced urine (sepsis)','Vomiting preventing oral intake','Colicky pain or haematuria (stone)','Pregnancy possibility','Cauda equina symptoms'],
        psychosocial:['Where she is and who is with her','Work pressure','Transport'],
        ice:['Idea: back flare','Concern: letting the team down','Expectation: codeine and physio'],
        core:['Site and character of pain vs previous episode','Urinary symptoms','Exact analgesics and doses']
      },
      diagnosis:'Probable acute right pyelonephritis with features of possible sepsis (obstructed infected kidney to exclude); unintentional staggered paracetamol overdose (about 8 g/day for 2 days).',
      diagnosisLay:'“This looks like a kidney infection that may be spreading, not your back — and you’ve accidentally taken too much paracetamol. Both need checking today.”',
      management:{
        reflectIce:'“You were expecting painkillers and physio, and you don’t want to let your team down. I’d be letting you down if I didn’t get you checked today.”',
        psychosocial:'Message manager; fit note; colleague to accompany.',
        sharedPlan:['Nearest ED today — urine, bloods, imaging as needed, antibiotics','Stop all paracetamol-containing products; take the packets; paracetamol level and LFTs','Do not drive — colleague or taxi','No codeine or physiotherapy referral now'],
        safetyNet:['999 if confused, very breathless, faint, or not passing urine','Follow-up call tomorrow','Own GP review on return home']
      }
    },
    links:[
      { ic:'📋', t:'Back pain', s:'Case walkthrough', href:'../cases/back-pain.html' },
      { ic:'💠', t:'Renal colic', s:'Management protocol', href:'management/renal-colic.html' },
      { ic:'💠', t:'UTI in women', s:'Management protocol', href:'management/uti-women.html' }
    ],
    pitfalls:{
      intro:'The opening request is designed to anchor the candidate on mechanical back pain. Two hazards hide behind it.',
      items:[
        { dom:'dg', fail:'Asks back-pain red flags only and prescribes codeine.', why:'Misses fever, rigors and loin pain — and the paracetamol excess.', fix:'Ask where exactly, whether it differs from before, and about fever, urine and medicines.' },
        { dom:'cm', fail:'Prescribes cefalexin to a local pharmacy and safety-nets.', why:'Possible sepsis and possible obstruction need face-to-face assessment and tests; the overdose needs bloods.', fix:'Same-day ED.' },
        { dom:'ro', fail:'Dismisses the work worry.', why:'She may not go if the barrier is not addressed.', fix:'Acknowledge it and help practically (fit note, message the manager).' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Where is she? Hear the request.' },
      { t:'1–5', h:'Re-take the history', d:'Site, difference from before, fever, rigors, urine, pregnancy, red flags, self-measured obs, exact analgesics.' },
      { t:'5–9', h:'Explain', d:'Kidney infection with possible sepsis; paracetamol excess; ED today.' },
      { t:'9–12', h:'Plan', d:'Stop paracetamol, no driving, packets, 999 triggers, work help, follow-up.' }
    ],
    wordPics:{
      clearFail:'Accepts “back flare”, prescribes codeine and refers to physio; no fever, urine or medicine history.',
      fail:'Suspects a kidney infection but prescribes antibiotics remotely, or sends her to ED without finding the paracetamol excess.',
      pass:'Recognises loin pain with systemic features, asks about urine, pregnancy and analgesics, finds the paracetamol excess, and sends her to the nearest ED today with clear advice not to drive and 999 triggers.',
      clearPass:'All of the Pass, plus: explains both problems simply, handles the work pressure and the antibiotic request skilfully, uses her colleague and the packets, and confirms the plan by teach-back with a follow-up call.'
    },
    avoid:[
      { dont:'“I’ll send codeine up and you can see how it goes.”', instead:'“This pain is different from last time — let me ask a few more questions.”', why:'Codeine masks a serious infection.' },
      { dont:'“You’ve overdosed.”', instead:'“Co-codamol has paracetamol in it too, so you’ve had more than the safe amount — that needs a blood test.”', why:'Accurate without blame; it was unintentional.' },
      { dont:'“Drive yourself to A&E.”', instead:'“Please don’t drive — could Priya take you, or a taxi?”', why:'Fever and rigors impair safe driving.' }
    ]
  });

  /* ===== s6. Pelvic scan and CA-125 results — a patient about to move on — video ===== */
  C.push({
    id:'ovarian-results-moving-on',
    title:'“I’ve got my scan and blood results to go through — it’s the fibroid, isn’t it?”',
    type:'video', duration:12,
    meta:{ age:43, sex:'F',
      setting:'Video — results appointment; the patient lives on a narrowboat and is moored near the practice.',
      system:'Gynaecology / Results — blood test and pelvic ultrasound results',
      checked:CHECKED,
      blueprint:{ difficulty:3, lifeStage:'adult', groups:['Investigations & results','Long-term conditions & cancer','Health disadvantage & vulnerabilities','Gender, reproductive & sexual health'], type:'video', thirdParty:false }
    },
    ceg:['Investigations & results','Long-term conditions & cancer','Health disadvantage & vulnerabilities'],
    brief:'Ms Tamsin Hale, 43, lives with her partner Dev on a narrowboat with a continuous-cruising licence. She saw an advanced nurse practitioner a week ago with six weeks of bloating, early satiety, tiredness and abdominal swelling; a mass was felt and fibroids suggested. Results: CA-125 486 kU/mL, CRP 42, FBC, U&E and LFT normal; pelvic ultrasound shows a 74 mm complex, predominantly solid-cystic left adnexal mass with papillary projections, thick septations, marked vascularity and free fluid — “highly suspicious for malignancy”. Risk of Malignancy Index (premenopausal M = 1, U = 3, CA-125 486) is about 1458, far above 250. On questioning: 5 kg unintentional weight loss, urinary frequency, mild breathlessness walking up the lock flights (possible effusion), no PV bleeding, smear up to date, no family history known (adopted). The tasks: check she is private and whether she wants Dev present, warn and break the news that the results are very suspicious of ovarian cancer, respond to emotion (she cries), refer TODAY on the suspected cancer pathway (gynaecology oncology) and explain what happens next (CT, MDT, likely surgery). HIDDEN AGENDA: they must move the boat today — they have overstayed the 14-day mooring and have an enforcement notice — and she does not know where they will stop; post goes to a friend’s address and phone signal is patchy. The candidate must not delay the referral “until she settles”: make it now, record the best contact numbers (hers and Dev’s with consent) and an email, explain that she can register as a temporary or permanent patient anywhere without a fixed address, that the referral can be redirected, suggest asking the Canal & River Trust about staying within reach on health grounds, share copies of results (NHS App or printed), arrange a call within 48 hours and a named practice contact.',
    stem:{
      name:'Tamsin Hale', age:'43-year-old woman',
      pmh:['Nil significant','Cervical screening: HPV negative, 2 years ago'],
      meds:['No regular medicines'],
      allergy:'No known drug allergies',
      recent:'Advanced nurse practitioner (7 days ago): “6 weeks bloating, early satiety, tiredness, abdominal swelling. BP 118/70, HR 84, T 36.7 °C, SpO2 97%. Abdomen distended, firm mass arising from pelvis, more to the left, non-tender. Impression: ?fibroid. Plan: bloods, pelvic USS, review with results.” Address on record: “NFA — boater (continuous cruiser); post c/o a friend.” Bloods (6 days ago): CA-125 486 kU/mL (<35); CRP 42 mg/L (<5); Hb 124 g/L; platelets 448 ×10⁹/L (150–400); U&E, LFT and calcium normal. Pelvic ultrasound (3 days ago, transabdominal and transvaginal): left adnexal 74 × 61 × 58 mm complex, predominantly solid-cystic mass with thick irregular septations, papillary projections and marked internal vascularity; uterus, endometrium and right ovary normal; moderate free fluid in the pouch of Douglas. Radiologist: “Urgent gynaecological oncology referral recommended.”',
      reason:'Video appointment: “Results — bloods and scan.”'
    },
    script:{
      data:{ kind:'Results (bloods 6 days ago; pelvic ultrasound 3 days ago)', values:[
        ['CA-125','486 kU/mL','<35'],
        ['CRP','42 mg/L','<5'],
        ['Haemoglobin','124 g/L','115–165'],
        ['Platelets','448 ×10⁹/L','150–400'],
        ['U&E, LFT, calcium','Normal',''],
        ['Pelvic USS (TA + TV)','Left adnexa: 74 × 61 × 58 mm complex, predominantly solid-cystic mass; thick irregular septations, papillary projections, marked internal vascularity on colour Doppler',''],
        ['Pelvic USS','Uterus normal size; endometrium normal; right ovary normal; moderate free fluid in the pouch of Douglas',''],
        ['Radiologist comment','Features highly suspicious for ovarian malignancy. Urgent gynaecological oncology referral recommended; CT chest, abdomen and pelvis for staging',''] ] },
      opening:'“Hiya — sorry about the background, I’m on the boat. I’ve come to get my results. The nurse thought it was a fibroid — is that what it is?”',
      facts:[
        { topic:'Setting (if asked)', text:'“I’m inside the boat on my own. Dev’s outside doing the ropes.” If asked whether she wants him: “Yeah… can he come in?” Dev joins and sits quietly.' },
        { topic:'Symptoms (if asked)', text:'Bloating and swelling “like I’m pregnant” for about six weeks. Full after a few mouthfuls. Weeing more often. Tired.' },
        { topic:'Weight and breathing (if asked)', text:'“My jeans are tight on the belly but my face and arms have got thinner — about 5 kilos down.” Breathless going up the lock flights the last couple of weeks; fine at rest; no chest pain, no cough.' },
        { topic:'Gynae and bowels (if asked)', text:'Periods regular, last one 2 weeks ago. No bleeding between periods or after sex. No discharge. Bowels a bit constipated. Not pregnant — “we’re careful, Dev’s had the snip”.' },
        { topic:'Family history (if asked)', text:'“I was adopted — I don’t know anything about my birth family.”' },
        { topic:'Reaction to the news', text:'When the doctor mentions cancer or a growth that could be cancer: go silent, then cry for about a minute. Then: “But I’m only 43.”' },
        { topic:'Moving today (say when the doctor talks about referral or appointments)', text:'“We have to move the boat today. We’ve overstayed — we’ve had a letter. We’re heading north, but I don’t know where we’ll end up.” Post goes to a friend’s house in town. “The signal on the canal is rubbish.”' },
        { topic:'Social', text:'Works casual shifts at a canal-side café. Does not smoke, drinks little. Dev, 46, does boat maintenance. Registered at the practice 8 months ago while moored locally.' },
        { topic:'Role-player direction', text:'Start cheerful and practical. Ask for Dev if offered. Cry when cancer is mentioned and take a minute. Mention the move when referral is discussed. If the doctor says to wait until you are settled, accept it (this is a fail). If the doctor offers to refer today and works out contacts with you, become calmer and agree. Ask: “Will they be able to find me?” and “Is it going to kill me?”' }
      ],
      ice:{
        ideas:'“It’s a fibroid — the nurse said.”',
        concerns:'HIDDEN AGENDA — the boat must move today after an enforcement notice; she does not know where they will stop, post goes to a friend and phone signal is poor, so she fears she will “fall through the cracks”. Once told, she fears dying young.',
        expectations:'An explanation of the results and, she assumes, a routine gynaecology referral.'
      },
      cues:[
        '“It’s the fibroid, isn’t it?” — she is not expecting bad news.',
        '“The signal on the canal is rubbish.” — contact will be difficult.',
        '“We have to move the boat today.” — the referral must not wait.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Checks identity, privacy and whether she wants her partner present before giving results; establishes what she already knows' },
      { dom:'dg', text:'Asks about relevant symptoms (weight loss, early satiety, urinary and bowel change, breathlessness, PV bleeding) and family history, and interprets the CA-125 and ultrasound together (RMI well above 250)' },
      { dom:'ro', text:'Gives a warning shot, breaks the news clearly that the results are very suspicious of ovarian cancer, allows silence and responds to her distress' },
      { dom:'cm', text:'Refers today on the suspected cancer pathway to gynaecological oncology and explains next steps (CT, specialist clinic, MDT, likely surgery)' },
      { dom:'cm', text:'Addresses the move: does not delay the referral; records the best phone numbers and email, confirms consent to contact Dev, explains registration anywhere without a fixed address and redirection of the referral, and suggests asking to stay within reach on health grounds' },
      { dom:'cm', text:'Provides copies of results, a named contact and a call within 48 hours; safety-nets for worsening breathlessness, abdominal pain or swelling, vomiting or bowel obstruction' },
      { dom:'ro', text:'Answers “Is it going to kill me?” honestly without false reassurance or catastrophising, and checks what she will take away' }
    ],
    worked:[
      { lbl:'Set up', txt:'“Before we look at the results — are you somewhere you can talk privately? Would you like Dev with you?”' },
      { lbl:'Warning shot', txt:'“The results aren’t what we hoped. The scan didn’t show a fibroid.”' },
      { lbl:'The news', txt:'“It showed a growth on your left ovary, and with the blood test, I’m worried it is very likely to be an ovarian cancer. I’m so sorry.” — then silence.' },
      { lbl:'Not waiting', txt:'“I’m not going to wait until you’re settled — I’ll send the urgent referral today. Let’s make sure they can always reach you.”' },
      { lbl:'Honest prognosis', txt:'“I can’t tell you yet how serious it is — that depends on whether it has spread, which the scan and specialists will find out. Many people are treated with surgery and chemotherapy, and the team will talk you through everything.”' }
    ],
    learning:'Results that strongly suggest cancer must be acted on the same day, whatever the logistics: a suspected cancer pathway referral can be made now and redirected later; waiting for a patient to “settle” is a serious error. For an adnexal mass, NICE recommends calculating the Risk of Malignancy Index (U × M × CA-125); an RMI of 250 or more warrants specialist gynaecological oncology MDT care, and an ultrasound suggestive of ovarian cancer meets the NG12 criteria for a suspected cancer pathway referral. Breaking bad news by video needs the same structure as face to face (SPIKES: setting, perception, invitation, knowledge, emotions, strategy) plus checks on privacy and connection. People without a fixed address — boaters, Gypsies and Travellers, people who are homeless — are entitled to register with any GP practice without proof of address. Protect continuity with multiple contact routes, written copies of results, a named contact and a booked follow-up call.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer: recognition and referral (2015, updated 2026) · NICE CG122 Ovarian cancer: recognition and initial management (2011, updated 2026) · NHS England Patient registration — standard operating principles for primary medical care (2023) · GMC Good medical practice (2024)',
      summary:'Break bad news well, refer today on the suspected cancer pathway, and build the contact plan around a patient who has to move on.',
      points:[
        { h:'Interpreting the results', t:'CA-125 486 with a complex solid-cystic mass, papillary projections, vascularity and free fluid. RMI = U (3: multilocular, solid areas, ascites) × M (1: premenopausal) × CA-125 (486) ≈ 1458. Raised CRP and platelets fit malignancy; CA-125 can also rise with endometriosis, fibroids, menstruation and inflammation, but not to this picture.' },
        { h:'Referral', t:'Suspected cancer pathway referral to gynaecology (oncology) today; attach the results. The specialist team arranges CT chest, abdomen and pelvis, MDT discussion and usually surgery with or without chemotherapy. Breathlessness may be a pleural effusion — ask and safety-net.' },
        { h:'Breaking bad news by video', t:'Check identity, privacy, connection and who is present; ask what she knows; warning shot; clear words (“cancer”); silence; acknowledge emotion; then a plan. Offer a further call — people retain little after bad news.' },
        { h:'No fixed address', t:'A practice cannot refuse registration for lack of a permanent address; the practice address or a care-of address can be used. The patient can register as a temporary resident wherever they are. e-RS referrals can be redirected; the receiving team needs reliable phone numbers.' },
        { h:'Continuity tools', t:'Record two or three phone numbers and an email, with consent to contact the partner; share results via the NHS App or printed copy; a named clinician or care navigator; a follow-up call in 48 hours; tell her to call if no appointment arrives within a week.' },
        { h:'Family history', t:'Adopted — unknown family history. All women with non-mucinous epithelial ovarian cancer are offered germline BRCA testing by the specialist team.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello Tamsin, it’s Dr Chen. Before we go through the results — can you see and hear me OK, and are you somewhere private? Would you like Dev to join you?', dom:'ro', why:'Setting and support before results' },
      { who:'pt', text:'Yes — can he come in? … OK. It’s the fibroid, isn’t it?' },
      { phase:'Perception and history', clock:'1–4 min', who:'dr', text:'Before I explain, can I check how you’ve been? Any weight loss, feeling full quickly, change in your waterworks or bowels, or breathlessness?', dom:'dg', why:'Completes the clinical picture and gauges understanding' },
      { who:'pt', text:'Lost about 5 kilos, full after a few mouthfuls, weeing more, a bit puffed on the locks.' },
      { phase:'Breaking the news', clock:'4–7 min', who:'dr', text:'Thank you. I’m afraid the results aren’t what we hoped. The scan didn’t show a fibroid. It showed a growth on your left ovary, and with the blood test, I’m worried it is very likely to be an ovarian cancer. I’m so sorry.', dom:'ro', why:'Warning shot, then clear language' },
      { who:'pt', text:'(silence, crying) …But I’m only 43.' },
      { who:'dr', text:'(pause) This is a huge shock. Take your time — I’m here.', dom:'ro', why:'Allows emotion before information' },
      { phase:'Plan', clock:'7–11 min', who:'dr', text:'What needs to happen next is an urgent appointment with a specialist cancer team for ovaries. I’m going to send that referral today. They’ll do a CT scan and plan treatment, which is often an operation.', dom:'cm', why:'Suspected cancer pathway referral today' },
      { who:'pt', text:'We have to move the boat today — we’ve had a letter. I don’t know where we’ll stop. Will they be able to find me?' },
      { who:'dr', text:'I’ll make sure they can. I’ll send it today, not wait. Let’s take your number, Dev’s — with your permission — and an email. You can register with a GP anywhere you moor, even without an address, and the referral can be moved. Could you ask the Canal & River Trust about staying nearby for health reasons? And I’ll send the results to your NHS App.', dom:'cm', why:'Continuity plan for a mobile patient' },
      { who:'pt', text:'Is it going to kill me?' },
      { who:'dr', text:'I can’t answer that yet — it depends on whether it has spread, and the scan will tell us. Many people are treated successfully, and the team will be honest with you at every step.', dom:'ro', why:'Honest, neither false reassurance nor catastrophising' },
      { phase:'Close', clock:'11–12 min', who:'dr', text:'I’ll ring you in two days to check the appointment and how you’re both doing. If you get more breathless, severe tummy pain, keep vomiting or can’t open your bowels, call 111 or go to A&E. What will you tell Dev you’re both doing next?', dom:'cm', why:'Follow-up, safety-net, teach-back' },
      { who:'pt', text:'Wait for the hospital call, keep the phone charged, ask about staying nearby, and you’ll ring Thursday.' }
    ],
    kb:{
      social:[
        { h:'Living afloat', t:'Continuous cruisers must move regularly; patchy signal and care-of post make appointments easy to miss. Plan multiple contact routes.' },
        { h:'Partner support', t:'Dev’s presence helps retention and practical planning; confirm consent to share information with him.' }
      ],
      legal:[
        { h:'Registration', t:'Practices should not refuse registration because a patient cannot provide proof of address or has no fixed address.' },
        { h:'Consent to share', t:'Record her consent for the hospital and practice to contact Dev.' }
      ],
      professional:[
        { h:'Results governance', t:'An abnormal result with a radiologist recommending urgent referral must be acted on the same day and the action documented.' }
      ],
      community:[
        { h:'Support', t:'Target Ovarian Cancer and Ovacome; Macmillan; boater welfare officers (Canal & River Trust); local cancer navigator.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Breathlessness (effusion)','Vomiting or absolute constipation (obstruction)','Rapid abdominal swelling','Leg swelling (VTE risk with pelvic mass)'],
        psychosocial:['Who is with her','Housing and the move today','Contact routes','Work and money'],
        ice:['Idea: fibroid','Concern: falling through the cracks; dying young','Expectation: results and routine referral'],
        core:['Weight, satiety, urinary and bowel change','PV bleeding and smear history','Family history (adopted)']
      },
      diagnosis:'Complex left adnexal mass with markedly raised CA-125 and free fluid — highly suspicious of ovarian cancer (RMI about 1458).',
      diagnosisLay:'“A growth on your left ovary that is very likely to be a cancer — the specialists need to confirm it and plan treatment.”',
      management:{
        reflectIce:'“You came expecting a fibroid, and you’re worried you’ll be lost in the system while you move. I’ll send the referral today and make sure they can reach you.”',
        psychosocial:'Dev involved; boater welfare support; cancer charities; café work and money.',
        sharedPlan:['Suspected cancer pathway referral to gynaecological oncology today','Contacts: her number, Dev’s (consent), email; NHS App results','Register with a GP wherever they moor; referral can be redirected','Ask about staying within reach on health grounds','Call in 48 hours; named practice contact'],
        safetyNet:['Breathlessness, severe abdominal pain, vomiting or no bowel opening — 111 or A&E','Call the practice if no hospital contact within a week']
      }
    },
    links:[
      { ic:'📋', t:'Palliative and cancer care', s:'Case walkthrough', href:'../cases/palliative-care.html' },
      { ic:'📋', t:'Abdominal pain', s:'Case walkthrough', href:'../cases/abdominal-pain.html' }
    ],
    pitfalls:{
      intro:'Strong communication can still fail this station if the referral waits for her to settle.',
      items:[
        { dom:'cm', fail:'“Call me when you know where you’ll be and I’ll refer you there.”', why:'Delays a suspected cancer referral by days or weeks.', fix:'Refer today; redirect later if needed.' },
        { dom:'ro', fail:'Delivers the news straight away without checking privacy or support.', why:'She is on a boat with her partner outside; bad news needs a prepared setting.', fix:'Check privacy and offer Dev first.' },
        { dom:'dg', fail:'Reads out the CA-125 and scan without asking about breathlessness or weight.', why:'Misses possible effusion and the full picture.', fix:'Ask targeted questions before explaining.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Set up', d:'Privacy, connection, Dev.' },
      { t:'1–4', h:'Perception and history', d:'What she knows; symptoms; family history.' },
      { t:'4–7', h:'Break the news', d:'Warning shot, clear words, silence, empathy.' },
      { t:'7–11', h:'Plan and logistics', d:'Referral today; contacts; registration anywhere; staying within reach.' },
      { t:'11–12', h:'Close', d:'Call in 48 hours; safety-net; teach-back.' }
    ],
    wordPics:{
      clearFail:'Tells her it is “probably a fibroid but we’ll refer”, or breaks the news bluntly with no setting; delays referral until she settles.',
      fail:'Breaks the news reasonably but does not refer today, or refers without any plan for contact while she moves.',
      pass:'Sets up the conversation, breaks the news clearly with empathy, refers on the suspected cancer pathway today, explains next steps, builds a contact plan and arranges follow-up.',
      clearPass:'All of the Pass, plus: uses silence well, involves Dev with consent, answers the prognosis question honestly, uses practical solutions for a boater (registration anywhere, NHS App, staying within reach) and confirms understanding.'
    },
    avoid:[
      { dont:'“Don’t worry, it’s probably nothing serious.”', instead:'“I’m worried it is very likely to be an ovarian cancer.”', why:'False reassurance destroys trust when the diagnosis is confirmed.' },
      { dont:'“Let me know when you’ve settled and I’ll send the referral there.”', instead:'“I’ll send it today and make sure they can reach you wherever you are.”', why:'Suspected cancer referrals must not wait.' },
      { dont:'“You’ll be fine.”', instead:'“I can’t say yet how serious it is — the scan will tell us more.”', why:'Honest uncertainty is kinder than promises.' }
    ]
  });

  /* ===== s7. Erection problems after a heart attack — telephone ===== */
  C.push({
    id:'ed-after-mi-online-tablets',
    title:'“Things haven’t been working in the bedroom since my heart attack — I don’t want another tablet on my list”',
    type:'telephone', duration:12,
    meta:{ age:56, sex:'M',
      setting:'Telephone — routine appointment booked by the patient.',
      system:'Cardiovascular / Men’s health — erection difficulties after a heart attack',
      checked:CHECKED,
      blueprint:{ difficulty:2, lifeStage:'adult', groups:['Gender, reproductive & sexual health','Prescribing','Long-term conditions & cancer','Ethnicity, culture & diversity'], type:'telephone', thirdParty:false }
    },
    ceg:['Gender, reproductive & sexual health','Prescribing','Long-term conditions & cancer'],
    brief:'Mr Harjit Sandhu, 56, runs a car-repair garage. Seven months ago he had an anterior STEMI treated with primary PCI and a drug-eluting stent; echo LVEF 55%. He takes aspirin, ticagrelor (to 12 months), atorvastatin 80 mg, ramipril 5 mg, bisoprolol 5 mg (increased from 2.5 mg at the 3-month cardiology review) and has GTN spray on repeat. Erection problems began mildly after the MI and became much worse about four months ago — around the bisoprolol increase. Morning erections are weaker but present; libido normal; mood fine; he and his wife are both quietly frightened that sex might bring on another heart attack. The tasks: a focused ED history (onset, morning erections, libido, relationship, mood, cardiovascular symptoms, exercise tolerance, diabetes risk, smoking and alcohol), recognising a likely multifactorial cause (vascular disease, beta-blocker, anxiety). HIDDEN AGENDA: he does not want another prescription “on his record” and three weeks ago bought “blue tablets” from a website; he has taken two — they worked, but he had a flushing headache and felt faint once — and the GTN spray sits in his van. Only found if the candidate asks about anything bought online or over the counter. The candidate must explain the nitrate interaction clearly (never use GTN within 24 hours of sildenafil; call 999 for chest pain), advise stopping the unregulated tablets (unknown content and dose), and offer a safe route: seek cardiology advice and guidance about reducing bisoprolol (LVEF preserved; NICE suggests reviewing beta-blockers at 12 months after MI) and about a prescribed PDE-5 inhibitor now he is seven months post-MI and stable; bloods (HbA1c, lipids, U&E, morning testosterone if indicated); reassurance about sex after MI (safe if he can manage moderate exertion such as climbing two flights of stairs without symptoms — he completed cardiac rehabilitation); involve his wife if he wishes; psychosexual support. Respect his wish to avoid more medicines by putting the beta-blocker review first.',
    stem:{
      name:'Harjit Sandhu', age:'56-year-old man',
      pmh:['Anterior STEMI 7 months ago — primary PCI with drug-eluting stent to LAD; echo LVEF 55%','Hypertension','Ex-smoker (stopped at MI; 25 pack-years)'],
      meds:['Aspirin 75 mg once daily','Ticagrelor 90 mg twice daily (planned to stop at 12 months)','Atorvastatin 80 mg at night','Ramipril 5 mg once daily','Bisoprolol 5 mg once daily (increased from 2.5 mg 4 months ago)','Glyceryl trinitrate 400 micrograms/dose spray — as required (none issued in the last 5 months)'],
      allergy:'No known drug allergies',
      recent:'Cardiology clinic letter (4 months ago): “Well. Completed cardiac rehabilitation — exercising 30 minutes daily, no angina. BP 138/84, HR 72. Bisoprolol increased to 5 mg. Ticagrelor to 12 months then stop. Review 6 months.” HCA (3 weeks ago, flu vaccine): BP 126/78, HR 56. HbA1c 41 mmol/mol a year ago. BMI 28.',
      reason:'Telephone appointment: “Private — would like to discuss with doctor.”'
    },
    script:{
      opening:'“Morning, doctor. It’s a bit awkward, this. Since the heart attack, things haven’t been… working, in the bedroom. My wife said I should ring. But I don’t want another tablet on my list — I’m rattling already.”',
      facts:[
        { topic:'The problem (if asked)', text:'“Getting it up, and keeping it. It started a bit after the heart attack but the last four months it’s been bad.” If asked about the bisoprolol change: “The heart doctor upped one of them around then — the beta one, I think.”' },
        { topic:'Morning erections and desire (if asked)', text:'“Still sometimes in the morning, but weaker.” Interest in sex is the same as ever.' },
        { topic:'Heart (if asked)', text:'No chest pain, no breathlessness, no palpitations. Walks 30 minutes a day, climbs the stairs at work fine. “Did all the rehab classes.”' },
        { topic:'Fears (if asked how he and his wife feel about it)', text:'“To be honest, we’re both a bit scared. What if I have another one… you know, during?”' },
        { topic:'Other (if asked)', text:'No urinary symptoms, no penile pain or curvature, no testicular lumps. Married 30 years, wife Manjit, no other partners. Mood good. Drinks a couple of beers at the weekend. Stopped smoking at the heart attack.' },
        { topic:'Online tablets (only if asked about anything bought online, over the counter or from abroad)', text:'“Er… yes. I got some blue tablets off a website three weeks ago. Took two. They worked, but I had a pounding headache and went red, and once I felt like I was going to pass out when I stood up.” Seven left in the van. Doesn’t know the dose. If asked about the GTN: “It’s in the van too — I’ve not used it since the rehab.”' },
        { topic:'Why not a prescription (if asked)', text:'“I didn’t want it on my record. And I don’t want more pills — I’m on six already.” Worried about his medical record being seen by insurers (it is not shared without consent).' },
        { topic:'Role-player direction', text:'Be embarrassed and brief at first; open up if the doctor is matter-of-fact. Mention the online tablets only if asked. If the doctor explains the danger with the heart spray calmly, be shocked and agree to stop them. If offered a prescription straight away, say you would rather not add a tablet. If the doctor suggests reviewing the bisoprolol first, be pleased.' }
      ],
      ice:{
        ideas:'“It’s probably the heart tablets — or I’m just getting old.”',
        concerns:'HIDDEN AGENDA — He has been taking unregulated “blue tablets” bought online and keeps a GTN spray in his van, unaware of the dangerous interaction; he wants to avoid anything on his record. Openly: that sex might cause another heart attack.',
        expectations:'Advice — ideally without another prescription.'
      },
      cues:[
        '“I don’t want another tablet on my list.” — a reason he may have sought a workaround.',
        '“The heart doctor upped one of them around then.” — the bisoprolol timing.',
        '“What if I have another one… during?” — fear about sex after MI.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Takes a focused ED history: onset and course, achieving vs maintaining, morning erections, libido, relationship and mood, genital and urinary symptoms' },
      { dom:'dg', text:'Assesses cardiovascular status (angina, breathlessness, exercise tolerance) and links the worsening to the bisoprolol increase; considers diabetes, lipids, smoking, alcohol and testosterone' },
      { dom:'dg', text:'Asks about medicines bought online or over the counter — finding the unregulated PDE-5 tablets — and whether he has or uses GTN' },
      { dom:'cm', text:'Explains the nitrate–PDE-5 inhibitor danger clearly, advises stopping the online tablets, and gives explicit chest-pain advice (no GTN within 24 hours of sildenafil — call 999)' },
      { dom:'cm', text:'Offers a safe plan: cardiology advice and guidance on reducing bisoprolol and on a prescribed PDE-5 inhibitor; bloods (HbA1c, lipids, U&E, morning testosterone if indicated); does not stop cardiac medicines himself' },
      { dom:'cm', text:'Reassures about sexual activity after MI using an exercise benchmark, offers psychosexual support and lifestyle advice, and arranges follow-up' },
      { dom:'ro', text:'Normalises the problem, addresses his fear and his wish for fewer medicines, and involves his wife if he wishes' }
    ],
    worked:[
      { lbl:'Normalise', txt:'“This is really common after a heart attack — the same arteries are involved, and some heart tablets play a part. Thank you for raising it.”' },
      { lbl:'Ask the key question', txt:'“Have you tried anything yourself — tablets from a chemist, online, or from abroad?”' },
      { lbl:'The interaction', txt:'“Those tablets and your heart spray together can drop your blood pressure dangerously. If you’ve taken one in the last day and get chest pain, don’t use the spray — call 999 and tell them what you’ve taken.”' },
      { lbl:'Respect the preference', txt:'“You’d rather not add a tablet — so the first step is asking your heart team whether we can bring the bisoprolol back down, which may help on its own.”' },
      { lbl:'Sex after MI', txt:'“If you can walk briskly or manage two flights of stairs without chest pain — which you can — sex is generally safe for your heart.”' }
    ],
    learning:'Erectile dysfunction after MI is usually multifactorial: vascular disease, medicines (beta-blockers, thiazides), anxiety about exertion, and relationship strain. Always ask about medicines bought online or over the counter — unregulated “herbal” or generic products often contain undeclared or variable doses of PDE-5 inhibitors. PDE-5 inhibitors are absolutely contraindicated with nitrates (GTN, isosorbide) and nicorandil because of profound hypotension; sildenafil SPCs also list recent MI or stroke and hypotension below 90/50 as contraindications. After an uncomplicated MI, sexual activity is usually safe once the patient can manage moderate exertion without symptoms. NICE suggests continuing a beta-blocker for 12 months after MI in people without reduced LVEF and then discussing whether to stop — a natural point to review bisoprolol with cardiology. Respecting a patient’s preference for fewer medicines often means reviewing what he already takes before adding something new.',
    knowledge:{
      guideline:'NICE NG185 Acute coronary syndromes (2020) · NICE CKS Erectile dysfunction (accessed 2026) · SPC: sildenafil',
      summary:'Find the online tablets and the GTN, explain the interaction, stop them, review the beta-blocker with cardiology, and reassure about sex after MI.',
      points:[
        { h:'History', t:'Gradual onset, preserved morning erections and libido suggest vascular or drug-related causes; sudden onset with situational loss suggests psychogenic. Ask about relationship, mood, anxiety about exertion, genital symptoms, LUTS, smoking, alcohol, drugs and all medicines including online purchases.' },
        { h:'Drugs that cause ED', t:'Beta-blockers (dose-related; nebivolol may be less implicated), thiazides, spironolactone, SSRIs, antipsychotics, 5-alpha-reductase inhibitors, opioids. Timing with a dose change is a strong clue.' },
        { h:'PDE-5 inhibitor safety', t:'Contraindicated with nitrates or nicorandil (no GTN within 24 hours of sildenafil or vardenafil, 48 hours of tadalafil). SPC contraindications also include recent MI or stroke, hypotension below 90/50, and severe hepatic impairment. Caution with alpha-blockers. Usual adult dose: sildenafil 50 mg about 1 hour before sexual activity, adjusted to 25–100 mg, maximum once daily (NICE/SPC; check the SPC, BNF and local formulary; SPC: sildenafil).' },
        { h:'Online medicines', t:'Products from unregistered websites may be counterfeit or contain unknown doses. Advise stopping them and returning them to a pharmacy; report suspected adverse reactions on the Yellow Card scheme.' },
        { h:'Investigations', t:'HbA1c, lipid profile, U&E; morning total testosterone (repeat if low) when ED is associated with reduced libido or if the PDE-5 inhibitor fails; consider PSA only with appropriate counselling. Offer genital examination.' },
        { h:'Beta-blocker after MI', t:'NICE NG185: consider continuing a beta-blocker for 12 months after MI if LVEF is not reduced, then discuss stopping; continue indefinitely if LVEF is reduced. Any earlier change should be agreed with cardiology.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Good morning, Mr Sandhu, it’s Dr Ahmed. Are you somewhere you can talk privately? What would you like to discuss?', dom:'ro', why:'Privacy for a sensitive topic' },
      { who:'pt', text:'Since the heart attack, things haven’t been working in the bedroom. But I don’t want another tablet.' },
      { who:'dr', text:'Thank you for raising it — it’s very common after a heart attack and usually something we can help with. Can I ask a few questions?', dom:'ro', why:'Normalises and gains permission' },
      { phase:'Data gathering', clock:'1–5 min', who:'dr', text:'When did it start, and is it getting an erection or keeping it? Do you still wake with erections? And how is your interest in sex?', dom:'dg', why:'Core ED history' },
      { who:'pt', text:'Bit after the heart attack, much worse the last four months. Both. Mornings sometimes. Interest is fine.' },
      { who:'dr', text:'Four months ago — was that when the heart doctor increased your bisoprolol? And any chest pain or breathlessness when you exert yourself?', dom:'dg', why:'Drug timing and cardiac status' },
      { who:'pt', text:'Yes, around then. No pain — I walk half an hour a day.' },
      { who:'dr', text:'Have you tried anything yourself — tablets from a chemist, online or from abroad?', dom:'dg', why:'Finds the unregulated tablets' },
      { who:'pt', text:'Some blue tablets off a website. Took two. Worked, but I got a thumping headache and nearly fainted once.' },
      { who:'dr', text:'Thank you for telling me. Do you still have the heart spray, the GTN?', dom:'dg', why:'Checks nitrate access' },
      { who:'pt', text:'It’s in the van.' },
      { phase:'Explanation', clock:'5–9 min', who:'dr', text:'This is important. Those tablets and the spray together can make your blood pressure fall dangerously. Website tablets can also contain unknown doses. Please stop them and take them to a pharmacy. If you’ve had one in the last day and get chest pain, don’t use the spray — call 999 and tell them.', dom:'cm', why:'Clear safety advice' },
      { who:'pt', text:'Blimey. I had no idea.' },
      { who:'dr', text:'I think a few things are adding up: the arteries, the bisoprolol increase, and probably some worry. As you’d rather not add a tablet, I’ll ask your heart team whether we can bring the bisoprolol back down, and whether a prescribed tablet like sildenafil would be safe for you now. I’ll also check your sugar, cholesterol and kidneys.', dom:'cm', why:'Multifactorial explanation; respects preference; advice and guidance; bloods' },
      { who:'pt', text:'And is it actually safe — sex, I mean? We’re both scared.' },
      { phase:'Close', clock:'9–12 min', who:'dr', text:'If you can walk briskly and climb two flights of stairs without chest pain, sex is generally safe for your heart. Don’t change your heart tablets yourself. I’ll call you when I hear from cardiology — and if you and Manjit would like, there’s counselling that helps couples with this. What will you do with the tablets in the van?', dom:'ro', why:'Reassurance with a benchmark; follow-up; teach-back' },
      { who:'pt', text:'Bin them at the chemist, keep the spray, 999 if I get chest pain, and wait for your call.' }
    ],
    kb:{
      social:[
        { h:'Shame and privacy', t:'Embarrassment and fear about records drive men to buy medicines online. Explain confidentiality and how records are shared.' },
        { h:'Couple’s fear', t:'Both partners often fear sex after MI; involving his wife (if he wishes) can relieve anxiety.' }
      ],
      legal:[
        { h:'Medicines regulation', t:'Prescription-only medicines sold by unregistered sites are illegal and may be falsified; the MHRA investigates.' }
      ],
      professional:[
        { h:'Advice and guidance', t:'Using cardiology advice and guidance keeps the specialist informed about a change to post-MI therapy.' }
      ],
      community:[
        { h:'Support', t:'British Heart Foundation information on sex after a heart attack; Sexual Advice Association; Relate (psychosexual therapy); community pharmacist.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Chest pain, breathlessness or reduced exercise tolerance','Nitrate or nicorandil use','Syncope after PDE-5 use','Penile deformity or pain; testicular lump'],
        psychosocial:['Relationship and partner’s view','Anxiety about sex after MI','Mood','Work and stress'],
        ice:['Idea: heart tablets or age','Concern: sex causing another MI; record','Expectation: help without another tablet'],
        core:['Onset and course; morning erections; libido','Timing with bisoprolol increase','Online or OTC medicines']
      },
      diagnosis:'Multifactorial erectile dysfunction after MI (vascular, bisoprolol dose increase, performance anxiety), with unsafe use of unregulated online PDE-5 tablets while holding GTN.',
      diagnosisLay:'“The same arteries that caused the heart attack, plus the higher bisoprolol and some worry, are all playing a part. The website tablets aren’t safe with your heart spray.”',
      management:{
        reflectIce:'“You don’t want more tablets and you’re both worried about your heart. Let’s look at the tablets you already take first, and make sex safe again.”',
        psychosocial:'Offer to speak with Manjit; psychosexual counselling; confidentiality explained.',
        sharedPlan:['Stop online tablets; return to a pharmacy','Cardiology advice and guidance: bisoprolol reduction; suitability for prescribed PDE-5 inhibitor','HbA1c, lipids, U&E; morning testosterone if indicated; offer examination','Continue all cardiac medicines unchanged meanwhile','Exercise, weight, alcohol advice'],
        safetyNet:['Chest pain within 24 hours of a PDE-5 tablet — no GTN, call 999','Chest pain otherwise — GTN as directed, 999 if not settling','Call with cardiology reply and results']
      }
    },
    links:[
      { ic:'📋', t:'Erectile dysfunction', s:'Case walkthrough', href:'../cases/erectile-dysfunction.html' },
      { ic:'📋', t:'MI secondary prevention', s:'Case walkthrough', href:'../cases/mi-secondary-prevention.html' },
      { ic:'💠', t:'Erectile dysfunction', s:'Management protocol', href:'management/erectile-dysfunction.html' }
    ],
    pitfalls:{
      intro:'Many candidates prescribe sildenafil or simply reassure. The safety issue sits in what he has already done.',
      items:[
        { dom:'dg', fail:'Never asks about medicines bought online or over the counter.', why:'Misses dangerous use of unregulated PDE-5 tablets alongside GTN.', fix:'Ask routinely in any ED consultation.' },
        { dom:'cm', fail:'Tells him to stop the bisoprolol.', why:'Seven months post-MI; changes should be agreed with cardiology.', fix:'Seek advice and guidance; keep medicines unchanged meanwhile.' },
        { dom:'ro', fail:'Prescribes sildenafil despite his clear preference.', why:'Ignores his wish to avoid more medicines — the reason he went online.', fix:'Offer the beta-blocker review first, with a prescribed option if needed.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Privacy; normalise.' },
      { t:'1–5', h:'History', d:'ED features, cardiac status, bisoprolol timing, online tablets, GTN.' },
      { t:'5–9', h:'Safety and explanation', d:'Interaction; stop online tablets; multifactorial cause; A&G; bloods.' },
      { t:'9–12', h:'Close', d:'Sex after MI, counselling, follow-up, teach-back.' }
    ],
    wordPics:{
      clearFail:'Prescribes sildenafil without asking about nitrates or online tablets, or dismisses the problem as “normal after a heart attack”.',
      fail:'Takes a reasonable ED history and links the bisoprolol but misses the online tablets, or stops the bisoprolol without cardiology input.',
      pass:'Takes a focused history, finds the online tablets and GTN, explains the interaction and stops them, seeks cardiology advice on bisoprolol and PDE-5 use, arranges bloods and reassures about sex after MI.',
      clearPass:'All of the Pass, plus: normalises skilfully, respects his preference for fewer tablets, addresses the couple’s fear with an exercise benchmark, offers psychosexual support, explains confidentiality and confirms the safety-net by teach-back.'
    },
    avoid:[
      { dont:'“I’ll send a prescription for Viagra.”', instead:'“Before any new tablet, let’s check what you’ve taken and whether the bisoprolol can come down.”', why:'Safety first, and he wants fewer medicines.' },
      { dont:'“Buying tablets online is illegal and stupid.”', instead:'“Lots of men do — the problem is you don’t know what’s in them, and they clash with your spray.”', why:'Blame stops disclosure.' },
      { dont:'“It’s just your age.”', instead:'“It’s common after a heart attack, and usually treatable.”', why:'Dismissal closes the conversation.' }
    ]
  });

  /* ===== s8. Established MND — choking episodes and planning ahead — video ===== */
  C.push({
    id:'mnd-choking-planning-ahead',
    title:'“I choked on my lunch last week and it frightened the life out of us — my nurse is off, so I came to you”',
    type:'video', duration:12,
    meta:{ age:66, sex:'M',
      setting:'Video — routine appointment; the patient is at home alone, sitting at his kitchen table.',
      system:'Neurology / Palliative — established motor neurone disease with new choking episodes',
      checked:CHECKED,
      blueprint:{ difficulty:3, lifeStage:'older adult', groups:['Long-term conditions & cancer','Older adults','Professional & ethical'], type:'video', thirdParty:false }
    },
    ceg:['Long-term conditions & cancer','Older adults','Professional & ethical'],
    brief:'Mr Arjun Mehta, 66, retired community pharmacist, has amyotrophic lateral sclerosis (limb onset) diagnosed 20 months ago, on riluzole. His MND specialist nurse, whom he sees monthly, is off sick; the neurology review six weeks ago was uneventful. He has had two choking episodes in three weeks (the last five days ago on rice; his wife Sunita did back blows), coughs when drinking water, and has more saliva. On questioning: weight down 5 kg in three months (74 to 69 kg, about 7%), speech slightly slurred (his wife notices), riluzole tablets hard to swallow so he crushes them, two falls in two months (no head injury), and — important — waking with headaches, daytime sleepiness and breathlessness lying flat: features of respiratory muscle weakness. No fever or productive cough. The tasks: assess bulbar and respiratory function and aspiration risk, recognise disease progression with significant weight loss and probable nocturnal hypoventilation, and act: urgent speech and language therapy and dietitian, urgent contact with the MND team or neurology (or respiratory) for NIV assessment and a gastrostomy discussion (timely, before further weight and respiratory decline), riluzole liquid formulation via the specialist or pharmacist, saliva management, OT and physiotherapy for falls, safe-swallow advice and choking first aid for Sunita, and a home visit when Sunita is home. HIDDEN AGENDA: he has been reading about feeding tubes and ventilation, and he is frightened of choking to death; he also wants to talk about “not being kept alive on machines” but has not told Sunita. The candidate should explore this sensitively, explain that death from choking in MND is rare, and open an advance care planning conversation (wishes, advance decision to refuse treatment, ReSPECT, lasting power of attorney for health and welfare, involving Sunita) at his pace.',
    stem:{
      name:'Arjun Mehta', age:'66-year-old man',
      pmh:['Motor neurone disease (amyotrophic lateral sclerosis, limb onset) — diagnosed 20 months ago','Hypertension'],
      meds:['Riluzole 50 mg twice daily (hospital-initiated; GP prescribing under shared care)','Amlodipine 5 mg once daily'],
      allergy:'No known drug allergies',
      recent:'Neurology letter (6 weeks ago): “Slowly progressive lower limb weakness; walks with a stick. No bulbar symptoms reported. Weight 72 kg. FVC 78% predicted. Continue riluzole; LFTs and FBC normal last month. MND nurse monthly. Review 3 months.” Practice note: MND specialist nurse on sick leave — team voicemail only this month. No advance care plan or ReSPECT form on record.',
      reason:'Video appointment: “Choking episodes — need advice.”'
    },
    script:{
      opening:'“Hello, doctor. I’ve had a couple of choking episodes, and the one last week really frightened the life out of us. Normally I’d ask my MND nurse, but she’s off sick, so here I am.”',
      facts:[
        { topic:'The choking (if asked)', text:'“Twice in three weeks. Last Wednesday, rice — it went down the wrong way, I couldn’t breathe for a few seconds. Sunita hit me on the back and it came up.” No blue lips, no collapse. Since then he eats soft food and takes small mouthfuls.' },
        { topic:'Swallowing (if asked)', text:'“Water makes me cough most. Thick things are easier. My tablets are a struggle — I crush the riluzole.” Food sometimes sticks. Saliva: “more spit than I can manage — I keep a hanky.”' },
        { topic:'Weight and eating (if asked)', text:'“Meals take forever. I’ve lost weight — I was 74 kilos in the summer, 69 this morning.” You can show the bathroom scale reading on your phone if asked.' },
        { topic:'Breathing and sleep (only if asked about breathing, sleep or headaches)', text:'“Now you mention it, I wake with a headache most mornings, and I nod off in the afternoon. I can’t lie flat any more — I sleep on three pillows or I get puffed.” Not breathless sitting. No cough with phlegm, no fever.' },
        { topic:'Speech (if asked)', text:'“Sunita says I’m slurring a bit by evening.” (On video, his speech is slightly nasal and slurred.)' },
        { topic:'Mobility (if asked)', text:'Two falls in two months, tripping on the right foot. No head injury. Walks with a stick, slowly. Arms “still OK”.' },
        { topic:'Mood and fears (if asked how he is coping or what worries him)', text:'“I’m a pharmacist — I’ve read everything. I know where this goes.” If the doctor gently asks what he fears most: “Choking to death. Drowning in my own spit.” Then, if invited further: “And I don’t want to be kept alive on a machine if it comes to that. I haven’t said that to Sunita.”' },
        { topic:'Social', text:'Lives with wife Sunita, 62, a dentist, at work until 6 pm. Son in Manchester. Bungalow. Financially secure. Never smoked, no alcohol.' },
        { topic:'Role-player direction', text:'Be calm, articulate and slightly clinical about yourself — a professional who has done his reading. Reveal the breathing and sleep symptoms only if asked about breathing, sleep or headaches. Reveal the fear of choking and wishes about machines only if the doctor asks what worries you or what matters to you, and gives you space. If rushed, keep it to yourself. You cannot attend today (no one to drive you); a home visit tomorrow evening or Sunita bringing you would work.' }
      ],
      ice:{
        ideas:'“My MND is reaching my swallowing — I knew it would.”',
        concerns:'HIDDEN AGENDA — terrified of choking to death, and wants to talk about not being kept alive on machines, which he has not yet discussed with his wife.',
        expectations:'Practical help with the choking now his nurse is away, and someone to talk to about what comes next.'
      },
      cues:[
        '“Frightened the life out of us.” — fear behind a calm manner.',
        '“I’m a pharmacist — I know where this goes.” — he has thought about the future.',
        '“I can’t lie flat any more.” — respiratory muscle weakness.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Assesses the choking and swallowing: frequency, consistency (thin liquids worse), saliva, tablets, aspiration signs (cough, fever, chest infection)' },
      { dom:'dg', text:'Asks about weight loss, speech, mobility and falls, and specifically about respiratory weakness — orthopnoea, morning headaches, daytime sleepiness, disturbed sleep' },
      { dom:'dg', text:'Explores his understanding, mood and fears, discovering the fear of choking to death and his wishes about life-prolonging treatment' },
      { dom:'cm', text:'Arranges urgent speech and language therapy and dietitian input, and urgent MND team/neurology or respiratory contact for NIV assessment and a gastrostomy discussion' },
      { dom:'cm', text:'Addresses medicines and symptoms: liquid riluzole via the specialist or pharmacist rather than crushing; saliva management; OT and physiotherapy for falls; home visit when his wife is present' },
      { dom:'cm', text:'Gives safe-swallow and choking first-aid advice (including for Sunita), safety-nets for aspiration and breathlessness, and offers to begin advance care planning (wishes, ADRT, ReSPECT, LPA) at his pace' },
      { dom:'ro', text:'Responds to fear with honest reassurance (death from choking is rare in MND), respects his expertise, and supports him to involve his wife' }
    ],
    worked:[
      { lbl:'Ask about the night', txt:'“Can I ask about your breathing at night — do you wake with headaches, feel sleepy in the day, or find it hard to lie flat?”' },
      { lbl:'Find the fear', txt:'“You’ve read a lot. When you think ahead, what worries you most?”' },
      { lbl:'Honest reassurance', txt:'“Many people with MND fear choking to death. It’s actually rare — most people die peacefully, often in their sleep, and there are medicines and plans that help if breathing or choking becomes hard.”' },
      { lbl:'Open planning', txt:'“It sounds like you have clear views about machines and tubes. Would it help to start writing down what matters to you — and to talk it through with Sunita, with me there if you like?”' }
    ],
    learning:'In established MND the GP’s role is to recognise progression early and mobilise the multidisciplinary team quickly — especially when the specialist nurse is unavailable. Bulbar weakness causes dysphagia, coughing with thin fluids, sialorrhoea and weight loss; respiratory muscle weakness causes orthopnoea, morning headaches, daytime sleepiness and poor sleep, and should prompt urgent respiratory assessment for non-invasive ventilation, which can improve survival and quality of life. NICE advises discussing gastrostomy early and placing it before significant respiratory decline and weight loss; weight loss of 5% or more is a trigger for action. Riluzole is available as an oral suspension for people who cannot swallow tablets. Advance care planning should be offered at diagnosis and at each significant change: preferences, advance decision to refuse treatment (for example about NIV or feeding), ReSPECT, lasting power of attorney for health and welfare, preferred place of care, and anticipatory medicines. Reassure honestly: death from choking in MND is uncommon.',
    knowledge:{
      guideline:'NICE NG42 Motor neurone disease: assessment and management (2016, updated 2019) · Mental Capacity Act 2005 (advance decisions and lasting power of attorney) · Resuscitation Council UK ReSPECT process (version 3, 2020) · NICE NG31 Care of dying adults in the last days of life (2015) · MND Association guidance for GPs (accessed 2026)',
      summary:'Progressing bulbar and respiratory weakness with 7% weight loss: urgent SALT, dietitian, NIV and gastrostomy discussions via the MND team, safer medicines, falls support — and an advance care planning conversation guided by his fears.',
      points:[
        { h:'Swallowing', t:'Coughing with thin fluids, prolonged meals, food sticking, drooling and weight loss suggest bulbar progression. Speech and language therapy assesses safe consistencies and strategies (upright posture, small mouthfuls, chin tuck, thickened fluids). Dietitian for calorie and fluid intake.' },
        { h:'Gastrostomy', t:'Discuss early, before swallowing becomes unsafe or weight loss is marked (5% or more is a trigger), and ideally while respiratory function allows safe placement. It can supplement rather than replace oral intake.' },
        { h:'Respiratory weakness', t:'Orthopnoea, morning headaches, daytime sleepiness, unrefreshing sleep, poor cough and recurrent infections. Needs urgent assessment (FVC/SNIP, blood gases) and consideration of non-invasive ventilation. Previous FVC 78% does not exclude current decline.' },
        { h:'Saliva and medicines', t:'Thin saliva: options include hyoscine patches, glycopyrronium, amitriptyline or atropine drops (specialist advice). Thick secretions: hydration, humidification. Riluzole oral suspension is available; ask the specialist team or pharmacist before crushing tablets.' },
        { h:'Choking first aid', t:'Teach carers back blows and abdominal thrusts; 999 if obstruction persists. A cough-assist device may be considered by respiratory services. Death from choking is uncommon in MND.' },
        { h:'Advance care planning', t:'Explore values and wishes; ADRT for specific treatments (must be written, signed and witnessed, stating “even if life is at risk” for life-sustaining treatment); ReSPECT; LPA for health and welfare; preferred place of care and death; anticipatory (“just in case”) medicines; Gold Standards Framework or palliative care register.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello Mr Mehta, it’s Dr Owusu. Can you see and hear me? I’m sorry your nurse is away — tell me about the choking.', dom:'ro', why:'Acknowledges the gap in his usual care' },
      { who:'pt', text:'Twice in three weeks. Last week rice went down the wrong way — Sunita had to hit my back. It frightened us both.' },
      { phase:'Data gathering', clock:'1–5 min', who:'dr', text:'That sounds really frightening. Is it solids, liquids, or both? Any coughing after drinks, trouble with tablets or saliva, chest infections or fevers?', dom:'dg', why:'Swallow, saliva and aspiration screen' },
      { who:'pt', text:'Water’s the worst. I crush my riluzole. Lots of saliva. No fevers.' },
      { who:'dr', text:'Has your weight changed? And can I ask about your breathing at night — headaches in the morning, sleepiness in the day, or trouble lying flat?', dom:'dg', why:'Weight and respiratory muscle weakness' },
      { who:'pt', text:'74 to 69 kilos. Actually yes — morning headaches, nodding off, three pillows or I get puffed.' },
      { who:'dr', text:'Thank you, that’s important. Any falls, and how is your speech?', dom:'dg', why:'Progression elsewhere' },
      { who:'pt', text:'Two falls, no head injury. Sunita says I slur by evening.' },
      { phase:'Exploring', clock:'5–7 min', who:'dr', text:'You know this illness well. When you think ahead, what worries you most?', dom:'ro', why:'Opens space for the hidden agenda' },
      { who:'pt', text:'Choking to death. And I don’t want to be kept alive on a machine. I haven’t told Sunita that.' },
      { who:'dr', text:'Thank you for telling me. Many people fear choking, but dying from it is rare in MND — and there are treatments and plans that help. Your wishes about machines matter, and we can write them down so they’re respected.', dom:'ro', why:'Honest reassurance and validation' },
      { phase:'Plan', clock:'7–11 min', who:'dr', text:'Things have moved on: your swallowing, weight and the night-time breathing. I’ll make urgent referrals today to speech and language therapy and a dietitian, and contact the neurology team about a breathing assessment — a mask at night can help — and a talk about a feeding tube, which you can decide about. I’ll ask about riluzole as a liquid and something for the saliva, and get the falls team out.', dom:'cm', why:'Urgent MDT referrals and symptom control' },
      { who:'pt', text:'I’d want to think carefully about the tube and the mask.' },
      { who:'dr', text:'Of course — it’s your decision, and knowing the options early keeps them open. Could I visit tomorrow evening when Sunita is home? We could talk through what matters to you together, at your pace.', dom:'cm', why:'Home visit and shared ACP' },
      { phase:'Safety-net', clock:'11–12 min', who:'dr', text:'Until then: sit upright, small mouthfuls, slow down, thicker drinks are easier. If you choke and it doesn’t clear, Sunita should call 999. Fever, a chesty cough or worse breathlessness — call us or 111. What will you tell Sunita tonight?', dom:'cm', why:'Safe-swallow, choking and aspiration safety-net; teach-back' },
      { who:'pt', text:'That you’re coming tomorrow, about the referrals — and that I want to talk about what I want if things get worse.' }
    ],
    kb:{
      social:[
        { h:'A professional patient', t:'His knowledge is an asset; respecting it builds partnership, but he still needs space for fear.' },
        { h:'Carer', t:'Sunita works full-time; carer’s assessment, choking first aid, and her own support matter.' }
      ],
      legal:[
        { h:'ADRT and LPA', t:'An ADRT refusing life-sustaining treatment must be written, signed, witnessed and state that it applies even if life is at risk. An LPA for health and welfare must be registered with the Office of the Public Guardian.' }
      ],
      professional:[
        { h:'Covering a gap', t:'When a key specialist is unavailable, the GP must escalate through the team rather than wait for the nurse to return.' }
      ],
      community:[
        { h:'Support', t:'MND Association (support visitors, equipment loans, grants); specialist palliative care; community OT and physiotherapy; speech and language therapy; dietitian.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Choking that does not clear','Aspiration: fever, productive cough, breathlessness','Orthopnoea, morning headaches, daytime sleepiness (hypoventilation)','Weight loss of 5% or more','Falls with head injury'],
        psychosocial:['Who is at home and when','Carer strain','Mood and fears','Wishes about future treatment'],
        ice:['Idea: MND is reaching swallowing','Concern: choking to death; machines','Expectation: practical help and someone to talk to'],
        core:['Consistencies and tablets','Saliva','Speech','Mobility']
      },
      diagnosis:'Progression of ALS with bulbar dysphagia, aspiration risk, sialorrhoea, 7% weight loss, probable nocturnal hypoventilation and falls.',
      diagnosisLay:'“The MND is now affecting the muscles for swallowing and, at night, breathing. There’s a lot we can do to make both safer.”',
      management:{
        reflectIce:'“You’re frightened of choking, and you know what you would and wouldn’t want. Let’s make things safer now and make sure your wishes are known.”',
        psychosocial:'Home visit with Sunita; carer support; MND Association.',
        sharedPlan:['Urgent SALT and dietitian','Urgent MND team/neurology or respiratory contact: NIV assessment and gastrostomy discussion','Riluzole oral suspension; saliva management','OT and physiotherapy for falls','Advance care planning at his pace: wishes, ADRT, ReSPECT, LPA'],
        safetyNet:['Choking not clearing — 999','Fever, chesty cough or worse breathing — GP or 111 same day','Home visit tomorrow evening']
      }
    },
    links:[
      { ic:'📋', t:'Palliative care', s:'Case walkthrough', href:'../cases/palliative-care.html' },
      { ic:'💠', t:'Palliative breathlessness', s:'Management protocol', href:'management/palliative-breathlessness.html' },
      { ic:'💠', t:'Respiratory secretions', s:'Management protocol', href:'management/palliative-respiratory-secretions.html' }
    ],
    pitfalls:{
      intro:'Candidates often give swallow advice and a SALT referral, missing the night-time breathing and the conversation he wants to have.',
      items:[
        { dom:'dg', fail:'Never asks about sleep, headaches or lying flat.', why:'Respiratory muscle weakness is the major threat to life and is treatable with NIV.', fix:'Ask about orthopnoea, morning headaches and daytime sleepiness at every MND review.' },
        { dom:'cm', fail:'Refers to SALT and waits for the MND nurse to return.', why:'Weight loss and hypoventilation need urgent action now.', fix:'Escalate via the neurology team or respiratory services today.' },
        { dom:'ro', fail:'Raises DNACPR abruptly as a checklist item.', why:'Advance care planning should follow his concerns and pace.', fix:'Ask what worries him and what matters to him first.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Acknowledge the missing nurse; hear the choking story.' },
      { t:'1–5', h:'Assess', d:'Swallow, saliva, aspiration, weight, night breathing, speech, falls.' },
      { t:'5–7', h:'Explore', d:'Fears and wishes.' },
      { t:'7–11', h:'Plan', d:'SALT, dietitian, NIV and gastrostomy discussion, riluzole liquid, saliva, falls, home visit.' },
      { t:'11–12', h:'Safety-net', d:'Safe swallow, choking first aid, aspiration signs, teach-back.' }
    ],
    wordPics:{
      clearFail:'Advises soft food and a routine SALT referral; no weight, respiratory or emotional assessment.',
      fail:'Arranges SALT and dietitian but misses the respiratory symptoms, or attempts DNACPR without exploring his wishes.',
      pass:'Assesses swallow, weight and night-time breathing, makes urgent MDT referrals (SALT, dietitian, NIV, gastrostomy discussion), addresses riluzole and falls, safety-nets and opens advance care planning.',
      clearPass:'All of the Pass, plus: draws out his fear of choking and wishes about machines, reassures honestly, respects his expertise and autonomy, and arranges a joint conversation with Sunita at his pace.'
    },
    avoid:[
      { dont:'“We need to sort out your DNACPR today.”', instead:'“When you think ahead, what matters most to you?”', why:'ACP starts with values, not forms.' },
      { dont:'“Don’t worry, everything will be fine.”', instead:'“Choking to death is rare in MND, and there are plans that help if things get harder.”', why:'Honest reassurance is credible.' },
      { dont:'“Keep crushing the tablets.”', instead:'“Riluzole comes as a liquid — I’ll ask the team about switching.”', why:'Safer administration.' }
    ]
  });

  /* ===== s9. Health visitor concern about a new mother’s mood — telephone ===== */
  C.push({
    id:'postnatal-isolation-new-arrival',
    title:'“The health visitor told me to ring you — but I’m not depressed, I’m just on my own a lot”',
    type:'telephone', duration:12,
    meta:{ age:30, sex:'F',
      setting:'Telephone — urgent same-day call booked after a health visitor home visit.',
      system:'Perinatal mental health — a health visitor’s concern about a new mother',
      checked:CHECKED,
      blueprint:{ difficulty:2, lifeStage:'adult', groups:['Mental health & addiction','Gender, reproductive & sexual health','Ethnicity, culture & diversity','Health disadvantage & vulnerabilities'], type:'telephone', thirdParty:false }
    },
    ceg:['Mental health & addiction','Ethnicity, culture & diversity','Gender, reproductive & sexual health'],
    brief:'Mrs Thanuja Wickramasinghe, 30, moved from Sri Lanka ten months ago as the dependant of her husband Kasun, a care worker on a Health and Care Worker visa who works nights. Their first baby, Anya, is 10 weeks old, breastfed and thriving. The health visitor found her quiet and flat, rarely leaving the flat, and scored the EPDS at 9; she asked her to ring the GP. On the call she denies depression. With careful questioning: she is tired but sleeps when the baby sleeps, appetite is normal, she enjoys Anya and laughs on video calls with her mother, but she cries most evenings, feels lonely and “useless”, and rarely goes out — she knows no-one, finds the buses with a pram daunting, and feels uncomfortable breastfeeding in public. Her mother had planned to come for the traditional postnatal period of rest and family care, but her visitor visa was refused — a loss she grieves. No thoughts of self-harm or of harming the baby; no psychotic symptoms; bonding good; no past mental illness. She has not had her own 6–8 week postnatal check. HIDDEN AGENDA: she fears that admitting to “mental problems” will lead to social services taking Anya or affect the family’s visas, so she minimises. The tasks: a sensitive mood and risk assessment (Whooley questions, anhedonia, sleep, appetite, guilt, self-harm, thoughts of harm to the baby, psychotic features, bonding), conclude that she does not currently meet criteria for depression but has an adjustment reaction with isolation and is at raised risk; reassure accurately about confidentiality, social care and visas; and build support: health visitor listening visits, Family Hub and baby groups, breastfeeding peer support and practical tips for feeding out, Home-Start, a social prescriber, community and cultural groups, NHS Talking Therapies self-referral (perinatal priority), involving Kasun, the postnatal check with FBC, ferritin and TSH for tiredness, contraception, and follow-up in 2–3 weeks with clear safety-netting (including the NHS 111 mental health option).',
    stem:{
      name:'Thanuja Wickramasinghe', age:'30-year-old woman',
      pmh:['Normal vaginal delivery 10 weeks ago (first baby); postpartum haemorrhage 650 mL','No previous mental health history'],
      meds:['No regular medicines'],
      allergy:'No known drug allergies',
      recent:'Health visitor (today, home visit): “Baby Anya 10/52, weight on 50th centile, red book updated, breastfeeding well. Mum quiet, flat affect, says she rarely goes out. EPDS 9 (question 10 — self-harm — scored 0). Lives in a first-floor flat; husband works nights. Advised to contact GP today. HV review in 2 weeks.” Maternal 6–8 week postnatal check: not recorded.',
      reason:'Telephone appointment: “Health visitor asked me to call.”'
    },
    script:{
      opening:'“Hello, doctor. The health visitor came today and she told me to call you. I don’t know why really — I’m fine. I’m not depressed. I’m just on my own a lot.”',
      facts:[
        { topic:'Why the health visitor was worried (if asked)', text:'“She asked me questions and I said I don’t go out much and sometimes I cry. That’s all.”' },
        { topic:'Mood (if asked gently)', text:'“Not sad all day. In the evenings I cry, when Kasun goes to work and it’s dark. I feel… useless. Like I’m not doing anything properly.” Started a few weeks after the birth.' },
        { topic:'Enjoyment (if asked)', text:'“Anya makes me smile. When I talk to my mother on video, I laugh. I like cooking still.”' },
        { topic:'Sleep, appetite, energy (if asked)', text:'Sleeps when the baby sleeps; eats normally; tired, “but she feeds every three hours”. Concentration OK.' },
        { topic:'Risk (if asked directly and kindly)', text:'No thoughts of harming yourself or of ending your life. No thoughts of harming Anya — “never, she is my everything”. No hearing voices or strange beliefs. Bonding: “I love her so much.”' },
        { topic:'Going out (if asked)', text:'“I don’t know anyone. The bus with the pram is difficult, and I don’t like feeding her in front of people — at home in Sri Lanka, women stay at home with family after a baby.”' },
        { topic:'Her mother (if asked about family or support)', text:'“My mother was going to come for the first months — that is our custom, she would look after me. Her visa was refused.” Become tearful. “I feel I am doing it alone.”' },
        { topic:'Kasun (if asked)', text:'“He is a good man. He works nights at a care home. In the day he sleeps. He doesn’t know I cry — I don’t want to worry him.”' },
        { topic:'Fear (only if the doctor asks what worries her about talking to doctors, or reassures about confidentiality)', text:'“If I say I have mental problems, will they take my baby? Will it be a problem for our visa?”' },
        { topic:'Physical (if asked)', text:'Bleeding stopped. No postnatal check with the GP — “nobody called me”. No contraception yet. Hair falling out a bit. Not taking any iron since hospital.' },
        { topic:'Social', text:'Graduate (accountancy). If asked about work: “I am allowed to work, but who would look after Anya?” Good English. Buddhist; there is a temple 40 minutes away. No alcohol or smoking.' },
        { topic:'Role-player direction', text:'Be polite, guarded and keen to show you are coping. Open up gradually if the doctor is warm and unhurried. Reveal the visa refusal and your fear about social services only if asked about support or about worries. Respond with relief to accurate reassurance. Accept a mix of practical support; you would rather talk to someone than take medicine.' }
      ],
      ice:{
        ideas:'“I am not depressed — I am alone.”',
        concerns:'HIDDEN AGENDA — fears that admitting to mental health problems will lead to social services taking Anya or harm the family’s visas; grieving that her mother could not come for the postnatal period.',
        expectations:'To show the doctor she is coping so that “it doesn’t go further”.'
      },
      cues:[
        '“I’m just on my own a lot.” — isolation is the real problem.',
        '“I feel useless.” — low self-worth worth exploring.',
        '“Her visa was refused.” — loss of expected support.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Uses the health visitor note and asks open questions about how she has been since the birth; explores why the health visitor was concerned' },
      { dom:'dg', text:'Assesses for depression and anxiety (low mood, anhedonia, sleep, appetite, energy, guilt, worthlessness) and risk: self-harm, suicidal thoughts, thoughts of harming the baby, psychotic features, bonding, past history' },
      { dom:'dg', text:'Explores support and context: husband’s night shifts, migration, mother’s visa refusal, cultural expectations of the postnatal period, barriers to going out' },
      { dom:'cm', text:'Explains a working understanding (adjustment reaction with isolation, not depression at present, but raised risk) and agrees watchful waiting with active support' },
      { dom:'cm', text:'Builds practical support: health visitor follow-up, Family Hub and baby groups, breastfeeding peer support and tips for feeding out, Home-Start, social prescriber, cultural community, NHS Talking Therapies, involving Kasun' },
      { dom:'cm', text:'Offers her postnatal check (FBC, ferritin, TSH for tiredness after PPH; contraception) and arranges follow-up in 2–3 weeks with clear safety-netting (NHS 111 mental health option, 999)' },
      { dom:'ro', text:'Finds and addresses her fear about social services and visas with accurate reassurance; respects her cultural expectations without stereotyping' }
    ],
    worked:[
      { lbl:'Open gently', txt:'“The health visitor wanted us to talk. I’m not here to label you — I’d just like to hear how things have really been since Anya arrived.”' },
      { lbl:'Ask the hard questions kindly', txt:'“Some new mums have thoughts of harming themselves, or worries about harming their baby. Have you had any thoughts like that?”' },
      { lbl:'Find the fear', txt:'“Sometimes people worry about what happens if they tell a doctor they’re struggling. Is anything like that on your mind?”' },
      { lbl:'Accurate reassurance', txt:'“Asking for help doesn’t lead to babies being taken away — Anya is clearly loved and thriving. And seeing a GP or getting support doesn’t affect your visa.”' },
      { lbl:'Name it', txt:'“From what you’ve told me, I don’t think you’re depressed right now. I think you’re adjusting to a huge change — a new baby, a new country, and missing the help your mother would have given — very much on your own.”' }
    ],
    learning:'An EPDS score is a screening tool, not a diagnosis — assess properly. Use the Whooley questions (low mood, loss of interest) and a full risk assessment including self-harm, thoughts of harm to the baby, psychotic symptoms and bonding. An adjustment reaction is an expected, though distressing, response to a major stressor; it usually improves with support but raises the risk of later depression, so follow up. Isolation is a major driver of perinatal distress, especially for recent migrants whose expected family support is missing (many cultures have a structured postnatal rest period cared for by female relatives). Fear of social services or immigration consequences often silences women: be explicit that help-seeking does not lead to children being removed and does not affect visas. Visa dependants who have paid the immigration health surcharge have full NHS entitlement. Practical, local support (health visitor listening visits, Family Hubs, breastfeeding peer support, Home-Start, social prescribing, faith and cultural communities) and NHS Talking Therapies (which prioritises perinatal women) are first-line; medicines are not indicated for an adjustment reaction. Do not forget the woman’s own postnatal check — tiredness after a PPH warrants FBC and ferritin, and TSH for postpartum thyroiditis.',
    knowledge:{
      guideline:'NICE CG192 Antenatal and postnatal mental health: clinical management and service guidance (2014, updated 2020) · NICE NG194 Postnatal care (2021) · NHS England NHS 111 mental health option (2024)',
      summary:'Assess mood and risk properly, recognise an adjustment reaction with isolation, neutralise the fear about social services and visas, and build real support — with follow-up.',
      points:[
        { h:'Screening vs diagnosis', t:'EPDS 10 or more suggests possible depression; 9 is below threshold but item content matters, as does clinical judgement. Whooley questions: during the past month, often bothered by feeling down, depressed or hopeless? By little interest or pleasure in doing things? Add GAD-2 for anxiety.' },
        { h:'Risk assessment', t:'Self-harm and suicidal thoughts (suicide is a leading cause of maternal death in the first year), thoughts of harming the baby, psychotic symptoms (postpartum psychosis is an emergency — same-day perinatal mental health or crisis team), neglect, bonding, substance use, domestic abuse.' },
        { h:'Adjustment reaction', t:'Emotional distress after an identifiable stressor, out of proportion or affecting functioning, without meeting criteria for depression. Management: support, problem-solving, social connection, talking therapy; review within weeks; escalate if symptoms worsen.' },
        { h:'Support options', t:'Health visitor listening visits; Family Hub and children’s centre groups; breastfeeding peer supporters and baby cafés (feeding covers, quieter spaces); Home-Start volunteers; social prescribing link worker; faith and cultural community groups; NHS Talking Therapies self-referral; perinatal peer support charities.' },
        { h:'Entitlement and fear', t:'Dependants on work visas who have paid the immigration health surcharge can use the NHS like UK residents. Seeking help for mental health does not affect immigration status. Safeguarding referrals are made only when a child is at risk of harm — not because a parent is struggling.' },
        { h:'Physical postnatal care', t:'Six-to-eight week maternal check: mood, bleeding, contraception, BP. Tiredness after PPH: FBC and ferritin. Postpartum thyroiditis: TSH. Hair shedding at 2–4 months is common (telogen effluvium).' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello, is that Mrs Wickramasinghe? It’s Dr Brennan. Is Anya with you and is now a good time? The health visitor said she’d asked you to call.', dom:'ro', why:'Checks it is safe to talk; uses the record' },
      { who:'pt', text:'Yes, she’s asleep. I’m fine, really. I’m not depressed. I’m just on my own a lot.' },
      { phase:'Data gathering', clock:'1–6 min', who:'dr', text:'I’m not here to put a label on you. Tell me about being on your own — what are your days like?', dom:'dg', why:'Follows her own words' },
      { who:'pt', text:'Kasun works nights, sleeps in the day. I don’t know anyone. I don’t go out much. In the evenings I cry. I feel useless.' },
      { who:'dr', text:'That sounds really hard. Do you still enjoy things — Anya, talking to family? How are your sleep and appetite?', dom:'dg', why:'Anhedonia and biological features' },
      { who:'pt', text:'Anya makes me smile. I laugh with my mother on video. I sleep when she sleeps. I eat OK.' },
      { who:'dr', text:'I ask every new mum this: have you had thoughts of harming yourself, or of ending your life? Or any worries about harming Anya? Any strange experiences, like hearing things?', dom:'dg', why:'Risk assessment, normalised' },
      { who:'pt', text:'No, never. She is my everything.' },
      { who:'dr', text:'Who is supporting you? Is there family nearby?', dom:'dg', why:'Context and support' },
      { who:'pt', text:'My mother was going to come — it’s our custom. Her visa was refused. I feel I’m doing it alone.' },
      { phase:'Exploring the fear', clock:'6–8 min', who:'dr', text:'I’m so sorry — that’s a real loss. Sometimes people worry about what happens if they tell a doctor they’re struggling. Is anything like that on your mind?', dom:'ro', why:'Opens the hidden agenda' },
      { who:'pt', text:'Will they take my baby? Will it be a problem for our visa?' },
      { who:'dr', text:'No. Asking for help doesn’t lead to babies being taken away — Anya is clearly loved and doing well. And seeing us doesn’t affect your visa; you’re fully entitled to NHS care.', dom:'ro', why:'Accurate, specific reassurance' },
      { phase:'Plan', clock:'8–11 min', who:'dr', text:'I don’t think you’re depressed right now. I think you’re adjusting to huge changes, mostly alone. Can we build some support? Baby groups at the Family Hub, a breastfeeding group where feeding is easy, a Home-Start volunteer who visits, and a link worker who knows local Sri Lankan and Buddhist groups. Talking to someone through NHS Talking Therapies could help too. And could Kasun know how you feel?', dom:'cm', why:'Working formulation and practical shared plan' },
      { who:'pt', text:'Yes. I would like the groups. I will tell Kasun.' },
      { phase:'Close', clock:'11–12 min', who:'dr', text:'You also haven’t had your own postnatal check — let’s book it with a blood test for iron and thyroid, and talk about contraception. I’ll call you in two weeks. If you ever feel hopeless, think of harming yourself, or feel you can’t cope, call us or 111 and choose the mental health option — 999 in an emergency. What will you do first?', dom:'cm', why:'Physical check, follow-up, safety-net, teach-back' },
      { who:'pt', text:'Tell Kasun, wait for the link worker, book my check — and call if I feel worse.' }
    ],
    kb:{
      social:[
        { h:'Migration and isolation', t:'Recent arrivals often lack the family networks they expected; night-shift work in care leaves partners isolated in the day as well.' },
        { h:'Culture without stereotype', t:'A postnatal rest period with female relatives is common in many cultures; ask what she expected rather than assuming.' }
      ],
      legal:[
        { h:'Entitlement', t:'Immigration health surcharge payers have NHS access on the same basis as residents; health information is not shared with immigration authorities for routine care.' },
        { h:'Safeguarding thresholds', t:'Concern for a parent’s mental health is not itself a safeguarding referral; act if a child is at risk of harm.' }
      ],
      professional:[
        { h:'Working with the health visitor', t:'Feed back the plan to the health visitor and agree joint follow-up.' }
      ],
      community:[
        { h:'Support', t:'Family Hub; breastfeeding peer support; Home-Start; social prescribing link worker; local temple and Sri Lankan community groups; PANDAS Foundation; NHS Talking Therapies.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Thoughts of self-harm or suicide','Thoughts of harming the baby','Psychotic symptoms or confusion','Severe low mood with anhedonia','Neglect or not feeding'],
        psychosocial:['Partner’s shifts and support','Family and migration','Cultural expectations','Money, housing, language','Fear of authorities'],
        ice:['Idea: lonely, not depressed','Concern: baby taken; visa','Expectation: show she is coping'],
        core:['Onset after birth','Sleep, appetite, energy','Bonding and feeding','Past mental health history','Own postnatal check']
      },
      diagnosis:'Adjustment reaction with social isolation after childbirth and migration; no current depressive disorder or risk; raised risk of postnatal depression.',
      diagnosisLay:'“You’re not depressed at the moment — you’re coping with big changes on your own, and that’s why you feel tearful and low in the evenings.”',
      management:{
        reflectIce:'“You came to show me you’re coping — and you are. You also deserve support, and getting it won’t put Anya or your visa at risk.”',
        psychosocial:'Tell Kasun; social prescriber; cultural community; baby and breastfeeding groups; Home-Start.',
        sharedPlan:['Watchful waiting with active support','Health visitor listening visits; HV review in 2 weeks','NHS Talking Therapies self-referral offered','Postnatal check with FBC, ferritin, TSH; contraception','GP call in 2 weeks'],
        safetyNet:['Hopelessness, self-harm thoughts, thoughts of harming Anya, or not coping — GP same day or NHS 111 mental health option','999 in an emergency','Re-screen at follow-up']
      }
    },
    links:[
      { ic:'📋', t:'Perinatal mental health', s:'Case walkthrough', href:'../cases/perinatal-mental-health.html' },
      { ic:'💠', t:'Postnatal depression', s:'Management protocol', href:'management/postnatal-depression.html' },
      { ic:'💠', t:'Postnatal disorders', s:'Management protocol', href:'management/postnatal-disorders.html' }
    ],
    pitfalls:{
      intro:'Candidates either diagnose postnatal depression from the EPDS and offer an SSRI, or accept “I’m fine” and end the call.',
      items:[
        { dom:'dg', fail:'Skips the risk questions because she says she is fine.', why:'Perinatal suicide and infanticide risk must always be assessed directly.', fix:'Ask kindly and directly about self-harm, harm to the baby and psychotic symptoms.' },
        { dom:'cm', fail:'Starts sertraline “to be safe”.', why:'She does not meet criteria for depression; support and therapy are first-line for an adjustment reaction.', fix:'Practical support, talking therapy, follow-up and safety-net.' },
        { dom:'ro', fail:'Never discovers her fear about social services and visas.', why:'The fear drives minimisation and will block future help-seeking.', fix:'Ask what worries her about talking to doctors, and reassure accurately.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Safe to talk? Use the HV note.' },
      { t:'1–6', h:'Assess', d:'Days, mood, enjoyment, sleep, appetite, risk, bonding, support, mother’s visa.' },
      { t:'6–8', h:'Fear', d:'Social services and visas — accurate reassurance.' },
      { t:'8–11', h:'Plan', d:'Formulation; groups, Home-Start, link worker, Talking Therapies, Kasun.' },
      { t:'11–12', h:'Close', d:'Postnatal check and bloods, follow-up, safety-net, teach-back.' }
    ],
    wordPics:{
      clearFail:'Accepts “I’m fine” without a mood or risk assessment, or diagnoses depression from the EPDS and prescribes an antidepressant; no follow-up.',
      fail:'Assesses mood and risk but misses the isolation and the fear about authorities, or gives a list of leaflets without a plan.',
      pass:'Assesses mood and risk thoroughly, identifies isolation and the loss of expected support, explains an adjustment reaction, offers practical and talking-therapy support, arranges follow-up and safety-nets.',
      clearPass:'All of the Pass, plus: uncovers and addresses the fear about social services and visas, explores her cultural expectations respectfully, includes her own postnatal check and bloods, involves Kasun and the health visitor, and confirms the plan by teach-back.'
    },
    avoid:[
      { dont:'“Your score suggests postnatal depression.”', instead:'“The questionnaire is just a starting point — tell me how things really are.”', why:'Screening tools do not diagnose.' },
      { dont:'“In your culture, mothers stay in — so that’s normal.”', instead:'“What did you expect the first months to be like?”', why:'Avoids stereotyping; lets her explain.' },
      { dont:'“If things get worse we may need to involve social services.”', instead:'“Getting help doesn’t put Anya at risk of being taken away — she’s clearly loved.”', why:'Removes the barrier to honest disclosure.' }
    ]
  });

  /* ===== Scorecard Tasks: the 11 standard titles (15 points), case-specific wording ===== */
  var STD = [
    ['Opens and explores the problem',1,'dg'],
    ['Explores psychosocial context',1,'dg'],
    ['Identifies and follows cues',1,'ro'],
    ['Discovers ICE',2,'ro'],
    ['Plans appropriate examination & tests',1,'dg'],
    ['Generates & tests hypotheses',1,'dg'],
    ['Rules in/out serious disease',2,'dg'],
    ['Reaches a working diagnosis',2,'dg'],
    ['Offers a safe, patient-centred plan',2,'cm'],
    ['Manages comorbidity & contributors',1,'cm'],
    ['Provides follow-up and safety net',1,'cm']
  ];
  function mk(d){ return STD.map(function(s, i){ return { t:s[0], d:d[i], pts:s[1], dom:s[2] }; }); }
  var TASKS = {
    'ms-work-disclosure': mk([
      'Confirms identity and privacy; lets her explain the return-to-work worry and the HR meeting before narrowing down.',
      'Job demands (lifting, hot laundry, 6 am shift), how she travels to work, finances on sick pay, husband and daughter, what colleagues have been told.',
      'Follows “they’ll find a way to get rid of me”, “my foot drags when I’m tired” and “there’s no bus” — leading to the driving question.',
      'Idea (MS means being seen as disabled); concern (losing the job; the undeclared DVLA issue); expectation (HR advice and a fit note).',
      'Uses the neurology letter (lymphocytes, LFTs monitored by the MS team); asks about fatigue, heat, bladder, pain and mood; no new tests needed today.',
      'Stable remission vs new relapse vs heat-related worsening (Uhthoff) vs infection; weighs residual leg weakness against job and driving demands.',
      'Screens for relapse (new weakness, visual loss, numbness, balance), bladder retention or infection, and low mood; identifies unsafe driving when the leg is weak.',
      'Relapsing-remitting MS in remission with residual fatigue, heat sensitivity and mild right-leg weakness; ready for a supported return; DVLA not informed.',
      'Equality Act protection explained; disclosure her choice; specific “may be fit” fit note (phased return, no heavy lifting, no laundry, rest breaks); Occupational Health and Access to Work.',
      'Bladder urgency, fatigue pacing, neuropathic pain, flu vaccine, DMF monitoring with the MS team, mood support.',
      'DVLA notification this week and no driving when the leg is weak; relapse safety-net via MS nurse, GP or 111; review after the HR meeting.'
    ]),
    'traveller-bloody-diarrhoea': mk([
      'Acknowledges the UTC letter; open question; lets him describe six days of diarrhoea and the new blood before closed questions.',
      'Occupation (food handler), zero-hours pay and manager pressure, household contacts, travel itinerary and food exposures.',
      'Follows “I need to be back Saturday”, “there’s blood in it” and the wish for “something to stop it”.',
      'Idea (food bug); concern (blood, money); expectation (something to stop it so he can work Saturday).',
      'Stool culture with OCP (travel history on the form) and FBC, U&E, CRP within 24 hours; uses UTC observations and video appearance.',
      'Campylobacter, Shigella, Salmonella, STEC, amoebic dysentery; enteric fever and malaria considered via itinerary; IBD if persistent.',
      'Dehydration, haemolytic uraemic syndrome (pallor, bruising, low urine), severe pain, sepsis; identifies loperamide use as a risk.',
      'Acute infective bloody diarrhoea (dysentery) after travel; clinically stable; food handler.',
      'Stop loperamide; no routine antibiotics; oral rehydration and paracetamol; notification to UKHSA; 48-hour food-handler exclusion and possible clearance.',
      'Income loss addressed (fit note, sick pay, Citizens Advice); household hygiene; review if a result needs treatment.',
      'Clear same-day and 999 triggers; results call in 48–72 hours; teach-back.'
    ]),
    'melaena-declines-admission': mk([
      'Hears the opening “no” without arguing; asks how he has been before giving the results.',
      'Daughter staying this week, ex-partner abroad, sister nearby, previous hospital experience, redundancy and money, smoking.',
      'Follows “don’t ask”, “they treated me like a drunk” and “there’s no-one”.',
      'Idea (poor diet anaemia); concern (losing contact with Mia; stigma); expectation (results, iron, stay home).',
      'Interprets Hb 74, MCV 71, raised urea with normal creatinine, tachycardia and low BP; ferritin pending; endoscopy needed.',
      'Recurrent peptic ulcer bleed (H. pylori, NSAIDs, alcohol) vs varices vs oesophagitis vs malignancy (less likely at 32).',
      'Recognises a high-risk upper GI bleed (Glasgow-Blatchford about 14); asks about haematemesis, syncope, chest pain; alcohol withdrawal risk.',
      'Symptomatic anaemia from probable recurrent bleeding peptic ulcer, with alcohol dependence; capacitous refusal of admission.',
      'Recommends same-day admission with honest risk; assesses capacity; negotiates on-call team advice and earliest ambulatory assessment; another adult with Mia tonight.',
      'Stop NSAIDs; PPI as agreed; thiamine; do not stop alcohol suddenly; alcohol service; defer iron; recheck H. pylori later.',
      '999 for vomiting blood, more melaena, faintness, collapse or chest pain; call-back within the hour; documentation.'
    ]),
    'post-tia-medicine-side-effects': mk([
      'Uses the TIA clinic letter; lets her explain the symptoms and her leaflet theory.',
      'Work as a ward clerk, husband away until tomorrow, no driving for a month, fluid restriction at work, her mother’s stroke.',
      'Follows “the leaflet says dizziness”, “my mother had a stroke” and “I take those as well”.',
      'Idea (new tablets are the cause); concern (stroke like her mother’s; side effects); expectation (stop the new tablets).',
      'Home BP seated and standing during the call; asks her to read each box; nurse lying/standing BP and U&E, CK, LFT, FBC, TSH tomorrow.',
      'Postural hypotension from overtreatment vs recurrent TIA vs arrhythmia vs statin myopathy vs anaemia or bleeding.',
      'Screens for focal neurology, syncope, chest pain, palpitations, bleeding on clopidogrel, muscle weakness and dark urine.',
      'Symptomatic postural hypotension from an unintended losartan 150 mg daily; possible statin muscle symptoms.',
      'Stops the duplicate losartan 50 mg, keeps 100 mg; continues clopidogrel and atorvastatin with reasons; one change at a time.',
      'Statin pathway by CK; pharmacist review and single updated organiser; fluids; fit note; BP target once stable.',
      'FAST and 999 advice; same-day contact for fainting or bleeding; review with results in 2–3 days.'
    ]),
    'loin-pain-away-from-home': mk([
      'Establishes where she is and that she can talk; hears the request for codeine and physiotherapy.',
      'Away at a work exhibition five hours from home, colleague nearby, hire car, manager not told, lives alone.',
      'Follows “it’s not like last time”, the rigors, and “it wasn’t touching it, so I took paracetamol in between”.',
      'Idea (back flare); concern (letting the team down; unknowing paracetamol excess); expectation (codeine and physio).',
      'Self-measured temperature and pulse on video; explains ED will do urine, bloods, paracetamol level, LFTs and imaging as needed.',
      'Pyelonephritis vs obstructed infected kidney vs renal colic vs appendicitis vs ectopic pregnancy vs mechanical back pain.',
      'Sepsis features (fever 38.9, pulse 116, rigors, vomiting); cauda equina screen; pregnancy; staggered paracetamol overdose.',
      'Probable acute right pyelonephritis with possible sepsis, plus unintentional staggered paracetamol overdose.',
      'Same-day nearest ED rather than codeine or remote antibiotics; stop all paracetamol products; take the packets; no driving.',
      'Work pressure addressed (fit note, message manager); colleague to accompany; future analgesic safety.',
      '999 if confused, breathless, faint or not passing urine; follow-up call tomorrow; own GP on return.'
    ]),
    'ovarian-results-moving-on': mk([
      'Checks identity, privacy and connection; offers her partner; asks what she understands before giving results.',
      'Lives on a narrowboat, must move today, post to a friend, patchy signal, casual work, partner’s support.',
      'Follows “it’s the fibroid, isn’t it?”, “the signal is rubbish” and “we have to move the boat today”.',
      'Idea (fibroid); concern (falling through the cracks; dying young); expectation (results and routine referral).',
      'Interprets CA-125 486 with the complex adnexal mass and free fluid (RMI about 1458); specialists will arrange CT chest, abdomen and pelvis.',
      'Ovarian cancer most likely; differential of endometrioma, fibroid, abscess or other pelvic malignancy considered and set aside.',
      'Asks about breathlessness (effusion), weight loss, bowel obstruction symptoms, PV bleeding; acts on a radiologist’s urgent recommendation.',
      'Complex left adnexal mass highly suspicious of ovarian cancer.',
      'Breaks the news with a warning shot and silence; refers today on the suspected cancer pathway; does not wait for her to settle.',
      'Contact plan (her and Dev’s numbers with consent, email, NHS App results), registration anywhere, redirecting referral, staying within reach.',
      'Call in 48 hours; named contact; safety-net for breathlessness, pain, vomiting or obstruction; call if no appointment within a week.'
    ]),
    'ed-after-mi-online-tablets': mk([
      'Checks privacy; normalises; lets him describe the problem in his own words.',
      'Marriage and wife’s view, shared fear about sex after MI, work, wish to avoid more medicines and concern about his record.',
      'Follows “I don’t want another tablet”, “the heart doctor upped one of them” and “what if I have another one… during?”.',
      'Idea (heart tablets or age); concern (sex causing another MI; online tablets unknown to him as dangerous); expectation (help without more tablets).',
      'HbA1c, lipids, U&E; morning testosterone if indicated; offers genital examination; uses recent BP and pulse.',
      'Vascular ED vs beta-blocker effect vs performance anxiety vs hypogonadism vs diabetes.',
      'Asks about online or over-the-counter medicines and GTN — finds unregulated PDE-5 tablets with nitrate access and a near-faint; cardiac symptoms screened.',
      'Multifactorial ED after MI (vascular, bisoprolol increase, anxiety) with unsafe use of online PDE-5 tablets.',
      'Stop online tablets; cardiology advice and guidance on bisoprolol reduction and a prescribed PDE-5 inhibitor; no self-adjustment of cardiac medicines.',
      'Sex-after-MI reassurance with an exercise benchmark; psychosexual support; lifestyle; involve his wife if wished.',
      'No GTN within 24 hours of sildenafil — 999 for chest pain; call with cardiology reply and results.'
    ]),
    'mnd-choking-planning-ahead': mk([
      'Acknowledges the absent MND nurse; lets him tell the choking story.',
      'Wife at work until 6 pm, bungalow, son away, his professional background, carer strain.',
      'Follows “frightened the life out of us”, “I know where this goes” and “I can’t lie flat any more”.',
      'Idea (MND reaching swallowing); concern (choking to death; not wanting machines; not yet told his wife); expectation (practical help and someone to talk to).',
      'Home visit tomorrow for chest and neurological examination; weight from his scales; urgent respiratory assessment (FVC/SNIP) via the specialist team.',
      'Bulbar progression vs aspiration pneumonia vs other causes of dysphagia; nocturnal hypoventilation vs other causes of headache and sleepiness.',
      'Aspiration signs, orthopnoea, morning headaches, daytime sleepiness, weight loss of about 7%, falls with head injury.',
      'Progression of ALS with bulbar dysphagia, sialorrhoea, weight loss and probable nocturnal hypoventilation.',
      'Urgent SALT and dietitian; urgent MND team/neurology or respiratory contact for NIV assessment and gastrostomy discussion; riluzole liquid.',
      'Saliva management, OT and physiotherapy for falls, carer support, advance care planning (wishes, ADRT, ReSPECT, LPA) at his pace.',
      'Safe-swallow advice; choking first aid and 999; fever or breathlessness same day; home visit tomorrow with his wife.'
    ]),
    'postnatal-isolation-new-arrival': mk([
      'Checks it is a good time; uses the health visitor note; invites her own account without labelling.',
      'Husband’s night shifts, migration ten months ago, mother’s refused visa, cultural expectations of the postnatal period, barriers to going out.',
      'Follows “I’m just on my own a lot”, “I feel useless” and “her visa was refused”.',
      'Idea (lonely, not depressed); concern (baby taken; visa problems); expectation (to show she is coping).',
      'Whooley and GAD-2 style questions; offers her postnatal check with FBC, ferritin and TSH; re-screen at follow-up.',
      'Adjustment reaction vs postnatal depression vs anxiety vs anaemia or thyroiditis contributing to tiredness.',
      'Self-harm, suicidal thoughts, thoughts of harming the baby, psychotic symptoms, bonding and neglect — all asked directly and kindly.',
      'Adjustment reaction with isolation after childbirth and migration; no current depression or risk; raised future risk.',
      'Active support: health visitor, Family Hub, breastfeeding peer support, Home-Start, social prescriber, cultural community, Talking Therapies, involving her husband.',
      'Postnatal check, contraception, tiredness bloods, hair shedding reassurance; accurate reassurance about social services and visas.',
      'Follow-up in 2 weeks with the health visitor and GP; NHS 111 mental health option and 999 safety-net; teach-back.'
    ])
  };

  /* inline copy (read by sca-enrich.js when SCA_SC_TASKS has no entry for the id) */
  C.forEach(function(c){ if (TASKS[c.id]) c.scTasks = TASKS[c.id]; });

  /* Case-specific scorecard Tasks (merged into SCA_SC_TASKS by sca-enrich.js) */
  window.SCA_SC_TASKS_EXTRA = window.SCA_SC_TASKS_EXTRA || {};
  Object.keys(TASKS).forEach(function(k){ window.SCA_SC_TASKS_EXTRA[k] = TASKS[k]; });

  if (!window.SCA_CASES) return;
  var have = {};
  window.SCA_CASES.forEach(function(c){ have[c.id] = true; });
  C.forEach(function(c){ if (!have[c.id]) window.SCA_CASES.push(c); });
})();
