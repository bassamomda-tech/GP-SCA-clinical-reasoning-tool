/* ============================================================
   Reasoning GP — Case Library batch 78 (SCA revision notes):
   Familial adenomatous polyposis (FAP); chronic lymphocytic
   leukaemia (incidental lymphocytosis); iatrogenic (drug-induced)
   dyspepsia; iatrogenic (steroid-induced) fragility fracture &
   osteoporosis. NG12 noted where genuine. After 77.
   ============================================================ */
(function(){

  /* ===== 281. Familial adenomatous polyposis ===== */
  const c281 = {
    id: 'familial-adenomatous-polyposis',
    title: '"My dad died young of bowel cancer and the hospital said it ran in the family \u2014 do I need testing? I\u2019m only 22"',
    type: 'video',
    duration: 12,
    meta: {
      age: 22,
      sex: 'M',
      setting: 'Video consultation \u2014 a young adult with a strong family bowel-cancer history',
      system: 'Genetics / Lower GI \u2014 familial adenomatous polyposis: inheritance, screening & referral',
      checked: 'October 2026'
    },
    brief: 'Mr Daniel Frost, 22, attends because his father (and other relatives) developed bowel cancer young, and the family was told it is HEREDITARY \u2014 a picture suggesting FAMILIAL ADENOMATOUS POLYPOSIS (FAP) or another inherited bowel-cancer syndrome (e.g. Lynch). The task is the genetic-counselling/screening consultation: recognise FAP (an autosomal-DOMINANT condition \u2014 APC gene \u2014 causing hundreds-to-thousands of colonic ADENOMATOUS POLYPS from adolescence with a near-100% lifetime colorectal-cancer risk if untreated; extra-colonic features \u2014 duodenal/desmoid, CHRPE, osteomas), explain INHERITANCE (50% risk to offspring of an affected parent), discuss PRESYMPTOMATIC GENETIC testing and the need for referral to CLINICAL GENETICS, outline the SURVEILLANCE/management for gene carriers (BSG/ACPGBI/UKCGG 2020: COLONOSCOPY for at-risk children in classical FAP families from age 12 to 14, prophylactic COLECTOMY timed by polyp burden, usually late teens or early adulthood, then upper-GI surveillance) and how it dramatically reduces cancer death \u2014 so a 22-year-old from a hereditary family who has had NO surveillance needs a PRIORITY clinical-genetics referral and colonoscopy; distinguish Lynch syndrome (fewer polyps, also endometrial/other cancers; consider daily aspirin, NICE NG151), MUTYH-associated polyposis (autosomal recessive, affects siblings) and attenuated FAP (fewer polyps, later onset); discuss CASCADE testing of relatives with his consent (GMC confidentiality) and that UK insurers cannot ask for predictive results except Huntington\u2019s disease for very large policies (ABI Code 2018); support an anxious, bereaved young person and respect autonomy/the right to know. (NICE NG12 covers symptomatic suspected colorectal cancer, including FIT where indicated; this is the inherited/asymptomatic pathway via genetics, not a suspected cancer pathway referral.) No suspected cancer pathway referral unless he has symptoms.',
    script: {
      opening: '"My dad died of bowel cancer in his early 40s, and a couple of other relatives had it young too. The hospital told my family it runs in the genes. I\u2019m 22 and I\u2019m worried \u2014 do I need to be tested or screened? Am I going to get it too?"',
      facts: [
        {
          topic: 'The family',
          text: 'Dad, Mark, died at 43 of bowel cancer, 3 years ago. His sister (Daniel\u2019s aunt) had "her bowel removed" in her thirties. Grandad died "of his bowels" young. "I don\u2019t know all the details. They were young, like him." The hospital told Mum it was genetic; Mum has a letter somewhere with the name of the condition.'
        },
        {
          topic: 'His own testing',
          text: 'Never had a genetic test, a camera test or a referral. Was 19 when Dad died and "didn\u2019t want to know then".'
        },
        {
          topic: 'Bowel symptoms (all negative)',
          text: 'No bleeding, no change in bowel habit, no tummy pain, no weight loss, not tired. Feels completely well.'
        },
        {
          topic: 'Health',
          text: 'No medicines, no allergies. Non-smoker; drinks at weekends. Had a lump removed from his jaw at 15 ("a bony lump \u2014 they said harmless"), only if asked about other lumps or operations.'
        },
        {
          topic: 'Family and social',
          text: 'Younger sister, Ellie (17), and brother, Sam (14). Mum is well. Has a girlfriend of 2 years; they talk about having children one day. Works as a trainee electrician.'
        },
        {
          topic: 'Feelings',
          text: '"It\u2019s hard. I think about it a lot." Low at times since Dad died, never thoughts of self-harm. Has been putting this off.'
        },
        {
          topic: 'How to play it',
          text: 'Quiet, serious, a little nervous. Ask "And would I have it?", "So I could stop it happening to me?" and "What if I\u2019d rather not know?" Ask whether you should tell your brother and sister. Respond well to honest, clear information and a concrete plan.'
        }
      ],
      ice: {
        ideas: '"It runs in the family, so I\u2019ll probably get it."',
        concerns: 'HIDDEN AGENDA \u2014 "That I\u2019ll die young like him." Also worried about passing it on to children, and whether his 14-year-old brother is at risk now.',
        expectations: '"To know if I need testing or screening."'
      },
      cues: [
        '"The hospital told my family it runs in the genes" \u2014 an inherited syndrome; ask for the letter and details.',
        '"What if I\u2019d rather not know?" \u2014 testing is his choice; explore it.',
        '"Should I tell my brother and sister?" \u2014 family implications, including a 14-year-old.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises a likely INHERITED colorectal-cancer syndrome (FAP/Lynch) from the strong early-onset family history and that it warrants a PRIORITY clinical-genetics referral (no surveillance yet at 22, when FAP colonoscopy starts at 12\u201314)'
      },
      {
        dom: 'ro',
        text: 'Explains FAP\u2019s AUTOSOMAL DOMINANT inheritance (50% risk to offspring; APC gene; hundreds of polyps from adolescence; near-100% lifetime risk if untreated)'
      },
      {
        dom: 'cm',
        text: 'Discusses PRESYMPTOMATIC GENETIC testing (often for a known family mutation) and refers to CLINICAL GENETICS, respecting the right to know/not know and mentioning the ABI Code on insurance'
      },
      {
        dom: 'cm',
        text: 'Outlines the SURVEILLANCE/management for carriers (colonoscopy from age 12\u201314 per BSG/ACPGBI/UKCGG 2020, prophylactic colectomy, upper-GI surveillance) and that it dramatically reduces cancer death'
      },
      {
        dom: 'dg',
        text: 'Distinguishes LYNCH syndrome (fewer polyps, endometrial/other cancers; aspirin per NICE NG151) and MUTYH-associated polyposis, and recognises that symptomatic suspected colorectal cancer would follow the NICE NG12 pathway'
      },
      {
        dom: 'ro',
        text: 'Supports an anxious young person, respects his autonomy over testing, and checks understanding'
      },
      {
        dom: 'ro',
        text: 'Explores the impact of his father\u2019s early death and his fears for his own future and any future children, and discusses the implications for relatives (cascade testing) sensitively, with his consent to share'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: clinical-genetics referral, surveillance information, assessment/NICE NG12 referral if bowel symptoms, and review \u2014 the inherited-syndrome pathway, not dismissal or an inappropriate suspected cancer pathway referral'
      }
    ],
    worked: [
      {
        lbl: 'Take it seriously',
        txt: '"You were absolutely right to come. A strong family history of bowel cancer at a young age, described as running in the family, points to an inherited condition \u2014 and the good news is that identifying it early means we can prevent the cancer."'
      },
      {
        lbl: 'Explain inheritance',
        txt: '"One likely condition is FAP \u2014 a fault in a gene that causes lots of bowel polyps from the teens, which can turn cancerous. It\u2019s passed on in a dominant way, so there\u2019s a one-in-two chance of inheriting it from an affected parent."'
      },
      {
        lbl: 'Testing/referral',
        txt: '"Often the family\u2019s exact gene fault is known, so you can have a blood test for it. I\u2019ll refer you to the genetics service today and mark it as a priority, because in FAP families camera checks usually start in the early teens. Whether to be tested is your choice \u2014 some want to know, some don\u2019t \u2014 and they\u2019ll guide you through it. In the UK, insurers can\u2019t ask for a predictive gene test result, apart from one rare condition."'
      },
      {
        lbl: 'Why it matters',
        txt: '"If you do carry it, regular camera tests from a young age and, often, removing the bowel before cancer develops are hugely effective \u2014 they save lives. That\u2019s exactly why finding out is worthwhile."'
      },
      {
        lbl: 'Symptoms check',
        txt: '"Have you had any bowel symptoms \u2014 bleeding, change in habit, weight loss? \u2026 No. If you ever do, tell me, as that would need separate urgent assessment."'
      },
      {
        lbl: 'Support + safety-net',
        txt: '"This is a lot at 22, and I\u2019m here to support you. Other relatives may be at risk too \u2014 the genetics team can help you decide how to share it, and it\u2019s your information. I\u2019ll get the genetics referral going, and we\u2019ll go through whatever they advise together."'
      }
    ],
    learning: 'A strong family history of EARLY-onset bowel cancer across relatives, described as hereditary, suggests an inherited colorectal-cancer syndrome \u2014 notably FAMILIAL ADENOMATOUS POLYPOSIS (FAP) or Lynch syndrome (HNPCC) \u2014 and warrants a priority clinical-genetics referral (BSG/ACPGBI/UKCGG 2020); MUTYH-associated polyposis (autosomal recessive) and attenuated FAP are other possibilities. FAP (APC gene) is AUTOSOMAL DOMINANT, causing hundreds-to-thousands of colonic ADENOMATOUS POLYPS from adolescence with a near-100% lifetime colorectal-cancer risk if untreated, and extra-colonic features (duodenal/desmoid tumours, CHRPE, osteomas, thyroid); each child of an affected parent has a 50% chance of inheriting the faulty gene. Discuss PRESYMPTOMATIC GENETIC testing (often the family\u2019s causative mutation is known and can be tested for) via clinical genetics, counselling that testing is the patient\u2019s choice (right to know/not know, psychological and practical implications; ABI Code 2018 on insurance; cascade testing of relatives with consent, GMC Confidentiality 2017) and that early identification enables life-saving surveillance. For confirmed carriers, management is intensive surveillance and prevention \u2014 colonoscopy from age 12 to 14, usually prophylactic COLECTOMY when polyp burden warrants (late teens or early adulthood), and upper-GI (duodenal) surveillance \u2014 which dramatically reduces colorectal-cancer death. Distinguish LYNCH syndrome (far fewer polyps, earlier-onset colorectal cancer, and associated endometrial and other cancers, with its own surveillance including daily aspirin per NICE NG151 and gynae advice). Support the anxious young person, respect autonomy, and refer to clinical genetics; if the patient has bowel SYMPTOMS, assess and refer via the NICE NG12 pathway for symptomatic suspected colorectal cancer, with FIT where indicated \u2014 but an asymptomatic inherited-risk screening request follows the priority genetics pathway, not a suspected cancer pathway referral.',
    knowledge: {
      guideline: 'BSG/ACPGBI/UKCGG hereditary colorectal cancer guidelines (Monahan, Gut 2020) \u00b7 NICE NG151 Colorectal cancer (2020) \u00b7 NICE HTG430 (formerly DG27) Lynch syndrome testing (2017) \u00b7 NICE NG12 Suspected cancer: recognition and referral (2015, last updated 15 April 2026) \u00b7 ABI Code on Genetic Testing and Insurance (2018) \u00b7 GMC Confidentiality (2017) \u00b7 FAP (APC): autosomal dominant, 50% \u00b7 presymptomatic testing/clinical genetics \u00b7 colonoscopy from 12\u201314/prophylactic colectomy \u00b7 vs Lynch/MUTYH \u00b7 NG12 if symptomatic',
      points: [
        {
          h: 'Recognise inherited syndrome',
          t: 'Strong early-onset family bowel-cancer history described as hereditary \u2192 FAP/Lynch/MUTYH; priority clinical-genetics referral (no surveillance yet).'
        },
        {
          h: 'FAP & inheritance',
          t: 'APC gene, autosomal dominant (50% to offspring), hundreds of polyps from adolescence, near-100% lifetime CRC risk if untreated; extra-colonic features.'
        },
        {
          h: 'Presymptomatic testing',
          t: 'Test for the known family variant via clinical genetics; the patient\u2019s choice (right to know/not know, implications; ABI Code 2018); cascade testing of relatives with consent.'
        },
        {
          h: 'Surveillance/management',
          t: 'Colonoscopy from 12\u201314 in FAP families (BSG/ACPGBI/UKCGG 2020), prophylactic colectomy, upper-GI surveillance \u2014 dramatically reduces cancer death.'
        },
        {
          h: 'Vs Lynch',
          t: 'Lynch (HNPCC): fewer polyps, earlier CRC, plus endometrial/other cancers; own surveillance (colonoscopy, aspirin per NICE NG151, gynae). MUTYH: autosomal recessive.'
        },
        {
          h: 'Symptomatic = NICE NG12',
          t: 'Bowel symptoms \u2192 assess/refer via NICE NG12 (symptomatic suspected colorectal cancer; FIT where indicated). Asymptomatic risk = genetics pathway.'
        },
        {
          h: 'Never do',
          t: 'Never dismiss a strong inherited bowel-cancer history; never treat the genetics referral as routine; never coerce testing; never miss symptoms needing NICE NG12.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Priority clinical-genetics referral; surveillance information; NICE NG12 if symptoms; support (including grief) and review.'
        }
      ]
    }
  };

  /* ===== 282. Chronic lymphocytic leukaemia (incidental lymphocytosis) ===== */
  const c282 = {
    id: 'cll-lymphocytosis',
    title: '"My routine blood test showed raised lymphocytes and the word \u2018leukaemia\u2019 \u2014 I\u2019m terrified, but I feel completely well"',
    type: 'video',
    duration: 12,
    meta: {
      age: 69,
      sex: 'M',
      setting: 'Video consultation \u2014 explaining an incidental lymphocytosis',
      system: 'Haematology \u2014 chronic lymphocytic leukaemia: incidental finding, watchful waiting & honest communication',
      checked: 'October 2026'
    },
    brief: 'Mr Edward Ross, 69, had a routine pre-operative FBC (before a planned operation) showing an isolated LYMPHOCYTOSIS, with a blood film/flow cytometry suggesting CHRONIC LYMPHOCYTIC LEUKAEMIA (CLL); he is well but frightened by the word "leukaemia". The task is to explain an incidental CLL/lymphocytosis sensitively and accurately: recognise that a persistent mature lymphocytosis in an older adult is commonly CLL (iwCLL 2018, international: a sustained clonal B-lymphocyte count of at least 5 \u00d7 10\u2079/L with a characteristic immunophenotype on flow cytometry; below that, without node or organ involvement, it is monoclonal B-cell lymphocytosis, MBL), that CLL is often INDOLENT and many patients are diagnosed incidentally while asymptomatic; assess for features (lymphadenopathy, hepatosplenomegaly, B symptoms \u2014 weight loss/night sweats/fevers, anaemia/thrombocytopenia, infections); refer to HAEMATOLOGY for confirmation and staging (a well patient with an isolated lymphocytosis and normal haemoglobin and platelets can usually go through the local haematology pathway; cytopenias, bulky nodes, B symptoms or a rapidly rising count need faster review); explain the often reassuring reality of "WATCH AND WAIT" \u2014 many early-stage CLL patients need NO treatment for years and have a near-normal life expectancy, with treatment reserved for progressive/symptomatic disease; counsel on INFECTION risk (impaired immunity \u2014 annual influenza, pneumococcal and COVID-19 vaccines per the current programme, check eligibility for the non-live shingles vaccine Shingrix, avoid live vaccines in significant immunosuppression \u2014 Green Book; prompt treatment of infections), SKIN CANCER risk (sun protection, report new skin lesions), inform the pre-operative team, and what to monitor/report; and \u2014 crucially \u2014 handle the word "leukaemia" with honest, calibrated reassurance (it is a cancer but often a very indolent one) without false promises or minimising. NICE NG12 recommends a very urgent FBC for adults with features of leukaemia (pallor, persistent fatigue, unexplained fever, persistent or recurrent infection, generalised lymphadenopathy, unexplained bruising or bleeding, hepatosplenomegaly); here the FBC is done and he is well, so referral is through the local haematology pathway rather than a suspected cancer pathway, faster if features appear. The skill is honest communication, recognising indolent CLL, haematology referral, watch-and-wait explanation, and infection counselling (BSH CLL guideline 2022; NICE NG47). Recorded findings available to the candidate (no in-person examination in this remote consultation): Pre-operative assessment clinic letter, 2 weeks ago (planned inguinal hernia repair): well; no palpable lymph nodes, liver or spleen; observations normal. FBC: lymphocytes 11.2 \u00d7 10\u2079/L, Hb 141 g/L, platelets 210 \u00d7 10\u2079/L, neutrophils normal; film and flow cytometry suggest CLL.',
    script: {
      opening: '"I had a blood test for a pre-op check and the doctor mentioned my lymphocytes were high and used the word \u2018leukaemia\u2019. I\u2019ve been beside myself \u2014 my wife\u2019s in pieces. But the strange thing is I feel completely fine. Does this mean I\u2019m dying?"',
      facts: [
        {
          topic: 'What he was told',
          text: 'Pre-op assessment for a hernia repair 2 weeks ago. "Just that one type of white cell was high and it might be leukaemia. Then I stopped listening." Has the clinic letter (if asked what it says: lymphocytes 11.2, everything else normal; the pre-op doctor "felt my neck and tummy and said nothing was enlarged").'
        },
        {
          topic: 'Symptoms (all negative)',
          text: 'No night sweats, no fevers, no weight loss, not tired. No lumps in the neck, armpits or groin that he can feel (will feel his neck on camera if asked). No more infections than usual. No bruising or bleeding.'
        },
        {
          topic: 'Health',
          text: '"Fit as a fiddle." Walks the dog 5 miles a day. Inguinal hernia, otherwise well. No medicines. No allergies. Had his flu jab last year; doesn\u2019t know about pneumococcal or shingles vaccines.'
        },
        {
          topic: 'Social',
          text: 'Retired teacher. Married to Jean for 42 years \u2014 she is "in pieces". Two grown-up children. Non-smoker, 10 units a week. Gardener \u2014 out in the sun a lot.'
        },
        {
          topic: 'What he imagines',
          text: '"Chemotherapy, hospital, dying quickly." His brother died of acute leukaemia at 50 \u2014 only if the doctor explores why he is so frightened.'
        },
        {
          topic: 'How to play it',
          text: 'Polite, controlled, frightened underneath. Ask "Then why is it called leukaemia?" and "So no chemotherapy?". Relief if the doctor explains calmly. Would like Jean to come to the next appointment.'
        }
      ],
      ice: {
        ideas: '"Leukaemia means chemotherapy and dying quickly."',
        concerns: 'HIDDEN AGENDA \u2014 his brother\u2019s death from acute leukaemia, and leaving his wife. Also wonders if the hernia operation will go ahead.',
        expectations: '"To know if I\u2019m dying, honestly."'
      },
      cues: [
        '"Does this mean I\u2019m dying?" \u2014 honest, calibrated explanation needed.',
        '"My wife\u2019s in pieces" \u2014 offer to involve her.',
        '"My brother died of leukaemia" (if fear is explored) \u2014 why the word is so frightening.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises that an incidental persistent mature LYMPHOCYTOSIS in an older adult is commonly CLL, confirmed by flow cytometry/immunophenotyping (at least 5 \u00d7 10\u2079/L clonal B cells, iwCLL; lower counts = MBL), and is often indolent/incidental'
      },
      {
        dom: 'dg',
        text: 'Assesses for features/staging pointers (lymphadenopathy, hepatosplenomegaly, B symptoms, anaemia/thrombocytopenia, infections)'
      },
      {
        dom: 'cm',
        text: 'Refers to HAEMATOLOGY for confirmation, staging and management through the local pathway (faster if cytopenias, bulky nodes, B symptoms or a rapidly rising count), and informs the pre-operative team'
      },
      {
        dom: 'ro',
        text: 'Explains "WATCH AND WAIT" \u2014 many early-stage patients need no treatment for years with near-normal life expectancy; treatment reserved for progressive/symptomatic disease'
      },
      {
        dom: 'cm',
        text: 'Counsels INFECTION risk (influenza, pneumococcal, COVID-19 vaccines, Shingrix eligibility, avoid live vaccines, prompt treatment, reporting fevers/recurrent infections), skin-cancer risk, and what to monitor/report'
      },
      {
        dom: 'ro',
        text: 'Handles the word "leukaemia" with HONEST, calibrated reassurance \u2014 acknowledging it is a cancer but often very indolent \u2014 without false promises or minimising, supporting the patient and his wife'
      },
      {
        dom: 'ro',
        text: 'Paces the information and invites questions, agreeing the monitoring and watch-and-wait plan together so he understands why no treatment now is the right, active choice'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: haematology referral, what to report (B symptoms, infections, new lumps, bleeding), vaccination, and review \u2014 honest communication + indolent-CLL recognition + watch-and-wait explanation'
      }
    ],
    worked: [
      {
        lbl: 'Acknowledge the fear',
        txt: '"I can see how frightening that word is \u2014 take a breath, and let me explain properly, because the reality is often far more reassuring than it sounds."'
      },
      {
        lbl: 'Explain honestly',
        txt: '"Your blood shows a raised number of one type of white cell, which does look like a condition called CLL \u2014 chronic lymphocytic leukaemia. It is technically a blood cancer, but I want to be honest AND reassuring: it\u2019s very often slow-growing, and many people \u2014 especially diagnosed by chance while feeling well, like you \u2014 never need treatment and live a normal lifespan."'
      },
      {
        lbl: 'Assess + refer',
        txt: '"Let me check a few things \u2014 any lumps, night sweats, weight loss, frequent infections? \u2026 None. And I\u2019ll feel for glands and your spleen. I\u2019ll refer you to the blood specialists to confirm it and see what stage it is, and let the team doing your pre-op check know."'
      },
      {
        lbl: 'Watch and wait',
        txt: '"For many people at an early stage, the approach is \u2018watch and wait\u2019 \u2014 simply monitoring with blood tests, no treatment unless it ever becomes active. That\u2019s not neglect; it\u2019s because treating early doesn\u2019t help and the condition often stays quiet for years."'
      },
      {
        lbl: 'Infection advice',
        txt: '"One practical thing: CLL can lower your defences, so keep up with vaccinations \u2014 flu, pneumonia, COVID \u2014 and we\u2019ll check whether you should have the shingles vaccine. Avoid live vaccines, and see us promptly with infections or fevers. Use sun cream too, as skin cancers are a bit more common with CLL."'
      },
      {
        lbl: 'Support + safety-net',
        txt: '"Bring your wife next time if it helps \u2014 I\u2019ll explain it to you both. Report any new lumps, drenching sweats, weight loss, unusual bruising or repeated infections. I\u2019ll get the referral moving and we\u2019ll go through everything together."'
      }
    ],
    learning: 'A persistent, isolated mature LYMPHOCYTOSIS in an older adult is commonly CHRONIC LYMPHOCYTIC LEUKAEMIA (CLL), confirmed by blood film and FLOW CYTOMETRY/immunophenotyping (iwCLL 2018, international: at least 5 \u00d7 10\u2079/L clonal B lymphocytes; lower counts without node or organ involvement are monoclonal B-cell lymphocytosis), and is often INDOLENT and frequently diagnosed INCIDENTALLY in well, asymptomatic patients. Assess for clinical features and staging pointers \u2014 lymphadenopathy, hepatosplenomegaly, B symptoms (unexplained weight loss, drenching night sweats, fevers), anaemia/thrombocytopenia, and recurrent infections \u2014 and refer to HAEMATOLOGY for confirmation, staging (Binet/Rai) and a management plan. The reassuring reality to explain is "WATCH AND WAIT": many early-stage CLL patients need no treatment for years (sometimes never), are monitored with periodic bloods/review, and can have a near-normal life expectancy, with treatment reserved for progressive/symptomatic disease (rising counts/organomegaly, cytopenias, B symptoms). Counsel infection risk \u2014 CLL impairs immunity, so vaccinations (influenza, pneumococcal, COVID-19; check Shingrix eligibility; avoid live vaccines \u2014 Green Book), sun protection because skin cancers are more common, prompt treatment of infections, and reporting fevers/recurrent infections matter \u2014 and advise what to monitor/report (B symptoms, new lumps, infections, bleeding/bruising, fatigue). The communication core is the word "leukaemia": be honest that it is a cancer but provide calibrated reassurance (often very indolent, many never need treatment, near-normal life expectancy in many) without false promises or minimising, supporting both patient and family. Referral for a well patient with isolated lymphocytosis and normal haemoglobin and platelets is usually through the local haematology pathway, with faster review for cytopenias, bulky nodes, B symptoms or a rapid rise (BSH 2022); NICE NG12 very urgent FBC applies to adults with features of leukaemia, and a suspected cancer pathway referral is not the route once flow cytometry suggests CLL in a well patient. Inform the pre-operative team.',
    knowledge: {
      guideline: 'iwCLL guidelines (Hallek, Blood 2018, international) \u00b7 BSH guideline for the treatment of CLL (2022) \u00b7 NICE NG12 Suspected cancer: recognition and referral (2015, last updated 15 April 2026) \u00b7 UKHSA Green Book chapters 6, 7, 19, 25, 28a \u00b7 NICE NG47 Haematological cancers (2016) \u00b7 CLL: incidental lymphocytosis \u00b7 flow cytometry confirmation \u00b7 haematology referral/staging \u00b7 watch-and-wait \u00b7 infection risk \u00b7 honest communication',
      points: [
        {
          h: 'Recognise',
          t: 'Incidental persistent mature lymphocytosis in an older adult \u2192 commonly CLL (clonal B cells at least 5 \u00d7 10\u2079/L, iwCLL); confirm by flow cytometry/immunophenotyping; below that = MBL. Often indolent/incidental.'
        },
        {
          h: 'Assess features',
          t: 'Lymphadenopathy, hepatosplenomegaly, B symptoms (weight loss/night sweats/fevers), anaemia/thrombocytopenia, infections \u2014 inform disease activity/staging.'
        },
        {
          h: 'Refer haematology',
          t: 'For confirmation, staging (Binet/Rai) and management. Local pathway when well with normal Hb/platelets; faster if cytopenias, bulky nodes, B symptoms or rapid rise. Tell the pre-op team.'
        },
        {
          h: 'Watch and wait',
          t: 'Many early-stage patients need no treatment for years, near-normal life expectancy; treat only progressive/symptomatic disease.'
        },
        {
          h: 'Infection risk',
          t: 'Impaired immunity \u2014 vaccinations (flu/pneumococcal/COVID; Shingrix eligibility; no live vaccines, Green Book), prompt treatment of infections, report fevers/recurrent infections. Skin cancer: sun protection.'
        },
        {
          h: 'Honest communication',
          t: 'Honest (it is a cancer) but calibrated reassurance (often indolent, many never need treatment); no false promises/minimising; support patient and family.'
        },
        {
          h: 'Never do',
          t: 'Never minimise or over-alarm with the word "leukaemia"; never leave haematology referral undone; never omit infection counselling; never imply imminent death for indolent incidental CLL.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Haematology referral; report B symptoms/infections/new lumps/bleeding/new skin lesions; vaccinations; review with the patient and family.'
        }
      ]
    }
  };

  /* ===== 283. Iatrogenic (drug-induced) dyspepsia ===== */
  const c283 = {
    id: 'iatrogenic-dyspepsia',
    title: '"I\u2019ve had burning indigestion and stomach pain since starting my new tablets \u2014 do I just need something for the acid?"',
    type: 'video',
    duration: 12,
    meta: {
      age: 63,
      sex: 'F',
      setting: 'Video consultation \u2014 new dyspepsia after a medication change',
      system: 'Upper GI / Prescribing \u2014 drug-induced dyspepsia: review the medications, not just add a PPI',
      checked: 'October 2026'
    },
    brief: 'Mrs Carol Devine, 63, has new DYSPEPSIA (epigastric burning/pain, reflux) that began after starting/changing medication \u2014 an oral NSAID started a few weeks ago for knee pain (drug, dose and knee diagnosis not recorded: confirm them), or another culprit (aspirin/antiplatelets, oral bisphosphonate, steroids, SSRIs, iron, calcium antagonists, theophylline, nitrates). The task is to recognise IATROGENIC (DRUG-INDUCED) DYSPEPSIA and REVIEW THE MEDICATIONS rather than reflexively add acid suppression: take a history linking onset to the drug, identify the CULPRIT (NSAIDs most commonly \u2014 with GI ulcer/bleed risk), screen ALARM/red-flag features mandating urgent assessment (NICE NG12 upper-GI: dysphagia at any age, or age \u226555 with weight loss plus upper abdominal pain, reflux or dyspepsia \u2192 suspected cancer pathway referral; age \u226555 with treatment-resistant dyspepsia \u2192 consider non-urgent direct-access endoscopy; haematemesis, melaena or collapse on an NSAID \u2192 possible bleeding ulcer needing same-day hospital assessment (NICE CG141), not a cancer pathway; persistent vomiting or an epigastric mass are not themselves current NG12 upper-GI criteria but need clinical assessment), and manage by STOPPING/SWITCHING the offending drug where possible (e.g. stop the oral NSAID; for knee osteoarthritis NICE NG226 puts exercise and weight management first, offers a topical NSAID, and advises against routinely offering paracetamol or weak opioids; if an NSAID must continue, lowest effective dose for the shortest time with a PPI, especially with risk factors), a full-dose PPI for 4 weeks or H. pylori test-and-treat (test only after 2 weeks without a PPI and 4 weeks without antibiotics \u2014 NICE CG184), lifestyle advice, and review at about 4 weeks. The skill is recognising the drug cause, reviewing/rationalising medication (not just adding a PPI), red-flag/NICE NG12 screening, and gastroprotection. NICE NG12 upper-GI stated where red flags present.',
    script: {
      opening: '"Since I started those anti-inflammatory tablets for my knees a few weeks ago, I\u2019ve had this burning indigestion and pain in the top of my stomach. Could you give me something for the acid? It\u2019s really uncomfortable."',
      facts: [
        {
          topic: 'The tablets',
          text: 'Naproxen 500 mg twice a day, started 5 weeks ago by a locum for knee osteoarthritis. Helps the knees "a lot". Also takes low-dose aspirin 75 mg "that my old doctor started years ago for my heart, as a precaution" (only if all medicines are listed). Takes the naproxen sometimes on an empty stomach.'
        },
        {
          topic: 'The symptoms',
          text: 'Started within a week of the naproxen. Burning in the top of the stomach, acid coming up, worse after meals and at night.'
        },
        {
          topic: 'Red-flag questions (all negative)',
          text: 'No vomiting, no blood or "coffee grounds", no black or tarry stools, no fainting. Swallowing fine. Weight steady. Not tired or breathless. No lumps.'
        },
        {
          topic: 'Other history',
          text: 'Blood pressure \u2014 amlodipine. No previous ulcers. Never tested for H. pylori. Kidneys "fine last time". No allergies. Non-smoker; a glass of wine most evenings.'
        },
        {
          topic: 'Knees and life',
          text: 'Osteoarthritis in both knees, worse over a year. Lives with husband. Looks after her grandchildren twice a week; walks the dog. "I don\u2019t want to be back where I was, hobbling about."'
        },
        {
          topic: 'How to play it',
          text: 'Friendly, practical. Expect an acid tablet to take with the naproxen: "So can\u2019t I just take an acid tablet with them?" Reluctant to lose the knee benefit; willing to try a gel and physiotherapy if explained. Surprised the aspirin matters.'
        }
      ],
      ice: {
        ideas: '"The tablets are a bit strong for my stomach \u2014 an acid tablet will sort it."',
        concerns: '"I don\u2019t want to stop the knee tablets \u2014 they\u2019re the first thing that\u2019s worked." Quietly worried about an ulcer, as her mother had one that bled.',
        expectations: '"Something for the acid so I can keep taking them."'
      },
      cues: [
        '"Since I started those anti-inflammatory tablets" \u2014 the likely cause.',
        '"Could you give me something for the acid?" \u2014 expectation of a PPI rather than a medication review.',
        '"My old doctor started an aspirin" (if all medicines are asked) \u2014 a second gastrotoxic drug.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises IATROGENIC (drug-induced) dyspepsia \u2014 linking onset to the medication (NSAID most commonly; aspirin/antiplatelets, bisphosphonates, steroids, SSRIs, iron, etc.)'
      },
      {
        dom: 'dg',
        text: 'Screens alarm features \u2014 GI bleeding (same-day hospital assessment, NICE CG141), anaemia, persistent vomiting, epigastric mass \u2014 and NICE NG12 upper-GI RED FLAGS (dysphagia, or age \u226555 with weight loss plus dyspepsia \u2192 suspected cancer pathway referral; age \u226555 with treatment-resistant dyspepsia \u2192 consider non-urgent direct-access endoscopy)'
      },
      {
        dom: 'cm',
        text: 'REVIEWS the medication and STOPS/SWITCHES the culprit where possible (e.g. stop the oral NSAID; topical NSAID and exercise for knee osteoarthritis per NICE NG226; lowest effective dose) \u2014 not reflexively adding a PPI on top'
      },
      {
        dom: 'cm',
        text: 'Provides GASTROPROTECTION (co-prescribe a PPI) only if a culprit (NSAID/antiplatelet) must continue, especially with risk factors, and considers H. pylori test-and-treat (after a 2-week PPI washout)'
      },
      {
        dom: 'cm',
        text: 'Gives lifestyle advice and REVIEWS response, escalating/endoscoping if persistent despite stopping the drug or if red flags emerge, and avoids long-term unreviewed PPIs'
      },
      {
        dom: 'ro',
        text: 'Explains why reviewing the drug (not just an acid tablet) is the right approach, and checks understanding'
      },
      {
        dom: 'ro',
        text: 'Negotiates the medication change with her (stopping or switching the culprit and finding alternative pain relief for her knees) rather than imposing it, and checks she is happy with the new plan'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: red flags warranting a suspected cancer pathway referral or endoscopy under NICE NG12, alternative analgesia for her knees, gastroprotection if needed, H. pylori, and review \u2014 reviewing the medication, not masking with a PPI'
      }
    ],
    worked: [
      {
        lbl: 'Link to the drug',
        txt: '"This indigestion started when you began the anti-inflammatory tablets, and that\u2019s almost certainly the cause \u2014 they\u2019re well known for irritating the stomach. So the best fix isn\u2019t just an acid tablet on top; it\u2019s to deal with the cause."'
      },
      {
        lbl: 'Red-flag screen',
        txt: '"First, a few important checks: any difficulty swallowing, weight loss, black or bloody stools, vomiting, or feeling a lump? \u2026 None. Good \u2014 at your age those would have needed an urgent specialist referral on the suspected cancer pathway, and any bleeding would mean hospital the same day."'
      },
      {
        lbl: 'Stop/switch',
        txt: '"Let\u2019s stop the anti-inflammatory tablets and manage your knees differently \u2014 an anti-inflammatory GEL rubbed on, which is much kinder to the stomach, and exercises to strengthen the thigh muscles, with physio if you\u2019d like. That alone should settle the indigestion, and an acid-reducing tablet for four weeks will help it heal."'
      },
      {
        lbl: 'Gastroprotection if needed',
        txt: '"If you ever genuinely need the tablet form, I\u2019d add a stomach-protecting tablet alongside it, particularly given your age. If it comes back, I might also test for a stomach bug called H. pylori \u2014 that needs two weeks off the acid tablet first."'
      },
      {
        lbl: 'Lifestyle',
        txt: '"Cutting back on things that trigger reflux \u2014 large/late meals, alcohol, smoking \u2014 helps too."'
      },
      {
        lbl: 'Safety-net',
        txt: '"If you vomit blood, pass black, tarry stools or feel faint, go to A&E or call 999 straight away. Come back sooner if you develop trouble swallowing, weight loss or keep vomiting, and otherwise I\u2019ll see you in four weeks \u2014 those need prompt investigation."'
      }
    ],
    learning: 'New DYSPEPSIA temporally linked to a medication change is often IATROGENIC (drug-induced), the commonest culprit being an NSAID, with others including aspirin/antiplatelets, oral bisphosphonates, corticosteroids, SSRIs, iron, calcium-channel blockers, nitrates and theophylline \u2014 so take a history linking onset to the drug. Critically, screen ALARM features that change management: GI bleeding (haematemesis/melaena, faintness or collapse) on an NSAID needs same-day hospital assessment as a possible bleeding ulcer (NICE CG141), not a referral pathway; iron-deficiency anaemia, persistent vomiting or an epigastric mass need clinical assessment; and, per NICE NG12 upper-GI, dysphagia at any age or age \u226555 with weight loss plus upper abdominal pain, reflux or dyspepsia \u2014 which warrants a suspected cancer pathway referral for oesophageal or stomach cancer (this replaced urgent direct-access endoscopy in 2025); age \u226555 with treatment-resistant dyspepsia warrants consideration of non-urgent direct-access endoscopy. The right action is to REVIEW the medication rather than reflexively add acid suppression: where possible stop/switch the culprit (e.g. stop the oral NSAID and use a topical NSAID with exercise and weight management for knee osteoarthritis \u2014 NICE NG226 advises against routinely offering paracetamol; lowest effective dose for the shortest time; reconsider the indication), because masking drug-induced symptoms with a PPI while continuing an ulcerogenic NSAID is poor practice. If an NSAID/antiplatelet must continue, co-prescribe a PPI for GASTROPROTECTION, especially with risk factors (age, previous ulcer/bleed, anticoagulants/steroids/SSRIs, H. pylori), and consider H. pylori test-and-treat (after 2 weeks off a PPI), with lifestyle advice (weight, alcohol, trigger foods, smoking). Manage per NICE CG184 (dyspepsia and GORD in adults), review the response, escalate/endoscope if dyspepsia persists despite stopping the drug or if red flags emerge, and avoid long-term unreviewed PPIs. The skill is recognising the drug cause, reviewing/rationalising medication rather than just adding a PPI, red-flag/NICE NG12 screening, and gastroprotection. NICE NG12 upper-GI applies where red-flag/age criteria are present.',
    knowledge: {
      guideline: 'NICE CG184 GORD and dyspepsia in adults (2014, updated 2019) \u00b7 NICE NG12 Suspected cancer: recognition and referral (2015, last updated 15 April 2026) upper GI \u00b7 NICE NG226 Osteoarthritis (2022) \u00b7 NICE CG141 Acute upper GI bleeding (2012) \u00b7 drug-induced dyspepsia (NSAIDs etc.) \u00b7 review/switch the culprit \u00b7 gastroprotection \u00b7 H. pylori',
      points: [
        {
          h: 'Recognise drug cause',
          t: 'New dyspepsia linked to a medication change \u2014 NSAID most common; also aspirin/antiplatelets, bisphosphonates, steroids, SSRIs, iron, CCBs, nitrates, theophylline.'
        },
        {
          h: 'NICE NG12 red flags',
          t: 'GI bleeding (haematemesis/melaena) \u2192 same-day hospital (NICE CG141); anaemia, persistent vomiting or epigastric mass \u2192 clinical assessment; dysphagia, or age \u226555 with weight loss plus dyspepsia \u2192 suspected cancer pathway referral (NICE NG12); age \u226555 treatment-resistant dyspepsia \u2192 consider non-urgent endoscopy.'
        },
        {
          h: 'Review, don\u2019t just add PPI',
          t: 'Stop/switch the culprit where possible (stop oral NSAID; topical NSAID and exercise for knee OA per NICE NG226; lowest effective dose). Don\u2019t mask with a PPI while continuing the cause.'
        },
        {
          h: 'Gastroprotection',
          t: 'If an NSAID/antiplatelet must continue, co-prescribe a PPI, especially with risk factors (age, previous ulcer/bleed, anticoagulants/steroids/SSRIs).'
        },
        {
          h: 'H. pylori',
          t: 'Full-dose PPI for 4 weeks or H. pylori test-and-treat (NICE CG184); test only after 2 weeks off a PPI and 4 weeks off antibiotics.'
        },
        {
          h: 'Lifestyle & review',
          t: 'Weight, alcohol, trigger foods, smoking; review response; escalate/endoscope if persistent or red flags; avoid long-term unreviewed PPIs.'
        },
        {
          h: 'Never do',
          t: 'Never just add a PPI on top of an ongoing NSAID; never skip the NICE NG12 red-flag screen; never continue an unnecessary culprit drug; never leave PPIs unreviewed.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Suspected cancer pathway referral or endoscopy per NICE NG12 for red flags; alternative analgesia; gastroprotection if needed; H. pylori; review.'
        }
      ]
    }
  };

  /* ===== 284. Iatrogenic fracture / steroid-induced osteoporosis ===== */
  const c284 = {
    id: 'steroid-fracture-osteoporosis',
    title: '"I\u2019ve fractured my spine from almost nothing \u2014 and I\u2019ve been on steroids for my arthritis for years. Could the tablets have caused it?"',
    type: 'video',
    duration: 12,
    meta: {
      age: 68,
      sex: 'F',
      setting: 'Video consultation \u2014 a fragility fracture on long-term steroids',
      system: 'Rheumatology / Bone health \u2014 glucocorticoid-induced osteoporosis & the fragility fracture',
      checked: 'October 2026'
    },
    brief: 'Mrs Pauline Hart, 68, on oral PREDNISolone for about 2 years for POLYMYALGIA RHEUMATICA (current dose not stated \u2014 check the record), has sustained a low-trauma VERTEBRAL (fragility) fracture and asks if the steroids caused it. The task is to recognise GLUCOCORTICOID-INDUCED OSTEOPOROSIS and the IATROGENIC (steroid-induced) FRAGILITY FRACTURE: confirm a FRAGILITY FRACTURE (low-trauma, e.g. from standing height or less \u2014 itself diagnostic of osteoporosis and a marker of high future fracture risk), recognise that long-term/high-dose glucocorticoids markedly raise fracture risk (often before/independent of DEXA), and that BONE PROTECTION should ideally have been started (NOGG 2021, updated 2024: postmenopausal women and men 50 and over starting prednisolone 7.5 mg or more daily for 3 months or more should start bone protection at the same time, without waiting for DXA) \u2014 so initiate it now: assess fracture risk (FRAX \u00b1 DXA as a baseline, which must not delay treatment), and START a BISPHOSPHONATE (alendronate or risedronate; IV zoledronate if oral unsuitable) with calcium/vitamin D, after checking calcium, vitamin D, renal function and dental health (BNF), counsel bisphosphonate administration/cautions, review the STEROID (lowest effective dose; methotrexate as a steroid-sparing option usually agreed with rheumatology, EULAR/ACR 2015 PMR, international; NEVER stop it abruptly because of adrenal suppression, and issue a steroid emergency card, NatPSA/2020/005), address falls, lifestyle (weight-bearing exercise, smoking, alcohol, calcium/vitamin D), falls assessment (NICE NG249), and analgesia for the fracture; check bloods for secondary causes including a MYELOMA screen (NICE NG12 1.10.4: at 60 and over with unexplained fracture or back pain, offer FBC, calcium, ESR or plasma viscosity, serum protein electrophoresis and serum free light chains); safety-net for cord compression (new leg weakness or numbness, bladder or bowel problems \u2192 999/A&E); honestly acknowledge the iatrogenic link (professional duty of candour, GMC/NMC 2015, updated 2022: say what should have happened, apologise, explain, record, consider a significant event review) without blame, and ensure future bone monitoring. The skill is recognising the fragility fracture/steroid link, instituting bone protection (bisphosphonate + Ca/vit D), reviewing the steroid, and honest communication. NICE NG12 does apply: myeloma tests at 60 and over with an unexplained fracture or back pain (1.10.4); also consider metastasis in vertebral fractures with red flags.',
    script: {
      opening: '"I\u2019ve cracked a bone in my back just from a little stumble \u2014 the X-ray showed a fracture in my spine. I\u2019ve been on steroid tablets for my polymyalgia for a couple of years. My daughter said steroids weaken bones \u2014 is that why this happened? Should I have been protected?"',
      facts: [
        {
          topic: 'The fracture',
          text: 'Stumbled on the rug at home 3 weeks ago and sat down hard; sudden mid-back pain. X-ray last week: "a crush fracture in the middle of my back". Pain sore getting out of a chair, "managing" with paracetamol. No leg weakness, numbness, or bladder/bowel problems.'
        },
        {
          topic: 'The steroids',
          text: 'Prednisolone for polymyalgia for 2 years; started on 15 mg, "gone up and down", currently 7.5 mg. "I\u2019d have to check the box." Has tried to come down below 5 mg twice and her shoulders "seized up". Never given a steroid card.'
        },
        {
          topic: 'Bone protection',
          text: '"No, never. That\u2019s what\u2019s bothering me." Never had a bone scan. Not on calcium or vitamin D. No one mentioned it.'
        },
        {
          topic: 'Other history (if asked)',
          text: 'Menopause at 47. Mother broke her hip at 75. No previous fractures. No kidney problems. Teeth: has a loose molar and is seeing the dentist next month. Heartburn occasionally. No weight loss, no bone pain elsewhere, no night sweats, not unusually tired.'
        },
        {
          topic: 'Lifestyle',
          text: 'BMI 22. Ex-smoker (stopped 20 years ago). 1\u20132 glasses of wine a week. Walks to the shops. One other fall last year in the garden.'
        },
        {
          topic: 'Social',
          text: 'Widowed; lives alone in a house with stairs. Daughter, Sue, a nurse, lives nearby.'
        },
        {
          topic: 'How to play it',
          text: 'Calm, direct, a little hurt. You want an honest answer. Respond warmly if the doctor is straightforward and apologetic where appropriate: "Thank you for being straight with me." If the doctor is defensive, become cooler. Ask how to take the bone tablet and whether you should stop going out.'
        }
      ],
      ice: {
        ideas: '"My daughter says the steroids weakened my bones."',
        concerns: 'HIDDEN AGENDA \u2014 "That it\u2019ll happen again, and that I should have been told." She is also afraid of having to stop the steroids, because her shoulders were "awful" before.',
        expectations: '"An honest answer, and to be put right."'
      },
      cues: [
        '"Should I have been protected?" \u2014 honest, candour-style answer.',
        '"I don\u2019t want to give up the steroids" \u2014 the steroid must not be stopped abruptly; plan a review.',
        '"I see the dentist next month" (if asked) \u2014 dental check before a bisphosphonate.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises a low-trauma FRAGILITY FRACTURE as diagnostic of OSTEOPOROSIS and a marker of high future fracture risk'
      },
      {
        dom: 'dg',
        text: 'Recognises GLUCOCORTICOID-INDUCED OSTEOPOROSIS \u2014 that long-term/high-dose steroids markedly raise fracture risk (often before DEXA changes) \u2014 and that bone protection should have been started alongside the steroid (NOGG 7.5 mg for 3 months or more threshold), checking her current dose'
      },
      {
        dom: 'dg',
        text: 'Assesses fracture risk (FRAX \u00b1 DEXA) and STARTS bone protection now \u2014 a BISPHOSPHONATE with calcium/vitamin D \u2014 without waiting for DXA given the fragility fracture/steroid, after checking calcium, vitamin D, renal function and dental health, counselling administration/cautions'
      },
      {
        dom: 'cm',
        text: 'Reviews the GLUCOCORTICOID (lowest effective dose, planned taper, steroid-sparing agents/rheumatology review) to reduce ongoing harm, warning never to stop it abruptly and issuing a steroid emergency card'
      },
      {
        dom: 'cm',
        text: 'Addresses FALLS risk, lifestyle (weight-bearing exercise, smoking, alcohol, calcium/vitamin D) and fracture care, and checks other vertebral-fracture causes (myeloma screen per NICE NG12 1.10.4; metastasis if red flags), with a cord-compression safety-net'
      },
      {
        dom: 'ro',
        text: 'Communicates HONESTLY and openly (candour-style) that steroids contributed and protection is needed, without blame, apologising appropriately if protection was missed, and checks understanding'
      },
      {
        dom: 'ro',
        text: 'Explores her worry about further fractures and her confidence about staying on the steroid, and shares the decision about starting bone protection and adjusting the dose'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: bone protection started and monitored, steroid review/taper, falls/lifestyle, fracture care, future bone monitoring, and honest follow-up \u2014 instituting protection and reviewing the steroid, not just treating the fracture'
      }
    ],
    worked: [
      {
        lbl: 'Answer honestly',
        txt: '"Your daughter\u2019s right to flag it, and I\u2019ll be straight with you: long-term steroids do weaken bones, and they\u2019re very likely a major reason this fracture happened. A fracture from a small stumble like this is itself a sign of osteoporosis."'
      },
      {
        lbl: 'Open about protection',
        txt: '"You ask a fair question \u2014 ideally, bone-protecting treatment is started alongside long-term steroids. If that wasn\u2019t put in place, I\u2019m sorry, and the important thing now is to put it right straight away."'
      },
      {
        lbl: 'Start protection',
        txt: '"So I\u2019m going to start you on a bone-strengthening tablet \u2014 a bisphosphonate like alendronate \u2014 with calcium and vitamin D. Given the fracture and the steroids, we don\u2019t need to wait for a bone-density scan to begin. I\u2019ll check your calcium, vitamin D and kidneys first, and please see your dentist for a check-up. I\u2019ll explain how to take it (first thing, with a full glass of plain water, staying upright, before food)."'
      },
      {
        lbl: 'Review the steroid',
        txt: '"We\u2019ll also review your steroids \u2014 getting you onto the lowest dose that controls your polymyalgia, and considering with the rheumatology team whether a steroid-sparing medicine could reduce how much you need. Less steroid means kinder bones \u2014 but please don\u2019t stop them suddenly, as your body relies on them now, and I\u2019ll give you a steroid emergency card."'
      },
      {
        lbl: 'Falls + lifestyle',
        txt: '"Let\u2019s also look at preventing falls, and weight-bearing exercise, stopping smoking and easing alcohol all help your bones, alongside managing the back pain."'
      },
      {
        lbl: 'Safety-net',
        txt: '"I\u2019ll arrange follow-up, a bone scan as a baseline, and blood tests including a screen for other causes of a spinal fracture. Call 999 or go to A&E if you get new leg weakness or numbness, or problems with your bladder or bowels. Come back sooner if the pain is severe or you develop new symptoms like weight loss \u2014 occasionally spine fractures need further investigation."'
      }
    ],
    learning: 'A LOW-TRAUMA (fragility) fracture \u2014 from standing height or less \u2014 is itself diagnostic of OSTEOPOROSIS and a strong marker of high future fracture risk, and a vertebral fragility fracture is significant. Long-term/high-dose oral GLUCOCORTICOIDS markedly increase fracture risk rapidly (often before DEXA changes), causing GLUCOCORTICOID-INDUCED OSTEOPOROSIS \u2014 so bone protection should ideally have been started with the steroid (NOGG: prednisolone 7.5 mg or more daily for 3 months or more), and steroids are very likely a major contributor here, which should be acknowledged honestly. Assess fracture risk (FRAX \u00b1 DEXA), but in a patient on long-term steroids with a fragility fracture START bone protection now \u2014 a BISPHOSPHONATE (e.g. alendronate) with calcium/vitamin D \u2014 without waiting for DXA, because a fragility fracture on long-term steroids is itself a treatment indication; check calcium, vitamin D, renal function and dental health first; counsel bisphosphonate administration (upright, with water, before food, oesophageal cautions) and monitoring. Review the glucocorticoid (lowest effective dose, planned taper where possible, steroid-sparing agents/rheumatology review) to reduce ongoing bone and other harm \u2014 never stopping it abruptly, and issuing a steroid emergency card (NatPSA/2020/005). Address falls risk (assessment/prevention), lifestyle (weight-bearing exercise, smoking, alcohol, adequate calcium/vitamin D) and fracture care (analgesia, mobilisation, physiotherapy), and check for other causes of vertebral fracture \u2014 NICE NG12 1.10.4 myeloma tests at 60 and over with unexplained fracture or back pain (FBC, calcium, ESR or plasma viscosity, serum protein electrophoresis, serum free light chains), metastasis if red flags \u2014 with a cord-compression safety-net. Communicate honestly and openly (a candour-style, non-defensive acknowledgement that steroids contributed and bone protection is now needed) without blame, apologising appropriately if protection was missed, and focus on putting it right with future bone monitoring. NICE NG12 myeloma testing (1.10.4) applies at her age with an unexplained fracture.',
    knowledge: {
      guideline: 'NOGG osteoporosis guideline (2021, updated 2024) \u00b7 NICE NG12 Suspected cancer: recognition and referral (2015, last updated 15 April 2026) myeloma 1.10.4 \u00b7 NICE NG259 osteoporosis: risk assessment (July 2026; replaced CG146) \u00b7 NICE NG249 Falls (2025) \u00b7 NatPSA/2020/005 steroid emergency card \u00b7 EULAR/ACR 2015 PMR (international) \u00b7 GMC/NMC duty of candour (2015, updated 2022) \u00b7 glucocorticoid-induced osteoporosis: start bisphosphonate + Ca/vit D without DXA \u00b7 review steroid \u00b7 candour',
      points: [
        {
          h: 'Fragility fracture',
          t: 'Low-trauma fracture (standing height or less) is diagnostic of osteoporosis and a marker of high future fracture risk.'
        },
        {
          h: 'Steroid link',
          t: 'Long-term/high-dose glucocorticoids markedly raise fracture risk (often before DEXA changes) \u2014 glucocorticoid-induced osteoporosis. NOGG: 7.5 mg or more for 3 months or more \u2192 bone protection from the start. Acknowledge honestly.'
        },
        {
          h: 'Start bone protection',
          t: 'Assess FRAX \u00b1 DXA, but start a bisphosphonate (alendronate) + calcium/vitamin D now \u2014 without waiting for DXA given fragility fracture/steroid. Check calcium, vitamin D, renal function, dental health first. Counsel administration/cautions.'
        },
        {
          h: 'Review the steroid',
          t: 'Lowest effective dose, planned taper, steroid-sparing agents (methotrexate)/rheumatology review; never stop abruptly; steroid emergency card.'
        },
        {
          h: 'Falls/lifestyle/fracture care',
          t: 'Falls assessment/prevention (NICE NG249); weight-bearing exercise, smoking/alcohol, calcium/vitamin D; analgesia/physiotherapy. Myeloma screen at 60+ (NICE NG12 1.10.4); metastasis if red flags.'
        },
        {
          h: 'Honest communication',
          t: 'Candour-style, non-defensive acknowledgement that steroids contributed and protection is needed; apologise appropriately if missed; focus on putting it right.'
        },
        {
          h: 'Never do',
          t: 'Never treat a fragility fracture as a simple injury; never delay bone protection waiting for DEXA in a steroid/fragility-fracture patient; never leave the steroid unreviewed; never be defensive/blaming.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Bone protection started + monitored; steroid review/taper; falls/lifestyle; future bone monitoring; myeloma screen; cord compression \u2192 999; review in two weeks with results.'
        }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c281, c282, c283, c284);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {
    'familial-adenomatous-polyposis': {
      ceg: ['Long-term conditions & cancer', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Daniel Frost',
        age: '22 years \u00b7 male',
        pmh: [
          'Father died of bowel cancer early 40s; other relatives young CRC; told hereditary',
          'Asymptomatic; anxious',
          '?FAP/Lynch/MUTYH \u2014 priority clinical genetics referral'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"My dad died young of bowel cancer and they said it runs in the family \u2014 do I need testing? I\u2019m only 22."',
        reason: 'Video consultation \u2014 strong family bowel-cancer history.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Recognise',
          d: 'Strong early-onset hereditary CRC family history \u2192 FAP/Lynch/MUTYH; priority genetics referral.'
        },
        {
          t: '2\u20105',
          h: 'Inheritance',
          d: 'FAP autosomal dominant (APC), 50% to offspring, hundreds of polyps, near-100% lifetime risk.'
        },
        {
          t: '5\u20107',
          h: 'Testing/referral',
          d: 'Presymptomatic genetic testing (known mutation) via clinical genetics; his choice.'
        },
        {
          t: '7\u20109',
          h: 'Surveillance',
          d: 'Colonoscopy from 12\u201314, prophylactic colectomy, upper-GI surveillance \u2014 life-saving; none yet at 22.'
        },
        {
          t: '9\u201012',
          h: 'Lynch + symptoms',
          d: 'Distinguish Lynch (endometrial/other); NICE NG12 if bowel symptoms; support.'
        }
      ],
      wordPics: {
        fail: 'Dismisses the family history or fails to refer genetics; confuses with an inappropriate suspected cancer pathway referral in an asymptomatic patient; no surveillance explanation.',
        pass: 'Recognises the inherited syndrome, explains inheritance/testing, and refers to clinical genetics.',
        exc: 'Recognises a likely inherited CRC syndrome, explains FAP inheritance and presymptomatic testing, outlines life-saving surveillance/colectomy, distinguishes Lynch, refers to clinical genetics, and supports the patient (NICE NG12 only if symptomatic).'
      },
      avoid: [
        {
          dont: '"You\u2019re young and well \u2014 don\u2019t worry about it."',
          instead: '"A strong young-onset family history needs genetics referral \u2014 finding it early lets us prevent the cancer."',
          why: 'Dismissing inherited risk misses life-saving surveillance.'
        },
        {
          dont: '(Inappropriate urgent referral) referring an asymptomatic patient on the suspected cancer pathway.',
          instead: '"This is a genetics/screening pathway, not an urgent cancer referral \u2014 unless you have bowel symptoms."',
          why: 'Asymptomatic inherited risk uses genetics, not a NICE NG12 suspected cancer pathway referral.'
        },
        {
          dont: '(Coercing) pushing him to be tested.',
          instead: '"Testing is your choice \u2014 the genetics team will help you decide."',
          why: 'Respect autonomy/right to know or not.'
        }
      ]
    },
    'cll-lymphocytosis': {
      ceg: ['Long-term conditions & cancer', 'Investigations & results'],
      stem: {
        name: 'Edward Ross',
        age: '69 years \u00b7 male',
        pmh: [
          'Incidental isolated lymphocytosis on routine FBC; flow suggests CLL',
          'Asymptomatic; frightened by "leukaemia"',
          'No B symptoms/lymphadenopathy'
        ],
        meds: ['Amlodipine'],
        allergy: 'NKDA',
        recent: '"My blood test showed raised lymphocytes and the word \u2018leukaemia\u2019 \u2014 I\u2019m terrified, but I feel well." Pre-operative assessment clinic letter, 2 weeks ago (planned inguinal hernia repair): well; no palpable lymph nodes, liver or spleen; observations normal. FBC: lymphocytes 11.2 \u00d7 10\u2079/L, Hb 141 g/L, platelets 210 \u00d7 10\u2079/L, neutrophils normal; film and flow cytometry suggest CLL.',
        reason: 'Video consultation \u2014 explaining an incidental lymphocytosis.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Acknowledge fear',
          d: 'The word "leukaemia" is terrifying; explain calmly and honestly.'
        },
        {
          t: '2\u20105',
          h: 'Recognise CLL',
          d: 'Incidental mature lymphocytosis in an older adult = commonly CLL (flow cytometry); often indolent.'
        },
        {
          t: '5\u20107',
          h: 'Assess + refer',
          d: 'Lymphadenopathy/organomegaly/B symptoms/cytopenias; refer haematology for staging (local pathway; faster if features).'
        },
        {
          t: '7\u20109',
          h: 'Watch and wait',
          d: 'Many early-stage need no treatment for years; near-normal life expectancy; treat only if progressive.'
        },
        {
          t: '9\u201012',
          h: 'Infection + support',
          d: 'Vaccines (incl. Shingrix eligibility, no live vaccines), prompt infection treatment, sun protection; what to report; support patient/family.'
        }
      ],
      wordPics: {
        fail: 'Either alarms (implies imminent death) or minimises ("it\u2019s nothing"); does not refer to haematology; omits infection counselling.',
        pass: 'Recognises incidental CLL, refers haematology, and explains watch-and-wait with calibrated reassurance.',
        exc: 'Recognises incidental CLL, assesses features, refers haematology, explains watch-and-wait honestly with calibrated reassurance, counsels infection risk, and supports the patient and family.'
      },
      avoid: [
        {
          dont: '"I\u2019m afraid leukaemia is very serious." (over-alarming)',
          instead: '"It\u2019s a cancer, yes, but often very slow-growing \u2014 many people never need treatment and live a normal lifespan."',
          why: 'Over-alarming an indolent incidental CLL causes needless distress.'
        },
        {
          dont: '"It\u2019s nothing to worry about." (minimising)',
          instead: '"It\u2019s real and we\u2019ll involve the specialists \u2014 but the outlook is often very reassuring."',
          why: 'Minimising is dishonest and undermines trust.'
        },
        {
          dont: '(No infection advice) omitting vaccination/infection counselling.',
          instead: '"CLL can lower your defences \u2014 keep vaccines up to date, avoid live vaccines, and see us promptly with infections."',
          why: 'Infection risk is an important, modifiable harm in CLL.'
        }
      ]
    },
    'iatrogenic-dyspepsia': {
      ceg: ['Prescribing & pharmacology', 'Long-term conditions & cancer'],
      stem: {
        name: 'Carol Devine',
        age: '63 years \u00b7 female',
        pmh: [
          'New epigastric burning/pain since starting an NSAID for knee pain (diagnosis not coded)',
          'No alarm features volunteered',
          'Wants "something for the acid"'
        ],
        meds: ['Oral NSAID, started a few weeks ago (drug and dose to confirm)', 'Amlodipine'],
        allergy: 'NKDA',
        recent: '"Burning indigestion and stomach pain since starting my new tablets \u2014 do I just need something for the acid?"',
        reason: 'Video consultation \u2014 new dyspepsia after a medication change.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Link to the drug',
          d: 'New dyspepsia after starting an NSAID = drug-induced; review the medication, don\u2019t just add a PPI.'
        },
        {
          t: '2\u20105',
          h: 'NICE NG12 red flags',
          d: 'GI bleeding \u2192 same-day hospital; anaemia/vomiting/mass \u2192 assess; dysphagia, or \u226555 with weight loss plus dyspepsia \u2192 suspected cancer pathway; \u226555 treatment-resistant \u2192 non-urgent endoscopy.'
        },
        {
          t: '5\u20107',
          h: 'Stop/switch',
          d: 'Stop oral NSAID; topical NSAID + exercise (NICE NG226); lowest effective dose.'
        },
        {
          t: '7\u20109',
          h: 'Gastroprotection/H. pylori',
          d: 'PPI only if a culprit must continue (risk factors); consider H. pylori test-and-treat after 2 weeks off PPI.'
        },
        {
          t: '9\u201012',
          h: 'Lifestyle + review',
          d: 'Weight/alcohol/triggers; review; escalate/endoscope if persistent or red flags.'
        }
      ],
      wordPics: {
        fail: 'Adds a PPI on top of the ongoing NSAID without reviewing it; skips the NICE NG12 red-flag screen; no medication rationalisation.',
        pass: 'Recognises drug-induced dyspepsia, screens red flags, and stops/switches the NSAID with gastroprotection if needed.',
        exc: 'Recognises NSAID-induced dyspepsia, screens NICE NG12 red flags, stops/switches the NSAID (topical NSAID, exercise), gastroprotects only if a culprit must continue, considers H. pylori, gives lifestyle advice, and reviews.'
      },
      avoid: [
        {
          dont: '"Here\u2019s a PPI for the acid \u2014 keep taking your anti-inflammatory."',
          instead: '"Let\u2019s stop the anti-inflammatory that\u2019s causing it and manage your knees differently, rather than just masking it."',
          why: 'Masking with a PPI while continuing the NSAID is poor practice.'
        },
        {
          dont: '(No red-flag screen) treating without screening.',
          instead: '"Any difficulty swallowing, weight loss, black stools or vomiting? At your age weight loss with indigestion, or any swallowing trouble, needs a suspected cancer pathway referral."',
          why: 'NICE NG12 upper-GI red flags must be screened (esp. age \u226555).'
        },
        {
          dont: '(Long-term PPI) leaving it unreviewed.',
          instead: '"If you need a stomach protector, we\u2019ll review it rather than leave it indefinitely."',
          why: 'Avoid long-term unreviewed PPIs.'
        }
      ]
    },
    'steroid-fracture-osteoporosis': {
      ceg: ['Prescribing & pharmacology', 'Older adults'],
      stem: {
        name: 'Pauline Hart',
        age: '68 years \u00b7 female',
        pmh: [
          'Low-trauma vertebral fragility fracture',
          'Oral prednisolone about 2 years for polymyalgia rheumatica \u2014 no bone protection recorded',
          'Asks if steroids caused it'
        ],
        meds: ['Prednisolone (long-term; current dose not stated)'],
        allergy: 'NKDA',
        recent: '"I\u2019ve fractured my spine from almost nothing \u2014 and I\u2019ve been on steroids for years. Could the tablets have caused it?"',
        reason: 'Video consultation \u2014 fragility fracture on long-term steroids.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Recognise',
          d: 'Low-trauma fracture = osteoporosis; long-term steroids = glucocorticoid-induced osteoporosis.'
        },
        {
          t: '2\u20104',
          h: 'Honest answer',
          d: 'Candour-style: steroids likely contributed; protection should have been considered \u2014 put it right.'
        },
        {
          t: '4\u20107',
          h: 'Start protection',
          d: 'FRAX \u00b1 DXA but start bisphosphonate + Ca/vit D now (without waiting for DXA); pre-checks; counsel administration.'
        },
        {
          t: '7\u20109',
          h: 'Review steroid',
          d: 'Lowest effective dose, planned taper, steroid-sparing/rheumatology; never stop abruptly; emergency card.'
        },
        {
          t: '9\u201012',
          h: 'Falls/lifestyle + safety-net',
          d: 'Falls prevention, weight-bearing exercise, Ca/vit D; myeloma screen (NICE NG12 1.10.4); cord safety-net; monitor.'
        }
      ],
      wordPics: {
        fail: 'Treats the fracture as a simple injury; doesn\u2019t start bone protection or review the steroid; is defensive/blaming or denies the steroid link.',
        pass: 'Recognises glucocorticoid-induced osteoporosis, starts bone protection and reviews the steroid, with honest communication.',
        exc: 'Recognises the fragility fracture/steroid link, starts bone protection (bisphosphonate + Ca/vit D, often without DEXA), reviews/tapers the steroid, addresses falls/lifestyle, screens for myeloma and other causes, and communicates honestly (candour-style).'
      },
      avoid: [
        {
          dont: '(Denying) "The steroids probably had nothing to do with it."',
          instead: '"I\u2019ll be honest \u2014 long-term steroids weaken bones and very likely contributed; let\u2019s protect them now."',
          why: 'Denying the iatrogenic link is dishonest and misses bone protection.'
        },
        {
          dont: '(Waiting for DEXA) delaying treatment.',
          instead: '"Given the fracture and the steroids, we start bone protection now \u2014 we don\u2019t need to wait for a scan."',
          why: 'A fragility fracture on steroids is itself a treatment indication.'
        },
        {
          dont: '(Ignoring the steroid) treating bones without reviewing the steroid.',
          instead: '"We\u2019ll also get you on the lowest steroid dose and consider a steroid-sparing option."',
          why: 'Reducing steroid exposure treats the cause.'
        }
      ]
    }
  });

})();
