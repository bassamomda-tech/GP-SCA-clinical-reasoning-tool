/* ============================================================
   Reasoning GP — Case Library batch 61:
   "Neurology one-offs II" (NEW themes from the Emily Kirby-Blount
   casebook)
   TIA (the resolved episode that is a medical emergency — ABCD2/
   same-day pathway, no driving); migraine + medication-overuse
   headache (diagnose, treat, and stop the painkillers driving it);
   peripheral neuropathy (glove-and-stocking — find the cause, esp.
   diabetes/B12/alcohol); and normal-pressure hydrocephalus (the
   reversible triad mislabelled "just dementia/ageing"). No NG12
   cancer pathway genuinely applies; none invented (red-flag/
   secondary-headache safety-netting included instead).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases60.js.
   ============================================================ */

(function(){

  /* ============ 216. VIDEO — TIA: the episode that resolved but is an emergency ============ */
  const c216 = {
    id: 'tia-resolved',
    title: '"My arm went weak and my speech slurred for half an hour yesterday \u2014 but it\u2019s fine now, so no harm done?"',
    type: 'video',
    duration: 12,
    meta: {
      age: 69,
      sex: 'M',
      setting: 'Video consultation \u2014 a resolved transient neurological episode.',
      system: 'Neurology / Stroke \u2014 transient ischaemic attack: the resolved emergency',
      checked: 'October 2026'
    },
    brief: 'Mr Bernard Cole, 69 (hypertensive, ex-smoker), reports that yesterday his right arm went weak and his speech slurred for about 30 minutes, then fully recovered; he has come only because his wife insisted. He thinks "no harm done". The examinable task is to recognise a TRANSIENT ISCHAEMIC ATTACK (TIA) \u2014 a transient, fully-resolving focal neurological deficit of presumed vascular origin \u2014 as a MEDICAL EMERGENCY and a WARNING of imminent stroke, NOT a benign event: take a focused history (deficit type/onset/duration/resolution, FAST features, amaurosis fugax, AF/palpitations, vascular risk), assess what video allows (watch speech and face) and arrange the examination face to face the same day, through the TIA clinic (BP, pulse for AF, carotid, neuro, cardiovascular \u2014 none possible by video), give ASPIRIN 300 mg immediately (unless contraindicated) and refer immediately for SAME-DAY/within-24h-of-onset specialist TIA-clinic assessment per NICE NG128 (urgent carotid imaging, brain imaging only as the specialist decides \u2014 NG128 advises against CT unless an alternative diagnosis that CT could detect is suspected \u2014 risk-factor and secondary-prevention work-up; NG128 says do not use scoring systems such as ABCD2 to decide urgency, so every suspected TIA gets the urgent route), and \u2014 critically \u2014 advise he MUST NOT DRIVE and inform of the DVLA rules (DVLA: Group 1 must not drive for 1 month after a TIA; Group 2 must stop driving and notify DVLA, with relicensing only after 1 year). Address the "no harm done" minimisation firmly but supportively.',
    script: {
      opening: '"My wife made me come \u2014 honestly I think it\u2019s a fuss over nothing. Yesterday my right arm went weak and my words came out slurred for maybe half an hour, then it cleared up completely and I\u2019ve been fine since. So no harm done, right? I don\u2019t need to do anything about it now it\u2019s passed?"',
      facts: [
        {
          topic: 'What happened',
          text: 'Yesterday about 4 pm, sitting reading the paper. "My right hand just went useless \u2014 I dropped my mug, couldn\u2019t lift the arm properly." At the same time "my words came out mushy". His wife said the right side of his mouth looked "a bit droopy". It came on suddenly, all at once.'
        },
        {
          topic: 'How long / recovery',
          text: '"Half an hour, maybe a bit less." Then everything came back completely. If asked: no weakness, numbness or speech trouble now. "I feel absolutely fine today."'
        },
        {
          topic: 'Other symptoms (if asked)',
          text: 'No headache, no loss of consciousness, no fit or jerking, no vision loss in one eye ("no curtain coming down"), no double vision, no chest pain. Has noticed his heart "fluttering" once or twice in the last few months but put it down to coffee.'
        },
        {
          topic: 'Before this',
          text: 'Never had anything like it before. If asked directly: "Now you mention it, a couple of weeks ago my right hand went tingly and clumsy for a few minutes, but I ignored it."'
        },
        {
          topic: 'Past history and medicines',
          text: 'High blood pressure for about 10 years \u2014 "on one tablet, I can\u2019t remember the name". Doesn\u2019t check his blood pressure at home. No diabetes he knows of; cholesterol "a bit high once". Not on aspirin or blood thinners. No allergies. No stomach ulcers or bleeding problems.'
        },
        {
          topic: 'Lifestyle',
          text: 'Ex-smoker \u2014 20 a day for 30 years, stopped 8 years ago. Drinks "a couple of pints at the weekend". Retired bus mechanic. Lives with his wife, Pat. Drives a car every day (no HGV or bus licence now). Has aspirin "in the cupboard somewhere".'
        },
        {
          topic: 'Family history',
          text: 'Father died of a stroke at 72. Brother had a heart attack in his sixties.'
        },
        {
          topic: 'Plans',
          text: 'Due to drive to his daughter\u2019s in Leeds on Saturday (about two hours) to babysit the grandchildren. If told he can\u2019t drive: "Nobody\u2019s ever told me that. I suppose I can get a lift."'
        },
        {
          topic: 'How to play it',
          text: 'Relaxed and a bit dismissive at first; slightly embarrassed his wife made him book. If the doctor explains clearly and kindly that this was a warning of a stroke, go quiet, then admit the fear (see concerns). If the doctor just reassures you, accept it happily. Agree to aspirin and the clinic if it is explained; push back mildly on not driving.'
        }
      ],
      ice: {
        ideas: '"It came and went, so it can\u2019t have been anything serious. Maybe I slept funny on the arm, or it was a trapped nerve."',
        concerns: 'HIDDEN AGENDA \u2014 only if explored: "I suppose I did think it was a stroke at the time. Dad had one and was never the same \u2014 he couldn\u2019t talk properly for his last two years. When it went away I told myself I\u2019d imagined it." He minimises because he is frightened.',
        expectations: '"For you to tell me it\u2019s fine so my wife stops worrying." Not expecting tests or medicine, and has no idea it affects driving.'
      },
      cues: [
        '"My wife made me come" \u2014 he would not have booked himself; the minimising is a defence.',
        '"So no harm done, right?" \u2014 invites false reassurance; the candidate must explain this is an emergency warning of stroke.',
        '"I\u2019m driving up to my daughter\u2019s on Saturday" (if driving or plans are asked about) \u2014 the opening for the no-driving advice.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises a transient, fully-resolving FOCAL neurological deficit as a TIA \u2014 a MEDICAL EMERGENCY and stroke warning \u2014 and that full recovery does NOT mean "no harm done"'
      },
      {
        dom: 'dg',
        text: 'Takes a focused history (deficit type/onset/duration/resolution, FAST, amaurosis fugax, palpitations/AF, vascular risk) and arranges a same-day face-to-face examination (BP, pulse/rhythm, carotids, neuro confirming resolution, CVS \u2014 not possible by video), considering mimics'
      },
      {
        dom: 'cm',
        text: 'Gives ASPIRIN 300 mg immediately (unless contraindicated/anticoagulated) and refers for SPECIALIST TIA assessment within 24 HOURS of onset per NICE NG128 (no ABCD2-based selective delay; no CT unless an alternative diagnosis is suspected)'
      },
      {
        dom: 'cm',
        text: 'Knows the secondary-prevention package (antiplatelet \u2014 usually long-term clopidogrel \u2014 or anticoagulation if AF, high-intensity statin (atorvastatin 80 mg, NICE NG238), BP control to systolic below 130 mmHg, smoking cessation, diabetes, carotid surgery if significant symptomatic stenosis)'
      },
      {
        dom: 'cm',
        text: 'Advises he MUST NOT DRIVE \u2014 Group 1 no driving for 1 month (multiple TIAs: 3 months attack-free and notify DVLA; notify if residual deficit), Group 2 must stop, notify DVLA and wait 1 year for relicensing \u2014 and documents the advice'
      },
      {
        dom: 'ro',
        text: 'Firmly but supportively corrects the "no harm done/it\u2019s passed" minimisation, conveys the urgency and the prevention opportunity, and validates the wife\u2019s prompt'
      },
      {
        dom: 'ro',
        text: 'Explains the reasoning (resolved = warning to act now) in accessible terms and checks understanding'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and arranges disposition: aspirin started, within-24h specialist assessment, 999 advice if any new/persistent deficit (FAST), no driving, and review \u2014 acting on a resolved TIA as an emergency, not reassurance'
      }
    ],
    worked: [
      {
        lbl: 'Validate the wife, reframe',
        txt: '"Your wife was absolutely right to make you come \u2014 and I have to be honest with you: the fact it cleared up is not \u2018no harm done\u2019. What you describe is a mini-stroke, a TIA, and it\u2019s a serious warning that a bigger stroke could follow, especially in the next few days. That\u2019s exactly why we act now."'
      },
      {
        lbl: 'Assess',
        txt: '"Tell me again \u2014 which side, how long, did it fully clear? Any change in vision, palpitations? I can watch your speech and face on video, but I can\u2019t check your blood pressure or pulse \u2014 an irregular pulse matters \u2014 or do a proper neurological check this way, so that examination will be done face to face today at the TIA clinic."'
      },
      {
        lbl: 'Act immediately',
        txt: '"Two things now: I\u2019m giving you aspirin 300 mg today, and I\u2019m arranging for you to be seen by the stroke/TIA specialists within 24 hours \u2014 they\u2019ll examine you, scan the neck arteries, decide whether you need a brain scan, and sort out prevention. This isn\u2019t something to leave."'
      },
      {
        lbl: 'Prevention framing',
        txt: '"The good news is a TIA is a treatable warning \u2014 blood-pressure control, a statin, stopping smoking, and treating any irregular heartbeat dramatically cut your stroke risk. We turn this into a near-miss, not a disaster."'
      },
      {
        lbl: 'Driving',
        txt: '"Important: you must not drive for now \u2014 after a TIA that\u2019s a month for a car, and if you drive a bus or lorry you must stop, tell the DVLA, and it\u2019s a year before you can be relicensed. I know that\u2019s inconvenient, but it\u2019s the law and it\u2019s for your safety. I\u2019ll document it."'
      },
      {
        lbl: 'Safety-net',
        txt: '"If any weakness, droopy face, or slurred speech comes back and stays \u2014 even briefly \u2014 call 999 immediately; that could be a stroke and time is critical. Otherwise, expect the specialist contact within a day, and I\u2019ll follow up."'
      }
    ],
    learning: 'A transient, fully-resolving FOCAL neurological deficit of presumed vascular origin (unilateral weakness, dysarthria/dysphasia, facial droop, amaurosis fugax) is a TRANSIENT ISCHAEMIC ATTACK \u2014 and full recovery does NOT mean "no harm done": a TIA is a MEDICAL EMERGENCY and a strong warning of imminent stroke (risk highest in the first days), so the resolution is precisely why it must be acted on urgently. Take a focused history (deficit type/onset/duration/complete resolution, FAST features, amaurosis fugax, palpitations suggesting AF, prior episodes, vascular risk) and arrange a same-day face-to-face examination, which video cannot provide (BP, pulse/rhythm for AF, carotids, a neuro exam confirming resolution, CVS), considering mimics (hypoglycaemia, seizure with Todd\u2019s paresis, migraine aura, syncope) but treating as TIA until excluded. Give ASPIRIN 300 mg immediately (unless contraindicated or already anticoagulated, per local pathway) and refer immediately for SPECIALIST TIA-clinic assessment within 24 HOURS of onset \u2014 NICE NG128 says do not use scoring systems such as ABCD2 to decide urgency \u2014 for carotid imaging, specialist-decided brain imaging (no CT unless an alternative diagnosis that CT could detect is suspected), ECG, bloods and secondary prevention (antiplatelet \u2014 long-term clopidogrel in most \u2014 or anticoagulation if AF, NICE NG196; atorvastatin 80 mg, NICE NG238; BP control to systolic below 130 mmHg, smoking cessation, diabetes optimisation, carotid endarterectomy if significant symptomatic stenosis), reframing the TIA as a treatable warning. Critically, advise the patient MUST NOT DRIVE: Group 1 (car) 1 month off (multiple TIAs over a short period: 3 months attack-free with DVLA notification; notify if residual deficit), Group 2 (HGV/bus) must stop, notify DVLA and wait 1 year for relicensing \u2014 advise clearly and document. The hidden agenda is minimisation ("it\u2019s passed, no harm done", attending only at his wife\u2019s insistence); firmly but supportively correct it, convey urgency and the prevention opportunity, and never be reassured by the recovery.',
    knowledge: {
      guideline: 'NICE NG128 Stroke and TIA in over 16s (2019, updated 2022) \u00b7 National Clinical Guideline for Stroke (2023) \u00b7 NICE NG238 CVD risk (2023) \u00b7 NICE NG196 AF (2021) \u00b7 DVLA Assessing fitness to drive \u00b7 GMC Confidentiality: fitness to drive (2017) \u00b7 urgent (24h) specialist assessment \u00b7 aspirin 300 mg \u00b7 secondary prevention \u00b7 DVLA TIA rules',
      points: [
        {
          h: 'Resolved = emergency',
          t: 'A transient fully-resolving focal deficit is a TIA \u2014 a medical emergency and stroke warning (risk highest in first days). Full recovery does not mean "no harm done"; act urgently.'
        },
        {
          h: 'History & exam',
          t: 'Deficit type/onset/duration/resolution, FAST, amaurosis fugax, palpitations/AF, vascular risk; examine BP, pulse/rhythm, carotids, neuro (confirm resolution), CVS \u2014 face to face, not by video. Consider mimics but treat as TIA until excluded.'
        },
        {
          h: 'Immediate action',
          t: 'Aspirin 300 mg now (unless contraindicated/anticoagulated) + specialist TIA assessment within 24 hours of onset (NICE NG128: urgent assessment for all suspected TIA; do not use ABCD2 to decide urgency; no CT unless an alternative diagnosis is suspected).'
        },
        {
          h: 'Secondary prevention',
          t: 'Antiplatelet (long-term clopidogrel in most; anticoagulation if AF, NICE NG196), atorvastatin 80 mg (NICE NG238), BP control (systolic below 130 mmHg, National Clinical Guideline for Stroke 2023), smoking cessation, diabetes optimisation, carotid endarterectomy if significant symptomatic stenosis. A treatable warning.'
        },
        {
          h: 'DVLA / driving',
          t: 'Must not drive: Group 1 1 month off (multiple TIAs: 3 months attack-free and notify DVLA; notify if residual deficit); Group 2 stop driving, notify DVLA, relicensing after 1 year. Advise clearly and document; "I feel fine" does not override.'
        },
        {
          h: 'Address minimisation',
          t: 'Correct "no harm done/it\u2019s passed" firmly but supportively; convey urgency and prevention; validate the family member who prompted attendance.'
        },
        {
          h: 'Never do',
          t: 'Never reassure because it resolved; never delay specialist assessment; never omit aspirin or the driving advice; never miss AF; never treat a TIA as a non-event.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Within-24h specialist assessment; 999 if any deficit recurs/persists (FAST); no driving; review the plan and secondary prevention.'
        }
      ]
    }
  };

  /* ============ 217. VIDEO — Migraine + medication-overuse headache ============ */
  const c217 = {
    id: 'migraine-moh',
    title: '"I\u2019ve got a headache nearly every day and I\u2019m taking painkillers constantly \u2014 nothing touches it"',
    type: 'video',
    duration: 12,
    meta: {
      age: 34,
      sex: 'F',
      setting: 'Video consultation \u2014 frequent headaches with heavy analgesic use',
      system: 'Neurology \u2014 migraine & medication-overuse headache: diagnose, treat, and break the cycle',
      checked: 'October 2026'
    },
    brief: 'Miss Rowena Page, 34, has a long history of episodic MIGRAINE but now has a near-DAILY headache and is taking codeine/combination analgesics and triptans MOST DAYS; nothing helps. The examinable task is twofold: (1) DIAGNOSE the headache(s) \u2014 recognise migraine features and, crucially, MEDICATION-OVERUSE HEADACHE (MOH) \u2014 a daily/near-daily headache developing in someone with a primary headache who is using acute analgesics/triptans frequently (broadly opioids/triptans/combination analgesics on \u226510 days/month, or simple analgesics \u226515 days/month) \u2014 while EXCLUDING secondary/red-flag headache (thunderclap/sudden onset reaching maximum within 5 minutes, new focal/neuro signs or cognitive change, papilloedema, systemic features, a substantial change in the characteristics of the headache \u2014 NICE CG150 \u2014 and GCA features in an older person); and (2) MANAGE it \u2014 explain MOH and that the OVERUSED MEDICATION is now PERPETUATING the headache, support WITHDRAWAL of the overused acute drugs (NICE CG150: stop all overused acute headache drugs abruptly for at least 1 month, with a clear plan, warning of transient worsening, close follow-up and a review at 4\u20138 weeks; specialist referral if strong opioids are overused), optimise genuine MIGRAINE management (acute treatment used sparingly, PROPHYLAXIS e.g. propranolol/amitriptyline/topiramate \u2014 topiramate is teratogenic, reduces hormonal contraceptive efficacy and may only be used within the MHRA 2024 pregnancy prevention programme in anyone who could become pregnant; riboflavin may help some (CG150); no opioids for acute migraine (CG150), lifestyle/trigger/sleep, headache diary), and safety-net. The skill is recognising MOH (not escalating painkillers), excluding red flags, and breaking the cycle with a supported plan. Recorded findings available to the candidate (no in-person examination in this remote consultation): Practice nurse, yesterday: BP 122/76, pulse 72 regular, temperature 36.6 \u00b0C. Optometrist, last month (routine eye examination): optic discs healthy, no papilloedema.',
    script: {
      opening: '"I\u2019ve had migraines for years, but now I\u2019ve got a headache nearly every single day and the painkillers just aren\u2019t working any more. I\u2019m taking co-codamol most days and my migraine tablets too, and nothing touches it. Can you give me something stronger? I\u2019m at the end of my tether."',
      facts: [
        {
          topic: 'The headaches now',
          text: 'For about 4 months: a dull, pressing ache across the forehead most days, "there when I wake up". On top of that, proper migraines about 2 a week \u2014 one-sided throbbing, feel sick, can\u2019t bear light or noise, have to lie down. "The bad ones still feel like my usual migraines."'
        },
        {
          topic: 'The painkillers',
          text: 'If asked to count: co-codamol 30/500, two tablets "most mornings, sometimes twice a day" \u2014 about 20 days a month. Sumatriptan 50 mg on "maybe 12\u201315 days a month". Ibuprofen on top sometimes. "If I don\u2019t take them first thing, it gets worse by lunchtime." Doesn\u2019t keep a diary.'
        },
        {
          topic: 'Red-flag questions (all negative)',
          text: 'Never a sudden "worst ever" headache. No weakness, numbness, speech problems or confusion. No change in vision apart from the usual migraine zigzags before some attacks. Not worse lying down or on coughing; not woken by headache. No fever, rash, neck stiffness or weight loss. No head injury. "It\u2019s the same type of headache, just all the time."'
        },
        {
          topic: 'Recorded checks',
          text: 'If asked: "The nurse did my blood pressure yesterday \u2014 she said it was fine." Had a routine eye test at the optician last month: "they said the backs of my eyes looked healthy."'
        },
        {
          topic: 'Past treatment',
          text: 'Migraines since age 15, worse around periods. Tried propranolol years ago "for a few weeks \u2014 it made me tired so I stopped". Never tried anything else to prevent them. Not on the combined pill; uses the copper coil. Not pregnant, not planning pregnancy. No asthma. No allergies.'
        },
        {
          topic: 'Life and impact',
          text: 'Works as a bank customer-service manager; has had 6 days off sick in 3 months and had a "return to work" meeting. Sleeping badly. Coffee about 5 mugs a day. Alcohol a glass of wine at weekends. Non-smoker. Lives with her partner, Dan. Mood "fed up and tearful sometimes" but no thoughts of harming herself if asked.'
        },
        { topic: 'Family history', text: 'Mum gets migraines too.' },
        {
          topic: 'How to play it',
          text: 'Tired, frustrated, near tears at times. You expect a stronger prescription. If told the painkillers are causing the headache, be disbelieving at first ("But they\u2019re the only thing that helps"), then anxious about coping without them. Warm up if the doctor explains kindly, gives a clear plan, a preventer and follow-up. If simply given a stronger painkiller, accept it gratefully.'
        }
      ],
      ice: {
        ideas: '"My migraines have just got worse \u2014 my body\u2019s got used to the tablets so I need something stronger."',
        concerns: '"I\u2019m scared it\u2019s never going to stop, and I\u2019ll lose my job if I keep having days off." Hidden worry, only if asked about worries: a colleague had a brain tumour, and she has secretly wondered about that.',
        expectations: '"Something stronger \u2014 maybe a stronger codeine, or an injection." Does not expect to be told to stop the tablets.'
      },
      cues: [
        '"I\u2019m taking co-codamol most days and my migraine tablets too" \u2014 counting the days reveals medication overuse.',
        '"I\u2019m at the end of my tether" \u2014 impact on work, sleep and mood worth exploring.',
        '"A girl at work had a brain tumour\u2026" (only if worries are explored) \u2014 the unspoken fear to address after the red-flag questions.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'EXCLUDES secondary/red-flag headache FIRST (thunderclap, focal neurology/papilloedema/raised-ICP features, systemic features, substantial change in headache characteristics, GCA in older people \u2014 NICE CG150) before attributing to primary headache'
      },
      {
        dom: 'dg',
        text: 'Recognises MIGRAINE features and that the pattern has changed to near-daily, prompting the second diagnosis'
      },
      {
        dom: 'dg',
        text: 'Diagnoses MEDICATION-OVERUSE HEADACHE \u2014 near-daily headache with frequent acute analgesic/triptan use (triptans/opioids/combination \u226510 days/month or simple analgesics \u226515 days/month, >3 months) \u2014 and that the overused medication PERPETUATES it'
      },
      {
        dom: 'cm',
        text: 'Manages MOH by EXPLAINING the cycle and supporting WITHDRAWAL of the overused acute drug (NICE CG150: all overused acute drugs stopped abruptly for at least 1 month; specialist input if strong opioids; review at 4\u20138 weeks) with clear WARNING of transient worsening before improvement \u2014 not escalating analgesia'
      },
      {
        dom: 'cm',
        text: 'Optimises genuine migraine management \u2014 sparing acute treatment, PROPHYLAXIS (propranolol/amitriptyline/topiramate \u2014 topiramate only within the MHRA 2024 pregnancy prevention programme; candesartan off-label alt per BASH; riboflavin per CG150; aura and UKMEC checked), no opioids for acute migraine, triggers/sleep/lifestyle, headache diary'
      },
      {
        dom: 'ro',
        text: 'Responds compassionately to her desperation, explains why "something stronger" worsens MOH without sounding dismissive, and supports a difficult withdrawal plan'
      },
      {
        dom: 'ro',
        text: 'Sets realistic expectations (headache worsens transiently then improves), checks understanding, and agrees a shared plan with follow-up'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: red flags warranting urgent review (thunderclap, new neuro signs, systemic features), the withdrawal/prophylaxis plan with review, headache diary, and support \u2014 diagnosing and breaking the MOH cycle, not escalating painkillers'
      }
    ],
    worked: [
      {
        lbl: 'Exclude the sinister first',
        txt: '"I\u2019m sorry it\u2019s this relentless. First, a few safety checks: any sudden \u2018worst-ever\u2019 headaches, headaches worse in the morning or when lying down, vomiting, visual changes, weakness, or anything new and neurological? \u2026 No. Good \u2014 that\u2019s reassuring."'
      },
      {
        lbl: 'Name the real problem',
        txt: '"Here\u2019s the thing that will sound counter-intuitive: I think the daily headache is now being driven by the painkillers themselves \u2014 it\u2019s called medication-overuse headache. When you take acute painkillers or migraine tablets most days, they flip into causing a constant headache."'
      },
      {
        lbl: 'Why not stronger',
        txt: '"So a stronger or more frequent painkiller is exactly the wrong move \u2014 it would deepen the problem. The way out is actually to come OFF the overused painkillers, which I know sounds frightening when you\u2019re in pain."'
      },
      {
        lbl: 'The withdrawal plan + warning',
        txt: '"Let\u2019s plan it together. We\u2019ll stop the co-codamol and the migraine tablets completely for at least a month \u2014 all at once rather than cutting down, which works better. I have to be honest \u2014 your headache will likely get worse for a week or two before it gets better. That\u2019s the medication clearing, it\u2019s expected, and most people improve a lot afterwards."'
      },
      {
        lbl: 'Optimise migraine',
        txt: '"At the same time, let\u2019s treat the underlying migraine properly \u2014 a daily preventer like propranolol or amitriptyline to reduce attacks, and afterwards keeping acute treatment \u2014 a triptan, with an anti-inflammatory or paracetamol if needed, not codeine \u2014 to fewer than 10 days a month, and a headache diary to spot triggers and track progress."'
      },
      {
        lbl: 'Safety-net + support',
        txt: '"I\u2019ll review you through this, and properly at 4 to 8 weeks \u2014 you won\u2019t be on your own. If you get a sudden severe headache, any weakness, vision or speech changes, or it\u2019s simply not improving as expected, come back. We\u2019re breaking a cycle here, and it does work."'
      }
    ],
    learning: 'A near-daily headache in someone with a primary headache disorder who uses acute analgesics or triptans frequently is the picture of MEDICATION-OVERUSE HEADACHE (MOH), but the FIRST step is always to EXCLUDE secondary/red-flag headache: thunderclap onset (SAH), new focal neurology or raised-ICP/papilloedema features (morning headache, worse lying/Valsalva, vomiting), systemic features (fever, weight loss, immunosuppression, cancer history), a substantial change in the characteristics of the headache (NICE CG150), and GCA features in older patients. Recognise MIGRAINE (moderate-severe, often unilateral/throbbing, with nausea and photophobia/phonophobia, aggravated by activity, \u00b1 aura) and note when an episodic pattern has become near-daily. The key second diagnosis is MOH: a chronic daily/near-daily headache where triptans/opioids/combination analgesics are used on \u226510 days/month (or simple analgesics on \u226515 days/month) for over 3 months, with the OVERUSED MEDICATION now PERPETUATING the headache \u2014 so "something stronger" or more frequent painkillers makes it worse, and the diagnosis must be made rather than the analgesia escalated. Manage MOH by explaining the cycle and supporting WITHDRAWAL of the overused acute drug (NICE CG150: all overused acute drugs stopped abruptly, not gradually, for at least 1 month; specialist referral for strong-opioid overuse; review at 4\u20138 weeks), with a clear warning that the headache typically WORSENS for days-to-weeks before improving (expected and temporary), plus support and review. Simultaneously optimise migraine care \u2014 sparing acute treatment to avoid re-overuse, PROPHYLAXIS where frequent (propranolol, amitriptyline, topiramate \u2014 noting topiramate\u2019s teratogenicity, the MHRA 2024 pregnancy prevention programme and reduced contraceptive efficacy; candesartan as an off-label alternative per BASH; riboflavin 400 mg daily may help per CG150; no opioids for acute migraine, CG150; ask about aura, UKMEC 4 for combined hormonal contraception), trigger/sleep/lifestyle measures and a headache diary. The hidden agenda is the desperate wish for a stronger painkiller; explain compassionately why that worsens MOH, support a realistic withdrawal plan, and safety-net for red flags.',
    knowledge: {
      guideline: 'NICE CG150 Headaches in over 12s: diagnosis and management (2012, updated June 2025) \u00b7 MHRA Drug Safety Update June 2024 (topiramate pregnancy prevention programme) \u00b7 BASH National headache management system (2019) \u00b7 UKMEC (CoSRH 2025) \u00b7 migraine diagnosis & prophylaxis \u00b7 medication-overuse headache \u00b7 secondary-headache red flags',
      points: [
        {
          h: 'Red flags first',
          t: 'Exclude secondary headache: thunderclap (SAH), focal neuro/papilloedema/raised-ICP features, systemic features (fever/weight loss/immunosuppression/cancer), substantial change in headache characteristics, GCA in older people (NICE CG150). Then diagnose primary headache.'
        },
        {
          h: 'Recognise migraine',
          t: 'Moderate-severe, often unilateral/throbbing, nausea, photophobia/phonophobia, activity-aggravated, \u00b1 aura, hours-to-days, episodic \u2014 here changed to near-daily.'
        },
        {
          h: 'Diagnose MOH',
          t: 'Chronic daily/near-daily headache with frequent acute drug use: triptans/opioids/combination analgesics \u226510 days/month, or simple analgesics \u226515 days/month, >3 months. The overused drug perpetuates the headache.'
        },
        {
          h: 'Withdraw, don\u2019t escalate',
          t: 'Explain the cycle; withdraw the overused acute drug (NICE CG150: all overused acute drugs, abruptly, for at least 1 month; specialist if strong opioids; review at 4\u20138 weeks); warn the headache worsens transiently (days-weeks) before improving. Do not give "something stronger".'
        },
        {
          h: 'Optimise migraine',
          t: 'Spare acute treatment (fewer than 10 days/month; no opioids for migraine, CG150); prophylaxis if frequent (propranolol, amitriptyline, topiramate \u2014 MHRA 2024 pregnancy prevention programme, reduces contraceptive efficacy; candesartan off-label alt per BASH; riboflavin per CG150); ask about aura (UKMEC 4 for combined hormonal contraception); triggers/sleep/lifestyle; headache diary.'
        },
        {
          h: 'Compassion & realism',
          t: 'Acknowledge desperation; explain why stronger painkillers worsen MOH; support a difficult withdrawal with realistic expectations and review.'
        },
        {
          h: 'Never do',
          t: 'Never escalate analgesia for a daily headache without considering MOH; never skip the red-flag screen; never withdraw without warning/ support; never prescribe topiramate to anyone who could become pregnant outside the MHRA 2024 pregnancy prevention programme.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Urgent review for thunderclap/new neuro/systemic features; withdrawal + prophylaxis plan with review; headache diary; ongoing support through the transient worsening.'
        }
      ]
    }
  };

  /* ============ 218. VIDEO — Peripheral neuropathy: glove-and-stocking numbness, find the cause ============ */
  const c218 = {
    id: 'peripheral-neuropathy',
    title: '"My feet have gone numb and tingly \u2014 it\u2019s creeping up, and now my fingers too"',
    type: 'video',
    duration: 12,
    meta: {
      age: 58,
      sex: 'M',
      setting: 'Video consultation \u2014 progressive distal sensory symptoms',
      system: 'Neurology \u2014 peripheral neuropathy: the glove-and-stocking pattern & finding the cause',
      checked: 'October 2026'
    },
    brief: 'Mr Vincent Oyelaran, 58, describes several months of NUMBNESS and TINGLING starting in both feet and creeping symmetrically UP the legs, now affecting the fingertips \u2014 a "GLOVE-AND-STOCKING" distribution; he drinks heavily and is overweight. The examinable task is to recognise a likely peripheral (sensory) NEUROPATHY in a glove-and-stocking pattern, and \u2014 the core skill \u2014 to systematically SEARCH FOR THE CAUSE rather than just label it: DIABETES (the commonest \u2014 check HbA1c), ALCOHOL excess (his heavy drinking), vitamin B12/folate DEFICIENCY, hypothyroidism, renal/hepatic disease, drugs/toxins, and (less commonly) inflammatory/immune (e.g. CIDP/Guillain-Barr\u00e9 spectrum), paraproteinaemia, or hereditary causes. Take the history, use the nurse\u2019s recorded foot findings and what video allows (watching him walk; balance with someone beside him), arrange a face-to-face examination of reflexes, power and gait, and order targeted tests (HbA1c/glucose, B12/folate \u2014 NICE NG239: test when there are neurological features, without waiting for anaemia \u2014 U&E, LFTs/GGT, TFTs, FBC, ESR, serum protein electrophoresis; consider others). Recognise RED FLAGS needing urgent referral (rapidly progressive/ascending weakness \u2014 Guillain-Barr\u00e9; autonomic involvement; asymmetry/motor predominance), give foot-care/safety advice, address the modifiable causes (alcohol \u2014 AUDIT and assessment for dependence, NICE CG115; glycaemia, NICE NG28; B12, NICE NG239), and refer to neurology where the cause is unclear or features are atypical/severe. Recorded findings available to the candidate (no in-person examination in this remote consultation): Practice nurse (foot check), this morning: 10 g monofilament not felt at 6 of 10 sites on each foot; vibration (128 Hz tuning fork) absent at both great toes; feet warm, foot pulses palpable, skin intact, no ulcers; BP 138/86; BMI 31. Reflexes, power and gait not yet examined.',
    script: {
      opening: '"For the last few months my feet have felt numb and tingly, like walking on cotton wool, and it\u2019s slowly creeping up my legs \u2014 and now the tips of my fingers are starting too. It\u2019s both sides. I stubbed my toe badly last week and barely felt it. What\u2019s causing it, doc?"',
      facts: [
        {
          topic: 'The numbness',
          text: 'Started about 6 months ago in both feet at the same time \u2014 "pins and needles in the toes". Slowly crept up to just above the ankles, both sides the same. Fingertips tingly for the last month. Burning in the feet at night sometimes. "Like walking on cotton wool."'
        },
        {
          topic: 'Weakness and balance (if asked)',
          text: 'No weakness \u2014 can climb stairs and grip normally. A bit unsteady "in the dark, when I can\u2019t see my feet". No falls. No trouble breathing or swallowing. Nothing has got worse quickly; it\u2019s been gradual over months.'
        },
        {
          topic: 'Other symptoms (if asked)',
          text: 'No back pain, no bladder or bowel problems, no dizziness on standing, no erection problems he\u2019ll admit to unless asked directly ("not as good as it was"). Thirsty and passing water more at night for a few months. No weight loss. No rashes.'
        },
        {
          topic: 'Alcohol',
          text: 'If asked gently: "More than I should." About 4\u20135 pints of strong lager most evenings and more at weekends \u2014 "maybe 60 or 70 units a week if I\u2019m honest". Has a drink most mornings "to settle my hands" only if asked about morning drinking. Never had a fit or the shakes badly. Has never tried to stop.'
        },
        {
          topic: 'Diet and medication',
          text: 'Eats "whatever\u2019s quick" \u2014 lots of takeaways, not much fruit or veg. Takes no regular medicines and no vitamins. No allergies. No chemotherapy ever. Never been tested for diabetes.'
        },
        {
          topic: 'Recorded checks',
          text: 'If asked: the practice nurse checked his feet and blood pressure this morning before the video call \u2014 "she poked my feet with a nylon wire and I couldn\u2019t feel most of it, and she said the tuning fork wasn\u2019t felt at my big toes. She said my pulses were fine and there were no sores."'
        },
        {
          topic: 'Social and family',
          text: 'Divorced, lives alone in a flat. Works as a forklift driver in a warehouse (needs to feel the pedals). Smokes 10 a day. Father had diabetes and "lost a toe". No one in the family with nerve problems.'
        },
        {
          topic: 'The foot injury',
          text: 'Stubbed his right big toe on a door frame last week; noticed it was bruised and bleeding only when he took his sock off. It has healed.'
        },
        {
          topic: 'How to play it',
          text: 'Practical, a bit gruff, worried underneath. Downplay the drinking unless asked in a non-judgemental way; if lectured, become defensive ("everyone at work drinks"). If the doctor explains clearly and offers help, admit you\u2019ve wondered if the drink is to blame and agree to bloods.'
        }
      ],
      ice: {
        ideas: '"Is it my circulation? Or is it the drink? I did wonder about the drink."',
        concerns: '"My dad lost a toe with his diabetes. I\u2019m scared I\u2019ll end up in a wheelchair, or lose my job if I can\u2019t feel the pedals on the forklift."',
        expectations: '"Find out what it is and give me something for it." Will accept blood tests; not expecting to talk about drinking.'
      },
      cues: [
        '"I stubbed my toe and barely felt it" \u2014 loss of protective sensation; foot-care advice needed.',
        '"More than I should, if I\u2019m honest" \u2014 the door to quantifying alcohol, done without judgement.',
        '"Dad lost a toe with his diabetes" \u2014 family history pointing to diabetes, and his fear.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises a GLOVE-AND-STOCKING peripheral (length-dependent sensory) NEUROPATHY \u2014 symmetrical distal numbness/tingling starting in the feet, ascending, now in the fingertips \u2014 with reduced sensation'
      },
      {
        dom: 'dg',
        text: 'SYSTEMATICALLY searches for the CAUSE \u2014 diabetes (HbA1c), alcohol excess, B12/folate deficiency, hypothyroidism, renal/liver disease, drugs/toxins, and less common inflammatory/paraprotein/hereditary causes \u2014 directed by history'
      },
      {
        dom: 'dg',
        text: 'Uses the recorded foot findings (monofilament, vibration, pulses, skin) and what video allows (gait, balance), and arranges a face-to-face examination of reflexes/ankle jerks, power/wasting and proprioception and distinguishes from mononeuropathy/radiculopathy/central causes'
      },
      {
        dom: 'dg',
        text: 'Orders TARGETED investigations (HbA1c/glucose, B12/folate, U&E, LFTs/GGT, TFTs, FBC, ESR; consider protein electrophoresis/paraprotein and HIV; thiamine given on NICE CG100 criteria rather than tested) and nerve conduction/neurology if cause unclear/atypical'
      },
      {
        dom: 'dg',
        text: 'Recognises RED FLAGS (rapidly progressive/ascending weakness \u2014 Guillain-Barr\u00e9; motor-predominant, asymmetric, autonomic, acute) needing urgent referral, and refers neurology where unclear/atypical/severe'
      },
      {
        dom: 'cm',
        text: 'Manages MODIFIABLE causes (alcohol reduction after AUDIT, without sudden cessation if dependent, NICE CG115, + thiamine on NICE CG100 criteria, glycaemic control, B12/folate/thyroid replacement) and gives FOOT-CARE/safety advice (injury/burn/ulcer risk) \u00b1 neuropathic-pain treatment (NICE CG173)'
      },
      {
        dom: 'ro',
        text: 'Takes the symptoms seriously, explores and addresses alcohol/glycaemia honestly but NON-JUDGEMENTALLY, and explains the cause-search plan clearly'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: red flags warranting urgent review (progressive/ascending weakness, breathing/swallowing problems), results and any neurology referral, foot-care safety, modifiable-cause plan, and review \u2014 finding the cause, not just labelling neuropathy'
      }
    ],
    worked: [
      {
        lbl: 'Name the pattern',
        txt: '"What you\u2019re describing \u2014 numbness starting in both feet, creeping up, now in your fingertips, and not feeling that stubbed toe \u2014 is a nerve problem we call a peripheral neuropathy, in a \u2018glove-and-stocking\u2019 pattern. The important job now is to find WHY, because that guides treatment."'
      },
      {
        lbl: 'Search for the cause',
        txt: '"The common causes are diabetes, heavy alcohol, low vitamin B12, and thyroid problems, among others. Can we talk honestly about your drinking \u2014 it\u2019s relevant, not a telling-off? I\u2019ll ask a few standard questions about how much you drink. And I\u2019ll check your blood sugar, B12, thyroid, kidneys and liver."'
      },
      {
        lbl: 'Examine',
        txt: '"The nurse\u2019s check this morning shows the feeling is reduced up to your ankles. Could you stand up and walk across the room for me? I\u2019d also like you in this week so I can check your reflexes and strength in person \u2014 that tells me how far it\u2019s gone and helps pin the cause."'
      },
      {
        lbl: 'Red-flag check',
        txt: '"One thing I need to ask: any actual WEAKNESS, or is it spreading quickly upward, any trouble breathing or swallowing? \u2026 No. If that ever happened it would be urgent \u2014 but your gradual, sensation-only pattern is more typical of the common causes."'
      },
      {
        lbl: 'Modifiable + safety',
        txt: '"The good news: several causes are treatable \u2014 cutting down alcohol \u2014 safely, because stopping suddenly can be dangerous if your body is used to it \u2014 with a vitamin called thiamine if you need it, controlling sugar, replacing B12. And because you can\u2019t feel injuries well, check your feet daily, mind hot water and good footwear, to avoid burns and ulcers."'
      },
      {
        lbl: 'Refer + safety-net',
        txt: '"I\u2019ll get the bloods, and if the cause isn\u2019t clear or anything\u2019s unusual, I\u2019ll refer you to neurology for nerve tests. Come back urgently if you develop weakness, it climbs quickly, or you get breathing or swallowing trouble. We\u2019ll review the results together."'
      }
    ],
    learning: 'SYMMETRICAL, distal, length-dependent sensory loss and tingling that starts in the FEET and ascends, later involving the hands ("GLOVE-AND-STOCKING"), with reduced sensation (including unnoticed injury) and diminished ankle reflexes, is the classic pattern of a peripheral (typically sensory) POLYNEUROPATHY \u2014 and the core skill is to SEARCH SYSTEMATICALLY FOR THE CAUSE rather than simply apply the label. The major causes are DIABETES (the commonest \u2014 check HbA1c), ALCOHOL excess, vitamin B12/folate DEFICIENCY, HYPOTHYROIDISM, chronic kidney/liver disease, and DRUGS/TOXINS, with less common inflammatory/immune (CIDP), paraproteinaemia/myeloma, vasculitic and hereditary causes; the history (alcohol intake, diabetes risk, drugs, diet, family history) directs the work-up. Use recorded findings (monofilament, vibration, foot pulses and skin) and what video shows (gait, balance), and arrange a face-to-face examination of reflexes, any weakness/wasting and proprioception, plus signs of an underlying cause, distinguishing a length-dependent neuropathy from mononeuropathy/radiculopathy and central causes. Order targeted tests \u2014 HbA1c/glucose, B12/folate, U&E, LFTs/GGT, TFTs, FBC, ESR, with serum protein electrophoresis/paraprotein and HIV considered (thiamine is given on NICE CG100 criteria rather than measured) \u2014 and use nerve conduction studies/neurology referral where the cause is unclear, the pattern atypical, or features severe. Recognise RED FLAGS needing urgent assessment: rapidly progressive or ASCENDING weakness (Guillain-Barr\u00e9 syndrome \u2014 a neurological emergency, monitor breathing/bulbar function), prominent motor involvement, marked asymmetry, autonomic features or acute onset. Manage the MODIFIABLE causes (alcohol reduction \u2014 AUDIT, and no sudden stop if dependent, NICE CG115 \u2014 with thiamine on NICE CG100 criteria, glycaemic control, B12/folate/thyroid replacement), give FOOT-CARE/safety advice given the injury/burn/ulcer risk, treat neuropathic pain if present (NICE CG173), and address alcohol/glycaemia honestly but non-judgementally.',
    knowledge: {
      guideline: 'NICE NG239 Vitamin B12 deficiency in over 16s (2024) \u00b7 NICE NG28 Type 2 diabetes in adults \u00b7 NICE NG19 Diabetic foot problems (2015) \u00b7 NICE CG115 Alcohol-use disorders (2011) \u00b7 NICE CG100 Alcohol-use disorders: physical complications (2010) \u00b7 NICE CG173 Neuropathic pain in adults (2013) \u00b7 UK CMOs low-risk drinking guidelines (2016) \u00b7 Peripheral neuropathy work-up \u00b7 glove-and-stocking pattern \u00b7 cause search (diabetes/alcohol/B12/thyroid) \u00b7 Guillain-Barr\u00e9 red flags',
      points: [
        {
          h: 'Recognise the pattern',
          t: 'Symmetrical distal length-dependent sensory loss/tingling starting in the feet, ascending, later hands ("glove-and-stocking"); reduced sensation and ankle reflexes. The task is finding the cause.'
        },
        {
          h: 'Search the causes',
          t: 'Diabetes (commonest \u2014 HbA1c), alcohol excess, B12/folate deficiency, hypothyroidism, renal/liver disease, drugs/toxins; less commonly inflammatory (CIDP), paraprotein/myeloma, vasculitis, hereditary. History directs work-up.'
        },
        {
          h: 'Examine',
          t: 'Distal sensation (touch/pinprick/vibration/proprioception), reflexes (ankle jerks), weakness/wasting, gait/Romberg, foot health, signs of cause. Distinguish from mononeuropathy/radiculopathy/central causes.'
        },
        {
          h: 'Targeted tests',
          t: 'HbA1c/glucose, B12/folate, U&E, LFTs/GGT, TFTs, FBC, ESR; consider protein electrophoresis/paraprotein, HIV (thiamine is prescribed on NICE CG100 criteria, not tested routinely). Nerve conduction/neurology if unclear/atypical/severe.'
        },
        {
          h: 'Red flags',
          t: 'Rapidly progressive/ascending weakness (Guillain-Barr\u00e9 \u2014 emergency, monitor breathing/bulbar), motor-predominant, asymmetric, autonomic, acute onset \u2192 urgent referral.'
        },
        {
          h: 'Manage & protect',
          t: 'Modifiable causes: alcohol reduction (AUDIT; no sudden stop if dependent, NICE CG115) + thiamine on NICE CG100 criteria, glycaemic control, B12/folate/thyroid replacement. Foot-care/safety advice (injury/burn/ulcer risk); neuropathic-pain treatment if painful (NICE CG173).'
        },
        {
          h: 'Never do',
          t: 'Never label "neuropathy" without a cause search; never miss diabetes/B12/alcohol; never overlook Guillain-Barr\u00e9 red flags; never neglect foot-care safety; never address alcohol judgementally.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Urgent review for progressive/ascending weakness or breathing/swallowing problems; results and neurology referral if unclear; foot-care; modifiable-cause plan with review.'
        }
      ]
    }
  };

  /* ============ 219. VIDEO — Normal-pressure hydrocephalus: the reversible "dementia" triad ============ */
  const c219 = {
    id: 'normal-pressure-hydrocephalus',
    title: '"Dad\u2019s gone unsteady and forgetful and he\u2019s started wetting himself \u2014 the family say it\u2019s just dementia"',
    type: 'video',
    duration: 12,
    meta: {
      age: 76,
      sex: 'M',
      setting: 'Video consultation \u2014 Mr Friske with his son beside him; the son describes his father\u2019s decline (Mr Friske is asked first whether he is happy for his son to join).',
      system: 'Neurology \u2014 normal-pressure hydrocephalus: the potentially reversible triad',
      checked: 'October 2026'
    },
    brief: 'Mr Harold Friske, 76, brought by his son, has developed over several months a GAIT disturbance (broad-based, shuffling, "magnetic"/feet-stuck unsteadiness with falls), cognitive decline (forgetfulness, slowing) and URINARY incontinence; the family assume "it\u2019s just dementia/old age". The examinable task is to recognise the classic TRIAD of NORMAL-PRESSURE HYDROCEPHALUS (NPH) \u2014 gait disturbance + cognitive impairment + urinary incontinence (avoid informal mnemonics in front of the patient and family) \u2014 as a POTENTIALLY REVERSIBLE cause of a dementia-like picture that should not be dismissed as ageing/Alzheimer\u2019s, to assess and EXCLUDE other causes of the same features (so still do a dementia/falls/incontinence work-up \u2014 NICE NG97, NICE NG249: medication review, B12/folate/TFTs/calcium/glucose, a cognitive assessment, lying and standing BP, depression, Parkinson\u2019s, cerebrovascular disease, delirium causes, prostatic enlargement with overflow/retention (NICE CG97), and a subdural haematoma after the falls), to see him face to face or at home for the examination video cannot provide (neurological and gait examination, lying and standing BP, cognitive testing, abdominal/prostate and continence examination), to recognise that the GAIT disturbance is typically the EARLIEST and most prominent feature, and to refer for NEUROLOGY/specialist assessment and brain imaging (CT/MRI showing ventricular enlargement out of proportion to atrophy) \u2014 because CSF diversion (shunt) can improve symptoms, especially gait, in selected patients. The skill is NOT accepting "just dementia", recognising the reversible triad, and referring \u2014 while still doing a thorough reversible-cause work-up and supporting the family/carer \u2014 speaking to Mr Friske directly and asking his permission before discussing him with his son (Mental Capacity Act 2005: presume capacity unless assessment shows otherwise), and offering the son a carer\u2019s assessment (Care Act 2014; NICE NG150).',
    script: {
      opening: '(Son, father present) "Honestly we think Dad\u2019s just got dementia like Mum did \u2014 he\u2019s forgetful and slow. But what\u2019s really changed is his walking: he\u2019s gone really unsteady, shuffling like his feet are stuck to the floor, and he\u2019s had a couple of falls. And now \u2014 it\u2019s upsetting \u2014 he\u2019s started wetting himself. The family keep saying it\u2019s just old age. Is there any point even looking into it?"',
      facts: [
        {
          topic: 'Who is on the call',
          text: 'Two role-players, or one playing both: the son, Gary (48, lives 10 minutes away, visits daily), and his father Harold (76), sitting beside him. Harold is happy for Gary to speak but answers when spoken to directly.'
        },
        {
          topic: 'The walking (Gary)',
          text: 'Started about 8\u20139 months ago: slower, small shuffling steps, "like his feet are glued to the floor", especially starting off and turning. Two falls in 3 months \u2014 tripped at the kitchen door, no head injury, didn\u2019t black out. Harold: "My feet don\u2019t want to go. I have to think about every step." On video, if asked, Gary can get Dad to walk across the room: short, wide-based shuffling steps, turning in several small steps.'
        },
        {
          topic: 'Memory (Gary)',
          text: 'Came after the walking, over the last 4\u20135 months: slower thinking, forgets appointments, repeats questions, "takes ages to answer". Still knows everyone, manages his own money with help, no getting lost. No hallucinations. Mood "a bit flat".'
        },
        {
          topic: 'Wetting (both)',
          text: 'Last 3 months. Harold: "I get the urge and just don\u2019t get there in time." Day and night. No burning, no blood. Not dribbling all the time. Bowels normal. Gary has bought pads.'
        },
        {
          topic: 'Negatives (if asked)',
          text: 'Changes have been gradual \u2014 no sudden change, no confusion that comes and goes, no headaches, no fits. No tremor at rest that Gary has seen. No recent infection. Not drinking alcohol to excess (the odd sherry).'
        },
        {
          topic: 'Medicines and history',
          text: 'High blood pressure (amlodipine 5 mg), tamsulosin for "prostate" for 2 years, and his GP started oxybutynin 2 months ago "for the wetting" (if asked \u2014 it has made no difference, and Gary thinks he\u2019s been "foggier" since). No sleeping tablets. No diabetes, no strokes known. No allergies.'
        },
        {
          topic: 'Social',
          text: 'Widower; wife died 3 years ago with Alzheimer\u2019s, which Gary nursed her through. Harold lives alone in a two-storey house; bathroom upstairs. Ex-postman. Stopped driving last year. Gary is exhausted: works full time and has two teenagers.'
        },
        {
          topic: 'How to play it',
          text: 'Gary: loving but worn out and resigned, expects to be told nothing can be done; becomes hopeful but cautious if the doctor explains a treatable cause, and asks "So it might not be dementia at all?" Harold: quiet, embarrassed about the wetting, does not want to be a nuisance; responds warmly if the doctor speaks to him directly. Ask "An operation? At my age?" if a shunt is mentioned.'
        }
      ],
      ice: {
        ideas: 'Gary: "It\u2019s dementia, like Mum. And old age." Harold: "I\u2019m just getting old."',
        concerns: 'Gary: "That he\u2019ll fall and break his hip, and the wetting \u2014 it\u2019s undignified for him." HIDDEN AGENDA \u2014 Gary watched his mum decline and assumes the same path; he is exhausted and half expecting to be told it\u2019s time for a care home. Harold fears being "put in a home".',
        expectations: 'Gary: "Honestly, I thought you\u2019d say there\u2019s nothing to be done." Hopes for some help with the falls and pads.'
      },
      cues: [
        '"What\u2019s really changed is his walking" \u2014 walking came first, the NPH pattern.',
        '"Is there any point even looking into it?" \u2014 the family\u2019s fatalism to address.',
        '(Harold) "I don\u2019t want to be a nuisance" \u2014 include and speak to the patient himself.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises the NORMAL-PRESSURE HYDROCEPHALUS triad (gait disturbance + cognitive impairment + urinary incontinence, without informal mnemonics in front of the family) as a POTENTIALLY REVERSIBLE cause \u2014 not accepting "just dementia/old age"'
      },
      {
        dom: 'dg',
        text: 'Recognises that the GAIT disturbance (broad-based, shuffling, "magnetic", falls) is typically the EARLIEST/most prominent feature and a key pointer to NPH over Alzheimer\u2019s/ageing'
      },
      {
        dom: 'dg',
        text: 'Still performs a REVERSIBLE-CAUSE work-up \u2014 medication review, bloods (B12/folate, TFTs, calcium, glucose, U&E, FBC), depression, Parkinson\u2019s/parkinsonism, cerebrovascular disease, delirium/UTI, prostatic overflow/retention (NICE CG97), subdural haematoma after falls \u2014 with a face-to-face cognitive assessment, lying and standing BP and neurological/continence examination (not possible on video) \u2014 alongside considering NPH (NICE NG97)'
      },
      {
        dom: 'cm',
        text: 'Refers for NEUROLOGY/specialist assessment and BRAIN IMAGING (CT/MRI \u2014 ventricular enlargement out of proportion to atrophy), knowing CSF shunting can improve selected patients (gait responds best)'
      },
      {
        dom: 'cm',
        text: 'Arranges interim FALLS (NICE NG249 multifactorial assessment) and CONTINENCE support and addresses safety, while investigation/referral proceeds'
      },
      {
        dom: 'ro',
        text: 'Counters the family\u2019s "just old age / is there any point" NIHILISM with the possibility of a reversible cause, while managing expectations realistically (not all NPH improves; coexisting pathology possible)'
      },
      {
        dom: 'ro',
        text: 'Supports the distressed SON/CARER, engages the PATIENT with dignity (not only the son), asking his permission before discussing him with his son and presuming capacity (Mental Capacity Act 2005), and checks understanding'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: referral for imaging/specialist assessment, reversible-cause results, falls/continence support, carer support, and review \u2014 recognising and investigating a potentially reversible triad, not accepting "just dementia"'
      }
    ],
    worked: [
      {
        lbl: 'Challenge "just dementia"',
        txt: '"I\u2019m really glad you brought him, and I want to gently challenge the \u2018just old age\u2019 idea. The particular combination \u2014 the walking going first and badly, plus the memory AND the wetting \u2014 can be a specific condition called normal-pressure hydrocephalus, which, unlike most dementias, can sometimes be IMPROVED with treatment."'
      },
      {
        lbl: 'Why the gait matters',
        txt: '"What makes me think of it is that his WALKING is the standout problem \u2014 shuffling, feet stuck to the floor, falls \u2014 often more than the memory. In ordinary dementia the memory usually leads; here the gait does. That\u2019s worth investigating, not dismissing."'
      },
      {
        lbl: 'Still check the reversibles',
        txt: '"I\u2019ll also do a proper check for other treatable things \u2014 review his medications, blood tests for vitamin levels, thyroid and calcium, screen for depression and a water infection, check his prostate isn\u2019t stopping his bladder emptying, and make sure the falls haven\u2019t caused a bleed on the brain, which can all cause similar problems. I\u2019ll need to see him in person, or at home, to examine him properly, check his blood pressure lying and standing, and do a memory test."'
      },
      {
        lbl: 'Refer for the scan',
        txt: '"The key next step is a brain scan and a specialist assessment \u2014 in this condition the scan shows a particular pattern, and selected people benefit from a small procedure to drain the fluid, which can improve the walking especially. I\u2019ll refer him."'
      },
      {
        lbl: 'Honest expectations',
        txt: '"I want to be honest \u2014 not everyone improves, and there can be more than one thing going on. But it would be wrong not to look, because there\u2019s a real chance of helping. \u2018Is there any point?\u2019 \u2014 yes, there genuinely is."'
      },
      {
        lbl: 'Support + safety-net',
        txt: '(To Mr Friske and son) "Meanwhile let\u2019s get falls support and help with the continence \u2014 that\u2019s important for dignity and safety. How are you managing as a family? I\u2019ll arrange the referral and tests and review you. Come back sooner if he falls badly or becomes suddenly more confused."'
      }
    ],
    learning: 'The combination of GAIT disturbance + COGNITIVE impairment + URINARY incontinence \u2014 the classic triad of NORMAL-PRESSURE HYDROCEPHALUS (NPH) (best not described to families with informal mnemonics) \u2014 is a POTENTIALLY REVERSIBLE cause of a dementia-like syndrome that must NOT be dismissed as "just dementia/old age", because CSF diversion (shunting) can improve symptoms (especially gait) in selected patients, and missing it loses a reversible opportunity. Crucially, the GAIT disturbance is typically the EARLIEST and most prominent feature \u2014 a broad-based, shuffling, slow, "magnetic"/feet-stuck gait with unsteadiness and falls \u2014 so a gait-led decline accompanied by incontinence and cognitive change should raise NPH rather than be attributed to Alzheimer\u2019s or ageing. Still perform a thorough REVERSIBLE-CAUSE work-up for the same picture: medication review (sedatives/anticholinergics), bloods (NICE NG97: FBC, ESR or CRP, U&E, calcium, HbA1c/glucose, LFTs, TFTs, B12/folate), depression (pseudodementia), Parkinson\u2019s/parkinsonism, cerebrovascular disease, and delirium (e.g. UTI causing confusion/incontinence), prostatic overflow or chronic retention (NICE CG97) and a subdural haematoma after falls, with a face-to-face cognitive assessment, lying and standing blood pressure and examination, as video cannot provide these (NICE NG97, NICE NG249). Refer for NEUROLOGY/specialist assessment and BRAIN IMAGING (CT/MRI showing ventricular enlargement out of proportion to cortical atrophy), with specialist assessment (including CSF tap-test response) determining shunt suitability. Support the distressed family/carer \u2014 counter the "just old age / is there any point?" nihilism with the possibility of a reversible cause while managing expectations realistically (not all NPH improves; coexisting pathology is possible), arrange interim falls and continence support, address carer needs, and engage the patient with dignity rather than only the relative, asking his permission before discussing him with his son (Mental Capacity Act 2005) and offering the son a carer\u2019s assessment (Care Act 2014). The hidden agenda is therapeutic nihilism; recognise the triad, investigate, refer, and support \u2014 not accept "just dementia".',
    knowledge: {
      guideline: 'NICE NG97 Dementia (2018) \u00b7 NICE NG249 Falls (2025) \u00b7 NICE CG97 Lower urinary tract symptoms in men (2010, updated 2015) \u00b7 NICE NG150 Supporting adult carers (2020) \u00b7 Japanese Society of NPH guidelines, 3rd edition (2021) (international) \u00b7 Mental Capacity Act 2005 \u00b7 Care Act 2014 \u00b7 Normal-pressure hydrocephalus (triad) \u00b7 reversible-cause dementia work-up \u00b7 imaging & shunt referral \u00b7 falls/continence support',
      points: [
        {
          h: 'Recognise the triad',
          t: 'Gait disturbance + cognitive impairment + urinary incontinence (no informal mnemonics with patients) = normal-pressure hydrocephalus \u2014 a potentially reversible dementia-like syndrome. Don\u2019t dismiss as "just dementia/old age".'
        },
        {
          h: 'Gait leads',
          t: 'Gait disturbance (broad-based, shuffling, "magnetic", falls) is usually earliest/most prominent. A gait-led decline with incontinence should raise NPH over Alzheimer\u2019s/ageing.'
        },
        {
          h: 'Reversible-cause work-up',
          t: 'Medication review; bloods (NICE NG97: FBC, ESR/CRP, U&E, calcium, HbA1c, LFTs, TFTs, B12/folate); cognitive assessment; lying and standing BP; depression; Parkinson\u2019s/parkinsonism; cerebrovascular disease; delirium/UTI; prostatic overflow/retention (NICE CG97); subdural after falls. Examination face to face, not by video. Do this alongside considering NPH.'
        },
        {
          h: 'Imaging & referral',
          t: 'Refer for neurology/specialist assessment and CT/MRI (ventricular enlargement out of proportion to atrophy). Selected patients benefit from VP shunt (CSF tap-test guides suitability); gait responds best.'
        },
        {
          h: 'Realistic expectations',
          t: 'Not all NPH improves and coexisting pathology is common \u2014 but investigation is worthwhile given the reversible potential. Counter therapeutic nihilism honestly.'
        },
        {
          h: 'Support & dignity',
          t: 'Support the family/carer, arrange interim falls (NICE NG249) and continence support (dignity/safety), address carer needs (carer\u2019s assessment, Care Act 2014; NICE NG150), and engage the patient directly, with his permission before discussing him with his son (Mental Capacity Act 2005).'
        },
        {
          h: 'Never do',
          t: 'Never accept "just dementia/old age" for the triad; never skip the reversible-cause work-up; never fail to refer for imaging; never neglect falls/continence support or the carer.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Referral for imaging/specialist assessment; reversible-cause results; falls/continence and carer support; review; sooner review for bad falls or acute confusion.'
        }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c216, c217, c218, c219);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {
    'tia-resolved': {
      ceg: ['Urgent & unscheduled care', 'Older adults'],
      stem: {
        name: 'Bernard Cole',
        age: '69 years \u00b7 male',
        pmh: [
          '\u26a0 Yesterday: R arm weakness + slurred speech ~30 min, FULLY resolved',
          'Hypertension; ex-smoker',
          'Attends only because wife insisted; thinks "no harm done"'
        ],
        meds: ['Amlodipine'],
        allergy: 'NKDA',
        recent: '"My arm went weak and speech slurred for half an hour \u2014 but it\u2019s fine now, no harm done?"',
        reason: 'Video \u2014 a resolved transient neurological episode.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Reframe "no harm done"',
          d: 'Resolved focal deficit = TIA: emergency + stroke warning; resolution is why we act NOW.'
        },
        {
          t: '2\u20134',
          h: 'History + exam',
          d: 'Deficit/duration/resolution, FAST, amaurosis, palpitations; BP, pulse (AF), carotids, neuro \u2014 arranged face to face (not on video).'
        },
        {
          t: '4\u20136',
          h: 'Aspirin + urgent referral',
          d: 'Aspirin 300 mg now; specialist TIA assessment within 24h of onset (NICE NG128; no ABCD2 triage).'
        },
        {
          t: '6\u20139',
          h: 'Prevention + driving',
          d: 'Statin/BP/AF/smoking; MUST NOT DRIVE (Group 1 1 month; Group 2 stop, notify DVLA, 1 year); document.'
        },
        {
          t: '9\u201312',
          h: 'Safety-net',
          d: '999 if deficit recurs/persists (FAST); validate wife\u2019s prompt; review.'
        }
      ],
      wordPics: {
        fail: 'Reassures because it resolved; no aspirin, no urgent referral, no driving advice \u2014 misses an imminent-stroke warning.',
        pass: 'Recognises the TIA, gives aspirin and arranges within-24h assessment, and advises no driving.',
        exc: 'Firmly reframes "no harm done", takes a focused history and arranges a same-day face-to-face exam (incl. pulse for AF), gives aspirin 300 mg, arranges within-24h specialist assessment, covers secondary prevention and the DVLA no-driving rule, and safety-nets with 999/FAST advice.'
      },
      avoid: [
        {
          dont: '"It\u2019s resolved, so there\u2019s no harm done \u2014 let\u2019s just keep an eye on it."',
          instead: '"A resolved episode like this is a TIA \u2014 an emergency warning of stroke. I\u2019m giving you aspirin now and arranging specialist assessment within 24 hours."',
          why: 'Reassuring because it resolved misses the highest-risk window for a completed stroke.'
        },
        {
          dont: '(No driving advice) ending without mentioning the DVLA.',
          instead: '"You must not drive \u2014 a month after a TIA for a car; a bus or lorry licence means stopping, telling the DVLA and a year before relicensing. I\u2019ll document that."',
          why: 'Omitting the driving/DVLA advice is a safety and medicolegal failure.'
        },
        {
          dont: '(No AF check) not examining the pulse.',
          instead: '"I can\u2019t feel your pulse on video, so it will be checked face to face today \u2014 an irregular heartbeat would change your treatment."',
          why: 'Missing AF misses a major, treatable stroke-risk factor (anticoagulation).'
        }
      ]
    },
    'migraine-moh': {
      ceg: ['Long-term conditions & cancer', 'Prescribing & pharmacology'],
      stem: {
        name: 'Rowena Page',
        age: '34 years \u00b7 female',
        pmh: [
          'Long-standing episodic migraine; now near-DAILY headache',
          '\u26a0 Taking co-codamol most days + triptans frequently',
          'Wants "something stronger"'
        ],
        meds: ['Co-codamol (frequent)', 'Sumatriptan (frequent)'],
        allergy: 'NKDA',
        recent: '"Headache nearly every day, taking painkillers constantly \u2014 nothing touches it, give me something stronger?" Practice nurse, yesterday: BP 122/76, pulse 72 regular, temperature 36.6 \u00b0C. Optometrist, last month (routine eye examination): optic discs healthy, no papilloedema.',
        reason: 'Video consultation \u2014 frequent headaches with heavy analgesic use.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Red flags first',
          d: 'Thunderclap, focal neuro/papilloedema, systemic, substantial change in character (CG150), GCA \u2014 exclude before MOH.'
        },
        {
          t: '2\u20134',
          h: 'Diagnose MOH',
          d: 'Daily headache + frequent acute analgesic/triptan use = medication-overuse headache; the drugs perpetuate it.'
        },
        {
          t: '4\u20137',
          h: 'Withdraw, don\u2019t escalate',
          d: 'Explain cycle; withdraw all overused drugs abruptly for \u22651 month (CG150); warn of transient worsening before improvement; review at 4\u20138 weeks.'
        },
        {
          t: '7\u20139',
          h: 'Optimise migraine',
          d: 'Spare acute treatment; prophylaxis (propranolol/amitriptyline/topiramate \u2014 MHRA 2024 PPP; ask about aura/contraception); no opioids for migraine; diary.'
        },
        {
          t: '9\u201312',
          h: 'Support + safety-net',
          d: 'Compassion, realistic expectations, review; urgent if thunderclap/new neuro/systemic.'
        }
      ],
      wordPics: {
        fail: 'Prescribes "something stronger" / more painkillers, deepening MOH; skips red-flag screen; doesn\u2019t recognise the overuse cycle.',
        pass: 'Excludes red flags, diagnoses MOH, supports withdrawal and starts migraine prophylaxis.',
        exc: 'Excludes secondary-headache red flags, diagnoses medication-overuse headache, explains and supports withdrawal with realistic warning of transient worsening, optimises migraine prophylaxis (with the MHRA 2024 topiramate pregnancy prevention programme), and safety-nets compassionately.'
      },
      avoid: [
        {
          dont: '"Let\u2019s try a stronger painkiller or more frequent triptans."',
          instead: '"The painkillers are now driving the daily headache \u2014 medication-overuse headache. The fix is coming off them, not stronger ones."',
          why: 'Escalating analgesia worsens MOH \u2014 the opposite of what helps.'
        },
        {
          dont: '(No red-flag screen) assuming it\u2019s just migraine.',
          instead: '"Any thunderclap headaches, morning headaches with vomiting, new neurology or visual change?"',
          why: 'A daily headache needs secondary-cause exclusion before a primary-headache label.'
        },
        {
          dont: '(No warning) stopping painkillers without explanation.',
          instead: '"Be ready \u2014 your headache will likely worsen for a week or two before it improves; that\u2019s expected."',
          why: 'Without the warning/support, withdrawal fails as patients restart the overused drug.'
        }
      ]
    },
    'peripheral-neuropathy': {
      ceg: ['Long-term conditions & cancer', 'New & undifferentiated presentations'],
      stem: {
        name: 'Vincent Oyelaran',
        age: '58 years \u00b7 male',
        pmh: [
          'Months of symmetrical numbness/tingling from feet ascending, now fingertips (glove-and-stocking)',
          'Reduced sensation (unnoticed toe injury)',
          'Heavy alcohol use; overweight; ?diabetes'
        ],
        meds: ['None regular'],
        allergy: 'NKDA',
        recent: '"My feet have gone numb and tingly \u2014 it\u2019s creeping up, and now my fingers too. What\u2019s causing it?" Practice nurse (foot check), this morning: 10 g monofilament not felt at 6 of 10 sites on each foot; vibration (128 Hz tuning fork) absent at both great toes; feet warm, foot pulses palpable, skin intact, no ulcers; BP 138/86; BMI 31. Reflexes, power and gait not yet examined.',
        reason: 'Video consultation \u2014 progressive distal sensory symptoms.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Name the pattern',
          d: 'Symmetrical distal ascending sensory loss = glove-and-stocking neuropathy; the task is the cause.'
        },
        {
          t: '2\u20135',
          h: 'Search the cause',
          d: 'Diabetes (HbA1c), alcohol, B12/folate, thyroid, renal/liver, drugs; history-directed bloods.'
        },
        {
          t: '5\u20137',
          h: 'Examine + red flags',
          d: 'Sensation/reflexes/gait/feet; red flags = progressive/ascending weakness (GBS), motor/asymmetric/autonomic.'
        },
        {
          t: '7\u20139',
          h: 'Modifiable + safety',
          d: 'Alcohol (AUDIT; no abrupt stop if dependent) + thiamine per CG100, glycaemia, B12/thyroid; foot-care/burn/ulcer safety; neuropathic-pain Rx.'
        },
        {
          t: '9\u201312',
          h: 'Refer + safety-net',
          d: 'Neurology/NCS if unclear/atypical; urgent if weakness/ascending/breathing-swallowing; review results.'
        }
      ],
      wordPics: {
        fail: 'Labels "neuropathy" and stops, or just treats pain, without searching for diabetes/alcohol/B12; misses Guillain-Barr\u00e9 red flags; no foot-care advice.',
        pass: 'Recognises the pattern, searches the common causes with targeted bloods, screens red flags, and gives foot-care advice.',
        exc: 'Recognises the glove-and-stocking pattern, systematically searches the causes (diabetes/alcohol/B12/thyroid/renal/drugs) with targeted bloods, examines and screens Guillain-Barr\u00e9 red flags, manages modifiable causes non-judgementally, gives foot-care safety advice, and refers neurology where unclear.'
      },
      avoid: [
        {
          dont: '"It\u2019s just nerve damage \u2014 here\u2019s something for the tingling."',
          instead: '"It\u2019s a glove-and-stocking neuropathy \u2014 the important thing is finding why: diabetes, alcohol, B12 and thyroid are the usual causes, so let\u2019s test."',
          why: 'Treating symptoms without a cause search misses treatable/modifiable conditions.'
        },
        {
          dont: '(No red-flag screen) reassuring without asking about weakness/progression.',
          instead: '"Any actual weakness, or is it climbing quickly \u2014 any breathing or swallowing trouble?"',
          why: 'Missing rapidly ascending weakness could miss Guillain-Barr\u00e9, an emergency.'
        },
        {
          dont: '(Judgemental) "You\u2019ve done this to yourself with the drinking."',
          instead: '"Alcohol is one relevant cause \u2014 no judgement \u2014 and cutting down safely, with a vitamin if needed, genuinely helps."',
          why: 'A judgemental approach to alcohol damages rapport and engagement.'
        }
      ]
    },
    'normal-pressure-hydrocephalus': {
      ceg: ['Older adults', 'New & undifferentiated presentations'],
      stem: {
        name: 'Harold Friske (son present)',
        age: '76 years \u00b7 male',
        pmh: [
          'Months: gait disturbance (shuffling/"magnetic", falls) + cognitive decline + urinary incontinence',
          'Family assume "just dementia/old age"',
          'Gait change prominent/early'
        ],
        meds: ['None relevant'],
        allergy: 'NKDA',
        recent: '(Son) "Dad\u2019s unsteady, forgetful and wetting himself \u2014 the family say it\u2019s just dementia. Any point looking into it?"',
        reason: 'Video \u2014 a son describing his father\u2019s decline.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Challenge "just dementia"',
          d: 'Gait + cognition + incontinence triad = possible NPH \u2014 potentially reversible; worth investigating.'
        },
        {
          t: '2\u20134',
          h: 'Gait leads',
          d: 'Shuffling/"magnetic" gait prominent/early points to NPH over Alzheimer\u2019s/ageing.'
        },
        {
          t: '4\u20137',
          h: 'Reversible work-up',
          d: 'Meds, B12/TFTs/calcium/glucose, depression, Parkinson\u2019s, cerebrovascular, delirium/UTI, prostate overflow/retention, subdural after falls; face-to-face exam, lying/standing BP, cognitive test.'
        },
        {
          t: '7\u20139',
          h: 'Imaging + referral',
          d: 'CT/MRI (ventricles out of proportion to atrophy) + specialist; shunt helps selected patients (gait best).'
        },
        {
          t: '9\u201312',
          h: 'Support + safety-net',
          d: 'Falls/continence support, carer support (carer\u2019s assessment), dignity and his consent to the son\u2019s involvement; realistic expectations; review.'
        }
      ],
      wordPics: {
        fail: 'Accepts "just dementia/old age", doesn\u2019t recognise the triad, no reversible work-up or imaging referral \u2014 misses a treatable cause.',
        pass: 'Recognises the NPH triad, does a reversible-cause work-up, and refers for imaging/specialist assessment.',
        exc: 'Recognises the potentially reversible NPH triad (gait-led), counters family nihilism, sees him face to face for the examination, performs the reversible-cause work-up, refers for CT/MRI and specialist assessment, arranges falls/continence and carer support, and manages expectations realistically with dignity.'
      },
      avoid: [
        {
          dont: '"It does sound like dementia, sadly \u2014 there\u2019s not much we can do at his age."',
          instead: '"The walking-first pattern with incontinence can be a treatable condition called NPH \u2014 it\u2019s worth investigating with a scan."',
          why: 'Accepting "just dementia" misses a potentially reversible cause.'
        },
        {
          dont: '(No reversible work-up) referring for memory clinic only.',
          instead: '"I\u2019ll also check medications, vitamin levels, thyroid, calcium, a water infection and whether his bladder is emptying properly \u2014 all treatable mimics."',
          why: 'Skipping the reversible-cause work-up misses common, fixable contributors.'
        },
        {
          dont: '(Talking only to the son) ignoring the patient.',
          instead: '(To Mr Friske) "How are you finding the walking yourself?"',
          why: 'Excluding the patient from his own consultation undermines dignity and assessment.'
        }
      ]
    }
  });

})();
