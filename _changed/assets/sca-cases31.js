/* ============================================================
   Reasoning GP — Case Library batch 31: "Neurology one-offs"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   Emergencies: stroke (vs Bell's); first seizure + DVLA duty.
   No NG12 cancer link applies (correctly omitted).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases30.js.
   ============================================================ */

(function(){

  /* ============ 117. TELEPHONE — Facial weakness: Bell's vs stroke ============ */
  const c117 = {
    id:'facial-palsy-bell-stroke', title:'"Half my face has dropped \u2014 I look like I\u2019ve had a stroke"', type:'telephone', duration:12,
    meta:{ age:39, sex:'F', setting:'Telephone \u2014 sudden one-sided facial droop on waking.', system:'Urgent / Facial palsy (Bell\u2019s vs stroke)' },
    brief:'Mrs Priya Naidu, 39, woke today with the LEFT side of her face drooped \u2014 can\u2019t fully close the eye, mouth pulls to the right, dribbling tea. Terrified it\u2019s a stroke. On questioning: the FOREHEAD is also affected (can\u2019t raise the eyebrow/wrinkle that side), no arm/leg weakness, normal speech, no visual or sensory change. Mild ache behind the ear yesterday; ?altered taste. Recent viral cold. No vascular risk factors. Pregnant (28 weeks).',
    script:{
      opening:'(Frightened.) "Doctor, I woke up and half my face has gone \u2014 my eye won\u2019t close properly and my mouth\u2019s pulling to one side, tea\u2019s dribbling out. I\u2019m 39 and I\u2019m pregnant and I\u2019m terrified I\u2019m having a stroke. My nan had one and this is exactly how hers looked. Please \u2014 is this a stroke? What do I do?"',
      facts:[
        { topic:'The KEY discriminator',  text:'CRITICAL: in a lower-motor-neurone facial palsy (Bell\u2019s), the FOREHEAD IS INVOLVED (can\u2019t raise the eyebrow/wrinkle the forehead on the affected side) because the upper face has bilateral cortical innervation. In an upper-motor-neurone lesion (stroke), the forehead is SPARED (she can still wrinkle it). Here the forehead IS affected and there are no other neurological signs \u2014 pointing to Bell\u2019s palsy, not stroke.' },
        { topic:'Bell\u2019s features',       text:'Supportive of Bell\u2019s: acute onset, isolated unilateral facial weakness including the forehead, post-auricular ache, altered taste/hyperacusis, recent viral illness, no limb/speech/visual deficit. Bell\u2019s is a diagnosis of exclusion but the forehead involvement + isolated picture is reassuring against stroke.' },
        { topic:'Why still assess urgently', text:'Even though it looks like Bell\u2019s, sudden facial weakness needs prompt assessment to EXCLUDE stroke (FAST), examine fully, and confirm the forehead sign and absence of other deficits \u2014 and Bell\u2019s itself needs early treatment (steroids ideally within 72 h) and EYE PROTECTION. Consider Ramsay Hunt (vesicles, severe pain) and other causes (Lyme, parotid). In pregnancy, Bell\u2019s is more common; steroid use needs a senior/obstetric steer but is generally still offered.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 her terror is fuelled by her nan\u2019s stroke (mapped onto herself) AND a deeper, unspoken fear: that "something is wrong with the baby" or that whatever this is, or its treatment, will harm her pregnancy. She\u2019s also frightened of permanent facial disfigurement. Reassurance must address the stroke fear, the pregnancy fear, and the recovery outlook.' },
        { topic:'What she needs',       text:'Officially: to know if it\u2019s a stroke and what to do. What she needs: the forehead-sign reasoning explained so she\u2019s reassured it\u2019s very likely Bell\u2019s not stroke, prompt same-day assessment to confirm and exclude stroke, early steroid treatment + crucial EYE CARE, pregnancy-safe management, and the recovery prognosis (most recover well).' },
      ],
      ice:{
        ideas:'Her drooping face means she\u2019s having a stroke, like her nan.',
        concerns:'HIDDEN AGENDA \u2014 the nan\u2019s stroke mapped onto herself, PLUS an unspoken fear that something is wrong with the baby or that this/its treatment will harm the pregnancy; and fear of permanent facial disfigurement.',
        expectations:'To know if it\u2019s a stroke and what to do. What she actually needs: the forehead-sign reasoning (very likely Bell\u2019s), prompt assessment to exclude stroke, early steroids + eye protection, pregnancy-safe care, and recovery reassurance.'
      },
      cues:['Forehead INVOLVED (can\u2019t raise eyebrow) + isolated facial weakness, no other deficit \u2014 points to Bell\u2019s, not stroke.','Post-auricular ache, altered taste, recent virus, pregnant \u2014 supportive of Bell\u2019s palsy.','"Is it a stroke, like my nan? what about the baby?" \u2014 stroke fear + unspoken pregnancy fear to address.']
    },
    checkpoints:[
      { dom:'tasks', text:'Applies the KEY discriminator: establishes whether the FOREHEAD is involved \u2014 forehead involvement (can\u2019t raise eyebrow) with isolated facial weakness points to a lower-motor-neurone (Bell\u2019s) palsy, whereas forehead SPARING + other deficits suggests an upper-motor-neurone (stroke) lesion \u2014 and screens FAST/other neurology' },
      { dom:'tasks', text:'Still arranges PROMPT same-day assessment to EXCLUDE stroke and examine fully (confirm forehead sign, no limb/speech/visual/sensory deficit), rather than diagnosing Bell\u2019s purely over the phone \u2014 sudden facial weakness warrants urgent face-to-face evaluation' },
      { dom:'tasks', text:'Recognises and treats BELL\u2019S appropriately: early corticosteroids (ideally within 72 hours of onset) where indicated, and crucially EYE PROTECTION (lubricating drops/ointment, taping the eye at night) because incomplete eye closure risks exposure keratopathy \u2014 a commonly-missed essential' },
      { dom:'tasks', text:'Considers the differential/special cases: Ramsay Hunt syndrome (vesicles in/around the ear, severe pain \u2014 needs antivirals + steroids), Lyme disease, parotid lesions, and bilateral/other-cranial-nerve involvement (which would change the picture); and accounts for PREGNANCY (Bell\u2019s commoner; involve senior/obstetric advice on steroids)' },
      { dom:'tasks', text:'Gives an accurate PROGNOSIS: most people with Bell\u2019s recover well, especially with early treatment \u2014 directly addressing the disfigurement fear \u2014 while being honest that recovery can take weeks to months' },
      { dom:'rto',   text:'Responds to the stroke terror with the reassuring forehead-sign reasoning, and surfaces/addresses the unspoken pregnancy fear (the baby) \u2014 not just the facial diagnosis' },
      { dom:'rto',   text:'Balances genuine reassurance (very likely Bell\u2019s, good recovery) with the honesty that she still needs urgent assessment to be sure' },
      { dom:'gs',    text:'Safety-nets and follows up: same-day assessment; red flags that would change urgency (limb weakness, speech change, vomiting, drowsiness, vesicles, eye pain/visual change \u2192 urgent/999); eye-care instructions; pregnancy-safe treatment plan; review and recovery expectations' },
    ],
    worked:[
      { lbl:'Hear the fear, then the key question', txt:'"I can hear how frightening this is, and a drooping face naturally makes everyone think stroke \u2014 so let me ask the one question that helps most: can you raise your eyebrows and wrinkle your forehead on the drooped side? Try now. \u2026 You CAN\u2019T move that forehead. Okay \u2014 that\u2019s actually reassuring, and let me explain why."' },
      { lbl:'Explain the forehead sign', txt:'"With a stroke, the forehead usually still works because it gets signals from both sides of the brain \u2014 so the forehead is spared. When the WHOLE side of the face including the forehead is affected, like yours, it points instead to a nerve problem in the face itself, called Bell\u2019s palsy. That, plus no weakness in your arm or leg and normal speech, makes a stroke much less likely. The ache behind your ear and the recent cold fit Bell\u2019s too."' },
      { lbl:'Still get seen today', txt:'"Now \u2014 I\u2019m reassured, but I\u2019m not going to diagnose this down the phone. Sudden facial weakness needs you examined properly today, to be completely sure it\u2019s not a stroke and to start the right treatment. So I\u2019m arranging that urgently. Reassured, but careful \u2014 both at once."' },
      { lbl:'The eye \u2014 don\u2019t miss it', txt:'"One really important thing right now: if your eye won\u2019t close fully, it can dry out and get damaged. So use lubricating eye drops often during the day, ointment and gently tape the eye shut at night, and wear sunglasses outside. Protecting that eye matters as much as anything else \u2014 it\u2019s easy to overlook."' },
      { lbl:'The baby + treatment', txt:'"I suspect part of you is also frightened for the baby \u2014 is that right? Let me reassure you: Bell\u2019s is actually a bit more common in pregnancy and it does NOT harm the baby. There\u2019s a steroid treatment that works best started early, and we\u2019ll use it safely with advice from the pregnancy team. Your baby is not in danger from this."' },
      { lbl:'Prognosis + safety-net', txt:'"And the outlook: most people with Bell\u2019s recover well, especially treated early \u2014 it can take some weeks, occasionally a few months, but the great majority get their face back. If meanwhile you DO get arm or leg weakness, slurred speech, drowsiness, a blistery rash around the ear, or eye pain or vision changes \u2014 that\u2019s 999/urgent. Otherwise, let\u2019s get you seen today, protect that eye, and start treatment. You feared the worst; the likely answer is far kinder."' },
    ],
    learning:'Sudden one-sided facial droop forces the Bell\u2019s-vs-stroke discrimination, and the KEY sign is the FOREHEAD: in a lower-motor-neurone (Bell\u2019s) palsy the forehead is INVOLVED (can\u2019t raise the eyebrow) because the upper face has bilateral cortical innervation, whereas an upper-motor-neurone (stroke) lesion SPARES the forehead. Forehead involvement with isolated facial weakness and no other neurology (normal limbs, speech, vision), plus supportive features (post-auricular ache, altered taste, recent virus), points to Bell\u2019s \u2014 but sudden facial weakness still needs prompt same-day assessment to exclude stroke and examine fully. Treat Bell\u2019s with early corticosteroids (ideally within 72 h) and \u2014 crucially and commonly missed \u2014 EYE PROTECTION (lubrication, night taping) to prevent exposure keratopathy; consider Ramsay Hunt (vesicles, severe pain \u2192 add antivirals), Lyme and other causes, and manage pregnancy with senior/obstetric input. The examinable hidden agenda is twofold fear \u2014 a relative\u2019s stroke and an unspoken fear for the baby; reassure with the forehead-sign reasoning, address the pregnancy fear, give the good prognosis (most recover well), and safety-net stroke/Ramsay-Hunt/eye red flags.',
    knowledge:{
      guideline:'NICE CKS Bell\u2019s palsy · stroke (FAST) · Ramsay Hunt; facial nerve anatomy (UMN vs LMN)',
      points:[
        { h:'Forehead = the discriminator', t:'The upper face (forehead/orbicularis oculi) has bilateral cortical innervation. A LOWER-motor-neurone lesion (Bell\u2019s, facial nerve) weakens the WHOLE hemiface INCLUDING the forehead. An UPPER-motor-neurone lesion (stroke) SPARES the forehead (forehead wrinkling preserved) and usually has other signs. Establish forehead involvement first.' },
        { h:'Recognise Bell\u2019s', t:'Acute (<72 h) unilateral LMN facial weakness, often with post-auricular pain, altered taste, hyperacusis, and a preceding viral illness, WITHOUT other neurology. It is a diagnosis of exclusion \u2014 examine fully and exclude stroke, Ramsay Hunt, Lyme, parotid/ENT causes, and bilateral/other cranial-nerve involvement.' },
        { h:'Still assess urgently', t:'Do not diagnose Bell\u2019s purely by phone. Sudden facial weakness warrants prompt face-to-face assessment to confirm the forehead sign, exclude stroke (and act on FAST/limb/speech/visual deficits as an emergency), and start timely treatment.' },
        { h:'Treat: steroids + EYE CARE', t:'Offer corticosteroids (e.g. prednisolone) ideally within 72 hours of onset for Bell\u2019s. ESSENTIAL and often missed: eye protection where eye closure is incomplete \u2014 lubricating drops by day, ointment and taping the eye at night, sunglasses \u2014 to prevent exposure keratopathy. Refer eye pain/visual change urgently (ophthalmology).' },
        { h:'Special cases', t:'Ramsay Hunt (herpes zoster: vesicles in/around the ear/palate, severe pain, often worse prognosis) needs antivirals plus steroids and prompt referral. Consider Lyme (travel/tick exposure, bilateral palsy), and refer atypical/bilateral/recurrent/non-recovering cases. In pregnancy Bell\u2019s is more common; steroids are generally still offered with senior/obstetric input.' },
        { h:'Prognosis & reassurance', t:'Most people with Bell\u2019s recover well, especially with early treatment, though recovery may take weeks to months. Address disfigurement fear with this prognosis, and (here) the pregnancy fear: Bell\u2019s does not harm the baby.' },
        { h:'Never do', t:'Never skip the forehead check; never diagnose Bell\u2019s by phone without arranging assessment/excluding stroke; never forget eye protection; never miss Ramsay Hunt vesicles or limb/speech deficits; never leave the stroke or pregnancy fear unaddressed.' },
        { h:'Safety-net & follow-up', t:'Same-day assessment; stroke/Ramsay-Hunt/eye red flags (limb/speech change, drowsiness, vesicles, eye pain/visual change) \u2192 urgent/999; eye-care regimen; steroids (with obstetric input in pregnancy); review and recovery expectations.' }
      ]
    }
  };

  /* ============ 118. TELEPHONE — First seizure + the DVLA duty ============ */
  const c118 = {
    id:'first-seizure-dvla', title:'"It was just a one-off faint \u2014 I can still drive, right?"', type:'telephone', duration:12,
    meta:{ age:31, sex:'M', setting:'Telephone \u2014 after a first witnessed seizure.', system:'Neurology / First seizure & driving' },
    brief:'Mr Connor Healy, 31, delivery DRIVER. Yesterday, witnessed by his partner, he went stiff then jerked all four limbs for ~1 minute, bit his tongue (lateral), was confused/drowsy for 20 minutes after, and was incontinent of urine. He calls it "just a funny faint" and is mainly worried about being told not to drive (his job). On questioning: poor sleep, recent heavy alcohol then stopping, no prior episodes. He wants reassurance he can keep driving and "doesn\u2019t need a fuss".',
    script:{
      opening:'"Morning. So I had a bit of a funny turn yesterday \u2014 the wife says I went stiff and shook for a minute and was a bit out of it after, but I feel totally fine now. I reckon it was just a faint, maybe I was tired. The main thing is \u2014 I drive for a living, so I just need you to confirm I\u2019m okay to carry on driving, yeah? I can\u2019t afford any time off."',
      facts:[
        { topic:'This was a seizure',   text:'The features are classic for a GENERALISED TONIC-CLONIC SEIZURE, not a faint: tonic stiffening then clonic jerking of all limbs lasting ~1 minute, LATERAL TONGUE-BITING, URINARY INCONTINENCE, and a prolonged POST-ICTAL confusion/drowsiness (~20 min). Faints (vasovagal) are brief, with quick full recovery, usually a prodrome and a trigger \u2014 not this. Calling it "a faint" is a misattribution.' },
        { topic:'The DVLA duty \u2014 KEY', text:'CRITICAL: after a first unprovoked/any seizure, the patient MUST stop driving and NOTIFY THE DVLA. For a Group 1 (car) licence the typical ban is 6 months after a first seizure (longer/licensed only after seizure-free periods if epilepsy is diagnosed). For Group 2 (HGV/PCV \u2014 and relevant to a professional driver) the rules are far stricter (years seizure-free off medication). The patient cannot simply be "confirmed okay to drive"; the legal duty to inform the DVLA and stop driving is non-negotiable.' },
        { topic:'Provoking factors / work-up', text:'Possible provoking factors: sleep deprivation and ALCOHOL (heavy use then abrupt cessation \u2014 withdrawal seizures). Even a "provoked" seizure usually still triggers driving restrictions and needs assessment. Work-up: first-seizure clinic referral (neurology), ECG (exclude cardiac/arrhythmic cause of collapse), bloods, consider imaging/EEG per pathway; safety advice meanwhile.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the minimisation ("just a faint") is driven by terror of losing his LICENCE and therefore his JOB and income (sole earner, mortgage). He\u2019s downplaying frightening symptoms to dodge the driving conversation. There may also be genuine fear of "having epilepsy/something serious" he\u2019s avoiding. The skill is to be honest and firm about the driving/DVLA duty while supporting him through the livelihood blow and the work-up.' },
        { topic:'What he needs',        text:'Officially: confirmation he can keep driving. What he needs: recognition this was a seizure not a faint, the clear (non-negotiable) advice to STOP driving and notify the DVLA, first-seizure-clinic referral and work-up (incl. ECG), provoking-factor and safety advice, and compassionate support around the job/income impact \u2014 NOT false clearance.' },
      ],
      ice:{
        ideas:'It was just a one-off faint from being tired; he\u2019s fine and can keep driving.',
        concerns:'HIDDEN AGENDA \u2014 terror of losing his licence and his job/income (sole earner), driving the "just a faint" minimisation; possibly avoiding the fear of "having epilepsy/something serious".',
        expectations:'Confirmation he can keep driving. What he actually needs: recognition it was a seizure, the non-negotiable stop-driving/notify-DVLA advice, first-seizure-clinic referral + work-up, and support around the livelihood impact.'
      },
      cues:['Stiff-then-jerking ~1 min + lateral tongue-bite + incontinence + 20-min post-ictal confusion \u2014 a seizure, not a faint.','Professional driver + first seizure \u2014 must stop driving + notify DVLA; cannot be "confirmed okay to drive".','"Just a faint, confirm I can drive, can\u2019t afford time off" \u2014 minimisation driven by livelihood fear; be honest and supportive.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises this as a GENERALISED TONIC-CLONIC SEIZURE, not a faint \u2014 using the discriminating features (tonic-clonic movements ~1 min, lateral tongue-biting, incontinence, prolonged post-ictal confusion) \u2014 and does NOT accept the "just a faint" framing' },
      { dom:'tasks', text:'Gives the clear, non-negotiable DRIVING advice: he MUST STOP DRIVING now and NOTIFY THE DVLA \u2014 a first seizure means a driving ban (typically 6 months for a car licence; far stricter/longer for Group 2/professional driving) \u2014 and does NOT provide false reassurance that he can keep driving' },
      { dom:'tasks', text:'Identifies possible PROVOKING factors (sleep deprivation, alcohol use/withdrawal) and recognises that even a provoked seizure generally still carries driving restrictions and needs proper assessment \u2014 not dismissal' },
      { dom:'tasks', text:'Arranges the WORK-UP: urgent referral to a first-seizure/neurology clinic, an ECG (to exclude a cardiac/arrhythmic cause of collapse), bloods, and consideration of imaging/EEG per pathway; gives interim safety advice' },
      { dom:'tasks', text:'Gives SAFETY advice meanwhile: avoid swimming/baths alone, working at heights/with dangerous machinery, and other situations where a seizure would be dangerous; address alcohol and sleep; what to do if another seizure occurs (and prolonged seizure >5 min \u2192 999)' },
      { dom:'rto',   text:'Handles the minimisation and the livelihood terror with honesty AND compassion: is firm and clear about the driving/DVLA duty while genuinely acknowledging the devastating impact on his job and income, and does not collude to keep him onside' },
      { dom:'rto',   text:'Supports him through the blow \u2014 sick note, exploring work options/finances, the possibility of returning to driving after the relevant seizure-free period \u2014 so honesty doesn\u2019t feel like abandonment' },
      { dom:'gs',    text:'Safety-nets and documents: the explicit stop-driving/notify-DVLA advice given, first-seizure-clinic referral and ECG, interim safety advice, what to do if another/prolonged seizure occurs (999), and follow-up \u2014 the honest, supported plan, not false clearance' },
    ],
    worked:[
      { lbl:'Name what it was',     txt:'"I\u2019m really glad you rang. I have to be straight with you though \u2014 from what your wife describes, this wasn\u2019t a faint. Going stiff then shaking for a minute, biting the side of your tongue, wetting yourself, and being confused for twenty minutes afterwards \u2014 those are the features of a seizure, not a simple faint. I know that\u2019s not what you wanted to hear."' },
      { lbl:'The driving truth',    txt:'"And I have to be honest about the driving, because it matters and I\u2019d be failing you to fudge it: after a seizure, the law says you must stop driving and tell the DVLA. For a normal car licence that\u2019s usually a six-month break; for driving professionally the rules are stricter. I can\u2019t confirm you\u2019re okay to drive \u2014 I\u2019m really sorry, because I know what that means for your work."' },
      { lbl:'Acknowledge the blow', txt:'"This is a genuine blow \u2014 your job, your income, the mortgage \u2014 and I\u2019m not going to pretend otherwise or rush past it. Let\u2019s deal with it properly: I\u2019ll sort a sick note, we\u2019ll look at your options at work and any support, and the important thing is this is very often temporary \u2014 many people drive again after the seizure-free period."' },
      { lbl:'Look for a cause',     txt:'"There may be a reason this happened \u2014 you mentioned poor sleep and drinking heavily then stopping; both can trigger seizures. That doesn\u2019t cancel the driving rules, but it matters for treatment. So I\u2019m referring you urgently to a first-seizure clinic, doing a heart tracing to rule out a heart cause of the collapse, and some bloods."' },
      { lbl:'Safety meanwhile',     txt:'"Until you\u2019re assessed: don\u2019t swim or bathe alone, avoid heights and dangerous machinery, and go easy on alcohol and get proper sleep. If you have another seizure, especially one lasting more than five minutes or back-to-back, that\u2019s a 999. Your wife knowing what to do helps."' },
      { lbl:'Honesty + support',    txt:'"I know I\u2019ve given you hard news, and I\u2019ve done it because being straight with you is the only way to keep you and others safe \u2014 imagine a seizure at the wheel. But I\u2019m not leaving you to it: sick note, referral, support with work, and we\u2019ll get you the answers. Notify the DVLA, stop driving for now, and come and see me so we can plan the next steps together."' },
    ],
    learning:'A "funny faint" with tonic-clonic movements lasting ~1 minute, LATERAL tongue-biting, urinary incontinence and prolonged post-ictal confusion is a GENERALISED TONIC-CLONIC SEIZURE, not a vasovagal faint (which is brief with quick full recovery and a trigger/prodrome). The non-negotiable examinable point is the DRIVING/DVLA duty: after a first seizure the patient MUST stop driving and notify the DVLA \u2014 typically a 6-month ban for a car (Group 1) licence and far stricter, longer rules for Group 2/professional driving \u2014 so the patient cannot be "confirmed okay to drive", and even a provoked seizure generally still carries restrictions. Arrange the work-up (first-seizure/neurology clinic, ECG to exclude a cardiac cause of collapse, bloods, imaging/EEG per pathway), identify provoking factors (sleep deprivation, alcohol use/withdrawal), and give interim safety advice (no swimming/baths alone, heights, machinery; 999 if a seizure >5 min). The hidden agenda is livelihood terror driving the minimisation; the skill is honesty AND compassion \u2014 be firm and clear about the driving duty while genuinely supporting the job/income blow (sick note, work options, the likely temporary nature) so honesty doesn\u2019t feel like abandonment.',
    knowledge:{
      guideline:'NICE NG217 epilepsies · DVLA Assessing fitness to drive (seizures) · first-seizure pathway',
      points:[
        { h:'Seizure vs faint', t:'Generalised tonic-clonic seizure: tonic stiffening then clonic jerking (often ~1\u20132 min), lateral tongue-biting, incontinence, cyanosis, and a prolonged POST-ICTAL phase (confusion/drowsiness, headache, muscle ache). Vasovagal syncope: brief, with a prodrome/trigger, rapid full recovery, no significant post-ictal confusion. The history (and a witness) discriminates.' },
        { h:'Driving \u2014 the duty', t:'After a first seizure the person MUST STOP driving and NOTIFY the DVLA. Group 1 (car/motorcycle): typically a 6-month driving ban after a first unprovoked seizure (longer with epilepsy/abnormal investigations; relicensing after defined seizure-free periods). Group 2 (HGV/PCV): much stricter (e.g. years seizure-free off anti-seizure medication). The clinician must advise this clearly; the patient has the legal duty to notify.' },
        { h:'Provoked vs unprovoked', t:'Identify provoking factors (sleep deprivation, alcohol excess/withdrawal, drugs, metabolic derangement, acute brain insult). Provoked seizures may carry different epilepsy-diagnosis implications, but driving restrictions generally still apply \u2014 do not use "it was just provoked" to waive the DVLA duty.' },
        { h:'Work-up', t:'Refer urgently to a first-seizure/neurology clinic (assessment within 2 weeks per NICE). Do an ECG (cardiac/arrhythmic causes of collapse can mimic/trigger), bloods (glucose, electrolytes, etc.), and consider neuroimaging and EEG per pathway. Do not start anti-seizure medication in primary care \u2014 that is a specialist decision.' },
        { h:'Interim safety advice', t:'Avoid swimming/bathing alone, heights, operating dangerous machinery, and other activities where a seizure would be dangerous; address sleep and alcohol; educate the patient/family on seizure first aid and that a seizure >5 minutes or repeated seizures = 999 (status epilepticus).' },
        { h:'Honesty + livelihood support', t:'Driving loss is devastating for professional drivers and drives minimisation. Be firm and clear about the duty (public and personal safety) while compassionately supporting the impact \u2014 sick note, work options, finances, and that driving is often regained after the seizure-free period. Do not collude with false reassurance.' },
        { h:'Never do', t:'Never accept "just a faint" for a clear seizure; never confirm fitness to drive after a first seizure; never use "provoked" to bypass the DVLA duty; never start anti-seizure meds without specialist input; never omit ECG/first-seizure referral or interim safety advice; never deliver the news without support.' },
        { h:'Safety-net & follow-up', t:'Explicit stop-driving/notify-DVLA advice (documented); first-seizure clinic + ECG/bloods; interim safety advice; 999 for prolonged/repeated seizures; sick note and livelihood support; follow-up to plan next steps.' }
      ]
    }
  };

  /* ============ 119. VIDEO — Optic neuritis / suspected MS ============ */
  const c119 = {
    id:'optic-neuritis-ms', title:'"My eye\u2019s gone blurry and aches \u2014 it\u2019s probably just a migraine"', type:'video', duration:12,
    meta:{ age:28, sex:'F', setting:'Video consultation \u2014 subacute monocular visual loss.', system:'Neurology / Optic neuritis & suspected MS' },
    brief:'Miss Robyn Carlisle, 28. Over 3 days, blurred/dim vision in the LEFT eye, worse over time, with ACHE behind the eye worsened by eye movement, and colours look "washed out" (reds especially). She blames a migraine/eye strain. On questioning: a relative resolved episode of tingling/numbness in one leg months ago she ignored; no headache with the visual change. Otherwise well. The picture fits optic neuritis (often a first presentation of MS). Wants drops/reassurance.',
    script:{
      opening:'"Hi \u2014 thanks. So my left eye\u2019s gone a bit blurry over the last few days and it aches, especially when I move it. Colours look a bit faded too. I get migraines, so I\u2019m guessing it\u2019s that, or maybe eye strain from screens? Could you just sort me some eye drops or tell me it\u2019ll settle? I\u2019m sure it\u2019s nothing serious."',
      facts:[
        { topic:'The optic neuritis picture', text:'Subacute (days) MONOCULAR visual loss/blurring, PAIN ON EYE MOVEMENT (retrobulbar ache), and impaired COLOUR vision (red desaturation) is the classic triad of OPTIC NEURITIS. A relative afferent pupillary defect may be present. This is NOT a migraine (which gives transient, often bilateral/zig-zag positive visual phenomena with headache) or simple eye strain.' },
        { topic:'The MS link',          text:'Optic neuritis is frequently the FIRST presentation of multiple sclerosis. The previously-ignored transient leg numbness months ago suggests a prior demyelinating event (dissemination in time and space) \u2014 raising the suspicion of MS. This needs urgent neurology/ophthalmology assessment and MRI, not drops.' },
        { topic:'Why urgent assessment', text:'Needs same-day/urgent ophthalmology or neurology assessment to confirm optic neuritis (fundoscopy, visual acuity/fields/colour, RAPD), exclude other causes of visual loss, and arrange MRI (brain/orbits) and neurology referral. Steroids may shorten the episode (specialist decision). Other sinister causes of monocular visual loss (e.g. vascular) must be excluded.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the "it\u2019s just a migraine/eye strain" is partly genuine misattribution and partly AVOIDANCE: a friend or relative has MS and Robyn, half-suspecting, is terrified of that diagnosis and is using the migraine label to avoid confronting it. She also fears for her job/independence and "ending up in a wheelchair" (an outdated MS fear). Surfacing this and giving balanced, modern information is central.' },
        { topic:'What she needs',       text:'Officially: eye drops/reassurance it\u2019ll settle. What she needs: recognition that this is likely optic neuritis (not migraine), urgent ophthalmology/neurology assessment + MRI, the previous neurological symptom taken seriously, honest handling of the MS possibility (without premature labelling or catastrophising), and her fears addressed with up-to-date information.' },
      ],
      ice:{
        ideas:'It\u2019s a migraine or eye strain and will settle with drops/rest.',
        concerns:'HIDDEN AGENDA \u2014 she half-suspects MS (a friend/relative has it) and is terrified, using the migraine label to avoid confronting it; fears for her job/independence and an outdated "wheelchair" image of MS.',
        expectations:'Eye drops/reassurance it\u2019ll settle. What she actually needs: recognition of likely optic neuritis, urgent ophthalmology/neurology assessment + MRI, the previous symptom taken seriously, and honest, modern MS information.'
      },
      cues:['Subacute monocular blur + PAIN ON EYE MOVEMENT + washed-out colours \u2014 optic neuritis, not migraine.','Previous transient leg numbness she ignored \u2014 a possible prior demyelinating event; raises MS suspicion.','"Just a migraine, give me drops" \u2014 avoidance of a feared MS diagnosis; surface it gently.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the OPTIC NEURITIS triad (subacute monocular visual loss/blur, pain on eye movement, impaired colour/red desaturation, \u00b1 RAPD) and does NOT accept the "migraine/eye strain" framing or offer drops \u2014 migraine gives transient positive visual phenomena with headache, not this' },
      { dom:'tasks', text:'Takes the previous neurological symptom seriously: the earlier transient leg numbness suggests a prior demyelinating event, raising suspicion of MS (dissemination in time/space) \u2014 and elicits it rather than dismissing it' },
      { dom:'tasks', text:'Arranges URGENT assessment: same-day/urgent ophthalmology or neurology to confirm optic neuritis (acuity, fields, colour vision, fundoscopy, RAPD), exclude other causes of monocular visual loss, and arrange MRI (brain \u00b1 orbits) and neurology referral \u2014 not primary-care drops' },
      { dom:'tasks', text:'Explains management honestly: steroids may shorten the episode (a specialist decision, not always needed), vision usually recovers well, and MRI/neurology will clarify whether this is isolated optic neuritis or part of MS \u2014 avoiding both premature labelling and false reassurance' },
      { dom:'tasks', text:'Addresses the MS possibility appropriately: does not blurt "you have MS", but is honest that this needs investigating for causes including MS, and gives balanced, up-to-date information (MS is very variable and highly treatable now \u2014 countering the outdated wheelchair image)' },
      { dom:'rto',   text:'Surfaces the avoidance and the feared MS diagnosis gently, validates the fear, and provides modern, hopeful but honest information rather than colluding with the migraine label' },
      { dom:'rto',   text:'Balances urgency and reassurance, supports her through the anxiety of investigation, and addresses the job/independence fears' },
      { dom:'gs',    text:'Safety-nets and follows up: urgent ophthalmology/neurology and MRI pathway, what would be an emergency (rapidly worsening vision, both eyes, new neurology \u2192 urgent), the plan and follow-up to discuss results and support \u2014 holding her through the uncertainty' },
    ],
    worked:[
      { lbl:'Gently refuse migraine', txt:'"I can see why you\u2019d think migraine \u2014 but what you\u2019re describing is a bit different and I don\u2019t want to miss it. Blurred vision in one eye coming on over days, an ache that\u2019s worse when you move the eye, and colours looking washed out \u2014 that points to inflammation of the eye\u2019s nerve, called optic neuritis, rather than a migraine, which usually gives flashing zig-zags with a headache and settles quickly."' },
      { lbl:'Take the old symptom seriously', txt:'"Can I ask about something \u2014 you mentioned a while back you had some tingling or numbness in a leg that came and went? \u2026 I\u2019m glad you told me. On its own you\u2019d ignore it, but together with your eye it\u2019s a thread I want to follow up properly rather than brush off."' },
      { lbl:'Urgent, not drops',    txt:'"So this isn\u2019t eye drops, I\u2019m afraid. I want you seen urgently by the eye or neurology team \u2014 they\u2019ll test your vision and colour properly and look at the back of the eye \u2014 and arrange a scan, an MRI. That\u2019s the right thing for this, and the good news is the vision in optic neuritis usually recovers well."' },
      { lbl:'Name the fear',        txt:'"Can I gently ask \u2014 is part of you worried about something specific? \u2026 MS. Someone close to you has it. I understand why this frightened you, and why \u2018migraine\u2019 felt safer. Let me be honest with you: optic neuritis CAN be linked to MS, which is why we investigate \u2014 but I\u2019m not telling you that you have it. The scan and specialists will sort out what\u2019s going on."' },
      { lbl:'Modern, hopeful, honest', txt:'"And whatever it turns out to be \u2014 please don\u2019t picture the worst, outdated image of MS. It\u2019s extremely variable, many people live full active lives, and the treatments now are genuinely transformative compared to even ten years ago. If it is part of MS, finding it early and treating it is exactly what gives the best outcomes."' },
      { lbl:'Plan + safety-net',    txt:'"So: urgent eye/neurology assessment and an MRI, and I\u2019ll make sure that previous numbness is part of the picture. If your vision suddenly gets much worse, the other eye is affected, or you get new symptoms like weakness or balance trouble \u2014 contact us urgently. I\u2019ll chase the referrals and we\u2019ll go through the results together. You came hoping for drops; what I\u2019m doing is making sure something important isn\u2019t missed \u2014 and walking it with you."' },
    ],
    learning:'Subacute MONOCULAR visual loss/blur with PAIN ON EYE MOVEMENT and impaired COLOUR vision (red desaturation), \u00b1 a relative afferent pupillary defect, is the classic triad of OPTIC NEURITIS \u2014 not a migraine (transient positive visual phenomena with headache) or eye strain \u2014 and it is frequently the first presentation of MULTIPLE SCLEROSIS. A previously-ignored transient neurological symptom (here leg numbness) suggests a prior demyelinating event and raises the MS suspicion (dissemination in time/space). The action is urgent ophthalmology/neurology assessment (acuity, fields, colour vision, fundoscopy, RAPD), MRI (brain \u00b1 orbits) and neurology referral \u2014 not primary-care drops; steroids may shorten the episode (a specialist decision) and vision usually recovers well. The examinable hidden agenda is avoidance of a feared MS diagnosis (a relative has it), using the migraine label as a shelter, plus an outdated "wheelchair" fear. Recognise the picture, take the old symptom seriously, investigate urgently, handle the MS possibility honestly (no premature labelling, no false reassurance) with balanced modern information (MS is variable and highly treatable now; early treatment gives the best outcomes), and safety-net new/worsening neurology.',
    knowledge:{
      guideline:'NICE CKS optic neuritis / MS · NICE NG220 multiple sclerosis · neurology/ophthalmology pathways',
      points:[
        { h:'Recognise optic neuritis', t:'Subacute (hours\u2013days) unilateral visual loss/blur, PAIN on eye movement, and impaired colour vision (red desaturation), often with a relative afferent pupillary defect (RAPD) and a normal or swollen disc. Distinguish from migraine (transient, often bilateral positive phenomena with headache, full recovery) and from vascular/other causes of monocular visual loss.' },
        { h:'Optic neuritis & MS', t:'Optic neuritis is a common first presentation of MS. Ask about prior transient neurological symptoms (numbness/tingling, weakness, balance, bladder) suggesting earlier demyelination (dissemination in time and space). A suggestive history raises the pre-test probability of MS and the urgency of work-up.' },
        { h:'Investigate urgently', t:'Refer urgently to ophthalmology and/or neurology to confirm optic neuritis (visual acuity, fields, colour vision, fundoscopy, RAPD) and exclude other causes; arrange MRI brain (\u00b1 orbits) and neurology assessment. Do not manage as eye strain/migraine with drops in primary care.' },
        { h:'Management & prognosis', t:'Vision in optic neuritis usually recovers well over weeks. High-dose corticosteroids may speed recovery but do not change final outcome \u2014 a specialist decision (not always indicated). MRI/neurology determines whether it is isolated or part of MS and guides disease-modifying treatment.' },
        { h:'Handle the MS question well', t:'Do not label "you have MS" prematurely, nor falsely reassure. Be honest that causes including MS are being investigated. Give balanced, up-to-date information: MS is highly variable and now has genuinely effective disease-modifying therapies; many people live full active lives; early diagnosis/treatment improves outcomes \u2014 countering outdated catastrophic images.' },
        { h:'Address avoidance & fear', t:'A feared MS diagnosis (often from a known relative/friend with MS) drives migraine-label avoidance. Surface it gently, validate it, and address job/independence fears with modern information \u2014 without colluding with the misattribution.' },
        { h:'Never do', t:'Never treat optic neuritis as migraine/eye strain with drops; never ignore prior transient neurological symptoms; never delay urgent ophthalmology/neurology/MRI; never blurt or falsely exclude MS; never leave the feared-diagnosis avoidance and outdated fears unaddressed.' },
        { h:'Safety-net & follow-up', t:'Urgent ophthalmology/neurology + MRI pathway; emergency features (rapidly worsening/bilateral visual loss, new neurology) \u2192 urgent; honest interim information; follow-up to discuss results and support through the uncertainty.' }
      ]
    }
  };

  /* ============ 120. VIDEO — Functional/medically-unexplained symptoms (taken seriously) ============ */
  const c120 = {
    id:'functional-symptoms', title:'"Every doctor says my tests are normal \u2014 but I\u2019m not making it up"', type:'video', duration:12,
    meta:{ age:34, sex:'F', setting:'Video consultation \u2014 chronic disabling symptoms, normal investigations.', system:'Neurology / Functional neurological & persistent physical symptoms' },
    brief:'Miss Carys Bevan, 34. Months of fatigue, widespread pain, intermittent leg weakness/heaviness and "fuzzy" episodes; extensive investigations (bloods, MRI, neurology review) all normal/non-diagnostic. She arrives frustrated, fearing she\u2019s being dismissed as "a hypochondriac" or "making it up", and demands more scans or a specialist who will "find what\u2019s wrong". She is genuinely disabled by the symptoms. If explored: high stress, a past trauma, poor sleep. PMH: anxiety. The challenge is validating real, functional symptoms and building a positive plan without further fruitless tests.',
    script:{
      opening:'"I\u2019m at the end of my tether. Every doctor does tests, says they\u2019re normal, and basically implies it\u2019s in my head. But I am NOT making this up \u2014 I can barely walk some days, I\u2019m exhausted, my body\u2019s falling apart. I want a referral to someone who\u2019ll actually FIND what\u2019s wrong, or more scans. I just want someone to believe me and not fob me off again."',
      facts:[
        { topic:'The framing',          text:'Extensively investigated, persistent, genuinely disabling symptoms with normal/non-diagnostic tests \u2014 a picture of FUNCTIONAL NEUROLOGICAL DISORDER / persistent physical symptoms. These are REAL (a problem with how the nervous system functions, not structural damage and not "made up"), common, and the goal is a POSITIVE diagnosis and rehabilitative management \u2014 not endless re-investigation, which entrenches the cycle and risks harm.' },
        { topic:'Validation is the treatment', text:'CRITICAL: the most important intervention is to VALIDATE that the symptoms are real and that she is not making them up or imagining it, while explaining the functional model (the "hardware is fine but the software/signalling is misfiring") \u2014 framed positively, not as a diagnosis of exclusion or "nothing wrong". Dismissiveness ("your tests are normal so there\u2019s nothing wrong") is exactly what has harmed her and perpetuates the cycle.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 beneath the demand for more tests is a desperate need to be BELIEVED and not abandoned, plus fear that a serious disease is being missed. If explored gently: significant life STRESS, a PAST TRAUMA, poor sleep and her anxiety \u2014 relevant to functional symptoms but to be raised carefully so she doesn\u2019t feel reduced to "it\u2019s psychological/your fault". She fears that acknowledging a mind-body link means being told it\u2019s "not real".' },
        { topic:'The trap',             text:'Two failure modes: (1) ordering yet more tests/referrals to placate (reinforces the cycle, risks iatrogenic harm and incidental findings); (2) dismissing her ("nothing wrong, it\u2019s anxiety") which ruptures trust. The skill is the middle path: positive functional diagnosis, validation, and a rehabilitative, multidisciplinary plan with a consistent clinician.' },
        { topic:'What she needs',       text:'Officially: more scans / a specialist to "find it". What she needs: to be believed, a clear POSITIVE explanation of functional symptoms (real, common, treatable), the mind-body links raised sensitively (not blamingly), a rehabilitative plan (physiotherapy for functional disorders, psychological therapy, sleep, pacing, symptom-specific support), a consistent named clinician, and an end to fruitless re-investigation.' },
      ],
      ice:{
        ideas:'A serious disease is being missed; she needs more scans or the right specialist to "find what\u2019s wrong".',
        concerns:'HIDDEN AGENDA \u2014 a desperate need to be believed and not dismissed as "making it up", fear a serious illness is missed, and (if explored) significant stress/past trauma/poor sleep she fears will be used to say "it\u2019s all in your head".',
        expectations:'More tests / a specialist who will find a structural cause. What she actually needs: to be believed, a positive functional explanation, the mind-body links raised sensitively, a rehabilitative plan, a consistent clinician, and no more fruitless re-investigation.'
      },
      cues:['Extensively investigated, normal tests, genuinely disabling symptoms \u2014 functional disorder; validate, don\u2019t re-investigate endlessly.','"I\u2019m not making it up / believe me" \u2014 the core need is to be believed; validation IS the treatment.','Demands more scans \u2014 the trap; positive functional diagnosis + rehab, not placating tests or dismissal.']
    },
    checkpoints:[
      { dom:'tasks', text:'VALIDATES that the symptoms are REAL and that she is not making them up or imagining it \u2014 making this explicit early \u2014 rather than dismissing her with "your tests are normal so there\u2019s nothing wrong"' },
      { dom:'tasks', text:'Explains a POSITIVE functional model: functional neurological disorder / persistent physical symptoms are a genuine problem with how the nervous system FUNCTIONS (the "hardware is intact but the signalling/software misfires"), common and treatable \u2014 NOT a diagnosis of exclusion, "nothing wrong", or "all in the mind"' },
      { dom:'tasks', text:'Resists FURTHER fruitless investigation/referral-shopping: explains (kindly) that more scans are unlikely to help and can entrench the problem and cause harm (incidental findings, reinforcing illness focus), while not abandoning her \u2014 the middle path between re-testing and dismissal' },
      { dom:'tasks', text:'Raises the mind-body / contributory factors SENSITIVELY (stress, past trauma, sleep, anxiety) as relevant to how symptoms are generated and maintained \u2014 NOT as blame or "it\u2019s psychological/your fault" \u2014 and screens mood appropriately' },
      { dom:'tasks', text:'Builds a REHABILITATIVE, multidisciplinary plan: physiotherapy tailored to functional disorders, psychological therapy (e.g. CBT for functional symptoms), sleep and pacing/activity management, symptom-specific strategies, and reputable resources (e.g. neurosymptoms.org) \u2014 a positive, active treatment plan' },
      { dom:'rto',   text:'Meets the desperate need to be BELIEVED with genuine warmth; does not dismiss, and explicitly names that previous "fobbing off" was wrong \u2014 rebuilding trust' },
      { dom:'rto',   text:'Offers continuity: a consistent named clinician and a therapeutic alliance, so she isn\u2019t bounced between services \u2014 itself part of effective management' },
      { dom:'gs',    text:'Safety-nets proportionately: what genuinely NEW or red-flag symptoms would warrant reassessment (so she\u2019s not abandoned), the rehab/therapy referrals, a follow-up plan and named clinician \u2014 treating the functional disorder actively rather than re-investigating or discharging' },
    ],
    worked:[
      { lbl:'Believe her, explicitly', txt:'"Before anything else, I want to say this clearly and mean it: I believe you. Your symptoms are REAL \u2014 you are not making them up, and you are not a hypochondriac. The exhaustion, the pain, your legs giving way \u2014 those are genuinely happening to you, and being disbelieved on top of being unwell is its own kind of awful. I\u2019m not going to do that to you."' },
      { lbl:'A positive name, not \u2018nothing\u2019', txt:'"Here\u2019s the part previous doctors may have got wrong: \u2018tests are normal\u2019 does NOT mean nothing\u2019s wrong. There\u2019s a real, recognised condition called functional disorder, where the structure of the body \u2014 the hardware \u2014 is intact, but the way the nervous system is functioning, the signalling, the software, is misfiring. That\u2019s why scans look normal yet you\u2019re genuinely disabled. It\u2019s common, and importantly, it\u2019s treatable."' },
      { lbl:'Why not more scans',   txt:'"I know every instinct says \u2018do more scans, find it\u2019 \u2014 but I have to be honest: more scans are very unlikely to find a missed disease here, and they can actually keep you stuck, or throw up red herrings that lead to harm. So I\u2019m not going to send you round that loop again. What I AM going to do is offer treatment that actually helps this condition."' },
      { lbl:'Mind-body, without blame', txt:'"Can I mention something carefully? Things like stress, poor sleep, and past difficult experiences can affect how the nervous system processes signals \u2014 NOT because you\u2019re weak or it\u2019s \u2018in your head\u2019, but because the brain and body are deeply connected. If you\u2019re open to it, looking at those alongside the physical side often helps. It doesn\u2019t make your symptoms any less real."' },
      { lbl:'The real plan',        txt:'"Treatment for this is active and physical as much as anything: a specific kind of physiotherapy that retrains the movement and signalling, a talking therapy designed for these symptoms, work on sleep, and pacing so you don\u2019t crash. There are good resources I\u2019ll point you to. This is a recognised, treatable condition with real strategies \u2014 not a dead end."' },
      { lbl:'Continuity + safety-net', txt:'"And you won\u2019t be bounced around: I\u2019ll be your consistent point of contact, so you\u2019re not starting from scratch every time. If you ever develop genuinely NEW symptoms or red flags, of course we\u2019d reassess \u2014 I\u2019m not closing the door. But for what you have, the way forward is this rehabilitation plan, together. You came in needing to be believed and helped. You are believed, and there\u2019s a real plan."' },
    ],
    learning:'Extensively-investigated, persistent, genuinely disabling symptoms with normal/non-diagnostic tests describe a FUNCTIONAL NEUROLOGICAL DISORDER / persistent physical symptoms \u2014 real conditions (a problem with how the nervous system FUNCTIONS, not structural damage and not "made up"), common and treatable. The single most important intervention is to VALIDATE explicitly that the symptoms are real and the patient is not making them up, and to give a POSITIVE explanation (the "hardware is intact but the signalling/software misfires") \u2014 never the dismissive "your tests are normal so there\u2019s nothing wrong", which is what has harmed her and perpetuates the cycle. Avoid BOTH failure modes: placating with more scans/referrals (entrenches the cycle, risks iatrogenic harm) and dismissing her (ruptures trust). Raise contributory mind-body factors (stress, trauma, sleep, anxiety) sensitively, not as blame; build a rehabilitative, multidisciplinary plan (physiotherapy for functional disorders, psychological therapy, sleep, pacing, reputable resources); offer continuity with a named clinician; and safety-net proportionately for genuinely new/red-flag symptoms so she is treated actively, not abandoned or re-investigated.',
    knowledge:{
      guideline:'NICE/neurology guidance on functional neurological disorder & persistent physical symptoms · neurosymptoms.org',
      points:[
        { h:'Functional symptoms are real', t:'Functional neurological disorder (FND) and persistent physical/medically-unexplained symptoms are genuine, common conditions \u2014 a problem with nervous-system FUNCTIONING, not structural disease and not feigned. Normal investigations do NOT mean "nothing is wrong"; they are consistent with a functional disorder.' },
        { h:'Make a POSITIVE diagnosis', t:'Diagnose functional disorders positively (on characteristic features/positive signs \u2014 e.g. Hoover\u2019s sign, variability/distractibility), not purely by exclusion. Explain with an accessible model ("hardware intact, software/signalling misfiring"). A confident positive diagnosis, explained well, is itself therapeutic and improves outcomes.' },
        { h:'Validation is central', t:'Explicitly validate that symptoms are real and the patient is not imagining or fabricating them. Dismissiveness ("it\u2019s all normal / in your head") ruptures trust, increases distress and entrenches the disorder. Acknowledge prior poor experiences.' },
        { h:'Avoid over-investigation', t:'Resist repeated re-investigation and referral-shopping once adequate work-up is done \u2014 it reinforces illness focus, risks incidental findings and iatrogenic harm, and does not reassure. Balance this against NOT dismissing the patient: the middle path is positive diagnosis plus active treatment.' },
        { h:'Address contributors sensitively', t:'Stress, adverse life events/trauma, poor sleep, anxiety and depression can predispose to, precipitate and perpetuate functional symptoms via brain-body interaction \u2014 raise these as relevant, NOT as blame or "psychological = not real". Screen and treat comorbid mood/anxiety.' },
        { h:'Rehabilitative, multidisciplinary treatment', t:'Evidence-based management: physiotherapy adapted for functional disorders, psychological therapy (e.g. CBT for FND/persistent symptoms), graded activity/pacing, sleep, and symptom-specific strategies; reputable self-help resources (e.g. neurosymptoms.org). Continuity with a consistent clinician and a therapeutic alliance are key.' },
        { h:'Never do', t:'Never tell the patient "your tests are normal, there\u2019s nothing wrong"; never order more scans/referrals just to placate; never imply it\u2019s feigned or "all in the mind"; never raise psychological factors as blame; never discharge without a positive diagnosis, plan and continuity; never abandon proportionate safety-netting.' },
        { h:'Safety-net & follow-up', t:'Define genuinely new/red-flag symptoms that would prompt reassessment (so the patient isn\u2019t abandoned); make the rehab/therapy referrals; arrange continuity with a named clinician and planned follow-up; treat actively rather than re-investigating or discharging.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c117, c118, c119, c120);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'facial-palsy-bell-stroke': {
      ceg: ['Urgent & unscheduled care', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Priya Naidu', age: '39 years · female',
        pmh: ['Woke with LEFT facial droop incl. FOREHEAD (can\u2019t raise eyebrow); eye won\u2019t close', 'No limb/speech/visual deficit; post-auricular ache; ?altered taste; recent virus', 'Pregnant (28 weeks)'],
        meds: ['Pregnancy vitamins'],
        allergy: 'NKDA',
        recent: '⚠ Terrified it\u2019s a stroke (her nan had one).',
        reason: 'Telephone — sudden one-sided facial droop.'
      },
      timeMap: [
        { t:'0–2',  h:'The forehead question', d:'Can she wrinkle the forehead on the drooped side? Forehead INVOLVED + isolated weakness = Bell\u2019s, not stroke. Screen FAST.' },
        { t:'2–4',  h:'Explain the sign',     d:'Stroke spares the forehead (bilateral innervation); whole-side incl. forehead = facial-nerve (Bell\u2019s). Post-auricular ache/taste/virus fit.' },
        { t:'4–6',  h:'Still assess today',   d:'Don\u2019t diagnose by phone — prompt assessment to confirm and exclude stroke.' },
        { t:'6–8',  h:'Steroids + EYE CARE',  d:'Early steroids (with obstetric input); lubricate, tape the eye at night — prevent exposure keratopathy. Consider Ramsay Hunt.' },
        { t:'8–12', h:'Baby fear + prognosis', d:'Bell\u2019s commoner in pregnancy, doesn\u2019t harm the baby. Most recover well. Stroke/Ramsay-Hunt/eye red flags → 999/urgent.' }
      ],
      wordPics: {
        fail: 'Either misses the forehead discriminator and over-/under-calls stroke, or diagnoses Bell\u2019s by phone without assessment; forgets eye protection; never addresses the pregnancy fear or gives prognosis.',
        pass: 'Uses the forehead sign, arranges prompt assessment to exclude stroke, treats Bell\u2019s with steroids + eye care, and reassures.',
        exc:  'Leads with the forehead question and explains the UMN/LMN reasoning to reassure against stroke; still arranges same-day assessment; treats with early steroids and crucially eye protection; considers Ramsay Hunt; addresses the unspoken baby fear and gives an honest good prognosis; and safety-nets the red flags.'
      },
      avoid: [
        { dont:'"Your face is drooping, so we have to assume it\u2019s a stroke."', instead:'"Can you wrinkle your forehead on that side? You can\u2019t — that\u2019s actually reassuring: stroke usually spares the forehead, so this points to Bell\u2019s palsy, a nerve problem in the face. We\u2019ll still check you today to be sure."', why:'Not using the forehead discriminator misses the key sign that distinguishes Bell\u2019s from stroke.' },
        { dont:'"It\u2019s Bell\u2019s palsy, take some steroids and it\u2019ll settle."', instead:'"It looks like Bell\u2019s, but sudden facial weakness needs you examined today to be sure it isn\u2019t a stroke — and we must protect that eye that won\u2019t close."', why:'Phone-diagnosing Bell\u2019s without assessment, and forgetting eye protection, risks a missed stroke and corneal damage.' },
        { dont:'"Don\u2019t worry about the pregnancy, let\u2019s focus on your face."', instead:'"I suspect you\u2019re frightened for the baby too — Bell\u2019s is actually commoner in pregnancy and doesn\u2019t harm the baby, and we\u2019ll treat you safely with the obstetric team."', why:'Ignoring the unspoken pregnancy fear misses a central part of her distress.' }
      ]
    },

    'first-seizure-dvla': {
      ceg: ['Urgent & unscheduled care', 'Professional & ethical dilemmas'],
      stem: {
        name: 'Connor Healy', age: '31 years · male',
        pmh: ['Witnessed tonic-clonic ~1 min: stiff then jerking, LATERAL tongue-bite, incontinence, 20-min post-ictal confusion', 'Delivery DRIVER; first episode', 'Poor sleep; heavy alcohol then stopped'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '⚠ Calls it "a faint"; mainly wants to keep driving ("can\u2019t afford time off").',
        reason: 'Telephone — after a first witnessed seizure.'
      },
      timeMap: [
        { t:'0–2',  h:'Name the seizure',    d:'Tonic-clonic + lateral tongue-bite + incontinence + prolonged post-ictal = seizure, not a faint. Don\u2019t accept "a faint".' },
        { t:'2–4',  h:'The driving truth',    d:'Must stop driving + notify DVLA. ~6-month car ban; stricter for professional/Group 2. Can\u2019t confirm fitness to drive.' },
        { t:'4–6',  h:'Acknowledge the blow', d:'Job/income/mortgage — real and devastating. Sick note, work options, often temporary; many drive again after the seizure-free period.' },
        { t:'6–9',  h:'Find a cause + work-up', d:'Sleep deprivation + alcohol use/withdrawal as triggers; first-seizure clinic, ECG (cardiac cause), bloods. Provoked still restricts driving.' },
        { t:'9–12', h:'Safety + honesty/support', d:'No swimming/baths alone, heights, machinery; seizure >5 min → 999. Honest + supported, not false clearance.' }
      ],
      wordPics: {
        fail: 'Accepts "just a faint" and confirms he can keep driving (false clearance); never mentions the DVLA duty; misses the ECG/first-seizure referral; or delivers the driving news coldly with no support.',
        pass: 'Recognises the seizure, gives the stop-driving/notify-DVLA advice, refers to first-seizure clinic with ECG, and gives safety advice.',
        exc:  'Names the seizure from the features; gives the non-negotiable stop-driving/notify-DVLA advice (car vs Group 2) without false reassurance; identifies provoking factors and arranges first-seizure clinic + ECG; gives interim safety advice; and delivers the hard driving news with genuine compassion and livelihood support so honesty doesn\u2019t feel like abandonment.'
      },
      avoid: [
        { dont:'"Sounds like a one-off faint — you\u2019re fine to keep driving."', instead:'"From your wife\u2019s description this was a seizure, not a faint — and after a seizure you must stop driving and notify the DVLA. I can\u2019t confirm you\u2019re safe to drive, I\u2019m sorry."', why:'Calling a seizure a faint and confirming fitness to drive endangers the patient and the public and breaches the DVLA duty.' },
        { dont:'"It was probably just the drink, so the driving rules won\u2019t apply."', instead:'"Alcohol may have triggered it, but a provoked seizure still means stopping driving and notifying the DVLA — and we need to investigate it properly."', why:'Using "provoked" to waive the DVLA duty is wrong; restrictions generally still apply.' },
        { dont:'"You\u2019ll just have to stop driving — that\u2019s the rule." (cold)', instead:'"This is a real blow to your job and income, and I\u2019m not brushing past it — sick note, support, and it\u2019s often temporary: many people drive again after the seizure-free period. Let\u2019s plan it together."', why:'Delivering the driving ban without support feels like abandonment and fuels the minimisation.' }
      ]
    },

    'optic-neuritis-ms': {
      ceg: ['Urgent & unscheduled care', 'Long-term conditions & cancer'],
      stem: {
        name: 'Robyn Carlisle', age: '28 years · female',
        pmh: ['3 days: blurred/dim LEFT-eye vision, PAIN on eye movement, washed-out colours', 'Previous transient leg numbness months ago (ignored)', 'Anxiety'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Blames migraine/eye strain; wants drops; half-fears MS (a relative has it).',
        reason: 'Video consultation — subacute monocular visual blur.'
      },
      timeMap: [
        { t:'0–2',  h:'Refuse "migraine"',   d:'Monocular blur + pain on eye movement + red desaturation = optic neuritis, not migraine. Not drops.' },
        { t:'2–4',  h:'Take the old symptom seriously', d:'Transient leg numbness months ago = possible prior demyelination; raises MS suspicion.' },
        { t:'4–6',  h:'Urgent assessment',   d:'Same-day/urgent ophthalmology/neurology (acuity, fields, colour, fundoscopy, RAPD) + MRI; exclude other causes.' },
        { t:'6–9',  h:'The MS question honestly', d:'Don\u2019t blurt or falsely exclude MS; investigate for causes incl. MS. Vision usually recovers well; steroids a specialist call.' },
        { t:'9–12', h:'Modern info + net',    d:'MS is variable + highly treatable now (counter the wheelchair image); early treatment best. Worsening/bilateral/new neurology → urgent; follow up results.' }
      ],
      wordPics: {
        fail: 'Treats it as migraine/eye strain with drops; ignores the previous neurological symptom; delays urgent ophthalmology/neurology/MRI; or bluntly announces "you have MS" or falsely reassures it\u2019s nothing.',
        pass: 'Recognises optic neuritis, takes the prior symptom seriously, arranges urgent assessment + MRI, and handles the MS possibility honestly.',
        exc:  'Refuses the migraine label and recognises the optic-neuritis triad; takes the ignored leg numbness seriously; arranges urgent ophthalmology/neurology + MRI; handles the MS possibility without premature labelling or false reassurance; surfaces the avoidance/feared diagnosis and gives balanced modern MS information; and safety-nets new/worsening neurology.'
      },
      avoid: [
        { dont:'"Sounds like an ocular migraine — try some drops and rest your eyes."', instead:'"Blur in one eye over days with pain on moving it and washed-out colours points to optic neuritis, not migraine — that needs urgent eye/neurology assessment and a scan, not drops."', why:'Mislabelling optic neuritis as migraine and giving drops misses a serious, urgent, MS-related diagnosis.' },
        { dont:'"That old leg numbness is probably unrelated."', instead:'"That earlier numbness matters — together with your eye it\u2019s a thread I want followed up, because it can point to something we should investigate properly."', why:'Dismissing a prior transient neurological symptom discards a key clue to dissemination in time/space (MS).' },
        { dont:'"This is almost certainly the start of MS."', instead:'"Optic neuritis CAN be linked to MS, which is why we investigate with a scan and specialists — but I\u2019m not telling you that you have it. And modern MS care is genuinely effective; the outdated picture isn\u2019t the reality."', why:'Prematurely labelling MS (or, conversely, falsely excluding it) is wrong; investigate and inform honestly.' }
      ]
    },

    'functional-symptoms': {
      ceg: ['Mental health & addiction', 'New & undifferentiated presentations'],
      stem: {
        name: 'Carys Bevan', age: '34 years · female',
        pmh: ['Months of fatigue, widespread pain, intermittent leg weakness, "fuzzy" episodes', 'Extensive investigations (bloods, MRI, neurology) normal/non-diagnostic', 'Anxiety; high stress + past trauma; poor sleep'],
        meds: ['None regular'],
        allergy: 'NKDA',
        recent: 'Frustrated, fears being dismissed as "making it up"; demands more scans / a specialist.',
        reason: 'Video consultation — chronic disabling symptoms, normal tests.'
      },
      timeMap: [
        { t:'0–2',  h:'Believe her, explicitly', d:'"I believe you. Your symptoms are real, you\u2019re not making them up." Validation is the treatment.' },
        { t:'2–4',  h:'A positive name',      d:'Functional disorder: hardware intact, signalling/software misfires — real, common, treatable. NOT "nothing wrong".' },
        { t:'4–6',  h:'Why not more scans',   d:'More scans unlikely to find missed disease; can entrench it / cause harm. Not dismissal — a better path.' },
        { t:'6–8',  h:'Mind-body, no blame',  d:'Stress/trauma/sleep affect nervous-system signalling — not weakness, not "in your head". Screen mood.' },
        { t:'8–12', h:'Rehab plan + continuity', d:'FND physiotherapy, psychological therapy, sleep, pacing, resources; a named clinician; proportionate safety-net for new/red-flag symptoms.' }
      ],
      wordPics: {
        fail: 'Either orders yet more scans/referrals to placate (entrenching the cycle), or dismisses her ("tests normal, nothing wrong / it\u2019s anxiety"), rupturing trust; never gives a positive functional diagnosis or a rehab plan.',
        pass: 'Validates the symptoms, gives a positive functional explanation, avoids further fruitless tests, raises contributors sensitively, and offers a rehab plan with follow-up.',
        exc:  'Believes her explicitly and makes validation central; gives a confident POSITIVE functional diagnosis with an accessible model; resists more scans without dismissing her; raises mind-body contributors sensitively (no blame) and screens mood; builds a multidisciplinary rehabilitative plan with continuity and a named clinician; and safety-nets proportionately for genuinely new symptoms.'
      },
      avoid: [
        { dont:'"All your tests are normal, so there\u2019s nothing physically wrong."', instead:'"Normal tests don\u2019t mean nothing\u2019s wrong — you have a real, recognised condition where the body\u2019s signalling misfires even though the structure is intact. It\u2019s common and treatable."', why:'"Nothing wrong" is dismissive, untrue for functional disorders, and perpetuates the cycle.' },
        { dont:'"Okay, I\u2019ll refer you for more scans to put your mind at rest."', instead:'"More scans are very unlikely to find a missed disease and can keep you stuck — instead, let\u2019s start treatment that actually helps this condition."', why:'Placating with further tests reinforces illness focus and risks iatrogenic harm without reassuring.' },
        { dont:'"It\u2019s probably just your anxiety causing all this."', instead:'"Stress and past experiences can affect how the nervous system processes signals — not because it\u2019s \u2018in your head\u2019 or your fault, but because mind and body are connected. Your symptoms are still completely real."', why:'Attributing it bluntly to anxiety feels like blame/dismissal and ruptures the trust that treatment depends on.' }
      ]
    }
  });

})();
