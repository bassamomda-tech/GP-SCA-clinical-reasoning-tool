/* ============================================================
   Reasoning GP — Case Library batch 66:
   "Pattern-recognition the textbooks reward" (NEW themes from the
   Bassam SCA summary, verified absent)
   Cluster headache (the suicide headache \u2014 O2 + triptan, not
   migraine); essential tremor vs Parkinson\u2019s (action vs rest
   tremor, propranolol); erythema nodosum (tender shin nodules \u2014
   find the underlying cause); and faecal incontinence (the hidden,
   shameful symptom \u2014 sensitive history, treatable causes). No NG12
   cancer pathway genuinely applies; none invented.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases65.js.
   ============================================================ */

(function(){

  /* ============ 236. VIDEO — Cluster headache: the "suicide headache" ============ */
  const c236 = {
    id: 'cluster-headache',
    title: '"Excruciating pain behind one eye, every night at the same time \u2014 it makes me pace and bang my head"',
    type: 'video',
    duration: 12,
    meta: {
      age: 38,
      sex: 'M',
      setting: 'Video consultation, with the neurological and eye examination arranged face to face \u2014 severe recurrent unilateral headache with eye symptoms.',
      system: 'Neurology \u2014 cluster headache: recognition, acute O2/triptan & prevention',
      checked: 'October 2026'
    },
    brief: 'Mr Marek Solomon, 38 (smoker), describes attacks of EXCRUCIATING strictly UNILATERAL pain centred behind/around ONE EYE, lasting ~45\u201390 minutes, occurring once or twice daily often at the SAME TIME (especially at night), with ipsilateral AUTONOMIC features \u2014 a red/watering eye, drooping/swollen lid, nasal congestion/runny nostril \u2014 and marked RESTLESSNESS/agitation (he paces, cannot keep still, even bangs his head) during attacks; they cluster over weeks. The examinable task is to recognise CLUSTER HEADACHE (a trigeminal autonomic cephalalgia) \u2014 severe unilateral orbital/temporal pain, short-lived, with cranial autonomic features and agitation, occurring in clusters with circadian timing \u2014 and to DISTINGUISH it from migraine (longer, throbbing, patient lies still in a dark room, nausea/photophobia) and from sinister mimics. CRITICALLY, recognise the ACUTE treatment is DIFFERENT (NICE CG150, 2012, updated June 2025): offer 100% OXYGEN at a flow rate of at least 12 litres per minute through a non-rebreathing mask with a reservoir bag (home and ambulatory oxygen) and/or a SUBCUTANEOUS/NASAL TRIPTAN (sumatriptan) to abort attacks \u2014 do not offer paracetamol, NSAIDs, opioids, ergots or oral triptans; consider PREVENTION during a cluster (NICE CG150: consider verapamil, seeking specialist advice first if unfamiliar with its use, including ECG monitoring); discuss the need for neuroimaging for a first bout with a GP with a special interest in headache or a neurologist; address the fire risk of smoking near home oxygen; advise on triggers (alcohol during a bout, smoking) and refer to NEUROLOGY (and screen red flags warranting imaging \u2014 first/worst, focal signs, age, abnormal exam \u2014 with the examination done face to face). The skill is not mislabelling it migraine/sinusitis, and giving the correct O2/triptan acute plan.',
    script: {
      opening: '"Doctor, these headaches are destroying me. It\u2019s an unbelievable pain behind my right eye \u2014 like a hot poker \u2014 comes on most nights around 2am, lasts an hour or so, my eye goes red and streams, my nose runs on that side. I literally pace the room and bang my head on the wall, I can\u2019t sit still. Painkillers do nothing. They\u2019ve been coming for two weeks straight."',
      facts: [
        {
          topic: 'The attacks',
          text: 'Two weeks. Always the RIGHT eye and temple. Builds to its worst within minutes, lasts 45 minutes to an hour and a half, then goes completely. Usually around 2am, sometimes a second one mid-afternoon. "Ten out of ten \u2014 worse than when I broke my leg."'
        },
        {
          topic: 'During an attack',
          text: 'Right eye red and watering, eyelid droops, right nostril runs or blocks. Can\u2019t lie still \u2014 paces, rocks, presses on the eye, has banged his head on the wall. No nausea, no vomiting, light doesn\u2019t bother him particularly.'
        },
        {
          topic: 'Before',
          text: 'If asked: "Something like this happened about 2 years ago for a few weeks in spring \u2014 I thought it was my sinuses and it went away." No headaches between bouts.'
        },
        {
          topic: 'Red-flag questions (all negative)',
          text: 'Never a sudden thunderclap headache. No weakness, numbness, speech or vision loss between attacks. No fever, no rash, no neck stiffness. No head injury. Between attacks he feels normal, "just shattered".'
        },
        {
          topic: 'Medicines and health',
          text: 'Tried paracetamol, ibuprofen and some co-codamol his wife had \u2014 "nothing touches it". No regular medicines. No heart problems, no chest pain, no high blood pressure known. No asthma. No allergies.'
        },
        {
          topic: 'Lifestyle',
          text: 'Smokes 20 a day. Drinks 3\u20134 pints on Friday and Saturday \u2014 noticed a beer brought on an attack within an hour last week. Coffee 4 cups a day. Works as a delivery van driver \u2014 exhausted and worried about falling asleep at the wheel. Lives with his wife, Aneta, and their baby, in a flat (has a gas cooker).'
        },
        {
          topic: 'Mood (only if asked directly)',
          text: '"Some nights I\u2019ve thought I can\u2019t take much more." No plan, would not act on it, "I just want it to stop." Has not harmed himself.'
        },
        {
          topic: 'How to play it',
          text: 'Exhausted, desperate, a bit tearful but trying to hold it together. You think it may be migraine or sinuses, and at 3am you think it\u2019s a tumour. When oxygen is mentioned, ask: "I smoke \u2014 is that a problem?" Feel huge relief if the doctor names the condition and explains why ordinary painkillers haven\u2019t worked.'
        }
      ],
      ice: {
        ideas: '"Migraine, maybe, or my sinuses."',
        concerns: 'HIDDEN AGENDA \u2014 "At 3am I start thinking it\u2019s a brain tumour." He is at the end of his tether and frightened by his own thoughts; worried about losing his driving job.',
        expectations: '"Something that actually stops the pain."'
      },
      cues: [
        '"I bang my head on the wall" \u2014 restlessness typical of cluster headache, and how desperate he is.',
        '"Some nights I\u2019ve thought I can\u2019t take much more" (if mood is explored) \u2014 needs a direct question about suicidal thoughts.',
        '"I smoke \u2014 is that a problem?" (when oxygen is discussed) \u2014 fire safety with home oxygen.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises CLUSTER HEADACHE \u2014 strictly unilateral, excruciating orbital/temporal pain, short-lived (15\u2013180 min), circadian/nocturnal, with ipsilateral cranial autonomic features and RESTLESSNESS/agitation, in clusters'
      },
      {
        dom: 'dg',
        text: 'DISTINGUISHES it from migraine (longer, throbbing, lies still in a dark room, nausea/photophobia) and from sinusitis \u2014 using the autonomic features and restlessness with short severe attacks as discriminators'
      },
      {
        dom: 'cm',
        text: 'Knows the ACUTE treatment differs (NICE CG150) \u2014 100% OXYGEN at 12 L/min or more via a non-rebreathing mask with reservoir bag and/or a fast-acting (SUBCUTANEOUS/NASAL) TRIPTAN abort attacks \u2014 and that paracetamol, NSAIDs, opioids, ergots and oral triptans should not be offered; addresses the home-oxygen fire risk in a smoker'
      },
      {
        dom: 'cm',
        text: 'Considers PREVENTIVE treatment during a bout (VERAPAMIL, NICE CG150, with specialist advice first if unfamiliar and ECG monitoring; steroid course/GON block to break a cluster, specialist) and starts prevention early'
      },
      {
        dom: 'cm',
        text: 'Advises on triggers (alcohol during a bout, smoking), SCREENS headache red flags warranting imaging, discusses neuroimaging for a first bout with a headache GPwSI or neurologist (NICE CG150), and refers to NEUROLOGY for confirmation/management'
      },
      {
        dom: 'ro',
        text: 'Responds to extreme distress with empathy, SCREENS mood/suicidality given the severity ("suicide headache"), and conveys that effective treatment exists'
      },
      {
        dom: 'ro',
        text: 'Explains why this is not migraine/sinusitis and why the treatment is different, checking understanding'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: arranges home oxygen + suitable triptan, neurology referral, prevention with monitoring, red-flag and mood/crisis safety-netting, and review \u2014 correct O2/triptan plan, not another opioid script'
      }
    ],
    worked: [
      {
        lbl: 'Recognise + reframe',
        txt: '"What you\u2019re describing isn\u2019t an ordinary headache or migraine \u2014 the strictly one-sided pain behind the eye, the red watering eye and runny nostril, the short attacks at the same time each night, and pacing because you can\u2019t keep still \u2014 that\u2019s cluster headache. It\u2019s one of the most severe pains there is, and crucially it needs specific treatment."'
      },
      {
        lbl: 'Why painkillers fail',
        txt: '"That\u2019s why your painkillers do nothing \u2014 the attacks are too short and intense for tablets to work, and opioids actually aren\u2019t the answer. We use two things that genuinely abort an attack."'
      },
      {
        lbl: 'The acute plan',
        txt: '"First, high-flow oxygen through a special mask at the start of an attack \u2014 I\u2019ll arrange that for home and for when you\u2019re out. Because you smoke, I need to be honest: smoking or any flame near oxygen is a real fire risk, so it can\u2019t happen in the same room. Second, a fast triptan, given as an injection under the skin or a nasal spray, not a tablet. Together these can switch attacks off."'
      },
      {
        lbl: 'Prevention',
        txt: '"To stop them coming during this run, we can consider a preventer \u2014 verapamil \u2014 and I\u2019ll get the specialist\u2019s advice on it first, with heart tracings as we increase it. Starting it early in a bout helps. Avoid alcohol while you\u2019re in a cluster, as it triggers attacks, and smoking doesn\u2019t help."'
      },
      {
        lbl: 'Screen mood',
        txt: '"This level of pain is genuinely tormenting \u2014 it\u2019s sometimes called the \u2018suicide headache\u2019. Can I ask honestly, has it ever made you feel life isn\u2019t worth living? \u2026 Thank you. I want to support you, not just the headaches."'
      },
      {
        lbl: 'Refer + safety-net',
        txt: '"I\u2019ll refer you to neurology to confirm and manage this, and discuss with them whether you need a scan as it\u2019s your first bout. I\u2019d also like to examine you in person. If you ever get a sudden \u2018worst-ever\u2019 thunderclap headache, new weakness, or it changes character, that\u2019s different \u2014 seek urgent help. And if your mood drops or you feel unsafe, contact us straight away."'
      }
    ],
    learning: 'CLUSTER HEADACHE \u2014 a trigeminal autonomic cephalalgia \u2014 presents with STRICTLY UNILATERAL, EXCRUCIATING orbital/temporal pain, SHORT-LIVED (typically 15\u2013180 min, often ~45\u201390), occurring once to several times daily with CIRCADIAN/nocturnal timing, accompanied by ipsilateral CRANIAL AUTONOMIC features (red/watering eye, ptosis/lid swelling, nasal congestion/rhinorrhoea, miosis) and marked RESTLESSNESS/agitation, occurring in CLUSTERS over weeks; it is commoner in men and smokers. The key contrast is with MIGRAINE, which is usually LONGER (4\u201372 h), throbbing, with nausea/photophobia, and where the patient prefers to LIE STILL in a dark room \u2014 whereas cluster attacks are short, strictly one-sided with autonomic features, and the patient is AGITATED \u2014 so do not mislabel it as migraine or sinusitis. Critically, the ACUTE treatment is DIFFERENT and high-yield (NICE CG150, 2012, updated June 2025): 100% OXYGEN at a flow rate of at least 12 litres per minute through a non-rebreathing mask with a reservoir bag and/or a fast-acting SUBCUTANEOUS or NASAL TRIPTAN (sumatriptan) abort attacks, while paracetamol, NSAIDs, opioids, ergots and oral triptans should not be offered; home oxygen in a smoker carries a serious fire risk. Consider PREVENTIVE treatment during a bout \u2014 VERAPAMIL (NICE CG150: seek specialist advice first if unfamiliar with it, including ECG monitoring for heart block), with a steroid course or greater occipital nerve block to break a cluster \u2014 started early. Advise on triggers (alcohol during a bout, smoking), screen headache red flags warranting imaging (thunderclap/first-and-worst, focal neurology, new in older age, abnormal exam, raised-ICP/GCA features), discuss neuroimaging for a first bout with a headache GPwSI or neurologist (NICE CG150), and refer to neurology. Given the extreme severity (the "suicide headache"), screen mood and suicidality (NICE NG225) and support the patient \u2014 not another opioid prescription.',
    knowledge: {
      guideline: '[1] NICE CG150 (headaches in over 12s: diagnosis and management, 2012, updated June 2025) \u00b7 [2] NICE NG225 (self-harm: assessment, management and preventing recurrence, 2022) \u00b7 [3] International Classification of Headache Disorders, 3rd edition (International Headache Society, 2018) (international) \u00b7 Cluster headache (trigeminal autonomic cephalalgia) \u00b7 high-flow O2 + sc/nasal triptan \u00b7 verapamil prevention \u00b7 migraine distinction & red flags',
      points: [
        {
          h: 'Recognise cluster headache',
          t: 'Strictly unilateral, excruciating orbital/temporal pain, short (15\u2013180 min, ICHD-3 [3]), circadian/nocturnal, with ipsilateral autonomic features (red/watering eye, ptosis, rhinorrhoea) and restlessness, in clusters. Commoner in men/smokers.'
        },
        {
          h: 'Vs migraine',
          t: 'Migraine: longer, throbbing, nausea/photophobia, lies still in the dark. Cluster: short, one-sided, autonomic, agitated/restless. Don\u2019t mislabel as migraine/sinusitis.'
        },
        {
          h: 'Acute treatment (different!)',
          t: 'NICE CG150 [1]: 100% oxygen at \u226512 L/min via a non-rebreathing mask with reservoir bag (home and ambulatory) and/or fast-acting subcutaneous/nasal triptan abort attacks (check triptan cautions, BNF). Do not offer paracetamol, NSAIDs, opioids, ergots or oral triptans.'
        },
        {
          h: 'Prevention',
          t: 'NICE CG150 [1]: consider verapamil during a bout, with specialist advice first if unfamiliar, including ECG monitoring for heart block (BNF); specialist advice if it fails. Steroid course/greater occipital nerve block to break a cluster (specialist). Start early.'
        },
        {
          h: 'Triggers & red flags',
          t: 'Alcohol triggers attacks during a bout (avoid while in a cluster); smoking associated. Screen red flags (thunderclap, focal neuro, new in older age, abnormal exam, raised ICP/GCA) \u2192 imaging. First bout: discuss neuroimaging with a headache GPwSI or neurologist (NICE CG150 [1]). Home oxygen: fire risk with smoking, vaping or naked flames.'
        },
        {
          h: 'Severity & mood',
          t: 'Cluster headache is extremely severe ("suicide headache") with suicidality risk \u2014 ask directly, no risk scales, safety plan (NICE NG225 [2]). Refer to neurology.'
        },
        {
          h: 'Never do',
          t: 'Never mislabel as migraine/sinusitis; never rely on oral analgesia/opioids; never omit O2/sc-or-nasal triptan; never set up home oxygen without the smoking fire-risk conversation; never skip the red-flag and mood/suicidality screen.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Arrange home oxygen + suitable triptan, neurology referral, prevention with monitoring; red-flag and crisis safety-netting; review.'
        }
      ]
    }
  };

  /* ============ 237. VIDEO — Essential tremor vs Parkinson's: the shaking hands ============ */
  const c237 = {
    id: 'essential-tremor',
    title: '"My hands shake when I reach for my cup or write \u2014 my dad had it too. Is it Parkinson\u2019s?"',
    type: 'video',
    duration: 12,
    meta: {
      age: 64,
      sex: 'M',
      setting: 'Video consultation, with the examination arranged face to face \u2014 a tremor, worried about Parkinson\u2019s.',
      system: 'Neurology \u2014 essential tremor vs Parkinson\u2019s: action vs rest tremor & management',
      checked: 'October 2026'
    },
    brief: 'Mr Hugh Brankin, 64, has a several-year history of a bilateral, fairly symmetrical hand tremor that is WORSE ON ACTION \u2014 reaching for a cup, holding a newspaper, writing (spidery), bringing a spoon to his mouth \u2014 and BETTER at rest; it improves with a little ALCOHOL, there is a FAMILY HISTORY (his father had it), and he has no slowness, stiffness or gait change. He is worried it is PARKINSON\u2019S. The examinable task is to distinguish ESSENTIAL TREMOR (a postural/action/kinetic tremor, often bilateral and symmetrical, worse with action and on maintaining posture, frequently familial, improved by alcohol, sometimes head/voice tremor, NO bradykinesia/rigidity) from PARKINSON\u2019S DISEASE (a RESTING "pill-rolling" tremor, typically ASYMMETRIC, better with action, with BRADYKINESIA, RIGIDITY, and gait/postural changes \u2014 the parkinsonian triad), and from other causes (physiological/enhanced \u2014 anxiety, caffeine, hyperthyroidism, drugs e.g. salbutamol/lithium/SSRIs; cerebellar intention tremor; dystonic). Take the history, EXAMINE for the discriminating features, screen reversible causes (TFTs, drug review, alcohol), and MANAGE essential tremor (reassurance; if troublesome/functionally impairing, PROPRANOLOL \u2014 licensed for essential tremor, after checking for asthma, bradycardia/heart block and heart failure \u2014 or primidone as an alternative, dose per BNF (clinical practice rather than a guideline recommendation for essential tremor); address impact/embarrassment), while referring to neurology if diagnostic uncertainty or parkinsonian features (NICE NG71, 2017: refer suspected Parkinson\u2019s quickly and untreated to a specialist). The examination (rest/posture/action tremor, bradykinesia, rigidity, gait) needs a face-to-face appointment, not video. The skill is the action-vs-rest distinction, reassurance where appropriate, and correct management \u2014 directly addressing the Parkinson\u2019s fear.',
    script: {
      opening: '"My hands have got shaky over the last few years, doctor. It\u2019s worst when I reach for my tea or try to write \u2014 my writing\u2019s gone spidery \u2014 but when they\u2019re resting in my lap they\u2019re fine. Funny thing, a glass of wine settles it. My dad had the same. I\u2019m really worried it\u2019s the start of Parkinson\u2019s \u2014 is it?"',
      facts: [
        {
          topic: 'The tremor',
          text: 'About 4 years, slowly worse. Both hands about the same. Worse holding a cup, a newspaper, a spoon, doing up small buttons, writing. Fine with hands resting in his lap. Worse when tired, nervous or after strong coffee. A glass of wine settles it for an hour or so. If asked: his head sometimes nods "no-no" slightly; voice fine.'
        },
        {
          topic: 'On video (if asked to demonstrate)',
          text: 'Hands still when resting on his lap. Shake when held out in front, more when he tries to touch his nose or draw a spiral. Can walk across the room normally with arms swinging, turn easily, and get up from a chair without using his hands.'
        },
        {
          topic: 'Parkinson\u2019s questions (all negative)',
          text: 'No slowness, no stiffness, no shuffling, walking normal, no falls. Sense of smell fine. No acting out dreams. Bowels normal. Handwriting is shaky, not small. Face expression normal (his wife says).'
        },
        {
          topic: 'Other causes (if asked)',
          text: 'No weight loss, no palpitations, not sweaty or hot. Drinks 5\u20136 mugs of strong tea a day. Alcohol: 2 glasses of wine most evenings \u2014 "it helps the shaking at dinner". No new medicines; not on asthma inhalers, lithium, valproate or antidepressants.'
        },
        {
          topic: 'Health and medicines',
          text: 'High cholesterol (atorvastatin). No asthma, no heart problems, no slow pulse that he knows of. No allergies.'
        },
        {
          topic: 'Family and social',
          text: 'Father had a shaky hand "for years" and lived to 88 \u2014 "he never had Parkinson\u2019s, I don\u2019t think". Retired accountant. Married to Moira. Loves eating out with friends, now avoids it because he spills soup and wine. Sings in a choir.'
        },
        {
          topic: 'How to play it',
          text: 'Polite, articulate, quietly very anxious about Parkinson\u2019s \u2014 a friend from the choir has it and is "going downhill fast". If the doctor explains the difference clearly, show huge relief. Interested in a tablet "for eating out".'
        }
      ],
      ice: {
        ideas: '"Shaking hands means Parkinson\u2019s, doesn\u2019t it?"',
        concerns: 'HIDDEN AGENDA \u2014 his choir friend with Parkinson\u2019s; fear of ending up the same. Embarrassment eating out; has started using wine to steady his hands.',
        expectations: '"Tell me whether it\u2019s Parkinson\u2019s, and whether anything helps."'
      },
      cues: [
        '"When they\u2019re resting in my lap they\u2019re fine" \u2014 the action-versus-rest distinction.',
        '"A glass of wine settles it" \u2014 alcohol response, and a habit to discuss.',
        '"I spill things, I\u2019ve started avoiding going out" \u2014 functional impact that guides treatment.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises ESSENTIAL TREMOR \u2014 action/postural, bilateral/symmetrical, worse with action and better at rest, often familial, alcohol-responsive, no bradykinesia/rigidity/gait change'
      },
      {
        dom: 'dg',
        text: 'DISTINGUISHES it from PARKINSON\u2019S (resting, asymmetric, pill-rolling tremor, better with action, WITH bradykinesia, rigidity and gait/postural changes) \u2014 using rest-vs-action and the presence/absence of the parkinsonian triad'
      },
      {
        dom: 'dg',
        text: 'Screens OTHER/REVERSIBLE causes \u2014 enhanced physiological (anxiety/caffeine), hyperthyroidism (TFTs), drugs (salbutamol/lithium/SSRIs \u2014 review), alcohol, cerebellar/dystonic tremor'
      },
      {
        dom: 'dg',
        text: 'EXAMINES (face to face) for the discriminating features \u2014 tremor at rest/posture/action (finger-nose, cup, writing/spiral), bradykinesia (finger-tapping/arm swing), rigidity (cogwheel), gait and cerebellar signs'
      },
      {
        dom: 'cm',
        text: 'MANAGES essential tremor \u2014 reassurance if mild; PROPRANOLOL (licensed; contraindications checked \u2014 asthma, bradycardia/heart block, heart failure) or primidone if functionally impairing/distressing; reduce caffeine, review drugs, treat thyroid \u2014 and refers to neurology if uncertain/atypical/parkinsonian/cerebellar/refractory'
      },
      {
        dom: 'ro',
        text: 'Directly ADDRESSES the Parkinson\u2019s FEAR \u2014 explaining why this looks like essential tremor rather than Parkinson\u2019s \u2014 and explores embarrassment/functional impact empathetically'
      },
      {
        dom: 'ro',
        text: 'Explains the diagnosis and reasoning in accessible terms and checks understanding, neither over-investigating nor dismissing'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: what would prompt review/referral (asymmetry, slowness/stiffness, gait change, worsening function), treatment trial and review, reversible-cause results, and reassurance \u2014 action-vs-rest distinction with the Parkinson\u2019s fear addressed'
      }
    ],
    worked: [
      {
        lbl: 'Address the fear head-on',
        txt: '"Let me reassure you on the big worry first: what you\u2019re describing actually points AWAY from Parkinson\u2019s. Your shake is worst when you USE your hands and settles at rest \u2014 Parkinson\u2019s tremor is the opposite, worse at rest \u2014 and it\u2019s both sides and runs in your family. That all fits a different, much more benign condition called essential tremor."'
      },
      {
        lbl: 'Examine to confirm',
        txt: '"I\u2019d like to check properly in person \u2014 hands resting in your lap, then arms out, then reaching to my finger and writing a spiral. I\u2019ll also check for slowness, stiffness and your walking, because those are the things we\u2019d see in Parkinson\u2019s. If none of those are there, that\u2019s reassuring."'
      },
      {
        lbl: 'Screen reversible causes',
        txt: '"I\u2019ll do a thyroid blood test, because an overactive thyroid can cause a tremor, and review your medicines and caffeine, as those can make any tremor worse."'
      },
      {
        lbl: 'Name + reassure',
        txt: '"So this is essential tremor \u2014 common, often inherited, and not Parkinson\u2019s and not dangerous. The classic clue you gave me is that a little alcohol settles it; that\u2019s very typical."'
      },
      {
        lbl: 'Offer management',
        txt: '"If it\u2019s mainly a nuisance, we can leave it. But if it\u2019s embarrassing or getting in the way of writing and drinking, there\u2019s a tablet \u2014 propranolol \u2014 that often helps, as long as you don\u2019t have asthma or certain heart problems, which I\u2019ll check. How much is it bothering you day to day?"'
      },
      {
        lbl: 'Safety-net + refer if needed',
        txt: '"Come back if it becomes one-sided, you notice slowness or stiffness, your walking changes, or it\u2019s affecting you more \u2014 then I\u2019d involve a neurologist. Otherwise we can trial treatment and review. Does that ease your mind a bit?"'
      }
    ],
    learning: 'Distinguish ESSENTIAL TREMOR from PARKINSON\u2019S \u2014 the core skill in a "shaking hands" presentation. Essential tremor is a postural/action/kinetic tremor that is WORSE ON ACTION and posture (reaching, holding, writing \u2014 spidery, eating) and BETTER at rest, typically BILATERAL and fairly SYMMETRICAL, often FAMILIAL, frequently IMPROVED by a small amount of alcohol, sometimes with head ("yes-yes"/"no-no") or voice tremor, and crucially WITHOUT bradykinesia, rigidity or gait disturbance. Parkinson\u2019s tremor, by contrast, is a RESTING "pill-rolling" tremor, typically ASYMMETRIC (one side first), BETTER with action, and accompanied by the parkinsonian features \u2014 BRADYKINESIA (slowness, reduced arm swing, micrographia that decrements), RIGIDITY (cogwheel) and gait/postural changes (shuffling, stooped, festination) \u2014 so the rest-vs-action distinction and the presence/absence of the parkinsonian triad are the discriminators. Consider other tremors: enhanced PHYSIOLOGICAL (anxiety, caffeine, fatigue), HYPERTHYROIDISM (check TFTs), DRUGS (salbutamol, lithium, SSRIs, valproate \u2014 review), excess alcohol/withdrawal, cerebellar INTENTION tremor (worse approaching a target, with cerebellar signs) and dystonic tremor. Examine the tremor at rest, on posture (arms outstretched) and on action (finger-nose, cup, writing/spiral), and assess for bradykinesia, rigidity, gait and cerebellar signs, which underpins the diagnosis and reassurance. Manage essential tremor by reassuring when mild (directly addressing the Parkinson\u2019s fear), and offering PROPRANOLOL (licensed for essential tremor; check for asthma, bradycardia/heart block and heart failure first) or primidone when functionally impairing or socially distressing (BNF; clinical practice rather than a guideline recommendation), while reducing caffeine, reviewing aggravating drugs and treating thyroid abnormality; refer to neurology for diagnostic uncertainty, atypical/asymmetric features, suspected parkinsonism (NICE NG71: quickly and untreated) or cerebellar signs, or refractory tremor. The hidden agenda is fear of Parkinson\u2019s plus embarrassment/functional impact; make the action-vs-rest distinction, reassure appropriately while screening properly, address the impact and offer treatment, and refer if uncertain.',
    knowledge: {
      guideline: '[1] NICE NG71 (Parkinson\u2019s disease in adults, 2017) \u00b7 [2] Consensus statement on the classification of tremors (International Parkinson and Movement Disorder Society, 2018) (international) \u00b7 [3] NICE NG145 (thyroid disease: assessment and management, 2019) \u00b7 [4] NICE HTG474 (unilateral MRI-guided focused ultrasound thalamotomy for treatment-resistant essential tremor; formerly IPG617) \u00b7 Essential tremor vs Parkinson\u2019s \u00b7 action vs rest tremor \u00b7 reversible-cause screen (TFTs/drugs) \u00b7 propranolol/primidone \u00b7 neurology referral',
      points: [
        {
          h: 'Essential tremor',
          t: 'Action/postural, bilateral/symmetrical, worse with action and better at rest, often familial, alcohol-responsive, \u00b1 head/voice tremor, NO bradykinesia/rigidity/gait change (consensus definition [2], international: bilateral upper-limb action tremor for at least 3 years without other neurological signs).'
        },
        {
          h: 'Parkinson\u2019s tremor',
          t: 'Resting, pill-rolling, asymmetric, better with action, WITH bradykinesia, rigidity and gait/postural changes (the parkinsonian triad). Rest-vs-action + triad are the discriminators. NICE NG71 [1]: bradykinesia required (Brain Bank criteria); refer suspected Parkinson\u2019s quickly and untreated.'
        },
        {
          h: 'Other/reversible causes',
          t: 'Enhanced physiological (anxiety/caffeine/fatigue), hyperthyroidism (TFTs, NICE NG145 [3]), drugs (salbutamol/lithium/SSRIs/valproate/amiodarone/steroids \u2014 review), alcohol, cerebellar intention tremor, dystonic tremor.'
        },
        {
          h: 'Examine',
          t: 'Face to face: tremor at rest/posture/action (finger-nose, cup, spiral/writing); assess bradykinesia (finger-tap/arm swing), rigidity (cogwheel), gait, cerebellar signs.'
        },
        {
          h: 'Manage essential tremor',
          t: 'Reassure if mild; propranolol (licensed; check for asthma, bradycardia/heart block, heart failure) or primidone if functionally impairing/distressing \u2014 dose per BNF; clinical practice rather than a guideline recommendation; reduce caffeine, review drugs, treat thyroid.'
        },
        {
          h: 'Refer',
          t: 'Neurology if diagnostic uncertainty, atypical/asymmetric features, suspected parkinsonism, cerebellar signs, or refractory/severe tremor (specialist options: deep brain stimulation; focused ultrasound thalamotomy under special arrangements, NICE HTG474 [4]).'
        },
        {
          h: 'Address the fear',
          t: 'Directly address the Parkinson\u2019s fear, explaining why action-predominant, symmetrical, familial, alcohol-responsive tremor without the triad points to essential tremor. Explore embarrassment/function.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Review/refer if asymmetry, slowness/stiffness, gait change or worsening function; treatment trial and review; reversible-cause results; reassurance.'
        }
      ]
    }
  };

  /* ============ 238. VIDEO — Erythema nodosum: tender shin nodules & the underlying-cause hunt ============ */
  const c238 = {
    id: 'erythema-nodosum',
    title: '"I\u2019ve come up with these painful red lumps on my shins \u2014 they\u2019re hot and sore, what are they?"',
    type: 'video',
    duration: 12,
    meta: {
      age: 31,
      sex: 'F',
      setting: 'Video consultation, with the skin examination arranged face to face \u2014 tender red nodules on the shins.',
      system: 'Dermatology \u2014 erythema nodosum: recognition & the underlying-cause screen',
      checked: 'October 2026'
    },
    brief: 'Miss Leah Marsden, 31, presents with several days of crops of TENDER, warm, RED-PURPLE NODULES on the SHINS (anterior lower legs), bilaterally, that are bruise-like as they fade, with associated low-grade fever, malaise and joint aches; she is otherwise reasonably well. The examinable task is to recognise ERYTHEMA NODOSUM (a panniculitis: tender erythematous nodules, classically on the shins, that do NOT ulcerate and resolve like bruises over weeks) and \u2014 critically \u2014 that it is a REACTIVE condition that should prompt a search for an UNDERLYING CAUSE: streptococcal infection (recent sore throat), SARCOIDOSIS, INFLAMMATORY BOWEL DISEASE, TUBERCULOSIS, DRUGS (notably oestrogen-containing contraceptives and sulfonamides), PREGNANCY, and TB and other infections \u2014 with many cases having no cause found; EN with bilateral hilar lymphadenopathy, fever and ankle arthritis is L\u00d6FGREN\u2019S SYNDROME (acute sarcoidosis, BTS 2021). Take a focused history (recent infection/sore throat, GI symptoms, respiratory symptoms/cough, weight loss, TB risk/travel, drugs, pregnancy), examine face to face, and arrange a sensible work-up (ASO titre \u2014 a throat swab only helps if the throat is still sore \u2014 FBC, U&E, LFT, CRP/ESR, chest X-ray \u2014 important for sarcoid/TB, and tests directed by history; pregnancy test). MANAGE the EN itself supportively (it is usually self-limiting \u2014 rest, leg elevation, support; an NSAID only once pregnancy is excluded and with caution if IBD is suspected, BNF) and TREAT/refer for the underlying cause as found. The skill is recognising EN, NOT just treating the legs, and conducting the underlying-cause screen with a chest X-ray.',
    script: {
      opening: '"I\u2019ve come up with these really sore red lumps on the fronts of both my shins over the last few days \u2014 they\u2019re hot and tender to touch, and now they look a bit bruised. I\u2019ve felt a bit fluey and my joints ache. I had a sore throat a couple of weeks ago. What on earth are they?"',
      facts: [
        {
          topic: 'The lumps',
          text: 'Five days. About six on the fronts of both shins, size of a 10p to a 50p coin, raised, red-purple, hot and very tender. The oldest ones look like bruises now. None have burst or wept. Will show them to the camera: shiny red-purple swellings on both shins.'
        },
        {
          topic: 'Other symptoms',
          text: 'Felt fluey, temperature 37.8 at home. Ankles ache and look a bit puffy. No rash elsewhere. Sore throat 2 weeks ago, settled on its own; no antibiotics.'
        },
        {
          topic: 'Cause questions (if asked)',
          text: 'No cough, no breathlessness, no night sweats, no weight loss. No diarrhoea, no blood in stools, no tummy pain. No red or painful eyes. No mouth ulcers. No recent travel. No TB contacts she knows of.'
        },
        {
          topic: 'Medicines and pregnancy',
          text: 'Started the combined pill 3 months ago (Microgynon). No antibiotics recently. Last period 3 weeks ago; "could I be pregnant? I don\u2019t think so" \u2014 not using condoms as well. No allergies.'
        },
        {
          topic: 'Health and social',
          text: 'Fit and well; no asthma or stomach problems. Works as a nursery nurse \u2014 on her feet all day. Non-smoker, drinks socially. Lives with her boyfriend. Family: aunt has Crohn\u2019s disease.'
        },
        {
          topic: 'How to play it',
          text: 'Alarmed \u2014 the bruised look frightened you. You thought they might be bites. Ask "Why would that matter?" if asked about the pill or pregnancy, and "An X-ray, for lumps on my legs?" if a chest X-ray is suggested. Reassured by a clear explanation that they will settle.'
        }
      ],
      ice: {
        ideas: '"I thought maybe bites, or I\u2019d knocked them. Now I don\u2019t know."',
        concerns: '"They look like bruises \u2014 I looked up bruising on the legs and it said leukaemia." Worried about missing work.',
        expectations: '"Find out what they are and get something for the pain."'
      },
      cues: [
        '"I had a sore throat a couple of weeks ago" \u2014 a possible trigger.',
        '"Now they look a bit bruised" \u2014 her fear of a blood disorder.',
        '"I started the pill a few months ago" (if medicines are asked about) \u2014 a possible cause.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises ERYTHEMA NODOSUM \u2014 tender, warm, red-violet nodules on the shins, usually bilateral, non-ulcerating, resolving like bruises, often with fever/malaise/arthralgia \u2014 as a clinical diagnosis (panniculitis)'
      },
      {
        dom: 'dg',
        text: 'Recognises EN is REACTIVE and prioritises the search for an UNDERLYING CAUSE \u2014 streptococcal infection, sarcoidosis, IBD, TB, drugs (oestrogen-containing contraceptives/sulfonamides), pregnancy, other infections; many no cause found; L\u00f6fgren\u2019s syndrome \u2014 rather than only treating the legs'
      },
      {
        dom: 'dg',
        text: 'Takes a focused history for the causes (recent sore throat/infection, GI symptoms/weight loss, respiratory/eye symptoms, TB risk/travel, drugs incl. the pill, pregnancy)'
      },
      {
        dom: 'cm',
        text: 'Arranges a sensible work-up \u2014 ASOT (throat swab only if still sore), FBC, U&E, LFT, CRP/ESR, and importantly a CHEST X-RAY (sarcoid/TB), pregnancy test, with directed tests (calcium/ACE, calprotectin/GI, TB testing) per history'
      },
      {
        dom: 'cm',
        text: 'Manages the EN SUPPORTIVELY (self-limiting \u2014 rest, leg elevation, compression; NSAID only once pregnancy is excluded and with caution if IBD is suspected) and TREATS/REFERS for the underlying cause as found'
      },
      {
        dom: 'ro',
        text: 'Reassures about the skin lesions (self-limiting, not dangerous in themselves) while explaining that they are a clue to look for an internal cause, and addresses her alarm'
      },
      {
        dom: 'ro',
        text: 'Explains the diagnosis and the reason for the work-up (especially the chest X-ray) in accessible terms and checks understanding'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: results review (especially CXR), what systemic symptoms warrant earlier review (weight loss, persistent cough, GI bleeding), supportive measures and expected resolution, and treatment/referral for the cause \u2014 recognising EN + the underlying-cause screen, not just treating the legs'
      }
    ],
    worked: [
      {
        lbl: 'Name it',
        txt: '"These are a recognised condition called erythema nodosum \u2014 tender, bruise-like lumps from inflammation in the fat under the skin, classically on the shins, and they go through that bruised look as they settle. The good news is the lumps themselves are not dangerous and usually clear over a few weeks."'
      },
      {
        lbl: 'Explain the important bit',
        txt: '"Here\u2019s the key thing, though: these lumps are often a REACTION to something else going on in the body, so my main job is to find out why. Your recent sore throat is actually a common trigger."'
      },
      {
        lbl: 'Screen the causes',
        txt: '"Let me ask a few things \u2014 any tummy upset, diarrhoea or blood, any cough or breathlessness, weight loss, recent travel or TB contact? And are you on the contraceptive pill, or could you be pregnant? These point to the different causes."'
      },
      {
        lbl: 'Investigate (incl. CXR)',
        txt: '"I\u2019d like to see the lumps in person to confirm this. I\u2019ll do some bloods, including one for a recent strep throat infection, and importantly a chest X-ray \u2014 because two of the causes, sarcoidosis and TB, show up there. I\u2019ll add a pregnancy test and anything else your answers point to."'
      },
      {
        lbl: 'Treat the legs',
        txt: '"For the lumps themselves: rest, put your legs up and support stockings help, and they\u2019ll fade on their own. Anti-inflammatory painkillers can help too, once we know you\u2019re not pregnant and there are no bowel symptoms; otherwise paracetamol. We don\u2019t need anything dramatic for the skin."'
      },
      {
        lbl: 'Safety-net + follow-up',
        txt: '"Once the results are back we\u2019ll know if there\u2019s a cause to treat \u2014 like the throat infection \u2014 or to look into further. Come back sooner if you lose weight, develop a persistent cough, or get tummy symptoms. Let\u2019s review with the X-ray and bloods."'
      }
    ],
    learning: 'ERYTHEMA NODOSUM is a panniculitis presenting as crops of TENDER, warm, erythematous-to-violaceous NODULES on the SHINS (anterior lower legs), usually bilateral, which do NOT ulcerate and resolve like BRUISES over a few weeks, often with low-grade fever, malaise and arthralgia \u2014 a clinical diagnosis. The critical point is that EN is a REACTIVE condition, so the key task is to search for an UNDERLYING CAUSE rather than only treat the legs: streptococcal infection (a recent SORE THROAT is a common trigger), SARCOIDOSIS, INFLAMMATORY BOWEL DISEASE, TUBERCULOSIS, DRUGS (notably oestrogen-containing contraceptives and sulfonamides), PREGNANCY, and TB and other infections, with many cases (about a third) having no cause found; EN with bilateral hilar lymphadenopathy, fever and ankle arthritis is L\u00d6FGREN\u2019S SYNDROME, an acute sarcoidosis that usually settles (BTS 2021). Take a focused history aimed at these causes (recent infection/sore throat; GI symptoms, diarrhoea, blood, weight loss \u2014 IBD; respiratory/eye symptoms \u2014 sarcoid; TB risk/travel/contacts; current drugs, especially the pill; pregnancy), and arrange a sensible work-up after a face-to-face examination: ASO titre (a throat swab only if the throat is still sore), FBC, U&E, LFT, CRP/ESR, and importantly a CHEST X-RAY (for sarcoidosis \u2014 bilateral hilar lymphadenopathy \u2014 and TB), a pregnancy test, and directed tests per history (calcium/ACE if sarcoid suspected, faecal calprotectin/GI work-up for bowel symptoms, TB testing if at risk) \u2014 the chest X-ray being a high-yield, easily-forgotten investigation. Manage the EN itself supportively, as it is usually self-limiting (rest, leg elevation, compression; an NSAID only once pregnancy is excluded and with caution in suspected IBD, BNF), and treat or refer for the underlying cause as found. The hidden agenda is wanting to know "what are they"; reassure about the skin lesions while conducting the underlying-cause screen including a chest X-ray, not only treating the legs.',
    knowledge: {
      guideline: '[1] BTS Clinical Statement on pulmonary sarcoidosis (British Thoracic Society, 2021) \u00b7 [2] NICE NG33 (tuberculosis, 2016) \u00b7 [3] NICE NG84 (sore throat (acute): antimicrobial prescribing, 2018) \u00b7 [4] NICE NG129 (Crohn\u2019s disease, 2019) and NICE NG130 (ulcerative colitis, 2019) \u00b7 [5] NICE HTG320 (faecal calprotectin testing, 2013; formerly DG11) \u00b7 Erythema nodosum (panniculitis) \u00b7 reactive \u2014 underlying-cause screen (strep/sarcoid/IBD/TB/drugs/pregnancy) \u00b7 chest X-ray \u00b7 supportive management',
      points: [
        {
          h: 'Recognise EN',
          t: 'Tender, warm, red-violet nodules on the shins, usually bilateral, non-ulcerating, resolving like bruises over weeks, often with fever/malaise/arthralgia. Clinical diagnosis (panniculitis).'
        },
        {
          h: 'Reactive \u2014 find the cause',
          t: 'EN is reactive: search for strep infection (recent sore throat), sarcoidosis (L\u00f6fgren\u2019s: EN + bilateral hilar nodes + fever + ankle arthritis [1]), IBD [4], TB [2], drugs (oestrogen-containing contraceptives/sulfonamides), pregnancy, other infections; many have no cause found (about \u2153). Don\u2019t just treat the legs.'
        },
        {
          h: 'Focused history',
          t: 'Recent infection/sore throat; GI symptoms/weight loss (IBD); respiratory/eye symptoms (sarcoid); TB risk/travel; drugs (pill); pregnancy. Systemic features broaden the work-up.'
        },
        {
          h: 'Investigations incl. CXR',
          t: 'ASOT (throat swab only if the throat is still sore; NICE NG84 [3] covers treatment), FBC, U&E, LFT, CRP/ESR, and importantly a chest X-ray (sarcoid \u2014 bilateral hilar lymphadenopathy; TB); pregnancy test; directed tests (calcium/ACE, calprotectin [5]/GI, TB testing) per history.'
        },
        {
          h: 'Manage supportively',
          t: 'EN is usually self-limiting: rest, leg elevation, compression; NSAID (naproxen or ibuprofen) only once pregnancy is excluded, with caution in suspected IBD, peptic ulcer or renal disease (BNF). Reassure about bruise-like resolution over about 3\u20136 weeks.'
        },
        {
          h: 'Treat the cause',
          t: 'Treat or refer for the underlying cause as found (treat strep, refer sarcoid/IBD/TB work-up, stop culprit drug). Dermatology if uncertain, ulcerating, recurrent or persisting beyond about 6\u20138 weeks.'
        },
        {
          h: 'Never do',
          t: 'Never just treat the legs without the underlying-cause screen; never omit the chest X-ray; never miss IBD/sarcoid/TB clues; never overlook drugs/pregnancy as triggers.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Results review (esp. CXR); earlier review for weight loss/persistent cough/GI bleeding; supportive measures and expected resolution; treat/refer the cause.'
        }
      ]
    }
  };

  /* ============ 239. VIDEO — Faecal incontinence: the hidden, shameful symptom ============ */
  const c239 = {
    id: 'faecal-incontinence',
    title: '"I\u2019ve been having accidents \u2014 I can\u2019t always make it to the toilet \u2014 I\u2019ve been too ashamed to tell anyone"',
    type: 'video',
    duration: 12,
    meta: {
      age: 62,
      sex: 'F',
      setting: 'Video consultation, with the examination (including a chaperoned DRE) arranged face to face \u2014 disclosed bowel incontinence.',
      system: 'Continence / Lower GI \u2014 faecal incontinence: sensitive assessment & treatable causes',
      checked: 'October 2026'
    },
    brief: 'Mrs Patricia Lowe, 62 (three vaginal deliveries, one forceps), has, for months, been having episodes of FAECAL INCONTINENCE \u2014 sometimes urgency she can\u2019t control, sometimes passive soiling \u2014 which she has hidden out of deep SHAME, with major impact on her confidence, social life and mood; she raises it hesitantly, having booked about something else, and the station gives the disclosure the full consultation time. The examinable task is to handle a sensitive, stigmatised disclosure WELL \u2014 respond with empathy and without embarrassment, validate her courage, and take it seriously \u2014 and then to ASSESS systematically: characterise it (urge vs passive incontinence, stool consistency/Bristol, frequency, pads), screen CAUSES and contributors (obstetric/anal SPHINCTER injury \u2014 her forceps/deliveries; diarrhoea/constipation with OVERFLOW; IBS/IBD; diabetes/neurological; rectal prolapse; medications; cognitive/mobility/access factors), and \u2014 critically \u2014 EXCLUDE/recognise RED FLAGS that change the pathway: a CHANGE IN BOWEL HABIT, RECTAL BLEEDING or weight loss (consider colorectal pathology \u2014 NICE NG12: offer FIT to adults with a change in bowel habit, among other features, and refer on the suspected cancer pathway if FIT is 10 \u00b5g Hb/g faeces or more (NICE HTG690) or a rectal mass is felt), and NEUROLOGICAL features (saddle anaesthesia, new incontinence with back pain/leg symptoms \u2014 CAUDA EQUINA, emergency same-day assessment, GIRFT 2023). Examine face to face with consent and a chaperone offered (GMC 2024): abdomen, perianal, DRE for tone/impaction/masses. MANAGE with first-line conservative measures (NICE CG49: treat constipation/overflow, optimise stool consistency, loperamide for loose stool if no contraindication (dose per BNF), diet, bowel-retraining, supervised pelvic floor muscle training (NICE NG210), skin care, continence products) and REFER to continence services/colorectal as indicated (e.g. sphincter assessment, biofeedback). The skill is destigmatising, systematic assessment, red-flag exclusion, and proactive management of a symptom patients rarely volunteer. NICE NG12 relevant where change in bowel habit/bleeding.',
    script: {
      opening: '(Hesitant, having booked about something minor.) "Before I go \u2014 there\u2019s something I\u2019ve not told anyone, I\u2019m so embarrassed. For months now I\u2019ve been having\u2026 accidents. Sometimes I get the urge and just can\u2019t hold it, sometimes I don\u2019t even feel it coming. I\u2019ve stopped going out. I almost didn\u2019t say anything."',
      facts: [
        {
          topic: 'The accidents',
          text: 'About 8 months. Mostly urgency \u2014 "I get the urge and have about a minute". Sometimes finds she has soiled her underwear without knowing. Happens 2\u20133 times a week. Wears pads.'
        },
        {
          topic: 'Stools',
          text: 'Varies; worst when stools are loose, which is more often lately. Not constipated. Opens bowels 2\u20133 times a day now; used to be once a day \u2014 "it has changed, I suppose, since this started" (only if asked about change).'
        },
        {
          topic: 'Red-flag questions',
          text: 'Has not looked for blood \u2014 "I\u2019ll be honest, I\u2019ve tried not to look." No weight loss she knows of. Not tired or breathless. No tummy pain or lumps. No numbness between the legs, no back pain, no leg weakness, bladder control unchanged apart from "a little leak when I sneeze".'
        },
        {
          topic: 'Obstetric history',
          text: 'Three babies; the second was a forceps delivery with "a bad tear and lots of stitches". Never connected it.'
        },
        {
          topic: 'Medicines and health',
          text: 'Type 2 diabetes for 6 years on metformin (dose increased 9 months ago "because my sugars were up"); amlodipine for blood pressure. No allergies. Had her gallbladder out 3 years ago.'
        },
        {
          topic: 'Impact',
          text: 'Has stopped going to church and to her granddaughter\u2019s swimming lessons. Plans every trip around toilets. Feels low and ashamed; no thoughts of self-harm if asked. Hasn\u2019t told her husband, Ken.'
        },
        {
          topic: 'Why she booked',
          text: 'Booked about a repeat prescription for her blood pressure tablets \u2014 that is sorted in the first moments.'
        },
        {
          topic: 'How to play it',
          text: 'Quiet, embarrassed, looking down. Watch the doctor\u2019s reaction \u2014 if they seem uncomfortable or rushed, close up ("Never mind, it\u2019s probably just my age"). If they respond warmly, open up. Ask "Is that for cancer?" if a stool test is offered. Agree to an examination at the surgery if explained, with a chaperone.'
        }
      ],
      ice: {
        ideas: '"It\u2019s just age, and having the children. I thought nothing could be done."',
        concerns: 'HIDDEN AGENDA \u2014 the shame itself: "I thought you\u2019d think it was disgusting." Has quietly worried about bowel cancer because her bowels have changed, which is partly why she hasn\u2019t looked.',
        expectations: '"I don\u2019t know \u2014 just to say it, I think. And to know if anything can be done."'
      },
      cues: [
        '"I almost didn\u2019t say anything" \u2014 the disclosure needs a warm, unhurried response.',
        '"I\u2019ve tried not to look" \u2014 avoidance hiding possible red flags; ask about bleeding and change in bowel habit.',
        '"One was forceps" (if asked about childbirth) \u2014 a likely cause she never connected.'
      ]
    },
    checkpoints: [
      {
        dom: 'ro',
        text: 'Handles the sensitive, shame-laden DISCLOSURE well \u2014 responding with genuine empathy and without embarrassment, thanking/validating her, normalising that it is common and often TREATABLE, and giving it time'
      },
      {
        dom: 'dg',
        text: 'CHARACTERISES the incontinence \u2014 urge vs passive/soiling, stool consistency (Bristol), frequency, pad use \u2014 and recognises constipation with OVERFLOW and loose stool as common, treatable contributors'
      },
      {
        dom: 'dg',
        text: 'Screens CAUSES/contributors \u2014 obstetric anal sphincter injury (deliveries/forceps), diarrhoea/constipation, IBS/IBD, diabetes/neurological disease, rectal prolapse/haemorrhoids, anorectal surgery, medications, cognitive/mobility/access factors'
      },
      {
        dom: 'dg',
        text: 'Recognises and EXCLUDES the RED FLAGS \u2014 change in bowel habit/rectal bleeding/weight loss (colorectal pathology \u2014 NICE NG12: FIT, suspected cancer referral if 10 \u00b5g Hb/g or more, DRE) and saddle anaesthesia/new incontinence with back/leg symptoms (CAUDA EQUINA emergency)'
      },
      {
        dom: 'dg',
        text: 'EXAMINES appropriately face to face with consent and a chaperone offered (abdomen, perianal inspection, DIGITAL RECTAL EXAMINATION for tone/impaction/masses) and MANAGES first-line conservatively (NICE CG49: treat constipation/overflow or diarrhoea, optimise stool consistency, loperamide if loose, bowel-retraining, supervised pelvic floor training (NICE NG210), skin care/products), referring to continence/colorectal services as indicated'
      },
      {
        dom: 'ro',
        text: 'Addresses the major PSYCHOSOCIAL/mood impact (social withdrawal, confidence, relationships) and gives realistic HOPE that it is often treatable, preserving her dignity'
      },
      {
        dom: 'ro',
        text: 'Explains the assessment and plan sensitively, checks understanding, and does not rush or minimise the symptom'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: red-flag/cancer-pathway referral where indicated, cauda-equina emergency advice, continence/colorectal referral, conservative-management review, and ongoing support \u2014 compassionate, systematic care of a rarely-volunteered symptom'
      }
    ],
    worked: [
      {
        lbl: 'Receive it with compassion',
        txt: '"I\u2019m really glad you told me \u2014 and I can see how hard that was. Please don\u2019t be embarrassed; this is far more common than people realise, and importantly it\u2019s often very treatable. Let\u2019s give this the time it deserves \u2014 it matters."'
      },
      {
        lbl: 'Characterise it',
        txt: '"Can you help me understand it a bit? Is it more that you get a sudden urge and can\u2019t make it in time, or that it happens without you feeling it coming? And what are your bowels like otherwise \u2014 loose, or constipated? Sometimes constipation causes leakage around it, which is very fixable."'
      },
      {
        lbl: 'Screen causes',
        txt: '"You mentioned your deliveries \u2014 a forceps birth can affect the muscles down there, which is a common and treatable cause. Are you diabetic, on any bowel medicines, or have you had any back problems? I\u2019m building a picture of why."'
      },
      {
        lbl: 'Exclude red flags',
        txt: '"A few important checks: any change in your usual bowel habit, blood in the stool, or weight loss? And any numbness around the back passage, or back pain with weakness in the legs? \u2026 Those would need urgent attention, so I\u2019m glad to have asked."'
      },
      {
        lbl: 'Examine + first-line plan',
        txt: '"I\u2019d like to see you in person to examine your tummy and, if you\u2019re happy, do an internal examination to check the muscle tone and rule out any blockage \u2014 you can have a chaperone, and I\u2019ll be gentle, explain as I go and stop whenever you ask. I\u2019ll also give you a simple stool test. Then we can start with things that genuinely help: getting the stool consistency right, pelvic-floor exercises, a toileting routine, and skin care."'
      },
      {
        lbl: 'Refer + hope + safety-net',
        txt: '"I\u2019ll also refer you to the continence service, who are experts, and possibly the bowel team for the muscle side. This is not something you just have to live with. Come back if you get any of those warning signs, and let\u2019s review how the measures help. You did exactly the right thing telling me."'
      }
    ],
    learning: 'Faecal incontinence is deeply STIGMATISED and under-reported, often hidden for years and disclosed tentatively (here after booking about something else; NICE CG49 advises asking in higher-risk groups such as women after childbirth), so the first task is COMMUNICATION: respond with genuine empathy and without embarrassment, thank and validate the patient, normalise that it is common and often TREATABLE, and give it the time it deserves. Then ASSESS systematically: characterise it as URGE incontinence (urgency, cannot reach the toilet \u2014 often sphincter/neurological) versus PASSIVE incontinence/soiling (unaware \u2014 internal sphincter dysfunction or OVERFLOW), and assess stool CONSISTENCY (loose stool is harder to control; constipation with overflow soiling is a common, treatable cause), frequency, pad use and psychosocial impact. Screen causes and contributors: OBSTETRIC anal sphincter injury (vaginal deliveries/forceps \u2014 a key cause in women), diarrhoea or constipation with overflow, IBS/IBD, diabetes and neurological disease, rectal prolapse/haemorrhoids, anorectal surgery, medications, and cognitive/mobility/access factors. Critically, EXCLUDE the RED FLAGS that change the pathway: a CHANGE IN BOWEL HABIT, RECTAL BLEEDING or unintentional WEIGHT LOSS (consider colorectal pathology \u2014 NICE NG12: FIT for a change in bowel habit, with suspected cancer pathway referral if FIT is 10 \u00b5g Hb/g faeces or more (NICE HTG690) or a rectal mass is felt; examination including DRE), and NEUROLOGICAL features \u2014 saddle anaesthesia or new bowel/bladder incontinence with back pain/leg weakness (CAUDA EQUINA, a neurosurgical emergency). Examine face to face with consent and a chaperone offered (GMC) \u2014 the abdomen, perianal area and a digital rectal examination (resting/squeeze tone, faecal impaction/overflow, masses), and manage first-line conservatively (NICE CG49: treat constipation/overflow or diarrhoea, optimise stool consistency, loperamide for loose stool if no contraindication, bowel-retraining/scheduled toileting, supervised pelvic floor muscle training (NICE NG210), skin care and continence products), referring to continence services and/or colorectal (sphincter assessment, biofeedback, surgery) as indicated \u2014 and via the cancer pathway if red flags. The hidden agenda is the shame-laden disclosure itself and a belief that nothing can be done; receive it compassionately, assess systematically, exclude red flags, address the psychosocial/mood impact, and give realistic hope. NICE NG12/lower-GI assessment applies where there is a change in bowel habit or rectal bleeding.',
    knowledge: {
      guideline: '[1] NICE CG49 (faecal incontinence in adults: management, 2007) \u00b7 [2] NICE NG210 (pelvic floor dysfunction: prevention and non-surgical management, 2021) \u00b7 [3] NICE NG12 Suspected cancer: recognition and referral (2015, last updated 15 April 2026) (suspected cancer: recognition and referral) \u00b7 [4] NICE HTG690 (quantitative faecal immunochemical testing to guide colorectal cancer pathway referral in primary care; formerly DG56) \u00b7 [5] GIRFT National suspected cauda equina syndrome pathway (2023) \u00b7 [6] GMC Intimate examinations and chaperones (2013, updated 2024) \u00b7 sensitive disclosure \u00b7 urge vs passive & overflow \u00b7 red flags (colorectal/cauda equina) \u00b7 conservative management & referral',
      points: [
        {
          h: 'Receive the disclosure well',
          t: 'Faecal incontinence is stigmatised and under-reported. Respond with empathy, without embarrassment; validate courage; normalise (common, often treatable); give it time. Heavily examined communication.'
        },
        {
          h: 'Characterise it',
          t: 'Urge (urgency, can\u2019t reach toilet \u2014 sphincter/neuro) vs passive/soiling (unaware \u2014 internal sphincter/overflow); stool consistency (Bristol \u2014 loose harder to control; constipation+overflow common & treatable); frequency, pads, impact.'
        },
        {
          h: 'Screen causes',
          t: 'Obstetric anal sphincter injury (deliveries/forceps), diarrhoea/constipation-overflow, IBS/IBD, diabetes/neurological disease, rectal prolapse/haemorrhoids, anorectal surgery, medications, cognitive/mobility/access factors.'
        },
        {
          h: 'Red flags',
          t: 'Change in bowel habit/rectal bleeding/weight loss \u2192 colorectal pathology (NICE NG12 [3]: FIT; suspected cancer referral if 10 \u00b5g Hb/g faeces or more (NICE HTG690 [4]) or a rectal mass; DRE). Saddle anaesthesia/new incontinence with back-leg symptoms \u2192 cauda equina emergency, same-day assessment [5].'
        },
        {
          h: 'Examine',
          t: 'Face to face, with consent and a chaperone offered, discussion recorded (GMC [6]): abdomen, perianal inspection (soiling, prolapse, haemorrhoids, scars, gaping), DRE (resting/squeeze tone, faecal impaction/overflow, masses).'
        },
        {
          h: 'Conservative management',
          t: 'NICE CG49 [1]: treat constipation/overflow or diarrhoea; optimise stool consistency (diet/fluids; loperamide if loose and no contraindication, dose per BNF); bowel-retraining/scheduled toileting; supervised pelvic floor muscle training (NICE NG210 [2]); skin care; continence products.'
        },
        {
          h: 'Refer',
          t: 'Continence services and/or colorectal (sphincter assessment, biofeedback, anal irrigation, surgical options such as sacral nerve stimulation) if initial measures fail [1]; suspected cancer pathway if red flags (NICE NG12); cauda equina = emergency.'
        },
        {
          h: 'Never do',
          t: 'Never rush/minimise the disclosure or show discomfort; never assume "just ageing/childbirth"; never skip the red-flag screen or DRE; never omit the psychosocial impact or realistic hope.'
        }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c236, c237, c238, c239);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {
    'cluster-headache': {
      ceg: ['Urgent & unscheduled care', 'Mental health & addiction'],
      stem: {
        name: 'Marek Solomon',
        age: '38 years \u00b7 male',
        pmh: [
          'Excruciating strictly unilateral retro-orbital pain, ~45\u201390 min, nightly/circadian, in a 2-week cluster',
          'Ipsilateral red/watering eye, ptosis, rhinorrhoea; restless/paces/head-banging',
          'Smoker; oral analgesia ineffective'
        ],
        meds: ['Co-codamol (no benefit)'],
        allergy: 'NKDA',
        recent: '"Excruciating pain behind one eye every night \u2014 makes me pace and bang my head; painkillers do nothing."',
        reason: 'Video consultation (examination arranged face to face) \u2014 severe recurrent unilateral headache with eye symptoms.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Recognise',
          d: 'Strictly unilateral, short, circadian orbital pain + autonomic features + restlessness, in clusters = cluster headache.'
        },
        {
          t: '2\u20134',
          h: 'Vs migraine + red flags',
          d: 'Not migraine (longer/throbbing/lies still); screen thunderclap/focal/older-age/abnormal-exam.'
        },
        {
          t: '4\u20137',
          h: 'Acute Rx (different!)',
          d: 'O2 \u226512 L/min + sc/nasal triptan abort attacks (NICE CG150); no paracetamol/NSAIDs/opioids/ergots/oral triptans; oxygen fire risk with smoking.'
        },
        {
          t: '7\u20139',
          h: 'Prevention + triggers',
          d: 'Consider verapamil (specialist advice/ECG, NICE CG150); avoid alcohol in a bout; smoking. Start prevention early.'
        },
        {
          t: '9\u201312',
          h: 'Mood + refer',
          d: 'Screen suicidality ("suicide headache"); neurology referral (imaging for a first bout discussed); safety-net thunderclap/new neuro.'
        }
      ],
      wordPics: {
        fail: 'Mislabels as migraine/sinusitis; gives oral analgesia/opioids; no O2/triptan; no suicidality screen or neurology referral.',
        pass: 'Recognises cluster headache, gives O2 + sc/nasal triptan, considers verapamil prevention with specialist advice, and refers neurology.',
        exc: 'Confidently recognises cluster headache vs migraine, prescribes the correct acute plan (high-flow O2 + sc/nasal triptan, avoiding opioids), considers verapamil prevention with specialist advice and monitoring, addresses oxygen fire safety as he smokes, screens red flags and suicidality, and refers neurology.'
      },
      avoid: [
        {
          dont: '"Sounds like migraine \u2014 try this stronger painkiller / some co-codamol."',
          instead: '"This is cluster headache, not migraine \u2014 it needs high-flow oxygen and a triptan injection or nasal spray; ordinary painkillers won\u2019t touch it."',
          why: 'Mislabelling as migraine and using oral analgesia/opioids denies the effective O2/triptan treatment.'
        },
        {
          dont: '(No prevention) treating attacks only.',
          instead: '"Let\u2019s consider a preventer like verapamil to suppress the run of attacks, with the specialist\u2019s advice and heart tracings."',
          why: 'Prevention during a bout is key; treating attacks alone leaves him suffering nightly.'
        },
        {
          dont: '(No mood screen) ignoring the severity.',
          instead: '"This pain is sometimes called the \u2018suicide headache\u2019 \u2014 can I ask if it\u2019s made you feel life isn\u2019t worth living?"',
          why: 'Cluster headache carries real suicidality risk; omitting the screen is unsafe.'
        }
      ]
    },
    'essential-tremor': {
      ceg: ['Older adults', 'New & undifferentiated presentations'],
      stem: {
        name: 'Hugh Brankin',
        age: '64 years \u00b7 male',
        pmh: [
          'Several-year bilateral, symmetrical hand tremor \u2014 worse on action (cup/writing/eating), better at rest',
          'Improves with alcohol; family history (father); no slowness/stiffness/gait change',
          'Fears Parkinson\u2019s'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"My hands shake when I reach for my cup or write \u2014 my dad had it too. Is it Parkinson\u2019s?"',
        reason: 'Video consultation (examination arranged face to face) \u2014 a tremor, worried about Parkinson\u2019s.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Address the fear',
          d: 'Action tremor better at rest, symmetrical, familial, alcohol-responsive \u2014 points away from Parkinson\u2019s.'
        },
        {
          t: '2\u20135',
          h: 'Examine',
          d: 'Face to face: rest/posture/action tremor (finger-nose, cup, spiral); check bradykinesia, rigidity, gait, cerebellar signs.'
        },
        {
          t: '5\u20137',
          h: 'Screen reversible',
          d: 'TFTs (hyperthyroid), drug review (salbutamol/lithium/SSRIs), caffeine/alcohol.'
        },
        {
          t: '7\u20139',
          h: 'Name + manage',
          d: 'Essential tremor; reassure; propranolol (after asthma/heart checks) or primidone if functionally impairing/distressing.'
        },
        {
          t: '9\u201312',
          h: 'Safety-net + refer',
          d: 'Review/refer if asymmetry/slowness/stiffness/gait change/refractory; treatment trial + review.'
        }
      ],
      wordPics: {
        fail: 'Either alarms the patient toward Parkinson\u2019s or dismisses without examining; no reversible-cause screen; no treatment offered or addressing the fear.',
        pass: 'Distinguishes essential tremor from Parkinson\u2019s, screens reversible causes, and offers reassurance/propranolol.',
        exc: 'Makes the action-vs-rest distinction with a proper examination (no parkinsonian triad), screens reversible causes (TFTs/drugs), names essential tremor and addresses the Parkinson\u2019s fear directly, offers propranolol (after checking contraindications) or primidone if troublesome, and safety-nets for parkinsonian features.'
      },
      avoid: [
        {
          dont: '"A tremor at your age \u2014 it could well be early Parkinson\u2019s."',
          instead: '"Actually your tremor is worst when you use your hands and settles at rest, which points away from Parkinson\u2019s toward essential tremor."',
          why: 'Alarming the patient toward Parkinson\u2019s without the action-vs-rest distinction is inaccurate and frightening.'
        },
        {
          dont: '(No exam) reassuring without examining for bradykinesia/rigidity/gait.',
          instead: '"Let me check for slowness, stiffness and your walking \u2014 the things we\u2019d see in Parkinson\u2019s \u2014 to be sure."',
          why: 'The examination for the parkinsonian triad underpins the diagnosis and reassurance.'
        },
        {
          dont: '(No reversible screen) missing thyroid/drugs.',
          instead: '"I\u2019ll check your thyroid and review your medicines and caffeine, which can all cause or worsen tremor."',
          why: 'Reversible causes (hyperthyroidism, drugs) must be screened.'
        }
      ]
    },
    'erythema-nodosum': {
      ceg: ['New & undifferentiated presentations', 'Investigations & results'],
      stem: {
        name: 'Leah Marsden',
        age: '31 years \u00b7 female',
        pmh: [
          'Several days of tender, warm, red-purple nodules on both shins, fading like bruises',
          'Low-grade fever, malaise, arthralgia; recent sore throat ~2 weeks ago',
          'On combined oral contraceptive'
        ],
        meds: ['Combined oral contraceptive'],
        allergy: 'NKDA',
        recent: '"Painful red lumps on my shins \u2014 hot and sore, now bruised-looking. What are they?"',
        reason: 'Video consultation (skin examination arranged face to face) \u2014 tender red nodules on the shins.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Recognise EN',
          d: 'Tender bilateral shin nodules fading like bruises + systemic symptoms = erythema nodosum.'
        },
        {
          t: '2\u20134',
          h: 'Reactive \u2014 find the cause',
          d: 'Strep (recent sore throat), sarcoid (L\u00f6fgren\u2019s), IBD, TB, drugs (pill), pregnancy; about \u2153 no cause found.'
        },
        {
          t: '4\u20136',
          h: 'Focused history',
          d: 'Infection, GI/weight loss (IBD), respiratory/eye (sarcoid), TB risk/travel, drugs, pregnancy.'
        },
        {
          t: '6\u20138',
          h: 'Investigate incl. CXR',
          d: 'ASOT (swab only if still sore), FBC/U&E/LFT/CRP/ESR, CHEST X-RAY (sarcoid/TB), pregnancy test, directed tests.'
        },
        {
          t: '8\u201312',
          h: 'Manage + safety-net',
          d: 'Supportive (rest/elevation/compression; NSAID once pregnancy excluded, caution if IBD); treat cause; review CXR; earlier review for systemic red flags.'
        }
      ],
      wordPics: {
        fail: 'Treats the legs only (or as cellulitis/bruising) without recognising EN or searching for a cause; omits the chest X-ray.',
        pass: 'Recognises EN, screens the underlying causes with appropriate tests incl. CXR, and manages supportively.',
        exc: 'Recognises erythema nodosum, explains it is reactive and conducts the underlying-cause screen (history + ASO titre + bloods (FBC, U&E, LFT, CRP/ESR) + chest X-ray + pregnancy test), manages the EN supportively, and treats/refers for the cause with safety-netting.'
      },
      avoid: [
        {
          dont: '"They\u2019re just some inflamed lumps \u2014 here\u2019s some cream/antibiotics for the legs."',
          instead: '"These are erythema nodosum, often a reaction to something else \u2014 so my main job is to find the cause, including a chest X-ray."',
          why: 'Treating only the legs misses the point: EN is reactive and needs an underlying-cause screen.'
        },
        {
          dont: '(No CXR) screening without a chest X-ray.',
          instead: '"I\u2019ll do a chest X-ray, because sarcoidosis and TB \u2014 two causes \u2014 show up there."',
          why: 'The chest X-ray is high-yield (sarcoid/TB) and easily forgotten in EN.'
        },
        {
          dont: '(Ignoring drugs/pregnancy) not asking.',
          instead: '"Are you on the pill, and could you be pregnant? Both can trigger this."',
          why: 'Drugs (COCP) and pregnancy are recognised triggers that must be screened.'
        }
      ]
    },
    'faecal-incontinence': {
      ceg: ['Older adults', 'Health disadvantage & vulnerabilities'],
      stem: {
        name: 'Patricia Lowe',
        age: '62 years \u00b7 female',
        pmh: [
          'Months of faecal incontinence \u2014 urge (can\u2019t reach toilet) + passive soiling; hidden from shame',
          '3 vaginal deliveries, one forceps; social withdrawal, low mood',
          'Disclosed at the end of a consultation about something else'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"I\u2019ve been having accidents \u2014 I can\u2019t always make it to the toilet \u2014 too ashamed to tell anyone."',
        reason: 'Video consultation (chaperoned examination arranged face to face) \u2014 disclosed bowel incontinence.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Receive with compassion',
          d: 'Empathy, no embarrassment; thank/validate; normalise (common, often treatable); give it time.'
        },
        {
          t: '2\u20134',
          h: 'Characterise',
          d: 'Urge vs passive/soiling; stool consistency (overflow from constipation common/treatable); frequency/pads/impact.'
        },
        {
          t: '4\u20136',
          h: 'Screen causes',
          d: 'Obstetric sphincter injury (forceps), diarrhoea/constipation, IBS/IBD, diabetes/neuro, prolapse, drugs.'
        },
        {
          t: '6\u20138',
          h: 'Red flags',
          d: 'Change in bowel habit/bleeding/weight loss (colorectal: NICE NG12, FIT, DRE); saddle anaesthesia/back-leg (cauda equina).'
        },
        {
          t: '8\u201312',
          h: 'Examine + manage + refer',
          d: 'Face to face with chaperone offered: abdo/perianal/DRE; conservative (stool consistency, pelvic floor, bowel retraining, skin care); continence/colorectal referral; hope.'
        }
      ],
      wordPics: {
        fail: 'Rushes/shows discomfort at the disclosure or minimises it as "just ageing/childbirth"; no red-flag screen or DRE; no conservative plan or referral.',
        pass: 'Receives the disclosure compassionately, assesses and screens red flags, examines, and starts conservative management with referral.',
        exc: 'Handles the shame-laden disclosure with empathy and time, characterises urge vs passive and overflow, screens causes and red flags (colorectal per NICE NG12/cauda equina), examines incl. DRE with consent and a chaperone, starts conservative management, refers continence/colorectal, and gives realistic hope addressing the psychosocial impact.'
      },
      avoid: [
        {
          dont: '(Discomfort/rushing) "Right, well, we\u2019re nearly out of time \u2014 it\u2019s probably your age."',
          instead: '"Thank you for telling me \u2014 this is common and often treatable, and it deserves proper time; let\u2019s look into it together."',
          why: 'Showing discomfort, rushing or attributing it to ageing shames the patient and misses treatable causes.'
        },
        {
          dont: '(No red-flag screen) treating without asking about bleeding/bowel change/back symptoms.',
          instead: '"Any change in bowel habit, blood, weight loss, or numbness around the back passage or back pain?"',
          why: 'Missing colorectal (NICE NG12) or cauda-equina red flags can be dangerous.'
        },
        {
          dont: '(No exam/plan) reassuring without DRE or management.',
          instead: '"I\u2019d like to examine you in person, including an internal check with a chaperone if you wish, then start practical measures and refer you to the continence team."',
          why: 'DRE (tone/impaction/masses) and conservative management/referral are core to assessment.'
        }
      ]
    }
  });

})();
