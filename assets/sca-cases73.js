/* ============================================================
   Reasoning GP — Case Library batch 73:
   "The missing paediatric case" (NEW theme, verified absent as an
   SCA presenting complaint)
   Undescended testis (cryptorchidism) — empty scrotum found at the
   baby check: retractile vs true UDT, the orchidopexy referral/
   timing, the bilateral-impalpable DSD red flag, and fertility/
   cancer-risk counselling. No NG12 cancer pathway applies to the
   infant (UDT is a future risk factor, not a 2WW pathway).
   Load AFTER sca-cases72.js.
   ============================================================ */
(function(){

  /* ===== 264. Undescended testis (cryptorchidism) ===== */
  const c264 = {
    id: 'undescended-testis',
    title: '"The midwife said one of my baby\u2019s testicles isn\u2019t in the right place \u2014 is that serious? Will he be okay?"',
    type: 'video',
    duration: 12,
    meta: {
      age: 0,
      sex: 'M',
      setting: 'Video consultation, parent present, with the genital examination (warm room, mobility test) arranged face to face \u2014 an empty scrotum found at the baby check.',
      system: 'Paediatric urology \u2014 undescended testis (cryptorchidism): assessment, referral & counselling',
      checked: 'October 2026'
    },
    brief: 'A mother brings 8-week-old Rory after the newborn/6\u20138-week check noted that one testis is not in the scrotum; she is anxious. The task is to assess UNDESCENDED TESTIS (CRYPTORCHIDISM): EXAMINE properly face to face (warm room, warm hands, relaxed child \u2014 it cannot be done on video) to establish whether the testis is PALPABLE in the inguinal canal/scrotum or IMPALPABLE, and \u2014 crucially \u2014 distinguish a RETRACTILE testis (can be brought to the bottom of the scrotum without tension and stays at least briefly \u2014 no surgery, but yearly review until puberty because some ascend; if unsure, refer) from a true UNDESCENDED testis; recognise the must-not-miss urgent presentations: BILATERAL undescended testes at the newborn check need senior paediatric review within 24 hours (NIPE), and ANY undescended testis \u2014 unilateral or bilateral \u2014 with hypospadias, micropenis, bifid scrotum or atypical genitalia needs SAME-DAY paediatrics for a possible disorder of sex development (DSD), including congenital adrenal hyperplasia; sudden groin or abdominal pain, inconsolable crying or groin/scrotal swelling with an undescended testis is possible TORSION needing immediate emergency surgical assessment (GIRFT/BAUS torsion pathway); know the REFERRAL pathway and TIMING \u2014 a testis still undescended at the 6\u20138-week check (as Rory\u2019s is, at 8 weeks) is REFERRED NOW to paediatric surgery or urology per the local NIPE pathway, for ORCHIDOPEXY ideally at 6\u201312 months of age and by 18 MONTHS AT THE LATEST (EAU/ESPU 2026, international; timing improves fertility, and orchidopexy before puberty is associated with a lower testicular cancer risk, Pettersson NEJM 2007) \u2014 with NO ULTRASOUND before referral (it does not reliably locate a non-palpable testis or change the need for surgical assessment, and can delay treatment) \u2014 and that an ACQUIRED/ascending testis (previously descended, now undescended) also needs surgical assessment; COUNSEL parents on the long-term importance (impaired fertility, increased TESTICULAR CANCER risk \u2014 harder to detect in an undescended testis \u2014 hence later testicular self-examination), reassure proportionately, and arrange follow-up/referral. The skill is proper examination, retractile-vs-undescended distinction, the DSD red flag, timely referral for orchidopexy, a torsion safety-net, and balanced parental counselling.',
    script: {
      opening: '"The midwife and then the doctor at his check said one of Rory\u2019s testicles isn\u2019t where it should be \u2014 it\u2019s not in the sac. I\u2019ve been really worried. Is it serious? Does he need an operation? Will it affect him having children one day? I just want to know he\u2019ll be okay."',
      facts: [
        {
          topic: 'Who is calling',
          text: 'Mother, Laura, on video holding Rory (8 weeks), who is content and feeding well.'
        },
        {
          topic: 'What she was told',
          text: 'Midwife at birth: "the left one isn\u2019t down yet, it might come down". GP at the 8-week check last week: "still not down \u2014 it\u2019s in the red book". Laura isn\u2019t sure whether a referral was made. The right side was "fine". Nothing else was said to be wrong with his private parts; he wees from the tip and the stream looks normal.'
        },
        {
          topic: 'What she has noticed',
          text: 'The left side of the scrotum looks flatter and smaller. She has never felt the testicle there, even in the warm bath. No lump in the groin she has seen.'
        },
        {
          topic: 'Health (if asked)',
          text: 'Born at 38 weeks, 3.2 kg, normal delivery. Feeding well (bottle), gaining weight, no vomiting, no fevers. No groin swelling, never been distressed with a swollen or red scrotum. No medicines, no allergies.'
        },
        {
          topic: 'Family',
          text: 'First child. Partner, Josh, works away a lot. Josh\u2019s brother "had an operation for something like this as a boy" and has children.'
        },
        {
          topic: 'How to play it',
          text: 'Anxious, tired new mum; many questions at once. Calm down if the doctor explains clearly that it is common and fixable. Ask: "Does he need a scan first?", "What does the operation involve? He\u2019s so small," and "Could it come down by itself?" Agree readily to him being examined at the surgery and referred.'
        }
      ],
      ice: {
        ideas: '"Something\u2019s wrong with him down there."',
        concerns: 'HIDDEN AGENDA \u2014 "I keep thinking he\u2019ll need a big operation, and that he won\u2019t be able to have children." She has read online about cancer and is frightened to ask.',
        expectations: '"To know what it is and what happens next."'
      },
      cues: [
        '"Will it affect him having children one day?" \u2014 fertility worry needing honest, balanced information.',
        '"I\u2019m not sure if anyone referred him" \u2014 the referral may have been missed.',
        '"He\u2019s so small" \u2014 fear about surgery in a baby.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'EXAMINES properly, face to face \u2014 warm room, warm hands, relaxed/warm child (avoiding cremasteric retraction) \u2014 establishing whether the testis is in the scrotum, palpable in the inguinal canal, or impalpable, and examines both sides and the genitalia'
      },
      {
        dom: 'dg',
        text: 'Distinguishes a RETRACTILE testis (brought to the bottom of the scrotum without tension and stays \u2014 usually benign, yearly review until puberty) from a TRUE UNDESCENDED testis, avoiding both over-referral and missing a genuine UDT'
      },
      {
        dom: 'dg',
        text: 'Recognises the must-not-miss urgent presentations \u2014 bilateral undescended testes at the newborn check (senior paediatric review within 24 hours), any undescended testis with hypospadias/atypical genitalia (same-day paediatrics for a disorder of sex development/endocrine cause), and acute pain or swelling (possible torsion \u2014 emergency)'
      },
      {
        dom: 'cm',
        text: 'Knows the REFERRAL pathway and TIMING \u2014 still undescended at the 6\u20138-week check \u2192 refer now (NIPE), with no ultrasound first, for ORCHIDOPEXY ideally at 6\u201312 months and by 18 months at the latest (earlier improves fertility) \u2014 and that an acquired/ascending testis also needs surgical referral'
      },
      {
        dom: 'cm',
        text: 'COUNSELS the long-term importance proportionately \u2014 impaired fertility and increased (harder-to-detect) testicular-cancer risk, hence timely orchidopexy and later testicular self-examination'
      },
      {
        dom: 'ro',
        text: 'Reassures the anxious parent proportionately (common, often resolves/correctable, good outlook with timely treatment) and addresses the "will he be okay/fertility/surgery" questions directly'
      },
      {
        dom: 'ro',
        text: 'Explains the diagnosis and plan clearly and sensitively, checking understanding without alarming'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: refers now per the NIPE pathway and offers a way to chase it, urgent assessment if bilateral/DSD features, A&E for sudden pain, inconsolable crying or groin/scrotal swelling (torsion), clear timing for orchidopexy, fertility/cancer-risk counselling, and parental support \u2014 proper examination + timely referral, not watchful inaction'
      }
    ],
    worked: [
      {
        lbl: 'Reassure + examine',
        txt: '"Thank you for bringing him \u2014 this is common and very treatable, so let\u2019s take it step by step. First I\u2019d like to see him in person and examine him gently in a warm room with warm hands while he\u2019s relaxed, because the cold can make a testicle pop up and look missing when it isn\u2019t. Let me check both sides."'
      },
      {
        lbl: 'Retractile vs undescended',
        txt: '"There are two pictures. Sometimes the testicle can be gently coaxed into the sac and stays \u2014 that\u2019s a \u2018retractile\u2019 testicle, which is usually harmless and just needs keeping an eye on. If it genuinely won\u2019t come down and stay, that\u2019s a true undescended testicle that needs the surgeons. If it\u2019s retractile, I\u2019d check it once a year."'
      },
      {
        lbl: 'Check the reassuring bit',
        txt: '"His other testicle is normally down, which is reassuring \u2014 it\u2019s when BOTH can\u2019t be felt, or there are other differences such as where he wees from, that we\u2019d need an urgent specialist look the same day. That\u2019s not the case here."'
      },
      {
        lbl: 'The plan + timing',
        txt: '"Some come down on their own early on, but because it\u2019s still up at his eight-week check, I\u2019ll refer him to the children\u2019s surgeons now for a small operation called orchidopexy that places and fixes it in the sac \u2014 ideally done between six and twelve months, and by eighteen months at the latest, because the timing helps protect his future fertility. He doesn\u2019t need a scan first \u2014 it wouldn\u2019t change what the surgeon does."'
      },
      {
        lbl: 'Honest counselling',
        txt: '"To answer your fertility question honestly: leaving it undescended long-term can affect fertility and slightly raises the future risk of a testicular problem, which is exactly why we treat it in good time and why, when he\u2019s older, he\u2019ll be taught to check himself. With timely surgery the outlook is good."'
      },
      {
        lbl: 'Safety-net + support',
        txt: '"So: I\u2019m referring him now, and please call us if you haven\u2019t heard within a few weeks. Go to A&E straight away if he has sudden pain, cries inconsolably, or you notice swelling or redness in his groin or scrotum. If you ever notice the other side change, or any concerns, come back. You did the right thing bringing him \u2014 he\u2019s going to be well looked after."'
      }
    ],
    learning: 'UNDESCENDED TESTIS (CRYPTORCHIDISM) presents when a testis is not palpable in the scrotum \u2014 found at the newborn/6\u20138-week checks or noticed by a parent \u2014 and the first task is to EXAMINE properly, face to face, in a warm room with warm hands and a relaxed, warm child (cold or anxiety triggers the cremasteric reflex and can mimic an undescended testis), establishing whether the testis is in the scrotum, PALPABLE in the inguinal canal (and gently manipulable), or truly IMPALPABLE, examining both sides and the genitalia. The key distinction is between a RETRACTILE testis \u2014 which can be brought to the bottom of the scrotum without tension and STAYS there at least briefly, is usually benign, needs no surgery and is reviewed yearly until puberty because some later ascend \u2014 and a TRUE UNDESCENDED testis, which cannot be brought into/kept in the scrotum; this avoids both over-referral and missing a genuine UDT. The must-not-misses are BILATERAL undescended testes at the newborn check (senior paediatric review within 24 hours, NIPE) and ANY undescended testis with hypospadias, micropenis, bifid scrotum or atypical genitalia, which may indicate a disorder of sex development or endocrine cause (e.g. congenital adrenal hyperplasia) and needs SAME-DAY paediatric assessment; acute groin or abdominal pain with an undescended testis is possible torsion needing immediate emergency surgical assessment (GIRFT/BAUS pathway). On the pathway and timing (NHS NIPE): a testis still undescended at the 6\u20138-week check, or found later, is referred NOW to paediatric surgery or urology, with no ultrasound first (it does not reliably locate the testis or change the need for surgical assessment), for ORCHIDOPEXY (surgical placement/fixation in the scrotum) ideally at 6\u201312 months and by 18 months at the latest (EAU/ESPU 2026, international) \u2014 timing matters because earlier surgery improves fertility outcomes, and spontaneous descent after about 6 months (corrected age) is uncommon \u2014 and an acquired/ascending testis (previously descended, now undescended) also needs surgical referral. Counsel parents honestly but proportionately that a persistently undescended testis is associated with impaired FERTILITY and an increased, harder-to-detect risk of TESTICULAR CANCER, which is why timely orchidopexy (reducing but not removing the cancer risk; Pettersson, NEJM 2007) and, from puberty, testicular SELF-AWARENESS are advised \u2014 framing this as the reason for treatment, not alarm. Reassure proportionately (it is common, often resolves or is correctable, with a good outlook after timely treatment), explain the plan, support the anxious parent, and safety-net.',
    knowledge: {
      guideline: 'Undescended testis (cryptorchidism) \u00b7 NIPE/6\u20138-week check \u00b7 retractile vs UDT \u00b7 bilateral-impalpable DSD red flag \u00b7 orchidopexy timing \u00b7 fertility/cancer counselling \u00b7 [1] NHS Newborn and Infant Physical Examination (NIPE) screening programme \u00b7 [2] EAU/ESPU guidelines on paediatric urology (2026, international) \u00b7 [3] NICE NG12 Suspected cancer: recognition and referral (2015, last updated 15 April 2026), testicular cancer criteria in adults \u00b7 [4] GIRFT/BAUS children and young people testicular torsion pathway (2026) \u00b7 [5] Pettersson et al., NEJM 2007 (orchidopexy age and testicular cancer risk)',
      points: [
        {
          h: 'Examine properly',
          t: 'Face to face: warm room, warm hands, relaxed/warm child (avoid cremasteric retraction). Establish scrotal vs palpable inguinal vs impalpable; examine both sides, genitalia and for a hernia.'
        },
        {
          h: 'Retractile vs true UDT',
          t: 'Retractile = brought to the bottom of the scrotum without tension and stays (usually benign; yearly review until puberty as some ascend) [2]. True undescended = cannot be brought into/kept in the scrotum. Avoid over-referral and missed UDT.'
        },
        {
          h: 'Bilateral impalpable red flag',
          t: 'Bilateral at the newborn check \u2192 senior paediatric review within 24 hours [1]; any UDT with hypospadias/micropenis/atypical genitalia \u2192 same-day paediatrics for disorder of sex development/endocrine cause (e.g. CAH) [1,2]; acute pain/swelling \u2192 possible torsion, emergency surgical assessment [4].'
        },
        {
          h: 'Pathway & timing',
          t: 'Still undescended at the 6\u20138-week check \u2192 refer now per the local NIPE pathway [1]; no ultrasound first; orchidopexy ideally at 6\u201312 months and by 18 months at the latest [2] (earlier improves fertility; pre-pubertal surgery lowers cancer risk [5]). Spontaneous descent after ~6 months (corrected age) is uncommon. Acquired/ascending testis also needs referral.'
        },
        {
          h: 'Long-term counselling',
          t: 'Persistent UDT \u2192 impaired fertility and increased (harder-to-detect) testicular-cancer risk \u2192 timely orchidopexy (reduces, does not remove, the risk) and testicular self-awareness from puberty; NICE NG12 testicular criteria in adults [3]. Frame as the reason for treatment.'
        },
        {
          h: 'Reassure proportionately',
          t: 'Common, often resolves/correctable, good outlook with timely treatment. Support the anxious parent; explain the plan.'
        },
        {
          h: 'Never do',
          t: 'Never examine a cold/distressed child and mislabel retraction as UDT; never over-refer a retractile testis; never miss bilateral impalpable/DSD; never delay referral past the orchidopexy window; never request an ultrasound before referral; never alarm without counselling the reason.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Refer now per the NIPE pathway; urgent assessment if bilateral impalpable/DSD features; A&E for sudden pain, inconsolable crying or groin/scrotal swelling (torsion); clear orchidopexy timing; fertility/cancer-risk counselling; parental support.'
        }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c264);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {
    'undescended-testis': {
      ceg: ['Children & young people', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Rory (mother present)',
        age: '8 weeks \u00b7 male',
        pmh: [
          'Empty scrotum on one side noted at newborn/6\u20138-week check',
          'Otherwise well, thriving; other testis normally descended',
          'No hypospadias/ambiguous genitalia'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"The midwife said one of his testicles isn\u2019t in the right place \u2014 is it serious? Will he be okay?"',
        reason: 'Video consultation (genital examination face to face) \u2014 empty scrotum found at the baby check.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Reassure + examine',
          d: 'Face to face: warm room, warm hands/relaxed child; scrotal vs palpable inguinal vs impalpable; both sides + genitalia.'
        },
        {
          t: '2\u20104',
          h: 'Retractile vs true UDT',
          d: 'Retractile (brought down without tension, stays \u2014 yearly review) vs true undescended (needs surgery).'
        },
        {
          t: '4\u20106',
          h: 'Red flag',
          d: 'Bilateral at the newborn check \u2192 senior paediatric review within 24 hours; any UDT with hypospadias/atypical genitalia \u2192 same-day paediatrics (DSD); acute pain/swelling \u2192 torsion, A&E (reassuring here \u2014 other testis down, genitalia normal).'
        },
        {
          t: '6\u20109',
          h: 'Pathway + timing',
          d: 'Still undescended at 6\u20138 weeks \u2192 refer now (NIPE), no ultrasound first \u2192 orchidopexy ideally 6\u201312 months, by 18 months at the latest (aids fertility); acquired/ascending also refer.'
        },
        {
          t: '9\u201012',
          h: 'Counsel + safety-net',
          d: 'Fertility + testicular-cancer risk \u2192 timely surgery + later self-awareness; torsion safety-net; reassure proportionately; follow-up.'
        }
      ],
      wordPics: {
        fail: 'Examines a cold/distressed baby and dismisses or over-refers; misses the retractile-vs-UDT distinction or bilateral-impalpable DSD; gives no referral timing or fertility/cancer counselling.',
        pass: 'Examines properly, distinguishes retractile from true UDT, and refers with correct timing and parental counselling.',
        exc: 'Examines properly (warm hands), distinguishes retractile from true undescended, recognises the bilateral-impalpable DSD red flag, refers now per the NIPE pathway with correct orchidopexy timing (6\u201312 months, by 18 months at the latest) and no ultrasound first, gives a torsion safety-net, counsels fertility/cancer risk proportionately, and reassures/supports the parent.'
      },
      avoid: [
        {
          dont: '"It\u2019ll come down on its own \u2014 nothing to worry about, no need to do anything."',
          instead: '"Because it\u2019s still up at his eight-week check, I\u2019ll refer him to the children\u2019s surgeons now for a small operation \u2014 the timing matters for his fertility."',
          why: 'Blanket watchful inaction risks missing the orchidopexy window that protects fertility.'
        },
        {
          dont: '(Examining a cold/upset baby) labelling retraction as undescended.',
          instead: '"Let me warm my hands and settle him \u2014 cold makes the testicle retract and look missing when it isn\u2019t."',
          why: 'The cremasteric reflex causes false impressions; proper examination is essential.'
        },
        {
          dont: '(Ignoring the red flag) treating any non-palpable testis as routine.',
          instead: '"If both couldn\u2019t be felt, especially with other genital differences, that needs an urgent specialist assessment."',
          why: 'Bilateral impalpable testes can signal a disorder of sex development/endocrine cause needing urgent assessment.'
        }
      ]
    }
  });

})();
