/* ============================================================
   Reasoning GP — Case Library batch 77 (SCA revision notes):
   Achilles tendinopathy; meniscal injury; costochondritis;
   hypermobility / Ehlers-Danlos. No NG12 cancer. After 76.
   ============================================================ */
(function(){

  /* ===== 277. Achilles tendinopathy ===== */
  const c277 = {
    id: 'achilles-tendinopathy',
    title: '"The back of my heel/ankle has been stiff and painful for weeks, worst when I start running \u2014 and there\u2019s a tender lump on the tendon"',
    type: 'video',
    duration: 12,
    meta: {
      age: 44,
      sex: 'M',
      setting: 'Video consultation \u2014 posterior heel/ankle pain (guided self-examination)',
      system: 'MSK \u2014 Achilles tendinopathy: recognition, the rupture caveat & loading rehab',
      checked: 'October 2026'
    },
    brief: 'Mr Tom Easton, 44 (recreational runner, recent training increase), has weeks of posterior ANKLE/heel pain and stiffness, worst on starting activity/in the morning, with localised tenderness and thickening ~2\u20136 cm above the insertion \u2014 ACHILLES TENDINOPATHY (overuse, mid-portion or insertional). Recognise it clinically (gradual onset, load-related pain, morning stiffness, tender thickened tendon), and crucially distinguish ACUTE ACHILLES RUPTURE (sudden "kick/pop", weakness, unable to push off/tip-toe, positive SIMMONDS/Thompson calf-squeeze test, palpable gap \u2014 a must-not-miss needing SAME-DAY orthopaedic or fracture-clinic assessment/A&E); distinguish mid-portion disease (tender thickening a few centimetres above the heel bone) from insertional disease (tender where the tendon meets the bone); consider gout, referred pain, retrocalcaneal bursitis, spondyloarthritis enthesitis (NICE NG65) and bilateral thickening from xanthomata. MANAGE tendinopathy conservatively \u2014 it is largely self-limiting but slow: relative rest/load modification, analgesia, a structured progressive LOADING (eccentric/heavy-slow) exercise programme via physiotherapy over about 12 weeks (the cornerstone; JOSPT/APTA 2024, international), footwear/heel raise, and address risk factors (training load, fluoroquinolone antibiotics \u2014 which can cause tendinopathy/rupture, within 48 hours or months after stopping, with higher risk over 60, with renal impairment or with a corticosteroid; since January 2024 used only when other recommended antibiotics are inappropriate, MHRA Drug Safety Update March 2019 and January 2024 \u2014 steroids); AVOID corticosteroid injection into the Achilles (rupture risk; SPC). Shockwave only with special arrangements (NICE HTG426). Set realistic expectations (about three months; review at around 12 weeks); refer if refractory or rupture suspected. Recorded findings available to the candidate (no in-person examination in this remote consultation): On video (guided): tender thickened swelling about 4 cm above the right heel; can do 10 single-leg heel raises on the right (painful); with his wife squeezing the calf while he kneels on a chair, the foot plantarflexes normally on both sides; no visible gap; no swelling of other joints.',
    script: {
      opening: '"The back of my ankle\u2019s been sore and stiff for a few weeks \u2014 worst first thing and when I start a run, then it eases a bit. There\u2019s a tender, slightly swollen lump on the tendon. I\u2019ve upped my running lately. What is it, and can I keep running?"',
      facts: [
        {
          topic: 'The pain',
          text: 'Right Achilles, about 6 weeks, came on gradually. Stiff and sore for the first steps in the morning and the first 10 minutes of a run, eases, then aches afterwards and the next morning. A tender, thickened lump about 4 cm above the heel bone \u2014 points to it on camera.'
        },
        {
          topic: 'Rupture questions (all negative)',
          text: 'No sudden "kick" or pop, no snap, never felt as if someone hit the back of his leg. Can still run. If asked to try on video: can do a single-leg tiptoe on the right, 10 times, though it\u2019s sore. If his wife squeezes his calf while he kneels on a chair (if the doctor guides it): his foot moves down normally.'
        },
        {
          topic: 'Training',
          text: 'Training for a half-marathon: went from 15 km to 40 km a week over a month, added hill sprints, new lighter racing shoes.'
        },
        {
          topic: 'Risk factors (if asked)',
          text: 'No recent antibiotics (no ciprofloxacin or similar). No steroid tablets or injections. No other joints painful, no back stiffness, no psoriasis, no eye inflammation, no gout. Cholesterol never checked; no yellow lumps on tendons.'
        },
        {
          topic: 'Health and work',
          text: 'Fit. No medicines; occasional ibuprofen after runs. No allergies. Office manager. Married with two children. Non-smoker.'
        },
        {
          topic: 'How to play it',
          text: 'Keen runner, a little impatient. Main question: can you keep running? Relieved if told you can run at a lower level within a pain limit. Ask: "Could I just have a steroid injection to speed things up?" Accept when told why not.'
        }
      ],
      ice: {
        ideas: '"I assume I\u2019ve strained the tendon from running more."',
        concerns: '"Whether it could snap, and whether I have to stop running altogether \u2014 the half-marathon is in 8 weeks."',
        expectations: '"To keep running, and maybe an injection to speed it up."'
      },
      cues: [
        '"Can I keep running?" \u2014 negotiate load management rather than complete rest.',
        '"Whether it could snap" \u2014 explain rupture warning signs.',
        '"New lighter racing shoes" (if training is explored) \u2014 load and footwear changes to address.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises ACHILLES TENDINOPATHY (gradual load-related posterior ankle pain, morning/start-of-activity stiffness, tender thickened tendon, training-load increase), distinguishing mid-portion from insertional disease'
      },
      {
        dom: 'dg',
        text: 'EXCLUDES acute ACHILLES RUPTURE (sudden pop, weakness, inability to tip-toe, palpable gap, positive Simmonds/Thompson test) \u2014 a must-not-miss needing same-day orthopaedic/fracture-clinic assessment'
      },
      {
        dom: 'dg',
        text: 'Considers the differential (gout, bursitis, spondyloarthritis enthesitis, xanthomata, referred pain) and reviews RISK factors \u2014 training load, fluoroquinolone antibiotics (tendinopathy/rupture; MHRA 2019 and January 2024), steroids'
      },
      {
        dom: 'cm',
        text: 'Manages conservatively with the cornerstone progressive LOADING (eccentric/heavy-slow) programme via physiotherapy, load modification (modify rather than stop), analgesia, footwear/heel raise'
      },
      {
        dom: 'cm',
        text: 'AVOIDS corticosteroid injection into the Achilles (rupture risk) and refers (physio/orthopaedics-sports medicine if refractory; urgently if rupture suspected), setting realistic (about three months) expectations'
      },
      {
        dom: 'ro',
        text: 'Addresses his wish to keep running, explains the diagnosis/timeline, and checks understanding of the rehab plan'
      },
      {
        dom: 'ro',
        text: 'Shares the decision about training load openly, agreeing what he will modify and a realistic timescale, so he feels in control rather than banned from running'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: review if not improving/refractory, urgent assessment if rupture features develop, and risk-factor modification \u2014 loading rehab, not steroid injection'
      }
    ],
    worked: [
      {
        lbl: 'Name it',
        txt: '"This is Achilles tendinopathy \u2014 an overuse strain of the tendon, set off by upping your running. The stiffness worst first thing and at the start of a run, with that tender thickened spot, is classic."'
      },
      {
        lbl: 'Check it\u2019s not a rupture',
        txt: '"Let me make sure it isn\u2019t a tear \u2014 did it ever suddenly pop, and can you push off and stand on tip-toes? \u2026 Yes. And the calf-squeeze test is normal. Good \u2014 a sudden rupture is the thing we never miss."'
      },
      {
        lbl: 'Risk factors',
        txt: '"Quick check \u2014 have you had a quinolone antibiotic like ciprofloxacin recently, or steroid tablets or injections? They can affect tendons, even months after stopping. And we\u2019ll look at your training load, which is the main driver here."'
      },
      {
        lbl: 'Loading rehab',
        txt: '"The treatment that genuinely works is a progressive strengthening programme \u2014 specific calf/tendon loading exercises \u2014 with physiotherapy. You don\u2019t have to stop running completely; we modify the load rather than rest entirely \u2014 keep the pain mild during a run and make sure it has settled by the next morning."'
      },
      {
        lbl: 'No injection',
        txt: '"One thing I won\u2019t do is inject steroid into the tendon \u2014 that raises the risk of it rupturing. The exercises are the way."'
      },
      {
        lbl: 'Timeline + safety-net',
        txt: '"Be patient \u2014 it usually takes about three months; let\u2019s review at around 12 weeks, or sooner if it\u2019s getting worse. If you ever feel a sudden pop and can\u2019t push off or stand on tiptoe, go to A&E the same day \u2014 that would need same-day assessment."'
      }
    ],
    learning: 'ACHILLES TENDINOPATHY is an overuse condition presenting with gradual-onset posterior ankle/heel pain and stiffness, worst on STARTING activity and in the MORNING, with localised tenderness and THICKENING of the tendon (mid-portion ~2\u20136 cm above the insertion, or insertional where the tendon meets the heel bone), typically provoked by training-load increases, poor footwear and calf tightness. The must-not-miss is ACUTE ACHILLES RUPTURE \u2014 a sudden "kicked/popped" sensation, weakness, inability to push off/stand on tip-toes, a palpable gap and a positive SIMMONDS/Thompson calf-squeeze test (no plantarflexion on squeezing the calf) \u2014 which is easily missed (some patients still weakly plantarflex) and needs same-day orthopaedic or fracture-clinic assessment. Consider gout, retrocalcaneal bursitis, spondyloarthritis enthesitis (NICE NG65), xanthomata and referred pain, and review risk factors including training-load spikes, FLUOROQUINOLONE antibiotics (ciprofloxacin \u2014 tendinopathy/rupture risk; MHRA Drug Safety Update March 2019, and since January 2024 only when other recommended antibiotics are inappropriate), corticosteroids and inflammatory arthropathy, stopping/avoiding fluoroquinolones if implicated. Manage conservatively: relative rest/load modification (reduce running volume rather than stop entirely), analgesia, and the cornerstone \u2014 a structured progressive LOADING programme (eccentric/heavy-slow resistance) via physiotherapy with calf stretching and footwear/heel raise \u2014 which is evidence-based (JOSPT/APTA 2024, international) and effective but slow (about three months). AVOID corticosteroid injection into the Achilles tendon (rupture risk), refer to physiotherapy (and orthopaedics/sports medicine if refractory, urgently if rupture suspected), and set realistic expectations (review at around 12 weeks; shockwave only with special arrangements, NICE HTG426).',
    knowledge: {
      guideline: 'JOSPT/APTA midportion Achilles tendinopathy CPG (2024, international) \u00b7 MHRA Drug Safety Update fluoroquinolones (March 2019, January 2024) \u00b7 corticosteroid injection SPCs \u00b7 NICE HTG426 shockwave for Achilles tendinopathy \u00b7 Maffulli, Am J Sports Med 1998 \u00b7 NICE NG65 Spondyloarthritis (2017) \u00b7 MHRA DSU June 2015 \u00b7 Achilles tendinopathy: exclude rupture \u00b7 progressive loading rehab \u00b7 avoid steroid injection \u00b7 fluoroquinolone risk',
      points: [
        {
          h: 'Recognise',
          t: 'Gradual load-related posterior ankle pain, morning/start-of-activity stiffness, tender thickened tendon; training-load increase. Mid-portion vs insertional.'
        },
        {
          h: 'Exclude rupture',
          t: 'Sudden pop, weakness, can\u2019t tip-toe, palpable gap, positive Simmonds/Thompson (no plantarflexion on calf squeeze) \u2192 same-day orthopaedics/fracture clinic. Easily missed.'
        },
        {
          h: 'Differential/risk',
          t: 'Gout, bursitis, SpA enthesitis (NICE NG65), xanthomata, referred pain; risk factors: training load, fluoroquinolones (MHRA 2019; last resort since January 2024), corticosteroids, inflammatory arthropathy.'
        },
        {
          h: 'Loading rehab',
          t: 'Progressive loading (eccentric/heavy-slow) via physiotherapy + load modification, analgesia, footwear/heel raise. Cornerstone; about 12 weeks (JOSPT/APTA 2024).'
        },
        { h: 'Avoid injection', t: 'Do not inject corticosteroid into the Achilles (rupture risk).' },
        {
          h: 'Refer',
          t: 'Physiotherapy early; orthopaedics/sports medicine if no better after about 3 months; same day if rupture suspected. Shockwave only with special arrangements (NICE HTG426).'
        },
        {
          h: 'Never do',
          t: 'Never miss an acute rupture; never inject steroid into the Achilles; never ignore fluoroquinolone/training-load risk; never promise quick recovery.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Review at around 12 weeks or if not improving; same-day A&E for rupture features; modify risk factors.'
        }
      ]
    }
  };

  /* ===== 278. Meniscal injury ===== */
  const c278 = {
    id: 'meniscal-injury',
    title: '"I twisted my knee playing football \u2014 it swelled up, it clicks and catches, and sometimes it locks so I can\u2019t straighten it"',
    type: 'video',
    duration: 12,
    meta: {
      age: 27,
      sex: 'M',
      setting: 'Video consultation \u2014 a twisting knee injury (urgent treatment centre findings recorded)',
      system: 'MSK \u2014 meniscal injury: mechanical symptoms, the locked knee & Ottawa rules',
      checked: 'October 2026'
    },
    brief: 'Mr Jay Okonkwo, 27, twisted his knee on a planted foot playing football, with delayed-onset SWELLING (effusion), and now MECHANICAL symptoms \u2014 CLICKING, CATCHING, giving way and LOCKING (cannot fully straighten) \u2014 with joint-line tenderness, suggesting a MENISCAL TEAR. Recognise the meniscal pattern (twisting injury, effusion developing over hours, joint-line tenderness, mechanical symptoms, McMurray can support it but is not reliable enough to exclude it); apply the OTTAWA KNEE RULES (Stiell, JAMA 1996\u20131997, international) to decide on X-ray (exclude fracture: age \u226555, isolated patellar tenderness, inability to flex 90\u00b0, inability to weight-bear 4 steps, fibular-head tenderness); recognise the TRUE LOCKED KNEE (a bucket-handle meniscal tear blocking full extension) and acute ACL injury (immediate haemarthrosis, pop, instability) as needing more urgent orthopaedic assessment; ask about fever and a hot joint (septic arthritis is an emergency); in a 27-year-old with an acute traumatic tear and TRUE LOCKING, arrange MRI and orthopaedic review urgently, because a displaced tear may be repairable if treated early (BASK Meniscal Working Group 2019; a knee locked now needs same-day assessment); stable, non-locking tears can start with physiotherapy (relative rest, ice, elevation, crutches if needed, paracetamol or an NSAID at the lowest effective dose, quadriceps/range-of-movement exercises, no pivoting sport until assessed); degenerative tears in older people are usually treated with exercise (NICE NG226: no arthroscopic washout for osteoarthritis unless truly locking). Safety-net for locking/instability/inability to weight-bear/hot swollen knee. Recorded findings available to the candidate (no in-person examination in this remote consultation): Urgent treatment centre discharge letter, 5 days ago: right knee moderate effusion, medial joint-line tenderness; no patellar or fibular-head tenderness; flexes beyond 90\u00b0; weight-bears 4 steps; Ottawa knee rules negative \u2014 no X-ray; ligament testing limited by pain; neurovascularly intact. On video today: walks with a limp, can fully straighten the knee.',
    script: {
      opening: '"I twisted my knee playing football a few days ago \u2014 my foot was planted and I turned. It swelled up that evening, and now it clicks and catches, gives way, and a couple of times it\u2019s locked so I literally couldn\u2019t straighten it. What\u2019s going on \u2014 do I need a scan?"',
      facts: [
        {
          topic: 'The injury',
          text: 'Five days ago, Sunday league. Right foot planted, turned to the left. Sharp pain on the inner side of the knee. No pop he remembers. Played on for 5 minutes then came off. Swelling came up "by the evening", not straight away.'
        },
        {
          topic: 'Urgent treatment centre',
          text: 'Went to the urgent treatment centre that night. If asked what they found: "They said there was fluid in the knee and it was tender on the inside line, but I could bend it past a right angle and walk, and the kneecap wasn\u2019t tender, so no X-ray." He has the discharge letter.'
        },
        {
          topic: 'Mechanical symptoms',
          text: 'Clicks and catches on the inside. Gave way twice going downstairs. Twice it "locked": stuck bent for a minute and he couldn\u2019t straighten it, then it clunked and freed. Can fully straighten it now, just sore. Can walk with a limp.'
        },
        {
          topic: 'Negatives (if asked)',
          text: 'No numbness or tingling in the foot, calf not swollen or tender, no fever, knee not hot or red. No previous knee injuries.'
        },
        {
          topic: 'Health and work',
          text: 'No medicines except ibuprofen since the injury. No asthma, no stomach problems, no allergies. Works as a plumber \u2014 kneeling and stairs all day. Self-employed. Lives with girlfriend.'
        },
        {
          topic: 'How to play it',
          text: 'Frustrated, keen to get back to football and work. Ask "So no scan?" if a scan isn\u2019t mentioned, and "So I will need an operation?" if referral is suggested. Accept a plan that gets you seen quickly.'
        }
      ],
      ice: {
        ideas: '"Cartilage, maybe. A mate had that."',
        concerns: '"That I\u2019ll need an operation and miss the season. And I don\u2019t trust it now." Worried about losing income as a self-employed plumber.',
        expectations: '"A scan, to know what\u2019s wrong."'
      },
      cues: [
        '"It\u2019s locked so I couldn\u2019t straighten it" \u2014 true locking needs urgent referral.',
        '"They didn\u2019t X-ray it" (if asked) \u2014 Ottawa knee rules were applied.',
        '"I\u2019m self-employed and kneel all day" \u2014 work impact and fit note.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises the MENISCAL pattern (twisting injury, effusion over hours, joint-line tenderness, mechanical symptoms \u2014 clicking/catching/giving way/locking; McMurray supportive but not reliable enough to exclude)'
      },
      {
        dom: 'cm',
        text: 'Applies the OTTAWA KNEE RULES to decide on X-ray (age \u226555, isolated patellar/fibular-head tenderness, inability to flex 90\u00b0, inability to weight-bear 4 steps) to exclude fracture'
      },
      {
        dom: 'dg',
        text: 'Recognises the TRUE LOCKED KNEE (cannot fully extend \u2014 bucket-handle tear) and acute ACL injury (immediate haemarthrosis, pop, instability) as needing urgent orthopaedic/MRI assessment (BASK 2019; same day if locked now), and asks about fever/a hot joint to exclude septic arthritis'
      },
      {
        dom: 'cm',
        text: 'Manages stable, non-locking meniscal injuries initially conservatively (RICE, analgesia, physiotherapy/quadriceps rehab, activity modification), starting these while he awaits MRI'
      },
      {
        dom: 'cm',
        text: 'Arranges MRI and ORTHOPAEDIC referral for a true locked knee or true locking in a young person (urgent, BASK 2019), persistent mechanical symptoms, suspected ACL/ligament injury, or failed conservative management \u2014 not imaging reflexively'
      },
      {
        dom: 'ro',
        text: 'Explains the diagnosis and imaging/referral reasoning, addresses his concern about a scan, and checks understanding'
      },
      {
        dom: 'ro',
        text: 'Acknowledges the impact on his sport and his wish to get back to football, and agrees a shared rehab plan and the point at which they would escalate to imaging'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: same-day A&E for a knee locked now/inability to weight-bear/hot very swollen knee, review for continued giving way, conservative plan with physio, and MRI/orthopaedics where indicated'
      }
    ],
    worked: [
      {
        lbl: 'Name the pattern',
        txt: '"A twisting injury with the knee swelling up over a few hours, then clicking, catching and locking, points to a cartilage (meniscus) tear. The locking \u2014 not being able to straighten it \u2014 is an important feature."'
      },
      {
        lbl: 'Decide on X-ray',
        txt: '"Let me check a few things that tell me whether you need an X-ray to rule out a fracture \u2014 can you bend it to 90 degrees, walk four steps, any tenderness on the kneecap or the side of the knee? \u2026 That guides imaging."'
      },
      {
        lbl: 'Flag urgent features',
        txt: '"Did it swell instantly with a pop, and does it give way? Immediate swelling and instability can mean a ligament (ACL) injury, and a knee that truly locks needs the orthopaedic team and a scan more urgently."'
      },
      {
        lbl: 'Conservative plan',
        txt: '"Because your knee has genuinely locked, I\u2019ll arrange an MRI and a knee specialist \u2014 in someone your age a displaced tear may be repairable, and that works best early. Meanwhile: rest from football and twisting, ice, keep it raised, painkillers and \u2014 importantly \u2014 physiotherapy to strengthen the thigh muscles and restore movement."'
      },
      {
        lbl: 'MRI/referral',
        txt: '"The scan will show what\u2019s torn and whether repair would help \u2014 some tears settle with physiotherapy, some need a keyhole operation, and the giving way means the ligaments need checking too. Any fever, or has the knee gone hot and red?"'
      },
      {
        lbl: 'Safety-net',
        txt: '"Go to A&E the same day if it locks and won\u2019t unlock, you can\u2019t put weight on it, or it becomes hot and very swollen. Otherwise I\u2019ll send the referral today, start physio, and review in two weeks."'
      }
    ],
    learning: 'A MENISCAL TEAR is suggested by a TWISTING injury on a planted/loaded knee, an EFFUSION developing over hours (rather than immediately), JOINT-LINE tenderness, and MECHANICAL symptoms \u2014 clicking, catching, giving way and LOCKING \u2014 with McMurray\u2019s test able to support but not reliably exclude the diagnosis. Apply the OTTAWA KNEE RULES (Stiell 1996\u20131997, international) to decide on X-ray (to exclude fracture): image if age \u226555, isolated patellar tenderness, fibular-head tenderness, inability to flex to 90\u00b0, or inability to weight-bear for 4 steps (immediately and in clinic). Recognise the more urgent presentations: a TRUE LOCKED KNEE or true locking episodes in a young person (unable to fully extend, often a displaced bucket-handle meniscal tear blocking the joint) need urgent MRI and orthopaedic review because early repair may be possible (BASK 2019), with same-day assessment if locked now, and an acute ACL injury \u2014 immediate haemarthrosis (rapid swelling), an audible "pop" and instability/giving way \u2014 warrants orthopaedic/MRI assessment; distinguish a genuinely locked knee from pain-limited pseudo-locking. Screen for septic arthritis (fever, hot joint). Manage stable, non-locking meniscal injuries initially conservatively (RICE, analgesia, physiotherapy with quadriceps strengthening and range of motion, activity modification), as many small/degenerate tears settle (NICE NG226 for degenerative knees), and arrange MRI and orthopaedic referral for a true locked knee (urgent), persistent significant mechanical symptoms, suspected ACL/ligament injury, or failure of conservative management \u2014 with arthroscopy in selected cases. Safety-net for locking that won\u2019t unlock, inability to weight-bear, or instability, or a hot very swollen knee.',
    knowledge: {
      guideline: 'Ottawa knee rules (Stiell, JAMA 1996\u20131997, international) \u00b7 BASK Meniscal Working Group arthroscopic meniscal surgery guideline (Bone Joint J 2019) \u00b7 ESSKA meniscus consensus (2016\u20132017, international) \u00b7 NICE NG226 Osteoarthritis in over 16s (2022) \u00b7 MHRA DSU June 2015 \u00b7 meniscal injury: mechanical symptoms \u00b7 true locked knee/ACL \u2192 urgent MRI/orthopaedics \u00b7 conservative + physio for stable tears',
      points: [
        {
          h: 'Recognise',
          t: 'Twisting injury, effusion over hours, joint-line tenderness, mechanical symptoms (clicking/catching/giving way/locking); McMurray supportive but not reliable enough to exclude.'
        },
        {
          h: 'Ottawa knee rules',
          t: 'X-ray if age \u226555, isolated patellar tenderness, fibular-head tenderness, can\u2019t flex 90\u00b0, or can\u2019t weight-bear 4 steps. Rationalises imaging.'
        },
        {
          h: 'Urgent features',
          t: 'True locked knee or true locking in a young person (bucket-handle) \u2192 urgent MRI/orthopaedics (BASK 2019; same day if locked now); ACL (immediate haemarthrosis/pop/instability) \u2192 orthopaedic/MRI. Distinguish from pseudo-locking. Fever/hot joint \u2192 septic arthritis.'
        },
        {
          h: 'Conservative care',
          t: 'Stable non-locking tears: RICE, analgesia, physiotherapy (quadriceps strengthening, ROM), activity modification \u2014 many tears settle.'
        },
        {
          h: 'MRI/referral',
          t: 'True locked knee (urgent), persistent mechanical symptoms, suspected ACL/ligament injury, or failed conservative management \u2192 MRI + orthopaedics; arthroscopy in selected cases.'
        },
        {
          h: 'Don\u2019t image reflexively',
          t: 'Use Ottawa rules and the clinical picture to guide X-ray/MRI rather than scanning everyone.'
        },
        {
          h: 'Never do',
          t: 'Never miss a true locked knee or ACL injury; never image reflexively; never ignore inability to weight-bear/instability.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Same-day A&E for knee locked now/can\u2019t weight-bear/hot swollen knee; physio; MRI/orthopaedics; review in two weeks.'
        }
      ]
    }
  };

  /* ===== 279. Costochondritis ===== */
  const c279 = {
    id: 'costochondritis',
    title: '"I\u2019ve got chest pain \u2014 I\u2019m terrified it\u2019s my heart \u2014 but it\u2019s sharp, worse when I press on it or breathe deeply"',
    type: 'video',
    duration: 12,
    meta: {
      age: 32,
      sex: 'F',
      setting: 'Video consultation \u2014 chest pain, anxious about the heart (urgent treatment centre findings recorded)',
      system: 'MSK / Cardiology \u2014 costochondritis: a positive diagnosis after excluding the serious',
      checked: 'October 2026'
    },
    brief: 'Ms Priya Nair, 32, has a few days of sharp, LOCALISED anterior chest-wall pain, REPRODUCIBLE on palpation of the costochondral junctions (recorded at the urgent treatment centre and reproduced by her own pressure on video) and worse on deep breathing/movement, with no cardiac/respiratory red flags \u2014 COSTOCHONDRITIS (musculoskeletal chest-wall pain). The task: take chest pain seriously and EXCLUDE the serious causes first (cardiac \u2014 ACS/angina: exertional, central, radiating, sweating, risk factors; PE \u2014 pleuritic, breathless, calf, risk factors; pneumothorax; pneumonia; GORD; aortic), assess using the recorded examination, observations and ECG plus what she shows on video, then make a POSITIVE diagnosis of costochondritis (a diagnosis supported by REPRODUCIBLE, localised, palpable tenderness over the costochondral junctions \u2014 though reproducible tenderness alone never fully excludes cardiac disease, so red flags must be absent); distinguish Tietze\u2019s syndrome (visible swelling of a single junction); manage with reassurance, EXPLANATION, analgesia (topical NSAID or paracetamol first; an oral NSAID at the lowest effective dose for the shortest time only after checking asthma, GI, renal and cardiovascular risks and pregnancy \u2014 BNF), and self-care; and \u2014 crucially \u2014 address the HEALTH ANXIETY/cardiac fear with genuine, grounded reassurance (it lands because the serious has been considered/excluded), not dismissiveness (NICE CG113 if persistent anxiety); if acute coronary syndrome is suspected, refer as an emergency and do not delay transfer for tests (NICE CG95 \u2014 troponin is not a GP test); assess PE with the two-level Wells score and, where suspicion is low, the PERC rule (NICE NG158); an ECG can help where any doubt but a normal resting ECG does not exclude ACS; safety-net for red flags. The skill is excluding the serious, a positive MSK diagnosis, and proportionate reassurance for the anxious patient. Recorded findings available to the candidate (no in-person examination in this remote consultation): Urgent treatment centre, 2 days ago: ECG sinus rhythm 78, normal; BP 118/74, respiratory rate 14, SpO2 99%, temperature 36.7 \u00b0C; tender over the left 3rd\u20134th costochondral junctions reproducing the pain; chest clear; calves soft, non-tender. On video today: she reproduces the pain by pressing beside the breastbone.',
    script: {
      opening: '"I\u2019ve had this chest pain for a few days and I\u2019m really scared it\u2019s my heart \u2014 I keep googling heart attacks. But it\u2019s a sharp pain on the left, and honestly it hurts more when I press on it or take a deep breath. I\u2019m 32 \u2014 could it still be serious?"',
      facts: [
        {
          topic: 'The pain',
          text: 'Four days. Sharp, in one spot on the left of the breastbone. Worse pressing on it (can press on camera and say "Yes, that\u2019s it exactly"), deep breaths, twisting, lying on that side. Not brought on by walking or stairs. Lasts a while, eases with paracetamol.'
        },
        {
          topic: 'Before it started',
          text: 'If asked: started the gym a week ago \u2014 lots of press-ups and a new chest-press machine. Had a cold with a cough the week before.'
        },
        {
          topic: 'Red-flag questions (all negative)',
          text: 'No heaviness or tightness, no spread to arm, jaw or back. No sweating, no breathlessness, no palpitations, no fainting. No calf pain or swelling, no coughing blood, no recent surgery, flights or immobility. Not on the pill (uses the copper coil). No fever. No heartburn or pain with food.'
        },
        {
          topic: 'Urgent treatment centre',
          text: 'If asked: went to the urgent treatment centre on day 2. "They did a heart tracing \u2014 they said it was normal \u2014 and my blood pressure and oxygen were fine. The doctor pressed on my chest and said it was sore there."'
        },
        {
          topic: 'Health and family',
          text: 'Well. No medicines, no allergies. Non-smoker. Cholesterol never checked. Her uncle had a heart attack at 50 last month \u2014 that\u2019s what set off the panic (only if asked about family or worries).'
        },
        { topic: 'Social', text: 'Works as a solicitor; very stressed at work. Lives with her husband.' },
        {
          topic: 'How to play it',
          text: 'Anxious, talking quickly, wants proper reassurance \u2014 "Tell me it isn\u2019t my heart. Properly." Simple reassurance without explanation won\u2019t settle you. Calms if the doctor explains why it isn\u2019t the heart. Ask: "And the googling?"'
        }
      ],
      ice: {
        ideas: '"I know it hurts when I press, but I keep reading that heart attacks can be different in women."',
        concerns: 'HIDDEN AGENDA \u2014 her uncle\u2019s heart attack last month; she is checking her pulse many times a day and can\u2019t sleep.',
        expectations: '"Tell me it isn\u2019t my heart. Properly."'
      },
      cues: [
        '"I keep googling heart attacks" \u2014 health anxiety to address.',
        '"It hurts more when I press on it" \u2014 reproducible chest-wall pain.',
        '"My uncle had a heart attack last month" (if worries are explored) \u2014 the trigger for the fear.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Takes chest pain SERIOUSLY and EXCLUDES serious causes first \u2014 cardiac (ACS/angina), PE, pneumothorax, pneumonia, GORD, aortic \u2014 via history, risk factors and the recorded examination and observations (PERC/Wells for PE, NICE NG158), with an ECG where any doubt and emergency referral if ACS is suspected (NICE CG95)'
      },
      {
        dom: 'cm',
        text: 'Makes a POSITIVE diagnosis of COSTOCHONDRITIS (localised anterior pain reproducible on palpation of the costochondral junctions, worse on movement/breathing) \u2014 while recognising reproducible tenderness alone does not fully exclude cardiac disease, and distinguishing Tietze\u2019s syndrome (swelling)'
      },
      {
        dom: 'cm',
        text: 'Manages with reassurance, explanation, analgesia (topical NSAID/paracetamol; oral NSAID only after checking asthma, GI, renal, cardiovascular risk and pregnancy) and self-care, avoiding over-investigation once the serious is excluded'
      },
      {
        dom: 'ro',
        text: 'Addresses the cardiac FEAR/health anxiety with GENUINE, grounded reassurance (landing because the serious was taken seriously/excluded) \u2014 not dismissiveness'
      },
      {
        dom: 'cm',
        text: 'Acts where there is any doubt/atypical or risk features (emergency referral for suspected ACS without delaying for tests, NICE CG95; Wells/PERC and D-dimer pathway for PE, NICE NG158; CXR if lung disease suspected) rather than falsely reassuring'
      },
      { dom: 'ro', text: 'Explores and supportively addresses recurrent health anxiety, and checks understanding' },
      {
        dom: 'ro',
        text: 'Checks what she understands and believes about her heart, corrects misconceptions in plain language, and agrees a clear plan including when to seek help so she leaves reassured rather than dismissed'
      },
      {
        dom: 'cm',
        text: 'Safety-nets clearly: red flags warranting urgent/999 care (central/crushing/exertional pain, breathlessness, radiation, sweating, collapse, pain unlike this), and review \u2014 positive diagnosis after exclusion, not dismissal'
      }
    ],
    worked: [
      {
        lbl: 'Take it seriously',
        txt: '"You were right to come \u2014 chest pain always deserves to be taken seriously, even at 32. Let me check the important things first so any reassurance I give you actually means something."'
      },
      {
        lbl: 'Exclude the serious',
        txt: '"Is the pain ever brought on by exertion, central or crushing, spreading to your arm or jaw, with sweating or breathlessness? \u2026 No. Any calf swelling, sudden breathlessness, coughing blood, recent surgery or long journey, previous clots or the pill? \u2026 No. The urgent treatment centre checked your pulse, blood pressure, oxygen, chest and legs, and your heart tracing was normal. Could you press beside your breastbone for me \u2014 is that the pain?"'
      },
      {
        lbl: 'Positive diagnosis',
        txt: '"Now \u2014 the pain is sharp, in one spot, worse when you breathe deeply, and \u2014 here\u2019s the telling bit \u2014 I can reproduce it by pressing on the ribcage. That points to costochondritis: inflammation of the rib-cartilage joints. It\u2019s harmless and settles."'
      },
      {
        lbl: 'Grounded reassurance',
        txt: '"So I can reassure you genuinely \u2014 not by brushing it off, but because I\u2019ve checked your heart and the serious causes. This is muscular/joint pain, not your heart."'
      },
      {
        lbl: 'Manage',
        txt: '"An anti-inflammatory gel on the sore spot, or paracetamol, is a good start \u2014 if you need tablets like ibuprofen, I\u2019ll check they\u2019re safe for you first (asthma, stomach, kidneys, pregnancy). Heat, and easing off aggravating movements, help; it usually settles over a few weeks."'
      },
      {
        lbl: 'Safety-net',
        txt: '"But do seek urgent help \u2014 999 \u2014 if you ever get central, crushing or exertional chest pain, breathlessness, sweating, pain spreading to your arm/jaw, or anything different from this. And if the worry keeps troubling you, come back \u2014 we can help with that too."'
      }
    ],
    learning: 'COSTOCHONDRITIS is musculoskeletal chest-wall pain \u2014 sharp, LOCALISED anterior pain, worse on movement/deep breathing/palpation and REPRODUCIBLE on palpation of the costochondral junctions \u2014 but it should be a POSITIVE diagnosis made after taking chest pain seriously and EXCLUDING the serious causes: cardiac (ACS/angina \u2014 central/heavy/exertional pain, radiation, sweating, breathlessness, risk factors), PE (pleuritic, breathless, calf, risk factors), pneumothorax, pneumonia, GORD, pericarditis and aortic causes, assessing history/risk factors (PE: two-level Wells and PERC per NICE NG158), using a recorded or in-person examination, and doing an ECG where any doubt \u2014 while suspected acute coronary syndrome means emergency referral without delaying transfer for tests (NICE CG95; a normal resting ECG does not exclude ACS). Visible swelling of a single junction suggests Tietze\u2019s syndrome. Crucially, reproducible chest-wall tenderness alone does NOT fully exclude cardiac disease, so the absence of red flags and an appropriate assessment matter, and any doubt or atypical/risk features warrant investigation rather than false reassurance. Manage costochondritis with reassurance and clear explanation, analgesia (topical NSAID or paracetamol; an oral NSAID at the lowest dose for the shortest time only after checking asthma, GI, renal, cardiovascular risk and pregnancy \u2014 BNF), heat and activity modification, reassuring that it is self-limiting over weeks and avoiding over-investigation once the serious is excluded. The communication core is the patient\u2019s cardiac FEAR/health anxiety (often google-fuelled): address it with genuine, grounded reassurance \u2014 which lands precisely because the serious has been taken seriously and excluded \u2014 rather than a dismissive "it\u2019s nothing", exploring and supportively addressing recurrent health anxiety (NICE CG113). Safety-net clearly for red flags warranting urgent/999 care (central/crushing/exertional pain, breathlessness, radiation, sweating, collapse, or pain unlike this).',
    knowledge: {
      guideline: 'NICE CG95 Recent-onset chest pain of suspected cardiac origin (2010, updated 2016) \u00b7 NICE NG158 Venous thromboembolic diseases (2020, updated 2023) \u00b7 MHRA Drug Safety Update June 2015 \u00b7 NICE CG113 Generalised anxiety disorder and panic disorder (2011) \u00b7 costochondritis: positive diagnosis after excluding serious chest pain \u00b7 reproducible tenderness (doesn\u2019t fully exclude cardiac) \u00b7 analgesia \u00b7 health-anxiety reassurance',
      points: [
        {
          h: 'Exclude the serious',
          t: 'Take chest pain seriously; exclude cardiac (ACS/angina), PE, pneumothorax, pneumonia, GORD, aortic via history/risk factors/exam; ECG where any doubt; suspected ACS \u2192 emergency referral, don\u2019t delay for tests (NICE CG95); PE \u2192 Wells/PERC (NICE NG158).'
        },
        {
          h: 'Positive diagnosis',
          t: 'Localised anterior pain, worse on movement/breathing, reproducible on palpation of costochondral junctions = costochondritis. Reproducible tenderness alone doesn\u2019t fully exclude cardiac. Swelling of a single junction \u2192 Tietze\u2019s.'
        },
        {
          h: 'Manage',
          t: 'Reassurance/explanation, topical NSAID/paracetamol (oral NSAID after asthma/GI/renal/CV/pregnancy check, BNF), heat, activity modification; self-limiting over weeks; avoid over-investigation once serious excluded.'
        },
        {
          h: 'Address anxiety',
          t: 'Grounded reassurance (lands because the serious was excluded), not dismissiveness; explore/support recurrent health anxiety (NICE CG113).'
        },
        {
          h: 'Investigate if doubt',
          t: 'Any doubt/atypical/risk features \u2192 ACS: emergency referral (CG95); PE: Wells/PERC and D-dimer pathway (NG158); CXR if lung disease \u2014 rather than false reassurance.'
        },
        {
          h: 'Never do',
          t: 'Never dismiss chest pain without considering the serious; never falsely reassure with doubt/risk features; never rely on reproducible tenderness alone to exclude cardiac disease.'
        },
        {
          h: 'Safety-net & follow-up',
          t: '999 for central/crushing/exertional pain, breathlessness, radiation, sweating, collapse, or pain unlike this; review; address health anxiety.'
        }
      ]
    }
  };

  /* ===== 280. Hypermobility / Ehlers-Danlos ===== */
  const c280 = {
    id: 'hypermobility-eds',
    title: '"I\u2019m really bendy and my joints keep dislocating and aching, I bruise easily and I\u2019m exhausted \u2014 someone mentioned Ehlers-Danlos"',
    type: 'video',
    duration: 12,
    meta: {
      age: 24,
      sex: 'F',
      setting: 'Video consultation \u2014 chronic joint pain in a hypermobile young adult',
      system: 'Rheumatology \u2014 hypermobility spectrum / hypermobile Ehlers-Danlos: recognition & holistic management',
      checked: 'October 2026'
    },
    brief: 'Ms Niamh Carter, 24, reports lifelong JOINT HYPERMOBILITY with recurrent joint pain, subluxations/dislocations, easy BRUISING, soft/stretchy skin, fatigue, and possibly autonomic symptoms (dizziness/palpitations) and GI symptoms \u2014 a picture of a HYPERMOBILITY SPECTRUM DISORDER / hypermobile EHLERS-DANLOS SYNDROME (hEDS). Recognise generalised joint hypermobility (assess with the BEIGHTON score, 0\u20139; 5 or more counts as generalised hypermobility between puberty and 50 in the 2017 hEDS criteria, Malfait 2017, international) and that there is NO genetic or blood test for hEDS \u2014 it is a clinical diagnosis the GP can often make with the 2017 criteria (those not meeting all criteria have hypermobility spectrum disorder, managed the same way) \u2014 and the broader multisystem picture, that it is often under-recognised and patients are frequently dismissed, and the associated features/comorbidities (chronic pain, fatigue, PoTS/autonomic dysfunction, GI dysmotility, anxiety, easy bruising, poor wound healing); be alert to RED FLAGS suggesting RARE serious EDS subtypes (e.g. VASCULAR EDS \u2014 thin translucent skin, extensive bruising, arterial/organ rupture risk, family history of sudden death/arterial events; CLASSICAL EDS \u2014 very stretchy skin with wide atrophic scars; marfanoid features, lens dislocation or aortic root dilatation) needing clinical genetics referral; check FBC and a clotting screen for the easy bruising (and FBC, ferritin, TFTs, coeliac serology for fatigue; ECG with palpitations or dizziness); check lying and standing pulse and BP (PoTS in adults: a sustained rise of 30 beats per minute or more within 10 minutes of standing without orthostatic hypotension, Heart Rhythm Society 2015, international); MANAGE holistically \u2014 validate, physiotherapy (joint stabilisation, graded strengthening, proprioception, pacing), simple analgesia and a chronic-pain approach (NICE NG193 advises against starting opioids for chronic primary pain, and opioids are best avoided for long-term hypermobility pain), manage associated PoTS/GI/mood, occupational therapy, work support (the condition may be a disability under the Equality Act 2010; fit note for adjustments), and rheumatology/hypermobility service referral where local pathways allow, or genetics if a rarer type is suspected. Validate the experience and avoid dismissiveness. Recorded findings available to the candidate (no in-person examination in this remote consultation): On video (guided): Beighton score 9/9 (palms flat to the floor with knees straight; both little fingers extend beyond 90\u00b0; both thumbs to forearm; both elbows and knees hyperextend). Practice nurse, last week: lying pulse 68, standing pulse 103 at 10 minutes with no fall in BP (lying 112/70, standing 114/72).',
    script: {
      opening: '"I\u2019ve always been really bendy \u2014 double-jointed \u2014 but now my joints keep partly dislocating and aching all the time, I bruise at the slightest thing, my skin\u2019s soft and stretchy, and I\u2019m shattered. I get dizzy standing up too. Someone said it could be Ehlers-Danlos. I\u2019ve been fobbed off a lot. What is it?"',
      facts: [
        {
          topic: 'Joints',
          text: 'Always "bendy" \u2014 did gymnastics as a child. Over the last 3 years: shoulders and kneecaps partly dislocate several times a month, usually go back by themselves. Aching joints daily, worse after activity.'
        },
        {
          topic: 'On video (if asked)',
          text: 'Can put both palms flat on the floor with knees straight, bend both little fingers back past 90 degrees, touch both thumbs to her forearms, and her elbows bend backwards. Knees bend backwards too. (A Beighton score of 9 out of 9.)'
        },
        {
          topic: 'Skin and bruising',
          text: 'Bruises easily; skin soft and "a bit stretchy", not see-through. Scars heal normally, not wide or paper-thin.'
        },
        {
          topic: 'Dizziness',
          text: 'Dizzy and heart racing when she stands, especially in the morning and in hot showers. Never fully fainted. If asked: practice nurse did a standing test last week \u2014 "my pulse went up by about 35 and my blood pressure stayed the same".'
        },
        {
          topic: 'Red-flag questions (all negative)',
          text: 'No family members with sudden early death, burst blood vessels or bowel rupture. No collapsed lung. Not unusually tall, no lens problems. No severe sudden tummy or chest pain.'
        },
        {
          topic: 'Other',
          text: 'IBS-like tummy symptoms. Heavy periods. Tired all the time. Mood: "being told it\u2019s nothing gets me down" \u2014 no self-harm. Mum is also bendy. No medicines except ibuprofen sometimes. No allergies. Works part-time as a barista.'
        },
        {
          topic: 'How to play it',
          text: 'Guarded at first, expecting to be fobbed off. Warm up if the doctor listens and believes you. Ask: "So it\u2019s real?" and "Will physio actually help?" The pain and tiredness matter most.'
        }
      ],
      ice: {
        ideas: '"I think it might be Ehlers-Danlos."',
        concerns: 'HIDDEN AGENDA \u2014 not being believed; she has been told "it\u2019s anxiety" twice and is close to giving up. Worried whether she can ever work full time.',
        expectations: '"Someone to recognise it and actually help."'
      },
      cues: [
        '"I\u2019ve been fobbed off a lot" \u2014 needs validation.',
        '"I get dizzy standing up" \u2014 possible PoTS to explore.',
        '"My mum is bendy too" (if family history is asked) \u2014 inherited pattern; check for serious-subtype red flags.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises HYPERMOBILITY SPECTRUM DISORDER / hypermobile EDS (generalised hypermobility, recurrent pain/dislocations, soft skin/easy bruising) and assesses hypermobility (Beighton score, 5 or more), knowing hEDS is a clinical diagnosis with no genetic test, taking it seriously rather than dismissing'
      },
      {
        dom: 'dg',
        text: 'Recognises the MULTISYSTEM picture/comorbidities \u2014 chronic pain, fatigue, PoTS/autonomic dysfunction (lying and standing pulse/BP), GI dysmotility, anxiety/depression, poor healing \u2014 and checks FBC and clotting for the bruising'
      },
      {
        dom: 'cm',
        text: 'Is alert to RED FLAGS for rare serious EDS subtypes (vascular EDS \u2014 arterial/organ rupture, family history of arterial events/sudden death; classical EDS \u2014 very stretchy skin with atrophic scars; marfanoid/aortic features) needing genetics referral'
      },
      {
        dom: 'cm',
        text: 'Manages HOLISTICALLY \u2014 physiotherapy (joint stabilisation, graded strengthening, proprioception, pacing), chronic-pain approach (no opioids for chronic primary pain, NICE NG193), and management of associated PoTS/GI/mood, with work support (Equality Act 2010)'
      },
      {
        dom: 'cm',
        text: 'Makes or supports the diagnosis in primary care and refers appropriately (rheumatology/hypermobility service/MDT where pathways allow; clinical genetics if a serious subtype suspected)'
      },
      {
        dom: 'ro',
        text: 'VALIDATES the experience and the sense of being repeatedly dismissed, and checks understanding of the holistic plan'
      },
      {
        dom: 'ro',
        text: 'Explores how the condition and years of not being believed have affected her daily life and mood, and agrees a realistic, prioritised plan she feels ownership of'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: serious-subtype red flags warranting urgent/specialist review, physiotherapy/pain/PoTS management, referral, and review \u2014 recognition + holistic management, not dismissal'
      }
    ],
    worked: [
      {
        lbl: 'Validate + recognise',
        txt: '"I\u2019m sorry you\u2019ve been fobbed off \u2014 what you\u2019re describing is real. Being very flexible with joints that dislocate and ache, soft stretchy skin, easy bruising and fatigue fits a hypermobility condition, possibly hypermobile Ehlers-Danlos. Let me assess your flexibility properly with a scoring system. There\u2019s no blood or genetic test for the hypermobile type \u2014 it\u2019s diagnosed with a set of clinical criteria."'
      },
      {
        lbl: 'Multisystem screen',
        txt: '"This often affects more than joints \u2014 the dizziness on standing, tummy symptoms, fatigue and mood can all be part of it. So we look at the whole picture, not just one joint."'
      },
      {
        lbl: 'Red-flag check',
        txt: '"A couple of safety questions \u2014 any family history of arteries or organs rupturing, or sudden young deaths? Very thin, see-through skin, or wide stretched scars? \u2026 No. Those would point to a rarer, more serious type needing genetics, which doesn\u2019t seem to fit you. I\u2019ll still check a blood count and clotting because of the bruising."'
      },
      {
        lbl: 'Holistic plan',
        txt: '"The cornerstone is physiotherapy \u2014 strengthening and stabilising the joints and improving control \u2014 plus pacing to avoid flares. We\u2019ll manage the pain sensibly (simple painkillers and other approaches rather than strong opioids), check your pulse and blood pressure lying and standing, and tackle the dizziness with fluids, salt, standing slowly and compression, and your mood and tummy symptoms too."'
      },
      {
        lbl: 'Refer',
        txt: '"I\u2019ll refer you to the rheumatology or hypermobility service if our local pathway allows, to coordinate care, and to genetics if anything suggests a serious subtype. If work is affected, this can count as a disability under the Equality Act, so adjustments can be made. You deserve a proper, joined-up approach."'
      },
      {
        lbl: 'Safety-net',
        txt: '"Come back if joints dislocate frequently or you can\u2019t manage the pain, and urgently for any severe sudden abdominal/chest pain. We\u2019ll build a plan around you."'
      }
    ],
    learning: 'Generalised JOINT HYPERMOBILITY with recurrent joint pain, subluxations/dislocations, soft/stretchy skin, easy bruising, poor wound healing, fatigue and often autonomic (dizziness/palpitations) and GI symptoms suggests a HYPERMOBILITY SPECTRUM DISORDER / hypermobile EHLERS-DANLOS SYNDROME (hEDS) \u2014 assessed for hypermobility with the BEIGHTON score (5 or more between puberty and 50 in the 2017 criteria, international); there is no genetic test for hEDS, which is a clinical diagnosis the GP can often make, and marked skin stretch with atrophic scars points instead to classical EDS. It is often under-recognised and patients are frequently dismissed, so take it seriously and recognise the MULTISYSTEM picture and comorbidities (chronic pain, fatigue, PoTS/autonomic dysfunction \u2014 a sustained rise of 30 beats per minute or more within 10 minutes of standing, checked with a lying-to-standing test \u2014 GI dysmotility, anxiety/depression, easy bruising needing FBC and a clotting screen, poor healing). Be alert to RED FLAGS suggesting rare but SERIOUS EDS subtypes needing specialist/genetics referral \u2014 in particular VASCULAR EDS (risk of arterial, bowel or uterine rupture; thin translucent skin, easy bruising, a family history of arterial events/sudden death) and marfanoid/aortic features \u2014 which substantially change risk and management. Manage holistically: validate the experience; physiotherapy is the cornerstone (joint stabilisation, graded strengthening, proprioception, pacing to avoid deconditioning); use a chronic-pain approach (simple analgesia; NICE NG193 advises against starting opioids for chronic primary pain; pacing, psychological support); and manage associated PoTS (fluids/salt/compression), GI symptoms and mood, with lifestyle and occupational support (the condition may be a disability under the Equality Act 2010). Refer appropriately \u2014 rheumatology/hypermobility service for MDT care where pathways allow, and clinical genetics if a serious subtype is suspected \u2014 avoiding the common pitfall of dismissing the patient.',
    knowledge: {
      guideline: 'International classification of EDS and hEDS criteria (Malfait 2017, international) \u00b7 Beighton score (international) \u00b7 Heart Rhythm Society PoTS consensus (2015, international) \u00b7 NICE NG193 Chronic pain (2021) \u00b7 Equality Act 2010 \u00b7 hypermobility spectrum disorder / hEDS: Beighton score \u00b7 multisystem comorbidities \u00b7 vascular/classical EDS red flags \u00b7 physiotherapy-led holistic management',
      points: [
        {
          h: 'Recognise',
          t: 'Generalised hypermobility + recurrent pain/dislocations + soft skin/easy bruising + fatigue/dizziness. Beighton 5 or more (2017 criteria). No genetic test \u2014 clinical diagnosis. Often under-recognised/dismissed.'
        },
        {
          h: 'Multisystem',
          t: 'Chronic pain, fatigue, PoTS (rise of 30 bpm or more within 10 min of standing), GI dysmotility, anxiety/depression, poor healing \u2014 manage holistically. FBC and clotting for bruising.'
        },
        {
          h: 'Serious-subtype red flags',
          t: 'Vascular EDS (arterial/bowel/uterine rupture, thin translucent skin, family history of arterial events/sudden death), classical EDS (very stretchy skin, atrophic scars), marfanoid/aortic features \u2192 genetics referral.'
        },
        {
          h: 'Holistic management',
          t: 'Validate; physiotherapy cornerstone (stabilisation, strengthening, proprioception, pacing); chronic-pain approach (no opioids for chronic primary pain, NICE NG193); manage PoTS/GI/mood; Equality Act 2010 work adjustments.'
        },
        {
          h: 'Refer',
          t: 'GP can often diagnose; rheumatology/hypermobility service/MDT where pathways allow; clinical genetics if a serious subtype suspected.'
        },
        { h: 'Validate', t: 'Counter the repeated dismissal; take the multisystem experience seriously.' },
        {
          h: 'Never do',
          t: 'Never dismiss hypermobility-related symptoms; never miss vascular-EDS red flags; never escalate to opioids for chronic pain; never manage joints in isolation from the multisystem picture.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Serious-subtype red flags \u2192 urgent/specialist; sudden severe chest, abdominal or head pain \u2192 urgent help; physiotherapy/pain/PoTS management; referral; review in about four weeks.'
        }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c277, c278, c279, c280);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {
    'achilles-tendinopathy': {
      ceg: ['New & undifferentiated presentations', 'Prescribing & pharmacology'],
      stem: {
        name: 'Tom Easton',
        age: '44 years \u00b7 male',
        pmh: [
          'Weeks of posterior ankle pain/stiffness, worst on starting activity/morning',
          'Tender thickened tendon ~2\u20136 cm above insertion; recent training increase',
          'Can tip-toe; Simmonds negative'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Back of my heel\u2019s stiff and painful, worst starting a run, with a tender lump on the tendon." On video (guided): tender thickened swelling about 4 cm above the right heel; can do 10 single-leg heel raises on the right (painful); with his wife squeezing the calf while he kneels on a chair, the foot plantarflexes normally on both sides; no visible gap; no swelling of other joints.',
        reason: 'Video consultation \u2014 posterior heel/ankle pain.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Recognise',
          d: 'Gradual load-related posterior pain + tender thickened tendon + training increase = tendinopathy.'
        },
        {
          t: '2\u20104',
          h: 'Exclude rupture',
          d: 'Sudden pop, can\u2019t tip-toe, gap, Simmonds/Thompson \u2192 same-day orthopaedics/fracture clinic.'
        },
        {
          t: '4\u20107',
          h: 'Risk + loading rehab',
          d: 'Fluoroquinolone/training-load review; progressive loading (eccentric) physio + load modification.'
        },
        {
          t: '7\u20109',
          h: 'No injection',
          d: 'Avoid steroid injection (rupture); refer physio/orthopaedics if refractory.'
        },
        {
          t: '9\u201012',
          h: 'Timeline + safety-net',
          d: 'Slow (about three months; review at 12 weeks); same-day A&E if rupture features.'
        }
      ],
      wordPics: {
        fail: 'Misses a rupture; injects steroid; no loading rehab; ignores fluoroquinolone/training load.',
        pass: 'Recognises tendinopathy, excludes rupture, and starts loading rehab without steroid injection.',
        exc: 'Recognises Achilles tendinopathy, excludes rupture (Simmonds), reviews risk factors, starts progressive loading rehab with load modification, avoids steroid injection, and sets a realistic timeline.'
      },
      avoid: [
        {
          dont: '(Injecting) "A steroid injection will settle it."',
          instead: '"I won\u2019t inject the tendon \u2014 it raises rupture risk; loading exercises are the treatment."',
          why: 'Steroid injection into the Achilles risks rupture.'
        },
        {
          dont: '(Missing rupture) not testing tip-toe/calf squeeze.',
          instead: '"Can you stand on tip-toes? Let me do the calf-squeeze test \u2014 to be sure it isn\u2019t a tear."',
          why: 'Acute rupture is easily missed and needs urgent referral.'
        },
        {
          dont: '(Ignoring fluoroquinolone) not asking about antibiotics.',
          instead: '"Any recent ciprofloxacin? It can affect tendons."',
          why: 'Fluoroquinolones cause tendinopathy/rupture (MHRA Drug Safety Update 2019, 2024).'
        }
      ]
    },
    'meniscal-injury': {
      ceg: ['Urgent & unscheduled care', 'New & undifferentiated presentations'],
      stem: {
        name: 'Jay Okonkwo',
        age: '27 years \u00b7 male',
        pmh: [
          'Twisting football injury (planted foot); effusion over hours',
          'Clicking/catching/giving way; \u26a0 episodes of true locking (can\u2019t fully straighten) \u2192 urgent MRI/orthopaedics',
          'Joint-line tenderness'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Twisted my knee, it swelled, clicks and catches, and sometimes locks so I can\u2019t straighten it." Urgent treatment centre discharge letter, 5 days ago: right knee moderate effusion, medial joint-line tenderness; no patellar or fibular-head tenderness; flexes beyond 90\u00b0; weight-bears 4 steps; Ottawa knee rules negative \u2014 no X-ray; ligament testing limited by pain; neurovascularly intact. On video today: walks with a limp, can fully straighten the knee.',
        reason: 'Video consultation \u2014 a twisting knee injury.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Recognise',
          d: 'Twisting + delayed effusion + joint-line tenderness + mechanical symptoms = meniscal tear.'
        },
        {
          t: '2\u20104',
          h: 'Ottawa rules',
          d: 'X-ray if age \u226555/patellar or fibular-head tenderness/can\u2019t flex 90\u00b0/can\u2019t weight-bear 4 steps.'
        },
        {
          t: '4\u20106',
          h: 'Urgent features',
          d: 'True locked knee (can\u2019t extend \u2014 bucket-handle) or ACL (immediate haemarthrosis/pop/instability) \u2192 urgent.'
        },
        {
          t: '6\u20109',
          h: 'Conservative',
          d: 'RICE/analgesia/physio (quads), activity modification; septic arthritis screen.'
        },
        {
          t: '9\u201012',
          h: 'MRI/refer + safety-net',
          d: 'Locked knee or true locking/persistent symptoms/ACL/failed conservative \u2192 MRI + orthopaedics (BASK 2019); same-day A&E if locked now.'
        }
      ],
      wordPics: {
        fail: 'Misses a true locked knee/ACL; images everyone reflexively or no plan; ignores instability.',
        pass: 'Recognises meniscal injury, applies Ottawa rules, and manages conservatively with referral if indicated.',
        exc: 'Recognises the meniscal pattern, applies Ottawa knee rules, identifies true locking/ACL needing urgent orthopaedics, manages conservatively with physio, and arranges MRI/referral where indicated.'
      },
      avoid: [
        {
          dont: '(Missing locked knee) treating true locking as routine.',
          instead: '"A knee that truly won\u2019t straighten needs urgent orthopaedics and a scan."',
          why: 'A locked (bucket-handle) knee needs urgent assessment; early repair may be possible (BASK 2019).'
        },
        {
          dont: '(Reflex imaging) X-raying without Ottawa rules.',
          instead: '"The Ottawa rules tell me whether an X-ray\u2019s needed."',
          why: 'Ottawa rules rationalise imaging.'
        },
        {
          dont: '(Ignoring ACL) overlooking immediate swelling/instability.',
          instead: '"Instant swelling with a pop and giving way suggests an ACL injury \u2014 that needs a scan and orthopaedics."',
          why: 'ACL injury changes management/urgency.'
        }
      ]
    },
    costochondritis: {
      ceg: ['Urgent & unscheduled care', 'Mental health & addiction'],
      stem: {
        name: 'Priya Nair',
        age: '32 years \u00b7 female',
        pmh: [
          'Few days sharp localised anterior chest pain, reproducible on palpation, worse on deep breathing',
          'No cardiac/resp red flags; google-fuelled cardiac fear',
          'Health anxiety'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Chest pain \u2014 terrified it\u2019s my heart \u2014 but it\u2019s sharp and worse when I press on it or breathe deeply." Urgent treatment centre, 2 days ago: ECG sinus rhythm 78, normal; BP 118/74, respiratory rate 14, SpO2 99%, temperature 36.7 \u00b0C; tender over the left 3rd\u20134th costochondral junctions reproducing the pain; chest clear; calves soft, non-tender. On video today: she reproduces the pain by pressing beside the breastbone.',
        reason: 'Video consultation \u2014 chest pain, anxious about the heart.'
      },
      timeMap: [
        { t: '0\u20102', h: 'Take seriously', d: 'Exclude the serious first so reassurance lands.' },
        {
          t: '2\u20105',
          h: 'Exclude serious',
          d: 'Cardiac/PE/pneumothorax/pneumonia/GORD; history/risk/exam; ECG if doubt; suspected ACS \u2192 emergency referral (CG95); PE \u2192 Wells/PERC (NG158).'
        },
        {
          t: '5\u20107',
          h: 'Positive diagnosis',
          d: 'Reproducible costochondral tenderness = costochondritis (but doesn\u2019t fully exclude cardiac).'
        },
        {
          t: '7\u20109',
          h: 'Grounded reassurance',
          d: 'Reassure because the serious was excluded; topical NSAID/paracetamol (checks before oral NSAID); address health anxiety.'
        },
        {
          t: '9\u201012',
          h: 'Safety-net',
          d: '999 for central/crushing/exertional pain, breathlessness, radiation, sweating, collapse.'
        }
      ],
      wordPics: {
        fail: 'Dismisses chest pain without excluding the serious, or over-investigates; fails to address the cardiac fear.',
        pass: 'Excludes the serious, makes a positive costochondritis diagnosis, and reassures with safety-netting.',
        exc: 'Takes chest pain seriously, excludes serious causes (PERC/Wells, ECG if doubt, emergency referral if ACS suspected), makes a positive costochondritis diagnosis, gives grounded reassurance addressing health anxiety, and safety-nets red flags.'
      },
      avoid: [
        {
          dont: '"It\u2019s just muscular, nothing to worry about." (without assessing)',
          instead: '"Let me check your heart and the serious causes first \u2014 then I can reassure you properly."',
          why: 'Dismissing chest pain without exclusion is unsafe and reassurance won\u2019t land.'
        },
        {
          dont: '(Over-investigating) repeated tests for a clear MSK picture with no risk.',
          instead: '"With no red flags and reproducible tenderness, this is costochondritis \u2014 endless tests would feed the anxiety."',
          why: 'Over-investigation reinforces health anxiety.'
        },
        {
          dont: '(Ignoring anxiety) ending without addressing the fear.',
          instead: '"The cardiac worry is the main thing \u2014 let\u2019s talk about that; the checks are reassuring."',
          why: 'The health anxiety is central to the consultation.'
        }
      ]
    },
    'hypermobility-eds': {
      ceg: ['New & undifferentiated presentations', 'Health disadvantage & vulnerabilities'],
      stem: {
        name: 'Niamh Carter',
        age: '24 years \u00b7 female',
        pmh: [
          'Lifelong hypermobility + recurrent pain/subluxations; soft stretchy skin (patient\u2019s words), easy bruising',
          'Fatigue; dizziness on standing (?PoTS); GI symptoms',
          'Repeatedly dismissed'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"I\u2019m really bendy, my joints dislocate and ache, I bruise easily and I\u2019m exhausted \u2014 someone said Ehlers-Danlos." On video (guided): Beighton score 9/9 (palms flat to the floor with knees straight; both little fingers extend beyond 90\u00b0; both thumbs to forearm; both elbows and knees hyperextend). Practice nurse, last week: lying pulse 68, standing pulse 103 at 10 minutes with no fall in BP (lying 112/70, standing 114/72).',
        reason: 'Video consultation \u2014 chronic joint pain in a hypermobile young adult.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Validate + recognise',
          d: 'Hypermobility + pain/dislocations + skin/bruising + fatigue = hypermobility spectrum/hEDS; Beighton score (5 or more); no genetic test.'
        },
        {
          t: '2\u20105',
          h: 'Multisystem',
          d: 'PoTS/autonomic (lying-standing test), GI, fatigue, mood, poor healing \u2014 whole picture; FBC/clotting for bruising.'
        },
        {
          t: '5\u20107',
          h: 'Red flags',
          d: 'Vascular EDS (arterial/organ rupture, family sudden death, thin skin), classical EDS (stretchy skin, atrophic scars), marfanoid \u2192 genetics.'
        },
        {
          t: '7\u201010',
          h: 'Holistic management',
          d: 'Physio (stabilise/strengthen/pace), chronic-pain approach (no opioids, NICE NG193), PoTS/GI/mood, Equality Act.'
        },
        {
          t: '10\u201012',
          h: 'Refer + safety-net',
          d: 'Rheumatology/MDT; genetics if serious subtype; urgent for severe sudden pain.'
        }
      ],
      wordPics: {
        fail: 'Dismisses the patient again; manages joints in isolation; misses vascular-EDS red flags; escalates to opioids.',
        pass: 'Recognises hypermobility/hEDS, screens multisystem features and red flags, and manages holistically with referral.',
        exc: 'Recognises hypermobility/hEDS (Beighton), screens the multisystem picture and serious-subtype red flags, manages holistically (physio/pain/PoTS/mood), refers appropriately, and validates the repeatedly-dismissed patient.'
      },
      avoid: [
        {
          dont: '"You\u2019re just hypermobile/double-jointed \u2014 lots of people are." (dismissing)',
          instead: '"Your joint problems, skin, bruising and fatigue together fit a hypermobility condition \u2014 let\u2019s assess and manage it properly."',
          why: 'Dismissing the multisystem picture repeats the harm and misses hEDS.'
        },
        {
          dont: '(Missing vascular EDS) ignoring family/skin red flags.',
          instead: '"Any family history of arteries/organs rupturing or sudden young deaths? Those need genetics."',
          why: 'Vascular EDS is serious and changes management.'
        },
        {
          dont: '(Opioid escalation) escalating to strong opioids for chronic pain.',
          instead: '"We\u2019ll use physio and a careful pain approach \u2014 strong opioids tend to harm in this."',
          why: 'Opioid escalation is harmful in chronic hypermobility pain (NICE NG193: don\u2019t start opioids for chronic primary pain).'
        }
      ]
    }
  });

})();
