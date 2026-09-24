/* ============================================================
   Reasoning GP — Case Library batch 50:
   "Consent, competence and zero judgement"
   Four ORIGINAL cases testing ethics under warmth: the 16-year-old
   seeking abortion (Gillick / no editorialising), a request for
   termination on fetal sex (the line the law draws), pregnant at
   15 (safeguarding alongside choice), and an HIV test request from
   a frightened teenager (window periods + confidentiality). None
   map to an NG12 cancer pathway; none is invented. Safeguarding /
   child-protection duties are stated where they genuinely apply.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases49.js.
   ============================================================ */

(function(){

  /* ====== 193. F2F — 16-year-old seeking abortion: Gillick, support, no editorial ====== */
  const c193 = {
    id:'teen-abortion-gillick', title:'"I\u2019m 16 and pregnant \u2014 I want a termination, and I don\u2019t want my mum told"', type:'video', duration:12,
    meta:{ age:16, sex:'F', setting:'Video consultation \u2014 a 16-year-old requesting abortion, alone.', system:'Reproductive / Ethics \u2014 consent, competence & non-judgemental abortion care' },
    brief:'Miss Erin Doyle, 16, comes ALONE, pregnant (~7 weeks), having decided she wants a TERMINATION, and asks that her mother not be told. The examined skills are ethics under warmth: provide NON-JUDGEMENTAL, patient-centred care with ZERO editorialising about her decision; assess CAPACITY/competence (at 16 she is presumed competent under the Family Law Reform Act; Gillick competence applies to under-16s) and her understanding; CONFIDENTIALITY (she is entitled to it; encourage but do not force parental involvement); take a careful history (dates, certainty of decision, coercion, safeguarding \u2014 who is the father, any exploitation/abuse, was sex consensual); give balanced INFORMATION on options (continuing, adoption, abortion) without steering; refer promptly to abortion services; cover contraception and STI screening; and SAFETY-NET. The trap is imposing personal values, breaching confidentiality, or missing a safeguarding concern. No NG12 link.',
    script:{
      opening:'"I need help and I really don\u2019t want a lecture. I\u2019m 16, I\u2019m pregnant \u2014 I did a test, it\u2019s positive \u2014 and I\u2019ve thought about it a lot. I want an abortion. Please don\u2019t tell my mum, she\u2019d kill me. Can you just sort it out for me, or am I too young to decide?"',
      facts:[
        { topic:'Zero judgement, patient-centred', text:'THE TONE IS THE TEST \u2014 provide warm, non-judgemental care with NO editorialising (no personal/moral commentary on abortion, on her age, or on her decision). Thank her for coming, reassure she is in the right place, and centre HER. Whatever your private views, your duty is to support her autonomy and access to lawful care without bias.' },
        { topic:'Competence \u2014 she can consent', text:'At 16, she is presumed to have capacity to consent to her own medical treatment (Family Law Reform Act 1969); for under-16s, Gillick competence/Fraser-type assessment applies. Assess her understanding of the decision and the options. She does NOT need parental consent for a termination if competent \u2014 answer her "am I too young to decide?" clearly: no, you can decide, and I\u2019ll help you.' },
        { topic:'Confidentiality \u2014 hers', text:'She is entitled to confidentiality. ENCOURAGE (but do not force) involving a parent or trusted adult, exploring her reasons gently \u2014 but respect her wish not to tell her mother. Confidentiality is only breached if there is a serious safeguarding/risk concern (and then proportionately, ideally with her knowledge). Be explicit and reassuring about this so she trusts you.' },
        { topic:'Safeguarding screen \u2014 essential', text:'CRUCIAL \u2014 a pregnant 16-year-old requires a SAFEGUARDING assessment woven in sensitively: who is the father and his age (a large age gap or an adult is a child-sexual-exploitation/abuse concern), was the sex CONSENSUAL, any coercion/CSE indicators, grooming, substance use, or pressure about the pregnancy decision (from anyone). Consider whether she is at risk. This is not about blocking her choice \u2014 it is about ensuring she is safe.' },
        { topic:'Balanced information + prompt referral', text:'Give BALANCED information on all options (continuing the pregnancy, adoption, abortion) without steering toward any \u2014 but if she is clear, support her choice efficiently. Explain the abortion pathway (self-referral or GP referral to abortion services, medical vs surgical, that early is simpler), and refer PROMPTLY (time-critical). Address contraception (offer LARC/ongoing method) and STI screening as part of holistic care.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 "I don\u2019t want a lecture / am I too young?" reveals fear of being judged, controlled, or refused, and fear of her mother. She needs to feel safe, believed and in control. The skill is to deliver competent, confidential, non-judgemental care, weave in safeguarding without making her feel policed, and ensure she leaves with a clear plan and trust \u2014 not a moral lecture or a breach of confidence.' },
      ],
      ice:{
        ideas:'She has decided she wants a termination and is unsure whether she\u2019s "allowed" to decide at 16.',
        concerns:'HIDDEN AGENDA \u2014 fear of judgement/lecture, fear of her mother finding out, fear of being refused; needs to feel safe and in control.',
        expectations:'Non-judgemental help to access abortion, with confidentiality. What she needs: competence affirmed, confidentiality respected (parental involvement encouraged not forced), a woven-in safeguarding screen, balanced information, prompt referral, contraception/STI care.'
      },
      cues:['16, pregnant, decided on termination, wants confidentiality \u2014 ethics under warmth; zero editorialising, affirm competence.','Pregnant minor \u2014 weave in a SAFEGUARDING screen (father\u2019s age, consent, coercion/CSE) sensitively, without policing her choice.','"Don\u2019t tell my mum / am I too young?" \u2014 fear of judgement and her mother; respect confidentiality, encourage (not force) support, prompt referral.']
    },
    checkpoints:[
      { dom:'tasks', text:'Provides NON-JUDGEMENTAL, patient-centred care with ZERO editorialising about abortion, her age or her decision \u2014 centring her autonomy regardless of personal views' },
      { dom:'tasks', text:'Assesses and AFFIRMS competence \u2014 at 16 presumed able to consent (Gillick/Fraser for under-16s) \u2014 and answers clearly that she can decide without parental consent if competent' },
      { dom:'tasks', text:'Respects CONFIDENTIALITY \u2014 encourages but does not force parental/trusted-adult involvement, and explains when/why confidentiality might be breached \u2014 building trust' },
      { dom:'tasks', text:'Weaves in a SAFEGUARDING screen sensitively (father\u2019s identity/age, consent to sex, coercion/CSE/grooming indicators, pressure about the decision) without making her feel policed' },
      { dom:'tasks', text:'Gives BALANCED information on options without steering, refers PROMPTLY to abortion services (time-critical), and addresses contraception and STI screening' },
      { dom:'rto',   text:'Reads the fear of judgement and of her mother, makes her feel safe, believed and in control, and avoids any moral lecture' },
      { dom:'rto',   text:'Explains confidentiality and competence in reassuring, accessible terms so she trusts the process' },
      { dom:'gs',    text:'Safety-nets and follows up: clear plan and timing, who to contact, contraception/STI follow-up, and any safeguarding action taken proportionately \u2014 competent, confidential, non-judgemental care (no NG12 link)' },
    ],
    worked:[
      { lbl:'Set a safe tone', txt:'"No lecture \u2014 I promise. You\u2019ve come to exactly the right place, and my job is to help you, not to judge you. Let\u2019s take it at your pace."' },
      { lbl:'Answer the competence question', txt:'"To your question \u2014 no, you\u2019re not too young to decide. At 16 you\u2019re allowed to make this decision for yourself, as long as you understand it, and from talking to you, you clearly do."' },
      { lbl:'Confidentiality, reassured', txt:'"I won\u2019t tell your mum without your say-so. I\u2019d gently encourage having someone you trust alongside you \u2014 it can help \u2014 but that\u2019s your choice. The only time I\u2019d ever need to share anything is if you were in danger, and I\u2019d talk to you about it first."' },
      { lbl:'Safeguarding, gently', txt:'"Can I ask a few things just to make sure you\u2019re safe \u2014 who\u2019s the father, how old is he, and was everything that happened something you wanted? \u2026 Thank you. I ask everyone this, it\u2019s not about your decision."' },
      { lbl:'Information + referral', txt:'"You\u2019ve thought it through, and I\u2019ll support your choice. I\u2019ll refer you today to the service \u2014 the earlier, the simpler the process. They\u2019ll go through the methods with you. Is there anything about continuing or other options you want to talk through, no pressure either way?"' },
      { lbl:'Holistic + safety-net', txt:'"Afterwards, let\u2019s sort reliable contraception so you\u2019re in control going forward, and check for any infections. Here\u2019s how to reach me and the service, and if you\u2019re worried about anything \u2014 your health or your safety \u2014 come straight back."' },
    ],
    learning:'A 16-year-old requesting an abortion is an ethics-under-warmth station where the tone is the test: provide non-judgemental, patient-centred care with zero editorialising about abortion, her age or her decision, centring her autonomy whatever your private views. Assess and affirm competence \u2014 at 16 she is presumed able to consent to her own treatment (Family Law Reform Act 1969), and Gillick competence/Fraser assessment applies to under-16s \u2014 so answer her fear ("am I too young?") clearly: she can decide without parental consent if competent. Respect confidentiality, which is hers: encourage but do not force involving a parent or trusted adult, and explain that confidentiality is breached only for a serious safeguarding/risk concern, proportionately and ideally with her knowledge \u2014 this builds the trust that makes care possible. Crucially, weave in a safeguarding screen sensitively \u2014 the father\u2019s identity and age (an adult or large age gap raises child-sexual-exploitation/abuse concern), whether sex was consensual, coercion/CSE/grooming indicators, and any pressure about the pregnancy decision \u2014 not to block her choice but to ensure she is safe. Give balanced information on all options (continuing, adoption, abortion) without steering, refer promptly to abortion services (time-critical, earlier is simpler), and address contraception and STI screening. The hidden agenda is fear of being judged, controlled or refused and fear of her mother; make her feel safe, believed and in control, weave in safeguarding without policing, and ensure she leaves with a clear plan and trust \u2014 never a moral lecture or a breach of confidence. No NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Consent in young people (Family Law Reform Act / Gillick / Fraser) \u00b7 confidentiality \u00b7 CSE safeguarding \u00b7 abortion care (no judgement)',
      points:[
        { h:'Zero editorialising', t:'Provide warm, non-judgemental care; no personal/moral commentary on abortion, age or the decision. Support autonomy and lawful access regardless of personal views.' },
        { h:'Competence to consent', t:'At 16, presumed competent to consent (Family Law Reform Act 1969); Gillick/Fraser for under-16s. No parental consent required if competent.' },
        { h:'Confidentiality', t:'Hers; encourage but do not force parental/trusted-adult involvement; breach only for serious safeguarding risk, proportionately and ideally with her knowledge.' },
        { h:'Safeguarding screen', t:'Father\u2019s identity/age, consent to sex, coercion/CSE/grooming, pressure about the decision. A pregnant minor needs a safeguarding assessment woven in sensitively \u2014 not to block choice but to ensure safety.' },
        { h:'Balanced info + referral', t:'Non-directive information on continuing/adoption/abortion; prompt referral to abortion services (time-critical, earlier simpler); medical vs surgical.' },
        { h:'Holistic care', t:'Contraception (offer LARC/ongoing method) and STI screening as part of the consultation.' },
        { h:'Never do', t:'Never lecture or steer; never breach confidentiality without a safeguarding justification; never miss the CSE/safeguarding screen; never refuse on personal grounds without referral.' },
        { h:'Safety-net', t:'Clear plan/timing and contacts, contraception/STI follow-up, proportionate safeguarding action. (No NG12 link.)' }
      ]
    }
  };

  /* ====== 194. F2F — Termination requested for fetal sex: the line the law draws ====== */
  const c194 = {
    id:'sex-selective-termination', title:'"It\u2019s another girl \u2014 my family expects a son. I want to end this pregnancy"', type:'video', duration:12,
    meta:{ age:31, sex:'F', setting:'Video consultation \u2014 a request to terminate based on fetal sex.', system:'Reproductive / Ethics & law \u2014 sex-selective termination & the pressure behind it' },
    brief:'Mrs Anjali Sharma, 31, pregnant, has learned the fetus is FEMALE and requests a TERMINATION because her family/in-laws expect a SON and she is under intense pressure. The examined skills: navigate a genuinely difficult ETHICAL/LEGAL situation with compassion and without judgement of HER \u2014 understand that abortion solely on the grounds of fetal sex is NOT lawful under the Abortion Act (there is no \u2018fetal sex\u2019 ground; the legal grounds relate to risks to physical/mental health, etc.), so a termination requested purely for sex selection cannot be provided on that basis; BUT the dominant clinical issue is the COERCION and potential DOMESTIC ABUSE / so-called honour-based pressure behind the request \u2014 explore her safety, autonomy and mental health, screen for domestic abuse and coercive control, and offer support; assess her own wishes (distinct from the family\u2019s); and handle it with cultural sensitivity, confidentiality and safeguarding. Avoid both colluding with sex selection and condemning or abandoning a woman who may be a victim of abuse. No NG12 link.',
    script:{
      opening:'(Subdued, anxious.) "We found out it\u2019s a girl. We already have two daughters. My husband\u2019s family\u2026 they expect a son, they\u2019ve made that very clear. There would be\u2026 consequences. I think I have to end this pregnancy. Can you arrange it? Please \u2014 I don\u2019t have a choice."',
      facts:[
        { topic:'The legal line \u2014 stated with compassion', text:'Abortion solely on the grounds of the FETUS\u2019S SEX is NOT lawful: the Abortion Act has no \u2018sex of the fetus\u2019 ground \u2014 terminations are authorised on specified grounds (e.g. risk to the woman\u2019s physical or mental health). A request purely for sex selection cannot be provided on that basis, and you must be honest about this. BUT deliver it without condemning her, recognising she may be under coercion \u2014 the law is the boundary, the woman is not the problem.' },
        { topic:'The real issue: coercion & abuse', text:'THE CLINICAL CORE \u2014 "there would be consequences / I don\u2019t have a choice" signals COERCION and possible DOMESTIC ABUSE, coercive control, or honour-based pressure. This is the priority: explore who is pressuring her, what the "consequences" are, and whether she is safe. A woman seeking to end a wanted pregnancy under family pressure is potentially a victim of abuse, not an offender. Shift the consultation toward her safety and autonomy.' },
        { topic:'Screen domestic abuse / coercive control', text:'Sensitively screen for domestic abuse and coercive control: threats, control, isolation, prior violence, control of finances/movement, and risk to her and her daughters. Ask in a SAFE, private way (ensure she is alone, no partner/family present). Assess immediate safety and risk (consider DASH-type risk factors). Coercive control is a crime; reproductive coercion is a recognised form of abuse.' },
        { topic:'Her own wishes, distinct from the family\u2019s', text:'Disentangle HER wishes from the family\u2019s demands: does SHE want to continue this pregnancy? Would she keep it if safe to do so? Explore her mental health, her feelings, and what she would choose free of pressure. If continuing the pregnancy threatens her mental health, that is a legitimate clinical consideration in its own right \u2014 but assessed honestly, not as a workaround for sex selection.' },
        { topic:'Support, safeguarding & referral', text:'Offer support: domestic-abuse services/IDVA, safety planning, counselling, and involve safeguarding (her safety and the safety of her existing children \u2014 and any honour-based abuse/forced-pressure concern, which has specific pathways). Maintain confidentiality with the usual safeguarding caveats. Offer follow-up and a way to contact you safely. Be culturally sensitive without excusing abuse \u2014 culture never justifies coercion or violence.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 the termination request is the visible tip of COERCION, fear and possible danger; she may be testing whether you will see her distress. She needs to be heard, to have her safety prioritised, to understand the legal position kindly, and to be offered a way out that does not abandon her. The skill is compassion plus honesty plus safeguarding \u2014 not collusion with sex selection and not cold legalism.' },
      ],
      ice:{
        ideas:'She must end the pregnancy because it is a girl and the family demands a son; feels she has "no choice".',
        concerns:'HIDDEN AGENDA \u2014 coercion, fear of "consequences", possible domestic/honour-based abuse; her safety and her daughters\u2019; her own wishes suppressed.',
        expectations:'For the doctor to arrange the termination. What she needs: honest explanation that sex-selective abortion isn\u2019t lawful (kindly), recognition and screening of coercion/abuse, her own wishes explored, and safeguarding/support \u2014 not collusion or condemnation.'
      },
      cues:['Termination requested purely because the fetus is female \u2014 not a lawful ground; state the legal line compassionately.','"There would be consequences / I don\u2019t have a choice" \u2014 coercion and possible domestic/honour-based abuse; this is the clinical priority.','Subdued, pressured woman \u2014 screen domestic abuse/coercive control safely; explore HER wishes; safeguarding + support, not collusion or condemnation.']
    },
    checkpoints:[
      { dom:'tasks', text:'Knows and explains \u2014 with compassion, not condemnation \u2014 that abortion SOLELY on the grounds of fetal sex is NOT lawful under the Abortion Act, without making the woman feel she is the wrongdoer' },
      { dom:'tasks', text:'Identifies the real clinical issue \u2014 COERCION and possible DOMESTIC/honour-based ABUSE behind the request \u2014 and prioritises her safety and autonomy over the termination logistics' },
      { dom:'tasks', text:'Screens DOMESTIC ABUSE / COERCIVE CONTROL sensitively and SAFELY (ensuring she is alone), assesses immediate risk to her and her children' },
      { dom:'tasks', text:'Disentangles HER wishes from the family\u2019s demands \u2014 explores whether she would continue the pregnancy if safe, and her mental health \u2014 honestly, not as a workaround for sex selection' },
      { dom:'tasks', text:'Offers SUPPORT and SAFEGUARDING: domestic-abuse services/IDVA, safety planning, counselling, safeguarding for her and her children, honour-based-abuse pathways, with appropriate confidentiality' },
      { dom:'rto',   text:'Responds to her distress with compassion and cultural sensitivity \u2014 without excusing abuse \u2014 making her feel heard and safe rather than judged or abandoned' },
      { dom:'rto',   text:'Balances honesty about the legal position with warmth, offering a way forward rather than cold legalism or collusion' },
      { dom:'gs',    text:'Safety-nets and follows up: safe contact arrangements, support referrals, safeguarding action, and review \u2014 compassion + honesty + safeguarding, not collusion with sex selection (no NG12 link)' },
    ],
    worked:[
      { lbl:'Hear her first', txt:'"Thank you for telling me \u2014 I can see how much pressure you\u2019re under, and I\u2019m glad you came. Before anything else, I want to understand what\u2019s happening for you."' },
      { lbl:'The "consequences"', txt:'"You mentioned there would be \u2018consequences\u2019 and that you don\u2019t feel you have a choice. That really worries me for you. Can you tell me what you\u2019re afraid would happen \u2014 and are you safe at home?"' },
      { lbl:'Screen safely', txt:'"Are you on your own just now? Good. Has anyone threatened you, controlled what you do, or hurt you or the girls? \u2026 I ask because no one should be forced into a decision like this, and there\u2019s real help if that\u2019s happening."' },
      { lbl:'The legal line, kindly', txt:'"I need to be honest with you, gently: ending a pregnancy just because the baby is a girl isn\u2019t something the law allows, so I can\u2019t arrange it on that basis. But please hear this \u2014 you are not the problem here. The pressure on you is."' },
      { lbl:'Her wishes', txt:'"Can I ask what YOU want, setting the family aside for a moment? If you felt safe, would you want to continue this pregnancy? \u2026 Your wishes and your wellbeing matter, and I\u2019ll help you protect them."' },
      { lbl:'Support + safeguarding', txt:'"I\u2019d like to put you in touch with a specialist support worker, think about your safety and the girls\u2019, and stay involved. I\u2019ll keep this confidential, sharing only what\u2019s needed to keep you safe. How can I contact you safely?"' },
    ],
    learning:'A request to terminate a pregnancy because of the fetus\u2019s sex sits on a difficult ethical and legal line that must be navigated with compassion and without judgement of the woman. Abortion solely on the grounds of fetal sex is not lawful \u2014 the Abortion Act contains no \u2018sex of the fetus\u2019 ground; terminations are authorised only on specified grounds (such as risk to the woman\u2019s physical or mental health) \u2014 so a termination requested purely for sex selection cannot be provided on that basis, and you must be honest about this while making clear the woman is not the wrongdoer. The dominant clinical issue, however, is the coercion behind the request: "there would be consequences / I don\u2019t have a choice" signals possible domestic abuse, coercive control or honour-based pressure, and a woman seeking to end a wanted pregnancy under family pressure is potentially a victim, not an offender \u2014 so prioritise her safety and autonomy. Screen for domestic abuse and coercive control sensitively and safely (ensuring she is alone), assess immediate risk to her and her existing children, and recognise reproductive coercion and coercive control as forms of abuse and crimes. Disentangle her own wishes from the family\u2019s demands \u2014 would she continue the pregnancy if safe? \u2014 and assess her mental health honestly rather than as a workaround for sex selection. Offer support and safeguarding (domestic-abuse services/IDVA, safety planning, counselling, safeguarding for her and her children, honour-based-abuse pathways) with appropriate confidentiality, and be culturally sensitive without ever excusing abuse. The hidden agenda is coercion, fear and possible danger; respond with compassion plus honesty plus safeguarding \u2014 neither colluding with sex selection nor abandoning her to cold legalism. No NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Abortion Act grounds (no fetal-sex ground) \u00b7 domestic abuse & coercive control \u00b7 honour-based abuse \u00b7 reproductive coercion \u00b7 safeguarding',
      points:[
        { h:'The legal line', t:'Abortion solely on the grounds of fetal sex is not lawful \u2014 no such ground exists in the Abortion Act. State this honestly and compassionately; the woman is not the wrongdoer.' },
        { h:'Coercion is the real issue', t:'"Consequences / no choice" signals domestic abuse, coercive control or honour-based pressure. Prioritise her safety and autonomy over termination logistics. She may be a victim, not an offender.' },
        { h:'Screen safely', t:'Screen domestic abuse/coercive control when she is alone; assess risk to her and her children (DASH-type factors). Coercive control and reproductive coercion are abuse/crimes.' },
        { h:'Her wishes', t:'Disentangle her wishes from the family\u2019s; explore whether she\u2019d continue if safe; assess mental health honestly (not as a sex-selection workaround).' },
        { h:'Support & safeguarding', t:'Domestic-abuse services/IDVA, safety planning, counselling, safeguarding for her and children, honour-based-abuse pathways; confidentiality with safeguarding caveats.' },
        { h:'Cultural sensitivity, not excuse', t:'Be culturally sensitive without excusing coercion or violence \u2014 culture never justifies abuse.' },
        { h:'Never do', t:'Never collude with/arrange sex-selective abortion; never condemn or abandon a coerced woman; never screen for abuse with family present; never miss the safeguarding dimension.' },
        { h:'Safety-net', t:'Safe contact arrangements, support referrals, safeguarding action, follow-up. (No NG12 link.)' }
      ]
    }
  };

  /* ====== 195. F2F — Pregnant at 15: safeguarding alongside choice ====== */
  const c195 = {
    id:'pregnant-at-15', title:'"I\u2019m 15 and pregnant \u2014 my boyfriend\u2019s 22, and I don\u2019t want any trouble"', type:'video', duration:12,
    meta:{ age:15, sex:'F', setting:'Video consultation \u2014 a pregnant 15-year-old, alone.', system:'Reproductive / Safeguarding \u2014 the under-16 pregnancy & child protection alongside choice' },
    brief:'Miss Caitlin Brophy, 15, presents alone, pregnant, and reveals her boyfriend is 22. The examined skills: hold SAFEGUARDING (this is the priority) ALONGSIDE supporting her reproductive choices with warmth and without judgement. Key issues: she is UNDER 16, so assess Gillick/Fraser competence for any treatment decision and her understanding; CHILD SEXUAL ABUSE/EXPLOITATION \u2014 a 15-year-old with a 22-year-old partner is a statutory and safeguarding concern (a child under 16 cannot consent in law; the age gap and dynamics raise abuse/CSE concerns) and this MUST be acted on (cannot be kept confidential where there is a child-protection risk); explore the relationship, consent, coercion, grooming, other risk factors; support her with the pregnancy decision (options, referral) non-judgementally; and balance confidentiality with the over-riding duty to protect a child. The trap is either ignoring the safeguarding/abuse issue to keep her happy, or being so focused on process that she feels punished and disengages. No NG12 link.',
    script:{
      opening:'"I think I\u2019m pregnant \u2014 I did a test at home. Please don\u2019t make a big thing of it. My boyfriend\u2019s a bit older \u2014 he\u2019s 22 \u2014 but he loves me, it\u2019s not like that. I just want to know my options and I don\u2019t want any trouble for him or my family finding out. Can you keep it between us?"',
      facts:[
        { topic:'Warmth first, safeguarding throughout', text:'Hold two things at once: genuine warmth and support for HER, and a clear-eyed safeguarding response. Thank her for coming, reassure her she is not in trouble, and centre her wellbeing \u2014 while recognising this consultation has a mandatory child-protection dimension you cannot set aside. The skill is doing both without making her feel either abandoned or policed.' },
        { topic:'The safeguarding/abuse concern is the priority', text:'CRITICAL \u2014 a 15-year-old (a CHILD in law, under the age of consent) with a 22-year-old partner is a SAFEGUARDING and potential CHILD SEXUAL ABUSE/EXPLOITATION concern. A child under 16 cannot legally consent to sexual activity; a significant age gap, "it\u2019s not like that" minimisation, secrecy and pressure are CSE red flags. This MUST be acted on per child-protection procedures \u2014 it cannot simply be "kept between us".' },
        { topic:'Confidentiality has limits here', text:'Be honest and kind about confidentiality: you keep things private WHERE YOU SAFELY CAN, but where a child is at risk of harm you have a DUTY to share information with safeguarding leads/children\u2019s services. Explain this BEFORE she discloses everything if possible, in a way that keeps her engaged ("I\u2019m on your side; some things I have to share to keep you safe, and I\u2019ll always tell you what I\u2019m doing"). Do not promise blanket secrecy you cannot keep.' },
        { topic:'Assess the relationship & wider risk', text:'Explore sensitively: how they met, the nature of the relationship, consent and coercion, whether others are involved (grooming/CSE networks), where she met him, gifts/substances/control, her home situation and other vulnerabilities, and the safety of any siblings. Gather what you can while keeping her trust. This informs the safeguarding referral and risk assessment.' },
        { topic:'Support her pregnancy choices too', text:'Do NOT let safeguarding eclipse compassionate reproductive care: assess Gillick/Fraser competence, give balanced, non-judgemental information on options (continuing, adoption, abortion), and arrange the appropriate referral and support. Her reproductive autonomy and her safeguarding both matter \u2014 she should feel supported in her choices, not punished for disclosing. Address contraception and STI screening.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 "don\u2019t make a big thing / keep it between us / it\u2019s not like that" is fear of trouble (for the boyfriend, herself, her family) and possibly normalisation of an abusive relationship. She may not recognise herself as at risk. The skill is to keep her trust while fulfilling the safeguarding duty, work WITH her where possible, and ensure she leaves feeling supported and safe \u2014 not that she has been reported and abandoned.' },
      ],
      ice:{
        ideas:'She just wants her options and for it to be kept quiet; sees the relationship as loving, "not like that".',
        concerns:'HIDDEN AGENDA \u2014 fear of trouble for the boyfriend/herself/family; possible normalisation of an abusive/CSE relationship; doesn\u2019t see herself as at risk.',
        expectations:'Confidential help with options and no fuss. What she needs: warmth and support PLUS a safeguarding response \u2014 honest limits to confidentiality, CSE/abuse assessment, child-protection referral, and compassionate pregnancy-options care.'
      },
      cues:['15 and pregnant with a 22-year-old partner \u2014 statutory + safeguarding/CSE concern; the priority; cannot be kept fully confidential.','"It\u2019s not like that / don\u2019t make a fuss / keep it between us" \u2014 minimisation and fear; explain confidentiality limits kindly, keep her engaged.','Hold safeguarding ALONGSIDE choice \u2014 assess competence, give non-judgemental options/referral, so she feels supported not punished.']
    },
    checkpoints:[
      { dom:'tasks', text:'Holds WARMTH/support for her ALONGSIDE a clear safeguarding response \u2014 centring her wellbeing while recognising the mandatory child-protection dimension' },
      { dom:'tasks', text:'Identifies the SAFEGUARDING/CSE concern as the priority \u2014 a 15-year-old (under the age of consent) with a 22-year-old partner is a child-protection issue that must be acted on, not kept confidential' },
      { dom:'tasks', text:'Handles CONFIDENTIALITY honestly \u2014 explains its limits before full disclosure where possible, does not promise blanket secrecy, and keeps her engaged ("I\u2019ll tell you what I\u2019m doing")' },
      { dom:'tasks', text:'Assesses the relationship and wider risk sensitively (consent, coercion, grooming/CSE indicators, others involved, home/vulnerabilities, sibling safety) to inform the safeguarding referral' },
      { dom:'tasks', text:'Supports her pregnancy choices too \u2014 assesses Gillick/Fraser competence, gives balanced non-judgemental options/referral, addresses contraception/STI \u2014 so safeguarding does not eclipse compassionate care' },
      { dom:'rto',   text:'Keeps her TRUST while fulfilling the safeguarding duty \u2014 works with her where possible, avoids making her feel reported and abandoned or policed' },
      { dom:'rto',   text:'Responds to the minimisation ("it\u2019s not like that") and fear of trouble with warmth, without colluding with an abusive dynamic' },
      { dom:'gs',    text:'Safety-nets and acts: makes the child-protection referral to safeguarding leads/children\u2019s services, arranges support and pregnancy-options follow-up, documents, and keeps a safe contact route \u2014 safeguarding alongside choice (no NG12 link)' },
    ],
    worked:[
      { lbl:'Warmth + reassurance', txt:'"You\u2019re not in trouble, and you did the right thing coming to me. I\u2019m on your side here, and we\u2019ll go through your options together. First, let me understand things so I can help properly."' },
      { lbl:'Honest about confidentiality', txt:'"I want to be straight with you about one thing up front: I keep things private wherever I can, but if I think you might be at risk of harm, I have to share that with people whose job is to keep you safe \u2014 and I\u2019d always tell you what I\u2019m doing. I won\u2019t go behind your back."' },
      { lbl:'Explore gently', txt:'"You said your boyfriend\u2019s 22. Can you tell me how you met, and how things are between you? \u2026 I\u2019m not judging you \u2014 I ask because at 15 the law sees you as a child, and part of my job is making sure no one\u2019s taking advantage of you."' },
      { lbl:'Name the duty, kindly', txt:'"Because of your age and his, this is something I do have to share with our safeguarding team \u2014 not to get you in trouble, but to make sure you\u2019re safe and supported. I\u2019ll help you through it; you won\u2019t be on your own."' },
      { lbl:'Support her choice', txt:'"At the same time, this is about what YOU want with the pregnancy. Let me talk you through all your options with no pressure, and get you the right support and appointments."' },
      { lbl:'Holistic + safe contact', txt:'"Let\u2019s also sort contraception and check for infections when you\u2019re ready. How can I reach you safely? I\u2019ll stay involved \u2014 my job is to keep you safe AND respect your choices."' },
    ],
    learning:'A pregnant 15-year-old whose partner is 22 requires safeguarding to be held ALONGSIDE compassionate support of her reproductive choices. Lead with warmth \u2014 reassure her she is not in trouble and centre her wellbeing \u2014 while recognising a mandatory child-protection dimension that cannot be set aside. The priority is the safeguarding/child-sexual-exploitation concern: a 15-year-old is a child below the age of consent, a 22-year-old partner with a significant age gap, minimisation ("it\u2019s not like that"), secrecy and pressure are CSE red flags, and this must be acted on under child-protection procedures \u2014 it cannot simply be "kept between us". Handle confidentiality honestly: keep things private where you safely can, but where a child is at risk you have a duty to share information with safeguarding leads/children\u2019s services; explain this before full disclosure where possible and keep her engaged ("I\u2019m on your side; I\u2019ll always tell you what I\u2019m doing"), never promising blanket secrecy you cannot keep. Explore the relationship and wider risk sensitively (consent, coercion, grooming, others involved, home situation, sibling safety) to inform the referral. Crucially, do not let safeguarding eclipse compassionate reproductive care: assess Gillick/Fraser competence, give balanced non-judgemental information on options and arrange referral and support, and address contraception and STI screening, so she feels supported in her choices rather than punished for disclosing. The hidden agenda is fear of trouble and possible normalisation of an abusive relationship in which she may not see herself as at risk; keep her trust while fulfilling the duty, work with her where possible, make the child-protection referral, and ensure she leaves feeling supported and safe. No NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Under-16 safeguarding & age of consent \u00b7 CSE \u00b7 Gillick/Fraser \u00b7 confidentiality limits \u00b7 child protection referral',
      points:[
        { h:'Warmth + safeguarding together', t:'Support her wellbeing and choices while fulfilling a mandatory child-protection response. Do both \u2014 neither abandon nor police her.' },
        { h:'CSE/abuse is the priority', t:'A 15-year-old (under the age of consent) with a 22-year-old partner is a safeguarding/CSE concern that must be acted on. A child under 16 cannot legally consent to sexual activity; age gap, secrecy and minimisation are red flags.' },
        { h:'Confidentiality limits', t:'Keep private where safe, but share with safeguarding/children\u2019s services where a child is at risk. Explain limits before disclosure; don\u2019t promise blanket secrecy; tell her what you\u2019re doing.' },
        { h:'Assess relationship & risk', t:'How they met, consent/coercion, grooming/others involved, home situation, vulnerabilities, sibling safety \u2014 to inform the referral while keeping trust.' },
        { h:'Support her choices', t:'Assess Gillick/Fraser competence; non-judgemental options (continue/adoption/abortion) and referral; contraception and STI screening. Safeguarding must not eclipse compassionate care.' },
        { h:'Keep her trust', t:'Work with her where possible; respond to minimisation with warmth, not collusion; ensure she feels supported, not reported and abandoned.' },
        { h:'Never do', t:'Never promise to keep an under-16/older-partner situation secret; never ignore CSE to keep her happy; never let safeguarding process make her feel punished; never skip competence/options care.' },
        { h:'Safety-net & act', t:'Refer to safeguarding leads/children\u2019s services, arrange support and pregnancy-options follow-up, document, keep a safe contact route. (No NG12 link.)' }
      ]
    }
  };

  /* ====== 196. F2F — HIV test request from a frightened teenager: window periods + confidentiality ====== */
  const c196 = {
    id:'hiv-test-teen', title:'"I did something stupid and I\u2019m terrified I\u2019ve got HIV \u2014 can you test me, secretly?"', type:'video', duration:12,
    meta:{ age:17, sex:'M', setting:'Video consultation \u2014 a frightened teenager requesting an HIV test.', system:'Sexual health / Ethics \u2014 HIV testing, window periods, PEP & confidentiality in a young person' },
    brief:'A 17-year-old, Jordan Mescal, presents frightened after a recent unprotected sexual encounter, requesting a secret HIV test. The examined skills: provide non-judgemental sexual-health care to a young person; assess CONFIDENTIALITY/competence (he is entitled to confidential care; encourage but don\u2019t force involving others; safeguarding screen for exploitation/abuse given age and circumstances); take a focused RISK history (type of exposure, partner, timing); explain HIV TESTING and the WINDOW PERIOD correctly (4th-generation antigen/antibody tests detect most infections by ~4 weeks, with a definitive test at ~6\u201312 weeks/45 days depending on assay \u2014 a negative test before the window closes does not exclude infection and must be repeated); crucially, recognise if the exposure is RECENT (within 72 hours) when post-exposure prophylaxis (PEP) is URGENT and time-critical; offer broader STI screening, hepatitis B/C, vaccination, contraception/condoms and risk-reduction; and contain his fear with calm, accurate information. No NG12 link.',
    script:{
      opening:'(Anxious, embarrassed.) "I need an HIV test. I did something stupid a few days ago \u2014 unprotected \u2014 and I\u2019ve been reading stuff online and I\u2019m absolutely terrified I\u2019ve caught HIV. Can you just test me now, today, and not tell anyone \u2014 especially not my parents? Will the test tell me for sure right now?"',
      facts:[
        { topic:'Non-judgement + confidentiality', text:'Lead with calm, non-judgemental reassurance \u2014 he\u2019s done the right thing coming. He is entitled to CONFIDENTIAL care: a competent young person can access sexual-health services confidentially; encourage but do not force involving a parent. Be clear about confidentiality and its limits (safeguarding). This trust is essential for him to engage and for honest risk assessment.' },
        { topic:'The 72-hour question \u2014 PEP is time-critical', text:'CRITICAL FIRST \u2014 establish exactly WHEN the exposure was. If it was within 72 HOURS and the risk is significant, post-exposure prophylaxis (PEP) may be indicated and is URGENT \u2014 refer same-day to sexual health/A&E for assessment, as PEP must start as soon as possible (ideally within 24 hours, no later than 72). "A few days ago" \u2014 clarify the exact timing; if still within window, this becomes an emergency pathway, not just a test.' },
        { topic:'The window period \u2014 explain accurately', text:'Answer "will it tell me for sure now?" honestly: HIV tests have a WINDOW PERIOD. Modern 4th-generation lab tests (antigen/antibody) detect most infections by about 4 weeks, but a CONCLUSIVE result requires testing at the appropriate point (commonly a repeat at 6\u201312 weeks / 45 days depending on assay). A test done too soon can be falsely negative \u2014 so a negative result now does NOT exclude infection and must be REPEATED after the window. Manage his expectation of instant certainty.' },
        { topic:'Risk assessment & broader screen', text:'Take a focused risk history: type of exposure (receptive/insertive, oral/anal/vaginal), partner\u2019s known status/risk, condom use, other recent partners, substance use. Offer a BROADER STI screen (chlamydia, gonorrhoea, syphilis), HEPATITIS B/C testing and hepatitis B vaccination, and discuss the small per-exposure HIV transmission risk realistically to calibrate (without dismissing). Consider PrEP discussion for future risk.' },
        { topic:'Safeguarding awareness', text:'Even at 17, keep a SAFEGUARDING lens: was the encounter consensual, any exploitation, coercion, substance involvement, older/abusive partner, or vulnerability? Most 17-year-olds are simply frightened after consensual risk-taking, but screen sensitively and act if there are concerns. Confidentiality yields to safeguarding where there is risk of harm.' },
        { topic:'Contain the fear + risk reduction', text:'Address the FEAR directly \u2014 online reading has amplified it. Give calm, accurate information, the realistic (usually low) risk, the testing plan, and the safety-net. Provide condoms, risk-reduction advice and PrEP information, and arrange follow-up testing. The emotional containment is as important as the clinical plan \u2014 a terrified teenager needs reassurance grounded in facts and a clear path.' },
      ],
      ice:{
        ideas:'He may have caught HIV from one unprotected encounter; a test today will tell him for sure; it must be secret.',
        concerns:'HIDDEN AGENDA \u2014 terror (amplified by online reading), shame, fear of parents finding out; wants certainty and secrecy.',
        expectations:'An immediate, secret, definitive HIV test. What he needs: confidentiality clarified, the 72-hour/PEP question addressed urgently, the window period explained honestly, broader STI/hepatitis screen, safeguarding awareness, and fear contained.'
      },
      cues:['"A few days ago, unprotected, terrified of HIV" \u2014 FIRST establish exact timing: within 72h \u2192 PEP is urgent, same-day referral.','"Will it tell me for sure now?" \u2014 explain the window period; a negative test before the window closes doesn\u2019t exclude infection \u2014 repeat needed.','Frightened 17-year-old wanting secrecy \u2014 confidential non-judgemental care + safeguarding lens; contain the online-amplified fear with facts.']
    },
    checkpoints:[
      { dom:'tasks', text:'Provides non-judgemental care and clarifies CONFIDENTIALITY/competence \u2014 confidential care for a competent young person, encouraging but not forcing parental involvement, with safeguarding limits explained' },
      { dom:'tasks', text:'Establishes the EXACT TIMING of exposure FIRST and recognises that within 72 HOURS with significant risk, PEP is URGENT \u2014 same-day referral to sexual health/A&E (ideally within 24h)' },
      { dom:'tasks', text:'Explains the WINDOW PERIOD accurately \u2014 4th-generation tests detect most infections by ~4 weeks but a conclusive result needs testing at the right point (repeat ~6\u201312 weeks/45 days); a negative test before the window closes does not exclude infection' },
      { dom:'tasks', text:'Takes a focused RISK history and offers a BROADER screen (chlamydia, gonorrhoea, syphilis, hepatitis B/C, hep B vaccination) and discusses realistic transmission risk and PrEP for the future' },
      { dom:'tasks', text:'Keeps a SAFEGUARDING lens (consent, exploitation, coercion, vulnerability) and acts if concerns arise' },
      { dom:'rto',   text:'Contains the online-amplified FEAR with calm, accurate information and realistic risk \u2014 reassuring without dismissing \u2014 and responds to shame non-judgementally' },
      { dom:'rto',   text:'Explains the testing plan and confidentiality clearly so a frightened teenager trusts and engages' },
      { dom:'gs',    text:'Safety-nets and follows up: PEP pathway if in window, repeat-testing timeline, STI/hepatitis results, condoms/PrEP/risk-reduction, safe contact and review \u2014 calm, accurate, confidential care (no NG12 link)' },
    ],
    worked:[
      { lbl:'Calm + non-judgement', txt:'"You did absolutely the right thing coming in, and there\u2019s no judgement here at all. Let\u2019s sort this out together calmly \u2014 I think you\u2019ll feel better once we have a plan."' },
      { lbl:'Confidentiality', txt:'"This is confidential \u2014 I won\u2019t tell your parents. The only exception is if I were worried you were being harmed, and I\u2019d talk to you first. Otherwise, it stays between us."' },
      { lbl:'The timing question first', txt:'"The most important thing right now \u2014 exactly when did this happen? \u2026 If it\u2019s within the last three days, there\u2019s a medicine that can dramatically cut the chance of HIV taking hold, but it\u2019s urgent, so I\u2019d send you to the sexual-health clinic or A&E today."' },
      { lbl:'Window period honesty', txt:'"On testing today \u2014 I\u2019ll be honest: a test now can\u2019t give you a guaranteed all-clear, because HIV takes a few weeks to show up. The modern test picks up most infections by about four weeks, and we confirm with a repeat later. A negative now wouldn\u2019t fully reassure us yet \u2014 so we test now and again."' },
      { lbl:'Broaden + calibrate', txt:'"While we\u2019re at it, let\u2019s check for other infections too \u2014 chlamydia, gonorrhoea, syphilis, hepatitis \u2014 and I can vaccinate you against hepatitis B. For what it\u2019s worth, the chance from a single encounter is usually low, but we test properly rather than guess."' },
      { lbl:'Reassure + safety-net', txt:'"I know the internet has terrified you \u2014 let\u2019s replace that with facts and a plan. Here are condoms and info on a prevention medicine called PrEP for the future. Come back for the repeat test, and contact me anytime you\u2019re worried. You\u2019re handling this really responsibly."' },
    ],
    learning:'A frightened teenager requesting an HIV test after unprotected sex needs non-judgemental, confidential sexual-health care delivered with calm. He is entitled to confidential care as a competent young person \u2014 encourage but do not force involving a parent, and be clear about confidentiality\u2019s safeguarding limits, as this trust enables honest risk assessment. The critical first step is establishing the EXACT timing of the exposure: if it was within 72 hours and the risk is significant, post-exposure prophylaxis (PEP) may be indicated and is urgent and time-critical \u2014 refer same-day to sexual health or A&E, as PEP should start as soon as possible (ideally within 24 hours, never beyond 72). Answer "will it tell me for sure now?" honestly: HIV tests have a window period \u2014 modern 4th-generation antigen/antibody lab tests detect most infections by about 4 weeks, but a conclusive result requires testing at the appropriate point (commonly a repeat at 6\u201312 weeks / 45 days depending on assay), so a negative test done too soon does not exclude infection and must be repeated. Take a focused risk history (type of exposure, partner status/risk, condom use, other partners, substances), offer a broader screen (chlamydia, gonorrhoea, syphilis, hepatitis B/C with hepatitis B vaccination), calibrate the realistic (usually low) per-exposure transmission risk without dismissing the fear, and discuss PrEP for future risk. Keep a safeguarding lens (consent, exploitation, coercion, vulnerability) and act on concerns. Above all, contain the online-amplified fear with accurate information, a clear testing plan and a safety-net, providing condoms and risk-reduction advice \u2014 the emotional containment matters as much as the clinical plan. No NG12 cancer pathway applies.',
    knowledge:{
      guideline:'HIV testing & window period \u00b7 PEP (within 72h) \u00b7 BASHH STI screening \u00b7 young people confidentiality & safeguarding \u00b7 PrEP',
      points:[
        { h:'Confidential, non-judgemental', t:'Competent young people are entitled to confidential sexual-health care; encourage but don\u2019t force parental involvement; explain safeguarding limits. Trust enables honest assessment.' },
        { h:'PEP is time-critical', t:'Establish exposure timing first. Within 72 hours with significant risk \u2192 PEP urgent; refer same-day to sexual health/A&E (ideally <24h). Don\u2019t miss the window.' },
        { h:'Window period', t:'4th-generation tests detect most infections by ~4 weeks; conclusive result needs testing at the right point (repeat ~6\u201312 weeks/45 days). A negative before the window closes does not exclude infection \u2014 repeat.' },
        { h:'Broader screen', t:'Chlamydia, gonorrhoea, syphilis, hepatitis B/C; hepatitis B vaccination; realistic transmission-risk discussion; PrEP for future risk.' },
        { h:'Safeguarding lens', t:'Screen consent, exploitation, coercion, vulnerability even at 17; act on concerns; confidentiality yields to safeguarding where there is risk of harm.' },
        { h:'Contain the fear', t:'Online reading amplifies terror. Give calm, accurate information, realistic risk, a clear plan and safety-net; address shame non-judgementally. Emotional containment matters.' },
        { h:'Never do', t:'Never delay assessing PEP eligibility; never imply a single early test is definitive; never breach confidentiality without safeguarding grounds; never dismiss the fear or moralise.' },
        { h:'Safety-net & follow-up', t:'PEP pathway if in window, repeat-testing timeline, STI/hepatitis results, condoms/PrEP/risk reduction, safe contact and review. (No NG12 link.)' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c193, c194, c195, c196);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'teen-abortion-gillick': {
      ceg: ['Children & young people', 'Professional & ethical dilemmas'],
      stem: {
        name: 'Erin Doyle', age: '16 years \u00b7 female',
        pmh: ['Pregnant ~7 weeks (positive test) \u2014 attends alone', 'Has decided she wants a termination', 'Does not want her mother told'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"I\u2019m 16 and pregnant \u2014 I want a termination, and I don\u2019t want my mum told."',
        reason: 'Video consultation \u2014 a 16-year-old requesting abortion, alone.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Safe, non-judgemental tone', d:'No lecture; centre her; reassure she\u2019s in the right place.' },
        { t:'2\u20134',  h:'Competence + confidentiality', d:'At 16 can consent; confidentiality hers; encourage (not force) support.' },
        { t:'4\u20137',  h:'Safeguarding screen', d:'Father\u2019s age, consent, coercion/CSE \u2014 woven in sensitively, not policing.' },
        { t:'7\u20139',  h:'Balanced info + referral', d:'Non-directive options; prompt referral to abortion services (earlier simpler).' },
        { t:'9\u201312', h:'Holistic + safety-net', d:'Contraception, STI screen; contacts; proportionate safeguarding action.' }
      ],
      wordPics: {
        fail: 'Editorialises/steers, or breaches confidentiality to tell her mother; misses the CSE/safeguarding screen; delays referral.',
        pass: 'Affirms competence, respects confidentiality, screens safeguarding and refers promptly without judgement.',
        exc:  'Delivers warm non-judgemental care, affirms competence and confidentiality, weaves in a sensitive safeguarding screen, gives balanced information and prompt referral, and addresses contraception/STI \u2014 ethics under warmth.'
      },
      avoid: [
        { dont:'"Are you sure? Have you thought about keeping it / what your mum would want?"', instead:'"You\u2019ve thought this through and I\u2019ll support your decision \u2014 here are your options with no pressure either way."', why:'Editorialising/steering breaches non-judgemental care and her autonomy.' },
        { dont:'"At 16 I really should tell a parent."', instead:'"This is your decision and confidential; I\u2019d encourage support from someone you trust, but I won\u2019t tell your mum without your say-so."', why:'A competent 16-year-old is entitled to confidential care.' },
        { dont:'(Skipping) not asking about the father/consent.', instead:'"Can I ask who the father is and how old, and that everything was something you wanted? I ask everyone."', why:'A pregnant minor needs a safeguarding/CSE screen woven in.' }
      ]
    },

    'sex-selective-termination': {
      ceg: ['Professional & ethical dilemmas', 'Ethnicity, culture & diversity'],
      stem: {
        name: 'Anjali Sharma', age: '31 years \u00b7 female',
        pmh: ['Pregnant \u2014 fetus female; already has two daughters', '\u26a0 In-law pressure for a son; "there would be consequences"', 'Subdued, anxious, feels she has no choice'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"It\u2019s another girl \u2014 my family expects a son. I want to end this pregnancy."',
        reason: 'Video consultation \u2014 a request to terminate based on fetal sex.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Hear her', d:'Compassion first; understand the pressure before any legal point.' },
        { t:'2\u20135',  h:'Coercion + safety', d:'"Consequences" \u2192 explore; is she safe? Domestic/honour-based abuse screen (alone).' },
        { t:'5\u20137',  h:'The legal line kindly', d:'Sex-selective abortion not lawful; she is not the wrongdoer \u2014 the pressure is.' },
        { t:'7\u20139',  h:'Her wishes', d:'Disentangle her wishes from family\u2019s; mental health assessed honestly.' },
        { t:'9\u201312', h:'Support + safeguarding', d:'IDVA/DA services, safety planning, safeguarding her + daughters; safe contact.' }
      ],
      wordPics: {
        fail: 'Either arranges a sex-selective termination (unlawful) or coldly refuses and ends it; misses the coercion/abuse and her safety.',
        pass: 'States the legal line compassionately, screens coercion/abuse and offers support and safeguarding.',
        exc:  'Hears her with compassion, recognises coercion/possible abuse as the core, screens safely, explains the legal line kindly without blaming her, explores her own wishes, and arranges DA/safeguarding support with safe contact.'
      },
      avoid: [
        { dont:'"I\u2019ll arrange the termination for you."', instead:'"Ending a pregnancy just because it\u2019s a girl isn\u2019t something the law allows \u2014 but you are not the problem here; the pressure on you is."', why:'Sex-selective abortion is unlawful; collusion fails the woman and the law.' },
        { dont:'"That\u2019s illegal \u2014 I can\u2019t help you." (and ends)', instead:'"Let\u2019s focus on you and your safety \u2014 are you safe at home? There\u2019s real support."', why:'Cold legalism abandons a likely victim of coercion/abuse.' },
        { dont:'(Family present) screening with the husband in the room.', instead:'"Are you on your own just now? Has anyone threatened or controlled you?"', why:'Abuse screening must happen safely, alone.' }
      ]
    },

    'pregnant-at-15': {
      ceg: ['Health disadvantage & vulnerabilities', 'Children & young people'],
      stem: {
        name: 'Caitlin Brophy', age: '15 years \u00b7 female',
        pmh: ['Pregnant (home test) \u2014 attends alone', '\u26a0 Boyfriend is 22 (under-age / CSE concern)', 'Minimises ("it\u2019s not like that"); wants secrecy'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"I\u2019m 15 and pregnant \u2014 my boyfriend\u2019s 22, and I don\u2019t want any trouble."',
        reason: 'Video consultation \u2014 a pregnant 15-year-old, alone.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Warmth + not in trouble', d:'Reassure; centre her; signal you\u2019re on her side.' },
        { t:'2\u20134',  h:'Confidentiality limits', d:'Private where safe; must share if at risk; tell her what you\u2019re doing.' },
        { t:'4\u20137',  h:'CSE/relationship screen', d:'How they met, consent/coercion, grooming, home/vulnerability, siblings.' },
        { t:'7\u20139',  h:'Name the duty kindly', d:'Age gap \u2192 safeguarding referral; not to punish, to protect; she\u2019s not alone.' },
        { t:'9\u201312', h:'Support choice + safe contact', d:'Competence, non-judgemental options/referral, contraception/STI; safe contact.' }
      ],
      wordPics: {
        fail: 'Promises full secrecy and doesn\u2019t act on the CSE concern; or processes the referral so coldly she feels punished and disengages.',
        pass: 'Holds safeguarding and support together, explains confidentiality limits, screens CSE and refers while keeping her trust.',
        exc:  'Leads with warmth, is honest about confidentiality limits, screens the relationship/CSE sensitively, makes the safeguarding referral while keeping her engaged, and supports her pregnancy choices \u2014 safeguarding alongside choice.'
      },
      avoid: [
        { dont:'"I\u2019ll keep it all between us, don\u2019t worry."', instead:'"I keep things private where I can, but because of your age and his I do have to involve the people who keep you safe \u2014 and I\u2019ll always tell you what I\u2019m doing."', why:'A 15-year-old with a 22-year-old partner cannot be kept confidential; promising secrecy is unsafe and undeliverable.' },
        { dont:'(Cold process) "This has to be reported." (and little else)', instead:'"This is to keep you safe, not to get you in trouble \u2014 I\u2019ll support you through it, and we\u2019ll sort your options too."', why:'Cold handling makes her feel punished and disengage.' },
        { dont:'(Only safeguarding) ignoring her pregnancy decision.', instead:'"At the same time, let\u2019s talk through what YOU want with the pregnancy, no pressure."', why:'Safeguarding must not eclipse compassionate reproductive care.' }
      ]
    },

    'hiv-test-teen': {
      ceg: ['Children & young people', 'Urgent & unscheduled care'],
      stem: {
        name: 'Jordan Mescal', age: '17 years \u00b7 male',
        pmh: ['Recent unprotected sexual encounter (clarify exact timing)', 'Terrified of HIV after online reading', 'Wants a secret, immediate, definitive test'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"I did something stupid and I\u2019m terrified I\u2019ve got HIV \u2014 can you test me, secretly?"',
        reason: 'Video consultation \u2014 a frightened teenager requesting an HIV test.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Calm + confidentiality', d:'Non-judgemental; confidential care; safeguarding limits.' },
        { t:'2\u20134',  h:'Timing \u2192 PEP', d:'Exact timing FIRST; within 72h + risk \u2192 urgent same-day PEP referral.' },
        { t:'4\u20137',  h:'Window period', d:'4th-gen by ~4 weeks; conclusive repeat ~6\u201312 weeks; negative now doesn\u2019t exclude.' },
        { t:'7\u20139',  h:'Broader screen + risk', d:'Chlamydia/gonorrhoea/syphilis/hepatitis; hep B vaccine; realistic risk; PrEP.' },
        { t:'9\u201312', h:'Safeguard + contain fear', d:'Consent/exploitation lens; condoms/risk reduction; safe contact; repeat-test plan.' }
      ],
      wordPics: {
        fail: 'Tests today and gives false "all clear"; misses the 72h PEP window; breaches confidentiality or moralises; ignores the broader screen.',
        pass: 'Clarifies timing/PEP, explains the window period, offers a broader screen and confidential care with a safety-net.',
        exc:  'Provides calm confidential care, establishes timing and refers urgently for PEP if in window, explains the window period honestly, offers full STI/hepatitis screening and PrEP, keeps a safeguarding lens, and contains the fear with facts.'
      },
      avoid: [
        { dont:'"Let\u2019s test now \u2014 if it\u2019s negative you\u2019re in the clear."', instead:'"A test now can\u2019t fully reassure us yet because of the window period \u2014 we test now and repeat later."', why:'An early negative does not exclude HIV; implying certainty is wrong.' },
        { dont:'(Missing PEP) not asking exact timing.', instead:'"Exactly when did this happen? If it\u2019s within 72 hours there\u2019s an urgent medicine that can prevent HIV."', why:'PEP is time-critical and must be assessed first.' },
        { dont:'"At 17 I may need to tell your parents."', instead:'"This is confidential \u2014 I won\u2019t tell your parents unless I\u2019m worried you\u2019re being harmed, and I\u2019d tell you first."', why:'Competent young people are entitled to confidential sexual-health care.' }
      ]
    }

  });

})();
