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
    id:'lichen-planus', title:'"I\u2019ve got these intensely itchy purple bumps on my wrists, and now sore white streaks inside my mouth"', type:'video', duration:12,
    meta:{ age:49, sex:'F', setting:'Video consultation, with the skin and mouth examination arranged face to face — an itchy violaceous rash with oral changes.', system:'Dermatology \u2014 lichen planus: recognition, the 6 Ps & mucosal/malignancy notes' },
    brief:'Mrs Diane Forsyth, 49, has very itchy, flat-topped, violaceous (purple) papules on the flexor wrists and shins with fine white lines on the surface (Wickham striae), plus sore white lacy streaks on the buccal mucosa; she may have nail changes/scalp involvement. Recognise LICHEN PLANUS \u2014 the classic "6 Ps" (Pruritic, Planar/flat-topped, Polygonal, Purple/violaceous, Papules/Plaques, with Wickham striae), favouring flexor wrists/ankles/shins, often with ORAL (white lacy/reticular) and sometimes nail/scalp/genital involvement; consider triggers (drug-induced lichenoid eruptions — review her bendroflumethiazide and all medicines; the hepatitis C association, which applies to some ORAL lichen planus — test with consent), manage (potent or very potent topical steroids first-line, BAD/PCDS; oral/severe disease needs specialist input), counsel it is usually self-limiting over months to a year or two but can recur, and note that ORAL lichen planus carries about a 1% risk of cancerous change over 10 years (BAD) needing long-term dental/oral medicine review, and erosive genital disease needs specialist follow-up; know the NICE NG12 (updated April 2026) oral criteria (suspected cancer pathway referral for unexplained oral ulceration lasting more than 3 weeks; urgent dental referral for a lump, or a red or red and white patch consistent with erythroplakia or erythroleukoplakia). Reassure and manage the itch; refer if diagnostic doubt, severe, erosive or nail/scalp scarring. The skin and mouth need a face-to-face examination.',
    script:{
      opening:'"Doctor, I\u2019ve had these really itchy purple bumps come up on the insides of my wrists and my shins \u2014 they\u2019ve got tiny white lines on them. And now the inside of my cheeks has gone sore with white lacy streaks. What is this, and is it serious?"',
      facts:[
        { topic:'Recognise lichen planus \u2014 the 6 Ps', text:'LICHEN PLANUS: the classic "6 Ps" \u2014 PRURITIC, PLANAR (flat-topped), POLYGONAL, PURPLE/violaceous, PAPULES/plaques \u2014 with fine white lines on the surface (WICKHAM STRIAE), typically on the FLEXOR wrists, ankles and shins. Her itchy violaceous flat-topped papules with Wickham striae are classic.' },
        { topic:'Mucosal & other sites', text:'Look for other sites: ORAL lichen planus (white LACY/reticular streaks on buccal mucosa — hers are reticular and sore; sometimes the disease is erosive/ulcerated and painful), and nail (ridging/pterygium), SCALP (scarring alopecia \u2014 lichen planopilaris), and GENITAL involvement. Koebner phenomenon (lesions at sites of trauma) may be seen.' },
        { topic:'Triggers & associations', text:'Consider a drug-induced LICHENOID eruption (e.g. thiazides, antimalarials, beta-blockers, ACE inhibitors, NSAIDs \u2014 review medications) and the recognised association of some ORAL lichen planus with chronic HEPATITIS C (BAD oral lichen planus leaflet 2019 — consider testing with consent). Dental amalgam next to oral lesions can cause a local lichenoid reaction. Most cutaneous lichen planus is idiopathic.' },
        { topic:'Management', text:'Manage cutaneous LP: POTENT (or very potent) TOPICAL CORTICOSTEROIDS are first-line, as weaker ones often fail (BAD 2024; PCDS; moderate in skin folds; quantities per BNF), plus antihistamines/emollients for itch; for oral LP, topical steroids (e.g. mouthwash/paste) and good oral hygiene. Extensive, erosive, nail/scalp-scarring or refractory disease needs DERMATOLOGY referral (phototherapy/systemic options).' },
        { topic:'Course & malignancy note', text:'Counsel that cutaneous lichen planus is usually SELF-LIMITING over months to ~1\u20132 years (may leave post-inflammatory pigmentation) but can recur. Note that ORAL lichen planus carries a SMALL risk of malignant transformation (SCC) — about 1% over 10 years (BAD) — warranting long-term dental/oral medicine review, and erosive genital lichen planus also needs specialist follow-up. NICE NG12 (updated April 2026): consider a suspected cancer pathway referral for unexplained oral ulceration lasting more than 3 weeks, and an urgent dental referral for a lump, or a red or red and white patch consistent with erythroplakia or erythroleukoplakia. Advise stopping smoking and limiting alcohol.' },
        { topic:'Hidden agenda', text:'She wants a name, relief from the itch, and reassurance it isn\u2019t serious. Recognise LP, treat the itch with potent topical steroids, review drugs/associations, reassure about the usually self-limiting course, and arrange long-term dental/specialist monitoring for the oral disease. No NICE NG12 (updated April 2026) suspected cancer criterion is met at present (reticular streaks, no persistent ulcer, lump or red patch).' },
      ],
      ice:{ ideas:'Unknown itchy purple rash + mouth soreness; worried it\u2019s serious/contagious.', concerns:'The intense itch; the sore mouth; whether it\u2019s serious or catching.', expectations:'A diagnosis and relief. What she needs: recognition of lichen planus, potent topical steroids, drug/hep C review, reassurance on course, and long-term dental/specialist monitoring for oral disease.' },
      cues:['Pruritic, planar, polygonal, purple papules with Wickham striae on flexor wrists/shins + oral white lacy streaks \u2014 lichen planus (the 6 Ps).','Review drugs (lichenoid eruption — her thiazide) and consider the hepatitis C association of oral LP; potent topical steroids first-line.','Oral LP has a small malignant-transformation (SCC) risk, about 1% over 10 years (BAD) — monitor + dental review; NICE NG12 (updated April 2026): oral ulcer >3 weeks or red/red-and-white patch → referral.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises LICHEN PLANUS from the 6 Ps (pruritic, planar, polygonal, purple papules) with Wickham striae on flexor wrists/ankles/shins' },
      { dom:'tasks', text:'Looks for ORAL (white lacy/reticular, sometimes erosive) and nail/scalp/genital involvement and the Koebner phenomenon' },
      { dom:'tasks', text:'Considers a drug-induced LICHENOID eruption (reviews medications) and the hepatitis C association with oral lichen planus' },
      { dom:'tasks', text:'Manages with POTENT TOPICAL CORTICOSTEROIDS first-line (+ antihistamines/emollients; topical steroids for oral LP) and refers dermatology for extensive/erosive/nail-scalp-scarring/refractory disease' },
      { dom:'tasks', text:'Counsels the usually self-limiting course and notes the SMALL malignant-transformation (SCC) risk of ORAL LP (about 1% over 10 years, BAD) and erosive genital LP, arranging monitoring/dental review and knowing the NICE NG12 (updated April 2026) oral criteria' },
      { dom:'rto',   text:'Reassures appropriately (not serious/not contagious), addresses the itch and the sore mouth, and checks understanding' },
      { dom:'rto',   text:'Explains the diagnosis and plan accessibly without over-alarming about the malignancy note' },
      { dom:'gs',    text:'Safety-nets and follows up: review of itch/response, long-term dental/specialist monitoring for the oral disease (about 1% risk over 10 years), drug/hep C review, and when to return \u2014 correct naming + treatment + appropriate monitoring' },
    ],
    worked:[
      { lbl:'Name it', txt:'(After seeing the skin and mouth in person.) "This is lichen planus — the itchy, flat-topped purple bumps with those fine white lines, and the lacy white streaks in your mouth, are typical. It\u2019s not cancer and it\u2019s not contagious, so let me reassure you on that."' },
      { lbl:'Treat the itch', txt:'"For the bumps, a strong steroid cream usually settles them and the itch, plus an antihistamine and good moisturiser. For your mouth, a steroid mouthwash or paste and gentle oral care help."' },
      { lbl:'Review triggers', txt:'"Let me check your medicines, as a few tablets can trigger a similar rash — including your water tablet — and, if you agree, I’ll arrange a blood test for hepatitis C, which is occasionally linked to lichen planus in the mouth."' },
      { lbl:'Course', txt:'"The skin version usually fades over months \u2014 sometimes leaving a brownish mark for a while \u2014 and can occasionally come back. The mouth type can be more persistent."' },
      { lbl:'The mouth note', txt:'"One reason I want to keep an eye on the mouth: lichen planus there carries a small risk of changing over time — about 1 in 100 over ten years — so I’d like your dentist to review it regularly, and any ulcer lasting more than three weeks or a red patch needs checking quickly. Nothing to panic about, just sensible monitoring."' },
      { lbl:'Safety-net', txt:'"Come back if it spreads a lot, the mouth becomes very sore or ulcerated, your nails or scalp get involved, or it\u2019s not settling \u2014 then I\u2019d involve a skin specialist."' },
    ],
    learning:'LICHEN PLANUS is recognised by the classic "6 Ps" \u2014 PRURITIC, PLANAR (flat-topped), POLYGONAL, PURPLE/violaceous PAPULES/plaques \u2014 with fine white surface lines (WICKHAM STRIAE), favouring the flexor wrists, ankles and shins, and often with ORAL involvement (white lacy/reticular, sometimes erosive streaks) and sometimes nail (ridging/pterygium), SCALP (scarring alopecia/lichen planopilaris) and GENITAL disease, with Koebner phenomenon at trauma sites. Consider a drug-induced LICHENOID eruption (thiazides, antimalarials, beta-blockers, ACE inhibitors, NSAIDs \u2014 review medications) and the recognised association of oral lichen planus with HEPATITIS C. Manage cutaneous LP with POTENT (or very potent) TOPICAL CORTICOSTEROIDS first-line (BAD 2024; PCDS) plus antihistamines/emollients for itch, and oral LP with topical steroids and oral hygiene; refer to dermatology for extensive, erosive, nail/scalp-scarring or refractory disease. Counsel that cutaneous lichen planus is usually SELF-LIMITING over months to ~1\u20132 years (may leave post-inflammatory pigmentation) but can recur, and note that ORAL lichen planus carries a SMALL risk of malignant transformation (SCC) — about 1% over 10 years (BAD) — and erosive genital disease also needs follow-up, warranting monitoring and dental/specialist review; NICE NG12 (updated April 2026): unexplained oral ulceration for more than 3 weeks, or a lump or red/red-and-white patch, needs referral. Reassure (not serious/not contagious), treat the itch, review drugs/associations, and arrange appropriate monitoring. No NICE NG12 (updated April 2026) criterion is met at present, but the oral criteria are the safety-net.',
    knowledge:{
      guideline:'[1] British Association of Dermatologists, Lichen planus patient information leaflet (2024) · [2] British Association of Dermatologists, Oral lichen planus patient information leaflet (2019) · [3] Primary Care Dermatology Society, lichen planus clinical guidance (accessed 2026) · [4] NICE NG12 (updated April 2026), oral cancer recommendations · [5] BNF, topical corticosteroids (potency and quantities) · the 6 Ps + Wickham striae · oral/nail/scalp involvement · potent topical steroids · mucosal malignancy monitoring',
      points:[
        { h:'Recognise LP', t:'The 6 Ps: pruritic, planar, polygonal, purple papules/plaques, with Wickham striae, on flexor wrists/ankles/shins.' },
        { h:'Other sites', t:'Oral (white lacy/reticular, sometimes erosive), nail (ridging/pterygium), scalp (scarring alopecia), genital; Koebner phenomenon.' },
        { h:'Triggers/associations', t:'Drug-induced lichenoid eruption (thiazides, antimalarials, beta-blockers, ACE inhibitors, NSAIDs \u2014 review meds); hepatitis C association with oral LP [2] (consider testing with consent).' },
        { h:'Management', t:'Potent or very potent topical corticosteroids first-line [1][3][5] + antihistamines/emollients; topical steroids for oral LP. Dermatology referral for extensive/erosive/nail-scalp-scarring/refractory disease.' },
        { h:'Course', t:'Cutaneous LP usually self-limiting over months to ~1\u20132 years (may leave pigmentation); can recur. Oral LP more persistent.' },
        { h:'Malignancy note', t:'Oral LP carries a small malignant-transformation (SCC) risk — about 1% over 10 years [2] — so long-term dental/oral medicine review; erosive genital LP needs specialist follow-up. NICE NG12 (updated April 2026) [4]: oral ulceration >3 weeks → suspected cancer pathway; lump or red/red-and-white patch → urgent dental referral.' },
        { h:'Never do', t:'Never ignore persistent erosive oral/genital LP; never miss a drug cause; never alarm unnecessarily about the malignancy note.' },
        { h:'Safety-net & follow-up', t:'Review itch/response; long-term dental/specialist monitoring for the oral disease; return for spread, severe/ulcerated mouth, nail/scalp involvement, or non-resolution.' }
      ]
    }
  };

  /* ===== 245. Pityriasis rosea ===== */
  const c245 = {
    id:'pityriasis-rosea', title:'"A big oval patch came up on my chest a week ago, now there\u2019s loads of smaller ones \u2014 is it ringworm spreading?"', type:'video', duration:12,
    meta:{ age:24, sex:'F', setting:'Video consultation, with the skin (including palms and soles) examined face to face if the images are unclear — a spreading scaly rash on the trunk.', system:'Dermatology \u2014 pityriasis rosea: herald patch, reassurance & the syphilis caveat' },
    brief:'Miss Lena Ashworth, 24, had a single larger oval scaly patch (HERALD PATCH) on her trunk ~1 week ago, followed by a crop of smaller oval scaly plaques on the trunk in a "Christmas-tree" distribution along the skin lines, mildly itchy, otherwise well (possible preceding viral illness). Recognise PITYRIASIS ROSEA \u2014 a self-limiting rash (herald patch then smaller oval lesions following Langer lines, "fir-tree/Christmas-tree" on the back), often post-viral, mostly in young adults; distinguish from tinea (ringworm), guttate psoriasis, eczema and \u2014 importantly \u2014 SECONDARY SYPHILIS (which can mimic it; BASHH 2024: the rash involves the palms and soles in 11–70% and usually does not itch — take a sexual history and arrange serology, ideally via sexual health services, if atypical); manage with REASSURANCE and symptomatic care (emollients, a mild to moderately potent topical steroid such as hydrocortisone 1% or clobetasone butyrate 0.05% (PCDS), sedating antihistamine at night if sleep is affected), explaining it resolves spontaneously, lasting about 2–12 weeks (Cochrane 2019; PCDS: usually within 12 weeks); ask about pregnancy (small studies found higher miscarriage rates when it began before about 15 weeks, though a 2024 study found no excess risk); advise it is not significantly contagious and pigmentation may persist briefly. Avoid unnecessary antifungals/antibiotics. No NICE NG12 (updated April 2026) cancer link.',
    script:{
      opening:'"About a week ago I got one big oval scaly patch on my chest, and now I\u2019ve come out in loads of smaller oval ones across my back and tummy. It\u2019s a bit itchy. I thought the first one was ringworm \u2014 is it spreading? Should I have a cream?"',
      facts:[
        { topic:'Recognise pityriasis rosea', text:'PITYRIASIS ROSEA: a single larger oval scaly HERALD PATCH first, followed days-to-weeks later by a crop of smaller oval scaly plaques on the TRUNK following the skin cleavage lines \u2014 the classic "FIR-TREE / CHRISTMAS-TREE" pattern on the back \u2014 mildly itchy, in an otherwise-well young adult, often after a viral illness. Her herald patch then Christmas-tree crop is classic.' },
        { topic:'Distinguish the differential', text:'Distinguish from TINEA/ringworm (usually fewer lesions, annular with central clearing, scaly raised edge \u2014 the herald patch can mimic it), GUTTATE psoriasis (smaller, post-strep, less oval/scaly-collarette), nummular ECZEMA, and a drug eruption.' },
        { topic:'The syphilis caveat', text:'IMPORTANT \u2014 SECONDARY SYPHILIS can MIMIC pityriasis rosea; clues that should prompt consideration include involvement of the PALMS and SOLES, lymphadenopathy, systemic symptoms, mucosal lesions, or sexual-history risk \u2014 in which case take a sexual history and consider SYPHILIS SEROLOGY, ideally via sexual health services with partner notification if positive (BASHH UK national guideline on syphilis 2024: the secondary syphilis rash involves the palms and soles in 11–70% and usually does not itch). Don’t miss it in atypical presentations.' },
        { topic:'Reassure & manage symptomatically', text:'Manage with REASSURANCE: pityriasis rosea is SELF-LIMITING and resolves SPONTANEOUSLY, lasting about 2–12 weeks (Cochrane 2019; BAD: clears within a few months). Symptomatic care only — no treatment if it does not itch; for itch, an emollient or a mild to moderately potent topical steroid such as hydrocortisone 1% or clobetasone butyrate 0.05% (PCDS), and a sedating antihistamine at night if sleep is affected (doses per BNF). It is not significantly contagious. Post-inflammatory pigmentation may persist briefly (especially in darker skin). Avoid unnecessary antifungals/antibiotics.' },
        { topic:'Pregnancy note & safety-net', text:'Note a possible association with adverse outcomes in early PREGNANCY — small studies found higher miscarriage rates when pityriasis rosea began before about 15 weeks (Drago 2008; Manduca 2025), although a 2024 matched study found no excess risk (Ong 2024) — so ask about possible pregnancy and, if pregnant, inform the midwife or obstetric team for closer follow-up. Safety-net: review if atypical, palms/soles involved, very widespread/persistent beyond ~3 months, or systemic features \u2014 reconsidering the diagnosis (including syphilis).' },
        { topic:'Hidden agenda', text:'She fears "ringworm spreading" and expects an antifungal cream. Recognise pityriasis rosea, reassure about the self-limiting course, give symptomatic itch advice, avoid unnecessary antifungals, and keep the syphilis caveat in mind for atypical features. No NICE NG12 (updated April 2026) cancer pathway applies.' },
      ],
      ice:{ ideas:'It\u2019s ringworm spreading; expects an antifungal cream.', concerns:'The spreading rash and itch; whether it\u2019s contagious/serious.', expectations:'An antifungal/cream. What she needs: recognition of pityriasis rosea, reassurance (self-limiting), symptomatic itch care, no unnecessary antifungals, and the syphilis caveat for atypical features.' },
      cues:['A larger oval scaly herald patch then smaller oval plaques in a Christmas-tree pattern on the trunk, mildly itchy, well young adult \u2014 pityriasis rosea.','Self-limiting, about 2–12 weeks — reassure + symptomatic itch care (emollient; mild to moderately potent steroid, e.g. clobetasone 0.05%); avoid unnecessary antifungals/antibiotics.','Caveat: secondary syphilis can mimic it (palms/soles, systemic, sexual risk) \u2014 consider sexual history/serology via sexual health if atypical (BASHH 2024: palms/soles in 11–70%); pregnancy note (onset before about 15 weeks).']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises PITYRIASIS ROSEA \u2014 a herald patch followed by smaller oval scaly plaques on the trunk in a Christmas-tree distribution, mildly itchy, in an otherwise-well young adult (often post-viral)' },
      { dom:'tasks', text:'Distinguishes it from tinea/ringworm, guttate psoriasis, nummular eczema and drug eruption' },
      { dom:'tasks', text:'Keeps the SECONDARY SYPHILIS caveat in mind (palms/soles involvement, systemic features, sexual risk) and would take a sexual history/consider syphilis serology (ideally via sexual health services) if atypical' },
      { dom:'tasks', text:'Manages with REASSURANCE (self-limiting, about 2–12 weeks) and symptomatic care (emollients, mild to moderately potent topical steroid such as clobetasone 0.05%, sedating antihistamine at night), avoiding unnecessary antifungals/antibiotics' },
      { dom:'tasks', text:'Notes the pregnancy consideration (asks about possible pregnancy; conflicting evidence of miscarriage risk with onset before about 15 weeks; informs the midwife/obstetric team if pregnant)' },
      { dom:'rto',   text:'Reassures about the "ringworm spreading" fear, explains it is self-limiting and not significantly contagious, and checks understanding' },
      { dom:'rto',   text:'Responds to the expectation of an antifungal by explaining why it isn\u2019t needed, without being dismissive' },
      { dom:'gs',    text:'Safety-nets and follows up: review if atypical/palms-soles/very widespread/persistent beyond ~3 months or systemic features (reconsider diagnosis incl. syphilis) \u2014 reassurance + symptomatic care, not unnecessary antifungals' },
    ],
    worked:[
      { lbl:'Reassure + name it', txt:'"Good news \u2014 this isn\u2019t ringworm spreading. That first bigger patch is called a \u2018herald patch\u2019, and the smaller oval ones following your skin lines are the classic pattern of pityriasis rosea, a harmless, self-limiting rash, often after a mild viral illness."' },
      { lbl:'Course', txt:'"It clears on its own, usually within about twelve weeks and often sooner. It\u2019s not really contagious, and it may leave faint marks for a while as it fades, which also settle."' },
      { lbl:'Itch care', txt:'"For the itch, a good moisturiser, a mild to moderate steroid cream and an antihistamine at night if it keeps you awake are all you need \u2014 no antifungal cream required, as that wouldn\u2019t help this."' },
      { lbl:'Quick checks', txt:'"Just to be thorough \u2014 any rash on your palms or soles, feeling generally unwell, or any sexual-health concerns? \u2026 No. Sometimes another condition can look similar, so I check. And could you be pregnant?"' },
      { lbl:'Safety-net', txt:'"Come back if it spreads to your palms and soles, you feel unwell, it\u2019s still there after about three months, or it changes \u2014 then I\u2019d reconsider and possibly do a blood test. Otherwise, let it run its course."' },
      { lbl:'Close', txt:'"So: reassuring, treat the itch, no antifungal, and it\u2019ll settle by itself. Any questions?"' },
    ],
    learning:'PITYRIASIS ROSEA is a self-limiting rash recognised by a single larger oval scaly HERALD PATCH appearing first, followed days-to-weeks later by a crop of smaller oval scaly plaques on the TRUNK following the skin cleavage (Langer) lines \u2014 the classic "FIR-TREE / CHRISTMAS-TREE" pattern on the back \u2014 mildly itchy, in an otherwise-well young adult, often after a viral illness. Distinguish it from tinea/ringworm (fewer lesions, annular with central clearing \u2014 the herald patch can mimic it), guttate psoriasis (smaller, post-strep), nummular eczema and drug eruptions. Importantly, SECONDARY SYPHILIS can mimic pityriasis rosea, and clues such as PALM and SOLE involvement, lymphadenopathy, systemic symptoms, mucosal lesions or sexual-history risk should prompt a sexual history and consideration of syphilis serology \u2014 do not miss it in atypical presentations. Manage with REASSURANCE: it resolves spontaneously, lasting about 2–12 weeks (Cochrane 2019); symptomatic care only (emollients, a mild to moderately potent topical steroid such as hydrocortisone 1% or clobetasone butyrate 0.05% (PCDS), and/or a sedating antihistamine at night for itch); it is not significantly contagious; post-inflammatory pigmentation may persist briefly (especially in darker skin); and unnecessary antifungals/antibiotics should be avoided. Note a possible association with miscarriage if it begins before about 15 weeks of PREGNANCY (small studies; a 2024 matched study found no excess risk), so ask about pregnancy and inform the midwife/obstetric team if pregnant. Secondary syphilis (BASHH 2024: palms and soles in 11–70%) is tested for via sexual health services. Safety-net to review if atypical, palms/soles involved, very widespread or persistent beyond ~3 months, or systemic features arise \u2014 reconsidering the diagnosis (including syphilis). The hidden agenda is the "ringworm spreading" fear and an expectation of an antifungal; recognise the condition, reassure, give symptomatic care, and keep the syphilis caveat in mind. No NICE NG12 (updated April 2026) cancer pathway applies.',
    knowledge:{
      guideline:'[1] Primary Care Dermatology Society, pityriasis rosea clinical guidance (accessed 2026) · [2] British Association of Dermatologists, Pityriasis rosea patient information leaflet (2023) · [3] BASHH UK national guideline on the management of syphilis (2024) · [4] Contreras-Ruiz et al., Cochrane 2019 CD005068 (interventions for pityriasis rosea) · [5] Drago et al., J Am Acad Dermatol 2008; Manduca et al., Int J Womens Dermatol 2025; Ong et al., J Am Acad Dermatol 2024 (pityriasis rosea in pregnancy) · [6] BNF, topical corticosteroids and antihistamines · herald patch + Christmas-tree distribution · self-limiting, symptomatic care · secondary-syphilis mimic · pregnancy note',
      points:[
        { h:'Recognise PR', t:'Herald patch then smaller oval scaly plaques on the trunk following skin lines (Christmas-tree on the back), mildly itchy, well young adult, often post-viral.' },
        { h:'Differential', t:'Tinea/ringworm (annular, central clearing), guttate psoriasis (post-strep), nummular eczema, drug eruption.' },
        { h:'Syphilis caveat', t:'Secondary syphilis mimics PR — palms/soles involvement (11–70%, BASHH [3]), systemic features, sexual risk → sexual history + syphilis serology via sexual health services. Don\u2019t miss it in atypical cases.' },
        { h:'Reassure & manage', t:'Self-limiting, about 2–12 weeks [4]; symptomatic only (emollients, mild to moderately potent topical steroid such as clobetasone 0.05% [1], sedating antihistamine at night, doses per BNF [6]); not significantly contagious; avoid unnecessary antifungals/antibiotics.' },
        { h:'Pregnancy note', t:'Conflicting evidence of higher miscarriage rates with onset before about 15 weeks [5] — ask about pregnancy; inform the midwife/obstetric team if pregnant.' },
        { h:'Pigmentation', t:'Post-inflammatory pigmentation may persist briefly, especially in darker skin; reassure it settles.' },
        { h:'Never do', t:'Never reflexively prescribe an antifungal for PR; never miss secondary syphilis in atypical/palms-soles cases; never over-treat a self-limiting rash.' },
        { h:'Safety-net & follow-up', t:'Review if atypical, palms/soles, very widespread/persistent beyond ~3 months, or systemic features \u2014 reconsider diagnosis (incl. syphilis serology).' }
      ]
    }
  };

  /* ===== 246. Molluscum contagiosum ===== */
  const c246 = {
    id:'molluscum-contagiosum', title:'"My little boy\u2019s got a cluster of small pearly bumps with a dimple in the middle \u2014 how do we get rid of them?"', type:'video', duration:12,
    meta:{ age:5, sex:'M', setting:'Video consultation, parent present, with the skin examination arranged face to face if the images are unclear — a child with characteristic papules.', system:'Dermatology / Paediatrics \u2014 molluscum contagiosum: reassurance & avoiding harm' },
    brief:'A mother brings Leo, 5, with a cluster of small, dome-shaped, PEARLY/flesh-coloured PAPULES with a central DIMPLE (umbilication) on the trunk/axilla, some with surrounding mild eczema; the child is well. She wants them "gotten rid of". Recognise MOLLUSCUM CONTAGIOSUM \u2014 a common, benign, SELF-LIMITING viral (poxvirus) skin infection of children, spread by contact/autoinoculation, characterised by umbilicated pearly papules \u2014 and that it RESOLVES SPONTANEOUSLY, usually within 6 to 18 months though some children take longer (BAD 2020), and untreated spots usually heal without marks (picked, squeezed or inflamed spots can scar), so active/harsh treatment is generally NOT recommended in healthy children (risks scarring/pain); reassure and give simple advice (avoid squeezing/scratching, don\u2019t share towels, treat surrounding eczema/itch, normal activities/school/swimming allowed — UKHSA: no exclusion period); consider treatment/referral only in specific situations (extensive, very symptomatic, immunocompromised, genital lesions considered with safeguarding in mind, or eyelid-margin lesions with a red or sore eye — ophthalmology). Avoid over-treatment; manage parental expectation for a "cure". No NICE NG12 (updated April 2026) cancer link.',
    script:{
      opening:'"Leo\u2019s got these little pearly bumps in a cluster under his arm and on his tummy \u2014 some have a tiny dimple in the middle. They\u2019re spreading a bit and one area\u2019s gone a bit eczema-y. How do we get rid of them? Should he stay off school or swimming?"',
      facts:[
        { topic:'Recognise molluscum', text:'MOLLUSCUM CONTAGIOSUM: clusters of small, dome-shaped, PEARLY/flesh-coloured PAPULES with a central DIMPLE (umbilication), commonly on the trunk, axillae and flexures of CHILDREN; a benign viral (poxvirus) infection spread by skin contact and autoinoculation (scratching). Surrounding eczema/inflammation ("molluscum dermatitis") is common. Leo\u2019s umbilicated pearly papules are classic.' },
        { topic:'It is self-limiting \u2014 the key message', text:'KEY — molluscum is SELF-LIMITING and resolves SPONTANEOUSLY — BAD (2020): usually within 6 to 18 months, although new spots can appear as old ones fade and some children take longer — and untreated spots usually heal WITHOUT marks (picking, squeezing or inflammation can leave scars). Spots often go red and inflamed just before they clear, which is the immune response, not infection. In healthy children, active/harsh treatment is generally NOT recommended because it risks pain, scarring and distress for limited benefit. The main "treatment" is reassurance and time.' },
        { topic:'Simple advice', text:'Advise: avoid SQUEEZING/scratching/picking (spreads it and risks scarring/infection), don\u2019t share towels/baths with siblings where practical, cover lesions if weeping, and treat surrounding ECZEMA/itch (regular emollients and, for an inflamed itchy patch, a short course of a mild topical corticosteroid such as hydrocortisone 1%, dose per BNFC — NICE CG57). NORMAL activities are fine — NO exclusion from school or swimming is needed (UKHSA exclusion table) (cover lesions for swimming if desired).' },
        { topic:'When to consider treatment/referral', text:'Consider treatment/referral only in specific situations: very EXTENSIVE or persistent/very symptomatic lesions, IMMUNOCOMPROMISED children (can be widespread/atypical), GENITAL lesions (in young children usually autoinoculation, but the whole picture is considered with safeguarding in mind — GMC 0–18), EYELID-margin lesions, especially with a red or sore eye (conjunctivitis) — refer to OPHTHALMOLOGY, or significant secondary infection. Options (cryotherapy, topical agents) are used selectively and weighed against the self-limiting nature.' },
        { topic:'Manage the parent\u2019s expectation', text:'COMMUNICATION \u2014 the parent wants them "gone"; explain WHY watchful waiting is preferred (harm vs benefit), reassure about the benign self-limiting course and that untreated spots usually heal without marks, address the eczema/itch, and give clear advice on spread/activities \u2014 rather than agreeing to aggressive treatment that may scar.' },
        { topic:'Hidden agenda', text:'The parent expects a "cure" and may worry about contagion/school. Recognise molluscum, reassure (self-limiting, usually heals without marks if not picked), avoid harmful over-treatment, manage the eczema, allow normal activities, and treat/refer only selectively. No NICE NG12 (updated April 2026) cancer pathway applies.' },
      ],
      ice:{ ideas:'The bumps need actively removing; worried about spread/school/swimming.', concerns:'The spreading/appearance; whether he can attend school/swim; the eczema patch.', expectations:'To get rid of them. What is needed: recognition of molluscum, reassurance (self-limiting, usually heals without marks if not picked), simple spread/activity advice, eczema treatment, and treatment only if specific indications.' },
      cues:['Clusters of pearly, dome-shaped, umbilicated papules in a child, often with surrounding eczema \u2014 molluscum contagiosum (benign viral).','Self-limiting, usually within 6–18 months, sometimes longer (BAD 2020), usually without marks unless picked/inflamed — active/harsh treatment generally NOT recommended in healthy children.','Advice: don\u2019t squeeze/scratch, treat surrounding eczema, normal school/swimming allowed; treat/refer only if extensive/immunocompromised/eyelid (with red or sore eye → ophthalmology)/genital.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises MOLLUSCUM CONTAGIOSUM \u2014 clusters of pearly, dome-shaped, umbilicated papules in a child, spread by contact/autoinoculation, often with surrounding eczema' },
      { dom:'tasks', text:'Knows it is SELF-LIMITING (resolves spontaneously, usually within 6–18 months and sometimes longer, BAD 2020; untreated spots usually heal without marks, though picked or inflamed spots can scar) and that active/harsh treatment is generally NOT recommended in healthy children' },
      { dom:'tasks', text:'Gives simple advice \u2014 avoid squeezing/scratching, limit towel/bath sharing, treat surrounding eczema/itch \u2014 and correctly advises NO exclusion from school or swimming' },
      { dom:'tasks', text:'Identifies the specific situations where treatment/referral is considered (extensive/very symptomatic, immunocompromised, genital lesions with safeguarding in mind, eyelid-margin lesions with a red or sore eye → ophthalmology, secondary infection)' },
      { dom:'tasks', text:'Manages the surrounding eczema (emollients, mild topical steroid) appropriately' },
      { dom:'rto',   text:'Manages the parent\u2019s expectation for a "cure" \u2014 explaining why watchful waiting is preferred (harm vs benefit) \u2014 reassuring about the benign course without being dismissive' },
      { dom:'rto',   text:'Checks understanding of spread/activity advice and addresses the school/swimming question directly' },
      { dom:'gs',    text:'Safety-nets and follows up: review if extensive/very symptomatic/immunocompromised/eyelid or genital involvement/secondary infection, eczema management, and reassurance about spontaneous resolution \u2014 avoiding harmful over-treatment' },
    ],
    worked:[
      { lbl:'Name + reassure', txt:'"These are molluscum \u2014 a very common, harmless viral skin infection in children. Those pearly bumps with the little dimple in the middle are the giveaway. The reassuring news is they clear up completely on their own."' },
      { lbl:'Why we usually leave them', txt:'"I know you want them gone, but in a healthy child we usually don\u2019t actively treat them \u2014 because they usually go by themselves within six to eighteen months — sometimes a bit longer — and normally heal without marks if they’re not picked, whereas freezing or burning them off can be painful and can scar. Time is the kindest treatment."' },
      { lbl:'School/swimming', txt:'"He absolutely does not need to stay off school, and he can swim \u2014 you can cover the bumps with a plaster or rash vest if you like. Just try to stop him scratching or squeezing them, as that spreads them."' },
      { lbl:'Eczema patch', txt:'"That eczema-y patch around them is common \u2014 a good moisturiser and a mild steroid cream will settle the itch, which also helps stop him scratching and spreading them."' },
      { lbl:'Practical advice', txt:'"Avoid sharing towels and baths with siblings where you can, and the bumps will gradually crust and disappear. They sometimes look angrier just before they clear, which is normal."' },
      { lbl:'Safety-net', txt:'"Come back if they become very widespread, very sore or infected, appear on the eyelids — especially with a red or sore eye, which would need the eye team — or if Leo has any condition affecting his immune system \u2014 then we\u2019d consider treatment. Otherwise, reassurance and patience."' },
    ],
    learning:'MOLLUSCUM CONTAGIOSUM is a common, benign, self-limiting viral (poxvirus) skin infection of children, recognised by clusters of small, dome-shaped, PEARLY/flesh-coloured PAPULES with a central DIMPLE (umbilication), commonly on the trunk, axillae and flexures, spread by skin contact and autoinoculation (scratching), and frequently with surrounding eczema ("molluscum dermatitis"). The key message is that it is SELF-LIMITING and resolves SPONTANEOUSLY — usually within 6 to 18 months, sometimes longer (BAD 2020) — and untreated spots usually heal WITHOUT marks (picked or inflamed spots can scar), so in healthy children active or harsh treatment is generally NOT recommended because it risks pain, scarring and distress for limited benefit; reassurance and time are the main approach. Advise avoiding squeezing/scratching/picking (which spreads it and risks scarring/infection), limiting towel/bath sharing, covering weeping lesions, and treating surrounding eczema/itch with emollients and a mild topical steroid; importantly, NO exclusion from school or swimming is needed (UKHSA; lesions may be covered for swimming). Consider treatment/referral only in specific situations: very extensive or persistent/very symptomatic lesions, immunocompromised children (widespread/atypical), genital lesions (with appropriate safeguarding awareness in children) or eyelid-margin lesions (with a red or sore eye → ophthalmology), or significant secondary infection \u2014 with selective options (cryotherapy, topical agents) weighed against the self-limiting nature. The hidden agenda is the parent\u2019s wish for a "cure" and worry about contagion/school; explain why watchful waiting is preferred (harm vs benefit), reassure about the benign course and that untreated spots usually heal without marks, manage the eczema, allow normal activities, and treat/refer only selectively. No NICE NG12 (updated April 2026) cancer pathway applies.',
    knowledge:{
      guideline:'[1] British Association of Dermatologists (BAD) patient information leaflet: molluscum contagiosum (updated July 2020) · [2] UKHSA Health protection in children and young people settings, including education: exclusion table · [3] NICE CG57 Atopic eczema in under 12s (2007, updated 2023) · [4] BNFC: hydrocortisone (topical), emollients · [5] GMC 0–18 years (2007, updated 2018) · benign self-limiting viral infection · avoid harsh treatment in healthy children · no school/swimming exclusion · selective treatment',
      points:[
        { h:'Recognise molluscum', t:'Clusters of pearly, dome-shaped, umbilicated papules in children; viral (poxvirus); spread by contact/autoinoculation; surrounding eczema common.' },
        { h:'Self-limiting', t:'BAD [1]: resolves spontaneously, usually within 6–18 months, sometimes longer; untreated spots usually heal without marks (picked/inflamed spots can scar). Active/harsh treatment generally not recommended in healthy children (pain/scarring risk).' },
        { h:'Simple advice', t:'Avoid squeezing/scratching, limit towel/bath sharing, cover weeping lesions, treat surrounding eczema/itch. Normal activities — no school/swimming exclusion (UKHSA [2]; cover lesions for swimming if desired).' },
        { h:'When to treat/refer', t:'Extensive/very symptomatic, immunocompromised, genital (safeguarding awareness [5]) or eyelid-margin lesions with a red or sore eye (ophthalmology), or secondary infection — selective cryotherapy/topical options.' },
        { h:'Manage eczema', t:'Emollients + a short course of mild topical steroid such as hydrocortisone 1% (NICE CG57 [3]; BNFC [4]) for surrounding molluscum dermatitis; reduces itch and scratching/spread.' },
        { h:'Parent expectation', t:'Explain why watchful waiting is preferred (harm vs benefit); reassure benign course/usually no marks if not picked; address school/swimming question directly.' },
        { h:'Never do', t:'Never aggressively treat healthy children\u2019s molluscum (scarring risk); never exclude from school/swimming; never miss immunocompromise/eyelid/extensive cases needing referral.' },
        { h:'Safety-net & follow-up', t:'Review if extensive/very symptomatic/immunocompromised/eyelid or genital involvement/secondary infection; eczema management; reassurance about spontaneous resolution.' }
      ]
    }
  };

  /* ===== 247. Head lice ===== */
  const c247 = {
    id:'head-lice', title:'"The school sent a letter about nits and now my daughter\u2019s scratching her head \u2014 should the whole family be treated?"', type:'video', duration:12,
    meta:{ age:8, sex:'F', setting:'Video consultation — suspected head lice, parent present (detection combing is done at home by the parent).', system:'Dermatology / Primary care \u2014 head lice: detection, evidence-based treatment & myths' },
    brief:'A mother brings Maisie, 8, scratching her scalp after a school "nits" letter; the task is the practical, evidence-based management of HEAD LICE (pediculosis capitis). Establish that diagnosis requires finding LIVE LICE (eggs/"nits" alone, especially white empty egg cases, do not confirm active infestation); use DETECTION (wet) COMBING with a fine-toothed comb (and conditioner) to confirm; TREAT only confirmed LIVE infestation \u2014 with either DIMETICONE 4% lotion (BNFC: works physically, so insecticide resistance does not affect it; applied as per the product and REPEATED after 7 days to kill lice hatched from surviving eggs) or systematic WET COMBING (the bug-busting method: several sessions every few days over at least two weeks, until no live lice are found at consecutive sessions); treat AFFECTED household/close contacts only if they too have LIVE lice (not blanket-treat everyone); dispel MYTHS (lice are not a sign of poor hygiene, don\u2019t jump/fly, school EXCLUSION is NOT necessary and children can attend — UKHSA exclusion table); and advise on detection/checking and reducing spread. The skill is evidence-based management, treating only confirmed live lice, the repeat-treatment principle, and myth-busting/reassurance. No NICE NG12 (updated April 2026) cancer link.',
    script:{
      opening:'"The school sent home a letter saying there\u2019s nits going round, and now Maisie\u2019s scratching her head. I\u2019m mortified \u2014 does it mean she\u2019s dirty? Should I treat her and the whole family to be safe, and keep her off school?"',
      facts:[
        { topic:'Diagnosis needs LIVE lice', text:'CORE \u2014 a diagnosis of active head-lice infestation requires finding LIVE LICE, not just eggs/"nits": eggs, and especially empty white egg cases found well away from the scalp (often quoted as more than about 1 cm, a rough guide rather than a firm rule), can be left over from a past infestation and do NOT confirm active infestation. Use DETECTION (WET) COMBING \u2014 a fine-toothed (detection) comb through wet, conditioned hair \u2014 to confirm live lice before treating.' },
        { topic:'Treat only confirmed live infestation', text:'Treat ONLY a CONFIRMED LIVE infestation \u2014 do not treat on the basis of itch or a school letter alone, and do NOT "blanket-treat the whole family to be safe". Over-treatment is unnecessary and unhelpful.' },
        { topic:'Evidence-based treatment options', text:'Options for confirmed live lice: (1) PHYSICAL insecticides — DIMETICONE 4% lotion (BNFC: coats and kills lice physically, so insecticide resistance does not affect it; apply to dry hair covering the scalp and hair root to tip, leave for the time on the product — 8 hours or overnight for the lotion — then wash out) — CRITICAL: REPEAT the application after 7 days to kill lice hatched from surviving eggs; or (2) systematic WET COMBING ("bug busting") with conditioner and a detection comb — several sessions every few days over at least two weeks, continued until no live lice are found at consecutive sessions. Apply correctly and re-check.' },
        { topic:'Contacts \u2014 check, don\u2019t blanket-treat', text:'Check household/close CONTACTS and treat them ONLY if they ALSO have live lice (detection comb), rather than treating everyone prophylactically. Treat everyone who has live lice on the same day, to avoid passing lice back and forth. Inform close contacts so they can check.' },
        { topic:'Bust the myths', text:'MYTH-BUSTING \u2014 head lice are NOT a sign of poor hygiene or "dirtiness" (they live on clean or dirty hair alike — the idea that they prefer clean hair is itself a myth), they cannot JUMP or FLY (spread is by head-to-head contact), and SCHOOL EXCLUSION is NOT necessary — the child can attend school (UKHSA exclusion table: no exclusion for head lice). Washing bedding or treating pets is not needed. This reassurance directly addresses the parent\u2019s embarrassment and the "keep her off school" question.' },
        { topic:'Hidden agenda', text:'The parent is EMBARRASSED ("does it mean she\u2019s dirty?"), wants to over-treat "to be safe", and asks about exclusion. The skill is to confirm live lice by combing, treat only if confirmed (dimeticone repeated after 7 days, or wet combing every few days for at least two weeks), check rather than blanket-treat contacts, and bust the hygiene/exclusion myths reassuringly.' },
      ],
      ice:{ ideas:'Itch + school letter = treat everyone; embarrassment about "dirtiness"; keep child off school.', concerns:'Embarrassment/stigma; spread to the family; school attendance.', expectations:'To treat the whole family and keep her off school. What is needed: confirm live lice by detection combing, treat only if confirmed (dimeticone + repeat at 7 days, or wet combing every few days for at least two weeks), check (not blanket-treat) contacts, and myth-busting (no exclusion, not poor hygiene).' },
      cues:['Itch + school "nits" letter \u2014 confirm with detection (wet) combing for LIVE lice; eggs/empty nits alone don\u2019t confirm active infestation.','Treat only confirmed live infestation — dimeticone lotion with a REPEAT after 7 days, or systematic wet combing every few days for at least two weeks; don’t blanket-treat the family.','Myth-bust: not poor hygiene (clean or dirty hair alike), lice don’t jump/fly, NO school exclusion (UKHSA) — child can attend.']
    },
    checkpoints:[
      { dom:'tasks', text:'Establishes that diagnosis requires finding LIVE LICE \u2014 not eggs/"nits" alone \u2014 and uses DETECTION (WET) COMBING to confirm active infestation before treating' },
      { dom:'tasks', text:'Treats ONLY a confirmed live infestation \u2014 not on the basis of itch/a school letter alone \u2014 and does NOT blanket-treat the whole family "to be safe"' },
      { dom:'tasks', text:'Offers evidence-based treatment (dimeticone lotion with the CRITICAL REPEAT application after 7 days to kill newly-hatched lice, OR systematic wet combing every few days for at least two weeks until clear at consecutive sessions), applied correctly' },
      { dom:'tasks', text:'Advises checking household/close CONTACTS and treating them ONLY if they also have live lice (detection comb), informing contacts to check' },
      { dom:'tasks', text:'BUSTS THE MYTHS \u2014 head lice are not a sign of poor hygiene, do not jump/fly (spread by head-to-head contact), and do NOT require school exclusion (child can attend)' },
      { dom:'rto',   text:'Addresses the parent\u2019s embarrassment/stigma reassuringly and the "keep her off school" question directly' },
      { dom:'rto',   text:'Explains the detection-combing and repeat-treatment principles clearly and checks understanding' },
      { dom:'gs',    text:'Safety-nets and follows up: re-check after treatment (dimeticone repeat at 7 days; wet combing continued until clear), treat only confirmed contacts, return if persistent/treatment failure (resistance/incorrect application), and reassurance \u2014 evidence-based, treat-only-if-confirmed approach' },
    ],
    worked:[
      { lbl:'Reassure + de-stigmatise', txt:'"First, please don’t be embarrassed — head lice have nothing to do with being dirty; they live on clean or dirty hair alike, and any child can get them. They\u2019re passed by heads touching, and they can\u2019t jump or fly."' },
      { lbl:'Confirm first', txt:'"Before treating, let\u2019s actually confirm she has live lice \u2014 an itch or a school letter isn\u2019t proof, and old empty egg cases can hang around. The way to check is wet combing: conditioner on wet hair and a fine detection comb, looking for live lice on the comb."' },
      { lbl:'Treat only if confirmed', txt:'"If you find live lice, we treat — either a lotion like dimeticone that physically kills them, repeated after exactly a week to catch any that hatch from eggs, or systematic wet combing every few days for at least two weeks, until you find no live lice at two sessions in a row."' },
      { lbl:'Don\u2019t blanket-treat', txt:'"There\u2019s no need to treat the whole family \u2018just in case\u2019 \u2014 instead, check everyone with the comb and only treat those who actually have live lice. I\u2019d let close contacts know so they can check too."' },
      { lbl:'School', txt:'"And she does NOT need to stay off school \u2014 children with head lice can attend as normal. Keeping her off isn\u2019t necessary or recommended."' },
      { lbl:'Safety-net', txt:'"Re-check after treatment — after the second dimeticone application, or until the combing sessions are clear. If live lice keep coming back despite treating correctly, come back \u2014 it might be a resistance or application issue and we\u2019ll adjust. Otherwise this is very manageable."' },
    ],
    learning:'Head lice (pediculosis capitis) require EVIDENCE-BASED, treat-only-if-confirmed management. A diagnosis of ACTIVE infestation requires finding LIVE LICE, not just eggs/"nits" — eggs, especially empty white egg cases well away from the scalp (roughly more than 1 cm, a rough guide, not a firm rule), can be left over from a past infestation and do not confirm active disease — so use DETECTION (WET) COMBING with a fine-toothed comb through wet, conditioned hair to confirm live lice before treating, and do NOT treat on the basis of itch or a school letter alone or "blanket-treat the whole family to be safe". For confirmed live infestation, options are a PHYSICAL insecticide — DIMETICONE 4% lotion (BNFC), which physically kills lice so resistance does not affect it, applied per the product and crucially REPEATED after 7 days to kill lice hatched from surviving eggs — or systematic WET COMBING ("bug busting") with conditioner and a detection comb, in several sessions every few days over at least two weeks until no live lice are found at consecutive sessions, with re-checking. Check household/close CONTACTS and treat them only if they too have live lice, informing contacts so they can check, rather than prophylactic blanket treatment. Bust the myths: head lice are NOT a sign of poor hygiene (they live on clean or dirty hair alike), they cannot JUMP or FLY (spread is by head-to-head contact), and SCHOOL EXCLUSION is NOT necessary (UKHSA exclusion table) — the child can attend. The hidden agenda is the parent\u2019s embarrassment, the wish to over-treat "to be safe" and the exclusion question; confirm by combing, treat only if confirmed (with the 7-day repeat), check rather than blanket-treat contacts, and reassure with the myth-busting. No NICE NG12 (updated April 2026) cancer pathway applies.',
    knowledge:{
      guideline:'[1] BNFC: dimeticone (topical) and the treatment summary on parasitic skin infections · [2] UKHSA Health protection in children and young people settings, including education: exclusion table · [3] GMC Good medical practice (2024) · detection (wet) combing for live lice · dimeticone (repeat at 7 days) / wet combing over at least two weeks · no school exclusion · myth-busting',
      points:[
        { h:'Confirm live lice', t:'Diagnosis needs live lice (detection wet combing), not eggs/"nits" alone (empty cases indicate past infestation). Don\u2019t treat on itch/school letter alone.' },
        { h:'Treat only if confirmed', t:'Treat only confirmed live infestation; don\u2019t blanket-treat the family "to be safe".' },
        { h:'Treatment options', t:'Dimeticone 4% lotion (BNFC [1]; physical action, unaffected by resistance), repeated after 7 days to kill newly-hatched lice; or systematic wet combing every few days over at least two weeks until clear at consecutive sessions. Apply correctly per instructions.' },
        { h:'Contacts', t:'Check household/close contacts; treat only those with live lice, all on the same day; inform contacts to check. No prophylactic blanket treatment.' },
        { h:'Myth-busting', t:'Not a sign of poor hygiene (clean or dirty hair alike); lice don’t jump/fly (head-to-head contact); no school exclusion — child can attend (UKHSA [2]). No need to wash bedding or treat pets.' },
        { h:'Treatment failure', t:'Persistent live lice despite treatment \u2192 consider resistance, incorrect application, missed repeat, or re-infestation \u2014 reassess/adjust method.' },
        { h:'Never do', t:'Never treat on eggs/itch/school letter alone; never blanket-treat the family; never exclude from school; never reinforce the "poor hygiene" stigma.' },
        { h:'Safety-net & follow-up', t:'Re-check after treatment (dimeticone repeat at 7 days; wet combing until clear); treat only confirmed contacts; return for treatment failure; reassure and de-stigmatise.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c244, c245, c246, c247);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'lichen-planus': {
      ceg: ['New & undifferentiated presentations', 'Long-term conditions & cancer'],
      stem: {
        name: 'Diane Forsyth', age: '49 years \u00b7 female',
        pmh: ['Itchy violaceous flat-topped polygonal papules with Wickham striae on flexor wrists/shins', 'Oral white lacy/reticular streaks (buccal mucosa)', 'Review meds (lichenoid eruption); consider hep C'],
        meds: ['Bendroflumethiazide (?lichenoid)'],
        allergy: 'NKDA',
        recent: '"Itchy purple bumps on my wrists, and sore white streaks inside my mouth."',
        reason: 'Video consultation (skin and mouth examined face to face) — itchy violaceous rash with oral changes.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise LP', d:'6 Ps + Wickham striae on flexor wrists/shins + oral white lacy streaks = lichen planus.' },
        { t:'2\u20134',  h:'Other sites/triggers', d:'Oral/nail/scalp/genital; drug lichenoid (review meds); hep C association.' },
        { t:'4\u20137',  h:'Treat', d:'Potent topical steroids + antihistamine/emollient; topical steroids for oral LP; refer if severe/erosive.' },
        { t:'7\u20139',  h:'Course + malignancy note', d:'Self-limiting over months; oral LP ~1% SCC risk over 10 years → monitor + dental review; NICE NG12 (updated April 2026) oral criteria.' },
        { t:'9\u201312', h:'Reassure + safety-net', d:'Not cancer/contagious; return for spread, severe/ulcerated mouth, nail/scalp involvement.' }
      ],
      wordPics: {
        fail: 'Fails to recognise LP or treat the itch; ignores the oral disease and its long-term malignancy monitoring; misses a drug cause.',
        pass: 'Recognises LP, treats with potent topical steroids, and arranges oral monitoring.',
        exc:  'Recognises lichen planus (6 Ps + Wickham striae + oral), reviews drugs/hep C, treats with potent topical steroids, counsels the self-limiting course, and arranges long-term dental/specialist monitoring for the oral disease.'
      },
      avoid: [
        { dont:'"It\u2019s just a bit of dermatitis \u2014 here\u2019s some moisturiser."', instead:'"This is lichen planus \u2014 a potent steroid cream settles it, and I\u2019ll keep an eye on the mouth involvement."', why:'Mislabelling LP misses targeted treatment and the oral malignancy-monitoring need.' },
        { dont:'(Ignoring the mouth) treating skin only.', instead:'"Lichen planus in the mouth needs monitoring and regular dental review — there’s a small risk of change over time, about 1 in 100 over ten years."', why:'Erosive oral LP carries a small SCC risk and needs monitoring.' },
        { dont:'(No drug review) not checking medications.', instead:'"Let me check your tablets \u2014 some can trigger a lichen-planus-like rash."', why:'Drug-induced lichenoid eruptions are a reversible cause.' }
      ]
    },

    'pityriasis-rosea': {
      ceg: ['New & undifferentiated presentations', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Lena Ashworth', age: '24 years \u00b7 female',
        pmh: ['Herald patch ~1 week ago then crop of smaller oval scaly plaques on trunk (Christmas-tree), mildly itchy', 'Otherwise well; possible preceding viral illness', 'No palms/soles involvement; not pregnant'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Big oval patch on my chest then loads of smaller ones \u2014 is it ringworm spreading?"',
        reason: 'Video consultation (face-to-face skin check if images unclear) — spreading scaly rash on the trunk.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise PR', d:'Herald patch then oval plaques in Christmas-tree pattern, well young adult \u2014 pityriasis rosea, not ringworm.' },
        { t:'2\u20134',  h:'Differential', d:'Tinea, guttate psoriasis, nummular eczema, drug eruption.' },
        { t:'4\u20136',  h:'Syphilis caveat', d:'Palms/soles, systemic, sexual risk → sexual history + syphilis serology (sexual health); pregnancy history (onset before ~15 weeks).' },
        { t:'6\u20139',  h:'Reassure + manage', d:'Self-limiting ~2–12 weeks; emollient/mild to moderate steroid/antihistamine; avoid unnecessary antifungals.' },
        { t:'9\u201312', h:'Safety-net', d:'Review if atypical/palms-soles/widespread/persistent >3 months/systemic \u2014 reconsider diagnosis.' }
      ],
      wordPics: {
        fail: 'Prescribes an antifungal for "spreading ringworm"; never considers secondary syphilis or pregnancy; over-treats a self-limiting rash.',
        pass: 'Recognises pityriasis rosea, reassures and gives symptomatic care, and keeps the syphilis caveat.',
        exc:  'Recognises PR (herald patch + Christmas-tree), reassures about the self-limiting course with symptomatic itch care (no antifungal), keeps the secondary-syphilis caveat (palms/soles, sexual risk \u2192 serology) and pregnancy note, and safety-nets.'
      },
      avoid: [
        { dont:'"It\u2019s ringworm spreading \u2014 here\u2019s an antifungal cream."', instead:'"This is pityriasis rosea, not ringworm \u2014 it clears by itself over a couple of months; an antifungal won\u2019t help."', why:'Reflexive antifungal misdiagnoses a self-limiting rash and delays correct reassurance.' },
        { dont:'(No syphilis caveat) reassuring without checking palms/soles or sexual risk.', instead:'"Any rash on palms/soles or sexual-health concerns? Another condition can look similar."', why:'Secondary syphilis can mimic pityriasis rosea and must be considered in atypical cases.' },
        { dont:'(No pregnancy history) ignoring pregnancy.', instead:'"Could you be pregnant? It\u2019s worth knowing with this rash."', why:'There is a possible association with adverse outcomes in early pregnancy.' }
      ]
    },

    'molluscum-contagiosum': {
      ceg: ['Children & young people', 'New & undifferentiated presentations'],
      stem: {
        name: 'Leo (mother present)', age: '5 years \u00b7 male',
        pmh: ['Cluster of pearly, dome-shaped, umbilicated papules on trunk/axilla; some surrounding eczema', 'Well child; spreading slightly', 'Not immunocompromised; no eyelid/genital lesions'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Pearly bumps with a dimple in the middle \u2014 how do we get rid of them? School/swimming?"',
        reason: 'Video consultation (face-to-face look if images unclear) — a child with characteristic papules.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise + reassure', d:'Pearly umbilicated papules in a child = molluscum; benign, self-limiting.' },
        { t:'2\u20134',  h:'Why watchful waiting', d:'Resolves usually within 6–18 months, sometimes longer (BAD); usually no marks unless picked; harsh treatment risks pain/scarring.' },
        { t:'4\u20136',  h:'Advice', d:'Don\u2019t squeeze/scratch; limit towel sharing; normal school/swimming (cover if wished).' },
        { t:'6\u20139',  h:'Eczema', d:'Emollient + mild topical steroid for surrounding molluscum dermatitis.' },
        { t:'9\u201312', h:'When to treat + safety-net', d:'Extensive/immunocompromised/eyelid (red or sore eye → ophthalmology)/genital/secondary infection → review/refer; reassure resolution.' }
      ],
      wordPics: {
        fail: 'Aggressively treats (freezing/curettage) a healthy child\u2019s molluscum risking scarring; excludes from school/swimming; reinforces contagion anxiety.',
        pass: 'Recognises molluscum, reassures and advises watchful waiting with simple advice and eczema care.',
        exc:  'Recognises molluscum, explains the benign self-limiting course and why watchful waiting is preferred, gives spread/activity advice (no school/swimming exclusion), manages surrounding eczema, and reserves treatment/referral for specific indications.'
      },
      avoid: [
        { dont:'"Let\u2019s freeze them off to get rid of them."', instead:'"In a healthy child we usually leave them — they clear by themselves and usually leave no marks if not picked, whereas freezing can be painful and scar."', why:'Aggressive treatment of healthy children\u2019s molluscum risks scarring for limited benefit.' },
        { dont:'"Keep him off school and swimming until they\u2019re gone."', instead:'"He can attend school and swim \u2014 just cover the bumps if you like and stop him scratching."', why:'Molluscum does not require school/swimming exclusion.' },
        { dont:'(Ignoring eczema) not treating the surrounding rash.', instead:'"That eczema-y patch \u2014 a moisturiser and mild steroid cream will settle the itch and reduce scratching/spread."', why:'Surrounding molluscum dermatitis worsens itch and autoinoculation.' }
      ]
    },

    'head-lice': {
      ceg: ['Children & young people', 'New & undifferentiated presentations'],
      stem: {
        name: 'Maisie (mother present)', age: '8 years \u00b7 female',
        pmh: ['Scalp itch after a school "nits" letter', 'Parent embarrassed ("is she dirty?"); wants to treat whole family + keep off school', 'Live lice not yet confirmed'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"School letter about nits, now she\u2019s scratching \u2014 should the whole family be treated and keep her off school?"',
        reason: 'Video consultation — suspected head lice (detection combing at home).'
      },
      timeMap: [
        { t:'0\u20132',  h:'De-stigmatise', d:'Not about hygiene; lice live on clean or dirty hair alike; spread by head-to-head contact; don’t jump/fly.' },
        { t:'2\u20134',  h:'Confirm live lice', d:'Detection (wet) combing for LIVE lice; eggs/itch/school letter alone don\u2019t confirm.' },
        { t:'4\u20137',  h:'Treat only if confirmed', d:'Dimeticone lotion with a REPEAT after 7 days, or wet combing every few days for at least two weeks. No blanket family treatment.' },
        { t:'7\u20139',  h:'Contacts', d:'Check contacts; treat only those with live lice; inform them to check.' },
        { t:'9\u201312', h:'No exclusion + safety-net', d:'Child can attend school (UKHSA); re-check (dimeticone repeat at 7 days; combing until clear); return for treatment failure (resistance/application).' }
      ],
      wordPics: {
        fail: 'Treats the whole family on an itch/school letter, excludes from school, and reinforces the "dirty" stigma; no detection combing or repeat-treatment principle.',
        pass: 'Confirms live lice by combing, treats only if confirmed (dimeticone with a 7-day repeat, or wet combing over two weeks), and busts the hygiene/exclusion myths.',
        exc:  'Confirms live lice by detection combing, treats only confirmed infestation (dimeticone + repeat at 7 days, or wet combing over at least two weeks), checks rather than blanket-treats contacts, and de-stigmatises with clear myth-busting (no exclusion, not poor hygiene).'
      },
      avoid: [
        { dont:'"Treat Maisie and the whole family to be safe, and keep her off school."', instead:'"Let\u2019s first confirm live lice by wet combing, treat only those who actually have them, and she can stay in school."', why:'Blanket treatment and school exclusion are not evidence-based.' },
        { dont:'(Treating on itch alone) prescribing without confirming live lice.', instead:'"An itch or a school letter isn\u2019t proof \u2014 we comb to find live lice before treating."', why:'Treating without confirmed live lice over-treats and may miss the real cause.' },
        { dont:'(Reinforcing stigma) "You\u2019ll need to keep her hair cleaner."', instead:'"This has nothing to do with cleanliness — lice live on clean or dirty hair alike, and any child can get them."', why:'The poor-hygiene stigma is inaccurate and shaming.' }
      ]
    }

  });

})();
