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
    meta:{ age:58, sex:'F', setting:'Telephone \u2014 unilateral swollen, painful calf.', system:'Urgent / DVT vs cellulitis', checked:'October 2026' },
    brief:'Mrs Lorraine Beckett, 58, office manager. Rings about her LEFT calf, swollen, tender and warm for 3 days, getting worse. She blames "pulling something" gardening. On questioning: returned 5 days ago from a long-haul flight (Australia), the calf is bigger than the right, no skin break/spreading redness with fever. Recently started ORAL combined HRT (oestrogen and progestogen tablets — the oral route raises VTE risk, whereas transdermal HRT at standard doses does not add to baseline risk: NICE NG23); ex-smoker. She wants "a strong anti-inflammatory gel" and to avoid going anywhere. If asked: mild breathlessness she dismisses, and a fleeting sharp chest pain on breathing in. Meds: oral HRT.',
    script:{
      "opening": "\"Hello — sorry to bother you. My left calf's gone all swollen and achy, been three days, and it's a bit warm. I'm sure I've just pulled a muscle doing the garden, or maybe it's a touch of that cellulitis my neighbour had. Could you pop a prescription through for one of those strong anti-inflammatory gels, or some antibiotics, so I don't have to traipse anywhere? I'm rushed off my feet this week.\"",
      "facts": [
        {
          "topic": "The leg",
          "text": "If asked: left calf, a tight, bursting ache, worse when walking. Started three days ago and getting worse. Your left ankle and calf look fatter than the right — \"my trouser leg is tighter\". Warm to touch. A bit pinkish all over the calf but no red streak, no blister or cut, no insect bite."
        },
        {
          "topic": "Injury",
          "text": "You were weeding at the weekend but cannot remember a moment when you pulled anything."
        },
        {
          "topic": "Travel — only if asked about recent travel or long journeys",
          "text": "You flew back from Australia five days ago (24 hours of flights via Singapore) after visiting your daughter. \"I didn't get up much — I had the window seat.\""
        },
        {
          "topic": "Breathing — downplay",
          "text": "Only if asked directly about breathing or chest: \"I have been a bit puffed going upstairs the last day or so — I'm just unfit.\" If asked about chest pain: \"Funny you should say — I got a sharp pain here (right side of the chest) when I breathed in deeply last night. It went off.\" No coughing blood, no fainting. You feel your heart is \"going a bit quicker\" than usual."
        },
        {
          "topic": "HRT",
          "text": "Started HRT tablets (oestrogen and progestogen by mouth) three months ago — \"it's been life-changing, I'm sleeping again\"."
        },
        {
          "topic": "Medical background",
          "text": "Otherwise well. Ex-smoker (stopped 8 years ago, 20 a day for 25 years). No previous clots, no cancer. No family history of clots that you know of. No allergies. No other medicines."
        },
        {
          "topic": "Social",
          "text": "58, office manager. Your husband Graham has COPD and needs help with most things; you are his main carer. Your neighbour could sit with him."
        },
        {
          "topic": "Hidden worries — hold back",
          "text": "You cannot see how you can leave Graham for hours. And you are frightened the HRT has caused this and you will be told to stop it: \"Please don't say it's the HRT.\" Say these when hospital or the HRT are mentioned."
        },
        {
          "topic": "How to play it",
          "text": "Busy, apologetic, wanting a quick fix. Minimise the breathlessness at first. If the doctor asks about travel and breathing carefully, give the answers. If they explain this could be a clot that has travelled to the lung and needs checking today, you are frightened but agree — once the doctor helps you think through who can be with Graham and is honest but kind about the HRT."
        }
      ],
      "ice": {
        "ideas": "\"I've pulled a muscle gardening — or maybe it's cellulitis.\"",
        "concerns": "Getting away from Graham. Underneath: that the HRT has caused this and you will lose it.",
        "expectations": "\"Can you just send a gel or antibiotics to the chemist?\" You will go in today if the reason is clear and your worries are heard."
      },
      "cues": [
        "\"I'm sure I've just pulled a muscle.\" — say in the opening.",
        "\"I've been a bit puffed, but I'm just unfit.\" — say when asked about breathing.",
        "\"Please don't tell me it's my HRT.\" — say when the cause is discussed."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises a unilateral swollen, warm, tender calf worsening over days as possible DEEP VEIN THROMBOSIS \u2014 and does NOT accept "pulled muscle" or treat as cellulitis with antibiotics/anti-inflammatory gel over the phone' },
      { dom:'dg', text:'Actively elicits and weights the RISK FACTORS: recent long-haul flight/immobility and HRT (oestrogen), plus smoking history \u2014 and uses a structured assessment (two-level Wells DVT score) to guide the pathway' },
      { dom:'dg', text:'Screens for PULMONARY EMBOLISM and escalates accordingly: asks about breathlessness, pleuritic chest pain, haemoptysis, syncope, tachycardia \u2014 and recognises that PE features — here breathlessness plus pleuritic chest pain — mandate same-day HOSPITAL assessment for suspected PE (NICE NG158: two-level PE Wells score; if more than 4 points, CTPA immediately or interim therapeutic anticoagulation if CTPA is delayed), not the routine DVT pathway; 999 if acutely unwell' },
      { dom:'cm', text:'Arranges the correct SAME-DAY pathway: knows the NICE NG158 DVT pathway (Wells 2 or more: proximal leg vein ultrasound with the result within 4 hours, or D-dimer plus interim therapeutic anticoagulation and a scan within 24 hours; Wells 1 or less: D-dimer, then ultrasound within 4 hours if positive) — but because she has PE features, sends her for same-day hospital assessment where the PE and DVT work-up happen together — rather than remote symptomatic treatment' },
      { dom:'cm', text:'Addresses the HRT honestly without blame: advises her to PAUSE the HRT now, pending investigation (BNF: unexplained calf swelling or pain in one leg, and sudden breathlessness or chest pain, are reasons to stop HRT immediately pending investigation); explains that oral oestrogen is a risk factor, that if VTE is confirmed future options (e.g. transdermal HRT, which at standard doses does not raise VTE risk — NICE NG23) are decided with specialist advice, and does not moralise — and considers the broader provoked/unprovoked work-up later' },
      { dom:'ro',   text:'Hears the minimisation as overwhelm and HRT fear, draws out the risk-factor history, and does NOT collude with "just a gel"; acknowledges the caring/time barriers while holding the urgency' },
      { dom:'ro',   text:'Conveys the seriousness (clot, possible lung involvement) clearly but calmly, so she accepts same-day assessment despite wanting to avoid it' },
      { dom:'cm',    text:'Safety-nets and acts: same-day hospital assessment for suspected PE/DVT, with 999 if she deteriorates (worse breathlessness, chest pain, collapse), what to do meanwhile, confirms she will attend, addresses the HRT plan, and documents/follows up' },
    ],
    worked:[
      { lbl:'Refuse the gel',       txt:'"I\u2019m glad you rang \u2014 and I\u2019m not going to send a gel or antibiotics, because I don\u2019t think this is a pull or cellulitis, and I\u2019d be doing you a disservice to treat it as one. A calf that\u2019s swollen, warm and sore on one side, getting worse over days, can be a clot in the deep veins of the leg \u2014 a DVT \u2014 and that needs checking today, not soothing with a cream."' },
      { lbl:'Draw out the risk',    txt:'"Two things you mentioned matter a lot. You flew back from Australia five days ago \u2014 long flights make clots more likely because you\u2019re sat still for hours. And you\u2019re on HRT, which also slightly raises the clot risk. None of that is your fault; it\u2019s exactly why I want this looked at properly."' },
      { lbl:'Screen for PE',        txt:'"Can I check something important \u2014 you said you\u2019ve been a bit breathless? Any sharp chest pain when you breathe in, coughing up blood, or feeling faint? \u2026 I\u2019m glad I asked. A clot in the leg can sometimes move to the lungs, and breathlessness can be a sign of that \u2014 which makes me want you seen even more urgently, not less. With the breathlessness and that sharp pain when you breathe in, I want you assessed at the hospital today for a possible clot on the lung — they can check the leg and the lungs together."' },
      { lbl:'The pathway',          txt:'"So here’s the plan: you need to go to the hospital today — the same-day emergency care unit — where they’ll score the risk, do a blood test called a D-dimer, a scan of the lungs if needed, and usually an ultrasound scan of the leg to look for the clot. They may start a blood-thinning injection or tablet straightaway to be safe while they confirm. I’ll ring ahead and arrange where you go — and if you feel worse before then, it’s 999."' },
      { lbl:'The HRT, honestly',    txt:'"On your HRT — I know it’s given you your life back, and I’m not telling you off. But I do need you to pause it from today, until the tests are done: that’s the standard safety advice with a swollen calf and breathlessness. If this isn’t a clot, you can usually restart. IF it is a clot, there are still options — patches or gels, for example, don’t carry the same clot risk as tablets — and we’ll decide together with the specialists. Today is about checking the leg and your lungs."' },
      { lbl:'Safety-net',           txt:'"I know you\u2019re stretched caring for your husband \u2014 let\u2019s sort how you get seen and who covers things. But this can\u2019t wait. And crucially: if you get suddenly more breathless, chest pain, or feel faint before you\u2019re seen \u2014 that\u2019s 999 immediately, because that\u2019s the lung complication we worry about. I\u2019ll confirm your appointment and follow it up. You wanted the simplest answer; the safe answer is getting this checked today."' },
    ],
    learning:'A unilateral swollen, warm, tender calf worsening over days \u2014 especially with recent long-haul flight/immobility and oestrogen (HRT) \u2014 is a deep vein thrombosis until proven otherwise, NOT a pulled muscle, and usually not cellulitis (a spreading red area, often with a skin break/fever). Manage with a structured two-level Wells DVT score guiding a same-day pathway (NICE NG158): urgent D-dimer and/or proximal-leg Doppler ultrasound, with interim anticoagulation if the scan can’t be done promptly — never an anti-inflammatory gel or antibiotics down the phone. Critically, screen for PULMONARY EMBOLISM (breathlessness, pleuritic chest pain, haemoptysis, syncope, tachycardia); here she has breathlessness plus pleuritic pain, so she needs same-day hospital assessment for suspected PE (NICE NG158 PE Wells; CTPA immediately if PE is likely, interim anticoagulation if delayed), 999 if acutely unwell. The examinable hidden agenda is minimisation driven by being overwhelmed (a carer who can\u2019t take time off) and fear that her HRT \u2014 which transformed her menopause \u2014 will be blamed and stopped; draw out the risk factors, address the HRT honestly (pause it now pending investigation — BNF; oral oestrogen is a risk factor, transdermal at standard doses is not — NICE NG23; future choice with specialist advice if VTE is confirmed) without blame, acknowledge the caring barriers while holding the urgency, and safety-net PE red flags to 999.',
    knowledge:{
      guideline:'NICE NG158 Venous thromboembolic diseases: diagnosis, management and thrombophilia testing (2020, updated 2023) — two-level DVT and PE Wells scores · NICE NG23 Menopause (2015, updated April 2026)',
      points:[
        { h:'DVT until proven otherwise', t:'Unilateral leg swelling (calf >~3 cm bigger than the other), tenderness along the deep veins, warmth, pitting oedema and dilated superficial veins suggest DVT. Distinguish from cellulitis (spreading erythema, skin break, fever, more diffuse) and musculoskeletal causes. Use the two-level Wells DVT score to structure assessment.' },
        { h:'Risk factors', t:'Immobility/long-haul travel, surgery, oestrogen (combined contraception/HRT), pregnancy/postpartum, active cancer, previous VTE, thrombophilia, obesity, smoking, age. Actively elicit them \u2014 they guide probability and the provoked/unprovoked classification (which affects anticoagulation duration and later work-up).' },
        { h:'Pathway by Wells', t:'DVT "likely" (Wells \u22652): proximal-leg vein ultrasound within 4 hours, or D-dimer + interim anticoagulation if scan delayed, with scan within 24 hours. DVT "unlikely" (\u22641): D-dimer; if positive, proceed to ultrasound. Start interim therapeutic anticoagulation where the pathway/timing requires (per NICE NG158). Confirmed DVT or PE: NICE NG158 recommends apixaban or rivaroxaban first line for most people (doses per BNF).' },
        { h:'Always screen for PE', t:'DVT can embolise. Ask about breathlessness, pleuritic chest pain, haemoptysis, syncope/pre-syncope and tachycardia. Suspected PE = same-day hospital assessment (do not manage on the routine DVT pathway): NICE NG158 two-level PE Wells score — PE likely (more than 4 points) → CTPA immediately, or interim therapeutic anticoagulation if CTPA can’t be done straight away; 999 if acutely unwell. PERC is only for people with a low pre-test probability. Her breathlessness plus pleuritic chest pain puts her on this route.' },
        { h:'Address oestrogen honestly', t:'HRT/combined contraception are modifiable risk factors. BNF: unexplained swelling or severe pain in the calf of one leg, and sudden breathlessness or chest pain, are reasons to stop HRT immediately pending investigation — so pause it now, without blame. NICE NG23: oral HRT raises VTE risk, while transdermal HRT at standard doses does not raise it above baseline — relevant to future options, decided with specialist advice if VTE is confirmed. Counsel sensitively given the symptom relief HRT provides.' },
        { h:'Don\u2019t treat remotely', t:'Never treat a likely DVT as a pulled muscle or cellulitis with an anti-inflammatory gel/antibiotics over the phone. The diagnosis needs imaging/D-dimer and possibly anticoagulation \u2014 a same-day, in-person/assessment pathway.' },
        { h:'Never do', t:'Never accept "pulled muscle/cellulitis" without considering DVT; never omit the risk-factor history or the PE screen; never give a gel/antibiotics remotely for a likely DVT; never blame her for the HRT — but never leave it running either: pause it pending investigation (BNF); never let carer/time pressures defer same-day assessment.' },
        { h:'Safety-net & action', t:'Same-day DVT pathway (Wells → ultrasound/D-dimer ± interim anticoagulation) — and with PE features (breathlessness, pleuritic chest pain) same-day hospital assessment for suspected PE (NICE NG158), 999 if collapse or acutely unwell; pause HRT pending investigation (BNF), review with specialist advice if confirmed; confirm attendance and follow up.' }
      ]
    }
  };

  /* ============ 106. TELEPHONE — Acute limb ischaemia behind "claudication" ============ */
  const c106 = {
    id:'acute-limb-ischaemia', title:'"My leg\u2019s gone cold and dead \u2014 it\u2019s just my circulation"', type:'telephone', duration:12,
    meta:{ age:71, sex:'M', setting:'Telephone \u2014 sudden cold, painful, pale leg.', system:'Urgent / Acute limb ischaemia', checked:'October 2026' },
    brief:'Mr Derek Hammond, 71. Known peripheral arterial disease (claudication \u2014 calf pain on walking). Rings because over the last few hours his RIGHT leg/foot has become suddenly COLD, PALE, very PAINFUL (even at rest), and "pins and needles / a bit numb". He has atrial fibrillation (not anticoagulated \u2014 declined). He frames it as "my circulation playing up worse than usual" and wants "stronger painkillers / a water tablet". Smoker, diabetic. No skin break. Wants to avoid hospital.',
    script:{
      "opening": "\"Morning. It's my dodgy leg again — you know I get the cramp when I walk, the circulation. But it's worse today, it's gone proper cold and pale and it's aching even sitting still, and it's tingly, a bit numb. I just need some stronger painkillers really, maybe a water tablet for the swelling. I don't want to be packed off to hospital at my age over a bad leg day. Can you sort me something?\"",
      "facts": [
        {
          "topic": "When it started",
          "text": "If asked: \"About four hours ago, after breakfast. I stood up to put the kettle on and it just went.\" Before today, your usual cramp came on after walking about 100 yards and went off with a rest."
        },
        {
          "topic": "What the leg is like now",
          "text": "Right leg, from the shin down. Constant, severe ache even sitting still — 8/10. If asked to look or touch: the foot is white and mottled, \"like marble\", and stone cold compared with the left. Pins and needles across the foot and the toes feel numb. If asked to wiggle your toes: \"They're not moving much — they feel heavy.\" There is no real swelling; you said \"water tablet\" because you thought it might help."
        },
        {
          "topic": "Heart rhythm",
          "text": "You know you have \"an irregular heartbeat\" — diagnosed last year. They wanted you on a blood thinner and you said no: \"I didn't want to be bleeding everywhere.\""
        },
        {
          "topic": "Relevant negatives (if asked)",
          "text": "No injury, no chest pain, no breathlessness, no fainting. No face or arm weakness, speech normal. The left leg is fine."
        },
        {
          "topic": "Medical history and medicines",
          "text": "Poor circulation in the legs, irregular heartbeat, type 2 diabetes. You take metformin, a statin \"sometimes\", and a blood pressure tablet. No allergies."
        },
        {
          "topic": "Social",
          "text": "71, retired lorry driver, lives with your wife Pat. Smoke 15 a day. A couple of pints on a Friday."
        },
        {
          "topic": "Hidden fear — hold back",
          "text": "Your mate Ken had a leg off two years ago \"after they kept fiddling with his circulation in hospital\". You are terrified that if you go in, they will take your leg. Say this only if the doctor asks why you do not want to go to hospital. If the blood thinner comes up, get a bit defensive: \"Don't start on that.\""
        },
        {
          "topic": "How to play it",
          "text": "Stoical and gruff, playing it down. Ask for painkillers twice. If the doctor says plainly this is an emergency where the blood supply is blocked and that going NOW is the best chance of saving the leg, go quiet, then say: \"Ken lost his leg, you know.\" If they respond to that fear honestly, agree to the ambulance. If you are blamed for refusing the blood thinner, become defensive and harder to persuade."
        }
      ],
      "ice": {
        "ideas": "\"It's just my circulation playing up worse than usual.\"",
        "concerns": "Underneath (only if asked): \"If I go in, they'll take my leg off like Ken's.\"",
        "expectations": "\"Stronger painkillers and maybe a water tablet.\" You will accept an ambulance if the urgency and your fear are both dealt with."
      },
      "cues": [
        "\"It's aching even sitting still, and it's gone cold and pale.\" — say in the opening.",
        "\"I don't want to be packed off to hospital at my age.\" — say in the opening and again when hospital is mentioned.",
        "\"My mate Ken lost his leg.\" — say if the doctor asks what worries you about hospital."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises SUDDEN onset of a painful (rest pain), pale, perishingly cold, paraesthetic \u00b1 pulseless/paralysed leg as ACUTE LIMB ISCHAEMIA \u2014 a limb-threatening surgical EMERGENCY \u2014 and distinguishes it from his usual exertional claudication; does NOT offer painkillers/a diuretic' },
      { dom:'dg', text:'Identifies the likely embolic source: ATRIAL FIBRILLATION not anticoagulated (and established PAD), recognising the AF + acute cold leg points to an arterial embolus' },
      { dom:'cm', text:'Acts on the TIME-CRITICAL window: arranges IMMEDIATE emergency assessment — a 999 ambulance to emergency vascular care, with a phone handover to the on-call vascular team where possible (ESVS 2020, international) — conveying that the limb can be lost within hours and that delay is the danger' },
      { dom:'dg', text:'Recognises the advanced features (fixed numbness/paralysis, rest pain) as signs of a threatened limb needing the fastest possible vascular intervention, and does not attempt to manage it in primary care' },
      { dom:'cm', text:'Plans the broader issues for after the emergency (anticoagulation for AF — NICE NG196: offer a DOAC when CHA₂DS₂-VASc is 2 or more, taking bleeding risk into account; secondary prevention for PAD — NICE CG147; smoking cessation — NICE NG209; cardiovascular risk) without letting them delay emergency transfer' },
      { dom:'ro',   text:'Overcomes the hospital avoidance and the amputation fear rapidly and compassionately: names the emergency plainly, addresses the fear (early treatment SAVES limbs; delay loses them), and does not collude with "just painkillers"' },
      { dom:'ro',   text:'Conveys urgency without inducing panic-paralysis, supports him through the fear (and any regret about declining anticoagulation, without blame), so he accepts immediate transfer' },
      { dom:'cm',    text:'Safety-nets and acts now: 999/emergency vascular pathway immediately, keep the leg dependent/not elevated and warm the body (not the leg directly), nil by mouth in case of surgery, confirms transfer, and documents \u2014 a same-minute emergency, not a wait' },
    ],
    worked:[
      { lbl:'Refuse the reframe',   txt:'"Derek, I have to stop you there, because this isn\u2019t your usual circulation \u2014 and I need to be very straight because it matters. A leg that\u2019s suddenly gone cold, pale, painful even at rest, and now numb and tingly \u2014 that\u2019s a blocked artery cutting off the blood supply. That\u2019s an emergency, and it\u2019s the opposite of something a painkiller or water tablet would fix."' },
      { lbl:'Name the cause',       txt:'"I think I know why: your heart rhythm, the atrial fibrillation, can throw off a small clot that lodges in the leg \u2014 which is exactly the thing the blood-thinner we discussed was meant to prevent. I\u2019m not raising that to have a go at you; I\u2019m raising it because it tells me what\u2019s happening and why we have to act NOW."' },
      { lbl:'The clock',            txt:'"Here\u2019s the hard truth, plainly: a leg without its blood supply can only survive a few hours. You\u2019ve already had some for a few. Every minute now counts. This is not a \u2018see how it goes\u2019 \u2014 it\u2019s a 999, blue-light, get-the-vascular-surgeons situation, today, this hour."' },
      { lbl:'Meet the amputation fear', txt:'"I suspect what\u2019s really stopping you is the fear of hospital \u2014 maybe of losing the leg, after your friend. Please hear this: getting seen NOW is exactly how we SAVE the leg. Legs are lost when this is left, not when it\u2019s treated fast. Avoiding hospital is the one thing that could cost you the very thing you\u2019re afraid of."' },
      { lbl:'Act now',              txt:'"So I\u2019m arranging this as an emergency \u2014 call 999 now, or I\u2019ll get the ambulance. Keep the leg down, not propped up, and keep yourself warm but don\u2019t put a hot water bottle on the leg itself. Don\u2019t eat or drink, in case they need to operate. Tell them \u2018sudden cold painful leg, possible blocked artery\u2019 and they\u2019ll prioritise you."' },
      { lbl:'Safety-net',           txt:'"I\u2019ll speak to the vascular team from my end too and make sure you\u2019re expected. Once your leg\u2019s safe, we\u2019ll have the proper conversation again about a blood-thinner for your heart rhythm, to stop this happening again. But right now, the only thing that matters is getting you to hospital this minute. Please make that call."' },
    ],
    learning:'Sudden onset of a painful (rest pain), pale, perishingly cold, paraesthetic \u00b1 pulseless/paralysed leg is ACUTE LIMB ISCHAEMIA \u2014 the 6 Ps \u2014 a limb-threatening surgical emergency (ESVS 2020, international: tissue is damaged within hours; about 6 hours is a commonly quoted rule of thumb), and it must be distinguished from the patient\u2019s usual exertional claudication (which is brought on by walking and relieved by rest). The likely source here is an arterial embolus from ATRIAL FIBRILLATION that is not anticoagulated (the AF + acute cold leg is the give-away), on a background of PAD. The only safe action is IMMEDIATE emergency vascular assessment (999 ambulance, phone handover to the vascular team — ESVS 2020, international; if he declines, a Mental Capacity Act 2005 assessment of an informed refusal); painkillers and a diuretic are the dangerously wrong response, and advanced features (fixed numbness/paralysis, rest pain) signal a threatened limb needing the fastest possible intervention. The examinable hidden agenda is hospital avoidance driven by amputation fear (a friend lost a leg) and stoicism, paradoxically risking the very loss he dreads. Overcome it fast and compassionately \u2014 early treatment SAVES limbs, delay loses them \u2014 address any regret about declining anticoagulation without blame, give first-aid (leg dependent, body warm not the leg, nil by mouth), and get him transferred this minute.',
    knowledge:{
      guideline:'European Society for Vascular Surgery (ESVS) clinical practice guidelines on the management of acute limb ischaemia (2020; international — no UK national guideline covers acute limb ischaemia) · NICE CG147 Peripheral arterial disease (2012, updated 2020; chronic PAD and claudication only) · NICE NG196 Atrial fibrillation (2021) · NICE NG209 Tobacco (2021) · Mental Capacity Act 2005',
      points:[
        { h:'The 6 Ps = emergency', t:'Acute limb ischaemia: Pain (often sudden, rest pain), Pallor, Perishing cold (Poikilothermia), Paraesthesia, Pulselessness, Paralysis. Sudden onset of these in a limb is a surgical emergency — limb (and life) threatening — with a narrow window for revascularisation (ESVS 2020, international: muscle and nerve are damaged within hours; about 6 hours is a commonly quoted rule of thumb, and the clock starts when the leg changed). Paraesthesia and paralysis indicate an advanced, threatened limb.' },
        { h:'Distinguish from claudication/chronic PAD', t:'Intermittent claudication is exertional calf/limb pain relieved by rest (NICE CG147, chronic PAD); critical chronic limb ischaemia gives rest pain (often at night, relieved by hanging the leg down), ulcers/gangrene over weeks. ACUTE limb ischaemia is a SUDDEN change \u2014 a new cold, pale, painful, numb limb \u2014 not a "bad day" of the usual.' },
        { h:'Find the source', t:'Embolic (sudden, often AF or other cardiac source, or proximal aneurysm \u2014 classically a normal contralateral pulse) vs in-situ thrombosis on existing PAD (more gradual, known claudication, contralateral disease). AF that is not anticoagulated is a classic embolic source.' },
        { h:'Act immediately', t:'Emergency referral to vascular surgery (999 ambulance, phone handover — ESVS 2020, international) for assessment and revascularisation (embolectomy, thrombolysis, bypass), decided by the vascular team — do not delay. Analgesia and a diuretic are not treatment and waste the window. While arranging: keep the limb dependent and the patient warm (not the limb directly), nil by mouth for possible surgery; anticoagulation (heparin) is typically started in secondary care.' },
        { h:'Overcome avoidance', t:'Amputation fear and stoicism drive dangerous hospital avoidance \u2014 paradoxically risking the limb. Name the emergency plainly, convey that early treatment SAVES limbs while delay loses them, and address the fear (and any regret about declining anticoagulation) without blame. If he still declines, check capacity for this decision (Mental Capacity Act 2005: understand, retain, weigh, communicate); a capacitous refusal must be fully informed and documented, and the door kept open.' },
        { h:'Afterwards: prevention', t:'Once the limb is safe, address the underlying issues: anticoagulation for AF (NICE NG196: offer a DOAC when CHA₂DS₂-VASc is 2 or more, taking bleeding risk into account; do not withhold it solely because of age or falls risk — revisit the declined decision without blame), antiplatelet/statin and risk-factor control for PAD (NICE CG147), smoking cessation (NICE NG209) and diabetes control. Do not let these delay the emergency.' },
        { h:'Never do', t:'Never treat a sudden cold, painful, numb leg as "worse claudication" with painkillers/a diuretic; never miss the AF embolic source; never delay emergency vascular referral; never let amputation fear/avoidance defer immediate transfer; never elevate the ischaemic limb.' },
        { h:'Safety-net & action', t:'Immediate 999/emergency vascular referral; leg dependent, body warm, nil by mouth; "sudden cold painful leg, possible arterial occlusion" handover; confirm transfer; revisit AF anticoagulation and secondary prevention after the emergency.' }
      ]
    }
  };

  /* ============ 107. VIDEO — Incidental AAA on a scan ============ */
  const c107 = {
    id:'aaa-incidental', title:'"The scan found a bulge on my aorta \u2014 is it about to burst?"', type:'video', duration:12,
    meta:{ age:69, sex:'M', setting:'Video consultation \u2014 explaining an incidental AAA finding.', system:'Vascular / Abdominal aortic aneurysm', checked:'October 2026' },
    brief:'Mr Brian Castle, 69. An ultrasound for something else (or the AAA screening programme) found an abdominal aortic aneurysm measuring 4.3 cm. Asymptomatic. He has read the letter, is terrified it will "burst any moment", and hasn\u2019t slept. Smoker (trying to quit), hypertension (on amlodipine), high cholesterol. He wants to know if he needs an emergency operation and whether he should avoid all activity. No abdominal/back pain. Brother died of a "burst aorta".',
    script:{
      "opening": "\"Doctor, this letter's frightened the life out of me. It says I've got an aneurysm on my aorta, 4.3 centimetres. My brother died when his aorta burst — just dropped dead — so I'm convinced mine's going to do the same any minute. Do I need an operation right now? Should I stop driving, stop lifting, stop everything? I've been too scared to even go for a walk.\"",
      "facts": [
        {
          "topic": "How it was found",
          "text": "If asked: you had an ultrasound of your tummy for a gallstone check, and the report mentioned \"abdominal aortic aneurysm 4.3 cm\". The letter came on Monday asking you to see the GP. Nobody has explained it."
        },
        {
          "topic": "Symptoms (if asked)",
          "text": "None. No tummy or back pain, no pulsing lump you have noticed, no fainting, no breathlessness, no chest pain. You feel physically well."
        },
        {
          "topic": "What has changed since the letter",
          "text": "You have barely slept for four nights. You have stopped your daily walk with the dog, stopped lifting your grandson and won't drive \"in case it goes at the wheel\"."
        },
        {
          "topic": "Medical history and medicines",
          "text": "High blood pressure (amlodipine), high cholesterol — \"they offered me a statin, I didn't fancy it\". No allergies. Last BP at the nurse: \"about 150 over 90\"."
        },
        {
          "topic": "Smoking (if asked)",
          "text": "15 a day for 50 years. \"I've cut down a bit since the letter, to be honest.\" You have tried patches before."
        },
        {
          "topic": "Social",
          "text": "69, retired bus mechanic, married to Sue, three grandchildren. Drinks a few pints at the weekend."
        },
        {
          "topic": "Your brother",
          "text": "Your older brother Jim \"dropped dead\" at 72, five years ago, at home. The post-mortem said a burst aorta. \"Nobody knew he had anything.\""
        },
        {
          "topic": "How to play it",
          "text": "Very frightened, talking quickly, convinced you are a ticking bomb. If the doctor gives you clear, simple facts (small, low risk at this size, checked by scans, operation only if it grows much bigger), visibly relax and say: \"So I can walk the dog?\" Become interested once smoking is framed as something you can actually do to help. If they say \"don't worry\" without facts, stay frightened: \"That's what they told Jim.\""
        }
      ],
      "ice": {
        "ideas": "\"It's going to burst any minute, like Jim's did.\"",
        "concerns": "\"I keep thinking I'll drop dead in front of Sue or the grandkids.\"",
        "expectations": "\"Do I need an operation now? Should I stop everything?\" You want honest facts and to know what you can do."
      },
      "cues": [
        "\"My brother died when his burst.\" — say in the opening.",
        "\"I've been too scared to even go for a walk.\" — say in the opening.",
        "\"I've cut down on the cigs since the letter.\" — say when lifestyle comes up."
      ]
    },
    checkpoints:[
      { dom:'ro', text:'Explains accurately that a 4.3 cm AAA is SMALL and LOW rupture-risk, managed by SURVEILLANCE (regular ultrasound) and risk-factor modification \u2014 NOT emergency surgery \u2014 and that repair is generally considered only at ~5.5 cm, rapid growth (>1 cm/year), or if symptomatic' },
      { dom:'cm', text:'Refers to the regional vascular service to be seen within 12 weeks of diagnosis (NICE NG156: 3.0–5.4 cm; 5.5 cm or more within 2 weeks; symptomatic = emergency) and sets out the SURVEILLANCE plan clearly (ultrasound every 12 months at 3.0–4.4 cm, every 3 months at 4.5–5.4 cm — NHS AAA Screening Programme, adopted by NG156) and what the thresholds for repair are, so the patient understands the watch-and-monitor logic' },
      { dom:'ro', text:'Frames RISK-FACTOR modification as empowering and effective: smoking cessation (a major modifiable factor, consistently linked to faster growth and higher rupture rates — Sweeting et al., Br J Surg 2012; stop-smoking support per NICE NG209) and blood-pressure control (NICE NG136), plus statin/cardiovascular risk (NICE NG238) — framing BP and lipids as protecting his heart and circulation overall rather than claiming they shrink the aneurysm \u2014 giving him genuine agency rather than helplessness' },
      { dom:'dg', text:'Gives the genuine RED FLAGS that would be an emergency: sudden severe abdominal/back/flank pain, collapse/syncope, a painful pulsatile mass \u2192 999 (possible rupture) \u2014 distinguishing these from his current asymptomatic, low-risk state' },
      { dom:'cm', text:'Gives permission to LIVE NORMALLY: normal activity and exercise are encouraged, not forbidden; corrects the "stop everything" misconception (reasonable to avoid only very heavy isometric straining if advised, but not normal life/walking)' },
      { dom:'ro',   text:'Responds to the distress and sleeplessness first, dismantles the brother-driven catastrophe with empathy and accurate information, and replaces dread with an accurate, empowering narrative' },
      { dom:'ro',   text:'Acknowledges the harm of a cold letter without a conversation, validates the fear given the family history, and reassures without either minimising or feeding the catastrophe' },
      { dom:'cm',    text:'Safety-nets and follows up: the surveillance schedule, rupture red flags \u2192 999, smoking-cessation and BP support, permission to resume normal life, and a follow-up that leaves him reassured and engaged rather than paralysed by fear' },
    ],
    worked:[
      { lbl:'Defuse the catastrophe', txt:'"I\u2019m so sorry that letter has terrified you and stolen your sleep \u2014 let me put this in proportion straightaway, because the reality is far less frightening than it feels. Yes, you have a small bulge on the main blood vessel \u2014 an aneurysm \u2014 but at 4.3 centimetres it is SMALL, and the risk of it bursting at this size is LOW. You do not need an emergency operation, and it is not about to go \u2018any minute\u2019."' },
      { lbl:'Dismantle the brother fear', txt:'"I know your brother died of this, and that\u2019s exactly why this landed so hard \u2014 your mind has written you into his story. But his was almost certainly far larger by the time it ruptured. Yours has been found early and small, which is the whole point of finding it: it puts you in a completely different, much safer position than he was in."' },
      { lbl:'The plan: watch',      txt:'"So what we DO is refer you to the vascular specialists — they should see you within 12 weeks — and keep an eye on it with a simple ultrasound scan, about once a year at this size. Most small aneurysms grow very slowly, if at all. Only if it grew to around 5.5 centimetres, or grew quickly, would we talk about a planned repair \u2014 and that\u2019s a controlled, planned operation, nothing like an emergency. You\u2019re a long way from that."' },
      { lbl:'Give him agency',      txt:'"Here\u2019s the empowering bit: you are NOT helpless. The single best thing you can do for the aneurysm is to stop smoking — smoking is linked to these growing faster — and I’ll help you. Keeping your blood pressure and cholesterol controlled protects your heart and circulation too. So instead of sitting in fear, you\u2019ve got real things you can DO that tip the odds in your favour."' },
      { lbl:'Permission to live',   txt:'"And please \u2014 go back to your life. Walk, garden, drive, enjoy yourself. Stopping everything won\u2019t protect you and is robbing you of living. Normal activity and exercise are actually GOOD for you here. You don\u2019t need to wrap yourself in cotton wool."' },
      { lbl:'Red flags + net',      txt:'"One thing to know, just in case \u2014 not to scare you, but so you\u2019re informed: if you ever got sudden severe pain in your tummy or back, or felt faint or collapsed, that\u2019s a 999 emergency. That\u2019s the only scenario to act on urgently, and it\u2019s not where you are. Otherwise: I’ll send the vascular referral today, set up your monitoring scans, help you with the smoking, and see you to go through it all. Please, sleep tonight \u2014 this is small, watched, and largely in your hands."' },
    ],
    learning:"A 4.3 cm abdominal aortic aneurysm is SMALL and LOW rupture-risk — managed by SURVEILLANCE (periodic ultrasound) and risk-factor modification, NOT emergency surgery; repair is generally considered only at ~5.5 cm, rapid growth (>1 cm/year), or if symptomatic. The consultation is largely RISK COMMUNICATION: a cold letter and a brother’s death from a ruptured aorta have produced catastrophic certainty and total activity avoidance. Dismantle it accurately (small, low-risk, found early, monitored), refer to the regional vascular service to be seen within 12 weeks (NICE NG156, 2020), set out the surveillance plan and the repair thresholds, and — crucially — frame risk-factor modification (above all smoking cessation, linked to growth and rupture; plus BP/cholesterol control for his overall cardiovascular risk) as empowering and effective, giving agency rather than helplessness. Give explicit permission to live normally (normal activity/exercise encouraged), correcting the \"stop everything\" misconception, and give the genuine rupture red flags (sudden severe abdominal/back/flank pain, collapse → 999) to act on. Respond to the distress first, validate the family-history fear, and reassure without minimising or feeding the catastrophe. What WOULD be an emergency: sudden severe abdominal/back/flank pain, a pulsatile abdominal mass with pain, collapse/syncope, or shock — suggesting rupture or symptomatic AAA (a surgical emergency, 999). He is currently asymptomatic — the message is surveillance now, but know-and-act on these red flags.",
    knowledge:{
      guideline:'NICE NG156 Abdominal aortic aneurysm: diagnosis and management (2020) · NHS AAA Screening Programme surveillance intervals (GOV.UK) · DVLA Assessing fitness to drive (aortic aneurysm) · NICE NG209 Tobacco (2021) · NICE NG136 Hypertension in adults (2019) · NICE NG238 Cardiovascular disease: risk assessment and reduction (2023) · Sweeting et al., Br J Surg 2012 (RESCAN: growth and rupture of small AAAs)',
      points:[
        { h:'Size drives management', t:'AAA is usually defined as aortic diameter \u22653 cm. Small (3.0\u20134.4 cm) and medium (4.5\u20135.4 cm) aneurysms are managed by SURVEILLANCE; repair is generally considered at \u22655.5 cm, rapid growth (>1 cm/year), or if symptomatic. A 4.3 cm AAA is small and low rupture-risk \u2014 not an emergency.' },
        { h:'Surveillance intervals', t:'NICE NG156: refer an AAA of 3.0–5.4 cm to a regional vascular service, to be seen within 12 weeks of diagnosis; 5.5 cm or more within 2 weeks; a symptomatic AAA needs emergency assessment whatever its size. Surveillance ultrasound at the NHS AAA Screening Programme intervals, which NG156 adopts: 3.0–4.4 cm every 12 months; 4.5–5.4 cm every 3 months. repair (open or endovascular/EVAR) is a planned, controlled procedure \u2014 not the same as emergency rupture surgery.' },
        { h:'Risk-factor modification is empowering', t:'Smoking is a major modifiable factor, consistently linked to faster AAA growth and higher rupture rates (Sweeting et al., Br J Surg 2012); support cessation strongly (NICE NG209). Control blood pressure (NICE NG136) and overall cardiovascular risk (statin per NICE NG238; antiplatelet per overall CVD risk) — these reduce his risk of heart attack and stroke; do not promise that they shrink the aneurysm. These give the patient genuine agency.' },
        { h:'Permission to live normally', t:'Normal activity and exercise are encouraged and beneficial; routine life (walking, gardening, driving) is not restricted for a small AAA. DVLA: Group 1 (car) drivers notify only at 6.0 cm or more and must not drive at 6.5 cm or more; Group 2 drivers notify at any size and must not drive at 5.5 cm or more. The "stop everything" belief is a misconception to correct; only specific advice (e.g. about very heavy isometric straining) applies if/when given by specialists.' },
        { h:'Rupture red flags', t:'Sudden severe abdominal/back/flank pain, a painful pulsatile abdominal mass, collapse/syncope or shock suggest rupture or a symptomatic/expanding AAA \u2014 a surgical EMERGENCY (999). Symptomatic AAA needs immediate vascular assessment regardless of size.' },
        { h:'Risk communication', t:'Reframe an incidental small AAA accurately without minimising or catastrophising; dismantle family-history-driven terror (a relative\u2019s rupture mapped onto the patient); respond to distress first; replace dread with a surveillance plan, empowering risk-factor levers and permission to live normally.' },
        { h:'Never do', t:'Never imply a small AAA needs emergency surgery or is "about to burst"; never forbid normal activity; never miss the empowering smoking/BP message; never omit the rupture red flags; never deliver the finding by letter without a conversation if avoidable; never minimise OR feed the catastrophe.' },
        { h:'Safety-net & follow-up', t:'Vascular referral to be seen within 12 weeks (NICE NG156); surveillance ultrasound schedule and repair thresholds explained; rupture red flags \u2192 999; smoking-cessation and BP/CVD support; permission to resume normal life; a reassuring follow-up appointment; documented plan.' }
      ]
    }
  };

  /* ============ 108. VIDEO — AF anticoagulation: the refusal/decision ============ */
  const c108 = {
    "id": "af-anticoag-decision",
    "title": "“Since Dad’s fall I want him off that blood thinner — if he bangs his head, it’ll kill him”",
    "type": "video",
    "duration": 12,
    "meta": {
      "age": 82,
      "sex": "M",
      "setting": "Video consultation — an older man with his daughter, two weeks after a fall at home.",
      "system": "Cardiovascular / Older adults — continuing a DOAC after a fall: stroke versus bleeding risk, modifiable bleeding risks, a medication-related fall, dose review and whose decision it is",
      "checked": "October 2026"
    },
    "brief": "Frank Ostrowski, 82, retired engineer, has atrial fibrillation and has taken apixaban for two years (CHA2DS2-VASc 4: age, hypertension, previous TIA). Two weeks ago he fell at home at 3am on his way to the toilet: he felt light-headed on standing, went down, bruised his hip, did not hit his head, was on the floor for 10 minutes. A&E: no fracture, discharged. His daughter Anna, 54, has joined the video and wants the apixaban stopped: “If he bangs his head on that, it’ll kill him.” Frank has capacity. If asked, he does not want to stop: his friend had a stroke and lost his speech. Hidden details, only if asked: six weeks ago a urologist started doxazosin for prostate symptoms, and since then he has felt dizzy on standing, especially at night; he has also been taking ibuprofen from the supermarket for his knees for a month, and drinking three or four whiskies every evening since his wife died last year. Recent bloods: eGFR 52, creatinine 118 µmol/L, Hb 128 g/L; weight 64 kg; nurse BP sitting 132/74. The task: hear Anna’s fear respectfully while recognising that Frank decides; take a falls history and find the likely cause (postural hypotension after doxazosin, nocturia, alcohol); explain stroke and bleeding risk in plain numbers (NICE NG196: do not withhold anticoagulation solely because of age or falls risk; use ORBIT for bleeding risk); identify and act on modifiable bleeding risks (stop ibuprofen, reduce alcohol); check the apixaban dose criteria (check the SPC); review the doxazosin with the urologist; arrange a multifactorial falls assessment (NICE NG249); offer bereavement support; and agree a plan with Frank, with Anna’s involvement as he wishes.",
    "script": {
      "opening": "“(Anna) Thanks for seeing us. Since Dad’s fall I want him off that blood thinner. If he bangs his head on that, it’ll kill him. I’ve read about it.”",
      "facts": [
        {
          "topic": "Who is on the call",
          "text": "Frank and his daughter Anna in his living room. Frank is alert and sharp, a little irritated at being talked about."
        },
        {
          "topic": "The fall (Frank)",
          "text": "3am, got up to wee, felt light-headed as he stood, legs went, landed on his hip. Did not hit his head, no loss of consciousness, no chest pain or palpitations beforehand. Got up after 10 minutes using a chair. A&E: hip X-ray normal. Bruise still there, walking fine."
        },
        {
          "topic": "Only if asked about new medicines",
          "text": "Six weeks ago the urology clinic started doxazosin for his prostate. Since then he gets dizzy when he stands, especially at night. Up three times a night to wee."
        },
        {
          "topic": "Only if asked about painkillers and alcohol",
          "text": "Ibuprofen from the supermarket for his knees for about a month, “two or three a day”. Three or four whiskies every evening since his wife, Irena, died last year: “It helps me sleep.”"
        },
        {
          "topic": "Frank’s view (if asked directly)",
          "text": "Does not want to stop. His friend Stan had a stroke and lost his speech: “I’d rather bleed than end up like Stan.” Happy for Anna to be involved, but “it’s my decision”."
        },
        {
          "topic": "Anna’s view",
          "text": "Read online that blood thinners plus falls cause brain bleeds. Lives 20 minutes away; worried sick since the fall. Did not know about the ibuprofen or the whisky; upset when she hears."
        },
        {
          "topic": "How to play it",
          "text": "Anna dominates at first. Frank becomes more assertive if the doctor turns to him and asks his view. Both settle when the doctor explains numbers clearly, finds a likely cause of the fall, and offers concrete steps to reduce bleeding and falls risk."
        }
      ],
      "ice": {
        "ideas": "(Anna) “Blood thinners plus falls equals a brain bleed.” (Frank) “The tablet stops me having a stroke like Stan.”",
        "concerns": "HIDDEN AGENDA: Frank’s drinking and ibuprofen since his wife’s death, which he has not told Anna; his grief. Anna’s fear of losing her remaining parent.",
        "expectations": "(Anna) “Stop the blood thinner today.” (Frank) “Keep taking it, but stop falling.”"
      },
      "cues": [
        "Anna speaks for Frank — check his view and capacity; it is his decision.",
        "Light-headed on standing at night — postural hypotension; ask about new medicines.",
        "“It helps me sleep” — alcohol and grief.",
        "Knee pain — over-the-counter NSAIDs, a modifiable bleeding risk."
      ]
    },
    "checkpoints": [
      {
        "dom": "ro",
        "text": "Acknowledges Anna’s fear, then turns to Frank to hear his own account and view, establishing that he has capacity and that the decision is his"
      },
      {
        "dom": "dg",
        "text": "Takes a falls history (circumstances, prodrome, head injury, injuries, long lie) and identifies a likely cause: postural symptoms since starting doxazosin, nocturia, alcohol"
      },
      {
        "dom": "dg",
        "text": "Reviews medicines and finds the over-the-counter ibuprofen and the alcohol intake as modifiable bleeding risks"
      },
      {
        "dom": "cm",
        "text": "Explains stroke and bleeding risk in plain language (CHA2DS2-VASc and ORBIT), and that NICE NG196 advises not withholding anticoagulation solely because of age or falls risk"
      },
      {
        "dom": "cm",
        "text": "Acts on modifiable bleeding risks: stop ibuprofen (alternative analgesia for the knees), advice and support to reduce alcohol, blood pressure control"
      },
      {
        "dom": "cm",
        "text": "Checks the apixaban dose against the dose-reduction criteria (age, weight, creatinine; check the SPC) and arranges ongoing renal monitoring"
      },
      {
        "dom": "cm",
        "text": "Addresses the fall: discusses the doxazosin with the urologist or prescriber, measures lying and standing BP, nocturia management, and refers for a multifactorial falls assessment (NICE NG249)"
      },
      {
        "dom": "ro",
        "text": "Responds to Frank’s bereavement, agrees a shared plan that respects his decision and involves Anna as he wishes, and safety-nets for head injury and bleeding"
      }
    ],
    "worked": [
      {
        "lbl": "Hear both, then the patient",
        "txt": "“Anna, I can hear how frightened you’ve been since the fall. Frank, I’d like to hear from you too. What happened, and what do you think about the blood thinner?”"
      },
      {
        "lbl": "Find the cause",
        "txt": "“You felt light-headed as you stood up. Has anything changed with your tablets recently?”"
      },
      {
        "lbl": "Numbers",
        "txt": "“Without the blood thinner, someone with your risk factors might have around 4 or 5 strokes in every 100 people each year. With it, that drops by about two thirds. The risk of a serious bleed is much lower than that for most people, and we can lower it further.”"
      },
      {
        "lbl": "Falls are not the reason to stop",
        "txt": "“The national guidance says we shouldn’t stop a blood thinner just because someone has fallen or might fall. Someone would need to fall a very large number of times a year before the bleeding risk outweighed the stroke protection.”"
      },
      {
        "lbl": "Modifiable risks",
        "txt": "“The ibuprofen and the whisky both raise the chance of bleeding much more than the fall does. Those are the things I’d like us to change.”"
      },
      {
        "lbl": "Whose decision",
        "txt": "“Frank, it’s your decision, and you’ve told me you want to stay on it. Anna, your worries are why we’re making these changes to keep him safer.”"
      }
    ],
    "learning": "Falls are often cited as a reason to stop anticoagulation in older people with AF, but NICE NG196 advises not withholding anticoagulation solely because of age or risk of falls. Stroke risk is assessed with CHA2DS2-VASc and bleeding risk with ORBIT; the purpose of the bleeding score is to identify and address modifiable risk factors, not to deny treatment. Modelling studies suggest a person would need to fall very many times a year before the risk of subdural haemorrhage outweighed the stroke benefit of anticoagulation. Modifiable bleeding risks include NSAIDs and antiplatelets taken without indication, excess alcohol, uncontrolled hypertension and inappropriate dosing. DOAC doses should be checked against the criteria in the SPC (for apixaban, dose reduction depends on a combination of age, weight and serum creatinine; check the SPC/local formulary) and renal function monitored. A fall is a symptom: take a falls history, look for a cause (here, likely orthostatic hypotension after starting an alpha-blocker, worsened by nocturia and evening alcohol), measure lying and standing blood pressure, review medicines, and refer for a multifactorial falls assessment (NICE NG249, 2025). A person with capacity decides about their own treatment; relatives’ views are heard and their fears addressed, but they cannot decide for him. Bereavement and alcohol use often go together in older widowed men and deserve a gentle conversation. The communication skill is managing a three-way consultation, keeping the patient at the centre, giving numbers clearly and turning fear into concrete actions that reduce both falls and bleeding risk.",
    "knowledge": {
      "guideline": "[1] NICE NG196 Atrial fibrillation: diagnosis and management (2021, updated 2021) · [2] NICE NG249 Falls: assessment and prevention in older people and in people 50 and over at higher risk (2025) · [3] Product SPCs for apixaban and doxazosin · [4] NICE CKS Anticoagulation – oral (check current version) · [5] Mental Capacity Act 2005; GMC Decision making and consent (2020) · [6] NICE CKS Alcohol – problem drinking (check current version)",
      "summary": "A capacitous 82-year-old on apixaban for AF (CHA2DS2-VASc 4) fell at night, likely from postural hypotension after starting doxazosin, plus nocturia and evening alcohol. His daughter wants the DOAC stopped. Falls alone are not a reason to stop. Address modifiable bleeding risks (ibuprofen, alcohol), check the DOAC dose, review the doxazosin, arrange a falls assessment, support his grief, and respect his decision.",
      "points": [
        {
          "h": "Falls and anticoagulation",
          "t": "NG196: do not withhold anticoagulation solely because of age or falls risk [1]. Stroke prevention benefit usually far outweighs fall-related bleeding risk."
        },
        {
          "h": "Scores",
          "t": "CHA2DS2-VASc for stroke risk; ORBIT for bleeding risk, used to identify modifiable factors rather than to deny treatment [1]."
        },
        {
          "h": "Modifiable bleeding risks",
          "t": "NSAIDs and unnecessary antiplatelets, excess alcohol, uncontrolled blood pressure, incorrect DOAC dosing, anaemia [1,4]."
        },
        {
          "h": "DOAC dose",
          "t": "Apixaban dose reduction depends on a combination of age, body weight and serum creatinine; check the SPC. Monitor renal function and weight [3]."
        },
        {
          "h": "Falls assessment",
          "t": "History, lying and standing BP, medication review (alpha-blockers, antihypertensives, sedatives, alcohol), vision, gait and balance, home hazards; multifactorial intervention [2]."
        },
        {
          "h": "Alpha-blockers",
          "t": "Doxazosin can cause postural hypotension, especially early in treatment; discuss alternatives or timing with the prescriber [3]."
        },
        {
          "h": "Capacity and relatives",
          "t": "A capacitous adult decides; involve family as he wishes and address their concerns [5]."
        },
        {
          "h": "Alcohol and grief",
          "t": "Ask about drinking in bereaved older adults; brief intervention and bereavement support [6]."
        }
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
        { t:'4–6',  h:'Screen for PE',        d:'Breathlessness, pleuritic chest pain, haemoptysis, syncope — she has breathlessness + a sharp pain on breathing: suspected PE → same-day hospital assessment (NICE NG158 PE Wells, CTPA); 999 if acutely unwell. She dismissed the breathlessness.' },
        { t:'6–9',  h:'Same-day DVT pathway', d:'D-dimer/Doppler per Wells; interim anticoagulation if scan delayed — done alongside the PE work-up at the hospital today. Pause the HRT pending investigation (BNF); oral route is the risk (transdermal is not — NICE NG23).' },
        { t:'9–12', h:'Barrier + safety-net', d:'Acknowledge the caring/time barriers but hold urgency; sudden breathlessness/chest pain/collapse → 999; confirm attendance.' }
      ],
      wordPics: {
        fail: 'Sends an anti-inflammatory gel or antibiotics over the phone for a "pulled muscle/cellulitis"; never elicits the flight/HRT risk or screens for PE; a DVT (and possible PE) goes unassessed.',
        pass: 'Recognises possible DVT, uses Wells, screens for PE and — with breathlessness and pleuritic pain — arranges same-day hospital assessment, and pauses the HRT pending investigation.',
        exc:  'Refuses remote symptomatic treatment and names the DVT possibility; actively draws out the flight/HRT risk and applies Wells; screens for PE and, finding breathlessness and pleuritic pain, arranges same-day hospital assessment (NICE NG158 PE Wells, CTPA ± interim anticoagulation); pauses the HRT pending investigation (BNF) and explains future options honestly without blame; and holds urgency against the carer/time barriers with a PE safety-net.'
      },
      avoid: [
        { dont:'"Sounds like a pulled muscle or a bit of cellulitis — I\u2019ll send a gel/antibiotics."', instead:'"A one-sided swollen, warm, sore calf worsening over days, after a long flight and on HRT, can be a clot — that needs a same-day scan, not a gel."', why:'Treating a likely DVT remotely as a pull/cellulitis misses a clot and a possible PE.' },
        { dont:'"As long as you\u2019re not breathless, it\u2019s probably just local."', instead:'"You mentioned being a bit breathless — any sharp chest pain or feeling faint? A leg clot can move to the lungs, and that makes this MORE urgent."', why:'Failing to screen for PE misses a life-threatening escalation.' },
        { dont:'"This is your HRT’s fault — you’ve brought this on yourself."', instead:'"HRT is one risk factor, so the safe thing is to pause it until the tests are done — that’s standard advice, not blame. If it isn’t a clot you can usually restart, and if it is, there are still options we’ll decide together."', why:'Blaming her is alienating — but the BNF advises stopping HRT immediately pending investigation when DVT or PE is suspected, so it is paused, kindly.' }
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
        { t:'4–6',  h:'The clock',            d:'Tissue is damaged within hours (about 6 h is the usual rule of thumb; ESVS 2020, international); he’s hours in. Emergency now — 999 to emergency vascular care, not "see how it goes".' },
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
        { t:'4–6',  h:'The plan: watch',      d:'Vascular service referral, seen within 12 weeks (NICE NG156); yearly ultrasound at 3.0–4.4 cm; repair only ~5.5 cm / rapid growth / symptomatic — a planned, controlled operation, far off.' },
        { t:'6–9',  h:'Give him agency',      d:'Smoking cessation (biggest lever — linked to growth and rupture) + BP/cholesterol control for his heart and circulation. Not helpless.' },
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
        { dont:'"There\u2019s not much you can do but wait and hope."', instead:'"There’s a lot you can do — stopping smoking is the big one for the aneurysm, and controlling your blood pressure and cholesterol protects your heart and circulation. You’re not helpless."', why:'A helpless framing misses the empowering, evidence-based risk-factor levers.' }
      ]
    },

    'af-anticoag-decision': {
      "ceg": [
        "Older adults",
        "Long-term conditions & cancer",
        "Professional & ethical dilemmas"
      ],
      "stem": {
        "name": "Frank Ostrowski",
        "age": "82 years · male",
        "pmh": [
          "Atrial fibrillation",
          "Hypertension",
          "TIA (2021)",
          "Benign prostatic enlargement"
        ],
        "meds": [
          "Apixaban",
          "Ramipril",
          "Atorvastatin",
          "Doxazosin (started 6 weeks ago by urology)"
        ],
        "allergy": "None recorded",
        "recent": "A&E two weeks ago after a fall at home: hip X-ray normal, discharged. eGFR 52, creatinine 118 µmol/L, Hb 128 g/L. Weight 64 kg. Nurse BP (sitting) 132/74. Bereaved last year.",
        "reason": "Daughter requested an appointment “to discuss Dad’s blood thinner after his fall”."
      },
      "timeMap": [
        {
          "t": "0–1",
          "h": "Open",
          "d": "Consent for Anna; acknowledge her fear; turn to Frank."
        },
        {
          "t": "1–5",
          "h": "Fall and medicines",
          "d": "Circumstances, head injury, prodrome; doxazosin; ibuprofen; alcohol; grief."
        },
        {
          "t": "5–6",
          "h": "Frank’s view",
          "d": "Stan’s stroke; it’s his decision."
        },
        {
          "t": "6–9",
          "h": "Numbers",
          "d": "Stroke versus bleeding risk; NG196 on falls; modifiable risks."
        },
        {
          "t": "9–12",
          "h": "Plan and close",
          "d": "Stop NSAID; alcohol; dose check; urology; lying and standing BP; falls team; teach-back; head injury safety-net."
        }
      ],
      "wordPics": {
        "fail": "Stops apixaban because of the fall at the daughter’s request, or dismisses her; never asks about new medicines, NSAIDs or alcohol; talks to Anna rather than Frank.",
        "pass": "Keeps Frank at the centre, explains why falls alone are not a reason to stop, finds the doxazosin and ibuprofen, and plans a falls assessment.",
        "exc": "All of the above, plus: clear risk numbers; uncovers alcohol and grief sensitively; checks the DOAC dose against the SPC criteria; liaises with urology; involves Anna constructively; robust head injury and bleeding safety-net."
      },
      "avoid": [
        {
          "dont": "“Your daughter’s right, let’s stop it to be safe.”",
          "instead": "“Falls alone aren’t a reason to stop. Let’s find out why he fell and lower the bleeding risk.”",
          "why": "NG196 advises against withholding anticoagulation solely because of falls risk."
        },
        {
          "dont": "(Talking only to Anna)",
          "instead": "“Frank, what do you think about the blood thinner?”",
          "why": "A capacitous patient decides."
        },
        {
          "dont": "(No medicine review)",
          "instead": "“Has anything changed with your tablets? Anything from the chemist?”",
          "why": "Doxazosin and ibuprofen are the key modifiable factors."
        }
      ]
    }
  });

})();
