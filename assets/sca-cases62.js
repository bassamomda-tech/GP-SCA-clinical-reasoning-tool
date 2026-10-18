/* ============================================================
   Reasoning GP — Case Library batch 62:
   "Renal, urology & endocrine in pregnancy" (NEW themes)
   Acute kidney injury (the dehydrated patient on an ACEi/NSAID +
   sick-day rules); prostatitis (the unwell man with perineal pain
   & LUTS); overactive bladder (urgency/frequency \u2014 bladder training
   before pills); and gestational diabetes (an OGTT-positive
   pregnancy \u2014 risks, glucose control, delivery & postnatal). No
   NG12 cancer pathway genuinely applies; none invented (haematuria
   safety-net noted where relevant).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases61.js.
   ============================================================ */

(function(){

  /* ============ 220. VIDEO — Acute kidney injury: the dehydrated patient on an ACEi/NSAID & sick-day rules ============ */
  const c220 = {
    id: 'aki-sick-day',
    title: '"I\u2019ve had a sickness bug and barely kept fluids down \u2014 a blood test says my kidneys are off"',
    type: 'video',
    duration: 12,
    meta: {
      age: 72,
      sex: 'F',
      setting: 'Video consultation \u2014 abnormal renal function after a diarrhoea/vomiting illness.',
      system: 'Renal \u2014 acute kidney injury: the dehydration/drug triad & sick-day rules',
      checked: 'October 2026'
    },
    brief: 'Mrs Pauline Drake, 72 (hypertension, type 2 diabetes), has had 4 days of DIARRHOEA and VOMITING, has barely kept fluids down, feels weak/dizzy, and a check blood test shows a RISE in creatinine (ACUTE KIDNEY INJURY). She takes RAMIPRIL, an SGLT2 inhibitor and METFORMIN, and has been taking IBUPROFEN for aches. The examinable task is to recognise pre-renal ACUTE KIDNEY INJURY precipitated by DEHYDRATION plus NEPHROTOXIC/risk drugs (the classic "triad": ACE inhibitor/ARB + NSAID + intercurrent illness/dehydration), to assess SEVERITY against her baseline creatinine (NICE NG148 staging) with the potassium, a urine dipstick and blood ketones (SGLT2 inhibitor), and hydration/red flags (postural drop \u2014 measured face to face, not on video \u2014 reduced urine output, confusion, very high potassium risk, sepsis), to institute SICK-DAY RULES \u2014 temporarily HOLD the drugs that worsen AKI or accumulate in illness (ACEi/ARB, NSAID, SGLT2 inhibitor [also DKA risk], metformin [lactic acidosis/accumulation], diuretics) \u2014 to manage hydration (oral rehydration only for a well patient with mild AKI who can drink; here \u2014 vomiting, postural dizziness, diabetes and an SGLT2 inhibitor \u2014 SAME-DAY HOSPITAL ASSESSMENT), to RECHECK renal function and arrange follow-up, and to give clear SICK-DAY guidance for the future. Recognise when ADMISSION is needed (severe AKI, hyperkalaemia, anuria, can\u2019t maintain fluids, very unwell). The skill is the drug-illness-dehydration recognition, the sick-day medication holds, and safe disposition.',
    script: {
      opening: '"I\u2019ve had this awful tummy bug for four days \u2014 diarrhoea and being sick \u2014 and I can hardly keep anything down. I feel weak and a bit dizzy when I stand. The nurse did a blood test and said my kidneys aren\u2019t happy. I\u2019ve been taking ibuprofen for the aches. Should I be worried?"',
      facts: [
        {
          topic: 'The bug',
          text: 'Started 4 days ago after her grandson had the same. Watery diarrhoea 5\u20136 times a day, no blood. Vomiting 2\u20133 times a day, "even water comes back sometimes". Only managing small sips. Mild crampy tummy ache; no constant severe pain.'
        },
        {
          topic: 'Fluids and passing water',
          text: 'If asked: "I\u2019ve hardly been to the toilet to wee \u2014 once this morning, dark like tea." Mouth very dry.'
        },
        {
          topic: 'How she feels',
          text: 'Weak and washed out. Dizzy and "grey" when she stands up; held onto the furniture this morning but didn\u2019t fall or faint. Not muddled. No breathlessness, no chest pain. Felt hot yesterday; no thermometer. No rigors.'
        },
        {
          topic: 'Diabetes checks',
          text: 'Has a glucose meter but "hasn\u2019t bothered" this week. No ketone meter. Hasn\u2019t been eating much at all. Not breathless or smelling of pear drops that she knows of.'
        },
        {
          topic: 'Medicines',
          text: 'Ramipril 10 mg for blood pressure, metformin 1 g twice daily, dapagliflozin 10 mg ("the sugar tablet that makes you wee"), atorvastatin. Has kept taking them all "because you\u2019re not supposed to stop". Bought ibuprofen 400 mg three times a day for 4 days for aches. No allergies. Nobody has ever mentioned "sick-day rules".'
        },
        {
          topic: 'Background',
          text: 'Diabetes for 8 years, blood pressure for 15. Told years ago her kidneys were "a little bit tired". No heart failure.'
        },
        {
          topic: 'Social',
          text: 'Widow, lives alone in a bungalow. Daughter, Karen, lives 20 minutes away and has a car \u2014 "she\u2019d take me anywhere if needed". Retired school cook. Non-smoker, no alcohol.'
        },
        {
          topic: 'How to play it',
          text: 'Polite, tired, a bit vague. You don\u2019t link the tablets to the kidneys and are surprised by it. If hospital is suggested, be reluctant at first ("I was hoping to stay at home") but agree if the reason is explained clearly. If the doctor asks you to say back the plan, do so.'
        }
      ],
      ice: {
        ideas: '"It\u2019s just a tummy bug. I don\u2019t understand why my kidneys would be involved."',
        concerns: '"That my kidneys are packing up \u2014 my sister ended up on dialysis." Also quietly worried about going into hospital and catching something.',
        expectations: '"Something to stop the sickness, and to be told if I should worry." Hoping to stay at home.'
      },
      cues: [
        '"I\u2019ve been taking ibuprofen for the aches" \u2014 the NSAID on top of ramipril and dehydration.',
        '"Dizzy when I stand" and "hardly been to the toilet" \u2014 significant dehydration.',
        '"My sister ended up on dialysis" (if worries are explored) \u2014 the fear behind "should I be worried?".'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises pre-renal ACUTE KIDNEY INJURY from a dehydrating illness on an ACE inhibitor/ARB + NSAID \u2014 the classic ACEi/ARB + NSAID + intercurrent-illness/dehydration triad'
      },
      {
        dom: 'dg',
        text: 'Assesses severity, hydration and RED FLAGS \u2014 creatinine rise against baseline (NICE NG148 staging) and potassium, urine dipstick, blood ketones (SGLT2 inhibitor), postural dizziness (postural BP face to face), reduced urine output/anuria, confusion, fluid overload, hyperkalaemia risk, sepsis, inability to keep fluids down'
      },
      {
        dom: 'cm',
        text: 'Institutes SICK-DAY RULES \u2014 temporarily holds ACEi/ARB (ramipril), NSAID (ibuprofen), SGLT2 inhibitor (also DKA risk), metformin (accumulation/lactic acidosis), and diuretics \u2014 explaining when to restart (Think Kidneys 2018: after 24\u201348 hours of normal eating and drinking; ramipril only after renal recovery on a recheck)'
      },
      {
        dom: 'cm',
        text: 'Manages hydration (oral rehydration if tolerating) and decides DISPOSITION \u2014 admitting for IV fluids/monitoring if unable to maintain fluids, severe AKI, hyperkalaemia, anuria, confusion or sepsis \u2014 here same-day hospital assessment, given vomiting, postural dizziness, diabetes and the SGLT2 inhibitor'
      },
      {
        dom: 'cm',
        text: 'Arranges to RECHECK U&E/renal function within a few days (and review restarting medications), and gives clear FUTURE SICK-DAY guidance (and avoiding routine NSAIDs in at-risk patients)'
      },
      {
        dom: 'ro',
        text: 'Explains the link between the illness, the tablets/ibuprofen and the kidney result in accessible terms, addressing "should I be worried?" proportionately'
      },
      {
        dom: 'ro',
        text: 'Checks understanding of the medication holds and the recheck plan, and supports the patient through the illness'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: red flags warranting urgent review/admission (can\u2019t keep fluids, reduced urine, drowsiness/confusion, palpitations), the recheck and medication-restart plan, and future sick-day rules \u2014 active AKI management, not leaving her on the offending drugs'
      }
    ],
    worked: [
      {
        lbl: 'Explain the link',
        txt: '"Yes, but it\u2019s manageable \u2014 let me explain what\u2019s happened. The tummy bug has dried you out, and two of your tablets \u2014 the ramipril for blood pressure and the ibuprofen \u2014 strain the kidneys when you\u2019re dehydrated. Together they\u2019ve given you a kidney \u2018wobble\u2019 we call acute kidney injury. It usually recovers."'
      },
      {
        lbl: 'Assess red flags',
        txt: '"A few checks: are you passing much less urine? Any dizziness on standing, palpitations, drowsiness or confusion? Can you keep any fluids down at all? \u2026 Those tell me whether we can sort this at home or you need a drip in hospital."'
      },
      {
        lbl: 'Sick-day medication holds',
        txt: '"The key step now: STOP the ibuprofen completely, and pause the ramipril, your metformin and the SGLT2 diabetes tablet while you\u2019re unwell and not eating/drinking properly \u2014 they can build up or strain the kidneys when you\u2019re dry. We restart them once you\u2019ve been eating and drinking normally for a day or two \u2014 and the ramipril only once a blood test shows your kidneys have recovered."'
      },
      {
        lbl: 'Hydration + disposition',
        txt: '"Sip fluids little and often \u2014 rehydration sachets are ideal. If you genuinely can\u2019t keep anything down, are passing very little urine, or feel really unwell, you\u2019ll need hospital for a drip. With the vomiting, the dizziness on standing, your diabetes and that SGLT2 tablet, I don\u2019t think home is safe today: I\u2019d like you assessed in hospital today for fluids, a repeat kidney and potassium test and a ketone check."'
      },
      {
        lbl: 'Recheck + future rules',
        txt: '"After the hospital check, I\u2019ll arrange a repeat kidney blood test in a few days to be sure it\u2019s recovering and to restart your tablets safely. And for the future: any time you get a bad D&V bug, pause those same tablets and let us know \u2014 I\u2019ll give you a sick-day list."'
      },
      {
        lbl: 'Safety-net',
        txt: '"Come back urgently \u2014 or call 999 \u2014 if you stop passing urine, become drowsy or confused, get palpitations or chest symptoms, or can\u2019t keep fluids down. Otherwise, fluids, hold those tablets, and we\u2019ll recheck."'
      }
    ],
    learning: 'A rise in creatinine after a DEHYDRATING illness (diarrhoea/vomiting, poor intake) in a patient on an ACE INHIBITOR/ARB and an NSAID is the classic recipe for pre-renal ACUTE KIDNEY INJURY \u2014 the "triad" of ACEi/ARB + NSAID + intercurrent illness/dehydration \u2014 a common, often reversible, but dangerous problem. Assess severity (creatinine rise against baseline \u2014 NICE NG148: 26 micromol/L or more within 48 hours or 50% or more within 7 days \u2014 and the potassium, with a urine dipstick and, on an SGLT2 inhibitor, blood ketones per MHRA March 2020), hydration (postural dizziness and reduced URINE output/anuria by history; postural BP and dry mucosa need a face-to-face check) and RED FLAGS (confusion/drowsiness, fluid overload, features/risk of HYPERKALAEMIA \u2014 the dangerous electrolyte needing urgent K+/ECG \u2014 sepsis, and inability to keep fluids down), which determine home versus admission. The key examinable action is SICK-DAY RULES: temporarily STOP the medications that worsen AKI or accumulate during acute illness \u2014 ACEi/ARB, NSAID (stop and avoid), SGLT2 inhibitor (also euglycaemic DKA risk when unwell), metformin (accumulation/lactic acidosis risk in AKI) and diuretics \u2014 explaining to resume after 24\u201348 hours of eating and drinking normally (Think Kidneys 2018), with the ACE inhibitor restarted only once renal function has recovered. Manage hydration with oral rehydration if tolerated, but ADMIT for IV fluids/monitoring if the patient cannot keep fluids down or has severe AKI, hyperkalaemia, anuria, confusion or sepsis \u2014 and an older, diabetic patient on an SGLT2 inhibitor who is vomiting with postural dizziness needs same-day hospital assessment rather than a trial at home. Arrange to RECHECK U&E within a few days (and review restarting medications), and give clear FUTURE SICK-DAY guidance \u2014 pausing the listed drugs and seeking advice during any dehydrating illness, ideally on a sick-day card \u2014 while avoiding routine NSAIDs in at-risk patients. The hidden agenda is the patient not connecting her tablets/ibuprofen to the result; explain the link, institute the holds, decide disposition safely, recheck, and equip her for the future \u2014 not ignore the AKI or leave her on the offending drugs.',
    knowledge: {
      guideline: 'NICE NG148 Acute kidney injury (2019) \u00b7 Think Kidneys sick day guidance (2018) \u00b7 MHRA Drug Safety Update March 2020 (SGLT2 inhibitors: ketones) \u00b7 NICE NG28 \u00b7 NICE NG253 Suspected sepsis (2025) \u00b7 sick-day rules / medication holds \u00b7 hyperkalaemia awareness \u00b7 nephrotoxic drug triad',
      points: [
        {
          h: 'Recognise the AKI triad',
          t: 'Creatinine rise after a dehydrating illness on an ACEi/ARB + NSAID = pre-renal AKI (ACEi/ARB + NSAID + intercurrent illness/dehydration). Common, often reversible, dangerous if missed.'
        },
        {
          h: 'Assess severity/red flags',
          t: 'Creatinine against baseline (NICE NG148 staging)/eGFR, potassium, urine dipstick, blood ketones on an SGLT2 inhibitor, hydration (postural BP and mucosa face to face; dizziness and reduced urine/anuria by history), confusion, fluid overload, hyperkalaemia risk (urgent K+/ECG), sepsis, inability to keep fluids down.'
        },
        {
          h: 'Sick-day rules',
          t: 'Temporarily hold ACEi/ARB, NSAID, SGLT2 inhibitor (DKA risk), metformin (accumulation/lactic acidosis), diuretics during acute illness/dehydration; restart after 24\u201348 hours of normal eating and drinking (Think Kidneys 2018); ramipril only once renal function has recovered; SGLT2 inhibitor only when ketones are normal (MHRA 2020).'
        },
        {
          h: 'Hydration & disposition',
          t: 'Oral rehydration only for a well patient with mild AKI who can drink (recheck within 48 hours); vomiting + postural dizziness + diabetes + SGLT2 inhibitor \u2192 same-day hospital assessment; admit for IV fluids/monitoring if can\u2019t keep fluids down, severe AKI, hyperkalaemia, anuria, confusion or sepsis.'
        },
        {
          h: 'Recheck & future advice',
          t: 'Recheck U&E within days; review restarting medications; give future sick-day guidance (pause listed drugs during D&V, seek advice); avoid routine NSAIDs in at-risk patients.'
        },
        {
          h: 'Explain the link',
          t: 'Connect the illness + tablets/ibuprofen to the kidney result for the patient; address "should I be worried?" proportionately.'
        },
        {
          h: 'Never do',
          t: 'Never ignore an AKI result; never continue the NSAID/ACEi/SGLT2/metformin through the dehydrating illness; never miss hyperkalaemia or the can\u2019t-keep-fluids admission trigger.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Urgent review/admission for anuria, drowsiness/confusion, palpitations, can\u2019t keep fluids; recheck U&E + restart plan; sick-day card for the future.'
        }
      ]
    }
  };

  /* ============ 221. VIDEO — Prostatitis: the unwell man with perineal pain and LUTS ============ */
  const c221 = {
    id: 'prostatitis',
    title: '"I\u2019ve got pain down below, burning when I wee and I feel feverish \u2014 is it just a water infection?"',
    type: 'video',
    duration: 12,
    meta: {
      age: 44,
      sex: 'M',
      setting: 'Video consultation \u2014 perineal/pelvic pain with urinary symptoms and fever.',
      system: 'Urology \u2014 prostatitis: recognition, treatment & the acute red flags',
      checked: 'October 2026'
    },
    brief: 'Mr Owen Beckett, 44, has several days of PERINEAL/lower pelvic pain, DYSURIA and urinary frequency/urgency, with FEVER, malaise and some pain on ejaculation; he wonders if it is "just a water infection". The examinable task is to recognise ACUTE PROSTATITIS \u2014 a bacterial infection of the prostate causing perineal/pelvic/back pain, LUTS (dysuria, frequency, urgency, hesitancy), painful ejaculation, fever/systemic illness, and an exquisitely TENDER prostate on (gentle) DRE, which, like the observations, needs a same-day face-to-face assessment as video cannot provide it \u2014 distinct from a simple lower UTI (uncommon and significant in men), to assess SEVERITY/sepsis and the key red flag of ACUTE URINARY RETENTION (NICE NG110: refer to hospital for sepsis, acute urinary retention or a suspected prostatic abscess; the route of catheterisation is a specialist decision, not a routine community catheter), to treat with an APPROPRIATE prolonged antibiotic course (NICE NG110: ciprofloxacin or ofloxacin, or trimethoprim if a fluoroquinolone is not appropriate, for 14 days, then review and either stop or continue for a further 14 days; MHRA Drug Safety Update January 2024: systemic fluoroquinolones only when other commonly recommended antibiotics are inappropriate \u2014 weigh this, take local microbiology advice and record the reason), send urine culture before antibiotics (\u00b1 STI screen if relevant), and safety-net (symptoms should improve within 48 hours; refer to hospital if not, or if worse at any time \u2014 NG110). Distinguish acute from CHRONIC prostatitis/chronic pelvic pain syndrome (persistent pelvic pain >3 months, often non-bacterial \u2014 different, multimodal management). Recognise that any unwell/septic or retention features warrant urgent/same-day assessment or admission (sepsis assessment per NICE NG253). Note: a UTI in a man warrants thought about the urinary tract; PSA is not done in acute infection (falsely raised; defer for at least 6 weeks, UKHSA Prostate Cancer Risk Management Programme).',
    script: {
      opening: '"For the last few days I\u2019ve had this ache low down \u2014 sort of between my legs and in my back \u2014 it burns when I wee, I\u2019m going all the time, and it even hurts when I ejaculate. I feel feverish and rough too. Is it just a water infection? Can I get some antibiotics?"',
      facts: [
        {
          topic: 'The pain',
          text: 'Four days. A deep ache "behind my balls", in the perineum and low back. Worse sitting down. Testicles themselves not swollen or painful.'
        },
        {
          topic: 'Waterworks',
          text: 'Burning on passing urine, going every hour, urgent, weaker stream than usual and a bit slow to start. "It comes, it just stings." No blood. Can still pass urine. Up 3 times at night.'
        },
        {
          topic: 'Fever and illness',
          text: 'Hot and cold sweats, shivery last night, aching all over. No thermometer. Not confused, not breathless, eating a little, drinking OK. No vomiting.'
        },
        {
          topic: 'Sexual history (if asked sensitively)',
          text: 'Married, one partner (wife, Claire) for 15 years; no other partners. No penile discharge or rash. Painful ejaculation since this started. Happy to be tested "if it helps".'
        },
        {
          topic: 'Past history and medicines',
          text: 'Fit and well. Never had a urine infection. No medicines; occasional paracetamol (taken some this morning). No allergies. No recent catheter or procedures. Hasn\u2019t had any antibiotics this year.'
        },
        {
          topic: 'Social',
          text: 'Self-employed electrician; "I can\u2019t afford time off." Cycles to work most days (has stopped this week). Drinks 10\u201312 units a week, non-smoker. Lives with wife and two children; can get to the surgery this afternoon if needed.'
        },
        { topic: 'Family history', text: 'Father had "prostate trouble" in his seventies. No cancers he knows of.' },
        {
          topic: 'How to play it',
          text: 'Uncomfortable, a bit embarrassed about the ejaculation pain \u2014 mention it in the opening but go quiet if the doctor doesn\u2019t follow it up. You want quick antibiotics and are mildly impatient about coming in. Agree if the reason is explained. Be surprised the course is so long.'
        }
      ],
      ice: {
        ideas: '"It\u2019s a water infection. A few days of tablets and I\u2019ll be fine."',
        concerns: 'Only if asked: "The pain when I\u2026 finish \u2014 I wondered if that meant something serious, like cancer, or that I\u2019d caught something." He needs to keep working.',
        expectations: '"A prescription sent to the chemist today, ideally without coming in."'
      },
      cues: [
        '"It even hurts when I ejaculate" \u2014 embarrassing symptom and a pointer to the prostate.',
        '"I feel feverish and rough" \u2014 needs an assessment for sepsis and observations.',
        '"I can\u2019t afford time off" \u2014 practical barrier to coming in and to a long course.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises ACUTE PROSTATITIS (perineal/pelvic/back pain + LUTS + painful ejaculation + fever/systemic illness, tender prostate on gentle DRE at a same-day face-to-face assessment) as distinct from a simple "water infection"'
      },
      {
        dom: 'cm',
        text: 'Treats a UTI in a man as significant \u2014 sends a urine culture before antibiotics, considers an STI screen where relevant, and assesses the wider urinary-tract context'
      },
      {
        dom: 'dg',
        text: 'Assesses SEPSIS (fever, rigors, tachycardia, hypotension \u2014 NICE NG253, with observations face to face) and the ACUTE URINARY RETENTION red flag \u2014 recognising retention with prostatitis needs hospital referral (NICE NG110), where the catheter route (possibly suprapubic) is a specialist decision, not a routine attempt'
      },
      {
        dom: 'cm',
        text: 'Treats with an APPROPRIATE prostate-penetrating antibiotic (NICE NG110: ciprofloxacin/ofloxacin, or trimethoprim if a fluoroquinolone is not appropriate, weighing the MHRA January 2024 fluoroquinolone restriction and local advice) for a PROLONGED course (14 days, then review: stop or continue for a further 14 days), with analgesia \u2014 not a short cystitis course \u2014 and counsels fluoroquinolone cautions (MHRA) if one is used'
      },
      {
        dom: 'dg',
        text: 'Distinguishes acute prostatitis from CHRONIC prostatitis/chronic pelvic pain syndrome (>3 months, often non-bacterial, multimodal management) and avoids checking PSA in acute infection (defer at least 6 weeks, UKHSA PCRMP)'
      },
      {
        dom: 'ro',
        text: 'Explains that this is more than a simple water infection and why a longer course is needed, addressing any embarrassment (ejaculatory pain) sensitively and checking understanding'
      },
      {
        dom: 'cm',
        text: 'Decides disposition \u2014 admit for IV antibiotics if septic/severe or retention, or refer if not improving within 48 hours (NICE NG110) \u2014 and considers urology referral if recurrent, abscess suspected, or retention'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: urgent review for inability to pass urine (retention), worsening fever/rigors/sepsis, or no improvement within 48 hours; urine-culture-guided adjustment; review at 14 days; recheck and follow-up \u2014 adequate treatment, not a short course'
      }
    ],
    worked: [
      {
        lbl: 'Reframe "water infection"',
        txt: '"It\u2019s related, but more than a simple water infection. The pain between your legs and in your back, the burning, going all the time, pain on ejaculating and the fever together point to an infection of the prostate gland \u2014 prostatitis. In men, urine infections are taken more seriously and need proper treatment."'
      },
      {
        lbl: 'Assess severity/retention',
        txt: '"A couple of important checks: are you managing to pass urine okay, or struggling/unable to go? And how feverish \u2014 any shaking chills, feeling really unwell? \u2026 If you couldn\u2019t pass urine or were septic, you\u2019d need urgent hospital assessment. I also need to check your temperature, pulse and blood pressure and gently examine your prostate, which I can\u2019t do on video, so I\u2019d like to see you in person today."'
      },
      {
        lbl: 'Investigate',
        txt: '"I\u2019ll send a urine sample to identify the bug and guide treatment, and \u2014 I have to ask routinely \u2014 about sexual history, as some infections that cause this need a specific test. I won\u2019t check a prostate (PSA) blood test now, as infection makes it misleading; if it\u2019s needed, it waits at least 6 weeks."'
      },
      {
        lbl: 'Treat properly',
        txt: '"This needs an antibiotic that gets into the prostate \u2014 ciprofloxacin or trimethoprim; we\u2019ll weigh which suits you, because ciprofloxacin has rare but serious side-effects \u2014 and crucially a longer course, 14 days, then I\u2019ll review whether you need another 14, not the few days you\u2019d have for simple cystitis, to clear it fully and stop it becoming chronic. I\u2019ll add painkillers too."'
      },
      {
        lbl: 'Counsel + distinguish chronic',
        txt: '"A note on that antibiotic \u2014 if we use ciprofloxacin, rarely it affects tendons, muscles, joints, nerves or mood, so stop it and contact us at the first sign of tendon pain or swelling, tingling or numbness, or changes in mood or thinking. If pelvic pain ever drags on for months without infection, that\u2019s a different, longer-term condition we\u2019d manage differently."'
      },
      {
        lbl: 'Safety-net',
        txt: '"Come back urgently \u2014 or A&E \u2014 if you can\u2019t pass urine, get shaking chills/high fever, feel much worse, or aren\u2019t starting to improve within 48 hours. I\u2019ll check the urine result and review you at 14 days to make sure it\u2019s clearing and decide whether to stop or continue for another 14. Don\u2019t stop the antibiotics early even when you feel better."'
      }
    ],
    learning: 'PERINEAL/pelvic/low back pain with LUTS (dysuria, frequency, urgency, hesitancy), PAINFUL EJACULATION and FEVER/systemic illness in a man is ACUTE PROSTATITIS \u2014 a bacterial infection of the prostate, with an exquisitely tender/boggy prostate on gentle DRE at a same-day face-to-face assessment (not possible by video) \u2014 not "just a water infection", and a urinary infection in a man is itself uncommon and significant. Send a urine culture before antibiotics (and consider an STI screen where sexual history is relevant, as chlamydia/gonorrhoea can cause prostatitis), and assess the wider urinary tract. Critically, assess for SEPSIS (high fever, rigors, tachycardia, hypotension \u2014 NICE NG253; may need admission/IV antibiotics) and the key red flag of ACUTE URINARY RETENTION, because NICE NG110 advises hospital referral for sepsis, retention or a suspected prostatic abscess, and in prostatitis the catheterisation route (urethral or suprapubic) is a specialist decision \u2014 so retention warrants urgent hospital/urology assessment rather than a routine attempt. Treat with an antibiotic that PENETRATES the prostate \u2014 NICE NG110: a FLUOROQUINOLONE (ciprofloxacin/ofloxacin), or trimethoprim if a fluoroquinolone is not appropriate, weighing the MHRA January 2024 restriction (fluoroquinolones only when other commonly recommended antibiotics are inappropriate) and local guidance/culture \u2014 for a PROLONGED course (14 days, then review and stop or continue for a further 14 days) to prevent chronic prostatitis/abscess, with analgesia, counselling fluoroquinolone cautions (tendon/aortic/neuropsychiatric/QT) and adjusting to culture; admit if septic/severe. Distinguish acute prostatitis from CHRONIC prostatitis/CHRONIC PELVIC PAIN SYNDROME (persistent pelvic/perineal pain and LUTS >3 months, often non-bacterial, managed multimodally). Do NOT measure PSA during acute infection (falsely elevated; defer at least 6 weeks, UKHSA PCRMP), and safety-net for retention, worsening sepsis or non-improvement within 48 hours (hospital referral, NICE NG110), with culture-guided follow-up and urology referral if recurrent, abscess suspected or retention. The hidden agenda is the wish for "antibiotics for a water infection"; recognise prostatitis as more than a simple UTI and treat it adequately, not as simple cystitis.',
    knowledge: {
      guideline: 'NICE NG110 Prostatitis (acute): antimicrobial prescribing (2018) \u00b7 MHRA Drug Safety Update January 2024 (fluoroquinolones) \u00b7 NICE NG253 Suspected sepsis (2025) \u00b7 UKHSA Prostate Cancer Risk Management Programme (PSA) \u00b7 EAU Chronic Pelvic Pain guideline 2025 (international) \u00b7 Acute prostatitis \u00b7 male UTI significance \u00b7 prostate-penetrating prolonged antibiotics \u00b7 retention/sepsis red flags',
      points: [
        {
          h: 'Recognise acute prostatitis',
          t: 'Perineal/pelvic/back pain + LUTS + painful ejaculation + fever in a man, tender prostate on gentle DRE (face to face, same day) = acute bacterial prostatitis, not a simple "water infection".'
        },
        {
          h: 'Male UTI is significant',
          t: 'Urinary infection in men is uncommon/significant. Send MSU culture before antibiotics (NICE NG110); consider STI screen (chlamydia/gonorrhoea can cause prostatitis) where relevant; assess the urinary tract.'
        },
        {
          h: 'Sepsis & retention',
          t: 'Assess sepsis (NICE NG253: fever, rigors, tachycardia, hypotension \u2192 admit/IV). Acute urinary retention with prostatitis needs hospital referral (NICE NG110); the catheter route (possibly suprapubic) is a specialist decision, not a routine attempt.'
        },
        {
          h: 'Treat adequately',
          t: 'Prostate-penetrating antibiotic \u2014 NICE NG110: ciprofloxacin/ofloxacin, or trimethoprim if a fluoroquinolone is not appropriate (MHRA January 2024: fluoroquinolones only when other commonly recommended antibiotics are inappropriate) \u2014 for 14 days, then review: stop or continue for a further 14 days. Analgesia. Counsel fluoroquinolone cautions if used. Not improving within 48 hours \u2192 hospital. Adjust to culture.'
        },
        {
          h: 'Acute vs chronic',
          t: 'Chronic prostatitis/CPPS = pelvic pain + LUTS >3 months, often non-bacterial, managed multimodally (EAU 2025, international: alpha-blockers, analgesia, physio, psychological support). Acute febrile = acute prostatitis.'
        },
        {
          h: 'No PSA in acute infection',
          t: 'PSA is falsely elevated in acute prostatitis \u2014 do not measure it during the acute episode; defer for at least 6 weeks (UKHSA PCRMP).'
        },
        {
          h: 'Never do',
          t: 'Never treat male prostatitis as trivial cystitis with a short course; never miss sepsis or acute retention; never attempt routine catheterisation in retention with prostatitis without urology; never check PSA acutely.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Urgent review for inability to pass urine, rigors/high fever/sepsis, or no improvement within 48 hours; culture-guided adjustment; complete the prolonged course with a review at 14 days (stop or a further 14 days); urology referral if recurrent/abscess/retention.'
        }
      ]
    }
  };

  /* ============ 222. VIDEO — Overactive bladder: urgency and frequency, bladder training before pills ============ */
  const c222 = {
    id: 'overactive-bladder',
    title: '"I\u2019m desperate for the loo all the time and sometimes don\u2019t make it \u2014 I just want a tablet to stop it"',
    type: 'video',
    duration: 12,
    meta: {
      age: 55,
      sex: 'F',
      setting: 'Video consultation \u2014 urinary urgency, frequency and urge incontinence.',
      system: 'Urology / Continence \u2014 overactive bladder: conservative-first management & the red flags',
      checked: 'October 2026'
    },
    brief: 'Mrs Diane Foster, 55, has urinary URGENCY, FREQUENCY (day and night) and occasional urge INCONTINENCE ("don\u2019t make it in time"); it is affecting her social life and sleep. She wants "a tablet to stop it". The examinable task is to recognise OVERACTIVE BLADDER (OAB) / urge-predominant symptoms, to EXCLUDE other causes and RED FLAGS first \u2014 infection (urine dip/culture), unexplained VISIBLE HAEMATURIA (bladder cancer \u2014 NICE NG12: aged 45 and over with unexplained visible haematuria without UTI, or visible haematuria that persists or recurs after successful UTI treatment \u2192 suspected cancer pathway referral), persistent urgency/frequency as a possible OVARIAN cancer symptom (NG12: at 40+ measure CA125; at 50\u201359, urgent direct-access pelvic and abdominal ultrasound if CA125 is 31 IU/mL or more), diabetes/polyuria, neurological causes, medications (diuretics), and to distinguish from stress incontinence (leak on cough/exertion \u2014 different management) and mixed \u2014 then to follow the CONSERVATIVE-FIRST pathway per NICE NG123: bladder DIARY (at least 3 days, NICE NG123/QS77), lifestyle (reduce caffeine/alcohol, sensible fluid intake \u2014 not too little, weight loss), and BLADDER TRAINING for at least 6 weeks (and pelvic floor exercises, esp. if mixed) BEFORE medication, with any pelvic examination done in person rather than on video; only then consider antimuscarinics (e.g. oxybutynin \u2014 anticholinergic burden/caution in older/frail), reviewed 4 weeks after starting, or mirabegron (NICE TA290; MHRA October 2015: contraindicated if BP is 180/110 or more), with vaginal oestrogen if postmenopausal with vaginal atrophy, and onward referral if refractory. The skill is resisting the "just a pill" request in favour of red-flag exclusion and conservative-first management, with the haematuria and ovarian NICE NG12 safety-net. The hidden agenda is the social/sleep impact and embarrassment.',
    script: {
      opening: '"It\u2019s so embarrassing \u2014 I\u2019m bursting for the loo all the time, day and night, and sometimes I just don\u2019t make it. I\u2019ve started avoiding going out and I\u2019m exhausted from getting up at night. Can you just give me a tablet to stop it? My friend takes something for hers."',
      facts: [
        {
          topic: 'The symptoms',
          text: 'About a year, worse over the last 6 months. A sudden "I have to go NOW" feeling; sometimes leaks on the way, "a proper flood" about twice a week. Goes "every hour or so" in the day. Up 2\u20133 times a night.'
        },
        {
          topic: 'Type of leaking',
          text: 'Mostly the rush. If asked: "A little drop if I sneeze hard, but that\u2019s not the problem." Never leaks without knowing.'
        },
        {
          topic: 'Red-flag questions (all negative)',
          text: 'No blood in the urine ever. No burning, no smelly urine, no fever. No tummy swelling or bloating, no feeling full quickly, no weight loss. No thirst or tiredness. Bowels normal. No back pain or leg numbness. Periods stopped 3 years ago; no bleeding since.'
        },
        {
          topic: 'Drinks',
          text: 'Six or seven mugs of tea and two coffees a day, plus diet cola. "I\u2019ve started drinking less water so I don\u2019t have to go so much." A glass of wine most evenings.'
        },
        {
          topic: 'Background',
          text: 'Two children, both normal deliveries (one big baby, 9 lb). No operations. No medicines, no allergies. BMI about 29 ("I\u2019ve put weight on since the menopause"). Not diabetic as far as she knows. Non-smoker.'
        },
        {
          topic: 'Impact',
          text: 'Works as a school receptionist \u2014 can\u2019t leave the desk easily, wears pads. Has stopped going to Zumba and avoids the theatre and long car journeys. Plans routes by where toilets are. Husband is supportive but she feels "old before my time".'
        },
        {
          topic: 'How to play it',
          text: 'Embarrassed and apologetic at first; relax if the doctor normalises it. You want a tablet like your friend\u2019s. If asked to do a bladder diary or bladder training first, be a bit disappointed ("so I can\u2019t have the tablet?") but accept if the doctor explains why and that tablets are still an option later.'
        }
      ],
      ice: {
        ideas: '"It\u2019s my age and having the kids. A tablet will stop it \u2014 it did for my friend."',
        concerns: 'HIDDEN AGENDA \u2014 the embarrassment: "I had an accident in Tesco last month. I just left my shopping and went home." She is scared to go anywhere without a toilet nearby and fears smelling of urine at work.',
        expectations: '"The tablet my friend takes." Hasn\u2019t thought about anything other than medicine.'
      },
      cues: [
        '"I\u2019ve started avoiding going out" \u2014 impact on her life to explore.',
        '"I\u2019ve started drinking less water" \u2014 a habit that makes urgency worse.',
        '"My friend takes something for hers" \u2014 the expectation to negotiate.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises OVERACTIVE BLADDER (urgency, frequency, nocturia, urge incontinence) but EXCLUDES other causes/RED FLAGS first \u2014 urine infection (dip/culture), diabetes/polyuria, neurological causes, medications \u2014 and, as persistent urgency/frequency is a NICE NG12 ovarian symptom, measures CA125 at 40+ (urgent ultrasound at 50\u201359 if 31 IU/mL or more)'
      },
      {
        dom: 'dg',
        text: 'Specifically checks for VISIBLE HAEMATURIA and recognises unexplained visible haematuria at 45+ (without UTI, or persisting/recurring after UTI treatment) as a NICE NG12 red flag for bladder cancer warranting a suspected cancer pathway urology referral'
      },
      {
        dom: 'dg',
        text: 'Characterises the incontinence type (urge vs stress vs mixed) with a focused history (\u00b1 face-to-face examination) and a bladder diary (at least 3 days), as management differs'
      },
      {
        dom: 'cm',
        text: 'Follows the CONSERVATIVE-FIRST pathway \u2014 bladder diary, lifestyle (reduce caffeine/alcohol, sensible fluids, weight loss), and BLADDER TRAINING for at least 6 weeks (\u00b1 pelvic floor exercises if stress/mixed) BEFORE medication'
      },
      {
        dom: 'cm',
        text: 'Reserves MEDICATION for after conservative measures \u2014 antimuscarinic (counselling anticholinergic side-effects and caution in older/frail) reviewed at 4 weeks, or mirabegron (NICE TA290; BP checked, contraindicated at 180/110 or more, MHRA October 2015), vaginal oestrogen if postmenopausal atrophy \u2014 and refers to continence/urology if refractory'
      },
      {
        dom: 'ro',
        text: 'Acknowledges the significant social/sleep/quality-of-life impact and EMBARRASSMENT, takes it seriously, and frames conservative management positively rather than dismissively'
      },
      {
        dom: 'ro',
        text: 'Responds to the "just a pill" request by validating the wish for relief while explaining the conservative-first rationale, and checks understanding'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: red flags warranting review (unexplained visible haematuria \u2192 suspected cancer pathway urology referral, persistent urgency/frequency \u2192 CA125, infection, neurological symptoms), the bladder-training/diary plan with review, medication as a next step, and continence-service signposting \u2014 conservative-first with the NICE NG12 safety-net'
      }
    ],
    worked: [
      {
        lbl: 'Validate + take seriously',
        txt: '"This is really common and nothing to be embarrassed about \u2014 and it\u2019s clearly affecting your life, stopping you going out and wrecking your sleep. That matters, and we will sort it. Let me just check a few things first so we treat the right problem."'
      },
      {
        lbl: 'Exclude red flags',
        txt: '"A few important checks: any blood in your urine? Any burning or signs of infection? Are you very thirsty or losing weight? Any bloating, feeling full quickly or pelvic pain? \u2026 I\u2019ll test your urine, and as the urgency is happening so often, I\u2019d like a blood test called CA125 too. (If haematuria:) Blood in the urine I\u2019d want to investigate urgently with the specialists \u2014 not to alarm you, just to be thorough."'
      },
      {
        lbl: 'Characterise it',
        txt: '"Is it that you get a sudden desperate urge and then leak, or does it leak when you cough or exercise? \u2026 Sounds like the urgency type \u2014 \u2018overactive bladder\u2019. That guides what works best."'
      },
      {
        lbl: 'Conservative-first',
        txt: '"Here\u2019s the thing about tablets \u2014 they\u2019re not actually first-line, and the first steps work really well: keeping a bladder diary for at least 3 days, cutting back on caffeine and fizzy drinks (big culprits), and \u2018bladder training\u2019 where we gradually stretch the time between visits, for at least 6 weeks. Most people improve a lot with this."'
      },
      {
        lbl: 'Medication as next step',
        txt: '"If that\u2019s not enough after at least 6 weeks, THEN we add a tablet \u2014 there are a couple of options, and I\u2019d pick one that suits you, go through the side-effects, check your blood pressure, and review you 4 weeks after starting. So you\u2019re not being denied medication \u2014 it\u2019s just the smart order to do things in."'
      },
      {
        lbl: 'Safety-net + follow-up',
        txt: '"Start the diary and the caffeine cut, and I\u2019ll show you bladder training; let\u2019s review in a few weeks, and I\u2019d like to see you in person for an examination. Come back sooner if you see any blood in your urine, get burning/fever, or any new numbness or weakness. And there\u2019s continence support if you need products meanwhile."'
      }
    ],
    learning: 'Urinary urgency, frequency, nocturia and urge incontinence suggest OVERACTIVE BLADDER (OAB), but before treating, EXCLUDE other causes and RED FLAGS: urinary infection (urine dip/culture), diabetes/polyuria (glucose/HbA1c), neurological disease, and medications (diuretics, caffeine) \u2014 and critically check for unexplained VISIBLE HAEMATURIA (NICE NG12: aged 45 and over without UTI, or persisting/recurring after UTI treatment \u2192 suspected cancer pathway urology referral), remembering that persistent urinary urgency or frequency is also an NG12 ovarian cancer symptom (CA125 at 40+; urgent ultrasound at 50\u201359 if 31 IU/mL or more) \u2014 so a pill must not be the first move. Characterise the incontinence type, as management differs: URGE (sudden urgency then leak \u2014 OAB), STRESS (leak on cough/exertion \u2014 pelvic floor/structural), or MIXED, clarified by a focused history (\u00b1 face-to-face examination) and a bladder diary. NICE NG123 recommends CONSERVATIVE measures FIRST: a bladder diary (at least 3 days), lifestyle changes (reduce caffeine and alcohol, sensible fluid intake \u2014 neither too much nor too little, weight loss if relevant), and BLADDER TRAINING (scheduled voiding with gradually increased intervals for a minimum of 6 weeks), adding pelvic floor exercises if there is a stress/mixed component \u2014 these are effective first-line measures, not a delay tactic. Only if conservative measures are insufficient should MEDICATION follow \u2014 an antimuscarinic (oxybutynin/tolterodine/solifenacin, counselling anticholinergic side-effects and caution/avoidance of oxybutynin in older/frail patients) or mirabegron (a beta-3 agonist, NICE TA290; BP measured before and during treatment, contraindicated at 180/110 or more, MHRA October 2015), reviewed 4 weeks after starting, with vaginal oestrogen for postmenopausal vaginal atrophy \u2014 with referral to continence/urology services if refractory (Botox, neuromodulation). Acknowledge the significant social, sleep and quality-of-life impact and the embarrassment, take it seriously, and frame conservative management positively. The hidden agenda is the wish for a quick "pill to stop it" amid embarrassment and impact; validate the distress, exclude red flags (especially haematuria and the ovarian route \u2192 NICE NG12), and explain conservative-first with medication as a next step \u2014 not first line.',
    knowledge: {
      guideline: 'NICE NG123 Urinary incontinence and pelvic organ prolapse in women (2019) \u00b7 NICE QS77 \u00b7 NICE TA290 mirabegron \u00b7 MHRA Drug Safety Update October 2015 (mirabegron) \u00b7 conservative-first (bladder training) \u00b7 antimuscarinic/mirabegron \u00b7 NICE NG12 Suspected cancer: recognition and referral (2015, last updated 15 April 2026) (visible haematuria \u2192 bladder; urgency/frequency \u2192 CA125, ovarian)',
      points: [
        {
          h: 'Recognise OAB \u2014 exclude first',
          t: 'Urgency, frequency, nocturia, urge incontinence = OAB. Exclude infection (urine dip/culture), diabetes/polyuria, neurological causes, medications before treating; persistent urgency/frequency at 40+ \u2192 CA125 (NICE NG12, ovarian; at 50\u201359 urgent ultrasound if 31 IU/mL or more).'
        },
        {
          h: 'Haematuria red flag',
          t: 'Unexplained visible haematuria at 45+ (without UTI, or persisting/recurring after UTI treatment) is a NICE NG12 red flag for bladder cancer \u2192 suspected cancer pathway urology referral. Always check.'
        },
        {
          h: 'Characterise incontinence',
          t: 'Urge (OAB) vs stress (cough/exertion) vs mixed \u2014 management differs (bladder training vs pelvic floor). Use a bladder diary (at least 3 days); examine in person, not on video.'
        },
        {
          h: 'Conservative-first',
          t: 'Bladder diary, lifestyle (reduce caffeine/alcohol, sensible fluids, weight loss), bladder training (scheduled voiding, increasing intervals, \u22656 weeks) \u00b1 pelvic floor exercises \u2014 before medication.'
        },
        {
          h: 'Medication as next step',
          t: 'Antimuscarinic (oxybutynin/tolterodine/solifenacin \u2014 anticholinergic side-effects; caution/avoid oxybutynin in older/frail) or mirabegron (NICE TA290; BP before and during \u2014 contraindicated at 180/110 or more, MHRA October 2015). Review 4 weeks after starting; vaginal oestrogen if postmenopausal with vaginal atrophy. Refer to continence/urology if refractory.'
        },
        {
          h: 'Take the impact seriously',
          t: 'Significant social/sleep/quality-of-life impact and embarrassment; validate, normalise, frame conservative management positively; signpost continence services/products.'
        },
        {
          h: 'Never do',
          t: 'Never give a pill before excluding infection/diabetes/haematuria; never miss visible haematuria or the ovarian CA125 route (NICE NG12); never skip conservative-first measures; never use oxybutynin uncritically in older/frail patients.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Review for haematuria (suspected cancer pathway urology referral), the CA125 result, infection, neurological symptoms; bladder-diary/training review; medication as next step; continence-service signposting.'
        }
      ]
    }
  };

  /* ============ 223. VIDEO — Gestational diabetes: a positive OGTT in pregnancy ============ */
  const c223 = {
    id: 'gestational-diabetes',
    title: '"My pregnancy sugar test came back high \u2014 does this mean my baby\u2019s in danger?"',
    type: 'video',
    duration: 12,
    meta: {
      age: 31,
      sex: 'F',
      setting: 'Video consultation \u2014 explaining a positive OGTT in pregnancy.',
      system: 'Endocrine / Maternity \u2014 gestational diabetes: risks, control, delivery & postnatal',
      checked: 'October 2026'
    },
    brief: 'Mrs Aisha Rahman, 31, 27 weeks pregnant (BMI 32, family history of type 2 diabetes), has had an oral glucose tolerance test (OGTT) showing GESTATIONAL DIABETES; she is anxious "is my baby in danger?". The examinable task is to explain and manage GESTATIONAL DIABETES (GDM) sensitively and accurately: explain what it is (glucose intolerance arising in pregnancy, often resolving after birth) and WHY it matters \u2014 risks of MACROSOMIA (large baby) and associated birth complications (shoulder dystocia), neonatal hypoglycaemia, polyhydramnios, pre-eclampsia, and increased intervention/Caesarean, and the longer-term risk to mother (type 2 diabetes) and child \u2014 while reassuring that GOOD GLUCOSE CONTROL substantially reduces these risks; to outline MANAGEMENT \u2014 referral to the JOINT antenatal/diabetes team (seen within 1 week, NICE NG3), blood glucose self-MONITORING and targets (fasting below 5.3 mmol/L; 1 hour after meals below 7.8 or 2 hours after meals below 6.4 mmol/L), DIET and exercise first-line, then METFORMIN if targets are not met within 1\u20132 weeks and INSULIN if still not met (immediate insulin if fasting glucose is 7.0 mmol/L or more at diagnosis) (and that these are safe in pregnancy); increased fetal MONITORING (growth and amniotic fluid scans every 4 weeks from 28 to 36 weeks) and a planned delivery (timing/place per glycaemic control and fetal size; uncomplicated GDM \u2014 birth no later than 40+6 weeks); and POSTNATAL care \u2014 glucose usually normalises after birth but needs a postnatal check (NICE NG3: fasting plasma glucose at 6\u201313 weeks; after 13 weeks, fasting glucose, or HbA1c if a fasting test is not possible) and lifelong increased type-2 risk with annual screening (HbA1c, NICE QS109), plus implications for future pregnancies. The skill is balancing honest risk information with reassurance and a clear plan, addressing the "is my baby in danger?" fear.',
    script: {
      opening: '"I had that glucose drink test and they\u2019ve told me I\u2019ve got diabetes in pregnancy. I\u2019m really frightened \u2014 does this mean my baby\u2019s in danger? Have I done something wrong? I don\u2019t really understand what it means or what happens now."',
      facts: [
        {
          topic: 'What she has been told',
          text: 'A midwife rang 2 days ago: "the test was high and someone from the diabetes clinic will be in touch". No appointment yet. Has been reading online and scaring herself.'
        },
        {
          topic: 'The pregnancy',
          text: 'First baby, 27 weeks. Everything normal so far; 20-week scan fine. Baby moving well. No bleeding, no headaches, no swelling, no tummy pain. Blood pressure "fine at the last midwife check".'
        },
        {
          topic: 'Symptoms (if asked)',
          text: 'Bit more thirsty, but "it\u2019s been hot". Otherwise feels well. No urine infections.'
        },
        {
          topic: 'Background',
          text: 'BMI 32 before pregnancy. No medicines except pregnancy vitamins (folic acid and vitamin D). No allergies. Never had a sugar test before.'
        },
        {
          topic: 'Family',
          text: 'Mum and two aunts have type 2 diabetes; mum is on insulin and has had "problems with her feet". Husband, Imran, is supportive. Lives with husband and his parents.'
        },
        {
          topic: 'Diet and lifestyle',
          text: 'Works as a pharmacy dispenser. Mother-in-law does most of the cooking \u2014 "lots of rice and chapatis". Walks to work (15 minutes). Doesn\u2019t smoke or drink.'
        },
        {
          topic: 'How to play it',
          text: 'Anxious and close to tears at first; you keep asking "is my baby in danger?" and "is it my fault?". Settle noticeably if the doctor explains clearly and kindly that it is common, not your fault, and that good control lowers the risks. Ask practical questions: "Will I need a caesarean?" "Will it go away afterwards?" Feel worse if given a list of scary risks without reassurance.'
        }
      ],
      ice: {
        ideas: '"I think it\u2019s because I\u2019m overweight. I\u2019ve caused this."',
        concerns: 'HIDDEN AGENDA \u2014 fear and guilt: "I keep thinking the baby will be born ill, or something will go wrong at the birth." Watching her mum\u2019s diabetes makes her fear she\u2019ll end up the same. Worried about telling her mother-in-law what she can and can\u2019t eat.',
        expectations: '"To know if the baby is OK, and what happens now." Expects the GP to explain; doesn\u2019t know about the specialist clinic.'
      },
      cues: [
        '"Have I done something wrong?" \u2014 guilt to address directly.',
        '"I started reading online" \u2014 worries picked up from the internet to explore.',
        '"My mum\u2019s on insulin" \u2014 fear of her own future and family history of type 2 diabetes.'
      ]
    },
    checkpoints: [
      {
        dom: 'ro',
        text: 'Explains GESTATIONAL DIABETES clearly (pregnancy-hormone-driven glucose rise, usually resolving after birth) and reduces self-blame, acknowledging her fear'
      },
      {
        dom: 'cm',
        text: 'Gives HONEST risk information \u2014 macrosomia/shoulder dystocia, neonatal hypoglycaemia, polyhydramnios, pre-eclampsia, increased intervention/Caesarean, longer-term type 2 risk \u2014 balanced with the reassurance that GOOD GLUCOSE CONTROL substantially reduces these risks'
      },
      {
        dom: 'cm',
        text: 'Outlines MANAGEMENT \u2014 referral to the JOINT antenatal/diabetes team (within 1 week, NICE NG3), blood glucose self-monitoring/targets (fasting below 5.3; 1-hour below 7.8 or 2-hour below 6.4 mmol/L), diet and activity first-line, then metformin if targets are unmet after 1\u20132 weeks and/or insulin (immediately if fasting glucose is 7.0 mmol/L or more) \u2014 reassuring these are safe in pregnancy'
      },
      {
        dom: 'cm',
        text: 'Explains increased FETAL MONITORING (growth scans every 4 weeks from 28 to 36 weeks) and that DELIVERY is planned by the team (timing/place by control and fetal size; uncomplicated GDM no later than 40+6 weeks)'
      },
      {
        dom: 'cm',
        text: 'Covers POSTNATAL care and FUTURE implications \u2014 glucose usually normalises but needs a postnatal check (fasting plasma glucose at 6\u201313 weeks; HbA1c only after 13 weeks if fasting is not possible \u2014 NICE NG3), lifelong increased type 2 risk (annual HbA1c, NICE QS109; lifestyle), likely recurrence in future pregnancies, and encouraging breastfeeding'
      },
      {
        dom: 'ro',
        text: 'Addresses the "is my baby in danger?" fear and self-blame directly \u2014 honest but not catastrophising \u2014 anchoring repeatedly on the reassuring, controllable message'
      },
      {
        dom: 'ro',
        text: 'Checks understanding, paces the information, and ensures she leaves with a concrete next step and feeling supported rather than terrified'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: the joint-clinic referral and monitoring plan, when to seek help (reduced fetal movements, pre-eclampsia symptoms), the postnatal glucose check and lifelong screening, and review \u2014 honest risk + reassurance + a clear plan'
      }
    ],
    worked: [
      {
        lbl: 'Acknowledge + de-blame',
        txt: '"First \u2014 you haven\u2019t done anything wrong. Pregnancy hormones make blood sugar harder to control, and some women, especially with certain risk factors, develop this. It\u2019s called gestational diabetes, and the good news is it usually goes away after the baby\u2019s born."'
      },
      {
        lbl: 'Honest but reassuring on risk',
        txt: '"Is your baby in danger? Here\u2019s the honest answer: if the sugar stays high it can make the baby grow large and cause some delivery and newborn problems. BUT \u2014 and this is the key bit \u2014 keeping your sugar well controlled hugely reduces those risks. So this is very manageable, and managing it protects your baby."'
      },
      {
        lbl: 'The plan',
        txt: '"Here\u2019s what happens now: I\u2019ll refer you to the joint pregnancy-and-diabetes team, who should see you within a week. You\u2019ll check your blood sugars against targets, and we start with diet and activity \u2014 with a dietitian. If your sugars aren\u2019t on target within a week or two, we add tablets (metformin) or insulin, which are safe in pregnancy."'
      },
      {
        lbl: 'Monitoring + delivery',
        txt: '"You\u2019ll have extra scans every 4 weeks from 28 weeks to watch the baby\u2019s growth, and the team will plan your delivery \u2014 timing and place, usually by 40 weeks and 6 days at the latest \u2014 based on your sugars and the baby\u2019s size. It\u2019s all individualised; you won\u2019t be left guessing."'
      },
      {
        lbl: 'Postnatal + future',
        txt: '"After birth, your sugar usually returns to normal, but we\u2019ll do a fasting blood sugar test between 6 and 13 weeks later. It does mean a higher chance of type 2 diabetes in future, so we\u2019ll do a yearly HbA1c blood test and support healthy changes \u2014 and it can come back in future pregnancies, so we\u2019d test earlier next time. Breastfeeding\u2019s encouraged and helps."'
      },
      {
        lbl: 'Reassure + safety-net',
        txt: '"I know it\u2019s a lot and frightening, but you\u2019re in good hands and there\u2019s a clear plan. Contact the maternity team urgently if the baby\u2019s movements reduce, or you get bad headaches, vision changes or swelling. Let\u2019s get that referral going and review together."'
      }
    ],
    learning: 'GESTATIONAL DIABETES (GDM) is glucose intolerance arising in pregnancy (pregnancy hormones impairing glucose control), usually resolving after birth, with risk factors of raised BMI, family history, ethnicity and a previous large baby \u2014 so explain it simply and remove self-blame while acknowledging the mother\u2019s fear. Give honest risk information balanced with reassurance: poorly controlled GDM raises the risk of a large baby (MACROSOMIA) and birth complications (shoulder dystocia), neonatal hypoglycaemia, polyhydramnios, pre-eclampsia and increased intervention/Caesarean, with longer-term type 2 diabetes risk for mother and child \u2014 but GOOD GLUCOSE CONTROL substantially REDUCES these risks, so the anchoring message is "manageable, and controlling it protects your baby", not catastrophe. Management: referral to the JOINT antenatal/diabetes (maternal medicine) team within 1 week (NICE NG3), blood glucose self-monitoring against targets (fasting below 5.3 mmol/L; 1 hour after meals below 7.8 or 2 hours below 6.4 mmol/L), diet and physical activity first-line (dietitian input), and metformin if targets are not met within 1\u20132 weeks, then insulin (immediate insulin if fasting glucose is 7.0 mmol/L or more at diagnosis) \u2014 metformin and/or insulin if targets are not met (reassuring these are safe in pregnancy). Explain increased fetal monitoring (growth and amniotic fluid scans every 4 weeks from 28 to 36 weeks for macrosomia/polyhydramnios) and that delivery is planned by the team (timing and place per glycaemic control and fetal size, usually avoiding prolonged pregnancy \u2014 no later than 40+6 weeks if uncomplicated). Postnatally, glucose usually normalises but needs a postnatal check (fasting plasma glucose at 6\u201313 weeks; HbA1c only after 13 weeks if a fasting test is not possible), with lifelong increased type 2 diabetes risk (annual HbA1c, NICE QS109; lifestyle), likely recurrence in future pregnancies (early self-monitoring or OGTT next time), higher long-term metabolic risk for the child, and breastfeeding encouraged. The communication core (and hidden agenda) is fear for the baby and self-blame; give accurate risk information WITHOUT catastrophising, repeatedly anchor on the reassuring controllable message, remove blame, check understanding, and provide a concrete next step so she leaves informed and supported.',
    knowledge: {
      guideline: 'NICE NG3 Diabetes in pregnancy (2015, updated 2020) \u00b7 NICE QS109 Diabetes in pregnancy \u00b7 NICE NG133 Hypertension in pregnancy (2019) \u00b7 gestational diabetes risks/management \u00b7 joint antenatal-diabetes care \u00b7 postnatal & lifelong T2 risk',
      points: [
        {
          h: 'Explain GDM & de-blame',
          t: 'Pregnancy hormones impair glucose control; some women develop gestational diabetes, usually resolving after birth. Driven by hormones/risk factors, not the mother\u2019s fault. Acknowledge fear.'
        },
        {
          h: 'Risks (honest + reassuring)',
          t: 'Macrosomia/shoulder dystocia, neonatal hypoglycaemia, polyhydramnios, pre-eclampsia, increased intervention/Caesarean, longer-term type 2 risk \u2014 but good glucose control substantially reduces them.'
        },
        {
          h: 'Management',
          t: 'Joint antenatal/diabetes team within 1 week; glucose self-monitoring/targets (fasting below 5.3; 1-hour below 7.8 or 2-hour below 6.4 mmol/L); diet + activity first-line (dietitian); metformin if targets unmet after 1\u20132 weeks, then insulin; immediate insulin if fasting 7.0 or more at diagnosis \u2014 safe in pregnancy (NICE NG3).'
        },
        {
          h: 'Monitoring & delivery',
          t: 'Increased fetal monitoring/growth scans every 4 weeks from 28 to 36 weeks; planned delivery (timing/place per control and fetal size), usually avoiding prolonged pregnancy (no later than 40+6 if uncomplicated); individualised by the team.'
        },
        {
          h: 'Postnatal & future',
          t: 'Glucose usually normalises; postnatal fasting plasma glucose at 6\u201313 weeks (HbA1c only after 13 weeks if fasting is not possible); lifelong increased type 2 risk (annual HbA1c, NICE QS109; lifestyle); likely recurrence (early self-monitoring or OGTT next pregnancy); breastfeeding encouraged.'
        },
        {
          h: 'Communication',
          t: 'Honest risk without catastrophising; anchor on the reassuring controllable message; remove blame; check understanding; give a concrete next step.'
        },
        {
          h: 'Never do',
          t: 'Never catastrophise ("baby in danger") without the reassurance that control reduces risk; never blame the mother; never omit the joint-team referral, postnatal check or lifelong-risk counselling.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Joint-clinic referral + monitoring; urgent maternity contact for reduced fetal movements or pre-eclampsia symptoms (headache, visual changes, swelling); postnatal glucose check; annual screening; review.'
        }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c220, c221, c222, c223);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {
    'aki-sick-day': {
      ceg: ['Older adults', 'Prescribing & pharmacology'],
      stem: {
        name: 'Pauline Drake',
        age: '72 years \u00b7 female',
        pmh: [
          '\u26a0 4 days D&V, barely keeping fluids down, weak/dizzy; creatinine risen (AKI)',
          'Hypertension; type 2 diabetes',
          'On ramipril, SGLT2 inhibitor, metformin; taking ibuprofen for aches'
        ],
        meds: ['Ramipril', 'SGLT2 inhibitor', 'Metformin', 'Ibuprofen (recent)'],
        allergy: 'NKDA',
        recent: '"Had a sickness bug, can\u2019t keep fluids down \u2014 a blood test says my kidneys are off."',
        reason: 'Video \u2014 abnormal renal function after D&V.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Recognise the triad',
          d: 'Creatinine rise + D&V/dehydration + ramipril + ibuprofen = pre-renal AKI.'
        },
        {
          t: '2\u20134',
          h: 'Severity/red flags',
          d: 'Baseline creatinine, potassium, dipstick, ketones; postural dizziness (BP face to face), urine output, confusion, hyperkalaemia risk, sepsis, can\u2019t keep fluids.'
        },
        {
          t: '4\u20137',
          h: 'Sick-day holds',
          d: 'STOP ibuprofen; hold ramipril, SGLT2 inhibitor (DKA), metformin (lactic acidosis), diuretics; ramipril restarts only after renal recovery.'
        },
        {
          t: '7\u20139',
          h: 'Hydration + disposition',
          d: 'Oral rehydration only if well and drinking; she can\u2019t keep fluids + dizzy + diabetic + SGLT2 \u2192 same-day hospital; admit if can\u2019t keep fluids/severe/hyperkalaemia/anuria/confusion.'
        },
        {
          t: '9\u201312',
          h: 'Recheck + future rules',
          d: 'Repeat U&E in days + restart plan; sick-day card; avoid routine NSAIDs; safety-net.'
        }
      ],
      wordPics: {
        fail: 'Ignores the AKI or leaves her on ramipril/ibuprofen/SGLT2/metformin through the illness; misses hyperkalaemia/retention; no recheck.',
        pass: 'Recognises pre-renal AKI, applies sick-day medication holds, manages hydration, and arranges a recheck.',
        exc: 'Recognises the ACEi/NSAID/dehydration triad, assesses severity/red flags (hyperkalaemia, urine output), institutes sick-day holds (ramipril/NSAID/SGLT2/metformin/diuretics), arranges same-day hospital assessment (vomiting, postural symptoms, diabetes, SGLT2 inhibitor) with ketone and potassium checks, rechecks U&E, and gives future sick-day rules.'
      },
      avoid: [
        {
          dont: '"Keep taking all your usual tablets and push fluids \u2014 it\u2019ll settle."',
          instead: '"Stop the ibuprofen and pause the ramipril, metformin and SGLT2 tablet while you\u2019re unwell \u2014 they strain or build up in the kidneys when you\u2019re dry."',
          why: 'Continuing the nephrotoxic/accumulating drugs through dehydration worsens AKI.'
        },
        {
          dont: '(No red-flag check) reassuring without asking about urine output/fluids.',
          instead: '"Are you passing much urine, and can you keep any fluids down? If not, you need a drip in hospital."',
          why: 'Missing anuria/can\u2019t-keep-fluids/hyperkalaemia misses an admission trigger.'
        },
        {
          dont: '(No recheck) sending her off without follow-up bloods.',
          instead: '"I\u2019ll repeat the kidney blood test in a few days and tell you when to restart your tablets."',
          why: 'AKI needs rechecking and a safe medication-restart plan.'
        }
      ]
    },
    prostatitis: {
      ceg: ['Urgent & unscheduled care', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Owen Beckett',
        age: '44 years \u00b7 male',
        pmh: [
          'Days of perineal/pelvic/back pain + dysuria + frequency/urgency + painful ejaculation',
          'Fever, malaise',
          'Tender prostate expected on gentle DRE \u2014 needs a same-day face-to-face assessment (not possible on video)'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Pain down below, burning when I wee, feverish \u2014 is it just a water infection?"',
        reason: 'Video \u2014 perineal pain with urinary symptoms and fever.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Reframe',
          d: 'Perineal pain + LUTS + painful ejaculation + fever = acute prostatitis, not simple cystitis.'
        },
        {
          t: '2\u20134',
          h: 'Sepsis + retention',
          d: 'Rigors/very unwell \u2192 admit; can\u2019t pass urine \u2192 hospital (NICE NG110; catheter route a specialist decision), not routine catheter; observations and DRE face to face.'
        },
        {
          t: '4\u20136',
          h: 'Investigate',
          d: 'MSU culture before antibiotics; STI screen if relevant; NO PSA in acute infection (falsely raised; defer \u22656 weeks).'
        },
        {
          t: '6\u20139',
          h: 'Treat adequately',
          d: 'Ciprofloxacin/ofloxacin, or trimethoprim if a fluoroquinolone is not appropriate (MHRA 2024) \u2014 PROLONGED: 14 days, review, stop or 14 more (NICE NG110); analgesia; counsel cautions; not better in 48 h \u2192 hospital.'
        },
        {
          t: '9\u201312',
          h: 'Chronic vs acute + safety-net',
          d: 'CPPS if >3 months/non-bacterial; return for retention/rigors/no improvement; complete the course.'
        }
      ],
      wordPics: {
        fail: 'Treats it as simple cystitis with a short trimethoprim course; misses sepsis/retention; checks PSA in acute infection.',
        pass: 'Recognises acute prostatitis, treats with an appropriate prolonged course, and screens sepsis/retention.',
        exc: 'Recognises acute prostatitis (more than a water infection), assesses sepsis and the retention red flag, sends culture (\u00b1 STI), treats with a prostate-penetrating antibiotic for 14 days with review (NICE NG110), weighing the MHRA fluoroquinolone restriction and counselling cautions, avoids PSA acutely, distinguishes chronic prostatitis/CPPS, and safety-nets.'
      },
      avoid: [
        {
          dont: '"It\u2019s a water infection \u2014 here\u2019s 3 days of trimethoprim."',
          instead: '"In a man this is likely prostatitis \u2014 it needs a prostate-penetrating antibiotic for 14 days, with a review then, not a short course."',
          why: 'A short cystitis course under-treats prostatitis and risks chronicity/abscess.'
        },
        {
          dont: '(Ignoring retention) not asking about passing urine.',
          instead: '"Can you pass urine okay? If you couldn\u2019t, that\u2019s urgent \u2014 and needs hospital, where the specialists decide how to drain the bladder, not a routine catheter."',
          why: 'Acute retention with prostatitis is a red flag needing hospital referral (NICE NG110) and specialist catheter decisions.'
        },
        {
          dont: '"Let\u2019s check your PSA to be thorough."',
          instead: '"I won\u2019t check PSA now \u2014 infection makes it falsely high and misleading."',
          why: 'PSA is unreliable in acute prostatitis and should not be measured.'
        }
      ]
    },
    'overactive-bladder': {
      ceg: ['Long-term conditions & cancer', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Diane Foster',
        age: '55 years \u00b7 female',
        pmh: [
          'Urinary urgency + frequency + nocturia + occasional urge incontinence',
          'Avoiding going out; exhausted from nocturia; embarrassed',
          'Wants "a tablet to stop it"'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Desperate for the loo all the time and sometimes don\u2019t make it \u2014 just give me a tablet."',
        reason: 'Video \u2014 urgency, frequency, urge incontinence.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Validate + take seriously',
          d: 'Common, embarrassing, affecting life/sleep; reassure and assess.'
        },
        {
          t: '2\u20134',
          h: 'Exclude red flags',
          d: 'Urine infection, diabetes/polyuria, neuro; unexplained VISIBLE HAEMATURIA at 45+ \u2192 NICE NG12 suspected cancer pathway (urology); persistent urgency/frequency \u2192 CA125 (ovarian).'
        },
        {
          t: '4\u20136',
          h: 'Characterise',
          d: 'Urge vs stress vs mixed (management differs); bladder diary (\u22653 days); examine face to face.'
        },
        {
          t: '6\u20139',
          h: 'Conservative-first',
          d: 'Diary, reduce caffeine/alcohol, sensible fluids, bladder training \u00b1 pelvic floor \u2014 before pills.'
        },
        {
          t: '9\u201312',
          h: 'Medication as next step + safety-net',
          d: 'Antimuscarinic (caution older/frail) or mirabegron if needed; refer if refractory; review 4 weeks after a new drug; mirabegron BP check; haematuria \u2192 suspected cancer pathway.'
        }
      ],
      wordPics: {
        fail: 'Hands over an antimuscarinic without excluding infection/haematuria/diabetes or trying conservative measures; misses the NICE NG12 haematuria and ovarian flags.',
        pass: 'Excludes red flags, characterises the incontinence, and starts conservative-first management with medication as a next step.',
        exc: 'Validates the impact, excludes infection/diabetes/haematuria (NICE NG12, including CA125 for persistent urgency/frequency), characterises urge vs stress, starts conservative-first management (diary, caffeine reduction, bladder training), reserves antimuscarinic/mirabegron for later with appropriate cautions, and safety-nets.'
      },
      avoid: [
        {
          dont: '"Here\u2019s an oxybutynin tablet \u2014 that\u2019ll stop it."',
          instead: '"Tablets aren\u2019t first-line \u2014 a bladder diary, cutting caffeine and bladder training work well first; we add a tablet only if needed."',
          why: 'Jumping to medication skips effective conservative-first management and red-flag exclusion.'
        },
        {
          dont: '(No haematuria check) treating without urinalysis.',
          instead: '"Any blood in your urine? \u2014 that I\u2019d need to investigate urgently."',
          why: 'Missing visible haematuria misses a NICE NG12 suspected bladder-cancer referral.'
        },
        {
          dont: '(Dismissive) "It\u2019s just part of getting older."',
          instead: '"This is common and treatable, and it\u2019s clearly affecting your life \u2014 we\u2019ll take it seriously."',
          why: 'Dismissing the impact ignores significant quality-of-life harm and the patient\u2019s distress.'
        }
      ]
    },
    'gestational-diabetes': {
      ceg: ['Gender, reproductive & sexual health', 'Long-term conditions & cancer'],
      stem: {
        name: 'Aisha Rahman',
        age: '31 years \u00b7 female',
        pmh: [
          '27 weeks pregnant; OGTT positive \u2014 gestational diabetes',
          'BMI 32; family history of type 2 diabetes',
          'Anxious "is my baby in danger?"; fears she caused it'
        ],
        meds: ['Pregnancy vitamins'],
        allergy: 'NKDA',
        recent: '"My pregnancy sugar test came back high \u2014 does this mean my baby\u2019s in danger?"',
        reason: 'Video \u2014 explaining a positive OGTT in pregnancy.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Explain + de-blame',
          d: 'Pregnancy-hormone-driven; not her fault; usually resolves after birth; acknowledge fear.'
        },
        {
          t: '2\u20135',
          h: 'Honest + reassuring risk',
          d: 'Macrosomia/shoulder dystocia, neonatal hypoglycaemia, pre-eclampsia \u2014 but good control markedly reduces risk.'
        },
        {
          t: '5\u20138',
          h: 'Management plan',
          d: 'Joint antenatal/diabetes team; glucose monitoring/targets; diet+activity first, then metformin after 1\u20132 weeks off target/insulin (safe); joint clinic within 1 week.'
        },
        {
          t: '8\u201310',
          h: 'Monitoring + delivery',
          d: 'Growth scans 4-weekly 28\u201336 weeks; planned delivery by control/fetal size (by 40+6 if uncomplicated); individualised.'
        },
        {
          t: '10\u201312',
          h: 'Postnatal + future',
          d: 'Fasting glucose 6\u201313 weeks; lifelong T2 risk/annual HbA1c screening; recurrence; breastfeeding; safety-net.'
        }
      ],
      wordPics: {
        fail: 'Either catastrophises ("your baby\u2019s at serious risk") or under-plays it; blames the mother; omits the team referral/plan or the postnatal/lifelong-risk counselling.',
        pass: 'Explains GDM and its risks with reassurance, outlines the management plan, and covers postnatal follow-up.',
        exc: 'Explains GDM and removes blame, gives honest risks anchored on the reassuring "good control protects your baby", outlines joint-team management (monitoring, diet then metformin/insulin), explains scans/planned delivery and postnatal/lifelong-risk follow-up, and addresses the fear with a concrete plan.'
      },
      avoid: [
        {
          dont: '"Diabetes in pregnancy is dangerous for the baby \u2014 you\u2019ll need a lot of intervention."',
          instead: '"There are risks if sugar stays high, but controlling it hugely reduces them \u2014 this is very manageable and we\u2019ll support you."',
          why: 'Catastrophising without the reassuring controllable message terrifies the patient unnecessarily.'
        },
        {
          dont: '"This is because of your weight \u2014 you should have managed that."',
          instead: '"This isn\u2019t your fault \u2014 it\u2019s driven by pregnancy hormones and risk factors; let\u2019s focus on managing it well."',
          why: 'Blaming the mother is harmful and damages engagement.'
        },
        {
          dont: '(No postnatal plan) ending once pregnancy management is covered.',
          instead: '"After birth your sugar usually normalises, but we\u2019ll check a fasting blood sugar at 6\u201313 weeks and an HbA1c yearly, as your future diabetes risk is higher."',
          why: 'Omitting postnatal/lifelong-risk follow-up misses key GDM aftercare.'
        }
      ]
    }
  });

})();
