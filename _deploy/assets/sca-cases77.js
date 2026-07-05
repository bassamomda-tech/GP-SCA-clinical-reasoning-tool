/* ============================================================
   Reasoning GP — Case Library batch 77 (SCA revision notes):
   Achilles tendinopathy; meniscal injury; costochondritis;
   hypermobility / Ehlers-Danlos. No NG12 cancer. After 76.
   ============================================================ */
(function(){

  /* ===== 277. Achilles tendinopathy ===== */
  const c277 = {
    id:'achilles-tendinopathy', title:'"The back of my heel/ankle has been stiff and painful for weeks, worst when I start running \u2014 and there\u2019s a tender lump on the tendon"', type:'video', duration:12,
    meta:{ age:44, sex:'M', setting:'Face-to-face \u2014 posterior heel/ankle pain.', system:'MSK \u2014 Achilles tendinopathy: recognition, the rupture caveat & loading rehab' },
    brief:'Mr Tom Easton, 44 (recreational runner, recent training increase), has weeks of posterior ANKLE/heel pain and stiffness, worst on starting activity/in the morning, with localised tenderness and thickening ~2\u20136 cm above the insertion \u2014 ACHILLES TENDINOPATHY (overuse, mid-portion or insertional). Recognise it clinically (gradual onset, load-related pain, morning stiffness, tender thickened tendon), and crucially distinguish ACUTE ACHILLES RUPTURE (sudden "kick/pop", weakness, unable to push off/tip-toe, positive SIMMONDS/Thompson calf-squeeze test, palpable gap \u2014 a must-not-miss needing urgent orthopaedic referral); consider gout, referred pain, bursitis. MANAGE tendinopathy conservatively \u2014 it is largely self-limiting but slow: relative rest/load modification, analgesia, a structured progressive LOADING (eccentric/heavy-slow) exercise programme via physiotherapy (the cornerstone), footwear/heel raise, and address risk factors (training load, fluoroquinolone antibiotics \u2014 which can cause tendinopathy/rupture, steroids); AVOID corticosteroid injection into the Achilles (rupture risk). Set realistic (months) expectations; refer if refractory or rupture suspected. No NG12 cancer link.',
    script:{
      opening:'"The back of my ankle\u2019s been sore and stiff for a few weeks \u2014 worst first thing and when I start a run, then it eases a bit. There\u2019s a tender, slightly swollen lump on the tendon. I\u2019ve upped my running lately. What is it, and can I keep running?"',
      facts:[
        { topic:'Recognise Achilles tendinopathy', text:'ACHILLES TENDINOPATHY is an overuse condition: gradual-onset posterior ankle/heel pain and stiffness, worst on STARTING activity and in the MORNING, easing then returning, with localised TENDERNESS and THICKENING (mid-portion ~2\u20136 cm above insertion, or insertional). Provoked by training-load increases, poor footwear, calf tightness. His picture fits.' },
        { topic:'Exclude rupture \u2014 the must-not-miss', text:'CRITICAL \u2014 distinguish ACUTE ACHILLES RUPTURE: sudden "kicked/popped" sensation, often a snap, weakness, inability to push off/stand on tip-toes, a palpable GAP, and a positive SIMMONDS/Thompson test (squeezing the calf produces no plantarflexion). A suspected rupture needs URGENT orthopaedic referral \u2014 it is easily missed (some can still weakly plantarflex). His gradual onset fits tendinopathy, not rupture, but exclude it.' },
        { topic:'Differential & risk factors', text:'Consider gout, retrocalcaneal bursitis, referred/posterior ankle pathology. Identify RISK factors: training-load spikes, FLUOROQUINOLONE antibiotics (ciprofloxacin \u2014 tendinopathy/rupture risk), corticosteroids, and inflammatory arthropathy. Stop/avoid fluoroquinolones if implicated.' },
        { topic:'Loading rehabilitation \u2014 the cornerstone', text:'MANAGE conservatively: relative REST/load modification (reduce running volume rather than stop entirely), analgesia, and the cornerstone \u2014 a structured progressive LOADING programme (eccentric/heavy-slow resistance) via PHYSIOTHERAPY, plus calf stretching, footwear/heel raise. This is evidence-based and effective, though SLOW (often months).' },
        { topic:'Avoid steroid injection; refer if needed', text:'AVOID corticosteroid INJECTION into the Achilles tendon (risk of rupture). Refer to physiotherapy (and orthopaedics/sports medicine if refractory, or urgently if rupture suspected). Set realistic expectations about the slow recovery.' },
        { topic:'The agenda', text:'He wants to know what it is and whether he can run. Recognise tendinopathy, exclude rupture, address load/fluoroquinolone risk factors, start loading rehab/physio (modify rather than stop running), avoid steroid injection, set a realistic timeline, and safety-net. No NG12 cancer pathway applies.' },
      ],
      ice:{ ideas:'A running-related tendon problem; wants to keep running.', concerns:'The pain/stiffness and lump; whether it\u2019s serious; can he keep running.', expectations:'A diagnosis and to stay active. What he needs: recognition of tendinopathy, rupture excluded, loading rehab/physio with load modification, risk-factor review, no steroid injection, realistic timeline.' },
      cues:['Gradual posterior ankle pain/stiffness, worst on starting activity/morning, tender thickened tendon, training increase \u2014 Achilles tendinopathy.','Exclude ACUTE RUPTURE (sudden pop, can\u2019t tip-toe, calf-squeeze/Simmonds test, palpable gap) \u2192 urgent orthopaedics.','Cornerstone is progressive LOADING (eccentric) rehab/physio; AVOID steroid injection (rupture); check fluoroquinolone risk; slow (months).']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises ACHILLES TENDINOPATHY (gradual load-related posterior ankle pain, morning/start-of-activity stiffness, tender thickened tendon, training-load increase)' },
      { dom:'tasks', text:'EXCLUDES acute ACHILLES RUPTURE (sudden pop, weakness, inability to tip-toe, palpable gap, positive Simmonds/Thompson test) \u2014 a must-not-miss needing urgent orthopaedic referral' },
      { dom:'tasks', text:'Considers the differential (gout, bursitis, referred pain) and reviews RISK factors \u2014 training load, fluoroquinolone antibiotics (tendinopathy/rupture), steroids' },
      { dom:'tasks', text:'Manages conservatively with the cornerstone progressive LOADING (eccentric/heavy-slow) programme via physiotherapy, load modification (modify rather than stop), analgesia, footwear/heel raise' },
      { dom:'tasks', text:'AVOIDS corticosteroid injection into the Achilles (rupture risk) and refers (physio/orthopaedics-sports medicine if refractory; urgently if rupture suspected), setting realistic (months) expectations' },
      { dom:'rto',   text:'Addresses his wish to keep running, explains the diagnosis/timeline, and checks understanding of the rehab plan' },
      { dom:'rto', text:'Shares the decision about training load openly, agreeing what he will modify and a realistic timescale, so he feels in control rather than banned from running' },
      { dom:'gs',    text:'Safety-nets and follows up: review if not improving/refractory, urgent assessment if rupture features develop, and risk-factor modification \u2014 loading rehab, not steroid injection' },
    ],
    worked:[
      { lbl:'Name it', txt:'"This is Achilles tendinopathy \u2014 an overuse strain of the tendon, set off by upping your running. The stiffness worst first thing and at the start of a run, with that tender thickened spot, is classic."' },
      { lbl:'Check it\u2019s not a rupture', txt:'"Let me make sure it isn\u2019t a tear \u2014 did it ever suddenly pop, and can you push off and stand on tip-toes? \u2026 Yes. And the calf-squeeze test is normal. Good \u2014 a sudden rupture is the thing we never miss."' },
      { lbl:'Risk factors', txt:'"Quick check \u2014 have you had a quinolone antibiotic like ciprofloxacin recently? They can affect tendons. And we\u2019ll look at your training load, which is the main driver here."' },
      { lbl:'Loading rehab', txt:'"The treatment that genuinely works is a progressive strengthening programme \u2014 specific calf/tendon loading exercises \u2014 with physiotherapy. You don\u2019t have to stop running completely; we modify the load rather than rest entirely."' },
      { lbl:'No injection', txt:'"One thing I won\u2019t do is inject steroid into the tendon \u2014 that raises the risk of it rupturing. The exercises are the way."' },
      { lbl:'Timeline + safety-net', txt:'"Be patient \u2014 it can take a few months. Come back if it\u2019s not improving, and urgently if you ever feel a sudden pop and can\u2019t push off \u2014 that would need same-day assessment."' },
    ],
    learning:'ACHILLES TENDINOPATHY is an overuse condition presenting with gradual-onset posterior ankle/heel pain and stiffness, worst on STARTING activity and in the MORNING, with localised tenderness and THICKENING of the tendon (mid-portion ~2\u20136 cm above the insertion, or insertional), typically provoked by training-load increases, poor footwear and calf tightness. The must-not-miss is ACUTE ACHILLES RUPTURE \u2014 a sudden "kicked/popped" sensation, weakness, inability to push off/stand on tip-toes, a palpable gap and a positive SIMMONDS/Thompson calf-squeeze test (no plantarflexion on squeezing the calf) \u2014 which is easily missed (some patients still weakly plantarflex) and needs urgent orthopaedic referral. Consider gout, retrocalcaneal bursitis and referred pain, and review risk factors including training-load spikes, FLUOROQUINOLONE antibiotics (ciprofloxacin \u2014 tendinopathy/rupture risk), corticosteroids and inflammatory arthropathy, stopping/avoiding fluoroquinolones if implicated. Manage conservatively: relative rest/load modification (reduce running volume rather than stop entirely), analgesia, and the cornerstone \u2014 a structured progressive LOADING programme (eccentric/heavy-slow resistance) via physiotherapy with calf stretching and footwear/heel raise \u2014 which is evidence-based and effective but slow (often months). AVOID corticosteroid injection into the Achilles tendon (rupture risk), refer to physiotherapy (and orthopaedics/sports medicine if refractory, urgently if rupture suspected), and set realistic expectations. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Achilles tendinopathy \u00b7 exclude rupture (Simmonds/Thompson) \u00b7 progressive loading (eccentric) rehab \u00b7 avoid steroid injection \u00b7 fluoroquinolone risk',
      points:[
        { h:'Recognise', t:'Gradual load-related posterior ankle pain, morning/start-of-activity stiffness, tender thickened tendon; training-load increase.' },
        { h:'Exclude rupture', t:'Sudden pop, weakness, can\u2019t tip-toe, palpable gap, positive Simmonds/Thompson (no plantarflexion on calf squeeze) \u2192 urgent orthopaedics. Easily missed.' },
        { h:'Differential/risk', t:'Gout, bursitis, referred pain; risk factors: training load, fluoroquinolones (ciprofloxacin), corticosteroids, inflammatory arthropathy.' },
        { h:'Loading rehab', t:'Progressive loading (eccentric/heavy-slow) via physiotherapy + load modification, analgesia, footwear/heel raise. Cornerstone; slow (months).' },
        { h:'Avoid injection', t:'Do not inject corticosteroid into the Achilles (rupture risk).' },
        { h:'Refer', t:'Physiotherapy; orthopaedics/sports medicine if refractory; urgent if rupture suspected.' },
        { h:'Never do', t:'Never miss an acute rupture; never inject steroid into the Achilles; never ignore fluoroquinolone/training-load risk; never promise quick recovery.' },
        { h:'Safety-net & follow-up', t:'Review if not improving; urgent assessment for rupture features; modify risk factors.' }
      ]
    }
  };

  /* ===== 278. Meniscal injury ===== */
  const c278 = {
    id:'meniscal-injury', title:'"I twisted my knee playing football \u2014 it swelled up, it clicks and catches, and sometimes it locks so I can\u2019t straighten it"', type:'video', duration:12,
    meta:{ age:27, sex:'M', setting:'Face-to-face \u2014 a twisting knee injury.', system:'MSK \u2014 meniscal injury: mechanical symptoms, the locked knee & Ottawa rules' },
    brief:'Mr Jay Okonkwo, 27, twisted his knee on a planted foot playing football, with delayed-onset SWELLING (effusion), and now MECHANICAL symptoms \u2014 CLICKING, CATCHING, giving way and LOCKING (cannot fully straighten) \u2014 with joint-line tenderness, suggesting a MENISCAL TEAR. Recognise the meniscal pattern (twisting injury, effusion developing over hours, joint-line tenderness, mechanical symptoms, positive McMurray); apply the OTTAWA KNEE RULES to decide on X-ray (exclude fracture: age \u226555, isolated patellar tenderness, inability to flex 90\u00b0, inability to weight-bear 4 steps, fibular-head tenderness); recognise the TRUE LOCKED KNEE (a bucket-handle meniscal tear blocking full extension) and acute ACL injury (immediate haemarthrosis, pop, instability) as needing more urgent orthopaedic assessment; MANAGE most meniscal injuries initially conservatively (RICE/analgesia, physiotherapy/quadriceps rehab, activity modification) with MRI and orthopaedic referral for a true locked knee, persistent mechanical symptoms or failure of conservative management (arthroscopy in selected cases). Safety-net for locking/instability/inability to weight-bear. No NG12 cancer link.',
    script:{
      opening:'"I twisted my knee playing football a few days ago \u2014 my foot was planted and I turned. It swelled up that evening, and now it clicks and catches, gives way, and a couple of times it\u2019s locked so I literally couldn\u2019t straighten it. What\u2019s going on \u2014 do I need a scan?"',
      facts:[
        { topic:'Recognise the meniscal pattern', text:'MENISCAL TEAR is suggested by a TWISTING injury on a loaded/planted knee, EFFUSION developing over hours (not immediate), JOINT-LINE tenderness, and MECHANICAL symptoms \u2014 clicking, catching, giving way and LOCKING \u2014 with a positive McMurray test. His history fits a meniscal injury.' },
        { topic:'Ottawa knee rules \u2014 exclude fracture', text:'Apply the OTTAWA KNEE RULES to decide on X-ray (to exclude fracture): X-ray if any of \u2014 age \u226555, isolated PATELLAR tenderness, tenderness at the FIBULAR HEAD, inability to FLEX to 90\u00b0, or inability to WEIGHT-BEAR for 4 steps (both immediately and in the clinic). This rationalises imaging.' },
        { topic:'The true locked knee & ACL', text:'CRITICAL \u2014 a TRUE LOCKED KNEE (unable to fully EXTEND, often a displaced bucket-handle meniscal tear blocking the joint) needs more urgent orthopaedic assessment. Also recognise acute ACL injury \u2014 immediate haemarthrosis (rapid swelling), an audible "pop", and instability/giving way \u2014 which also warrants orthopaedic/MRI assessment. Distinguish a genuinely locked knee from pseudo-locking (pain-limited).' },
        { topic:'Conservative management', text:'MANAGE most meniscal injuries INITIALLY conservatively: RICE, analgesia, and PHYSIOTHERAPY (quadriceps strengthening, range of motion) with activity modification \u2014 many degenerate/small tears settle. Quadriceps rehab is important.' },
        { topic:'MRI & referral', text:'Arrange MRI and ORTHOPAEDIC referral for: a true locked knee (urgent), persistent significant mechanical symptoms, suspected ACL/significant ligament injury, or failure of conservative management \u2014 with arthroscopy (repair/trim) in selected cases. Image and refer by the clinical picture, not reflexively.' },
        { topic:'The agenda', text:'He wants a diagnosis and to know if he needs a scan. Recognise the meniscal pattern, apply Ottawa rules, identify true locking/ACL features needing urgent referral, start conservative management/physio, arrange MRI/orthopaedics for locking/persistent symptoms, and safety-net. No NG12 cancer pathway applies.' },
      ],
      ice:{ ideas:'A football knee injury \u2014 maybe cartilage; wants a scan.', concerns:'The swelling, locking and giving way; whether he needs surgery/a scan.', expectations:'A diagnosis and a scan. What he needs: recognition of meniscal injury, Ottawa-rule-guided X-ray, identification of true locking/ACL needing urgent referral, conservative management/physio, and MRI/orthopaedics where indicated.' },
      cues:['Twisting injury + delayed effusion + joint-line tenderness + clicking/catching/locking \u2014 meniscal tear.','Apply Ottawa knee rules for X-ray (age \u226555, patellar/fibular-head tenderness, can\u2019t flex 90\u00b0, can\u2019t weight-bear 4 steps).','True locked knee (can\u2019t fully extend \u2014 bucket-handle) or ACL (immediate haemarthrosis/pop/instability) \u2192 urgent orthopaedics/MRI; else conservative + physio.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the MENISCAL pattern (twisting injury, effusion over hours, joint-line tenderness, mechanical symptoms \u2014 clicking/catching/giving way/locking, positive McMurray)' },
      { dom:'tasks', text:'Applies the OTTAWA KNEE RULES to decide on X-ray (age \u226555, isolated patellar/fibular-head tenderness, inability to flex 90\u00b0, inability to weight-bear 4 steps) to exclude fracture' },
      { dom:'tasks', text:'Recognises the TRUE LOCKED KNEE (cannot fully extend \u2014 bucket-handle tear) and acute ACL injury (immediate haemarthrosis, pop, instability) as needing more urgent orthopaedic/MRI assessment' },
      { dom:'tasks', text:'Manages most meniscal injuries initially conservatively (RICE, analgesia, physiotherapy/quadriceps rehab, activity modification)' },
      { dom:'tasks', text:'Arranges MRI and ORTHOPAEDIC referral for a true locked knee (urgent), persistent mechanical symptoms, suspected ACL/ligament injury, or failed conservative management \u2014 not imaging reflexively' },
      { dom:'rto',   text:'Explains the diagnosis and imaging/referral reasoning, addresses his concern about a scan, and checks understanding' },
      { dom:'rto', text:'Acknowledges the impact on his sport and his wish to get back to football, and agrees a shared rehab plan and the point at which they would escalate to imaging' },
      { dom:'gs',    text:'Safety-nets and follows up: urgent review for a locked knee/inability to weight-bear/instability, conservative plan with physio, and MRI/orthopaedics where indicated' },
    ],
    worked:[
      { lbl:'Name the pattern', txt:'"A twisting injury with the knee swelling up over a few hours, then clicking, catching and locking, points to a cartilage (meniscus) tear. The locking \u2014 not being able to straighten it \u2014 is an important feature."' },
      { lbl:'Decide on X-ray', txt:'"Let me check a few things that tell me whether you need an X-ray to rule out a fracture \u2014 can you bend it to 90 degrees, walk four steps, any tenderness on the kneecap or the side of the knee? \u2026 That guides imaging."' },
      { lbl:'Flag urgent features', txt:'"Did it swell instantly with a pop, and does it give way? Immediate swelling and instability can mean a ligament (ACL) injury, and a knee that truly locks needs the orthopaedic team and a scan more urgently."' },
      { lbl:'Conservative plan', txt:'"For now, if it\u2019s settling: rest, ice, painkillers and \u2014 importantly \u2014 physiotherapy to strengthen the thigh muscles and restore movement. Many tears improve with that."' },
      { lbl:'MRI/referral', txt:'"If it keeps locking, the mechanical symptoms persist, or I suspect a ligament tear, I\u2019ll arrange an MRI and refer to orthopaedics \u2014 some tears need a keyhole operation."' },
      { lbl:'Safety-net', txt:'"Come back urgently if it locks and won\u2019t unlock, you can\u2019t put weight on it, or it keeps giving way. Otherwise let\u2019s start physio and review."' },
    ],
    learning:'A MENISCAL TEAR is suggested by a TWISTING injury on a planted/loaded knee, an EFFUSION developing over hours (rather than immediately), JOINT-LINE tenderness, and MECHANICAL symptoms \u2014 clicking, catching, giving way and LOCKING \u2014 with a positive McMurray test. Apply the OTTAWA KNEE RULES to decide on X-ray (to exclude fracture): image if age \u226555, isolated patellar tenderness, fibular-head tenderness, inability to flex to 90\u00b0, or inability to weight-bear for 4 steps (immediately and in clinic). Recognise the more urgent presentations: a TRUE LOCKED KNEE (unable to fully extend, often a displaced bucket-handle meniscal tear blocking the joint) needs urgent orthopaedic assessment, and an acute ACL injury \u2014 immediate haemarthrosis (rapid swelling), an audible "pop" and instability/giving way \u2014 warrants orthopaedic/MRI assessment; distinguish a genuinely locked knee from pain-limited pseudo-locking. Manage most meniscal injuries initially conservatively (RICE, analgesia, physiotherapy with quadriceps strengthening and range of motion, activity modification), as many small/degenerate tears settle, and arrange MRI and orthopaedic referral for a true locked knee (urgent), persistent significant mechanical symptoms, suspected ACL/ligament injury, or failure of conservative management \u2014 with arthroscopy in selected cases. Safety-net for locking that won\u2019t unlock, inability to weight-bear, or instability. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Meniscal injury \u00b7 mechanical symptoms & joint-line tenderness \u00b7 Ottawa knee rules \u00b7 true locked knee/ACL \u2192 urgent \u00b7 conservative + physio; MRI/orthopaedics if indicated',
      points:[
        { h:'Recognise', t:'Twisting injury, effusion over hours, joint-line tenderness, mechanical symptoms (clicking/catching/giving way/locking), positive McMurray.' },
        { h:'Ottawa knee rules', t:'X-ray if age \u226555, isolated patellar tenderness, fibular-head tenderness, can\u2019t flex 90\u00b0, or can\u2019t weight-bear 4 steps. Rationalises imaging.' },
        { h:'Urgent features', t:'True locked knee (can\u2019t fully extend \u2014 bucket-handle) \u2192 urgent orthopaedics; ACL (immediate haemarthrosis/pop/instability) \u2192 orthopaedic/MRI. Distinguish from pseudo-locking.' },
        { h:'Conservative care', t:'RICE, analgesia, physiotherapy (quadriceps strengthening, ROM), activity modification \u2014 many tears settle.' },
        { h:'MRI/referral', t:'True locked knee (urgent), persistent mechanical symptoms, suspected ACL/ligament injury, or failed conservative management \u2192 MRI + orthopaedics; arthroscopy in selected cases.' },
        { h:'Don\u2019t image reflexively', t:'Use Ottawa rules and the clinical picture to guide X-ray/MRI rather than scanning everyone.' },
        { h:'Never do', t:'Never miss a true locked knee or ACL injury; never image reflexively; never ignore inability to weight-bear/instability.' },
        { h:'Safety-net & follow-up', t:'Urgent review for locked knee/can\u2019t weight-bear/instability; physio; MRI/orthopaedics where indicated.' }
      ]
    }
  };

  /* ===== 279. Costochondritis ===== */
  const c279 = {
    id:'costochondritis', title:'"I\u2019ve got chest pain \u2014 I\u2019m terrified it\u2019s my heart \u2014 but it\u2019s sharp, worse when I press on it or breathe deeply"', type:'video', duration:12,
    meta:{ age:32, sex:'F', setting:'Face-to-face \u2014 chest pain, anxious about the heart.', system:'MSK / Cardiology \u2014 costochondritis: a positive diagnosis after excluding the serious' },
    brief:'Ms Priya Nair, 32, has a few days of sharp, LOCALISED anterior chest-wall pain, REPRODUCIBLE on palpation of the costochondral junctions and worse on deep breathing/movement, with no cardiac/respiratory red flags \u2014 COSTOCHONDRITIS (musculoskeletal chest-wall pain). The task: take chest pain seriously and EXCLUDE the serious causes first (cardiac \u2014 ACS/angina: exertional, central, radiating, sweating, risk factors; PE \u2014 pleuritic, breathless, calf, risk factors; pneumothorax; pneumonia; GORD; aortic), assess and examine, then make a POSITIVE diagnosis of costochondritis (a diagnosis supported by REPRODUCIBLE, localised, palpable tenderness over the costochondral junctions \u2014 though reproducible tenderness alone never fully excludes cardiac disease, so red flags must be absent); manage with reassurance, EXPLANATION, analgesia/NSAIDs, and self-care; and \u2014 crucially \u2014 address the HEALTH ANXIETY/cardiac fear with genuine, grounded reassurance (it lands because the serious has been considered/excluded), not dismissiveness; investigate (ECG \u00b1 troponin) where any doubt; safety-net for red flags. The skill is excluding the serious, a positive MSK diagnosis, and proportionate reassurance for the anxious patient. No NG12 cancer link.',
    script:{
      opening:'"I\u2019ve had this chest pain for a few days and I\u2019m really scared it\u2019s my heart \u2014 I keep googling heart attacks. But it\u2019s a sharp pain on the left, and honestly it hurts more when I press on it or take a deep breath. I\u2019m 32 \u2014 could it still be serious?"',
      facts:[
        { topic:'Take it seriously \u2014 exclude the serious first', text:'CORE \u2014 take chest pain seriously and EXCLUDE serious causes before reassuring: CARDIAC (ACS/angina \u2014 central/heavy/exertional pain, radiation to arm/jaw, sweating, breathlessness, risk factors), PE (pleuritic, breathless, calf swelling, risk factors), PNEUMOTHORAX (sudden, breathless), PNEUMONIA (fever, cough), GORD, and aortic causes. Assess history, risk factors and examine; do an ECG (\u00b1 troponin) where any doubt.' },
        { topic:'Make a positive diagnosis', text:'COSTOCHONDRITIS is musculoskeletal chest-wall pain: sharp, LOCALISED anterior pain, worse on movement/deep breathing/palpation, and crucially REPRODUCIBLE on PALPATION of the costochondral junctions. This supports a positive MSK diagnosis \u2014 but note reproducible tenderness alone does NOT fully exclude cardiac disease, so the absence of red flags and an appropriate assessment matter.' },
        { topic:'Manage costochondritis', text:'MANAGE with reassurance and clear EXPLANATION, analgesia/NSAIDs (topical or oral), heat, activity modification and reassurance that it is self-limiting \u2014 most settle over weeks. Avoid over-investigation once the serious is excluded.' },
        { topic:'Address the health anxiety', text:'CORE COMMUNICATION \u2014 her dominant emotion is FEAR of a heart attack, fuelled by googling. Address it with GENUINE, grounded reassurance \u2014 which lands precisely because you have taken it seriously and considered/excluded the serious causes \u2014 not a dismissive "it\u2019s nothing". Explore and, if recurrent, address health anxiety supportively.' },
        { topic:'Investigate where any doubt; safety-net', text:'Where there is ANY doubt or atypical/risk features, investigate (ECG, troponin, CXR/D-dimer as indicated) rather than falsely reassure. Safety-net clearly: seek urgent help (999) for central/crushing/exertional pain, breathlessness, radiation, sweating, collapse, or pain unlike this.' },
        { topic:'The agenda', text:'She wants reassurance it isn\u2019t her heart. Take it seriously, exclude the serious (history/exam/ECG as needed), make a positive costochondritis diagnosis, reassure on grounded basis, manage with analgesia, address health anxiety, and safety-net. No NG12 cancer pathway applies.' },
      ],
      ice:{ ideas:'Fears it\u2019s a heart attack (google-fuelled), despite being young.', concerns:'Cardiac fear/health anxiety; the chest pain.', expectations:'Reassurance it\u2019s not the heart. What she needs: the serious excluded (history/exam/ECG if doubt), a positive costochondritis diagnosis, grounded reassurance, analgesia, and red-flag safety-netting.' },
      cues:['Sharp, localised anterior chest pain, REPRODUCIBLE on palpation/worse on breathing, no cardiac/resp red flags \u2014 costochondritis.','Exclude serious causes first (cardiac/PE/pneumothorax/pneumonia/GORD); ECG \u00b1 troponin where any doubt \u2014 reproducible tenderness alone doesn\u2019t fully exclude cardiac.','Address the cardiac fear/health anxiety with grounded reassurance (lands because the serious was excluded); analgesia; red-flag safety-net.']
    },
    checkpoints:[
      { dom:'tasks', text:'Takes chest pain SERIOUSLY and EXCLUDES serious causes first \u2014 cardiac (ACS/angina), PE, pneumothorax, pneumonia, GORD, aortic \u2014 via history, risk factors and examination, with ECG (\u00b1 troponin) where any doubt' },
      { dom:'tasks', text:'Makes a POSITIVE diagnosis of COSTOCHONDRITIS (localised anterior pain reproducible on palpation of the costochondral junctions, worse on movement/breathing) \u2014 while recognising reproducible tenderness alone does not fully exclude cardiac disease' },
      { dom:'tasks', text:'Manages with reassurance, explanation, analgesia/NSAIDs and self-care, avoiding over-investigation once the serious is excluded' },
      { dom:'rto',   text:'Addresses the cardiac FEAR/health anxiety with GENUINE, grounded reassurance (landing because the serious was taken seriously/excluded) \u2014 not dismissiveness' },
      { dom:'tasks', text:'Investigates where there is any doubt/atypical or risk features (ECG, troponin, CXR/D-dimer) rather than falsely reassuring' },
      { dom:'rto',   text:'Explores and supportively addresses recurrent health anxiety, and checks understanding' },
      { dom:'rto', text:'Checks what she understands and believes about her heart, corrects misconceptions in plain language, and agrees a clear plan including when to seek help so she leaves reassured rather than dismissed' },
      { dom:'gs',    text:'Safety-nets clearly: red flags warranting urgent/999 care (central/crushing/exertional pain, breathlessness, radiation, sweating, collapse, pain unlike this), and review \u2014 positive diagnosis after exclusion, not dismissal' },
    ],
    worked:[
      { lbl:'Take it seriously', txt:'"You were right to come \u2014 chest pain always deserves to be taken seriously, even at 32. Let me check the important things first so any reassurance I give you actually means something."' },
      { lbl:'Exclude the serious', txt:'"Is the pain ever brought on by exertion, central or crushing, spreading to your arm or jaw, with sweating or breathlessness? \u2026 No. Any calf swelling or sudden breathlessness? \u2026 No. And let me examine you; I\u2019ll do a heart tracing to be thorough."' },
      { lbl:'Positive diagnosis', txt:'"Now \u2014 the pain is sharp, in one spot, worse when you breathe deeply, and \u2014 here\u2019s the telling bit \u2014 I can reproduce it by pressing on the ribcage. That points to costochondritis: inflammation of the rib-cartilage joints. It\u2019s harmless and settles."' },
      { lbl:'Grounded reassurance', txt:'"So I can reassure you genuinely \u2014 not by brushing it off, but because I\u2019ve checked your heart and the serious causes. This is muscular/joint pain, not your heart."' },
      { lbl:'Manage', txt:'"Anti-inflammatory painkillers, heat, and easing off aggravating movements help; it usually settles over a few weeks."' },
      { lbl:'Safety-net', txt:'"But do seek urgent help \u2014 999 \u2014 if you ever get central, crushing or exertional chest pain, breathlessness, sweating, pain spreading to your arm/jaw, or anything different from this. And if the worry keeps troubling you, come back \u2014 we can help with that too."' },
    ],
    learning:'COSTOCHONDRITIS is musculoskeletal chest-wall pain \u2014 sharp, LOCALISED anterior pain, worse on movement/deep breathing/palpation and REPRODUCIBLE on palpation of the costochondral junctions \u2014 but it should be a POSITIVE diagnosis made after taking chest pain seriously and EXCLUDING the serious causes: cardiac (ACS/angina \u2014 central/heavy/exertional pain, radiation, sweating, breathlessness, risk factors), PE (pleuritic, breathless, calf, risk factors), pneumothorax, pneumonia, GORD and aortic causes, assessing history/risk factors, examining, and doing an ECG (\u00b1 troponin) where any doubt. Crucially, reproducible chest-wall tenderness alone does NOT fully exclude cardiac disease, so the absence of red flags and an appropriate assessment matter, and any doubt or atypical/risk features warrant investigation rather than false reassurance. Manage costochondritis with reassurance and clear explanation, analgesia/NSAIDs (topical or oral), heat and activity modification, reassuring that it is self-limiting over weeks and avoiding over-investigation once the serious is excluded. The communication core is the patient\u2019s cardiac FEAR/health anxiety (often google-fuelled): address it with genuine, grounded reassurance \u2014 which lands precisely because the serious has been taken seriously and excluded \u2014 rather than a dismissive "it\u2019s nothing", exploring and supportively addressing recurrent health anxiety. Safety-net clearly for red flags warranting urgent/999 care (central/crushing/exertional pain, breathlessness, radiation, sweating, collapse, or pain unlike this). No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Costochondritis \u00b7 positive diagnosis after excluding serious chest pain \u00b7 reproducible tenderness (doesn\u2019t fully exclude cardiac) \u00b7 analgesia \u00b7 health-anxiety reassurance',
      points:[
        { h:'Exclude the serious', t:'Take chest pain seriously; exclude cardiac (ACS/angina), PE, pneumothorax, pneumonia, GORD, aortic via history/risk factors/exam; ECG (\u00b1 troponin) where any doubt.' },
        { h:'Positive diagnosis', t:'Localised anterior pain, worse on movement/breathing, reproducible on palpation of costochondral junctions = costochondritis. Reproducible tenderness alone doesn\u2019t fully exclude cardiac.' },
        { h:'Manage', t:'Reassurance/explanation, analgesia/NSAIDs (topical/oral), heat, activity modification; self-limiting over weeks; avoid over-investigation once serious excluded.' },
        { h:'Address anxiety', t:'Grounded reassurance (lands because the serious was excluded), not dismissiveness; explore/support recurrent health anxiety.' },
        { h:'Investigate if doubt', t:'Any doubt/atypical/risk features \u2192 ECG, troponin, CXR/D-dimer rather than false reassurance.' },
        { h:'Never do', t:'Never dismiss chest pain without considering the serious; never falsely reassure with doubt/risk features; never rely on reproducible tenderness alone to exclude cardiac disease.' },
        { h:'Safety-net & follow-up', t:'999 for central/crushing/exertional pain, breathlessness, radiation, sweating, collapse, or pain unlike this; review; address health anxiety.' }
      ]
    }
  };

  /* ===== 280. Hypermobility / Ehlers-Danlos ===== */
  const c280 = {
    id:'hypermobility-eds', title:'"I\u2019m really bendy and my joints keep dislocating and aching, I bruise easily and I\u2019m exhausted \u2014 someone mentioned Ehlers-Danlos"', type:'video', duration:12,
    meta:{ age:24, sex:'F', setting:'Face-to-face \u2014 chronic joint pain in a hypermobile young adult.', system:'Rheumatology \u2014 hypermobility spectrum / hypermobile Ehlers-Danlos: recognition & holistic management' },
    brief:'Ms Niamh Carter, 24, reports lifelong JOINT HYPERMOBILITY with recurrent joint pain, subluxations/dislocations, easy BRUISING, soft/stretchy skin, fatigue, and possibly autonomic symptoms (dizziness/palpitations) and GI symptoms \u2014 a picture of a HYPERMOBILITY SPECTRUM DISORDER / hypermobile EHLERS-DANLOS SYNDROME (hEDS). Recognise generalised joint hypermobility (assess with the BEIGHTON score) and the broader multisystem picture, that it is often under-recognised and patients are frequently dismissed, and the associated features/comorbidities (chronic pain, fatigue, PoTS/autonomic dysfunction, GI dysmotility, anxiety, easy bruising, poor wound healing); be alert to RED FLAGS suggesting RARE serious EDS subtypes (e.g. VASCULAR EDS \u2014 arterial/organ rupture risk, family history of sudden death/arterial events; marfanoid features) needing specialist/genetics referral; MANAGE holistically \u2014 validate, physiotherapy (joint stabilisation, graded strengthening, proprioception, pacing), analgesia/chronic-pain approach, manage associated PoTS/GI/mood, lifestyle, and MDT/specialist (rheumatology/genetics) referral where appropriate. Validate the experience and avoid dismissiveness. No NG12 cancer link.',
    script:{
      opening:'"I\u2019ve always been really bendy \u2014 double-jointed \u2014 but now my joints keep partly dislocating and aching all the time, I bruise at the slightest thing, my skin\u2019s soft and stretchy, and I\u2019m shattered. I get dizzy standing up too. Someone said it could be Ehlers-Danlos. I\u2019ve been fobbed off a lot. What is it?"',
      facts:[
        { topic:'Recognise hypermobility/hEDS', text:'Generalised JOINT HYPERMOBILITY with recurrent pain, subluxations/dislocations, plus skin (soft/stretchy, easy BRUISING, poor healing) and multisystem features suggests a HYPERMOBILITY SPECTRUM DISORDER / hypermobile EHLERS-DANLOS SYNDROME (hEDS). Assess hypermobility with the BEIGHTON score. It is often under-recognised, and patients are frequently dismissed \u2014 take it seriously.' },
        { topic:'The multisystem picture', text:'Recognise associated features/comorbidities: chronic PAIN, FATIGUE, autonomic dysfunction/PoTS (dizziness/palpitations on standing), GI dysmotility, anxiety/depression, easy bruising, and poor wound healing. The condition is multisystem, which is why a holistic approach matters.' },
        { topic:'Red flags for serious EDS subtypes', text:'IMPORTANT \u2014 be alert to RED FLAGS suggesting RARE but SERIOUS EDS subtypes needing specialist/genetics referral: VASCULAR EDS (risk of arterial/bowel/uterine rupture \u2014 thin translucent skin, easy bruising, family history of arterial events/sudden death, organ rupture), marfanoid/aortic features, and other features suggesting a defined heritable connective-tissue disorder. These change risk and management substantially.' },
        { topic:'Holistic management', text:'MANAGE holistically: VALIDATE the experience; PHYSIOTHERAPY is the cornerstone (joint stabilisation, graded strengthening, proprioception, pacing/avoiding deconditioning); a chronic-PAIN approach (analgesia judiciously, avoid escalation to opioids, pacing, psychological support); manage associated PoTS (fluids/salt/compression), GI symptoms and mood; lifestyle and occupational support.' },
        { topic:'Referral', text:'Refer where appropriate \u2014 rheumatology/specialist for diagnosis confirmation and an MDT approach, and clinical GENETICS if a serious subtype (e.g. vascular EDS) is suspected or for family/diagnostic clarification. Avoid the common pitfall of dismissing the patient.' },
        { topic:'The agenda', text:'She has been repeatedly fobbed off and wants recognition and help. Recognise hypermobility/hEDS, assess (Beighton), screen the multisystem features and serious-subtype red flags, manage holistically (physio/pain/PoTS/mood), refer appropriately, and validate \u2014 not dismiss. No NG12 cancer pathway applies.' },
      ],
      ice:{ ideas:'Wonders if it\u2019s Ehlers-Danlos; feels repeatedly dismissed.', concerns:'The pain, dislocations, bruising, fatigue and dizziness; not being believed; what it is.', expectations:'Recognition and help. What she needs: recognition of hypermobility/hEDS (Beighton), multisystem assessment, serious-subtype red-flag screen, holistic management (physio/pain/PoTS/mood), appropriate referral, and validation.' },
      cues:['Lifelong hypermobility + recurrent joint pain/dislocations + soft stretchy skin/easy bruising + fatigue/dizziness \u2014 hypermobility spectrum/hEDS; assess Beighton.','Multisystem: chronic pain, fatigue, PoTS/autonomic, GI, mood \u2014 manage holistically; often under-recognised/dismissed.','Red flags for serious subtypes (vascular EDS \u2014 arterial/organ rupture, family sudden death; marfanoid) \u2192 specialist/genetics referral.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises HYPERMOBILITY SPECTRUM DISORDER / hypermobile EDS (generalised hypermobility, recurrent pain/dislocations, soft stretchy skin/easy bruising) and assesses hypermobility (Beighton score), taking it seriously rather than dismissing' },
      { dom:'tasks', text:'Recognises the MULTISYSTEM picture/comorbidities \u2014 chronic pain, fatigue, PoTS/autonomic dysfunction, GI dysmotility, anxiety/depression, poor healing' },
      { dom:'tasks', text:'Is alert to RED FLAGS for rare serious EDS subtypes (vascular EDS \u2014 arterial/organ rupture, family history of arterial events/sudden death; marfanoid/aortic features) needing specialist/genetics referral' },
      { dom:'tasks', text:'Manages HOLISTICALLY \u2014 physiotherapy (joint stabilisation, graded strengthening, proprioception, pacing), chronic-pain approach (avoid opioid escalation), and management of associated PoTS/GI/mood' },
      { dom:'tasks', text:'Refers appropriately (rheumatology/specialist/MDT; clinical genetics if a serious subtype suspected)' },
      { dom:'rto',   text:'VALIDATES the experience and the sense of being repeatedly dismissed, and checks understanding of the holistic plan' },
      { dom:'rto', text:'Explores how the condition and years of not being believed have affected her daily life and mood, and agrees a realistic, prioritised plan she feels ownership of' },
      { dom:'gs',    text:'Safety-nets and follows up: serious-subtype red flags warranting urgent/specialist review, physiotherapy/pain/PoTS management, referral, and review \u2014 recognition + holistic management, not dismissal' },
    ],
    worked:[
      { lbl:'Validate + recognise', txt:'"I\u2019m sorry you\u2019ve been fobbed off \u2014 what you\u2019re describing is real. Being very flexible with joints that dislocate and ache, soft stretchy skin, easy bruising and fatigue fits a hypermobility condition, possibly hypermobile Ehlers-Danlos. Let me assess your flexibility properly with a scoring system."' },
      { lbl:'Multisystem screen', txt:'"This often affects more than joints \u2014 the dizziness on standing, tummy symptoms, fatigue and mood can all be part of it. So we look at the whole picture, not just one joint."' },
      { lbl:'Red-flag check', txt:'"A couple of safety questions \u2014 any family history of arteries or organs rupturing, or sudden young deaths? Very thin, see-through skin? \u2026 No. Those would point to a rarer, more serious type needing genetics, which doesn\u2019t seem to fit you."' },
      { lbl:'Holistic plan', txt:'"The cornerstone is physiotherapy \u2014 strengthening and stabilising the joints and improving control \u2014 plus pacing to avoid flares. We\u2019ll manage the pain sensibly (avoiding strong opioids), and tackle the dizziness with fluids, salt and compression, and your mood and tummy symptoms too."' },
      { lbl:'Refer', txt:'"I\u2019ll refer you to rheumatology to confirm and coordinate care, and to genetics if anything suggests a serious subtype. You deserve a proper, joined-up approach."' },
      { lbl:'Safety-net', txt:'"Come back if joints dislocate frequently or you can\u2019t manage the pain, and urgently for any severe sudden abdominal/chest pain. We\u2019ll build a plan around you."' },
    ],
    learning:'Generalised JOINT HYPERMOBILITY with recurrent joint pain, subluxations/dislocations, soft/stretchy skin, easy bruising, poor wound healing, fatigue and often autonomic (dizziness/palpitations) and GI symptoms suggests a HYPERMOBILITY SPECTRUM DISORDER / hypermobile EHLERS-DANLOS SYNDROME (hEDS) \u2014 assessed for hypermobility with the BEIGHTON score. It is often under-recognised and patients are frequently dismissed, so take it seriously and recognise the MULTISYSTEM picture and comorbidities (chronic pain, fatigue, PoTS/autonomic dysfunction, GI dysmotility, anxiety/depression, easy bruising, poor healing). Be alert to RED FLAGS suggesting rare but SERIOUS EDS subtypes needing specialist/genetics referral \u2014 in particular VASCULAR EDS (risk of arterial, bowel or uterine rupture; thin translucent skin, easy bruising, a family history of arterial events/sudden death) and marfanoid/aortic features \u2014 which substantially change risk and management. Manage holistically: validate the experience; physiotherapy is the cornerstone (joint stabilisation, graded strengthening, proprioception, pacing to avoid deconditioning); use a chronic-pain approach (judicious analgesia, avoiding escalation to opioids, pacing, psychological support); and manage associated PoTS (fluids/salt/compression), GI symptoms and mood, with lifestyle and occupational support. Refer appropriately \u2014 rheumatology/specialist for diagnosis and MDT care, and clinical genetics if a serious subtype is suspected or for family/diagnostic clarification \u2014 avoiding the common pitfall of dismissing the patient. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Hypermobility spectrum disorder / hypermobile EDS \u00b7 Beighton score \u00b7 multisystem comorbidities \u00b7 vascular-EDS red flags \u00b7 physiotherapy-led holistic management',
      points:[
        { h:'Recognise', t:'Generalised hypermobility + recurrent pain/dislocations + soft stretchy skin/easy bruising + fatigue/dizziness. Assess Beighton score. Often under-recognised/dismissed.' },
        { h:'Multisystem', t:'Chronic pain, fatigue, PoTS/autonomic dysfunction, GI dysmotility, anxiety/depression, poor healing \u2014 manage holistically.' },
        { h:'Serious-subtype red flags', t:'Vascular EDS (arterial/bowel/uterine rupture, thin translucent skin, family history of arterial events/sudden death), marfanoid/aortic features \u2192 specialist/genetics referral.' },
        { h:'Holistic management', t:'Validate; physiotherapy cornerstone (stabilisation, strengthening, proprioception, pacing); chronic-pain approach (avoid opioid escalation); manage PoTS/GI/mood.' },
        { h:'Refer', t:'Rheumatology/specialist/MDT; clinical genetics if a serious subtype suspected or for diagnostic/family clarification.' },
        { h:'Validate', t:'Counter the repeated dismissal; take the multisystem experience seriously.' },
        { h:'Never do', t:'Never dismiss hypermobility-related symptoms; never miss vascular-EDS red flags; never escalate to opioids for chronic pain; never manage joints in isolation from the multisystem picture.' },
        { h:'Safety-net & follow-up', t:'Serious-subtype red flags \u2192 urgent/specialist; physiotherapy/pain/PoTS management; referral; review.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c277, c278, c279, c280);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'achilles-tendinopathy': {
      ceg:['New & undifferentiated presentations','Prescribing & pharmacology'],
      stem:{ name:'Tom Easton', age:'44 years \u00b7 male', pmh:['Weeks of posterior ankle pain/stiffness, worst on starting activity/morning','Tender thickened tendon ~2\u20136 cm above insertion; recent training increase','Can tip-toe; Simmonds negative'], meds:['None'], allergy:'NKDA', recent:'"Back of my heel\u2019s stiff and painful, worst starting a run, with a tender lump on the tendon."', reason:'Face-to-face \u2014 posterior heel/ankle pain.' },
      timeMap:[
        { t:'0\u20102', h:'Recognise', d:'Gradual load-related posterior pain + tender thickened tendon + training increase = tendinopathy.' },
        { t:'2\u20104', h:'Exclude rupture', d:'Sudden pop, can\u2019t tip-toe, gap, Simmonds/Thompson \u2192 urgent orthopaedics.' },
        { t:'4\u20107', h:'Risk + loading rehab', d:'Fluoroquinolone/training-load review; progressive loading (eccentric) physio + load modification.' },
        { t:'7\u20109', h:'No injection', d:'Avoid steroid injection (rupture); refer physio/orthopaedics if refractory.' },
        { t:'9\u201012', h:'Timeline + safety-net', d:'Slow (months); urgent if rupture features.' }
      ],
      wordPics:{ fail:'Misses a rupture; injects steroid; no loading rehab; ignores fluoroquinolone/training load.', pass:'Recognises tendinopathy, excludes rupture, and starts loading rehab without steroid injection.', exc:'Recognises Achilles tendinopathy, excludes rupture (Simmonds), reviews risk factors, starts progressive loading rehab with load modification, avoids steroid injection, and sets a realistic timeline.' },
      avoid:[
        { dont:'(Injecting) "A steroid injection will settle it."', instead:'"I won\u2019t inject the tendon \u2014 it raises rupture risk; loading exercises are the treatment."', why:'Steroid injection into the Achilles risks rupture.' },
        { dont:'(Missing rupture) not testing tip-toe/calf squeeze.', instead:'"Can you stand on tip-toes? Let me do the calf-squeeze test \u2014 to be sure it isn\u2019t a tear."', why:'Acute rupture is easily missed and needs urgent referral.' },
        { dont:'(Ignoring fluoroquinolone) not asking about antibiotics.', instead:'"Any recent ciprofloxacin? It can affect tendons."', why:'Fluoroquinolones cause tendinopathy/rupture.' }
      ]
    },

    'meniscal-injury': {
      ceg:['Urgent & unscheduled care','New & undifferentiated presentations'],
      stem:{ name:'Jay Okonkwo', age:'27 years \u00b7 male', pmh:['Twisting football injury (planted foot); effusion over hours','Clicking/catching/giving way; \u26a0 episodes of locking (can\u2019t fully straighten)','Joint-line tenderness'], meds:['None'], allergy:'NKDA', recent:'"Twisted my knee, it swelled, clicks and catches, and sometimes locks so I can\u2019t straighten it."', reason:'Face-to-face \u2014 a twisting knee injury.' },
      timeMap:[
        { t:'0\u20102', h:'Recognise', d:'Twisting + delayed effusion + joint-line tenderness + mechanical symptoms = meniscal tear.' },
        { t:'2\u20104', h:'Ottawa rules', d:'X-ray if age \u226555/patellar or fibular-head tenderness/can\u2019t flex 90\u00b0/can\u2019t weight-bear 4 steps.' },
        { t:'4\u20106', h:'Urgent features', d:'True locked knee (can\u2019t extend \u2014 bucket-handle) or ACL (immediate haemarthrosis/pop/instability) \u2192 urgent.' },
        { t:'6\u20109', h:'Conservative', d:'RICE/analgesia/physio (quads), activity modification.' },
        { t:'9\u201012', h:'MRI/refer + safety-net', d:'Locked knee/persistent symptoms/ACL/failed conservative \u2192 MRI + orthopaedics.' }
      ],
      wordPics:{ fail:'Misses a true locked knee/ACL; images everyone reflexively or no plan; ignores instability.', pass:'Recognises meniscal injury, applies Ottawa rules, and manages conservatively with referral if indicated.', exc:'Recognises the meniscal pattern, applies Ottawa knee rules, identifies true locking/ACL needing urgent orthopaedics, manages conservatively with physio, and arranges MRI/referral where indicated.' },
      avoid:[
        { dont:'(Missing locked knee) treating true locking as routine.', instead:'"A knee that truly won\u2019t straighten needs urgent orthopaedics and a scan."', why:'A locked (bucket-handle) knee needs urgent assessment.' },
        { dont:'(Reflex imaging) X-raying without Ottawa rules.', instead:'"The Ottawa rules tell me whether an X-ray\u2019s needed."', why:'Ottawa rules rationalise imaging.' },
        { dont:'(Ignoring ACL) overlooking immediate swelling/instability.', instead:'"Instant swelling with a pop and giving way suggests an ACL injury \u2014 that needs a scan and orthopaedics."', why:'ACL injury changes management/urgency.' }
      ]
    },

    'costochondritis': {
      ceg:['Urgent & unscheduled care','Mental health & addiction'],
      stem:{ name:'Priya Nair', age:'32 years \u00b7 female', pmh:['Few days sharp localised anterior chest pain, reproducible on palpation, worse on deep breathing','No cardiac/resp red flags; google-fuelled cardiac fear','Health anxiety'], meds:['None'], allergy:'NKDA', recent:'"Chest pain \u2014 terrified it\u2019s my heart \u2014 but it\u2019s sharp and worse when I press on it or breathe deeply."', reason:'Face-to-face \u2014 chest pain, anxious about the heart.' },
      timeMap:[
        { t:'0\u20102', h:'Take seriously', d:'Exclude the serious first so reassurance lands.' },
        { t:'2\u20105', h:'Exclude serious', d:'Cardiac/PE/pneumothorax/pneumonia/GORD; history/risk/exam; ECG (\u00b1 troponin) if doubt.' },
        { t:'5\u20107', h:'Positive diagnosis', d:'Reproducible costochondral tenderness = costochondritis (but doesn\u2019t fully exclude cardiac).' },
        { t:'7\u20109', h:'Grounded reassurance', d:'Reassure because the serious was excluded; analgesia/NSAIDs; address health anxiety.' },
        { t:'9\u201012', h:'Safety-net', d:'999 for central/crushing/exertional pain, breathlessness, radiation, sweating, collapse.' }
      ],
      wordPics:{ fail:'Dismisses chest pain without excluding the serious, or over-investigates; fails to address the cardiac fear.', pass:'Excludes the serious, makes a positive costochondritis diagnosis, and reassures with safety-netting.', exc:'Takes chest pain seriously, excludes serious causes (ECG if doubt), makes a positive costochondritis diagnosis, gives grounded reassurance addressing health anxiety, and safety-nets red flags.' },
      avoid:[
        { dont:'"It\u2019s just muscular, nothing to worry about." (without assessing)', instead:'"Let me check your heart and the serious causes first \u2014 then I can reassure you properly."', why:'Dismissing chest pain without exclusion is unsafe and reassurance won\u2019t land.' },
        { dont:'(Over-investigating) repeated tests for a clear MSK picture with no risk.', instead:'"With no red flags and reproducible tenderness, this is costochondritis \u2014 endless tests would feed the anxiety."', why:'Over-investigation reinforces health anxiety.' },
        { dont:'(Ignoring anxiety) ending without addressing the fear.', instead:'"The cardiac worry is the main thing \u2014 let\u2019s talk about that; the checks are reassuring."', why:'The health anxiety is central to the consultation.' }
      ]
    },

    'hypermobility-eds': {
      ceg:['New & undifferentiated presentations','Health disadvantage & vulnerabilities'],
      stem:{ name:'Niamh Carter', age:'24 years \u00b7 female', pmh:['Lifelong hypermobility + recurrent pain/subluxations; soft stretchy skin, easy bruising','Fatigue; dizziness on standing (?PoTS); GI symptoms','Repeatedly dismissed'], meds:['None'], allergy:'NKDA', recent:'"I\u2019m really bendy, my joints dislocate and ache, I bruise easily and I\u2019m exhausted \u2014 someone said Ehlers-Danlos."', reason:'Face-to-face \u2014 chronic joint pain in a hypermobile young adult.' },
      timeMap:[
        { t:'0\u20102', h:'Validate + recognise', d:'Hypermobility + pain/dislocations + skin/bruising + fatigue = hypermobility spectrum/hEDS; Beighton score.' },
        { t:'2\u20105', h:'Multisystem', d:'PoTS/autonomic, GI, fatigue, mood, poor healing \u2014 whole picture.' },
        { t:'5\u20107', h:'Red flags', d:'Vascular EDS (arterial/organ rupture, family sudden death, thin skin), marfanoid \u2192 genetics/specialist.' },
        { t:'7\u201010', h:'Holistic management', d:'Physio (stabilise/strengthen/pace), chronic-pain approach (avoid opioids), PoTS/GI/mood.' },
        { t:'10\u201012', h:'Refer + safety-net', d:'Rheumatology/MDT; genetics if serious subtype; urgent for severe sudden pain.' }
      ],
      wordPics:{ fail:'Dismisses the patient again; manages joints in isolation; misses vascular-EDS red flags; escalates to opioids.', pass:'Recognises hypermobility/hEDS, screens multisystem features and red flags, and manages holistically with referral.', exc:'Recognises hypermobility/hEDS (Beighton), screens the multisystem picture and serious-subtype red flags, manages holistically (physio/pain/PoTS/mood), refers appropriately, and validates the repeatedly-dismissed patient.' },
      avoid:[
        { dont:'"You\u2019re just hypermobile/double-jointed \u2014 lots of people are." (dismissing)', instead:'"Your joint problems, skin, bruising and fatigue together fit a hypermobility condition \u2014 let\u2019s assess and manage it properly."', why:'Dismissing the multisystem picture repeats the harm and misses hEDS.' },
        { dont:'(Missing vascular EDS) ignoring family/skin red flags.', instead:'"Any family history of arteries/organs rupturing or sudden young deaths? Those need genetics."', why:'Vascular EDS is serious and changes management.' },
        { dont:'(Opioid escalation) escalating to strong opioids for chronic pain.', instead:'"We\u2019ll use physio and a careful pain approach \u2014 strong opioids tend to harm in this."', why:'Opioid escalation is harmful in chronic hypermobility pain.' }
      ]
    }

  });

})();
