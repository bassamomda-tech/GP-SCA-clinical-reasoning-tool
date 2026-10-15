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
      guideline: '[1] British Association of Dermatologists, Lichen planus patient information leaflet (2024) \u00b7 [2] British Association of Dermatologists, Oral lichen planus patient information leaflet (2019) \u00b7 [3] Primary Care Dermatology Society, lichen planus clinical guidance (accessed 2026) \u00b7 [4] NICE NG12 Suspected cancer: recognition and referral (2015, last updated 15 April 2026), oral cancer recommendations \u00b7 [5] BNF, topical corticosteroids (potency and quantities) \u00b7 the 6 Ps + Wickham striae \u00b7 oral/nail/scalp involvement \u00b7 potent topical steroids \u00b7 mucosal malignancy monitoring',
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
          t: 'Potent or very potent topical corticosteroids first-line [1][3][5] + antihistamines/emollients; topical steroids for oral LP. Dermatology referral for extensive/erosive/nail-scalp-scarring/refractory disease.'
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
    id: 'pityriasis-rosea',
    title: '"A big oval patch came up on my chest a week ago, now there\u2019s loads of smaller ones \u2014 is it ringworm spreading?"',
    type: 'video',
    duration: 12,
    meta: {
      age: 24,
      sex: 'F',
      setting: 'Video consultation, with the skin (including palms and soles) examined face to face if the images are unclear \u2014 a spreading scaly rash on the trunk.',
      system: 'Dermatology \u2014 pityriasis rosea: herald patch, reassurance & the syphilis caveat',
      checked: 'October 2026'
    },
    brief: 'Miss Lena Ashworth, 24, had a single larger oval scaly patch (HERALD PATCH) on her trunk ~1 week ago, followed by a crop of smaller oval scaly plaques on the trunk in a "Christmas-tree" distribution along the skin lines, mildly itchy, otherwise well (possible preceding viral illness). Recognise PITYRIASIS ROSEA \u2014 a self-limiting rash (herald patch then smaller oval lesions following Langer lines, "fir-tree/Christmas-tree" on the back), often post-viral, mostly in young adults; distinguish from tinea (ringworm), guttate psoriasis, eczema and \u2014 importantly \u2014 SECONDARY SYPHILIS (which can mimic it; BASHH 2024: the rash involves the palms and soles in 11\u201370% and usually does not itch \u2014 take a sexual history and arrange serology, ideally via sexual health services, if atypical); manage with REASSURANCE and symptomatic care (emollients, a mild to moderately potent topical steroid such as hydrocortisone 1% or clobetasone butyrate 0.05% (PCDS), sedating antihistamine at night if sleep is affected), explaining it resolves spontaneously, lasting about 2\u201312 weeks (Cochrane 2019; PCDS: usually within 12 weeks); ask about pregnancy (small studies found higher miscarriage rates when it began before about 15 weeks, though a 2024 study found no excess risk); advise it is not significantly contagious and pigmentation may persist briefly. Avoid unnecessary antifungals/antibiotics.',
    script: {
      opening: '"About a week ago I got one big oval scaly patch on my chest, and now I\u2019ve come out in loads of smaller oval ones across my back and tummy. It\u2019s a bit itchy. I thought the first one was ringworm \u2014 is it spreading? Should I have a cream?"',
      facts: [
        {
          topic: 'The rash',
          text: 'First a single patch on her chest "the size of a 2p coin, oval, pink with a scaly edge" about 10 days ago. Five days later lots of smaller oval pink patches across her back, tummy and upper arms. Shows the camera: oval pink patches running in lines on her back.'
        },
        {
          topic: 'Symptoms',
          text: 'Mildly itchy, worse after a hot shower. Had "a bit of a cold" about 2 weeks before. Otherwise well \u2014 no fever.'
        },
        {
          topic: 'Negatives (if asked)',
          text: 'Nothing on the palms or soles. No mouth ulcers, no sore throat now, no swollen glands, no genital sores, no hair loss. No new medicines. No pets.'
        },
        {
          topic: 'Sexual history and pregnancy (if asked sensitively)',
          text: 'One regular partner for a year. No new partners. On the combined pill; last period 2 weeks ago; not pregnant.'
        },
        {
          topic: 'Health',
          text: 'Well, no medicines except the pill, no allergies. Mild childhood eczema. Hasn\u2019t tried any creams yet.'
        },
        {
          topic: 'Social',
          text: 'Works as a beauty therapist \u2014 worried about clients seeing it. Off on holiday in 3 weeks.'
        },
        {
          topic: 'How to play it',
          text: 'Chatty, a bit self-conscious about how it looks. You expect an antifungal cream. Ask: "So it\u2019s not ringworm?" and "Is it catching?". Happy to avoid a cream that won\u2019t work once it\u2019s explained.'
        }
      ],
      ice: {
        ideas: '"It\u2019s ringworm and it\u2019s spreading."',
        concerns: '"That it\u2019s catching and I\u2019ll pass it to clients or my boyfriend, and that it\u2019ll still be there for my holiday."',
        expectations: '"An antifungal cream, I suppose."'
      },
      cues: [
        '"I thought the first one was ringworm" \u2014 explain the herald patch and why antifungals won\u2019t help.',
        '"Is it catching?" \u2014 worry about work and her partner.',
        '"I\u2019m off on holiday in three weeks" \u2014 expectations about how long it lasts.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises PITYRIASIS ROSEA \u2014 a herald patch followed by smaller oval scaly plaques on the trunk in a Christmas-tree distribution, mildly itchy, in an otherwise-well young adult (often post-viral)'
      },
      {
        dom: 'dg',
        text: 'Distinguishes it from tinea/ringworm, guttate psoriasis, nummular eczema and drug eruption'
      },
      {
        dom: 'cm',
        text: 'Keeps the SECONDARY SYPHILIS caveat in mind (palms/soles involvement, systemic features, sexual risk) and would take a sexual history/consider syphilis serology (ideally via sexual health services) if atypical'
      },
      {
        dom: 'cm',
        text: 'Manages with REASSURANCE (self-limiting, about 2\u201312 weeks) and symptomatic care (emollients, mild to moderately potent topical steroid such as clobetasone 0.05%, sedating antihistamine at night), avoiding unnecessary antifungals/antibiotics'
      },
      {
        dom: 'dg',
        text: 'Notes the pregnancy consideration (asks about possible pregnancy; conflicting evidence of miscarriage risk with onset before about 15 weeks; informs the midwife/obstetric team if pregnant)'
      },
      {
        dom: 'ro',
        text: 'Reassures about the "ringworm spreading" fear, explains it is self-limiting and not significantly contagious, and checks understanding'
      },
      {
        dom: 'ro',
        text: 'Responds to the expectation of an antifungal by explaining why it isn\u2019t needed, without being dismissive'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: review if atypical/palms-soles/very widespread/persistent beyond ~3 months or systemic features (reconsider diagnosis incl. syphilis) \u2014 reassurance + symptomatic care, not unnecessary antifungals'
      }
    ],
    worked: [
      {
        lbl: 'Reassure + name it',
        txt: '"Good news \u2014 this isn\u2019t ringworm spreading. That first bigger patch is called a \u2018herald patch\u2019, and the smaller oval ones following your skin lines are the classic pattern of pityriasis rosea, a harmless, self-limiting rash, often after a mild viral illness."'
      },
      {
        lbl: 'Course',
        txt: '"It clears on its own, usually within about twelve weeks and often sooner. It\u2019s not really contagious, and it may leave faint marks for a while as it fades, which also settle."'
      },
      {
        lbl: 'Itch care',
        txt: '"For the itch, a good moisturiser, a mild to moderate steroid cream and an antihistamine at night if it keeps you awake are all you need \u2014 no antifungal cream required, as that wouldn\u2019t help this."'
      },
      {
        lbl: 'Quick checks',
        txt: '"Just to be thorough \u2014 any rash on your palms or soles, feeling generally unwell, or any sexual-health concerns? \u2026 No. Sometimes another condition can look similar, so I check. And could you be pregnant?"'
      },
      {
        lbl: 'Safety-net',
        txt: '"Come back if it spreads to your palms and soles, you feel unwell, it\u2019s still there after about three months, or it changes \u2014 then I\u2019d reconsider and possibly do a blood test. Otherwise, let it run its course."'
      },
      {
        lbl: 'Close',
        txt: '"So: reassuring, treat the itch, no antifungal, and it\u2019ll settle by itself. Any questions?"'
      }
    ],
    learning: 'PITYRIASIS ROSEA is a self-limiting rash recognised by a single larger oval scaly HERALD PATCH appearing first, followed days-to-weeks later by a crop of smaller oval scaly plaques on the TRUNK following the skin cleavage (Langer) lines \u2014 the classic "FIR-TREE / CHRISTMAS-TREE" pattern on the back \u2014 mildly itchy, in an otherwise-well young adult, often after a viral illness. Distinguish it from tinea/ringworm (fewer lesions, annular with central clearing \u2014 the herald patch can mimic it), guttate psoriasis (smaller, post-strep), nummular eczema and drug eruptions. Importantly, SECONDARY SYPHILIS can mimic pityriasis rosea, and clues such as PALM and SOLE involvement, lymphadenopathy, systemic symptoms, mucosal lesions or sexual-history risk should prompt a sexual history and consideration of syphilis serology \u2014 do not miss it in atypical presentations. Manage with REASSURANCE: it resolves spontaneously, lasting about 2\u201312 weeks (Cochrane 2019); symptomatic care only (emollients, a mild to moderately potent topical steroid such as hydrocortisone 1% or clobetasone butyrate 0.05% (PCDS), and/or a sedating antihistamine at night for itch); it is not significantly contagious; post-inflammatory pigmentation may persist briefly (especially in darker skin); and unnecessary antifungals/antibiotics should be avoided. Note a possible association with miscarriage if it begins before about 15 weeks of PREGNANCY (small studies; a 2024 matched study found no excess risk), so ask about pregnancy and inform the midwife/obstetric team if pregnant. Secondary syphilis (BASHH 2024: palms and soles in 11\u201370%) is tested for via sexual health services. Safety-net to review if atypical, palms/soles involved, very widespread or persistent beyond ~3 months, or systemic features arise \u2014 reconsidering the diagnosis (including syphilis). The hidden agenda is the "ringworm spreading" fear and an expectation of an antifungal; recognise the condition, reassure, give symptomatic care, and keep the syphilis caveat in mind.',
    knowledge: {
      guideline: '[1] Primary Care Dermatology Society, pityriasis rosea clinical guidance (accessed 2026) \u00b7 [2] British Association of Dermatologists, Pityriasis rosea patient information leaflet (2023) \u00b7 [3] BASHH UK national guideline on the management of syphilis (2024) \u00b7 [4] Contreras-Ruiz et al., Cochrane 2019 CD005068 (interventions for pityriasis rosea) \u00b7 [5] Drago et al., J Am Acad Dermatol 2008; Manduca et al., Int J Womens Dermatol 2025; Ong et al., J Am Acad Dermatol 2024 (pityriasis rosea in pregnancy) \u00b7 [6] BNF, topical corticosteroids and antihistamines \u00b7 herald patch + Christmas-tree distribution \u00b7 self-limiting, symptomatic care \u00b7 secondary-syphilis mimic \u00b7 pregnancy note',
      points: [
        {
          h: 'Recognise PR',
          t: 'Herald patch then smaller oval scaly plaques on the trunk following skin lines (Christmas-tree on the back), mildly itchy, well young adult, often post-viral.'
        },
        {
          h: 'Differential',
          t: 'Tinea/ringworm (annular, central clearing), guttate psoriasis (post-strep), nummular eczema, drug eruption.'
        },
        {
          h: 'Syphilis caveat',
          t: 'Secondary syphilis mimics PR \u2014 palms/soles involvement (11\u201370%, BASHH [3]), systemic features, sexual risk \u2192 sexual history + syphilis serology via sexual health services. Don\u2019t miss it in atypical cases.'
        },
        {
          h: 'Reassure & manage',
          t: 'Self-limiting, about 2\u201312 weeks [4]; symptomatic only (emollients, mild to moderately potent topical steroid such as clobetasone 0.05% [1], sedating antihistamine at night, doses per BNF [6]); not significantly contagious; avoid unnecessary antifungals/antibiotics.'
        },
        {
          h: 'Pregnancy note',
          t: 'Conflicting evidence of higher miscarriage rates with onset before about 15 weeks [5] \u2014 ask about pregnancy; inform the midwife/obstetric team if pregnant.'
        },
        {
          h: 'Pigmentation',
          t: 'Post-inflammatory pigmentation may persist briefly, especially in darker skin; reassure it settles.'
        },
        {
          h: 'Never do',
          t: 'Never reflexively prescribe an antifungal for PR; never miss secondary syphilis in atypical/palms-soles cases; never over-treat a self-limiting rash.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Review if atypical, palms/soles, very widespread/persistent beyond ~3 months, or systemic features \u2014 reconsider diagnosis (incl. syphilis serology).'
        }
      ]
    }
  };

  /* ===== 246. Molluscum contagiosum ===== */
  const c246 = {
    id: 'molluscum-contagiosum',
    title: '"My little boy\u2019s got a cluster of small pearly bumps with a dimple in the middle \u2014 how do we get rid of them?"',
    type: 'video',
    duration: 12,
    meta: {
      age: 5,
      sex: 'M',
      setting: 'Video consultation, parent present, with the skin examination arranged face to face if the images are unclear \u2014 a child with characteristic papules.',
      system: 'Dermatology / Paediatrics \u2014 molluscum contagiosum: reassurance & avoiding harm',
      checked: 'October 2026'
    },
    brief: 'A mother brings Leo, 5, with a cluster of small, dome-shaped, PEARLY/flesh-coloured PAPULES with a central DIMPLE (umbilication) on the trunk/axilla, some with surrounding mild eczema; the child is well. She wants them "gotten rid of". Recognise MOLLUSCUM CONTAGIOSUM \u2014 a common, benign, SELF-LIMITING viral (poxvirus) skin infection of children, spread by contact/autoinoculation, characterised by umbilicated pearly papules \u2014 and that it RESOLVES SPONTANEOUSLY, usually within 6 to 18 months though some children take longer (BAD 2020), and untreated spots usually heal without marks (picked, squeezed or inflamed spots can scar), so active/harsh treatment is generally NOT recommended in healthy children (risks scarring/pain); reassure and give simple advice (avoid squeezing/scratching, don\u2019t share towels, treat surrounding eczema/itch, normal activities/school/swimming allowed \u2014 UKHSA: no exclusion period); consider treatment/referral only in specific situations (extensive, very symptomatic, immunocompromised, genital lesions considered with safeguarding in mind, or eyelid-margin lesions with a red or sore eye \u2014 ophthalmology). Avoid over-treatment; manage parental expectation for a "cure".',
    script: {
      opening: '"Leo\u2019s got these little pearly bumps in a cluster under his arm and on his tummy \u2014 some have a tiny dimple in the middle. They\u2019re spreading a bit and one area\u2019s gone a bit eczema-y. How do we get rid of them? Should he stay off school or swimming?"',
      facts: [
        {
          topic: 'Who is calling',
          text: 'Mother, Kirsty, on video with Leo (5), who is happily playing with a toy car. She can show the bumps on camera.'
        },
        {
          topic: 'The bumps',
          text: 'Started about 2 months ago with 3 or 4; now about 15, under the left arm and on his tummy. Small, shiny, skin-coloured, some with a dimple. Two look a little red. The skin around some is dry and itchy and he scratches it.'
        },
        {
          topic: 'Negatives (if asked)',
          text: 'None near his eyes, none on his face or private parts. No fever. He\u2019s well in himself, eating and sleeping fine. Not on any medicines. No allergies.'
        },
        {
          topic: 'Background',
          text: 'Had eczema as a baby, now mild \u2014 uses emollient "when I remember". Up to date with jabs. Older sister (8) has no bumps. Shares a bath with his sister.'
        },
        { topic: 'Activities', text: 'Goes to reception class and swimming lessons on Saturdays.' },
        {
          topic: 'How to play it',
          text: 'Friendly, practical, a bit worried about what other parents think. You expect the GP to "freeze them off". If told they go on their own, ask "That long? Can\u2019t you just freeze them?". Accept when told freezing hurts and can scar. Relieved he can keep swimming.'
        }
      ],
      ice: {
        ideas: '"Some sort of wart? I thought you\u2019d freeze them off."',
        concerns: '"That they keep spreading, and he\u2019ll pass them round school \u2014 another mum made a comment."',
        expectations: '"Get rid of them, and know if he should stay off school or swimming."'
      },
      cues: [
        '"How do we get rid of them?" \u2014 expectation of treatment to discuss.',
        '"One area\u2019s gone a bit eczema-y" \u2014 surrounding eczema that needs treating.',
        '"Another mum made a comment" (if worries explored) \u2014 social worry behind the request.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises MOLLUSCUM CONTAGIOSUM \u2014 clusters of pearly, dome-shaped, umbilicated papules in a child, spread by contact/autoinoculation, often with surrounding eczema'
      },
      {
        dom: 'cm',
        text: 'Knows it is SELF-LIMITING (resolves spontaneously, usually within 6\u201318 months and sometimes longer, BAD 2020; untreated spots usually heal without marks, though picked or inflamed spots can scar) and that active/harsh treatment is generally NOT recommended in healthy children'
      },
      {
        dom: 'cm',
        text: 'Gives simple advice \u2014 avoid squeezing/scratching, limit towel/bath sharing, treat surrounding eczema/itch \u2014 and correctly advises NO exclusion from school or swimming'
      },
      {
        dom: 'dg',
        text: 'Identifies the specific situations where treatment/referral is considered (extensive/very symptomatic, immunocompromised, genital lesions with safeguarding in mind, eyelid-margin lesions with a red or sore eye \u2192 ophthalmology, secondary infection)'
      },
      { dom: 'cm', text: 'Manages the surrounding eczema (emollients, mild topical steroid) appropriately' },
      {
        dom: 'ro',
        text: 'Manages the parent\u2019s expectation for a "cure" \u2014 explaining why watchful waiting is preferred (harm vs benefit) \u2014 reassuring about the benign course without being dismissive'
      },
      {
        dom: 'ro',
        text: 'Checks understanding of spread/activity advice and addresses the school/swimming question directly'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: review if extensive/very symptomatic/immunocompromised/eyelid or genital involvement/secondary infection, eczema management, and reassurance about spontaneous resolution \u2014 avoiding harmful over-treatment'
      }
    ],
    worked: [
      {
        lbl: 'Name + reassure',
        txt: '"These are molluscum \u2014 a very common, harmless viral skin infection in children. Those pearly bumps with the little dimple in the middle are the giveaway. The reassuring news is they clear up completely on their own."'
      },
      {
        lbl: 'Why we usually leave them',
        txt: '"I know you want them gone, but in a healthy child we usually don\u2019t actively treat them \u2014 because they usually go by themselves within six to eighteen months \u2014 sometimes a bit longer \u2014 and normally heal without marks if they\u2019re not picked, whereas freezing or burning them off can be painful and can scar. Time is the kindest treatment."'
      },
      {
        lbl: 'School/swimming',
        txt: '"He absolutely does not need to stay off school, and he can swim \u2014 you can cover the bumps with a plaster or rash vest if you like. Just try to stop him scratching or squeezing them, as that spreads them."'
      },
      {
        lbl: 'Eczema patch',
        txt: '"That eczema-y patch around them is common \u2014 a good moisturiser and a mild steroid cream will settle the itch, which also helps stop him scratching and spreading them."'
      },
      {
        lbl: 'Practical advice',
        txt: '"Avoid sharing towels and baths with siblings where you can, and the bumps will gradually crust and disappear. They sometimes look angrier just before they clear, which is normal."'
      },
      {
        lbl: 'Safety-net',
        txt: '"Come back if they become very widespread, very sore or infected, appear on the eyelids \u2014 especially with a red or sore eye, which would need the eye team \u2014 or if Leo has any condition affecting his immune system \u2014 then we\u2019d consider treatment. Otherwise, reassurance and patience."'
      }
    ],
    learning: 'MOLLUSCUM CONTAGIOSUM is a common, benign, self-limiting viral (poxvirus) skin infection of children, recognised by clusters of small, dome-shaped, PEARLY/flesh-coloured PAPULES with a central DIMPLE (umbilication), commonly on the trunk, axillae and flexures, spread by skin contact and autoinoculation (scratching), and frequently with surrounding eczema ("molluscum dermatitis"). The key message is that it is SELF-LIMITING and resolves SPONTANEOUSLY \u2014 usually within 6 to 18 months, sometimes longer (BAD 2020) \u2014 and untreated spots usually heal WITHOUT marks (picked or inflamed spots can scar), so in healthy children active or harsh treatment is generally NOT recommended because it risks pain, scarring and distress for limited benefit; reassurance and time are the main approach. Advise avoiding squeezing/scratching/picking (which spreads it and risks scarring/infection), limiting towel/bath sharing, covering weeping lesions, and treating surrounding eczema/itch with emollients and a mild topical steroid; importantly, NO exclusion from school or swimming is needed (UKHSA; lesions may be covered for swimming). Consider treatment/referral only in specific situations: very extensive or persistent/very symptomatic lesions, immunocompromised children (widespread/atypical), genital lesions (with appropriate safeguarding awareness in children) or eyelid-margin lesions (with a red or sore eye \u2192 ophthalmology), or significant secondary infection \u2014 with selective options (cryotherapy, topical agents) weighed against the self-limiting nature. The hidden agenda is the parent\u2019s wish for a "cure" and worry about contagion/school; explain why watchful waiting is preferred (harm vs benefit), reassure about the benign course and that untreated spots usually heal without marks, manage the eczema, allow normal activities, and treat/refer only selectively.',
    knowledge: {
      guideline: '[1] British Association of Dermatologists (BAD) patient information leaflet: molluscum contagiosum (updated July 2020) \u00b7 [2] UKHSA Health protection in children and young people settings, including education: exclusion table \u00b7 [3] NICE CG57 Atopic eczema in under 12s (2007, updated 2023) \u00b7 [4] BNFC: hydrocortisone (topical), emollients \u00b7 [5] GMC 0\u201318 years (2007, updated 2018) \u00b7 benign self-limiting viral infection \u00b7 avoid harsh treatment in healthy children \u00b7 no school/swimming exclusion \u00b7 selective treatment',
      points: [
        {
          h: 'Recognise molluscum',
          t: 'Clusters of pearly, dome-shaped, umbilicated papules in children; viral (poxvirus); spread by contact/autoinoculation; surrounding eczema common.'
        },
        {
          h: 'Self-limiting',
          t: 'BAD [1]: resolves spontaneously, usually within 6\u201318 months, sometimes longer; untreated spots usually heal without marks (picked/inflamed spots can scar). Active/harsh treatment generally not recommended in healthy children (pain/scarring risk).'
        },
        {
          h: 'Simple advice',
          t: 'Avoid squeezing/scratching, limit towel/bath sharing, cover weeping lesions, treat surrounding eczema/itch. Normal activities \u2014 no school/swimming exclusion (UKHSA [2]; cover lesions for swimming if desired).'
        },
        {
          h: 'When to treat/refer',
          t: 'Extensive/very symptomatic, immunocompromised, genital (safeguarding awareness [5]) or eyelid-margin lesions with a red or sore eye (ophthalmology), or secondary infection \u2014 selective cryotherapy/topical options.'
        },
        {
          h: 'Manage eczema',
          t: 'Emollients + a short course of mild topical steroid such as hydrocortisone 1% (NICE CG57 [3]; BNFC [4]) for surrounding molluscum dermatitis; reduces itch and scratching/spread.'
        },
        {
          h: 'Parent expectation',
          t: 'Explain why watchful waiting is preferred (harm vs benefit); reassure benign course/usually no marks if not picked; address school/swimming question directly.'
        },
        {
          h: 'Never do',
          t: 'Never aggressively treat healthy children\u2019s molluscum (scarring risk); never exclude from school/swimming; never miss immunocompromise/eyelid/extensive cases needing referral.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Review if extensive/very symptomatic/immunocompromised/eyelid or genital involvement/secondary infection; eczema management; reassurance about spontaneous resolution.'
        }
      ]
    }
  };

  /* ===== 247. Head lice ===== */
  const c247 = {
    id: 'head-lice',
    title: '"The school sent a letter about nits and now my daughter\u2019s scratching her head \u2014 should the whole family be treated?"',
    type: 'video',
    duration: 12,
    meta: {
      age: 8,
      sex: 'F',
      setting: 'Video consultation \u2014 suspected head lice, parent present (detection combing is done at home by the parent).',
      system: 'Dermatology / Primary care \u2014 head lice: detection, evidence-based treatment & myths',
      checked: 'October 2026'
    },
    brief: 'A mother brings Maisie, 8, scratching her scalp after a school "nits" letter; the task is the practical, evidence-based management of HEAD LICE (pediculosis capitis). Establish that diagnosis requires finding LIVE LICE (eggs/"nits" alone, especially white empty egg cases, do not confirm active infestation); use DETECTION (wet) COMBING with a fine-toothed comb (and conditioner) to confirm; TREAT only confirmed LIVE infestation \u2014 with either DIMETICONE 4% lotion (BNFC: works physically, so insecticide resistance does not affect it; applied as per the product and REPEATED after 7 days to kill lice hatched from surviving eggs) or systematic WET COMBING (the bug-busting method: several sessions every few days over at least two weeks, until no live lice are found at consecutive sessions); treat AFFECTED household/close contacts only if they too have LIVE lice (not blanket-treat everyone); dispel MYTHS (lice are not a sign of poor hygiene, don\u2019t jump/fly, school EXCLUSION is NOT necessary and children can attend \u2014 UKHSA exclusion table); and advise on detection/checking and reducing spread. The skill is evidence-based management, treating only confirmed live lice, the repeat-treatment principle, and myth-busting/reassurance.',
    script: {
      opening: '"The school sent home a letter saying there\u2019s nits going round, and now Maisie\u2019s scratching her head. I\u2019m mortified \u2014 does it mean she\u2019s dirty? Should I treat her and the whole family to be safe, and keep her off school?"',
      facts: [
        {
          topic: 'Who is calling',
          text: 'Mother, Donna, with Maisie (8) beside her. Maisie is fine in herself, a bit embarrassed.'
        },
        {
          topic: 'The itch',
          text: 'A few days, mostly behind her ears and at the back of the neck. Donna had a quick look and couldn\u2019t see anything \u2014 "I didn\u2019t know what I was looking for". No sores or rash on the scalp.'
        },
        {
          topic: 'What she has done',
          text: 'Nothing yet. Was going to buy "the strongest lotion" for everyone. Has no detection comb.'
        },
        {
          topic: 'Household',
          text: 'Donna, her partner Steve, Maisie and a 4-year-old son, Alfie. Nobody else is itching. No one else has said anything.'
        },
        {
          topic: 'Health',
          text: 'Maisie is healthy, no asthma or eczema, no allergies, no medicines. Donna is not pregnant or breastfeeding.'
        },
        {
          topic: 'How to play it',
          text: 'Embarrassed and keen to "blitz" it. Ask: "Does it mean she\u2019s dirty?" and "Should I just do all of us at the same time to be safe?". Surprised she doesn\u2019t need to stay off school. Relieved and grateful for practical step-by-step advice.'
        }
      ],
      ice: {
        ideas: '"Treat everyone to be safe. Maybe she\u2019s caught it because I\u2019ve not been washing her hair enough."',
        concerns: 'HIDDEN AGENDA \u2014 stigma: "I don\u2019t want other parents thinking we\u2019re dirty." Also worried about the cost of lotion for four people.',
        expectations: '"Treat the whole family and keep her off till it\u2019s gone."'
      },
      cues: [
        '"Does it mean she\u2019s dirty?" \u2014 myth to bust.',
        '"Treat the whole family to be safe" \u2014 expectation to negotiate: check first, treat only live lice.',
        '"Keep her off school?" \u2014 no exclusion needed.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Establishes that diagnosis requires finding LIVE LICE \u2014 not eggs/"nits" alone \u2014 and uses DETECTION (WET) COMBING to confirm active infestation before treating'
      },
      {
        dom: 'cm',
        text: 'Treats ONLY a confirmed live infestation \u2014 not on the basis of itch/a school letter alone \u2014 and does NOT blanket-treat the whole family "to be safe"'
      },
      {
        dom: 'cm',
        text: 'Offers evidence-based treatment (dimeticone lotion with the CRITICAL REPEAT application after 7 days to kill newly-hatched lice, OR systematic wet combing every few days for at least two weeks until clear at consecutive sessions), applied correctly'
      },
      {
        dom: 'cm',
        text: 'Advises checking household/close CONTACTS and treating them ONLY if they also have live lice (detection comb), informing contacts to check'
      },
      {
        dom: 'cm',
        text: 'BUSTS THE MYTHS \u2014 head lice are not a sign of poor hygiene, do not jump/fly (spread by head-to-head contact), and do NOT require school exclusion (child can attend)'
      },
      {
        dom: 'ro',
        text: 'Addresses the parent\u2019s embarrassment/stigma reassuringly and the "keep her off school" question directly'
      },
      {
        dom: 'ro',
        text: 'Explains the detection-combing and repeat-treatment principles clearly and checks understanding'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: re-check after treatment (dimeticone repeat at 7 days; wet combing continued until clear), treat only confirmed contacts, return if persistent/treatment failure (resistance/incorrect application), and reassurance \u2014 evidence-based, treat-only-if-confirmed approach'
      }
    ],
    worked: [
      {
        lbl: 'Reassure + de-stigmatise',
        txt: '"First, please don\u2019t be embarrassed \u2014 head lice have nothing to do with being dirty; they live on clean or dirty hair alike, and any child can get them. They\u2019re passed by heads touching, and they can\u2019t jump or fly."'
      },
      {
        lbl: 'Confirm first',
        txt: '"Before treating, let\u2019s actually confirm she has live lice \u2014 an itch or a school letter isn\u2019t proof, and old empty egg cases can hang around. The way to check is wet combing: conditioner on wet hair and a fine detection comb, looking for live lice on the comb."'
      },
      {
        lbl: 'Treat only if confirmed',
        txt: '"If you find live lice, we treat \u2014 either a lotion like dimeticone that physically kills them, repeated after exactly a week to catch any that hatch from eggs, or systematic wet combing every few days for at least two weeks, until you find no live lice at two sessions in a row."'
      },
      {
        lbl: 'Don\u2019t blanket-treat',
        txt: '"There\u2019s no need to treat the whole family \u2018just in case\u2019 \u2014 instead, check everyone with the comb and only treat those who actually have live lice. I\u2019d let close contacts know so they can check too."'
      },
      {
        lbl: 'School',
        txt: '"And she does NOT need to stay off school \u2014 children with head lice can attend as normal. Keeping her off isn\u2019t necessary or recommended."'
      },
      {
        lbl: 'Safety-net',
        txt: '"Re-check after treatment \u2014 after the second dimeticone application, or until the combing sessions are clear. If live lice keep coming back despite treating correctly, come back \u2014 it might be a resistance or application issue and we\u2019ll adjust. Otherwise this is very manageable."'
      }
    ],
    learning: 'Head lice (pediculosis capitis) require EVIDENCE-BASED, treat-only-if-confirmed management. A diagnosis of ACTIVE infestation requires finding LIVE LICE, not just eggs/"nits" \u2014 eggs, especially empty white egg cases well away from the scalp (roughly more than 1 cm, a rough guide, not a firm rule), can be left over from a past infestation and do not confirm active disease \u2014 so use DETECTION (WET) COMBING with a fine-toothed comb through wet, conditioned hair to confirm live lice before treating, and do NOT treat on the basis of itch or a school letter alone or "blanket-treat the whole family to be safe". For confirmed live infestation, options are a PHYSICAL insecticide \u2014 DIMETICONE 4% lotion (BNFC), which physically kills lice so resistance does not affect it, applied per the product and crucially REPEATED after 7 days to kill lice hatched from surviving eggs \u2014 or systematic WET COMBING ("bug busting") with conditioner and a detection comb, in several sessions every few days over at least two weeks until no live lice are found at consecutive sessions, with re-checking. Check household/close CONTACTS and treat them only if they too have live lice, informing contacts so they can check, rather than prophylactic blanket treatment. Bust the myths: head lice are NOT a sign of poor hygiene (they live on clean or dirty hair alike), they cannot JUMP or FLY (spread is by head-to-head contact), and SCHOOL EXCLUSION is NOT necessary (UKHSA exclusion table) \u2014 the child can attend. The hidden agenda is the parent\u2019s embarrassment, the wish to over-treat "to be safe" and the exclusion question; confirm by combing, treat only if confirmed (with the 7-day repeat), check rather than blanket-treat contacts, and reassure with the myth-busting.',
    knowledge: {
      guideline: '[1] BNFC: dimeticone (topical) and the treatment summary on parasitic skin infections \u00b7 [2] UKHSA Health protection in children and young people settings, including education: exclusion table \u00b7 [3] GMC Good medical practice (2024) \u00b7 detection (wet) combing for live lice \u00b7 dimeticone (repeat at 7 days) / wet combing over at least two weeks \u00b7 no school exclusion \u00b7 myth-busting',
      points: [
        {
          h: 'Confirm live lice',
          t: 'Diagnosis needs live lice (detection wet combing), not eggs/"nits" alone (empty cases indicate past infestation). Don\u2019t treat on itch/school letter alone.'
        },
        {
          h: 'Treat only if confirmed',
          t: 'Treat only confirmed live infestation; don\u2019t blanket-treat the family "to be safe".'
        },
        {
          h: 'Treatment options',
          t: 'Dimeticone 4% lotion (BNFC [1]; physical action, unaffected by resistance), repeated after 7 days to kill newly-hatched lice; or systematic wet combing every few days over at least two weeks until clear at consecutive sessions. Apply correctly per instructions.'
        },
        {
          h: 'Contacts',
          t: 'Check household/close contacts; treat only those with live lice, all on the same day; inform contacts to check. No prophylactic blanket treatment.'
        },
        {
          h: 'Myth-busting',
          t: 'Not a sign of poor hygiene (clean or dirty hair alike); lice don\u2019t jump/fly (head-to-head contact); no school exclusion \u2014 child can attend (UKHSA [2]). No need to wash bedding or treat pets.'
        },
        {
          h: 'Treatment failure',
          t: 'Persistent live lice despite treatment \u2192 consider resistance, incorrect application, missed repeat, or re-infestation \u2014 reassess/adjust method.'
        },
        {
          h: 'Never do',
          t: 'Never treat on eggs/itch/school letter alone; never blanket-treat the family; never exclude from school; never reinforce the "poor hygiene" stigma.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Re-check after treatment (dimeticone repeat at 7 days; wet combing until clear); treat only confirmed contacts; return for treatment failure; reassure and de-stigmatise.'
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
      ceg: ['New & undifferentiated presentations', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Lena Ashworth',
        age: '24 years \u00b7 female',
        pmh: [
          'Herald patch ~1 week ago then crop of smaller oval scaly plaques on trunk (Christmas-tree), mildly itchy',
          'Otherwise well; possible preceding viral illness',
          'No palms/soles involvement; not pregnant'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Big oval patch on my chest then loads of smaller ones \u2014 is it ringworm spreading?"',
        reason: 'Video consultation (face-to-face skin check if images unclear) \u2014 spreading scaly rash on the trunk.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Recognise PR',
          d: 'Herald patch then oval plaques in Christmas-tree pattern, well young adult \u2014 pityriasis rosea, not ringworm.'
        },
        { t: '2\u20134', h: 'Differential', d: 'Tinea, guttate psoriasis, nummular eczema, drug eruption.' },
        {
          t: '4\u20136',
          h: 'Syphilis caveat',
          d: 'Palms/soles, systemic, sexual risk \u2192 sexual history + syphilis serology (sexual health); pregnancy history (onset before ~15 weeks).'
        },
        {
          t: '6\u20139',
          h: 'Reassure + manage',
          d: 'Self-limiting ~2\u201312 weeks; emollient/mild to moderate steroid/antihistamine; avoid unnecessary antifungals.'
        },
        {
          t: '9\u201312',
          h: 'Safety-net',
          d: 'Review if atypical/palms-soles/widespread/persistent >3 months/systemic \u2014 reconsider diagnosis.'
        }
      ],
      wordPics: {
        fail: 'Prescribes an antifungal for "spreading ringworm"; never considers secondary syphilis or pregnancy; over-treats a self-limiting rash.',
        pass: 'Recognises pityriasis rosea, reassures and gives symptomatic care, and keeps the syphilis caveat.',
        exc: 'Recognises PR (herald patch + Christmas-tree), reassures about the self-limiting course with symptomatic itch care (no antifungal), keeps the secondary-syphilis caveat (palms/soles, sexual risk \u2192 serology) and pregnancy note, and safety-nets.'
      },
      avoid: [
        {
          dont: '"It\u2019s ringworm spreading \u2014 here\u2019s an antifungal cream."',
          instead: '"This is pityriasis rosea, not ringworm \u2014 it clears by itself over a couple of months; an antifungal won\u2019t help."',
          why: 'Reflexive antifungal misdiagnoses a self-limiting rash and delays correct reassurance.'
        },
        {
          dont: '(No syphilis caveat) reassuring without checking palms/soles or sexual risk.',
          instead: '"Any rash on palms/soles or sexual-health concerns? Another condition can look similar."',
          why: 'Secondary syphilis can mimic pityriasis rosea and must be considered in atypical cases.'
        },
        {
          dont: '(No pregnancy history) ignoring pregnancy.',
          instead: '"Could you be pregnant? It\u2019s worth knowing with this rash."',
          why: 'There is a possible association with adverse outcomes in early pregnancy.'
        }
      ]
    },
    'molluscum-contagiosum': {
      ceg: ['Children & young people', 'New & undifferentiated presentations'],
      stem: {
        name: 'Leo (mother present)',
        age: '5 years \u00b7 male',
        pmh: [
          'Cluster of pearly, dome-shaped, umbilicated papules on trunk/axilla; some surrounding eczema',
          'Well child; spreading slightly',
          'Not immunocompromised; no eyelid/genital lesions'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Pearly bumps with a dimple in the middle \u2014 how do we get rid of them? School/swimming?"',
        reason: 'Video consultation (face-to-face look if images unclear) \u2014 a child with characteristic papules.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Recognise + reassure',
          d: 'Pearly umbilicated papules in a child = molluscum; benign, self-limiting.'
        },
        {
          t: '2\u20134',
          h: 'Why watchful waiting',
          d: 'Resolves usually within 6\u201318 months, sometimes longer (BAD); usually no marks unless picked; harsh treatment risks pain/scarring.'
        },
        {
          t: '4\u20136',
          h: 'Advice',
          d: 'Don\u2019t squeeze/scratch; limit towel sharing; normal school/swimming (cover if wished).'
        },
        { t: '6\u20139', h: 'Eczema', d: 'Emollient + mild topical steroid for surrounding molluscum dermatitis.' },
        {
          t: '9\u201312',
          h: 'When to treat + safety-net',
          d: 'Extensive/immunocompromised/eyelid (red or sore eye \u2192 ophthalmology)/genital/secondary infection \u2192 review/refer; reassure resolution.'
        }
      ],
      wordPics: {
        fail: 'Aggressively treats (freezing/curettage) a healthy child\u2019s molluscum risking scarring; excludes from school/swimming; reinforces contagion anxiety.',
        pass: 'Recognises molluscum, reassures and advises watchful waiting with simple advice and eczema care.',
        exc: 'Recognises molluscum, explains the benign self-limiting course and why watchful waiting is preferred, gives spread/activity advice (no school/swimming exclusion), manages surrounding eczema, and reserves treatment/referral for specific indications.'
      },
      avoid: [
        {
          dont: '"Let\u2019s freeze them off to get rid of them."',
          instead: '"In a healthy child we usually leave them \u2014 they clear by themselves and usually leave no marks if not picked, whereas freezing can be painful and scar."',
          why: 'Aggressive treatment of healthy children\u2019s molluscum risks scarring for limited benefit.'
        },
        {
          dont: '"Keep him off school and swimming until they\u2019re gone."',
          instead: '"He can attend school and swim \u2014 just cover the bumps if you like and stop him scratching."',
          why: 'Molluscum does not require school/swimming exclusion.'
        },
        {
          dont: '(Ignoring eczema) not treating the surrounding rash.',
          instead: '"That eczema-y patch \u2014 a moisturiser and mild steroid cream will settle the itch and reduce scratching/spread."',
          why: 'Surrounding molluscum dermatitis worsens itch and autoinoculation.'
        }
      ]
    },
    'head-lice': {
      ceg: ['Children & young people', 'New & undifferentiated presentations'],
      stem: {
        name: 'Maisie (mother present)',
        age: '8 years \u00b7 female',
        pmh: [
          'Scalp itch after a school "nits" letter',
          'Parent embarrassed ("is she dirty?"); wants to treat whole family + keep off school',
          'Live lice not yet confirmed'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"School letter about nits, now she\u2019s scratching \u2014 should the whole family be treated and keep her off school?"',
        reason: 'Video consultation \u2014 suspected head lice (detection combing at home).'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'De-stigmatise',
          d: 'Not about hygiene; lice live on clean or dirty hair alike; spread by head-to-head contact; don\u2019t jump/fly.'
        },
        {
          t: '2\u20134',
          h: 'Confirm live lice',
          d: 'Detection (wet) combing for LIVE lice; eggs/itch/school letter alone don\u2019t confirm.'
        },
        {
          t: '4\u20137',
          h: 'Treat only if confirmed',
          d: 'Dimeticone lotion with a REPEAT after 7 days, or wet combing every few days for at least two weeks. No blanket family treatment.'
        },
        { t: '7\u20139', h: 'Contacts', d: 'Check contacts; treat only those with live lice; inform them to check.' },
        {
          t: '9\u201312',
          h: 'No exclusion + safety-net',
          d: 'Child can attend school (UKHSA); re-check (dimeticone repeat at 7 days; combing until clear); return for treatment failure (resistance/application).'
        }
      ],
      wordPics: {
        fail: 'Treats the whole family on an itch/school letter, excludes from school, and reinforces the "dirty" stigma; no detection combing or repeat-treatment principle.',
        pass: 'Confirms live lice by combing, treats only if confirmed (dimeticone with a 7-day repeat, or wet combing over two weeks), and busts the hygiene/exclusion myths.',
        exc: 'Confirms live lice by detection combing, treats only confirmed infestation (dimeticone + repeat at 7 days, or wet combing over at least two weeks), checks rather than blanket-treats contacts, and de-stigmatises with clear myth-busting (no exclusion, not poor hygiene).'
      },
      avoid: [
        {
          dont: '"Treat Maisie and the whole family to be safe, and keep her off school."',
          instead: '"Let\u2019s first confirm live lice by wet combing, treat only those who actually have them, and she can stay in school."',
          why: 'Blanket treatment and school exclusion are not evidence-based.'
        },
        {
          dont: '(Treating on itch alone) prescribing without confirming live lice.',
          instead: '"An itch or a school letter isn\u2019t proof \u2014 we comb to find live lice before treating."',
          why: 'Treating without confirmed live lice over-treats and may miss the real cause.'
        },
        {
          dont: '(Reinforcing stigma) "You\u2019ll need to keep her hair cleaner."',
          instead: '"This has nothing to do with cleanliness \u2014 lice live on clean or dirty hair alike, and any child can get them."',
          why: 'The poor-hygiene stigma is inaccurate and shaming.'
        }
      ]
    }
  });

})();
