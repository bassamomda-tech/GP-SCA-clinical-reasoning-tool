/* ============================================================
   Reasoning GP — Case Library batch 30: "Professional & ethical dilemmas"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   No "right answer" — the marks are in the reasoning said out loud.
   No NG12 cancer link applies (correctly omitted).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases29.js.
   ============================================================ */

(function(){

  /* ============ 113. VIDEO — The sick note the assessment doesn't support ============ */
  const c113 = {
    id:'sicknote-unsupported', title:'"I just need you to sign me off for three months"', type:'video', duration:12,
    meta:{ age:44, sex:'M', setting:'Video consultation \u2014 a fit-note request that doesn\u2019t fit.', system:'Ethics / Fit notes & honest assessment' },
    brief:'Mr Carl Dobbs, 44, warehouse operative. Requests a fit note signing him off "for three months" for a back strain that, on assessment, is mild, mechanical and improving \u2014 he is moving freely on camera, no red flags. He is insistent and a little aggressive. If explored gently: a grievance/disciplinary process at work he is avoiding, and money worries; the back is partly real but the agenda is escaping a workplace conflict. Wants a long certificate, no questions.',
    script:{
      opening:'"Right, doc, I just need you to sign me off for three months with my back. It\u2019s killing me. Just write it down and I\u2019ll be on my way \u2014 I don\u2019t need an examination or twenty questions, I know my own body. Three months, that\u2019s what I need. My mate\u2019s GP does it no problem. Can you just do it?"',
      facts:[
        { topic:'The clinical reality', text:'On assessment: a mild, mechanical, improving back strain \u2014 moving freely, no neurological or red-flag features. There is no clinical basis for a three-month total sign-off; the evidence would support, at most, a short period and/or a phased/adjusted return, not a blanket long certificate.' },
        { topic:'What a fit note is',     text:'A fit note (Statement of Fitness for Work) is the GP\u2019s honest clinical OPINION about the effect of a condition on the patient\u2019s ability to work \u2014 it is not a benefit the patient dictates, and "may be fit with adjustments" (phased return, amended duties) is often more appropriate than "not fit". The GP must be truthful; signing a certificate the assessment doesn\u2019t support is dishonest and a probity issue.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the real driver isn\u2019t the back: there is a workplace grievance/disciplinary process he wants to avoid, plus money worries. He\u2019s using a long sick note as an escape route. There may also be genuine STRESS/low mood from the conflict that IS legitimate \u2014 the skill is to separate the (unsupported) three-month back certificate from the real, addressable issue (work stress, the dispute, signposting).' },
        { topic:'The relationship risk', text:'Refusing a demand from an insistent, slightly aggressive patient risks confrontation; the GP must hold the probity line WITHOUT being defensive or dismissive, explore what\u2019s really going on, and offer legitimate help \u2014 keeping the therapeutic relationship intact.' },
        { topic:'What he needs',       text:'Officially: a three-month sign-off, no questions. What he needs: an honest fit note reflecting the actual assessment (short and/or "may be fit with adjustments"/phased return), the real issue surfaced (work conflict, stress, money), legitimate support and signposting, and the probity line held kindly \u2014 not a dishonest certificate.' },
      ],
      ice:{
        ideas:'He\u2019s entitled to dictate a three-month sign-off for his back, and the GP should just sign it.',
        concerns:'HIDDEN AGENDA \u2014 a workplace grievance/disciplinary he\u2019s avoiding and money worries; the back is partly real but the long note is an escape route; there may be genuine work-related stress/low mood.',
        expectations:'A three-month total sign-off, no questions. What he actually needs: an honest fit note matching the assessment (short / phased return), the real work-conflict and stress surfaced and supported, and the probity line held kindly.'
      },
      cues:['"Just sign me off for three months, no examination" \u2014 dictating a certificate the assessment can\u2019t support; probity line.','Moving freely, mild improving strain \u2014 clinical evidence doesn\u2019t match the request.','Insistent/aggressive about a long note + money worries \u2014 a hidden work conflict driving it; surface it.']
    },
    checkpoints:[
      { dom:'tasks', text:'Understands the fit note is the GP\u2019s HONEST clinical opinion, not a patient-dictated entitlement: declines to sign a three-month total sign-off that the assessment does not support, explaining why truthfully \u2014 a probity/honesty issue' },
      { dom:'tasks', text:'Offers the clinically-appropriate alternative: a SHORT certificate if any and/or "may be fit for work with adjustments" (phased return, amended duties, avoiding heavy lifting) reflecting a mild, improving, mechanical strain with no red flags' },
      { dom:'tasks', text:'Assesses the back properly (briefly) to confirm the absence of red flags and the mild/improving picture, rather than refusing blindly \u2014 grounding the decision in assessment' },
      { dom:'tasks', text:'Surfaces and addresses the REAL issue: explores the work situation (the grievance/disciplinary, money worries, stress/low mood) non-judgementally, and recognises that genuine work-related stress, if present, is a legitimate reason for support \u2014 separating it from the unsupported back certificate' },
      { dom:'tasks', text:'Offers LEGITIMATE help and signposting: occupational health, the phased-return/adjustments route, support for stress/mood (and a proportionate certificate if a genuine condition warrants it), workplace/union/Citizens Advice signposting for the dispute' },
      { dom:'rto',   text:'Holds the probity line WITHOUT being defensive, dismissive or confrontational; de-escalates the insistence/aggression, validates the underlying difficulty, and keeps the therapeutic relationship intact' },
      { dom:'rto',   text:'Explores rather than simply refuses \u2014 "help me understand what\u2019s really going on" \u2014 so the patient feels heard even when the specific request is declined' },
      { dom:'gs',    text:'Safety-nets and follows up: a plan that addresses the real need (OH, phased return, stress support, signposting), review of the back/mood, documentation of the assessment and the honest rationale, and an open door \u2014 declining the dishonest request while genuinely helping' },
    ],
    worked:[
      { lbl:'Hear it, assess it',   txt:'"I can hear your back\u2019s really getting you down, and I do want to help \u2014 so let me quickly check how it\u2019s moving, because what I put on a fit note has to be honest and based on what I actually find. \u2026 The good news is there\u2019s nothing sinister, and it\u2019s a mild strain that\u2019s settling. That\u2019s genuinely reassuring."' },
      { lbl:'Explain what a note is', txt:'"Here\u2019s the thing about a fit note: it\u2019s my honest medical opinion about how a condition affects your work \u2014 it\u2019s not something I can just write to order, and I\u2019d be lying if I signed three months off for a back that\u2019s already improving. I\u2019m not able to do that, and I think you\u2019d want a doctor who\u2019s straight with you rather than one who\u2019ll put their name to anything."' },
      { lbl:'Offer the real option', txt:'"What I CAN do, and what actually fits your back, is a shorter note \u2014 or better, one that says you may be fit for work with some adjustments: lighter duties, no heavy lifting, a phased return. That protects your back AND keeps you in work, which is usually better for recovery than three months at home."' },
      { lbl:'Find what\u2019s really going on', txt:'"Can I gently ask \u2014 three months is a long time to want off for a back that\u2019s settling. Is something else going on at work? \u2026 A grievance, and money on your mind. Thank you for telling me \u2014 that\u2019s actually the thing I can help with properly, and it makes much more sense of today."' },
      { lbl:'Legitimate help',      txt:'"If the situation at work is grinding you down to the point it\u2019s affecting your health \u2014 your sleep, your mood \u2014 that\u2019s real and I\u2019d take it seriously and support it honestly. Let\u2019s get occupational health involved, look at whether stress is part of this, and I can point you to people who help with workplace disputes and money worries. That\u2019s a far better answer than a sick note that wouldn\u2019t hold up anyway."' },
      { lbl:'Hold the line, kindly', txt:'"So I\u2019m not going to sign the three months \u2014 and I hope you can see it\u2019s because I\u2019m being straight with you, not because I don\u2019t care. What I AM going to do is sort a fit-for-adjustments note, take the work stress seriously, and get you the right support. Come back and let\u2019s tackle the actual problem. My door\u2019s open."' },
    ],
    learning:'A fit note is the GP\u2019s honest clinical OPINION about how a condition affects work \u2014 not a patient-dictated entitlement \u2014 so signing a three-month total sign-off that the assessment does not support is dishonest and a probity issue, and must be declined. But "declining" is not the consultation: assess the back (confirming the mild, improving, red-flag-free picture grounds the decision), offer the clinically-appropriate alternative ("may be fit with adjustments"/phased return / a short certificate), and \u2014 crucially \u2014 surface the REAL driver, the hidden agenda of a workplace grievance/disciplinary, money worries and possible genuine work-related stress/low mood, which IS a legitimate, addressable need separate from the unsupported certificate. Offer legitimate help (occupational health, phased return, stress/mood support, union/Citizens Advice signposting). The examinable skill is holding the probity line WITHOUT being defensive, dismissive or confrontational \u2014 de-escalating, exploring rather than just refusing, and keeping the therapeutic relationship intact while being honest.',
    knowledge:{
      guideline:'DWP/DfWP Statement of Fitness for Work (fit note) guidance · GMC Good Medical Practice (probity/honesty)',
      points:[
        { h:'What a fit note is', t:'The Statement of Fitness for Work records the doctor\u2019s honest assessment of whether a health condition affects the patient\u2019s fitness for work, with two options: "not fit for work" or "may be fit for work" with comments/adjustments (phased return, amended duties, altered hours, workplace adaptations). It is a clinical opinion, not a benefit the patient specifies.' },
        { h:'Probity \u2014 be truthful', t:'GMC Good Medical Practice requires honesty in documents (certificates, reports). You must not sign a fit note that is untrue or that the assessment does not support. Signing to order, to placate, or to avoid confrontation is a serious probity failure.' },
        { h:'Match the certificate to the assessment', t:'Base duration and wording on the clinical findings. A mild, improving, red-flag-free mechanical strain supports, at most, a short certificate and usually a "may be fit with adjustments"/phased return \u2014 keeping the patient in work where possible, which generally aids recovery.' },
        { h:'Find the hidden agenda', t:'Disproportionate sign-off requests often mask non-medical drivers \u2014 workplace conflict/disciplinary, job dissatisfaction, financial pressure \u2014 sometimes alongside genuine stress/low mood. Explore non-judgementally; separate the unsupported request from the real, addressable need.' },
        { h:'Offer legitimate help', t:'Occupational health referral, phased-return/adjustments advice, assessment and support for genuine work-related stress/mental health (with a proportionate certificate if warranted), and signposting (employer HR, union, Citizens Advice, debt advice) for the dispute/finances. Help with the real problem rather than the dishonest certificate.' },
        { h:'Hold the line relationally', t:'Decline without being defensive, dismissive or confrontational; de-escalate insistence/aggression; explore ("help me understand what\u2019s really going on") so the patient feels heard; preserve the therapeutic relationship while being honest.' },
        { h:'Never do', t:'Never sign a certificate the assessment doesn\u2019t support; never refuse blindly without assessing or exploring; never ignore genuine underlying stress/mental-health need; never let aggression coerce a dishonest note; never make it a confrontation rather than a redirection to real help.' },
        { h:'Safety-net & follow-up', t:'Appropriate (short/adjustments) fit note if any; OH and phased-return plan; stress/mood assessment and support; signposting for the dispute/finances; documentation of assessment and honest rationale; review and an open door.' }
      ]
    }
  };

  /* ============ 114. TELEPHONE — "Don't put it in my notes" ============ */
  const c114 = {
    id:'dont-record-this', title:'"You can\u2019t write this down \u2014 promise me it stays off my record"', type:'telephone', duration:12,
    meta:{ age:34, sex:'M', setting:'Telephone \u2014 a disclosure with a recording condition.', system:'Ethics / Records, confidentiality & its limits' },
    brief:'Mr Aiden Frost, 34, airline pilot. Rings, agitated, wanting to discuss low mood and recent heavy drinking, but only if the GP "promises it stays off my record" \u2014 he is terrified for his career (medical licensing). As it unfolds: significant depressive symptoms, escalating alcohol, and \u2014 if explored \u2014 fleeting thoughts he\u2019s "better off not here". He flies commercial aircraft. He wants help but is trying to dictate that nothing is documented and nothing reaches his aviation medical examiner.',
    script:{
      opening:'"Before I say anything \u2014 I need you to promise me this goes no further and you won\u2019t write it in my notes. If this gets back to my licensing people my career\u2019s finished. Can you promise me that? Because if you can\u2019t, I\u2019ll just hang up and deal with it myself. I need help, but I can\u2019t have it on any record. Promise me first."',
      facts:[
        { topic:'The records principle',  text:'The GP CANNOT promise to keep a clinically-relevant disclosure entirely out of the record \u2014 good, contemporaneous, accurate records are a professional duty (and protect the patient); the record is confidential but it must exist. The skill is to explain confidentiality honestly (it stays within the team and is not shared without consent EXCEPT where there is a risk to the patient or others) rather than agreeing to an impossible promise.' },
        { topic:'The safety/public-risk dimension', text:'CRITICAL \u2014 he is a commercial PILOT with depression, escalating alcohol, and possible suicidal thoughts. There is a genuine PUBLIC-SAFETY duty: conditions affecting fitness to fly must be managed honestly, and there are parallels to the DVLA duty \u2014 if he is unfit to fly and continues, and cannot be persuaded to stop and self-report to his aeromedical examiner/regulator, the GMC permits breaking confidentiality to protect the public. This must be navigated sensitively.' },
        { topic:'The risk assessment',  text:'His mood and the "better off not here" thoughts require an explicit suicide-risk assessment \u2014 and that, plus the alcohol, bears directly on both his health and his fitness to fly.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 beneath the "promise me" ultimatum is terror of losing the career that is his entire identity, and shame; he genuinely wants help but believes the only way is secrecy. The skill is to engage and retain him (so he gets treatment) while being honest that you cannot offer the impossible promise \u2014 framing honesty and proper management (occupational/aeromedical pathways often support treated, recovered pilots back to flying) as the route that actually protects his career AND others, rather than secrecy that risks both.' },
        { topic:'What he needs',       text:'Officially: a promise of total secrecy. What he needs: an honest explanation of confidentiality and its limits (record kept; not shared without consent except for serious risk), an explicit risk assessment, treatment for depression/alcohol, sensitive handling of the fitness-to-fly/public-safety duty (encourage self-report; disclosure as a last resort if unfit and continuing), and to be retained in care rather than driven away.' },
      ],
      ice:{
        ideas:'If the GP just promises total secrecy and writes nothing down, he can get help without risking his career.',
        concerns:'HIDDEN AGENDA \u2014 terror of losing the career that is his identity, and shame; he believes secrecy is the only way to get help; underneath, real depression, escalating alcohol and possible suicidal thoughts.',
        expectations:'A promise it stays off the record and away from licensing. What he actually needs: honest confidentiality-with-limits, a risk assessment, treatment, sensitive handling of the fitness-to-fly duty, and to be kept in care.'
      },
      cues:['"Promise it stays off my record or I hang up" \u2014 an impossible promise; explain confidentiality + its limits honestly, don\u2019t agree.','Commercial pilot + depression + escalating alcohol + "better off not here" \u2014 public-safety/fitness-to-fly duty + suicide risk.','Career-terror and shame driving the secrecy demand \u2014 engage and retain him; frame honesty as protecting his career too.']
    },
    checkpoints:[
      { dom:'tasks', text:'Does NOT promise to keep a clinically-relevant disclosure off the record or guarantee total secrecy: explains honestly that accurate records are a professional duty and that confidentiality means information stays within the care team and is not shared without consent EXCEPT where there is a serious risk to the patient or others' },
      { dom:'tasks', text:'Recognises the PUBLIC-SAFETY / fitness-to-fly dimension: a commercial pilot with depression, escalating alcohol and possible suicidal thoughts may be unfit to fly; there is a duty (paralleling DVLA) to manage this honestly \u2014 encourage self-reporting to his aeromedical examiner/regulator, and know that disclosure to protect the public is permissible as a last resort if he is unfit and continues to fly against advice' },
      { dom:'tasks', text:'Performs an explicit SUICIDE-RISK assessment (the "better off not here" thoughts \u2014 plan, intent, means, protective factors) and assesses the depression and alcohol, recognising these bear on both his health and his fitness to fly' },
      { dom:'tasks', text:'Offers TREATMENT and a constructive pathway: management of depression (therapy \u00b1 medication) and alcohol, occupational/aeromedical support \u2014 framing honest engagement and proper treatment as the route that protects BOTH his career (treated/recovered pilots are often supported back) and public safety' },
      { dom:'tasks', text:'Navigates the regulatory/confidentiality issue proportionately: tries to persuade him to self-report and stop flying if unfit, involves him in any necessary disclosure, and does not breach confidentiality beyond what is necessary \u2014 nor collude with concealment that endangers the public' },
      { dom:'rto',   text:'Engages and RETAINS the frightened patient: validates the career terror and shame, and is honest about the impossible promise WITHOUT driving him away \u2014 so he stays in care and gets help' },
      { dom:'rto',   text:'Frames honesty and proper management as protective rather than punitive, reducing the sense that secrecy is his only option' },
      { dom:'gs',    text:'Safety-nets and follows up: crisis routes if suicidal thoughts escalate (urgent/111/A&E), a treatment and review plan, the self-report/aeromedical pathway, clear (honest) documentation, and continued engagement \u2014 balancing the patient\u2019s welfare, confidentiality and public safety' },
    ],
    worked:[
      { lbl:'Honest about the promise', txt:'"I really want to help you, and I\u2019m glad you rang \u2014 so let me be straight with you first, because trust matters here: I can\u2019t promise to keep something medical entirely out of your record or guarantee total secrecy. Good records are part of looking after you safely. What I CAN promise is that what you tell me is confidential \u2014 it stays within the team and isn\u2019t shared with anyone, including your licensing people, without your consent, unless there were a serious risk to you or others."' },
      { lbl:'Don\u2019t lose him',       txt:'"Please don\u2019t hang up \u2014 I know that\u2019s not what you hoped to hear, and I can hear how terrified you are of losing the career you\u2019ve built. That fear is completely understandable. Let\u2019s work this out together, because there genuinely is a way through that helps you without you having to hide."' },
      { lbl:'Assess the risk',      txt:'"Can I ask some important things? You mentioned feeling low and drinking more \u2014 have you had thoughts that you\u2019d be better off not here? \u2026 Any thoughts of acting on that, any plan? \u2026 Thank you for being honest. That matters for your safety, and I\u2019m glad you\u2019re telling me rather than carrying it alone."' },
      { lbl:'The flying duty, sensitively', txt:'"Now the difficult part, and I\u2019ll be honest because you deserve it: with low mood, drinking and those thoughts, there\u2019s a real question about being safe to fly right now \u2014 for you and for your passengers. The right path is for YOU to tell your aviation medical examiner and step back while you get well. I\u2019d much rather support you to do that than have it happen any other way. If someone were unfit and kept flying against advice, a doctor can have a duty to act to protect the public \u2014 but that\u2019s the last resort, and I want us to never get near it."' },
      { lbl:'Reframe honesty as protective', txt:'"Here\u2019s what I want you to hear: hiding this is the thing most likely to cost you everything \u2014 your health, your safety, even your licence if it came out. Whereas getting properly treated, with depression and alcohol, and going through the proper channels \u2014 a lot of pilots do exactly that and return to flying once they\u2019re well. Honesty is the route that actually protects your career, not the threat to it."' },
      { lbl:'Plan + safety-net',    txt:'"So let\u2019s get you treatment \u2014 for the mood and the drinking \u2014 and support you to self-report and step back safely. If those dark thoughts get stronger, here are the urgent numbers and the crisis line, and that\u2019s a 999/A&E matter if you ever feel unsafe. I\u2019ll document this honestly and confidentially, and I\u2019ll stay alongside you through it. You came asking me to keep a secret; what I\u2019m offering instead is a way to get well and keep your future."' },
    ],
    learning:'A patient demanding "promise it stays off my record" cannot be given that promise \u2014 accurate, contemporaneous records are a professional duty, and the honest answer is confidentiality WITH its limits: information stays within the care team and is not shared without consent EXCEPT where there is a serious risk to the patient or others. Here the stakes are sharpened by public safety: a commercial pilot with depression, escalating alcohol and possible suicidal thoughts may be unfit to fly, creating a duty (paralleling DVLA) to manage honestly \u2014 encourage self-reporting to his aeromedical examiner, and know that disclosure to protect the public is permissible as a last resort if he is unfit and continues to fly against advice. Perform an explicit suicide-risk assessment, treat the depression and alcohol, and navigate the regulatory issue proportionately (persuade, involve him, disclose only what is necessary). The examinable hidden agenda is career-terror and shame driving the secrecy demand; the skill is to ENGAGE and RETAIN him \u2014 honest about the impossible promise without driving him away \u2014 and to reframe honesty and proper treatment as the route that protects both his career and the public, rather than secrecy that endangers both.',
    knowledge:{
      guideline:'GMC confidentiality (incl. disclosure to protect others) · GMC record-keeping · CAA/aeromedical fitness-to-fly · NICE depression/self-harm',
      points:[
        { h:'Records are a duty', t:'Clinically-relevant information must be recorded accurately and contemporaneously \u2014 records protect patient safety and continuity. You cannot agree to omit material clinical information or keep a relevant disclosure entirely off the record. Be honest that the record will exist (and is confidential), rather than making an impossible promise.' },
        { h:'Confidentiality and its limits', t:'Information is confidential within the care team and not disclosed without consent \u2014 EXCEPT where required by law or justified in the public interest (serious risk to the patient or others). Explain this honestly up front; do not offer absolute secrecy.' },
        { h:'Fitness to fly / public safety', t:'Like driving (DVLA), safety-critical occupations carry a duty. A pilot with conditions affecting fitness to fly (depression, alcohol misuse, suicidality, sedating treatment) should be supported to self-report to their aeromedical examiner and to stop flying while unwell. If a patient is unfit and continues against advice and cannot be persuaded to stop/disclose, the GMC permits disclosure to the relevant authority to protect the public \u2014 a last resort, after attempting persuasion and informing the patient.' },
        { h:'Assess risk and treat', t:'Conduct an explicit suicide-risk assessment (ideation, plan, intent, means, protective factors) and assess depression and alcohol. Offer evidence-based treatment (psychological therapy \u00b1 medication; alcohol support). These bear on both health and fitness to fly.' },
        { h:'Engage and retain', t:'Career-terror and shame drive secrecy demands and the threat to disengage. Be honest about the impossible promise WITHOUT driving the patient away; validate the fear; keep them in care. Disengagement is the worst outcome for patient and public alike.' },
        { h:'Reframe honesty as protective', t:'Frame honest engagement, treatment and proper (self-)reporting as the route that protects the patient\u2019s career AND others \u2014 many safety-critical professionals return to work once treated \u2014 rather than secrecy, which risks health, safety and the very career they fear losing.' },
        { h:'Never do', t:'Never promise total secrecy or to omit relevant clinical information; never collude with concealment that endangers the public; never breach confidentiality beyond what is necessary or without attempting persuasion first; never skip the suicide-risk assessment; never let the patient disengage without trying to retain them in care.' },
        { h:'Safety-net & follow-up', t:'Crisis routes if suicidality escalates (111/crisis team/A&E/999); treatment and review plan for depression and alcohol; support to self-report and step back from flying; honest, confidential documentation; continued engagement balancing welfare, confidentiality and public safety.' }
      ]
    }
  };

  /* ============ 115. TELEPHONE — Covert medication in food ============ */
  const c115 = {
    id:'covert-medication', title:'"I\u2019ve been crushing Mum\u2019s tablets into her tea \u2014 is that okay?"', type:'telephone', duration:12,
    meta:{ age:58, sex:'F', setting:'Telephone \u2014 daughter disclosing covert medication of her mother.', system:'Ethics / Covert medication, capacity & best interests' },
    brief:'Caller: Mrs Janet Pugh, 58, daughter and main carer of her mother (84, advanced dementia) who lives with her. She rings, exhausted, admitting she has been crushing her mother\u2019s tablets (incl. an antipsychotic and BP meds) into her tea because her mother refuses them. She wants reassurance "that\u2019s fine". The mother lacks capacity for medication decisions. No formal best-interests process or care-home/MDT involvement has occurred. The daughter is well-meaning and overwhelmed.',
    script:{
      opening:'"Doctor, I need to be honest about something and I hope I\u2019m not in trouble. Mum won\u2019t take her tablets \u2014 she clamps her mouth shut, throws them \u2014 so I\u2019ve been crushing them up and putting them in her tea so she gets them. She needs them, don\u2019t she? I\u2019m just doing what\u2019s best for her. That\u2019s alright, isn\u2019t it? I can\u2019t keep fighting her three times a day."',
      facts:[
        { topic:'The legal framework', text:'Covert administration (disguising medication in food/drink) is sometimes lawful \u2014 but ONLY for a patient who LACKS CAPACITY for the specific decision, in their BEST INTERESTS, with a proper MULTIDISCIPLINARY best-interests process: capacity assessment (Mental Capacity Act), confirmation there is no valid advance refusal/LPA objection, involvement of family/carers, the prescriber and PHARMACIST (crushing can alter how a drug works and may be unlicensed/unsafe), and a documented covert-medication management plan that is reviewed. It is NOT a decision a carer makes alone.' },
        { topic:'Why "just crushing" isn\u2019t okay yet', text:'Done informally by a carer without this process, covert medication is problematic: it may breach the patient\u2019s rights, some drugs are dangerous or ineffective when crushed (modified-release, certain antipsychotics), and it bypasses safeguards. The daughter\u2019s instinct (Mum needs her meds) is understandable, but the PROCESS must be put in place \u2014 not simply endorsed over the phone.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 beneath "is that okay?" is an EXHAUSTED, possibly burning-out carer at the end of her tether ("I can\u2019t keep fighting her three times a day"), feeling guilty and alone, and quietly desperate for support. The covert-medication question is partly a cry for help with an unsustainable caring situation. Addressing carer strain and support is as important as the legal/clinical process.' },
        { topic:'Reviewing the medication itself', text:'Also worth questioning: does the mother still NEED all these medicines? In advanced dementia, deprescribing (especially of an antipsychotic \u2014 with its mortality risk \u2014 and some preventive BP meds) may be appropriate, reducing the need for any covert administration. The refusal is also a prompt to review necessity.' },
        { topic:'What\u2019s needed',      text:'Officially: reassurance it\u2019s fine. What\u2019s needed: NOT to simply endorse or condemn, but to explain covert medication can be lawful only via a proper capacity/best-interests/MDT process (including pharmacist advice on crushing and a documented plan), to review whether the medicines are still needed (deprescribing), and \u2014 crucially \u2014 to recognise and support the exhausted carer.' },
      ],
      ice:{
        ideas:'She\u2019s doing what\u2019s best for Mum by crushing the tablets into her tea, and the GP will reassure her it\u2019s fine.',
        concerns:'HIDDEN AGENDA \u2014 she\u2019s exhausted and at the end of her tether ("can\u2019t keep fighting her three times a day"), guilty and alone; the question is partly a cry for help with an unsustainable caring situation; fear of being "in trouble".',
        expectations:'Reassurance that crushing the tablets is fine. What she actually needs: an explanation of the proper covert-medication process, a review of whether the drugs are still needed, and \u2014 above all \u2014 support for her carer strain.'
      },
      cues:['"Crushing Mum\u2019s tablets into her tea \u2014 that\u2019s okay isn\u2019t it?" \u2014 covert medication; lawful only via a capacity/best-interests/MDT process, not a carer\u2019s solo call.','Antipsychotic + BP meds crushed \u2014 some drugs are unsafe/ineffective crushed; pharmacist input needed; review necessity/deprescribing.','"I can\u2019t keep fighting her three times a day" \u2014 an exhausted, burning-out carer; support her.']
    },
    checkpoints:[
      { dom:'tasks', text:'Does NOT simply endorse (or harshly condemn) the covert administration: explains it can be lawful ONLY for a patient lacking capacity for the decision, in their best interests, via a proper MULTIDISCIPLINARY best-interests process \u2014 not a decision a carer makes alone' },
      { dom:'tasks', text:'Sets out the proper PROCESS: a Mental Capacity Act capacity assessment for the specific decision, checking for any valid advance decision/LPA, involving family/carers, the prescriber and crucially the PHARMACIST (whether each drug can be safely/effectively crushed; licensing), and a DOCUMENTED, reviewed covert-medication management plan' },
      { dom:'tasks', text:'Flags the safety issue with crushing specific drugs (modified-release, certain antipsychotics) \u2014 some are dangerous or ineffective when crushed \u2014 hence the need for pharmacist advice before continuing' },
      { dom:'tasks', text:'Reviews whether the medicines are still NEEDED: prompts deprescribing consideration in advanced dementia (e.g. the antipsychotic with its mortality risk, some preventive BP meds), recognising the refusal as a trigger to review necessity \u2014 which may reduce/remove the need for covert administration' },
      { dom:'tasks', text:'Recognises and addresses CARER STRAIN: explores the daughter\u2019s exhaustion/burnout and guilt, offers a carer\u2019s assessment and support (respite, social services, community/dementia services), and treats the unsustainable caring situation as a key issue' },
      { dom:'rto',   text:'Responds non-judgementally to a well-meaning, frightened carer ("you\u2019re not in trouble") while being honest that the practice must change to the proper process; validates her exhaustion and good intentions' },
      { dom:'rto',   text:'Frames the process and support as helping her and protecting her mother, not as criticism, so she stays engaged and supported' },
      { dom:'gs',    text:'Safety-nets and follows up: arranges the capacity/best-interests/MDT process and pharmacist review, a medication/deprescribing review, carer support/respite, and documentation \u2014 turning an informal, risky practice into a safe, lawful, supported plan' },
    ],
    worked:[
      { lbl:'Reassure, don\u2019t condemn', txt:'"First \u2014 you\u2019re not in trouble, and I can hear you\u2019re doing this out of love and exhaustion, trying to make sure Mum gets what she needs. Thank you for being honest with me, because that lets me help you do this properly and safely. Let\u2019s sort it together."' },
      { lbl:'The honest position',   txt:'"Here\u2019s the thing I have to be straight about: giving medicine hidden in food or drink \u2014 covert medication \u2014 CAN be the right thing for someone who can\u2019t make the decision themselves, like Mum with her dementia. But it isn\u2019t something a carer can decide alone; it needs a proper process so it\u2019s safe and lawful and in her best interests. So we don\u2019t stop caring for her \u2014 we put the right framework around what you\u2019re doing."' },
      { lbl:'The process',           txt:'"What that means in practice: we formally assess that Mum can\u2019t make this decision, agree it\u2019s in her best interests with you and the team, and \u2014 really importantly \u2014 check with a pharmacist, because some tablets are dangerous or just don\u2019t work if you crush them. Then we write a proper plan and review it. I\u2019ll set all that up; you won\u2019t have to navigate it alone."' },
      { lbl:'Do these meds still help?', txt:'"And it\u2019s worth asking a bigger question: does Mum still NEED all of these? In advanced dementia, some tablets \u2014 the one for agitation especially, and some of the blood-pressure ones \u2014 may be doing more harm than good. If we can safely stop some, that\u2019s fewer battles for you and safer for her. The fact she\u2019s refusing is a good prompt to review the whole list."' },
      { lbl:'See the carer',         txt:'"Can I ask how YOU are doing? \u2018I can\u2019t keep fighting her three times a day\u2019 \u2014 that sounds like you\u2019re running on empty. Caring for someone with advanced dementia, alone, around the clock, is one of the hardest things there is. You matter here too. Let\u2019s get you a carer\u2019s assessment and look at respite and support \u2014 you can\u2019t pour from an empty cup."' },
      { lbl:'Plan + safety-net',     txt:'"So: I\u2019ll arrange the capacity and best-interests process and a pharmacist review of what can be given and how, look at simplifying Mum\u2019s medicines, and get you proper carer support and a break. Please don\u2019t change anything dangerous on your own meanwhile \u2014 keep her safe and ring us if she\u2019s unwell. You came worried you\u2019d done wrong; what\u2019s actually happened is you\u2019ve let us put the right help in place \u2014 for Mum and for you."' },
    ],
    learning:'Covert administration (disguising medication in food/drink) can be LAWFUL \u2014 but only for a patient who lacks capacity for the specific decision, in their best interests, via a proper MULTIDISCIPLINARY best-interests process under the Mental Capacity Act: capacity assessment, checking for any valid advance decision/LPA objection, involving family/carers, the prescriber and crucially the PHARMACIST (whether each drug can be safely/effectively crushed \u2014 modified-release and certain antipsychotics may be dangerous or ineffective crushed), and a documented, reviewed covert-medication plan. It is NOT a decision a carer makes alone, so the GP must neither simply endorse nor harshly condemn the daughter\u2019s informal crushing, but put the proper process in place. The refusal is also a prompt to REVIEW necessity \u2014 deprescribing in advanced dementia (the antipsychotic\u2019s mortality risk, some preventive BP meds) may reduce the need for covert administration altogether. The examinable hidden agenda is an exhausted, guilt-ridden, burning-out carer for whom "is that okay?" is a cry for help: recognise and support the carer strain (carer\u2019s assessment, respite, social services) non-judgementally \u2014 it is as important as the legal/clinical process.',
    knowledge:{
      guideline:'Mental Capacity Act 2005 (capacity & best interests) · CQC/NICE covert medication guidance · carers support',
      points:[
        { h:'When covert medication is lawful', t:'Only when: the patient LACKS CAPACITY for the specific medication decision (assessed under the MCA), administration is in their BEST INTERESTS, there is no valid advance decision or LPA refusing it, and it follows a proper MULTIDISCIPLINARY process. A capacitous patient\u2019s refusal must be respected \u2014 covert medication of someone with capacity is unlawful.' },
        { h:'The required process', t:'Capacity assessment; best-interests decision involving family/carers, the prescriber, nursing staff and the PHARMACIST; a documented covert-medication management plan specifying which drugs, why, how administered, and regular review. Not a unilateral carer or single-clinician decision.' },
        { h:'Pharmacist & crushing safety', t:'Crushing/altering tablets can change pharmacokinetics, be ineffective, or be unsafe (modified-release preparations, enteric-coated drugs, certain antipsychotics), and is often off-licence. Pharmacist input is essential to confirm whether and how each medicine can be given covertly.' },
        { h:'Review necessity \u2014 deprescribing', t:'Refusal is a prompt to review whether each medicine is still appropriate. In advanced dementia, deprescribing is often indicated \u2014 e.g. antipsychotics (increased stroke/mortality risk; use lowest dose/shortest time, regularly reviewed) and some preventive cardiovascular drugs \u2014 reducing pill burden, battles and the need for covert administration.' },
        { h:'Support the carer', t:'Informal covert dosing frequently signals carer exhaustion/burnout. Offer a carer\u2019s assessment (statutory right), respite, social-services and community/dementia support. Address the unsustainable caring situation \u2014 it is central, not incidental.' },
        { h:'Tone \u2014 neither endorse nor condemn', t:'Respond non-judgementally to a well-meaning, frightened carer ("you\u2019re not in trouble"), while being honest that the practice must move to the proper process. Frame the framework and support as helping both the patient and the carer.' },
        { h:'Never do', t:'Never simply reassure a carer that informal covert dosing "is fine"; never condemn/alienate a well-meaning carer; never bypass capacity/best-interests/pharmacist input; never miss the deprescribing opportunity; never ignore the carer strain behind the question.' },
        { h:'Safety-net & follow-up', t:'Arrange capacity/best-interests/MDT process and pharmacist review; medication/deprescribing review; carer\u2019s assessment, respite and support; documentation of a reviewed covert-medication plan; advise against unilateral dangerous changes meanwhile; follow-up.' }
      ]
    }
  };

  /* ============ 116. TELEPHONE — Medication error reached the patient (candour) ============ */
  const c116 = {
    id:'medication-error-candour', title:'The wrong dose went out \u2014 and they\u2019ve been taking it', type:'telephone', duration:12,
    meta:{ age:67, sex:'F', setting:'Telephone \u2014 proactively disclosing a prescribing error.', system:'Ethics / Duty of candour & medication safety' },
    brief:'You are ringing Mrs Maureen Selby, 67, because a prescribing error has come to light: her methotrexate was issued at a DAILY dose instead of WEEKLY (a classic dangerous error) and she has taken it daily for ~6 days. You must disclose this honestly (duty of candour), assess and act on the clinical risk urgently (methotrexate toxicity \u2014 bloods, mucositis, marrow suppression, possible folinic acid/admission), apologise, and put things right \u2014 without being defensive or minimising. She is well so far but this is potentially serious.',
    script:{
      opening:'(You are calling her.) "Hello Mrs Selby, it\u2019s Dr \u2014 from the surgery. Thank you for taking my call. I\u2019m ringing because I need to be honest with you about a mistake we\u2019ve made with your medication, and to sort it out with you straight away. Is now an okay time to talk?" \u2014 (She:) "A mistake? What do you mean? Is it serious? I\u2019ve been taking my tablets like it said\u2026"',
      facts:[
        { topic:'The error & danger',  text:'Methotrexate prescribed/dispensed DAILY instead of WEEKLY is a well-recognised, potentially fatal error. Six days of daily methotrexate risks toxicity: mucositis/mouth ulcers, GI upset, bone-marrow suppression (infection/bleeding risk), hepatotoxicity, pneumonitis. This needs URGENT clinical action \u2014 stop the drug, urgent bloods (FBC, U&E, LFTs), assess for toxicity, and likely specialist/toxicology advice (folinic acid rescue, possible admission), even though she feels well so far.' },
        { topic:'Duty of candour',     text:'There is a professional and statutory DUTY OF CANDOUR: when something goes wrong that could cause (or has caused) harm, you must tell the patient promptly, honestly and fully, APOLOGISE (an apology is not an admission of legal liability), explain what happened and what you\u2019ll do, and put it right. Defensiveness, minimising or hiding it is both unethical and unsafe.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 from the patient\u2019s side, beneath the shock she may feel FRIGHTENED ("am I going to be harmed/die?") and possibly ANGRY/betrayed, and may blame herself ("I took it like it said"). She needs honest reassurance about what\u2019s being done, the self-blame lifted (it was the system\u2019s error, not hers), and to feel taken seriously. From the doctor\u2019s side, the "agenda" trap is the urge to minimise/defend to protect the practice \u2014 which must be resisted.' },
        { topic:'System response',     text:'Beyond this patient: the error needs reporting and a SYSTEM fix (significant event analysis, checking how it happened \u2014 prescribing alert, dispensing check \u2014 to prevent recurrence), and checking whether other patients are affected. Candour includes saying what will change.' },
        { topic:'What\u2019s needed',      text:'Disclose honestly and promptly, apologise sincerely, act URGENTLY on the clinical risk (stop drug, urgent bloods, toxicity assessment, specialist advice/admission as needed), lift her self-blame, keep her informed, and commit to a system fix \u2014 the full duty-of-candour package delivered with compassion, not defensiveness.' },
      ],
      ice:{
        ideas:'(Patient) She\u2019s been taking her tablets correctly "like it said" \u2014 now hearing there\u2019s a mistake.',
        concerns:'HIDDEN AGENDA \u2014 fear of being harmed ("is it serious, am I going to be alright?"), possible anger/betrayal, and self-blame ("I just took what I was given"); she needs honesty, reassurance about the plan, and the blame lifted.',
        expectations:'To understand what happened and whether she\u2019s in danger. What she needs: honest full disclosure, a sincere apology, urgent clinical action on the methotrexate risk, self-blame lifted, and to be kept informed.'
      },
      cues:['Methotrexate DAILY instead of WEEKLY for ~6 days \u2014 a classic dangerous error; urgent toxicity action even though she feels well.','Duty of candour \u2014 disclose promptly, fully, apologise, put it right; resist the urge to minimise/defend.','Patient frightened + self-blaming ("I took it like it said") \u2014 lift the blame, reassure about the plan, keep her informed.']
    },
    checkpoints:[
      { dom:'tasks', text:'Acts URGENTLY on the clinical risk: recognises daily methotrexate for ~6 days as potentially serious toxicity \u2014 advises STOPPING the drug immediately, arranges urgent bloods (FBC, U&E, LFTs), assesses for toxicity (mucositis, GI, infection/bleeding, breathlessness), and seeks urgent specialist/toxicology advice (folinic acid rescue, possible admission) even though she feels well so far' },
      { dom:'tasks', text:'Fulfils the DUTY OF CANDOUR: discloses the error promptly, honestly and FULLY \u2014 what happened, that it was a mistake, and the potential consequences \u2014 without minimising, hiding or being defensive' },
      { dom:'tasks', text:'APOLOGISES sincerely and clearly (recognising an apology is not an admission of legal liability), and explains what will be done now and to prevent recurrence' },
      { dom:'tasks', text:'LIFTS the patient\u2019s self-blame: makes explicit that this was the system/prescriber\u2019s error, NOT her fault \u2014 she took it exactly as labelled \u2014 countering the "I took it like it said" self-blame' },
      { dom:'tasks', text:'Commits to the SYSTEM response: reporting/significant event analysis, understanding how it happened and fixing it (prescribing/dispensing safeguards), and checking no other patients are affected \u2014 and tells her this' },
      { dom:'rto',   text:'Delivers the disclosure with compassion and calm, takes responsibility on behalf of the practice without defensiveness, and manages her fear/anger empathically' },
      { dom:'rto',   text:'Keeps her informed and supported throughout, checks her understanding and feelings, and gives her a clear point of contact \u2014 treating her as a partner in putting it right, not a problem to be managed' },
      { dom:'gs',    text:'Safety-nets robustly: urgent bloods/assessment and the toxicity red flags to act on (mouth ulcers, fever/infection, bruising/bleeding, breathlessness \u2192 urgent/999), the plan and follow-up, written information, named contact, and documentation of the candour conversation' },
    ],
    worked:[
      { lbl:'Disclose honestly',    txt:'"I\u2019m really sorry, Mrs Selby \u2014 I need to be completely straight with you. Your methotrexate should be taken just ONCE A WEEK, but because of a mistake on our side it was issued as a DAILY dose, and you\u2019ve been taking it every day for about six days. That\u2019s our error, not yours, and I\u2019m telling you straight away so we can put it right immediately."' },
      { lbl:'Apologise, take responsibility', txt:'"I want to apologise properly \u2014 this should not have happened, and I\u2019m sorry for the worry it\u2019s going to cause you. This is something we got wrong, and it\u2019s our job to fix it and to make sure it can\u2019t happen to anyone else."' },
      { lbl:'Lift her blame',       txt:'"And please hear this clearly: you did absolutely nothing wrong. You took the tablets exactly as they were labelled \u2014 anyone would have. This is not your fault in any way. So don\u2019t carry an ounce of blame for this."' },
      { lbl:'Act on the risk now',  txt:'"Now, the important bit \u2014 what we do about it. Please STOP the methotrexate now, don\u2019t take any more. Taken daily it can affect your blood counts and your mouth and tummy, so I need you to have some urgent blood tests today, and I\u2019m going to get specialist advice straight away \u2014 there\u2019s a treatment that can protect you if needed, and occasionally we admit people to be safe. You feel well now, which is good, but we act anyway because it\u2019s the safe thing."' },
      { lbl:'Red flags',            txt:'"Watch for these and tell us urgently, or go to A&E: mouth ulcers, a sore mouth or throat, a fever or any sign of infection, easy bruising or bleeding, or getting breathless. Any of those, don\u2019t wait. I\u2019ll give you a number to reach us directly."' },
      { lbl:'System fix + stay with her', txt:'"Beyond you, I\u2019m reporting this so we understand exactly how it happened and change our system so it can\u2019t happen again, and we\u2019re checking no one else has been affected. I\u2019ll personally keep you updated, I\u2019ll chase your blood results today, and you can ring me directly. I\u2019m sorry again \u2014 you trusted us, and we\u2019ll work hard to put this right and keep you safe."' },
    ],
    learning:'A methotrexate dose issued DAILY instead of WEEKLY \u2014 taken for ~6 days \u2014 is a classic, potentially fatal prescribing error, and the consultation has two inseparable strands. Clinically: act URGENTLY despite the patient feeling well \u2014 stop the drug, urgent bloods (FBC, U&E, LFTs), assess for toxicity (mucositis, GI upset, marrow suppression/infection/bleeding, pneumonitis), and seek specialist/toxicology advice (folinic acid rescue, possible admission), with clear toxicity red-flag safety-netting. Ethically: fulfil the DUTY OF CANDOUR \u2014 disclose promptly, honestly and fully, APOLOGISE sincerely (an apology is not an admission of legal liability), explain what happened and what will be done, and commit to a system response (significant event analysis, fixing the prescribing/dispensing safeguard, checking other patients). The examinable skills are doing this WITHOUT defensiveness or minimising, and managing the patient\u2019s fear and self-blame \u2014 explicitly lifting the "I took it like it said" self-blame (it was the system\u2019s error, not hers) \u2014 while keeping her informed, supported and treated as a partner in putting it right.',
    knowledge:{
      guideline:'GMC/professional & statutory duty of candour · NPSA/MHRA methotrexate safety · significant event analysis',
      points:[
        { h:'Methotrexate is once-WEEKLY', t:'Oral methotrexate is a once-weekly drug; daily administration is a recognised, potentially fatal error (a national patient-safety alert topic). Six days of daily dosing risks mucositis, GI toxicity, myelosuppression (neutropenic sepsis, bleeding), hepatotoxicity and pneumonitis. Act urgently even if the patient is currently asymptomatic.' },
        { h:'Act on the clinical risk', t:'Stop the drug immediately; urgent FBC, U&E, LFTs; assess for toxicity; seek urgent specialist/toxicology (e.g. National Poisons Information Service/rheumatology) advice \u2014 folinic acid (calcium folinate) rescue and admission may be needed. Safety-net toxicity red flags (mouth ulcers, fever/infection, bruising/bleeding, breathlessness) with clear escalation.' },
        { h:'Duty of candour', t:'When something goes wrong that could cause/has caused harm, there is a professional and statutory duty to be open: tell the patient promptly, honestly and fully; explain what happened and the likely consequences; APOLOGISE; and put things right. Concealment, delay, minimising or defensiveness breaches this duty and erodes trust and safety.' },
        { h:'Apology \u2260 liability admission', t:'Saying sorry is the right thing to do and is not, in itself, an admission of legal liability. A sincere, specific apology and taking responsibility on behalf of the organisation is central to candour.' },
        { h:'Lift the patient\u2019s self-blame', t:'Patients often blame themselves ("I just took what I was given"). Make explicit that the error was the system\u2019s/prescriber\u2019s, not theirs \u2014 they followed the label \u2014 to relieve guilt and maintain trust.' },
        { h:'System response', t:'Report the incident; conduct a significant event analysis to understand the cause (prescribing alert override, dispensing check failure) and implement safeguards; check whether other patients are affected. Candour includes telling the patient what will change to prevent recurrence.' },
        { h:'Never do', t:'Never hide, delay or minimise the error; never be defensive or blame the patient; never fail to act urgently on the clinical risk because the patient "feels fine"; never omit the apology or the system fix; never leave the patient unsupported or uninformed.' },
        { h:'Safety-net & follow-up', t:'Urgent bloods and specialist advice; toxicity red flags \u2192 urgent/999; stop the drug; written information and a named direct contact; proactive updates on results; documentation of the candour conversation; significant event analysis and system change.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c113, c114, c115, c116);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'sicknote-unsupported': {
      ceg: ['Professional & ethical dilemmas', 'Mental health & addiction'],
      stem: {
        name: 'Carl Dobbs', age: '44 years · male',
        pmh: ['Mild, mechanical, improving back strain (moves freely, no red flags)', 'Workplace grievance/disciplinary he\u2019s avoiding; money worries', 'Possible work-related stress/low mood'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Insistent/aggressive; demands a 3-month sign-off "no examination, no questions".',
        reason: 'Video consultation — fit-note request.'
      },
      timeMap: [
        { t:'0–2',  h:'Hear it, assess it',  d:'Acknowledge the back; briefly assess to ground the decision. Mild, improving, no red flags — no basis for 3 months off.' },
        { t:'2–4',  h:'What a fit note is',   d:'It\u2019s an honest clinical opinion, not a patient-dictated entitlement. Can\u2019t sign what the assessment doesn\u2019t support — probity.' },
        { t:'4–6',  h:'Offer the real option', d:'Short note and/or "may be fit with adjustments"/phased return — keeps him in work, aids recovery.' },
        { t:'6–9',  h:'Find the real driver', d:'3 months for a settling back? Surface the grievance/disciplinary, money worries, possible genuine stress.' },
        { t:'9–12', h:'Legitimate help + hold line', d:'OH, stress/mood support (proportionate note if warranted), union/Citizens Advice; decline the dishonest note kindly; open door.' }
      ],
      wordPics: {
        fail: 'Either caves and signs the unsupported 3-month note (probity failure), or refuses bluntly/defensively without assessing or exploring; never surfaces the work conflict or the genuine stress; turns it into a confrontation.',
        pass: 'Declines the unsupported note, offers a phased-return/adjustments alternative, explores the work situation, and signposts support.',
        exc:  'Grounds the decision in a brief assessment and explains a fit note is an honest opinion; offers the appropriate adjustments/short-note alternative; surfaces the hidden grievance/money/stress and takes genuine stress seriously; offers OH and real signposting; and holds the probity line warmly without confrontation, keeping the relationship intact.'
      },
      avoid: [
        { dont:'"Fine, three months it is — I don\u2019t want an argument."', instead:'"I can\u2019t honestly sign three months for a back that\u2019s settling — but I can do a fit-for-adjustments note and, more importantly, help with what\u2019s really going on."', why:'Signing an unsupported note to avoid conflict is a serious probity failure.' },
        { dont:'"There\u2019s nothing wrong with your back, so there\u2019s nothing I can do for you."', instead:'"Your back is mild and settling — but three months is a lot to want off, so let\u2019s talk about what else might be going on, because I suspect I can help with that."', why:'A blunt refusal without exploring misses the real, addressable issue and ruptures the relationship.' },
        { dont:'"Work stress isn\u2019t really a medical thing for a sick note."', instead:'"If the situation at work is affecting your sleep and mood, that\u2019s real and I\u2019d take it seriously and support it honestly — separate from the back."', why:'Dismissing genuine work-related stress misses a legitimate need hidden behind the unsupported request.' }
      ]
    },

    'dont-record-this': {
      ceg: ['Professional & ethical dilemmas', 'Mental health & addiction'],
      stem: {
        name: 'Aiden Frost', age: '34 years · male',
        pmh: ['Commercial airline pilot', 'Low mood + escalating alcohol; fleeting "better off not here" thoughts', 'Terrified for his licence/career'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '⚠ "Promise it stays off my record / away from licensing, or I hang up."',
        reason: 'Telephone — disclosure with a recording condition.'
      },
      timeMap: [
        { t:'0–2',  h:'Honest re the promise', d:'Can\u2019t promise total secrecy or to omit clinical info — records are a duty. Confidentiality WITH limits (risk to self/others).' },
        { t:'2–4',  h:'Don\u2019t lose him',     d:'Validate the career terror; keep him on the line — disengagement is the worst outcome. There\u2019s a way through.' },
        { t:'4–6',  h:'Assess risk',          d:'Explicit suicide-risk assessment (ideation, plan, intent, means, protective); assess depression + alcohol.' },
        { t:'6–9',  h:'Fitness-to-fly duty',  d:'Public-safety parallel to DVLA: encourage self-report to the AME + step back; disclosure a last resort if unfit and flying against advice.' },
        { t:'9–12', h:'Reframe + treat + net', d:'Honesty/treatment is the route that protects his career too (many return when well). Treat mood/alcohol; crisis routes; honest documentation.' }
      ],
      wordPics: {
        fail: 'Promises total secrecy/"won\u2019t write it down" to keep him talking; or coldly refuses and lets him hang up; never assesses suicide risk; ignores the fitness-to-fly/public-safety duty.',
        pass: 'Explains confidentiality with limits, assesses risk, addresses fitness-to-fly via self-report, treats mood/alcohol, and safety-nets.',
        exc:  'Is honest about the impossible promise without driving him away; performs an explicit suicide-risk assessment; navigates the fitness-to-fly/public-safety duty sensitively (self-report; disclosure as last resort); reframes honesty and treatment as protecting his career too; and retains him in care with crisis safety-netting and honest documentation.'
      },
      avoid: [
        { dont:'"Okay, I promise — I won\u2019t write any of this down."', instead:'"I can\u2019t promise that — records are part of caring for you safely. But it\u2019s confidential and won\u2019t be shared without your consent unless there\u2019s a serious risk. Please don\u2019t hang up; there\u2019s a way through this."', why:'Promising to omit clinical information is dishonest, unsafe, and breaches record-keeping duties.' },
        { dont:'"As a pilot you legally have to be grounded right now and I\u2019ll be informing the authorities."', instead:'"There\u2019s a real question about flying safely while you\u2019re unwell — and the best route is for YOU to tell your aviation medical examiner and step back while we treat this. I\u2019d only ever go further as a last resort, and I\u2019d tell you first."', why:'Threatening immediate disclosure destroys trust and engagement; persuasion and self-report come first.' },
        { dont:'"Your career worries aren\u2019t my concern — let\u2019s just focus on the depression."', instead:'"Your career terror is completely understandable, and honesty is actually what protects it — many pilots get treated and return to flying. Hiding it is the real threat."', why:'Dismissing the career fear loses the chance to reframe honesty as protective and retain him in care.' }
      ]
    },

    'covert-medication': {
      ceg: ['Professional & ethical dilemmas', 'Older adults'],
      stem: {
        name: 'Janet Pugh (re her mother, 84)', age: 'Daughter 58 · mother 84',
        pmh: ['Mother: advanced dementia, lacks capacity for medication decisions', 'Daughter crushing antipsychotic + BP meds into tea (refuses them)', 'No best-interests/MDT process; main carer, exhausted'],
        meds: ['Antipsychotic; antihypertensives (crushed covertly)'],
        allergy: '—',
        recent: 'Exhausted carer; "I can\u2019t keep fighting her three times a day". Wants reassurance it\u2019s "fine".',
        reason: 'Telephone — daughter discloses covert medication.'
      },
      timeMap: [
        { t:'0–2',  h:'Reassure, don\u2019t condemn', d:'Done out of love and exhaustion; "you\u2019re not in trouble". Thank her for honesty so it can be made safe/lawful.' },
        { t:'2–4',  h:'The honest position',  d:'Covert meds CAN be lawful for someone lacking capacity, in best interests — but via a proper process, not a carer\u2019s solo call.' },
        { t:'4–6',  h:'The process',          d:'MCA capacity assessment, best-interests with the team, pharmacist input on crushing (some unsafe/ineffective), documented reviewed plan.' },
        { t:'6–8',  h:'Review necessity',     d:'Advanced dementia — deprescribe? Antipsychotic (mortality risk) and some BP meds may be doing more harm; fewer battles.' },
        { t:'8–12', h:'See the carer + net',  d:'Carer\u2019s assessment, respite, social services. Don\u2019t change anything dangerous alone meanwhile; arrange the process + support.' }
      ],
      wordPics: {
        fail: 'Simply reassures "that\u2019s fine, carry on" (endorsing unlawful informal covert dosing), or condemns/alienates the carer; bypasses capacity/best-interests/pharmacist input; misses deprescribing; ignores the carer\u2019s burnout.',
        pass: 'Explains covert medication needs a capacity/best-interests/MDT process with pharmacist input, reviews the medicines, and offers carer support.',
        exc:  'Responds non-judgementally ("you\u2019re not in trouble") while being honest the practice must change; sets out the MCA/best-interests/pharmacist process and documented plan; reviews necessity/deprescribing in advanced dementia; and \u2014 crucially \u2014 recognises and supports the exhausted carer with an assessment and respite.'
      },
      avoid: [
        { dont:'"If she needs them and won\u2019t take them, crushing them in her tea is fine — carry on."', instead:'"It can be the right thing, but only through a proper process — a capacity assessment, a best-interests decision, and a pharmacist checking it\u2019s safe to crush. Let\u2019s put that in place."', why:'Endorsing informal covert dosing bypasses the law and safety (some drugs are dangerous crushed).' },
        { dont:'"You really shouldn\u2019t be doing that — it\u2019s not allowed."', instead:'"You\u2019re not in trouble — you did it out of love and exhaustion. Let\u2019s just put the right framework around it so it\u2019s safe and lawful."', why:'Condemning a well-meaning carer alienates her and misses the support she needs.' },
        { dont:'"Let\u2019s keep all her tablets going so she doesn\u2019t miss anything."', instead:'"It\u2019s worth asking if she still needs them all — in advanced dementia some, like the one for agitation, may do more harm than good. Stopping some means fewer battles and safer care."', why:'Failing to review necessity misses the deprescribing that could remove the need for covert dosing entirely.' }
      ]
    },

    'medication-error-candour': {
      ceg: ['Professional & ethical dilemmas', 'Prescribing & pharmacology'],
      stem: {
        name: 'Maureen Selby', age: '67 years · female',
        pmh: ['Methotrexate issued DAILY instead of WEEKLY; taken daily ~6 days', 'Well so far (no current toxicity symptoms)', 'You are proactively phoning to disclose'],
        meds: ['Methotrexate (erroneously daily)'],
        allergy: 'NKDA',
        recent: '⚠ Duty-of-candour disclosure + urgent toxicity action.',
        reason: 'Telephone — GP-initiated disclosure of a prescribing error.'
      },
      timeMap: [
        { t:'0–2',  h:'Disclose honestly',   d:'Methotrexate is once-WEEKLY; our error issued it daily and you\u2019ve taken 6 days. Our mistake, told to you straight away.' },
        { t:'2–4',  h:'Apologise + lift blame', d:'Sincere apology, take responsibility; you did nothing wrong — you followed the label. No self-blame.' },
        { t:'4–7',  h:'Act on the risk now',  d:'Stop the drug; urgent FBC/U&E/LFTs; assess toxicity; specialist/toxicology advice (folinic acid, possible admission) despite feeling well.' },
        { t:'7–9',  h:'Red flags',            d:'Mouth ulcers, fever/infection, bruising/bleeding, breathlessness → urgent/999. Direct contact number.' },
        { t:'9–12', h:'System fix + stay with her', d:'Report + significant event analysis + check others affected; proactive updates; chase bloods; follow-up.' }
      ],
      wordPics: {
        fail: 'Minimises or hides the error, is defensive, or waits "to see"; lets the patient blame herself; fails to act urgently on methotrexate toxicity because she "feels fine"; no apology, no system fix.',
        pass: 'Discloses honestly with an apology, stops the drug and arranges urgent bloods/specialist advice, lifts self-blame, and reports for a system fix.',
        exc:  'Delivers full, prompt, non-defensive candour with a sincere apology; acts urgently on the toxicity risk (stop drug, urgent bloods, specialist/folinic-acid advice, red-flag safety-net) despite her being well; explicitly lifts her self-blame; commits to a significant event analysis and system change and checking other patients; and keeps her informed with a direct contact.'
      },
      avoid: [
        { dont:'"There may have been a small mix-up but I\u2019m sure it\u2019s nothing to worry about."', instead:'"I have to be completely straight: your methotrexate should be weekly and our error made it daily — you\u2019ve taken six days\u2019 worth. That can be serious, so we\u2019re acting now."', why:'Minimising a methotrexate-dosing error is dishonest and dangerously downplays real toxicity risk.' },
        { dont:'"Did you not check how many you were meant to take?"', instead:'"You did absolutely nothing wrong — you took them exactly as labelled. This is our mistake, not yours."', why:'Implying patient fault is both untrue and a breach of the duty to be open and supportive.' },
        { dont:'"You feel fine, so let\u2019s just stop it and keep an eye out."', instead:'"Even though you feel well, daily methotrexate can affect your blood and your mouth, so I need urgent blood tests today and specialist advice — there\u2019s a protective treatment if needed."', why:'"Feels fine, watch and wait" misses evolving methotrexate toxicity that needs urgent action.' }
      ]
    }
  });

})();
