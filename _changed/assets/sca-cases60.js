/* ============================================================
   Reasoning GP — Case Library batch 60:
   "Infection, travel & the antibiotic decision" (NEW themes)
   Lyme disease (EM rash after a tick bite); glandular fever (EBV
   \u2014 amoxicillin rash, splenic rupture/sport rule); community-
   acquired pneumonia (CRB-65, who to admit, smoker's CXR safety-
   net); and the sore-throat antibiotic-stewardship negotiation
   (FeverPAIN/Centor). NG12 lung safety-net noted; none invented.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases59.js.
   ============================================================ */

(function(){

  /* ============ 212. VIDEO — Lyme disease: the bull's-eye rash after a tick bite ============ */
  const c212 = {
    id:'lyme-disease', title:'"I\u2019ve got a spreading circular rash on my leg after a walking holiday \u2014 is it ringworm?"', type:'video', duration:12,
    meta:{ age:41, sex:'M', setting:'Video consultation \u2014 an expanding rash after rural/woodland exposure.', system:'Infectious disease \u2014 Lyme disease: erythema migrans, when to treat, what to watch' },
    brief:'Mr Alan Crowther, 41, returned from a hiking holiday in the Scottish Highlands ~10 days ago and has a slowly EXPANDING, circular/ROUND red rash on his calf, partly clearing centrally ("bull\u2019s-eye"), mildly warm, not very itchy; he recalls being in long grass/woodland but does not clearly remember a tick. He wonders if it is ringworm. The examinable task is to recognise ERYTHEMA MIGRANS (EM) \u2014 the diagnostic rash of early LYME DISEASE \u2014 from the history (tick-exposure environment, an expanding annular/target lesion days-to-weeks after exposure), to know that EM is a CLINICAL diagnosis that should be TREATED with antibiotics (e.g. doxycycline) WITHOUT waiting for serology (often negative early, not needed when EM present), to distinguish it from tinea/ringworm and cellulitis, to advise on tick removal/prevention, and to safety-net for disseminated features (neuroborreliosis \u2014 facial palsy; carditis; arthritis). The skill is recognising EM and treating promptly rather than mislabelling it ringworm or delaying for tests. No NG12 cancer link.',
    script:{
      opening:'"Doc, I got back from a walking holiday in the Highlands about ten days ago, and I\u2019ve got this odd rash on my calf \u2014 it started small and it\u2019s slowly spread into a big circle, gone a bit clear in the middle, like a target. It\u2019s not that itchy. I wondered if it\u2019s ringworm? I don\u2019t remember any bite."',
      facts:[
        { topic:'Recognise erythema migrans', text:'CORE \u2014 a slowly EXPANDING, circular/annular red rash, often with central clearing ("bull\u2019s-eye/target"), appearing days to weeks after exposure in a TICK habitat (woodland, long grass, moorland, deer areas), is ERYTHEMA MIGRANS (EM) \u2014 the diagnostic early sign of LYME DISEASE. Typically not very itchy/painful, expands over days, often >5 cm. Many patients do NOT recall a tick bite, so its absence does not exclude Lyme.' },
        { topic:'EM is a clinical diagnosis \u2014 treat, don\u2019t wait for serology', text:'KEY \u2014 erythema migrans is a CLINICAL diagnosis: if EM is present, TREAT for Lyme with antibiotics (DOXYCYCLINE first-line in adults; amoxicillin/alternatives where doxycycline is contraindicated, e.g. pregnancy/young children) WITHOUT waiting for blood tests. Serology is often NEGATIVE in early disease and is NOT required when EM is present \u2014 waiting delays treatment. (Serology is used when there is no EM but symptoms suggest Lyme.)' },
        { topic:'Differentiate the rash', text:'Distinguish EM from: TINEA/ringworm (scaly, raised, itchy advancing edge, smaller, scaly central clearing), CELLULITIS (hot, tender, spreading, unwell, more acute), a tick-bite hypersensitivity reaction (small, within hours-days, non-expanding), granuloma annulare, and insect-bite reactions. EM\u2019s slow expansion, large size, target morphology and exposure history are the discriminators.' },
        { topic:'Tick removal & prevention advice', text:'Advise TICK management: remove attached ticks promptly with fine-tipped tweezers/tick tool (grasp close to skin, steady pull, do not squeeze/burn), clean the area; prevention \u2014 cover skin, repellent, check the body (and children/pets) after rural activity. Prompt removal reduces transmission.' },
        { topic:'Safety-net the later features', text:'Untreated/disseminated Lyme can cause LATER features needing prompt review: NEUROBORRELIOSIS (facial/cranial nerve palsy, radiculopathy, meningitis), Lyme CARDITIS (heart block \u2014 syncope/palpitations), and Lyme ARTHRITIS (later joint swelling). Most treated early for EM recover fully; some get post-treatment fatigue/aches that usually settle.' },
        { topic:'The communication', text:'COMMUNICATION \u2014 the patient suspects ringworm; explain clearly why this is Lyme, that you can diagnose from the rash and exposure without waiting for tests, and that prompt antibiotics work well. Address any media-driven "Lyme disease" anxiety proportionately \u2014 early treated EM has an excellent prognosis \u2014 and give clear safety-netting and prevention advice.' },
      ],
      ice:{
        ideas:'It might be ringworm; no remembered bite so probably not from the trip.',
        concerns:'An odd spreading rash; possibly underlying worry about "Lyme disease" if raised.',
        expectations:'Antifungal cream for ringworm. What he needs: recognition of erythema migrans, prompt antibiotic treatment WITHOUT waiting for serology, tick/prevention advice, and safety-netting for later features.'
      },
      cues:['Expanding circular/target rash with central clearing, days-weeks after Highland hiking, not very itchy \u2014 erythema migrans (early Lyme); not ringworm.','EM is a CLINICAL diagnosis \u2014 treat with doxycycline now; don\u2019t wait for serology (often negative early); no recalled tick doesn\u2019t exclude it.','Tick removal/prevention advice + safety-net later features (facial palsy/neuroborreliosis, carditis/heart block, arthritis).']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises ERYTHEMA MIGRANS (expanding annular/target rash with central clearing, days-to-weeks after tick-habitat exposure, not very itchy) as early LYME DISEASE \u2014 and that absence of a recalled tick does not exclude it' },
      { dom:'tasks', text:'Knows EM is a CLINICAL diagnosis to be TREATED with antibiotics (doxycycline first-line; alternatives in pregnancy/children) WITHOUT waiting for serology (often negative early; not required when EM present)' },
      { dom:'tasks', text:'Differentiates EM from tinea/ringworm, cellulitis, tick-bite hypersensitivity and insect-bite reactions using the discriminating features' },
      { dom:'tasks', text:'Gives TICK removal (fine tweezers/tool, grasp close, steady pull, don\u2019t squeeze/burn) and PREVENTION advice (cover skin, repellent, body checks after rural activity)' },
      { dom:'tasks', text:'Safety-nets the later/disseminated features (neuroborreliosis \u2014 facial palsy/radiculopathy; carditis \u2014 heart block; arthritis) and knows when serology IS indicated (no EM but suggestive symptoms)' },
      { dom:'rto',   text:'Explains why this is Lyme (not ringworm) and that it can be diagnosed and treated from the rash/exposure without waiting for tests, checking understanding' },
      { dom:'rto',   text:'Addresses any "Lyme disease" anxiety proportionately \u2014 early treated EM has an excellent prognosis \u2014 without dismissing or catastrophising' },
      { dom:'gs',    text:'Safety-nets and follows up: starts prompt antibiotics, gives prevention/tick advice, lists later red-flag features warranting review, sets post-treatment-symptom expectations, and arranges review \u2014 treat now, not antifungal cream or a wait-for-serology delay' },
    ],
    worked:[
      { lbl:'Name it confidently', txt:'"I don\u2019t think this is ringworm. A circular rash with a clearing centre that\u2019s slowly spread over a week or two, after walking in the Highlands, is the classic rash of early Lyme disease \u2014 we call it erythema migrans."' },
      { lbl:'Treat without waiting', txt:'"Here\u2019s the important bit: I can diagnose this from the rash and your trip \u2014 I don\u2019t need a blood test, and early blood tests are often falsely negative anyway. So I\u2019ll start you on an antibiotic, doxycycline, today rather than wait."' },
      { lbl:'Reassure on the bite/prognosis', txt:'"Not remembering a tick is completely normal \u2014 they\u2019re tiny. And the good news: treated early like this, the outlook is excellent and most people recover fully."' },
      { lbl:'Tick + prevention advice', txt:'"For the future \u2014 after walks, check your skin (and kids/dogs), and if you find a tick, remove it promptly with fine tweezers close to the skin, steady pull, don\u2019t squeeze or burn it. Repellent and covering up help."' },
      { lbl:'Safety-net later features', txt:'"While the antibiotics work, watch for anything new: a drooping side of the face, severe headache/neck stiffness, palpitations or blackouts, or a swollen joint later. Those are uncommon but need checking promptly."' },
      { lbl:'Follow-up', txt:'"Some people feel achy or tired for a bit after \u2014 that usually settles. If the rash doesn\u2019t improve, or you get any of those warning signs, come back and we\u2019ll reassess, possibly with blood tests then."' },
    ],
    learning:'A slowly EXPANDING, circular/annular red rash, often with central clearing ("bull\u2019s-eye/target"), appearing days to weeks after exposure in a TICK habitat (woodland, long grass, moorland, deer areas) and typically not very itchy or painful, is ERYTHEMA MIGRANS (EM) \u2014 the diagnostic early sign of LYME DISEASE \u2014 and many patients do NOT recall a tick bite, so its absence does not exclude it. EM is a CLINICAL diagnosis: when EM is present, TREAT for Lyme with antibiotics (DOXYCYCLINE first-line in adults; amoxicillin or alternatives where doxycycline is contraindicated, e.g. pregnancy/young children) WITHOUT waiting for serology, which is often falsely negative in early disease and not required when EM is present (serology is reserved for when there is no EM but symptoms suggest Lyme). Distinguish EM from tinea/ringworm (scaly itchy advancing edge), cellulitis (hot, tender, acute, unwell), tick-bite hypersensitivity (small, early, non-expanding) and insect-bite reactions, using EM\u2019s slow expansion, large size, target morphology and exposure history. Give practical TICK removal (fine-tipped tweezers/tool, grasp close to the skin, steady pull, do not squeeze/burn) and PREVENTION advice (cover skin, repellent, post-activity body checks). Safety-net the later/disseminated features needing prompt review \u2014 NEUROBORRELIOSIS (facial/cranial nerve palsy, radiculopathy, meningitis), Lyme CARDITIS (heart block) and Lyme ARTHRITIS \u2014 while reassuring that early treated EM has an excellent prognosis (post-treatment fatigue/aches usually settle). Communicate clearly why this is Lyme rather than ringworm, treat promptly, and address any media-driven anxiety proportionately. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE NG95 Lyme disease \u00b7 erythema migrans (clinical diagnosis & treatment) \u00b7 tick removal/prevention (no NG12 link)',
      points:[
        { h:'Recognise EM', t:'Expanding annular/target rash with central clearing, days-to-weeks after tick-habitat exposure, usually not very itchy/painful, often >5 cm. Many don\u2019t recall a tick \u2014 absence doesn\u2019t exclude Lyme.' },
        { h:'Treat, don\u2019t wait', t:'EM is a clinical diagnosis \u2014 treat with antibiotics (doxycycline first-line; amoxicillin/alternatives in pregnancy/children) without waiting for serology, which is often negative early and not needed when EM is present.' },
        { h:'Differentiate', t:'Tinea/ringworm (scaly itchy edge), cellulitis (hot, tender, acute, unwell), tick-bite hypersensitivity (small, early, non-expanding), insect bite. EM\u2019s slow expansion/size/target/exposure are the discriminators.' },
        { h:'Tick removal & prevention', t:'Remove attached ticks promptly with fine tweezers/tool (grasp close, steady pull, don\u2019t squeeze/burn), clean area; cover skin, repellent, body checks after rural activity.' },
        { h:'Later features', t:'Disseminated Lyme: neuroborreliosis (facial/cranial palsy, radiculopathy, meningitis), carditis (heart block), arthritis. Prompt review if these arise.' },
        { h:'Serology indications', t:'Use serology when there is NO EM but symptoms suggest Lyme; not required when EM is present. Persistent/systemic features warrant review and specialist input.' },
        { h:'Never do', t:'Never mislabel EM as ringworm and give antifungals; never delay treatment to await serology; never assume no recalled tick excludes Lyme; never catastrophise (early treated EM does well).' },
        { h:'Safety-net & follow-up', t:'Start prompt antibiotics; prevention/tick advice; later red-flag features (facial palsy, severe headache/neck stiffness, syncope/palpitations, joint swelling); review if no improvement or new features.' }
      ]
    }
  };

  /* ============ 213. VIDEO — Glandular fever: sore throat + fatigue in a young adult ============ */
  const c213 = {
    id:'glandular-fever', title:'"I\u2019ve had a stinking sore throat and I\u2019m wiped out for weeks \u2014 just give me antibiotics?"', type:'video', duration:12,
    meta:{ age:19, sex:'M', setting:'Video consultation \u2014 prolonged sore throat and fatigue in a student.', system:'Infectious disease \u2014 glandular fever (EBV): diagnosis, the amoxicillin rash & the sport rule' },
    brief:'Mr Theo Larkin, 19, university student, has had a severe SORE THROAT for over a week with marked FATIGUE, fevers, and tender neck glands; examination shows enlarged tonsils with exudate and posterior + anterior cervical LYMPHADENOPATHY, and he feels "wiped out". He wants antibiotics so he can play rugby Saturday. The examinable task is to recognise INFECTIOUS MONONUCLEOSIS (glandular fever, EBV) \u2014 prolonged sore throat, profound fatigue, fever, prominent (esp. posterior cervical) lymphadenopathy, sometimes splenomegaly/hepatitis/palatal petechiae \u2014 to confirm with the appropriate test (MONOSPOT/heterophile antibody, FBC with atypical lymphocytes, LFTs; monospot can be early-negative), to explain it is VIRAL (antibiotics do not help) and self-limiting with supportive care, to AVOID AMOXICILLIN/ampicillin (florid maculopapular RASH in EBV), and critically to give the SPLENIC RUPTURE safety advice \u2014 AVOID CONTACT/COLLISION SPORTS and heavy lifting for ~3\u20134 weeks because of splenomegaly (no rugby Saturday). Safety-net for airway compromise, splenic rupture, and prolonged/atypical course. No NG12 cancer link.',
    script:{
      opening:'"I\u2019ve had an awful sore throat for over a week, I\u2019m running temperatures, my neck glands are up and I\u2019m absolutely wiped \u2014 I can barely get to lectures. My mate said I need antibiotics. Can you just prescribe some so I can get back to rugby? We\u2019ve got a big match Saturday."',
      facts:[
        { topic:'Recognise glandular fever', text:'CORE \u2014 in a YOUNG ADULT, a prolonged severe SORE THROAT with profound FATIGUE, fever, tender (especially POSTERIOR cervical) LYMPHADENOPATHY, tonsillar enlargement/exudate, and sometimes SPLENOMEGALY, hepatitis or palatal petechiae, is INFECTIOUS MONONUCLEOSIS (glandular fever), usually EBV. The fatigue and posterior cervical nodes help distinguish it from simple tonsillitis.' },
        { topic:'Confirm appropriately', text:'Confirm with the MONOSPOT/heterophile antibody test and FBC (lymphocytosis with ATYPICAL lymphocytes); check LFTs (EBV hepatitis is common). Timing matters \u2014 the monospot can be FALSELY NEGATIVE in the first week, so a negative early test may need repeating, or EBV-specific serology used. Diagnosis is clinical + supported by tests.' },
        { topic:'It\u2019s viral \u2014 antibiotics don\u2019t help', text:'Explain it is a VIRAL illness \u2014 antibiotics do NOT treat EBV and are not indicated. Management is SUPPORTIVE: rest, fluids, analgesia/antipyretics (paracetamol/ibuprofen), saltwater gargles. Most recover over 2\u20134 weeks though fatigue can linger. Resist the antibiotic request with a clear explanation rather than prescribing to satisfy it.' },
        { topic:'AVOID amoxicillin/ampicillin \u2014 the rash', text:'CRITICAL PITFALL \u2014 do NOT give AMOXICILLIN or ampicillin: in EBV they cause a florid, widespread maculopapular RASH (not a true penicillin allergy, but striking). Classic exam point \u2014 and antibiotics are not indicated anyway. If a genuine bacterial tonsillitis coexisted and treatment were needed, penicillin V (not amoxicillin) would be chosen.' },
        { topic:'The splenic rupture / sport rule', text:'CRITICAL SAFETY \u2014 glandular fever causes SPLENOMEGALY, and the spleen can RUPTURE (rarely, sometimes spontaneously, more with trauma). Advise AVOIDING CONTACT/COLLISION SPORTS and heavy lifting/vigorous activity for at least ~3\u20134 weeks (sometimes longer/until reviewed) \u2014 so NO rugby Saturday. Warn about sudden severe left-upper-quadrant/abdominal or shoulder-tip pain (splenic rupture \u2014 emergency).' },
        { topic:'Safety-net + the hidden agenda', text:'HIDDEN AGENDA \u2014 he wants antibiotics to get back to rugby quickly; the real needs are an accurate diagnosis, symptom relief, and the splenic/sport safety advice. Safety-net: airway compromise (severe swelling, difficulty swallowing/breathing/drooling), splenic rupture (severe abdominal pain), dehydration, and a prolonged/atypical course (persistent lymphadenopathy/weight loss \u2192 re-review). Explain kindly why the rugby and the antibiotics both have to wait.' },
      ],
      ice:{
        ideas:'A bad bacterial throat infection needing antibiotics; expects to be back to rugby quickly.',
        concerns:'Feeling wiped out and missing lectures; missing the big match; wanting a quick fix.',
        expectations:'Antibiotics and clearance for rugby Saturday. What he needs: recognition of glandular fever, confirmation, supportive care (no antibiotics, avoid amoxicillin), and the splenic/sport safety advice \u2014 no contact sport for weeks.'
      },
      cues:['Young adult: prolonged sore throat + profound fatigue + fever + posterior cervical lymphadenopathy + tonsillar exudate \u2014 glandular fever (EBV).','Viral \u2014 antibiotics don\u2019t help; AVOID amoxicillin/ampicillin (florid rash in EBV); confirm with monospot/FBC/LFTs (monospot can be early-negative).','Splenomegaly \u2192 NO contact/collision sport or heavy lifting for ~3\u20134 weeks (no rugby Saturday); safety-net splenic rupture + airway.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises INFECTIOUS MONONUCLEOSIS (glandular fever, EBV) in a young adult from prolonged sore throat + profound fatigue + fever + (esp. posterior cervical) lymphadenopathy + tonsillar exudate \u00b1 splenomegaly/palatal petechiae' },
      { dom:'tasks', text:'Confirms appropriately \u2014 monospot/heterophile antibody, FBC (atypical lymphocytes), LFTs \u2014 and knows the monospot can be FALSELY NEGATIVE in the first week (repeat / EBV serology)' },
      { dom:'tasks', text:'Explains it is VIRAL with SUPPORTIVE management (rest, fluids, analgesia/antipyretics), and resists the antibiotic request with a clear explanation rather than prescribing to satisfy it' },
      { dom:'tasks', text:'AVOIDS amoxicillin/ampicillin (florid maculopapular rash in EBV) \u2014 and knows antibiotics are not indicated anyway (penicillin V if a genuine coexisting bacterial tonsillitis needed treating)' },
      { dom:'tasks', text:'Gives the SPLENIC RUPTURE safety advice \u2014 avoid contact/collision sports and heavy lifting for ~3\u20134 weeks (so no rugby Saturday) \u2014 and warns of sudden severe abdominal/LUQ/shoulder-tip pain' },
      { dom:'rto',   text:'Reads the wish for antibiotics + quick return to sport, explains kindly why both must wait, and checks understanding without leaving him feeling dismissed' },
      { dom:'rto',   text:'Communicates the diagnosis and expected (sometimes prolonged) recovery realistically, supporting a frustrated young patient' },
      { dom:'gs',    text:'Safety-nets and follows up: airway compromise (severe swelling/difficulty swallowing/breathing), splenic rupture (severe abdominal pain), dehydration, prolonged/atypical course (persistent lymphadenopathy/weight loss \u2192 re-review), and review \u2014 supportive care + sport rule, not antibiotics' },
    ],
    worked:[
      { lbl:'Name it', txt:'"I don\u2019t think antibiotics are the answer here \u2014 and I\u2019ll explain why. A really sore throat with weeks of exhaustion, fevers and these neck glands in someone your age is most likely glandular fever, a viral infection. I\u2019ll confirm it with a blood test."' },
      { lbl:'Why not antibiotics', txt:'"Because it\u2019s viral, antibiotics won\u2019t touch it \u2014 they\u2019d just risk side-effects. In fact one common antibiotic, amoxicillin, gives people with glandular fever a dramatic rash, so we specifically avoid it. The treatment is rest, fluids and painkillers."' },
      { lbl:'The rugby conversation', txt:'"Now, the important one: glandular fever swells the spleen, and a knock \u2014 like in rugby \u2014 can rarely make it rupture, which is dangerous. So no contact sport or heavy lifting for at least three to four weeks. I\u2019m sorry, but Saturday\u2019s match is out."' },
      { lbl:'Confirm + expectations', txt:'"I\u2019ll do a blood test \u2014 sometimes it\u2019s negative very early so we may repeat it. Honestly, the tiredness can hang around for a few weeks; pace yourself with lectures. Most people are over the worst in two to four weeks."' },
      { lbl:'Splenic safety-net', txt:'"Crucial warning: if you get sudden severe pain in the left upper side of your tummy or your left shoulder tip, that could be the spleen \u2014 call 999 / go to A&E. And if your throat swells so much you struggle to swallow or breathe, that\u2019s urgent too."' },
      { lbl:'Review', txt:'"Come back if you\u2019re not improving, the glands persist for weeks, or you lose weight \u2014 we\u2019d reassess. And we\u2019ll check when it\u2019s safe to get back to rugby rather than guess. I know it\u2019s frustrating \u2014 you\u2019ll get there."' },
    ],
    learning:'In a YOUNG ADULT, a prolonged severe SORE THROAT with profound FATIGUE, fever, tender (especially POSTERIOR cervical) LYMPHADENOPATHY, tonsillar enlargement/exudate, and sometimes splenomegaly, hepatitis or palatal petechiae, is INFECTIOUS MONONUCLEOSIS (glandular fever), usually EBV \u2014 the fatigue and posterior cervical nodes helping distinguish it from simple tonsillitis. Confirm with the MONOSPOT/heterophile antibody test and FBC (atypical lymphocytes), checking LFTs (EBV hepatitis is common), and remember the monospot can be FALSELY NEGATIVE in the first week (repeat or use EBV-specific serology). Explain it is VIRAL \u2014 antibiotics do NOT help and are not indicated \u2014 with SUPPORTIVE management (rest, fluids, analgesia/antipyretics, saltwater gargles), resisting the antibiotic request with a clear explanation. A classic pitfall: AVOID AMOXICILLIN/ampicillin, which causes a florid maculopapular RASH in EBV (and is not needed anyway; penicillin V would be used if a genuine coexisting bacterial tonsillitis required treatment). Critically, glandular fever causes SPLENOMEGALY and the spleen can rupture, so advise AVOIDING CONTACT/COLLISION SPORTS and heavy lifting for at least ~3\u20134 weeks (sometimes longer/until reviewed) \u2014 hence no rugby \u2014 and warn of sudden severe left-upper-quadrant/abdominal or shoulder-tip pain (splenic rupture, an emergency). The hidden agenda is the wish for antibiotics and a fast return to sport; explain kindly why both must wait, give realistic recovery expectations (fatigue can linger), and safety-net for airway compromise (severe swelling, difficulty swallowing/breathing), splenic rupture, dehydration, and a prolonged/atypical course (persistent lymphadenopathy/weight loss prompting re-review). No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Glandular fever / EBV (CKS) \u00b7 monospot/serology timing \u00b7 amoxicillin rash \u00b7 splenic rupture & contact-sport advice (no NG12 link)',
      points:[
        { h:'Recognise glandular fever', t:'Young adult: prolonged sore throat + profound fatigue + fever + (esp. posterior cervical) lymphadenopathy + tonsillar exudate \u00b1 splenomegaly/palatal petechiae. EBV most common.' },
        { h:'Confirm', t:'Monospot/heterophile antibody + FBC (atypical lymphocytes); LFTs (EBV hepatitis). Monospot can be falsely negative in week 1 \u2014 repeat or use EBV serology.' },
        { h:'Viral \u2014 supportive only', t:'Antibiotics do not treat EBV and are not indicated. Rest, fluids, analgesia/antipyretics, gargles. Recovery 2\u20134 weeks; fatigue can linger.' },
        { h:'Avoid amoxicillin', t:'Amoxicillin/ampicillin cause a florid maculopapular rash in EBV (not true allergy). Avoid; antibiotics not indicated anyway. Penicillin V if a genuine coexisting bacterial tonsillitis needs treating.' },
        { h:'Splenic / sport rule', t:'Splenomegaly risks rupture. Avoid contact/collision sports and heavy lifting for ~3\u20134 weeks (sometimes longer/until reviewed). Warn of sudden severe LUQ/abdominal/shoulder-tip pain.' },
        { h:'Resist antibiotic request', t:'Explain the viral nature clearly; do not prescribe antibiotics to satisfy the request; set realistic recovery expectations.' },
        { h:'Never do', t:'Never prescribe antibiotics for glandular fever; never give amoxicillin/ampicillin; never clear for contact sport early; never miss splenomegaly/airway risk; never ignore persistent lymphadenopathy/weight loss.' },
        { h:'Safety-net & follow-up', t:'Airway compromise (severe swelling, difficulty swallowing/breathing), splenic rupture (severe abdominal pain) \u2192 emergency; dehydration; prolonged/atypical course \u2192 re-review; confirm when safe to resume sport.' }
      ]
    }
  };

  /* ============ 214. VIDEO — Community-acquired pneumonia: CRB-65 and who to admit ============ */
  const c214 = {
    id:'community-pneumonia', title:'"It\u2019s just a chest infection \u2014 can I have antibiotics and carry on at home?"', type:'video', duration:12,
    meta:{ age:71, sex:'M', setting:'Video consultation \u2014 cough, fever and breathlessness in an older adult.', system:'Respiratory \u2014 community-acquired pneumonia: CRB-65, who to admit, and the safety-net' },
    brief:'Mr Derek Halloran, 71 (ex-smoker, COPD), has 4 days of productive cough, fever, pleuritic chest pain and increasing BREATHLESSNESS, and per his wife has been confused/"not himself"; he wants oral antibiotics to carry on at home and is reluctant to go to hospital. The examinable task is to assess suspected COMMUNITY-ACQUIRED PNEUMONIA and make a proper SEVERITY/DISPOSITION decision rather than reflexively prescribing: use CRB-65 (Confusion, Respiratory rate \u226530, BP \u226490 systolic/\u226460 diastolic, age \u226565) plus the wider picture (sats/oxygenation, comorbidity such as COPD, observations/NEWS, ability to cope) to decide home vs hospital; recognise severe pneumonia/sepsis markers warranting ADMISSION (new CONFUSION, high RR, hypotension, low sats, age \u226565 with comorbidity); treat appropriately (antibiotics per severity/local guidance, antipyretics, fluids); and \u2014 as an older EX-SMOKER \u2014 arrange a follow-up CHEST X-RAY (~6 weeks) to confirm RESOLUTION and avoid missing an underlying LUNG CANCER (NG12). The skill is severity assessment and the home-vs-admit decision made out loud, not a blanket antibiotic-and-carry-on. NG12 lung awareness as the resolution safety-net.',
    script:{
      opening:'"It\u2019s just a chest infection, doctor \u2014 cough, bringing up green stuff, bit of a fever and my chest hurts when I breathe in. The wife says I\u2019ve been a bit muddled. Can you just call in some antibiotics so I can fight it off at home? I don\u2019t want to be sent into hospital."',
      facts:[
        { topic:'Assess severity \u2014 don\u2019t just prescribe', text:'CORE \u2014 suspected pneumonia is a DISPOSITION decision, not a reflex prescription. The skill is assessing SEVERITY to decide home vs hospital. Use CRB-65 plus the wider clinical picture rather than handing over oral antibiotics and "carry on", especially in an older comorbid patient.' },
        { topic:'CRB-65 (and CURB-65)', text:'CRB-65 scores one point each for: CONFUSION (new), Respiratory rate \u226530/min, low Blood pressure (systolic \u226490 or diastolic \u226460), and age \u226565. Higher scores indicate higher mortality risk and favour hospital assessment (e.g. \u22651\u20132 \u2014 consider hospital; \u22653 \u2014 urgent admission). In hospital CURB-65 adds Urea. He has new CONFUSION and is \u226565 \u2014 already concerning.' },
        { topic:'The wider severity picture', text:'CRB-65 is a guide, not the whole decision \u2014 also weigh OXYGEN SATURATIONS/oxygenation, respiratory rate and work of breathing, observations/NEWS, COMORBIDITY (his COPD), hydration, social support and ability to cope at home, and sepsis features. New confusion, hypoxia, tachypnoea, hypotension, or significant comorbidity lower the threshold to ADMIT.' },
        { topic:'Recognise severe pneumonia / sepsis \u2192 admit', text:'Markers favouring ADMISSION/urgent assessment: new CONFUSION, RR \u226530, hypotension, low O2 sats, age \u226565 with comorbidity, sepsis signs, inability to manage at home. Given his confusion, breathlessness, age and COPD, this is NOT a simple "carry on at home" case \u2014 he likely needs face-to-face assessment of observations/sats and probable admission.' },
        { topic:'Treatment + the smoker\u2019s CXR safety-net', text:'Treat per severity/local guidance (antibiotics by CRB-65/severity, antipyretics, fluids, oxygen if needed). CRUCIALLY, in an older EX-SMOKER, arrange a follow-up CHEST X-RAY (~6 weeks) to confirm RADIOLOGICAL RESOLUTION \u2014 a pneumonia that does not resolve, or recurrent same-site consolidation, can hide an underlying LUNG CANCER (NICE NG12: urgent CXR/2WW for non-resolving chest symptoms, haemoptysis, weight loss in smokers). Don\u2019t let "just a chest infection" mask a tumour.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 he minimises ("just a chest infection") and fears/refuses hospital. The skill is to assess severity properly, explain honestly why his confusion + breathlessness + age + COPD mean he needs proper assessment (and likely admission), address the fear of hospital with empathy, and arrange the smoker\u2019s resolution safety-net \u2014 not collude with antibiotics-and-carry-on.' },
      ],
      ice:{
        ideas:'It\u2019s "just a chest infection" treatable with oral antibiotics at home; doesn\u2019t want hospital.',
        concerns:'Fear of being admitted; wanting to stay home; minimising the confusion/breathlessness.',
        expectations:'Oral antibiotics and to carry on at home. What he needs: a proper severity assessment (CRB-65 + sats/comorbidity), likely admission given confusion/age/COPD, and a follow-up CXR safety-net as a smoker.'
      },
      cues:['Older comorbid (COPD) patient: cough + fever + pleuritic pain + breathlessness + NEW confusion \u2014 assess severity, don\u2019t just prescribe.','CRB-65: new confusion + age \u226565 (+ check RR/BP/sats/NEWS) \u2014 favours hospital assessment/admission, not carry-on-at-home.','Ex-smoker \u2192 follow-up CXR (~6 weeks) for resolution; non-resolving pneumonia can hide lung cancer (NG12).']
    },
    checkpoints:[
      { dom:'tasks', text:'Treats suspected pneumonia as a SEVERITY/DISPOSITION decision (home vs hospital) rather than reflexively prescribing oral antibiotics to "carry on"' },
      { dom:'tasks', text:'Uses CRB-65 (Confusion, RR \u226530, BP \u226490/\u226460, age \u226565) and recognises that new confusion + age \u226565 already raise concern' },
      { dom:'tasks', text:'Weighs the WIDER picture \u2014 oxygen sats/oxygenation, RR/work of breathing, observations/NEWS, COMORBIDITY (COPD), hydration, social support/coping \u2014 not CRB-65 alone' },
      { dom:'tasks', text:'Recognises markers of SEVERE pneumonia/sepsis warranting ADMISSION (new confusion, RR \u226530, hypotension, low sats, age \u226565 with comorbidity) and concludes this is likely an admit, not a carry-on case' },
      { dom:'tasks', text:'Treats per severity/local guidance AND arranges the smoker\u2019s follow-up CHEST X-RAY (~6 weeks) to confirm resolution \u2014 recognising NG12 lung-cancer awareness for non-resolving/recurrent consolidation' },
      { dom:'rto',   text:'Addresses the fear of hospital and the "just a chest infection" minimisation with empathy, explaining honestly why proper assessment/admission is needed' },
      { dom:'rto',   text:'Communicates the disposition decision OUT LOUD and checks understanding, supporting a reluctant patient without colluding' },
      { dom:'gs',    text:'Safety-nets and arranges disposition: face-to-face assessment of obs/sats and likely admission, deterioration/sepsis red flags, treatment, the resolution CXR safety-net as a smoker, and review \u2014 severity-based decision, not antibiotics-and-carry-on' },
    ],
    worked:[
      { lbl:'Reframe "just a chest infection"', txt:'"I hear you want to stay home, and I\u2019ll be straight \u2014 this might be more than a simple chest infection. The cough and fever plus being breathless and, importantly, a bit muddled, with your age and COPD, make me want to assess how unwell you actually are before deciding."' },
      { lbl:'Use CRB-65 out loud', txt:'"There\u2019s a scoring system we use: confusion, fast breathing, low blood pressure, and age over 65 each count. You\u2019ve got new confusion and you\u2019re over 65 \u2014 so I need your breathing rate, blood pressure and oxygen checked properly, which I can\u2019t fully do on video."' },
      { lbl:'Honest disposition', txt:'"Being honest: with the confusion, the breathlessness and your COPD, I think you need to be seen face-to-face today and very possibly admitted \u2014 not to be over-cautious, but because pneumonia at your age can turn serious quickly and home antibiotics might not be safe."' },
      { lbl:'Address the hospital fear', txt:'"I know hospital\u2019s the last place you want to be. But the muddle is a warning sign I can\u2019t ignore, and a few days getting the right treatment and oxygen could make all the difference. I\u2019ll make the process as smooth as I can."' },
      { lbl:'Treat + lung safety-net', txt:'"They\u2019ll start the right antibiotics for the severity. And once you\u2019re through this, because you used to smoke, I want a follow-up chest X-ray in about six weeks to be sure it\u2019s cleared completely \u2014 occasionally an infection sits on top of something we need to catch."' },
      { lbl:'Safety-net', txt:'"If before you\u2019re seen you become more breathless, drowsier, your lips go blue, or you can\u2019t keep fluids down \u2014 call 999. And if you ever cough up blood or lose weight later, tell me. Let\u2019s get you assessed properly today."' },
    ],
    learning:'Suspected COMMUNITY-ACQUIRED PNEUMONIA is a SEVERITY/DISPOSITION decision (home vs hospital), not a reflex prescription. Assess with CRB-65 \u2014 one point each for new CONFUSION, Respiratory rate \u226530/min, low Blood pressure (systolic \u226490 or diastolic \u226460), and age \u226565 \u2014 where higher scores indicate higher mortality risk and favour hospital assessment (broadly \u22651\u20132 consider hospital, \u22653 urgent admission; in hospital CURB-65 adds Urea). CRB-65 is a guide, not the whole decision: also weigh oxygen saturations/oxygenation, respiratory rate and work of breathing, observations/NEWS, comorbidity (e.g. COPD), hydration, social support and ability to cope, and sepsis features \u2014 new confusion, hypoxia, tachypnoea, hypotension or significant comorbidity all lower the threshold to ADMIT. Recognise severe pneumonia/sepsis markers warranting admission (new confusion, RR \u226530, hypotension, low sats, age \u226565 with comorbidity, sepsis signs, inability to manage at home); an older COPD patient with new confusion and breathlessness is not a "carry on at home" case and needs face-to-face assessment of observations/sats and probable admission. Treat per severity/local guidance (antibiotics chosen by severity, antipyretics, fluids, oxygen if needed). Crucially, in an older EX-SMOKER arrange a follow-up CHEST X-RAY (~6 weeks) to confirm radiological resolution, because a non-resolving or recurrent same-site consolidation can hide an underlying LUNG CANCER (NICE NG12: urgent CXR/2WW for non-resolving chest symptoms, haemoptysis or weight loss in smokers) \u2014 don\u2019t let "just a chest infection" mask a tumour. The hidden agenda is minimisation and fear of hospital; assess severity properly, make the disposition decision out loud, address the hospital fear with empathy, arrange the resolution safety-net, and safety-net deterioration \u2014 not collude with antibiotics-and-carry-on.',
    knowledge:{
      guideline:'NICE NG138 pneumonia (CAP) \u00b7 CRB-65/CURB-65 \u00b7 admit-vs-home disposition \u00b7 NG12 lung (follow-up CXR) \u00b7 antibiotic stewardship',
      points:[
        { h:'Disposition, not reflex', t:'Suspected pneumonia needs a severity-based home-vs-hospital decision, not an automatic oral-antibiotic-and-carry-on, especially in older comorbid patients.' },
        { h:'CRB-65', t:'1 point each: new Confusion, RR \u226530, low BP (SBP \u226490/DBP \u226460), age \u226565. \u22651\u20132 consider hospital; \u22653 urgent admission. CURB-65 adds Urea in hospital.' },
        { h:'Wider picture', t:'Also weigh sats/oxygenation, RR/work of breathing, NEWS, comorbidity (COPD), hydration, social support/coping, sepsis features. These can override a low CRB-65 toward admission.' },
        { h:'Admit markers', t:'New confusion, RR \u226530, hypotension, low sats, age \u226565 with comorbidity, sepsis signs, can\u2019t cope at home \u2192 face-to-face assessment/admission.' },
        { h:'Treat by severity', t:'Antibiotics per severity/local guidance, antipyretics, fluids, oxygen if needed. Avoid under- and over-treatment.' },
        { h:'Smoker\u2019s CXR safety-net', t:'Older ex-/current smoker \u2192 follow-up CXR (~6 weeks) to confirm resolution; non-resolving/recurrent consolidation can hide lung cancer (NG12: urgent CXR/2WW for non-resolution, haemoptysis, weight loss).' },
        { h:'Never do', t:'Never prescribe oral antibiotics and "carry on" without severity assessment; never ignore new confusion/hypoxia; never collude with hospital avoidance when admission is needed; never omit the smoker\u2019s resolution CXR.' },
        { h:'Safety-net & follow-up', t:'Face-to-face assessment/admission; deterioration/sepsis red flags (more breathless, drowsy, cyanosis, can\u2019t keep fluids); resolution CXR; review recovery.' }
      ]
    }
  };

  /* ============ 215. VIDEO — Sore throat antibiotic request: FeverPAIN/Centor & stewardship ============ */
  const c215 = {
    id:'sore-throat-stewardship', title:'"I always get antibiotics for my throat \u2014 just give me a course so I can get back to work"', type:'video', duration:12,
    meta:{ age:29, sex:'M', setting:'Video consultation \u2014 acute sore throat, requesting antibiotics.', system:'Respiratory / Stewardship \u2014 acute sore throat: FeverPAIN/Centor, stewardship & the unhappy patient' },
    brief:'Mr Aaron Pryce, 29, has 3 days of a sore throat, mild fever and a slight cough/coryza; he is otherwise well, eating and drinking, no breathing difficulty. He firmly EXPECTS ANTIBIOTICS ("always get them", needs to get back to work). The examinable task is the ANTIBIOTIC-STEWARDSHIP consultation: assess with a validated score (FeverPAIN or Centor), recognise that MOST sore throats are VIRAL and self-limiting, EXCLUDE red flags/serious causes (inability to swallow saliva/drooling/stridor \u2014 epiglottitis; trismus/unilateral swelling/"hot potato" voice \u2014 quinsy; immunosuppression/agranulocytosis-causing drugs; very systemically unwell), then NEGOTIATE: explain the natural course and that antibiotics offer little benefit and carry harms/resistance, offer self-care and symptomatic relief, consider a DELAYED/back-up prescription or treat only if the score/clinical picture warrants, and \u2014 the real skill \u2014 manage the EXPECTATION and potential dissatisfaction respectfully (shared understanding, not a flat refusal), with clear safety-netting. No NG12 cancer link.',
    script:{
      opening:'"I\u2019ve got a sore throat again \u2014 had it three days. I always end up needing antibiotics for these, so can you just write me a course? I\u2019ve got a busy week and I need to get back to work, I can\u2019t be hanging around being ill."',
      facts:[
        { topic:'Assess with a validated score', text:'CORE \u2014 assess the acute sore throat with a validated tool: CENTOR (tonsillar exudate, tender anterior cervical nodes, fever, absence of cough) or FEVERPAIN (Fever, Purulence, Attend rapidly \u22643 days, severely Inflamed tonsils, No cough/coryza). Higher scores suggest higher chance of bacterial (streptococcal) infection and more likely antibiotic benefit; low scores suggest a viral, self-limiting illness. His cough/coryza and mild illness point to a low score.' },
        { topic:'Most sore throats are viral & self-limiting', text:'KEY \u2014 the majority of acute sore throats are VIRAL and resolve within ~1 week without antibiotics, which offer only modest symptom benefit even in streptococcal cases and carry harms (side-effects, resistance). This underpins the stewardship message and the negotiation \u2014 it is appropriate care, not withheld care.' },
        { topic:'Exclude the serious causes \u2014 first', text:'CRITICAL \u2014 before reassuring, exclude red flags: inability to SWALLOW SALIVA, DROOLING, STRIDOR or respiratory difficulty (epiglottitis \u2014 emergency); TRISMUS, unilateral swelling, uvular deviation, "hot potato" voice (peritonsillar abscess/QUINSY \u2014 ENT); marked systemic illness/sepsis; immunosuppression or a drug causing agranulocytosis (e.g. carbimazole, DMARDs) where a sore throat could signal neutropenia. None here \u2014 but they must be screened.' },
        { topic:'Negotiate \u2014 don\u2019t just refuse', text:'CORE SKILL \u2014 manage the antibiotic EXPECTATION through negotiation, not a flat refusal: acknowledge his discomfort and need to get to work, explain the natural course and evidence, and reach a SHARED understanding. Options: self-care/symptomatic treatment for a low score; a DELAYED/back-up prescription (use only if not improving/worsening) as a middle ground; immediate antibiotics only if the score/clinical picture warrants (e.g. high FeverPAIN/Centor, or unwell).' },
        { topic:'Symptomatic care & work', text:'Offer effective SELF-CARE: regular paracetamol/ibuprofen, fluids, throat lozenges/medicated sprays, realistic timelines. Address the work concern honestly \u2014 antibiotics would not get him back to work faster for a viral throat; symptom control and time will. Provide self-certification advice rather than an antibiotic as a "work note".' },
        { topic:'The hidden agenda + dissatisfaction', text:'HIDDEN AGENDA \u2014 "I always get them / I need to get back to work" reflects belief and time pressure, not necessarily clinical need. The skill is to validate, educate without lecturing, negotiate a plan he accepts (often a delayed script + self-care), and handle potential DISSATISFACTION with respect \u2014 leaving the patient understanding and safe, not dismissed. Safety-net clearly.' },
      ],
      ice:{
        ideas:'He "always needs" antibiotics for sore throats; they\u2019ll get him back to work faster.',
        concerns:'Time pressure / getting back to work; discomfort; expectation of a course.',
        expectations:'An immediate antibiotic course. What he needs: a score-based assessment, red-flag exclusion, an explanation that it\u2019s likely viral/self-limiting, symptomatic care \u00b1 a delayed prescription, and respectful negotiation \u2014 not a flat refusal or an inappropriate script.'
      },
      cues:['Acute sore throat + cough/coryza, mildly unwell, eating/drinking \u2014 likely viral; score with FeverPAIN/Centor before deciding on antibiotics.','Exclude red flags first: can\u2019t swallow saliva/drooling/stridor (epiglottitis), trismus/unilateral swelling/hot-potato voice (quinsy), immunosuppression.','"I always get antibiotics / need to get back to work" \u2014 negotiate (self-care \u00b1 delayed script), don\u2019t flatly refuse or inappropriately prescribe.']
    },
    checkpoints:[
      { dom:'tasks', text:'Assesses the sore throat with a VALIDATED score (FeverPAIN or Centor) rather than prescribing reflexively, and interprets it (low score \u2192 likely viral/self-limiting)' },
      { dom:'tasks', text:'Recognises that most sore throats are VIRAL and self-limiting and that antibiotics offer modest benefit with real harms (side-effects, resistance) \u2014 the basis for stewardship' },
      { dom:'tasks', text:'EXCLUDES serious causes/red flags FIRST \u2014 epiglottitis (can\u2019t swallow saliva, drooling, stridor), quinsy (trismus, unilateral swelling, hot-potato voice), sepsis, immunosuppression/agranulocytosis-causing drugs \u2014 before reassuring' },
      { dom:'tasks', text:'NEGOTIATES the antibiotic decision \u2014 self-care for a low score, a DELAYED/back-up prescription as a middle ground, or immediate antibiotics only if the score/clinical picture warrants \u2014 rather than a flat refusal or inappropriate prescription' },
      { dom:'tasks', text:'Offers effective SYMPTOMATIC care (regular analgesia, fluids, lozenges/sprays, realistic timelines) and addresses the work concern honestly (antibiotics won\u2019t speed a viral throat; self-certification if needed)' },
      { dom:'rto',   text:'Manages the EXPECTATION and potential DISSATISFACTION respectfully \u2014 acknowledging his discomfort and time pressure, educating without lecturing, reaching a shared understanding rather than dismissing him' },
      { dom:'rto',   text:'Checks understanding and agreement on the plan, ensuring he leaves understanding and safe rather than fobbed off' },
      { dom:'gs',    text:'Safety-nets clearly: when to use a delayed script, and red flags warranting urgent review (difficulty swallowing saliva/breathing, drooling, severe unilateral pain/swelling, not improving over a week, systemic deterioration) \u2014 appropriate, negotiated care' },
    ],
    worked:[
      { lbl:'Acknowledge + assess', txt:'"I hear you \u2014 a sore throat\u2019s miserable and you\u2019ve got a busy week. Let me check it properly first and use a scoring system, so whatever we decide is based on how likely a bacterial infection actually is, not guesswork."' },
      { lbl:'Exclude the serious stuff', txt:'"A few safety checks: can you swallow your own saliva okay, any drooling or trouble breathing? Is the pain much worse on one side, or trouble opening your mouth? \u2026 No \u2014 good, that rules out the dangerous causes."' },
      { lbl:'Explain honestly', txt:'"Your score is low and you\u2019ve got a cough and cold symptoms, which points to a virus. Honestly, antibiotics wouldn\u2019t get you back to work any faster for this, and they carry downsides \u2014 side-effects and resistance. I\u2019m not just trying to withhold them."' },
      { lbl:'Negotiate a plan', txt:'"Here\u2019s what I\u2019d suggest: focus on settling the symptoms now, and I can give you a \u2018just-in-case\u2019 prescription to use ONLY if you\u2019re not improving or get worse over the next few days. That way you\u2019re covered without taking them unnecessarily. Does that feel fair?"' },
      { lbl:'Symptom + work advice', txt:'"For the symptoms: regular paracetamol and ibuprofen together work well, plus fluids and lozenges. If you need time off, you can self-certify for the first week \u2014 you don\u2019t need antibiotics as a sick note."' },
      { lbl:'Safety-net', txt:'"Come back urgently if you can\u2019t swallow your saliva, start drooling or struggling to breathe, the pain becomes severe on one side, or you\u2019re not improving after about a week. Otherwise this should settle in a few days."' },
    ],
    learning:'The acute sore throat antibiotic request is a STEWARDSHIP and negotiation consultation. Assess with a validated score \u2014 CENTOR (tonsillar exudate, tender anterior cervical nodes, fever, absence of cough) or FEVERPAIN (Fever, Purulence, Attend rapidly \u22643 days, severely Inflamed tonsils, No cough/coryza) \u2014 where higher scores raise the probability of streptococcal infection and antibiotic benefit, and low scores suggest a viral, self-limiting illness. Recognise that MOST sore throats are viral and resolve within about a week, that antibiotics offer only modest benefit even in streptococcal cases, and that they carry harms (side-effects, resistance) \u2014 the basis for appropriate, not withheld, care. Before reassuring, EXCLUDE the serious causes: epiglottitis (inability to swallow saliva, drooling, stridor, respiratory difficulty \u2014 emergency), peritonsillar abscess/QUINSY (trismus, unilateral swelling, uvular deviation, "hot potato" voice \u2014 ENT), marked systemic illness/sepsis, and immunosuppression or a drug causing agranulocytosis (e.g. carbimazole) where a sore throat may signal neutropenia. Then NEGOTIATE rather than flatly refuse: self-care for a low score, a DELAYED/back-up prescription (use only if not improving/worsening) as a middle ground, or immediate antibiotics only if the score/picture warrants. Offer effective symptomatic care (regular paracetamol/ibuprofen, fluids, lozenges/sprays) and address the work concern honestly \u2014 antibiotics will not speed a viral throat, and self-certification covers time off. The hidden agenda is the belief that antibiotics are needed and the pressure to return to work; validate, educate without lecturing, reach a shared plan the patient accepts, and handle potential dissatisfaction respectfully, leaving him understanding and safe with clear safety-netting. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE NG84 sore throat (acute) \u00b7 FeverPAIN/Centor \u00b7 antibiotic stewardship & delayed prescribing \u00b7 epiglottitis/quinsy red flags',
      points:[
        { h:'Score it', t:'Use FeverPAIN or Centor. Higher score \u2192 higher chance of strep/antibiotic benefit; low score \u2192 likely viral, self-limiting. Don\u2019t prescribe reflexively.' },
        { h:'Mostly viral', t:'Most sore throats are viral and resolve in ~1 week; antibiotics give modest benefit even in strep and carry harms (side-effects, resistance). Appropriate care, not withheld care.' },
        { h:'Exclude serious causes', t:'Epiglottitis (can\u2019t swallow saliva, drooling, stridor), quinsy (trismus, unilateral swelling, hot-potato voice), sepsis, immunosuppression/agranulocytosis-causing drugs (e.g. carbimazole). Screen before reassuring.' },
        { h:'Negotiate', t:'Self-care for low score; delayed/back-up prescription (use only if not improving/worsening) as a middle ground; immediate antibiotics only if score/picture warrants. Not a flat refusal.' },
        { h:'Symptomatic care & work', t:'Regular paracetamol/ibuprofen, fluids, lozenges/sprays; antibiotics won\u2019t speed a viral throat; self-certification for time off rather than an antibiotic "sick note".' },
        { h:'Manage expectation', t:'Validate discomfort/time pressure, educate without lecturing, reach a shared plan, and handle dissatisfaction respectfully \u2014 leave the patient understanding and safe.' },
        { h:'Never do', t:'Never prescribe reflexively on demand; never flatly refuse without explanation/negotiation; never skip the epiglottitis/quinsy red-flag screen; never miss agranulocytosis in at-risk patients.' },
        { h:'Safety-net & follow-up', t:'When to use a delayed script; urgent review for difficulty swallowing saliva/breathing, drooling, severe unilateral pain/swelling, no improvement in ~1 week, or systemic deterioration.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c212, c213, c214, c215);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'lyme-disease': {
      ceg: ['New & undifferentiated presentations', 'Investigations & results'],
      stem: {
        name: 'Alan Crowther', age: '41 years \u00b7 male',
        pmh: ['Expanding circular/target rash on calf with central clearing ~10 days', 'Hiking in Scottish Highlands 2 weeks ago; no recalled tick; mildly warm, not very itchy', 'Thinks it is ringworm'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Spreading circular rash since a walking holiday \u2014 is it ringworm?"',
        reason: 'Video \u2014 expanding rash after rural exposure.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise EM', d:'Expanding target rash + Highland hiking = early Lyme erythema migrans, not ringworm.' },
        { t:'2\u20134',  h:'Differentiate', d:'Ringworm (scaly/itchy edge), cellulitis (hot/tender/acute), tick-bite reaction (small/early) \u2014 no antifungal.' },
        { t:'4\u20137',  h:'Treat clinically', d:'EM is clinical; don\u2019t wait for serology (often early-negative); doxycycline now (alt in pregnancy/children).' },
        { t:'7\u20139',  h:'Tick + prevention', d:'Remove ticks with fine tweezers (no squeeze/burn); cover skin, repellent, body checks after walks.' },
        { t:'9\u201312', h:'Safety-net later features', d:'Facial palsy/neuroborreliosis, carditis/heart block, arthritis \u2192 prompt review; post-treatment aches settle.' }
      ],
      wordPics: {
        fail: 'Mislabels it ringworm and gives antifungal cream, or delays treatment to wait for serology \u2014 missing/under-treating early Lyme.',
        pass: 'Recognises erythema migrans, treats with doxycycline without waiting for serology, and gives prevention/safety-net advice.',
        exc:  'Confidently recognises erythema migrans, treats clinically with doxycycline (no serology wait), differentiates from ringworm/cellulitis, gives tick-removal/prevention advice, safety-nets disseminated features, and reassures proportionately on prognosis.'
      },
      avoid: [
        { dont:'"Looks like ringworm \u2014 here\u2019s an antifungal cream."', instead:'"This expanding target rash after Highland walking is early Lyme disease \u2014 erythema migrans \u2014 not ringworm; you need an antibiotic."', why:'Mislabelling EM as ringworm misses Lyme and gives ineffective treatment.' },
        { dont:'"Let\u2019s send Lyme bloods and start treatment once they\u2019re back."', instead:'"With the classic rash I\u2019ll treat now \u2014 early blood tests are often falsely negative and waiting just delays treatment."', why:'EM is a clinical diagnosis; awaiting serology delays effective antibiotics.' },
        { dont:'"No tick bite remembered, so it\u2019s probably not Lyme."', instead:'"Most people never notice the tick \u2014 the rash itself is enough to diagnose it."', why:'Absence of a recalled bite does not exclude Lyme.' }
      ]
    },

    'glandular-fever': {
      ceg: ['Children & young people', 'Prescribing & pharmacology'],
      stem: {
        name: 'Theo Larkin', age: '19 years \u00b7 male',
        pmh: ['>1 week severe sore throat + profound fatigue + fevers; tender posterior+anterior cervical nodes; tonsillar exudate', 'Student; wants to play rugby Saturday', '?splenomegaly'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Stinking sore throat and wiped out for weeks \u2014 just give me antibiotics so I can play rugby?"',
        reason: 'Video \u2014 prolonged sore throat and fatigue in a student.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise EBV', d:'Prolonged sore throat + fatigue + posterior cervical nodes + exudate in a 19-year-old = glandular fever.' },
        { t:'2\u20134',  h:'Confirm', d:'Monospot + FBC (atypical lymphocytes) + LFTs; monospot can be early-negative (repeat/serology).' },
        { t:'4\u20136',  h:'Viral \u2014 no antibiotics', d:'Supportive care; resist antibiotic request; AVOID amoxicillin (florid EBV rash).' },
        { t:'6\u20139',  h:'Spleen/sport rule', d:'Splenomegaly \u2192 no contact sport/heavy lifting ~3\u20134 weeks (no rugby Saturday); LUQ/shoulder-tip pain = emergency.' },
        { t:'9\u201312', h:'Expectations + safety-net', d:'Fatigue lingers weeks; airway compromise/splenic rupture/dehydration; persistent nodes \u2192 re-review.' }
      ],
      wordPics: {
        fail: 'Prescribes antibiotics (esp. amoxicillin) for "tonsillitis", clears him for rugby, and misses the splenic-rupture advice.',
        pass: 'Recognises glandular fever, avoids antibiotics/amoxicillin, and gives the contact-sport/splenic advice.',
        exc:  'Recognises EBV and confirms appropriately, explains the viral nature and resists antibiotics, specifically avoids amoxicillin, gives the splenic-rupture/no-contact-sport advice with realistic recovery expectations, and safety-nets airway/spleen.'
      },
      avoid: [
        { dont:'"I\u2019ll give you amoxicillin for the tonsillitis."', instead:'"This is glandular fever, which is viral \u2014 antibiotics won\u2019t help, and amoxicillin specifically causes a dramatic rash in it."', why:'Amoxicillin in EBV causes a florid rash and antibiotics are not indicated.' },
        { dont:'"Rest up and you should be fine for the match Saturday."', instead:'"No contact sport or heavy lifting for at least 3\u20134 weeks \u2014 the spleen can rupture; Saturday\u2019s out."', why:'Clearing contact sport early risks splenic rupture.' },
        { dont:'(No spleen warning) ending without abdominal red flags.', instead:'"Sudden severe pain in your left upper tummy or left shoulder tip \u2014 call 999, it could be the spleen."', why:'Omitting splenic-rupture safety-netting misses a life-threatening complication.' }
      ]
    },

    'community-pneumonia': {
      ceg: ['Urgent & unscheduled care', 'Older adults'],
      stem: {
        name: 'Derek Halloran', age: '71 years \u00b7 male',
        pmh: ['4 days: productive cough + fever + pleuritic pain + increasing breathlessness; \u26a0 new confusion (per wife)', 'Ex-smoker; COPD', 'Wants oral antibiotics at home; reluctant re hospital'],
        meds: ['LABA/LAMA inhaler', 'Salbutamol PRN'],
        allergy: 'NKDA',
        recent: '"Just a chest infection \u2014 can I have antibiotics and carry on at home?"',
        reason: 'Video \u2014 cough, fever, breathlessness in an older adult.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Reframe + assess', d:'Not "just a chest infection" \u2014 assess severity; cough+fever+breathless+confusion+COPD+age.' },
        { t:'2\u20135',  h:'CRB-65 out loud', d:'New confusion + age \u226565 (+ RR/BP/sats/NEWS) \u2014 favours hospital, not carry-on.' },
        { t:'5\u20137',  h:'Wider picture + admit', d:'Sats, comorbidity (COPD), coping, sepsis signs \u2192 likely face-to-face assessment/admission.' },
        { t:'7\u20139',  h:'Treat + lung safety-net', d:'Antibiotics per severity; ex-smoker \u2192 follow-up CXR ~6 weeks (NG12: non-resolving can hide cancer).' },
        { t:'9\u201312', h:'Address fear + safety-net', d:'Empathy re hospital; deterioration/sepsis red flags \u2192 999; haemoptysis/weight loss later \u2192 tell me.' }
      ],
      wordPics: {
        fail: 'Phones in oral antibiotics for "a chest infection" and lets him carry on at home despite confusion/age/COPD; no CXR safety-net.',
        pass: 'Assesses severity with CRB-65, recognises admission criteria, and arranges assessment + smoker\u2019s follow-up CXR.',
        exc:  'Reframes the minimisation, uses CRB-65 plus the wider picture out loud, recognises this older confused COPD patient needs face-to-face assessment/admission, treats by severity, arranges the smoker\u2019s resolution CXR (NG12), and addresses the hospital fear empathetically.'
      },
      avoid: [
        { dont:'"I\u2019ll call in some antibiotics \u2014 fight it off at home."', instead:'"With new confusion, breathlessness, your age and COPD, you need assessing in person today and very likely admission."', why:'Reflexively prescribing and sending home misses severe pneumonia/sepsis in a high-risk patient.' },
        { dont:'(No severity tool) deciding by gut.', instead:'"Let\u2019s use CRB-65 \u2014 confusion, breathing rate, blood pressure, age \u2014 and check your oxygen to decide safely."', why:'Skipping a structured severity assessment risks an unsafe home-vs-admit decision.' },
        { dont:'(No resolution CXR) discharging the smoker without follow-up imaging.', instead:'"Once better, because you smoked, a follow-up chest X-ray in ~6 weeks confirms it\u2019s cleared and nothing\u2019s hidden underneath."', why:'A non-resolving pneumonia in a smoker can mask lung cancer (NG12).' }
      ]
    },

    'sore-throat-stewardship': {
      ceg: ['Prescribing & pharmacology', 'Urgent & unscheduled care'],
      stem: {
        name: 'Aaron Pryce', age: '29 years \u00b7 male',
        pmh: ['3 days sore throat + mild fever + cough/coryza; eating/drinking, no breathing difficulty', 'Otherwise well', 'Firmly expects antibiotics ("always get them"); time pressure at work'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"I always get antibiotics for my throat \u2014 just give me a course so I can get back to work."',
        reason: 'Video \u2014 acute sore throat requesting antibiotics.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Acknowledge + score', d:'Validate; assess with FeverPAIN/Centor \u2014 cough/coryza suggests low score/viral.' },
        { t:'2\u20134',  h:'Exclude red flags', d:'Can\u2019t swallow saliva/drooling/stridor (epiglottitis), trismus/unilateral/hot-potato voice (quinsy), agranulocytosis drugs.' },
        { t:'4\u20137',  h:'Explain + negotiate', d:'Mostly viral/self-limiting; antibiotics modest benefit + harms; self-care \u00b1 delayed script.' },
        { t:'7\u20139',  h:'Symptom + work advice', d:'Regular analgesia, fluids, lozenges; antibiotics won\u2019t speed a viral throat; self-certify time off.' },
        { t:'9\u201312', h:'Manage expectation + safety-net', d:'Shared plan, handle dissatisfaction respectfully; when to use delayed script + red flags.' }
      ],
      wordPics: {
        fail: 'Prescribes antibiotics on demand without scoring/red-flag screen, or flatly refuses without explanation/negotiation \u2014 leaving the patient dismissed.',
        pass: 'Scores the throat, excludes red flags, explains the viral nature, and negotiates self-care \u00b1 a delayed prescription.',
        exc:  'Assesses with FeverPAIN/Centor, excludes epiglottitis/quinsy/agranulocytosis, explains stewardship without lecturing, negotiates a delayed/back-up script and symptomatic care, addresses the work concern honestly, and manages expectation/dissatisfaction respectfully with clear safety-netting.'
      },
      avoid: [
        { dont:'"Okay, here\u2019s a course of antibiotics \u2014 off you go."', instead:'"Let me score it and check it\u2019s not the serious causes first \u2014 most sore throats are viral and antibiotics won\u2019t speed your recovery."', why:'Reflexive on-demand prescribing drives resistance and skips assessment.' },
        { dont:'"No, you don\u2019t need antibiotics" (flat refusal, no plan).', instead:'"I\u2019ll give you a just-in-case prescription to use only if you worsen, plus what genuinely helps now \u2014 does that feel fair?"', why:'A flat refusal without negotiation/safety-net leaves the patient dissatisfied and unsupported.' },
        { dont:'(No red-flag screen) reassuring straight away.', instead:'"Can you swallow your saliva, any drooling or one-sided swelling? \u2014 just ruling out the dangerous causes."', why:'Missing epiglottitis/quinsy could be catastrophic.' }
      ]
    }

  });

})();
