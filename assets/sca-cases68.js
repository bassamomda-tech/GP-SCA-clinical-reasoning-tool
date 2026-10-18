/* ============================================================
   Reasoning GP — Case Library batch 68:
   "Dermatology you must name correctly" (NEW themes, verified absent)
   Lichen planus (the 6 Ps + oral/mucosal & malignancy note);
   pityriasis rosea (herald patch + Christmas-tree, reassure +
   syphilis caveat); molluscum contagiosum (children, self-limiting,
   no harsh treatment); head lice (detection combing, treat only if
   live lice). No NG12 cancer pathway applies. Load AFTER sca-cases67.js.
   ============================================================ */
(function(){

  /* ===== 244. Lichen planus ===== */
  const c244 = {
    id: 'lichen-planus',
    title: '"I\u2019ve got these intensely itchy purple bumps on my wrists, and now sore white streaks inside my mouth"',
    type: 'video',
    duration: 12,
    meta: {
      age: 49,
      sex: 'F',
      setting: 'Video consultation, with the skin and mouth examination arranged face to face \u2014 an itchy violaceous rash with oral changes.',
      system: 'Dermatology \u2014 lichen planus: recognition, the 6 Ps & mucosal/malignancy notes',
      checked: 'October 2026'
    },
    brief: 'Mrs Diane Forsyth, 49, has very itchy, flat-topped, violaceous (purple) papules on the flexor wrists and shins with fine white lines on the surface (Wickham striae), plus sore white lacy streaks on the buccal mucosa; she may have nail changes/scalp involvement. Recognise LICHEN PLANUS \u2014 the classic "6 Ps" (Pruritic, Planar/flat-topped, Polygonal, Purple/violaceous, Papules/Plaques, with Wickham striae), favouring flexor wrists/ankles/shins, often with ORAL (white lacy/reticular) and sometimes nail/scalp/genital involvement; consider triggers (drug-induced lichenoid eruptions \u2014 review her bendroflumethiazide and all medicines; the hepatitis C association, which applies to some ORAL lichen planus \u2014 test with consent), manage (potent or very potent topical steroids first-line, BAD/PCDS; oral/severe disease needs specialist input), counsel it is usually self-limiting over months to a year or two but can recur, and note that ORAL lichen planus carries about a 1% risk of cancerous change over 10 years (BAD) needing long-term dental/oral medicine review, and erosive genital disease needs specialist follow-up; know the NICE NG12 oral criteria (suspected cancer pathway referral for unexplained oral ulceration lasting more than 3 weeks; urgent dental referral for a lump, or a red or red and white patch consistent with erythroplakia or erythroleukoplakia). Reassure and manage the itch; refer if diagnostic doubt, severe, erosive or nail/scalp scarring. The skin and mouth need a face-to-face examination.',
    script: {
      opening: '"Doctor, I\u2019ve had these really itchy purple bumps come up on the insides of my wrists and my shins \u2014 they\u2019ve got tiny white lines on them. And now the inside of my cheeks has gone sore with white lacy streaks. What is this, and is it serious?"',
      facts: [
        {
          topic: 'The skin',
          text: 'About 6 weeks. Small flat-topped shiny purple bumps on the inner wrists and both shins; some have joined into patches. Fine white lines on top. New ones came up along a scratch on her arm. The itch is intense, worst at night. Will show the wrists to the camera.'
        },
        {
          topic: 'The mouth',
          text: 'Inside of both cheeks sore for about 3 weeks, especially with spicy food or tomatoes. White lacy streaks she has seen in the mirror. No ulcer that hasn\u2019t healed, no lump, no red patches she has noticed. Teeth fine; sees the dentist yearly.'
        },
        {
          topic: 'Other sites (if asked)',
          text: 'Nails: "a couple look ridged". Scalp fine, no hair loss. Some itching and soreness "down below" \u2014 only if asked directly and sensitively.'
        },
        {
          topic: 'Medicines',
          text: 'Bendroflumethiazide 2.5 mg for blood pressure for 2 years \u2014 "nothing new". Occasional ibuprofen. No allergies.'
        },
        {
          topic: 'Health and risk factors',
          text: 'Generally well, no fevers. No liver problems known. No tattoos, never injected drugs, no blood transfusions. Non-smoker; drinks a glass or two of wine at weekends.'
        },
        {
          topic: 'Social',
          text: 'Works as a legal secretary. Married, two teenage children. Worried about passing it on to the family.'
        },
        {
          topic: 'How to play it',
          text: 'Calm but worried, scratching your wrists during the call. Ask whether it is catching and whether a strong steroid is safe. Be relieved by a clear name and explanation; promise to see the dentist if advised.'
        }
      ],
      ice: {
        ideas: '"I wondered if it was something catching \u2014 or an allergy."',
        concerns: '"Because it\u2019s in my mouth too, I\u2019m scared it\u2019s something serious \u2014 my friend had mouth cancer." The itch is ruining her sleep.',
        expectations: '"Know what it is and stop the itching."'
      },
      cues: [
        '"The itch is intense" \u2014 impact on sleep; needs effective treatment.',
        '"It\u2019s in my mouth too \u2014 is it serious?" \u2014 fear of cancer and the need for long-term mouth checks.',
        '"Blood pressure tablet for a couple of years" (if medicines are asked) \u2014 a possible drug trigger.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises LICHEN PLANUS from the 6 Ps (pruritic, planar, polygonal, purple papules) with Wickham striae on flexor wrists/ankles/shins'
      },
      {
        dom: 'dg',
        text: 'Looks for ORAL (white lacy/reticular, sometimes erosive) and nail/scalp/genital involvement and the Koebner phenomenon'
      },
      {
        dom: 'dg',
        text: 'Considers a drug-induced LICHENOID eruption (reviews medications) and the hepatitis C association with oral lichen planus'
      },
      {
        dom: 'cm',
        text: 'Manages with POTENT TOPICAL CORTICOSTEROIDS first-line (+ antihistamines/emollients; topical steroids for oral LP) and refers dermatology for extensive/erosive/nail-scalp-scarring/refractory disease'
      },
      {
        dom: 'cm',
        text: 'Counsels the usually self-limiting course and notes the SMALL malignant-transformation (SCC) risk of ORAL LP (about 1% over 10 years, BAD) and erosive genital LP, arranging monitoring/dental review and knowing the NICE NG12 oral criteria'
      },
      {
        dom: 'ro',
        text: 'Reassures appropriately (not serious/not contagious), addresses the itch and the sore mouth, and checks understanding'
      },
      {
        dom: 'ro',
        text: 'Explains the diagnosis and plan accessibly without over-alarming about the malignancy note'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: review of itch/response, long-term dental/specialist monitoring for the oral disease (about 1% risk over 10 years), drug/hep C review, and when to return \u2014 correct naming + treatment + appropriate monitoring'
      }
    ],
    worked: [
      {
        lbl: 'Name it',
        txt: '(After seeing the skin and mouth in person.) "This is lichen planus \u2014 the itchy, flat-topped purple bumps with those fine white lines, and the lacy white streaks in your mouth, are typical. It\u2019s not cancer and it\u2019s not contagious, so let me reassure you on that."'
      },
      {
        lbl: 'Treat the itch',
        txt: '"For the bumps, a strong steroid cream usually settles them and the itch, plus an antihistamine and good moisturiser. For your mouth, a steroid mouthwash or paste and gentle oral care help."'
      },
      {
        lbl: 'Review triggers',
        txt: '"Let me check your medicines, as a few tablets can trigger a similar rash \u2014 including your water tablet \u2014 and, if you agree, I\u2019ll arrange a blood test for hepatitis C, which is occasionally linked to lichen planus in the mouth."'
      },
      {
        lbl: 'Course',
        txt: '"The skin version usually fades over months \u2014 sometimes leaving a brownish mark for a while \u2014 and can occasionally come back. The mouth type can be more persistent."'
      },
      {
        lbl: 'The mouth note',
        txt: '"One reason I want to keep an eye on the mouth: lichen planus there carries a small risk of changing over time \u2014 about 1 in 100 over ten years \u2014 so I\u2019d like your dentist to review it regularly, and any ulcer lasting more than three weeks or a red patch needs checking quickly. Nothing to panic about, just sensible monitoring."'
      },
      {
        lbl: 'Safety-net',
        txt: '"Come back if it spreads a lot, the mouth becomes very sore or ulcerated, your nails or scalp get involved, or it\u2019s not settling \u2014 then I\u2019d involve a skin specialist."'
      }
    ],
    learning: 'LICHEN PLANUS is recognised by the classic "6 Ps" \u2014 PRURITIC, PLANAR (flat-topped), POLYGONAL, PURPLE/violaceous PAPULES/plaques \u2014 with fine white surface lines (WICKHAM STRIAE), favouring the flexor wrists, ankles and shins, and often with ORAL involvement (white lacy/reticular, sometimes erosive streaks) and sometimes nail (ridging/pterygium), SCALP (scarring alopecia/lichen planopilaris) and GENITAL disease, with Koebner phenomenon at trauma sites. Consider a drug-induced LICHENOID eruption (thiazides, antimalarials, beta-blockers, ACE inhibitors, NSAIDs \u2014 review medications) and the recognised association of oral lichen planus with HEPATITIS C. Manage cutaneous LP with POTENT (or very potent) TOPICAL CORTICOSTEROIDS first-line (BAD 2024; PCDS) plus antihistamines/emollients for itch, and oral LP with topical steroids and oral hygiene; refer to dermatology for extensive, erosive, nail/scalp-scarring or refractory disease. Counsel that cutaneous lichen planus is usually SELF-LIMITING over months to ~1\u20132 years (may leave post-inflammatory pigmentation) but can recur, and note that ORAL lichen planus carries a SMALL risk of malignant transformation (SCC) \u2014 about 1% over 10 years (BAD) \u2014 and erosive genital disease also needs follow-up, warranting monitoring and dental/specialist review; NICE NG12: unexplained oral ulceration for more than 3 weeks, or a lump or red/red-and-white patch, needs referral. Reassure (not serious/not contagious), treat the itch, review drugs/associations, and arrange appropriate monitoring.',
    knowledge: {
      guideline: '[1] British Association of Dermatologists, Lichen planus patient information leaflet (2024) \u00b7 [2] British Association of Dermatologists, Oral lichen planus patient information leaflet (2019) \u00b7 [3] Primary Care Dermatology Society, lichen planus clinical guidance (accessed 2026) \u00b7 [4] NICE NG12 Suspected cancer: recognition and referral (2015, last updated 15 April 2026), oral cancer recommendations \u00b7 the 6 Ps + Wickham striae \u00b7 oral/nail/scalp involvement \u00b7 potent topical steroids \u00b7 mucosal malignancy monitoring',
      points: [
        {
          h: 'Recognise LP',
          t: 'The 6 Ps: pruritic, planar, polygonal, purple papules/plaques, with Wickham striae, on flexor wrists/ankles/shins.'
        },
        {
          h: 'Other sites',
          t: 'Oral (white lacy/reticular, sometimes erosive), nail (ridging/pterygium), scalp (scarring alopecia), genital; Koebner phenomenon.'
        },
        {
          h: 'Triggers/associations',
          t: 'Drug-induced lichenoid eruption (thiazides, antimalarials, beta-blockers, ACE inhibitors, NSAIDs \u2014 review meds); hepatitis C association with oral LP [2] (consider testing with consent).'
        },
        {
          h: 'Management',
          t: 'Potent or very potent topical corticosteroids first-line [1][3] + antihistamines/emollients; topical steroids for oral LP. Dermatology referral for extensive/erosive/nail-scalp-scarring/refractory disease.'
        },
        {
          h: 'Course',
          t: 'Cutaneous LP usually self-limiting over months to ~1\u20132 years (may leave pigmentation); can recur. Oral LP more persistent.'
        },
        {
          h: 'Malignancy note',
          t: 'Oral LP carries a small malignant-transformation (SCC) risk \u2014 about 1% over 10 years [2] \u2014 so long-term dental/oral medicine review; erosive genital LP needs specialist follow-up. NICE NG12 [4]: oral ulceration >3 weeks \u2192 suspected cancer pathway; lump or red/red-and-white patch \u2192 urgent dental referral.'
        },
        {
          h: 'Never do',
          t: 'Never ignore persistent erosive oral/genital LP; never miss a drug cause; never alarm unnecessarily about the malignancy note.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Review itch/response; long-term dental/specialist monitoring for the oral disease; return for spread, severe/ulcerated mouth, nail/scalp involvement, or non-resolution.'
        }
      ]
    }
  };

  /* ===== 245. Pityriasis rosea ===== */
  const c245 = {
    "id": "pityriasis-rosea",
    "title": "“It started with one big patch and now it’s all over my chest and back — is it catching?”",
    "type": "video",
    "duration": 12,
    "meta": {
      "age": 26,
      "sex": "F",
      "setting": "Video consultation — a spreading rash on the body for one week; images uploaded before the call.",
      "system": "Dermatology / Women’s health — pityriasis rosea in early pregnancy: the syphilis caveat, honest risk communication and a sexual-health worry",
      "checked": "October 2026"
    },
    "brief": "Jade Morris, 26, retail assistant, uploads photos and joins a video call. Eight days ago an oval, scaly pink patch appeared under her left breast; four days later dozens of smaller oval, scaly patches spread over her chest, back and upper arms along the skin lines. Mildly itchy. She had a sore throat and felt run down two weeks ago. Her record shows a positive pregnancy test two weeks ago and a midwife booking appointment next week; she is about 10 weeks pregnant. She has told only her partner, Dan, of four months. Only if asked sensitively about sexual health does she say she is frightened the rash is an STI: she had unprotected sex with someone else about two months before meeting Dan, and she has been afraid to mention it. She has no genital sores, no mouth ulcers, nothing on her palms or soles, no hair loss, no swollen glands she knows of. The picture is typical of pityriasis rosea, but secondary syphilis must be considered and the pregnancy changes the plan: CKS advises seeking specialist (obstetric) advice for pityriasis rosea in pregnancy because of a reported association with miscarriage, particularly in the first 15 weeks. The task: recognise the rash and its differential, take a sexual history sensitively, examine palms, soles and mouth on camera, arrange syphilis serology (and offer a full STI screen) without waiting for booking bloods, give honest, proportionate information about the pregnancy association, liaise with the midwife and obstetric team, manage the itch safely in pregnancy, and respect her confidentiality about her previous partner.",
    "script": {
      "opening": "“I sent you the photos. It started with one big patch under my boob and now it’s all over my chest and back. Is it catching? Is it something I’ve picked up?”",
      "facts": [
        {
          "topic": "The rash",
          "text": "Eight days ago a single pink oval patch, about 3 cm, with a scaly edge, under the left breast. Four days later lots of smaller oval patches on the chest, back and upper arms, lined up like branches. Mildly itchy. Face, palms and soles clear."
        },
        {
          "topic": "Before the rash",
          "text": "Sore throat and felt run down about two weeks ago. Now well. No fever. No new medicines, creams or washing powder."
        },
        {
          "topic": "Pregnancy (in her record; if asked)",
          "text": "Positive test two weeks ago; last period about 10 weeks ago. Midwife booking next week, no bloods yet. Some nausea. No bleeding or pain. Planned-ish, “a happy surprise”. Has only told Dan."
        },
        {
          "topic": "Only if asked sensitively about sexual health",
          "text": "Dan is her partner of four months. About two months before meeting him, she had unprotected sex with someone else once. She has never had an STI test. She is terrified the rash is “something from that” and that she has passed it to Dan or the baby. She does not want Dan told about the other person."
        },
        {
          "topic": "Symptoms checked if asked",
          "text": "No genital sores or ulcers, no vaginal discharge, no mouth ulcers, no hair falling out, no rash on palms or soles, no swollen glands she has noticed."
        },
        {
          "topic": "How to play it",
          "text": "Anxious, talks quickly about the rash. Goes quiet if the doctor mentions sexual health in a matter-of-fact, non-judgemental way, then discloses. Very worried when pregnancy risks are mentioned; settles with honest numbers and a clear plan."
        }
      ],
      "ice": {
        "ideas": "“Ringworm, or something I’ve caught from someone.”",
        "concerns": "HIDDEN AGENDA: that the rash is an STI from a previous partner which could harm the baby or be passed to Dan; fear of Dan finding out.",
        "expectations": "“To know what it is, whether it’s catching, and if the baby’s okay.”"
      },
      "cues": [
        "“Is it something I’ve picked up?” — opening for a sexual history.",
        "Pregnancy in the record — the plan changes in early pregnancy.",
        "Herald patch then smaller oval patches on the trunk — pityriasis rosea, but secondary syphilis can look similar.",
        "Pause and change of tone when asked about partners — the hidden worry."
      ]
    },
    "checkpoints": [
      {
        "dom": "dg",
        "text": "Recognises the typical pattern (herald patch then smaller oval scaly patches along skin lines, prodrome) and considers the differential (secondary syphilis, tinea corporis, guttate psoriasis, drug eruption)"
      },
      {
        "dom": "dg",
        "text": "Looks at or asks about palms, soles, mouth, genitals, hair and lymph nodes on camera"
      },
      {
        "dom": "dg",
        "text": "Takes a sensitive, non-judgemental sexual history, explaining why it matters, and elicits the previous partner"
      },
      {
        "dom": "cm",
        "text": "Arranges syphilis serology now (not waiting for booking bloods) and offers a full STI screen including HIV and hepatitis B, via the practice or sexual health service"
      },
      {
        "dom": "cm",
        "text": "Gives honest, proportionate information about the reported association between pityriasis rosea in early pregnancy and miscarriage, and seeks obstetric advice through the midwife or early pregnancy team as CKS advises"
      },
      {
        "dom": "cm",
        "text": "Manages itch safely in pregnancy (emollient; a mild or moderate topical corticosteroid if needed; check the SPC/local formulary) and explains the natural history (usually clears in 6–12 weeks, not very contagious, no exclusion from work)"
      },
      {
        "dom": "ro",
        "text": "Respects her confidentiality about the previous partner, discusses partner notification only if a test is positive, and does not moralise"
      },
      {
        "dom": "cm",
        "text": "Safety-nets: vaginal bleeding or pain, new palm or sole rash, mouth or genital ulcers, fever, or rash beyond 12 weeks; follows up results"
      }
    ],
    "worked": [
      {
        "lbl": "Name the likely rash",
        "txt": "“The pattern, one larger patch and then lots of smaller oval ones a few days later, is typical of pityriasis rosea. It’s thought to be a reaction to a virus. It isn’t very catching and it fades on its own over a couple of months.”"
      },
      {
        "lbl": "Open the sexual history",
        "txt": "“A few infections can cause a similar rash, including one that’s sexually transmitted, so I ask everyone with this rash a couple of questions about sexual health. Is that okay?”"
      },
      {
        "lbl": "Respond to disclosure",
        "txt": "“Thank you for telling me. That’s really common and it doesn’t change how we look after you. Let’s test properly so you know, rather than worry.”"
      },
      {
        "lbl": "Honest pregnancy information",
        "txt": "“Some studies have found this rash in the first few months of pregnancy is linked with a higher chance of miscarriage. Most women who get it go on to have healthy pregnancies, and the numbers are uncertain. I’d like the pregnancy team to know so they can advise and keep an eye on you.”"
      },
      {
        "lbl": "Testing now",
        "txt": "“I’d like to do a blood test for syphilis this week rather than waiting for your booking bloods, and offer HIV and hepatitis B, plus swabs for chlamydia and gonorrhoea.”"
      },
      {
        "lbl": "Confidentiality",
        "txt": "“What you’ve told me is confidential. If any test is positive, we’d talk together about how partners are told, and the clinic can do that anonymously.”"
      }
    ],
    "learning": "Pityriasis rosea typically starts with a single larger oval, scaly “herald patch”, followed days to weeks later by smaller oval patches on the trunk and proximal limbs along skin cleavage lines (the “Christmas tree” pattern), often after a viral-type prodrome. It is self-limiting, usually clearing within 6–12 weeks, has low infectivity and needs no exclusion. The key differential is secondary syphilis, which can look almost identical: look for palm and sole involvement, mouth ulcers, genital ulcers, patchy hair loss and lymphadenopathy, and take a sexual history; arrange syphilis serology where there is any doubt or risk, and offer a full STI screen. Pregnancy changes management. Pityriasis rosea in pregnancy, particularly in the first 15 weeks, has been associated with miscarriage in some case series; NICE CKS advises seeking specialist advice for pregnant women. The doctor needs to give this information honestly without catastrophising, inform the midwife or early pregnancy team, and not delay syphilis testing until booking bloods (untreated syphilis in pregnancy risks congenital syphilis, and antenatal screening is offered to all pregnant women). Itch can be managed with emollients and, if needed, a mild or moderate topical corticosteroid (check the SPC/local formulary). The communication task is a sensitive sexual history, a non-judgemental response to disclosure, confidentiality about previous partners, and partner notification only if a result is positive (BASHH guidance).",
    "knowledge": {
      "guideline": "[1] NICE CKS Pityriasis rosea (check current version) · [2] BASHH UK national guidelines on the management of syphilis (check current version) · [3] NHS Infectious diseases in pregnancy screening programme (syphilis, HIV, hepatitis B) · [4] BASHH Statement on partner notification for sexually transmissible infections · [5] GMC Confidentiality: good practice in handling patient information (2017) · [6] Product SPCs for emollients and topical corticosteroids",
      "summary": "Typical pityriasis rosea in a woman about 10 weeks pregnant, with a hidden fear of an STI from a previous partner. Exclude secondary syphilis by examination and serology now, offer a full STI screen, give honest information about the reported miscarriage association and involve the obstetric team as CKS advises, treat itch safely, and protect her confidentiality.",
      "points": [
        {
          "h": "Recognition",
          "t": "Herald patch, then smaller oval scaly patches with a collarette on the trunk along skin lines, often after a prodrome. Mild itch. Usually clears within 6–12 weeks [1]."
        },
        {
          "h": "Differential",
          "t": "Secondary syphilis (palms, soles, mucosa, lymphadenopathy, hair loss), tinea corporis, guttate psoriasis, nummular eczema, drug eruptions [1,2]."
        },
        {
          "h": "Test for syphilis when in doubt",
          "t": "Arrange syphilis serology if there are atypical features, risk factors or pregnancy; offer HIV, hepatitis B and chlamydia/gonorrhoea testing [2]."
        },
        {
          "h": "Pregnancy",
          "t": "An association with miscarriage has been reported, particularly when pityriasis rosea occurs in the first 15 weeks. CKS advises seeking specialist advice for pregnant women [1]. Inform the midwife or early pregnancy service."
        },
        {
          "h": "Antenatal screening",
          "t": "Syphilis, HIV and hepatitis B screening is offered to all pregnant women at booking [3]; do not wait for it when syphilis is a current clinical question."
        },
        {
          "h": "Symptom relief",
          "t": "Emollients; mild or moderate topical corticosteroid for itch if needed (check the SPC/local formulary). Avoid unnecessary antifungals."
        },
        {
          "h": "Confidentiality and partners",
          "t": "Sexual history disclosures are confidential. Partner notification is discussed only if a result is positive and can be done anonymously by sexual health services [4,5]."
        },
        {
          "h": "No exclusion",
          "t": "Pityriasis rosea is not very contagious. No time off work is needed."
        }
      ]
    }
  };

  /* ===== 246. Molluscum contagiosum ===== */
  const c246 = {
    "id": "molluscum-contagiosum",
    "title": "“The childminder won’t have him back until these spots have gone — and I’m on shift on Monday”",
    "type": "video",
    "duration": 12,
    "meta": {
      "age": 4,
      "sex": "M",
      "setting": "Video consultation — a mother about her 4-year-old son, booked as urgent because of a problem with childcare.",
      "system": "Dermatology / Child health — molluscum contagiosum: childminder exclusion, a request for removal, eczema and the eyelid red flag",
      "checked": "October 2026"
    },
    "brief": "Amira Bello, 30, a healthcare assistant on 12-hour shifts and a single parent, joins a video call about Leo, 4, who has atopic eczema. For three months he has had clusters of small, pearly, dome-shaped spots with a central dimple on his trunk, inner arms and behind his knees, with red, itchy eczema around many of them. His childminder has said she will not take him back “until they have gone, because they are contagious”, and Amira is due back on shift on Monday; she has already used her annual leave. She wants the spots “frozen off” or a cream that removes them, and a letter for the childminder. She has an online “removal kit” ready to try. If the doctor looks closely or asks about his eyes, Leo has one spot on the edge of his right upper eyelid and that eye has been red and sticky for two weeks; he rubs it. He is otherwise well. The task: recognise molluscum and explain its natural history; explain why removal is not recommended in a well child and why the online kit could irritate eczema-prone skin; manage the surrounding eczema (emollients and a topical steroid to inflamed skin, check the SPC/local formulary); correct the exclusion (UKHSA: no exclusion for molluscum) and support Amira with a letter; recognise the eyelid-margin lesion with conjunctivitis as a reason for ophthalmology referral; and acknowledge the real pressure on a working single parent.",
    "script": {
      "opening": "“The childminder says she won’t have Leo back until these spots have gone because they’re catching. I’m back on shift on Monday and I’ve used all my leave. Can you freeze them off, or give me something that gets rid of them?”",
      "facts": [
        {
          "topic": "Who is on the call",
          "text": "Amira with Leo, 4, on her lap, fidgeting and scratching his arm. He rubs his right eye a few times."
        },
        {
          "topic": "The spots",
          "text": "About three months. Started on his tummy, now on his inner arms and behind his knees. Small, shiny, skin-coloured bumps, some with a dimple. Some have gone red and scabby where he scratches. Maybe 30 or 40 in total. They don’t hurt."
        },
        {
          "topic": "The eczema",
          "text": "Known eczema since a baby. Uses an emollient “when I remember”. The skin around the spots is red and itchy, worse at night. No weeping or yellow crusting. No fever."
        },
        {
          "topic": "Only if asked about his eyes or the face",
          "text": "One spot on the edge of his right upper eyelid for about a month. That eye has been red and sticky for two weeks. He rubs it. Not light-sensitive, seeing normally as far as she can tell."
        },
        {
          "topic": "Childcare and work",
          "text": "Childminder, Mrs Price, told her on Friday: “Not until they’ve gone, they’re contagious, I’ve got a baby here.” Amira works 12-hour shifts as a healthcare assistant; no family nearby; father not involved. Has already had a warning about absence."
        },
        {
          "topic": "What she has tried",
          "text": "Bought an online “molluscum removal kit” (a liquid you dab on). Has not used it yet. Read that freezing works."
        },
        {
          "topic": "How to play it",
          "text": "Stressed and a bit tearful about work, insistent on removal at first. Accepts leaving the spots alone if she understands why, and if she gets a letter for the childminder. Becomes worried when the eye is mentioned."
        }
      ],
      "ice": {
        "ideas": "“They’re a contagious skin infection that needs removing, like warts.”",
        "concerns": "HIDDEN AGENDA: losing her job; she has had an absence warning and has no other childcare. Also guilty that she does not keep up with his eczema creams.",
        "expectations": "“Freeze them off or give me a cream that gets rid of them, and a letter for the childminder.”"
      },
      "cues": [
        "“I’m on shift on Monday… used all my leave” — the job is at stake.",
        "Leo rubbing his right eye — look at the eyelids and ask about a red eye.",
        "Red, scabby skin around the spots — molluscum dermatitis needing eczema treatment.",
        "“A removal kit” — the risk of irritating eczema-prone skin."
      ]
    },
    "checkpoints": [
      {
        "dom": "dg",
        "text": "Recognises molluscum contagiosum from the description and the camera view, and asks about the eyes, face, genitals, secondary infection and immune status"
      },
      {
        "dom": "dg",
        "text": "Identifies the lesion on the eyelid margin with two weeks of red, sticky eye as an indication for ophthalmology referral"
      },
      {
        "dom": "cm",
        "text": "Explains the natural history (self-limiting, often 6–18 months, sometimes longer) and that treatment to remove lesions is not recommended in a well child because it is painful, can scar and does not shorten the course"
      },
      {
        "dom": "cm",
        "text": "Advises against the online removal kit on eczema-prone skin, and treats the surrounding eczema (regular emollient, a topical steroid to inflamed skin; check the SPC/local formulary)"
      },
      {
        "dom": "cm",
        "text": "Corrects the exclusion: UKHSA guidance sets no exclusion for molluscum; offers a letter for the childminder with practical measures (avoid sharing towels, cover lesions if wished)"
      },
      {
        "dom": "ro",
        "text": "Acknowledges the work and childcare pressure and the guilt about the eczema without judgement"
      },
      {
        "dom": "cm",
        "text": "Gives advice to reduce spread: do not scratch or squeeze, separate towels, cover lesions for swimming if wished, keep nails short"
      },
      {
        "dom": "cm",
        "text": "Safety-nets: eye pain, light sensitivity or reduced vision (urgent), spreading redness, fever or yellow crusting, and very extensive or persistent lesions (consider immune problems)"
      }
    ],
    "worked": [
      {
        "lbl": "Name it and its course",
        "txt": "“These are molluscum. They’re a harmless skin virus, very common in young children, especially with eczema. They go by themselves, usually within a year or so, sometimes longer.”"
      },
      {
        "lbl": "Why not remove",
        "txt": "“Freezing or scraping hurts at this age, can leave scars, and doesn’t make the rest go any faster. The kit you bought can sting and inflame eczema skin, so I’d hold off.”"
      },
      {
        "lbl": "Treat the eczema",
        "txt": "“The red, itchy patches around the spots are eczema reacting to them. If we calm those with a moisturiser every day and a steroid cream on the red bits, he’ll scratch less and spread them less.”"
      },
      {
        "lbl": "The childminder",
        "txt": "“The national guidance for nurseries and childminders says children with molluscum don’t need to be kept away. I’ll write a letter saying that, with some simple tips.”"
      },
      {
        "lbl": "The eye",
        "txt": "“That spot on his eyelid edge, with the eye red and sticky for two weeks, is different. It can irritate the eye, so I’d like the eye specialists to see him.”"
      },
      {
        "lbl": "The pressure on you",
        "txt": "“You’re juggling a lot. None of this is because you’ve done anything wrong. Let’s get you back to work on Monday.”"
      }
    ],
    "learning": "Molluscum contagiosum is a common, benign poxvirus infection in children, especially those with atopic eczema. Lesions are small, firm, pearly, dome-shaped papules with a central dimple, often in clusters on the trunk, limbs and flexures. It is self-limiting: individual lesions last weeks, and the infection usually clears within about 6–18 months, sometimes longer. NICE CKS advises that treatment is not routinely recommended in children: physical removal (cryotherapy, curettage) is painful, can scar and does not shorten the course, and topical products can irritate the skin, particularly in eczema. Eczema around lesions (molluscum dermatitis) is common and should be treated with emollients and a topical corticosteroid to inflamed skin (check the SPC/local formulary), which reduces itch, scratching and spread. Inflammation of individual lesions often heralds resolution. Red flags: lesions on the eyelid margin with conjunctivitis need referral to ophthalmology; also consider referral for very extensive lesions, suspected immune deficiency, or uncertainty. UKHSA guidance for education and childcare settings sets no exclusion for molluscum; practical measures are not sharing towels, not scratching or squeezing, and covering lesions for swimming if wished. A letter to the childcare provider is a legitimate, helpful action. Here the real challenge is a single working parent whose job depends on childcare, so acknowledging that pressure and solving the practical problem is central.",
    "knowledge": {
      "guideline": "[1] NICE CKS Molluscum contagiosum (check current version) · [2] UKHSA Health protection in children and young people settings, including education (exclusion table) · [3] NICE CG57 Atopic eczema in under 12s: diagnosis and management (2007, updated 2023) · [4] British Association of Dermatologists patient information: molluscum contagiosum · [5] Product SPCs for emollients and topical corticosteroids",
      "summary": "Widespread molluscum in a 4-year-old with eczema, with molluscum dermatitis, a lesion on the eyelid margin with two weeks of conjunctivitis, and a childminder refusing care. Explain the self-limiting course and why removal and the online kit are not advised, treat the eczema, refer to ophthalmology for the eyelid lesion with conjunctivitis, write to the childminder (no exclusion), and support a mother whose job is at risk.",
      "points": [
        {
          "h": "Recognition",
          "t": "Firm, pearly, dome-shaped papules with a central dimple, often clustered, in flexures and on the trunk. Usually painless [1]."
        },
        {
          "h": "Natural history",
          "t": "Self-limiting. Most clear within 6–18 months, sometimes longer. Inflamed lesions often mean the immune system is clearing them [1,4]."
        },
        {
          "h": "Removal not recommended",
          "t": "In well children, cryotherapy and curettage are painful and can scar; topical treatments can irritate. None is routinely recommended [1]."
        },
        {
          "h": "Molluscum dermatitis",
          "t": "Eczema around lesions is common. Treat with regular emollients and a topical corticosteroid to inflamed skin (check the SPC/local formulary) [3,5]."
        },
        {
          "h": "Eyelid lesions",
          "t": "Lesions on the eyelid margin can cause conjunctivitis or keratitis. Refer to ophthalmology if there is associated red eye; urgently if pain, photophobia or reduced vision [1]."
        },
        {
          "h": "When else to refer",
          "t": "Very extensive or atypical lesions, suspected immunosuppression (including HIV), diagnostic uncertainty, or lesions causing significant distress despite explanation."
        },
        {
          "h": "Exclusion",
          "t": "No exclusion from school, nursery or childminders [2]. Advise not sharing towels or baths, not scratching or squeezing, and covering lesions for swimming if wished."
        },
        {
          "h": "Secondary infection",
          "t": "Yellow crusting, weeping, spreading redness or fever suggest bacterial infection needing assessment."
        }
      ]
    }
  };

  /* ===== 247. Head lice ===== */
  const c247 = {
    "id": "head-lice",
    "title": "“She’s been sent home from school again — I’ve tried everything from the chemist and nothing works”",
    "type": "video",
    "duration": 12,
    "meta": {
      "age": 8,
      "sex": "F",
      "setting": "Video consultation — a mother with her 8-year-old daughter; booked as urgent after the school sent her home.",
      "system": "Dermatology / Child health — persistent head lice: treatment failure, school exclusion, an unsafe home remedy and family pressures",
      "checked": "October 2026"
    },
    "brief": "Kerry Dobson, 31, a single mother working two part-time jobs, joins a video call with Maisie, 8. Head lice have kept coming back for about three months. Kerry has used four different over-the-counter products (about £60), each once and never repeated after 7 days, some applied to wet hair and rinsed off early. Maisie spends every other weekend at her father’s house with two older stepbrothers; nobody there has been checked. The head teacher has sent Maisie home twice ‘until she is clear’, and Maisie is being called ‘nitty’ and now cries before school. If asked about anything else tried, Kerry says that last weekend she sprayed Maisie’s hair with the dog’s flea spray ‘because it kills fleas’. Maisie’s scalp has been sore since. Kerry wants ‘the strong stuff on prescription’, partly because children’s prescriptions are free. The task: find out why treatment has failed (technique, missed repeat, an untreated household where she stays); spot and deal with the unsafe veterinary insecticide; plan a physically acting treatment used correctly, with the 7-day repeat and detection combing to check for cure; coordinate checking and same-day treatment in both households; correct the school exclusion (UKHSA: no exclusion for head lice) and offer to support Maisie’s return to school; think about the bullying and Maisie’s distress; recognise a stretched parent without judging her; and decide on prescribing using the self-care policy exception for significant social vulnerability.",
    "script": {
      "opening": "“She’s been sent home from school again. That’s twice this month. I’ve tried everything they sell at the chemist and they keep coming back. I need the proper strong stuff on prescription, because I can’t keep paying for it.”",
      "facts": [
        {
          "topic": "Who is on the call",
          "text": "Kerry (mother) with Maisie, 8, on the sofa beside her. Maisie is quiet and looks down. Kerry is tired and talks fast."
        },
        {
          "topic": "How long and what was used",
          "text": "About three months. Four different products from the chemist: “a spray, two lotions and a shampoo one”. Each used once. She did not know about repeating after a week. One was put on wet hair and washed out after 10 minutes because Maisie said it stung. She has a detection comb but “it takes forever, and Maisie screams”."
        },
        {
          "topic": "Only if asked what else she has tried",
          "text": "Last Saturday she sprayed Maisie’s hair with the dog’s flea spray: “It kills fleas, so I thought…”. Since then Maisie’s scalp has been sore and a bit red at the back. No vomiting, no drowsiness, no breathing problems. The bottle is in the kitchen."
        },
        {
          "topic": "The other household",
          "text": "Maisie stays every other weekend at her dad’s with his partner and two stepbrothers, 10 and 12. Kerry and the father communicate “by text, when he answers”. As far as she knows nobody there has been checked or treated. Lice come back after those weekends."
        },
        {
          "topic": "School",
          "text": "The head teacher phoned and said Maisie must stay at home “until she is clear”. She has missed four days. A few children call her “nitty” and won’t sit with her. She cried this morning and said she doesn’t want to go back."
        },
        {
          "topic": "Home and money",
          "text": "Kerry works two part-time jobs (cleaning and a supermarket). Has spent about £60 on products. Feels judged by the school and by other mums. Maisie is otherwise well, with no asthma, eczema or allergies, no medicines. Kerry is not pregnant."
        },
        {
          "topic": "How to play it",
          "text": "Defensive at first: “I’m not a dirty mum.” Softens a lot if the doctor says clearly this is not about hygiene and that she has clearly tried hard. Brings up the flea spray only if asked what else she has tried, then looks embarrassed. Very relieved to hear Maisie can be in school, and grateful if the doctor offers to put this in writing."
        }
      ],
      "ice": {
        "ideas": "“These lice must be resistant to everything. She needs something stronger that only a doctor can give.”",
        "concerns": "HIDDEN AGENDA: money is very tight and she cannot afford another product; she thinks the school sees her as a neglectful mother and she is frightened social services will be called. She also feels guilty about the flea spray.",
        "expectations": "“A prescription for the strong stuff, and a letter so the school stops sending her home.”"
      },
      "cues": [
        "“I’ve tried everything” — find out exactly what and how; most failures are technique, a missed repeat or reinfestation.",
        "Maisie looking down and the school sending her home — her distress and the bullying matter.",
        "“I can’t keep paying for it” — cost; the self-care policy allows prescribing where social vulnerability limits self-care.",
        "Embarrassed pause when asked what else she has tried — the dog flea spray."
      ]
    },
    "checkpoints": [
      {
        "dom": "dg",
        "text": "Takes a precise treatment history: which products, how applied, how long left on, whether repeated after 7 days, whether detection combing was used to check for cure"
      },
      {
        "dom": "dg",
        "text": "Asks what else has been tried and identifies the veterinary flea spray; checks for scalp irritation and systemic symptoms, and advises stopping it and washing it out"
      },
      {
        "dom": "dg",
        "text": "Identifies reinfestation from the second household (father’s house) as a likely cause of failure, and checks how lice were confirmed (live lice found on combing)"
      },
      {
        "dom": "cm",
        "text": "Plans a physically acting treatment used correctly (for example dimeticone 4%: dry hair, whole scalp, left for the time in the product information, repeated after 7 days; check the SPC/product information), or structured wet combing, with detection combing 2–3 days after finishing and again a week later"
      },
      {
        "dom": "cm",
        "text": "Coordinates checking of everyone in both households with treatment of anyone with live lice on the same day, and suggests a practical way to involve the father"
      },
      {
        "dom": "cm",
        "text": "Corrects the school exclusion: UKHSA guidance sets no exclusion for head lice; offers a letter and/or contact with the school nurse, and raises the bullying with the school"
      },
      {
        "dom": "cm",
        "text": "Makes a reasoned prescribing decision, using the national self-care guidance exception for significant social vulnerability, and explains it"
      },
      {
        "dom": "ro",
        "text": "Removes stigma early, acknowledges the mother’s effort without judging the flea spray, involves Maisie directly, and safety-nets for a worsening scalp or treatment failure"
      }
    ],
    "worked": [
      {
        "lbl": "Take away the shame",
        "txt": "“Before anything else: head lice have nothing to do with being a clean or dirty home. You have clearly tried hard, and it’s exhausting. Let’s work out why it keeps coming back.”"
      },
      {
        "lbl": "Unpick the failure",
        "txt": "“Talk me through each product. How long did you leave it on? Did you do it again a week later? Most of the time it isn’t resistance — it’s that the eggs hatch after the first go, or the lice come back from somewhere else.”"
      },
      {
        "lbl": "The flea spray",
        "txt": "“Thank you for telling me. Products for dogs aren’t safe on children’s skin, so please don’t use it again and wash her hair through with plain shampoo tonight. Has she been sick, drowsy or had any breathing trouble?”"
      },
      {
        "lbl": "Both homes",
        "txt": "“The weekends at her dad’s are the gap. Everyone in both houses needs combing on the same evening, and anyone with live lice treated the same day. Would it help if I put that in writing for you to send him?”"
      },
      {
        "lbl": "School",
        "txt": "“Maisie doesn’t need to be off school. The national guidance for schools says no exclusion for head lice. I’m happy to write that down, and I’d like the school nurse to know about the name-calling.”"
      },
      {
        "lbl": "Plan and check",
        "txt": "“I’ll prescribe a lotion that works by coating the lice, so resistance doesn’t matter. Put it on dry hair, leave it for the full time on the pack, and repeat exactly 7 days later. Then comb her wet hair 2–3 days after the second go and again a week later to make sure they’ve gone.”"
      }
    ],
    "learning": "Persistent head lice are rarely due to “super-resistant” lice. Most treatment failures come from incorrect use (wet hair, too short a contact time, too little product), a missed 7-day repeat application, or reinfestation from untreated close contacts, often a second household. Take a precise treatment history and ask what else has been tried: parents under pressure sometimes use unsafe remedies such as veterinary insecticides, paraffin or undiluted essential oils. Stop them, wash the hair, and check for skin irritation and systemic symptoms (advice is available from NHS 111, or for clinicians through TOXBASE/NPIS). Diagnosis and cure are confirmed by detection combing for live lice. A physically acting product such as dimeticone 4% avoids insecticide resistance; it must be applied to dry hair over the whole scalp, left for the full time in the product information and repeated after 7 days (check the SPC/product information), with detection combing 2–3 days after finishing and again a week later. Structured wet combing is the alternative. Check everyone in each household the child lives in, and treat only those with live lice, on the same day. UKHSA guidance for schools and childcare settings sets no exclusion for head lice, so a GP can support the child’s return and raise any bullying with the school or school nurse. National self-care guidance means head-lice products are usually bought over the counter, but it allows prescribing where significant social vulnerability limits self-care. The skills are a non-judgemental treatment-failure analysis, spotting the safety issue, involving the child, and practical help across two households and the school.",
    "knowledge": {
      "guideline": "[1] NICE CKS Head lice (check current version) · [2] UKHSA Health protection in children and young people settings, including education: managing specific infectious diseases (exclusion table) · [3] NHS England Conditions for which over-the-counter items should not be routinely prescribed in primary care (self-care guidance, with general exceptions) · [4] Product SPC/information for dimeticone 4% lotion · [5] GMC Good medical practice (2024) · [6] Working together to safeguard children (2023)",
      "summary": "Repeated head-lice infestation over three months, with four products each used once and incorrectly, reinfestation from an untreated second household, an unsafe veterinary insecticide on the child’s scalp, wrongful exclusion from school with bullying, and a stretched parent. Find the causes of failure, stop the flea spray and check for harm, prescribe a physically acting treatment with clear instructions and the 7-day repeat, coordinate both households, correct the exclusion, and support Maisie and her mother without judgement.",
      "points": [
        {
          "h": "Why treatment fails",
          "t": "Common causes: product applied to wet hair or rinsed early, too little product, no repeat after 7 days (eggs hatch after the first application), and reinfestation from close contacts who were not checked [1]. True resistance is mainly a problem with neurotoxic insecticides."
        },
        {
          "h": "Confirm live lice",
          "t": "Diagnosis and cure need a live louse found by detection combing of wet, conditioned hair. Itch can persist for some days after successful treatment and is not proof of failure."
        },
        {
          "h": "Physically acting treatment",
          "t": "Dimeticone 4% coats the lice, so insecticide resistance does not apply. Apply to dry hair from scalp to tips, leave for the time stated in the product information, wash out, and repeat after 7 days (check the SPC/product information). Check for cure with detection combing 2–3 days after the second application and again a week later [1]."
        },
        {
          "h": "Wet combing",
          "t": "Structured combing of wet, conditioned hair with a detection comb every few days for at least two weeks, continuing until no live lice are seen at consecutive sessions. Useful where products are not wanted or tolerated."
        },
        {
          "h": "Unsafe remedies",
          "t": "Veterinary insecticides, paraffin and undiluted essential oils should not be used on children. Wash the hair through, look for skin irritation or burns, and ask about vomiting, drowsiness, twitching or breathing problems. Clinicians can get poisons advice through TOXBASE or the National Poisons Information Service."
        },
        {
          "h": "Households and contacts",
          "t": "Check everyone in each household the child lives in, including a second parent’s home, on the same evening. Treat only those with live lice, on the same day. No need to wash all bedding or treat pets."
        },
        {
          "h": "School",
          "t": "UKHSA guidance [2]: no exclusion period for head lice. A child should not be sent home or kept off. The GP can provide a letter, involve the school nurse and raise bullying with the school."
        },
        {
          "h": "Prescribing and self-care",
          "t": "Head-lice products are on the national list of items for self-care purchase [3], but the guidance includes a general exception where a clinician judges that medical, mental health or significant social vulnerability compromises self-care. Record the reason."
        },
        {
          "h": "Safeguarding perspective",
          "t": "Persistent head lice in a family that is actively trying to treat them is not, on its own, neglect. Look at the whole picture: the child’s wellbeing, school attendance, bullying and the parent’s capacity. Offer early help if the family would value it [6]."
        }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c244, c245, c246, c247);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {
    'lichen-planus': {
      ceg: ['New & undifferentiated presentations', 'Long-term conditions & cancer'],
      stem: {
        name: 'Diane Forsyth',
        age: '49 years \u00b7 female',
        pmh: [
          'Itchy violaceous flat-topped polygonal papules with Wickham striae on flexor wrists/shins',
          'Oral white lacy/reticular streaks (buccal mucosa)',
          'Review meds (lichenoid eruption); consider hep C'
        ],
        meds: ['Bendroflumethiazide (?lichenoid)'],
        allergy: 'NKDA',
        recent: '"Itchy purple bumps on my wrists, and sore white streaks inside my mouth."',
        reason: 'Video consultation (skin and mouth examined face to face) \u2014 itchy violaceous rash with oral changes.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Recognise LP',
          d: '6 Ps + Wickham striae on flexor wrists/shins + oral white lacy streaks = lichen planus.'
        },
        {
          t: '2\u20134',
          h: 'Other sites/triggers',
          d: 'Oral/nail/scalp/genital; drug lichenoid (review meds); hep C association.'
        },
        {
          t: '4\u20137',
          h: 'Treat',
          d: 'Potent topical steroids + antihistamine/emollient; topical steroids for oral LP; refer if severe/erosive.'
        },
        {
          t: '7\u20139',
          h: 'Course + malignancy note',
          d: 'Self-limiting over months; oral LP ~1% SCC risk over 10 years \u2192 monitor + dental review; NICE NG12 oral criteria.'
        },
        {
          t: '9\u201312',
          h: 'Reassure + safety-net',
          d: 'Not cancer/contagious; return for spread, severe/ulcerated mouth, nail/scalp involvement.'
        }
      ],
      wordPics: {
        fail: 'Fails to recognise LP or treat the itch; ignores the oral disease and its long-term malignancy monitoring; misses a drug cause.',
        pass: 'Recognises LP, treats with potent topical steroids, and arranges oral monitoring.',
        exc: 'Recognises lichen planus (6 Ps + Wickham striae + oral), reviews drugs/hep C, treats with potent topical steroids, counsels the self-limiting course, and arranges long-term dental/specialist monitoring for the oral disease.'
      },
      avoid: [
        {
          dont: '"It\u2019s just a bit of dermatitis \u2014 here\u2019s some moisturiser."',
          instead: '"This is lichen planus \u2014 a potent steroid cream settles it, and I\u2019ll keep an eye on the mouth involvement."',
          why: 'Mislabelling LP misses targeted treatment and the oral malignancy-monitoring need.'
        },
        {
          dont: '(Ignoring the mouth) treating skin only.',
          instead: '"Lichen planus in the mouth needs monitoring and regular dental review \u2014 there\u2019s a small risk of change over time, about 1 in 100 over ten years."',
          why: 'Erosive oral LP carries a small SCC risk and needs monitoring.'
        },
        {
          dont: '(No drug review) not checking medications.',
          instead: '"Let me check your tablets \u2014 some can trigger a lichen-planus-like rash."',
          why: 'Drug-induced lichenoid eruptions are a reversible cause.'
        }
      ]
    },
    'pityriasis-rosea': {
      "ceg": [
        "Gender, reproductive & sexual health",
        "New & undifferentiated presentations"
      ],
      "stem": {
        "name": "Jade Morris",
        "age": "26 years · female",
        "pmh": [
          "Nil significant"
        ],
        "meds": [
          "Folic acid 400 micrograms daily (self-purchased)"
        ],
        "allergy": "None recorded",
        "recent": "Positive pregnancy test two weeks ago; self-referred to midwife, booking appointment next week. Photos of a trunk rash uploaded this morning.",
        "reason": "“Rash spreading over my body — is it catching?”"
      },
      "timeMap": [
        {
          "t": "0–1",
          "h": "Open",
          "d": "Use the photos; let her tell the story."
        },
        {
          "t": "1–5",
          "h": "Rash and pregnancy",
          "d": "Herald patch, prodrome, drugs; 10 weeks pregnant; palms, soles, mouth, genitals, glands."
        },
        {
          "t": "5–8",
          "h": "Sexual history",
          "d": "Normalise, ask, respond to disclosure without judgement. ICE: baby, Dan, being found out."
        },
        {
          "t": "8–11",
          "h": "Plan",
          "d": "Syphilis serology now plus STI screen; honest miscarriage information; midwife and early pregnancy team; itch relief; no exclusion."
        },
        {
          "t": "11–12",
          "h": "Close",
          "d": "Teach-back; results; bleeding and rash safety-net."
        }
      ],
      "wordPics": {
        "fail": "Labels it ringworm or reassures without considering syphilis; ignores the pregnancy; no sexual history; or moralises about the previous partner.",
        "pass": "Recognises pityriasis rosea, checks for syphilis features, arranges serology, and involves the midwife because of the pregnancy.",
        "exc": "All of the above, plus: normalises the sexual history so she discloses; responds without judgement; offers a full STI screen; explains the miscarriage association honestly and proportionately; protects confidentiality and explains anonymous partner notification; safe itch relief; clear results plan."
      },
      "avoid": [
        {
          "dont": "“It’s just a harmless rash, nothing to worry about.”",
          "instead": "“It looks like pityriasis rosea, but I want to rule out one infection with a blood test, especially in pregnancy.”",
          "why": "Secondary syphilis can mimic it, and pregnancy changes the plan."
        },
        {
          "dont": "“You should have used a condom.”",
          "instead": "“Thank you for telling me. Let’s test so you know.”",
          "why": "Judgement stops disclosure and testing."
        },
        {
          "dont": "“This rash causes miscarriage.”",
          "instead": "“Some studies suggest a higher chance of miscarriage, but most women have healthy pregnancies. I’ll get the pregnancy team involved.”",
          "why": "Risk should be honest and proportionate."
        }
      ]
    },
    'molluscum-contagiosum': {
      "ceg": [
        "Children & young people",
        "Health disadvantage & vulnerabilities"
      ],
      "stem": {
        "name": "Leo Bello",
        "age": "4 years · male",
        "pmh": [
          "Atopic eczema since infancy"
        ],
        "meds": [
          "Emollient (repeat, last issued 7 months ago)"
        ],
        "allergy": "None recorded",
        "recent": "No consultations for six months. Mother requested an urgent appointment: “childcare problem with skin spots”.",
        "reason": "“The childminder won’t have him back.”"
      },
      "timeMap": [
        {
          "t": "0–1",
          "h": "Open",
          "d": "Acknowledge Monday and the childminder."
        },
        {
          "t": "1–6",
          "h": "History and look",
          "d": "Spots, eczema, infection; close camera view; face and eyelids: the eyelid lesion and red eye."
        },
        {
          "t": "6–7",
          "h": "ICE",
          "d": "Warts needing removal; job at risk; guilt about creams."
        },
        {
          "t": "7–11",
          "h": "Plan",
          "d": "Natural history; no removal or kit; eczema treatment; childminder letter; ophthalmology referral."
        },
        {
          "t": "11–12",
          "h": "Close",
          "d": "Teach-back; same-day eye safety-net; infection; support."
        }
      ],
      "wordPics": {
        "fail": "Freezes or recommends the online kit; accepts exclusion; never looks at the eyelids; ignores the eczema and the mother’s work crisis.",
        "pass": "Recognises molluscum, explains why removal is not advised, treats the eczema, writes to the childminder and refers the eyelid lesion with conjunctivitis.",
        "exc": "All of the above, plus: explains the natural history in plain words; advises specifically against the kit on eczema skin; acknowledges the job pressure and guilt without judgement; proportionate reassurance and a clear same-day eye safety-net; teach-back."
      },
      "avoid": [
        {
          "dont": "“We can freeze them off for you.”",
          "instead": "“Freezing hurts, can scar and doesn’t speed up the rest. They go on their own.”",
          "why": "Removal is not recommended in well children (CKS)."
        },
        {
          "dont": "“The childminder has a point, keep him home.”",
          "instead": "“The guidance says no exclusion. I’ll write to her.”",
          "why": "UKHSA guidance sets no exclusion for molluscum."
        },
        {
          "dont": "(Not looking at the face) treating only the body.",
          "instead": "“Can you bring the camera to his face? Any on his eyelids?”",
          "why": "Eyelid-margin lesions with conjunctivitis need ophthalmology."
        }
      ]
    },
    'head-lice': {
      "ceg": [
        "Children & young people",
        "Health disadvantage & vulnerabilities"
      ],
      "stem": {
        "name": "Maisie Dobson",
        "age": "8 years · female",
        "pmh": [
          "Nil significant"
        ],
        "meds": [
          "None recorded"
        ],
        "allergy": "None recorded",
        "recent": "Mother booked an urgent appointment: “Sent home from school again.” No previous consultations for this problem.",
        "reason": "“I’ve tried everything from the chemist and it keeps coming back.”"
      },
      "timeMap": [
        {
          "t": "0–1",
          "h": "Open",
          "d": "Greet both. Say early that lice are not about hygiene."
        },
        {
          "t": "1–5",
          "h": "Why it fails",
          "d": "Each product, how applied, contact time, 7-day repeat, combing. Ask what else has been tried: flea spray."
        },
        {
          "t": "5–7",
          "h": "Safety and context",
          "d": "Look at the scalp; systemic symptoms. Second household. Ask Maisie about school. ICE: cost, judgement, social services."
        },
        {
          "t": "7–11",
          "h": "Plan",
          "d": "Dimeticone used correctly with the repeat; both homes the same evening; no exclusion letter; school nurse; prescribing exception."
        },
        {
          "t": "11–12",
          "h": "Close",
          "d": "Teach-back; combing checks; return if live lice or a worse scalp; 111 if unwell."
        }
      ],
      "wordPics": {
        "fail": "Prescribes “something stronger” without asking how earlier treatments were used; never finds the flea spray or the second household; accepts the school exclusion; ignores Maisie.",
        "pass": "Finds the missed repeat and wrong technique, stops the flea spray, plans a physically acting treatment with the repeat, includes the father’s household, and says there is no exclusion.",
        "exc": "All of the above, plus: removes the stigma in the first minute; asks about other remedies in a way that makes disclosure safe and screens for toxicity; involves Maisie and acts on the bullying; offers a letter for school and a note for the father; explains the prescribing exception; checks understanding and plans the check for cure."
      },
      "avoid": [
        {
          "dont": "“They must be resistant — here’s something stronger.”",
          "instead": "“Talk me through exactly how each one was used and whether you repeated it.”",
          "why": "Most failures are technique, a missed repeat or reinfestation."
        },
        {
          "dont": "“You used dog flea spray on her?”",
          "instead": "“Thank you for telling me. Let’s wash it out tonight and I’ll check she’s okay.”",
          "why": "Shame stops disclosure; the safety action is what matters."
        },
        {
          "dont": "“Keep her home until she’s clear.”",
          "instead": "“She can be in school; I’ll write that down for you.”",
          "why": "UKHSA guidance sets no exclusion for head lice."
        }
      ]
    }
  });

})();
