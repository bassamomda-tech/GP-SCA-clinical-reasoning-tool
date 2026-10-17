/* ============================================================
   Reasoning GP — SCA new cases, set Q (upload 124)
   Ten new remote cases (5 video, 5 telephone): polypharmacy and
   frailty; care-home carer call; financial abuse of an older
   adult; health and welfare LPA and best interests; telephone
   interpreter with new diabetes results; Deaf BSL user on video;
   breaking a likely cancer diagnosis; miscarriage follow-up;
   bereaved son, MCCD and medical examiner; impaired colleague.
   Every field is inline on the case object (stem, script with
   patient-voice facts, ICE, cues and data packets, checkpoints,
   model consultation, knowledge, kb, playbook, links, pitfalls,
   ceg, timeMap, wordPics, avoid). Marking uses the RCGP domains
   dg / cm / ro only. Load after the last sca-cases file and
   before sca-models.js. Last checked: October 2026.
   ============================================================ */
(function(){
  'use strict';
  var CHECKED = 'October 2026';
  var C = [];

  /* ===== Q1. Polypharmacy and frailty — structured medication review ===== */
  C.push({
    id:'polypharmacy-frailty-review',
    title:'“My daughter says I rattle when I walk — and I keep ending up on the floor”',
    type:'video', duration:12,
    meta:{ age:84, sex:'F',
      setting:'Video — booked structured medication review after three falls; her daughter joins on the same call at the patient’s request.',
      system:'Older adults / Prescribing — structured medication review in frailty: falls, postural hypotension, anticholinergic burden and shared deprescribing',
      checked:CHECKED,
      blueprint:{ difficulty:3, lifeStage:'older adult', groups:['Older adults','Prescribing','Investigations & results'], type:'video', thirdParty:true } },
    brief:'Mrs Winifred (Winnie) Clarke, 84, lives alone in a ground-floor flat, has moderate frailty (Clinical Frailty Scale 6) and takes 13 regular medicines. She has had three falls in two months with dizziness on standing. The practice nurse visited two days ago and recorded a postural drop with symptoms, a low sodium, an eGFR of 41 and an HbA1c of 43 on metformin. Her daughter Marcia joins the video and wants “all the tablets stopped”. The task is a structured medication review: gather the falls history and red flags (head injury, loss of consciousness, anticoagulants — none), interpret the nurse’s findings, identify the likely drug causes (three antihypertensives with a symptomatic postural drop; a thiazide with sodium 131; anticholinergic burden of about 7 from oxybutynin, amitriptyline and codeine; zopiclone; metformin overtreatment in frailty with reduced eGFR; primary-prevention aspirin; long-term PPI without a clear indication), use STOPP/START thinking, and agree a staged plan with Winnie — who has capacity and is the decision-maker — while respecting Marcia’s views. Hidden agenda: Winnie has been taking an extra zopiclone on bad nights and is frightened that another fall means “being put in a home”. A good candidate prioritises two or three changes now (stop bendroflumethiazide, start tapering amitriptyline, stop oxybutynin with a continence review), plans a slow zopiclone taper she agrees to, reviews metformin and aspirin, arranges blood tests and a falls/strength-and-balance referral, and books follow-up in two weeks — without stopping everything at once.',
    script:{
      opening:'“Hello doctor, can you see me? Marcia’s set this up for me. I’m all right really, I just keep going over. Three times now. Marcia thinks it’s the tablets — she says I rattle when I walk.” (Marcia, off to one side: “Mum, tell the doctor about the dizzy spells.”)',
      facts:[
        { topic:'The falls', text:'“Three times since the end of August. Twice getting up from my chair to go to the kitchen, once getting out of bed in the night to go to the toilet.” If asked: “I go woozy and grey when I stand up, then my legs go.” Never blacked out — “I knew what was happening the whole time.”' },
        { topic:'Injuries and red flags', text:'If asked: “Bruised my hip and my elbow. I didn’t bang my head.” No chest pain, no palpitations, no fits, no weakness in the arms or legs, speech fine. Not on any blood thinner. Could get herself up twice; the third time she pressed her pendant alarm and waited “about half an hour” for Marcia.' },
        { topic:'Waterworks and nights', text:'“I’m up three or four times a night to wee — that’s why I’m on the bladder tablet.” If asked: dry mouth “all the time”, constipated (“every four or five days”), sometimes muddled about the day. No burning when passing urine.' },
        { topic:'Sleep tablets', text:'Takes zopiclone 7.5 mg “for years, since my husband died in 2017”. Only if asked gently and directly about taking more than prescribed: “Some nights I take another half if I can’t drop off. Don’t tell Marcia.” (She is on the call — see how to play it.)' },
        { topic:'Pain', text:'Arthritis in both knees. Takes co-codamol 30/500 “two, about three times a day” and amitriptyline at night “for the pain and to help me sleep”. Pain is “bearable” most days.' },
        { topic:'Diabetes and eating', text:'“The sugar has always been fine.” Eating less — “I’m not one for big meals now.” Lost a few pounds this year. If asked: sometimes shaky and sweaty late morning; she eats a biscuit and it passes.' },
        { topic:'Managing her tablets', text:'Uses the blister packs from the chemist but “sometimes I can’t remember if I’ve had the morning ones”. If asked: no one checks. Happy to have the pharmacist help.' },
        { topic:'Home and function', text:'Ground-floor flat, lives alone since her husband Errol died. Walks with a stick indoors, frame outside. Washes and dresses herself slowly. Carers? “No, I don’t want strangers in.” Marcia visits most days after work. Doesn’t drive. No alcohol except “a small sherry at Christmas”. Never smoked.' },
        { topic:'Eyes and feet', text:'Glasses for reading, last eye test “a couple of years ago”. Feet fine, wears slippers indoors — “the ones with the back trodden down”.' },
        { topic:'What matters to her', text:'“Stopping in my own home. Going to church on a Sunday. Seeing my great-grandson.” She wants to keep her “sleeping tablet” and is worried that stopping tablets means “they’re giving up on me”.' },
        { topic:'Marcia (daughter, on the call)', text:'Marcia, 58, a school administrator: “She’s on thirteen tablets, doctor. Thirteen! Just stop the lot and let’s see.” Worried and tired; says, if asked, she has been thinking about whether Mum “should be somewhere safer”. Calms down when she is listened to and given specific actions.' },
        { topic:'How to play it', text:'Winnie is warm, a bit hard of hearing, proud and independent. Volunteer the falls and the dizziness. Hold back the extra zopiclone and the fear of a care home unless the doctor asks about worries or asks Marcia to step away for a minute — if the doctor offers to speak to you alone, accept, and then say: “I’m frightened that if I fall again she’ll put me in a home. And I take an extra sleeping tablet some nights.” If the doctor talks only to Marcia, go quiet and say “I am here, you know.” If the doctor proposes stopping everything at once, look worried: “All of them? Even my sleeping tablet?”' }
      ],
      ice:{
        ideas:'“I’m just getting old and wobbly. Maybe the water tablet — I’m always running to the toilet.”',
        concerns:'HIDDEN AGENDA — “If I fall again Marcia will put me in a home.” She also takes an extra half or whole zopiclone on bad nights and is frightened of having it stopped and of being told off. She says this only if seen on her own or asked kindly what worries her most.',
        expectations:'“To stop falling. And to keep my sleeping tablet.” Marcia expects the doctor to stop all the tablets today.'
      },
      cues:[
        '“I go woozy and grey when I stand up” — postural symptoms; the nurse’s lying and standing readings are in the notes.',
        '“I am here, you know” (if the doctor talks over her) — she has capacity and wants to be the one deciding.',
        '“Even my sleeping tablet?” — the door to the extra zopiclone and the fear of losing her independence.'
      ],
      data:{ kind:'Practice nurse home visit (2 days ago) and bloods (same day)', values:[
        ['Lying BP (5 min)','138/72 mmHg, pulse 68 regular',''],
        ['Standing BP at 1 min','112/64 mmHg — “dizzy”','Drop of 20 systolic or more = postural hypotension'],
        ['Standing BP at 3 min','108/60 mmHg — still dizzy',''],
        ['Weight','54 kg (57 kg in October 2025)',''],
        ['Clinical Frailty Scale','6 (moderately frail)','1–9'],
        ['Sodium','131 mmol/L','133–146'],
        ['Potassium','4.6 mmol/L','3.5–5.3'],
        ['eGFR','41 mL/min/1.73m² (48 a year ago)','>60'],
        ['HbA1c','43 mmol/mol','Individual target; avoid tight control in frailty'],
        ['Hb','121 g/L','115–165'],
        ['Anticholinergic burden (ACB) score','7 (oxybutynin 3, amitriptyline 3, codeine 1)','3 or more = higher risk of falls and confusion']
      ] }
    },
    checkpoints:[
      { dom:'dg', text:'Takes a focused falls history: circumstances (on standing, at night), prodrome, no loss of consciousness, injuries, no head injury, not anticoagulated, time on the floor, and screens for cardiac and neurological red flags' },
      { dom:'dg', text:'Interprets the nurse’s findings: symptomatic postural hypotension (drop of 26–30 systolic), sodium 131 on a thiazide, eGFR 41 on metformin 2 g a day, HbA1c 43 with late-morning shakiness (possible hypoglycaemia), weight loss, frailty score 6 and anticholinergic burden of 7' },
      { dom:'dg', text:'Goes through the medicines one by one, including how she actually takes them — and finds the extra zopiclone, the missed doses and the anticholinergic side effects (dry mouth, constipation, muddled)' },
      { dom:'cm', text:'Uses STOPP/START-style reasoning to prioritise: reduce antihypertensives (stop bendroflumethiazide first), taper amitriptyline, stop oxybutynin with a continence review, reduce or stop metformin, stop primary-prevention aspirin, review the PPI — making one or two changes at a time with a plan for the rest' },
      { dom:'cm', text:'Plans a slow, agreed zopiclone reduction rather than stopping it abruptly, with sleep advice — and does not shame her for the extra doses' },
      { dom:'cm', text:'Addresses falls prevention beyond medicines: falls service and strength-and-balance programme, home hazards and footwear, eye test, pendant alarm and getting up from the floor, repeat bloods and lying/standing BP' },
      { dom:'ro', text:'Speaks to Winnie as the decision-maker, checks she is happy for Marcia to be on the call, offers a moment alone, and finds her real fear (a care home) and what matters to her (home, church, family)' },
      { dom:'ro', text:'Acknowledges Marcia’s worry, explains why stopping everything at once is unsafe, agrees a shared written plan and a pharmacist/blister-pack review, and books follow-up in about two weeks with clear safety-netting' }
    ],
    worked:[
      { lbl:'Who decides', txt:'“Winnie, I can see Marcia is with you — are you happy for her to stay for this? And is it all right if, at some point, I have a quick word with just you? I do that with everyone.”' },
      { lbl:'The nurse’s numbers', txt:'“When the nurse checked your blood pressure lying down it was fine, but when you stood up it dropped quite a lot and you felt dizzy. That fits with what happens before you fall. Several of your tablets can cause exactly that.”' },
      { lbl:'Find what matters', txt:'“Before we change anything — what matters most to you over the next year?” … “Then let’s make the tablets work for that: staying steady, staying at home, getting to church.”' },
      { lbl:'Not everything at once', txt:'“Marcia, I understand why you want them all stopped — thirteen is a lot. But some need to come down slowly, and if we change everything at once we won’t know what helped. So today: stop the water tablet and the bladder tablet, and start bringing the amitriptyline down. In two weeks we’ll look again.”' },
      { lbl:'The sleeping tablet', txt:'“Thank you for telling me about the extra tablet — that was honest, and you’re not in trouble. Taking more makes falls at night more likely. I’m not going to whip it away. Can we agree to stick to one a night for now, and next time talk about slowly reducing it together?”' },
      { lbl:'Safety-net', txt:'“If you fall and hit your head, black out, can’t get up, or get chest pain or a racing heart — call 999. If you feel more dizzy, more muddled or your waterworks get worse after the changes, ring us that day. I’ll see you on video again in two weeks with new blood tests.”' }
    ],
    learning:'A structured medication review in frailty starts with the person, not the list: what matters to them, how they actually take their medicines, and what the falls look like. Here the falls are explained by symptomatic postural hypotension on three antihypertensives, a thiazide-associated low sodium, an anticholinergic burden of 7, a hypnotic (sometimes doubled) and metformin overtreatment in a frail woman with an eGFR of 41. The skill is to prioritise and stage the changes, agree them with the patient who has capacity, involve the relative without letting her decide, and combine deprescribing with falls prevention, blood tests and early review.',
    knowledge:{
      guideline:'Sources: NICE NG5 Medicines optimisation (2015) · NICE NG56 Multimorbidity: clinical assessment and management (2016) · NICE NG249 Falls: assessment and prevention in older people and in people 50 and over at higher risk (2025) · STOPP/START version 3 (O’Mahony et al., European Geriatric Medicine, 2023) · Anticholinergic Burden (ACB) scale · NHS England structured medication review guidance (Network Contract DES)',
      summary:'Falls with a symptomatic postural drop in a frail woman on 13 medicines: identify the likely culprits, prioritise, stage the changes, agree them with her and add falls prevention.',
      points:[
        { h:'Diagnose the falls', t:'Postural hypotension is a fall in systolic BP of 20 mmHg or more (or diastolic 10 or more) on standing, especially with symptoms. Ask about prodrome, loss of consciousness, injuries, head injury and anticoagulants; screen for cardiac syncope (exertional, no warning, palpitations) and neurological causes.' },
        { h:'Red flags', t:'Loss of consciousness without warning, syncope on exertion, chest pain, new focal weakness, head injury on an anticoagulant, a long lie or inability to get up — these need same-day assessment.' },
        { h:'Read the pattern of drug harm', t:'Three antihypertensives with an HbA1c-driven diabetes regimen are tight targets for a fit 60-year-old, not a frail 84-year-old. Thiazides cause hyponatraemia. Anticholinergics (oxybutynin, amitriptyline, codeine) add up — an ACB score of 3 or more is linked to falls, confusion and constipation. Z-drugs increase falls and fractures.' },
        { h:'STOPP/START in practice', t:'STOPP/START version 3 flags: antihypertensives with persistent postural hypotension; anticholinergics in people with falls or confusion; long-term hypnotics; aspirin for primary prevention; PPI at full dose beyond 8 weeks without an indication; metformin needs a lower dose when eGFR is 30–44 (BNF: maximum 1 g a day — she takes 2 g) and stopping below 30; tight glucose targets risk hypoglycaemia in frailty. START prompts: vitamin D/calcium and bone protection where indicated — she is already on alendronic acid, which also needs a duration review.' },
        { h:'Stage the changes', t:'Change one or two medicines at a time, starting with the most harmful and easiest to stop. Taper drugs with withdrawal effects (amitriptyline, zopiclone, opioids). Recheck lying and standing BP, U&E and glucose control after changes. Agree a written plan and involve the community pharmacist.' },
        { h:'Falls prevention beyond tablets', t:'NICE NG249: multifactorial falls assessment and a strength-and-balance programme (for example FaME or Otago), home hazard assessment, footwear, vision, continence, and teaching how to get up from the floor; consider a falls service referral after recurrent falls.' },
        { h:'Shared decisions with a relative present', t:'The patient with capacity decides. Check consent for the relative to be present, offer time alone, and use the relative’s knowledge without letting them overrule. Respect what matters to the patient (NICE NG56).' },
        { h:'Safety-net and follow-up', t:'999 for head injury, blackout, chest pain or a long lie; same-day contact for more dizziness, confusion or urinary retention; review in about two weeks with bloods and postural BP, then continue the staged plan.' }
      ]
    },
    stem:{
      name:'Winifred (Winnie) Clarke', age:'84 years · female',
      pmh:['Hypertension (2001)','Type 2 diabetes (2009)','Osteoarthritis both knees','Overactive bladder (2019)','Osteoporosis — wrist fracture 2018','Widowed 2017; lives alone, ground-floor flat','Electronic frailty index: moderate frailty'],
      meds:['Amlodipine 10 mg once daily','Ramipril 10 mg once daily','Bendroflumethiazide 2.5 mg once daily','Atorvastatin 40 mg at night','Aspirin 75 mg once daily (no cardiovascular history recorded)','Omeprazole 20 mg once daily (started 2016, indication not recorded)','Oxybutynin 5 mg twice daily','Amitriptyline 25 mg at night','Zopiclone 7.5 mg at night','Co-codamol 30/500 two tablets up to four times daily','Metformin 1 g twice daily','Alendronic acid 70 mg weekly (since 2018)','Colecalciferol with calcium carbonate one tablet twice daily'],
      allergy:'No known drug allergies',
      recent:'Practice nurse home visit 2 days ago (falls review): three falls since late August, no head injury. Lying BP 138/72; standing 1 min 112/64 and 3 min 108/60 with dizziness. Pulse 68 regular. Weight 54 kg (57 kg a year ago). Clinical Frailty Scale 6. Bloods same day: Na 131 (133–146), K 4.6, eGFR 41 (48 last year), HbA1c 43 mmol/mol, Hb 121. ACB score calculated by nurse: 7. Daughter Marcia (next of kin) to join the video at patient’s request.',
      reason:'Structured medication review by video after recurrent falls.'
    },
    model:[
      { phase:'Opening and consent', clock:'0–1 min', who:'dr', text:'Hello Mrs Clarke, I’m Dr Lee. Can you see and hear me all right? I can see someone else with you — is that your daughter?', dom:'ro', why:'Checks the video works and identifies who is present' },
      { who:'pt', text:'Yes, that’s Marcia. She set this up. I just keep going over, doctor. Three times now.' },
      { who:'dr', text:'Thank you. Are you happy for Marcia to stay while we talk? And would it be all right if I have a quick word with just you at some point — I do that with everyone.', dom:'ro', why:'Confirms consent for the third party and plans time alone' },
      { who:'pt', text:'Yes, she can stay. That’s fine.' },
      { phase:'The falls', clock:'1–4 min', who:'dr', text:'Tell me about the falls — what happens just before you go over?', dom:'dg', why:'Open question on the mechanism of the falls' },
      { who:'pt', text:'I stand up and go all woozy and grey, then my legs go. Twice from the chair, once in the night going to the toilet.' },
      { who:'dr', text:'Did you black out at all, bang your head, or get any chest pain or a racing heart? And are you on any blood thinners?', dom:'dg', why:'Screens for syncope, head injury and cardiac red flags' },
      { who:'pt', text:'No, I knew what was happening. Bruised my hip and elbow. No head. No blood thinners.' },
      { who:'dr', text:'The nurse’s check two days ago helps here — your blood pressure was fine lying down but dropped when you stood, and you felt dizzy. That matches what you describe, and several tablets can cause it.', dom:'dg', why:'Uses the recorded findings and links them to her symptoms' },
      { phase:'The medicines, one by one', clock:'4–7 min', who:'dr', text:'Let’s go through your tablets together. How do you manage them — and do you ever miss some or take a bit extra?', dom:'dg', why:'Asks how she really takes them, not just the list' },
      { who:'pt', text:'Blister packs. Sometimes I can’t remember if I’ve had the morning ones. My mouth’s always dry and I’m bunged up.' },
      { who:'dr', text:'That dry mouth and constipation can come from the bladder tablet and the amitriptyline — they add up. Do you ever feel shaky or sweaty late morning?', dom:'dg', why:'Links symptoms to anticholinergic burden and asks about hypoglycaemia' },
      { who:'pt', text:'Sometimes. I have a biscuit and it goes.' },
      { who:'dr', text:'Marcia, would you mind stepping out for a minute? … Mrs Clarke, is there anything that worries you about all this that you’d rather say just to me?', dom:'ro', why:'Creates space for the hidden agenda' },
      { who:'pt', text:'I’m frightened if I fall again she’ll put me in a home. And… some nights I take another half of the sleeping tablet.' },
      { who:'dr', text:'Thank you for telling me — you’re not in trouble. Our aim is exactly the opposite of a home: keeping you steady so you can stay where you are. An extra sleeping tablet does make night-time falls more likely, so let’s stick to one a night and plan to bring it down slowly together. Shall we ask Marcia back?', dom:'cm', why:'Responds without judgement and agrees a safe first step on the hypnotic' },
      { phase:'Shared plan', clock:'7–10 min', who:'dr', text:'Marcia, I hear you want them all stopped, and you’re right that some need to go — but stopping thirteen at once isn’t safe and we wouldn’t know what helped. Today I’d suggest stopping the water tablet, which is lowering her salt level and her pressure, and the bladder tablet, and starting to reduce the amitriptyline. Does that sound reasonable to you both?', dom:'cm', why:'Prioritised, staged deprescribing explained to both' },
      { who:'pt', text:'What about my waterworks if I stop the bladder one?' },
      { who:'dr', text:'Good question. The practice nurse will do a continence review — there are things that help without those side effects. I’ll also look at the diabetes tablet, because your sugar is lower than it needs to be at your age and your kidneys are a bit weaker. And the aspirin may not be doing you any good.', dom:'cm', why:'Addresses her concern and maps the next steps for metformin and aspirin' },
      { who:'dr', text:'Beyond tablets: I’d like to refer you to the falls team for a strength and balance programme, and ask for a home check — slippers with backs, a light at night. When did you last have your eyes tested?', dom:'cm', why:'Multifactorial falls prevention' },
      { who:'pt', text:'A couple of years ago.' },
      { phase:'Safety-net and close', clock:'10–12 min', who:'dr', text:'So: stop the water and bladder tablets today, amitriptyline down to 10 mg, one sleeping tablet only, eye test, falls referral, and I’ll ask the pharmacist to update the blister pack. If you fall and hit your head, black out, or can’t get up — 999. If you feel more dizzy, muddled or can’t pass water, ring us that day. Blood test and blood pressure check in ten days, and I’ll call you on video in two weeks. Can you tell me back what we’re changing?', dom:'cm', why:'Clear plan, safety-net, follow-up and teach-back' },
      { who:'pt', text:'Stop the water one and the bladder one, half the… the smaller amitriptyline, and only one sleeping tablet.' },
      { who:'dr', text:'Exactly right. Thank you both — and Mrs Clarke, the aim is to keep you at home and getting to church.', dom:'ro', why:'Ends on what matters to her' }
    ],
    kb:{
      social:[
        { h:'What matters', t:'Living at home, church and family are her goals; the plan is framed around them. Fear of a care home can lead older people to hide falls or symptoms.' },
        { h:'Carer strain', t:'Marcia visits daily after work and is thinking about “somewhere safer”. Offer a carer’s assessment through adult social care and signpost carer support.' }
      ],
      legal:[
        { h:'Capacity and consent', t:'Under the Mental Capacity Act 2005 adults are presumed to have capacity. Winnie decides about her own medicines; Marcia has no legal authority to decide for her unless she lacks capacity for that decision and Marcia holds a relevant lasting power of attorney.' }
      ],
      professional:[
        { h:'Third party on video', t:'Confirm who is present and that the patient agrees; offer time alone; keep the patient at the centre of the conversation.' },
        { h:'Documenting the review', t:'Record what matters to the patient, each medicine’s indication, changes agreed, the reasons and the review date; share the plan with the community pharmacist.' }
      ],
      community:[
        { h:'Support', t:'Local falls service and strength-and-balance classes (FaME/Otago), community pharmacy New Medicine Service or discharge support, Age UK, pendant alarm services, occupational therapy home assessment.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Loss of consciousness, especially without warning or on exertion','Head injury, particularly if anticoagulated','Chest pain or palpitations','New focal neurological symptoms','Long lie or unable to get up'],
        psychosocial:['Lives alone; daughter visits daily','Fear of a care home','How she actually takes her medicines (blister packs, missed and extra doses)','Goals: home, church, family'],
        ice:['Idea: getting old, maybe the water tablet','Concern: being put in a home; losing her sleeping tablet','Expectation: stop falling; keep zopiclone (daughter wants all stopped)']
      },
      diagnosis:'Recurrent falls due mainly to symptomatic postural hypotension from overtreated blood pressure, with contributions from anticholinergic burden, a hypnotic, possible hypoglycaemia on metformin with reduced kidney function, and hyponatraemia on a thiazide.',
      diagnosisLay:'“Your blood pressure drops when you stand up, and some of your tablets are making that worse. A few others are adding to the dizziness and the dry mouth. We can change them — slowly and safely.”',
      management:{
        reflectIce:'“You want to stay in your own home — so this plan is about keeping you steady there.”',
        psychosocial:'Seen alone briefly; extra zopiclone discussed without blame; carer support offered to Marcia.',
        sharedPlan:['Stop bendroflumethiazide and oxybutynin today; continence review','Reduce amitriptyline to 10 mg, review in 2 weeks','One zopiclone a night now; agree a slow taper at the next review','Next: reduce/stop metformin, stop primary-prevention aspirin, review PPI and alendronic acid duration','Falls service referral, home hazard check, eye test, pharmacist to update blister pack','U&E and postural BP in 10 days; video review in 2 weeks'],
        safetyNet:['999 for head injury, blackout, chest pain or a long lie','Same-day call for worse dizziness, confusion or inability to pass urine']
      }
    },
    links:[
      { ic:'📋', t:'Multimorbidity and polypharmacy', s:'Case walkthrough · deprescribing', href:'../cases/multimorbidity-polypharmacy.html' },
      { ic:'🗺️', t:'Falls', s:'Visual algorithm · multifactorial assessment', href:'algorithms/falls.html' },
      { ic:'🗺️', t:'Dizziness', s:'Visual algorithm', href:'algorithms/dizziness.html' },
      { ic:'💊', t:'Osteoporosis', s:'Management protocol · bone protection', href:'management/osteoporosis.html' }
    ],
    pitfalls:{
      intro:'This station is failed by treating the list instead of the person: stopping everything, changing nothing, or talking to the daughter instead of the patient.',
      items:[
        { dom:'cm', fail:'Stopping all 13 medicines because the daughter asked.', why:'Unsafe (withdrawal from amitriptyline, zopiclone and opioids; rebound symptoms) and impossible to evaluate.', fix:'Prioritise two or three changes now and set out the order for the rest.' },
        { dom:'cm', fail:'Changing nothing — “your blood pressure is well controlled”.', why:'Ignores a symptomatic postural drop and three falls; misses the purpose of the review.', fix:'Treat the postural drop as the finding that changes management.' },
        { dom:'dg', fail:'Never asking how she takes her tablets.', why:'Misses the extra zopiclone and the uncertain morning doses.', fix:'“Do you ever miss some or take a bit extra?”' },
        { dom:'ro', fail:'Talking to Marcia throughout.', why:'Undermines a patient with capacity and closes off her hidden agenda.', fix:'Address Winnie, confirm consent, offer a moment alone.' },
        { dom:'cm', fail:'Medicines only — no falls prevention.', why:'Falls are multifactorial; deprescribing alone misses strength, vision and home hazards.', fix:'Falls service, strength and balance, eye test, footwear and night lighting.' },
        { dom:'cm', fail:'No follow-up or blood tests after changes.', why:'BP, sodium and glucose need rechecking; the staged plan needs a next step.', fix:'Bloods and postural BP in about 10 days; review in 2 weeks.' }
      ]
    },
    ceg:['Older adults','Long-term conditions & cancer','Investigations & results'],
    timeMap:[
      { t:'0–1', h:'Who is present', d:'Check the video, identify Marcia, confirm consent, plan a moment alone.' },
      { t:'1–4', h:'The falls', d:'Mechanism, prodrome, no LOC, injuries, no head injury, not anticoagulated; link to the nurse’s postural drop.' },
      { t:'4–7', h:'Medicines and the patient alone', d:'How she takes them; anticholinergic and hypoglycaemia symptoms; extra zopiclone; fear of a care home.' },
      { t:'7–10', h:'Staged shared plan', d:'Stop thiazide and oxybutynin, taper amitriptyline, one zopiclone a night; next: metformin, aspirin, PPI; falls referral and home/eyes.' },
      { t:'10–12', h:'Safety-net and follow-up', d:'999 triggers; same-day triggers; bloods and postural BP in 10 days; review in 2 weeks; teach-back.' }
    ],
    wordPics:{
      clearFail:'Stops all the medicines at once, or changes nothing; does not take a falls history or use the nurse’s findings; talks over the patient to her daughter; no safety-net.',
      fail:'Identifies some problem medicines but makes unprioritised or unsafe changes (stops zopiclone abruptly), misses the postural drop or the anticholinergic burden, and gives a vague follow-up.',
      pass:'Takes a falls history, interprets the postural drop and bloods, prioritises a few safe changes with the patient’s agreement, adds falls prevention and arranges follow-up with bloods.',
      clearPass:'All of the above, plus: treats Winnie as the decision-maker while involving Marcia, finds the extra zopiclone and the care-home fear without blame, stages the deprescribing clearly with reasons, involves the pharmacist, frames everything around what matters to her and checks understanding.',
      exc:'All of the above, plus: treats Winnie as the decision-maker while involving Marcia, finds the extra zopiclone and the care-home fear without blame, stages the deprescribing clearly with reasons, involves the pharmacist, frames everything around what matters to her and checks understanding.'
    },
    avoid:[
      { dont:'“Right, Marcia, let’s go through Mum’s tablets.”', instead:'“Mrs Clarke, are you happy for Marcia to stay while we go through your tablets?”', why:'The patient has capacity and is the decision-maker.' },
      { dont:'“We’ll stop the sleeping tablet today.”', instead:'“Let’s keep to one a night for now and plan a slow reduction together.”', why:'Abrupt withdrawal of a long-term hypnotic causes rebound insomnia and withdrawal; agreement makes success likely.' },
      { dont:'“Your blood pressure is fine.”', instead:'“Lying down it’s fine — standing up it drops and you feel dizzy. That’s the bit we need to fix.”', why:'The postural drop is the key finding.' }
    ],
    scTasks:[
      { dom:'dg', t:'Opens and explores the problem', d:'Checks the video and who is present; open question about the falls before going to the list.', pts:1 },
      { dom:'dg', t:'Explores psychosocial context', d:'Lives alone, daughter visits daily, what matters (home, church, family), how she manages blister packs.', pts:1 },
      { dom:'dg', t:'Identifies and follows cues', d:'“Woozy and grey when I stand”, “I am here, you know”, “Even my sleeping tablet?”.', pts:1 },
      { dom:'dg', t:'Discovers ICE', d:'Idea (old age/water tablet), concern (care home, losing zopiclone), expectation (stop falling; daughter wants all stopped).', pts:2 },
      { dom:'dg', t:'Uses examination and test results', d:'Interprets the nurse’s lying/standing BP, sodium 131, eGFR 41, HbA1c 43, weight loss, CFS 6 and ACB 7.', pts:1 },
      { dom:'dg', t:'Generates and tests hypotheses', d:'Postural hypotension from antihypertensives; anticholinergic burden; hypnotic; hypoglycaemia; hyponatraemia.', pts:1 },
      { dom:'dg', t:'Rules in/out serious causes', d:'No LOC, no head injury, not anticoagulated, no cardiac or neurological red flags.', pts:2 },
      { dom:'dg', t:'Reaches a working diagnosis', d:'Falls mainly from medicine-related postural hypotension in moderate frailty, with several contributing drugs.', pts:2 },
      { dom:'cm', t:'Offers a safe, patient-centred plan', d:'Staged deprescribing agreed with Winnie: stop thiazide and oxybutynin, taper amitriptyline, one zopiclone a night, then metformin/aspirin/PPI.', pts:2 },
      { dom:'cm', t:'Manages comorbidity and contributors', d:'Falls service, strength and balance, home hazards, eyes, continence review, pharmacist and blister pack.', pts:1 },
      { dom:'cm', t:'Provides follow-up and safety net', d:'Bloods and postural BP in 10 days, review in 2 weeks; 999 and same-day triggers.', pts:1 }
    ]
  });
  /* ===== Q2. Care-home senior carer: resident “not herself” ===== */
  C.push({
    id:'carehome-staff-call',
    title:'“She’s just not herself today — the dip was positive, so can you send some antibiotics over?”',
    type:'telephone', duration:12,
    meta:{ age:91, sex:'F',
      setting:'Telephone — senior carer at a residential care home calling about a resident.',
      system:'Older adults / Urgent care — the unwell care-home resident: recognising possible sepsis, not relying on a urine dipstick over 65, using the ReSPECT form and escalating',
      checked:CHECKED,
      blueprint:{ difficulty:2, lifeStage:'older adult', groups:['Older adults','Urgent & unscheduled care','Professional & ethical'], type:'telephone', thirdParty:true } },
    brief:'Grace Mensah, senior carer on shift at Elm Court residential home, phones about Mrs Dorothy Pearce, 91, who has vascular dementia and is “not herself” since yesterday — sleepier, off her food, more muddled. Grace dipped the urine (positive for nitrites and leucocytes) and asks for antibiotics “for her water infection”. When the candidate asks for observations (Grace has a RESTORE2-style chart), they show possible sepsis: temperature 38.4 °C, pulse 112, respiratory rate 24, BP 98/58 (usual about 135/80), SpO2 93% on air (usual 96%), new confusion — NEWS2 12. She has a wet cough since yesterday, and she was given paracetamol an hour ago. Her ReSPECT form (agreed last year with Dorothy and her son) says: not for CPR; for hospital admission and active treatment of reversible causes such as infection; not for intensive care. The task: take the history from a third party efficiently, do NOT diagnose a UTI from a dipstick in someone over 65, recognise a NEWS2 of 7 or more as an emergency, check the ReSPECT form, and arrange a 999 ambulance with the right information going with her, while supporting a worried carer. Hidden agenda: Grace is the only senior on duty, is anxious about leaving the floor, and her manager has told staff “we’re trying to keep admissions down” — she half-expected to be told to manage it at home.',
    script:{
      opening:'“Hi, it’s Grace, senior carer at Elm Court. I’m ringing about Dorothy Pearce in room 6. She’s just not herself today — really sleepy, not eating, more muddled than usual. I dipped her wee and it’s positive, nitrites and leucocytes, so I think it’s a water infection. Can you send some antibiotics over to the chemist?”',
      facts:[
        { topic:'Who she is and consent', text:'If asked: “Grace Mensah, senior carer. I’ve looked after Dorothy for two years.” Has the resident’s care plan and medication chart in front of her. Dorothy cannot come to the phone — “she’s too drowsy”.' },
        { topic:'Timeline', text:'“Yesterday afternoon she didn’t want her tea and was a bit chesty. This morning she was hard to wake and didn’t know my name — she always knows my name.” Usually she chats, walks with a frame and feeds herself.' },
        { topic:'Observations', text:'Only if asked for observations: “I did them twenty minutes ago — temperature 38.4, pulse 112, breathing about 24 a minute, blood pressure 98 over 58, oxygen 93%. Her normal blood pressure is about 135 over 80 and her oxygen’s usually 96.” If asked about the NEWS score: “The chart says 12 — I wasn’t sure if that counts when it’s a water infection.”' },
        { topic:'Chest', text:'If asked: “She’s got a wet cough since yesterday and she’s bringing up a bit of yellow.” Breathing looks faster than usual. No chest pain that she can say.' },
        { topic:'Waterworks and fluids', text:'If asked: “She’s incontinent anyway, pads. The pad was wet this morning but not since about 8 o’clock.” Drank half a cup of tea today. No vomiting or diarrhoea. The urine “smells a bit strong”.' },
        { topic:'Other features', text:'If asked: no fall, no head injury, no new weakness of an arm or leg, face looks normal. Skin: “she’s hot but her hands feel cold and a bit blotchy”. No rash that doesn’t fade. Not diabetic. Not on blood thinners.' },
        { topic:'Medicines', text:'Amlodipine, donepezil, paracetamol as needed, Laxido. “I gave her two paracetamol about an hour ago because she was hot.”' },
        { topic:'ReSPECT form', text:'Only if asked about a ReSPECT form or treatment plan: “Yes, it’s in her file. It says not for CPR. It says… for hospital transfer and treatment of reversible causes like infections, but not for intensive care. Her son Peter signed it with her last year.”' },
        { topic:'Family', text:'Son Peter, 64, is next of kin and lives 20 minutes away. “He likes to be told if anything changes.” No lasting power of attorney recorded that Grace knows of.' },
        { topic:'Pressure at the home', text:'Only if the doctor asks how she is doing or what worries her: “I’m the only senior on today. And our manager keeps saying we need to keep admissions down. I thought you’d just give antibiotics and I could manage her here.”' },
        { topic:'How to play it', text:'Grace is competent, busy and a bit flustered. Ask for antibiotics clearly at the start. Give observations only when asked. If the doctor simply agrees to prescribe antibiotics for a UTI, accept gratefully and end the call. If the doctor asks for observations and explains it is serious, become worried: “Oh — should I have rung 999?” Calm down when given clear, step-by-step instructions. If the doctor checks the ReSPECT form with you and explains why hospital fits her wishes, say: “That makes sense — that’s what Peter would want.”' }
      ],
      ice:{
        ideas:'“It’s a water infection — the dip was positive. She gets confused with them.”',
        concerns:'HIDDEN AGENDA — she is the only senior on shift, worried about the other residents, and her manager has asked staff to avoid admissions; she is anxious about being blamed either way. She shares this only if asked how she is or what worries her.',
        expectations:'Antibiotics sent to the pharmacy so she can manage Dorothy at the home.'
      },
      cues:[
        '“Really sleepy … didn’t know my name — she always knows my name” — acute change from baseline; delirium is a sign of serious illness, not a diagnosis.',
        '“The chart says 12 — I wasn’t sure if that counts when it’s a water infection” — a NEWS2 of 12 is an emergency whatever the source.',
        '“Our manager keeps saying we need to keep admissions down” — pressure that could delay escalation; the ReSPECT form, not workload, guides the decision.'
      ],
      data:{ kind:'Care-home observations (RESTORE2 chart, 20 minutes before the call)', values:[
        ['Temperature','38.4 °C (paracetamol given 1 hour ago)','NEWS2: 38.1–39.0 = 1'],
        ['Pulse','112 / min','NEWS2: 111–130 = 2'],
        ['Respiratory rate','24 / min','NEWS2: 21–24 = 2'],
        ['Blood pressure','98/58 mmHg (usual ~135/80)','NEWS2: systolic 91–100 = 2'],
        ['SpO2','93% on air (usual 96%)','NEWS2 scale 1: 92–93 = 2'],
        ['Consciousness','New confusion, drowsy','NEWS2: new confusion = 3'],
        ['NEWS2 total','12','7 or more = emergency response'],
        ['Urine dipstick','Nitrite +, leucocytes ++','Do not use dipsticks to diagnose UTI in people over 65']
      ] }
    },
    checkpoints:[
      { dom:'dg', text:'Confirms who is calling and their role, that they are with the resident’s records, and establishes the acute change from her usual baseline (alert, chatty, mobile with a frame)' },
      { dom:'dg', text:'Asks for the full set of observations and recognises NEWS2 12 (with new confusion, hypotension relative to baseline, tachycardia, tachypnoea, low saturations, fever despite paracetamol) as possible sepsis needing emergency assessment' },
      { dom:'dg', text:'Looks for a source and other causes: wet productive cough (likely chest), urinary symptoms, reduced urine output, mottled cold peripheries, no non-blanching rash, no fall or stroke features' },
      { dom:'cm', text:'Explains that a positive urine dipstick is not used to diagnose UTI in people over 65 (asymptomatic bacteriuria is common) and does not prescribe antibiotics over the phone for a “UTI”' },
      { dom:'cm', text:'Checks the ReSPECT form and acts on it: not for CPR, but for hospital transfer and treatment of reversible causes — so arranges a 999 ambulance now, without waiting for a GP visit' },
      { dom:'cm', text:'Gives clear practical instructions: stay with her, sit her up, repeat observations while waiting, nothing by mouth if very drowsy, send the ReSPECT form, medication chart and a handover; informs the son (next of kin); documents the call' },
      { dom:'ro', text:'Asks how Grace is managing, acknowledges the pressure from the manager and being the only senior, and reassures her that escalating was right — while making the GP’s decision clear' },
      { dom:'ro', text:'Uses clear, ordered telephone language, checks Grace has understood the plan (teach-back), and offers to speak to the manager or the son if helpful' }
    ],
    worked:[
      { lbl:'Baseline first', txt:'“What is Dorothy normally like on a good day? … So she usually chats and knows your name — and today she doesn’t. That’s a big change, and I take that very seriously.”' },
      { lbl:'Ask for the numbers', txt:'“Have you been able to do a set of observations? Can you read them to me — temperature, pulse, breathing rate, blood pressure, oxygen level and how alert she is?”' },
      { lbl:'Skip the dip', txt:'“In people over 65 the urine dipstick is often positive even without an infection, so we don’t use it to diagnose a water infection. And her chest and her observations worry me more.”' },
      { lbl:'Name the emergency', txt:'“A score of 12 with new confusion and a low blood pressure means she could have sepsis — a serious reaction to infection. She needs to be seen in hospital now. Please call 999 straight after we finish; I’ll document that I’ve advised it.”' },
      { lbl:'Use the ReSPECT form', txt:'“Her ReSPECT form says she would want hospital treatment for something reversible like an infection, but not CPR or intensive care. That’s exactly this situation — please send the form with her so the hospital team know her wishes.”' },
      { lbl:'Support the carer', txt:'“You did the right thing calling. I know you’re the only senior on and there’s pressure about admissions — but this decision is about Dorothy’s safety and her own wishes, and it’s mine to make. Shall I ring Peter, or would you like to?”' }
    ],
    learning:'An unwell care-home resident who is “not herself” needs observations, not a dipstick. Acute confusion with NEWS2 of 7 or more is an emergency whatever the presumed source — here likely a chest infection with sepsis. In people over 65, urine dipsticks are not used to diagnose UTI because asymptomatic bacteriuria is common; treating the dipstick both misses the real diagnosis and drives antibiotic resistance. The ReSPECT form guides the level of treatment: not for CPR does not mean not for hospital. On the telephone, a clear, ordered plan with practical steps and support for the carer is what keeps the resident safe.',
    knowledge:{
      guideline:'Sources: NICE NG253 Suspected sepsis in people aged 16 or over: recognition, assessment and early management (2025) · Royal College of Physicians National Early Warning Score 2 (2017) · UKHSA Diagnosis of urinary tract infections: quick reference tools for primary care (updated 2025) · NICE NG109 Urinary tract infection (lower): antimicrobial prescribing (2018) · NICE CG103 Delirium (2010, updated 2023) · Resuscitation Council UK ReSPECT process (version 3) · RESTORE2 (NHS West Hampshire CCG / Wessex AHSN)',
      summary:'Acute confusion with NEWS2 12 in a 91-year-old is possible sepsis: 999 now, in line with her ReSPECT form. Don’t diagnose UTI from a dipstick over 65.',
      points:[
        { h:'Diagnose the deterioration', t:'Acute change from baseline (drowsy, new confusion, off food) is delirium until proven otherwise — a sign of an underlying illness such as infection, dehydration, drugs or retention. Ask what the person is normally like.' },
        { h:'Red flags — sepsis', t:'NEWS2 7 or more, or any single parameter scoring 3 (new confusion), triggers an emergency response. Also high-risk: systolic BP 90 or below, respiratory rate 25 or more, heart rate above 130, SpO2 below 92% (new), mottled or ashen skin, no urine for 18 hours. Paracetamol can mask fever.' },
        { h:'Skip the dip over 65', t:'UKHSA guidance: do not use urine dipsticks to diagnose UTI in people aged over 65 or with a catheter — bacteriuria without infection is very common. Diagnose UTI on new urinary symptoms and signs (dysuria, new frequency or urgency, new incontinence, suprapubic pain, rigors, new delirium with other signs), and send urine for culture before antibiotics if UTI is suspected.' },
        { h:'Find the source', t:'A new productive cough, faster breathing and lower saturations point to a chest source here. Also consider urinary retention, skin, abdomen and medicines.' },
        { h:'Using the ReSPECT form', t:'ReSPECT records the person’s preferences and clinical recommendations for emergencies. “Not for CPR” is a separate decision from other treatments. Dorothy’s form supports hospital transfer for reversible causes, so 999 is in line with her wishes. If a form says “ward-based care in the home”, discuss anticipatory and palliative options instead.' },
        { h:'Instructions to the carer', t:'Call 999, stay with the resident, sit upright, repeat observations every 15–30 minutes, nothing by mouth if very drowsy, prepare the ReSPECT form, medication chart and a handover sheet, tell the paramedics the NEWS2 trend.' },
        { h:'Communication and records', t:'Speak to the next of kin (or ask the home to); document the call, observations, advice and the reason for admission; consider a call to the home the next day to update the care plan.' },
        { h:'Safety-net', t:'If the ambulance is delayed and she deteriorates (harder to rouse, breathing worse, colour changes) — call 999 again. Do not wait for a GP visit or antibiotics.' }
      ]
    },
    stem:{
      name:'Dorothy Pearce', age:'91 years · female',
      pmh:['Vascular dementia (moderate) — lives in Elm Court residential home','Hypertension','Osteoarthritis — mobile with a frame','Incontinence of urine (uses pads)','ReSPECT form on file (completed with patient and son, 2025)'],
      meds:['Amlodipine 5 mg once daily','Donepezil 10 mg at night','Paracetamol 1 g up to four times daily when required','Macrogol one sachet daily'],
      allergy:'Penicillin — rash (1990s)',
      recent:'Care-home ward round 6 weeks ago: settled, eating well, walks with frame, “chatty, knows staff by name”. Weight stable. Next of kin: son, Peter Pearce.',
      reason:'Telephone call from senior carer at the care home: “not herself today, positive urine dip, requests antibiotics”.'
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello, it’s Dr Lee from the surgery. Can I take your name and role, and are you with Mrs Pearce’s records now?', dom:'dg', why:'Identifies the caller and her access to information' },
      { who:'pt', text:'Grace Mensah, senior carer. Yes, I’ve got her file and her chart. She’s not herself, the dip’s positive — can you send antibiotics?' },
      { who:'dr', text:'Thank you, Grace. Before we decide on treatment I need to understand how she is. What is she normally like, and what’s changed?', dom:'dg', why:'Establishes the baseline before accepting the caller’s diagnosis' },
      { who:'pt', text:'Normally she chats and walks with her frame. Since yesterday she’s off her food and chesty, and this morning she’s hard to wake and didn’t know my name.' },
      { phase:'Observations and source', clock:'1–4 min', who:'dr', text:'That’s a big change. Have you done a set of observations? Please read them to me.', dom:'dg', why:'Asks for objective measurements on the telephone' },
      { who:'pt', text:'Temperature 38.4, pulse 112, breathing 24, blood pressure 98 over 58, oxygen 93%. The chart says 12. I gave paracetamol an hour ago.' },
      { who:'dr', text:'Thank you, that’s really useful. You said chesty — is she coughing anything up? And how are her hands and skin, and when did she last pass urine?', dom:'dg', why:'Looks for source and markers of poor perfusion' },
      { who:'pt', text:'Wet cough, yellow phlegm. She’s hot but her hands are cold and a bit blotchy. Pad was last wet about eight.' },
      { who:'dr', text:'Any fall, weakness on one side, or a rash that doesn’t fade when pressed?', dom:'dg', why:'Screens for other emergencies' },
      { who:'pt', text:'No, none of that.' },
      { phase:'Explain and escalate', clock:'4–7 min', who:'dr', text:'Grace, I’m worried about Dorothy. A score of 12 with new confusion, low blood pressure and fast breathing means she may have sepsis — possibly from a chest infection. About the dip: in people over 65 it’s often positive without infection, so we don’t use it to diagnose a water infection.', dom:'cm', why:'Names the emergency and corrects the dipstick reasoning' },
      { who:'pt', text:'Oh — should I have rung 999?' },
      { who:'dr', text:'You were right to call. Does she have a ReSPECT form? What does it say about hospital?', dom:'cm', why:'Checks the patient’s documented wishes before deciding the level of care' },
      { who:'pt', text:'Not for CPR. For hospital transfer and treatment of reversible causes like infection, not intensive care. Her son Peter signed it with her.' },
      { who:'dr', text:'Then hospital is what she would want for this. Please call 999 as soon as we finish — tell them NEWS2 12, possible sepsis, and that I advised it. Send the ReSPECT form, her medication chart and a handover sheet with her. Sit her up, stay with her or have someone stay, repeat the obs every 15 minutes, and nothing to eat or drink while she’s this drowsy.', dom:'cm', why:'Clear, practical, ordered instructions' },
      { phase:'The carer', clock:'7–10 min', who:'dr', text:'How are you doing with all this today?', dom:'ro', why:'Invites the hidden agenda' },
      { who:'pt', text:'I’m the only senior on. And the manager keeps saying keep admissions down. I thought you’d just send antibiotics.' },
      { who:'dr', text:'That’s a lot to carry on your own. Keeping people out of hospital is right when it’s what they want and it’s safe — today it’s neither. This is my clinical decision and it follows her ReSPECT form, so you’ve done exactly the right thing. Would you like me to call Peter, or will you?', dom:'ro', why:'Supports the carer and takes responsibility for the decision' },
      { who:'pt', text:'Could you? I need to get back to the floor.' },
      { phase:'Close', clock:'10–12 min', who:'dr', text:'Of course. Can you tell me back the plan so I know we’ve got it the same?', dom:'ro', why:'Teach-back on the telephone' },
      { who:'pt', text:'999 now, say NEWS 12 and possible sepsis, ReSPECT form and meds chart with her, sit her up, obs every 15 minutes, nothing to drink.' },
      { who:'dr', text:'Perfect. If she gets harder to wake or her breathing worsens before they arrive, ring 999 again. I’ll call Peter now and record this in her notes. Thank you, Grace.', dom:'cm', why:'Safety-net, family contact and documentation' }
    ],
    kb:{
      social:[
        { h:'Care-home pressures', t:'Staff may be under pressure to avoid admissions or to request quick prescriptions. Support them, and make the clinical reasoning explicit so the decision is understood and documented.' },
        { h:'Family', t:'Next of kin usually wish to be told promptly; the ReSPECT conversation with the son makes this easier.' }
      ],
      legal:[
        { h:'Capacity and best interests', t:'Dorothy is too drowsy to decide now. Under the Mental Capacity Act 2005, treatment is given in her best interests, informed by her previously expressed wishes recorded on the ReSPECT form and by consulting her son.' },
        { h:'ReSPECT is not legally binding', t:'It records recommendations and preferences; it is not an advance decision to refuse treatment, but it carries great weight in a best-interests decision.' }
      ],
      professional:[
        { h:'Sharing information with care staff', t:'Care-home staff are part of the direct care team; sharing relevant information for care is appropriate. Confirm the caller’s identity and role.' },
        { h:'Antimicrobial stewardship', t:'Prescribing for a positive dipstick in an older person causes harm (C. difficile, resistance) and can miss the real diagnosis.' },
        { h:'Documentation', t:'Record the caller, observations, NEWS2, advice, ReSPECT recommendations, the decision to admit, and who informed the family.' }
      ],
      community:[
        { h:'Resources for care homes', t:'RESTORE2 / soft-signs training for staff, local care-home support teams, UKHSA “Skip the Dip” resources.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['NEWS2 7 or more, or new confusion','Systolic BP 90 or below, RR 25 or more, HR above 130','Mottled or cold peripheries, no urine for 18 hours','Non-blanching rash','Fall, head injury or stroke features'],
        psychosocial:['Care-home setting; only one senior on shift','Manager’s pressure to avoid admissions','Son as next of kin'],
        ice:['Idea: a water infection (positive dip)','Concern: workload, blame, admissions pressure','Expectation: antibiotics sent to the pharmacy']
      },
      diagnosis:'Possible sepsis, probably from a lower respiratory tract infection, presenting with delirium in a 91-year-old with vascular dementia — NEWS2 12. The positive urine dipstick is not diagnostic over 65.',
      diagnosisLay:'“Her score and her low blood pressure tell me this could be sepsis — her body reacting badly to an infection, probably in her chest. She needs hospital treatment now.”',
      management:{
        reflectIce:'“I know you were expecting antibiotics for a water infection — let me explain why this is more serious and why the dip doesn’t help us here.”',
        psychosocial:'Acknowledge the carer’s pressure; GP takes responsibility for the decision; offer to call the son.',
        sharedPlan:['999 now — NEWS2 12, possible sepsis','ReSPECT form, MAR chart and handover sheet go with her','Sit up, stay with her, repeat obs every 15 minutes, nothing by mouth while drowsy','GP informs son; documents the call'],
        safetyNet:['Call 999 again if she deteriorates before the ambulance arrives','GP to call the home the next day for an update']
      }
    },
    links:[
      { ic:'🗺️', t:'Delirium', s:'Visual algorithm · acute confusion', href:'algorithms/delirium.html' },
      { ic:'🗺️', t:'Confusion', s:'Visual algorithm', href:'algorithms/confusion.html' },
      { ic:'💊', t:'UTI in women', s:'Management protocol · diagnosis and dipsticks', href:'management/uti-women.html' },
      { ic:'📋', t:'Dementia', s:'Case walkthrough', href:'../cases/dementia.html' }
    ],
    pitfalls:{
      intro:'This station tests whether you treat the dipstick or the patient. It is failed by prescribing over the phone without observations, or by missing the ReSPECT form.',
      items:[
        { dom:'cm', fail:'Prescribing nitrofurantoin for a “UTI” on the dipstick result.', why:'Misses sepsis from a chest source and ignores UKHSA advice not to dipstick over 65.', fix:'Ask for the observations before anything else.' },
        { dom:'dg', fail:'Not establishing her baseline.', why:'“Confused” means nothing in dementia unless you know what is normal for her.', fix:'“What is she like on a good day?”' },
        { dom:'cm', fail:'Arranging a GP visit “later today”.', why:'NEWS2 12 needs an emergency response; a visit delays treatment.', fix:'999 now, in line with the ReSPECT form.' },
        { dom:'cm', fail:'Assuming “not for CPR” means “not for hospital”.', why:'ReSPECT separates CPR from other treatment; her form supports admission.', fix:'Read the treatment recommendations with the carer.' },
        { dom:'ro', fail:'Criticising the carer for dipping the urine or not calling 999.', why:'Undermines a stressed colleague and future escalation.', fix:'Thank her, explain, and take responsibility for the decision.' },
        { dom:'cm', fail:'No instructions for while waiting.', why:'The resident may deteriorate before the ambulance arrives.', fix:'Position, repeat obs, nothing by mouth, re-call 999 if worse.' }
      ]
    },
    ceg:['Older adults','Urgent & unscheduled care','Professional & ethical dilemmas'],
    timeMap:[
      { t:'0–1', h:'Caller and baseline', d:'Name, role, records to hand; what is she normally like?' },
      { t:'1–4', h:'Observations and source', d:'Full obs and NEWS2; cough and sputum; urine output; peripheries; rash; fall or stroke features.' },
      { t:'4–7', h:'Explain and decide', d:'Possible sepsis; skip the dip over 65; check the ReSPECT form; 999 now.' },
      { t:'7–10', h:'Practical steps and the carer', d:'What to send, what to do while waiting; admissions pressure; who calls the son.' },
      { t:'10–12', h:'Teach-back and safety-net', d:'Grace repeats the plan; re-call 999 if worse; document; follow up tomorrow.' }
    ],
    wordPics:{
      clearFail:'Prescribes antibiotics for a UTI on the dipstick without asking for observations; no recognition of sepsis; no ReSPECT check.',
      fail:'Asks some questions but does not get or act on the full observations, arranges a routine visit, or relies on the dipstick.',
      pass:'Takes baseline and observations, recognises possible sepsis, explains that dipsticks are not used over 65, checks the ReSPECT form and arranges 999.',
      clearPass:'All of the above, plus: identifies the chest source, gives clear practical instructions while waiting, supports the carer with the admissions pressure, contacts the son, uses teach-back and documents.',
      exc:'All of the above, plus: identifies the chest source, gives clear practical instructions while waiting, supports the carer with the admissions pressure, contacts the son, uses teach-back and documents.'
    },
    avoid:[
      { dont:'“Positive dip — I’ll send nitrofurantoin to the chemist.”', instead:'“Before we treat anything, can you read me her observations?”', why:'Treating the dipstick misses sepsis.' },
      { dont:'“She’s DNACPR, so let’s keep her comfortable at home.”', instead:'“Her ReSPECT form says hospital treatment for reversible causes — this is one.”', why:'Not for CPR is not the same as not for treatment.' },
      { dont:'“You should have called 999 yourself.”', instead:'“You did the right thing calling — here’s what happens now.”', why:'Supporting care staff improves future escalation.' }
    ],
    scTasks:[
      { dom:'dg', t:'Opens and explores the problem', d:'Confirms the caller’s identity and role; open question; establishes baseline versus today.', pts:1 },
      { dom:'dg', t:'Explores psychosocial context', d:'Care-home staffing, admissions pressure, son as next of kin.', pts:1 },
      { dom:'dg', t:'Identifies and follows cues', d:'“Didn’t know my name”, “the chart says 12”, “keep admissions down”.', pts:1 },
      { dom:'dg', t:'Discovers ICE', d:'Carer’s idea (UTI), concern (workload/blame), expectation (antibiotics).', pts:2 },
      { dom:'dg', t:'Uses examination and test results', d:'Asks for full observations and NEWS2; peripheries; urine output; interprets the dipstick correctly.', pts:1 },
      { dom:'dg', t:'Generates and tests hypotheses', d:'Delirium from sepsis — chest versus urine source; other causes (stroke, fall, retention, drugs).', pts:1 },
      { dom:'dg', t:'Rules in/out serious disease', d:'Recognises NEWS2 12 with new confusion and hypotension as possible sepsis; screens for rash and stroke.', pts:2 },
      { dom:'dg', t:'Reaches a working diagnosis', d:'Possible sepsis, likely lower respiratory tract infection, presenting as delirium.', pts:2 },
      { dom:'cm', t:'Offers a safe, patient-centred plan', d:'Checks the ReSPECT form; 999 now; what to send; actions while waiting.', pts:2 },
      { dom:'cm', t:'Manages comorbidity and contributors', d:'Dementia and best interests; penicillin allergy flagged in handover; stewardship.', pts:1 },
      { dom:'cm', t:'Provides follow-up and safety net', d:'Re-call 999 if worse; informs son; documents; follows up next day.', pts:1 }
    ]
  });
  /* ===== Q3. Older man — cues of financial abuse ===== */
  C.push({
    id:'elder-financial-abuse',
    title:'“I’m just tired, doctor — and the flat’s a bit cold these days”',
    type:'video', duration:12,
    meta:{ age:79, sex:'M',
      setting:'Video — follow-up booked by the practice nurse after weight loss was noted; the patient is on his own today.',
      system:'Safeguarding adults / Older adults — financial abuse: recognising cues, seeing the person alone, capacity, consent and the Care Act 2014',
      checked:CHECKED,
      blueprint:{ difficulty:3, lifeStage:'older adult', groups:['Older adults','Health disadvantage & vulnerabilities','Professional & ethical'], type:'video', thirdParty:false } },
    brief:'Mr Rajinder (Raj) Bhatti, 79, a widower who had a minor stroke in February 2025 (mild left-hand weakness, largely recovered), is seen by video after the practice nurse recorded a 5 kg weight loss over six months. His nephew Sunny has lived with him since the stroke and attended the nurse appointment, answering for him. Today Raj is alone. He says he is “just tired” and the flat is cold. With good questions he reveals that Sunny holds his bank card and PIN “to help”, that he has £10 a week for food, that the heating is kept off “to save money”, that Sunny “borrowed” £12,000 from his savings for a business, and that he has signed papers he did not read. He has capacity for these decisions (no cognitive concerns recorded; he follows and retains the conversation). Task: explore the cues sensitively, check he is alone and safe to talk, assess the health effects (weight loss, cold, missed medicines, mood — and rule out other causes of weight loss), recognise possible financial abuse and neglect, explain safeguarding under the Care Act 2014, assess capacity for the decision about a referral, seek his consent, and agree a plan. He fears getting his late sister’s son into trouble and shame in the family. Hidden agenda: Sunny shouted at him last week and grabbed his arm when he asked for his card back; Raj is frightened Sunny will “put me in a home” if he complains. A good candidate respects his autonomy, explains when information may be shared without consent (risk of serious harm, others at risk, a crime, coercion), and agrees at least: referral to adult social care with consent, contact with his bank, a safe way to contact him, health checks, and early follow-up.',
    script:{
      opening:'“Hello doctor. Yes, I can see you. The nurse said you wanted to talk about my weight. I’m just tired, really. Old age. And the flat’s a bit cold these days, that’s all.”',
      facts:[
        { topic:'Who is there', text:'If asked: “Sunny’s at work till six. It’s just me.” If asked to show the room on camera, he turns the tablet round: an empty living room, a coat on the chair. He is wearing a coat and hat indoors.' },
        { topic:'Weight and eating', text:'“I don’t eat much. Toast, tea, some soup.” If asked why: “There’s not much in. Sunny does the shopping.” If asked about money for food: “He gives me ten pounds a week. It’s enough for bread and milk.” Lost weight “since the summer”.' },
        { topic:'Symptoms (weight loss screen)', text:'If asked: no cough, no blood in the phlegm, no difficulty swallowing, no tummy pain, bowels normal, no blood in the stools, no night sweats, passing water normally. Not more thirsty. Feels cold and tired.' },
        { topic:'Heating and the flat', text:'“Sunny says the heating costs too much, so it goes on for an hour at night.” The flat is his own; he bought it with his late wife Kamaljit.' },
        { topic:'The money', text:'Only if asked who manages his money: “Sunny has my bank card since the stroke, to help with shopping. He knows my number.” If asked further: “He borrowed twelve thousand pounds for his business. He said he would pay it back. It was our savings, mine and Kamaljit’s.” He has signed “some papers from the bank — I didn’t read them, my eyes”.' },
        { topic:'Medicines', text:'If asked: “Sometimes the tablets run out and Sunny forgets to collect them.” Has missed his blood pressure and cholesterol tablets “for a week or two at a time”.' },
        { topic:'Mood and sleep', text:'If asked: “I feel useless. A burden.” Sleeps poorly because of the cold. If asked directly about thoughts of ending his life: “No. I have my gurdwara. Waheguru decides.”' },
        { topic:'Memory and understanding', text:'No memory problems: he knows the date, his medicines, his bank, and follows everything the doctor says. Used to be a bus driver for 30 years; reads Punjabi and English but small print is hard (needs new glasses).' },
        { topic:'Family and support', text:'Wife died 2022. Daughter Harpreet lives in Canada; they speak on WhatsApp on Sundays. “I don’t want to worry her.” Sunny is his late sister’s son, 38. Friends at the gurdwara “ask why I don’t come any more — I can’t pay for the taxi”.' },
        { topic:'Last week', text:'Only if asked whether Sunny has ever hurt him, frightened him or whether he feels safe: pause, then “Last week I asked for my card back. He shouted and grabbed my arm. Here.” (Shows a small yellow bruise on the forearm.) “He said if I make trouble he will tell the doctors I can’t cope and they’ll put me in a home.”' },
        { topic:'How to play it', text:'Dignified, polite, ashamed. Do not volunteer the money: minimise (“it’s fine, he helps me”). Open up gradually if the doctor is patient, non-judgemental and asks open questions about who helps with shopping and money. If the doctor says “this is abuse” bluntly or talks about the police straight away, become defensive: “He’s family. I don’t want him in trouble.” If the doctor explains what support could look like and that he stays in control, say: “If it is quiet… if it doesn’t shame the family… maybe.” Agree to a referral and bank contact if the doctor explains them clearly; ask that Sunny is not told it came from him.' }
      ],
      ice:{
        ideas:'“I’m old and tired. Maybe I need vitamins.”',
        concerns:'HIDDEN AGENDA — Sunny shouted at him and grabbed his arm when he asked for his bank card, and threatened that “they’ll put you in a home” if he makes trouble. He is frightened of losing his flat and independence and of shaming the family. He shares this only if asked kindly and directly whether he feels safe or whether anyone has hurt or frightened him.',
        expectations:'“Some tablets for tiredness.” Underneath: help to get control of his money back without his nephew being punished or the family finding out.'
      },
      cues:[
        'Wearing a coat and hat indoors; “the flat’s a bit cold these days” — heating restricted.',
        '“There’s not much in. Sunny does the shopping.” — dependence and possible neglect.',
        '“He said he would pay it back. It was our savings.” — a large transfer he regrets; possible financial abuse.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Checks he is alone and can talk privately on the video (asks him to show the room or confirms no one can overhear), and agrees what to do if someone comes in' },
      { dom:'dg', text:'Explores the weight loss and tiredness, including a screen for other causes (cancer red flags, diabetes, thyroid, mood), and arranges proportionate tests — while noticing the coat indoors, little food and restricted heating' },
      { dom:'dg', text:'Asks open, non-judgemental questions about who manages his shopping, money and medicines, and uncovers the bank card, £10 a week, the £12,000 and the unread papers' },
      { dom:'dg', text:'Asks directly but gently whether he feels safe and whether anyone has hurt, threatened or frightened him — and finds the arm-grab, bruise and threat' },
      { dom:'cm', text:'Recognises possible financial abuse, neglect and physical abuse of an adult with care and support needs, and explains safeguarding under the Care Act 2014 in plain terms' },
      { dom:'cm', text:'Assesses his capacity for the decision about a referral (understands, retains, weighs, communicates), respects his choice, and explains honestly when information may be shared without consent (serious risk, others at risk, a crime, coercion)' },
      { dom:'cm', text:'Agrees a concrete plan: safeguarding referral to adult social care with consent; contacting his bank (card, PIN, safeguarding team); restarting medicines via pharmacy delivery; bloods; safe contact arrangements; signposting (Age UK, police if he wishes); follow-up within a week; documents carefully' },
      { dom:'ro', text:'Responds to shame and family loyalty with dignity and respect, keeps him in control of decisions, and avoids blaming language about his nephew' }
    ],
    worked:[
      { lbl:'Privacy on video', txt:'“Before we start, is anyone else at home, or could anyone overhear? … Thank you. If someone comes in, just say ‘can we talk about my tablets’ and I’ll know.”' },
      { lbl:'Open door to money', txt:'“Since the stroke, who helps you with the shopping and with money? … How does that work day to day?”' },
      { lbl:'Notice and name gently', txt:'“I can see you’re wearing your coat indoors, and you’ve told me there’s not much food in and the heating’s only on for an hour. That worries me — it’s affecting your health.”' },
      { lbl:'Ask about safety', txt:'“Some people in your situation feel frightened or are treated roughly by someone close to them. Has anyone hurt you, threatened you or made you feel afraid?”' },
      { lbl:'Safeguarding, plainly', txt:'“What you’re describing — someone controlling your money so you can’t buy food or heat your flat, and grabbing you — is something the council’s adult safeguarding team can help with. It isn’t about punishing Sunny. It’s about you being safe and in charge of your own money. You stay part of every decision.”' },
      { lbl:'Honesty about confidentiality', txt:'“I won’t do anything behind your back. The only time I’d have to share this without your agreement is if I thought you or someone else were at serious risk, or a serious crime — and even then I’d tell you first if I could.”' }
    ],
    learning:'Financial abuse of older people often presents as a health problem — weight loss, cold, missed medicines, missed appointments — with a relative who answers for the patient. See the person alone (on video, check the room), ask open questions about who manages money and shopping, and ask directly about safety. Under the Care Act 2014 an adult with care and support needs who is experiencing, or at risk of, abuse or neglect and cannot protect himself because of those needs should be considered for a safeguarding enquiry. A person with capacity has the right to make decisions about his own life; seek consent for a referral, explain what will happen, and know the exceptions (risk to others, serious crime, coercion or undue influence, vital interests). Treat the health effects too, and follow up soon.',
    knowledge:{
      guideline:'Sources: Care Act 2014 (section 42 safeguarding enquiries) and Care and support statutory guidance (DHSC) · Mental Capacity Act 2005 and Code of Practice (2007) · GMC Confidentiality: good practice in handling patient information (2017) · GMC Good medical practice (2024) · NICE NG12 Suspected cancer: recognition and referral (2015, updated 2026) · Office of the Public Guardian guidance on reporting concerns about an attorney or deputy',
      summary:'Weight loss, cold and missed medicines with a relative controlling the money: see him alone, ask about safety, assess capacity and seek consent for a safeguarding referral.',
      points:[
        { h:'Recognise financial abuse', t:'Signs include unexplained loss of savings, someone else controlling bank cards or PINs, lack of food or heating despite adequate income, unpaid bills, new “loans” to relatives, signing documents not understood, and isolation from friends.' },
        { h:'Red flags', t:'Physical injury or threats, fear of the carer, being prevented from seeing professionals, coercion over legal documents, or risk to others in the household — these raise urgency and may justify sharing without consent.' },
        { h:'Investigate the weight loss too', t:'Do not assume all weight loss is from lack of food. Screen for cancer red flags (NICE NG12 includes unexplained weight loss), diabetes, thyroid disease and depression. Bloods: FBC, U&E, LFT, calcium, HbA1c, TSH, CRP, ferritin; consider other tests by symptoms.' },
        { h:'Care Act 2014, section 42', t:'The local authority must make enquiries where an adult has care and support needs, is experiencing or at risk of abuse or neglect (including financial abuse), and as a result of those needs cannot protect themselves. Making Safeguarding Personal: ask the person what outcome they want.' },
        { h:'Capacity and consent', t:'Presume capacity (MCA 2005). If he can understand, retain, weigh and communicate a decision about referral, his choice is respected. Share without consent if others are at risk, a serious crime is involved, there is coercion or undue influence, or to protect vital interests — and document the reasoning.' },
        { h:'Practical protection', t:'With consent: contact his bank (cancel and reissue the card, new PIN, bank safeguarding team), check whether any power of attorney exists (Office of the Public Guardian if an attorney is misusing it), pharmacy delivery and a medicines compliance check, benefits and heating support, Age UK. Police if theft or assault and he wishes to report — or if risk is serious.' },
        { h:'Safe follow-up', t:'Agree how to contact him safely (times when he is alone, a code phrase), book follow-up within a week, and document carefully in his own words without making the record visible to others with access.' },
        { h:'Safety-net', t:'If he is hurt or threatened, or feels unsafe at home — 999. If he is prevented from attending or contacting the surgery, the practice will follow up.' }
      ]
    },
    stem:{
      name:'Rajinder (Raj) Bhatti', age:'79 years · male',
      pmh:['Minor ischaemic stroke February 2025 — mild left-hand weakness, largely recovered','Hypertension','Hypercholesterolaemia','Widowed 2022; lives in his own flat','No memory concerns recorded'],
      meds:['Clopidogrel 75 mg once daily','Amlodipine 5 mg once daily','Atorvastatin 80 mg at night'],
      allergy:'No known drug allergies',
      recent:'Practice nurse annual review 3 weeks ago: weight 61 kg (66 kg six months ago), BP 162/94. Repeat prescriptions collected irregularly (gaps of 2–3 weeks). Attended with nephew (Sunny Gill) who “answered most questions”. Nurse note: “Patient quiet. Coat on throughout.”',
      reason:'Video follow-up with GP about weight loss and tiredness.'
    },
    model:[
      { phase:'Opening and privacy', clock:'0–1 min', who:'dr', text:'Hello Mr Bhatti, I’m Dr Lee. Thank you for joining. Before we start — is anyone else at home, or could anyone overhear us?', dom:'dg', why:'Checks privacy before a sensitive conversation' },
      { who:'pt', text:'No, Sunny’s at work till six. It’s just me.' },
      { who:'dr', text:'Thank you. The nurse mentioned you’ve lost some weight. How have you been feeling?', dom:'dg', why:'Open question' },
      { who:'pt', text:'Just tired, doctor. Old age. And the flat’s a bit cold these days.' },
      { phase:'Health and cues', clock:'1–4 min', who:'dr', text:'I notice you’re wearing your coat and hat indoors. Tell me about the cold, and about food — what have you been eating?', dom:'ro', why:'Responds to a visual cue without judgement' },
      { who:'pt', text:'Sunny says the heating costs too much — an hour at night. Toast, soup. There’s not much in.' },
      { who:'dr', text:'Have you had any cough, trouble swallowing, tummy pain, change in your bowels, blood anywhere, or sweats at night?', dom:'dg', why:'Screens for other causes of weight loss' },
      { who:'pt', text:'No, nothing like that.' },
      { phase:'Money and safety', clock:'4–7 min', who:'dr', text:'Since your stroke, who helps you with shopping and money? How does that work?', dom:'dg', why:'Open question about financial control' },
      { who:'pt', text:'Sunny has my card. He gives me ten pounds a week. He borrowed twelve thousand for his business… it was our savings. He’ll pay it back.' },
      { who:'dr', text:'Thank you for trusting me with that. Can I ask — has Sunny, or anyone, ever hurt you, threatened you or made you feel afraid?', dom:'dg', why:'Direct, gentle safety question' },
      { who:'pt', text:'Last week I asked for my card back. He shouted, grabbed my arm. Said if I make trouble the doctors will put me in a home.' },
      { who:'dr', text:'I’m really sorry that happened. Nobody is going to put you in a home for asking for your own money — you’re clearly able to make your own decisions. What would you like to happen?', dom:'ro', why:'Reassures, affirms capacity and asks for his desired outcome' },
      { who:'pt', text:'I want my card back. But he’s my sister’s son. I don’t want him in trouble, or the family to know.' },
      { phase:'Safeguarding and consent', clock:'7–10 min', who:'dr', text:'That makes sense. There’s a team at the council — adult safeguarding — whose job is to help people in exactly this situation get control back and stay safe. It’s not about punishing Sunny. With your permission I’d refer you to them, and they’d talk to you about what you want. Would that be all right?', dom:'cm', why:'Explains safeguarding and seeks consent' },
      { who:'pt', text:'If it is quiet. If they don’t say it came from me.' },
      { who:'dr', text:'I’ll ask them to be careful about that and to contact you when you’re alone. I also want to be honest: if I thought you were in serious danger, I might need to share information even if you didn’t want me to — and I’d tell you first if I could. Can I also help you call your bank today to stop the card and get a new PIN?', dom:'cm', why:'Honest about the limits of confidentiality; practical protection' },
      { who:'pt', text:'Yes. That would help.' },
      { phase:'Health plan and close', clock:'10–12 min', who:'dr', text:'For your health: I’ll ask the chemist to deliver your tablets so they don’t run out, and I’d like some blood tests this week. I’ll also ask about help with heating costs. When is a safe time for us to phone you?', dom:'cm', why:'Treats health effects and agrees safe contact' },
      { who:'pt', text:'Mornings, before ten. He sleeps.' },
      { who:'dr', text:'Then we’ll call mornings. If he hurts or threatens you again, or you feel unsafe, call 999. I’ll call you within a week. Can you tell me what we’ve agreed?', dom:'cm', why:'Safety-net, follow-up and teach-back' },
      { who:'pt', text:'Council safeguarding, the bank, tablets delivered, blood test, you ring in the morning.' },
      { who:'dr', text:'That’s right. You’ve been very brave today, Mr Bhatti.', dom:'ro', why:'Acknowledges the difficulty of disclosure' }
    ],
    kb:{
      social:[
        { h:'Shame and family loyalty', t:'Many older people do not report abuse by relatives because of love, dependence, fear of losing their home and community shame. Respect this; focus on the outcome he wants.' },
        { h:'Isolation', t:'Stopped attending the gurdwara because of money for taxis; reconnecting with his community and daughter is protective.' },
        { h:'Fuel and food poverty', t:'Cold homes worsen cardiovascular and respiratory health in older people; benefits checks and warm-home schemes help.' }
      ],
      legal:[
        { h:'Care Act 2014', t:'Section 42 duty for the local authority to make safeguarding enquiries. Six principles: empowerment, prevention, proportionality, protection, partnership, accountability.' },
        { h:'Mental Capacity Act 2005', t:'Capacity is decision-specific and presumed. An unwise decision is not proof of incapacity.' },
        { h:'Powers of attorney and theft', t:'If someone is acting under a lasting power of attorney and misusing it, the Office of the Public Guardian can investigate. Taking money without consent can be theft or fraud by abuse of position (Fraud Act 2006).' }
      ],
      professional:[
        { h:'Confidentiality', t:'GMC Confidentiality (2017): share without consent where necessary to protect others, prevent serious crime, or where the adult’s decision may be under coercion or undue influence; tell the patient where safe and document the reasons.' },
        { h:'Documentation', t:'Record exactly what he said, the bruise seen on video, capacity assessment, consent and actions — and consider record-access controls if the nephew has proxy access.' }
      ],
      community:[
        { h:'Support', t:'Age UK advice line, Hourglass (safer ageing) helpline, Action Fraud for financial crime, bank safeguarding teams, local warm-home and benefits services, gurdwara community support.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Injury, threats or fear of the carer','Large unexplained financial losses or documents signed under pressure','Being prevented from accessing care or professionals','Cancer red flags with weight loss (dysphagia, haemoptysis, bleeding, night sweats)'],
        psychosocial:['Nephew controls card and PIN; £10 a week for food; heating restricted','Isolation from community; daughter abroad','Shame and family loyalty; fear of a care home'],
        ice:['Idea: old age, tiredness, vitamins','Concern: nephew in trouble, family shame, being put in a home','Expectation: tablets for tiredness; underneath, control of his money back']
      },
      diagnosis:'Possible financial abuse with neglect and an episode of physical abuse in a 79-year-old with care and support needs after a stroke, with weight loss and missed medication; other causes of weight loss still to be excluded.',
      diagnosisLay:'“Some of what’s making you tired and thin is not having enough food or heat, because you don’t have control of your own money. That’s not right, and there is help to change it.”',
      management:{
        reflectIce:'“You don’t want Sunny punished, and you want your card back. Let’s aim for exactly that.”',
        psychosocial:'Seen alone; capacity assessed; safe contact times agreed; community reconnection.',
        sharedPlan:['Safeguarding referral to adult social care with consent; ask for discreet contact','Call the bank together: stop card, new PIN, safeguarding team','Pharmacy delivery and compliance check; restart medicines','Bloods this week for weight loss; review BP','Benefits and warm-home referral; Age UK'],
        safetyNet:['999 if hurt or threatened or feels unsafe','GP call within a week, mornings before ten']
      }
    },
    links:[
      { ic:'📋', t:'Safeguarding', s:'Case walkthrough · adults and children', href:'../cases/safeguarding.html' },
      { ic:'🗺️', t:'Weight loss', s:'Visual algorithm · unexplained weight loss', href:'algorithms/weight-loss.html' },
      { ic:'📝', t:'GP admin', s:'Forms, records and reports', href:'gp-admin.html' }
    ],
    pitfalls:{
      intro:'This station is failed by staying on the medical model (“bloods for tiredness”) and never asking about money or safety — or by over-riding a capable man’s wishes.',
      items:[
        { dom:'dg', fail:'Never checking that he is alone on the video.', why:'He cannot disclose if the nephew might overhear.', fix:'Ask who is there and, if needed, to show the room.' },
        { dom:'dg', fail:'Ordering bloods for tiredness and ending there.', why:'Misses the coat indoors, the food and heating, and the abuse.', fix:'Ask who manages his money and shopping.' },
        { dom:'cm', fail:'Calling the police or referring without discussing it with him.', why:'He has capacity and wants a say; acting over him without a legal basis damages trust.', fix:'Seek consent; explain exceptions honestly.' },
        { dom:'cm', fail:'Doing nothing because “he doesn’t want a fuss”.', why:'There is assault and ongoing financial harm; safeguarding duties apply.', fix:'Explore what support he would accept and agree concrete steps.' },
        { dom:'ro', fail:'Using blaming language about the nephew.', why:'Provokes family loyalty and shuts down the conversation.', fix:'Focus on his safety and control, not on punishing Sunny.' },
        { dom:'cm', fail:'No safe follow-up arrangement.', why:'Contact at the wrong time could alert the nephew and increase risk.', fix:'Agree safe times and a code phrase.' }
      ]
    },
    ceg:['Older adults','Health disadvantage & vulnerabilities','Professional & ethical dilemmas'],
    timeMap:[
      { t:'0–1', h:'Privacy', d:'Who is at home? Can anyone overhear? Code phrase.' },
      { t:'1–4', h:'Health and visual cues', d:'Weight loss and tiredness; coat indoors; food and heating; screen for other causes.' },
      { t:'4–7', h:'Money and safety', d:'Who manages shopping and money; the card, £10 a week, £12,000; direct safety question; bruise and threat.' },
      { t:'7–10', h:'Safeguarding and consent', d:'Care Act explained plainly; capacity; consent; limits of confidentiality; bank call.' },
      { t:'10–12', h:'Plan and follow-up', d:'Medicines, bloods, heating/benefits; safe contact time; 999; review within a week; teach-back.' }
    ],
    wordPics:{
      clearFail:'Treats as tiredness only; never asks about money or safety; or refers to police without his knowledge; no follow-up.',
      fail:'Picks up some cues but does not explore safety, does not explain safeguarding, or ignores his wishes; vague plan.',
      pass:'Checks privacy, uncovers the financial control, asks about safety, explains safeguarding, seeks consent for referral and arranges follow-up.',
      clearPass:'All of the above, plus: screens weight loss properly, assesses capacity explicitly, is honest about confidentiality limits, agrees practical steps (bank, pharmacy, heating), arranges safe contact and keeps his dignity and choices central.',
      exc:'All of the above, plus: screens weight loss properly, assesses capacity explicitly, is honest about confidentiality limits, agrees practical steps (bank, pharmacy, heating), arranges safe contact and keeps his dignity and choices central.'
    },
    avoid:[
      { dont:'“Your nephew is stealing from you — that’s abuse.”', instead:'“Someone controlling your money so you can’t buy food or heat your home isn’t right, and there is help.”', why:'Blaming language provokes loyalty and shame.' },
      { dont:'“I have to report this to the police.”', instead:'“With your permission I’d like to refer you to the council’s safeguarding team — you stay part of every decision.”', why:'He has capacity; consent and choice come first unless an exception applies.' },
      { dont:'“Let’s do some bloods for your tiredness.” (and stop there)', instead:'“I’ll check your bloods — and I’d also like to understand who helps you with shopping and money.”', why:'The medical model alone misses the abuse.' }
    ],
    scTasks:[
      { dom:'dg', t:'Opens and explores the problem', d:'Checks privacy on the video; open question about tiredness and weight.', pts:1 },
      { dom:'dg', t:'Explores psychosocial context', d:'Lives alone with nephew; finances, food, heating, community, daughter abroad.', pts:1 },
      { dom:'dg', t:'Identifies and follows cues', d:'Coat indoors; “not much in”; “he’ll pay it back”.', pts:1 },
      { dom:'dg', t:'Discovers ICE', d:'Idea (old age), concern (family trouble, care home), expectation (tablets; control of his money).', pts:2 },
      { dom:'dg', t:'Plans appropriate examination and tests', d:'Bloods for weight loss; views bruise on video; weight and BP follow-up.', pts:1 },
      { dom:'dg', t:'Generates and tests hypotheses', d:'Under-nutrition from financial control versus cancer, diabetes, thyroid, depression.', pts:1 },
      { dom:'dg', t:'Rules in/out serious harm', d:'Asks directly about safety; finds the assault and threat; screens cancer red flags.', pts:2 },
      { dom:'dg', t:'Reaches a working diagnosis', d:'Possible financial abuse, neglect and physical abuse of an adult with care and support needs.', pts:2 },
      { dom:'cm', t:'Offers a safe, patient-centred plan', d:'Capacity assessed; consent for safeguarding referral; bank contact; honest confidentiality limits.', pts:2 },
      { dom:'cm', t:'Manages comorbidity and contributors', d:'Restarts medicines with pharmacy delivery; heating and benefits; reconnects support.', pts:1 },
      { dom:'cm', t:'Provides follow-up and safety net', d:'Safe contact times; 999 if threatened; review within a week; documentation.', pts:1 }
    ]
  });
  /* ===== Q4. Health and welfare LPA — best interests ===== */
  C.push({
    id:'lpa-best-interests',
    title:'“I’ve got power of attorney for Mum — so can I say no to the hospital test?”',
    type:'telephone', duration:12,
    meta:{ age:83, sex:'F',
      setting:'Telephone — daughter who holds a health and welfare lasting power of attorney calls about her mother’s blood results.',
      system:'Ethics / Mental Capacity Act — what a health and welfare LPA allows, decision-specific capacity, best interests and a suspected-cancer referral in advanced dementia',
      checked:CHECKED,
      blueprint:{ difficulty:3, lifeStage:'older adult', groups:['Older adults','Professional & ethical','Investigations & results','Long-term conditions & cancer'], type:'telephone', thirdParty:true } },
    brief:'Siobhan O’Connor, 52, phones about her mother Bridget, 83, who has moderate to severe Alzheimer’s disease and lives at home with twice-daily carers and Siobhan visiting daily. Bloods and a FIT (taken for tiredness and pallor noticed by the community nurse) show iron-deficiency anaemia (Hb 92, MCV 74, ferritin 6) and FIT 85 µg Hb/g. The GP letter recommended a suspected cancer pathway referral. Siobhan holds a registered health and welfare LPA (the GP record has a copy; it includes authority over life-sustaining treatment). She says Mum “always said no hospitals, no fuss”, becomes very distressed in hospital, and asks whether she can refuse the referral. Her brother Declan, in Spain, says she is “giving up on Mum”. Task: confirm identity and the LPA, explain what the LPA allows (only decisions Bridget lacks capacity to make herself, judged decision by decision; attorney must act in her best interests; cannot insist on treatment doctors do not offer), explain the results honestly, explore Bridget’s past wishes and current state, discuss the options (referral for specialist discussion with tests adapted to her — or not investigating, with iron treatment and symptom-led care), plan a capacity assessment for this decision, involve Declan and the care team in a best-interests discussion, and agree iron now. Hidden agenda: Siobhan is exhausted, feels guilty, and has been wondering about a care home — and fears Declan will say she is choosing what is easier for her. Disagreement that cannot be resolved can go to the Court of Protection.',
    script:{
      opening:'“Hello, it’s Siobhan O’Connor, Bridget O’Connor’s daughter. I got the letter about Mum’s bloods — it says you want to refer her urgently to the hospital for her bowel. I’ve got power of attorney for her health. Mum would hate that. Can I just say no?”',
      facts:[
        { topic:'Identity and the LPA', text:'If asked: gives Mum’s date of birth (14 March 1943) and address. “It’s a health and welfare one. Registered in 2021. I’m the only attorney. I think there was a box about life-sustaining treatment — I ticked that I could decide.” Has the access code from the Office of the Public Guardian “somewhere in my emails” if asked.' },
        { topic:'Mum now', text:'“She knows me most days but not always. She can’t follow a conversation for long. She doesn’t know what year it is.” Needs help with washing, dressing and meals; walks round the house; eats well “when I sit with her”. Sleeps a lot.' },
        { topic:'Symptoms', text:'If asked: “She’s paler and more tired. No pain that I can tell.” Bowels: “Her pads are sometimes a bit darker. I haven’t seen red blood.” Not losing weight “that I’ve noticed”. No vomiting. No breathlessness or falls.' },
        { topic:'Mum’s past wishes', text:'If asked what Mum was like and what she valued: “A school cook for thirty years. Very Catholic. When Dad was dying in hospital in 2015 she said, ‘Don’t ever let them do that to me — tubes and cameras. Let me die at home with my rosary.’ She said it more than once.” No written advance decision.' },
        { topic:'Hospital experiences', text:'“Last year she was in A&E with a urine infection for nine hours. She screamed, pulled out her drip, didn’t eat. It took her weeks to settle.”' },
        { topic:'Declan', text:'Brother, 49, lives in Málaga, phones weekly. “He says if there’s cancer they should find it and fix it and I’m giving up on her. He hasn’t seen her since Christmas. He doesn’t see what it’s like.”' },
        { topic:'Practical support', text:'Carers twice a day (morning and evening). Siobhan works part-time as a medical receptionist at another practice and visits every day. If asked about herself: “I’m exhausted. I haven’t had a day off in a year.”' },
        { topic:'Hidden worry', text:'Only if asked how she is coping, or what else is on her mind: “If I’m honest, I’ve been looking at care homes. And I feel terrible. Declan will say I’m saying no to the test because it’s easier for me.” Quietly tearful.' },
        { topic:'How to play it', text:'Articulate, organised, defensive at first. Start with “Can I just say no?” If the doctor simply says “yes, you’re the attorney, it’s your call” — accept, but sound uneasy. If the doctor says “you can’t refuse, we must refer” — become angry: “Then what’s the point of the LPA?” If the doctor explains the LPA properly, talks about what Mum would have wanted, and offers a joint discussion including Declan, soften and engage. Reveal exhaustion and care-home thoughts only if asked about yourself.' }
      ],
      ice:{
        ideas:'“The LPA means I decide, and Mum wouldn’t want hospital tests.”',
        concerns:'HIDDEN AGENDA — she is exhausted, has been looking at care homes, feels guilty, and fears her brother will accuse her of choosing what is easier for her rather than what Mum would want. She says this only if asked how she is coping.',
        expectations:'To be told she can refuse the referral; underneath, help to make a decision she can defend to her brother and live with.'
      },
      cues:[
        '“Can I just say no?” — wants confirmation of her authority; needs it explained accurately.',
        '“Let me die at home with my rosary” — clear past wishes and religious values, central to best interests.',
        '“He doesn’t see what it’s like” — family conflict and carer strain.'
      ],
      data:{ kind:'Blood results and FIT (taken 8 days ago)', values:[
        ['Haemoglobin','92 g/L','115–165'],
        ['MCV','74 fL','80–100'],
        ['Ferritin','6 µg/L','15–300'],
        ['Platelets','412 × 10⁹/L','150–400'],
        ['White cell count','6.8 × 10⁹/L','4.0–11.0'],
        ['eGFR','58 mL/min/1.73m²','>60'],
        ['CRP','4 mg/L','<5'],
        ['Coeliac serology (tTG IgA)','Negative',''],
        ['FIT (faecal immunochemical test)','85 µg Hb/g faeces','10 or more = suspected cancer pathway referral']
      ] }
    },
    checkpoints:[
      { dom:'dg', text:'Confirms the caller’s identity and checks the LPA: health and welfare (not property and finance), registered, sole attorney, scope including life-sustaining treatment, any conditions — using the copy on file or the Office of the Public Guardian access code' },
      { dom:'dg', text:'Explains the results honestly and in plain language (iron-deficiency anaemia with blood in the stool test — a possible bowel cancer that needs to be considered), and asks about symptoms (bleeding, weight loss, pain, breathlessness, falls)' },
      { dom:'dg', text:'Explores Bridget’s current function and her past wishes, beliefs and values (no hospitals, “die at home with my rosary”, Catholic faith, previous distress in hospital)' },
      { dom:'cm', text:'Explains accurately what the LPA allows: it applies only to decisions Bridget lacks capacity to make, assessed for this decision; the attorney must decide in her best interests (not their own preference); can consent to or refuse treatment offered; cannot demand treatment clinicians do not think appropriate' },
      { dom:'cm', text:'Sets out realistic options without bias — referral to discuss with the specialist team (tests adapted to her, possibly less invasive), or not investigating with iron treatment and symptom-led care — with benefits and burdens of each' },
      { dom:'cm', text:'Plans a capacity assessment for this decision, a best-interests discussion including Declan and the carers, starts oral iron now, documents, and explains that unresolved disagreement can go to the Court of Protection' },
      { dom:'ro', text:'Acknowledges the weight of the decision and the family conflict, asks how Siobhan is coping, and responds to her exhaustion and guilt (carer’s assessment, respite, care-home discussion without judgement)' },
      { dom:'ro', text:'Avoids both “you decide” and “you can’t refuse” — supports a shared, well-reasoned decision and agrees clear next steps and a follow-up date' }
    ],
    worked:[
      { lbl:'Identity and the LPA', txt:'“Before I discuss your mum, can I check a few details? … Thank you. We have a copy of your health and welfare LPA on her record — registered in 2021, and you’re the only attorney. That helps.”' },
      { lbl:'The results', txt:'“Your mum’s blood count is low because she’s short of iron, and the stool test found blood. At her age, one of the possible causes is a bowel cancer — which is why the letter suggested a referral. It doesn’t mean it is cancer, but it’s a possibility we have to take seriously.”' },
      { lbl:'What the LPA does', txt:'“Your LPA lets you make health decisions for your mum when she can’t make that particular decision herself. You make it in her best interests — what she would have wanted and what’s best for her now, not what any of us would choose for ourselves. You can say yes or no to things we offer, but you can’t ask for something the doctors don’t think would help.”' },
      { lbl:'Her voice', txt:'“Tell me about your mum before the dementia — what mattered to her?” … “So she was clear: no tubes and cameras, home, her faith. That counts for a lot.”' },
      { lbl:'Options, not a verdict', txt:'“There are two reasonable paths. One is a referral just to talk with the specialist team — they might suggest a gentler test, or agree not to investigate. The other is not to investigate, treat the anaemia with iron, and look after her at home if symptoms come. Neither is giving up.”' },
      { lbl:'Bring Declan in', txt:'“The law asks us to consult the people who care about her, including Declan, even though the decision is yours. How about a three-way call this week with me, you and Declan, and the carers’ views — so it’s a decision you can all understand?”' }
    ],
    learning:'A health and welfare LPA gives the attorney authority only when the donor lacks capacity for the specific decision, and only to decide in the donor’s best interests (MCA 2005 s4): her past and present wishes, beliefs and values, the views of people close to her, and the least restrictive option. The attorney can consent to or refuse treatment offered (refusing life-sustaining treatment only if the LPA expressly allows it) but cannot insist on treatment. A positive FIT with iron deficiency in advanced dementia is a genuine best-interests decision: present realistic options, assess capacity for this decision, consult family and carers, treat the anaemia, support the carer, document — and if agreement cannot be reached, the Court of Protection decides.',
    knowledge:{
      guideline:'Sources: Mental Capacity Act 2005 (sections 1–4, 9–11) and Code of Practice (2007) · Office of the Public Guardian: lasting power of attorney guidance and “Use a lasting power of attorney” service · NICE NG12 Suspected cancer: recognition and referral (2015, updated 2026) · NICE HTG690 (2023, formerly DG56) FIT to guide colorectal cancer pathway referral in primary care · NICE NG97 Dementia (2018) · GMC Decision making and consent (2020) · GMC Treatment and care towards the end of life (2010, updated 2022)',
      summary:'FIT 85 with iron deficiency in an 83-year-old with advanced dementia; the daughter is her health and welfare attorney. Explain what the LPA allows, assess capacity for this decision, and reach a best-interests decision together.',
      points:[
        { h:'Read the results', t:'Hb 92 with low MCV and ferritin 6 is iron-deficiency anaemia; FIT 85 µg Hb/g is well above the 10 threshold. NICE NG12 recommends a suspected cancer pathway referral for colorectal cancer with FIT 10 or more. Coeliac serology is negative.' },
        { h:'Red flags', t:'Overt rectal bleeding, a palpable mass, weight loss, obstruction symptoms (vomiting, distension, absolute constipation), breathlessness, chest pain or falls from anaemia — these change urgency and comfort needs.' },
        { h:'What an LPA allows', t:'A registered health and welfare LPA can be used only when the donor lacks capacity for the decision in question. The attorney stands in the donor’s shoes for that decision, must act in her best interests and follow the MCA principles. Refusal of life-sustaining treatment requires express authority in the LPA. Attorneys cannot demand treatment.' },
        { h:'Capacity — decision-specific', t:'Assess whether Bridget can understand, retain, use or weigh the information about the referral and communicate a choice, with support. Advanced dementia makes incapacity likely but it must still be assessed and recorded for this decision.' },
        { h:'Best interests (s4)', t:'Consider her past and present wishes and feelings, beliefs and values (Catholic faith, “no tubes and cameras”, distress in hospital), what she would have taken into account, and the views of family (Declan), carers and the attorney. Choose the least restrictive option.' },
        { h:'Options', t:'Referral to discuss with the specialist team (who may offer CT colonography or a clinic-only discussion); or no investigation with oral iron, symptom-led care and advance care planning. Oral iron (for example ferrous sulfate 200 mg once daily or on alternate days) is reasonable now in either path.' },
        { h:'Disputes', t:'If the attorney’s decision does not appear to be in the person’s best interests, or the family cannot agree, seek a second opinion, a best-interests meeting, advice from the Office of the Public Guardian, or an application to the Court of Protection.' },
        { h:'Safety-net', t:'Heavy bleeding, collapse, vomiting with a swollen tummy, or breathlessness — same-day contact or 999 in keeping with her wishes; a ReSPECT conversation is worth planning.' }
      ]
    },
    stem:{
      name:'Bridget O’Connor', age:'83 years · female',
      pmh:['Alzheimer’s disease — moderate to severe (diagnosed 2020)','Hypertension','Osteoarthritis','Lives at home; carers twice daily; daughter visits daily','Health and welfare LPA registered 2021 — daughter Siobhan sole attorney (copy scanned to record; includes life-sustaining treatment)'],
      meds:['Donepezil 10 mg at night','Amlodipine 5 mg once daily','Paracetamol 1 g up to four times daily when required'],
      allergy:'No known drug allergies',
      recent:'Community nurse 3 weeks ago: “pale, more tired”. Bloods and FIT 8 days ago: Hb 92 g/L (115–165), MCV 74 fL, ferritin 6 µg/L, platelets 412, CRP 4, eGFR 58, tTG negative. FIT 85 µg Hb/g (threshold 10). GP letter sent to the attorney recommending a suspected cancer pathway referral (lower GI) and inviting a discussion.',
      reason:'Telephone call from daughter (health and welfare attorney) about the results letter.'
    },
    model:[
      { phase:'Identity and agenda', clock:'0–1 min', who:'dr', text:'Hello, it’s Dr Lee. Before we talk about your mum, could you confirm her date of birth and address? … Thank you. I can see we have your health and welfare LPA on her record. What would you like to get out of our call?', dom:'dg', why:'Confirms identity, checks the LPA, sets the agenda' },
      { who:'pt', text:'The letter says urgent hospital referral for her bowel. Mum would hate it. I’ve got power of attorney — can I just say no?' },
      { phase:'Results and symptoms', clock:'1–4 min', who:'dr', text:'That’s an important question and I’ll answer it properly. First, can I explain what the tests showed? Her blood count is low because she’s short of iron, and the stool test found blood. At her age a bowel cancer is one possible cause — it doesn’t mean it is one.', dom:'dg', why:'Honest, plain explanation of the results' },
      { who:'pt', text:'I guessed that’s what it meant.' },
      { who:'dr', text:'Have you noticed any bleeding, weight loss, tummy pain, or her getting more breathless or falling?', dom:'dg', why:'Screens symptoms and red flags' },
      { who:'pt', text:'Pads a bit darker sometimes. No pain, no weight loss that I can see. Just pale and tired.' },
      { phase:'Her wishes and the law', clock:'4–7 min', who:'dr', text:'Tell me about your mum before the dementia — what mattered to her about her health?', dom:'dg', why:'Gathers past wishes, beliefs and values' },
      { who:'pt', text:'She said after Dad died in hospital: no tubes and cameras, let me die at home with my rosary. And last year in A&E she was terrified.' },
      { who:'dr', text:'That’s really important. So, about the LPA: it lets you decide when she can’t make that particular decision herself — and you decide in her best interests: what she would have wanted and what’s best for her now. You can say yes or no to what we offer, but not ask for something doctors don’t think would help. I’d also need to check her capacity for this decision — I can do that with you there.', dom:'cm', why:'Explains the LPA, best interests and capacity accurately' },
      { who:'pt', text:'So I can say no.' },
      { phase:'Options and family', clock:'7–10 min', who:'dr', text:'You could, if that’s in her best interests. There are two reasonable paths: a referral just to discuss with the specialist team — they may offer a gentler test or agree not to test — or not investigating, starting iron, and caring for her at home if symptoms come. The law also asks me to consult people close to her. How does Declan feel?', dom:'cm', why:'Balanced options and duty to consult' },
      { who:'pt', text:'He says I’m giving up on her. He doesn’t see what it’s like.' },
      { who:'dr', text:'That sounds hard. How are you doing yourself, with all of this?', dom:'ro', why:'Invites the hidden agenda' },
      { who:'pt', text:'Exhausted. I’ve been looking at care homes… and I feel terrible. He’ll say I’m choosing what’s easier for me.' },
      { who:'dr', text:'Thank you for telling me. Looking after yourself isn’t selfish, and looking at care homes isn’t giving up. Let’s keep the two decisions separate: the test decision is about your mum’s wishes; your exhaustion deserves its own help — a carer’s assessment and respite. Would a three-way call with you and Declan this week help, so he hears her wishes and the options too?', dom:'ro', why:'Responds to guilt and separates carer needs from best interests' },
      { phase:'Plan and close', clock:'10–12 min', who:'dr', text:'So: I’ll start iron tablets today, visit to assess her capacity for this decision with you there, and set up a call with Declan, including the carers’ views. We’ll record what we decide and why. If we really couldn’t agree, the Court of Protection can help — but I don’t think it will come to that. If she bleeds heavily, collapses or gets breathless, call us or 999. Does that plan feel right?', dom:'cm', why:'Concrete plan, documentation, dispute route and safety-net' },
      { who:'pt', text:'Yes. That feels fairer — to Mum and to me.' },
      { who:'dr', text:'I’ll also ask social care about a carer’s assessment. I’ll call you on Thursday to fix a time with Declan.', dom:'cm', why:'Follow-up with a date' }
    ],
    kb:{
      social:[
        { h:'Carer strain', t:'Daily caring for a parent with advanced dementia while working is exhausting; guilt about care homes is common. Offer a carer’s assessment (Care Act 2014), respite and Carers UK / Dementia UK Admiral Nurses.' },
        { h:'Distant relatives', t:'Family members who visit rarely may push for more intervention; a joint conversation centred on the person’s own wishes often resolves this.' }
      ],
      legal:[
        { h:'MCA 2005 principles', t:'Presume capacity; support decision-making; unwise decisions are not incapacity; act in best interests; least restrictive option.' },
        { h:'Attorney authority', t:'A registered health and welfare LPA operates only when the donor lacks capacity for the decision. Check registration, scope and any instructions; the OPG online service lets professionals view an LPA with an access code.' },
        { h:'Court of Protection', t:'Decides disputes about best interests or an attorney’s conduct; the OPG investigates concerns about attorneys.' }
      ],
      professional:[
        { h:'Confidentiality', t:'An attorney acting under a valid health and welfare LPA is entitled to relevant information to make decisions within their authority. Confirm identity on the telephone.' },
        { h:'Documentation', t:'Record the capacity assessment, the LPA check, the options discussed, who was consulted, the decision and the reasoning.' }
      ],
      community:[
        { h:'Support', t:'Dementia UK Admiral Nurse helpline, Alzheimer’s Society, Carers UK, local carers’ centre, parish support.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Overt rectal bleeding or a mass','Weight loss, obstruction symptoms','Breathlessness, chest pain, falls from anaemia'],
        psychosocial:['Advanced dementia at home with carers','Daughter exhausted, considering care homes','Brother abroad disagrees'],
        ice:['Idea: the LPA means she decides; Mum would not want tests','Concern: guilt, exhaustion, brother’s accusation','Expectation: permission to refuse; underneath, a defensible shared decision']
      },
      diagnosis:'Iron-deficiency anaemia with FIT 85 µg Hb/g in an 83-year-old with advanced Alzheimer’s disease — colorectal cancer must be considered; whether to investigate is a best-interests decision for her attorney after a capacity assessment.',
      diagnosisLay:'“Your mum is short of iron and there’s blood in the stool test. A bowel cancer is one possible cause. The question now is what she would want us to do about that.”',
      management:{
        reflectIce:'“You want to protect your mum from something she always said she didn’t want — that matters, and the law asks us to give it weight.”',
        psychosocial:'Separate the best-interests decision from carer exhaustion; offer a carer’s assessment and respite.',
        sharedPlan:['Start oral iron now','Capacity assessment for the referral decision (home or video, with Siobhan present)','Best-interests discussion with Siobhan, Declan and carers this week','Decide: referral to discuss with specialists versus no investigation with symptom-led care; document','Advance care planning / ReSPECT conversation'],
        safetyNet:['Heavy bleeding, collapse, breathlessness — urgent contact or 999 in keeping with her wishes','GP call on Thursday']
      }
    },
    links:[
      { ic:'🗺️', t:'Rectal bleeding', s:'Visual algorithm · FIT and referral', href:'algorithms/rectal-bleeding.html' },
      { ic:'💊', t:'Dementia', s:'Management protocol', href:'management/dementia.html' },
      { ic:'📋', t:'Dementia', s:'Case walkthrough', href:'../cases/dementia.html' },
      { ic:'🗺️', t:'Memory deficit', s:'Visual algorithm', href:'algorithms/memory-deficit.html' }
    ],
    pitfalls:{
      intro:'This station tests accurate knowledge of the MCA and LPAs under emotional pressure. It is failed by either handing the decision over with no best-interests process, or overruling the attorney.',
      items:[
        { dom:'cm', fail:'“You’re the attorney, so it’s entirely up to you.”', why:'Ignores the capacity assessment and the duty to decide in best interests and consult others.', fix:'Explain how an attorney decides and offer a structured discussion.' },
        { dom:'cm', fail:'“You can’t refuse — guidelines say we must refer.”', why:'Wrong in law; NG12 informs, it does not compel. A valid attorney can refuse treatment offered.', fix:'Present referral as an option weighed in best interests.' },
        { dom:'dg', fail:'Not checking the type, registration or scope of the LPA.', why:'A property and finance LPA gives no authority over health decisions.', fix:'Check the copy on file or the OPG access code.' },
        { dom:'dg', fail:'Not asking what Bridget would have wanted.', why:'Past wishes and values are central to best interests.', fix:'“Tell me about your mum before the dementia.”' },
        { dom:'ro', fail:'Missing the carer’s exhaustion and guilt.', why:'Unspoken carer strain distorts the decision and the family dynamic.', fix:'Ask how she is coping; offer a carer’s assessment.' },
        { dom:'cm', fail:'Forgetting to treat the anaemia.', why:'Iron is low-burden and helps whatever is decided about investigation.', fix:'Start oral iron now.' }
      ]
    },
    ceg:['Older adults','Professional & ethical dilemmas','Investigations & results','Long-term conditions & cancer'],
    timeMap:[
      { t:'0–1', h:'Identity and LPA', d:'Confirm identity; check the health and welfare LPA on record; agenda.' },
      { t:'1–4', h:'Results and symptoms', d:'Plain explanation of IDA and FIT 85; possible bowel cancer; red flags.' },
      { t:'4–7', h:'Her wishes and the law', d:'Past wishes and values; what the LPA allows; capacity for this decision.' },
      { t:'7–10', h:'Options and family', d:'Referral to discuss versus no investigation; consult Declan; carer exhaustion and care homes.' },
      { t:'10–12', h:'Plan and follow-up', d:'Iron now; capacity visit; best-interests call; document; Court of Protection if unresolved; safety-net; date.' }
    ],
    wordPics:{
      clearFail:'Tells her she cannot refuse, or that it is simply her call; no explanation of the results; no capacity or best-interests process; misses the carer strain.',
      fail:'Explains the results but gives an inaccurate account of the LPA, does not explore Bridget’s wishes, or leaves no concrete plan.',
      pass:'Checks the LPA, explains the results and what the attorney can do, explores past wishes, offers options and plans a capacity assessment and best-interests discussion.',
      clearPass:'All of the above, plus: balances the options without bias, involves the brother constructively, starts iron, separates carer exhaustion from the decision and offers support, documents and names the Court of Protection route calmly.',
      exc:'All of the above, plus: balances the options without bias, involves the brother constructively, starts iron, separates carer exhaustion from the decision and offers support, documents and names the Court of Protection route calmly.'
    },
    avoid:[
      { dont:'“It’s your decision as attorney — just let us know.”', instead:'“You make the decision in her best interests — let’s work through what she would have wanted together.”', why:'Attorneys need a best-interests process, not a blank cheque.' },
      { dont:'“The guidelines say she must be referred.”', instead:'“The guidelines say we should offer a referral. Whether it’s right for her is the decision we need to make.”', why:'Guidelines inform; they do not override best interests.' },
      { dont:'“Don’t feel guilty about the care home.”', instead:'“Looking after yourself isn’t selfish. Let’s get you some help with that too.”', why:'Validates without dismissing her feelings.' }
    ],
    scTasks:[
      { dom:'dg', t:'Opens and explores the problem', d:'Confirms identity; checks LPA type, registration and scope; agenda.', pts:1 },
      { dom:'dg', t:'Explores psychosocial context', d:'Care at home, carers, Siobhan’s work and caring, Declan abroad.', pts:1 },
      { dom:'dg', t:'Identifies and follows cues', d:'“Can I just say no?”, “die at home with my rosary”, “he doesn’t see what it’s like”.', pts:1 },
      { dom:'dg', t:'Discovers ICE', d:'Idea (LPA means she decides), concern (guilt, exhaustion), expectation (permission to refuse).', pts:2 },
      { dom:'dg', t:'Interprets the results', d:'IDA (Hb 92, MCV 74, ferritin 6), FIT 85 above threshold, negative coeliac serology.', pts:1 },
      { dom:'dg', t:'Generates and tests hypotheses', d:'Colorectal cancer versus other GI blood loss; current symptoms and red flags.', pts:1 },
      { dom:'dg', t:'Explores the person’s wishes and capacity', d:'Past wishes, faith and hospital distress; plans a decision-specific capacity assessment.', pts:2 },
      { dom:'dg', t:'Reaches a working summary', d:'Possible colorectal cancer; investigation is a best-interests decision for the attorney.', pts:2 },
      { dom:'cm', t:'Offers a safe, patient-centred plan', d:'Explains LPA scope; balanced options; best-interests discussion with Declan and carers; documents.', pts:2 },
      { dom:'cm', t:'Manages comorbidity and contributors', d:'Starts oral iron; carer’s assessment and respite; advance care planning.', pts:1 },
      { dom:'cm', t:'Provides follow-up and safety net', d:'Call on Thursday; bleeding/collapse/breathlessness triggers; Court of Protection if unresolved.', pts:1 }
    ]
  });
  /* ===== Q5. Three-way telephone interpreter — new diabetes results ===== */
  C.push({
    id:'telephone-interpreter',
    title:'“My son read me the letter — it says my sugar is high. Is it serious?”',
    type:'telephone', duration:12,
    meta:{ age:46, sex:'M',
      setting:'Telephone — three-way call with a professional Tigrinya interpreter booked by the practice.',
      system:'Diabetes / Communication — new type 2 diabetes results explained through a telephone interpreter: excluding DKA, first-line treatment and checking understanding',
      checked:CHECKED,
      blueprint:{ difficulty:2, lifeStage:'adult', groups:['Ethnicity, culture & diversity','Investigations & results','Long-term conditions & cancer','Prescribing'], type:'telephone', thirdParty:false } },
    brief:'Mr Tesfay Gebremedhin, 46, from Eritrea, speaks Tigrinya and limited English. He works night shifts in a warehouse. Bloods after a health check show HbA1c 88 mmol/mol with a random glucose of 16.2, raised cholesterol (LDL 4.0) and an urine albumin:creatinine ratio of 4.2. He has thirst, nocturia, tiredness and 3 kg weight loss over two months. The practice has booked a professional Tigrinya interpreter on a three-way telephone call (interpreter Selam, ID 4471). Task: set up the interpreted call well (brief the interpreter, confirm the patient is happy with the interpreter and is somewhere private, speak directly to the patient in short chunks, avoid jargon, check understanding by teach-back), screen for DKA and type 1 features (no vomiting, abdominal pain or breathlessness; BMI 29.5; age 46 — type 2 most likely, but check ketones), explain the diagnosis, and start treatment in line with NICE NG28 (2026 update: modified-release metformin plus an SGLT2 inhibitor first-line unless contraindicated), with sick-day and ketone advice, plus a plan for cholesterol, kidney checks, eye screening, education and follow-up. Cultural points: Eritrean Orthodox fasting periods (relevant to SGLT2 inhibitors and DKA risk), night shifts. Hidden agenda: his older brother had diabetes in Eritrea, had a leg amputated and died; Tesfay believes diabetes means injections and losing his legs, and fears his employer will find out and dismiss him. He also mentions that his 12-year-old son read him the results letter — an opportunity to arrange translated or spoken information and avoid using children as interpreters.',
    script:{
      opening:'(Through the interpreter, after a short delay.) “Hello doctor. Thank you. My son read me the letter — it says my sugar is high. Is it serious? I am worried.”',
      facts:[
        { topic:'About the interpreter', text:'If the doctor asks whether he is happy with the interpreter: “Yes, it is fine. She is not from my town.” He is at home alone, his wife is at work; it is private. He can read Tigrinya well, “a little English”.' },
        { topic:'Symptoms', text:'If asked: “I drink water all the time. At work I go to the toilet many times. At night also.” Tired for “two, three months”. Trousers are loose — lost “about three kilos” without trying. Blurred vision sometimes at the end of a shift.' },
        { topic:'DKA and red flags', text:'If asked: no vomiting, no tummy pain, no fast or deep breathing, not drowsy or confused. Eating normally. No fever. No foot wounds. No chest pain.' },
        { topic:'Past history and medicines', text:'“Nothing. I am never sick.” No regular medicines, no herbal remedies. No allergies.' },
        { topic:'Family', text:'Father had “sugar” and high blood pressure. Older brother — see hidden worry.' },
        { topic:'Work and driving', text:'Forklift operator in a warehouse, night shifts (10 pm to 6 am), four nights a week. Drives a car to work. If asked: worried that the employer will find out.' },
        { topic:'Food, faith and fasting', text:'Eats injera, lentils, tea with sugar (“three spoons”), soft drinks at work “to stay awake”. Eritrean Orthodox: if asked about fasting — “We fast many days in the year, no meat or milk, and before Easter, nothing to eat until the afternoon.” Easter fasting is in spring.' },
        { topic:'Lifestyle', text:'Does not smoke. Drinks no alcohol. Walks about 20 minutes a day; on his feet at work.' },
        { topic:'The letter', text:'If asked how he learned of the results: “The letter was in English. My son is twelve, he read it to me. He was frightened.”' },
        { topic:'Hidden worry', text:'Only if asked what worries him most or what he knows about diabetes: “My brother had sugar in Asmara. They cut his leg. Then he died. I do not want injections. And if my work knows, maybe they say I cannot drive the forklift.”' },
        { topic:'How to play it (and the interpreter)', text:'Tesfay is polite, quiet and anxious; he will say “yes, yes” even when he has not understood — so if asked to explain the plan back, get one thing wrong (for example: “I take the tablets only when I feel thirsty”) unless the doctor has explained very clearly in small steps. The interpreter (played by a second role-player or in a different voice) interprets everything in the first person and, if the doctor speaks for more than two or three sentences without pausing, says: “Doctor, could you say that in shorter parts, please?” If the doctor talks to the interpreter about the patient (“ask him if…”), the interpreter politely redirects: “Please speak to Mr Gebremedhin directly; I will interpret.”' }
      ],
      ice:{
        ideas:'“Too much sugar in the blood. Maybe from the soft drinks.”',
        concerns:'HIDDEN AGENDA — his brother in Eritrea had diabetes, had a leg amputated and died; he believes diabetes means injections, amputation and death. He also fears losing his job if his employer finds out. He says this only if asked what worries him or what he knows about diabetes.',
        expectations:'To know if it is serious and whether he needs injections; to keep working.'
      },
      cues:[
        '“Is it serious? I am worried.” — fear that needs exploring, not quick reassurance.',
        '“My son read me the letter” — results reached him through a child in English; arrange accessible information.',
        '“I do not want injections” (if diabetes is mentioned) — door to his brother’s story.'
      ],
      data:{ kind:'Blood and urine results (health check, 6 days ago)', values:[
        ['HbA1c','88 mmol/mol','Below 42 normal; 42–47 high risk; 48 or more diabetes'],
        ['Random plasma glucose','16.2 mmol/L','11.1 or more with symptoms supports diabetes'],
        ['eGFR','>90 mL/min/1.73m²','>60'],
        ['Urine albumin:creatinine ratio','4.2 mg/mmol','Below 3 normal; repeat to confirm'],
        ['Total cholesterol','6.1 mmol/L',''],
        ['LDL cholesterol','4.0 mmol/L',''],
        ['HDL cholesterol','0.9 mmol/L','Above 1.0'],
        ['Triglycerides','2.8 mmol/L','Below 2.3 (non-fasting)'],
        ['ALT','32 U/L','<40'],
        ['TSH','1.8 mU/L','0.3–4.2'],
        ['Healthcare assistant (6 days ago)','BP 142/88; BMI 29.5 kg/m²; waist 102 cm','BMI 27.5 or more = obesity threshold for people of Black African family origin']
      ] }
    },
    checkpoints:[
      { dom:'ro', text:'Sets up the three-way call: introduces self, briefs the interpreter (confidential, interpret everything in the first person), checks the patient is happy with this interpreter and is somewhere private, and records the interpreter’s ID' },
      { dom:'ro', text:'Speaks directly to the patient (“you”, not “ask him”), uses short chunks and plain words, pauses for interpretation, and checks understanding with teach-back rather than “do you understand?”' },
      { dom:'dg', text:'Takes a focused history: osmotic symptoms, weight loss, blurred vision; screens for DKA and type 1 features (vomiting, abdominal pain, breathing, drowsiness, rapid weight loss) and infection; past and family history; work, driving, diet and fasting' },
      { dom:'dg', text:'Interprets the results correctly: type 2 diabetes (HbA1c 88 with symptoms and glucose 16.2), raised LDL, a single raised ACR needing confirmation, normal eGFR, and BMI above the ethnicity-adjusted threshold — and arranges a capillary ketone check' },
      { dom:'cm', text:'Explains the diagnosis and starts treatment in line with NICE NG28: modified-release metformin titrated plus an SGLT2 inhibitor (unless contraindicated), with ketone/sick-day advice, genital hygiene, and caution during religious fasting' },
      { dom:'cm', text:'Plans the rest: structured education in an accessible format, eye screening, foot check, repeat ACR, QRISK3 and statin discussion, lifestyle (sugary drinks), work and driving (no DVLA notification for these tablets), and follow-up in 2–4 weeks with an interpreter booked' },
      { dom:'ro', text:'Finds and responds to his fear (brother’s amputation and death, injections, job) with specific, honest reassurance about prevention and treatment' },
      { dom:'cm', text:'Addresses communication barriers: information in Tigrinya where available or by phone with an interpreter, no children as interpreters, interpreter and longer appointments flagged on the record (Accessible Information Standard)' }
    ],
    worked:[
      { lbl:'Brief the interpreter', txt:'“Thank you, Selam. I’ll speak to Mr Gebremedhin directly. Please interpret everything both ways, in the first person, and tell me if I need to speak in shorter parts. Everything is confidential.”' },
      { lbl:'Check comfort', txt:'“Mr Gebremedhin, are you happy to talk with this interpreter today? And are you somewhere private?”' },
      { lbl:'Short chunks', txt:'“Your blood test shows diabetes. [pause] That means the sugar in your blood is too high. [pause] This is why you are thirsty and passing water a lot.”' },
      { lbl:'Find the fear', txt:'“Many people have a picture in their mind when they hear ‘diabetes’. What does diabetes mean to you?”' },
      { lbl:'Honest reassurance', txt:'“I’m so sorry about your brother. Today we have good tablets, and we check feet and eyes regularly, so problems like his are much less likely. You do not need injections now. We will start with two tablets.”' },
      { lbl:'Teach-back', txt:'“I want to check I explained this well. Can you tell me in your own words how you will take the tablets, and what you will do if you are sick and cannot eat?”' }
    ],
    learning:'With a professional interpreter on a three-way telephone call, the doctor’s job is to make the interpreting easy: brief the interpreter, check the patient is comfortable and private, speak directly to the patient in short chunks, avoid jargon and check understanding with teach-back — a polite “yes, yes” is not understanding. Clinically, HbA1c 88 with osmotic symptoms is type 2 diabetes in a 46-year-old with central obesity, but ketones and red flags still need checking. NICE NG28 (2026) now recommends modified-release metformin plus an SGLT2 inhibitor first-line for most adults, so sick-day rules, ketone awareness and caution during prolonged religious fasting matter. Find the fear behind “is it serious?” and give honest, specific reassurance; then fix the communication route so results never again reach him through his child.',
    knowledge:{
      guideline:'Sources: NICE NG28 Type 2 diabetes in adults: management (2015, updated February 2026) · NICE NG238 Cardiovascular disease: risk assessment and reduction, including lipid modification (2023) · NICE NG203 Chronic kidney disease (2021) · NHS England Guidance for commissioners: Interpreting and translation services in primary care (2018) · NHS England Accessible Information Standard DAPB1605 (revised 2025) · MHRA Drug Safety Updates on SGLT2 inhibitors and diabetic ketoacidosis · DVLA Assessing fitness to drive (current edition)',
      summary:'New type 2 diabetes (HbA1c 88, symptomatic) explained through a telephone interpreter: exclude DKA, start MR metformin plus an SGLT2 inhibitor with sick-day advice, and make the communication work.',
      points:[
        { h:'Diagnose', t:'HbA1c 48 mmol/mol or more confirms diabetes; with symptoms one result is enough. Type 2 is most likely here (age 46, central obesity, family history), but features such as rapid weight loss, ketones, younger age or lower BMI should prompt thinking about type 1 or LADA.' },
        { h:'Red flags — DKA', t:'Vomiting, abdominal pain, deep or fast breathing, drowsiness, or blood ketones 3.0 mmol/L or more need same-day hospital assessment. Arrange a capillary glucose and ketone check promptly (nurse appointment or local pathway).' },
        { h:'First-line treatment (NG28, 2026)', t:'Offer modified-release metformin (titrated, for example 500 mg increasing over weeks) plus an SGLT2 inhibitor unless contraindicated. Consider other options if the person is very symptomatic. Check eGFR before starting.' },
        { h:'SGLT2 inhibitor safety', t:'Explain sick-day rules (pause if vomiting, diarrhoea or unable to eat; restart when eating normally), symptoms of DKA even with near-normal glucose, genital thrush and hygiene, and the extra DKA risk with prolonged fasting or very low-carbohydrate diets — plan around Orthodox Lent fasting.' },
        { h:'Cardiovascular and kidney risk', t:'Calculate QRISK3 and discuss atorvastatin 20 mg if 10% or more (NICE NG238). Repeat the ACR; two of three 3 mg/mmol or more confirms albuminuria and changes management (ACE inhibitor or ARB). BP 142/88 needs repeating.' },
        { h:'Annual care processes', t:'Retinal screening referral, foot risk assessment, structured education (in his language or with interpreter support), weight, BP, lipids, kidney function and ACR. Diet: cut sugary drinks and added sugar.' },
        { h:'Working with interpreters', t:'Use professional interpreters, not family or children. Brief them, speak directly to the patient in short sentences, avoid jargon and idioms, allow extra time, check understanding by teach-back, record the interpreter’s ID, and flag the need on the record.' },
        { h:'Work and driving', t:'Metformin and SGLT2 inhibitors do not cause hypoglycaemia on their own; a car licence holder on these tablets alone does not need to notify the DVLA. Forklift work is covered by employer policy, not DVLA rules — diabetes on these tablets is not usually a barrier.' }
      ]
    },
    stem:{
      name:'Tesfay Gebremedhin', age:'46 years · male',
      pmh:['No significant past history','Registered 2023; preferred language Tigrinya — professional interpreter required (flagged)','Night-shift warehouse worker'],
      meds:['No regular medication'],
      allergy:'No known drug allergies',
      recent:'NHS Health Check with healthcare assistant 6 days ago: BP 142/88, BMI 29.5, waist 102 cm. Bloods: HbA1c 88 mmol/mol; random glucose 16.2 mmol/L; eGFR >90; ACR 4.2 mg/mmol; TC 6.1, LDL 4.0, HDL 0.9, TG 2.8 mmol/L; ALT 32; TSH 1.8. Results letter sent (English). Three-way interpreter call booked: Tigrinya interpreter Selam, ID 4471.',
      reason:'Telephone appointment with interpreter to discuss blood results.'
    },
    model:[
      { phase:'Setting up the call', clock:'0–1 min', who:'dr', text:'Hello, this is Dr Lee. Selam, thank you for joining. I’ll speak to Mr Gebremedhin directly; please interpret everything both ways in the first person, and tell me if I need shorter parts. Mr Gebremedhin, are you happy to talk with this interpreter, and are you somewhere private?', dom:'ro', why:'Briefs the interpreter and checks comfort and privacy' },
      { who:'pt', text:'Yes, it is fine. I am at home alone. My son read me the letter — it says my sugar is high. Is it serious? I am worried.' },
      { who:'dr', text:'I can hear you are worried. I will explain everything. First, can I ask some questions about how you feel?', dom:'ro', why:'Acknowledges emotion, signposts' },
      { phase:'History', clock:'1–4 min', who:'dr', text:'Are you more thirsty than usual? Are you passing water more, at night too?', dom:'dg', why:'Short, closed questions suited to interpretation' },
      { who:'pt', text:'Yes. I drink water all the time. Many times to the toilet. And I lost three kilos.' },
      { who:'dr', text:'Have you been sick, had tummy pain, or felt your breathing is fast or deep? Any sleepiness or confusion?', dom:'dg', why:'Screens for DKA' },
      { who:'pt', text:'No. None of that. I eat normally.' },
      { who:'dr', text:'Tell me about your work, what you eat and drink, and whether you fast for religious reasons.', dom:'dg', why:'Work, diet and fasting shape the plan' },
      { who:'pt', text:'Forklift, night shifts. Injera, lentils, tea with three sugars, soft drinks to stay awake. We are Orthodox — we fast many days, and before Easter nothing until the afternoon.' },
      { phase:'Explaining the results', clock:'4–7 min', who:'dr', text:'Your blood test shows diabetes. [pause] This means the sugar in your blood is too high. [pause] That is why you are thirsty and tired. What does diabetes mean to you?', dom:'dg', why:'Plain explanation in chunks; explores his understanding' },
      { who:'pt', text:'My brother had sugar. They cut his leg. Then he died. I do not want injections. And maybe my work will stop me driving the forklift.' },
      { who:'dr', text:'I’m very sorry about your brother. Today we can treat diabetes well and check your feet and eyes regularly, so problems like his are much less likely. You do not need injections. [pause] And these tablets do not stop you driving or working.', dom:'ro', why:'Responds to the hidden fear with honest, specific reassurance' },
      { phase:'Treatment plan', clock:'7–10 min', who:'dr', text:'I recommend two tablets. [pause] One is metformin — one tablet a day with food, increasing slowly. [pause] The second helps your kidneys remove sugar. [pause] It can cause thrush — wash daily. [pause] If you are sick and cannot eat, stop it and call us.', dom:'cm', why:'NG28 first-line dual therapy with safety advice' },
      { who:'pt', text:'Yes, yes.' },
      { who:'dr', text:'Before Easter, when you fast, please talk to us first — the second tablet may need a pause. I would also like the nurse to check your sugar and ketones with a finger-prick this week, and repeat your urine test.', dom:'cm', why:'Fasting and ketone safety; follow-up tests' },
      { phase:'Checking understanding and close', clock:'10–12 min', who:'dr', text:'I want to check I explained well. Can you tell me how you will take the tablets, and what you will do if you are sick?', dom:'ro', why:'Teach-back' },
      { who:'pt', text:'I take the tablets when I feel thirsty.' },
      { who:'dr', text:'Thank you — that helps me. Take them every day, even when you feel well. [pause] If you are sick and cannot eat, stop the second tablet and phone us. Can you tell me again?', dom:'ro', why:'Corrects a misunderstanding and re-checks' },
      { who:'pt', text:'Every day with food. If I am sick, stop the second one and phone.' },
      { who:'dr', text:'Perfect. We will send information in Tigrinya where we can, and always book an interpreter, so your son does not need to read letters. Nurse this week for the finger-prick; I will call with an interpreter in two weeks. If you vomit, have tummy pain or fast breathing — call 111 or 999.', dom:'cm', why:'Accessible information, follow-up and safety-net' }
    ],
    kb:{
      social:[
        { h:'Night shifts', t:'Plan medicine timing around his main meal; shift work affects glucose and diet.' },
        { h:'Faith and fasting', t:'Eritrean Orthodox fasting includes long periods without animal products and, before Easter, no food until the afternoon. Plan medicines (especially SGLT2 inhibitors) around fasting with the patient.' },
        { h:'Family health beliefs', t:'A relative’s amputation and death can shape fear and adherence; specific, honest reassurance about modern care helps.' }
      ],
      legal:[
        { h:'Equality Act 2010', t:'Providers must make reasonable adjustments; interpreting supports equal access.' },
        { h:'DVLA', t:'Group 1 car drivers on diet, metformin or SGLT2 inhibitors alone do not need to notify the DVLA. Notification rules differ for insulin and for Group 2 licences.' }
      ],
      professional:[
        { h:'Interpreters', t:'Use professional interpreters; avoid family and never children. Record the interpreter’s ID and language. Check the patient is comfortable with the individual (gender, community).' },
        { h:'Accessible Information Standard', t:'Identify, record, flag, share, meet and review communication needs (DAPB1605, revised 2025) — including booking interpreters and longer appointments automatically.' }
      ],
      community:[
        { h:'Support', t:'Diabetes UK resources in other languages, local structured education with interpreter support, community health champions, Eritrean community associations.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Vomiting, abdominal pain, fast or deep breathing, drowsiness — possible DKA','Very rapid weight loss or ketones — consider type 1','Foot ulcer or infection','Chest pain'],
        psychosocial:['Night shifts as a forklift operator; drives a car','Orthodox fasting periods','Results read by his 12-year-old son'],
        ice:['Idea: too much sugar, maybe soft drinks','Concern: brother’s amputation and death; injections; job','Expectation: is it serious, will he need injections, can he work']
      },
      diagnosis:'New type 2 diabetes (HbA1c 88 mmol/mol, symptomatic) with raised LDL, a single raised ACR to confirm, and BMI above the ethnicity-adjusted obesity threshold; no clinical features of DKA — ketones to check.',
      diagnosisLay:'“Your test shows diabetes — your blood sugar is too high. That is why you are thirsty and tired. It is common, and we can treat it well with tablets.”',
      management:{
        reflectIce:'“You’re worried diabetes means what happened to your brother. Let’s talk about how we stop that.”',
        psychosocial:'Interpreter for all contacts; information in Tigrinya; no children interpreting; plan around shifts and fasting.',
        sharedPlan:['MR metformin titrated plus an SGLT2 inhibitor (NG28 2026)','Sick-day rules, ketone symptoms, genital hygiene; plan for Easter fasting','Nurse this week: capillary glucose and ketones; repeat ACR; repeat BP','QRISK3 and statin discussion; eye screening; foot check; structured education','Cut sugary drinks; follow-up in 2 weeks with interpreter'],
        safetyNet:['Vomiting, abdominal pain, fast breathing or drowsiness — 111 or 999','Unable to eat — stop the SGLT2 inhibitor and call the practice']
      }
    },
    links:[
      { ic:'💊', t:'Type 2 diabetes', s:'Management protocol · NG28', href:'management/type-2-diabetes.html' },
      { ic:'📋', t:'Type 2 diabetes', s:'Case walkthrough', href:'../cases/type-2-diabetes.html' },
      { ic:'🗺️', t:'Sick-day rules', s:'Diabetes sick-day guidance', href:'algorithms/diabetes-sick-day-rules.html' },
      { ic:'🧭', t:'Consultation types', s:'Telephone, video and interpreters', href:'consultation-types.html' }
    ],
    pitfalls:{
      intro:'This station is failed on communication mechanics as often as on diabetes: talking to the interpreter instead of the patient, long jargon-filled explanations, and accepting “yes, yes” as understanding.',
      items:[
        { dom:'ro', fail:'“Can you ask him if he’s thirsty?”', why:'Talking about the patient in the third person excludes him and slows the call.', fix:'“Mr Gebremedhin, are you more thirsty than usual?”' },
        { dom:'ro', fail:'Long paragraphs full of medical terms.', why:'Interpreters may summarise, and meaning is lost.', fix:'Two or three short sentences, then pause.' },
        { dom:'ro', fail:'“Do you understand?”', why:'Polite agreement hides misunderstanding.', fix:'Teach-back: “Tell me how you’ll take the tablets.”' },
        { dom:'dg', fail:'Not screening for DKA or checking ketones.', why:'Symptomatic hyperglycaemia with weight loss can be ketotic.', fix:'Ask about vomiting, pain, breathing; arrange a ketone check.' },
        { dom:'cm', fail:'Starting an SGLT2 inhibitor without sick-day or fasting advice.', why:'Euglycaemic DKA risk, particularly with prolonged fasting.', fix:'Explain sick-day rules and plan around fasting.' },
        { dom:'cm', fail:'Ignoring how the results reached him.', why:'A child reading results is a safeguarding and confidentiality issue and will recur.', fix:'Flag interpreter need; accessible information; no children interpreting.' }
      ]
    },
    ceg:['Ethnicity, culture & diversity','Long-term conditions & cancer','Investigations & results'],
    timeMap:[
      { t:'0–1', h:'Set up the interpreted call', d:'Brief interpreter; consent to this interpreter; privacy; record ID.' },
      { t:'1–4', h:'Focused history', d:'Osmotic symptoms, weight loss, DKA screen; work, diet, faith and fasting.' },
      { t:'4–7', h:'Explain and explore', d:'Diagnosis in short chunks; what diabetes means to him — brother, injections, job.' },
      { t:'7–10', h:'Treatment plan', d:'MR metformin plus SGLT2 inhibitor; sick-day and fasting advice; ketone check; ACR; QRISK3; eyes and feet.' },
      { t:'10–12', h:'Teach-back and safety-net', d:'Correct misunderstandings; accessible information; interpreter booked for follow-up; DKA safety-net.' }
    ],
    wordPics:{
      clearFail:'Talks to the interpreter about the patient, uses jargon in long blocks, does not screen for DKA, and leaves with no checked understanding or safety-net.',
      fail:'Explains the diagnosis but misses the fasting/sick-day safety issues, does not check understanding, or ignores the patient’s fear.',
      pass:'Sets up the interpreter well, speaks directly in short chunks, screens for DKA, explains type 2 diabetes and starts NG28 first-line treatment with follow-up.',
      clearPass:'All of the above, plus: finds and addresses the brother’s story and job fear, plans around shifts and fasting, uses teach-back and corrects a misunderstanding, and fixes the communication route (no children interpreting, accessible information, interpreter flagged).',
      exc:'All of the above, plus: finds and addresses the brother’s story and job fear, plans around shifts and fasting, uses teach-back and corrects a misunderstanding, and fixes the communication route (no children interpreting, accessible information, interpreter flagged).'
    },
    avoid:[
      { dont:'“Ask him whether he’s been passing urine more.”', instead:'“Mr Gebremedhin, are you passing water more than usual?”', why:'Speak to the patient, not about him.' },
      { dont:'“Your HbA1c of 88 indicates suboptimal glycaemic control requiring pharmacotherapy.”', instead:'“Your sugar test is high. [pause] This is diabetes. [pause] Tablets will help.”', why:'Plain words in short chunks interpret well.' },
      { dont:'“Do you understand?”', instead:'“Can you tell me in your own words how you will take them?”', why:'Teach-back reveals misunderstanding.' }
    ],
    scTasks:[
      { dom:'dg', t:'Opens and explores the problem', d:'Sets up the interpreter, privacy and consent; open question about his worry.', pts:1 },
      { dom:'dg', t:'Explores psychosocial context', d:'Night shifts, forklift, driving, diet, Orthodox fasting, son reading the letter.', pts:1 },
      { dom:'dg', t:'Identifies and follows cues', d:'“Is it serious?”, “my son read me the letter”, “I do not want injections”.', pts:1 },
      { dom:'dg', t:'Discovers ICE', d:'Idea (soft drinks), concern (brother’s amputation, injections, job), expectation (is it serious).', pts:2 },
      { dom:'dg', t:'Interprets results and plans tests', d:'HbA1c 88, glucose 16.2, LDL 4.0, ACR 4.2, BMI threshold; arranges ketone check and repeat ACR/BP.', pts:1 },
      { dom:'dg', t:'Generates and tests hypotheses', d:'Type 2 versus type 1/LADA; considers infection and other causes of weight loss.', pts:1 },
      { dom:'dg', t:'Rules in/out serious disease', d:'Screens for DKA (vomiting, pain, breathing, drowsiness).', pts:2 },
      { dom:'dg', t:'Reaches a working diagnosis', d:'Symptomatic type 2 diabetes with cardiovascular risk factors.', pts:2 },
      { dom:'cm', t:'Offers a safe, patient-centred plan', d:'MR metformin plus SGLT2 inhibitor; sick-day, thrush and fasting advice; no injections now.', pts:2 },
      { dom:'cm', t:'Manages comorbidity and contributors', d:'QRISK3/statin, ACR, BP, eyes, feet, education, sugary drinks; accessible information.', pts:1 },
      { dom:'cm', t:'Provides follow-up and safety net', d:'Nurse ketone check this week; interpreter call in 2 weeks; DKA safety-net.', pts:1 }
    ]
  });
  /* ===== Q6. Deaf BSL user on video with a BSL interpreter ===== */
  C.push({
    id:'bsl-patient',
    title:'“I want to talk about my pill — and this time without my mum”',
    type:'video', duration:12,
    meta:{ age:27, sex:'F',
      setting:'Video — Deaf BSL user with a registered BSL interpreter joining the same video call.',
      system:'Reproductive health / Accessible communication — migraine with aura on the combined pill (UKMEC 4) via a BSL interpreter; Accessible Information Standard',
      checked:CHECKED,
      blueprint:{ difficulty:2, lifeStage:'adult', groups:['Ethnicity, culture & diversity','Gender, reproductive & sexual health','Health disadvantage & vulnerabilities','Prescribing'], type:'video', thirdParty:false } },
    brief:'Leah Thompson, 27, has been profoundly Deaf since birth; BSL is her first language and written English her second. She has taken a combined pill (levonorgestrel/ethinylestradiol) since 2022. Over two months she has had three episodes of zigzag lights spreading across her vision for about 20 minutes, then a one-sided throbbing headache with nausea — typical migraine with aura. A registered BSL interpreter (Aisha, NRCPD) has joined the video, booked after Leah emailed the practice. Previously her mother booked appointments by phone and “interpreted”, which meant Leah could not discuss contraception or her new relationship. Task: run an accessible video consultation (introductions, check Leah is happy with the interpreter, speak to Leah not the interpreter, one person at a time, good lighting, allow for time lag, check understanding), take the headache history including red flags adapted to a BSL user (weakness or numbness of a hand, difficulty signing or finding signs, aura over 60 minutes, thunderclap onset), explain that migraine with aura makes combined hormonal contraception unsafe (UKMEC 4 — stroke risk), stop it today and agree an alternative (progestogen-only pill started immediately, implant or IUS/IUD), plan acute migraine treatment, and fix her access needs under the Accessible Information Standard (record, flag, share, meet, review: interpreter for every appointment, contact by text/email, BSL routes to 111 and 999). Hidden agenda: she has a new partner and wants confidential contraceptive care without her mother; she had a frightening hospital stay without an interpreter and does not trust health services.',
    script:{
      opening:'(Signed, voiced by the interpreter.) “Hi. Thank you for the interpreter — that’s the first time here. I want to talk about my pill. I’ve been getting zigzag lights and then bad headaches. And I want to sort this myself — not with my mum.”',
      facts:[
        { topic:'Communication', text:'If asked how she prefers to communicate: “BSL. English writing is my second language — long letters are hard.” Lip-reading “only a little, and not on video”. Prefers text or email from the surgery; cannot use the phone. If asked about the interpreter: happy with Aisha; she is in a private room.' },
        { topic:'The aura', text:'“Zigzag lights, shiny, start small in the middle and spread to the side. About twenty minutes. Then they go and the headache starts.” Three times in two months; first ever about eight weeks ago.' },
        { topic:'The headache', text:'Left or right side, throbbing, “like a heartbeat”, with nausea; wants a dark room; lasts most of the day; sleep helps. Paracetamol “doesn’t touch it”.' },
        { topic:'Red flags (only if asked)', text:'No weakness or numbness of an arm or hand. If asked about signing during the aura: “No, my signing is normal. My hands are fine.” Aura never more than an hour. Headache never sudden like being hit. No fever, rash, neck stiffness, head injury. No change in personality. Vision normal between attacks.' },
        { topic:'The pill and periods', text:'Takes it every day, 21 days then a 7-day break; no missed pills this pack. Period two weeks ago. “I can’t be pregnant — I take it properly.” Headaches not only in the pill break.' },
        { topic:'Health and family', text:'Otherwise well. BP fine at the pharmacy pill check two months ago. Non-smoker. Drinks “a bit at weekends”. Mum has migraines. No clots in the family.' },
        { topic:'Life', text:'Works as a teaching assistant at a school for Deaf children. Lives in a flat with a friend. New partner, Jordan, for four months — “I want proper contraception; I don’t want a baby yet.”' },
        { topic:'Past experience', text:'Only if asked about past healthcare experiences or why she wanted to come alone: “Mum always phoned and came in and signed for me. I couldn’t talk about sex or my boyfriend. Last year I was in hospital with appendicitis for three days with no interpreter. They wrote notes. I didn’t understand the operation. I was terrified.”' },
        { topic:'Preferences', text:'If options are explained clearly: interested in the implant (“my friend has one”) but wants something to start today. Does not want a coil “right now”.' },
        { topic:'How to play it', text:'Leah is bright, direct and wary. Sign at a normal pace; the interpreter voices with a short lag. If the doctor looks at or speaks to the interpreter (“Can you ask her…”), sign to the interpreter: “I’m here — talk to me.” If the doctor talks too fast or over the interpreter, look confused and sign “Sorry?”. If the doctor asks permission to involve her mother, refuse firmly. If the doctor explains clearly why the pill must stop and offers a same-day alternative, relax and engage. If the doctor asks what would make it easier to use the surgery, give clear answers: text/email, interpreter booked automatically, longer appointments, no phone calls.' }
      ],
      ice:{
        ideas:'“Maybe the pill is giving me the headaches.”',
        concerns:'HIDDEN AGENDA — she has a new partner and wants confidential contraceptive care without her mother; after a frightening hospital stay without an interpreter she does not trust health services and needs to feel this practice will communicate with her properly. She shares the hospital story and the mother issue fully only if asked about past experiences or why she wanted to come alone.',
        expectations:'Advice about the pill and something reliable to start today; to be able to contact the surgery without her mum or the phone.'
      },
      cues:[
        '“That’s the first time here” (with an interpreter) — barriers to access worth exploring.',
        '“Not with my mum” — confidentiality, autonomy and a new relationship.',
        '“I’m here — talk to me” (if the doctor addresses the interpreter) — direct communication matters.'
      ]
    },
    checkpoints:[
      { dom:'ro', text:'Sets up the BSL consultation well: introduces everyone, checks Leah is happy with this interpreter and is private, checks the picture and lighting, speaks directly to Leah, one person at a time, and allows for the interpreting lag' },
      { dom:'dg', text:'Takes a clear history of typical aura (visual, spreading, about 20 minutes, followed by headache) and migraine features, and asks about red flags adapted to a BSL user (hand weakness or numbness, difficulty signing, aura over 60 minutes, thunderclap onset, fever or neck stiffness)' },
      { dom:'dg', text:'Checks contraceptive history and pregnancy risk (pills taken correctly, last period), BP, smoking, family history of clots, and that the headaches are not only in the pill-free interval' },
      { dom:'cm', text:'Explains clearly that migraine with aura makes combined hormonal contraception unsafe because of stroke risk (UKMEC 4) and advises stopping it today' },
      { dom:'cm', text:'Agrees a safe alternative with Leah — progestogen-only pill started immediately (with advice on extra precautions if needed), and the implant or IUS/IUD as longer-term options — and an acute migraine plan (NSAID or aspirin, triptan at headache onset, antiemetic, headache diary, avoid medication overuse)' },
      { dom:'cm', text:'Applies the Accessible Information Standard: records BSL as her need, flags it, books interpreters automatically, agrees text/email contact (no phone calls), longer appointments, and explains BSL routes to 111 and 999' },
      { dom:'ro', text:'Respects confidentiality and autonomy (no involvement of her mother), explores her past experiences, and acknowledges the hospital stay without an interpreter' },
      { dom:'ro', text:'Checks understanding through the interpreter (asks Leah to explain the plan back), offers written information in plain English or BSL video resources, and safety-nets with accessible routes' }
    ],
    worked:[
      { lbl:'Set up', txt:'“Hello Leah, I’m Dr Lee. Hello Aisha, thank you. Leah, are you happy with Aisha interpreting today, and are you somewhere private? Can you see us both clearly? I’ll talk to you directly, and please stop me if I go too fast.”' },
      { lbl:'Red flags for a BSL user', txt:'“During the zigzags, have your hands or arms felt weak or numb? Has your signing ever been hard — finding signs or moving your hands?”' },
      { lbl:'Why the pill must stop', txt:'“The zigzags before your headaches are called migraine with aura. With that type of migraine, the combined pill raises the risk of a stroke. So it isn’t safe to continue — I’d like you to stop it today.”' },
      { lbl:'Same-day alternative', txt:'“You can start a progesterone-only pill straight away, the day after your last combined pill. Many people later choose the implant — it lasts three years and doesn’t need remembering. Which would suit you?”' },
      { lbl:'Fix the access', txt:'“From now on we’ll book a BSL interpreter automatically, contact you by text or email — never a phone call — and give you a double appointment. Your mum won’t be involved unless you ask.”' },
      { lbl:'Teach-back', txt:'“Can you tell me what you’ll do with your pill tonight, and what to do if a headache comes?”' }
    ],
    learning:'Accessible communication is part of clinical safety. With a BSL interpreter on video: check consent and privacy, speak to the patient (not the interpreter), take turns, allow for the lag, and check understanding by teach-back. Adapt red-flag questions — for a signer, “difficulty speaking” becomes “difficulty signing” and hand weakness matters. Migraine with aura is UKMEC 4 for combined hormonal contraception: stop it and offer a same-day progestogen-only method or LARC. Under the Accessible Information Standard the practice must identify, record, flag, share, meet and review communication needs — interpreters booked automatically, text or email contact, longer appointments — and never rely on family members to interpret.',
    knowledge:{
      guideline:'Sources: UK Medical Eligibility Criteria for Contraceptive Use (FSRH/CoSRH, 2016, amended September 2019) · FSRH/CoSRH Progestogen-only Pills guideline (2022) · NICE CG150 Headaches in over 12s: diagnosis and management (2012, updated 2021) · NHS England Accessible Information Standard DAPB1605 (revised 2025) · British Sign Language Act 2022 · Equality Act 2010 · National Registers of Communication Professionals working with Deaf and Deafblind People (NRCPD)',
      summary:'Typical migraine with aura on the combined pill: stop it today (UKMEC 4) and start a progestogen-only method, while making the practice accessible for a Deaf BSL user.',
      points:[
        { h:'Diagnose aura', t:'Typical aura is fully reversible visual, sensory or speech/language symptoms developing over at least 5 minutes, each lasting 5–60 minutes, followed by headache. Visual zigzags (fortification spectra) spreading outward are classic.' },
        { h:'Red flags', t:'Motor weakness, aura over 60 minutes, first aura after 50, aura without a typical pattern, thunderclap headache, fever and neck stiffness, new neurological signs, or headache waking from sleep with vomiting — urgent assessment. For BSL users ask about difficulty signing and hand weakness.' },
        { h:'UKMEC 4', t:'Migraine with aura at any age is UKMEC 4 for combined hormonal contraception (pill, patch, ring) because of ischaemic stroke risk. Progestogen-only methods (POP, implant, injection, IUS) and copper IUD are UKMEC 1–2.' },
        { h:'Switching today', t:'Stop the combined pill and start a progestogen-only pill (for example desogestrel 75 micrograms) the next day without a break. If the combined pill has been taken correctly in the previous 7 days no extra precautions are needed; otherwise condoms for 2 days. Offer the implant or IUS as long-acting options.' },
        { h:'Acute migraine treatment', t:'NICE CG150: aspirin 900 mg, ibuprofen or paracetamol, with a triptan (for example sumatriptan 50–100 mg) taken at the start of the headache, not during the aura; add an antiemetic if needed. Limit acute medicines to avoid medication-overuse headache; keep a diary. Consider prophylaxis if attacks are frequent.' },
        { h:'Accessible Information Standard', t:'Identify, record, flag, share, meet and review communication needs (DAPB1605, revised 2025). For BSL users: registered interpreters booked automatically, text/email or video relay contact, longer appointments, accessible written information.' },
        { h:'Working with BSL interpreters', t:'Use registered interpreters (NRCPD), never family. Speak to the patient; one speaker at a time; good lighting and framing on video; avoid writing notes as a substitute for interpreting; check understanding.' },
        { h:'Safety-net', t:'Weakness, numbness, difficulty signing, aura over an hour or a sudden severe headache — 999 (999 BSL video service available). Non-urgent advice through NHS 111 BSL.' }
      ]
    },
    stem:{
      name:'Leah Thompson', age:'27 years · female',
      pmh:['Profoundly Deaf since birth — BSL first language (alert flag: BSL interpreter required)','Appendicectomy 2025','Previous appointments booked by mother'],
      meds:['Levonorgestrel 150 micrograms / ethinylestradiol 30 micrograms — 21/7 regimen (since 2022)'],
      allergy:'No known drug allergies',
      recent:'Community pharmacy pill check 2 months ago: BP 118/72, BMI 23, non-smoker. Email received from patient last week requesting an appointment “about my pill and headaches — with a BSL interpreter, not my mum”. Interpreter booked: Aisha (NRCPD registered), joining by video.',
      reason:'Video consultation with BSL interpreter: “pill and headaches”.'
    },
    model:[
      { phase:'Set up', clock:'0–1 min', who:'dr', text:'Hello Leah, I’m Dr Lee — and hello Aisha, thank you. Leah, are you happy with Aisha interpreting, and are you somewhere private? Can you see us both clearly? I’ll speak to you directly — tell me if I go too fast.', dom:'ro', why:'Accessible set-up: consent, privacy, picture, direct address' },
      { who:'pt', text:'Yes. Thank you for the interpreter — it’s the first time here. I want to talk about my pill. I get zigzag lights then bad headaches. And I want to sort this myself, not with my mum.' },
      { who:'dr', text:'Thank you for telling me — this is your appointment, and what you share stays confidential. Tell me about the zigzags.', dom:'ro', why:'Affirms confidentiality and autonomy early' },
      { phase:'History', clock:'1–4 min', who:'pt', text:'Shiny zigzags, start in the middle and spread. About twenty minutes, then they go and the headache starts — one side, throbbing, I feel sick.' },
      { who:'dr', text:'During the zigzags, have your hands or arms felt weak or numb? Has your signing ever been difficult? Have the zigzags ever lasted more than an hour, or a headache come on suddenly like a blow?', dom:'dg', why:'Red flags adapted for a BSL user' },
      { who:'pt', text:'No. My hands are fine, my signing is normal. Never more than an hour. Never sudden.' },
      { who:'dr', text:'Are you taking the pill every day without missing any, and when was your last period? Any smoking, or clots in the family?', dom:'dg', why:'Pregnancy risk and other UKMEC factors' },
      { who:'pt', text:'Every day, no misses. Period two weeks ago. Don’t smoke. Mum has migraines. No clots.' },
      { phase:'Explanation and decision', clock:'4–7 min', who:'dr', text:'What you describe is migraine with aura. With this type of migraine, the combined pill increases the risk of a stroke. So it isn’t safe to continue — I’d like you to stop it today. What do you think?', dom:'cm', why:'Clear diagnosis and the UKMEC 4 decision' },
      { who:'pt', text:'Stop today? But I need contraception — I have a new partner. I don’t want a baby.' },
      { who:'dr', text:'Of course. You can start a progesterone-only pill tomorrow with no gap — because you’ve taken your pill properly, you’ll stay protected. Longer term, the implant or the hormone coil are very reliable. What would suit you?', dom:'cm', why:'Same-day safe alternative and LARC options' },
      { who:'pt', text:'Start the new pill now. Maybe the implant later — my friend has one.' },
      { phase:'Migraine treatment and access', clock:'7–10 min', who:'dr', text:'For the headaches: take ibuprofen or aspirin with an anti-sickness tablet early, and I’ll prescribe sumatriptan to take when the headache starts — not during the zigzags. Keep a diary. Can I ask — what has it been like getting healthcare in the past?', dom:'cm', why:'Acute plan, then explores past experiences' },
      { who:'pt', text:'Mum always phoned and signed for me — I couldn’t talk about sex. Last year in hospital three days with no interpreter. They wrote notes. I was terrified.' },
      { who:'dr', text:'I’m really sorry — that should never happen. Here, we’ll record that you need a BSL interpreter and book one every time, contact you by text or email only, give you double appointments, and your mum won’t be involved unless you want her. You can also use NHS 111 and 999 through BSL video services.', dom:'cm', why:'Accessible Information Standard in action' },
      { phase:'Teach-back and close', clock:'10–12 min', who:'dr', text:'Can you tell me what you’ll do with your pills tonight, and what you’ll do if a headache comes?', dom:'ro', why:'Teach-back through the interpreter' },
      { who:'pt', text:'Stop the old pill. Start the new one tomorrow, every day, same time. Headache — ibuprofen and the new tablet when the pain starts.' },
      { who:'dr', text:'Exactly. If you ever get weakness, numbness, trouble signing, zigzags over an hour or a sudden severe headache — call 999 using the BSL service. I’ll message you to book an implant appointment with an interpreter, and review the headaches in six weeks.', dom:'cm', why:'Accessible safety-net and follow-up' }
    ],
    kb:{
      social:[
        { h:'Deaf culture and identity', t:'Many Deaf people see themselves as a linguistic and cultural minority rather than disabled. BSL is a full language, not signed English; written English may be a second language.' },
        { h:'Family as interpreters', t:'Relying on relatives removes privacy, especially for sexual health, mental health and safeguarding, and risks errors.' }
      ],
      legal:[
        { h:'British Sign Language Act 2022', t:'Recognises BSL as a language of England, Wales and Scotland.' },
        { h:'Equality Act 2010', t:'Duty to make reasonable adjustments, including interpreters, without charging the patient.' },
        { h:'Confidentiality', t:'A competent adult’s health information is not shared with her parent without consent.' }
      ],
      professional:[
        { h:'Accessible Information Standard', t:'Mandatory for NHS and publicly funded adult social care: identify, record, flag, share, meet and review communication needs (DAPB1605, revised 2025).' },
        { h:'Interpreters', t:'Use NRCPD-registered BSL interpreters; record the interpreter’s name; brief them; allow extra time.' }
      ],
      community:[
        { h:'Support', t:'SignHealth (BSL health information), RNID, NHS 111 BSL service, 999 BSL video relay, The Migraine Trust, Brook and local sexual health services.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Hand or arm weakness or numbness; difficulty signing or finding signs','Aura over 60 minutes or atypical aura','Thunderclap headache, fever or neck stiffness','Pregnancy possibility'],
        psychosocial:['Mother previously interpreted — no privacy','New partner; wants reliable contraception','Hospital stay without an interpreter; mistrust'],
        ice:['Idea: the pill may be causing the headaches','Concern: privacy from her mother; being understood','Expectation: a safe pill alternative today; accessible contact']
      },
      diagnosis:'Migraine with typical visual aura in a woman using combined oral contraception — UKMEC 4: the combined pill must stop.',
      diagnosisLay:'“These are migraines with aura. With this type, the combined pill increases stroke risk, so we’ll switch to a safer method today.”',
      management:{
        reflectIce:'“You wanted to sort this yourself, without your mum — and you can.”',
        psychosocial:'Confidential care; acknowledge past experiences; fix access under the AIS.',
        sharedPlan:['Stop combined pill today; start desogestrel tomorrow without a gap','Implant appointment with interpreter','Acute migraine plan: NSAID/aspirin, sumatriptan at headache onset, antiemetic; diary','Record BSL need and flag; interpreter booked automatically; text/email contact; double appointments','Plain-English summary and BSL resources'],
        safetyNet:['Weakness, numbness, trouble signing, aura over an hour or thunderclap headache — 999 via BSL service','Review in 6 weeks with interpreter']
      }
    },
    links:[
      { ic:'🧭', t:'Consultation types', s:'Video, telephone and interpreters', href:'consultation-types.html' },
      { ic:'📋', t:'Hearing loss', s:'Case walkthrough', href:'../cases/hearing-loss.html' },
      { ic:'💊', t:'Prescribing guide', s:'Contraception and interactions', href:'prescribing-guide.html' }
    ],
    pitfalls:{
      intro:'This station is failed when the communication is about the interpreter rather than the patient, or when the doctor continues the combined pill.',
      items:[
        { dom:'ro', fail:'Talking to the interpreter: “Can you ask her if…”', why:'Excludes the patient; she notices and disengages.', fix:'Look at and speak to Leah.' },
        { dom:'dg', fail:'Standard red-flag questions only (“slurred speech?”).', why:'Misses signing difficulty and hand weakness — the BSL equivalents.', fix:'Ask about signing and hand function during aura.' },
        { dom:'cm', fail:'Continuing the combined pill, or switching to another combined method.', why:'Migraine with aura is UKMEC 4 for all combined hormonal contraception.', fix:'Stop today; start a progestogen-only method.' },
        { dom:'cm', fail:'Stopping the pill with no same-day alternative.', why:'Leaves her at risk of pregnancy.', fix:'POP from tomorrow; LARC options.' },
        { dom:'cm', fail:'Ignoring the access problem.', why:'Without AIS actions she will be back to phone calls and her mother.', fix:'Record, flag, book interpreters, text/email contact.' },
        { dom:'ro', fail:'Suggesting her mother could help next time.', why:'Breaches her stated wishes and confidentiality.', fix:'Confirm her mother is not involved unless she asks.' }
      ]
    },
    ceg:['Ethnicity, culture & diversity','Gender, reproductive & sexual health','Health disadvantage & vulnerabilities'],
    timeMap:[
      { t:'0–1', h:'Accessible set-up', d:'Introductions, consent to interpreter, privacy, picture and lighting, direct address.' },
      { t:'1–4', h:'Headache and pill history', d:'Aura features; BSL-adapted red flags; pill use, period, BP, smoking, clots.' },
      { t:'4–7', h:'Explain and decide', d:'Migraine with aura; UKMEC 4; stop combined pill today; POP tomorrow; LARC options.' },
      { t:'7–10', h:'Treatment and access', d:'Acute migraine plan; past experiences; AIS actions; no mother involvement.' },
      { t:'10–12', h:'Teach-back and safety-net', d:'Leah explains the plan; 999 BSL and 111 BSL; implant booking; review.' }
    ],
    wordPics:{
      clearFail:'Talks to the interpreter, continues the combined pill, or stops it with no alternative; no red-flag screen; ignores confidentiality.',
      fail:'Recognises migraine with aura but gives an unclear contraceptive plan, misses BSL-adapted red flags or the access problem.',
      pass:'Sets up the interpreted video well, diagnoses migraine with aura, stops the combined pill and starts a progestogen-only method, gives a migraine plan and safety-net.',
      clearPass:'All of the above, plus: adapts red flags to signing, explores her past experiences and wish for privacy, implements the Accessible Information Standard concretely, uses teach-back, and offers LARC with an interpreter booked.',
      exc:'All of the above, plus: adapts red flags to signing, explores her past experiences and wish for privacy, implements the Accessible Information Standard concretely, uses teach-back, and offers LARC with an interpreter booked.'
    },
    avoid:[
      { dont:'“Aisha, can you ask her how long the lights last?”', instead:'“Leah, how long do the lights last?”', why:'Speak to the patient; the interpreter is not a go-between.' },
      { dont:'“Did you have any slurred speech?”', instead:'“Was your signing ever difficult, or your hands weak?”', why:'Adapts the stroke red flag to a BSL user.' },
      { dont:'“Maybe your mum could come next time to help.”', instead:'“We’ll book an interpreter every time — your mum won’t be involved unless you ask.”', why:'Respects confidentiality and the AIS.' }
    ],
    scTasks:[
      { dom:'dg', t:'Opens and explores the problem', d:'Accessible set-up; open question; lets Leah tell her story.', pts:1 },
      { dom:'dg', t:'Explores psychosocial context', d:'Mother as former interpreter, new partner, work, hospital experience.', pts:1 },
      { dom:'dg', t:'Identifies and follows cues', d:'“First time here”, “not with my mum”, “talk to me”.', pts:1 },
      { dom:'dg', t:'Discovers ICE', d:'Idea (pill causing headaches), concern (privacy, being understood), expectation (safe alternative, accessible contact).', pts:2 },
      { dom:'dg', t:'Plans appropriate examination and tests', d:'Uses pharmacy BP and BMI; pregnancy risk assessed; no tests needed for typical aura.', pts:1 },
      { dom:'dg', t:'Generates and tests hypotheses', d:'Migraine with typical aura versus TIA/stroke, secondary headache.', pts:1 },
      { dom:'dg', t:'Rules in/out serious disease', d:'BSL-adapted red flags: hand weakness, signing difficulty, prolonged aura, thunderclap.', pts:2 },
      { dom:'dg', t:'Reaches a working diagnosis', d:'Migraine with aura on combined pill — UKMEC 4.', pts:2 },
      { dom:'cm', t:'Offers a safe, patient-centred plan', d:'Stop COC today; POP tomorrow; LARC options; acute migraine plan.', pts:2 },
      { dom:'cm', t:'Manages comorbidity and contributors', d:'AIS: record, flag, interpreters, text/email, longer appointments; confidentiality.', pts:1 },
      { dom:'cm', t:'Provides follow-up and safety net', d:'999 BSL and 111 BSL; implant booking; review in 6 weeks.', pts:1 }
    ]
  });
  /* ===== Q7. Breaking bad news — CT result reached the GP first ===== */
  C.push({
    id:'breaking-cancer-diagnosis',
    title:'“The hospital hasn’t rung me — have my scan results come through to you?”',
    type:'video', duration:12,
    meta:{ age:68, sex:'M',
      setting:'Video — patient booked himself in to ask about his CT scan; the hospital letter has reached the GP before anyone has spoken to him.',
      system:'Cancer / Communication — breaking bad news (SPIKES): CT highly suspicious of lung cancer after a suspected cancer pathway referral; next steps and support',
      checked:CHECKED,
      blueprint:{ difficulty:3, lifeStage:'older adult', groups:['Long-term conditions & cancer','Investigations & results','Professional & ethical'], type:'video', thirdParty:false } },
    brief:'Mr Bogdan Nowak, 68, a retired builder (ex-smoker, 40 pack-years, stopped 2019), was referred on the suspected lung cancer pathway three weeks ago after a chest X-ray for a persistent cough and weight loss showed a right hilar mass. He had a CT chest and abdomen last week. The respiratory consultant’s letter reached the practice this morning: 4.6 cm spiculated right upper lobe mass with ipsilateral hilar and mediastinal lymphadenopathy and two small indeterminate liver lesions — “highly suspicious of primary lung cancer”; discussed at lung MDT; PET-CT and EBUS biopsy requested; clinic appointment in 6 days; “patient not yet informed of CT findings”. He has booked a video call: “The hospital hasn’t rung — have my results come?” Task: prepare (check he is somewhere private and whether he wants someone with him), find out what he knows and wants to know, give a warning shot, share the information honestly in plain language without over-stating certainty (not yet confirmed; stage and treatment depend on further tests), respond to emotion, explain next steps and support (clinic date, PET-CT, biopsy, lung cancer nurse specialist as key worker, Macmillan), safety-net (haemoptysis, breathlessness, SVCO features, chest pain, confusion or thirst from high calcium), and follow up. He asks “Is it cancer? Just tell me straight.” Hidden agenda: his daughter Kasia is getting married in Kraków in 12 weeks and he wants to know whether he will be able to fly and walk her down the aisle; he has not told his wife how worried he is. A good candidate liaises with the lung team that he has been told.',
    script:{
      opening:'“Hello doctor. Thanks for seeing me. I had the scan last Tuesday and nobody has rung me. My wife says no news is good news, but… have the results come through to you?”',
      facts:[
        { topic:'Where he is', text:'If asked: at home in the kitchen, on his own — wife Ewa is at work at the bakery until 3. “It’s private, yes.” If asked whether he would like someone with him: “No — just tell me. I’ll tell Ewa myself.”' },
        { topic:'What he knows', text:'If asked what he understood about the X-ray and the scan: “The other doctor said there was a shadow and they wanted to rule out anything nasty. ‘Urgent pathway’ — I looked it up. I know what that means.”' },
        { topic:'What he wants to know', text:'If asked how much detail he wants: “Everything. I’m a builder — I like to know what I’m dealing with. Just tell me straight.”' },
        { topic:'Symptoms now', text:'If asked: cough for about four months, “a bit worse”; brought up “a streak of blood” once, two weeks ago, none since. Breathless on hills, not at rest. No chest pain. Lost about 6 kg since the spring. Appetite poor. No headaches, no swelling of the face or neck, no hoarse voice. Not confused, not unusually thirsty. Bones “a bit achy, like always”.' },
        { topic:'Background', text:'Smoked 20 a day for 40 years, stopped 2019. Worked with asbestos “in the eighties, everyone did”. Takes amlodipine for blood pressure. Drinks a few beers at the weekend.' },
        { topic:'Family', text:'Married to Ewa for 42 years. Two children: son Tomasz in Manchester, daughter Kasia in Kraków. Moved to the UK in 2006.' },
        { topic:'Reaction to the news', text:'After the news is shared: long silence, looks away, then: “So it is cancer.” If the doctor waits: “I knew. I think I knew.” Asks: “How long have I got?” — accept an honest answer that it is too early to know and depends on tests.' },
        { topic:'Hidden worry', text:'Only if asked what is most on his mind or what matters most in the coming months: “Kasia is getting married in Kraków. Twelve weeks. I have to walk her down the aisle. Will I be able to fly? Will I be there?” Then: “Ewa — I haven’t told her how scared I am.”' },
        { topic:'How to play it', text:'Steady, practical, a little gruff; hides fear behind questions. If the doctor stalls (“we need to wait for the hospital”) after you have asked directly, become frustrated: “You have the letter — please, just tell me.” If the news is delivered bluntly without warning, go quiet and stop engaging. If it is delivered with a warning shot and silence afterwards, take a breath and then ask your questions. If the doctor asks about what matters to you, raise the wedding. If the doctor gives a clear plan with the clinic date and a named nurse, say “Right. At least I know the next step.”' }
      ],
      ice:{
        ideas:'“It’s cancer. I looked up the urgent pathway.”',
        concerns:'HIDDEN AGENDA — his daughter’s wedding in Kraków in 12 weeks: will he be well enough to fly and walk her down the aisle? He also has not told his wife how frightened he is. He shares this only if asked what matters most to him or what is on his mind.',
        expectations:'An honest answer today; to know what happens next and how long he has.'
      },
      cues:[
        '“My wife says no news is good news, but…” — he suspects bad news.',
        '“Urgent pathway — I looked it up. I know what that means.” — invitation to be straight with him.',
        '“How long have I got?” — needs an honest answer that it depends on further tests, then the door to what matters to him.'
      ],
      data:{ kind:'Respiratory clinic letter (received this morning)', values:[
        ['Referral','Suspected lung cancer pathway (NICE NG12), 3 weeks ago — chest X-ray: right hilar mass',''],
        ['CT chest/abdomen (last Tuesday)','4.6 cm spiculated right upper lobe mass',''],
        ['Lymph nodes','Enlarged right hilar and subcarinal (mediastinal) nodes, largest 1.8 cm',''],
        ['Liver','Two indeterminate 8 mm lesions — further assessment on PET-CT',''],
        ['Other','No pleural effusion; no bone lesions on CT; adrenals normal',''],
        ['Impression','Highly suspicious of primary lung cancer; stage to be determined',''],
        ['MDT plan','PET-CT and EBUS-guided biopsy requested; lung clinic in 6 days; lung CNS to contact',''],
        ['Note','“Patient not yet informed of CT findings — will be discussed at clinic.”',''],
        ['Recent bloods (2 weeks ago)','Hb 128 g/L; adjusted calcium 2.41 mmol/L; eGFR 72; ALP 98 U/L','Ca 2.20–2.60']
      ] }
    },
    checkpoints:[
      { dom:'ro', text:'Prepares the setting: confirms identity, that he is somewhere private, whether he wants anyone with him, and that he has time — before sharing results' },
      { dom:'dg', text:'Finds out what he already knows and understands (shadow, urgent pathway) and how much he wants to know' },
      { dom:'dg', text:'Asks about current symptoms and red flags (haemoptysis, breathlessness, chest pain, facial or neck swelling, hoarseness, confusion or thirst, bone pain, weight loss)' },
      { dom:'cm', text:'Gives a warning shot, then shares the CT findings honestly in plain language — a growth in the right lung that looks very likely to be a cancer, with some nearby glands enlarged — while being clear it is not yet confirmed and that stage and treatment depend on further tests' },
      { dom:'ro', text:'Allows silence, acknowledges and names emotion, and responds to “How long have I got?” honestly without guessing a prognosis' },
      { dom:'cm', text:'Explains next steps clearly: clinic in 6 days, PET-CT and biopsy, a lung cancer nurse specialist as key worker, treatments that may be offered; offers written information and Macmillan support' },
      { dom:'ro', text:'Explores what matters most (daughter’s wedding, telling his wife) and responds realistically — the team can consider timing, and the GP will flag it to the lung team' },
      { dom:'cm', text:'Safety-nets clearly, arranges follow-up (call in a few days or after clinic), offers to talk with his wife, and informs the lung team/CNS that he has been told; documents' }
    ],
    worked:[
      { lbl:'Set up', txt:'“Before we talk about the results, are you somewhere private, and would you like anyone with you? … Have you got some time now?”' },
      { lbl:'Perception', txt:'“What did you understand about why the X-ray doctor referred you so quickly?”' },
      { lbl:'Warning shot', txt:'“I do have the scan report. I’m afraid it isn’t the news we were hoping for.” (Pause.)' },
      { lbl:'Knowledge — plain and honest', txt:'“The scan shows a growth in the top of your right lung, about four and a half centimetres, and some glands nearby are enlarged. The specialists think this is very likely to be a lung cancer. It isn’t confirmed until they take a sample, and they need more scans to see whether it has spread.”' },
      { lbl:'Emotion, then the question', txt:'“That’s a lot to take in.” (Silence.) … “You asked how long. The honest answer is I don’t know yet — it depends on what the next tests show and what treatment suits you. The specialists will be able to say much more after the PET scan and biopsy.”' },
      { lbl:'What matters', txt:'“What’s most on your mind for the coming months?” … “Kasia’s wedding matters hugely — I’ll write to the lung team today so they know, and they can plan treatment and travel advice around it where it’s safe.”' }
    ],
    learning:'When a result reaches the GP first and the patient asks directly, it is usually right to tell him — withholding information he wants and has a right to is not justified by an outpatient appointment next week (GMC Decision making and consent, 2020). Use a structure such as SPIKES: set up (privacy, support, time), perception, invitation, knowledge (warning shot, plain language, honest about uncertainty), emotions (silence, naming, empathy) and strategy/summary (next steps, key worker, support, safety-net, follow-up). Avoid guessing prognosis; find what matters (here, a wedding) and pass it on. Tell the lung team he has been informed, so the clinic builds on, rather than repeats, the conversation.',
    knowledge:{
      guideline:'Sources: NICE NG12 Suspected cancer: recognition and referral (2015, updated 2026) · NICE NG122 Lung cancer: diagnosis and management (2019, updated 2024) · GMC Decision making and consent (2020) · Baile WF et al., SPIKES — a six-step protocol for delivering bad news (The Oncologist, 2000) · NHS England Faster Diagnosis Standard (28 days) · Macmillan Cancer Support and Roy Castle Lung Cancer Foundation patient information',
      summary:'A CT highly suspicious of lung cancer, letter received before the patient was told: tell him honestly using SPIKES, explain next steps, safety-net, and inform the lung team.',
      points:[
        { h:'Read the report', t:'A spiculated 4.6 cm mass with ipsilateral hilar and mediastinal nodes suggests at least stage III disease if confirmed; indeterminate liver lesions need PET-CT. Tissue diagnosis (EBUS biopsy) confirms type and guides treatment, including molecular testing.' },
        { h:'Red flags', t:'Superior vena cava obstruction (facial or neck swelling, distended neck veins, breathlessness) — same-day; massive haemoptysis — 999; stridor; spinal cord compression symptoms (back pain with leg weakness or sphincter change) — same-day MSCC pathway; hypercalcaemia (thirst, confusion, constipation) — urgent calcium.' },
        { h:'Should the GP tell him?', t:'A competent patient asking directly is entitled to honest information. Withholding is justified only if sharing would cause serious harm (not just upset). Tell him, be clear about uncertainty, and let the hospital know.' },
        { h:'SPIKES', t:'Setting, Perception, Invitation, Knowledge (warning shot, small chunks, no jargon), Emotions (silence, acknowledge), Strategy and Summary (next steps, support, follow-up).' },
        { h:'Next steps on the pathway', t:'Faster Diagnosis Standard: diagnosis or ruling out within 28 days of referral. PET-CT and EBUS biopsy, MDT review, then treatment options (surgery, radiotherapy, chemoradiotherapy, immunotherapy or targeted therapy depending on stage and markers). A lung cancer nurse specialist acts as key worker (NICE NG122).' },
        { h:'Prognosis questions', t:'Do not guess. Explain what determines prognosis (stage, type, fitness) and when better information will be available.' },
        { h:'Support', t:'Macmillan and Roy Castle Lung Cancer Foundation, written information, offer to speak with family, benefits advice (including the fast-track process if needed later), and asbestos exposure history noted for the team (possible industrial disease claims).' },
        { h:'Safety-net and follow-up', t:'Call in a few days and after clinic; document the conversation and what he understood; message the lung CNS or secretary that he has been informed.' }
      ]
    },
    stem:{
      name:'Bogdan Nowak', age:'68 years · male',
      pmh:['Hypertension','Ex-smoker — 40 pack-years, stopped 2019','Occupational asbestos exposure (builder, 1980s)','Suspected lung cancer pathway referral 3 weeks ago (cough 4 months, weight loss; CXR right hilar mass)'],
      meds:['Amlodipine 5 mg once daily'],
      allergy:'No known drug allergies',
      recent:'Letter from respiratory consultant received this morning: CT chest/abdomen — 4.6 cm spiculated right upper lobe mass, enlarged right hilar and subcarinal nodes (largest 1.8 cm), two indeterminate 8 mm liver lesions, no effusion, no bone lesions. “Highly suspicious of primary lung cancer.” MDT: PET-CT and EBUS biopsy requested; lung clinic in 6 days. “Patient not yet informed of CT findings.” Bloods 2 weeks ago: Hb 128, adjusted Ca 2.41, eGFR 72.',
      reason:'Video appointment booked by patient: “results of my scan”.'
    },
    model:[
      { phase:'Setting', clock:'0–1 min', who:'dr', text:'Hello Mr Nowak, I’m Dr Lee. Before we talk, are you somewhere private, and would you like anyone with you? Have you got some time now?', dom:'ro', why:'SPIKES — setting' },
      { who:'pt', text:'Yes, kitchen, on my own. Ewa’s at work. Just tell me — have the results come?' },
      { phase:'Perception and invitation', clock:'1–3 min', who:'dr', text:'They have. Before I go through them, what did you understand about why you were sent for the scan so quickly?', dom:'dg', why:'SPIKES — perception' },
      { who:'pt', text:'A shadow. Urgent pathway — I looked it up. I know what that means.' },
      { who:'dr', text:'And how much detail would you like today?', dom:'dg', why:'SPIKES — invitation' },
      { who:'pt', text:'Everything. Just tell me straight.' },
      { phase:'Knowledge', clock:'3–6 min', who:'dr', text:'I’m afraid it isn’t the news we were hoping for. (Pause.) The scan shows a growth at the top of your right lung, about four and a half centimetres, and some glands nearby are enlarged. The specialists think it is very likely to be a lung cancer. It isn’t confirmed until they take a sample.', dom:'cm', why:'Warning shot, plain language, honest about uncertainty' },
      { who:'pt', text:'(Silence.) So it is cancer. I think I knew.' },
      { who:'dr', text:'(Pause.) That’s a lot to hear. How are you feeling?', dom:'ro', why:'Silence and acknowledging emotion' },
      { who:'pt', text:'How long have I got?' },
      { who:'dr', text:'I wish I could answer that today. Honestly, it depends on what the next scan and the biopsy show and on which treatments suit you. The specialists will know much more in the next couple of weeks.', dom:'ro', why:'Honest response without guessing' },
      { phase:'What matters and symptoms', clock:'6–9 min', who:'dr', text:'What’s most on your mind for the coming months?', dom:'ro', why:'Explores what matters (hidden agenda)' },
      { who:'pt', text:'Kasia’s wedding in Kraków. Twelve weeks. I have to walk her down the aisle. And Ewa — I haven’t told her how scared I am.' },
      { who:'dr', text:'That matters enormously. I’ll write to the lung team today so they know about the wedding and can plan around it where it’s safe. Would it help if I spoke with you and Ewa together? Can I also ask — any more blood in your phlegm, breathlessness, chest pain, swelling of your face or neck, confusion or unusual thirst?', dom:'dg', why:'Acts on what matters; screens red flags' },
      { who:'pt', text:'One streak of blood two weeks ago. Breathless on hills. Nothing else.' },
      { phase:'Strategy and summary', clock:'9–12 min', who:'dr', text:'Here’s what happens next: clinic in six days, a PET scan and a biopsy, and a lung cancer nurse who will be your key contact. There are treatments, and the plan depends on those results. If you cough up more than a streak of blood, get very breathless, your face or neck swells, or you become confused — call 999 or 111. I’ll ring you on Thursday, and again after clinic.', dom:'cm', why:'Next steps, key worker, safety-net and follow-up' },
      { who:'pt', text:'Right. At least I know the next step.' },
      { who:'dr', text:'I’ll let the hospital know we’ve talked today, so the clinic can carry on from here. Macmillan have a helpline too — I’ll message you the details. Is there anything you’d like me to go over again?', dom:'cm', why:'Liaison with secondary care, support, final check' }
    ],
    kb:{
      social:[
        { h:'Family events', t:'Major life events (weddings, births) often shape treatment timing and goals; pass them on to the oncology team.' },
        { h:'Protecting family', t:'Patients often hide fear from partners; offering a joint conversation helps.' },
        { h:'Migration and language', t:'Fluent English, but check understanding; some patients prefer a family member present.' }
      ],
      legal:[
        { h:'Right to information', t:'Competent adults are entitled to information about their condition; withholding is only justified to prevent serious harm.' },
        { h:'Industrial disease', t:'Asbestos exposure may be relevant to industrial injuries benefits or claims if mesothelioma or asbestos-related lung cancer is confirmed.' }
      ],
      professional:[
        { h:'Results arriving first', t:'If the GP receives significant results before the patient has been told and the patient asks, share honestly and inform the hospital team. Document what was said and understood.' },
        { h:'Continuity', t:'Agree who is following up and when; the GP remains involved throughout the cancer journey.' }
      ],
      community:[
        { h:'Support', t:'Macmillan Cancer Support (helpline and benefits advice), Roy Castle Lung Cancer Foundation, Maggie’s centres, local hospice and community palliative services if needed later.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Massive or increasing haemoptysis','Facial or neck swelling, distended neck veins (SVCO)','Stridor, severe breathlessness','Confusion, thirst, constipation (hypercalcaemia)','Back pain with leg weakness (spinal cord compression)'],
        psychosocial:['Daughter’s wedding abroad in 12 weeks','Wife not yet told how scared he is','Asbestos exposure; ex-smoker'],
        ice:['Idea: cancer (looked up the pathway)','Concern: the wedding; protecting his wife','Expectation: a straight answer; next steps; how long']
      },
      diagnosis:'CT highly suspicious of primary lung cancer with mediastinal nodal involvement and indeterminate liver lesions — not yet confirmed; staging and biopsy pending.',
      diagnosisLay:'“The scan shows a growth in your right lung that is very likely to be a cancer. They need a sample and another scan to be sure and to plan treatment.”',
      management:{
        reflectIce:'“You wanted it straight, and you wanted to know what happens next — so here’s the plan.”',
        psychosocial:'Offer a joint conversation with his wife; pass on the wedding to the lung team; Macmillan support.',
        sharedPlan:['Lung clinic in 6 days; PET-CT and EBUS biopsy','Lung cancer nurse specialist as key worker','GP informs lung team he has been told and about the wedding','Written information and Macmillan contacts','GP calls on Thursday and after clinic'],
        safetyNet:['More than a streak of blood, severe breathlessness, facial/neck swelling, confusion — 999 or 111','New back pain with leg weakness — same-day']
      }
    },
    links:[
      { ic:'💊', t:'Palliative breathlessness', s:'Management protocol', href:'management/palliative-breathlessness.html' },
      { ic:'🗺️', t:'Chronic cough', s:'Visual algorithm', href:'algorithms/chronic-cough.html' },
      { ic:'🗺️', t:'Weight loss', s:'Visual algorithm', href:'algorithms/weight-loss.html' },
      { ic:'📋', t:'Palliative care', s:'Case walkthrough', href:'../cases/palliative-care.html' }
    ],
    pitfalls:{
      intro:'This station is failed by refusing to share when asked directly, by a blunt “data dump”, or by guessing prognosis.',
      items:[
        { dom:'cm', fail:'“I’m afraid the hospital needs to discuss it with you next week.”', why:'He asked directly and has a right to know; stalling increases distress and erodes trust.', fix:'Share honestly, then tell the hospital.' },
        { dom:'ro', fail:'Reading the report aloud with no warning shot.', why:'Overwhelms; jargon (“spiculated”, “mediastinal”) means nothing.', fix:'Warning shot, plain words, small chunks, pause.' },
        { dom:'cm', fail:'“It’s definitely cancer and it has spread to your liver.”', why:'Over-states certainty; liver lesions are indeterminate and the diagnosis is not confirmed.', fix:'“Very likely”, with what still needs testing.' },
        { dom:'ro', fail:'Filling the silence after the news.', why:'Stops him processing; misses his emotion.', fix:'Wait; then acknowledge.' },
        { dom:'ro', fail:'Guessing a prognosis.', why:'Inaccurate and hard to retract.', fix:'Explain what it depends on and when more will be known.' },
        { dom:'cm', fail:'No next steps, safety-net or follow-up.', why:'Leaves him alone with the news.', fix:'Clinic date, key worker, red flags, GP call-back.' }
      ]
    },
    ceg:['Long-term conditions & cancer','Investigations & results'],
    timeMap:[
      { t:'0–1', h:'Setting', d:'Privacy, support person, time.' },
      { t:'1–3', h:'Perception and invitation', d:'What he knows; how much he wants to know.' },
      { t:'3–6', h:'Knowledge and emotion', d:'Warning shot; plain explanation; uncertainty; silence; empathy; honest answer to “how long”.' },
      { t:'6–9', h:'What matters and symptoms', d:'Wedding, wife; red-flag screen; offer joint conversation; flag wedding to the team.' },
      { t:'9–12', h:'Strategy and summary', d:'Clinic, PET-CT, biopsy, key worker; safety-net; GP follow-up; inform hospital; Macmillan.' }
    ],
    wordPics:{
      clearFail:'Refuses to share or reads the report bluntly; guesses prognosis or gives false reassurance; no next steps or safety-net.',
      fail:'Shares the news but with jargon, no warning shot or no pause for emotion; vague about next steps; misses what matters to him.',
      pass:'Checks setting and understanding, gives a warning shot, explains the findings honestly with uncertainty, responds to emotion, explains next steps and safety-nets.',
      clearPass:'All of the above, plus: finds and acts on the wedding and his wife’s support, handles “how long” honestly, offers a joint conversation, informs the hospital, and arranges specific GP follow-up.',
      exc:'All of the above, plus: finds and acts on the wedding and his wife’s support, handles “how long” honestly, offers a joint conversation, informs the hospital, and arranges specific GP follow-up.'
    },
    avoid:[
      { dont:'“The CT shows a spiculated RUL lesion with mediastinal lymphadenopathy.”', instead:'“There’s a growth in the top of your right lung, and some nearby glands are enlarged.”', why:'Plain language.' },
      { dont:'“I’m sure it’ll be fine — they can do wonders these days.”', instead:'“There are treatments, and the plan depends on the next tests.”', why:'False reassurance destroys trust.' },
      { dont:'“Probably about a year.”', instead:'“I don’t know yet — it depends on the tests and treatment. The specialists will know more soon.”', why:'Prognosis needs staging and tissue.' }
    ],
    scTasks:[
      { dom:'dg', t:'Opens and explores the problem', d:'Setting: privacy, support, time; what he wants from the call.', pts:1 },
      { dom:'dg', t:'Explores psychosocial context', d:'Wife, children, wedding, work history and asbestos.', pts:1 },
      { dom:'dg', t:'Identifies and follows cues', d:'“No news is good news, but…”, “I know what that means”, “How long?”.', pts:1 },
      { dom:'dg', t:'Discovers ICE', d:'Idea (cancer), concern (wedding, wife), expectation (straight answer, next steps).', pts:2 },
      { dom:'dg', t:'Interprets the results', d:'CT findings, nodes, indeterminate liver lesions, calcium normal; not yet confirmed.', pts:1 },
      { dom:'dg', t:'Generates and tests hypotheses', d:'Primary lung cancer most likely; staging pending; other diagnoses less likely.', pts:1 },
      { dom:'dg', t:'Rules in/out serious complications', d:'Haemoptysis, SVCO, stridor, hypercalcaemia, cord compression.', pts:2 },
      { dom:'dg', t:'Shares the working diagnosis', d:'Warning shot; “very likely to be lung cancer”; honest about uncertainty.', pts:2 },
      { dom:'cm', t:'Offers a safe, patient-centred plan', d:'Clinic, PET-CT, biopsy, key worker; flags the wedding to the team.', pts:2 },
      { dom:'cm', t:'Manages comorbidity and contributors', d:'Support for wife; Macmillan; asbestos history noted; informs hospital.', pts:1 },
      { dom:'cm', t:'Provides follow-up and safety net', d:'999/111 triggers; GP call Thursday and after clinic; documentation.', pts:1 }
    ]
  });
  /* ===== Q8. After an early miscarriage — telephone follow-up ===== */
  C.push({
    id:'miscarriage-follow-up',
    title:'“I did a pregnancy test and it’s still positive — is something wrong?”',
    type:'telephone', duration:12,
    meta:{ age:33, sex:'F',
      setting:'Telephone — patient-initiated call 16 days after medical management of a miscarriage.',
      system:'Reproductive health / Bereavement — follow-up after early miscarriage: pregnancy test timing, warning signs, causes and guilt, next pregnancy, recurrent loss and emotional support',
      checked:CHECKED,
      blueprint:{ difficulty:2, lifeStage:'adult', groups:['Gender, reproductive & sexual health','Mental health & addiction','Investigations & results'], type:'telephone', thirdParty:false } },
    brief:'Ms Nkechi Adeyemi, 33, a primary school teacher, had a missed miscarriage diagnosed at 9 weeks on an early pregnancy unit scan 16 days ago and chose medical management with misoprostol at home; tissue passed the same day. This was her second loss (7 weeks, March 2025). She is RhD negative; the EPAU told her anti-D was not needed (NICE NG126, June 2026 update: no anti-D for miscarriage up to 11+6 weeks). Discharge advice: do a urine pregnancy test 3 weeks after treatment and contact EPAU if positive. She tested early, today, and it is faintly positive; she has light brown spotting only. Task: check she is safe now (bleeding, pain, fever, offensive discharge — no red flags), explain that hCG can still be detectable at 2 weeks and the test should be repeated at 3 weeks (day 21), with EPAU review if still positive; then address her questions: why it happened (most early miscarriages are due to chromosomal problems, not anything she did), the next pregnancy (no medical need to wait beyond feeling ready, folic acid, early scan, progesterone if bleeding with a previous miscarriage), whether two losses mean something is wrong (RCOG 2023 defines recurrent pregnancy loss as two or more losses; discuss referral for assessment), grief and mood, her partner, work and support. Hidden agenda: she blames herself for carrying heavy boxes and a glass of wine before she knew, and feels alone because her partner Tunde “went straight back to work as if nothing happened”.',
    script:{
      opening:'“Hi, thanks for calling back. I had a miscarriage two weeks ago — I did the tablets at home. I did a pregnancy test this morning and it’s still positive. Faint, but positive. Is something wrong? Is there still something in there?”',
      facts:[
        { topic:'Identity and privacy', text:'Confirms date of birth if asked. At home, on her own — “Tunde’s at work.” Fine to talk.' },
        { topic:'What happened', text:'“I had a scan at nine weeks because of spotting and they said there was no heartbeat. The baby had stopped growing at about seven weeks. I chose the tablets at home. I bled a lot that day and passed… everything, I think. It was awful.”' },
        { topic:'Now', text:'If asked: light brown spotting, “like the end of a period”, a pad lasts all day. No clots now. Mild cramps sometimes, paracetamol helps. No fever, no shivers, no smelly discharge. Not dizzy or faint.' },
        { topic:'The instructions', text:'If asked what the EPAU told her: “To do a test after three weeks. I couldn’t wait. I just wanted to know it was over.”' },
        { topic:'Blood group', text:'If asked: “I’m Rhesus negative. Last time they gave me an injection, but this time they said I didn’t need it. Is that right?”' },
        { topic:'Previous pregnancy', text:'“I lost one last March at seven weeks too. Two now. Does that mean there’s something wrong with me?” No live births. Periods regular before. Not on any medicines. No medical problems. Non-smoker. BMI “about 25”.' },
        { topic:'Next pregnancy', text:'If asked about plans: “We want to try again. I’m 33 — I feel like time is running out. How long do we have to wait?” Was taking folic acid before.' },
        { topic:'Mood and sleep', text:'If asked how she is feeling: “Numb. Then crying in the car. I’m not sleeping.” If asked directly: no thoughts of harming herself — “No. I just feel empty.” Has not told her mother or friends.' },
        { topic:'Work', text:'Off work for a week after, went back last week. “The children are lovely but I keep having to leave the room.”' },
        { topic:'Hidden worries', text:'Only if asked whether she has any thoughts about why it happened: “We were moving classrooms — I carried heavy boxes the week before. And I had a glass of wine at a birthday before I knew I was pregnant. Was it me?” Only if asked about her partner or support: “Tunde went straight back to work like nothing happened. He doesn’t talk about it. I feel like I’m on my own.”' },
        { topic:'How to play it', text:'Anxious and tearful but articulate. Lead with the test. If the doctor only deals with the test and ends the call, say “OK…” flatly and end. If the doctor asks how she is or why she thinks it happened, let the guilt and loneliness out. Respond with relief to a clear explanation that it was not her fault. If the doctor offers practical help (fit note, support, a follow-up call, something for Tunde), say “That would really help.”' }
      ],
      ice:{
        ideas:'“Maybe there’s still something left inside. Maybe I did something to cause it.”',
        concerns:'HIDDEN AGENDA — she blames herself (heavy boxes at work, a glass of wine before she knew) and fears two losses mean she cannot have a baby; she feels alone because her partner has gone back to work and won’t talk about it. She shares this only if asked about causes, her feelings or support.',
        expectations:'To know whether the positive test is a problem; to know when they can try again and whether she needs tests.'
      },
      cues:[
        '“I just wanted to know it was over” — grief and need for closure behind the early test.',
        '“Two now. Does that mean there’s something wrong with me?” — fear about future pregnancy.',
        '“Numb. Then crying in the car.” — emotional impact; ask about support and mood.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Confirms identity and privacy, then checks for red flags of retained tissue or infection: heavy bleeding, clots, worsening pain, fever, offensive discharge, dizziness — none present' },
      { dom:'dg', text:'Clarifies the history: missed miscarriage at 9 weeks, medical management at home 16 days ago, tissue passed, second loss, RhD negative, and the EPAU instruction to test at 3 weeks' },
      { dom:'cm', text:'Explains that a faint positive test at 2 weeks can be normal as pregnancy hormone falls gradually; advises repeating the test at 3 weeks and contacting EPAU if still positive (possible incomplete miscarriage, rarely molar pregnancy), and explains why anti-D was not needed under current NICE guidance' },
      { dom:'dg', text:'Explores her ideas about cause and specifically the self-blame (lifting, wine), and asks about mood, sleep, thoughts of self-harm, support and her partner' },
      { dom:'cm', text:'Explains clearly that most early miscarriages are caused by chromosomal problems in the pregnancy and are not caused by work, lifting, exercise, sex or a small amount of alcohol before knowing' },
      { dom:'cm', text:'Advises on the next pregnancy: no medical need to wait beyond feeling ready (often after the next period for dating), folic acid, early pregnancy unit self-referral for an early scan, progesterone if bleeding in a future pregnancy with a previous miscarriage; discusses recurrent pregnancy loss assessment after two losses' },
      { dom:'cm', text:'Offers practical and emotional support: fit note if needed, Miscarriage Association and Tommy’s, NHS Talking Therapies, the optional pregnancy loss certificate, support for her partner, and a follow-up call; safety-nets clearly' },
      { dom:'ro', text:'Acknowledges the loss as a bereavement, uses warm, non-medical language (“your baby”, if she does), allows emotion, and avoids minimising (“at least it was early”)' }
    ],
    worked:[
      { lbl:'Safety first', txt:'“I’m so sorry about your loss. Before we talk about the test — how much are you bleeding now, any strong pain, fever, or smelly discharge?”' },
      { lbl:'The test', txt:'“After a miscarriage the pregnancy hormone falls gradually, so at two weeks a faint positive can be normal. That’s why the unit asked you to test at three weeks. If it’s still positive then, call them — they’ll check that everything has come away.”' },
      { lbl:'Not her fault', txt:'“Most early miscarriages happen because the baby’s chromosomes didn’t develop as they should — it’s decided very early and nothing you did caused it. Carrying boxes and a glass of wine before you knew don’t cause a miscarriage.”' },
      { lbl:'Two losses', txt:'“Two losses is heartbreaking, and it’s more common than people realise. Most people with two losses go on to have a baby. Guidance now suggests looking into it after two losses, so I’d like to talk about a referral to the recurrent miscarriage service.”' },
      { lbl:'Next time', txt:'“There’s no medical reason to wait once you feel ready. Keep taking folic acid. Next time you can refer yourself to the early pregnancy unit for an early scan, and if you bleed, there’s a hormone treatment called progesterone that can help.”' },
      { lbl:'Support', txt:'“How are you really doing? … And how is Tunde? Men often grieve differently and throw themselves into work — it doesn’t mean he doesn’t care. Would it help if I sent you both some information?”' }
    ],
    learning:'A telephone follow-up after early miscarriage has a safety part and a human part. Safety: screen for heavy bleeding, pain, fever and offensive discharge; after medical or expectant management NICE NG126 advises a urine pregnancy test at 3 weeks, with review if positive — a faint positive at 2 weeks is often normal. Anti-D is no longer recommended for miscarriage up to 11+6 weeks (NG126, 2026 update). The human part: treat it as a bereavement, address self-blame directly (most losses are chromosomal and not caused by anything she did), advise on the next pregnancy, discuss assessment after two losses, check mood and partner support, and offer practical help and follow-up.',
    knowledge:{
      guideline:'Sources: NICE NG126 Ectopic pregnancy and miscarriage: diagnosis and initial management (2019, updated June 2026) · RCOG Green-top Guideline 17 Recurrent miscarriage (2023) · NHS England pregnancy loss certificate service (launched 2024) · Miscarriage Association and Tommy’s patient information · NICE CG192 Antenatal and postnatal mental health (2014, updated 2020)',
      summary:'Faint positive test 16 days after medical management, with no red flags: retest at 3 weeks. Then the real work — guilt, two losses, next pregnancy, mood and support.',
      points:[
        { h:'Red flags', t:'Heavy bleeding (soaking a pad an hour), large clots, worsening pain, fever, offensive discharge or feeling faint suggest retained tissue or infection — same-day EPAU or A&E.' },
        { h:'Pregnancy test timing', t:'After expectant or medical management, NICE NG126 advises a urine pregnancy test 3 weeks later; if positive, return for individualised care (incomplete miscarriage, or rarely gestational trophoblastic disease).' },
        { h:'Anti-D (2026 update)', t:'NICE NG126 (June 2026) no longer recommends anti-D prophylaxis for miscarriage or ectopic pregnancy up to and including 11+6 weeks — this replaces earlier advice to give anti-D after surgical management.' },
        { h:'Causes and guilt', t:'About 1 in 4–5 recognised pregnancies end in miscarriage; most early losses are due to chromosomal abnormality. Work, lifting, exercise, sex, stress or a small amount of alcohol before knowing do not cause miscarriage. Risk rises with maternal age and smoking.' },
        { h:'Recurrent loss', t:'RCOG (2023) defines recurrent pregnancy loss as two or more losses and supports a graded approach to assessment; local services vary in what they offer after two losses. Tests may include antiphospholipid antibodies, thyroid function and pelvic ultrasound.' },
        { h:'Next pregnancy', t:'No medical need to wait beyond emotional readiness; folic acid 400 micrograms (5 mg if indicated); early scan through EPAU; NICE NG126: offer vaginal micronised progesterone 400 mg twice daily to women with bleeding in early pregnancy and a previous miscarriage once an intrauterine pregnancy is confirmed.' },
        { h:'Emotional impact', t:'Grief, anxiety, depression and post-traumatic stress symptoms are common after miscarriage, in both partners. Ask about mood and self-harm; offer NHS Talking Therapies and charity support; consider a follow-up call.' },
        { h:'Practical', t:'Fit note if needed (self-certify up to 7 days); the optional pregnancy loss certificate for losses before 24 weeks in England; return-to-work conversation; contraception if not trying.' }
      ]
    },
    stem:{
      name:'Nkechi Adeyemi', age:'33 years · female',
      pmh:['G2 P0 — miscarriage at 7 weeks (March 2025)','Missed miscarriage at 9 weeks (scan: no fetal heartbeat, CRL consistent with 7 weeks) — medical management with misoprostol at home 16 days ago','Blood group O RhD negative'],
      meds:['Folic acid 400 micrograms daily (stopped after miscarriage)','Paracetamol when needed'],
      allergy:'No known drug allergies',
      recent:'EPAU discharge letter: medical management completed at home; heavy bleeding and passage of tissue on day 1. RhD negative — anti-D not indicated (NICE NG126, June 2026). Advised urine pregnancy test 3 weeks after treatment; contact EPAU if positive. Patient message today: “Pregnancy test still positive — please call.”',
      reason:'Telephone call-back requested by patient: “pregnancy test still positive after miscarriage”.'
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello, is that Nkechi? It’s Dr Lee from the surgery. Can you confirm your date of birth, and is it a good time to talk privately?', dom:'dg', why:'Identity and privacy on the telephone' },
      { who:'pt', text:'Yes. I had a miscarriage two weeks ago, the tablets at home. I did a test this morning and it’s still positive. Is something wrong?' },
      { who:'dr', text:'I’m so sorry about your loss. Let me check you’re safe first. How much are you bleeding now — any clots, strong pain, fever, smelly discharge, or feeling faint?', dom:'dg', why:'Red-flag screen first' },
      { who:'pt', text:'Just light brown spotting. Mild cramps. No fever, nothing smelly.' },
      { phase:'The test and anti-D', clock:'1–4 min', who:'dr', text:'That’s reassuring. The pregnancy hormone falls gradually, so at two weeks a faint positive can be normal. That’s why the unit asked for a test at three weeks. If it’s still positive then, ring them so they can check everything has come away.', dom:'cm', why:'Explains the test result and the plan' },
      { who:'pt', text:'I just wanted to know it was over. And they said I didn’t need the anti-D this time — is that right? Last time I had it.' },
      { who:'dr', text:'Yes, that’s right. National guidance changed this year: for miscarriages before 12 weeks the evidence showed the injection isn’t needed. You’ve had the right care.', dom:'cm', why:'Accurate update on anti-D' },
      { phase:'Her questions and feelings', clock:'4–8 min', who:'dr', text:'You said you wanted to know it was over. How are you doing with all of this?', dom:'ro', why:'Picks up the emotional cue' },
      { who:'pt', text:'Numb. Then crying in the car. Not sleeping. Two now — is something wrong with me?' },
      { who:'dr', text:'That sounds so hard. Do you have any thoughts about why it might have happened?', dom:'dg', why:'Explores ideas about cause' },
      { who:'pt', text:'I carried heavy boxes at work. And I had a glass of wine before I knew. Was it me?' },
      { who:'dr', text:'No — it wasn’t you. Most early miscarriages happen because the baby’s chromosomes didn’t form properly, right at the start. Lifting boxes and a glass of wine before you knew don’t cause a miscarriage.', dom:'cm', why:'Directly addresses self-blame with facts' },
      { who:'pt', text:'(Crying.) Thank you. I needed to hear that.' },
      { who:'dr', text:'Have you had any thoughts of harming yourself? And who’s supporting you — how is Tunde?', dom:'dg', why:'Mood risk and support' },
      { who:'pt', text:'No, nothing like that. Tunde went straight back to work like nothing happened. I feel on my own.' },
      { phase:'Next steps', clock:'8–12 min', who:'dr', text:'Partners often grieve differently and bury themselves in work — it doesn’t mean he doesn’t care. I’ll send you information from the Miscarriage Association that includes partners. About the future: there’s no medical need to wait once you feel ready; keep up the folic acid; next time refer yourself to the early pregnancy unit for an early scan, and if you bleed there’s progesterone treatment that can help. After two losses I’d like to refer you to the recurrent miscarriage service to talk about tests. Would that be OK?', dom:'cm', why:'Next pregnancy, recurrent loss and partner support' },
      { who:'pt', text:'Yes, please. I want to know.' },
      { who:'dr', text:'If the bleeding gets heavy, you get bad pain, a fever or a smelly discharge, call the early pregnancy unit or 111, or 999 if you feel faint. Test again on day 21. You can also have a fit note, there’s talking therapy you can refer yourself to, and an optional pregnancy loss certificate if you’d like one. I’ll call you in two weeks. What will you do next?', dom:'cm', why:'Safety-net, practical support, follow-up and teach-back' },
      { who:'pt', text:'Test again next week, call the unit if positive, and you’ll call me. And I’ll look at the Miscarriage Association with Tunde.' }
    ],
    kb:{
      social:[
        { h:'Hidden grief', t:'Early loss is often unseen by others; many women have not told family or colleagues and return to work quickly.' },
        { h:'Partners', t:'Partners can feel excluded and cope by working; offering resources for both reduces isolation.' },
        { h:'Work', t:'Teaching young children can be painful after a loss; a fit note or phased return may help.' }
      ],
      legal:[
        { h:'Pregnancy loss certificate', t:'In England, parents who lose a pregnancy before 24 weeks can request an optional, non-statutory certificate to recognise their loss.' },
        { h:'Employment', t:'Sickness related to pregnancy loss should be recorded separately by employers; check current employment rights for bereavement leave.' }
      ],
      professional:[
        { h:'Language', t:'Follow the patient’s language (“my baby” or “the pregnancy”); avoid “at least it was early” and medical terms like “products of conception” on the phone.' },
        { h:'Coding', t:'Record the loss accurately so future contacts (cervical screening, invitations, antenatal letters) are sensitive.' }
      ],
      community:[
        { h:'Support', t:'Miscarriage Association (helpline and partner resources), Tommy’s, Sands, NHS Talking Therapies (self-referral), local EPAU counselling.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Heavy bleeding or clots, feeling faint','Worsening pain','Fever or offensive discharge','Positive pregnancy test at 3 weeks','Thoughts of self-harm'],
        psychosocial:['Second loss; age-related fear','Partner withdrawn; told no one','Teaching young children'],
        ice:['Idea: something left inside; she caused it','Concern: two losses mean infertility; feeling alone','Expectation: is the test a problem; when to try again; tests']
      },
      diagnosis:'Recovery after medical management of a missed miscarriage at 9 weeks, with an expected faint positive pregnancy test at 16 days and no red flags; second consecutive early loss.',
      diagnosisLay:'“A faint positive at two weeks can be normal — the hormone takes a few weeks to go. We’ll check it at three weeks.”',
      management:{
        reflectIce:'“You wanted to know it was over — and you wanted to know it wasn’t your fault. It wasn’t.”',
        psychosocial:'Bereavement support, partner resources, mood check, fit note, Talking Therapies.',
        sharedPlan:['Repeat urine pregnancy test on day 21; EPAU if positive','No anti-D needed (NG126 2026)','Referral for recurrent miscarriage assessment','Folic acid; early EPAU scan next time; progesterone if bleeding','GP call in 2 weeks'],
        safetyNet:['Heavy bleeding, severe pain, fever, smelly discharge — EPAU/111; faint or collapse — 999','Low mood worsening or thoughts of self-harm — contact GP same day or 111 option 2']
      }
    },
    links:[
      { ic:'🗺️', t:'Vaginal bleeding in pregnancy', s:'Visual algorithm', href:'algorithms/vaginal-bleeding-pregnancy.html' },
      { ic:'💊', t:'Depression', s:'Management protocol', href:'management/depression.html' },
      { ic:'📋', t:'Anxiety', s:'Case walkthrough', href:'../cases/anxiety.html' }
    ],
    pitfalls:{
      intro:'This station is failed by treating it purely as a pregnancy-test query and ending the call — or by giving outdated advice.',
      items:[
        { dom:'dg', fail:'Discussing the test without screening for bleeding, pain or infection.', why:'Retained tissue and infection must be excluded.', fix:'Red flags first.' },
        { dom:'cm', fail:'Sending her for an urgent scan for a faint positive at 2 weeks.', why:'Not in line with NG126 and causes distress.', fix:'Retest at 3 weeks; EPAU if positive.' },
        { dom:'cm', fail:'Telling her she should have had anti-D.', why:'Outdated — NG126 (2026) no longer recommends it up to 11+6 weeks.', fix:'Reassure that she had the right care.' },
        { dom:'ro', fail:'“At least it was early.”', why:'Minimises a bereavement.', fix:'“I’m so sorry about your loss.”' },
        { dom:'dg', fail:'Not asking what she thinks caused it.', why:'Misses the self-blame that drives her distress.', fix:'“Do you have any thoughts about why it happened?”' },
        { dom:'cm', fail:'No plan for the future or for two losses.', why:'Her main fear is future pregnancy.', fix:'Next-pregnancy advice and recurrent loss referral.' }
      ]
    },
    ceg:['Gender, reproductive & sexual health','Mental health & addiction'],
    timeMap:[
      { t:'0–1', h:'Identity and safety', d:'Privacy; condolence; red-flag screen.' },
      { t:'1–4', h:'The test', d:'Faint positive at 2 weeks often normal; retest at 3 weeks; EPAU if positive; anti-D update.' },
      { t:'4–8', h:'Grief and guilt', d:'Feelings; ideas about cause; not her fault; mood and self-harm; partner and support.' },
      { t:'8–11', h:'The future', d:'Next pregnancy; folic acid; early scan; progesterone; recurrent loss referral.' },
      { t:'11–12', h:'Support and safety-net', d:'Fit note, charities, Talking Therapies, certificate; red flags; call in 2 weeks; teach-back.' }
    ],
    wordPics:{
      clearFail:'Deals only with the test, or gives wrong advice (urgent scan, anti-D needed); no red-flag screen; minimises the loss.',
      fail:'Safe advice about the test but misses the self-blame, the partner issue or the future-pregnancy questions; vague support.',
      pass:'Screens red flags, explains the test and retest at 3 weeks, addresses cause and guilt, advises on next pregnancy and offers support and safety-net.',
      clearPass:'All of the above, plus: accurate anti-D update, explicit discussion of two losses with referral, mood and self-harm check, partner support, practical help (fit note, certificate), follow-up call and teach-back — delivered with warmth.',
      exc:'All of the above, plus: accurate anti-D update, explicit discussion of two losses with referral, mood and self-harm check, partner support, practical help (fit note, certificate), follow-up call and teach-back — delivered with warmth.'
    },
    avoid:[
      { dont:'“At least you know you can get pregnant.”', instead:'“I’m so sorry. Two losses is heartbreaking.”', why:'Well-meant minimising hurts.' },
      { dont:'“There may be retained products of conception.”', instead:'“If it’s still positive at three weeks, they’ll check everything has come away.”', why:'Plain, gentle language.' },
      { dont:'“It’s probably just one of those things.”', instead:'“Most early miscarriages are caused by chromosome problems at the very start — nothing you did.”', why:'Specific explanations relieve guilt.' }
    ],
    scTasks:[
      { dom:'dg', t:'Opens and explores the problem', d:'Identity, privacy, condolence; lets her explain the test worry.', pts:1 },
      { dom:'dg', t:'Explores psychosocial context', d:'Work, partner, family, who knows; second loss.', pts:1 },
      { dom:'dg', t:'Identifies and follows cues', d:'“Just wanted to know it was over”, “two now”, “crying in the car”.', pts:1 },
      { dom:'dg', t:'Discovers ICE', d:'Idea (something left; she caused it), concern (infertility; alone), expectation (test meaning; trying again).', pts:2 },
      { dom:'dg', t:'Interprets the test result', d:'Faint positive at day 16 versus NG126 3-week test; RhD negative status.', pts:1 },
      { dom:'dg', t:'Generates and tests hypotheses', d:'Normal hCG decline versus incomplete miscarriage, infection, rarely molar pregnancy.', pts:1 },
      { dom:'dg', t:'Rules in/out serious problems', d:'Bleeding, pain, fever, discharge, faintness; mood and self-harm.', pts:2 },
      { dom:'dg', t:'Reaches a working summary', d:'Expected recovery after medical management; second early loss.', pts:2 },
      { dom:'cm', t:'Offers a safe, patient-centred plan', d:'Retest day 21; EPAU if positive; anti-D update; not her fault; next-pregnancy advice.', pts:2 },
      { dom:'cm', t:'Manages comorbidity and contributors', d:'Recurrent loss referral; mood support; partner resources; fit note and certificate.', pts:1 },
      { dom:'cm', t:'Provides follow-up and safety net', d:'Red flags; 111/999; GP call in 2 weeks; teach-back.', pts:1 }
    ]
  });
  /* ===== Q9. Bereaved son — death certificate, medical examiner and a concern about care ===== */
  C.push({
    id:'bereaved-relative-mccd',
    title:'“Why does Dad’s certificate say heart failure — and why can’t we bury him yet?”',
    type:'telephone', duration:12,
    meta:{ age:81, sex:'M',
      setting:'Telephone — son of a patient who died at home three days ago calls about the death certificate and the funeral.',
      system:'Professional / Bereavement — the MCCD and the statutory medical examiner system, registration, confidentiality after death, and responding to a concern about care',
      checked:CHECKED,
      blueprint:{ difficulty:3, lifeStage:'older adult', groups:['Professional & ethical','Older adults','Ethnicity, culture & diversity'], type:'telephone', thirdParty:true } },
    brief:'Mr Lionel Cohen, 81 (COPD, ischaemic heart disease, heart failure), died at home in the early hours three days ago. His GP, Dr Shah, who had cared for him for years and spoke to him by telephone 10 days before his death, completed the medical certificate of cause of death (MCCD): 1a congestive cardiac failure, 1b ischaemic heart disease; II chronic obstructive pulmonary disease. Since 9 September 2024 every death not investigated by a coroner is reviewed by a medical examiner (ME); the ME officer phoned the family yesterday and the ME has not yet issued the MCCD to the registrar. His son Daniel, 52, calls. The family is Jewish and wanted burial as soon as possible. Questions: why heart failure and not his lungs; what the medical examiner is and whether it means something is wrong; why the delay; and a concern — his father asked for a home visit twice in the last fortnight and was given telephone calls; “if someone had seen him, he might still be here”. Task: offer condolence, confirm who he is (next of kin and executor) and that sharing is appropriate after death, explain the MCCD sequence, the medical examiner’s role (independent senior doctor, reviews records, talks to the family, decides with the certifying doctor whether the coroner needs to be notified), registration (normally within 5 days) and the funeral, and respond to the care concern honestly: acknowledge, say sorry for the distress, explain that he can raise it with the ME (which might lead to coroner notification and could affect timing — his choice to raise it is his right), and that the practice will review the care and offer a meeting and the complaints route. Hidden agenda: Daniel had not visited his father for six weeks after a row about his parents moving into a care home, and feels guilty; his mother Ruth, 78, is not coping.',
    script:{
      opening:'“Hello, it’s Daniel Cohen — Lionel Cohen’s son. Dad died on Monday morning. I’m sorry, I don’t really know who to ask. The certificate says heart failure, and there’s a medical examiner involved, and we still can’t register or bury him. In our religion we bury as soon as we can. What is going on?”',
      facts:[
        { topic:'Who he is', text:'If asked: Daniel, 52, the only son, named executor in the will. Lives 40 minutes away. His mother Ruth (Lionel’s wife) is with his aunt. Gives his father’s date of birth if asked (2 February 1945).' },
        { topic:'What happened', text:'“Mum found him in his chair at about five in the morning. The paramedics came, said he’d died, and the police came briefly because it was at home — they said it wasn’t suspicious.” Dad had been more breathless for two weeks, “but he’s always breathless”.' },
        { topic:'What the family were told', text:'“A medical examiner officer rang yesterday. She was very kind. She read out the cause and asked if we had questions. I said no — I was too upset. She said the examiner would sign it off and send it to the registrar. Nobody said when.”' },
        { topic:'The certificate', text:'If asked what he thinks it should say: “His lungs. He was on oxygen at night some of the time… I mean, he had inhalers and the nebuliser. He smoked for fifty years. Why does it say heart?”' },
        { topic:'The concern', text:'Only if asked whether anything else is troubling him or about his father’s care: “Mum rang twice in the last fortnight for a home visit. Both times a doctor phoned instead and gave him antibiotics and steroids. Nobody came. If someone had seen him, he might still be here. I want to know why.”' },
        { topic:'What he wants', text:'If asked what he would like to happen: “I want to bury my father. And I want someone to look at what happened — but not if it means a post-mortem. We don’t do that unless we have to.”' },
        { topic:'Faith and funeral', text:'Family is Jewish (United Synagogue). The burial society is waiting for the paperwork. “Every day is painful for Mum.”' },
        { topic:'Hidden guilt', text:'Only if asked how he is coping himself: (long pause) “I hadn’t seen him for six weeks. We had a row about them moving into a home. I was going to go this weekend.” Voice breaks.' },
        { topic:'His mother', text:'If asked about family: “Mum isn’t eating. She keeps saying she should have rung 999 that night. She’s 78, she’s got her own heart problems.”' },
        { topic:'How to play it', text:'Tired, polite, controlled anger underneath. Start with practical questions. If the doctor defends the practice (“the doctor followed protocol”) or dismisses the concern, become angry: “So nobody’s responsible?” If the doctor listens, says sorry for what the family is going through, and explains clearly how the concern can be looked at, calm down and say: “Thank you. That’s all I wanted — for someone to take it seriously.” Reveal the guilt only if asked about yourself. If the doctor explains honestly that raising a concern with the ME could involve the coroner, think aloud: “I don’t want to delay him… but I need to know.”' }
      ],
      ice:{
        ideas:'“It was his lungs, not his heart — and he should have been seen.”',
        concerns:'HIDDEN AGENDA — he had not visited his father for six weeks after a row about a care home and feels intense guilt; some of his anger at the practice is guilt. He also worries his mother blames herself and is not coping. He shares this only if asked how he is coping.',
        expectations:'To understand the certificate and the delay, to get the funeral arranged quickly, and to have his concern about the home visits taken seriously — ideally without a post-mortem.'
      },
      cues:[
        '“I don’t really know who to ask” — overwhelmed by an unfamiliar process.',
        '“In our religion we bury as soon as we can” — faith needs and time pressure.',
        '“He’s always breathless, but…” — a concern about care waiting to be invited.'
      ]
    },
    checkpoints:[
      { dom:'ro', text:'Opens with sincere condolence, confirms who Daniel is (son, next of kin, executor), and checks he is able to talk — recognising that sharing relevant information with those close to a deceased patient is appropriate unless the patient had objected' },
      { dom:'dg', text:'Finds out what he already knows and what his questions are (the certificate wording, the medical examiner, the delay, the funeral) before explaining' },
      { dom:'cm', text:'Explains the MCCD clearly: part I is the sequence leading directly to death (heart failure due to ischaemic heart disease), part II lists conditions that contributed (COPD) — his lungs are recorded as part of the cause' },
      { dom:'cm', text:'Explains the statutory medical examiner system accurately (since 9 September 2024 all deaths not investigated by a coroner are independently reviewed; the ME looks at the records, speaks to the family and agrees the cause with the certifying doctor or notifies the coroner) and registration within 5 days, and offers to ask the ME office about timing given the family’s faith' },
      { dom:'dg', text:'Invites and listens to the concern about the home visits without interrupting or defending, and checks what outcome he wants' },
      { dom:'cm', text:'Responds honestly: says sorry for the distress (without speculating on fault), explains he can raise the concern with the ME (who may decide the coroner needs to be notified, which could affect timing), and that the practice will review the care, offer a meeting with the doctors, and explain the complaints route; does not promise an outcome' },
      { dom:'ro', text:'Asks how Daniel is coping, responds to his guilt with compassion, and asks about his mother — offering support for her (appointment, bereavement services)' },
      { dom:'cm', text:'Agrees concrete next steps (contact the ME office today, practice review and meeting, written information on bereavement and complaints), documents the conversation, and safety-nets for the family’s wellbeing' }
    ],
    worked:[
      { lbl:'Condolence and identity', txt:'“I’m so sorry about your dad. Can I check — you’re his son, and you’re handling things for the family? Is now a good time to talk?”' },
      { lbl:'The certificate', txt:'“The certificate is written as a chain. The top line is what directly led to his death — his heart was failing, because of the narrowed heart arteries he’d had for years. His lungs are there too, in the second part, as something that contributed. So his COPD is recorded.”' },
      { lbl:'The medical examiner', txt:'“Since 2024, every death that doesn’t go to the coroner is checked by a medical examiner — an independent senior doctor who wasn’t involved in his care. It’s routine, not because anything is suspicious. They read the notes, talk to the family, and agree the cause with the GP before it goes to the registrar.”' },
      { lbl:'Invite the concern', txt:'“You mentioned he was breathless for two weeks. Is there anything about his care that’s troubling you?”' },
      { lbl:'Honest response', txt:'“I’m so sorry — that must be awful to carry. I can’t tell you today whether a visit would have changed things, but you deserve a proper answer, and we will look at it carefully. You can also tell the medical examiner. I should be honest: if they think the coroner needs to know, that could affect timing. It’s your right to raise it, and I’ll support you either way.”' },
      { lbl:'Him and his mum', txt:'“And how are you doing, in all this?” … “Arguments happen in families who love each other. It doesn’t change how much your dad meant to you.”' }
    ],
    learning:'Since 9 September 2024 the medical examiner system is statutory in England and Wales: any doctor who attended the deceased during life can complete the MCCD (the old 28-day rule has gone), and every death not investigated by a coroner is independently scrutinised by a medical examiner, who also speaks with the bereaved and can raise concerns or notify the coroner. Families usually need three things: a plain explanation of the certificate (part I is the causal sequence; part II contributing conditions), a clear picture of the process and timing (registration within 5 days, faith needs considered), and a safe place to raise concerns about care. Respond to concerns openly — listen, say sorry for the distress, explain the routes (medical examiner, practice review, meeting, complaint) honestly including the possible effect on timing — and look after the bereaved, whose anger often carries guilt.',
    knowledge:{
      guideline:'Sources: The Medical Certificate of Cause of Death Regulations 2024 and DHSC Guidance for medical practitioners completing MCCDs in England and Wales (September 2024, updated April 2025) · National Medical Examiner good practice guidance (NHS England) · Notification of Deaths Regulations 2019 · GMC Confidentiality: good practice in handling patient information (2017) · GMC Good medical practice (2024) · Access to Health Records Act 1990 · NHS England Patient Safety Incident Response Framework (2022)',
      summary:'A bereaved son questions the MCCD, the medical examiner process and his father’s care. Explain the certificate and the statutory ME review, invite and handle the concern openly, and support the family.',
      points:[
        { h:'Who can certify', t:'Since 9 September 2024 any registered medical practitioner who attended the deceased during life can complete the MCCD if they can state the cause to the best of their knowledge and belief and the death does not need to be notified to the coroner. The 28-day rule no longer applies.' },
        { h:'The medical examiner', t:'An independent senior doctor reviews the records and proposed cause of death, discusses it with the certifying doctor, and offers the bereaved a conversation — a chance to ask questions or raise concerns. The ME office then sends the MCCD to the registrar.' },
        { h:'When the coroner is involved', t:'Under the Notification of Deaths Regulations 2019, deaths must be notified to the coroner if, for example, the cause is unknown, unnatural, violent, related to an injury or poisoning, or due to neglect or failure of care. The ME or attending doctor decides; a concern about care does not automatically mean a post-mortem.' },
        { h:'Reading the MCCD', t:'Part I gives the chain of events leading directly to death (1a due to 1b due to 1c). Part II lists significant conditions that contributed but are not part of the chain. COPD in part II means it is recorded as contributing.' },
        { h:'Registration and faith', t:'Deaths in England and Wales should normally be registered within 5 days. ME offices and coroners try to respond quickly where families have religious requirements for prompt burial; contact the ME office to explain.' },
        { h:'Responding to concerns', t:'Listen fully, acknowledge and say sorry for the distress (an apology is not an admission of liability), avoid speculating, explain routes: the ME conversation, a practice learning review (PSIRF), a meeting with the clinicians, the practice complaints procedure and the ICB or Ombudsman if needed. Apply the duty of candour if harm is found.' },
        { h:'Confidentiality after death', t:'GMC (2017): the duty of confidentiality continues after death, but you can usually share information with those close to the patient to help them understand the death, unless the patient asked you not to. The personal representative can apply for records under the Access to Health Records Act 1990.' },
        { h:'Supporting the bereaved', t:'Ask about the caller and other family members; offer appointments, bereavement support (Cruse, faith-specific services such as Jewish Bereavement Counselling Service), and a follow-up call.' }
      ]
    },
    stem:{
      name:'Lionel Cohen (deceased)', age:'81 years · male',
      pmh:['COPD (GOLD 3) — home nebuliser','Ischaemic heart disease — MI 2016','Heart failure with reduced ejection fraction (EF 30%, 2024)','Type 2 diabetes','Lived with wife Ruth (78); son Daniel is next of kin and executor'],
      meds:['(At death) Bisoprolol, ramipril, furosemide, dapagliflozin, atorvastatin, aspirin, trimbow inhaler, salbutamol nebules'],
      allergy:'No known drug allergies',
      recent:'Telephone consultations: 15 days before death (duty doctor) — increased breathlessness, home visit requested by wife; doxycycline and prednisolone prescribed. 10 days before death (Dr Shah) — “a bit better”; wife requested a visit; advised to continue, review in a week. Died at home 3 days ago (found in chair, 05:00; police: not suspicious). MCCD by Dr Shah: 1a congestive cardiac failure, 1b ischaemic heart disease; II COPD. Medical examiner scrutiny in progress; ME officer spoke to son yesterday. Family Jewish — urgent burial requested.',
      reason:'Telephone call from son about the death certificate and the funeral.'
    },
    model:[
      { phase:'Condolence and identity', clock:'0–1 min', who:'dr', text:'Hello Mr Cohen, it’s Dr Lee from the practice. I’m so sorry about your father. Can I check — you’re his son, and you’re handling things for the family? Is now a good time?', dom:'ro', why:'Condolence; identity and role' },
      { who:'pt', text:'Yes. I’m the executor. The certificate says heart failure, there’s a medical examiner, and we still can’t bury him. In our faith we bury quickly. What’s going on?' },
      { phase:'Questions and the certificate', clock:'1–4 min', who:'dr', text:'That’s a lot to deal with on top of losing him. Let me take your questions one by one. What did the examiner’s officer tell you?', dom:'dg', why:'Establishes what he knows' },
      { who:'pt', text:'She read out the cause, asked if I had questions. I was too upset. Why heart? It was his lungs.' },
      { who:'dr', text:'The certificate is a chain. The top line is what directly led to his death — his heart was failing, because of the heart disease he’d had since his heart attack. His lungs are there too, in the second part, as something that contributed. So his COPD is recorded.', dom:'cm', why:'Plain explanation of part I and part II' },
      { phase:'Medical examiner and timing', clock:'4–6 min', who:'dr', text:'Since 2024, every death that doesn’t go to a coroner is checked by a medical examiner — an independent senior doctor. It’s routine. They read the notes, talk to the family and agree the cause before it goes to the registrar. I’ll ring the examiner’s office today to explain that you need to bury your father as soon as possible.', dom:'cm', why:'Accurate ME explanation and practical help with timing' },
      { who:'pt', text:'Thank you. He was breathless for two weeks, though…' },
      { phase:'The concern', clock:'6–9 min', who:'dr', text:'Is there something about his care that’s troubling you?', dom:'dg', why:'Invites the concern' },
      { who:'pt', text:'Mum rang twice for a home visit. Both times they phoned instead. Nobody came. If someone had seen him he might still be here.' },
      { who:'dr', text:'I’m so sorry — that’s an awful thing to be carrying. I can’t tell you today whether a visit would have changed things, but you deserve a proper answer. We will look at his care carefully and I’d like to offer you and your mum a meeting. What would you like to happen?', dom:'ro', why:'Acknowledges, apologises for distress, asks desired outcome' },
      { who:'pt', text:'I want someone to look at it. But not a post-mortem. We don’t do that unless we have to.' },
      { who:'dr', text:'I understand. You can also tell the medical examiner — that’s part of their role. I should be honest: if they felt the coroner needed to know, that could affect timing; it doesn’t automatically mean a post-mortem. Our own review and a meeting will happen either way. It’s your choice and I’ll support you.', dom:'cm', why:'Honest about routes and consequences; respects his choice' },
      { phase:'Him, his mother, close', clock:'9–12 min', who:'dr', text:'And how are you doing, in all this?', dom:'ro', why:'Invites the hidden agenda' },
      { who:'pt', text:'(Pause.) I hadn’t seen him for six weeks. We argued about a care home. I was going this weekend.' },
      { who:'dr', text:'I’m so sorry. Families who love each other argue — it doesn’t change what you meant to him. How is your mum?', dom:'ro', why:'Compassionate response to guilt; asks about mother' },
      { who:'pt', text:'Not eating. She thinks she should have rung 999.' },
      { who:'dr', text:'Please tell her I’d like to see her — I’ll ring her tomorrow. So: I’ll call the examiner’s office today about timing; you decide whether to raise your concern with them; the practice will review your dad’s care and offer a meeting; I’ll send details of bereavement support, including the Jewish Bereavement Counselling Service. If you or your mum feel unable to cope, call us or 111. I’ll write this conversation in his record.', dom:'cm', why:'Concrete actions, support, documentation' }
    ],
    kb:{
      social:[
        { h:'Faith and timing', t:'Jewish and Muslim families usually seek burial as soon as possible and may object to post-mortem examination; less invasive options (such as post-mortem CT) may be available if the coroner investigates.' },
        { h:'Guilt and anger', t:'Anger at services often carries guilt about family conflict or missed chances; acknowledging both helps.' },
        { h:'Widowed spouse', t:'Older bereaved spouses have increased risk of illness and death in the following months; proactive contact is good practice.' }
      ],
      legal:[
        { h:'Medical examiner system', t:'Statutory in England and Wales from 9 September 2024 (Medical Certificate of Cause of Death Regulations 2024).' },
        { h:'Coroner notification', t:'Notification of Deaths Regulations 2019 list the circumstances requiring notification, including deaths possibly due to neglect or failure of care.' },
        { h:'Records', t:'Personal representatives (or those with a claim) can apply for the deceased’s records under the Access to Health Records Act 1990.' }
      ],
      professional:[
        { h:'Openness', t:'GMC Good medical practice (2024) and the professional duty of candour: be open when things go wrong, apologise, explain and put things right.' },
        { h:'Learning from deaths', t:'Practices review deaths and concerns using PSIRF-style learning responses; involve the family in what is reviewed.' },
        { h:'Documentation', t:'Record the call, the concern, the information shared and agreed actions; tell the certifying GP and the practice manager.' }
      ],
      community:[
        { h:'Support', t:'Cruse Bereavement Support, Jewish Bereavement Counselling Service, synagogue community, Age UK for the widowed spouse, GOV.UK “What to do when someone dies” and Tell Us Once.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Bereaved family member not coping, not eating, or with thoughts of self-harm','A concern that may indicate a death needing coroner notification'],
        psychosocial:['Jewish faith — urgent burial, objection to post-mortem','Son’s estrangement before death; guilt','Widowed mother with heart disease, self-blame'],
        ice:['Idea: his lungs, and he should have been visited','Concern: delay; guilt; his mother','Expectation: explanation, prompt burial, concern taken seriously without a post-mortem']
      },
      diagnosis:'Bereaved son needing explanation of the MCCD and the statutory medical examiner process, with a concern about care (two declined home visits) and unspoken guilt.',
      diagnosisLay:'“The certificate shows his heart was the main cause, with his lungs contributing. The examiner check is routine, and your concern will be looked at properly.”',
      management:{
        reflectIce:'“You want to bury your dad quickly and you want to know his care was right — we can work on both.”',
        psychosocial:'Acknowledge guilt; reach out to the widowed mother; faith-specific bereavement support.',
        sharedPlan:['GP contacts ME office today about timing and faith needs','Daniel decides whether to raise the concern with the ME','Practice review of the home-visit requests; meeting offered to the family','Complaints route explained in writing','GP to call Ruth tomorrow; bereavement support details sent'],
        safetyNet:['If Daniel or Ruth are not coping or have thoughts of self-harm — contact practice or 111','GP follow-up after the review']
      }
    },
    links:[
      { ic:'📝', t:'GP admin', s:'Death certification and forms', href:'gp-admin.html' },
      { ic:'💊', t:'COPD', s:'Management protocol', href:'management/copd.html' },
      { ic:'📋', t:'Palliative care', s:'Case walkthrough', href:'../cases/palliative-care.html' }
    ],
    pitfalls:{
      intro:'This station is failed by defensiveness, inaccurate information about the new death-certification process, or missing the family’s grief.',
      items:[
        { dom:'cm', fail:'“The doctor followed protocol — telephone triage is standard.”', why:'Defensive; closes down a legitimate concern.', fix:'Listen, say sorry for the distress, and offer a proper review.' },
        { dom:'cm', fail:'“The medical examiner is involved because something is suspicious.”', why:'Inaccurate; the review is routine for every death not investigated by a coroner.', fix:'Explain the statutory system plainly.' },
        { dom:'cm', fail:'Discouraging him from raising the concern to avoid delay.', why:'Undermines his right to raise concerns and the ME’s role.', fix:'Explain the routes and implications honestly; it is his choice.' },
        { dom:'cm', fail:'Promising “no post-mortem” or an outcome of the review.', why:'Not the GP’s decision; false promises damage trust.', fix:'Explain who decides and what you will do.' },
        { dom:'dg', fail:'Not inviting the concern at all.', why:'He only raises it if asked; it would resurface as a complaint.', fix:'“Is anything about his care troubling you?”' },
        { dom:'ro', fail:'Never asking how Daniel or his mother are.', why:'Misses guilt and a vulnerable widowed spouse.', fix:'Ask, acknowledge, offer support.' }
      ]
    },
    ceg:['Professional & ethical dilemmas','Older adults','Ethnicity, culture & diversity'],
    timeMap:[
      { t:'0–1', h:'Condolence and identity', d:'Sorry for your loss; son, executor; good time to talk.' },
      { t:'1–4', h:'His questions and the certificate', d:'What he knows; part I chain and part II contributing — COPD recorded.' },
      { t:'4–6', h:'Medical examiner and timing', d:'Routine statutory review; family conversation; registration within 5 days; GP to contact ME office about faith needs.' },
      { t:'6–9', h:'The concern', d:'Invite; listen; sorry for distress; routes: ME, practice review, meeting, complaint; honest about coroner and timing.' },
      { t:'9–12', h:'Him, his mother, plan', d:'Guilt; mother not eating; support; actions; documentation; safety-net.' }
    ],
    wordPics:{
      clearFail:'Defends the practice or dismisses the concern; gives wrong information about the ME or certificate; no condolence or support.',
      fail:'Explains some of the process but does not invite or properly handle the concern, or makes promises about post-mortem or outcome.',
      pass:'Offers condolence, explains the MCCD and ME process accurately, listens to the concern, apologises for the distress and explains how it will be looked at.',
      clearPass:'All of the above, plus: acts on the faith-related timing, is honest about the possible coroner route while respecting his choice, finds and responds to his guilt, reaches out to his mother, and agrees concrete documented actions.',
      exc:'All of the above, plus: acts on the faith-related timing, is honest about the possible coroner route while respecting his choice, finds and responds to his guilt, reaches out to his mother, and agrees concrete documented actions.'
    },
    avoid:[
      { dont:'“The medical examiner is just a formality.”', instead:'“It’s a routine independent check — and a chance for you to ask questions or raise concerns.”', why:'Accurate and empowering.' },
      { dont:'“A visit wouldn’t have made any difference.”', instead:'“I can’t say today — but we will look at it carefully and talk it through with you.”', why:'Avoid speculation either way.' },
      { dont:'“If you raise it, the funeral will be delayed.”', instead:'“If the examiner felt the coroner should know, it could affect timing. It’s your right to raise it, and I’ll support you.”', why:'Honest without discouraging.' }
    ],
    scTasks:[
      { dom:'dg', t:'Opens and explores the problem', d:'Condolence; confirms son and executor; lets him set out his questions.', pts:1 },
      { dom:'dg', t:'Explores psychosocial context', d:'Faith and burial timing; mother’s state; family relationships.', pts:1 },
      { dom:'dg', t:'Identifies and follows cues', d:'“Don’t know who to ask”, “bury as soon as we can”, “always breathless, but…”.', pts:1 },
      { dom:'dg', t:'Discovers ICE', d:'Idea (lungs; should have been seen), concern (delay, guilt, mother), expectation (explanation, burial, concern heard).', pts:2 },
      { dom:'dg', t:'Uses the records', d:'Reviews MCCD wording, the two telephone consultations and ME status before explaining.', pts:1 },
      { dom:'dg', t:'Generates and tests understanding', d:'Checks what the ME officer said and what he understood.', pts:1 },
      { dom:'dg', t:'Identifies risks', d:'Concern possibly requiring coroner notification; widowed mother at risk; son’s distress.', pts:2 },
      { dom:'dg', t:'Reaches a shared understanding', d:'Explains part I/part II and the ME role accurately.', pts:2 },
      { dom:'cm', t:'Offers a safe, person-centred plan', d:'Contacts ME office re timing; explains concern routes honestly; review and meeting offered.', pts:2 },
      { dom:'cm', t:'Manages wider issues', d:'Support for mother; bereavement services; documentation; informs certifying GP.', pts:1 },
      { dom:'cm', t:'Provides follow-up and safety net', d:'Calls mother tomorrow; follow-up after review; contact if not coping.', pts:1 }
    ]
  });
  /* ===== Q10. Concern about a colleague — alcohol ===== */
  C.push({
    id:'impaired-colleague',
    title:'“Can we talk privately? It’s not about a patient — it’s about Richard”',
    type:'video', duration:12,
    meta:{ age:54, sex:'F',
      setting:'Video — the practice’s senior nurse asks for a private call with you (a GP partner) during the lunchtime break.',
      system:'Professional / Patient safety — concern that a GP partner is impaired by alcohol: immediate safety, supportive escalation, GMC Good medical practice 2024, protecting the person who raised it',
      checked:CHECKED,
      blueprint:{ difficulty:3, lifeStage:'adult', groups:['Professional & ethical','Mental health & addiction'], type:'video', thirdParty:true } },
    brief:'Bernadette (Bernie) Walsh, 54, senior practice nurse, asks for a private video call with the candidate, who is a GP partner, at 12:40. She is worried about the senior partner, Dr Richard Hale, 61: she has smelled alcohol on him at 08:30 on three occasions this month, once his speech seemed slurred after lunch, and last week a community pharmacist intercepted a warfarin dosing error on his prescription. His wife left him three months ago. Today she smelled alcohol again at the start of surgery. He is due to run the minor surgery list at 14:00 (six patients) and is on call until 18:30. She wants it “kept quiet” — she does not want to get him into trouble, he is her line manager and a partner who influences her contract, and she has been quietly moving his patients. Hidden agenda: last week he said to her “sometimes I wonder what the point of any of it is”, and she is frightened for him; she also fears being blamed for not speaking up sooner. Task: listen, take the concern seriously and establish the facts; recognise the immediate patient-safety risk today; plan a private, supportive conversation with Richard before 14:00 with another partner or the practice manager, with the expectation that he does not see patients if impaired and gets home safely (not driving); recognise possible risk to his own wellbeing (suicidal thoughts) and act on it compassionately; then escalate appropriately — practice clinical lead/partners, the NHS England responsible officer for advice, occupational health, NHS Practitioner Health, LMC support, and GMC only if concerns are not resolved or patients remain at risk; document; and support and protect Bernie (no detriment for raising a concern; Freedom to Speak Up). Confidentiality cannot be promised where patient safety is at risk.',
    script:{
      opening:'“Thanks for taking this. I didn’t know who else to go to. It’s not about a patient — it’s about Richard. I think he’s been drinking. Before work. And I don’t want to get him into trouble, so I need this to stay between us. Can it?”',
      facts:[
        { topic:'What she has seen', text:'If asked for specifics: “Three mornings this month — the 2nd, the 9th and the 14th — I smelled alcohol when he came in at half eight. Not last night’s, fresh. On the 9th after lunch his words were a bit slurred and he was flushed. He keeps mints in his drawer now.”' },
        { topic:'Today', text:'Only if asked about today or whether he is in work now: “This morning. Same smell. He’s in his room doing paperwork now. He’s doing the minor ops list at two — six patients — and he’s on call till half six.”' },
        { topic:'The error', text:'If asked about any clinical concerns: “Last week the pharmacist rang about a warfarin prescription — he’d written 10 mg instead of 1 mg. It was caught. It’s been logged as a significant event but nobody connected it.” She has also noticed he is “behind with results, snappy, forgetting things”.' },
        { topic:'His life', text:'“His wife left him in July. He’s living on his own. He’s lost weight.” He drives to work.' },
        { topic:'Her worry about him', text:'Only if asked how Richard seems in himself or whether she is worried about him as a person: “Last week he said, ‘Sometimes I wonder what the point of any of it is.’ He laughed it off. I haven’t stopped thinking about it.”' },
        { topic:'Who else knows', text:'If asked: “I think Pam on reception has noticed. I’ve been moving some of his patients to other clinicians quietly.” She has not spoken to Richard, the practice manager or other partners.' },
        { topic:'Her position', text:'If asked how she is: “He’s my line manager. He signs off my hours. I’ve worked here fifteen years. If this goes wrong… And I should have said something weeks ago.”' },
        { topic:'What she wants', text:'“I want him to be OK. I want patients to be safe. I don’t want to be the one who ended his career.”' },
        { topic:'How to play it', text:'Anxious, loyal, slightly tearful; keeps checking “this stays between us?”. If the doctor promises complete confidentiality, look relieved — but if the doctor then does nothing about today’s list, stay uneasy. If the doctor says “I’ll have to report him to the GMC”, panic: “No — that’s exactly what I didn’t want.” If the doctor explains that patient safety comes first, that Richard will be approached supportively, and that she will be protected, agree: “OK. If it’s done kindly.” Reveal the “what’s the point” comment only if asked about Richard as a person. Reveal today’s smell and the 2 pm list only if asked about today.' }
      ],
      ice:{
        ideas:'“He’s drinking because his wife left. He needs help, not punishment.”',
        concerns:'HIDDEN AGENDA — Richard said “sometimes I wonder what the point of any of it is”, and she is frightened he may harm himself; she also feels guilty for not speaking sooner and fears consequences for her job because he is her line manager. She shares the comment only if asked about Richard as a person, and her own fears only if asked how she is.',
        expectations:'That the candidate will sort it out quietly without anyone knowing it came from her.'
      },
      cues:[
        '“I need this to stay between us. Can it?” — confidentiality that cannot be promised where patients are at risk.',
        '“He’s in his room now” (if asked about today) — an immediate patient-safety issue this afternoon.',
        '“I want him to be OK” — concern for a colleague’s wellbeing, opening the door to his risk.'
      ]
    },
    checkpoints:[
      { dom:'ro', text:'Thanks her, takes the concern seriously, and is honest early that complete confidentiality cannot be promised if patients may be at risk — while explaining her concern will be handled carefully and supportively' },
      { dom:'dg', text:'Establishes specific facts: dates and observations, whether today, his clinical duties this afternoon (minor surgery, on call), the warfarin error, other performance changes, who else knows' },
      { dom:'dg', text:'Asks about Richard as a person — life events, mood, and the “what’s the point” comment — recognising possible risk to his own safety' },
      { dom:'cm', text:'Acts on the immediate risk today: arranges a private conversation with Richard before 14:00 with another partner or the practice manager; if impaired or he does not deny it, he does not see patients; the list and on-call are covered; he does not drive home' },
      { dom:'cm', text:'Approaches Richard supportively, and responds to possible suicidal thoughts (asks directly, does not leave him alone if at risk, involves his GP, crisis support or NHS Practitioner Health)' },
      { dom:'cm', text:'Plans proportionate escalation in line with GMC Good medical practice 2024: inform the practice’s clinical lead/partners; seek advice from the NHS England responsible officer (performers list); occupational health; NHS Practitioner Health and LMC support for Richard; GMC referral if concerns are not addressed or patients remain at risk; link the warfarin significant event' },
      { dom:'cm', text:'Documents factual observations and actions (date, time, what was seen, what was done) and asks Bernie to write a factual account; explains the practice’s raising-concerns / Freedom to Speak Up route' },
      { dom:'ro', text:'Supports Bernie: acknowledges loyalty and fear, reassures that raising a concern was right and she will not be penalised, removes the burden of covering for him, and agrees to update her' }
    ],
    worked:[
      { lbl:'Honest about confidentiality', txt:'“Thank you for coming to me — I know that wasn’t easy. I want to be honest from the start: if patients might be at risk, I can’t promise this stays between us. But I can promise it will be handled carefully and kindly, and that you won’t be left exposed.”' },
      { lbl:'Facts', txt:'“Can you tell me exactly what you’ve noticed, and when? … And today — has anything happened this morning? What is he doing this afternoon?”' },
      { lbl:'Today’s risk', txt:'“Then the first thing is this afternoon. I’ll ask our practice manager to join me and we’ll speak to Richard privately before two. If he’s been drinking, he won’t do the list or the on-call — we’ll cover it — and we’ll make sure he gets home safely without driving.”' },
      { lbl:'Him as a person', txt:'“How does Richard seem in himself? … That comment worries me too. I’ll ask him directly how he’s feeling, including whether he’s had thoughts of harming himself, and make sure he isn’t left on his own if he is.”' },
      { lbl:'Supportive escalation', txt:'“After today this needs the right support, not a cover-up: the partners need to know, we’ll take advice from the responsible officer, and there’s a confidential service for doctors — NHS Practitioner Health. Going to the GMC is for if the risk isn’t being managed — it isn’t where we start.”' },
      { lbl:'Protecting Bernie', txt:'“You’ve done exactly what you should. Please stop moving his patients yourself — that’s not yours to carry. Could you write down the dates and what you saw, just facts? I’ll let you know what happens.”' }
    ],
    learning:'A concern that a colleague is impaired is a patient-safety issue first and a welfare issue at the same time. GMC Good medical practice (2024) requires doctors to act promptly when patient safety may be compromised — it overrides personal and professional loyalty — and to support colleagues. Deal with today first (a private, supportive conversation before the next clinical session; stand him down if impaired; get him home safely), recognise that doctors with alcohol problems and life crises are at increased risk of suicide, then escalate proportionately within the practice and to the responsible officer, while signposting confidential help (NHS Practitioner Health, LMC, occupational health). Never promise confidentiality you cannot keep, document facts, and protect the person who raised the concern.',
    knowledge:{
      guideline:'Sources: GMC Good medical practice (2024) · GMC Raising and acting on concerns about patient safety (2012) · NHS England Framework for managing performer concerns and The National Health Service (Performers Lists) (England) Regulations 2013 · Public Interest Disclosure Act 1998 · NHS Practitioner Health (self-referral service for doctors) · BMA / LMC guidance on supporting colleagues with health problems · National Guardian’s Office Freedom to Speak Up guidance',
      summary:'A nurse reports fresh alcohol on a GP partner’s breath before clinics, a dosing error and a worrying comment. Protect today’s patients, look after him, escalate supportively, document, and protect her.',
      points:[
        { h:'Recognise the concern', t:'Repeated smell of alcohol before clinics, slurred speech, a serious prescribing error, falling behind and personality change are reasonable grounds for concern — proof is not required to act.' },
        { h:'Red flags — immediate risk', t:'Impairment now with clinical work imminent (minor surgery, on-call), intention to drive, or any suggestion of suicidal thoughts. Act the same day.' },
        { h:'GMC duties', t:'Good medical practice (2024): take prompt action if patient safety, dignity or comfort is or may be seriously compromised; this duty overrides personal and professional loyalties. Support colleagues who are struggling, and do not treat colleagues inappropriately or ignore poor practice.' },
        { h:'Immediate steps', t:'Speak to the doctor privately with a second senior person; explain what has been observed; if impaired, he must not see patients; arrange cover; ensure safe transport home; check his wellbeing and suicide risk; do not leave him alone if at risk.' },
        { h:'Escalation', t:'Inform the partners/clinical lead and practice manager. GP concerns are handled through the NHS England responsible officer and the performers list process — seek advice early. Occupational health assessment. GMC referral (or advice from the GMC employer liaison adviser) if the concern is serious, unresolved, or patients remain at risk.' },
        { h:'Support for the doctor', t:'NHS Practitioner Health (confidential, self-referral service for doctors with mental health and addiction problems), his own GP, LMC pastoral support, BMA wellbeing support, Sick Doctors Trust. Doctors have higher suicide rates than the general population, particularly with alcohol misuse and relationship breakdown.' },
        { h:'Protecting the person who raises it', t:'Public Interest Disclosure Act 1998 protects workers who raise concerns in good faith from detriment. Use the practice’s raising-concerns/Freedom to Speak Up policy; she should not be left covering for him.' },
        { h:'Documentation', t:'Contemporaneous factual notes: dates, times, observations, who was present, actions taken and advice sought. Link the warfarin significant event to the review.' }
      ]
    },
    stem:{
      name:'Bernadette (Bernie) Walsh — senior practice nurse (colleague)', age:'54 years · female',
      pmh:['Not a patient consultation — staff concern','Senior practice nurse, 15 years at the practice; line-managed by Dr Richard Hale (senior partner)'],
      meds:['Not applicable'],
      allergy:'Not applicable',
      recent:'Message from Bernie at 12:30: “Could we talk privately on video before 2pm? Not about a patient.” Today’s rota: Dr R Hale — minor surgery list 14:00–16:30 (6 patients), duty/on-call doctor 16:30–18:30. Significant event log (last week): warfarin 10 mg prescribed instead of 1 mg (Dr Hale) — intercepted by community pharmacist; no harm.',
      reason:'Private video call with a colleague, 12:40.'
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hi Bernie, thanks for messaging. Are you somewhere private? Take your time.', dom:'ro', why:'Safe, private space' },
      { who:'pt', text:'It’s about Richard. I think he’s been drinking before work. I don’t want to get him into trouble — can this stay between us?' },
      { who:'dr', text:'Thank you for coming to me — that took courage. I’ll be honest: if patients might be at risk, I can’t promise it stays between us. But I promise it’ll be handled carefully and kindly, and you won’t be left exposed. Can you tell me what you’ve noticed?', dom:'ro', why:'Honest about confidentiality limits, supportive' },
      { phase:'Facts', clock:'1–4 min', who:'pt', text:'Three mornings this month I smelled fresh alcohol — the 2nd, 9th and 14th. On the 9th he was slurring after lunch. And the warfarin error last week.' },
      { who:'dr', text:'That’s really clear, thank you. What about today — has anything happened this morning, and what is he doing this afternoon?', dom:'dg', why:'Establishes immediate risk' },
      { who:'pt', text:'Same smell this morning. He’s doing the minor ops list at two and he’s on call till half six.' },
      { who:'dr', text:'And does anyone else know? Have you noticed anything else — results, memory, mood?', dom:'dg', why:'Broader picture' },
      { who:'pt', text:'Pam on reception, maybe. He’s behind, snappy. I’ve been moving some of his patients quietly.' },
      { phase:'Richard as a person', clock:'4–6 min', who:'dr', text:'How does Richard seem in himself, with everything that’s happened?', dom:'dg', why:'Invites the hidden concern about his wellbeing' },
      { who:'pt', text:'His wife left in July. Last week he said “sometimes I wonder what the point of any of it is.” He laughed it off.' },
      { who:'dr', text:'That worries me too. I’ll ask him directly how he’s feeling, including whether he’s had thoughts of harming himself, and make sure he isn’t left alone if he’s at risk.', dom:'cm', why:'Recognises and plans for suicide risk' },
      { phase:'Today', clock:'6–9 min', who:'dr', text:'So the first thing is this afternoon. I’ll ask the practice manager to join me and we’ll speak to Richard privately before two. If he has been drinking, he won’t do the list or the on-call — we’ll cover them — and we’ll make sure he gets home without driving.', dom:'cm', why:'Acts on today’s patient-safety risk' },
      { who:'pt', text:'Will you tell him it was me?' },
      { who:'dr', text:'I’ll talk about what has been observed, not who observed it. He may guess — and if he reacts badly towards you, that isn’t acceptable and you’ll be protected. You did exactly the right thing.', dom:'ro', why:'Protects the person raising the concern' },
      { phase:'Next steps', clock:'9–12 min', who:'dr', text:'After today, it needs proper support rather than a cover-up: the partners will need to know, we’ll take advice from the NHS England responsible officer, and I’ll encourage him to contact NHS Practitioner Health — a confidential service for doctors. The GMC is for if the risk isn’t being managed, not where we start. We’ll link it to the warfarin event.', dom:'cm', why:'Proportionate escalation in line with GMC guidance' },
      { who:'pt', text:'OK. If it’s done kindly.' },
      { who:'dr', text:'It will be. Please stop moving his patients yourself — that isn’t yours to carry. Could you write down the dates and what you saw, just the facts? I’m making a note of this call too. How are you doing?', dom:'ro', why:'Removes her burden; documentation; checks on her' },
      { who:'pt', text:'Relieved. Guilty I didn’t say sooner.' },
      { who:'dr', text:'You’ve said it now, and that matters. I’ll update you this afternoon.', dom:'ro', why:'Closes with support and a follow-up commitment' }
    ],
    kb:{
      social:[
        { h:'Loyalty and power', t:'Staff raising concerns about a partner or line manager fear for their jobs; practices must make it safe to speak up.' },
        { h:'Life events', t:'Relationship breakdown, isolation and weight loss alongside alcohol misuse raise concern about depression and suicide.' }
      ],
      legal:[
        { h:'Public Interest Disclosure Act 1998', t:'Protects workers who make protected disclosures from detriment or dismissal.' },
        { h:'Performers lists', t:'NHS England’s responsible officer manages concerns about GPs on the performers list and can take supportive or restrictive action.' },
        { h:'Drink-driving', t:'Preventing an impaired colleague from driving protects him and the public.' }
      ],
      professional:[
        { h:'GMC Good medical practice (2024)', t:'Act promptly on patient-safety concerns, support colleagues, and contribute to a culture where concerns are raised and acted on.' },
        { h:'Proportionality', t:'Start locally and supportively, escalate if the risk is not controlled; seek advice (responsible officer, GMC employer liaison adviser, defence organisation).' },
        { h:'Records', t:'Keep factual, dated notes of observations, conversations and actions.' }
      ],
      community:[
        { h:'Support for doctors', t:'NHS Practitioner Health, Sick Doctors Trust, BMA counselling and peer support, LMC pastoral support, DocHealth, Samaritans.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Impaired now with clinical sessions imminent','Intends to drive','Suicidal comments or hopelessness','Serious clinical errors'],
        psychosocial:['Recent separation; living alone','Nurse is his line report; fears for her job','Covering for him by moving patients'],
        ice:['Idea: drinking because his wife left; needs help not punishment','Concern: his safety; her job; her guilt','Expectation: quiet resolution, not identified']
      },
      diagnosis:'Reasonable concern that a GP partner is working while impaired by alcohol, with a related prescribing error and possible risk to his own life — an immediate patient-safety and colleague-welfare issue.',
      diagnosisLay:'“What you’ve seen is enough to act on today — for patients’ safety and for Richard’s sake.”',
      management:{
        reflectIce:'“You want him helped, not punished — and that’s how we’ll approach it, while keeping patients safe.”',
        psychosocial:'Protect Bernie; stop her covering; check on her; support Richard as a person.',
        sharedPlan:['Private conversation with Richard before 14:00 with the practice manager or another partner','If impaired: stand down from list and on-call; cover arranged; safe transport home','Ask directly about suicidal thoughts; not alone if at risk; urgent support','Inform partners/clinical lead; advice from NHS England responsible officer; occupational health','NHS Practitioner Health, his GP, LMC support; GMC if unresolved','Factual records from both; link warfarin significant event'],
        safetyNet:['If Richard refuses to stop clinical work while impaired — escalate same day (responsible officer; GMC advice)','If he is at immediate risk of self-harm — do not leave him alone; emergency services if needed']
      }
    },
    links:[
      { ic:'💊', t:'Alcohol — problem drinking', s:'Management protocol', href:'management/alcohol-problem-drinking.html' },
      { ic:'📋', t:'Alcohol', s:'Case walkthrough', href:'../cases/alcohol.html' },
      { ic:'💊', t:'Depression', s:'Management protocol', href:'management/depression.html' }
    ],
    pitfalls:{
      intro:'This station is failed by either colluding (“leave it with me, it stays between us”) and letting him run today’s list, or by jumping straight to a punitive GMC referral and forgetting he is a person at risk.',
      items:[
        { dom:'ro', fail:'Promising complete confidentiality.', why:'Cannot be kept where patients may be at risk; breaks trust later.', fix:'Be honest early about the limits.' },
        { dom:'dg', fail:'Not asking about today.', why:'Misses the 14:00 minor surgery list and on-call — the immediate risk.', fix:'“What is he doing this afternoon?”' },
        { dom:'cm', fail:'Planning a chat “next week”.', why:'Patients are at risk this afternoon.', fix:'Speak to him before the next session.' },
        { dom:'cm', fail:'“I’ll report him to the GMC.” as a first step.', why:'Disproportionate as a first response and ignores support and local processes.', fix:'Local, supportive action first, with responsible officer advice; GMC if unresolved.' },
        { dom:'dg', fail:'Not exploring his wellbeing.', why:'Misses a suicide-risk comment in a doctor with alcohol misuse and separation.', fix:'“How does he seem in himself?”' },
        { dom:'ro', fail:'Leaving Bernie carrying it.', why:'She is covering clinically and fears reprisal.', fix:'Stop the covering; protect her; update her.' }
      ]
    },
    ceg:['Professional & ethical dilemmas','Mental health & addiction'],
    timeMap:[
      { t:'0–1', h:'Safe space and honesty', d:'Privacy; thank her; limits of confidentiality.' },
      { t:'1–4', h:'Facts', d:'Dates, observations, warfarin error, performance; today; afternoon duties; who knows.' },
      { t:'4–6', h:'Richard as a person', d:'Separation; “what’s the point”; suicide risk recognised.' },
      { t:'6–9', h:'Today', d:'Private conversation before 14:00 with a second person; stand down if impaired; cover; no driving; protect Bernie.' },
      { t:'9–12', h:'Escalation and support', d:'Partners, responsible officer, OH, Practitioner Health, LMC; GMC if unresolved; factual notes; stop covering; update her.' }
    ],
    wordPics:{
      clearFail:'Promises secrecy and does nothing today, or goes straight to a punitive referral; no exploration of facts; ignores his wellbeing and her position.',
      fail:'Takes the concern seriously but misses today’s clinical risk or the suicide-risk comment, or gives a vague plan without escalation or documentation.',
      pass:'Establishes facts, acts on today’s risk with a private supportive conversation, plans appropriate escalation and support, documents and reassures the nurse.',
      clearPass:'All of the above, plus: honest about confidentiality from the start, finds and acts on the “what’s the point” comment, ensures he does not drive, uses proportionate escalation (responsible officer, Practitioner Health; GMC if unresolved), links the significant event, and protects and follows up with Bernie.',
      exc:'All of the above, plus: honest about confidentiality from the start, finds and acts on the “what’s the point” comment, ensures he does not drive, uses proportionate escalation (responsible officer, Practitioner Health; GMC if unresolved), links the significant event, and protects and follows up with Bernie.'
    },
    avoid:[
      { dont:'“Leave it with me — this stays between us.”', instead:'“I can’t promise that if patients may be at risk — but it will be handled carefully and kindly.”', why:'Honesty about confidentiality limits.' },
      { dont:'“Let’s keep an eye on him for a few weeks.”', instead:'“We need to speak to him before his list at two.”', why:'Today’s patients are at risk.' },
      { dont:'“He’ll have to be reported to the GMC.”', instead:'“We start with support and the right local process, and escalate if the risk isn’t managed.”', why:'Proportionate, supportive escalation.' }
    ],
    scTasks:[
      { dom:'dg', t:'Opens and explores the problem', d:'Private space; thanks her; open question; honesty about confidentiality.', pts:1 },
      { dom:'dg', t:'Explores context', d:'Separation, living alone, line-management relationship, who else knows.', pts:1 },
      { dom:'dg', t:'Identifies and follows cues', d:'“Stay between us?”, “in his room now”, “I want him to be OK”.', pts:1 },
      { dom:'dg', t:'Discovers ICE', d:'Idea (help not punishment), concern (his safety, her job, guilt), expectation (quiet resolution).', pts:2 },
      { dom:'dg', t:'Gathers specific evidence', d:'Dates, observations, warfarin error, performance changes; today’s smell.', pts:1 },
      { dom:'dg', t:'Considers explanations', d:'Alcohol misuse with possible depression; other causes of impairment considered.', pts:1 },
      { dom:'dg', t:'Identifies serious risk', d:'Today’s minor surgery and on-call; driving; suicide-risk comment.', pts:2 },
      { dom:'dg', t:'Reaches a working assessment', d:'Reasonable concern of impairment — immediate patient-safety and welfare issue.', pts:2 },
      { dom:'cm', t:'Offers a safe plan', d:'Private conversation before 14:00 with second person; stand down if impaired; cover; no driving.', pts:2 },
      { dom:'cm', t:'Escalates and supports appropriately', d:'Partners, responsible officer, OH, Practitioner Health, LMC; GMC if unresolved; documentation.', pts:1 },
      { dom:'cm', t:'Provides follow-up and safety net', d:'Protects Bernie; stops covering; updates her this afternoon; plan if Richard refuses.', pts:1 }
    ]
  });

  /* ---- Case-specific clinical scorecard items ----------------------
     sca-enrich.js (loaded later) rebuilds c.scorecard for every case from
     window.SCA_SC_TASKS or auto-generated items. These cases carry their
     own items in c.scTasks (each tagged dg or cm), so the accessor below
     keeps whatever scorecard structure the shared code builds and swaps
     in this case's own clinical items — legacy {tasks, ro, gs} or
     RCGP-domain {dg, cm, ro} shapes both work. */
  function sum(a){ return (a || []).reduce(function(s, x){ return s + (+x.pts || 0); }, 0); }
  function copy(a){ return a.map(function(x){ return { t:x.t, d:x.d, pts:x.pts, dom:x.dom }; }); }
  function guard(c){
    var mine = c.scTasks || [], store;
    function fit(v){
      if (!v || typeof v !== 'object' || !mine.length) return v;
      if (Array.isArray(v.tasks)) {
        v.tasks = copy(mine);
        v.maxTasks = sum(v.tasks);
        v.total = sum(v.tasks) + sum(v.ro) + sum(v.gs);
      }
      if (Array.isArray(v.dg) || Array.isArray(v.cm)) {
        v.dg = copy(mine.filter(function(x){ return x.dom === 'dg'; }));
        v.cm = copy(mine.filter(function(x){ return x.dom === 'cm'; }));
        if ('maxDg' in v) v.maxDg = sum(v.dg);
        if ('maxCm' in v) v.maxCm = sum(v.cm);
        if ('total' in v) v.total = sum(v.dg) + sum(v.cm) + sum(v.ro);
      }
      return v;
    }
    try {
      Object.defineProperty(c, 'scorecard', { configurable:true, enumerable:true,
        get:function(){ return store; }, set:function(v){ store = fit(v); } });
    } catch (e) { /* leave the default behaviour */ }
  }

  if (!window.SCA_CASES) return;
  var have = {};
  window.SCA_CASES.forEach(function(c){ have[c.id] = true; });
  C.forEach(function(c){
    if (have[c.id]) return;          // never duplicate an id
    guard(c);
    window.SCA_CASES.push(c);
  });
})();
