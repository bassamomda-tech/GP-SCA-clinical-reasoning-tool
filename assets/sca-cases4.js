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
    "id": "anaemia-ida",
    "title": "“The hospital says the cameras were clear, but I’m still shattered and those iron tablets made me ill”",
    "type": "video",
    "duration": 12,
    "meta": {
      "age": 68,
      "sex": "F",
      "setting": "Video consultation — follow-up of a blood condition after hospital tests.",
      "system": "Haematology / GI — persistent iron-deficiency anaemia after negative bidirectional endoscopy: oral iron intolerance, alternate-day dosing, IV iron, next investigations and a fear of missed cancer",
      "checked": "October 2026"
    },
    "brief": "Sheila Drummond, 68, retired, sole carer for her husband Brian, who has Parkinson’s disease. Four months ago she had iron-deficiency anaemia (Hb 96 g/L, MCV 72, ferritin 9) and was referred on the suspected cancer pathway. Gastroscopy with duodenal biopsies and colonoscopy were normal; coeliac serology negative; urine dipstick negative for blood. She was started on ferrous sulfate once daily but stopped after three weeks because of nausea, constipation and black stools. Bloods this week: Hb 101 g/L, ferritin 11. She is tired and breathless on the stairs. Diet: little red meat, lots of tea with meals. If asked about painkillers: ibuprofen from the supermarket most days for her back. Her hidden concern, only if explored: the black stools frightened her, and her friend Pat had a “clear” colonoscopy and was diagnosed with bowel cancer a year later, so she thinks the cameras have missed something; she also read that iron drips can cause severe allergic reactions. Brian cannot be left for more than an hour or two. The task: explain the results and what the negative tests mean; distinguish iron-darkened stools from melaena; address the oral iron intolerance (alternate-day or lower-frequency dosing, a different preparation, taking it with vitamin C and away from tea; check the SPC/local formulary); stop the ibuprofen; consider intravenous iron if oral iron fails or is not tolerated, explaining the small risk honestly; plan monitoring and when further investigation (such as small-bowel investigation via gastroenterology) is indicated if anaemia persists despite adequate iron; address the fear that cancer was missed; and make practical arrangements around Brian’s care.",
    "script": {
      "opening": "“The hospital says the cameras were all clear, which is good I suppose. But I’m still shattered, I get puffed on the stairs, and those iron tablets made me so ill I stopped them.”",
      "facts": [
        {
          "topic": "Symptoms",
          "text": "Tired all the time, breathless on the stairs, a bit dizzy on standing. No chest pain. No visible blood loss: no blood in stools or urine, no vomiting blood. Postmenopausal for 15 years, no vaginal bleeding. Weight steady."
        },
        {
          "topic": "Iron tablets",
          "text": "Ferrous sulfate once a day for three weeks. Felt sick, constipated, and her stools went black. Stopped them a month ago. Took them with breakfast and a cup of tea."
        },
        {
          "topic": "Stools (if asked in detail)",
          "text": "Black but formed, not sticky or tarry, no unusual smell, and they returned to brown within days of stopping the tablets. No black stools since."
        },
        {
          "topic": "Diet and medicines (if asked)",
          "text": "Little red meat, lots of tea. Ibuprofen from the supermarket most days for her back for about a year. No aspirin or anticoagulants. Amlodipine for BP."
        },
        {
          "topic": "The fear (only if explored)",
          "text": "Her friend Pat had a clear colonoscopy and was diagnosed with bowel cancer a year later. Sheila thinks the cameras might have missed something, and the black stools “proved it”. Also read online that iron drips can cause a severe allergic reaction."
        },
        {
          "topic": "Home",
          "text": "Cares for Brian, 72, with Parkinson’s; he falls if left long. Daughter helps one afternoon a week. Tired from broken nights."
        },
        {
          "topic": "How to play it",
          "text": "Matter-of-fact, slightly apologetic about stopping the tablets. Relieved when the black stools are explained. Becomes anxious about the iron drip until the risk is put in proportion; then practical about arranging cover for Brian."
        }
      ],
      "ice": {
        "ideas": "“I’m just anaemic and tired from looking after Brian.”",
        "concerns": "HIDDEN AGENDA: that the cameras missed a cancer, as happened to her friend, and that the black stools meant bleeding; fear of a reaction to an iron drip.",
        "expectations": "“Something for the tiredness that doesn’t make me ill.”"
      },
      "cues": [
        "“Which is good I suppose” — ambivalence about the clear tests.",
        "Black stools on iron — distinguish from melaena, and explore what she made of them.",
        "Tea with breakfast and daily ibuprofen — absorption and ongoing loss.",
        "Caring for Brian — practical barrier to IV iron and appointments."
      ]
    },
    "checkpoints": [
      {
        "dom": "dg",
        "text": "Reviews the results and investigations so far (persistent iron deficiency after normal gastroscopy with duodenal biopsies, colonoscopy, coeliac serology and urinalysis) and asks about symptoms and ongoing blood loss"
      },
      {
        "dom": "dg",
        "text": "Clarifies the black stools (formed, not tarry, resolved after stopping iron) and distinguishes iron-darkened stools from melaena"
      },
      {
        "dom": "dg",
        "text": "Identifies contributors: daily over-the-counter ibuprofen, tea with iron, diet"
      },
      {
        "dom": "cm",
        "text": "Manages oral iron intolerance: once-daily or alternate-day dosing, an alternative preparation, taken with vitamin C and away from tea, coffee and antacids (check the SPC/local formulary), with a recheck of Hb after about 2–4 weeks"
      },
      {
        "dom": "cm",
        "text": "Explains intravenous iron as an option if oral iron is not tolerated or does not work, with honest information that serious reactions are rare and are managed by the infusion team"
      },
      {
        "dom": "cm",
        "text": "Stops the ibuprofen and offers safer analgesia for her back"
      },
      {
        "dom": "cm",
        "text": "Explains when further investigation is needed (if anaemia persists or recurs despite adequate iron, refer back to gastroenterology for consideration of small-bowel investigation) and addresses her fear that cancer was missed with honest, proportionate information"
      },
      {
        "dom": "ro",
        "text": "Explores her concerns and caring situation, arranges practical cover for appointments, and safety-nets (melaena, rectal bleeding, worsening breathlessness or chest pain, weight loss)"
      }
    ],
    "worked": [
      {
        "lbl": "What the clear tests mean",
        "txt": "“The cameras looked at your stomach, the first part of your small bowel and your whole large bowel, and they were clear, as were the coeliac test and the urine. That’s genuinely reassuring. But you’re still low on iron, so we need to fix that and keep an eye on why.”"
      },
      {
        "lbl": "Black stools",
        "txt": "“Iron tablets often turn stools very dark or black. The worrying kind of black stool is sticky, tarry and smells awful. Yours were formed and went back to normal when you stopped the tablets. That fits the iron.”"
      },
      {
        "lbl": "Explore the fear",
        "txt": "“You said the clear result was good ‘I suppose’. Is part of you worried they’ve missed something?”"
      },
      {
        "lbl": "Better iron",
        "txt": "“Taking iron every other day is often just as effective and much easier on the stomach. Take it with orange juice, not tea, and away from indigestion remedies.”"
      },
      {
        "lbl": "The drip, honestly",
        "txt": "“If tablets don’t work, an iron drip in hospital is very effective. Serious allergic reactions are rare, and the team watch you closely and know exactly what to do.”"
      },
      {
        "lbl": "When to look further",
        "txt": "“If your iron keeps falling despite treatment, I’d send you back to the bowel team to look at the small bowel, which the standard cameras don’t reach. That’s a planned next step, not a sign anything was missed.”"
      }
    ],
    "learning": "Iron-deficiency anaemia in a postmenopausal woman needs investigation for gastrointestinal blood loss and malabsorption: the BSG guideline (2021) recommends coeliac serology, urinalysis and bidirectional endoscopy (gastroscopy with duodenal biopsies and colonoscopy) for most, and NICE NG12 includes IDA in suspected cancer pathway criteria. When these are negative, the next steps are to replace iron effectively and monitor. Oral iron causes gastrointestinal side effects in many people; once-daily or alternate-day dosing improves tolerance and can maintain absorption because of hepcidin effects, and absorption improves with vitamin C and worsens with tea, coffee, calcium and antacids (check the SPC/local formulary). Recheck Hb after 2–4 weeks; a rise of about 20 g/L over 3–4 weeks shows a good response. Intravenous iron is indicated when oral iron is not tolerated or is ineffective; serious hypersensitivity reactions are rare and infusions are given where resuscitation facilities are available. Iron commonly darkens stools; melaena is black, tarry, sticky and offensive, and needs urgent assessment. Remove contributors such as NSAIDs. If IDA persists or recurs despite adequate replacement after negative bidirectional endoscopy, refer back to gastroenterology for consideration of small-bowel investigation (for example capsule endoscopy), and reconsider non-GI causes. The consultation skill is uncovering the fear that cancer was missed, giving honest reassurance about what the tests did and did not show, and making the plan workable for a carer who cannot easily leave home.",
    "knowledge": {
      "guideline": "[1] British Society of Gastroenterology guidelines for the management of iron deficiency anaemia in adults (2021) · [2] NICE CKS Anaemia – iron deficiency (check current version) · [3] NICE NG12 Suspected cancer: recognition and referral (2015, last updated 2026) · [4] Product SPCs for oral iron preparations and intravenous iron · [5] MHRA Drug Safety Update: intravenous iron and serious hypersensitivity reactions (2014) · [6] Care Act 2014 — carer’s assessment",
      "summary": "Persistent iron deficiency after a negative suspected cancer pathway work-up (gastroscopy with duodenal biopsies, colonoscopy, coeliac serology, urinalysis), oral iron stopped because of side effects and black stools, ongoing ibuprofen, tea with meals, and a hidden fear that cancer was missed. Explain the results, distinguish iron stools from melaena, optimise oral iron or consider IV iron, stop the NSAID, set a monitoring plan and a threshold for small-bowel investigation, and make it work around her caring role.",
      "points": [
        {
          "h": "Standard work-up",
          "t": "Coeliac serology, urinalysis, and bidirectional endoscopy with duodenal biopsies in men and postmenopausal women with IDA [1]."
        },
        {
          "h": "Oral iron tolerance",
          "t": "Once-daily or alternate-day dosing improves tolerance; alternative preparations may suit; take with vitamin C, away from tea, coffee, calcium and antacids (check the SPC/local formulary) [1,2,4]."
        },
        {
          "h": "Monitoring response",
          "t": "Recheck Hb at 2–4 weeks; expect a rise of about 20 g/L over 3–4 weeks. Continue for about 3 months after Hb normalises to replenish stores [1]."
        },
        {
          "h": "Intravenous iron",
          "t": "When oral iron is not tolerated or ineffective. Serious hypersensitivity is rare; give where resuscitation facilities are available [4,5]."
        },
        {
          "h": "Black stools",
          "t": "Iron darkens stools. Melaena is black, tarry, sticky and offensive, and needs urgent assessment."
        },
        {
          "h": "Contributors",
          "t": "NSAIDs, antiplatelets and anticoagulants increase GI loss; diet; malabsorption."
        },
        {
          "h": "Persistent or recurrent IDA",
          "t": "If IDA persists or recurs despite adequate iron after negative bidirectional endoscopy, refer back for consideration of small-bowel investigation such as capsule endoscopy [1]."
        },
        {
          "h": "Carers",
          "t": "Plan appointments and infusions around caring responsibilities; offer a carer’s assessment [6]."
        }
      ]
    }
  };

  /* ============ 17. TELEPHONE — Back pain with abnormal bloods ============ */
  const c17 = {
    id:'back-pain-myeloma', title:'Back pain that isn\u2019t mechanical', type:'telephone', duration:12,
    meta:{ age:72, sex:'M', setting:'Telephone call-back — locum bloods flagged for review.', system:'Haematology / MSK', checked:'October 2026' },
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
      { dom:'dg', text:'Recognises the pattern out loud: age >60 + persistent unexplained back pain + anaemia + ESR 88 + raised calcium + new renal impairment = myeloma until excluded (NICE NG12, updated April 2026)' },
      { dom:'cm', text:"Completes the NICE NG12 myeloma panel now: serum protein electrophoresis + serum free light chains alongside the FBC, calcium and ESR (urine Bence-Jones only if free light chains are unavailable) — NICE NG12 sends these together, not in stages — plus repeat bone profile, renal monitoring" },
      { dom:'dg', text:'Screens the emergencies tonight: cord compression (leg weakness, saddle numbness, bladder/bowel change), hypercalcaemia symptoms (confusion, vomiting, drowsiness), sepsis — and names 999 triggers' },
      { dom:'cm', text:'Stops the ibuprofen TODAY with the reason (NSAIDs + failing kidneys + possible myeloma kidney = active harm) and replaces analgesia properly (paracetamol regular, consider short opioid step, review)' },
      { dom:'ro',   text:'Obeys his consulting instruction: straight, structured, no soothing — "here is what the bloods show, here is what I\u2019m worried about, here is exactly what happens next"' },
      { dom:'ro',   text:'Hears the garage cue and names it: he has been preparing to die instead of being diagnosed — and answers the REAL fear (Eileen\u2019s drawn-out middle) with the honest difference: myeloma is typically treatable, often for years, and found early behaves nothing like what he watched' },
      { dom:'ro',   text:'Checks who is around him now Eileen is gone — the man sorting the garage alone is also the man who\u2019ll sit in haematology alone' },
      { dom:'cm',    text:'Safety-nets concretely: legs/bladder/saddle symptoms or confusion/vomiting → 999 tonight; bloods within 48 h with a named chase plan; GP follow-up call booked for the results day' },
    ],
    worked:[
      { lbl:'Straight, as ordered',   txt:'"You asked for it straight, so: the tests show three things that don\u2019t belong together by accident — mild anaemia, a very high inflammation marker, and kidneys working harder than a year ago. With three months of night-time back pain, there\u2019s a blood condition called myeloma I have to rule out properly, and fast. That\u2019s the headline."' },
      { lbl:'The 48-hour promise',    txt:'"Fast means this: one more set of blood tests that look for the actual fingerprint of it — done within forty-eight hours, not weeks. If the fingerprint\u2019s there, you\u2019re in front of a blood specialist on the urgent pathway. If it isn\u2019t, we\u2019ve lost nothing but two days."' },
      { lbl:'The garage, named',      txt:'"Gordon — the garage, the paperwork, \u2018getting things in order\u2019. I think you decided three months ago how this ends, and you\u2019ve been preparing for it instead of ringing us. Am I close?"' },
      { lbl:'The Eileen difference',  txt:'"What you watched with Eileen was a cancer found at the end of its story. If this IS myeloma, we\u2019d be finding it at the beginning of one — and it\u2019s a condition people are treated for and live with, often for many years. I won\u2019t promise you outcomes. I\u2019ll promise you it is not her script."' },
      { lbl:'The ibuprofen',          txt:'"The supermarket ibuprofen stops tonight — with your kidneys under strain it\u2019s doing real damage, and if this is what I\u2019m checking for, it\u2019s the worst tablet in the house. I\u2019m giving you proper pain relief instead, today, not telling you to grin through it."' },
      { lbl:'Safety-net',             txt:'"Tonight\u2019s rules, straight: weakness in the legs, numbness around the saddle area, trouble with the waterworks or bowels, confusion or vomiting — that\u2019s 999, no debating it. The bloods happen within two days, and it\u2019s ME who rings YOU with them — you\u2019re not chasing anyone."' },
    ],
    learning:"NICE NG12: age 60+ with persistent unexplained back pain plus anaemia, raised ESR/plasma viscosity, hypercalcaemia or renal impairment = suspected myeloma — NG12 asks for FBC, calcium, ESR/plasma viscosity, serum protein electrophoresis and serum free light chains together (urine Bence-Jones only if free light chains are unavailable), then a suspected cancer pathway referral if the results suggest myeloma. Screen cord compression and hypercalcaemia the same call, and stop nephrotoxic NSAIDs immediately. The hidden agenda — a man who watched late diagnosis kill his wife and has been \"getting things in order\" instead of attending — is answered with honest asymmetry, not reassurance.",
    knowledge:{
      guideline:"NICE NG234 (2023) spinal metastases and MSCC · NICE NG12 Suspected cancer: recognition and referral (2015, last updated 15 April 2026) · NICE NG253 sepsis",
      points:[
        { h:'Diagnose the pattern', t:'Mechanical back pain eases with rest and spares the night. Three months of constant night-dominant pain at 72 with Hb 108, ESR 88, adjusted Ca 2.68 and new eGFR decline is myeloma\u2019s textbook quartet (CRAB: calcium, renal, anaemia, bone) — say the suspicion plainly; he asked for straight.' },
        { h:'Red flags & same-day action', t:'Tonight’s emergencies: metastatic cord compression (leg weakness, saddle anaesthesia, sphincter change → 999/emergency assessment; NICE NG234 (2023): MRI within 24 hours for suspected MSCC with neurological symptoms or signs), symptomatic hypercalcaemia (confusion, vomiting, drowsiness, dehydration → same-day admission), and infection — myeloma suppresses normal antibodies, which fits his 6-week chest infection, so fever, rigors or feeling very unwell are judged as possible sepsis (NICE NG253).' },
        { h:'Investigate — complete the panel', t:"NICE NG12: FBC, calcium, ESR/plasma viscosity, serum protein electrophoresis AND serum free light chains are one panel sent together (urine Bence-Jones only if free light chains are unavailable) — his FBC, calcium and ESR are back, so send the electrophoresis and light chains now; repeat bone profile and U&E; FBC film. X-rays can wait for haematology — the bloods cannot." },
        { h:'Refer — suspected cancer pathway haematology, named', t:"Paraprotein or abnormal light-chain ratio → suspected cancer pathway haematology referral under NICE NG12, told to him as the plan, with the sequence (clinic, marrow test, imaging) sketched in one calm sentence each." },
        { h:'Manage tonight', t:'Stop ibuprofen immediately (NSAID + renal impairment ± cast nephropathy = active harm); regular paracetamol, consider short course of weak opioid with laxative cover at his age; hydration advice for the calcium; document the analgesia review so it doesn\u2019t auto-repeat.' },
        { h:'Safety-net & follow-up', t:'999 triggers in his own plain register (legs, saddle, waterworks, confusion); bloods booked within 48 h with a chase rule; the GP rings HIM with results on a named day; loneliness flagged — who comes with him to haematology?' },
        { h:'Marking edge', t:'"Got things in order" is the consultation\u2019s buried headline: he has been preparing to die for three months. The Clear Pass names it without flinching, answers the Eileen script with the honest difference, and converts a man who\u2019d resigned into a man with an appointment in 48 hours.' }
      ]
    }
  };

  /* ============ 18. VIDEO — Hypercalcaemia with a cancer history ============ */
  const c18 = {
    id:'hypercalcaemia-ca', title:'The calcium and the wedding', type:'video', duration:12,
    meta:{ age:58, sex:'F', setting:'Video consultation — urgent recall after blood results.', system:'Oncology / Endocrine', checked:'October 2026' },
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
      { dom:'dg', text:'Grades the number honestly: adjusted calcium 2.82 is below 3.0 but SYMPTOMATIC, and symptomatic hypercalcaemia needs same-day assessment (Society for Endocrinology 2016) — repeat adjusted calcium with a paired PTH (NICE NG132) today, and in HER context, same-day contact with the breast/oncology team' },
      { dom:'dg', text:'Holds both differentials out loud: recurrence with bony disease is the concern, but primary hyperparathyroidism is common, benign and entirely possible — PTH is the fork in the road, so certainty now is false certainty' },
      { dom:'cm', text:'Acts today without admission theatre: same-day face-to-face review with bloods (adjusted calcium + PTH, U&E, phosphate, ALP, vitamin D, FBC), oral fluids unless restricted, STOP anything worsening it (review any vitamin D/calcium supplements, thiazides), oncology team contacted by the GP same day' },
      { dom:'cm', text:'Knows the escalation line and says it: confusion, drowsiness, persistent vomiting, dehydration, AKI or calcium ≥3.5 → emergency admission for IV fluids; calcium 3.0–3.5 → same-day hospital assessment — no negotiation, wedding or not' },
      { dom:'ro',   text:'Honours the no-ribbon instruction: gives the number, the two roads it can mean, and the plan, in that order, without soothing' },
      { dom:'ro',   text:'Negotiates WITH the wedding instead of against it: everything diagnostic fits inside ten days; the honest trade is "tests before the 21st, decisions after" — she keeps the aisle AND the answers' },
      { dom:'ro',   text:'Touches the secrecy and the guilt: six weeks of hiding symptoms protected everyone except her — and Kofi finding out from a collapse at the reception protects no one' },
      { dom:'cm',    text:'Safety-nets in her register: confusion, vomiting, can\u2019t keep fluids down, overwhelming drowsiness → same-day admission/999 — "that\u2019s the version that ruins the wedding; my plan is the version that doesn\u2019t"; named follow-up call with results' },
    ],
    worked:[
      { lbl:'No ribbon',              txt:'"Straight, then: your calcium is 2.82 — high enough to explain every symptom you’ve listed. It’s not in the ambulance range, but because it’s giving you symptoms I want you seen and re-tested today. It has two main causes in you: the cancer returning in bone — I won\u2019t pretend that isn\u2019t on the list — or an overactive parathyroid gland, which is common, benign and fixable. One blood test separates them."' },
      { lbl:'The wedding, joined',    txt:'"Here\u2019s my offer back: every test we need fits inside your ten days — bloods today, the specialist team warned today. You walk into that church with answers being worked on, not with a secret. Decisions about treatment can respect the wedding. The DIAGNOSIS can\u2019t wait for it — and it doesn\u2019t need to."' },
      { lbl:'The trade, priced',      txt:'"You asked what ten days cost. For the tests: nothing — we do them now. For ignoring it: possibly a collapse, because untreated calcium climbs, and the version of this that ruins Abena\u2019s wedding is the ambulance at the reception, not the blood test today."' },
      { lbl:'The two roads',          txt:'"If the parathyroid test comes back high, this was never the cancer — it\u2019s a small gland misbehaving, and you\u2019ll have spent six weeks frightened of the wrong thing. If it\u2019s suppressed, the oncology team I\u2019m ringing today takes over fast. Either way, you\u2019re ahead of it by Friday."' },
      { lbl:'Kofi',                   txt:'"You\u2019ve carried this alone for six weeks to protect everyone. Can I say the unfair thing? Kofi deserves the chance to carry it with you — and you cannot give the speech, host the family AND hold this secret. Something will drop. Choose which, tonight."' },
      { lbl:'Safety-net',             txt:'"The rules between now and the 21st: drink plenty, steadily through the day; stop the calcium-and-vitamin-D supplement; and if you get confused, can\u2019t stop being sick, or Kofi can\u2019t wake you properly — that’s 999, wedding or no wedding. Seen and bloods today. I ring you tomorrow with the results. You are not chasing anyone the week of a wedding."' },
    ],
    learning:'Symptomatic hypercalcaemia (here 2.82 adjusted) in a patient with a breast cancer history needs same-day assessment (Society for Endocrinology 2016) — repeat adjusted calcium + paired PTH (NICE NG132; the fork between recurrence and primary hyperparathyroidism), same-day GP contact with the oncology team, fluids, stopping contributory drugs — with a hard emergency-admission line for confusion, drowsiness, persistent vomiting, dehydration, AKI or calcium ≥3.5, and same-day hospital assessment at 3.0–3.5. The hidden agenda is the wedding: the candidate who fights the date loses the patient; the one who fits the diagnostics inside it keeps both. Never deliver false certainty in either direction — PTH decides.',
    knowledge:{
      guideline:'NICE NG132 (2019) primary hyperparathyroidism · Society for Endocrinology emergency guidance: acute hypercalcaemia (2016) · local acute oncology recurrence pathways',
      points:[
        { h:'Diagnose by number AND context', t:'Society for Endocrinology (2016): adjusted Ca ≥3.5 is an emergency, 3.0–3.5 needs same-day assessment, and symptomatic hypercalcaemia below 3.0 also needs same-day assessment. Hers is 2.82 WITH symptoms (thirst, polyuria, constipation, low mood, bone ache) in a breast-cancer survivor on anastrozole. Two leading causes: bony recurrence vs primary hyperparathyroidism — NICE NG132: repeat the calcium and measure PTH with a concurrent adjusted calcium; PTH separates them (suppressed = malignancy pattern; raised/inappropriately normal = parathyroid).' },
        { h:'Red flags & same-day action', t:'Confusion, persistent vomiting, drowsiness, dehydration, AKI or adjusted calcium ≥3.5 → emergency admission for IV fluids and specialist treatment (community IV fluids are not appropriate); 3.0–3.5, or symptomatic at any level → same-day assessment. State the line in advance so the patient can self-trigger — especially one planning to "be magnificent" through symptoms.' },
        { h:'Investigate today', t:'Same-day repeat adjusted calcium with paired PTH (NICE NG132); U&E, phosphate, magnesium, ALP, 25-hydroxyvitamin D, FBC; review and stop contributory agents (calcium/vitamin D supplements, thiazides). New hip ache + cancer history: the oncology team will direct imaging (bone scan/CT) — the GP\u2019s job is the call today, not the scan order.' },
        { h:'Refer — urgent, named, today', t:'Same-day GP phone contact with the breast/oncology team (recurrence pathway) rather than a routine letter; if PTH points parathyroid, endocrine referral instead. NICE NG12 applies to undiagnosed cancer, not suspected recurrence. Tell her which call you are making and when she’ll hear.' },
        { h:'Manage alongside', t:'Oral fluids unless restricted; laxative for the constipation; analgesia review for the hip; do NOT start anything calcium-raising; document the wedding-aware plan so the whole team honours it.' },
        { h:'Safety-net & follow-up', t:'999/same-day triggers in her register ("the version that ruins the wedding"); same-day review and bloods, GP rings with results the next day — named, dated, no chasing; the post-wedding review booked NOW so deferring decisions has a landing slot.' },
        { h:'Marking edge', t:'Her opening line is the hidden agenda wearing armour: "it waits until the twenty-first." Fight the date and she disengages; join it — diagnostics inside ten days, decisions respectfully after — and she takes every test offered. The secrecy from Kofi is the second consultation: name what carrying it alone is costing her.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c16, c17, c18);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'anaemia-ida': {
      "ceg": [
        "Older adults",
        "Investigations & results",
        "Long-term conditions & cancer"
      ],
      "stem": {
        "name": "Sheila Drummond",
        "age": "68 years · female",
        "pmh": [
          "Iron-deficiency anaemia (diagnosed 4 months ago)",
          "Hypertension",
          "Registered as carer for her husband (Parkinson’s disease)"
        ],
        "meds": [
          "Amlodipine",
          "Ferrous sulfate (issued 2 months ago; not reordered)"
        ],
        "allergy": "None recorded",
        "recent": "Gastroscopy with duodenal biopsies and colonoscopy normal; coeliac serology negative; urine dipstick negative for blood. Bloods this week: Hb 101 g/L (96 four months ago), ferritin 11 µg/L, MCV 74.",
        "reason": "Follow-up after hospital tests: “Still tired.”"
      },
      "timeMap": [
        {
          "t": "0–1",
          "h": "Open",
          "d": "Hear the intolerance and the ambivalence about clear tests."
        },
        {
          "t": "1–5",
          "h": "History",
          "d": "Iron side effects; black stools characterised; red flags; tea; ibuprofen."
        },
        {
          "t": "5–7",
          "h": "ICE",
          "d": "Fear of missed cancer after Pat; drip worries."
        },
        {
          "t": "7–11",
          "h": "Explain and plan",
          "d": "What the tests showed; iron stools; alternate-day iron; stop NSAID; IV iron; threshold for small-bowel investigation; Brian’s cover."
        },
        {
          "t": "11–12",
          "h": "Close",
          "d": "Teach-back; Hb in 3 weeks; melaena safety-net; carer’s assessment."
        }
      ],
      "wordPics": {
        "fail": "Restarts the same iron regimen or tells her to persevere; misses the ibuprofen; does not clarify the black stools; ignores the fear that cancer was missed.",
        "pass": "Explains the negative tests, distinguishes iron stools from melaena, offers alternate-day iron, stops the NSAID and plans a recheck.",
        "exc": "All of the above, plus: uncovers and addresses the fear about Pat with honest limits of testing; explains IV iron risk proportionately; a clear threshold for small-bowel investigation; arranges infusion cover around Brian; offers a carer’s assessment."
      },
      "avoid": [
        {
          "dont": "“You need to take the tablets, they all cause side effects.”",
          "instead": "“Let’s try them every other day, with orange juice rather than tea.”",
          "why": "Alternate-day dosing improves tolerance with similar effectiveness."
        },
        {
          "dont": "“The tests were clear, so there’s nothing to worry about.”",
          "instead": "“That’s reassuring, and if your iron keeps dropping we’ll look further.”",
          "why": "Honest limits of testing build trust and keep her safe."
        },
        {
          "dont": "(Ignoring the black stools)",
          "instead": "“Were they sticky and tarry, or just dark?”",
          "why": "Melaena must be distinguished from iron-darkened stools."
        }
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
        { t:'6–10', h:'The 48-hour plan',      d:"Electrophoresis + light chains sent now to complete the NICE NG12 panel, repeat bone profile, NSAID stopped and replaced today, hydration. The garage cue answered; the Eileen script separated from his." },
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
        { t:'6–10', h:'Fit the plan to the date', d:'Same-day review and bloods (Ca + PTH), oncology team rung TODAY by the GP, supplement stopped, hydration, hip noted for the specialist. Decisions after the wedding; diagnostics before. Kofi conversation opened.' },
        { t:'10–12',h:'Safety-net & close',    d:'The hard line stated kindly: confusion/vomiting/drowsiness or calcium ≥3.5 = admission, 3.0–3.5 = same-day hospital assessment, wedding or not — "my plan is the version that doesn’t ruin it." Bloods today, GP rings tomorrow, post-wedding review pre-booked.' }
      ],
      wordPics: {
        fail: 'Either soothes ("probably nothing, we\u2019ll repeat in a few weeks" — deferring everything past the wedding as she demanded) or steamrolls ("this can\u2019t wait, the wedding is irrelevant") so she disengages entirely; PTH never mentioned — recurrence delivered as certainty; the supplement keeps feeding the calcium; nobody rings oncology.',
        pass: 'Grades 2.82 correctly; holds both differentials honestly; arranges urgent repeat + PTH and contacts oncology; stops the supplement; gives hydration advice and the admission line; respects the wedding within safe limits; books follow-up.',
        exc:  'The no-ribbon instruction obeyed — number, two roads, plan; the wedding joined rather than fought, with every diagnostic fitted inside the ten days and decisions given a pre-booked landing slot after; the trade she offered priced honestly ("the ambulance at the reception is the version that ruins it"); the secrecy named and Kofi brought in; the 999 line stated so SHE can self-trigger. She takes every test offered and keeps the aisle.'
      },
      avoid: [
        { dont:'"Try not to worry — high calcium has lots of innocent causes."', instead:'"Straight, as you asked: it can be the cancer in bone, and it can be a benign gland problem that\u2019s common at your age. I\u2019m not guessing between them — one blood test decides, today."', why:'She told you how she needs to be consulted; soothing is the one register guaranteed to lose her.' },
        { dont:'"A wedding is not a reason to delay cancer investigations."', instead:'"The wedding is exactly why we test NOW: answers in motion from today, decisions after the 21st, and no ambulance subplot at the reception. The date and the diagnosis can both win."', why:'Steamrolling the agenda converts a negotiable patient into a non-attender; joining it gets full compliance.' },
        { dont:'"Your calcium supplement is making this worse — stop it immediately."', instead:'"Small irony to fix today: the bone supplement you started to protect yourself is topping up the very thing that\u2019s high. Pause it from tonight — that alone may pull the number down."', why:'The instruction lands better as shared irony than as another thing she did wrong while coping alone.' }
      ]
    }
  });

})();
