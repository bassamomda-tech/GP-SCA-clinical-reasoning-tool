/* ============================================================
   Reasoning GP — Case Library batch 74 (final gap-fill):
   Themes confirmed absent across Native 246 / Bassam / Emily /
   MRCGP casebook: transgender health (bridging/shared care);
   frontotemporal dementia / Pick's (young-onset behavioural change);
   substance misuse in a teenager (safeguarding + harm reduction);
   abdominal migraine in a child (recurrent abdominal pain).
   No NG12 cancer pathway applies. Load AFTER sca-cases73.js.
   ============================================================ */
(function(){

  /* ===== 265. Transgender health ===== */
  const c265 = {
    id:'transgender-health', title:'"I started hormones through a private clinic while waiting years for the NHS gender service \u2014 will you do my monitoring and prescribe?"', type:'video', duration:12,
    meta:{ age:26, sex:'F', setting:'Face-to-face \u2014 a transgender patient seeking GP support.', system:'Gender / Holistic care \u2014 transgender health: bridging, shared care & respectful care' },
    brief:'A 26-year-old transgender man (assigned female at birth, affirmed male, prefers he/him), Sam, has been on private testosterone for months while on a very long NHS Gender Identity Clinic (GIC) waiting list, and asks the GP to take over prescribing/monitoring and to support him. The task is RESPECTFUL, holistic transgender care: use the person\u2019s correct NAME and PRONOUNS and an affirming manner; understand the GP role \u2014 GPs are expected to work collaboratively/provide shared care with gender services and to consider BRIDGING PRESCRIBING where a patient is already self-sourcing hormones and at risk, but should do so within their competence and ideally with specialist advice; arrange appropriate MONITORING (bloods/levels, BP, lipids, etc. per shared-care protocols), provide general holistic care (mental health \u2014 high rates of distress/self-harm, smoking, screening relevant to anatomy \u2014 e.g. cervical screening if a cervix is present, breast/chest awareness), avoid making the patient feel like a burden or repeatedly re-justify themselves, and signpost support; recognise limits and seek specialist/GIC guidance rather than refuse care outright. The skill is affirming, non-judgemental care, understanding shared care/bridging, anatomy-appropriate screening and mental-health support, and acting within competence with specialist advice \u2014 not dismissing or moralising. No NG12 cancer pathway applies.',
    script:{
      opening:'"Thanks for seeing me. I\u2019m a trans man \u2014 I go by Sam, he/him. I\u2019ve been waiting nearly four years for the NHS gender clinic, so I started testosterone through a private service because I couldn\u2019t cope waiting. I\u2019m doing well on it. Can you do my blood monitoring and ideally take over the prescription? I\u2019m worried I\u2019ll be judged or turned away."',
      facts:[
        { topic:'Affirming, respectful care first', text:'CORE \u2014 use the patient\u2019s correct NAME and PRONOUNS (he/him for Sam) and an affirming, non-judgemental manner. Many trans patients have experienced discrimination and fear being turned away or made to re-justify themselves; getting the basics of respect right is foundational to the whole consultation.' },
        { topic:'Understand the GP role & shared care', text:'GPs are expected to work COLLABORATIVELY with gender services and provide SHARED CARE (prescribing/monitoring) under specialist guidance \u2014 they should not refuse to be involved simply because the patient is transgender. Establish what the GIC/private service advises and aim for a collaborative arrangement.' },
        { topic:'Bridging prescribing', text:'Where a patient is already self-sourcing hormones and at RISK (and faces long waits), GMC/RCGP guidance supports considering a BRIDGING PRESCRIPTION to reduce harm \u2014 but the GP should act within their COMPETENCE, ideally with specialist advice, and be honest about what they can and cannot safely do alone. This balances harm reduction with safe prescribing rather than a flat refusal.' },
        { topic:'Monitoring & holistic care', text:'Arrange appropriate MONITORING per shared-care protocols (hormone levels, FBC \u2014 testosterone raises haematocrit, lipids, LFTs, BP, etc.) and provide HOLISTIC care: mental-health support (trans people have high rates of distress, anxiety, depression and self-harm \u2014 screen and support), smoking/cardiovascular risk, and ANATOMY-APPROPRIATE SCREENING (e.g. cervical screening if a cervix is present, breast/chest cancer awareness, as relevant) regardless of recorded gender.' },
        { topic:'Don\u2019t make them a burden; signpost', text:'COMMUNICATION \u2014 avoid making the patient feel like a problem or repeatedly re-explain themselves; be proactive and supportive. Signpost peer/specialist support, and document name/pronouns/affirmed gender clearly. Recognise the LIMITS of your competence and seek GIC/specialist advice rather than refusing care.' },
        { topic:'The agenda', text:'He fears judgement/refusal and wants practical support and prescribing. Provide respectful affirming care, understand shared care/bridging, arrange monitoring, offer mental-health and anatomy-appropriate screening, act within competence with specialist advice, and signpost \u2014 not dismiss or moralise. No NG12 cancer pathway applies.' },
      ],
      ice:{ ideas:'Wants the GP to take over hormone prescribing/monitoring; fears being judged/refused.', concerns:'Being turned away/judged; the long NHS wait; safety of self-sourced hormones.', expectations:'Prescribing + monitoring + support. What he needs: affirming respectful care, shared-care/bridging consideration within competence (with specialist advice), monitoring, mental-health and anatomy-appropriate screening, and signposting \u2014 not refusal.' },
      cues:['Trans man self-sourcing testosterone amid a long GIC wait, asking for monitoring/prescribing \u2014 affirming care, correct name/pronouns, don\u2019t refuse outright.','GP role: collaborative shared care + consider bridging prescribing for harm reduction, within competence and with specialist advice.','Arrange monitoring (FBC/haematocrit, lipids, LFTs, BP); holistic care \u2014 mental health (high distress/self-harm), anatomy-appropriate screening (cervix \u2192 cervical screening).']
    },
    checkpoints:[
      { dom:'rto',   text:'Uses the patient\u2019s correct NAME and PRONOUNS and an affirming, non-judgemental manner, recognising fear of discrimination/refusal' },
      { dom:'tasks', text:'Understands the GP role \u2014 collaborative SHARED CARE with gender services \u2014 and does not refuse involvement simply because the patient is transgender' },
      { dom:'tasks', text:'Knows about BRIDGING PRESCRIBING (harm reduction where self-sourcing and at risk) and that it should be done within competence, ideally with specialist advice \u2014 being honest about limits rather than flatly refusing' },
      { dom:'tasks', text:'Arranges appropriate MONITORING per shared-care protocols (hormone levels, FBC/haematocrit, lipids, LFTs, BP) and seeks GIC/specialist guidance' },
      { dom:'tasks', text:'Provides HOLISTIC care \u2014 mental-health screening/support (high distress/self-harm risk), smoking/cardiovascular risk, and ANATOMY-APPROPRIATE screening (e.g. cervical screening if a cervix is present, chest/breast awareness)' },
      { dom:'rto',   text:'Avoids making the patient feel a burden or re-justify themselves, is proactive and supportive, and signposts peer/specialist support' },
      { dom:'rto', text:'Involves the patient as an equal partner in the shared-care plan, is explicit about what the practice can and cannot do and why, and agrees clear next steps so he leaves feeling supported rather than fobbed off' },
      { dom:'gs',    text:'Reaches a safe, supportive plan \u2014 monitoring + shared-care/bridging within competence with specialist advice, mental-health support, anatomy-appropriate screening, clear documentation and follow-up \u2014 not refusal or moralising' },
    ],
    worked:[
      { lbl:'Affirm + reassure', txt:'"Thanks, Sam \u2014 he/him, got it, and I\u2019ll make sure that\u2019s right in your records. You won\u2019t be judged or turned away here; my job is to support you and keep you safe, and I\u2019m glad you came."' },
      { lbl:'The GP role', txt:'"I can absolutely be involved in your care. GPs are expected to work alongside the gender services and share your care \u2014 monitoring and, with the right guidance, prescribing. Let me explain what I can do straight away and what needs specialist input."' },
      { lbl:'Bridging honestly', txt:'"Because you\u2019re already on testosterone and the NHS wait is so long, there\u2019s recognised guidance that I can consider a \u2018bridging\u2019 prescription to keep you safe rather than leave you sourcing it privately. I want to do that properly \u2014 within what I can safely manage \u2014 so I\u2019ll seek advice from a gender specialist to get it right."' },
      { lbl:'Monitoring', txt:'"Either way, I\u2019ll set up your monitoring \u2014 blood count (testosterone can thicken the blood), cholesterol, liver and blood pressure \u2014 on the recommended schedule."' },
      { lbl:'Holistic + screening', txt:'"I also want to look after the rest of you \u2014 how\u2019s your mood and are you getting support? And a practical point: where the anatomy is present, certain screening still matters \u2014 for example, if you have a cervix, cervical screening is still recommended. We\u2019ll handle that sensitively."' },
      { lbl:'Plan + signpost', txt:'"So: correct records, I\u2019ll get specialist advice on the prescription, set up your monitoring, support your mental health, and point you to peer support. You shouldn\u2019t have to fight to be looked after \u2014 we\u2019ll sort this together."' },
    ],
    learning:'Transgender health in primary care is about RESPECTFUL, holistic, non-judgemental care. Use the patient\u2019s correct NAME and PRONOUNS and an affirming manner, recognising that many trans patients have experienced discrimination and fear being refused or made to re-justify themselves. Understand the GP role: GPs are expected to work COLLABORATIVELY with gender services and provide SHARED CARE (monitoring/prescribing under specialist guidance) and should not refuse involvement simply because a patient is transgender. Where a patient is already self-sourcing hormones and at risk amid long waits, GMC/RCGP guidance supports considering a BRIDGING PRESCRIPTION to reduce harm \u2014 done within the GP\u2019s competence, ideally with specialist advice, being honest about limits rather than flatly refusing. Arrange appropriate MONITORING per shared-care protocols (hormone levels, FBC/haematocrit \u2014 testosterone raises haematocrit \u2014 lipids, LFTs, BP) and provide holistic care: mental-health screening and support (trans people have high rates of distress, anxiety, depression and self-harm), smoking/cardiovascular risk, and ANATOMY-APPROPRIATE SCREENING regardless of recorded gender (e.g. cervical screening if a cervix is present, chest/breast awareness). Avoid making the patient feel a burden, be proactive and supportive, document name/pronouns/affirmed gender, signpost peer/specialist support, and recognise the limits of competence by seeking GIC/specialist advice rather than refusing care. The skill is affirming, competent, collaborative care \u2014 not dismissal or moralising. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Transgender health (GMC/RCGP) \u00b7 affirming care + correct name/pronouns \u00b7 shared care & bridging prescribing \u00b7 monitoring \u00b7 anatomy-appropriate screening \u00b7 mental-health support',
      points:[
        { h:'Affirming care', t:'Use correct name/pronouns and a non-judgemental manner; recognise fear of discrimination/refusal. Document affirmed gender.' },
        { h:'GP role/shared care', t:'GPs work collaboratively with gender services and provide shared care (monitoring/prescribing under guidance); don\u2019t refuse involvement because a patient is trans.' },
        { h:'Bridging prescribing', t:'Where self-sourcing and at risk amid long waits, consider a bridging prescription (harm reduction) within competence and with specialist advice; be honest about limits, not flatly refusing.' },
        { h:'Monitoring', t:'Per shared-care protocols: hormone levels, FBC/haematocrit (testosterone raises haematocrit), lipids, LFTs, BP. Seek GIC/specialist guidance.' },
        { h:'Holistic care', t:'Mental-health screening/support (high distress/self-harm), smoking/cardiovascular risk; anatomy-appropriate screening (cervix \u2192 cervical screening; chest/breast awareness) regardless of recorded gender.' },
        { h:'Don\u2019t make them a burden', t:'Be proactive/supportive; avoid repeated re-justification; signpost peer/specialist support.' },
        { h:'Never do', t:'Never misgender or moralise; never refuse care outright; never prescribe beyond competence without advice; never overlook anatomy-appropriate screening or mental-health risk.' },
        { h:'Safety-net & follow-up', t:'Monitoring schedule; specialist advice for prescribing/bridging; mental-health support; clear documentation; follow-up and signposting.' }
      ]
    }
  };

  /* ===== 266. Frontotemporal dementia (Pick's) ===== */
  const c266 = {
    id:'frontotemporal-dementia', title:'"My husband\u2019s only 58 but he\u2019s become rude, reckless with money and oddly uncaring \u2014 it\u2019s like his personality\u2019s changed"', type:'video', duration:12,
    meta:{ age:58, sex:'M', setting:'Face-to-face \u2014 personality/behaviour change in a younger adult, spouse present.', system:'Neurology / Old-age (young-onset) \u2014 frontotemporal dementia: behavioural change, not "just stress"' },
    brief:'A wife brings her 58-year-old husband, Brian, with ~1\u20132 years of progressive PERSONALITY and BEHAVIOUR change \u2014 disinhibition (socially inappropriate/rude remarks), loss of empathy, apathy, impulsivity (reckless spending), repetitive/compulsive behaviours and changed eating \u2014 with relatively PRESERVED memory early on; insight is poor. Recognise the pattern of FRONTOTEMPORAL DEMENTIA (FTD, including the behavioural variant / Pick\u2019s disease) \u2014 a young-onset dementia presenting with early PERSONALITY/behavioural change and language problems rather than the memory-led picture of Alzheimer\u2019s \u2014 and that it is often MISATTRIBUTED to psychiatric illness, midlife crisis, stress or relationship problems, delaying diagnosis; take a COLLATERAL history (the spouse is key), screen the differential (depression, bipolar/mania, psychosis, alcohol/substance, other dementias, structural/endocrine causes \u2014 do basic bloods/cognitive assessment), recognise the impact on the FAMILY and any RISK/safeguarding (finances, driving \u2014 DVLA, vulnerability), and REFER to a young-onset dementia/neurology/memory service for assessment (cognitive testing, imaging). Support the carer. The skill is recognising young-onset behavioural-variant dementia, not mislabelling it stress/psychiatric, collateral history, risk/driving, referral and carer support. No NG12 cancer link.',
    script:{
      opening:'(Wife, husband present and somewhat indifferent.) "I don\u2019t recognise my husband any more. Over the last year or two Brian\u2019s become rude and tactless \u2014 says awful things in public \u2014 he\u2019s spent thousands on nonsense, he doesn\u2019t seem to care about anything or anyone, and he\u2019s eating strangely. His memory\u2019s actually fine. People say it\u2019s a midlife crisis or stress, but this isn\u2019t him. He doesn\u2019t think anything\u2019s wrong."',
      facts:[
        { topic:'Recognise the FTD pattern', text:'FRONTOTEMPORAL DEMENTIA (FTD), including the behavioural variant (Pick\u2019s disease), is a YOUNG-ONSET dementia (often 50s\u201360s) presenting with early PERSONALITY and BEHAVIOUR change \u2014 DISINHIBITION (socially inappropriate remarks/actions), loss of EMPATHY, APATHY, impulsivity/poor judgement (reckless spending), repetitive/compulsive behaviours and altered EATING \u2014 with relatively PRESERVED memory early on and often POOR INSIGHT. Brian\u2019s picture fits; language-variant FTD presents with progressive speech/language decline.' },
        { topic:'Don\u2019t mislabel as stress/psychiatric', text:'KEY \u2014 FTD is frequently MISATTRIBUTED to a midlife crisis, stress, relationship breakdown, depression or primary psychiatric illness, causing diagnostic delay. Personality change of this kind in a younger adult, especially with a clear timeline and collateral history, should prompt consideration of an organic/neurodegenerative cause \u2014 not just "stress".' },
        { topic:'Collateral history & differential', text:'Take a COLLATERAL history (the spouse is essential, as insight is poor), and screen the differential: depression, bipolar/mania, psychosis, alcohol/substance misuse, other dementias (Alzheimer\u2019s \u2014 memory-led), and structural/endocrine/metabolic causes (do basic bloods \u2014 TFTs, B12, etc. \u2014 and a cognitive assessment). The behavioural-led, memory-preserved pattern points toward FTD.' },
        { topic:'Risk, finances & driving', text:'Assess RISK and safeguarding: financial vulnerability/reckless spending (consider protecting finances/lasting power of attorney discussion later), social/behavioural risk, and DRIVING \u2014 dementia affecting judgement has DVLA implications (duty to notify, may need to stop driving). Address these proactively.' },
        { topic:'Refer & support the carer', text:'REFER to a YOUNG-ONSET DEMENTIA service/neurology/memory clinic for assessment (detailed cognitive testing, neuroimaging). Crucially, SUPPORT THE CARER \u2014 this is bewildering and distressing for the family, who may have blamed the patient or themselves; validate, explain it is an illness not a choice, and signpost carer support.' },
        { topic:'The agenda', text:'The wife is distressed and others have dismissed it as a midlife crisis. Recognise young-onset behavioural-variant dementia, take a collateral history, exclude mimics, address risk/finances/driving, refer to a young-onset dementia service, and support the carer \u2014 not mislabel it stress. No NG12 cancer pathway applies.' },
      ],
      ice:{ ideas:'(Wife) "This isn\u2019t him" \u2014 senses something is medically wrong; others say midlife crisis/stress.', concerns:'The personality change, reckless spending, loss of empathy; the impact on the family; what is wrong.', expectations:'An explanation/help. What is needed: recognition of young-onset FTD, collateral history, exclusion of mimics, risk/finance/driving assessment, referral to a young-onset dementia service, and carer support.' },
      cues:['Progressive personality/behaviour change (disinhibition, loss of empathy, apathy, reckless spending, altered eating) with preserved memory + poor insight at 58 \u2014 frontotemporal dementia.','Often mislabelled midlife crisis/stress/psychiatric \u2014 take a collateral history; exclude depression/bipolar/psychosis/alcohol; basic bloods + cognitive assessment.','Assess risk (finances, DVLA/driving), refer to a young-onset dementia/neurology service, and support the carer.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises FRONTOTEMPORAL DEMENTIA (behavioural variant/Pick\u2019s) \u2014 early personality/behaviour change (disinhibition, loss of empathy, apathy, impulsivity/reckless spending, altered eating) with relatively preserved memory and poor insight, young-onset' },
      { dom:'tasks', text:'Does NOT mislabel it as a midlife crisis/stress/primary psychiatric illness \u2014 recognising personality change in a younger adult warrants considering an organic/neurodegenerative cause' },
      { dom:'tasks', text:'Takes a COLLATERAL history (spouse essential given poor insight) and screens the differential (depression, bipolar/mania, psychosis, alcohol/substance, other dementias, structural/endocrine \u2014 basic bloods + cognitive assessment)' },
      { dom:'tasks', text:'Assesses RISK/safeguarding \u2014 financial vulnerability/reckless spending, behavioural risk, and DRIVING (DVLA duty)' },
      { dom:'tasks', text:'REFERS to a young-onset dementia/neurology/memory service for assessment (cognitive testing, neuroimaging)' },
      { dom:'rto',   text:'SUPPORTS the carer \u2014 validates the distress, explains it is an illness not a choice (so the patient isn\u2019t blamed), and signposts carer support' },
      { dom:'rto',   text:'Communicates sensitively with both the patient (poor insight) and the spouse, and checks understanding' },
      { dom:'gs',    text:'Safety-nets and follows up: referral to a young-onset dementia service, basic investigations, risk/finance/driving advice, carer support, and review \u2014 recognising FTD, not dismissing it as stress' },
    ],
    worked:[
      { lbl:'Validate + take seriously', txt:'"Thank you for describing it so clearly \u2014 and you know him best. A real change in personality like this, over a year or two in someone Brian\u2019s age, is NOT just a midlife crisis or stress; it can be a medical condition affecting the front of the brain, and it deserves proper assessment."' },
      { lbl:'Name the possibility', txt:'"One cause of exactly this pattern \u2014 becoming disinhibited, less empathetic, impulsive with money, with memory actually preserved \u2014 is a type of dementia called frontotemporal dementia. It often gets missed because the memory is fine and people assume it\u2019s behaviour or stress."' },
      { lbl:'Collateral + exclude mimics', txt:'"Your account is invaluable, because Brian may not feel anything\u2019s wrong. I\u2019ll do some tests \u2014 thyroid, B12, a cognitive check \u2014 and think about other causes like depression or alcohol, to be thorough."' },
      { lbl:'Address risk', txt:'"A couple of practical things: the spending may need protecting, and I have to ask about driving \u2014 conditions affecting judgement have to be declared to the DVLA, and he may need to stop for now. I know that\u2019s hard."' },
      { lbl:'Refer + carer support', txt:'"I\u2019m referring Brian to a young-onset dementia/neurology service for detailed assessment and a scan. And importantly \u2014 how are YOU coping? This is bewildering, and none of it is his fault or yours. There\u2019s support for carers and I\u2019ll connect you."' },
      { lbl:'Safety-net', txt:'"Come back if things escalate or there\u2019s any risk to him or others. We\u2019ll get the assessment moving and support you both through it."' },
    ],
    learning:'FRONTOTEMPORAL DEMENTIA (FTD), including the behavioural variant (Pick\u2019s disease), is a YOUNG-ONSET dementia (often 50s\u201360s) presenting with early PERSONALITY and BEHAVIOUR change \u2014 disinhibition (socially inappropriate remarks/actions), loss of EMPATHY, apathy, impulsivity and poor judgement (e.g. reckless spending), repetitive/compulsive behaviours and altered eating \u2014 with relatively PRESERVED memory early on and often POOR INSIGHT (a language variant presents with progressive speech/language decline). It is frequently MISATTRIBUTED to a midlife crisis, stress, relationship breakdown, depression or primary psychiatric illness, causing diagnostic delay, so personality change of this kind in a younger adult \u2014 especially with a clear timeline and collateral history \u2014 should prompt consideration of an organic/neurodegenerative cause rather than "just stress". Take a COLLATERAL history (the spouse is essential given poor insight) and screen the differential (depression, bipolar/mania, psychosis, alcohol/substance misuse, other dementias such as Alzheimer\u2019s which is memory-led, and structural/endocrine/metabolic causes \u2014 basic bloods including TFTs/B12 and a cognitive assessment). Assess RISK and safeguarding: financial vulnerability/reckless spending, behavioural risk, and DRIVING (dementia affecting judgement carries a DVLA duty to notify and may require stopping). Refer to a YOUNG-ONSET DEMENTIA service/neurology/memory clinic for detailed cognitive testing and neuroimaging, and crucially SUPPORT THE CARER \u2014 validating the distress, explaining it is an illness not a choice (so the patient is not blamed), and signposting carer support. The skill is recognising young-onset behavioural-variant dementia, taking a collateral history, excluding mimics, addressing risk/driving, referring, and supporting the family \u2014 not mislabelling it stress. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Frontotemporal dementia (behavioural variant/Pick\u2019s) \u00b7 young-onset personality/behaviour change \u00b7 collateral history \u00b7 risk/DVLA \u00b7 young-onset dementia referral \u00b7 carer support',
      points:[
        { h:'Recognise FTD', t:'Young-onset (50s\u201360s) early personality/behaviour change: disinhibition, loss of empathy, apathy, impulsivity/reckless spending, altered eating, repetitive behaviours; memory relatively preserved; poor insight. (Language variant: progressive speech decline.)' },
        { h:'Don\u2019t mislabel', t:'Frequently misattributed to midlife crisis/stress/depression/psychiatric illness \u2192 delay. Personality change in a younger adult warrants considering an organic cause.' },
        { h:'Collateral & differential', t:'Collateral history (spouse essential \u2014 poor insight). Exclude depression, bipolar/mania, psychosis, alcohol/substance, other dementias, structural/endocrine causes; basic bloods + cognitive assessment.' },
        { h:'Risk & driving', t:'Financial vulnerability/reckless spending (protect finances/LPA), behavioural risk, DVLA duty (dementia affecting judgement \u2014 notify, may need to stop driving).' },
        { h:'Refer', t:'Young-onset dementia service/neurology/memory clinic for cognitive testing and neuroimaging.' },
        { h:'Support the carer', t:'Validate distress; explain it is an illness not a choice; signpost carer support. Reduces blame of patient/self.' },
        { h:'Never do', t:'Never dismiss young-onset personality change as stress/midlife crisis; never skip collateral history; never overlook finances/driving risk; never neglect the carer.' },
        { h:'Safety-net & follow-up', t:'Referral + basic investigations; risk/finance/driving advice; carer support; review; escalate if risk to patient/others.' }
      ]
    }
  };

  /* ===== 267. Substance misuse in a teenager ===== */
  const c267 = {
    id:'teen-substance-misuse', title:'"My mate\u2019s mum found vapes and some pills in my bag \u2014 it\u2019s no big deal, everyone does it. You won\u2019t tell my parents, right?"', type:'video', duration:12,
    meta:{ age:15, sex:'M', setting:'Face-to-face \u2014 a teenager brought in over substance use.', system:'Adolescent health / Safeguarding \u2014 substance misuse in a teenager: HEADSS, harm reduction & confidentiality' },
    brief:'A 15-year-old, Kai, attends (brought reluctantly) after pills/vapes were found; he minimises it ("everyone does it") and is worried about confidentiality. The task is the ADOLESCENT consultation done well: build RAPPORT and engage him directly, clarify CONFIDENTIALITY honestly (you keep things confidential UNLESS there is a serious risk of harm to him or others, in which case you may need to involve others/safeguarding \u2014 explain this up front), take a non-judgemental SUBSTANCE history (what, how much, route, frequency, context, other drugs/alcohol, mental health) within a HEADSS psychosocial assessment (Home, Education, Activities, Drugs, Sexuality, Suicide/mood/Safety), assess RISK and SAFEGUARDING (exploitation/county lines, abuse, mental health/self-harm, dependence, risky behaviours), assess Gillick COMPETENCE, deliver HARM-REDUCTION and motivational, non-lecturing advice, and signpost/refer to young people\u2019s SUBSTANCE-MISUSE services and involve parents/safeguarding where indicated and proportionate. The skill is engaging the adolescent, handling confidentiality correctly, HEADSS/safeguarding (incl. exploitation), harm reduction not lecturing, and appropriate signposting/referral. No NG12 cancer link.',
    script:{
      opening:'"My mate\u2019s mum found some vapes and a few pills in my bag and made a massive deal of it. Honestly it\u2019s nothing \u2014 everyone at school does it, it\u2019s no big deal. I only came because I was made to. You\u2019re not going to tell my parents or get me in trouble, are you?"',
      facts:[
        { topic:'Build rapport & engage the teenager', text:'CORE \u2014 engage Kai DIRECTLY and non-judgementally; a lecture will lose him. Acknowledge he was brought reluctantly, treat him with respect, and build rapport before exploring the issue \u2014 the relationship determines whether he discloses honestly.' },
        { topic:'Confidentiality \u2014 honest up front', text:'KEY \u2014 clarify CONFIDENTIALITY honestly at the start: what he tells you is confidential, EXCEPT where there is a serious risk of harm to him or others, when you may need to share information (e.g. safeguarding). Being upfront builds trust and is more honest than promising blanket secrecy you can\u2019t keep.' },
        { topic:'HEADSS psychosocial assessment', text:'Take a structured HEADSS assessment \u2014 HOME, EDUCATION/employment, ACTIVITIES, DRUGS (and alcohol/vaping: what, how much, route, frequency, context, who with, how funded), SEXUALITY/relationships, and SUICIDE/self-harm/mood/SAFETY \u2014 non-judgementally. This frames the substance use within his whole life and surfaces risk.' },
        { topic:'Risk & safeguarding \u2014 incl. exploitation', text:'CRITICAL \u2014 assess RISK and SAFEGUARDING: child criminal/sexual EXPLOITATION (county lines \u2014 unexplained money/items, older "friends", going missing, being recruited to carry/sell), abuse/neglect, mental-health/self-harm, dependence, and risky behaviours. "Where do the pills come from / who gives them to you / do you owe anyone?" can reveal exploitation. Involve SAFEGUARDING where indicated.' },
        { topic:'Competence, harm reduction & signposting', text:'Assess GILLICK competence. Provide HARM-REDUCTION and MOTIVATIONAL advice (honest information about risks without scare-mongering, what he wants/his goals) rather than moralising; signpost/refer to young people\u2019s SUBSTANCE-MISUSE services and mental-health support; and involve PARENTS/safeguarding where proportionate and in his interests (encouraging him to involve a trusted adult). Follow up.' },
        { topic:'The agenda', text:'He minimises it and fears being grassed up. Engage him, clarify confidentiality honestly, do a HEADSS assessment, actively screen exploitation/safeguarding and mental health, assess competence, give harm-reduction (not a lecture), signpost to youth services, and act on any safeguarding concern proportionately. No NG12 cancer pathway applies.' },
      ],
      ice:{ ideas:'"It\u2019s no big deal, everyone does it"; mainly worried his parents will be told.', concerns:'Confidentiality/getting in trouble; being lectured; being made to come.', expectations:'To be let off / kept secret. What he needs: rapport, honest confidentiality, a HEADSS assessment, safeguarding/exploitation and mental-health screening, harm-reduction advice (not a lecture), and signposting \u2014 with parents/safeguarding involved if indicated.' },
      cues:['Teenager minimising substance use, anxious about confidentiality \u2014 engage directly, clarify confidentiality honestly (shared only if serious risk of harm).','HEADSS assessment + non-judgemental substance history; actively screen safeguarding \u2014 child exploitation/county lines, abuse, mental health/self-harm.','Assess Gillick competence; harm reduction not lecturing; signpost young people\u2019s substance services; involve parents/safeguarding if indicated.']
    },
    checkpoints:[
      { dom:'rto',   text:'Builds RAPPORT and engages the teenager DIRECTLY and non-judgementally, rather than lecturing, recognising he attended reluctantly' },
      { dom:'rto',   text:'Clarifies CONFIDENTIALITY honestly up front \u2014 confidential unless serious risk of harm to him/others (then information may be shared/safeguarding) \u2014 rather than promising blanket secrecy' },
      { dom:'tasks', text:'Takes a structured HEADSS psychosocial assessment with a non-judgemental substance history (what/how much/route/frequency/context/funding/other drugs/alcohol)' },
      { dom:'tasks', text:'Actively screens RISK and SAFEGUARDING \u2014 child criminal/sexual EXPLOITATION (county lines), abuse/neglect, mental-health/self-harm, dependence, risky behaviours' },
      { dom:'tasks', text:'Assesses GILLICK competence and provides HARM-REDUCTION/motivational advice (honest risk information, his goals) rather than moralising' },
      { dom:'tasks', text:'Signposts/refers to young people\u2019s SUBSTANCE-MISUSE and mental-health services, and involves parents/safeguarding where proportionate and in his interests' },
      { dom:'rto', text:'Explains any information-sharing or safeguarding step to him before acting, keeping him engaged and informed rather than feeling betrayed, and agrees a plan he is willing to follow' },
      { dom:'gs',    text:'Reaches a safe, supportive plan with appropriate safeguarding action, harm-reduction, signposting, competence/confidentiality handled correctly, and follow-up \u2014 engaging the teenager, not lecturing or breaching trust unnecessarily' },
    ],
    worked:[
      { lbl:'Engage, not lecture', txt:'"Thanks for coming in, even if you were made to \u2014 I\u2019m not here to tell you off or get you in trouble. I\u2019d genuinely just like to understand what\u2019s going on from your side. Is that okay?"' },
      { lbl:'Confidentiality honestly', txt:'"Let me be straight about confidentiality, because it matters: what you tell me stays between us \u2014 I won\u2019t automatically tell your parents. The only exception is if I\u2019m worried you or someone else is at serious risk of harm, when I might need to involve others to keep you safe. I\u2019ll always try to talk to you first."' },
      { lbl:'HEADSS + substance history', txt:'"Tell me a bit about things generally \u2014 home, school, what you do for fun \u2014 and then about the vapes and pills: what are they, how often, who with, and how do you get them? No judgement, I just need the real picture."' },
      { lbl:'Screen exploitation/safeguarding', txt:'"A couple of important questions: where do the pills come from, and does anyone older give them to you or ask you to carry or sell things? Do you owe anyone money? And how\u2019s your mood \u2014 ever felt like harming yourself?"' },
      { lbl:'Harm reduction + signpost', txt:'"I\u2019ll give you honest info on the risks rather than a lecture, and there\u2019s a young people\u2019s service that\u2019s confidential and really helpful \u2014 I can refer you. What would YOU want to change, if anything?"' },
      { lbl:'Safety-net + trusted adult', txt:'"If I\u2019m worried about your safety I\u2019ll be honest with you about what I need to do. It\u2019s also worth having a trusted adult in your corner \u2014 we can think about that together. Come back any time; you\u2019re not in trouble with me."' },
    ],
    learning:'Substance misuse in a teenager is an ADOLESCENT consultation where engagement and safeguarding matter as much as the drugs. Build RAPPORT and engage the young person directly and non-judgementally \u2014 a lecture loses them. Clarify CONFIDENTIALITY honestly at the outset: what they tell you is confidential except where there is a serious risk of harm to them or others, when you may need to share information (safeguarding); being upfront builds trust and is more honest than promising blanket secrecy. Take a structured HEADSS psychosocial assessment \u2014 Home, Education/employment, Activities, Drugs (and alcohol/vaping: what, how much, route, frequency, context, who with, how funded), Sexuality/relationships, and Suicide/self-harm/mood/Safety \u2014 framing the substance use within the whole of the young person\u2019s life. Critically, assess RISK and SAFEGUARDING: child criminal/sexual EXPLOITATION (county lines \u2014 unexplained money/items, older "friends", going missing, being recruited to carry or sell, owing money/debt bondage), abuse/neglect, mental-health/self-harm, dependence and risky behaviours \u2014 questions about where substances come from, who supplies them and any debts can reveal exploitation \u2014 and involve safeguarding where indicated. Assess GILLICK competence, provide HARM-REDUCTION and motivational advice (honest information without scare-mongering, exploring the young person\u2019s own goals) rather than moralising, and signpost/refer to young people\u2019s substance-misuse and mental-health services, involving parents/a trusted adult and safeguarding where proportionate and in the young person\u2019s interests. The skill is engaging the adolescent, handling confidentiality correctly, HEADSS/safeguarding (especially exploitation), harm reduction not lecturing, and appropriate signposting/referral. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Adolescent substance misuse \u00b7 HEADSS assessment \u00b7 confidentiality & Gillick \u00b7 safeguarding/child exploitation (county lines) \u00b7 harm reduction & youth services',
      points:[
        { h:'Engage, don\u2019t lecture', t:'Build rapport, engage the teenager directly and non-judgementally; the relationship determines honest disclosure.' },
        { h:'Confidentiality honestly', t:'Confidential unless serious risk of harm to self/others (then may share/safeguarding). Explain up front; don\u2019t promise blanket secrecy.' },
        { h:'HEADSS', t:'Home, Education, Activities, Drugs/alcohol/vaping (what/how much/route/frequency/context/funding), Sexuality, Suicide/mood/Safety \u2014 non-judgemental.' },
        { h:'Safeguarding/exploitation', t:'Screen child criminal/sexual exploitation (county lines \u2014 money/items, older "friends", going missing, carrying/selling, debts), abuse/neglect, mental health/self-harm, dependence. Involve safeguarding if indicated.' },
        { h:'Competence & harm reduction', t:'Assess Gillick competence; give harm-reduction/motivational advice (honest risks, the young person\u2019s goals) rather than moralising.' },
        { h:'Signpost/refer', t:'Young people\u2019s substance-misuse and mental-health services; involve parents/trusted adult and safeguarding where proportionate and in their interests.' },
        { h:'Never do', t:'Never lecture/moralise; never promise unconditional secrecy; never miss exploitation/safeguarding or mental-health risk; never ignore Gillick competence.' },
        { h:'Safety-net & follow-up', t:'Safeguarding action if needed; harm-reduction; youth-service referral; trusted-adult involvement; honest about any information-sharing; follow-up.' }
      ]
    }
  };

  /* ===== 268. Abdominal migraine ===== */
  const c268 = {
    id:'abdominal-migraine', title:'"My 8-year-old keeps getting episodes of severe tummy pain with sickness and pallor \u2014 then she\u2019s completely fine. Tests are normal"', type:'telephone', duration:12,
    meta:{ age:8, sex:'F', setting:'Telephone \u2014 recurrent episodic abdominal pain in a child, parent calling.', system:'Paediatrics \u2014 abdominal migraine: recognising the pattern after excluding red flags' },
    brief:'A mother calls about her 8-year-old, Mia, who has recurrent STEREOTYPED episodes of severe MIDLINE/central abdominal pain lasting hours, with nausea/vomiting, PALLOR, anorexia and lethargy, occurring every few weeks, with COMPLETE wellness between episodes and normal growth; basic tests have been normal, and there is a family history of migraine. The task is to recognise ABDOMINAL MIGRAINE \u2014 a recognised paediatric variant of migraine causing recurrent episodic central abdominal pain with associated features (pallor, nausea/vomiting, anorexia) and symptom-free intervals, often with a family/personal history of migraine, typically resolving or evolving into typical migraine later \u2014 as a diagnosis made AFTER excluding red flags and other causes (it is largely clinical/of exclusion); take a history and crucially screen RED FLAGS for organic disease (weight loss/faltering growth, pain waking from sleep, bilious/persistent vomiting, GI bleeding, fever, localised/RIF pain, abnormal exam, nocturnal symptoms, dysuria, age <4) and consider differentials (constipation, UTI, coeliac, IBD, surgical causes, functional abdominal pain); manage with reassurance/explanation, trigger identification, lifestyle, acute symptomatic treatment and (in frequent/severe cases) consideration of prophylaxis/specialist referral; and reassure the family while safety-netting. The skill is recognising the stereotyped episodic pattern with symptom-free intervals, excluding red flags, and reassuring/managing \u2014 not endless re-investigation. No NG12 cancer link.',
    script:{
      opening:'"I\u2019m worried about Mia \u2014 she keeps getting these attacks of really bad tummy pain in the middle of her tummy, lasting hours, where she goes pale, feels sick, sometimes vomits, and just wants to lie down. Then it passes and she\u2019s totally back to normal for weeks. The GP did some tests and they were normal. I get migraines myself. What is it, and why do the tests keep coming back fine?"',
      facts:[
        { topic:'Recognise abdominal migraine', text:'ABDOMINAL MIGRAINE is a recognised paediatric variant of migraine: recurrent, STEREOTYPED episodes of moderate-severe MIDLINE/central abdominal pain lasting hours (typically 1\u201372h), with associated features \u2014 PALLOR, nausea/vomiting, anorexia, lethargy \u2014 and crucially COMPLETE WELLNESS between episodes with normal growth, often with a personal/family history of MIGRAINE. It typically resolves or evolves into typical migraine in later childhood/adolescence. Mia\u2019s stereotyped episodes with symptom-free intervals and maternal migraine fit.' },
        { topic:'A clinical diagnosis after excluding red flags', text:'KEY \u2014 abdominal migraine is largely a CLINICAL diagnosis of EXCLUSION: it is made after a history/examination and exclusion of red flags and other causes, which is why "the tests keep coming back normal" \u2014 normal investigations support, rather than undermine, the diagnosis. Explain this so the family isn\u2019t left feeling nothing has been found.' },
        { topic:'Screen the RED FLAGS', text:'CRITICAL \u2014 screen RED FLAGS for organic disease that would NOT fit abdominal migraine: weight loss/faltering GROWTH, pain or vomiting WAKING the child from sleep/nocturnal symptoms, BILIOUS or persistent vomiting, GI BLEEDING (blood in stool/vomit), fever, localised/right-iliac-fossa pain, abnormal examination, dysuria, joint/skin/systemic features, or age <4. Any of these warrant assessment/investigation rather than an abdominal-migraine label.' },
        { topic:'Differential', text:'Consider differentials for recurrent paediatric abdominal pain: CONSTIPATION, UTI, COELIAC disease, INFLAMMATORY BOWEL DISEASE, surgical causes (intermittent obstruction/intussusception), mesenteric adenitis, and FUNCTIONAL abdominal pain / IBS. Basic tests (and coeliac serology, urine) help exclude these; the episodic stereotyped pattern with pallor and well intervals points to abdominal migraine.' },
        { topic:'Manage & reassure', text:'MANAGE: reassure and EXPLAIN the diagnosis (a form of migraine \u2014 real, not "nothing"), identify and avoid TRIGGERS (stress, sleep, certain foods, dehydration), lifestyle measures, ACUTE symptomatic treatment (rest in a quiet dark room, analgesia, antiemetics, hydration; migraine-type acute treatments as advised), and for FREQUENT/severe episodes consider prophylaxis/paediatric referral. Keep a symptom diary.' },
        { topic:'The agenda', text:'The mother is worried and puzzled that tests are normal. Recognise abdominal migraine from the stereotyped episodic pattern with well intervals and migraine history, explain that normal tests support the diagnosis, screen red flags, manage with reassurance/triggers/acute treatment, and safety-net \u2014 not endless re-investigation. No NG12 cancer pathway applies.' },
      ],
      ice:{ ideas:'Something is being missed because the recurrent attacks keep happening despite normal tests.', concerns:'The severe recurrent attacks; not having an explanation; why tests are normal.', expectations:'A diagnosis/explanation. What is needed: recognition of abdominal migraine, explanation that normal tests support it, red-flag exclusion, trigger/acute management, and safety-netting \u2014 not endless investigation.' },
      cues:['Recurrent stereotyped central abdominal pain + pallor/nausea/vomiting/lethargy lasting hours, COMPLETELY well between, normal growth, family migraine \u2014 abdominal migraine.','Clinical diagnosis of exclusion \u2014 normal tests SUPPORT it; explain this to the family.','Screen red flags (weight loss/faltering growth, nocturnal/bilious vomiting, GI bleeding, localised pain, fever, age <4); manage with triggers/acute treatment; safety-net.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises ABDOMINAL MIGRAINE \u2014 recurrent stereotyped central abdominal pain with pallor/nausea/vomiting/anorexia/lethargy lasting hours, with complete wellness between episodes, normal growth and often a migraine history' },
      { dom:'tasks', text:'Understands it is largely a CLINICAL diagnosis of EXCLUSION and explains that NORMAL investigations SUPPORT (not undermine) the diagnosis' },
      { dom:'tasks', text:'Screens the RED FLAGS that would not fit (weight loss/faltering growth, nocturnal/waking or bilious/persistent vomiting, GI bleeding, fever, localised/RIF pain, abnormal exam, dysuria, age <4)' },
      { dom:'tasks', text:'Considers the differential (constipation, UTI, coeliac, IBD, surgical causes, functional abdominal pain) and uses appropriate basic tests (coeliac serology, urine) to exclude' },
      { dom:'tasks', text:'Manages \u2014 reassurance/explanation, trigger identification/avoidance, lifestyle, acute symptomatic treatment, and prophylaxis/paediatric referral for frequent/severe episodes \u2014 with a symptom diary' },
      { dom:'rto',   text:'Reassures and explains the diagnosis clearly (a real form of migraine, not "nothing"), addressing the "why are the tests normal?" concern, and checks understanding' },
      { dom:'rto', text:'Draws out and addresses the worry that something serious has been missed, explaining the safety-net and review plan so the parent feels heard rather than dismissed with \u2018the tests are normal\u2019' },
      { dom:'gs',    text:'Safety-nets and follows up: red flags warranting urgent review/reassessment, trigger/acute management, review and a diary, and paediatric referral if frequent/severe or red flags \u2014 recognising the pattern, not endlessly re-investigating' },
    ],
    worked:[
      { lbl:'Name it + reassure', txt:'"What you\u2019re describing \u2014 stereotyped attacks of central tummy pain with pallor and sickness lasting hours, then completely well for weeks, with your own migraines in the background \u2014 sounds like abdominal migraine. It\u2019s a recognised form of migraine in children, and it\u2019s real, not \u2018nothing\u2019."' },
      { lbl:'Why tests are normal', txt:'"That\u2019s exactly why the tests keep coming back normal \u2014 it\u2019s a diagnosis we make from the pattern after ruling out other causes, not something a blood test shows. Normal results actually fit and are reassuring."' },
      { lbl:'Red-flag check', txt:'"Let me just check a few things that would make me think differently: is she losing weight or off her growth? Does the pain or vomiting wake her at night, is the vomit ever green, any blood in her stool or vomit, fevers, or pain always in one spot? \u2026 None of those \u2014 reassuring."' },
      { lbl:'Exclude mimics', txt:'"I\u2019ll make sure constipation, a urine infection and coeliac have been considered, as those can mimic it \u2014 a urine test and a coeliac blood test if not done."' },
      { lbl:'Manage', txt:'"For attacks: rest in a quiet, dark room, fluids, simple painkillers and an anti-sickness if needed. Keep a diary to spot triggers \u2014 stress, missed meals, poor sleep, dehydration. If they\u2019re frequent, there are preventive options and we can involve paediatrics."' },
      { lbl:'Safety-net', txt:'"Come back \u2014 or seek urgent help \u2014 if the pattern changes, she loses weight, the pain stays in one place or wakes her, you see blood, or she\u2019s unwell between attacks. Otherwise this often improves with age, sometimes turning into ordinary migraines later."' },
    ],
    learning:'ABDOMINAL MIGRAINE is a recognised paediatric variant of migraine: recurrent, STEREOTYPED episodes of moderate-to-severe MIDLINE/central abdominal pain lasting hours (typically 1\u201372h) with associated PALLOR, nausea/vomiting, anorexia and lethargy, and \u2014 crucially \u2014 COMPLETE wellness between episodes with normal growth, often with a personal/family history of migraine, typically resolving or evolving into typical migraine in later childhood/adolescence. It is largely a CLINICAL diagnosis of EXCLUSION, made after history/examination and exclusion of red flags and other causes \u2014 which is why investigations are normal: normal tests SUPPORT rather than undermine the diagnosis, and explaining this prevents the family feeling nothing has been found. Screen the RED FLAGS that would not fit abdominal migraine: weight loss/faltering growth, pain or vomiting waking the child from sleep/nocturnal symptoms, bilious or persistent vomiting, GI bleeding, fever, localised/right-iliac-fossa pain, abnormal examination, dysuria, systemic features, or age <4 \u2014 any of which warrant assessment/investigation. Consider the differential for recurrent paediatric abdominal pain (constipation, UTI, coeliac disease, inflammatory bowel disease, surgical causes such as intermittent obstruction/intussusception, mesenteric adenitis, and functional abdominal pain/IBS) and use appropriate basic tests (coeliac serology, urine) to exclude. Manage with reassurance and clear explanation (a real form of migraine, not "nothing"), trigger identification/avoidance (stress, sleep, food, dehydration), lifestyle measures, acute symptomatic treatment (rest in a quiet dark room, analgesia, antiemetics, hydration, migraine-type acute treatment as advised), a symptom diary, and consideration of prophylaxis/paediatric referral for frequent or severe episodes. The skill is recognising the stereotyped episodic pattern with symptom-free intervals, explaining why normal tests fit, excluding red flags, and managing/reassuring \u2014 not endless re-investigation. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Abdominal migraine (paediatric migraine variant) \u00b7 stereotyped episodic central pain + symptom-free intervals \u00b7 diagnosis of exclusion \u00b7 red flags \u00b7 trigger/acute management',
      points:[
        { h:'Recognise', t:'Recurrent stereotyped central abdominal pain (hours) with pallor, nausea/vomiting, anorexia, lethargy; complete wellness between; normal growth; often migraine history. Resolves/evolves into typical migraine.' },
        { h:'Diagnosis of exclusion', t:'Largely clinical \u2014 made after excluding red flags/other causes. Normal investigations support, not undermine, the diagnosis. Explain this to the family.' },
        { h:'Red flags', t:'Weight loss/faltering growth, nocturnal/waking or bilious/persistent vomiting, GI bleeding, fever, localised/RIF pain, abnormal exam, dysuria, age <4 \u2192 assess/investigate.' },
        { h:'Differential', t:'Constipation, UTI, coeliac, IBD, surgical causes (intermittent obstruction/intussusception), mesenteric adenitis, functional abdominal pain/IBS. Use coeliac serology/urine to exclude.' },
        { h:'Management', t:'Reassurance/explanation, trigger identification/avoidance (stress, sleep, food, dehydration), lifestyle, acute treatment (quiet dark room, analgesia, antiemetic, hydration), symptom diary.' },
        { h:'Frequent/severe', t:'Consider prophylaxis/paediatric referral for frequent or severe episodes.' },
        { h:'Never do', t:'Never endlessly re-investigate once the pattern is clear and red flags excluded; never label it without excluding red flags/mimics; never dismiss it as "nothing" because tests are normal.' },
        { h:'Safety-net & follow-up', t:'Urgent review if pattern changes, weight loss, localised/nocturnal pain, GI bleeding, or unwell between attacks; trigger/acute management; diary; paediatric referral if frequent/severe.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c265, c266, c267, c268);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'transgender-health': {
      ceg: ['Gender, reproductive & sexual health', 'Health disadvantage & vulnerabilities'],
      stem: {
        name: 'Sam', age: '26 years \u00b7 trans man (he/him)',
        pmh: ['Trans man (assigned female at birth); on private testosterone amid a ~4-year NHS GIC wait', 'Requests monitoring + GP prescribing; fears being judged/refused', 'Screen mental health; anatomy-appropriate screening (cervix present)'],
        meds: ['Testosterone (private)'],
        allergy: 'NKDA',
        recent: '"I started hormones privately while waiting years for the NHS \u2014 will you monitor and prescribe?"',
        reason: 'Face-to-face \u2014 transgender patient seeking GP support.'
      },
      timeMap: [
        { t:'0\u20102',  h:'Affirm', d:'Correct name/pronouns; non-judgemental; reassure not refused/judged; fix records.' },
        { t:'2\u20105',  h:'GP role/shared care', d:'Collaborative shared care; don\u2019t refuse; consider bridging prescribing within competence + specialist advice.' },
        { t:'5\u20108',  h:'Monitoring', d:'FBC/haematocrit, lipids, LFTs, BP per shared-care protocol; seek GIC advice.' },
        { t:'8\u201010', h:'Holistic', d:'Mental-health support (high distress/self-harm); anatomy-appropriate screening (cervix \u2192 cervical screening).' },
        { t:'10\u201012', h:'Signpost + plan', d:'Peer/specialist support; don\u2019t make him a burden; document; follow-up.' }
      ],
      wordPics: {
        fail: 'Misgenders or refuses to be involved; flatly declines prescribing/monitoring; ignores mental health/anatomy-appropriate screening; makes him re-justify himself.',
        pass: 'Uses correct name/pronouns, engages with shared care/monitoring, and supports holistically.',
        exc:  'Affirming (correct name/pronouns), understands shared care and bridging within competence with specialist advice, arranges monitoring, supports mental health and anatomy-appropriate screening, and signposts \u2014 not refusal or moralising.'
      },
      avoid: [
        { dont:'"I can\u2019t get involved in any of that \u2014 you\u2019ll have to wait for the gender clinic."', instead:'"I can be involved \u2014 GPs share care with gender services \u2014 and given you\u2019re already on testosterone, I\u2019ll seek specialist advice about a bridging prescription and set up your monitoring."', why:'Flatly refusing involvement is contrary to GP shared-care expectations and leaves the patient at risk.' },
        { dont:'(Misgendering) using the wrong name/pronouns.', instead:'"You\u2019re Sam, he/him \u2014 I\u2019ll make sure your records reflect that."', why:'Correct name/pronouns are foundational to respectful, effective care.' },
        { dont:'(Ignoring screening) overlooking anatomy-appropriate screening.', instead:'"If you have a cervix, cervical screening is still recommended \u2014 we\u2019ll handle it sensitively."', why:'Anatomy-appropriate screening must continue regardless of recorded gender.' }
      ]
    },

    'frontotemporal-dementia': {
      ceg: ['Older adults', 'Mental health & addiction'],
      stem: {
        name: 'Brian (wife present)', age: '58 years \u00b7 male',
        pmh: ['1\u20102 years progressive personality/behaviour change: disinhibition, loss of empathy, apathy, reckless spending, altered eating', '\u26a0 Memory relatively preserved; poor insight', 'Others call it "midlife crisis/stress"'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '(Wife) "He\u2019s become rude, reckless with money and uncaring \u2014 it\u2019s like his personality\u2019s changed."',
        reason: 'Face-to-face \u2014 personality/behaviour change in a younger adult.'
      },
      timeMap: [
        { t:'0\u20102',  h:'Take seriously', d:'Personality change over 1\u20102 years at 58 is not "just stress" \u2014 consider an organic cause.' },
        { t:'2\u20105',  h:'Recognise FTD', d:'Disinhibition/loss of empathy/apathy/impulsivity/altered eating + preserved memory + poor insight = frontotemporal dementia.' },
        { t:'5\u20107',  h:'Collateral + exclude', d:'Spouse history; exclude depression/bipolar/psychosis/alcohol; bloods (TFTs/B12) + cognitive assessment.' },
        { t:'7\u20109',  h:'Risk', d:'Finances/reckless spending, DVLA/driving, vulnerability/safeguarding.' },
        { t:'9\u201012', h:'Refer + carer', d:'Young-onset dementia/neurology referral; support the carer; it\u2019s an illness not a choice.' }
      ],
      wordPics: {
        fail: 'Mislabels it midlife crisis/stress/depression; no collateral history or referral; ignores finances/driving risk and the carer.',
        pass: 'Recognises possible FTD, takes collateral history, excludes mimics, and refers with carer support.',
        exc:  'Recognises young-onset behavioural-variant FTD, takes a collateral history and excludes mimics, addresses finance/driving risk, refers to a young-onset dementia service, and supports the carer (illness not a choice).'
      },
      avoid: [
        { dont:'"It\u2019s probably a midlife crisis or stress \u2014 try couples counselling."', instead:'"A genuine personality change over a year or two at his age can be a brain condition like frontotemporal dementia \u2014 it needs proper assessment, not just counselling."', why:'Mislabelling young-onset FTD as stress/crisis delays diagnosis and support.' },
        { dont:'(No driving/finance risk) ignoring safety.', instead:'"We need to think about protecting finances, and conditions affecting judgement must be declared to the DVLA."', why:'Financial vulnerability and driving are key risks in behavioural dementia.' },
        { dont:'(Neglecting carer) focusing only on the patient.', instead:'"How are you coping? This is bewildering, it\u2019s not his fault or yours \u2014 there\u2019s carer support."', why:'Carer support and de-blaming are central to good dementia care.' }
      ]
    },

    'teen-substance-misuse': {
      ceg: ['Children & young people', 'Health disadvantage & vulnerabilities'],
      stem: {
        name: 'Kai', age: '15 years \u00b7 male',
        pmh: ['Vapes + pills found in his bag; minimises ("everyone does it"); attended reluctantly', 'Worried about confidentiality/parents', 'Screen safeguarding/exploitation + mental health'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"It\u2019s no big deal, everyone does it. You won\u2019t tell my parents, right?"',
        reason: 'Face-to-face \u2014 teenager brought in over substance use.'
      },
      timeMap: [
        { t:'0\u20102',  h:'Engage', d:'Build rapport, non-judgemental, engage him directly \u2014 not a lecture.' },
        { t:'2\u20104',  h:'Confidentiality honestly', d:'Confidential unless serious risk of harm to self/others (then may share/safeguarding); explain up front.' },
        { t:'4\u20107',  h:'HEADSS + substance hx', d:'Home/Education/Activities/Drugs(what/how much/route/funding)/Sexuality/Suicide-mood-Safety.' },
        { t:'7\u20109',  h:'Safeguarding/exploitation', d:'County lines (money/items, older "friends", missing, carrying/selling, debts), abuse, mental health/self-harm.' },
        { t:'9\u201012', h:'Competence + harm reduction', d:'Gillick; harm-reduction/motivational; youth-service referral; parents/safeguarding if indicated; follow-up.' }
      ],
      wordPics: {
        fail: 'Lectures/moralises or promises blanket secrecy; no HEADSS or exploitation/safeguarding screen; misses mental-health risk; no signposting.',
        pass: 'Engages the teenager, handles confidentiality honestly, does a HEADSS/safeguarding screen, and signposts youth services.',
        exc:  'Builds rapport and engages directly, clarifies confidentiality honestly, does a HEADSS assessment with exploitation/safeguarding and mental-health screening, assesses Gillick competence, gives harm-reduction not lecturing, and signposts/refers with proportionate safeguarding.'
      },
      avoid: [
        { dont:'"Drugs are dangerous and illegal \u2014 you need to stop right now." (lecture)', instead:'"I\u2019m not here to tell you off \u2014 help me understand what\u2019s going on, and I\u2019ll give you honest information."', why:'Lecturing/moralising disengages the adolescent and prevents honest disclosure.' },
        { dont:'"Don\u2019t worry, I won\u2019t tell anyone anything, I promise."', instead:'"It\u2019s confidential unless I\u2019m worried you or someone else is at serious risk \u2014 then I might need to involve others, and I\u2019d tell you first."', why:'Promising unconditional secrecy is unsafe and dishonest given safeguarding duties.' },
        { dont:'(No exploitation screen) treating it as simple experimentation.', instead:'"Where do the pills come from, does anyone older give them to you or ask you to carry/sell, do you owe anyone?"', why:'Missing child criminal exploitation/county lines is a serious safeguarding failure.' }
      ]
    },

    'abdominal-migraine': {
      ceg: ['Children & young people', 'New & undifferentiated presentations'],
      stem: {
        name: 'Mia (mother calling)', age: '8 years \u00b7 female',
        pmh: ['Recurrent stereotyped central abdominal pain (hours) + pallor/nausea/vomiting/lethargy every few weeks', 'COMPLETELY well between; normal growth; basic tests normal', 'Family history of migraine (mother)'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Episodes of severe tummy pain with sickness and pallor \u2014 then she\u2019s completely fine. Tests are normal."',
        reason: 'Telephone \u2014 recurrent episodic abdominal pain in a child.'
      },
      timeMap: [
        { t:'0\u20102',  h:'Recognise', d:'Stereotyped central pain + pallor/vomiting, well between, normal growth, family migraine = abdominal migraine.' },
        { t:'2\u20104',  h:'Why tests normal', d:'Diagnosis of exclusion \u2014 normal tests support it; explain to the family.' },
        { t:'4\u20106',  h:'Red flags', d:'Weight loss/faltering growth, nocturnal/bilious vomiting, GI bleeding, localised/RIF pain, fever, age <4.' },
        { t:'6\u20108',  h:'Exclude mimics', d:'Constipation, UTI, coeliac, IBD, surgical causes; coeliac serology/urine.' },
        { t:'8\u201012', h:'Manage + safety-net', d:'Triggers/diary, acute treatment (dark room/fluids/analgesia/antiemetic); paediatric referral if frequent/severe; red-flag advice.' }
      ],
      wordPics: {
        fail: 'Endlessly re-investigates or dismisses it as "nothing" because tests are normal; misses red flags or fails to exclude coeliac/UTI.',
        pass: 'Recognises abdominal migraine, explains why tests are normal, screens red flags, and manages/reassures.',
        exc:  'Recognises abdominal migraine (stereotyped episodes + well intervals + migraine history), explains normal tests support the diagnosis, screens red flags, excludes mimics (coeliac/UTI), manages with triggers/acute treatment and a diary, and safety-nets.'
      },
      avoid: [
        { dont:'"The tests are normal, so there\u2019s nothing wrong \u2014 try not to worry."', instead:'"Normal tests actually fit \u2014 this is abdominal migraine, a real condition diagnosed from the pattern after ruling other things out."', why:'Dismissing it as "nothing" because tests are normal invalidates the family and misses the diagnosis.' },
        { dont:'(Endless re-investigation) repeating scans/bloods each episode.', instead:'"Once the pattern\u2019s clear and red flags are excluded, we manage it rather than keep re-scanning."', why:'Repeated investigation of a clear stereotyped pattern is unhelpful and anxiety-provoking.' },
        { dont:'(No red-flag check) labelling it without screening.', instead:'"Any weight loss, night-time or green vomiting, blood, or pain always in one spot? Those would change things."', why:'Red flags must be excluded before settling on abdominal migraine.' }
      ]
    }

  });

})();
