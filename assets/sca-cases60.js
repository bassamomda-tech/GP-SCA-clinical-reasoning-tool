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
    meta:{ age:41, sex:'M', setting:'Video consultation \u2014 an expanding rash after rural/woodland exposure.', system:'Infectious disease \u2014 Lyme disease: erythema migrans, when to treat, what to watch', checked:'October 2026' },
    brief:'Mr Alan Crowther, 41, returned from a hiking holiday in the Scottish Highlands ~10 days ago and has a slowly EXPANDING, circular/ROUND red rash on his calf, partly clearing centrally ("bull\u2019s-eye"), mildly warm, not very itchy; he recalls being in long grass/woodland but does not clearly remember a tick. He wonders if it is ringworm. The examinable task is to recognise ERYTHEMA MIGRANS (EM) \u2014 the diagnostic rash of early LYME DISEASE \u2014 from the history (tick-exposure environment, an expanding annular/target lesion days-to-weeks after exposure), to know that EM is a CLINICAL diagnosis that should be TREATED with antibiotics (NICE NG95: doxycycline 100 mg twice a day for 21 days first line) WITHOUT waiting for serology (often negative early, not needed when EM present), to distinguish it from tinea/ringworm and cellulitis, to advise on tick removal/prevention, and to safety-net for disseminated features (neuroborreliosis \u2014 facial palsy; carditis; arthritis). The skill is recognising EM and treating promptly rather than mislabelling it ringworm or delaying for tests.',
    script:{
      opening:"(Relaxed, curious, trouser leg rolled up.) \"Doc, I got back from a walking holiday in the Highlands about ten days ago, and I've got this odd rash on my calf — it started small and it's slowly spread into a big circle, gone a bit clear in the middle, like a target. It's not that itchy. I wondered if it's ringworm? I don't remember any bite.\"",
      facts:[
        { topic:"The rash", text:"\"Here. It's about the size of my palm now\" — shows the left calf on camera: a round red patch about 10 cm, paler in the centre. \"Not scaly. Maybe a bit warm, but not sore.\" \"About a week ago. Maybe a bit bigger each day.\" No blisters, no weeping." },
        { topic:"Exposure", text:"\"All of that, really. Long grass most days, and there were deer about.\" Wore shorts. Didn't check for ticks. No pets at home." },
        { topic:"Symptoms", text:"\"Bit tired, maybe achy. Nothing like that otherwise\" — no fever now, no facial droop, no numbness or shooting pains, no palpitations, dizziness or fainting, no swollen joints, no headache or stiff neck." },
        { topic:"Other rashes, medicines", text:"\"Just this one. No medicines, no allergies that I know of.\" Not tried any cream." },
        { topic:"Background", text:"Secondary school geography teacher. Married, two children. Non-smoker, drinks moderately. Plans to go hiking in the Peak District next month." },
        { topic:"Fears", text:"\"Honestly, once I searched it, 'Lyme disease' came up, and I've read horror stories online about people ill for years. I was hoping it was just a fungus and I could get a cream.\"" },
        { topic:"How to play it", text:"Easy-going but quietly worried. Asks: \"So you think it is Lyme? Don't I need a blood test?\" Relieved by a clear plan: \"That's a relief. What about the horror stories?\" Practical: \"Three weeks. Okay. Should I do anything about the walking?\" If given an antifungal cream, accept it (the trap)." }
      ],
      ice:{
        ideas:"\"Ringworm, probably — I don't remember a bite.\"",
        concerns:"HIDDEN AGENDA — he has read online \"horror stories\" about long-term Lyme disease and is quietly worried.",
        expectations:"\"A cream for ringworm.\""
      },
      cues:[
        "\"Like a target.\" — erythema migrans description.",
        "\"Walking holiday in the Highlands.\" — tick exposure.",
        "\"I've read horror stories.\" — anxiety to address proportionately."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises ERYTHEMA MIGRANS (expanding annular/target rash with central clearing, days-to-weeks after tick-habitat exposure, not very itchy) as early LYME DISEASE \u2014 and that absence of a recalled tick does not exclude it' },
      { dom:'cm', text:'Knows EM is a CLINICAL diagnosis to be TREATED with antibiotics (doxycycline 100 mg twice a day for 21 days first-line, NICE NG95; amoxicillin or azithromycin alternatives in pregnancy/children) WITHOUT waiting for serology (often negative early; not required when EM present)' },
      { dom:'dg', text:'Differentiates EM from tinea/ringworm, cellulitis, tick-bite hypersensitivity and insect-bite reactions using the discriminating features' },
      { dom:'cm', text:'Gives TICK removal (fine tweezers/tool, grasp close, steady pull, don\u2019t squeeze/burn) and PREVENTION advice (cover skin, repellent, body checks after rural activity)' },
      { dom:'cm', text:'Safety-nets the later/disseminated features (neuroborreliosis \u2014 facial palsy/radiculopathy; carditis \u2014 heart block; arthritis) and knows when serology IS indicated (no EM but suggestive symptoms)' },
      { dom:'ro',   text:'Explains why this is Lyme (not ringworm) and that it can be diagnosed and treated from the rash/exposure without waiting for tests, checking understanding' },
      { dom:'ro',   text:'Addresses any "Lyme disease" anxiety proportionately \u2014 early treated EM has an excellent prognosis \u2014 without dismissing or catastrophising' },
      { dom:'cm',    text:'Safety-nets and follows up: starts prompt antibiotics, gives prevention/tick advice, lists later red-flag features warranting review, sets post-treatment-symptom expectations, and arranges review \u2014 treat now, not antifungal cream or a wait-for-serology delay' },
    ],
    worked:[
      { lbl:'Name it confidently', txt:'"I don\u2019t think this is ringworm. A circular rash with a clearing centre that\u2019s slowly spread over a week or two, after walking in the Highlands, is the classic rash of early Lyme disease \u2014 we call it erythema migrans."' },
      { lbl:'Treat without waiting', txt:'"Here\u2019s the important bit: I can diagnose this from the rash and your trip \u2014 I don\u2019t need a blood test, and early blood tests are often falsely negative anyway. So I’ll start you on an antibiotic today rather than wait: doxycycline, one tablet twice a day for 21 days. Take it with a full glass of water and stay upright afterwards, and protect your skin from the sun while you’re on it."' },
      { lbl:'Reassure on the bite/prognosis', txt:'"Not remembering a tick is completely normal \u2014 they\u2019re tiny. And the good news: treated early like this, the outlook is excellent and most people recover fully."' },
      { lbl:'Tick + prevention advice', txt:'"For the future \u2014 after walks, check your skin, especially the backs of the knees, groin and waistband, and if you find a tick, remove it promptly with fine tweezers close to the skin, steady pull, don\u2019t squeeze or burn it. Repellent and covering up help."' },
      { lbl:'Safety-net later features', txt:'"While the antibiotics work, watch for anything new: a drooping side of the face, severe headache/neck stiffness, palpitations or blackouts, or a swollen joint later. Those are uncommon but need checking promptly."' },
      { lbl:'Follow-up', txt:'"Some people feel achy or tired for a bit after \u2014 that usually settles. If the rash doesn\u2019t improve, or you get any of those warning signs, come back and we\u2019ll reassess, possibly with blood tests then."' },
    ],
    learning:'A slowly EXPANDING, circular/annular red rash, often with central clearing ("bull\u2019s-eye/target"), appearing days to weeks after exposure in a TICK habitat (woodland, long grass, moorland, deer areas) and typically not very itchy or painful, is ERYTHEMA MIGRANS (EM) \u2014 the diagnostic early sign of LYME DISEASE \u2014 and many patients do NOT recall a tick bite, so its absence does not exclude it. EM is a CLINICAL diagnosis: when EM is present, TREAT for Lyme with antibiotics (NICE NG95: DOXYCYCLINE 100 mg twice a day for 21 days first-line in adults; amoxicillin for 21 days or azithromycin where doxycycline is contraindicated, e.g. pregnancy/young children) WITHOUT waiting for serology, which is often falsely negative in early disease and not required when EM is present (serology is reserved for when there is no EM but symptoms suggest Lyme). Distinguish EM from tinea/ringworm (scaly itchy advancing edge), cellulitis (hot, tender, acute, unwell), tick-bite hypersensitivity (small, early, non-expanding) and insect-bite reactions, using EM\u2019s slow expansion, large size, target morphology and exposure history. Give practical TICK removal (fine-tipped tweezers/tool, grasp close to the skin, steady pull, do not squeeze/burn) and PREVENTION advice (cover skin, repellent, post-activity body checks). Safety-net the later/disseminated features needing prompt review \u2014 NEUROBORRELIOSIS (facial/cranial nerve palsy, radiculopathy, meningitis), Lyme CARDITIS (heart block) and Lyme ARTHRITIS \u2014 while reassuring that early treated EM has an excellent prognosis (post-treatment fatigue/aches usually settle). Communicate clearly why this is Lyme rather than ringworm, treat promptly, and address any media-driven anxiety proportionately.',
    knowledge:{
      guideline:'NICE NG95 Lyme disease (2018) · NICE QS186 Lyme disease (2019) · UKHSA tick awareness and removal · erythema migrans (clinical diagnosis & treatment) \u00b7 tick removal/prevention',
      points:[
        { h:'Recognise EM', t:'Expanding annular/target rash with central clearing, days-to-weeks after tick-habitat exposure, usually not very itchy/painful, often >5 cm. Many don\u2019t recall a tick \u2014 absence doesn\u2019t exclude Lyme.' },
        { h:'Treat, don\u2019t wait', t:'EM is a clinical diagnosis \u2014 treat with antibiotics (NICE NG95: doxycycline 100 mg twice a day for 21 days first-line; amoxicillin/azithromycin alternatives in pregnancy/children, doses per BNF) without waiting for serology, which is often negative early and not needed when EM is present.' },
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
    meta:{ age:19, sex:'M', setting:'Video consultation \u2014 prolonged sore throat and fatigue in a student.', system:'Infectious disease \u2014 glandular fever (EBV): diagnosis, the amoxicillin rash & the sport rule', checked:'October 2026' },
    brief:'Mr Theo Larkin, 19, university student, has had a severe SORE THROAT for over a week with marked FATIGUE, fevers, and tender neck glands; on camera he shows enlarged tonsils with exudate and points out tender posterior + anterior cervical glands (LYMPHADENOPATHY), and he feels "wiped out"; the spleen cannot be examined by video, so a face-to-face abdominal check is arranged with the bloods. He wants antibiotics so he can play rugby Saturday. The examinable task is to recognise INFECTIOUS MONONUCLEOSIS (glandular fever, EBV) \u2014 prolonged sore throat, profound fatigue, fever, prominent (esp. posterior cervical) lymphadenopathy, sometimes splenomegaly/hepatitis/palatal petechiae \u2014 to confirm with the appropriate test (MONOSPOT/heterophile antibody, FBC with atypical lymphocytes, LFTs; monospot can be early-negative — repeat or EBV serology, and offer an HIV test if negative, BHIVA/BASHH/BIA 2020), to explain it is VIRAL (antibiotics do not help) and self-limiting with supportive care, to AVOID AMOXICILLIN/ampicillin (florid maculopapular RASH in EBV), and critically to give the SPLENIC RUPTURE safety advice \u2014 AVOID CONTACT/COLLISION SPORTS and heavy lifting for at least 4 weeks from the start of symptoms and until reviewed, because of splenomegaly (NICE CKS; no rugby Saturday). Safety-net for airway compromise, splenic rupture, and prolonged/atypical course.',
    script:{
      opening:"(Hoarse, slow, wrapped in a hoodie; propped up in bed in student halls.) \"I've had an awful sore throat for over a week, I'm running temperatures, my neck glands are up and I'm absolutely wiped — I can barely get to lectures. My mate said I need antibiotics. Can you just prescribe some so I can get back to rugby? We've got a big match Saturday.\"",
      facts:[
        { topic:"Throat and swallowing", text:"\"It kills to swallow, but I'm getting drinks down. Breathing's fine.\" No drooling, no muffled voice, can open his mouth fully. If asked to show his throat on camera: big tonsils with white patches." },
        { topic:"Glands", text:"\"Here… they're up at the front and down the back of my neck\" — points to both sides; tender." },
        { topic:"Fatigue and fever", text:"\"Way worse. I sleep all afternoon and still feel flattened.\" Temperatures up to 38.5°C most evenings for 9 days." },
        { topic:"Other symptoms", text:"\"Tummy's fine. No rash. Haven't looked at the roof of my mouth.\" No yellow skin or dark urine. Eating little." },
        { topic:"Medicines", text:"\"Just paracetamol. No allergies.\" Hasn't been given any antibiotics." },
        { topic:"Contacts and sexual health", text:"\"There are people around at uni.\" If asked sensitively: a new girlfriend a month ago; no other risks; never had an HIV test." },
        { topic:"Life", text:"First-year sports science student, lives in halls. Plays rugby (prop) and lifts weights 4 times a week. \"Missing lectures is stressing me out.\"" },
        { topic:"Practical", text:"Can get to the surgery for a blood test and a tummy check if he gets a lift from a friend." },
        { topic:"How to play it", text:"Fed up and keen to play: \"Tonsillitis, I reckon. I just need to be fit for Saturday. It's a big one.\" Pushes: \"So no antibiotics at all? My mate got them.\" Gutted about rugby: \"That's gutting. Could I just play half?\" Accepts once the spleen risk is explained clearly. Asks for a note for university." }
      ],
      ice:{
        ideas:"\"Tonsillitis — antibiotics will sort it.\"",
        concerns:"Missing the big match and lectures; frustrated at feeling so wiped out.",
        expectations:"\"Antibiotics, and back for rugby on Saturday.\""
      },
      cues:[
        "\"Absolutely wiped.\" — marked fatigue points beyond simple tonsillitis.",
        "\"Big match Saturday.\" — contact sport and spleen safety.",
        "\"My mate said I need antibiotics.\" — expectation to manage."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises INFECTIOUS MONONUCLEOSIS (glandular fever, EBV) in a young adult from prolonged sore throat + profound fatigue + fever + (esp. posterior cervical) lymphadenopathy + tonsillar exudate \u00b1 splenomegaly/palatal petechiae' },
      { dom:'dg', text:'Confirms appropriately \u2014 monospot/heterophile antibody, FBC (atypical lymphocytes), LFTs \u2014 and knows the monospot can be FALSELY NEGATIVE in the first week (repeat / EBV serology), offering an HIV test if negative (BHIVA/BASHH/BIA 2020)' },
      { dom:'cm', text:'Explains it is VIRAL with SUPPORTIVE management (rest, fluids, analgesia/antipyretics), and resists the antibiotic request with a clear explanation rather than prescribing to satisfy it' },
      { dom:'cm', text:'AVOIDS amoxicillin/ampicillin (florid maculopapular rash in EBV) \u2014 and knows antibiotics are not indicated anyway (penicillin V if a genuine coexisting bacterial tonsillitis needed treating)' },
      { dom:'cm', text:'Gives the SPLENIC RUPTURE safety advice \u2014 avoid contact/collision sports and heavy lifting for at least 4 weeks (NICE CKS) and until reviewed (so no rugby Saturday), arranging a face-to-face spleen check \u2014 and warns of sudden severe abdominal/LUQ/shoulder-tip pain' },
      { dom:'ro',   text:'Reads the wish for antibiotics + quick return to sport, explains kindly why both must wait, and checks understanding without leaving him feeling dismissed' },
      { dom:'ro',   text:'Communicates the diagnosis and expected (sometimes prolonged) recovery realistically, supporting a frustrated young patient' },
      { dom:'cm',    text:'Safety-nets and follows up: airway compromise (severe swelling/difficulty swallowing/breathing), splenic rupture (severe abdominal pain), dehydration, prolonged/atypical course (persistent lymphadenopathy/weight loss \u2192 re-review), and review \u2014 supportive care + sport rule, not antibiotics' },
    ],
    worked:[
      { lbl:'Name it', txt:'"I don\u2019t think antibiotics are the answer here \u2014 and I\u2019ll explain why. A really sore throat with weeks of exhaustion, fevers and these neck glands in someone your age is most likely glandular fever, a viral infection. I\u2019ll confirm it with a blood test."' },
      { lbl:'Why not antibiotics', txt:'"Because it\u2019s viral, antibiotics won\u2019t touch it \u2014 they\u2019d just risk side-effects. In fact one common antibiotic, amoxicillin, gives people with glandular fever a dramatic rash, so we specifically avoid it. The treatment is rest, fluids and painkillers."' },
      { lbl:'The rugby conversation', txt:'"Now, the important one: glandular fever swells the spleen, and a knock \u2014 like in rugby \u2014 can rarely make it rupture, which is dangerous. So no heavy lifting or strenuous exercise for at least a month, and no contact sport for at least four weeks \u2014 longer if your spleen is still enlarged. I\u2019m sorry, but Saturday\u2019s match is out."' },
      { lbl:'Confirm + expectations', txt:'"I\u2019ll do a blood test \u2014 sometimes it\u2019s negative very early so we may repeat it. Honestly, the tiredness can hang around for a few weeks; pace yourself with lectures. Most people are over the worst in two to four weeks."' },
      { lbl:'Splenic safety-net', txt:'"Crucial warning: if you get sudden severe pain in the left upper side of your tummy or your left shoulder tip, that could be the spleen \u2014 call 999 / go to A&E. And if your throat swells so much you struggle to swallow or breathe, that\u2019s urgent too."' },
      { lbl:'Review', txt:'"Come back if you\u2019re not improving, the glands persist for weeks, or you lose weight \u2014 we\u2019d reassess. And we\u2019ll check when it\u2019s safe to get back to rugby rather than guess. I know it\u2019s frustrating \u2014 you\u2019ll get there."' },
    ],
    learning:'In a YOUNG ADULT, a prolonged severe SORE THROAT with profound FATIGUE, fever, tender (especially POSTERIOR cervical) LYMPHADENOPATHY, tonsillar enlargement/exudate, and sometimes splenomegaly, hepatitis or palatal petechiae, is INFECTIOUS MONONUCLEOSIS (glandular fever), usually EBV \u2014 the fatigue and posterior cervical nodes helping distinguish it from simple tonsillitis. Confirm with the MONOSPOT/heterophile antibody test and FBC (atypical lymphocytes), checking LFTs (EBV hepatitis is common), and remember the monospot can be FALSELY NEGATIVE in the first week (repeat or use EBV-specific serology, and offer an HIV test if negative in a mononucleosis-like illness, BHIVA/BASHH/BIA 2020). Explain it is VIRAL \u2014 antibiotics do NOT help and are not indicated \u2014 with SUPPORTIVE management (rest, fluids, analgesia/antipyretics, saltwater gargles), resisting the antibiotic request with a clear explanation. A classic pitfall: AVOID AMOXICILLIN/ampicillin, which causes a florid maculopapular RASH in EBV (and is not needed anyway; penicillin V would be used if a genuine coexisting bacterial tonsillitis required treatment). Critically, glandular fever causes SPLENOMEGALY and the spleen can rupture, so advise AVOIDING CONTACT/COLLISION SPORTS and heavy lifting for at least 4 weeks from the start of symptoms and until reviewed (NICE CKS; longer while the spleen is enlarged), checking the spleen face to face — hence no rugby — and warn of sudden severe left-upper-quadrant/abdominal or shoulder-tip pain (splenic rupture, an emergency). The hidden agenda is the wish for antibiotics and a fast return to sport; explain kindly why both must wait, give realistic recovery expectations (fatigue can linger), and safety-net for airway compromise (severe swelling, difficulty swallowing/breathing), splenic rupture, dehydration, and a prolonged/atypical course (persistent lymphadenopathy/weight loss prompting re-review).',
    knowledge:{
      guideline:'Glandular fever / EBV (clinical diagnosis) · NICE NG84 Sore throat (acute): antimicrobial prescribing (2018) · amoxicillin SPC 4.4 · BHIVA/BASHH/BIA Adult HIV testing (2020) · Ebell, JAMA 2016 · Sylvester, Sports Health 2019 · monospot/serology timing \u00b7 amoxicillin rash \u00b7 splenic rupture & contact-sport advice',
      points:[
        { h:'Recognise glandular fever', t:'Young adult: prolonged sore throat + profound fatigue + fever + (esp. posterior cervical) lymphadenopathy + tonsillar exudate \u00b1 splenomegaly/palatal petechiae. EBV most common.' },
        { h:'Confirm', t:'Monospot/heterophile antibody + FBC (atypical lymphocytes); LFTs (EBV hepatitis). Monospot can be falsely negative in week 1 — repeat or use EBV serology; if negative, offer an HIV test (BHIVA/BASHH/BIA 2020).' },
        { h:'Viral \u2014 supportive only', t:'Antibiotics do not treat EBV and are not indicated. Rest, fluids, analgesia/antipyretics, gargles. Recovery 2\u20134 weeks; fatigue can linger.' },
        { h:'Avoid amoxicillin', t:'Amoxicillin/ampicillin cause a florid maculopapular rash in EBV (not true allergy). Avoid; antibiotics not indicated anyway. Penicillin V if a genuine coexisting bacterial tonsillitis needs treating.' },
        { h:'Splenic / sport rule', t:'Splenomegaly risks rupture. Avoid contact/collision sports and heavy lifting for at least 4 weeks from onset and until reviewed (NICE CKS; longer while the spleen is enlarged); spleen checked face to face, not by video. Warn of sudden severe LUQ/abdominal/shoulder-tip pain.' },
        { h:'Resist antibiotic request', t:'Explain the viral nature clearly; do not prescribe antibiotics to satisfy the request; set realistic recovery expectations.' },
        { h:'Never do', t:'Never prescribe antibiotics for glandular fever; never give amoxicillin/ampicillin; never clear for contact sport early; never miss splenomegaly/airway risk; never ignore persistent lymphadenopathy/weight loss.' },
        { h:'Safety-net & follow-up', t:'Airway compromise (severe swelling, difficulty swallowing/breathing), splenic rupture (severe abdominal pain) \u2192 emergency; dehydration; prolonged/atypical course \u2192 re-review; confirm when safe to resume sport.' }
      ]
    }
  };

  /* ============ 214. VIDEO — Community-acquired pneumonia: CRB-65 and who to admit ============ */
  const c214 = {
    id:'community-pneumonia', title:'"It\u2019s just a chest infection \u2014 can I have antibiotics and carry on at home?"', type:'video', duration:12,
    meta:{ age:71, sex:'M', setting:'Video consultation \u2014 cough, fever and breathlessness in an older adult.', system:'Respiratory \u2014 community-acquired pneumonia: CRB-65, who to admit, and the safety-net', checked:'October 2026' },
    brief:'Mr Derek Halloran, 71 (ex-smoker, COPD), has 4 days of productive cough, fever, pleuritic chest pain and increasing BREATHLESSNESS, and per his wife has been confused/"not himself"; he wants oral antibiotics to carry on at home and is reluctant to go to hospital. The examinable task is to assess suspected COMMUNITY-ACQUIRED PNEUMONIA and make a proper SEVERITY/DISPOSITION decision rather than reflexively prescribing: use CRB-65 (Confusion, Respiratory rate \u226530, BP <90 systolic/\u226460 diastolic, age \u226565) plus the wider picture (sats/oxygenation, comorbidity such as COPD, observations/NEWS, ability to cope) to decide home vs hospital; recognise severe pneumonia/sepsis markers warranting ADMISSION (new CONFUSION, high RR, hypotension, low sats, age \u226565 with comorbidity); treat appropriately (antibiotics per severity/local guidance, antipyretics, fluids); and \u2014 as an older EX-SMOKER \u2014 arrange a follow-up CHEST X-RAY (~6 weeks) to confirm RESOLUTION and avoid missing an underlying LUNG CANCER (BTS 2009 and the NICE NG250 committee discussion for the ~6-week film; NICE NG12: consider an urgent CXR at 40+ with persistent or recurrent chest infection). The skill is severity assessment and the home-vs-admit decision made out loud, not a blanket antibiotic-and-carry-on. NICE NG12 lung awareness as the resolution safety-net. New confusion with infection also needs a sepsis assessment (NICE NG253), and if he still refuses admission his capacity for that decision must be assessed (Mental Capacity Act 2005).',
    script:{
      opening:"(Breathless between phrases, croaky, a bit vague; his wife Sheila sits beside him.) \"It's just a chest infection, doctor — cough, bringing up green stuff, bit of a fever and my chest hurts when I breathe in. The wife says I've been a bit muddled. Can you just call in some antibiotics so I can fight it off at home? I don't want to be sent into hospital.\"",
      facts:[
        { topic:"The illness", text:"\"Four days. Breathing's worse than normal. I'm puffed just getting to the loo.\" Green sputum, right-sided chest pain on breathing in." },
        { topic:"Confusion", text:"(Wife) \"He's not himself. He got the day wrong this morning and he keeps repeating things. That's not like him.\" If asked what day it is: \"(pause) Tuesday? No… I'm not sure. I'm at home.\"" },
        { topic:"Systemic", text:"\"No blood. I've been shivery. Not been to the loo much\" — passing little urine. Hasn't eaten much." },
        { topic:"Fluids and medicines", text:"\"Not drinking much. Just my usual inhalers\" — tiotropium and salbutamol. No steroids or antibiotics recently. \"No, nothing like that. No allergies.\"" },
        { topic:"Readings at home", text:"If asked: they have a pulse oximeter from COVID — reads 89% (his usual is 94%). Wife can count his breathing: about 30 a minute. No BP machine. Thermometer: 38.6°C this morning." },
        { topic:"Background", text:"COPD (moderate), ex-smoker (stopped 5 years ago, 45 pack-years), high blood pressure. Retired bus mechanic. Lives with Sheila in a house; she can go with him." },
        { topic:"Fear of hospital", text:"\"You go in and you don't come out the same. I want my own bed.\" His brother went into hospital last year and died there." },
        { topic:"How to play it", text:"Minimising and muddled; gets details wrong and looks to Sheila. \"It's only a bit of confusion.\" When admission is suggested: \"So you want me to go in.\" Able to repeat back the reason if explained simply. Turns to his wife: \"What do you think? … All right. If it gets me home sooner.\" If simply given antibiotics, he is pleased (the trap); Sheila looks worried." }
      ],
      ice:{
        ideas:"\"Just a chest infection — antibiotics at home will do.\"",
        concerns:"HIDDEN AGENDA — terror of hospital since his brother died there; wants his own bed. He doesn't recognise how muddled he is.",
        expectations:"\"Antibiotics called in so I can stay home.\""
      },
      cues:[
        "\"The wife says I've been a bit muddled.\" — new confusion, a red flag.",
        "\"Puffed just getting to the loo.\" — severity.",
        "\"You don't come out the same.\" — fear of admission to explore."
      ]
    },
    checkpoints:[
      { dom:'cm', text:'Treats suspected pneumonia as a SEVERITY/DISPOSITION decision (home vs hospital) rather than reflexively prescribing oral antibiotics to "carry on"' },
      { dom:'dg', text:'Uses CRB-65 (Confusion, RR \u226530, BP <90/\u226460, age \u226565) and recognises that new confusion + age \u226565 already raise concern' },
      { dom:'dg', text:'Weighs the WIDER picture \u2014 oxygen sats/oxygenation, RR/work of breathing, observations/NEWS, COMORBIDITY (COPD), hydration, social support/coping \u2014 not CRB-65 alone' },
      { dom:'dg', text:'Recognises markers of SEVERE pneumonia/sepsis warranting ADMISSION (new confusion, RR \u226530, hypotension, low sats, age \u226565 with comorbidity) and concludes this is likely an admit, not a carry-on case' },
      { dom:'cm', text:'Treats per severity/local guidance AND arranges the smoker\u2019s follow-up CHEST X-RAY (~6 weeks) to confirm resolution \u2014 recognising lung-cancer awareness for non-resolving/recurrent consolidation (BTS 2009; NICE NG12: consider urgent CXR at 40+ with persistent or recurrent chest infection)' },
      { dom:'ro',   text:'Addresses the fear of hospital and the "just a chest infection" minimisation with empathy, explaining honestly why proper assessment/admission is needed, and — because he is newly confused — checks his capacity to refuse admission (Mental Capacity Act 2005)' },
      { dom:'ro',   text:'Communicates the disposition decision OUT LOUD and checks understanding, supporting a reluctant patient without colluding' },
      { dom:'cm',    text:'Safety-nets and arranges disposition: face-to-face assessment of obs/sats and likely admission, deterioration/sepsis red flags, treatment, the resolution CXR safety-net as a smoker, and review \u2014 severity-based decision, not antibiotics-and-carry-on' },
    ],
    worked:[
      { lbl:'Reframe "just a chest infection"', txt:'"I hear you want to stay home, and I\u2019ll be straight \u2014 this might be more than a simple chest infection. The cough and fever plus being breathless and, importantly, a bit muddled, with your age and COPD, make me want to assess how unwell you actually are before deciding."' },
      { lbl:'Use CRB-65 out loud', txt:'"There\u2019s a scoring system we use: confusion, fast breathing, low blood pressure, and age over 65 each count. You\u2019ve got new confusion and you\u2019re over 65 \u2014 so I need your breathing rate, blood pressure and oxygen checked properly, which I can\u2019t fully do on video."' },
      { lbl:'Honest disposition', txt:'"Being honest: with the confusion, the breathlessness and your COPD, I think you need to be seen face-to-face today and very possibly admitted \u2014 not to be over-cautious, but because pneumonia at your age can turn serious quickly and home antibiotics might not be safe."' },
      { lbl:'Address the hospital fear', txt:'"I know hospital\u2019s the last place you want to be. But the muddle is a warning sign I can\u2019t ignore, and a few days getting the right treatment and oxygen could make all the difference. I\u2019ll make the process as smooth as I can."' },
      { lbl:'Treat + lung safety-net', txt:'"They\u2019ll start the right antibiotics for the severity. And once you\u2019re through this, because you used to smoke, I want a follow-up chest X-ray in about six weeks to be sure it\u2019s cleared completely \u2014 occasionally an infection sits on top of something we need to catch."' },
      { lbl:'Safety-net', txt:'"If before you\u2019re seen you become more breathless, drowsier, your lips go blue, or you can\u2019t keep fluids down \u2014 call 999. And if you ever cough up blood or lose weight later, tell me. Let\u2019s get you assessed properly today."' },
    ],
    learning:'Suspected COMMUNITY-ACQUIRED PNEUMONIA is a SEVERITY/DISPOSITION decision (home vs hospital), not a reflex prescription. Assess with CRB-65 \u2014 one point each for new CONFUSION, Respiratory rate \u226530/min, low Blood pressure (systolic <90 or diastolic \u226460), and age \u226565 \u2014 where higher scores indicate higher mortality risk and favour hospital assessment (NICE NG250 1.2.3: 0 usually primary care, 1 primary care with safety-netting or other community options, \u22652 consider hospital referral; in hospital CURB-65 adds Urea). CRB-65 is a guide, not the whole decision: also weigh oxygen saturations/oxygenation, respiratory rate and work of breathing, observations/NEWS, comorbidity (e.g. COPD), hydration, social support and ability to cope, and sepsis features \u2014 new confusion, hypoxia, tachypnoea, hypotension or significant comorbidity all lower the threshold to ADMIT. Recognise severe pneumonia/sepsis markers warranting admission (new confusion, RR \u226530, hypotension, low sats, age \u226565 with comorbidity, sepsis signs, inability to manage at home); an older COPD patient with new confusion and breathlessness is not a "carry on at home" case and needs face-to-face assessment of observations/sats and probable admission. Treat per severity/local guidance (antibiotics chosen by severity, antipyretics, fluids, oxygen if needed). Crucially, in an older EX-SMOKER arrange a follow-up CHEST X-RAY (~6 weeks) to confirm radiological resolution, because a non-resolving or recurrent same-site consolidation can hide an underlying LUNG CANCER (BTS 2009 and the NICE NG250 committee discussion support the ~6-week film for higher-risk people such as smokers; NICE NG12 (Suspected cancer: recognition and referral, last updated April 2026): consider an urgent CXR at 40+ with persistent or recurrent chest infection, and offer one at 40+ to an ever-smoker with an unexplained symptom such as cough, breathlessness, chest pain or weight loss) \u2014 don\u2019t let "just a chest infection" mask a tumour. The hidden agenda is minimisation and fear of hospital; assess severity properly, make the disposition decision out loud, address the hospital fear with empathy, assess his capacity to refuse admission if he declines (new confusion; Mental Capacity Act 2005), treat new confusion with infection as a sepsis warning sign (NICE NG253), arrange the resolution safety-net, and safety-net deterioration \u2014 not collude with antibiotics-and-carry-on.',
    knowledge:{
      guideline:'NICE NG250 pneumonia (2025) · NICE NG253 Suspected sepsis in people aged 16 or over (2025) · BTS community-acquired pneumonia guideline (2009) · Mental Capacity Act 2005 · CRB-65/CURB-65 · admit-vs-home disposition · NICE NG12 Suspected cancer: recognition and referral (2015, last updated April 2026) lung (follow-up CXR) · antibiotic stewardship',
      points:[
        { h:'Disposition, not reflex', t:'Suspected pneumonia needs a severity-based home-vs-hospital decision, not an automatic oral-antibiotic-and-carry-on, especially in older comorbid patients.' },
        { h:'CRB-65', t:'1 point each: new Confusion, RR \u226530, low BP (SBP <90/DBP \u226460), age \u226565. 0 usually home; 1 primary care + safety-net or community options; \u22652 consider hospital referral (NICE NG250 1.2.3). CURB-65 adds Urea in hospital.' },
        { h:'Wider picture', t:'Also weigh sats/oxygenation, RR/work of breathing, NEWS, comorbidity (COPD), hydration, social support/coping, sepsis features. These can override a low CRB-65 toward admission.' },
        { h:'Admit markers', t:'New confusion, RR \u226530, hypotension, low sats, age \u226565 with comorbidity, sepsis signs (new confusion with infection is a NICE NG253 warning sign), can’t cope at home → face-to-face assessment/admission.' },
        { h:'Treat by severity', t:'Antibiotics per severity/local guidance (NICE NG250: low severity — amoxicillin for 5 days, dose per BNF; don’t delay transfer to start tablets), antipyretics, fluids, oxygen if needed. Avoid under- and over-treatment.' },
        { h:'Smoker\u2019s CXR safety-net', t:'Older ex-/current smoker \u2192 follow-up CXR (~6 weeks) to confirm resolution; non-resolving/recurrent consolidation can hide lung cancer (BTS 2009 ~6-week film; NICE NG12: consider urgent CXR at 40+ with persistent or recurrent chest infection; offer urgent CXR at 40+ in an ever-smoker with an unexplained symptom such as cough, breathlessness or weight loss).' },
        { h:'Never do', t:'Never prescribe oral antibiotics and "carry on" without severity assessment; never ignore new confusion/hypoxia; never collude with hospital avoidance when admission is needed, and never accept or override a newly confused patient’s refusal without a capacity assessment; never omit the smoker\u2019s resolution CXR.' },
        { h:'Safety-net & follow-up', t:'Face-to-face assessment/admission; deterioration/sepsis red flags (more breathless, drowsy, cyanosis, can\u2019t keep fluids); resolution CXR; review recovery.' }
      ]
    }
  };

  /* ============ 215. VIDEO — Sore throat antibiotic request: FeverPAIN/Centor & stewardship ============ */
  const c215 = {
    id:'sore-throat-stewardship', title:'"I always get antibiotics for my throat \u2014 just give me a course so I can get back to work"', type:'video', duration:12,
    meta:{ age:29, sex:'M', setting:'Video consultation \u2014 acute sore throat, requesting antibiotics.', system:'Respiratory / Stewardship \u2014 acute sore throat: FeverPAIN/Centor, stewardship & the unhappy patient', checked:'October 2026' },
    brief:'Mr Aaron Pryce, 29, has 3 days of a sore throat, mild fever and a slight cough/coryza; he is otherwise well, eating and drinking, no breathing difficulty. He firmly EXPECTS ANTIBIOTICS ("always get them", needs to get back to work). The examinable task is the ANTIBIOTIC-STEWARDSHIP consultation: assess with a validated score (FeverPAIN or Centor), recognise that MOST sore throats are VIRAL and self-limiting, EXCLUDE red flags/serious causes (inability to swallow saliva/drooling/stridor \u2014 epiglottitis; trismus/unilateral swelling/"hot potato" voice \u2014 quinsy; immunosuppression/agranulocytosis-causing drugs; very systemically unwell), then NEGOTIATE: explain the natural course and that antibiotics offer little benefit and carry harms/resistance, offer self-care and symptomatic relief, consider a DELAYED/back-up prescription or treat only if the score/clinical picture warrants, and \u2014 the real skill \u2014 manage the EXPECTATION and potential dissatisfaction respectfully (shared understanding, not a flat refusal), with clear safety-netting.',
    script:{
      opening:"(Hoarse, impatient, laptop open beside him.) \"I've got a sore throat again — had it three days. I always end up needing antibiotics for these, so can you just write me a course? I've got a busy week and I need to get back to work, I can't be hanging around being ill.\"",
      facts:[
        { topic:"Swallowing and airway", text:"\"No, I can swallow. It's just sore.\" No drooling, no breathing difficulty, no noisy breathing." },
        { topic:"One side or both", text:"\"No, both sides the same. Voice is fine.\" Can open his mouth fully. No ear pain." },
        { topic:"Other symptoms", text:"\"Bit feverish last night. I've got a cough and a bit of a runny nose.\" Feels achy." },
        { topic:"Throat on camera", text:"If asked to show: \"Like this?\" — red, slightly swollen tonsils, no white patches. Feels small tender glands at the front of his neck." },
        { topic:"Eating and history", text:"\"Eating a bit less, drinking fine. No medicines, no allergies.\" Not immunosuppressed; not on carbimazole or other medicines. About two sore throats a year; antibiotics each time from the walk-in centre." },
        { topic:"Work", text:"Self-employed electrician. \"I've had them before and I got better. I need to be at work this week. I can't afford to be off.\"" },
        { topic:"Background", text:"Non-smoker, drinks at weekends. Lives with partner." },
        { topic:"How to play it", text:"Impatient but reasonable. Pushes back once: \"But the antibiotics worked last time.\" Then: \"So what am I meant to do?\" Accepts a back-up plan: \"That's fair, I suppose. At least I've got it if I need it.\" If flatly refused without explanation, becomes irritated: \"So I've wasted my time.\" If given an immediate course without assessment, he's happy (the trap)." }
      ],
      ice:{
        ideas:"\"I always need antibiotics for these — they got me better last time.\"",
        concerns:"Losing work days and money as a self-employed electrician.",
        expectations:"\"Just write me a course.\""
      },
      cues:[
        "\"I always end up needing antibiotics.\" — belief to explore.",
        "\"I can't afford to be off.\" — the real concern; address practically.",
        "\"Cough and a runny nose.\" — features pointing to a viral cause."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Assesses the sore throat with a VALIDATED score (FeverPAIN or Centor) rather than prescribing reflexively, and interprets it (low score → likely viral/self-limiting; FeverPAIN 2–3 → consider no antibiotic or a back-up prescription, NICE NG84)' },
      { dom:'cm', text:'Recognises that most sore throats are VIRAL and self-limiting and that antibiotics offer modest benefit with real harms (side-effects, resistance) \u2014 the basis for stewardship' },
      { dom:'dg', text:'EXCLUDES serious causes/red flags FIRST \u2014 epiglottitis (can\u2019t swallow saliva, drooling, stridor), quinsy (trismus, unilateral swelling, hot-potato voice), sepsis, immunosuppression/agranulocytosis-causing drugs \u2014 before reassuring' },
      { dom:'ro', text:'NEGOTIATES the antibiotic decision — self-care with no antibiotic for a low score (FeverPAIN 0–1/Centor 0–2), no antibiotic or a DELAYED/back-up prescription as a middle ground for FeverPAIN 2–3 (NICE NG84), or immediate antibiotics only if the score/clinical picture warrants \u2014 rather than a flat refusal or inappropriate prescription' },
      { dom:'cm', text:'Offers effective SYMPTOMATIC care (paracetamol or ibuprofen, fluids, medicated lozenges per NICE NG84, realistic timelines) and addresses the work concern honestly (antibiotics won\u2019t speed a viral throat; self-certification if needed)' },
      { dom:'ro',   text:'Manages the EXPECTATION and potential DISSATISFACTION respectfully \u2014 acknowledging his discomfort and time pressure, educating without lecturing, reaching a shared understanding rather than dismissing him' },
      { dom:'ro',   text:'Checks understanding and agreement on the plan, ensuring he leaves understanding and safe rather than fobbed off' },
      { dom:'cm',    text:'Safety-nets clearly: when to use a delayed script, and red flags warranting urgent review (difficulty swallowing saliva/breathing, drooling, severe unilateral pain/swelling, not improving over a week, systemic deterioration) \u2014 appropriate, negotiated care' },
    ],
    worked:[
      { lbl:'Acknowledge + assess', txt:'"I hear you \u2014 a sore throat\u2019s miserable and you\u2019ve got a busy week. Let me check it properly first and use a scoring system, so whatever we decide is based on how likely a bacterial infection actually is, not guesswork."' },
      { lbl:'Exclude the serious stuff', txt:'"A few safety checks: can you swallow your own saliva okay, any drooling or trouble breathing? Is the pain much worse on one side, or trouble opening your mouth? \u2026 No \u2014 good, that rules out the dangerous causes."' },
      { lbl:'Explain honestly', txt:'"Your score is on the low side — 2 — and you’ve got a cough and cold symptoms, which points to a virus. Honestly, antibiotics wouldn\u2019t get you back to work any faster for this, and they carry downsides \u2014 side-effects and resistance. I\u2019m not just trying to withhold them."' },
      { lbl:'Negotiate a plan', txt:'"Here\u2019s what I\u2019d suggest: focus on settling the symptoms now, and I can give you a \u2018just-in-case\u2019 prescription to use ONLY if you’re not starting to improve in 3 to 5 days, or you get significantly worse. That way you\u2019re covered without taking them unnecessarily. Does that feel fair?"' },
      { lbl:'Symptom + work advice', txt:'"For the symptoms: paracetamol or ibuprofen, taken regularly as the pack says, work well, plus fluids and a medicated lozenge. If you need time off, you can self-certify for the first week \u2014 you don\u2019t need antibiotics as a sick note."' },
      { lbl:'Safety-net', txt:'"Come back urgently if you can\u2019t swallow your saliva, start drooling or struggling to breathe, the pain becomes severe on one side, or you\u2019re not improving after about a week. Otherwise this should settle in a few days."' },
    ],
    learning:'The acute sore throat antibiotic request is a STEWARDSHIP and negotiation consultation. Assess with a validated score \u2014 CENTOR (tonsillar exudate, tender anterior cervical nodes, fever, absence of cough) or FEVERPAIN (Fever, Purulence, Attend rapidly \u22643 days, severely Inflamed tonsils, No cough/coryza) \u2014 where higher scores raise the probability of streptococcal infection and antibiotic benefit, and low scores suggest a viral, self-limiting illness (NICE NG84: FeverPAIN 0–1 or Centor 0–2 — no antibiotic; FeverPAIN 2–3 — consider no antibiotic or a back-up prescription; FeverPAIN 4–5 or Centor 3–4 — consider an immediate or back-up antibiotic). Recognise that MOST sore throats are viral and resolve within about a week, that antibiotics offer only modest benefit even in streptococcal cases, and that they carry harms (side-effects, resistance) \u2014 the basis for appropriate, not withheld, care. Before reassuring, EXCLUDE the serious causes: epiglottitis (inability to swallow saliva, drooling, stridor, respiratory difficulty \u2014 emergency), peritonsillar abscess/QUINSY (trismus, unilateral swelling, uvular deviation, "hot potato" voice \u2014 ENT), marked systemic illness/sepsis, and immunosuppression or a drug causing agranulocytosis (e.g. carbimazole) where a sore throat may signal neutropenia. Then NEGOTIATE rather than flatly refuse: self-care for a low score, a DELAYED/back-up prescription (use only if not starting to improve within 3 to 5 days, or significantly worse) as a middle ground for FeverPAIN 2–3, or immediate antibiotics only if the score/picture warrants. Offer effective symptomatic care (paracetamol or ibuprofen, fluids, medicated lozenges — NICE NG84) and address the work concern honestly \u2014 antibiotics will not speed a viral throat, and self-certification covers time off. The hidden agenda is the belief that antibiotics are needed and the pressure to return to work; validate, educate without lecturing, reach a shared plan the patient accepts, and handle potential dissatisfaction respectfully, leaving him understanding and safe with clear safety-netting.',
    knowledge:{
      guideline:'NICE NG84 Sore throat (acute): antimicrobial prescribing (2018) · NICE NG15 Antimicrobial stewardship (2015) · FeverPAIN/Centor \u00b7 antibiotic stewardship & delayed prescribing \u00b7 epiglottitis/quinsy red flags',
      points:[
        { h:'Score it', t:'Use FeverPAIN or Centor. Higher score \u2192 higher chance of strep/antibiotic benefit; low score → likely viral, self-limiting (NICE NG84: FeverPAIN 0–1/Centor 0–2 no antibiotic; FeverPAIN 2–3 no or back-up antibiotic; FeverPAIN 4–5/Centor 3–4 immediate or back-up). Don’t prescribe reflexively.' },
        { h:'Mostly viral', t:'Most sore throats are viral and resolve in ~1 week; antibiotics give modest benefit even in strep and carry harms (side-effects, resistance). Appropriate care, not withheld care.' },
        { h:'Exclude serious causes', t:'Epiglottitis (can\u2019t swallow saliva, drooling, stridor), quinsy (trismus, unilateral swelling, hot-potato voice), sepsis, immunosuppression/agranulocytosis-causing drugs (e.g. carbimazole). Screen before reassuring.' },
        { h:'Negotiate', t:'Self-care for low score; delayed/back-up prescription (use only if not starting to improve in 3 to 5 days, or significantly worse) as a middle ground for FeverPAIN 2–3; immediate antibiotics only if score/picture warrants. Not a flat refusal.' },
        { h:'Symptomatic care & work', t:'Paracetamol or ibuprofen (dose per BNF), fluids, medicated lozenges (NICE NG84; no evidence for non-medicated lozenges or mouthwashes); antibiotics won\u2019t speed a viral throat; self-certification for time off rather than an antibiotic "sick note".' },
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
        pmh: ['Expanding circular/target rash on calf with central clearing ~10 days', 'Hiking in Scottish Highlands about 10 days ago; no recalled tick; mildly warm, not very itchy', 'Thinks it is ringworm'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Spreading circular rash since a walking holiday \u2014 is it ringworm?"',
        reason: 'Video \u2014 expanding rash after rural exposure.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise EM', d:'Expanding target rash + Highland hiking = early Lyme erythema migrans, not ringworm.' },
        { t:'2\u20134',  h:'Differentiate', d:'Ringworm (scaly/itchy edge), cellulitis (hot/tender/acute), tick-bite reaction (small/early) \u2014 no antifungal.' },
        { t:'4\u20137',  h:'Treat clinically', d:'EM is clinical; don\u2019t wait for serology (often early-negative); doxycycline 100 mg twice a day for 21 days now (NICE NG95; alt in pregnancy/children).' },
        { t:'7\u20139',  h:'Tick + prevention', d:'Remove ticks with fine tweezers (no squeeze/burn); cover skin, repellent, body checks after walks.' },
        { t:'9\u201312', h:'Safety-net later features', d:'Facial palsy/neuroborreliosis, carditis/heart block, arthritis \u2192 prompt review; post-treatment aches settle.' }
      ],
      wordPics: {
        fail: 'Mislabels it ringworm and gives antifungal cream, or delays treatment to wait for serology \u2014 missing/under-treating early Lyme.',
        pass: 'Recognises erythema migrans, treats with doxycycline without waiting for serology, and gives prevention/safety-net advice.',
        exc:  'Confidently recognises erythema migrans, treats clinically with the NICE NG95 regimen (doxycycline 100 mg twice a day for 21 days, no serology wait), differentiates from ringworm/cellulitis, gives tick-removal/prevention advice, safety-nets disseminated features, and reassures proportionately on prognosis.'
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
        pmh: ['>1 week severe sore throat + profound fatigue + fevers; tender posterior+anterior cervical nodes; tonsillar exudate', 'Student; wants to play rugby Saturday', '?splenomegaly (cannot be examined by video: face-to-face check with bloods)'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Stinking sore throat and wiped out for weeks \u2014 just give me antibiotics so I can play rugby?"',
        reason: 'Video \u2014 prolonged sore throat and fatigue in a student.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise EBV', d:'Prolonged sore throat + fatigue + posterior cervical nodes + exudate in a 19-year-old = glandular fever.' },
        { t:'2\u20134',  h:'Confirm', d:'Monospot + FBC (atypical lymphocytes) + LFTs; monospot can be early-negative (repeat/serology; offer HIV test if negative).' },
        { t:'4\u20136',  h:'Viral \u2014 no antibiotics', d:'Supportive care; resist antibiotic request; AVOID amoxicillin (florid EBV rash).' },
        { t:'6\u20139',  h:'Spleen/sport rule', d:'Splenic risk (spleen checked face to face) → no heavy lifting ≥1 month and until reviewed (Bartlett, Injury 2016), no contact sport for at least 4 weeks (NICE CKS) (no rugby Saturday); LUQ/shoulder-tip pain = emergency.' },
        { t:'9\u201312', h:'Expectations + safety-net', d:'Fatigue lingers weeks; airway compromise/splenic rupture/dehydration; persistent nodes \u2192 re-review.' }
      ],
      wordPics: {
        fail: 'Prescribes antibiotics (esp. amoxicillin) for "tonsillitis", clears him for rugby, and misses the splenic-rupture advice.',
        pass: 'Recognises glandular fever, avoids antibiotics/amoxicillin, and gives the contact-sport/splenic advice.',
        exc:  'Recognises EBV and confirms appropriately, explains the viral nature and resists antibiotics, specifically avoids amoxicillin, gives the splenic-rupture/no-contact-sport advice with realistic recovery expectations, and safety-nets airway/spleen.'
      },
      avoid: [
        { dont:'"I\u2019ll give you amoxicillin for the tonsillitis."', instead:'"This is glandular fever, which is viral \u2014 antibiotics won\u2019t help, and amoxicillin specifically causes a dramatic rash in it."', why:'Amoxicillin in EBV causes a florid rash and antibiotics are not indicated.' },
        { dont:'"Rest up and you should be fine for the match Saturday."', instead:'"No heavy lifting for at least a month and no contact sport for at least four weeks \u2014 the spleen can rupture; Saturday\u2019s out."', why:'Clearing contact sport early risks splenic rupture.' },
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
        { t:'5\u20137',  h:'Wider picture + admit', d:'Sats, comorbidity (COPD), coping, sepsis signs (new confusion, NICE NG253) → likely face-to-face assessment/admission; if he refuses, assess capacity.' },
        { t:'7\u20139',  h:'Treat + lung safety-net', d:'Antibiotics per severity; ex-smoker → follow-up CXR ~6 weeks (BTS 2009; non-resolving can hide cancer, NICE NG12).' },
        { t:'9\u201312', h:'Address fear + safety-net', d:'Empathy re hospital; deterioration/sepsis red flags \u2192 999; haemoptysis/weight loss later \u2192 tell me.' }
      ],
      wordPics: {
        fail: 'Phones in oral antibiotics for "a chest infection" and lets him carry on at home despite confusion/age/COPD; no CXR safety-net.',
        pass: 'Assesses severity with CRB-65, recognises admission criteria, and arranges assessment + smoker\u2019s follow-up CXR.',
        exc:  'Reframes the minimisation, uses CRB-65 plus the wider picture out loud, recognises this older confused COPD patient needs face-to-face assessment/admission, treats by severity, checks his capacity if he refuses, arranges the smoker’s resolution CXR (BTS 2009; NICE NG12), and addresses the hospital fear empathetically.'
      },
      avoid: [
        { dont:'"I\u2019ll call in some antibiotics \u2014 fight it off at home."', instead:'"With new confusion, breathlessness, your age and COPD, you need assessing in person today and very likely admission."', why:'Reflexively prescribing and sending home misses severe pneumonia/sepsis in a high-risk patient.' },
        { dont:'(No severity tool) deciding by gut.', instead:'"Let\u2019s use CRB-65 \u2014 confusion, breathing rate, blood pressure, age \u2014 and check your oxygen to decide safely."', why:'Skipping a structured severity assessment risks an unsafe home-vs-admit decision.' },
        { dont:'(No resolution CXR) discharging the smoker without follow-up imaging.', instead:'"Once better, because you smoked, a follow-up chest X-ray in ~6 weeks confirms it\u2019s cleared and nothing\u2019s hidden underneath."', why:'A non-resolving pneumonia in a smoker can mask lung cancer (BTS 2009; NICE NG12: consider urgent CXR at 40+ for persistent or recurrent chest infection).' }
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
        { t:'0\u20132',  h:'Acknowledge + score', d:'Validate; assess with FeverPAIN/Centor \u2014 cough/coryza suggests lower score/viral (FeverPAIN 2–3: no or back-up antibiotic, NICE NG84).' },
        { t:'2\u20134',  h:'Exclude red flags', d:'Can\u2019t swallow saliva/drooling/stridor (epiglottitis), trismus/unilateral/hot-potato voice (quinsy), agranulocytosis drugs.' },
        { t:'4\u20137',  h:'Explain + negotiate', d:'Mostly viral/self-limiting; antibiotics modest benefit + harms; self-care \u00b1 delayed script.' },
        { t:'7\u20139',  h:'Symptom + work advice', d:'Paracetamol or ibuprofen, fluids, medicated lozenges (NICE NG84); antibiotics won\u2019t speed a viral throat; self-certify time off.' },
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
