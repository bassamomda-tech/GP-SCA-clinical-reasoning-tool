/* ============================================================
   Reasoning GP — Case Library batch 52:
   "Children, young people & the skin"
   Four ORIGINAL cases: childhood obesity (the conversation that
   doesn't shame), behaviour concerns at school (ADHD pathway
   without pre-judging), an eczema flare with steroid phobia in
   the room, and a cousin at risk of FGM abroad (the mandatory
   safeguarding duties). None map to an NG12 cancer pathway; none
   is invented. Child-protection duties are stated where they
   genuinely apply.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases51.js.
   ============================================================ */

(function(){

  /* ====== 201. F2F — Obesity in a 9-year-old: the conversation that doesn't shame ====== */
  const c201 = {
    id:'child-obesity', title:'"The school sent a letter saying my son is obese \u2014 I\u2019m furious and embarrassed"', type:'video', duration:12,
    meta:{ age:9, sex:'M', setting:'Video consultation \u2014 childhood weight (mother and child present).', system:'Paediatrics / Childhood obesity \u2014 a non-shaming, whole-family conversation' },
    brief:'Mrs Donna Pyle brings her son Kai, 9, after the National Child Measurement Programme letter labelled him "very overweight/obese"; she is upset, defensive and embarrassed, and Kai is in the room. The examined skills: handle a SENSITIVE, easily-shaming topic with compassion and ZERO blame \u2014 especially with the child present; confirm the assessment objectively (BMI CENTILE on a growth chart, not adult BMI), exclude the rare secondary/endocrine causes and screen for comorbidity (e.g. impaired glucose/lipids in higher-risk, sleep apnoea, joint/skin problems, mood/bullying); take a WHOLE-FAMILY lifestyle history without judgement (diet, drinks, activity, screen time, sleep, family habits); and co-create small, realistic, FAMILY-based changes (not "putting a child on a diet") with positive framing, signposting to family weight-management programmes. Protect the child\u2019s self-esteem and watch for the emotional/bullying impact and any safeguarding/neglect concern in extreme cases. No NG12 link.',
    script:{
      opening:'"I\u2019ll be honest, I\u2019m fuming. The school sent this letter saying Kai\u2019s \u2018obese\u2019 \u2014 obese! He\u2019s just a growing boy, he\u2019s not fat. I feel like they\u2019re calling me a bad mother. And now he\u2019s upset about it. I almost didn\u2019t come. What are you going to say \u2014 put a 9-year-old on a diet?"',
      facts:[
        { topic:'Defuse, de-shame, mind the child', text:'FIRST \u2014 the topic is loaded with shame and the CHILD is present. Acknowledge her feelings ("I can see this letter has upset you, and I don\u2019t think you\u2019re a bad mother"), be warm and non-judgemental, and be mindful of every word in front of Kai \u2014 avoid the word "fat", avoid blame, and protect his self-esteem. The relationship and tone determine whether the family engages or disengages entirely.' },
        { topic:'Assess objectively \u2014 BMI centile', text:'Confirm the picture properly: in children, weight is assessed by BMI CENTILE for age and sex on a growth chart (NOT adult BMI cut-offs) \u2014 plot height, weight and BMI centile and look at the trajectory. This grounds the conversation in objective data rather than the emotive label, and lets you explain it accurately and calmly.' },
        { topic:'Exclude secondary causes & screen comorbidity', text:'Most childhood obesity is lifestyle-related, but consider/exclude the uncommon secondary causes (endocrine \u2014 hypothyroidism, Cushing\u2019s; genetic syndromes \u2014 often with SHORT stature, developmental delay, or dysmorphism \u2014 a tall child growing along centiles is reassuring against these). Screen for COMORBIDITY/complications: blood pressure, signs of insulin resistance (acanthosis nigricans), consider HbA1c/lipids in higher-risk, sleep apnoea (snoring/daytime sleepiness), joint/orthopaedic issues, and crucially MOOD, bullying and self-esteem.' },
        { topic:'Whole-family lifestyle history \u2014 no judgement', text:'Take a non-judgemental lifestyle history of the WHOLE family: typical meals, sugary drinks/snacks, portion sizes, physical activity and active travel, screen time, sleep, and family routines (children eat and move as their family does). Frame this as understanding, not interrogating. Identify achievable levers and the family\u2019s readiness and circumstances (cost, time, access).' },
        { topic:'Small, realistic FAMILY changes \u2014 not "a diet"', text:'Manage as a FAMILY, not by dieting a child: agree small, specific, realistic, POSITIVE changes (e.g. swap sugary drinks for water; one more active session a week; smaller plates; family meals; reduce screen time; better sleep) framed around health, energy and growing well rather than weight/appearance. Children should generally maintain weight while growing into it, rather than lose weight. Signpost to a family weight-management programme/tier-2 service and the school nurse, and review. Keep Kai positive and involved.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 the mother\u2019s anger masks SHAME, guilt and feeling judged as a parent, plus protectiveness of her son; she fears blame and a child being "dieted". Kai may already be teased/bullied and feel ashamed. The skill is to remove blame, ally WITH the family against the problem, protect the child, and turn a defensive encounter into a supportive, hopeful, practical plan \u2014 watching for emotional impact and, in extreme/neglect situations, any safeguarding concern.' },
      ],
      ice:{
        ideas:'Kai is "just a growing boy", not fat; the letter is judging her parenting; fears the doctor will "put him on a diet".',
        concerns:'HIDDEN AGENDA \u2014 shame, guilt, feeling judged as a parent; protectiveness; the child\u2019s upset/possible bullying.',
        expectations:'To defend her son/parenting. What she needs: a non-shaming conversation, objective BMI-centile assessment, comorbidity/secondary-cause screen, a whole-family non-judgemental approach with small realistic changes, and protection of the child.'
      },
      cues:['NCMP "obese" letter, defensive mother, child in the room \u2014 de-shame, mind every word, protect the child\u2019s self-esteem.','Assess objectively by BMI CENTILE (not adult BMI); exclude rare endocrine/genetic causes (short stature/delay) and screen comorbidity/mood/bullying.','"Put a 9-year-old on a diet?" \u2014 manage as a WHOLE FAMILY with small positive changes (maintain weight while growing), not dieting; signpost.']
    },
    checkpoints:[
      { dom:'tasks', text:'Handles the topic with ZERO blame and compassion \u2014 acknowledges the mother\u2019s feelings, is mindful of the CHILD in the room (avoids "fat"/blame) and protects his self-esteem' },
      { dom:'tasks', text:'Assesses objectively with BMI CENTILE for age/sex on a growth chart (not adult BMI), plotting trajectory to ground the conversation in data' },
      { dom:'tasks', text:'Considers/excludes secondary causes (endocrine/genetic \u2014 often with short stature/delay) and screens COMORBIDITY (BP, acanthosis/insulin resistance, sleep apnoea, joints) and crucially MOOD/bullying/self-esteem' },
      { dom:'tasks', text:'Takes a WHOLE-FAMILY lifestyle history (diet, drinks, portions, activity, screen time, sleep, routines) without judgement, identifying achievable levers and readiness/circumstances' },
      { dom:'tasks', text:'Manages as a FAMILY with small, specific, positive changes framed around health (maintain weight while growing rather than dieting a child), signposting to family weight-management/tier-2 services and the school nurse' },
      { dom:'rto',   text:'Reads the anger as shame/guilt, allies WITH the family against the problem, and turns a defensive encounter into a supportive, hopeful plan' },
      { dom:'rto',   text:'Protects and positively involves the child, checks the family\u2019s understanding and readiness, and avoids stigmatising language throughout' },
      { dom:'gs',    text:'Safety-nets and follows up: comorbidity follow-up, programme signposting, review of changes, attention to emotional/bullying impact and any safeguarding/neglect concern \u2014 non-shaming, whole-family care (no NG12 link)' },
    ],
    worked:[
      { lbl:'De-shame first', txt:'"I can see that letter really upset you \u2014 and let me say clearly, I don\u2019t think you\u2019re a bad mum, and we\u2019re not here to label or diet Kai. Let\u2019s look at this together as a family thing, gently."' },
      { lbl:'Ground it in data', txt:'"For children we don\u2019t use the adult measure \u2014 we plot growth on a chart for his age. Let me show you where Kai sits and how he\u2019s been tracking, so we\u2019re working from facts, not just a scary word."' },
      { lbl:'Check health, mind feelings', txt:'"He\u2019s growing tall and along his lines, which reassures me there\u2019s no hidden medical cause. I\u2019ll check his blood pressure and a couple of things. (Gently, to Kai) How are you doing in yourself, mate \u2014 is anyone giving you a hard time at school?"' },
      { lbl:'Whole-family, no judgement', txt:'"Tell me about a normal day for the family \u2014 meals, drinks, getting about, screens, sleep. Not to judge \u2014 kids just do what the household does, so changes work best when everyone\u2019s in."' },
      { lbl:'Small positive changes', txt:'"Let\u2019s pick one or two easy wins as a family \u2014 maybe water instead of fizzy drinks, and a kickabout a couple more times a week. The goal isn\u2019t a diet \u2014 it\u2019s for Kai to grow into his weight and have more energy."' },
      { lbl:'Signpost + safety-net', txt:'"There\u2019s a friendly family programme I can refer you to, and the school nurse can help. Let\u2019s review how it\u2019s going. And if Kai\u2019s being teased or it\u2019s getting him down, tell me \u2014 that matters just as much."' },
    ],
    learning:'Childhood obesity is a sensitive, easily-shaming topic that must be handled with compassion and zero blame, especially with the child in the room: acknowledge the parent\u2019s feelings, affirm you are not labelling them a bad parent, and be mindful of every word in front of the child \u2014 avoid "fat" and blame, and protect his self-esteem, because the tone determines whether the family engages. Assess objectively using BMI centile for age and sex on a growth chart (not adult BMI cut-offs), plotting height, weight and trajectory to ground the conversation in data rather than the emotive letter. Most childhood obesity is lifestyle-related, but consider and exclude the uncommon secondary causes (endocrine such as hypothyroidism or Cushing\u2019s, and genetic syndromes \u2014 typically with short stature, developmental delay or dysmorphism, so a tall child growing along his centiles is reassuring), and screen for comorbidity and complications (blood pressure, acanthosis nigricans/insulin resistance, HbA1c/lipids in higher-risk, sleep apnoea, joint problems) and crucially for mood, bullying and self-esteem. Take a whole-family lifestyle history without judgement (meals, sugary drinks/snacks, portions, activity, screen time, sleep, routines), framing it as understanding rather than interrogating, and identify achievable levers and the family\u2019s readiness and circumstances. Manage as a family rather than dieting a child: agree small, specific, positive changes framed around health, energy and growing well (children generally maintain weight while growing into it rather than losing weight), signpost to a family weight-management/tier-2 programme and school nurse, and keep the child positive and involved. The hidden agenda is anger masking shame, guilt and feeling judged, with possible bullying of the child; remove blame, ally with the family against the problem, protect the child, watch for emotional impact and \u2014 in extreme/neglect situations \u2014 any safeguarding concern. No NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Childhood obesity (BMI centile) \u00b7 NCMP \u00b7 secondary-cause/comorbidity screen \u00b7 whole-family lifestyle \u00b7 non-stigmatising care',
      points:[
        { h:'De-shame, mind the child', t:'Acknowledge the parent\u2019s feelings; no blame; avoid "fat"; protect the child\u2019s self-esteem with the child present. Tone determines engagement.' },
        { h:'BMI centile', t:'Assess by BMI centile for age/sex on a growth chart, not adult BMI. Plot trajectory; ground the conversation in objective data.' },
        { h:'Exclude secondary causes', t:'Endocrine (hypothyroidism, Cushing\u2019s) and genetic syndromes (often short stature/developmental delay/dysmorphism). A tall child on his centiles is reassuring against these.' },
        { h:'Screen comorbidity & mood', t:'BP, acanthosis/insulin resistance, HbA1c/lipids in higher-risk, sleep apnoea, joints; and mood, bullying, self-esteem.' },
        { h:'Whole-family history', t:'Diet, drinks, portions, activity, screen time, sleep, routines \u2014 non-judgemental. Children mirror the household; changes work best family-wide.' },
        { h:'Family changes, not a diet', t:'Small, specific, positive changes framed around health; children usually maintain weight while growing into it. Signpost family weight-management/tier-2 and school nurse.' },
        { h:'Never do', t:'Never shame the child or parent; never use adult BMI; never put a child on a restrictive "diet"; never ignore mood/bullying or possible secondary causes.' },
        { h:'Safety-net & follow-up', t:'Comorbidity follow-up, programme signposting, review of changes, attention to emotional impact and any safeguarding/neglect concern. (No NG12 link.)' }
      ]
    }
  };

  /* ====== 202. F2F — Behaviour concerns at school: ADHD pathway without pre-judging ====== */
  const c202 = {
    id:'adhd-pathway', title:'"The school says it\u2019s ADHD and he needs medication \u2014 can you sort that out?"', type:'video', duration:12,
    meta:{ age:8, sex:'M', setting:'Video consultation \u2014 behaviour/attention concerns (mother present).', system:'Paediatrics / Neurodevelopmental \u2014 the ADHD pathway without pre-judging' },
    brief:'Mrs Becca Hartnell brings her son Leo, 8, because the SCHOOL has said he has ADHD and needs medication; she wants the GP to "sort it". The examined skills: respond without either dismissing or rubber-stamping a school-led diagnosis \u2014 ADHD is a clinical diagnosis made by a SPECIALIST neurodevelopmental service after structured, MULTI-SETTING assessment, not diagnosed or medicated in primary care on a teacher\u2019s say-so. Take a careful developmental/behavioural history (the pattern, pervasiveness across settings, onset, impact/impairment), and crucially EXCLUDE/consider the DIFFERENTIALS and contributors that mimic ADHD: hearing/vision problems, SLEEP disorder, learning difficulty, attachment/trauma, SAFEGUARDING/adverse experiences, family/social stress, autism, anxiety. Gather information from multiple sources (school reports/Conners-type questionnaires), support the family, and REFER appropriately to the neurodevelopmental pathway, while managing expectations about timescales and that medication is specialist-initiated and not first/only-line. Avoid pre-judging in either direction. No NG12 link.',
    script:{
      opening:'"Leo\u2019s school have been on at me \u2014 they say he\u2019s got ADHD, he can\u2019t sit still, he\u2019s disruptive, doesn\u2019t listen, and they reckon he needs to be on medication for it. They more or less told me to come and get it sorted. So \u2014 can you prescribe something, or refer him for the tablets?"',
      facts:[
        { topic:'Don\u2019t rubber-stamp or dismiss', text:'BALANCE \u2014 neither dismiss the school\u2019s concern nor accept ADHD as a settled diagnosis to be medicated. ADHD is a CLINICAL diagnosis made by a specialist (paediatrician/CAMHS/neurodevelopmental service) after structured assessment; it is NOT diagnosed or treated in primary care on a teacher\u2019s report. Take the concern seriously, gather information, and route it properly \u2014 the GP\u2019s job is assessment, information-gathering, exclusion of mimics, support, and referral.' },
        { topic:'Characterise the pattern + impairment', text:'Take a developmental/behavioural history: the core features (INATTENTION, HYPERACTIVITY, IMPULSIVITY), their ONSET (childhood), and \u2014 critically \u2014 their PERVASIVENESS across settings (home AND school, not only one) and the degree of IMPAIRMENT/impact on learning, relationships and the child. Symptoms confined to one setting, or explained by circumstances, point away from ADHD. Get the child\u2019s own perspective where possible.' },
        { topic:'Exclude/consider the differentials \u2014 the key skill', text:'CORE \u2014 many things mimic or contribute to "ADHD-type" behaviour and must be considered: HEARING or vision impairment (a child who can\u2019t hear seems inattentive), SLEEP disorders (tired children are inattentive/hyperactive), LEARNING difficulty/specific learning disorder, AUTISM, ANXIETY/low mood, ATTACHMENT or TRAUMA and adverse childhood experiences, SAFEGUARDING concerns, family/social stress or change, and substance/diet factors. Screen these \u2014 missing a hearing problem, a sleep disorder or a safeguarding issue while labelling "ADHD" is a serious error.' },
        { topic:'Gather multi-source information', text:'A robust assessment needs information from MULTIPLE settings and sources: structured school reports and observations, standardised questionnaires (e.g. Conners/SDQ completed by parents AND teachers), and the developmental/birth/family history. Arrange/collate these to inform the referral, rather than acting on a single verbal report.' },
        { topic:'Refer appropriately + manage expectations', text:'Refer to the NEURODEVELOPMENTAL/ADHD pathway (paediatrics/CAMHS) for formal assessment and diagnosis. Manage expectations: assessment takes time and waiting lists are long; diagnosis (if made) is specialist; and treatment is multimodal \u2014 parent training/behavioural support and school interventions FIRST, with MEDICATION specialist-initiated only when indicated, not a quick fix to be prescribed by the GP. Support the family meanwhile (school SENCO involvement, behavioural strategies, support organisations).' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 the mother is under PRESSURE from the school, possibly exhausted and stressed, maybe feeling blamed or wanting a label that explains the behaviour and brings help. There may be unspoken family stress, the child\u2019s distress, or fear of medication. The skill is to take the concern seriously, NOT pre-judge (for or against ADHD), explore the wider picture and the family\u2019s feelings, exclude mimics, support them, and set a realistic, properly-routed plan \u2014 without offloading the school\u2019s certainty into a prescription.' },
      ],
      ice:{
        ideas:'The school says it\u2019s ADHD and he needs medication; the GP should diagnose/prescribe or refer for "the tablets".',
        concerns:'HIDDEN AGENDA \u2014 pressure from school, possible exhaustion/feeling blamed, wanting a label/help; possible family stress; the child\u2019s distress; fear of meds.',
        expectations:'A prescription or referral "for the tablets". What she needs: the concern taken seriously, the pattern/impairment characterised, mimics excluded, multi-source information gathered, proper neurodevelopmental referral, and realistic expectations \u2014 no pre-judging.'
      },
      cues:['School-led "it\u2019s ADHD, he needs meds" \u2014 don\u2019t rubber-stamp or dismiss; ADHD is a specialist clinical diagnosis after multi-setting assessment.','Characterise pattern + PERVASIVENESS across settings + impairment; EXCLUDE mimics (hearing, sleep, learning difficulty, autism, anxiety, trauma/safeguarding).','Gather multi-source info (school reports/questionnaires) and refer to the neurodevelopmental pathway; medication is specialist-initiated, not a quick fix.']
    },
    checkpoints:[
      { dom:'tasks', text:'Neither dismisses nor rubber-stamps the school\u2019s view \u2014 recognises ADHD as a SPECIALIST clinical diagnosis after structured multi-setting assessment, not diagnosed/medicated in primary care on a teacher\u2019s report' },
      { dom:'tasks', text:'Characterises the pattern (inattention/hyperactivity/impulsivity), ONSET, PERVASIVENESS across settings (home and school) and degree of IMPAIRMENT \u2014 and gets the child\u2019s perspective where possible' },
      { dom:'tasks', text:'EXCLUDES/considers the differentials and contributors \u2014 hearing/vision, SLEEP disorder, learning difficulty, autism, anxiety/mood, attachment/TRAUMA/ACEs, SAFEGUARDING, family/social stress \u2014 as the key safety skill' },
      { dom:'tasks', text:'Gathers MULTI-SOURCE information (school reports/observations, parent- and teacher-completed questionnaires, developmental/family history) to inform the referral rather than acting on a single report' },
      { dom:'tasks', text:'Refers to the NEURODEVELOPMENTAL/ADHD pathway and manages expectations (timescales, specialist diagnosis, multimodal treatment with behavioural/school interventions first and medication specialist-initiated) \u2014 supporting the family meanwhile (SENCO, strategies, support orgs)' },
      { dom:'rto',   text:'Takes the school\u2019s/mother\u2019s concern seriously without pre-judging in either direction, and explores the family\u2019s feelings, pressure and the child\u2019s distress' },
      { dom:'rto',   text:'Explains the proper process and why a prescription today is not appropriate, in a way that keeps the family engaged rather than dismissed' },
      { dom:'gs',    text:'Safety-nets and follows up: arranges information-gathering and referral, addresses excluded contributors (e.g. hearing/sleep/safeguarding), supports the family, and reviews \u2014 properly-routed, non-pre-judging assessment (no NG12 link)' },
    ],
    worked:[
      { lbl:'Take it seriously, set the frame', txt:'"I can hear the school have been firm about this, and I take it seriously. But ADHD isn\u2019t something I can diagnose or treat from a teacher\u2019s report \u2014 it needs a proper specialist assessment. My job is to look at the whole picture and get Leo to the right people."' },
      { lbl:'Characterise + pervasiveness', txt:'"Tell me what Leo\u2019s like \u2014 is the restlessness and not-listening only at school, or at home too, with friends, all the time? When did it start? How\u2019s it affecting his learning and friendships?"' },
      { lbl:'Exclude the mimics', txt:'"A few important checks, because several things can look like ADHD: how\u2019s his hearing, his sleep, his reading and learning? Any worries or big changes at home? \u2026 These genuinely matter \u2014 we don\u2019t want to miss something treatable."' },
      { lbl:'Gather evidence', txt:'"For a proper assessment we need information from school and home \u2014 some standard questionnaires filled in by you and his teachers. Let\u2019s get those organised; they\u2019re part of the referral."' },
      { lbl:'Refer + realistic expectations', txt:'"I\u2019ll refer Leo to the specialist neurodevelopmental team. I\u2019ll be honest \u2014 there\u2019s usually a wait. If they diagnose ADHD, the first steps are usually support at school and parenting strategies, and medication is only started by specialists when it\u2019s really needed \u2014 it\u2019s not the first or only thing."' },
      { lbl:'Support + safety-net', txt:'"Meanwhile, let\u2019s get the school\u2019s SENCO involved and I\u2019ll point you to some support. How are YOU finding it? \u2026 Come back if things get harder, or if you notice anything about his hearing, sleep or mood, and we\u2019ll keep things moving."' },
    ],
    learning:'When a school declares a child has ADHD and needs medication, the GP must neither dismiss the concern nor rubber-stamp it: ADHD is a clinical diagnosis made by a specialist neurodevelopmental service (paediatrics/CAMHS) after structured, multi-setting assessment, and is not diagnosed or medicated in primary care on a teacher\u2019s report. Take the concern seriously and characterise the pattern \u2014 inattention, hyperactivity and impulsivity, their childhood onset, their pervasiveness across settings (present at home AND school, not only one), and the degree of impairment on learning, relationships and the child \u2014 since symptoms confined to one setting or explained by circumstances point away from ADHD. The key safety skill is to exclude and consider the many mimics and contributors: hearing or vision impairment (a child who cannot hear seems inattentive), sleep disorders (tired children are inattentive and hyperactive), learning difficulty, autism, anxiety or low mood, attachment difficulties, trauma and adverse childhood experiences, safeguarding concerns, and family or social stress \u2014 missing a hearing problem, a sleep disorder or a safeguarding issue while labelling "ADHD" is a serious error. Gather information from multiple sources (school reports and observations, standardised questionnaires completed by parents and teachers, developmental and family history) rather than acting on a single verbal report, and refer to the neurodevelopmental/ADHD pathway, managing expectations honestly: assessment takes time, diagnosis is specialist, and treatment is multimodal with behavioural and school interventions first and medication specialist-initiated only when indicated \u2014 not a GP-prescribed quick fix. Support the family meanwhile (school SENCO, behavioural strategies, support organisations). The hidden agenda is school pressure, parental exhaustion or feeling blamed, a wish for a label that brings help, possible family stress, the child\u2019s distress, or fear of medication; take it seriously, do not pre-judge for or against ADHD, explore the wider picture, exclude mimics, support the family, and route it properly. No NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE NG87 ADHD \u00b7 specialist multi-setting diagnosis \u00b7 differentials/mimics \u00b7 multi-source assessment \u00b7 multimodal treatment',
      points:[
        { h:'Don\u2019t rubber-stamp or dismiss', t:'ADHD is a specialist clinical diagnosis after structured multi-setting assessment \u2014 not made or medicated in primary care on a teacher\u2019s report. Take the concern seriously and route it.' },
        { h:'Pattern, pervasiveness, impairment', t:'Inattention/hyperactivity/impulsivity, childhood onset, present across settings (home and school), with functional impairment. Single-setting or circumstance-explained symptoms point away.' },
        { h:'Exclude mimics', t:'Hearing/vision, sleep disorder, learning difficulty, autism, anxiety/mood, attachment/trauma/ACEs, safeguarding, family/social stress. Missing these while labelling ADHD is a serious error.' },
        { h:'Multi-source assessment', t:'School reports/observations, parent- and teacher-completed questionnaires (Conners/SDQ), developmental/family history. Don\u2019t act on a single report.' },
        { h:'Refer + manage expectations', t:'Refer to neurodevelopmental/ADHD pathway. Timescales long; diagnosis specialist; treatment multimodal \u2014 behavioural/school interventions first, medication specialist-initiated only when indicated.' },
        { h:'Support the family', t:'SENCO involvement, behavioural strategies, support organisations; explore parental pressure/exhaustion and the child\u2019s distress.' },
        { h:'Never do', t:'Never diagnose/prescribe ADHD in primary care on a teacher\u2019s say-so; never dismiss the concern; never skip the mimic/safeguarding screen; never imply medication is the first/only step.' },
        { h:'Safety-net & follow-up', t:'Gather information and refer; address excluded contributors; support family; review. (No NG12 link.)' }
      ]
    }
  };

  /* ====== 203. F2F — Eczema flare: steroid phobia in the room ====== */
  const c203 = {
    id:'eczema-steroid-phobia', title:'"I don\u2019t want to put steroids on my baby \u2014 won\u2019t they thin her skin?"', type:'video', duration:12,
    meta:{ age:2, sex:'F', setting:'Video consultation \u2014 a flaring atopic eczema (mother present).', system:'Dermatology / Atopic eczema \u2014 managing the flare and topical-steroid phobia' },
    brief:'Mrs Priya Sandhu brings her 2-year-old, Anaya, with a flare of ATOPIC ECZEMA \u2014 red, itchy, sore, sleep-disturbing \u2014 but is reluctant to use the prescribed topical STEROID for fear it will "thin her skin"/be dangerous (TOPICAL STEROID PHOBIA). The examined skills: assess the eczema and its impact (itch, sleep, infection signs), explain atopic eczema and its management clearly, and tackle STEROID PHOBIA with accurate, reassuring information \u2014 EMOLLIENTS as the cornerstone (generous, frequent, as a soap substitute), topical CORTICOSTEROIDS used CORRECTLY (appropriate potency for site/severity, short bursts to control flares, the FINGERTIP-UNIT guide) are SAFE and effective when used properly, and that under-treatment from steroid fear prolongs suffering and is itself harmful; identify and avoid triggers, recognise/treat infection (bacterial \u2014 weeping/crusting; eczema herpeticum \u2014 urgent), and step up/down a clear regimen. Build trust and adherence rather than dismissing the fear. No NG12 link.',
    script:{
      opening:'"Anaya\u2019s eczema is really bad again \u2014 she\u2019s scratching all night, none of us are sleeping. The doctor gave us a steroid cream but \u2026 I looked it up and I\u2019m scared of steroids. Won\u2019t they thin her skin, or get into her body? I\u2019ve just been using moisturiser, but it\u2019s not enough. What should I do?"',
      facts:[
        { topic:'Assess the flare and its impact', text:'Assess severity and impact: extent, redness, excoriation, ITCH, SLEEP disturbance (a key marker of severity and family impact), and signs of INFECTION (weeping, golden crusting \u2014 bacterial; clustered punched-out vesicles/rapid worsening/unwell \u2014 eczema herpeticum, urgent). Understand current treatment and what she\u2019s actually using. This grounds the plan and shows you take the child\u2019s suffering seriously.' },
        { topic:'Validate the fear, then correct it', text:'TOPICAL STEROID PHOBIA is extremely common and drives under-treatment. Do NOT dismiss it \u2014 acknowledge it as understandable (lots of conflicting online information), then correct it with accurate facts: topical steroids used CORRECTLY (right potency, short bursts to control flares) are SAFE and effective; skin thinning is associated with prolonged use of potent steroids on inappropriate sites, not appropriate short-course use; and crucially, UNDER-treating eczema from steroid fear prolongs the child\u2019s itch, sleeplessness, infection risk and suffering \u2014 the fear itself causes harm.' },
        { topic:'Emollients are the cornerstone', text:'EMOLLIENTS are the foundation of eczema care: apply GENEROUSLY and FREQUENTLY (e.g. several times a day, and liberally), use as a SOAP SUBSTITUTE, continue even when the skin is clear, and apply in the direction of hair growth. Prescribe enough (large quantities) and demonstrate. Good emollient use reduces flares and steroid need \u2014 something the mother can embrace wholeheartedly.' },
        { topic:'Topical steroids \u2014 used correctly (fingertip units)', text:'Explain correct steroid use: match POTENCY to site and severity (mild for face/flexures in a child, moderate for body flares), use SHORT BURSTS to bring a flare under control then step down, apply ONCE\u2013TWICE daily to active eczema only, and use the FINGERTIP UNIT guide for how much (one FTU covers an area of two adult palms). Reassure that this is a controlled, safe, time-limited approach \u2014 not slathering strong steroids indefinitely. Consider step-up/step-down and a written plan.' },
        { topic:'Triggers, infection & escalation', text:'Address TRIGGERS (irritants \u2014 soaps/bubble bath, heat, certain fabrics, possible food/allergen factors in some), nail care/scratch management, and emollient/steroid technique. Recognise and treat INFECTION (bacterial \u2192 may need antibiotics; ECZEMA HERPETICUM \u2192 urgent same-day, aciclovir/referral). Know when to escalate/refer (severe, not responding, recurrent infection, diagnostic doubt, major impact) to dermatology. Provide a clear step-up/step-down plan and review.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 the mother\u2019s steroid fear is genuine and driven by wanting to protect her child; under it is distress at the whole family\u2019s sleeplessness and a sense of helplessness. She needs her fear RESPECTED and ANSWERED (not overridden), trust built, and a clear regimen she believes in \u2014 because adherence is the whole game in eczema. Dismissing the fear guarantees ongoing under-treatment; engaging it turns her into a confident treater.' },
      ],
      ice:{
        ideas:'Steroids will thin Anaya\u2019s skin or be absorbed/dangerous; moisturiser alone is safer (but isn\u2019t working).',
        concerns:'HIDDEN AGENDA \u2014 protective fear of harming her child; distress at the family\u2019s sleeplessness; helplessness; online misinformation.',
        expectations:'A safe alternative to steroids. What she needs: the flare assessed, steroid phobia respected and corrected with facts, emollients optimised as the cornerstone, correct (fingertip-unit) steroid use explained, triggers/infection addressed, and a clear plan she trusts.'
      },
      cues:['Flaring atopic eczema with sleep loss + steroid phobia \u2014 don\u2019t dismiss the fear; correct it; under-treatment prolongs suffering and is itself harmful.','Emollients are the cornerstone (generous, frequent, soap substitute); steroids used correctly (potency by site, short bursts, fingertip units) are safe.','Recognise infection: bacterial (weeping/crusting) vs ECZEMA HERPETICUM (clustered vesicles, unwell) \u2014 urgent; know when to escalate.']
    },
    checkpoints:[
      { dom:'tasks', text:'Assesses the flare and its IMPACT (extent, itch, SLEEP disturbance) and checks for INFECTION (bacterial weeping/crusting; eczema herpeticum \u2014 urgent), and what treatment is actually being used' },
      { dom:'tasks', text:'VALIDATES the steroid fear as understandable then CORRECTS it accurately \u2014 correctly-used topical steroids are safe; thinning relates to prolonged potent misuse, not appropriate short courses; and under-treatment from fear is itself harmful' },
      { dom:'tasks', text:'Establishes EMOLLIENTS as the cornerstone \u2014 generous, frequent, soap substitute, continued when clear, prescribed in large quantities \u2014 and demonstrates use' },
      { dom:'tasks', text:'Explains correct TOPICAL STEROID use: potency matched to site/severity, short bursts to control flares then step down, applied to active eczema only, with the FINGERTIP-UNIT amount guide' },
      { dom:'tasks', text:'Addresses TRIGGERS and scratch management, recognises/treats INFECTION (bacterial; eczema herpeticum urgent), and knows when to escalate/refer to dermatology, with a written step-up/step-down plan' },
      { dom:'rto',   text:'RESPECTS and ANSWERS the fear rather than overriding it \u2014 building trust and the adherence that determines eczema control \u2014 and acknowledges the family\u2019s sleeplessness/distress' },
      { dom:'rto',   text:'Makes the mother a confident treater by checking understanding and giving a clear, believable regimen' },
      { dom:'gs',    text:'Safety-nets and follows up: infection red flags (urgent for eczema herpeticum), what to do for flares, emollient/steroid plan, and review \u2014 trust-building, evidence-based eczema care (no NG12 link)' },
    ],
    worked:[
      { lbl:'Take the suffering seriously', txt:'"Nobody sleeping and Anaya scratching all night \u2014 that\u2019s really tough, and we can do much better than this. Let me look at her skin and then sort out a plan you feel comfortable with."' },
      { lbl:'Respect the fear', txt:'"Your worry about steroids is completely understandable \u2014 there\u2019s a lot of frightening stuff online, and you\u2019re trying to protect her. Let me give you the actual facts so you can decide confidently."' },
      { lbl:'Correct it', txt:'"Used properly \u2014 the right strength, in short bursts to settle a flare \u2014 steroid creams are safe and effective. The skin-thinning worry comes from strong steroids used for a long time in the wrong places, not from this. And honestly, leaving the eczema raw is the thing that harms her \u2014 the itch, the sleep loss, the infection risk."' },
      { lbl:'Emollients first', txt:'"The foundation is moisturiser \u2014 lots of it, several times a day, and as her soap. Keep it up even when she\u2019s clear. I\u2019ll prescribe big tubs. Good moisturising means fewer flares and less steroid."' },
      { lbl:'How to use the steroid', txt:'"For the flare, use the steroid once a day on the red, sore bits only, until it settles, then stop. Here\u2019s how much \u2014 a \u2018fingertip\u2019 covers an area the size of two adult palms. It\u2019s controlled and short \u2014 not forever."' },
      { lbl:'Infection + safety-net', txt:'"If the skin weeps, crusts golden, or you see clusters of little blisters and she\u2019s unwell \u2014 that last one needs same-day help. Let\u2019s avoid soaps and triggers, and I\u2019ll write the plan down. Come back if it\u2019s not settling and we\u2019ll step things up."' },
    ],
    learning:'An atopic eczema flare with topical-steroid phobia is, above all, an adherence and trust problem. Assess the flare and its impact \u2014 extent, itch and especially sleep disturbance (a key severity/family-impact marker) \u2014 and check for infection (bacterial weeping/golden crusting; eczema herpeticum, with clustered punched-out vesicles, rapid worsening or an unwell child, which is urgent). Steroid phobia is extremely common and drives under-treatment, so do not dismiss it: validate it as understandable given conflicting online information, then correct it with accurate facts \u2014 topical steroids used correctly (potency matched to site and severity, short bursts to control flares) are safe and effective; skin thinning is associated with prolonged use of potent steroids on inappropriate sites rather than appropriate short courses; and under-treating eczema from steroid fear prolongs the child\u2019s itch, sleeplessness, infection risk and suffering, so the fear itself causes harm. Establish emollients as the cornerstone (generous, frequent, used as a soap substitute, continued even when clear, prescribed in large quantities) and explain correct steroid use with the fingertip-unit guide (one FTU covers two adult palms), applied to active eczema only, then stepped down. Address triggers and scratch management, recognise and treat infection (bacterial may need antibiotics; eczema herpeticum needs urgent same-day aciclovir/referral), and know when to escalate to dermatology, providing a written step-up/step-down plan. The hidden agenda is a protective fear born of wanting to keep the child safe, with distress at the family\u2019s sleeplessness and helplessness beneath; respect and answer the fear rather than overriding it, build trust, and give a clear regimen she believes in \u2014 turning her into a confident treater, because adherence is the whole game in eczema. No NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE atopic eczema in children \u00b7 emollients & topical steroids (fingertip units) \u00b7 steroid phobia \u00b7 infection (eczema herpeticum)',
      points:[
        { h:'Assess flare & impact', t:'Extent, itch, sleep disturbance; signs of infection (bacterial weeping/crusting; eczema herpeticum \u2014 clustered vesicles, unwell, urgent). Check actual treatment use.' },
        { h:'Validate then correct phobia', t:'Acknowledge the fear, then correct: correctly-used topical steroids are safe; thinning relates to prolonged potent misuse; under-treatment from fear is itself harmful. Don\u2019t dismiss.' },
        { h:'Emollients are the cornerstone', t:'Generous, frequent, soap substitute, continued when clear, prescribed in large quantities. Good emollient use reduces flares and steroid need.' },
        { h:'Steroids used correctly', t:'Potency matched to site/severity, short bursts to control flares then step down, active eczema only, fingertip-unit amounts (1 FTU = two adult palms). Controlled, time-limited.' },
        { h:'Triggers & infection', t:'Avoid irritants (soaps, heat), scratch management; treat bacterial infection (antibiotics if needed); eczema herpeticum \u2192 urgent same-day aciclovir/referral.' },
        { h:'Build trust & adherence', t:'Respect and answer the fear; make the parent a confident treater with a clear written step-up/step-down plan. Adherence determines control.' },
        { h:'Never do', t:'Never dismiss steroid phobia; never under-prescribe emollients; never use the wrong potency for the site; never miss eczema herpeticum.' },
        { h:'Safety-net & follow-up', t:'Infection red flags (urgent for eczema herpeticum), flare plan, emollient/steroid regimen, review; escalate/refer if severe/not responding. (No NG12 link.)' }
      ]
    }
  };

  /* ====== 204. F2F — Cousin at risk of FGM abroad: the mandatory duties ====== */
  const c204 = {
    id:'fgm-abroad', title:'"My niece is being taken \u2018home\u2019 this summer \u2014 I\u2019m frightened they\u2019ll cut her"', type:'video', duration:12,
    meta:{ age:34, sex:'F', setting:'Video consultation \u2014 a relative discloses a child at risk of FGM abroad.', system:'Safeguarding / Ethics & law \u2014 a child at risk of female genital mutilation (mandatory duties)' },
    brief:'Ms Halima Yusuf, 34, confides that her 7-year-old NIECE is to be taken abroad this summer to relatives, and she fears the child will undergo FEMALE GENITAL MUTILATION. The examined skills: recognise this as a CHILD-PROTECTION EMERGENCY \u2014 a girl at risk of FGM is a child at risk of serious harm \u2014 and act on the mandatory SAFEGUARDING duties: take the disclosure seriously, gather proportionate information (who, when, where, the specific risk), and make a SAFEGUARDING REFERRAL to children\u2019s social care/police WITHOUT delay (do not attempt to manage it alone or simply advise the aunt); understand the LAW (FGM is illegal in the UK and illegal to arrange/take a UK child abroad for; FGM Protection Orders can prevent travel; the statutory \u2018mandatory reporting\u2019 duty applies specifically to KNOWN/identified FGM in an under-18, while AT-RISK cases go through safeguarding referral); be culturally sensitive WITHOUT colluding; support the aunt (who is protective); consider the wider family (other girls at risk); and document carefully. No NG12 link.',
    script:{
      opening:'(Anxious, lowering her voice.) "I need to tell someone, and I don\u2019t know if I\u2019m doing the right thing \u2026 My brother\u2019s daughter \u2014 my niece, she\u2019s 7 \u2014 they\u2019re taking her \u2018back home\u2019 for the summer. In our family, that\u2019s when girls are \u2026 cut. I went through it myself. I can\u2019t let it happen to her, but I don\u2019t want to destroy my family. What do I do?"',
      facts:[
        { topic:'Recognise the child-protection emergency', text:'CORE \u2014 a girl at risk of FGM is a CHILD AT RISK OF SERIOUS HARM, and this is a SAFEGUARDING/CHILD-PROTECTION matter that overrides the usual confidentiality and family-loyalty considerations. FGM is a form of child abuse and illegal in the UK. The aunt\u2019s disclosure must be taken with the utmost seriousness; planned travel "home" in the summer when cutting traditionally occurs is a recognised high-risk scenario. Time is critical if travel is imminent.' },
        { topic:'Act on the mandatory safeguarding duties \u2014 refer', text:'THE DUTY \u2014 you do NOT manage this alone or merely advise the aunt: you must make a SAFEGUARDING REFERRAL to CHILDREN\u2019S SOCIAL CARE (and/or police), promptly, to protect the niece. Gather proportionate information (the child\u2019s name/age, parents, when and where they are travelling, the specific risk, other girls in the family) but do not delay the referral to investigate yourself. Follow local safeguarding procedures and involve the practice safeguarding lead.' },
        { topic:'Know the law & FGM Protection Orders', text:'Understand the legal framework (FGM Act 2003, as amended): FGM is illegal in the UK, and it is also illegal to take or arrange to take a UK national/resident GIRL ABROAD for FGM. FGM PROTECTION ORDERS (FGMPOs) can be obtained (by the local authority, police, or others) to PREVENT travel (e.g. surrendering passports) and protect a specific child \u2014 a key, fast civil remedy. The statutory MANDATORY REPORTING duty for regulated professionals applies specifically to KNOWN/identified cases of FGM in a girl under 18 (report to police); cases of a child AT RISK go via the safeguarding-referral route. Convey that the system can act to stop this.' },
        { topic:'Cultural sensitivity without collusion', text:'Be culturally sensitive and compassionate \u2014 especially as the aunt is herself a survivor and is acting protectively against her own family \u2014 but NEVER collude: FGM is child abuse regardless of cultural or family framing, and culture/tradition is no justification. Hold both: respect for the person and absolute clarity that the child must be protected. Avoid judgement of the community while being unequivocal about the harm and the law.' },
        { topic:'Support the aunt + the wider family', text:'Support the AUNT: acknowledge her courage and distress (she fears "destroying her family" and may carry her own trauma), reassure her she is doing the right thing for the child, explain what will happen, and signpost support (FGM specialist services, her own health/psychological needs as a survivor). Consider the WIDER FAMILY \u2014 are there OTHER girls at risk? \u2014 and ensure the referral captures this. Maintain confidentiality appropriately around the aunt while prioritising the child.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 the aunt is torn between protecting the child and loyalty to/fear of her family ("I don\u2019t want to destroy my family"), and carries her own trauma as a survivor. She needs reassurance that protecting the child is right, that professionals will handle it, and that she will be supported. The skill is to respond decisively to the child-protection duty while holding the aunt with compassion \u2014 acting, not deliberating, because a child is at risk, and not leaving the burden on the relative.' },
      ],
      ice:{
        ideas:'Her niece may be cut on a summer trip "home"; she wants to protect her but fears destroying the family.',
        concerns:'HIDDEN AGENDA \u2014 torn between protecting the child and family loyalty/fear; her own trauma as a survivor; doubt whether she\u2019s "doing the right thing".',
        expectations:'Unsure \u2014 wants guidance and to do right by the child. What she needs: the disclosure taken seriously, a prompt safeguarding referral (not managed alone), explanation of the law/FGMPOs, cultural sensitivity without collusion, and support for herself.'
      },
      cues:['A 7-year-old to be taken abroad in summer where girls are "cut" \u2014 child-protection EMERGENCY; act on safeguarding duties, refer promptly.','The law: FGM illegal incl. taking a UK girl abroad; FGM Protection Orders can prevent travel; mandatory reporting applies to KNOWN FGM under 18.','Aunt is a protective survivor torn about family \u2014 cultural sensitivity WITHOUT collusion; support her; check other girls at risk.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises a girl at risk of FGM as a CHILD-PROTECTION emergency \u2014 serious harm/child abuse that overrides confidentiality and family-loyalty considerations \u2014 and treats planned summer travel "home" as high-risk' },
      { dom:'tasks', text:'Acts on the mandatory SAFEGUARDING duty: makes a prompt referral to CHILDREN\u2019S SOCIAL CARE/police, gathering proportionate information but NOT managing it alone or delaying to investigate, and involves the safeguarding lead' },
      { dom:'tasks', text:'Knows the LAW: FGM (and taking/arranging to take a UK girl abroad for it) is illegal; FGM PROTECTION ORDERS can prevent travel; the statutory mandatory-reporting duty applies to KNOWN FGM in under-18s (police), at-risk cases via safeguarding referral' },
      { dom:'tasks', text:'Is culturally sensitive and compassionate WITHOUT colluding \u2014 clear that FGM is child abuse regardless of cultural framing and that culture is no justification' },
      { dom:'tasks', text:'Considers the WIDER FAMILY (other girls at risk) and ensures the referral captures this, while handling the aunt\u2019s information appropriately' },
      { dom:'rto',   text:'Holds the AUNT with compassion \u2014 acknowledges her courage, distress, divided loyalty and her own trauma as a survivor \u2014 and reassures her that protecting the child is right' },
      { dom:'rto',   text:'Explains what will happen and that professionals will handle it, so she is not left carrying the burden, and signposts support for her' },
      { dom:'gs',    text:'Safety-nets and acts: prompt safeguarding referral with documentation, support/signposting for the aunt (FGM services, survivor support), consideration of FGMPO/urgency if travel imminent, and follow-up \u2014 decisive child protection with compassion (no NG12 link)' },
    ],
    worked:[
      { lbl:'Honour the courage', txt:'"Thank you for telling me \u2014 that took real courage, and you are absolutely doing the right thing by your niece. Let me help you carry this; you won\u2019t be dealing with it alone."' },
      { lbl:'Name it clearly', txt:'"What you\u2019re describing \u2014 a girl at risk of being cut \u2014 is something we take extremely seriously. FGM is illegal here, it\u2019s a form of harm to a child, and I have a duty to act to protect her."' },
      { lbl:'The duty + the law', txt:'"I can\u2019t keep this just between us, and I shouldn\u2019t try to handle it alone \u2014 I need to involve the people whose job is to protect children, today. There are also legal orders that can stop her being taken abroad, even surrendering passports, to keep her safe."' },
      { lbl:'Gather + check wider risk', txt:'"Can you tell me her name and age, her parents, and when and where they\u2019re planning to travel? \u2026 And are there other girls in the family who might also be at risk? That helps the team protect them all."' },
      { lbl:'Sensitivity without collusion', txt:'"I understand this is your family and your own painful history \u2014 I\u2019m not judging anyone. But protecting this little girl comes first, and tradition can never justify harming a child. You\u2019re doing right by her."' },
      { lbl:'Support her + safety-net', txt:'"I\u2019ll make the referral now and keep you informed. There\u2019s also support for you \u2014 as someone who went through this yourself. If you hear the travel is sooner than thought, tell me immediately, because we may need to act fast."' },
    ],
    learning:'A disclosure that a girl is at risk of female genital mutilation \u2014 here a 7-year-old to be taken abroad in the summer when cutting traditionally occurs \u2014 is a child-protection emergency: a girl at risk of FGM is a child at risk of serious harm, FGM is a form of child abuse and illegal in the UK, and this overrides the usual confidentiality and family-loyalty considerations, with time critical if travel is imminent. The mandatory duty is to act, not deliberate: take the disclosure with the utmost seriousness, gather proportionate information (the child\u2019s name and age, parents, when and where they are travelling, the specific risk, and whether other girls in the family are at risk), and make a prompt safeguarding referral to children\u2019s social care and/or police \u2014 you do not manage this alone, merely advise the relative, or delay to investigate yourself \u2014 involving the practice safeguarding lead. Know the legal framework (FGM Act 2003, as amended): FGM and taking or arranging to take a UK girl abroad for it are illegal; FGM Protection Orders can be obtained to prevent travel (including surrendering passports) and protect a specific child; and the statutory mandatory-reporting duty for regulated professionals applies specifically to KNOWN/identified FGM in a girl under 18 (report to police), while a child merely at risk goes through the safeguarding-referral route. Be culturally sensitive and compassionate \u2014 especially as the aunt is herself a survivor acting protectively against her own family \u2014 but never collude, holding absolute clarity that FGM is child abuse regardless of cultural framing and that tradition is no justification. Support the aunt (acknowledge her courage and divided loyalty, reassure her she is doing right, signpost FGM specialist and survivor support), consider the wider family, and document carefully. The hidden agenda is her torment between protecting the child and loyalty to/fear of family, plus her own trauma; respond decisively to the child-protection duty while holding her with compassion and not leaving the burden on her. No NG12 cancer pathway applies.',
    knowledge:{
      guideline:'FGM Act 2003 \u00b7 safeguarding referral \u00b7 FGM Protection Orders \u00b7 mandatory reporting (known FGM <18) \u00b7 cultural sensitivity without collusion',
      points:[
        { h:'Child-protection emergency', t:'A girl at risk of FGM is a child at risk of serious harm/abuse \u2014 overrides confidentiality and family loyalty. Summer travel "home" is a recognised high-risk scenario; act urgently if imminent.' },
        { h:'Refer \u2014 don\u2019t manage alone', t:'Make a prompt safeguarding referral to children\u2019s social care/police; gather proportionate information but don\u2019t delay to investigate yourself; involve the safeguarding lead.' },
        { h:'The law', t:'FGM and taking/arranging to take a UK girl abroad for it are illegal (FGM Act 2003). FGM Protection Orders can prevent travel (passport surrender) and protect a child.' },
        { h:'Mandatory reporting vs at-risk', t:'The statutory mandatory-reporting duty applies to KNOWN/identified FGM in an under-18 (report to police). A child AT RISK goes via the safeguarding-referral route.' },
        { h:'Sensitivity without collusion', t:'Be culturally sensitive and non-judgemental of the person/community, but unequivocal that FGM is child abuse and tradition is no justification. Never collude.' },
        { h:'Support & wider family', t:'Support the aunt (courage, divided loyalty, her own survivor trauma; signpost FGM/survivor services); consider other girls at risk; document carefully.' },
        { h:'Never do', t:'Never keep it confidential or manage it alone; never delay referral; never collude with cultural justification; never leave the burden on the relative; never overlook other at-risk girls.' },
        { h:'Safety-net & act', t:'Prompt referral with documentation, support/signposting for the aunt, consider FGMPO/urgency if travel imminent, follow-up. (No NG12 link.)' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c201, c202, c203, c204);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'child-obesity': {
      ceg: ['Children & young people', 'Health disadvantage & vulnerabilities'],
      stem: {
        name: 'Kai Pyle (mother present)', age: '9 years \u00b7 male',
        pmh: ['NCMP letter: "very overweight/obese"', 'Mother defensive/embarrassed; child upset and in the room', 'Growing along centiles, otherwise well'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"The school sent a letter saying my son is obese \u2014 I\u2019m furious and embarrassed."',
        reason: 'Video consultation \u2014 childhood weight.'
      },
      timeMap: [
        { t:'0\u20132',  h:'De-shame, mind the child', d:'Acknowledge feelings; not a bad parent; protect Kai\u2019s self-esteem; no "fat"/blame.' },
        { t:'2\u20134',  h:'BMI centile', d:'Plot growth (not adult BMI); ground the talk in data; check trajectory.' },
        { t:'4\u20137',  h:'Secondary causes + comorbidity', d:'Endocrine/genetic (short stature/delay) unlikely if tall/on centiles; BP, acanthosis, sleep, mood/bullying.' },
        { t:'7\u20139',  h:'Whole-family history', d:'Diet/drinks/portions/activity/screens/sleep \u2014 non-judgemental; find achievable levers.' },
        { t:'9\u201312', h:'Family changes + signpost', d:'Small positive changes (maintain weight while growing); family programme/school nurse; review.' }
      ],
      wordPics: {
        fail: 'Lectures/uses "fat" with the child present; uses adult BMI; "put him on a diet"; ignores mood/bullying and the mother\u2019s shame.',
        pass: 'De-shames, uses BMI centile, takes a family history and agrees small changes with signposting.',
        exc:  'Handles it without blame and protects the child, grounds it in BMI centile, screens secondary causes/comorbidity/mood, takes a whole-family non-judgemental history, agrees small positive family changes (grow into weight), and signposts.'
      },
      avoid: [
        { dont:'(In front of Kai) "He\u2019s obese and needs to lose weight \u2014 he\u2019s eating too much."', instead:'"Let\u2019s look at his growth chart together and find one or two easy family changes \u2014 the goal is energy and growing well."', why:'Shaming/blaming language, especially with the child present, harms self-esteem and disengages the family.' },
        { dont:'(Adult BMI) "His BMI is 25, that\u2019s overweight."', instead:'"For children we use a growth chart for his age \u2014 here\u2019s where he sits."', why:'Adult BMI cut-offs don\u2019t apply to children; centiles do.' },
        { dont:'(Ignoring mood) focusing only on food.', instead:'"How are you doing in yourself, Kai \u2014 is anyone giving you a hard time?"', why:'Bullying/mood and self-esteem are central and easily missed.' }
      ]
    },

    'adhd-pathway': {
      ceg: ['Children & young people', 'Mental health & addiction'],
      stem: {
        name: 'Leo Hartnell (mother present)', age: '8 years \u00b7 male',
        pmh: ['School reports inattention/hyperactivity/disruption \u2014 says "ADHD, needs meds"', 'Pattern/pervasiveness across settings unclear', '? sleep/hearing/learning/home factors not yet explored'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"The school says it\u2019s ADHD and he needs medication \u2014 can you sort that out?"',
        reason: 'Video consultation \u2014 behaviour/attention concerns.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Take seriously, set frame', d:'Don\u2019t dismiss or rubber-stamp; ADHD is a specialist multi-setting diagnosis.' },
        { t:'2\u20135',  h:'Pattern + pervasiveness', d:'Inattention/hyperactivity/impulsivity, onset, home AND school, impairment.' },
        { t:'5\u20137',  h:'Exclude mimics', d:'Hearing/vision, sleep, learning difficulty, autism, anxiety, trauma/ACEs, safeguarding, family stress.' },
        { t:'7\u20139',  h:'Multi-source + refer', d:'School reports/questionnaires (parent+teacher); refer neurodevelopmental pathway.' },
        { t:'9\u201312', h:'Expectations + support', d:'Timescales; behavioural/school first, meds specialist-only; SENCO/support; review.' }
      ],
      wordPics: {
        fail: 'Prescribes/diagnoses ADHD on the school\u2019s say-so, or dismisses it; no mimic/safeguarding screen; no multi-source assessment.',
        pass: 'Characterises the pattern, excludes mimics, gathers information and refers appropriately with realistic expectations.',
        exc:  'Neither dismisses nor rubber-stamps, characterises pattern/pervasiveness/impairment, excludes hearing/sleep/learning/autism/anxiety/trauma/safeguarding, gathers multi-source information, refers to the neurodevelopmental pathway and manages expectations, supporting the family.'
      },
      avoid: [
        { dont:'"The school knows him \u2014 I\u2019ll start him on ADHD medication."', instead:'"ADHD needs a specialist assessment across settings \u2014 I can\u2019t diagnose or medicate it from a school report, but I\u2019ll get him assessed properly."', why:'ADHD is a specialist diagnosis; primary-care prescribing on a teacher\u2019s say-so is wrong.' },
        { dont:'"Kids his age are just like that \u2014 don\u2019t worry."', instead:'"I take this seriously \u2014 let\u2019s look at the whole picture and get the right assessment."', why:'Dismissing the concern misses ADHD and treatable contributors.' },
        { dont:'(Skipping) not screening hearing/sleep/safeguarding.', instead:'"How are his hearing, sleep and learning, and is everything okay at home?"', why:'These mimics/contributors are commonly missed when "ADHD" is assumed.' }
      ]
    },

    'eczema-steroid-phobia': {
      ceg: ['Children & young people', 'Prescribing & pharmacology'],
      stem: {
        name: 'Anaya Sandhu (mother present)', age: '2 years \u00b7 female',
        pmh: ['Atopic eczema flare \u2014 itchy, sore, scratching all night (family sleep loss)', 'Mother avoiding prescribed topical steroid (steroid phobia)', 'Using emollient alone \u2014 not enough'],
        meds: ['Emollient', 'Topical corticosteroid (being avoided)'],
        allergy: 'NKDA',
        recent: '"I don\u2019t want to put steroids on my baby \u2014 won\u2019t they thin her skin?"',
        reason: 'Video consultation \u2014 a flaring atopic eczema.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Take suffering seriously', d:'Sleep loss/scratching; assess severity + infection; we can do better.' },
        { t:'2\u20134',  h:'Respect + correct phobia', d:'Validate fear; correctly-used steroids safe; under-treatment harms; thinning = prolonged misuse.' },
        { t:'4\u20137',  h:'Emollients cornerstone', d:'Generous, frequent, soap substitute, continue when clear; prescribe big quantities.' },
        { t:'7\u20139',  h:'Correct steroid use', d:'Potency by site/severity, short bursts, active eczema only, fingertip units.' },
        { t:'9\u201312', h:'Triggers/infection + plan', d:'Avoid irritants; bacterial vs eczema herpeticum (urgent); written step-up/down; review.' }
      ],
      wordPics: {
        fail: 'Dismisses the fear or, conversely, agrees to avoid steroids; under-prescribes emollients; misses eczema herpeticum; child keeps suffering.',
        pass: 'Validates and corrects steroid phobia, optimises emollients and explains correct steroid use with a safety-net.',
        exc:  'Takes the suffering seriously, respects then corrects steroid phobia with facts, makes emollients the cornerstone, teaches fingertip-unit steroid use, addresses triggers/infection (eczema herpeticum urgent), and builds a confident, adherent parent with a written plan.'
      },
      avoid: [
        { dont:'"If you\u2019re worried about steroids, just use lots of moisturiser." (and accept under-treatment)', instead:'"Moisturiser is the foundation, but this flare needs the steroid too \u2014 used properly it\u2019s safe, and leaving it raw is what harms her."', why:'Colluding with steroid avoidance prolongs suffering and infection risk.' },
        { dont:'"Steroids are fine, don\u2019t be silly." (dismissive)', instead:'"Your worry is understandable \u2014 here are the facts so you can use it confidently."', why:'Dismissing the fear destroys trust and adherence.' },
        { dont:'(Missing) not asking about infection.', instead:'"Any weeping, golden crusting, or clusters of little blisters with her unwell? That last needs same-day help."', why:'Eczema herpeticum is an urgent, easily-missed complication.' }
      ]
    },

    'fgm-abroad': {
      ceg: ['Health disadvantage & vulnerabilities', 'Ethnicity, culture & diversity'],
      stem: {
        name: 'Halima Yusuf (re: 7-year-old niece)', age: '34 years \u00b7 female',
        pmh: ['\u26a0 Niece (7) to be taken abroad this summer \u2014 fears FGM', 'Aunt is herself an FGM survivor', 'Torn between protecting the child and family loyalty'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"My niece is being taken \u2018home\u2019 this summer \u2014 I\u2019m frightened they\u2019ll cut her."',
        reason: 'Video consultation \u2014 a relative discloses a child at risk of FGM abroad.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Honour courage + name it', d:'Thank her; she\u2019s doing right; a girl at risk of FGM is a child at risk of serious harm.' },
        { t:'2\u20135',  h:'The duty + the law', d:'Can\u2019t keep it confidential/manage alone; refer to social care/police; FGM illegal; FGMPOs prevent travel.' },
        { t:'5\u20137',  h:'Gather + wider risk', d:'Child\u2019s name/age, parents, travel when/where; other girls at risk.' },
        { t:'7\u20139',  h:'Sensitivity, no collusion', d:'Compassion for her/community; tradition never justifies child abuse.' },
        { t:'9\u201312', h:'Support + safety-net', d:'Support the aunt (survivor services), keep her informed; act fast if travel imminent; document.' }
      ],
      wordPics: {
        fail: 'Keeps it confidential / tries to handle it alone / just advises the aunt; delays referral; or colludes with cultural framing; misses other at-risk girls.',
        pass: 'Recognises the child-protection emergency, refers promptly and explains the law, supporting the aunt.',
        exc:  'Treats it as a child-protection emergency, makes a prompt safeguarding referral (not alone), explains the law and FGM Protection Orders, is culturally sensitive without colluding, considers other girls, supports the survivor aunt, and acts urgently if travel is imminent.'
      },
      avoid: [
        { dont:'"Leave it with me \u2014 I\u2019ll have a word and we\u2019ll keep it between us."', instead:'"I can\u2019t keep this confidential or handle it alone \u2014 I must involve children\u2019s services today to protect her."', why:'A child at risk of FGM requires a safeguarding referral, not solo management or secrecy.' },
        { dont:'"It\u2019s their family tradition \u2014 it\u2019s a difficult cultural area."', instead:'"I respect your family and your history, but FGM is child abuse and tradition can never justify it \u2014 she must be protected."', why:'Cultural framing must never become collusion with child abuse.' },
        { dont:'(Narrow) focusing only on the one niece.', instead:'"Are there other girls in the family who might also be at risk?"', why:'Other children may be at risk and must be captured in the referral.' }
      ]
    }

  });

})();
