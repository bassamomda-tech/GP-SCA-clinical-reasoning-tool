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
    meta:{ age:29, sex:'F', setting:'Video consultation \u2014 FGM noticed during cervical screening.', system:'Safeguarding / Women\u2019s health \u2014 FGM in an adult: recording, reporting & risk' },
    brief:'Ms Amara Conteh, 29, who underwent FEMALE GENITAL MUTILATION as a child abroad, is seen after it was noticed during her cervical smear; she is anxious about what happens now. The examined skills: respond with TRAUMA-INFORMED, non-judgemental care; understand the DUTIES correctly \u2014 for an ADULT with previously-performed FGM there is NO automatic duty to report HER to the police (she is a survivor, not an offender), BUT you MUST RECORD the finding in her records and the FGM Enhanced Dataset, and \u2014 crucially \u2014 carry out a SAFEGUARDING RISK ASSESSMENT for any girls connected to her (her own daughters, sisters, nieces) who could be at risk, referring if concerns arise; (the statutory MANDATORY police-reporting duty applies specifically to KNOWN FGM in a girl UNDER 18, not to a consenting adult\u2019s historical FGM); assess her CLINICAL needs (type, urinary/menstrual/sexual/obstetric complications, possible DEINFIBULATION for type 3, psychological impact) and refer to specialist FGM services; and be culturally sensitive while clear FGM is illegal/harmful. Avoid frightening her with a wrong "police" threat or missing the at-risk-children dimension. No NG12 link.',
    script:{
      opening:'(Tense.) "The nurse said she\u2019d noticed something during my smear and asked me to see you \u2026 about the cutting I had as a little girl, back home. Am I in trouble? Are you going to report me to the police? I didn\u2019t choose it \u2014 it was done to me when I was 6. Please don\u2019t make this a big thing."',
      facts:[
        { topic:'Trauma-informed, non-judgemental tone', text:'FIRST \u2014 she is a SURVIVOR of childhood abuse, anxious and possibly ashamed. Lead with warmth and reassurance: she is NOT in trouble, this was done TO her as a child, and you are here to support her health, not to judge or punish. A calm, respectful, culturally-sensitive manner is essential \u2014 mishandling this (or threatening police) would retraumatise her and destroy trust.' },
        { topic:'Reporting: she is not reported to police', text:'CORRECT THE FEAR \u2014 for an ADULT with FGM performed in the past (and abroad, as a child), there is NO duty to report HER to the police; she has committed no offence. The statutory MANDATORY reporting duty applies specifically to KNOWN/identified FGM in a girl UNDER 18 (reported to police) \u2014 it does NOT apply to a consenting adult\u2019s historical FGM. Reassure her explicitly that you are not reporting her.' },
        { topic:'But you must RECORD it (and the dataset)', text:'There ARE duties: RECORD the FGM in her medical record (and the FGM Enhanced Dataset, as required for data collection), and document the type and any complications. Recording is a clinical/data duty, not a criminal report \u2014 explain this distinction clearly so she understands recording \u2260 reporting to police.' },
        { topic:'The safeguarding RISK ASSESSMENT \u2014 key', text:'CRITICAL \u2014 the safeguarding focus is on any GIRLS who may be AT RISK: does she have DAUGHTERS, or are there younger sisters/nieces in the family who could be at risk of FGM? Carry out a risk assessment and, if any child is at risk, make a SAFEGUARDING REFERRAL (as in the FGM-abroad scenario). The duty to protect potential future victims is the real safeguarding action here, distinct from anything about the adult herself.' },
        { topic:'Address her clinical & psychological needs', text:'Assess and address HER needs: the TYPE of FGM and complications (urinary problems, recurrent infections, painful periods, dyspareunia, obstetric implications), the option of DEINFIBULATION (especially for type 3, ideally before pregnancy/delivery), and the PSYCHOLOGICAL impact (flashbacks, anxiety, sexual difficulties). Refer to specialist FGM services/clinics and offer psychological support. This is holistic survivor care \u2014 the point of identifying it is to HELP her.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 her fear is of being REPORTED, judged, or having a "big thing" made of it; underneath may be shame, trauma, and worry about her family. She needs immediate reassurance about the police fear, a clear honest explanation of what actually happens (recording, risk assessment for children, an offer of help), and to be treated with dignity. The skill is to discharge the duties correctly and compassionately without frightening or alienating a survivor.' },
      ],
      ice:{
        ideas:'Being found to have FGM means she\u2019ll be reported to the police / be in trouble.',
        concerns:'HIDDEN AGENDA \u2014 fear of police/judgement, shame, trauma; worry about her family; wants it not to be "a big thing".',
        expectations:'Reassurance she\u2019s not in trouble. What she needs: trauma-informed care, correction of the police fear (she isn\u2019t reported), accurate explanation of recording duties, a safeguarding risk assessment for any at-risk girls, and clinical/psychological support/referral.'
      },
      cues:['Adult survivor of childhood FGM noticed at smear \u2014 she is NOT reported to police (mandatory reporting is for known FGM under 18); reassure.','Duties that DO apply: RECORD it (and FGM dataset) and do a SAFEGUARDING RISK ASSESSMENT for any girls at risk (daughters/sisters/nieces).','"Are you reporting me?" \u2014 trauma-informed reassurance; address clinical needs (deinfibulation/type-3, psychological) and refer to FGM services.']
    },
    checkpoints:[
      { dom:'tasks', text:'Responds with TRAUMA-INFORMED, non-judgemental care \u2014 reassures she is a survivor, not in trouble, and treats her with dignity and cultural sensitivity' },
      { dom:'tasks', text:'Corrects the police fear accurately: an ADULT with historical FGM is NOT reported to police; the statutory mandatory-reporting duty applies to KNOWN FGM in a girl UNDER 18, not a consenting adult\u2019s past FGM' },
      { dom:'tasks', text:'Knows the duties that DO apply \u2014 RECORD the FGM in the record and the FGM Enhanced Dataset \u2014 and explains that recording \u2260 reporting to police' },
      { dom:'tasks', text:'Carries out a SAFEGUARDING RISK ASSESSMENT for any girls at risk (daughters, sisters, nieces) and would make a safeguarding referral if a child is at risk \u2014 the key safeguarding action' },
      { dom:'tasks', text:'Assesses and addresses HER clinical/psychological needs (type/complications, deinfibulation especially for type 3, psychological impact) and refers to specialist FGM services' },
      { dom:'rto',   text:'Immediately reassures about the police fear, explains what actually happens clearly, and avoids retraumatising or alienating her' },
      { dom:'rto',   text:'Holds the cultural and trauma context with compassion while remaining clear FGM is harmful/illegal, framing identification as a route to help' },
      { dom:'gs',    text:'Safety-nets and follows up: records appropriately, completes the risk assessment/referral for at-risk girls, refers her to FGM/psychological services, and arranges follow-up \u2014 correct duties discharged compassionately (no NG12 link)' },
    ],
    worked:[
      { lbl:'Reassure immediately', txt:'"Let me put your mind at rest straight away: you are not in trouble, and I am not reporting you to the police. This was done to you as a little girl \u2014 you\u2019re the person it was done to, not someone who did anything wrong."' },
      { lbl:'Recording vs reporting', txt:'"There are a couple of things I do need to do, and I\u2019ll be open about them. I note it in your records, and it goes into a health record-keeping system \u2014 that\u2019s just recording, not a police report. They\u2019re completely different things."' },
      { lbl:'The real safeguarding focus', txt:'"The thing we DO have to think about is protecting any young girls in your family from this. Do you have daughters, or younger sisters or nieces? \u2026 If any girl could be at risk, that\u2019s where we\u2019d step in to protect them \u2014 it\u2019s not about you."' },
      { lbl:'Offer help for her', txt:'"More importantly, this is a chance to help YOU. Are you having any problems \u2014 with your waterworks, periods, pain or discomfort? There\u2019s a procedure that can help with some types, and specialist clinics that support women who\u2019ve been through this."' },
      { lbl:'Psychological support', txt:'"And it can leave a real emotional mark. If you\u2019d find it helpful, I can arrange support to talk things through \u2014 no pressure, it\u2019s there if you want it."' },
      { lbl:'Dignity + safety-net', txt:'"You\u2019ve done nothing wrong by coming today, and I\u2019m glad we can support you. I\u2019ll refer you to the specialist service, and you can come back to me anytime. Is there anything you\u2019re still worried about?"' },
    ],
    learning:'FGM identified in an ADULT during a smear is, first and foremost, a moment for trauma-informed, non-judgemental survivor care: she underwent childhood abuse, is anxious and possibly ashamed, and must be reassured immediately that she is not in trouble and not being reported to the police \u2014 mishandling this, or threatening police, would retraumatise her and destroy trust. The reporting position must be understood correctly: there is NO duty to report an adult with historical FGM to the police (she has committed no offence), because the statutory MANDATORY police-reporting duty applies specifically to KNOWN/identified FGM in a girl UNDER 18, not to a consenting adult\u2019s past FGM. There ARE duties, however: you must RECORD the finding in her medical record and the FGM Enhanced Dataset (a clinical/data duty distinct from a criminal report \u2014 recording is not reporting to police), and \u2014 the critical safeguarding action \u2014 carry out a RISK ASSESSMENT for any girls connected to her (daughters, younger sisters, nieces) who could be at risk of FGM, making a safeguarding referral if a child is at risk. Assess and address her clinical needs (the type of FGM and its complications \u2014 urinary, menstrual, sexual, obstetric \u2014 and the option of deinfibulation, especially for type 3 and ideally before pregnancy/delivery) and her psychological needs (flashbacks, anxiety, sexual difficulties), referring to specialist FGM services and offering psychological support, because the point of identifying it is to help her. The hidden agenda is fear of being reported, judged, or having "a big thing" made of it, with shame and trauma beneath; discharge the duties correctly and compassionately, reassure about the police fear, explain clearly what actually happens, protect any at-risk girls, and treat her with dignity. No NG12 cancer pathway applies.',
    knowledge:{
      guideline:'FGM in adults \u00b7 recording & FGM Enhanced Dataset \u00b7 mandatory reporting (known FGM <18) \u00b7 safeguarding risk assessment \u00b7 deinfibulation/specialist services',
      points:[
        { h:'Trauma-informed survivor care', t:'She is a survivor of childhood abuse \u2014 reassure she\u2019s not in trouble, treat with dignity and cultural sensitivity. Avoid any "police" threat that would retraumatise.' },
        { h:'No police report for an adult', t:'No duty to report an adult\u2019s historical FGM to police. The mandatory police-reporting duty applies to KNOWN FGM in a girl under 18, not a consenting adult\u2019s past FGM.' },
        { h:'But record it', t:'Record the FGM in the medical record and the FGM Enhanced Dataset (clinical/data duty). Recording \u2260 reporting to police \u2014 explain the distinction.' },
        { h:'Safeguarding risk assessment', t:'Assess any girls at risk (daughters, sisters, nieces); refer to safeguarding if a child is at risk. This protection of potential victims is the key action.' },
        { h:'Clinical needs', t:'Type and complications (urinary, menstrual, sexual, obstetric); deinfibulation (especially type 3, ideally pre-pregnancy/delivery); refer to specialist FGM clinics.' },
        { h:'Psychological support', t:'Address trauma, flashbacks, anxiety, sexual difficulties; offer psychological support \u2014 identification is a route to help.' },
        { h:'Never do', t:'Never threaten/report an adult survivor to police; never confuse recording with reporting; never miss the at-risk-girls assessment; never judge or retraumatise.' },
        { h:'Safety-net & follow-up', t:'Record appropriately, complete risk assessment/referral for at-risk girls, refer her to FGM/psychological services, follow up. (No NG12 link.)' }
      ]
    }
  };

  /* ====== 206. F2F — Sex difficult after past assault: trauma-informed pace ====== */
  const c206 = {
    id:'sex-after-assault', title:'"Sex has become painful and I freeze \u2014 something happened to me years ago"', type:'video', duration:12,
    meta:{ age:33, sex:'F', setting:'Video consultation \u2014 sexual difficulty linked to past trauma.', system:'Women\u2019s health / Psychosexual \u2014 trauma-informed care after sexual assault' },
    brief:'Ms Leanne Forbes, 33, presents with painful, difficult sex and "freezing"/involuntary tightening, and tentatively discloses a past SEXUAL ASSAULT. The examined skills are TRAUMA-INFORMED care: respond to the disclosure with belief, validation and no pressure; go at HER PACE and explicitly do NOT rush or insist on an intimate examination (a forced exam would retraumatise \u2014 examination is offered, deferred, and consent-led, only when she is ready and clinically necessary); recognise the likely link between the trauma and the sexual difficulty (e.g. vaginismus/involuntary pelvic-floor tightening, dyspareunia, a trauma/anxiety response), while keeping an open mind to organic causes (infection, dermatological, atrophy, endometriosis) assessed sensitively over time; offer appropriate support and referral (psychosexual therapy, trauma-focused psychology/counselling, specialist services, sexual-assault support services like SARC where relevant); screen current safety/ongoing abuse and mood; and empower her with control and choice throughout. Avoid both ignoring the trauma (treating it as purely physical) and forcing an examination. No NG12 link.',
    script:{
      opening:'(Hesitant, quiet.) "This is hard to talk about \u2026 sex has become really painful, and sometimes I just \u2026 freeze, or everything tightens up and I can\u2019t. It\u2019s affecting my relationship. I think it might be connected to \u2026 something that happened to me years ago. I\u2019ve never really told anyone. Can you fix it?"',
      facts:[
        { topic:'Receive the disclosure with belief & care', text:'FIRST \u2014 she has disclosed something she has "never really told anyone". Respond with BELIEF, VALIDATION and gratitude for her trust ("thank you for telling me, that took courage; I\u2019m really glad you did"), without pressing for details she isn\u2019t ready to share. The way this disclosure is received shapes everything; warmth and no judgement are paramount. Let her lead how much she says.' },
        { topic:'Go at HER pace \u2014 do NOT force an examination', text:'CRITICAL \u2014 trauma-informed care means going at HER pace and explicitly NOT rushing into an intimate examination. A forced or hurried examination would retraumatise her. Make clear that any examination is entirely her choice, can wait, and would only be done when she feels ready, with consent, control (she can stop anytime), a chaperone, and clear explanation \u2014 and only if clinically necessary. Often the first consultation involves NO examination at all; building trust and a plan comes first.' },
        { topic:'Understand the likely trauma link', text:'Recognise the probable connection: the "freezing" and involuntary tightening suggests a trauma/anxiety response and/or VAGINISMUS (involuntary pelvic-floor muscle spasm), with dyspareunia \u2014 a common, treatable consequence of sexual trauma. Validate that this is a real, understandable response of her body and mind to what happened, NOT a failing or something "wrong with her" \u2014 this reframing is therapeutic.' },
        { topic:'Keep organic causes in mind \u2014 sensitively', text:'While the trauma link is likely, keep an open mind to contributing/organic causes assessed sensitively and over time: infection (STI/thrush), dermatological conditions (lichen sclerosus), vaginal atrophy/dryness, endometriosis, or other gynaecological pathology. These are explored gently, with her consent, when she is ready \u2014 not as a reason to override the trauma-informed pace, but so nothing treatable is missed.' },
        { topic:'Offer support & the right referrals', text:'Offer appropriate help: PSYCHOSEXUAL THERAPY, TRAUMA-FOCUSED psychological therapy/counselling (for the assault), specialist services, and \u2014 where relevant \u2014 sexual-assault support (e.g. SARC, support organisations), with information she can take in her own time. Screen current SAFETY (any ongoing abuse) and MOOD/PTSD symptoms. Vaginismus has good treatment (psychosexual therapy, graded approaches, pelvic-floor work) \u2014 give hope.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 "can you fix it?" carries hope, shame, fear of judgement, and possibly the weight of never having told anyone. She needs to feel safe, believed, in CONTROL, and hopeful \u2014 and to not be reduced to a physical problem nor pushed into an examination. The skill is to hold the disclosure with compassion, hand her control, give realistic hope, and set a paced, supportive plan that treats both the trauma and the sexual difficulty.' },
      ],
      ice:{
        ideas:'The painful sex/"freezing" may be connected to a past assault; hopes the doctor can "fix it".',
        concerns:'HIDDEN AGENDA \u2014 shame, fear of judgement, the weight of a first disclosure; impact on her relationship; fear of examination.',
        expectations:'To be "fixed". What she needs: her disclosure believed and held, care at her pace with NO forced examination, the trauma link validated, organic causes kept in mind sensitively, and the right psychosexual/trauma support with hope.'
      },
      cues:['Painful sex + "freezing"/involuntary tightening + disclosed past assault \u2014 trauma-informed care; receive the disclosure with belief.','Go at HER pace; do NOT force an intimate exam (would retraumatise) \u2014 examination is consent-led, deferrable, often not done at the first visit.','Likely vaginismus/trauma response (validate, not a failing); keep organic causes in mind sensitively; offer psychosexual + trauma-focused support.']
    },
    checkpoints:[
      { dom:'tasks', text:'Receives the disclosure with BELIEF and validation, thanks her for her trust, and does not press for details she isn\u2019t ready to share \u2014 letting her lead' },
      { dom:'tasks', text:'Goes at HER PACE and explicitly does NOT force/rush an intimate examination \u2014 makes any examination her choice, deferrable, consent-led with control and a chaperone, and only if clinically necessary (often none at the first visit)' },
      { dom:'tasks', text:'Recognises and VALIDATES the likely trauma link (freezing/involuntary tightening \u2014 vaginismus/trauma response with dyspareunia) as a real, understandable response, not a failing' },
      { dom:'tasks', text:'Keeps organic/contributing causes in mind (infection, lichen sclerosus, atrophy, endometriosis) to be assessed sensitively over time \u2014 without overriding the trauma-informed pace' },
      { dom:'tasks', text:'Offers the right support and referrals (psychosexual therapy, trauma-focused psychology/counselling, specialist/sexual-assault support), screens current SAFETY and MOOD/PTSD, and gives realistic HOPE about treatment' },
      { dom:'rto',   text:'Hands her CONTROL throughout, makes her feel safe and believed, and avoids judgement or pressure' },
      { dom:'rto',   text:'Holds the disclosure with compassion and does not reduce her to a physical problem nor push examination' },
      { dom:'gs',    text:'Safety-nets and follows up: a paced supportive plan, support/referral information to take in her own time, safety/mood follow-up, and an open door \u2014 trauma-informed care that treats both trauma and sexual difficulty (no NG12 link)' },
    ],
    worked:[
      { lbl:'Receive it with care', txt:'"Thank you for telling me \u2014 I know that can\u2019t have been easy, especially if you\u2019ve not told anyone before. I believe you, and I\u2019m really glad you\u2019ve come. We\u2019ll go entirely at your pace today."' },
      { lbl:'Hand her control', txt:'"I want to be clear about one thing up front: I am NOT going to examine you today unless and until YOU want me to. There\u2019s no rush, no pressure \u2014 we can talk and make a plan, and any examination is completely your choice, with you in control, whenever you\u2019re ready, if at all."' },
      { lbl:'Validate the response', txt:'"What you describe \u2014 freezing, everything tightening \u2014 is a very real and understandable way your body protects itself after what happened. It\u2019s not you failing or anything being \u2018wrong\u2019 with you. And importantly, it\u2019s treatable."' },
      { lbl:'Keep options open gently', txt:'"At some point, when you\u2019re comfortable, it can help to check there\u2019s nothing physical adding to the pain \u2014 but only when you\u2019re ready, and only if you want to. There\u2019s no hurry."' },
      { lbl:'Offer support + hope', txt:'"There\u2019s genuinely effective help \u2014 specialist psychosexual therapy for the physical side, and trauma-focused counselling for what happened. Many people get much better. I can also share details of services that support people after assault, for whenever you want them."' },
      { lbl:'Safety + open door', txt:'"Can I gently check \u2014 are you safe now, no one currently hurting you? \u2026 Good. There\u2019s no timetable here. Take what you need, come back when you\u2019re ready, and we\u2019ll keep going together. You\u2019re in charge of this."' },
    ],
    learning:'Sexual difficulty disclosed alongside a past sexual assault calls for trauma-informed care, and the way the disclosure is received shapes everything: respond with belief, validation and gratitude for her trust, without pressing for details she is not ready to share, and let her lead how much she says. The central principle is to go at HER pace and explicitly NOT force or rush an intimate examination \u2014 a forced or hurried exam would retraumatise her \u2014 so make clear that any examination is entirely her choice, can wait, and would only happen when she feels ready, with consent, control (she can stop at any time), a chaperone and explanation, and only if clinically necessary; often the first consultation involves no examination at all, with trust and a plan coming first. Recognise and validate the likely trauma link: "freezing" and involuntary tightening suggest a trauma/anxiety response and/or vaginismus (involuntary pelvic-floor spasm) with dyspareunia, a common and treatable consequence of sexual trauma, and it is a real, understandable protective response of body and mind, not a failing \u2014 a reframing that is itself therapeutic. Keep organic and contributing causes in mind (infection, lichen sclerosus, atrophy/dryness, endometriosis) to be assessed gently over time so nothing treatable is missed, without overriding the trauma-informed pace. Offer the right support \u2014 psychosexual therapy, trauma-focused psychological therapy/counselling, specialist and sexual-assault support services \u2014 with information she can take in her own time, screen current safety and mood/PTSD symptoms, and give realistic hope, as vaginismus and trauma responses have good treatment. The hidden agenda is hope mixed with shame, fear of judgement and the weight of a first disclosure; hand her control, make her feel safe and believed, avoid reducing her to a physical problem or pushing examination, and set a paced, supportive plan. No NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Trauma-informed care \u00b7 vaginismus/dyspareunia after sexual trauma \u00b7 consent-led examination \u00b7 psychosexual & trauma-focused therapy \u00b7 SARC',
      points:[
        { h:'Receive the disclosure well', t:'Believe and validate; thank her for her trust; don\u2019t press for details; let her lead. The reception of disclosure shapes everything.' },
        { h:'Her pace \u2014 no forced exam', t:'Do not rush/force an intimate examination (it would retraumatise). Examination is consent-led, deferrable, with control and a chaperone, only if clinically necessary \u2014 often none at the first visit.' },
        { h:'Validate the trauma link', t:'Freezing/involuntary tightening = trauma response/vaginismus with dyspareunia \u2014 a real, understandable protective response, not a failing. Treatable. Reframing is therapeutic.' },
        { h:'Keep organic causes in mind', t:'Infection, lichen sclerosus, atrophy/dryness, endometriosis \u2014 assessed sensitively over time so nothing treatable is missed, without overriding the pace.' },
        { h:'Support & referral', t:'Psychosexual therapy, trauma-focused psychology/counselling, specialist and sexual-assault support (SARC/organisations); information in her own time. Give hope.' },
        { h:'Safety & mood', t:'Screen current safety/ongoing abuse and mood/PTSD symptoms; act if there is current risk.' },
        { h:'Never do', t:'Never disbelieve or judge; never force/rush an examination; never treat it as purely physical and ignore the trauma; never set a timetable that isn\u2019t hers.' },
        { h:'Safety-net & follow-up', t:'Paced supportive plan, take-home support/referral info, safety/mood follow-up, open door. (No NG12 link.)' }
      ]
    }
  };

  /* ====== 207. F2F/urgent — Unwell on lithium: toxicity vs intercurrent illness ====== */
  const c207 = {
    id:'lithium-toxicity', title:'"I\u2019ve had a sickness bug and now I\u2019m shaky and muddled \u2014 I\u2019m on lithium"', type:'video', duration:12,
    meta:{ age:46, sex:'F', setting:'Video consultation \u2014 an unwell patient on long-term lithium.', system:'Mental health / Prescribing \u2014 lithium toxicity vs intercurrent illness' },
    brief:'Mrs Frances Doyle, 46, on long-term LITHIUM for bipolar affective disorder, presents unwell after a few days of vomiting and diarrhoea, now with a coarse TREMOR, unsteadiness and feeling "muddled". The examined skills: recognise that lithium has a NARROW THERAPEUTIC INDEX and that dehydration/intercurrent illness and interacting drugs readily precipitate LITHIUM TOXICITY; distinguish toxicity (coarse tremor, ataxia, slurred speech, confusion/drowsiness, GI upset, in severe cases seizures/renal failure/arrhythmia) from the intercurrent illness itself; act on the RED FLAGS \u2014 check a lithium LEVEL and renal function/U&E URGENTLY, WITHHOLD lithium pending results, ensure hydration, and ADMIT if toxicity is significant (lithium toxicity can be life-threatening and may need dialysis); identify and address PRECIPITANTS (dehydration from D&V, new NSAIDs, ACE inhibitors/ARBs, diuretics \u2014 thiazides, low salt); and reinforce lithium SICK-DAY rules/safety education. Don\u2019t dismiss it as "just the bug". No NG12 link.',
    script:{
      opening:'"I\u2019ve had this horrible sickness bug for a few days \u2014 throwing up, the runs, couldn\u2019t keep much down. I assumed it was just that, but now my hands are really shaky, I feel wobbly on my feet, and my head\u2019s gone a bit fuzzy and slow. My daughter said I seem confused. I take lithium for my bipolar \u2014 is that relevant?"',
      facts:[
        { topic:'Think lithium toxicity \u2014 narrow therapeutic index', text:'CORE \u2014 lithium has a NARROW THERAPEUTIC INDEX, and the combination of an unwell lithium patient with NEW neurological symptoms (coarse tremor, unsteadiness, confusion) after vomiting/diarrhoea should immediately raise LITHIUM TOXICITY. Dehydration reduces lithium clearance and raises levels. "Is that relevant?" \u2014 yes, critically. Do NOT dismiss this as "just the bug".' },
        { topic:'Recognise the toxicity picture', text:'Features of lithium toxicity: COARSE TREMOR (vs the fine tremor of therapeutic use), ATAXIA/unsteadiness, slurred speech, muscle twitching/myoclonus, drowsiness/CONFUSION, nausea/vomiting/diarrhoea, and in SEVERE cases seizures, renal failure, cardiac arrhythmia and coma. Her coarse tremor, ataxia and confusion are textbook \u2014 distinguish these from the viral illness itself, which may have precipitated them.' },
        { topic:'Act urgently \u2014 level, renal function, withhold', text:'THE ACTIONS \u2014 check a LITHIUM LEVEL and renal function/U&E (and consider TFTs, calcium) URGENTLY; WITHHOLD lithium until you know the level and she has recovered/rehydrated; ensure rehydration (oral or IV per severity); and ADMIT if there is significant toxicity, severe symptoms, high level, renal impairment, or she is unable to maintain hydration \u2014 lithium toxicity can be life-threatening and severe cases may require haemodialysis. Don\u2019t simply continue lithium and send her home.' },
        { topic:'Identify and address precipitants', text:'Find WHY: DEHYDRATION from the D&V is the obvious precipitant, but also review interacting drugs that raise lithium \u2014 NSAIDs, ACE inhibitors/ARBs, and DIURETICS (especially thiazides), as well as a low-salt diet or dehydration generally. Stop/avoid the offending agents, correct fluid/salt balance, and check nothing else (e.g. new infection, renal impairment) is contributing.' },
        { topic:'Lithium safety education / sick-day rules', text:'Reinforce LITHIUM SAFETY: during illnesses causing dehydration (vomiting, diarrhoea, fever, reduced intake), maintain fluids and seek advice early; avoid NSAIDs; be cautious with new medicines (check interactions); know the symptoms of toxicity and to seek urgent help; and attend regular monitoring (levels, renal and thyroid function). Provide/check she has the lithium alert card/booklet. This prevents recurrence.' },
        { topic:'The hidden agenda + mental-health context', text:'HIDDEN AGENDA \u2014 she has rationalised it as "just the bug" and may underplay the confusion (or her daughter\u2019s concern is the key signal). She may also worry about her bipolar/medication. The skill is to take the physical emergency seriously and act, while being mindful of her mental-health condition (don\u2019t just stop lithium long-term without psychiatric input once acute toxicity is managed, given relapse risk). Treat the toxicity now; plan safe re-establishment with her mental-health team.' },
      ],
      ice:{
        ideas:'It\u2019s probably "just the sickness bug"; unsure whether the lithium is relevant.',
        concerns:'HIDDEN AGENDA \u2014 underplaying the confusion (daughter\u2019s concern is the signal); possible worry about her bipolar/medication.',
        expectations:'Something for the bug. What she needs: recognition of likely lithium toxicity, urgent level/renal function with lithium withheld, rehydration, admission if significant, precipitant review, and sick-day/safety education \u2014 not "just the bug".'
      },
      cues:['Unwell lithium patient + coarse tremor + ataxia + confusion after D&V \u2014 LITHIUM TOXICITY (narrow therapeutic index, dehydration raises levels); don\u2019t dismiss.','Act: urgent lithium LEVEL + renal function, WITHHOLD lithium, rehydrate, ADMIT if significant \u2014 toxicity can be life-threatening (\u00b1 dialysis).','Precipitants: dehydration, NSAIDs, ACEi/ARB, thiazide diuretics, low salt \u2014 review/stop; reinforce sick-day rules; re-establish lithium with psychiatry.']
    },
    checkpoints:[
      { dom:'tasks', text:'Immediately suspects LITHIUM TOXICITY in an unwell lithium patient with new neurological symptoms after D&V \u2014 recognising the narrow therapeutic index and that dehydration raises levels \u2014 rather than dismissing it as "just the bug"' },
      { dom:'tasks', text:'Recognises the toxicity picture (coarse tremor, ataxia, slurred speech, confusion/drowsiness, GI symptoms; severe: seizures, renal failure, arrhythmia) and distinguishes it from the intercurrent illness' },
      { dom:'tasks', text:'Acts URGENTLY: checks a lithium LEVEL and renal function/U&E (\u00b1 TFTs/calcium), WITHHOLDS lithium pending results, ensures rehydration, and ADMITS if significant toxicity/severe symptoms/high level/renal impairment/unable to hydrate' },
      { dom:'tasks', text:'Identifies and addresses PRECIPITANTS \u2014 dehydration from D&V, plus interacting drugs (NSAIDs, ACEi/ARBs, thiazide diuretics) and low salt \u2014 stopping/avoiding offenders and correcting fluid/salt balance' },
      { dom:'tasks', text:'Reinforces lithium SICK-DAY rules and safety education (fluids in illness, avoid NSAIDs, drug-interaction caution, toxicity symptoms, regular monitoring, alert card) to prevent recurrence' },
      { dom:'rto',   text:'Takes the daughter\u2019s concern about confusion as a key signal and does not let the patient\u2019s "just the bug" minimisation lower vigilance' },
      { dom:'rto',   text:'Communicates the seriousness clearly and calmly, and is mindful of her bipolar/medication context (relapse risk) when planning' },
      { dom:'gs',    text:'Safety-nets and follows up: urgent bloods/admission as needed, precipitant correction, lithium re-established safely WITH psychiatry once recovered, and monitoring/safety education \u2014 a physical emergency acted on (no NG12 link)' },
    ],
    worked:[
      { lbl:'Connect the dots', txt:'"Yes \u2014 it\u2019s very relevant. The sickness bug has dehydrated you, and that can push your lithium level up, because lithium has a very narrow safe range. The shakiness, wobbliness and fuzziness you\u2019re describing can be signs your lithium is now too high \u2014 that\u2019s not something we sit on."' },
      { lbl:'Take it seriously', txt:'"Your daughter noticing you\u2019re confused is important, and I\u2019m glad she did. Let me examine you and, crucially, get an urgent blood test to check your lithium level and your kidneys today."' },
      { lbl:'Withhold + hydrate', txt:'"For now, please STOP your lithium until we have the level back and you\u2019ve recovered \u2014 don\u2019t take the next dose. And we need to get fluids back into you. Depending on how high it is and how you are, you may need to go to hospital for that."' },
      { lbl:'Find the precipitants', txt:'"Let\u2019s check what tipped it over \u2014 mainly the dehydration, but have you taken any anti-inflammatory painkillers like ibuprofen, or are you on any water tablets or blood-pressure pills? Those can all raise lithium too."' },
      { lbl:'Safety rules', txt:'"Once you\u2019re through this, an important rule: whenever you\u2019re vomiting, have diarrhoea, a fever, or can\u2019t drink, keep your fluids up and ring us early \u2014 and avoid ibuprofen. Keep up your regular lithium blood tests, and carry your lithium card."' },
      { lbl:'Plan + psychiatry', txt:'"We\u2019ll sort the toxicity now. We won\u2019t just abandon your lithium long-term \u2014 once you\u2019re recovered, we\u2019ll restart it safely with your mental-health team, because it\u2019s keeping you well. If you get more drowsy, twitchy, or any fits before the bloods are back, that\u2019s an emergency \u2014 999."' },
    ],
    learning:'An unwell patient on long-term lithium with new neurological symptoms \u2014 coarse tremor, unsteadiness/ataxia and confusion \u2014 after vomiting and diarrhoea must be assumed to have LITHIUM TOXICITY until proven otherwise, because lithium has a narrow therapeutic index and dehydration from intercurrent illness reduces its clearance and raises the level; "is that relevant?" must be answered emphatically yes, and the picture must not be dismissed as "just the bug". Recognise the toxicity features \u2014 coarse tremor (versus the fine tremor of therapeutic use), ataxia, slurred speech, myoclonus, drowsiness/confusion, GI upset, and in severe cases seizures, renal failure, arrhythmia and coma \u2014 and distinguish them from the precipitating viral illness. Act urgently: check a lithium level and renal function/U&E (consider TFTs and calcium), WITHHOLD lithium pending results, ensure rehydration (oral or IV by severity), and ADMIT if there is significant toxicity, severe symptoms, a high level, renal impairment or an inability to maintain hydration \u2014 lithium toxicity can be life-threatening and severe cases may need haemodialysis \u2014 rather than continuing lithium and sending her home. Identify and address the precipitants: dehydration from the D&V is the obvious one, but review interacting drugs that raise lithium (NSAIDs, ACE inhibitors/ARBs, and thiazide diuretics) and low salt, stopping offenders and correcting fluid/salt balance. Reinforce lithium sick-day rules and safety (maintain fluids and seek advice early in dehydrating illness, avoid NSAIDs, check interactions with new medicines, know toxicity symptoms, attend regular monitoring, carry the lithium alert card). The hidden agenda is the patient rationalising it as "just the bug" and underplaying the confusion \u2014 the daughter\u2019s concern is the key signal; take the physical emergency seriously and act, while remaining mindful of her bipolar disorder so that lithium is re-established safely with psychiatric input once recovered, given relapse risk. No NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Lithium toxicity \u00b7 narrow therapeutic index \u00b7 monitoring/sick-day rules \u00b7 interacting drugs (NSAIDs/ACEi/diuretics) \u00b7 admission criteria',
      points:[
        { h:'Suspect toxicity', t:'Unwell lithium patient + new neuro symptoms after D&V \u2192 lithium toxicity (narrow therapeutic index; dehydration raises levels). Never dismiss as "just the bug".' },
        { h:'Toxicity picture', t:'Coarse tremor, ataxia, slurred speech, myoclonus, drowsiness/confusion, GI upset; severe: seizures, renal failure, arrhythmia, coma. Distinguish from the intercurrent illness.' },
        { h:'Act urgently', t:'Urgent lithium level + renal function/U&E (\u00b1 TFTs/calcium); withhold lithium; rehydrate; admit if significant toxicity/severe symptoms/high level/renal impairment/can\u2019t hydrate. Severe cases may need dialysis.' },
        { h:'Precipitants', t:'Dehydration (D&V, fever, low intake), NSAIDs, ACE inhibitors/ARBs, thiazide diuretics, low salt. Stop/avoid offenders; correct fluid/salt balance.' },
        { h:'Sick-day rules & safety', t:'Maintain fluids and seek advice early in dehydrating illness; avoid NSAIDs; check new-drug interactions; know toxicity symptoms; regular monitoring; carry the lithium alert card.' },
        { h:'Mind the mental illness', t:'Take the daughter\u2019s concern seriously; manage acute toxicity, but re-establish lithium safely with psychiatry once recovered (relapse risk) \u2014 don\u2019t stop it long-term unilaterally.' },
        { h:'Never do', t:'Never dismiss as the bug; never continue lithium during toxicity; never miss interacting drugs; never discharge significant toxicity without admission/hydration.' },
        { h:'Safety-net & follow-up', t:'Urgent bloods/admission as needed, precipitant correction, safe lithium re-establishment with psychiatry, monitoring and education. 999 for seizures/marked drowsiness. (No NG12 link.)' }
      ]
    }
  };

  /* ====== 208. F2F — Wants to restart their antipsychotic: bloods, ECG, shared-care rules ====== */
  const c208 = {
    id:'antipsychotic-restart', title:'"I stopped my antipsychotic months ago \u2014 I want to go back on it, can you just prescribe it?"', type:'video', duration:12,
    meta:{ age:38, sex:'M', setting:'Video consultation \u2014 request to restart an antipsychotic.', system:'Mental health / Prescribing \u2014 restarting an antipsychotic: monitoring & shared care' },
    brief:'Mr Dominic Healy, 38, with a history of psychosis/schizophrenia, stopped his ANTIPSYCHOTIC months ago and now \u2014 feeling early warning signs returning \u2014 wants to restart it and asks the GP to "just prescribe it". The examined skills: respond supportively to a patient recognising relapse (a positive, insight-rich step) WITHOUT simply reissuing a higher-risk drug unsafely; assess his current MENTAL STATE and RELAPSE/risk (symptoms, function, risk to self/others, insight) \u2014 escalating urgently if acutely unwell/at risk; understand SHARED-CARE rules \u2014 antipsychotics are often initiated/overseen by SECONDARY CARE under shared-care agreements, and restarting after a long gap usually needs psychiatric/CMHT involvement (re-referral or liaison), not a unilateral GP prescription; arrange the BASELINE MONITORING required for antipsychotics (weight/BMI/waist, blood pressure, bloods \u2014 glucose/HbA1c, lipids, FBC, U&E, LFTs, prolactin; and an ECG for QT prolongation, especially for certain agents); discuss adherence, side-effects and the reasons he stopped; and safety-net. Avoid both a blunt refusal that loses a relapsing patient and an unsafe unmonitored reissue. No NG12 link.',
    script:{
      opening:'"I stopped my antipsychotic a few months back \u2014 I felt fine and I hated the side-effects. But this last couple of weeks I can feel it creeping back \u2014 the thoughts, not sleeping, getting suspicious. I recognise it now. I want to go back on the medication before it gets bad. Can you just prescribe it for me today?"',
      facts:[
        { topic:'Validate the insight \u2014 this is a good step', text:'FIRST \u2014 recognising early relapse and proactively seeking treatment is a POSITIVE, insight-rich step that should be strongly supported and encouraged, not met with a bureaucratic "no". Acknowledge his self-awareness and courage. The goal is to act on his relapse signs quickly AND safely \u2014 holding both the supportive response and the proper process.' },
        { topic:'Assess mental state & risk now', text:'Assess his CURRENT mental state and RELAPSE: the returning symptoms (thoughts, sleep, suspiciousness/paranoia), insight, function, and crucially RISK \u2014 to himself (self-harm/suicide, self-neglect) and to others, and any command symptoms. If he is acutely unwell or at significant risk, this becomes URGENT \u2014 contact the crisis team/CMHT or arrange urgent psychiatric assessment, not just a prescription. Gauge how advanced the relapse is.' },
        { topic:'Shared-care rules \u2014 not a unilateral reissue', text:'CORE \u2014 antipsychotics are frequently initiated and overseen by SECONDARY CARE (psychiatry/CMHT) under SHARED-CARE arrangements; the GP\u2019s role is defined by that agreement. Restarting an antipsychotic after a months-long gap, with relapse, generally needs PSYCHIATRIC involvement \u2014 re-referral to the CMHT or liaison with his mental-health team \u2014 rather than the GP unilaterally restarting a higher-risk drug. Explain this is about getting him the RIGHT, safe treatment quickly, not a brush-off.' },
        { topic:'Baseline monitoring required', text:'Antipsychotics require BASELINE and ongoing MONITORING because of cardiometabolic and other effects: weight/BMI/waist, blood pressure and pulse, bloods (fasting glucose/HbA1c, LIPIDS, FBC, U&E, LFTs, PROLACTIN), and an ECG to check the QT interval (important for several antipsychotics and for cardiac risk). Arrange these as part of safe restarting. (Clozapine has additional strict monitoring \u2014 FBC for neutropenia \u2014 and is specialist-only.)' },
        { topic:'Adherence, side-effects & why he stopped', text:'Explore WHY he stopped (side-effects he "hated" \u2014 weight gain, sedation, sexual/metabolic effects, akathisia) and his adherence pattern, because this informs the choice/dose and prevents another cycle of stopping. Discuss managing side-effects, the relapse risk of stopping, and \u2014 if relevant \u2014 whether a long-acting (depot) formulation or a different agent might suit him better. This is a shared conversation toward sustainable treatment.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 his urgency reflects genuine FEAR of becoming unwell again and a wish to act before it worsens; he may also fear hospital, losing control, or judgement, and the side-effects that drove him off. He needs his insight honoured, swift action, and a clear explanation that involving his mental-health team is to help him get safe treatment fast \u2014 not a refusal. The skill is to neither bluntly refuse (risking disengagement and relapse) nor unsafely reissue, but to escalate appropriately and supportively.' },
      ],
      ice:{
        ideas:'He should just be put back on his antipsychotic today by the GP to head off relapse.',
        concerns:'HIDDEN AGENDA \u2014 fear of becoming unwell again, of hospital/losing control, and of the side-effects that drove him off; wants fast action.',
        expectations:'An immediate GP prescription. What he needs: his insight validated, current mental state/risk assessed (urgent escalation if at risk), shared-care/psychiatric involvement to restart safely, baseline monitoring (incl. ECG), and a side-effect/adherence conversation.'
      },
      cues:['Patient recognises early relapse and wants to restart \u2014 validate the insight; act quickly AND safely, neither refuse bluntly nor reissue unsafely.','Assess current mental state + RISK (self/others, paranoia, insight); urgent CMHT/crisis if acutely unwell or at risk.','Shared-care: antipsychotics are secondary-care-led; restarting after a long gap needs psychiatric involvement + baseline monitoring (bloods, ECG/QT).']
    },
    checkpoints:[
      { dom:'tasks', text:'VALIDATES the insight \u2014 recognising early relapse and seeking treatment is a positive step to support \u2014 rather than meeting it with a bureaucratic refusal' },
      { dom:'tasks', text:'Assesses CURRENT mental state and RELAPSE/RISK (symptoms, insight, function, risk to self/others, command symptoms) and escalates URGENTLY to crisis team/CMHT/psychiatry if acutely unwell or at significant risk' },
      { dom:'tasks', text:'Understands SHARED-CARE rules \u2014 antipsychotics are secondary-care-initiated/overseen; restarting after a long gap with relapse needs PSYCHIATRIC involvement (re-referral/liaison), not a unilateral GP reissue' },
      { dom:'tasks', text:'Arranges the required BASELINE MONITORING \u2014 weight/BMI/waist, BP/pulse, bloods (glucose/HbA1c, lipids, FBC, U&E, LFTs, prolactin) and an ECG for QT \u2014 as part of safe restarting' },
      { dom:'tasks', text:'Explores WHY he stopped (side-effects, adherence) and discusses side-effect management, relapse risk, and options (e.g. depot/alternative agent) toward sustainable treatment' },
      { dom:'rto',   text:'Honours his insight and urgency, and explains that involving his mental-health team is to get him safe treatment FAST \u2014 not a brush-off \u2014 keeping him engaged' },
      { dom:'rto',   text:'Balances a supportive response with the proper process, neither bluntly refusing (risking disengagement/relapse) nor unsafely reissuing' },
      { dom:'gs',    text:'Safety-nets and follows up: urgent escalation if at risk, psychiatric re-referral/liaison, baseline monitoring arranged, crisis contacts/red flags, and review \u2014 swift, safe, shared-care restarting (no NG12 link)' },
    ],
    worked:[
      { lbl:'Validate the insight', txt:'"First \u2014 well done for recognising this and coming in early. Spotting your own warning signs and wanting to act before things worsen is exactly the right thing, and it\u2019s genuinely impressive. Let\u2019s get you the right help quickly."' },
      { lbl:'Assess now', txt:'"Tell me more about what\u2019s coming back \u2014 the thoughts, the suspiciousness, the sleep. Are you having any thoughts of harming yourself or anyone else? How are you managing day to day? \u2026 I need to understand how things are right now."' },
      { lbl:'Explain the process honestly', txt:'"I want to act fast, but I also want to do it safely. Your antipsychotic is usually managed with your mental-health team, and after a few months off it\u2019s best they\u2019re involved in restarting it \u2014 the right drug and dose for you. That\u2019s not a brush-off; it\u2019s how we get you treated properly and quickly."' },
      { lbl:'Escalate appropriately', txt:'"Because you\u2019re noticing it creeping back, I\u2019m going to contact your mental-health team / the crisis team today to get you seen urgently, so we don\u2019t lose time. If things were more advanced or risky, that would be even more urgent."' },
      { lbl:'Monitoring + side-effects', txt:'"Let\u2019s also get the baseline checks these medicines need \u2014 weight, blood pressure, some bloods and a heart tracing. And tell me which side-effects you hated \u2014 because we can often choose or adjust to avoid them, so you\u2019re not back here in six months having stopped again."' },
      { lbl:'Safety-net', txt:'"While we get you seen: here are the crisis numbers. If the thoughts get worse, you can\u2019t sleep at all, you feel unsafe, or anyone\u2019s worried about you, contact them or go to A&E. I\u2019ll chase the referral and we\u2019ll stay on top of this together."' },
    ],
    learning:'A patient who recognises early relapse of psychosis and proactively asks to restart their antipsychotic is showing valuable insight that should be strongly supported \u2014 the task is to act on his relapse signs both quickly AND safely, holding a supportive response together with the proper process, never meeting it with a bureaucratic refusal. Assess his current mental state and relapse (returning symptoms, insight, function) and crucially the risk to himself (self-harm, self-neglect) and others, plus any command symptoms; if he is acutely unwell or at significant risk this is urgent, warranting contact with the crisis team/CMHT or urgent psychiatric assessment rather than a prescription. Understand shared-care rules: antipsychotics are frequently initiated and overseen by secondary care (psychiatry/CMHT) under shared-care agreements, and restarting after a months-long gap with relapse generally needs psychiatric involvement \u2014 re-referral to the CMHT or liaison with his mental-health team \u2014 rather than a unilateral GP reissue of a higher-risk drug, framed as getting him the right, safe treatment fast rather than a brush-off. Arrange the baseline monitoring antipsychotics require because of their cardiometabolic and other effects \u2014 weight/BMI/waist, blood pressure and pulse, bloods (fasting glucose/HbA1c, lipids, FBC, U&E, LFTs, prolactin) and an ECG to check the QT interval \u2014 and remember clozapine is specialist-only with additional strict neutrophil monitoring. Explore why he stopped (side-effects such as weight gain, sedation, sexual/metabolic effects or akathisia, and his adherence pattern), discuss managing side-effects and the relapse risk of stopping, and consider options like a long-acting depot or a different agent toward sustainable treatment. The hidden agenda is genuine fear of becoming unwell again, alongside fear of hospital, lost control, judgement and the side-effects that drove him off; honour his insight, act swiftly, explain that involving his mental-health team is to help, and neither bluntly refuse (risking disengagement and relapse) nor unsafely reissue, but escalate appropriately and supportively. No NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Antipsychotic monitoring (baseline + ongoing) \u00b7 shared-care agreements \u00b7 relapse/risk assessment \u00b7 ECG/QT \u00b7 CMHT/crisis escalation',
      points:[
        { h:'Validate the insight', t:'Recognising early relapse and seeking treatment is a positive, insight-rich step \u2014 support it strongly; act quickly and safely, not with a refusal.' },
        { h:'Assess mental state & risk', t:'Symptoms, insight, function, risk to self/others, command symptoms. If acutely unwell/at risk \u2192 urgent crisis team/CMHT/psychiatry, not just a prescription.' },
        { h:'Shared-care rules', t:'Antipsychotics are usually secondary-care-initiated/overseen. Restarting after a long gap with relapse needs psychiatric involvement (re-referral/liaison), not a unilateral GP reissue.' },
        { h:'Baseline monitoring', t:'Weight/BMI/waist, BP/pulse, bloods (glucose/HbA1c, lipids, FBC, U&E, LFTs, prolactin), ECG for QT. Clozapine is specialist-only with strict FBC monitoring.' },
        { h:'Why he stopped', t:'Explore side-effects (weight, sedation, sexual/metabolic, akathisia) and adherence; manage side-effects; consider depot/alternative for sustainability; explain relapse risk of stopping.' },
        { h:'Keep him engaged', t:'Frame psychiatric involvement as getting safe treatment fast, not a brush-off. Balance support with process; neither refuse bluntly nor reissue unsafely.' },
        { h:'Never do', t:'Never reissue an antipsychotic unilaterally after a long gap without psychiatric input/monitoring; never miss relapse risk; never skip baseline bloods/ECG; never disengage a relapsing patient with a flat refusal.' },
        { h:'Safety-net & follow-up', t:'Urgent escalation if at risk, psychiatric re-referral/liaison, baseline monitoring, crisis contacts/red flags, review. (No NG12 link.)' }
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
        { t:'2\u20134',  h:'Record vs report', d:'Record in notes + FGM dataset (not a police report); explain the distinction.' },
        { t:'4\u20137',  h:'Risk assessment', d:'Any girls at risk (daughters/sisters/nieces)? Safeguarding referral if so \u2014 the key action.' },
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
        { t:'2\u20134',  h:'Her pace, no forced exam', d:'Examination is her choice, deferrable, consent-led; often none today.' },
        { t:'4\u20137',  h:'Validate trauma link', d:'Freezing/tightening = trauma response/vaginismus; real, not a failing; treatable.' },
        { t:'7\u20139',  h:'Organic causes + support', d:'Keep organic causes in mind sensitively; offer psychosexual + trauma-focused therapy.' },
        { t:'9\u201312', h:'Safety/mood + open door', d:'Screen current safety/mood; take-home info; paced plan; she\u2019s in charge.' }
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
        { t:'2\u20135',  h:'Assess + act', d:'Examine; urgent lithium LEVEL + renal function/U&E; withhold lithium; rehydrate.' },
        { t:'5\u20137',  h:'Admit if significant', d:'Severe symptoms/high level/renal impairment/can\u2019t hydrate \u2192 admit (\u00b1 dialysis).' },
        { t:'7\u20139',  h:'Precipitants', d:'Dehydration, NSAIDs, ACEi/ARB, thiazides, low salt \u2014 review/stop.' },
        { t:'9\u201312', h:'Safety education + psychiatry', d:'Sick-day rules, alert card; re-establish lithium with mental-health team; 999 red flags.' }
      ],
      wordPics: {
        fail: 'Dismisses it as the bug; continues lithium; no urgent level/renal function; misses interacting drugs; discharges significant toxicity.',
        pass: 'Suspects toxicity, checks level/renal function, withholds lithium and rehydrates with admission if needed.',
        exc:  'Recognises lithium toxicity, acts urgently (level + renal function, withhold, rehydrate, admit if significant), identifies precipitants/interacting drugs, reinforces sick-day rules, and re-establishes lithium safely with psychiatry.'
      },
      avoid: [
        { dont:'"It\u2019s just the bug \u2014 keep taking your lithium and rest."', instead:'"Dehydration can push your lithium too high \u2014 stop the next dose and let\u2019s check an urgent level and your kidneys today."', why:'Continuing lithium during likely toxicity is dangerous; the bug is the precipitant, not the whole story.' },
        { dont:'(No bloods) reassuring without a level.', instead:'"I need an urgent lithium level and kidney test now \u2014 your symptoms suggest it may be too high."', why:'Toxicity is confirmed/excluded by the level and renal function; it can be life-threatening.' },
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
        { t:'5\u20137',  h:'Shared-care', d:'Antipsychotics secondary-care-led; restart after a gap needs psychiatric involvement, not unilateral reissue.' },
        { t:'7\u20139',  h:'Baseline monitoring', d:'Weight/BP, bloods (glucose/HbA1c, lipids, FBC, U&E, LFTs, prolactin), ECG/QT.' },
        { t:'9\u201312', h:'Side-effects + safety-net', d:'Why he stopped; depot/alternative; crisis contacts/red flags; review.' }
      ],
      wordPics: {
        fail: 'Either reissues the antipsychotic unilaterally with no assessment/monitoring, or flatly refuses and disengages a relapsing patient; misses risk.',
        pass: 'Validates insight, assesses risk, involves psychiatry and arranges baseline monitoring.',
        exc:  'Honours the insight, assesses mental state/risk (urgent escalation if needed), follows shared-care by involving psychiatry, arranges baseline monitoring incl. ECG, explores why he stopped toward sustainable treatment, and safety-nets.'
      },
      avoid: [
        { dont:"\"Sure, here's your old antipsychotic prescription.\"", instead:'"Let\u2019s do this safely \u2014 after months off, your mental-health team should be involved, and we\u2019ll do the baseline checks and ECG."', why:'Unilateral reissue after a long gap without assessment/monitoring is unsafe.' },
        { dont:'"I can\u2019t prescribe that \u2014 go back to your psychiatrist." (and ends)', instead:'"You\u2019ve done the right thing coming \u2014 I\u2019ll contact your team today to get you seen urgently so we don\u2019t lose time."', why:'A blunt refusal risks disengagement and relapse; escalate supportively.' },
        { dont:'(No risk assessment) focusing only on the script.', instead:'"Any thoughts of harming yourself or others? How are you coping day to day?"', why:'Relapse risk to self/others must be assessed and may need urgent escalation.' }
      ]
    }

  });

})();
