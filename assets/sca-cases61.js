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

  /* ============ 216. F2F — TIA: the episode that resolved but is an emergency ============ */
  const c216 = {
    id:'tia-resolved', title:'"My arm went weak and my speech slurred for half an hour yesterday \u2014 but it\u2019s fine now, so no harm done?"', type:'video', duration:12,
    meta:{ age:69, sex:'M', setting:'Video consultation \u2014 a resolved transient neurological episode.', system:'Neurology / Stroke \u2014 transient ischaemic attack: the resolved emergency' },
    brief:'Mr Bernard Cole, 69 (hypertensive, ex-smoker), reports that yesterday his right arm went weak and his speech slurred for about 30 minutes, then fully recovered; he has come only because his wife insisted. He thinks "no harm done". The examinable task is to recognise a TRANSIENT ISCHAEMIC ATTACK (TIA) \u2014 a transient, fully-resolving focal neurological deficit of presumed vascular origin \u2014 as a MEDICAL EMERGENCY and a WARNING of imminent stroke, NOT a benign event: take a focused history (deficit type/onset/duration/resolution, FAST features, amaurosis fugax, AF/palpitations, vascular risk), examine (BP, pulse for AF, carotid, neuro, cardiovascular), give ASPIRIN 300 mg immediately (unless contraindicated) and refer for SAME-DAY/within-24h specialist TIA-clinic assessment per NICE (carotid imaging, brain imaging, risk-factor and secondary-prevention work-up; the ABCD2 score informs services but NICE now advises urgent assessment for all suspected TIA), and \u2014 critically \u2014 advise he MUST NOT DRIVE and inform of the DVLA rules (no driving for at least 1 month after a TIA for Group 1; longer/stricter for Group 2). Address the "no harm done" minimisation firmly but supportively. No NG12 cancer link.',
    script:{
      opening:'"My wife made me come \u2014 honestly I think it\u2019s a fuss over nothing. Yesterday my right arm went weak and my words came out slurred for maybe half an hour, then it cleared up completely and I\u2019ve been fine since. So no harm done, right? I don\u2019t need to do anything about it now it\u2019s passed?"',
      facts:[
        { topic:'A resolved deficit is a TIA \u2014 an emergency', text:'CORE \u2014 a transient, fully-resolving FOCAL neurological deficit (e.g. unilateral weakness, dysarthria/dysphasia, facial droop, amaurosis fugax) of presumed vascular origin is a TRANSIENT ISCHAEMIC ATTACK. Full recovery does NOT mean "no harm done": a TIA is a MEDICAL EMERGENCY and a strong WARNING of imminent stroke (highest risk in the first days). The fact it resolved is exactly why it must be acted on urgently to prevent a completed stroke.' },
        { topic:'Focused history & examination', text:'Take a focused history: the deficit (type, onset, duration, complete resolution), FAST features, amaurosis fugax, any speech/swallow involvement, palpitations (AF), prior episodes, and vascular risk (hypertension, smoking, diabetes, AF, cholesterol, prior stroke). Examine: blood pressure, PULSE/rhythm (AF), carotid bruits, a neurological exam (confirm full resolution), and cardiovascular exam. Consider mimics (hypoglycaemia, seizure with Todd\u2019s paresis, migraine aura, syncope) but treat as TIA until excluded.' },
        { topic:'Immediate aspirin + urgent referral', text:'ACTION \u2014 give ASPIRIN 300 mg immediately (unless contraindicated/already anticoagulated \u2014 follow local pathway) and refer for SPECIALIST assessment within 24 HOURS (NICE: urgent TIA-clinic assessment for suspected TIA \u2014 brain/carotid imaging, ECG, bloods, secondary prevention). The ABCD2 score historically stratified risk, but NICE now advises urgent specialist assessment for everyone with suspected TIA, not selective delay.' },
        { topic:'Secondary prevention (specialist-led, but know it)', text:'Know the secondary-prevention package the pathway delivers: antiplatelet (or anticoagulation if AF), high-intensity statin, blood-pressure control, smoking cessation, diabetes optimisation, and carotid endarterectomy if significant symptomatic carotid stenosis. Lifestyle and risk-factor modification matter. This reframes the TIA as a treatable warning, not a non-event.' },
        { topic:'The DVLA / driving rule', text:'CRITICAL \u2014 he MUST NOT DRIVE: after a TIA (or stroke), Group 1 (car) drivers must not drive for at least 1 MONTH (and may resume only if recovered, often without needing to notify DVLA for a single TIA if no residual deficit \u2014 but multiple TIAs or residual problems require notification); Group 2 (HGV/bus) rules are far stricter (e.g. ~1 year off). Advise clearly, document, and explain why \u2014 do not let "I feel fine" override this.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 his "no harm done, it\u2019s passed" is minimisation (and he only attended because his wife insisted). The skill is to firmly but supportively correct the misconception that a resolved episode is benign, convey the urgency and the prevention opportunity, start aspirin, arrange same-day/within-24h assessment, and give the driving advice \u2014 not to be reassured by the recovery.' },
      ],
      ice:{
        ideas:'It resolved, so "no harm done" and nothing needs doing now.',
        concerns:'(His wife\u2019s) that it was serious; (his, perhaps unspoken) fear of stroke, downplayed.',
        expectations:'Reassurance it can be ignored. What he needs: recognition of a TIA as an emergency/stroke warning, immediate aspirin, urgent (within-24h) specialist assessment, secondary prevention, and the no-driving/DVLA advice.'
      },
      cues:['Transient unilateral weakness + slurred speech for ~30 min, fully resolved, in a vascular-risk patient \u2014 a TIA: emergency + stroke warning, not "no harm done".','Give aspirin 300 mg now + urgent specialist assessment within 24h (NICE); check pulse for AF; secondary prevention.','Must NOT drive (Group 1 \u22651 month off; Group 2 stricter); correct the "it\u2019s passed" minimisation firmly.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises a transient, fully-resolving FOCAL neurological deficit as a TIA \u2014 a MEDICAL EMERGENCY and stroke warning \u2014 and that full recovery does NOT mean "no harm done"' },
      { dom:'tasks', text:'Takes a focused history (deficit type/onset/duration/resolution, FAST, amaurosis fugax, palpitations/AF, vascular risk) and examines (BP, pulse/rhythm, carotids, neuro confirming resolution, CVS), considering mimics' },
      { dom:'tasks', text:'Gives ASPIRIN 300 mg immediately (unless contraindicated/anticoagulated) and refers for SPECIALIST TIA assessment within 24 HOURS per NICE (not selective delay)' },
      { dom:'tasks', text:'Knows the secondary-prevention package (antiplatelet/anticoagulation if AF, high-intensity statin, BP control, smoking cessation, diabetes, carotid surgery if significant symptomatic stenosis)' },
      { dom:'tasks', text:'Advises he MUST NOT DRIVE \u2014 Group 1 at least 1 month off (notify DVLA if multiple TIAs/residual deficit), Group 2 far stricter \u2014 and documents the advice' },
      { dom:'rto',   text:'Firmly but supportively corrects the "no harm done/it\u2019s passed" minimisation, conveys the urgency and the prevention opportunity, and validates the wife\u2019s prompt' },
      { dom:'rto',   text:'Explains the reasoning (resolved = warning to act now) in accessible terms and checks understanding' },
      { dom:'gs',    text:'Safety-nets and arranges disposition: aspirin started, within-24h specialist assessment, 999 advice if any new/persistent deficit (FAST), no driving, and review \u2014 acting on a resolved TIA as an emergency, not reassurance' },
    ],
    worked:[
      { lbl:'Validate the wife, reframe', txt:'"Your wife was absolutely right to make you come \u2014 and I have to be honest with you: the fact it cleared up is not \u2018no harm done\u2019. What you describe is a mini-stroke, a TIA, and it\u2019s a serious warning that a bigger stroke could follow, especially in the next few days. That\u2019s exactly why we act now."' },
      { lbl:'Assess', txt:'"Tell me again \u2014 which side, how long, did it fully clear? Any change in vision, palpitations? Let me check your blood pressure and pulse \u2014 an irregular pulse matters \u2014 and do a quick neurological check to confirm it\u2019s settled."' },
      { lbl:'Act immediately', txt:'"Two things now: I\u2019m giving you aspirin 300 mg today, and I\u2019m arranging for you to be seen by the stroke/TIA specialists within 24 hours \u2014 they\u2019ll scan the brain and the neck arteries and sort out prevention. This isn\u2019t something to leave."' },
      { lbl:'Prevention framing', txt:'"The good news is a TIA is a treatable warning \u2014 blood-pressure control, a statin, stopping smoking, and treating any irregular heartbeat dramatically cut your stroke risk. We turn this into a near-miss, not a disaster."' },
      { lbl:'Driving', txt:'"Important: you must not drive for now \u2014 after a TIA that\u2019s at least a month for a car, and longer if you drive professionally. I know that\u2019s inconvenient, but it\u2019s the law and it\u2019s for your safety. I\u2019ll document it."' },
      { lbl:'Safety-net', txt:'"If any weakness, droopy face, or slurred speech comes back and stays \u2014 even briefly \u2014 call 999 immediately; that could be a stroke and time is critical. Otherwise, expect the specialist contact within a day, and I\u2019ll follow up."' },
    ],
    learning:'A transient, fully-resolving FOCAL neurological deficit of presumed vascular origin (unilateral weakness, dysarthria/dysphasia, facial droop, amaurosis fugax) is a TRANSIENT ISCHAEMIC ATTACK \u2014 and full recovery does NOT mean "no harm done": a TIA is a MEDICAL EMERGENCY and a strong warning of imminent stroke (risk highest in the first days), so the resolution is precisely why it must be acted on urgently. Take a focused history (deficit type/onset/duration/complete resolution, FAST features, amaurosis fugax, palpitations suggesting AF, prior episodes, vascular risk) and examine (BP, pulse/rhythm for AF, carotids, a neuro exam confirming resolution, CVS), considering mimics (hypoglycaemia, seizure with Todd\u2019s paresis, migraine aura, syncope) but treating as TIA until excluded. Give ASPIRIN 300 mg immediately (unless contraindicated or already anticoagulated, per local pathway) and refer for SPECIALIST TIA-clinic assessment within 24 HOURS \u2014 NICE now advises urgent assessment for all suspected TIA rather than ABCD2-based selective delay \u2014 for brain/carotid imaging, ECG, bloods and secondary prevention (antiplatelet or anticoagulation if AF, high-intensity statin, BP control, smoking cessation, diabetes optimisation, carotid endarterectomy if significant symptomatic stenosis), reframing the TIA as a treatable warning. Critically, advise the patient MUST NOT DRIVE: Group 1 (car) at least 1 month off (with DVLA notification if multiple TIAs or residual deficit), Group 2 (HGV/bus) far stricter \u2014 advise clearly and document. The hidden agenda is minimisation ("it\u2019s passed, no harm done", attending only at his wife\u2019s insistence); firmly but supportively correct it, convey urgency and the prevention opportunity, and never be reassured by the recovery. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE NG128 stroke/TIA \u00b7 urgent (24h) specialist assessment \u00b7 aspirin 300 mg \u00b7 secondary prevention \u00b7 DVLA TIA rules (no NG12 link)',
      points:[
        { h:'Resolved = emergency', t:'A transient fully-resolving focal deficit is a TIA \u2014 a medical emergency and stroke warning (risk highest in first days). Full recovery does not mean "no harm done"; act urgently.' },
        { h:'History & exam', t:'Deficit type/onset/duration/resolution, FAST, amaurosis fugax, palpitations/AF, vascular risk; examine BP, pulse/rhythm, carotids, neuro (confirm resolution), CVS. Consider mimics but treat as TIA until excluded.' },
        { h:'Immediate action', t:'Aspirin 300 mg now (unless contraindicated/anticoagulated) + specialist TIA assessment within 24 hours (NICE advises urgent assessment for all suspected TIA).' },
        { h:'Secondary prevention', t:'Antiplatelet (or anticoagulation if AF), high-intensity statin, BP control, smoking cessation, diabetes optimisation, carotid endarterectomy if significant symptomatic stenosis. A treatable warning.' },
        { h:'DVLA / driving', t:'Must not drive: Group 1 \u22651 month off (notify DVLA if multiple TIAs/residual deficit); Group 2 far stricter (~1 year). Advise clearly and document; "I feel fine" does not override.' },
        { h:'Address minimisation', t:'Correct "no harm done/it\u2019s passed" firmly but supportively; convey urgency and prevention; validate the family member who prompted attendance.' },
        { h:'Never do', t:'Never reassure because it resolved; never delay specialist assessment; never omit aspirin or the driving advice; never miss AF; never treat a TIA as a non-event.' },
        { h:'Safety-net & follow-up', t:'Within-24h specialist assessment; 999 if any deficit recurs/persists (FAST); no driving; review the plan and secondary prevention.' }
      ]
    }
  };

  /* ============ 217. F2F — Migraine + medication-overuse headache ============ */
  const c217 = {
    id:'migraine-moh', title:'"I\u2019ve got a headache nearly every day and I\u2019m taking painkillers constantly \u2014 nothing touches it"', type:'video', duration:12,
    meta:{ age:34, sex:'F', setting:'Face-to-face \u2014 frequent headaches with heavy analgesic use.', system:'Neurology \u2014 migraine & medication-overuse headache: diagnose, treat, and break the cycle' },
    brief:'Miss Rowena Page, 34, has a long history of episodic MIGRAINE but now has a near-DAILY headache and is taking codeine/combination analgesics and triptans MOST DAYS; nothing helps. The examinable task is twofold: (1) DIAGNOSE the headache(s) \u2014 recognise migraine features and, crucially, MEDICATION-OVERUSE HEADACHE (MOH) \u2014 a daily/near-daily headache developing in someone with a primary headache who is using acute analgesics/triptans frequently (broadly opioids/triptans/combination analgesics on \u226510 days/month, or simple analgesics \u226515 days/month) \u2014 while EXCLUDING secondary/red-flag headache (thunderclap, new focal/neuro signs, papilloedema, systemic features, new headache >50, change in pattern, GCA features); and (2) MANAGE it \u2014 explain MOH and that the OVERUSED MEDICATION is now PERPETUATING the headache, support WITHDRAWAL of the overused acute drugs (with a clear plan and warning of transient worsening), optimise genuine MIGRAINE management (acute treatment used sparingly, PROPHYLAXIS e.g. propranolol/amitriptyline/topiramate \u2014 with topiramate teratogenicity/contraception caution, lifestyle/trigger/sleep, headache diary), and safety-net. The skill is recognising MOH (not escalating painkillers), excluding red flags, and breaking the cycle with a supported plan. No NG12 cancer link.',
    script:{
      opening:'"I\u2019ve had migraines for years, but now I\u2019ve got a headache nearly every single day and the painkillers just aren\u2019t working any more. I\u2019m taking co-codamol most days and my migraine tablets too, and nothing touches it. Can you give me something stronger? I\u2019m at the end of my tether."',
      facts:[
        { topic:'Exclude red-flag / secondary headache first', text:'CORE SAFETY \u2014 before attributing a daily headache to migraine/MOH, EXCLUDE secondary causes/red flags: thunderclap onset (SAH), new focal neurology or papilloedema/raised-ICP features (morning headache, worse on lying/Valsalva, vomiting), systemic features (fever, weight loss, immunosuppression, cancer history), new headache >50 or a significant CHANGE in pattern, and GCA features (scalp tenderness, jaw claudication \u2014 in older patients). A reassuring history/exam supports a primary-headache diagnosis.' },
        { topic:'Recognise migraine', text:'Recognise MIGRAINE features: moderate-severe, often unilateral/throbbing headache, with nausea, photophobia/phonophobia, aggravated by activity, \u00b1 aura, lasting hours-to-days, in a long-standing episodic pattern. Her background is episodic migraine \u2014 but the picture has changed to near-daily, prompting the key second diagnosis.' },
        { topic:'Recognise MEDICATION-OVERUSE HEADACHE', text:'KEY \u2014 a near-DAILY/chronic headache in someone with a primary headache disorder who uses ACUTE analgesics or triptans FREQUENTLY is MEDICATION-OVERUSE HEADACHE (MOH): broadly, triptans/opioids/combination analgesics on \u226510 days/month, or simple analgesics (paracetamol/NSAIDs) on \u226515 days/month, for >3 months. The overused medication PERPETUATES the headache \u2014 so "something stronger" or more frequent painkillers makes it WORSE, not better. This is the diagnosis to make rather than escalate.' },
        { topic:'Manage MOH \u2014 withdraw the overused drug', text:'Management of MOH: EXPLAIN that the painkillers are now causing the daily headache, and support WITHDRAWAL of the overused acute medication \u2014 abrupt or tapered per drug (simple analgesics/triptans often stopped abruptly; opioids tapered) \u2014 with clear WARNING that the headache (and sometimes nausea/sleep disturbance) typically WORSENS for days-to-weeks before improving, which is expected and temporary. Provide support, a plan, and review; many improve substantially after withdrawal.' },
        { topic:'Optimise genuine migraine management', text:'Alongside withdrawal, optimise MIGRAINE care: limit acute treatment to avoid recurrence of overuse (an effective acute agent used sparingly, e.g. a triptan + NSAID on \u226410 days/month), consider PROPHYLAXIS if frequent (propranolol, amitriptyline, or topiramate \u2014 note TOPIRAMATE is teratogenic and reduces contraceptive efficacy, so counsel/contraception; candesartan as alternative), address triggers/sleep/hydration/caffeine, and use a HEADACHE DIARY. Lifestyle and prophylaxis reduce the need for acute drugs.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 she wants something STRONGER, not realising the painkillers are the problem; she is desperate and frustrated. The skill is to exclude red flags, make the MOH diagnosis, explain compassionately why stronger/more frequent painkillers worsen it, support a withdrawal plan with realistic expectations, optimise migraine prophylaxis, and safety-net \u2014 not to escalate analgesia.' },
      ],
      ice:{
        ideas:'She needs a STRONGER painkiller because her usual ones have stopped working.',
        concerns:'Daily disabling headache, frustration ("end of my tether"), impact on life; fear nothing will help.',
        expectations:'A stronger analgesic. What she needs: red-flag exclusion, the MOH diagnosis explained, a supported withdrawal plan with realistic expectations, optimised migraine prophylaxis, and safety-netting \u2014 not stronger painkillers.'
      },
      cues:['Long-standing migraine now near-DAILY headache + frequent codeine/triptan use \u2014 medication-overuse headache; the painkillers perpetuate it.','Exclude red flags first (thunderclap, focal neuro/papilloedema, systemic features, new headache >50/pattern change, GCA).','"Give me something stronger" \u2014 the opposite of what helps; support withdrawal (warn of transient worsening) + optimise prophylaxis.']
    },
    checkpoints:[
      { dom:'tasks', text:'EXCLUDES secondary/red-flag headache FIRST (thunderclap, focal neurology/papilloedema/raised-ICP features, systemic features, new headache >50 or pattern change, GCA) before attributing to primary headache' },
      { dom:'tasks', text:'Recognises MIGRAINE features and that the pattern has changed to near-daily, prompting the second diagnosis' },
      { dom:'tasks', text:'Diagnoses MEDICATION-OVERUSE HEADACHE \u2014 near-daily headache with frequent acute analgesic/triptan use (triptans/opioids/combination \u226510 days/month or simple analgesics \u226515 days/month, >3 months) \u2014 and that the overused medication PERPETUATES it' },
      { dom:'tasks', text:'Manages MOH by EXPLAINING the cycle and supporting WITHDRAWAL of the overused acute drug (abrupt or tapered per drug) with clear WARNING of transient worsening before improvement \u2014 not escalating analgesia' },
      { dom:'tasks', text:'Optimises genuine migraine management \u2014 sparing acute treatment, PROPHYLAXIS (propranolol/amitriptyline/topiramate with teratogenicity/contraception caution; candesartan alt), triggers/sleep/lifestyle, headache diary' },
      { dom:'rto',   text:'Responds compassionately to her desperation, explains why "something stronger" worsens MOH without sounding dismissive, and supports a difficult withdrawal plan' },
      { dom:'rto',   text:'Sets realistic expectations (headache worsens transiently then improves), checks understanding, and agrees a shared plan with follow-up' },
      { dom:'gs',    text:'Safety-nets and follows up: red flags warranting urgent review (thunderclap, new neuro signs, systemic features), the withdrawal/prophylaxis plan with review, headache diary, and support \u2014 diagnosing and breaking the MOH cycle, not escalating painkillers' },
    ],
    worked:[
      { lbl:'Exclude the sinister first', txt:'"I\u2019m sorry it\u2019s this relentless. First, a few safety checks: any sudden \u2018worst-ever\u2019 headaches, headaches worse in the morning or when lying down, vomiting, visual changes, weakness, or anything new and neurological? \u2026 No. Good \u2014 that\u2019s reassuring."' },
      { lbl:'Name the real problem', txt:'"Here\u2019s the thing that will sound counter-intuitive: I think the daily headache is now being driven by the painkillers themselves \u2014 it\u2019s called medication-overuse headache. When you take acute painkillers or migraine tablets most days, they flip into causing a constant headache."' },
      { lbl:'Why not stronger', txt:'"So a stronger or more frequent painkiller is exactly the wrong move \u2014 it would deepen the problem. The way out is actually to come OFF the overused painkillers, which I know sounds frightening when you\u2019re in pain."' },
      { lbl:'The withdrawal plan + warning', txt:'"Let\u2019s plan it together. We\u2019ll stop the co-codamol and limit the migraine tablets. I have to be honest \u2014 your headache will likely get worse for a week or two before it gets better. That\u2019s the medication clearing, it\u2019s expected, and most people improve a lot afterwards."' },
      { lbl:'Optimise migraine', txt:'"At the same time, let\u2019s treat the underlying migraine properly \u2014 a daily preventer like propranolol or amitriptyline to reduce attacks, keeping acute treatment to no more than a couple of days a week, and a headache diary to spot triggers and track progress."' },
      { lbl:'Safety-net + support', txt:'"I\u2019ll review you through this \u2014 you won\u2019t be on your own. If you get a sudden severe headache, any weakness, vision or speech changes, or it\u2019s simply not improving as expected, come back. We\u2019re breaking a cycle here, and it does work."' },
    ],
    learning:'A near-daily headache in someone with a primary headache disorder who uses acute analgesics or triptans frequently is the picture of MEDICATION-OVERUSE HEADACHE (MOH), but the FIRST step is always to EXCLUDE secondary/red-flag headache: thunderclap onset (SAH), new focal neurology or raised-ICP/papilloedema features (morning headache, worse lying/Valsalva, vomiting), systemic features (fever, weight loss, immunosuppression, cancer history), a new headache over 50 or a significant change in pattern, and GCA features in older patients. Recognise MIGRAINE (moderate-severe, often unilateral/throbbing, with nausea and photophobia/phonophobia, aggravated by activity, \u00b1 aura) and note when an episodic pattern has become near-daily. The key second diagnosis is MOH: a chronic daily/near-daily headache where triptans/opioids/combination analgesics are used on \u226510 days/month (or simple analgesics on \u226515 days/month) for over 3 months, with the OVERUSED MEDICATION now PERPETUATING the headache \u2014 so "something stronger" or more frequent painkillers makes it worse, and the diagnosis must be made rather than the analgesia escalated. Manage MOH by explaining the cycle and supporting WITHDRAWAL of the overused acute drug (abrupt or tapered per drug \u2014 simple analgesics/triptans often stopped abruptly, opioids tapered), with a clear warning that the headache typically WORSENS for days-to-weeks before improving (expected and temporary), plus support and review. Simultaneously optimise migraine care \u2014 sparing acute treatment to avoid re-overuse, PROPHYLAXIS where frequent (propranolol, amitriptyline, topiramate \u2014 noting topiramate\u2019s teratogenicity and reduced contraceptive efficacy; candesartan as an alternative), trigger/sleep/lifestyle measures and a headache diary. The hidden agenda is the desperate wish for a stronger painkiller; explain compassionately why that worsens MOH, support a realistic withdrawal plan, and safety-net for red flags. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE CG150 headaches \u00b7 migraine diagnosis & prophylaxis \u00b7 medication-overuse headache \u00b7 secondary-headache red flags (no NG12 link)',
      points:[
        { h:'Red flags first', t:'Exclude secondary headache: thunderclap (SAH), focal neuro/papilloedema/raised-ICP features, systemic features (fever/weight loss/immunosuppression/cancer), new headache >50 or pattern change, GCA. Then diagnose primary headache.' },
        { h:'Recognise migraine', t:'Moderate-severe, often unilateral/throbbing, nausea, photophobia/phonophobia, activity-aggravated, \u00b1 aura, hours-to-days, episodic \u2014 here changed to near-daily.' },
        { h:'Diagnose MOH', t:'Chronic daily/near-daily headache with frequent acute drug use: triptans/opioids/combination analgesics \u226510 days/month, or simple analgesics \u226515 days/month, >3 months. The overused drug perpetuates the headache.' },
        { h:'Withdraw, don\u2019t escalate', t:'Explain the cycle; withdraw the overused acute drug (abrupt or tapered per drug); warn the headache worsens transiently (days-weeks) before improving. Do not give "something stronger".' },
        { h:'Optimise migraine', t:'Spare acute treatment (\u226410 days/month); prophylaxis if frequent (propranolol, amitriptyline, topiramate \u2014 teratogenic/contraceptive caution; candesartan alt); triggers/sleep/lifestyle; headache diary.' },
        { h:'Compassion & realism', t:'Acknowledge desperation; explain why stronger painkillers worsen MOH; support a difficult withdrawal with realistic expectations and review.' },
        { h:'Never do', t:'Never escalate analgesia for a daily headache without considering MOH; never skip the red-flag screen; never withdraw without warning/ support; never prescribe topiramate without contraception/teratogenicity counselling.' },
        { h:'Safety-net & follow-up', t:'Urgent review for thunderclap/new neuro/systemic features; withdrawal + prophylaxis plan with review; headache diary; ongoing support through the transient worsening.' }
      ]
    }
  };

  /* ============ 218. F2F — Peripheral neuropathy: glove-and-stocking numbness, find the cause ============ */
  const c218 = {
    id:'peripheral-neuropathy', title:'"My feet have gone numb and tingly \u2014 it\u2019s creeping up, and now my fingers too"', type:'video', duration:12,
    meta:{ age:58, sex:'M', setting:'Face-to-face \u2014 progressive distal sensory symptoms.', system:'Neurology \u2014 peripheral neuropathy: the glove-and-stocking pattern & finding the cause' },
    brief:'Mr Vincent Oyelaran, 58, describes several months of NUMBNESS and TINGLING starting in both feet and creeping symmetrically UP the legs, now affecting the fingertips \u2014 a "GLOVE-AND-STOCKING" distribution; he drinks heavily and is overweight. The examinable task is to recognise a likely peripheral (sensory) NEUROPATHY in a glove-and-stocking pattern, and \u2014 the core skill \u2014 to systematically SEARCH FOR THE CAUSE rather than just label it: DIABETES (the commonest \u2014 check HbA1c), ALCOHOL excess (his heavy drinking), vitamin B12/folate DEFICIENCY, hypothyroidism, renal/hepatic disease, drugs/toxins, and (less commonly) inflammatory/immune (e.g. CIDP/Guillain-Barr\u00e9 spectrum), paraproteinaemia, or hereditary causes. Take the history, examine (sensory loss, reflexes, weakness, gait, signs of cause), and order targeted tests (HbA1c/glucose, B12/folate, U&E, LFTs/GGT, TFTs, FBC, ESR, B12; consider others). Recognise RED FLAGS needing urgent referral (rapidly progressive/ascending weakness \u2014 Guillain-Barr\u00e9; autonomic involvement; asymmetry/motor predominance), give foot-care/safety advice, address the modifiable causes (alcohol, glycaemia, B12), and refer to neurology where the cause is unclear or features are atypical/severe. No NG12 cancer link (though a paraproteinaemia work-up would be part of the cause search).',
    script:{
      opening:'"For the last few months my feet have felt numb and tingly, like walking on cotton wool, and it\u2019s slowly creeping up my legs \u2014 and now the tips of my fingers are starting too. It\u2019s both sides. I stubbed my toe badly last week and barely felt it. What\u2019s causing it, doc?"',
      facts:[
        { topic:'Recognise the glove-and-stocking pattern', text:'CORE \u2014 SYMMETRICAL, distal, length-dependent sensory loss/tingling that starts in the FEET and ascends, later involving the hands ("GLOVE-AND-STOCKING"), is the classic pattern of a peripheral (typically sensory, length-dependent) POLYNEUROPATHY. Reduced sensation (including not feeling injury, as he describes) and diminished ankle reflexes support it. The key task is not the label but finding the CAUSE.' },
        { topic:'Search for the cause \u2014 systematically', text:'KEY \u2014 systematically seek the cause rather than just diagnose "neuropathy": DIABETES (the commonest cause \u2014 HbA1c/glucose), ALCOHOL excess (relevant here \u2014 quantify intake), vitamin B12/folate DEFICIENCY, HYPOTHYROIDISM, chronic kidney/liver disease, DRUGS/TOXINS (e.g. some chemotherapy, isoniazid, alcohol), and less commonly inflammatory/immune (CIDP), paraproteinaemia/myeloma, vasculitis, or hereditary neuropathy. The history (alcohol, diabetes risk, drugs, diet, family history) directs the work-up.' },
        { topic:'Examine appropriately', text:'Examine: distal sensation (light touch, pinprick, vibration, proprioception), REFLEXES (often reduced/absent ankle jerks), any weakness or wasting, GAIT/balance (sensory ataxia, Romberg), foot health (ulcers/deformity), and signs pointing to a cause (alcohol stigmata, thyroid, anaemia). Distinguish a sensory length-dependent neuropathy from mononeuropathy/radiculopathy and from central causes.' },
        { topic:'Targeted investigations', text:'Order targeted tests: HbA1c/fasting glucose, vitamin B12 and folate, U&E (renal), LFTs/GGT (alcohol/liver), TFTs, FBC, ESR/CRP; consider serum protein electrophoresis/paraprotein, B1/thiamine status, HIV, and others guided by the picture. Nerve conduction studies/neurology if the cause is unclear, the pattern atypical, or features are severe/progressive.' },
        { topic:'Red flags & referral', text:'Recognise RED FLAGS needing URGENT assessment: RAPIDLY progressive or ASCENDING weakness (Guillain-Barr\u00e9 syndrome \u2014 a neurological emergency, watch breathing/bulbar), prominent MOTOR involvement, marked ASYMMETRY, autonomic features, or acute onset. Refer to NEUROLOGY where the cause is unclear, the presentation atypical/severe, or red flags are present; routine cause-directed work-up in primary care otherwise.' },
        { topic:'Manage modifiable causes + safety + agenda', text:'Address the MODIFIABLE causes: ALCOHOL reduction (and thiamine), glycaemic control if diabetic, B12/folate replacement if deficient, thyroid treatment. Give FOOT-CARE/safety advice (reduced sensation \u2192 injury/burn/ulcer risk \u2014 check feet, suitable footwear), and neuropathic-pain treatment if painful. HIDDEN AGENDA \u2014 he wants to know the cause; the skill is to take it seriously, search systematically, address his alcohol/glycaemia honestly but non-judgementally, and refer appropriately. No NG12 cancer pathway applies (paraprotein work-up is part of the cause search).' },
      ],
      ice:{
        ideas:'Something is causing the creeping numbness; he wants to know what.',
        concerns:'Loss of sensation (injuring himself unnoticed); whether it will progress; what it means.',
        expectations:'A cause and a fix. What he needs: recognition of a glove-and-stocking neuropathy, a systematic cause search (diabetes, alcohol, B12, thyroid, etc.), red-flag screen, modifiable-cause management, foot-care/safety advice, and neurology referral if unclear/atypical.'
      },
      cues:['Symmetrical distal numbness/tingling starting in the feet and ascending, now fingertips, reduced sensation \u2014 glove-and-stocking peripheral neuropathy.','Find the CAUSE: diabetes (HbA1c), alcohol (heavy drinker), B12/folate, thyroid, renal/liver, drugs \u2014 history + targeted bloods.','Red flags = rapidly progressive/ascending weakness (Guillain-Barr\u00e9), motor/asymmetric/autonomic \u2192 urgent neurology; foot-care safety advice.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises a GLOVE-AND-STOCKING peripheral (length-dependent sensory) NEUROPATHY \u2014 symmetrical distal numbness/tingling starting in the feet, ascending, now in the fingertips \u2014 with reduced sensation' },
      { dom:'tasks', text:'SYSTEMATICALLY searches for the CAUSE \u2014 diabetes (HbA1c), alcohol excess, B12/folate deficiency, hypothyroidism, renal/liver disease, drugs/toxins, and less common inflammatory/paraprotein/hereditary causes \u2014 directed by history' },
      { dom:'tasks', text:'EXAMINES appropriately (distal sensation incl. vibration/proprioception, reflexes/ankle jerks, weakness/wasting, gait/Romberg, foot health, signs of a cause) and distinguishes from mononeuropathy/radiculopathy/central causes' },
      { dom:'tasks', text:'Orders TARGETED investigations (HbA1c/glucose, B12/folate, U&E, LFTs/GGT, TFTs, FBC, ESR; consider protein electrophoresis/paraprotein, thiamine, HIV) and nerve conduction/neurology if cause unclear/atypical' },
      { dom:'tasks', text:'Recognises RED FLAGS (rapidly progressive/ascending weakness \u2014 Guillain-Barr\u00e9; motor-predominant, asymmetric, autonomic, acute) needing urgent referral, and refers neurology where unclear/atypical/severe' },
      { dom:'tasks', text:'Manages MODIFIABLE causes (alcohol reduction + thiamine, glycaemic control, B12/folate/thyroid replacement) and gives FOOT-CARE/safety advice (injury/burn/ulcer risk) \u00b1 neuropathic-pain treatment' },
      { dom:'rto',   text:'Takes the symptoms seriously, explores and addresses alcohol/glycaemia honestly but NON-JUDGEMENTALLY, and explains the cause-search plan clearly' },
      { dom:'gs',    text:'Safety-nets and follows up: red flags warranting urgent review (progressive/ascending weakness, breathing/swallowing problems), results and any neurology referral, foot-care safety, modifiable-cause plan, and review \u2014 finding the cause, not just labelling neuropathy' },
    ],
    worked:[
      { lbl:'Name the pattern', txt:'"What you\u2019re describing \u2014 numbness starting in both feet, creeping up, now in your fingertips, and not feeling that stubbed toe \u2014 is a nerve problem we call a peripheral neuropathy, in a \u2018glove-and-stocking\u2019 pattern. The important job now is to find WHY, because that guides treatment."' },
      { lbl:'Search for the cause', txt:'"The common causes are diabetes, heavy alcohol, low vitamin B12, and thyroid problems, among others. Can we talk honestly about your drinking \u2014 it\u2019s relevant, not a telling-off? And I\u2019ll check your blood sugar, B12, thyroid, kidneys and liver."' },
      { lbl:'Examine', txt:'"Let me test the feeling, vibration and reflexes in your feet and hands, check your balance, and look at your feet themselves \u2014 that tells me how far it\u2019s gone and helps pin the cause."' },
      { lbl:'Red-flag check', txt:'"One thing I need to ask: any actual WEAKNESS, or is it spreading quickly upward, any trouble breathing or swallowing? \u2026 No. If that ever happened it would be urgent \u2014 but your gradual, sensation-only pattern is more typical of the common causes."' },
      { lbl:'Modifiable + safety', txt:'"The good news: several causes are treatable \u2014 cutting down alcohol (with a vitamin called thiamine), controlling sugar, replacing B12. And because you can\u2019t feel injuries well, check your feet daily, mind hot water and good footwear, to avoid burns and ulcers."' },
      { lbl:'Refer + safety-net', txt:'"I\u2019ll get the bloods, and if the cause isn\u2019t clear or anything\u2019s unusual, I\u2019ll refer you to neurology for nerve tests. Come back urgently if you develop weakness, it climbs quickly, or you get breathing or swallowing trouble. We\u2019ll review the results together."' },
    ],
    learning:'SYMMETRICAL, distal, length-dependent sensory loss and tingling that starts in the FEET and ascends, later involving the hands ("GLOVE-AND-STOCKING"), with reduced sensation (including unnoticed injury) and diminished ankle reflexes, is the classic pattern of a peripheral (typically sensory) POLYNEUROPATHY \u2014 and the core skill is to SEARCH SYSTEMATICALLY FOR THE CAUSE rather than simply apply the label. The major causes are DIABETES (the commonest \u2014 check HbA1c), ALCOHOL excess, vitamin B12/folate DEFICIENCY, HYPOTHYROIDISM, chronic kidney/liver disease, and DRUGS/TOXINS, with less common inflammatory/immune (CIDP), paraproteinaemia/myeloma, vasculitic and hereditary causes; the history (alcohol intake, diabetes risk, drugs, diet, family history) directs the work-up. Examine distal sensation (light touch, pinprick, vibration, proprioception), reflexes, any weakness/wasting, gait/balance (sensory ataxia, Romberg) and foot health, plus signs of an underlying cause, distinguishing a length-dependent neuropathy from mononeuropathy/radiculopathy and central causes. Order targeted tests \u2014 HbA1c/glucose, B12/folate, U&E, LFTs/GGT, TFTs, FBC, ESR, with serum protein electrophoresis/paraprotein, thiamine and HIV considered \u2014 and use nerve conduction studies/neurology referral where the cause is unclear, the pattern atypical, or features severe. Recognise RED FLAGS needing urgent assessment: rapidly progressive or ASCENDING weakness (Guillain-Barr\u00e9 syndrome \u2014 a neurological emergency, monitor breathing/bulbar function), prominent motor involvement, marked asymmetry, autonomic features or acute onset. Manage the MODIFIABLE causes (alcohol reduction with thiamine, glycaemic control, B12/folate/thyroid replacement), give FOOT-CARE/safety advice given the injury/burn/ulcer risk, treat neuropathic pain if present, and address alcohol/glycaemia honestly but non-judgementally. No NICE NG12 cancer pathway applies, though a paraprotein work-up forms part of the cause search.',
    knowledge:{
      guideline:'Peripheral neuropathy work-up \u00b7 glove-and-stocking pattern \u00b7 cause search (diabetes/alcohol/B12/thyroid) \u00b7 Guillain-Barr\u00e9 red flags (no NG12 link)',
      points:[
        { h:'Recognise the pattern', t:'Symmetrical distal length-dependent sensory loss/tingling starting in the feet, ascending, later hands ("glove-and-stocking"); reduced sensation and ankle reflexes. The task is finding the cause.' },
        { h:'Search the causes', t:'Diabetes (commonest \u2014 HbA1c), alcohol excess, B12/folate deficiency, hypothyroidism, renal/liver disease, drugs/toxins; less commonly inflammatory (CIDP), paraprotein/myeloma, vasculitis, hereditary. History directs work-up.' },
        { h:'Examine', t:'Distal sensation (touch/pinprick/vibration/proprioception), reflexes (ankle jerks), weakness/wasting, gait/Romberg, foot health, signs of cause. Distinguish from mononeuropathy/radiculopathy/central causes.' },
        { h:'Targeted tests', t:'HbA1c/glucose, B12/folate, U&E, LFTs/GGT, TFTs, FBC, ESR; consider protein electrophoresis/paraprotein, thiamine, HIV. Nerve conduction/neurology if unclear/atypical/severe.' },
        { h:'Red flags', t:'Rapidly progressive/ascending weakness (Guillain-Barr\u00e9 \u2014 emergency, monitor breathing/bulbar), motor-predominant, asymmetric, autonomic, acute onset \u2192 urgent referral.' },
        { h:'Manage & protect', t:'Modifiable causes: alcohol reduction + thiamine, glycaemic control, B12/folate/thyroid replacement. Foot-care/safety advice (injury/burn/ulcer risk); neuropathic-pain treatment if painful.' },
        { h:'Never do', t:'Never label "neuropathy" without a cause search; never miss diabetes/B12/alcohol; never overlook Guillain-Barr\u00e9 red flags; never neglect foot-care safety; never address alcohol judgementally.' },
        { h:'Safety-net & follow-up', t:'Urgent review for progressive/ascending weakness or breathing/swallowing problems; results and neurology referral if unclear; foot-care; modifiable-cause plan with review.' }
      ]
    }
  };

  /* ============ 219. F2F — Normal-pressure hydrocephalus: the reversible "dementia" triad ============ */
  const c219 = {
    id:'normal-pressure-hydrocephalus', title:'"Dad\u2019s gone unsteady and forgetful and he\u2019s started wetting himself \u2014 the family say it\u2019s just dementia"', type:'video', duration:12,
    meta:{ age:76, sex:'M', setting:'Video consultation \u2014 a son describing his father\u2019s decline (carer present/with patient).', system:'Neurology \u2014 normal-pressure hydrocephalus: the potentially reversible triad' },
    brief:'Mr Harold Friske, 76, brought by his son, has developed over several months a GAIT disturbance (broad-based, shuffling, "magnetic"/feet-stuck unsteadiness with falls), cognitive decline (forgetfulness, slowing) and URINARY incontinence; the family assume "it\u2019s just dementia/old age". The examinable task is to recognise the classic TRIAD of NORMAL-PRESSURE HYDROCEPHALUS (NPH) \u2014 gait disturbance + cognitive impairment + urinary incontinence ("wet, wobbly, wacky") \u2014 as a POTENTIALLY REVERSIBLE cause of a dementia-like picture that should not be dismissed as ageing/Alzheimer\u2019s, to assess and EXCLUDE other causes of the same features (so still do a dementia/falls/incontinence work-up: medication review, B12/folate/TFTs/calcium/glucose, depression, Parkinson\u2019s, cerebrovascular disease, delirium causes), to recognise that the GAIT disturbance is typically the EARLIEST and most prominent feature, and to refer for NEUROLOGY/specialist assessment and brain imaging (CT/MRI showing ventricular enlargement out of proportion to atrophy) \u2014 because CSF diversion (shunt) can improve symptoms, especially gait, in selected patients. The skill is NOT accepting "just dementia", recognising the reversible triad, and referring \u2014 while still doing a thorough reversible-cause work-up and supporting the family/carer. No NG12 cancer link.',
    script:{
      opening:'(Son, father present) "Honestly we think Dad\u2019s just got dementia like Mum did \u2014 he\u2019s forgetful and slow. But what\u2019s really changed is his walking: he\u2019s gone really unsteady, shuffling like his feet are stuck to the floor, and he\u2019s had a couple of falls. And now \u2014 it\u2019s upsetting \u2014 he\u2019s started wetting himself. The family keep saying it\u2019s just old age. Is there any point even looking into it?"',
      facts:[
        { topic:'Recognise the NPH triad \u2014 don\u2019t accept "just dementia"', text:'CORE \u2014 the combination of GAIT disturbance + COGNITIVE impairment + URINARY incontinence (the classic triad, "wet, wobbly, wacky") is the picture of NORMAL-PRESSURE HYDROCEPHALUS (NPH) \u2014 a POTENTIALLY REVERSIBLE cause of a dementia-like syndrome. The crucial teaching is NOT to dismiss this as "just dementia/old age", because NPH is treatable (CSF shunting can improve symptoms, especially gait) \u2014 missing it loses a reversible opportunity.' },
        { topic:'Gait is usually the earliest/dominant feature', text:'KEY \u2014 in NPH the GAIT disturbance is typically the EARLIEST and most prominent feature: a broad-based, shuffling, slow, "magnetic"/feet-stuck-to-the-floor gait with unsteadiness and falls. The son\u2019s emphasis on the WALKING (more than the memory) is a classic pointer \u2014 a gait-led decline with incontinence and cognitive change should raise NPH rather than be attributed to Alzheimer\u2019s/ageing.' },
        { topic:'Still do the reversible-cause work-up', text:'Assess and EXCLUDE other causes of the same triad/dementia-like picture: medication review (sedatives, anticholinergics), bloods (B12/folate, TFTs, calcium, glucose, U&E, FBC), depression (pseudodementia), Parkinson\u2019s disease/parkinsonism, cerebrovascular disease, delirium (infection \u2014 e.g. UTI causing incontinence/confusion), and other reversible contributors. A proper dementia/falls/continence work-up is part of good practice alongside considering NPH.' },
        { topic:'Refer for imaging & specialist assessment', text:'Refer for NEUROLOGY/specialist (memory/older-adult) assessment and BRAIN IMAGING (CT/MRI) \u2014 NPH shows ventricular enlargement OUT OF PROPORTION to cortical atrophy. Selected patients benefit from CSF diversion (ventriculoperitoneal SHUNT), with specialist assessment (including CSF tap-test response) determining suitability; gait often responds best. Don\u2019t leave a treatable cause un-investigated.' },
        { topic:'Support the family/carer', text:'Support the SON/CARER: acknowledge the distress (especially the incontinence and falls), counter the family\u2019s "just old age" fatalism with the possibility of a reversible cause, manage expectations realistically (not all NPH improves, and there may be coexisting pathology), arrange falls/continence support meanwhile, and address carer needs. Engage the patient with dignity, not only the son.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 the family\u2019s "is there any point looking into it?" reflects therapeutic NIHILISM and assumption of irreversible dementia. The skill is to recognise the NPH triad, explain that some causes of these symptoms are TREATABLE and worth investigating, do the reversible-cause work-up, refer for imaging/specialist assessment, and support the family \u2014 not to accept the "just dementia" framing.' },
      ],
      ice:{
        ideas:'(Family) it\u2019s "just dementia/old age" and not worth investigating.',
        concerns:'Distress at the decline, falls and incontinence; the assumption nothing can be done.',
        expectations:'(Implicitly) to be told there\u2019s nothing to do. What is needed: recognition of the potentially reversible NPH triad, a reversible-cause work-up, referral for imaging/specialist assessment, and family support \u2014 not acceptance of "just dementia".'
      },
      cues:['Gait disturbance (shuffling/"magnetic", falls) + cognitive decline + urinary incontinence \u2014 the NPH triad ("wet, wobbly, wacky"); potentially reversible.','Gait is usually the EARLIEST/dominant feature \u2014 a walking-led decline with incontinence should raise NPH, not be dismissed as Alzheimer\u2019s/ageing.','Still do the reversible-cause work-up (meds, B12/TFTs/calcium, depression, Parkinson\u2019s, delirium/UTI); refer for CT/MRI + specialist \u2014 shunt can help selected patients.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the NORMAL-PRESSURE HYDROCEPHALUS triad (gait disturbance + cognitive impairment + urinary incontinence, "wet, wobbly, wacky") as a POTENTIALLY REVERSIBLE cause \u2014 not accepting "just dementia/old age"' },
      { dom:'tasks', text:'Recognises that the GAIT disturbance (broad-based, shuffling, "magnetic", falls) is typically the EARLIEST/most prominent feature and a key pointer to NPH over Alzheimer\u2019s/ageing' },
      { dom:'tasks', text:'Still performs a REVERSIBLE-CAUSE work-up \u2014 medication review, bloods (B12/folate, TFTs, calcium, glucose, U&E, FBC), depression, Parkinson\u2019s/parkinsonism, cerebrovascular disease, delirium/UTI \u2014 alongside considering NPH' },
      { dom:'tasks', text:'Refers for NEUROLOGY/specialist assessment and BRAIN IMAGING (CT/MRI \u2014 ventricular enlargement out of proportion to atrophy), knowing CSF shunting can improve selected patients (gait responds best)' },
      { dom:'tasks', text:'Arranges interim FALLS and CONTINENCE support and addresses safety, while investigation/referral proceeds' },
      { dom:'rto',   text:'Counters the family\u2019s "just old age / is there any point" NIHILISM with the possibility of a reversible cause, while managing expectations realistically (not all NPH improves; coexisting pathology possible)' },
      { dom:'rto',   text:'Supports the distressed SON/CARER, engages the PATIENT with dignity (not only the son), and checks understanding' },
      { dom:'gs',    text:'Safety-nets and follows up: referral for imaging/specialist assessment, reversible-cause results, falls/continence support, carer support, and review \u2014 recognising and investigating a potentially reversible triad, not accepting "just dementia"' },
    ],
    worked:[
      { lbl:'Challenge "just dementia"', txt:'"I\u2019m really glad you brought him, and I want to gently challenge the \u2018just old age\u2019 idea. The particular combination \u2014 the walking going first and badly, plus the memory AND the wetting \u2014 can be a specific condition called normal-pressure hydrocephalus, which, unlike most dementias, can sometimes be IMPROVED with treatment."' },
      { lbl:'Why the gait matters', txt:'"What makes me think of it is that his WALKING is the standout problem \u2014 shuffling, feet stuck to the floor, falls \u2014 often more than the memory. In ordinary dementia the memory usually leads; here the gait does. That\u2019s worth investigating, not dismissing."' },
      { lbl:'Still check the reversibles', txt:'"I\u2019ll also do a proper check for other treatable things \u2014 review his medications, blood tests for vitamin levels, thyroid and calcium, screen for depression and a water infection, which can all cause similar problems."' },
      { lbl:'Refer for the scan', txt:'"The key next step is a brain scan and a specialist assessment \u2014 in this condition the scan shows a particular pattern, and selected people benefit from a small procedure to drain the fluid, which can improve the walking especially. I\u2019ll refer him."' },
      { lbl:'Honest expectations', txt:'"I want to be honest \u2014 not everyone improves, and there can be more than one thing going on. But it would be wrong not to look, because there\u2019s a real chance of helping. \u2018Is there any point?\u2019 \u2014 yes, there genuinely is."' },
      { lbl:'Support + safety-net', txt:'(To Mr Friske and son) "Meanwhile let\u2019s get falls support and help with the continence \u2014 that\u2019s important for dignity and safety. How are you managing as a family? I\u2019ll arrange the referral and tests and review you. Come back sooner if he falls badly or becomes suddenly more confused."' },
    ],
    learning:'The combination of GAIT disturbance + COGNITIVE impairment + URINARY incontinence \u2014 the classic triad of NORMAL-PRESSURE HYDROCEPHALUS (NPH), remembered as "wet, wobbly, wacky" \u2014 is a POTENTIALLY REVERSIBLE cause of a dementia-like syndrome that must NOT be dismissed as "just dementia/old age", because CSF diversion (shunting) can improve symptoms (especially gait) in selected patients, and missing it loses a reversible opportunity. Crucially, the GAIT disturbance is typically the EARLIEST and most prominent feature \u2014 a broad-based, shuffling, slow, "magnetic"/feet-stuck gait with unsteadiness and falls \u2014 so a gait-led decline accompanied by incontinence and cognitive change should raise NPH rather than be attributed to Alzheimer\u2019s or ageing. Still perform a thorough REVERSIBLE-CAUSE work-up for the same picture: medication review (sedatives/anticholinergics), bloods (B12/folate, TFTs, calcium, glucose, U&E, FBC), depression (pseudodementia), Parkinson\u2019s/parkinsonism, cerebrovascular disease, and delirium (e.g. UTI causing confusion/incontinence). Refer for NEUROLOGY/specialist assessment and BRAIN IMAGING (CT/MRI showing ventricular enlargement out of proportion to cortical atrophy), with specialist assessment (including CSF tap-test response) determining shunt suitability. Support the distressed family/carer \u2014 counter the "just old age / is there any point?" nihilism with the possibility of a reversible cause while managing expectations realistically (not all NPH improves; coexisting pathology is possible), arrange interim falls and continence support, address carer needs, and engage the patient with dignity rather than only the relative. The hidden agenda is therapeutic nihilism; recognise the triad, investigate, refer, and support \u2014 not accept "just dementia". No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Normal-pressure hydrocephalus (triad) \u00b7 reversible-cause dementia work-up \u00b7 imaging & shunt referral \u00b7 falls/continence support (no NG12 link)',
      points:[
        { h:'Recognise the triad', t:'Gait disturbance + cognitive impairment + urinary incontinence ("wet, wobbly, wacky") = normal-pressure hydrocephalus \u2014 a potentially reversible dementia-like syndrome. Don\u2019t dismiss as "just dementia/old age".' },
        { h:'Gait leads', t:'Gait disturbance (broad-based, shuffling, "magnetic", falls) is usually earliest/most prominent. A gait-led decline with incontinence should raise NPH over Alzheimer\u2019s/ageing.' },
        { h:'Reversible-cause work-up', t:'Medication review; bloods (B12/folate, TFTs, calcium, glucose, U&E, FBC); depression; Parkinson\u2019s/parkinsonism; cerebrovascular disease; delirium/UTI. Do this alongside considering NPH.' },
        { h:'Imaging & referral', t:'Refer for neurology/specialist assessment and CT/MRI (ventricular enlargement out of proportion to atrophy). Selected patients benefit from VP shunt (CSF tap-test guides suitability); gait responds best.' },
        { h:'Realistic expectations', t:'Not all NPH improves and coexisting pathology is common \u2014 but investigation is worthwhile given the reversible potential. Counter therapeutic nihilism honestly.' },
        { h:'Support & dignity', t:'Support the family/carer, arrange interim falls and continence support (dignity/safety), address carer needs, and engage the patient directly.' },
        { h:'Never do', t:'Never accept "just dementia/old age" for the triad; never skip the reversible-cause work-up; never fail to refer for imaging; never neglect falls/continence support or the carer.' },
        { h:'Safety-net & follow-up', t:'Referral for imaging/specialist assessment; reversible-cause results; falls/continence and carer support; review; sooner review for bad falls or acute confusion.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c216, c217, c218, c219);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'tia-resolved': {
      ceg: ['Urgent & unscheduled care', 'Older adults'],
      stem: {
        name: 'Bernard Cole', age: '69 years \u00b7 male',
        pmh: ['\u26a0 Yesterday: R arm weakness + slurred speech ~30 min, FULLY resolved', 'Hypertension; ex-smoker', 'Attends only because wife insisted; thinks "no harm done"'],
        meds: ['Amlodipine'],
        allergy: 'NKDA',
        recent: '"My arm went weak and speech slurred for half an hour \u2014 but it\u2019s fine now, no harm done?"',
        reason: 'Video \u2014 a resolved transient neurological episode.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Reframe "no harm done"', d:'Resolved focal deficit = TIA: emergency + stroke warning; resolution is why we act NOW.' },
        { t:'2\u20134',  h:'History + exam', d:'Deficit/duration/resolution, FAST, amaurosis, palpitations; BP, pulse (AF), carotids, neuro.' },
        { t:'4\u20136',  h:'Aspirin + urgent referral', d:'Aspirin 300 mg now; specialist TIA assessment within 24h (NICE).' },
        { t:'6\u20139',  h:'Prevention + driving', d:'Statin/BP/AF/smoking; MUST NOT DRIVE (Group 1 \u22651 month; Group 2 stricter); document.' },
        { t:'9\u201312', h:'Safety-net', d:'999 if deficit recurs/persists (FAST); validate wife\u2019s prompt; review.' }
      ],
      wordPics: {
        fail: 'Reassures because it resolved; no aspirin, no urgent referral, no driving advice \u2014 misses an imminent-stroke warning.',
        pass: 'Recognises the TIA, gives aspirin and arranges within-24h assessment, and advises no driving.',
        exc:  'Firmly reframes "no harm done", takes a focused history/exam (incl. pulse for AF), gives aspirin 300 mg, arranges within-24h specialist assessment, covers secondary prevention and the DVLA no-driving rule, and safety-nets with 999/FAST advice.'
      },
      avoid: [
        { dont:'"It\u2019s resolved, so there\u2019s no harm done \u2014 let\u2019s just keep an eye on it."', instead:'"A resolved episode like this is a TIA \u2014 an emergency warning of stroke. I\u2019m giving you aspirin now and arranging specialist assessment within 24 hours."', why:'Reassuring because it resolved misses the highest-risk window for a completed stroke.' },
        { dont:'(No driving advice) ending without mentioning the DVLA.', instead:'"You must not drive \u2014 at least a month after a TIA for a car, longer if professional. I\u2019ll document that."', why:'Omitting the driving/DVLA advice is a safety and medicolegal failure.' },
        { dont:'(No AF check) not examining the pulse.', instead:'"Let me check your pulse \u2014 an irregular heartbeat would change your treatment."', why:'Missing AF misses a major, treatable stroke-risk factor (anticoagulation).' }
      ]
    },

    'migraine-moh': {
      ceg: ['Long-term conditions & cancer', 'Prescribing & pharmacology'],
      stem: {
        name: 'Rowena Page', age: '34 years \u00b7 female',
        pmh: ['Long-standing episodic migraine; now near-DAILY headache', '\u26a0 Taking co-codamol most days + triptans frequently', 'Wants "something stronger"'],
        meds: ['Co-codamol (frequent)', 'Sumatriptan (frequent)'],
        allergy: 'NKDA',
        recent: '"Headache nearly every day, taking painkillers constantly \u2014 nothing touches it, give me something stronger?"',
        reason: 'Face-to-face \u2014 frequent headaches with heavy analgesic use.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Red flags first', d:'Thunderclap, focal neuro/papilloedema, systemic, new>50/pattern change, GCA \u2014 exclude before MOH.' },
        { t:'2\u20134',  h:'Diagnose MOH', d:'Daily headache + frequent acute analgesic/triptan use = medication-overuse headache; the drugs perpetuate it.' },
        { t:'4\u20137',  h:'Withdraw, don\u2019t escalate', d:'Explain cycle; withdraw overused drug; warn of transient worsening before improvement.' },
        { t:'7\u20139',  h:'Optimise migraine', d:'Spare acute treatment; prophylaxis (propranolol/amitriptyline/topiramate \u2014 contraception caution); diary.' },
        { t:'9\u201312', h:'Support + safety-net', d:'Compassion, realistic expectations, review; urgent if thunderclap/new neuro/systemic.' }
      ],
      wordPics: {
        fail: 'Prescribes "something stronger" / more painkillers, deepening MOH; skips red-flag screen; doesn\u2019t recognise the overuse cycle.',
        pass: 'Excludes red flags, diagnoses MOH, supports withdrawal and starts migraine prophylaxis.',
        exc:  'Excludes secondary-headache red flags, diagnoses medication-overuse headache, explains and supports withdrawal with realistic warning of transient worsening, optimises migraine prophylaxis (with topiramate contraception caution), and safety-nets compassionately.'
      },
      avoid: [
        { dont:'"Let\u2019s try a stronger painkiller or more frequent triptans."', instead:'"The painkillers are now driving the daily headache \u2014 medication-overuse headache. The fix is coming off them, not stronger ones."', why:'Escalating analgesia worsens MOH \u2014 the opposite of what helps.' },
        { dont:'(No red-flag screen) assuming it\u2019s just migraine.', instead:'"Any thunderclap headaches, morning headaches with vomiting, new neurology or visual change?"', why:'A daily headache needs secondary-cause exclusion before a primary-headache label.' },
        { dont:'(No warning) stopping painkillers without explanation.', instead:'"Be ready \u2014 your headache will likely worsen for a week or two before it improves; that\u2019s expected."', why:'Without the warning/support, withdrawal fails as patients restart the overused drug.' }
      ]
    },

    'peripheral-neuropathy': {
      ceg: ['Long-term conditions & cancer', 'New & undifferentiated presentations'],
      stem: {
        name: 'Vincent Oyelaran', age: '58 years \u00b7 male',
        pmh: ['Months of symmetrical numbness/tingling from feet ascending, now fingertips (glove-and-stocking)', 'Reduced sensation (unnoticed toe injury)', 'Heavy alcohol use; overweight; ?diabetes'],
        meds: ['None regular'],
        allergy: 'NKDA',
        recent: '"My feet have gone numb and tingly \u2014 it\u2019s creeping up, and now my fingers too. What\u2019s causing it?"',
        reason: 'Face-to-face \u2014 progressive distal sensory symptoms.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Name the pattern', d:'Symmetrical distal ascending sensory loss = glove-and-stocking neuropathy; the task is the cause.' },
        { t:'2\u20135',  h:'Search the cause', d:'Diabetes (HbA1c), alcohol, B12/folate, thyroid, renal/liver, drugs; history-directed bloods.' },
        { t:'5\u20137',  h:'Examine + red flags', d:'Sensation/reflexes/gait/feet; red flags = progressive/ascending weakness (GBS), motor/asymmetric/autonomic.' },
        { t:'7\u20139',  h:'Modifiable + safety', d:'Alcohol+thiamine, glycaemia, B12/thyroid; foot-care/burn/ulcer safety; neuropathic-pain Rx.' },
        { t:'9\u201312', h:'Refer + safety-net', d:'Neurology/NCS if unclear/atypical; urgent if weakness/ascending/breathing-swallowing; review results.' }
      ],
      wordPics: {
        fail: 'Labels "neuropathy" and stops, or just treats pain, without searching for diabetes/alcohol/B12; misses Guillain-Barr\u00e9 red flags; no foot-care advice.',
        pass: 'Recognises the pattern, searches the common causes with targeted bloods, screens red flags, and gives foot-care advice.',
        exc:  'Recognises the glove-and-stocking pattern, systematically searches the causes (diabetes/alcohol/B12/thyroid/renal/drugs) with targeted bloods, examines and screens Guillain-Barr\u00e9 red flags, manages modifiable causes non-judgementally, gives foot-care safety advice, and refers neurology where unclear.'
      },
      avoid: [
        { dont:'"It\u2019s just nerve damage \u2014 here\u2019s something for the tingling."', instead:'"It\u2019s a glove-and-stocking neuropathy \u2014 the important thing is finding why: diabetes, alcohol, B12 and thyroid are the usual causes, so let\u2019s test."', why:'Treating symptoms without a cause search misses treatable/modifiable conditions.' },
        { dont:'(No red-flag screen) reassuring without asking about weakness/progression.', instead:'"Any actual weakness, or is it climbing quickly \u2014 any breathing or swallowing trouble?"', why:'Missing rapidly ascending weakness could miss Guillain-Barr\u00e9, an emergency.' },
        { dont:'(Judgemental) "You\u2019ve done this to yourself with the drinking."', instead:'"Alcohol is one relevant cause \u2014 no judgement \u2014 and cutting down, with a vitamin, genuinely helps."', why:'A judgemental approach to alcohol damages rapport and engagement.' }
      ]
    },

    'normal-pressure-hydrocephalus': {
      ceg: ['Older adults', 'New & undifferentiated presentations'],
      stem: {
        name: 'Harold Friske (son present)', age: '76 years \u00b7 male',
        pmh: ['Months: gait disturbance (shuffling/"magnetic", falls) + cognitive decline + urinary incontinence', 'Family assume "just dementia/old age"', 'Gait change prominent/early'],
        meds: ['None relevant'],
        allergy: 'NKDA',
        recent: '(Son) "Dad\u2019s unsteady, forgetful and wetting himself \u2014 the family say it\u2019s just dementia. Any point looking into it?"',
        reason: 'Video \u2014 a son describing his father\u2019s decline.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Challenge "just dementia"', d:'Gait + cognition + incontinence triad = possible NPH \u2014 potentially reversible; worth investigating.' },
        { t:'2\u20134',  h:'Gait leads', d:'Shuffling/"magnetic" gait prominent/early points to NPH over Alzheimer\u2019s/ageing.' },
        { t:'4\u20137',  h:'Reversible work-up', d:'Meds, B12/TFTs/calcium/glucose, depression, Parkinson\u2019s, cerebrovascular, delirium/UTI.' },
        { t:'7\u20139',  h:'Imaging + referral', d:'CT/MRI (ventricles out of proportion to atrophy) + specialist; shunt helps selected patients (gait best).' },
        { t:'9\u201312', h:'Support + safety-net', d:'Falls/continence support, carer support, dignity; realistic expectations; review.' }
      ],
      wordPics: {
        fail: 'Accepts "just dementia/old age", doesn\u2019t recognise the triad, no reversible work-up or imaging referral \u2014 misses a treatable cause.',
        pass: 'Recognises the NPH triad, does a reversible-cause work-up, and refers for imaging/specialist assessment.',
        exc:  'Recognises the potentially reversible NPH triad (gait-led), counters family nihilism, performs the reversible-cause work-up, refers for CT/MRI and specialist assessment, arranges falls/continence and carer support, and manages expectations realistically with dignity.'
      },
      avoid: [
        { dont:'"It does sound like dementia, sadly \u2014 there\u2019s not much we can do at his age."', instead:'"The walking-first pattern with incontinence can be a treatable condition called NPH \u2014 it\u2019s worth investigating with a scan."', why:'Accepting "just dementia" misses a potentially reversible cause.' },
        { dont:'(No reversible work-up) referring for memory clinic only.', instead:'"I\u2019ll also check medications, vitamin levels, thyroid, calcium and a water infection \u2014 all treatable mimics."', why:'Skipping the reversible-cause work-up misses common, fixable contributors.' },
        { dont:'(Talking only to the son) ignoring the patient.', instead:'(To Mr Friske) "How are you finding the walking yourself?"', why:'Excluding the patient from his own consultation undermines dignity and assessment.' }
      ]
    }

  });

})();
