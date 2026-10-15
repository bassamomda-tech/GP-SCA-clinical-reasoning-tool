/* ============================================================
   Reasoning GP — SCA new cases, set P (upload 124)
   Ten new remote (video / telephone) cases: children & young
   people, sexual & reproductive health, HIV and inclusive care.
   Every field the SCA tools read is held INLINE on each case
   (stem, timeMap, wordPics, avoid, ceg, model, knowledge, kb,
   playbook, links, pitfalls, scorecard). Marking uses only the
   RCGP domains: dg (Data gathering & diagnosis), cm (Clinical
   management & medical complexity), ro (Relating to others);
   grades Clear pass / Pass / Fail / Clear fail.
   Loaded after the last sca-cases file and before sca-models.js.
   Educational, original cases; last checked October 2026.
   ============================================================ */
(function(){
  'use strict';

  /* ===== P1. Bronchiolitis — telephone, parent of a 4-month-old ===== */
  const p1 = {
    id:'bronchiolitis-phone',
    title:'“He’s got a cough and his breathing sounds noisy — is it just a cold?”',
    type:'telephone', duration:12,
    meta:{
      age:0.33, sex:'M (caller is his mother)',
      setting:'Telephone call-back to the mother of a 4-month-old baby.',
      system:'Paediatrics / Respiratory — bronchiolitis: remote severity assessment, reported apnoea, emergency referral',
      checked:'October 2026',
      blueprint:{ difficulty:2, lifeStage:'child', groups:['Children & young people','Urgent & unscheduled care'], type:'telephone', thirdParty:true }
    },
    brief:'Aisha Begum rings about her son Rayan, aged 4 months (born at 36+2 weeks, otherwise well), who has had a runny nose for 3 days and a cough and noisy, fast breathing since yesterday. His 3-year-old sister has a cold. Over the last 12 hours he has taken about half his usual feeds and had 2 wet nappies. The hidden agenda: last night he had a pause in his breathing of “a few seconds” and his lips looked dusky before he coughed and started again — Aisha only says this if asked directly about pauses or colour change, because she thinks she may have imagined it and is embarrassed to “waste an ambulance”. Reported apnoea is a red flag for immediate emergency referral (999), regardless of how he seems now. The candidate must assess severity remotely (breathing effort described by the parent, colour, feeding, nappies, alertness, temperature, risk factors), recognise the likely diagnosis of bronchiolitis, identify the apnoea, explain clearly and kindly why he needs an ambulance now, overcome practical barriers (no car, toddler at home, husband at work), and give interim advice. A candidate who reaches the right decision without asking about apnoea and feeding would be lucky; one who gives home-care advice without asking fails. Remote assessment must be honest about its limits.',
    script:{
      opening:'“Hi, thanks for calling back. It’s about my baby, Rayan — he’s four months. He’s had a cold since the weekend, but since yesterday he’s coughing a lot and his breathing sounds really noisy, sort of crackly and fast. My daughter had the same cold. Is it just a cold? Should I be giving him Calpol?”',
      facts:[
        { topic:'Timeline', text:'If asked: “Runny nose started Saturday — so three days. The cough and the noisy breathing started yesterday afternoon and it’s worse today.”' },
        { topic:'Breathing now', text:'If asked to describe or listen: “It’s fast — faster than normal. I can see his tummy going in and out a lot. I don’t think his ribs are sucking in, I’m not sure what that looks like.” If the doctor explains how to look under the vest: “Oh… yes, there’s a little dip under his ribs when he breathes.” No grunting noise. If asked to count breaths for a minute while the doctor times it: “I got fifty-eight.”' },
        { topic:'Colour now', text:'“His colour looks okay now. Pink. His lips are pink.”' },
        { topic:'Pauses / colour change (HIDDEN — only if asked directly)', text:'Hesitates, then: “Actually… last night, about 3 o’clock, he sort of stopped breathing for a few seconds. His lips looked a bit blue-grey, then he coughed and started again. I thought I might have imagined it — I was half asleep. It hasn’t happened since, that I’ve seen.”' },
        { topic:'Feeding', text:'If asked: “He’s bottle-fed. Normally he has about 150 ml every three to four hours. Since last night he’s only taking 60 or 70 ml before he gets tired and pulls off. He sweats a bit while feeding.”' },
        { topic:'Nappies', text:'“Only two wet nappies since last night — normally it’s six or so in a day. They’re not soaked.”' },
        { topic:'Alertness', text:'“He’s sleepier than normal but he wakes up and cries properly. He did smile at me this morning.” Not floppy. Cry is normal, not weak or high-pitched.' },
        { topic:'Temperature', text:'“I checked with the ear thermometer — 37.9 this morning. I haven’t given anything yet.”' },
        { topic:'Vomiting / rash / other', text:'“He brought up a bit of milk once after coughing. No rash. No diarrhoea.”' },
        { topic:'Birth and past history', text:'“He came at 36 weeks, a bit early. He didn’t need special care — we went home after two days. His jabs are up to date. No heart problems or anything that I know of.”' },
        { topic:'Home and practicalities', text:'“My husband Imran is at work — he’s a bus driver, he can’t just leave. I don’t drive. My daughter Mariam is three, she’s here with me. My mum lives ten minutes away.”' },
        { topic:'Smoking at home', text:'“No one smokes in the house.”' },
        { topic:'Pregnancy vaccine', text:'If asked: “I don’t think I had the RSV one in pregnancy — I had the whooping cough one.”' },
        { topic:'How to play this (role-player)', text:'Calm and articulate at first, getting more anxious as the call goes on. Do not mention the breathing pause unless asked directly about pauses, stopping breathing, going blue or colour change. If asked, disclose it with embarrassment. If the doctor advises an ambulance, first resist (“Is that really necessary? He seems okay now”) and raise Mariam and having no car; accept once the reason is explained clearly and a plan for Mariam is agreed (her mum can come over). If the doctor is dismissive or rushed, become quieter and agree to everything without understanding.' }
      ],
      ice:{
        ideas:'“I think it’s the cold my daughter had — maybe a chest infection. He might need antibiotics or some medicine for the breathing.”',
        concerns:'Underneath: she is frightened by what she saw at 3 am but worried she will be judged as an over-anxious mum or will “waste an ambulance”. She also worries about who will look after Mariam.',
        expectations:'Advice about Calpol and maybe a prescription; she does not expect to be told he needs to go to hospital.'
      },
      cues:[
        '“He’s sleepier than normal” — said quickly, then moves on.',
        'Slight hesitation when asked “anything else you’ve noticed?” — “No… I don’t think so.” (The pause in breathing is behind this.)',
        '“My husband can’t just leave work” — a practical barrier she raises if hospital is mentioned.'
      ],
    },
    checkpoints:[
      { dom:'dg', text:'Assesses breathing effort remotely and specifically — rate (asks the parent to count for a minute), visible recession, grunting, colour — and explains how to look' },
      { dom:'dg', text:'Asks directly about pauses in breathing or colour change (apnoea / cyanosis) and identifies the reported apnoea' },
      { dom:'dg', text:'Quantifies feeding (about half of usual volume) and wet nappies, and asks about alertness, temperature and risk factors (age, prematurity, heart or lung disease)' },
      { dom:'cm', text:'Recognises reported apnoea as a reason for immediate emergency referral (999 ambulance) and does not offer a home-care or next-day plan' },
      { dom:'cm', text:'Gives safe interim advice while waiting — stay with him, keep him upright for feeds, what to do if he stops breathing or goes blue again, bring the red book' },
      { dom:'cm', text:'Documents and hands over — informs the team/duty doctor as per local process and arranges a follow-up call or check that the ambulance has been called' },
      { dom:'ro', text:'Explores her worries and the practical barriers (no car, 3-year-old at home) and helps solve them rather than ignoring them' },
      { dom:'ro', text:'Explains the likely diagnosis (bronchiolitis) and why an ambulance is needed in plain language without frightening or blaming her; checks understanding' }
    ],
    worked:[
      { lbl:'Open and listen', txt:'“Thank you for ringing — you were right to call. Tell me about Rayan from the start.”' },
      { lbl:'Remote look', txt:'“Could you lift his vest so you can see his tummy and chest? I’ll time a minute — count each time his tummy rises. And look just under his ribs — is the skin sucking in with each breath?”' },
      { lbl:'Ask the hidden question', txt:'“Has there been any time he has stopped breathing, even for a few seconds, or gone blue or grey around the lips?”' },
      { lbl:'Name it and decide', txt:'“It sounds like bronchiolitis — a common virus that affects babies’ small airways. Most babies get through it at home, but a pause in breathing changes things. Babies his age can have more pauses, so I need him checked in hospital now, and the safest way is an ambulance.”' },
      { lbl:'Solve the barrier', txt:'“Can your mum come round for Mariam, or come with you? I’ll stay on the line while you ring 999 — or I can arrange it from here.”' },
      { lbl:'Interim safety', txt:'“While you wait: keep him with you and watch his breathing. If he stops breathing or goes blue, tell the 999 call handler straight away — they will guide you.”' }
    ],
    learning:'In a baby with bronchiolitis the remote consultation turns on a few questions: breathing effort (rate, recession, grunting), colour, feeding (under 50–75% of usual), wet nappies, alertness, and risk factors (under 3 months, prematurity especially under 32 weeks, chronic lung or significant heart disease, neuromuscular disease, immunodeficiency). Apnoea — observed OR reported — is a reason for immediate emergency referral even if the baby seems settled now; a reassuring voice on the phone does not cancel it. Parents rarely volunteer a pause in breathing, so ask directly. Home management (small frequent feeds, saline drops, paracetamol only for distress with fever, no antibiotics, salbutamol or steroids) is only right when red flags have been asked about and are absent, with clear safety-netting. Being honest about the limits of a telephone assessment and solving practical barriers (transport, siblings) are part of safe management.',
    stem:{
      name:'Rayan Ahmed (call from his mother, Aisha Begum)',
      age:'4 months · male',
      pmh:['Born 36+2 weeks by spontaneous vaginal delivery; home on day 2; no neonatal unit admission','6–8 week check (GP): normal, including heart sounds and hips','Immunisations up to date (16-week vaccines given)'],
      meds:['None'],
      allergy:'NKDA',
      recent:'Health visitor, 3 weeks ago: weight 6.1 kg (50th centile), bottle-fed, thriving. Reception note today 09:40: “Mum asking for a call — baby has a cough and cold, sounds wheezy.”',
      reason:'Telephone call-back to mother. Consent: mother has parental responsibility.'
    },
    ceg:['Children & young people','Urgent & unscheduled care'],
    timeMap:[
      { t:'0–2', h:'Open and listen', d:'Let mum tell the story. Confirm who you are speaking to and that the baby is with her.' },
      { t:'2–6', h:'Remote severity check', d:'Guide her to count breaths and look for recession; colour; grunting; pauses or blue spells; feeds as a fraction of usual; wet nappies; alertness; temperature; prematurity and other risk factors.' },
      { t:'6–8', h:'Name it and decide', d:'Bronchiolitis is likely; the reported pause in breathing means emergency referral now. Say it clearly.' },
      { t:'8–11', h:'Make it happen', d:'Solve transport and childcare; agree who rings 999 (or arrange it); interim advice; what to tell the call handler.' },
      { t:'11–12', h:'Close safely', d:'Check understanding, document, inform the team and agree a follow-up check.' }
    ],
    wordPics:{
      clearPass:'Takes a structured remote history with the mother as the eyes and ears, asks directly about pauses and colour change, quantifies feeding and nappies, recognises reported apnoea as a 999 trigger, explains bronchiolitis and the reason for the ambulance kindly, and solves the childcare and transport problem so the plan actually happens.',
      pass:'Identifies the apnoea and feeding drop and arranges emergency assessment, with reasonable explanation; practical barriers are addressed but less fully, or the remote assessment is less structured.',
      fail:'Assesses only some features and either misses the apnoea or recognises it but offers a delayed or same-day surgery appointment instead of emergency transfer; explanation is unclear or rushed.',
      clearFail:'Gives home-care advice (Calpol, fluids, “ring back if worse”) or antibiotics without asking about apnoea, feeding or breathing effort; dismisses the mother’s worry; no safe plan.'
    },
    avoid:[
      { dont:'“It’s just a cold — babies get lots of them. Give him Calpol and ring back if he gets worse.”', instead:'“Most coughs at this age are viral, but I need to ask some specific questions about his breathing and feeding before I can say how to look after him.”', why:'Reassurance before assessing severity misses the red flags that change the plan.' },
      { dont:'“Did he stop breathing? Probably not, if he’s fine now.”', instead:'“Thank you for telling me — that’s really important, and you were right to mention it.”', why:'Reported apnoea is a red flag even when the baby looks well afterwards; minimising it shuts the parent down.' },
      { dont:'“Take him to A&E when you can.”', instead:'“Because of the pause in his breathing, the safest way is an ambulance now — let’s sort out Mariam together.”', why:'A vague instruction with no plan for the barriers often leads to delay.' }
    ],
    model:[
      { phase:'Opening', clock:'0–2 min', who:'dr', text:'Hello, is that Aisha? It’s Dr Lewis from the surgery, calling back about Rayan. Is he with you now, and is now an okay time to talk?', dom:'ro', why:'Confirms identity, that the baby is present, and readiness' },
      { who:'pt', text:'Yes, he’s here on my lap. He’s got a cough and his breathing sounds noisy — is it just a cold?' },
      { who:'dr', text:'Tell me what’s been happening from the beginning.', dom:'ro', why:'Open question first' },
      { who:'pt', text:'Runny nose since Saturday, then since yesterday this cough and fast, crackly breathing. My daughter had the same cold.' },
      { phase:'Remote assessment', clock:'2–6 min', who:'dr', text:'I can’t see him, so I’d like you to be my eyes. Can you lift his vest? I’ll time a minute — count each time his tummy rises. And look just below his ribs: does the skin suck in with each breath?', dom:'dg', why:'Structured remote assessment of rate and recession, with clear instructions' },
      { who:'pt', text:'Fifty-eight… and yes, there’s a little dip under his ribs.' },
      { who:'dr', text:'Thank you, that’s really helpful. Is he making a grunting noise at the end of each breath? And what colour are his lips and tongue?', dom:'dg', why:'Grunting and central colour' },
      { who:'pt', text:'No grunting. His lips are pink now.' },
      { who:'dr', text:'Has there been any time he has stopped breathing, even for a few seconds, or gone blue or grey around the mouth?', dom:'dg', why:'Asks directly about apnoea — the hidden red flag' },
      { who:'pt', text:'Actually… last night, about three, he stopped for a few seconds and his lips looked bluey-grey, then he coughed and started again. I thought I might have imagined it.' },
      { who:'dr', text:'I’m really glad you told me — that’s important, and you haven’t done anything wrong. How is his feeding compared with normal, and how many wet nappies today?', dom:'dg', why:'Validates and continues to quantify feeding and hydration' },
      { who:'pt', text:'He’s only taking 60 or 70 ml instead of 150, and only two wet nappies since last night. He was born at 36 weeks.' },
      { phase:'Explanation and decision', clock:'6–8 min', who:'dr', text:'From what you describe, Rayan probably has bronchiolitis — a common virus that inflames the tiny airways in babies’ lungs. Most babies manage at home, but a pause in breathing, together with him feeding half his usual amount, means he needs to be checked in hospital now. The safest way is an ambulance.', dom:'cm', why:'Names the diagnosis and gives a clear emergency decision with the reason' },
      { who:'pt', text:'An ambulance? He seems okay now. And I’ve got my daughter here, and my husband’s at work.' },
      { who:'dr', text:'I understand — it feels a big step when he looks settled. The worry is that pauses can happen again, and in hospital they can watch his breathing and oxygen and help with feeds. Could your mum come for Mariam, or come with you both?', dom:'ro', why:'Acknowledges the concern, explains the risk, and works on the practical barrier' },
      { who:'pt', text:'My mum’s ten minutes away. I’ll ring her.' },
      { phase:'Make it happen and safety-net', clock:'8–12 min', who:'dr', text:'Ring 999 now and tell them he is 4 months old with bronchiolitis and stopped breathing for a few seconds last night. Keep him with you, upright if he coughs. If he stops breathing or goes blue again, tell the call handler straight away — they’ll talk you through what to do. Bring his red book.', dom:'cm', why:'Specific interim safety advice and what to say to 999' },
      { who:'pt', text:'Okay. Should I give him Calpol for the temperature?' },
      { who:'dr', text:'You can if he seems uncomfortable — the dose for his age is on the bottle, but please don’t delay the call for it. I’ll ring you back in 20 minutes to check the ambulance is on its way, and I’ll note this in his records for the hospital team. Can you tell me what you’re going to do now?', dom:'cm', why:'Follow-up check, documentation and teach-back' },
      { who:'pt', text:'Ring 999, ring my mum, and tell them about the pause.' },
      { who:'dr', text:'Exactly. You’ve done the right thing calling us today.', dom:'ro', why:'Supportive close that removes the fear of being judged' }
    ],
    knowledge:{
      guideline:'NICE NG9 Bronchiolitis in children: diagnosis and management (2015, updated 2021) · UKHSA Green Book chapter 27a: RSV (maternal vaccination programme since September 2024)',
      summary:'Bronchiolitis is a viral lower respiratory tract infection, usually RSV, in children under 2 (most often under 1). Diagnose clinically. The key primary care task is deciding who can stay at home: refer immediately for emergency care for apnoea (observed or reported), looking seriously unwell, severe respiratory distress (grunting, marked recession, rate over 70/min), central cyanosis or persistently low oxygen saturation.',
      points:[
        { h:'Diagnose clinically', t:'Coryzal prodrome for 1–3 days, then persistent cough with tachypnoea or recession, and wheeze or crackles. Fever is usually under 39 °C; high fever suggests another cause such as pneumonia.' },
        { h:'Red flags — emergency (999)', t:'Apnoea (observed or reported), seriously unwell appearance, severe respiratory distress (grunting, marked chest recession, respiratory rate over 70/min) or central cyanosis.' },
        { h:'Consider referral', t:'Respiratory rate over 60/min; feeding difficulty or inadequate fluid intake (50–75% of usual, using clinical judgement); clinical dehydration; persistent oxygen saturation under 92% on air. Lower the threshold with risk factors.' },
        { h:'Risk factors for severe illness', t:'Under 3 months, prematurity (especially under 32 weeks), chronic lung disease, haemodynamically significant congenital heart disease, neuromuscular disorders, immunodeficiency. Also consider distance from hospital and parental confidence.' },
        { h:'Remote assessment', t:'On the phone the parent is your eyes: ask them to count breaths for a full minute, look for recession under the ribs, listen for grunting, check lip and tongue colour, and quantify feeds and wet nappies. Be explicit when you cannot assess safely remotely.' },
        { h:'Home care when safe', t:'Small frequent feeds, saline nose drops if feeding is difficult, paracetamol or ibuprofen only for fever with distress. Do not use antibiotics, salbutamol, ipratropium, steroids or montelukast. Symptoms peak around days 3–5 and the cough can last 3–4 weeks.' },
        { h:'Safety-net', t:'Give clear advice: call 999 for pauses in breathing, blue colour or severe struggling to breathe; seek urgent review for reduced feeds, fewer wet nappies, worsening breathing or a very sleepy baby.' },
        { h:'Prevention', t:'RSV vaccination is offered in pregnancy from 28 weeks to protect babies in their first months.' }
      ]
    },
    kb:{
      social:[ { h:'Practical barriers', t:'Transport, siblings and a partner at work are common reasons for delay. Solving them is part of the management plan, not an afterthought.' } ],
      legal:[ { h:'Parental responsibility', t:'A parent with parental responsibility can consent for a 4-month-old. Record who you spoke to.' } ],
      professional:[ { h:'Limits of remote care', t:'GMC Good medical practice expects you to recognise and work within the limits of a remote consultation. If you cannot be sure a baby is safe, arrange face-to-face assessment at the right level of urgency, and document your reasoning.' } ],
      community:[ { h:'Parent information', t:'NHS “Bronchiolitis” pages and local “When should I worry?” leaflets give parents a traffic-light guide for the following days.' } ]
    },
    playbook:{
      history:{
        redFlags:['Pauses in breathing or blue/grey colour — ask directly','Grunting, marked recession, very fast breathing','Feeds under half to three-quarters of usual; few wet nappies','Very sleepy, floppy, weak or high-pitched cry'],
        psychosocial:['Who is at home; transport; siblings','Parental confidence and support (grandparent nearby)'],
        ice:['Idea: “just a cold” or a chest infection','Concern: worried about being judged as over-anxious','Expectation: Calpol advice or a prescription']
      },
      diagnosis:'Probable bronchiolitis with reported apnoea and reduced feeding in a 4-month-old born at 36 weeks — needs emergency hospital assessment.',
      diagnosisLay:'“It sounds like bronchiolitis, a common virus that swells the tiny breathing tubes in babies’ lungs. Most babies are fine at home, but the pause in his breathing means he needs checking in hospital straight away.”',
      management:{
        reflectIce:'“You thought it was the same cold as Mariam’s, and you were right that it started that way — but the pause in his breathing is the bit that needs hospital.”',
        psychosocial:'Plan childcare with grandmother; reassure that calling was the right thing; avoid any sense of blame.',
        sharedPlan:['999 ambulance now — agree who calls','What to tell the call handler','Bring red book; grandmother to look after Mariam'],
        safetyNet:['If he stops breathing or goes blue: tell 999 immediately','GP call-back in 20 minutes to confirm the ambulance is coming','Document and inform the duty team']
      }
    },
    links:[
      { ic:'🗺️', t:'Cough in children', s:'Pathway · remote assessment', href:'algorithms/cough-children.html' },
      { ic:'🗺️', t:'Fever in under-5s', s:'Traffic-light assessment', href:'algorithms/fever-children.html' },
      { ic:'💠', t:'Pre-school wheeze', s:'Protocol', href:'management/preschool-wheeze.html' }
    ],
    pitfalls:{
      intro:'This station is about one question most candidates forget to ask. The baby “sounds okay” on the phone; the mother saw something at 3 am that changes everything.',
      items:[
        { dom:'dg', fail:'Never asking about pauses in breathing or colour change.', why:'Reported apnoea is an emergency referral trigger, and parents rarely volunteer it.', fix:'Ask directly: “Has he ever stopped breathing, even for a few seconds, or gone blue or grey?”' },
        { dom:'dg', fail:'Accepting “he’s feeding okay-ish” without numbers.', why:'Feeding under 50–75% of usual and few wet nappies are the commonest reasons for admission.', fix:'Ask “how many ml normally, and how many now?” and “how many wet nappies today?”' },
        { dom:'cm', fail:'Arranging a same-day surgery appointment for a baby with reported apnoea.', why:'It delays emergency care and exposes the baby and other patients to risk.', fix:'999 ambulance, with interim advice and a call-back.' },
        { dom:'ro', fail:'Telling the mother to go to hospital but ignoring that she has a toddler and no car.', why:'An unworkable plan is not a safe plan.', fix:'Ask “what would make this hard?” and solve it together.' }
      ]
    },
    scorecard:{
      dg:[
        { t:'Opens and lets the parent tell the story', d:'Open question; confirms who is calling and that the baby is present.', pts:1 },
        { t:'Structured remote assessment of breathing', d:'Guides the parent to count breaths for a minute, look for recession, listen for grunting and check colour.', pts:2 },
        { t:'Asks directly about apnoea and cyanosis', d:'Finds the reported pause in breathing with dusky lips.', pts:2 },
        { t:'Quantifies feeding, nappies, alertness and fever', d:'About half usual feeds; 2 wet nappies; sleepier but rousable; 37.9 °C.', pts:1 },
        { t:'Identifies risk factors', d:'Age, prematurity, heart or lung disease, immune problems; RSV vaccine in pregnancy.', pts:1 }
      ],
      cm:[
        { t:'Recognises the emergency', d:'Reported apnoea = immediate emergency referral by ambulance; no home-care plan.', pts:2 },
        { t:'Makes the plan workable', d:'Agrees who rings 999, what to say, childcare for the sibling.', pts:2 },
        { t:'Interim advice and safety-net', d:'Watch his breathing; what to do if he stops breathing or turns blue; bring red book.', pts:1 },
        { t:'Follow-up and documentation', d:'Call-back to confirm the ambulance; records and informs the team.', pts:1 }
      ],
      ro:[
        { t:'Builds rapport on the phone', d:'Calm, warm voice; uses the baby’s name; thanks her for calling.', pts:1 },
        { t:'Explores ideas, concerns and expectations', d:'Hears her fear of being judged and her expectation of Calpol advice.', pts:1 },
        { t:'Explains in plain language', d:'Bronchiolitis and the reason for the ambulance explained simply, without blame.', pts:2 },
        { t:'Checks understanding', d:'Teach-back of the plan before ending the call.', pts:1 }
      ],
      maxDg:7, maxCm:6, maxRo:5, total:18
    }
  };

  /* ===== P2. New type 1 diabetes in a child — video, parent ===== */
  const p2 = {
    id:'new-t1dm-child',
    title:'“She’s drinking all the time and wetting the bed again — can she have a blood test next week?”',
    type:'video', duration:12,
    meta:{
      age:9, sex:'F (parent on video)',
      setting:'Video consultation with a mother; her 9-year-old daughter is in the room.',
      system:'Paediatrics / Endocrinology — suspected new type 1 diabetes: same-day paediatric referral, ketones and DKA red flags',
      checked:'October 2026',
      blueprint:{ difficulty:2, lifeStage:'child', groups:['Children & young people','Urgent & unscheduled care','New & undifferentiated presentations'], type:'video', thirdParty:true }
    },
    brief:'Folake Adeyemi, a healthcare assistant, books a video call about her daughter Tolu (9). For 3 weeks Tolu has been very thirsty, getting up at night to pass urine and has started wetting the bed again after being dry since age 4. Her school trousers are loose and she is tired. Last night Folake borrowed her father’s glucose meter (he has type 2 diabetes): it read 23.4 mmol/L. Folake asks for a blood test “next week”. Hidden agenda: she is due to start a night shift at 8 pm and has nobody for her 5-year-old son; she also privately fears she caused this by letting Tolu have fizzy drinks and sweets, because “that’s how my dad got diabetes”. Tolu is alert, no vomiting, breathing normally, mild tummy ache this morning. The task: recognise the classic presentation (polyuria, polydipsia, secondary enuresis, weight loss, tiredness) with a high capillary glucose as probable new type 1 diabetes; do not arrange routine tests (fasting glucose, HbA1c, glucose tolerance) that delay care; screen for DKA (vomiting, abdominal pain, fast or deep breathing, drowsiness, ketone smell); arrange same-day referral by phoning the on-call paediatric team and agree that Tolu attends today; explain why it is not her fault and address the work and childcare barrier; give 999 advice if she deteriorates before arrival.',
    script:{
      opening:'“Hi doctor. It’s about Tolu — she’s here with me. She’s been drinking loads, like constantly, and she’s started wetting the bed again, which she hasn’t done since she was little. My dad’s got diabetes so I checked her with his machine last night and it said 23. I just wanted to ask if she could have a proper blood test, maybe next week?”',
      facts:[
        { topic:'Thirst and urine', text:'If asked: “About three weeks. She’s drinking two or three big bottles of water a day and still thirsty. She’s up two or three times a night for a wee, and she’s wet the bed four times in the last week. She was dry from four.”' },
        { topic:'Weight', text:'“Her school trousers are falling down. I haven’t weighed her, but she’s definitely thinner in the face.” (Tolu can stand back from the camera so the doctor can see her — she looks slim but not unwell.)' },
        { topic:'Energy', text:'“She’s tired after school, falls asleep on the sofa. Her teacher said she’s been asking for the toilet a lot.”' },
        { topic:'Glucose reading', text:'“My dad’s meter said 23.4 last night, about two hours after tea. I washed her finger first. I didn’t check again this morning.”' },
        { topic:'Ketones', text:'“His meter doesn’t do ketones, I don’t think. I haven’t got any strips for that.”' },
        { topic:'DKA screen (answers if asked)', text:'No vomiting. “She said her tummy hurt a bit this morning but she ate some toast.” Breathing normal — not fast or deep. Not drowsy or confused; she is chatting on the call. No sweet or pear-drop smell on her breath that Folake has noticed.' },
        { topic:'Infection / other', text:'No fever, no cough, no stinging when passing urine. No thrush. No recent illness.' },
        { topic:'Past history and family', text:'“She’s always been healthy, just mild asthma — she hardly uses her blue inhaler.” Her grandfather has type 2 diabetes. No one in the family has type 1. No coeliac or thyroid problems known.' },
        { topic:'Home and work', text:'“It’s me and the two kids — Tolu and Daniel, he’s five. Their dad’s not around. I work nights at a care home, I’m on at 8 tonight.”' },
        { topic:'Tolu (if spoken to directly)', text:'“I’m always thirsty. I don’t like wetting the bed — please don’t tell anyone at school.” She is shy but answers simply.' },
        { topic:'HIDDEN — guilt', text:'Only if asked how she feels about it or what she thinks caused it: “Is it because I let her have fizzy drinks? My dad got his from sugar, the doctor told him. I feel awful.”' },
        { topic:'HIDDEN — tonight', text:'If hospital is mentioned: “Tonight? I’m on shift at eight… and I’ve no one for Daniel.” Then, if helped to think: “My sister could have him, I suppose. And I can ring my manager.”' },
        { topic:'How to play this (role-player)', text:'Practical, a bit rushed, slightly defensive at first because she works in care and “should have noticed sooner”. Hold back the guilt and the night-shift problem until asked or until hospital is mentioned. If the doctor says Tolu needs to go to hospital today, be shocked and push back once (“Can’t it wait until tomorrow?”). Accept if the reason is explained and the childcare and work problem is taken seriously. Become tearful if the doctor says it is not her fault.' }
      ],
      ice:{
        ideas:'“It might be diabetes like my dad — or maybe a water infection.”',
        concerns:'That she caused it with sugary drinks; that Tolu will need injections; losing pay or her job if she misses a shift.',
        expectations:'A routine blood test next week and a call with the result.'
      },
      cues:[
        '“My dad’s got diabetes” — her frame for what this might be.',
        '“I work nights” — mentioned quickly; the shift tonight matters to her.',
        'Glances at Tolu and lowers her voice when talking about the bedwetting.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Clarifies the classic features — thirst, polyuria and nocturia, secondary enuresis, weight loss, tiredness — and their duration' },
      { dom:'dg', text:'Asks about the glucose reading (technique, timing) and recognises a capillary glucose of 23.4 mmol/L with these symptoms as probable new type 1 diabetes' },
      { dom:'dg', text:'Screens for diabetic ketoacidosis — vomiting, abdominal pain, fast or deep breathing, drowsiness, breath smell — and uses the video to observe Tolu' },
      { dom:'cm', text:'Does not arrange routine or delayed tests (fasting glucose, HbA1c, glucose tolerance test) and explains why' },
      { dom:'cm', text:'Arranges same-day referral — phones the on-call paediatric team and agrees where and when Tolu attends today' },
      { dom:'cm', text:'Gives clear 999 advice for vomiting, drowsiness, fast or deep breathing or worsening tummy pain before she is seen, and documents the referral' },
      { dom:'ro', text:'Explores the mother’s guilt and explains that type 1 diabetes is not caused by sugar or anything she did' },
      { dom:'ro', text:'Takes the night shift and childcare barrier seriously and helps her make a workable plan; includes Tolu in the conversation in an age-appropriate way' }
    ],
    worked:[
      { lbl:'Acknowledge and gather', txt:'“Thank you for checking — that reading is really helpful. Can I ask a few questions about how Tolu is today?”' },
      { lbl:'DKA screen', txt:'“Has she been sick at all? Any tummy pain? Is her breathing fast or deep, or is she more sleepy than usual?”' },
      { lbl:'Name it', txt:'“Thirst, weeing a lot, wetting the bed again and losing weight, with a sugar of 23 — I think Tolu has probably developed type 1 diabetes. It’s different from your dad’s diabetes.”' },
      { lbl:'Why today', txt:'“With type 1 the body has stopped making insulin. Children can become unwell quickly, so the children’s team needs to see her today — not next week. Waiting for a blood test would only delay treatment.”' },
      { lbl:'Not her fault', txt:'“Type 1 isn’t caused by sweets or fizzy drinks. It happens when the immune system attacks the cells that make insulin. Nothing you did caused this.”' },
      { lbl:'Make it work', txt:'“I know you’re on shift tonight. Who could have Daniel? I can give you a letter for your manager. I’ll ring the paediatric team now and call you back within 30 minutes with where to go.”' }
    ],
    learning:'A child with thirst, polyuria, new bedwetting, weight loss or tiredness has type 1 diabetes until proven otherwise. If capillary glucose is high (over 11 mmol/L), or even on symptoms alone, refer the same day to the paediatric diabetes team — phone them. Do not arrange fasting glucose, HbA1c or a glucose tolerance test first: they delay diagnosis and a quarter or more of children present in DKA. Screen for DKA (vomiting, abdominal pain, Kussmaul breathing, drowsiness, ketotic breath): if present, this is an emergency (999). Explain clearly that type 1 diabetes is autoimmune and not caused by diet, and help the family overcome practical barriers to attending today. Video lets you see the child — use it.',
    stem:{
      name:'Tolu Adeyemi (video call with her mother, Folake Adeyemi)',
      age:'9 years · female',
      pmh:['Mild asthma — salbutamol inhaler, used rarely','Dry at night since age 4'],
      meds:['Salbutamol 100 micrograms inhaler, 2 puffs as needed (last issued 8 months ago)'],
      allergy:'NKDA',
      recent:'No consultations in the past year. eConsult from mother yesterday 21:15: “Daughter very thirsty for 3 weeks, wetting the bed. Checked with my dad’s machine: 23.4. Can she have a blood test next week?” Weight last recorded age 7: 24 kg.',
      reason:'Video consultation booked by mother. Consent: mother has parental responsibility; Tolu is present.'
    },
    ceg:['Children & young people','Urgent & unscheduled care','New & undifferentiated presentations'],
    timeMap:[
      { t:'0–2', h:'Open', d:'Greet both; let mum tell the story; say hello to Tolu.' },
      { t:'2–5', h:'Features and reading', d:'Duration, thirst, nocturia, enuresis, weight, energy; how the glucose was checked; infection symptoms.' },
      { t:'5–6', h:'DKA screen', d:'Vomiting, tummy pain, breathing, drowsiness, breath smell. Look at Tolu on camera.' },
      { t:'6–9', h:'Explain and decide', d:'Probable type 1 diabetes; same-day paediatric assessment; why tests next week would be wrong; not caused by sugar.' },
      { t:'9–12', h:'Make it happen', d:'Childcare, work letter, phone the paediatric team, call back; 999 advice; check understanding.' }
    ],
    wordPics:{
      clearPass:'Elicits the classic history, screens for DKA, names probable type 1 diabetes, refuses delaying tests with a clear explanation, phones the paediatric team for same-day assessment, dispels the mother’s guilt and solves the shift and childcare problem — while involving Tolu kindly.',
      pass:'Recognises probable type 1 diabetes and arranges same-day paediatric assessment with DKA safety-netting; explanation and handling of the guilt or practical barrier are adequate but less complete.',
      fail:'Suspects diabetes but arranges an urgent blood test or HbA1c first, or tells the family to “go to A&E if worried” without a direct referral; DKA screen incomplete.',
      clearFail:'Agrees to a routine blood test next week, reassures that it may be a urine infection, or misses the diagnosis; no DKA advice.'
    },
    avoid:[
      { dont:'“Let’s get a fasting blood sugar and HbA1c done and I’ll ring you with the results.”', instead:'“The reading and her symptoms already tell us enough — she needs to see the children’s team today.”', why:'Diagnostic tests in primary care delay treatment and increase the risk of DKA.' },
      { dont:'“Cutting out the fizzy drinks will help.”', instead:'“This type of diabetes isn’t caused by sugar — nothing you did caused it.”', why:'It reinforces guilt and is wrong for type 1 diabetes.' },
      { dont:'“Just take her to A&E.”', instead:'“I’ll phone the paediatric team now so they’re expecting her, and I’ll call you back with exactly where to go.”', why:'A direct referral is faster and safer than an unplanned A&E attendance.' }
    ],
    model:[
      { phase:'Opening', clock:'0–2 min', who:'dr', text:'Hello, it’s Dr Shah. I can see you and Tolu — hello Tolu. Folake, tell me what’s been worrying you.', dom:'ro', why:'Includes the child from the start; open question' },
      { who:'pt', text:'She’s drinking all the time and wetting the bed again. I checked her with my dad’s machine and it said 23. Can she have a blood test next week?' },
      { phase:'History', clock:'2–6 min', who:'dr', text:'Thank you — checking was a really sensible thing to do. How long has the thirst been going on, and how often is she getting up at night?', dom:'dg', why:'Duration and nocturia' },
      { who:'pt', text:'About three weeks. Up two or three times a night, wet the bed four times this week. Her trousers are falling down.' },
      { who:'dr', text:'How did you do the reading — had you washed her finger, and when had she last eaten?', dom:'dg', why:'Checks reliability of the reading' },
      { who:'pt', text:'I washed her hands. About two hours after tea.' },
      { who:'dr', text:'Has she been sick at all, had tummy pain, or been breathing fast or deeply? Is she more sleepy or muddled than usual?', dom:'dg', why:'DKA screen' },
      { who:'pt', text:'Her tummy hurt a bit this morning but she ate toast. No sick. She’s just tired.' },
      { who:'dr', text:'Tolu, can I ask you — are you feeling poorly right now, or just tired?', dom:'ro', why:'Involves the child directly' },
      { who:'pt', text:'(Tolu) Just thirsty. And tired.' },
      { phase:'Explanation and decision', clock:'6–9 min', who:'dr', text:'Folake, putting this together — the thirst, weeing a lot, the bedwetting, losing weight and a sugar of 23 — I think Tolu has probably developed type 1 diabetes. It’s a different condition from your dad’s.', dom:'cm', why:'Clear working diagnosis' },
      { who:'pt', text:'Oh God. Is it because I let her have fizzy drinks? That’s what happened to my dad.' },
      { who:'dr', text:'I can hear how worried you are. Type 1 diabetes is not caused by sugar or anything you did. The immune system attacks the cells that make insulin. It isn’t your fault.', dom:'ro', why:'Addresses the hidden guilt directly' },
      { who:'pt', text:'(tearful) Okay. So the blood test next week…' },
      { who:'dr', text:'Instead of a test next week, the children’s diabetes team needs to see her today. Without insulin, children can become very unwell quite quickly, and tests here would only delay her treatment.', dom:'cm', why:'Explains why routine tests are wrong and same-day referral is needed' },
      { who:'pt', text:'Today? I’m on a night shift at eight and I’ve nobody for Daniel.' },
      { phase:'Making it work and safety-net', clock:'9–12 min', who:'dr', text:'That’s a real problem, so let’s solve it. Is there anyone who could have Daniel? I can give you a note for your manager today.', dom:'ro', why:'Takes the practical barrier seriously' },
      { who:'pt', text:'My sister could have him. I’ll ring work.' },
      { who:'dr', text:'I’ll phone the on-call paediatric team now and ring you back within 30 minutes with where to go. If before then she is sick, gets bad tummy pain, starts breathing fast or deeply, or is hard to wake, call 999. Can you tell me back what we’ve agreed?', dom:'cm', why:'Direct referral, follow-up and specific DKA safety-net with teach-back' },
      { who:'pt', text:'You ring the hospital, I sort Daniel, and 999 if she’s sick or sleepy.' },
      { who:'dr', text:'Exactly. You spotted this early, which is really good for Tolu.', dom:'ro', why:'Supportive, positive close' }
    ],
    knowledge:{
      guideline:'NICE NG18 Diabetes (type 1 and type 2) in children and young people: diagnosis and management (2015, updated 2023) · BSPED guideline for the management of children and young people under 18 with DKA (2021)',
      summary:'Suspect type 1 diabetes in any child with polydipsia, polyuria (including new bedwetting), weight loss or tiredness. Refer on the same day to a multidisciplinary paediatric diabetes team. Do not delay with fasting glucose, HbA1c or glucose tolerance testing.',
      points:[
        { h:'Recognise the pattern', t:'The “4Ts”: Toilet (polyuria, nocturia, new bedwetting), Thirsty, Tired, Thinner. Also consider oral or genital thrush and recurrent infections.' },
        { h:'Capillary glucose', t:'A random capillary glucose above 11 mmol/L with symptoms makes diabetes very likely. If no meter is available, do not delay referral to obtain a reading.' },
        { h:'Red flags — DKA', t:'Vomiting, abdominal pain, fast or deep (Kussmaul) breathing, drowsiness or confusion, dehydration, ketotic breath. Any of these makes it an emergency: 999.' },
        { h:'Same-day referral', t:'Phone the on-call paediatric team; most children are assessed the same day on a paediatric assessment unit. Do not send a routine letter.' },
        { h:'Avoid delaying tests', t:'HbA1c, fasting glucose and glucose tolerance tests are not needed in primary care and delay treatment. Around a quarter of children in the UK present in DKA.' },
        { h:'Type 1 vs type 2', t:'Children usually have type 1 (autoimmune). Type 2 is more likely with obesity, family history, and certain ethnic backgrounds, but the initial action is the same: same-day referral.' },
        { h:'What happens next', t:'The paediatric diabetes team starts insulin, provides education, and screens for associated conditions such as coeliac and thyroid disease. Families get 24-hour advice lines and school support plans.' },
        { h:'Family support', t:'Diabetes UK and Digibete provide resources for children, families and schools.' }
      ]
    },
    kb:{
      social:[ { h:'Work and childcare', t:'Single parents on shift work face real barriers to same-day attendance. Offer a fit note or letter for the employer and help plan care for siblings.' } ],
      legal:[ { h:'Consent', t:'Mother has parental responsibility; involve Tolu in decisions in an age-appropriate way (Gillick principles apply to decisions as she matures).' } ],
      professional:[ { h:'Direct referral', t:'GMC Good medical practice: ensure safe handover. A phone call to the on-call team and a documented plan is safer than “go to A&E”.' } ],
      community:[ { h:'Resources', t:'Diabetes UK (children and families), Digibete videos, JDRF/Breakthrough T1D; school individual healthcare plan.' } ]
    },
    playbook:{
      history:{
        redFlags:['Vomiting, abdominal pain','Fast or deep breathing','Drowsiness or confusion','Dehydration'],
        psychosocial:['Single parent, night shifts, younger sibling','Grandfather with type 2 diabetes shapes her ideas','Tolu’s embarrassment about bedwetting'],
        ice:['Idea: diabetes like grandad, or a water infection','Concern: “Did I cause this?”; injections; losing pay','Expectation: a blood test next week']
      },
      diagnosis:'Probable new-onset type 1 diabetes without features of DKA — same-day paediatric referral.',
      diagnosisLay:'“Tolu’s body has probably stopped making insulin, the hormone that moves sugar from the blood into the body. That’s why she is thirsty, weeing a lot and losing weight. It needs treatment today.”',
      management:{
        reflectIce:'“You were expecting a blood test next week; the reading you took has already told us enough — she needs the children’s team today.”',
        psychosocial:'Plan care for Daniel; employer letter; reassure it is not her fault; involve Tolu.',
        sharedPlan:['GP phones the on-call paediatric team now','Call back within 30 minutes with where and when','Bring her inhaler and any readings'],
        safetyNet:['999 for vomiting, worsening tummy pain, fast or deep breathing, drowsiness','Document the referral and the advice given']
      }
    },
    links:[
      { ic:'🗺️', t:'Suspected diabetes in children', s:'Pathway · same-day referral', href:'algorithms/suspected-diabetes-children.html' },
      { ic:'🗺️', t:'Diabetic ketoacidosis', s:'Recognition and emergency action', href:'algorithms/dka.html' },
      { ic:'💠', t:'Type 1 diabetes', s:'Protocol', href:'management/type-1-diabetes.html' }
    ],
    pitfalls:{
      intro:'The parent offers you a comfortable plan — a blood test next week. Accepting it is the commonest way to fail this station.',
      items:[
        { dom:'cm', fail:'Arranging HbA1c or a fasting glucose “to confirm”.', why:'It delays treatment; children can develop DKA within days.', fix:'Same-day referral by phone. The paediatric team confirms the diagnosis.' },
        { dom:'dg', fail:'Not screening for DKA.', why:'The presence of vomiting, abdominal pain or Kussmaul breathing changes the urgency to 999.', fix:'Ask about each feature and look at the child on video.' },
        { dom:'ro', fail:'Ignoring the night-shift and childcare problem.', why:'The family may not attend, or may delay until morning.', fix:'Ask what would make it hard to go today and help solve it.' },
        { dom:'ro', fail:'Missing the mother’s guilt.', why:'Unaddressed guilt affects how families engage with lifelong management.', fix:'Ask what she thinks caused it, then explain type 1 is autoimmune.' }
      ]
    },
    scorecard:{
      dg:[
        { t:'Clarifies the classic symptoms', d:'Thirst, nocturia, secondary enuresis, weight loss, tiredness and duration.', pts:2 },
        { t:'Interprets the glucose reading', d:'Checks technique and timing; recognises 23.4 mmol/L with symptoms as probable type 1 diabetes.', pts:1 },
        { t:'Screens for DKA', d:'Vomiting, abdominal pain, breathing, drowsiness, breath smell; observes Tolu on video.', pts:2 },
        { t:'Considers other causes briefly', d:'UTI symptoms, infection, thrush.', pts:1 }
      ],
      cm:[
        { t:'Avoids delaying tests', d:'No HbA1c, fasting glucose or glucose tolerance test in primary care.', pts:2 },
        { t:'Same-day referral', d:'Phones the on-call paediatric team; agrees time and place.', pts:2 },
        { t:'Specific safety-net', d:'999 for DKA features before assessment; call-back arranged.', pts:1 },
        { t:'Documents and supports practically', d:'Records referral; offers employer letter.', pts:1 }
      ],
      ro:[
        { t:'Involves the child', d:'Speaks to Tolu directly and sensitively about the bedwetting.', pts:1 },
        { t:'Explores and addresses guilt', d:'Explains type 1 diabetes is not caused by sugar.', pts:2 },
        { t:'Works with practical barriers', d:'Childcare and night shift solved together.', pts:1 },
        { t:'Checks understanding', d:'Teach-back of the plan and red flags.', pts:1 }
      ],
      maxDg:6, maxCm:6, maxRo:5, total:17
    }
  };

  /* ===== P3. Speech and social communication concerns in a 2-year-old — video ===== */
  const p3 = {
    id:'developmental-delay',
    title:'“He’s two and he only says a few words — my mother-in-law says boys are just late talkers”',
    type:'video', duration:12,
    meta:{
      age:2, sex:'M (parent on video)',
      setting:'Video consultation with a mother; her 2-year-old son is playing in the room.',
      system:'Paediatrics / Neurodevelopment — speech and language delay with social communication features: hearing, autism referral, health visitor',
      checked:'October 2026',
      blueprint:{ difficulty:2, lifeStage:'child', groups:['Children & young people','Ethnicity, culture & diversity','New & undifferentiated presentations'], type:'video', thirdParty:true }
    },
    brief:'Zainab Hussein books a video call about her son Idris, aged 2 years 3 months. He says about 5 single words (Arabic and English), does not combine words, does not point to show her things, often does not respond to his name, lines up his cars and gets very upset with changes in routine. Gross motor development was normal (walked at 13 months). He had 4 ear infections last winter. The family speak Arabic and English at home. The health visitor 2-year review was missed (family moved house). The grandmother says “boys talk late and two languages confuse them”. Hidden agenda: Zainab’s nephew is autistic and she has been privately wondering about autism for months but is frightened of “a label” and of her husband’s reaction; she also worries she caused it by using the tablet to keep Idris quiet while she studies. No loss of skills. The task: take a developmental history covering speech, understanding, social communication, play, motor and hearing; ask about regression; observe Idris on video (with consent); explain that bilingualism does not cause delay; address the fear of a label and screen-time guilt; arrange a hearing test, referral for assessment (speech and language therapy and the local autism/neurodevelopmental pathway or community paediatrics), and health visitor input; safety-net for loss of skills.',
    script:{
      opening:'“Hi doctor. It’s about my son Idris — he’s two and a quarter. He only says a few words, maybe five. My mother-in-law says boys are late talkers and that because we speak Arabic and English he’s confused. But my friend’s little girl is the same age and she talks in sentences. I just want to know if I should be worried.”',
      facts:[
        { topic:'Words', text:'“He says ‘mama’, ‘baba’, ‘moya’ — that’s water — ‘car’ and ‘no’. He doesn’t put two words together. He used to babble a lot as a baby.”' },
        { topic:'Lost skills? (important negative)', text:'If asked if he has lost any words or skills: “No, he’s never lost anything — he just hasn’t really got going.”' },
        { topic:'Understanding', text:'“He understands ‘no’ and ‘bath’. If I say ‘get your shoes’ without pointing, he doesn’t really do it.”' },
        { topic:'Pointing and showing', text:'If asked: “He pulls my hand to what he wants. He doesn’t really point to show me things, like a plane in the sky.”' },
        { topic:'Name and eye contact', text:'“Sometimes he doesn’t turn when I call him — I wondered if he can’t hear. He looks at me sometimes but not much when I’m talking to him.”' },
        { topic:'Play', text:'“He loves his cars — he lines them up in a row and gets really upset if his sister moves them. He doesn’t do pretend play, like feeding a teddy.”' },
        { topic:'Routines and senses', text:'“He hates the hand-dryer and the hoover. He has to have the same blue cup.”' },
        { topic:'Motor and feeding', text:'“He walked at 13 months, he runs and climbs fine. He eats okay, a bit fussy.”' },
        { topic:'Hearing and ears', text:'“He had four ear infections last winter and the pharmacist gave drops once. He’s never had a hearing test since the newborn one — that was fine.”' },
        { topic:'Birth and family', text:'“Born on time, normal delivery, no problems.” If asked about family: “My nephew is autistic.” (Says this quietly — see hidden agenda.)' },
        { topic:'Home and screens', text:'“His sister is five. I’m studying nursing part-time. My husband works long hours at the restaurant.” If asked about screens: “He has the tablet a lot, maybe three hours a day, when I’m studying.”' },
        { topic:'Health visitor', text:'“We moved house in the spring and I never got the letter for the two-year check.”' },
        { topic:'Observation on video', text:'If the doctor asks to see Idris: Zainab turns the camera. Idris is lining up cars on the rug. When she calls “Idris!” he does not look up. When she holds up a biscuit and says his name again he looks at the biscuit, not her face. He makes a happy hand-flapping movement when a car falls over.' },
        { topic:'HIDDEN — autism fear', text:'If asked what she thinks or what worries her most: “I’ve been thinking… could it be autism? Like my nephew. I didn’t want to say because my husband will be upset — he says nothing’s wrong. I don’t want him to have a label.”' },
        { topic:'HIDDEN — guilt', text:'If screens come up, or if asked if she has any other worries: “Did I cause it, with the tablet? I feel so guilty.”' },
        { topic:'How to play this (role-player)', text:'Warm, articulate, a little anxious; keep glancing towards Idris. Lead with the grandmother’s view, not your own. Only raise autism if the doctor gives you space or asks directly what you are worried about. If the doctor says “it’s probably nothing”, look relieved but uneasy and ask “are you sure?” once. If the doctor explains assessment as a way to get help rather than a label, relax and become engaged.' }
      ],
      ice:{
        ideas:'Her own idea (held back): autism. The family idea: bilingual confusion or a “late talker”.',
        concerns:'A label that follows him; her husband’s reaction; that screen time caused it; waiting lists.',
        expectations:'To be told whether to worry, and what she can do now.'
      },
      cues:[
        '“My nephew is autistic” — said quietly, then she changes the subject.',
        '“I wondered if he can’t hear” — an opening to discuss hearing.',
        'Looks away when mentioning the tablet.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Takes a developmental history across domains — expressive and receptive language, social communication (pointing, response to name, eye contact, pretend play), restricted or repetitive behaviours, motor skills' },
      { dom:'dg', text:'Asks specifically about loss of skills (regression) and about hearing and ear infections' },
      { dom:'dg', text:'Uses the video to observe Idris (with consent) and summarises the observed social communication features' },
      { dom:'cm', text:'Arranges a hearing assessment (audiology) and explains why' },
      { dom:'cm', text:'Refers for specialist assessment — speech and language therapy and the local autism/neurodevelopmental pathway or community paediatrics — and involves the health visitor for the missed 2-year review' },
      { dom:'cm', text:'Gives practical things to do while waiting (keep both languages, short phrases, reduce screen time, play together) and a safety-net for loss of skills or new concerns' },
      { dom:'ro', text:'Elicits the mother’s own worry about autism, responds to the fear of a label, and explains assessment as a route to support' },
      { dom:'ro', text:'Addresses guilt about screen time and the myth that bilingualism causes delay, without blaming; offers to involve her husband' }
    ],
    worked:[
      { lbl:'Get her view', txt:'“Your mother-in-law has one view — what do you think is going on?”' },
      { lbl:'Social communication', txt:'“Does he point to show you something interesting, like a dog or a plane? Does he bring you toys just to share them? When you call his name, does he turn?”' },
      { lbl:'Regression', txt:'“Has he ever lost any words or skills he used to have?”' },
      { lbl:'Bilingual myth', txt:'“Learning two languages doesn’t cause speech delay. Please keep speaking Arabic at home — it helps him.”' },
      { lbl:'Name the possibility honestly', txt:'“Some of what you describe — not pointing, not turning to his name, lining things up — can be signs of autism. I can’t diagnose that today, but it’s worth a proper assessment, alongside a hearing test.”' },
      { lbl:'Label vs support', txt:'“An assessment isn’t about putting a label on Idris. It’s about understanding how he learns so he gets the right help early — at nursery and at home.”' }
    ],
    learning:'Speech delay at 2 needs a developmental history beyond words: understanding, pointing and showing, response to name, eye contact, pretend play, repetitive behaviours, sensory differences, motor skills and hearing. Always ask about regression — loss of skills needs urgent referral. Bilingualism does not cause language delay. Arrange a hearing test, involve the health visitor, refer to speech and language therapy, and when there are social communication concerns refer to the local autism (neurodevelopmental) pathway, as NICE recommends, rather than waiting to see. On video you can observe the child — ask permission and describe what you see. Explore the parent’s own concern: many parents fear “a label” or blame themselves; framing assessment as a route to support helps.',
    stem:{
      name:'Idris Hussein (video call with his mother, Zainab Hussein)',
      age:'2 years 3 months · male',
      pmh:['Newborn hearing screen: clear response both ears','4 GP/pharmacy contacts for ear infections last winter','Moved into practice area 6 months ago'],
      meds:['None'],
      allergy:'NKDA',
      recent:'Health visiting team (records transferred): 12-month review normal — walking with support, babbling, 2 words. 2–2½ year review: invited at previous address — not attended. Immunisations up to date.',
      reason:'Video consultation booked by mother: “worried about his speech”.'
    },
    ceg:['Children & young people','Ethnicity, culture & diversity','New & undifferentiated presentations'],
    timeMap:[
      { t:'0–2', h:'Open', d:'Hear the concern and the family’s views; ask what she thinks.' },
      { t:'2–6', h:'Developmental history', d:'Words and understanding; pointing, name, eye contact, play; routines and senses; motor; hearing; regression; family history.' },
      { t:'6–7', h:'Observe on video', d:'Ask permission to watch Idris play; call his name; describe what you see.' },
      { t:'7–10', h:'Explain and plan', d:'Bilingualism myth; possible social communication difficulty; hearing test, SLT, autism pathway, health visitor.' },
      { t:'10–12', h:'Support and safety-net', d:'What to do at home; screen time without blame; involve dad; loss of skills = contact us urgently.' }
    ],
    wordPics:{
      clearPass:'Takes a broad developmental history including social communication and regression, observes the child on video, names the possibility of autism honestly and kindly, arranges hearing, speech and language and neurodevelopmental assessment with health visitor input, dispels the bilingual myth and screen-time guilt, and frames assessment as support.',
      pass:'Covers speech, hearing and some social communication features; refers for hearing and speech and language therapy and involves the health visitor; recognises possible autism but explores the mother’s fears less fully.',
      fail:'Focuses on number of words only; reassures “wait and see” or refers only to speech therapy without considering hearing or social communication; misses the mother’s concern.',
      clearFail:'Agrees that two languages are the cause or advises dropping Arabic; no hearing test, no referral; dismissive of the mother.'
    },
    avoid:[
      { dont:'“Try speaking only English at home so he isn’t confused.”', instead:'“Keep using both languages — the language you’re most fluent in is the best one for talking and playing with him.”', why:'Bilingualism does not cause delay; dropping the home language reduces language input.' },
      { dont:'“Lots of boys talk late — let’s see how he is in six months.”', instead:'“Some of what you’re describing is more than late talking, so I don’t want to wait — let’s get his hearing and development checked now.”', why:'Watchful waiting delays assessment when social communication features are present.' },
      { dont:'“It sounds like autism.”', instead:'“Some of these can be signs of autism; an assessment will tell us more and help him get support.”', why:'You cannot diagnose on one video call, but you should be honest about the possibility.' }
    ],
    model:[
      { phase:'Opening', clock:'0–2 min', who:'dr', text:'Hello Zainab, I’m Dr Patel. I can see Idris playing behind you. Tell me what’s worrying you about his speech.', dom:'ro', why:'Open start that notices the child' },
      { who:'pt', text:'He only says about five words. My mother-in-law says boys talk late and two languages confuse him.' },
      { who:'dr', text:'That’s her view — what do you think is going on?', dom:'ro', why:'Seeks the parent’s own idea' },
      { who:'pt', text:'I’m not sure. My friend’s daughter talks in sentences.' },
      { phase:'Developmental history', clock:'2–6 min', who:'dr', text:'Let me ask about different areas. How much does he understand — if you say “get your shoes” without pointing, does he do it?', dom:'dg', why:'Receptive language' },
      { who:'pt', text:'Not really. He understands “no” and “bath”.' },
      { who:'dr', text:'Does he point to show you something interesting, like a plane? When you call his name, does he turn to you?', dom:'dg', why:'Social communication — joint attention and response to name' },
      { who:'pt', text:'He pulls my hand to what he wants. He doesn’t always turn — I wondered if he can’t hear.' },
      { who:'dr', text:'That’s a really important question, and we’ll check his hearing. Has he ever lost words or skills he used to have?', dom:'dg', why:'Acknowledges the cue and asks about regression' },
      { who:'pt', text:'No, never. He just hasn’t really got going. He lines up his cars and gets upset if they’re moved.' },
      { who:'dr', text:'Is there anyone in the family with speech difficulties or autism?', dom:'dg', why:'Family history' },
      { who:'pt', text:'(quietly) My nephew is autistic.' },
      { phase:'Observation', clock:'6–7 min', who:'dr', text:'Would it be okay to watch Idris for a minute? Could you call his name, and then hold up something he likes?', dom:'dg', why:'Uses the video to observe with consent' },
      { who:'pt', text:'(Idris doesn’t look up, then looks at the biscuit, not at her face, and flaps his hands.)' },
      { phase:'Explanation', clock:'7–10 min', who:'dr', text:'Thank you. You mentioned your nephew — is autism something you’ve been wondering about?', dom:'ro', why:'Returns to the cue sensitively' },
      { who:'pt', text:'Yes… I didn’t want to say. My husband will be upset, and I don’t want him labelled. And I wonder if the tablet caused it.' },
      { who:'dr', text:'I’m glad you told me. Two languages don’t cause speech delay, and screen time doesn’t cause autism. Some things you describe — not pointing, not turning to his name, lining things up — can be signs of autism, but they can have other causes too, including hearing. An assessment isn’t about a label; it’s about understanding Idris so he gets the right help early.', dom:'ro', why:'Dispels myths and guilt, names the possibility honestly, reframes the label' },
      { who:'dr', text:'So I’d like to do three things: refer him for a hearing test, refer him to speech and language therapy and to the local team that assesses children’s development and autism, and ask the health visitor to visit for the two-year review.', dom:'cm', why:'Clear, guideline-based plan' },
      { phase:'Support and safety-net', clock:'10–12 min', who:'dr', text:'While you wait: keep talking Arabic with him, use short phrases about what he’s doing, have some screen-free playtimes together. If he ever loses words or skills, or you’re worried about his hearing or behaviour, contact us straight away. Would it help if your husband joined a call with us?', dom:'cm', why:'Practical advice, safety-net for regression, involves the father' },
      { who:'pt', text:'Yes, I think that would help. Thank you for taking me seriously.' }
    ],
    knowledge:{
      guideline:'NICE CG128 Autism spectrum disorder in under 19s: recognition, referral and diagnosis (2011, updated 2017) · Healthy Child Programme 2–2½ year review (OHID, current) · RCSLT guidance on bilingualism and speech and language development',
      summary:'Speech delay at age 2 needs a full developmental view. Social communication concerns (pointing, response to name, eye contact, pretend play, repetitive behaviours), regression, or parental concern about autism warrant referral to the local autism (neurodevelopmental) team, plus hearing assessment and speech and language therapy.',
      points:[
        { h:'Red flags for speech', t:'No babble by 12 months, no words by 18 months, no two-word phrases by 2 years 6 months, poor understanding, or any loss of skills.' },
        { h:'Autism signs at this age', t:'Absent or reduced pointing to show, reduced response to name, limited eye contact or shared enjoyment, no pretend play, repetitive play (lining up), rigid routines, sensory sensitivities, hand-flapping.' },
        { h:'Regression', t:'Loss of language or social skills at any age needs referral to a specialist (community paediatrics) promptly; consider neurological causes.' },
        { h:'Hearing', t:'A normal newborn screen does not exclude later hearing loss; recurrent otitis media and glue ear are common. Refer for audiology.' },
        { h:'Bilingualism', t:'Bilingual children reach milestones within the normal range; count words in both languages. Advise families to keep the home language.' },
        { h:'Referral', t:'Refer to the autism team or neurodevelopmental pathway if there are concerns about possible autism; do not delay referral by waiting for a speech therapy outcome. Speech and language therapy is often available by self-referral.' },
        { h:'Health visitor', t:'Arrange the missed 2–2½ year review, which uses ASQ-3; health visitors support families while waiting.' },
        { h:'While waiting', t:'Responsive talking, short phrases, following the child’s lead, shared reading, reducing background screen time. Support parents’ wellbeing; nursery funding and early support do not require a diagnosis.' }
      ]
    },
    kb:{
      social:[ { h:'Family beliefs', t:'Grandparents’ views and fear of stigma can delay help. Offer a joint conversation with both parents.' } ],
      legal:[ { h:'SEND support', t:'Under the Children and Families Act 2014, early years settings must support children with special educational needs; a diagnosis is not needed to access help.' } ],
      professional:[ { h:'Honesty', t:'GMC Good medical practice: share uncertainty honestly. Do not diagnose autism on one consultation, but do not falsely reassure.' } ],
      community:[ { h:'Support', t:'National Autistic Society; local parent carer forum; Speech and Language UK; health visiting team.' } ]
    },
    playbook:{
      history:{
        redFlags:['Loss of words or skills','Not responding to sounds or name','No pointing, limited eye contact, no pretend play'],
        psychosocial:['Bilingual home; grandmother’s views','Mother studying; father works long hours; sibling','Moved house; missed health visitor review'],
        ice:['Idea: autism (held back) vs “late talker”','Concern: label, husband’s reaction, screen-time guilt','Expectation: whether to worry, what to do']
      },
      diagnosis:'Expressive and receptive language delay with social communication differences — possible autism; hearing not yet assessed. No regression.',
      diagnosisLay:'“Idris is behind with his talking and understanding, and some of how he plays and connects with people is different. That could be his hearing, or it could be autism, or a mix. The tests will help us understand him and get him the right help.”',
      management:{
        reflectIce:'“You came wanting to know if you should worry. You were right to bring him — and it’s not caused by the tablet or by speaking Arabic.”',
        psychosocial:'Offer a joint call with dad; support for mother’s studies and wellbeing; nursery input.',
        sharedPlan:['Audiology referral','Speech and language therapy and autism/neurodevelopmental pathway referral','Health visitor 2-year review'],
        safetyNet:['Loss of skills or new concerns: contact the practice promptly','Review after the hearing test result']
      }
    },
    links:[
      { ic:'🗺️', t:'Developmental delay', s:'Pathway', href:'algorithms/developmental-delay.html' },
      { ic:'🗺️', t:'Speech delay in children', s:'Pathway · red flags', href:'algorithms/speech-delay-children.html' },
      { ic:'📋', t:'Autism', s:'Case walkthrough', href:'../cases/autism.html' }
    ],
    pitfalls:{
      intro:'The station rewards seeing the whole child, not counting words. The mother’s own worry is hiding behind her mother-in-law’s opinion.',
      items:[
        { dom:'dg', fail:'Asking only how many words he says.', why:'Misses the social communication features that change the referral route.', fix:'Ask about pointing, name, eye contact, pretend play and routines.' },
        { dom:'dg', fail:'Not asking about regression.', why:'Loss of skills needs prompt specialist assessment.', fix:'“Has he ever lost words or skills?”' },
        { dom:'cm', fail:'“Wait and see” or speech therapy only.', why:'Delays autism assessment and misses hearing loss.', fix:'Hearing test plus SLT plus neurodevelopmental referral, health visitor.' },
        { dom:'ro', fail:'Never asking what the mother thinks.', why:'Her fear of a label and guilt shape whether she will engage.', fix:'“What do you think is going on?” and respond to the nephew cue.' }
      ]
    },
    scorecard:{
      dg:[
        { t:'Broad developmental history', d:'Expressive and receptive language, social communication, play, routines, sensory, motor.', pts:2 },
        { t:'Regression and hearing', d:'Asks about loss of skills; ear infections; hearing concerns.', pts:2 },
        { t:'Uses the video', d:'Observes with consent; calls his name; describes findings.', pts:1 },
        { t:'Family and social context', d:'Family history of autism; bilingual home; missed review.', pts:1 }
      ],
      cm:[
        { t:'Hearing assessment', d:'Audiology referral with explanation.', pts:1 },
        { t:'Appropriate referrals', d:'SLT and autism/neurodevelopmental pathway; health visitor.', pts:2 },
        { t:'Practical advice while waiting', d:'Keep home language, short phrases, play, screen-free time.', pts:1 },
        { t:'Safety-net and follow-up', d:'Loss of skills = contact promptly; review after hearing test.', pts:1 }
      ],
      ro:[
        { t:'Elicits the hidden concern', d:'Picks up the nephew cue; mother voices autism worry.', pts:2 },
        { t:'Responds to fear of a label', d:'Assessment framed as access to support.', pts:1 },
        { t:'Addresses guilt and myths', d:'Bilingualism and screens explained without blame.', pts:1 },
        { t:'Involves the wider family', d:'Offers a joint conversation with dad.', pts:1 }
      ],
      maxDg:6, maxCm:5, maxRo:5, total:16
    }
  };

  /* ===== P4. Neonatal jaundice day 5 — telephone ===== */
  const p4 = {
    id:'neonatal-jaundice',
    title:'“My baby looks a bit yellow and she’s really sleepy — is that normal?”',
    type:'telephone', duration:12,
    meta:{
      age:0.01, sex:'F (caller is her mother)',
      setting:'Telephone call from the mother of a 5-day-old baby.',
      system:'Neonatal / Paediatrics — jaundice on day 5: same-day bilirubin measurement, feeding and red flags',
      checked:'October 2026',
      blueprint:{ difficulty:2, lifeStage:'child', groups:['Children & young people','Urgent & unscheduled care'], type:'telephone', thirdParty:true }
    },
    brief:'Chloe Evans, a first-time mother, phones about her daughter Freya, 5 days old, born at 38+5 weeks, breastfed. The community midwife on day 3 noted mild jaundice of the face and chest and a 7.7% weight loss; the next midwife visit is tomorrow. Today Freya looks “more yellow — her tummy and legs too, and the whites of her eyes”, is sleepier, needs waking for feeds and feeds for only a few minutes; 3 wet nappies in 24 hours; stools are yellow (not pale), urine pale. No fever. Hidden agenda: Chloe is struggling with breastfeeding and fears she is “starving her” and that the hospital will make her give formula; her partner has gone back to work today and she is alone and tearful. The task: take a focused history by phone (onset, extent, feeding, nappies, stools and urine colour, alertness, temperature, risk factors), recognise that visible jaundice after 24 hours needs a bilirubin measurement within 6 hours, that her sleepiness and poor feeding increase concern, and arrange same-day assessment through the local pathway (midwife or neonatal/postnatal unit) — not tomorrow’s routine visit. Ask about pale stools and dark urine (conjugated jaundice). Screen for danger signs (very hard to wake, floppy, high-pitched cry, arching, fever, not feeding at all → 999/ED). Support breastfeeding and maternal wellbeing, including mood.',
    script:{
      opening:'“Hi, sorry to bother you. My baby Freya is five days old and she looks a bit yellow — more than when the midwife came. And she’s really sleepy. Is that normal? The midwife’s not due till tomorrow.”',
      facts:[
        { topic:'When it started', text:'“The midwife said her face was a bit yellow on Tuesday — that was day three. I didn’t notice it on the first day in hospital. Today it’s her tummy and her legs, and the whites of her eyes look yellow.”' },
        { topic:'Skin check (if guided)', text:'If asked to press gently on her nose or chest and look at the skin colour in daylight: “Yes, it’s yellow underneath when I press. And her gums look yellowish.”' },
        { topic:'Sleepiness', text:'“I have to wake her for feeds. She opens her eyes and looks at me, then goes back to sleep. She’s not floppy — she grips my finger.” Cry: “normal, not high-pitched.” No arching or stiffness.' },
        { topic:'Feeding', text:'“Breastfeeding. She feeds maybe six or seven times a day, but only for five minutes and then she falls asleep. My milk came in yesterday I think. It hurts — my nipples are cracked.”' },
        { topic:'Nappies', text:'“Three wet nappies yesterday. Poos are mustard yellow and seedy. Her wee is pale, not dark.”' },
        { topic:'Temperature', text:'“I haven’t got a thermometer. She doesn’t feel hot.” No rash, no vomiting (only small possets), breathing normal.' },
        { topic:'Birth', text:'“She was born at 38 weeks and 5 days. Normal delivery. They did a vitamin K injection. They didn’t say she needed any treatment.” Mother’s blood group: “O positive, I think.” No sibling with jaundice (first baby).' },
        { topic:'Weight', text:'“The midwife said she’d lost about 8% on Tuesday.”' },
        { topic:'Home', text:'“My partner, Jack, went back to work today. My mum lives in Spain. I don’t drive.”' },
        { topic:'Mood', text:'If asked how she is: “I’m okay… I’m just tired. I cried a lot today.” If asked about thoughts of harming herself or the baby: “No, nothing like that — I’m just exhausted.”' },
        { topic:'HIDDEN — feeding fears', text:'If asked how feeding is going for her, or what she thinks has caused the jaundice: “I think I’m starving her. My milk’s not enough. Will they make me give her formula? I really want to breastfeed.”' },
        { topic:'How to play this (role-player)', text:'Apologetic and tired, voice shaky. Answer clearly when asked specific questions. If told Freya needs checking today, ask “Can’t it wait for the midwife tomorrow?” once, then accept if the reason is explained. Become tearful when feeding is discussed. If the doctor is kind about breastfeeding, open up about the cracked nipples and feeling alone. If they say “just give formula”, go quiet.' }
      ],
      ice:{
        ideas:'“Maybe it’s normal newborn jaundice — or maybe I’m not feeding her enough.”',
        concerns:'That she is starving her baby; that she will be made to stop breastfeeding; being on her own.',
        expectations:'Reassurance, or advice to wait for the midwife tomorrow.'
      },
      cues:[
        '“Sorry to bother you” — she feels she is overreacting.',
        '“It hurts” about feeding — breastfeeding problems.',
        '“Jack went back to work today” — alone, low support.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Establishes age at onset, current extent of jaundice and eye involvement, and checks there was no jaundice in the first 24 hours' },
      { dom:'dg', text:'Assesses feeding, wet and dirty nappies, alertness, tone, cry and temperature, and asks about stool and urine colour (pale stools or dark urine)' },
      { dom:'dg', text:'Identifies risk factors — gestation, exclusive breastfeeding, weight loss, sibling with jaundice, blood group' },
      { dom:'cm', text:'Arranges bilirubin measurement within 6 hours through the local pathway (same-day midwife/neonatal assessment) rather than waiting for tomorrow’s visit' },
      { dom:'cm', text:'Gives clear danger signs needing 999 or ED (very hard to wake, floppy, high-pitched cry, arching, fever, not feeding) and how to get there' },
      { dom:'cm', text:'Supports breastfeeding — frequent feeds at least 8–12 times a day, help with latch and sore nipples, infant feeding team — and does not advise stopping breastfeeding' },
      { dom:'ro', text:'Responds to the mother’s fear of “starving her”, validates the call, and checks her mood and support' },
      { dom:'ro', text:'Explains jaundice in plain language and why a blood test today matters, and checks understanding' }
    ],
    worked:[
      { lbl:'Validate', txt:'“You’re not bothering me at all — you were right to ring.”' },
      { lbl:'Extent', txt:'“Where can you see the yellow now — face, tummy, legs? Are the whites of her eyes yellow?”' },
      { lbl:'Pale stools', txt:'“What colour are her poos and her wee? Mustard yellow poo is good; pale or chalky poo or dark wee would need a different check.”' },
      { lbl:'Decide', txt:'“Jaundice is very common at this age, but because she’s more yellow and very sleepy and not feeding well, she needs her jaundice level measured today — within the next few hours, not tomorrow.”' },
      { lbl:'Breastfeeding', txt:'“This isn’t your fault and it doesn’t mean you have to stop breastfeeding. Feeding more often helps her clear the jaundice. The infant feeding team can help with your latch and sore nipples.”' },
      { lbl:'Check on her', txt:'“How are you doing yourself, with Jack back at work?”' }
    ],
    learning:'Most newborn jaundice is physiological, but every baby with visible jaundice needs a bilirubin level: within 2 hours if jaundice appears in the first 24 hours, and within 6 hours if it is noticed after 24 hours. Do not rely on visual inspection to estimate the level, particularly in darker skin. Sleepiness and poor feeding are both a cause and a consequence of rising bilirubin. Always ask about stool and urine colour: pale chalky stools or dark urine suggest conjugated jaundice (for example biliary atresia) and need urgent specialist referral. Prolonged jaundice is beyond 14 days in term babies (21 in preterm). Encourage frequent breastfeeding and arrange skilled support rather than advising formula or water; check the mother’s mood and support.',
    stem:{
      name:'Freya Evans (call from her mother, Chloe Evans)',
      age:'5 days · female',
      pmh:['Born 38+5 weeks, spontaneous vaginal delivery; birth weight 3.38 kg','Newborn infant physical examination (NIPE) day 1: normal','Exclusively breastfed'],
      meds:['Vitamin K given IM at birth'],
      allergy:'NKDA',
      recent:'Community midwife, day 3 (Tuesday): “Mild jaundice face and chest. Weight 3.12 kg (−7.7%). Feeding 6–7 times a day, short feeds; latch reviewed. 3 wet nappies, meconium changing. Next visit day 6. Maternal blood group O RhD positive, antibody screen negative.”',
      reason:'Telephone call — mother rang reception: “baby looks yellow and sleepy”. Consent: mother has parental responsibility.'
    },
    ceg:['Children & young people','Urgent & unscheduled care'],
    timeMap:[
      { t:'0–2', h:'Open and validate', d:'Let her describe; reassure she was right to call.' },
      { t:'2–6', h:'Focused history', d:'Onset (first 24 hours?), extent, eyes; feeding, nappies, stools and urine; alertness, tone, cry; temperature; risk factors.' },
      { t:'6–8', h:'Decide', d:'Visible jaundice beyond 24 hours with sleepiness and poor feeding: bilirubin within 6 hours via local pathway.' },
      { t:'8–11', h:'Feeding and mother', d:'Breastfeeding support, 8–12 feeds a day, infant feeding team; her mood and support; transport.' },
      { t:'11–12', h:'Safety-net', d:'999/ED danger signs; who will call her; teach-back.' }
    ],
    wordPics:{
      clearPass:'Takes a focused, structured phone history including stool and urine colour and danger signs, recognises the need for bilirubin within 6 hours and arranges it directly that day, supports breastfeeding and the mother’s wellbeing warmly, and gives clear, specific escalation advice.',
      pass:'Arranges same-day assessment with bilirubin and gives reasonable safety-netting; feeding or maternal mood addressed more briefly.',
      fail:'Recognises jaundice but defers to tomorrow’s midwife visit, or advises sunlight/formula without a bilirubin measurement; misses stool colour.',
      clearFail:'Reassures that newborn jaundice is normal with no measurement or safety-net, or advises stopping breastfeeding; does not ask about alertness or feeding.'
    },
    avoid:[
      { dont:'“Put her near a sunny window — that helps the jaundice.”', instead:'“She needs her level measured today; that tells us if she needs treatment like phototherapy.”', why:'Sunlight is not a treatment and delays measurement.' },
      { dont:'“Top her up with formula or water.”', instead:'“Feed her more often — at least 8 to 12 times a day — and let’s get you some help with feeding.”', why:'Undermines breastfeeding; water is not recommended for jaundice.' },
      { dont:'“The midwife can check her tomorrow.”', instead:'“This needs checking today, within the next few hours.”', why:'Visible jaundice after 24 hours needs bilirubin within 6 hours.' }
    ],
    model:[
      { phase:'Opening', clock:'0–2 min', who:'dr', text:'Hello Chloe, it’s Dr Okoro calling back about Freya. Tell me what you’ve noticed.', dom:'ro', why:'Open start' },
      { who:'pt', text:'Sorry to bother you. She looks more yellow than when the midwife came, and she’s really sleepy.' },
      { who:'dr', text:'You’re not bothering me — you did the right thing ringing. When did you first notice the yellow? Was it there on her first day?', dom:'dg', why:'Validates and checks onset (first 24 hours)' },
      { who:'pt', text:'No, the midwife saw it on day three, on her face. Now it’s her tummy and legs and her eyes.' },
      { phase:'History', clock:'2–6 min', who:'dr', text:'How is she feeding — how often and for how long? And how many wet nappies yesterday?', dom:'dg', why:'Feeding and hydration' },
      { who:'pt', text:'Six or seven times, only five minutes and she falls asleep. Three wet nappies.' },
      { who:'dr', text:'What colour are her poos and her wee?', dom:'dg', why:'Screens for conjugated jaundice' },
      { who:'pt', text:'Poos are mustard yellow. Wee is pale.' },
      { who:'dr', text:'That’s helpful. When you wake her, does she open her eyes and look at you? Is she floppy, or crying in a high-pitched way, or arching her back? Does she feel hot?', dom:'dg', why:'Danger signs' },
      { who:'pt', text:'She looks at me then goes back to sleep. She grips my finger. Normal cry. She doesn’t feel hot.' },
      { phase:'Decision', clock:'6–8 min', who:'dr', text:'Jaundice is very common in the first week, but because it’s spreading and she’s sleepy and not feeding well, she needs her jaundice level measured today — within the next few hours. I’ll arrange this now with the midwives and the hospital team.', dom:'cm', why:'Clear decision in line with the 6-hour rule' },
      { who:'pt', text:'Can’t it wait for the midwife tomorrow?' },
      { who:'dr', text:'I understand it’s hard on your own. Most babies just need a quick skin or heel-prick test and some don’t need treatment, but if the level is high, light treatment works well and it’s better to start early.', dom:'ro', why:'Explains the reason without frightening' },
      { phase:'Feeding and mother', clock:'8–11 min', who:'pt', text:'(crying) I think I’m starving her. Will they make me give her formula?' },
      { who:'dr', text:'This isn’t your fault, and it doesn’t mean you have to stop breastfeeding. Feeding often — at least 8 to 12 times a day, waking her if needed — helps her clear the jaundice, and the infant feeding team can help with your latch and sore nipples.', dom:'cm', why:'Supports breastfeeding' },
      { who:'dr', text:'And how are you, with Jack back at work today? How is your mood?', dom:'ro', why:'Checks maternal wellbeing' },
      { who:'pt', text:'Exhausted. I’ve cried a lot. Nothing more than that.' },
      { phase:'Safety-net', clock:'11–12 min', who:'dr', text:'The midwife team or hospital will phone you within the hour with where to go; I’ll call you back if you haven’t heard. Can Jack come home to take you? If before then she becomes very hard to wake, floppy, has a high-pitched cry, arches her back, feels hot or won’t feed at all, call 999. What will you do now?', dom:'cm', why:'Follow-up, transport and specific escalation with teach-back' },
      { who:'pt', text:'Wait for their call, ring Jack, and 999 if she’s floppy or won’t wake.' }
    ],
    knowledge:{
      guideline:'NICE CG98 Jaundice in newborn babies under 28 days (2010, updated 2023) · NICE NG194 Postnatal care (2021) · UNICEF UK Baby Friendly Initiative standards',
      summary:'Visible jaundice in a baby over 24 hours old needs a bilirubin measurement within 6 hours; within 2 hours if under 24 hours old. Do not estimate the level by eye. Check stool and urine colour for conjugated jaundice. Support breastfeeding.',
      points:[
        { h:'Timing rules', t:'Jaundice in the first 24 hours: measure serum bilirubin urgently (within 2 hours). After 24 hours: measure bilirubin within 6 hours of suspicion, using a transcutaneous meter if 35 weeks or more and over 24 hours old.' },
        { h:'Look properly', t:'Examine in good natural light, blanching the skin and checking sclerae and gums. Visual inspection underestimates jaundice, especially in darker skin tones.' },
        { h:'Risk factors', t:'Gestation under 38 weeks, previous sibling needing phototherapy, exclusive breastfeeding, visible jaundice in the first 24 hours, significant weight loss.' },
        { h:'Red flags — emergency', t:'Very sleepy and hard to wake, floppy, high-pitched cry, arching, fever, poor or no feeding — urgent same-day medical review or 999.' },
        { h:'Conjugated jaundice', t:'Pale chalky stools and/or dark urine that stains the nappy suggest conjugated hyperbilirubinaemia (for example biliary atresia): urgent specialist referral and split bilirubin.' },
        { h:'Prolonged jaundice', t:'Jaundice beyond 14 days (term) or 21 days (preterm): measure total and conjugated bilirubin, FBC, blood group and DAT, consider urine culture if infection suspected, and check thyroid screening result.' },
        { h:'Feeding', t:'Encourage frequent breastfeeds; do not routinely give water or dextrose. Arrange skilled feeding support. Phototherapy decisions use treatment threshold charts.' },
        { h:'Mother', t:'Ask about mood, sleep and support; postnatal low mood is common and may affect feeding.' }
      ]
    },
    kb:{
      social:[ { h:'Isolation', t:'First-time mother alone, partner back at work, no car: plan transport and support.' } ],
      legal:[ { h:'Consent', t:'Mother has parental responsibility; record who you spoke to and the advice given.' } ],
      professional:[ { h:'Working with midwives', t:'Babies under 28 days are usually under community midwifery care; use the local jaundice pathway and hand over directly.' } ],
      community:[ { h:'Breastfeeding support', t:'National Breastfeeding Helpline 0300 100 0212; local infant feeding team; NCT; health visitor.' } ]
    },
    playbook:{
      history:{
        redFlags:['Jaundice in the first 24 hours','Very sleepy, floppy, high-pitched cry, arching','Fever or not feeding','Pale stools or dark urine'],
        psychosocial:['First-time mother, alone, no car','Breastfeeding pain and fears','Mood and sleep'],
        ice:['Idea: normal jaundice or underfeeding','Concern: starving her; being made to give formula','Expectation: reassurance or wait for midwife']
      },
      diagnosis:'Visible jaundice on day 5 extending to the legs, with sleepiness and poor feeding in an exclusively breastfed baby — needs bilirubin measurement within 6 hours.',
      diagnosisLay:'“Jaundice happens when a yellow substance called bilirubin builds up because a baby’s liver is still getting going. It’s common, but we need to measure the level today to see if she needs light treatment.”',
      management:{
        reflectIce:'“You’re worried you’re starving her. Feeding more often will help, and you can keep breastfeeding — we’ll get you help with it.”',
        psychosocial:'Arrange transport (partner); infant feeding support; ask about mood; health visitor follow-up.',
        sharedPlan:['Same-day bilirubin via local midwife/neonatal pathway','Feed 8–12 times a day, wake if needed','Infant feeding team review'],
        safetyNet:['999/ED: hard to wake, floppy, high-pitched cry, arching, fever, not feeding','GP call-back if no contact within the hour']
      }
    },
    links:[
      { ic:'🗺️', t:'Neonatal jaundice', s:'Pathway · timing rules', href:'algorithms/neonatal-jaundice.html' },
      { ic:'🗺️', t:'Unsettled baby', s:'Feeding and red flags', href:'algorithms/unsettled-baby.html' },
      { ic:'🗺️', t:'Fever in under-5s', s:'Traffic-light assessment', href:'algorithms/fever-children.html' }
    ],
    pitfalls:{
      intro:'The midwife is coming tomorrow; the mother would accept waiting. The baby needs a level today.',
      items:[
        { dom:'cm', fail:'Deferring to the next routine midwife visit.', why:'Visible jaundice after 24 hours needs a bilirubin within 6 hours, and she is sleepy and feeding poorly.', fix:'Arrange same-day measurement through the local pathway.' },
        { dom:'dg', fail:'Not asking about stool and urine colour.', why:'Pale stools or dark urine point to conjugated jaundice, a different and urgent pathway.', fix:'Ask every time.' },
        { dom:'cm', fail:'Advising formula top-ups or water as the plan.', why:'Undermines breastfeeding; water does not help jaundice.', fix:'More frequent breastfeeds and skilled support.' },
        { dom:'ro', fail:'Ignoring the tears and the isolation.', why:'Maternal wellbeing affects feeding and safety.', fix:'Ask how she is and who can help today.' }
      ]
    },
    scorecard:{
      dg:[
        { t:'Onset and extent', d:'Not in first 24 hours; now trunk, legs and sclerae.', pts:2 },
        { t:'Feeding, nappies, stools, urine', d:'Short feeds; 3 wet nappies; yellow stools; pale urine.', pts:2 },
        { t:'Danger signs', d:'Alertness, tone, cry, arching, temperature.', pts:1 },
        { t:'Risk factors', d:'Gestation, breastfeeding, weight loss, sibling, blood group.', pts:1 }
      ],
      cm:[
        { t:'Bilirubin within 6 hours', d:'Same-day measurement arranged directly via local pathway.', pts:2 },
        { t:'Breastfeeding support', d:'8–12 feeds a day; infant feeding team; no advice to stop.', pts:1 },
        { t:'Escalation advice', d:'999/ED for danger signs; transport arranged.', pts:1 },
        { t:'Follow-up', d:'Call-back if no contact; documentation.', pts:1 }
      ],
      ro:[
        { t:'Validates the call', d:'Removes the sense of “bothering” the doctor.', pts:1 },
        { t:'Responds to feeding fears', d:'Not her fault; she can keep breastfeeding.', pts:2 },
        { t:'Checks mood and support', d:'Asks how she is and about help at home.', pts:1 },
        { t:'Clear explanation with teach-back', d:'Jaundice and the reason for testing today.', pts:1 }
      ],
      maxDg:6, maxCm:5, maxRo:5, total:16
    }
  };

  /* ===== P5. Missed childhood immunisations incl. MMRV — video ===== */
  const p5 = {
    id:'missed-immunisations',
    title:'“I keep getting letters about the kids’ jabs — I’m not anti-vaccine, it’s just… complicated”',
    type:'video', duration:12,
    meta:{
      age:1.7, sex:'F (parent on video)',
      setting:'Video consultation with a mother about her two children’s overdue vaccinations.',
      system:'Child health / Immunisation — catch-up after missed vaccines, MMRV (2026 schedule change), hesitancy after a febrile reaction',
      checked:'October 2026',
      blueprint:{ difficulty:2, lifeStage:'child', groups:['Children & young people','Health disadvantage & vulnerabilities','Prescribing'], type:'video', thirdParty:true }
    },
    brief:'Kezia Morgan, 29, a delivery driver on a zero-hours contract, has had three recall letters. Isla (20 months, born February 2025) has had her 8-, 12- and 16-week vaccines but missed her 12-month and 18-month appointments, which now include MMRV (measles, mumps, rubella and varicella) under the schedule introduced in January 2026. Leo (4 years 3 months) has missed his pre-school booster and second MMR. Kezia booked after a letter about local measles cases. Her concerns: Isla had a fever of 39.4 °C and was “screaming for hours” after her 8-week jabs and Kezia ended up at the out-of-hours centre; she worries about “too many at once”; a friend told her chickenpox is “better to catch naturally”, so she is unsure about the new MMRV. Hidden agenda: a practice nurse made her feel judged at Leo’s last visit (“she said I was putting other kids at risk”), and she cannot easily take unpaid time off — appointments are only offered on weekday mornings. Neither child has had chickenpox. Both are well; no immunosuppression, no allergies. The task: respectful, non-judgemental exploration; acknowledge the febrile reaction (a known effect of MenB in infancy, not a contraindication); explain the benefits and risks of the catch-up, including MMRV and why chickenpox is not always mild; explain catch-up principles (no need to restart, several vaccines can be given at one visit, MMR can be offered if a parent prefers it to MMRV); and solve the access problem (late or Saturday clinic, both children together). Shared decision-making, not persuasion by pressure.',
    script:{
      opening:'“Hi. I’ve had loads of letters about Isla and Leo’s jabs — and now there’s one about measles at the nursery. I’m not one of those anti-vaccine people, I just… it’s complicated. I wanted to talk to someone before I book anything.”',
      facts:[
        { topic:'Isla’s reaction', text:'If asked what happened before: “After her first jabs she had a temperature of 39.4 and screamed for hours. I ended up at the out-of-hours place at midnight. She was fine by the next day, but I was terrified.” No seizure, no floppiness, no rash or swelling of face or lips, no breathing problems.' },
        { topic:'What Isla has had', text:'“She had the 8, 12 and 16 week ones. I gave her Calpol after the second and third ones like they said, and she was fine.” Missed the 12-month and 18-month ones.' },
        { topic:'Leo', text:'“He had all his baby ones and his one-year ones. He hasn’t had the pre-school one — that was when the nurse upset me.”' },
        { topic:'Chickenpox and MMRV', text:'“My friend says chickenpox is better to catch naturally, get it over with. And this MMRV is new, isn’t it? Is it tested?”' },
        { topic:'Too many at once', text:'“Isn’t it a lot for a little body, three or four injections in one go?”' },
        { topic:'Health', text:'Both well. No allergies. No medical conditions, no steroids or other medicines. Neither has had chickenpox. No one at home has a weakened immune system. Kezia is not pregnant.' },
        { topic:'Work and access', text:'If asked what makes it hard to come: “I’m on a zero-hours contract — if I don’t work, I don’t get paid. The appointments are always weekday mornings. I can’t do two separate trips.”' },
        { topic:'HIDDEN — feeling judged', text:'If asked about previous experiences or what put her off: “Last time the nurse said I was putting other kids at risk. I felt like a bad mum. I didn’t want to go back.”' },
        { topic:'Measles letter', text:'“The nursery letter said there were cases. That scared me — I know measles can be bad.”' },
        { topic:'How to play this (role-player)', text:'Guarded at first, ready to feel judged. If the doctor lectures or quotes statistics without listening, get defensive (“See, this is why I didn’t come”). If the doctor asks about your experiences and acknowledges the scary night with Isla, relax and engage. Accept a catch-up plan if your questions about fever, “too many” and chickenpox are answered and the appointment problem is solved. You may ask whether you could have MMR instead of MMRV for Isla — be open to either once it is explained.' }
      ],
      ice:{
        ideas:'Vaccines are mostly good, but her daughter reacts badly and chickenpox might be better caught naturally.',
        concerns:'Another frightening fever; overloading her daughter; being judged as a bad parent; losing pay.',
        expectations:'Honest answers and some control over the plan — not to be told off.'
      },
      cues:[
        '“I’m not one of those anti-vaccine people” — she expects judgement.',
        '“It’s complicated” — there is more than the medical worry.',
        'Sighs when appointment times come up.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Establishes which vaccines each child has had and missed, using the record, and confirms health status (allergies, immunosuppression, previous chickenpox)' },
      { dom:'dg', text:'Takes a history of the previous reaction and distinguishes an expected febrile reaction from a true contraindication (anaphylaxis)' },
      { dom:'dg', text:'Explores her reasons in an open, non-judgemental way, including previous experiences of care and practical barriers' },
      { dom:'cm', text:'Explains the catch-up accurately — no need to restart, missed doses can be given now, several vaccines can be given at one visit, MMRV for Isla, pre-school booster and second MMR for Leo' },
      { dom:'cm', text:'Gives balanced information on benefits and risks, including fever management and why chickenpox can be serious, and mentions that MMR can be offered instead of MMRV if she prefers' },
      { dom:'cm', text:'Arranges a practical appointment (out-of-hours or Saturday clinic, both children together) and follows up, documenting her decisions respectfully' },
      { dom:'ro', text:'Acknowledges the frightening night with Isla and the previous negative experience without defending or criticising colleagues' },
      { dom:'ro', text:'Shares the decision — checks what she wants to do, respects her choice, and leaves the door open' }
    ],
    worked:[
      { lbl:'Remove judgement', txt:'“Lots of parents have questions — I’m glad you came to ask them. I’m not here to tell you off.”' },
      { lbl:'Acknowledge the fever', txt:'“That sounds like a really frightening night. A high fever after the 8-week jabs is a known effect of the MenB vaccine in babies — it’s why we give paracetamol. It isn’t an allergy and it doesn’t mean she’ll react like that again.”' },
      { lbl:'Too many at once', txt:'“Children’s immune systems deal with thousands of germs every day. Giving several vaccines at one visit is safe and means fewer trips for you.”' },
      { lbl:'Chickenpox', txt:'“Most children get through chickenpox fine, but some get serious skin infections, pneumonia or brain inflammation, and it means a week off nursery — and work for you. MMRV has been used for years in other countries.”' },
      { lbl:'Choice', txt:'“If you’d prefer the MMR without chickenpox for Isla, that can be arranged — though MMRV is what we recommend.”' },
      { lbl:'Access', txt:'“Could we book both of them together at our Saturday clinic?”' }
    ],
    learning:'Behind most missed vaccinations are practical barriers and specific worries, not refusal. Explore without judgement, using open questions, and ask about past experiences of care. A fever after the 8-week vaccines is common (especially with MenB) and is not a contraindication; true contraindications are rare (confirmed anaphylaxis to a previous dose or component; live vaccines in significant immunosuppression or pregnancy). Catch-up principles: never restart a course; give missed doses as soon as possible; several vaccines can be given at the same visit. Since 1 January 2026, MMRV has replaced MMR in the routine schedule at 12 and 18 months for children born on or after 1 January 2025; UKHSA allows MMR to be offered where a parent prefers it. Leo needs his pre-school booster and second MMR-containing dose. Make access easy (combined, out-of-hours appointments) and document the parent’s decisions.',
    stem:{
      name:'Isla Morgan, 20 months, and Leo Morgan, 4 years 3 months (video with their mother, Kezia Morgan)',
      age:'Isla 1 year 8 months · female (index record); Leo 4 years 3 months · male',
      pmh:['Isla: born at term; 8-week vaccines followed by fever 39.4 °C — out-of-hours attendance, diagnosis “post-vaccine fever”, no treatment needed','Leo: well; no significant history','Neither child has had chickenpox (per records)'],
      meds:['None for either child'],
      allergy:'NKDA (both)',
      recent:'Immunisation record — Isla: 8, 12 and 16 week vaccines given; 12-month vaccines (incl. MMRV dose 1) and 18-month vaccines (incl. MMRV dose 2) NOT given; 3 recall letters. Leo: all primary and 1-year vaccines given (MMR dose 1 at 12 months); pre-school booster (4-in-1 and MMR dose 2) NOT given. Practice nurse note 14 months ago (Leo): “Mum declined pre-school booster today. Discussed risks.” UKHSA letter to nurseries last week: measles cases in the area.',
      reason:'Video consultation booked by mother: “want to discuss the kids’ vaccines”.'
    },
    ceg:['Children & young people','Health disadvantage & vulnerabilities','Prescribing'],
    timeMap:[
      { t:'0–2', h:'Open without judgement', d:'Thank her for coming; invite her story; signal you are not here to tell her off.' },
      { t:'2–5', h:'Explore', d:'What happened with Isla; what she has heard; previous experiences; what makes it hard to attend.' },
      { t:'5–6', h:'Check records and safety', d:'What each child has had; allergies, immunosuppression, chickenpox history.' },
      { t:'6–10', h:'Answer her questions', d:'Fever after MenB; “too many”; chickenpox and MMRV; catch-up without restarting; MMR as an alternative.' },
      { t:'10–12', h:'Decide together and make it easy', d:'Her choice; Saturday or late clinic, both together; fever advice; document and leave the door open.' }
    ],
    wordPics:{
      clearPass:'Creates a non-judgemental space, uncovers the febrile reaction, the previous negative experience and the work barrier, answers each worry accurately (fever, multiple vaccines, chickenpox, MMRV vs MMR), explains catch-up for both children, and agrees a practical joint appointment that she chooses.',
      pass:'Explores the main concern and gives accurate catch-up information with a practical plan; the previous negative experience or access barrier is addressed less fully.',
      fail:'Gives accurate facts but in a lecturing way, or does not establish what each child needs; misses the access barrier; plan left to “book with reception”.',
      clearFail:'Judgemental or coercive (“you’re putting other children at risk”), gives inaccurate information (for example that the course must restart or that a previous fever is a contraindication), or no plan.'
    },
    avoid:[
      { dont:'“You’re putting other children at risk by not vaccinating.”', instead:'“Can you tell me what’s made it hard to get them done?”', why:'Blame drives parents away; she has already experienced this.' },
      { dont:'“The science is settled — there’s nothing to worry about.”', instead:'“That’s a really reasonable question — let me explain what we know.”', why:'Dismissing concerns reduces trust; specific answers build it.' },
      { dont:'“We’ll have to start the course again.”', instead:'“We don’t need to start again — we just pick up where we left off.”', why:'Inaccurate; courses are never restarted.' }
    ],
    model:[
      { phase:'Opening', clock:'0–2 min', who:'dr', text:'Hello Kezia, I’m Dr Ahmed. Thank you for booking — I know you’ve had a few letters. I’m not here to tell you off; I’d like to hear what’s been going on.', dom:'ro', why:'Defuses expected judgement' },
      { who:'pt', text:'I’m not anti-vaccine. It’s just complicated.' },
      { phase:'Exploring', clock:'2–6 min', who:'dr', text:'Tell me about it — what’s made it complicated?', dom:'dg', why:'Open exploration of reasons' },
      { who:'pt', text:'After Isla’s first jabs she had 39.4 and screamed for hours. I ended up at out-of-hours at midnight.' },
      { who:'dr', text:'That sounds frightening. Did she have any swelling of her face or lips, breathing problems, a rash, or a fit?', dom:'dg', why:'Distinguishes febrile reaction from anaphylaxis or febrile seizure' },
      { who:'pt', text:'No, just the temperature and crying. She was fine the next day.' },
      { who:'dr', text:'Has anything else put you off — anything about previous appointments?', dom:'dg', why:'Explores previous experience of care' },
      { who:'pt', text:'Last time the nurse said I was putting other kids at risk. I felt like a bad mum. And I’m on zero hours — weekday mornings mean no pay.' },
      { who:'dr', text:'I’m sorry that happened — you came for help and left feeling judged. That’s not what we want. Can I check: has either child had chickenpox, any allergies, or any illness or medicines that affect the immune system?', dom:'ro', why:'Acknowledges the experience without criticising a colleague; checks safety' },
      { who:'pt', text:'No chickenpox, no allergies, both healthy.' },
      { phase:'Information', clock:'6–10 min', who:'dr', text:'The fever Isla had is a known effect of the MenB vaccine in babies — it’s why paracetamol is given. It isn’t an allergy and doesn’t stop her having the rest. The 12- and 18-month vaccines are less likely to cause that kind of fever, though she might have a mild temperature or rash about a week after the MMRV.', dom:'cm', why:'Accurate, reassuring explanation of the reaction and what to expect' },
      { who:'pt', text:'Isn’t it too much, several in one go? And my friend says chickenpox is better caught naturally.' },
      { who:'dr', text:'Children’s immune systems handle thousands of germs a day, so several vaccines at once is safe and saves you trips. Most children get through chickenpox fine, but some get bad skin infections, pneumonia or brain inflammation — and it means a week off nursery and work. Since January the NHS gives the MMRV to protect against it.', dom:'cm', why:'Balanced benefits and risks' },
      { who:'pt', text:'Can she have the old one, without chickenpox?' },
      { who:'dr', text:'Yes, if you prefer, she can have MMR instead — though we recommend MMRV. We don’t need to restart anything: Isla needs her missed 12- and 18-month vaccines, a month apart, and Leo needs his pre-school booster and second MMR.', dom:'cm', why:'Choice and accurate catch-up plan' },
      { phase:'Shared decision and access', clock:'10–12 min', who:'dr', text:'What would you like to do? And what would make it easiest — we have a Saturday clinic where both could be seen together.', dom:'ro', why:'Shared decision and practical solution' },
      { who:'pt', text:'Saturday would be good. I’ll go with the MMRV for Isla — I don’t want her getting chickenpox if it can be bad.' },
      { who:'dr', text:'I’ll book a longer slot with our nurse who does the children’s clinic and note your concerns so you don’t have to repeat yourself. Paracetamol can be given if they have a fever afterwards; if either child seems very unwell after the vaccines, call us or 111. And if you change your mind about anything, just let us know.', dom:'cm', why:'Arranges, documents respectfully, safety-nets and leaves the door open' }
    ],
    knowledge:{
      guideline:'UKHSA Immunisation against infectious disease (Green Book), chapters 11 (schedule) and 34 (varicella) · UKHSA MMRV programme: information for healthcare professionals (January 2026) · UKHSA Vaccination of individuals with uncertain or incomplete immunisation status (current) · NICE NG218 Vaccine uptake in the general population (2022)',
      summary:'Children who have missed vaccines should catch up without restarting courses. Since 1 January 2026, MMRV replaces MMR at 12 and 18 months for children born on or after 1 January 2025. Explore hesitancy respectfully and remove practical barriers.',
      points:[
        { h:'MMRV schedule', t:'From 1 January 2026, MMRV is given at 12 months and at a new 18-month appointment (born on or after 1 January 2025). Children born 1 July–31 December 2024 have MMR at 12 months then MMRV. A selective varicella catch-up for older eligible pre-school children is planned. UKHSA allows MMR to be offered where a parent prefers it.' },
        { h:'Catch-up principles', t:'Do not restart an interrupted course. Give missed doses as soon as possible with the correct minimum intervals (MMR/MMRV doses at least 4 weeks apart). Several vaccines can be given at one visit in different sites.' },
        { h:'Febrile reactions', t:'Fever is common after MenB in infants; prophylactic paracetamol is recommended with MenB doses under 1 year. Fever is not a contraindication to further doses.' },
        { h:'True contraindications', t:'Confirmed anaphylaxis to a previous dose or a vaccine component. Live vaccines (MMR, MMRV) are not given in significant immunosuppression or pregnancy. Minor illness without fever is not a reason to delay.' },
        { h:'Chickenpox', t:'Usually mild in children but can cause secondary bacterial skin infection (including invasive group A streptococcal disease), pneumonia, encephalitis and, rarely, death. It also causes missed nursery and parental work.' },
        { h:'Measles', t:'Highly infectious; complications include pneumonia, encephalitis and death. Two doses of an MMR-containing vaccine give about 99% protection.' },
        { h:'Hesitancy', t:'Use open questions, acknowledge concerns, give specific information, and avoid blame. NICE recommends flexible appointment times and making every contact count.' },
        { h:'Pre-school booster', t:'At 3 years 4 months: 4-in-1 (DTaP/IPV) and second dose of MMR (MMRV depending on date of birth and current guidance).' }
      ]
    },
    kb:{
      social:[ { h:'Access', t:'Zero-hours work and single trips matter. Offer combined, evening or weekend appointments.' } ],
      legal:[ { h:'Consent', t:'Vaccination of children needs consent from a person with parental responsibility; it is voluntary in the UK. Record the decision and the information given.' } ],
      professional:[ { h:'Respect and candour', t:'GMC Good medical practice: treat patients with respect and without judgement. Acknowledge a poor previous experience without blaming colleagues; consider feedback to the team.' } ],
      community:[ { h:'Information', t:'NHS vaccinations pages; UKHSA “MMRV — information for parents” leaflet; Vaccine Knowledge Project (Oxford).' } ]
    },
    playbook:{
      history:{
        redFlags:['Previous anaphylaxis to a vaccine','Immunosuppression in the child or household','Pregnancy (for the parent, re: live vaccines in contacts — not a contraindication)'],
        psychosocial:['Zero-hours work; single trips','Previous judgemental experience','Friends’ views on chickenpox'],
        ice:['Idea: vaccines mostly good, chickenpox better caught naturally','Concern: fever, overload, being judged, lost pay','Expectation: honest answers, no lecture']
      },
      diagnosis:'Two children with missed routine vaccinations (Isla: 12- and 18-month incl. MMRV; Leo: pre-school booster and MMR2); hesitancy after an expected febrile reaction and a negative experience; access barriers.',
      diagnosisLay:'“Neither of them needs to start again. Isla needs her two missed sets, a month apart, and Leo needs his pre-school jabs. The fever Isla had was a known side effect, not an allergy.”',
      management:{
        reflectIce:'“You’re not against vaccines — you were frightened by Isla’s fever, put off by how you were spoken to, and it’s hard to get here. Let’s sort each of those.”',
        psychosocial:'Saturday clinic, both children together, longer slot with a named nurse; note her concerns in the record.',
        sharedPlan:['Isla: missed 12-month vaccines now (MMRV or MMR as she chooses), 18-month set at least 4 weeks later','Leo: pre-school booster and MMR dose 2','Fever advice and what to expect'],
        safetyNet:['If very unwell after vaccines: practice or 111','She can change her mind at any time; document decisions']
      }
    },
    links:[
      { ic:'🗺️', t:'Fever in under-5s', s:'Traffic-light assessment', href:'algorithms/fever-children.html' },
      { ic:'💠', t:'Prescribing guide', s:'Children’s doses incl. paracetamol', href:'prescribing-guide.html' }
    ],
    pitfalls:{
      intro:'This is a communication station disguised as an immunisation quiz. Accurate facts delivered as a lecture still fail.',
      items:[
        { dom:'ro', fail:'Opening with risks of measles and herd immunity.', why:'She arrived expecting judgement; a lecture confirms it.', fix:'Ask first, then answer her specific worries.' },
        { dom:'dg', fail:'Not distinguishing a febrile reaction from anaphylaxis.', why:'Only true allergy contraindicates further doses.', fix:'Ask about swelling, breathing, rash and seizure.' },
        { dom:'cm', fail:'Saying the course must restart, or that MMRV is mandatory.', why:'Both are wrong; inaccurate information erodes trust.', fix:'Catch up without restarting; MMR available if preferred.' },
        { dom:'cm', fail:'Leaving the booking to reception.', why:'The access barrier is why the jabs were missed.', fix:'Book a suitable joint appointment in the consultation.' }
      ]
    },
    scorecard:{
      dg:[
        { t:'Vaccine status for both children', d:'Uses records to identify exactly what is missing.', pts:1 },
        { t:'Characterises the previous reaction', d:'Febrile reaction vs anaphylaxis or seizure.', pts:2 },
        { t:'Explores reasons and barriers', d:'Fears, friend’s advice, previous experience, work.', pts:2 },
        { t:'Checks safety', d:'Allergies, immunosuppression, chickenpox history.', pts:1 }
      ],
      cm:[
        { t:'Accurate catch-up plan', d:'No restart; MMRV/MMR for Isla; booster and MMR2 for Leo; intervals.', pts:2 },
        { t:'Balanced risk information', d:'Fever, multiple vaccines, chickenpox complications, measles.', pts:2 },
        { t:'Practical arrangement and documentation', d:'Joint Saturday/late slot; concerns recorded; follow-up.', pts:1 }
      ],
      ro:[
        { t:'Non-judgemental stance', d:'Removes blame from the start.', pts:1 },
        { t:'Acknowledges negative experiences', d:'Fever night and previous appointment.', pts:1 },
        { t:'Shared decision', d:'Offers choice (MMR vs MMRV), respects her decision.', pts:2 },
        { t:'Leaves the door open', d:'She can return or change her mind.', pts:1 }
      ],
      maxDg:6, maxCm:5, maxRo:5, total:16
    }
  };

  /* ===== P6. 15-year-old requesting contraception confidentially — video ===== */
  const p6 = {
    id:'teen-contraception-fraser',
    title:'“Can I get the pill without my mum finding out?”',
    type:'video', duration:12,
    meta:{
      age:15, sex:'F',
      setting:'Video consultation with a 15-year-old, alone in her bedroom.',
      system:'Sexual & reproductive health — under-16 contraception: Fraser guidelines, safeguarding (CSE screen), emergency contraception, STI testing, LARC',
      checked:'October 2026',
      blueprint:{ difficulty:3, lifeStage:'young person', groups:['Children & young people','Gender, reproductive & sexual health','Professional & ethical','Prescribing'], type:'video', thirdParty:false }
    },
    brief:'Kiera O’Brien, 15, books a video appointment herself after school and asks to start “the pill” without her mum knowing. She has been with her boyfriend Josh (16, in the year above at the same school) for 5 months and they have had sex several times with condoms. Hidden agenda: on Saturday evening (about 44 hours ago) the condom split; she has not told anyone and is frightened of being pregnant. Her last period started 12 days ago (regular 28-day cycle), so she may be close to ovulation. Safeguarding screen is reassuring if asked (consensual, similar age, no alcohol or drugs at the time, no gifts or pressure, no older contacts, no images shared) but must be asked. She is not on any medicines, weight 55 kg, no migraines, non-smoker. The task: confirm identity and privacy on video; explain confidentiality and its limits; assess competence using the Fraser guidelines (understanding, encouraged to involve a parent, likely to have sex anyway, health would suffer, best interests); screen for child sexual exploitation and abuse; elicit the condom split and offer emergency contraception (copper IUD as most effective via same-day sexual health referral; otherwise ulipristal acetate, given likely timing near ovulation, with advice to wait 5 days before starting hormonal contraception); plan ongoing contraception (bridging with a progestogen-only pill, LARC such as the implant), condoms for STI protection, STI testing at the right time, and a pregnancy test 3 weeks after the episode. She should leave feeling respected.',
    script:{
      opening:'“Um, hi. Is this private? My mum’s downstairs. I wanted to ask about going on the pill. But I don’t want my mum to know. Can you do that?”',
      facts:[
        { topic:'Privacy on video', text:'If asked: “I’m in my room with headphones on. The door’s shut. No one can hear.” Agrees to a code word: if someone comes in she will say “I’ll ring you back about my hay fever”.' },
        { topic:'Identity', text:'Gives her full name and date of birth when asked (born March 2011).' },
        { topic:'Relationship', text:'“His name’s Josh, he’s sixteen, he’s in the year above. We’ve been together five months. He’s nice. We’ve had sex a few times — we use condoms.”' },
        { topic:'Safeguarding answers (only if asked)', text:'Sex is always her choice: “He never makes me.” No alcohol or drugs at the time. No one has given her gifts, money or lifts for sex. No older friends or adults she meets online. No photos shared. Feels safe at home: “Mum’s strict but she’s okay. My dad doesn’t live with us.” School is fine. No self-harm.' },
        { topic:'HIDDEN — condom split', text:'Only if asked about recent unprotected sex or problems with condoms, or if asked “is there anything else worrying you?”: “On Saturday… the condom split. About nine at night. I’ve been freaking out. Could I be pregnant?”' },
        { topic:'Periods', text:'“My last period started twelve days ago. They’re regular, every four weeks.” No other unprotected sex since her last period.' },
        { topic:'Medical', text:'No medical problems, no medicines, no migraines, does not smoke. Weight about 55 kg. No allergies.' },
        { topic:'Telling mum', text:'If encouraged to involve a parent: “No way. She’d kill me. Maybe one day, but not now.” If asked about another trusted adult: “My auntie, maybe.”' },
        { topic:'Understanding', text:'Can explain back what she is told about the options and the risks — she is bright and has read about the implant online.' },
        { topic:'Contraception preference', text:'“I wanted the pill but I’m worried I’ll forget. My friend has the thing in her arm.”' },
        { topic:'Coil for emergency', text:'If offered the copper coil for emergency contraception: “Can’t I just have a tablet? The coil sounds scary.” Accepts the tablet if told it is a reasonable option.' },
        { topic:'How to play this (role-player)', text:'Nervous, speaks quietly, glances at the door. Answer questions honestly but briefly. Hold back the condom split until asked about recent unprotected sex or invited to share anything else. If the doctor lectures about her age or says she must tell her mum, go quiet and try to end the call. If the doctor explains confidentiality clearly and is kind, relax and become chatty. If asked the safeguarding questions in a matter-of-fact way, answer easily; if asked accusingly, become defensive.' }
      ],
      ice:{
        ideas:'The pill is the answer; she might be pregnant after Saturday.',
        concerns:'Her mum finding out; being pregnant; being judged as “too young”.',
        expectations:'A prescription for the pill without her mum knowing.'
      },
      cues:[
        '“Is this private?” — confidentiality is the gateway.',
        'Long pause when asked if everything has been okay with condoms.',
        '“She’d kill me” — fear of her mother’s reaction.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Confirms identity and privacy for a video consultation and agrees what to do if someone comes in' },
      { dom:'dg', text:'Assesses competence and the Fraser criteria — understanding, encouragement to involve a parent, likely to continue sex, health would suffer, best interests' },
      { dom:'dg', text:'Screens for safeguarding and exploitation — partner age, consent and pressure, alcohol or drugs, gifts, older contacts, images, home and school' },
      { dom:'dg', text:'Asks about recent unprotected sex or condom failure, last period and cycle, and identifies the need for emergency contraception' },
      { dom:'cm', text:'Offers emergency contraception correctly — copper IUD as most effective (same-day referral), otherwise ulipristal acetate given likely timing, with advice about starting contraception afterwards and a pregnancy test in 3 weeks' },
      { dom:'cm', text:'Plans ongoing contraception (including LARC such as the implant), condoms for STIs, and STI testing at the right interval; documents Fraser assessment' },
      { dom:'ro', text:'Explains confidentiality and its limits clearly and non-judgementally at the start' },
      { dom:'ro', text:'Encourages involving a parent or trusted adult without pressure, and respects her decision' }
    ],
    worked:[
      { lbl:'Privacy first', txt:'“Before we start — can anyone hear you? If someone comes in, just say ‘I’ll ring you back’ and I’ll understand.”' },
      { lbl:'Confidentiality', txt:'“What you tell me stays between us, even though you’re 15. The only time I’d need to share anything is if I was worried you or someone else was at serious risk of harm — and I’d talk to you first.”' },
      { lbl:'Safeguarding, normalised', txt:'“I ask everyone your age these questions, to make sure they’re safe. How old is Josh? Has he or anyone else ever pressured you into sex? Any alcohol or drugs involved?”' },
      { lbl:'The key question', txt:'“Has there been any time the condom split or came off, or you didn’t use one?”' },
      { lbl:'EC options', txt:'“The most effective emergency contraception is a copper coil, fitted at the sexual health clinic within 5 days. If you’d rather not, there’s a tablet called ulipristal that works well up to 5 days — you’re still well within that.”' },
      { lbl:'Telling mum', txt:'“I’d always encourage you to talk to your mum or another adult you trust — but it’s your choice, and I won’t tell her.”' }
    ],
    learning:'Young people under 16 can consent to contraception if they are competent (Gillick) and the Fraser guidelines are met; confidentiality applies, with limits where there is a risk of serious harm. Every under-16 sexual health consultation needs a safeguarding screen — partner age and power imbalance, coercion, alcohol or drugs, gifts, older contacts, online images — and sex under 13 is always a child protection matter. Always ask about recent unprotected sex: a condom failure turns a contraception request into an emergency contraception consultation. The copper IUD is the most effective emergency contraception (up to 5 days after unprotected sex or up to 5 days after the earliest expected ovulation). Ulipristal acetate is more effective than levonorgestrel near ovulation; after ulipristal, wait 5 days before starting hormonal contraception and use condoms. Offer LARC, condoms for STIs, STI testing (2 weeks after exposure for chlamydia and gonorrhoea) and a pregnancy test 3 weeks after the episode. On video, confirm identity and privacy first.',
    stem:{
      name:'Kiera O’Brien',
      age:'15 years · female',
      pmh:['Asthma as a child — no inhaler for 3 years','No previous sexual health consultations at the practice'],
      meds:['None'],
      allergy:'NKDA',
      recent:'Booked online by patient herself at 15:50 for a video slot: “Want to talk about something private.” Registered with mother; no safeguarding alerts on record. Last contact: 2 years ago, sprained ankle.',
      reason:'Video consultation — patient alone.'
    },
    ceg:['Children & young people','Gender, reproductive & sexual health','Professional & ethical','Prescribing'],
    timeMap:[
      { t:'0–2', h:'Privacy and confidentiality', d:'Identity, who can hear, code phrase; explain confidentiality and its limits.' },
      { t:'2–5', h:'History and safeguarding', d:'Relationship, partner age, consent and pressure, alcohol/drugs, gifts, online; home and school.' },
      { t:'5–6', h:'Recent risk', d:'Condom failure or unprotected sex; LMP and cycle; medical history for contraception.' },
      { t:'6–10', h:'Emergency and ongoing contraception', d:'Cu-IUD vs ulipristal; starting contraception after; implant or pill; condoms; STI and pregnancy tests.' },
      { t:'10–12', h:'Fraser, parent, close', d:'Encourage a trusted adult; document Fraser; follow-up and where to get help.' }
    ],
    wordPics:{
      clearPass:'Secures privacy, explains confidentiality warmly, assesses Fraser and competence explicitly, screens for exploitation in a normalised way, uncovers the condom failure and manages emergency contraception correctly (Cu-IUD offered, ulipristal timing and quick-start rules), plans LARC, condoms, STI and pregnancy testing, and leaves her feeling respected.',
      pass:'Explains confidentiality, completes a reasonable safeguarding screen, identifies the condom failure and gives appropriate emergency contraception and a contraception plan; some detail (Cu-IUD offer, starting rules, test timing) missing.',
      fail:'Prescribes the pill without asking about recent unprotected sex, or omits the safeguarding screen or Fraser assessment; or insists she tells her mother.',
      clearFail:'Refuses to help because she is under 16, breaches confidentiality, or is judgemental; no emergency contraception despite a disclosed condom failure.'
    },
    avoid:[
      { dont:'“You’re a bit young for this, aren’t you?”', instead:'“Thanks for coming to talk about this — it’s really sensible to sort contraception.”', why:'Judgement ends the consultation; she may not seek help again.' },
      { dont:'“I’ll need to let your mum know.”', instead:'“I won’t tell your mum. I’d encourage you to talk to her or another adult you trust when you feel ready.”', why:'Confidentiality applies to competent under-16s.' },
      { dont:'“Here’s the pill — start it on your next period.”', instead:'“Before we talk about the pill, has there been any time recently when a condom split or you didn’t use one?”', why:'Missing a recent risk misses emergency contraception.' }
    ],
    model:[
      { phase:'Privacy and confidentiality', clock:'0–2 min', who:'dr', text:'Hi Kiera, I’m Dr Williams. Before we start — can you confirm your date of birth? And can anyone hear you where you are?', dom:'dg', why:'Identity and privacy on video' },
      { who:'pt', text:'March 2011. I’m in my room with headphones — mum’s downstairs. Is this private?' },
      { who:'dr', text:'Yes. What you tell me stays between us, even though you’re 15. The only time I might share something is if I was worried you or someone else was at serious risk of harm, and I’d talk to you first. If someone comes in, just say you’ll ring me back.', dom:'ro', why:'Clear confidentiality with limits; safety phrase' },
      { who:'pt', text:'Okay. I want to go on the pill, but I don’t want my mum to know.' },
      { phase:'History and safeguarding', clock:'2–6 min', who:'dr', text:'Thanks for telling me. Can you tell me a bit about your relationship?', dom:'dg', why:'Open question' },
      { who:'pt', text:'His name’s Josh, he’s 16, in the year above. Five months. We use condoms.' },
      { who:'dr', text:'I ask everyone your age a few questions to make sure they’re safe. Is sex always something you want? Has anyone ever pressured you, given you gifts, or have you been drinking or taking anything when it happened?', dom:'dg', why:'Normalised safeguarding and exploitation screen' },
      { who:'pt', text:'No, he never makes me. No drinking. Nothing like that.' },
      { who:'dr', text:'Has there been any time a condom split or came off, or you didn’t use one?', dom:'dg', why:'Asks about recent unprotected sex — uncovers the hidden agenda' },
      { who:'pt', text:'(pause) On Saturday it split. About nine at night. I’ve been freaking out.' },
      { who:'dr', text:'I’m really glad you told me — we can do something about that today. When did your last period start?', dom:'ro', why:'Supportive response, then moves to clinical detail' },
      { who:'pt', text:'Twelve days ago. They’re every four weeks.' },
      { phase:'Emergency contraception', clock:'6–9 min', who:'dr', text:'You might be around the time you release an egg, so emergency contraception is important. The most effective option is a copper coil, which the sexual health clinic could fit today or tomorrow. The other option is a tablet called ulipristal, which works up to 5 days after sex — you’re well within that.', dom:'cm', why:'Offers Cu-IUD first, then ulipristal with timing' },
      { who:'pt', text:'Can I just have the tablet? The coil sounds scary.' },
      { who:'dr', text:'That’s fine. I’ll send it to a pharmacy of your choice. After it, wait 5 days before starting regular contraception, and use condoms. Do a pregnancy test 3 weeks after Saturday, or sooner if your period is late or unusual.', dom:'cm', why:'Correct quick-start rule and pregnancy test timing' },
      { phase:'Ongoing contraception and Fraser', clock:'9–12 min', who:'dr', text:'For the future, you mentioned you might forget a pill. The implant in the arm lasts 3 years and you don’t have to remember anything. We could book that, and I can start a progestogen-only pill in 5 days to bridge. Condoms still protect against infections — an STI test in 2 weeks would be sensible.', dom:'cm', why:'LARC, bridging, condoms and STI testing' },
      { who:'pt', text:'The implant sounds good.' },
      { who:'dr', text:'Could you tell me back what we’ve agreed? And I’d always encourage you to talk to your mum or another adult you trust — but that’s your choice.', dom:'ro', why:'Checks understanding (competence) and encourages parental involvement without pressure' },
      { who:'pt', text:'Tablet today, wait five days, then pill till the implant, test in three weeks. Maybe my auntie.' },
      { who:'dr', text:'Perfect. I’ll record that you understood everything and that this is in your best interests. You can always contact me or the sexual health clinic if anything worries you.', dom:'cm', why:'Documents Fraser and offers follow-up' }
    ],
    knowledge:{
      guideline:'Fraser guidelines and Gillick competence (House of Lords, 1985) · CoSRH (formerly FSRH) Contraceptive Choices for Young People (2010, amended 2019) · CoSRH Emergency Contraception guideline (2017, amended) · GMC 0–18 years: guidance for all doctors (2018) · BASHH Spotting the Signs proforma for under-18s (Brook/BASHH)',
      summary:'Competent under-16s can receive contraception confidentially when the Fraser criteria are met. Always screen for safeguarding and exploitation, ask about recent unprotected sex, and offer emergency contraception, LARC, condoms and STI testing.',
      points:[
        { h:'Fraser criteria', t:'She understands the advice; cannot be persuaded to tell parents or allow you to; is likely to have sex with or without contraception; her health is likely to suffer without it; it is in her best interests. Document each.' },
        { h:'Confidentiality', t:'The duty of confidentiality applies to under-16s. Share information without consent only where there is a risk of serious harm, and usually after telling the young person.' },
        { h:'Safeguarding', t:'Ask about partner age and power imbalance, coercion, alcohol/drugs, gifts, older contacts, online images, home and school. Under 13: always refer to children’s social care. Use a structured tool (Spotting the Signs).' },
        { h:'Emergency contraception', t:'Cu-IUD is most effective: up to 120 hours after unprotected sex or up to 5 days after earliest expected ovulation. Ulipristal 30 mg up to 120 hours, more effective than levonorgestrel near ovulation. Levonorgestrel 1.5 mg up to 72 hours (3 mg if weight over 70 kg or BMI over 26).' },
        { h:'Starting contraception after EC', t:'After levonorgestrel, hormonal contraception can be quick-started immediately. After ulipristal, wait 5 days before starting hormonal contraception; use condoms meanwhile. Pregnancy test 3 weeks after the last unprotected sex.' },
        { h:'LARC', t:'Implant (3 years) and IUDs are highly effective and suitable for young people, including those who have not had children.' },
        { h:'STI testing', t:'Chlamydia and gonorrhoea NAAT from 2 weeks after exposure; offer HIV and syphilis testing. Condoms for STI protection.' },
        { h:'Remote consultations', t:'Confirm identity and privacy; agree a safe phrase; avoid sending sensitive details where others may see them.' }
      ]
    },
    kb:{
      social:[ { h:'Family', t:'Fear of a parent’s reaction is common. A trusted adult (aunt) can be a support without breaching her wishes.' } ],
      legal:[ { h:'Law', t:'Sexual activity under 16 is unlawful, but the law is not intended to prosecute mutually agreed activity between young people of similar age. Under 13: no legal capacity to consent — always a child protection referral.' } ],
      professional:[ { h:'GMC 0–18', t:'Young people have the same right to confidentiality as adults. Share information to protect a young person from serious harm, involving them where possible.' } ],
      community:[ { h:'Young people’s services', t:'Brook, local young people’s sexual health clinic, NHS “Your contraception guide”.' } ]
    },
    playbook:{
      history:{
        redFlags:['Partner much older or in a position of trust','Coercion, gifts, alcohol or drugs, online grooming','Under 13','Recent unprotected sex'],
        psychosocial:['Fear of mother; father absent','School and peer context','Trusted adult (aunt)'],
        ice:['Idea: the pill; worry about pregnancy','Concern: mum finding out; being judged','Expectation: confidential prescription']
      },
      diagnosis:'Competent 15-year-old meeting Fraser criteria, in a consensual similar-age relationship, needing emergency contraception after condom failure about 44 hours ago (mid-cycle) and ongoing contraception.',
      diagnosisLay:'“Because the condom split near the middle of your cycle, there’s a chance of pregnancy, so emergency contraception today makes sense. Then we’ll sort something reliable for the future.”',
      management:{
        reflectIce:'“You came for the pill and to keep it private — we can do both, and we’ll deal with Saturday first.”',
        psychosocial:'Respect her wish not to tell mum; encourage a trusted adult; safe phrase on video.',
        sharedPlan:['Cu-IUD offered; ulipristal 30 mg today if declined','Wait 5 days then POP bridge; implant appointment','STI test in 2 weeks; pregnancy test at 3 weeks'],
        safetyNet:['Contact if period late or abnormal, abdominal pain','Sexual health clinic details; return if anything changes in the relationship']
      }
    },
    links:[
      { ic:'🗺️', t:'Emergency contraception', s:'Pathway', href:'algorithms/emergency-contraception.html' },
      { ic:'💠', t:'Contraception', s:'Protocol incl. UKMEC', href:'management/contraception.html' },
      { ic:'📋', t:'Safeguarding', s:'Case walkthrough', href:'../cases/safeguarding.html' }
    ],
    pitfalls:{
      intro:'Candidates fail this station by doing exactly what was asked — prescribing the pill — and missing the condom that split.',
      items:[
        { dom:'dg', fail:'No question about recent unprotected sex.', why:'Emergency contraception is time-critical.', fix:'Ask every time: “any time the condom split or you didn’t use one?”' },
        { dom:'dg', fail:'Skipping the safeguarding screen because she “seems fine”.', why:'Exploitation is often hidden; the screen is expected for every under-16.', fix:'Normalise it: “I ask everyone your age…”' },
        { dom:'cm', fail:'Starting the pill the same day as ulipristal.', why:'Hormonal contraception reduces ulipristal’s effect if started within 5 days.', fix:'Wait 5 days, condoms meanwhile — or use levonorgestrel if quick-start is preferred.' },
        { dom:'ro', fail:'Insisting she tells her mother.', why:'She will disengage; Fraser requires encouragement, not coercion.', fix:'Encourage, offer a trusted adult, respect her choice.' }
      ]
    },
    scorecard:{
      dg:[
        { t:'Identity and privacy', d:'Date of birth, who can hear, safe phrase.', pts:1 },
        { t:'Fraser and competence', d:'Each criterion assessed; understanding checked by teach-back.', pts:2 },
        { t:'Safeguarding screen', d:'Partner age, consent, pressure, alcohol/drugs, gifts, online, home/school.', pts:2 },
        { t:'Recent risk and cycle', d:'Condom split ~44 hours ago; LMP day 12 of 28.', pts:2 }
      ],
      cm:[
        { t:'Emergency contraception', d:'Cu-IUD offered; ulipristal appropriate; timing explained.', pts:2 },
        { t:'Starting rules and tests', d:'Wait 5 days after UPA; pregnancy test at 3 weeks; STI test at 2 weeks.', pts:1 },
        { t:'Ongoing contraception', d:'LARC (implant), bridging POP, condoms.', pts:1 },
        { t:'Documentation and follow-up', d:'Fraser documented; clinic details; review.', pts:1 }
      ],
      ro:[
        { t:'Confidentiality explained', d:'Clear, warm, with limits.', pts:2 },
        { t:'Non-judgemental throughout', d:'No comments on her age; respectful.', pts:1 },
        { t:'Parental involvement without pressure', d:'Encourages; respects her choice; trusted adult.', pts:1 }
      ],
      maxDg:7, maxCm:5, maxRo:4, total:16
    }
  };

  /* ===== P7. Coil counselling — telephone pre-fit consultation ===== */
  const p7 = {
    id:'coil-counselling',
    title:'“I’d like to have a coil fitted — which one should I have?”',
    type:'telephone', duration:12,
    meta:{
      age:34, sex:'F',
      setting:'Telephone pre-fit counselling call before an intrauterine contraception appointment.',
      system:'Sexual & reproductive health — copper IUD vs LNG-IUS: UKMEC, postpartum and breastfeeding, risks, fitting and trauma-informed care',
      checked:'October 2026',
      blueprint:{ difficulty:2, lifeStage:'adult', groups:['Gender, reproductive & sexual health','Prescribing'], type:'telephone', thirdParty:false }
    },
    brief:'Priya Nair, 34, a secondary school maths teacher, had her second baby 7 months ago and is breastfeeding (twice a day plus at night). She has taken desogestrel 75 micrograms daily since 6 weeks postpartum, without missed pills. Her periods returned 2 months ago and are heavier than before pregnancy. She wants “a coil” and would prefer no hormones because she felt low on the combined pill in her twenties. She is in a long-term relationship, no new partners, chlamydia test negative in pregnancy. Hidden agenda: she had a third-degree tear at delivery and found the speculum examination at her 6-week check very distressing — she is frightened of the fitting and of not being able to ask the clinician to stop. The task: elicit her preferences, history and UKMEC-relevant factors (breastfeeding beyond 4 weeks postpartum is UKMEC 1 for both devices); compare the copper IUD and the 52 mg LNG-IUS honestly (heavier periods with copper vs lighter periods with LNG-IUS; low systemic hormone levels; duration; immediate vs 7-day cover); explain risks with numbers (perforation about 1–2 per 1000, higher when breastfeeding; expulsion about 1 in 20; infection uncommon, mainly first 3 weeks; ectopic if pregnancy occurs); STI risk assessment; what to expect at fitting and pain relief; offer trauma-informed adjustments (longer appointment, chosen clinician, stop at any time, positioning, local anaesthetic) and a shared decision; arrange the fitting and continuing desogestrel until it is effective.',
    script:{
      opening:'“Hi, thanks for calling. I’ve got a coil fitting booked for next week but the receptionist said I should talk to a doctor first about which one. I don’t really want hormones if I can avoid it. I just want something I don’t have to think about.”',
      facts:[
        { topic:'Baby and feeding', text:'“My son is seven months. I’m still breastfeeding morning and night and once overnight.”' },
        { topic:'Current contraception', text:'“I’ve been on the mini pill, desogestrel, since my six-week check. I take it every day — I haven’t missed any.”' },
        { topic:'Periods', text:'“They came back two months ago. They’re heavier than before — I’m changing a super tampon every two hours on the first two days, and I’ve flooded through once. Seven days long. Not much pain.” No bleeding between periods or after sex. No pelvic pain or discharge.' },
        { topic:'Why no hormones', text:'“When I was 22 the combined pill made me really low and weepy. I stopped it and was fine. I don’t want to feel like that again.” Mood now is good; no postnatal depression.' },
        { topic:'Medical history', text:'No migraines, no clots, no heart problems, no breast cancer, not anaemic as far as she knows, BP fine at the postnatal check. No allergies. “Two babies, both normal deliveries.”' },
        { topic:'Sexual history', text:'“I’ve been with my husband, Arjun, for ten years. No one else.” Chlamydia test in pregnancy was negative. No symptoms of infection.' },
        { topic:'Future plans', text:'“We think two is enough, but I’m not ready for anything permanent.”' },
        { topic:'HIDDEN — fear of fitting', text:'If asked how she feels about the fitting, or about previous examinations, or about her births: quietly, “I had a bad tear with my son — a third-degree. The examination at my six-week check was awful, I was shaking. I’m really scared about the fitting. What if I can’t cope and they just carry on?”' },
        { topic:'Questions she will ask', text:'“Does the copper one make periods worse?” “Is it safe while breastfeeding?” “Does it hurt?” “Can it go through the womb?”' },
        { topic:'How to play this (role-player)', text:'Friendly and organised; you are a teacher and like clear information. Hold back the fear of the fitting unless the doctor asks how you feel about the procedure, previous examinations or the birth. Once disclosed, become emotional. If the doctor offers adjustments (stop any time, longer slot, female clinician, local anaesthetic, positioning), feel reassured. If the doctor simply says “it’s quick and most people are fine”, say “okay” but sound unconvinced. If the LNG-IUS is explained honestly (local hormone, lighter periods, mood effects possible but less likely), you are open to it; make a decision only after you have heard both.' }
      ],
      ice:{
        ideas:'A coil is easy, long-lasting contraception; the copper one avoids hormones.',
        concerns:'Feeling low on hormones again; pain and loss of control at the fitting after her traumatic birth; heavy periods getting worse.',
        expectations:'A clear comparison so she can choose, and to know what will happen at the fitting.'
      },
      cues:[
        '“I just want something I don’t have to think about” — wants reliability.',
        '“They’re heavier than before” — the copper IUD may worsen this.',
        'Hesitation when the fitting appointment is mentioned: “Yes… next Thursday.”'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Takes a contraceptive and medical history relevant to UKMEC — postpartum interval, breastfeeding, current method and adherence, periods (heavy bleeding), mood history, VTE, cancer, cardiovascular risk' },
      { dom:'dg', text:'Assesses STI risk and pregnancy risk before fitting (consistent desogestrel use) and screens for intermenstrual or postcoital bleeding and pelvic infection symptoms' },
      { dom:'dg', text:'Explores feelings about the procedure and previous examinations, and elicits the traumatic birth and fear of fitting' },
      { dom:'cm', text:'Compares copper IUD and LNG-IUS accurately — effect on periods, hormone levels and side effects, duration, when each becomes effective — noting both are UKMEC 1 when breastfeeding beyond 4 weeks' },
      { dom:'cm', text:'Explains risks with numbers — perforation (higher when breastfeeding), expulsion, infection, ectopic if pregnancy occurs — and what symptoms to report' },
      { dom:'cm', text:'Plans the fitting with trauma-informed adjustments and pain relief, advises continuing desogestrel until the device is effective, and arranges follow-up (thread self-check, heavy bleeding review)' },
      { dom:'ro', text:'Responds empathically to the disclosure and makes clear she can stop the procedure at any time' },
      { dom:'ro', text:'Supports a shared decision, respecting her wish to avoid hormones while giving balanced information' }
    ],
    worked:[
      { lbl:'Explore preferences', txt:'“What matters most to you in a contraceptive?”' },
      { lbl:'Periods', txt:'“You mentioned heavier periods — the copper coil can make periods heavier and longer, while the hormonal coil usually makes them much lighter.”' },
      { lbl:'Hormones honestly', txt:'“The hormonal coil releases a small amount of progestogen, mostly in the womb, so blood levels are much lower than with the pill. Some people still notice mood changes, but it’s less common — and you could have it removed if you did.”' },
      { lbl:'Risks in numbers', txt:'“About 1 or 2 in 1000 coils go through the wall of the womb when fitted — a bit more likely while breastfeeding. About 1 in 20 come out by themselves, usually in the first year.”' },
      { lbl:'The fitting', txt:'“How are you feeling about the fitting itself?”' },
      { lbl:'Control', txt:'“You are in charge. You can say stop at any point and we stop. We can book a longer appointment, use local anaesthetic, and you can bring someone with you.”' }
    ],
    learning:'Pre-fit counselling for intrauterine contraception covers the woman’s priorities, UKMEC eligibility, a comparison of devices, risks with numbers, STI and pregnancy risk, and the fitting itself. Both the copper IUD and the 52 mg LNG-IUS are UKMEC 1 from 4 weeks postpartum, including while breastfeeding. The copper IUD is hormone-free, effective immediately, lasts up to 10 years, and can make periods heavier and more painful; the LNG-IUS usually reduces bleeding (first-line for heavy menstrual bleeding), needs 7 days of additional cover unless fitted early in the cycle (or continue the current method), and the 52 mg device is licensed for contraception for up to 8 years. Risks: perforation about 1–2 per 1000 insertions, about six times higher when breastfeeding; expulsion about 1 in 20; pelvic infection is uncommon and mostly in the first 20 days. Ask about previous examinations and birth trauma: trauma-informed adjustments and the explicit right to stop make fitting safer and more acceptable.',
    stem:{
      name:'Priya Nair',
      age:'34 years · female',
      pmh:['Para 2 — both spontaneous vaginal deliveries; second delivery 7 months ago complicated by third-degree perineal tear (repaired in theatre)','Combined pill age 22 — stopped due to low mood','No history of VTE, migraine or hypertension'],
      meds:['Desogestrel 75 micrograms daily (since 6 weeks postpartum)'],
      allergy:'NKDA',
      recent:'Postnatal check (GP, 6 weeks): BP 118/74; BMI 25; mood good (PHQ-2 negative); perineum healing; “very anxious during speculum examination, examination abandoned”. Antenatal booking bloods: chlamydia NAAT negative; Hb 124 g/L. Booked: IUC fitting with practice nurse next Thursday (20-minute slot) — device not yet chosen.',
      reason:'Telephone pre-fit counselling call.'
    },
    ceg:['Gender, reproductive & sexual health','Prescribing'],
    timeMap:[
      { t:'0–2', h:'Open', d:'Her priorities and what she already knows.' },
      { t:'2–5', h:'History', d:'Postpartum, breastfeeding, desogestrel use, periods, mood, UKMEC factors, STI risk, symptoms.' },
      { t:'5–6', h:'The fitting', d:'Ask how she feels about it and previous examinations; respond to the tear and fear.' },
      { t:'6–10', h:'Compare and explain risks', d:'Copper vs LNG-IUS for her (heavy periods, hormones); risks with numbers; when effective.' },
      { t:'10–12', h:'Decide and plan', d:'Her choice; adjustments to the appointment; keep taking desogestrel; thread checks; when to seek help.' }
    ],
    wordPics:{
      clearPass:'Elicits priorities and a UKMEC-relevant history, notices the heavier periods and links them to the device choice, uncovers the traumatic birth and fear of fitting and responds with concrete trauma-informed adjustments, explains both devices and their risks with accurate numbers, and reaches a genuinely shared decision with a clear plan for bridging cover and follow-up.',
      pass:'Accurate comparison and risks, with a reasonable plan; the fear of fitting is addressed but with fewer practical adjustments, or the link between heavy periods and device choice is less explicit.',
      fail:'Gives the copper IUD as requested without discussing her heavy periods, or gives risks without numbers; does not explore feelings about the procedure.',
      clearFail:'Inaccurate eligibility advice (for example that coils cannot be fitted while breastfeeding), no risk discussion, or dismissive of her fear (“it only takes a minute”).'
    },
    avoid:[
      { dont:'“It only takes a minute — you’ll be fine.”', instead:'“How are you feeling about the fitting? Some people find examinations hard, especially after a difficult birth.”', why:'Minimising pain silences fear and undermines consent.' },
      { dont:'“The hormonal coil is basically hormone-free.”', instead:'“It releases a small amount of hormone, mainly into the womb, so blood levels are much lower than the pill.”', why:'Overstating to persuade is not informed consent.' },
      { dont:'“There’s a small risk of perforation.”', instead:'“About 1 or 2 in every 1000 — slightly more while breastfeeding.”', why:'Numbers help people weigh risks.' }
    ],
    model:[
      { phase:'Opening', clock:'0–2 min', who:'dr', text:'Hello Priya, it’s Dr Mensah. I understand you’re booked for a coil next week and wanted to talk about which one. What matters most to you?', dom:'ro', why:'Starts with her priorities' },
      { who:'pt', text:'Something I don’t have to think about, and no hormones if possible — the pill made me low years ago.' },
      { phase:'History', clock:'2–5 min', who:'dr', text:'That’s helpful. How old is your baby, are you breastfeeding, and how are you getting on with the mini pill?', dom:'dg', why:'Postpartum interval, breastfeeding, current method' },
      { who:'pt', text:'Seven months, still breastfeeding, and I take the desogestrel every day.' },
      { who:'dr', text:'Have your periods come back, and what are they like? Any bleeding between periods or after sex, pain or discharge?', dom:'dg', why:'Bleeding pattern and infection symptoms' },
      { who:'pt', text:'Two months ago. Heavier than before — I flooded once. Nothing between.' },
      { who:'dr', text:'Any history of clots, migraines, heart problems or breast cancer? And any chance of infection — any new partners?', dom:'dg', why:'UKMEC and STI risk' },
      { who:'pt', text:'None of those. Same partner for ten years.' },
      { phase:'The fitting', clock:'5–6 min', who:'dr', text:'And how are you feeling about the fitting itself?', dom:'dg', why:'Opens the hidden concern' },
      { who:'pt', text:'(quiet) I had a third-degree tear with my son. The check at six weeks was awful — I was shaking. I’m scared I won’t cope and they’ll just carry on.' },
      { who:'dr', text:'Thank you for telling me — that sounds really frightening, and it’s completely understandable to feel that way. You will be in control: if you say stop, we stop. We can book a longer appointment with a clinician you choose, use local anaesthetic, try a different position, and you can bring someone with you.', dom:'ro', why:'Empathy and concrete trauma-informed adjustments' },
      { phase:'Comparing devices', clock:'6–10 min', who:'dr', text:'Both coils are safe while breastfeeding at your stage. The copper coil has no hormones, works straight away and lasts up to 10 years, but it often makes periods heavier and more painful — which matters, as yours are already heavier. The hormonal coil releases a small amount of progestogen mostly into the womb; periods usually become much lighter, and it lasts up to 8 years for contraception. Mood changes can happen but are less common than with the pill.', dom:'cm', why:'Balanced comparison tailored to her heavy periods and mood history' },
      { who:'pt', text:'Can it go through the womb? Is that more likely because I’m breastfeeding?' },
      { who:'dr', text:'It’s rare — about 1 to 2 in every 1000 fittings — and a bit more likely while breastfeeding, so the nurse takes extra care. About 1 in 20 coils come out on their own, usually in the first year. Infection is uncommon and most likely in the first three weeks. If you did get pregnant with a coil, there’s a higher chance it would be ectopic, so a positive test needs checking quickly.', dom:'cm', why:'Risks with numbers' },
      { who:'pt', text:'I think the hormonal one makes sense with my periods. If I feel low I can have it out?' },
      { phase:'Plan', clock:'10–12 min', who:'dr', text:'Yes, at any time. Keep taking your desogestrel until the fitting and for 7 days after. Take ibuprofen an hour before. Afterwards, check your threads after each period, and contact us for heavy pain, fever, unusual discharge, or if you can’t feel the threads. I’ll move your appointment to a 40-minute slot and note your preferences so you don’t have to explain again. Does that sound right?', dom:'cm', why:'Bridging cover, pain relief, follow-up and adjustments documented' },
      { who:'pt', text:'Yes. I feel much better about it.' }
    ],
    knowledge:{
      guideline:'CoSRH UK Medical Eligibility Criteria for Contraceptive Use (UKMEC 2025) · CoSRH (FSRH) Clinical Guideline: Intrauterine Contraception (2023) · CoSRH Contraception after Pregnancy (2017, amended) · NICE NG88 Heavy menstrual bleeding (2018, updated 2021)',
      summary:'Both the copper IUD and the 52 mg LNG-IUS are highly effective long-acting methods suitable from 4 weeks postpartum, including during breastfeeding. Choose with the woman according to bleeding pattern, hormone preference and duration; explain risks with numbers; plan a trauma-informed fitting.',
      points:[
        { h:'Eligibility', t:'From 4 weeks postpartum, both IUDs are UKMEC 1, including while breastfeeding (between 48 hours and 4 weeks: UKMEC 3). Check for current pelvic infection, unexplained bleeding and pregnancy risk.' },
        { h:'Copper IUD', t:'Hormone-free; effective immediately; up to 10 years (some devices); also the most effective emergency contraception. May increase menstrual bleeding and pain.' },
        { h:'LNG-IUS 52 mg', t:'Mainly local action; reduces bleeding and is first-line for heavy menstrual bleeding; licensed for contraception up to 8 years (Mirena) and 5 years for heavy bleeding or HRT. Irregular bleeding is common in the first 3–6 months. Needs 7 days of extra cover unless fitted in the first 7 days of the cycle or the current method is continued.' },
        { h:'Risks with numbers', t:'Perforation up to about 2 per 1000 insertions, about six times higher when breastfeeding and in the first 36 weeks after delivery. Expulsion around 1 in 20, most often in the first year. Pelvic infection uncommon, mostly in the first 20 days. If pregnancy occurs, a higher proportion are ectopic.' },
        { h:'STI testing', t:'Test before fitting if at risk (for example under 25, new or multiple partners). Fitting need not be delayed for results in asymptomatic women.' },
        { h:'Fitting', t:'Offer analgesia (NSAID beforehand, local anaesthetic options); explain each step; a trained assistant; the patient can stop at any time. Trauma-informed care: ask about previous experiences, adapt positioning and pace, offer a chosen clinician and longer slot.' },
        { h:'Aftercare', t:'Thread checks; seek help for pain, fever, abnormal discharge, missing threads or a positive pregnancy test.' },
        { h:'Mood', t:'Mood changes are reported with hormonal methods; the LNG-IUS has low systemic levels. Discuss honestly and agree review.' }
      ]
    },
    kb:{
      social:[ { h:'Work and family', t:'A working mother with a baby and a toddler: plan the appointment around childcare and feeds.' } ],
      legal:[ { h:'Consent', t:'Informed consent requires discussion of material risks (Montgomery 2015). Consent can be withdrawn at any time during the procedure.' } ],
      professional:[ { h:'Trauma-informed practice', t:'GMC decision-making and consent (2020): find out what matters to the patient and support their choice. Record adjustments so she does not have to retell her story.' } ],
      community:[ { h:'Information', t:'NHS contraception guide; Sexwise (coil leaflets); MASIC Foundation for women after obstetric anal sphincter injury.' } ]
    },
    playbook:{
      history:{
        redFlags:['Intermenstrual or postcoital bleeding','Pelvic pain, discharge or fever (possible infection)','Possible pregnancy'],
        psychosocial:['Teacher; two young children; breastfeeding','Traumatic birth; distressing postnatal exam','Previous low mood on hormones'],
        ice:['Idea: copper coil avoids hormones','Concern: low mood; pain and loss of control at fitting; heavy periods','Expectation: clear comparison, what happens at fitting']
      },
      diagnosis:'Woman 7 months postpartum, breastfeeding, seeking IUC; both devices UKMEC 1; heavier periods favour the LNG-IUS; significant procedural anxiety after obstetric trauma.',
      diagnosisLay:'“Both coils are safe for you now. The copper one has no hormones but can make periods heavier; the hormonal one usually makes periods lighter and only releases a tiny amount of hormone.”',
      management:{
        reflectIce:'“You wanted no hormones because of how the pill made you feel — that’s really important. Because your periods are heavier, the hormonal coil might suit you, but it’s your choice.”',
        psychosocial:'Longer slot, chosen clinician, stop at any time, local anaesthetic, support person.',
        sharedPlan:['Device chosen by her after balanced information','Continue desogestrel until fitting and for 7 days after (LNG-IUS)','Ibuprofen beforehand; adjustments recorded'],
        safetyNet:['Pain, fever, discharge, missing threads, positive pregnancy test → contact promptly','Review bleeding and mood at 6–12 weeks']
      }
    },
    links:[
      { ic:'💠', t:'Contraception', s:'Protocol incl. UKMEC', href:'management/contraception.html' },
      { ic:'🗺️', t:'Contraception', s:'Choosing a method', href:'algorithms/contraception.html' },
      { ic:'💠', t:'Heavy menstrual bleeding', s:'Protocol', href:'management/menorrhagia.html' }
    ],
    pitfalls:{
      intro:'A routine counselling call that hides a frightened woman. Candidates who only compare devices miss half the marks.',
      items:[
        { dom:'dg', fail:'Never asking how she feels about the fitting.', why:'The previous abandoned examination is in the notes; distress affects consent and safety.', fix:'Ask about previous examinations and the birth.' },
        { dom:'cm', fail:'Fitting the copper IUD as requested without linking it to her heavier periods.', why:'Likely to worsen her bleeding and lead to removal.', fix:'Discuss bleeding effects of each device.' },
        { dom:'cm', fail:'Risks without numbers, or omitting breastfeeding-related perforation risk.', why:'Material risks must be explained for consent.', fix:'Use “1–2 in 1000”, “1 in 20”.' },
        { dom:'ro', fail:'Persuading her towards hormones by minimising them.', why:'Undermines trust and informed choice.', fix:'Explain honestly and let her decide.' }
      ]
    },
    scorecard:{
      dg:[
        { t:'UKMEC-relevant history', d:'Postpartum interval, breastfeeding, desogestrel use, periods, mood, VTE, cancer.', pts:2 },
        { t:'STI and pregnancy risk', d:'Partner history; consistent POP; symptoms.', pts:1 },
        { t:'Elicits procedural fear', d:'Asks about the fitting, previous exam and birth.', pts:2 }
      ],
      cm:[
        { t:'Accurate comparison', d:'Bleeding effects, hormones, duration, when effective; both UKMEC 1.', pts:2 },
        { t:'Risks with numbers', d:'Perforation (breastfeeding), expulsion, infection, ectopic.', pts:2 },
        { t:'Practical plan', d:'Bridging cover; analgesia; adjustments; thread checks; review.', pts:1 }
      ],
      ro:[
        { t:'Empathy and control', d:'Validates fear; explicit right to stop.', pts:2 },
        { t:'Shared decision', d:'Respects hormone preference; balanced information.', pts:2 },
        { t:'Checks understanding', d:'Summarises and confirms the plan.', pts:1 }
      ],
      maxDg:5, maxCm:5, maxRo:5, total:15
    }
  };

  /* ===== P8. Painful periods for years — video ===== */
  const p8 = {
    id:'endometriosis',
    title:'“My periods have always been bad, but now I’m missing work — and the scan was normal”',
    type:'video', duration:12,
    meta:{
      age:27, sex:'F',
      setting:'Video consultation with a 27-year-old woman about painful periods.',
      system:'Gynaecology — suspected endometriosis: normal ultrasound does not exclude, analgesia, hormonal treatment with migraine with aura, referral, fertility',
      checked:'October 2026',
      blueprint:{ difficulty:2, lifeStage:'adult', groups:['Gender, reproductive & sexual health','Long-term conditions & cancer','Investigations & results'], type:'video', thirdParty:false }
    },
    brief:'Sophie Chen, 27, a retail store manager, has had painful periods since she was 15, getting worse over 3 years. Pain starts 2 days before bleeding and lasts 4–5 days, needs her to lie down, and she has missed 2–3 days of work a month; HR has given her an informal warning. She has deep pain during sex and painful bowel movements during periods. No cyclical rectal bleeding or blood in urine. A transvaginal ultrasound 8 months ago was normal, and she was told “everything’s fine”. Mefenamic acid helped a little. She stopped the combined pill 2 years ago because she developed migraine with aura (now a contraindication to combined hormonal contraception); she uses condoms. Hidden agenda: she feels she has been dismissed for years (“just bad periods”) and is now frightened about fertility — she and her partner plan to try for a baby in 1–2 years, and her cousin had endometriosis and needed IVF. Dyspareunia is straining her relationship. The task: take a focused gynaecological history; recognise suspected endometriosis; explain that a normal scan does not rule it out; consider other causes and red flags; manage pain (regular NSAID plus paracetamol, timing); offer hormonal treatment avoiding oestrogen (progestogen-only pill, LNG-IUS, implant or injection); refer to gynaecology because symptoms are persistent, affect daily life and initial treatment has failed or is limited, and because of fertility priorities (flagging possible deep disease); discuss work and mood; arrange in-person examination without delaying referral.',
    script:{
      opening:'“Hi. It’s about my periods. They’ve always been bad, but the last few years I’m having to take days off every month and work aren’t happy. I had a scan last year and they said it was normal, so I don’t really know what else can be done.”',
      facts:[
        { topic:'Pain pattern', text:'“It starts a couple of days before I bleed, low down in my tummy and into my back. Days one and two of the period I have to lie down with a hot water bottle. It used to be one bad day, now it’s four or five.” Pain score 8–9/10 at worst.' },
        { topic:'Bleeding', text:'“Periods are regular, every 28 days, about six days long. Heavyish on day two but not flooding.” No bleeding between periods or after sex.' },
        { topic:'Sex', text:'If asked sensitively: “Deep down it hurts during sex — like something’s being hit. It’s been like that about two years. We’ve kind of stopped.”' },
        { topic:'Bowels and bladder', text:'“When I’m on my period it really hurts to open my bowels.” No blood from the back passage, no blood in the urine, no change in bowel habit outside periods. No bloating between periods.' },
        { topic:'Other pain', text:'Some pain mid-cycle occasionally. No pain unrelated to periods most days.' },
        { topic:'Treatment so far', text:'“Mefenamic acid takes the edge off. I take it when the pain starts. Paracetamol does nothing on its own. I was on the combined pill which helped, but I got migraines with flashing zigzags, so the nurse stopped it two years ago.”' },
        { topic:'Other history', text:'No previous surgery, no pelvic infections. Chlamydia test negative last year. Not pregnant (condoms; period 2 weeks ago). Non-smoker. Weight stable. No other medical problems. Migraines with aura about once every two months, none since stopping the pill… “maybe one”.' },
        { topic:'Family', text:'“My cousin had endometriosis. She needed IVF to have her little boy.”' },
        { topic:'Work', text:'“I manage a clothes shop. I’ve had an informal warning for sickness. I feel like they think I’m skiving.”' },
        { topic:'Mood', text:'If asked: “I get low around periods — fed up, not depressed. No thoughts of harming myself.”' },
        { topic:'HIDDEN — dismissed and fertility', text:'If asked what she thinks is going on or what worries her: “I’ve always been told it’s just bad periods, and I feel stupid for coming back. But I’ve read about endometriosis… my cousin had it. Will I be able to have children? We want to start trying in a year or two.”' },
        { topic:'How to play this (role-player)', text:'Composed, a bit apologetic, expects to be brushed off. Do not raise the pain during sex unless asked sensitively. If the doctor says the scan was normal so it is probably nothing, become deflated and quiet. If the doctor explains that a normal scan does not rule out endometriosis, become visibly relieved (“So I’m not imagining it?”). Ask about fertility once you feel listened to. You are open to hormonal treatment if you understand it will not stop you having children later.' }
      ],
      ice:{
        ideas:'Possibly endometriosis, like her cousin — but she has been told it is “just bad periods”.',
        concerns:'Fertility; losing her job; not being believed; the relationship.',
        expectations:'To be taken seriously and referred to someone who can find out what is going on.'
      },
      cues:[
        '“I don’t really know what else can be done” — resignation after a normal scan.',
        '“We’ve kind of stopped” — impact on the relationship.',
        '“My cousin needed IVF” — fertility worry.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Takes a focused history — timing and severity of pain, bleeding pattern, deep dyspareunia, cyclical bowel or bladder symptoms (dyschezia, rectal bleeding, haematuria), impact on daily life' },
      { dom:'dg', text:'Considers other causes and red flags (infection, fibroids, IBS, abnormal bleeding, pregnancy) and reviews the previous treatments and contraindications (migraine with aura)' },
      { dom:'dg', text:'Interprets the normal ultrasound correctly — it does not exclude endometriosis — and offers in-person abdominal and pelvic examination without delaying referral' },
      { dom:'cm', text:'Optimises analgesia — regular NSAID started before the pain with paracetamol, with safety advice' },
      { dom:'cm', text:'Offers hormonal treatment avoiding oestrogen (progestogen-only pill, LNG-IUS, implant or injection), explains it is reversible and compatible with future pregnancy plans' },
      { dom:'cm', text:'Refers to gynaecology (persistent symptoms affecting daily life, treatment limited, fertility concern), flagging cyclical bowel symptoms; safety-nets and arranges review' },
      { dom:'ro', text:'Validates her experience of being dismissed and acknowledges the impact on work, relationship and mood' },
      { dom:'ro', text:'Addresses the fertility worry honestly — many people with endometriosis conceive naturally, specialist input helps — and supports her with work (fit note, adjustments)' }
    ],
    worked:[
      { lbl:'Validate', txt:'“Pain that stops you working is not ‘just bad periods’. I’m glad you came back.”' },
      { lbl:'Sensitive question', txt:'“Some people with painful periods also get pain during sex or opening their bowels. Is that something you’ve noticed?”' },
      { lbl:'The scan', txt:'“A normal scan is useful — it rules out some things, like cysts — but it can’t rule out endometriosis, because small patches often don’t show on ultrasound.”' },
      { lbl:'Name it', txt:'“Your symptoms fit endometriosis — where tissue like the womb lining grows outside the womb and causes pain around periods.”' },
      { lbl:'Hormones', txt:'“Because of your migraines with aura, the combined pill isn’t safe for you, but progestogen-only options are — a daily pill, the hormonal coil, the implant or the injection. They don’t affect your fertility long-term.”' },
      { lbl:'Fertility', txt:'“Many people with endometriosis get pregnant without help. Seeing a gynaecologist now means you’ll have a plan well before you start trying.”' }
    ],
    learning:'Suspect endometriosis with chronic pelvic pain, period-related pain affecting daily life, deep dyspareunia, period-related painful bowel movements or painful urination, or infertility. A normal examination or ultrasound does not exclude it — refer anyway when symptoms are persistent, severe or affect daily life, or when initial treatment fails, is not tolerated or is contraindicated. Initial management runs in parallel with referral: NSAIDs and/or paracetamol, and hormonal treatment (combined hormonal contraception or a progestogen). In migraine with aura, combined hormonal contraception is UKMEC 4, so use progestogen-only options. Suspected deep endometriosis involving bowel, bladder or ureter, or an endometrioma, should be referred to a specialist endometriosis service. Women often wait years for a diagnosis; listening and validating are part of the treatment. Discuss fertility honestly and consider work adjustments.',
    stem:{
      name:'Sophie Chen',
      age:'27 years · female',
      pmh:['Dysmenorrhoea — 4 GP consultations over 6 years','Migraine with aura (diagnosed 2 years ago) — combined pill stopped'],
      meds:['Mefenamic acid 500 mg three times daily when needed (repeat)','Sumatriptan 50 mg when needed'],
      allergy:'NKDA',
      recent:'Transvaginal pelvic ultrasound (radiology report, 8 months ago): “Uterus anteverted, normal size and echotexture. Endometrium 7 mm. Both ovaries normal size with physiological follicles. No adnexal mass, no free fluid. Normal study.” Bloods 8 months ago: Hb 128 g/L (115–165); ferritin 34 µg/L (15–150). Chlamydia/gonorrhoea NAAT negative. Last consultation note: “Normal scan — reassured. Continue mefenamic acid.”',
      reason:'Video consultation: “Periods still very painful — missing work.”'
    },
    ceg:['Gender, reproductive & sexual health','Long-term conditions & cancer','Investigations & results'],
    timeMap:[
      { t:'0–2', h:'Open and validate', d:'Let her tell the story; acknowledge previous visits.' },
      { t:'2–6', h:'Focused history', d:'Pain pattern, bleeding, deep dyspareunia, dyschezia, urinary symptoms, red flags, treatments, migraine with aura, pregnancy plans, work, mood.' },
      { t:'6–8', h:'Explain', d:'Suspected endometriosis; normal scan does not exclude; what it means.' },
      { t:'8–11', h:'Plan together', d:'Regular NSAID plus paracetamol; progestogen-only options; gynaecology referral; examination arranged; fertility.' },
      { t:'11–12', h:'Support and safety-net', d:'Work (fit note, adjustments), Endometriosis UK, review, red flags.' }
    ],
    wordPics:{
      clearPass:'Takes a thorough, sensitive history including dyspareunia and bowel symptoms, explains that a normal scan does not exclude endometriosis, validates years of dismissal, optimises analgesia, offers safe progestogen-only hormonal options because of migraine with aura, refers to gynaecology with fertility and possible deep disease flagged, and addresses work, mood and fertility worries.',
      pass:'Recognises suspected endometriosis, refers despite the normal scan and offers analgesia and a safe hormonal option; some aspects (bowel symptoms, work, fertility) covered briefly.',
      fail:'Recognises endometriosis as possible but repeats the scan or waits for further treatment trials before referral; or offers the combined pill despite migraine with aura.',
      clearFail:'Reassures that the normal scan means nothing is wrong; no referral; dismissive of her symptoms.'
    },
    avoid:[
      { dont:'“Your scan was normal, so that’s reassuring.”', instead:'“The scan rules out some things, but it can’t rule out endometriosis.”', why:'Normal imaging does not exclude endometriosis; false reassurance continues the delay.' },
      { dont:'“Let’s restart the combined pill — it helped before.”', instead:'“Because you get migraine with aura, oestrogen isn’t safe, but progestogen-only options are.”', why:'Combined hormonal contraception is UKMEC 4 in migraine with aura (stroke risk).' },
      { dont:'“Lots of women have painful periods.”', instead:'“Pain that stops you working isn’t something you should have to put up with.”', why:'Normalising severe pain is the dismissal she has experienced for years.' }
    ],
    model:[
      { phase:'Opening', clock:'0–2 min', who:'dr', text:'Hello Sophie, I’m Dr Rahman. I can see you’ve been in about your periods before — tell me how things are now.', dom:'ro', why:'Acknowledges history and opens' },
      { who:'pt', text:'They’ve always been bad, but now I’m missing work every month. The scan was normal so I don’t know what else can be done.' },
      { phase:'History', clock:'2–6 min', who:'dr', text:'Pain that stops you working isn’t something you should just put up with. Can you describe when the pain comes and how bad it gets?', dom:'dg', why:'Validates and explores' },
      { who:'pt', text:'Two days before I bleed, then four or five days. Eight or nine out of ten. I have to lie down.' },
      { who:'dr', text:'Some people with painful periods also get pain deep inside during sex, or when opening their bowels or passing urine. Have you noticed any of those?', dom:'dg', why:'Sensitive enquiry into dyspareunia, dyschezia and dysuria' },
      { who:'pt', text:'Yes — sex hurts deep down, we’ve kind of stopped. And it really hurts to open my bowels on my period.' },
      { who:'dr', text:'Thank you for telling me. Any bleeding from the back passage or in your urine, bleeding between periods, or after sex? Any discharge or fevers?', dom:'dg', why:'Red flags and alternatives' },
      { who:'pt', text:'No, none of that.' },
      { who:'dr', text:'And the treatments — I see the combined pill was stopped because of migraine with aura. How has the mefenamic acid been?', dom:'dg', why:'Reviews treatment and contraindication' },
      { who:'pt', text:'It takes the edge off. I take it when the pain starts.' },
      { phase:'Explanation', clock:'6–8 min', who:'dr', text:'What do you think might be going on?', dom:'ro', why:'Elicits her idea' },
      { who:'pt', text:'I’ve read about endometriosis — my cousin had it and needed IVF. I’ve always been told it’s just bad periods.' },
      { who:'dr', text:'I think you’re right to wonder about it. Your symptoms fit endometriosis — tissue similar to the womb lining growing outside the womb. The scan was useful, but endometriosis often doesn’t show on ultrasound, so a normal scan doesn’t rule it out.', dom:'dg', why:'Working diagnosis and correct interpretation of the normal scan' },
      { who:'pt', text:'So I’m not imagining it?' },
      { phase:'Plan', clock:'8–11 min', who:'dr', text:'No, you’re not. Here’s what I suggest. First, pain relief: take naproxen regularly with food from the day before your period is due, plus paracetamol. Second, hormones can settle it — because of your migraines we’d avoid oestrogen, but a daily progestogen-only pill, the hormonal coil, the implant or the injection are all options. Third, I’ll refer you to gynaecology now, and mention the bowel symptoms.', dom:'cm', why:'Parallel analgesia, safe hormonal options and referral' },
      { who:'pt', text:'Will the hormones stop me having a baby? We want to try in a year or two.' },
      { who:'dr', text:'They don’t affect fertility long-term — you can stop them when you’re ready. Many people with endometriosis conceive naturally, and seeing the gynaecologist now means you’ll have a plan before you start trying.', dom:'ro', why:'Honest fertility reassurance' },
      { phase:'Support and safety-net', clock:'11–12 min', who:'dr', text:'I’d like to examine your tummy and pelvis in person, but that won’t hold up the referral. About work: I can provide a fit note suggesting adjustments, and Endometriosis UK has advice for employers. Let’s review in 6 weeks to see how the treatment is going, and contact us sooner if you get bleeding from the bowel or bladder, or severe pain that doesn’t settle.', dom:'cm', why:'Examination, work support, follow-up and safety-net' },
      { who:'pt', text:'Thank you. That’s the first time I’ve felt listened to.' }
    ],
    knowledge:{
      guideline:'NICE NG73 Endometriosis: diagnosis and management (2017, updated 2024) · CoSRH UKMEC 2025 (migraine with aura and combined hormonal contraception) · ESHRE endometriosis guideline (2022)',
      summary:'Suspect endometriosis with period-related pain affecting daily life, deep dyspareunia, cyclical bowel or urinary symptoms, chronic pelvic pain or infertility. A normal examination or ultrasound does not exclude it. Start analgesia and hormonal treatment and refer in parallel.',
      points:[
        { h:'Recognise it', t:'Chronic pelvic pain; period-related pain affecting daily activities; deep pain during or after sex; period-related painful bowel movements or painful urination; period-related blood in urine or stool; infertility with any of these.' },
        { h:'Examine and image', t:'Offer abdominal and pelvic examination and transvaginal ultrasound (transabdominal if declined). Do not exclude endometriosis if both are normal. Do not use CA-125 or MRI to diagnose it in primary care.' },
        { h:'Analgesia', t:'A 3-month trial of an NSAID and/or paracetamol; start before the expected pain. Neuropathic agents and opioids are specialist decisions.' },
        { h:'Hormonal treatment', t:'Combined hormonal contraception or a progestogen. In migraine with aura, combined methods are UKMEC 4 — use progestogen-only pill, LNG-IUS, implant or injection. Hormonal treatment does not harm future fertility.' },
        { h:'Refer to gynaecology', t:'If symptoms are severe, persistent or recurrent; pelvic signs; initial treatment ineffective, not tolerated or contraindicated; or fertility is a priority. Referral, imaging and treatment can happen in parallel.' },
        { h:'Specialist endometriosis centre', t:'Suspected or confirmed deep endometriosis involving bowel, bladder or ureter, endometrioma, or endometriosis outside the pelvis.' },
        { h:'Fertility', t:'Many conceive naturally; specialist input helps plan. Surgery or assisted conception may be discussed depending on findings.' },
        { h:'Whole person', t:'Ask about mood, relationships and work. Diagnosis often takes many years; validation matters.' }
      ]
    },
    kb:{
      social:[ { h:'Relationships', t:'Deep dyspareunia affects intimacy; offer to discuss with partner, and psychosexual support if wanted.' } ],
      legal:[ { h:'Work', t:'Long-term conditions with substantial effect on daily activities may be a disability under the Equality Act 2010, which requires reasonable adjustments. A fit note can suggest adjustments.' } ],
      professional:[ { h:'Diagnostic delay', t:'GMC Good medical practice: listen to patients and take their views seriously. Repeated reassurance after normal tests contributes to delay.' } ],
      community:[ { h:'Support', t:'Endometriosis UK (support groups, employer guidance); NHS endometriosis pages.' } ]
    },
    playbook:{
      history:{
        redFlags:['Cyclical rectal bleeding or haematuria (deep disease)','Intermenstrual or postcoital bleeding','Pelvic mass, weight loss, persistent bloating','Fever, discharge (infection)'],
        psychosocial:['Store manager with sickness warning','Relationship strain from dyspareunia','Mood around periods'],
        ice:['Idea: endometriosis like her cousin','Concern: fertility; job; not being believed','Expectation: taken seriously and referred']
      },
      diagnosis:'Suspected endometriosis (severe dysmenorrhoea, deep dyspareunia, cyclical dyschezia) despite normal transvaginal ultrasound; combined hormonal contraception contraindicated (migraine with aura).',
      diagnosisLay:'“Endometriosis is where tissue like the lining of the womb grows in other places, like around the ovaries or bowel. It bleeds each month and causes pain. It often doesn’t show on scans.”',
      management:{
        reflectIce:'“You came expecting to be told it’s just bad periods again. I think it may be endometriosis, and I’m referring you.”',
        psychosocial:'Fit note with adjustments; partner support; mood check.',
        sharedPlan:['Naproxen regularly from the day before the period, with food, plus paracetamol','Progestogen-only option of her choice (desogestrel, LNG-IUS, implant, injection)','Gynaecology referral now; in-person exam arranged'],
        safetyNet:['Rectal bleeding or haematuria with periods, severe unremitting pain → contact sooner','Review in 6 weeks']
      }
    },
    links:[
      { ic:'🗺️', t:'Pelvic pain in women', s:'Pathway', href:'algorithms/pelvic-pain-women.html' },
      { ic:'🗺️', t:'Dysmenorrhoea', s:'Pathway', href:'algorithms/dysmenorrhoea.html' },
      { ic:'💠', t:'Dysmenorrhoea', s:'Protocol', href:'management/dysmenorrhoea.html' }
    ],
    pitfalls:{
      intro:'The normal scan is the trap. Treating it as reassurance repeats years of dismissal.',
      items:[
        { dom:'dg', fail:'Interpreting the normal ultrasound as excluding endometriosis.', why:'Ultrasound misses superficial disease; NICE says do not exclude on a normal scan.', fix:'Explain what the scan can and cannot show; refer.' },
        { dom:'cm', fail:'Restarting the combined pill.', why:'Migraine with aura makes combined methods UKMEC 4.', fix:'Offer progestogen-only options.' },
        { dom:'dg', fail:'Not asking about sex and bowel symptoms.', why:'Deep dyspareunia and dyschezia support the diagnosis and may suggest deep disease.', fix:'Ask sensitively and explain why.' },
        { dom:'ro', fail:'Not addressing fertility or work.', why:'These are her biggest worries and affect engagement.', fix:'Ask what worries her most; respond honestly.' }
      ]
    },
    scorecard:{
      dg:[
        { t:'Focused gynaecological history', d:'Pain pattern, bleeding, dyspareunia, dyschezia, urinary symptoms.', pts:2 },
        { t:'Alternatives and red flags', d:'Infection, abnormal bleeding, pregnancy, bowel causes.', pts:1 },
        { t:'Interprets the normal scan', d:'Does not exclude endometriosis; arranges examination.', pts:2 }
      ],
      cm:[
        { t:'Analgesia', d:'Regular NSAID before pain plus paracetamol.', pts:1 },
        { t:'Safe hormonal options', d:'Progestogen-only; avoids oestrogen in migraine with aura.', pts:2 },
        { t:'Referral and follow-up', d:'Gynaecology now, bowel symptoms flagged; review; safety-net.', pts:2 }
      ],
      ro:[
        { t:'Validates and listens', d:'Acknowledges years of dismissal.', pts:2 },
        { t:'Fertility addressed honestly', d:'Reassuring, accurate, plan-focused.', pts:1 },
        { t:'Whole-person support', d:'Work, relationship, mood.', pts:1 }
      ],
      maxDg:5, maxCm:5, maxRo:4, total:14
    }
  };

  /* ===== P9. Living with HIV — new medicines, interactions, disclosure — video ===== */
  const p9 = {
    id:'living-with-hiv',
    title:'“I’ve been taking something for my stomach and a herbal tablet for my mood — is that okay with my HIV pills?”',
    type:'video', duration:12,
    meta:{
      age:46, sex:'M',
      setting:'Video consultation with a man with well-controlled HIV.',
      system:'HIV / Prescribing — antiretroviral drug interactions (antacids, St John’s wort), dyspepsia, low mood, disclosure, U=U and stigma',
      checked:'October 2026',
      blueprint:{ difficulty:3, lifeStage:'adult', groups:['Long-term conditions & cancer','Prescribing','Mental health & addiction','Health disadvantage & vulnerabilities','Investigations & results'], type:'video', thirdParty:false }
    },
    brief:'Tom Hargreaves, 46, a quantity surveyor, has lived with HIV for 9 years. He takes bictegravir/emtricitabine/tenofovir alafenamide (Biktarvy) every morning and his HIV clinic letter shows an undetectable viral load. For 3 months he has had indigestion and has been taking Gaviscon Advance and Rennie, often at the same time as his morning Biktarvy. For 6 weeks he has also taken St John’s wort, bought online, for low mood. He has not told the HIV clinic. He asks if these are okay and wants “something stronger” for his stomach. Hidden agenda: his low mood is linked to a new relationship (Sarah, 3 months) — he has not told her about his HIV, is terrified of rejection after his ex-wife told friends about his diagnosis, and has avoided sex. He also worries the practice receptionist (who lives on his street) can see his records. No alarm features for dyspepsia (no weight loss, dysphagia, vomiting, GI bleeding, anaemia). PHQ-9 would be about 12; no suicidal thoughts or plans. The task: take a drug history including over-the-counter and herbal products; identify the interactions (St John’s wort can reduce bictegravir and tenofovir alafenamide levels, risking viral rebound and resistance — stop it; polyvalent cation antacids reduce bictegravir absorption — separate timing); check with the HIV clinic or the Liverpool HIV interactions checker; manage dyspepsia (lifestyle, a PPI is compatible with Biktarvy, H. pylori test); assess mood and risk; explore the disclosure concern and give accurate information about U=U and support; reassure about confidentiality; communicate with the HIV clinic with consent.',
    script:{
      opening:'“Hi, thanks. I’ve had bad indigestion for a few months and I’ve been taking Gaviscon and Rennies. And I’ve been a bit down, so I got some St John’s wort online. I just suddenly thought — is that alright with my HIV tablets? And could I have something stronger for my stomach?”',
      facts:[
        { topic:'HIV and treatment', text:'“Diagnosed nine years ago. I take Biktarvy, one tablet every morning with breakfast. Never miss it. The clinic says I’m undetectable.” Clinic every 6 months; next appointment in 3 months.' },
        { topic:'Antacids', text:'“I take Gaviscon Advance and a couple of Rennies most mornings — usually with my breakfast and my Biktarvy, because that’s when it’s bad. Sometimes again at night.”' },
        { topic:'St John’s wort', text:'“I’ve been taking it six weeks, one tablet twice a day. I haven’t told the clinic.” No other herbal or recreational drugs. Alcohol about 14 units a week, mostly wine at weekends. Non-smoker.' },
        { topic:'Indigestion', text:'“Burning in the upper tummy and up into my chest after meals, worse lying down. Three months.” If asked: no difficulty swallowing, no vomiting, no weight loss (weight steady), no black stools or blood, appetite fine. No family history of stomach or oesophageal cancer. Coffee four cups a day. Eats late.' },
        { topic:'Other medicines', text:'No other prescribed medicines. Takes ibuprofen occasionally for his back — “maybe once a week”.' },
        { topic:'Mood', text:'If asked: “Low for about two months. Not sleeping great, less interested in things, tired.” If asked about self-harm: “No, never — nothing like that. I’ve got a lot to live for.” No previous depression.' },
        { topic:'HIDDEN — new relationship', text:'If asked what is behind the low mood, or about relationships: “I’ve met someone — Sarah — three months ago. I haven’t told her. Last time I told someone, my ex-wife, she told half our friends. I keep putting off… you know, being intimate. I’m terrified she’ll leave.”' },
        { topic:'Questions about transmission', text:'If U=U is mentioned: “So I really can’t pass it on? Even without condoms? Do I legally have to tell her?”' },
        { topic:'HIDDEN — confidentiality', text:'If asked whether he has any other worries: “The receptionist here lives on my street. Can she see my notes?”' },
        { topic:'Sharing with the clinic', text:'Happy for the GP to write to the HIV clinic once confidentiality is explained.' },
        { topic:'How to play this (role-player)', text:'Pleasant, practical, a bit embarrassed. You want the medicines question answered quickly. Only mention Sarah if the doctor explores the low mood (what is going on in your life, what is getting you down). If the doctor asks about mood in a box-ticking way, say “just work stress”. If the doctor explains U=U clearly, become emotional and relieved. If the doctor tells you that you must tell Sarah before anything else, become defensive.' }
      ],
      data:{ kind:'HIV clinic letter — bloods 3 months ago', values:[
        ['HIV-1 viral load','<50 copies/mL (undetectable; continuously since 2018)','<50 = undetectable'],
        ['CD4 count','712 cells/mm³ (32%)','500–1500'],
        ['eGFR','88 mL/min/1.73m²','>60'],
        ['ALT','24 U/L','<41'],
        ['Total cholesterol / HDL','5.1 / 1.2 mmol/L','—'],
        ['HbA1c','36 mmol/mol','<42'],
        ['Haemoglobin','148 g/L','130–180'],
        ['Syphilis serology','Negative','—'],
        ['Hepatitis B','Immune (vaccinated)','—']
      ] }
      ,
      ice:{
        ideas:'The antacids and herbal remedy are “natural” and probably harmless; indigestion may be from stress.',
        concerns:'That he has damaged his HIV control; telling Sarah and being rejected; people finding out (receptionist).',
        expectations:'A yes or no about his remedies and a stronger indigestion medicine.'
      },
      cues:[
        '“I’ve been a bit down” — mentioned in passing as the reason for St John’s wort.',
        '“I haven’t told the clinic” — said with embarrassment.',
        'Looks away when asked if anything else is going on.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Takes a full drug history including timing, over-the-counter and herbal products, and recreational drugs and alcohol' },
      { dom:'dg', text:'Assesses dyspepsia for alarm features (weight loss, dysphagia, vomiting, GI bleeding, anaemia, age) and contributing factors (NSAIDs, alcohol, caffeine, late meals)' },
      { dom:'dg', text:'Explores the low mood — duration, impact, cause — and assesses risk of self-harm; elicits the disclosure worry' },
      { dom:'cm', text:'Identifies and explains the interactions — stop St John’s wort (risk of viral rebound and resistance); separate antacids from Biktarvy (at least 2 hours before) — and checks using the Liverpool HIV interactions resource or the HIV clinic' },
      { dom:'cm', text:'Manages dyspepsia safely — lifestyle advice, stop ibuprofen, a PPI that does not interact with his regimen, H. pylori test-and-treat with correct timing — and safety-nets for alarm features' },
      { dom:'cm', text:'Offers mood management that is safe with antiretrovirals (talking therapy, HIV clinic psychology, an interaction-checked antidepressant if needed), arranges review and writes to the HIV clinic with consent' },
      { dom:'ro', text:'Explains U=U accurately and supports him with disclosure without pressure, signposting peer support' },
      { dom:'ro', text:'Responds to the confidentiality worry honestly — explains records access, audit and how to raise concerns — and is non-judgemental about the unreported remedies' }
    ],
    worked:[
      { lbl:'Drug history', txt:'“When exactly do you take the Gaviscon and Rennies in relation to your Biktarvy? Anything else — herbal, online, from the gym?”' },
      { lbl:'Interaction', txt:'“St John’s wort speeds up how your body clears some HIV medicines, so levels can drop. That can let the virus come back and become resistant. I’d stop it today.”' },
      { lbl:'Antacids', txt:'“Indigestion remedies with calcium, magnesium or aluminium stop Biktarvy being absorbed properly. Take your Biktarvy at least 2 hours before them — or better, let’s treat the indigestion another way.”' },
      { lbl:'Mood', txt:'“You mentioned feeling down — what do you think is behind it?”' },
      { lbl:'U=U', txt:'“Your viral load has been undetectable for years. That means you cannot pass HIV on through sex. That’s well established.”' },
      { lbl:'Confidentiality', txt:'“Staff only access records when they need to for their job, and access is logged. If you’d like, we can review who has seen your record and restrict it.”' }
    ],
    learning:'Many people with HIV take over-the-counter and herbal products without telling their clinic. Always take a full drug history and check interactions (the Liverpool HIV Drug Interactions website is the standard resource; the HIV clinic pharmacist can advise). St John’s wort induces drug-metabolising enzymes and transporters and must not be taken with Biktarvy and many other antiretrovirals. Polyvalent cations (aluminium, magnesium, calcium, iron) chelate integrase inhibitors: take Biktarvy at least 2 hours before antacids. PPIs are compatible with Biktarvy but contraindicated with rilpivirine and atazanavir — check the regimen. Low mood is common in people living with HIV and is often linked to stigma and disclosure. U=U (undetectable = untransmittable): a person with a sustained undetectable viral load cannot transmit HIV sexually. In England and Wales criminal cases concern actual transmission; being on effective treatment with an undetectable viral load means sexual transmission will not occur. Support disclosure decisions; reassure about confidentiality; share information with the HIV clinic with consent.',
    stem:{
      name:'Tom Hargreaves',
      age:'46 years · male',
      pmh:['HIV-1 infection (diagnosed 9 years ago) — under hospital HIV clinic','Mechanical low back pain'],
      meds:['Bictegravir/emtricitabine/tenofovir alafenamide (Biktarvy) one tablet daily — hospital-prescribed (recorded as “hospital only” medication)','Ibuprofen 400 mg when needed (OTC, per patient)'],
      allergy:'NKDA',
      recent:'HIV clinic letter (3 months ago): “Doing well. Adherent. HIV-1 viral load <50 copies/mL (undetectable since 2018). CD4 712 cells/mm³ (32%). eGFR 88. ALT 24. Total cholesterol 5.1, HDL 1.2; QRISK3 5.8%. HbA1c 36. Syphilis negative; HBV immune. Plan: continue Biktarvy; review 6 months. Please contact us before starting any new medicines.” Pharmacy note from patient online request: “Asking about Gaviscon and St John’s wort with HIV meds.”',
      reason:'Video consultation: “indigestion and question about medicines”.'
    },
    ceg:['Long-term conditions & cancer','Prescribing','Mental health & addiction','Health disadvantage & vulnerabilities','Investigations & results'],
    timeMap:[
      { t:'0–2', h:'Open', d:'Hear both questions; note the mood comment.' },
      { t:'2–5', h:'Drug and dyspepsia history', d:'Exact timing of antacids and Biktarvy; St John’s wort; NSAIDs, alcohol; alarm features.' },
      { t:'5–7', h:'Mood', d:'Explore cause; risk assessment; elicit the relationship and disclosure fear.' },
      { t:'7–10', h:'Plan', d:'Stop St John’s wort; antacid timing; PPI plus H. pylori test; mood support safe with ART; check interactions; letter to clinic.' },
      { t:'10–12', h:'U=U, confidentiality, close', d:'Explain U=U; disclosure support; records access; review and safety-net.' }
    ],
    wordPics:{
      clearPass:'Takes a precise drug history, identifies both interactions and explains them clearly with a practical plan, manages dyspepsia safely with alarm features screened, explores the low mood to uncover the disclosure fear, explains U=U accurately and supportively, addresses the confidentiality worry honestly, and liaises with the HIV clinic with consent.',
      pass:'Identifies the St John’s wort interaction and antacid timing, treats dyspepsia sensibly and assesses mood and risk; the disclosure issue or confidentiality worry is handled more briefly.',
      fail:'Identifies one interaction only, or prescribes without checking interactions; mood assessed superficially; misses the relationship and disclosure concern.',
      clearFail:'Reassures that herbal remedies and antacids are fine; prescribes an interacting medicine; judgemental about HIV or disclosure; gives inaccurate transmission or legal information.'
    },
    avoid:[
      { dont:'“Herbal remedies are natural, so they won’t do any harm.”', instead:'“St John’s wort can lower the levels of your HIV medicine — that’s why I’d stop it.”', why:'Enzyme induction can cause virological failure and resistance.' },
      { dont:'“You have to tell her before you sleep with her — it’s the law.”', instead:'“With an undetectable viral load you can’t pass HIV on through sex. When and how you tell Sarah is your decision, and there’s support to help.”', why:'Inaccurate and stigmatising; U=U is established.' },
      { dont:'“I’ll just prescribe omeprazole.”', instead:'“Omeprazole is fine with Biktarvy — I’ll double-check with the interaction checker and let your clinic know.”', why:'PPIs interact with some antiretrovirals; always check the specific regimen.' }
    ],
    model:[
      { phase:'Opening', clock:'0–2 min', who:'dr', text:'Hello Tom, I’m Dr Evans. You’ve got questions about indigestion remedies and your HIV medicines — tell me more.', dom:'ro', why:'Open start' },
      { who:'pt', text:'Gaviscon and Rennies for three months, and St John’s wort for six weeks because I’ve been down. Is that okay with Biktarvy? And can I have something stronger?' },
      { phase:'Drug and dyspepsia history', clock:'2–5 min', who:'dr', text:'Thank you for asking — it’s really sensible. When do you take the antacids compared with your Biktarvy? And anything else — other herbal remedies, painkillers, anything from online or the gym?', dom:'dg', why:'Precise timing and full drug history' },
      { who:'pt', text:'With breakfast, same time as Biktarvy. Ibuprofen sometimes for my back. Nothing else.' },
      { who:'dr', text:'Any difficulty swallowing, vomiting, weight loss, black stools or blood? How much alcohol and coffee?', dom:'dg', why:'Dyspepsia alarm features and contributors' },
      { who:'pt', text:'None of those. Fourteen units a week, four coffees a day, I eat late.' },
      { phase:'Mood', clock:'5–7 min', who:'dr', text:'You mentioned feeling down. How long, and what do you think is behind it?', dom:'dg', why:'Explores the cue' },
      { who:'pt', text:'Couple of months. I’ve met someone — Sarah. I haven’t told her about my HIV. Last time, my ex-wife told our friends. I’m scared she’ll leave.' },
      { who:'dr', text:'That sounds really hard to carry. Have you had any thoughts of harming yourself or that life isn’t worth living?', dom:'dg', why:'Risk assessment' },
      { who:'pt', text:'No, nothing like that.' },
      { phase:'Plan', clock:'7–10 min', who:'dr', text:'Let’s take the medicines first. St John’s wort speeds up how your body clears Biktarvy, so levels can fall, which can let the virus come back and become resistant. Please stop it today. The antacids stick to Biktarvy and stop it being absorbed — if you need one, take Biktarvy at least 2 hours before. Better still, a medicine like omeprazole works well with Biktarvy; I’ll confirm on the HIV interactions checker before I prescribe.', dom:'cm', why:'Explains both interactions and a safe alternative' },
      { who:'pt', text:'I had no idea. Have I messed up my HIV?' },
      { who:'dr', text:'Very unlikely, but it’s worth a viral load test in the next few weeks to be sure — I’ll ask your clinic. With your consent I’ll write to them about all of this. We’ll also do a breath or stool test for a stomach bug called H. pylori, which needs you off omeprazole for 2 weeks, so we’ll do that first. Cutting down on late meals, coffee and ibuprofen will help too.', dom:'cm', why:'Viral load check, liaison with clinic, H. pylori timing, lifestyle' },
      { phase:'U=U, confidentiality, close', clock:'10–12 min', who:'dr', text:'About Sarah — your viral load has been undetectable for years. That means you cannot pass HIV on through sex. It’s called U=U. When and how you tell her is your choice, and the clinic’s health advisers and groups like Positively UK can help you plan it.', dom:'ro', why:'Accurate U=U and supportive approach to disclosure' },
      { who:'pt', text:'(emotional) I didn’t really believe that. And — the receptionist lives on my street. Can she see my notes?' },
      { who:'dr', text:'Staff only access records when needed for their job, and every access is logged. If you’d like, we can check who has looked at your record and add extra restrictions. For your mood, talking therapy or the clinic psychologist would be a good start, and if we consider an antidepressant I’ll pick one that’s safe with Biktarvy. Let’s speak again in 4 weeks — sooner if things get worse or you develop swallowing problems, vomiting or black stools.', dom:'ro', why:'Honest confidentiality reassurance, mood plan and safety-net' },
      { who:'pt', text:'Thank you. That’s a weight off.' }
    ],
    knowledge:{
      guideline:'BHIVA guidelines for the treatment of HIV-1-positive adults with antiretroviral therapy (2022) · University of Liverpool HIV Drug Interactions checker (current) · Biktarvy Summary of Product Characteristics (EMC, current) · NICE CG184 Dyspepsia and GORD in adults (2014, updated 2019) · NICE NG222 Depression in adults (2022) · BHIVA/BASHH position on U=U',
      summary:'Antiretroviral therapy interacts with many common medicines and herbal products. Always check, using the Liverpool resource or the HIV clinic. A sustained undetectable viral load means HIV cannot be transmitted sexually (U=U).',
      points:[
        { h:'St John’s wort', t:'Induces CYP3A, UGT1A1 and P-glycoprotein, lowering levels of bictegravir and tenofovir alafenamide (and many other antiretrovirals). Co-administration must be avoided; check viral load if exposure has occurred.' },
        { h:'Polyvalent cations', t:'Aluminium, magnesium, calcium and iron reduce integrase inhibitor absorption. For Biktarvy, take at least 2 hours before (or 6 hours after) aluminium/magnesium antacids; calcium or iron supplements can be taken together with food. Check the SmPC for the exact advice.' },
        { h:'Acid suppression', t:'PPIs and H2 blockers are compatible with Biktarvy, but PPIs are contraindicated with rilpivirine and reduce atazanavir. Always check the specific regimen.' },
        { h:'Dyspepsia', t:'Screen for alarm features; under 55 without alarm features: lifestyle changes, review NSAIDs, full-dose PPI for 4 weeks or H. pylori test-and-treat (2 weeks off PPI before testing).' },
        { h:'Mood', t:'Depression is more common in people living with HIV. Offer psychological therapy; if an antidepressant is needed, check interactions (sertraline and citalopram are often suitable with integrase-based regimens).' },
        { h:'U=U', t:'People with HIV on treatment with a sustained undetectable viral load (under 200 copies/mL) do not transmit HIV sexually. Endorsed by BHIVA and BASHH.' },
        { h:'Law and disclosure', t:'There is no general legal duty to disclose HIV status. In England and Wales, prosecutions concern actual transmission where the person was reckless or intentional; with an undetectable viral load, sexual transmission does not occur. Support the person to decide about disclosure.' },
        { h:'Shared care', t:'GP and HIV clinic share responsibility: record antiretrovirals on the GP system as hospital-prescribed to trigger interaction alerts, and communicate changes.' }
      ]
    },
    kb:{
      social:[ { h:'Stigma', t:'Previous breaches by an ex-partner and fear of rejection are common drivers of low mood. Peer support helps.' } ],
      legal:[ { h:'Confidentiality', t:'Data Protection Act 2018 / UK GDPR: access to records only for a legitimate purpose; access is auditable. Patients can ask for an access audit.' } ],
      professional:[ { h:'GMC Confidentiality (2017)', t:'Share information with the HIV clinic with consent for direct care. Do not disclose HIV status to partners without consent; with an undetectable viral load there is no risk that could justify it.' } ],
      community:[ { h:'Support', t:'Positively UK (peer support), Terrence Higgins Trust (THT Direct), NAM aidsmap, HIV clinic health advisers and psychology.' } ]
    },
    playbook:{
      history:{
        redFlags:['Dysphagia, vomiting, weight loss, GI bleeding, anaemia','Suicidal thoughts','Missed antiretroviral doses or viral rebound'],
        psychosocial:['New relationship and fear of disclosure','Previous breach by ex-wife','Receptionist neighbour'],
        ice:['Idea: natural remedies are harmless','Concern: damaged HIV control; rejection; being found out','Expectation: yes/no answer and a stronger medicine']
      },
      diagnosis:'Uncomplicated dyspepsia; clinically significant interactions (St John’s wort, cation antacids with bictegravir); mild–moderate low mood linked to disclosure fears; HIV well controlled.',
      diagnosisLay:'“St John’s wort can make your HIV tablets work less well, and indigestion remedies can stop them being absorbed. Let’s stop the herbal tablet and treat the indigestion in a way that doesn’t clash.”',
      management:{
        reflectIce:'“You thought these were harmless — lots of people do. You were right to ask. And the low mood seems to be about Sarah, which we can help with.”',
        psychosocial:'U=U explained; disclosure support; confidentiality audit offered; peer support.',
        sharedPlan:['Stop St John’s wort today; viral load check via clinic','Biktarvy at least 2 hours before any antacid; omeprazole after interaction check','H. pylori test after 2 weeks off PPI; lifestyle; stop ibuprofen','Talking therapy/clinic psychology; letter to HIV clinic with consent'],
        safetyNet:['Swallowing difficulty, vomiting, black stools, weight loss → contact promptly','Worsening mood or thoughts of self-harm → same-day contact, 111, Samaritans 116 123','Review 4 weeks']
      }
    },
    links:[
      { ic:'💠', t:'HIV', s:'Protocol', href:'management/hiv.html' },
      { ic:'📋', t:'HIV', s:'Case walkthrough', href:'../cases/hiv.html' },
      { ic:'💠', t:'Prescribing guide', s:'Interactions and safety', href:'prescribing-guide.html' }
    ],
    pitfalls:{
      intro:'He asks two simple questions. The marks are in the drug history, the hidden relationship, and getting U=U right.',
      items:[
        { dom:'cm', fail:'Prescribing a PPI and saying “carry on with the rest”.', why:'St John’s wort risks viral rebound and resistance.', fix:'Stop it, explain why, and check viral load.' },
        { dom:'dg', fail:'Not asking when antacids are taken.', why:'Taking them with Biktarvy reduces absorption.', fix:'Ask exact timing and advise separation.' },
        { dom:'ro', fail:'Treating the low mood as a tick-box.', why:'The cause — fear of disclosure — is what he needs help with.', fix:'Ask what is behind it.' },
        { dom:'ro', fail:'Telling him he must disclose by law, or that condoms are essential.', why:'Inaccurate; U=U applies; increases stigma.', fix:'Explain U=U and offer disclosure support.' }
      ]
    },
    scorecard:{
      dg:[
        { t:'Full drug history', d:'Timing, OTC, herbal, NSAIDs, alcohol, recreational.', pts:2 },
        { t:'Dyspepsia assessment', d:'Alarm features and contributors.', pts:1 },
        { t:'Mood and risk', d:'Cause explored; self-harm risk assessed.', pts:2 },
        { t:'Uses the clinic letter', d:'Recognises sustained undetectable viral load and normal bloods.', pts:1 }
      ],
      cm:[
        { t:'Interactions managed', d:'Stop St John’s wort; separate antacids; checker/clinic used.', pts:2 },
        { t:'Dyspepsia plan', d:'Lifestyle, stop NSAID, compatible PPI, H. pylori timing.', pts:1 },
        { t:'Mood plan and liaison', d:'Therapy, interaction-checked options; viral load; letter with consent; review.', pts:2 }
      ],
      ro:[
        { t:'U=U and disclosure support', d:'Accurate, non-pressuring, signposted.', pts:2 },
        { t:'Confidentiality concern', d:'Honest explanation of access and audit.', pts:1 },
        { t:'Non-judgemental', d:'About unreported remedies and HIV.', pts:1 }
      ],
      maxDg:6, maxCm:5, maxRo:4, total:15
    }
  };

  /* ===== P10. Non-binary patient — screening, bleeding, records — video ===== */
  const p10 = {
    id:'non-binary-patient',
    title:'“I keep getting smear test letters — last time it went really badly, and I’m not sure I even need one”',
    type:'video', duration:12,
    meta:{
      age:31, sex:'Non-binary (assigned female at birth)',
      setting:'Video consultation with a non-binary person (they/them) about cervical screening.',
      system:'Inclusive care / Gynaecology & sexual health — cervical screening for trans and non-binary people, postcoital bleeding on testosterone, contraception, records',
      checked:'October 2026',
      blueprint:{ difficulty:3, lifeStage:'adult', groups:['Ethnicity, culture & diversity','Gender, reproductive & sexual health','Health disadvantage & vulnerabilities','Professional & ethical'], type:'video', thirdParty:false }
    },
    brief:'Rowan Price, 31, a graphic designer, is non-binary and uses they/them pronouns. Their record still shows their birth name, Rebecca, and the title “Miss”. They take low-dose testosterone gel prescribed under shared care with an NHS gender service (started 18 months ago). Their cervical screening is overdue: at the last attempt 4 years ago the nurse repeatedly called them “Rebecca” and “young lady”, the examination was painful, and they asked to stop; the test was not completed. They ask whether they still need screening (“I only had sex with women until recently”) and want their name and pronouns corrected. Hidden agenda: they have a new male partner, Dev, for 4 months; they have had bleeding after sex twice in the last 2 months and are worried; condoms are used “most of the time” and they thought testosterone would stop them getting pregnant. Last bleed was spotting 10 days ago; periods have largely stopped on testosterone. No pelvic pain, no discharge, no weight loss. The task: use their name and pronouns; acknowledge the previous experience; explain screening eligibility (anyone with a cervix aged 25–64 who has ever been sexually active; HPV is transmitted between partners of any gender); recognise that postcoital bleeding needs an examination of the cervix (not just a screening test) and STI testing, plus a pregnancy test because testosterone is not contraception and is harmful in pregnancy; offer contraception compatible with testosterone; plan an adapted in-person appointment (chosen clinician, longer slot, smaller speculum, self-insertion, optional vaginal oestrogen pre-treatment for testosterone-related atrophy, discussed with the gender service); update the record (name, title, pronouns) and explain how changing the registered gender marker affects automatic screening invitations.',
    script:{
      opening:'“Hi. Um, first — I’m Rowan, not Rebecca, and I use they/them. The system still has my old name. I keep getting letters about a smear test. The last one went really badly, and honestly I’m not sure I even need one.”',
      facts:[
        { topic:'Last screening attempt', text:'If asked: “Four years ago. The nurse kept calling me Rebecca and ‘young lady’ even after I told her. It really hurt and I asked her to stop. I left in tears and haven’t been back to a GP since, except online.”' },
        { topic:'Testosterone', text:'“I’ve been on testosterone gel for eighteen months through the gender clinic. My periods mostly stopped after about four months.”' },
        { topic:'Sexual history', text:'“I only had sex with women until this year — that’s partly why I thought I didn’t need a smear. Now I’m with Dev — he’s a man — four months.” Condoms: “Most of the time.” No other partners in the last year.' },
        { topic:'HIDDEN — bleeding after sex', text:'Only if asked about bleeding, or asked “is there anything else worrying you?”: “Actually, there’s something. I’ve bled after sex twice in the last couple of months. Just a bit of red. I didn’t know if it’s the testosterone. I’ve been worried.”' },
        { topic:'Bleeding details', text:'Last spotting 10 days ago. No bleeding at other times recently. No pelvic pain, no discharge, no pain during sex except some dryness. No weight loss, no fevers.' },
        { topic:'Pregnancy and contraception', text:'If asked: “I thought testosterone stopped you getting pregnant… doesn’t it?” Has not done a pregnancy test. Last unprotected sex about a week ago.' },
        { topic:'Other health', text:'No medical problems. Non-smoker, alcohol occasionally. No allergies. HPV vaccine at school: “I think so.”' },
        { topic:'Records', text:'“I’d like my name changed to Rowan and the title Mx. I want my pronouns on there so I don’t have to keep saying it.” If asked about changing the gender marker: “I’ve thought about it. Would that change anything?”' },
        { topic:'Preferences for an exam', text:'If asked: “I’d want someone who gets it. Not rushed. Maybe I could put the speculum in myself? And I’d want to be able to stop.”' },
        { topic:'How to play this (role-player)', text:'Guarded and a bit tense, watching how the doctor responds to your name and pronouns. If the doctor uses “Rebecca”, “she” or “Miss”, become curt and give short answers. If the doctor apologises for the past experience and uses your name and pronouns naturally, open up and mention the bleeding. Do not raise the bleeding until asked about bleeding or invited to share other worries. If told you need an examination, hesitate (“I really don’t want a repeat of last time”) and agree if adjustments are offered.' }
      ],
      ice:{
        ideas:'Maybe they don’t need screening because they had sex mainly with women; maybe the bleeding is due to testosterone.',
        concerns:'Being misgendered and hurt again; something being wrong with the cervix; whether they could be pregnant.',
        expectations:'Records corrected, an honest answer about screening, and to be treated with respect.'
      },
      cues:[
        '“The system still has my old name” — test of respect from the first minute.',
        '“I left in tears” — the depth of the previous experience.',
        'Pause before saying “I’m not sure I even need one” — the bleeding is behind it.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Uses the correct name and pronouns throughout and asks how they would like to be addressed' },
      { dom:'dg', text:'Takes a relevant history — screening history, testosterone use, sexual history and partners, contraception, bleeding pattern (postcoital, intermenstrual), pain and discharge' },
      { dom:'dg', text:'Identifies postcoital bleeding as needing clinical examination of the cervix and STI testing, and identifies the need for a pregnancy test' },
      { dom:'cm', text:'Explains screening eligibility accurately — anyone with a cervix aged 25–64; HPV passes between partners of any gender; testosterone does not remove the need' },
      { dom:'cm', text:'Plans an adapted in-person examination (chosen clinician, longer slot, smaller speculum, self-insertion, right to stop, consider vaginal oestrogen pre-treatment with the gender service) with STI tests and cervical sample if due; safety-net and follow-up' },
      { dom:'cm', text:'Advises that testosterone is not contraception and can harm a pregnancy; offers suitable options (progestogen-only methods, IUDs, condoms) and emergency contraception considerations' },
      { dom:'ro', text:'Acknowledges and apologises for the previous poor experience without defensiveness, and builds trust' },
      { dom:'cm', text:'Updates the record (name, title, pronouns) and explains how changing the registered gender marker affects automatic screening invitations, offering manual recall' }
    ],
    worked:[
      { lbl:'Start right', txt:'“Thanks, Rowan — I’ll update that today. I’m sorry the record was wrong.”' },
      { lbl:'Acknowledge', txt:'“I’m really sorry about what happened last time. Being misgendered and hurt during an examination shouldn’t happen, and I can understand why you didn’t come back.”' },
      { lbl:'Eligibility', txt:'“Screening is for anyone with a cervix aged 25 to 64 who has ever been sexually active. HPV can pass between partners of any gender, so you do still need it.”' },
      { lbl:'Find the bleeding', txt:'“Have you had any bleeding after sex, or between periods?”' },
      { lbl:'Why an examination', txt:'“Bleeding after sex is usually from something harmless like dryness or an infection, but it does need someone to look at the cervix — a screening test alone isn’t enough.”' },
      { lbl:'Testosterone and pregnancy', txt:'“Testosterone doesn’t reliably stop ovulation, so pregnancy is possible, and testosterone can harm a developing baby. Let’s do a pregnancy test and talk about contraception that works alongside it.”' }
    ],
    learning:'Inclusive care starts with the basics: use the person’s name and pronouns, correct the record, and acknowledge past harm. Anyone with a cervix aged 25–64 who has ever been sexually active should be offered cervical screening, whatever their gender or partners’ gender; trans men and non-binary people registered as male are not invited automatically, so practices must recall them manually. Testosterone can cause vaginal atrophy, making examination uncomfortable; a short course of vaginal oestrogen beforehand may help (discuss with the patient and gender service), along with a smaller speculum, self-insertion, a chosen clinician and an explicit right to stop. Postcoital bleeding is a symptom, not a screening question: examine the cervix, test for STIs, and refer on a suspected cancer pathway if the cervix looks suspicious. Testosterone is not a contraceptive and is teratogenic; offer progestogen-only methods, IUDs and condoms. From August 2026, HPV self-sampling kits are being offered to some under-screened people in England, but self-sampling is not suitable when there are symptoms.',
    stem:{
      name:'Rowan Price (registered name “Rebecca Price”, title “Miss”)',
      age:'31 years · registered sex: female',
      pmh:['Gender incongruence — NHS gender service; testosterone under shared care (18 months)','Cervical screening: last attempt 4 years ago — “procedure stopped at patient request, sample not taken”; overdue','HPV vaccination record: 2 doses (school programme)'],
      meds:['Testosterone gel 16.2 mg/g — 2 pumps daily (shared care)'],
      allergy:'NKDA',
      recent:'Gender service letter (2 months ago): “Rowan (they/them) — testosterone level within target range. Haematocrit 0.45. Amenorrhoea since month 4. Please note patient’s name and pronouns.” Shared-care monitoring bloods (6 weeks ago): haematocrit 0.46 (0.36–0.50); LFTs normal. Screening reminder letters x3 (addressed to “Miss R Price”).',
      reason:'Video consultation: “Question about smear test letters and updating my records.”'
    },
    ceg:['Ethnicity, culture & diversity','Gender, reproductive & sexual health','Health disadvantage & vulnerabilities','Professional & ethical'],
    timeMap:[
      { t:'0–2', h:'Name, pronouns, trust', d:'Use Rowan and they/them; commit to update the record; acknowledge the letters.' },
      { t:'2–5', h:'Hear the past', d:'Previous screening experience; apologise; what they need to feel safe.' },
      { t:'5–7', h:'History', d:'Testosterone, sexual history, partners, contraception, bleeding (postcoital), pain, discharge, pregnancy risk.' },
      { t:'7–10', h:'Explain and plan', d:'Screening eligibility; PCB needs examination and STI tests; pregnancy test; contraception with testosterone.' },
      { t:'10–12', h:'Adapted appointment and records', d:'Chosen clinician, longer slot, self-insertion, local oestrogen option; record changes; gender marker and recall; safety-net.' }
    ],
    wordPics:{
      clearPass:'Uses Rowan’s name and pronouns from the start, acknowledges past harm sincerely, explains screening eligibility accurately, uncovers the postcoital bleeding and pregnancy risk and manages them correctly (examination, STI tests, pregnancy test, contraception compatible with testosterone), plans a genuinely adapted examination, and updates the record with clear advice about gender marker and recall.',
      pass:'Respectful throughout; explains eligibility and plans an adapted screening appointment; identifies the bleeding and arranges examination, with contraception or record changes covered more briefly.',
      fail:'Respectful but focuses only on screening; misses the bleeding or pregnancy risk; or plans a standard smear without adaptations.',
      clearFail:'Misgenders repeatedly or uses the old name, tells them they do not need screening because of past partners or testosterone, or dismisses the bleeding; no plan.'
    },
    avoid:[
      { dont:'“As a woman, you still need your smear.”', instead:'“Anyone with a cervix aged 25 to 64 should be offered screening.”', why:'Misgenders and alienates; use anatomy-based, neutral language.' },
      { dont:'“If you’ve mostly had sex with women you probably don’t need it.”', instead:'“HPV can pass between partners of any gender, so screening is still recommended.”', why:'Inaccurate; under-screening in LGBTQ+ people is a recognised problem.' },
      { dont:'“Testosterone will stop you getting pregnant.”', instead:'“Testosterone isn’t reliable contraception and could harm a pregnancy.”', why:'Dangerous misconception.' }
    ],
    model:[
      { phase:'Name, pronouns, trust', clock:'0–2 min', who:'dr', text:'Hi Rowan, I’m Dr Clarke — I use he/him. Thanks for telling me your name and pronouns; I’ll update the record today. I’m sorry it was wrong. What would you like to talk about?', dom:'ro', why:'Uses correct name, models pronouns, commits to action' },
      { who:'pt', text:'I keep getting smear letters. Last time went really badly. I’m not sure I even need one.' },
      { phase:'Hearing the past', clock:'2–5 min', who:'dr', text:'Can you tell me what happened last time?', dom:'dg', why:'Invites the story' },
      { who:'pt', text:'The nurse kept calling me Rebecca and young lady, it hurt, I asked her to stop and left in tears.' },
      { who:'dr', text:'I’m really sorry. That shouldn’t have happened, and it makes complete sense that you haven’t wanted to come back. If we plan anything, it will be on your terms, and you can stop at any point.', dom:'ro', why:'Sincere apology and control' },
      { phase:'History', clock:'5–7 min', who:'dr', text:'Can I ask a few health questions so I can give you the right advice? You’re on testosterone — how long, and what’s happened with periods? And who are your partners at the moment?', dom:'dg', why:'Relevant, explained questions' },
      { who:'pt', text:'Eighteen months; periods stopped. I was only with women until this year — now Dev, he’s a man, four months.' },
      { who:'dr', text:'Thanks. Have you had any bleeding after sex or between periods, pain, or discharge?', dom:'dg', why:'Asks directly about bleeding — uncovers the hidden concern' },
      { who:'pt', text:'Actually… I’ve bled after sex twice in the last couple of months. I didn’t know if it was the testosterone.' },
      { who:'dr', text:'I’m glad you told me. And for contraception — what do you and Dev use?', dom:'dg', why:'Pregnancy risk' },
      { who:'pt', text:'Condoms, mostly. I thought testosterone stops pregnancy anyway.' },
      { phase:'Explanation and plan', clock:'7–10 min', who:'dr', text:'That’s a really common belief, but testosterone doesn’t reliably stop ovulation, and it can harm a developing baby. So a pregnancy test is sensible now. Options that work well alongside testosterone include the implant, the progestogen-only pill or a coil — and condoms protect against infections.', dom:'cm', why:'Corrects misconception; contraception compatible with testosterone' },
      { who:'dr', text:'On screening: anyone with a cervix aged 25 to 64 who has ever had sex should be offered it — HPV can pass between partners of any gender. The bleeding after sex is different: it’s usually something harmless like dryness or infection, but it needs someone to look at your cervix and do swabs, not just a screening test.', dom:'cm', why:'Accurate eligibility and correct approach to PCB' },
      { who:'pt', text:'I really don’t want a repeat of last time.' },
      { phase:'Adapted appointment and records', clock:'10–12 min', who:'dr', text:'Let’s design it with you. A longer appointment with a clinician experienced in trans and non-binary care, a smaller speculum, and you can insert it yourself if you prefer. Testosterone can make the tissues dry, so a short course of vaginal oestrogen beforehand may help — I’ll check with your gender team. We can take the screening sample at the same time as the swabs. And I’ll change your name to Rowan, your title to Mx, and add your pronouns. If you change your registered gender later, the automatic screening letters may stop, so we’d set up a reminder ourselves.', dom:'cm', why:'Adapted exam, liaison, records and recall' },
      { who:'pt', text:'That actually sounds okay. Thank you.' },
      { who:'dr', text:'Let’s book that within the next two weeks. If you get heavier bleeding, pain or discharge before then, or the pregnancy test is positive, contact us straight away.', dom:'cm', why:'Timely follow-up and safety-net' }
    ],
    knowledge:{
      guideline:'UKHSA/NHS England NHS population screening: information for trans and non-binary people (current) · NHS Cervical Screening Programme: 5-yearly interval for HPV-negative people aged 25–49 (from 1 July 2025) and HPV self-sampling offer for under-screened people (from August 2026) · NICE NG12 Suspected cancer: recognition and referral (2015, updated April 2026) · CoSRH Statement on contraceptive choices and sexual health for transgender and non-binary people (2017, updated) · GMC Good medical practice (2024) · Equality Act 2010',
      summary:'Offer cervical screening to anyone with a cervix aged 25–64, whatever their gender identity or partners. Use correct names and pronouns, adapt examinations, and treat symptoms such as postcoital bleeding as symptoms needing examination. Testosterone is not contraception.',
      points:[
        { h:'Who is eligible', t:'Anyone with a cervix aged 25–64 who has ever been sexually active. People registered as female are invited automatically; those registered as male are not, so practices should recall manually.' },
        { h:'Interval', t:'In England, people aged 25–49 who test HPV-negative are recalled every 5 years (for tests from 1 July 2025); 50–64 every 5 years. HPV-positive results lead to earlier recall or colposcopy.' },
        { h:'Postcoital bleeding', t:'A symptom, not a screening issue: examine the cervix, test for chlamydia and gonorrhoea, consider pregnancy. Refer on a suspected cancer pathway if the appearance of the cervix is consistent with cervical cancer; persistent unexplained PCB merits gynaecology referral.' },
        { h:'Testosterone and examination', t:'Testosterone causes vaginal atrophy. Options: smaller speculum, lubricant, self-insertion, positioning, a short course of vaginal oestrogen beforehand (discuss with the gender service), longer slot, chosen clinician, right to stop.' },
        { h:'Contraception', t:'Testosterone does not reliably suppress ovulation and is teratogenic. Suitable options: Cu-IUD, LNG-IUS, implant, progestogen-only pill or injection; condoms for STIs. Oestrogen-containing methods are usually avoided by preference and because they may counter masculinising effects.' },
        { h:'Self-sampling', t:'HPV self-sampling kits are being offered to some under-screened people in England from August 2026. They are not suitable when someone has symptoms.' },
        { h:'Records', t:'Name and title can be updated on request; record pronouns. Changing the registered gender marker can affect screening invitations (and may create a new NHS record); agree a manual recall plan.' },
        { h:'Respect', t:'Use the person’s name and pronouns; apologise for past harm; ask what would help. Discrimination on grounds of gender reassignment is unlawful under the Equality Act 2010.' }
      ]
    },
    kb:{
      social:[ { h:'Healthcare avoidance', t:'Trans and non-binary people often avoid care after poor experiences, leading to under-screening and late presentation.' } ],
      legal:[ { h:'Equality Act 2010', t:'Gender reassignment is a protected characteristic. Non-binary people should be treated with dignity and without discrimination; services should make reasonable adjustments.' } ],
      professional:[ { h:'GMC Good medical practice (2024)', t:'Treat patients fairly and with respect; use preferred names and pronouns; raise concerns about poor care and consider feedback to colleagues.' } ],
      community:[ { h:'Support', t:'Jo’s Cervical Cancer Trust (information for trans and non-binary people), LGBT Foundation, Live Through This; local trans-inclusive sexual health clinics.' } ]
    },
    playbook:{
      history:{
        redFlags:['Postcoital or intermenstrual bleeding','Pelvic pain, discharge, weight loss','Possible pregnancy on testosterone'],
        psychosocial:['Previous misgendering and painful examination','Healthcare avoidance','New relationship'],
        ice:['Idea: screening not needed; bleeding from testosterone','Concern: being hurt again; cervix problem; pregnancy','Expectation: records corrected, honest answer, respect']
      },
      diagnosis:'Overdue cervical screening in a non-binary person on testosterone, with new postcoital bleeding (needs examination, STI tests) and pregnancy risk from inconsistent condom use.',
      diagnosisLay:'“You do still need screening, and the bleeding after sex needs a proper look at the cervix. It’s usually something simple like dryness or an infection, but we should check.”',
      management:{
        reflectIce:'“You came expecting to be told you needed a smear — and worried about last time. We’ll do it differently, and we’ll look into the bleeding properly.”',
        psychosocial:'Apologise; chosen clinician; longer slot; self-insertion; support person; feedback to the team.',
        sharedPlan:['Pregnancy test now; contraception compatible with testosterone','Adapted in-person examination within 2 weeks: cervix inspection, STI swabs, screening sample','Consider vaginal oestrogen pre-treatment after discussion with gender service','Update name, title, pronouns; manual recall if gender marker changes'],
        safetyNet:['Heavier bleeding, pain, discharge or positive pregnancy test → contact promptly','Results and follow-up arranged']
      }
    },
    links:[
      { ic:'📋', t:'Cervical screening', s:'Case walkthrough', href:'../cases/cervical-screening.html' },
      { ic:'💠', t:'Gender dysphoria', s:'Protocol', href:'management/gender-dysphoria.html' },
      { ic:'🗺️', t:'Vaginal bleeding', s:'Pathway incl. postcoital bleeding', href:'algorithms/vaginal-bleeding.html' }
    ],
    pitfalls:{
      intro:'The first 30 seconds decide this station. After that, the marks are in finding the bleeding and the pregnancy risk.',
      items:[
        { dom:'ro', fail:'Using the registered name or “she” from the notes.', why:'Repeats the harm that drove them away.', fix:'Use the name and pronouns they give; update the record.' },
        { dom:'dg', fail:'Discussing only screening.', why:'Misses postcoital bleeding, which needs examination.', fix:'Always ask about bleeding after sex or between periods.' },
        { dom:'cm', fail:'Accepting that testosterone is contraception.', why:'It is not, and it is teratogenic.', fix:'Pregnancy test and contraception options.' },
        { dom:'cm', fail:'Booking a standard 10-minute smear.', why:'Likely to fail again and further erode trust.', fix:'Adapt the appointment with them.' }
      ]
    },
    scorecard:{
      dg:[
        { t:'Name and pronouns', d:'Correct from the start and throughout.', pts:1 },
        { t:'Relevant history', d:'Screening, testosterone, partners, contraception, bleeding, pain, discharge.', pts:2 },
        { t:'Identifies PCB and pregnancy risk', d:'Needs examination, STI tests and pregnancy test.', pts:2 }
      ],
      cm:[
        { t:'Accurate eligibility', d:'Cervix 25–64; HPV between any partners; testosterone irrelevant to need.', pts:1 },
        { t:'Adapted examination plan', d:'Clinician, time, speculum, self-insertion, local oestrogen, right to stop; follow-up.', pts:2 },
        { t:'Contraception and pregnancy', d:'Testosterone not contraceptive; suitable methods.', pts:1 },
        { t:'Records and recall', d:'Name, title, pronouns; gender marker and manual recall.', pts:1 }
      ],
      ro:[
        { t:'Acknowledges past harm', d:'Sincere apology; non-defensive.', pts:2 },
        { t:'Builds trust and shares control', d:'Plan designed with them.', pts:1 },
        { t:'Inclusive language', d:'Anatomy-based, neutral, non-assumptive.', pts:1 }
      ],
      maxDg:5, maxCm:5, maxRo:4, total:14
    }
  };

  const NEW = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

  /* Keep the scorecard maxima in step with the authored items. */
  NEW.forEach(function(c){
    var sc = c.scorecard; if (!sc) return;
    var sum = function(a){ return (a || []).reduce(function(s, x){ return s + (x.pts || 0); }, 0); };
    sc.maxDg = sum(sc.dg); sc.maxCm = sum(sc.cm); sc.maxRo = sum(sc.ro);
    sc.total = sc.maxDg + sc.maxCm + sc.maxRo;
    /* Compatibility: tools still on the legacy three-card word-picture layout read
       wordPics.exc for the top band. Expose the Clear pass text there without
       duplicating data (non-enumerable). Remove once the tools read clearPass. */
    if (c.wordPics && c.wordPics.clearPass && !('exc' in c.wordPics)) {
      Object.defineProperty(c.wordPics, 'exc', { value: c.wordPics.clearPass, enumerable: false, configurable: true });
    }
  });

  if (window.SCA_CASES) window.SCA_CASES.push.apply(window.SCA_CASES, NEW);

})();
