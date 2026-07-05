/* ============================================================
   Reasoning GP — Case Library batch 28: "Vascular & rhythm"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   Emergencies: DVT (and PE escalation); acute limb ischaemia.
   NG12 not applicable to these presentations (correctly omitted).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases27.js.
   ============================================================ */

(function(){

  /* ============ 105. TELEPHONE — Swollen calf: DVT vs cellulitis ============ */
  const c105 = {
    id:'dvt-calf', title:'"My leg\u2019s swollen and sore \u2014 I think I\u2019ve pulled something"', type:'telephone', duration:12,
    meta:{ age:58, sex:'F', setting:'Telephone \u2014 unilateral swollen, painful calf.', system:'Urgent / DVT vs cellulitis' },
    brief:'Mrs Lorraine Beckett, 58, office manager. Rings about her LEFT calf, swollen, tender and warm for 3 days, getting worse. She blames "pulling something" gardening. On questioning: returned 5 days ago from a long-haul flight (Australia), the calf is bigger than the right, no skin break/spreading redness with fever. Recently started the combined-style HRT; ex-smoker. She wants "a strong anti-inflammatory gel" and to avoid going anywhere. If asked: mild breathlessness she dismisses. Meds: HRT.',
    script:{
      opening:'"Hello \u2014 sorry to bother you. My left calf\u2019s gone all swollen and achy, been three days, and it\u2019s a bit warm. I\u2019m sure I\u2019ve just pulled a muscle doing the garden, or maybe it\u2019s a touch of that cellulitis my neighbour had. Could you pop a prescription through for one of those strong anti-inflammatory gels, or some antibiotics, so I don\u2019t have to traipse anywhere? I\u2019m rushed off my feet this week."',
      facts:[
        { topic:'The DVT picture',     text:'If explored: UNILATERAL calf swelling (measurably bigger than the other side), tenderness along the deep veins, warmth, worsening over days, in the context of recent LONG-HAUL FLIGHT (immobility) and HRT (oestrogen \u2014 a prothrombotic risk factor). This is a deep vein thrombosis until proven otherwise \u2014 not a pulled muscle, and usually not cellulitis (which is typically a spreading red area, often with a skin break/fever).' },
        { topic:'The PE red flag',      text:'CRITICAL \u2014 on direct questioning she has mild BREATHLESSNESS (and, if asked, a fleeting sharp chest pain). DVT can embolise to the lungs; any breathlessness, pleuritic chest pain, haemoptysis, syncope or tachycardia raises PULMONARY EMBOLISM \u2014 which escalates urgency to emergency assessment. She dismisses it as "being unfit".' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the "just a pull, give me a gel" is driven by being overwhelmed (caring for an unwell husband, can\u2019t take time off) and a wish for the simplest possible answer, plus she\u2019s frightened that her HRT \u2014 which transformed her menopause \u2014 might be "the cause" and that she\u2019ll be told to stop it. So she\u2019s minimising and steering to a benign explanation. The risk-factor history must be actively drawn out.' },
        { topic:'Why not gel/antibiotics', text:'An anti-inflammatory gel or antibiotics over the phone would miss a DVT (and a possible PE). The presentation needs a structured assessment (Wells score) and, on a likely/clinical-suspicion basis, urgent same-day pathway for D-dimer/Doppler ultrasound \u00b1 interim anticoagulation \u2014 not remote symptomatic treatment.' },
        { topic:'What she needs',       text:'Officially: a gel/antibiotics and no appointment. What she needs: recognition of probable DVT (with the flight + HRT risk factors), a Wells-based same-day DVT pathway (D-dimer/Doppler \u00b1 interim anticoagulation), urgent escalation if PE features, the HRT addressed honestly, and her caring/time barriers acknowledged.' },
      ],
      ice:{
        ideas:'It\u2019s a pulled muscle from gardening, or maybe cellulitis; a gel or antibiotics over the phone will sort it.',
        concerns:'HIDDEN AGENDA \u2014 overwhelmed (caring for an unwell husband, can\u2019t take time off) so wants the simplest answer; and frightened the HRT (which transformed her menopause) is "the cause" and she\u2019ll be told to stop it \u2014 so she minimises.',
        expectations:'A gel/antibiotics and no appointment. What she actually needs: a same-day DVT pathway (Wells, D-dimer/Doppler \u00b1 interim anticoagulation), urgent escalation if PE features, and the HRT addressed honestly.'
      },
      cues:['Unilateral swollen, warm, tender calf worsening over days + recent long-haul flight + HRT \u2014 DVT until proven otherwise, not a pulled muscle.','Dismissed breathlessness \u2014 possible PE; escalates urgency to emergency assessment.','"Just give me a gel, can\u2019t take time off, is it my HRT?" \u2014 minimisation driven by overwhelm + HRT fear; draw out the risk factors.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises a unilateral swollen, warm, tender calf worsening over days as possible DEEP VEIN THROMBOSIS \u2014 and does NOT accept "pulled muscle" or treat as cellulitis with antibiotics/anti-inflammatory gel over the phone' },
      { dom:'tasks', text:'Actively elicits and weights the RISK FACTORS: recent long-haul flight/immobility and HRT (oestrogen), plus smoking history \u2014 and uses a structured assessment (two-level Wells DVT score) to guide the pathway' },
      { dom:'tasks', text:'Screens for PULMONARY EMBOLISM and escalates accordingly: asks about breathlessness, pleuritic chest pain, haemoptysis, syncope, tachycardia \u2014 and recognises that PE features mandate EMERGENCY assessment (not the routine DVT pathway)' },
      { dom:'tasks', text:'Arranges the correct SAME-DAY DVT pathway: per Wells/clinical suspicion, urgent D-dimer and/or proximal-leg Doppler ultrasound, with INTERIM ANTICOAGULATION if the scan cannot be done promptly (per local pathway) \u2014 rather than remote symptomatic treatment' },
      { dom:'tasks', text:'Addresses the HRT honestly without knee-jerk blame: acknowledges oestrogen is a risk factor, that a confirmed VTE would mean reviewing/stopping it, but does not stop it or moralise before assessment \u2014 and considers the broader provoked/unprovoked work-up later' },
      { dom:'rto',   text:'Hears the minimisation as overwhelm and HRT fear, draws out the risk-factor history, and does NOT collude with "just a gel"; acknowledges the caring/time barriers while holding the urgency' },
      { dom:'rto',   text:'Conveys the seriousness (clot, possible lung involvement) clearly but calmly, so she accepts same-day assessment despite wanting to avoid it' },
      { dom:'gs',    text:'Safety-nets and acts: same-day DVT pathway and immediate escalation if PE features (sudden breathlessness, chest pain, collapse \u2192 999), what to do meanwhile, confirms she will attend, addresses the HRT plan, and documents/follows up' },
    ],
    worked:[
      { lbl:'Refuse the gel',       txt:'"I\u2019m glad you rang \u2014 and I\u2019m not going to send a gel or antibiotics, because I don\u2019t think this is a pull or cellulitis, and I\u2019d be doing you a disservice to treat it as one. A calf that\u2019s swollen, warm and sore on one side, getting worse over days, can be a clot in the deep veins of the leg \u2014 a DVT \u2014 and that needs checking today, not soothing with a cream."' },
      { lbl:'Draw out the risk',    txt:'"Two things you mentioned matter a lot. You flew back from Australia five days ago \u2014 long flights make clots more likely because you\u2019re sat still for hours. And you\u2019re on HRT, which also slightly raises the clot risk. None of that is your fault; it\u2019s exactly why I want this looked at properly."' },
      { lbl:'Screen for PE',        txt:'"Can I check something important \u2014 you said you\u2019ve been a bit breathless? Any sharp chest pain when you breathe in, coughing up blood, or feeling faint? \u2026 I\u2019m glad I asked. A clot in the leg can sometimes move to the lungs, and breathlessness can be a sign of that \u2014 which makes me want you seen even more urgently, not less."' },
      { lbl:'The pathway',          txt:'"So here\u2019s the plan: you need a same-day assessment \u2014 a blood test called a D-dimer and usually an ultrasound scan of the leg to look for the clot. Depending on timing, we may start a blood-thinning injection or tablet straightaway to be safe while we confirm. I\u2019ll arrange where you go."' },
      { lbl:'The HRT, honestly',    txt:'"On your HRT \u2014 I know it\u2019s given you your life back, and I\u2019m not going to whip it away or tell you off. It IS one of the risk factors, so IF this turns out to be a clot we\u2019ll need to review it and probably switch or stop it \u2014 but we\u2019ll sort that together once we know. Today is about checking the leg."' },
      { lbl:'Safety-net',           txt:'"I know you\u2019re stretched caring for your husband \u2014 let\u2019s sort how you get seen and who covers things. But this can\u2019t wait. And crucially: if you get suddenly more breathless, chest pain, or feel faint before you\u2019re seen \u2014 that\u2019s 999 immediately, because that\u2019s the lung complication we worry about. I\u2019ll confirm your appointment and follow it up. You wanted the simplest answer; the safe answer is getting this checked today."' },
    ],
    learning:'A unilateral swollen, warm, tender calf worsening over days \u2014 especially with recent long-haul flight/immobility and oestrogen (HRT) \u2014 is a deep vein thrombosis until proven otherwise, NOT a pulled muscle, and usually not cellulitis (a spreading red area, often with a skin break/fever). Manage with a structured two-level Wells DVT score guiding a same-day pathway: urgent D-dimer and/or proximal-leg Doppler ultrasound, with interim anticoagulation if the scan can\u2019t be done promptly \u2014 never an anti-inflammatory gel or antibiotics down the phone. Critically, screen for PULMONARY EMBOLISM (breathlessness, pleuritic chest pain, haemoptysis, syncope, tachycardia); any PE feature escalates to emergency assessment. The examinable hidden agenda is minimisation driven by being overwhelmed (a carer who can\u2019t take time off) and fear that her HRT \u2014 which transformed her menopause \u2014 will be blamed and stopped; draw out the risk factors, address the HRT honestly (a risk factor; review/stop if VTE confirmed) without knee-jerk blame, acknowledge the caring barriers while holding the urgency, and safety-net PE red flags to 999.',
    knowledge:{
      guideline:'NICE NG158 venous thromboembolic diseases · two-level Wells score · CKS DVT',
      points:[
        { h:'DVT until proven otherwise', t:'Unilateral leg swelling (calf >~3 cm bigger than the other), tenderness along the deep veins, warmth, pitting oedema and dilated superficial veins suggest DVT. Distinguish from cellulitis (spreading erythema, skin break, fever, more diffuse) and musculoskeletal causes. Use the two-level Wells DVT score to structure assessment.' },
        { h:'Risk factors', t:'Immobility/long-haul travel, surgery, oestrogen (combined contraception/HRT), pregnancy/postpartum, active cancer, previous VTE, thrombophilia, obesity, smoking, age. Actively elicit them \u2014 they guide probability and the provoked/unprovoked classification (which affects anticoagulation duration and later work-up).' },
        { h:'Pathway by Wells', t:'DVT "likely" (Wells \u22652): proximal-leg vein ultrasound within 4 hours, or D-dimer + interim anticoagulation if scan delayed, with scan within 24 hours. DVT "unlikely" (\u22641): D-dimer; if positive, proceed to ultrasound. Start interim therapeutic anticoagulation where the pathway/timing requires (per NG158).' },
        { h:'Always screen for PE', t:'DVT can embolise. Ask about breathlessness, pleuritic chest pain, haemoptysis, syncope/pre-syncope and tachycardia. Suspected PE = emergency assessment (do not manage on the routine DVT pathway); use the PE Wells / PERC as appropriate and escalate.' },
        { h:'Address oestrogen honestly', t:'HRT/combined contraception are modifiable risk factors. If VTE is confirmed, review and usually stop oestrogen and arrange alternatives \u2014 but do not blame/stop reflexively before assessment, and counsel sensitively given the symptom relief HRT provides.' },
        { h:'Don\u2019t treat remotely', t:'Never treat a likely DVT as a pulled muscle or cellulitis with an anti-inflammatory gel/antibiotics over the phone. The diagnosis needs imaging/D-dimer and possibly anticoagulation \u2014 a same-day, in-person/assessment pathway.' },
        { h:'Never do', t:'Never accept "pulled muscle/cellulitis" without considering DVT; never omit the risk-factor history or the PE screen; never give a gel/antibiotics remotely for a likely DVT; never stop/blame HRT before assessment; never let carer/time pressures defer same-day assessment.' },
        { h:'Safety-net & action', t:'Same-day DVT pathway (Wells \u2192 ultrasound/D-dimer \u00b1 interim anticoagulation); PE features (sudden breathlessness, pleuritic chest pain, collapse) \u2192 999; HRT review if confirmed; confirm attendance and follow up.' }
      ]
    }
  };

  /* ============ 106. TELEPHONE — Acute limb ischaemia behind "claudication" ============ */
  const c106 = {
    id:'acute-limb-ischaemia', title:'"My leg\u2019s gone cold and dead \u2014 it\u2019s just my circulation"', type:'telephone', duration:12,
    meta:{ age:71, sex:'M', setting:'Telephone \u2014 sudden cold, painful, pale leg.', system:'Urgent / Acute limb ischaemia' },
    brief:'Mr Derek Hammond, 71. Known peripheral arterial disease (claudication \u2014 calf pain on walking). Rings because over the last few hours his RIGHT leg/foot has become suddenly COLD, PALE, very PAINFUL (even at rest), and "pins and needles / a bit numb". He has atrial fibrillation (not anticoagulated \u2014 declined). He frames it as "my circulation playing up worse than usual" and wants "stronger painkillers / a water tablet". Smoker, diabetic. No skin break. Wants to avoid hospital.',
    script:{
      opening:'"Morning. It\u2019s my dodgy leg again \u2014 you know I get the cramp when I walk, the circulation. But it\u2019s worse today, it\u2019s gone proper cold and pale and it\u2019s aching even sitting still, and it\u2019s tingly, a bit numb. I just need some stronger painkillers really, maybe a water tablet for the swelling. I don\u2019t want to be packed off to hospital at my age over a bad leg day. Can you sort me something?"',
      facts:[
        { topic:'The 6 Ps \u2014 emergency',  text:'Sudden onset of a leg that is PAINFUL (rest pain), PALE, PERISHINGLY COLD, with PARAESTHESIA (pins and needles/numbness) \u2014 and potentially PULSELESS and PARALYSED \u2014 is ACUTE LIMB ISCHAEMIA, a surgical EMERGENCY (limb-threatening, ~6 hour window). This is NOT his usual claudication (which is exertional and relieved by rest), but a sudden arterial occlusion.' },
        { topic:'The embolic source',    text:'He has ATRIAL FIBRILLATION and is NOT anticoagulated (declined) \u2014 a classic source of an arterial embolus to the leg. Plus established PAD (in-situ thrombosis). The AF + sudden cold leg is the give-away of an embolic acute limb ischaemia.' },
        { topic:'The minimisation trap', text:'He reframes a limb-threatening emergency as "my circulation worse than usual" and asks for painkillers/a diuretic \u2014 exactly the wrong, dangerous response. The numbness/paralysis and rest pain are advanced features; delay costs the limb (and risks the patient).' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 his hospital avoidance is driven by fear (a previous bad hospital experience / fear of amputation \u2014 he\u2019s seen a friend lose a leg and is terrified that\u2019s where this leads, so paradoxically avoids the very thing that could save it), and stoicism/independence ("at my age"). There may also be regret/defensiveness about declining the anticoagulation that might have prevented this. Overcoming the avoidance fast is the consultation.' },
        { topic:'What he needs',       text:'Officially: painkillers/a water tablet, no hospital. What he needs: immediate recognition of acute limb ischaemia and EMERGENCY vascular assessment (999/urgent vascular referral) NOW \u2014 the limb is on a clock \u2014 with his amputation fear addressed honestly (early treatment SAVES limbs) so he accepts it.' },
      ],
      ice:{
        ideas:'It\u2019s his usual circulation/claudication, just a worse day; painkillers or a water tablet will do.',
        concerns:'HIDDEN AGENDA \u2014 hospital avoidance driven by fear of amputation (saw a friend lose a leg) and stoicism/independence ("at my age"); possibly defensiveness about having declined anticoagulation; so he minimises a limb-threatening emergency.',
        expectations:'Stronger painkillers / a diuretic and to avoid hospital. What he actually needs: immediate recognition of acute limb ischaemia and EMERGENCY vascular assessment now, with his amputation fear addressed so he accepts it.'
      },
      cues:['SUDDEN cold, pale, painful-at-rest, numb/tingly leg \u2014 the 6 Ps of acute limb ischaemia; a surgical emergency, not claudication.','Atrial fibrillation, not anticoagulated \u2014 a classic embolic source; the AF + sudden cold leg is the give-away.','"Just my circulation, painkillers, no hospital" \u2014 dangerous minimisation driven by amputation fear; overcome it fast.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises SUDDEN onset of a painful (rest pain), pale, perishingly cold, paraesthetic \u00b1 pulseless/paralysed leg as ACUTE LIMB ISCHAEMIA \u2014 a limb-threatening surgical EMERGENCY \u2014 and distinguishes it from his usual exertional claudication; does NOT offer painkillers/a diuretic' },
      { dom:'tasks', text:'Identifies the likely embolic source: ATRIAL FIBRILLATION not anticoagulated (and established PAD), recognising the AF + acute cold leg points to an arterial embolus' },
      { dom:'tasks', text:'Acts on the TIME-CRITICAL window: arranges IMMEDIATE emergency assessment \u2014 999 / urgent same-day vascular surgical referral NOW \u2014 conveying that the limb can be lost within hours and that delay is the danger' },
      { dom:'tasks', text:'Recognises the advanced features (fixed numbness/paralysis, rest pain) as signs of a threatened limb needing the fastest possible vascular intervention, and does not attempt to manage it in primary care' },
      { dom:'tasks', text:'Plans the broader issues for after the emergency (anticoagulation for AF, secondary prevention, cardiovascular risk) without letting them delay emergency transfer' },
      { dom:'rto',   text:'Overcomes the hospital avoidance and the amputation fear rapidly and compassionately: names the emergency plainly, addresses the fear (early treatment SAVES limbs; delay loses them), and does not collude with "just painkillers"' },
      { dom:'rto',   text:'Conveys urgency without inducing panic-paralysis, supports him through the fear (and any regret about declining anticoagulation, without blame), so he accepts immediate transfer' },
      { dom:'gs',    text:'Safety-nets and acts now: 999/emergency vascular pathway immediately, keep the leg dependent/not elevated and warm the body (not the leg directly), nil by mouth in case of surgery, confirms transfer, and documents \u2014 a same-minute emergency, not a wait' },
    ],
    worked:[
      { lbl:'Refuse the reframe',   txt:'"Derek, I have to stop you there, because this isn\u2019t your usual circulation \u2014 and I need to be very straight because it matters. A leg that\u2019s suddenly gone cold, pale, painful even at rest, and now numb and tingly \u2014 that\u2019s a blocked artery cutting off the blood supply. That\u2019s an emergency, and it\u2019s the opposite of something a painkiller or water tablet would fix."' },
      { lbl:'Name the cause',       txt:'"I think I know why: your heart rhythm, the atrial fibrillation, can throw off a small clot that lodges in the leg \u2014 which is exactly the thing the blood-thinner we discussed was meant to prevent. I\u2019m not raising that to have a go at you; I\u2019m raising it because it tells me what\u2019s happening and why we have to act NOW."' },
      { lbl:'The clock',            txt:'"Here\u2019s the hard truth, plainly: a leg without its blood supply can only survive a few hours. You\u2019ve already had some for a few. Every minute now counts. This is not a \u2018see how it goes\u2019 \u2014 it\u2019s a 999, blue-light, get-the-vascular-surgeons situation, today, this hour."' },
      { lbl:'Meet the amputation fear', txt:'"I suspect what\u2019s really stopping you is the fear of hospital \u2014 maybe of losing the leg, after your friend. Please hear this: getting seen NOW is exactly how we SAVE the leg. Legs are lost when this is left, not when it\u2019s treated fast. Avoiding hospital is the one thing that could cost you the very thing you\u2019re afraid of."' },
      { lbl:'Act now',              txt:'"So I\u2019m arranging this as an emergency \u2014 call 999 now, or I\u2019ll get the ambulance. Keep the leg down, not propped up, and keep yourself warm but don\u2019t put a hot water bottle on the leg itself. Don\u2019t eat or drink, in case they need to operate. Tell them \u2018sudden cold painful leg, possible blocked artery\u2019 and they\u2019ll prioritise you."' },
      { lbl:'Safety-net',           txt:'"I\u2019ll speak to the vascular team from my end too and make sure you\u2019re expected. Once your leg\u2019s safe, we\u2019ll have the proper conversation again about a blood-thinner for your heart rhythm, to stop this happening again. But right now, the only thing that matters is getting you to hospital this minute. Please make that call."' },
    ],
    learning:'Sudden onset of a painful (rest pain), pale, perishingly cold, paraesthetic \u00b1 pulseless/paralysed leg is ACUTE LIMB ISCHAEMIA \u2014 the 6 Ps \u2014 a limb-threatening surgical emergency with roughly a 6-hour window, and it must be distinguished from the patient\u2019s usual exertional claudication (which is brought on by walking and relieved by rest). The likely source here is an arterial embolus from ATRIAL FIBRILLATION that is not anticoagulated (the AF + acute cold leg is the give-away), on a background of PAD. The only safe action is IMMEDIATE emergency vascular assessment (999/urgent vascular referral); painkillers and a diuretic are the dangerously wrong response, and advanced features (fixed numbness/paralysis, rest pain) signal a threatened limb needing the fastest possible intervention. The examinable hidden agenda is hospital avoidance driven by amputation fear (a friend lost a leg) and stoicism, paradoxically risking the very loss he dreads. Overcome it fast and compassionately \u2014 early treatment SAVES limbs, delay loses them \u2014 address any regret about declining anticoagulation without blame, give first-aid (leg dependent, body warm not the leg, nil by mouth), and get him transferred this minute.',
    knowledge:{
      guideline:'Vascular Society / NICE PAD (CG147) \u2014 acute limb ischaemia · CKS peripheral arterial disease',
      points:[
        { h:'The 6 Ps = emergency', t:'Acute limb ischaemia: Pain (often sudden, rest pain), Pallor, Perishing cold (Poikilothermia), Paraesthesia, Pulselessness, Paralysis. Sudden onset of these in a limb is a surgical emergency \u2014 limb (and life) threatening \u2014 with a narrow window (~6 hours) for revascularisation. Paraesthesia and paralysis indicate an advanced, threatened limb.' },
        { h:'Distinguish from claudication/chronic PAD', t:'Intermittent claudication is exertional calf/limb pain relieved by rest; critical chronic limb ischaemia gives rest pain (often at night, relieved by hanging the leg down), ulcers/gangrene over weeks. ACUTE limb ischaemia is a SUDDEN change \u2014 a new cold, pale, painful, numb limb \u2014 not a "bad day" of the usual.' },
        { h:'Find the source', t:'Embolic (sudden, often AF or other cardiac source, or proximal aneurysm \u2014 classically a normal contralateral pulse) vs in-situ thrombosis on existing PAD (more gradual, known claudication, contralateral disease). AF that is not anticoagulated is a classic embolic source.' },
        { h:'Act immediately', t:'Emergency referral to vascular surgery (999/urgent) for assessment and revascularisation (embolectomy, thrombolysis, bypass) \u2014 do not delay. Analgesia and a diuretic are not treatment and waste the window. While arranging: keep the limb dependent and the patient warm (not the limb directly), nil by mouth for possible surgery; anticoagulation (heparin) is typically started in secondary care.' },
        { h:'Overcome avoidance', t:'Amputation fear and stoicism drive dangerous hospital avoidance \u2014 paradoxically risking the limb. Name the emergency plainly, convey that early treatment SAVES limbs while delay loses them, and address the fear (and any regret about declining anticoagulation) without blame.' },
        { h:'Afterwards: prevention', t:'Once the limb is safe, address the underlying issues: anticoagulation for AF (revisit the declined decision), antiplatelet/statin and risk-factor control for PAD, smoking cessation and diabetes control. Do not let these delay the emergency.' },
        { h:'Never do', t:'Never treat a sudden cold, painful, numb leg as "worse claudication" with painkillers/a diuretic; never miss the AF embolic source; never delay emergency vascular referral; never let amputation fear/avoidance defer immediate transfer; never elevate the ischaemic limb.' },
        { h:'Safety-net & action', t:'Immediate 999/emergency vascular referral; leg dependent, body warm, nil by mouth; "sudden cold painful leg, possible arterial occlusion" handover; confirm transfer; revisit AF anticoagulation and secondary prevention after the emergency.' }
      ]
    }
  };

  /* ============ 107. VIDEO — Incidental AAA on a scan ============ */
  const c107 = {
    id:'aaa-incidental', title:'"The scan found a bulge on my aorta \u2014 is it about to burst?"', type:'video', duration:12,
    meta:{ age:69, sex:'M', setting:'Video consultation \u2014 explaining an incidental AAA finding.', system:'Vascular / Abdominal aortic aneurysm' },
    brief:'Mr Brian Castle, 69. An ultrasound for something else (or the AAA screening programme) found an abdominal aortic aneurysm measuring 4.3 cm. Asymptomatic. He has read the letter, is terrified it will "burst any moment", and hasn\u2019t slept. Smoker (trying to quit), hypertension (on amlodipine), high cholesterol. He wants to know if he needs an emergency operation and whether he should avoid all activity. No abdominal/back pain. Brother died of a "burst aorta".',
    script:{
      opening:'"Doctor, this letter\u2019s frightened the life out of me. It says I\u2019ve got an aneurysm on my aorta, 4.3 centimetres. My brother died when his aorta burst \u2014 just dropped dead \u2014 so I\u2019m convinced mine\u2019s going to do the same any minute. Do I need an operation right now? Should I stop driving, stop lifting, stop everything? I\u2019ve been too scared to even go for a walk."',
      facts:[
        { topic:'What 4.3 cm means',     text:'A 4.3 cm AAA is a SMALL aneurysm. The rupture risk at this size is LOW; the management is SURVEILLANCE (regular ultrasound monitoring) and risk-factor modification \u2014 not emergency surgery. Surgery (repair) is generally considered when the aneurysm reaches ~5.5 cm, or grows rapidly (e.g. >1 cm/year), or becomes symptomatic. He is far from that threshold.' },
        { topic:'The genuine red flags',  text:'What WOULD be an emergency: sudden severe abdominal/back/flank pain, a pulsatile abdominal mass with pain, collapse/syncope, or shock \u2014 suggesting rupture or symptomatic AAA (a surgical emergency, 999). He is currently asymptomatic \u2014 the message is surveillance now, but know-and-act on these red flags.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 his terror is driven entirely by his BROTHER\u2019S sudden death from a ruptured aorta, mapped onto himself, and a cold letter with no conversation. He has stopped all activity out of fear and is barely functioning. He needs the catastrophic certainty dismantled (small, low-risk, monitored) and to be given permission to live normally \u2014 plus the genuinely empowering message that the BEST thing he can do (stop smoking, control BP) actually reduces growth/rupture risk.' },
        { topic:'The empowerment',     text:'If reached: smoking cessation and blood-pressure control genuinely slow aneurysm growth and reduce rupture risk \u2014 so he is not helpless; he has real levers. And normal activity/exercise is encouraged, not forbidden. This converts dread into agency.' },
        { topic:'What he needs',       text:'Officially: to know if he needs an emergency operation and whether to stop everything. What he needs: accurate reassurance (4.3 cm is small, low-risk, surveillance not surgery), the surveillance plan, risk-factor modification framed as empowering, the rupture red flags to act on, permission to live normally, and his brother-driven fear addressed.' },
      ],
      ice:{
        ideas:'A 4.3 cm aneurysm is about to burst "any minute" (like his brother\u2019s), needs an emergency operation, and means he must stop all activity.',
        concerns:'HIDDEN AGENDA \u2014 terror from his brother\u2019s sudden death from a ruptured aorta mapped onto himself, amplified by a cold letter; he has stopped all activity and is barely functioning.',
        expectations:'To know if he needs emergency surgery and whether to stop everything. What he actually needs: accurate reassurance (small, low-risk, surveillance not surgery), the monitoring plan, empowering risk-factor advice, rupture red flags, permission to live normally, and the brother-fear addressed.'
      },
      cues:['"Is it about to burst? Do I need an operation now?" \u2014 catastrophic reading of a small aneurysm; reframe accurately.','4.3 cm, asymptomatic \u2014 small, low-risk; surveillance + risk-factor control, not surgery.','Brother died of a ruptured aorta \u2014 the specific fear; dismantle it and give permission to live normally.']
    },
    checkpoints:[
      { dom:'tasks', text:'Explains accurately that a 4.3 cm AAA is SMALL and LOW rupture-risk, managed by SURVEILLANCE (regular ultrasound) and risk-factor modification \u2014 NOT emergency surgery \u2014 and that repair is generally considered only at ~5.5 cm, rapid growth (>1 cm/year), or if symptomatic' },
      { dom:'tasks', text:'Sets out the SURVEILLANCE plan clearly (periodic ultrasound monitoring at intervals appropriate to size) and what the thresholds for referral/repair are, so the patient understands the watch-and-monitor logic' },
      { dom:'tasks', text:'Frames RISK-FACTOR modification as empowering and effective: smoking cessation (the single biggest factor \u2014 reduces growth and rupture risk) and blood-pressure control, plus statin/cardiovascular risk \u2014 giving him genuine agency rather than helplessness' },
      { dom:'tasks', text:'Gives the genuine RED FLAGS that would be an emergency: sudden severe abdominal/back/flank pain, collapse/syncope, a painful pulsatile mass \u2192 999 (possible rupture) \u2014 distinguishing these from his current asymptomatic, low-risk state' },
      { dom:'tasks', text:'Gives permission to LIVE NORMALLY: normal activity and exercise are encouraged, not forbidden; corrects the "stop everything" misconception (reasonable to avoid only very heavy isometric straining if advised, but not normal life/walking)' },
      { dom:'rto',   text:'Responds to the distress and sleeplessness first, dismantles the brother-driven catastrophe with empathy and accurate information, and replaces dread with an accurate, empowering narrative' },
      { dom:'rto',   text:'Acknowledges the harm of a cold letter without a conversation, validates the fear given the family history, and reassures without either minimising or feeding the catastrophe' },
      { dom:'gs',    text:'Safety-nets and follows up: the surveillance schedule, rupture red flags \u2192 999, smoking-cessation and BP support, permission to resume normal life, and a follow-up that leaves him reassured and engaged rather than paralysed by fear' },
    ],
    worked:[
      { lbl:'Defuse the catastrophe', txt:'"I\u2019m so sorry that letter has terrified you and stolen your sleep \u2014 let me put this in proportion straightaway, because the reality is far less frightening than it feels. Yes, you have a small bulge on the main blood vessel \u2014 an aneurysm \u2014 but at 4.3 centimetres it is SMALL, and the risk of it bursting at this size is LOW. You do not need an emergency operation, and it is not about to go \u2018any minute\u2019."' },
      { lbl:'Dismantle the brother fear', txt:'"I know your brother died of this, and that\u2019s exactly why this landed so hard \u2014 your mind has written you into his story. But his was almost certainly far larger by the time it ruptured. Yours has been found early and small, which is the whole point of finding it: it puts you in a completely different, much safer position than he was in."' },
      { lbl:'The plan: watch',      txt:'"So what we DO is keep an eye on it \u2014 a simple ultrasound scan at intervals to check its size. Most small aneurysms grow very slowly, if at all. Only if it grew to around 5.5 centimetres, or grew quickly, would we talk about a planned repair \u2014 and that\u2019s a controlled, planned operation, nothing like an emergency. You\u2019re a long way from that."' },
      { lbl:'Give him agency',      txt:'"Here\u2019s the empowering bit: you are NOT helpless. The single best thing you can do to keep it small is to stop smoking \u2014 it genuinely slows these down \u2014 and I\u2019ll help you. Keeping your blood pressure and cholesterol controlled helps too. So instead of sitting in fear, you\u2019ve got real things you can DO that tip the odds in your favour."' },
      { lbl:'Permission to live',   txt:'"And please \u2014 go back to your life. Walk, garden, drive, enjoy yourself. Stopping everything won\u2019t protect you and is robbing you of living. Normal activity and exercise are actually GOOD for you here. You don\u2019t need to wrap yourself in cotton wool."' },
      { lbl:'Red flags + net',      txt:'"One thing to know, just in case \u2014 not to scare you, but so you\u2019re informed: if you ever got sudden severe pain in your tummy or back, or felt faint or collapsed, that\u2019s a 999 emergency. That\u2019s the only scenario to act on urgently, and it\u2019s not where you are. Otherwise: I\u2019ll set up your monitoring scans, help you with the smoking, and see you to go through it all. Please, sleep tonight \u2014 this is small, watched, and largely in your hands."' },
    ],
    learning:'A 4.3 cm abdominal aortic aneurysm is SMALL and LOW rupture-risk \u2014 managed by SURVEILLANCE (periodic ultrasound) and risk-factor modification, NOT emergency surgery; repair is generally considered only at ~5.5 cm, rapid growth (>1 cm/year), or if symptomatic. The consultation is largely RISK COMMUNICATION: a cold letter and a brother\u2019s death from a ruptured aorta have produced catastrophic certainty and total activity avoidance. Dismantle it accurately (small, low-risk, found early, monitored), set out the surveillance plan and the repair thresholds, and \u2014 crucially \u2014 frame risk-factor modification (above all smoking cessation, plus BP/cholesterol control) as empowering and effective, giving agency rather than helplessness. Give explicit permission to live normally (normal activity/exercise encouraged), correcting the "stop everything" misconception, and give the genuine rupture red flags (sudden severe abdominal/back/flank pain, collapse \u2192 999) to act on. Respond to the distress first, validate the family-history fear, and reassure without minimising or feeding the catastrophe.',
    knowledge:{
      guideline:'NICE NG156 abdominal aortic aneurysm · NHS AAA screening programme · CKS AAA',
      points:[
        { h:'Size drives management', t:'AAA is usually defined as aortic diameter \u22653 cm. Small (3.0\u20134.4 cm) and medium (4.5\u20135.4 cm) aneurysms are managed by SURVEILLANCE; repair is generally considered at \u22655.5 cm, rapid growth (>1 cm/year), or if symptomatic. A 4.3 cm AAA is small and low rupture-risk \u2014 not an emergency.' },
        { h:'Surveillance intervals', t:'Monitoring ultrasound at intervals by size (e.g. small AAA ~annually; medium AAA more frequently, e.g. ~3-monthly), per the screening/NICE pathway. Refer to vascular services per thresholds; repair (open or endovascular/EVAR) is a planned, controlled procedure \u2014 not the same as emergency rupture surgery.' },
        { h:'Risk-factor modification is empowering', t:'Smoking is the strongest modifiable factor for AAA growth and rupture \u2014 cessation slows growth and reduces risk; support it strongly. Control blood pressure and cardiovascular risk (statin, antiplatelet per overall CVD risk). These give the patient genuine agency.' },
        { h:'Permission to live normally', t:'Normal activity and exercise are encouraged and beneficial; routine life (walking, gardening, driving) is not restricted for a small AAA. The "stop everything" belief is a misconception to correct; only specific advice (e.g. about very heavy isometric straining) applies if/when given by specialists.' },
        { h:'Rupture red flags', t:'Sudden severe abdominal/back/flank pain, a painful pulsatile abdominal mass, collapse/syncope or shock suggest rupture or a symptomatic/expanding AAA \u2014 a surgical EMERGENCY (999). Symptomatic AAA needs immediate vascular assessment regardless of size.' },
        { h:'Risk communication', t:'Reframe an incidental small AAA accurately without minimising or catastrophising; dismantle family-history-driven terror (a relative\u2019s rupture mapped onto the patient); respond to distress first; replace dread with a surveillance plan, empowering risk-factor levers and permission to live normally.' },
        { h:'Never do', t:'Never imply a small AAA needs emergency surgery or is "about to burst"; never forbid normal activity; never miss the empowering smoking/BP message; never omit the rupture red flags; never deliver the finding by letter without a conversation if avoidable; never minimise OR feed the catastrophe.' },
        { h:'Safety-net & follow-up', t:'Surveillance ultrasound schedule and repair thresholds explained; rupture red flags \u2192 999; smoking-cessation and BP/CVD support; permission to resume normal life; a reassuring follow-up appointment; documented plan.' }
      ]
    }
  };

  /* ============ 108. VIDEO — AF anticoagulation: the refusal/decision ============ */
  const c108 = {
    id:'af-anticoag-decision', title:'“I’m not going on blood thinners”', type:'video', duration:12,
    meta:{ age:74, sex:'M', setting:'Video consultation \u2014 anticoagulation decision in AF.', system:'Cardiology / AF & shared anticoagulation decision' },
    brief:'Mr Frank Ostrowski, 74. Recently diagnosed atrial fibrillation; CHA\u2082DS\u2082-VASc clearly high (age, hypertension, diabetes) \u2014 anticoagulation strongly indicated to prevent stroke. He is refusing: "I\u2019m not taking blood thinners, they killed my father \u2014 he bled to death." He is otherwise well, active, terrified of bleeding, and has heard "warfarin is rat poison". He doesn\u2019t know about DOACs or that modern options differ. Falls risk often over-stated to him. Wants to "just take an aspirin and leave it".',
    script:{
      opening:'"Look, I know you want me on blood thinners for this heart rhythm thing, but I\u2019m telling you now \u2014 no. My father was on warfarin and he bled to death, it was horrific. I\u2019m not going through that. Isn\u2019t it basically rat poison anyway? I\u2019ll take a daily aspirin if you insist, that thins the blood a bit, and we\u2019ll call it quits. I\u2019d rather take my chances than end up like my dad."',
      facts:[
        { topic:'The stroke-prevention case', text:'In AF with a high CHA\u2082DS\u2082-VASc, anticoagulation substantially reduces the risk of a devastating, often disabling or fatal stroke \u2014 the dominant risk to address. ASPIRIN is NOT effective for stroke prevention in AF (and is not recommended for this) \u2014 a key misconception to correct; "just an aspirin" gives a false sense of protection.' },
        { topic:'Modern options vs his fear', text:'His refusal is anchored on his father\u2019s warfarin death and "rat poison". DOACs (e.g. apixaban, rivaroxaban, edoxaban, dabigatran) are now first-line for most: no routine INR monitoring, fewer interactions, and generally a lower intracranial-bleed risk than warfarin \u2014 a genuinely different proposition from what his father had. The bleeding risk is real but usually far outweighed by the stroke-prevention benefit at his risk level.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 beneath the flat refusal is genuine TRAUMA: he witnessed his father\u2019s bleeding death and is terrified of repeating it; "I\u2019d rather take my chances" is fear, not informed choice. He also fears losing independence (a stroke that leaves him dependent is, ironically, exactly what anticoagulation prevents \u2014 a reframe he hasn\u2019t heard). The consultation is shared decision-making that honours his autonomy while correcting misconceptions and addressing the trauma.' },
        { topic:'Respecting autonomy',  text:'He is entitled to decline after a genuinely informed discussion \u2014 the goal is not to coerce but to ensure his decision is informed (correct the aspirin myth, explain DOACs vs warfarin, put the bleeding vs stroke risks in real terms, address falls-risk over-statement), and to keep the door open.' },
        { topic:'What he needs',       text:'Officially: to refuse anticoagulation and take aspirin. What he needs: an honest, non-coercive shared decision \u2014 the stroke-prevention benefit, the ineffectiveness of aspirin, how DOACs differ from his father\u2019s warfarin, the bleeding risk in proportion, the trauma acknowledged, and the reframe that anticoagulation protects the independence he fears losing \u2014 with his autonomy respected.' },
      ],
      ice:{
        ideas:'Blood thinners are dangerous "rat poison" that killed his father; an aspirin is a safe enough alternative; he\u2019d rather risk it.',
        concerns:'HIDDEN AGENDA \u2014 trauma from witnessing his father bleed to death on warfarin, and terror of repeating it; fear of losing independence; "I\u2019d rather take my chances" is fear, not informed choice.',
        expectations:'To refuse anticoagulation and take aspirin. What he actually needs: a non-coercive shared decision \u2014 stroke-prevention benefit, aspirin\u2019s ineffectiveness, DOACs vs warfarin, bleeding in proportion, trauma acknowledged, and autonomy respected.'
      },
      cues:['"Warfarin killed my father, I\u2019ll just take aspirin" \u2014 trauma-driven refusal + the aspirin misconception to correct.','High CHA\u2082DS\u2082-VASc AF \u2014 strong stroke-prevention indication; the dominant risk is a disabling stroke.','"I\u2019d rather take my chances / end up like my dad" \u2014 fear, not informed choice; honour autonomy but inform it.']
    },
    checkpoints:[
      { dom:'tasks', text:'Makes the STROKE-PREVENTION case clearly: in AF with a high CHA\u2082DS\u2082-VASc, anticoagulation substantially reduces the risk of a disabling/fatal stroke \u2014 the dominant risk \u2014 and quantifies it in understandable terms (using stroke vs bleeding risk, e.g. CHA\u2082DS\u2082-VASc and ORBIT/HAS-BLED with modifiable factors)' },
      { dom:'tasks', text:'Corrects the ASPIRIN misconception: aspirin is NOT effective for stroke prevention in AF and is not a safe substitute \u2014 "just an aspirin" gives false reassurance while carrying its own bleeding risk' },
      { dom:'tasks', text:'Distinguishes modern DOACs from his father\u2019s warfarin: first-line for most, no routine INR monitoring, fewer interactions, generally lower intracranial-bleed risk \u2014 a genuinely different option from the warfarin that traumatised him' },
      { dom:'tasks', text:'Puts the BLEEDING risk in proportion and addresses modifiable bleeding factors (BP control, alcohol, concomitant NSAIDs/antiplatelets), and counters the commonly over-stated falls-risk argument (the stroke-prevention benefit usually outweighs falls-related bleeding risk)' },
      { dom:'tasks', text:'Practises genuine SHARED DECISION-MAKING: respects his autonomy to decline after an informed discussion, does not coerce, checks understanding, and keeps the door open for reconsideration' },
      { dom:'rto',   text:'Acknowledges and explores the TRAUMA of his father\u2019s death with compassion, recognising the refusal as fear rather than informed choice, and addresses it directly rather than arguing past it' },
      { dom:'rto',   text:'Reframes empathically: a stroke is a leading cause of exactly the dependency/loss of independence he fears, so anticoagulation protects what he values \u2014 offered as information, not pressure' },
      { dom:'gs',    text:'Safety-nets and follows up: provides written/decision-aid information, agrees a plan (trial/think-about-it/specialist input as needed), what to do re symptoms, and a follow-up to revisit the decision \u2014 honouring autonomy while keeping him engaged and safe' },
    ],
    worked:[
      { lbl:'Hear the trauma first', txt:'"Before anything about tablets \u2014 what happened to your father sounds genuinely horrific, and watching that would frighten anyone off blood thinners for life. I\u2019m not going to brush past that or push you. I just want to make sure that whatever you decide, you\u2019re deciding with the full, accurate picture \u2014 because some things have changed a lot since your dad\u2019s day."' },
      { lbl:'Correct the aspirin myth', txt:'"Here\u2019s the first important thing: an aspirin won\u2019t protect you here. People assume it thins the blood enough \u2014 but for this heart rhythm, aspirin doesn\u2019t prevent the strokes, and it still carries a bleeding risk of its own. So \u2018just an aspirin\u2019 would give you a false sense of safety while leaving you exposed."' },
      { lbl:'DOACs aren\u2019t his dad\u2019s warfarin', txt:'"And the blood thinner I\u2019d suggest isn\u2019t warfarin \u2014 it\u2019s a newer type called a DOAC. No INR blood tests every week, far fewer food and drug clashes, and importantly a LOWER risk of the kind of bleeding into the brain that\u2019s most feared. It\u2019s genuinely a different, safer proposition than what your father was on. \u2018Rat poison\u2019 was the old warfarin line \u2014 this isn\u2019t that."' },
      { lbl:'Risk in proportion',    txt:'"Let me be straight about the trade-off, because you deserve the real numbers, not a sales pitch. Yes, any blood thinner raises bleeding risk a bit. But with your heart rhythm and your other factors, the risk of a serious stroke without one is much higher \u2014 and we can lower the bleeding risk further by keeping your blood pressure controlled and avoiding certain painkillers."' },
      { lbl:'The reframe',           txt:'"And here\u2019s the part I really want you to hear: the thing you\u2019re most afraid of \u2014 ending up dependent, not yourself \u2014 a stroke is one of the commonest causes of exactly that. So this tablet isn\u2019t about risk for its own sake; it\u2019s about protecting the independent life you\u2019ve got. It guards the very thing you\u2019re frightened of losing."' },
      { lbl:'Respect + keep the door open', txt:'"Ultimately this is YOUR decision, and if after all this you still say no, I\u2019ll respect that and we\u2019ll keep talking \u2014 I\u2019m not going to force anything. But take a bit of time, read this information I\u2019ll give you, maybe talk it over with your family. I\u2019d genuinely hate for an out-of-date fear to cost you the stroke we could prevent. Come back and we\u2019ll go through it again \u2014 there\u2019s no rush today, and the door\u2019s always open."' },
    ],
    learning:'In AF with a high CHA\u2082DS\u2082-VASc, anticoagulation substantially reduces the risk of a disabling/fatal stroke \u2014 the dominant risk \u2014 and the consultation is shared decision-making, not coercion. Two misconceptions must be corrected: ASPIRIN is NOT effective for stroke prevention in AF (it gives false reassurance with its own bleeding risk), and modern DOACs are a genuinely different proposition from the warfarin that may haunt a patient\u2019s family memory (no routine INR, fewer interactions, generally lower intracranial-bleed risk). Put the bleeding risk in proportion (it is usually far outweighed by the stroke benefit at high CHA\u2082DS\u2082-VASc), address modifiable bleeding factors, and counter the commonly over-stated falls-risk argument. The examinable hidden agenda is TRAUMA: witnessing his father bleed to death on warfarin, so "I\u2019d rather take my chances" is fear, not informed choice \u2014 acknowledge it with compassion. Offer the empathic reframe that a stroke causes exactly the dependency he fears, so anticoagulation protects his independence. Respect his autonomy to decline after a genuinely informed discussion, provide a decision aid, and keep the door open with follow-up.',
    knowledge:{
      guideline:'NICE NG196 atrial fibrillation · CHA\u2082DS\u2082-VASc / ORBIT (HAS-BLED) · shared decision-making',
      points:[
        { h:'Assess stroke and bleeding risk', t:'Use CHA\u2082DS\u2082-VASc to assess stroke risk (offer anticoagulation when indicated \u2014 generally score \u22652 in men, \u22653 in women, and consider at lower scores). Assess bleeding risk with ORBIT (NICE-preferred; HAS-BLED also used) and address MODIFIABLE bleeding factors (uncontrolled BP, alcohol, concomitant antiplatelets/NSAIDs) \u2014 a high bleeding score is a prompt to modify, not to withhold.' },
        { h:'Aspirin is not the answer', t:'Aspirin is NOT recommended for stroke prevention in AF \u2014 it is ineffective for this and still carries bleeding risk. Correct the common belief that "an aspirin will do"; it offers false reassurance.' },
        { h:'DOACs vs warfarin', t:'DOACs (apixaban, rivaroxaban, edoxaban, dabigatran) are first-line for most non-valvular AF: comparable/better efficacy, no routine INR monitoring, fewer interactions, and generally lower intracranial haemorrhage risk than warfarin. This matters hugely when a patient\u2019s refusal is anchored on a bad warfarin experience.' },
        { h:'Risk in proportion & falls myth', t:'At high CHA\u2082DS\u2082-VASc the absolute stroke-prevention benefit usually far outweighs the bleeding risk. The falls-risk argument is frequently over-stated \u2014 a person would need an implausibly high number of falls per year for falls-related bleeding to outweigh the stroke benefit; falls alone rarely justify withholding anticoagulation.' },
        { h:'Shared decision-making & autonomy', t:'This is a preference-sensitive decision. Provide balanced information and a decision aid, elicit values, correct misconceptions, and respect a competent patient\u2019s informed refusal \u2014 without coercion. Keep the door open and revisit.' },
        { h:'Address the trauma & reframe', t:'A family member\u2019s bleeding death (or "rat poison" beliefs) drives fear-based refusal. Acknowledge the trauma; explain how options have changed; and reframe empathically: stroke is a leading cause of the dependency/loss of independence the patient fears, so anticoagulation protects what they value.' },
        { h:'Never do', t:'Never accept aspirin as a substitute for anticoagulation in AF; never coerce, but never leave a trauma-driven refusal uninformed; never present warfarin as the only/­default option; never over-state falls risk to justify withholding; never miss modifiable bleeding factors; never close the door on revisiting.' },
        { h:'Safety-net & follow-up', t:'Decision aid / written information; agree a plan (consider, trial, or specialist input); modify bleeding-risk factors; arrange follow-up to revisit the decision; document the informed discussion and the patient\u2019s decision.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c105, c106, c107, c108);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'dvt-calf': {
      ceg: ['Urgent & unscheduled care', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Lorraine Beckett', age: '58 years · female',
        pmh: ['Left calf swollen, warm, tender 3 days, worsening', 'Long-haul flight 5 days ago; on HRT; ex-smoker', 'Mild breathlessness (dismissed)'],
        meds: ['HRT'],
        allergy: 'NKDA',
        recent: '⚠ Wants an anti-inflammatory gel/antibiotics; carer for unwell husband, can\u2019t take time off.',
        reason: 'Telephone — unilateral swollen, painful calf.'
      },
      timeMap: [
        { t:'0–2',  h:'Refuse the gel',      d:'Unilateral swollen, warm, tender calf worsening over days = possible DVT, not a pull/cellulitis. Don\u2019t phone-prescribe a gel/antibiotics.' },
        { t:'2–4',  h:'Draw out the risk',    d:'Long-haul flight + HRT (+ smoking) — actively elicited. Two-level Wells score to guide the pathway.' },
        { t:'4–6',  h:'Screen for PE',        d:'Breathlessness, pleuritic chest pain, haemoptysis, syncope — PE escalates to emergency. She dismissed the breathlessness.' },
        { t:'6–9',  h:'Same-day DVT pathway', d:'D-dimer/Doppler per Wells; interim anticoagulation if scan delayed. The HRT addressed honestly (risk factor; review if VTE confirmed).' },
        { t:'9–12', h:'Barrier + safety-net', d:'Acknowledge the caring/time barriers but hold urgency; sudden breathlessness/chest pain/collapse → 999; confirm attendance.' }
      ],
      wordPics: {
        fail: 'Sends an anti-inflammatory gel or antibiotics over the phone for a "pulled muscle/cellulitis"; never elicits the flight/HRT risk or screens for PE; a DVT (and possible PE) goes unassessed.',
        pass: 'Recognises possible DVT, uses Wells, arranges a same-day D-dimer/Doppler pathway, screens for PE, and addresses the HRT.',
        exc:  'Refuses remote symptomatic treatment and names the DVT possibility; actively draws out the flight/HRT risk and applies Wells; screens for PE and escalates appropriately; arranges the same-day pathway with interim anticoagulation if needed; addresses the HRT honestly without blame; and holds urgency against the carer/time barriers with a PE safety-net.'
      },
      avoid: [
        { dont:'"Sounds like a pulled muscle or a bit of cellulitis — I\u2019ll send a gel/antibiotics."', instead:'"A one-sided swollen, warm, sore calf worsening over days, after a long flight and on HRT, can be a clot — that needs a same-day scan, not a gel."', why:'Treating a likely DVT remotely as a pull/cellulitis misses a clot and a possible PE.' },
        { dont:'"As long as you\u2019re not breathless, it\u2019s probably just local."', instead:'"You mentioned being a bit breathless — any sharp chest pain or feeling faint? A leg clot can move to the lungs, and that makes this MORE urgent."', why:'Failing to screen for PE misses a life-threatening escalation.' },
        { dont:'"This is your HRT\u2019s fault — stop it immediately."', instead:'"HRT is one risk factor, and if this is a clot we\u2019ll review it together — but let\u2019s confirm first, and I\u2019m not here to blame you for a treatment that helped you."', why:'Knee-jerk blaming/stopping HRT before assessment is premature and alienating.' }
      ]
    },

    'acute-limb-ischaemia': {
      ceg: ['Urgent & unscheduled care', 'Older adults'],
      stem: {
        name: 'Derek Hammond', age: '71 years · male',
        pmh: ['Known PAD (claudication); atrial fibrillation NOT anticoagulated (declined)', 'Right leg/foot suddenly cold, pale, painful at rest, numb/tingly over hours', 'Smoker, diabetic'],
        meds: ['(declined anticoagulation)'],
        allergy: 'NKDA',
        recent: '⚠ Frames it as "circulation worse than usual"; wants painkillers/a water tablet; avoiding hospital.',
        reason: 'Telephone — sudden cold, painful, pale leg.'
      },
      timeMap: [
        { t:'0–2',  h:'Refuse the reframe',  d:'Sudden cold, pale, painful-at-rest, numb leg = acute limb ischaemia (6 Ps), not "worse claudication". Not painkillers/a diuretic.' },
        { t:'2–4',  h:'Name the cause',       d:'AF not anticoagulated = classic embolic source. The AF + sudden cold leg is the give-away.' },
        { t:'4–6',  h:'The clock',            d:'~6-hour window; he\u2019s hours in. Emergency now — 999/urgent vascular, not "see how it goes".' },
        { t:'6–9',  h:'Meet the amputation fear', d:'Hospital avoidance risks the very loss he dreads. Early treatment SAVES limbs; delay loses them. No blame re declined anticoagulation.' },
        { t:'9–12', h:'Act + first aid + net', d:'999 now; leg dependent, body warm (not the leg), nil by mouth; revisit AF anticoagulation after; confirm transfer.' }
      ],
      wordPics: {
        fail: 'Accepts "circulation worse than usual", offers stronger painkillers/a diuretic; misses the 6 Ps and the AF embolic source; a salvageable limb (and the patient) is endangered by delay.',
        pass: 'Recognises acute limb ischaemia, arranges emergency vascular assessment, and gives first-aid/safety-net.',
        exc:  'Refuses the claudication reframe and names the limb-threatening emergency; identifies the AF embolic source; conveys the time-critical window and acts (999/urgent vascular) now; overcomes the amputation-fear avoidance compassionately and without blame; gives correct first-aid (leg dependent, body warm, nil by mouth); and flags revisiting AF anticoagulation afterwards.'
      },
      avoid: [
        { dont:'"Sounds like your circulation\u2019s playing up — I\u2019ll send stronger painkillers and a water tablet."', instead:'"A leg suddenly cold, pale, painful at rest and numb is a blocked artery — an emergency. Painkillers won\u2019t fix it; you need vascular surgeons now."', why:'Treating acute limb ischaemia as worse claudication with analgesia/diuretic loses the limb.' },
        { dont:'"Let\u2019s see if it settles overnight before troubling the hospital."', instead:'"We can\u2019t wait — the leg only survives a few hours without blood supply and you\u2019re already hours in. This is 999 now."', why:'Watch-and-wait squanders the narrow revascularisation window.' },
        { dont:'"I know you don\u2019t want hospital, so let\u2019s try managing it at home."', instead:'"Avoiding hospital is the one thing that could cost you the leg — getting seen NOW is exactly how we save it. Let\u2019s get the ambulance."', why:'Colluding with amputation-fear avoidance risks the very loss he dreads.' }
      ]
    },

    'aaa-incidental': {
      ceg: ['Investigations & results', 'Long-term conditions & cancer'],
      stem: {
        name: 'Brian Castle', age: '69 years · male',
        pmh: ['Incidental AAA 4.3 cm (asymptomatic)', 'Smoker (trying to quit), hypertension (amlodipine), high cholesterol', 'Brother died of a ruptured aorta'],
        meds: ['Amlodipine'],
        allergy: 'NKDA',
        recent: 'Terrified by the letter ("burst any minute"); stopped all activity; hasn\u2019t slept.',
        reason: 'Video consultation — explaining an incidental AAA.'
      },
      timeMap: [
        { t:'0–2',  h:'Defuse the catastrophe', d:'4.3 cm is SMALL, low rupture-risk; surveillance not surgery; not "about to burst". Put it in proportion at once.' },
        { t:'2–4',  h:'Dismantle the brother fear', d:'His brother\u2019s was almost certainly far larger at rupture. Found early + small = a much safer position.' },
        { t:'4–6',  h:'The plan: watch',      d:'Periodic ultrasound; repair only ~5.5 cm / rapid growth / symptomatic — a planned, controlled operation, far off.' },
        { t:'6–9',  h:'Give him agency',      d:'Smoking cessation (biggest lever) + BP/cholesterol control slow growth. Not helpless.' },
        { t:'9–12', h:'Permission + red flags', d:'Live normally — walk, garden, drive. Sudden severe abdo/back pain or collapse → 999. Surveillance + smoking support; reassuring follow-up.' }
      ],
      wordPics: {
        fail: 'Leaves him believing it could burst any minute / needs emergency surgery; forbids activity or fails to correct "stop everything"; misses the empowering smoking/BP message; never dismantles the brother-driven terror.',
        pass: 'Reframes 4.3 cm as small/surveillance, sets the monitoring plan, gives risk-factor advice and rupture red flags, and reassures.',
        exc:  'Responds to the distress first and dismantles the brother-driven catastrophe accurately; sets out surveillance and repair thresholds; frames smoking cessation/BP control as empowering agency; gives explicit permission to live normally; and provides the rupture red flags with a reassuring, engaged follow-up.'
      },
      avoid: [
        { dont:'"It\u2019s an aneurysm, so we\u2019ll need to keep a very close eye in case it bursts — best avoid exertion."', instead:'"At 4.3 cm it\u2019s small and low-risk — we simply monitor it with scans, and normal activity is encouraged, not dangerous."', why:'Framing a small AAA as imminently dangerous and restricting activity feeds catastrophe and harms quality of life.' },
        { dont:'"Try not to compare it to your brother\u2019s."', instead:'"Your brother\u2019s was almost certainly far bigger by the time it ruptured — yours is found early and small, which puts you in a completely different, safer position."', why:'Dismissing rather than directly dismantling the family-history fear leaves the terror intact.' },
        { dont:'"There\u2019s not much you can do but wait and hope."', instead:'"There\u2019s a lot you can do — stopping smoking genuinely slows these down, and controlling your blood pressure helps. You\u2019re not helpless."', why:'A helpless framing misses the empowering, evidence-based risk-factor levers.' }
      ]
    },

    'af-anticoag-decision': {
      ceg: ['Long-term conditions & cancer', 'Prescribing & pharmacology'],
      stem: {
        name: 'Frank Ostrowski', age: '74 years · male',
        pmh: ['Newly diagnosed atrial fibrillation; high CHA\u2082DS\u2082-VASc (age, HTN, diabetes)', 'Refusing anticoagulation; father "bled to death" on warfarin', 'Otherwise well, active'],
        meds: ['Amlodipine', 'Metformin'],
        allergy: 'NKDA',
        recent: 'Wants to "just take an aspirin"; believes warfarin is "rat poison".',
        reason: 'Video consultation — anticoagulation decision in AF.'
      },
      timeMap: [
        { t:'0–2',  h:'Hear the trauma first', d:'His father\u2019s bleeding death drives the refusal. Don\u2019t push; ensure the decision is informed with the modern picture.' },
        { t:'2–4',  h:'Correct the aspirin myth', d:'Aspirin doesn\u2019t prevent AF strokes and still bleeds — "just an aspirin" is false reassurance.' },
        { t:'4–6',  h:'DOACs ≠ his dad\u2019s warfarin', d:'No INR, fewer interactions, lower brain-bleed risk — a genuinely different, safer option than warfarin.' },
        { t:'6–8',  h:'Risk in proportion',   d:'Bleeding risk real but outweighed by stroke benefit at high CHA\u2082DS\u2082-VASc; modify BP/alcohol/NSAIDs; falls risk over-stated.' },
        { t:'8–12', h:'Reframe + respect',     d:'Stroke causes the dependency he fears — anticoagulation protects independence. Decision aid; respect autonomy; keep the door open; follow-up.' }
      ],
      wordPics: {
        fail: 'Either coerces him onto anticoagulation, or accepts "just an aspirin" and lets a trauma-driven refusal stand uninformed; never corrects the aspirin myth, never distinguishes DOACs from warfarin, never addresses the trauma.',
        pass: 'Makes the stroke-prevention case, corrects the aspirin myth, explains DOACs vs warfarin, puts bleeding in proportion, and respects autonomy with follow-up.',
        exc:  'Hears and explores the father-death trauma first; corrects the aspirin misconception; distinguishes modern DOACs from his father\u2019s warfarin; puts bleeding vs stroke risk in real proportion and counters the falls-risk myth; offers the independence reframe; and practises genuine shared decision-making with a decision aid, respected autonomy and an open door.'
      },
      avoid: [
        { dont:'"Fine, take an aspirin then if you won\u2019t have the proper one."', instead:'"Aspirin won\u2019t protect you from these strokes and still bleeds — it\u2019s a false sense of safety. Let me show you a modern option that isn\u2019t the warfarin your father had."', why:'Accepting aspirin as a substitute leaves him unprotected under a false belief.' },
        { dont:'"You really must take this or you\u2019ll have a stroke — there\u2019s no choice."', instead:'"This is your decision, and I\u2019ll respect it. I just want it to be an informed one, because a lot has changed since your father\u2019s day. Take time and we\u2019ll revisit."', why:'Coercion overrides autonomy and entrenches a trauma-driven refusal instead of informing it.' },
        { dont:'"Your father\u2019s experience isn\u2019t relevant to modern medicine."', instead:'"What happened to your father was horrific and it makes complete sense it frightened you — and the newer tablets are genuinely safer, with a lower brain-bleed risk than his warfarin."', why:'Dismissing the trauma alienates him; acknowledging it while updating the facts is what builds trust.' }
      ]
    }
  });

})();
