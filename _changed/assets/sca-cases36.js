/* ============================================================
   Reasoning GP — Case Library batch 36: "Joints that mean more"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   Early-RA window of opportunity; reactive arthritis + hidden STI;
   carpal tunnel + systemic associations; X-ray-report reframing.
   No NG12 link forced. Pushes into SCA_CASES + SCA_EXTRAS.
   Load AFTER sca-cases35.js.
   ============================================================ */

(function(){

  /* ============ 137. VIDEO — Early rheumatoid arthritis: the window of opportunity ============ */
  const c137 = {
    id:'early-rheumatoid', title:'"My hands are stiff and swollen \u2014 I\u2019ll just take some ibuprofen"', type:'video', duration:12,
    meta:{ age:42, sex:'F', setting:'Video consultation \u2014 small-joint pain and stiffness.', system:'Rheumatology / Early rheumatoid arthritis' },
    brief:'Mrs Priya Sehgal, 42, teacher. ~8 weeks of pain, stiffness and SWELLING in the small joints of both hands (MCPs/PIPs) and wrists, SYMMETRICAL, with EARLY-MORNING STIFFNESS lasting ~2 hours, fatigue. Tender, boggy swelling of several MCPs on video/exam. She wants "stronger anti-inflammatories" and to carry on. Family history: her mother had rheumatoid arthritis and "ended up in a wheelchair". This is likely EARLY RHEUMATOID ARTHRITIS \u2014 needing URGENT rheumatology referral within the window of opportunity, not just NSAIDs.',
    script:{
      opening:'"Thanks doctor. My hands have been really achy and stiff for a couple of months \u2014 worse in the mornings, takes ages to get going, and the knuckles look a bit puffy. I\u2019m sure it\u2019s just wear and tear or too much marking. Could you give me some stronger anti-inflammatories so I can push through? I really can\u2019t take time off work for achy hands."',
      facts:[
        { topic:'Why this isn\u2019t \"wear and tear\"', text:'The pattern \u2014 SYMMETRICAL small-joint (MCP/PIP/wrist) pain WITH SWELLING, prolonged EARLY-MORNING STIFFNESS (>30\u201360 min, here ~2 hours), fatigue, over weeks \u2014 is INFLAMMATORY, not osteoarthritis/"wear and tear" (which is worse with use, brief stiffness, larger/weight-bearing or DIP joints). This is likely early RHEUMATOID ARTHRITIS. Boggy, tender joint swelling (synovitis) is the key sign.' },
        { topic:'The window of opportunity', text:'CRITICAL \u2014 early RA has a "window of opportunity": starting disease-modifying treatment (DMARDs) EARLY prevents joint damage and disability. NICE: refer URGENTLY to rheumatology anyone with suspected persistent synovitis of undetermined cause \u2014 and especially urgently if the small joints of hands/feet are involved, more than one joint is affected, or there has been a delay of \u22653 months. Do NOT just give NSAIDs and "review in a few months" \u2014 delay costs joints.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 her "just push through with ibuprofen" masks a deep, specific FEAR rooted in her mother\u2019s RA ("ended up in a wheelchair") \u2014 she half-suspects this is the same and is terrified of disability, losing her job and independence, so she\u2019s minimising to avoid facing it. There may also be a fertility consideration (RA, and some treatments like methotrexate, affect pregnancy planning). The reframe is powerful: unlike her mother\u2019s era, modern early treatment changes the outcome dramatically \u2014 catching it now is the opposite of her mother\u2019s fate.' },
        { topic:'Initial management',   text:'While referring urgently: bloods (FBC, ESR/CRP, rheumatoid factor, anti-CCP), consider a short course of NSAID with gastroprotection and/or a bridging steroid per local pathway for symptom relief, and X-rays of hands/feet \u2014 but the priority is the urgent referral, not waiting on results.' },
        { topic:'What she needs',       text:'Officially: stronger anti-inflammatories to carry on. What she needs: recognition of likely early RA (inflammatory pattern, synovitis), URGENT rheumatology referral within the window of opportunity, baseline bloods/X-rays and symptom relief, the mother-driven disability fear surfaced and reframed (early treatment changes the outcome), and fertility/work considerations acknowledged \u2014 not "NSAIDs and review".' },
      ],
      ice:{
        ideas:'It\u2019s just wear and tear / overwork; stronger anti-inflammatories will let her push through.',
        concerns:'HIDDEN AGENDA \u2014 her mother had RA and "ended up in a wheelchair"; she half-suspects this is the same and is terrified of disability, losing her job and independence, so she minimises; possible fertility considerations.',
        expectations:'Stronger anti-inflammatories to carry on. What she actually needs: recognition of likely early RA, urgent rheumatology referral within the window, baseline tests/symptom relief, and the disability fear surfaced and reframed (early treatment changes the outcome).'
      },
      cues:['Symmetrical small-joint swelling + prolonged morning stiffness over weeks \u2014 inflammatory (early RA), not "wear and tear".','Boggy MCP/wrist synovitis \u2014 the key sign; this needs URGENT referral within the window of opportunity, not just NSAIDs.','Mother with RA "in a wheelchair" \u2014 the disability fear driving the minimisation; reframe with modern outcomes.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the INFLAMMATORY pattern \u2014 symmetrical small-joint (MCP/PIP/wrist) pain WITH SWELLING/synovitis and prolonged early-morning stiffness over weeks \u2014 as likely EARLY RHEUMATOID ARTHRITIS, distinguishing it from osteoarthritis/"wear and tear", and does NOT just prescribe stronger NSAIDs to "push through"' },
      { dom:'tasks', text:'Refers URGENTLY to rheumatology, understanding the "window of opportunity": NICE recommends urgent referral for suspected persistent synovitis (especially small joints of hands/feet, >1 joint, or delay \u22653 months) \u2014 BEFORE bloods/X-ray results, because early DMARD treatment prevents joint damage' },
      { dom:'tasks', text:'Arranges baseline INVESTIGATIONS without delaying referral: FBC, ESR/CRP, rheumatoid factor and anti-CCP antibodies, and hand/feet X-rays \u2014 and knows a normal RF/CRP does NOT exclude RA (seronegative RA exists), so a negative test must not reassure away the referral' },
      { dom:'tasks', text:'Provides symptom relief appropriately as a bridge: NSAID with gastroprotection and/or a short bridging course of corticosteroid per local pathway \u2014 while making clear this is not the definitive treatment' },
      { dom:'tasks', text:'Considers the wider implications: impact on work/function, and FERTILITY/pregnancy planning (RA and some DMARDs \u2014 e.g. methotrexate \u2014 affect conception/pregnancy) \u2014 flagging these for the specialist pathway' },
      { dom:'rto',   text:'Surfaces the mother-driven DISABILITY fear and reframes it powerfully: unlike her mother\u2019s era, modern early treatment changes the outcome dramatically \u2014 catching it now is the opposite of her mother\u2019s fate \u2014 rather than colluding with "just push through"' },
      { dom:'rto',   text:'Validates the work/independence worries and engages her in the urgency, so she accepts referral rather than minimising' },
      { dom:'gs',    text:'Safety-nets and follows up: the urgent referral and baseline tests, symptom relief, what the specialist will do (DMARDs), fertility/work considerations, and a follow-up \u2014 treating likely early RA as the urgent, outcome-changing diagnosis it is, not "NSAIDs and review in a few months"' },
    ],
    worked:[
      { lbl:'Reframe \"wear and tear\"', txt:'"I can see why you\u2019d think wear and tear or overwork \u2014 but the pattern you\u2019re describing tells a different story. Pain and SWELLING in the small joints of both hands, symmetrical, with two hours of morning stiffness \u2014 that\u2019s not the picture of wear and tear, which eases with rest and stiffens only briefly. That\u2019s INFLAMMATION in the joints, and it needs taking seriously and quickly."' },
      { lbl:'Name it + the urgency', txt:'"What I\u2019m concerned about is early rheumatoid arthritis. And here\u2019s the crucial thing: with this, time genuinely matters. There\u2019s a window early on where starting the right treatment protects the joints and changes the whole future of it. So rather than just stronger painkillers, I\u2019m going to refer you URGENTLY to the joint specialists \u2014 today \u2014 because waiting costs joints."' },
      { lbl:'Surface the real fear', txt:'"Can I gently ask \u2014 your mum had rheumatoid arthritis, didn\u2019t she? \u2026 And ended up in a wheelchair. I suspect part of you has been dreading that this is the same, and that\u2019s why you wanted to just push through. That fear makes complete sense \u2014 and I want to give you some genuinely hopeful news about it."' },
      { lbl:'The hopeful reframe', txt:'"Your mum was treated in an era with far fewer options, often started too late. Today it\u2019s a completely different story: caught early, like yours, with modern treatments, most people keep working, stay active and never go near a wheelchair. Catching this NOW is the single best thing for avoiding your mum\u2019s outcome \u2014 it\u2019s the opposite of her fate, not a repeat of it."' },
      { lbl:'Tests + relief',      txt:'"I\u2019ll do some blood tests and hand X-rays to help the specialists \u2014 though I\u2019m referring you whatever they show, because a normal test doesn\u2019t rule this out. And I\u2019ll give you something to ease the pain and stiffness in the meantime, maybe a short course of steroid, so you\u2019re more comfortable while you wait."' },
      { lbl:'Wider picture + safety-net', txt:'"A couple of things to flag for the specialists \u2014 how this affects your work, and if you might want children, because that shapes which treatments they\u2019d use. I\u2019ll make sure that\u2019s in the referral. Come back if it flares badly or you\u2019re struggling. You came in wanting to push through achy hands; what I\u2019m doing instead is getting you seen fast, because that\u2019s what protects your future."' },
    ],
    learning:'Symmetrical small-joint (MCP/PIP/wrist) pain WITH swelling/synovitis and prolonged early-morning stiffness (>30\u201360 min) over weeks is an INFLAMMATORY pattern \u2014 likely early rheumatoid arthritis \u2014 NOT osteoarthritis/"wear and tear" (which worsens with use, stiffens only briefly, and favours larger/DIP joints). The examinable imperative is the "window of opportunity": early DMARD treatment prevents joint damage and disability, so NICE mandates URGENT rheumatology referral for suspected persistent synovitis (especially small joints of hands/feet, >1 joint, or \u22653 months\u2019 delay) \u2014 before bloods/X-ray results \u2014 rather than "NSAIDs and review", and a normal RF/CRP does NOT exclude RA (seronegative RA exists). Arrange baseline tests (FBC, ESR/CRP, RF, anti-CCP, hand/feet X-rays) and bridging symptom relief (NSAID + gastroprotection and/or short steroid course) without delaying referral, and flag work and fertility/pregnancy (methotrexate) considerations. The hidden agenda is a mother-driven disability fear ("ended up in a wheelchair") driving minimisation; surface it and reframe powerfully \u2014 modern early treatment changes the outcome, so catching it now is the opposite of her mother\u2019s fate.',
    knowledge:{
      guideline:'NICE NG100 rheumatoid arthritis · NICE referral for suspected RA · early-arthritis "window of opportunity"',
      points:[
        { h:'Inflammatory vs mechanical pattern', t:'Inflammatory (RA): symmetrical small-joint (MCP/PIP/wrist/MTP) pain WITH swelling/synovitis, prolonged early-morning stiffness (>30\u201360 min), better with use, systemic features (fatigue). Mechanical/OA: worse with use, brief stiffness, larger/weight-bearing or DIP joints, no soft-tissue synovitis. Boggy, tender joint swelling is the key inflammatory sign.' },
        { h:'Refer urgently \u2014 the window of opportunity', t:'NICE: refer for specialist (rheumatology) opinion any adult with suspected persistent synovitis of undetermined cause. Refer URGENTLY (even with normal acute-phase response/negative RF) if: the small joints of hands or feet are affected, more than one joint is affected, or there has been a delay of \u22653 months between symptom onset and seeking advice. Early DMARD treatment prevents irreversible joint damage \u2014 do not delay.' },
        { h:'Investigations don\u2019t gate referral', t:'Check FBC, ESR/CRP, rheumatoid factor and anti-CCP antibodies, and X-rays of hands/feet \u2014 but refer on clinical suspicion regardless of results. A normal CRP/ESR and a negative RF do NOT exclude RA (seronegative RA; anti-CCP adds specificity). Do not reassure away a clinical synovitis on negative bloods.' },
        { h:'Bridging symptom relief', t:'For symptom control while awaiting specialist review: NSAID with gastroprotection (PPI), and/or a short course of corticosteroid (oral/IM) per local pathway. Make clear this is symptomatic bridging, not the definitive disease-modifying treatment (DMARDs, started by specialists).' },
        { h:'Work, function and fertility', t:'Assess functional/occupational impact. Flag pregnancy planning: RA activity and several DMARDs (notably methotrexate, which is teratogenic and must be stopped well before conception in both sexes per guidance) affect family planning \u2014 important for the specialist pathway and for the patient.' },
        { h:'Reframe the disability fear', t:'Family experience of severe RA (often from an earlier treatment era) drives fear and minimisation. Modern early, treat-to-target DMARD therapy dramatically improves outcomes \u2014 most patients avoid significant disability. Surface the fear and offer this evidence-based, hopeful reframe to motivate prompt engagement.' },
        { h:'Never do', t:'Never label inflammatory small-joint synovitis as "wear and tear" and just give NSAIDs; never "review in a few months" instead of urgent referral; never wait for/be reassured by normal bloods or a negative RF; never miss the fertility/methotrexate consideration; never leave the disability fear unaddressed.' },
        { h:'Safety-net & follow-up', t:'Urgent rheumatology referral within the window; baseline bloods (FBC, ESR/CRP, RF, anti-CCP) and hand/feet X-rays without delaying referral; bridging symptom relief; flag work and fertility considerations; follow-up and review.' }
      ]
    }
  };

  /* ============ 138. VIDEO — Reactive arthritis & the hidden STI trigger ============ */
  const c138 = {
    id:'reactive-arthritis', title:'"My knee blew up out of nowhere \u2014 I haven\u2019t even injured it"', type:'video', duration:12,
    meta:{ age:27, sex:'M', setting:'Video consultation \u2014 acute knee swelling, no injury.', system:'Rheumatology / Reactive arthritis' },
    brief:'Mr Jordan Eze, 27. A few days of a painful, SWOLLEN, warm right KNEE (and a sore Achilles/heel), with no injury. He blames "twisting it at football". On exploration: ~3 weeks ago a bout of "food poisoning" (dysenteric diarrhoea) on a lads\u2019 holiday \u2014 and, if asked sensitively, unprotected sex with a new partner on that trip; possibly some gritty, red eyes and mild dysuria he\u2019s ignored. This is likely REACTIVE ARTHRITIS (post-GI or post-STI), with septic arthritis to exclude. He won\u2019t volunteer the sexual history.',
    script:{
      opening:'"Alright doc. My knee\u2019s come up massive and it\u2019s really sore \u2014 I reckon I twisted it at football last week. Could you give me some strong anti-inflammatories or maybe drain it? It\u2019s killing me. There\u2019s no need for a big examination or anything, I just need it sorted so I can get back to five-a-side. It\u2019s just a footy knee, right?"',
      facts:[
        { topic:'Exclude septic arthritis first', text:'A hot, swollen, acutely painful single joint must ALWAYS have SEPTIC ARTHRITIS excluded first \u2014 a joint-destroying emergency. Fever, marked systemic upset, inability to weight-bear and a very hot joint heighten concern; the safe pathway for a genuinely hot swollen joint is urgent assessment \u00b1 joint aspiration. Reactive arthritis is a diagnosis made alongside excluding sepsis, not instead of it.' },
        { topic:'The reactive-arthritis picture', text:'If the history is taken: an acute (oligo)arthritis, often a large joint (knee), days\u2013weeks AFTER a triggering infection \u2014 GASTROINTESTINAL (dysentery) or SEXUALLY transmitted (chlamydia) \u2014 \u00b1 enthesitis (Achilles/heel pain), conjunctivitis (gritty red eyes) and urethritis (dysuria): the classic reactive-arthritis triad ("can\u2019t see, can\u2019t pee, can\u2019t climb a tree"). The recent "food poisoning" and the (hidden) new sexual partner are the triggers.' },
        { topic:'The hidden agenda \u2014 the STI', text:'HIDDEN AGENDA \u2014 he attributes it to football and resists examination/history partly because he does NOT want to disclose the unprotected sex with a new partner on holiday (embarrassment, a girlfriend at home, guilt) \u2014 which is directly relevant (chlamydia-triggered reactive arthritis) and needs an STI screen and partner notification. A non-judgemental sexual history is essential and is the crux of the consultation.' },
        { topic:'Management',           text:'Once sepsis is excluded: confirm/treat the trigger (STI screen and treat chlamydia if found; the arthritis itself is managed with NSAIDs \u00b1 intra-articular steroid, usually self-limiting), treat any conjunctivitis/urethritis, screen contacts, and safety-net. HLA-B27 association; usually resolves over weeks\u2013months.' },
        { topic:'What he needs',         text:'Officially: anti-inflammatories / drainage for a "footy knee". What he needs: SEPTIC arthritis excluded (urgent assessment/aspiration if genuinely hot/septic-looking), recognition of likely reactive arthritis, a non-judgemental sexual and GI history that uncovers the trigger, an STI screen and partner notification, eye/urinary assessment, and appropriate arthritis management \u2014 not just symptomatic treatment of a "twisted knee".' },
      ],
      ice:{
        ideas:'He twisted it at football; it\u2019s a mechanical "footy knee" needing anti-inflammatories or draining.',
        concerns:'HIDDEN AGENDA \u2014 unprotected sex with a new partner on holiday (embarrassment, a girlfriend at home, guilt) that he won\u2019t volunteer, despite it being directly relevant (chlamydia-triggered reactive arthritis); resists examination/history to avoid it.',
        expectations:'Anti-inflammatories or drainage for a twisted knee. What he actually needs: septic arthritis excluded, recognition of reactive arthritis, a non-judgemental sexual/GI history, an STI screen and partner notification, eye/urinary assessment, and proper management.'
      },
      cues:['Acute hot swollen single joint, no real injury \u2014 exclude SEPTIC arthritis first; don\u2019t accept "twisted it at football".','Knee + Achilles/heel pain days\u2013weeks after "food poisoning" \u2014 reactive arthritis; ask about GI and SEXUAL triggers.','Resists history/exam; possible gritty eyes + dysuria \u2014 the hidden STI trigger; take a non-judgemental sexual history.']
    },
    checkpoints:[
      { dom:'tasks', text:'Excludes SEPTIC ARTHRITIS first: recognises a hot, swollen, acutely painful single joint as a potential joint-destroying emergency \u2014 assesses for fever/systemic upset/inability to weight-bear and a very hot joint, and arranges urgent assessment \u00b1 joint aspiration if a septic picture \u2014 rather than just giving NSAIDs/draining for a "twisted knee"' },
      { dom:'tasks', text:'Recognises the REACTIVE ARTHRITIS pattern: acute (oligo)arthritis (often a knee) days\u2013weeks after a GI (dysentery) or STI trigger, \u00b1 enthesitis (Achilles/heel), conjunctivitis and urethritis ("can\u2019t see, can\u2019t pee, can\u2019t climb a tree")' },
      { dom:'tasks', text:'Takes a thorough, NON-JUDGEMENTAL history that elicits BOTH the recent GI infection AND the sexual history (new partner, unprotected sex) \u2014 recognising the patient will not volunteer the sexual trigger \u2014 plus the eye and urinary symptoms' },
      { dom:'tasks', text:'Arranges an STI SCREEN (chlamydia/gonorrhoea NAAT, full screen) and PARTNER NOTIFICATION if an STI trigger is found/likely, treats chlamydia if confirmed, and assesses/manages conjunctivitis and urethritis' },
      { dom:'tasks', text:'Manages the reactive arthritis appropriately once sepsis excluded: NSAIDs \u00b1 intra-articular corticosteroid, explains it is usually self-limiting (weeks\u2013months), HLA-B27 association, and refers/escalates if severe, persistent or diagnostic uncertainty' },
      { dom:'rto',   text:'Creates a safe, non-judgemental space (and the right to be seen alone / asked sensitively) so the hidden sexual history can be disclosed, rather than accepting the "football" explanation and resistance to examination' },
      { dom:'rto',   text:'Handles the embarrassment/guilt and partner-notification conversation with compassion and without moralising, so the STI trigger is addressed' },
      { dom:'gs',    text:'Safety-nets and follows up: urgent assessment/aspiration if any septic features, the STI screen/partner notification and arthritis management, eye/urinary review, return advice if worsening/fever, and a follow-up \u2014 excluding the emergency and treating the real cause' },
    ],
    worked:[
      { lbl:'Exclude the emergency first', txt:'"Before we call it a footy knee, I have to be careful: a hot, swollen, very painful joint that came up without a real injury, I always have to make sure there\u2019s no infection IN the joint, because that\u2019s an emergency that can damage it fast. So I do need to examine it properly, and if it looks infected we get it assessed and possibly a sample taken today \u2014 that comes first."' },
      { lbl:'Spot the pattern',    txt:'"Now, you mentioned your heel\u2019s sore too. Can I ask \u2014 have you had any tummy upset recently, like a bad case of the runs? \u2026 On holiday, three weeks ago. That\u2019s really relevant. There\u2019s a type of joint inflammation that flares up a few weeks AFTER an infection \u2014 it\u2019s called reactive arthritis, and a knee like this with a sore Achilles fits it well."' },
      { lbl:'Open the door, no judgement', txt:'"I need to ask some personal questions, and there\u2019s zero judgement \u2014 it\u2019s just that this can also be triggered by an infection caught through sex. On that holiday, was there any new sexual partner, any unprotected sex? \u2026 Thank you for being honest, genuinely. That\u2019s really useful, because it points to the likely trigger and something we can test for and treat."' },
      { lbl:'The eyes and waterworks', txt:'"Two quick things that go with this \u2014 any gritty or red eyes, and any stinging or discharge passing water? \u2026 A bit, yeah. Those fit the same picture. None of this is anything to be ashamed of \u2014 it\u2019s a known reaction, and it\u2019s manageable."' },
      { lbl:'Test, treat, notify', txt:'"So the plan: I\u2019ll make sure the knee isn\u2019t infected, and do a sexual-health screen \u2014 all confidential \u2014 and if we find an infection like chlamydia we treat it, and your recent partner would need testing too, which the clinic can help with. For the knee itself, anti-inflammatories and sometimes a steroid injection settle it; it usually clears over a few weeks."' },
      { lbl:'Safety-net',          txt:'"If the knee gets much hotter, you spike a fever, or you can\u2019t weight-bear at all \u2014 that\u2019s straight back to us or A&E, because that would worry me about infection. Otherwise I\u2019ll sort the tests and treatment and see you to follow up. You came in for a footy knee; what it actually is, is something we can name, treat, and sort properly \u2014 including the bits you almost didn\u2019t mention."' },
    ],
    learning:'A hot, swollen, acutely painful single joint with no real injury must ALWAYS have SEPTIC ARTHRITIS excluded first \u2014 a joint-destroying emergency \u2014 so urgent assessment \u00b1 joint aspiration is the safe pathway for a genuinely hot/septic-looking joint, not NSAIDs/drainage for a "twisted knee". The likely diagnosis here is REACTIVE ARTHRITIS: an acute (oligo)arthritis (often a knee) days\u2013weeks after a GI (dysentery) or STI trigger, \u00b1 enthesitis (Achilles/heel), conjunctivitis and urethritis ("can\u2019t see, can\u2019t pee, can\u2019t climb a tree"), HLA-B27-associated and usually self-limiting. The examinable hidden agenda is the unvoiced sexual trigger \u2014 unprotected sex with a new partner the patient won\u2019t disclose \u2014 which is directly relevant (chlamydia) and needs a non-judgemental sexual history, an STI screen and partner notification. Take a thorough history eliciting BOTH the GI infection and the sexual history (and the eye/urinary symptoms), exclude sepsis, screen/treat the STI and notify partners, manage the arthritis (NSAIDs \u00b1 intra-articular steroid), and safety-net septic features.',
    knowledge:{
      guideline:'CKS reactive arthritis · hot swollen joint / septic arthritis (BSR) · BASHH STI screening & partner notification',
      points:[
        { h:'Exclude septic arthritis first', t:'Any acutely hot, swollen, painful single joint is septic arthritis until proven otherwise \u2014 a destroying emergency. Red flags: fever/systemic upset, inability to weight-bear, rapidly worsening, immunosuppression/prosthetic joint. Urgent assessment and joint aspiration (before antibiotics) guide diagnosis. Do not anchor on "injury".' },
        { h:'Recognise reactive arthritis', t:'A sterile (oligo)arthritis, typically large joints (knee/ankle), arising days\u2013weeks AFTER a triggering infection: gastrointestinal (Salmonella, Shigella, Campylobacter, Yersinia) or genitourinary (Chlamydia trachomatis). May feature enthesitis (Achilles/plantar), dactylitis, conjunctivitis/uveitis and urethritis ("can\u2019t see, can\u2019t pee, can\u2019t climb a tree"). HLA-B27-associated.' },
        { h:'Take BOTH histories \u2014 including sexual', t:'Elicit the recent GI infection AND a non-judgemental SEXUAL history (new partners, unprotected sex), as a chlamydial trigger is common and patients often won\u2019t volunteer it. Ask about eye and urinary symptoms. This is the crux: the trigger is frequently hidden.' },
        { h:'STI screen & partner notification', t:'If a sexually-acquired trigger is possible, perform a full STI screen (chlamydia/gonorrhoea NAAT, HIV, syphilis), treat chlamydia if found, and arrange partner notification (via sexual-health services). Treat associated conjunctivitis/urethritis.' },
        { h:'Manage the arthritis', t:'Once sepsis excluded: NSAIDs first-line, intra-articular corticosteroid for a persistent single joint; most cases are self-limiting over weeks\u2013months. Refer rheumatology for severe, persistent, or diagnostically uncertain disease (and for chronic/relapsing cases that may need DMARDs).' },
        { h:'Communication', t:'Create a safe, non-judgemental space (see alone, ask sensitively) so the sexual history can be disclosed; handle embarrassment/guilt and partner notification compassionately and without moralising.' },
        { h:'Never do', t:'Never treat a hot swollen joint as a "twisted knee" without excluding septic arthritis; never accept resistance to examination/history at face value; never omit the sexual history and STI screen in possible reactive arthritis; never moralise; never miss the eye/urinary features or partner notification.' },
        { h:'Safety-net & follow-up', t:'Urgent assessment/aspiration if septic features; STI screen + partner notification + treat trigger; arthritis management (NSAID \u00b1 intra-articular steroid); eye/urinary review; return if worsening/fever/can\u2019t weight-bear; follow-up.' }
      ]
    }
  };

  /* ============ 139. TELEPHONE — Carpal tunnel syndrome & its systemic associations ============ */
  const c139 = {
    id:'carpal-tunnel', title:'"My hand goes numb at night \u2014 I\u2019m scared it\u2019s the start of MS"', type:'telephone', duration:12,
    meta:{ age:48, sex:'F', setting:'Telephone \u2014 nocturnal hand numbness and tingling.', system:'Neurology / Carpal tunnel syndrome' },
    brief:'Mrs Donna Whitfield, 48, supermarket worker. Several weeks of TINGLING/NUMBNESS in the right hand \u2014 thumb, index, middle fingers \u2014 worst AT NIGHT, waking her, relieved by shaking the hand; some clumsiness dropping things. Likely CARPAL TUNNEL SYNDROME. If asked: she\u2019s gained weight, feels tired and cold (?hypothyroid), and \u2014 the real reason she called \u2014 she has googled it and is terrified the numbness means MULTIPLE SCLEROSIS or a stroke. Repetitive scanning at work. No red flags for cord/brain.',
    script:{
      opening:'"Hi, I\u2019m really worried. My right hand keeps going numb and tingly, especially at night \u2014 it wakes me up and I have to shake it to get the feeling back. I\u2019ve been dropping things too. I looked it up and now I\u2019m petrified it\u2019s the start of MS, or that I\u2019m heading for a stroke. My hand going numb has to mean something\u2019s wrong with my nerves or brain, doesn\u2019t it?"',
      facts:[
        { topic:'The carpal-tunnel picture', text:'Tingling/numbness in the MEDIAN nerve distribution (thumb, index, middle, half ring finger), worst AT NIGHT, waking the patient and relieved by shaking/hanging the hand, with clumsiness/weakness \u2014 is classic CARPAL TUNNEL SYNDROME (median nerve compression at the wrist), common and benign. The nocturnal, hand-specific, median pattern is reassuringly NOT the diffuse/CNS pattern of MS or the sudden focal deficit of stroke.' },
        { topic:'The associations to check', text:'CTS has treatable ASSOCIATIONS to screen for: HYPOTHYROIDISM (her weight gain, tiredness, cold intolerance), DIABETES, PREGNANCY, obesity, rheumatoid arthritis, and repetitive wrist use/occupation. Checking these (e.g. TFTs, HbA1c) is part of good management \u2014 the hand symptom can be the flag for an underlying condition.' },
        { topic:'The hidden agenda \u2014 the MS/stroke fear', text:'HIDDEN AGENDA \u2014 the REAL reason for the call is the googled terror of MS/stroke, not the hand itself. She needs confident, reasoned reassurance (the pattern is classic carpal tunnel, NOT MS/stroke \u2014 explained, not dismissed), which is the crux. There may also be a specific trigger (a relative/colleague with MS or a stroke). Reassurance here is a skilled task; "it\u2019s just carpal tunnel" without explaining why it isn\u2019t MS/stroke will fail.' },
        { topic:'Management',           text:'CTS management ladder: wrist splints (especially nocturnal), activity/ergonomic modification, treat associations; corticosteroid injection; and referral for nerve conduction studies/surgical decompression for severe/persistent symptoms or motor signs (thenar wasting). Red flags warranting different thinking: bilateral/diffuse symptoms, CNS signs, sudden focal deficit.' },
        { topic:'What she needs',        text:'Officially: to know if it\u2019s MS/a stroke. What she needs: confident, reasoned reassurance that this is carpal tunnel (a benign nerve compression at the wrist), an explanation of WHY it isn\u2019t MS/stroke, screening for treatable associations (esp. hypothyroidism), the management ladder (splints first), her specific fear addressed, and safety-netting \u2014 not a dismissive "it\u2019s nothing".' },
      ],
      ice:{
        ideas:'Hand numbness means a serious nerve/brain problem \u2014 MS or a stroke.',
        concerns:'HIDDEN AGENDA \u2014 googled terror of MS/stroke is the real reason for the call (possibly triggered by a relative/colleague); needs reasoned reassurance, not dismissal; plus unrecognised possible hypothyroidism.',
        expectations:'To find out if it\u2019s MS/a stroke. What she actually needs: confident reasoned reassurance that it\u2019s carpal tunnel (and why it isn\u2019t MS/stroke), screening for associations (esp. thyroid), the management ladder, and her fear addressed.'
      },
      cues:['Night-time median-nerve tingling, relieved by shaking the hand \u2014 classic carpal tunnel, not MS/stroke.','Weight gain, tiredness, cold intolerance \u2014 possible hypothyroidism (a treatable CTS association); screen for it.','"I\u2019m terrified it\u2019s MS / a stroke" \u2014 the real reason for the call; reasoned reassurance is the task, not "it\u2019s nothing".']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises CARPAL TUNNEL SYNDROME from the classic history (median-nerve distribution tingling/numbness, worst at night, relieved by shaking the hand, clumsiness) and makes a confident POSITIVE diagnosis rather than an open-ended "could be anything"' },
      { dom:'tasks', text:'Gives REASONED reassurance that distinguishes it from MS and stroke: the nocturnal, hand-specific, median pattern is the picture of a trapped nerve at the wrist \u2014 NOT the diffuse/relapsing CNS pattern of MS nor the sudden focal deficit of a stroke \u2014 explaining WHY, not just saying "it\u2019s nothing"' },
      { dom:'tasks', text:'Screens for treatable ASSOCIATIONS: hypothyroidism (her weight gain/tiredness/cold \u2014 check TFTs), diabetes (HbA1c), and considers pregnancy, obesity, rheumatoid arthritis and occupational/repetitive use \u2014 recognising the hand symptom can flag an underlying condition' },
      { dom:'tasks', text:'Offers the MANAGEMENT ladder: nocturnal wrist splints first-line, activity/ergonomic modification and treating associations; corticosteroid injection; and referral for nerve conduction studies/decompression if severe, persistent, or motor signs (thenar wasting)' },
      { dom:'tasks', text:'Knows the genuine red flags that would change the picture (bilateral/diffuse symptoms, CNS signs, sudden focal deficit, rapidly progressive weakness/wasting) and safety-nets for them \u2014 so reassurance is safe' },
      { dom:'rto',   text:'Identifies the MS/stroke fear as the REAL reason for the call and addresses it directly and warmly (exploring any specific trigger), treating reassurance as a skilled, specific task rather than a brush-off' },
      { dom:'rto',   text:'Validates the worry and the impact (sleep, dropping things, work) and engages her in the plan, so she feels heard and reassured' },
      { dom:'gs',    text:'Safety-nets and follows up: the splint/management plan and association screening (TFTs/HbA1c), what new symptoms would warrant review (spreading/diffuse symptoms, weakness/wasting, CNS features), referral criteria, and a follow-up \u2014 confident diagnosis, treatable associations checked, fear resolved' },
    ],
    worked:[
      { lbl:'Confident positive diagnosis', txt:'"Let me start with the answer, because I can hear how frightened you are: what you\u2019re describing is a classic picture of carpal tunnel syndrome \u2014 a nerve that gets squeezed where it passes through the wrist. The tingling in your thumb and first two fingers, worse at night, waking you, eased by shaking your hand \u2014 that\u2019s textbook. I\u2019m not guessing or being kind; the pattern really fits it."' },
      { lbl:'Why it isn\u2019t MS/stroke', txt:'"And here\u2019s why it\u2019s NOT the things you\u2019ve been dreading. MS and strokes don\u2019t behave like this \u2014 a trapped wrist nerve gives exactly this hand-only, night-time, shake-it-better pattern. MS tends to cause different, spreading symptoms over time, and a stroke comes on suddenly and affects more than a few fingers. Your story points firmly at the wrist, not the brain. That\u2019s genuinely reassuring, and I can explain it because it\u2019s true."' },
      { lbl:'Find the real fear',  txt:'"Can I ask what set off the MS worry \u2014 did you read it, or does someone you know have it? \u2026 That makes sense. It\u2019s natural your mind went there. But this really is a different, much more ordinary and treatable thing."' },
      { lbl:'Check the associations', txt:'"A couple of useful questions \u2014 have you gained weight, felt more tired or cold lately? \u2026 You have. Carpal tunnel can be linked to an underactive thyroid, and to diabetes, so I\u2019d like to do a couple of blood tests \u2014 partly because treating those can help the hand too. The hand can be the first clue to something simple and fixable."' },
      { lbl:'The treatment ladder', txt:'"For the hand itself: the first and often very effective step is a wrist splint worn at night to keep the wrist straight \u2014 that alone settles a lot of people. We can also look at how you\u2019re using your wrist at work. If it doesn\u2019t settle, there\u2019s a steroid injection, and for stubborn cases nerve tests and a small operation that cures it. So there\u2019s a clear path, and it works."' },
      { lbl:'Safety-net',          txt:'"Now, so you know when to come back rather than worry: if the numbness spreads beyond the hand, you get weakness or wasting at the base of the thumb, or anything sudden affecting your face, speech or other limbs \u2014 tell us, as that\u2019d need a different look. But what you\u2019ve described is the ordinary, treatable kind. Splint at night, I\u2019ll do those bloods, and we\u2019ll review. You rang terrified it was your brain; it\u2019s your wrist, and we can fix it."' },
    ],
    learning:'Tingling/numbness in the MEDIAN nerve distribution (thumb, index, middle, half ring finger), worst AT NIGHT, waking the patient and relieved by shaking the hand, with clumsiness, is classic CARPAL TUNNEL SYNDROME \u2014 a benign median-nerve compression at the wrist \u2014 and warrants a confident POSITIVE diagnosis. The examinable communication task is REASONED reassurance that distinguishes it from the patient\u2019s googled fears: the nocturnal, hand-specific, median pattern is NOT the diffuse/relapsing CNS pattern of MS nor the sudden focal deficit of a stroke \u2014 explained, not dismissed ("it\u2019s just carpal tunnel" without the why will fail). Screen for treatable ASSOCIATIONS (hypothyroidism \u2014 her weight gain/tiredness/cold \u2014 diabetes, pregnancy, obesity, RA, occupational use), since the hand symptom can flag an underlying condition. Offer the management ladder (nocturnal wrist splints first, ergonomic modification and treating associations; steroid injection; nerve conduction studies/decompression for severe/persistent/motor signs), and safety-net the genuine red flags (diffuse/bilateral symptoms, CNS signs, sudden focal deficit, progressive wasting) so reassurance is safe.',
    knowledge:{
      guideline:'NICE CKS carpal tunnel syndrome · median nerve compression · CTS associations',
      points:[
        { h:'Recognise CTS', t:'Carpal tunnel syndrome: paraesthesia/numbness in the median-nerve distribution (thumb, index, middle, radial half of ring finger), characteristically worse at night and waking the patient, relieved by shaking/flicking the hand (the "flick sign"); may have clumsiness/weak grip and, when advanced, thenar wasting. Phalen\u2019s and Tinel\u2019s tests support it. Make a confident clinical diagnosis.' },
        { h:'Distinguish from CNS causes', t:'The hand-specific, nocturnal, median pattern is NOT multiple sclerosis (diffuse, relapsing-remitting CNS symptoms over time) or stroke (sudden focal deficit, usually more than a few fingers). Reasoned reassurance \u2014 explaining why the pattern points to the wrist not the brain \u2014 is essential; bare "it\u2019s nothing" fails the anxious patient.' },
        { h:'Screen treatable associations', t:'CTS is associated with hypothyroidism, diabetes, pregnancy, obesity, rheumatoid arthritis, acromegaly, and repetitive wrist use/occupation. Screen accordingly (e.g. TFTs, HbA1c) \u2014 the hand symptom can be the presenting flag for a treatable systemic condition, and treating the association can improve the CTS.' },
        { h:'Management ladder', t:'First-line: nocturnal wrist splints (neutral position) and activity/ergonomic modification; treat associations. Corticosteroid injection for persistent symptoms. Refer for nerve conduction studies and surgical decompression if severe, persistent, or with motor signs (thenar wasting) \u2014 decompression is curative.' },
        { h:'Red flags / when to rethink', t:'Bilateral/diffuse symptoms, CNS signs, sudden focal neurological deficit, rapidly progressive weakness/wasting, or features beyond the median distribution warrant a different/neurological work-up. Safety-net these so reassurance is safe.' },
        { h:'Reassurance is a skill', t:'The presenting complaint is often the FEAR (MS/stroke), not the hand. Identify and address the specific fear (and its trigger) with confident, reasoned, warm explanation; treat reassurance as a skilled task, not a brush-off.' },
        { h:'Never do', t:'Never give open-ended "could be anything" or dismissive "it\u2019s nothing" for a classic CTS history; never miss the MS/stroke fear that is the real reason for contact; never skip screening for hypothyroidism/diabetes; never overlook thenar wasting/motor signs (need referral); never fail to safety-net the genuine red flags.' },
        { h:'Safety-net & follow-up', t:'Nocturnal splint + ergonomic advice; screen associations (TFTs/HbA1c) and treat; steroid injection / nerve conduction studies / decompression for severe-persistent/motor signs; red flags (diffuse symptoms, weakness/wasting, CNS/sudden deficit) \u2192 review; follow-up.' }
      ]
    }
  };

  /* ============ 140. VIDEO — "Degenerative changes" on a knee X-ray: un-frightening the words ============ */
  const c140 = {
    id:'knee-xray-degenerative', title:'"The X-ray says I\u2019m \u2018bone on bone\u2019 \u2014 am I crippled?"', type:'video', duration:12,
    meta:{ age:58, sex:'M', setting:'Video consultation \u2014 explaining a knee X-ray report.', system:'MSK / Osteoarthritis & imaging reframing' },
    brief:'Mr Trevor Nash, 58, plumber. A knee X-ray (for chronic knee pain) reports "moderate degenerative changes / osteoarthritis, reduced joint space". He has read the report and is alarmed by the words ("degenerative", "bone on bone") \u2014 convinced his knee is "crumbling/wearing out", that he\u2019ll need a replacement soon, and that exercise will "wear it out faster", so he has STOPPED activity and is becoming deconditioned, low and frightened for his livelihood. His pain is moderate, function fairly preserved. No red flags.',
    script:{
      opening:'"Doctor, I got the X-ray report and it\u2019s frightened me to death. It says \u2018degenerative changes\u2019 and the receptionist mentioned \u2018reduced joint space\u2019 \u2014 so basically my knee\u2019s worn out, bone on bone, isn\u2019t it? I\u2019ve stopped walking and stopped work bits because I don\u2019t want to wear it out any faster. Am I going to end up crippled? Do I need a new knee? I\u2019m only 58 and I\u2019m a plumber \u2014 this is my livelihood."',
      facts:[
        { topic:'The words frighten more than the reality', text:'X-ray reports use alarming language \u2014 "degenerative", "reduced joint space", "bone on bone" \u2014 that patients interpret catastrophically. The key reframe: radiographic OA changes are COMMON, correlate POORLY with pain and prognosis, do NOT mean the joint is "crumbling away", and are NOT a sentence to disability or imminent replacement. Many people with these X-ray changes have little pain and good function.' },
        { topic:'Exercise is treatment, not harm', text:'CRITICAL misconception to correct: he believes activity will "wear it out faster" and has stopped \u2014 but EXERCISE (strengthening, especially the quadriceps, plus aerobic activity and weight management) is a CORE, evidence-based TREATMENT for knee OA that REDUCES pain and improves function. Rest/deconditioning makes it WORSE. "Motion is lotion." Stopping activity is the harmful path.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 beneath the imaging fear is terror for his LIVELIHOOD (a plumber who can\u2019t kneel/work), loss of identity, and a developing low mood and catastrophic belief that he\u2019s heading for disability. The avoidance of activity is fear-driven and is deconditioning him into exactly the disability he fears. The reframe \u2014 X-ray words \u2260 destiny; exercise protects the knee and his job \u2014 restores agency and hope.' },
        { topic:'Management & when to refer', text:'OA management: education/reframing, exercise and weight loss (core), analgesia (topical/oral NSAIDs per pathway, etc.), and addressing function/work. Joint replacement is considered for severe, refractory symptoms substantially affecting quality of life \u2014 based on the PERSON, not the X-ray \u2014 not an inevitability at 58 with moderate symptoms. Address mood and work support.' },
        { topic:'What he needs',         text:'Officially: to know if he\u2019s "crippled" / needs a new knee. What he needs: the X-ray words un-frightened (common changes, poor correlation with pain/prognosis, not "crumbling"), the crucial reframe that exercise is TREATMENT not harm, an active management plan (strengthening, weight, analgesia, work modification), his livelihood fear and low mood addressed, and realistic info on replacement \u2014 restoring agency.' },
      ],
      ice:{
        ideas:'"Degenerative changes / bone on bone" means his knee is crumbling/worn out, he\u2019ll be crippled and need a replacement, and exercise will wear it out faster (so he\u2019s stopped).',
        concerns:'HIDDEN AGENDA \u2014 terror for his livelihood (a plumber who can\u2019t kneel/work), loss of identity, and developing low mood; the activity-avoidance is fear-driven and deconditioning him into the disability he fears.',
        expectations:'To know if he\u2019s crippled / needs a new knee. What he actually needs: the X-ray words reframed, the crucial message that exercise is treatment not harm, an active management plan, and his livelihood fear/low mood addressed.'
      },
      cues:['"Bone on bone / degenerative" \u2014 alarming X-ray words read catastrophically; reframe (changes are common, correlate poorly with pain).','"I\u2019ve stopped activity so I don\u2019t wear it out" \u2014 the key misconception; exercise is TREATMENT, rest makes it worse.','"I\u2019m a plumber, this is my livelihood" + stopping work \u2014 the real fear and low mood; restore agency.']
    },
    checkpoints:[
      { dom:'tasks', text:'Reframes the X-ray REPORT language: explains that "degenerative changes / reduced joint space / bone on bone" are COMMON radiographic findings that correlate POORLY with pain and prognosis, do NOT mean the joint is "crumbling away", and are NOT a sentence to disability or imminent replacement \u2014 un-frightening the words rather than reinforcing them' },
      { dom:'tasks', text:'Corrects the crucial EXERCISE misconception: activity does NOT "wear the joint out faster" \u2014 EXERCISE (quadriceps/strengthening, aerobic activity) and WEIGHT management are core, evidence-based TREATMENTS for knee OA that reduce pain and improve function; rest/deconditioning makes it worse ("motion is lotion")' },
      { dom:'tasks', text:'Offers an ACTIVE management plan: education, a structured exercise/strengthening and weight programme (physio referral), appropriate analgesia (e.g. topical/oral NSAIDs per pathway, etc.), and walking aids/adjuncts as needed \u2014 a positive plan, not "rest it"' },
      { dom:'tasks', text:'Gives realistic information on JOINT REPLACEMENT: considered for severe, refractory symptoms substantially affecting quality of life, based on the PERSON and their symptoms \u2014 NOT an inevitability dictated by the X-ray at 58 with moderate symptoms' },
      { dom:'tasks', text:'Addresses the WORK/livelihood and MOOD impact: occupational modification/advice (kneeling, load), function, and screens/supports the developing low mood and catastrophic beliefs \u2014 recognising the deconditioning spiral' },
      { dom:'rto',   text:'Responds to the fear and catastrophic beliefs first, dismantles the "crumbling/crippled" narrative with empathy and accurate information, and restores agency and hope' },
      { dom:'rto',   text:'Engages him as an active partner in his own recovery (he can influence this), framing exercise and weight as protecting his knee AND his livelihood' },
      { dom:'gs',    text:'Safety-nets and follows up: the exercise/weight/analgesia plan and physio referral, work advice, mood support, what would prompt orthopaedic referral (severe refractory symptoms/QoL), and a follow-up \u2014 turning catastrophic avoidance into an active, hopeful plan' },
    ],
    worked:[
      { lbl:'Un-frighten the words', txt:'"Let me take the fear out of those words first, because they sound far worse than they are. \u2018Degenerative changes\u2019 just means the normal wear most knees show by our age \u2014 if we X-rayed everyone in their fifties, loads would say the same, including people with no pain at all. It does NOT mean your knee is crumbling away or that you\u2019re heading for a wheelchair. The X-ray words and how a knee actually does are only loosely connected."' },
      { lbl:'The big myth: rest',   txt:'"Now the most important thing I\u2019ll tell you today, and it\u2019s the opposite of what you\u2019ve been doing: stopping activity to \u2018save\u2019 the knee actually makes it WORSE. Exercise is one of the BEST treatments for this \u2014 strong muscles around the knee protect it and reduce the pain. We say \u2018motion is lotion\u2019. By resting it, you\u2019re unintentionally weakening it and stiffening it up."' },
      { lbl:'Restore agency',       txt:'"So here\u2019s the hopeful bit: this is something you can genuinely improve yourself. Building up the thigh muscles, keeping moving, and \u2014 if it applies \u2014 losing a bit of weight takes real load off the knee. I\u2019ll get you to a physio for the right exercises, and we\u2019ll sort effective pain relief so you CAN move. You\u2019re not a passenger here; you\u2019re the main treatment."' },
      { lbl:'The livelihood fear',  txt:'"I can hear the real worry underneath \u2014 you\u2019re a plumber, and you\u2019re frightened this ends your work. That\u2019s a huge thing to carry. But the path back to work isn\u2019t resting and waiting; it\u2019s getting the knee strong and the pain managed. We can look at how you protect it on the job too \u2014 kneeling, loads. The goal is keeping you working, not signing you off."' },
      { lbl:'Replacement, realistically', txt:'"On a new knee \u2014 that\u2019s reserved for when symptoms are severe and really wrecking someone\u2019s life despite everything else, and it\u2019s decided on YOU and your symptoms, not the X-ray. At 58 with moderate pain, you\u2019re a long way from that, and the active plan may keep you well away from it for years."' },
      { lbl:'Mood + safety-net',    txt:'"This has clearly knocked you \u2014 and that\u2019s understandable when you\u2019ve been told you\u2019re \u2018bone on bone\u2019 and feared for your job. If you\u2019re feeling low, that matters too and I want to help with it. Let\u2019s get the physio and pain relief going, look at work, and review. You came in thinking your knee was finished; it isn\u2019t \u2014 and a lot of how it goes is genuinely in your hands."' },
    ],
    learning:'X-ray reports use alarming language \u2014 "degenerative changes", "reduced joint space", "bone on bone" \u2014 that patients read catastrophically, so the core task is to UN-FRIGHTEN the words: radiographic OA changes are common, correlate POORLY with pain and prognosis, do NOT mean the joint is "crumbling away", and are NOT a sentence to disability or imminent replacement. The crucial, examinable reframe is the EXERCISE misconception: activity does NOT "wear the joint out faster" \u2014 strengthening (quadriceps), aerobic exercise and weight management are core, evidence-based TREATMENTS that reduce pain and improve function, while rest/deconditioning makes it worse ("motion is lotion"). Offer an active plan (education, physio/exercise, weight, analgesia, work modification), give realistic replacement information (a person-and-symptom decision for severe refractory disease, not an X-ray-dictated inevitability at 58 with moderate symptoms), and address the hidden agenda \u2014 terror for his livelihood and a developing low mood, with the activity-avoidance deconditioning him into the very disability he fears. Restore agency and hope: he is the main treatment.',
    knowledge:{
      guideline:'NICE NG226 osteoarthritis · imaging-symptom discordance · OA exercise & weight management',
      points:[
        { h:'Imaging correlates poorly with symptoms', t:'Radiographic OA changes ("degenerative changes", reduced joint space, osteophytes, "bone on bone") are extremely common with age and correlate POORLY with pain, function and prognosis \u2014 many with marked X-ray changes have little pain, and vice versa. OA is a clinical diagnosis; imaging is often unnecessary and its language frequently harms more than helps.' },
        { h:'Reframe the report language', t:'Actively un-frighten alarming wording. Explain that these are normal age-related changes, not the joint "crumbling away" or an inevitability of disability/replacement. Patients commonly catastrophise these words \u2014 correcting this is therapeutic.' },
        { h:'Exercise is core treatment, not harm', t:'NICE NG226: therapeutic EXERCISE (muscle strengthening \u2014 especially quadriceps \u2014 and aerobic activity) and WEIGHT management (if overweight) are first-line, core treatments that reduce pain and improve function. Activity does NOT accelerate joint damage; rest and deconditioning worsen OA. Correct the "I\u2019ll wear it out" belief explicitly.' },
        { h:'Active management plan', t:'Education and self-management, structured exercise (physiotherapy), weight loss, analgesia (topical NSAIDs first for knee OA; oral NSAIDs at lowest effective dose/shortest time with gastroprotection per pathway; consider other adjuncts), and walking aids/occupational adjustments as needed. Avoid framing it as "rest and painkillers".' },
        { h:'Joint replacement is person-based', t:'Refer for consideration of joint replacement when symptoms are severe and substantially affect quality of life and are refractory to non-surgical management \u2014 a decision based on the person and their symptoms, NOT dictated by X-ray appearance or age. Moderate symptoms are not an indication.' },
        { h:'Address work, mood and catastrophising', t:'Fear for livelihood, identity loss and low mood commonly accompany OA, and activity-avoidance deconditions the patient into greater disability. Address occupational impact/modification, screen and support mood, and dismantle catastrophic beliefs \u2014 restoring agency improves outcomes.' },
        { h:'Never do', t:'Never reinforce the "bone on bone/crumbling" catastrophe; never advise rest/activity-avoidance for OA; never present joint replacement as an X-ray-dictated inevitability; never ignore the livelihood fear and low mood; never frame OA as untreatable decline.' },
        { h:'Safety-net & follow-up', t:'Exercise/weight/physio plan and effective analgesia; occupational advice; mood support; orthopaedic referral only for severe refractory symptoms affecting QoL; review to reinforce the active plan and check progress.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c137, c138, c139, c140);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'early-rheumatoid': {
      ceg: ['Long-term conditions & cancer', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Priya Sehgal', age: '42 years · female',
        pmh: ['~8 weeks symmetrical small-joint (MCP/PIP/wrist) pain WITH swelling', 'Early-morning stiffness ~2 hours; fatigue; boggy MCP synovitis', 'Mother had RA ("ended up in a wheelchair")'],
        meds: ['OTC ibuprofen'],
        allergy: 'NKDA',
        recent: 'Wants stronger anti-inflammatories to "push through"; can\u2019t take time off.',
        reason: 'Video consultation — small-joint pain and stiffness.'
      },
      timeMap: [
        { t:'0–2',  h:'Reframe "wear and tear"', d:'Symmetrical small-joint SWELLING + 2h morning stiffness = inflammatory, not wear and tear. Take it seriously and quickly.' },
        { t:'2–4',  h:'Name it + urgency',    d:'Likely early RA; window of opportunity. URGENT rheumatology referral today — not NSAIDs and review.' },
        { t:'4–7',  h:'Surface the real fear', d:'Mother\u2019s RA "wheelchair". Reframe: modern early treatment changes the outcome — the opposite of her mum\u2019s fate.' },
        { t:'7–9',  h:'Tests + relief',       d:'FBC/ESR/CRP/RF/anti-CCP + hand X-rays (refer regardless; normal RF doesn\u2019t exclude); bridging NSAID + gastroprotection / short steroid.' },
        { t:'9–12', h:'Wider + safety-net',   d:'Flag work + fertility (methotrexate) for the specialist; return if flaring; follow up. Fast referral protects her future.' }
      ],
      wordPics: {
        fail: 'Labels it "wear and tear/overwork", gives stronger NSAIDs and reviews in months; misses the inflammatory synovitis and the window of opportunity; is reassured by a normal RF; never surfaces the disability fear.',
        pass: 'Recognises inflammatory early RA, refers urgently, arranges baseline tests and bridging relief, and addresses the fear.',
        exc:  'Distinguishes inflammatory synovitis from wear-and-tear and refers URGENTLY within the window (regardless of bloods); arranges baseline tests/X-rays and bridging relief without delaying referral; surfaces the mother-driven disability fear and reframes it with modern outcomes; and flags work/fertility for the specialist.'
      },
      avoid: [
        { dont:'"Sounds like wear and tear or too much marking — here are some stronger anti-inflammatories, see how you go."', instead:'"Symmetrical swelling with two hours of morning stiffness is inflammation, not wear and tear — likely early rheumatoid arthritis, which needs an URGENT specialist referral, not just painkillers."', why:'Mislabelling inflammatory synovitis as wear-and-tear and giving NSAIDs misses the window of opportunity that prevents joint damage.' },
        { dont:"\"Your rheumatoid blood test is normal, so it's unlikely to be that — let's wait.\"", instead:'"A normal rheumatoid factor doesn\u2019t rule it out — seronegative RA exists — so I\u2019m referring you on the clinical picture regardless of the bloods."', why:'Being reassured by a negative RF/normal CRP delays urgent referral in genuine early RA.' },
        { dont:'"Try not to compare yourself to your mum — everyone\u2019s different."', instead:'"Your mum\u2019s RA is clearly the fear here — and the hopeful truth is modern early treatment changes the outcome completely; catching it now is the opposite of her fate."', why:'Brushing past the disability fear misses the agenda and the chance to motivate prompt engagement.' }
      ]
    },

    'reactive-arthritis': {
      ceg: ['Urgent & unscheduled care', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Jordan Eze', age: '27 years · male',
        pmh: ['Acute hot SWOLLEN right knee + sore Achilles, no real injury', 'Dysenteric "food poisoning" ~3 weeks ago on holiday', '⚠ Hidden: unprotected sex with a new partner; ?gritty eyes + dysuria'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Blames "twisting it at football"; resists examination/history.',
        reason: 'Video consultation — acute knee swelling, no injury.'
      },
      timeMap: [
        { t:'0–2',  h:'Exclude septic first', d:'Hot swollen single joint, no real injury → exclude septic arthritis (emergency). Examine; urgent assessment/aspiration if septic-looking.' },
        { t:'2–4',  h:'Spot the pattern',     d:'Knee + Achilles days\u2013weeks after dysentery = reactive arthritis. Ask GI AND sexual triggers; eyes/waterworks.' },
        { t:'4–7',  h:'Open the STI door',    d:'Non-judgemental sexual history — new partner, unprotected sex he won\u2019t volunteer. The likely chlamydial trigger.' },
        { t:'7–9',  h:'Test, treat, notify', d:'STI screen (NAAT) + partner notification; treat chlamydia; manage conjunctivitis/urethritis; NSAIDs \u00b1 intra-articular steroid.' },
        { t:'9–12', h:'Safety-net',           d:'Hotter joint/fever/can\u2019t weight-bear → A&E (infection). Usually self-limiting; follow up.' }
      ],
      wordPics: {
        fail: 'Accepts "twisted it at football", gives NSAIDs/drains it without excluding septic arthritis; never takes the sexual history, so the chlamydial trigger, STI screen and partner notification are missed.',
        pass: 'Excludes septic arthritis, recognises reactive arthritis, takes GI and sexual histories, screens STIs and notifies partners, and manages the arthritis.',
        exc:  'Excludes septic arthritis first; recognises the reactive-arthritis pattern; creates a non-judgemental space that uncovers the hidden sexual trigger; arranges an STI screen + partner notification and treats it; manages the eyes/urethritis and the arthritis; and safety-nets septic features.'
      },
      avoid: [
        { dont:'"Sounds like a footy knee — here are strong anti-inflammatories, or I\u2019ll drain it."', instead:'"A hot, swollen joint with no real injury means I first have to rule out infection in the joint — that\u2019s an emergency — so I need to examine it and possibly get it assessed today."', why:'Treating a hot swollen joint as mechanical without excluding septic arthritis risks rapid joint destruction.' },
        { dont:'"No need to get into personal stuff — let\u2019s just treat the knee."', instead:'"I need to ask, with no judgement, about any new sexual partner or unprotected sex recently — because an infection caught that way can trigger exactly this, and it\u2019s testable and treatable."', why:'Skipping the sexual history misses the common chlamydial trigger, the STI screen and partner notification.' },
        { dont:'"The tummy bug\u2019s long gone, so that\u2019s not relevant now."', instead:'"That dysentery three weeks ago is actually very relevant — this kind of arthritis flares a few weeks AFTER an infection, gut or sexually transmitted."', why:'Dismissing the post-infective link discards the diagnosis and the trigger work-up.' }
      ]
    },

    'carpal-tunnel': {
      ceg: ['New & undifferentiated presentations', 'Investigations & results'],
      stem: {
        name: 'Donna Whitfield', age: '48 years · female',
        pmh: ['Weeks of right-hand tingling/numbness (thumb, index, middle), worst AT NIGHT, relieved by shaking', 'Clumsiness dropping things; repetitive scanning at work', '?Hypothyroid (weight gain, tired, cold intolerance)'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Googled it; terrified it\u2019s MS or a stroke.',
        reason: 'Telephone — nocturnal hand numbness/tingling.'
      },
      timeMap: [
        { t:'0–2',  h:'Confident diagnosis',  d:'Night-time median-nerve tingling relieved by shaking = classic carpal tunnel. Say it confidently.' },
        { t:'2–4',  h:'Why not MS/stroke',    d:'Hand-only, night-time, shake-it-better = trapped wrist nerve, not the diffuse CNS pattern of MS or sudden focal stroke. Explain WHY.' },
        { t:'4–6',  h:'Find the real fear',   d:'What triggered the MS worry? Address it directly and warmly.' },
        { t:'6–8',  h:'Check associations',   d:'Weight gain/tired/cold → thyroid; also diabetes. TFTs/HbA1c — treating these helps the hand.' },
        { t:'8–12', h:'Ladder + safety-net',  d:'Night splint first; ergonomics; steroid injection; nerve studies/surgery if severe/wasting. Red flags (diffuse/weakness/sudden deficit) → review.' }
      ],
      wordPics: {
        fail: 'Gives open-ended "could be a few things" or dismissive "it\u2019s just carpal tunnel, nothing to worry about" without explaining why it isn\u2019t MS/stroke; never finds the real fear; misses the thyroid association.',
        pass: 'Diagnoses CTS confidently, reassures it isn\u2019t MS/stroke, screens associations, offers splints/the ladder, and safety-nets.',
        exc:  'Makes a confident positive CTS diagnosis and gives reasoned reassurance explaining why it isn\u2019t MS/stroke; identifies and addresses the real googled fear; screens treatable associations (thyroid/diabetes); offers the management ladder; and safety-nets the genuine red flags.'
      },
      avoid: [
        { dont:'"Numbness can have lots of causes — we\u2019ll have to investigate to rule things out."', instead:'"This is a classic picture of carpal tunnel — a trapped nerve at the wrist. The night-time, hand-only, shake-it-better pattern is textbook, and it\u2019s not how MS or a stroke behave."', why:'Open-ended uncertainty inflames the MS/stroke health anxiety that is the real reason for the call.' },
        { dont:'"It\u2019s just carpal tunnel, nothing to worry about."', instead:'"It IS carpal tunnel — and let me explain WHY that\u2019s reassuring and not MS or a stroke, because that\u2019s clearly what\u2019s frightened you."', why:'Bare dismissal without reasoned explanation fails to resolve the specific fear driving the consultation.' },
        { dont:'"Your weight and tiredness aren\u2019t really relevant to your hand."', instead:'"Actually, weight gain, tiredness and feeling cold can point to an underactive thyroid, which is linked to carpal tunnel — so I\u2019d check that, as treating it can help the hand too."', why:'Dismissing the systemic clues misses a treatable association the hand symptom is flagging.' }
      ]
    },

    'knee-xray-degenerative': {
      ceg: ['Investigations & results', 'Mental health & addiction'],
      stem: {
        name: 'Trevor Nash', age: '58 years · male',
        pmh: ['Chronic knee pain; X-ray: "moderate degenerative changes / reduced joint space"', 'Moderate pain, function fairly preserved; no red flags', 'Plumber — fears for his livelihood'],
        meds: ['OTC analgesia'],
        allergy: 'NKDA',
        recent: 'Alarmed by "degenerative/bone on bone"; STOPPED activity to "not wear it out"; low and frightened.',
        reason: 'Video consultation — explaining a knee X-ray report.'
      },
      timeMap: [
        { t:'0–2',  h:'Un-frighten the words', d:'"Degenerative changes" = common age-related wear, seen in many pain-free people; NOT crumbling/bone-on-bone doom. X-ray ≠ how the knee does.' },
        { t:'2–4',  h:'The rest myth',        d:'Stopping activity makes OA WORSE. Exercise is one of the best treatments — "motion is lotion".' },
        { t:'4–6',  h:'Restore agency',       d:'Strengthening + keeping moving + weight loss genuinely improve it. Physio + effective pain relief so he CAN move. He\u2019s the main treatment.' },
        { t:'6–9',  h:'The livelihood fear',  d:'Plumber fearing the end of work. The route back is strengthening + pain control + work modification — not rest. Keep him working.' },
        { t:'9–12', h:'Replacement + mood + net', d:'Replacement is a person/symptom decision for severe refractory disease, not X-ray-dictated at 58. Screen/support low mood; physio + analgesia; review.' }
      ],
      wordPics: {
        fail: 'Confirms the "bone on bone/worn out" catastrophe and advises resting it; presents a replacement as inevitable; never corrects the exercise misconception; ignores the livelihood fear and low mood — deepening the deconditioning spiral.',
        pass: 'Reframes the X-ray language, advises exercise/weight/analgesia, gives realistic replacement info, and addresses work/mood.',
        exc:  'Un-frightens the report language (common changes, poor correlation with pain); corrects the crucial exercise-is-treatment misconception and restores agency; gives an active management plan and realistic, person-based replacement info; and addresses the livelihood fear and low mood — turning catastrophic avoidance into a hopeful plan.'
      },
      avoid: [
        { dont:'"Yes, the X-ray shows it\u2019s quite worn — you\u2019ll need to take it easy and you may need a replacement down the line."', instead:'"Those X-ray words sound worse than they are — they\u2019re common age-related changes that don\u2019t match how a knee actually does, and they\u2019re not a sentence to a replacement."', why:'Confirming the "worn out/replacement inevitable" narrative entrenches catastrophising and activity-avoidance.' },
        { dont:'"Best to rest it and avoid putting strain on the joint."', instead:'"The opposite, actually — resting it makes it worse. Exercise and strong muscles are one of the best treatments; \u2018motion is lotion\u2019. Let\u2019s get you moving safely with physio and pain relief."', why:'Advising rest for OA deconditions the patient into the very disability he fears.' },
        { dont:'"Try not to worry about work — let\u2019s just focus on the knee."', instead:'"Your livelihood is clearly the real worry — and the way back to work is strengthening and pain control plus protecting the knee on the job, not resting and waiting."', why:'Sidelining the livelihood fear and low mood misses the agenda and the chance to restore agency.' }
      ]
    }
  });

})();
