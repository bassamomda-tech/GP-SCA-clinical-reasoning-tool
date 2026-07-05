/* ============================================================
   Reasoning GP — Case Library batch 20: "Mood & dependence — high-stakes risk/ethics"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   Lethal-means / firearms duty, PTSD, the dependence fork, gambling suicide risk.
   No NG12 cancer link applies (correctly omitted).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases19.js.
   ============================================================ */

(function(){

  /* ============ 73. VIDEO — Depression in a man with a firearms licence ============ */
  const c73 = {
    id:'depression-firearms', title:'"I\u2019m not depressed, I\u2019m just not sleeping"', type:'video', duration:12,
    meta:{ age:54, sex:'M', setting:'Video consultation — low mood presenting as insomnia/irritability.', system:'Mental health / Depression, risk & the firearms duty' },
    brief:'Mr Alan Foister, 54, farmer, holds a shotgun and firearms certificate (occupational). Attends about poor sleep and "being snappy". Guarded, stoical. If explored: pervasive low mood, anhedonia, weight loss, early waking, hopelessness over the failing farm and recent separation. Reluctant to name it as depression. Has access to firearms at home. Drinking more. Says little about his thoughts unless asked directly.',
    script:{
      opening:'"Doc, I\u2019ll be honest, I think the wife booked this in my head before I did. I\u2019m just not sleeping \u2014 awake at four every morning, head going. And I\u2019ve been short with everyone. I don\u2019t need to be sat here talking about feelings; I just need something to knock me out at night so I can function on the farm. I\u2019m not one of these depression types."',
      facts:[
        { topic:'The depression',      text:'If explored: low mood most days for months, lost interest in things he loved, 6 kg weight loss, early-morning waking, poor concentration, feels he\u2019s "failed" \u2014 a clear depressive picture he resists labelling. Stoical "farmers don\u2019t get depressed" framing.' },
        { topic:'The risk (must ask)',   text:'On sensitive direct questioning: he has had thoughts that "everyone\u2019d be better off without me" and, if asked carefully, has thought about using his shotgun \u2014 he has access to firearms at home. This is high lethal-means access plus hopelessness: serious suicide risk requiring explicit assessment, not assumption.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the "just give me sleeping tablets" is partly a wish to avoid the truth, and partly that he has genuinely contemplated ending things and is testing whether anyone will notice. The triggers he hasn\u2019t volunteered: the farm is failing financially (possible repossession) and his wife has just left. He feels shame as "the man who couldn\u2019t hold it together".' },
        { topic:'The stigma barrier',    text:'Strong male/occupational stigma ("not one of these depression types"), rural isolation, and a culture of not asking for help \u2014 farmers are a known high-suicide-risk group. The reluctance is the danger.' },
        { topic:'What he wants',        text:'Officially: sleeping tablets to keep functioning. What is needed: explicit suicide-risk assessment, recognition of depression, safety planning including lethal-means (firearms) safety, treatment, and \u2014 if risk warrants \u2014 awareness of the duty to consider informing the firearms licensing authority. All delivered without shaming him into silence.' },
      ],
      ice:{
        ideas:'It\u2019s just insomnia and stress from the farm; he needs sleeping tablets, not "feelings talk"; he\u2019s "not the depression type".',
        concerns:'HIDDEN AGENDA \u2014 a failing farm (possible repossession) and his wife leaving, deep shame as a man who "couldn\u2019t hold it together", and genuine thoughts of ending his life using his shotgun, which he\u2019s testing whether anyone will notice.',
        expectations:'A prescription for sleeping tablets. What he actually needs: an explicit risk assessment, depression treatment, lethal-means safety planning, and compassionate handling of stigma.'
      },
      cues:['"Just knock me out so I can function" + early waking + snappy \u2014 a depressive picture he\u2019s reframing as mere insomnia.','"Everyone\u2019d be better off" if it surfaces \u2014 explicit suicidal ideation; ask directly about plan, means and the firearms.','Stoical "not the depression type", a farmer, isolated \u2014 high-risk demographic; the reluctance itself is the warning.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises DEPRESSION behind the "insomnia" (pervasive low mood, anhedonia, weight loss, early waking, hopelessness) rather than simply prescribing a hypnotic, and does not collude with the "just stress / not the depression type" framing' },
      { dom:'tasks', text:'Conducts an EXPLICIT suicide-risk assessment: asks directly about thoughts of being better off dead, suicidal ideation, plan, intent, means and preparatory acts \u2014 and specifically about ACCESS TO FIREARMS at home \u2014 plus protective factors; recognises asking does not increase risk' },
      { dom:'tasks', text:'Addresses LETHAL-MEANS SAFETY: discusses temporarily removing/securing access to the shotgun (e.g. asking a trusted person/RFD to hold firearms, secure storage), as a core part of safety planning for a high-risk patient with firearm access' },
      { dom:'tasks', text:'Knows the FIREARMS DUTY: if there is a genuine risk to safety, a GP may need to consider informing the police/firearms licensing department \u2014 a justified breach of confidentiality in the public interest \u2014 ideally discussed with the patient and done proportionately per GMC guidance' },
      { dom:'tasks', text:'Initiates appropriate management: depression treatment (consider antidepressant ± psychological therapy), crisis/mental-health team involvement proportionate to risk, treats the alcohol as a contributor, and surfaces the social drivers (farm finances, separation) signposting practical support (e.g. farming charities)' },
      { dom:'rto',   text:'Overcomes the stigma with warmth and normalisation so he engages: validates the strain, reframes depression as an illness not a weakness, and creates safety to disclose rather than shaming him into silence' },
      { dom:'rto',   text:'Handles the firearms/confidentiality conversation honestly and respectfully \u2014 explaining any need to act on risk WITH him wherever possible, preserving the relationship' },
      { dom:'gs',    text:'Safety-nets robustly and documents: crisis routes (111/crisis team/A&E) if thoughts intensify, a safety plan including means restriction, early follow-up, who to contact, and coordinated treatment \u2014 a concrete plan, not a hypnotic and a goodbye' },
    ],
    worked:[
      { lbl:'Reframe, don\u2019t collude', txt:'"I\u2019ll happily help with the sleep \u2014 but waking at four with your head racing, going off your food, snapping at everyone, losing interest in things: that\u2019s not just bad sleep, that\u2019s often what low mood looks like in men, especially men who\u2019d never use the word \u2018depression\u2019. There\u2019s no weakness in it; it\u2019s an illness, and it\u2019s treatable. Can we look at the whole picture, not just the nights?"' },
      { lbl:'Ask the hard question',  txt:'"I\u2019m going to ask you something directly, because I ask anyone who\u2019s this low and it matters. When things have felt this heavy, have you had thoughts that you\u2019d be better off not here, or that others would be better off without you? \u2026 Thank you for being honest. Have you thought about how? \u2026 And you\u2019ve got the guns at home, haven\u2019t you."' },
      { lbl:'Lethal-means safety',    txt:'"Here\u2019s where I have to be straight with you, man to man, because I\u2019d rather have an awkward conversation than the alternative. With thoughts like that and the shotguns in the house, I want us to make those guns safe for now \u2014 someone you trust, or the dealer, holding them, or them properly secured away from you. Not forever necessarily; just while we get you through this. Would you work with me on that?"' },
      { lbl:'The duty, honestly',     txt:'"And I won\u2019t hide this from you: if I\u2019m genuinely worried about your safety, I might have to let the firearms licensing people know, because of the risk. I\u2019d always rather do that WITH you, in the open, than behind your back. But your life matters more to me than the certificate, and I think it does to you too, even on the hard mornings."' },
      { lbl:'Name the real weight',   txt:'"Can I ask what\u2019s been crushing you? \u2026 The farm, and her leaving. Alan, that\u2019s an enormous amount \u2014 your livelihood and your marriage at once, and a lifetime of being the one who copes. No wonder. None of this makes you a failure; it makes you a man carrying far too much alone. There\u2019s real help \u2014 for the head, and for the farm side too; there are people for exactly this."' },
      { lbl:'Plan + safety-net',      txt:'"So: let\u2019s treat the depression properly \u2014 I\u2019d suggest starting a medication and getting you some talking support, and easing off the drink, which is making it worse. We make the guns safe today. If those thoughts get stronger, or you feel you might act, this is who you call, any hour \u2014 and A&E is always there. I want to see you in a few days, not weeks. You came in for sleeping tablets; what you\u2019re leaving with is people who aren\u2019t going to let you go under."' },
    ],
    learning:'"Just insomnia" in a stoical, isolated man is frequently depression \u2014 and farmers/men with firearms access are a recognised high-suicide-risk group, so the reluctance itself is the warning. The non-negotiable task is an EXPLICIT suicide-risk assessment (thoughts of being better off dead, ideation, plan, intent, means, preparatory acts) including direct enquiry about FIREARM ACCESS \u2014 asking does not increase risk. With high lethal-means access plus hopelessness, lethal-means safety (securing/removing the firearms via a trusted person or dealer) is central to the safety plan, and the GP must know the firearms duty: a genuine safety risk can justify informing the police/firearms licensing department in the public interest, done proportionately and, wherever possible, with the patient. The examinable hidden agenda is shame-laden (a failing farm and a marriage ending) and a man testing whether anyone notices his despair. Overcome stigma with warmth so he engages, treat the depression and alcohol, surface the social drivers and signpost practical help, handle the confidentiality/firearms conversation honestly, and safety-net with crisis routes and early follow-up.',
    knowledge:{
      guideline:'NICE NG222 depression in adults · GMC confidentiality (public interest / firearms) · NPCC/Home Office firearms-licensing medical guidance · suicide prevention',
      points:[
        { h:'See depression behind somatic presentations', t:'Men, farmers and stoical patients often present depression as insomnia, irritability, alcohol use or physical symptoms, resisting the label. Screen for core features (low mood, anhedonia, sleep/appetite/weight change, hopelessness, guilt, concentration, suicidality). Do not just treat the insomnia.' },
        { h:'Explicit suicide-risk assessment', t:'Ask directly and unflinchingly about thoughts of being better off dead, active ideation, plan, intent, means, access to lethal means (here firearms), and preparatory acts, alongside protective factors. Asking does NOT plant or increase risk. Farmers/those with firearm access are a high-risk group.' },
        { h:'Lethal-means safety', t:'Reducing access to lethal means is one of the most effective suicide-prevention interventions. For firearm access plus risk, plan to secure or remove firearms (trusted person, registered firearms dealer, secure storage) as part of the safety plan, ideally collaboratively.' },
        { h:'The firearms duty', t:'A GP who believes a patient with firearms poses a risk to themselves or others may disclose to the police/firearms licensing department in the public interest \u2014 a justified breach of confidentiality under GMC guidance. Discuss with the patient where possible, act proportionately, and document the reasoning.' },
        { h:'Treat and support', t:'Offer evidence-based depression treatment (antidepressant and/or psychological therapy per severity/preference), address contributing alcohol use, and involve crisis/mental-health services proportionate to risk. Surface and signpost social drivers (financial/farm support charities, relationship support).' },
        { h:'Overcome stigma', t:'Normalise depression as a treatable illness, validate the strain, and use language that fits the patient \u2014 stigma and shame cause dangerous non-disclosure, especially in men and rural communities.' },
        { h:'Never do', t:'Never prescribe a hypnotic and miss the depression and risk; never skip explicit suicide questioning or firearm-access enquiry; never ignore lethal-means safety; never breach confidentiality covertly when it could be done openly; never shame the patient into silence.' },
        { h:'Safety-net & follow-up', t:'Safety plan with means restriction; crisis routes (111/crisis team/A&E) if thoughts intensify; early follow-up (days, not weeks); coordinated treatment; documented risk assessment and any firearms-disclosure reasoning.' }
      ]
    }
  };

  /* ============ 74. TELEPHONE — PTSD in a veteran who "doesn't do feelings" ============ */
  const c74 = {
    id:'ptsd-veteran', title:'"I just need something for my back and my temper"', type:'telephone', duration:12,
    meta:{ age:39, sex:'M', setting:'Telephone — ex-forces man presenting somatically.', system:'Mental health / PTSD & trauma-informed care' },
    brief:'Mr Craig Mullen, 39, ex-Army (two tours), now a security guard. Rings about chronic back pain, poor sleep and "a short fuse" that\u2019s costing him jobs and his relationship. Dismissive of "head stuff". If explored: nightmares, flashbacks, hypervigilance, avoidance of crowds, startle response, heavy drinking, since leaving the forces. Estranged from his kids. Frames everything physically. Suspicious of services. No current expressed suicidal intent volunteered.',
    script:{
      opening:'"Look, I\u2019m not really one for phone calls about feelings, so I\u2019ll keep it simple. My back\u2019s wrecked, I\u2019m not sleeping, and my temper\u2019s gone \u2014 I nearly lost it with a bloke at work and they\u2019ve put me on a warning. I just need something for the pain and maybe the sleep so I can keep a lid on it. I\u2019ve had enough of being passed around. Can you just sort that?"',
      facts:[
        { topic:'The PTSD picture',     text:'If gently explored: nightmares and flashbacks of incidents on tour, hypervigilance ("I sit with my back to the wall"), avoidance of crowds/news, exaggerated startle, emotional numbing, irritability/anger \u2014 a clear PTSD picture since service. The back pain and insomnia are the acceptable face of it.' },
        { topic:'The alcohol & risk',   text:'If asked: drinking heavily to sleep/numb; the anger is escalating (warning at work, relationship breakdown). Suicide risk must be assessed sensitively \u2014 veterans are higher-risk; he won\u2019t volunteer it but may disclose if asked directly and without judgement.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 beneath "sort my back and temper" is profound, unspoken trauma and shame: he believes asking for mental-health help means he\u2019s "broken" / has failed the soldier\u2019s code of coping, fears losing his identity as the strong one, and is terrified of his own anger around his kids (the real reason he\u2019s estranged \u2014 he removed himself to protect them). He has been "passed around" and expects to be dismissed again.' },
        { topic:'The trust barrier',     text:'Distrust of services, prior fragmented care, and a forces culture of self-reliance. He will disengage if it feels like being processed or pathologised; trauma-informed pace and respect are essential.' },
        { topic:'What he wants',        text:'Officially: painkillers and sleeping tablets. What is needed: recognition of PTSD behind the somatic presentation, a trauma-informed, respectful approach that earns enough trust to name it, risk assessment, and referral to appropriate veteran-specific services (Op COURAGE) plus alcohol support \u2014 not just analgesia.' },
      ],
      ice:{
        ideas:'His problems are physical \u2014 a bad back, no sleep, a short temper \u2014 fixable with the right tablets; "head stuff" isn\u2019t for him.',
        concerns:'HIDDEN AGENDA \u2014 unspoken combat trauma and shame; belief that needing mental-health help means he\u2019s "broken" and has failed as a soldier/man; terror of his own anger around his children (why he\u2019s removed himself); expecting to be dismissed again.',
        expectations:'Painkillers and sleeping tablets. What he actually needs: PTSD recognised behind the physical complaints, a trauma-informed approach, risk assessment, and referral to veteran services (Op COURAGE) and alcohol support.'
      },
      cues:['"Not one for feelings / just sort my back and temper" + nightmares + hypervigilance + drinking since service \u2014 PTSD wearing a physical mask.','"Nearly lost it / put me on a warning" + estranged from his kids \u2014 escalating anger and the trauma-driven self-removal; assess risk.','"Had enough of being passed around" \u2014 distrust and expectation of dismissal; go at a trauma-informed pace or he disengages.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises PTSD behind the somatic presentation (nightmares, flashbacks, hypervigilance, avoidance, hyperarousal/irritability, numbing since service) rather than just treating the back pain and insomnia \u2014 and links the anger, drinking and relationship breakdown to it' },
      { dom:'tasks', text:'Assesses RISK sensitively: suicide/self-harm (veterans higher-risk), risk to others given escalating anger (and any risk around the children), and the heavy alcohol use \u2014 asking directly but in a trauma-informed, non-judgemental way' },
      { dom:'tasks', text:'Refers to appropriate veteran-specific and evidence-based services: Op COURAGE (the NHS veterans\u2019 mental-health service) and trauma-focused psychological therapy (TF-CBT/EMDR) for PTSD per NICE; plus alcohol support \u2014 rather than just analgesia/hypnotics' },
      { dom:'tasks', text:'Manages prescribing wisely: avoids reinforcing dependence (benzodiazepines/Z-drugs/opioids are not the answer to PTSD-driven insomnia/pain), treats pain appropriately, and considers an SSRI/SNRI where indicated alongside therapy' },
      { dom:'tasks', text:'Surfaces the hidden trauma and the children: gently opens the door to why he\u2019s removed himself, recognising the self-protective logic and the risk picture, and addresses the shame/identity barrier' },
      { dom:'rto',   text:'Uses a trauma-informed, respectful, patient-led pace: does not force disclosure, validates his service and his coping, reframes help-seeking as strength not weakness, and earns enough trust that he engages rather than feeling "passed around" again' },
      { dom:'rto',   text:'Names PTSD as a normal injury of abnormal experience, not brokenness; respects his autonomy and identity while opening a door' },
      { dom:'gs',    text:'Safety-nets and follows up concretely: crisis routes if anger/despair escalate, alcohol and relationship support, the Op COURAGE referral and what to expect, a named follow-up so he is not passed around, and clear escalation if risk to self or others rises' },
    ],
    worked:[
      { lbl:'Meet him where he is',  txt:'"Fair enough \u2014 no feelings-chat, let\u2019s be practical. I\u2019ll help with the pain and the sleep. But can I be straight with you? The back, the no-sleep, the temper that\u2019s costing you jobs \u2014 in someone who\u2019s served, those often travel together, and there\u2019s usually something underneath driving the lot. I\u2019m not going to make you talk about anything you don\u2019t want to. But I\u2019d be a poor doctor if I just handed you tablets and ignored the engine."' },
      { lbl:'Open the door, lightly', txt:'"Can I ask a couple of soldier-to-civvy questions, no drama? Do you get nights where it all comes back \u2014 dreams, or it feels like you\u2019re there again? Do you sit with your back to the wall, clock the exits? \u2026 Yeah. That\u2019s not you being weak or broken. That\u2019s a normal reaction to things no one should have to see \u2014 it\u2019s got a name, and it\u2019s treatable."' },
      { lbl:'The drink and the temper', txt:'"And I\u2019m guessing the drink is how you get to sleep, and how you keep the lid on \u2014 except the lid keeps coming off. That\u2019s the trauma talking, not a character flaw. The good news is the anger and the nights both ease a lot when we treat what\u2019s underneath."' },
      { lbl:'Reach the kids, gently', txt:'"You mentioned things are bad with your kids. Tell me to back off if you want \u2014 but is part of keeping away from them about being scared of your own temper around them? \u2026 That\u2019s not you being a bad dad. That\u2019s you protecting them, at huge cost to yourself. We can work on that, so it doesn\u2019t have to stay that way."' },
      { lbl:'The right route',        txt:'"Here\u2019s what I\u2019d do, and it\u2019s not being passed around again \u2014 it\u2019s the right door. There\u2019s an NHS service just for veterans, Op COURAGE, who get exactly this and offer proper trauma therapy that works. I\u2019ll refer you there, help you with the drink, and sort sensible pain relief \u2014 not knock-out tablets that\u2019d trap you. And I\u2019m your point of contact, so you\u2019re not on your own with it."' },
      { lbl:'Risk + safety-net',      txt:'"One straight question because I ask everyone who\u2019s this worn down: have you had thoughts of ending it, or of really hurting someone? \u2026 Okay. If that ever changes \u2014 if it gets dark, or you feel you might lose control \u2014 this is who you call, day or night, and A&E is always open. I\u2019ll see you again soon to keep this moving. You came for tablets; what I want to give you is a way out of the loop."' },
    ],
    learning:'A veteran presenting with back pain, insomnia and "a short fuse" is often PTSD wearing a somatic, acceptable mask \u2014 the nightmares, flashbacks, hypervigilance, avoidance, numbing, irritability, heavy drinking and relationship breakdown are the real picture. The tasks: recognise PTSD behind the physical complaints, assess risk sensitively (suicide \u2014 veterans are higher-risk \u2014 risk to others given escalating anger, and any risk around the children), refer to evidence-based and veteran-specific care (Op COURAGE; trauma-focused CBT/EMDR per NICE) plus alcohol support, and prescribe wisely (not benzodiazepines/opioids that entrench dependence). The examinable hidden agenda is shame and identity: he believes help-seeking means he\u2019s "broken" and has failed the soldier\u2019s code, fears losing his strong-one identity, and has removed himself from his children to protect them from his anger. A trauma-informed, respectful, patient-led pace that reframes help as strength and names PTSD as a normal injury of abnormal experience is what earns the trust to engage him \u2014 not another tablet, and not being "passed around".',
    knowledge:{
      guideline:'NICE NG116 PTSD · Op COURAGE (NHS veterans\u2019 mental health) · NICE alcohol-use disorders · trauma-informed care',
      points:[
        { h:'Recognise PTSD behind somatic presentations', t:'PTSD core clusters: re-experiencing (nightmares, flashbacks), avoidance, hyperarousal (hypervigilance, startle, irritability/anger, insomnia) and negative mood/numbing, following trauma. It frequently presents as physical complaints, anger, or substance use, especially in those who resist "mental-health" framing.' },
        { h:'Assess risk carefully', t:'Veterans have elevated suicide risk; assess suicidal ideation/plan/means sensitively. Assess risk to others given escalating anger (and specifically any risk to children), and the role of alcohol. Heavy drinking commonly co-occurs and worsens both mood and impulse control.' },
        { h:'Refer to the right services', t:'Op COURAGE is the dedicated NHS veterans\u2019 mental-health service \u2014 refer/ signpost. NICE first-line PTSD treatment is trauma-focused psychological therapy (TF-CBT or EMDR); medication (e.g. SSRI/SNRI) where therapy is declined/insufficient or for comorbid depression. Treat co-occurring alcohol misuse in parallel.' },
        { h:'Prescribe wisely', t:'Do not treat PTSD-driven insomnia/pain with benzodiazepines, Z-drugs or opioids \u2014 they entrench dependence and don\u2019t treat the disorder. Manage pain appropriately and consider an SSRI/SNRI alongside therapy.' },
        { h:'Trauma-informed engagement', t:'Go at the patient\u2019s pace; do not force disclosure; validate service and coping; reframe help-seeking as strength; name PTSD as a normal reaction to abnormal events, not brokenness. Continuity (a named clinician) counters the "passed around" experience that drives disengagement.' },
        { h:'The hidden cost \u2014 family', t:'Self-imposed estrangement may be a protective response to feared anger. Explore gently, recognise the self-sacrifice and the risk, and frame change as achievable with treatment, supporting safe reconnection over time.' },
        { h:'Never do', t:'Never just treat the back pain/insomnia and miss the PTSD; never skip risk assessment (self and others); never prescribe dependence-forming drugs as the answer; never force disclosure or pathologise; never leave him feeling processed and passed around.' },
        { h:'Safety-net & follow-up', t:'Crisis routes if despair/anger escalate (111/crisis team/A&E); Op COURAGE referral with expectations; alcohol and relationship support; named follow-up for continuity; clear escalation if risk to self or others rises.' }
      ]
    }
  };

  /* ============ 75. TELEPHONE — Diazepam request: the dependence fork ============ */
  const c75 = {
    id:'diazepam-request', title:'"My old doctor always gave me a few diazepam"', type:'telephone', duration:12,
    meta:{ age:46, sex:'F', setting:'Telephone — request for diazepam from a newly-registered patient.', system:'Mental health / Benzodiazepine dependence fork' },
    brief:'Ms Donna Preadon, 46, newly registered, requests "a few diazepam like my old GP gave me" for anxiety. No records arrived yet. If explored: longstanding anxiety, using diazepam regularly for years, escalating dose, recently buying extra online when scripts ran short, plus alcohol in the evenings. A specific current stressor she hasn\u2019t named. Wants a prescription today and is pre-emptively defensive.',
    script:{
      opening:'"Hi, so I\u2019ve just moved and registered with you, and I take diazepam for my anxiety \u2014 my old doctor always sorted me a few. I just need you to put a prescription through; I\u2019ve nearly run out and I get really bad without them. I know what works for me, I\u2019ve been on them years. Can you just do it so I don\u2019t have to go through it all again with someone new?"',
      facts:[
        { topic:'The dependence picture', text:'If gently explored: on diazepam regularly for years (not short-term), dose has crept up (tolerance), gets withdrawal-type symptoms when low (shakes, worse anxiety, sweats), and has been BUYING extra online when prescriptions ran short \u2014 plus regular evening alcohol. This is benzodiazepine dependence, not simple anxiety relief.' },
        { topic:'The safety issues',     text:'Abrupt cessation of long-term benzodiazepines risks withdrawal seizures; combining benzodiazepines with alcohol (and any opioids) is dangerous (respiratory depression/overdose). So neither a flat refusal (precipitating withdrawal/driving her to the online supply) nor simply prescribing on demand is safe.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the defensiveness masks shame and fear: she half-knows she\u2019s dependent and is frightened of being labelled an addict or cut off cold. Underneath, the diazepam is medicating an unaddressed driver \u2014 a recent diagnosis of her child\u2019s serious illness has spiked her anxiety, and she\u2019s using the drug (and alcohol) to cope. She wants relief and to not be judged or abandoned.' },
        { topic:'The negotiation, not refusal', text:'The skill is the "dependence fork": neither just prescribe nor just refuse \u2014 acknowledge the dependence non-judgementally, ensure safety (no abrupt stop, address alcohol), offer a structured plan (a safe prescribing/withdrawal plan, gradual taper, support) and treat the underlying anxiety properly (SSRI, CBT).' },
        { topic:'What she wants',        text:'Officially: a diazepam prescription today, no fuss. What is needed: a safe, non-judgemental response that neither abandons her (precipitating withdrawal/online buying) nor simply continues an escalating dependence \u2014 a bridging-safety plan, an honest dependence conversation, alcohol safety, and proper treatment of the anxiety and its driver.' },
      ],
      ice:{
        ideas:'Diazepam is what works for her anxiety; the new GP should just continue it as the old one did.',
        concerns:'HIDDEN AGENDA \u2014 shame and fear of being labelled an addict or cut off cold (she half-knows she\u2019s dependent and buys extra online); the diazepam and alcohol are masking spiked anxiety since her child\u2019s serious-illness diagnosis.',
        expectations:'A prescription today. What she actually needs: a safe, non-judgemental plan that avoids abrupt withdrawal, addresses the dependence and alcohol, and treats the underlying anxiety and its trigger.'
      },
      cues:['"My old doctor always gave me a few / I get really bad without them" \u2014 tolerance and withdrawal; dependence, not simple anxiety.','Defensive, pre-empting refusal, buying online \u2014 shame and fear of being cut off; approach without judgement.','A current unnamed stressor \u2014 the driver behind the escalation (her child\u2019s illness) waiting to be surfaced.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises BENZODIAZEPINE DEPENDENCE (long-term use, tolerance/dose escalation, withdrawal symptoms, supplementing from online sources) rather than treating it as a simple anxiety-relief request' },
      { dom:'tasks', text:'Takes the SAFE middle path of the dependence fork: neither prescribes on demand nor refuses flatly \u2014 explains why abrupt cessation is dangerous (withdrawal seizures) and why escalating supply is harmful, and offers a structured, supported plan instead' },
      { dom:'tasks', text:'Addresses the COMBINED RISKS: the danger of benzodiazepine + alcohol (and opioids) \u2014 respiratory depression/overdose \u2014 and screens/advises on the alcohol; arranges safe bridging rather than leaving her to the online supply' },
      { dom:'tasks', text:'Plans a gradual withdrawal/taper and proper anxiety treatment: a structured diazepam-equivalent reducing regimen with support (per guidance), and evidence-based treatment of the underlying anxiety (SSRI/SNRI, CBT, self-help) instead of ongoing benzodiazepines' },
      { dom:'tasks', text:'Surfaces the underlying DRIVER (the hidden agenda): explores the recent stressor (her child\u2019s illness), the role the drug/alcohol is playing, and her mental state/risk \u2014 treating the cause, not just the prescription' },
      { dom:'rto',   text:'Responds without judgement or labelling: de-escalates the defensiveness, names dependence as a common, treatable problem (not a moral failing), and reassures her she will not be abandoned or cut off cold' },
      { dom:'rto',   text:'Shares the decision and builds an alliance: respects her experience while being honest about safety, so she stays engaged rather than going elsewhere/online' },
      { dom:'gs',    text:'Safety-nets and arranges continuity: a clear interim plan (e.g. a short safe bridging supply with a follow-up rather than a refusal), an appointment to make the taper/treatment plan, alcohol support, when to seek urgent help, and documentation \u2014 obtaining the old records' },
    ],
    worked:[
      { lbl:'Defuse, don\u2019t refuse',  txt:'"Thanks for being upfront with me. I\u2019m not going to do either of the two things you might be bracing for \u2014 I\u2019m not going to just snap the tablets off you, and I\u2019m also not going to simply keep them rolling without us talking, because I\u2019d be doing you a disservice. There\u2019s a safer middle path, and I want to find it with you."' },
      { lbl:'Name it kindly',        txt:'"Can I be honest? From what you describe \u2014 needing more over time, feeling rough without them, topping up when scripts run short \u2014 your body has become dependent on diazepam. That is incredibly common and it is NOT a moral failing or you being an addict in the way people mean it. It\u2019s a medical thing, and it\u2019s treatable. You\u2019re not in trouble."' },
      { lbl:'The safety bit',        txt:'"Two safety things I can\u2019t ignore. Stopping these suddenly can cause fits, so we never just stop \u2014 we come down slowly and safely. And mixing them with the evening drink can affect your breathing, which is genuinely dangerous, so we\u2019ll look at that together too. That\u2019s why I won\u2019t leave you to buy them online \u2014 that\u2019s the riskiest option of all."' },
      { lbl:'Find the real driver',  txt:'"Can I ask what\u2019s been making the anxiety worse lately? \u2026 Your little one\u2019s diagnosis. Donna, that is so much to carry \u2014 of course you\u2019ve been reaching for whatever takes the edge off. That makes complete sense. But you deserve something that actually treats the anxiety, not just numbs it while the dose climbs."' },
      { lbl:'The plan',              txt:'"So here\u2019s what I\u2019d suggest. I\u2019ll give you a safe amount to bridge you now so you\u2019re not in withdrawal \u2014 no cold turkey. Then we make a proper plan: a slow, comfortable reduction with support, and treatment that genuinely helps anxiety \u2014 a different kind of medication that isn\u2019t addictive, and some talking therapy. We\u2019ll sort the drinking gently too. And I\u2019ll get your old records so I\u2019m not flying blind."' },
      { lbl:'Alliance + safety-net', txt:'"You know your body and I\u2019m going to work WITH you, not do things to you. If you feel really unwell \u2014 bad shakes, confusion, or any fits \u2014 that\u2019s urgent, ring us or 999. Let\u2019s book you in properly this week to set the plan up, and I\u2019m your doctor for this now \u2014 you\u2019re not starting from scratch with a stranger each time. Does that feel like something you can work with?"' },
    ],
    learning:'A "just continue my diazepam" request from a long-term user with tolerance, withdrawal symptoms and online top-ups is benzodiazepine DEPENDENCE, and the examinable skill is the dependence fork: neither prescribe on demand nor refuse flatly. A flat refusal precipitates dangerous withdrawal (seizures) and drives her to the riskier online/illicit supply; unquestioning continuation entrenches an escalating, harmful dependence \u2014 especially with concurrent alcohol (benzodiazepine + alcohol/opioids risks respiratory depression). The safe path acknowledges dependence without judgement or labelling, ensures safety (no abrupt stop; address alcohol; safe bridging), and offers a structured gradual taper plus proper treatment of the underlying anxiety (SSRI/SNRI, CBT) rather than ongoing benzodiazepines. The hidden agenda is shame and fear of being cut off, with the drug (and alcohol) medicating an unaddressed driver \u2014 here her child\u2019s serious-illness diagnosis. Surface and treat the cause, build an alliance so she stays engaged rather than going elsewhere, obtain the old records, and safety-net withdrawal red flags with continuity of care.',
    knowledge:{
      guideline:'NICE/CKS benzodiazepine & z-drug withdrawal · NICE NG215 (dependence/withdrawal) · NICE generalised anxiety disorder · alcohol guidance',
      points:[
        { h:'Identify dependence', t:'Long-term (beyond a few weeks) benzodiazepine use, tolerance/dose escalation, withdrawal symptoms when reducing (rebound anxiety, insomnia, tremor, sweating, seizures), and sourcing extra supplies indicate dependence \u2014 distinct from short-term anxiety relief.' },
        { h:'The dependence fork \u2014 neither extreme', t:'Avoid both a flat refusal (precipitates withdrawal, including seizures, and drives illicit/online sourcing) and unquestioning continuation (entrenches dependence). Offer a safe, supported middle path: acknowledge, ensure safety, and plan a structured reduction.' },
        { h:'Safety: abrupt stop and combinations', t:'Never stop long-term benzodiazepines abruptly \u2014 risk of withdrawal seizures and delirium. Benzodiazepines combined with alcohol or opioids cause respiratory depression and overdose \u2014 screen and address concurrent use. Safe bridging is safer than abandonment.' },
        { h:'Gradual withdrawal & anxiety treatment', t:'Plan a slow, individualised taper (often via diazepam equivalents) with support and review. Treat the underlying anxiety with evidence-based options (SSRI/SNRI, CBT, guided self-help) rather than ongoing benzodiazepines, which are recommended only for short-term/crisis use.' },
        { h:'Treat the driver, not just the script', t:'Escalation usually reflects an unaddressed stressor or untreated anxiety/depression (here a child\u2019s serious illness). Surface and treat the cause; assess mood and risk.' },
        { h:'Non-judgemental alliance & continuity', t:'Name dependence as common and treatable, not a moral failing; reassure she won\u2019t be cut off cold. Build a shared plan and continuity (named clinician, obtain previous records) so she engages rather than seeking elsewhere.' },
        { h:'Never do', t:'Never prescribe on demand without assessment; never refuse flatly and precipitate withdrawal; never ignore concurrent alcohol/opioids; never stop abruptly; never label/shame; never miss the underlying driver and the anxiety treatment.' },
        { h:'Safety-net & follow-up', t:'Safe interim/bridging supply with a planned review; taper and anxiety-treatment appointment; alcohol support; withdrawal red flags (severe shakes, confusion, seizures) \u2192 urgent/999; obtain old records; documented plan and continuity.' }
      ]
    }
  };

  /* ============ 76. VIDEO — Gambling and the debt behind the insomnia ============ */
  const c76 = {
    id:'gambling-insomnia', title:'"I just can\u2019t switch my head off at night"', type:'video', duration:12,
    meta:{ age:33, sex:'M', setting:'Video consultation — insomnia/anxiety; requesting sleeping tablets.', system:'Mental health / Gambling disorder & hidden risk' },
    brief:'Mr Ryan Doherty, 33, warehouse team leader, asks for sleeping tablets because he "can\u2019t switch off". Tense, exhausted. If explored sensitively: spiralling online gambling, secret debts (~£40k on cards/loans), hiding it from his partner who is pregnant, escalating chasing of losses, and \u2014 if asked directly \u2014 thoughts that his family would be "better off with the life insurance". Frames it all as work stress. Drinking more. No prior MH contact.',
    script:{
      opening:'"Cheers for seeing me. I\u2019m just shattered \u2014 I lie there and my head won\u2019t switch off, racing all night, and then I\u2019m wrecked at work. I think it\u2019s just stress, the job\u2019s full on. Could you give me something to help me sleep? If I could just get a few decent nights I\u2019d be fine. I don\u2019t really want to get into all the why, I just need to sleep."',
      facts:[
        { topic:'The hidden cause',     text:'If a sensitive cause-of-insomnia exploration is done: the racing head is gambling \u2014 online betting that\u2019s spiralled, chasing losses, secret debts around £40,000 on cards and loans, hiding it from his pregnant partner. The insomnia is a symptom; gambling disorder is the engine.' },
        { topic:'The suicide risk',     text:'CRITICAL \u2014 gambling disorder carries a HIGH suicide risk. On sensitive direct questioning he admits thoughts that his family would be "better off with the life insurance", has looked at the policy, and feels trapped/hopeless. This must be asked about explicitly; he will not volunteer it.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the "just give me sleeping tablets, I don\u2019t want the why" is shame and secrecy: he is drowning in concealed debt and self-loathing, terrified his partner and the world will find out, and is quietly contemplating suicide as a "solution" that clears the debt for his family. He wants relief and, beneath that, for someone to see it without him having to confess the whole thing.' },
        { topic:'The framing as stress', text:'He attributes everything to work stress to avoid disclosing the gambling. Drinking more to cope. A sleeping-tablet prescription alone would miss a life-threatening situation.' },
        { topic:'What he wants',        text:'Officially: sleeping tablets, no questions. What is needed: a sensitive exploration of WHY he can\u2019t sleep that uncovers the gambling and, crucially, an explicit suicide-risk assessment; then treating it as an addiction with hidden high risk \u2014 safety planning, signposting (GamCare/NGTS, debt advice), partner/support, and mental-health follow-up.' },
      ],
      ice:{
        ideas:'It\u2019s just work stress keeping him awake; sleeping tablets will fix it; he doesn\u2019t want to discuss "the why".',
        concerns:'HIDDEN AGENDA \u2014 spiralling gambling and ~£40k of secret debt hidden from his pregnant partner, drowning in shame, and quietly contemplating suicide as a way to clear the debt via life insurance.',
        expectations:'A prescription for sleeping tablets, no questions. What he actually needs: the gambling uncovered, an explicit suicide-risk assessment, and treatment as a high-risk addiction with safety planning and signposting.'
      },
      cues:['"My head won\u2019t switch off / I don\u2019t want the why" \u2014 something specific is driving the insomnia; don\u2019t just prescribe a hypnotic.','Tense, exhausted, attributing all to "work stress", drinking more \u2014 a concealed cause; explore gently.','If gambling/debt surfaces \u2014 ask suicide risk EXPLICITLY; gambling disorder carries high suicide risk.']
    },
    checkpoints:[
      { dom:'tasks', text:'Does NOT just prescribe a hypnotic: explores the CAUSE of the insomnia sensitively, recognising "I just need to sleep / don\u2019t want the why" as a signal of a concealed driver, and uncovers the gambling and debt' },
      { dom:'tasks', text:'Asks about GAMBLING directly and non-judgementally as part of a cause-of-insomnia/mood assessment, and recognises gambling disorder as a treatable addiction \u2014 not a moral failing or simple "stress"' },
      { dom:'tasks', text:'Conducts an EXPLICIT suicide-risk assessment (high risk in gambling disorder): thoughts of being better off dead, the "life insurance" ideation, plan, intent, means, preparatory acts, and protective factors \u2014 asking directly because he will not volunteer it' },
      { dom:'tasks', text:'Responds to risk appropriately: safety planning, involving crisis/mental-health services proportionate to risk, means safety, and not leaving a high-risk patient with only a prescription' },
      { dom:'tasks', text:'Signposts and treats the addiction and its consequences: gambling support (e.g. GamCare/National Gambling Treatment Service/NHS gambling clinics, self-exclusion/GamStop), debt advice (StepChange/Citizens Advice), the alcohol, and partner/relationship support \u2014 addressing shame and secrecy' },
      { dom:'rto',   text:'Creates a non-judgemental space that makes disclosure of a shameful, secret problem possible; responds to the gambling and debt without moralising, and to the suicidal thoughts with compassion and seriousness' },
      { dom:'rto',   text:'Handles the secrecy/partner dimension sensitively \u2014 supporting him toward help and disclosure at his pace while prioritising his immediate safety' },
      { dom:'gs',    text:'Safety-nets robustly and follows up: crisis routes (111/crisis team/A&E) if thoughts intensify or he feels he might act, a safety plan, signposting handed over concretely, early follow-up, and clear documentation of risk \u2014 a coordinated plan, not a sleeping-tablet script' },
    ],
    worked:[
      { lbl:'Don\u2019t just prescribe',  txt:'"I can help you sleep \u2014 but a racing head that won\u2019t switch off is usually racing ABOUT something, and if I just give you tablets and don\u2019t ask, I might be missing the thing that actually needs sorting. I\u2019m not going to pry, but can I ask gently what your head\u2019s racing about at 3am? No judgement here at all."' },
      { lbl:'Open the door',         txt:'"Sometimes when sleep goes like this it\u2019s money worries, relationship stuff, or things like drinking or gambling that have got out of hand \u2014 any of that in the mix? \u2026 (receiving it) Thank you for telling me. That took real guts. Gambling that\u2019s spiralled like this is an addiction, not a weakness or stupidity \u2014 it\u2019s designed to hook people, and it\u2019s treatable. You\u2019re not the first and you won\u2019t be the last to sit where you\u2019re sitting."' },
      { lbl:'Ask the vital question', txt:'"I need to ask you something directly, because people in your spot sometimes feel this way and I\u2019d never forgive myself for not asking. Has it got so heavy that you\u2019ve thought about not being here \u2014 or that your family might be better off with, say, the insurance? \u2026 Thank you for being honest. I\u2019m really glad you told me, and I\u2019m taking it seriously, because you matter \u2014 far more than any debt."' },
      { lbl:'Reframe the \u2018solution\u2019', txt:'"I want to gently take apart the insurance thought, because the debt has lied to you. Your partner and your baby need YOU, not a payout \u2014 there is no version of that where they\u2019re better off. Debt, even forty grand, is survivable and fixable. You are not. So let\u2019s keep you here and tackle the actual problem, which has real solutions."' },
      { lbl:'Concrete help',         txt:'"Here\u2019s what exists, and it works: free specialist gambling support \u2014 counselling, and tools to block the betting sites \u2014 and free debt advisers who deal with exactly this and can stop the spiral and talk to your lenders. It is NOT as hopeless as it feels at 3am. I\u2019ll set you up with both today, and we\u2019ll look at the drinking too, gently."' },
      { lbl:'Safety-net + follow-up', txt:'"Because of those thoughts, I want a proper safety plan with you and I\u2019m going to involve our mental-health team. If it ever feels like you might act \u2014 day or night \u2014 you call this number or go to A&E; promise me that. When you\u2019re ready, telling your partner can lift a huge weight, and I\u2019ll help you with how. I want to see you in a couple of days, not leave you alone with this. You came in for sleeping tablets; what matters far more is that you\u2019re still here next week \u2014 and you will be, because we start fixing this today."' },
    ],
    learning:'A request for sleeping tablets with a "racing head" and a pointed "I don\u2019t want to get into the why" is a flag to explore the CAUSE, not to prescribe a hypnotic. Here the engine is gambling disorder with ~£40k of concealed debt hidden from a pregnant partner \u2014 a treatable addiction, not "stress" or a moral failing. Critically, gambling disorder carries a HIGH suicide risk, so once it surfaces an EXPLICIT suicide-risk assessment is mandatory (thoughts of being better off dead, the "life insurance" ideation, plan, intent, means) \u2014 he will not volunteer it. Respond with safety planning, crisis-service involvement proportionate to risk, and concrete signposting: specialist gambling support and self-exclusion (GamCare/NGTS/NHS gambling clinics, GamStop), debt advice (StepChange/Citizens Advice), alcohol and partner support \u2014 all in a non-judgemental space that makes disclosure of a shameful secret possible, and that dismantles the catastrophic "they\u2019re better off without me" belief. A sleeping-tablet script alone would miss a life-threatening situation; the win is uncovering it, assessing risk, and coordinating help with early follow-up.',
    knowledge:{
      guideline:'NHS/PHE gambling-related harm · NICE depression/self-harm risk · gambling treatment (NGTS/GamCare/NHS clinics) · debt-advice signposting',
      points:[
        { h:'Look behind the insomnia', t:'Persistent "can\u2019t switch off" insomnia, especially with a reluctance to discuss causes, often masks a specific driver \u2014 financial crisis, relationship breakdown, alcohol, or gambling. Explore the cause; do not reflexively prescribe a hypnotic.' },
        { h:'Ask about gambling', t:'Gambling disorder is common, hidden and stigmatised. Ask directly and non-judgementally as part of mood/insomnia/substance assessment. It is a recognised addiction with effective treatment, not a moral failing; online gambling is engineered to be compulsive.' },
        { h:'High suicide risk \u2014 ask explicitly', t:'Gambling disorder carries a markedly elevated suicide risk, often linked to debt, shame and "escape" thinking (including the catastrophic belief that family are "better off with the insurance"). Once gambling/debt surfaces, conduct an explicit suicide-risk assessment (ideation, plan, intent, means, preparatory acts, protective factors). Asking does not increase risk.' },
        { h:'Respond to risk', t:'Safety-plan, restrict means, and involve crisis/mental-health services proportionate to risk. Do not discharge a high-risk patient with only a prescription. Dismantle the "they\u2019re better off without me" belief directly and compassionately.' },
        { h:'Signpost concrete help', t:'Gambling: National Gambling Treatment Service/GamCare, NHS gambling clinics, and self-exclusion tools (GamStop, bank gambling blocks). Debt: StepChange/Citizens Advice/National Debtline \u2014 debt is survivable and negotiable. Address co-occurring alcohol and relationship/partner support.' },
        { h:'Shame, secrecy & the partner', t:'Shame drives concealment (here from a pregnant partner). Provide a non-judgemental space, support disclosure at the patient\u2019s pace, and prioritise immediate safety over confession. Frame help-seeking as strength.' },
        { h:'Never do', t:'Never just prescribe a hypnotic and miss the cause; never accept "just work stress" without exploring; never fail to ask about gambling and explicit suicide risk; never moralise; never leave a high-risk patient with only a prescription.' },
        { h:'Safety-net & follow-up', t:'Crisis routes (111/crisis team/A&E) if thoughts intensify; safety plan; gambling and debt support handed over concretely; alcohol and partner support; early follow-up (days); documented risk assessment.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c73, c74, c75, c76);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'depression-firearms': {
      ceg: ['Mental health & addiction', 'Professional & ethical dilemmas'],
      stem: {
        name: 'Alan Foister', age: '54 years · male',
        pmh: ['Farmer; holds a shotgun/firearms certificate (firearms at home)', 'Low mood, anhedonia, early waking, 6 kg weight loss; drinking more', 'Failing farm; recent marital separation'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '⚠ Stoical; presents for "sleeping tablets". "Not the depression type." If asked: thoughts of using his shotgun.',
        reason: 'Video consultation — insomnia/irritability.'
      },
      timeMap: [
        { t:'0–2',  h:'Reframe, don\u2019t collude', d:'4am waking, weight loss, anhedonia = depression behind "insomnia". An illness, not weakness. Look at the whole picture.' },
        { t:'2–5',  h:'Explicit risk',        d:'Ask directly: better-off-dead thoughts, ideation, plan, intent, means \u2014 and firearm access at home. Asking doesn\u2019t increase risk.' },
        { t:'5–7',  h:'Lethal-means + duty',  d:'Secure/remove the shotguns (trusted person/dealer) as core safety planning. Be honest about the firearms-licensing duty \u2014 done WITH him.' },
        { t:'7–9',  h:'The real weight',       d:'Failing farm + marriage ending + lifetime of coping. Not failure \u2014 too much alone. Signpost farming charities and relationship support.' },
        { t:'9–12', h:'Treat + safety-net',    d:'Antidepressant ± therapy, ease the alcohol; crisis routes if thoughts intensify; early follow-up (days). A plan, not a hypnotic and goodbye.' }
      ],
      wordPics: {
        fail: 'Prescribes a hypnotic and misses the depression; never asks explicitly about suicide or firearm access; ignores lethal-means safety and the firearms duty; lets stigma keep him silent \u2014 a potentially fatal miss in a high-risk man.',
        pass: 'Recognises depression, assesses suicide risk and firearm access, addresses lethal-means safety, starts treatment, and safety-nets.',
        exc:  'Refuses to collude with "just insomnia" and reframes depression without shaming; conducts an explicit risk assessment including firearm access; plans lethal-means safety and handles the firearms-licensing duty honestly and WITH him; surfaces the farm/marriage drivers and signposts practical help; treats depression and alcohol; and safety-nets with crisis routes and early follow-up.'
      },
      avoid: [
        { dont:'"I\u2019ll give you something to help you sleep and we\u2019ll see how you get on."', instead:'"Waking at four, off your food, no interest in anything \u2014 that\u2019s often depression, not just bad sleep, and it\u2019s treatable. Can we look at the whole picture, not just the nights?"', why:'A hypnotic alone misses depression and a serious suicide risk in a high-risk man with firearm access.' },
        { dont:'"You\u2019re not having any dark thoughts though, are you?" (closed/leading)', instead:'"When things feel this heavy, have you had thoughts you\u2019d be better off not here? Have you thought about how? And you\u2019ve got the guns at home \u2014 we need to talk about that."', why:'A closed, leading question invites false reassurance; explicit, direct enquiry (including firearm access) is essential.' },
        { dont:'"Don\u2019t worry, what you tell me stays completely confidential whatever happens."', instead:'"If I\u2019m genuinely worried about your safety, I might have to tell the firearms licensing people \u2014 and I\u2019d always do that with you, openly. Your life matters more than the certificate."', why:'Promising absolute confidentiality is false; the firearms public-interest duty must be handled honestly.' }
      ]
    },

    'ptsd-veteran': {
      ceg: ['Mental health & addiction', 'Health disadvantage & vulnerabilities'],
      stem: {
        name: 'Craig Mullen', age: '39 years · male',
        pmh: ['Ex-Army (two tours); now security guard', 'Chronic back pain, insomnia, escalating anger (warning at work)', 'If explored: nightmares, flashbacks, hypervigilance, avoidance, heavy drinking; estranged from his children'],
        meds: ['OTC analgesia'],
        allergy: 'NKDA',
        recent: 'Dismissive of "head stuff"; "had enough of being passed around". Wants painkillers + sleep.',
        reason: 'Telephone — back pain, insomnia, temper.'
      },
      timeMap: [
        { t:'0–2',  h:'Meet him where he is', d:'No feelings-chat; be practical. But name that back + no-sleep + temper in someone who served often travel together with something underneath.' },
        { t:'2–5',  h:'Open the door lightly', d:'Soldier-to-civvy questions: nights it comes back, back to the wall, clocking exits. Name PTSD as a normal reaction, not brokenness.' },
        { t:'5–7',  h:'Drink, temper, kids',  d:'Drink to sleep/numb; the lid coming off. Gently: is keeping away from the kids about fear of his own anger? Self-protection, not bad-dad.' },
        { t:'7–10', h:'Right route (Op COURAGE)', d:'Refer to the NHS veterans\u2019 service + trauma therapy (TF-CBT/EMDR); alcohol support; sensible pain relief, NOT dependence-forming knock-out tablets.' },
        { t:'10–12',h:'Risk + safety-net',     d:'Ask suicide/harm-to-others directly; crisis routes if it darkens; named follow-up so he\u2019s not "passed around"; escalate if risk rises.' }
      ],
      wordPics: {
        fail: 'Treats only the back pain and insomnia \u2014 ideally with strong painkillers/sleeping tablets; misses the PTSD, the alcohol and the risk (self and around the children); forces or skips the emotional content and loses him; no Op COURAGE referral.',
        pass: 'Recognises PTSD behind the somatic picture, assesses risk, refers to Op COURAGE and trauma therapy, addresses alcohol, and prescribes sensibly.',
        exc:  'Engages at a trauma-informed pace that reframes help as strength; recognises PTSD and links the anger/drinking/estrangement; assesses suicide and harm-to-others risk sensitively; surfaces the children/anger self-protection; routes him to Op COURAGE + trauma therapy + alcohol support with continuity; and avoids dependence-forming prescribing while safety-netting.'
      },
      avoid: [
        { dont:'"Let\u2019s get your back pain and sleep sorted \u2014 I\u2019ll do some strong painkillers and sleeping tablets."', instead:'"I\u2019ll help the pain and sleep, but in someone who\u2019s served, the back, the nights and the temper usually travel together with something underneath \u2014 let\u2019s not ignore the engine. And I won\u2019t use knock-out tablets that\u2019d trap you."', why:'Treating only the somatic complaints (with dependence-forming drugs) misses PTSD and entrenches harm.' },
        { dont:'"You really need to open up about your trauma if you want to get better."', instead:'"I\u2019m not going to make you talk about anything you don\u2019t want to \u2014 can I just ask a couple of practical questions? Do the nights bring it back; do you sit with your back to the wall?"', why:'Forcing disclosure breaches trauma-informed care and makes a distrustful veteran disengage.' },
        { dont:'"Have you tried just spending more time with your kids?"', instead:'"Is keeping away from them partly about being scared of your own temper around them? That\u2019s you protecting them, not being a bad dad \u2014 and we can work on it."', why:'Naive advice ignores the trauma-driven self-protection and risk, and shames him.' }
      ]
    },

    'diazepam-request': {
      ceg: ['Prescribing & pharmacology', 'Mental health & addiction'],
      stem: {
        name: 'Donna Preadon', age: '46 years · female',
        pmh: ['Newly registered; records not yet arrived', 'Long-term diazepam use, dose escalating, withdrawal when low; buying extra online', 'Regular evening alcohol; longstanding anxiety'],
        meds: ['Diazepam (regular, source partly online)'],
        allergy: 'NKDA',
        recent: 'Requests "a few diazepam like my old GP gave me"; pre-emptively defensive. Unnamed current stressor.',
        reason: 'Telephone — diazepam request from a new patient.'
      },
      timeMap: [
        { t:'0–2',  h:'Defuse, don\u2019t refuse', d:'Neither snap them off nor just continue. Name the safer middle path; she\u2019s braced for a fight. No judgement.' },
        { t:'2–4',  h:'Name dependence kindly', d:'Needing more, rough without them, topping up online = dependence. Common, treatable, not a moral failing. She\u2019s not in trouble.' },
        { t:'4–6',  h:'Safety',               d:'Never stop abruptly (seizure risk); benzo + alcohol affects breathing. Won\u2019t leave her to the online supply \u2014 the riskiest option.' },
        { t:'6–9',  h:'Find the driver',       d:'The unnamed stressor \u2014 her child\u2019s diagnosis. Treat the anxiety properly (SSRI/CBT), not just numb it while the dose climbs.' },
        { t:'9–12', h:'Plan + alliance',       d:'Safe bridging now (no cold turkey); slow taper with support; obtain old records; alcohol support; book in this week; continuity. Withdrawal red flags → urgent.' }
      ],
      wordPics: {
        fail: 'Either prescribes on demand (entrenching escalating dependence, ignoring the alcohol) or refuses flatly (precipitating withdrawal and driving her back online); never names the dependence safely or finds the driver; labels/shames her.',
        pass: 'Recognises dependence, avoids both extremes, ensures safety (no abrupt stop, addresses alcohol), plans a taper and anxiety treatment, and arranges continuity.',
        exc:  'Takes the dependence fork explicitly \u2014 safe bridging not cold turkey, no unquestioning continuation; names dependence without judgement; addresses the benzo+alcohol risk; surfaces and treats the underlying driver (child\u2019s illness) with proper anxiety treatment; builds an alliance with continuity and old-records retrieval; and safety-nets withdrawal red flags.'
      },
      avoid: [
        { dont:'"I can\u2019t prescribe these \u2014 you\u2019ll have to manage without them, I\u2019m afraid."', instead:'"I\u2019m not going to snap them off you \u2014 stopping suddenly can cause fits, and it\u2019d push you to buy online, which is riskier. Let\u2019s bridge you safely and make a proper plan."', why:'A flat refusal precipitates dangerous withdrawal and drives illicit/online sourcing.' },
        { dont:'"Okay, I\u2019ll put a prescription through this once to tide you over."', instead:'"Before we just continue them, can I be honest \u2014 your body\u2019s become dependent, and I\u2019d be doing you a disservice not to plan a safer way through, with treatment that actually helps the anxiety."', why:'Unquestioning continuation entrenches an escalating, harmful dependence and ignores the alcohol and driver.' },
        { dont:'"You shouldn\u2019t have been buying these online \u2014 that\u2019s really not on."', instead:'"Topping up when scripts run short is a sign of dependence, which is common and treatable \u2014 you\u2019re not in trouble. Let\u2019s sort a safe supply so you never need to do that."', why:'Moralising about the online buying shames her into disengagement instead of enabling safe care.' }
      ]
    },

    'gambling-insomnia': {
      ceg: ['Mental health & addiction', 'Health disadvantage & vulnerabilities'],
      stem: {
        name: 'Ryan Doherty', age: '33 years · male',
        pmh: ['Insomnia/anxiety; requests sleeping tablets', 'If explored: spiralling online gambling, ~£40k secret debt, hidden from pregnant partner', 'If asked: thoughts family "better off with the life insurance"; drinking more'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '⚠ Frames it all as "work stress"; "I don\u2019t want to get into the why".',
        reason: 'Video consultation — insomnia, wants sleeping tablets.'
      },
      timeMap: [
        { t:'0–2',  h:'Don\u2019t just prescribe', d:'A head that won\u2019t switch off is racing ABOUT something. Gently ask what \u2014 no prying, no judgement \u2014 rather than hand over a hypnotic.' },
        { t:'2–4',  h:'Open the door',         d:'Money, relationships, drink, gambling? Surface the gambling + £40k debt. Name it as an addiction (engineered to hook), not weakness.' },
        { t:'4–6',  h:'Ask the vital question', d:'Gambling = high suicide risk. Ask explicitly: better-off-dead / "life insurance" thoughts, plan, intent, means. He won\u2019t volunteer it.' },
        { t:'6–8',  h:'Dismantle the \u2018solution\u2019', d:'The debt has lied to him \u2014 his partner and baby need HIM, not a payout. Debt is survivable; he isn\u2019t replaceable.' },
        { t:'8–12', h:'Concrete help + net',   d:'GamCare/NGTS + GamStop, StepChange/Citizens Advice, alcohol + partner support; safety plan + crisis team; early follow-up (days). Still here next week.' }
      ],
      wordPics: {
        fail: 'Prescribes sleeping tablets and accepts "work stress"; never uncovers the gambling or asks about suicide; misses a high-risk, potentially fatal situation behind the insomnia.',
        pass: 'Explores the cause, uncovers the gambling and debt, asks about suicide risk, signposts gambling and debt support, and safety-nets.',
        exc:  'Refuses to reflexively prescribe and sensitively uncovers the gambling and concealed debt; names it as a treatable addiction; conducts an explicit suicide-risk assessment given the high risk; dismantles the "better off with the insurance" belief; hands over concrete gambling/debt/alcohol/partner support; and builds a safety plan with crisis involvement and early follow-up.'
      },
      avoid: [
        { dont:'"Sounds like work stress \u2014 I\u2019ll give you something to help you sleep for a couple of weeks."', instead:'"A head that won\u2019t switch off is usually racing about something \u2014 can I gently ask what\u2019s on your mind at 3am? Money, relationships, drink, gambling?"', why:'Prescribing a hypnotic for "stress" misses a concealed, potentially life-threatening gambling crisis.' },
        { dont:'"Well, you\u2019ll just have to stop gambling and get the debt under control."', instead:'"Gambling that\u2019s spiralled like this is an addiction, not weakness \u2014 it\u2019s engineered to hook you, and there\u2019s real, free help that works, plus debt advisers who handle exactly this."', why:'Moralising "just stop" shames him and ignores that this is a treatable addiction needing specialist support.' },
        { dont:'"At least the life insurance shows you\u2019re thinking about your family." (missing the risk)', instead:'"Has it got so heavy you\u2019ve thought your family might be better off with the insurance? \u2026 Your partner and baby need YOU, not a payout \u2014 debt is survivable, you\u2019re not replaceable. Let\u2019s keep you safe."', why:'Failing to recognise the insurance ideation as acute suicide risk could be fatal; it must be named and assessed.' }
      ]
    }
  });

})();
