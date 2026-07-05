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

  /* ============ 236. F2F — Cluster headache: the "suicide headache" ============ */
  const c236 = {
    id:'cluster-headache', title:'"Excruciating pain behind one eye, every night at the same time \u2014 it makes me pace and bang my head"', type:'video', duration:12,
    meta:{ age:38, sex:'M', setting:'Face-to-face \u2014 severe recurrent unilateral headache with eye symptoms.', system:'Neurology \u2014 cluster headache: recognition, acute O2/triptan & prevention' },
    brief:'Mr Marek Solomon, 38 (smoker), describes attacks of EXCRUCIATING strictly UNILATERAL pain centred behind/around ONE EYE, lasting ~45\u201390 minutes, occurring once or twice daily often at the SAME TIME (especially at night), with ipsilateral AUTONOMIC features \u2014 a red/watering eye, drooping/swollen lid, nasal congestion/runny nostril \u2014 and marked RESTLESNESS/agitation (he paces, cannot keep still, even bangs his head) during attacks; they cluster over weeks. The examinable task is to recognise CLUSTER HEADACHE (a trigeminal autonomic cephalalgia) \u2014 severe unilateral orbital/temporal pain, short-lived, with cranial autonomic features and agitation, occurring in clusters with circadian timing \u2014 and to DISTINGUISH it from migraine (longer, throbbing, patient lies still in a dark room, nausea/photophobia) and from sinister mimics. CRITICALLY, recognise the ACUTE treatment is DIFFERENT: high-flow 100% OXYGEN and a SUBCUTANEOUS/NASAL TRIPTAN (sumatriptan) abort attacks (simple oral analgesia/opioids do NOT work and opioids should be avoided); offer PREVENTION during a cluster (verapamil first-line, specialist-guided with ECG monitoring); advise on triggers (alcohol during a bout, smoking) and refer to NEUROLOGY (and screen red flags warranting imaging \u2014 first/worst, focal signs, age, abnormal exam). The skill is not mislabelling it migraine/sinusitis, and giving the correct O2/triptan acute plan. No NG12 cancer link.',
    script:{
      opening:'"Doctor, these headaches are destroying me. It\u2019s an unbelievable pain behind my right eye \u2014 like a hot poker \u2014 comes on most nights around 2am, lasts an hour or so, my eye goes red and streams, my nose runs on that side. I literally pace the room and bang my head on the wall, I can\u2019t sit still. Painkillers do nothing. They\u2019ve been coming for two weeks straight."',
      facts:[
        { topic:'Recognise cluster headache', text:'CORE \u2014 STRICTLY UNILATERAL, EXCRUCIATING orbital/temporal pain, SHORT-LIVED (typically 15\u2013180 min, often ~45\u201390), occurring once to several times daily often with CIRCADIAN/nocturnal timing, with ipsilateral CRANIAL AUTONOMIC features (red/watering eye, ptosis/lid swelling, nasal congestion/rhinorrhoea, miosis) and marked RESTLESSNESS/agitation, occurring in CLUSTERS over weeks, is CLUSTER HEADACHE \u2014 a trigeminal autonomic cephalalgia. More common in men and smokers. His picture is classic.' },
        { topic:'Distinguish from migraine \u2014 the key contrast', text:'KEY \u2014 do NOT mislabel as migraine or sinusitis. Migraine: usually LONGER (4\u201372 h), throbbing, with nausea/photophobia/phonophobia, and the patient prefers to LIE STILL in a dark quiet room; aura may precede. Cluster headache is SHORTER, strictly one-sided with autonomic features, and the patient is AGITATED/restless (cannot keep still). The autonomic features and restlessness with short severe attacks are the discriminators.' },
        { topic:'Acute treatment is DIFFERENT \u2014 O2 + triptan', text:'CRITICAL \u2014 the acute treatment differs from migraine and from ordinary headache: high-flow 100% OXYGEN (via non-rebreathe mask) and a fast-acting TRIPTAN \u2014 SUBCUTANEOUS or NASAL sumatriptan \u2014 abort attacks. ORAL simple analgesia and opioids do NOT work for cluster headache (the attacks are too short and severe), and OPIOIDS should be avoided. Arrange home oxygen and a suitable triptan formulation \u2014 this is the high-yield management point.' },
        { topic:'Prevention during a cluster', text:'Offer PREVENTIVE treatment to suppress attacks during a bout: VERAPAMIL is first-line preventive (usually specialist-initiated/guided, with ECG monitoring for heart block as doses rise); a short course of corticosteroids or greater occipital nerve block may be used to break a cluster (specialist). Start prevention early in a bout and review.' },
        { topic:'Triggers, red flags & referral', text:'Advise on triggers: ALCOHOL commonly triggers attacks DURING a cluster bout (avoid while in a bout), and smoking is associated. Screen HEADACHE RED FLAGS warranting imaging/urgent assessment (thunderclap/first-and-worst, focal neurology, new in older age, abnormal exam, features of raised ICP/GCA) \u2014 his stereotyped recurrent attacks with normal exam fit cluster, but the screen must be done. Refer to NEUROLOGY for confirmation and management.' },
        { topic:'The hidden agenda + impact', text:'HIDDEN AGENDA \u2014 he is in extreme distress (cluster headache is nicknamed the "suicide headache" for its severity and associated suicidality), exhausted and frightened, and painkillers have failed him. The skill is confident recognition (not migraine/sinusitis), the correct O2/triptan acute plan, prevention, screening mood/suicidality given the severity, and neurology referral \u2014 not another script for co-codamol. No NG12 cancer pathway applies.' },
      ],
      ice:{
        ideas:'Severe headaches/possibly migraine or sinus; painkillers don\u2019t work; wants the pain stopped and explained.',
        concerns:'The extreme severity and distress; exhaustion; fear of a sinister cause; failure of ordinary painkillers.',
        expectations:'Effective relief. What he needs: recognition of cluster headache, the correct acute treatment (O2 + sc/nasal triptan, not opioids), prevention (verapamil), red-flag screen, mood/suicidality screen, and neurology referral.'
      },
      cues:['Strictly unilateral excruciating orbital pain, short (45\u201390 min), nocturnal/circadian, with red/watering eye + rhinorrhoea + restlessness, in clusters \u2014 cluster headache.','NOT migraine: migraine is longer, throbbing, patient lies still; cluster is short, one-sided, autonomic, agitated. Don\u2019t mislabel/sinusitis.','Acute Rx = high-flow O2 + sc/nasal triptan (opioids/oral analgesia don\u2019t work); verapamil for prevention; screen suicidality ("suicide headache"); refer neurology.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises CLUSTER HEADACHE \u2014 strictly unilateral, excruciating orbital/temporal pain, short-lived (15\u2013180 min), circadian/nocturnal, with ipsilateral cranial autonomic features and RESTLESSNESS/agitation, in clusters' },
      { dom:'tasks', text:'DISTINGUISHES it from migraine (longer, throbbing, lies still in a dark room, nausea/photophobia) and from sinusitis \u2014 using the autonomic features and restlessness with short severe attacks as discriminators' },
      { dom:'tasks', text:'Knows the ACUTE treatment differs \u2014 high-flow 100% OXYGEN and a fast-acting (SUBCUTANEOUS/NASAL) TRIPTAN abort attacks \u2014 and that oral simple analgesia/opioids do NOT work and opioids should be avoided' },
      { dom:'tasks', text:'Offers PREVENTIVE treatment during a bout (VERAPAMIL first-line, specialist-guided with ECG monitoring; steroid course/GON block to break a cluster) and starts prevention early' },
      { dom:'tasks', text:'Advises on triggers (alcohol during a bout, smoking), SCREENS headache red flags warranting imaging, and refers to NEUROLOGY for confirmation/management' },
      { dom:'rto',   text:'Responds to extreme distress with empathy, SCREENS mood/suicidality given the severity ("suicide headache"), and conveys that effective treatment exists' },
      { dom:'rto',   text:'Explains why this is not migraine/sinusitis and why the treatment is different, checking understanding' },
      { dom:'gs',    text:'Safety-nets and follows up: arranges home oxygen + suitable triptan, neurology referral, prevention with monitoring, red-flag and mood/crisis safety-netting, and review \u2014 correct O2/triptan plan, not another opioid script' },
    ],
    worked:[
      { lbl:'Recognise + reframe', txt:'"What you\u2019re describing isn\u2019t an ordinary headache or migraine \u2014 the strictly one-sided pain behind the eye, the red watering eye and runny nostril, the short attacks at the same time each night, and pacing because you can\u2019t keep still \u2014 that\u2019s cluster headache. It\u2019s one of the most severe pains there is, and crucially it needs specific treatment."' },
      { lbl:'Why painkillers fail', txt:'"That\u2019s why your painkillers do nothing \u2014 the attacks are too short and intense for tablets to work, and opioids actually aren\u2019t the answer. We use two things that genuinely abort an attack."' },
      { lbl:'The acute plan', txt:'"First, high-flow oxygen through a mask at the start of an attack \u2014 I\u2019ll arrange that for home. Second, a fast triptan, given as an injection under the skin or a nasal spray, not a tablet. Together these can switch attacks off."' },
      { lbl:'Prevention', txt:'"To stop them coming during this run, we use a preventer \u2014 usually verapamil \u2014 which the specialist guides with heart tracings as we increase it. Starting it early in a bout helps. Avoid alcohol while you\u2019re in a cluster, as it triggers attacks, and smoking doesn\u2019t help."' },
      { lbl:'Screen mood', txt:'"This level of pain is genuinely tormenting \u2014 it\u2019s sometimes called the \u2018suicide headache\u2019. Can I ask honestly, has it ever made you feel life isn\u2019t worth living? \u2026 Thank you. I want to support you, not just the headaches."' },
      { lbl:'Refer + safety-net', txt:'"I\u2019ll refer you to neurology to confirm and manage this. If you ever get a sudden \u2018worst-ever\u2019 thunderclap headache, new weakness, or it changes character, that\u2019s different \u2014 seek urgent help. And if your mood drops or you feel unsafe, contact us straight away."' },
    ],
    learning:'CLUSTER HEADACHE \u2014 a trigeminal autonomic cephalalgia \u2014 presents with STRICTLY UNILATERAL, EXCRUCIATING orbital/temporal pain, SHORT-LIVED (typically 15\u2013180 min, often ~45\u201390), occurring once to several times daily with CIRCADIAN/nocturnal timing, accompanied by ipsilateral CRANIAL AUTONOMIC features (red/watering eye, ptosis/lid swelling, nasal congestion/rhinorrhoea, miosis) and marked RESTLESSNESS/agitation, occurring in CLUSTERS over weeks; it is commoner in men and smokers. The key contrast is with MIGRAINE, which is usually LONGER (4\u201372 h), throbbing, with nausea/photophobia, and where the patient prefers to LIE STILL in a dark room \u2014 whereas cluster attacks are short, strictly one-sided with autonomic features, and the patient is AGITATED \u2014 so do not mislabel it as migraine or sinusitis. Critically, the ACUTE treatment is DIFFERENT and high-yield: high-flow 100% OXYGEN (non-rebreathe mask) and a fast-acting SUBCUTANEOUS or NASAL TRIPTAN (sumatriptan) abort attacks, while oral simple analgesia and opioids do NOT work and opioids should be avoided. Offer PREVENTIVE treatment during a bout \u2014 VERAPAMIL first-line (specialist-guided with ECG monitoring for heart block), with a steroid course or greater occipital nerve block to break a cluster \u2014 started early. Advise on triggers (alcohol during a bout, smoking), screen headache red flags warranting imaging (thunderclap/first-and-worst, focal neurology, new in older age, abnormal exam, raised-ICP/GCA features), and refer to neurology. Given the extreme severity (the "suicide headache"), screen mood and suicidality and support the patient \u2014 not another opioid prescription. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Cluster headache (trigeminal autonomic cephalalgia) \u00b7 high-flow O2 + sc/nasal triptan \u00b7 verapamil prevention \u00b7 migraine distinction & red flags',
      points:[
        { h:'Recognise cluster headache', t:'Strictly unilateral, excruciating orbital/temporal pain, short (15\u2013180 min), circadian/nocturnal, with ipsilateral autonomic features (red/watering eye, ptosis, rhinorrhoea) and restlessness, in clusters. Commoner in men/smokers.' },
        { h:'Vs migraine', t:'Migraine: longer, throbbing, nausea/photophobia, lies still in the dark. Cluster: short, one-sided, autonomic, agitated/restless. Don\u2019t mislabel as migraine/sinusitis.' },
        { h:'Acute treatment (different!)', t:'High-flow 100% oxygen (non-rebreathe mask) + fast-acting subcutaneous/nasal triptan abort attacks. Oral analgesia/opioids do NOT work; avoid opioids.' },
        { h:'Prevention', t:'Verapamil first-line preventive during a bout (specialist-guided, ECG monitoring for heart block); steroid course/greater occipital nerve block to break a cluster. Start early.' },
        { h:'Triggers & red flags', t:'Alcohol triggers attacks during a bout (avoid while in a cluster); smoking associated. Screen red flags (thunderclap, focal neuro, new in older age, abnormal exam, raised ICP/GCA) \u2192 imaging.' },
        { h:'Severity & mood', t:'Cluster headache is extremely severe ("suicide headache") with suicidality risk \u2014 screen mood and support. Refer to neurology.' },
        { h:'Never do', t:'Never mislabel as migraine/sinusitis; never rely on oral analgesia/opioids; never omit O2/sc-or-nasal triptan; never skip the red-flag and mood/suicidality screen.' },
        { h:'Safety-net & follow-up', t:'Arrange home oxygen + suitable triptan, neurology referral, prevention with monitoring; red-flag and crisis safety-netting; review.' }
      ]
    }
  };

  /* ============ 237. F2F — Essential tremor vs Parkinson's: the shaking hands ============ */
  const c237 = {
    id:'essential-tremor', title:'"My hands shake when I reach for my cup or write \u2014 my dad had it too. Is it Parkinson\u2019s?"', type:'video', duration:12,
    meta:{ age:64, sex:'M', setting:'Face-to-face \u2014 a tremor, worried about Parkinson\u2019s.', system:'Neurology \u2014 essential tremor vs Parkinson\u2019s: action vs rest tremor & management' },
    brief:'Mr Hugh Brankin, 64, has a several-year history of a bilateral, fairly symmetrical hand tremor that is WORSE ON ACTION \u2014 reaching for a cup, holding a newspaper, writing (spidery), bringing a spoon to his mouth \u2014 and BETTER at rest; it improves with a little ALCOHOL, there is a FAMILY HISTORY (his father had it), and he has no slowness, stiffness or gait change. He is worried it is PARKINSON\u2019S. The examinable task is to distinguish ESSENTIAL TREMOR (a postural/action/kinetic tremor, often bilateral and symmetrical, worse with action and on maintaining posture, frequently familial, improved by alcohol, sometimes head/voice tremor, NO bradykinesia/rigidity) from PARKINSON\u2019S DISEASE (a RESTING "pill-rolling" tremor, typically ASYMMETRIC, better with action, with BRADYKINESIA, RIGIDITY, and gait/postural changes \u2014 the parkinsonian triad), and from other causes (physiological/enhanced \u2014 anxiety, caffeine, hyperthyroidism, drugs e.g. salbutamol/lithium/SSRIs; cerebellar intention tremor; dystonic). Take the history, EXAMINE for the discriminating features, screen reversible causes (TFTs, drug review, alcohol), and MANAGE essential tremor (reassurance; if troublesome/functionally impairing, PROPRANOLOL or primidone first-line; address impact/embarrassment), while referring to neurology if diagnostic uncertainty or parkinsonian features. The skill is the action-vs-rest distinction, reassurance where appropriate, and correct management \u2014 directly addressing the Parkinson\u2019s fear. No NG12 cancer link.',
    script:{
      opening:'"My hands have got shaky over the last few years, doctor. It\u2019s worst when I reach for my tea or try to write \u2014 my writing\u2019s gone spidery \u2014 but when they\u2019re resting in my lap they\u2019re fine. Funny thing, a glass of wine settles it. My dad had the same. I\u2019m really worried it\u2019s the start of Parkinson\u2019s \u2014 is it?"',
      facts:[
        { topic:'Recognise essential tremor', text:'CORE \u2014 a tremor that is WORSE ON ACTION/posture (reaching, holding, writing, eating) and BETTER at rest, typically BILATERAL and fairly SYMMETRICAL, often with a FAMILY HISTORY, frequently IMPROVED by a small amount of alcohol, and sometimes involving the head ("yes-yes"/"no-no") or voice, with NO bradykinesia, rigidity or gait disturbance, is ESSENTIAL TREMOR. His action-predominant, symmetrical, alcohol-responsive, familial tremor fits.' },
        { topic:'Distinguish from Parkinson\u2019s \u2014 the key contrast', text:'KEY \u2014 PARKINSON\u2019S tremor is a RESTING tremor (often "pill-rolling"), typically ASYMMETRIC (starts one side), BETTER with action/movement, and crucially accompanied by the other features of parkinsonism \u2014 BRADYKINESIA (slowness, reduced arm swing, small handwriting that gets smaller), RIGIDITY (cogwheel), and gait/postural changes (shuffling, stooped, festination). Essential tremor is action/posture tremor WITHOUT those features. The rest-vs-action distinction and the presence/absence of bradykinesia/rigidity are the discriminators.' },
        { topic:'Screen other/reversible causes', text:'Consider other tremors: enhanced PHYSIOLOGICAL tremor (anxiety, caffeine, fatigue), HYPERTHYROIDISM (fine tremor, weight loss, etc. \u2014 check TFTs), DRUGS (salbutamol/beta-agonists, lithium, SSRIs, valproate \u2014 review medications), excess alcohol or withdrawal, cerebellar INTENTION tremor (worse approaching a target, with other cerebellar signs), and dystonic tremor. Screen and exclude reversible contributors.' },
        { topic:'Examine for the discriminating features', text:'EXAMINE: observe the tremor at REST (in the lap), on POSTURE (arms outstretched), and on ACTION (finger-nose, holding a cup, writing/spiral); assess for bradykinesia (finger-tapping speed/amplitude, arm swing), rigidity (cogwheeling), gait, and cerebellar signs. Essential tremor: action/postural, no bradykinesia/rigidity. This examination underpins the diagnosis and the reassurance.' },
        { topic:'Manage essential tremor', text:'Manage: if the tremor is mild and not troubling, REASSURE (and address the Parkinson\u2019s fear directly). If it is FUNCTIONALLY IMPAIRING or socially distressing, offer first-line drug treatment \u2014 PROPRANOLOL (or primidone) \u2014 titrated, with the usual cautions; reduce caffeine; review aggravating drugs; treat any thyroid abnormality. Refer to NEUROLOGY if there is diagnostic uncertainty, atypical/asymmetric features, suspected parkinsonism or cerebellar signs, or refractory/severe tremor (where further options exist).' },
        { topic:'The hidden agenda + impact', text:'HIDDEN AGENDA \u2014 the dominant concern is FEAR OF PARKINSON\u2019S, plus possible embarrassment and functional impact (spilling drinks, writing, social situations). The skill is to make the action-vs-rest distinction, reassure appropriately that this looks like essential tremor (not Parkinson\u2019s) while screening properly, address the impact and offer treatment, and refer if uncertain \u2014 not to leave the Parkinson\u2019s fear unaddressed or to over-investigate. No NG12 cancer pathway applies.' },
      ],
      ice:{
        ideas:'It might be the start of Parkinson\u2019s (his main fear), like or unlike his father\u2019s tremor.',
        concerns:'Fear of Parkinson\u2019s; embarrassment/functional impact (spilling, writing); what it means for the future.',
        expectations:'To know if it\u2019s Parkinson\u2019s and what can be done. What he needs: the action-vs-rest distinction, reassurance/diagnosis of essential tremor (with reversible-cause screen), management if troublesome, and referral if uncertain.'
      },
      cues:['Action/postural bilateral symmetrical tremor, better at rest, alcohol-responsive, familial, no bradykinesia/rigidity \u2014 essential tremor.','Parkinson\u2019s is a RESTING, asymmetric, pill-rolling tremor WITH bradykinesia/rigidity/gait change \u2014 the discriminators; examine for them.','Screen reversible causes (TFTs, drugs, caffeine/alcohol); manage with propranolol/primidone if troublesome; address the Parkinson\u2019s fear directly; refer if uncertain.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises ESSENTIAL TREMOR \u2014 action/postural, bilateral/symmetrical, worse with action and better at rest, often familial, alcohol-responsive, no bradykinesia/rigidity/gait change' },
      { dom:'tasks', text:'DISTINGUISHES it from PARKINSON\u2019S (resting, asymmetric, pill-rolling tremor, better with action, WITH bradykinesia, rigidity and gait/postural changes) \u2014 using rest-vs-action and the presence/absence of the parkinsonian triad' },
      { dom:'tasks', text:'Screens OTHER/REVERSIBLE causes \u2014 enhanced physiological (anxiety/caffeine), hyperthyroidism (TFTs), drugs (salbutamol/lithium/SSRIs \u2014 review), alcohol, cerebellar/dystonic tremor' },
      { dom:'tasks', text:'EXAMINES for the discriminating features \u2014 tremor at rest/posture/action (finger-nose, cup, writing/spiral), bradykinesia (finger-tapping/arm swing), rigidity (cogwheel), gait and cerebellar signs' },
      { dom:'tasks', text:'MANAGES essential tremor \u2014 reassurance if mild; PROPRANOLOL (or primidone) first-line if functionally impairing/distressing; reduce caffeine, review drugs, treat thyroid \u2014 and refers to neurology if uncertain/atypical/parkinsonian/cerebellar/refractory' },
      { dom:'rto',   text:'Directly ADDRESSES the Parkinson\u2019s FEAR \u2014 explaining why this looks like essential tremor rather than Parkinson\u2019s \u2014 and explores embarrassment/functional impact empathetically' },
      { dom:'rto',   text:'Explains the diagnosis and reasoning in accessible terms and checks understanding, neither over-investigating nor dismissing' },
      { dom:'gs',    text:'Safety-nets and follows up: what would prompt review/referral (asymmetry, slowness/stiffness, gait change, worsening function), treatment trial and review, reversible-cause results, and reassurance \u2014 action-vs-rest distinction with the Parkinson\u2019s fear addressed' },
    ],
    worked:[
      { lbl:'Address the fear head-on', txt:'"Let me reassure you on the big worry first: what you\u2019re describing actually points AWAY from Parkinson\u2019s. Your shake is worst when you USE your hands and settles at rest \u2014 Parkinson\u2019s tremor is the opposite, worse at rest \u2014 and it\u2019s both sides and runs in your family. That all fits a different, much more benign condition called essential tremor."' },
      { lbl:'Examine to confirm', txt:'"Let me check properly \u2014 hands resting in your lap, then arms out, then reaching to my finger and writing a spiral. I\u2019m also checking for slowness, stiffness and your walking, because those are the things we\u2019d see in Parkinson\u2019s. \u2026 None of those are there, which is reassuring."' },
      { lbl:'Screen reversible causes', txt:'"I\u2019ll do a thyroid blood test, because an overactive thyroid can cause a tremor, and review your medicines and caffeine, as those can make any tremor worse."' },
      { lbl:'Name + reassure', txt:'"So this is essential tremor \u2014 common, often inherited, and not Parkinson\u2019s and not dangerous. The classic clue you gave me is that a little alcohol settles it; that\u2019s very typical."' },
      { lbl:'Offer management', txt:'"If it\u2019s mainly a nuisance, we can leave it. But if it\u2019s embarrassing or getting in the way of writing and drinking, there\u2019s a tablet \u2014 propranolol \u2014 that often helps. How much is it bothering you day to day?"' },
      { lbl:'Safety-net + refer if needed', txt:'"Come back if it becomes one-sided, you notice slowness or stiffness, your walking changes, or it\u2019s affecting you more \u2014 then I\u2019d involve a neurologist. Otherwise we can trial treatment and review. Does that ease your mind a bit?"' },
    ],
    learning:'Distinguish ESSENTIAL TREMOR from PARKINSON\u2019S \u2014 the core skill in a "shaking hands" presentation. Essential tremor is a postural/action/kinetic tremor that is WORSE ON ACTION and posture (reaching, holding, writing \u2014 spidery, eating) and BETTER at rest, typically BILATERAL and fairly SYMMETRICAL, often FAMILIAL, frequently IMPROVED by a small amount of alcohol, sometimes with head ("yes-yes"/"no-no") or voice tremor, and crucially WITHOUT bradykinesia, rigidity or gait disturbance. Parkinson\u2019s tremor, by contrast, is a RESTING "pill-rolling" tremor, typically ASYMMETRIC (one side first), BETTER with action, and accompanied by the parkinsonian features \u2014 BRADYKINESIA (slowness, reduced arm swing, micrographia that decrements), RIGIDITY (cogwheel) and gait/postural changes (shuffling, stooped, festination) \u2014 so the rest-vs-action distinction and the presence/absence of the parkinsonian triad are the discriminators. Consider other tremors: enhanced PHYSIOLOGICAL (anxiety, caffeine, fatigue), HYPERTHYROIDISM (check TFTs), DRUGS (salbutamol, lithium, SSRIs, valproate \u2014 review), excess alcohol/withdrawal, cerebellar INTENTION tremor (worse approaching a target, with cerebellar signs) and dystonic tremor. Examine the tremor at rest, on posture (arms outstretched) and on action (finger-nose, cup, writing/spiral), and assess for bradykinesia, rigidity, gait and cerebellar signs, which underpins the diagnosis and reassurance. Manage essential tremor by reassuring when mild (directly addressing the Parkinson\u2019s fear), and offering first-line PROPRANOLOL (or primidone) when functionally impairing or socially distressing, while reducing caffeine, reviewing aggravating drugs and treating thyroid abnormality; refer to neurology for diagnostic uncertainty, atypical/asymmetric features, suspected parkinsonism or cerebellar signs, or refractory tremor. The hidden agenda is fear of Parkinson\u2019s plus embarrassment/functional impact; make the action-vs-rest distinction, reassure appropriately while screening properly, address the impact and offer treatment, and refer if uncertain. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Essential tremor vs Parkinson\u2019s \u00b7 action vs rest tremor \u00b7 reversible-cause screen (TFTs/drugs) \u00b7 propranolol/primidone \u00b7 neurology referral',
      points:[
        { h:'Essential tremor', t:'Action/postural, bilateral/symmetrical, worse with action and better at rest, often familial, alcohol-responsive, \u00b1 head/voice tremor, NO bradykinesia/rigidity/gait change.' },
        { h:'Parkinson\u2019s tremor', t:'Resting, pill-rolling, asymmetric, better with action, WITH bradykinesia, rigidity and gait/postural changes (the parkinsonian triad). Rest-vs-action + triad are the discriminators.' },
        { h:'Other/reversible causes', t:'Enhanced physiological (anxiety/caffeine/fatigue), hyperthyroidism (TFTs), drugs (salbutamol/lithium/SSRIs/valproate \u2014 review), alcohol, cerebellar intention tremor, dystonic tremor.' },
        { h:'Examine', t:'Tremor at rest/posture/action (finger-nose, cup, spiral/writing); assess bradykinesia (finger-tap/arm swing), rigidity (cogwheel), gait, cerebellar signs.' },
        { h:'Manage essential tremor', t:'Reassure if mild; propranolol (or primidone) first-line if functionally impairing/distressing; reduce caffeine, review drugs, treat thyroid.' },
        { h:'Refer', t:'Neurology if diagnostic uncertainty, atypical/asymmetric features, suspected parkinsonism, cerebellar signs, or refractory/severe tremor.' },
        { h:'Address the fear', t:'Directly address the Parkinson\u2019s fear, explaining why action-predominant, symmetrical, familial, alcohol-responsive tremor without the triad points to essential tremor. Explore embarrassment/function.' },
        { h:'Safety-net & follow-up', t:'Review/refer if asymmetry, slowness/stiffness, gait change or worsening function; treatment trial and review; reversible-cause results; reassurance.' }
      ]
    }
  };

  /* ============ 238. F2F — Erythema nodosum: tender shin nodules & the underlying-cause hunt ============ */
  const c238 = {
    id:'erythema-nodosum', title:'"I\u2019ve come up with these painful red lumps on my shins \u2014 they\u2019re hot and sore, what are they?"', type:'video', duration:12,
    meta:{ age:31, sex:'F', setting:'Face-to-face \u2014 tender red nodules on the shins.', system:'Dermatology \u2014 erythema nodosum: recognition & the underlying-cause screen' },
    brief:'Miss Robyn Easton, 31, presents with several days of crops of TENDER, warm, RED-PURPLE NODULES on the SHINS (anterior lower legs), bilaterally, that are bruise-like as they fade, with associated low-grade fever, malaise and joint aches; she is otherwise reasonably well. The examinable task is to recognise ERYTHEMA NODOSUM (a panniculitis: tender erythematous nodules, classically on the shins, that do NOT ulcerate and resolve like bruises over weeks) and \u2014 critically \u2014 that it is a REACTIVE condition that should prompt a search for an UNDERLYING CAUSE: streptococcal infection (recent sore throat), SARCOIDOSIS, INFLAMMATORY BOWEL DISEASE, TUBERCULOSIS, DRUGS (e.g. combined oral contraceptive, sulfonamides), PREGNANCY, and other infections \u2014 with a substantial proportion idiopathic. Take a focused history (recent infection/sore throat, GI symptoms, respiratory symptoms/cough, weight loss, TB risk/travel, drugs, pregnancy), examine, and arrange a sensible work-up (throat swab/ASOT, FBC/CRP/ESR, chest X-ray \u2014 important for sarcoid/TB, and tests directed by history; pregnancy test). MANAGE the EN itself supportively (it is usually self-limiting \u2014 rest, leg elevation, NSAIDs/analgesia, compression) and TREAT/refer for the underlying cause as found. The skill is recognising EN, NOT just treating the legs, and conducting the underlying-cause screen with a chest X-ray. No NG12 cancer link (though weight loss/systemic features would broaden the work-up).',
    script:{
      opening:'"I\u2019ve come up with these really sore red lumps on the fronts of both my shins over the last few days \u2014 they\u2019re hot and tender to touch, and now they look a bit bruised. I\u2019ve felt a bit fluey and my joints ache. I had a sore throat a couple of weeks ago. What on earth are they?"',
      facts:[
        { topic:'Recognise erythema nodosum', text:'CORE \u2014 crops of TENDER, warm, erythematous-to-violaceous NODULES on the SHINS (anterior lower legs), usually bilateral, which do NOT ulcerate and resolve like BRUISES over a few weeks, often with low-grade fever, malaise and arthralgia, is ERYTHEMA NODOSUM \u2014 an inflammation of subcutaneous fat (panniculitis). It is a clinical diagnosis. Her bilateral tender bruise-like shin nodules with systemic symptoms fit.' },
        { topic:'It is REACTIVE \u2014 search for a cause', text:'CRITICAL \u2014 erythema nodosum is a REACTIVE condition, so the key task is to look for an UNDERLYING CAUSE rather than just treat the legs. Common/important causes: streptococcal infection (recent SORE THROAT \u2014 her clue), SARCOIDOSIS, INFLAMMATORY BOWEL DISEASE (Crohn\u2019s/UC), TUBERCULOSIS, DRUGS (combined oral contraceptive, sulfonamides, penicillins), PREGNANCY, and other infections (e.g. atypical, fungal); a substantial proportion are IDIOPATHIC. Screen these systematically.' },
        { topic:'Focused history for the cause', text:'Take a focused history pointing at the causes: recent INFECTION/sore throat; GI symptoms (diarrhoea, blood, weight loss \u2014 IBD); RESPIRATORY symptoms, cough, breathlessness, eye symptoms (sarcoid); TB risk/travel/contacts; current DRUGS (especially the pill); and PREGNANCY. Systemic features (significant weight loss, marked respiratory symptoms) broaden the differential and the work-up.' },
        { topic:'Sensible investigations \u2014 incl. CXR', text:'Arrange a sensible work-up guided by history: throat swab/ASO titre (strep), FBC, CRP/ESR, and importantly a CHEST X-RAY (for SARCOIDOSIS \u2014 bilateral hilar lymphadenopathy \u2014 and TB); add a pregnancy test, and further tests directed by the history (e.g. calcium/ACE if sarcoid suspected, faecal calprotectin/GI work-up if bowel symptoms, TB testing if at risk). The CHEST X-RAY is a high-yield, easily-forgotten investigation in EN.' },
        { topic:'Manage EN supportively + treat the cause', text:'Manage the erythema nodosum itself SUPPORTIVELY \u2014 it is usually SELF-LIMITING over a few weeks: rest, LEG ELEVATION, NSAIDs/analgesia, and compression/support; reassure about the bruise-like resolution. TREAT or REFER for the underlying cause as found (e.g. treat strep, refer for sarcoid/IBD/TB work-up, stop a culprit drug). The legs get better on their own; the priority is identifying the cause.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 she wants to know "what are they" and is a bit alarmed; she may not realise the lumps are a clue to something internal. The skill is to recognise EN, reassure about the skin lesions (self-limiting, not dangerous in themselves), and \u2014 the examinable point \u2014 conduct the UNDERLYING-CAUSE screen including a chest X-ray, rather than only treating the legs. No NG12 cancer pathway applies, though systemic red flags would broaden the work-up.' },
      ],
      ice:{
        ideas:'She doesn\u2019t know what the lumps are; possibly thinks it\u2019s an injury/bites; wants an explanation and treatment.',
        concerns:'The pain and the alarming bruise-like appearance; feeling unwell; what is causing them.',
        expectations:'A diagnosis and treatment for the lumps. What she needs: recognition of erythema nodosum, reassurance the skin lesions are self-limiting, AND the underlying-cause screen (history + bloods + chest X-ray) with treatment of any cause.'
      },
      cues:['Bilateral tender warm red-purple nodules on the shins that fade like bruises + low-grade fever/arthralgia \u2014 erythema nodosum.','EN is REACTIVE \u2014 search for a cause: strep (recent sore throat), sarcoid, IBD, TB, drugs (pill/sulfonamides), pregnancy; \u2153 idiopathic.','Work-up: throat swab/ASOT, FBC/CRP/ESR, CHEST X-RAY (sarcoid/TB), pregnancy test, directed tests; manage EN supportively, treat the cause.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises ERYTHEMA NODOSUM \u2014 tender, warm, red-violet nodules on the shins, usually bilateral, non-ulcerating, resolving like bruises, often with fever/malaise/arthralgia \u2014 as a clinical diagnosis (panniculitis)' },
      { dom:'tasks', text:'Recognises EN is REACTIVE and prioritises the search for an UNDERLYING CAUSE \u2014 streptococcal infection, sarcoidosis, IBD, TB, drugs (COCP/sulfonamides), pregnancy, other infections; a proportion idiopathic \u2014 rather than only treating the legs' },
      { dom:'tasks', text:'Takes a focused history for the causes (recent sore throat/infection, GI symptoms/weight loss, respiratory/eye symptoms, TB risk/travel, drugs incl. the pill, pregnancy)' },
      { dom:'tasks', text:'Arranges a sensible work-up \u2014 throat swab/ASOT, FBC, CRP/ESR, and importantly a CHEST X-RAY (sarcoid/TB), pregnancy test, with directed tests (calcium/ACE, calprotectin/GI, TB testing) per history' },
      { dom:'tasks', text:'Manages the EN SUPPORTIVELY (self-limiting \u2014 rest, leg elevation, NSAIDs/analgesia, compression) and TREATS/REFERS for the underlying cause as found' },
      { dom:'rto',   text:'Reassures about the skin lesions (self-limiting, not dangerous in themselves) while explaining that they are a clue to look for an internal cause, and addresses her alarm' },
      { dom:'rto',   text:'Explains the diagnosis and the reason for the work-up (especially the chest X-ray) in accessible terms and checks understanding' },
      { dom:'gs',    text:'Safety-nets and follows up: results review (especially CXR), what systemic symptoms warrant earlier review (weight loss, persistent cough, GI bleeding), supportive measures and expected resolution, and treatment/referral for the cause \u2014 recognising EN + the underlying-cause screen, not just treating the legs' },
    ],
    worked:[
      { lbl:'Name it', txt:'"These are a recognised condition called erythema nodosum \u2014 tender, bruise-like lumps from inflammation in the fat under the skin, classically on the shins, and they go through that bruised look as they settle. The good news is the lumps themselves are not dangerous and usually clear over a few weeks."' },
      { lbl:'Explain the important bit', txt:'"Here\u2019s the key thing, though: these lumps are often a REACTION to something else going on in the body, so my main job is to find out why. Your recent sore throat is actually a common trigger."' },
      { lbl:'Screen the causes', txt:'"Let me ask a few things \u2014 any tummy upset, diarrhoea or blood, any cough or breathlessness, weight loss, recent travel or TB contact? And are you on the contraceptive pill, or could you be pregnant? These point to the different causes."' },
      { lbl:'Investigate (incl. CXR)', txt:'"I\u2019ll do a throat swab and some bloods, and importantly a chest X-ray \u2014 because two of the causes, sarcoidosis and TB, show up there. I\u2019ll add a pregnancy test and anything else your answers point to."' },
      { lbl:'Treat the legs', txt:'"For the lumps themselves: rest, put your legs up, anti-inflammatory painkillers and support stockings help, and they\u2019ll fade on their own. We don\u2019t need anything dramatic for the skin."' },
      { lbl:'Safety-net + follow-up', txt:'"Once the results are back we\u2019ll know if there\u2019s a cause to treat \u2014 like the throat infection \u2014 or to look into further. Come back sooner if you lose weight, develop a persistent cough, or get tummy symptoms. Let\u2019s review with the X-ray and bloods."' },
    ],
    learning:'ERYTHEMA NODOSUM is a panniculitis presenting as crops of TENDER, warm, erythematous-to-violaceous NODULES on the SHINS (anterior lower legs), usually bilateral, which do NOT ulcerate and resolve like BRUISES over a few weeks, often with low-grade fever, malaise and arthralgia \u2014 a clinical diagnosis. The critical point is that EN is a REACTIVE condition, so the key task is to search for an UNDERLYING CAUSE rather than only treat the legs: streptococcal infection (a recent SORE THROAT is a common trigger), SARCOIDOSIS, INFLAMMATORY BOWEL DISEASE, TUBERCULOSIS, DRUGS (combined oral contraceptive, sulfonamides, penicillins), PREGNANCY, and other infections, with a substantial proportion idiopathic. Take a focused history aimed at these causes (recent infection/sore throat; GI symptoms, diarrhoea, blood, weight loss \u2014 IBD; respiratory/eye symptoms \u2014 sarcoid; TB risk/travel/contacts; current drugs, especially the pill; pregnancy), and arrange a sensible work-up: throat swab/ASO titre, FBC, CRP/ESR, and importantly a CHEST X-RAY (for sarcoidosis \u2014 bilateral hilar lymphadenopathy \u2014 and TB), a pregnancy test, and directed tests per history (calcium/ACE if sarcoid suspected, faecal calprotectin/GI work-up for bowel symptoms, TB testing if at risk) \u2014 the chest X-ray being a high-yield, easily-forgotten investigation. Manage the EN itself supportively, as it is usually self-limiting (rest, leg elevation, NSAIDs/analgesia, compression), and treat or refer for the underlying cause as found. The hidden agenda is wanting to know "what are they"; reassure about the skin lesions while conducting the underlying-cause screen including a chest X-ray, not only treating the legs. No NICE NG12 cancer pathway applies, though systemic red flags (significant weight loss, persistent respiratory or GI symptoms) would broaden the work-up.',
    knowledge:{
      guideline:'Erythema nodosum (panniculitis) \u00b7 reactive \u2014 underlying-cause screen (strep/sarcoid/IBD/TB/drugs/pregnancy) \u00b7 chest X-ray \u00b7 supportive management',
      points:[
        { h:'Recognise EN', t:'Tender, warm, red-violet nodules on the shins, usually bilateral, non-ulcerating, resolving like bruises over weeks, often with fever/malaise/arthralgia. Clinical diagnosis (panniculitis).' },
        { h:'Reactive \u2014 find the cause', t:'EN is reactive: search for strep infection (recent sore throat), sarcoidosis, IBD, TB, drugs (COCP/sulfonamides/penicillins), pregnancy, other infections; \u2153 idiopathic. Don\u2019t just treat the legs.' },
        { h:'Focused history', t:'Recent infection/sore throat; GI symptoms/weight loss (IBD); respiratory/eye symptoms (sarcoid); TB risk/travel; drugs (pill); pregnancy. Systemic features broaden the work-up.' },
        { h:'Investigations incl. CXR', t:'Throat swab/ASOT, FBC, CRP/ESR, and importantly a chest X-ray (sarcoid \u2014 bilateral hilar lymphadenopathy; TB); pregnancy test; directed tests (calcium/ACE, calprotectin/GI, TB testing) per history.' },
        { h:'Manage supportively', t:'EN is usually self-limiting: rest, leg elevation, NSAIDs/analgesia, compression. Reassure about bruise-like resolution.' },
        { h:'Treat the cause', t:'Treat or refer for the underlying cause as found (treat strep, refer sarcoid/IBD/TB work-up, stop culprit drug).' },
        { h:'Never do', t:'Never just treat the legs without the underlying-cause screen; never omit the chest X-ray; never miss IBD/sarcoid/TB clues; never overlook drugs/pregnancy as triggers.' },
        { h:'Safety-net & follow-up', t:'Results review (esp. CXR); earlier review for weight loss/persistent cough/GI bleeding; supportive measures and expected resolution; treat/refer the cause.' }
      ]
    }
  };

  /* ============ 239. F2F — Faecal incontinence: the hidden, shameful symptom ============ */
  const c239 = {
    id:'faecal-incontinence', title:'"I\u2019ve been having accidents \u2014 I can\u2019t always make it to the toilet \u2014 I\u2019ve been too ashamed to tell anyone"', type:'video', duration:12,
    meta:{ age:62, sex:'F', setting:'Face-to-face \u2014 disclosed bowel incontinence.', system:'Continence / Lower GI \u2014 faecal incontinence: sensitive assessment & treatable causes' },
    brief:'Mrs Patricia Lowe, 62 (three vaginal deliveries, one forceps), has, for months, been having episodes of FAECAL INCONTINENCE \u2014 sometimes urgency she can\u2019t control, sometimes passive soiling \u2014 which she has hidden out of deep SHAME, with major impact on her confidence, social life and mood; she has mentioned it only now, at the end of a consultation about something else. The examinable task is to handle a sensitive, stigmatised disclosure WELL \u2014 respond with empathy and without embarrassment, validate her courage, and take it seriously \u2014 and then to ASSESS systematically: characterise it (urge vs passive incontinence, stool consistency/Bristol, frequency, pads), screen CAUSES and contributors (obstetric/anal SPHINCTER injury \u2014 her forceps/deliveries; diarrhoea/constipation with OVERFLOW; IBS/IBD; diabetes/neurological; rectal prolapse; medications; cognitive/mobility/access factors), and \u2014 critically \u2014 EXCLUDE/recognise RED FLAGS that change the pathway: a CHANGE IN BOWEL HABIT, RECTAL BLEEDING or weight loss (consider colorectal pathology \u2014 NICE NG12 / lower-GI assessment, FIT, examination including DRE), and NEUROLOGICAL features (saddle anaesthesia, new incontinence with back pain/leg symptoms \u2014 CAUDA EQUINA). Examine (abdomen, DRE for tone/impaction/masses, perianal). MANAGE with first-line conservative measures (treat constipation/overflow, optimise stool consistency, diet, bowel-retraining, pelvic-floor exercises, skin care, continence products) and REFER to continence services/colorectal as indicated (e.g. sphincter assessment, biofeedback). The skill is destigmatising, systematic assessment, red-flag exclusion, and proactive management of a symptom patients rarely volunteer. NG12 relevant where change in bowel habit/bleeding.',
    script:{
      opening:'(At the end of the consultation, hesitant.) "Before I go \u2014 there\u2019s something I\u2019ve not told anyone, I\u2019m so embarrassed. For months now I\u2019ve been having\u2026 accidents. Sometimes I get the urge and just can\u2019t hold it, sometimes I don\u2019t even feel it coming. I\u2019ve stopped going out. I almost didn\u2019t say anything."',
      facts:[
        { topic:'Handle the disclosure with empathy \u2014 the first task', text:'COMMUNICATION CORE \u2014 faecal incontinence is deeply STIGMATISED and under-reported; patients often hide it for years and disclose tentatively (here, at the end). The first task is to respond with genuine EMPATHY and WITHOUT embarrassment, thank her for telling you, validate that it took courage, normalise that it is common and \u2014 importantly \u2014 often TREATABLE, and give it the time it deserves. Getting this right is essential and heavily examined.' },
        { topic:'Characterise the incontinence', text:'Assess systematically: distinguish URGE incontinence (urgency, can\u2019t reach the toilet in time \u2014 often sphincter/neurological) from PASSIVE incontinence/soiling (unaware \u2014 often internal sphincter dysfunction or overflow), stool CONSISTENCY (Bristol \u2014 loose stool is harder to control; constipation with OVERFLOW soiling is a common, treatable cause), frequency, pad use, and the functional/psychosocial impact.' },
        { topic:'Screen causes & contributors', text:'Screen the causes: OBSTETRIC anal sphincter injury (her vaginal deliveries/FORCEPS \u2014 a key cause in women), DIARRHOEA or CONSTIPATION WITH OVERFLOW, IBS/IBD, DIABETES and NEUROLOGICAL disease (autonomic/spinal), rectal PROLAPSE/haemorrhoids, ANORECTAL surgery, MEDICATIONS (laxatives, others), and COGNITIVE/MOBILITY/ACCESS factors (especially in frail/older patients). Identifying a treatable contributor (e.g. overflow) often resolves it.' },
        { topic:'Recognise the RED FLAGS', text:'CRITICAL \u2014 screen RED FLAGS that change the pathway: a CHANGE IN BOWEL HABIT, RECTAL BLEEDING, or unintentional WEIGHT LOSS (consider COLORECTAL pathology \u2014 lower-GI/NICE NG12 assessment, FIT testing, examination incl. DRE); and NEUROLOGICAL features \u2014 SADDLE anaesthesia, new bowel/bladder incontinence with back pain or leg weakness/numbness (CAUDA EQUINA \u2014 a neurosurgical emergency). New faecal incontinence is not always "just weak muscles".' },
        { topic:'Examine & manage', text:'EXAMINE: abdomen, perianal inspection (soiling, prolapse, haemorrhoids, scars, gaping), and a DIGITAL RECTAL EXAMINATION (resting/squeeze tone, faecal IMPACTION/overflow, masses). MANAGE first-line conservatively: treat constipation/overflow or diarrhoea, optimise STOOL CONSISTENCY (fibre/loperamide as appropriate), bowel-retraining/scheduled toileting, PELVIC-FLOOR exercises, diet/lifestyle, skin care and continence products. REFER to CONTINENCE services and/or COLORECTAL (sphincter assessment, biofeedback, surgical options) as indicated, and via the appropriate cancer pathway if red flags.' },
        { topic:'The hidden agenda + impact', text:'HIDDEN AGENDA \u2014 the disclosure itself, made with shame at the end, IS the agenda; she fears judgement and may believe nothing can be done. The skill is to receive it with compassion, take it seriously, assess systematically, exclude red flags, give realistic HOPE (it is often treatable), and address the major psychosocial/mood impact \u2014 not to rush or minimise. NG12/lower-GI pathway applies where there is change in bowel habit or bleeding.' },
      ],
      ice:{
        ideas:'Deeply ashamed; may believe it\u2019s an inevitable/untreatable part of ageing or childbirth and that nothing can be done.',
        concerns:'HIDDEN/CORE \u2014 shame and fear of judgement; social withdrawal and low mood; what it means; reluctance to have disclosed.',
        expectations:'Often none beyond unburdening. What she needs: compassionate reception, systematic assessment, red-flag exclusion, conservative management and continence/colorectal referral, realistic hope, and her dignity preserved.'
      },
      cues:['Hidden, shame-laden disclosure of faecal incontinence (urge + passive) at the end of the consultation \u2014 receive with empathy; it\u2019s common and often treatable.','Assess: urge vs passive, stool consistency (overflow from constipation is common/treatable), obstetric sphincter injury (deliveries/forceps), diabetes/neuro, drugs.','RED FLAGS: change in bowel habit/rectal bleeding/weight loss (colorectal \u2014 NG12/FIT/DRE) and saddle anaesthesia/back-leg symptoms (cauda equina). Examine incl. DRE; conservative Rx + referral.']
    },
    checkpoints:[
      { dom:'rto',   text:'Handles the sensitive, shame-laden DISCLOSURE well \u2014 responding with genuine empathy and without embarrassment, thanking/validating her, normalising that it is common and often TREATABLE, and giving it time' },
      { dom:'tasks', text:'CHARACTERISES the incontinence \u2014 urge vs passive/soiling, stool consistency (Bristol), frequency, pad use \u2014 and recognises constipation with OVERFLOW and loose stool as common, treatable contributors' },
      { dom:'tasks', text:'Screens CAUSES/contributors \u2014 obstetric anal sphincter injury (deliveries/forceps), diarrhoea/constipation, IBS/IBD, diabetes/neurological disease, rectal prolapse/haemorrhoids, anorectal surgery, medications, cognitive/mobility/access factors' },
      { dom:'tasks', text:'Recognises and EXCLUDES the RED FLAGS \u2014 change in bowel habit/rectal bleeding/weight loss (colorectal pathology \u2014 lower-GI/NICE NG12, FIT, DRE) and saddle anaesthesia/new incontinence with back/leg symptoms (CAUDA EQUINA emergency)' },
      { dom:'tasks', text:'EXAMINES appropriately (abdomen, perianal inspection, DIGITAL RECTAL EXAMINATION for tone/impaction/masses) and MANAGES first-line conservatively (treat constipation/overflow or diarrhoea, optimise stool consistency, bowel-retraining, pelvic-floor exercises, skin care/products), referring to continence/colorectal services as indicated' },
      { dom:'rto',   text:'Addresses the major PSYCHOSOCIAL/mood impact (social withdrawal, confidence, relationships) and gives realistic HOPE that it is often treatable, preserving her dignity' },
      { dom:'rto',   text:'Explains the assessment and plan sensitively, checks understanding, and does not rush or minimise the symptom' },
      { dom:'gs',    text:'Safety-nets and follows up: red-flag/cancer-pathway referral where indicated, cauda-equina emergency advice, continence/colorectal referral, conservative-management review, and ongoing support \u2014 compassionate, systematic care of a rarely-volunteered symptom' },
    ],
    worked:[
      { lbl:'Receive it with compassion', txt:'"I\u2019m really glad you told me \u2014 and I can see how hard that was. Please don\u2019t be embarrassed; this is far more common than people realise, and importantly it\u2019s often very treatable. Let\u2019s give this the time it deserves \u2014 it matters."' },
      { lbl:'Characterise it', txt:'"Can you help me understand it a bit? Is it more that you get a sudden urge and can\u2019t make it in time, or that it happens without you feeling it coming? And what are your bowels like otherwise \u2014 loose, or constipated? Sometimes constipation causes leakage around it, which is very fixable."' },
      { lbl:'Screen causes', txt:'"You mentioned your deliveries \u2014 a forceps birth can affect the muscles down there, which is a common and treatable cause. Are you diabetic, on any bowel medicines, or have you had any back problems? I\u2019m building a picture of why."' },
      { lbl:'Exclude red flags', txt:'"A few important checks: any change in your usual bowel habit, blood in the stool, or weight loss? And any numbness around the back passage, or back pain with weakness in the legs? \u2026 Those would need urgent attention, so I\u2019m glad to have asked."' },
      { lbl:'Examine + first-line plan', txt:'"I\u2019d like to examine your tummy and do an internal examination to check the muscle tone and rule out any blockage \u2014 I\u2019ll be gentle and explain as I go. Then we can start with things that genuinely help: getting the stool consistency right, pelvic-floor exercises, a toileting routine, and skin care."' },
      { lbl:'Refer + hope + safety-net', txt:'"I\u2019ll also refer you to the continence service, who are experts, and possibly the bowel team for the muscle side. This is not something you just have to live with. Come back if you get any of those warning signs, and let\u2019s review how the measures help. You did exactly the right thing telling me."' },
    ],
    learning:'Faecal incontinence is deeply STIGMATISED and under-reported, often hidden for years and disclosed tentatively (here at the end of a consultation), so the first task is COMMUNICATION: respond with genuine empathy and without embarrassment, thank and validate the patient, normalise that it is common and often TREATABLE, and give it the time it deserves. Then ASSESS systematically: characterise it as URGE incontinence (urgency, cannot reach the toilet \u2014 often sphincter/neurological) versus PASSIVE incontinence/soiling (unaware \u2014 internal sphincter dysfunction or OVERFLOW), and assess stool CONSISTENCY (loose stool is harder to control; constipation with overflow soiling is a common, treatable cause), frequency, pad use and psychosocial impact. Screen causes and contributors: OBSTETRIC anal sphincter injury (vaginal deliveries/forceps \u2014 a key cause in women), diarrhoea or constipation with overflow, IBS/IBD, diabetes and neurological disease, rectal prolapse/haemorrhoids, anorectal surgery, medications, and cognitive/mobility/access factors. Critically, EXCLUDE the RED FLAGS that change the pathway: a CHANGE IN BOWEL HABIT, RECTAL BLEEDING or unintentional WEIGHT LOSS (consider colorectal pathology \u2014 lower-GI/NICE NG12 assessment, FIT testing, examination including DRE), and NEUROLOGICAL features \u2014 saddle anaesthesia or new bowel/bladder incontinence with back pain/leg weakness (CAUDA EQUINA, a neurosurgical emergency). Examine the abdomen, perianal area and perform a digital rectal examination (resting/squeeze tone, faecal impaction/overflow, masses), and manage first-line conservatively (treat constipation/overflow or diarrhoea, optimise stool consistency, bowel-retraining/scheduled toileting, pelvic-floor exercises, skin care and continence products), referring to continence services and/or colorectal (sphincter assessment, biofeedback, surgery) as indicated \u2014 and via the cancer pathway if red flags. The hidden agenda is the shame-laden disclosure itself and a belief that nothing can be done; receive it compassionately, assess systematically, exclude red flags, address the psychosocial/mood impact, and give realistic hope. NICE NG12/lower-GI assessment applies where there is a change in bowel habit or rectal bleeding.',
    knowledge:{
      guideline:'NICE CG49 faecal incontinence \u00b7 sensitive disclosure \u00b7 urge vs passive & overflow \u00b7 red flags (colorectal NG12/cauda equina) \u00b7 conservative management & referral',
      points:[
        { h:'Receive the disclosure well', t:'Faecal incontinence is stigmatised and under-reported. Respond with empathy, without embarrassment; validate courage; normalise (common, often treatable); give it time. Heavily examined communication.' },
        { h:'Characterise it', t:'Urge (urgency, can\u2019t reach toilet \u2014 sphincter/neuro) vs passive/soiling (unaware \u2014 internal sphincter/overflow); stool consistency (Bristol \u2014 loose harder to control; constipation+overflow common & treatable); frequency, pads, impact.' },
        { h:'Screen causes', t:'Obstetric anal sphincter injury (deliveries/forceps), diarrhoea/constipation-overflow, IBS/IBD, diabetes/neurological disease, rectal prolapse/haemorrhoids, anorectal surgery, medications, cognitive/mobility/access factors.' },
        { h:'Red flags', t:'Change in bowel habit/rectal bleeding/weight loss \u2192 colorectal pathology (lower-GI/NG12, FIT, DRE). Saddle anaesthesia/new incontinence with back-leg symptoms \u2192 cauda equina emergency.' },
        { h:'Examine', t:'Abdomen, perianal inspection (soiling, prolapse, haemorrhoids, scars, gaping), DRE (resting/squeeze tone, faecal impaction/overflow, masses).' },
        { h:'Conservative management', t:'Treat constipation/overflow or diarrhoea; optimise stool consistency (fibre/loperamide); bowel-retraining/scheduled toileting; pelvic-floor exercises; skin care; continence products.' },
        { h:'Refer', t:'Continence services and/or colorectal (sphincter assessment, biofeedback, surgical options); cancer pathway if red flags; cauda equina = emergency.' },
        { h:'Never do', t:'Never rush/minimise the disclosure or show discomfort; never assume "just ageing/childbirth"; never skip the red-flag screen or DRE; never omit the psychosocial impact or realistic hope.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c236, c237, c238, c239);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'cluster-headache': {
      ceg: ['Urgent & unscheduled care', 'Mental health & addiction'],
      stem: {
        name: 'Marek Solomon', age: '38 years \u00b7 male',
        pmh: ['Excruciating strictly unilateral retro-orbital pain, ~45\u201390 min, nightly/circadian, in a 2-week cluster', 'Ipsilateral red/watering eye, ptosis, rhinorrhoea; restless/paces/head-banging', 'Smoker; oral analgesia ineffective'],
        meds: ['Co-codamol (no benefit)'],
        allergy: 'NKDA',
        recent: '"Excruciating pain behind one eye every night \u2014 makes me pace and bang my head; painkillers do nothing."',
        reason: 'Face-to-face \u2014 severe recurrent unilateral headache with eye symptoms.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise', d:'Strictly unilateral, short, circadian orbital pain + autonomic features + restlessness, in clusters = cluster headache.' },
        { t:'2\u20134',  h:'Vs migraine + red flags', d:'Not migraine (longer/throbbing/lies still); screen thunderclap/focal/older-age/abnormal-exam.' },
        { t:'4\u20137',  h:'Acute Rx (different!)', d:'High-flow O2 + sc/nasal triptan abort attacks; oral analgesia/opioids don\u2019t work \u2014 avoid opioids.' },
        { t:'7\u20139',  h:'Prevention + triggers', d:'Verapamil first-line (specialist/ECG); avoid alcohol in a bout; smoking. Start prevention early.' },
        { t:'9\u201312', h:'Mood + refer', d:'Screen suicidality ("suicide headache"); neurology referral; safety-net thunderclap/new neuro.' }
      ],
      wordPics: {
        fail: 'Mislabels as migraine/sinusitis; gives oral analgesia/opioids; no O2/triptan; no suicidality screen or neurology referral.',
        pass: 'Recognises cluster headache, gives O2 + sc/nasal triptan and verapamil prevention, and refers neurology.',
        exc:  'Confidently recognises cluster headache vs migraine, prescribes the correct acute plan (high-flow O2 + sc/nasal triptan, avoiding opioids), starts verapamil prevention with monitoring, screens red flags and suicidality, and refers neurology.'
      },
      avoid: [
        { dont:'"Sounds like migraine \u2014 try this stronger painkiller / some co-codamol."', instead:'"This is cluster headache, not migraine \u2014 it needs high-flow oxygen and a triptan injection or nasal spray; ordinary painkillers won\u2019t touch it."', why:'Mislabelling as migraine and using oral analgesia/opioids denies the effective O2/triptan treatment.' },
        { dont:'(No prevention) treating attacks only.', instead:'"Let\u2019s start a preventer like verapamil to suppress the run of attacks, guided by the specialist with heart tracings."', why:'Prevention during a bout is key; treating attacks alone leaves him suffering nightly.' },
        { dont:'(No mood screen) ignoring the severity.', instead:'"This pain is sometimes called the \u2018suicide headache\u2019 \u2014 can I ask if it\u2019s made you feel life isn\u2019t worth living?"', why:'Cluster headache carries real suicidality risk; omitting the screen is unsafe.' }
      ]
    },

    'essential-tremor': {
      ceg: ['Older adults', 'New & undifferentiated presentations'],
      stem: {
        name: 'Hugh Brankin', age: '64 years \u00b7 male',
        pmh: ['Several-year bilateral, symmetrical hand tremor \u2014 worse on action (cup/writing/eating), better at rest', 'Improves with alcohol; family history (father); no slowness/stiffness/gait change', 'Fears Parkinson\u2019s'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"My hands shake when I reach for my cup or write \u2014 my dad had it too. Is it Parkinson\u2019s?"',
        reason: 'Face-to-face \u2014 a tremor, worried about Parkinson\u2019s.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Address the fear', d:'Action tremor better at rest, symmetrical, familial, alcohol-responsive \u2014 points away from Parkinson\u2019s.' },
        { t:'2\u20135',  h:'Examine', d:'Rest/posture/action tremor (finger-nose, cup, spiral); check bradykinesia, rigidity, gait, cerebellar signs.' },
        { t:'5\u20137',  h:'Screen reversible', d:'TFTs (hyperthyroid), drug review (salbutamol/lithium/SSRIs), caffeine/alcohol.' },
        { t:'7\u20139',  h:'Name + manage', d:'Essential tremor; reassure; propranolol/primidone if functionally impairing/distressing.' },
        { t:'9\u201312', h:'Safety-net + refer', d:'Review/refer if asymmetry/slowness/stiffness/gait change/refractory; treatment trial + review.' }
      ],
      wordPics: {
        fail: 'Either alarms the patient toward Parkinson\u2019s or dismisses without examining; no reversible-cause screen; no treatment offered or addressing the fear.',
        pass: 'Distinguishes essential tremor from Parkinson\u2019s, screens reversible causes, and offers reassurance/propranolol.',
        exc:  'Makes the action-vs-rest distinction with a proper examination (no parkinsonian triad), screens reversible causes (TFTs/drugs), names essential tremor and addresses the Parkinson\u2019s fear directly, offers propranolol/primidone if troublesome, and safety-nets for parkinsonian features.'
      },
      avoid: [
        { dont:'"A tremor at your age \u2014 it could well be early Parkinson\u2019s."', instead:'"Actually your tremor is worst when you use your hands and settles at rest, which points away from Parkinson\u2019s toward essential tremor."', why:'Alarming the patient toward Parkinson\u2019s without the action-vs-rest distinction is inaccurate and frightening.' },
        { dont:'(No exam) reassuring without examining for bradykinesia/rigidity/gait.', instead:'"Let me check for slowness, stiffness and your walking \u2014 the things we\u2019d see in Parkinson\u2019s \u2014 to be sure."', why:'The examination for the parkinsonian triad underpins the diagnosis and reassurance.' },
        { dont:'(No reversible screen) missing thyroid/drugs.', instead:'"I\u2019ll check your thyroid and review your medicines and caffeine, which can all cause or worsen tremor."', why:'Reversible causes (hyperthyroidism, drugs) must be screened.' }
      ]
    },

    'erythema-nodosum': {
      ceg: ['New & undifferentiated presentations', 'Investigations & results'],
      stem: {
        name: 'Robyn Easton', age: '31 years \u00b7 female',
        pmh: ['Several days of tender, warm, red-purple nodules on both shins, fading like bruises', 'Low-grade fever, malaise, arthralgia; recent sore throat ~2 weeks ago', 'On combined oral contraceptive'],
        meds: ['Combined oral contraceptive'],
        allergy: 'NKDA',
        recent: '"Painful red lumps on my shins \u2014 hot and sore, now bruised-looking. What are they?"',
        reason: 'Face-to-face \u2014 tender red nodules on the shins.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise EN', d:'Tender bilateral shin nodules fading like bruises + systemic symptoms = erythema nodosum.' },
        { t:'2\u20134',  h:'Reactive \u2014 find the cause', d:'Strep (recent sore throat), sarcoid, IBD, TB, drugs (pill), pregnancy; \u2153 idiopathic.' },
        { t:'4\u20136',  h:'Focused history', d:'Infection, GI/weight loss (IBD), respiratory/eye (sarcoid), TB risk/travel, drugs, pregnancy.' },
        { t:'6\u20138',  h:'Investigate incl. CXR', d:'Throat swab/ASOT, FBC/CRP/ESR, CHEST X-RAY (sarcoid/TB), pregnancy test, directed tests.' },
        { t:'8\u201312', h:'Manage + safety-net', d:'Supportive (rest/elevation/NSAIDs/compression); treat cause; review CXR; earlier review for systemic red flags.' }
      ],
      wordPics: {
        fail: 'Treats the legs only (or as cellulitis/bruising) without recognising EN or searching for a cause; omits the chest X-ray.',
        pass: 'Recognises EN, screens the underlying causes with appropriate tests incl. CXR, and manages supportively.',
        exc:  'Recognises erythema nodosum, explains it is reactive and conducts the underlying-cause screen (history + throat swab/ASOT + bloods + chest X-ray + pregnancy test), manages the EN supportively, and treats/refers for the cause with safety-netting.'
      },
      avoid: [
        { dont:'"They\u2019re just some inflamed lumps \u2014 here\u2019s some cream/antibiotics for the legs."', instead:'"These are erythema nodosum, often a reaction to something else \u2014 so my main job is to find the cause, including a chest X-ray."', why:'Treating only the legs misses the point: EN is reactive and needs an underlying-cause screen.' },
        { dont:'(No CXR) screening without a chest X-ray.', instead:'"I\u2019ll do a chest X-ray, because sarcoidosis and TB \u2014 two causes \u2014 show up there."', why:'The chest X-ray is high-yield (sarcoid/TB) and easily forgotten in EN.' },
        { dont:'(Ignoring drugs/pregnancy) not asking.', instead:'"Are you on the pill, and could you be pregnant? Both can trigger this."', why:'Drugs (COCP) and pregnancy are recognised triggers that must be screened.' }
      ]
    },

    'faecal-incontinence': {
      ceg: ['Older adults', 'Health disadvantage & vulnerabilities'],
      stem: {
        name: 'Patricia Lowe', age: '62 years \u00b7 female',
        pmh: ['Months of faecal incontinence \u2014 urge (can\u2019t reach toilet) + passive soiling; hidden from shame', '3 vaginal deliveries, one forceps; social withdrawal, low mood', 'Disclosed at the end of a consultation about something else'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"I\u2019ve been having accidents \u2014 I can\u2019t always make it to the toilet \u2014 too ashamed to tell anyone."',
        reason: 'Face-to-face \u2014 disclosed bowel incontinence.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Receive with compassion', d:'Empathy, no embarrassment; thank/validate; normalise (common, often treatable); give it time.' },
        { t:'2\u20134',  h:'Characterise', d:'Urge vs passive/soiling; stool consistency (overflow from constipation common/treatable); frequency/pads/impact.' },
        { t:'4\u20136',  h:'Screen causes', d:'Obstetric sphincter injury (forceps), diarrhoea/constipation, IBS/IBD, diabetes/neuro, prolapse, drugs.' },
        { t:'6\u20138',  h:'Red flags', d:'Change in bowel habit/bleeding/weight loss (colorectal NG12/FIT/DRE); saddle anaesthesia/back-leg (cauda equina).' },
        { t:'8\u201312', h:'Examine + manage + refer', d:'Abdo/perianal/DRE; conservative (stool consistency, pelvic floor, bowel retraining, skin care); continence/colorectal referral; hope.' }
      ],
      wordPics: {
        fail: 'Rushes/shows discomfort at the disclosure or minimises it as "just ageing/childbirth"; no red-flag screen or DRE; no conservative plan or referral.',
        pass: 'Receives the disclosure compassionately, assesses and screens red flags, examines, and starts conservative management with referral.',
        exc:  'Handles the shame-laden disclosure with empathy and time, characterises urge vs passive and overflow, screens causes and red flags (colorectal NG12/cauda equina), examines incl. DRE, starts conservative management, refers continence/colorectal, and gives realistic hope addressing the psychosocial impact.'
      },
      avoid: [
        { dont:'(Discomfort/rushing) "Right, well, we\u2019re nearly out of time \u2014 it\u2019s probably your age."', instead:'"Thank you for telling me \u2014 this is common and often treatable, and it deserves proper time; let\u2019s look into it together."', why:'Showing discomfort, rushing or attributing it to ageing shames the patient and misses treatable causes.' },
        { dont:'(No red-flag screen) treating without asking about bleeding/bowel change/back symptoms.', instead:'"Any change in bowel habit, blood, weight loss, or numbness around the back passage or back pain?"', why:'Missing colorectal (NG12) or cauda-equina red flags can be dangerous.' },
        { dont:'(No exam/plan) reassuring without DRE or management.', instead:'"I\u2019d like to examine you including an internal check, then start practical measures and refer you to the continence team."', why:'DRE (tone/impaction/masses) and conservative management/referral are core to assessment.' }
      ]
    }

  });

})();
