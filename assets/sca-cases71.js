/* ============================================================
   Reasoning GP — Case Library batch 71:
   "Don't-miss neuro & endocrine zebras" (NEW themes, verified absent)
   Narcolepsy (excessive daytime sleepiness + cataplexy \u2014 refer sleep);
   phaeochromocytoma (paroxysmal headache/palpitations/sweating +
   hypertension \u2014 the secondary-HTN zebra); Wilson's disease (young
   adult, liver + neuropsychiatric \u2014 a treatable inherited cause);
   tics / Tourette's (childhood motor+vocal tics \u2014 reassure, when to
   refer). No NG12 cancer pathway applies. Load AFTER sca-cases70.js.
   ============================================================ */
(function(){

  /* ===== 256. Narcolepsy ===== */
  const c256 = {
    id:'narcolepsy', title:'"I fall asleep without warning in the day, even mid-conversation \u2014 and my knees buckle when I laugh"', type:'video', duration:12,
    meta:{ age:22, sex:'F', setting:'Face-to-face \u2014 excessive daytime sleepiness in a young adult.', system:'Neurology / Sleep \u2014 narcolepsy: recognition, cataplexy & referral' },
    brief:'Miss Orla Hennessy, 22, student, has months-to-years of overwhelming EXCESSIVE DAYTIME SLEEPINESS with irresistible sleep attacks (falling asleep mid-task/conversation), plus episodes where her knees buckle/face goes slack with strong emotion/laughter (CATAPLEXY), vivid hallucinations on falling asleep/waking (hypnagogic/hypnopompic) and SLEEP PARALYSIS; mood and studies are affected. Recognise NARCOLEPSY \u2014 chronic excessive daytime sleepiness with sleep attacks, and (in narcolepsy type 1) CATAPLEXY (sudden loss of muscle tone triggered by emotion), plus the REM-intrusion phenomena (sleep paralysis, hypnagogic hallucinations, disrupted night sleep) \u2014 distinguish from other causes of sleepiness (insufficient sleep, OSA, depression, drugs, other hypersomnias), screen impact and DRIVING/safety, use an Epworth-type assessment, and REFER to a SLEEP/neurology service for diagnosis (sleep studies/MSLT) and treatment (sleep hygiene + scheduled naps; stimulants/modafinil for sleepiness; agents for cataplexy). Address the DVLA/driving and psychosocial impact, and that cataplexy is highly specific for narcolepsy. The skill is recognising the sleepiness+cataplexy pattern, not mislabelling it laziness/depression, and referring. No NG12 cancer link.',
    script:{
      opening:'"Doctor, I can\u2019t stay awake in the day \u2014 I fall asleep without warning, even mid-conversation or in lectures, however much I sleep at night. And this strange thing happens: when I laugh hard or get a fright, my knees buckle and my face goes slack for a few seconds. I also get terrifying moments where I can\u2019t move as I\u2019m falling asleep. People think I\u2019m just lazy. It\u2019s wrecking my studies."',
      facts:[
        { topic:'Recognise narcolepsy', text:'NARCOLEPSY: chronic EXCESSIVE DAYTIME SLEEPINESS with irresistible SLEEP ATTACKS (falling asleep mid-activity), unrefreshing despite adequate night sleep, plus REM-intrusion phenomena \u2014 SLEEP PARALYSIS, HYPNAGOGIC/hypnopompic HALLUCINATIONS, and fragmented night sleep. Her relentless daytime sleep attacks fit.' },
        { topic:'Cataplexy \u2014 the specific clue', text:'KEY \u2014 CATAPLEXY (sudden, transient loss of muscle tone \u2014 knees buckling, head drooping, facial slackening \u2014 triggered by strong EMOTION, classically LAUGHTER) is highly specific for NARCOLEPSY TYPE 1 (associated with orexin/hypocretin deficiency). Her emotion-triggered muscle weakness is a strong pointer; consciousness is preserved during cataplexy (distinguishing it from syncope/seizure).' },
        { topic:'Exclude other causes of sleepiness', text:'Distinguish from other causes of excessive daytime sleepiness: INSUFFICIENT/poor sleep, OBSTRUCTIVE SLEEP APNOEA (snoring/witnessed apnoeas/obesity), DEPRESSION, DRUGS/alcohol, shift work, other hypersomnias, and (for the spells) syncope or seizures \u2014 but preserved consciousness with emotional triggers points to cataplexy. Use an Epworth-type sleepiness assessment.' },
        { topic:'Don\u2019t mislabel \u2014 take it seriously', text:'Patients with narcolepsy are often mislabelled as LAZY or depressed and suffer years of delay; take the symptoms seriously, validate the impact (studies, mood, relationships), and recognise the pattern rather than dismissing it.' },
        { topic:'Refer + driving/safety', text:'REFER to a SLEEP/NEUROLOGY service for diagnosis (sleep studies \u2014 polysomnography and Multiple Sleep Latency Test, \u00b1 CSF orexin) and treatment: sleep hygiene with scheduled NAPS, stimulant/wake-promoting agents (e.g. modafinil) for sleepiness, and agents for cataplexy. Address the DVLA/DRIVING implications (excessive sleepiness/narcolepsy must be notified and driving may need to stop until controlled) and the psychosocial/educational impact.' },
        { topic:'Hidden agenda', text:'She is distressed, mislabelled "lazy", and her studies are suffering. Recognise narcolepsy (sleepiness + cataplexy + REM phenomena), exclude other causes, validate and not dismiss, refer to sleep/neurology, and address driving and impact.' },
      ],
      ice:{ ideas:'People think she\u2019s lazy; she fears something is wrong; doesn\u2019t know what it is.', concerns:'The uncontrollable sleepiness and odd muscle/paralysis episodes; impact on studies/mood; being judged.', expectations:'An explanation and help. What she needs: recognition of narcolepsy (incl. cataplexy), exclusion of other causes, validation, sleep/neurology referral, and driving/impact advice.' },
      cues:['Chronic excessive daytime sleepiness + irresistible sleep attacks + sleep paralysis/hypnagogic hallucinations \u2014 narcolepsy.','Emotion/laughter-triggered loss of muscle tone with preserved consciousness = CATAPLEXY \u2014 highly specific for narcolepsy type 1.','Don\u2019t mislabel as laziness/depression; exclude OSA/insufficient sleep; refer sleep/neurology; address DVLA/driving.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises NARCOLEPSY \u2014 chronic excessive daytime sleepiness with irresistible sleep attacks plus REM-intrusion phenomena (sleep paralysis, hypnagogic hallucinations)' },
      { dom:'tasks', text:'Recognises CATAPLEXY (emotion/laughter-triggered transient loss of muscle tone with preserved consciousness) as highly specific for narcolepsy type 1' },
      { dom:'tasks', text:'Excludes other causes of excessive daytime sleepiness (insufficient/poor sleep, OSA, depression, drugs/alcohol, shift work, other hypersomnias; syncope/seizure for the spells) and uses an Epworth-type assessment' },
      { dom:'tasks', text:'Does NOT mislabel the patient as lazy/depressed, takes the symptoms seriously, and validates the impact' },
      { dom:'tasks', text:'REFERS to sleep/neurology for diagnosis (polysomnography/MSLT \u00b1 orexin) and treatment (scheduled naps/sleep hygiene, modafinil/stimulants, cataplexy agents), and addresses DVLA/DRIVING' },
      { dom:'rto',   text:'Validates the distress and the "lazy" mislabelling, explains the likely diagnosis sensitively, and checks understanding' },
      { dom:'rto',   text:'Addresses the educational/psychosocial impact and the driving issue supportively' },
      { dom:'gs',    text:'Safety-nets and follows up: sleep/neurology referral, driving/safety advice, impact support, and review \u2014 recognising the sleepiness+cataplexy pattern and referring, not dismissing as laziness' },
    ],
    worked:[
      { lbl:'Validate + recognise', txt:'"You are NOT lazy \u2014 what you\u2019re describing sounds like a real neurological sleep condition called narcolepsy. The uncontrollable daytime sleep attacks, the paralysis as you fall asleep, and especially your knees buckling when you laugh all fit."' },
      { lbl:'The cataplexy clue', txt:'"That last one \u2014 losing muscle strength with strong emotion while staying fully aware \u2014 is called cataplexy, and it\u2019s quite specific for narcolepsy. It\u2019s not fainting or a fit."' },
      { lbl:'Exclude other causes', txt:'"Let me check a few things \u2014 how much sleep you actually get, any snoring or gasping at night, your mood, and any medications. I\u2019ll use a quick sleepiness score too."' },
      { lbl:'Refer', txt:'"I\u2019m referring you to the sleep/neurology specialists, who confirm it with sleep studies and can treat it \u2014 things like scheduled short naps, a wake-promoting medicine for the sleepiness, and treatment for the cataplexy. It\u2019s manageable."' },
      { lbl:'Driving', txt:'"One important thing: this kind of sleepiness affects driving \u2014 there\u2019s a duty to tell the DVLA, and you may need to pause driving until it\u2019s controlled. We\u2019ll go through that."' },
      { lbl:'Support + safety-net', txt:'"This has clearly hit your studies and confidence \u2014 we can support that, including letting your university know it\u2019s a medical condition. Come back if things worsen, and I\u2019ll chase the referral."' },
    ],
    learning:'NARCOLEPSY is chronic EXCESSIVE DAYTIME SLEEPINESS with irresistible SLEEP ATTACKS (falling asleep mid-activity, unrefreshing despite adequate night sleep) plus REM-intrusion phenomena \u2014 SLEEP PARALYSIS, HYPNAGOGIC/hypnopompic HALLUCINATIONS and fragmented night sleep. The highly specific clue is CATAPLEXY \u2014 sudden, transient loss of muscle tone (knees buckling, head drooping, facial slackening) triggered by strong EMOTION, classically LAUGHTER, with PRESERVED consciousness (distinguishing it from syncope/seizure) \u2014 which characterises narcolepsy type 1 (orexin/hypocretin deficiency). Distinguish narcolepsy from other causes of excessive daytime sleepiness: insufficient/poor sleep, obstructive sleep apnoea (snoring/witnessed apnoeas/obesity), depression, drugs/alcohol, shift work and other hypersomnias, using an Epworth-type assessment. Patients are frequently mislabelled as lazy or depressed and endure years of diagnostic delay, so take the symptoms seriously and validate the impact on studies, mood and relationships rather than dismissing them. Refer to a sleep/neurology service for diagnosis (polysomnography and Multiple Sleep Latency Test, \u00b1 CSF orexin) and treatment \u2014 sleep hygiene with scheduled naps, wake-promoting agents (e.g. modafinil) for sleepiness, and specific agents for cataplexy \u2014 and address the DVLA/DRIVING implications (excessive sleepiness/narcolepsy must be notified and driving may need to stop until controlled) and the psychosocial/educational impact. The skill is recognising the sleepiness + cataplexy + REM-phenomena pattern, not mislabelling it laziness/depression, and referring appropriately. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Narcolepsy \u00b7 excessive daytime sleepiness + cataplexy + REM phenomena \u00b7 sleep/neurology referral (PSG/MSLT) \u00b7 DVLA/driving',
      points:[
        { h:'Recognise narcolepsy', t:'Chronic excessive daytime sleepiness with irresistible sleep attacks, sleep paralysis, hypnagogic hallucinations, fragmented night sleep.' },
        { h:'Cataplexy', t:'Emotion/laughter-triggered transient loss of muscle tone with preserved consciousness \u2014 highly specific for narcolepsy type 1 (orexin deficiency). Not syncope/seizure.' },
        { h:'Exclude other causes', t:'Insufficient/poor sleep, OSA (snoring/apnoeas/obesity), depression, drugs/alcohol, shift work, other hypersomnias; syncope/seizure for spells. Use Epworth-type assessment.' },
        { h:'Don\u2019t mislabel', t:'Often mislabelled lazy/depressed with years of delay. Take seriously and validate impact (studies/mood/relationships).' },
        { h:'Refer & treat', t:'Sleep/neurology for PSG/MSLT (\u00b1 orexin); treatment: sleep hygiene + scheduled naps, modafinil/stimulants for sleepiness, agents for cataplexy.' },
        { h:'Driving', t:'Excessive sleepiness/narcolepsy must be notified to the DVLA; driving may need to stop until controlled. Address explicitly.' },
        { h:'Never do', t:'Never dismiss as laziness/depression; never miss cataplexy; never overlook OSA/insufficient sleep; never omit the driving/safety issue.' },
        { h:'Safety-net & follow-up', t:'Sleep/neurology referral; driving/safety advice; educational/psychosocial support; review.' }
      ]
    }
  };

  /* ===== 257. Phaeochromocytoma ===== */
  const c257 = {
    id:'phaeochromocytoma', title:'"I get these sudden terrifying attacks \u2014 pounding headache, racing heart, drenching sweats \u2014 and my blood pressure\u2019s all over the place"', type:'video', duration:12,
    meta:{ age:39, sex:'M', setting:'Face-to-face \u2014 paroxysmal symptoms with labile hypertension.', system:'Endocrinology \u2014 phaeochromocytoma: the secondary-hypertension zebra' },
    brief:'Mr Dominic Vasquez, 39, has episodic PAROXYSMS of pounding HEADACHE, PALPITATIONS and drenching SWEATING (the classic triad), with pallor, tremor, anxiety/sense of doom, lasting minutes, plus labile/resistant HYPERTENSION found at checks; he may be young for essential hypertension. Recognise the possibility of PHAEOCHROMOCYTOMA (a catecholamine-secreting tumour, usually adrenal) \u2014 suggested by the classic paroxysmal triad (headache, palpitations, sweating) with hypertension (paroxysmal or sustained), and consider it in SECONDARY/resistant/young-onset hypertension or paroxysmal symptoms; distinguish from common mimics (anxiety/panic, hyperthyroidism, arrhythmia, menopause, drugs); INVESTIGATE appropriately \u2014 plasma free METANEPHRINES or 24-hour urinary metanephrines/catecholamines, then imaging \u2014 and REFER to endocrinology; understand the broad management principle that ALPHA-BLOCKADE must precede beta-blockade before surgery (giving a beta-blocker first/alone can precipitate a hypertensive crisis), and that surgery is curative; note familial/genetic associations (MEN2, VHL, NF1). The skill is THINKING of phaeochromocytoma in the paroxysmal-triad/secondary-HTN patient, testing metanephrines, and referring \u2014 not just labelling it anxiety. No NG12 cancer link.',
    script:{
      opening:'"Doctor, I keep getting these frightening attacks out of nowhere \u2014 a pounding headache, my heart races, I pour with sweat and go pale and shaky, with this awful sense of dread. They last a few minutes then pass. And the nurse keeps getting really high, all-over-the-place blood pressure readings. I\u2019m only 39. People keep saying it\u2019s anxiety, but it doesn\u2019t feel like that."',
      facts:[
        { topic:'Recognise the phaeochromocytoma picture', text:'PHAEOCHROMOCYTOMA (a catecholamine-secreting tumour, usually adrenal medulla) classically causes PAROXYSMS of the triad \u2014 pounding HEADACHE, PALPITATIONS and drenching SWEATING \u2014 with pallor, tremor, anxiety/sense of doom, and HYPERTENSION that may be paroxysmal or sustained, often labile/resistant. The episodic triad with labile BP in a younger patient should raise the possibility.' },
        { topic:'Consider in secondary/young/resistant HTN', text:'Consider phaeochromocytoma (and other secondary causes) in: paroxysmal symptoms as above, RESISTANT hypertension, YOUNG-ONSET hypertension, hypertensive crises, or a hereditary syndrome \u2014 rather than assuming essential hypertension or anxiety. It is rare but important ("the zebra") because it is potentially curable and dangerous if missed.' },
        { topic:'Distinguish the mimics', text:'Distinguish from common mimics: ANXIETY/PANIC disorder (overlapping symptoms \u2014 but phaeochromocytoma has marked objective hypertension/pallor and a more stereotyped triad), HYPERTHYROIDISM (check TFTs), arrhythmia (palpitations/ECG), menopause, drugs/stimulants (and certain drug interactions), and carcinoid. Don\u2019t simply label it anxiety without considering an organic cause given the labile hypertension.' },
        { topic:'Investigate \u2014 metanephrines', text:'INVESTIGATE: the key tests are biochemical \u2014 plasma free METANEPHRINES or 24-hour URINARY metanephrines/catecholamines (raised in phaeochromocytoma); if positive, IMAGING (CT/MRI of the adrenals \u00b1 functional imaging) localises the tumour. Also assess for the mimics (TFTs, ECG). Refer to ENDOCRINOLOGY.' },
        { topic:'Management principle \u2014 alpha before beta', text:'KEY PRINCIPLE \u2014 management (specialist-led) requires ALPHA-blockade FIRST (e.g. phenoxybenzamine/doxazosin) before any BETA-blockade, because giving a beta-blocker first/alone can cause unopposed alpha-mediated vasoconstriction and a HYPERTENSIVE CRISIS. Definitive treatment is surgical removal (curative). Note hereditary associations (MEN2, von Hippel-Lindau, NF1) \u2014 genetic assessment/family screening may be relevant.' },
        { topic:'Hidden agenda', text:'He has been told it\u2019s "anxiety" but it doesn\u2019t fit, and he\u2019s frightened. The skill is to THINK of phaeochromocytoma given the paroxysmal triad + labile/young hypertension, test metanephrines, screen mimics, refer to endocrinology, and not just reassure him it\u2019s anxiety \u2014 while remembering the alpha-before-beta principle.' },
      ],
      ice:{ ideas:'Repeatedly told it\u2019s anxiety, but it doesn\u2019t feel like that; wants the cause found.', concerns:'The frightening attacks; the high/erratic blood pressure; being dismissed as anxious.', expectations:'A proper explanation. What he needs: consideration of phaeochromocytoma (paroxysmal triad + labile/young HTN), metanephrine testing, mimic screen, and endocrinology referral \u2014 not just an anxiety label.' },
      cues:['Paroxysmal headache + palpitations + sweating (classic triad) with labile/resistant/young-onset hypertension \u2014 think phaeochromocytoma.','Investigate with plasma free or 24-hour urinary metanephrines, then imaging; screen mimics (anxiety, hyperthyroid, arrhythmia); refer endocrinology.','Management principle: alpha-blockade BEFORE beta-blockade (beta first can cause hypertensive crisis); surgery is curative; familial associations (MEN2/VHL/NF1).']
    },
    checkpoints:[
      { dom:'tasks', text:'Considers PHAEOCHROMOCYTOMA from the classic paroxysmal triad (headache, palpitations, sweating) with labile/resistant/young-onset HYPERTENSION \u2014 rather than assuming essential hypertension or anxiety' },
      { dom:'tasks', text:'Recognises the indications to consider secondary hypertension (paroxysmal symptoms, resistant/young-onset HTN, hypertensive crises, hereditary syndromes)' },
      { dom:'tasks', text:'Distinguishes the mimics (anxiety/panic, hyperthyroidism \u2014 TFTs, arrhythmia \u2014 ECG, menopause, drugs/stimulants) rather than simply labelling it anxiety' },
      { dom:'tasks', text:'Investigates with plasma free METANEPHRINES or 24-hour urinary metanephrines/catecholamines, then imaging if positive, and refers to ENDOCRINOLOGY' },
      { dom:'tasks', text:'Knows the management principle that ALPHA-blockade must precede BETA-blockade (beta first/alone risks a hypertensive crisis), that surgery is curative, and that hereditary associations exist (MEN2/VHL/NF1)' },
      { dom:'rto',   text:'Validates that "it doesn\u2019t feel like anxiety", takes the paroxysmal symptoms and labile BP seriously, and explains the plan without dismissing him' },
      { dom:'rto',   text:'Explains the investigations and referral clearly and checks understanding, balancing thoroughness with reassurance' },
      { dom:'gs',    text:'Safety-nets and follows up: metanephrine testing + endocrinology referral, interim BP/symptom safety-netting (severe headache/crisis \u2192 urgent care), mimic screening, and review \u2014 thinking of the zebra and testing, not just an anxiety label' },
    ],
    worked:[
      { lbl:'Take it seriously', txt:'"I hear you \u2014 and you\u2019re right that recurrent attacks like this, with your blood pressure swinging high, deserve more than an \u2018anxiety\u2019 label, especially at 39. There\u2019s a specific condition I want to check for."' },
      { lbl:'Name the possibility', txt:'"That triad \u2014 pounding headache, racing heart and drenching sweats in sudden episodes, with high erratic blood pressure \u2014 can be caused by a rare hormone-producing growth on the adrenal gland called a phaeochromocytoma. It\u2019s uncommon but important because it\u2019s treatable and curable."' },
      { lbl:'Investigate + screen mimics', txt:'"The key test measures hormones called metanephrines \u2014 either a blood test or a 24-hour urine collection. I\u2019ll also check your thyroid and do a heart tracing, as those can cause similar symptoms."' },
      { lbl:'Refer', txt:'"If the test is positive, you\u2019d have a scan to find it and see the hormone specialists. There\u2019s an important detail in treatment \u2014 a specific type of blood-pressure medicine has to be started first before others \u2014 which the specialists manage."' },
      { lbl:'Reassure proportionately', txt:'"This is rare, so it may well turn out not to be this \u2014 but it\u2019s exactly the kind of thing we shouldn\u2019t miss, which is why I\u2019m testing rather than just reassuring you."' },
      { lbl:'Safety-net', txt:'"While we investigate, if you get a sudden severe headache, chest pain, or feel very unwell during an attack, seek urgent help. I\u2019ll arrange the tests and referral and we\u2019ll review the results together."' },
    ],
    learning:'PHAEOCHROMOCYTOMA (a catecholamine-secreting tumour, usually of the adrenal medulla) classically causes PAROXYSMS of the triad \u2014 pounding HEADACHE, PALPITATIONS and drenching SWEATING \u2014 with pallor, tremor, anxiety/sense of doom, and HYPERTENSION that may be paroxysmal or sustained and is often labile/resistant; the episodic triad with labile BP, especially in a younger patient, should raise the possibility. Consider phaeochromocytoma (and other secondary causes of hypertension) in paroxysmal symptoms, RESISTANT hypertension, YOUNG-ONSET hypertension, hypertensive crises, or a hereditary syndrome, rather than assuming essential hypertension or anxiety \u2014 it is rare but important ("the zebra") because it is potentially curable and dangerous if missed. Distinguish the common mimics: anxiety/panic disorder (overlapping symptoms, but phaeochromocytoma has marked objective hypertension/pallor and a stereotyped triad), hyperthyroidism (check TFTs), arrhythmia (ECG), menopause, and drugs/stimulants. Investigate biochemically first \u2014 plasma free METANEPHRINES or 24-hour urinary metanephrines/catecholamines \u2014 and, if positive, image (CT/MRI of the adrenals \u00b1 functional imaging) to localise the tumour, referring to endocrinology. A key management principle (specialist-led) is that ALPHA-blockade must precede BETA-blockade, because giving a beta-blocker first or alone can cause unopposed alpha-mediated vasoconstriction and a hypertensive crisis; definitive treatment is surgical removal, which is curative, and hereditary associations (MEN2, von Hippel-Lindau, NF1) may warrant genetic assessment/family screening. The skill is to think of phaeochromocytoma in the paroxysmal-triad/secondary-hypertension patient, test metanephrines, screen mimics and refer \u2014 not just label it anxiety. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Phaeochromocytoma \u00b7 paroxysmal triad + labile/resistant/young HTN \u00b7 metanephrines + imaging \u00b7 alpha-before-beta \u00b7 surgery curative \u00b7 MEN2/VHL/NF1',
      points:[
        { h:'Recognise', t:'Paroxysmal headache + palpitations + sweating (triad) with pallor/tremor/doom and labile or sustained hypertension. Episodic triad + labile BP, esp. younger \u2192 consider phaeochromocytoma.' },
        { h:'When to consider', t:'Paroxysmal symptoms, resistant or young-onset hypertension, hypertensive crises, hereditary syndromes \u2014 think secondary hypertension, not just essential HTN/anxiety.' },
        { h:'Mimics', t:'Anxiety/panic (but objective HTN/pallor/stereotyped triad differ), hyperthyroidism (TFTs), arrhythmia (ECG), menopause, drugs/stimulants. Don\u2019t just label anxiety.' },
        { h:'Investigate', t:'Plasma free metanephrines or 24-hour urinary metanephrines/catecholamines; if positive, CT/MRI adrenals \u00b1 functional imaging. Refer endocrinology.' },
        { h:'Alpha before beta', t:'Specialist management: alpha-blockade (phenoxybenzamine/doxazosin) before beta-blockade \u2014 beta first/alone risks a hypertensive crisis. Surgery is curative.' },
        { h:'Hereditary', t:'Associations: MEN2, von Hippel-Lindau, NF1 \u2014 genetic assessment/family screening may be relevant.' },
        { h:'Never do', t:'Never dismiss the paroxysmal triad + labile/young HTN as just anxiety; never give a beta-blocker first; never skip metanephrine testing/endocrinology referral.' },
        { h:'Safety-net & follow-up', t:'Metanephrines + endocrinology referral; urgent care for severe headache/crisis; mimic screen; review results.' }
      ]
    }
  };

  /* ===== 258. Wilson's disease ===== */
  const c258 = {
    id:'wilsons-disease', title:'"My son\u2019s 19, his liver tests are abnormal, his hands have started shaking and he\u2019s become withdrawn and moody"', type:'video', duration:12,
    meta:{ age:19, sex:'M', setting:'Face-to-face \u2014 a young adult with combined liver & neuropsychiatric features.', system:'Hepatology / Neurology \u2014 Wilson\u2019s disease: a treatable inherited cause to consider' },
    brief:'A young man (Adam, 19) presents (with a parent) with a combination of unexplained abnormal LIVER function, a new TREMOR/movement problem and dysarthria, and NEUROPSYCHIATRIC change (mood/personality change, decline in studies). Recognise that WILSON\u2019S DISEASE (an autosomal-recessive disorder of COPPER accumulation) should be CONSIDERED in a YOUNG person (typically <40) with unexplained LIVER disease and/or NEUROLOGICAL (tremor, dystonia, dysarthria, parkinsonism) and PSYCHIATRIC (mood/behaviour/cognitive) features \u2014 because it is a RARE but TREATABLE inherited cause that is devastating if missed; know the diagnostic clues (low serum CAERULOPLASMIN, raised urinary/hepatic copper, KAYSER-FLEISCHER rings on slit-lamp eye examination), the need to consider it in young hepatitis/neuropsychiatric presentations, family screening (siblings), and REFERRAL to hepatology/neurology/specialist for confirmation and treatment (copper chelation \u2014 penicillamine/trientine \u2014 or zinc; lifelong; transplant in severe liver failure). The skill is THINKING of Wilson\u2019s in a young person with combined liver + neuro/psychiatric features, doing/arranging caeruloplasmin and a slit-lamp exam, and referring \u2014 not attributing it to "just teenage moodiness" or isolated liver disease. No NG12 cancer link.',
    script:{
      opening:'(Parent, with the young man) "We\u2019re worried about Adam. His blood tests showed his liver\u2019s not right, but he doesn\u2019t drink much. Over the last several months his hands have started shaking, his speech is a bit slurred sometimes, and he\u2019s become really withdrawn and moody \u2014 his college work\u2019s fallen apart. Could it all be connected?"',
      facts:[
        { topic:'Think Wilson\u2019s \u2014 the combination is the clue', text:'CORE \u2014 the COMBINATION of unexplained LIVER disease with NEUROLOGICAL (tremor, dystonia, dysarthria, parkinsonism, clumsiness) and/or PSYCHIATRIC/behavioural (mood/personality change, cognitive decline, falling grades) features in a YOUNG person (typically <40) should make you THINK of WILSON\u2019S DISEASE \u2014 an autosomal-recessive disorder of COPPER accumulation (liver and brain). The "could it all be connected?" combination is the key prompt.' },
        { topic:'Why it matters \u2014 rare but treatable', text:'Wilson\u2019s is RARE but crucially TREATABLE \u2014 and devastating (progressive liver failure, irreversible neurological/psychiatric damage, death) if MISSED. That is why it must be considered and excluded in young, unexplained liver and/or neuropsychiatric presentations rather than attributed to alcohol, "teenage moodiness" or primary psychiatric illness alone.' },
        { topic:'Diagnostic clues', text:'Diagnostic clues/tests: a low serum CAERULOPLASMIN, raised 24-hour URINARY COPPER (and raised hepatic copper on biopsy), and KAYSER-FLEISCHER RINGS (copper deposits at the corneal margin) on SLIT-LAMP examination (especially with neurological involvement); LFTs, copper studies and genetic testing support the diagnosis. Arrange/seek caeruloplasmin and a slit-lamp eye exam.' },
        { topic:'Family screening', text:'As an autosomal-recessive condition, SIBLINGS and family should be SCREENED, since early treatment of pre-symptomatic relatives prevents disease. Mention family screening as part of the plan.' },
        { topic:'Refer & treat', text:'REFER to HEPATOLOGY/NEUROLOGY/specialist services for confirmation and treatment: copper CHELATION (penicillamine or trientine) or ZINC (reduces copper absorption), a low-copper approach, lifelong treatment and monitoring, and liver TRANSPLANT for severe liver failure. Primary care\u2019s role is to think of it, do initial tests, and refer.' },
        { topic:'Hidden agenda', text:'The family wonders if the liver, tremor and mood changes are connected \u2014 and they may be (Wilson\u2019s). The skill is to take the combination seriously, think of Wilson\u2019s, arrange caeruloplasmin/slit-lamp/copper studies, refer to specialists, and not dismiss the neuropsychiatric change as adolescence or treat the liver in isolation.' },
      ],
      ice:{ ideas:'(Parent) the liver, tremor and mood changes might be connected; worried about their son.', concerns:'The unexplained liver problem, the new tremor/speech change, and the personality/mood decline; what is wrong.', expectations:'An explanation and help. What is needed: consideration of Wilson\u2019s disease (combined liver + neuro/psychiatric in a young person), caeruloplasmin/slit-lamp/copper studies, family screening, and specialist referral.' },
      cues:['Young person (<40) with unexplained liver disease + tremor/dysarthria + mood/behaviour change \u2014 think Wilson\u2019s disease (copper accumulation).','Rare but TREATABLE and devastating if missed \u2014 don\u2019t attribute to alcohol or "teenage moodiness".','Clues: low caeruloplasmin, raised urinary copper, Kayser-Fleischer rings (slit-lamp); screen siblings; refer hepatology/neurology for chelation/zinc.']
    },
    checkpoints:[
      { dom:'tasks', text:'THINKS of WILSON\u2019S DISEASE from the COMBINATION of unexplained liver disease with neurological (tremor/dysarthria/dystonia) and/or psychiatric/behavioural features in a young person (<40)' },
      { dom:'tasks', text:'Recognises it is rare but TREATABLE and devastating if missed \u2014 not attributing the picture to alcohol, "teenage moodiness" or primary psychiatric illness alone' },
      { dom:'tasks', text:'Knows the diagnostic clues \u2014 low serum CAERULOPLASMIN, raised urinary/hepatic copper, KAYSER-FLEISCHER rings on slit-lamp \u2014 and arranges/seeks caeruloplasmin and a slit-lamp eye examination (plus LFTs/copper studies)' },
      { dom:'tasks', text:'Recognises the autosomal-recessive inheritance and the need for FAMILY (sibling) SCREENING' },
      { dom:'tasks', text:'REFERS to hepatology/neurology/specialist services for confirmation and treatment (copper chelation \u2014 penicillamine/trientine \u2014 or zinc; lifelong; transplant in severe liver failure)' },
      { dom:'rto',   text:'Takes the family\u2019s "could it all be connected?" seriously, validates their concern, and explains the plan sensitively to the young person and parent' },
      { dom:'rto',   text:'Communicates the need for specialist assessment clearly without over-alarming, and checks understanding' },
      { dom:'gs',    text:'Safety-nets and follows up: caeruloplasmin/slit-lamp/copper studies + specialist referral, family screening, mental-health support as needed, and review \u2014 thinking of a treatable inherited cause, not dismissing it' },
    ],
    worked:[
      { lbl:'Take the combination seriously', txt:'"Yes \u2014 it may well all be connected, and you were right to ask. When a young person has liver problems together with a new tremor, slurred speech and changes in mood, there\u2019s a specific condition we must consider called Wilson\u2019s disease, where copper builds up in the body."' },
      { lbl:'Why it matters', txt:'"It\u2019s rare, but it\u2019s really important because it\u2019s treatable \u2014 and if it\u2019s caught late it can cause lasting harm to the liver and brain. So it\u2019s exactly the kind of thing we shouldn\u2019t miss in someone Adam\u2019s age."' },
      { lbl:'Tests', txt:'"I\u2019ll arrange some tests \u2014 a blood test called caeruloplasmin and copper studies, repeat liver tests, and an eye examination with the specialists to look for a copper ring at the edge of the cornea, which is a classic sign."' },
      { lbl:'Refer', txt:'"I\u2019m referring Adam to the liver and neurology specialists to confirm the diagnosis and start treatment if needed \u2014 medicines that remove or block copper, taken long-term."' },
      { lbl:'Family + support', txt:'"Because it runs in families, his brothers and sisters should also be checked \u2014 treating it early prevents problems. And the mood changes are part of this, not him being difficult; we\u2019ll support that too."' },
      { lbl:'Safety-net', txt:'"Come back sooner if he becomes more unwell, jaundiced, or his mood or thinking deteriorate. I\u2019ll get the tests and referral moving and we\u2019ll go through the results together."' },
    ],
    learning:'WILSON\u2019S DISEASE (an autosomal-recessive disorder of COPPER accumulation affecting liver and brain) should be CONSIDERED in a YOUNG person (typically <40) with unexplained LIVER disease and/or NEUROLOGICAL (tremor, dystonia, dysarthria, parkinsonism, clumsiness) and PSYCHIATRIC/behavioural (mood/personality change, cognitive decline, falling grades) features \u2014 the COMBINATION of hepatic with neuropsychiatric features being the key prompt ("could it all be connected?"). It is rare but crucially TREATABLE, and devastating (progressive liver failure, irreversible neurological/psychiatric damage, death) if missed, so it must be considered and excluded rather than attributed to alcohol, "teenage moodiness" or primary psychiatric illness alone. Diagnostic clues include a low serum CAERULOPLASMIN, raised 24-hour urinary copper (and raised hepatic copper on biopsy), and KAYSER-FLEISCHER rings (copper at the corneal margin) on slit-lamp examination (especially with neurological involvement); arrange/seek caeruloplasmin and a slit-lamp eye exam alongside LFTs and copper studies, with genetic testing supporting the diagnosis. As an autosomal-recessive condition, siblings and family should be SCREENED, since early treatment of pre-symptomatic relatives prevents disease. Refer to hepatology/neurology/specialist services for confirmation and treatment \u2014 copper chelation (penicillamine or trientine) or zinc (reduces absorption), a low-copper approach, lifelong treatment and monitoring, and liver transplant for severe liver failure. Primary care\u2019s role is to think of it, arrange initial tests, and refer. The skill is recognising the combined liver + neuro/psychiatric pattern in a young person, doing/arranging caeruloplasmin and a slit-lamp exam, screening family, and referring \u2014 not dismissing it. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Wilson\u2019s disease \u00b7 young + liver + neuro/psychiatric \u00b7 caeruloplasmin/urinary copper/Kayser-Fleischer rings \u00b7 chelation/zinc \u00b7 family screening',
      points:[
        { h:'When to think Wilson\u2019s', t:'Young person (<40) with unexplained liver disease and/or neurological (tremor/dysarthria/dystonia) and psychiatric/behavioural features. The combination is the key clue.' },
        { h:'Why it matters', t:'Rare but treatable; devastating (liver failure, irreversible neuro/psychiatric damage) if missed. Don\u2019t attribute to alcohol/"teenage moodiness"/primary psychiatric illness alone.' },
        { h:'Diagnostic clues', t:'Low serum caeruloplasmin, raised 24-hour urinary (and hepatic) copper, Kayser-Fleischer rings on slit-lamp (esp. with neuro involvement); LFTs, copper studies, genetics.' },
        { h:'Family screening', t:'Autosomal recessive \u2014 screen siblings/family; early treatment of pre-symptomatic relatives prevents disease.' },
        { h:'Refer & treat', t:'Hepatology/neurology/specialist: copper chelation (penicillamine/trientine) or zinc; low-copper approach; lifelong treatment/monitoring; transplant for severe liver failure.' },
        { h:'Primary care role', t:'Think of it, arrange initial tests (caeruloplasmin/copper studies/LFTs) and slit-lamp, and refer.' },
        { h:'Never do', t:'Never dismiss young combined liver + neuropsychiatric features as moodiness/alcohol; never treat the liver in isolation; never omit caeruloplasmin/slit-lamp or family screening.' },
        { h:'Safety-net & follow-up', t:'Caeruloplasmin/slit-lamp/copper studies + specialist referral; family screening; mental-health support; review; sooner review if more unwell/jaundiced/deteriorating.' }
      ]
    }
  };

  /* ===== 259. Tics / Tourette's ===== */
  const c259 = {
    id:'tics-tourettes', title:'"My 9-year-old keeps blinking, shrugging and making throat-clearing noises \u2014 he can\u2019t seem to stop. Is it a habit or something serious?"', type:'video', duration:12,
    meta:{ age:9, sex:'M', setting:'Face-to-face \u2014 childhood movements/noises, parent present.', system:'Paediatrics / Neurology \u2014 tics & Tourette\u2019s: recognition, reassurance & when to refer' },
    brief:'A mother brings 9-year-old Finn with months of repetitive MOTOR tics (blinking, facial grimacing, shoulder shrugging) and VOCAL tics (throat-clearing, sniffing), which wax and wane, are briefly suppressible, worse with stress/excitement/tiredness, and often preceded by an urge; he is otherwise developing normally. Recognise TICS and TOURETTE SYNDROME (multiple motor tics + \u22651 vocal tic for >1 year, onset in childhood) \u2014 understand that tics are common in children, often TRANSIENT/self-limiting, typically with a premonitory urge and temporary suppressibility, waxing and waning; assess IMPACT (school, social, self-esteem, bullying) and screen common COMORBIDITIES (ADHD, OCD, anxiety); REASSURE (most are mild and improve, often by late adolescence) and give psychoeducation; MANAGE mild tics with reassurance/education/managing triggers, and refer for behavioural therapy (habit-reversal/CBIT) or specialist/medication only if tics are significantly impairing or comorbidities need treatment; consider RED FLAGS warranting referral (sudden severe onset, neurological signs, developmental regression, very disabling tics). The skill is recognising tics/Tourette\u2019s, reassuring appropriately, screening comorbidities and impact, and referring proportionately \u2014 not over-medicalising a common, often benign condition. No NG12 cancer link.',
    script:{
      opening:'"I\u2019m a bit worried about Finn \u2014 for the last few months he keeps blinking a lot, scrunching his face, shrugging his shoulders, and making these throat-clearing and sniffing noises. He says he can hold them in for a bit but then has to do them. It\u2019s worse when he\u2019s tired or excited. Is it just a habit, or is it something serious like Tourette\u2019s?"',
      facts:[
        { topic:'Recognise tics', text:'TICS are sudden, repetitive, stereotyped MOTOR (blinking, grimacing, shrugging) or VOCAL (throat-clearing, sniffing, grunting) movements/sounds; characteristically they WAX AND WANE, are briefly SUPPRESSIBLE, are worse with stress/excitement/tiredness, and are often preceded by a PREMONITORY URGE. Finn\u2019s picture is typical of tics.' },
        { topic:'Tourette syndrome vs transient tics', text:'Tics are COMMON in children and often TRANSIENT/self-limiting. TOURETTE SYNDROME is diagnosed when there are MULTIPLE MOTOR tics PLUS at least ONE VOCAL tic, present for more than a YEAR, with childhood onset. Many tic disorders are milder/transient and don\u2019t meet Tourette criteria; most improve over time, often by late adolescence.' },
        { topic:'Assess impact & comorbidities', text:'Assess the IMPACT (school, social situations, self-esteem, bullying, physical discomfort) and screen the common COMORBIDITIES that often matter more than the tics themselves: ADHD, OCD, and anxiety (and learning difficulties). Recognising and addressing comorbidities is key.' },
        { topic:'Reassure & psychoeducate', text:'REASSURE: tics are common, usually not a sign of a serious underlying disease, and most are mild and improve over time. Give psychoeducation \u2014 explain the premonitory urge and suppressibility, that drawing attention to/criticising tics can worsen them, and that managing stress/tiredness helps. For mild tics, reassurance and education are often all that\u2019s needed.' },
        { topic:'When to refer/treat', text:'Refer/treat if tics are significantly IMPAIRING (distress, pain, function) or comorbidities need treatment: behavioural therapy \u2014 HABIT-REVERSAL TRAINING / Comprehensive Behavioural Intervention for Tics (CBIT) \u2014 is first-line, with medication (specialist) for severe tics. Consider RED FLAGS warranting referral: sudden severe onset, abnormal neurological signs, developmental regression, or very disabling tics.' },
        { topic:'Hidden agenda', text:'The parent fears Tourette\u2019s/something serious. Recognise tics, reassure proportionately (common, often benign/transient, most improve), explain Tourette criteria, screen impact and comorbidities (ADHD/OCD/anxiety), and refer for behavioural therapy/specialist only if impairing \u2014 not over-medicalising, and giving practical psychoeducation.' },
      ],
      ice:{ ideas:'Is it "just a habit" or "something serious like Tourette\u2019s"?', concerns:'The movements/noises; whether it\u2019s serious; impact on Finn (school/teasing).', expectations:'An explanation/reassurance. What is needed: recognition of tics, reassurance (common, often transient, most improve), Tourette criteria, impact/comorbidity screen, and behavioural-therapy referral only if impairing.' },
      cues:['Repetitive motor (blink/grimace/shrug) + vocal (throat-clear/sniff) movements, waxing/waning, suppressible, urge-preceded, worse with stress/tiredness \u2014 tics.','Tourette syndrome = multiple motor + \u22651 vocal tic >1 year, childhood onset; many tics are transient/mild and improve by late adolescence.','Screen impact + comorbidities (ADHD/OCD/anxiety); reassure + psychoeducate; refer for habit-reversal/CBIT or specialist only if impairing/red flags.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises TICS \u2014 sudden, repetitive, stereotyped motor/vocal movements that wax and wane, are briefly suppressible, worse with stress/tiredness, and often urge-preceded' },
      { dom:'tasks', text:'Knows that tics are common and often transient/self-limiting, and the TOURETTE criteria (multiple motor tics + \u22651 vocal tic for >1 year, childhood onset) \u2014 with most improving over time' },
      { dom:'tasks', text:'Assesses IMPACT (school/social/self-esteem/bullying/physical) and screens the common COMORBIDITIES (ADHD, OCD, anxiety) that often matter more than the tics' },
      { dom:'tasks', text:'REASSURES and gives psychoeducation (premonitory urge/suppressibility, that drawing attention worsens tics, managing stress/tiredness) \u2014 reassurance/education sufficient for mild tics' },
      { dom:'tasks', text:'Refers/treats proportionately \u2014 behavioural therapy (habit-reversal/CBIT) first-line, medication (specialist) for severe tics \u2014 and considers RED FLAGS (sudden severe onset, neurological signs, developmental regression, very disabling tics)' },
      { dom:'rto',   text:'Addresses the parent\u2019s fear ("is it Tourette\u2019s/serious?") with proportionate reassurance, validates concern, and explains sensitively' },
      { dom:'rto',   text:'Gives practical psychoeducation and checks understanding, avoiding over-medicalising a common, often benign condition' },
      { dom:'gs',    text:'Safety-nets and follows up: review if tics become impairing or comorbidities emerge, behavioural-therapy/specialist referral if needed, red flags warranting referral, and reassurance \u2014 proportionate, not over-medicalised, care' },
    ],
    worked:[
      { lbl:'Recognise + reassure', txt:'"What you\u2019re describing are tics \u2014 the blinking, face-scrunching, shrugging and throat-clearing, that he can briefly hold in and that come and go and worsen when he\u2019s tired or excited. They\u2019re very common in children, and the reassuring news is most are mild and improve over time, often by the late teens."' },
      { lbl:'Explain Tourette\u2019s', txt:'"\u2018Tourette\u2019s\u2019 specifically means lots of movement tics plus at least one sound tic lasting over a year. Even if Finn meets that, it\u2019s not dangerous and it\u2019s manageable \u2014 it doesn\u2019t damage the brain."' },
      { lbl:'Check impact + comorbidities', txt:'"How are the tics affecting him \u2014 at school, with friends, any teasing? And a few related things often go alongside tics \u2014 trouble concentrating, anxiety, or repetitive worries/rituals. Any of those? Those can matter more than the tics themselves."' },
      { lbl:'Psychoeducation', txt:'"A helpful tip: try not to keep telling him to stop \u2014 drawing attention to tics tends to make them worse. Reducing stress and tiredness helps, and the urge-then-tic pattern is normal."' },
      { lbl:'When to do more', txt:'"If the tics start really bothering him or getting in the way, there\u2019s an effective talking therapy \u2014 habit-reversal training \u2014 and the specialists can help, including medication for severe cases. We don\u2019t need that for mild tics."' },
      { lbl:'Safety-net', txt:'"Come back if the tics become distressing or disabling, if the concentration/anxiety side becomes a problem, or if anything changes suddenly or he loses skills \u2014 then I\u2019d refer. Otherwise, reassurance and keeping an eye on it."' },
    ],
    learning:'TICS are sudden, repetitive, stereotyped MOTOR (blinking, grimacing, shrugging) or VOCAL (throat-clearing, sniffing, grunting) movements/sounds that characteristically WAX AND WANE, are briefly SUPPRESSIBLE, are worse with stress/excitement/tiredness, and are often preceded by a PREMONITORY URGE. Tics are COMMON in children and often TRANSIENT/self-limiting; TOURETTE SYNDROME is diagnosed when there are multiple motor tics plus at least one vocal tic for more than a year with childhood onset \u2014 but many tic disorders are milder/transient, don\u2019t meet Tourette criteria, and most improve over time (often by late adolescence). Assess the IMPACT (school, social situations, self-esteem, bullying, physical discomfort) and screen the common COMORBIDITIES \u2014 ADHD, OCD and anxiety (and learning difficulties) \u2014 which often matter more than the tics themselves. Reassure (tics are common, usually not a sign of serious underlying disease, and most are mild and improve) and give psychoeducation: explain the premonitory urge and suppressibility, that drawing attention to or criticising tics can worsen them, and that managing stress/tiredness helps \u2014 for mild tics, reassurance and education are often sufficient. Refer/treat proportionately if tics are significantly impairing or comorbidities need treatment: behavioural therapy \u2014 habit-reversal training / Comprehensive Behavioural Intervention for Tics (CBIT) \u2014 is first-line, with medication (specialist) for severe tics, and consider red flags warranting referral (sudden severe onset, abnormal neurological signs, developmental regression, very disabling tics). The skill is recognising tics/Tourette\u2019s, reassuring appropriately, screening impact and comorbidities, and referring proportionately \u2014 not over-medicalising a common, often benign condition. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Tics & Tourette syndrome \u00b7 common/often transient \u00b7 comorbidities (ADHD/OCD/anxiety) \u00b7 reassurance + psychoeducation \u00b7 habit-reversal/CBIT; refer if impairing',
      points:[
        { h:'Recognise tics', t:'Sudden, repetitive, stereotyped motor/vocal movements that wax and wane, are briefly suppressible, worse with stress/tiredness, often urge-preceded.' },
        { h:'Tourette criteria', t:'Multiple motor tics + \u22651 vocal tic for >1 year, childhood onset. Many tics are milder/transient and improve over time (often by late adolescence).' },
        { h:'Impact & comorbidities', t:'Assess school/social/self-esteem/bullying impact; screen ADHD, OCD, anxiety (often matter more than the tics).' },
        { h:'Reassure & psychoeducate', t:'Common, usually benign, most improve. Explain urge/suppressibility; drawing attention worsens tics; manage stress/tiredness. Mild tics: reassurance/education sufficient.' },
        { h:'When to refer/treat', t:'Significantly impairing tics or comorbidities \u2192 behavioural therapy (habit-reversal/CBIT) first-line; medication (specialist) for severe tics.' },
        { h:'Red flags', t:'Sudden severe onset, abnormal neurological signs, developmental regression, very disabling tics \u2192 referral.' },
        { h:'Never do', t:'Never over-medicalise common mild tics; never miss the comorbidities (ADHD/OCD/anxiety); never tell the parent to keep criticising/drawing attention to tics.' },
        { h:'Safety-net & follow-up', t:'Review if tics become impairing or comorbidities emerge; behavioural-therapy/specialist referral; red flags; proportionate reassurance.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c256, c257, c258, c259);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'narcolepsy': {
      ceg: ['New & undifferentiated presentations', 'Mental health & addiction'],
      stem: {
        name: 'Orla Hennessy', age: '22 years \u00b7 female',
        pmh: ['Overwhelming excessive daytime sleepiness + irresistible sleep attacks (mid-task)', '\u26a0 Emotion/laughter-triggered loss of muscle tone (cataplexy); sleep paralysis; hypnagogic hallucinations', 'Mislabelled "lazy"; studies/mood affected'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"I fall asleep without warning in the day, even mid-conversation \u2014 and my knees buckle when I laugh."',
        reason: 'Face-to-face \u2014 excessive daytime sleepiness in a young adult.'
      },
      timeMap: [
        { t:'0\u2010-2',  h:'Recognise + validate', d:'Sleep attacks + cataplexy + sleep paralysis = narcolepsy; not laziness.' },
        { t:'2\u2010-4',  h:'Cataplexy clue', d:'Emotion/laughter-triggered tone loss with preserved consciousness \u2014 specific for narcolepsy type 1.' },
        { t:'4\u2010-6',  h:'Exclude other causes', d:'Insufficient sleep, OSA, depression, drugs; Epworth assessment.' },
        { t:'6\u2010-9',  h:'Refer', d:'Sleep/neurology (PSG/MSLT); naps/sleep hygiene, modafinil, cataplexy agents.' },
        { t:'9\u2010-12', h:'Driving + support', d:'DVLA duty/driving; educational/psychosocial support; review.' }
      ],
      wordPics: {
        fail: 'Dismisses as laziness/depression; misses cataplexy; no sleep/neurology referral or driving advice.',
        pass: 'Recognises narcolepsy with cataplexy, excludes other causes, and refers to sleep/neurology with driving advice.',
        exc:  'Recognises narcolepsy (sleepiness + cataplexy + REM phenomena), validates rather than mislabelling, excludes OSA/insufficient sleep, refers to sleep/neurology, and addresses DVLA/driving and educational impact.'
      },
      avoid: [
        { dont:'"You probably just need better sleep habits/early nights."', instead:'"Falling asleep mid-conversation plus your knees buckling when you laugh points to narcolepsy \u2014 a real condition needing sleep-clinic assessment."', why:'Dismissing as poor sleep/laziness delays a treatable neurological diagnosis.' },
        { dont:'(Missing cataplexy) ignoring the laughter-triggered weakness.', instead:'"That emotion-triggered muscle weakness with full awareness is cataplexy \u2014 quite specific for narcolepsy."', why:'Cataplexy is the key specific clue and must be recognised.' },
        { dont:'(No driving advice) referring without mentioning driving.', instead:'"This affects driving \u2014 there\u2019s a duty to tell the DVLA and you may need to pause driving until controlled."', why:'Excessive sleepiness has important driving/safety/DVLA implications.' }
      ]
    },

    'phaeochromocytoma': {
      ceg: ['Long-term conditions & cancer', 'New & undifferentiated presentations'],
      stem: {
        name: 'Dominic Vasquez', age: '39 years \u00b7 male',
        pmh: ['Paroxysms of pounding headache + palpitations + drenching sweating + pallor/tremor/doom', '\u26a0 Labile/high blood-pressure readings; young for essential HTN', 'Repeatedly told "anxiety"'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Sudden attacks \u2014 pounding headache, racing heart, drenching sweats \u2014 and my BP\u2019s all over the place."',
        reason: 'Face-to-face \u2014 paroxysmal symptoms with labile hypertension.'
      },
      timeMap: [
        { t:'0\u2010-2',  h:'Think the zebra', d:'Paroxysmal triad + labile/young HTN \u2192 consider phaeochromocytoma, not just anxiety.' },
        { t:'2\u2010-4',  h:'When to consider', d:'Paroxysmal symptoms, resistant/young-onset HTN, crises, hereditary syndromes.' },
        { t:'4\u2010-6',  h:'Mimics', d:'Anxiety/panic, hyperthyroid (TFTs), arrhythmia (ECG), menopause, stimulants.' },
        { t:'6\u2010-9',  h:'Investigate', d:'Plasma free or 24h urinary metanephrines; imaging if positive; endocrinology referral.' },
        { t:'9\u2010-12', h:'Principles + safety-net', d:'Alpha before beta; surgery curative; MEN2/VHL/NF1; urgent care for crisis.' }
      ],
      wordPics: {
        fail: 'Labels it anxiety without considering an organic cause; no metanephrines/endocrinology referral; (or) starts a beta-blocker alone.',
        pass: 'Considers phaeochromocytoma, tests metanephrines and screens mimics, and refers endocrinology.',
        exc:  'Thinks of phaeochromocytoma from the paroxysmal triad + labile/young HTN, screens mimics, investigates with metanephrines + imaging, refers endocrinology, and knows the alpha-before-beta principle and hereditary associations.'
      },
      avoid: [
        { dont:'"It\u2019s anxiety/panic attacks \u2014 try some relaxation techniques."', instead:'"With that triad and high erratic blood pressure at 39, I want to rule out a phaeochromocytoma \u2014 a hormone-producing adrenal tumour \u2014 with a metanephrine test."', why:'Labelling it anxiety without testing risks missing a curable, dangerous cause.' },
        { dont:'(Beta-blocker first) starting a beta-blocker for the palpitations/HTN.', instead:'"In phaeochromocytoma a beta-blocker first can trigger a crisis \u2014 alpha-blockade must come first, managed by specialists."', why:'Unopposed alpha effects from beta-first can precipitate a hypertensive crisis.' },
        { dont:'(No metanephrines) investigating with only routine bloods.', instead:'"The key test is plasma or 24-hour urinary metanephrines."', why:'Metanephrines are the specific screening test for phaeochromocytoma.' }
      ]
    },

    'wilsons-disease': {
      ceg: ['New & undifferentiated presentations', 'Mental health & addiction'],
      stem: {
        name: 'Adam (parent present)', age: '19 years \u00b7 male',
        pmh: ['Unexplained abnormal LFTs (minimal alcohol)', '\u26a0 New tremor + dysarthria; \u26a0 mood/personality change, declining studies', 'Combined liver + neuropsychiatric features in a young adult'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '(Parent) "His liver tests are abnormal, his hands shake, and he\u2019s become withdrawn and moody \u2014 could it all be connected?"',
        reason: 'Face-to-face \u2014 young adult with combined liver & neuropsychiatric features.'
      },
      timeMap: [
        { t:'0\u2010-2',  h:'Think Wilson\u2019s', d:'Young + unexplained liver + tremor/dysarthria + mood/behaviour change \u2192 Wilson\u2019s disease.' },
        { t:'2\u2010-4',  h:'Why it matters', d:'Rare but treatable, devastating if missed; don\u2019t blame alcohol/"moodiness".' },
        { t:'4\u2010-7',  h:'Diagnostic clues', d:'Low caeruloplasmin, raised urinary copper, Kayser-Fleischer rings (slit-lamp); LFTs/copper studies.' },
        { t:'7\u2010-9',  h:'Family + refer', d:'Autosomal recessive \u2014 screen siblings; refer hepatology/neurology (chelation/zinc).' },
        { t:'9\u2010-12', h:'Support + safety-net', d:'Mental-health support; review; sooner if jaundiced/deteriorating.' }
      ],
      wordPics: {
        fail: 'Treats the abnormal LFTs in isolation or attributes the mood/tremor to adolescence; never considers Wilson\u2019s or arranges caeruloplasmin/slit-lamp.',
        pass: 'Thinks of Wilson\u2019s from the combination, arranges caeruloplasmin/copper studies/slit-lamp, and refers.',
        exc:  'Recognises the combined young liver + neuropsychiatric picture as possible Wilson\u2019s, arranges caeruloplasmin/copper studies and slit-lamp, screens family, refers hepatology/neurology, and supports the patient/family.'
      },
      avoid: [
        { dont:'"His liver tests are mildly off \u2014 we\u2019ll just recheck them; the moodiness is probably his age."', instead:'"The liver and the tremor and mood changes together in a 19-year-old make me think of Wilson\u2019s disease \u2014 a treatable copper disorder we mustn\u2019t miss."', why:'Treating the liver in isolation and dismissing neuropsychiatric change misses a treatable, devastating diagnosis.' },
        { dont:'(No specific tests) ordering only routine bloods.', instead:'"I\u2019ll check caeruloplasmin and copper studies and arrange a slit-lamp eye exam for copper rings."', why:'Caeruloplasmin/copper studies and Kayser-Fleischer rings are the specific clues.' },
        { dont:'(No family screening) ignoring siblings.', instead:'"As it\u2019s inherited, his siblings should be screened \u2014 early treatment prevents disease."', why:'Autosomal-recessive inheritance means family screening matters.' }
      ]
    },

    'tics-tourettes': {
      ceg: ['Children & young people', 'Mental health & addiction'],
      stem: {
        name: 'Finn (parent present)', age: '9 years \u00b7 male',
        pmh: ['Months of motor tics (blinking, grimacing, shrugging) + vocal tics (throat-clearing, sniffing)', 'Wax/wane, briefly suppressible, urge-preceded, worse with stress/tiredness', 'Otherwise developing normally'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"He keeps blinking, shrugging and making throat-clearing noises \u2014 is it a habit or something serious like Tourette\u2019s?"',
        reason: 'Face-to-face \u2014 childhood movements/noises.'
      },
      timeMap: [
        { t:'0\u2010-2',  h:'Recognise tics', d:'Motor + vocal tics, wax/wane, suppressible, urge-preceded, worse with stress/tiredness.' },
        { t:'2\u2010-4',  h:'Tourette vs transient', d:'Tourette = multiple motor + \u22651 vocal >1 year; many tics transient/mild, improve over time.' },
        { t:'4\u2010-6',  h:'Impact + comorbidities', d:'School/social/self-esteem/bullying; screen ADHD/OCD/anxiety.' },
        { t:'6\u2010-9',  h:'Reassure + psychoeducate', d:'Common/benign, most improve; don\u2019t draw attention to tics; manage stress/tiredness.' },
        { t:'9\u2010-12', h:'Refer if impairing + safety-net', d:'Habit-reversal/CBIT or specialist if impairing; red flags (sudden/severe/regression).' }
      ],
      wordPics: {
        fail: 'Over-medicalises mild tics or alarms the parent; misses comorbidities (ADHD/OCD/anxiety); advises constantly telling the child to stop.',
        pass: 'Recognises tics/Tourette\u2019s, reassures, screens comorbidities, and refers proportionately if impairing.',
        exc:  'Recognises tics and the Tourette criteria, reassures proportionately (common, often transient, most improve), screens impact and comorbidities (ADHD/OCD/anxiety), gives psychoeducation, and refers for habit-reversal/CBIT or specialist only if impairing/red flags.'
      },
      avoid: [
        { dont:'"This is Tourette\u2019s \u2014 he\u2019ll need medication."', instead:'"These are tics, very common in children and usually mild and improving \u2014 most don\u2019t need medication, and there\u2019s an effective behavioural therapy if they bother him."', why:'Over-medicalising/alarming about mild tics is disproportionate.' },
        { dont:'(Missing comorbidities) focusing only on the tics.', instead:'"Any trouble concentrating, anxiety, or repetitive worries/rituals? Those often go with tics and can matter more."', why:'ADHD/OCD/anxiety frequently coexist and often matter more than the tics.' },
        { dont:'"Just keep telling him to stop doing them."', instead:'"Try not to draw attention to them \u2014 that tends to make tics worse; reducing stress and tiredness helps."', why:'Drawing attention to tics worsens them; psychoeducation is key.' }
      ]
    }

  });

})();
