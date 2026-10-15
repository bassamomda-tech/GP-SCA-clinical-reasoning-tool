/* ============================================================
   Reasoning GP — Case Library batch 70:
   "GI & paediatrics" (NEW themes, verified absent)
   Anal fissure (painful bright bleeding + tear \u2014 treat constipation,
   GTN/diltiazem); cannabis hyperemesis syndrome (cyclical vomiting +
   hot-bath relief \u2014 the cannabis link); infantile colic (excessive
   crying, well baby \u2014 reassurance + red-flag exclusion); precocious
   puberty (early pubertal signs \u2014 assess and refer). No NG12 cancer
   pathway applies. Load AFTER sca-cases69.js.
   ============================================================ */
(function(){

  /* ===== 252. Anal fissure ===== */
  const c252 = {
    id: 'anal-fissure',
    title: '"It\u2019s like passing glass \u2014 sharp pain when I go, then it throbs for ages, and there\u2019s bright blood on the paper"',
    type: 'video',
    duration: 12,
    meta: {
      age: 35,
      sex: 'F',
      setting: 'Video consultation, with a gentle chaperoned examination arranged face to face \u2014 painful rectal bleeding on defecation.',
      system: 'Lower GI \u2014 anal fissure: recognition, constipation management & healing agents',
      checked: 'October 2026'
    },
    brief: 'Mrs Hana Reyes, 35 (recent constipation, postnatal), has SEVERE SHARP PAIN on defecation \u2014 "like passing glass" \u2014 with a lingering throb/spasm afterwards and BRIGHT RED blood on the paper/surface of the stool, from a posterior midline ANAL FISSURE. Recognise ANAL FISSURE (the classic painful defecation + bright bleeding + a tear, often posterior midline, precipitated by hard stool/constipation, or postpartum), distinguish it from haemorrhoids (usually painless bleeding), and \u2014 importantly \u2014 note that ATYPICAL fissures (lateral, multiple, non-healing) or associated features warrant thinking about IBD/Crohn\u2019s, infection, or malignancy; MANAGE \u2014 the cornerstone is treating CONSTIPATION/optimising stool (fluids, fibre increased gradually where appropriate \u2014 fibre without enough fluid can make things worse \u2014 and an OSMOTIC LAXATIVE titrated to soft stools if they stay hard, dose per BNF, continued after healing), with analgesia, a short course of topical lidocaine before defecation and warm sitz baths. Examine gently face to face with a chaperone offered and do not force a digital rectal examination; if the examination is incomplete, arrange review rather than assuming a simple fissure. For a persistent or chronic fissure (6 weeks or more), consider a topical sphincter relaxant: Rectogesic (GTN 0.4%) is licensed for PAIN in chronic anal fissure, applied intra-anally every 12 hours for up to 8 weeks, and its SPC reports no statistically significant healing benefit over placebo; headache is very common; it must not be used with PDE-5 inhibitors or other nitrates, must not be used in pregnancy and is not recommended when breastfeeding (MHRA SPC) \u2014 so ask about feeding in this postnatal woman; DILTIAZEM 2% is an unlicensed alternative, twice daily for about 6\u20138 weeks (Greater Manchester formulary). Review at 6\u20138 weeks and refer to colorectal surgery if not healed despite stool softening and topical treatment, if recurrent, or if atypical (the specialist chooses between botulinum toxin and sphincter surgery). Reassure most heal with stool softening. A fissure does not exclude other pathology: blood mixed with stool, a persistent change in bowel habit, weight loss, iron-deficiency anaemia or a mass need assessment under NICE NG12, using FIT where indicated (NICE HTG690); a rectal or anal mass or unexplained anal ulceration \u2192 consider a suspected cancer pathway referral. Ask about postnatal mood (NICE CG192).',
    script: {
      opening: '"This is horrible, doctor \u2014 when I open my bowels it\u2019s an agonising sharp pain, like passing glass or razor blades, and then it throbs for ages afterwards. There\u2019s bright red blood on the paper. I\u2019ve been constipated since the baby. I\u2019m almost scared to go now."',
      facts: [
        {
          topic: 'The pain',
          text: 'Started about 3 weeks after the birth (baby, Mateo, now 7 weeks). Sharp, tearing pain every time she opens her bowels, then a deep throbbing ache "for an hour or two afterwards". Has started putting off going.'
        },
        {
          topic: 'The bleeding',
          text: 'Bright red, a streak on the paper and on the outside of the stool. Not mixed in, no clots, not dark. Small amounts.'
        },
        {
          topic: 'Bowels',
          text: 'Before pregnancy, daily and normal. Now hard stools every 3\u20134 days. No diarrhoea, no mucus, no urgency. No lump hanging down. No itch.'
        },
        {
          topic: 'Red-flag questions (all negative)',
          text: 'No weight loss (apart from after the birth), no tummy pain, no fever, no mouth ulcers, no joint pains, no night sweats. No family history of bowel cancer or Crohn\u2019s or colitis.'
        },
        {
          topic: 'Birth and feeding',
          text: 'Normal vaginal delivery with a small tear that was stitched; healed. Breastfeeding. Not drinking enough \u2014 "maybe 4 glasses of water a day". Takes nothing for it. No regular medicines; stopped her pregnancy iron tablets after the birth. No allergies.'
        },
        {
          topic: 'Mood and support',
          text: 'Tired, "fed up with this", but enjoying the baby; no low mood if asked. Partner, Luis, is supportive. Second child; older daughter is 4.'
        },
        {
          topic: 'How to play it',
          text: 'Embarrassed but determined to get help. Ask "So it\u2019s not piles?" and "Why does feeding matter?" if breastfeeding is asked about. Relieved when it\u2019s explained clearly. Would rather not be examined today if it can be avoided, but would accept an examination at the surgery if needed.'
        }
      ],
      ice: {
        ideas: '"I thought it was piles from the pregnancy."',
        concerns: '"That something\u2019s really wrong down there \u2014 the blood frightened me." She is avoiding going to the toilet.',
        expectations: '"Something to stop the pain, and to know what it is."'
      },
      cues: [
        '"I\u2019m almost scared to go now" \u2014 the pain\u2013constipation cycle.',
        '"Since the baby" \u2014 postnatal constipation and low fluid intake.',
        '"Why does feeding matter?" \u2014 breastfeeding affects which treatments are suitable.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises ANAL FISSURE \u2014 severe sharp pain on defecation with lingering spasm, bright red bleeding, and a posterior-midline tear, precipitated by constipation/postpartum \u2014 examining gently with a chaperone offered and without forcing a digital rectal examination'
      },
      {
        dom: 'dg',
        text: 'Distinguishes it from haemorrhoids (usually painless bleeding) using the severe-pain pattern'
      },
      {
        dom: 'dg',
        text: 'Recognises that ATYPICAL fissures (lateral, multiple, non-healing) warrant thinking about IBD/Crohn\u2019s, infection or malignancy \u2014 screening GI/systemic symptoms and considering referral, and applies NICE NG12 with FIT (NICE HTG690) for blood mixed with stool, bowel change, weight loss or anaemia'
      },
      {
        dom: 'cm',
        text: 'Makes treating CONSTIPATION/optimising stool the cornerstone (fluids, gradual fibre, an osmotic laxative titrated to soft stools) to break the pain\u2013spasm cycle, with analgesia, a short course of topical lidocaine and sitz baths'
      },
      {
        dom: 'cm',
        text: 'Considers a topical sphincter relaxant only for persistent or chronic fissures \u2014 Rectogesic (licensed for pain; not with PDE-5 inhibitors; not in pregnancy; not recommended when breastfeeding, MHRA SPC) or unlicensed diltiazem 2% \u2014 and refers to colorectal for chronic/non-healing fissures or red flags/atypical features'
      },
      {
        dom: 'ro',
        text: 'Reassures that most fissures heal with stool softening, addresses the fear of defecation, and checks understanding'
      },
      {
        dom: 'ro',
        text: 'Explains the diagnosis and management sensitively, asks about breastfeeding before prescribing, counsels GTN headache if used, and asks about postnatal mood'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: review at 6\u20138 weeks, escalate if not healing (topical relaxant \u2192 colorectal), and reconsider/refer for atypical/non-healing fissures or red flags \u2014 constipation management as the cornerstone'
      }
    ],
    worked: [
      {
        lbl: 'Name it + reassure',
        txt: '"That \u2018passing glass\u2019 pain with bright blood is a classic anal fissure \u2014 a small tear, usually from constipation and straining, very common after having a baby. The bright blood on the paper fits, and the good news is most heal well."'
      },
      {
        lbl: 'The key \u2014 soften the stool',
        txt: '"The single most important treatment is keeping your stool soft so it stops re-tearing and you\u2019re not straining \u2014 plenty of fluids and fibre, and a stool-softening laxative that I\u2019ll check suits you if you\u2019re breastfeeding. That breaks the cycle of pain making you avoid going."'
      },
      {
        lbl: 'Symptom relief',
        txt: '"For the pain, a local anaesthetic gel before you go, for a short time, and warm sitz baths help relax the area and ease the spasm. Try not to dread going \u2014 softer stools make it much more bearable."'
      },
      {
        lbl: 'Healing agent',
        txt: '"If it doesn\u2019t settle, I\u2019ll see you in 6 to 8 weeks and we can consider an ointment that relaxes the muscle to ease the pain. The usual one, GTN, often causes headaches, isn\u2019t used in pregnancy and isn\u2019t recommended when breastfeeding, so we\u2019d choose between that and an alternative called diltiazem, which isn\u2019t licensed for this, together."'
      },
      {
        lbl: 'When to refer',
        txt: '"If it stays stubborn, I\u2019d refer to the bowel surgeons, who have other options. And if a fissure is in an unusual position, there are several, or it won\u2019t heal, I\u2019d look into other causes."'
      },
      {
        lbl: 'Safety-net',
        txt: '"Come back if it\u2019s not settling with stool softening, the bleeding changes (darker, mixed in the stool, or a lot), or you get other bowel symptoms or weight loss \u2014 then I\u2019d want to investigate further."'
      }
    ],
    learning: 'ANAL FISSURE presents with SEVERE SHARP PAIN on defecation (classically "passing glass/razor blades") with a lingering throb/sphincter spasm afterwards and BRIGHT RED blood on the paper or stool surface, usually from a tear in the POSTERIOR MIDLINE precipitated by hard stool/CONSTIPATION or occurring POSTPARTUM \u2014 with the painful defecation and fear of going being characteristic; examine gently, face to face with a chaperone offered (full PR is often too painful and should not be forced, but inspection may reveal the fissure/sentinel tag; arrange review if the examination is incomplete). Acute fissures are under 6 weeks; chronic 6 weeks or more. Distinguish it from HAEMORRHOIDS, which usually cause painless bright bleeding. Importantly, ATYPICAL fissures (lateral position, multiple, non-healing, or with other features) should prompt consideration of underlying disease \u2014 inflammatory bowel disease/Crohn\u2019s (perianal disease), infection (HIV, syphilis, TB), trauma and rarely malignancy \u2014 so screen GI/systemic symptoms and consider referral/further assessment for atypical or non-healing fissures. The cornerstone of management is treating CONSTIPATION/optimising stool: adequate fluids, fibre increased gradually where appropriate (fibre without enough fluid can make things worse) and an osmotic laxative titrated to soft stools if they stay hard (dose per BNF), continued after healing, to keep stool soft and avoid straining (breaking the pain\u2013constipation\u2013spasm cycle), with analgesia, a short course of topical lidocaine and sitz baths for relief \u2014 most acute fissures heal with stool softening. For persistent or chronic fissures, consider a topical sphincter relaxant: Rectogesic (GTN 0.4%) is licensed for pain in chronic anal fissure (every 12 hours for up to 8 weeks; the SPC reports no statistically significant healing benefit over placebo; headache very common; not with PDE-5 inhibitors or other nitrates; do not use in pregnancy; not recommended when breastfeeding, MHRA SPC), and diltiazem 2% is an unlicensed alternative twice daily for about 6\u20138 weeks (Greater Manchester formulary). Review at 6\u20138 weeks and refer to colorectal surgery for chronic/non-healing or recurrent fissures (the specialist chooses between botulinum toxin and sphincter surgery) or red flags/atypical features. Reassure that most heal, address the fear of defecation, ask about postnatal mood (NICE CG192), and safety-net. A fissure does not exclude other pathology: blood mixed with stool, a persistent change in bowel habit, weight loss, iron-deficiency anaemia or a mass need assessment under NICE NG12, with FIT where indicated (NICE HTG690); a rectal or anal mass or unexplained anal ulceration \u2192 consider a suspected cancer pathway referral.',
    knowledge: {
      guideline: 'Anal fissure \u00b7 constipation management cornerstone \u00b7 topical GTN/diltiazem \u00b7 colorectal referral \u00b7 atypical-fissure red flags \u00b7 [1] MHRA SPC: Rectogesic 4 mg/g rectal ointment \u00b7 [2] BNF: osmotic laxatives, lidocaine (topical) \u00b7 [3] NICE NG12 Suspected cancer: recognition and referral (2015, last updated 15 April 2026) \u00b7 [4] NICE HTG690 Quantitative faecal immunochemical testing for suspected colorectal cancer \u00b7 [5] NICE CG192 Antenatal and postnatal mental health \u00b7 [6] Greater Manchester formulary (Rectogesic by brand; diltiazem 2% unlicensed)',
      points: [
        {
          h: 'Recognise',
          t: 'Severe sharp pain on defecation + lingering spasm + bright red blood + posterior-midline tear; precipitated by constipation/postpartum. Acute under 6 weeks; chronic 6 weeks or more. Examine gently with a chaperone offered; do not force a DRE; review if the examination is incomplete.'
        },
        {
          h: 'Vs haemorrhoids',
          t: 'Haemorrhoids usually cause painless bright bleeding; the severe defecation pain points to a fissure.'
        },
        {
          h: 'Atypical = think other pathology',
          t: 'Lateral/multiple/painless/indurated/non-healing fissures \u2192 consider IBD/Crohn\u2019s, infection (HIV, syphilis, TB), trauma, rarely malignancy; screen symptoms and refer. Blood mixed with stool, bowel change, weight loss, iron-deficiency anaemia or a mass \u2192 NICE NG12 with FIT (NICE HTG690) [3,4].'
        },
        {
          h: 'Constipation cornerstone',
          t: 'Fluids, gradual fibre (not without enough fluid), and an osmotic laxative titrated to soft stools (dose per BNF [2]), continued after healing, to keep stool soft and avoid straining (breaks the pain-spasm cycle); analgesia, short-course topical lidocaine [2], sitz baths.'
        },
        {
          h: 'Healing agents',
          t: 'Persistent or chronic fissures: Rectogesic (GTN 0.4%) is licensed for pain, every 12 hours for up to 8 weeks, with no significant healing benefit over placebo in the SPC; headache very common; not with PDE-5 inhibitors or nitrates; not in pregnancy; not recommended when breastfeeding [1]. Diltiazem 2% is an unlicensed alternative, twice daily for about 6\u20138 weeks [6].'
        },
        {
          h: 'Refer',
          t: 'Colorectal surgery if not healed after about 6\u20138 weeks of stool softening and topical treatment, if recurrent, or if atypical; the specialist chooses between botulinum toxin and sphincter surgery, weighing continence and obstetric history.'
        },
        {
          h: 'Never do',
          t: 'Never neglect constipation management; never mislabel as haemorrhoids; never force a DRE; never prescribe GTN without asking about pregnancy, breastfeeding and PDE-5 inhibitors; never ignore atypical/non-healing fissures or changing bleeding.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Review at 6\u20138 weeks; escalate if not healing (topical relaxant \u2192 colorectal); investigate for changing bleeding, other bowel symptoms or weight loss (NICE NG12); ask about postnatal mood (NICE CG192 [5]).'
        }
      ]
    }
  };

  /* ===== 253. Cannabis hyperemesis syndrome ===== */
  const c253 = {
    id: 'cannabis-hyperemesis',
    title: '"I keep getting these awful vomiting attacks \u2014 the only thing that helps is standing in a really hot shower for hours"',
    type: 'video',
    duration: 12,
    meta: {
      age: 24,
      sex: 'M',
      setting: 'Video consultation, with observations and the abdominal examination arranged face to face \u2014 recurrent cyclical vomiting.',
      system: 'GI / Toxicology \u2014 cannabis hyperemesis syndrome: the diagnostic clues',
      checked: 'October 2026'
    },
    brief: 'Mr Reece Calland, 24, has recurrent episodes of severe NAUSEA and VOMITING with abdominal pain, lasting a day or two, recurring over months, with multiple normal prior work-ups/A&E visits; the striking clue is that the symptoms are RELIEVED by HOT SHOWERS/BATHS (compulsive hot bathing), and he is a regular/heavy CANNABIS user. Recognise CANNABIS HYPEREMESIS SYNDROME (CHS) \u2014 cyclical vomiting in a chronic cannabis user, classically relieved by hot bathing \u2014 which is frequently MISSED because the cannabis link is not asked about; take a non-judgemental SUBSTANCE history, exclude other causes of cyclical/recurrent vomiting (and red flags \u2014 GI obstruction, raised ICP, metabolic, pregnancy in women, etc.), and \u2014 critically \u2014 explain that the ONLY definitive treatment is CANNABIS CESSATION (symptoms resolve with abstinence and recur with use), with supportive care in acute episodes (fluids; standard antiemetics often help little, BNF; topical capsaicin to the abdomen is an unlicensed use, and any other drug treatment is chosen by the hospital team in acute settings), and harm-reduction/cessation support (motivational approach and referral to drug services, NICE CG51). Recovery with sustained abstinence may take weeks or longer, and cannabis WITHDRAWAL (irritability, poor sleep, low appetite, low mood) can occur in the first weeks. Safety-net DEHYDRATION and electrolyte disturbance including acute kidney injury (seek urgent care if unable to keep fluids down), warn that very hot water can SCALD, and cover DRIVING: it is illegal to drive with cannabis in the blood above the specified limit or while impaired, and persistent misuse of or dependence on cannabis must be notified to the DVLA and the person must stop driving (DVLA Assessing fitness to drive). Observations and the abdominal examination cannot be done on video, so arrange them face to face. The skill is recognising the pattern (cyclical vomiting + hot-bath relief + cannabis; Rome IV, international), asking about cannabis non-judgementally, and the cessation message.',
    script: {
      opening: '"I keep getting these horrendous attacks of being sick \u2014 vomiting for a day or two with bad stomach pain \u2014 every few weeks. I\u2019ve been to A&E loads, had scans and bloods, all normal. The weird thing is the ONLY thing that helps is standing in a really hot shower for ages \u2014 I almost live in there during an attack. What\u2019s wrong with me?"',
      facts: [
        {
          topic: 'The attacks',
          text: 'For about 9 months, every 3\u20134 weeks. Feels sick in the morning, then vomits many times a day for 1\u20132 days, with cramping pain across the tummy. Then fine in between, "pretty much". Last attack ended 4 days ago.'
        },
        {
          topic: 'Hot showers',
          text: 'Stands in a very hot shower for hours during attacks \u2014 "the only thing that helps". Once got a red scald on his back.'
        },
        {
          topic: 'Red-flag questions (all negative)',
          text: 'No blood in the vomit, not green. No weight loss to speak of. No fever, no jaundice, no headache in the mornings, no swallowing difficulty. Bowels normal. Passing urine normally between attacks.'
        },
        {
          topic: 'Cannabis (if asked non-judgementally)',
          text: 'Pauses, then: "I smoke weed, yeah. Most days." Started at 16; for the last 2 years about 3\u20134 joints a day, stronger stuff. "Nobody at the hospital asked." Thinks it helps the nausea. Drinks at weekends, about 10 units. No other drugs. Smokes 10 cigarettes a day.'
        },
        {
          topic: 'Health',
          text: 'No medicines; given anti-sickness tablets in A&E "which didn\u2019t really help". No allergies. No diabetes.'
        },
        {
          topic: 'Work and social',
          text: 'Works in a warehouse; has had a warning for missed days. Lives with his girlfriend. Drives a car to work.'
        },
        {
          topic: 'How to play it',
          text: 'Frustrated and a bit defensive about hospitals not finding anything. Reveal the cannabis only if asked in a non-judgemental way; if lectured, shut down ("I knew you\u2019d go on about that"). Push back: "But it helps me feel less sick." Ambivalent about stopping but willing to take details of support.'
        }
      ],
      ice: {
        ideas: '"They\u2019re missing something serious \u2014 an ulcer or something."',
        concerns: 'HIDDEN AGENDA \u2014 fear of losing his job, and worry about being judged for cannabis; also worried about getting into trouble with the police or his employer if it\u2019s written down.',
        expectations: '"A test that finds what\u2019s wrong, or a tablet that stops it."'
      },
      cues: [
        '"The only thing that helps is standing in a really hot shower" \u2014 the key clue.',
        '"Nobody at the hospital asked" (once cannabis is disclosed) \u2014 he will talk if asked without judgement.',
        '"But it helps me feel less sick" \u2014 the misconception to address with the cessation message.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises CANNABIS HYPEREMESIS SYNDROME \u2014 cyclical vomiting/abdominal pain in a chronic cannabis user, classically relieved by HOT bathing, with multiple normal prior investigations'
      },
      {
        dom: 'dg',
        text: 'Takes a NON-JUDGEMENTAL substance/cannabis history (frequency/duration/amount), recognising CHS is frequently missed because cannabis is not asked about'
      },
      {
        dom: 'dg',
        text: 'Excludes other causes of cyclical vomiting and red flags (GI obstruction/pancreatitis, raised ICP, metabolic/endocrine \u2014 DKA/Addisonian, pregnancy in women)'
      },
      {
        dom: 'cm',
        text: 'Delivers the CESSATION message \u2014 the only definitive treatment is cannabis cessation (resolves with abstinence, recurs with use) \u2014 clearly and supportively'
      },
      {
        dom: 'cm',
        text: 'Knows standard antiemetics are often poorly effective and that acute supportive care (IV fluids; topical capsaicin, an unlicensed use; other drugs chosen by the hospital team) is used acutely, and offers cessation/harm-reduction support (drug services, NICE CG51), warning about withdrawal'
      },
      {
        dom: 'ro',
        text: 'Asks about cannabis without judgement, addresses the patient\u2019s distress and the "nothing\u2019s been found" frustration, and frames cessation as the cure rather than moralising'
      },
      {
        dom: 'ro',
        text: 'Explains the diagnosis and the cannabis link clearly, checking understanding and engaging the patient in cessation'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: red flags warranting reassessment, cessation support/referral, acute-episode advice (fluids, urgent care if unable to keep fluids down \u2014 dehydration/AKI; scald risk), driving law and DVLA notification, and review \u2014 recognition of CHS + the cessation message, not another scan'
      }
    ],
    worked: [
      {
        lbl: 'Recognise the clue',
        txt: '"You\u2019ve given me a really important clue \u2014 the only thing that helps is a hot shower. That, with repeated vomiting attacks and normal scans, points strongly to a condition called cannabis hyperemesis syndrome. Can I ask \u2014 do you use cannabis, and how often?"'
      },
      {
        lbl: 'Non-judgemental history',
        txt: '"No judgement at all \u2014 I ask because it\u2019s directly relevant. Regular cannabis use can, paradoxically, cause exactly these cyclical vomiting attacks, and the hot-bath relief is almost a signature of it. It\u2019s often missed because no one asks."'
      },
      {
        lbl: 'Exclude the serious',
        txt: '"Your previous tests being normal is reassuring, and I\u2019ll just check there\u2019s nothing else \u2014 any severe headaches, weight loss, or other symptoms? \u2026 No. Good."'
      },
      {
        lbl: 'The honest cure',
        txt: '"Here\u2019s the key, and it\u2019s the hard part: the only thing that truly stops this is coming off cannabis. The symptoms settle with abstinence and come back if you use again. The usual anti-sickness tablets often don\u2019t work well for it."'
      },
      {
        lbl: 'Support',
        txt: '"I know that\u2019s a big ask, and I\u2019m not here to lecture you \u2014 I\u2019m here to help. I can refer you to a service that supports cutting down or stopping, and we\u2019ll manage the attacks in the meantime."'
      },
      {
        lbl: 'Safety-net',
        txt: '"During an attack, keep hydrated and seek help if you can\u2019t keep fluids down or get very unwell, and be careful the water isn\u2019t hot enough to scald you. It can take weeks or longer off cannabis to settle, and you may feel irritable or sleep badly at first. And if anything new develops \u2014 severe headache, weight loss, blood \u2014 come back. But stopping cannabis is genuinely the cure here."'
      }
    ],
    learning: 'CANNABIS HYPEREMESIS SYNDROME (CHS) is recurrent/CYCLICAL severe nausea, vomiting and abdominal pain in a chronic/heavy CANNABIS user, classically RELIEVED by HOT SHOWERS/BATHS (compulsive hot bathing), often after multiple normal prior investigations and A&E attendances \u2014 the hot-bathing relief being a highly characteristic clue. CHS is frequently MISSED because clinicians do not ask about cannabis, so take a non-judgemental substance history (frequency, duration, amount), normalising the question \u2014 without it the diagnosis is repeatedly missed despite extensive work-ups. Exclude other causes of cyclical/recurrent vomiting and red flags: GI causes (obstruction, peptic disease, gallstones, pancreatitis), raised intracranial pressure, metabolic/endocrine causes (DKA, Addisonian crisis, hypercalcaemia), cyclical vomiting syndrome, and pregnancy in women \u2014 reassuringly normal previous investigations plus the hot-bath/cannabis pattern support CHS, but red flags must be screened. The critical message is that the ONLY definitive treatment is CANNABIS CESSATION: symptoms resolve with abstinence and recur with continued use, so explain this clearly and supportively as the central, often-resisted point; standard antiemetics are frequently poorly effective (BNF), and acute supportive care includes IV fluids and, in acute/hospital settings, topical capsaicin to the abdomen (an unlicensed use) and other drug treatment chosen by the hospital team. Recovery with sustained abstinence may take weeks or longer. Provide harm-reduction and cessation support (motivational approach and referral to drug services, NICE CG51) for a difficult behaviour change, framing cessation as the cure rather than moralising, and warn that cannabis withdrawal (irritability, poor sleep, low appetite, low mood) can occur in the first weeks. Safety-net dehydration and electrolyte disturbance including acute kidney injury (urgent care if unable to keep fluids down) and scalds from very hot water, and cover driving: it is illegal to drive with cannabis in the blood above the specified limit or while impaired, and persistent misuse of or dependence on cannabis must be notified to the DVLA, with driving stopped. Observations and the abdomen are examined face to face, as they cannot be assessed on video. The skill is recognising the pattern (cyclical vomiting + hot-bath relief + cannabis), asking about cannabis non-judgementally, excluding red flags, and delivering the cessation message with support.',
    knowledge: {
      guideline: 'Cannabis hyperemesis syndrome \u00b7 cyclical vomiting + hot-bathing relief + cannabis \u00b7 cessation as definitive treatment \u00b7 non-judgemental substance history \u00b7 [1] Rome IV criteria for functional gastrointestinal disorders: cannabinoid hyperemesis syndrome (2016) (international) \u00b7 [2] NICE CG51 Drug misuse in over 16s: psychosocial interventions (2007) \u00b7 [3] DVLA Assessing fitness to drive: drug misuse and dependence \u00b7 [4] BNF: antiemetics',
      points: [
        {
          h: 'Recognise CHS',
          t: 'Cyclical severe vomiting/abdominal pain in a chronic cannabis user, relieved by hot showers/baths, with multiple normal prior investigations. Hot-bathing relief is the signature clue (Rome IV [1], international).'
        },
        {
          h: 'Ask about cannabis',
          t: 'CHS is frequently missed because cannabis is not asked about. Take a non-judgemental substance history (frequency/duration/amount).'
        },
        {
          h: 'Exclude red flags',
          t: 'GI obstruction/pancreatitis/peptic/gallstones, raised ICP, metabolic/endocrine (DKA, Addisonian, hypercalcaemia), cyclical vomiting syndrome, pregnancy in women. Bilious or bloody vomiting, severe constant pain, weight loss, dysphagia, neurological symptoms or jaundice \u2192 reassess. Observations and abdomen examined face to face.'
        },
        {
          h: 'Cessation is the cure',
          t: 'The only definitive treatment is cannabis cessation \u2014 resolves with sustained abstinence (which may take weeks or longer), recurs with use. Deliver clearly and supportively.'
        },
        {
          h: 'Acute care',
          t: 'Standard antiemetics often poorly effective [4]; acute supportive care (IV fluids; topical capsaicin, an unlicensed use; other drugs chosen by the hospital team) used acutely/in hospital. Dehydration/AKI if unable to keep fluids down; hot water can scald.'
        },
        {
          h: 'Support cessation',
          t: 'Harm-reduction/cessation support (motivational approach, drug services/referral, NICE CG51 [2]); warn about withdrawal in the first weeks; frame cessation as the cure, not moralising. Driving: illegal above the specified blood limit or while impaired; persistent misuse or dependence \u2192 notify DVLA and stop driving [3].'
        },
        {
          h: 'Never do',
          t: 'Never repeatedly re-investigate without asking about cannabis; never miss red flags/pregnancy; never moralise rather than support cessation.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Red flags warranting reassessment; cessation support/referral; acute-episode advice (hydration, seek urgent help if not keeping fluids down \u2014 AKI risk; avoid scalds); driving and DVLA; review in a few weeks whatever he decides.'
        }
      ]
    }
  };

  /* ===== 254. Infantile colic ===== */
  const c254 = {
    id: 'infantile-colic',
    title: '"My baby screams inconsolably for hours every evening, pulling his legs up \u2014 I\u2019m exhausted and worried something\u2019s wrong"',
    type: 'video',
    duration: 12,
    meta: {
      age: 0,
      sex: 'M',
      setting: 'Video consultation, parent present, with the full undressed examination (temperature and weight) arranged face to face the same day \u2014 excessive infant crying.',
      system: 'Paediatrics \u2014 infantile colic: reassurance, red-flag exclusion & supporting the parent',
      checked: 'October 2026'
    },
    brief: 'A mother, Hannah Lowther, brings 6-week-old Noah Lowther with episodes of inconsolable CRYING, often in the EVENINGS, drawing his legs up, several hours a day on most days for the past few weeks; he is otherwise THRIVING (feeding, gaining weight, normal nappies, no fever), and she is exhausted and anxious. Recognise INFANTILE COLIC \u2014 excessive, paroxysmal crying in an otherwise WELL, THRIVING infant (Wessel\u2019s "rule of 3s" \u2014 >3 hours/day, >3 days/week, for >3 weeks \u2014 is a RESEARCH definition, not a diagnostic threshold; the Rome IV criteria, international, do not require a set number of hours), typically resolving by ~3\u20134 months \u2014 a clinical diagnosis of EXCLUSION; the key task is to EXCLUDE red flags/other causes (poor feeding/weight, fever, vomiting/bile, blood in stool, lethargy, a tense fontanelle, hernia/testicular torsion, hair-tourniquet, cow\u2019s-milk protein allergy, GORD, infection) by history and a full undressed examination face to face (temperature, weight on the chart; NICE NG143: a temperature of 38 \u00b0C or more under 3 months is a red feature needing same-day paediatric assessment; NICE NG254 if sepsis is possible), then REASSURE (benign, self-limiting), give practical SOOTHING/feeding advice, and \u2014 critically \u2014 SUPPORT the exhausted, anxious PARENT (acknowledge the toll, ask about parental low mood and anxiety per NICE CG192, safety-net, and give the ICON "Babies cry, you can cope" message: it is okay to put the baby down safely and walk away for a few minutes, and NEVER shake the baby; any unexplained bruise in a non-mobile baby needs safeguarding action, Working Together to Safeguard Children 2023). Avoid unnecessary medications/formula changes unless a specific cause is suspected: NICE NG1 advises against acid-suppressing drugs for regurgitation as an isolated symptom in an otherwise healthy infant, and cow\u2019s-milk allergy is considered only with other features (eczema, vomiting, diarrhoea, blood in stool, faltering growth), assessed per NICE CG116. The skill is red-flag exclusion + reassurance + parental support.',
    script: {
      opening: '"I\u2019m at my wits\u2019 end, doctor. Noah screams inconsolably for hours, mostly in the evenings, going red and pulling his legs up, and nothing settles him. He\u2019s six weeks old. He feeds and is gaining weight, but I\u2019m exhausted and terrified there\u2019s something seriously wrong with him."',
      facts: [
        {
          topic: 'The crying',
          text: 'Started at about 2 weeks old. Most days, 3\u20134 hours each evening, from about 6pm. Goes red, clenches his fists, pulls his legs up. Settles eventually and sleeps. Content between episodes.'
        },
        {
          topic: 'Feeding and growth',
          text: 'Bottle-fed formula since 2 weeks (breastfeeding was difficult). Feeds well. Health visitor weighed him 3 days ago: "on his line, gaining nicely". Small possets after feeds, not forceful, never green.'
        },
        {
          topic: 'Red-flag questions (all negative)',
          text: 'No fever. Not floppy or drowsy. No blood in nappies; normal yellow stools. Plenty of wet nappies. No rash, no breathing problems, no fits. Soft spot not bulging. No swelling in the groin. Cry is loud, not high-pitched or weak. Mum can undress him on camera if asked \u2014 he looks pink and well.'
        },
        {
          topic: 'Background',
          text: 'Born at 39 weeks, normal delivery, 3.4 kg. Newborn checks normal. No medicines. Mum has tried gripe water.'
        },
        {
          topic: 'Mum\u2019s wellbeing (if asked)',
          text: 'Exhausted; partner, Dan, works nights. "I feel like I\u2019m failing him." Worried all the time, down sometimes when he won\u2019t stop. No thoughts of harming herself or Noah: "No, never. I just cry with him." Not much help \u2014 her mum lives 2 hours away. Had anxiety as a teenager.'
        },
        {
          topic: 'How to play it',
          text: 'Tired, tearful, anxious. Keep looking for a medical cause. Ask "Should I change his milk or get some drops?" Feel relieved if the doctor asks about you and listens. Be surprised that it\u2019s OK to put him down safely and walk away for a few minutes.'
        }
      ],
      ice: {
        ideas: '"Something must be hurting him \u2014 maybe his tummy, or an allergy to the milk."',
        concerns: 'HIDDEN AGENDA \u2014 her own exhaustion and fear that she is failing; feels isolated with Dan on nights.',
        expectations: '"Something to stop the crying \u2014 a different milk or drops."'
      },
      cues: [
        '"I\u2019m exhausted" \u2014 explore her wellbeing, mood and support.',
        '"I feel like I\u2019m failing him" \u2014 needs validation and a check on coping.',
        '"Should I change his milk?" \u2014 expectation to discuss.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises INFANTILE COLIC \u2014 excessive paroxysmal (often evening) crying in an otherwise well, thriving infant (knowing the rule of 3s is a research definition, not a threshold), resolving by ~3\u20134 months \u2014 as a diagnosis of exclusion'
      },
      {
        dom: 'dg',
        text: 'EXCLUDES red flags/other causes by history and a full undressed EXAMINATION face to face \u2014 poor feeding/faltering weight, fever (38 \u00b0C or more under 3 months \u2192 same-day paediatric assessment, NICE NG143), bile vomiting, blood in stool, lethargy, tense fontanelle, hernia/torsion, hair-tourniquet, CMPA, GORD'
      },
      {
        dom: 'ro',
        text: 'REASSURES that colic is benign and self-limiting and not the parent\u2019s fault, once red flags are excluded'
      },
      {
        dom: 'cm',
        text: 'Gives practical SOOTHING/feeding advice and avoids routine medications/formula changes unless a specific cause is suspected (limited evidence for simethicone/probiotics etc.; no acid suppression for crying alone, NICE NG1; CMPA only with other features, NICE CG116)'
      },
      {
        dom: 'ro',
        text: 'SUPPORTS the exhausted PARENT \u2014 validates the toll, asks about parental coping, low mood and anxiety (NICE CG192), mobilises support, and gives the ICON safety advice (it\u2019s okay to put the baby down safely and take a break; NEVER shake the baby)'
      },
      {
        dom: 'ro',
        text: 'Acknowledges the enormous strain and the fear that something is wrong, validates her distress, and reassures without dismissing'
      },
      {
        dom: 'ro',
        text: 'Explains the diagnosis and plan clearly, checks understanding, and engages support around her'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: red flags warranting urgent review (fever, poor feeding/weight, bile vomiting, blood in stool, lethargy), parental-wellbeing follow-up/health visitor, never-shake advice, and review \u2014 red-flag exclusion + reassurance + parental support'
      }
    ],
    worked: [
      {
        lbl: 'Examine + take it seriously',
        txt: '"You\u2019re absolutely right to bring him \u2014 I need to examine Noah fully undressed, so I\u2019d like to see you both face to face today to make sure there\u2019s nothing being missed. \u2026 (At the face-to-face check:) He\u2019s feeding, gaining weight, his tummy\u2019s soft, no hernia, fontanelle\u2019s fine, and I\u2019ve checked his fingers, toes and nappy area. He\u2019s a well, thriving baby."'
      },
      {
        lbl: 'Reassure + name it',
        txt: '"What you\u2019re describing \u2014 inconsolable evening crying, legs drawn up, in a healthy baby this age \u2014 is colic. It\u2019s extremely common, it\u2019s not dangerous, and crucially it\u2019s nothing you\u2019re doing wrong. It typically settles by three to four months."'
      },
      {
        lbl: 'Practical advice',
        txt: '"Some things can help in the moment \u2014 holding and gentle rocking, white noise, movement, winding, a calm dim room. I\u2019d be cautious about over-the-counter remedies or changing formula, as the evidence is limited unless there\u2019s a specific cause like a milk allergy, which I don\u2019t think fits here."'
      },
      {
        lbl: 'Support the parent',
        txt: '"Now \u2014 how are YOU doing? This is genuinely exhausting and can wear anyone down. Are you getting any rest or help? How\u2019s your mood?" (Listens, screens for PND.)'
      },
      {
        lbl: 'Safety advice',
        txt: '"One really important thing: if he\u2019s crying and you feel overwhelmed, it\u2019s completely okay to put him down somewhere safe like his cot, step away for a few minutes to breathe, and come back. And never, ever shake him \u2014 even gentle shaking can harm a baby."'
      },
      {
        lbl: 'Safety-net + follow-up',
        txt: '"Come back urgently if he develops a fever, feeds poorly, vomits green, has blood in his nappy, or becomes floppy or unusually sleepy. And let\u2019s get the health visitor involved to support you \u2014 I\u2019d like to check on you both again."'
      }
    ],
    learning: 'INFANTILE COLIC is excessive, paroxysmal, often EVENING crying in an otherwise WELL, THRIVING infant \u2014 often described by Wessel\u2019s "rule of 3s" (>3 hours/day, >3 days/week, for >3 weeks), a research definition rather than a diagnostic threshold (the Rome IV criteria, international, require no set number of hours) \u2014 with drawing up of the legs, typically beginning in the early weeks and resolving by ~3\u20134 months; it is a clinical diagnosis of EXCLUSION in an otherwise healthy baby. The key task is to EXCLUDE red flags/other causes by history and a full undressed examination face to face (temperature, weight on the chart, skin for bruising): poor feeding or faltering weight, fever/sepsis (NICE NG143: 38 \u00b0C or more under 3 months is a red feature needing same-day paediatric assessment; NICE NG254 if sepsis is possible), vomiting (especially bile-stained \u2014 obstruction), blood in stool, lethargy/floppiness, a bulging/tense fontanelle, an incarcerated hernia or testicular torsion, a hair-tourniquet (finger/toe/penis), corneal foreign body, cow\u2019s-milk protein allergy (only with other features, NICE CG116) and GORD (no acid suppression for crying or regurgitation alone in an otherwise healthy infant, NICE NG1) \u2014 a thriving, well, examined baby with no red flags supports colic. Once red flags are excluded, REASSURE that colic is benign and self-limiting, usually settling by 3\u20134 months and not the parent\u2019s fault, which directly addresses the fear that "something is seriously wrong". Give practical soothing/feeding advice (holding/rocking, white noise, movement, winding, a calm environment), while noting that evidence for specific treatments (simethicone, lactase drops, probiotics, formula/dietary changes) is limited \u2014 avoid routine medications or formula changes unless a specific cause (e.g. CMPA) is suspected and then trial appropriately. Crucially, SUPPORT the exhausted, anxious PARENT: acknowledge the enormous toll, validate distress, ask about parental coping, low mood and anxiety (NICE CG192), mobilise support (partner/family/health visitor), and give the ICON ("Babies cry, you can cope") safety advice that it is okay to place the baby safely down and take a break if overwhelmed and to NEVER shake the baby; any unexplained bruise in a non-mobile baby needs safeguarding action (Working Together to Safeguard Children 2023). The skill is red-flag exclusion + reassurance + parental support, with safety-netting and follow-up.',
    knowledge: {
      guideline: 'Infantile colic \u00b7 diagnosis of exclusion (rule of 3s is a research definition) \u00b7 red-flag exclusion \u00b7 reassurance + parental support \u00b7 never-shake safety advice \u00b7 [1] NICE NG143 Fever in under 5s: assessment and initial management (2019) \u00b7 [2] NICE NG254 Suspected sepsis in under 16s (2025) \u00b7 [3] NICE NG1 Gastro-oesophageal reflux disease in children and young people (2015) \u00b7 [4] NICE CG116 Food allergy in under 19s: assessment and diagnosis (2011) \u00b7 [5] NICE CG192 Antenatal and postnatal mental health \u00b7 [6] ICON: Babies cry, you can cope (UK programme) \u00b7 [7] DfE Working Together to Safeguard Children (2023)',
      points: [
        {
          h: 'Recognise colic',
          t: 'Excessive paroxysmal (often evening) crying, legs drawn up, in a well, thriving infant (Wessel\u2019s rule of 3s \u2014 >3h/day, >3 days/week, >3 weeks \u2014 is a research definition; Rome IV, international, sets no hours), resolving by ~3\u20134 months. Diagnosis of exclusion.'
        },
        {
          h: 'Exclude red flags',
          t: 'Poor feeding/faltering weight, fever (38 \u00b0C or more under 3 months \u2192 same-day paediatric assessment, NICE NG143 [1]; NG254 [2] if sepsis possible), bile vomiting (obstruction), blood in stool, lethargy/floppiness, tense fontanelle, hernia/torsion, hair-tourniquet, corneal FB, CMPA, GORD, bruising \u2014 history + full undressed examination face to face.'
        },
        {
          h: 'Reassure',
          t: 'Benign, self-limiting, settles by 3\u20134 months, not the parent\u2019s fault. Central to addressing "something is seriously wrong".'
        },
        {
          h: 'Practical advice',
          t: 'Soothing (holding/rocking, white noise, movement, winding, calm environment), responsive feeding. Limited evidence for simethicone/probiotics/formula changes \u2014 avoid routine use unless CMPA suspected (other features; NICE CG116 [4]). No acid suppression for crying alone (NICE NG1 [3]).'
        },
        {
          h: 'Support the parent',
          t: 'Validate the toll; ask about parental coping, low mood and anxiety (NICE CG192 [5]); mobilise support (partner/family/health visitor).'
        },
        {
          h: 'Safety advice',
          t: 'ICON [6]: it\u2019s okay to put the baby down safely and take a break if overwhelmed; NEVER shake the baby. Unexplained bruising in a non-mobile baby \u2192 safeguarding [7]. Infant safety and parental wellbeing are key.'
        },
        {
          h: 'Never do',
          t: 'Never diagnose colic without excluding red flags/examining; never dismiss parental distress; never routinely change formula/medicate without indication; never omit never-shake advice.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Urgent review for fever (38 \u00b0C or more under 3 months), poor feeding/weight, bile vomiting, blood in stool, lethargy; parental-wellbeing follow-up/health visitor; review both baby and parent.'
        }
      ]
    }
  };

  /* ===== 255. Precocious puberty ===== */
  const c255 = {
    id: 'precocious-puberty',
    title: '"My 6-year-old has started developing breasts and some pubic hair \u2014 isn\u2019t she far too young?"',
    type: 'video',
    duration: 12,
    meta: {
      age: 6,
      sex: 'F',
      setting: 'Video consultation, parent present, with growth plotting and the examination (staging with the parent present, BP, fundi, visual fields, neurology) arranged face to face \u2014 early pubertal development.',
      system: 'Paediatric endocrinology \u2014 precocious puberty: recognition, assessment & referral',
      checked: 'October 2026'
    },
    brief: 'A mother brings 6-year-old Maya Carrick with early BREAST development and some pubic hair over recent months, plus a growth spurt. Recognise PRECOCIOUS PUBERTY \u2014 the onset of secondary sexual characteristics before age ~8 in GIRLS (and ~9 in BOYS) \u2014 and that it needs ASSESSMENT and paediatric ENDOCRINOLOGY referral; understand the broad framework: CENTRAL (gonadotrophin-dependent, "true") precocious puberty (early activation of the HPG axis \u2014 commoner in girls and often idiopathic, but must exclude CNS pathology e.g. tumour, especially in boys/atypical) versus PERIPHERAL (gonadotrophin-independent \u2014 ovarian/adrenal/testicular sources, congenital adrenal hyperplasia, McCune-Albright, exogenous hormones), and benign normal variants (premature thelarche \u2014 isolated breast development; premature adrenarche \u2014 isolated pubic/axillary hair/odour) that may not be true precocious puberty; take a history (including exposure to testosterone or other hormone gels or creams in the household \u2014 MHRA Drug Safety Update January 2023: harm to children from accidental transfer of topical testosterone) and examine face to face (plot height and weight on the RCPCH UK-WHO chart with previous measurements and parental heights, Tanner staging with a parent present \u2014 documented, never photographed (GMC) \u2014 blood pressure, skin for caf\u00e9-au-lait patches, abdomen, fundi, visual fields and neurology), recognise the IMPORTANCE of evaluation (psychosocial impact, the impact on final height from early bone maturation, and not missing a serious underlying cause such as a CNS or hormone-secreting tumour), and REFER every child with suspected precocious puberty to paediatric endocrinology for assessment (bone age, hormone testing, pelvic ultrasound, and brain imaging only where the specialist judges it indicated \u2014 the Endocrine Society 2026 guideline, international, suggests MRI need not be routine in girls aged 6\u20138 without neurological findings) and treatment where indicated (e.g. GnRH analogues for central PP, BNFC), without delaying referral for GP blood tests. NICE NG12: consider a very urgent referral (within 48 hours) for a child with newly abnormal cerebellar or other central neurological function; signs of raised intracranial pressure need same-day assessment. Vaginal bleeding without breast development, or signs of harm, need safeguarding consideration (Working Together to Safeguard Children 2023). The skill is recognising premature pubertal signs, distinguishing concerning from benign-variant features, supporting the parent, and referring appropriately.',
    script: {
      opening: '"Doctor, I\u2019m worried about Maya \u2014 she\u2019s only six but over the last few months she\u2019s started developing little breasts and I\u2019ve noticed some pubic hair, and she seems to have shot up in height. Isn\u2019t she far too young for all this? Is something wrong?"',
      facts: [
        { topic: 'Who is calling', text: 'Mother, Claire, on video; Maya (6) is in the room playing, shy.' },
        {
          topic: 'The changes',
          text: 'Breast buds noticed about 5 months ago, both sides, now more obvious. Fine pubic hair over the last 2 months. Grown out of two sizes of school uniform this year \u2014 "she\u2019s now the tallest in her class; she used to be in the middle".'
        },
        {
          topic: 'Other questions (if asked)',
          text: 'No vaginal bleeding or discharge. Not sure about body odour \u2014 "maybe a bit". No acne. No headaches, no vomiting, no problems with eyesight, not clumsy. No patches of coffee-coloured skin. No change in behaviour.'
        },
        {
          topic: 'Exposures',
          text: 'No creams, gels or medicines in the house containing hormones that Maya could have touched \u2014 Claire doesn\u2019t use HRT or a testosterone gel; partner uses nothing. No medicines for Maya.'
        },
        {
          topic: 'Background',
          text: 'Healthy, born at term, no hospital admissions, no head injury. Up to date with jabs. Claire started her periods at 12; Maya\u2019s dad "doesn\u2019t know".'
        },
        {
          topic: 'Social',
          text: 'Lives with Mum and Mum\u2019s partner, and a younger brother (3). Year 2 at school; a girl at school commented on her chest at swimming.'
        },
        {
          topic: 'How to play it',
          text: 'Anxious, a bit guarded because Maya can hear. Ask: "Why does it matter if it\u2019s early?" and "So what happens now?". If the doctor speaks to Maya kindly, she shakes her head shyly to questions. Ask for an explanation you can repeat to Maya\u2019s dad.'
        }
      ],
      ice: {
        ideas: '"It\u2019s too early. Something must be causing it."',
        concerns: 'HIDDEN AGENDA \u2014 "I\u2019ve been reading online. I\u2019m scared it\u2019s a tumour." Also worried Maya will be teased and will start periods at primary school.',
        expectations: '"Tests to find out why, and to stop it if it needs stopping."'
      },
      cues: [
        '"She seems to have shot up in height" \u2014 growth spurt suggesting true puberty.',
        '"I\u2019m scared it\u2019s a tumour" (if worries explored) \u2014 needs an honest, calm answer.',
        '"A girl commented at swimming" \u2014 psychosocial impact on Maya.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises PRECOCIOUS PUBERTY \u2014 secondary sexual characteristics before ~8 in girls (~9 in boys) \u2014 and that it warrants assessment and paediatric endocrinology referral'
      },
      {
        dom: 'dg',
        text: 'Takes a history and arranges a face-to-face examination (growth plotted on the RCPCH UK-WHO chart, Tanner staging with a parent present and not photographed, BP, fundi, fields, neurology, CNS symptoms, possible exogenous hormone exposure including household testosterone gel (MHRA January 2023), family history)'
      },
      {
        dom: 'dg',
        text: 'Understands the CENTRAL (gonadotrophin-dependent, often idiopathic in girls but exclude CNS pathology) vs PERIPHERAL (ovarian/adrenal/CAH/McCune-Albright/exogenous) framework'
      },
      {
        dom: 'dg',
        text: 'Recognises benign NORMAL VARIANTS (premature thelarche, premature adrenarche) and that they still warrant assessment to distinguish from progressive precocious puberty'
      },
      {
        dom: 'cm',
        text: 'Explains WHY assessment matters (final-height impact from early bone maturation, psychosocial impact, not missing a CNS/hormone-secreting tumour or CAH) and REFERS to paediatric endocrinology (bone age, hormones, imaging as the specialist decides; GnRH analogue treatment where indicated), applying NICE NG12 48-hour referral for new central neurological signs'
      },
      {
        dom: 'ro',
        text: 'Addresses the parent\u2019s worry and supports the child, explaining the diagnosis and plan sensitively and age-appropriately'
      },
      {
        dom: 'ro',
        text: 'Checks understanding and reassures appropriately while conveying the need for proper assessment'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: paediatric endocrinology referral and what assessment involves, red flags (CNS symptoms; vaginal bleeding without breast development \u2192 safeguarding consideration), support for parent/child, and review \u2014 recognition + appropriate referral, not watchful reassurance alone'
      }
    ],
    worked: [
      {
        lbl: 'Validate + recognise',
        txt: '"You\u2019re right to bring her \u2014 developing breasts and pubic hair at six is earlier than expected, and it\u2019s called precocious puberty. It needs proper assessment, so I\u2019m glad you came."'
      },
      {
        lbl: 'Assess',
        txt: '"Let me take some history, and then I\u2019d like to see Maya face to face to measure and plot her growth, check the stage of development with you present, and check her eyes, blood pressure and nerves. Any headaches or vision changes? Has she had access to any hormone creams or medicines, or does anyone at home use a testosterone gel? And how\u2019s her height compared to before?"'
      },
      {
        lbl: 'Explain the framework',
        txt: '"There are a few possibilities \u2014 sometimes the body\u2019s puberty switch turns on early (often no serious cause in girls, but we check), and sometimes a hormone source elsewhere is responsible. There are also milder patterns, like isolated breast development, which can be harmless \u2014 but we assess to be sure."'
      },
      {
        lbl: 'Why it matters',
        txt: '"It\u2019s worth taking seriously for a few reasons: early puberty can affect her final adult height because the bones mature faster, it can be a lot for a young child emotionally, and rarely there\u2019s an underlying cause we\u2019d want to find and treat."'
      },
      {
        lbl: 'Refer',
        txt: '"I\u2019m referring her to the children\u2019s hormone specialists. They\u2019ll do a bone-age X-ray, some blood tests, and scans if they think they\u2019re needed \u2014 I don\u2019t need to do blood tests first, and there are treatments \u2014 like a medicine that pauses puberty \u2014 if that\u2019s the right thing."'
      },
      {
        lbl: 'Support + safety-net',
        txt: '"I know this is worrying \u2014 most causes are manageable. Come back sooner if she develops headaches, vision problems or anything that concerns you. We\u2019ll support you both through the assessment."'
      }
    ],
    learning: 'PRECOCIOUS PUBERTY is the onset of secondary sexual characteristics before about age 8 in GIRLS and 9 in BOYS, and warrants assessment and paediatric ENDOCRINOLOGY referral. Take a history (timing/progression, growth, family history, CNS symptoms such as headache/visual change, possible exogenous hormone exposure) including household testosterone gel (MHRA Drug Safety Update January 2023), and examine face to face (height and weight plotted on the RCPCH UK-WHO chart for growth velocity, Tanner staging with a parent present and never photographed, BP, fundi, visual fields, neurology, signs of a cause). Understand the framework: CENTRAL (gonadotrophin-dependent, "true") precocious puberty results from early activation of the hypothalamic-pituitary-gonadal axis \u2014 commoner in girls and often idiopathic, but CNS pathology (tumour, hydrocephalus) must be excluded, especially in boys or with atypical/neurological features \u2014 versus PERIPHERAL (gonadotrophin-independent) precocious puberty from ovarian/adrenal/testicular sources, congenital adrenal hyperplasia, McCune-Albright syndrome, or exogenous hormones. Recognise benign NORMAL VARIANTS \u2014 premature thelarche (isolated breast development) and premature adrenarche (isolated pubic/axillary hair, body odour) \u2014 which are usually benign but still warrant assessment to distinguish from progressive precocious puberty. Evaluation matters because of the psychosocial impact on a young child and family, the effect on final adult height (early bone maturation/premature epiphyseal fusion can reduce final height), and the need not to miss a serious underlying cause (CNS or hormone-secreting tumour, CAH). Refer to paediatric endocrinology for assessment \u2014 bone age, hormone testing (LH/FSH, oestradiol/testosterone, GnRH stimulation), and imaging (pelvic/adrenal imaging as indicated, and brain MRI where the specialist judges it indicated \u2014 the Endocrine Society 2026 guideline, international, suggests it need not be routine in girls aged 6\u20138 without neurological findings) \u2014 and treatment where indicated (e.g. GnRH analogues (BNFC) to halt central precocious puberty and preserve height/allow age-appropriate development); primary care\u2019s role is recognition, initial assessment and referral, without delaying for GP blood tests. Support the worried parent and the child throughout. NICE NG12: consider a very urgent referral (within 48 hours) for a child with newly abnormal cerebellar or other central neurological function, with same-day assessment for signs of raised intracranial pressure. Vaginal bleeding without breast development, or signs of harm, need safeguarding consideration (Working Together to Safeguard Children 2023).',
    knowledge: {
      guideline: 'Precocious puberty \u00b7 thresholds (girls <8, boys <9) \u00b7 central vs peripheral \u00b7 benign variants \u00b7 paediatric endocrinology referral (bone age/hormones/imaging as indicated) \u00b7 [1] NICE NG12 Suspected cancer: recognition and referral (2015, last updated 15 April 2026) \u00b7 [2] Endocrine Society clinical practice guideline on central precocious puberty (2026) (international) \u00b7 [3] MHRA Drug Safety Update (January 2023): topical testosterone and harm to children from accidental exposure \u00b7 [4] BNFC: gonadorelin analogues \u00b7 [5] RCPCH UK-WHO growth charts \u00b7 [6] DfE Working Together to Safeguard Children (2023)',
      points: [
        {
          h: 'Recognise',
          t: 'Secondary sexual characteristics before ~8 (girls)/~9 (boys). Assess (history, growth plotted on the RCPCH UK-WHO chart [5], Tanner staging with a parent present and not photographed, CNS symptoms, exogenous hormones including household testosterone gel [3]) face to face and refer paediatric endocrinology.'
        },
        {
          h: 'Central vs peripheral',
          t: 'Central (gonadotrophin-dependent, HPG activation; often idiopathic in girls, exclude CNS pathology esp. boys/atypical) vs peripheral (ovarian/adrenal/testicular, CAH, McCune-Albright, exogenous).'
        },
        {
          h: 'Benign variants',
          t: 'Premature thelarche (isolated breast development) and premature adrenarche (isolated pubic/axillary hair/odour) \u2014 usually benign but assess to distinguish from progressive PP.'
        },
        {
          h: 'Why it matters',
          t: 'Final-height impact (early bone maturation/epiphyseal fusion), psychosocial impact, and not missing a CNS/hormone-secreting tumour or CAH.'
        },
        {
          h: 'Refer & investigate',
          t: 'Paediatric endocrinology: bone age (X-ray), hormones (LH/FSH, oestradiol/testosterone, GnRH stimulation), imaging (pelvic/adrenal as indicated; brain MRI where indicated \u2014 not routine in girls 6\u20138 without neurological findings, Endocrine Society 2026 [2], international). New central neurological signs \u2192 consider 48-hour referral (NICE NG12 [1]).'
        },
        {
          h: 'Treatment',
          t: 'GnRH analogues for central precocious puberty (BNFC [4]; halt progression, preserve height, allow age-appropriate development); treat peripheral causes specifically.'
        },
        {
          h: 'Never do',
          t: 'Never dismiss early pubertal signs as nothing; never miss a CNS cause (esp. boys/atypical) or CAH; never overlook the final-height/psychosocial implications.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Paediatric endocrinology referral and assessment; red flags (CNS symptoms; raised ICP same day); vaginal bleeding without breast development \u2192 safeguarding consideration [6]; support parent/child; review.'
        }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c252, c253, c254, c255);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {
    'anal-fissure': {
      ceg: ['New & undifferentiated presentations', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Hana Reyes',
        age: '35 years \u00b7 female',
        pmh: [
          'Severe sharp "passing glass" pain on defecation + lingering spasm; bright red blood on paper',
          'Recent constipation; postpartum; posterior-midline fissure',
          'Fearful of defecation'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Like passing glass when I go, then it throbs for ages, and there\u2019s bright blood on the paper."',
        reason: 'Video consultation (chaperoned examination face to face) \u2014 painful rectal bleeding on defecation.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Recognise',
          d: 'Severe sharp defecation pain + bright blood + posterior tear, constipation/postpartum = anal fissure.'
        },
        {
          t: '2\u2010-4',
          h: 'Differential',
          d: 'Vs haemorrhoids (painless); atypical (lateral/multiple/non-healing) \u2192 IBD/infection/malignancy.'
        },
        {
          t: '4\u2010-7',
          h: 'Constipation cornerstone',
          d: 'Fluids/gradual fibre/osmotic laxative titrated to soft stools + analgesia + short-course topical lidocaine + sitz baths; gentle chaperoned inspection, no forced DRE.'
        },
        {
          t: '7\u2010-9',
          h: 'Healing agent',
          d: 'Persistent fissures only: Rectogesic (licensed for pain; headache; not in pregnancy, not recommended when breastfeeding, not with PDE-5 inhibitors) or unlicensed diltiazem 2%.'
        },
        {
          t: '9\u2010-12',
          h: 'Refer + safety-net',
          d: 'Review at 6\u20138 weeks; colorectal for chronic/non-healing or atypical; blood mixed with stool, bowel change or weight loss \u2192 NICE NG12 with FIT (NICE HTG690).'
        }
      ],
      wordPics: {
        fail: 'Treats as haemorrhoids or just gives cream; neglects constipation management; misses atypical/non-healing fissure red flags.',
        pass: 'Recognises fissure, makes constipation management the cornerstone, and considers a topical sphincter relaxant (Rectogesic or unlicensed diltiazem) only if persistent.',
        exc: 'Recognises anal fissure, distinguishes haemorrhoids, makes constipation management the cornerstone with symptom relief, considers a topical sphincter relaxant for persistent fissures after checking breastfeeding (Rectogesic not recommended when breastfeeding, MHRA SPC), reviews at 6\u20138 weeks, refers colorectal for chronic/non-healing, and keeps atypical-fissure and NICE NG12 red flags in mind.'
      },
      avoid: [
        {
          dont: '"It\u2019s probably piles \u2014 here\u2019s some cream."',
          instead: '"This severe \u2018passing glass\u2019 pain is an anal fissure \u2014 the key is keeping the stool soft so it heals."',
          why: 'Mislabelling as haemorrhoids and skipping constipation management prevents healing.'
        },
        {
          dont: '(No stool softening) only giving a healing ointment.',
          instead: '"Soft stools are the foundation \u2014 fluids, fibre and a softening laxative \u2014 and if it doesn\u2019t settle we\u2019ll look at an ointment, checking it\u2019s safe with feeding."',
          why: 'Constipation management is the cornerstone; healing agents are adjuncts.'
        },
        {
          dont: '(Ignoring atypical) treating a lateral/non-healing fissure as routine.',
          instead: '"An unusual position or one that won\u2019t heal makes me look for other causes like Crohn\u2019s."',
          why: 'Atypical/non-healing fissures can signal IBD/infection/malignancy.'
        }
      ]
    },
    'cannabis-hyperemesis': {
      ceg: ['Mental health & addiction', 'New & undifferentiated presentations'],
      stem: {
        name: 'Reece Calland',
        age: '24 years \u00b7 male',
        pmh: [
          'Recurrent cyclical vomiting + abdominal pain; multiple normal A&E work-ups',
          '\u26a0 Relieved by hot showers/baths (compulsive hot bathing)',
          'Regular/heavy cannabis user'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Awful vomiting attacks \u2014 the only thing that helps is standing in a really hot shower for hours."',
        reason: 'Video consultation (observations and abdomen checked face to face) \u2014 recurrent cyclical vomiting.'
      },
      timeMap: [
        {
          t: '0\u2010-2',
          h: 'Recognise the clue',
          d: 'Cyclical vomiting + hot-bath relief + cannabis use = cannabis hyperemesis syndrome.'
        },
        {
          t: '2\u2010-4',
          h: 'Ask about cannabis',
          d: 'Non-judgemental substance history \u2014 often missed because it isn\u2019t asked.'
        },
        {
          t: '4\u2010-6',
          h: 'Exclude red flags',
          d: 'GI obstruction/pancreatitis, raised ICP, metabolic (DKA/Addisonian), pregnancy in women.'
        },
        {
          t: '6\u2010-9',
          h: 'Cessation message',
          d: 'Only definitive treatment is cannabis cessation; standard antiemetics often ineffective.'
        },
        {
          t: '9\u2010-12',
          h: 'Support + safety-net',
          d: 'Cessation/harm-reduction referral (NICE CG51); withdrawal warning; acute hydration (urgent care if unable to keep fluids down); scalds; driving law and DVLA; return for new red flags.'
        }
      ],
      wordPics: {
        fail: 'Re-investigates repeatedly without asking about cannabis; misses the hot-bath clue; no cessation message.',
        pass: 'Recognises CHS from the hot-bath/cannabis pattern, excludes red flags, and gives the cessation message with support.',
        exc: 'Recognises CHS (cyclical vomiting + hot-bath relief + cannabis), takes a non-judgemental substance history, excludes red flags, delivers the cannabis-cessation message supportively, offers cessation/harm-reduction support, and covers withdrawal, dehydration, scalds and driving (DVLA).'
      },
      avoid: [
        {
          dont: '(Re-scanning) "Let\u2019s do more tests to find the cause."',
          instead: '"Your normal tests plus the hot-bath relief point to cannabis hyperemesis \u2014 can I ask about your cannabis use?"',
          why: 'Repeated re-investigation without asking about cannabis misses the diagnosis.'
        },
        {
          dont: '(Judgemental) "You need to stop smoking weed, simple as that."',
          instead: '"The cure is stopping cannabis \u2014 I know that\u2019s hard, and I can refer you for support."',
          why: 'Moralising alienates; supportive cessation framing engages the patient.'
        },
        {
          dont: '(Just antiemetics) relying on standard antiemetics.',
          instead: '"Usual anti-sickness tablets often don\u2019t work for this \u2014 stopping cannabis is what resolves it."',
          why: 'Standard antiemetics are often ineffective in CHS; cessation is definitive.'
        }
      ]
    },
    'infantile-colic': {
      ceg: ['Children & young people', 'Mental health & addiction'],
      stem: {
        name: 'Noah Lowther (mother, Hannah Lowther, present)',
        age: '6 weeks \u00b7 male',
        pmh: [
          'Inconsolable evening crying, legs drawn up, several hours/day for weeks (rule of 3s)',
          'Thriving \u2014 feeding, gaining weight, normal nappies, no fever',
          'Mother exhausted and anxious'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"My baby screams inconsolably for hours every evening \u2014 I\u2019m exhausted and worried something\u2019s wrong."',
        reason: 'Video consultation (full undressed examination face to face the same day) \u2014 excessive infant crying.'
      },
      timeMap: [
        {
          t: '0\u2010-2',
          h: 'Examine + take seriously',
          d: 'Arrange the full undressed examination face to face (temperature, weight); thriving, well baby supports colic (diagnosis of exclusion).'
        },
        {
          t: '2\u2010-4',
          h: 'Exclude red flags',
          d: 'Poor feeding/weight, fever (38 \u00b0C or more under 3 months, NICE NG143), bile vomiting, blood in stool, lethargy, fontanelle, hernia/torsion, hair-tourniquet, CMPA (NICE CG116), bruising.'
        },
        {
          t: '4\u2010-6',
          h: 'Reassure',
          d: 'Benign, self-limiting, settles by 3\u20104 months, not the parent\u2019s fault.'
        },
        {
          t: '6\u2010-8',
          h: 'Practical advice',
          d: 'Soothing (rocking/white noise/movement/winding); avoid routine meds/formula changes unless CMPA.'
        },
        {
          t: '8\u2010-12',
          h: 'Support parent + safety',
          d: 'Ask about mood/coping (NICE CG192); mobilise support; ICON: okay to put baby down safely; NEVER shake; red-flag safety-net.'
        }
      ],
      wordPics: {
        fail: 'Diagnoses colic without examining/excluding red flags, or dismisses parental distress; changes formula/medicates without indication; omits never-shake advice.',
        pass: 'Examines and excludes red flags, reassures about colic, gives soothing advice and supports the parent.',
        exc: 'Examines and excludes red flags, recognises colic in a thriving baby, reassures strongly, gives practical soothing advice (avoiding unnecessary meds/formula changes), and centrally supports the exhausted parent \u2014 screening mood, mobilising support, and giving never-shake safety advice.'
      },
      avoid: [
        {
          dont: '(No exam) "It\u2019s just colic, they grow out of it."',
          instead: '"Let me examine him fully first to be sure nothing\u2019s being missed \u2014 then I can reassure you properly."',
          why: 'Colic is a diagnosis of exclusion; red flags must be examined for.'
        },
        {
          dont: '(Ignoring the parent) ending after reassuring about the baby.',
          instead: '"How are YOU coping? This is exhausting \u2014 let\u2019s get you support, and your mood matters too."',
          why: 'Parental wellbeing/mood is central; missing it neglects the real consultation.'
        },
        {
          dont: '(No safety advice) omitting never-shake guidance.',
          instead: '"If you feel overwhelmed, it\u2019s okay to put him down safely and take a break \u2014 and never shake him."',
          why: 'Never-shake safety advice is essential when crying overwhelms exhausted parents.'
        }
      ]
    },
    'precocious-puberty': {
      ceg: ['Children & young people', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Maya Carrick (mother present)',
        age: '6 years \u00b7 female',
        pmh: [
          'Early breast development + some pubic hair over recent months; growth spurt',
          'No headaches/visual symptoms reported; no exogenous hormone exposure known',
          'Otherwise well'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"My 6-year-old has started developing breasts and pubic hair \u2014 isn\u2019t she far too young?"',
        reason: 'Video consultation (growth and examination face to face) \u2014 early pubertal development.'
      },
      timeMap: [
        {
          t: '0\u2010-2',
          h: 'Recognise',
          d: 'Secondary sexual characteristics <8 (girls) = precocious puberty; assess + refer.'
        },
        {
          t: '2\u2010-4',
          h: 'History + exam',
          d: 'Growth plotted (RCPCH UK-WHO), Tanner staging with parent present (not photographed), CNS symptoms, exogenous hormones (household testosterone gel, MHRA 2023), family history; examination face to face.'
        },
        {
          t: '4\u2010-6',
          h: 'Central vs peripheral',
          d: 'Central (HPG; idiopathic in girls but exclude CNS) vs peripheral (ovarian/adrenal/CAH/McCune-Albright/exogenous); benign variants.'
        },
        {
          t: '6\u2010-8',
          h: 'Why it matters',
          d: 'Final height (early bone maturation), psychosocial impact, not missing a tumour/CAH.'
        },
        {
          t: '8\u2010-12',
          h: 'Refer + support',
          d: 'Paediatric endocrinology (bone age, hormones, imaging as the specialist decides); GnRH analogue if indicated; new CNS signs \u2192 NICE NG12 48-hour referral; support parent/child.'
        }
      ],
      wordPics: {
        fail: 'Dismisses early development as nothing, or fails to assess/refer; overlooks the final-height/CNS-cause implications.',
        pass: 'Recognises precocious puberty, assesses, and refers to paediatric endocrinology with explanation.',
        exc: 'Recognises precocious puberty (signs before 8 in girls), takes a history/examines (growth, Tanner, CNS), explains central vs peripheral and benign variants, conveys why assessment matters (height, psychosocial, excluding a cause), and refers to paediatric endocrinology with parental support.'
      },
      avoid: [
        {
          dont: '"Some children just develop early \u2014 nothing to worry about."',
          instead: '"Development this young is precocious puberty and needs proper assessment \u2014 I\u2019ll refer her to the children\u2019s hormone specialists."',
          why: 'Dismissing it misses the final-height implications and a possible underlying cause.'
        },
        {
          dont: '(No assessment) referring without history/examination.',
          instead: '"Let me check her growth, the stage of development, and for any headaches or vision changes first."',
          why: 'History/examination (growth velocity, Tanner, CNS symptoms) guides urgency and the differential.'
        },
        {
          dont: '(No explanation) referring without explaining why it matters.',
          instead: '"It matters for her final height, emotionally, and to make sure there\u2019s no underlying cause \u2014 that\u2019s why we assess."',
          why: 'Parents need to understand the rationale to engage with assessment.'
        }
      ]
    }
  });

})();
