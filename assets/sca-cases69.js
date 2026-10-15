/* ============================================================
   Reasoning GP — Case Library batch 69:
   "MSK & men's lower-genital" (NEW themes, verified absent)
   de Quervain's tenosynovitis (new-mother wrist pain, Finkelstein);
   plantar fasciitis (first-step heel pain, conservative care);
   balanitis/phimosis (the sore foreskin \u2014 diabetes/hygiene/BXO,
   refer if pathological phimosis); pilonidal sinus/abscess (the
   natal-cleft pain \u2014 incise abscess, refer for definitive care).
   No NG12 cancer pathway applies. Load AFTER sca-cases68.js.
   ============================================================ */
(function(){

  /* ===== 248. de Quervain's tenosynovitis ===== */
  const c248 = {
    id: 'de-quervains',
    title: '"Since the baby came my thumb-side wrist is agony when I lift her \u2014 it catches and it\u2019s swollen"',
    type: 'video',
    duration: 12,
    meta: {
      age: 32,
      sex: 'F',
      setting: 'Video consultation, with the wrist examination (tenderness and Finkelstein\u2019s test) arranged face to face \u2014 radial wrist pain in a new mother.',
      system: 'MSK \u2014 de Quervain\u2019s tenosynovitis: recognition, Finkelstein & conservative care',
      checked: 'October 2026'
    },
    brief: 'Mrs Priya Sandhu, 32, 10 weeks postnatal, has pain and swelling over the RADIAL (thumb) side of the wrist, worse lifting/holding the baby and on thumb/wrist movement, with a tender swelling over the radial styloid and pain reproduced on video when, guided, she tucks her thumb into her fist and tilts the wrist towards the little finger (a self-performed Eichhoff-type manoeuvre; a formal Finkelstein test needs an examiner, face to face, if the picture is unclear). Recognise DE QUERVAIN\u2019S TENOSYNOVITIS \u2014 mainly thickening and narrowing of the sheath around the first dorsal extensor compartment tendons (APL/EPB) at the radial wrist, so the tendons catch as they glide \u2014 classically in NEW MOTHERS/repetitive thumb use; confirm clinically (Finkelstein\u2019s test: the examiner holds the thumb and gently deviates the wrist towards the little finger; the Eichhoff variant, thumb held in the fist, is more often positive in normal wrists), distinguish from thumb-base (CMC) OA, scaphoid pathology, intersection syndrome and inflammatory arthritis; MANAGE conservatively (activity modification/baby-handling advice, a splint holding both thumb and wrist (BSSH), paracetamol/ibuprofen or a topical NSAID after asking whether she is breastfeeding (BNF), relative rest), with a local CORTICOSTEROID INJECTION if not settling (discussing skin thinning or lightening, infection and a temporary flare) and referral for persistent, disabling cases (surgical release); ask about her emotional wellbeing (NICE NG194). Reassure (self-limiting/treatable), give ergonomic advice for childcare, and safety-net.',
    script: {
      opening: '"Since having the baby, the thumb side of my right wrist has become really painful \u2014 especially when I scoop her up or feed her. It\u2019s a bit swollen there and sometimes it catches. It\u2019s making looking after her hard. What\u2019s going on?"',
      facts: [
        {
          topic: 'The pain',
          text: 'Started about 4 weeks after the birth (baby, Asha, now 10 weeks). Points on camera to just below the thumb on the thumb side of the right wrist. Worse lifting her under the arms, holding her head while feeding, wringing cloths, opening jars. A bit puffy there. Sometimes a catching or creaking feeling when she moves the thumb.'
        },
        {
          topic: 'If asked to try the test on video',
          text: 'Tucks thumb into her palm, closes her fingers over it and bends the wrist towards the little finger: "Ouch, yes \u2014 that\u2019s exactly it."'
        },
        {
          topic: 'Negatives (if asked)',
          text: 'No fall onto the hand, no injury. No tingling or numbness in the fingers. Other joints fine, no morning stiffness, no swelling elsewhere. No fever, no redness spreading.'
        },
        {
          topic: 'Feeding and medicines',
          text: 'Breastfeeding. Taking nothing for the pain \u2014 worried about anything getting into her milk. No allergies. No asthma, no stomach ulcers.'
        },
        {
          topic: 'Social and mood',
          text: 'First baby. Husband, Raj, back at work; her mother visits twice a week. Tired "like everyone" but coping; enjoys the baby; no low mood or anxiety beyond normal if asked. On maternity leave from her job as a primary teacher. Right-handed.'
        },
        {
          topic: 'How to play it',
          text: 'Warm, tired, practical. You are worried you\u2019ll drop the baby. Ask: "So it will get better?" You would rather try a splint before any injection. Keen to know which painkillers are safe while breastfeeding.'
        }
      ],
      ice: {
        ideas: '"I wondered if I\u2019d damaged something lifting her."',
        concerns: '"I\u2019m scared I\u2019ll drop her. And I don\u2019t want tablets that affect her through my milk."',
        expectations: '"To know what it is and something to make looking after her easier."'
      },
      cues: [
        '"It\u2019s making looking after her hard" \u2014 the impact on caring for the baby.',
        '"I don\u2019t want tablets that affect her" \u2014 breastfeeding and medicine safety.',
        '"I\u2019m tired, like everyone" \u2014 a brief check of postnatal mood and support.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises DE QUERVAIN\u2019S TENOSYNOVITIS \u2014 radial-wrist pain/swelling over the first compartment, worse with thumb/wrist movement and lifting, classically in new mothers/repetitive thumb use'
      },
      {
        dom: 'dg',
        text: 'Confirms clinically \u2014 a guided self-test on video, or FINKELSTEIN\u2019S test face to face if unclear (examiner holds the thumb and deviates the wrist ulnarwards; distinguished from Eichhoff\u2019s thumb-in-fist variant) and first-compartment tenderness, recognising imaging is not routinely needed'
      },
      {
        dom: 'dg',
        text: 'Distinguishes it from thumb-base (CMC) OA, scaphoid pathology, intersection syndrome and inflammatory arthritis'
      },
      {
        dom: 'cm',
        text: 'Manages conservatively \u2014 activity modification/baby-handling ergonomic advice, a THUMB SPICA splint, analgesia/NSAIDs (after asking whether she is breastfeeding), relative rest'
      },
      {
        dom: 'cm',
        text: 'Knows escalation \u2014 local corticosteroid injection if not settling, hand/orthopaedic referral (surgical release) for refractory cases'
      },
      {
        dom: 'ro',
        text: 'Acknowledges the impact on baby care, reassures it is treatable, and checks understanding of splinting/ergonomics'
      },
      {
        dom: 'ro',
        text: 'Gives practical, supportive advice tailored to a new mother, asks whether she is breastfeeding before choosing analgesia, and asks about her emotional wellbeing (NICE NG194)'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: review if not improving, steroid injection/referral for refractory pain, ergonomic measures, and red flags (significant trauma/scaphoid concern) \u2014 conservative-first management'
      }
    ],
    worked: [
      {
        lbl: 'Name it',
        txt: '"From what you describe this sounds like de Quervain\u2019s \u2014 the tunnel the thumb tendons run through on the thumb side of your wrist has become thickened and tight, so they catch. It\u2019s really common in new mums because of all the lifting and scooping of the baby. I\u2019d like to see you in person to press on the spot and do a simple test \u2014 I hold your thumb and gently tilt your wrist towards your little finger \u2014 which reproduces the pain if that\u2019s what it is."'
      },
      {
        lbl: 'Reassure',
        txt: '"It\u2019s not dangerous and it usually settles well with the right measures \u2014 we don\u2019t need scans."'
      },
      {
        lbl: 'Splint + ergonomics',
        txt: '"The mainstays are resting the thumb with a thumb splint, and changing how you lift her \u2014 scoop with your forearms rather than spreading your thumb out. I\u2019ll show you. Painkillers help too \u2014 are you breastfeeding? That helps me pick the right ones."'
      },
      {
        lbl: 'Escalation',
        txt: '"If it doesn\u2019t settle over a few weeks, a small steroid injection into the tendon tunnel helps many people \u2014 it can occasionally thin or lighten the skin there or flare the pain for a day or two \u2014 and rarely we\u2019d refer for a minor op to release the tendons."'
      },
      {
        lbl: 'Support',
        txt: '"I know how hard this makes caring for her \u2014 these measures should ease it so you can manage more comfortably. How are you doing in yourself, and who\u2019s helping you at home?"'
      },
      {
        lbl: 'Safety-net',
        txt: '"Come back if it\u2019s not improving with the splint, or if it gets much worse \u2014 we\u2019ll step up to the injection. And if you ever hurt the wrist in a fall, let me know, as that\u2019s different."'
      }
    ],
    learning: 'DE QUERVAIN\u2019S TENOSYNOVITIS is mainly thickening and narrowing of the sheath around the first dorsal extensor compartment tendons (abductor pollicis longus and extensor pollicis brevis) at the RADIAL wrist, so the tendons catch, presenting with pain and swelling over the radial styloid that is worse with thumb/wrist movement and gripping/lifting \u2014 classically in NEW MOTHERS (repeated lifting of the baby) and with repetitive thumb use. Confirm it clinically \u2014 a guided self-test on video, or FINKELSTEIN\u2019S test face to face if unclear (the examiner holds the thumb and gently deviates the wrist towards the little finger, reproducing the radial-styloid pain \u2014 the thumb-in-fist version is Eichhoff\u2019s test, more often positive in normal wrists) and first-compartment tenderness/swelling; imaging is not routinely needed. Distinguish it from thumb-base (first CMC joint) osteoarthritis (older patients, base-of-thumb pain), scaphoid pathology (trauma, snuffbox tenderness), intersection syndrome (more proximal) and inflammatory arthritis (other joints/systemic features). Manage conservatively first: activity modification and baby-handling/ergonomic advice (lift with the forearm rather than thumb-abducted scooping), a THUMB SPICA splint to rest the thumb/wrist, analgesia/NSAIDs (topical or oral, after asking whether she is breastfeeding \u2014 BNF), and relative rest \u2014 most settle with these. If not settling, a local corticosteroid injection into the tendon sheath relieves symptoms for many (BSSH; counsel skin thinning or lightening, infection, temporary flare), and refractory cases are referred to hand/orthopaedics for surgical decompression. Reassure it is treatable and usually self-limiting with the right measures, give practical ergonomic advice tailored to childcare, ask about her emotional wellbeing (NICE NG194), and safety-net.',
    knowledge: {
      guideline: '[1] British Society for Surgery of the Hand (BSSH): de Quervain\u2019s syndrome, patient information \u00b7 [2] BNF: paracetamol, ibuprofen (breastfeeding sections), topical NSAIDs \u00b7 [3] NICE NG194 Postnatal care (2021) \u00b7 [4] NICE NG100 Rheumatoid arthritis in adults (2018, updated 2020) \u00b7 Finkelstein test \u00b7 thumb spica splint + ergonomics \u00b7 corticosteroid injection / surgical release',
      points: [
        {
          h: 'Recognise',
          t: 'Radial-wrist pain/swelling over the first compartment, worse with thumb/wrist movement and lifting; classically new mothers/repetitive thumb use.'
        },
        {
          h: 'Finkelstein test',
          t: 'Finkelstein\u2019s: examiner holds the thumb and ulnar-deviates the wrist \u2192 reproduces first-compartment pain (thumb-in-fist = Eichhoff\u2019s variant, more false positives). Face-to-face clinical diagnosis; imaging not routinely needed.'
        },
        {
          h: 'Differential',
          t: 'Thumb-base (CMC) OA, scaphoid pathology (trauma/snuffbox), intersection syndrome, superficial radial nerve irritation, inflammatory arthritis [4].'
        },
        {
          h: 'Conservative care',
          t: 'Activity modification/baby-handling ergonomics, splint holding thumb and wrist [1], paracetamol/ibuprofen or topical NSAID after asking about breastfeeding [2], relative rest.'
        },
        {
          h: 'Escalation',
          t: 'Local corticosteroid injection if not settling (counsel skin thinning/lightening, infection, flare) [1]; hand/orthopaedic referral (surgical release) for persistent, disabling cases.'
        },
        {
          h: 'Reassure',
          t: 'Treatable and usually self-limiting with the right measures; tailor advice to childcare; ask about emotional wellbeing and support (NICE NG194 [3]).'
        },
        {
          h: 'Never do',
          t: 'Never image routinely; never overlook the ergonomic/baby-handling cause; never ignore a scaphoid/trauma differential.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Review if not improving; injection/referral for refractory pain; red flags (trauma/scaphoid concern).'
        }
      ]
    }
  };

  /* ===== 249. Plantar fasciitis ===== */
  const c249 = {
    id: 'plantar-fasciitis',
    title: '"My heel is agony for the first few steps in the morning, then eases \u2014 it\u2019s been weeks"',
    type: 'video',
    duration: 12,
    meta: {
      age: 47,
      sex: 'M',
      setting: 'Video consultation, with the foot examination arranged face to face \u2014 chronic heel pain.',
      system: 'MSK \u2014 plantar fasciitis: recognition & conservative management',
      checked: 'October 2026'
    },
    brief: 'Mr Carl Denton, 47 (on his feet at work, recent weight gain, new running), has weeks of PLANTAR HEEL pain that is WORST on the FIRST STEPS in the morning (or after rest) and eases with walking, with tenderness at the MEDIAL CALCANEAL plantar fascia origin. Recognise PLANTAR FASCIITIS \u2014 the commonest cause of plantar heel pain, classically "first-step" pain, related to overuse/weight/footwear/tight calf; confirm clinically, distinguish from calcaneal stress fracture (trauma/point bony tenderness), fat-pad atrophy, tarsal tunnel/nerve entrapment (numbness/tingling), Achilles/insertional pathology, and inflammatory/seronegative arthropathy (enthesitis \u2014 ask about other joints, back, psoriasis); MANAGE conservatively (most improve, though recovery commonly takes several months) \u2014 education, load modification keeping up tolerable activity rather than resting completely, daily calf and plantar-fascia STRETCHING with progressive strengthening, supportive footwear with optional low-cost heel cushioning (custom orthoses not needed first), weight discussed sensitively as part of long-term load reduction (not a condition of treatment), and paracetamol or a short NSAID course only if suitable (JOSPT/APTA 2023, international; BNF); if persistent, review adherence and the diagnosis, then physiotherapy/podiatry, a night splint, and only then a selective steroid injection; shockwave therapy only under NICE HTG200 special arrangements. Reassure about the long but favourable course, and safety-net.',
    script: {
      opening: '"My right heel\u2019s been killing me for a few weeks. The worst bit is the first few steps when I get out of bed \u2014 it\u2019s like stepping on a stone or a knife \u2014 then it eases off as I get going, but comes back after I\u2019ve been sitting. I\u2019ve started running and I\u2019m on my feet all day. What is it?"',
      facts: [
        {
          topic: 'The pain',
          text: 'About 6 weeks, right heel. Underneath, towards the inside of the heel \u2014 points to it on camera and says it\u2019s tender when he presses there. First steps in the morning are the worst; eases after 10 minutes; back after sitting and at the end of a shift.'
        },
        {
          topic: 'Running',
          text: 'Took up running 2 months ago "to lose a bit of weight" \u2014 went from nothing to 5 km four times a week. Old trainers. No single injury moment.'
        },
        {
          topic: 'Negatives (if asked)',
          text: 'Can walk on it; not limping badly. No pain at night or at rest. No swelling, no bruising. No tingling or numbness in the foot. No back pain. No other joints painful, no morning stiffness elsewhere, no eye problems, no bowel problems. No pain squeezing the sides of the heel.'
        },
        {
          topic: 'Health',
          text: 'BMI about 32 \u2014 put on 2 stone in the last 3 years. No diabetes known. No medicines. Occasional ibuprofen. No asthma, no stomach problems. No allergies.'
        },
        {
          topic: 'Work and social',
          text: 'Warehouse supervisor \u2014 on his feet on concrete floors 10 hours a day in steel toe-cap boots. Married, two children. Non-smoker, drinks 15 units a week.'
        },
        {
          topic: 'How to play it',
          text: 'Easy-going, a bit frustrated. You don\u2019t want to give up running now you\u2019ve started. Ask: "Will it go?" If weight is raised sensitively, accept it ("the running was meant to help with that"); if raised bluntly, become a bit defensive.'
        }
      ],
      ice: {
        ideas: '"I thought it was the running. Maybe a heel spur?"',
        concerns: '"I\u2019m worried I\u2019ll have to stop running, and how long it\u2019ll last with my job."',
        expectations: '"Something to fix it \u2014 maybe an injection or an X-ray."'
      },
      cues: [
        '"The first few steps when I get out of bed" \u2014 the classic pattern.',
        '"I\u2019ve started running and I\u2019m on my feet all day" \u2014 load to modify.',
        '"I don\u2019t want to give up the running" \u2014 negotiate staying active.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises PLANTAR FASCIITIS \u2014 "first-step" plantar heel pain (worst in the morning/after rest, easing with walking) with tenderness at the medial calcaneal plantar-fascia origin and typical risk factors'
      },
      {
        dom: 'dg',
        text: 'Confirms clinically (typical history + localised tenderness) and recognises imaging is not routinely required'
      },
      {
        dom: 'dg',
        text: 'Distinguishes it from calcaneal stress fracture (new load/point bony tenderness), tarsal tunnel/nerve entrapment, fat-pad atrophy, Achilles pathology and inflammatory/seronegative arthropathy (enthesitis \u2014 asks about other joints/back/psoriasis)'
      },
      {
        dom: 'cm',
        text: 'Manages conservatively \u2014 education, load modification keeping tolerable activity, calf and plantar-fascia stretching with strengthening, supportive footwear/low-cost heel cushioning, weight discussed sensitively, analgesia only if suitable (JOSPT/APTA 2023; BNF)'
      },
      {
        dom: 'cm',
        text: 'Knows escalation \u2014 review adherence and diagnosis, physiotherapy/podiatry, night splint, selective corticosteroid injection, specialist referral (shockwave only under NICE HTG200 special arrangements) for refractory cases \u2014 and sets realistic timeline expectations'
      },
      {
        dom: 'ro',
        text: 'Reassures about the favourable but slow (months) course, acknowledges the impact on work/running, and checks understanding of stretching/footwear advice'
      },
      {
        dom: 'ro',
        text: 'Engages the patient in load modification (and a sensitive conversation about weight) without being dismissive of his wish to stay active'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: review if not improving, escalate if refractory, and red flags warranting reconsideration (point bony tenderness/stress fracture, neurological symptoms, systemic/inflammatory features) \u2014 conservative-first management'
      }
    ],
    worked: [
      {
        lbl: 'Name it',
        txt: '"This is plantar fasciitis \u2014 strain of the band of tissue along the sole, where it attaches to the heel bone. That classic \u2018stepping on a stone\u2019 pain on the first steps, easing as you move, is the giveaway. The new running and being on your feet all day have set it off."'
      },
      {
        lbl: 'Quick check',
        txt: '"Just to be safe \u2014 was there a specific injury? And do you get any tingling or numbness in the foot? \u2026 (Waits for his answers.) I\u2019d also like to examine the heel in person, to check whether the tenderness is along the fascia rather than a pinpoint on the bone, as that helps rule out a stress fracture."'
      },
      {
        lbl: 'Conservative plan',
        txt: '"The mainstays are stretching and strengthening \u2014 your calf and the sole \u2014 which I\u2019ll show you, supportive cushioned footwear or a cheap heel cup, and adjusting the running so you stay active without big jumps in distance. Painkillers can help you keep moving if they suit you. If you\u2019d find it useful at some point, we can also talk about weight, as it\u2019s one of the things that loads the heel."'
      },
      {
        lbl: 'Set expectations',
        txt: '"I\u2019ll be honest \u2014 it can take a few months to fully settle, but it does get better with these measures, and most people don\u2019t need anything more."'
      },
      {
        lbl: 'Escalation',
        txt: '"If it\u2019s stubborn, we\u2019ll first check the plan and the diagnosis, then physiotherapy helps, a night splint can help the morning pain, and there are options like a steroid injection (used carefully) or specialist treatments such as shockwave therapy, which is only offered in special research-style arrangements because the evidence is uncertain."'
      },
      {
        lbl: 'Safety-net',
        txt: '"Come back if it\u2019s not improving, if you get a sharp pinpoint pain on the heel bone (especially after upping your running), or any numbness or pins and needles \u2014 those would make me think again."'
      }
    ],
    learning: 'PLANTAR FASCIITIS is the commonest cause of plantar heel pain, recognised by classic "FIRST-STEP" pain \u2014 worst on the first steps in the morning or after rest, easing with walking, and returning after prolonged standing \u2014 with tenderness at the MEDIAL CALCANEAL tubercle (plantar-fascia origin); risk factors include overuse/new running, prolonged standing, higher body weight, unsupportive footwear and a tight calf/Achilles; chronic cases are often degenerative and load-related ("plantar fasciopathy"). Diagnosis is clinical (typical history plus localised tenderness, \u00b1 pain on dorsiflexing the toes) and imaging is not routinely required. Distinguish it from a calcaneal STRESS FRACTURE (recent increase in load/trauma, point bony tenderness, positive squeeze test), fat-pad atrophy (central heel, older), tarsal tunnel/nerve entrapment (burning/tingling/numbness), Achilles/insertional pathology, and inflammatory/seronegative arthropathy with enthesitis (ask about other joints, back pain, psoriasis, eye/GI symptoms). Manage conservatively \u2014 most improve, though recovery commonly takes several months (JOSPT/APTA 2023, international): education, load modification keeping up tolerable activity rather than complete rest, calf and plantar-fascia STRETCHING with progressive strengthening, supportive FOOTWEAR with optional low-cost heel cushioning, WEIGHT discussed sensitively (not a condition of treatment), and paracetamol or a short NSAID course only if suitable (BNF), which are first-line and effective for most. For persistent pain, review adherence and the diagnosis, then escalate to physiotherapy/podiatry, a night splint, a selective corticosteroid injection (risk of fat-pad atrophy/fascia rupture), and specialist referral (extracorporeal shockwave therapy only under NICE HTG200 special arrangements, as effectiveness is uncertain). Reassure about the favourable but slow course, set realistic timeline expectations, give stretching/footwear and load/weight advice, and safety-net for features that would prompt reconsideration (stress-fracture point tenderness, neurological symptoms, inflammatory/systemic features).',
    knowledge: {
      guideline: '[1] JOSPT/APTA Heel pain \u2013 plantar fasciitis clinical practice guideline (2023, international) \u00b7 [2] NICE HTG200 Extracorporeal shockwave therapy for refractory plantar fasciitis (2009) \u00b7 [3] NICE NG65 Spondyloarthritis in over 16s (2017) \u00b7 [4] BNF: paracetamol, NSAIDs \u00b7 first-step heel pain \u00b7 conservative care (education/load/stretching/footwear) \u00b7 escalation (physio/injection/shockwave)',
      points: [
        {
          h: 'Recognise',
          t: 'First-step plantar heel pain (morning/after rest, eases with walking) + tenderness at medial calcaneal plantar-fascia origin; overuse/standing/weight/footwear/tight calf.'
        },
        {
          h: 'Clinical diagnosis',
          t: 'Typical history + localised tenderness (\u00b1 pain on toe dorsiflexion). Imaging not routinely required.'
        },
        {
          h: 'Differential',
          t: 'Calcaneal stress fracture (new load/point bony tenderness), tarsal tunnel/nerve entrapment (tingling/numbness), fat-pad atrophy, Achilles pathology, inflammatory/seronegative arthropathy (enthesitis [3]); S1 radiculopathy. Red flags (cannot weight-bear, squeeze tenderness, fever, night pain, weight loss) \u2192 reconsider.'
        },
        {
          h: 'Conservative care',
          t: 'Education, load modification (stay active within tolerance), calf and plantar-fascia stretching with strengthening, supportive footwear/optional heel cushioning [1]; weight discussed sensitively; analgesia only if suitable [4]. Most improve over several months.'
        },
        {
          h: 'Escalation',
          t: 'Review adherence and diagnosis; physiotherapy/podiatry; night splint; selective corticosteroid injection (fat-pad atrophy/rupture risk); specialist referral \u2014 shockwave only under NICE HTG200 [2] special arrangements.'
        },
        {
          h: 'Set expectations',
          t: 'Favourable but slow course (months); reassure most don\u2019t need more than conservative measures.'
        },
        {
          h: 'Never do',
          t: 'Never image routinely; never miss a stress fracture (new load/point tenderness) or nerve entrapment; never overlook inflammatory enthesitis clues.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Review if not improving; escalate if refractory; reconsider for point bony tenderness, neurological symptoms or systemic/inflammatory features.'
        }
      ]
    }
  };

  /* ===== 250. Balanitis / phimosis ===== */
  const c250 = {
    id: 'balanitis-phimosis',
    title: '"The end of my penis is red, sore and itchy under the foreskin, and it\u2019s getting hard to pull back"',
    type: 'video',
    duration: 12,
    meta: {
      age: 54,
      sex: 'M',
      setting: 'Video consultation, with a chaperoned genital examination arranged face to face \u2014 a sore, inflamed glans/foreskin.',
      system: 'Urology / Men\u2019s health \u2014 balanitis & phimosis: causes, diabetes & when to refer',
      checked: 'October 2026'
    },
    brief: 'Mr Brian Okafor, 54, has a red, sore, itchy GLANS with foreskin inflammation and discharge, recurrent over months, and increasing difficulty RETRACTING the foreskin (developing phimosis). Recognise BALANITIS (inflammation of the glans \u00b1 balanoposthitis with the foreskin) and PHIMOSIS (non-retractile foreskin), screen the CAUSES (BASHH balanoposthitis guideline 2025: irritant or contact dermatitis and dermatoses are common, and Candida is a minority cause, often secondary to an underlying skin condition) \u2014 irritant/contact dermatitis and hygiene (soaps and over-washing as well as poor hygiene), candidal (and the important link with DIABETES \u2014 recurrent candidal balanitis can be a presenting feature, so check glucose/HbA1c), bacterial/STI (including herpes and syphilis), and the key dermatosis LICHEN SCLEROSUS (BXO \u2014 a white, scarring change causing pathological phimosis and a meatal-stenosis/SCC-risk that needs dermatology/urology and sometimes circumcision); MANAGE per cause (hygiene advice, topical antifungal/steroid/antibacterial as appropriate, treat diabetes), and REFER for pathological phimosis, suspected lichen sclerosus/BXO, recurrent/refractory disease or any suspicious lesion. Examine face to face with a chaperone offered (GMC 2024); avoid forcible retraction; paraphimosis (a retracted foreskin that will not go forward) is a same-day emergency; counsel hygiene; check glucose. NICE NG12: consider a suspected cancer pathway referral for a penile mass or ulcerated lesion once an STI has been excluded, a persistent lesion after STI treatment, or unexplained or persistent symptoms affecting the foreskin or glans; a lesion hidden by a tight foreskin needs specialist assessment.',
    script: {
      opening: '"This is awkward, doctor. The end of my penis keeps getting red, sore and itchy under the foreskin, with a bit of discharge \u2014 it\u2019s happened a few times over the last few months. And now the foreskin\u2019s getting tight and hard to pull back. Can you sort it?"',
      facts: [
        {
          topic: 'The problem',
          text: 'Three or four episodes over 6 months, each lasting a week or two. Red, sore, itchy, a bit wet under the foreskin, sometimes white cheesy stuff. No lumps or ulcers he has noticed. Used some thrush cream from the chemist once \u2014 it helped a bit.'
        },
        {
          topic: 'The foreskin',
          text: 'Tighter over the last 2 months; can only pull it back halfway now. Hasn\u2019t got stuck behind the head. If asked: noticed the skin at the tip "looks a bit whiter and shiny". Stream OK, no spraying, no pain passing urine.'
        },
        {
          topic: 'Hygiene and products',
          text: 'Washes "thoroughly" with shower gel twice a day. No new condoms or creams.'
        },
        {
          topic: 'Diabetes questions (if asked)',
          text: '"Not that I\u2019ve noticed." Hasn\u2019t had a blood test for years. Doesn\u2019t know about diabetes in the family \u2014 "we never talked about health".'
        },
        {
          topic: 'Sexual history (if asked)',
          text: 'Married 25 years, wife is his only partner. No discharge from the urethra. Wife has had thrush "now and then".'
        },
        {
          topic: 'Health',
          text: 'Overweight (BMI about 31). High blood pressure \u2014 takes amlodipine. No allergies. Drives a taxi. Smokes 10 a day.'
        },
        {
          topic: 'How to play it',
          text: 'Embarrassed, uses vague words ("down there"). Relax if the doctor is matter-of-fact. Surprised by the diabetes link: "Diabetes? I\u2019d not thought of that." Prefer to send a photo or be examined at the surgery rather than show it on video.'
        }
      ],
      ice: {
        ideas: '"An infection \u2014 thrush, maybe. Some cream should sort it."',
        concerns: '"With the tightness, I\u2019m worried it\u2019s something serious \u2014 cancer, even." Also worried about sex with his wife.',
        expectations: '"A cream that clears it for good."'
      },
      cues: [
        '"It keeps coming back" \u2014 recurrence points to an underlying cause such as diabetes.',
        '"The foreskin\u2019s getting tight" \u2014 possible lichen sclerosus or pathological phimosis.',
        '"I haven\u2019t had a blood test for years" (if asked about check-ups) \u2014 opportunity to test for diabetes.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises BALANITIS (\u00b1 balanoposthitis) and developing PHIMOSIS (non-retractile foreskin) from the recurrent sore/itchy glans and increasing retraction difficulty, examining face to face with consent and a chaperone offered, without forcible retraction'
      },
      {
        dom: 'dg',
        text: 'Checks GLUCOSE/HbA1c \u2014 recognising recurrent candidal balanitis\u2019s strong link with (and possible presentation of) DIABETES'
      },
      {
        dom: 'dg',
        text: 'Screens the CAUSES (BASHH 2025: irritant dermatitis and dermatoses common, Candida a minority) \u2014 irritant/contact dermatitis and hygiene, candidal/infective, bacterial/STI (GUM if at risk), psoriasis/lichen planus, and lichen sclerosus/BXO'
      },
      {
        dom: 'dg',
        text: 'Recognises LICHEN SCLEROSUS (BXO) \u2014 white scarring causing pathological phimosis/meatal stenosis with a small penile SCC risk \u2014 needing dermatology/urology referral'
      },
      {
        dom: 'cm',
        text: 'Manages per cause (hygiene advice, topical antifungal \u00b1 steroid/antibacterial, treat diabetes) and REFERS for pathological phimosis, suspected BXO, recurrent/refractory disease or a suspicious lesion (NICE NG12) \u2014 never forcibly retracting, and treating paraphimosis as a same-day emergency'
      },
      {
        dom: 'ro',
        text: 'Handles an embarrassing problem sensitively, reassures and explains the diagnosis/cause, and checks understanding'
      },
      { dom: 'ro', text: 'Communicates the diabetes check and referral reasoning clearly without alarming' },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: glucose result, response to treatment, referral for phimosis/BXO/refractory or suspicious lesions, hygiene advice, and review \u2014 cause-directed care + diabetes check + appropriate referral'
      }
    ],
    worked: [
      {
        lbl: 'Reassure + examine',
        txt: '"There\u2019s no need to be embarrassed \u2014 this is common and we\u2019ll sort it. I\u2019d like to examine you in person \u2014 you\u2019re welcome to have a chaperone \u2014 gently, and I won\u2019t force the foreskin back. The redness and soreness is balanitis, and the tightening you describe is the foreskin becoming harder to retract."'
      },
      {
        lbl: 'Check for diabetes',
        txt: '"Because it keeps coming back, I want to check your blood sugar \u2014 recurrent soreness like this can be linked to diabetes, and occasionally it\u2019s the first sign. So a glucose/HbA1c test is important here."'
      },
      {
        lbl: 'Find the cause + treat',
        txt: '"Irritation from soaps or washing, and skin conditions, are common causes; a thrush (yeast) infection is one possible cause, which responds to an antifungal cream, sometimes with a mild steroid. Everyone benefits from gentle hygiene \u2014 wash with water, use a moisturiser instead of soap, and dry well. If there\u2019s any STI risk we can screen for that too."'
      },
      {
        lbl: 'Flag lichen sclerosus',
        txt: '"One thing I\u2019m checking for is a skin condition called lichen sclerosus, which causes whitish scarring and tightening \u2014 if that\u2019s what\u2019s tightening your foreskin, it needs a specialist, and sometimes a steroid ointment or a circumcision."'
      },
      {
        lbl: 'Refer if needed',
        txt: '"If the foreskin stays tight, it looks scarred, or it keeps recurring despite treatment, I\u2019ll refer you to urology. Please don\u2019t force the foreskin back, as that can cause harm."'
      },
      {
        lbl: 'Safety-net',
        txt: '"If the foreskin ever gets stuck back and won\u2019t go forward, go to A&E the same day. Come back if it\u2019s not settling, the foreskin won\u2019t move, or you notice any persistent lump, white patch or non-healing sore \u2014 that I\u2019d want looked at promptly."'
      }
    ],
    learning: 'BALANITIS is inflammation of the glans (balanoposthitis if the foreskin is also involved), presenting as a red, sore, itchy glans with discharge; recurrent episodes and progressive difficulty retracting the foreskin suggest developing PHIMOSIS (non-retractile foreskin) \u2014 examine without forcibly retracting. Irritant or contact dermatitis and dermatoses are common causes and Candida is a minority cause (BASHH balanoposthitis guideline 2025). Importantly, recurrent CANDIDAL balanitis is strongly associated with DIABETES and can be a presenting feature, so CHECK glucose/HbA1c in recurrent balanitis. Screen the causes: candidal/infective (red glans, itch, white curd-like material \u2014 commoner with diabetes, antibiotics, immunosuppression), irritant/contact dermatitis and hygiene (too little or too much), bacterial infection, STI (GUM screen if at risk), psoriasis/lichen planus, and crucially LICHEN SCLEROSUS (balanitis xerotica obliterans, BXO) \u2014 a white, atrophic, scarring change causing pathological phimosis and meatal stenosis that needs dermatology/urology involvement (potent topical steroids, sometimes circumcision) and carries a small increased penile SCC risk. Manage per cause: hygiene advice (gentle washing, drying, avoiding irritant soaps), topical antifungal \u00b1 mild steroid for candidal disease, appropriate treatment of bacterial/STI causes, and optimisation of diabetes. Refer for pathological phimosis, suspected lichen sclerosus/BXO, recurrent/refractory balanitis, or any suspicious/non-healing lesion (urology; NICE NG12: suspected cancer pathway referral for a penile mass or ulcerated lesion once an STI is excluded, a persistent lesion after STI treatment, or unexplained or persistent foreskin or glans symptoms), and consider circumcision in pathological phimosis/recurrent disease \u2014 never forcibly retracting a phimotic foreskin, examining with a chaperone offered, and treating paraphimosis as a same-day emergency. Handle an embarrassing problem sensitively, check glucose, screen for BXO, treat by cause, and safety-net. NICE NG12 applies to a persistent or suspicious penile lesion or unexplained persistent foreskin/glans symptoms.',
    knowledge: {
      guideline: '[1] BASHH UK national guideline on the management of balanoposthitis (2025) \u00b7 [2] NICE NG12 Suspected cancer: recognition and referral (2015, last updated 15 April 2026) \u00b7 [3] NICE PH38 Type 2 diabetes: prevention in people at high risk (2012, updated 2017) \u00b7 [4] BAD guidelines for the management of lichen sclerosus (2018) \u00b7 [5] BNF: clotrimazole, hydrocortisone, fluconazole \u00b7 [6] GMC Intimate examinations and chaperones (2024) \u00b7 candidal balanitis & diabetes (check glucose) \u00b7 lichen sclerosus/BXO referral \u00b7 hygiene & cause-directed treatment',
      points: [
        {
          h: 'Recognise',
          t: 'Red, sore, itchy glans \u00b1 foreskin (balanoposthitis); recurrent episodes + difficulty retracting suggest developing phimosis. Examine face to face with a chaperone offered [6]. Don\u2019t forcibly retract; paraphimosis is a same-day emergency.'
        },
        {
          h: 'Check for diabetes',
          t: 'Recurrent candidal balanitis is strongly linked with (and can present) diabetes \u2014 check HbA1c (\u226548 mmol/mol supports diabetes; 42\u201347 high risk [3]). Candidal: red glans, itch, white curd-like material.'
        },
        {
          h: 'Screen causes',
          t: 'BASHH [1]: irritant/contact dermatitis and hygiene (common), dermatoses \u2014 psoriasis/lichen planus, lichen sclerosus/BXO \u2014 candidal (a minority), bacterial/STI incl. herpes and syphilis (GUM if at risk), premalignant change.'
        },
        {
          h: 'Lichen sclerosus / BXO',
          t: 'White, atrophic, scarring change \u2192 pathological phimosis/meatal stenosis; dermatology/urology (potent topical steroid, sometimes circumcision); small penile SCC risk.'
        },
        {
          h: 'Manage',
          t: 'Hygiene advice with emollient soap substitute; clotrimazole 1% twice daily 7\u201314 days \u00b1 short hydrocortisone 1% for candidal [5]; treat bacterial/STI by syndrome; optimise diabetes; reassess rather than repeat creams.'
        },
        {
          h: 'Refer',
          t: 'Pathological phimosis, suspected BXO, recurrent/refractory balanitis, or any suspicious lesion (urology; NICE NG12 [2]: penile mass or ulcerated lesion after STI excluded, persistent lesion, or unexplained persistent foreskin/glans symptoms); consider circumcision.'
        },
        {
          h: 'Never do',
          t: 'Never forcibly retract a phimotic foreskin; never miss the diabetes link; never overlook lichen sclerosus/BXO or a suspicious penile lesion.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Glucose result; treatment response; referral for phimosis/BXO/refractory/suspicious lesion; hygiene advice; review.'
        }
      ]
    }
  };

  /* ===== 251. Pilonidal sinus / abscess ===== */
  const c251 = {
    id: 'pilonidal-sinus',
    title: '"I\u2019ve got a really painful swelling at the top of my bum cleft that\u2019s started leaking \u2014 I can\u2019t sit down"',
    type: 'video',
    duration: 12,
    meta: {
      age: 26,
      sex: 'M',
      setting: 'Video consultation, then same-day face-to-face assessment (observations and chaperoned examination) \u2014 a painful natal-cleft swelling/discharge.',
      system: 'Surgery \u2014 pilonidal sinus & abscess: recognition, acute drainage & definitive care',
      checked: 'October 2026'
    },
    brief: 'Mr Jordan Reilly, 26 (hairy, desk/driving job, overweight), has a painful, red, swollen lump in the midline NATAL CLEFT (top of the buttock crease) with some discharge, and a history of intermittent discharge/pits there \u2014 a PILONIDAL SINUS now with an ACUTE ABSCESS. Recognise PILONIDAL DISEASE (a sinus/cyst in the natal cleft, typically with midline pits, related to hair/friction, commonest in young hirsute men) and distinguish the ACUTE ABSCESS (painful, red, fluctuant, may discharge) from a chronic/quiescent sinus; MANAGE the acute abscess \u2014 it needs INCISION AND DRAINAGE, usually through an incision placed OFF the midline, with definitive surgery deferred until inflammation settles (European Society of Coloproctology 2024, international); in most areas this is arranged through SAME-DAY SURGICAL ASSESSMENT (drainage in primary care only if competent, equipped and the abscess is suitable); give analgesia (paracetamol and, if suitable, ibuprofen, BNF doses); antibiotics only for spreading cellulitis or systemic features (agent and dose per NICE NG141 and the BNF); check observations (temperature, pulse, BP, respiratory rate, mental state) face to face and use NICE NG253 if he is systemically unwell; ask about DIABETES or IMMUNOSUPPRESSION, which raise the threshold for urgent referral; and for the underlying sinus, REFER routinely to general/colorectal surgery for definitive treatment (minimally invasive or excisional options, chosen by the surgeon) once settled \u2014 asymptomatic pits need no operation; advise on PREVENTION/hygiene (keeping the area clean/dry and removing hair from the area are widely advised, though the evidence for hair removal is limited; weight discussed sensitively, without blaming language); and consider the differentials (perianal abscess/fistula, hidradenitis, infected cyst). The skill is recognising pilonidal abscess, arranging drainage, referring for definitive care, and prevention advice.',
    script: {
      opening: '"I\u2019ve got this really painful swelling right at the top of my bum crease \u2014 it\u2019s red, hot and now it\u2019s started leaking a bit of fluid. I can\u2019t sit down properly, and it\u2019s been building up over a few days. I\u2019ve had a bit of discharge there on and off before. What is it?"',
      facts: [
        {
          topic: 'The swelling',
          text: 'Four days, getting bigger. Right at the top of the buttock crease, in the middle \u2014 "nowhere near my back passage". Red, hot, very tender, soft in the middle; started leaking yellowish fluid this morning. Can\u2019t sit; lying on his front.'
        },
        {
          topic: 'Before',
          text: 'For about a year, "every so often it gets a bit damp and there\u2019s a mark on my boxers". His girlfriend once said there were "little holes" there. Never painful like this.'
        },
        {
          topic: 'General (if asked)',
          text: 'Felt a bit hot last night; no thermometer. No rigors. Eating and drinking. Redness hasn\u2019t spread beyond the lump. Bowels normal, no bleeding, no pain on opening bowels.'
        },
        {
          topic: 'Health',
          text: 'No diabetes known, no immune problems, no medicines, no allergies. BMI about 30. Hairy back. Took ibuprofen this morning.'
        },
        {
          topic: 'Work and social',
          text: 'Sales rep \u2014 sits at a desk and drives about 300 miles a week. Lives with his girlfriend, who can drive him. Smokes 10 a day.'
        },
        {
          topic: 'How to play it',
          text: 'Embarrassed and in pain, shifting about. You want antibiotics: "Can I just have antibiotics?" When told it needs draining, be anxious ("A cut? Today?") then agree. Ask how to stop it coming back.'
        }
      ],
      ice: {
        ideas: '"Some kind of abscess, I guess."',
        concerns: '"It\u2019s embarrassing, and I don\u2019t want it coming back. And I can\u2019t drive for work like this."',
        expectations: '"Antibiotics to make it go away."'
      },
      cues: [
        '"I\u2019ve had a bit of discharge there on and off before" \u2014 the underlying sinus.',
        '"Can I just have antibiotics?" \u2014 expectation to negotiate: the abscess needs draining.',
        '"I sit and drive a lot" \u2014 risk factor and prevention advice.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises PILONIDAL DISEASE (midline natal-cleft sinus/pits, hair/friction-related, young hirsute men) and identifies the ACUTE ABSCESS (painful, red, fluctuant, discharging)'
      },
      {
        dom: 'cm',
        text: 'Arranges INCISION AND DRAINAGE for the acute abscess (usually via same-day surgical assessment/SDEC; in primary care only if competent and suitable) with analgesia \u2014 recognising antibiotics are not a substitute for drainage \u2014 after checking observations (NICE NG253 if unwell) and asking about diabetes/immunosuppression'
      },
      {
        dom: 'cm',
        text: 'Reserves ANTIBIOTICS for surrounding cellulitis/systemic features rather than treating the abscess with antibiotics alone'
      },
      {
        dom: 'cm',
        text: 'REFERS to general/colorectal SURGERY for definitive treatment of the underlying sinus once the acute episode settles (recurrence common)'
      },
      {
        dom: 'cm',
        text: 'Advises PREVENTION/hygiene (keep clean/dry, hair removal \u2014 limited evidence \u2014 and weight discussed without blame) and considers the differential (perianal abscess/fistula, hidradenitis, infected cyst)'
      },
      {
        dom: 'ro',
        text: 'Handles a painful, embarrassing problem sensitively, explains the diagnosis and the need for drainage, and checks understanding'
      },
      { dom: 'ro', text: 'Communicates the referral and prevention reasoning clearly and supportively' },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: urgent drainage and analgesia, antibiotics only if cellulitis/systemic, surgical referral for definitive care, prevention advice, and return for spreading infection/systemic features \u2014 drainage + definitive referral, not antibiotics alone'
      }
    ],
    worked: [
      {
        lbl: 'Recognise + explain',
        txt: '"This is a pilonidal abscess \u2014 an infection in a little pocket at the top of the buttock crease, which forms around trapped hairs. They\u2019re common in younger men, especially with a lot of sitting. The on-off discharge you\u2019ve had before is the underlying sinus, and now it\u2019s flared into an abscess."'
      },
      {
        lbl: 'Drainage is the key',
        txt: '"The important thing is that an abscess needs to be drained \u2014 letting the pus out is what relieves it. Antibiotics alone won\u2019t fix it. I\u2019ll arrange for you to be seen by the surgical team today to drain it, with good pain relief, and we\u2019ll only add antibiotics if the surrounding skin is spreading-red or you\u2019re feverish."'
      },
      {
        lbl: 'Definitive treatment',
        txt: '"Once this settles, I\u2019ll refer you to the surgeons to deal with the underlying sinus properly, because otherwise it tends to recur. There are different procedures and they\u2019ll advise what suits you."'
      },
      {
        lbl: 'Prevention',
        txt: '"To reduce recurrence: keep the area clean and dry, and removing the hair around the cleft is widely advised, although the evidence for it is limited. Some people also find it helps to reduce long spells of sitting, and weight can play a part too. These may cut the chance of it coming back."'
      },
      {
        lbl: 'Sensitive support',
        txt: '"I know this is sore and a bit embarrassing \u2014 it\u2019s a very common problem and we\u2019ll get you comfortable."'
      },
      {
        lbl: 'Safety-net',
        txt: '"If the redness spreads, you get a fever or feel unwell, or the pain becomes severe before drainage, contact us urgently. After drainage, we\u2019ll arrange the surgical follow-up."'
      }
    ],
    learning: 'PILONIDAL DISEASE is a sinus/cyst in the midline NATAL CLEFT (top of the buttock crease), typically with one or more midline PITS and related to hair/friction, commonest in young, hirsute men and those who sit a lot or are overweight; intermittent discharge/pits with a now painful, red, fluctuant swelling indicates a PILONIDAL ABSCESS. Distinguish the ACUTE ABSCESS (painful, red, hot, fluctuant, may discharge pus) from a chronic/quiescent sinus \u2014 the abscess is the urgent issue. An acute pilonidal abscess needs INCISION AND DRAINAGE, usually through an off-midline incision with definitive surgery deferred (European Society of Coloproctology 2024, international): arrange same-day surgical assessment (drainage in primary care only if competent, equipped and the abscess is suitable) with analgesia (paracetamol and, if suitable, ibuprofen at BNF doses), after checking observations face to face (NICE NG253 if systemically unwell) and asking about diabetes or immunosuppression, recognising that ANTIBIOTICS are NOT a substitute for drainage and should be reserved for surrounding cellulitis or systemic features (NICE NG141) \u2014 an undrained abscess will not settle on antibiotics alone. For the underlying SINUS (the recurrent problem), refer to general/colorectal surgery for definitive management once the acute episode settles (the surgeon chooses minimally invasive or excisional options; recurrence after drainage alone is common, so definitive care matters; asymptomatic pits need no operation). Advise prevention and hygiene \u2014 keep the area clean and dry, and hair removal around the cleft is widely advised though the evidence is limited, with weight discussed sensitively \u2014 and consider the differential (perianal abscess/fistula closer to the anus, hidradenitis suppurativa with other flexures, infected sebaceous cyst). Handle a painful, embarrassing problem sensitively, arrange drainage rather than antibiotics alone, refer for definitive treatment, and safety-net for spreading infection/systemic features.',
    knowledge: {
      guideline: 'Pilonidal sinus & abscess \u00b7 incision and drainage for acute abscess \u00b7 surgical referral for definitive care \u00b7 prevention (hygiene/hair/weight) \u00b7 [1] European Society of Coloproctology guidelines for the management of pilonidal disease, BJS 2024;111(10):znae237 (international) \u00b7 [2] NICE NG141 Cellulitis and erysipelas: antimicrobial prescribing (2019) \u00b7 [3] NICE NG253 Suspected sepsis in people aged 16 or over (2025) \u00b7 [4] BNF paracetamol, ibuprofen',
      points: [
        {
          h: 'Recognise',
          t: 'Midline natal-cleft sinus/pits with hair/friction; young hirsute men/sitters/overweight. Painful red fluctuant swelling with discharge = pilonidal abscess.'
        },
        {
          h: 'Acute abscess',
          t: 'Distinguish the acute abscess (painful, red, fluctuant, discharging) from a chronic/quiescent sinus. The abscess is the urgent issue.'
        },
        {
          h: 'Drainage',
          t: 'Acute abscess needs incision and drainage (off-midline; usually same-day surgical assessment/SDEC, primary care only if competent and suitable) [1] with analgesia [4]. Antibiotics are not a substitute. Check observations (NG253 [3] if unwell); ask about diabetes/immunosuppression.'
        },
        {
          h: 'Antibiotics',
          t: 'Reserve antibiotics for surrounding cellulitis or systemic features \u2014 not the abscess alone (NICE NG141 [2]).'
        },
        {
          h: 'Definitive referral',
          t: 'Refer routinely to general/colorectal surgery for definitive sinus treatment once settled (minimally invasive or excisional, surgeon\u2019s choice) [1]; recurrence is common; asymptomatic pits need no operation.'
        },
        {
          h: 'Prevention & differential',
          t: 'Keep clean/dry; hair removal widely advised (limited evidence); weight discussed without blame. Differential: perianal abscess/fistula, hidradenitis suppurativa, infected sebaceous cyst.'
        },
        {
          h: 'Never do',
          t: 'Never treat a pilonidal abscess with antibiotics alone; never miss the underlying sinus needing definitive care; never overlook spreading cellulitis/systemic features.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Urgent drainage + analgesia; antibiotics only if cellulitis/systemic; surgical referral for definitive care; prevention advice; return for spreading infection/fever.'
        }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c248, c249, c250, c251);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {
    'de-quervains': {
      ceg: ['Gender, reproductive & sexual health', 'New & undifferentiated presentations'],
      stem: {
        name: 'Priya Sandhu',
        age: '32 years \u00b7 female',
        pmh: [
          '10 weeks postnatal; radial-wrist pain/swelling worse lifting/holding the baby',
          'Positive Finkelstein; tender over radial styloid (first compartment)',
          'Breastfeeding status not stated \u2014 ask (it affects the analgesia choice)'
        ],
        meds: ['None regular'],
        allergy: 'NKDA',
        recent: '"Since the baby came my thumb-side wrist is agony when I lift her \u2014 it catches and it\u2019s swollen."',
        reason: 'Video consultation (wrist examined face to face) \u2014 radial wrist pain in a new mother.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Recognise + Finkelstein',
          d: 'Radial-wrist pain/swelling lifting the baby + positive Finkelstein (face to face) = de Quervain\u2019s.'
        },
        {
          t: '2\u20134',
          h: 'Differential',
          d: 'Thumb-base OA, scaphoid (trauma/snuffbox), intersection syndrome, inflammatory arthritis.'
        },
        {
          t: '4\u20137',
          h: 'Conservative care',
          d: 'Thumb spica splint + baby-handling ergonomics + analgesia (ask about breastfeeding) + relative rest.'
        },
        {
          t: '7\u20139',
          h: 'Escalation',
          d: 'Steroid injection if not settling; hand/ortho referral (surgical release) if refractory.'
        },
        {
          t: '9\u201312',
          h: 'Support + safety-net',
          d: 'Acknowledge impact on baby care; review if not improving; red flags (trauma/scaphoid).'
        }
      ],
      wordPics: {
        fail: 'Imaging-first or vague "wrist strain"; no Finkelstein, splint or ergonomic advice; ignores breastfeeding for analgesia.',
        pass: 'Recognises de Quervain\u2019s with Finkelstein, gives splint + ergonomics + analgesia, and knows escalation.',
        exc: 'Recognises de Quervain\u2019s, confirms with Finkelstein, excludes scaphoid/OA, manages conservatively (thumb spica + baby-handling ergonomics + breastfeeding-aware analgesia), offers steroid injection/referral if refractory, and supports the new mother.'
      },
      avoid: [
        {
          dont: '"Let\u2019s get an X-ray and see."',
          instead: '"This is a clinical diagnosis \u2014 the Finkelstein test confirms de Quervain\u2019s; we don\u2019t need imaging."',
          why: 'Routine imaging is unnecessary for a clinical diagnosis.'
        },
        {
          dont: '(No ergonomics) just giving painkillers.',
          instead: '"Changing how you lift her \u2014 forearm scoop, a thumb splint \u2014 is half the treatment."',
          why: 'The ergonomic/baby-handling cause must be addressed to recover.'
        },
        {
          dont: '(Ignoring breastfeeding) prescribing without checking.',
          instead: '"Are you breastfeeding? I\u2019ll choose painkillers that are fine with that."',
          why: 'Analgesia choice must be breastfeeding-appropriate.'
        }
      ]
    },
    'plantar-fasciitis': {
      ceg: ['New & undifferentiated presentations', 'Long-term conditions & cancer'],
      stem: {
        name: 'Carl Denton',
        age: '47 years \u00b7 male',
        pmh: [
          'Weeks of plantar heel pain \u2014 worst first steps in the morning, eases with walking',
          'Tender medial calcaneal plantar-fascia origin; new running, on feet all day, recent weight gain',
          'No numbness/tingling; no specific injury'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"My heel is agony for the first few steps in the morning, then eases \u2014 it\u2019s been weeks."',
        reason: 'Video consultation (foot examined face to face) \u2014 chronic heel pain.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Recognise',
          d: 'First-step heel pain easing with walking + tender medial calcaneal origin + overuse = plantar fasciitis.'
        },
        {
          t: '2\u20104',
          h: 'Differential',
          d: 'Stress fracture (new load/point tenderness), tarsal tunnel (tingling), fat-pad atrophy, enthesitis.'
        },
        {
          t: '4\u20107',
          h: 'Conservative care',
          d: 'Stretching (calf + fascia) and strengthening, supportive footwear/heel cushioning, load modification, weight raised sensitively, analgesia only if suitable.'
        },
        {
          t: '7\u20109',
          h: 'Expectations + escalation',
          d: 'Months to settle; review adherence, then physio/night splint/selective injection; shockwave only under NICE HTG200 special arrangements.'
        },
        {
          t: '9\u201212',
          h: 'Safety-net',
          d: 'Review if not improving; reconsider for point bony tenderness/neuro/inflammatory features.'
        }
      ],
      wordPics: {
        fail: 'Images routinely or mislabels; no stretching/footwear/load advice; misses a stress fracture or enthesitis.',
        pass: 'Recognises plantar fasciitis, gives conservative care and realistic timeline, and screens the differential.',
        exc: 'Recognises plantar fasciitis (first-step pain), excludes stress fracture/nerve entrapment/enthesitis, gives stretching/footwear/load advice (weight discussed sensitively) with realistic expectations, and escalates (physio/injection; shockwave under NICE HTG200 arrangements) only if refractory.'
      },
      avoid: [
        {
          dont: '"Let\u2019s X-ray/scan the heel."',
          instead: '"This is a clinical diagnosis from your first-step pain and the tender spot \u2014 imaging isn\u2019t routinely needed."',
          why: 'Imaging is not routinely required for plantar fasciitis.'
        },
        {
          dont: '(No stress-fracture check) ignoring his new running.',
          instead: '"Any pinpoint pain on the heel bone after upping your running? That would make me think stress fracture."',
          why: 'A calcaneal stress fracture is an important mimic with new load.'
        },
        {
          dont: '(No timeline) implying a quick fix.',
          instead: '"It can take a few months to settle \u2014 stretching and footwear are the mainstays."',
          why: 'Unrealistic expectations lead to dissatisfaction; the course is slow but favourable.'
        }
      ]
    },
    'balanitis-phimosis': {
      ceg: ['Gender, reproductive & sexual health', 'Long-term conditions & cancer'],
      stem: {
        name: 'Brian Okafor',
        age: '54 years \u00b7 male',
        pmh: [
          'Recurrent red, sore, itchy glans + foreskin inflammation + discharge over months',
          '\u26a0 Increasing difficulty retracting the foreskin (developing phimosis)',
          'Check glucose/HbA1c; consider lichen sclerosus/BXO'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"The end of my penis is red, sore and itchy under the foreskin, and it\u2019s getting hard to pull back."',
        reason: 'Video consultation (chaperoned examination face to face) \u2014 a sore, inflamed glans/foreskin.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Recognise + examine',
          d: 'Recurrent sore glans + difficulty retracting = balanitis with developing phimosis; don\u2019t forcibly retract.'
        },
        {
          t: '2\u20104',
          h: 'Check glucose',
          d: 'Recurrent candidal balanitis linked with (and can present) diabetes \u2014 check glucose/HbA1c.'
        },
        {
          t: '4\u20107',
          h: 'Screen causes',
          d: 'Candidal/infective, irritant/hygiene, STI (GUM if at risk), psoriasis/lichen planus, lichen sclerosus/BXO.'
        },
        {
          t: '7\u20109',
          h: 'BXO + treat',
          d: 'White scarring/pathological phimosis = lichen sclerosus \u2192 refer; topical antifungal \u00b1 steroid + hygiene; treat diabetes.'
        },
        {
          t: '9\u2012-12',
          h: 'Refer + safety-net',
          d: 'Refer for phimosis/BXO/refractory/suspicious lesion (NICE NG12); never force retraction; stuck foreskin (paraphimosis) = same-day A&E.'
        }
      ],
      wordPics: {
        fail: 'Treats recurrent balanitis without checking glucose; misses lichen sclerosus/pathological phimosis; forcibly retracts; no referral.',
        pass: 'Recognises balanitis/phimosis, checks glucose, treats by cause, and refers for phimosis/BXO.',
        exc: 'Recognises balanitis with developing phimosis, checks glucose (diabetes link), screens causes including lichen sclerosus/BXO, treats by cause with hygiene advice, refers for pathological phimosis/BXO/refractory/suspicious lesions, and never forcibly retracts.'
      },
      avoid: [
        {
          dont: '"Here\u2019s an antifungal cream \u2014 that should clear it."',
          instead: '"I\u2019ll treat the likely cause \u2014 irritation or thrush \u2014 but because it keeps recurring I also want to check your blood sugar and look for scarring."',
          why: 'Recurrent candidal balanitis warrants a diabetes check and a cause screen, not just a cream.'
        },
        {
          dont: '(Forcible retraction) pulling the tight foreskin back to examine.',
          instead: '"I won\u2019t force the foreskin back \u2014 that can cause harm; we\u2019ll examine gently."',
          why: 'Forcible retraction of a phimotic foreskin can cause injury/paraphimosis.'
        },
        {
          dont: '(Missing BXO) ignoring white scarring/pathological phimosis.',
          instead: '"White scarring tightening the foreskin can be lichen sclerosus \u2014 that needs a specialist."',
          why: 'Lichen sclerosus/BXO needs referral and carries a small penile SCC risk.'
        }
      ]
    },
    'pilonidal-sinus': {
      ceg: ['Urgent & unscheduled care', 'New & undifferentiated presentations'],
      stem: {
        name: 'Jordan Reilly',
        age: '26 years \u00b7 male',
        pmh: [
          'Painful, red, fluctuant midline natal-cleft swelling + discharge; can\u2019t sit',
          'History of intermittent discharge/pits there; hirsute, desk/driving job, overweight',
          'Acute pilonidal abscess on a sinus'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Painful swelling at the top of my bum cleft that\u2019s started leaking \u2014 I can\u2019t sit down."',
        reason: 'Video consultation (same-day face-to-face observations and chaperoned examination) \u2014 a painful natal-cleft swelling/discharge.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Recognise',
          d: 'Painful red fluctuant midline natal-cleft swelling + pits/discharge in a young hirsute man = pilonidal abscess.'
        },
        {
          t: '2\u20104',
          h: 'Acute abscess',
          d: 'Distinguish acute abscess from chronic sinus; the abscess is the urgent issue.'
        },
        {
          t: '4\u20107',
          h: 'Drainage',
          d: 'Incision and drainage (usually same-day surgical assessment/SDEC; primary care only if competent) + analgesia; observations, diabetes/immunosuppression; antibiotics not a substitute.'
        },
        {
          t: '7\u20109',
          h: 'Definitive referral',
          d: 'Refer surgery for definitive sinus treatment once settled (recurrence common).'
        },
        {
          t: '9\u2012-12',
          h: 'Prevention + safety-net',
          d: 'Hygiene, hair removal (limited evidence), weight discussed sensitively; return for spreading cellulitis/fever; differential perianal abscess/hidradenitis.'
        }
      ],
      wordPics: {
        fail: 'Treats the abscess with antibiotics alone and no drainage; no surgical referral or prevention advice; misses perianal differential.',
        pass: 'Recognises pilonidal abscess, arranges drainage and surgical referral, and gives prevention advice.',
        exc: 'Recognises pilonidal abscess on a sinus, arranges incision and drainage (antibiotics only for cellulitis/systemic), refers to surgery for definitive treatment, advises hygiene/hair/weight prevention, and considers the perianal/hidradenitis differential.'
      },
      avoid: [
        {
          dont: '"I\u2019ll give you antibiotics for the abscess and review in a week."',
          instead: '"An abscess needs draining to relieve it \u2014 antibiotics alone won\u2019t fix it; I\u2019ll arrange drainage urgently."',
          why: 'Antibiotics are not a substitute for incision and drainage of an abscess.'
        },
        {
          dont: '(No definitive referral) draining and discharging without follow-up.',
          instead: '"Once this settles I\u2019ll refer you to the surgeons for the underlying sinus, as it tends to recur."',
          why: 'The underlying sinus needs definitive treatment to prevent recurrence.'
        },
        {
          dont: '(No prevention) omitting hygiene/hair advice.',
          instead: '"Keeping the area clean and dry and removing the hair there are widely advised and may help stop it coming back, although the evidence for hair removal is limited."',
          why: 'Prevention advice is widely given and may reduce recurrence; the evidence for hair removal is limited, and weight is best discussed without blaming language.'
        }
      ]
    }
  });

})();
