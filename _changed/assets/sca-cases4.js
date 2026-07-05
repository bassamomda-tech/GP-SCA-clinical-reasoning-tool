/* ============================================================
   Reasoning GP — Case Library batch 2: "The abnormal blood result"
   Three ORIGINAL cases. Hidden agenda + full ICE in every case,
   planted via cues, marked via RTO checkpoints. NG12 thresholds
   stated where they apply. Pushes into SCA_CASES + SCA_EXTRAS.
   Load AFTER sca-cases.js / 2 / 3 and sca-extras.js.
   ============================================================ */

(function(){

  /* ============ 16. VIDEO — Microcytic anaemia at 68 ============ */
  const c16 = {
    id:'anaemia-ida', title:'Iron isn\u2019t a diagnosis', type:'video', duration:12,
    meta:{ age:68, sex:'F', setting:'Video consultation — recalled to discuss blood results.', system:'Haematology / Lower GI' },
    brief:'Mrs Sheila Drummond, 68, was recalled after bloods taken for tiredness: Hb 96 g/L, MCV 72 fl, ferritin 9 \u00b5g/L. PMH: hypertension. Meds: amlodipine. She is the sole carer for her husband Brian, who has Parkinson\u2019s (in her record\u2019s carer flag). She has already decided the answer: "I just need iron tablets — I barely eat red meat these days."',
    script:{
      opening:'"Hello doctor — I know what you\u2019re going to say, the nurse hinted it\u2019s low iron. That\u2019ll be my diet, I hardly touch red meat now. If you pop some iron tablets on a prescription I\u2019ll let you get on — I\u2019ve left Brian watching the snooker and he frets if I\u2019m long."',
      facts:[
        { topic:'Tiredness',        text:'Six months of creeping exhaustion — stairs, shopping bags, "heavy legs". She\u2019s blamed it on caring for Brian: up twice a night turning him, no respite.' },
        { topic:'The stomach',      text:'Only if asked: "my stomach\u2019s been off for a while" — vague upper discomfort, eating slightly less. Belt unchanged, "maybe a few pounds down".' },
        { topic:'The stools',       text:'Only if asked directly and kindly: stools darker than they used to be, on and off, for two or three months. She told herself it was the multivitamin with iron in it she bought "to get ahead of this".' },
        { topic:'Diet story',       text:'The vegetarian-ish framing collapses under one question: she still eats chicken, fish, eggs most days. The diet explanation is something to hold on to, not a fact.' },
        { topic:'Brian',            text:'Husband, Parkinson\u2019s 8 years, falls if left. Daughter in Australia. No carer package — "we manage". Her real terror: anything that takes her into hospital takes her away from Brian.' },
        { topic:'If trust is built', text:'"As long as it\u2019s nothing that puts me IN anywhere, doctor. Brian can\u2019t be left. Whatever this is, it has to be the kind of thing you fix from home."' },
      ],
      ice:{
        ideas:'Low iron from not eating red meat; tablets will fix it.',
        concerns:'HIDDEN AGENDA — she has seen the dark stools for months and is frightened of what they mean, but more frightened of hospital: she is Brian\u2019s only carer, and any admission, test or diagnosis that takes her away feels impossible. So she has pre-built the diet story.',
        expectations:'A prescription for iron tablets and to be allowed to carry on. Tests, scopes and hospitals are to be avoided at almost any cost.'
      },
      cues:['"I\u2019ve left Brian watching the snooker" in the first breath — the whole consultation\u2019s constraint, announced as small talk.','"My stomach\u2019s been off" dropped mid-sentence while changing the subject — the door to the real history.','"As long as it\u2019s nothing that puts me in anywhere" — the fear is not cancer; it\u2019s leaving Brian.']
    },
    checkpoints:[
      { dom:'tasks', text:'Reads the picture out loud: Hb 96 + MCV 72 + ferritin 9 = iron-deficiency anaemia — and states that in a 68-year-old this is a FIND-THE-BLEED problem, not a diet problem' },
      { dom:'tasks', text:'Takes the GI history her framing was hiding: dyspepsia, darker stools, weight, NSAID/aspirin use — and dismantles the diet story gently with her own facts (chicken, fish, eggs)' },
      { dom:'tasks', text:'Orders the right work-up: FIT test (NICE NG12/DG56 — FIT \u226510 \u00b5g Hb/g triggers 2WW lower-GI referral), coeliac serology, and flags that upper symptoms + IDA usually means OGD as well' },
      { dom:'tasks', text:'Starts iron correctly as TREATMENT alongside — not instead of — investigation: one tablet daily, vitamin C, dark stools warned, recheck in 2\u20134 weeks' },
      { dom:'rto',   text:'Hears the Brian constraint in minute one and addresses it as part of the plan, not an obstacle to it — carer\u2019s assessment, respite options, the daughter loop' },
      { dom:'rto',   text:'Names the pre-built story for what it is, kindly: "the diet explanation was doing a job for you — let\u2019s deal with what it was protecting you from"' },
      { dom:'rto',   text:'Reframes investigation as how she STAYS Brian\u2019s carer: a colonoscopy is a day; an undiscovered bleed is the thing that actually takes her away' },
      { dom:'gs',    text:'Safety-nets: black tarry stools, vomiting blood, faintness or chest pain at this Hb → same-day/999; books the FIT drop-off, bloods recheck and a named follow-up call' },
    ],
    worked:[
      { lbl:'The result as a story',  txt:'"Your blood says three things at once: you\u2019re anaemic, the red cells are small, and the iron stores are empty. At 68 that\u2019s a pattern we never put down to dinner plates — it almost always means iron is being LOST somewhere, usually quietly, from the gut."' },
      { lbl:'Retiring the diet story',txt:'"You\u2019ve told me chicken, fish and eggs most days — that diet doesn\u2019t empty an iron store. I think the diet idea has been doing a job for you: it\u2019s the explanation that didn\u2019t need a hospital. Can we talk about the one that might?"' },
      { lbl:'The stools, gently',     txt:'"You mentioned your stomach\u2019s been off. I want to ask the question nobody likes: have the stools changed — darker, like tar, even on and off?"' },
      { lbl:'Brian, head on',         txt:'"You\u2019ve mentioned Brian three times — so let\u2019s plan around him properly instead of pretending he isn\u2019t the issue. A carer\u2019s assessment and sitting service exist for exactly this. The tests are day visits, not admissions."' },
      { lbl:'The reframe',            txt:'"Here\u2019s the truth as I see it: the thing most likely to take you away from Brian isn\u2019t a camera test that takes a morning — it\u2019s a bleed nobody found until it collapsed you. Finding it early is how you stay his carer."' },
      { lbl:'Safety-net',             txt:'"Three things tonight that change everything: black tarry stools, vomiting anything like blood, or feeling faint or chest-tight — that\u2019s 999, not a wait. Otherwise: FIT kit back this week, bloods again in a fortnight, and I ring you with every result — you\u2019ll never be chasing me."' },
    ],
    learning:'Iron-deficiency anaemia in anyone over 60 is a gastrointestinal blood loss problem until proven otherwise — NICE NG12 offers FIT, and FIT \u226510 \u00b5g Hb/g mandates 2WW lower-GI referral; coexisting upper symptoms usually add an OGD, plus coeliac serology for everyone. Prescribing iron without investigating the cause is the classic fail. The hidden agenda is the consultation: she is a sole carer whose real terror is leaving her husband — investigation only happens if the candidate plans around Brian out loud.',
    knowledge:{
      guideline:'NICE NG12 (May 2025) + DG56 FIT · BSG iron-deficiency anaemia guideline',
      points:[
        { h:'Diagnose the pattern', t:'Hb 96 + MCV 72 + ferritin 9 = unequivocal iron-deficiency anaemia. Over 60, IDA = occult GI blood loss until excluded — diet alone almost never empties ferritin to single figures in someone eating chicken, fish and eggs.' },
        { h:'Red flags & same-day action', t:'Melaena, haematemesis, syncope, chest pain or breathlessness at rest with Hb <100 → same-day admission. Her "darker stools for 2\u20133 months" is the buried red flag the diet story was built to cover — it must be asked for directly.' },
        { h:'Investigate', t:'FIT (NICE NG12/DG56): \u226510 \u00b5g Hb/g → 2WW lower-GI referral. Coeliac serology (TTG-IgA) for all IDA. Dyspepsia + weight change + IDA = discuss upper-GI scope (OGD) — many centres do bidirectional endoscopy for IDA at this age. Review NSAID/aspirin use.' },
        { h:'Refer — the thresholds out loud', t:'FIT \u226510 → urgent suspected-cancer (2WW) colorectal pathway, NICE NG12, named as such. Do not let a negative FIT close the case if symptoms persist — ongoing unexplained IDA still warrants referral discussion.' },
        { h:'Manage alongside', t:'Ferrous sulfate/fumarate once daily (alternate-day dosing if intolerant), with vitamin C; warn about black stools (and that this must not mask NEW melaena); recheck FBC at 2\u20134 weeks expecting Hb rise ~10 g/L; continue 3 months past normalisation to refill stores.' },
        { h:'Safety-net & follow-up', t:'999/same-day triggers said in plain words (tarry stools, blood, faintness, chest tightness); FIT kit returned this week with a chase date; named GP follow-up call for every result; carer\u2019s assessment referral documented so the plan survives her cancelling.' },
        { h:'Marking edge', t:'Brian is mentioned in the first breath and every refusal routes through him. The Clear Pass treats the carer constraint as a clinical problem — sitting service, carer\u2019s assessment, day-visit framing — because the colonoscopy only happens if Brian is looked after on paper first.' }
      ]
    }
  };

  /* ============ 17. TELEPHONE — Back pain with abnormal bloods ============ */
  const c17 = {
    id:'back-pain-myeloma', title:'Back pain that isn\u2019t mechanical', type:'telephone', duration:12,
    meta:{ age:72, sex:'M', setting:'Telephone call-back — locum bloods flagged for review.', system:'Haematology / MSK' },
    brief:'Mr Gordon Pryce, 72, retired postman. Three months of constant mid-low back pain, worse at night, not eased by rest. A locum arranged bloods last week: Hb 108, ESR 88, calcium 2.68 (adjusted), creatinine 128 (eGFR 48 — was 72 a year ago). He has been taking ibuprofen "round the clock" from the supermarket. You are ringing with results. His wife Eileen died of metastatic cancer three years ago — "it started in her back" (in the record).',
    script:{
      opening:'"Evening doctor. Right — before you start, I\u2019d rather have it straight, whatever it is. I\u2019ve never been one for flannel. The locum said the tests would \u2018tell us more\u2019. So — what do they tell us?"',
      facts:[
        { topic:'The pain',          text:'Three months, constant, mid-to-low back, WORSE at night — he\u2019s taken to sleeping in the armchair. Not related to movement the way his old lumbago was. No leg weakness, no numbness, waterworks "slower but fine", bowels normal.' },
        { topic:'Self-medication',   text:'Ibuprofen 400 mg three or four times a day for three months, supermarket boxes, "doesn\u2019t really touch it now". Plus paracetamol. Knows he "shouldn\u2019t really".' },
        { topic:'Systemic',          text:'If asked: more tired than he\u2019d admit, "a stone of weight I didn\u2019t mean to lose" over the year, thirstier lately, a chest infection that took six weeks to clear in winter.' },
        { topic:'Eileen',            text:'Only if his armour is gently challenged: his wife\u2019s cancer "started in her back" — by the time they found it, it was everywhere. He has already decided this is the same thing.' },
        { topic:'The garage',        text:'Dropped casually: "I\u2019ve had a good sort-out lately — garage, paperwork, all the files Eileen used to keep. Got things in order." He has been quietly preparing to die rather than coming in.' },
        { topic:'What he wants',     text:'The truth, undecorated. He will trust a doctor who says "I don\u2019t know yet, but here\u2019s exactly how we find out, fast" — and distrust anything that sounds like soothing.' },
      ],
      ice:{
        ideas:'It\u2019s what Eileen had. He\u2019s privately certain.',
        concerns:'HIDDEN AGENDA — he has spent three months putting his affairs in order instead of seeking help, because he watched late diagnosis kill his wife and assumes the script is already written. The fear isn\u2019t dying; it\u2019s the drawn-out middle Eileen had.',
        expectations:'Straight answers, no flannel, and to be told whether to bother fighting. Will accept urgency if it\u2019s explained as honesty rather than alarm.'
      },
      cues:['"I\u2019d rather have it straight" — an instruction about HOW to consult with him; ignore it and lose him.','"Got things in order" — the garage and the paperwork are a man preparing for a funeral; hear it.','A long exhale after the bloods are read out, then: "Eileen\u2019s started in her back, you know."']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the pattern out loud: age >60 + persistent unexplained back pain + anaemia + ESR 88 + raised calcium + new renal impairment = myeloma until excluded (NICE NG12)' },
      { dom:'tasks', text:'Acts at NG12 speed: very urgent serum protein electrophoresis + serum free light chains (or urine Bence-Jones) within 48 hours, plus repeat bone profile, renal monitoring' },
      { dom:'tasks', text:'Screens the emergencies tonight: cord compression (leg weakness, saddle numbness, bladder/bowel change), hypercalcaemia symptoms (confusion, vomiting, drowsiness), sepsis — and names 999 triggers' },
      { dom:'tasks', text:'Stops the ibuprofen TODAY with the reason (NSAIDs + failing kidneys + possible myeloma kidney = active harm) and replaces analgesia properly (paracetamol regular, consider short opioid step, review)' },
      { dom:'rto',   text:'Obeys his consulting instruction: straight, structured, no soothing — "here is what the bloods show, here is what I\u2019m worried about, here is exactly what happens next"' },
      { dom:'rto',   text:'Hears the garage cue and names it: he has been preparing to die instead of being diagnosed — and answers the REAL fear (Eileen\u2019s drawn-out middle) with the honest difference: myeloma is typically treatable, often for years, and found early behaves nothing like what he watched' },
      { dom:'rto',   text:'Checks who is around him now Eileen is gone — the man sorting the garage alone is also the man who\u2019ll sit in haematology alone' },
      { dom:'gs',    text:'Safety-nets concretely: legs/bladder/saddle symptoms or confusion/vomiting → 999 tonight; bloods within 48 h with a named chase plan; GP follow-up call booked for the results day' },
    ],
    worked:[
      { lbl:'Straight, as ordered',   txt:'"You asked for it straight, so: the tests show three things that don\u2019t belong together by accident — mild anaemia, a very high inflammation marker, and kidneys working harder than a year ago. With three months of night-time back pain, there\u2019s a blood condition called myeloma I have to rule out properly, and fast. That\u2019s the headline."' },
      { lbl:'The 48-hour promise',    txt:'"Fast means this: one more blood test and a urine test that look for the actual fingerprint of it — done within forty-eight hours, not weeks. If the fingerprint\u2019s there, you\u2019re in front of a blood specialist on the urgent pathway. If it isn\u2019t, we\u2019ve lost nothing but two days."' },
      { lbl:'The garage, named',      txt:'"Gordon — the garage, the paperwork, \u2018getting things in order\u2019. I think you decided three months ago how this ends, and you\u2019ve been preparing for it instead of ringing us. Am I close?"' },
      { lbl:'The Eileen difference',  txt:'"What you watched with Eileen was a cancer found at the end of its story. If this IS myeloma, we\u2019d be finding it at the beginning of one — and it\u2019s a condition people are treated for and live with, often for many years. I won\u2019t promise you outcomes. I\u2019ll promise you it is not her script."' },
      { lbl:'The ibuprofen',          txt:'"The supermarket ibuprofen stops tonight — with your kidneys under strain it\u2019s doing real damage, and if this is what I\u2019m checking for, it\u2019s the worst tablet in the house. I\u2019m giving you proper pain relief instead, today, not telling you to grin through it."' },
      { lbl:'Safety-net',             txt:'"Tonight\u2019s rules, straight: weakness in the legs, numbness around the saddle area, trouble with the waterworks or bowels, confusion or vomiting — that\u2019s 999, no debating it. The bloods happen within two days, and it\u2019s ME who rings YOU with them — you\u2019re not chasing anyone."' },
    ],
    learning:'NICE NG12: age 60+ with persistent unexplained back pain plus anaemia, raised ESR/plasma viscosity, hypercalcaemia or renal impairment = suspected myeloma — very urgent protein electrophoresis and serum free light chains/Bence-Jones within 48 hours, then 2WW haematology if positive. Screen cord compression and hypercalcaemia the same call, and stop nephrotoxic NSAIDs immediately. The hidden agenda — a man who watched late diagnosis kill his wife and has been "getting things in order" instead of attending — is answered with honest asymmetry, not reassurance.',
    knowledge:{
      guideline:'NICE NG12 (May 2025) — myeloma · CKS back pain red flags',
      points:[
        { h:'Diagnose the pattern', t:'Mechanical back pain eases with rest and spares the night. Three months of constant night-dominant pain at 72 with Hb 108, ESR 88, adjusted Ca 2.68 and new eGFR decline is myeloma\u2019s textbook quartet (CRAB: calcium, renal, anaemia, bone) — say the suspicion plainly; he asked for straight.' },
        { h:'Red flags & same-day action', t:'Tonight\u2019s emergencies: metastatic cord compression (leg weakness, saddle anaesthesia, sphincter change → 999/same-day MRI pathway), symptomatic hypercalcaemia (confusion, vomiting, drowsiness, dehydration → same-day admission), neutropenic-pattern sepsis after his 6-week chest infection.' },
        { h:'Investigate — the 48-hour rule', t:'NICE NG12: very urgent serum protein electrophoresis AND serum free light chains (or urine Bence-Jones protein) within 48 hours; repeat bone profile and U&E; FBC film. X-rays can wait for haematology — the bloods cannot.' },
        { h:'Refer — 2WW haematology, named', t:'Paraprotein or abnormal light-chain ratio → 2-week-wait haematology referral under NICE NG12, told to him as the plan, with the sequence (clinic, marrow test, imaging) sketched in one calm sentence each.' },
        { h:'Manage tonight', t:'Stop ibuprofen immediately (NSAID + renal impairment ± cast nephropathy = active harm); regular paracetamol, consider short course of weak opioid with laxative cover at his age; hydration advice for the calcium; document the analgesia review so it doesn\u2019t auto-repeat.' },
        { h:'Safety-net & follow-up', t:'999 triggers in his own plain register (legs, saddle, waterworks, confusion); bloods booked within 48 h with a chase rule; the GP rings HIM with results on a named day; loneliness flagged — who comes with him to haematology?' },
        { h:'Marking edge', t:'"Got things in order" is the consultation\u2019s buried headline: he has been preparing to die for three months. The Clear Pass names it without flinching, answers the Eileen script with the honest difference, and converts a man who\u2019d resigned into a man with an appointment in 48 hours.' }
      ]
    }
  };

  /* ============ 18. VIDEO — Hypercalcaemia with a cancer history ============ */
  const c18 = {
    id:'hypercalcaemia-ca', title:'The calcium and the wedding', type:'video', duration:12,
    meta:{ age:58, sex:'F', setting:'Video consultation — urgent recall after blood results.', system:'Oncology / Endocrine' },
    brief:'Mrs Annette Boateng, 58, treated for breast cancer four years ago (WLE, radiotherapy, on anastrozole; last oncology review clear, 14 months ago). Saw the nurse with tiredness, constipation and thirst; bloods: adjusted calcium 2.82 mmol/L (rest unremarkable). Recalled urgently to discuss. Her daughter\u2019s wedding is in TEN DAYS (not in the notes). She has suspected recurrence for weeks and told nobody.',
    script:{
      opening:'"Doctor. Before you say anything — I\u2019ve had blood tests before, and nobody rings you back the next day for something ordinary. So it\u2019s the calcium, or the cancer, or both. I\u2019d appreciate you not wrapping it in ribbon. But I\u2019ll tell you now: whatever this is, it waits until the twenty-first. My daughter gets married in ten days."',
      facts:[
        { topic:'Symptoms',          text:'Six weeks of bone-deep tiredness, constipation ("never in my life until now"), constant thirst, up twice a night to pass urine, low mood she\u2019s been hiding behind wedding admin. A new dull ache in the right hip if asked about pain.' },
        { topic:'Cancer history',    text:'Breast cancer 4 years ago — lumpectomy, radiotherapy, anastrozole since. Attends mammograms. Stopped checking the scar "because checking felt like inviting it back".' },
        { topic:'What she\u2019s noticed', text:'She has privately connected the dots weeks ago — thirst plus bone ache plus her oncology leaflet\u2019s warning signs. Googled "hypercalcaemia breast cancer" at 2am and closed the laptop.' },
        { topic:'The wedding',       text:'Daughter Abena marries in ten days. Annette is hosting, speech-giving, dress fitted. Her plan: be magnificent for one day, collapse after. "I will not be the diagnosis at that wedding."' },
        { topic:'Who knows',         text:'Nobody. Husband Kofi thinks she\u2019s "run down from wedding stress". She has been protecting everyone — which is also why nothing has been checked for six weeks.' },
        { topic:'If trust is built', text:'"Tell me honestly: if it\u2019s back, do ten days matter? Because I\u2019ll trade ten days of treatment for that one day standing up straight in church. That\u2019s the deal I\u2019m offering."' },
      ],
      ice:{
        ideas:'The calcium means the cancer is back in her bones. She\u2019s privately certain.',
        concerns:'HIDDEN AGENDA — the wedding in ten days. Her entire negotiating position is built to defer everything past the 21st; she\u2019d rather risk her life than "be the diagnosis at the wedding". Beneath that: guilt that hiding symptoms for six weeks may have cost her.',
        expectations:'Unvarnished honesty, and a doctor who will work WITH the wedding rather than steamroll it — or she\u2019ll simply not attend anything booked before it.'
      },
      cues:['"Not wrapping it in ribbon" — like Gordon\u2019s straight-talk, an instruction on how she needs to be consulted.','"It waits until the twenty-first" stated before any clinical fact — the agenda IS the opening line.','"I\u2019ll trade ten days of treatment for that one day" — the real question: what do ten days actually cost?']
    },
    checkpoints:[
      { dom:'tasks', text:'Grades the number honestly: adjusted calcium 2.82 with symptoms = moderate, symptomatic hypercalcaemia — needs urgent repeat bone profile + PTH this week, and in HER context, urgent contact with the breast/oncology team' },
      { dom:'tasks', text:'Holds both differentials out loud: recurrence with bony disease is the concern, but primary hyperparathyroidism is common, benign and entirely possible — PTH is the fork in the road, so certainty now is false certainty' },
      { dom:'tasks', text:'Acts today without admission theatre: bloods within 48 h (calcium, PTH, U&E, FBC), hydration advice (2\u20133 L), STOP anything worsening it (review any vitamin D/calcium supplements, thiazides), oncology team contacted by the GP same day' },
      { dom:'tasks', text:'Knows the escalation line and says it: calcium \u22653.0, or confusion, vomiting, drowsiness, dehydration → same-day admission for IV fluids — no negotiation, wedding or not' },
      { dom:'rto',   text:'Honours the no-ribbon instruction: gives the number, the two roads it can mean, and the plan, in that order, without soothing' },
      { dom:'rto',   text:'Negotiates WITH the wedding instead of against it: everything diagnostic fits inside ten days; the honest trade is "tests before the 21st, decisions after" — she keeps the aisle AND the answers' },
      { dom:'rto',   text:'Touches the secrecy and the guilt: six weeks of hiding symptoms protected everyone except her — and Kofi finding out from a collapse at the reception protects no one' },
      { dom:'gs',    text:'Safety-nets in her register: confusion, vomiting, can\u2019t keep fluids down, overwhelming drowsiness → same-day admission/999 — "that\u2019s the version that ruins the wedding; my plan is the version that doesn\u2019t"; named follow-up call with results' },
    ],
    worked:[
      { lbl:'No ribbon',              txt:'"Straight, then: your calcium is 2.82 — high enough to explain every symptom you\u2019ve listed, not high enough to be tonight\u2019s emergency. It has two main causes in you: the cancer returning in bone — I won\u2019t pretend that isn\u2019t on the list — or an overactive parathyroid gland, which is common, benign and fixable. One blood test separates them."' },
      { lbl:'The wedding, joined',    txt:'"Here\u2019s my offer back: every test we need fits inside your ten days — bloods this week, the specialist team warned today. You walk into that church with answers being worked on, not with a secret. Decisions about treatment can respect the wedding. The DIAGNOSIS can\u2019t wait for it — and it doesn\u2019t need to."' },
      { lbl:'The trade, priced',      txt:'"You asked what ten days cost. For the tests: nothing — we do them now. For ignoring it: possibly a collapse, because untreated calcium climbs, and the version of this that ruins Abena\u2019s wedding is the ambulance at the reception, not the blood test on Thursday."' },
      { lbl:'The two roads',          txt:'"If the parathyroid test comes back high, this was never the cancer — it\u2019s a small gland misbehaving, and you\u2019ll have spent six weeks frightened of the wrong thing. If it\u2019s suppressed, the oncology team I\u2019m ringing today takes over fast. Either way, you\u2019re ahead of it by Friday."' },
      { lbl:'Kofi',                   txt:'"You\u2019ve carried this alone for six weeks to protect everyone. Can I say the unfair thing? Kofi deserves the chance to carry it with you — and you cannot give the speech, host the family AND hold this secret. Something will drop. Choose which, tonight."' },
      { lbl:'Safety-net',             txt:'"The rules between now and the 21st: drink two to three litres a day; stop the calcium-and-vitamin-D supplement; and if you get confused, can\u2019t stop being sick, or Kofi can\u2019t wake you properly — that\u2019s 999, wedding or no wedding. Bloods Thursday. I ring you Friday. You are not chasing anyone the week of a wedding."' },
    ],
    learning:'Symptomatic hypercalcaemia (here 2.82 adjusted) in a patient with a breast cancer history needs urgent same-week work-up — repeat bone profile + PTH (the fork between recurrence and primary hyperparathyroidism), same-day GP contact with the oncology team, hydration, stopping contributory drugs — and a hard admission line at \u22653.0 or confusion/vomiting/drowsiness. The hidden agenda is the wedding: the candidate who fights the date loses the patient; the one who fits the diagnostics inside it keeps both. Never deliver false certainty in either direction — PTH decides.',
    knowledge:{
      guideline:'NICE CKS hypercalcaemia · NG12 context · local oncology recurrence pathways',
      points:[
        { h:'Diagnose by number AND context', t:'Adjusted Ca 2.6\u20133.0 = moderate; hers is 2.82 WITH symptoms (thirst, polyuria, constipation, low mood, bone ache) in a breast-cancer survivor on anastrozole. Two leading causes: bony recurrence vs primary hyperparathyroidism — PTH separates them (suppressed = malignancy pattern; raised/inappropriately normal = parathyroid).' },
        { h:'Red flags & same-day action', t:'Adjusted calcium \u22653.0, confusion, persistent vomiting, drowsiness, dehydration or AKI → same-day admission for IV fluids ± bisphosphonate. State the line in advance so the patient can self-trigger — especially one planning to "be magnificent" through symptoms.' },
        { h:'Investigate this week', t:'Repeat bone profile + PTH within 48 h; U&E, FBC, vitamin D; review and stop contributory agents (calcium/vitamin D supplements, thiazides). New hip ache + cancer history: the oncology team will direct imaging (bone scan/CT) — the GP\u2019s job is the call today, not the scan order.' },
        { h:'Refer — urgent, named, today', t:'Same-day GP phone contact with the breast/oncology team (recurrence pathway) rather than a routine letter; if PTH points parathyroid, endocrine referral instead. Tell her which call you are making and when she\u2019ll hear.' },
        { h:'Manage alongside', t:'Hydration 2\u20133 L/day; laxative for the constipation; analgesia review for the hip; do NOT start anything calcium-raising; document the wedding-aware plan so the whole team honours it.' },
        { h:'Safety-net & follow-up', t:'999/same-day triggers in her register ("the version that ruins the wedding"); bloods Thursday, GP rings Friday — named, dated, no chasing; the post-wedding review booked NOW so deferring decisions has a landing slot.' },
        { h:'Marking edge', t:'Her opening line is the hidden agenda wearing armour: "it waits until the twenty-first." Fight the date and she disengages; join it — diagnostics inside ten days, decisions respectfully after — and she takes every test offered. The secrecy from Kofi is the second consultation: name what carrying it alone is costing her.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c16, c17, c18);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'anaemia-ida': {
      ceg: ['Investigations & results', 'Long-term conditions & cancer'],
      stem: {
        name: 'Sheila Drummond', age: '68 years · female',
        pmh: ['Hypertension', 'Carer flag: sole carer for husband (Parkinson\u2019s disease)'],
        meds: ['Amlodipine 5 mg OD', 'OTC: multivitamin "with iron" — self-started'],
        allergy: 'NKDA',
        recent: '⚠ Results for action: Hb 96 g/L, MCV 72 fl, ferritin 9 \u00b5g/L (bloods for tiredness). No FIT on file. Last BP review 10 months ago. Two recalls needed before she booked — "couldn\u2019t leave Brian".',
        reason: 'Video consultation — recalled to discuss blood results.'
      },
      timeMap: [
        { t:'0–1',  h:'Open & listen',        d:'She arrives with the answer pre-built (diet, iron tablets) and Brian in the first sentence. Bank both — the consultation is already telling you its shape.' },
        { t:'1–5',  h:'History the story hid', d:'"My stomach\u2019s been off" is the door: dyspepsia, the darker stools, weight, NSAIDs. Dismantle the diet story with her own menu. Ask about stools DIRECTLY — she will not volunteer them twice.' },
        { t:'5–6',  h:'Summarise & share',     d:'"Empty iron stores at 68 means iron is being lost, almost always from the gut — the diet idea was protecting you from a scarier sentence, and I understand why."' },
        { t:'6–10', h:'Plan around Brian',     d:'FIT + coeliac serology + iron started properly; the Brian problem treated as clinical work — carer\u2019s assessment, sitting service, day-visit framing for any scope.' },
        { t:'10–12',h:'Safety-net & close',    d:'Tarry stools / blood / faintness → 999 tonight. FIT back this week with a chase date. "I ring you with every result." Recheck bloods in a fortnight.' }
      ],
      wordPics: {
        fail: 'Prescribes ferrous sulfate against the diet story and says "we\u2019ll recheck in three months"; never asks about stools or dyspepsia; FIT never mentioned; Brian treated as background noise, so every investigation she\u2019s offered is silently declined.',
        pass: 'Names IDA as a find-the-bleed problem; asks the GI questions and surfaces the dark stools; sends FIT and coeliac serology; starts iron correctly alongside; acknowledges the caring load; safety-nets melaena.',
        exc:  'The pre-built diet story is named kindly and retired with her own facts; the stools question is asked directly and the months of quiet fear behind them acknowledged; Brian becomes part of the prescription (carer\u2019s assessment, sitting service) so the FIT and any scope actually happen; the 2WW threshold (FIT \u226510) stated in advance so the next step is pre-agreed, not a new battle.'
      },
      avoid: [
        { dont:'"Your iron is low so I\u2019ll put you on iron tablets and we\u2019ll see how you go."', instead:'"Iron tablets are part of this — but at 68, empty iron stores are a FIND-the-leak problem. Tablets refill the tank; my job is finding the hole."', why:'Iron-without-investigation is the designed fail of every IDA station — and of real-world missed colorectal cancers.' },
        { dont:'"You really should have mentioned the dark stools sooner."', instead:'"Months of noticing and not saying — that\u2019s not carelessness, that\u2019s fear doing its job. You\u2019ve said it now, and now is what counts."', why:'Scolding the delay teaches her to hide the next symptom; absolution keeps the channel open.' },
        { dont:'"The tests are nothing to worry about — try to make time for yourself."', instead:'"Let\u2019s solve Brian first: a sitting service for the morning of any test, a carer\u2019s assessment this month. Then the tests stop being impossible."', why:'"Make time for yourself" is advice; a sitting service is a plan. Only one of them gets the colonoscopy attended.' }
      ]
    },

    'back-pain-myeloma': {
      ceg: ['Investigations & results', 'Older adults'],
      stem: {
        name: 'Gordon Pryce', age: '72 years · male',
        pmh: ['Widowed 3 years (wife died of metastatic cancer — "started in her back")', 'OA knees'],
        meds: ['No regular medication', 'OTC: ibuprofen 400 mg TDS\u2013QDS \u00d73 months + paracetamol'],
        allergy: 'NKDA',
        recent: '⚠ Locum bloods (back pain, tiredness): Hb 108 g/L, ESR 88, adjusted calcium 2.68, creatinine 128 (eGFR 48 — was 72 last year). Locum note: "3/12 constant back pain, worse nocturnally. For GP results call." DNA\u2019d two routine reviews since wife\u2019s death.',
        reason: 'Telephone call-back — blood results.'
      },
      timeMap: [
        { t:'0–1',  h:'Open & listen',        d:'"I\u2019d rather have it straight" is a consulting instruction — adopt his register immediately. Headline first, detail second.' },
        { t:'1–5',  h:'Pattern + emergencies', d:'Night-dominant pain, the stone of weight, the thirst, the slow chest infection — then TONIGHT\u2019s screen: legs, saddle, bladder, confusion. The ibuprofen tally surfaces here.' },
        { t:'5–6',  h:'Summarise & share',     d:'"Three results that don\u2019t belong together by accident, plus three months of night pain — there\u2019s a blood condition called myeloma I have to rule out fast. That\u2019s the straight version."' },
        { t:'6–10', h:'The 48-hour plan',      d:'Electrophoresis + light chains within 48 h (NG12), repeat bone profile, NSAID stopped and replaced today, hydration. The garage cue answered; the Eileen script separated from his.' },
        { t:'10–12',h:'Safety-net & close',    d:'999 triggers in his register, no hedging. "I ring you with the results, named day." Who comes with him to haematology — the empty-house question asked.' }
      ],
      wordPics: {
        fail: 'Treats it as mechanical back pain ("physio referral, keep mobile") or repeats the bloods routinely in a month; ibuprofen never asked about; the garage line floats past; cord-compression screen absent; he hangs up politely and goes back to sorting paperwork.',
        pass: 'Recognises the myeloma pattern; orders electrophoresis/light chains urgently; screens cord compression and hypercalcaemia; stops the NSAID with a replacement; honest about the suspicion; books the results call.',
        exc:  'His straight-talk instruction is obeyed to the letter — headline, worry, plan; the 48-hour rule named as a promise; the garage cue converted into the real conversation, and the Eileen script answered with honest asymmetry ("the beginning of a story, not the end of hers"); analgesia replaced same-day; the loneliness question asked. A man who\u2019d resigned leaves with an appointment and a named call.'
      },
      avoid: [
        { dont:'"Back pain at your age is usually wear and tear — let\u2019s get you some physio."', instead:'"Mechanical pain rests when you rest. Yours wakes you at night and bends your bloods — that pattern gets investigated, this week."', why:'Night-dominant pain + CRAB bloods filed as lumbago is THE catastrophic miss of this station.' },
        { dont:'"Try not to jump to conclusions — it could be lots of things."', instead:'"You asked for it straight: myeloma is on my list and I\u2019m testing for it within forty-eight hours. It could still be something else — but you deserve my actual thinking, not a fog."', why:'Vagueness reads as flannel to a man who demanded straightness — and he stops listening.' },
        { dont:'"You shouldn\u2019t have been taking all that ibuprofen."', instead:'"The ibuprofen made sense when this was just a bad back. With what the kidneys are showing, it stops tonight — and I\u2019m replacing it with something that actually works, today."', why:'Blame for self-medication punishes him for coping alone; replacement keeps him on side and out of harm.' }
      ]
    },

    'hypercalcaemia-ca': {
      ceg: ['Investigations & results', 'Long-term conditions & cancer'],
      stem: {
        name: 'Annette Boateng', age: '58 years · female',
        pmh: ['Breast cancer 2022: WLE + radiotherapy, on anastrozole', 'Last oncology review 14 months ago — no concerns', 'Mammographic surveillance up to date'],
        meds: ['Anastrozole 1 mg OD', 'OTC: calcium + vitamin D supplement (self-started "for bones")'],
        allergy: 'NKDA',
        recent: '⚠ Urgent recall: adjusted calcium 2.82 mmol/L (bloods for tiredness, constipation, thirst — nurse appt). U&E/FBC unremarkable. No PTH on file. Note: patient asked nurse "to be quick — lots on at home this month."',
        reason: 'Video consultation — urgent results discussion.'
      },
      timeMap: [
        { t:'0–1',  h:'Open & listen',        d:'She opens with the agenda AND the consulting instruction: no ribbon, nothing before the 21st. Don\u2019t argue with either yet — bank both and give the headline she demanded.' },
        { t:'1–5',  h:'Number + history',      d:'The six-week symptom story, the hip ache, the 2am googling, the supplement that\u2019s feeding the calcium. Who knows? (Nobody.) The wedding\u2019s true place in the timeline.' },
        { t:'5–6',  h:'Summarise & share',     d:'"2.82 explains everything you\u2019ve felt. Two roads: the cancer in bone, or a benign parathyroid problem. One blood test forks them — and it fits inside your ten days."' },
        { t:'6–10', h:'Fit the plan to the date', d:'Bloods within 48 h (Ca + PTH), oncology team rung TODAY by the GP, supplement stopped, hydration, hip noted for the specialist. Decisions after the wedding; diagnostics before. Kofi conversation opened.' },
        { t:'10–12',h:'Safety-net & close',    d:'The hard line stated kindly: \u22653.0 or confusion/vomiting/drowsiness = admission, wedding or not — "my plan is the version that doesn\u2019t ruin it." Bloods Thursday, GP rings Friday, post-wedding review pre-booked.' }
      ],
      wordPics: {
        fail: 'Either soothes ("probably nothing, we\u2019ll repeat in a few weeks" — deferring everything past the wedding as she demanded) or steamrolls ("this can\u2019t wait, the wedding is irrelevant") so she disengages entirely; PTH never mentioned — recurrence delivered as certainty; the supplement keeps feeding the calcium; nobody rings oncology.',
        pass: 'Grades 2.82 correctly; holds both differentials honestly; arranges urgent repeat + PTH and contacts oncology; stops the supplement; gives hydration advice and the admission line; respects the wedding within safe limits; books follow-up.',
        exc:  'The no-ribbon instruction obeyed — number, two roads, plan; the wedding joined rather than fought, with every diagnostic fitted inside the ten days and decisions given a pre-booked landing slot after; the trade she offered priced honestly ("the ambulance at the reception is the version that ruins it"); the secrecy named and Kofi brought in; the 999 line stated so SHE can self-trigger. She takes every test offered and keeps the aisle.'
      },
      avoid: [
        { dont:'"Try not to worry — high calcium has lots of innocent causes."', instead:'"Straight, as you asked: it can be the cancer in bone, and it can be a benign gland problem that\u2019s common at your age. I\u2019m not guessing between them — one blood test decides, this week."', why:'She told you how she needs to be consulted; soothing is the one register guaranteed to lose her.' },
        { dont:'"A wedding is not a reason to delay cancer investigations."', instead:'"The wedding is exactly why we test NOW: answers in motion by Friday, decisions after the 21st, and no ambulance subplot at the reception. The date and the diagnosis can both win."', why:'Steamrolling the agenda converts a negotiable patient into a non-attender; joining it gets full compliance.' },
        { dont:'"Your calcium supplement is making this worse — stop it immediately."', instead:'"Small irony to fix today: the bone supplement you started to protect yourself is topping up the very thing that\u2019s high. Pause it from tonight — that alone may pull the number down."', why:'The instruction lands better as shared irony than as another thing she did wrong while coping alone.' }
      ]
    }
  });

})();
