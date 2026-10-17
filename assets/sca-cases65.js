/* ============================================================
   Reasoning GP — Case Library batch 65:
   "Distinct diagnoses that are often missed or mislabelled"
   (NEW themes from the Bassam SCA summary, verified absent)
   Trigeminal neuralgia (electric-shock facial pain \u2014 carbamazepine,
   red flags); premenstrual dysphoric disorder (cyclical, severe \u2014
   not "just PMS"); first-episode genital herpes (diagnosis,
   antivirals, the disclosure/psychological hit); and hyperemesis
   gravidarum (severe NVP \u2014 PUQE/dehydration, admission, safe
   antiemetics). No NG12 cancer pathway genuinely applies; none
   invented.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases64.js.
   ============================================================ */

(function(){

  /* ============ 232. VIDEO — Trigeminal neuralgia: electric-shock facial pain ============ */
  const c232 = {
    id: 'trigeminal-neuralgia',
    title: '"I get sudden electric-shock pains in my face when I brush my teeth or feel a breeze \u2014 it\u2019s unbearable"',
    type: 'video',
    duration: 12,
    meta: {
      age: 58,
      sex: 'F',
      setting: 'Video consultation, with the cranial nerve examination arranged face to face the same day \u2014 paroxysmal severe facial pain.',
      system: 'Neurology \u2014 trigeminal neuralgia: recognition, carbamazepine & red flags',
      checked: 'October 2026'
    },
    brief: 'Mrs Annette Boll, 58, describes recurrent PAROXYSMS of sudden, severe, STABBING/ELECTRIC-SHOCK pain in one side of the face (cheek/jaw \u2014 maxillary/mandibular trigeminal distribution), lasting seconds, TRIGGERED by light touch, chewing, brushing teeth, washing the face or a cold breeze, with pain-free intervals between attacks; she is exhausted and frightened to eat/talk. The examinable task is to recognise TRIGEMINAL NEURALGIA (paroxysmal, severe, unilateral, electric/stabbing pain in a trigeminal-nerve division, triggered by innocuous stimuli to "trigger zones", with refractory periods), distinguish it from dental pain (consider/exclude dental causes), cluster/migraine and other facial pain, and \u2014 critically \u2014 screen the RED FLAGS suggesting a SECONDARY cause (younger age, BILATERAL symptoms, sensory loss/numbness, other cranial-nerve or neurological signs, deafness, optic/MS features) that warrant neurology referral and MRI (e.g. MS, a compressive lesion); the cranial nerve examination (facial sensation, corneal reflex) needs a face-to-face appointment, not video. Treat first-line with CARBAMAZEPINE (NICE CG173; BNF: start 100 mg once or twice daily and increase gradually to the lowest effective dose; baseline FBC, U&E (sodium) and LFTs; HLA-B*1502 testing first in people of Han Chinese or Thai origin; counsel side-effects/monitoring \u2014 hyponatraemia, blood dyscrasia, rash incl. rare SJS, enzyme-inducer interactions, and contraception advice only if still needed (FSRH: copper IUD, LNG-IUS or DMPA)), acknowledge the major impact on eating/quality of life/mood (ask directly about suicidal thoughts \u2014 NICE NG225), and refer to neurology (for diagnosis confirmation, refractory cases, surgical options like microvascular decompression, and any red flags). The skill is pattern recognition, first-line carbamazepine, and the red-flag/secondary-cause screen.',
    script: {
      opening: '"Doctor, I keep getting these horrendous jolts of pain in the right side of my face \u2014 like an electric shock or a stabbing \u2014 they last only seconds but they\u2019re unbearable. They go off when I brush my teeth, chew, wash my face, or even a breeze hits me. I\u2019m scared to eat or talk now. In between I\u2019m fine. What is this?"',
      facts: [
        {
          topic: 'The pain',
          text: 'Right side only: across the cheek and down into the jaw (points to it on camera). Started about 2 months ago, getting more frequent \u2014 "dozens a day now". Each jolt lasts a second or two, sometimes a burst of several. Completely pain-free in between.'
        },
        {
          topic: 'Triggers',
          text: 'Brushing teeth, chewing, talking, washing or putting on make-up, a cold wind. Has stopped brushing the right side. Covers her face with a scarf outdoors.'
        },
        {
          topic: 'Red-flag questions (all negative)',
          text: 'No numbness or tingling in the face. No weakness, no double vision, no hearing loss, no problems with eyesight or balance. No pain on both sides. No headache, no scalp tenderness, no jaw pain on chewing that builds up. Never had episodes of numbness or blurred vision in the past. No rash.'
        },
        {
          topic: 'Dentist',
          text: 'Saw her dentist 3 weeks ago "thinking it was a tooth"; the dentist found nothing and said it didn\u2019t look dental. "It doesn\u2019t feel like toothache."'
        },
        {
          topic: 'Eating and weight',
          text: 'Living on soup and yoghurt through a straw; clothes looser \u2014 thinks she has lost about half a stone. Drinking enough.'
        },
        {
          topic: 'Health and medicines',
          text: 'Generally well. Takes no regular medicines; tried paracetamol and ibuprofen \u2014 no help. No allergies. Postmenopausal (periods stopped at 52). Of Han Chinese descent on her mother\u2019s side (only if asked about ethnicity/family origin).'
        },
        {
          topic: 'Mood and social',
          text: 'Exhausted, dreads every meal, stopped going to her choir. "Tired and fed up" but no thoughts of harming herself. Lives with husband, Peter. Works as a receptionist at a hotel \u2014 talking all day is now agony. Drives.'
        },
        {
          topic: 'How to play it',
          text: 'Speak carefully, holding still; flinch and stop mid-sentence once when a jolt comes. You are frightened something serious is causing it. Relief if the doctor names the condition and explains it is treatable. Ask about side effects if a medicine is offered.'
        }
      ],
      ice: {
        ideas: '"At first I thought it was a tooth. Now I don\u2019t know."',
        concerns: 'HIDDEN AGENDA \u2014 fear of a brain tumour ("a growth, maybe") because her sister-in-law had a tumour that started with face pain. Also dreads it never ending.',
        expectations: '"Something that stops the pain, and to know it\u2019s not something terrible."'
      },
      cues: [
        '"I\u2019m scared to eat or talk now" \u2014 impact on eating, work and mood.',
        '"The dentist couldn\u2019t find anything" \u2014 she has already been bounced once.',
        '"A growth, maybe" (if worries are explored) \u2014 the fear to address after the red-flag screen.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises TRIGEMINAL NEURALGIA \u2014 paroxysmal, severe, unilateral, electric-shock/stabbing facial pain in a trigeminal division lasting seconds, triggered by innocuous stimuli to trigger zones, with pain-free/refractory intervals'
      },
      {
        dom: 'dg',
        text: 'Distinguishes it from dental pain (considers/excludes a dental cause), cluster headache, migraine, TMJ pain and giant cell arteritis'
      },
      {
        dom: 'cm',
        text: 'EXPLICITLY screens RED FLAGS for a SECONDARY cause (younger age at onset, often quoted as under 40, bilateral symptoms, facial sensory loss, other cranial-nerve/neurological signs, MS features) warranting neurology referral and MRI'
      },
      {
        dom: 'cm',
        text: 'Treats first-line with CARBAMAZEPINE (NICE CG173; BNF start 100 mg once or twice daily, titrated) with baseline FBC, U&E and LFTs (HLA-B*1502 first if of Han Chinese or Thai origin) and counsels side-effects/monitoring \u2014 hyponatraemia, blood dyscrasia, LFTs, rash (incl. rare SJS), interactions (enzyme inducer), contraception only if still needed (FSRH) \u2014 with specialist advice if intolerant/refractory'
      },
      {
        dom: 'ro',
        text: 'Acknowledges and addresses the QUALITY-OF-LIFE impact (eating/talking/washing fear, weight loss, low mood \u2014 asking directly about suicidal thoughts, NICE NG225) and refers to NEUROLOGY (confirmation, red flags, refractory pain, surgical options)'
      },
      {
        dom: 'ro',
        text: 'Responds to her fear and exhaustion with empathy, conveys that the condition is recognised and treatable, and checks understanding of the medication plan'
      },
      {
        dom: 'ro',
        text: 'Explains the diagnosis and reasoning clearly (why it is not dental pain/migraine) and the carbamazepine counselling without overwhelming her'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: rash/unwell on carbamazepine \u2192 stop and seek help, monitoring bloods (sodium/FBC/LFTs), review of response and titration, urgent review for red-flag/secondary features, and neurology referral \u2014 pattern recognition + first-line treatment + secondary-cause screen'
      }
    ],
    worked: [
      {
        lbl: 'Name it confidently',
        txt: '"What you\u2019re describing \u2014 sudden electric-shock jolts in the face, set off by touch, chewing or a breeze, lasting seconds with normal periods in between \u2014 is a recognised condition called trigeminal neuralgia, a nerve pain in the face. It\u2019s not your teeth, even though it can feel like it, and it\u2019s treatable."'
      },
      {
        lbl: 'Screen the red flags',
        txt: '"Let me check a few things to be thorough \u2014 is it ever both sides? Any numbness in your face, double vision, weakness, or other neurological symptoms? \u2026 No. I\u2019d like to see you in person today to check the feeling in your face, the blink reflex and the other nerves \u2014 if those are normal too, that\u2019s reassuring it\u2019s the common, primary type."'
      },
      {
        lbl: 'Start carbamazepine',
        txt: '"The first-line treatment is a tablet called carbamazepine, which calms the nerve. We start low \u2014 100 milligrams once or twice a day \u2014 and build up slowly to the lowest dose that works. It works well for most people, so there\u2019s real hope of getting on top of this."'
      },
      {
        lbl: 'Counsel the drug',
        txt: '"A few important things with it: it can cause dizziness, lower your blood sodium, and rarely affect the blood count or liver, so I\u2019ll do blood tests before you start and again soon after. If you get any rash, fever, sore throat, mouth ulcers or unusual bruising, or feel unwell, stop it and contact us urgently. It also interacts with many other medicines, so always mention it when something new is prescribed."'
      },
      {
        lbl: 'Acknowledge the impact',
        txt: '"This is exhausting and frightening \u2014 being scared to eat or talk is a big deal, and it can really get you down. We\u2019ll treat the pain, and tell me how you\u2019re coping in yourself too. Has it ever made you feel you can\u2019t go on?"'
      },
      {
        lbl: 'Refer + safety-net',
        txt: '"I\u2019ll refer you to neurology to confirm things and discuss options if the tablets don\u2019t fully control it \u2014 including procedures that can help. Come back if it\u2019s not improving, if you get a rash or feel unwell on the tablet, or if any numbness or new symptoms appear."'
      }
    ],
    learning: 'PAROXYSMS of sudden, severe, UNILATERAL, STABBING/ELECTRIC-SHOCK facial pain lasting seconds in a trigeminal-nerve division (commonly maxillary/mandibular), TRIGGERED by innocuous stimuli to "trigger zones" (light touch, chewing, tooth-brushing, washing the face, cold breeze, talking) with pain-free/refractory intervals, is the classic picture of TRIGEMINAL NEURALGIA. Distinguish it from dental pain (usually continuous/throbbing, not touch-triggered paroxysms \u2014 patients often see a dentist first), cluster headache (longer, orbital, autonomic), migraine, TMJ pain, sinusitis and giant cell arteritis. Critically, screen the RED FLAGS suggesting a SECONDARY cause (an underlying lesion such as multiple sclerosis or a compressive vascular/tumour lesion): younger age at onset (often quoted as under 40), BILATERAL symptoms, facial SENSORY LOSS/numbness, other cranial-nerve or neurological signs, deafness, MS/optic features, or atypical continuous pain \u2014 which warrant neurology referral and MRI (the cranial nerve examination is done face to face); classic unilateral TN in an older patient with a normal neuro exam is usually primary, but the screen must be explicit. Treat first-line with CARBAMAZEPINE (NICE CG173, 2013; BNF: start 100 mg once or twice daily, increase gradually to the lowest effective dose), with baseline FBC, U&E (sodium) and LFTs and HLA-B*1502 testing first in people of Han Chinese or Thai origin, counselling side-effects and monitoring \u2014 dizziness/ataxia, HYPONATRAEMIA, blood dyscrasias, LFT derangement, rash (including rare serious SJS/TEN \u2014 stop and seek help), many drug interactions (enzyme inducer), and contraception only if still needed (FSRH) \u2014 with alternatives (oxcarbazepine, lamotrigine, gabapentin, baclofen) if intolerant/refractory, guided by specialist advice as NICE CG173 advises. Acknowledge the major quality-of-life impact (fear of eating/talking/washing, weight loss, low mood \u2014 ask directly about suicidal thoughts, NICE NG225) and refer to neurology for confirmation, red flags (with MRI), refractory pain, or surgical options (e.g. microvascular decompression). The hidden agenda is fear and exhaustion (and possible dental bouncing); the skill is confident pattern recognition, first-line carbamazepine with proper counselling, the explicit red-flag screen, and referral.',
    knowledge: {
      guideline: '[1] NICE CG173 Neuropathic pain in adults: pharmacological management in non-specialist settings (2013) \u00b7 [2] BNF: carbamazepine \u00b7 [3] FSRH CEU Guidance: Drug interactions with hormonal contraception (May 2022) \u00b7 [4] NICE NG225 Self-harm: assessment, management and preventing recurrence (2022) \u00b7 carbamazepine first-line + monitoring \u00b7 secondary-cause red flags (MS/compressive) \u00b7 neurology referral',
      points: [
        {
          h: 'Recognise TN',
          t: 'Paroxysmal, severe, unilateral, electric-shock/stabbing facial pain lasting seconds in a trigeminal division, triggered by innocuous stimuli to trigger zones, with pain-free/refractory intervals.'
        },
        {
          h: 'Differential',
          t: 'Dental pain (continuous/throbbing, not touch-triggered paroxysms \u2014 consider/exclude), cluster headache, migraine, TMJ, sinusitis, giant cell arteritis. The brief shock-like touch-triggered pattern points to TN.'
        },
        {
          h: 'Secondary-cause red flags',
          t: 'Younger age at onset (often quoted as under 40), bilateral symptoms, facial sensory loss, other cranial-nerve/neuro signs, deafness, MS/optic features, atypical continuous pain \u2192 neurology + MRI (MS, compressive lesion). Examine facial sensation, corneal reflex and the other cranial nerves face to face.'
        },
        {
          h: 'First-line carbamazepine',
          t: 'Carbamazepine is first-line (NICE CG173 [1]). BNF [2]: start 100 mg once or twice daily, increase gradually to the lowest effective dose. Baseline FBC, U&E and LFTs; HLA-B*1502 test first in people of Han Chinese or Thai origin. Counsel/monitor: dizziness/ataxia, hyponatraemia, blood dyscrasia, LFTs, rash (incl. rare SJS \u2014 stop and seek help), enzyme-inducer interactions; if contraception is still needed, FSRH [3]: copper IUD, LNG-IUS or DMPA.'
        },
        {
          h: 'Alternatives',
          t: 'Oxcarbazepine, lamotrigine, gabapentin, baclofen if intolerant/refractory \u2014 NICE CG173 [1]: seek specialist advice and consider early referral if carbamazepine fails, is not tolerated or is contraindicated.'
        },
        {
          h: 'Impact & referral',
          t: 'Acknowledge fear of eating/talking/washing, weight loss, low mood; ask directly about suicidal thoughts (NICE NG225 [4]: no risk scores, a shared safety plan). Refer neurology for confirmation, red flags, refractory pain, surgical options (microvascular decompression/ablation).'
        },
        {
          h: 'Never do',
          t: 'Never dismiss as dental pain without considering TN; never skip the secondary-cause red-flag screen; never start carbamazepine without side-effect/monitoring counselling; never ignore the quality-of-life/mood impact.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Stop carbamazepine and seek help for rash, fever, sore throat, mouth ulcers, bruising or feeling unwell; baseline and repeat bloods (sodium/FBC/LFTs); review response/titration in about 2 weeks; urgent review for red flags; neurology referral.'
        }
      ]
    }
  };

  /* ============ 233. VIDEO — Premenstrual dysphoric disorder: not "just PMS" ============ */
  const c233 = {
    id: 'pmdd',
    title: '"For a week or two before my period I become a different person \u2014 rage, despair, I scare myself \u2014 then it lifts"',
    type: 'video',
    duration: 12,
    meta: {
      age: 33,
      sex: 'F',
      setting: 'Video consultation \u2014 severe cyclical mood symptoms (no examination needed).',
      system: 'Women\u2019s health / Mental health \u2014 premenstrual dysphoric disorder: recognition & treatment',
      checked: 'October 2026'
    },
    brief: 'Miss Carys Devlin, 33, describes severe MOOD symptoms \u2014 irritability/RAGE, low mood/DESPAIR, anxiety, tearfulness, feeling out of control \u2014 plus physical symptoms, that appear in the LUTEAL phase (the 1\u20132 weeks BEFORE her period), are severe enough to damage her relationships/work, and RESOLVE soon after menstruation starts, with a symptom-free interval; she has been dismissed as having "bad PMS". The examinable task is to recognise PREMENSTRUAL DYSPHORIC DISORDER (PMDD) \u2014 a severe, functionally impairing form of premenstrual disorder with prominent affective symptoms, defined by the CYCLICAL/luteal timing and symptom-free follicular phase \u2014 distinguishing it from "ordinary" PMS (milder) and from an underlying mood disorder with premenstrual exacerbation (symptoms persisting through the cycle). Confirm the pattern with a prospective SYMPTOM DIARY over \u22652 cycles (RCOG Green-top Guideline No. 48, 2016: daily ratings such as the DRSP), assess SEVERITY and RISK (it carries genuine distress and suicide risk \u2014 ask directly; NICE NG225: no risk scores, a shared safety plan), ask about elevated mood (bipolar disorder) before an SSRI, validate (not "just hormones"/"just PMS"), and offer evidence-based treatment per RCOG GTG 48: lifestyle and exercise, CBT, an SSRI (effective in PMDD \u2014 continuous OR luteal-phase dosing; unlicensed for PMS in the UK, dose per BNF; review within 1 week if at increased suicide risk, NICE NG222), a new-generation combined pill (drospirenone-containing usually more effective; cyclical or continuous) after a UKMEC check, and referral for refractory/severe cases. The skill is recognising and VALIDATING a frequently dismissed, disabling condition, confirming with a diary, assessing risk, and treating.',
    script: {
      opening: '"I feel like I\u2019m going mad. For a week or two before my period I turn into a different person \u2014 furious over nothing, then this black despair, crying, snapping at my partner and kids. I\u2019ve frightened myself with how low I get. Then my period comes and within a day or two it just\u2026 lifts, and I\u2019m fine. My last doctor said it\u2019s just bad PMS. It\u2019s wrecking my life."',
      facts: [
        {
          topic: 'The pattern',
          text: 'Builds up about 10 days, sometimes 2 weeks, before each period. Furious over small things, then "black despair", crying, anxious, can\u2019t concentrate, wants to hide under the duvet. Within a day or two of the period starting, "like a light switches back on". Fine the rest of the month. Has been like this for about 3 years, worse since her second child.'
        },
        {
          topic: 'Physical symptoms',
          text: 'Bloating, sore breasts, craving sweet food, poor sleep in that week. Periods regular, 28 days, not especially heavy. No bleeding between periods or after sex.'
        },
        {
          topic: 'Mood the rest of the month (if asked)',
          text: 'Good. Enjoys things, sleeps well, no anxiety. Never had a long spell of low mood. Never had a time of being "high", needing no sleep or spending wildly.'
        },
        {
          topic: 'Dark thoughts (only if asked directly)',
          text: '"Sometimes I\u2019ve thought everyone would be better off without me." Only in the week before her period; no plan, never acted on it, "it goes when my period comes. I\u2019d never leave the kids." No self-harm.'
        },
        {
          topic: 'Contraception and health',
          text: 'Partner had a vasectomy; not using hormones. Not breastfeeding. No medicines, no allergies. No migraine with aura. Non-smoker, BMI 24. Drinks "too much wine that week, to calm down" \u2014 about a bottle over the week.'
        },
        {
          topic: 'Family and social',
          text: 'Lives with partner, Rhys, and two children (7 and 4). Works part-time as a dental nurse; took two days off last month. Mother had "bad nerves" after having children. Rhys is supportive but they row every month.'
        },
        { topic: 'Diary', text: 'Has never kept a symptom diary. Has a period-tracker app on her phone.' },
        {
          topic: 'How to play it',
          text: 'Articulate, upset, slightly defensive at first because last time you were dismissed. If the doctor takes you seriously, become tearful with relief. Reveal the dark thoughts only if asked directly and kindly. Ask: "Do I have to wait two months for help, though?" if a diary is suggested. Prefer not to take hormones.'
        }
      ],
      ice: {
        ideas: '"Either I\u2019m going mad, or I\u2019m just a horrible person that week."',
        concerns: 'HIDDEN AGENDA \u2014 guilt about how she treats the children, and fear of how low she gets: "I scare myself."',
        expectations: '"For someone to take it seriously, and something that actually helps."'
      },
      cues: [
        '"My last doctor said it\u2019s just bad PMS" \u2014 she has felt dismissed before.',
        '"I\u2019ve frightened myself with how low I get" \u2014 the door to asking about suicidal thoughts.',
        '"Within a day or two it just lifts" \u2014 the cyclical pattern that points to the diagnosis.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises PREMENSTRUAL DYSPHORIC DISORDER \u2014 severe affective (\u00b1 physical) symptoms in the LUTEAL phase that are functionally impairing and RESOLVE after menstruation with a symptom-free follicular interval'
      },
      {
        dom: 'dg',
        text: 'Distinguishes PMDD from ordinary (milder) PMS and from an underlying MOOD DISORDER with premenstrual exacerbation (symptoms persisting through the cycle) \u2014 the symptom-free window being the key'
      },
      {
        dom: 'dg',
        text: 'Confirms the pattern with a PROSPECTIVE symptom DIARY over at least 2 cycles rather than relying on retrospective recall'
      },
      {
        dom: 'dg',
        text: 'Assesses SEVERITY/impact and explicitly screens RISK (suicidal thoughts/self-harm, especially luteal), recognising PMDD\u2019s genuine risk'
      },
      {
        dom: 'cm',
        text: 'Offers EVIDENCE-BASED treatment per RCOG GTG 48 (lifestyle; SSRI \u2014 continuous or luteal-phase, unlicensed for PMS, after a bipolar screen; new-generation combined pill after a UKMEC check; CBT) and refers to gynaecology/specialist for severe/refractory cases, with shared decision-making'
      },
      {
        dom: 'ro',
        text: 'VALIDATES strongly \u2014 that this is a recognised, treatable condition and NOT "just PMS"/"just hormones"/a character flaw \u2014 responding to her feeling dismissed and frightened'
      },
      {
        dom: 'ro',
        text: 'Explores impact on relationships/work and her preferences, explains the diagnosis and plan, and checks understanding'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: crisis/risk safety-netting (worsening mood/suicidality, especially premenstrually), review within 1 week of starting an SSRI given her suicidal thoughts (NICE NG222), the diary and review to confirm and tailor treatment, and ongoing support \u2014 recognition + validation + evidence-based treatment, not dismissal'
      }
    ],
    worked: [
      {
        lbl: 'Validate first',
        txt: '"You are not going mad, and this is not \u2018just PMS\u2019. What you\u2019re describing \u2014 severe mood changes that build before your period and then lift once it starts \u2014 is a recognised, treatable condition called premenstrual dysphoric disorder, PMDD. I\u2019m really sorry you were brushed off; this is real."'
      },
      {
        lbl: 'Pin the pattern',
        txt: '"The key thing that makes me confident is that you feel genuinely WELL for part of the month, then it returns predictably before your period. To be sure, I\u2019d like you to keep a daily symptom diary over a couple of cycles \u2014 it confirms the pattern and rules out a depression that\u2019s there all the time."'
      },
      {
        lbl: 'Check safety',
        txt: '"Because you said the lows frighten you \u2014 can I ask directly: in that premenstrual week, have you had thoughts of harming yourself or that life isn\u2019t worth living? \u2026 Thank you for telling me. That matters and we\u2019ll keep you safe."'
      },
      {
        lbl: 'Offer treatment',
        txt: '"The good news is there are effective treatments. An antidepressant called an SSRI works well for PMDD \u2014 and uniquely here, it can be taken either every day or just in the two weeks before your period. It isn\u2019t officially licensed for this, which I\u2019ll explain, but it\u2019s the recommended treatment. Before starting, have you ever had spells of feeling unusually high or wired? A newer type of combined pill, taken continuously, can also help by smoothing the hormone swings, if it\u2019s safe for you \u2014 I\u2019ll ask about migraine and arrange a blood pressure check first \u2014 and talking therapy (CBT) helps too. We can choose what fits you."'
      },
      {
        lbl: 'Shared decision',
        txt: '"What appeals more \u2014 trying the SSRI, the hormonal route, or both alongside lifestyle changes like exercise and easing off caffeine/alcohol? Do you also need contraception, as that might steer us?"'
      },
      {
        lbl: 'Safety-net + review',
        txt: '"Keep the diary, and if you start the SSRI I\u2019d like to speak again within a week, then review in a couple of cycles to confirm and see how treatment\u2019s working. If your mood drops badly or you ever feel unsafe \u2014 especially before your period \u2014 contact us straight away. You\u2019ve been carrying this alone for too long."'
      }
    ],
    learning: 'PREMENSTRUAL DYSPHORIC DISORDER (PMDD) is the severe, functionally impairing end of premenstrual disorders: prominent affective symptoms (irritability/RAGE, low mood/DESPAIR, anxiety, mood swings, feeling out of control) \u00b1 physical symptoms occurring in the LUTEAL phase (the 1\u20132 weeks before menstruation), damaging relationships/work, and RESOLVING shortly after the period starts with a SYMPTOM-FREE follicular interval \u2014 the cyclical timing with a symptom-free window being the diagnostic key. Distinguish it from ordinary (milder, non-disabling) PMS and from an underlying MOOD DISORDER with premenstrual exacerbation, where symptoms PERSIST through the cycle (worse premenstrually) rather than fully resolving. Confirm with a PROSPECTIVE symptom DIARY over at least two cycles, since retrospective recall is unreliable and the diary both confirms PMDD and excludes a persistent mood disorder. Assess severity and functional impact, and explicitly screen RISK \u2014 PMDD causes genuine distress and carries a real suicide/self-harm risk in the luteal phase \u2014 while validating strongly that this is a recognised medical condition, NOT "just PMS"/"just hormones" or a character failing (the validation is itself therapeutic after dismissal). Offer evidence-based treatment per RCOG Green-top Guideline No. 48 (2016): lifestyle measures; an SSRI (effective in PMDD, given continuously OR only in the luteal phase; unlicensed for PMS in the UK, dose per BNF; screen for bipolar features first and review within 1 week if at increased suicide risk, NICE NG222); combined hormonal contraception/ovulation suppression (a new-generation combined pill, drospirenone-containing usually more effective, cyclical or continuous, after a UKMEC check); CBT; risk explored without risk labels and with a safety plan (NICE NG225); and referral to gynaecology/specialist for severe/refractory cases (GnRH analogues \u00b1 add-back, rarely surgery), tailored to her preferences and contraceptive needs. The hidden agenda is feeling she is "going mad" and previously dismissed; recognise, confirm, assess risk, validate, and treat with shared decision-making.',
    knowledge: {
      guideline: '[1] RCOG Green-top Guideline No. 48 Management of premenstrual syndrome (December 2016; BJOG 2017) \u00b7 [2] NICE NG225 Self-harm: assessment, management and preventing recurrence (2022) \u00b7 [3] NICE NG222 Depression in adults: treatment and management (2022) \u00b7 [4] UKMEC 2025 (FSRH/CoSRH) \u00b7 [5] BNF: selective serotonin re-uptake inhibitors \u00b7 [6] DSM-5-TR (APA 2022) (international) \u00b7 prospective symptom diary \u00b7 SSRI (continuous/luteal) & ovulation suppression \u00b7 risk assessment',
      points: [
        {
          h: 'Recognise PMDD',
          t: 'Severe affective (\u00b1 physical) symptoms in the luteal phase, functionally impairing, resolving after menstruation with a symptom-free follicular interval. The severe end of premenstrual disorders (RCOG GTG 48 [1]; formal PMDD criteria in DSM-5-TR [6], international).'
        },
        {
          h: 'Distinguish',
          t: 'Ordinary PMS is milder/non-disabling; a mood disorder with premenstrual exacerbation persists through the cycle. The symptom-free window differentiates PMDD.'
        },
        {
          h: 'Confirm with a diary',
          t: 'Use a prospective symptom diary over \u22652 cycles (RCOG [1]: daily ratings such as the DRSP) to confirm luteal timing and the symptom-free phase \u2014 retrospective recall is unreliable.'
        },
        {
          h: 'Assess risk',
          t: 'PMDD causes genuine distress and carries real suicide/self-harm risk (luteal). Assess severity, impact and risk explicitly (NICE NG225 [2]: no risk tools or low/medium/high labels; a safety plan). Ask about bipolar symptoms before an SSRI. Validate \u2014 not "just PMS".'
        },
        {
          h: 'Treatment',
          t: 'RCOG [1] first line: exercise, CBT, vitamin B6, a new-generation combined pill (drospirenone-containing usually more effective; cyclical or continuous; check UKMEC [4] \u2014 migraine with aura is UKMEC 4) and low-dose SSRIs, continuous or luteal phase (days 15 to 28) \u2014 unlicensed for PMS, dose per BNF [5]. NICE NG222 [3]: review within 1 week of starting if at increased suicide risk. Tailor to preferences/contraceptive needs.'
        },
        {
          h: 'Refer if severe/refractory',
          t: 'Second line (RCOG [1]): transdermal estradiol with progestogen or LNG-IUS protection. Gynaecology/specialist for refractory cases (GnRH analogues \u00b1 add-back HRT if used beyond 6 months, rarely surgery). Review after two to three cycles of each treatment.'
        },
        {
          h: 'Never do',
          t: 'Never dismiss disabling PMDD as "just PMS"/"just hormones"; never diagnose on retrospective recall alone; never miss an underlying persistent mood disorder; never omit the suicide-risk screen.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Crisis/risk safety-netting (worsening mood/suicidality, esp. premenstrually); review within 1 week of starting an SSRI (NICE NG222 [3]); diary + review to confirm and tailor; ongoing support.'
        }
      ]
    }
  };

  /* ============ 234. VIDEO — First-episode genital herpes: diagnosis, antivirals & disclosure ============ */
  const c234 = {
    id: 'genital-herpes-first',
    title: '"I\u2019ve got painful blisters and ulcers down below and I\u2019m terrified \u2014 does this mean I\u2019ll have it forever?"',
    type: 'video',
    duration: 12,
    meta: {
      age: 26,
      sex: 'F',
      setting: 'Video consultation, then a same-day face-to-face appointment for the chaperoned examination and swab \u2014 painful genital ulceration, first episode.',
      system: 'Sexual health \u2014 first-episode genital herpes: diagnosis, antivirals & the psychological/disclosure impact',
      checked: 'October 2026'
    },
    brief: 'Miss Lauren Hicks, 26, presents with a first episode of PAINFUL grouped vesicles and shallow ULCERS on the vulva, with dysuria, tender inguinal lymphadenopathy and flu-like malaise. She is distressed, ashamed, and frightened about what it means for her future and relationships. The examinable task is to recognise FIRST-EPISODE GENITAL HERPES (HSV) \u2014 painful multiple vesicles/ulcers, dysuria, systemic symptoms, lymphadenopathy \u2014 to diagnose and CONFIRM appropriately (a chaperoned face-to-face examination and a swab from the base of a lesion for HSV PCR; ask about possible current pregnancy; ideally refer to/involve GUM/sexual-health services for a full STI screen including chlamydia, gonorrhoea, syphilis and HIV, and support with telling partners), to TREAT promptly with an oral ANTIVIRAL without waiting for the swab result (BASHH 2024: within 5 days of onset or while new lesions are forming; aciclovir 400 mg three times daily for 5 days preferred, valaciclovir/famciclovir alternatives, dose per BNF) plus symptomatic care (analgesia, saline bathing, topical anaesthetic, adequate fluids; warn re urinary retention from dysuria \u2014 if catheterisation is needed the suprapubic route is considered), and \u2014 critically \u2014 to handle the PSYCHOLOGICAL impact and counselling sensitively: explain the natural history (it is a common, manageable lifelong infection with recurrences that are usually milder and may reduce over time; not a reflection of "dirtiness"), transmission and reducing it (asymptomatic shedding, condoms, disclosure to partners \u2014 BASHH 2024: partner notification is not required as a public health measure, but telling partners is recommended \u2014 antivirals/suppression for frequent recurrences), and pregnancy implications (important to disclose herpes in future pregnancy \u2014 neonatal risk). The skill is accurate diagnosis + early antivirals + compassionate, destigmatising counselling and GUM involvement.',
    script: {
      opening: '"This is so embarrassing \u2014 I\u2019ve got these really painful blisters and sores down below, it stings terribly when I wee, and I feel fluey and achy. I looked it up and I\u2019m terrified it\u2019s herpes. Does that mean I\u2019m dirty? Will I have this forever? What do I tell my partner?"',
      facts: [
        {
          topic: 'The sores',
          text: 'Started 3 days ago as tingling, then little blisters on both sides of the vulva, now some have burst into raw shallow sores. More today than yesterday. Very painful to sit or walk. Lumps in both groins, tender.'
        },
        {
          topic: 'Passing urine',
          text: 'Stings terribly; she\u2019s been putting off going. Can still pass urine \u2014 went 3 hours ago. If asked: has not tried passing urine in a warm bath.'
        },
        {
          topic: 'General',
          text: 'Fluey, achy, temperature 38.1 on her own thermometer last night. No headache with a stiff neck, no light sensitivity. No rash anywhere else.'
        },
        {
          topic: 'Sexual history (if asked sensitively)',
          text: 'One partner, Ben, for 8 months; they stopped using condoms after 2 months. Oral sex as well. He has never mentioned cold sores or genital sores, but she has seen him with a cold sore once. One previous partner, 2 years ago. Never had an STI test.'
        },
        {
          topic: 'Pregnancy and contraception',
          text: 'On the combined pill, takes it reliably. Last period 2 weeks ago. Doesn\u2019t think she could be pregnant.'
        },
        {
          topic: 'Health',
          text: 'Well otherwise, no medicines apart from the pill, no allergies. Never had anything like this before. Never had cold sores herself.'
        },
        {
          topic: 'Social',
          text: 'Primary school teaching assistant. Lives with a flatmate. Hasn\u2019t told Ben yet; he\u2019s away this week.'
        },
        {
          topic: 'How to play it',
          text: 'Mortified and tearful, avoiding the camera at first. You use words like "dirty" and "forever". Relax noticeably if the doctor is matter-of-fact and non-judgemental and explains how common it is. Ask: "What if he thinks I cheated?" If the doctor asks to see the area on video, you are uncomfortable and would prefer to send a photo or be seen in person with a chaperone.'
        }
      ],
      ice: {
        ideas: '"It\u2019s herpes. I looked it up. It means I\u2019m dirty."',
        concerns: 'HIDDEN AGENDA \u2014 her relationship: "What if he thinks I cheated? Or did he cheat on me?" Also fears never being able to have children normally, and having it "forever".',
        expectations: '"Something to make it stop hurting, and to know what this means for me and Ben."'
      },
      cues: [
        '"Does that mean I\u2019m dirty?" \u2014 shame to address with destigmatising explanation.',
        '"What do I tell my partner?" \u2014 relationship fear and the question of who gave it to whom.',
        '"It stings terribly when I wee" \u2014 risk of urinary retention; practical advice needed.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises FIRST-EPISODE GENITAL HERPES (painful grouped vesicles/ulcers, dysuria, tender inguinal lymphadenopathy, flu-like systemic symptoms) and considers other causes of genital ulceration'
      },
      {
        dom: 'dg',
        text: 'Confirms appropriately \u2014 clinical diagnosis supported by an HSV swab/PCR from a lesion \u2014 and involves/refers GUM/sexual-health services for confirmation, full STI screen (including HIV and syphilis) and support with telling partners'
      },
      {
        dom: 'cm',
        text: 'Treats promptly with an oral ANTIVIRAL (aciclovir 400 mg three times daily for 5 days, BASHH 2024; valaciclovir/famciclovir alternatives) started early without waiting for the swab, asks about possible pregnancy, plus symptomatic care (analgesia, saline bathing, topical anaesthetic, fluids) and warns about URINARY RETENTION'
      },
      {
        dom: 'cm',
        text: 'Counsels the NATURAL HISTORY in a destigmatising way \u2014 common, manageable, lifelong but recurrences usually milder/shorter and often less frequent; not "dirty"/promiscuous'
      },
      {
        dom: 'cm',
        text: 'Counsels TRANSMISSION and risk reduction (asymptomatic shedding, condoms, partner disclosure, suppressive therapy for frequent recurrences) and the importance of disclosing herpes in any future PREGNANCY (neonatal risk)'
      },
      {
        dom: 'ro',
        text: 'Leads with COMPASSION \u2014 explicitly addressing the shame and the "dirty/forever/partner" fears \u2014 rather than a brisk prescription, and validates her distress'
      },
      {
        dom: 'ro',
        text: 'Explains the diagnosis and plan clearly, checks understanding, and supports her through a distressing diagnosis'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: urinary retention/severe symptoms \u2192 urgent review, GUM referral and STI-screen follow-up, recurrence and suppression discussion, pregnancy advice, and review \u2014 accurate treatment + destigmatising counselling'
      }
    ],
    worked: [
      {
        lbl: 'Compassion first',
        txt: '"First, please don\u2019t be embarrassed, and let me say this clearly: this does NOT mean you\u2019re \u2018dirty\u2019 \u2014 genital herpes is extremely common and very manageable. I can see you\u2019re in pain and frightened, so let\u2019s sort both the symptoms and your worries."'
      },
      {
        lbl: 'Confirm + screen',
        txt: '"It does look like a first episode of herpes. I\u2019d like to see you in person today, with a chaperone if you\u2019d like one, to examine you and take a swab from a sore to confirm it \u2014 could you be pregnant at the moment? I\u2019d also like you to be seen at the sexual-health clinic for a full check, including HIV and syphilis tests, and to help with telling partners \u2014 they\u2019re experts and completely confidential."'
      },
      {
        lbl: 'Treat early',
        txt: '"I\u2019ll start you on an antiviral tablet today, without waiting for the swab \u2014 aciclovir three times a day for five days \u2014 it works best started early and will settle this episode faster. For the pain: salt-water baths, painkillers, and a numbing gel for weeing, plus plenty of fluids. Passing urine in a warm bath can help. If it becomes so sore you can\u2019t pass urine at all, contact us urgently \u2014 that occasionally needs hospital."'
      },
      {
        lbl: 'The "forever" question',
        txt: '"Honestly: the virus does stay in the body, so it can come back \u2014 but here\u2019s the reassuring part: recurrences are usually much milder and shorter than this first one, and often become less frequent over time. If they\u2019re frequent, a daily tablet can suppress them."'
      },
      {
        lbl: 'Partners + transmission',
        txt: '"On your partner \u2014 it can pass on even without visible sores, so condoms help reduce, though not remove, the risk. It\u2019s worth an honest conversation; the clinic can help with that. None of this makes you a bad person."'
      },
      {
        lbl: 'Pregnancy + safety-net',
        txt: '"One important thing for the future: if you\u2019re ever pregnant, tell your midwife/doctor you\u2019ve had herpes, as it needs specific care to protect the baby. Come back if it worsens, you can\u2019t pass urine, or you\u2019re struggling with how you feel about it \u2014 that matters too."'
      }
    ],
    learning: 'A FIRST EPISODE of genital herpes (HSV) presents with PAINFUL grouped VESICLES progressing to shallow ULCERS on the genitals, DYSURIA, tender INGUINAL lymphadenopathy and flu-like SYSTEMIC symptoms \u2014 first episodes being more painful and systemic than recurrences \u2014 and should be distinguished from other causes of genital ulceration (other STIs, aphthous/Beh\u00e7et\u2019s, fixed drug eruption). Diagnosis is clinical after a chaperoned face-to-face examination, supported by an HSV SWAB/PCR from the base of a lesion (BASHH 2024), and GUM/sexual-health services should ideally be involved for confirmation, a FULL STI screen including HIV and syphilis, support with telling partners (BASHH 2024: partner notification is not required as a public health measure, but telling partners is recommended) and expert counselling. Treat promptly with an oral ANTIVIRAL without waiting for the swab (BASHH 2024: within 5 days of onset or while new lesions form; aciclovir 400 mg three times daily for 5 days preferred, valaciclovir/famciclovir alternatives, dose per BNF), most effective started EARLY in a first episode, plus symptomatic care (analgesia, saline bathing, topical anaesthetic for dysuria, fluids), warning about URINARY RETENTION from severe dysuria (occasionally needing admission/catheter \u2014 the suprapubic route is considered) and advising against sexual contact while lesions are present. Critically, lead with compassionate, DESTIGMATISING counselling: genital herpes is COMMON and MANAGEABLE, a lifelong infection (the virus persists) but with RECURRENCES that are usually MILDER and SHORTER and often less frequent over time, and it does NOT mean the patient is "dirty" or promiscuous \u2014 directly addressing shame and the "forever" fear. Counsel transmission and risk reduction (asymptomatic SHEDDING means transmission can occur without lesions; condoms reduce but do not eliminate risk; partner disclosure; SUPPRESSIVE antiviral therapy for frequent recurrences and to reduce transmission) and \u2014 after asking whether she could be pregnant now \u2014 the importance of disclosing a herpes history in any future PREGNANCY because of neonatal-herpes implications (BASHH/RCOG 2024). The hidden agenda is shame and fear about relationships and the future; the skill is accurate diagnosis and early antivirals AND compassionate destigmatising counselling with GUM involvement \u2014 not a brisk prescription.',
    knowledge: {
      guideline: '[1] BASHH UK national guideline for the management of anogenital herpes (2024) \u00b7 [2] BASHH/RCOG Management of genital herpes in pregnancy and the neonate (2024 update) \u00b7 [3] BASHH summary guidance on testing for sexually transmitted infections (2023) \u00b7 [4] BHIVA/BASHH/BIA Adult HIV testing guidelines (2020) \u00b7 [5] BNF: aciclovir \u00b7 first-episode antivirals \u00b7 GUM referral/STI screen \u00b7 transmission, suppression & pregnancy counselling',
      points: [
        {
          h: 'Recognise first episode',
          t: 'Painful grouped vesicles/ulcers, dysuria, tender inguinal lymphadenopathy, flu-like systemic symptoms = first-episode genital herpes (more painful/systemic than recurrences). Consider other ulcer causes.'
        },
        {
          h: 'Confirm & refer GUM',
          t: 'Chaperoned face-to-face examination; clinical diagnosis supported by HSV swab/PCR from the lesion base (type HSV-1/2) [1]; involve/refer GUM for confirmation and a full STI screen including chlamydia, gonorrhoea, syphilis and HIV [3][4]; ask about current pregnancy.'
        },
        {
          h: 'Antivirals + symptom care',
          t: 'BASHH [1]: start within 5 days of onset or while new lesions form, without waiting for the swab \u2014 aciclovir 400 mg three times daily for 5 days preferred; valaciclovir/famciclovir alternatives (dose per BNF [5]); review at 5 days. Analgesia, saline bathing, topical 5% lidocaine or petroleum jelly, fluids. Warn re urinary retention (may need admission/catheter; suprapubic route considered).'
        },
        {
          h: 'Natural history (destigmatise)',
          t: 'Common, manageable, lifelong but recurrences usually milder/shorter and often less frequent. Not "dirty"/promiscuous \u2014 directly counter the shame and "forever" fear.'
        },
        {
          h: 'Transmission & partners',
          t: 'Asymptomatic shedding means transmission without lesions; condoms reduce not eliminate; BASHH [1]: partner notification is not required as a public health measure, but telling partners is recommended (GUM helps); suppressive antivirals for frequent recurrences (trials used 6 or more a year) and to reduce transmission.'
        },
        {
          h: 'Pregnancy',
          t: 'Ask about possible current pregnancy now. Disclose herpes history in any future pregnancy \u2014 neonatal-herpes implications require specialist management (BASHH/RCOG [2]: highest risk with a first episode in the third trimester).'
        },
        {
          h: 'Never do',
          t: 'Never deliver the diagnosis briskly without addressing shame/fear; never delay early antivirals; never miss urinary retention; never omit GUM/STI screen or pregnancy counselling.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Urgent review for urinary retention/severe symptoms; GUM referral and STI-screen follow-up; recurrence/suppression discussion; pregnancy advice; psychological support.'
        }
      ]
    }
  };

  /* ============ 235. VIDEO — Hyperemesis gravidarum: severe nausea & vomiting of pregnancy ============ */
  const c235 = {
    id: 'hyperemesis-gravidarum',
    title: '"I\u2019m 9 weeks pregnant and can\u2019t keep anything down \u2014 not even water \u2014 I feel awful and I\u2019m scared"',
    type: 'video',
    duration: 12,
    meta: {
      age: 28,
      sex: 'F',
      setting: 'Video/urgent consultation (she cannot be examined on video, so hydration is assessed face to face at the pregnancy day unit the same day) \u2014 severe vomiting in early pregnancy.',
      system: 'Obstetrics \u2014 hyperemesis gravidarum: severity, dehydration & safe antiemetics',
      checked: 'October 2026'
    },
    brief: 'Mrs Sofia Marenco, 28, is 9 weeks into a confirmed pregnancy with SEVERE persistent nausea and VOMITING \u2014 unable to keep down food OR fluids, with reduced urine output, light-headedness and weight loss (urine ketones are not used to judge severity). The examinable task is to differentiate ordinary nausea/vomiting of pregnancy (NVP) from HYPEREMESIS GRAVIDARUM (RCOG Green-top Guideline No. 69, 2024, using the Windsor definition (international): onset before 16 weeks, nausea and vomiting with at least one severe, inability to eat and/or drink normally, and strong limitation of daily activities, with signs of dehydration contributing \u2014 replacing the older triad of >5% weight loss, dehydration and electrolyte imbalance), to ASSESS SEVERITY (the PUQE score, whether fluids and oral antiemetics stay down, clinical dehydration, weight and U&E \u2014 RCOG 2024: ketonuria is not an indicator of dehydration and should not be used to judge severity; dehydration signs need a face-to-face assessment, not video) and decide DISPOSITION \u2014 inability to keep fluids down / clinical dehydration warrants same-day referral for IV REHYDRATION (ambulatory/day-unit where possible, or admission), while mild cases can be managed in the community; to prescribe SAFE first-line ANTIEMETICS in pregnancy (cyclizine, promethazine, prochlorperazine or chlorpromazine first-line, dose per BNF, by a non-oral route if tablets are not kept down; second line ondansetron \u2014 RCOG 2024: its use should not be discouraged if first line fails, MHRA January 2020 noting a very small increase in the absolute risk of oral clefts with first-trimester use \u2014 or metoclopramide, limited to 5 days because of extrapyramidal effects, MHRA August 2013), with thiamine to prevent Wernicke\u2019s (RCOG: oral 100 mg three times daily or IV vitamin B complex for all women admitted with vomiting or severely reduced intake) and consideration of LMWH if admitted (RCOG GTG 37a); to ask about mood; to EXCLUDE other causes/complications (UTI, molar/multiple pregnancy, thyroid, other abdominal pathology); and to provide reassurance, safety-netting and follow-up. The skill is severity assessment + correct disposition (IV fluids if not tolerating oral) + safe antiemetics + support \u2014 not dismissing it as "morning sickness".',
    script: {
      opening: '"I\u2019m about nine weeks pregnant and I just can\u2019t stop being sick \u2014 I can\u2019t keep food down, and now not even water; it comes straight back up. I\u2019m exhausted, dizzy when I stand, I\u2019ve barely passed urine today, and I\u2019ve lost weight. Everyone says it\u2019s just morning sickness but this feels really wrong and I\u2019m frightened for the baby."',
      facts: [
        {
          topic: 'The sickness',
          text: 'Started at 6 weeks, much worse over the last week. Nauseous all day, "every hour of the day". Vomiting more than 5 times a day and retching constantly. Nothing has stayed down since last night, not even sips of water.'
        },
        {
          topic: 'Dehydration',
          text: 'Passed urine once this morning \u2014 small and dark. Dizzy when she stands; had to sit on the bathroom floor. Mouth very dry. Clothes loose \u2014 thinks she\u2019s lost 3\u20134 kg (was 62 kg before pregnancy). Not confused.'
        },
        {
          topic: 'Negatives (if asked)',
          text: 'No blood in the vomit. No tummy pain apart from aching muscles from retching. No fever. No diarrhoea. No burning or frequency when passing urine. No vaginal bleeding. No headaches or palpitations. No previous stomach problems.'
        },
        {
          topic: 'The pregnancy',
          text: 'First pregnancy, planned. Positive test at 4 weeks; dating scan not yet done (booked for next week). Hasn\u2019t seen the midwife yet \u2014 booking appointment is next week.'
        },
        {
          topic: 'Medicines',
          text: 'Was taking folic acid but can\u2019t keep it down. Has taken nothing for the sickness \u2014 "I was scared it would harm the baby." No allergies. No previous medical problems.'
        },
        {
          topic: 'Mood and support',
          text: 'Low and exhausted, crying a lot, "I just want it to stop", but no thoughts of harming herself or ending the pregnancy if asked. Husband, Marco, works shifts but can drive her. Works in a bakery \u2014 the smells make it worse; off sick this week.'
        },
        {
          topic: 'How to play it',
          text: 'Weak, quiet, lying on the sofa with a sick bowl. Answer in short phrases. You feel dismissed by everyone saying "morning sickness". Feel listened to if the doctor takes it seriously. Ask: "Are the anti-sickness medicines safe for the baby?" Agree to go to hospital if it is explained.'
        }
      ],
      ice: {
        ideas: '"This isn\u2019t normal morning sickness. Something\u2019s wrong."',
        concerns: 'HIDDEN AGENDA \u2014 "That the baby isn\u2019t getting anything and will be harmed. And that no one will listen." Her sister had a miscarriage last year.',
        expectations: '"For someone to take it seriously and stop the sickness \u2014 without anything that could hurt the baby."'
      },
      cues: [
        '"Not even water" \u2014 the key point that decides same-day IV fluids.',
        '"Everyone says it\u2019s just morning sickness" \u2014 feeling dismissed.',
        '"I was scared to take anything in case it harms the baby" \u2014 fear of medicines to address with safe options.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Distinguishes ordinary NVP from HYPEREMESIS GRAVIDARUM (RCOG GTG 69, 2024 \u2014 Windsor definition: onset before 16 weeks, severe nausea or vomiting, inability to eat and/or drink normally, strong limitation of daily activities, dehydration signs contributing) \u2014 not dismissing it as "morning sickness"'
      },
      {
        dom: 'dg',
        text: 'Assesses SEVERITY objectively \u2014 PUQE score, clinical dehydration signs (face to face, not on video), weight loss, ability to tolerate oral fluids, U&E \u2014 not ketonuria (RCOG 2024) \u2014 with the key discriminator being whether she can keep fluids down'
      },
      {
        dom: 'cm',
        text: 'Decides DISPOSITION correctly \u2014 inability to keep fluids or oral antiemetics down / clinical dehydration/electrolyte derangement \u2192 same-day referral for IV REHYDRATION (day unit/admission); milder cases managed in the community with review'
      },
      {
        dom: 'cm',
        text: 'Prescribes SAFE antiemetics in pregnancy (cyclizine/promethazine/prochlorperazine/chlorpromazine first-line; ondansetron second line, not discouraged (RCOG 2024; MHRA 2020); metoclopramide limited to 5 days (MHRA 2013)), ensures THIAMINE (100 mg three times daily orally or IV B complex if admitted), and considers LMWH/electrolyte replacement if admitted/dehydrated'
      },
      {
        dom: 'dg',
        text: 'Considers and excludes other causes/complications (UTI, molar/multiple pregnancy \u2014 ultrasound, thyroid dysfunction, other abdominal pathology; AKI, Wernicke\u2019s)'
      },
      {
        dom: 'ro',
        text: 'Validates that this is a recognised, treatable condition (not "just morning sickness"), addresses her fear for the baby, asks about her mood, and supports her through a debilitating illness'
      },
      {
        dom: 'ro',
        text: 'Explains the plan and reasoning clearly, checks understanding, and reassures appropriately'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: return/urgent if unable to keep fluids down, worsening dehydration, reduced urine, abdominal pain or feeling very unwell; arranges IV rehydration/referral as needed, antiemetic review, and follow-up \u2014 severity-based disposition + safe treatment, not dismissal'
      }
    ],
    worked: [
      {
        lbl: 'Validate + reframe',
        txt: '"You\u2019re right that this isn\u2019t \u2018just morning sickness\u2019 \u2014 when you can\u2019t keep down even water, you\u2019re passing little urine and losing weight, that\u2019s a recognised condition called hyperemesis gravidarum, and it needs proper treatment. I\u2019m glad you came."'
      },
      {
        lbl: 'Assess severity',
        txt: '"I can\u2019t check how dehydrated you are over video \u2014 your pulse and blood pressure sitting and standing and your mouth need someone to see you in person, so the pregnancy day unit will do that today, with your weight and some bloods for your salts and kidneys. A urine dip for \u2018ketones\u2019 doesn\u2019t tell us how dehydrated you are. The key question is whether you can hold any fluids down at all \u2014 when did you last keep a drink down?"'
      },
      {
        lbl: 'Disposition',
        txt: '"Because you can\u2019t keep fluids down and you\u2019re dehydrated, the safest thing is to get you fluids into a vein \u2014 I\u2019ll arrange that today, either at the day-assessment unit or hospital. That settles things much faster than trying to sip at home."'
      },
      {
        lbl: 'Safe treatment',
        txt: '"There are anti-sickness medicines that are safe in pregnancy \u2014 the unit can give one like cyclizine by injection, as tablets won\u2019t stay down \u2014 and they\u2019ll give a vitamin (thiamine) to protect your brain and nerves during the sickness. If the first medicine doesn\u2019t work, there are good second options. Treating this protects both you and the baby."'
      },
      {
        lbl: 'Exclude mimics',
        txt: '"I\u2019ll also check there\u2019s nothing else adding to it \u2014 a water infection, your thyroid \u2014 and a scan will confirm the pregnancy and check it\u2019s not twins or anything unusual, which can make sickness worse."'
      },
      {
        lbl: 'Reassure + safety-net',
        txt: '"This is treatable and it does usually ease as pregnancy goes on. How has your mood been with all this? Please don\u2019t drive yourself to the unit. Come back urgently \u2014 or to the unit \u2014 if you still can\u2019t keep fluids down, you\u2019re passing very little urine, get tummy pain, or feel really unwell. We\u2019ll review you closely."'
      }
    ],
    learning: 'Distinguish ordinary nausea/vomiting of pregnancy (NVP) from HYPEREMESIS GRAVIDARUM \u2014 RCOG Green-top Guideline No. 69 (2024), using the Windsor definition (international): onset before 16 weeks, nausea and vomiting with at least one severe, INABILITY to eat and/or drink normally and strong limitation of daily activities, with DEHYDRATION signs contributing (replacing the older triad of >5% weight loss, dehydration and electrolyte disturbance) \u2014 because inability to keep down even fluids, reduced urine output, light-headedness and weight loss mark a serious condition, not "just morning sickness". Assess severity objectively with the PUQE score, dehydration signs (tachycardia, postural drop, dry mucous membranes \u2014 assessed face to face, not on video \u2014 and reduced urine output), weight loss versus booking weight, the ability to tolerate oral fluids and antiemetics, and U&E (electrolytes/AKI) \u2014 not KETONURIA, which RCOG 2024 says is not an indicator of dehydration \u2014 the key practical discriminator being whether she can keep ORAL FLUIDS down. Decide DISPOSITION on severity: inability to tolerate fluids or oral antiemetics, clinical dehydration, abnormal electrolytes, or failure of community antiemetics warrants referral for IV REHYDRATION via an ambulatory/day-assessment unit or admission, whereas milder cases tolerating some fluids can be managed in the community with oral antiemetics and review \u2014 do not leave a woman who cannot tolerate fluids to "try ginger and crackers". Prescribe SAFE antiemetics in pregnancy (cyclizine, promethazine, prochlorperazine or chlorpromazine first-line, non-oral if tablets are not kept down; second line ondansetron, whose use RCOG 2024 says should not be discouraged if first line fails (MHRA January 2020: very small increase in absolute oral-cleft risk with first-trimester use), or metoclopramide limited to 5 days (MHRA August 2013)), give THIAMINE to prevent Wernicke\u2019s encephalopathy (RCOG: oral 100 mg three times daily or IV vitamin B complex for all women admitted with vomiting or severely reduced intake), consider LMWH if admitted (RCOG GTG 37a), and replace electrolytes. Ask about mood and offer support (RCOG 2024). Consider and exclude other causes/complications: UTI, MOLAR or MULTIPLE pregnancy (ultrasound), THYROID dysfunction, and other abdominal pathology, alongside complications such as electrolyte disturbance, AKI and Wernicke\u2019s. The hidden agenda is fear for the baby and feeling dismissed; validate that this is recognised and treatable, assess severity, arrange correct disposition (IV fluids if not tolerating oral), prescribe safe antiemetics and thiamine, exclude mimics, and follow up compassionately.',
    knowledge: {
      guideline: '[1] RCOG Green-top Guideline No. 69 The management of nausea and vomiting in pregnancy and hyperemesis gravidarum (February 2024) \u00b7 [2] MHRA Drug Safety Update: ondansetron and oral clefts (January 2020) \u00b7 [3] MHRA Drug Safety Update: metoclopramide and neurological adverse effects (August 2013) \u00b7 [4] RCOG Green-top Guideline No. 37a Reducing the risk of venous thromboembolism during pregnancy and the puerperium (2015) \u00b7 [5] BNF: antiemetics in pregnancy \u00b7 [6] Windsor definition of hyperemesis gravidarum (2021) (international) \u00b7 PUQE & dehydration \u00b7 safe antiemetics + thiamine \u00b7 IV rehydration disposition',
      points: [
        {
          h: 'NVP vs hyperemesis',
          t: 'Hyperemesis (RCOG [1], Windsor definition [6], international) = onset before 16 weeks, severe nausea or vomiting, inability to eat and/or drink normally and strong limitation of daily activities, with dehydration signs contributing (the older >5% weight loss triad is replaced) \u2014 not ordinary morning sickness. Inability to keep fluids down marks severity.'
        },
        {
          h: 'Assess severity',
          t: 'PUQE score (mild 6 or less, moderate 7 to 12, severe 13 to 15), clinical dehydration signs (face to face), weight loss, oral-fluid tolerance, U&E. RCOG [1]: ketonuria should not be used to judge severity. Key discriminator: can she keep oral fluids down?'
        },
        {
          h: 'Disposition',
          t: 'Cannot tolerate fluids / clinical dehydration/electrolyte derangement / failed community antiemetics \u2192 same-day IV rehydration (ambulatory day unit where possible, admission if not controlled or complications; sodium chloride with potassium, not dextrose). Milder cases: community management + review.'
        },
        {
          h: 'Safe antiemetics',
          t: 'First-line: cyclizine, promethazine, prochlorperazine, chlorpromazine (dose per BNF [5]; non-oral if not kept down). Second line: ondansetron \u2014 not to be discouraged if first line fails (RCOG [1]; MHRA [2]: very small absolute oral-cleft risk increase in the first trimester); metoclopramide, maximum 5 days (MHRA [3]). Thiamine 100 mg three times daily orally or IV B complex for all admitted with vomiting or severely reduced intake (prevent Wernicke\u2019s); consider LMWH if admitted (RCOG GTG 37a [4]); replace electrolytes.'
        },
        {
          h: 'Exclude mimics',
          t: 'UTI, molar/multiple pregnancy (ultrasound), thyroid dysfunction, other abdominal pathology. Watch complications: electrolyte disturbance, AKI, Wernicke\u2019s, Mallory-Weiss.'
        },
        {
          h: 'Reassure & support',
          t: 'Recognised, treatable condition; treating it protects mother and pregnancy; debilitating with mood/relationship/work impact \u2014 assess mental health, support and validate (RCOG [1]); ginger is not recommended for HG.'
        },
        {
          h: 'Never do',
          t: 'Never dismiss as "just morning sickness"; never leave a woman who can\u2019t tolerate fluids without IV rehydration/referral; never omit thiamine in prolonged vomiting; never miss molar/multiple pregnancy or thyroid involvement.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Urgent return/unit if unable to keep fluids down, reduced urine, worsening dehydration, abdominal pain or very unwell; antiemetic review; close follow-up.'
        }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c232, c233, c234, c235);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {
    'trigeminal-neuralgia': {
      ceg: ['Long-term conditions & cancer', 'Prescribing & pharmacology'],
      stem: {
        name: 'Annette Boll',
        age: '58 years \u00b7 female',
        pmh: [
          'Paroxysms of sudden, severe, unilateral electric-shock/stabbing R facial pain (cheek/jaw), seconds long',
          'Triggered by touch/chewing/tooth-brushing/breeze; pain-free intervals',
          'Scared to eat/talk; exhausted'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Electric-shock pains in my face when I brush my teeth or feel a breeze \u2014 unbearable."',
        reason: 'Video consultation (examination arranged face to face) \u2014 paroxysmal severe facial pain.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Recognise TN',
          d: 'Paroxysmal unilateral electric-shock facial pain, touch-triggered, pain-free intervals \u2014 not dental.'
        },
        {
          t: '2\u20134',
          h: 'Red-flag screen',
          d: 'Young onset/bilateral/sensory loss/other neuro signs/MS features \u2192 secondary cause \u2192 neurology + MRI; cranial nerves examined face to face.'
        },
        {
          t: '4\u20137',
          h: 'Start carbamazepine',
          d: 'First-line (NICE CG173), 100 mg once or twice daily then titrate (BNF); baseline FBC/U&E/LFTs; counsel hyponatraemia/blood dyscrasia/rash(SJS)/interactions + monitoring.'
        },
        {
          t: '7\u20139',
          h: 'Impact',
          d: 'Fear of eating/talking, weight loss, low mood \u2014 acknowledge and address; ask directly about suicidal thoughts.'
        },
        {
          t: '9\u201312',
          h: 'Refer + safety-net',
          d: 'Neurology (confirm/refractory/surgery); stop drug for rash/unwell; review titration.'
        }
      ],
      wordPics: {
        fail: 'Labels it dental pain or migraine; no carbamazepine or no counselling/monitoring; skips the secondary-cause red-flag screen.',
        pass: 'Recognises TN, starts carbamazepine with counselling, screens red flags and refers neurology.',
        exc: 'Confidently recognises trigeminal neuralgia, distinguishes it from dental/other facial pain, explicitly screens secondary-cause red flags, starts first-line carbamazepine with full side-effect/monitoring counselling, acknowledges the quality-of-life impact, and refers neurology with safety-netting.'
      },
      avoid: [
        {
          dont: '"It\u2019s probably your teeth \u2014 see your dentist."',
          instead: '"This electric-shock, touch-triggered pattern is trigeminal neuralgia, a nerve pain \u2014 not dental \u2014 and it responds to a specific tablet."',
          why: 'Mislabelling TN as dental pain delays effective treatment (carbamazepine).'
        },
        {
          dont: '(No red-flag screen) treating without checking for secondary causes.',
          instead: '"Any numbness, double vision, weakness, or is it both sides? Those would mean we need a scan."',
          why: 'Missing secondary TN (MS/compressive lesion) misses serious underlying pathology.'
        },
        {
          dont: '(No counselling) starting carbamazepine with no monitoring/safety advice.',
          instead: '"It can lower your sodium or rarely affect blood/liver \u2014 I\u2019ll monitor bloods, and stop it for any rash or feeling unwell."',
          why: 'Carbamazepine needs side-effect/monitoring counselling (hyponatraemia, dyscrasia, SJS, interactions).'
        }
      ]
    },
    pmdd: {
      ceg: ['Mental health & addiction', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Carys Devlin',
        age: '33 years \u00b7 female',
        pmh: [
          'Severe cyclical mood symptoms (rage, despair, anxiety) in the 1\u20132 weeks before periods; resolve after menses',
          'Functionally impairing (relationships/work); frightened by lows',
          'Previously dismissed as "bad PMS"'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Before my period I become a different person \u2014 rage, despair, I scare myself \u2014 then it lifts."',
        reason: 'Video consultation \u2014 severe cyclical mood symptoms (no examination needed).'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Validate + name',
          d: 'Not "going mad"/"just PMS" \u2014 cyclical luteal severe mood symptoms resolving after menses = PMDD.'
        },
        {
          t: '2\u20134',
          h: 'Confirm pattern',
          d: 'Prospective symptom diary \u22652 cycles; distinguish from a mood disorder that persists through the cycle.'
        },
        {
          t: '4\u20136',
          h: 'Assess risk',
          d: 'Severity/impact + suicide/self-harm risk (esp. luteal). Screen explicitly; safety plan (NICE NG225); ask about elevated mood.'
        },
        {
          t: '6\u20139',
          h: 'Treatment',
          d: 'Lifestyle; SSRI (continuous or luteal, unlicensed); new-generation combined pill after UKMEC check; CBT; shared decision (RCOG GTG 48).'
        },
        {
          t: '9\u201312',
          h: 'Refer + safety-net',
          d: 'Gynae if refractory; crisis safety-net (worse mood/suicidality, esp. premenstrual); SSRI review within 1 week (NICE NG222); diary + review.'
        }
      ],
      wordPics: {
        fail: 'Dismisses as "just PMS"/hormones; no diary, no risk assessment, no evidence-based treatment offered.',
        pass: 'Recognises PMDD, confirms with a diary, assesses risk, and offers SSRI/hormonal/CBT with validation.',
        exc: 'Strongly validates and names PMDD, distinguishes it from PMS and a persistent mood disorder, confirms with a prospective diary, screens suicide risk, offers evidence-based treatment (SSRI continuous/luteal, ovulation suppression, CBT) with shared decision-making, and safety-nets.'
      },
      avoid: [
        {
          dont: '"It\u2019s just bad PMS \u2014 lots of women get it, try to ride it out."',
          instead: '"This is PMDD \u2014 a recognised, severe and treatable condition, not just PMS. Let\u2019s confirm it and get you effective help."',
          why: 'Dismissing disabling PMDD as "just PMS" invalidates the patient and misses effective treatment.'
        },
        {
          dont: '(No risk screen) treating without asking about safety.',
          instead: '"In that premenstrual week, have you had thoughts of harming yourself? "',
          why: 'PMDD carries a real luteal-phase suicide/self-harm risk that must be screened.'
        },
        {
          dont: '(Diagnosing on recall) starting treatment without a diary.',
          instead: '"Let\u2019s confirm the pattern with a daily diary over two cycles \u2014 it also rules out a depression that\u2019s there all the time."',
          why: 'A prospective diary is needed to confirm PMDD and exclude a persistent mood disorder.'
        }
      ]
    },
    'genital-herpes-first': {
      ceg: ['Gender, reproductive & sexual health', 'New & undifferentiated presentations'],
      stem: {
        name: 'Lauren Hicks',
        age: '26 years \u00b7 female',
        pmh: [
          'First episode: painful grouped vulval vesicles/ulcers + dysuria + tender inguinal nodes + flu-like symptoms',
          'Distressed, ashamed; fears being "dirty" / "forever"',
          'Worried about partner disclosure'
        ],
        meds: ['Combined oral contraceptive'],
        allergy: 'NKDA',
        recent: '"Painful blisters and ulcers down below \u2014 terrified it\u2019s herpes. Does this mean I\u2019ll have it forever?"',
        reason: 'Video consultation (chaperoned examination and swab face to face the same day) \u2014 painful genital ulceration, first episode.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Compassion first',
          d: 'Not "dirty"; common and manageable; address shame/fear up front.'
        },
        {
          t: '2\u20134',
          h: 'Confirm + screen',
          d: 'Chaperoned face-to-face exam + HSV swab/PCR; GUM referral, full STI screen incl. HIV and syphilis; telling partners recommended.'
        },
        {
          t: '4\u20136',
          h: 'Treat early',
          d: 'Oral aciclovir 400 mg three times daily for 5 days, not waiting for the swab (BASHH 2024) + analgesia/saline/topical anaesthetic/fluids; warn urinary retention; ask about pregnancy.'
        },
        {
          t: '6\u20139',
          h: 'Natural history',
          d: 'Lifelong but recurrences milder/shorter/less frequent; suppression if frequent; transmission/asymptomatic shedding, condoms, disclosure.'
        },
        {
          t: '9\u201312',
          h: 'Pregnancy + safety-net',
          d: 'Disclose herpes in future pregnancy (neonatal risk); urgent if can\u2019t pass urine; psychological support.'
        }
      ],
      wordPics: {
        fail: 'Brisk prescription with no destigmatising counselling; misses urinary retention; no GUM/STI screen or pregnancy advice; leaves shame/"forever" fear unaddressed.',
        pass: 'Diagnoses and treats with early antivirals, refers GUM, and counsels natural history/transmission compassionately.',
        exc: 'Leads with compassion and destigmatisation, confirms with swab and involves GUM/STI screen, treats early with antivirals + symptom care (warns retention), counsels natural history/transmission/partners/suppression and future-pregnancy implications, and supports her psychologically.'
      },
      avoid: [
        {
          dont: '(Brisk) "It\u2019s herpes, here\u2019s aciclovir, see the nurse." ',
          instead: '"This is common and manageable and doesn\u2019t make you \u2018dirty\u2019 \u2014 let\u2019s treat it and talk through what it means for you and your partner."',
          why: 'A brisk prescription ignores the shame/fear that is the heart of this consultation.'
        },
        {
          dont: '(No retention warning) discharging without urinary advice.',
          instead: '"If it gets so sore you can\u2019t pass urine at all, contact us urgently \u2014 that occasionally needs hospital."',
          why: 'Severe dysuria can cause urinary retention, an important complication.'
        },
        {
          dont: '(No pregnancy advice) omitting future-pregnancy counselling.',
          instead: '"If you\u2019re ever pregnant, tell your midwife you\u2019ve had herpes \u2014 it needs specific care to protect the baby."',
          why: 'Neonatal-herpes implications make pregnancy disclosure important.'
        }
      ]
    },
    'hyperemesis-gravidarum': {
      ceg: ['Gender, reproductive & sexual health', 'Urgent & unscheduled care'],
      stem: {
        name: 'Sofia Marenco',
        age: '28 years \u00b7 female',
        pmh: [
          '9 weeks pregnant; severe persistent vomiting \u2014 \u26a0 cannot keep fluids down',
          'Reduced urine output, light-headed, weight loss (likely ketotic/dehydrated)',
          'Told it\u2019s "just morning sickness"; frightened for the baby'
        ],
        meds: ['Pregnancy multivitamin (not tolerating)'],
        allergy: 'NKDA',
        recent: '"9 weeks pregnant and can\u2019t keep anything down \u2014 not even water \u2014 I feel awful and I\u2019m scared."',
        reason: 'Video/urgent (examination face to face at the day unit the same day) \u2014 severe vomiting in early pregnancy.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Reframe',
          d: 'Can\u2019t keep fluids down + weight loss + low urine = hyperemesis, not "just morning sickness".'
        },
        {
          t: '2\u20134',
          h: 'Assess severity',
          d: 'PUQE, dehydration signs (face to face at the unit), weight, U&E \u2014 not ketonuria; key = can she tolerate oral fluids?'
        },
        {
          t: '4\u20136',
          h: 'Disposition',
          d: 'Not tolerating fluids/dehydrated \u2192 same-day IV rehydration (day unit/admission); milder \u2192 community.'
        },
        {
          t: '6\u20139',
          h: 'Safe treatment',
          d: 'Cyclizine/promethazine/prochlorperazine first-line (ondansetron second line, not discouraged; metoclopramide max 5 days); thiamine 100 mg three times daily; LMWH if admitted; ask about mood.'
        },
        {
          t: '9\u201312',
          h: 'Exclude + safety-net',
          d: 'UTI/molar/multiple(USS)/thyroid; reassure + urgent return if can\u2019t keep fluids/low urine/very unwell.'
        }
      ],
      wordPics: {
        fail: 'Dismisses as morning sickness and advises ginger/crackers despite inability to keep fluids down; no severity assessment, IV fluids, thiamine or mimic exclusion.',
        pass: 'Recognises hyperemesis, assesses severity, arranges IV rehydration and safe antiemetics with thiamine.',
        exc: 'Distinguishes hyperemesis from NVP, assesses severity objectively (PUQE/U&E/fluid tolerance, not ketonuria), arranges IV rehydration when fluids not tolerated, prescribes safe antiemetics + thiamine, excludes UTI/molar/multiple/thyroid, and validates/safety-nets compassionately.'
      },
      avoid: [
        {
          dont: '"It\u2019s just morning sickness \u2014 try ginger and small snacks, it\u2019ll pass."',
          instead: '"You can\u2019t keep fluids down and you\u2019re dehydrated \u2014 that\u2019s hyperemesis and needs IV fluids and anti-sickness treatment today."',
          why: 'Dismissing a woman who can\u2019t tolerate fluids risks dangerous dehydration/electrolyte disturbance.'
        },
        {
          dont: '(Unsafe antiemetic choice) prescribing without considering pregnancy safety.',
          instead: '"I\u2019ll use a pregnancy-safe anti-sickness like cyclizine, by injection at the unit if tablets won\u2019t stay down, and make sure you get thiamine to keep you well."',
          why: 'Antiemetic choice in pregnancy matters; thiamine prevents Wernicke\u2019s in prolonged vomiting.'
        },
        {
          dont: '(No mimic check) assuming hyperemesis without excluding causes.',
          instead: '"I\u2019ll check for a water infection and thyroid, and a scan to make sure it\u2019s not twins or a molar pregnancy."',
          why: 'UTI, molar/multiple pregnancy and thyroid dysfunction can drive or mimic severe vomiting.'
        }
      ]
    }
  });

})();
