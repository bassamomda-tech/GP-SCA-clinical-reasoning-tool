/* ============================================================
   Reasoning GP — Case Library batch 5: "Memory & behaviour change"
   Three ORIGINAL cases. Hidden agenda + full ICE in every case.
   Pushes into SCA_CASES + SCA_EXTRAS.
   Load AFTER sca-cases.js / 2\u20136 and sca-extras.js.
   ============================================================ */

(function(){

  /* ============ 25. TELEPHONE — The son, the roofer, and Singapore ============ */
  const c25 = {
    id:'memory-son-call', title:'The son who leaves on Friday', type:'telephone', duration:12,
    meta:{ age:79, sex:'F', setting:'Telephone — son calling about his mother (no consent on file).', system:'Memory / Third party' },
    brief:'Mr Daniel Okafor, 47, rings about his mother Grace, 79, a patient at your practice (hypertension, well; last seen 8 months ago). He has been visiting weekly and is worried: a year of slowly worsening forgetfulness — repeated questions, missed bills, the same story three times in a visit. Last month she paid \u00a3900 in cash to a doorstep "roofer" for work that was never done. There is no consent on file to discuss Grace\u2019s care. Daniel has not told his mother he is calling.',
    script:{
      opening:'"Hello — Daniel Okafor, I\u2019m ringing about my mum, Grace. Before you say you can\u2019t talk to me, please just listen, because I don\u2019t know what else to do. Mum\u2019s memory has been going for a year, properly going, and last month she gave nine hundred pounds to a man who knocked on the door. And — this is the part that\u2019s killing me — I\u2019m moving to Singapore on Friday. The job\u2019s gone too far to pull out. I need this SORTED before I get on that plane."',
      facts:[
        { topic:'The year',          text:'Gradual, steady: repeated questions within minutes, the same anecdote three times a visit, missed direct debits (red-letter gas bill), a saucepan boiled dry twice, getting lost driving back from the garden centre she\u2019s used for 30 years.' },
        { topic:'Still intact',      text:'Washes and dresses well, cooks simple meals, recognises everyone, plays bridge on Tuesdays ("she loses now, which she never did"). No falls. Mood seems cheerful — "she laughs it off, says \u2018my age, darling\u2019."' },
        { topic:'The roofer',        text:'\u00a3900 cash withdrawn over two days for "guttering work" — no work done, no receipt, the man has been back ONCE since and she nearly paid again ("he was ever so polite"). Daniel found out from the bank statement.' },
        { topic:'Health screen',     text:'If asked: no sudden changes, no falls or head injury, not on new medications, no infections lately, sleeps well, eats well, drinks "a sherry at Christmas". Still driving — short local trips.' },
        { topic:'Singapore',         text:'Flight Friday, 3-year contract, only child, father died 2019. The guilt arrives in waves: "I\u2019m abandoning her, aren\u2019t I? Just say it." He wants a diagnosis, a care package and the locks changed — in four days.' },
        { topic:'What he hasn\u2019t done', text:'Told his mother he\u2019s worried, or that he\u2019s calling. "She\u2019d be mortified. Or she\u2019d laugh at me. Mum doesn\u2019t do doctors." No LPA in place — "we never got round to it".' },
      ],
      ice:{
        ideas:'Dementia — he\u2019s googled it, scored her on an online test, and is "about 90% sure". He\u2019s probably right about the pattern.',
        concerns:'HIDDEN AGENDA — Friday. The real consultation is his guilt at leaving and the fantasy that everything can be "sorted" in four days. Underneath: the roofer coming back while he\u2019s 7,000 miles away, and the LPA they never set up.',
        expectations:'A diagnosis, a care package, and his mother protected — by Friday. Needs converting to: the right process STARTED by Friday, with him plugged in from Singapore, and Grace at the centre rather than bypassed.'
      },
      cues:['"Before you say you can\u2019t talk to me, please just listen" — he\u2019s braced for the confidentiality wall; how you handle the first 30 seconds decides the call.','"I\u2019m abandoning her, aren\u2019t I? Just say it." — the guilt, asking to be either confirmed or absolved; do neither carelessly.','"He\u2019s been back once since" — the roofer is not history; it\u2019s a live, repeating safeguarding risk.']
    },
    checkpoints:[
      { dom:'tasks', text:'Sets the confidentiality rails warmly in the first minute: everything can flow IN; nothing about Grace flows out — and listening to all of it breaches nothing' },
      { dom:'tasks', text:'Takes a proper collateral history and distinguishes the pattern: 12 months of gradual decline with preserved ADLs = memory-pathway territory, NOT delirium — while screening the delirium triggers (drugs, infection, falls) to be sure' },
      { dom:'tasks', text:'Builds the route in WITH Grace at the centre: Daniel tells her openly, books her a review "for her blood pressure and a general check" honestly framed, GP does bloods + structured cognitive testing + memory-clinic referral with her consent' },
      { dom:'tasks', text:'Handles the live risks by name: the returning roofer (bank scam-protection team, trading standards/101, neighbour alerted), DRIVING (must be assessed and DVLA considered if dementia diagnosed — flagged now, handled at the review), and LPA — urgent precisely BECAUSE capacity is likely still sufficient to grant it' },
      { dom:'rto',   text:'Answers the abandonment question with care and honesty: leaving is a fact, abandoning is a choice — and everything in this plan is him choosing not to' },
      { dom:'rto',   text:'Dismantles the "sorted by Friday" fantasy without crushing him: diagnosis takes months; what fits in four days is the conversation with mum, the GP booking, the bank phone call, and the LPA forms started' },
      { dom:'rto',   text:'Keeps Grace a person, not a problem: she laughs it off, she plays bridge, she has the right to be spoken WITH — the plan happens with her, not to her' },
      { dom:'gs',    text:'Closes with the four-day checklist, dated and owned: who tells Grace (Daniel, before Wednesday), the booked review, the bank\u2019s vulnerable-customer team, LPA forms started online, Daniel\u2019s Singapore contact details on file, and the GP\u2019s commitment to ring him after Grace is seen — with her consent' },
    ],
    worked:[
      { lbl:'The rails, warmly',      txt:'"Daniel — breathe. Here\u2019s how this works: I can listen to every word, and your account is genuinely valuable — what I can\u2019t do is hand you information back about your mum. So pour it all out, and then we\u2019ll build a plan that gets her seen properly. Deal?"' },
      { lbl:'The pattern, named',     txt:'"A year of slow change, bills slipping, the same story three times — that pattern deserves proper memory assessment, and you\u2019re right to push. It is NOT an emergency happening this week, which matters, because it means Friday doesn\u2019t have to be a cliff edge."' },
      { lbl:'Sorted vs started',      txt:'"I\u2019ll be straight: \u2018sorted by Friday\u2019 doesn\u2019t exist — a memory diagnosis takes months and your mum\u2019s consent. But \u2018STARTED by Friday\u2019 absolutely exists, and started properly is worth more than sorted badly. Let me show you what fits in four days."' },
      { lbl:'The roofer, today',      txt:'"The roofer is the urgent bit — he\u2019s been back once and he\u2019ll be back again. Today: ring her bank\u2019s vulnerable-customer team, they can flag the account and watch for cash patterns. Report him to 101 and trading standards. And tell the neighbour you trust — a curtain that twitches is worth more than a camera."' },
      { lbl:'The LPA window',         txt:'"The power-of-attorney you never got round to — that\u2019s this week\u2019s job, and here\u2019s the hard truth kindly: LPA can only be GRANTED while she has capacity to grant it. The forms start online tonight. If you wait for the diagnosis, you may be applying to a court instead of signing a form."' },
      { lbl:'The abandonment answer', txt:'"You asked me to say you\u2019re abandoning her. I won\u2019t, because it isn\u2019t true — abandoning her would be getting on that plane having told nobody. What you\u2019re doing is the opposite: you\u2019re building the net before you go. Singapore has telephones, Daniel. The son who rings every Sunday and gets a call after every review hasn\u2019t gone anywhere that matters."' },
    ],
    learning:'A third-party memory call runs on the same rails as every third-party call — everything in, nothing out — but the content is a collateral history good enough to triage: gradual decline over a year with preserved ADLs points to the memory pathway, not delirium. The live jobs are protective and time-critical: the repeating doorstep scam (bank vulnerable-customer team, 101/trading standards), driving flagged for assessment, and the LPA window — grantable only while capacity remains. The hidden agenda is Friday: convert "sorted by Friday" into "started by Friday", answer the abandonment question honestly, and keep Grace — who has rights, humour and a bridge club — at the centre of her own story.',
    knowledge:{
      guideline:'NICE NG97 dementia · GMC confidentiality · MCA 2005 / OPG LPA guidance · DVLA fitness-to-drive',
      points:[
        { h:'Diagnose the pattern', t:'12 months of gradual cognitive decline (repetition, finance errors, topographical disorientation) with preserved self-care = suspected dementia for the memory pathway. Screen the mimics by phone: delirium triggers (none), depression ("laughs it off" — but assess HER, not his report), B12/thyroid/alcohol — bloods at the review.' },
        { h:'Red flags & same-day action', t:'Sudden-onset or stepwise change, new focal signs, head injury, or rapid decline over weeks → urgent assessment, not routine memory clinic. The actual urgency here is non-medical: a repeating financial predator with a return pattern.' },
        { h:'Investigate at the review', t:'With Grace\u2019s consent: confusion screen bloods (FBC, U&E, LFT, TFT, B12/folate, calcium, glucose ± HbA1c), structured cognition (GPCOG/ACE-III per local pathway), medication review, then memory-clinic referral. Collateral history from Daniel — by phone from Singapore is fine and should be planned.' },
        { h:'Manage the protective layer', t:'Bank vulnerable-customer/scam-protection flag TODAY; 101 + trading standards report; trusted-neighbour alert. LPA (health & welfare AND property & finance) started while capacity to grant remains — after capacity is lost, the family faces the Court of Protection instead. Driving: flag now, assess at review; DVLA notification required if dementia is diagnosed and she continues driving.' },
        { h:'Never do', t:'Never discuss Grace\u2019s records with an unauthorised caller; never arrange covert assessment ("we\u2019ll test her without telling her why"); never let the son\u2019s deadline compress a months-long pathway into a panicked week; never bypass Grace — she is the patient, with capacity until shown otherwise.' },
        { h:'Safety-net & follow-up', t:'The four-day checklist dated and owned before the call ends; Daniel\u2019s overseas contacts on file with Grace\u2019s consent sought at review; the GP\u2019s promise — a call after she\u2019s seen (consent permitting); if she refuses all assessment, the door stays open and the protective layer (bank, neighbours, LPA conversation) proceeds anyway.' },
        { h:'Marking edge', t:'"I\u2019m abandoning her, aren\u2019t I? Just say it" is the consultation\u2019s heart. Confirm it and he collapses; wave it away and he doesn\u2019t believe you. The Clear Pass redefines it — leaving is a fact, abandoning is a choice — and hands him the four dated jobs that prove which one he\u2019s making.' }
      ]
    }
  };

  /* ============ 26. VIDEO — The head teacher who tests herself ============ */
  const c26 = {
    id:'memory-self', title:'The woman who marks her own memory', type:'video', duration:12,
    meta:{ age:62, sex:'F', setting:'Video consultation — booked by the patient: "memory check".', system:'Memory / Mind' },
    brief:'Mrs Eleanor Voss, 62, head teacher of a large primary school, has booked a video appointment for "a memory check". PMH: nil significant; last attended 3 years ago. Records note: mother died in a nursing home (early-onset Alzheimer\u2019s, diagnosed at 68 — recorded in family history at a 2019 appointment). She has a notebook in shot, with what look like dated entries.',
    script:{
      opening:'"Thank you for seeing me, doctor. I\u2019ll be efficient — I run a school, efficiency is the job. Three things have happened: I lost the word \u2018invigilate\u2019 in front of my deputy — just gone, mid-sentence. I missed a governors\u2019 meeting that was in my diary. And on Tuesday I called a Year Six child by her sister\u2019s name — the sister left four years ago. I\u2019d like a proper memory test, please. The real one, not the three-words-and-an-address one. I\u2019ve done that one online. Eleven times."',
      facts:[
        { topic:'The episodes',      text:'Word-finding lapses under pressure, one missed meeting in a term of ~60, a name substitution. Each instantly noticed, vividly remembered, and recorded in the notebook with dates and "conditions" — like a scientist. No one else has noticed anything.' },
        { topic:'Function',          text:'Running a 480-pupil school through an Ofsted year: budgets, safeguarding files, 42 staff. Learns every new intake\u2019s names by October. Navigates fine, manages finances perfectly, no repetition. Objectively: a high performer under heavy load.' },
        { topic:'The load',          text:'If asked: sleeping 5 hours (4:45am waking, mind racing through staffing), skipping lunch, wine "two glasses, most nights, to switch off", last real holiday two years ago. Menopause at 53; recent return of flushes and night sweats since stopping HRT 18 months ago ("it seemed time").' },
        { topic:'Her mother',        text:'Only when trust allows: diagnosed at 68 — but "different by 63, looking back. The notebook is because nobody believed Mum until it was too late. I\u2019ve been testing myself since the funeral." Visits ended with her mother asking who she was. "I will not put my family through that without a head start."' },
        { topic:'The job fear',      text:'Deeper still: "If this goes on a record and the governors hear \u2018memory\u2019 and \u2018head teacher\u2019 in one sentence, I\u2019m finished — they\u2019d dress it as concern." She has told no one: not her husband, not her GP until today.' },
        { topic:'What she wants',    text:'The "real" test, a baseline on paper, and the truth about her risk given her mother. What she needs as well: the load named, the sleep and alcohol and HRT conversation, and an ally who neither dismisses nor catastrophises.' },
      ],
      ice:{
        ideas:'Early Alzheimer\u2019s, starting exactly as her mother\u2019s did. The notebook is her evidence file.',
        concerns:'HIDDEN AGENDA — two-layered: she has been secretly testing herself for SIX YEARS (the online test, eleven times), driven by watching her mother go unheard; and the employment terror — that any memory entry in her record ends her headship. The husband doesn\u2019t know about any of it.',
        expectations:'A formal cognitive assessment, a documented baseline, an honest familial-risk conversation — and discretion. Will interpret reassurance-without-testing as "exactly what Mum\u2019s doctors did".'
      },
      cues:['The notebook in shot — dated, conditions noted; six years of secret self-surveillance announcing itself silently.','"Eleven times" — the online test count, delivered as efficiency; it\u2019s the depth of the fear, quantified.','"They\u2019d dress it as concern" — the employment terror surfacing as a throwaway about governors.']
    },
    checkpoints:[
      { dom:'tasks', text:'Takes the episodes seriously and characterises them properly: lapses noticed BY the patient, vividly recalled, under extreme load, with intact complex function — the pattern of subjective concern + overload, distinct from the dementia pattern (deficits noticed by others, forgotten by the patient)' },
      { dom:'tasks', text:'Hunts the treatable load: 5-hour sleep with 4:45 waking, nightly alcohol, skipped meals, vasomotor symptoms since stopping HRT — each independently capable of producing exactly her three episodes' },
      { dom:'tasks', text:'Agrees to REAL assessment rather than batting it away: bloods (TFT, B12, etc.), a validated structured test now as baseline, explicit offer of repeat testing at interval — "we measure, we don\u2019t guess" — with memory-clinic referral if objective deficits emerge' },
      { dom:'tasks', text:'Handles the familial-risk question honestly: most Alzheimer\u2019s is not strongly inherited; a single affected parent at 68 raises risk modestly; deterministic genes are rare and usually strike younger — and genetic counselling exists if she wants the formal version' },
      { dom:'rto',   text:'Finds the notebook story and the six years of secret testing — and honours the vigilance instead of pathologising it: "nobody believed your mother; you\u2019ve made sure somebody would believe you"' },
      { dom:'rto',   text:'Surfaces the employment terror and answers it precisely: what gets recorded, who can see it, that occupational disclosure is HER choice at this stage — and that a normal baseline on paper is protection, not threat' },
      { dom:'rto',   text:'Opens the husband question without forcing it: six years of carrying this alone is its own pathology — who could share it?' },
      { dom:'gs',    text:'Safety-nets both directions: the changes that WOULD change everything (others noticing, function slipping, getting lost, repetition she doesn\u2019t recall) named explicitly so surveillance has proper targets; sleep/alcohol/HRT plan with review booked; baseline test scheduled and the repeat dated' },
    ],
    worked:[
      { lbl:'Take it seriously first', txt:'"You\u2019ve come with data, so let\u2019s do this properly: a real, validated assessment today as your baseline, bloods this week, and a repeat at a fixed interval. We measure, we don\u2019t guess. AND while we measure, I want to examine the conditions this brain is running under — because they\u2019d explain every entry in that notebook."' },
      { lbl:'The pattern, taught',    txt:'"Here\u2019s the distinction that matters most in this field: you noticed every lapse, remember each one vividly, and wrote them down. Dementia\u2019s cruelty is the opposite — the person doesn\u2019t notice; everyone else does. Your deputy has noticed nothing. Your notebook is, paradoxically, the most reassuring document you could have brought me."' },
      { lbl:'The load, named',        txt:'"Five hours\u2019 sleep, a 4:45 brain full of staffing grids, wine to come down, no lunch, flushes back since the HRT stopped, and an Ofsted year. Eleanor — I could produce your three episodes in a 25-year-old with that regime. We treat the conditions BEFORE we interpret the test."' },
      { lbl:'Mum, honoured',          txt:'"Tell me about the notebook — when did it start? … Six years. Nobody believed your mother until it was too late, so you built the evidence file she never had. That\u2019s not neurosis — that\u2019s love with a clipboard. And it means when I tell you a result, you\u2019ll know it was properly looked for."' },
      { lbl:'The risk, honestly',     txt:'"The question under all of this: your mother at 68. Honestly — one parent affected in their late sixties nudges your risk up modestly; it is nowhere near a sentence. The fiercely inherited forms are rare and usually strike decades younger than you are now. If you want the formal version of this conversation, genetic counselling exists and I\u2019ll refer you. But the odds are with you, and today\u2019s baseline puts numbers where the 3am fear lives."' },
      { lbl:'The governors',          txt:'"And the fear behind the fear: nothing about today obliges any conversation with your governors. A memory CHECK with a normal baseline is your shield, not your scar — if anyone ever raises \u2018concern\u2019, you\u2019ll be the one holding documented evidence. What you disclose to work, and when, stays your decision while your function is intact — and your function, on today\u2019s showing, is running a small country."' },
    ],
    learning:'Subjective memory complaints in a high-functioning patient — lapses noticed and vividly recalled by the patient, invisible to others, under heavy load — point away from dementia, whose signature is the reverse (others notice, the patient doesn\u2019t recall). But reassurance-without-assessment fails this patient: offer the real baseline test, bloods, and a dated repeat, while treating the reversible load (sleep restriction, nightly alcohol, vasomotor symptoms post-HRT). Familial risk is answered with honest numbers, not deflection. The hidden agenda is double — six years of secret self-testing born of an unbelieved mother, and the employment terror — both must be found, honoured and answered precisely.',
    knowledge:{
      guideline:'NICE NG97 dementia (assessment) · NICE NG23 menopause · CKS memory problems',
      points:[
        { h:'Diagnose the pattern', t:'Patient-noticed, vividly-recalled lapses + intact complex function + no informant concern = subjective cognitive concern, overwhelmingly load-related at 62. Dementia\u2019s pattern: informant-noticed deficits the patient minimises or forgets, progressive functional slippage. The "who noticed?" question does most of the diagnostic work.' },
        { h:'Red flags that change the lane', t:'Informant-corroborated decline, episodes the patient does NOT recall, topographical disorientation, repetition without awareness, functional slippage (bills, safeguarding files), focal neurology, or rapid progression → structured assessment and memory-clinic referral without delay.' },
        { h:'Investigate — measure, don\u2019t guess', t:'Bloods: FBC, U&E, LFT, TFT, B12/folate, calcium, glucose/HbA1c. Validated baseline cognition (ACE-III/MoCA per local pathway) with a DATED repeat — serial measurement beats single snapshots. Depression and alcohol screens woven in (AUDIT-C; her "two glasses most nights" is \u224820+ units/week).' },
        { h:'Manage the reversible load', t:'Sleep restriction therapy logic for the 4:45 waking; alcohol as sleep-architecture saboteur named without moralising; HRT discussion reopened — vasomotor symptoms and sleep disruption since stopping at 60 are treatable and cognition-relevant (NG23: for most women under 60\u201365 with symptoms, benefits outweigh risks; individualise); a real holiday prescribed in writing.' },
        { h:'The familial-risk answer', t:'One parent with Alzheimer\u2019s diagnosed at 68: modest relative-risk elevation, no determinism. Autosomal-dominant forms (PSEN1/2, APP) are rare and typically present in the 30s\u201350s. APOE testing is not clinically recommended for prediction. Offer genetic counselling referral if she wants formal quantification — her choice, stated as such.' },
        { h:'Safety-net & follow-up', t:'Give her surveillance PROPER targets (others noticing, unrecalled repetition, navigation failures, function slipping) to replace the notebook\u2019s anxious ones; baseline test booked, repeat dated, bloods chased; review in 6\u20138 weeks on the sleep/alcohol/HRT plan; the husband conversation seeded; the door explicitly open — "the notebook retires; I take over the watching."' },
        { h:'Marking edge', t:'Eleven online tests and a six-year notebook are the consultation. Dismiss the fear ("you\u2019re fine, you\u2019re just stressed") and she joins her mother\u2019s doctors in her private ledger of people who didn\u2019t look. The Clear Pass tests properly AND treats the load, honours the notebook as love-with-a-clipboard, answers the governors fear with precision — and takes over the watching so she can stop.' }
      ]
    }
  };

  /* ============ 27. TELEPHONE — The 3am husband ============ */
  const c27 = {
    id:'dementia-night', title:'Something to make her sleep', type:'telephone', duration:12,
    meta:{ age:81, sex:'F', setting:'Telephone — husband (carer) calling at the end of his rope.', system:'Dementia / Carer crisis' },
    brief:'Mrs Joan Tully, 81, Alzheimer\u2019s diagnosed 3 years ago, cared for at home by her husband Frank, 83. Meds: donepezil 10 mg. Frank rings: six weeks of worsening nights — Joan gets up at 2\u20133am, dresses, tries the front door "to go and see her mother", becomes tearful and resistive when steered back. Frank is sleeping "two, three hours in bits". He wants "something to make her sleep — there must be a tablet". Records: Joan\u2019s OA knees; her last review noted she "grimaces on standing". Frank\u2019s own records: BP up at his last check, attended once in 5 years.',
    script:{
      opening:'"Doctor, it\u2019s Frank Tully — Joan\u2019s husband. I\u2019ll not waste your time: I need something to make her sleep. A proper tablet. She\u2019s up at two, three in the morning, dressed, rattling the front door wanting her mother — her mother died in 1987, doctor. I steer her back and she cries and fights me and then at breakfast she\u2019s my Joan again and remembers none of it. I can\u2019t… (long pause) I\u2019m eighty-three. I can\u2019t keep doing nights."',
      facts:[
        { topic:'The nights',        text:'Six weeks, most nights, 2\u20133am: dresses, door, "going to see Mother", tearful resistance when redirected, settles after 1\u20132 hours of Frank\u2019s patient talking. Worse since the clocks changed and since Joan\u2019s knees "have been giving her gyp".' },
        { topic:'The days',          text:'If asked: Joan naps 11\u20131 and again after tea ("it\u2019s the only peace I get, I let her sleep"). Tea and biscuits through the afternoon. TV until 10. Curtains thin — streetlight floods the room. She walks less than she did — the knees.' },
        { topic:'The knees',         text:'Grimaces on standing, rubs them at night, paracetamol "now and then, when she remembers — well, when I remember". Nobody has reviewed her pain since the dementia advanced; she can\u2019t reliably report it herself.' },
        { topic:'Frank\u2019s state',   text:'2\u20133 hours\u2019 broken sleep, chest "tight" twice last week climbing the stairs (dismissed: "just tired"), no day off in two years, son in Plymouth "has his own troubles", carers refused by Joan early on and never re-offered.' },
        { topic:'The confession',    text:'Only if his exhaustion is heard without judgement: "Last Tuesday, at the door, I grabbed her arm. Hard. Properly hard — there\u2019s a mark, doctor. I frightened myself. My Joan, sixty years, and I left a mark on her. That\u2019s really why I\u2019m ringing. I don\u2019t trust myself at 3am any more."' },
        { topic:'What he wants',     text:'Officially: a sleeping tablet for Joan. Actually: to confess Tuesday, to be told whether he\u2019s become dangerous, and for someone to take the nights off him before something worse happens.' },
      ],
      ice:{
        ideas:'"A tablet for her" — sedate the problem. He\u2019s heard "they can give them something" at the carers\u2019 coffee morning he went to once.',
        concerns:'HIDDEN AGENDA — Tuesday\u2019s grabbed arm and the mark it left. He believes he is becoming a danger to the woman he\u2019s loved for sixty years, and the sleeping-tablet request is the only way he can open the door to confessing it.',
        expectations:'A prescription tonight. What he needs: the confession received without destroying him, the nights re-engineered (pain, naps, light, routine), real respite, and his own chest pain taken seriously.'
      },
      cues:['"I\u2019m eighty-three. I can\u2019t keep doing nights." — the carer is the second patient; this sentence is HIS presenting complaint.','"Chest\u2019s been tight on the stairs — just tired" — dropped in passing; an 83-year-old with new exertional chest tightness is its own urgent consultation.','The long pause before "I\u2019ll not waste your time" cracks — and later: "That\u2019s really why I\u2019m ringing." The tablet was never the agenda.']
    },
    checkpoints:[
      { dom:'tasks', text:'Hunts the drivers of the 2am waking instead of reaching for sedation: untreated OA pain (grimacing, rubbing, PRN paracetamol she can\u2019t request), two daytime naps, afternoon tea (caffeine), streetlit room, evening TV light, reduced daytime activity — each named as fixable' },
      { dom:'tasks', text:'Declines the sleeping tablet with the honest reason: Z-drugs/benzodiazepines in dementia = falls, fractures, worse confusion, faster decline; antipsychotics carry stroke and death warnings and are reserved for severe distress/risk after specialist input — "the tablet that makes tonight quieter makes every week after worse"' },
      { dom:'tasks', text:'Treats the treatable TODAY: regular (not PRN) paracetamol for the knees — pain she cannot report needs scheduled analgesia; sleep-environment prescription (blackout, nap cap, caffeine cut-off, morning daylight walk); donepezil timing checked (evening dosing can disturb sleep — move to morning)' },
      { dom:'tasks', text:'Takes Frank\u2019s chest pain seriously as its own presentation: new exertional tightness at 83 = urgent assessment for HIM this week, framed as non-negotiable — "Joan\u2019s care plan collapses without you, and that\u2019s the least important reason"' },
      { dom:'rto',   text:'Receives the Tuesday confession without flinching or minimising: names it as a system failure landing on one exhausted man, not a monster emerging — "the danger isn\u2019t you, Frank; it\u2019s 3am alone, two years without a night off"' },
      { dom:'rto',   text:'Is honest about what the mark means procedurally — gently: it gets documented, Joan gets seen (tomorrow\u2019s visit), and the help that arrives is support, not accusation; secrecy is what makes 3am dangerous, and he\u2019s just ended it' },
      { dom:'rto',   text:'Re-opens the refused-carers question at the right level: Joan refused strangers three years ago; the offer has never been remade — night-sitting service, day centre two days a week, Admiral Nurse, carer\u2019s assessment, respite — started this week, not "looked into"' },
      { dom:'gs',    text:'Safety-nets both patients: Joan — tomorrow\u2019s review visit (knees, mark, medication, weight); Frank — chest pain worse/at rest/with sweating = 999 tonight, GP appointment booked for HIM this week; crisis numbers (Admiral Nurse/dementia support line) given; the GP\u2019s follow-up call dated — "you don\u2019t carry another Tuesday alone"' },
    ],
    worked:[
      { lbl:'The tablet, answered',   txt:'"Frank, I\u2019m going to be straight, because you deserve straight: the sleeping tablets that exist make dementia worse — more falls, more confusion, faster decline. They\u2019d buy you a quieter Tuesday and cost Joan the rest of the year. But I am NOT leaving you with nothing — there\u2019s a list of things driving these nights, and most of them we can fix this week."' },
      { lbl:'The knees, first',       txt:'"Start with the thing nobody\u2019s treating: her knees. She grimaces standing and rubs them at night — Joan can\u2019t tell you it hurts any more, so the pain wakes her instead, at 2am, dressed for 1987. Regular paracetamol, morning and night, every day — not when she asks, because she can\u2019t ask. Pain is the commonest sleeping tablet nobody prescribes."' },
      { lbl:'The nights, re-engineered', txt:'"Then the engineering: the two naps go down to one short one before lunch; tea becomes decaf after two; blackout lining behind those thin curtains; a walk in morning daylight, even ten minutes — daylight is the dial that sets her clock. And her donepezil moves to the morning; taken at night it can stir dreams and waking. None of this is dramatic. Together they\u2019re stronger than any tablet I could give her."' },
      { lbl:'Tuesday, received',      txt:'"Now the thing you actually rang about. … Frank, listen to me carefully. A man who grabs an arm at 3am after two years of no sleep and no help is not a dangerous man — he\u2019s an abandoned one. The mark on Joan\u2019s arm is the system\u2019s mark, and it landed through your hand because you were the only one there. You frightened yourself because you\u2019re a good man. Dangerous men don\u2019t ring their doctor about it."' },
      { lbl:'What happens with it',   txt:'"Here\u2019s what happens now, and I want you to hear it as help, not trouble: I write down what you\u2019ve told me, I come and see Joan tomorrow — knees, the arm, the lot — and the support that should\u2019ve been there two years ago starts this week: a night-sitter so you SLEEP, a day centre so you breathe, a nurse whose whole job is families like yours. Telling me was the bravest thing you\u2019ve done in this whole illness. Secrecy was the dangerous part — and you\u2019ve just ended it."' },
      { lbl:'Frank\u2019s chest',       txt:'"One more thing, and I\u2019m not letting it go: tight chest on the stairs, twice, at eighty-three — that\u2019s not \u2018just tired\u2019, that\u2019s a heart asking for attention. You\u2019re booked in this week, no arguments. And if it comes on at rest, or with sweating, or won\u2019t ease — that\u2019s 999 tonight, and you tell them about Joan and they\u2019ll sort her too. You\u2019ve kept Joan alive for three years, Frank. This week, somebody looks after you."' },
    ],
    learning:'Night-time disturbance in dementia is a cause-hunt, not a prescription: untreated pain (schedule analgesia — she cannot request PRN), daytime napping, caffeine, light, inactivity, and cholinesterase-inhibitor timing all drive 2am waking — while Z-drugs worsen falls and confusion, and antipsychotics carry stroke/death warnings reserved for severe risk after specialist input. The carer is the second patient: new exertional chest pain at 83 is its own urgent presentation. The hidden agenda is the confession — a grabbed arm and a mark — received without panic as carer breakdown, documented honestly, answered with same-week respite and review rather than accusation. Secrecy, not Frank, was the danger.',
    knowledge:{
      guideline:'NICE NG97 (BPSD) · NICE CG161 falls · Alzheimer\u2019s Society / Admiral Nurse pathways · safeguarding (Care Act) proportionality',
      points:[
        { h:'Diagnose the 2am waking', t:'Sundowning + drivers: untreated OA pain (grimace-on-standing in a patient who can\u2019t self-report = treat scheduled, not PRN), two daytime naps, afternoon caffeine, streetlight, evening screen light, deconditioning, and donepezil taken at night (vivid dreams/insomnia — move to morning). "Going to see Mother" is time-shifted reality, not random — redirect, never correct harshly.' },
        { h:'Red flags & same-day action', t:'FRANK is the red flag: new exertional chest tightness at 83 → urgent assessment this week, 999 coaching for rest pain/sweating tonight. For Joan: rapid change over days (delirium screen), the arm mark examined and documented at tomorrow\u2019s visit.' },
        { h:'The sedation answer', t:'Z-drugs/benzos in dementia: falls, fractures, paradoxical agitation, accelerated decline — avoid. Antipsychotics (risperidone is the only licensed option, short-term): reserved for severe distress or risk to self/others, after specialist input, with the stroke/mortality warning explicit. Melatonin: weak evidence in dementia; not the answer to an unengineered night.' },
        { h:'Manage what\u2019s driving it', t:'Scheduled paracetamol for OA; nap restructuring; caffeine cut-off; blackout + morning daylight; donepezil to morning; meaningful daytime activity (day centre doubles as both). Review weight, bowels, bladder (nocturia drivers) at tomorrow\u2019s visit.' },
        { h:'The confession — proportionate safeguarding', t:'A carer-strain incident disclosed by the carer himself: document factually, examine Joan, assess pattern vs single exhaustion-driven event, and respond with SUPPORT (night-sitting, respite, day centre, Admiral Nurse, carer\u2019s assessment — this week, named) — escalating to formal safeguarding if pattern, injury beyond the disclosed, or refusal of support. Compassion and vigilance are not alternatives; deliver both.' },
        { h:'Safety-net & follow-up', t:'Tomorrow\u2019s home visit (Joan: knees, arm, meds); Frank\u2019s own appointment booked before the call ends; 999 triggers for his chest said twice; Admiral Nurse/dementia support line numbers given; the GP\u2019s follow-up call dated — the explicit contract: "another bad night is a phone call, not a secret".' },
        { h:'Marking edge', t:'The sleeping-tablet request is the envelope; Tuesday\u2019s mark is the letter. Candidates who fight the tablet request win the argument and lose the confession. The Clear Pass answers the tablet honestly, fixes the fixable nights, hears "that\u2019s really why I\u2019m ringing" — and receives it as carer breakdown needing rescue, not crime needing punishment, while still seeing Joan tomorrow with open eyes.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c25, c26, c27);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'memory-son-call': {
      ceg: ['Older adults', 'Professional & ethical dilemmas'],
      stem: {
        name: 'Grace Okafor (caller: son)', age: '79 years · female',
        pmh: ['Hypertension — well controlled', 'Last seen 8 months ago (BP review, no concerns noted)'],
        meds: ['Amlodipine 5 mg OD'],
        allergy: 'NKDA',
        recent: '⚠ Son (Daniel, 47) requesting urgent call-back re: mother\u2019s memory — "a year of decline, and a £900 doorstep scam last month". NO consent on file to discuss patient with son. Son states he emigrates Friday.',
        reason: 'Telephone — third-party call about cognition (no consent on file).'
      },
      timeMap: [
        { t:'0–1',  h:'Rails, warmly',        d:'He\u2019s braced for the wall — disarm it: everything flows in, nothing flows out, and his account is valuable. The Friday deadline lands in sentence three; bank it.' },
        { t:'1–5',  h:'Collateral history',    d:'The year\u2019s pattern vs delirium screen; what\u2019s preserved (bridge, self-care); the roofer\u2019s RETURN visit; driving; the LPA that was never done.' },
        { t:'5–6',  h:'Summarise & share',     d:'"A year of gradual change deserves proper memory assessment — started right, with your mum at the centre. And the roofer is this week\u2019s real emergency."' },
        { t:'6–10', h:'Started-by-Friday',     d:'The four-day checklist: Daniel tells Grace honestly; review booked; bank vulnerable-customer flag + 101/trading standards today; LPA forms started while capacity remains; Singapore contact details on file.' },
        { t:'10–12',h:'Safety-net & close',    d:'The abandonment question answered with the distinction (leaving \u2260 abandoning); GP\u2019s promise to call after Grace is seen, with her consent; sudden-change triggers that would upgrade the urgency.' }
      ],
      wordPics: {
        fail: 'Recites confidentiality and ends the call with nothing received (the scam risk walks free); or promises to "sort it all" — covert testing, records discussed, Grace bypassed entirely; the LPA window never mentioned; Friday treated as either irrelevant or unchallengeable.',
        pass: 'Sets the rails and takes a usable collateral history; distinguishes gradual decline from delirium; plans the route in via Grace\u2019s consent; handles the scam and flags driving and LPA; converts "sorted" to "started" with dated jobs.',
        exc:  'The first thirty seconds disarm a man braced for a wall; the collateral history is good enough to triage; the roofer treated as the live emergency it is (bank, 101, neighbour — today); the LPA window explained with its hard deadline; the abandonment question answered with precision and kindness; and Grace — bridge club, humour, rights — kept a person at the centre of her own assessment throughout.'
      },
      avoid: [
        { dont:'"I\u2019m afraid I can\u2019t discuss your mother with you without her consent."', instead:'"Here\u2019s how this works: I can listen to every word — and what you\u2019ve seen matters clinically. What I can\u2019t do is hand information back. So tell me everything, and then we\u2019ll get her seen properly."', why:'The wall he\u2019s braced for loses the collateral history AND the scam disclosure; the rails keep both.' },
        { dont:'"Could you bring her in without worrying her — we could check her memory while she\u2019s here for something else?"', instead:'"The plan starts with honesty: you tell her you\u2019re worried because you love her, and you\u2019ve booked her a check-up. People sense an ambush — and one ambush can cost every appointment after it."', why:'Covert assessment violates her autonomy and reliably backfires into total disengagement.' },
        { dont:'"Four days isn\u2019t enough — this will all have to wait until you\u2019re settled over there."', instead:'"\u2018Sorted by Friday\u2019 doesn\u2019t exist — but \u2018started by Friday\u2019 does, and started properly beats sorted badly. Four jobs, four days, and you board that plane with the net built."', why:'Deferring everything abandons the live scam risk and confirms his guilt; the reframe converts panic into a checklist.' }
      ]
    },

    'memory-self': {
      ceg: ['Older adults', 'Mental health & addiction'],
      stem: {
        name: 'Eleanor Voss', age: '62 years · female',
        pmh: ['Menopause age 53; HRT stopped 18 months ago', 'FH (recorded 2019): mother — early-onset Alzheimer\u2019s, diagnosed 68, died in nursing home'],
        meds: ['No regular medication'],
        allergy: 'NKDA',
        recent: 'Self-booked: "memory check". Last attended 3 years ago. Occupation on file: head teacher. No informant concerns recorded; no prior cognitive complaints.',
        reason: 'Video consultation — patient-requested memory assessment.'
      },
      timeMap: [
        { t:'0–1',  h:'Open & listen',        d:'Three rehearsed episodes, delivered with bullet-point efficiency — and a notebook in shot. "Eleven times" is the depth of the fear, quantified. Take it seriously FIRST; reassurance now reads as dismissal.' },
        { t:'1–5',  h:'Two histories',         d:'The episodes characterised (who noticed? recalled how?) — then the conditions: 5-hour sleep, 4:45 waking, nightly wine, no lunch, flushes since HRT stopped, Ofsted year. Then the question that opens everything: "When did the notebook start?"' },
        { t:'5–6',  h:'Summarise & share',     d:'"You noticed every lapse and remember each vividly — dementia\u2019s pattern is the reverse. AND the conditions your brain is running under would produce these episodes in anyone. We test properly, and we treat the conditions."' },
        { t:'6–10', h:'Measure + treat',       d:'Baseline ACE/MoCA booked, bloods, dated repeat; the load plan (sleep, alcohol named kindly, HRT reopened per NG23); the familial-risk answer with honest numbers; genetic counselling offered as her choice.' },
        { t:'10–12',h:'Safety-net & close',    d:'Proper surveillance targets to replace the notebook\u2019s; the governors fear answered with precision (her record, her disclosure choice, a normal baseline as shield); the husband conversation seeded; review dated. "The notebook retires — I take over the watching."' }
      ],
      wordPics: {
        fail: 'Pats it away ("you\u2019re just stressed — you should slow down") with no test, no bloods, no follow-up — joining her mother\u2019s doctors in the ledger; or catastrophises: straight to memory clinic with "given your mother…", confirming six years of 3am fear in one sentence; the load never examined; the notebook never asked about.',
        pass: 'Characterises the episodes correctly; screens and treats the load (sleep, alcohol, HRT); does a real baseline with bloods and a dated repeat; answers the familial-risk question honestly; addresses the work fear; books review.',
        exc:  'The notebook found and honoured ("love with a clipboard"); the who-noticed distinction taught so SHE can use it; the load treated as the probable cause without dismissing the fear; the risk numbers delivered with warmth and an offered genetics referral; the governors terror answered precisely (baseline as shield, disclosure as her choice); six years of solitary vigilance ended with one sentence — the doctor takes over the watching.'
      },
      avoid: [
        { dont:'"Honestly, this all sounds like stress — I wouldn\u2019t worry about dementia at your age."', instead:'"I\u2019m taking this seriously enough to measure it properly — baseline today, bloods this week, repeat in six months. AND I think the conditions your brain is running under explain these episodes. Both things are true."', why:'Unmeasured reassurance is exactly what her mother received; she will hear it as not being looked at.' },
        { dont:'"With your family history, we should get you into the memory clinic to be safe."', instead:'"Your mother\u2019s illness raises your risk modestly — nowhere near a sentence — and your pattern today doesn\u2019t look like hers. We start with a proper baseline and the fixable causes. The clinic stays available if the numbers ever say so."', why:'A reflex referral "because of Mum" confirms her catastrophe and medicalises a load problem.' },
        { dont:'"You\u2019ll need to think about whether you should be running a school if you\u2019re worried about your memory."', instead:'"Nothing about today goes anywhere near your governors. While your function is intact — and it audibly is — what you disclose to work, and when, is your decision. A documented normal baseline is your shield, not your scar."', why:'Echoing the employment threat she fears most ends the disclosure and possibly the consultation series.' }
      ]
    },

    'dementia-night': {
      ceg: ['Older adults', 'Health disadvantage & vulnerabilities'],
      stem: {
        name: 'Joan Tully (caller: husband/carer)', age: '81 years · female',
        pmh: ['Alzheimer\u2019s disease — diagnosed 3 years ago', 'OA knees — last review noted "grimaces on standing"', 'Carers declined by patient 3 years ago; never re-offered'],
        meds: ['Donepezil 10 mg ON', 'Paracetamol PRN (rarely given)'],
        allergy: 'NKDA',
        recent: '⚠ Husband Frank, 83 (carer), rings: 6 weeks of 2\u20133am waking — dresses, tries front door "to see her mother", tearful resistance. Requests "something to make her sleep". Frank\u2019s own record: BP raised at last check; attends rarely.',
        reason: 'Telephone — night-time disturbance in dementia; carer request for sedation.'
      },
      timeMap: [
        { t:'0–1',  h:'Open & listen',        d:'The tablet demand is the envelope. "I\u2019m eighty-three. I can\u2019t keep doing nights" is the real presenting complaint — log both, interrupt neither.' },
        { t:'1–5',  h:'Cause-hunt + Frank',    d:'The night pattern; then the drivers: knees (grimacing, PRN she can\u2019t request), two naps, afternoon tea, streetlight, donepezil at night. And Frank\u2019s own screen: sleep, the stairs chest-tightness, two years without a break.' },
        { t:'5–6',  h:'Summarise & share',     d:'"The tablets that exist would make Joan worse — but these nights have five fixable drivers, and we fix them this week. And Frank: you\u2019re my second patient on this call."' },
        { t:'6–10', h:'Fix + receive',          d:'Scheduled paracetamol, nap/caffeine/light engineering, donepezil to morning. Hold the space his exhaustion needs — Tuesday\u2019s confession arrives here. Receive it as breakdown, not crime; say what happens next honestly.' },
        { t:'10–12',h:'Both safety-nets',       d:'Joan: tomorrow\u2019s visit (knees, the arm, meds). Frank: his own appointment this week + 999 chest triggers tonight. Respite/Admiral Nurse started, not "looked into". Follow-up call dated: "another bad night is a phone call, not a secret."' }
      ],
      wordPics: {
        fail: 'Prescribes zopiclone or pushes for an antipsychotic to end the call (Joan falls within the fortnight); or refuses the tablet with a lecture and offers nothing — Frank hangs up, the confession unspoken, and next Tuesday there\u2019s a worse mark; his chest pain dismissed along with him; carers never re-offered.',
        pass: 'Declines sedation with honest reasons; finds the pain/nap/light/timing drivers and fixes them; hears the strain; takes the chest pain seriously and books him in; arranges the visit for Joan; starts respite conversations.',
        exc:  'The cause-hunt taught so Frank understands the nights instead of fearing them; pain treated as the unprescribed sleeping tablet it is; the confession received with the exact sentence he needs ("an abandoned man, not a dangerous one") while the procedural honesty is kept — documented, Joan seen tomorrow, support not accusation; the refused-carers history reopened at the right level; Frank converted from suspect to second patient, with his chest on a named appointment and 999 coaching. Two patients, both safer by morning.'
      },
      avoid: [
        { dont:'"We don\u2019t really use sleeping tablets in dementia — they do more harm than good."', instead:'"Straight answer: those tablets would cost Joan falls and faster decline — but I\u2019m not leaving you with nothing. These nights have five drivers and we can fix most of them this week, starting with the pain nobody\u2019s treating."', why:'The refusal-with-nothing is technically right and functionally abandons him at 3am — the confession never comes.' },
        { dont:'(After the confession) "I have to tell you that what you\u2019ve described is a safeguarding matter."', instead:'"Thank you for telling me — that took sixty years of love and a lot of courage. Here\u2019s what happens, and it\u2019s help, not trouble: I write it down, I see Joan tomorrow, and the support that should\u2019ve existed two years ago starts this week. Secrecy was the dangerous part. You\u2019ve ended it."', why:'Leading with procedure re-seals the secrecy in every carer who ever hears the story; honesty delivered as rescue keeps the door open AND protects Joan.' },
        { dont:'"Try to make sure she doesn\u2019t nap too much during the day."', instead:'"The naps are your only peace, I know — so we don\u2019t ban them, we trade them: one short one before lunch, and a day centre two days a week so the afternoon peace comes WITH her out of the house and you asleep on the sofa."', why:'Advice that costs the carer his only rest gets silently ignored; engineering that gives him MORE rest gets done.' }
      ]
    }
  });

})();
