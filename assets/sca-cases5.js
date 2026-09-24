/* ============================================================
   Reasoning GP — Case Library batch 3: "Safeguarding & hidden harm"
   Three ORIGINAL cases. Hidden agenda + full ICE in every case.
   Pushes into SCA_CASES + SCA_EXTRAS.
   Load AFTER sca-cases.js / 2 / 3 / 4 and sca-extras.js.
   ============================================================ */

(function(){

  /* ============ 19. VIDEO — Bruising, long sleeves, partner at home ============ */
  const c19 = {
    id:'bruising-da', title:'Headaches, long sleeves', type:'video', duration:12,
    meta:{ age:31, sex:'F', setting:'Video consultation — booked for "tiredness and headaches".', system:'Safeguarding / Women\u2019s health' },
    brief:'Ms Kayleigh Morton, 31, booked a video appointment for "tiredness and headaches". Records: 3 DNA\u2019d appointments this year (booked, then cancelled within hours); an A&E attendance 4 months ago — "fell against a door frame", facial bruising; pregnancy test positive at the pharmacy 3 weeks ago per a midwife self-referral that was started online and never completed. She joins the call from her kitchen, speaking quietly, wearing long sleeves in July.',
    script:{
      opening:'(Quiet, glancing off-screen once.) "Hi — sorry, is this thing working? It\u2019s just headaches, really. And tired all the time. I only get a minute, Dean\u2019s back soon — he doesn\u2019t like me wasting doctors\u2019 time. Can you just tell me if it\u2019s anything, you know… quickly?"',
      facts:[
        { topic:'Headaches',        text:'Tension-pattern, months, worse "when things are tense at home". No red-flag features. She offers them as the ticket, not the story.' },
        { topic:'The pregnancy',    text:'Only if safety is established: about 12 weeks. Dean doesn\u2019t know. She started the midwife form online "then thought better of it". This pregnancy is WHY she\u2019s finally testing the water with a doctor.' },
        { topic:'Home',             text:'Dean, together 4 years. Checks her phone, manages the money, "doesn\u2019t like" her sister visiting. If asked directly and safely: yes — he has grabbed and shaken her; last month he held her against the wall by the throat. It\u2019s "not all the time. He\u2019s sorry after."' },
        { topic:'The sleeves',      text:'Finger-mark bruising on both upper arms, a week old. She will show the camera only if trust is built and she\u2019s confirmed alone.' },
        { topic:'The A&E story',    text:'"The door frame" was Dean. First time anything "showed". She told A&E the rehearsed version.' },
        { topic:'What she wants',   text:'Not rescue — information. Is the baby okay after "being shaken about"? Is there a way to talk to someone that doesn\u2019t start police cars coming to the house? Her sister in Chesterfield is her one safe person.' },
      ],
      ice:{
        ideas:'The headaches are "probably stress". She knows exactly what the situation is — she\u2019s not confused, she\u2019s trapped.',
        concerns:'HIDDEN AGENDA — she is 12 weeks pregnant by a violent partner who doesn\u2019t know, and last month he held her by the throat. She\u2019s terrified for the baby, terrified of being "reported" and losing control of what happens next, and using a headache appointment to test whether a doctor is safe.',
        expectations:'To be believed without sirens. A route to help that SHE controls the speed of. Above all: nothing on paper or phone that Dean could find.'
      },
      cues:['Long sleeves in July, and a glance off-screen before each answer — the room itself isn\u2019t safe.','"He doesn\u2019t like me wasting doctors\u2019 time" — control, presented as a husband\u2019s opinion.','"Is it true stress can hurt a baby?" — the pregnancy, and the fear for it, arriving sideways.']
    },
    checkpoints:[
      { dom:'tasks', text:'Establishes safety to talk FIRST: "Are you alone? If someone comes in, we switch to talking about headaches — say \u2018my prescription\u2019 and I\u2019ll follow"' },
      { dom:'tasks', text:'Asks the direct questions gently once safety allows: afraid at home, physical harm, and the highest-risk markers by name — strangulation/being held by the throat, escalation, pregnancy (all three are present and must be recognised as a red-flag cluster)' },
      { dom:'tasks', text:'Assesses tonight\u2019s safety concretely: is it safe to go home, where is Dean now, the sister in Chesterfield as a safe address, an exit bag NOT kept where he\u2019d find it' },
      { dom:'tasks', text:'Knows the levers and offers them at HER pace: IDVA referral, National DA Helpline 0808 2000 247, safeguarding-aware midwife booking (the unborn child makes this a safeguarding matter), GP as a safe contact point with a pretext (e.g. "antenatal bloods")' },
      { dom:'rto',   text:'Believes first, assesses second — says "I believe you" and "this is not your fault" out loud, and never asks why she stays' },
      { dom:'rto',   text:'Hands her the controls explicitly: what gets written where, what happens next, and the honest limit — the unborn baby means a safeguarding midwife conversation, told to her BEFORE it happens, never behind her back' },
      { dom:'rto',   text:'Answers the question she actually came with: the baby and the violence — honestly (stress and trauma matter, the biggest risk to both of them is the situation continuing) without weaponising it' },
      { dom:'gs',    text:'Safety-nets without paper trails: numbers memorised or stored under a disguised name, 999-and-silent-call (55) explained, the next contact engineered as routine ("midwife bloods next week — Dean has no reason to question it"); documents in a secure/coded way, nothing printed or texted home' },
    ],
    worked:[
      { lbl:'Safety first',           txt:'"Before anything else — are you alone right now? If that changes mid-call, just say \u2018about my prescription\u2019 and I\u2019ll switch straight back to headaches. You\u2019re driving this, not me."' },
      { lbl:'The direct ask',         txt:'"Kayleigh, I ask lots of people this, and I\u2019m asking because of the sleeves and the glances, not to catch you out: is anyone at home hurting you or frightening you?"' },
      { lbl:'Believe, out loud',      txt:'"I believe you. All of it. And I want one sentence to land before we plan anything: none of this — none of it — is your fault."' },
      { lbl:'The throat question',    txt:'"You said he held you by the throat. I have to be honest about that one: of everything you\u2019ve told me, that\u2019s the sign we take most seriously — it\u2019s the strongest predictor there is. It doesn\u2019t mean police cars tonight. It means we plan properly, now."' },
      { lbl:'The baby, honestly',     txt:'"You asked about the baby. The kindest true answer: the baby is most likely fine — and the biggest risk to you both isn\u2019t stress, it\u2019s this continuing. Pregnancy is when this typically escalates, not settles. That\u2019s why I\u2019m not going to lose touch with you."' },
      { lbl:'The disguised net',      txt:'"Here\u2019s the plan that leaves no trace: the helpline number goes in your phone as a hair salon. Next week you have \u2018antenatal bloods\u2019 — that\u2019s our next conversation, in the building, alone. If it ever turns urgent: 999, and if you can\u2019t speak, press 55 when they answer — the operator understands silence."' },
    ],
    learning:'Strangulation ("held by the throat"), escalation, and pregnancy form the highest-risk cluster in domestic abuse — recognise it by name. The consultation\u2019s job is not rescue: it is safety-to-talk protocols on video, believing without sirens, risk-marker assessment, and a route to help the patient controls — with one honest limit stated up front (an unborn child engages safeguarding via the midwife, told to her, never behind her). Document securely; never send anything home. 0808 2000 247; 999 then 55 for silent calls.',
    knowledge:{
      guideline:'NICE PH50 domestic violence & abuse · RCGP/IRIS guidance · Care Act/safeguarding-unborn pathways',
      points:[
        { h:'Diagnose the real presentation', t:'Tension headaches + tiredness + 3 same-day cancellations + an implausible A&E "door frame" + long sleeves in July + an abandoned midwife self-referral = a disclosure being tested, not a headache problem. The booking reason is the ticket, never the story.' },
        { h:'Red flags & same-day action', t:'Non-fatal strangulation is the single strongest predictor of later homicide — held-by-the-throat counts. Escalation + pregnancy completes the highest-risk triad. If tonight is not safe: refuge/IDVA crisis routes and 999/55 silent-call coaching before the call ends.' },
        { h:'Investigate — only what helps', t:'Risk markers by name (strangulation, escalation, weapons, jealousy/control, pregnancy, children); tonight\u2019s safety; her one safe person; what Dean can see (phone, letters, online records — consider record access controls). No examinations or photos on video; offer in-person documentation of injuries under a routine pretext.' },
        { h:'Manage at her pace', t:'IDVA referral with consent; National DA Helpline 0808 2000 247 stored under a disguised name; exit-bag and safe-address planning toward the sister; the GP visit pretext ("antenatal bloods") as the standing route back. Her speed, her controls — coerced rescue replicates coercion.' },
        { h:'Refer — the honest limit', t:'The pregnancy engages safeguarding for the unborn: booking with a safeguarding-aware midwife and, if risk escalates, children\u2019s social care — explained to her BEFORE it happens. MARAC referral where threshold met. Police only with her consent unless immediate life-threat.' },
        { h:'Safety-net & follow-up', t:'Plain triggers: any strangulation, threats to kill, weapons → 999 (silent: 55). Next contact engineered as routine and dated. Secure/coded documentation; nothing printed, texted or posted home; flag the record so no colleague telephones the house "helpfully".' },
        { h:'Marking edge', t:'Three cues carry the station: the sleeves, "he doesn\u2019t like me wasting doctors\u2019 time", and the sideways baby question. The Clear Pass checks she\u2019s alone before anything, believes out loud, names the throat marker for what it is, and ends with a next contact Dean has no reason to question.' }
      ]
    }
  };

  /* ============ 20. TELEPHONE — A teacher rings about a pupil ============ */
  const c20 = {
    id:'teacher-call', title:'The teacher\u2019s phone call', type:'telephone', duration:12,
    meta:{ age:8, sex:'M', setting:'Telephone — school safeguarding lead calling about a registered patient.', system:'Child safeguarding / Professional' },
    brief:'Mrs Angela Reeve, designated safeguarding lead (and Year 4 teacher) at the local primary, telephones about Tyler Brooks, 8, a patient at your practice. He has arrived hungry most mornings this term, has started wetting himself again, flinched "quite dramatically" when a male TA raised his voice, and his PE kit hides bruising on his shin she "couldn\u2019t quite make sense of". Records: Tyler has 2 DNA\u2019d asthma reviews; an A&E attendance 6 weeks ago (arm pain, "fell off bunk bed", discharged); mum recently moved in with a new partner per the health visitor\u2019s note on a younger sibling.',
    script:{
      opening:'"Hello doctor, thank you for ringing back. It\u2019s… delicate. I\u2019m calling about Tyler Brooks — he\u2019s in my class, and I\u2019m also meant to be the safeguarding lead, which is rather the problem. I know the family, you see. Socially. I\u2019ve been going back and forth for two weeks about whether I\u2019m imagining things, and I suppose I was hoping you could… look into it from your end? Quietly?"',
      facts:[
        { topic:'What she\u2019s seen',   text:'Hungry most mornings ("inhales the breakfast club toast"); new daytime wetting after years dry; the flinch at a raised male voice; shin bruising in odd places; "he\u2019s gone quiet — he used to be the chattiest boy in the room".' },
        { topic:'The timeline',       text:'All of it this term — which began around when mum\u2019s new partner moved in. Tyler has mentioned "Gav doesn\u2019t like noise".' },
        { topic:'Her hesitation',     text:'Only if her discomfort is explored: she and Tyler\u2019s mum were at school together; their families know each other; she\u2019s frightened of being identified as the referrer, of "blowing up a family over toast and a bruise", and of being wrong in a small town.' },
        { topic:'What she\u2019s done',   text:'Nothing formal yet. No referral to children\u2019s social care. She\u2019s logged notes "in my own notebook" — not the school system. The head "prefers things handled informally".' },
        { topic:'What she wants',     text:'For the GP to "look into it" — examine Tyler at an asthma review, "see what you think" — so that any referral comes from the surgery, not from her.' },
        { topic:'If pressed',         text:'She knows, really. "If a parent described this to me about another school\u2019s child, I\u2019d have referred a fortnight ago." Saying it out loud is what she needed.' },
      ],
      ice:{
        ideas:'Something is wrong at home since "Gav" arrived — she\u2019s pattern-matched it correctly and is fighting her own conclusion.',
        concerns:'HIDDEN AGENDA — she\u2019s socially entangled with the family and terrified of being identified as the referrer in a small community. Her real request isn\u2019t advice; it\u2019s for the GP to take the referral off her hands so she never has to be "the one who reported them".',
        expectations:'That the GP will quietly investigate and refer if needed, letting the school stay out of it. Needs to leave the call understanding that her duty doesn\u2019t transfer — but that she won\u2019t carry it alone.'
      },
      cues:['"I know the family, you see. Socially." — the entanglement, declared in the second sentence and shaping everything after.','"In my own notebook" — concerns kept OFF the school\u2019s system; the informal-handling culture is itself a finding.','"If a parent described this to me about another school\u2019s child…" — she already knows; she needs permission to act on it.']
    },
    checkpoints:[
      { dom:'tasks', text:'Listens fully and takes the concerns seriously as a safeguarding pattern: new hunger + secondary enuresis + flinching + unexplained bruising + behavioural change + new male partner in the home — names it as meeting the threshold for referral' },
      { dom:'tasks', text:'Holds confidentiality correctly both ways: receives all information freely, shares nothing about Tyler or the family beyond what safeguarding requires — and says which is which' },
      { dom:'tasks', text:'Reviews and contributes the GP-side picture: the bunk-bed A&E attendance, the DNA\u2019d reviews, the health-visitor note — recognising the records corroborate rather than reassure' },
      { dom:'tasks', text:'Is clear on the law of it: her safeguarding duty as DSL is hers and does not transfer — the school refers to children\u2019s social care; the GP makes their OWN referral in parallel and shares information lawfully; neither waits for the other' },
      { dom:'rto',   text:'Explores the hesitation and finds the entanglement — the friendship, the small town, the head\u2019s "informal" culture — without shaming her for two lost weeks' },
      { dom:'rto',   text:'Gives her what she actually needs: her own sentence reflected back ("you said it yourself — another school\u2019s child, you\u2019d have referred a fortnight ago") plus the facts that protect her (referrals can be managed sensitively; being wrong kindly beats being right too late)' },
      { dom:'rto',   text:'Addresses the notebook and the head\u2019s culture directly but constructively: concerns belong on the school\u2019s formal system today, and the LADO/governor route exists if the head obstructs' },
      { dom:'gs',    text:'Closes with parallel, dated actions: she refers to children\u2019s social care today and logs formally; the GP reviews the family records, makes the practice\u2019s own referral, flags the siblings, and books Tyler\u2019s "asthma review" as a legitimate clinical contact — with a same-day escalation line if Tyler presents injured or afraid to go home' },
    ],
    worked:[
      { lbl:'Receive everything',     txt:'"You can tell me all of it — information coming TO me breaches nothing. What I can\u2019t do is hand you details back about the family. So pour it out, and then we\u2019ll sort out who does what."' },
      { lbl:'Name the pattern',       txt:'"Listed together — the hunger, the wetting after years dry, the flinch, the bruising, the silence, all starting when a new partner moved in — that\u2019s not toast and a bruise. That\u2019s a pattern that crosses the referral line, and I think you know it does."' },
      { lbl:'Her own sentence',       txt:'"You said something important: another school\u2019s child, you\u2019d have referred two weeks ago. The friendship hasn\u2019t changed what Tyler needs — it\u2019s changed how much it costs YOU. Those are different problems, and I can help with the second one."' },
      { lbl:'The duty, straight',     txt:'"Here\u2019s the part I can\u2019t soften: the referral duty you hold as safeguarding lead is yours, and it doesn\u2019t transfer to me. What I CAN promise is that you won\u2019t act alone — the practice will make its own referral today, in parallel. Two referrals are stronger than one, and neither of us waits for the other."' },
      { lbl:'The notebook',           txt:'"The notebook worries me almost as much as the bruises — concerns that live in your handbag protect nobody and expose you completely. Today they go on the school\u2019s formal system, dated. And if the head wants it \u2018informal\u2019, that\u2019s what the LADO and your governors are for."' },
      { lbl:'Safety-net',             txt:'"Two more things before you go. If Tyler ever comes in injured, or says he\u2019s scared to go home — that\u2019s not a referral, that\u2019s a same-day call to children\u2019s services and they will tell you about police involvement. And ring me after you\u2019ve referred — I want to know it\u2019s done, and I want you to hear that you did right by him."' },
    ],
    learning:'A third-party safeguarding call runs on three rails at once: information flows IN freely (and the GP\u2019s own records — the implausible A&E story, the DNAs, the HV note — corroborate); confidentiality flows OUT only as safeguarding lawfully requires; and duties never transfer — the DSL refers, the practice refers in parallel, neither waits. The hidden agenda is the caller\u2019s: social entanglement and an "informal" school culture have paralysed her for two weeks, and the consultation\u2019s real work is converting her own sentence into her own referral, today, without shame.',
    knowledge:{
      guideline:'Working Together to Safeguard Children · NICE NG76 child abuse & neglect · GMC 0\u201318 confidentiality',
      points:[
        { h:'Diagnose the pattern', t:'New persistent hunger, secondary enuresis, flinching at raised male voices, oddly-sited bruising, behavioural shutdown — clustered, new this term, coinciding with a new male partner. Any one is soft; the cluster meets the referral threshold. The GP record (A&E "bunk bed", DNAs, HV note) corroborates.' },
        { h:'Red flags & same-day action', t:'Disclosed injury, a child afraid to go home, or sexualised disclosure → same-day children\u2019s social care contact (who advise on police), not a routine referral. Younger sibling in the household: the concern automatically extends to them.' },
        { h:'Investigate — what the GP actually does', t:'Review the whole family\u2019s records (attendances, DNAs, A&E letters, HV notes); flag the siblings; create a legitimate clinical contact (the overdue asthma review) to see Tyler — never a covert "examination for bruises" dressed as something else without safeguarding advice.' },
        { h:'Manage the call itself', t:'Receive everything; share nothing beyond lawful safeguarding need; correct the duty-transfer request explicitly — DSL refers, school logs formally, GP refers in parallel; LADO/governor route if school leadership obstructs; document the call verbatim with date and role of caller.' },
        { h:'Never do', t:'Never agree to "look into it quietly" as a substitute for referral; never reassure that the records are fine when they corroborate; never disclose family details back to the caller; never let two professionals each assume the other is referring.' },
        { h:'Safety-net & follow-up', t:'Dated parallel actions before the call ends (her referral today, yours today, the asthma review booked); same-day escalation triggers named; a return call agreed so the loop is closed — unclosed safeguarding loops are how children fall through.' },
        { h:'Marking edge', t:'"I know the family, socially" in the second sentence is the consultation. The Clear Pass treats her paralysis with the same clinical kindness as a patient\u2019s — reflects her own "another school\u2019s child" sentence back as the verdict, takes the shame out of two lost weeks, and ends with two referrals moving and a closed loop.' }
      ]
    }
  };

  /* ============ 21. TELEPHONE — The niece, the agency, the pressure sore ============ */
  const c21 = {
    id:'carer-neglect', title:'Fifteen-minute visits', type:'telephone', duration:12,
    meta:{ age:89, sex:'F', setting:'Telephone — niece (LPA holder) calling about her housebound aunt.', system:'Adult safeguarding / Older adults' },
    brief:'Mrs Doris Whitmore, 89, housebound after a hip fracture last year, has twice-daily private agency care arranged and funded via her niece Susan (58), who holds health-and-welfare and finance LPA and lives 90 minutes away. Susan has phoned, "probably fussing over nothing": on Sunday she found her aunt\u2019s lunch untouched and still film-wrapped, a sore "the size of a two-pound coin, weeping" at the base of her spine, last week\u2019s blister pack barely started, and the kitchen bin full of unopened supplement drinks. The carers\u2019 log says "all care given" every day. Doris has lost weight — "her rings spin on her fingers now".',
    script:{
      opening:'"Oh doctor, thank you for calling back — look, I\u2019m probably fussing over nothing, and I don\u2019t want to get anyone into trouble. The carers are perfectly nice girls, always rushing, bless them. It\u2019s just… I went up on Sunday, and a few things weren\u2019t right. Auntie Doris would be mortified at me ringing you. Where do I even start?"',
      facts:[
        { topic:'Sunday\u2019s visit',    text:'Lunch still film-wrapped at 4pm; Sunday\u2019s morning meds untouched in the blister pack; the sore at the base of the spine — "weeping through her nightie"; Doris in the same nightdress as the previous visit a fortnight ago.' },
        { topic:'The pattern',         text:'Weight loss over ~3 months ("rings spinning"); supplement drinks binned unopened; Doris drowsier and "less herself" on the phone; the agency log says "all care given, no concerns" daily — including days Susan now doubts anyone properly attended.' },
        { topic:'The agency',          text:'Cheapest of three quotes — 15-minute visits, different face most days, two no-shows Susan knows of ("they said the girl\u2019s car broke down"). Complaints line goes to voicemail.' },
        { topic:'Susan\u2019s guilt',     text:'Only if her hesitation is explored: SHE chose this agency, on price, because she\u2019s also managing Doris\u2019s dwindling savings under the finance LPA. "If I\u2019d paid for the better one…" She\u2019s frightened a safeguarding referral is effectively an accusation against herself.' },
        { topic:'Doris on the phone',  text:'Sweet, minimising, "the girls are run off their feet, dear". Capacity fluctuates with drowsiness. She\u2019d "hate a fuss" — and hates the idea of "a home" far more than she\u2019d ever admit to a sore.' },
        { topic:'What Susan wants',    text:'Officially: advice. Actually: someone with authority to take this over — to see Doris, judge the agency, and carry the decision she can\u2019t bear to make alone.' },
      ],
      ice:{
        ideas:'Something is wrong with the care — she\u2019s assembled the evidence correctly and keeps apologising for it.',
        concerns:'HIDDEN AGENDA — Susan chose the cheap agency to stretch her aunt\u2019s savings under her finance LPA, and is terrified that "raising a safeguarding" is an accusation that lands on HER. Her guilt is the brake on the referral.',
        expectations:'For the GP to see Doris, take charge, and make the hard calls — without anything that sounds like blame, police, or "putting Auntie in a home".'
      },
      cues:['"I don\u2019t want to get anyone into trouble" repeated like a tic — the fear of trouble is pointing at herself.','"I went with the cheaper one, you see — her money has to last" — the guilt, arriving as an aside about budgets.','"Auntie would be mortified" — Doris\u2019s minimising is part of the picture, not reassurance.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the cluster as probable neglect — untouched food and meds, weight loss, an untreated weeping sacral sore, falsified-looking "all care given" logs — and names it as a safeguarding concern under the Care Act, not a quality grumble' },
      { dom:'tasks', text:'Treats the clinical urgency TODAY: a weeping sacral pressure sore in a drowsy, losing-weight 89-year-old needs same-day assessment — GP visit and/or district nurses today, with sepsis/dehydration in the differential for the drowsiness' },
      { dom:'tasks', text:'Makes the safeguarding referral to the local authority adult-safeguarding team (with Susan, or with her knowledge) — and is straight that the GP cannot simply "keep an eye" instead' },
      { dom:'tasks', text:'Covers the system jobs: medication reconciliation (what HAS she missed?), pendant alarm/keysafe details for today\u2019s visit, agency on notice via CQC-relevant complaint, urgent care-needs reassessment — and checks Doris\u2019s capacity and wishes at the visit, since the plan is built around her, not just about her' },
      { dom:'rto',   text:'Hears "I don\u2019t want to get anyone into trouble" for what it is, explores it, and finds the price-of-the-agency guilt underneath' },
      { dom:'rto',   text:'Absolves the guilt explicitly and accurately: choosing affordable care in good faith is not neglect — the agency not delivering what was paid for is; the referral examines the CARE, not the niece' },
      { dom:'rto',   text:'Handles Doris\u2019s minimising and the "home" terror honestly: safeguarding exists to keep her safely AT home — say it, because both women fear the opposite' },
      { dom:'gs',    text:'Safety-nets the next 24 hours concretely: today\u2019s visit timed and named; if Doris is feverish, unrousable or the sore spreads — 999; Susan\u2019s same-day callback number; the loop closed with "I will ring you after I\u2019ve seen her"' },
    ],
    worked:[
      { lbl:'Upgrade it, kindly',     txt:'"Susan, I\u2019m going to gently disagree with one word: this isn\u2019t fussing. Untouched food, untouched tablets, weight going, and a weeping sore — any one alone, maybe. All four together is a picture, and you were right to ring."' },
      { lbl:'Today, not someday',     txt:'"The sore moves this from \u2018concern\u2019 to \u2018today\u2019: a broken area at the base of the spine in someone drowsy and losing weight can run away within days. I\u2019m arranging for her to be seen this afternoon — me or the district nurses, and I\u2019ll tell you which within the hour."' },
      { lbl:'Find the guilt',         txt:'"You\u2019ve said \u2018I don\u2019t want to get anyone into trouble\u2019 three times now — and I have a feeling the person you\u2019re most worried about is you. Tell me about choosing the agency."' },
      { lbl:'Absolve it, accurately', txt:'"Then hear this properly: choosing affordable care so her money lasts is called doing the LPA job. What\u2019s gone wrong is that the agency took the money and — on the evidence of that log book — didn\u2019t always come. The safeguarding referral examines THEM. You\u2019re the person who noticed."' },
      { lbl:'The \u2018home\u2019 fear',   txt:'"And the thing you\u2019re both bracing for — \u2018they\u2019ll put her in a home\u2019 — safeguarding is mostly the opposite: it exists to fix the care so she can stay safely in that house with her own kettle. That\u2019s the goal we write at the top of the form."' },
      { lbl:'Safety-net',             txt:'"Between now and the visit: if she\u2019s hot, can\u2019t be woken properly, or the sore looks angrier — that\u2019s 999, don\u2019t wait for me. Otherwise: someone clinical is in that house today, the safeguarding call goes in today with your name beside mine, and I ring you tonight with what I found. You\u2019re not carrying this alone any more — that\u2019s the whole point of having rung."' },
    ],
    learning:'Untouched food and medication, unexplained weight loss, an untreated pressure sore and "all care given" logs that contradict the evidence = organisational neglect until proven otherwise — a Care Act safeguarding referral to the local authority, alongside same-day clinical assessment (a weeping sacral sore in a drowsy 89-year-old is today\u2019s job, with sepsis in the differential). The hidden agenda is the caller\u2019s guilt: she chose the cheap agency under a finance LPA and fears the referral accuses her — absolve it accurately, and the referral she\u2019s been blocking happens. Doris\u2019s own minimising and her terror of "a home" must be answered, not bypassed: safeguarding\u2019s stated goal is keeping her safely at home.',
    knowledge:{
      guideline:'Care Act 2014 s42 adult safeguarding · NICE pressure ulcer guidance (CG179) · CQC notification routes',
      points:[
        { h:'Diagnose the cluster', t:'Film-wrapped meals, near-full blister packs, binned supplements, 3 months\u2019 weight loss, a weeping sacral ulcer, same nightdress a fortnight apart, and daily "all care given" entries — the log\u2019s contradiction of physical evidence is itself a key finding. Pattern = neglect (an abuse category), not a service-quality issue.' },
        { h:'Red flags & same-day action', t:'Weeping sacral pressure sore + new drowsiness + poor intake in an 89-year-old: same-day clinical review (GP/district nursing), sepsis and dehydration actively considered; 999 triggers (fever, unrousable, spreading redness) given to the family NOW. Missed medicines reconciled today — what exactly has she gone without?' },
        { h:'Investigate at the visit', t:'Full examination including the sore (grade, photograph per local policy, swab if infected), hydration/nutrition state, 4AT for the drowsiness, capacity for care decisions taken AT the visit; her own wishes documented — the plan is built with Doris, whose fear of "a home" will otherwise sink it.' },
        { h:'Refer — the Care Act route, named', t:'Section 42 safeguarding referral to the local authority adult safeguarding team today, with the niece\u2019s knowledge; district nursing for the ulcer; urgent care-needs reassessment; the agency\u2019s failures documented factually (dates, log entries vs evidence) — the local authority and CQC act on specifics, not adjectives.' },
        { h:'Never do', t:'Never downgrade to "keep an eye on it" because the caller apologises; never accept care logs over physical evidence; never let the patient\u2019s own minimising close the concern — neglect victims routinely defend their carers; never frame the referral as anyone\u2019s "trouble" — it examines the care, not the family.' },
        { h:'Safety-net & follow-up', t:'Today\u2019s visit timed and named before the call ends; 999 triggers in plain words; the GP rings the niece back the same evening with findings and next steps; the safeguarding loop has a named owner — unowned referrals are how housebound patients disappear.' },
        { h:'Marking edge', t:'"I don\u2019t want to get anyone into trouble", three times, is the consultation\u2019s lock — and the key is finding that the "anyone" is herself. Absolve the LPA-budget guilt accurately, answer the "home" terror with safeguarding\u2019s real goal, and the referral she came already knowing was needed finally gets made — today, with her name willingly beside yours.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c19, c20, c21);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'bruising-da': {
      ceg: ['Health disadvantage & vulnerabilities', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Kayleigh Morton', age: '31 years · female',
        pmh: ['A&E 4 months ago: facial bruising — "fell against door frame", discharged', 'Pharmacy pregnancy test positive ~3 weeks ago (midwife online self-referral started, never completed)'],
        meds: ['No regular medication'],
        allergy: 'NKDA',
        recent: '⚠ Pattern note: 3 appointments this year booked then cancelled within hours. Today\u2019s booking reason: "tiredness and headaches". Partner not registered at this practice.',
        reason: 'Video consultation — tiredness and headaches.'
      },
      timeMap: [
        { t:'0–1',  h:'Safety first',          d:'Before any history: "Are you alone?" + the code phrase for if that changes. The long sleeves and the off-screen glances are findings — bank them silently.' },
        { t:'1–5',  h:'The real history',       d:'Headache screen briskly (it\u2019s the ticket) — then the direct, gentle ask. If she discloses: risk markers by name — throat, escalation, and the pregnancy that explains the timing of this call.' },
        { t:'5–6',  h:'Believe & orient',       d:'"I believe you. This is not your fault." Then the honest map: what stays in her control, and the one limit (the unborn baby brings the midwife in — told to her face).' },
        { t:'6–10', h:'Plan at her pace',       d:'Tonight\u2019s safety; the sister as safe address; helpline stored as a salon; IDVA offer; the disguised next contact ("antenatal bloods") booked before the call ends.' },
        { t:'10–12',h:'Safety-net & close',     d:'999-then-55 explained; nothing printed or sent home; record flagged. End on her timetable: "You\u2019re driving. My job is to still be here next week."' }
      ],
      wordPics: {
        fail: 'Treats the headaches at face value and closes with stress advice; never checks she\u2019s alone (or asks intrusive questions while the partner is audibly home — actively dangerous); "why don\u2019t you leave?"; promises absolute secrecy then panics when the pregnancy emerges; sends a leaflet to the house.',
        pass: 'Establishes she\u2019s alone; asks directly and kindly; believes out loud; recognises strangulation + pregnancy as high-risk; gives the helpline and a route back; honest about the midwife/safeguarding limit; documents safely.',
        exc:  'The code-phrase protocol set up in the first minute; the three cues (sleeves, "wasting doctors\u2019 time", the sideways baby question) each answered; the throat marker named with calm gravity; everything offered at her pace with her controls — and the next contact engineered so Dean has no reason to question it. She ends the call with a salon number in her phone, a midwife she\u2019ll meet alone, and a doctor she\u2019ll come back to.'
      },
      avoid: [
        { dont:'"Why do you stay with him?"', instead:'"Leaving is the most dangerous fortnight of all of this — when you\u2019re ready, we plan it like a military operation, not a slammed door. Until then, my job is keeping the line open."', why:'"Why do you stay" blames her for the trap; naming leaving\u2019s real danger shows you know the territory.' },
        { dont:'"I\u2019m going to have to report this."', instead:'"Almost everything stays in your hands. One thing can\u2019t: the baby means a specialist midwife joins us — and you\u2019ll never find out about anything from a letter. I tell you first, always."', why:'A vague reporting threat confirms her worst fear and ends contact; the precise, face-first limit preserves trust.' },
        { dont:'"You should get those bruises looked at — can you come in tomorrow at 9?"', instead:'"Next week you have \u2018antenatal bloods\u2019 at the surgery — completely routine, nothing for anyone to question. While you\u2019re in, we\u2019ll take care of everything else, properly, alone."', why:'An unexplained urgent appointment is a flag Dean can see; a routine pretext is camouflage she can use.' }
      ]
    },

    'teacher-call': {
      ceg: ['Children & young people', 'Professional & ethical dilemmas'],
      stem: {
        name: 'Tyler Brooks (caller: school DSL)', age: '8 years · male',
        pmh: ['Asthma — 2 DNA\u2019d reviews this year', 'A&E 6 weeks ago: arm pain, "fell off bunk bed", discharged'],
        meds: ['Salbutamol inhaler (last issued 5 months ago)'],
        allergy: 'NKDA',
        recent: '⚠ Health-visitor note (younger sibling, 3/12 ago): "Mum\u2019s new partner now in household." School safeguarding lead has requested a call-back "about a pupil — delicate". No prior safeguarding flags on file.',
        reason: 'Telephone — professional third-party call.'
      },
      timeMap: [
        { t:'0–1',  h:'Open & receive',        d:'"I know the family, socially" lands in sentence two — bank it. Set the rails: everything can flow IN; nothing about the family flows out.' },
        { t:'1–5',  h:'Harvest the pattern',    d:'Hunger, wetting, the flinch, the bruising, the silence, the timeline against "Gav" arriving. Cross-check your own records out loud only as process, not detail.' },
        { t:'5–6',  h:'Name the threshold',     d:'"Clustered and new, that crosses the referral line." Then the duty, unsoftened: hers doesn\u2019t transfer; the practice acts in parallel.' },
        { t:'6–10', h:'Free the referrer',      d:'Explore the two-week paralysis; find the friendship and the head\u2019s "informal" culture; reflect her own another-school\u2019s-child sentence back; fix the notebook problem (formal log today; LADO if obstructed).' },
        { t:'10–12',h:'Close the loop',          d:'Dated parallel actions: her referral today, the practice\u2019s today, siblings flagged, asthma review booked as legitimate contact, same-day triggers named, callback agreed.' }
      ],
      wordPics: {
        fail: 'Agrees to "look into it quietly" and absorbs her duty (the designed trap); or recites confidentiality so rigidly that nothing is received; the corroborating GP records never checked; the call ends with both professionals assuming the other will refer — the precise mechanism by which children die in serious case reviews.',
        pass: 'Receives everything; names the cluster as referral-threshold; states that her DSL duty doesn\u2019t transfer and commits the practice to its own parallel referral; addresses the notebook; closes with dated actions.',
        exc:  'The entanglement is found and treated kindly but never indulged; her own sentence becomes the verdict; the "informal" school culture gets the LADO answer; the GP\u2019s corroborating records are recognised as evidence (not reassurance); siblings flagged; the asthma review engineered as legitimate eyes-on-Tyler; and the loop is explicitly closed — two referrals, today, callback booked, nobody waiting for anybody.'
      },
      avoid: [
        { dont:'"Leave it with me — I\u2019ll have a look at him at his next appointment."', instead:'"I\u2019ll do my part today — records, our own referral, and I\u2019ll get him seen. But the duty you hold as DSL is yours, and it doesn\u2019t transfer down a phone line. We act in parallel, both today."', why:'Absorbing her referral is the station\u2019s trap: it leaves the formal duty undischarged and the child unprotected if either party drops it.' },
        { dont:'"I can\u2019t discuss a patient with you — you\u2019ll need to go through safeguarding channels."', instead:'"You can tell me everything — receiving information breaches nothing, and what you\u2019ve seen matters. What I can\u2019t do is hand family details back. So talk, and then we\u2019ll divide the jobs."', why:'The rigid recitation stops the flow of exactly the information a child-protection picture is built from.' },
        { dont:'"Two weeks is a long time to have sat on this."', instead:'"You\u2019ve been carrying this for two weeks because you know this family — that\u2019s a human problem, not a professional failing. What matters is that it moves today, and after this call, it will."', why:'Shaming the delay teaches her to sit on the next one longer; absolution plus a dated action moves this one now.' }
      ]
    },

    'carer-neglect': {
      ceg: ['Older adults', 'Health disadvantage & vulnerabilities'],
      stem: {
        name: 'Doris Whitmore (caller: niece, LPA)', age: '89 years · female',
        pmh: ['Fractured neck of femur (repaired) last year — housebound since', 'Hypertension', 'AF'],
        meds: ['Blister-packed: amlodipine, apixaban, alendronic acid, calcium/D3 — agency-prompted'],
        allergy: 'NKDA',
        recent: '⚠ Niece (holds H&W + finance LPA) requesting urgent call-back: found aunt Sunday with food and meds untouched, sacral sore "weeping", weight loss, agency log states "all care given" daily. Last GP contact: medication review by phone, 5 months ago.',
        reason: 'Telephone — third-party safeguarding concern (private care agency).'
      },
      timeMap: [
        { t:'0–1',  h:'Open & listen',          d:'"Probably fussing… don\u2019t want trouble" — bank the tic. Let Sunday\u2019s scene be described in full before any structure.' },
        { t:'1–5',  h:'Build the picture',       d:'The four findings vs the log book; the weight timeline; missed apixaban doses counted (AF — the misses matter); the agency\u2019s no-shows and voicemail complaints line; Doris\u2019s drowsiness.' },
        { t:'5–6',  h:'Name it & date it',       d:'"This is a safeguarding matter, and the sore makes part of it a TODAY matter." Both halves said plainly — clinical urgency and Care Act referral.' },
        { t:'6–10', h:'Free the referrer',       d:'Find the cheap-agency guilt under "don\u2019t want trouble"; absolve it accurately (the referral examines the agency); answer the shared "they\u2019ll put her in a home" terror with safeguarding\u2019s real goal; plan the visit around Doris\u2019s own wishes and capacity.' },
        { t:'10–12',h:'Safety-net & close',       d:'Visit timed; 999 triggers (fever, unrousable, spreading sore); meds reconciliation today; referral lodged with Susan\u2019s knowledge; evening callback promised — the loop owned and closed.' }
      ],
      wordPics: {
        fail: 'Accepts "probably fussing" and books a routine review for next week; the sore goes unexamined for days; advises Susan to "raise it with the agency" as the whole plan; Doris\u2019s "the girls are run off their feet" taken as reassurance; no referral, no visit, no callback — the precise drift in which housebound patients deteriorate invisibly.',
        pass: 'Recognises probable neglect; arranges same-day clinical review of the sore and drowsiness; makes the Care Act referral; reconciles the missed medication including the anticoagulant; gives 999 triggers; books the callback.',
        exc:  'The log-vs-evidence contradiction named as a finding in itself; the apixaban misses flagged for what they mean in AF; Susan\u2019s guilt excavated and accurately absolved so the referral unblocks; the "home" terror answered with safeguarding\u2019s stay-at-home goal written into the plan; Doris\u2019s own voice and capacity placed at the centre of the visit; every action dated, every loop owned, the evening callback promised and meant.'
      },
      avoid: [
        { dont:'"It does sound concerning — keep a close eye and ring us if she gets worse."', instead:'"This stopped being watch-and-wait when you described the sore. Someone clinical is in that house today, and the safeguarding call goes in today. Your eye did its job by ringing me."', why:'"Keep an eye" returns the burden to the person who just tried to hand it over — and leaves a weeping ulcer unexamined.' },
        { dont:'"You\u2019ll need to take this up with the agency and social services yourself."', instead:'"Here\u2019s the division of labour: I handle today\u2019s clinical visit and lodge the safeguarding referral with your name beside mine. You write down dates and what you found, exactly as you told me. Neither of us does this alone."', why:'Redirecting a guilt-paralysed caller to do it all herself guarantees nothing happens; shared, dated actions guarantee it does.' },
        { dont:'"Choosing the cheaper agency probably wasn\u2019t the best idea with her needs."', instead:'"You stretched her savings so her care could last — that\u2019s the LPA job done in good faith. The agency taking the money and skipping the visits is the failure here, and that\u2019s exactly what the referral examines."', why:'Confirming her self-blame re-locks the consultation; accurate absolution is what gets the referral made.' }
      ]
    }
  });

})();
