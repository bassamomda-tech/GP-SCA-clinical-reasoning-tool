/* ============================================================
   Reasoning GP — Case Library batch 26: "Renal, electrolyte & urinary results"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   NG12 noted where it maps (non-visible haematuria 60+ with
   dysuria/raised WCC -> urological 2WW consideration).
   Emergency: hyperkalaemia urgent recall (cardiac risk).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases25.js.
   ============================================================ */

(function(){

  /* ============ 97. TELEPHONE — Hyperkalaemia urgent recall ============ */
  const c97 = {
    id:'hyperkalaemia-recall', title:'"You\u2019ve rung me at work \u2014 is it that serious?"', type:'telephone', duration:12,
    meta:{ age:68, sex:'M', setting:'Telephone \u2014 GP-initiated recall for a high potassium result.', system:'Urgent / Hyperkalaemia' },
    brief:'Mr Raymond Childs, 68. Routine bloods (monitoring after a recent dose increase) show POTASSIUM 6.6 mmol/L (critical), with a mild rise in creatinine. CKD3, type 2 diabetes, heart failure. Meds: ramipril (dose recently increased), spironolactone, metformin, and he\u2019s been taking ibuprofen for knee pain (OTC, not on record) plus a "low-salt" substitute (potassium-based). You are ringing HIM. He\u2019s at work, dismissive, "feels fine". No chest pain/palpitations volunteered.',
    script:{
      opening:'"Hello? \u2026 Oh, the surgery. You\u2019ve caught me at work \u2014 is everything alright? You don\u2019t usually ring me. The nurse said my bloods were just routine. I feel absolutely fine, honestly, bit of a knee playing up but otherwise grand. Is it really something that couldn\u2019t wait for my next appointment? I\u2019ve got a delivery to sign for."',
      facts:[
        { topic:'The result',          text:'Potassium 6.6 mmol/L is SEVERE hyperkalaemia \u2014 a risk of life-threatening cardiac arrhythmia, even when the patient feels well. With a rising creatinine it suggests worsening renal function on top. This needs urgent action TODAY (ECG + repeat/treatment), not deferral.' },
        { topic:'The drivers',          text:'On questioning: a recently INCREASED ramipril dose, spironolactone (potassium-sparing), CKD3 + heart failure, AND \u2014 the hidden contributors \u2014 OTC IBUPROFEN for his knee (not on his record; NSAIDs worsen renal function and potassium) and a POTASSIUM-BASED "low-salt" substitute he started for his blood pressure. These stack to cause the hyperkalaemia.' },
        { topic:'The asymptomatic trap', text:'He "feels fine" \u2014 hyperkalaemia is often asymptomatic until a fatal arrhythmia; muscle weakness/palpitations may or may not be present. Reassuring symptoms do NOT make a potassium of 6.6 safe. The challenge is conveying urgency to a well-feeling man who wants to defer.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 his dismissiveness ("I feel fine, can it wait") masks both a stoical reluctance to be "a bother" and a fear of hospitals (his brother went into hospital and "never came home"). He\u2019s also not mentioned the ibuprofen or the salt-substitute because he doesn\u2019t think OTC things "count" as medicines \u2014 so the safe medication history must be actively sought. Getting him to take it seriously and disclose the hidden drivers is the consultation.' },
        { topic:'What he needs',        text:'Officially he wants to defer and get back to work. What he needs: to grasp that a potassium of 6.6 is an emergency despite feeling well, urgent same-day assessment (ECG, repeat potassium, treatment), STOP the culprits (hold ramipril/spironolactone, stop the NSAID and the potassium salt-substitute) per advice, and dietary potassium advice \u2014 with his hospital fear handled so he accepts it.' },
      ],
      ice:{
        ideas:'The bloods were "just routine" and he feels fine, so it can surely wait for his next appointment.',
        concerns:'HIDDEN AGENDA \u2014 stoical reluctance to be a bother and a fear of hospital (brother who "never came home"); plus he hasn\u2019t mentioned the OTC ibuprofen or the potassium-based salt-substitute because he doesn\u2019t think they "count".',
        expectations:'To defer and get back to work. What he actually needs: to grasp the urgency of a potassium of 6.6, same-day assessment (ECG/treatment), stopping the culprit drugs/substitute, with his hospital fear addressed.'
      },
      cues:['Potassium 6.6 + feels fine \u2014 hyperkalaemia is often silent until a fatal arrhythmia; symptoms don\u2019t make it safe.','Recent ramipril increase + spironolactone + CKD/HF \u2014 the prescribed drivers; AND ask about OTC/salt-substitute.','"Can it wait, I feel fine, I\u2019ve a delivery to sign" \u2014 deferral driven by stoicism + hospital fear; convey urgency without panic.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises POTASSIUM 6.6 mmol/L as SEVERE hyperkalaemia \u2014 a risk of life-threatening cardiac arrhythmia \u2014 and that the patient feeling well does NOT make it safe or deferrable; conveys this clearly as needing action TODAY' },
      { dom:'tasks', text:'Arranges URGENT same-day assessment: an ECG NOW (to look for hyperkalaemic changes \u2014 peaked T waves, widened QRS, etc.) and urgent repeat potassium/renal function, with escalation to emergency treatment/admission per severity and ECG changes (e.g. ECG changes or K\u22656.5 generally warrant emergency management)' },
      { dom:'tasks', text:'Identifies and addresses the DRUG/INTAKE drivers: recently increased ramipril and spironolactone (advise to hold/stop per plan), and \u2014 by actively asking \u2014 the OTC IBUPROFEN (stop) and the POTASSIUM-BASED salt-substitute (stop), recognising these are key reversible contributors often missed' },
      { dom:'tasks', text:'Takes a proper medication and intake history that captures OTC/non-prescribed items and salt substitutes (because the patient won\u2019t volunteer them), and gives dietary high-potassium advice' },
      { dom:'tasks', text:'Plans appropriate follow-up of renal function and a medication review (ACE inhibitor/spironolactone titration and monitoring), and considers the precipitant for the creatinine rise (NSAID, dehydration, progression)' },
      { dom:'rto',   text:'Overcomes the deferral/dismissiveness without inducing panic: names the seriousness plainly, hears the stoicism and the hospital fear (the brother), and brings him to accept same-day care' },
      { dom:'rto',   text:'Asks about OTC medicines and salt-substitutes in a way that makes disclosure easy and non-judgemental, rather than assuming the record is complete' },
      { dom:'gs',    text:'Safety-nets clearly and acts: same-day ECG/assessment route, what to do if palpitations/chest pain/weakness/collapse occur (999), explicit stop/hold instructions for the culprits, confirms he will attend, and documents the plan and the recall' },
    ],
    worked:[
      { lbl:'Convey urgency calmly',  txt:'"I\u2019m glad I caught you, and I\u2019m sorry to ring you at work \u2014 but I did because it can\u2019t wait. One of your blood results, your potassium, has come back high enough to matter today, even though you feel completely fine. Potassium is what keeps the heart\u2019s rhythm steady, and at this level it can occasionally upset the rhythm, so I need to act now rather than at your next appointment."' },
      { lbl:'Feeling fine \u2260 safe',   txt:'"I know feeling well makes this hard to believe \u2014 and that\u2019s exactly the catch with potassium: it often gives no warning until it causes a problem. So I\u2019m not going to be reassured by you feeling grand; I\u2019m going to be guided by the number, and the number says today."' },
      { lbl:'Find the hidden drivers', txt:'"Let me ask a couple of things that really matter. We recently put your ramipril dose up, and you\u2019re on spironolactone \u2014 both can raise potassium. But also: are you taking anything for that knee? \u2026 Ibuprofen, from the chemist. Right \u2014 that pushes potassium up too and isn\u2019t on our records. And have you started any \u2018low-salt\u2019 or \u2018heart-salt\u2019 substitute? \u2026 You have? Those are usually packed with potassium. Together, that explains a lot \u2014 and it\u2019s fixable."' },
      { lbl:'Stop the culprits',      txt:'"So, from now: stop the ibuprofen completely, and stop that salt substitute \u2014 go back to ordinary cooking without added salt. Hold your ramipril and spironolactone until you\u2019ve been checked \u2014 don\u2019t take today\u2019s doses. We\u2019ll sort your knee a safer way and review those heart/kidney tablets properly."' },
      { lbl:'The plan today',       txt:'"Here\u2019s what needs to happen now: I want a heart tracing \u2014 an ECG \u2014 and your bloods repeated urgently. Depending on those, you may need treatment at the hospital to bring the potassium down safely. I\u2019d like you to come in to us or go to the assessment unit today \u2014 the delivery will have to wait. I\u2019ll arrange where you go."' },
      { lbl:'Meet the fear + net',  txt:'"I sense going in worries you \u2014 is that about hospitals? \u2026 Your brother. I\u2019m sorry, and I understand. This is different: we\u2019re acting early, on a number, to keep you safe, and most people are sorted the same day. If before you\u2019re seen you get palpitations, chest pain, feel weak or faint \u2014 that\u2019s 999 straightaway. I\u2019ll confirm exactly where to go and follow up your repeat result. You feel fine, and I want to keep it that way \u2014 that\u2019s why we move today."' },
    ],
    learning:'A potassium of 6.6 mmol/L is severe hyperkalaemia and a risk of life-threatening arrhythmia \u2014 and the patient feeling completely well does NOT make it safe or deferrable; hyperkalaemia is frequently silent until it causes a fatal rhythm. The action is urgent same-day assessment: an ECG now (peaked T waves, widened QRS, etc.) and an urgent repeat potassium/renal function, with emergency treatment/admission for ECG changes or K\u22656.5. The examinable clinical skill is finding the stacked, partly-hidden drivers: a recently increased ACE inhibitor and spironolactone (hold per plan), plus the contributors the record misses and the patient won\u2019t volunteer \u2014 OTC NSAIDs (ibuprofen for his knee) and a potassium-based "low-salt" substitute (both stopped). The hidden agenda is deferral driven by stoicism and hospital fear (a brother who "never came home"), and the belief that OTC items "don\u2019t count" as medicines. Convey urgency without panic, take an active OTC/salt-substitute history, give explicit stop/hold instructions and dietary advice, arrange same-day ECG/assessment, and safety-net cardiac symptoms to 999.',
    knowledge:{
      guideline:'UK Kidney Association / Renal Association hyperkalaemia guideline · NICE CKS hyperkalaemia · NICE NG203 CKD',
      points:[
        { h:'Stratify and act on the number', t:'Hyperkalaemia: mild 5.5\u20135.9, moderate 6.0\u20136.4, severe \u22656.5 mmol/L. Severe hyperkalaemia (and any level with ECG changes) is an emergency requiring urgent ECG and treatment, regardless of symptoms. Always consider spurious/haemolysed samples \u2014 but never delay safety on that assumption when the picture fits.' },
        { h:'ECG and cardiac risk', t:'Hyperkalaemia is often asymptomatic until it causes peaked T waves, PR prolongation, widened QRS, sine-wave pattern, bradyarrhythmias or cardiac arrest. Get an urgent ECG; ECG changes mandate emergency treatment (calcium for cardioprotection, insulin-dextrose ± salbutamol to shift K, and measures to remove it). Primary-care priority: recognise, ECG, and arrange emergency care.' },
        { h:'Find ALL the drivers', t:'Common causes: renal impairment/AKI, ACE inhibitors/ARBs, potassium-sparing diuretics (spironolactone), recent dose increases, NSAIDs, trimethoprim, dehydration, and \u2014 frequently missed \u2014 OTC NSAIDs and POTASSIUM-BASED salt substitutes (LoSalt etc.). Actively ask about non-prescribed items and salt substitutes; the record is often incomplete.' },
        { h:'Stop/hold culprits', t:'Stop NSAIDs and potassium-based salt substitutes; hold ACE inhibitor/ARB and potassium-sparing diuretics pending assessment and repeat; review and re-titrate with monitoring afterwards. Address dehydration and the cause of any creatinine rise.' },
        { h:'"Feels fine" is not reassurance', t:'Patients with dangerous hyperkalaemia commonly feel well. Do not be reassured by absent symptoms; be guided by the value and the ECG. Convey urgency to a well-feeling patient without inducing panic.' },
        { h:'Recall communication', t:'A GP-initiated recall for a critical result must convey seriousness and same-day need clearly, overcome deferral/stoicism, take a complete (OTC-inclusive) drug history, give explicit stop/hold and dietary instructions, and safety-net cardiac symptoms (palpitations, chest pain, weakness, collapse \u2192 999).' },
        { h:'Never do', t:'Never defer a potassium of 6.6 because the patient feels well; never omit the ECG; never miss OTC NSAIDs or potassium salt-substitutes; never continue the culprit drugs unreviewed; never fail to safety-net cardiac symptoms.' },
        { h:'Safety-net & follow-up', t:'Same-day ECG and repeat potassium/renal function with emergency management for severe/ECG-positive cases; explicit stop/hold of culprits and dietary potassium advice; cardiac-symptom red flags \u2192 999; medication review and renal follow-up; documented recall and plan.' }
      ]
    }
  };

  /* ============ 98. TELEPHONE — CKD stage 3 result: "disease" defused ============ */
  const c98 = {
    id:'ckd3-result', title:'"The letter says I\u2019ve got kidney disease \u2014 am I going on dialysis?"', type:'telephone', duration:12,
    meta:{ age:64, sex:'F', setting:'Telephone \u2014 patient distressed by a CKD3 result letter.', system:'Renal / Chronic kidney disease' },
    brief:'Mrs Patricia Nwosu, 64. A routine review labelled her CKD stage 3a (eGFR 52, stable over a year; ACR normal/mildly raised). She received a letter mentioning "chronic kidney disease" and is frightened. Hypertension (on amlodipine), type 2 diabetes (metformin), well in herself. No symptoms. She has googled it and is convinced she\u2019s heading for dialysis like a neighbour. Rings in distress wanting to know "how long she\u2019s got" her kidneys.',
    script:{
      opening:'"Doctor, I got this letter saying I\u2019ve got chronic kidney disease and I\u2019ve been beside myself. My neighbour had kidney disease and ended up on dialysis three times a week, and then\u2026 well. Am I heading for that? How long have my kidneys got? I feel fine, so I don\u2019t understand how my kidneys can be diseased. I didn\u2019t sleep a wink after that letter came."',
      facts:[
        { topic:'What CKD3a actually means', text:'eGFR 52 (CKD stage 3a) that is STABLE over a year with normal/mildly-raised ACR is common, usually age- and blood-pressure-related, and the large majority of people at this stage NEVER need dialysis and die WITH it, not OF it. The label "disease" frightens people far more than the mild, manageable reality.' },
        { topic:'The protective levers',  text:'If explained: the plan is to PROTECT the kidneys \u2014 good blood-pressure control, good diabetes control, an ACE inhibitor/ARB if indicated (and if ACR raised), avoiding nephrotoxins (NSAIDs), reviewing doses, statin/CVD risk, and periodic monitoring of eGFR/ACR. CKD is more a cardiovascular risk marker than a path to dialysis at this stage.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 her terror is built on the neighbour\u2019s dialysis-and-death, mapped onto herself, and the cold word "disease" in a letter with no conversation. Underneath is also a fear of being a burden on her family and of "losing her independence". She needs the catastrophic story dismantled and replaced with an accurate, empowering one. There may also be guilt that she "did this" (diabetes/diet).' },
        { topic:'The label problem',     text:'If reached: nobody explained the result before the letter; the term landed as a death sentence. The consultation is largely RISK COMMUNICATION \u2014 reframing a number into a manageable, mostly-stable condition without either minimising or terrifying.' },
        { topic:'What she wants',       text:'Officially: to know "how long her kidneys have got". What she needs: an accurate, reassuring explanation that CKD3a is common and usually stable, that dialysis is very unlikely from here, the protective plan, guilt addressed, and the neighbour-fear dismantled \u2014 with honest monitoring and safety-netting.' },
      ],
      ice:{
        ideas:'"Kidney disease" means her kidneys are failing and she\u2019s heading for dialysis and death, like her neighbour \u2014 even though she feels fine.',
        concerns:'HIDDEN AGENDA \u2014 the neighbour\u2019s dialysis-and-death mapped onto herself, the cold "disease" letter with no conversation, fear of being a burden / losing independence, and possible guilt that diabetes/diet "did this".',
        expectations:'To be told how long her kidneys have left. What she actually needs: an accurate reframe (CKD3a is common, usually stable, dialysis very unlikely), the protective plan, guilt addressed, and honest monitoring.'
      },
      cues:['"Am I going on dialysis? How long have my kidneys got?" \u2014 catastrophic reading of a label; reframe, don\u2019t minimise.','eGFR 52, stable, ACR ok, feels fine \u2014 mild, manageable CKD3a; most never reach dialysis.','The neighbour on dialysis \u2014 the specific fear driving the distress; dismantle it directly.']
    },
    checkpoints:[
      { dom:'tasks', text:'Explains CKD3a ACCURATELY and reassuringly: a mild reduction in kidney filtering that is common (especially with age, blood pressure and diabetes), here STABLE, and that the large majority of people at this stage NEVER need dialysis \u2014 without either minimising or catastrophising' },
      { dom:'tasks', text:'Reframes the "disease" label and the dialysis fear directly: distinguishes her stable CKD3a from the neighbour\u2019s end-stage disease, and explains CKD at this stage is largely a cardiovascular RISK marker to act on, not a countdown to dialysis' },
      { dom:'tasks', text:'Lays out the PROTECTIVE plan: optimise blood pressure and diabetes, ACE inhibitor/ARB where indicated (and per ACR), avoid nephrotoxins (NSAIDs), statin/CVD risk, medication-dose review, and explains the monitoring (periodic eGFR + ACR) as surveillance that catches change early' },
      { dom:'tasks', text:'Addresses GUILT and lifestyle without shaming, and gives realistic, empowering actions (BP, glucose, avoiding ibuprofen, hydration) framed as protecting her kidneys' },
      { dom:'tasks', text:'Knows the genuine red flags / referral thresholds (rapidly falling eGFR, significant/ rising proteinuria/ACR, haematuria, uncontrolled BP, young age) that WOULD warrant nephrology referral \u2014 distinguishing her stable picture from those' },
      { dom:'rto',   text:'Responds to the distress and the sleepless fear FIRST, dismantles the neighbour-driven catastrophe with empathy, and replaces dread with an accurate, empowering narrative' },
      { dom:'rto',   text:'Acknowledges the harm of a cold letter without a conversation, and the burden/independence fears, validating them while reassuring' },
      { dom:'gs',    text:'Safety-nets and follows up: the monitoring plan and what change would prompt review, avoiding NSAIDs, when to seek help (e.g. with intercurrent illness/dehydration \u2014 sick-day guidance for relevant meds), and a follow-up that leaves her reassured and engaged rather than terrified' },
    ],
    worked:[
      { lbl:'Defuse the word first', txt:'"I\u2019m so sorry that letter frightened you and cost you a night\u2019s sleep \u2014 let me put the scary word in proportion straightaway. \u2018Chronic kidney disease stage 3\u2019 sounds dramatic, but in your case it means your kidneys are filtering a little slower than a younger person\u2019s \u2014 which is incredibly common at 64, especially with blood pressure and diabetes \u2014 and yours has been STABLE for a year. This is a world away from your neighbour\u2019s situation."' },
      { lbl:'Dismantle the dialysis fear', txt:'"Let me answer your real question directly: are you heading for dialysis? Almost certainly not. The vast majority of people at your stage never need it \u2014 they live a normal lifespan and die WITH this, not OF it. Your neighbour had advanced, end-stage kidney failure; you have a mild, stable reduction. They\u2019re genuinely different things, and I don\u2019t want you carrying her ending as if it were yours."' },
      { lbl:'Make it empowering',   txt:'"Here\u2019s the useful way to think about it: this number is mostly a nudge to look after your heart and circulation, which protect your kidneys too. So we keep your blood pressure and diabetes well controlled, we use a tablet that shields the kidneys if it\u2019s right for you, we avoid things that strain them \u2014 like ibuprofen \u2014 and we keep an eye with a blood and urine test now and then. That\u2019s not a countdown; that\u2019s you in the driving seat."' },
      { lbl:'Lift any guilt',       txt:'"And if any part of you is blaming yourself \u2014 the diabetes, your diet \u2014 please don\u2019t. Kidneys naturally slow with age and blood pressure; this isn\u2019t a punishment. What matters now is the things we CAN do, and there\u2019s plenty, and they work."' },
      { lbl:'Honest monitoring',    txt:'"I\u2019ll be straight: we do keep watching, because occasionally kidney function drifts, and we\u2019d rather catch that early. So you\u2019ll have periodic tests. If the numbers ever changed in a way that needed a specialist, we\u2019d arrange that \u2014 but you are nowhere near that, and stable is exactly what we want."' },
      { lbl:'Safety-net + reassure', txt:'"One practical thing: avoid anti-inflammatory painkillers like ibuprofen \u2014 paracetamol\u2019s fine \u2014 and if you\u2019re ever really unwell with vomiting or diarrhoea, drink plenty and let us know, as we sometimes pause certain tablets briefly. Otherwise, please sleep tonight: this is mild, stable, and managed. Come and see me to go through it properly and ask anything \u2014 you are going to be absolutely fine looking after this."' },
    ],
    learning:'A CKD stage-3a result (eGFR ~52, stable, ACR normal/mildly raised) in a well 64-year-old is a RISK-COMMUNICATION consultation: the word "disease" in a letter, with no conversation, lands as a dialysis-and-death sentence \u2014 here amplified by a neighbour\u2019s end-stage disease mapped onto herself. The task is to reframe ACCURATELY without minimising: CKD3a is common (age, BP, diabetes), usually stable, the large majority never need dialysis (they die with it, not of it), and at this stage it is largely a cardiovascular risk marker to act on. Lay out the protective levers (BP and diabetes control, ACE inhibitor/ARB where indicated, avoid NSAIDs, statin/CVD risk, dose review, periodic eGFR+ACR monitoring), address guilt without shaming, and know the genuine referral thresholds (rapidly falling eGFR, significant/rising proteinuria, haematuria, uncontrolled BP, young age) that distinguish her stable picture from those needing nephrology. Respond to the distress first, dismantle the neighbour-driven catastrophe, and safety-net (NSAID avoidance, sick-day guidance, monitoring) so she leaves reassured and engaged.',
    knowledge:{
      guideline:'NICE NG203 chronic kidney disease · CKS CKD · KDIGO risk classification (eGFR + ACR)',
      points:[
        { h:'Stage and contextualise', t:'CKD is classified by eGFR (G stages) AND albuminuria (ACR; A stages). CKD3a = eGFR 45\u201359. A stable, mildly-reduced eGFR with low ACR in an older person is common and low-risk. Diagnose CKD on persistent abnormality (\u2265~3 months), not a single reading; exclude AKI and transient causes.' },
        { h:'Most CKD never reaches dialysis', t:'At CKD3 with stable function and low albuminuria, progression to kidney failure is uncommon; CKD is more a cardiovascular RISK marker than a path to dialysis. Communicate this honestly \u2014 patients vastly over-estimate dialysis risk, often from a relative/neighbour\u2019s end-stage disease.' },
        { h:'Protective management', t:'Optimise blood pressure (per CKD targets) and diabetes; offer an ACE inhibitor/ARB especially with albuminuria (with potassium/renal monitoring); consider an SGLT2 inhibitor in CKD with diabetes/albuminuria; statin for CVD risk; avoid nephrotoxins (NSAIDs); review renally-cleared drug doses; lifestyle and smoking. Monitor eGFR and ACR periodically.' },
        { h:'Albuminuria drives risk', t:'ACR is a powerful prognostic marker \u2014 rising or significant albuminuria, not just eGFR, signals progression risk and strengthens indications for ACE inhibitor/ARB and tighter control. Quantify and track it.' },
        { h:'Referral thresholds', t:'Refer to nephrology for: rapidly declining eGFR (sustained fall), accelerated progression, significant or rising ACR (e.g. \u226570, or \u226530 with haematuria), CKD with uncontrolled hypertension on multiple agents, suspected genetic/rare cause, recurrent/persistent haematuria, or young age. Her stable CKD3a with low ACR does NOT meet these.' },
        { h:'Risk communication & sick-day guidance', t:'Reframe the "disease" label without minimising; address guilt and the dialysis fear directly. Give sick-day advice (temporarily holding ACE inhibitor/ARB, diuretics, metformin, SGLT2i and NSAIDs during significant dehydrating illness) and NSAID avoidance.' },
        { h:'Never do', t:'Never deliver a CKD label by letter without a conversation if avoidable; never minimise OR catastrophise; never leave the dialysis/neighbour fear unaddressed; never miss albuminuria or genuine referral red flags; never forget NSAID-avoidance and sick-day guidance.' },
        { h:'Safety-net & follow-up', t:'Monitoring plan (eGFR + ACR) with what change prompts review/referral; NSAID avoidance and sick-day rules; BP/diabetes optimisation; a reassuring follow-up appointment; documented plan.' }
      ]
    }
  };

  /* ============ 99. TELEPHONE — Hyponatraemia on a diuretic ============ */
  const c99 = {
    id:'hyponatraemia-diuretic', title:'"Bit muddly and wobbly \u2014 it\u2019s just my age, surely"', type:'telephone', duration:12,
    meta:{ age:77, sex:'F', setting:'Telephone \u2014 low sodium on bloods; mild symptoms.', system:'Renal / Hyponatraemia' },
    brief:'Mrs Glenys Tovey, 77. Bloods (done because she felt "off") show SODIUM 121 mmol/L (low). Recently started bendroflumethiazide for blood pressure ~3 weeks ago; also on citalopram (SSRI, long-standing) and omeprazole. Daughter reports she\u2019s been more confused, unsteady, and had a near-fall. She minimises ("just getting old"). Drinks lots of squash "to stay hydrated". You are ringing about the result. No seizure/vomiting volunteered.',
    script:{
      opening:'"Hello dear \u2014 the surgery? Oh. My daughter does fuss. I\u2019ve been a bit muddly and wobbly, that\u2019s all, but isn\u2019t that just getting old? I\u2019ve been drinking lots of squash to keep my fluids up like they say. I nearly went over getting up the other day but I\u2019m fine. Is it the blood test? I\u2019m sure it\u2019s nothing that can\u2019t wait."',
      facts:[
        { topic:'The result & risk',    text:'Sodium 121 mmol/L is significant hyponatraemia. With NEW confusion, unsteadiness and a near-fall, this is symptomatic and needs urgent assessment \u2014 severe or rapidly-developing hyponatraemia risks seizures and is dangerous; even moderate symptomatic hyponatraemia in the elderly causes falls and confusion.' },
        { topic:'The drivers',          text:'On questioning: a recently started THIAZIDE (bendroflumethiazide \u2014 a classic cause of hyponatraemia, especially in older women, within weeks of starting), an SSRI (citalopram \u2014 SIADH), and EXCESS HYPOTONIC FLUID (lots of squash "to stay hydrated") compounding it. The drug + water-loading combination is the picture.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 she attributes the confusion, unsteadiness and near-fall to "just getting old", and is minimising to avoid fuss and (if reached) because she\u2019s frightened that admitting confusion/falls means "losing her independence" or "going into a home". The daughter\u2019s concern is the reliable signal. She also over-drinks squash from well-meant but misapplied "stay hydrated" advice \u2014 a correctable contributor she\u2019s proud of.' },
        { topic:'The symptom-attribution trap', text:'Confusion, unsteadiness and falls in an older person are too easily written off as ageing; here they are symptoms of a treatable, dangerous electrolyte problem. Recognising the new symptoms as the sodium, not age, is the consultation.' },
        { topic:'What she needs',       text:'Officially she wants to defer. What she needs: recognition that symptomatic hyponatraemia at 121 needs urgent assessment, identification and stopping of the culprit (hold the thiazide; review the SSRI), correction of the excess squash, and safe management/monitoring \u2014 with the independence fear handled so she accepts help.' },
      ],
      ice:{
        ideas:'The muddledness and wobbliness are just old age, and the squash is her being good about hydration; the blood test can wait.',
        concerns:'HIDDEN AGENDA \u2014 fear that admitting confusion/falls means losing independence or "a home", driving minimisation; pride in drinking lots of squash (misapplied hydration advice).',
        expectations:'To defer and not make a fuss. What she actually needs: urgent assessment for symptomatic hyponatraemia, stopping the thiazide, reviewing the SSRI, cutting the excess fluid, with her independence fear addressed.'
      },
      cues:['Sodium 121 + NEW confusion/unsteadiness/near-fall \u2014 symptomatic hyponatraemia; urgent, not "just age".','Thiazide started 3 weeks ago + SSRI + lots of squash \u2014 the stacked drivers; thiazide is the classic culprit.','"Just getting old, my daughter fusses" \u2014 symptom misattribution + independence fear; daughter\u2019s concern is the signal.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises SODIUM 121 mmol/L with NEW confusion, unsteadiness and a near-fall as SYMPTOMATIC, significant hyponatraemia needing urgent assessment \u2014 and does NOT accept "just getting old" or defer it' },
      { dom:'tasks', text:'Identifies the DRUG drivers: the recently started THIAZIDE (bendroflumethiazide \u2014 a classic, often-early cause of hyponatraemia, especially in older women) and the SSRI (citalopram \u2014 SIADH); advises holding/stopping the thiazide and reviewing the SSRI' },
      { dom:'tasks', text:'Identifies the EXCESS HYPOTONIC FLUID (lots of squash) as a compounding factor and advises sensible fluid restriction/normalisation, correcting the misapplied "stay hydrated" advice without shaming' },
      { dom:'tasks', text:'Arranges urgent assessment and appropriate work-up/monitoring: urgent repeat sodium and clinical assessment, hospital/acute assessment given symptomatic hyponatraemia at this level (and knows severe symptoms \u2014 seizures, marked confusion, vomiting, reduced consciousness \u2014 are an emergency), with awareness that correction must be controlled (avoid over-rapid correction)' },
      { dom:'tasks', text:'Considers the broader hyponatraemia differential and assessment (volume status, other drugs, SIADH causes) appropriately, and plans falls-risk review given the near-fall' },
      { dom:'rto',   text:'Overcomes the "just my age" minimisation, treats the daughter\u2019s concern as the reliable signal, and surfaces/handles the independence/"a home" fear so she accepts assessment' },
      { dom:'rto',   text:'Corrects the over-drinking advice gently (she\u2019s proud of it) and frames stopping the tablet and the squash as the fix, not a failing' },
      { dom:'gs',    text:'Safety-nets clearly: urgent assessment route, red flags that mean emergency (worsening confusion, drowsiness, seizure, vomiting \u2192 999), hold the thiazide and cut the squash now, repeat bloods, falls review, and follow-up \u2014 confirming she will be seen' },
    ],
    worked:[
      { lbl:'Refuse “just age”',     txt:'"I\u2019m glad I caught you, and your daughter\u2019s right to be concerned. The muddledness and the wobbles, and nearly going over \u2014 I don\u2019t think that\u2019s simply age. Your blood test shows your salt level is low, and that genuinely causes exactly those symptoms: confusion, unsteadiness, falls. The good news is it\u2019s treatable \u2014 but it needs sorting now, not waiting."' },
      { lbl:'Find the drivers',     txt:'"Let me work out why. We started a water tablet for your blood pressure about three weeks ago \u2014 that\u2019s a very common cause of low salt, especially in ladies your age, and the timing fits exactly. You\u2019re also on citalopram, which can lower it too. And \u2014 can I ask \u2014 how much squash are you drinking? \u2026 Quite a lot, to stay hydrated. Ah \u2014 that\u2019s the missing piece: drinking a lot of watery drinks dilutes the salt further. None of this is your fault; it\u2019s a combination we can fix."' },
      { lbl:'The fix',              txt:'"So: please STOP the water tablet \u2014 don\u2019t take any more for now \u2014 and ease right back on the squash; just drink normally to your thirst, not extra. We\u2019ll review the citalopram too. Those changes plus a check today should bring your salt back up safely."' },
      { lbl:'Urgent assessment',    txt:'"Because your salt is quite low AND it\u2019s affecting your thinking and balance, I don\u2019t want to leave it. I\u2019d like you assessed today and your bloods repeated \u2014 it may mean a trip to the assessment unit, because we have to bring the salt up carefully and safely, not too fast. I\u2019ll arrange where you go, and your daughter can take you."' },
      { lbl:'Meet the fear',        txt:'"I get the sense you don\u2019t want a fuss \u2014 and maybe a worry that admitting you\u2019ve been muddled means losing your independence. Let me reassure you: this is the OPPOSITE \u2014 a low salt level we fix, so you\u2019re steadier and clearer and SAFER at home, not the other way round. Sorting this is how you stay independent."' },
      { lbl:'Safety-net',           txt:'"If you become more confused, very drowsy, are sick, or have any kind of fit before you\u2019re seen \u2014 that\u2019s 999 immediately. Otherwise: stop the water tablet, normal drinking only, and get seen today. I\u2019ll chase your repeat result and we\u2019ll review all your tablets and your balance afterwards. You\u2019re not \u2018just getting old\u2019 \u2014 you\u2019ve got something we can put right."' },
    ],
    learning:'Sodium 121 mmol/L with NEW confusion, unsteadiness and a near-fall is symptomatic, significant hyponatraemia \u2014 a treatable, dangerous cause of exactly the symptoms too easily dismissed as "just getting old". The clinical skill is finding the stacked drivers: a recently started THIAZIDE (bendroflumethiazide is a classic, often early, cause of hyponatraemia in older women), an SSRI (citalopram \u2192 SIADH), and EXCESS hypotonic fluid (lots of squash from misapplied "stay hydrated" advice) compounding it. Hold the thiazide, review the SSRI, normalise the fluid intake, and arrange urgent assessment and a repeat sodium \u2014 with awareness that symptomatic hyponatraemia at this level needs acute assessment, severe symptoms (seizures, marked confusion, vomiting, reduced consciousness) are an emergency, and correction must be controlled (avoid over-rapid correction). The examinable hidden agenda is symptom-misattribution plus an independence/"a home" fear driving minimisation; treat the daughter\u2019s concern as the reliable signal, reframe fixing the sodium as the way to STAY safe and independent, correct the over-drinking gently, plan a falls review, and safety-net the emergency features.',
    knowledge:{
      guideline:'NICE CKS hyponatraemia · Society for Endocrinology / European hyponatraemia guidance · STOPP-START (older adults)',
      points:[
        { h:'Symptomatic + significant = urgent', t:'Hyponatraemia severity depends on the level, the RATE of fall, and SYMPTOMS. New confusion, gait disturbance/falls, headache, nausea indicate symptomatic hyponatraemia needing urgent assessment; severe features (seizures, marked drowsiness/reduced consciousness, vomiting) are an emergency. Don\u2019t attribute new confusion/falls in the elderly to "ageing".' },
        { h:'Drug causes \u2014 think first', t:'Thiazide and thiazide-like diuretics (e.g. bendroflumethiazide, indapamide) are a leading cause, classically within weeks of starting, especially in older women. SSRIs/SNRIs, carbamazepine, PPIs, and others cause SIADH. Review and stop/hold the likely culprit; recent dose changes are key.' },
        { h:'Excess hypotonic fluid', t:'Over-drinking of water/squash (often from misapplied "stay hydrated" advice) dilutes sodium and compounds drug-induced hyponatraemia. Correct it gently \u2014 advise drinking to thirst, not extra \u2014 without shaming.' },
        { h:'Assess and correct safely', t:'Assess volume status and cause (hypovolaemic vs euvolaemic/SIADH vs hypervolaemic); urgent repeat sodium and clinical assessment; acute assessment for symptomatic/ significant hyponatraemia. Correction must be CONTROLLED \u2014 over-rapid correction risks osmotic demyelination \u2014 hence specialist/acute management for significant or symptomatic cases.' },
        { h:'Older-adult lens', t:'Symptomatic hyponatraemia is a major reversible cause of falls, confusion and admission in older people. Review the whole drug list (STOPP-START), plan a falls assessment after the near-fall, and consider safer antihypertensive alternatives to the thiazide.' },
        { h:'Communication', t:'Overcome "just my age" minimisation and the independence/care-home fear that drives it; treat the worried relative as the reliable historian; frame correcting the sodium as the route to staying safe and independent.' },
        { h:'Never do', t:'Never write off new confusion/unsteadiness/falls as ageing without checking electrolytes; never miss the recent thiazide or the SSRI/fluid contribution; never defer symptomatic hyponatraemia at 121; never allow/aim for over-rapid correction; never ignore the falls risk.' },
        { h:'Safety-net & follow-up', t:'Urgent assessment + repeat sodium; hold the thiazide and normalise fluids now; review SSRI; emergency red flags (worsening confusion, drowsiness, seizure, vomiting \u2192 999); falls review; medication review and follow-up; confirm attendance.' }
      ]
    }
  };

  /* ============ 100. VIDEO — Non-visible (microscopic) haematuria ============ */
  const c100 = {
    id:'nonvisible-haematuria', title:'"There was blood on my dip test \u2014 but I can\u2019t see any"', type:'video', duration:12,
    meta:{ age:67, sex:'M', setting:'Video consultation \u2014 incidental non-visible haematuria.', system:'Urology / Non-visible haematuria' },
    brief:'Mr Alec Brennan, 67. A urine dip done for unrelated reasons showed blood (non-visible / microscopic), confirmed on repeat, with no proteinuria. He has no visible blood, mild lower urinary tract symptoms. Ex-smoker (35 pack-years), worked in the rubber/dye industry years ago. BP fine, eGFR normal. He\u2019s dismissive \u2014 "if I can\u2019t see it, it can\u2019t be much" \u2014 and wants to skip "a load of tests". No frank pain. Meds: none.',
    script:{
      opening:'"Afternoon. So the nurse said my water sample had a bit of blood in it, but here\u2019s the thing \u2014 I can\u2019t SEE any blood when I go, it looks totally normal. So surely if I can\u2019t see it, it\u2019s not much to worry about? I\u2019d really rather not get dragged into a load of tests and hospital appointments for something I can\u2019t even see. Can we just leave it and recheck in a while?"',
      facts:[
        { topic:'Why it still matters',  text:'Non-visible (microscopic) haematuria confirmed on testing, in a 60+ ex-smoker with occupational dye/rubber exposure, requires investigation \u2014 it can be the only sign of urological cancer (bladder/renal) or significant renal disease, even with no visible blood and no pain. "Can\u2019t see it" does NOT mean benign.' },
        { topic:'The 2WW criterion',     text:'NG12: refer on a suspected-cancer (2-week-wait) pathway for bladder/renal cancer in people aged 60+ with non-visible haematuria AND either dysuria OR a raised white cell count; and use a 2WW pathway for VISIBLE haematuria 45+ unexplained / 60+ with relevant features. Persistent non-visible haematuria otherwise still warrants urological assessment/work-up. His age, smoking and occupational exposure raise concern; clarify dysuria/WCC to apply the precise threshold.' },
        { topic:'The risk factors',     text:'Age 67, 35 pack-year smoking history, and historical RUBBER/DYE industry exposure (aromatic amines) \u2014 all significant bladder-cancer risk factors. He doesn\u2019t realise these matter.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the "if I can\u2019t see it, it\u2019s nothing" is partly genuine misunderstanding and partly avoidance: he\u2019s a recently-bereaved widower who has "let his health go", dreads hospitals and invasive tests (specifically frightened of a "camera up there" \u2014 cystoscopy), and there\u2019s a quieter fear that tests will find something and he\u2019ll face it alone. The minimisation protects him from both the hassle and the fear.' },
        { topic:'What he needs',        text:'Officially he wants to leave it and recheck. What he needs: to understand that confirmed non-visible haematuria in his risk group needs proper investigation (and likely a 2WW/urology referral), the cystoscopy fear addressed honestly, and support given the bereavement \u2014 so he engages rather than deferring a potentially important finding.' },
      ],
      ice:{
        ideas:'If he can\u2019t see blood in his urine, it can\u2019t be significant, so it can be left and rechecked later.',
        concerns:'HIDDEN AGENDA \u2014 recently bereaved, "let his health go", dread of hospitals and specifically of a cystoscopy ("camera up there"), and a quiet fear of facing bad news alone; minimisation protects him from hassle and fear.',
        expectations:'To leave it and recheck in a while. What he actually needs: to grasp that confirmed non-visible haematuria in his risk group needs investigation (likely urology/2WW), with the cystoscopy fear and bereavement addressed.'
      },
      cues:['"If I can\u2019t see it, it\u2019s nothing" \u2014 a misconception to correct; non-visible haematuria can be the only sign of cancer.','67 + 35 pack-years + rubber/dye industry \u2014 stacked bladder-cancer risk factors he doesn\u2019t recognise.','"Don\u2019t want a camera up there / drag me into tests" \u2014 cystoscopy fear + bereavement-driven avoidance underneath.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises that confirmed NON-VISIBLE (microscopic) haematuria still requires investigation and does NOT accept "if I can\u2019t see it, it\u2019s nothing" \u2014 it can be the sole sign of urological cancer or renal disease, even painless and invisible' },
      { dom:'tasks', text:'Applies the NG12 thresholds: clarifies dysuria and checks the white cell count to determine the 2WW criterion (60+ with non-visible haematuria AND dysuria OR raised WCC \u2192 bladder/renal 2WW), and recognises his age/smoking/occupational risk \u2014 referring on the suspected-cancer pathway where criteria are met and for urological assessment otherwise; tagged NICE NG12' },
      { dom:'tasks', text:'Weights the RISK FACTORS (age 67, 35 pack-year smoking, aromatic-amine exposure from the rubber/dye industry) as raising bladder-cancer concern, and explains why investigation matters' },
      { dom:'tasks', text:'Plans the appropriate work-up: confirm persistence (already repeated), exclude UTI/transient causes, check renal function and ACR/proteinuria and BP (to triage urological vs nephrological pathways), and refer accordingly (urology for cancer work-up incl. cystoscopy/imaging; nephrology if proteinuria/declining eGFR/dysmorphic picture)' },
      { dom:'tasks', text:'Addresses the CYSTOSCOPY fear honestly: explains what investigation involves, that it is usually quick and well-tolerated, and that finding things early is exactly the point \u2014 without dismissing the fear' },
      { dom:'rto',   text:'Corrects the "can\u2019t see it = nothing" misconception clearly but kindly, and surfaces the bereavement and the dread of facing tests alone, rather than accepting the deferral at face value' },
      { dom:'rto',   text:'Supports him around the bereavement and "letting his health go", and frames investigation as worth doing for himself \u2014 engaging him rather than coercing' },
      { dom:'gs',    text:'Safety-nets and follows up: arranges the referral/work-up, advises to report any VISIBLE blood or new symptoms (which would escalate), confirms understanding and engagement, offers support, documents, and tracks the outcome' },
    ],
    worked:[
      { lbl:'Correct the misconception', txt:'"I understand the logic \u2014 if you can\u2019t see it, surely it\u2019s nothing. But here\u2019s the important bit: blood that only shows up on testing, that you can\u2019t see, can still be the first and only sign of something that needs sorting \u2014 sometimes in the bladder or kidneys. Invisible doesn\u2019t mean harmless. That\u2019s exactly why we don\u2019t just leave it."' },
      { lbl:'Name the risk factors', txt:'"And a couple of things about you specifically matter. You\u2019re 67, you smoked for a long time, and you worked in the rubber and dye trade years back \u2014 all of those raise the chance of a bladder problem being the cause. None of that means you have anything; it means you\u2019re someone we check properly rather than wait and see."' },
      { lbl:'The plan / 2WW',       txt:'"So let me ask \u2014 any burning or stinging when you pass water? \u2026 Depending on that and a couple of checks, you likely qualify for an urgent referral to the bladder/kidney specialists, seen within two weeks. They\u2019ll do some imaging and usually a look into the bladder. I\u2019ll also check your kidney function and protein in the urine, because that steers whether it\u2019s a bladder or a kidney question."' },
      { lbl:'Address the camera fear', txt:'"I suspect part of the reluctance is the thought of a camera test \u2014 is that right? Let me be honest and reassuring: it\u2019s a quick look with a fine, flexible camera, usually just a bit uncomfortable, with numbing gel, and over in minutes. People dread it far more than the reality. And the whole point is to catch anything early, when it\u2019s most easily dealt with."' },
      { lbl:'Meet the bereavement', txt:'"Can I gently ask how things have been since you lost your wife? \u2026 I\u2019m sorry. It\u2019s so common to let your own health slide when you\u2019re grieving, and maybe part of you didn\u2019t want tests that might find bad news to face on your own. You wouldn\u2019t be on your own \u2014 we\u2019d be with you every step, whatever it showed. And doing this is you looking after yourself, which matters."' },
      { lbl:'Safety-net',          txt:'"So I\u2019ll arrange the referral and the kidney checks. If you ever DO see blood in your urine, or get pain or fever, tell us sooner \u2014 that changes things. I\u2019ll make sure you\u2019re booked and I\u2019ll follow it up with you, and we can talk again about the camera test beforehand if it helps. You came wanting to leave it; what I\u2019m asking is that you let us check it \u2014 for something you can\u2019t see, it\u2019s the sensible, caring thing to do for yourself."' },
    ],
    learning:'Confirmed non-visible (microscopic) haematuria still requires investigation \u2014 "if I can\u2019t see it, it\u2019s nothing" is a misconception, as invisible, painless haematuria can be the sole sign of urological cancer (bladder/renal) or significant renal disease. Apply the NG12 thresholds: 60+ with non-visible haematuria AND dysuria OR a raised white cell count warrants a bladder/renal suspected-cancer (2WW) referral; visible haematuria has its own (45+ unexplained / 60+) criteria; otherwise persistent non-visible haematuria warrants urological/nephrological work-up. Weight his risk factors (age, 35 pack-year smoking, aromatic-amine dye/rubber exposure), confirm persistence and exclude UTI, and check renal function/ACR/BP to triage urological vs nephrological pathways. The examinable hidden agenda is a recently-bereaved widower minimising from a mix of genuine misunderstanding, cystoscopy dread, and fear of facing bad news alone. Correct the misconception kindly, address the cystoscopy fear honestly, support him around the bereavement, frame investigation as caring for himself, and safety-net visible blood/new symptoms.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer (May 2025) — bladder/renal · NICE NG203 CKD (haematuria) · BAUS haematuria guidance',
      points:[
        { h:'Non-visible haematuria is not benign', t:'Microscopic/non-visible haematuria, confirmed and unexplained, can be the only sign of urological malignancy or renal disease. Absence of visible blood and absence of pain do NOT exclude serious causes. Confirm with repeat testing and exclude transient causes (UTI, menstruation, recent exercise/instrumentation).' },
        { h:'NG12 thresholds', t:'Refer on a 2WW bladder/renal pathway: aged 45+ with unexplained VISIBLE haematuria (without UTI, or persisting/recurring after UTI treatment); aged 60+ with NON-VISIBLE haematuria AND dysuria OR a raised white cell count. Consider non-urgent referral for recurrent/persistent unexplained UTI in 60+. Clarify the specific features to apply the right pathway.' },
        { h:'Risk factors raise concern', t:'Bladder cancer: increasing age, smoking (dose-dependent), occupational exposure to aromatic amines (dye, rubber, leather, printing industries), prior pelvic radiotherapy/chemo (cyclophosphamide), and chronic catheter/schistosomiasis. Their presence strengthens the case for investigation.' },
        { h:'Triage urological vs nephrological', t:'Check renal function (eGFR), ACR/proteinuria and blood pressure. Haematuria WITH significant proteinuria, declining eGFR, hypertension, or dysmorphic red cells points to a renal (nephrology) cause; isolated haematuria with risk factors points to urology (imaging + flexible cystoscopy). Both can be needed.' },
        { h:'Address the cystoscopy fear', t:'Fear of cystoscopy commonly drives avoidance. Explain honestly: a quick flexible-scope examination with local anaesthetic gel, usually mildly uncomfortable, brief \u2014 dread exceeds reality. Frame investigation as early detection.' },
        { h:'Communication & context', t:'Correct the "can\u2019t see it = nothing" misconception kindly; surface psychosocial drivers of avoidance (here bereavement and facing bad news alone); support engagement rather than coerce. Treat investigation as self-care.' },
        { h:'Never do', t:'Never accept "invisible so benign" for confirmed non-visible haematuria; never miss the age/smoking/occupational risk factors or the NG12 thresholds; never skip renal-function/proteinuria triage; never dismiss the cystoscopy fear instead of addressing it; never leave a bereaved patient to disengage.' },
        { h:'Safety-net & follow-up', t:'Confirm persistence, exclude UTI, check eGFR/ACR/BP; refer per NG12 (urology \u00b1 nephrology); advise reporting visible blood/pain/fever (escalation); address the cystoscopy fear and bereavement; confirm booking and follow up the outcome.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c97, c98, c99, c100);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'hyperkalaemia-recall': {
      ceg: ['Urgent & unscheduled care', 'Prescribing & pharmacology'],
      stem: {
        name: 'Raymond Childs', age: '68 years · male',
        pmh: ['CKD3, type 2 diabetes, heart failure', 'Bloods: POTASSIUM 6.6 (critical) + mild creatinine rise', 'Recently increased ramipril; on spironolactone'],
        meds: ['Ramipril (dose recently up)', 'Spironolactone', 'Metformin', 'OTC ibuprofen (not on record)', 'Potassium-based salt substitute'],
        allergy: 'NKDA',
        recent: '⚠ GP ringing HIM. At work, dismissive, "feels fine".',
        reason: 'Telephone — recall for a critical potassium result.'
      },
      timeMap: [
        { t:'0–2',  h:'Convey urgency calmly', d:'Potassium 6.6 matters TODAY even though he feels fine — it can upset the heart rhythm. Not deferrable.' },
        { t:'2–4',  h:'Feeling fine ≠ safe',   d:'Hyperkalaemia is often silent until an arrhythmia. Be guided by the number and the ECG, not symptoms.' },
        { t:'4–6',  h:'Find the hidden drivers', d:'Ramipril increase + spironolactone + CKD/HF — AND ask about OTC ibuprofen and the potassium salt-substitute (not on record).' },
        { t:'6–8',  h:'Stop the culprits',     d:'Stop ibuprofen + salt substitute; hold ramipril/spironolactone pending review. Dietary potassium advice.' },
        { t:'8–12', h:'Same-day ECG + net',    d:'ECG now + urgent repeat K/renal; assessment-unit/emergency per ECG. Palpitations/chest pain/weakness → 999. Meet the hospital fear; confirm he goes.' }
      ],
      wordPics: {
        fail: 'Accepts "I feel fine, can it wait", defers to the next appointment; no ECG; misses the OTC ibuprofen and the potassium salt-substitute; leaves the culprit drugs running — a critical, potentially fatal hyperkalaemia left untreated.',
        pass: 'Recognises severe hyperkalaemia, arranges same-day ECG/assessment, holds the ACE-i/spironolactone, and safety-nets cardiac symptoms.',
        exc:  'Conveys same-day urgency to a well-feeling man without panic; refuses to be reassured by absent symptoms; actively elicits the hidden OTC NSAID and potassium salt-substitute and stops them with the prescribed drivers; arranges ECG + urgent repeat and emergency management as indicated; meets the hospital fear; and safety-nets cardiac red flags to 999.'
      },
      avoid: [
        { dont:'"Your bloods were a bit off but you feel fine, so it can wait for your appointment."', instead:'"Your potassium is high enough to upset the heart rhythm, and that\u2019s true even though you feel completely well — this needs sorting today, starting with a heart tracing."', why:'Deferring severe hyperkalaemia because the patient feels well risks a fatal arrhythmia.' },
        { dont:'"Just keep taking your tablets as normal and we\u2019ll recheck next week."', instead:'"Stop the ibuprofen and the salt-substitute now, and hold your ramipril and spironolactone until you\u2019re checked — those are pushing the potassium up."', why:'Continuing the culprit drugs/substitute keeps driving the hyperkalaemia up.' },
        { dont:'"Are you on any tablets from us?" (record only)', instead:'"Are you taking anything from the chemist, like ibuprofen for that knee, and have you started any \u2018low-salt\u2019 substitute?"', why:'Asking only about prescribed meds misses the OTC NSAID and potassium salt-substitute that often cause the hyperkalaemia.' }
      ]
    },

    'ckd3-result': {
      ceg: ['Long-term conditions & cancer', 'Investigations & results'],
      stem: {
        name: 'Patricia Nwosu', age: '64 years · female',
        pmh: ['CKD stage 3a (eGFR 52, stable 1 year; ACR normal/mildly raised)', 'Hypertension (amlodipine), type 2 diabetes (metformin)', 'Well, no symptoms'],
        meds: ['Amlodipine', 'Metformin'],
        allergy: 'NKDA',
        recent: 'Distressed by a letter saying "chronic kidney disease"; neighbour died on dialysis; didn\u2019t sleep.',
        reason: 'Telephone — frightened by a CKD result letter.'
      },
      timeMap: [
        { t:'0–2',  h:'Defuse the word',     d:'The letter terrified her. CKD3a = kidneys filtering a little slower; common at 64; STABLE. A world from her neighbour.' },
        { t:'2–4',  h:'Dismantle dialysis fear', d:'Most at this stage never need dialysis — die WITH it, not OF it. Her neighbour had end-stage disease; she has mild, stable reduction.' },
        { t:'4–7',  h:'Make it empowering',   d:'It\u2019s mainly a CVD risk nudge: control BP/diabetes, kidney-protecting tablet if right, avoid NSAIDs, periodic eGFR+ACR. She\u2019s in the driving seat.' },
        { t:'7–9',  h:'Lift guilt',           d:'Not a punishment; kidneys slow with age/BP. Focus on what works.' },
        { t:'9–12', h:'Honest monitoring + net', d:'Periodic tests; referral thresholds exist but she\u2019s nowhere near. Avoid ibuprofen; sick-day rules; reassuring follow-up.' }
      ],
      wordPics: {
        fail: 'Either minimises ("ignore the letter, it\u2019s nothing") or fails to dismantle the dialysis catastrophe, leaving her terrified; no protective plan, no guilt/neighbour-fear addressed, no monitoring or NSAID/sick-day advice.',
        pass: 'Explains CKD3a accurately, reassures re dialysis, lays out the protective plan and monitoring, and safety-nets NSAIDs/sick-day rules.',
        exc:  'Responds to the distress first and defuses the "disease" label without minimising; dismantles the neighbour-driven dialysis fear directly; reframes CKD3a as a manageable CVD-risk marker with an empowering protective plan; lifts guilt; and gives honest monitoring, referral-threshold context, NSAID avoidance and sick-day guidance with reassuring follow-up.'
      },
      avoid: [
        { dont:'"Don\u2019t worry about that letter — it\u2019s nothing, just ignore it."', instead:'"It\u2019s mild and stable, but it\u2019s not nothing — it\u2019s a useful nudge to protect your kidneys and heart, and I\u2019ll show you how. The scary word is out of proportion to the reality."', why:'Bluntly minimising loses the chance to engage her in genuinely useful protective management.' },
        { dont:'"We\u2019ll keep an eye on it in case it gets worse and you need dialysis one day."', instead:'"The vast majority at your stage never need dialysis — they live a normal lifespan with it. Your neighbour had end-stage failure; you have a mild, stable reduction. They\u2019re different things."', why:'Mentioning dialysis as a watch-point confirms her catastrophic fear instead of dismantling it.' },
        { dont:'"You\u2019ll need to be more careful with your diabetes — this is a warning sign."', instead:'"This isn\u2019t a punishment or your fault — kidneys slow with age and blood pressure. Let\u2019s focus on the things that protect them, which genuinely work."', why:'A guilt-laden framing deepens self-blame and distress rather than empowering her.' }
      ]
    },

    'hyponatraemia-diuretic': {
      ceg: ['Older adults', 'Prescribing & pharmacology'],
      stem: {
        name: 'Glenys Tovey', age: '77 years · female',
        pmh: ['SODIUM 121 (low) on bloods', 'Started bendroflumethiazide ~3 weeks ago; long-standing citalopram; omeprazole', 'New confusion, unsteadiness, a near-fall'],
        meds: ['Bendroflumethiazide (new)', 'Citalopram', 'Omeprazole'],
        allergy: 'NKDA',
        recent: '⚠ Daughter worried (confused, unsteady, near-fall). Minimises as "getting old"; drinks lots of squash "to stay hydrated".',
        reason: 'Telephone — low sodium result with mild symptoms.'
      },
      timeMap: [
        { t:'0–2',  h:'Refuse "just age"',   d:'Sodium 121 + new confusion/unsteadiness/near-fall = symptomatic hyponatraemia, treatable and urgent — not ageing. Daughter\u2019s concern is the signal.' },
        { t:'2–4',  h:'Find the drivers',     d:'Thiazide started 3 weeks ago (classic culprit) + citalopram (SIADH) + lots of squash diluting it. Not her fault.' },
        { t:'4–6',  h:'The fix',              d:'Stop the thiazide; ease right back on squash (drink to thirst); review citalopram.' },
        { t:'6–9',  h:'Urgent assessment',    d:'Symptomatic at 121 → assess today + repeat sodium; controlled correction (avoid over-rapid). Assessment-unit likely.' },
        { t:'9–12', h:'Fear + safety-net',    d:'Reframe: fixing the salt keeps her independent and safer. Worsening confusion/drowsiness/seizure/vomiting → 999. Falls review; follow-up.' }
      ],
      wordPics: {
        fail: 'Writes off the confusion/unsteadiness/near-fall as ageing; misses that the new thiazide + SSRI + squash caused symptomatic hyponatraemia; defers a sodium of 121; no stop-the-thiazide, no urgent assessment, no falls review.',
        pass: 'Recognises symptomatic hyponatraemia, stops the thiazide, reviews the SSRI, cuts the fluid, and arranges urgent assessment with a safety-net.',
        exc:  'Refuses "just my age" and treats the daughter\u2019s concern as reliable; finds the stacked thiazide/SSRI/squash drivers and stops/normalises them; arranges urgent assessment + repeat sodium with controlled-correction awareness; reframes the fix as the route to staying independent; and plans a falls review with clear emergency safety-netting.'
      },
      avoid: [
        { dont:'"A bit of muddle and unsteadiness is normal at 77 — let\u2019s recheck in a few weeks."', instead:'"New confusion and a near-fall aren\u2019t just age — your salt is low and that causes exactly this. It\u2019s treatable, but it needs sorting today, not in a few weeks."', why:'Attributing symptomatic hyponatraemia to ageing misses a dangerous, reversible cause of falls and confusion.' },
        { dont:'"Keep drinking plenty of fluids to flush it through."', instead:'"Actually, ease right back on the squash — drinking lots of watery drinks dilutes the salt further. Just drink to your thirst for now."', why:'Advising more fluid worsens dilutional hyponatraemia; the over-drinking is part of the cause.' },
        { dont:'"Carry on with your water tablet and we\u2019ll see how the next blood test looks."', instead:'"Please stop the water tablet now — it\u2019s the most likely cause, especially started three weeks ago — and we\u2019ll get you checked today."', why:'Continuing the thiazide (the classic culprit) keeps driving the sodium down.' }
      ]
    },

    'nonvisible-haematuria': {
      ceg: ['Long-term conditions & cancer', 'Investigations & results'],
      stem: {
        name: 'Alec Brennan', age: '67 years · male',
        pmh: ['Non-visible (microscopic) haematuria on dip, confirmed; no proteinuria', 'Ex-smoker 35 pack-years; worked in rubber/dye industry', 'Mild LUTS; eGFR normal, BP fine'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Dismissive ("if I can\u2019t see it, it\u2019s nothing"); recently bereaved widower; dreads a cystoscopy.',
        reason: 'Video consultation — incidental non-visible haematuria.'
      },
      timeMap: [
        { t:'0–2',  h:'Correct the misconception', d:'Invisible blood can be the only sign of a bladder/kidney problem. "Can\u2019t see it" ≠ benign — don\u2019t leave it.' },
        { t:'2–4',  h:'Name the risk factors', d:'67 + 35 pack-years + rubber/dye (aromatic amines) = real bladder-cancer risk. He\u2019s someone we check, not watch.' },
        { t:'4–6',  h:'Plan / 2WW',           d:'Clarify dysuria + check WCC: 60+ non-visible haematuria + dysuria OR raised WCC → bladder/renal 2WW. Check eGFR/ACR/BP to triage. Tag NG12.' },
        { t:'6–9',  h:'Address cystoscopy fear', d:'Honest: quick flexible scope, numbing gel, minutes — dread exceeds reality; the point is early detection.' },
        { t:'9–12', h:'Bereavement + net',     d:'Support the grief and "facing bad news alone" fear; frame tests as self-care. Visible blood/pain/fever → sooner. Confirm booking; follow up.' }
      ],
      wordPics: {
        fail: 'Accepts "if I can\u2019t see it, it\u2019s nothing" and agrees to "leave it and recheck"; misses the age/smoking/dye risk and the NG12 thresholds; never addresses the cystoscopy dread or the bereavement — a potentially important finding deferred.',
        pass: 'Corrects the misconception, applies the NG12 thresholds and risk factors, arranges urology/renal work-up, and addresses the cystoscopy fear.',
        exc:  'Corrects the "invisible = benign" misconception kindly and weights the stacked risk factors; clarifies dysuria/WCC to apply the precise NG12 2WW threshold and triages with eGFR/ACR/BP; addresses the cystoscopy fear honestly; surfaces and supports the bereavement and the fear of facing bad news alone; and secures engagement with a clear safety-net.'
      },
      avoid: [
        { dont:'"If you can\u2019t see any blood, it\u2019s probably nothing — we\u2019ll recheck in a few months."', instead:'"Blood you can\u2019t see can still be the first sign of a bladder or kidney problem — invisible doesn\u2019t mean harmless, so we check it properly rather than wait."', why:'Accepting "can\u2019t see it = nothing" risks missing a urological cancer for which microscopic haematuria is the only clue.' },
        { dont:'"Your smoking and old job aren\u2019t really relevant to a bit of blood on a dip."', instead:'"Actually your age, the years of smoking, and the rubber/dye work all raise the chance of a bladder cause — which is exactly why I want you checked."', why:'Dismissing the risk factors discards the very features that mandate investigation.' },
        { dont:'"You\u2019ll need a camera test, but try not to think about that part."', instead:'"I suspect the camera test is the bit you dread — it\u2019s a quick, flexible scope with numbing gel, over in minutes, and far easier than people fear. The point is catching anything early."', why:'Naming-then-dismissing the cystoscopy fear leaves the main barrier to engagement unaddressed.' }
      ]
    }
  });

})();
