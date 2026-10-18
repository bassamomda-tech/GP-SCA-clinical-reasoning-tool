/* ============================================================
   Reasoning GP — Case Library batch 64:
   "Acute pain, chronic wounds & the serious diagnosis" (NEW themes
   from the Emily Kirby-Blount casebook, verified absent)
   Renal/ureteric colic (loin-to-groin + the AAA/sepsis mimics);
   leg ulcer (venous vs arterial, ABPI before compression); motor
   neurone disease (progressive painless weakness/bulbar \u2014 red-flag
   referral); and OCD (recognise, ERP/CBT, SSRI). No NG12 cancer
   pathway genuinely applies; none invented.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases63.js.
   ============================================================ */

(function(){

  /* ============ 228. VIDEO — Renal/ureteric colic: loin-to-groin pain & the must-not-miss ============ */
  const c228 = {
    id: 'renal-colic',
    title: '"Agonising pain in my side, coming in waves and shooting to my groin \u2014 I can\u2019t keep still"',
    type: 'video',
    duration: 12,
    meta: {
      age: 43,
      sex: 'M',
      setting: 'Video/urgent consultation \u2014 acute severe loin pain.',
      system: 'Urology \u2014 renal/ureteric colic: analgesia, imaging & the dangerous mimics',
      checked: 'October 2026'
    },
    brief: 'Mr Niall Hennessy, 43, has sudden severe COLICKY left LOIN pain radiating to the GROIN, in waves, with nausea/vomiting and HAEMATURIA; he is restless and cannot get comfortable. The examinable task is to recognise RENAL/URETERIC COLIC (loin-to-groin colicky pain, restlessness \u2014 unlike peritonitis where patients lie still; haematuria; nausea), provide prompt effective ANALGESIA (NICE NG118: an NSAID by any route first-line \u2014 a PR or IM dose needs a face-to-face assessment, not video \u2014 then IV paracetamol if NSAIDs are contraindicated or not enough, and an opioid only if both are contraindicated or not enough; no antispasmodics; diclofenac is contraindicated in established ischaemic heart disease, peripheral arterial disease, cerebrovascular disease and congestive heart failure, MHRA June 2013), investigate appropriately (urine dip for blood, urgent LOW-DOSE NON-CONTRAST CT-KUB within 24 hours of presentation as imaging of choice (NICE NG118); U&E, infection markers, pregnancy test in women), and \u2014 critically \u2014 EXCLUDE the dangerous MIMICS: above all a LEAKING ABDOMINAL AORTIC ANEURYSM (especially older patients \u2014 never assume colic without considering AAA), an INFECTED/obstructed kidney (fever + obstruction = urological EMERGENCY needing decompression), ectopic pregnancy, and other acute-abdomen causes. Recognise admission/urgent-referral criteria (severe pain with vomiting that stops oral treatment \u2014 on a video call this means same-day face-to-face or hospital assessment \u2014infection with obstruction, AKI, single/transplant kidney, uncontrolled pain, large stone, dehydration, uncertainty), and give safety-netting and stone advice (most small stones pass; hydration; recurrence prevention). The skill is effective analgesia + appropriate imaging + excluding AAA/sepsis.',
    script: {
      opening: '"Doc, this came on suddenly in my left side and it\u2019s agony \u2014 it comes in waves and shoots down towards my groin. I literally can\u2019t keep still, I\u2019m pacing. I feel sick, and I think there was blood in my wee. I\u2019ve never had anything like it."',
      facts: [
        {
          topic: 'The pain',
          text: 'Started about 3 hours ago, at work, suddenly. Left side of the back below the ribs, comes in waves every few minutes, shoots down into the left groin and the top of the left testicle. "10 out of 10 at its worst." Pacing around; can\u2019t sit still. Moving doesn\u2019t make it worse.'
        },
        {
          topic: 'Other symptoms',
          text: 'Vomited twice; can\u2019t keep water down. Urine looked "pinkish" an hour ago; going more often, no burning. No fever, no shivers, "I don\u2019t think I\u2019m hot". Not faint or dizzy. No diarrhoea. Testicle itself not swollen.'
        },
        {
          topic: 'Negatives (if asked)',
          text: 'No back injury. No chest pain, no breathlessness. Pain doesn\u2019t go into the middle of the tummy or through to the back in the middle. Has two kidneys as far as he knows; no kidney problems before.'
        },
        {
          topic: 'Past history and medicines',
          text: 'Fit and well. No medicines, no allergies. No asthma, no stomach ulcers, no heart or kidney problems. Took two paracetamol an hour ago \u2014 no help.'
        },
        {
          topic: 'Lifestyle',
          text: 'Roofer \u2014 works outside, "doesn\u2019t drink much water, mostly tea and energy drinks". Drinks 15 units a week, smokes 10 a day. Lives with his partner, Siobhan, who is at home and has a car.'
        },
        { topic: 'Family history', text: 'Dad had kidney stones "a couple of times".' },
        {
          topic: 'How to play it',
          text: 'In obvious pain: shift around, wince, pause mid-sentence as a wave comes. Answer briefly. You want the pain stopped. If told to go to hospital, ask "Can\u2019t I just have something at home?" and accept if it is explained. Ask what it is if the doctor doesn\u2019t say.'
        }
      ],
      ice: {
        ideas: '"My dad had kidney stones \u2014 is that what this is?"',
        concerns: '"The blood scared me. I just want the pain to stop." Worried about missing work \u2014 he\u2019s self-employed with a job to finish.',
        expectations: '"Something for the pain, now, and to know what it is."'
      },
      cues: [
        '"I can\u2019t keep still, I\u2019m pacing" \u2014 restlessness typical of colic.',
        '"I think there was blood in my wee" \u2014 fear to address and a supporting sign.',
        '"Can\u2019t I just have something at home?" \u2014 negotiate same-day assessment and safe transport (not driving).'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises RENAL/URETERIC COLIC (sudden colicky loin-to-groin pain in waves, RESTLESS/unable to keep still \u2014 unlike peritonitis, haematuria, nausea) as the likely diagnosis'
      },
      {
        dom: 'cm',
        text: 'Provides prompt effective ANALGESIA \u2014 NSAID by any route first-line (e.g. diclofenac PR/IM at a face-to-face assessment) unless contraindicated (MHRA June 2013 diclofenac CV contraindications), IV paracetamol next, opioid only if both are contraindicated or insufficient (NICE NG118), antiemetic \u2014 not under-treating severe pain'
      },
      {
        dom: 'dg',
        text: 'EXCLUDES the dangerous mimics \u2014 above all a leaking/ruptured ABDOMINAL AORTIC ANEURYSM (especially older/vascular patients), an infected obstructed kidney (urosepsis), ectopic pregnancy, and other acute-abdomen causes \u2014 rather than anchoring on "stone"'
      },
      {
        dom: 'dg',
        text: 'Investigates appropriately \u2014 urine dip, urgent LOW-DOSE NON-CONTRAST CT-KUB within 24 hours (imaging of choice, NICE NG118), U&E (AKI), FBC/CRP, pregnancy test in women (ultrasound if pregnant/young)'
      },
      {
        dom: 'cm',
        text: 'Recognises ADMISSION/urgent-referral criteria \u2014 infection with obstruction (urgent decompression), AKI, single/transplant kidney, uncontrolled pain, large/high stone, dehydration, uncertainty \u2014 vs safe outpatient passage of small stones'
      },
      {
        dom: 'ro',
        text: 'Responds to severe pain with urgency and empathy, explains the likely diagnosis and plan, and checks understanding'
      },
      {
        dom: 'cm',
        text: 'Gives stone advice and recurrence prevention (most small stones pass, hydration, diet, stone analysis/metabolic work-up) where appropriate'
      },
      {
        dom: 'cm',
        text: 'Safety-nets robustly: urgent return for FEVER/rigors (infected obstruction), uncontrolled pain, anuria or feeling very unwell; appropriate referral/imaging; review \u2014 analgesia + imaging + AAA/sepsis exclusion, not anchoring on "just a stone"'
      }
    ],
    worked: [
      {
        lbl: 'Recognise + relieve',
        txt: '"That pacing-can\u2019t-keep-still pain shooting to the groin, with blood in your urine, really sounds like a kidney stone passing. First priority \u2014 let\u2019s get on top of that pain with a strong anti-inflammatory, which works best for this, plus something for the sickness."'
      },
      {
        lbl: 'Stay alert to mimics',
        txt: '"I do need to be thorough rather than just assume a stone \u2014 I can\u2019t check your tummy, pulses or blood pressure over video, and with pain and vomiting like this you need to be seen in person today, because some serious things can mimic this, and I\u2019ll ask about fevers."'
      },
      {
        lbl: 'Investigate',
        txt: '"I\u2019ll dip your urine and arrange an urgent low-dose CT scan of the kidneys within 24 hours \u2014 that\u2019s the best test to confirm a stone, see its size and whether it\u2019s blocking. I\u2019ll also check your kidney function and infection markers."'
      },
      {
        lbl: 'Decide disposition',
        txt: '"If it\u2019s a small stone, no infection and your kidneys are fine, these usually pass at home with pain relief and plenty of fluids. But if you spike a fever, the pain can\u2019t be controlled, or your kidney\u2019s blocked, you\u2019d need hospital \u2014 a blocked, infected kidney is an emergency."'
      },
      {
        lbl: 'Safety-net',
        txt: '"So watch for this: fever or shivering, pain we can\u2019t settle, not passing urine, or feeling really unwell \u2014 that\u2019s urgent, ring us or go to A&E. Otherwise drink plenty and we\u2019ll follow up the scan."'
      },
      {
        lbl: 'Prevention',
        txt: '"Once it\u2019s passed, we can look at preventing more \u2014 staying well hydrated \u2014 around 2.5 to 3 litres of water a day \u2014 some diet tweaks, and analysing the stone if you catch it. Stones do like to recur, so it\u2019s worth it."'
      }
    ],
    learning: 'Sudden severe COLICKY LOIN pain radiating to the GROIN, in waves, with the patient RESTLESS and unable to get comfortable (a discriminator from peritonitis, where patients lie still), plus nausea/vomiting and HAEMATURIA, is the classic picture of RENAL/URETERIC COLIC from a stone. Provide prompt effective ANALGESIA \u2014 an NSAID by any route is first-line (NICE NG118; e.g. diclofenac PR/IM, which needs a face-to-face assessment) unless contraindicated (MHRA June 2013: diclofenac contraindicated in established ischaemic heart disease, peripheral arterial disease, cerebrovascular disease and congestive heart failure), then IV paracetamol, then an opioid only if both are contraindicated or insufficient, plus an antiemetic \u2014 as an early priority alongside assessment. Critically, do NOT anchor on "just a stone": exclude the dangerous MIMICS, above all a leaking/ruptured ABDOMINAL AORTIC ANEURYSM (especially in older or vascular patients presenting with loin/back pain \u2014 rapidly fatal, needs emergency vascular assessment), an INFECTED OBSTRUCTED kidney (fever/sepsis with obstruction is a urological emergency needing urgent decompression), ECTOPIC pregnancy (always pregnancy-test women of childbearing age), and other acute-abdomen causes. Investigate with a urine dip (blood supports the diagnosis but its absence does not exclude it) and an urgent LOW-DOSE NON-CONTRAST CT-KUB within 24 hours as the imaging of choice (confirming stone size/site/obstruction), plus U&E (AKI), FBC/CRP, and a pregnancy test (ultrasound if pregnant/young). Recognise admission/urgent-referral criteria \u2014 infection with obstruction, AKI, single/transplant kidney, uncontrolled pain/vomiting, large/high stone, dehydration, bilateral obstruction, uncertainty \u2014 while small distal stones often pass with analgesia, hydration and follow-up. Safety-net for fever/rigors, uncontrolled pain, anuria or feeling very unwell, and advise on stone passage and recurrence prevention.',
    knowledge: {
      guideline: 'NICE NG118 Renal and ureteric stones (2019) \u00b7 NICE QS195 (2020) \u00b7 NICE NG253 Suspected sepsis (2025) \u00b7 MHRA Drug Safety Update June 2013 (diclofenac) \u00b7 NSAID \u2192 IV paracetamol \u2192 opioid analgesia \u00b7 low-dose CT-KUB within 24 hours \u00b7 AAA & infected-obstruction mimics',
      points: [
        {
          h: 'Recognise colic',
          t: 'Sudden colicky loin-to-groin pain in waves, restless/can\u2019t keep still (vs peritonitis), haematuria, nausea/vomiting = renal/ureteric colic from a stone.'
        },
        {
          h: 'Analgesia first-line',
          t: 'NSAID by any route (e.g. diclofenac PR/IM, face to face) is first-line unless contraindicated (diclofenac CV contraindications, MHRA June 2013); then IV paracetamol; opioid only if both are contraindicated or insufficient (NICE NG118); no antispasmodics; antiemetic for vomiting. Treat the severe pain promptly.'
        },
        {
          h: 'Exclude AAA',
          t: 'Never assume colic in older/vascular patients \u2014 a leaking/ruptured AAA mimics loin/back pain and is rapidly fatal. Check pulses, BP, abdomen face to face (not possible on video); emergency vascular assessment if suspected.'
        },
        {
          h: 'Infected obstruction = emergency',
          t: 'Fever/sepsis with an obstructed kidney is a urological emergency needing urgent decompression. Always consider ectopic pregnancy in women (pregnancy test).'
        },
        {
          h: 'Imaging & bloods',
          t: 'Urine dip (blood supports, absence doesn\u2019t exclude); urgent low-dose non-contrast CT-KUB within 24 hours is imaging of choice (NG118); U&E (AKI), FBC/CRP, pregnancy test; ultrasound if pregnant/young.'
        },
        {
          h: 'Admission criteria',
          t: 'Infection + obstruction, AKI, single/transplant kidney, uncontrolled pain/vomiting, large/high stone, dehydration, bilateral obstruction, uncertainty \u2192 refer/admit. Small distal stones often pass at home.'
        },
        {
          h: 'Never do',
          t: 'Never anchor on "just a stone" without excluding AAA/sepsis; never under-treat the pain; never miss infected obstruction or ectopic; never skip the pregnancy test in women.'
        },
        {
          h: 'Safety-net & prevention',
          t: 'Urgent return for fever/rigors, uncontrolled pain, anuria, or feeling very unwell; most small stones pass; hydration (2.5\u20133 litres of water a day), normal calcium intake, diet, stone analysis and recurrence prevention.'
        }
      ]
    }
  };

  /* ============ 229. VIDEO — Leg ulcer: venous vs arterial & ABPI before compression ============ */
  const c229 = {
    id: 'leg-ulcer',
    title: '"I\u2019ve had this weepy sore on my ankle for weeks and it won\u2019t heal \u2014 can you just bandage it up tight?"',
    type: 'video',
    duration: 12,
    meta: {
      age: 71,
      sex: 'F',
      setting: 'Video consultation \u2014 a chronic lower-leg ulcer (practice-nurse findings recorded this morning)',
      system: 'Vascular / Tissue viability \u2014 leg ulcer: venous vs arterial & the ABPI before compression',
      checked: 'October 2026'
    },
    brief: 'Mrs Glenys Hart, 71 (obese, varicose veins, immobile), has a shallow, weepy, relatively painless ulcer over the medial GAITER area of the ankle for several weeks, with surrounding haemosiderin staining/varicose eczema and leg swelling \u2014 a venous picture. She wants it "bandaged up tight". The examinable task is to assess a chronic LEG ULCER and distinguish VENOUS (gaiter area, shallow, exudative, sloping edges, haemosiderin/varicose eczema/oedema, relatively less painful, pulses usually present) from ARTERIAL (distal/pressure points, "punched-out", deep, painful especially at night/on elevation, cold/pale foot, absent pulses) and other causes (neuropathic \u2014 diabetic foot; and the must-not-miss MALIGNANT change \u2014 Marjolin\u2019s ulcer/non-healing atypical ulcer). CRITICALLY, before applying STRONG COMPRESSION (the mainstay of venous ulcer healing \u2014 what "bandaged tight" means), MEASURE the ANKLE-BRACHIAL PRESSURE INDEX (ABPI) to EXCLUDE significant ARTERIAL disease \u2014 strong compression on an arterial leg can cause ischaemia/necrosis, so "just bandage it tight" is unsafe until arterial supply is confirmed; the National Wound Care Strategy Programme (2020, updated 2023) advises starting MILD graduated compression (20 mmHg or less at the ankle) straight away if there are no red flags or signs of arterial disease, with a full assessment including ABPI normally within 14 days. Manage venous ulcers (refer to leg-ulcer/tissue-viability service for graded compression once ABPI adequate, and \u2014 NICE CG168 \u2014 to a vascular service for duplex assessment and treatment of the veins, as the ulcer has not healed within 2 weeks, wound care, elevation, address oedema/venous disease, treat infection only if clinically infected, NICE NG152), give lifestyle advice, and safety-net (non-healing/atypical ulcers \u2192 consider biopsy/specialist for malignancy). Recorded findings available to the candidate (no in-person examination in this remote consultation): Practice nurse (dressing clinic), this morning: 3 \u00d7 2 cm shallow ulcer above the right medial malleolus, sloping edges, sloughy base, heavy exudate; surrounding brown staining and varicose eczema; pitting oedema to mid-calf; dorsalis pedis and posterior tibial pulses palpable both feet; foot warm, capillary refill under 2 seconds; no rolled edges; no spreading redness; temperature 36.8 \u00b0C; photo on record. ABPI not yet done.',
    script: {
      opening: '"I\u2019ve had this sore on the inside of my ankle for a few weeks now \u2014 it weeps and it just won\u2019t heal. My neighbour had hers bandaged up tight and it sorted it, so can you just do that for me? My leg\u2019s swollen and a bit itchy round it too."',
      facts: [
        {
          topic: 'The sore',
          text: 'Right leg, just above the inner ankle bone. Started about 7 weeks ago after she knocked it on the shopping trolley. "It just broke down." Weeps a lot \u2014 soaks through dressings. Not bleeding. Can show it to the camera if asked; the nurse dressed it this morning and took a photo.'
        },
        {
          topic: 'Pain (if asked)',
          text: '"Not really painful \u2014 sore when the dressing sticks." No pain in the calf or foot when walking, no pain at night in bed, doesn\u2019t hang her leg out of the bed to ease it. Feet not cold.'
        },
        {
          topic: 'The leg',
          text: 'Ankles swell by evening, better in the morning. Skin round the ankle has gone brown over the years, and itchy and flaky. Varicose veins "since my second baby". No calf swelling that came on suddenly, no breathlessness.'
        },
        {
          topic: 'Health',
          text: 'Overweight; walks with a stick, mostly sits in her chair. No diabetes she knows of. Blood pressure tablets (amlodipine). No heart attack, stroke or circulation problems known. Never smoked. No allergies (had a rash from a sticky plaster once).'
        },
        { topic: 'Infection questions', text: 'No fever, no spreading redness, no bad smell, feels well.' },
        {
          topic: 'Social',
          text: 'Widow, lives alone in a ground-floor flat. Daughter visits weekly. Can get to the surgery by taxi. Finds the weeping embarrassing \u2014 "it smells sometimes and soaks through my stockings".'
        },
        {
          topic: 'How to play it',
          text: 'Chatty, pleasant, a bit stubborn. You keep coming back to "the tight bandage like my neighbour\u2019s". If told it can\u2019t be done until the circulation test, be disappointed ("So you can\u2019t do it today?") but accept if the reason is explained and something is started now. Ask whether you need antibiotics.'
        }
      ],
      ice: {
        ideas: '"A tight bandage sorted my neighbour\u2019s, so it\u2019ll sort mine."',
        concerns: '"That it\u2019ll never heal. And it\u2019s so wet, it\u2019s embarrassing \u2014 I don\u2019t want people smelling it." Secret worry: her late husband had a leg amputated (diabetes) and she fears the same.',
        expectations: '"For you to bandage it up tight, today."'
      },
      cues: [
        '"My neighbour had hers bandaged up tight" \u2014 the request that needs a circulation check first.',
        '"It\u2019s so wet, it\u2019s embarrassing" \u2014 the impact on her dignity.',
        '"My husband lost his leg" (if worries are explored) \u2014 the fear underneath.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Assesses the chronic leg ulcer and distinguishes VENOUS (gaiter area, shallow/exudative, haemosiderin/varicose eczema/oedema, pulses present) from ARTERIAL (distal/punched-out, deep, painful, cold/pale foot, absent pulses) and neuropathic causes \u2014 using the nurse\u2019s recorded findings and photo (site, edges, exudate, skin changes, oedema, pulses, capillary refill) and arranging ABPI'
      },
      {
        dom: 'dg',
        text: 'Recognises that COMPRESSION is the mainstay of venous-ulcer healing but that the ANKLE-BRACHIAL PRESSURE INDEX (ABPI) must be measured before STRONG compression to exclude significant arterial disease (mild compression of 20 mmHg or less can start now if there are no red flags, with ABPI normally within 14 days \u2014 NWCSP) \u2014 because compression on an arterial leg risks ischaemia/necrosis (so "bandage it tight" is unsafe until confirmed)'
      },
      {
        dom: 'cm',
        text: 'Keeps the must-not-miss in mind \u2014 a non-healing or atypical ulcer (rolled/everted edges) may be a skin malignancy (SCC/Marjolin\u2019s) warranting biopsy/specialist assessment (NICE NG12: consider a suspected cancer pathway referral if SCC is suspected) \u2014 and reconsiders the diagnosis if healing fails'
      },
      {
        dom: 'cm',
        text: 'Manages the venous ulcer once ABPI is adequate \u2014 referral to leg-ulcer/tissue-viability/district nursing for graded compression, wound care, elevation/oedema management, varicose-eczema treatment, venous-disease assessment (vascular referral for an ulcer not healed within 2 weeks, NICE CG168) \u2014 with antibiotics only if clinically infected'
      },
      {
        dom: 'cm',
        text: 'Gives lifestyle/prevention advice (weight, mobility/calf activity, elevation, skin care) and post-healing compression hosiery to prevent recurrence, with ongoing nursing follow-up'
      },
      {
        dom: 'ro',
        text: 'Takes the "bandage it tight" request seriously and explains WHY ABPI must come before strong compression (safety) without dismissing her, setting realistic expectations about slow venous healing'
      },
      {
        dom: 'ro',
        text: 'Checks understanding and engages her in the plan (assessment, leg-ulcer service, follow-up) rather than simply applying compression on request'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: ABPI and leg-ulcer-service referral, signs of infection/arterial compromise (increasing pain, cold/pale/dusky foot) warranting urgent review, malignancy awareness for non-healing, and review \u2014 ABPI before strong compression, not bandaging on request'
      }
    ],
    worked: [
      {
        lbl: 'Take the request seriously, reframe',
        txt: '"I can see why \u2014 a tight bandage often is the treatment for this kind of ulcer, and your neighbour\u2019s right that it works. But there\u2019s an important safety check first, because for some people tight bandaging can actually be harmful. Let me explain."'
      },
      {
        lbl: 'Assess the ulcer',
        txt: '"This sore is over your inner ankle with the brown staining and swelling around it \u2014 that fits a venous ulcer, from the leg veins not draining well. The nurse\u2019s note and photo this morning help a lot \u2014 she could feel the pulses in your foot, which is reassuring, and we\u2019ll check the circulation properly with a simple ankle test."'
      },
      {
        lbl: 'The ABPI safety step',
        txt: '"Before any tight, strong compression, I need to check the blood supply to your foot with a simple test called the ABPI \u2014 ankle and arm blood pressures. If the arteries are narrowed, tight bandaging could cut off the circulation, which is dangerous. So we confirm it\u2019s safe first \u2014 that\u2019s why I can\u2019t just bandage it tightly today. If nothing worrying turns up, the nurses can start a light support bandage straight away while we arrange that test."'
      },
      {
        lbl: 'The plan',
        txt: '"Assuming the blood supply is fine, I\u2019ll refer you to the leg-ulcer nursing service, and to the vein specialists to look at the veins underneath, for proper graded compression and dressings, plus elevating the leg and looking after the skin. Venous ulcers do heal, but I\u2019ll be honest \u2014 it can take weeks to months, so we\u2019ll be patient."'
      },
      {
        lbl: 'Keep malignancy in mind',
        txt: '"If an ulcer doesn\u2019t heal as expected or looks unusual, we\u2019d take a small sample to be sure of the cause \u2014 just being thorough. I\u2019ll keep an eye on it."'
      },
      {
        lbl: 'Prevention + safety-net',
        txt: '"Longer term \u2014 keeping moving, losing a little weight, elevating the leg and wearing support stockings once healed all help prevent it coming back. Come back urgently if the foot becomes cold, pale, very painful or the area looks infected. We\u2019ll get the assessment booked."'
      }
    ],
    learning: 'Assess a chronic LEG ULCER by distinguishing VENOUS ulcers (over the medial GAITER area, shallow with sloping edges, exudative, surrounded by haemosiderin staining, varicose eczema and oedema, relatively less painful, with palpable foot pulses) from ARTERIAL ulcers (distal sites/pressure points, "punched-out", deep, painful especially at night and on elevation, cold/pale foot, absent/weak pulses) and neuropathic ulcers (pressure points in diabetics), using recorded findings from the nurse (photograph, pulses, capillary refill, sensation) when consulting remotely and arranging ABPI. The safety-critical, examinable point is that although COMPRESSION is the mainstay of venous-ulcer healing, the ANKLE-BRACHIAL PRESSURE INDEX (ABPI) must be measured before STRONG compression to exclude significant arterial disease (NWCSP: mild compression of 20 mmHg or less can start straight away if there are no red flags, with ABPI normally within 14 days) \u2014 applying compression to a leg with arterial insufficiency can cause ischaemia, necrosis and limb loss \u2014 so "just bandage it up tight" is unsafe until arterial supply is confirmed adequate (broadly ABPI ~0.8\u20131.3 acceptable; outside that \u2192 vascular referral, no/modified compression). Keep the must-not-miss in mind: a non-healing or atypical ulcer (rolled/everted edges, exuberant granulation, bleeding) may be a skin malignancy (SCC, including Marjolin\u2019s ulcer in chronic wounds/scars) warranting biopsy/specialist assessment, and reconsider the diagnosis if a "venous" ulcer fails to heal. Once ABPI confirms adequate supply, manage the venous ulcer via the leg-ulcer/tissue-viability/district-nursing service (graded compression, wound care/dressings, elevation and oedema management, varicose-eczema treatment, venous-disease assessment, with vascular referral for an ulcer not healed within 2 weeks per NICE CG168), treating infection with antibiotics only if clinically infected (NICE NG152). Advise on lifestyle/prevention (weight, mobility, elevation, skin care, post-healing compression hosiery as venous ulcers recur). The hidden agenda is the wish to be "bandaged tight"; explain why ABPI must come first, set realistic expectations of slow healing, and safety-net for infection/arterial compromise. A typical venous ulcer does not need a NICE NG12 suspected cancer pathway referral, but a non-healing/atypical ulcer prompts biopsy, and NG12 advises considering a suspected cancer pathway referral for a skin lesion that raises the suspicion of SCC.',
    knowledge: {
      guideline: 'National Wound Care Strategy Programme leg ulcer recommendations (2020, updated 2023) \u00b7 NICE CG168 Varicose veins (2013) \u00b7 NICE NG152 Leg ulcer infection (2020) \u00b7 NICE CG147 Peripheral arterial disease (2012, updated 2020) \u00b7 Leg ulcer assessment \u00b7 venous vs arterial \u00b7 ABPI before strong compression \u00b7 tissue-viability referral \u00b7 Marjolin/SCC awareness (NICE NG12 Suspected cancer: recognition and referral (2015, last updated 15 April 2026) only if SCC suspected)',
      points: [
        {
          h: 'Venous vs arterial',
          t: 'Venous: gaiter area, shallow/exudative, haemosiderin/varicose eczema/oedema, pulses present, less painful. Arterial: distal/punched-out, deep, painful (night/elevation), cold/pale foot, absent pulses. Neuropathic: pressure points in diabetics.'
        },
        {
          h: 'ABPI before compression',
          t: 'Compression is the mainstay for venous ulcers, but measure ABPI before strong compression to exclude arterial disease (mild compression of 20 mmHg or less can start now if no red flags; ABPI normally within 14 days \u2014 NWCSP) \u2014 compression on an arterial leg causes ischaemia/necrosis. ~0.8\u20131.3 broadly acceptable; outside \u2192 vascular referral/no compression.'
        },
        {
          h: 'Atypical = think malignancy',
          t: 'Non-healing or atypical ulcers (rolled/everted edges, exuberant granulation, bleeding) may be SCC/Marjolin\u2019s ulcer \u2014 biopsy/specialist; NICE NG12: consider suspected cancer pathway referral if SCC suspected. Reconsider diagnosis if healing fails.'
        },
        {
          h: 'Manage venous ulcer',
          t: 'After adequate ABPI: leg-ulcer/tissue-viability/district nursing for graded compression, wound care, elevation/oedema management, varicose-eczema treatment, venous-disease assessment (vascular referral if not healed within 2 weeks, NICE CG168). Antibiotics only if clinically infected.'
        },
        {
          h: 'Lifestyle & prevention',
          t: 'Weight management, mobility/calf activity, elevation, skin care; post-healing compression hosiery to prevent recurrence (venous ulcers commonly recur).'
        },
        {
          h: 'Communication',
          t: 'Take the "bandage it tight" request seriously, explain the ABPI safety step, set realistic (slow) healing expectations, and engage in the plan rather than bandaging on request.'
        },
        {
          h: 'Never do',
          t: 'Never apply strong compression without ABPI/excluding arterial disease; never miss an atypical/non-healing ulcer (malignancy); never give antibiotics for colonisation; never promise rapid healing.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'ABPI (normally within 14 days) and leg-ulcer-service and vascular (NICE CG168) referral; urgent review for cold/pale/dusky/very painful foot or infection; biopsy if non-healing/atypical; ongoing nursing follow-up.'
        }
      ]
    }
  };

  /* ============ 230. VIDEO — Motor neurone disease: progressive painless weakness ============ */
  const c230 = {
    id: 'motor-neurone-disease',
    title: '"My speech has got slurred and I keep dropping things and tripping \u2014 but I\u2019ve no pain at all"',
    type: 'video',
    duration: 12,
    meta: {
      age: 63,
      sex: 'M',
      setting: 'Video consultation \u2014 progressive painless weakness and bulbar symptoms',
      system: 'Neurology \u2014 motor neurone disease: recognising the progressive painless red flag',
      checked: 'October 2026'
    },
    brief: 'Mr Douglas Pereira, 63, describes several months of PROGRESSIVE, PAINLESS weakness \u2014 slurred SPEECH and some swallowing difficulty (bulbar), a weak/wasting hand with twitching (FASCICULATIONS), and tripping (foot drop) \u2014 with NO sensory symptoms and no pain. The examinable task is to recognise the RED-FLAG pattern of MOTOR NEURONE DISEASE (MND/ALS): progressive, painless, PURELY MOTOR weakness, often with a MIX of UPPER and LOWER motor neurone signs (wasting, fasciculations, weakness alongside brisk reflexes/spasticity), bulbar involvement (dysarthria, dysphagia), NO sensory loss and NO sphincter/eye-movement involvement early \u2014 and that this combination is highly concerning. Work the differential briefly (cervical myelopathy, multifocal neuropathy, myasthenia, stroke) but recognise the pattern, use the recorded and video-visible signs (wasting, fasciculations, dysarthria; the physiotherapist\u2019s brisk reflexes, upgoing plantar and intact sensation) as combined UMN/LMN signs, and refer URGENTLY to NEUROLOGY without delay (NICE NG42: specify the possible diagnosis of MND in the referral letter, contact the neurologist directly if urgent, and do not let routine bloods delay referral; MND is a clinical diagnosis confirmed by specialists/EMG; early referral matters for diagnosis, riluzole, multidisciplinary and respiratory/nutritional support, and advance care planning). The communication skill is handling a frightening, life-limiting possibility honestly but compassionately WITHOUT giving the patient a firm diagnosis you cannot confirm (NG42: the diagnosis is given by a consultant neurologist) \u2014 while naming the possible diagnosis in the referral letter and answering honestly if he asks \u2014 conveying the need for urgent specialist assessment, supporting the patient, and not falsely reassuring; ask about driving \u2014 hand weakness and foot drop affect safety at the wheel, and once MND is diagnosed he must tell the DVLA (DVLA Assessing fitness to drive). Recorded findings available to the candidate (no in-person examination in this remote consultation): MSK physiotherapist letter, 10 days ago (self-referred for tripping): right ankle dorsiflexion weak (MRC 3/5); fasciculations in the right calf; knee and ankle reflexes brisk, right plantar upgoing; sensation intact to light touch and pinprick; advised to see GP. On video: wasting of the right first dorsal interosseous visible, fasciculations visible in the forearm, mild dysarthria audible.',
    script: {
      opening: '"Something\u2019s not right, doctor. Over the last few months my speech has got a bit slurred \u2014 people notice \u2014 and my right hand\u2019s gone weak and a bit wasted, with this odd twitching under the skin. I keep tripping too. The strange thing is there\u2019s no pain at all and I can feel everything normally. What\u2019s going on?"',
      facts: [
        {
          topic: 'Speech and swallowing',
          text: 'Speech slurred for about 6 months, worse when tired; his wife says he sounds "like he\u2019s had a drink". Coughs on thin drinks like tea sometimes; food is fine. No choking episodes. (Role-player: speak with mild slurring.)'
        },
        {
          topic: 'Hand and leg',
          text: 'Right hand weak for 4 months \u2014 struggles with buttons and keys. The muscle between thumb and finger "has gone hollow" \u2014 will hold the hand up to the camera if asked. Twitching under the skin of the arm and calf. Right foot catches on the kerb; tripped several times, one fall, no injury.'
        },
        {
          topic: 'Negatives (if asked)',
          text: 'No numbness or tingling. No pain. No neck pain. Not worse at the end of the day or after exercise in a way that recovers with rest; no droopy eyelids or double vision. Bladder and bowels normal. Breathing fine; sleeps flat on one pillow. Lost "a few pounds", not weighed.'
        },
        {
          topic: 'The physio',
          text: 'If asked about any examination: saw a private physiotherapist 10 days ago about the tripping. "She said my foot was weak, my reflexes were very jumpy, and she could see the twitching in my calf, and told me to see you."'
        },
        {
          topic: 'Health and family',
          text: 'Well otherwise; no medicines; no allergies. Never smoked, drinks little. No family history of nerve or muscle disease. Mother died of a stroke at 80.'
        },
        {
          topic: 'Social',
          text: 'Married to Elaine. Retired electrical engineer; volunteers driving for a hospital transport charity. Drives every day. Two grown-up children.'
        },
        {
          topic: 'How to play it',
          text: 'Calm, precise, quietly frightened. You have looked things up and suspect something serious. If the doctor asks what you\u2019ve been worrying about, say: "Are you talking about something like motor neurone disease?" Want honesty, not false reassurance. Become upset if the doctor seems to brush it off; settle if they are honest, kind and arrange urgent specialist assessment.'
        }
      ],
      ice: {
        ideas: '"Weakness with no pain seems odd. I\u2019ve read about these things."',
        concerns: 'HIDDEN AGENDA \u2014 he has privately searched online and fears motor neurone disease, which a former colleague died of. He hasn\u2019t told Elaine how worried he is.',
        expectations: '"An honest explanation, even if it\u2019s bad news, and to see someone quickly."'
      },
      cues: [
        '"There\u2019s no pain at all and I can feel everything normally" \u2014 purely motor pattern.',
        '"I keep tripping" \u2014 risk of falls and the driving question.',
        '"Are you talking about something like motor neurone disease?" \u2014 needs an honest, careful answer.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises the RED-FLAG pattern of MOTOR NEURONE DISEASE \u2014 progressive, painless, purely MOTOR weakness with wasting/FASCICULATIONS, bulbar symptoms (dysarthria/dysphagia), and NO sensory loss \u2014 as highly concerning'
      },
      {
        dom: 'dg',
        text: 'Identifies combined UPPER and LOWER motor neurone signs from the physiotherapist\u2019s findings and video inspection (fasciculations/wasting/weakness with brisk reflexes/upgoing plantar), assesses bulbar function (speech, swallow) and notes intact sensation'
      },
      {
        dom: 'dg',
        text: 'Briefly considers the differential (cervical myelopathy, multifocal motor neuropathy, myasthenia, stroke, benign fasciculations) and recognises the progressive painless motor pattern points toward MND needing specialist confirmation'
      },
      {
        dom: 'cm',
        text: 'Refers URGENTLY to NEUROLOGY without delay, specifying the possible diagnosis of MND in the referral letter (NICE NG42) \u2014 recognising the importance of early diagnosis, riluzole, and the multidisciplinary/respiratory/nutritional/palliative support \u2014 rather than watching and waiting'
      },
      {
        dom: 'ro',
        text: 'Communicates honestly that the symptoms are significant and need urgent specialist assessment WITHOUT giving him an unconfirmed life-limiting diagnosis as fact (the consultant neurologist gives the diagnosis, NG42) \u2014 avoiding both false reassurance and a definitive label'
      },
      {
        dom: 'ro',
        text: 'Explores his concerns, answers honestly if asked directly (acknowledging what is being looked for), and supports him compassionately through the uncertainty'
      },
      {
        dom: 'cm',
        text: 'Does not minimise progressive painless weakness or attribute it to a benign cause, and avoids unnecessary delay'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: urgent neurology referral, what would warrant sooner review (rapid deterioration, choking, swallowing/breathing difficulty), driving safety and the DVLA duty if MND is diagnosed, support and a clear plan, and offer of follow-up \u2014 urgent referral with honest, compassionate handling, not premature labelling or false reassurance'
      }
    ],
    worked: [
      {
        lbl: 'Take it seriously',
        txt: '"I\u2019m really glad you came \u2014 these symptoms are significant and I want to take them seriously. The combination of weakness without any pain or numbness, the slurred speech, and the twitching and wasting in your hand tells me your nerves and muscles need a proper specialist assessment."'
      },
      {
        lbl: 'Examine',
        txt: '"Could you hold your right hand up to the camera for me, and then let it rest? I can see the muscle wasting and the twitching. The physiotherapist also found your reflexes very brisk, with normal feeling. Together that tells me how the nerves controlling your muscles are working in different areas."'
      },
      {
        lbl: 'Honest, without premature label',
        txt: '"I\u2019m not able to give you a firm diagnosis here today, and I don\u2019t want to guess and frighten you or falsely reassure you. What I can say is that this pattern needs an urgent neurologist\u2019s opinion and some nerve tests to find out exactly what\u2019s going on."'
      },
      {
        lbl: 'If he asks directly',
        txt: '(If he asks "is it something serious / MND?") "I can hear you\u2019re worried, and I won\u2019t dodge it \u2014 a condition affecting the nerves to the muscles is one of the things the specialist will be looking at and ruling in or out. That\u2019s exactly why I want you seen quickly, so you get answers and the right support."'
      },
      {
        lbl: 'Refer urgently',
        txt: '"I\u2019m referring you urgently to neurology, and I\u2019ll explain in the letter what I think needs ruling in or out, so they can see you quickly. Getting seen quickly matters \u2014 it means a proper diagnosis and, whatever it turns out to be, the right treatment and support team around you from the start."'
      },
      {
        lbl: 'Support + safety-net',
        txt: '"This is a lot to sit with, and I\u2019m here \u2014 come back any time before the appointment. If your swallowing or breathing get noticeably worse, or you deteriorate quickly, contact us sooner. And please don\u2019t drive if your hand or foot weakness makes it unsafe \u2014 we\u2019ll talk about what you need to tell the DVLA once we have answers. We\u2019ll go through whatever the specialist finds together."'
      }
    ],
    learning: 'PROGRESSIVE, PAINLESS, PURELY MOTOR weakness with a MIX of upper and lower motor neurone features \u2014 muscle WASTING, FASCICULATIONS and weakness alongside brisk reflexes/spasticity/upgoing plantars \u2014 plus BULBAR symptoms (dysarthria, dysphagia) and NOTABLY no sensory loss and (early) no eye-movement or sphincter involvement, is the highly concerning red-flag pattern of MOTOR NEURONE DISEASE (MND/ALS). The painless, motor-only, progressive nature with fasciculations is the key flag. Look deliberately for combined UMN and LMN signs across regions and intact sensation (recorded findings, video inspection, or an in-person examination if not yet done), which strongly suggests MND, and briefly consider mimics (cervical myelopathy/radiculopathy \u2014 usually with sensory signs; multifocal motor neuropathy; myasthenia \u2014 fatigable, no wasting/fasciculations; stroke \u2014 sudden; benign fasciculations \u2014 no weakness/wasting). Refer URGENTLY to NEUROLOGY without delay, specifying the possible diagnosis of MND in the referral letter (NICE NG42): MND is a clinical diagnosis confirmed by a neurologist (with EMG/nerve conduction and investigations to exclude mimics), and early referral matters for timely diagnosis, disease-modifying treatment (riluzole), and access to the multidisciplinary team (respiratory/NIV, nutrition/SALT/PEG, physiotherapy, OT, communication aids, palliative care and advance care planning) \u2014 so do not watch-and-wait a progressive motor syndrome. The communication core is handling a frightening, potentially life-limiting possibility honestly but compassionately WITHOUT giving him a firm diagnosis you cannot confirm in primary care (NG42: the consultant neurologist gives the diagnosis): be honest that the symptoms are significant and need urgent specialist assessment, avoid both false reassurance and a definitive label, explore concerns, and answer honestly if the patient asks directly (acknowledging what is being looked for) while supporting him, and asking about driving (stop if symptoms make it unsafe; the DVLA must be told once MND is diagnosed).',
    knowledge: {
      guideline: 'NICE NG42 Motor neurone disease (2016, updated 2019) \u00b7 NICE TA20 Riluzole (2001) \u00b7 DVLA Assessing fitness to drive \u00b7 GMC Decision making and consent (2020) \u00b7 recognising progressive painless motor weakness \u00b7 urgent neurology referral \u00b7 breaking difficult news',
      points: [
        {
          h: 'Red-flag pattern',
          t: 'Progressive, painless, purely motor weakness with wasting/fasciculations + bulbar symptoms (dysarthria/dysphagia), no sensory loss, early sparing of eye movements/sphincters = concerning for MND.'
        },
        {
          h: 'Combined UMN/LMN',
          t: 'Look for LMN (wasting, fasciculations, weakness) coexisting with UMN signs (brisk reflexes, spasticity, upgoing plantars) across regions, with intact sensation \u2014 characteristic of MND.'
        },
        {
          h: 'Differential',
          t: 'Cervical myelopathy/radiculopathy (sensory signs), multifocal motor neuropathy, myasthenia (fatigable, no wasting/fasciculations), stroke (sudden), benign fasciculations (no weakness/wasting). Specialist confirms.'
        },
        {
          h: 'Urgent neurology referral',
          t: 'MND is a clinical diagnosis confirmed by neurology (EMG, exclude mimics). Refer without delay, naming possible MND in the referral letter (NICE NG42). Early referral enables diagnosis, riluzole (NICE TA20), and MDT support (respiratory/NIV, nutrition/SALT/PEG, physio, OT, communication, palliative/ACP).'
        },
        {
          h: 'Honest, not premature',
          t: 'Be honest that symptoms are significant and need urgent assessment without telling him an unconfirmed life-limiting diagnosis as fact (the neurologist gives the diagnosis, NG42) \u2014 but name the possible diagnosis in the referral letter. Answer honestly if asked directly; avoid false reassurance.'
        },
        {
          h: 'Don\u2019t minimise/delay',
          t: 'Never attribute progressive painless motor weakness to a benign cause or watch-and-wait; the pattern warrants urgent specialist assessment.'
        },
        {
          h: 'Never do',
          t: 'Never falsely reassure progressive painless weakness; never deliver an unconfirmed terminal diagnosis bluntly; never delay referral; never overlook combined UMN/LMN/bulbar signs.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Urgent neurology referral; sooner review for rapid deterioration or swallowing/breathing difficulty; driving safety (DVLA once diagnosed); compassionate support and follow-up; go through specialist findings together.'
        }
      ]
    }
  };

  /* ============ 231. VIDEO — Obsessive-compulsive disorder: recognition & evidence-based treatment ============ */
  const c231 = {
    id: 'ocd-recognition',
    title: '"I know it\u2019s irrational, but I check the locks and wash my hands for hours \u2014 it\u2019s taking over my life"',
    type: 'video',
    duration: 12,
    meta: {
      age: 27,
      sex: 'F',
      setting: 'Video consultation \u2014 distressing intrusive thoughts and compulsions (no examination needed).',
      system: 'Mental health \u2014 obsessive-compulsive disorder: recognition, ERP/CBT & SSRI',
      checked: 'October 2026'
    },
    brief: 'Miss Heather Quinn, 27, describes intrusive, unwanted thoughts (contamination, fear of harm coming if she doesn\u2019t check) causing intense anxiety, which she neutralises with COMPULSIONS \u2014 repetitive hand-washing for hours and repeated lock/appliance checking \u2014 that she KNOWS are irrational but cannot stop; it is now consuming hours a day and impairing work and relationships. She is ashamed and has hidden it. The examinable task is to RECOGNISE OBSESSIVE-COMPULSIVE DISORDER (OCD): obsessions (recurrent intrusive thoughts/images causing anxiety) + compulsions (repetitive behaviours/mental acts performed to reduce that anxiety), with insight that they are excessive, time-consuming and distressing/impairing; to ask sensitively (people often hide it for years, and shame causes delay), to assess SEVERITY and RISK (functional impairment, depression, suicidality, and specifically distressing harm/taboo intrusive thoughts \u2014 for most people these are egodystonic OCD symptoms rather than intent, and saying so relieves shame, but NICE CG31 advises expert advice where there is real uncertainty about risk; ask about suicidal thoughts directly and agree a safety plan rather than a risk label, NICE NG225), and to offer EVIDENCE-BASED treatment per NICE CG31, stepped by degree of functional impairment: mild \u2014 low-intensity CBT including ERP (up to 10 therapist hours); moderate \u2014 a choice of an SSRI or more intensive CBT including ERP (more than 10 therapist hours); severe \u2014 combined SSRI and CBT including ERP, usually with secondary care mental health involvement. An SSRI (dose per BNF) often works more slowly and may need higher doses than in depression; if effective continue for at least 12 months, and clomipramine is considered only after at least one adequate SSRI trial. CBT with ERP is delivered by NHS Talking Therapies (self-referral accepted); secondary care mental health services are for severe impairment, poor response or significant risk. The communication skill is destigmatising, validating, explaining the obsession-compulsion cycle, and instilling hope (OCD is treatable).',
    script: {
      opening: '"This is really embarrassing to say out loud. I have these thoughts I can\u2019t get rid of \u2014 about germs, and that something terrible will happen if I don\u2019t check things \u2014 and to make the anxiety stop I wash my hands until they\u2019re raw and check the locks over and over. I KNOW it\u2019s irrational, but I can\u2019t stop, and it\u2019s taking over my life. I\u2019ve hidden it for years."',
      facts: [
        {
          topic: 'The thoughts',
          text: 'Since about age 16, much worse in the last year. If she touches a door handle she feels "contaminated" and fears she\u2019ll make someone ill. When leaving the house, dread that "if the door isn\u2019t locked something awful will happen and it will be my fault".'
        },
        {
          topic: 'The rituals',
          text: 'Washes her hands 30\u201340 times a day, "until it feels right"; hands cracked and bleeding. Checks the door, hob and windows over and over \u2014 up to 20 minutes before leaving. Asks her flatmate "did I lock it?". "A couple of hours a day at least, more on a bad day."'
        },
        {
          topic: 'Impact',
          text: 'Late for work most days; manager has had a word. Avoids friends\u2019 houses because she can\u2019t control things there. Broke up with a boyfriend last year partly because of it.'
        },
        {
          topic: 'The thought she is ashamed of (only if the doctor makes it safe)',
          text: '"Sometimes I get a picture in my head of hurting someone with a knife in the kitchen. I\u2019d never do it \u2014 it horrifies me. I\u2019ve hidden the knives." She has never acted on it and has no wish to.'
        },
        {
          topic: 'Mood and risk (if asked)',
          text: 'Low and fed up with herself at times; sleep OK. No thoughts of suicide or self-harm. No alcohol or drug problems (a glass of wine at weekends). No psychotic symptoms \u2014 knows the thoughts come from her own mind.'
        },
        {
          topic: 'Background',
          text: 'No previous mental health contact. No medicines; no allergies. Works as an accounts assistant. Lives with a flatmate. Mother is "a worrier, very tidy". Not pregnant; uses the implant.'
        },
        {
          topic: 'How to play it',
          text: 'Embarrassed, hesitant, avoiding eye contact. Reveal the knife thought only if the doctor normalises intrusive thoughts or asks gently whether there are other thoughts that frighten you. If the doctor reacts with alarm, shut down. If told it is a recognised, treatable condition, become tearful with relief. Nervous about tablets; prefer talking therapy first.'
        }
      ],
      ice: {
        ideas: '"I don\u2019t know what it is. Maybe I\u2019m just weird, or going mad."',
        concerns: 'HIDDEN AGENDA \u2014 terrified that the knife thoughts mean she is dangerous and that if she tells anyone "they\u2019ll think I\u2019m a danger and take me away".',
        expectations: '"To know if it can be helped. I want to stop."'
      },
      cues: [
        '"I\u2019ve hidden it for years" \u2014 shame; needs validation and normalising.',
        '"There are other thoughts\u2026 I can\u2019t say them" (if the doctor asks about other worries) \u2014 the door to the distressing intrusive thoughts.',
        '"I\u2019m nervous about tablets" \u2014 a preference to include in shared decision-making.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises OBSESSIVE-COMPULSIVE DISORDER \u2014 obsessions (intrusive anxiety-provoking thoughts) + compulsions (repetitive behaviours/mental acts to reduce anxiety), time-consuming, distressing and impairing, typically with insight'
      },
      {
        dom: 'dg',
        text: 'Asks SENSITIVELY and non-judgementally, recognising OCD is often hidden for years from shame, and validates the disclosure while exploring content, time consumed and impact'
      },
      {
        dom: 'ro',
        text: 'Explains that distressing/taboo intrusive thoughts are usually EGODYSTONIC OCD SYMPTOMS \u2014 not intent or desire \u2014 relieving shame, while still assessing risk appropriately and seeking expert advice if there is real uncertainty (NICE CG31)'
      },
      {
        dom: 'dg',
        text: 'Assesses SEVERITY/functional impairment (which sets the CG31 step) and screens comorbid DEPRESSION/anxiety and RISK (suicidality, asked directly, with a safety plan rather than a risk label \u2014 NICE NG225), recognising OCD carries a real suicide risk'
      },
      {
        dom: 'cm',
        text: 'Offers EVIDENCE-BASED treatment per NICE CG31 \u2014 CBT with EXPOSURE AND RESPONSE PREVENTION (ERP) as the cornerstone and/or an SSRI (often higher dose, longer to work in OCD; continued \u226512 months if effective; clomipramine only after an SSRI trial) \u2014 stepped by impairment (\u226410 vs >10 therapist hours; combined treatment with secondary care if severe), via NHS Talking Therapies or secondary care mental health services as appropriate'
      },
      {
        dom: 'ro',
        text: 'Explains the OBSESSION-COMPULSION cycle (compulsions relieve anxiety short-term but reinforce it long-term, which ERP breaks)'
      },
      {
        dom: 'ro',
        text: 'DESTIGMATISES and validates \u2014 framing OCD as a recognised, common, treatable condition (not a flaw/"madness") \u2014 and instils HOPE, agreeing a plan collaboratively'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: risk/crisis safety-netting (low mood/suicidality), referral for ERP/CBT \u00b1 SSRI with realistic timelines, review of response, and ongoing support \u2014 recognition + evidence-based treatment + destigmatisation'
      }
    ],
    worked: [
      {
        lbl: 'Validate the disclosure',
        txt: '"Thank you for telling me \u2014 I know that took real courage, and I want you to know there\u2019s nothing to be embarrassed about. What you\u2019re describing has a name, it\u2019s common, and importantly it\u2019s treatable."'
      },
      {
        lbl: 'Name it + the cycle',
        txt: '"This is obsessive-compulsive disorder. The unwanted thoughts spike your anxiety, and the washing or checking brings the anxiety down for a moment \u2014 but that relief actually trains your brain to need to do it more. It\u2019s a cycle, not a weakness, and we can break it."'
      },
      {
        lbl: 'Reassure about the thoughts',
        txt: '"And something important: those distressing thoughts \u2014 they\u2019re the opposite of what you want, which is exactly why they upset you so much. They\u2019re a symptom of OCD, not a sign of what you want \u2014 the fact they horrify you is typical. Can you tell me a bit about them, so I understand them properly? I hope that lifts some of the weight."'
      },
      {
        lbl: 'Assess impact + risk',
        txt: '"Can I ask how much of your day this takes, and how it\u2019s affecting work and relationships? And how\u2019s your mood been \u2014 have you had any thoughts that life isn\u2019t worth living? I ask because this is exhausting and I want to support you properly."'
      },
      {
        lbl: 'Offer treatment',
        txt: '"The most effective treatment is a talking therapy called exposure and response prevention \u2014 gradually facing the anxiety without doing the ritual, so it fades. We can also use a medication (an SSRI) which works well for OCD, often at a higher dose and taking a bit longer to kick in, and if it helps we\u2019d usually continue it for at least a year. Because this is taking hours of your day, the guidance offers a choice of more intensive therapy or the medication, or both if it\u2019s severe."'
      },
      {
        lbl: 'Hope + plan + safety-net',
        txt: '"This genuinely gets better with treatment \u2014 I\u2019ve seen it. You can refer yourself to NHS Talking Therapies for the therapy, or I can refer you, and we can start medication if you\u2019d like \u2014 I\u2019d speak to you again within a week of starting it \u2014 and review how you\u2019re doing. Let\u2019s agree a plan for what you\u2019d do if things feel unsafe. If your mood drops or you ever feel unsafe, contact us straight away. You\u2019ve taken the hardest step today."'
      }
    ],
    learning: 'OBSESSIVE-COMPULSIVE DISORDER is defined by OBSESSIONS (recurrent, intrusive, unwanted thoughts, images or urges causing marked anxiety) and COMPULSIONS (repetitive behaviours or mental acts performed to reduce that anxiety or prevent a feared event) that are time-consuming, distressing and impairing, and which the person typically recognises as excessive \u2014 a contamination/harm picture with washing/checking and preserved insight is classic. OCD is frequently HIDDEN for years out of shame, so ask sensitively, normalise, validate the disclosure, and explore content, time consumed and impact without judgement \u2014 recognising and naming it is itself therapeutic. Distressing or taboo intrusive thoughts (fears of harming others, contamination, blasphemous or sexual themes) are usually EGODYSTONIC \u2014 unwanted and abhorrent to the person, and are symptoms, not intent or desire \u2014 so say this sensitively (it relieves enormous shame) while still assessing risk appropriately; NICE CG31 advises expert advice where there is real uncertainty about risk. Assess severity and functional impairment, screen for comorbid depression/anxiety, and assess suicidality (OCD carries a real suicide risk through distress/depression), asking directly and agreeing a safety plan rather than a risk label (NICE NG225). Offer EVIDENCE-BASED treatment per NICE CG31: the cornerstone is CBT incorporating EXPOSURE AND RESPONSE PREVENTION (ERP) \u2014 facing the trigger without performing the compulsion so anxiety habituates \u2014 and/or an SSRI (effective in OCD, often at higher doses and taking longer to work than in depression), within stepped care by functional impairment (mild: low-intensity CBT with ERP, up to 10 therapist hours; moderate: an SSRI or more intensive CBT with ERP, more than 10 therapist hours; severe: combined SSRI and CBT with ERP, usually with secondary care mental health services), continuing an effective SSRI for at least 12 months and considering clomipramine only after at least one adequate SSRI trial; NHS Talking Therapies (self-referral) delivers CBT with ERP. Explain the obsession-compulsion cycle (compulsions relieve anxiety short-term but reinforce it long-term, which ERP breaks). The communication core is destigmatising, validating, instilling HOPE that OCD is common and treatable, and agreeing a collaborative plan.',
    knowledge: {
      guideline: '[1] NICE CG31 Obsessive-compulsive disorder and body dysmorphic disorder: treatment (2005) \u00b7 [2] NICE NG222 Depression in adults: treatment and management (2022) \u00b7 [3] NICE NG225 Self-harm: assessment, management and preventing recurrence (2022) \u00b7 [4] MHRA: SSRIs and SNRIs, use and safety \u00b7 obsessions & compulsions \u00b7 ERP/CBT cornerstone + SSRI (higher dose/longer) \u00b7 stepped care \u00b7 egodystonic intrusive thoughts',
      points: [
        {
          h: 'Recognise OCD',
          t: 'Obsessions (intrusive anxiety-provoking thoughts/images/urges) + compulsions (repetitive behaviours/mental acts to reduce anxiety), time-consuming, distressing, impairing, usually with insight.'
        },
        {
          h: 'Ask sensitively',
          t: 'OCD is often hidden for years from shame and under-recognised. Ask sensitively, normalise, validate disclosure, and explore content/time/impact without judgement.'
        },
        {
          h: 'Egodystonic thoughts',
          t: 'Distressing/taboo intrusive thoughts are usually unwanted symptoms, not intent \u2014 say so sensitively (relieves shame) while still assessing risk; NICE CG31 [1]: take expert advice where there is real uncertainty about risk.'
        },
        {
          h: 'Severity & risk',
          t: 'Assess functional impairment, comorbid depression/anxiety, and suicidality (OCD carries real suicide risk) \u2014 ask directly; no risk tools or low/medium/high labels; shared safety plan (NICE NG225 [3]). Impairment guides stepped care.'
        },
        {
          h: 'ERP/CBT + SSRI',
          t: 'Cornerstone is CBT with exposure and response prevention (face trigger without the compulsion \u2192 anxiety habituates); and/or SSRI (fluoxetine, fluvoxamine, paroxetine, sertraline or citalopram, dose per BNF; often higher dose, longer to work in OCD; continue \u226512 months if effective; clomipramine after \u22651 adequate SSRI trial [1]). Review within 1 week of starting if at increased suicide risk (NICE NG222 [2]; MHRA [4]).'
        },
        {
          h: 'Stepped care',
          t: 'NICE CG31 [1] by impairment: mild \u2014 low-intensity CBT incl. ERP (up to 10 therapist hours), brief CBT with self-help or group CBT; moderate \u2014 SSRI or more intensive CBT incl. ERP (more than 10 hours); severe \u2014 combined SSRI + CBT incl. ERP, usually with secondary care. NHS Talking Therapies (self-referral) for CBT/ERP; secondary care for severe impairment, poor response or significant risk. Explain the obsession-compulsion cycle.'
        },
        {
          h: 'Destigmatise & hope',
          t: 'Frame OCD as common, recognised and treatable (not a flaw/"madness"); validate; instil hope; agree a collaborative plan. Recognition/naming is therapeutic.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Risk/crisis safety-netting (low mood/suicidality); referral for ERP/CBT \u00b1 SSRI with realistic timelines; review response; ongoing support.'
        }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c228, c229, c230, c231);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {
    'renal-colic': {
      ceg: ['Urgent & unscheduled care', 'New & undifferentiated presentations'],
      stem: {
        name: 'Niall Hennessy',
        age: '43 years \u00b7 male',
        pmh: [
          'Sudden severe colicky L loin pain in waves \u2192 groin; restless/can\u2019t keep still',
          'Nausea/vomiting; \u26a0 haematuria',
          'No prior episodes'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Agonising pain in my side, comes in waves, shoots to my groin \u2014 I can\u2019t keep still."',
        reason: 'Video/urgent \u2014 acute severe loin pain.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Recognise + relieve',
          d: 'Loin-to-groin colic, restless, haematuria = renal colic; NSAID first-line analgesia (then IV paracetamol, then opioid; NG118) + antiemetic.'
        },
        {
          t: '2\u20134',
          h: 'Exclude mimics',
          d: 'AAA (esp. older/vascular), infected obstructed kidney, ectopic (pregnancy test), acute abdomen; exam, pulses, BP \u2014 face to face, not on video.'
        },
        {
          t: '4\u20137',
          h: 'Investigate',
          d: 'Urine dip, urgent low-dose non-contrast CT-KUB within 24 hours, U&E, FBC/CRP.'
        },
        {
          t: '7\u20139',
          h: 'Disposition',
          d: 'Infection+obstruction/AKI/single kidney/uncontrolled pain/large stone \u2192 admit; small distal stone \u2192 home.'
        },
        {
          t: '9\u201312',
          h: 'Safety-net + prevent',
          d: 'Fever/rigors, uncontrolled pain, anuria \u2192 urgent; hydration; recurrence prevention/stone analysis.'
        }
      ],
      wordPics: {
        fail: 'Anchors on "kidney stone", gives weak analgesia, no imaging plan, and never considers AAA or infected obstruction; misses urosepsis/AAA.',
        pass: 'Recognises colic, gives NSAID analgesia, arranges CT-KUB, and excludes AAA/infected obstruction with appropriate disposition.',
        exc: 'Recognises colic and relieves pain promptly (NSAID), arranges urine dip + urgent CT-KUB, explicitly excludes AAA/infected-obstructed kidney/ectopic, sets correct disposition (admit if infection+obstruction/AKI etc.), and safety-nets for urosepsis with prevention advice.'
      },
      avoid: [
        {
          dont: '"Sounds like a kidney stone \u2014 take some paracetamol and drink plenty, it\u2019ll pass."',
          instead: '"Let\u2019s get strong anti-inflammatory pain relief now, arrange an urgent CT, and make sure it isn\u2019t something more serious mimicking a stone."',
          why: 'Under-treating the pain and anchoring on "stone" risks missing AAA or an infected obstructed kidney.'
        },
        {
          dont: '(No mimic exclusion) treating colic without checking pulses/abdomen/fever.',
          instead: '"I need to check your tummy, pulses and blood pressure in person today, and ask about fevers \u2014 some dangerous things mimic this."',
          why: 'Failing to exclude AAA/urosepsis can be fatal.'
        },
        {
          dont: '(No safety-net) sending home without fever advice.',
          instead: '"If you get a fever or shivers, can\u2019t control the pain, or stop passing urine \u2014 that\u2019s an emergency, go to A&E."',
          why: 'A fever with obstruction (urosepsis) needs urgent decompression \u2014 missing it is dangerous.'
        }
      ]
    },
    'leg-ulcer': {
      ceg: ['Older adults', 'Long-term conditions & cancer'],
      stem: {
        name: 'Glenys Hart',
        age: '71 years \u00b7 female',
        pmh: [
          'Shallow weepy ulcer over medial gaiter area, weeks; haemosiderin staining/varicose eczema/leg swelling',
          'Obese; varicose veins; immobile; foot pulses present',
          'Wants it "bandaged up tight"'
        ],
        meds: ['Amlodipine'],
        allergy: 'NKDA',
        recent: '"Weepy sore on my ankle for weeks that won\u2019t heal \u2014 can you just bandage it up tight?" Practice nurse (dressing clinic), this morning: 3 \u00d7 2 cm shallow ulcer above the right medial malleolus, sloping edges, sloughy base, heavy exudate; surrounding brown staining and varicose eczema; pitting oedema to mid-calf; dorsalis pedis and posterior tibial pulses palpable both feet; foot warm, capillary refill under 2 seconds; no rolled edges; no spreading redness; temperature 36.8 \u00b0C; photo on record. ABPI not yet done.',
        reason: 'Video consultation \u2014 chronic lower-leg ulcer.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Take request seriously, reframe',
          d: 'Compression often is the treatment \u2014 but a safety check (ABPI) comes before strong compression.'
        },
        {
          t: '2\u20134',
          h: 'Assess venous vs arterial',
          d: 'Gaiter area + haemosiderin/eczema/oedema + pulses = venous; examine both legs, pulses, sensation.'
        },
        {
          t: '4\u20137',
          h: 'ABPI before compression',
          d: 'Measure ABPI (normally within 14 days) before strong compression \u2014 compression on an arterial leg causes necrosis; mild compression (20 mmHg or less) can start now if no red flags (NWCSP).'
        },
        {
          t: '7\u20139',
          h: 'Refer + manage',
          d: 'Leg-ulcer/tissue-viability service + vascular referral (CG168) for graded compression, wound care, elevation; antibiotics only if infected.'
        },
        {
          t: '9\u201312',
          h: 'Prevent + malignancy + safety-net',
          d: 'Weight/mobility/hosiery to prevent recurrence; biopsy if non-healing/atypical; urgent if cold/pale/painful foot/infection.'
        }
      ],
      wordPics: {
        fail: 'Applies tight compression on request without ABPI; or dismisses the ulcer; misses arterial disease or a non-healing malignant ulcer.',
        pass: 'Assesses venous vs arterial, measures ABPI before strong compression, and refers to the leg-ulcer service.',
        exc: 'Takes the request seriously while explaining the ABPI safety step, distinguishes venous from arterial, refers for graded compression after adequate ABPI, manages wound/oedema, keeps malignancy in mind for non-healing, and advises on recurrence prevention.'
      },
      avoid: [
        {
          dont: '"Sure, I\u2019ll bandage it up nice and tight for you now."',
          instead: '"Compression is likely the answer, but I must check the artery supply (ABPI) first \u2014 tight bandaging on a poor-circulation leg can be dangerous."',
          why: 'Compression without ABPI on an arterial leg can cause ischaemia and necrosis.'
        },
        {
          dont: '(No type assessment) treating all leg ulcers the same.',
          instead: '"Let me work out if this is venous or arterial \u2014 it changes everything, including whether compression is safe."',
          why: 'Arterial ulcers must not be compressed; the distinction is essential.'
        },
        {
          dont: '(Ignoring non-healing) repeatedly redressing an atypical ulcer.',
          instead: '"If it doesn\u2019t heal or looks unusual, we\u2019ll biopsy it to rule out a skin cancer."',
          why: 'A non-healing/atypical ulcer can be an SCC (Marjolin\u2019s) and needs biopsy.'
        }
      ]
    },
    'motor-neurone-disease': {
      ceg: ['New & undifferentiated presentations', 'End-of-life & palliative care'],
      stem: {
        name: 'Douglas Pereira',
        age: '63 years \u00b7 male',
        pmh: [
          'Months of progressive PAINLESS weakness: slurred speech + swallowing difficulty (bulbar)',
          'Wasting/fasciculations R hand; tripping (foot drop); \u26a0 NO sensory symptoms',
          'Otherwise well'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Slurred speech, dropping things and tripping \u2014 but no pain at all. What\u2019s going on?" MSK physiotherapist letter, 10 days ago (self-referred for tripping): right ankle dorsiflexion weak (MRC 3/5); fasciculations in the right calf; knee and ankle reflexes brisk, right plantar upgoing; sensation intact to light touch and pinprick; advised to see GP. On video: wasting of the right first dorsal interosseous visible, fasciculations visible in the forearm, mild dysarthria audible.',
        reason: 'Video consultation \u2014 progressive painless weakness and bulbar symptoms.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Take seriously',
          d: 'Progressive painless purely-motor weakness + bulbar + fasciculations, no sensory loss \u2014 a red flag.'
        },
        {
          t: '2\u20135',
          h: 'Examine UMN+LMN',
          d: 'Wasting/fasciculations + brisk reflexes/spasticity, bulbar function, intact sensation \u2014 characteristic of MND.'
        },
        {
          t: '5\u20137',
          h: 'Differential',
          d: 'Cervical myelopathy, multifocal motor neuropathy, myasthenia, stroke, benign fasciculations \u2014 specialist confirms.'
        },
        {
          t: '7\u20139',
          h: 'Urgent neurology',
          d: 'Refer urgently, naming possible MND in the letter (NG42); early diagnosis enables riluzole + MDT (respiratory/nutrition/palliative/ACP).'
        },
        {
          t: '9\u201312',
          h: 'Honest, not premature',
          d: 'Significant, needs urgent assessment; answer honestly if asked; no false reassurance; driving/DVLA advice; support + safety-net.'
        }
      ],
      wordPics: {
        fail: 'Minimises progressive painless weakness or attributes it to a benign cause; or bluntly names "MND" as a certainty; delays referral.',
        pass: 'Recognises the red-flag motor pattern, examines for UMN/LMN signs, and refers urgently to neurology with honest handling.',
        exc: 'Recognises the progressive painless motor + bulbar + fasciculation pattern, examines for combined UMN/LMN signs with intact sensation, refers urgently to neurology, and communicates honestly and compassionately without giving him an unconfirmed diagnosis as fact (while naming it in the referral letter) or falsely reassuring.'
      },
      avoid: [
        {
          dont: '"It\u2019s probably just a trapped nerve or getting older \u2014 let\u2019s wait and see."',
          instead: '"Progressive weakness with no pain or numbness, plus the speech and twitching, needs an urgent neurologist \u2014 we shouldn\u2019t wait on this."',
          why: 'Minimising/delaying a progressive painless motor syndrome misses a serious diagnosis.'
        },
        {
          dont: '"I\u2019m afraid this is motor neurone disease."',
          instead: '"This pattern needs urgent specialist assessment and nerve tests \u2014 it\u2019s one of the things they\u2019ll look at \u2014 but I can\u2019t give you a firm diagnosis here."',
          why: 'Delivering an unconfirmed life-limiting diagnosis in primary care is wrong and harmful.'
        },
        {
          dont: '(False reassurance) "I\u2019m sure it\u2019s nothing serious."',
          instead: '"I won\u2019t pretend \u2014 these symptoms are significant, which is exactly why I\u2019m referring you urgently."',
          why: 'False reassurance about a red-flag presentation erodes trust and delays care.'
        }
      ]
    },
    'ocd-recognition': {
      ceg: ['Mental health & addiction', 'New & undifferentiated presentations'],
      stem: {
        name: 'Heather Quinn',
        age: '27 years \u00b7 female',
        pmh: [
          'Intrusive contamination/harm thoughts (obsessions) + hours of hand-washing & checking (compulsions), with insight',
          'Consuming hours/day; impairing work/relationships; hidden for years (shame)',
          'Screen mood/suicidality'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"I know it\u2019s irrational, but I check locks and wash my hands for hours \u2014 it\u2019s taking over my life."',
        reason: 'Video consultation \u2014 distressing intrusive thoughts and compulsions (no examination needed).'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Validate disclosure',
          d: 'Thank her; destigmatise; name OCD \u2014 common and treatable, not a weakness.'
        },
        {
          t: '2\u20134',
          h: 'Explain the cycle',
          d: 'Obsession \u2192 anxiety \u2192 compulsion \u2192 brief relief \u2192 reinforcement; ERP breaks it.'
        },
        {
          t: '4\u20136',
          h: 'Reassure intrusive thoughts',
          d: 'Usually egodystonic symptoms, not intent \u2014 relieves shame; expert advice if real uncertainty about risk (NICE CG31).'
        },
        {
          t: '6\u20138',
          h: 'Severity + risk',
          d: 'Time consumed, impairment (sets the CG31 step), comorbid depression, suicidality (real risk; safety plan, NICE NG225).'
        },
        {
          t: '8\u201312',
          h: 'Treatment + hope',
          d: 'ERP/CBT cornerstone \u00b1 SSRI (higher dose/longer; \u226512 months if effective); stepped care by impairment (\u226410 vs >10 therapist hours; combined + secondary care if severe); hope + safety-net.'
        }
      ],
      wordPics: {
        fail: 'Dismisses it as a habit/"just anxiety", doesn\u2019t name OCD or assess risk, offers no ERP/SSRI; leaves shame and the harm-thought fear unaddressed.',
        pass: 'Recognises OCD, reassures about intrusive thoughts, assesses risk, and offers ERP/CBT \u00b1 SSRI with destigmatisation.',
        exc: 'Validates the disclosure and names OCD, explains the obsession-compulsion cycle, explains egodystonic intrusive thoughts are usually symptoms not intent (expert advice if real uncertainty about risk), assesses severity/comorbidity/suicidality, offers ERP/CBT \u00b1 SSRI within stepped care, and instils hope.'
      },
      avoid: [
        {
          dont: '"Everyone likes things clean \u2014 try to resist it and don\u2019t worry so much."',
          instead: '"This is OCD \u2014 a recognised, treatable condition, not just being house-proud. There\u2019s effective therapy for it."',
          why: 'Trivialising OCD invalidates the patient and misses an impairing, treatable disorder.'
        },
        {
          dont: '(Ignoring the thoughts) not addressing the distressing intrusive thoughts.',
          instead: '"Those upsetting thoughts are a symptom, the opposite of what you want \u2014 that\u2019s why they distress you so much. Can you tell me more about them?"',
          why: 'Failing to reassure about egodystonic intrusive thoughts leaves enormous shame and risk of non-disclosure.'
        },
        {
          dont: '(No risk screen) treating without assessing mood/suicidality.',
          instead: '"How\u2019s your mood, and have you had thoughts that life isn\u2019t worth living?"',
          why: 'OCD carries a real suicide risk; omitting the risk screen is unsafe.'
        }
      ]
    }
  });

})();
