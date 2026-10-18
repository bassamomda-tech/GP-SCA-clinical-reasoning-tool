/* ============================================================
   Reasoning GP — Case Library batch 75:
   New themes from "SCA revision - Cases Notes" (verified absent)
   Premature ejaculation; lateral epicondylitis (tennis elbow);
   threadworm (enterobiasis); a request about assisted dying.
   No NG12 cancer pathway applies. Load AFTER sca-cases74.js.
   ============================================================ */
(function(){

  /* ===== 269. Premature ejaculation ===== */
  const c269 = {
    id: 'premature-ejaculation',
    title: '"I came in asking for antidepressants \u2014 but really it\u2019s that I finish far too quickly in bed and it\u2019s wrecking my confidence and relationship"',
    type: 'video',
    duration: 12,
    meta: {
      age: 28,
      sex: 'M',
      setting: 'Video consultation \u2014 a young man whose stated reason masks a sexual concern',
      system: 'Sexual health / Men\u2019s health \u2014 premature ejaculation: the hidden agenda, assessment & treatment',
      checked: 'October 2026'
    },
    brief: 'Mr Ravi Anand, 28, books in "for antidepressants to feel better", but the real, embarrassing issue is PREMATURE EJACULATION (PE) \u2014 ejaculating sooner than he/his partner wishes, with distress, low confidence and relationship strain. The task is to elicit the HIDDEN AGENDA sensitively, take a non-judgemental sexual history, classify PE (LIFELONG vs ACQUIRED, ISSM definition \u2014 acquired warrants looking for a cause: erectile dysfunction, anxiety/relationship factors, prostatitis, thyroid, drugs), screen mood/anxiety (including self-harm risk, NICE NG222) and the relationship impact, offer a face-to-face genital examination and blood pressure check (with consent and a chaperone offered) where indicated, EXCLUDE/treat associated ED (often coexists and should be treated first), and offer EVIDENCE-BASED treatment: psychosexual/behavioural techniques (stop-start, squeeze), self-help, topical anaesthetics (lidocaine with prilocaine spray, licensed for lifelong PE; creams such as EMLA are off-label; wipe off excess to avoid numbing the partner), and pharmacotherapy \u2014 an SSRI (dapoxetine on-demand, licensed for men aged 18\u201364, 30 mg 1\u20133 hours before sex, no more than once in 24 hours, after an orthostatic check, avoiding alcohol and never with another SSRI or serotonergic drug; or an off-label daily SSRI) which delays ejaculation \u2014 plus involving the partner and psychosexual referral if needed (EAU 2024, international; BNF). The skill is the empathic hidden-agenda elicitation, classification, ED check, and offering effective treatment without embarrassment \u2014 not just handing over an antidepressant for "feeling low".',
    script: {
      opening: '"So\u2026 I said I wanted some antidepressants to feel better, and I have been a bit down. But honestly, that\u2019s not really why I\u2019m here. It\u2019s\u2026 god, this is embarrassing\u2026 I finish way too quickly when I\u2019m with my girlfriend, almost straight away, and it\u2019s killing my confidence and causing arguments. I didn\u2019t know how to bring it up."',
      facts: [
        {
          topic: 'The problem',
          text: 'Ejaculates "almost straight away" \u2014 within about a minute of penetration, nearly every time. Feels no control. "It\u2019s been a problem for a while" \u2014 if pressed, since his first relationship at 18, so always. Masturbation alone lasts longer.'
        },
        {
          topic: 'Erections (if asked)',
          text: '"They\u2019re fine. It\u2019s just the finishing." Morning erections normal. No pain, no discharge, no pain on ejaculation. No urinary symptoms.'
        },
        {
          topic: 'Mood (if asked)',
          text: 'A bit low for a couple of months, "mostly because of this". Sleeping and eating OK, still enjoys football and gaming. Worries about it constantly. No thoughts of self-harm or suicide. Some anxiety before sex.'
        },
        {
          topic: 'Relationship',
          text: 'Girlfriend, Priya, for 18 months. They argue about it; she said "it\u2019s like you don\u2019t care about me". He hasn\u2019t told her he was coming today.'
        },
        {
          topic: 'Health',
          text: 'Fit. No medicines, no recreational drugs. No thyroid symptoms. Alcohol at weekends, about 12 units. Non-smoker. No allergies. No fainting or dizziness on standing. No heart problems.'
        },
        { topic: 'Work and social', text: 'Works in IT support. Lives with two flatmates.' },
        {
          topic: 'How to play it',
          text: 'Start by talking about feeling down and asking for antidepressants. Disclose the real problem in the opening but hesitantly; if the doctor responds awkwardly or moves straight to depression, go quiet and accept an antidepressant. If the doctor is relaxed and non-judgemental, open up. Prefer to try techniques and a spray first.'
        }
      ],
      ice: {
        ideas: '"I thought maybe antidepressants \u2014 I read somewhere they can help with this."',
        concerns: 'HIDDEN AGENDA \u2014 "I\u2019m worried she\u2019ll leave me, and I just want to feel normal." Embarrassed and afraid there is something physically wrong.',
        expectations: '"Something that works \u2014 tablets maybe."'
      },
      cues: [
        '"That\u2019s not really why I\u2019m here" \u2014 the hidden agenda; the stated reason was cover.',
        '"It\u2019s killing my confidence" \u2014 psychological impact and mood.',
        '"I haven\u2019t told her I was coming" \u2014 involving his partner in treatment.'
      ]
    },
    checkpoints: [
      {
        dom: 'ro',
        text: 'Elicits the HIDDEN AGENDA sensitively \u2014 creating safety, picking up the hesitancy and inviting the real concern \u2014 rather than simply prescribing an antidepressant for "low mood"'
      },
      {
        dom: 'dg',
        text: 'Defines and CLASSIFIES premature ejaculation (lifelong: within about 1 minute; acquired: often about 3 minutes or less \u2014 ISSM), recognising acquired PE warrants seeking a cause (ED, anxiety/relationship, prostatitis, thyroid, drugs)'
      },
      {
        dom: 'dg',
        text: 'Screens the PSYCHOLOGICAL/relationship context \u2014 anxiety (performance), low mood (explores/treats a genuine depression and asks about self-harm, NICE NG222), and partner/relationship impact'
      },
      {
        dom: 'dg',
        text: 'Checks for coexisting ERECTILE DYSFUNCTION (treat first if present) and considers basic checks (e.g. TFTs) in acquired PE, offering a face-to-face genital examination and blood pressure check, with consent and a chaperone, where indicated'
      },
      {
        dom: 'cm',
        text: 'Offers EVIDENCE-BASED treatment \u2014 behavioural techniques (stop-start/squeeze), topical anaesthetics, and an SSRI (dapoxetine on-demand with its safety points \u2014 orthostatic check, syncope, no alcohol, no other SSRI, ages 18\u201364, once in 24 hours \u2014 or off-label daily) \u2014 with partner involvement and psychosexual referral if refractory'
      },
      {
        dom: 'ro',
        text: 'Handles an embarrassing topic with destigmatising empathy, validates the impact on confidence/relationship, and checks understanding'
      },
      {
        dom: 'ro',
        text: 'Negotiates a treatment plan he is comfortable starting (behavioural, topical or tablet), framing it as a positive and solvable issue and inviting his preference and partner involvement'
      },
      {
        dom: 'cm',
        text: 'Reaches a supportive plan: PE classified, ED addressed, mood/anxiety managed, treatment options offered with follow-up in about four weeks (mood re-screened)/psychosexual referral \u2014 the real issue treated, not an antidepressant for "feeling low"'
      }
    ],
    worked: [
      {
        lbl: 'Make it safe',
        txt: '"Thank you for telling me what\u2019s really going on \u2014 that took courage, and there\u2019s absolutely nothing to be embarrassed about. This is really common and very treatable. Let\u2019s sort it out together."'
      },
      {
        lbl: 'Classify',
        txt: '"Has it always been this way, or is it newer? \u2026 If it\u2019s changed recently I\u2019d look for a reason. And how are your erections \u2014 firm enough? Sometimes rushing because you\u2019re worried about losing the erection drives this, and we\u2019d treat that first."'
      },
      {
        lbl: 'Screen mood/anxiety',
        txt: '"You mentioned feeling a bit down \u2014 how much of that is the worry about this? Performance anxiety feeds the problem, and if there\u2019s a genuine low mood underneath we\u2019ll treat that too."'
      },
      {
        lbl: 'Behavioural + topical',
        txt: '"There are techniques that genuinely help \u2014 the \u2018stop-start\u2019 and \u2018squeeze\u2019 methods \u2014 which I\u2019ll explain, and doing them with your girlfriend helps. There\u2019s also a numbing spray for the tip of the penis a few minutes before sex \u2014 wipe off any excess so your girlfriend doesn\u2019t feel numb."'
      },
      {
        lbl: 'Medication',
        txt: '"And there\u2019s an effective tablet \u2014 a type of antidepressant called dapoxetine taken one to three hours before sex, no more than once a day, or a daily one \u2014 that delays things. It can cause dizziness or fainting, so I\u2019d check your blood pressure standing up first, and you\u2019d avoid alcohol with it. So ironically an \u2018antidepressant\u2019 may help, but for the right reason."'
      },
      {
        lbl: 'Support + refer',
        txt: '"If it\u2019s not settling, or there\u2019s a lot tied up in the relationship, a psychosexual therapist is excellent. Bring your girlfriend along if she\u2019s willing \u2014 this is a team effort, and it really does improve. Let\u2019s review in about four weeks, and if your mood gets worse or you have any thoughts of harming yourself, contact us straight away."'
      }
    ],
    learning: 'A young man presenting "for antidepressants to feel better" may be masking an embarrassing sexual concern \u2014 here PREMATURE EJACULATION (PE) \u2014 so the first skill is eliciting the HIDDEN AGENDA sensitively, creating safety and inviting the real issue rather than prescribing an antidepressant for "low mood" and missing it. PE (ISSM definition, international) is ejaculation that always or nearly always occurs within about 1 minute of penetration in LIFELONG PE, or after a bothersome reduction in latency, often to about 3 minutes or less, in ACQUIRED PE, with a lack of control and DISTRESS (EAU also describes variable and subjective PE, managed with reassurance); classify LIFELONG versus ACQUIRED, as acquired PE warrants seeking a cause (erectile dysfunction, performance anxiety/relationship factors, prostatitis, thyroid dysfunction, drugs). Screen the psychological and relationship context (anxiety, low mood \u2014 exploring/treating genuine depression \u2014 and partner impact), and crucially check for coexisting ERECTILE DYSFUNCTION, which commonly accompanies PE and should generally be treated first (rushing to ejaculate before losing the erection can drive PE), with basic checks such as TFTs where indicated, a face-to-face genital examination and blood pressure check, with consent and a chaperone offered, where indicated, and a proper depression assessment including self-harm risk (NICE NG222). Offer evidence-based treatment: behavioural/psychosexual techniques (stop-start and squeeze), self-help and partner involvement; topical anaesthetics (lidocaine with prilocaine spray, licensed for lifelong PE; creams such as EMLA off-label; wipe off excess to protect the partner); and pharmacotherapy \u2014 an SSRI delays ejaculation (dapoxetine on-demand, licensed for PE in men aged 18\u201364, 30 mg 1\u20133 hours before sex, no more than once in 24 hours, after an orthostatic check, without alcohol or another SSRI/serotonergic drug; or off-label daily SSRIs; BNF) \u2014 with psychosexual referral for refractory cases or significant relationship/psychological factors. The skill is the empathic hidden-agenda elicitation, classification, ED check and offering effective, destigmatised treatment (EAU 2024, international; ISSM 2014; BNF; NICE NG222; BSSM 2018).',
    knowledge: {
      guideline: 'EAU Guidelines on Sexual and Reproductive Health (2024, international) \u00b7 ISSM definition of PE (Serefoglu, J Sex Med 2014, international) \u00b7 NICE NG222 Depression in adults (2022) \u00b7 BSSM erectile dysfunction guideline (Hackett 2018) \u00b7 premature ejaculation: hidden agenda \u00b7 lifelong vs acquired \u00b7 treat coexisting ED \u00b7 behavioural + topical anaesthetic + SSRI (dapoxetine) \u00b7 psychosexual referral',
      points: [
        {
          h: 'Hidden agenda',
          t: 'Stated reason ("antidepressants/low mood") may mask PE. Create safety, pick up hesitancy, invite the real issue \u2014 don\u2019t just prescribe for low mood.'
        },
        {
          h: 'Define & classify',
          t: 'ISSM: lifelong within about 1 minute; acquired a bothersome reduction, often to about 3 minutes or less; with lack of control and distress. Lifelong vs acquired; acquired warrants seeking a cause (ED, anxiety, prostatitis, thyroid, drugs).'
        },
        {
          h: 'Screen context',
          t: 'Performance anxiety, low mood (assess per NICE NG222 including self-harm risk; treat genuine depression), and partner/relationship impact \u2014 PE and anxiety/mood interact.'
        },
        {
          h: 'Check ED first',
          t: 'ED commonly coexists and should generally be treated first (PDE5 inhibitor, cardiovascular risk; BSSM 2018). Consider TFTs in acquired PE. Genital exam and BP with consent and chaperone offered.'
        },
        {
          h: 'Behavioural & topical',
          t: 'Stop-start and squeeze techniques, self-help, partner involvement; topical lidocaine with prilocaine spray (licensed for lifelong PE; creams such as EMLA off-label); wipe off excess to protect the partner.'
        },
        {
          h: 'Pharmacotherapy',
          t: 'SSRI delays ejaculation \u2014 dapoxetine on-demand (licensed 18\u201364; 30 mg 1\u20133 h before sex, max once in 24 h; orthostatic check, syncope risk, no alcohol, no other SSRI/serotonergic drug; BNF) or off-label daily SSRI. Psychosexual referral if refractory.'
        },
        {
          h: 'Never do',
          t: 'Never prescribe an antidepressant for "low mood" while missing the real concern; never skip the ED check; never treat without addressing the relationship/psychological context.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Review response and side effects in about four weeks; re-screen mood; treat ED/mood; partner involvement; psychosexual referral for refractory/relationship factors.'
        }
      ]
    }
  };

  /* ===== 270. Lateral epicondylitis (tennis elbow) ===== */
  const c270 = {
    id: 'tennis-elbow',
    title: '"The outer side of my elbow\u2019s been painful for weeks \u2014 it hurts to grip, lift the kettle or shake hands"',
    type: 'video',
    duration: 12,
    meta: {
      age: 46,
      sex: 'M',
      setting: 'Video consultation \u2014 lateral elbow pain (self-examination guided on camera)',
      system: 'MSK \u2014 lateral epicondylitis (tennis elbow): recognition & conservative care',
      checked: 'October 2026'
    },
    brief: 'Mr Greg Holloway, 46 (manual/repetitive forearm use), has weeks of pain over the LATERAL epicondyle of the elbow, worse with GRIPPING, lifting and resisted wrist/finger EXTENSION, with local tenderness \u2014 LATERAL EPICONDYLITIS (tennis elbow), an overuse tendinopathy of the common extensor origin. Recognise it clinically (lateral elbow pain, tender lateral epicondyle, pain on resisted wrist extension/Cozen\u2019s test, provoked by gripping), distinguish from medial epicondylitis (golfer\u2019s), radial tunnel syndrome/posterior interosseous nerve entrapment (finger-drop weakness is urgent), referred cervical/neuro pain, elbow OA and inflammatory or septic arthritis, checking the elbow and neck by guided self-examination on video (with face-to-face examination if any doubt, e.g. finger-drop weakness or a hot joint); MANAGE conservatively \u2014 it is largely self-limiting (about 89% improve within a year without active treatment, Ikonen 2022): activity modification/load management without complete rest, topical NSAIDs for pain for up to about 4 weeks (oral NSAID evidence conflicting; dose per BNF), a forearm/counterforce strap (may be offered but may not help), physiotherapy with progressive ECCENTRIC/extensor loading exercises (strongly recommended), ergonomic advice and a fit note for amended duties if needed (BESS pathway, Singh 2023); counsel realistic (slow) recovery; corticosteroid injection gives short-term relief but worse outcomes at a year and more recurrence (Coombes 2013), and BESS advises against it; refer to MSK/orthopaedics for refractory cases (shockwave only with special arrangements, NICE HTG201). Reassure and safety-net. Recorded findings available to the candidate (no in-person examination in this remote consultation): On video (guided self-examination): tenderness at the lateral epicondyle on his own pressure; pain at the lateral elbow on resisted wrist extension against his other hand; full elbow flexion and extension; can extend all fingers and the thumb normally; neck movements full and pain-free.',
    script: {
      opening: '"The outside of my right elbow\u2019s been sore for a few weeks now \u2014 it really hurts when I grip things, lift the kettle, or even shake hands. I didn\u2019t injure it; it just came on. I do a lot of repetitive work with my hands. What is it, and will it settle?"',
      facts: [
        {
          topic: 'The pain',
          text: 'Right (dominant) elbow, about 8 weeks. Points on camera to the bony bit on the outside of the elbow; sometimes aches down the back of the forearm. Worse gripping, lifting the kettle, turning a screwdriver, shaking hands.'
        },
        {
          topic: 'On video (if asked)',
          text: 'Presses the outer bony point himself: "Ow \u2014 that\u2019s it." Holding his arm straight, palm down, and lifting the back of his hand against his other hand: "That hurts right on the spot." Full elbow bending and straightening. Can lift and spread his fingers normally.'
        },
        {
          topic: 'Negatives (if asked)',
          text: 'No injury. No neck pain, no tingling or numbness in the hand, no weakness lifting the fingers. Elbow not hot, red or swollen. No fever. No other joints affected, no morning stiffness, no psoriasis.'
        },
        {
          topic: 'Work',
          text: 'Plasterer \u2014 self-employed. Uses a trowel and hawk all day. Busy period; worried about losing income. Does not play racquet sports.'
        },
        {
          topic: 'Health and medicines',
          text: 'Fit and well. "Nothing much" \u2014 the odd paracetamol. No stomach ulcers, no asthma, no kidney problems. No allergies.'
        },
        {
          topic: 'How to play it',
          text: 'Practical, a bit impatient. Ask "How long will it take?" and "What about an injection? I\u2019ve heard about those \u2014 my mate had one." Accept the explanation that injections may make it worse in the long run, and that you\u2019d "rather do it properly". Interested in a strap.'
        }
      ],
      ice: {
        ideas: '"I thought it was the work \u2014 repetitive strain."',
        concerns: '"How long it\u2019ll last and whether I can keep working \u2014 I don\u2019t get sick pay."',
        expectations: '"A steroid injection, like my mate had, to get me back to work."'
      },
      cues: [
        '"I do a lot of repetitive work with my hands" \u2014 load management at work.',
        '"What about an injection?" \u2014 expectation to discuss honestly.',
        '"I don\u2019t get sick pay" (if work is explored) \u2014 practical support and a fit note if needed.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises LATERAL EPICONDYLITIS (tennis elbow) \u2014 lateral elbow pain, tender lateral epicondyle, pain on gripping and resisted wrist/finger extension, from repetitive use without acute injury'
      },
      {
        dom: 'dg',
        text: 'Distinguishes it from medial epicondylitis, radial tunnel syndrome/posterior interosseous nerve entrapment (finger-drop weakness), referred cervical/neuro pain, elbow OA and septic/inflammatory arthritis \u2014 checking the neck and elbow by guided self-examination on video, with an in-person examination if any doubt \u2014 recognising imaging is not routinely needed'
      },
      {
        dom: 'cm',
        text: 'Manages conservatively \u2014 load management/activity modification without complete rest, topical NSAIDs (up to about 4 weeks), a forearm strap (may not help), and physiotherapy with progressive ECCENTRIC strengthening \u2014 with ergonomic advice (BESS 2023)'
      },
      {
        dom: 'cm',
        text: 'Explains that corticosteroid injection is NOT recommended (short-term relief but poorer outcomes and more recurrence at a year, Coombes 2013; BESS 2023) and refers for refractory cases'
      },
      {
        dom: 'ro',
        text: 'Sets realistic expectations about the slow but favourable (months; about 9 in 10 improve within a year) course, acknowledges the impact on grip/work, and checks understanding of the exercise/brace plan'
      },
      {
        dom: 'ro',
        text: 'Acknowledges the impact on his manual work and everyday grip tasks, and explores what he needs to keep doing, tailoring the load-management advice to his job and offering a fit note for amended duties if needed'
      },
      {
        dom: 'ro',
        text: 'Negotiates a realistic self-management plan (brace and progressive exercises), gives clear explained instructions, and checks he is confident to carry it out'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: review if not improving, escalate (physio/orthopaedics) if refractory, and reconsider for atypical/neurological features (numbness, weakness, finger drop, hot swollen elbow, fever) \u2014 conservative-first management'
      }
    ],
    worked: [
      {
        lbl: 'Name it',
        txt: '"This is tennis elbow \u2014 an overuse strain of the tendons on the outer elbow where they attach to the bone. The repetitive gripping work has set it off, and that\u2019s why gripping and shaking hands hurt. It\u2019s not serious and it does settle."'
      },
      {
        lbl: 'Honest timeline',
        txt: '"I\u2019ll be upfront \u2014 it can be slow, often a few months, but around nine in ten people have improved within a year, exercises help it along, and we don\u2019t usually need scans."'
      },
      {
        lbl: 'Conservative plan',
        txt: '"The mainstays are easing the aggravating gripping where you can without resting it completely, an anti-inflammatory gel for the first few weeks, a forearm strap if it helps you (it doesn\u2019t for everyone), and \u2014 most importantly \u2014 physiotherapy with specific strengthening exercises that actually help the tendon heal. I\u2019ll refer you for those."'
      },
      {
        lbl: 'Injections honestly',
        txt: '"A steroid injection can ease it for a few weeks, but studies show people who have one are less likely to have recovered at a year and more likely to have it come back \u2014 so I don\u2019t recommend it."'
      },
      {
        lbl: 'Ergonomics',
        txt: '"Let\u2019s look at your work technique and tools too, since that\u2019s the driver \u2014 small changes reduce the strain, like lifting palm-up and using thicker handles. If work is hard to manage, I can give you a fit note suggesting adjusted duties."'
      },
      {
        lbl: 'Safety-net',
        txt: '"Come back if it\u2019s not improving with the exercises and brace, or if you get pins and needles, neck symptoms, weakness or trouble straightening your fingers, or a hot swollen elbow or fever \u2014 that would make me think again. Otherwise, patience and the exercises will get you there."'
      }
    ],
    learning: 'LATERAL EPICONDYLITIS (tennis elbow) is an overuse TENDINOPATHY of the common extensor origin at the lateral epicondyle, recognised by lateral elbow pain with local tenderness, worse on GRIPPING/lifting and resisted wrist/finger EXTENSION (e.g. positive Cozen\u2019s test), typically from repetitive forearm use and coming on without acute injury. Distinguish it from medial epicondylitis (golfer\u2019s elbow), radial tunnel syndrome (more distal, no point epicondyle tenderness), referred cervical/neurological pain (neck symptoms, paraesthesiae) and elbow osteoarthritis (older, stiffness/crepitus) \u2014 clinical features usually suffice and imaging is not routinely needed. Finger-drop weakness suggests posterior interosseous nerve entrapment and is urgent; a hot swollen joint suggests septic or inflammatory arthritis. Manage conservatively, as it is largely self-limiting over months (about 89% improve within a year without active treatment, Ikonen 2022): load management/activity modification without complete rest (reduce aggravating gripping), topical NSAIDs for up to about 4 weeks, a forearm (counterforce) strap that may be offered but may not help, and physiotherapy with progressive ECCENTRIC strengthening exercises, plus ergonomic advice on tools and technique and a fit note for amended duties where needed \u2014 these are first-line (BESS pathway, Singh 2023). A corticosteroid injection may give short-term relief but worse outcomes at a year (recovery 83% vs 96% with placebo, recurrence 54% vs 12%, Coombes, JAMA 2013), so BESS advises against it; refer to MSK/orthopaedic services for refractory cases after several months of well-done exercise-based care (shockwave only with special arrangements, NICE HTG201). Set realistic, slow-recovery expectations, reassure about the favourable course, and safety-net for atypical/neurological features that would prompt reconsideration.',
    knowledge: {
      guideline: 'BESS patient care pathway: tennis elbow (Singh, Shoulder Elbow 2023) \u00b7 Coombes, JAMA 2013 \u00b7 Smidt, Lancet 2002 \u00b7 Ikonen, Clin Orthop Relat Res 2022 \u00b7 NICE HTG201 shockwave therapy for refractory tennis elbow (2009) \u00b7 NICE HTG299 autologous blood injection for tendinopathy (2013) \u00b7 lateral epicondylitis (tennis elbow): clinical diagnosis \u00b7 load management + eccentric physiotherapy \u00b7 corticosteroid injection not recommended',
      points: [
        {
          h: 'Recognise',
          t: 'Lateral elbow pain, tender lateral epicondyle, pain on gripping and resisted wrist/finger extension (Cozen\u2019s), repetitive use, no acute injury.'
        },
        {
          h: 'Differential',
          t: 'Medial epicondylitis (golfer\u2019s), radial tunnel syndrome/PIN entrapment (finger-drop weakness urgent), referred cervical/neuro pain, elbow OA/loose bodies, septic or inflammatory arthritis. Clinical diagnosis; X-ray only if uncertain.'
        },
        {
          h: 'Conservative care',
          t: 'Load management without complete rest, topical NSAIDs up to about 4 weeks, forearm strap (may not help), physiotherapy with progressive eccentric strengthening (strongly recommended), ergonomic advice, fit note for amended duties. About 89% improve within a year.'
        },
        {
          h: 'Injections',
          t: 'Corticosteroid injection: short-term relief but poorer outcomes at a year (83% vs 96% recovery; recurrence 54% vs 12%, Coombes 2013) \u2014 BESS 2023 advises against it; not first-line.'
        },
        {
          h: 'Escalation',
          t: 'Refer (MSK/orthopaedics) for refractory cases after several months of exercise-based care; shockwave only with special arrangements (NICE HTG201); rarely surgery.'
        },
        {
          h: 'Expectations',
          t: 'Slow but favourable course (months); reassure most recover with conservative measures.'
        },
        {
          h: 'Never do',
          t: 'Never image routinely; never miss radial tunnel/cervical/neuro causes; never offer a steroid injection as the fix; never advise complete rest.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Review if not improving after a few months of exercises; escalate if refractory; reconsider for neurological/atypical features (finger drop, hot swollen joint, fever).'
        }
      ]
    }
  };

  /* ===== 271. Threadworm (enterobiasis) ===== */
  const c271 = {
    "id": "threadworm",
    "title": "“They’re back for the third time — I need tablets for all of us this time, me included”",
    "type": "video",
    "duration": 12,
    "meta": {
      "age": 6,
      "sex": "F",
      "setting": "Video consultation — a mother about her 6-year-old daughter; she would like to discuss the whole family.",
      "system": "Child health / Infection — recurrent threadworm: household treatment, pregnancy and under-2s, temporary accommodation and a proportionate safeguarding question",
      "checked": "October 2026"
    },
    "brief": "Nadia Haddad, 27, joins a video call about Leila, 6, who has an itchy bottom at night again, with tiny white threads seen on her stool and around her bottom. This is the third time in four months. Twice the pharmacy sold mebendazole “for the children”, but nobody else was treated and Nadia did not know about hygiene measures. The family has been in emergency temporary accommodation for nine weeks: one room in a hostel, with a bathroom and toilet shared with other residents on the corridor, no washing machine, and a launderette that costs money. Nadia is 22 weeks pregnant (in her own record, not Leila’s) and has a son, Sami, 18 months. She is itchy herself. She wants tablets for everyone, including herself and Sami. Only if the doctor asks gently about worries or about the shared bathroom does she say that Leila is frightened to go to the toilet at night because unfamiliar men use the corridor, and she asks quietly whether the soreness “down there” could mean “someone has done something”. There has been no disclosure, no behaviour change other than fear of the night-time toilet, no bleeding or discharge. The task: confirm the picture and the reason for recurrence; treat correctly by age and pregnancy (mebendazole for household members aged 2 and over, off-label consideration for Sami at 18 months, hygiene measures alone for 6 weeks for the pregnant mother); give realistic hygiene advice for a shared bathroom; take the safeguarding question seriously and proportionately; and act on the housing (families with children should not be in shared-facility B&B-type accommodation beyond 6 weeks), with midwife and health visitor involvement.",
    "script": {
      "opening": "“The worms are back. Third time. The chemist keeps giving me tablets for the kids and they just come back. I need tablets for all of us this time — me too, I’m itching as well.”",
      "facts": [
        {
          "topic": "Who is on the call",
          "text": "Nadia with Leila, 6, on the bed beside her in a small room. Sami, 18 months, is asleep in a travel cot behind them."
        },
        {
          "topic": "Leila’s symptoms",
          "text": "Itchy bottom at night for a week, waking her up. Nadia saw tiny white moving threads on the toilet paper and on her bottom with a torch. Leila is sore from scratching, a bit red between the cheeks and at the front. No bleeding, no discharge, no pain on passing urine, eating well, no tummy pain, no weight loss."
        },
        {
          "topic": "Previous treatment",
          "text": "Twice in four months the pharmacy sold a single chewable tablet for Leila (and once for Sami, who was refused because he was under 2). Nobody else was treated. No one explained hygiene or a second dose."
        },
        {
          "topic": "Housing",
          "text": "Nine weeks in emergency temporary accommodation after leaving a privately rented flat with mould. One room for the three of them; shared bathroom and toilet on the corridor with other residents; no washing machine; the launderette costs £5 a load. The council said it was “for a couple of weeks”."
        },
        {
          "topic": "Nadia’s own health (only if asked about pregnancy or breastfeeding)",
          "text": "22 weeks pregnant, seeing the midwife. Not breastfeeding. Itching around her own bottom for a few days."
        },
        {
          "topic": "The worry (only if asked gently what else is on her mind)",
          "text": "“The men on the corridor use the same toilet. Leila is scared to go at night on her own. She’s sore at the front too. Could it be… could someone have done something to her?” Leila has said nothing worrying; she is never left alone in the shared bathroom; no change in behaviour except fear of the corridor at night."
        },
        {
          "topic": "How to play it",
          "text": "Tired and anxious, apologetic about the room. Relieved if the doctor explains why worms keep coming back without blame. Becomes quiet when the safeguarding worry comes up; grateful if it is taken seriously but not catastrophised. Very keen on any letter that might help with housing."
        }
      ],
      "ice": {
        "ideas": "“The tablets don’t work properly, or we keep catching them from the other people here.”",
        "concerns": "HIDDEN AGENDA: that Leila’s soreness means she has been abused by someone on the corridor; also shame about the room, and worry about taking tablets in pregnancy.",
        "expectations": "“Tablets for all of us, including me and the baby. And I want to know she’s safe.”"
      },
      "cues": [
        "“Third time” — recurrence: reinfection because the household was not treated together and hygiene measures were not explained.",
        "“Me too” — ask about pregnancy and breastfeeding before offering medicines.",
        "A small room with a travel cot and a shared bathroom — temporary accommodation and what is realistic.",
        "Hesitation about “anything else” — the safeguarding worry."
      ]
    },
    "checkpoints": [
      {
        "dom": "dg",
        "text": "Confirms the typical features (nocturnal perianal itch, worms seen) and asks about red flags and vulval symptoms; explains that threadworm can cause vulval itching in girls"
      },
      {
        "dom": "dg",
        "text": "Asks about pregnancy and breastfeeding and the ages of all household members before recommending treatment"
      },
      {
        "dom": "cm",
        "text": "Recommends treating all household members at the same time: mebendazole for those aged 2 and over (single dose, repeat after 2 weeks if infection persists; check the SPC/local formulary), considers off-label use for Sami at 18 months, and advises hygiene measures alone for 6 weeks for the pregnant mother"
      },
      {
        "dom": "cm",
        "text": "Gives practical hygiene advice for 6 weeks adapted to a shared bathroom and no washing machine (nails short, handwashing and nail scrubbing, morning bath or wash of the perianal area, close-fitting underwear at night, separate towels, damp-dusting)"
      },
      {
        "dom": "dg",
        "text": "Explores the safeguarding worry calmly: who has access, any disclosure, behaviour change, bleeding or discharge; explains that threadworm can explain the soreness but that the worry is valid"
      },
      {
        "dom": "cm",
        "text": "Makes a proportionate safeguarding plan: no current indicators of abuse, safety planning for night-time toilet use, clear routes if anything is disclosed, discussion with the practice safeguarding lead and health visitor"
      },
      {
        "dom": "cm",
        "text": "Acts on the housing: offers a letter supporting a move (families with children should not be in shared-facility B&B-type accommodation for more than 6 weeks), and informs the midwife and health visitor with consent"
      },
      {
        "dom": "ro",
        "text": "Avoids blame, involves Leila appropriately, checks understanding and safety-nets (persistent symptoms, abdominal pain, weight loss, vaginal discharge or bleeding, any disclosure)"
      }
    ],
    "worked": [
      {
        "lbl": "Why it keeps coming back",
        "txt": "“The tablet kills the worms but not the eggs, and the eggs get onto fingers and back into mouths. So if only one person is treated and there’s no hand-washing routine, the eggs just go round again. It isn’t about the room being dirty.”"
      },
      {
        "lbl": "Pregnancy check",
        "txt": "“Before I suggest any tablets for you: is there any chance you’re pregnant, or breastfeeding?”"
      },
      {
        "lbl": "Who gets what",
        "txt": "“Leila gets a tablet now, and a second one in two weeks if she’s still itchy. Sami is under 2, so I’ll prescribe it for him, which is off-licence but commonly done. For you, because you’re pregnant, the advice is no tablet: the hand-washing routine for six weeks does the job.”"
      },
      {
        "lbl": "Realistic hygiene",
        "txt": "“Short nails, scrub under them, hands washed after the toilet and before food. A quick wash of her bottom each morning in the room with a bowl is fine. Tight pants at night. Your own towels, not the shared ones.”"
      },
      {
        "lbl": "The worry",
        "txt": "“You were right to tell me. Worms often make girls sore at the front as well, so this fits. Has she said anything, or changed in any way? If she ever does, you call me or 999. I’d also like our safeguarding lead and the health visitor to know you’re in shared accommodation.”"
      },
      {
        "lbl": "Housing",
        "txt": "“A family with children shouldn’t be in a room with a shared bathroom for more than six weeks. I’ll write a letter you can give the council saying why this matters for your health and the children’s.”"
      }
    ],
    "learning": "Recurrent threadworm is usually reinfection, not treatment failure. Mebendazole kills the worms but not the eggs, which survive on hands, nails, bedding and surfaces for up to two weeks, so the whole household should be treated at the same time and everyone should follow hygiene measures for 6 weeks. CKS: offer mebendazole to household members aged 2 and over as a single dose, repeated after 2 weeks if infection persists (check the SPC/local formulary); children aged 6 months to 2 years can be treated off-label; pregnant women (especially in the first trimester), breastfeeding women and children under 6 months should use hygiene measures alone for 6 weeks. Always ask about pregnancy and breastfeeding before advising treatment for adults. Threadworm commonly causes vulval itching and soreness in girls, but a parent’s worry about sexual abuse must be explored calmly and taken seriously: ask about disclosure, behaviour change, bleeding, discharge and who has access, and know when to discuss with the safeguarding lead or refer. Families in temporary accommodation with shared facilities face real barriers to hygiene advice, so adapt it to what is possible. In England, B&B-type accommodation with shared facilities should not be used for families with children for more than 6 weeks (Homelessness (Suitability of Accommodation) Order 2003), so a supporting letter and involvement of the health visitor and midwife are part of good care. UKHSA guidance sets no exclusion from school for threadworm.",
    "knowledge": {
      "guideline": "[1] NICE CKS Threadworm (check current version) · [2] Product SPC for mebendazole (licensed age range and pregnancy) · [3] UKHSA Health protection in children and young people settings, including education (exclusion table) · [4] Homelessness (Suitability of Accommodation) (England) Order 2003 and the Homelessness Code of Guidance for Local Authorities · [5] Working together to safeguard children (2023) · [6] GMC Protecting children and young people (2012, updated 2018)",
      "summary": "Third episode of threadworm in a 6-year-old, because the household was never treated together and hygiene measures were not explained. The mother is 22 weeks pregnant and her son is 18 months. They live in one room with a shared bathroom. Treat by age and pregnancy, adapt hygiene advice to the accommodation, explore the mother’s worry about abuse proportionately, and support a move with a housing letter and the health visitor and midwife.",
      "points": [
        {
          "h": "Diagnosis",
          "t": "Nocturnal perianal itch and visible worms are enough. The tape test is rarely needed. In girls, threadworm can cause vulval itch and soreness [1]."
        },
        {
          "h": "Why it recurs",
          "t": "Eggs are not killed by mebendazole and survive up to 2 weeks outside the body. Untreated household members and no hygiene routine lead to reinfection."
        },
        {
          "h": "Who to treat",
          "t": "Treat all household members at the same time. Mebendazole as a single dose for those aged 2 and over, repeated after 2 weeks if infection persists. Children aged 6 months to 2 years: off-label treatment can be prescribed. Check the SPC/local formulary for doses [1,2]."
        },
        {
          "h": "Pregnancy and breastfeeding",
          "t": "Pregnant women (especially in the first trimester), breastfeeding women and children under 6 months: hygiene measures alone for 6 weeks [1]. Always ask about pregnancy before treating an adult."
        },
        {
          "h": "Hygiene measures (6 weeks)",
          "t": "Short nails, nail scrubbing, handwashing after the toilet and before food, a morning bath or wash of the perianal area, close-fitting underwear at night, own towels, and washing bedding and damp-dusting at the start. Adapt to the family’s facilities."
        },
        {
          "h": "Safeguarding, proportionately",
          "t": "Threadworm explains vulval soreness, but a parent’s concern about abuse must be explored: disclosure, behaviour change, bleeding, discharge, access by unrelated adults. Discuss with the safeguarding lead if concerns remain; refer if there are indicators [5,6]."
        },
        {
          "h": "Temporary accommodation",
          "t": "B&B-type accommodation with shared facilities should not be used for families with children for more than 6 weeks in England [4]. A GP letter describing the health impact can support the family’s case."
        },
        {
          "h": "School",
          "t": "No exclusion from school for threadworm [3]."
        }
      ]
    }
  };

  /* ===== 272. Assisted dying request ===== */
  const c272 = {
    id: 'assisted-dying-request',
    title: '"I\u2019ve got a terminal diagnosis and I want help to end my life when the time comes \u2014 will you help me, doctor?"',
    type: 'video',
    duration: 12,
    meta: {
      age: 67,
      sex: 'M',
      setting: 'Video consultation \u2014 a patient with terminal illness raising assisted dying',
      system: 'Ethics / Palliative care \u2014 a request for assisted dying: law, exploration & support',
      checked: 'October 2026'
    },
    brief: 'Mr Harold Vance, 67, with terminal cancer (the primary site is not recorded here), asks his GP directly to "help me end my life when the time comes". The task is a sensitive ETHICS/palliative consultation: respond with COMPASSION and without judgement; EXPLORE what lies behind the request (fear of suffering/pain, loss of dignity/control, being a burden, uncontrolled symptoms, DEPRESSION/hopelessness, existential distress) \u2014 such requests are often a cry for help or reflect treatable distress; be HONEST about the LAW \u2014 in England and Wales, encouraging or assisting suicide remains a criminal offence under section 2 of the Suicide Act 1961 (the DPP prosecution policy, 2010, updated 2014, lists acting as a doctor with the person in their care as a factor favouring prosecution); the Terminally Ill Adults (End of Life) Bill 2026\u201327 was defeated at Commons second reading on 11 September 2026 by 286 votes to 270 (Politics.co.uk, 11 September 2026), so as of October 2026 the law is unchanged \u2014 check the current legal position; a doctor cannot lawfully assist a patient to end their life, and must not act on or encourage it, limiting information to explaining that it is an offence (GMC guidance on a patient seeking advice about assistance to die); do NOT abandon the patient \u2014 reassure that you will not stop caring for him, address the modifiable drivers (excellent SYMPTOM control/PALLIATIVE care, treat depression, psychological/spiritual support, ADVANCE CARE PLANNING about future treatment/place of care, the lawful choices he does have \u2014 refusing any treatment, an advance decision to refuse treatment, ReSPECT and preferred place of care (Mental Capacity Act 2005) \u2014 and reassurance that symptom relief given in proportion to need is lawful and he will not be left to suffer), assess RISK (suicidality, plans, means including stockpiled medicines; no risk scores, NICE NG225), capacity and any pressure from others, keep his disclosure confidential within the care team with his agreement, and discuss with the palliative care team or a senior colleague. The skill is compassionate exploration, honest legal position, not abandoning the patient, and addressing the underlying distress \u2014 not a moralising refusal or false promise.',
    script: {
      opening: '"Doctor, you know my cancer\u2019s terminal now. I\u2019ve thought about this a lot \u2014 when things get bad, I don\u2019t want to suffer or be a burden, I want to go on my own terms. So I\u2019m asking you directly: will you help me end my life when the time comes?"',
      facts: [
        {
          topic: 'The illness',
          text: 'Pancreatic cancer with liver spread, diagnosed 4 months ago; finished palliative chemotherapy last month \u2014 "they said there\u2019s nothing more to do, maybe months". Not yet seen by the hospice team.'
        },
        {
          topic: 'Symptoms (if asked)',
          text: 'Gnawing back pain most nights, "a 6 out of 10" \u2014 taking paracetamol and the codeine he was given, which constipates him badly. Poor appetite, weight falling. Tired. Nausea in the mornings. "There are things that bother me. I try not to make a fuss."'
        },
        {
          topic: 'What he fears',
          text: '"Lying there with people doing everything for me." Watched his wife die of bowel cancer 6 years ago in hospital, in pain, "nothing like the films". Fears losing control and dignity, and being a burden on his daughter.'
        },
        {
          topic: 'Mood (if asked)',
          text: '"Up and down. Some days I wonder what the point is." Sleeping poorly. Has stopped going to the bowls club. If asked directly: no plan to end his life now and has not stockpiled tablets \u2014 "I mean later, when it\u2019s bad". No one is pressuring him: "This is my own thinking."'
        },
        {
          topic: 'Family and social',
          text: 'Widower. Lives alone in a bungalow. Daughter, Claire, lives 30 minutes away, has two young children and works full time. Son in Australia. Retired engineer. Has read about assisted dying in the news and about Switzerland.'
        },
        {
          topic: 'Planning',
          text: 'Has not made an advance decision or a lasting power of attorney. Hasn\u2019t discussed where he would want to die. Would like to stay at home if possible.'
        },
        {
          topic: 'How to play it',
          text: 'Calm, dignified, direct; you have rehearsed the question. If the doctor is shocked, evasive or lectures about the law, become withdrawn: "So that\u2019s it, then." If the doctor is honest that they cannot help you die but promises not to abandon you and asks what you are afraid of, open up about your wife\u2019s death and the pain. Accept palliative care involvement if offered: "Maybe. If it helps."'
        }
      ],
      ice: {
        ideas: '"I want to go on my own terms, before it gets bad."',
        concerns: 'HIDDEN AGENDA \u2014 fear of dying as his wife did (in pain, in hospital, without dignity) and of being a burden on Claire. Uncontrolled pain and low mood are feeding the request.',
        expectations: '"For you to say you\u2019ll help when the time comes." Underneath, he wants to know he won\u2019t be left to suffer.'
      },
      cues: [
        '"I don\u2019t want to suffer or be a burden" \u2014 explore what lies behind the request.',
        '"Some days I wonder what the point is" (if mood is asked) \u2014 screen for depression and suicide risk.',
        '"I watched my wife die" (if fears are explored) \u2014 the experience driving his fear; address symptom control and planning.'
      ]
    },
    checkpoints: [
      {
        dom: 'ro',
        text: 'Responds to the request with COMPASSION and without judgement/alarm \u2014 acknowledging how hard it is to raise \u2014 rather than a brisk refusal or moralising'
      },
      {
        dom: 'dg',
        text: 'EXPLORES what lies behind the request (fear of suffering/pain, loss of dignity/control, being a burden, uncontrolled symptoms, depression/hopelessness, existential distress), recognising it is often a cry for help/treatable distress'
      },
      {
        dom: 'cm',
        text: 'Is HONEST and clear that encouraging or assisting suicide remains a criminal offence in England and Wales (Suicide Act 1961 s2; DPP policy 2010, updated 2014; the Terminally Ill Adults (End of Life) Bill 2026\u201327 was defeated at Commons second reading on 11 September 2026 (Politics.co.uk) \u2014 check the current legal position) and that a doctor cannot lawfully assist \u2014 delivered gently and factually, not as a rejection'
      },
      {
        dom: 'ro',
        text: 'Reassures that he will NOT be abandoned \u2014 committing to continued care and the explicit promise that he will not be left to suffer'
      },
      {
        dom: 'cm',
        text: 'Addresses the modifiable drivers \u2014 optimised symptom control/PALLIATIVE care, screening/treating DEPRESSION, psychological/spiritual support, ADVANCE CARE PLANNING (ceiling of care, ReSPECT/DNACPR, preferred place of care) \u2014 explains the lawful choices (refusing treatment, advance decision to refuse treatment, Mental Capacity Act 2005) \u2014 and assesses RISK (suicidality, plans and means, NICE NG225)'
      },
      {
        dom: 'ro',
        text: 'Communicates sensitively, checks understanding, and discusses with the palliative team or a senior colleague, keeping his disclosure confidential within the care team with his agreement'
      },
      {
        dom: 'dg',
        text: 'Sensitively assesses mental capacity and whether the wish is fixed or fluctuating, and checks for external pressure or coercion behind the request'
      },
      {
        dom: 'cm',
        text: 'Reaches a compassionate, lawful plan \u2014 explore + honest legal position + non-abandonment + symptom/palliative/mood/ACP support + risk assessment + follow-up \u2014 not a moralising refusal or false promise'
      }
    ],
    worked: [
      {
        lbl: 'Receive it compassionately',
        txt: '"Thank you for trusting me with something so important and so hard to say. I can hear how much thought you\u2019ve given this. Before anything else, I want to understand what\u2019s behind it \u2014 can you tell me what you\u2019re most afraid of?"'
      },
      {
        lbl: 'Explore the drivers',
        txt: '"\u2026 So it\u2019s the fear of suffering and of being a burden, and wanting some control. Those are completely understandable. Are you in pain or struggling with symptoms now? And how\u2019s your mood \u2014 this is a huge amount to carry."'
      },
      {
        lbl: 'Honest about the law',
        txt: '"I\u2019m going to be honest with you, gently: in England and Wales it\u2019s against the law to help someone end their life, and that includes doctors. Parliament voted on a bill to change that this month and it was voted down, so the law hasn\u2019t changed, and as your doctor I can\u2019t do that. But I want to be just as clear that this doesn\u2019t change my commitment to you one bit."'
      },
      {
        lbl: 'Non-abandonment',
        txt: '"I will not abandon you. I will be here with you the whole way, and I promise you this: we will do everything we can to keep you comfortable and to make sure you are not left to suffer. That\u2019s a promise I can keep."'
      },
      {
        lbl: 'Address the drivers',
        txt: '"Let\u2019s tackle what\u2019s frightening you. I\u2019ll get the palliative care team involved for the best possible symptom control, we\u2019ll look after your mood, and we\u2019ll plan ahead together \u2014 your wishes about treatment and where you\u2019re cared for. You can refuse any treatment you don\u2019t want, now or later, and we can write that down so it\u2019s followed if you can\u2019t speak for yourself \u2014 so you keep as much control as possible."'
      },
      {
        lbl: 'Risk + support',
        txt: '"Can I ask \u2014 are you having thoughts of ending things now, or any plans, or have you put anything aside? Has anyone suggested this to you? \u2026 Thank you for telling me. Let\u2019s keep talking regularly, and I\u2019ll bring in the right support. You are not on your own with this."'
      }
    ],
    learning: 'A direct request for assisted dying from a terminally ill patient is a profound ethics/palliative consultation. Respond with COMPASSION and without judgement or alarm \u2014 a brisk refusal or moralising shuts the patient down. The heart of the consultation is EXPLORING what lies behind the request, which is often a cry for help or driven by treatable factors: fear of future suffering/pain, loss of dignity/control, fear of being a burden, current uncontrolled symptoms, depression/hopelessness, and existential/spiritual distress. Be HONEST and clear that in England and Wales encouraging or assisting suicide remains a criminal offence under section 2 of the Suicide Act 1961 (DPP policy 2010, updated 2014: acting as a doctor with the person in your care favours prosecution); the Terminally Ill Adults (End of Life) Bill 2026\u201327 was defeated at Commons second reading on 11 September 2026 by 286 votes to 270 (Politics.co.uk, 11 September 2026), so as of October 2026 the law is unchanged \u2014 check the current legal position, and a doctor cannot lawfully assist a patient to end their life and must not act on, assist or encourage it (GMC: listen, discuss the reasons, limit information to explaining that it is an offence) \u2014 delivered gently and factually, framed within continuing care rather than as a rejection of the person. Crucially, do NOT abandon the patient: reassure that you will keep caring for him and make the explicit promise that you will do everything to keep him comfortable and not leave him to suffer, which directly addresses the fear driving many such requests. Address the modifiable drivers \u2014 optimise symptom control and involve palliative/specialist care, screen and treat depression, offer psychological/spiritual support, undertake advance care planning (wishes about future treatment, ceiling of care, DNACPR/ReSPECT, preferred place of care/death) \u2014 explain the lawful choices (refusing any treatment, an advance decision to refuse treatment under the Mental Capacity Act 2005, proportionate symptom relief), and assess risk (suicidality/immediate plans, means including stockpiled medicines, without risk scores per NICE NG225), capacity and coercion, discussing with the palliative team or a senior colleague and keeping his disclosure confidential within the care team with his agreement. The skill is compassionate exploration, an honest legal position, non-abandonment, and addressing the underlying distress \u2014 not a moralising refusal or a false promise. Legal position, as of October 2026: encouraging or assisting suicide remains a criminal offence in England and Wales (Suicide Act 1961, s2) and in Northern Ireland (Criminal Justice Act (Northern Ireland) 1966, s13). The Terminally Ill Adults (End of Life) Bill 2026\u201327 was defeated at Commons second reading on 11 September 2026 by 286 votes to 270 (Politics.co.uk, 11 September 2026: https://www.politics.co.uk/news/2026/09/11/how-every-mp-voted-on-the-assisted-dying-bill-in-commons-return/). The law differs elsewhere: in Scotland there is no specific statutory offence of assisting suicide, but assisting can be prosecuted under the common law, and the Scottish Parliament rejected the Assisted Dying for Terminally Ill Adults (Scotland) Bill on 17 March 2026 (ITV News, 17 March 2026: https://www.itv.com/news/2026-03-17/scottish-parliament-rejects-assisted-dying-bill); Jersey\u2019s assisted dying law was reported to have received Royal Assent in July 2026, and the Isle of Man\u2019s Assisted Dying Bill, passed by Tynwald, was still awaiting Royal Assent in mid-2026 \u2014 neither applies to a patient living in England. Always check the current legal position before discussing it with a patient.',
    knowledge: {
      guideline: 'Suicide Act 1961 s2 (England and Wales) \u00b7 DPP policy on encouraging or assisting suicide (2010, updated October 2014) \u00b7 Terminally Ill Adults (End of Life) Bill 2026\u201327: defeated at Commons second reading, 11 September 2026, 286\u2013270 (Politics.co.uk, 11 September 2026, https://www.politics.co.uk/news/2026/09/11/how-every-mp-voted-on-the-assisted-dying-bill-in-commons-return/) \u00b7 Assisted Dying for Terminally Ill Adults (Scotland) Bill: rejected by the Scottish Parliament, 17 March 2026 (ITV News, https://www.itv.com/news/2026-03-17/scottish-parliament-rejects-assisted-dying-bill) \u00b7 legal position checked October 2026 \u00b7 GMC: When a patient seeks advice or information about assistance to die; Treatment and care towards the end of life \u00b7 BMA neutral position (2021) \u00b7 NICE NG142 End of life care for adults: service delivery \u00b7 NICE CG91 \u00b7 NICE NG225 \u00b7 Mental Capacity Act 2005 \u00b7 request for assisted dying: explore drivers \u00b7 non-abandonment \u00b7 palliative/symptom/mood/ACP \u00b7 risk assessment',
      points: [
        {
          h: 'Compassion first',
          t: 'Receive the request without judgement/alarm; acknowledge how hard it is to raise. A brisk refusal/moralising shuts the patient down.'
        },
        {
          h: 'Explore the drivers',
          t: 'Fear of suffering/pain, loss of dignity/control, being a burden, uncontrolled symptoms, depression/hopelessness, existential distress \u2014 often a cry for help/treatable. This is the core of the consultation.'
        },
        {
          h: 'Honest legal position',
          t: 'Assisting suicide is an offence in England and Wales (Suicide Act 1961 s2; DPP policy 2010, updated 2014); the Terminally Ill Adults (End of Life) Bill 2026\u201327 was defeated at Commons second reading on 11 September 2026 (Politics.co.uk) \u2014 check the current legal position. A doctor cannot lawfully assist and must not act on/encourage it; GMC: limit information to explaining it is an offence. Deliver gently, framed within continued care.'
        },
        {
          h: 'Do not abandon',
          t: 'Reassure you will keep caring for him; promise to keep him comfortable and not leave him to suffer \u2014 addresses the fear driving many requests.'
        },
        {
          h: 'Address modifiable drivers',
          t: 'Optimise symptom control + palliative care; screen/treat depression; psychological/spiritual support; advance care planning (ceiling of care, ReSPECT/DNACPR, preferred place of care); lawful choices: refusal of treatment, advance decision to refuse treatment (MCA 2005), proportionate symptom relief.'
        },
        {
          h: 'Assess risk',
          t: 'Assess suicidality/immediate plans and means (stockpiled medicines), no risk scores (NICE NG225); capacity and coercion; discuss with the palliative team or a senior colleague; keep the disclosure confidential within the care team with his agreement.'
        },
        {
          h: 'Never do',
          t: 'Never react with shock/moralising; never agree to or encourage assisting; never abandon the patient; never give false promises; never miss treatable depression or uncontrolled symptoms.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Review in about a week; palliative team contacted the same day; psychological/chaplaincy support; risk safety-netting (practice, 111 or 999); advance care planning and symptom optimisation.'
        }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c269, c270, c271, c272);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {
    'premature-ejaculation': {
      ceg: ['Gender, reproductive & sexual health', 'Mental health & addiction'],
      stem: {
        name: 'Ravi Anand',
        age: '28 years \u00b7 male',
        pmh: [
          'Booked "for antidepressants/feeling low" \u2014 \u26a0 hidden agenda: premature ejaculation',
          'Distress, low confidence, relationship strain',
          'Screen ED + mood/anxiety; classify lifelong vs acquired'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"I asked for antidepressants \u2014 but really I finish far too quickly and it\u2019s wrecking my confidence and relationship."',
        reason: 'Video consultation \u2014 stated reason masks a sexual concern.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Hidden agenda',
          d: 'Pick up the hesitancy; safely surface the real issue (PE); destigmatise.'
        },
        {
          t: '2\u20104',
          h: 'Classify + ED',
          d: 'Lifelong vs acquired (acquired \u2192 cause); check/treat coexisting ED first; TFTs if acquired.'
        },
        {
          t: '4\u20106',
          h: 'Mood/anxiety/relationship',
          d: 'Performance anxiety, low mood (treat genuine depression), partner impact.'
        },
        {
          t: '6\u20109',
          h: 'Treatment',
          d: 'Stop-start/squeeze, topical anaesthetic spray, SSRI (dapoxetine on-demand after orthostatic check, no alcohol/other SSRI; or daily off-label); partner involvement.'
        },
        {
          t: '9\u201012',
          h: 'Refer + safety-net',
          d: 'Psychosexual referral if refractory; review in about four weeks with mood re-screen; support.'
        }
      ],
      wordPics: {
        fail: 'Prescribes an antidepressant for "low mood" and misses the real concern; no PE classification/ED check; no treatment offered.',
        pass: 'Elicits the hidden agenda, classifies PE, checks ED, and offers behavioural/topical/SSRI treatment.',
        exc: 'Sensitively elicits the hidden agenda, classifies PE (lifelong vs acquired, ISSM), checks/treats coexisting ED and mood/anxiety (including self-harm risk), offers behavioural + topical + SSRI treatment with partner involvement and psychosexual referral if refractory.'
      },
      avoid: [
        {
          dont: '"I\u2019ll start you on an antidepressant for your low mood." (missing the real issue)',
          instead: '"It sounds like the real worry is finishing quickly \u2014 that\u2019s common and treatable; let\u2019s focus there."',
          why: 'Prescribing for "low mood" misses the disclosed sexual concern \u2014 the actual agenda.'
        },
        {
          dont: '(No ED check) treating PE in isolation.',
          instead: '"How are your erections? If you\u2019re rushing to avoid losing one, we\u2019d treat that first."',
          why: 'Coexisting ED commonly drives PE and should be treated first.'
        },
        {
          dont: '(Dismissive) "It\u2019ll sort itself out, don\u2019t worry."',
          instead: '"There are techniques, creams and a tablet that genuinely help \u2014 let\u2019s pick an approach."',
          why: 'Dismissing it leaves an embarrassed, distressed patient untreated.'
        }
      ]
    },
    'tennis-elbow': {
      ceg: ['New & undifferentiated presentations', 'Long-term conditions & cancer'],
      stem: {
        name: 'Greg Holloway',
        age: '46 years \u00b7 male',
        pmh: [
          'Weeks of lateral elbow pain; worse gripping/lifting/shaking hands',
          'Tender lateral epicondyle; pain on resisted wrist extension; repetitive forearm use',
          'No injury; no neuro symptoms'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"The outer side of my elbow\u2019s painful \u2014 it hurts to grip, lift the kettle or shake hands." On video (guided self-examination): tenderness at the lateral epicondyle on his own pressure; pain at the lateral elbow on resisted wrist extension against his other hand; full elbow flexion and extension; can extend all fingers and the thumb normally; neck movements full and pain-free.',
        reason: 'Video consultation \u2014 lateral elbow pain.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Recognise',
          d: 'Lateral elbow pain + tender epicondyle + pain on gripping/resisted wrist extension = tennis elbow.'
        },
        {
          t: '2\u20104',
          h: 'Differential',
          d: 'Medial epicondylitis, radial tunnel, cervical/referred, elbow OA; clinical diagnosis.'
        },
        {
          t: '4\u20107',
          h: 'Conservative care',
          d: 'Load management (no complete rest), topical NSAIDs up to about 4 weeks, strap may help some, physio with eccentric exercises, ergonomics, fit note.'
        },
        {
          t: '7\u20109',
          h: 'Injections + expectations',
          d: 'Steroid injection not recommended (worse at a year, BESS 2023); slow but favourable course (about 9 in 10 improve within a year).'
        },
        {
          t: '9\u201012',
          h: 'Refer + safety-net',
          d: 'MSK/orthopaedics if refractory; reconsider for neuro/atypical features (finger drop, hot swollen elbow).'
        }
      ],
      wordPics: {
        fail: 'Images routinely or jumps to a steroid injection first-line; no load management/eccentric-exercise advice; misses radial tunnel/cervical causes.',
        pass: 'Recognises tennis elbow, gives conservative care with realistic timeline, and uses injections cautiously.',
        exc: 'Recognises lateral epicondylitis, excludes mimics, manages with load management/brace/eccentric physiotherapy and ergonomics, explains why corticosteroid injection is not recommended, supports him at work, and sets a realistic slow-recovery expectation.'
      },
      avoid: [
        {
          dont: '"Let\u2019s get an X-ray/scan."',
          instead: '"This is a clinical diagnosis from your symptoms and the tender spot \u2014 imaging isn\u2019t routinely needed."',
          why: 'Imaging is not routinely required for tennis elbow.'
        },
        {
          dont: '"A steroid injection will fix it \u2014 let\u2019s do that now."',
          instead: '"Injections help short-term but people who have one are less likely to have recovered at a year \u2014 I\u2019d start with load changes and exercises."',
          why: 'Corticosteroid injection has poorer outcomes and more recurrence at a year (Coombes 2013); BESS 2023 advises against it.'
        },
        {
          dont: '(No timeline) implying a quick fix.',
          instead: '"It can take a few months, but around nine in ten people have improved within a year."',
          why: 'Unrealistic expectations cause frustration; the course is slow but favourable.'
        }
      ]
    },
    threadworm: {
      ceg: ['Children & young people', 'New & undifferentiated presentations'],
      stem: {
        name: 'Ivy Fenwick (mother, Sophie Fenwick, present)',
        age: '5 years \u00b7 female',
        pmh: [
          'Intense nocturnal perianal itch + disturbed sleep; visible tiny white threads',
          'Sibling now scratching; household spread',
          'Parent fears it means poor hygiene'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Her bottom\u2019s really itchy at night and I\u2019ve seen tiny white threads \u2014 the whole family keeps catching it." Mother\u2019s photograph (sent via the practice\u2019s online form last night): several tiny white threadlike worms at the anal margin; perianal skin red from scratching, not broken or weeping.',
        reason: 'Video consultation \u2014 perianal itch in a child.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Recognise + reassure',
          d: 'Nocturnal perianal itch + white threads = threadworm; common, NOT poor hygiene.'
        },
        {
          t: '2\u20104',
          h: 'Explain spread',
          d: 'Faeco-oral via eggs (scratching \u2192 nails \u2192 mouth/surfaces); spreads through households.'
        },
        {
          t: '4\u20107',
          h: 'Treat whole household',
          d: 'Mebendazole 100 mg single dose for appropriate household contacts (6 months and over), repeat at 2 weeks; not index child only.'
        },
        {
          t: '7\u20109',
          h: 'Hygiene measures',
          d: 'Wash bedding/nightwear/towels on the day of treatment (no daily hot-wash), morning wash, hand/nail hygiene, short nails, no towel sharing (at least 2 weeks); no school exclusion.'
        },
        {
          t: '9\u201012',
          h: 'Caveats + safety-net',
          d: 'Hygiene alone under 6 months, hygiene first in pregnancy, check breastfeeding; return if persistent despite household treatment, sooner for weepy skin, fever or dysuria.'
        }
      ],
      wordPics: {
        fail: 'Treats only the index child; omits the repeat dose or hygiene; reinforces the poor-hygiene stigma; ignores age/pregnancy caveats; advises daily hot-washing or school exclusion.',
        pass: 'Recognises threadworm, reassures, and treats the whole household with mebendazole + hygiene.',
        exc: 'Recognises threadworm, reassures (common, not poor hygiene), treats the household on the same day (mebendazole 100 mg + repeat at 2 weeks) with practical hygiene measures, asks the brother\u2019s age and about pregnancy/breastfeeding, confirms no school exclusion, and safety-nets for other causes and secondary infection.'
      },
      avoid: [
        {
          dont: '"I\u2019ll give Ivy a dose of worm medicine."',
          instead: '"Everyone in the house needs treating together, with a repeat in two weeks \u2014 otherwise she\u2019ll just get re-infected."',
          why: 'Treating only the index child leads to re-infection.'
        },
        {
          dont: '(Stigma) "You\u2019ll need to keep things cleaner."',
          instead: '"This has nothing to do with cleanliness \u2014 nearly every family gets threadworms."',
          why: 'The poor-hygiene stigma is inaccurate and shaming.'
        },
        {
          dont: '(No hygiene measures) prescribing the tablet alone.',
          instead: '"Alongside the medicine, washing the bedding on the day of treatment, a morning wash and hand/nail hygiene for at least two weeks break the cycle."',
          why: 'Hygiene measures are essential to prevent re-infection.'
        }
      ]
    },
    'assisted-dying-request': {
      ceg: ['End-of-life & palliative care', 'Professionalism & ethics'],
      stem: {
        name: 'Harold Vance',
        age: '67 years \u00b7 male',
        pmh: [
          'Terminal cancer (primary site not recorded in the summary)',
          '\u26a0 Direct request for help to end his life "when the time comes"',
          'Drivers: fear of suffering, loss of dignity/control, being a burden; ?symptoms/mood'
        ],
        meds: ['Analgesia / palliative medications'],
        allergy: 'NKDA',
        recent: '"I\u2019ve got a terminal diagnosis and I want help to end my life when the time comes \u2014 will you help me?"',
        reason: 'Video consultation \u2014 terminally ill patient raising assisted dying.'
      },
      timeMap: [
        { t: '0\u20102', h: 'Compassion', d: 'Receive without judgement/alarm; acknowledge how hard it is to say.' },
        {
          t: '2\u20105',
          h: 'Explore the drivers',
          d: 'Fear of suffering/pain, dignity/control, being a burden, symptoms, depression/hopelessness, existential distress.'
        },
        {
          t: '5\u20107',
          h: 'Honest legal position',
          d: 'Assisting suicide an offence in England and Wales (Suicide Act 1961 s2); the 2026\u201327 Bill was defeated at Commons second reading on 11 September 2026 \u2014 check the current legal position; doctor cannot lawfully assist \u2014 gently, framed in continued care.'
        },
        { t: '7\u20109', h: 'Non-abandonment', d: 'Reassure continued care + promise comfort/not left to suffer.' },
        {
          t: '9\u201012',
          h: 'Address drivers + risk',
          d: 'Palliative/symptom control, treat depression, advance care planning and lawful choices, suicidality/means/coercion assessment, palliative team or senior colleague.'
        }
      ],
      wordPics: {
        fail: 'Reacts with shock/moralising or a brisk refusal; or appears to agree/encourage; abandons the patient; misses treatable distress/depression and symptom control.',
        pass: 'Responds compassionately, explores the drivers, states the legal position honestly, and addresses palliative/mood needs without abandonment.',
        exc: 'Responds with compassion, explores the underlying drivers, is honest that assisting suicide remains an offence in England and Wales (Suicide Act 1961 s2) while reassuring non-abandonment and explaining the lawful choices, addresses symptom/palliative/mood/advance-care-planning needs, assesses suicidality and means, and involves the palliative team or a senior colleague.'
      },
      avoid: [
        {
          dont: '(Shock/moralising) "I could never do that \u2014 it\u2019s wrong."',
          instead: '"Thank you for trusting me with this \u2014 help me understand what\u2019s behind it."',
          why: 'A shocked/moralising response shuts down the patient and misses the distress.'
        },
        {
          dont: '(Abandonment) "There\u2019s nothing I can do for you then."',
          instead: '"I can\u2019t help you end your life \u2014 that\u2019s the law \u2014 but I will not abandon you, and I\u2019ll make sure you\u2019re not left to suffer."',
          why: 'Abandoning the patient deepens despair and neglects the duty of care.'
        },
        {
          dont: '(Vague agreement) "Let\u2019s see when the time comes."',
          instead: '"To be honest with you, assisting someone to die is against the law in England and Wales and I can\u2019t do it \u2014 but here\u2019s everything I can do to support you."',
          why: 'Implying possible future assistance is unlawful and dishonest; clarity with compassion is required.'
        }
      ]
    }
  });

})();
