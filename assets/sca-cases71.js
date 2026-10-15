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
    id: 'narcolepsy',
    title: '"I fall asleep without warning in the day, even mid-conversation \u2014 and my knees buckle when I laugh"',
    type: 'video',
    duration: 12,
    meta: {
      age: 22,
      sex: 'F',
      setting: 'Video consultation \u2014 excessive daytime sleepiness in a young adult (history-led; bloods arranged, no examination needed on the day).',
      system: 'Neurology / Sleep \u2014 narcolepsy: recognition, cataplexy & referral',
      checked: 'October 2026'
    },
    brief: 'Miss Orla Hennessy, 22, student, has months-to-years of overwhelming EXCESSIVE DAYTIME SLEEPINESS with irresistible sleep attacks (falling asleep mid-task/conversation), plus episodes where her knees buckle/face goes slack with strong emotion/laughter (CATAPLEXY), vivid hallucinations on falling asleep/waking (hypnagogic/hypnopompic) and SLEEP PARALYSIS; mood and studies are affected. Recognise NARCOLEPSY \u2014 chronic excessive daytime sleepiness with sleep attacks, and (in narcolepsy type 1) CATAPLEXY (sudden loss of muscle tone triggered by emotion), plus the REM-intrusion phenomena (sleep paralysis, hypnagogic hallucinations, disrupted night sleep) \u2014 distinguish from other causes of sleepiness (insufficient sleep, OSA, depression, drugs, other hypersomnias), screen impact and DRIVING/safety, use the Epworth Sleepiness Scale (a score above 10 suggests excessive sleepiness) and a two-week sleep diary, and REFER to a SLEEP/neurology service for diagnosis (sleep studies/MSLT) and specialist-led treatment (sleep hygiene + scheduled naps; wake-promoting drugs such as modafinil for sleepiness, not started in primary care before diagnosis \u2014 modafinil can harm an unborn baby and reduces the effect of hormonal contraception, so effective contraception is needed, MHRA Drug Safety Update November 2020, relevant for a 22-year-old woman; solriamfetol per NICE TA758 where others have not worked or are unsuitable; agents for cataplexy). Address DRIVING: under current DVLA standards a Group 1 driver with narcolepsy MUST STOP DRIVING and NOTIFY the DVLA, with relicensing considered only after satisfactory symptom control for at least 3 months confirmed by the specialist (Group 2 much stricter); if she drives against advice, the GMC (Confidentiality: patients\u2019 fitness to drive, 2017) allows the doctor to inform the DVLA after telling her. Address the psychosocial impact (Equality Act 2010 reasonable adjustments at university; mood), and that cataplexy is highly specific for narcolepsy. The skill is recognising the sleepiness+cataplexy pattern, not mislabelling it laziness/depression, and referring.',
    script: {
      opening: '"Doctor, I can\u2019t stay awake in the day \u2014 I fall asleep without warning, even mid-conversation or in lectures, however much I sleep at night. And this strange thing happens: when I laugh hard or get a fright, my knees buckle and my face goes slack for a few seconds. I also get terrifying moments where I can\u2019t move as I\u2019m falling asleep. People think I\u2019m just lazy. It\u2019s wrecking my studies."',
      facts: [
        {
          topic: 'Sleepiness',
          text: 'Since about age 17, worse in the last year. Falls asleep in lectures, on the bus, once mid-conversation with a friend, once while eating. A short nap of 15\u201320 minutes refreshes her, then it creeps back. "Not really tired \u2014 it just comes over me."'
        },
        {
          topic: 'The knee-buckling',
          text: 'When she laughs hard or is startled, her knees go weak, her jaw drops and her head nods for a few seconds. Fully aware throughout \u2014 "I can hear everything, I just can\u2019t hold myself up". Has never fallen to the ground fully; grabs a chair. Laughing sets it off most.'
        },
        {
          topic: 'Night-time',
          text: 'In bed 11pm to 8am but wakes many times. Sometimes wakes unable to move for a minute, and sees a figure in the room that isn\u2019t there \u2014 "terrifying". Vivid dreams. Doesn\u2019t snore that anyone has said; flatmate hasn\u2019t noticed pauses in breathing.'
        },
        {
          topic: 'Other causes (if asked)',
          text: 'No shift work. Not using sleeping pills or recreational drugs; cannabis twice at university, not for a year. Alcohol: a few drinks at weekends. Coffee 3\u20134 a day to stay awake. BMI 22. No heavy periods, not tired from anaemia that she knows of. No thyroid symptoms. No head injury.'
        },
        {
          topic: 'Mood (if asked)',
          text: '"Low sometimes, because I\u2019m falling behind and people think I don\u2019t care." Enjoys things, sleeping isn\u2019t the problem, appetite fine. No thoughts of self-harm.'
        },
        {
          topic: 'Driving and safety',
          text: 'Has a driving licence and drives her mum\u2019s car home at weekends (an hour on the motorway). Has "nodded off at traffic lights once". Cooks on a gas hob in her student flat.'
        },
        {
          topic: 'Background',
          text: 'Third-year history student; has failed two essays and been told she may not progress. No medicines except the combined pill. No allergies. No family history of sleep problems.'
        },
        {
          topic: 'How to play it',
          text: 'Articulate, embarrassed, worried you will be called lazy again. If the doctor explains it may be a real neurological condition, show relief: "So it\u2019s a real thing? Not me?" Be upset but accepting about not driving if it is explained kindly. Admit the near-miss at the traffic lights only if driving is asked about.'
        }
      ],
      ice: {
        ideas: '"I honestly don\u2019t know. I started to wonder if they\u2019re right and I\u2019m just lazy."',
        concerns: 'HIDDEN AGENDA \u2014 failing her course; and the frightening episodes. Privately she wonders if the knee-buckling is a kind of epilepsy.',
        expectations: '"Find out what it is, and get some help \u2014 maybe a letter for the university."'
      },
      cues: [
        '"People think I\u2019m just lazy" \u2014 she needs to be believed.',
        '"My knees buckle when I laugh" \u2014 cataplexy, the specific clue.',
        '"I drive home at weekends" (if asked) \u2014 driving safety and DVLA advice.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises NARCOLEPSY \u2014 chronic excessive daytime sleepiness with irresistible sleep attacks plus REM-intrusion phenomena (sleep paralysis, hypnagogic hallucinations)'
      },
      {
        dom: 'dg',
        text: 'Recognises CATAPLEXY (emotion/laughter-triggered transient loss of muscle tone with preserved consciousness) as highly specific for narcolepsy type 1'
      },
      {
        dom: 'dg',
        text: 'Excludes other causes of excessive daytime sleepiness (insufficient/poor sleep, OSA, depression, drugs/alcohol, shift work, other hypersomnias; syncope/seizure for the spells) and uses an Epworth-type assessment'
      },
      {
        dom: 'cm',
        text: 'Does NOT mislabel the patient as lazy/depressed, takes the symptoms seriously, and validates the impact'
      },
      {
        dom: 'cm',
        text: 'REFERS to sleep/neurology for diagnosis (polysomnography/MSLT \u00b1 orexin) and treatment (scheduled naps/sleep hygiene, modafinil/stimulants \u2014 specialist-initiated, with the MHRA November 2020 pregnancy and contraception warning for modafinil \u2014 cataplexy agents), and addresses DVLA/DRIVING (must stop and notify)'
      },
      {
        dom: 'ro',
        text: 'Validates the distress and the "lazy" mislabelling, explains the likely diagnosis sensitively, and checks understanding'
      },
      { dom: 'ro', text: 'Addresses the educational/psychosocial impact and the driving issue supportively' },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: sleep/neurology referral, driving/safety advice, impact support, and review \u2014 recognising the sleepiness+cataplexy pattern and referring, not dismissing as laziness'
      }
    ],
    worked: [
      {
        lbl: 'Validate + recognise',
        txt: '"You are NOT lazy \u2014 what you\u2019re describing sounds like a real neurological sleep condition called narcolepsy. The uncontrollable daytime sleep attacks, the paralysis as you fall asleep, and especially your knees buckling when you laugh all fit."'
      },
      {
        lbl: 'The cataplexy clue',
        txt: '"That last one \u2014 losing muscle strength with strong emotion while staying fully aware \u2014 is called cataplexy, and it\u2019s quite specific for narcolepsy. It\u2019s not fainting or a fit."'
      },
      {
        lbl: 'Exclude other causes',
        txt: '"Let me check a few things \u2014 how much sleep you actually get, any snoring or gasping at night, your mood, and any medications. I\u2019ll use a quick sleepiness score, the Epworth scale, and a two-week sleep diary too."'
      },
      {
        lbl: 'Refer',
        txt: '"I\u2019m referring you to the sleep/neurology specialists, who confirm it with sleep studies and can treat it \u2014 things like scheduled short naps, a wake-promoting medicine for the sleepiness, and treatment for the cataplexy. If they suggest modafinil, it can harm a baby in pregnancy and stops the pill and other hormonal contraception working as well, so we\u2019d talk about reliable contraception. It\u2019s manageable."'
      },
      {
        lbl: 'Driving',
        txt: '"One important thing: this kind of sleepiness affects driving \u2014 you must stop driving now and tell the DVLA. You can reapply once the specialist confirms your symptoms have been well controlled for at least 3 months. We\u2019ll go through that and how you\u2019ll get around."'
      },
      {
        lbl: 'Support + safety-net',
        txt: '"This has clearly hit your studies and confidence \u2014 we can support that, including letting your university know it\u2019s a medical condition. Come back if things worsen, and I\u2019ll chase the referral."'
      }
    ],
    learning: 'NARCOLEPSY is chronic EXCESSIVE DAYTIME SLEEPINESS with irresistible SLEEP attacks (falling asleep mid-activity, unrefreshing despite adequate night sleep) plus REM-intrusion phenomena \u2014 SLEEP PARALYSIS, HYPNAGOGIC/hypnopompic HALLUCINATIONS and fragmented night sleep. The highly specific clue is CATAPLEXY \u2014 sudden, transient loss of muscle tone (knees buckling, head drooping, facial slackening) triggered by strong EMOTION, classically LAUGHTER, with PRESERVED consciousness (distinguishing it from syncope/seizure) \u2014 which characterises narcolepsy type 1 (orexin/hypocretin deficiency). Distinguish narcolepsy from other causes of excessive daytime sleepiness: insufficient/poor sleep, obstructive sleep apnoea (snoring/witnessed apnoeas/obesity), depression, drugs/alcohol, shift work and other hypersomnias, using the Epworth Sleepiness Scale (above 10 suggests excessive sleepiness) and a two-week sleep diary. Patients are frequently mislabelled as lazy or depressed and endure years of diagnostic delay, so take the symptoms seriously and validate the impact on studies, mood and relationships rather than dismissing them. Refer to a sleep/neurology service for diagnosis (polysomnography and Multiple Sleep Latency Test, \u00b1 CSF orexin) and treatment \u2014 sleep hygiene with scheduled naps, wake-promoting agents (e.g. modafinil, specialist-initiated; it can harm an unborn baby and reduces the effect of hormonal contraception, so effective contraception is needed, MHRA Drug Safety Update November 2020; solriamfetol per NICE TA758) for sleepiness, and specific agents for cataplexy \u2014 and address the DVLA/DRIVING implications (under current DVLA standards a Group 1 driver with narcolepsy must stop driving and notify the DVLA, with relicensing considered after satisfactory symptom control for at least 3 months confirmed by the specialist; Group 2 is much stricter) and the psychosocial/educational impact (Equality Act 2010 reasonable adjustments; mood). The skill is recognising the sleepiness + cataplexy + REM-phenomena pattern, not mislabelling it laziness/depression, and referring appropriately.',
    knowledge: {
      guideline: 'Narcolepsy \u00b7 excessive daytime sleepiness + cataplexy + REM phenomena \u00b7 sleep/neurology referral (PSG/MSLT) \u00b7 DVLA/driving \u00b7 [1] DVLA Assessing fitness to drive: a guide for medical professionals (current online version), primary/central hypersomnias including narcolepsy \u00b7 [2] NICE TA758 Solriamfetol for excessive daytime sleepiness caused by narcolepsy (2022) \u00b7 [3] BNF modafinil \u00b7 [4] MHRA Drug Safety Update (November 2020): modafinil and the risk of congenital malformations \u00b7 [5] GMC Confidentiality: patients\u2019 fitness to drive and reporting concerns to the DVLA (2017) \u00b7 [6] Equality Act 2010',
      points: [
        {
          h: 'Recognise narcolepsy',
          t: 'Chronic excessive daytime sleepiness with irresistible sleep attacks, sleep paralysis, hypnagogic hallucinations, fragmented night sleep.'
        },
        {
          h: 'Cataplexy',
          t: 'Emotion/laughter-triggered transient loss of muscle tone with preserved consciousness \u2014 highly specific for narcolepsy type 1 (orexin deficiency). Not syncope/seizure.'
        },
        {
          h: 'Exclude other causes',
          t: 'Insufficient/poor sleep, OSA (snoring/apnoeas/obesity), depression, drugs/alcohol, shift work, other hypersomnias; syncope/seizure for spells. Use the Epworth Sleepiness Scale (above 10 = excessive sleepiness) and a two-week sleep diary.'
        },
        {
          h: 'Don\u2019t mislabel',
          t: 'Often mislabelled lazy/depressed with years of delay. Take seriously and validate impact (studies/mood/relationships).'
        },
        {
          h: 'Refer & treat',
          t: 'Sleep/neurology for PSG/MSLT (\u00b1 orexin); specialist-led treatment: sleep hygiene + scheduled naps, modafinil [3] (pregnancy harm and reduced hormonal contraceptive effect \u2014 effective contraception needed [4]) or other stimulants for sleepiness, solriamfetol [2], agents for cataplexy.'
        },
        {
          h: 'Driving',
          t: 'Group 1: must stop driving and notify the DVLA; relicensing considered after satisfactory symptom control for at least 3 months, confirmed by the specialist; Group 2 much stricter [1]. If she drives against advice, the doctor may inform the DVLA after telling her [5]. Address explicitly.'
        },
        {
          h: 'Never do',
          t: 'Never dismiss as laziness/depression; never miss cataplexy; never overlook OSA/insufficient sleep; never omit the driving/safety issue.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Sleep/neurology referral; driving/safety advice (cooking, bathing, swimming, heights); educational/psychosocial support (Equality Act 2010 [6]); mood; review.'
        }
      ]
    }
  };

  /* ===== 257. Phaeochromocytoma ===== */
  const c257 = {
    id: 'phaeochromocytoma',
    title: '"I get these sudden terrifying attacks \u2014 pounding headache, racing heart, drenching sweats \u2014 and my blood pressure\u2019s all over the place"',
    type: 'video',
    duration: 12,
    meta: {
      age: 39,
      sex: 'M',
      setting: 'Video consultation, with lying and standing BP and the examination (heart, thyroid, fundi) arranged face to face \u2014 paroxysmal symptoms with labile hypertension.',
      system: 'Endocrinology \u2014 phaeochromocytoma: the secondary-hypertension zebra',
      checked: 'October 2026'
    },
    brief: 'Mr Dominic Vasquez, 39, has episodic PAROXYSMS of pounding HEADACHE, PALPITATIONS and drenching SWEATING (the classic triad), with pallor, tremor, anxiety/sense of doom, lasting minutes, plus labile/resistant HYPERTENSION found at checks; he may be young for essential hypertension. Recognise the possibility of PHAEOCHROMOCYTOMA (a catecholamine-secreting tumour, usually adrenal) \u2014 suggested by the classic paroxysmal triad (headache, palpitations, sweating) with hypertension (paroxysmal or sustained), and consider it in SECONDARY/resistant/young-onset hypertension or paroxysmal symptoms; distinguish from common mimics (anxiety/panic, hyperthyroidism, arrhythmia, hypoglycaemia, drugs/stimulants, alcohol withdrawal); INVESTIGATE appropriately \u2014 plasma free METANEPHRINES or 24-hour urinary fractionated metanephrines (Endocrine Society 2014, international), with TFTs, U&E, glucose/HbA1c and an ECG, imaging being arranged by the specialist only after positive biochemistry \u2014 and REFER to endocrinology (NICE NG136: consider specialist evaluation for secondary causes in adults under 40 with hypertension; same-day specialist referral if clinic BP is 180/120 mmHg or higher with suspected phaeochromocytoma); understand the broad management principle that ALPHA-BLOCKADE must precede beta-blockade before surgery (giving a beta-blocker first/alone can precipitate a hypertensive crisis \u2014 the BNF lists phaeochromocytoma as a contraindication to beta-blockers unless an alpha-blocker is in place), and that surgical removal cures most people but lifelong follow-up is needed because tumours can recur and a minority are malignant; note familial/genetic associations (MEN2, VHL, NF1, SDH genes) \u2014 a large share are hereditary, so genetic testing is usually offered. The lying and standing BP and examination are done face to face. The skill is THINKING of phaeochromocytoma in the paroxysmal-triad/secondary-HTN patient, testing metanephrines, and referring \u2014 not just labelling it anxiety.',
    script: {
      opening: '"Doctor, I keep getting these frightening attacks out of nowhere \u2014 a pounding headache, my heart races, I pour with sweat and go pale and shaky, with this awful sense of dread. They last a few minutes then pass. And the nurse keeps getting really high, all-over-the-place blood pressure readings. I\u2019m only 39. People keep saying it\u2019s anxiety, but it doesn\u2019t feel like that."',
      facts: [
        {
          topic: 'The attacks',
          text: 'For about 6 months, two or three a week. Come out of the blue \u2014 at rest, at work, once while straining on the toilet. Pounding headache, heart thumping, soaked in sweat, colleagues say he goes white, hands shake. Lasts 5\u201315 minutes, then washed out for an hour.'
        },
        {
          topic: 'Order of symptoms',
          text: 'The physical symptoms come first; the dread is part of it, not before it. No worrying thoughts beforehand. Not anxious in between: "I\u2019m fine in between."'
        },
        {
          topic: 'Blood pressure',
          text: 'Practice nurse readings over 2 months: 168/104, 142/90, 186/112 \u2014 "she said they were all over the place". Bought a home monitor: one reading during an attack was 210/120, normal ones about 135/85.'
        },
        {
          topic: 'Other questions (if asked)',
          text: 'Lost about half a stone without trying. No chest pain, no fainting. No heat intolerance or diarrhoea. Not diabetic as far as he knows. No caffeine binges (2 coffees a day), no energy drinks, no cocaine or amphetamines, no decongestants or slimming pills. Alcohol 6 units a week.'
        },
        {
          topic: 'Medicines',
          text: 'None regularly. A previous GP suggested propranolol "for the anxiety" \u2014 he hasn\u2019t started it yet. No allergies.'
        },
        {
          topic: 'Family',
          text: '"Not that I know of." Parents alive and well; no known family history of high blood pressure, tumours or hormone problems.'
        },
        { topic: 'Social', text: 'IT project manager. Married, one daughter. Cycles to work.' },
        {
          topic: 'How to play it',
          text: 'Frustrated at being told it\u2019s anxiety; calm and logical in between attacks. If the doctor explores the pattern carefully, warm up. Ask "A growth? Is it cancer?" if a tumour is mentioned. Ask whether you should start the propranolol.'
        }
      ],
      ice: {
        ideas: '"Something physical. It just doesn\u2019t feel like nerves."',
        concerns: '"That something\u2019s being missed. And my blood pressure \u2014 my heart feels like it\u2019ll burst." Worried about having a stroke.',
        expectations: '"Look for the cause properly."'
      },
      cues: [
        '"People keep saying it\u2019s anxiety, but it doesn\u2019t feel like that" \u2014 take the pattern seriously.',
        '"My blood pressure\u2019s all over the place" \u2014 labile hypertension in a young man.',
        '"The other GP suggested propranolol" (if medicines are asked) \u2014 a beta-blocker alone could be dangerous here.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Considers PHAEOCHROMOCYTOMA from the classic paroxysmal triad (headache, palpitations, sweating) with labile/resistant/young-onset HYPERTENSION \u2014 rather than assuming essential hypertension or anxiety'
      },
      {
        dom: 'dg',
        text: 'Recognises the indications to consider secondary hypertension (paroxysmal symptoms, resistant/young-onset HTN, hypertensive crises, hereditary syndromes)'
      },
      {
        dom: 'dg',
        text: 'Distinguishes the mimics (anxiety/panic, hyperthyroidism \u2014 TFTs, arrhythmia \u2014 ECG, hypoglycaemia, drugs/stimulants) rather than simply labelling it anxiety'
      },
      {
        dom: 'dg',
        text: 'Investigates with plasma free METANEPHRINES or 24-hour urinary metanephrines/catecholamines, then imaging if positive, and refers to ENDOCRINOLOGY (same day if clinic BP 180/120 mmHg or higher with suspected phaeochromocytoma, NICE NG136)'
      },
      {
        dom: 'cm',
        text: 'Knows the management principle that ALPHA-blockade must precede BETA-blockade (beta first/alone risks a hypertensive crisis), that surgery cures most people but lifelong follow-up is needed, and that hereditary associations exist (MEN2/VHL/NF1/SDH; genetic testing usually offered)'
      },
      {
        dom: 'ro',
        text: 'Validates that "it doesn\u2019t feel like anxiety", takes the paroxysmal symptoms and labile BP seriously, and explains the plan without dismissing him'
      },
      {
        dom: 'ro',
        text: 'Explains the investigations and referral clearly and checks understanding, balancing thoroughness with reassurance'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: metanephrine testing + endocrinology referral, interim BP/symptom safety-netting (home BP diary; same-day contact if BP 180/120 or higher; severe headache, chest pain, breathlessness or confusion \u2192 999), mimic screening, and review \u2014 thinking of the zebra and testing, not just an anxiety label'
      }
    ],
    worked: [
      {
        lbl: 'Take it seriously',
        txt: '"I hear you \u2014 and you\u2019re right that recurrent attacks like this, with your blood pressure swinging high, deserve more than an \u2018anxiety\u2019 label, especially at 39. There\u2019s a specific condition I want to check for."'
      },
      {
        lbl: 'Name the possibility',
        txt: '"That triad \u2014 pounding headache, racing heart and drenching sweats in sudden episodes, with high erratic blood pressure \u2014 can be caused by a rare hormone-producing growth on the adrenal gland called a phaeochromocytoma. It\u2019s uncommon but important because it\u2019s treatable and usually curable."'
      },
      {
        lbl: 'Investigate + screen mimics',
        txt: '"The key test measures hormones called metanephrines \u2014 either a blood test or a 24-hour urine collection. I\u2019ll also check your thyroid, kidneys and sugar and do a heart tracing, as those can cause similar symptoms, and I\u2019d like to see you in person to check your blood pressure lying and standing."'
      },
      {
        lbl: 'Refer',
        txt: '"If the test is positive, you\u2019d have a scan to find it and see the hormone specialists. There\u2019s an important detail in treatment \u2014 a specific type of blood-pressure medicine has to be started first before others \u2014 which the specialists manage."'
      },
      {
        lbl: 'Reassure proportionately',
        txt: '"This is rare, so it may well turn out not to be this \u2014 but it\u2019s exactly the kind of thing we shouldn\u2019t miss, which is why I\u2019m testing rather than just reassuring you."'
      },
      {
        lbl: 'Safety-net',
        txt: '"While we investigate, if you get a sudden severe headache, chest pain, breathlessness or confusion during an attack, call 999, and contact us the same day if your home blood pressure is 180 over 120 or higher. I\u2019ll arrange the tests and referral and we\u2019ll review the results together."'
      }
    ],
    learning: 'PHAEOCHROMOCYTOMA (a catecholamine-secreting tumour, usually of the adrenal medulla) classically causes PAROXYSMS of the triad \u2014 pounding HEADACHE, PALPITATIONS and drenching SWEATING \u2014 with pallor, tremor, anxiety/sense of doom, and HYPERTENSION that may be paroxysmal or sustained and is often labile/resistant; the episodic triad with labile BP, especially in a younger patient, should raise the possibility. Consider phaeochromocytoma (and other secondary causes of hypertension) in paroxysmal symptoms, RESISTANT hypertension, YOUNG-ONSET hypertension, hypertensive crises, or a hereditary syndrome, rather than assuming essential hypertension or anxiety \u2014 it is rare but important ("the zebra") because it is potentially curable and dangerous if missed. Distinguish the common mimics: anxiety/panic disorder (overlapping symptoms, but phaeochromocytoma has marked objective hypertension/pallor and a stereotyped triad), hyperthyroidism (check TFTs), arrhythmia (ECG), hypoglycaemia, drugs/stimulants and alcohol withdrawal. Investigate biochemically first \u2014 plasma free METANEPHRINES or 24-hour urinary fractionated metanephrines (Endocrine Society 2014, international) with TFTs, U&E, glucose/HbA1c and ECG \u2014 and, if positive, the specialist images (CT/MRI of the adrenals \u00b1 functional imaging) to localise the tumour, with referral to endocrinology (NICE NG136: specialist evaluation for secondary causes under 40; same-day referral if clinic BP is 180/120 mmHg or higher with suspected phaeochromocytoma). A key management principle (specialist-led) is that ALPHA-blockade must precede BETA-blockade, because giving a beta-blocker first or alone can cause unopposed alpha-mediated vasoconstriction and a hypertensive crisis; definitive treatment is surgical removal, which cures most people, though lifelong follow-up is needed because tumours can recur and a minority are malignant; hereditary associations (MEN2, von Hippel-Lindau, NF1, SDH genes) are common, so genetic testing is usually offered and relatives may need screening. The skill is to think of phaeochromocytoma in the paroxysmal-triad/secondary-hypertension patient, test metanephrines, screen mimics and refer \u2014 not just label it anxiety.',
    knowledge: {
      guideline: 'Phaeochromocytoma \u00b7 paroxysmal triad + labile/resistant/young HTN \u00b7 metanephrines + imaging \u00b7 alpha-before-beta \u00b7 surgery cures most, lifelong follow-up \u00b7 MEN2/VHL/NF1/SDH \u00b7 [1] NICE NG136 Hypertension in adults (2019, current version) \u00b7 [2] Endocrine Society clinical practice guideline on phaeochromocytoma and paraganglioma (2014) (international) \u00b7 [3] BNF beta-blocker monographs (contraindications) \u00b7 [4] BNF phenoxybenzamine and doxazosin \u00b7 [5] British and Irish Hypertension Society position statement on young-onset hypertension (2024)',
      points: [
        {
          h: 'Recognise',
          t: 'Paroxysmal headache + palpitations + sweating (triad) with pallor/tremor/doom and labile or sustained hypertension. Episodic triad + labile BP, esp. younger \u2192 consider phaeochromocytoma.'
        },
        {
          h: 'When to consider',
          t: 'Paroxysmal symptoms, resistant or young-onset hypertension, hypertensive crises, hereditary syndromes \u2014 think secondary hypertension, not just essential HTN/anxiety (NICE NG136 [1]: specialist evaluation under 40; BIHS 2024 [5]).'
        },
        {
          h: 'Mimics',
          t: 'Anxiety/panic (but objective HTN/pallor/stereotyped triad differ), hyperthyroidism (TFTs), arrhythmia (ECG), hypoglycaemia, drugs/stimulants, alcohol withdrawal. Don\u2019t just label anxiety.'
        },
        {
          h: 'Investigate',
          t: 'Plasma free metanephrines or 24-hour urinary fractionated metanephrines [2]; if positive, specialist CT/MRI adrenals \u00b1 functional imaging. Refer endocrinology \u2014 same day if clinic BP 180/120 mmHg or higher with suspected phaeochromocytoma [1].'
        },
        {
          h: 'Alpha before beta',
          t: 'Specialist management: alpha-blockade (phenoxybenzamine/doxazosin [4]) before beta-blockade \u2014 beta first/alone risks a hypertensive crisis [3]. Surgery cures most; lifelong follow-up for recurrence and malignancy.'
        },
        {
          h: 'Hereditary',
          t: 'Associations: MEN2, von Hippel-Lindau, NF1, SDH genes \u2014 genetic testing is usually offered and relatives may need screening [2].'
        },
        {
          h: 'Never do',
          t: 'Never dismiss the paroxysmal triad + labile/young HTN as just anxiety; never give a beta-blocker first; never skip metanephrine testing/endocrinology referral.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Metanephrines + endocrinology referral; home BP diary; same-day contact if BP 180/120 or higher; 999 for severe headache, chest pain, breathlessness or confusion; mimic screen; review results.'
        }
      ]
    }
  };

  /* ===== 258. Wilson's disease ===== */
  const c258 = {
    id: 'wilsons-disease',
    title: '"My son\u2019s 19, his liver tests are abnormal, his hands have started shaking and he\u2019s become withdrawn and moody"',
    type: 'video',
    duration: 12,
    meta: {
      age: 19,
      sex: 'M',
      setting: 'Video consultation, parent present with Adam\u2019s agreement, with the liver and neurological examination arranged face to face \u2014 a young adult with combined liver & neuropsychiatric features.',
      system: 'Hepatology / Neurology \u2014 Wilson\u2019s disease: a treatable inherited cause to consider',
      checked: 'October 2026'
    },
    brief: 'A young man (Adam, 19) presents (with a parent) with a combination of unexplained abnormal LIVER function, a new TREMOR/movement problem and dysarthria, and NEUROPSYCHIATRIC change (mood/personality change, decline in studies). Recognise that WILSON\u2019S DISEASE (an autosomal-recessive disorder of COPPER accumulation) should be CONSIDERED in anyone with unexplained LIVER disease \u2014 especially a YOUNG person under about 40 (EASL\u2013ERN 2025, international) \u2014 and/or NEUROLOGICAL (tremor, dystonia, dysarthria, parkinsonism) and PSYCHIATRIC (mood/behaviour/cognitive) features \u2014 because it is a RARE but TREATABLE inherited cause that is devastating if missed; know the diagnostic clues (low serum CAERULOPLASMIN \u2014 though a NORMAL level does not exclude it \u2014 raised urinary/hepatic copper, KAYSER-FLEISCHER rings on slit-lamp eye examination, ATP7B genetics), the need to consider it in young hepatitis/neuropsychiatric presentations, family screening (siblings), and URGENT REFERRAL to hepatology (and neurology) for confirmation and treatment (copper chelation \u2014 penicillamine/trientine \u2014 or zinc, BNF; lifelong, as stopping can cause fatal liver failure; transplant in acute or end-stage liver failure). Adam is 19 and an adult: ask whether he is happy for his parent to stay, and see him alone for part of the consultation (alcohol, drugs, mood and a self-harm risk check; GMC Confidentiality 2017). Arrange same-day assessment for jaundice, confusion, drowsiness, bleeding or bruising, or vomiting blood (possible acute liver failure, often with haemolysis \u2014 dark urine, pallor). Examine the liver and neurology face to face, and do the primary-care liver aetiology screen (BSG abnormal liver blood tests 2018) with caeruloplasmin and a liver ultrasound. The skill is THINKING of Wilson\u2019s in a young person with combined liver + neuro/psychiatric features, doing/arranging caeruloplasmin and a slit-lamp exam, and referring \u2014 not attributing it to "just teenage moodiness" or isolated liver disease.',
    script: {
      opening: '(Parent, with the young man) "We\u2019re worried about Adam. His blood tests showed his liver\u2019s not right, but he doesn\u2019t drink much. Over the last several months his hands have started shaking, his speech is a bit slurred sometimes, and he\u2019s become really withdrawn and moody \u2014 his college work\u2019s fallen apart. Could it all be connected?"',
      facts: [
        {
          topic: 'Who is on the call',
          text: 'Adam (19) and his mother, Louise. Adam answers briefly and quietly; Louise does most of the talking. Louise is happy to leave the room if asked.'
        },
        {
          topic: 'Liver tests',
          text: 'Bloods 3 weeks ago for tiredness: "ALT was raised \u2014 about four times normal \u2014 and they said to discuss it." No jaundice, no itching, no swollen tummy, no vomiting blood, no confusion.'
        },
        {
          topic: 'Neurological symptoms',
          text: 'Hands shaking for about 4 months \u2014 worse when writing or holding a cup; handwriting messy. Speech "a bit thick" sometimes. Drooling a little at night. Clumsier. No seizures, no headaches.'
        },
        {
          topic: 'Mood and behaviour',
          text: 'Adam: "I just feel flat." Stopped seeing friends, can\u2019t concentrate, irritable, sleeping a lot. Failing his college course (engineering). No thoughts of self-harm if asked privately. No hallucinations.'
        },
        {
          topic: 'Alcohol and drugs (Adam, privately)',
          text: '"Honestly, barely anything." A couple of beers a month. No drugs, no steroids, no supplements. No tattoos.'
        },
        {
          topic: 'Family',
          text: 'Younger sister, Ellie (15), is well. An uncle (Louise\u2019s brother) "died of liver problems in his twenties \u2014 we always thought it was drink". Parents are not related.'
        },
        { topic: 'Medicines and health', text: 'No regular medicines; no allergies. Healthy childhood.' },
        {
          topic: 'How to play it',
          text: 'Louise: worried, organised, says "People said teenage moods, but the shaking doesn\u2019t fit." Adam: flat, slow to answer, embarrassed by the tremor. If the doctor talks to Adam directly and kindly, he engages a little more. Louise asks "Is that serious?" and Adam asks "So the mood stuff might be part of it?" and "What about college?".'
        }
      ],
      ice: {
        ideas: 'Louise: "Could it all be connected?" Adam: "I don\u2019t know."',
        concerns: 'HIDDEN AGENDA \u2014 Louise fears it is drugs or alcohol and that Adam is hiding it; she also remembers her brother\u2019s early death. Adam fears he is "going mad" and is ashamed of failing college.',
        expectations: '"An explanation, and someone to look into it properly."'
      },
      cues: [
        '"He doesn\u2019t drink much" \u2014 the liver result is unexplained.',
        '"People said teenage moods, but the shaking doesn\u2019t fit" \u2014 the combination is the clue.',
        '"My brother died of liver problems young" (if family history is asked) \u2014 a possible inherited condition.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'THINKS of WILSON\u2019S DISEASE from the COMBINATION of unexplained liver disease with neurological (tremor/dysarthria/dystonia) and/or psychiatric/behavioural features in a young person (especially under about 40, EASL\u2013ERN 2025)'
      },
      {
        dom: 'dg',
        text: 'Recognises it is rare but TREATABLE and devastating if missed \u2014 not attributing the picture to alcohol, "teenage moodiness" or primary psychiatric illness alone'
      },
      {
        dom: 'dg',
        text: 'Knows the diagnostic clues \u2014 low serum CAERULOPLASMIN, raised urinary/hepatic copper, KAYSER-FLEISCHER rings on slit-lamp \u2014 and arranges/seeks caeruloplasmin (knowing a normal level does not exclude it) and a slit-lamp eye examination (plus LFTs with a liver aetiology screen/copper studies)'
      },
      {
        dom: 'dg',
        text: 'Recognises the autosomal-recessive inheritance and the need for FAMILY (sibling) SCREENING'
      },
      {
        dom: 'cm',
        text: 'REFERS urgently to hepatology/neurology/specialist services for confirmation and treatment (copper chelation \u2014 penicillamine/trientine \u2014 or zinc; lifelong; transplant in acute or end-stage liver failure), with same-day assessment for jaundice, confusion, drowsiness, bleeding or vomiting blood'
      },
      {
        dom: 'ro',
        text: 'Takes the family\u2019s "could it all be connected?" seriously, validates their concern, and explains the plan sensitively to the young person and parent, checking Adam\u2019s consent for his parent to be present and seeing him alone for part of the consultation'
      },
      {
        dom: 'ro',
        text: 'Communicates the need for specialist assessment clearly without over-alarming, and checks understanding'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: caeruloplasmin/slit-lamp/copper studies + specialist referral, family screening, mental-health support with a self-harm risk check, liver-failure warning signs, and review \u2014 thinking of a treatable inherited cause, not dismissing it'
      }
    ],
    worked: [
      {
        lbl: 'Take the combination seriously',
        txt: '"Yes \u2014 it may well all be connected, and you were right to ask. When a young person has liver problems together with a new tremor, slurred speech and changes in mood, there\u2019s a specific condition we must consider called Wilson\u2019s disease, where copper builds up in the body."'
      },
      {
        lbl: 'Why it matters',
        txt: '"It\u2019s rare, but it\u2019s really important because it\u2019s treatable \u2014 and if it\u2019s caught late it can cause lasting harm to the liver and brain. So it\u2019s exactly the kind of thing we shouldn\u2019t miss in someone Adam\u2019s age."'
      },
      {
        lbl: 'Tests',
        txt: '"I\u2019ll arrange some tests \u2014 a blood test called caeruloplasmin, repeat liver tests with a full liver screen and a liver scan, and I\u2019d like to examine Adam in person. The specialists will do copper studies and an eye examination to look for a copper ring at the edge of the cornea, which is a classic sign. A normal caeruloplasmin wouldn\u2019t rule it out on its own."'
      },
      {
        lbl: 'Refer',
        txt: '"I\u2019m referring Adam to the liver and neurology specialists to confirm the diagnosis and start treatment if needed \u2014 medicines that remove or block copper, taken long-term."'
      },
      {
        lbl: 'Family + support',
        txt: '"Because it runs in families, his brothers and sisters should also be checked \u2014 treating it early prevents problems. And the mood changes are part of this, not him being difficult; we\u2019ll support that too."'
      },
      {
        lbl: 'Safety-net',
        txt: '"Get him seen the same day if he becomes yellow, confused or drowsy, bleeds or bruises easily, or vomits blood, and get urgent help if he has any thoughts of harming himself. Come back sooner if his mood or thinking deteriorate. I\u2019ll get the tests and referral moving and we\u2019ll go through the results together."'
      }
    ],
    learning: 'WILSON\u2019S DISEASE (an autosomal-recessive disorder of COPPER accumulation affecting liver and brain) should be CONSIDERED in anyone with unexplained LIVER disease \u2014 especially a YOUNG person under about 40 (EASL\u2013ERN 2025, international) \u2014 and/or NEUROLOGICAL (tremor, dystonia, dysarthria, parkinsonism, clumsiness) and PSYCHIATRIC/behavioural (mood/personality change, cognitive decline, falling grades) features \u2014 the COMBINATION of hepatic with neuropsychiatric features being the key prompt ("could it all be connected?"). It is rare but crucially TREATABLE, and devastating (progressive liver failure, irreversible neurological/psychiatric damage, death) if missed, so it must be considered and excluded rather than attributed to alcohol, "teenage moodiness" or primary psychiatric illness alone. Diagnostic clues include a low serum CAERULOPLASMIN (a normal level does not exclude it), raised 24-hour urinary copper (and raised hepatic copper on biopsy), and KAYSER-FLEISCHER rings (copper at the corneal margin) on slit-lamp examination (especially with neurological involvement); arrange/seek caeruloplasmin and a slit-lamp eye exam alongside LFTs with a liver aetiology screen (BSG 2018) and copper studies, with genetic testing (ATP7B) supporting the diagnosis. As an autosomal-recessive condition, siblings and family should be SCREENED, since early treatment of pre-symptomatic relatives prevents disease. Refer to hepatology/neurology/specialist services for confirmation and treatment \u2014 copper chelation (penicillamine or trientine) or zinc (reduces absorption) (EASL\u2013ERN 2025, AASLD 2022, international; BNF), with dietary copper advice only a minor supportive measure, lifelong treatment and monitoring (stopping can cause fatal liver failure), and liver transplant for acute or end-stage liver failure. Primary care\u2019s role is to think of it, arrange initial tests, refer urgently, and arrange same-day assessment for signs of acute liver failure (jaundice, confusion, drowsiness, bleeding/bruising, vomiting blood) or haemolysis. At 19, Adam is an adult: check his consent for the parent to be present, see him alone for part of the consultation, and assess mood and self-harm risk. The skill is recognising the combined liver + neuro/psychiatric pattern in a young person, doing/arranging caeruloplasmin and a slit-lamp exam, screening family, and referring \u2014 not dismissing it.',
    knowledge: {
      guideline: 'Wilson\u2019s disease \u00b7 young + liver + neuro/psychiatric \u00b7 caeruloplasmin/urinary copper/Kayser-Fleischer rings \u00b7 chelation/zinc \u00b7 family screening \u00b7 [1] EASL\u2013ERN Clinical Practice Guidelines on Wilson\u2019s disease (2025) (international) \u00b7 [2] AASLD practice guidance on Wilson disease (2022) (international) \u00b7 [3] British Society of Gastroenterology guideline on the management of abnormal liver blood tests (2018) \u00b7 [4] BNF penicillamine, trientine and zinc acetate \u00b7 [5] GMC Confidentiality: good practice in handling patient information (2017)',
      points: [
        {
          h: 'When to think Wilson\u2019s',
          t: 'Anyone with unexplained liver disease, especially under about 40 [1], and/or neurological (tremor/dysarthria/dystonia) and psychiatric/behavioural features. The combination is the key clue.'
        },
        {
          h: 'Why it matters',
          t: 'Rare but treatable; devastating (liver failure, irreversible neuro/psychiatric damage) if missed. Don\u2019t attribute to alcohol/"teenage moodiness"/primary psychiatric illness alone.'
        },
        {
          h: 'Diagnostic clues',
          t: 'Low serum caeruloplasmin (a normal level does not exclude it), raised 24-hour urinary (and hepatic) copper, Kayser-Fleischer rings on slit-lamp (esp. with neuro involvement); LFTs, copper studies, genetics (ATP7B) [1].'
        },
        {
          h: 'Family screening',
          t: 'Autosomal recessive \u2014 each sibling has a 1 in 4 chance; screen siblings/family with Adam\u2019s consent to share; early treatment of pre-symptomatic relatives prevents disease.'
        },
        {
          h: 'Refer & treat',
          t: 'Urgent hepatology/neurology/specialist: copper chelation (penicillamine/trientine) or zinc [1,2,4]; dietary copper advice only minor/supportive; lifelong treatment/monitoring; transplant for acute or end-stage liver failure.'
        },
        {
          h: 'Primary care role',
          t: 'Think of it, arrange initial tests (caeruloplasmin, LFTs with liver aetiology screen and ultrasound [3]) and slit-lamp via the specialist, and refer. See Adam alone for part of the consultation (he is an adult) [5].'
        },
        {
          h: 'Never do',
          t: 'Never dismiss young combined liver + neuropsychiatric features as moodiness/alcohol; never treat the liver in isolation; never omit caeruloplasmin/slit-lamp or family screening.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Caeruloplasmin/slit-lamp/copper studies + specialist referral; family screening; mental-health support with a self-harm risk check; review; same-day assessment for jaundice, confusion, drowsiness, bleeding or vomiting blood.'
        }
      ]
    }
  };

  /* ===== 259. Tics / Tourette's ===== */
  const c259 = {
    id: 'tics-tourettes',
    title: '"My 9-year-old keeps blinking, shrugging and making throat-clearing noises \u2014 he can\u2019t seem to stop. Is it a habit or something serious?"',
    type: 'video',
    duration: 12,
    meta: {
      age: 9,
      sex: 'M',
      setting: 'Video consultation, parent present, with a neurological check arranged face to face \u2014 childhood movements/noises.',
      system: 'Paediatrics / Neurology \u2014 tics & Tourette\u2019s: recognition, reassurance & when to refer',
      checked: 'October 2026'
    },
    brief: 'A mother brings 9-year-old Finn with months of repetitive MOTOR tics (blinking, facial grimacing, shoulder shrugging) and VOCAL tics (throat-clearing, sniffing), which wax and wane, are briefly suppressible, worse with stress/excitement/tiredness, and often preceded by an urge; he is otherwise developing normally. Recognise TICS and know TOURETTE SYNDROME (multiple motor tics + \u22651 vocal tic for >1 year, onset before 18) \u2014 after only some months Finn has a PROVISIONAL (transient) tic disorder and does not yet meet the Tourette definition \u2014 understand that tics are common in children, often TRANSIENT/self-limiting, typically with a premonitory urge and temporary suppressibility, waxing and waning; assess IMPACT (school, social, self-esteem, bullying) and screen common COMORBIDITIES (ADHD, OCD, anxiety); REASSURE (most are mild and improve, often by late adolescence) and give psychoeducation; MANAGE mild tics with reassurance/education/managing triggers, and refer (paediatrics or CAMHS per local pathway) for behavioural therapy (habit-reversal training/CBIT or exposure with response prevention, first-line per the ESSTS European clinical guidelines 2021, international) or specialist medication only if tics are significantly impairing or comorbidities need treatment (medication is specialist-only, for severe tics \u2014 aripiprazole is the usual first choice, with clonidine considered where ADHD co-exists; ESSTS 2021, BNFC); ADHD and OCD follow NICE NG87 and NICE CG31; involve school (SENCo support; a long-term tic disorder can be a disability under the Equality Act 2010); consider RED FLAGS warranting paediatric assessment (sudden explosive onset, abnormal neurological signs, developmental regression, movements that are not typical tics such as chorea or staring spells, self-injurious or very disabling tics), with a neurological check arranged face to face. The skill is recognising tics/Tourette\u2019s, reassuring appropriately, screening comorbidities and impact, and referring proportionately \u2014 not over-medicalising a common, often benign condition.',
    script: {
      opening: '"I\u2019m a bit worried about Finn \u2014 for the last few months he keeps blinking a lot, scrunching his face, shrugging his shoulders, and making these throat-clearing and sniffing noises. He says he can hold them in for a bit but then has to do them. It\u2019s worse when he\u2019s tired or excited. Is it just a habit, or is it something serious like Tourette\u2019s?"',
      facts: [
        {
          topic: 'Who is on the call',
          text: 'Mum, Sarah, with Finn (9) beside her. Finn blinks and clears his throat a few times during the call.'
        },
        {
          topic: 'The tics',
          text: 'Started about 5 months ago with blinking, then face-scrunching, shoulder shrugs, throat-clearing and sniffing. Come and go; the type changes over weeks. Worse when tired, excited or watching screens; almost stop when he concentrates on Lego or football.'
        },
        {
          topic: 'Finn\u2019s description',
          text: '"Like an itch I have to scratch. If I do it, it goes away." Can hold them in at school for a while but "they come out more at home".'
        },
        {
          topic: 'Negatives (if asked)',
          text: 'No jerks during sleep, no loss of awareness, no weakness. No recent sore throat or illness before they started. Development normal; no regression. No swearing tics. No medicines.'
        },
        {
          topic: 'School and comorbidity (if asked)',
          text: 'Doing fine at school; teacher hasn\u2019t mentioned concentration problems. Not hyperactive. Likes things "just so" but no rituals that take up time. A bit anxious about tests. One boy copied his blinking last week; Finn was upset.'
        },
        { topic: 'Family', text: 'Dad "blinked a lot as a boy" and grew out of it. No family history of epilepsy.' },
        {
          topic: 'How to play it',
          text: 'Sarah: worried, tends to tell Finn to stop. Fears Tourette\u2019s means swearing ("only what\u2019s on TV"). Relieved by a calm explanation. Asks "So is it Tourette\u2019s?" and "What should I do when he\u2019s doing them?". Finn: shy, answers if spoken to directly.'
        }
      ],
      ice: {
        ideas: 'Sarah: "Either a habit he could stop, or Tourette\u2019s."',
        concerns: 'HIDDEN AGENDA \u2014 she fears Tourette\u2019s means shouting and swearing and that he\u2019ll be bullied. Finn worries about being laughed at.',
        expectations: '"To know what it is, and whether I should be doing something \u2014 maybe a referral."'
      },
      cues: [
        '"He can hold them in for a bit" \u2014 suppressible tics with a premonitory urge.',
        '"Something serious like Tourette\u2019s?" \u2014 fear to address with accurate information.',
        '"A boy copied his blinking" (if school is asked) \u2014 impact and teasing.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises TICS \u2014 sudden, repetitive, stereotyped motor/vocal movements that wax and wane, are briefly suppressible, worse with stress/tiredness, and often urge-preceded'
      },
      {
        dom: 'dg',
        text: 'Knows that tics are common and often transient/self-limiting, and the TOURETTE criteria (multiple motor tics + \u22651 vocal tic for >1 year, onset before 18) \u2014 recognising that a few months of tics is a provisional tic disorder \u2014 with most improving over time'
      },
      {
        dom: 'dg',
        text: 'Assesses IMPACT (school/social/self-esteem/bullying/physical) and screens the common COMORBIDITIES (ADHD, OCD, anxiety) that often matter more than the tics'
      },
      {
        dom: 'ro',
        text: 'REASSURES and gives psychoeducation (premonitory urge/suppressibility, that drawing attention worsens tics, managing stress/tiredness) \u2014 reassurance/education sufficient for mild tics'
      },
      {
        dom: 'cm',
        text: 'Refers/treats proportionately \u2014 behavioural therapy (habit-reversal/CBIT or exposure with response prevention) first-line, medication (specialist; aripiprazole usual first choice, ESSTS 2021, international) for severe tics \u2014 and considers RED FLAGS (sudden severe onset, neurological signs, developmental regression, very disabling tics)'
      },
      {
        dom: 'ro',
        text: 'Addresses the parent\u2019s fear ("is it Tourette\u2019s/serious?") with proportionate reassurance, validates concern, and explains sensitively'
      },
      {
        dom: 'ro',
        text: 'Gives practical psychoeducation and checks understanding, avoiding over-medicalising a common, often benign condition'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: review if tics become impairing or comorbidities emerge, behavioural-therapy/specialist referral if needed, red flags warranting referral, and reassurance \u2014 proportionate, not over-medicalised, care'
      }
    ],
    worked: [
      {
        lbl: 'Recognise + reassure',
        txt: '"What you\u2019re describing are tics \u2014 the blinking, face-scrunching, shrugging and throat-clearing, that he can briefly hold in and that come and go and worsen when he\u2019s tired or excited. They\u2019re very common in children, and the reassuring news is most are mild and improve over time, often by the late teens."'
      },
      {
        lbl: 'Explain Tourette\u2019s',
        txt: '"\u2018Tourette\u2019s\u2019 specifically means lots of movement tics plus at least one sound tic lasting over a year. Finn has had them for a few months, so it\u2019s too early to say \u2014 at the moment we\u2019d call it a tic disorder. Even if Finn meets that later, it\u2019s not dangerous and it\u2019s manageable \u2014 it doesn\u2019t damage the brain."'
      },
      {
        lbl: 'Check impact + comorbidities',
        txt: '"How are the tics affecting him \u2014 at school, with friends, any teasing? And a few related things often go alongside tics \u2014 trouble concentrating, anxiety, or repetitive worries/rituals. Any of those? Those can matter more than the tics themselves."'
      },
      {
        lbl: 'Psychoeducation',
        txt: '"A helpful tip: try not to keep telling him to stop \u2014 drawing attention to tics tends to make them worse. Reducing stress and tiredness helps, and the urge-then-tic pattern is normal."'
      },
      {
        lbl: 'When to do more',
        txt: '"If the tics start really bothering him or getting in the way, there are effective behavioural therapies \u2014 habit-reversal training or exposure with response prevention \u2014 and the specialists can help, including medication for severe cases. We don\u2019t need that for mild tics."'
      },
      {
        lbl: 'Safety-net',
        txt: '"Come back if the tics become distressing or disabling, if the concentration/anxiety side becomes a problem, or if anything changes suddenly or he loses skills \u2014 then I\u2019d refer. Otherwise, reassurance and keeping an eye on it."'
      }
    ],
    learning: 'TICS are sudden, repetitive, stereotyped MOTOR (blinking, grimacing, shrugging) or VOCAL (throat-clearing, sniffing, grunting) movements/sounds that characteristically WAX AND WANE, are briefly SUPPRESSIBLE, are worse with stress/excitement/tiredness, and are often preceded by a PREMONITORY URGE. Tics are COMMON in children and often TRANSIENT/self-limiting; TOURETTE SYNDROME is diagnosed when there are multiple motor tics plus at least one vocal tic for more than a year with onset before 18 (tics for under a year are a provisional tic disorder, as for Finn after a few months) \u2014 but many tic disorders are milder/transient, don\u2019t meet Tourette criteria, and most improve over time (often by late adolescence). Assess the IMPACT (school, social situations, self-esteem, bullying, physical discomfort) and screen the common COMORBIDITIES \u2014 ADHD, OCD and anxiety (and learning difficulties) \u2014 which often matter more than the tics themselves. Reassure (tics are common, usually not a sign of serious underlying disease, and most are mild and improve) and give psychoeducation: explain the premonitory urge and suppressibility, that drawing attention to or criticising tics can worsen them, and that managing stress/tiredness helps \u2014 for mild tics, reassurance and education are often sufficient. Refer/treat proportionately if tics are significantly impairing or comorbidities need treatment: behavioural therapy \u2014 habit-reversal training / Comprehensive Behavioural Intervention for Tics (CBIT) or exposure with response prevention \u2014 is first-line (ESSTS European clinical guidelines 2021, international), with medication specialist-only for severe tics (aripiprazole usually first choice; clonidine where ADHD co-exists; BNFC), ADHD and OCD managed per NICE NG87 and NICE CG31, school support via the SENCo (Equality Act 2010, SEND Code of Practice), and consider red flags warranting referral (sudden severe onset, abnormal neurological signs \u2014 checked face to face \u2014 developmental regression, non-tic movements, very disabling tics). The skill is recognising tics/Tourette\u2019s, reassuring appropriately, screening impact and comorbidities, and referring proportionately \u2014 not over-medicalising a common, often benign condition.',
    knowledge: {
      guideline: 'Tics & Tourette syndrome \u00b7 common/often transient \u00b7 comorbidities (ADHD/OCD/anxiety) \u00b7 reassurance + psychoeducation \u00b7 habit-reversal/CBIT; refer if impairing \u00b7 [1] European clinical guidelines for Tourette syndrome and other tic disorders, version 2.0 (ESSTS, 2021) (international) \u00b7 [2] NICE NG87 Attention deficit hyperactivity disorder (2018) \u00b7 [3] NICE CG31 Obsessive-compulsive disorder and body dysmorphic disorder (2005) \u00b7 [4] BNFC (specialist-initiated medicines for tics) \u00b7 [5] Equality Act 2010 and the SEND Code of Practice (2015)',
      points: [
        {
          h: 'Recognise tics',
          t: 'Sudden, repetitive, stereotyped motor/vocal movements that wax and wane, are briefly suppressible, worse with stress/tiredness, often urge-preceded.'
        },
        {
          h: 'Tourette criteria',
          t: 'Multiple motor tics + \u22651 vocal tic for >1 year, onset before 18. Under a year = provisional (transient) tic disorder. Many tics are milder/transient and improve over time (often by late adolescence) [1].'
        },
        {
          h: 'Impact & comorbidities',
          t: 'Assess school/social/self-esteem/bullying impact; screen ADHD, OCD, anxiety (often matter more than the tics; NICE NG87 [2], CG31 [3]); SENCo support [5].'
        },
        {
          h: 'Reassure & psychoeducate',
          t: 'Common, usually benign, most improve. Explain urge/suppressibility; drawing attention worsens tics; manage stress/tiredness. Mild tics: reassurance/education sufficient.'
        },
        {
          h: 'When to refer/treat',
          t: 'Significantly impairing tics or comorbidities \u2192 behavioural therapy (habit-reversal/CBIT or exposure with response prevention) first-line [1]; medication specialist-only for severe tics (aripiprazole usual first choice; clonidine if ADHD co-exists) [1,4].'
        },
        {
          h: 'Red flags',
          t: 'Sudden severe onset, abnormal neurological signs (checked face to face), developmental regression, non-tic movements (chorea, staring spells), self-injurious or very disabling tics \u2192 paediatric referral.'
        },
        {
          h: 'Never do',
          t: 'Never over-medicalise common mild tics; never miss the comorbidities (ADHD/OCD/anxiety); never tell the parent to keep criticising/drawing attention to tics.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Review if tics become impairing or comorbidities emerge; behavioural-therapy/specialist referral; red flags; proportionate reassurance.'
        }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c256, c257, c258, c259);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {
    narcolepsy: {
      ceg: ['New & undifferentiated presentations', 'Mental health & addiction'],
      stem: {
        name: 'Orla Hennessy',
        age: '22 years \u00b7 female',
        pmh: [
          'Overwhelming excessive daytime sleepiness + irresistible sleep attacks (mid-task)',
          '\u26a0 Emotion/laughter-triggered loss of muscle tone (cataplexy); sleep paralysis; hypnagogic hallucinations',
          'Mislabelled "lazy"; studies/mood affected'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"I fall asleep without warning in the day, even mid-conversation \u2014 and my knees buckle when I laugh."',
        reason: 'Video consultation \u2014 excessive daytime sleepiness in a young adult (history-led; bloods arranged).'
      },
      timeMap: [
        {
          t: '0\u2010-2',
          h: 'Recognise + validate',
          d: 'Sleep attacks + cataplexy + sleep paralysis = narcolepsy; not laziness.'
        },
        {
          t: '2\u2010-4',
          h: 'Cataplexy clue',
          d: 'Emotion/laughter-triggered tone loss with preserved consciousness \u2014 specific for narcolepsy type 1.'
        },
        {
          t: '4\u2010-6',
          h: 'Exclude other causes',
          d: 'Insufficient sleep, OSA, depression, drugs; Epworth assessment.'
        },
        {
          t: '6\u2010-9',
          h: 'Refer',
          d: 'Sleep/neurology (PSG/MSLT); naps/sleep hygiene, modafinil (specialist-initiated; pregnancy/contraception warning, MHRA November 2020), cataplexy agents.'
        },
        {
          t: '9\u2010-12',
          h: 'Driving + support',
          d: 'Stop driving and notify the DVLA (relicensing after at least 3 months of specialist-confirmed control); educational/psychosocial support; review.'
        }
      ],
      wordPics: {
        fail: 'Dismisses as laziness/depression; misses cataplexy; no sleep/neurology referral or driving advice.',
        pass: 'Recognises narcolepsy with cataplexy, excludes other causes, and refers to sleep/neurology with driving advice.',
        exc: 'Recognises narcolepsy (sleepiness + cataplexy + REM phenomena), validates rather than mislabelling, excludes OSA/insufficient sleep, refers to sleep/neurology, and addresses DVLA/driving and educational impact.'
      },
      avoid: [
        {
          dont: '"You probably just need better sleep habits/early nights."',
          instead: '"Falling asleep mid-conversation plus your knees buckling when you laugh points to narcolepsy \u2014 a real condition needing sleep-clinic assessment."',
          why: 'Dismissing as poor sleep/laziness delays a treatable neurological diagnosis.'
        },
        {
          dont: '(Missing cataplexy) ignoring the laughter-triggered weakness.',
          instead: '"That emotion-triggered muscle weakness with full awareness is cataplexy \u2014 quite specific for narcolepsy."',
          why: 'Cataplexy is the key specific clue and must be recognised.'
        },
        {
          dont: '(No driving advice) referring without mentioning driving.',
          instead: '"This affects driving \u2014 you must stop driving now and tell the DVLA; you can reapply once the specialist confirms at least 3 months of good control."',
          why: 'Excessive sleepiness has important driving/safety/DVLA implications: the DVLA standard for narcolepsy is to stop driving and notify.'
        }
      ]
    },
    phaeochromocytoma: {
      ceg: ['Long-term conditions & cancer', 'New & undifferentiated presentations'],
      stem: {
        name: 'Dominic Vasquez',
        age: '39 years \u00b7 male',
        pmh: [
          'Paroxysms of pounding headache + palpitations + drenching sweating + pallor/tremor/doom',
          '\u26a0 Labile/high blood-pressure readings; young for essential HTN',
          'Repeatedly told "anxiety"'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Sudden attacks \u2014 pounding headache, racing heart, drenching sweats \u2014 and my BP\u2019s all over the place."',
        reason: 'Video consultation (BP and examination face to face) \u2014 paroxysmal symptoms with labile hypertension.'
      },
      timeMap: [
        {
          t: '0\u2010-2',
          h: 'Think the zebra',
          d: 'Paroxysmal triad + labile/young HTN \u2192 consider phaeochromocytoma, not just anxiety.'
        },
        {
          t: '2\u2010-4',
          h: 'When to consider',
          d: 'Paroxysmal symptoms, resistant/young-onset HTN, crises, hereditary syndromes.'
        },
        {
          t: '4\u2010-6',
          h: 'Mimics',
          d: 'Anxiety/panic, hyperthyroid (TFTs), arrhythmia (ECG), hypoglycaemia, stimulants; lying and standing BP face to face.'
        },
        {
          t: '6\u2010-9',
          h: 'Investigate',
          d: 'Plasma free or 24h urinary metanephrines; specialist imaging if positive; endocrinology referral (same day if BP 180/120 or higher, NICE NG136).'
        },
        {
          t: '9\u2010-12',
          h: 'Principles + safety-net',
          d: 'Alpha before beta; surgery cures most, lifelong follow-up; MEN2/VHL/NF1/SDH, genetic testing; 999 for crisis.'
        }
      ],
      wordPics: {
        fail: 'Labels it anxiety without considering an organic cause; no metanephrines/endocrinology referral; (or) starts a beta-blocker alone.',
        pass: 'Considers phaeochromocytoma, tests metanephrines and screens mimics, and refers endocrinology.',
        exc: 'Thinks of phaeochromocytoma from the paroxysmal triad + labile/young HTN, screens mimics, investigates with metanephrines + imaging, refers endocrinology, and knows the alpha-before-beta principle, lifelong follow-up and hereditary associations.'
      },
      avoid: [
        {
          dont: '"It\u2019s anxiety/panic attacks \u2014 try some relaxation techniques."',
          instead: '"With that triad and high erratic blood pressure at 39, I want to rule out a phaeochromocytoma \u2014 a hormone-producing adrenal tumour \u2014 with a metanephrine test."',
          why: 'Labelling it anxiety without testing risks missing a curable, dangerous cause.'
        },
        {
          dont: '(Beta-blocker first) starting a beta-blocker for the palpitations/HTN.',
          instead: '"In phaeochromocytoma a beta-blocker first can trigger a crisis \u2014 alpha-blockade must come first, managed by specialists."',
          why: 'Unopposed alpha effects from beta-first can precipitate a hypertensive crisis.'
        },
        {
          dont: '(No metanephrines) investigating with only routine bloods.',
          instead: '"The key test is plasma or 24-hour urinary metanephrines."',
          why: 'Metanephrines are the specific screening test for phaeochromocytoma.'
        }
      ]
    },
    'wilsons-disease': {
      ceg: ['New & undifferentiated presentations', 'Mental health & addiction'],
      stem: {
        name: 'Adam (parent present)',
        age: '19 years \u00b7 male',
        pmh: [
          'Unexplained abnormal LFTs (minimal alcohol)',
          '\u26a0 New tremor + dysarthria; \u26a0 mood/personality change, declining studies',
          'Combined liver + neuropsychiatric features in a young adult'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '(Parent) "His liver tests are abnormal, his hands shake, and he\u2019s become withdrawn and moody \u2014 could it all be connected?"',
        reason: 'Video consultation (liver and neurological examination face to face) \u2014 young adult with combined liver & neuropsychiatric features.'
      },
      timeMap: [
        {
          t: '0\u2010-2',
          h: 'Think Wilson\u2019s',
          d: 'Young + unexplained liver + tremor/dysarthria + mood/behaviour change \u2192 Wilson\u2019s disease. Check Adam\u2019s consent for his parent to stay; see him alone for part.'
        },
        {
          t: '2\u2010-4',
          h: 'Why it matters',
          d: 'Rare but treatable, devastating if missed; don\u2019t blame alcohol/"moodiness".'
        },
        {
          t: '4\u2010-7',
          h: 'Diagnostic clues',
          d: 'Low caeruloplasmin (normal does not exclude), raised urinary copper, Kayser-Fleischer rings (slit-lamp); LFTs/liver screen/copper studies.'
        },
        {
          t: '7\u2010-9',
          h: 'Family + refer',
          d: 'Autosomal recessive \u2014 screen siblings; refer hepatology/neurology (chelation/zinc).'
        },
        {
          t: '9\u2010-12',
          h: 'Support + safety-net',
          d: 'Mental-health support and self-harm risk check; review; same day if jaundiced, confused, drowsy, bleeding or vomiting blood.'
        }
      ],
      wordPics: {
        fail: 'Treats the abnormal LFTs in isolation or attributes the mood/tremor to adolescence; never considers Wilson\u2019s or arranges caeruloplasmin/slit-lamp.',
        pass: 'Thinks of Wilson\u2019s from the combination, arranges caeruloplasmin/copper studies/slit-lamp, and refers.',
        exc: 'Recognises the combined young liver + neuropsychiatric picture as possible Wilson\u2019s, arranges caeruloplasmin/copper studies and slit-lamp, screens family, refers hepatology/neurology, and supports the patient/family.'
      },
      avoid: [
        {
          dont: '"His liver tests are mildly off \u2014 we\u2019ll just recheck them; the moodiness is probably his age."',
          instead: '"The liver and the tremor and mood changes together in a 19-year-old make me think of Wilson\u2019s disease \u2014 a treatable copper disorder we mustn\u2019t miss."',
          why: 'Treating the liver in isolation and dismissing neuropsychiatric change misses a treatable, devastating diagnosis.'
        },
        {
          dont: '(No specific tests) ordering only routine bloods.',
          instead: '"I\u2019ll check caeruloplasmin and copper studies and arrange a slit-lamp eye exam for copper rings."',
          why: 'Caeruloplasmin/copper studies and Kayser-Fleischer rings are the specific clues.'
        },
        {
          dont: '(No family screening) ignoring siblings.',
          instead: '"As it\u2019s inherited, his siblings should be screened \u2014 early treatment prevents disease."',
          why: 'Autosomal-recessive inheritance means family screening matters.'
        }
      ]
    },
    'tics-tourettes': {
      ceg: ['Children & young people', 'Mental health & addiction'],
      stem: {
        name: 'Finn (parent present)',
        age: '9 years \u00b7 male',
        pmh: [
          'Months of motor tics (blinking, grimacing, shrugging) + vocal tics (throat-clearing, sniffing)',
          'Wax/wane, briefly suppressible, urge-preceded, worse with stress/tiredness',
          'Otherwise developing normally'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"He keeps blinking, shrugging and making throat-clearing noises \u2014 is it a habit or something serious like Tourette\u2019s?"',
        reason: 'Video consultation (neurological check face to face) \u2014 childhood movements/noises.'
      },
      timeMap: [
        {
          t: '0\u2010-2',
          h: 'Recognise tics',
          d: 'Motor + vocal tics, wax/wane, suppressible, urge-preceded, worse with stress/tiredness.'
        },
        {
          t: '2\u2010-4',
          h: 'Tourette vs transient',
          d: 'Tourette = multiple motor + \u22651 vocal >1 year; under a year = provisional tic disorder; many tics transient/mild, improve over time.'
        },
        {
          t: '4\u2010-6',
          h: 'Impact + comorbidities',
          d: 'School/social/self-esteem/bullying; screen ADHD/OCD/anxiety.'
        },
        {
          t: '6\u2010-9',
          h: 'Reassure + psychoeducate',
          d: 'Common/benign, most improve; don\u2019t draw attention to tics; manage stress/tiredness.'
        },
        {
          t: '9\u2010-12',
          h: 'Refer if impairing + safety-net',
          d: 'Habit-reversal/CBIT or exposure with response prevention (ESSTS 2021, international), or specialist if impairing; red flags (sudden/severe/regression); neurological check face to face.'
        }
      ],
      wordPics: {
        fail: 'Over-medicalises mild tics or alarms the parent; misses comorbidities (ADHD/OCD/anxiety); advises constantly telling the child to stop.',
        pass: 'Recognises tics/Tourette\u2019s, reassures, screens comorbidities, and refers proportionately if impairing.',
        exc: 'Recognises tics and the Tourette criteria, reassures proportionately (common, often transient, most improve), screens impact and comorbidities (ADHD/OCD/anxiety), gives psychoeducation, and refers for habit-reversal/CBIT or specialist only if impairing/red flags.'
      },
      avoid: [
        {
          dont: '"This is Tourette\u2019s \u2014 he\u2019ll need medication."',
          instead: '"These are tics, very common in children and usually mild and improving \u2014 most don\u2019t need medication, and there\u2019s an effective behavioural therapy if they bother him."',
          why: 'Over-medicalising/alarming about mild tics is disproportionate.'
        },
        {
          dont: '(Missing comorbidities) focusing only on the tics.',
          instead: '"Any trouble concentrating, anxiety, or repetitive worries/rituals? Those often go with tics and can matter more."',
          why: 'ADHD/OCD/anxiety frequently coexist and often matter more than the tics.'
        },
        {
          dont: '"Just keep telling him to stop doing them."',
          instead: '"Try not to draw attention to them \u2014 that tends to make tics worse; reducing stress and tiredness helps."',
          why: 'Drawing attention to tics worsens them; psychoeducation is key.'
        }
      ]
    }
  });

})();
