/* ============================================================
   Reasoning GP — Case Library batch 53:
   "Trauma, duties & the drugs that need watching"
   Four ORIGINAL cases: FGM identified at a smear (recording &
   reporting duties), sexual difficulty after past assault
   (trauma-informed pace), the unwell patient on lithium
   (toxicity vs intercurrent illness), and restarting an
   antipsychotic (monitoring & shared-care rules). None map to an
   NG12 cancer pathway; none is invented. Safeguarding / reporting
   duties are stated where they genuinely apply.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases52.js.
   ============================================================ */

(function(){

  /* ====== 205. F2F — FGM identified at a smear: recording and reporting duties ====== */
  const c205 = {
    id:'fgm-at-smear', title:'"You noticed during my smear \u2014 are you going to report me to the police?"', type:'video', duration:12,
    meta:{ age:29, sex:'F', setting:'Video consultation \u2014 FGM noticed during cervical screening.', system:'Safeguarding / Women\u2019s health \u2014 FGM in an adult: recording, reporting & risk', checked:'October 2026' },
    brief:'Ms Amara Conteh, 29, who underwent FEMALE GENITAL MUTILATION as a child abroad, is seen after it was noticed during her cervical smear; she is anxious about what happens now. The examined skills: respond with TRAUMA-INFORMED, non-judgemental care; understand the DUTIES correctly \u2014 for an ADULT with previously-performed FGM there is NO automatic duty to report HER to the police (she is a survivor, not an offender), BUT you MUST RECORD the finding in her records and the FGM Enhanced Dataset (mandatory; her consent is not needed, but she is told about it), and \u2014 crucially \u2014 carry out a SAFEGUARDING RISK ASSESSMENT for any girls connected to her (her own daughters, sisters, nieces) who could be at risk, referring if concerns arise and flagging any daughter under 18 on the FGM Information Sharing system (FGM-IS); (the statutory MANDATORY police-reporting duty applies specifically to KNOWN FGM in a girl UNDER 18, not to a woman aged 18 or over, whose FGM was done to her as a child); assess her CLINICAL needs (type — confirmed face to face or at the specialist clinic, not by video — urinary/menstrual/sexual/obstetric complications, possible DEINFIBULATION for type 3, psychological impact) and refer to specialist FGM services; and be culturally sensitive while clear FGM is illegal/harmful. Avoid frightening her with a wrong "police" threat or missing the at-risk-children dimension.',
    script:{
      opening:"(Tense, arms crossed, speaks fast.) \"The nurse said she'd noticed something during my smear and asked me to see you … about the cutting I had as a little girl, back home. Am I in trouble? Are you going to report me to the police? I didn't choose it — it was done to me when I was 6. Please don't make this a big thing.\"",
      facts:[
        { topic:"What happened", text:"Cut at age 6 in Sierra Leone, at her grandmother's village; came to the UK at 14. Doesn't know what \"type\" — \"they took away a lot.\" Smear last week was difficult and painful." },
        { topic:"Her symptoms", text:"If asked gently: periods are painful and slow to come out; takes a long time to pass urine; urine infections two or three times a year; sex has always been painful. No current discharge or infection." },
        { topic:"Pregnancy and future", text:"Not pregnant; on the implant. Hopes to have children \"one day\" with her partner. \"Would it be a problem?\" — didn't know about deinfibulation: \"I didn't know that was possible.\"" },
        { topic:"Girls in the family", text:"When asked: \"Why do you need to know? I'd never let anyone do that to a child.\" If the reason is explained: no children of her own. Her sister (lives locally) has a 5-year-old daughter; their mother visits Sierra Leone often. \"I'd need to think about who you mean. I don't want anyone getting into trouble.\"" },
        { topic:"Feelings", text:"\"I've never really talked about any of that with anyone.\" Has flashbacks before smears and intimate examinations. \"I don't like thinking about it.\" No thoughts of self-harm." },
        { topic:"Background", text:"Healthcare assistant in a care home. Lives with her partner, Ibrahim, who knows. No medicines except the implant, no allergies." },
        { topic:"How to play it", text:"Frightened of the police and of being judged. Visible relief if the doctor clearly says she is not in trouble: \"(Exhales.) Okay. I was so scared.\" Asks: \"So the police won't see it?\" and \"What's the second thing?\" Becomes guarded when asked about girls in the family; engages if the doctor explains it's about protecting children, not blaming her. If the doctor says the police will be told, become distressed and want to end the call." }
      ],
      ice:{
        ideas:"\"Because they found it, I'll be reported to the police.\"",
        concerns:"HIDDEN AGENDA — fear of police and of her family getting into trouble; shame and being looked at differently; she has never spoken about the trauma.",
        expectations:"\"To be told I'm not in trouble — and not to make it a big thing.\""
      },
      cues:[
        "\"Am I in trouble?\" — needs clear reassurance first.",
        "\"I don't want anyone getting into trouble.\" — when the family is raised.",
        "\"I've never really talked about any of that.\" — opening for support."
      ]
    },
    checkpoints:[
      { dom:'ro', text:'Responds with TRAUMA-INFORMED, non-judgemental care \u2014 reassures she is a survivor, not in trouble, and treats her with dignity and cultural sensitivity' },
      { dom:'cm', text:'Corrects the police fear accurately: an ADULT with historical FGM is NOT reported to police; the statutory mandatory-reporting duty applies to KNOWN FGM in a girl UNDER 18, not a woman aged 18 or over (her FGM was done to her at 6)' },
      { dom:'cm', text:'Knows the duties that DO apply \u2014 RECORD the FGM in the record and the FGM Enhanced Dataset (mandatory; no consent needed, but she is told) — and explains that recording \u2260 reporting to police' },
      { dom:'cm', text:'Carries out a SAFEGUARDING RISK ASSESSMENT for any girls at risk (daughters, sisters, nieces) and would make a safeguarding referral if a child is at risk, flagging any daughter under 18 on FGM-IS — the key safeguarding action' },
      { dom:'dg', text:'Assesses and addresses HER clinical/psychological needs (type/complications, deinfibulation especially for type 3, psychological impact) and refers to specialist FGM services' },
      { dom:'ro',   text:'Immediately reassures about the police fear, explains what actually happens clearly, and avoids retraumatising or alienating her' },
      { dom:'ro',   text:'Holds the cultural and trauma context with compassion while remaining clear FGM is harmful/illegal, framing identification as a route to help' },
      { dom:'cm',    text:'Safety-nets and follows up: records appropriately, completes the risk assessment/referral for at-risk girls, refers her to FGM/psychological services, and arranges follow-up \u2014 correct duties discharged compassionately' },
    ],
    worked:[
      { lbl:'Reassure immediately', txt:'"Let me put your mind at rest straight away: you are not in trouble, and I am not reporting you to the police. This was done to you as a little girl \u2014 you\u2019re the person it was done to, not someone who did anything wrong."' },
      { lbl:'Recording vs reporting', txt:'"There are a couple of things I do need to do, and I\u2019ll be open about them. I note it in your records, and GP practices have to add it to a national NHS FGM dataset — I don’t need your permission for that, but I want you to know, and the published figures don’t name anyone. That’s just recording, not a police report. They\u2019re completely different things."' },
      { lbl:'The real safeguarding focus', txt:'"The thing we DO have to think about is protecting any young girls in your family from this. Do you have daughters, or younger sisters or nieces? \u2026 If any girl could be at risk, that’s where we’d step in to protect them — it’s not about you. If you have a daughter, her health record can carry a note so any nurse or doctor who sees her knows the family history."' },
      { lbl:'Offer help for her', txt:'"More importantly, this is a chance to help YOU. Are you having any problems \u2014 with your waterworks, periods, pain or discomfort? There\u2019s a procedure that can help with some types, and specialist clinics that support women who’ve been through this — they’d examine you properly in person."' },
      { lbl:'Psychological support', txt:'"And it can leave a real emotional mark. If you\u2019d find it helpful, I can arrange support to talk things through \u2014 no pressure, it\u2019s there if you want it."' },
      { lbl:'Dignity + safety-net', txt:'"You\u2019ve done nothing wrong by coming today, and I\u2019m glad we can support you. I\u2019ll refer you to the specialist service, and you can come back to me anytime. Is there anything you\u2019re still worried about?"' },
    ],
    learning:'FGM identified in an ADULT during a smear is, first and foremost, a moment for trauma-informed, non-judgemental survivor care: she underwent childhood abuse, is anxious and possibly ashamed, and must be reassured immediately that she is not in trouble and not being reported to the police \u2014 mishandling this, or threatening police, would retraumatise her and destroy trust. The reporting position must be understood correctly: there is NO duty to report an adult with historical FGM to the police (she has committed no offence), because the statutory MANDATORY police-reporting duty applies specifically to KNOWN/identified FGM in a girl UNDER 18, not to a woman aged 18 or over whose FGM was done to her as a child. There ARE duties, however: you must RECORD the finding in her medical record and the FGM Enhanced Dataset (mandatory for GP practices; her consent is not required, but she is told; a clinical/data duty distinct from a criminal report \u2014 recording is not reporting to police), and \u2014 the critical safeguarding action \u2014 carry out a RISK ASSESSMENT for any girls connected to her (daughters, younger sisters, nieces) who could be at risk of FGM, making a safeguarding referral if a child is at risk and flagging any daughter under 18 on the FGM Information Sharing system (FGM-IS). Assess and address her clinical needs (the type of FGM and its complications \u2014 urinary, menstrual, sexual, obstetric \u2014 and the option of deinfibulation, especially for type 3 and ideally before pregnancy/delivery) and her psychological needs (flashbacks, anxiety, sexual difficulties), referring to specialist FGM services (RCOG GTG 53) and offering psychological support (NICE NG116), because the point of identifying it is to help her. The hidden agenda is fear of being reported, judged, or having "a big thing" made of it, with shame and trauma beneath; discharge the duties correctly and compassionately, reassure about the police fear, explain clearly what actually happens, protect any at-risk girls, and treat her with dignity.',
    knowledge:{
      guideline:'FGM Act 2003 (as amended by the Serious Crime Act 2015) · Mandatory reporting of FGM: procedural information (Home Office, 2015) · FGM Enhanced Dataset (NHS England) · FGM Information Sharing system (FGM-IS) · FGM risk and safeguarding guidance for professionals (DH, 2016) · RCOG Green-top Guideline No. 53 Female genital mutilation and its management (2015) · NICE NG116 Post-traumatic stress disorder (2018) · FGM in adults · recording and FGM Enhanced Dataset · mandatory reporting (known FGM <18) · safeguarding risk assessment · deinfibulation/specialist services',
      points:[
        { h:'Trauma-informed survivor care', t:'She is a survivor of childhood abuse \u2014 reassure she\u2019s not in trouble, treat with dignity and cultural sensitivity. Avoid any "police" threat that would retraumatise.' },
        { h:'No police report for an adult', t:'No duty to report an adult\u2019s historical FGM to police. The mandatory police-reporting duty applies to KNOWN FGM in a girl under 18, not women aged 18 and over (she was cut at 6), nor girls merely at risk.' },
        { h:'But record it', t:'Record the FGM in the medical record and the FGM Enhanced Dataset (mandatory clinical/data duty; consent not required, but tell her; published data anonymous). Recording \u2260 reporting to police \u2014 explain the distinction.' },
        { h:'Safeguarding risk assessment', t:'Assess any girls at risk (daughters, sisters, nieces); refer to safeguarding if a child is at risk; flag any daughter under 18 on FGM-IS (DH guidance; RCOG GTG 53). This protection of potential victims is the key action.' },
        { h:'Clinical needs', t:'Type and complications (urinary, menstrual, sexual, obstetric); deinfibulation (especially type 3, ideally pre-pregnancy/delivery); refer to specialist FGM clinics (RCOG GTG 53), where the type is confirmed on examination.' },
        { h:'Psychological support', t:'Address trauma, flashbacks, anxiety, sexual difficulties; offer psychological support (NICE NG116: trauma-focused therapy for PTSD symptoms) — identification is a route to help.' },
        { h:'Never do', t:'Never threaten/report an adult survivor to police; never confuse recording with reporting; never miss the at-risk-girls assessment; never judge or retraumatise.' },
        { h:'Safety-net & follow-up', t:'Record appropriately, complete risk assessment/referral for at-risk girls, refer her to FGM/psychological services, follow up.' }
      ]
    }
  };

  /* ====== 206. F2F — Sex difficult after past assault: trauma-informed pace ====== */
  const c206 = {
    id:'sex-after-assault', title:'"Sex has become painful and I freeze \u2014 something happened to me years ago"', type:'video', duration:12,
    meta:{ age:33, sex:'F', setting:'Video consultation \u2014 sexual difficulty linked to past trauma.', system:'Women\u2019s health / Psychosexual \u2014 trauma-informed care after sexual assault', checked:'October 2026' },
    brief:'Ms Leanne Forbes, 33, presents with painful, difficult sex and "freezing"/involuntary tightening, and tentatively discloses a past SEXUAL ASSAULT. The examined skills are TRAUMA-INFORMED care: respond to the disclosure with belief, validation and no pressure; go at HER PACE and explicitly do NOT rush or insist on an intimate examination (a forced exam would retraumatise — examination, which cannot be done on this video call anyway, is offered face to face, deferred, and consent-led with a chaperone offered, only when she is ready and clinically necessary — GMC Intimate examinations and chaperones, 2024); recognise the likely link between the trauma and the sexual difficulty (e.g. vaginismus — genito-pelvic pain/penetration disorder in DSM-5, international — involuntary pelvic-floor tightening, dyspareunia, a trauma/anxiety response), while keeping an open mind to organic causes (infection, dermatological, atrophy, endometriosis) assessed sensitively over time; offer appropriate support and referral (psychosexual therapy, trauma-focused psychology/counselling, specialist services, sexual-assault support services like SARC where relevant); screen current safety/ongoing abuse (NICE PH50) and mood/PTSD (NICE NG116); make clear that, as an adult, whether to report the assault to the police is entirely her decision, and that SARCs support people after past as well as recent assaults; and empower her with control and choice throughout. Avoid both ignoring the trauma (treating it as purely physical) and forcing an examination.',
    script:{
      opening:"(Hesitant, quiet, long pauses, avoids looking at the camera.) \"This is hard to talk about … sex has become really painful, and sometimes I just … freeze, or everything tightens up and I can't. It's affecting my relationship. I think it might be connected to … something that happened to me years ago. I've never really told anyone. Can you fix it?\"",
      facts:[
        { topic:"The problem", text:"\"It's when we try. Everything just clamps shut.\" Pain at the entrance on attempted penetration; has not been able to use tampons for years. About a year with her current partner, worse in the last 6 months. Fine with non-penetrative intimacy." },
        { topic:"Physical questions", text:"\"I'm not sure. I haven't really paid attention to that\" — no unusual discharge, itching, sores or white patches she knows of; no bleeding after sex or between periods; periods regular, not especially painful. Cervical screening up to date (had to stop once)." },
        { topic:"The past — her pace", text:"Will say only, if asked gently: assaulted by an ex-partner when she was 19. Won't give details unless she chooses. \"Sometimes it just comes back, when things get close.\" Never reported it." },
        { topic:"Safety now", text:"\"No. I'm safe now. It was years ago.\" Current partner, Sam, is kind and patient; no abuse." },
        { topic:"Mood", text:"\"No, not that. Just stressed and down about it.\" Occasional nightmares. No thoughts of self-harm. Drinks a little at weekends." },
        { topic:"Health", text:"No medicines apart from the combined pill. No allergies. Works as a primary school administrator." },
        { topic:"Fears", text:"\"That it's because of what happened. That I'm broken somehow.\" \"That it won't get better, and it'll wreck my relationship. And that I'll have to talk about it all in detail.\" Dreading being examined." },
        { topic:"How to play it", text:"Fragile; ready to withdraw if pushed. If the doctor says examination is her choice and not needed today: \"(Relieved.) That helps. I was dreading that.\" If the doctor pushes for an examination or details, go quiet and say \"Maybe I should go.\" Comforted by hearing it's common and treatable: \"Really? I thought it was just me.\" Happy to do self-swabs. Doesn't want police: \"I don't want to go to the police. But the support sounds good.\"" }
      ],
      ice:{
        ideas:"\"It's because of what happened to me — I'm broken somehow.\"",
        concerns:"HIDDEN AGENDA — first disclosure of a past assault; fear of judgement, of having to tell it all, of an examination; fear of losing her relationship.",
        expectations:"\"Can you fix it?\""
      },
      cues:[
        "\"Something that happened to me years ago.\" — receive gently, don't push.",
        "\"I've never really told anyone.\" — acknowledge her courage.",
        "\"Everything tightens up.\" — involuntary response, not her fault."
      ]
    },
    checkpoints:[
      { dom:'ro', text:'Receives the disclosure with BELIEF and validation, thanks her for her trust, and does not press for details she isn\u2019t ready to share \u2014 letting her lead' },
      { dom:'ro', text:'Goes at HER PACE and explicitly does NOT force/rush an intimate examination \u2014 makes any examination her choice, deferrable, consent-led with control and a chaperone (GMC 2024), arranged face to face as it cannot be done on video, and only if clinically necessary (often none at the first visit)' },
      { dom:'dg', text:'Recognises and VALIDATES the likely trauma link (freezing/involuntary tightening \u2014 vaginismus/trauma response with dyspareunia) as a real, understandable response, not a failing' },
      { dom:'dg', text:'Keeps organic/contributing causes in mind (infection, lichen sclerosus, atrophy, endometriosis) to be assessed sensitively over time \u2014 without overriding the trauma-informed pace' },
      { dom:'cm', text:'Offers the right support and referrals (psychosexual therapy, trauma-focused psychology/counselling, specialist/sexual-assault support), screens current SAFETY (NICE PH50) and MOOD/PTSD (NICE NG116), makes clear that reporting to the police is her choice as an adult, and gives realistic HOPE about treatment' },
      { dom:'ro',   text:'Hands her CONTROL throughout, makes her feel safe and believed, and avoids judgement or pressure' },
      { dom:'ro',   text:'Holds the disclosure with compassion and does not reduce her to a physical problem nor push examination' },
      { dom:'cm',    text:'Safety-nets and follows up: a paced supportive plan, support/referral information to take in her own time, safety/mood follow-up, and an open door \u2014 trauma-informed care that treats both trauma and sexual difficulty' },
    ],
    worked:[
      { lbl:'Receive it with care', txt:'"Thank you for telling me \u2014 I know that can\u2019t have been easy, especially if you\u2019ve not told anyone before. I believe you, and I\u2019m really glad you\u2019ve come. We\u2019ll go entirely at your pace today."' },
      { lbl:'Hand her control', txt:'"I want to be clear about one thing up front: I am NOT going to examine you unless and until YOU want me to — that could only ever happen face to face, with a chaperone if you’d like one. There\u2019s no rush, no pressure \u2014 we can talk and make a plan, and any examination is completely your choice, with you in control, whenever you\u2019re ready, if at all."' },
      { lbl:'Validate the response', txt:'"What you describe \u2014 freezing, everything tightening \u2014 is a very real and understandable way your body protects itself after what happened. It\u2019s not you failing or anything being \u2018wrong\u2019 with you. And importantly, it\u2019s treatable."' },
      { lbl:'Keep options open gently', txt:'"At some point, when you\u2019re comfortable, it can help to check there\u2019s nothing physical adding to the pain \u2014 but only when you\u2019re ready, and only if you want to. There\u2019s no hurry."' },
      { lbl:'Offer support + hope', txt:'"There\u2019s genuinely effective help \u2014 specialist psychosexual therapy for the physical side, and trauma-focused counselling for what happened. Many people get much better. I can also share details of services that support people after assault, for whenever you want them. And whether you ever tell the police is completely your decision — now, later or never."' },
      { lbl:'Safety + open door', txt:'"Can I gently check \u2014 are you safe now, no one currently hurting you? \u2026 Good. There\u2019s no timetable here. Take what you need, come back when you\u2019re ready, and we\u2019ll keep going together. You\u2019re in charge of this."' },
    ],
    learning:'Sexual difficulty disclosed alongside a past sexual assault calls for trauma-informed care, and the way the disclosure is received shapes everything: respond with belief, validation and gratitude for her trust, without pressing for details she is not ready to share, and let her lead how much she says. The central principle is to go at HER pace and explicitly NOT force or rush an intimate examination \u2014 a forced or hurried exam would retraumatise her \u2014 so make clear that any examination is entirely her choice, can wait, and would only happen when she feels ready, with consent, control (she can stop at any time), a chaperone and explanation (GMC Intimate examinations and chaperones, 2024), face to face rather than on video, and only if clinically necessary; often the first consultation involves no examination at all, with trust and a plan coming first. Recognise and validate the likely trauma link: "freezing" and involuntary tightening suggest a trauma/anxiety response and/or vaginismus (involuntary pelvic-floor spasm; genito-pelvic pain/penetration disorder in DSM-5, international) with dyspareunia, a common and treatable consequence of sexual trauma, and it is a real, understandable protective response of body and mind, not a failing \u2014 a reframing that is itself therapeutic. Keep organic and contributing causes in mind (infection, lichen sclerosus, atrophy/dryness, endometriosis) to be assessed gently over time so nothing treatable is missed, without overriding the trauma-informed pace. Offer the right support \u2014 psychosexual therapy, trauma-focused psychological therapy/counselling, specialist and sexual-assault support services \u2014 with information she can take in her own time, screen current safety (NICE PH50) and mood/PTSD symptoms (NICE NG116: trauma-focused CBT, with EMDR as an option), make clear that as an adult she alone decides whether to report the assault to the police, and give realistic hope, as vaginismus and trauma responses have good treatment. The hidden agenda is hope mixed with shame, fear of judgement and the weight of a first disclosure; hand her control, make her feel safe and believed, avoid reducing her to a physical problem or pushing examination, and set a paced, supportive plan.',
    knowledge:{
      guideline:'NICE NG116 Post-traumatic stress disorder (2018) · NICE PH50 Domestic violence and abuse: multi-agency working (2014) · GMC Intimate examinations and chaperones (2024) · GMC Confidentiality (2017) · DSM-5 genito-pelvic pain/penetration disorder (international) · trauma-informed care · vaginismus/dyspareunia after sexual trauma · consent-led examination · psychosexual and trauma-focused therapy · SARC (reporting to the police is her choice)',
      points:[
        { h:'Receive the disclosure well', t:'Believe and validate; thank her for her trust; don\u2019t press for details; let her lead. The reception of disclosure shapes everything.' },
        { h:'Her pace \u2014 no forced exam', t:'Do not rush/force an intimate examination (it would retraumatise). Examination is consent-led, deferrable, with control and a chaperone (GMC 2024), face to face not on video, only if clinically necessary \u2014 often none at the first visit.' },
        { h:'Validate the trauma link', t:'Freezing/involuntary tightening = trauma response/vaginismus (DSM-5: genito-pelvic pain/penetration disorder, international) with dyspareunia \u2014 a real, understandable protective response, not a failing. Treatable. Reframing is therapeutic.' },
        { h:'Keep organic causes in mind', t:'Infection, lichen sclerosus, atrophy/dryness, endometriosis \u2014 assessed sensitively over time so nothing treatable is missed, without overriding the pace.' },
        { h:'Support & referral', t:'Psychosexual therapy, trauma-focused psychology/counselling (NICE NG116: trauma-focused CBT; EMDR option), specialist and sexual-assault support (SARC/organisations; reporting to the police is her choice as an adult); information in her own time. Give hope.' },
        { h:'Safety & mood', t:'Screen current safety/ongoing abuse (NICE PH50, asked privately) and mood/PTSD symptoms; act if there is current risk or others such as children are at risk (GMC Confidentiality 2017).' },
        { h:'Never do', t:'Never disbelieve or judge; never force/rush an examination; never treat it as purely physical and ignore the trauma; never set a timetable that isn\u2019t hers.' },
        { h:'Safety-net & follow-up', t:'Paced supportive plan, take-home support/referral info, safety/mood follow-up, open door.' }
      ]
    }
  };

  /* ====== 207. F2F/urgent — Unwell on lithium: toxicity vs intercurrent illness ====== */
  const c207 = {
    id:'lithium-toxicity', title:'"I\u2019ve had a sickness bug and now I\u2019m shaky and muddled \u2014 I\u2019m on lithium"', type:'video', duration:12,
    meta:{ age:46, sex:'F', setting:'Video consultation \u2014 an unwell patient on long-term lithium.', system:'Mental health / Prescribing \u2014 lithium toxicity vs intercurrent illness', checked:'October 2026' },
    brief:'Mrs Frances Doyle, 46, on long-term LITHIUM for bipolar affective disorder, presents unwell after a few days of vomiting and diarrhoea, now with a coarse TREMOR, unsteadiness and feeling "muddled". The examined skills: recognise that lithium has a NARROW THERAPEUTIC INDEX and that dehydration/intercurrent illness and interacting drugs readily precipitate LITHIUM TOXICITY; distinguish toxicity (coarse tremor, ataxia, slurred speech, confusion/drowsiness, GI upset, in severe cases seizures/renal failure/arrhythmia) from the intercurrent illness itself; act on the RED FLAGS — STOP lithium now and arrange SAME-DAY HOSPITAL ASSESSMENT (her confusion, ataxia and coarse tremor are neurological signs of toxicity, so she is not managed at home) for an urgent lithium LEVEL, renal function/U&E and fluids (lithium toxicity can be life-threatening and may need dialysis); identify and address PRECIPITANTS (dehydration from D&V, new NSAIDs, ACE inhibitors/ARBs, diuretics \u2014 thiazides, low salt); and reinforce lithium SICK-DAY rules/safety education (NICE CG185, 2014; NPSA/2009/PSA005 Safer lithium therapy). Don\u2019t dismiss it as "just the bug".',
    script:{
      opening:"(Slow speech, slightly slurred; hands visibly shaking; daughter sometimes heard in the background.) \"I've had this horrible sickness bug for a few days — throwing up, the runs, couldn't keep much down. I assumed it was just that, but now my hands are really shaky, I feel wobbly on my feet, and my head's gone a bit fuzzy and slow. My daughter said I seem confused. I take lithium for my bipolar — is that relevant?\"",
      facts:[
        { topic:"The bug", text:"\"Three or four days. I've barely kept anything down.\" Vomiting 4–5 times a day, watery diarrhoea 6 times a day; a bit better today. Passing much less urine. Dry mouth." },
        { topic:"Tremor and walking", text:"Usual mild fine tremor. Now: \"Different. Much bigger, like I can't hold a cup. And I'm wobbly when I walk.\" Holds hands up to camera: coarse shaking. Has nearly fallen twice." },
        { topic:"Confusion", text:"\"She says I'm not making sense at times. I told her it's just the bug.\" (Daughter, if asked to come on screen: \"Mum keeps repeating herself and lost track of what day it is.\") \"My head just feels slow. I don't know about the rest.\" No fits. Not drowsy yet." },
        { topic:"Medicines", text:"Lithium carbonate 800 mg at night for 8 years — still taking it. \"Just the lithium as far as I remember. I'd have to check with my daughter what I took for the bug.\" Daughter: \"She's been taking ibuprofen for stomach cramps.\" Also on ramipril 5 mg for blood pressure (started 2 months ago). No allergies." },
        { topic:"Other symptoms", text:"\"I haven't really noticed\" about palpitations. No chest pain. No fever now." },
        { topic:"Monitoring", text:"Lithium level last checked 4 months ago (normal). Has the purple lithium booklet and alert card." },
        { topic:"Mental health", text:"Bipolar disorder, stable for 5 years. Two admissions years ago. \"If you take me off it, I'm scared I'll get ill again. It took years to get settled.\" Mood fine at present." },
        { topic:"Social", text:"Lives with her adult daughter, Kate, who can drive her to hospital. Part-time librarian. Non-smoker, no alcohol." },
        { topic:"How to play it", text:"Slow, a bit muddled, minimising: \"I thought it was only the bug.\" If told it may be the lithium: \"So it's not the bug?\" and \"Hospital? Is it that bad?\" Agrees once reassured her psychiatric team will be involved: \"I'll ask her to take me.\" If offered anti-sickness tablets and fluids at home, accept (the trap)." }
      ],
      ice:{
        ideas:"\"It's just a sickness bug.\"",
        concerns:"HIDDEN AGENDA — she is more muddled than she admits (her daughter is worried); fear that stopping lithium will make her bipolar relapse after years of stability.",
        expectations:"\"Something to stop the sickness.\""
      },
      cues:[
        "\"My daughter said I seem confused.\" — take the daughter's concern seriously.",
        "\"Is that relevant?\" — the lithium question.",
        "\"It took years to get settled.\" — fear of relapse to address."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Immediately suspects LITHIUM TOXICITY in an unwell lithium patient with new neurological symptoms after D&V \u2014 recognising the narrow therapeutic index and that dehydration raises levels \u2014 rather than dismissing it as "just the bug"' },
      { dom:'dg', text:'Recognises the toxicity picture (coarse tremor, ataxia, slurred speech, confusion/drowsiness, GI symptoms; severe: seizures, renal failure, arrhythmia) and distinguishes it from the intercurrent illness' },
      { dom:'cm', text:'Acts URGENTLY: STOPS lithium and, because confusion, ataxia and coarse tremor are already present, arranges SAME-DAY HOSPITAL assessment for an urgent lithium LEVEL, renal function/U&E and rehydration (999 if drowsy, fitting or deteriorating), leaving TFTs/calcium to the later monitoring review' },
      { dom:'dg', text:'Identifies and addresses PRECIPITANTS \u2014 dehydration from D&V, plus interacting drugs (NSAIDs, ACEi/ARBs, thiazide diuretics) and low salt \u2014 stopping/avoiding offenders and correcting fluid/salt balance' },
      { dom:'cm', text:'Reinforces lithium SICK-DAY rules and safety education (fluids in illness, avoid NSAIDs, drug-interaction caution, toxicity symptoms, regular monitoring, alert card) to prevent recurrence' },
      { dom:'ro',   text:'Takes the daughter\u2019s concern about confusion as a key signal and does not let the patient\u2019s "just the bug" minimisation lower vigilance' },
      { dom:'ro',   text:'Communicates the seriousness clearly and calmly, and is mindful of her bipolar/medication context (relapse risk) when planning' },
      { dom:'cm',    text:'Safety-nets and follows up: same-day hospital assessment with urgent bloods, precipitant correction, lithium re-established safely WITH psychiatry once recovered, and monitoring/safety education \u2014 a physical emergency acted on' },
    ],
    worked:[
      { lbl:'Connect the dots', txt:'"Yes \u2014 it\u2019s very relevant. The sickness bug has dehydrated you, and that can push your lithium level up, because lithium has a very narrow safe range. The shakiness, wobbliness and fuzziness you\u2019re describing can be signs your lithium is now too high \u2014 that\u2019s not something we sit on."' },
      { lbl:'Take it seriously', txt:'"Your daughter noticing you\u2019re confused is important, and I\u2019m glad she did. I can’t examine you properly on video, and with confusion and unsteadiness this needs checking in hospital today — they’ll test your lithium level and your kidneys urgently and give you fluids. Is your daughter able to take you now?"' },
      { lbl:'Withhold + hydrate', txt:'"For now, please STOP your lithium until we have the level back and you\u2019ve recovered \u2014 don\u2019t take the next dose. And we need to get fluids back into you, which the hospital team will do today — I’ll call ahead so they’re expecting you and know you take lithium."' },
      { lbl:'Find the precipitants', txt:'"Let\u2019s check what tipped it over \u2014 mainly the dehydration, but have you taken any anti-inflammatory painkillers like ibuprofen, or are you on any water tablets or blood-pressure pills? Those can all raise lithium too."' },
      { lbl:'Safety rules', txt:'"Once you\u2019re through this, an important rule: whenever you\u2019re vomiting, have diarrhoea, a fever, or can\u2019t drink, keep your fluids up and ring us early \u2014 and avoid ibuprofen. Keep up your regular lithium blood tests, and carry your lithium card."' },
      { lbl:'Plan + psychiatry', txt:'"We\u2019ll sort the toxicity now. We won\u2019t just abandon your lithium long-term \u2014 once you\u2019re recovered, we\u2019ll restart it safely with your mental-health team, because it\u2019s keeping you well. If you get more drowsy, twitchy, or have any fits before you reach the hospital, that’s an emergency — call 999 straight away."' },
    ],
    learning:'An unwell patient on long-term lithium with new neurological symptoms \u2014 coarse tremor, unsteadiness/ataxia and confusion \u2014 after vomiting and diarrhoea must be assumed to have LITHIUM TOXICITY until proven otherwise, because lithium has a narrow therapeutic index and dehydration from intercurrent illness reduces its clearance and raises the level; "is that relevant?" must be answered emphatically yes, and the picture must not be dismissed as "just the bug". Recognise the toxicity features \u2014 coarse tremor (versus the fine tremor of therapeutic use), ataxia, slurred speech, myoclonus, drowsiness/confusion, GI upset, and in severe cases seizures, renal failure, arrhythmia and coma \u2014 and distinguish them from the precipitating viral illness. Act urgently: STOP lithium and, because confusion, ataxia and a coarse tremor are already present, arrange same-day hospital assessment for an urgent lithium level, renal function/U&E and rehydration (999 if drowsy, fitting or deteriorating) — lithium toxicity can be life-threatening, can occur even with a level in range in an unwell patient, and severe cases may need haemodialysis — rather than continuing lithium, waiting for a routine test or sending her home; thyroid function and calcium belong to the later monitoring review (NICE CG185, 2014). Identify and address the precipitants: dehydration from the D&V is the obvious one, but review interacting drugs that raise lithium (NSAIDs, ACE inhibitors/ARBs, and thiazide diuretics) and low salt, stopping offenders and correcting fluid/salt balance. Reinforce lithium sick-day rules and safety (maintain fluids and seek advice early in dehydrating illness, avoid NSAIDs, check interactions with new medicines, know toxicity symptoms, attend regular monitoring, carry the lithium alert card and record book — NPSA/2009/PSA005). The hidden agenda is the patient rationalising it as "just the bug" and underplaying the confusion \u2014 the daughter\u2019s concern is the key signal; take the physical emergency seriously and act, while remaining mindful of her bipolar disorder so that lithium is re-established safely with psychiatric input once recovered, given relapse risk.',
    knowledge:{
      guideline:'NICE CG185 Bipolar disorder: assessment and management (2014) · NICE QS95 Bipolar disorder in adults (2015) · NPSA Patient Safety Alert NPSA/2009/PSA005 Safer lithium therapy (December 2009) · lithium toxicity · narrow therapeutic index · monitoring/sick-day rules · interacting drugs (NSAIDs/ACEi/ARBs/diuretics) · same-day hospital assessment',
      points:[
        { h:'Suspect toxicity', t:'Unwell lithium patient + new neuro symptoms after D&V \u2192 lithium toxicity (narrow therapeutic index; dehydration raises levels). Never dismiss as "just the bug".' },
        { h:'Toxicity picture', t:'Coarse tremor, ataxia, slurred speech, myoclonus, drowsiness/confusion, GI upset; severe: seizures, renal failure, arrhythmia, coma. Distinguish from the intercurrent illness.' },
        { h:'Act urgently', t:'Stop lithium; with confusion, ataxia or coarse tremor → same-day hospital assessment for urgent lithium level + renal function/U&E and fluids (not a routine GP blood test). TFTs/calcium belong to later monitoring (CG185). Severe cases may need dialysis.' },
        { h:'Precipitants', t:'Dehydration (D&V, fever, low intake), NSAIDs, ACE inhibitors/ARBs, thiazide diuretics, low salt (BNF). Stop/avoid offenders; correct fluid/salt balance.' },
        { h:'Sick-day rules & safety', t:'Maintain fluids and seek advice early in dehydrating illness; avoid NSAIDs; check new-drug interactions; know toxicity symptoms; regular monitoring (CG185: level 3-monthly in year 1 then 6-monthly; renal, thyroid, calcium 6-monthly); carry the lithium alert card and record book (NPSA/2009/PSA005).' },
        { h:'Mind the mental illness', t:'Take the daughter\u2019s concern seriously; manage acute toxicity, but re-establish lithium safely with psychiatry once recovered (relapse risk) \u2014 don\u2019t stop it long-term unilaterally.' },
        { h:'Never do', t:'Never dismiss as the bug; never continue lithium during toxicity; never miss interacting drugs; never manage neurological signs of toxicity at home or wait for a routine blood test.' },
        { h:'Safety-net & follow-up', t:'Same-day hospital assessment with urgent bloods, precipitant correction, safe lithium re-establishment with psychiatry, monitoring and education. 999 for seizures/marked drowsiness.' }
      ]
    }
  };

  /* ====== 208. F2F — Wants to restart their antipsychotic: bloods, ECG, shared-care rules ====== */
  const c208 = {
    id:'antipsychotic-restart', title:'"I stopped my antipsychotic months ago \u2014 I want to go back on it, can you just prescribe it?"', type:'video', duration:12,
    meta:{ age:38, sex:'M', setting:'Video consultation \u2014 request to restart an antipsychotic.', system:'Mental health / Prescribing \u2014 restarting an antipsychotic: monitoring & shared care', checked:'October 2026' },
    brief:'Mr Dominic Healy, 38, with a history of psychosis/schizophrenia, stopped his ANTIPSYCHOTIC months ago and now \u2014 feeling early warning signs returning \u2014 wants to restart it and asks the GP to "just prescribe it". The examined skills: respond supportively to a patient recognising relapse (a positive, insight-rich step) WITHOUT simply reissuing a higher-risk drug unsafely; assess his current MENTAL STATE and RELAPSE/risk (symptoms, function, risk to self/others, insight) \u2014 escalating urgently if acutely unwell/at risk; understand WHO PRESCRIBES — NICE CG178 says a person with established psychosis showing signs of relapse should be referred back to secondary care (crisis team or CMHT), and under NHS England guidance (2018) the clinician who starts or changes a medicine is responsible for it, so after months off with relapse the choice of drug and dose sits with the specialist and the GP can prescribe once that is agreed (formal shared-care agreements apply to some antipsychotics, such as clozapine, not all) — not a unilateral GP prescription; arrange the BASELINE MONITORING required by CG178 (weight/BMI, waist, pulse and blood pressure, fasting glucose, HbA1c, lipids, prolactin, an assessment of movement disorders, and diet and physical activity; an ECG only if the product information requires it, examination finds cardiovascular risk, there is a personal cardiovascular history, or he is being admitted; FBC, U&E and LFTs are reasonable general checks but not the CG178 list) — measurements and bloods done face to face, as this is a video consultation; discuss adherence, side-effects and the reasons he stopped; and safety-net. Avoid both a blunt refusal that loses a relapsing patient and an unsafe unmonitored reissue.',
    script:{
      opening:"(Calm but tense, slightly guarded; glances around the room now and then.) \"I stopped my antipsychotic a few months back — I felt fine and I hated the side-effects. But this last couple of weeks I can feel it creeping back — the thoughts, not sleeping, getting suspicious. I recognise it now. I want to go back on the medication before it gets bad. Can you just prescribe it for me today?\"",
      facts:[
        { topic:"Early warning signs", text:"\"Same as before, the start of it. Feeling people are watching me, talking about me. I know it's the illness, but it's getting louder.\" Neighbours \"might be\" talking about him. About two weeks." },
        { topic:"Voices and risk", text:"\"Not voices. Not yet.\" If asked about harming himself or others: \"No. Nothing like that. That's why I want to catch it now.\" No plans, no weapons, no command thoughts." },
        { topic:"Sleep and function", text:"\"Sleep's bad — a few hours. I'm getting by.\" Still going to work, eating, washing." },
        { topic:"Drugs and alcohol", text:"\"Nothing new, no\" — no cannabis for 3 years, a few beers at weekends." },
        { topic:"The medication", text:"Was on olanzapine 10 mg at night for 4 years; stopped it himself 5 months ago. \"I felt like a zombie, and the weight\" — gained 12 kg on it. Didn't tell his team; was discharged to GP care 18 months ago. Has the community mental health team number somewhere." },
        { topic:"Physical health", text:"No heart problems, no fainting, no diabetes known. No regular medicines. No allergies. Smokes 15 a day." },
        { topic:"Work and driving", text:"Delivery van driver. If asked: \"Why do you ask?\" — then accepts advice not to drive while unwell." },
        { topic:"Background", text:"First episode at 26, two admissions (last one 6 years ago, under section). Lives alone; sister nearby is supportive." },
        { topic:"Fears", text:"\"Ending up back in hospital. Losing control. Last time was awful.\"" },
        { topic:"How to play it", text:"Calm, insightful, wants speed: \"As long as it's quick.\" If the doctor refuses without a plan: \"So you won't prescribe it?\" — becomes frustrated and may say he'll \"manage on his own\". If the doctor explains a same-day call to his team: \"How long will that take?\" then \"Fine, if it gets me on it.\" Interested to hear there are other medicines: \"I didn't know there was a choice.\"" }
      ],
      ice:{
        ideas:"\"I'm relapsing — the same tablet again will stop it.\"",
        concerns:"HIDDEN AGENDA — terror of another hospital admission and losing control; the weight gain and feeling \"like a zombie\" that made him stop.",
        expectations:"\"Just the prescription, so I can get on with it.\""
      },
      cues:[
        "\"I recognise it now.\" — insight to praise.",
        "\"I hated the side-effects.\" — invites a choice of medicine.",
        "\"Last time was awful.\" — the fear driving the urgency."
      ]
    },
    checkpoints:[
      { dom:'ro', text:'VALIDATES the insight \u2014 recognising early relapse and seeking treatment is a positive step to support \u2014 rather than meeting it with a bureaucratic refusal' },
      { dom:'dg', text:'Assesses CURRENT mental state and RELAPSE/RISK (symptoms, insight, function, risk to self/others, command symptoms) and escalates URGENTLY to crisis team/CMHT/psychiatry if acutely unwell or at significant risk' },
      { dom:'cm', text:'Understands WHO PRESCRIBES — the NICE CG178 relapse route back to secondary care, and (NHS England 2018) the clinician who starts or changes a medicine is responsible for it; restarting after a long gap with relapse needs PSYCHIATRIC involvement (re-referral/liaison) to choose drug and dose, after which the GP can prescribe — not a unilateral GP reissue' },
      { dom:'cm', text:'Arranges the NICE CG178 BASELINE MONITORING face to face — weight/BMI/waist, BP/pulse, fasting glucose, HbA1c, lipids, prolactin, movement-disorder assessment, diet and activity — with an ECG only if the SPC requires it, there is cardiovascular risk or history, or he is admitted — as part of safe restarting' },
      { dom:'dg', text:'Explores WHY he stopped (side-effects, adherence) and discusses side-effect management, relapse risk, and options (e.g. depot/alternative agent) toward sustainable treatment' },
      { dom:'ro',   text:'Honours his insight and urgency, and explains that involving his mental-health team is to get him safe treatment FAST \u2014 not a brush-off \u2014 keeping him engaged' },
      { dom:'ro',   text:'Balances a supportive response with the proper process, neither bluntly refusing (risking disengagement/relapse) nor unsafely reissuing' },
      { dom:'cm',    text:'Safety-nets and follows up: urgent escalation if at risk, psychiatric re-referral/liaison, baseline monitoring arranged, crisis contacts/red flags, and review \u2014 swift, safe, shared-care restarting' },
    ],
    worked:[
      { lbl:'Validate the insight', txt:'"First \u2014 well done for recognising this and coming in early. Spotting your own warning signs and wanting to act before things worsen is exactly the right thing, and it\u2019s genuinely impressive. Let\u2019s get you the right help quickly."' },
      { lbl:'Assess now', txt:'"Tell me more about what\u2019s coming back \u2014 the thoughts, the suspiciousness, the sleep. Are you having any thoughts of harming yourself or anyone else? How are you managing day to day? \u2026 I need to understand how things are right now."' },
      { lbl:'Explain the process honestly', txt:'"I want to act fast, but I also want to do it safely. After a few months off, with things creeping back, the guidance is for your mental-health team to see you and choose the right drug and dose for you — then I can prescribe it once that’s agreed. That\u2019s not a brush-off; it\u2019s how we get you treated properly and quickly."' },
      { lbl:'Escalate appropriately', txt:'"Because you\u2019re noticing it creeping back, I\u2019m going to contact your mental-health team / the crisis team today to get you seen urgently, so we don\u2019t lose time. If things were more advanced or risky, that would be even more urgent."' },
      { lbl:'Monitoring + side-effects', txt:'"Let’s also get the baseline checks these medicines need — I’ll book you in at the surgery for your weight, waist and blood pressure and some bloods for sugar, cholesterol and prolactin, and we’ll check for any stiffness or restlessness; a heart tracing only if your team or the medicine needs one. And tell me which side-effects you hated \u2014 because we can often choose or adjust to avoid them, so you\u2019re not back here in six months having stopped again."' },
      { lbl:'Safety-net', txt:'"While we get you seen: here are the crisis numbers. If the thoughts get worse, you can\u2019t sleep at all, you feel unsafe, or anyone\u2019s worried about you, contact them or go to A&E. I\u2019ll chase the referral and we\u2019ll stay on top of this together."' },
    ],
    learning:'A patient who recognises early relapse of psychosis and proactively asks to restart their antipsychotic is showing valuable insight that should be strongly supported \u2014 the task is to act on his relapse signs both quickly AND safely, holding a supportive response together with the proper process, never meeting it with a bureaucratic refusal. Assess his current mental state and relapse (returning symptoms, insight, function) and crucially the risk to himself (self-harm, self-neglect) and others, plus any command symptoms; if he is acutely unwell or at significant risk this is urgent, warranting contact with the crisis team/CMHT or urgent psychiatric assessment rather than a prescription. Understand who prescribes: NICE CG178 directs a person with established psychosis showing signs of relapse back to secondary care (crisis team or CMHT), and NHS England guidance (2018) makes the clinician who starts or changes a medicine responsible for it — formal shared-care agreements cover only some antipsychotics, such as clozapine — so restarting after a months-long gap with relapse generally needs psychiatric involvement \u2014 re-referral to the CMHT or liaison with his mental-health team \u2014 rather than a unilateral GP reissue of a higher-risk drug, framed as getting him the right, safe treatment fast rather than a brush-off. Arrange the NICE CG178 baseline monitoring face to face — weight/BMI and waist, blood pressure and pulse, fasting glucose, HbA1c, lipids, prolactin, an assessment of movement disorders, and diet and physical activity, with an ECG only if the product information requires it, there is cardiovascular risk on examination or a personal cardiovascular history, or he is being admitted — and remember clozapine is specialist-only with additional strict neutrophil monitoring. Explore why he stopped (side-effects such as weight gain, sedation, sexual/metabolic effects or akathisia, and his adherence pattern), discuss managing side-effects and the relapse risk of stopping, and consider options like a long-acting depot or a different agent toward sustainable treatment. The hidden agenda is genuine fear of becoming unwell again, alongside fear of hospital, lost control, judgement and the side-effects that drove him off; honour his insight, act swiftly, explain that involving his mental-health team is to help, and neither bluntly refuse (risking disengagement and relapse) nor unsafely reissue, but escalate appropriately and supportively.',
    knowledge:{
      guideline:'NICE CG178 Psychosis and schizophrenia in adults: prevention and management (2014) · NHS England Responsibility for prescribing between primary and secondary/tertiary care (2018) · antipsychotic monitoring (baseline + ongoing) · who prescribes after relapse · relapse/risk assessment · ECG only when indicated · CMHT/crisis escalation',
      points:[
        { h:'Validate the insight', t:'Recognising early relapse and seeking treatment is a positive, insight-rich step \u2014 support it strongly; act quickly and safely, not with a refusal.' },
        { h:'Assess mental state & risk', t:'Symptoms, insight, function, risk to self/others, command symptoms. If acutely unwell/at risk \u2192 urgent crisis team/CMHT/psychiatry, not just a prescription.' },
        { h:'Shared-care rules', t:'NICE CG178: relapse → refer back to secondary care (crisis team/CMHT). NHS England 2018: whoever starts or changes a medicine is responsible for it. After a long gap with relapse the specialist chooses drug and dose (re-referral/liaison); the GP can prescribe once agreed — not a unilateral GP reissue.' },
        { h:'Baseline monitoring', t:'NICE CG178: weight/BMI/waist, BP/pulse, fasting glucose, HbA1c, lipids, prolactin, movement disorders, diet and activity (face to face). ECG only if SPC requires, CV risk or history, or admission. Clozapine is specialist-only with strict FBC monitoring.' },
        { h:'Why he stopped', t:'Explore side-effects (weight, sedation, sexual/metabolic, akathisia) and adherence; manage side-effects; consider depot/alternative for sustainability; explain relapse risk of stopping.' },
        { h:'Keep him engaged', t:'Frame psychiatric involvement as getting safe treatment fast, not a brush-off. Balance support with process; neither refuse bluntly nor reissue unsafely.' },
        { h:'Never do', t:'Never reissue an antipsychotic unilaterally after a long gap without psychiatric input/monitoring; never miss relapse risk; never skip the CG178 baseline (bloods, weight, movement disorders; ECG when indicated); never disengage a relapsing patient with a flat refusal.' },
        { h:'Safety-net & follow-up', t:'Urgent escalation if at risk, psychiatric re-referral/liaison, baseline monitoring, crisis contacts/red flags, review.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c205, c206, c207, c208);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'fgm-at-smear': {
      ceg: ['Ethnicity, culture & diversity', 'Health disadvantage & vulnerabilities'],
      stem: {
        name: 'Amara Conteh', age: '29 years \u00b7 female',
        pmh: ['FGM (performed in childhood abroad) noticed during cervical smear', 'Anxious she\u2019ll be reported to police', '? daughters/sisters/nieces at risk'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"You noticed during my smear \u2014 are you going to report me to the police?"',
        reason: 'Video consultation \u2014 FGM noticed during cervical screening.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Trauma-informed reassurance', d:'She\u2019s a survivor, not in trouble, not reported to police.' },
        { t:'2\u20134',  h:'Record vs report', d:'Record in notes + FGM Enhanced Dataset (no consent needed, but tell her; not a police report); explain the distinction.' },
        { t:'4\u20137',  h:'Risk assessment', d:'Any girls at risk (daughters/sisters/nieces)? Safeguarding referral if so; FGM-IS flag for daughters under 18 — the key action.' },
        { t:'7\u20139',  h:'Her clinical needs', d:'Type/complications; deinfibulation (type 3); refer specialist FGM service.' },
        { t:'9\u201312', h:'Psychological + safety-net', d:'Offer support; dignity; open door; document.' }
      ],
      wordPics: {
        fail: 'Threatens/implies police reporting of the adult; or fails to record it and to assess at-risk girls; retraumatises her.',
        pass: 'Reassures (no police report), records appropriately, assesses at-risk girls and refers her for support.',
        exc:  'Gives trauma-informed reassurance, correctly distinguishes recording from police reporting, carries out the at-risk-girls safeguarding assessment, addresses her clinical/psychological needs with specialist referral, and preserves her dignity.'
      },
      avoid: [
        { dont:'"Because you have FGM I have to report this to the police."', instead:'"You\u2019re a survivor and not in trouble \u2014 I\u2019m not reporting you. Reporting to police is only for FGM in a girl under 18."', why:'An adult\u2019s historical FGM is not a police-reportable offence; threatening police retraumatises.' },
        { dont:'(Skipping) reassuring but not assessing at-risk girls.', instead:'"Do you have daughters, or younger sisters or nieces who could be at risk? That\u2019s where we step in to protect them."', why:'The at-risk-girls safeguarding assessment is the key duty.' },
        { dont:'(No help) just recording and ending.', instead:'"This is also a chance to help you \u2014 any problems, and specialist support, including a procedure for some types."', why:'Identification should lead to holistic survivor care, not just data entry.' }
      ]
    },

    'sex-after-assault': {
      ceg: ['Gender, reproductive & sexual health', 'Mental health & addiction'],
      stem: {
        name: 'Leanne Forbes', age: '33 years \u00b7 female',
        pmh: ['Painful sex + "freezing"/involuntary tightening', 'Tentative disclosure of past sexual assault \u2014 "never told anyone"', 'Affecting her relationship'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Sex has become painful and I freeze \u2014 something happened to me years ago."',
        reason: 'Video consultation \u2014 sexual difficulty linked to past trauma.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Receive disclosure', d:'Believe, validate, thank her; let her lead; no pressure for details.' },
        { t:'2\u20134',  h:'Her pace, no forced exam', d:'Examination is her choice, deferrable, consent-led, face to face with a chaperone offered; none on video today.' },
        { t:'4\u20137',  h:'Validate trauma link', d:'Freezing/tightening = trauma response/vaginismus; real, not a failing; treatable.' },
        { t:'7\u20139',  h:'Organic causes + support', d:'Keep organic causes in mind sensitively; offer psychosexual + trauma-focused therapy.' },
        { t:'9\u201312', h:'Safety/mood + open door', d:'Screen current safety/mood; police reporting is her choice; take-home info; paced plan; she\u2019s in charge.' }
      ],
      wordPics: {
        fail: 'Pushes/performs an intimate examination; treats it as purely physical and ignores the trauma; disbelieves or rushes her.',
        pass: 'Receives the disclosure well, works at her pace without forcing exam, validates the trauma link and offers support.',
        exc:  'Receives the disclosure with belief and hands her control, explicitly defers examination, validates vaginismus/trauma response, keeps organic causes in mind sensitively, offers psychosexual + trauma-focused support with hope, and screens safety/mood.'
      },
      avoid: [
        { dont:'"Let\u2019s examine you now to see what\u2019s causing the pain."', instead:'"I won\u2019t examine you today unless and until you want me to \u2014 there\u2019s no rush, and you\u2019re in control."', why:'A forced/rushed intimate examination retraumatises; examination must be consent-led and paced.' },
        { dont:'"It\u2019s probably just dryness \u2014 try some lubricant." (ignoring trauma)', instead:'"What you\u2019re describing is a real response to what happened, and it\u2019s treatable \u2014 let\u2019s address both the trauma and the physical side."', why:'Reducing it to a physical problem ignores the trauma and the disclosure.' },
        { dont:'(Pressing) "Can you tell me exactly what happened?"', instead:'"You don\u2019t have to tell me any more than you want to \u2014 thank you for trusting me with this."', why:'Pressing for details she isn\u2019t ready to share is retraumatising and unnecessary.' }
      ]
    },

    'lithium-toxicity': {
      ceg: ['Urgent & unscheduled care', 'Prescribing & pharmacology'],
      stem: {
        name: 'Frances Doyle', age: '46 years \u00b7 female',
        pmh: ['Bipolar affective disorder \u2014 long-term lithium', '\u26a0 Few days vomiting + diarrhoea, now coarse tremor, ataxia, confusion', 'Daughter reports she seems confused'],
        meds: ['Lithium', '? NSAIDs/diuretic/ACEi (review)'],
        allergy: 'NKDA',
        recent: '"I\u2019ve had a sickness bug and now I\u2019m shaky and muddled \u2014 I\u2019m on lithium."',
        reason: 'Video consultation \u2014 an unwell patient on long-term lithium.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Suspect toxicity', d:'Unwell + coarse tremor/ataxia/confusion after D&V = lithium toxicity; not "just the bug".' },
        { t:'2\u20135',  h:'Assess + act', d:'Stop lithium; no examination possible on video; same-day hospital for urgent lithium LEVEL + renal function/U&E and fluids.' },
        { t:'5\u20137',  h:'Same-day hospital assessment', d:'Confusion/ataxia/coarse tremor already present → same-day hospital assessment today (± dialysis if severe).' },
        { t:'7\u20139',  h:'Precipitants', d:'Dehydration, NSAIDs, ACEi/ARB, thiazides, low salt \u2014 review/stop.' },
        { t:'9\u201312', h:'Safety education + psychiatry', d:'Sick-day rules, alert card; re-establish lithium with mental-health team; 999 red flags.' }
      ],
      wordPics: {
        fail: 'Dismisses it as the bug; continues lithium; no urgent level/renal function; misses interacting drugs; discharges significant toxicity.',
        pass: 'Suspects toxicity, checks level/renal function, stops lithium and arranges same-day hospital assessment for rehydration.',
        exc:  'Recognises lithium toxicity, acts urgently (stop lithium; same-day hospital assessment for level + renal function and rehydration), identifies precipitants/interacting drugs, reinforces sick-day rules, and re-establishes lithium safely with psychiatry.'
      },
      avoid: [
        { dont:'"It\u2019s just the bug \u2014 keep taking your lithium and rest."', instead:'"Dehydration can push your lithium too high \u2014 stop the next dose, and with the confusion and unsteadiness you need to be seen in hospital today for an urgent level, kidney tests and fluids."', why:'Continuing lithium during likely toxicity is dangerous; the bug is the precipitant, not the whole story.' },
        { dont:'(No bloods) reassuring without a level.', instead:'"You need an urgent lithium level and kidney test in hospital today — your symptoms suggest it may be too high."', why:'Toxicity is confirmed/excluded by the level and renal function; it can be life-threatening.' },
        { dont:'(Ignoring drugs) not asking about NSAIDs/diuretics.', instead:'"Have you taken ibuprofen, or are you on water tablets or blood-pressure pills? They raise lithium too."', why:'Interacting drugs are common, modifiable precipitants.' }
      ]
    },

    'antipsychotic-restart': {
      ceg: ['Mental health & addiction', 'Prescribing & pharmacology'],
      stem: {
        name: 'Dominic Healy', age: '38 years \u00b7 male',
        pmh: ['Psychosis/schizophrenia \u2014 stopped antipsychotic months ago (side-effects)', 'Early relapse signs returning (thoughts, sleep, suspiciousness) \u2014 good insight', 'Wants to restart today'],
        meds: ['Antipsychotic (stopped)'],
        allergy: 'NKDA',
        recent: '"I stopped my antipsychotic months ago \u2014 I want to go back on it, can you just prescribe it?"',
        reason: 'Video consultation \u2014 request to restart an antipsychotic.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Validate insight', d:'Praise recognising relapse early; act quickly and safely, not a refusal.' },
        { t:'2\u20135',  h:'Mental state + risk', d:'Symptoms/insight/function; risk to self/others; urgent CMHT/crisis if at risk.' },
        { t:'5\u20137',  h:'Who prescribes', d:'Relapse → back to secondary care (CG178); specialist picks drug/dose after a gap, GP prescribes once agreed; not unilateral reissue.' },
        { t:'7\u20139',  h:'Baseline monitoring', d:'Face to face: weight/waist/BP, glucose/HbA1c, lipids, prolactin, movement disorders, diet/activity; ECG only if indicated.' },
        { t:'9\u201312', h:'Side-effects + safety-net', d:'Why he stopped; depot/alternative; crisis contacts/red flags; review.' }
      ],
      wordPics: {
        fail: 'Either reissues the antipsychotic unilaterally with no assessment/monitoring, or flatly refuses and disengages a relapsing patient; misses risk.',
        pass: 'Validates insight, assesses risk, involves psychiatry and arranges baseline monitoring.',
        exc:  'Honours the insight, assesses mental state/risk (urgent escalation if needed), follows shared-care by involving psychiatry, arranges CG178 baseline monitoring (ECG when indicated), explores why he stopped toward sustainable treatment, and safety-nets.'
      },
      avoid: [
        { dont:"\"Sure, here's your old antipsychotic prescription.\"", instead:'"Let\u2019s do this safely \u2014 after months off, your mental-health team should be involved, and we’ll do the baseline checks, with a heart tracing if it’s needed."', why:'Unilateral reissue after a long gap without assessment/monitoring is unsafe.' },
        { dont:'"I can\u2019t prescribe that \u2014 go back to your psychiatrist." (and ends)', instead:'"You\u2019ve done the right thing coming \u2014 I\u2019ll contact your team today to get you seen urgently so we don\u2019t lose time."', why:'A blunt refusal risks disengagement and relapse; escalate supportively.' },
        { dont:'(No risk assessment) focusing only on the script.', instead:'"Any thoughts of harming yourself or others? How are you coping day to day?"', why:'Relapse risk to self/others must be assessed and may need urgent escalation.' }
      ]
    }

  });

})();
