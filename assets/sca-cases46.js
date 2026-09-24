/* ============================================================
   Reasoning GP — Case Library batch 46:
   "The symptom that hides a system"
   Four ORIGINAL cases where a common presentation must be read
   for the systemic clue behind it: a widespread itch that may be
   lymphoma; seasonal rhinitis where the red flag is the UNILATERAL
   exception; fatigue that needs a structured screen AND the life
   behind it; and a B12 deficiency that diet will not fix. NG12 is
   stated only where it genuinely applies (itch + B symptoms →
   haematological); the others have no cancer link and none is
   invented.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases45.js.
   ============================================================ */

(function(){

  /* ============ 177. F2F — Itchy widespread rash: eczema vs the systemic clue (NG12 haematological if B symptoms) ============ */
  const c177 = {
    id:'itchy-rash-systemic', title:'"I\u2019m itching all over and there\u2019s barely a rash \u2014 the creams aren\u2019t touching it"', type:'video', duration:12,
    meta:{ age:58, sex:'M', setting:'Video consultation \u2014 generalised itch poorly responsive to emollients.', system:'Dermatology / General \u2014 generalised pruritus & the systemic differential' },
    brief:'Mr Howard Leyton, 58, accountant, with ~3 months of generalised, relentless ITCH, worse at night, with little to see on the skin beyond excoriations \u2014 no primary rash. Emollients and a mild steroid from a previous visit have not helped. The examinable task is to treat ITCH WITHOUT AN OBVIOUS RASH as a presentation that demands a SYSTEMIC differential, not just stronger creams: screen the major causes \u2014 haematological (lymphoma \u2014 especially with B symptoms), cholestatic/hepatobiliary disease, chronic kidney disease, thyroid disease, iron deficiency, diabetes, drugs, and (in the elderly) malignancy and polycythaemia \u2014 and to act on the red flags. On directed history a sinister cluster emerges: drenching NIGHT SWEATS, unintentional weight loss, fatigue and intermittent low-grade fevers \u2014 with a rubbery enlarged cervical node found on examination. This converts "chronic itch" into a suspected LYMPHOMA presentation requiring urgent investigation (FBC/film, LDH, examination for lymphadenopathy/hepatosplenomegaly) and an urgent haematology referral under NICE NG12.',
    script:{
      opening:'"Doctor, this itch is driving me to distraction \u2014 it\u2019s everywhere, it\u2019s worse at night, and there\u2019s hardly anything to see. The creams you gave me last time haven\u2019t made a dent. I just want something stronger that actually works. I\u2019m scratching myself raw."',
      facts:[
        { topic:'Itch WITHOUT a rash needs a systemic head', text:'Generalised pruritus with little or no primary skin lesion (only excoriations) is a flag to think SYSTEMICALLY rather than reach for stronger topical steroids. Persistent, generalised, treatment-resistant itch \u2014 especially in middle-aged/older adults and worse at night \u2014 warrants a search for an internal cause before being labelled "just dry skin" or eczema.' },
        { topic:'The systemic differential to screen', text:'Causes of generalised pruritus: HAEMATOLOGICAL (lymphoma \u2014 classically Hodgkin; polycythaemia vera \u2014 itch after a hot bath), CHOLESTASIS/liver disease (primary biliary cholangitis, obstruction), CHRONIC KIDNEY DISEASE (uraemic pruritus), THYROID disease (hyper/hypo), IRON DEFICIENCY, DIABETES, DRUGS (opioids, others), and, in older adults, occult MALIGNANCY. Also HIV and, very commonly, simple xerosis/eczema/scabies \u2014 which must be excluded but not assumed. Screen the history and examine accordingly.' },
        { topic:'The B-symptom red flags \u2014 the key cluster', text:'CRITICAL \u2014 actively ask about B SYMPTOMS and systemic features: drenching NIGHT SWEATS, unintentional WEIGHT LOSS, recurrent FEVERS, profound fatigue, and (specifically) itch and/or pain after ALCOHOL. Examine for LYMPHADENOPATHY (cervical, axillary, inguinal \u2014 characteristically rubbery, painless, enlarging) and HEPATOSPLENOMEGALY. Mr Leyton has night sweats, weight loss, fatigue, fevers and a rubbery cervical node \u2014 a lymphoma picture.' },
        { topic:'Investigations & the NG12 pathway', text:'For itch with red flags: FBC and BLOOD FILM, LDH, ESR/CRP, U&E (renal), LFTs incl. GGT (cholestasis), ferritin, TFTs, glucose/HbA1c, calcium \u00b1 HIV/other per history; examine all node groups, liver and spleen, and a CXR if indicated. NICE NG12: consider very urgent investigation / urgent referral for suspected haematological cancer where there is unexplained lymphadenopathy, hepatosplenomegaly, or systemic symptoms with abnormal blood counts \u2014 and a generalised itch with B symptoms and a rubbery node warrants URGENT haematology referral (and urgent bloods). Pruritus is itself listed in NG12 among symptoms that, in combination, prompt suspicion of haematological malignancy.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 he wants a stronger cream and a quick fix; he has noticed the sweats and weight loss but has not connected them to the itch (or is avoiding the thought). He is exhausted and irritable from the relentless itch and broken sleep. The skill is to take the itch seriously AND widen the lens \u2014 eliciting the systemic features he has not volunteered, then conveying the need for urgent investigation honestly without panicking him.' },
        { topic:'What he needs', text:'Officially: a stronger cream. What he needs: recognition that generalised itch without a rash demands a systemic work-up; active elicitation of the B symptoms and examination findings (rubbery cervical node, organomegaly); urgent bloods (FBC/film, LDH, renal, liver, thyroid, ferritin) and an urgent NG12 haematology referral for suspected lymphoma; symptomatic relief for the itch meanwhile; and honest, calm communication \u2014 not escalating topical steroids.' },
      ],
      ice:{
        ideas:'It\u2019s a skin/dryness problem; he just needs a stronger or different cream.',
        concerns:'HIDDEN AGENDA \u2014 distress and exhaustion from relentless itch and lost sleep; has noticed sweats/weight loss but not linked them, or is avoiding the thought.',
        expectations:'Something stronger that works. What he needs: a systemic work-up, elicitation of the B symptoms, urgent bloods + NG12 haematology referral for suspected lymphoma, and itch relief meanwhile \u2014 not stronger steroids.'
      },
      cues:['3 months generalised, night-worse itch with NO primary rash, resistant to emollients/steroid \u2014 think systemic, not stronger cream.','Drenching night sweats + weight loss + fevers + fatigue + a rubbery enlarged cervical node \u2014 B-symptom cluster; suspected lymphoma.','"Just give me something stronger" \u2014 wants a quick fix; elicit the systemic features he hasn\u2019t connected, then investigate urgently.']
    },
    checkpoints:[
      { dom:'tasks', text:'Treats generalised ITCH WITHOUT A RASH as a systemic presentation \u2014 not reaching for stronger topical steroids \u2014 and constructs the differential (haematological, cholestatic/liver, renal, thyroid, iron deficiency, diabetes, drugs, malignancy; plus xerosis/scabies to exclude)' },
      { dom:'tasks', text:'Actively SCREENS the B-symptom/systemic red flags \u2014 drenching night sweats, unintentional weight loss, fevers, profound fatigue, alcohol-induced itch/pain \u2014 rather than focusing only on the skin' },
      { dom:'tasks', text:'EXAMINES for lymphadenopathy (cervical/axillary/inguinal \u2014 rubbery, painless, enlarging) and hepatosplenomegaly, and finds/acts on the enlarged cervical node' },
      { dom:'tasks', text:'Arranges appropriate investigations (FBC + blood film, LDH, ESR/CRP, U&E, LFTs incl. GGT, ferritin, TFTs, glucose/HbA1c, calcium \u00b1 HIV; CXR if indicated) targeted to the differential' },
      { dom:'tasks', text:'Applies NG12: recognises that generalised itch with B symptoms, a rubbery node and/or organomegaly warrants URGENT suspected-haematological-cancer referral (and very urgent bloods) for possible lymphoma \u2014 not watchful waiting' },
      { dom:'rto',   text:'Takes the itch and its impact (sleep, distress) seriously while widening the lens, and elicits the systemic features the patient has not volunteered' },
      { dom:'rto',   text:'Conveys the need for urgent investigation honestly and calmly \u2014 explaining why itch can reflect something internal \u2014 without catastrophising, and checks understanding' },
      { dom:'gs',    text:'Safety-nets and follows up: urgent bloods + haematology referral with timing, symptomatic itch relief (emollients, antihistamine for sleep, measures) meanwhile, red flags warranting sooner help, definite review of results, and active tracking \u2014 systemic work-up, not escalating creams' },
    ],
    worked:[
      { lbl:'Validate, then widen', txt:'"That kind of relentless itch is genuinely miserable, and I\u2019m not going to brush it off. But here\u2019s the thing that changes my approach: when someone itches all over with almost nothing to see, and creams don\u2019t help, I have to look beyond the skin for a cause inside."' },
      { lbl:'Elicit the red flags', txt:'"Let me ask some things that might seem unrelated. Any drenching sweats at night \u2014 soaking the sheets? \u2026 Yes. Lost any weight without trying? \u2026 And how\u2019s your energy, any fevers? \u2026 Thank you. Does the itch get worse after a drink? Those answers matter a lot."' },
      { lbl:'Examine deliberately', txt:'"I\u2019d like to feel the glands in your neck, armpits and groin, and check your tummy. \u2026 There\u2019s a firmish, rubbery gland in your neck. Combined with the sweats and weight loss, that\u2019s something I need to investigate properly and promptly."' },
      { lbl:'Honest naming + plan', txt:'"I want to be straight with you. An itch like this, with night sweats, weight loss and an enlarged gland, can be a sign of a problem with the lymph glands \u2014 a lymphoma is one we have to rule out. I\u2019m not saying that\u2019s what it is, but it needs urgent blood tests and a specialist."' },
      { lbl:'The pathway', txt:'"So I\u2019m arranging urgent blood tests today and referring you urgently to the blood specialists. These conditions, if that\u2019s what it turns out to be, are often very treatable \u2014 and getting answers quickly is exactly the right move."' },
      { lbl:'Relief + safety-net', txt:'"For the itch itself, keep using emollients generously and I\u2019ll add an antihistamine to help you sleep. If you develop high fevers, get much more unwell, or notice new lumps, contact us sooner. I\u2019ll chase the results and we\u2019ll go through everything together."' },
    ],
    learning:'Generalised PRURITUS with little or no primary rash (only excoriations), persistent and treatment-resistant \u2014 especially in middle-aged/older adults and worse at night \u2014 is a flag to think SYSTEMICALLY rather than escalate topical steroids. The differential spans HAEMATOLOGICAL disease (lymphoma, classically Hodgkin; polycythaemia vera, with post-bath itch), CHOLESTASIS/liver disease, CHRONIC KIDNEY DISEASE (uraemic pruritus), THYROID disease, IRON DEFICIENCY, DIABETES, DRUGS, HIV, occult MALIGNANCY, and the common xerosis/eczema/scabies that must be excluded but not assumed. The decisive step is to actively screen the B-symptom cluster \u2014 drenching night sweats, unintentional weight loss, recurrent fevers, profound fatigue, and itch/pain after alcohol \u2014 and to examine all node groups (rubbery, painless, enlarging lymphadenopathy) plus the liver and spleen. Itch with this cluster and a rubbery cervical node is a suspected LYMPHOMA presentation: arrange urgent bloods (FBC + film, LDH, ESR/CRP, U&E, LFTs incl. GGT, ferritin, TFTs, glucose/HbA1c, calcium \u00b1 HIV) and refer urgently under NICE NG12 for suspected haematological cancer (unexplained lymphadenopathy, hepatosplenomegaly, or systemic symptoms with abnormal counts; pruritus features among NG12\u2019s combination symptoms). The hidden agenda is the wish for a stronger cream by a patient who has not connected his sweats and weight loss to the itch; take the itch and its impact seriously, widen the lens by eliciting the unvolunteered systemic features, provide symptomatic relief meanwhile, and convey the need for urgent investigation honestly and calmly \u2014 not escalating creams.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer (haematological) \u00b7 generalised pruritus work-up \u00b7 lymphoma B symptoms',
      points:[
        { h:'Itch without rash = think systemic', t:'Persistent generalised pruritus with no primary rash (only excoriations), treatment-resistant and night-worse, warrants a search for an internal cause rather than stronger topical steroids.' },
        { h:'Systemic differential', t:'Haematological (lymphoma, polycythaemia vera), cholestasis/liver disease, chronic kidney disease (uraemic), thyroid disease, iron deficiency, diabetes, drugs, HIV, occult malignancy; exclude xerosis/eczema/scabies but don\u2019t assume them.' },
        { h:'B symptoms & exam', t:'Screen drenching night sweats, unintentional weight loss, recurrent fevers, profound fatigue, alcohol-induced itch/pain; examine all node groups (rubbery, painless, enlarging) and for hepatosplenomegaly.' },
        { h:'Investigations', t:'FBC + blood film, LDH, ESR/CRP, U&E, LFTs incl. GGT, ferritin, TFTs, glucose/HbA1c, calcium \u00b1 HIV; CXR if indicated \u2014 targeted to the differential.' },
        { h:'NG12 haematological referral', t:'Unexplained lymphadenopathy, hepatosplenomegaly, or systemic symptoms with abnormal counts \u2192 consider very urgent investigation/urgent referral for haematological cancer. Generalised itch with B symptoms and a rubbery node \u2192 urgent haematology referral.' },
        { h:'Symptomatic relief', t:'Continue generous emollients, consider a sedating antihistamine to aid sleep, and general anti-itch measures while investigation proceeds \u2014 relief alongside, not instead of, the work-up.' },
        { h:'Never do', t:'Never escalate topical steroids for unexplained generalised itch without a systemic screen; never miss the B-symptom cluster or a rubbery node; never label "dry skin/eczema" by assumption; never watchful-wait a lymphoma picture.' },
        { h:'Safety-net & follow-up', t:'Urgent bloods + haematology referral with timing; itch relief meanwhile; red flags (high fevers, new lumps, marked deterioration); definite results review with active tracking.' }
      ]
    }
  };

  /* ============ 178. F2F — Blocked nose and sneezing all spring: the rhinitis ladder (and the unilateral red flag) ============ */
  const c178 = {
    id:'rhinitis-ladder', title:'"Every spring my nose runs and I sneeze non-stop \u2014 antihistamines barely help any more"', type:'video', duration:12,
    meta:{ age:34, sex:'F', setting:'Video consultation \u2014 recurrent seasonal nasal symptoms.', system:'ENT / Allergy \u2014 allergic rhinitis: the treatment ladder & the unilateral red flag' },
    brief:'Mrs Priya Soneji, 34, teacher, with years of springtime sneezing, bilateral nasal itch, watery rhinorrhoea, nasal congestion and itchy watery eyes \u2014 classic seasonal allergic rhinitis (hay fever). She takes an over-the-counter oral antihistamine PRN but feels it "barely helps any more"; symptoms disrupt her sleep, concentration and teaching. She wants something stronger. The examinable task is twofold: (1) deliver the ALLERGIC RHINITIS treatment LADDER properly \u2014 allergen avoidance, REGULAR (not PRN) intranasal corticosteroid as the mainstay with correct spray TECHNIQUE, non-sedating antihistamine, add-ons (intranasal antihistamine/combination sprays, antihistamine eye drops, saline, short courses, leukotriene antagonist in selected cases), and when to consider referral/immunotherapy; address why her current approach under-treats; and (2) demonstrate SAFETY-NETTING awareness of the rhinitis RED FLAGS that are NOT simple hay fever \u2014 in particular persistent UNILATERAL nasal obstruction, unilateral bloody/blood-stained discharge, or facial pain/numbness, which can signify a sinonasal tumour or other pathology and warrant ENT referral. Her symptoms are bilateral and seasonal (reassuring), so the case is mostly the ladder \u2014 but the red-flag teaching must be explicit. No NG12 trigger applies to her bilateral seasonal picture, and none is invented.',
    script:{
      opening:'"Every spring it\u2019s the same \u2014 I\u2019m sneezing constantly, my nose runs like a tap, it\u2019s blocked at night, and my eyes itch. I take a hay-fever tablet but honestly it\u2019s barely touching it this year, and I\u2019m shattered at work. Can I have something stronger? Maybe some steroids or a stronger antihistamine?"',
      facts:[
        { topic:'Confirm allergic rhinitis \u2014 and that it\u2019s bilateral/seasonal', text:'The picture \u2014 seasonal (spring), bilateral sneezing, nasal itch, watery rhinorrhoea, congestion and itchy watery eyes \u2014 is classic seasonal allergic rhinitis (pollen). Establish triggers/timing, impact (sleep, concentration, work \u2014 significant here), and personal/family atopy (asthma, eczema). The BILATERAL, symmetrical, seasonal nature is itself reassuring against sinister causes.' },
        { topic:'The likely reason it\u2019s "not working": under-treatment', text:'KEY INSIGHT \u2014 PRN oral antihistamine alone often under-treats moderate-to-severe allergic rhinitis. The mainstay for persistent/moderate-severe symptoms is a REGULAR INTRANASAL CORTICOSTEROID (e.g. fluticasone, mometasone, beclometasone), used DAILY through the season \u2014 not occasionally \u2014 and started ideally a couple of weeks before the season. Most "treatment failure" is actually irregular use and poor spray technique, not a need for something exotic.' },
        { topic:'Spray technique matters', text:'Demonstrate/counsel correct INTRANASAL STEROID TECHNIQUE: shake; head slightly forward (not tilted back); spray with the OPPOSITE hand to the nostril, aiming AWAY from the septum (toward the outer wall) to avoid epistaxis/septal irritation; sniff gently, do not snort hard; allow days-to-2 weeks for full effect; use regularly. Poor technique (aiming at the septum, sharp sniffing) causes nosebleeds and treatment failure.' },
        { topic:'The full ladder & add-ons', text:'Stepwise: (1) allergen avoidance (pollen counts, keep windows shut, wraparound sunglasses, shower/change after outdoors, nasal barrier balms); (2) regular intranasal corticosteroid + a non-sedating oral antihistamine (cetirizine, loratadine, fexofenadine); (3) add intranasal antihistamine or a combination intranasal steroid/antihistamine spray, antihistamine eye drops for eye symptoms, saline irrigation; (4) consider a leukotriene receptor antagonist (esp. with asthma), a SHORT course of oral steroid only for severe acute flares (e.g. exams \u2014 not depot injections), and ENT/allergy referral for immunotherapy in severe, single-allergen, refractory cases. Avoid long-term decongestant sprays (rhinitis medicamentosa).' },
        { topic:'The red flags \u2014 what ISN\u2019T hay fever (explicit teaching)', text:'SAFETY-NETTING / red flags that are NOT simple rhinitis and warrant ENT referral: persistent UNILATERAL nasal obstruction; UNILATERAL blood-stained or bloody nasal discharge; a unilateral nasal mass/polyp; facial pain, swelling or numbness; orbital symptoms (diplopia, proptosis); or anosmia with unilateral features. These can indicate a sinonasal tumour or other serious pathology. Her symptoms are bilateral/seasonal, so this is teaching/safety-netting, not her diagnosis \u2014 but it must be voiced. (Note: simple bilateral seasonal allergic rhinitis is not a NICE NG12 trigger; unilateral/bloody features would change that.)' },
        { topic:'What she needs', text:'Officially: something stronger. What she needs: confirmation of allergic rhinitis, the insight that she is under-treating (PRN antihistamine alone), a properly explained treatment LADDER centred on a REGULAR intranasal corticosteroid with correct technique plus a non-sedating antihistamine and eye drops, avoidance advice, a plan for severe flares and when to refer, and explicit red-flag safety-netting (unilateral/bloody nasal symptoms) \u2014 not just a stronger pill.' },
      ],
      ice:{
        ideas:'She needs a "stronger" antihistamine or some steroids to control worsening hay fever.',
        concerns:'The impact on sleep, concentration and her teaching; frustration that her usual approach has stopped working.',
        expectations:'A stronger prescription. What she needs: the under-treatment insight, the proper rhinitis ladder (regular intranasal steroid + technique + antihistamine + eye drops + avoidance), flare/referral planning, and red-flag safety-netting.'
      },
      cues:['Seasonal, BILATERAL sneezing/itch/rhinorrhoea/congestion + itchy eyes \u2014 classic allergic rhinitis; bilateral/seasonal is reassuring.','"Antihistamine barely helps" \u2014 usually under-treatment: PRN oral antihistamine alone; needs REGULAR intranasal steroid + correct technique.','Teach the red flags: persistent UNILATERAL obstruction, unilateral bloody discharge, facial pain/numbness \u2192 ENT (sinonasal tumour) \u2014 not her picture, but voice it.']
    },
    checkpoints:[
      { dom:'tasks', text:'Confirms seasonal ALLERGIC RHINITIS from the bilateral, seasonal, itch/sneeze/rhinorrhoea + itchy-eyes picture, and assesses triggers, impact (sleep/work) and atopy \u2014 noting the bilateral/seasonal nature is reassuring' },
      { dom:'tasks', text:'Identifies UNDER-TREATMENT (PRN oral antihistamine alone) as the likely reason for "failure" \u2014 not a need for something exotic' },
      { dom:'tasks', text:'Makes a REGULAR intranasal CORTICOSTEROID the mainstay (daily through the season, ideally pre-season) and counsels correct SPRAY TECHNIQUE (head forward, opposite hand, aim away from septum, gentle sniff, days-to-weeks for effect)' },
      { dom:'tasks', text:'Lays out the full LADDER and add-ons \u2014 avoidance, non-sedating antihistamine, intranasal antihistamine/combination spray, antihistamine eye drops, saline; leukotriene antagonist in selected cases; short oral steroid only for severe acute flares (not depot); ENT/allergy referral for immunotherapy in refractory cases \u2014 and avoids long-term decongestant sprays' },
      { dom:'tasks', text:'EXPLICITLY voices the rhinitis RED FLAGS that are not simple hay fever (persistent unilateral obstruction, unilateral bloody discharge, unilateral mass, facial pain/numbness, orbital symptoms) and that they warrant ENT referral \u2014 while correctly reassuring that her bilateral seasonal picture does not fit them' },
      { dom:'rto',   text:'Acknowledges the real impact on sleep/concentration/work and the frustration, and frames the plan as getting control rather than dismissing her request' },
      { dom:'rto',   text:'Explains why regular treatment and technique matter (rather than just "a stronger pill"), checking understanding and supporting adherence' },
      { dom:'gs',    text:'Safety-nets and follows up: realistic timeframe for the intranasal steroid to work, a flare plan, when to return or be referred (including the unilateral/bloody red flags), and review of control \u2014 the proper ladder with safety-netting, not just a stronger antihistamine' },
    ],
    worked:[
      { lbl:'Confirm + reassure on type', txt:'"This is classic hay fever \u2014 seasonal, both sides, itchy sneezy nose and eyes. The fact it\u2019s both sides and comes each spring is actually reassuring; it\u2019s allergy, not something sinister."' },
      { lbl:'The under-treatment insight', txt:'"Here\u2019s why I think it\u2019s \u2018stopped working\u2019: a tablet now and then isn\u2019t really enough for symptoms this bad. The treatment that does the heavy lifting is a steroid nose spray used EVERY day through the season \u2014 not just when you\u2019re bad \u2014 ideally started a couple of weeks before the pollen kicks off."' },
      { lbl:'Teach the technique', txt:'"Technique is half the battle. Shake it, tip your head slightly forward, use your opposite hand and aim the spray towards the outer wall of your nostril, away from the middle \u2014 then a gentle sniff, not a hard snort. Done at the septum or snorted hard, it gives nosebleeds and doesn\u2019t work. Give it up to a couple of weeks."' },
      { lbl:'Build the ladder', txt:'"So: regular steroid spray plus a daily non-drowsy antihistamine, antihistamine drops for your eyes, and saline rinses. Avoidance helps too \u2014 windows shut on high-pollen days, wraparound sunglasses, shower and change after you\u2019ve been out. If a spell is really severe \u2014 say around exams \u2014 we can use a short oral steroid course, and if it\u2019s ever unmanageable year after year, there\u2019s referral for allergy treatment."' },
      { lbl:'Voice the red flags', txt:'"One important thing to know for the future: hay fever is both sides. If you ever get a blocked nose on just ONE side that won\u2019t clear, one-sided bleeding or blood-stained discharge, or facial pain or numbness, that\u2019s different \u2014 come back, because that needs an ENT check. That\u2019s not what you\u2019ve got now, but worth knowing."' },
      { lbl:'Safety-net + review', txt:'"Give the spray a fortnight of regular use and let\u2019s review how you\u2019re sleeping and coping at work. If it\u2019s still not controlled despite good technique, we\u2019ll step up. And those one-sided warning signs \u2014 don\u2019t sit on them."' },
    ],
    learning:'Seasonal sneezing with bilateral nasal itch, watery rhinorrhoea, congestion and itchy watery eyes is classic ALLERGIC RHINITIS (hay fever), and the bilateral, symmetrical, seasonal pattern is itself reassuring. The commonest reason it "stops working" is UNDER-TREATMENT: a PRN oral antihistamine alone is insufficient for moderate-to-severe disease, where the mainstay is a REGULAR intranasal corticosteroid used DAILY through the season (ideally started a couple of weeks pre-season), and most apparent failure reflects irregular use and poor SPRAY TECHNIQUE rather than a need for something exotic \u2014 so counsel technique explicitly (head slightly forward, opposite hand, aim away from the septum toward the outer wall, gentle sniff, days-to-2-weeks for effect). The full ladder: allergen avoidance; regular intranasal steroid + a non-sedating antihistamine; add intranasal antihistamine/combination spray, antihistamine eye drops and saline; consider a leukotriene antagonist (especially with asthma) and a SHORT oral steroid course only for severe acute flares (never depot injections); and ENT/allergy referral for immunotherapy in severe, refractory, single-allergen cases \u2014 while avoiding prolonged decongestant sprays (rhinitis medicamentosa). Crucially, voice the rhinitis RED FLAGS that are NOT simple hay fever and warrant ENT referral: persistent UNILATERAL nasal obstruction, unilateral blood-stained/bloody discharge, a unilateral mass/polyp, facial pain/swelling/numbness, or orbital symptoms \u2014 which can indicate a sinonasal tumour. A bilateral seasonal picture is not a NICE NG12 trigger and none should be invented, but the unilateral/bloody red-flag teaching must be made explicit as safety-netting.',
    knowledge:{
      guideline:'Allergic rhinitis treatment ladder (BSACI) \u00b7 intranasal corticosteroid technique \u00b7 sinonasal red flags / ENT referral',
      points:[
        { h:'Confirm allergic rhinitis', t:'Seasonal, bilateral sneezing, nasal itch, watery rhinorrhoea, congestion and itchy watery eyes, with atopy, indicate allergic rhinitis. Assess triggers, impact and atopic history. Bilateral/seasonal pattern is reassuring.' },
        { h:'Under-treatment is the usual issue', t:'PRN oral antihistamine alone under-treats moderate-severe disease. The mainstay is a regular daily intranasal corticosteroid through the season, ideally started pre-season.' },
        { h:'Spray technique', t:'Shake; head slightly forward; opposite hand; aim away from the septum (toward the outer wall); gentle sniff; allow days-to-2 weeks; use regularly. Poor technique causes epistaxis and treatment failure.' },
        { h:'Stepwise ladder & add-ons', t:'Avoidance \u2192 intranasal steroid + non-sedating antihistamine \u2192 intranasal antihistamine/combination spray, antihistamine eye drops, saline \u2192 leukotriene antagonist (esp. asthma), short oral steroid for severe acute flares (not depot), ENT/allergy referral for immunotherapy in refractory cases. Avoid long-term decongestant sprays.' },
        { h:'Sinonasal red flags', t:'Persistent unilateral nasal obstruction, unilateral bloody/blood-stained discharge, unilateral mass/polyp, facial pain/swelling/numbness, orbital symptoms (diplopia/proptosis) \u2192 ENT referral; can indicate sinonasal tumour. Hay fever is bilateral.' },
        { h:'No NG12 for bilateral seasonal', t:'Bilateral seasonal allergic rhinitis is not a NICE NG12 trigger \u2014 do not invent one. Unilateral/bloody/orbital features change the assessment and prompt urgent ENT referral.' },
        { h:'Never do', t:'Never just escalate the oral antihistamine without the regular intranasal steroid and technique; never ignore poor adherence/technique; never prescribe depot steroid for hay fever; never overlook or fail to voice the unilateral red flags.' },
        { h:'Safety-net & follow-up', t:'Allow ~2 weeks of regular spray use; review control (sleep/work); step up if needed; flare plan; explicit unilateral/bloody red-flag advice; ENT referral where indicated.' }
      ]
    }
  };

  /* ============ 179. F2F — Persistent fatigue in a young adult: the structured screen + the life behind it (no NG12) ============ */
  const c179 = {
    id:'persistent-fatigue-young', title:'"I\u2019m exhausted all the time \u2014 can you just test me for everything?"', type:'video', duration:12,
    meta:{ age:26, sex:'F', setting:'Video consultation \u2014 months of tiredness in a young adult.', system:'General \u2014 TATT: the structured screen and the psychosocial story' },
    brief:'Miss Hannah Briar, 26, software developer, with ~4 months of feeling "tired all the time" (TATT). She is functioning but drained, sleeping poorly, low on energy, and worried "something is wrong" \u2014 she wants "every test under the sun". The examinable task is the balanced approach to fatigue: a STRUCTURED history and a FOCUSED, evidence-based first-line screen (not a scattergun "test for everything"), brief examination, AND \u2014 equally \u2014 exploring THE LIFE BEHIND IT: mood/anxiety, sleep, work stress and screen habits, relationships, alcohol/caffeine, diet, exercise, life events. Fatigue is most often multifactorial/psychosocial, but red flags must be screened and not missed. The skill is to take her seriously, do the appropriate (not excessive) tests, open up the psychosocial picture without dismissing her as "just stressed", safety-net for evolving red flags, and arrange review \u2014 avoiding both over-investigation and premature reassurance. (No specific cancer pathway applies to undifferentiated fatigue without red flags; red-flag safety-netting is included rather than an invented NG12 referral.)',
    script:{
      opening:'"I\u2019m just exhausted all the time, doctor \u2014 it\u2019s been months. I drag myself through work and crash at the weekend. I keep thinking something must be really wrong with me. Can you just test me for everything \u2014 my thyroid, my iron, anything \u2014 and find out what it is?"',
      facts:[
        { topic:'Take fatigue seriously \u2014 structured history first', text:'"Tired all the time" is common and real; take it seriously rather than dismissing or, conversely, reflexively bleeding a panel. Characterise it: onset/duration, whether it is sleepiness vs lack of energy vs muscle fatigue, pattern through the day, what makes it better/worse, and \u2014 crucially \u2014 the FUNCTIONAL impact. Screen RED FLAGS: weight loss, fevers/night sweats, lymphadenopathy, breathlessness, focal/neurological symptoms, bleeding, persisting/progressive course \u2014 whose presence redirects toward urgent investigation.' },
        { topic:'A focused, evidence-based screen \u2014 not "everything"', text:'KEY \u2014 resist the scattergun. A reasonable first-line TATT screen: FBC (anaemia), ferritin (iron deficiency), TFTs (thyroid), HbA1c/glucose (diabetes), U&E and LFTs, calcium, CRP/ESR, coeliac serology (anti-tTG), and \u2014 per history \u2014 vitamin D, B12/folate, and a pregnancy test/HIV where relevant. Explain WHY each is chosen and why "every test" is neither possible nor wise (false positives, anxiety, incidental findings). This is targeted thoroughness, not nihilism.' },
        { topic:'The life behind it \u2014 the real consultation', text:'CORE SKILL \u2014 the commonest causes of chronic fatigue are psychosocial/multifactorial: DEPRESSION and ANXIETY, poor SLEEP (insomnia, late screens, shift/irregular hours, caffeine), STRESS (work, relationships, finances, caring), alcohol, diet, sedentary lifestyle/over-training, and life events. Explore mood (low mood, anhedonia, a validated tool if indicated), sleep hygiene, work/home stress, and substances \u2014 openly and without judgement. Doing this WELL, while still testing, is what distinguishes a strong consultation.' },
        { topic:'Don\u2019t dismiss as "just stress" \u2014 hold both', text:'The error to avoid at both extremes: over-investigating (every test, repeatedly) feeding health anxiety; OR prematurely labelling her "just stressed/depressed" and missing organic disease (or invalidating real distress). Hold both: do the focused screen AND open the psychosocial story, framing them as complementary, not either/or.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 her "test me for everything / something must be wrong" may reflect health anxiety, a fear of a serious diagnosis, or an inability to name an underlying stressor (a difficult job, a relationship, low mood she has not labelled as depression). Gently exploring "what are you most worried it might be?" and "what\u2019s life like at the moment?" often reveals the real driver. Validate the symptom and the fear while guiding toward a proportionate plan.' },
        { topic:'What she needs', text:'Officially: every test. What she needs: to be taken seriously with a structured history and red-flag screen; a FOCUSED, explained first-line blood panel (not "everything"); genuine exploration of mood, sleep, stress and lifestyle without being dismissed as "just stressed"; lifestyle/sleep/mood support as appropriate; clear safety-netting for evolving red flags; and a definite review of results \u2014 balancing thoroughness with avoiding over-investigation.' },
      ],
      ice:{
        ideas:'"Something must be really wrong"; the answer will be found by testing for everything.',
        concerns:'HIDDEN AGENDA \u2014 fear of a serious diagnosis / health anxiety, and/or an unnamed stressor (work, relationship, low mood not labelled as depression).',
        expectations:'A comprehensive battery of tests. What she needs: a structured history + red-flag screen, a focused explained panel, real exploration of the life behind the fatigue, support, and safety-netting \u2014 not "everything", not "just stress".'
      },
      cues:['4 months TATT, functioning but drained, poor sleep \u2014 take seriously; structured history + red-flag screen before testing.','"Test me for everything" \u2014 resist scattergun; a focused evidence-based first-line panel, explained, beats a battery.','Poor sleep + worry "something is wrong" \u2014 explore mood/anxiety/sleep/stress/lifestyle; don\u2019t dismiss as "just stress" nor over-investigate.']
    },
    checkpoints:[
      { dom:'tasks', text:'Takes fatigue seriously with a STRUCTURED history \u2014 nature (sleepiness vs energy vs muscle), duration, pattern, functional impact \u2014 and screens RED FLAGS (weight loss, fevers/night sweats, lymphadenopathy, breathlessness, neurological/focal symptoms, bleeding, progressive course)' },
      { dom:'tasks', text:'Orders a FOCUSED, evidence-based first-line screen (FBC, ferritin, TFTs, HbA1c/glucose, U&E, LFTs, calcium, CRP/ESR, coeliac \u00b1 vit D/B12/folate, pregnancy/HIV per history) rather than a scattergun "test for everything", and explains the rationale' },
      { dom:'tasks', text:'Explores THE LIFE BEHIND IT \u2014 mood/anxiety (with a validated tool if indicated), sleep hygiene/pattern, work/relationship/financial stress, alcohol/caffeine, diet, exercise, life events \u2014 openly and without judgement' },
      { dom:'tasks', text:'Avoids BOTH errors: neither over-investigates (feeding health anxiety) nor prematurely dismisses as "just stress", holding organic and psychosocial possibilities together as complementary' },
      { dom:'tasks', text:'Offers proportionate management \u2014 sleep/lifestyle advice, mood support/treatment if depression/anxiety identified, addressing modifiable factors \u2014 alongside the investigation plan' },
      { dom:'rto',   text:'Elicits the hidden agenda (the specific fear or unnamed stressor) with open questions ("what are you most worried it might be?", "what\u2019s life like at the moment?") and validates both the symptom and the fear' },
      { dom:'rto',   text:'Negotiates a proportionate plan with a patient wanting "everything" \u2014 explaining why focused testing is better \u2014 without leaving her feeling dismissed or fobbed off' },
      { dom:'gs',    text:'Safety-nets and follows up: definite review of results, what red flags warrant sooner contact, a timeframe and plan if first-line tests are normal (review lifestyle/mood, reassess, consider next steps), and signposting \u2014 balanced thoroughness, neither over-investigation nor premature reassurance' },
    ],
    worked:[
      { lbl:'Take it seriously', txt:'"Four months of being wiped out is genuinely tough, and I want to take it seriously \u2014 not just hand you a tonic. Let me understand it properly and then do the right tests, and I also want to understand what life\u2019s like for you at the moment, because both matter."' },
      { lbl:'Structured + red flags', txt:'"Is it more sleepiness, or no energy, or muscles tiring? Worse at any time of day? \u2026 And a few specific checks: any weight loss, fevers or night sweats, lumps, breathlessness, or anything new and neurological? \u2026 None \u2014 that\u2019s reassuring and helps me aim the tests."' },
      { lbl:'Focused, not scattergun', txt:'"I know it\u2019s tempting to \u2018test for everything\u2019, but that actually causes more confusion \u2014 false alarms and red herrings. Instead I\u2019ll do a focused set that covers the things that genuinely cause tiredness: blood count and iron, thyroid, blood sugar, kidneys, liver, calcium, inflammation, and coeliac. That\u2019s thorough and sensible."' },
      { lbl:'Open the life behind it', txt:'"Can I ask about the rest of it? How\u2019s your mood \u2014 are you still enjoying things? How\u2019s sleep \u2014 phone in bed, racing mind? And work and home, any stress or worries? \u2026 Tell me more about that." (Listens.)' },
      { lbl:'Hold both, no dismissal', txt:'"What you\u2019re describing sounds like a lot on your plate and some low mood and broken sleep \u2014 which can absolutely cause this kind of exhaustion. That\u2019s NOT me saying it\u2019s \u2018all in your head\u2019; it\u2019s real, and it\u2019s treatable. The blood tests run alongside that, not instead of it."' },
      { lbl:'Plan + safety-net', txt:'"Let\u2019s get the bloods, work on sleep and the stress, and I\u2019d like to see you back to go through results and how you\u2019re doing. If you develop weight loss, fevers, lumps or anything that alarms you in the meantime, come sooner. We\u2019ll get to the bottom of this together."' },
    ],
    learning:'"Tired all the time" (TATT) is common, real and usually multifactorial, and the strong consultation does TWO things at once: a STRUCTURED history with a red-flag screen and a FOCUSED first-line investigation, AND genuine exploration of the life behind the fatigue. Characterise the tiredness (sleepiness vs lack of energy vs muscle fatigue), its duration, pattern and functional impact, and screen red flags (weight loss, fevers/night sweats, lymphadenopathy, breathlessness, focal/neurological symptoms, bleeding, a progressive course) whose presence redirects to urgent investigation. Resist the scattergun "test for everything": a reasonable evidence-based panel is FBC, ferritin, TFTs, HbA1c/glucose, U&E, LFTs, calcium, CRP/ESR and coeliac serology, with vitamin D, B12/folate, pregnancy test or HIV added per history \u2014 explained, because indiscriminate testing breeds false positives, incidental findings and anxiety. Equally, explore the commonest causes \u2014 depression and anxiety, poor sleep, work/relationship/financial stress, alcohol/caffeine, diet and activity, and life events \u2014 openly and without judgement, often using "what are you most worried it might be?" and "what\u2019s life like at the moment?" to surface the real driver (a fear, or an unnamed stressor or unrecognised depression). Avoid both errors: over-investigation feeds health anxiety, while prematurely labelling "just stress" risks missing organic disease or invalidating distress \u2014 so hold organic and psychosocial possibilities together as complementary, offer proportionate lifestyle/mood support alongside the screen, safety-net for evolving red flags, and arrange a definite review. No specific cancer pathway applies to undifferentiated fatigue without red flags, and none should be invented \u2014 red-flag safety-netting is the correct substitute.',
    knowledge:{
      guideline:'Fatigue/TATT structured assessment \u00b7 rational first-line investigation \u00b7 psychosocial & mood screening (no NG12 link without red flags)',
      points:[
        { h:'Structured history + red flags', t:'Characterise the fatigue (type, duration, pattern, functional impact) and screen red flags: weight loss, fevers/night sweats, lymphadenopathy, breathlessness, focal/neurological symptoms, bleeding, progressive course \u2014 any of which redirect to urgent investigation.' },
        { h:'Focused first-line screen', t:'FBC, ferritin, TFTs, HbA1c/glucose, U&E, LFTs, calcium, CRP/ESR, coeliac serology; add vitamin D, B12/folate, pregnancy test/HIV per history. Explain the rationale; avoid scattergun testing (false positives, incidentalomas, anxiety).' },
        { h:'The life behind it', t:'Commonest causes are psychosocial/multifactorial: depression, anxiety, poor sleep, stress, alcohol/caffeine, diet, inactivity/over-training, life events. Explore mood (validated tool if indicated), sleep and stress openly.' },
        { h:'Hold both, avoid extremes', t:'Do not over-investigate (feeds health anxiety) nor prematurely dismiss as "just stress" (misses organic disease, invalidates distress). Frame organic and psychosocial work-up as complementary.' },
        { h:'Proportionate management', t:'Sleep hygiene and lifestyle advice, treat identified depression/anxiety, address modifiable factors, alongside the investigation plan. Reassess after first-line results.' },
        { h:'Elicit the hidden agenda', t:'Use "what are you most worried it might be?" and "what\u2019s life like at the moment?" to surface a specific fear or unnamed stressor. Validate both the symptom and the fear.' },
        { h:'Never do', t:'Never bleed a scattergun panel without a structured history; never dismiss as "just stress" without screening; never over-investigate repeatedly; never miss red flags; never invent an NG12 referral for undifferentiated fatigue without red flags.' },
        { h:'Safety-net & follow-up', t:'Definite review of results; red flags warranting sooner contact; a clear plan and timeframe if first-line tests are normal (review mood/sleep/lifestyle, reassess, consider next steps); signpost support.' }
      ]
    }
  };

  /* ============ 180. F2F — B12 deficiency: injections, neurology, and why diet won't fix it (no NG12) ============ */
  const c180 = {
    id:'b12-deficiency', title:'"My B12 is low \u2014 can\u2019t I just take a tablet or eat better instead of injections?"', type:'video', duration:12,
    meta:{ age:46, sex:'F', setting:'Video consultation \u2014 explaining a low B12 result and its treatment.', system:'Haematology / Neurology \u2014 B12 deficiency: cause, neurology & correct treatment' },
    brief:'Mrs Carol Denham, 46, with fatigue and \u2014 on directed history \u2014 tingling/numbness in the feet and a few months of unsteadiness, found to have a LOW serum B12 with macrocytosis on FBC. She is a non-vegetarian with a reasonable diet, and asks why she cannot "just eat better or take a tablet" rather than have injections. The examinable task is to interpret and act on B12 deficiency correctly: establish the CAUSE (most often PERNICIOUS ANAEMIA \u2014 autoimmune, anti-intrinsic-factor/parietal-cell antibodies \u2014 or malabsorption, metformin, dietary in vegans, etc.), recognise the NEUROLOGICAL involvement (peripheral neuropathy, subacute combined degeneration of the cord) that makes prompt correct treatment urgent, and explain WHY \u2014 if the cause is malabsorption/pernicious anaemia \u2014 oral diet/tablets will NOT fix it and INTRAMUSCULAR hydroxocobalamin is required (with intensive loading if neurological involvement, then maintenance). Also address the classic pitfall: do NOT give folate alone before correcting B12 (risk of precipitating/worsening SACD), and check/replace iron and folate appropriately. Communicate clearly with a patient who would prefer to avoid injections, without coercion but with honest reasoning. (No NG12 cancer pathway applies; none is invented.)',
    script:{
      opening:'"You said my B12 came back low \u2014 but I eat meat, I\u2019m not vegetarian, so I don\u2019t really get it. Can\u2019t I just take a tablet or eat a bit better instead of having injections? I really don\u2019t like needles, and injections every few months sounds like a lot of hassle."',
      facts:[
        { topic:'Find the CAUSE \u2014 it\u2019s usually not diet', text:'KEY \u2014 in a non-vegetarian with a reasonable diet, B12 deficiency is usually NOT dietary; it is most often a problem of ABSORPTION. The classic cause is PERNICIOUS ANAEMIA (autoimmune gastritis with loss of intrinsic factor \u2014 check anti-intrinsic-factor antibodies, \u00b1 anti-parietal-cell). Other causes: malabsorption (coeliac, Crohn\u2019s, ileal resection, bacterial overgrowth), gastric surgery, METFORMIN and long-term PPI, and dietary deficiency in vegans. Establishing the cause explains why "eat better" will not work if she cannot absorb it.' },
        { topic:'The NEUROLOGY makes it urgent', text:'CRITICAL \u2014 B12 deficiency can cause peripheral NEUROPATHY (tingling, numbness, often feet-first) and SUBACUTE COMBINED DEGENERATION of the spinal cord (dorsal columns + corticospinal tracts: paraesthesiae, sensory ataxia, unsteadiness, weakness), as well as cognitive/mood changes and optic neuropathy. Her tingling and unsteadiness signal NEUROLOGICAL involvement \u2014 which mandates PROMPT and adequate treatment, because neurological damage can become irreversible if undertreated or delayed.' },
        { topic:'Why injections, not tablets/diet (in malabsorption)', text:'CORE TEACHING \u2014 if the cause is malabsorption/pernicious anaemia, ORAL B12 and dietary change cannot reliably correct it because the gut cannot absorb it normally; treatment is INTRAMUSCULAR HYDROXOCOBALAMIN. Regimen: WITHOUT neurological features \u2014 loading (e.g. 1 mg IM on alternate days for ~2 weeks, or per local guidance) then maintenance every ~3 months. WITH neurological features \u2014 INTENSIVE loading: 1 mg IM on alternate days CONTINUED until no further improvement (often several weeks), then maintenance (commonly every 2 months). (High-dose ORAL B12 may suffice for purely DIETARY deficiency, but not for malabsorption.)' },
        { topic:'The folate pitfall & co-deficiencies', text:'CLASSIC EXAM PITFALL \u2014 do NOT give FOLIC ACID alone before/without correcting B12: in B12 deficiency, folate replacement can precipitate or worsen subacute combined degeneration of the cord. Correct B12 FIRST (or concurrently once B12 started). Also check and replace IRON and FOLATE as needed, recheck FBC/reticulocytes and B12 response, and monitor for hypokalaemia during early treatment of severe megaloblastic anaemia.' },
        { topic:'Investigations & associations', text:'Work-up: FBC/film (macrocytosis, hypersegmented neutrophils, possible pancytopenia), B12 (and consider active-B12/MMA/homocysteine where borderline), folate, ferritin, anti-intrinsic-factor antibodies, TFTs and coeliac serology (autoimmune associations), and review medication (metformin, PPI). Pernicious anaemia associates with other autoimmune disease (thyroid, T1DM, vitiligo) and carries a small increased long-term gastric cancer risk \u2014 a reason for follow-up, but NOT an acute NG12 cancer referral here.' },
        { topic:'Communicate with a needle-averse patient', text:'COMMUNICATION \u2014 she would prefer to avoid injections. Explain honestly WHY tablets/diet will not work if she cannot absorb B12, and why prompt treatment matters given the nerve symptoms \u2014 respecting her autonomy, addressing the needle aversion practically (it is quick, nurse-administered, then infrequent), and not coercing. The goal is informed acceptance through understanding, not pressure.' },
      ],
      ice:{
        ideas:'Since she eats meat, low B12 is puzzling; surely a tablet or better diet would fix it instead of injections.',
        concerns:'Dislike of needles and the perceived hassle of regular injections; doesn\u2019t yet grasp the absorption problem or the significance of the nerve symptoms.',
        expectations:'To avoid injections via diet/tablets. What she needs: the cause established (likely pernicious anaemia/malabsorption), recognition of neurological involvement, and honest explanation of why IM hydroxocobalamin is required \u2014 with the folate pitfall avoided.'
      },
      cues:['Low B12 + macrocytosis in a non-vegetarian \u2014 think absorption (pernicious anaemia/malabsorption/metformin/PPI), not diet; check intrinsic-factor antibodies.','Tingling/numbness in feet + unsteadiness \u2014 neurological involvement (neuropathy/SACD); mandates prompt, adequate (intensive-loading) IM treatment.','"Can\u2019t I just take a tablet or eat better?" \u2014 explain that malabsorption needs IM hydroxocobalamin; never give folate alone first (SACD risk).']
    },
    checkpoints:[
      { dom:'tasks', text:'Establishes the CAUSE rather than assuming diet \u2014 recognises that in a non-vegetarian, B12 deficiency is usually malabsorption, classically PERNICIOUS ANAEMIA (checks anti-intrinsic-factor antibodies), and reviews metformin/PPI, coeliac/GI causes and gastric surgery' },
      { dom:'tasks', text:'Recognises NEUROLOGICAL involvement (peripheral neuropathy; subacute combined degeneration \u2014 paraesthesiae, sensory ataxia, unsteadiness) and that this makes prompt, adequate treatment urgent to avoid irreversible damage' },
      { dom:'tasks', text:'Knows the correct TREATMENT: IM hydroxocobalamin \u2014 and the INTENSIVE loading regimen WITH neurological features (alternate-day 1 mg IM until no further improvement, then maintenance) vs standard loading without \u2014 and that oral/diet will not correct malabsorptive deficiency' },
      { dom:'tasks', text:'Avoids the FOLATE PITFALL \u2014 does not give folic acid alone before/without correcting B12 (risk of precipitating/worsening SACD) \u2014 and checks/replaces iron and folate appropriately, monitoring response (FBC/reticulocytes) and early hypokalaemia in severe cases' },
      { dom:'tasks', text:'Orders appropriate work-up (FBC/film, folate, ferritin, intrinsic-factor antibodies, TFTs, coeliac; MMA/active-B12 if borderline) and notes pernicious anaemia\u2019s autoimmune associations and long-term gastric-cancer follow-up (not an acute NG12 referral)' },
      { dom:'rto',   text:'Explains to a NEEDLE-AVERSE patient, honestly and without coercion, WHY tablets/diet will not work if absorption is the problem, and why prompt treatment matters given the nerve symptoms \u2014 respecting autonomy' },
      { dom:'rto',   text:'Addresses the needle aversion and hassle practically (quick, nurse-given, then infrequent maintenance), checks understanding, and seeks informed acceptance through understanding rather than pressure' },
      { dom:'gs',    text:'Safety-nets and follows up: starts/arranges treatment promptly given neurology, plans antibody/associated-condition results and monitoring, explains expected recovery and that some neurological change may be slow/incomplete if delayed, advises what to report, and books review \u2014 correct treatment, folate pitfall avoided' },
    ],
    worked:[
      { lbl:'Explain the puzzle', txt:'"I can see why it\u2019s confusing \u2014 you eat meat, so where\u2019s the B12 going? The likely answer is that your body isn\u2019t ABSORBING it properly, rather than you not eating it. The commonest reason is an autoimmune condition called pernicious anaemia, and I\u2019ll do a blood test to check for it."' },
      { lbl:'Take the nerve symptoms seriously', txt:'"The tingling in your feet and feeling unsteady aren\u2019t a coincidence \u2014 low B12 can affect the nerves and spinal cord. That\u2019s actually the reason I don\u2019t want to mess about with this: treating it properly and promptly protects those nerves."' },
      { lbl:'Why not tablets/diet', txt:'"And that\u2019s the honest answer to your question: if the problem is absorption, eating more or taking a standard tablet won\u2019t get it in \u2014 it just passes through. The reliable way is an injection that bypasses the gut. I\u2019m not being awkward; it\u2019s genuinely the treatment that works here."' },
      { lbl:'The regimen', txt:'"Because you\u2019ve got nerve symptoms, we start with a more intensive course \u2014 injections every other day for a while until things stop improving \u2014 then it settles to a top-up injection every couple of months. The nurse does them, they\u2019re quick, and the frequent phase doesn\u2019t last forever."' },
      { lbl:'The folate caution', txt:'"One important technical point: I won\u2019t just give you folic acid on its own, because in B12 deficiency that can actually make the nerve problem worse. We sort the B12 properly first. I\u2019ll also check your iron and folate and a couple of related tests."' },
      { lbl:'Respect + safety-net', txt:'"I know needles aren\u2019t your favourite \u2014 if it helps, we can talk through making them easier. If your unsteadiness or numbness gets worse, tell us. We\u2019ll recheck your blood, see how you respond, and review the antibody results together. How does that sound?"' },
    ],
    learning:'B12 deficiency must be interpreted and treated correctly, not waved through. In a non-vegetarian with a reasonable diet, the deficiency is usually one of ABSORPTION rather than intake \u2014 classically PERNICIOUS ANAEMIA (autoimmune gastritis, loss of intrinsic factor; check anti-intrinsic-factor \u00b1 parietal-cell antibodies), but also coeliac/Crohn\u2019s/ileal disease or resection, gastric surgery, metformin and long-term PPI, with true dietary deficiency mainly in vegans. The NEUROLOGY is what makes prompt, adequate treatment urgent: B12 deficiency causes peripheral neuropathy and SUBACUTE COMBINED DEGENERATION of the cord (dorsal columns and corticospinal tracts \u2014 paraesthesiae, sensory ataxia, unsteadiness, weakness), plus cognitive/mood and optic effects, and neurological damage may become irreversible if undertreated or delayed. The core teaching for the patient who wants to "just eat better or take a tablet" is that malabsorptive deficiency cannot be corrected orally/dietarily and requires INTRAMUSCULAR HYDROXOCOBALAMIN \u2014 with INTENSIVE loading when neurological features are present (1 mg IM on alternate days until no further improvement, then maintenance), versus standard loading without. Avoid the classic pitfall of giving FOLIC ACID alone before correcting B12 (it can precipitate/worsen SACD), and check/replace iron and folate, monitor the haematological response and watch for early hypokalaemia in severe megaloblastic anaemia. Note pernicious anaemia\u2019s autoimmune associations (thyroid, T1DM, vitiligo) and small long-term gastric-cancer risk warranting follow-up \u2014 not an acute NG12 cancer referral, and none should be invented. Communicate honestly with a needle-averse patient about why injections are necessary, respecting autonomy and seeking informed acceptance rather than coercion.',
    knowledge:{
      guideline:'B12 deficiency & pernicious anaemia (BSH) \u00b7 hydroxocobalamin regimens \u00b7 subacute combined degeneration \u00b7 folate pitfall (no NG12 link)',
      points:[
        { h:'Find the cause', t:'In non-vegetarians, B12 deficiency is usually malabsorptive: pernicious anaemia (anti-intrinsic-factor antibodies), coeliac/Crohn\u2019s/ileal disease/resection, gastric surgery, metformin, long-term PPI. Dietary deficiency mainly in vegans.' },
        { h:'Recognise the neurology', t:'Peripheral neuropathy and subacute combined degeneration (dorsal columns + corticospinal: paraesthesiae, sensory ataxia, unsteadiness, weakness), plus cognitive/mood and optic effects. Neurology mandates prompt adequate treatment; delay risks irreversibility.' },
        { h:'Treatment \u2014 IM hydroxocobalamin', t:'Malabsorptive deficiency needs IM hydroxocobalamin. Without neuro features: loading (e.g. 1 mg IM alternate days ~2 weeks) then maintenance ~3-monthly. With neuro features: 1 mg IM alternate days until no further improvement, then maintenance (commonly 2-monthly). High-dose oral B12 only suffices for dietary deficiency.' },
        { h:'Folate pitfall', t:'Do not give folic acid alone before/without correcting B12 \u2014 it can precipitate or worsen subacute combined degeneration. Correct B12 first (or concurrently once B12 started).' },
        { h:'Investigations & monitoring', t:'FBC/film (macrocytosis, hypersegmented neutrophils, \u00b1 pancytopenia), folate, ferritin, intrinsic-factor antibodies, TFTs, coeliac serology; MMA/active-B12 if borderline. Recheck FBC/reticulocytes; watch for early hypokalaemia in severe megaloblastic anaemia.' },
        { h:'Associations & follow-up', t:'Pernicious anaemia associates with autoimmune thyroid disease, T1DM, vitiligo, and a small increased long-term gastric-cancer risk \u2014 a reason for follow-up, not an acute NG12 referral.' },
        { h:'Never do', t:'Never assume dietary cause in a non-vegetarian; never rely on diet/oral tablets for malabsorptive deficiency; never give folate alone first; never undertreat when neurology is present; never invent an NG12 cancer pathway.' },
        { h:'Communicate & safety-net', t:'Explain the absorption problem and why injections are needed; respect needle aversion without coercion; start treatment promptly given neurology; plan antibody/associated-condition results and monitoring; advise what to report; review response.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c177, c178, c179, c180);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'itchy-rash-systemic': {
      ceg: ['Long-term conditions & cancer', 'New & undifferentiated presentations'],
      stem: {
        name: 'Howard Leyton', age: '58 years \u00b7 male',
        pmh: ['\u26a0 3 months generalised relentless itch, worse at night, NO primary rash (only excoriations)', '\u26a0 Drenching night sweats, unintentional weight loss, fatigue, intermittent fevers', 'Emollients + mild steroid: no benefit'],
        meds: ['None regular'],
        allergy: 'NKDA',
        recent: '"Just give me something stronger that actually works \u2014 I\u2019m scratching myself raw."',
        reason: 'Video consultation \u2014 generalised itch unresponsive to creams.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Validate, then widen', d:'Itch is miserable AND itch without a rash = think systemic, not stronger steroid.' },
        { t:'2\u20134',  h:'Elicit B symptoms', d:'Night sweats, weight loss, fevers, fatigue, alcohol-induced itch \u2014 the lymphoma cluster.' },
        { t:'4\u20136',  h:'Examine nodes/organs', d:'Cervical/axillary/inguinal nodes (rubbery), hepatosplenomegaly \u2014 finds the enlarged node.' },
        { t:'6\u20139',  h:'NG12 haematology', d:'Urgent bloods (FBC/film, LDH, U&E, LFTs/GGT, ferritin, TFTs) + urgent suspected-lymphoma referral.' },
        { t:'9\u201312', h:'Relief + safety-net', d:'Emollients + antihistamine for sleep; high fevers/new lumps \u2192 sooner; chase results, review.' }
      ],
      wordPics: {
        fail: 'Prescribes a stronger steroid/antihistamine for "eczema"; never asks about B symptoms; never examines nodes; misses a lymphoma.',
        pass: 'Recognises itch-without-rash as systemic, screens B symptoms, examines nodes and refers urgently with bloods.',
        exc:  'Takes the itch seriously while widening to a systemic differential, elicits the B-symptom cluster, examines and finds lymphadenopathy/organomegaly, arranges urgent bloods + NG12 haematology referral for suspected lymphoma, gives symptomatic relief, and communicates honestly and calmly with safety-netting.'
      },
      avoid: [
        { dont:'"Let\u2019s try a stronger steroid cream and a different antihistamine."', instead:'"Itching all over with nothing to see, not helped by creams, makes me look beyond the skin \u2014 let me ask about sweats and weight and check your glands."', why:'Escalating topical therapy for unexplained generalised itch misses the systemic differential, including lymphoma.' },
        { dont:'(Skipping systemic questions) "It\u2019s probably just dry skin."', instead:'"Any drenching night sweats, weight loss or fevers? Does it itch after a drink?"', why:'Failing to elicit B symptoms misses the key cluster pointing to haematological malignancy.' },
        { dont:'"Let\u2019s see if it settles over a few weeks."', instead:'"With night sweats, weight loss and an enlarged gland, this needs urgent blood tests and a specialist now."', why:'Watchful waiting on a lymphoma picture delays urgent diagnosis.' }
      ]
    },

    'rhinitis-ladder': {
      ceg: ['New & undifferentiated presentations', 'Prescribing & pharmacology'],
      stem: {
        name: 'Priya Soneji', age: '34 years \u00b7 female',
        pmh: ['Years of seasonal (spring) BILATERAL sneezing, nasal itch, watery rhinorrhoea, congestion + itchy watery eyes', 'OTC oral antihistamine PRN \u2014 "barely helps"; sleep/concentration/teaching affected', 'Atopic (mild eczema)'],
        meds: ['Cetirizine PRN'],
        allergy: 'NKDA',
        recent: '"Can I have something stronger \u2014 steroids or a stronger antihistamine?"',
        reason: 'Video consultation \u2014 worsening seasonal nasal symptoms.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Confirm + reassure type', d:'Bilateral, seasonal, itchy/sneezy = hay fever; both-sides/seasonal is reassuring.' },
        { t:'2\u20134',  h:'Under-treatment insight', d:'PRN antihistamine alone under-treats; mainstay is REGULAR intranasal steroid, pre-season.' },
        { t:'4\u20136',  h:'Spray technique', d:'Head forward, opposite hand, aim away from septum, gentle sniff, up to 2 weeks; regular use.' },
        { t:'6\u20139',  h:'Build the ladder', d:'Avoidance + antihistamine + intranasal combo + eye drops + saline; LTRA/short oral steroid for severe; immunotherapy if refractory.' },
        { t:'9\u201312', h:'Red flags + review', d:'Unilateral obstruction/bleeding, facial pain/numbness \u2192 ENT; review control in 2 weeks; no NG12 to invent.' }
      ],
      wordPics: {
        fail: 'Just prescribes a "stronger" antihistamine or a depot steroid injection; ignores technique/adherence; never voices the unilateral red flags.',
        pass: 'Recognises under-treatment, starts a regular intranasal steroid with technique and the ladder, and mentions red flags.',
        exc:  'Confirms allergic rhinitis, identifies under-treatment, makes a regular intranasal steroid the mainstay with correct technique, builds the full ladder and add-ons appropriately (no depot steroid), explicitly safety-nets the unilateral/bloody ENT red flags, and reviews control.'
      },
      avoid: [
        { dont:'"I\u2019ll give you a stronger antihistamine and a steroid injection to get you through."', instead:'"The key is a regular steroid nose spray used daily with good technique \u2014 depot steroid injections aren\u2019t recommended for hay fever."', why:'A "stronger pill" plus depot steroid ignores the mainstay (regular intranasal steroid) and uses an inappropriate, outdated treatment.' },
        { dont:'(No technique counselling) "Use this spray when you\u2019re bad."', instead:'"Use it every day through the season, aim away from the septum, gentle sniff \u2014 occasional use and poor technique are why sprays seem to fail."', why:'PRN use and poor technique are the main causes of treatment failure.' },
        { dont:'(Never mentioning red flags) ending on the prescription.', instead:'"For the future: a one-sided blocked nose, one-sided bleeding, or facial pain/numbness isn\u2019t hay fever \u2014 come back, it needs an ENT check."', why:'Omitting the unilateral/bloody red-flag safety-net risks a missed sinonasal tumour later.' }
      ]
    },

    'persistent-fatigue-young': {
      ceg: ['Mental health & addiction', 'New & undifferentiated presentations'],
      stem: {
        name: 'Hannah Briar', age: '26 years \u00b7 female',
        pmh: ['~4 months "tired all the time"; functioning but drained; poor sleep, low energy', 'No red flags volunteered; worried "something is wrong"', 'Software developer; late screens; high caffeine'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Can you just test me for everything and find out what it is?"',
        reason: 'Video consultation \u2014 months of fatigue in a young adult.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Take seriously', d:'Validate the exhaustion; signal you\u2019ll do the right tests AND explore life \u2014 both matter.' },
        { t:'2\u20134',  h:'Structured + red flags', d:'Type/duration/pattern/impact; screen weight loss, sweats, lumps, breathlessness, neuro, bleeding.' },
        { t:'4\u20136',  h:'Focused screen', d:'FBC, ferritin, TFTs, HbA1c, U&E, LFTs, calcium, CRP, coeliac \u00b1 vit D/B12; explain why not "everything".' },
        { t:'6\u20139',  h:'The life behind it', d:'Mood/anhedonia, sleep hygiene, work/relationship/financial stress, caffeine/alcohol \u2014 openly.' },
        { t:'9\u201312', h:'Hold both + safety-net', d:'Not "just stress"; lifestyle/mood support + bloods; definite review; red flags \u2192 sooner.' }
      ],
      wordPics: {
        fail: 'Either bleeds a scattergun panel with no history, or dismisses as "just stress" without screening; over-investigates or prematurely reassures.',
        pass: 'Takes a structured history with red-flag screen, orders a focused panel, and explores mood/sleep/stress with safety-netting.',
        exc:  'Takes fatigue seriously, does a structured history + red-flag screen and a focused explained panel (not "everything"), genuinely explores mood/sleep/stress/lifestyle without dismissing as "just stress", elicits the hidden fear, offers proportionate support, and safety-nets with definite review.'
      },
      avoid: [
        { dont:'"Okay, let\u2019s test you for everything and see what comes up."', instead:'"I\u2019ll do a focused, sensible set that covers the real causes of tiredness \u2014 testing for everything just throws up false alarms."', why:'Scattergun testing generates false positives, incidentalomas and anxiety, and skips the history.' },
        { dont:'"Your tests will be normal \u2014 it\u2019s just stress, try to relax."', instead:'"A lot on your plate and poor sleep can genuinely cause this \u2014 that\u2019s real and treatable \u2014 and I\u2019ll still run the bloods alongside."', why:'Prematurely dismissing as "just stress" risks missing organic disease and invalidates the patient.' },
        { dont:'(No exploration) ordering bloods and ending.', instead:'"Can I ask how your mood and sleep are, and what\u2019s going on at work and home?"', why:'Omitting the psychosocial exploration misses the commonest cause and the hidden agenda.' }
      ]
    },

    'b12-deficiency': {
      ceg: ['Investigations & results', 'Prescribing & pharmacology'],
      stem: {
        name: 'Carol Denham', age: '46 years \u00b7 female',
        pmh: ['Low serum B12 + macrocytosis on FBC; fatigue', '\u26a0 Tingling/numbness in feet + few months of unsteadiness (neuro involvement)', 'Non-vegetarian, reasonable diet'],
        meds: ['Omeprazole (long-term)'],
        allergy: 'NKDA',
        recent: '"I eat meat \u2014 can\u2019t I just take a tablet or eat better instead of injections? I hate needles."',
        reason: 'Video consultation \u2014 explaining a low B12 result.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Explain the puzzle', d:'Eats meat \u2192 likely an ABSORPTION problem, not intake; commonest = pernicious anaemia (check IF antibodies); review PPI.' },
        { t:'2\u20134',  h:'Take neurology seriously', d:'Tingling + unsteadiness = neuropathy/SACD; this is why prompt, adequate treatment matters.' },
        { t:'4\u20137',  h:'Why injections', d:'Malabsorption \u2192 oral/diet won\u2019t correct it; IM hydroxocobalamin; intensive loading because of neuro features.' },
        { t:'7\u20139',  h:'Folate pitfall + tests', d:'Don\u2019t give folate alone first (SACD risk); check folate/iron/IF antibodies/TFTs/coeliac; monitor response.' },
        { t:'9\u201312', h:'Respect + safety-net', d:'Address needle aversion without coercion; report worsening neuro; recheck bloods; review antibody results.' }
      ],
      wordPics: {
        fail: 'Tells her to eat more B12-rich food or gives oral tablets for malabsorptive deficiency; or gives folic acid alone; ignores the neuro symptoms.',
        pass: 'Identifies likely pernicious anaemia, recognises neuro involvement, and treats with IM hydroxocobalamin avoiding the folate pitfall.',
        exc:  'Establishes the cause (likely pernicious anaemia/malabsorption, reviews PPI), recognises neurological involvement mandating intensive IM loading, explains honestly why diet/tablets won\u2019t work, avoids the folate-alone pitfall, orders the right work-up and monitoring, and respects the needle-averse patient with informed acceptance.'
      },
      avoid: [
        { dont:'"Just eat more eggs, meat and dairy, or take a B12 tablet \u2014 that\u2019ll bring it up."', instead:'"If your body can\u2019t absorb it \u2014 which is likely here \u2014 eating or swallowing more won\u2019t get it in; an injection bypasses the gut."', why:'Diet/oral B12 cannot correct malabsorptive deficiency (e.g. pernicious anaemia).' },
        { dont:'"I\u2019ll start you on folic acid to fix the big red cells."', instead:'"I won\u2019t give folate alone first \u2014 in B12 deficiency that can worsen the nerve problem; we correct B12 properly first."', why:'Folate alone in B12 deficiency can precipitate/worsen subacute combined degeneration.' },
        { dont:'(Ignoring neuro) "We\u2019ll do the standard loading and a top-up every three months."', instead:'"Because you\u2019ve got nerve symptoms, you need intensive loading \u2014 injections on alternate days until no further improvement \u2014 then maintenance."', why:'Neurological involvement requires intensive loading; standard dosing undertreats and risks irreversible damage.' }
      ]
    }

  });

})();
