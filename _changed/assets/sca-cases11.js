/* ============================================================
   Reasoning GP — Case Library batch 11: "The thyroid result"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   NG12 noted ONLY where a presentation genuinely maps (neck lump).
   Pushes into SCA_CASES + SCA_EXTRAS.
   Load AFTER sca-cases10.js.
   ============================================================ */

(function(){

  /* ============ 38. VIDEO — Overt hypothyroidism in a tired young woman ============ */
  const c38 = {
    id:'thyroid-hypo-young', title:'Tired, and not just tired', type:'video', duration:12,
    meta:{ age:31, sex:'F', setting:'Video consultation — fatigue; TFTs back abnormal.', system:'Endocrine / Overt hypothyroidism' },
    brief:'Mrs Hana Yilmaz, 31, accounts manager. Booked for her blood results after seeing a colleague three weeks ago for "exhausted all the time, putting on weight, freezing when no one else is". Bloods today: TSH 22 mU/L, free T4 7.1 pmol/L (low), TPO antibodies strongly positive. FBC, ferritin, B12, coeliac screen, glucose all normal. PMH: nil. Meds: none. Not on contraception.',
    script:{
      opening:'"Hi — thanks. So the receptionist said my blood test showed something with my thyroid? I did actually google it after she said the word, so I\u2019m half expecting you to tell me that explains why I feel like I\u2019m wading through treacle. I just want to know what it means and whether there\u2019s a tablet that gives me my life back, basically."',
      facts:[
        { topic:'The symptoms',       text:'If explored: months of fatigue, 5 kg weight gain despite no diet change, cold intolerance ("I wear a coat in the office"), dry skin, constipation, heavier periods, low mood and "brain like fog". All crept up over maybe six months.' },
        { topic:'The hidden thread',   text:'HIDDEN AGENDA — reachable when she\u2019s asked what she\u2019s really hoping for, or about periods/relationships: she and her husband have been trying to conceive for 14 months. Nothing yet. She has quietly decided it\u2019s her fault — "my body\u2019s clearly not working, look at the state of me." The tiredness she can live with; the not-pregnant she cannot.' },
        { topic:'What she\u2019s read',   text:'Googled "thyroid" already; landed on forums about thyroid and infertility and miscarriage; now frightened that even if she does conceive, the thyroid will "cause a problem". Hasn\u2019t voiced this — booked it as a tiredness appointment.' },
        { topic:'The self-blame',      text:'If the door is opened: hasn\u2019t told her husband how much the trying-and-failing is eating her; puts on a brave face; cries in the car. Reads every symptom as evidence she is "broken".' },
        { topic:'What she wants',      text:'Officially: a tablet to fix the tiredness. Actually: to know whether this is why she isn\u2019t pregnant, whether it\u2019s fixable, whether it\u2019s her fault — and permission to stop carrying the blame alone.' },
      ],
      ice:{
        ideas:'Her thyroid is underactive and explains the exhaustion and the weight — and (unspoken, from the forums) possibly why she hasn\u2019t conceived.',
        concerns:'HIDDEN AGENDA — 14 months of trying to conceive, self-blame ("my body doesn\u2019t work"), and forum-fuelled fear that the thyroid means infertility or miscarriage even once treated.',
        expectations:'A tablet that "gives her life back". Underneath: an honest answer on fertility, reassurance that this is treatable and not her fault, and a plan that takes the conception seriously.'
      },
      cues:['"Gives me my life back" — more weight on this than tiredness alone explains; something bigger is riding on the result.','A pause or deflection around periods / "anything else going on" — the conception pressing to be named.','"Look at the state of me" — self-blame surfacing as a throwaway; mark it and return.']
    },
    checkpoints:[
      { dom:'tasks', text:'Explains the diagnosis clearly and unfrighteningly: primary hypothyroidism, autoimmune (Hashimoto\u2019s — positive antibodies), common, and fully treatable with levothyroxine replacing what the gland under-makes' },
      { dom:'tasks', text:'Starts replacement correctly and safely: levothyroxine at an appropriate dose for a young healthy adult (≈1.6 µg/kg, often a full starting dose here rather than 25\u201350 µg), taken on an empty stomach, with a recheck of TSH at 6\u20138 weeks and titration to target' },
      { dom:'tasks', text:'Surfaces and addresses the conception agenda directly once known: untreated hypothyroidism genuinely affects fertility and pregnancy, and that is the GOOD news here — it is treatable and being treated; pre-conception the TSH target is lower (aim <2.5 mU/L) and pregnancy needs prompt dose increase and monitoring' },
      { dom:'tasks', text:'Reframes the self-blame with evidence: this is an autoimmune condition, not something she did or a sign she is "broken"; treating it is one of the most fixable fertility factors there is' },
      { dom:'tasks', text:'Folds in pre-conception care proportionately: folic acid, the plan to check TSH early in any pregnancy and increase the dose, and a low threshold for fertility review given 14 months of trying — without turning a results consultation into a fertility lecture' },
      { dom:'rto',   text:'Hears the weight under "give me my life back" and asks rather than assumes; receives the conception disclosure as the real consultation, not a tangent' },
      { dom:'rto',   text:'Meets the self-blame with warmth and fact, and gently suggests she not carry it alone — the husband, the shared load' },
      { dom:'gs',    text:'Safety-nets and follows up: how levothyroxine is taken and that benefit is gradual not overnight; 6\u20138 week TSH recheck booked; what to do the moment a pregnancy test is positive (contact us, dose up, urgent TFTs); review that holds both the thyroid and the trying-to-conceive' },
    ],
    worked:[
      { lbl:'The clear diagnosis',   txt:'"Your thyroid — the little gland in your neck that sets your body\u2019s tempo — has been running slow, and your immune system is the reason. It\u2019s called Hashimoto\u2019s, it\u2019s common, and crucially it\u2019s one of the most treatable things I see: we replace the hormone with a daily tablet and your tempo comes back up."' },
      { lbl:'Set expectations',      txt:'"One honest thing so you don\u2019t lose heart: this won\u2019t flip you back to normal overnight. Over a few weeks the fog lifts, the cold eases, the weight becomes easier to shift. We start the tablet, recheck the level in about six weeks, and fine-tune. You take it first thing, empty stomach, then breakfast half an hour later."' },
      { lbl:'Open the real door',    txt:'"Before I hand you a prescription — when you said you want your life back, I had a feeling there might be more riding on this than the tiredness. Is there anything else you\u2019re hoping this explains? … (receiving it) Fourteen months. Thank you for telling me — because that changes what today is about."' },
      { lbl:'The fertility truth',   txt:'"Here\u2019s what I want you to hear clearly: an underactive thyroid can absolutely make conceiving harder and can affect a pregnancy — and that is the BEST news you could get today, because it means we\u2019ve found something real and fixable. This isn\u2019t your body being broken. It\u2019s a treatable hormone level, and we\u2019re treating it. For trying to conceive we aim the level a bit lower than usual, and the moment you\u2019re pregnant we increase the dose straight away."' },
      { lbl:'Lift the blame',        txt:'"You said \u2018look at the state of me\u2019 like it was your fault. It isn\u2019t. This is your immune system, not your effort. And I\u2019d gently say — you\u2019ve been carrying the trying-and-not-yet alone, crying in the car. Your husband would want to carry half of that. You don\u2019t have to be the only one holding it."' },
      { lbl:'Tie it together',       txt:'"So: start levothyroxine today, folic acid today, recheck in six weeks aiming the level lower because we\u2019re planning for a baby. The second a test is positive you ring us — we increase the dose and check the bloods urgently, because that bit matters. And given fourteen months, I\u2019ll talk to you about a fertility review too. You came in for a tablet. You\u2019re leaving with a plan that takes the real thing seriously."' },
    ],
    learning:'Overt primary hypothyroidism (high TSH, low T4, positive TPO = Hashimoto\u2019s) in a young healthy adult is replaced with a full weight-based levothyroxine dose, taken fasting, rechecked at 6\u20138 weeks and titrated to target. That is the easy half. The marks live in the hidden agenda: a tiredness appointment is really a 14-month conception story carrying self-blame and forum-fuelled fear. Surface it, then deliver the counter-intuitive reframe — finding treatable hypothyroidism is GOOD news for fertility, not a verdict of brokenness — and adjust the plan: pre-conception TSH target <2.5, folic acid, immediate dose increase and urgent monitoring once pregnant, and a low threshold for fertility review. Lift the blame with evidence and share the load.',
    knowledge:{
      guideline:'NICE NG145 thyroid disease · BTA / Endocrine pre-conception & pregnancy thyroid guidance',
      points:[
        { h:'Diagnose and name it', t:'Primary hypothyroidism: ↑TSH with ↓free T4. Positive TPO antibodies indicate autoimmune (Hashimoto\u2019s) aetiology. Common, especially in women; presents with fatigue, weight gain, cold intolerance, dry skin, constipation, menorrhagia, low mood, "brain fog".' },
        { h:'Replace correctly', t:'Levothyroxine ≈1.6 µg/kg/day for a young, otherwise-well adult (a near-full starting dose is appropriate here; start low/slow only in the elderly or those with ischaemic heart disease). Take fasting, 30\u201360 min before food/other meds. Recheck TSH at 6\u20138 weeks; titrate to target (TSH within reference range, lower half if planning pregnancy).' },
        { h:'The fertility/pregnancy thread', t:'Untreated hypothyroidism impairs fertility and raises miscarriage and obstetric risk — so detection is GOOD news. Pre-conception aim TSH <2.5 mU/L. On a positive pregnancy test, increase levothyroxine promptly (commonly by ~25\u201350% / two extra doses per week as an interim) and check TFTs urgently; thyroid demand rises in the first trimester.' },
        { h:'Reframe the self-blame', t:'Autoimmune thyroid disease is not caused by lifestyle or effort. For a patient blaming her body for not conceiving, the evidence-based message is liberating: a fixable cause has been found and is being fixed.' },
        { h:'Pre-conception housekeeping', t:'Folic acid 400 µg daily; review other reversible factors; given 14 months of trying (>12 months = subfertility by definition), arrange/escalate fertility assessment for both partners rather than waiting on the thyroid alone.' },
        { h:'Never do', t:'Never hand over a prescription without finding the worry under "give me my life back"; never start low-dose-and-slow in a fit 31-year-old by reflex; never reassure about pregnancy without flagging the immediate dose-increase rule; never let the conception story go unaddressed once it surfaces.' },
        { h:'Safety-net & follow-up', t:'Explain gradual benefit and correct administration; book the 6\u20138 week TSH; give the explicit "positive test → ring us, dose up, urgent bloods" instruction; arrange fertility review; follow-up that holds both threads.' }
      ]
    }
  };

  /* ============ 39. VIDEO — Hyperthyroidism the patient is secretly glad of ============ */
  const c39 = {
    id:'thyroid-hyper', title:'"Everyone keeps saying how well I look"', type:'video', duration:12,
    meta:{ age:27, sex:'F', setting:'Video consultation — palpitations and tremor; TFTs abnormal.', system:'Endocrine / Hyperthyroidism' },
    brief:'Miss Priya Sundaram, 27, junior solicitor. Saw a colleague for "racing heart and shaky hands"; bloods today: TSH <0.01 mU/L, free T4 38 pmol/L (high), free T3 high, TRAb positive. Resting pulse 104 and regular at that visit. PMH: nil. Meds: none. The note flags she has lost ~9 kg over four months "without trying" and is "delighted with it".',
    script:{
      opening:'"So, the heart thing. It pounds, especially at night, and my hands shake so much a partner asked if I was hungover in a meeting. That\u2019s mostly why I came. The one upside is I\u2019ve dropped nearly a stone without lifting a finger — honestly everyone keeps telling me how amazing I look, so whatever\u2019s going on, is there a way to just\u2026 sort the heart bit and leave the rest?"',
      facts:[
        { topic:'The symptoms',       text:'If explored: palpitations, fine tremor, heat intolerance and sweating, loose stools, poor sleep, irritability "snapping at everyone", 9 kg weight loss over 4 months despite eating more. Periods lighter. Eyes feel "gritty"; if asked/examined on video, a suggestion of lid retraction / stare.' },
        { topic:'The hidden thread',   text:'HIDDEN AGENDA — the reluctance is the agenda: she has battled her weight and her body image for years, dieted miserably, and for the first time in her life is getting compliments. Part of her does not want this treated, because treatment means the weight returns. She half-knows the racing heart is dangerous but is bargaining to keep the weight loss.' },
        { topic:'The fear under it',    text:'If trust is built: the palpitations genuinely frighten her — a colleague her age "collapsed" recently — but admitting she needs full treatment means giving up the one thing making her feel good about herself. Conflicted, not careless.' },
        { topic:'Cardiac flags',        text:'If asked: no chest pain, no syncope, no breathlessness at rest — but the night-time pounding sometimes feels irregular and "skippy". No prior heart problems. No family history of thyroid or sudden death that she knows.' },
        { topic:'What she wants',      text:'Officially: fix the palpitations, keep the weight loss. Actually: to be taken seriously about the body-image cost of treatment, reassured the weight won\u2019t balloon uncontrollably, and helped to accept treatment she\u2019s frightened of for the wrong-but-human reason.' },
      ],
      ice:{
        ideas:'Something is overactive and it\u2019s causing the palpitations and tremor — and (quietly) the welcome weight loss.',
        concerns:'HIDDEN AGENDA — years of body-image struggle; the weight loss is the first thing making her feel good about herself, and she does not want to lose it. The palpitations frighten her but treatment threatens the one upside.',
        expectations:'"Sort the heart bit, leave the rest." Underneath: to be heard about the body-image cost, reassured weight won\u2019t spiral, and gently brought to accept proper treatment.'
      },
      cues:['"Leave the rest" / "everyone says how amazing I look" — the reluctance to be fully treated is the clinical problem, not an aside.','A flicker when the weight regain is mentioned — the real fear.','"A way to just sort the heart bit" — bargaining; she knows it\u2019s serious and is negotiating with it.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises and names overt hyperthyroidism, most likely Graves\u2019 (suppressed TSH, high T4/T3, positive TRAb, eye signs) — and conveys it is serious, not cosmetic: the weight loss is the body burning itself up, not a diet success' },
      { dom:'tasks', text:'Addresses the cardiac risk properly: resting tachycardia ~104, "skippy" palpitations → assess for AF (ECG), offer a beta-blocker (e.g. propranolol) for prompt symptom control while definitive treatment is arranged' },
      { dom:'tasks', text:'Arranges definitive management correctly: urgent endocrinology referral, antithyroid drug (carbimazole) discussion, and counsels the carbimazole agranulocytosis warning — sore throat/fever/mouth ulcers → stop and seek urgent FBC' },
      { dom:'tasks', text:'Checks for the eye disease and red flags: thyroid eye disease symptoms (grittiness, pain, double vision, visual change → urgent), and screens for thyroid storm features given how florid she is' },
      { dom:'tasks', text:'Handles the weight/body-image agenda without colluding and without shaming: validates how good the compliments feel, but is honest that this weight loss is a dangerous process; reframes treatment as protecting her heart and her future, and addresses the regain fear realistically (weight returns toward her own baseline, manageably, with support — not "ballooning")' },
      { dom:'rto',   text:'Reads "leave the rest" as the central issue and explores it rather than steamrolling to a management plan; receives the body-image disclosure with warmth, not judgement' },
      { dom:'rto',   text:'Holds the line kindly: does not bargain away necessary treatment to keep the patient happy, but does not lecture — brings her with him' },
      { dom:'gs',    text:'Safety-nets clearly: agranulocytosis rule in writing, thyroid-storm/severe-symptom red flags, eye red flags, ECG/endocrine timelines, and a follow-up that explicitly includes how she is coping with the weight change' },
    ],
    worked:[
      { lbl:'Name it honestly',      txt:'"The racing heart and the weight loss aren\u2019t two separate things with one good and one bad — they\u2019re the same thing. Your thyroid is stuck in overdrive and it\u2019s burning your body\u2019s fuel far too fast. The weight that\u2019s falling off isn\u2019t fat melting away healthily; it\u2019s your body consuming itself, including your heart muscle. That\u2019s why I can\u2019t just calm the heart and leave the rest — they\u2019re one problem."' },
      { lbl:'The heart, first',      txt:'"Your pulse was over 100 sitting still, and you\u2019re feeling skips at night — I want an ECG to make sure the rhythm\u2019s safe, and I\u2019ll start a tablet today that slows the heart and steadies the shake within a day or two while we sort the thyroid itself."' },
      { lbl:'Validate the real fear',txt:'"Can I say something I think is true? Part of you doesn\u2019t want me to fix this — because for the first time people are telling you you look amazing, and that\u2019s not nothing after a long fight with your weight. I\u2019m not going to pretend that doesn\u2019t matter. It really does."' },
      { lbl:'Hold the line, kindly', txt:'"And here\u2019s where I won\u2019t bargain with you, because I\u2019d be failing you if I did: a heart running like this for months can tip into a dangerous rhythm in someone your age. The compliments aren\u2019t worth your heart. What I CAN promise is that treating this doesn\u2019t mean ballooning — your weight settles back toward your own normal, gradually, and I\u2019ll support you through that part properly, not leave you to it."' },
      { lbl:'Definitive plan',       txt:'"So: the endocrine team see you urgently, and we\u2019ll likely start a medicine called carbimazole that switches the overdrive off. One safety rule that matters — if you get a sore throat, mouth ulcers or a fever on it, stop it and get an urgent blood test the same day, because rarely it drops your infection-fighting cells. And tell me about your eyes — gritty, any double vision or pain? Those I need to know about quickly."' },
      { lbl:'Hold the whole person', txt:'"When I see you back, I want to know two things: how the heart and the shakes are — and how you\u2019re doing with the weight changing again, honestly. That part is a real loss for you and I don\u2019t want to wave it away. We treat the thyroid AND we look after how you feel about your body. Both. Deal?"' },
    ],
    learning:'Florid hyperthyroidism (suppressed TSH, high T4/T3, TRAb positive, eye signs) is serious, not cosmetic — the "welcome" weight loss is catabolism, including of cardiac muscle. Manage the heart promptly (ECG for AF, beta-blocker for symptom control), refer urgently for definitive treatment (carbimazole with the mandatory agranulocytosis safety-net), and screen for thyroid eye disease and storm. The examinable core is the hidden agenda: a patient with a body-image history who is reluctant to be fully treated because the illness is finally winning her compliments. Validate that loss honestly, refuse to collude or bargain treatment away, reframe treatment as protecting her heart, address the regain fear realistically, and follow up the body-image cost as a real part of care.',
    knowledge:{
      guideline:'NICE NG145 thyroid disease · BTA hyperthyroidism / Graves\u2019 guidance · MHRA carbimazole safety advice',
      points:[
        { h:'Diagnose and stratify', t:'Overt hyperthyroidism: suppressed TSH with raised free T4 and/or T3. TRAb-positive with eye signs = Graves\u2019. Screen for AF, heart failure, and thyroid storm (fever, marked tachycardia/arrhythmia, agitation, vomiting, confusion → emergency).' },
        { h:'Control symptoms fast', t:'Beta-blocker (propranolol) for tachycardia, tremor, anxiety while definitive therapy is arranged. Get an ECG — new AF in thyrotoxicosis needs rate/rhythm and anticoagulation assessment.' },
        { h:'Definitive treatment + the carbimazole rule', t:'Urgent endocrine referral; antithyroid drugs (carbimazole; PTU in early pregnancy), radioiodine, or surgery. MANDATORY counselling: carbimazole can cause agranulocytosis — sore throat, fever, mouth ulcers → stop the drug and get an urgent FBC the same day. Also warn re hepatotoxicity.' },
        { h:'Thyroid eye disease', t:'Ask/look for grittiness, redness, proptosis, lid retraction, diplopia, reduced acuity/colour vision (optic nerve compression = emergency). Smoking worsens it. Refer eye involvement promptly.' },
        { h:'The body-image agenda — don\u2019t collude, don\u2019t shame', t:'Patients with weight/body-image histories may resist treating thyrotoxicosis because the weight loss is praised. Validate the genuine emotional pull, name the catabolic danger honestly, reframe treatment as cardiac protection, give realistic (non-catastrophic) expectations about weight returning to baseline, and offer support for that adjustment. Screen for disordered eating where the picture suggests it.' },
        { h:'Never do', t:'Never treat the weight loss as a happy side-effect; never bargain definitive treatment away to keep the patient onside; never omit the agranulocytosis warning; never miss AF or eye red flags.' },
        { h:'Safety-net & follow-up', t:'Agranulocytosis and storm red flags in writing; eye red flags; ECG and endocrine timelines confirmed; beta-blocker review; follow-up that explicitly checks both thyroid control and how she is coping with the body changes.' }
      ]
    }
  };

  /* ============ 40. TELEPHONE — Subclinical hypothyroidism: treat the number or the person? ============ */
  const c40 = {
    id:'thyroid-subclinical', title:'"My thyroid is the answer"', type:'telephone', duration:12,
    meta:{ age:52, sex:'F', setting:'Telephone — patient requesting levothyroxine after a borderline result.', system:'Endocrine / Subclinical hypothyroidism' },
    brief:'Mrs Lorna Petrie, 52. Requested thyroid bloods herself after reading online. Results: TSH 6.4 mU/L (mildly raised), free T4 normal (13.8), TPO antibodies negative. Repeat TSH 4 weeks later (per protocol): 5.9 mU/L, T4 normal. FBC, ferritin, B12, HbA1c, glucose normal. She has rung insisting on starting levothyroxine "to get my energy and my brain back". PMH: nil. Meds: none.',
    script:{
      opening:'"Right, I\u2019ll save us both time — I\u2019ve done my reading and I know my thyroid is underactive. The level\u2019s up, isn\u2019t it? That explains everything: I\u2019m shattered, I\u2019ve put on weight, my memory\u2019s like a sieve, I can\u2019t concentrate at work. I just need you to start me on the thyroid tablets so I can feel like myself again. My friend was exactly the same and levothyroxine changed her life."',
      facts:[
        { topic:'The symptoms',       text:'If explored: fatigue, weight gain, poor concentration, low mood, "brain fog", broken sleep, no energy. Also — if asked — hot flushes she dismisses, night sweats, periods now erratic and lighter, going months apart. She attributes ALL of it to the thyroid.' },
        { topic:'The hidden thread',   text:'HIDDEN AGENDA — reachable with gentle questioning: her husband moved out eight months ago after 24 years; she is functioning on the surface, drowning underneath. A failing thyroid is a diagnosis she can say out loud at work and to her mother. "My marriage ended and I\u2019m falling apart" is not. The thyroid is a shelter for grief and low mood she can\u2019t yet name.' },
        { topic:'The perimenopause',    text:'The erratic periods, flushes and sweats at 52 point hard at perimenopause — but she\u2019s fixed on the thyroid and brushes these off ("that\u2019s just my age, isn\u2019t it").' },
        { topic:'The friend',          text:'Her friend\u2019s "life-changing" levothyroxine is doing heavy lifting in her mind; she\u2019s anchored to a tablet as the fix and may feel dismissed if simply told no.' },
        { topic:'What she wants',      text:'Officially: levothyroxine. Actually: an explanation for feeling unlike herself that doesn\u2019t require naming the divorce or the low mood; to be taken seriously, not fobbed off; and — if reached gently — help with what\u2019s actually happening.' },
      ],
      ice:{
        ideas:'Her thyroid is underactive and is the single cause of the fatigue, weight, and brain fog — levothyroxine will fix it, as it did for her friend.',
        concerns:'HIDDEN AGENDA — a marriage that ended 8 months ago and a low mood/grief she cannot yet name; the thyroid is a socially acceptable explanation. Plus unrecognised perimenopause.',
        expectations:'To be started on levothyroxine. Underneath: to be believed and helped, without being forced to name the divorce before she\u2019s ready.'
      },
      cues:['"That explains everything" — one tidy physical cause being asked to carry far too much.','Flushes/erratic periods brushed off as "just my age" — perimenopause hiding in plain sight.','A change in tone if asked what life\u2019s been like lately, beyond the symptoms — the grief near the surface.']
    },
    checkpoints:[
      { dom:'tasks', text:'Interprets the result correctly and explains it honestly: subclinical hypothyroidism (mildly raised TSH, normal T4, antibody-negative), confirmed on repeat — NOT overt hypothyroidism; many such mild elevations are non-progressive or normalise' },
      { dom:'tasks', text:'Explains the evidence on treatment without dismissing her: with TSH <7, antibody-negative, age 52, levothyroxine is unlikely to relieve non-specific symptoms and trials show little benefit; appropriate plan is monitoring (repeat TFTs, e.g. 6\u201312 months) with a clear threshold to treat (TSH persistently >10, or symptomatic with antibodies/rising trend) — and a treatment trial can be discussed, not refused outright' },
      { dom:'tasks', text:'Does NOT just say no: takes the symptoms seriously and widens the lens — screens for the other causes she has pinned on the thyroid (perimenopause, mood, sleep, anaemia/B12 already normal)' },
      { dom:'tasks', text:'Recognises perimenopause from the erratic periods/flushes/sweats at 52 and names it as a strong, treatable candidate for her symptoms' },
      { dom:'tasks', text:'Creates space for the hidden agenda: asks what life has been like, beyond the blood test — and, once the divorce/low mood emerges, responds to it as the likely real driver, screening mood/risk appropriately' },
      { dom:'rto',   text:'Avoids the trap of a flat "your thyroid is fine, there\u2019s nothing wrong" — which would confirm her fear of being dismissed; validates that she feels genuinely unwell and commits to finding why' },
      { dom:'rto',   text:'Handles the "my friend\u2019s tablet changed her life" anchor with respect, not correction; brings her toward a better-fitting explanation rather than winning an argument' },
      { dom:'gs',    text:'Agrees a shared plan: monitor the TSH with a stated threshold, address perimenopause and mood concretely (options offered), safety-net for symptoms/worsening, and a follow-up that keeps her engaged rather than turned away empty-handed' },
    ],
    worked:[
      { lbl:'Believe her first',     txt:'"Before anything about the number — I can hear you feel genuinely awful, and I\u2019m not going to fob you off or tell you it\u2019s nothing. You feel unlike yourself, and my job is to find out why and help. Let\u2019s do that properly."' },
      { lbl:'The honest result',     txt:'"Here\u2019s what the tests actually show: your thyroid level is a little high, but the active hormone is completely normal and the antibodies are negative. We call that \u2018subclinical\u2019 — a borderline, mild change, and we repeated it to be sure. It\u2019s genuinely different from a truly underactive thyroid, and that matters for whether a tablet would help."' },
      { lbl:'The evidence, kindly',  txt:'"I want to be straight with you, because you\u2019ve done your reading: at this level, and with your antibodies negative, the studies show levothyroxine usually doesn\u2019t fix tiredness or brain fog — people hope it will and are disappointed, and the tablet isn\u2019t free of downsides. I\u2019m not refusing to ever treat it; I\u2019m saying I don\u2019t want to hand you a tablet that won\u2019t do the job and miss the thing that will."' },
      { lbl:'Widen the lens',        txt:'"Because everything you described — the exhaustion, the weight, the fog, the broken sleep — those are real, and the thyroid is only one of several things that cause them. Can I ask about your periods and whether you\u2019re getting any flushes or night sweats? … At 52, with periods spacing out and sweats, a lot of what you\u2019re feeling could be the perimenopause — and that we CAN treat well."' },
      { lbl:'Open the real door',    txt:'"One more thing, and tell me to mind my own business if you like — the blood test aside, what\u2019s life actually been like these past months? … (receiving it) Eight months. That\u2019s so recent, and so much. I think you came looking for a tablet because \u2018my thyroid\u2019s underactive\u2019 is an easier sentence to say than \u2018my marriage ended and I\u2019m on my knees\u2019. Both can be true — and the second one deserves help too."' },
      { lbl:'Shared plan',           txt:'"So here\u2019s what I\u2019d suggest instead of writing off your worry: we keep an eye on the thyroid level with another test in a few months, and the moment it crosses the line where treatment helps, we treat — I\u2019ll tell you exactly what that line is. Meanwhile we actually tackle what\u2019s likely driving this: the perimenopause, and how you\u2019re coping since he left. Come and see me face to face for that. You rang for one tablet; I\u2019d like to give you a plan that works."' },
    ],
    learning:'Subclinical hypothyroidism (mildly raised TSH, normal T4, antibody-negative, confirmed on repeat) in a 52-year-old usually does NOT warrant levothyroxine — at TSH <7 and antibody-negative, treatment rarely relieves non-specific symptoms and has downsides; the right plan is monitoring with a stated treat-threshold (persistent TSH >10, or symptomatic with antibodies/rising trend), with a trial discussable rather than flatly refused. But the trap is a dismissive "your thyroid is fine" — which confirms the patient\u2019s fear of being fobbed off. The skill is to believe the symptoms, decline the wrong tablet kindly, and widen the lens: perimenopause is screaming from the erratic periods and flushes, and the hidden agenda is a recent divorce and unnamed low mood for which the thyroid is a socially acceptable shelter. Name those gently, screen mood, and agree a shared plan that keeps her engaged.',
    knowledge:{
      guideline:'NICE NG145 thyroid disease (subclinical) · NICE NG23 menopause · CKS tiredness/fatigue',
      points:[
        { h:'Define subclinical hypothyroidism', t:'Raised TSH with NORMAL free T4. Confirm with a repeat 3\u20136 months apart (excluding non-thyroidal illness). TPO antibodies and degree of TSH elevation guide progression risk and management.' },
        { h:'When to treat vs monitor', t:'TSH persistently >10 mU/L → treat. TSH 4\u201310: generally MONITOR, especially if antibody-negative and over ~65; a time-limited levothyroxine TRIAL can be considered if symptomatic and younger, reviewing for genuine benefit and stopping if none. Antibody-positive or rising TSH raises progression risk — monitor more closely. Aim only to normalise TSH; over-treatment carries AF and osteoporosis risk.' },
        { h:'Don\u2019t pin everything on the thyroid', t:'Non-specific fatigue/weight/brain-fog has many causes. Here, a 52-year-old with erratic, spacing periods and flushes/sweats has perimenopause as a strong, treatable explanation (NG23) — and HRT or non-hormonal options address exactly her symptoms.' },
        { h:'The hidden agenda', t:'A tidy physical label ("my thyroid") can be a refuge from a harder truth — here a marriage ended 8 months ago and an unnamed low mood. Make space for it, screen mood and risk, and treat the grief/depression as the likely real driver without forcing premature disclosure.' },
        { h:'The communication trap', t:'Never say "your thyroid is fine, there\u2019s nothing wrong" — it confirms the fear of dismissal and ends engagement. Believe the symptoms, decline the wrong tablet with evidence and warmth, and offer a better-fitting plan.' },
        { h:'Never do', t:'Never start levothyroxine reflexively for a borderline TSH to satisfy a request; never miss perimenopause in a symptomatic woman ~50; never miss low mood hiding behind a somatic label; never leave her feeling fobbed off.' },
        { h:'Safety-net & follow-up', t:'State the monitoring interval and the exact treat-threshold; offer concrete perimenopause management; arrange a face-to-face for mood/menopause; safety-net for worsening or new features; keep her engaged rather than turned away.' }
      ]
    }
  };

  /* ============ 41. TELEPHONE — Subclinical hypothyroidism in early pregnancy ============ */
  const c41 = {
    id:'thyroid-subclin-preg', title:'The number that changed when she conceived', type:'telephone', duration:12,
    meta:{ age:34, sex:'F', setting:'Telephone — newly pregnant, anxious about a thyroid result.', system:'Endocrine / Thyroid in pregnancy' },
    brief:'Mrs Aoife Brennan, 34, 6 weeks pregnant (spontaneous, much wanted). Booking bloods flagged TSH 5.8 mU/L with free T4 low-normal (11.9); TPO antibodies POSITIVE. Non-pregnant reference would call this borderline; the pregnancy reference range is lower. Two previous first-trimester miscarriages (8 and 10 weeks), never fully investigated. PMH: nil. Meds: pregnancy multivitamin with folic acid. She has rung in tears having seen "thyroid" and "miscarriage" linked online.',
    script:{
      opening:'(Tearful, fast.) "Doctor, I\u2019m sorry — the midwife\u2019s letter said my thyroid\u2019s not right and I\u2019ve been up all night reading and it says thyroid problems cause miscarriage and I\u2019ve already lost two babies and I just — is this why? Did my thyroid kill them? And is it happening again with this one? Please just tell me what to do, I\u2019ll do anything."',
      facts:[
        { topic:'The pregnancy',       text:'6 weeks, conceived naturally after trying again; "the most wanted thing in the world". Two previous early miscarriages (8 and 10 weeks), never investigated beyond "bad luck". This pregnancy she is "terrified to hope".' },
        { topic:'The symptoms',        text:'If asked: a bit more tired than usual, otherwise well. No overt hypothyroid symptoms. The distress is almost entirely about the result and the past losses, not how she feels physically.' },
        { topic:'The hidden thread',    text:'HIDDEN AGENDA — the guilt. She has decided, overnight, that her body has already failed two babies and is failing a third; that the miscarriages were somehow her fault and the thyroid is the proof. She is not really asking for a management plan — she is asking to be told it is not her fault and that this baby can be saved.' },
        { topic:'The self-punishment',  text:'If reached: she has barely told her husband how much blame she carries; "everyone says these things just happen, but two? That\u2019s not luck, that\u2019s me." Sleep-deprived, catastrophising, in real distress.' },
        { topic:'What she wants',       text:'Officially: to know what to do about the thyroid. Actually: absolution and action — to be told the losses were not her fault, that this is treatable, and that starting treatment today gives this baby the best chance.' },
      ],
      ice:{
        ideas:'Her thyroid caused her two miscarriages and is about to cause a third; her body is failing her babies and it is her fault.',
        concerns:'HIDDEN AGENDA — overwhelming guilt and self-blame for two previous losses, now "confirmed" by the thyroid result; terror of a third loss.',
        expectations:'To be told what to do — and, underneath, to be absolved and given concrete action that protects this pregnancy today.'
      },
      cues:['"Did my thyroid kill them?" — the consultation is about guilt and grief at least as much as endocrinology; address both.','"I\u2019ll do anything" — desperate for action; give her a concrete plan to hold onto.','"Two? That\u2019s not luck, that\u2019s me." — the self-blame stated outright; meet it directly with evidence.']
    },
    checkpoints:[
      { dom:'tasks', text:'Interprets the result in the PREGNANCY context: TSH 5.8 with positive TPO antibodies in the first trimester is above the pregnancy target and, crucially, antibody-positive — this DOES warrant treatment, unlike the same number in a non-pregnant woman' },
      { dom:'tasks', text:'Acts promptly and correctly: start levothyroxine now, aim TSH to the pregnancy target (broadly <2.5 mU/L first trimester / per local range), recheck TFTs every ~4\u20136 weeks through pregnancy and titrate, and refer/discuss per local pathway (obstetric/endocrine)' },
      { dom:'tasks', text:'Addresses the miscarriage question HONESTLY and carefully: antibody-positive subclinical hypothyroidism is ASSOCIATED with increased miscarriage risk and treatment is offered to reduce it — but association is not proven causation, the past losses cannot be diagnosed retrospectively, and there is no way to say the thyroid "caused" them; what CAN be said is that this is found and treatable now' },
      { dom:'tasks', text:'Directly dismantles the self-blame: miscarriage is common and almost never something the woman did; two early losses do not equal "her fault"; even if the thyroid contributed, it is an autoimmune condition, not a choice or a failing' },
      { dom:'tasks', text:'Recognises the recurrent-miscarriage angle: two prior first-trimester losses plus this pregnancy warrants consideration of recurrent-miscarriage assessment/support per pathway, and she deserves more than "bad luck"' },
      { dom:'rto',   text:'Responds to the distress first — slows the call, acknowledges the terror and the grief of two losses — before delivering numbers; does not lead with endocrinology at a sobbing patient' },
      { dom:'rto',   text:'Offers genuine, evidence-true reassurance without false promises: cannot guarantee this pregnancy, but CAN give concrete protective action today and walk beside her through it' },
      { dom:'gs',    text:'Safety-nets and supports: starts treatment and books urgent TFT monitoring; arranges early pregnancy/obstetric support and miscarriage-aware follow-up; gives clear who-to-call routes (EPAU for bleeding/pain); follow-up that holds both the thyroid and her fear' },
    ],
    worked:[
      { lbl:'Stop and steady',       txt:'"Aoife, I\u2019m here, take a breath with me — you\u2019re not in trouble and you haven\u2019t done anything wrong. You\u2019ve been up all night frightened, carrying two losses and a letter that scared you. Let\u2019s go through this slowly together, and by the end you\u2019ll have a clear plan to hold onto. Okay?"' },
      { lbl:'The honest answer',     txt:'"Your real question first: did your thyroid kill your babies? I can\u2019t look back and tell you what caused losses years ago — no one honestly can, and I won\u2019t pretend to. What I CAN tell you is the truth that matters now: we\u2019ve found something, in this pregnancy, that we can treat today to give this baby the best possible chance."' },
      { lbl:'Lift the blame',        txt:'"And I need you to hear this clearly, because you said \u2018that\u2019s not luck, that\u2019s me\u2019 — it is not you. Early miscarriage is heartbreakingly common and is almost never anything the mother did. And the thyroid thing? That\u2019s your immune system, not a choice, not a failing, not a punishment. Whatever happened before, you did not do this to your babies."' },
      { lbl:'Why this time differs', txt:'"Here\u2019s why your result means something different now than it would if you weren\u2019t pregnant: in pregnancy we aim for a lower thyroid level, and your antibodies being positive tips the balance toward treating. So unlike a borderline result in someone not pregnant, yours is one we act on — and that\u2019s actually good news, because it\u2019s a lever we can pull."' },
      { lbl:'The concrete plan',     txt:'"So, action — because you said you\u2019d do anything: I\u2019m starting you on a thyroid tablet today, levothyroxine, safe and important in pregnancy. We check your level again in about four weeks and adjust to keep it where this baby needs it. I\u2019ll get the pregnancy and hormone team involved, and because you\u2019ve had two losses, you deserve proper support and assessment this time, not \u2018bad luck\u2019 — I\u2019ll arrange that."' },
      { lbl:'Walk beside her',       txt:'"I can\u2019t promise you this pregnancy — I won\u2019t lie to you — but I can promise you won\u2019t go through it alone or guessing. Any bleeding or pain, you ring the early pregnancy unit — I\u2019ll give you the number. And I want to see you, not just deal with you by letter, because the fear you\u2019re carrying needs looking after as much as the thyroid does. We do this together."' },
    ],
    learning:'The same TSH that means "monitor, don\u2019t treat" in a non-pregnant woman means "treat now" in early pregnancy with positive TPO antibodies — the pregnancy target is lower and antibody-positivity tips toward treatment. Start levothyroxine, aim TSH to the trimester-specific target, recheck every ~4\u20136 weeks, titrate, and involve the obstetric/endocrine pathway. But this is barely an endocrine consultation: it is a grief-and-guilt consultation wearing a blood result. Respond to the distress first, answer the "did my thyroid kill them?" question with rigorous honesty (association is not retrospective causation; the past cannot be diagnosed; what we CAN do is act now), and dismantle the self-blame with evidence — miscarriage is common, rarely the mother\u2019s doing, and autoimmune thyroid disease is not a failing. Recognise two prior losses as deserving recurrent-miscarriage assessment, not "bad luck", and walk beside her with concrete action and honest, non-false reassurance.',
    knowledge:{
      guideline:'NICE NG145 (thyroid in pregnancy) · Endocrine/obstetric thyroid-in-pregnancy guidance · RCOG recurrent miscarriage',
      points:[
        { h:'Pregnancy changes the thresholds', t:'Thyroid hormone demand rises in early pregnancy. Trimester-specific TSH targets are LOWER than non-pregnant (commonly aim <2.5 mU/L first trimester / per local lab). A "borderline" non-pregnant TSH can be abnormal in pregnancy.' },
        { h:'Antibodies tip the decision', t:'TPO-antibody-positive subclinical hypothyroidism in pregnancy is associated with increased miscarriage and adverse outcomes; treatment with levothyroxine is offered/recommended in this context, unlike the same biochemistry in a non-pregnant, antibody-negative woman.' },
        { h:'Manage promptly', t:'Start levothyroxine; recheck TFTs every ~4\u20136 weeks and titrate to the trimester target; in known hypothyroid women, increase the dose as soon as pregnancy is confirmed. Liaise with obstetric/endocrine services per local pathway. Continue postnatal review.' },
        { h:'Answer the causation question honestly', t:'Association is not proven causation, and prior losses cannot be retrospectively diagnosed. Avoid both false guilt ("yes, your thyroid did it") and false absolution that overclaims. The honest, helpful frame: we have found a treatable factor in THIS pregnancy and are acting on it.' },
        { h:'Address guilt and grief explicitly', t:'Early miscarriage is common (~1 in 5 recognised pregnancies) and almost never caused by anything the mother did. Two first-trimester losses warrant recurrent-miscarriage assessment/support (RCOG) — not dismissal as "bad luck". Respond to distress before biochemistry.' },
        { h:'Never do', t:'Never apply non-pregnant thresholds to a pregnant woman; never lead with numbers at a sobbing patient; never confirm or imply self-blame; never label two losses "bad luck" without offering assessment and support; never give false guarantees about the pregnancy.' },
        { h:'Safety-net & follow-up', t:'Levothyroxine started; urgent/serial TFT monitoring booked; obstetric/EPAU routes given (bleeding/pain); recurrent-miscarriage support arranged; named follow-up that holds both the thyroid management and her fear.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c38, c39, c40, c41);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'thyroid-hypo-young': {
      ceg: ['Investigations & results', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Hana Yilmaz', age: '31 years · female',
        pmh: ['No past medical history', 'TFTs: TSH 22, free T4 7.1 (low), TPO antibodies strongly positive', 'FBC, ferritin, B12, coeliac screen, glucose — all normal'],
        meds: ['None', 'No contraception'],
        allergy: 'NKDA',
        recent: 'Booked for results after a fatigue/weight-gain/cold-intolerance consultation 3 weeks ago. Has googled "thyroid".',
        reason: 'Video consultation — blood results.'
      },
      timeMap: [
        { t:'0–2',  h:'Open + the read',     d:'She\u2019s googled it. Let her tell you what she found and what she\u2019s hoping it explains — the "give me my life back" carries weight; note it.' },
        { t:'2–4',  h:'Name it kindly',       d:'Primary autoimmune hypothyroidism (Hashimoto\u2019s); common, treatable; levothyroxine replaces what the gland under-makes. Gradual benefit, not overnight.' },
        { t:'4–7',  h:'Find the real reason', d:'"Is there anything else you\u2019re hoping this explains?" — surface the 14-month conception story and the self-blame.' },
        { t:'7–10', h:'The fertility reframe', d:'Untreated thyroid genuinely affects fertility — and that\u2019s GOOD news: found and fixable, not "broken". Lower TSH target pre-conception; dose up the moment she\u2019s pregnant.' },
        { t:'10–12',h:'Plan + safety-net',     d:'Start levothyroxine + folic acid; 6\u20138 week TSH recheck; "positive test → ring us, dose up, urgent bloods"; fertility review given 14 months; share the load with her husband.' }
      ],
      wordPics: {
        fail: 'Hands over a prescription and a leaflet, starts a needless low-and-slow dose in a fit 31-year-old, never asks what\u2019s really riding on the result; the conception story and self-blame never surface; no folic acid, no dose-up-in-pregnancy rule, no fertility review — a "correct" prescription that misses the patient.',
        pass: 'Diagnoses and replaces correctly with the right dose and recheck; explains it well; surfaces the conception agenda when prompted and adjusts the TSH target; gives folic acid and basic pregnancy advice.',
        exc:  'Reads the weight under "give me my life back" and opens the real door before prescribing; delivers the liberating reframe — treatable hypothyroidism is good news for fertility, not evidence of brokenness; lifts the self-blame with evidence and gently shares the load with her husband; and leaves her with a plan that holds the thyroid AND the trying-to-conceive — dose, target, folic acid, the positive-test rule, and a fertility review.'
      },
      avoid: [
        { dont:'"It\u2019s just an underactive thyroid — one tablet a day and you\u2019ll be fine."', instead:'"It\u2019s very treatable, but before I hand you the tablet — when you say you want your life back, is there something bigger riding on this?"', why:'"Just a tablet" closes the door on the 14-month conception story that is the actual consultation.' },
        { dont:'"We\u2019ll start a low dose and build up slowly to be safe."', instead:'"You\u2019re young and otherwise well, so we can start a proper replacement dose and recheck in six weeks — the cautious low-and-slow approach is really for older hearts."', why:'Reflex low-dosing under-treats a fit 31-year-old and needlessly delays both symptom relief and conception readiness.' },
        { dont:'"Don\u2019t worry, your thyroid won\u2019t affect getting pregnant once it\u2019s treated."', instead:'"Untreated, it genuinely can affect fertility and pregnancy — which is why finding it is good news. We aim the level lower for conceiving, and the moment you\u2019re pregnant we increase the dose and check bloods urgently."', why:'A breezy reassurance misses the crucial pre-conception target and the immediate dose-increase rule she needs.' }
      ]
    },

    'thyroid-hyper': {
      ceg: ['Investigations & results', 'Mental health & addiction'],
      stem: {
        name: 'Priya Sundaram', age: '27 years · female',
        pmh: ['No past medical history', 'TFTs: TSH <0.01, free T4 38 (high), free T3 high, TRAb positive', 'Resting pulse 104 regular at last visit; ~9 kg weight loss over 4 months'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Saw colleague for palpitations and tremor. Note: "delighted with the weight loss". Eyes "gritty".',
        reason: 'Video consultation — blood results.'
      },
      timeMap: [
        { t:'0–2',  h:'Open + the bargain',  d:'"Sort the heart, leave the rest." Hear the reluctance — it IS the clinical problem. Don\u2019t rush past it.' },
        { t:'2–4',  h:'One problem, not two', d:'The weight loss and palpitations are the same thing: an overdriven thyroid burning the body, including heart muscle. Not cosmetic.' },
        { t:'4–6',  h:'Heart first',           d:'ECG for AF (skippy night-time beats); beta-blocker today for rate/tremor while definitive treatment is set up.' },
        { t:'6–9',  h:'The body-image truth',  d:'Validate the genuine pull of the compliments — then hold the line: the heart isn\u2019t worth it. Realistic regain expectations, with support.' },
        { t:'9–12', h:'Definitive + safety',   d:'Urgent endocrine referral; carbimazole + the agranulocytosis rule (sore throat/fever/ulcers → stop, urgent FBC); eye red flags; follow-up that includes how she\u2019s coping with the weight changing.' }
      ],
      wordPics: {
        fail: 'Treats the weight loss as a happy side-effect; bargains — "I\u2019ll calm the heart and we\u2019ll see" — to keep her onside; misses AF assessment; starts/awaits carbimazole without the agranulocytosis warning; never explores why she resists treatment, so she quietly under-engages and stays thyrotoxic.',
        pass: 'Names hyperthyroidism as serious; ECG + beta-blocker; urgent endocrine referral with the carbimazole safety-net; checks eyes; acknowledges the weight concern.',
        exc:  'Collapses the "good bit/bad bit" split — one dangerous process; manages the heart promptly; names and validates the body-image pull honestly without colluding or shaming; holds the line that her heart outranks the compliments; gives realistic, non-catastrophic regain expectations with support; counsels agranulocytosis and eye red flags; and follows up the body-image cost as real care, screening for disordered eating where it fits.'
      },
      avoid: [
        { dont:'"The weight loss is a nice bonus — let\u2019s just settle the palpitations."', instead:'"They\u2019re the same problem: your body is burning itself up, heart muscle included. I can\u2019t treat one and leave the other — and I won\u2019t pretend the weight loss is healthy, because it isn\u2019t."', why:'Calling catabolic weight loss a "bonus" colludes with the very belief that stops her accepting treatment.' },
        { dont:'"We\u2019ll start a beta-blocker and you can decide about the rest later."', instead:'"The beta-blocker steadies your heart today, but this needs proper treatment urgently — a heart running this fast for months can tip into a dangerous rhythm at 27. Let\u2019s set that up now."', why:'Deferring definitive treatment to keep her comfortable leaves her thyrotoxic and at cardiac risk.' },
        { dont:'"Try not to worry about putting the weight back on — it\u2019s not important right now."', instead:'"Losing this weight again is a real loss for you after a long fight, and I\u2019m not going to wave it away. It returns toward your own normal, gradually, and I\u2019ll support you through that part — but your heart comes first."', why:'Dismissing the body-image cost guarantees she won\u2019t voice it — and that\u2019s exactly what\u2019s driving her reluctance.' }
      ]
    },

    'thyroid-subclinical': {
      ceg: ['Investigations & results', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Lorna Petrie', age: '52 years · female',
        pmh: ['No past medical history', 'TSH 6.4 then 5.9 (repeat) — free T4 normal, TPO antibodies NEGATIVE', 'FBC, ferritin, B12, HbA1c, glucose — normal'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Requested thyroid bloods herself after online reading. Now requesting levothyroxine. Periods erratic/spacing; flushes (dismissed as "my age").',
        reason: 'Telephone — requesting to start thyroid tablets.'
      },
      timeMap: [
        { t:'0–2',  h:'Believe her first',    d:'She braces to be fobbed off. Lead with "you feel genuinely unwell and I want to find why" — not with the number.' },
        { t:'2–5',  h:'The honest result',     d:'Subclinical: mildly raised TSH, normal T4, antibody-negative, confirmed on repeat. Different from a truly underactive thyroid — and that matters for the tablet.' },
        { t:'5–7',  h:'The evidence, kindly',  d:'At this level, antibody-negative, levothyroxine usually doesn\u2019t fix fatigue/fog and isn\u2019t free of downsides. Not "no forever" — monitor with a stated threshold; trial discussable.' },
        { t:'7–10', h:'Widen the lens',        d:'Perimenopause from erratic periods + flushes at 52. Then open the real door: "what\u2019s life actually been like?" — the divorce, the unnamed low mood.' },
        { t:'10–12',h:'Shared plan',           d:'Monitor TSH + threshold; treat the perimenopause and the mood concretely; face-to-face follow-up; keep her engaged, not turned away.' }
      ],
      wordPics: {
        fail: 'Either caves and prescribes levothyroxine for a borderline antibody-negative TSH to satisfy the request, OR flatly refuses with "your thyroid\u2019s fine, there\u2019s nothing wrong" — confirming her fear of dismissal; perimenopause missed, divorce and low mood never surfaced; she rings off unhelped and unheard.',
        pass: 'Explains subclinical hypothyroidism correctly and the monitor-don\u2019t-treat logic; takes the symptoms seriously; recognises perimenopause and offers options; safety-nets.',
        exc:  'Believes her before touching the number; declines the wrong tablet with evidence AND warmth (a stated monitoring threshold, trial discussable, not a flat no); recognises perimenopause from the periods and flushes; gently opens the door to the recent divorce and unnamed low mood the thyroid was sheltering; screens mood; and agrees a shared, engaging plan that treats what\u2019s actually wrong.'
      },
      avoid: [
        { dont:'"Your thyroid\u2019s basically fine — there\u2019s nothing to treat, so there\u2019s nothing wrong."', instead:'"The thyroid is only mildly off and a tablet probably wouldn\u2019t fix how you feel — but you clearly DO feel unwell, and I\u2019m not leaving it there. Let\u2019s find what actually fits."', why:'"Nothing wrong" confirms her dread of being fobbed off and ends the consultation she needs.' },
        { dont:'"Okay, if you\u2019re sure, I\u2019ll start you on levothyroxine and we\u2019ll see."', instead:'"I don\u2019t want to give you a tablet that the evidence says won\u2019t help at this level and then miss the thing that will. Let\u2019s keep an eye on the thyroid with a clear line for when we\u2019d treat — and tackle what\u2019s more likely driving this."', why:'Prescribing to satisfy the request medicalises a borderline result and misses perimenopause and mood.' },
        { dont:'"The flushes and irregular periods are just your age, nothing to worry about."', instead:'"Those flushes and spacing periods at 52 actually point to the perimenopause — and unlike the thyroid, that\u2019s something we can treat well and might explain a lot of how you feel."', why:'Dismissing perimenopause as "your age" discards the most treatable explanation on the table.' }
      ]
    },

    'thyroid-subclin-preg': {
      ceg: ['Gender, reproductive & sexual health', 'Investigations & results'],
      stem: {
        name: 'Aoife Brennan', age: '34 years · female',
        pmh: ['6 weeks pregnant (spontaneous, much wanted)', 'Booking TSH 5.8, free T4 11.9 (low-normal), TPO antibodies POSITIVE', 'Two previous first-trimester miscarriages (8 & 10/40), never investigated'],
        meds: ['Pregnancy multivitamin with folic acid'],
        allergy: 'NKDA',
        recent: '⚠ Rang in tears after reading online linking "thyroid" and "miscarriage". Up all night.',
        reason: 'Telephone — distressed about a thyroid result in early pregnancy.'
      },
      timeMap: [
        { t:'0–2',  h:'Stop and steady',     d:'She\u2019s sobbing and catastrophising. Slow the call, acknowledge two losses and a frightening letter, promise a clear plan by the end. Distress before numbers.' },
        { t:'2–4',  h:'The honest answer',     d:'"Did my thyroid kill them?" — no one can diagnose past losses; don\u2019t pretend. What\u2019s true: found and treatable NOW, in this pregnancy.' },
        { t:'4–6',  h:'Lift the blame',        d:'Miscarriage is common and almost never the mother\u2019s doing; autoimmune thyroid is not a choice or a failing. "You did not do this to your babies."' },
        { t:'6–9',  h:'Why this time differs', d:'Pregnancy target is lower and antibody-positive tips toward treatment — so unlike a borderline non-pregnant result, we ACT. Start levothyroxine; recheck ~4 weeks; involve obstetric/endocrine.' },
        { t:'9–12', h:'Plan + walk beside',     d:'Concrete action she asked for; recurrent-miscarriage support (not "bad luck"); EPAU route for bleeding/pain; honest non-false reassurance; named follow-up that holds her fear too.' }
      ],
      wordPics: {
        fail: 'Applies the non-pregnant "borderline, just monitor" rule and misses that pregnancy + antibodies means treat; OR leads with biochemistry at a sobbing woman; confirms or fails to dismantle the self-blame; labels two losses "bad luck"; no recurrent-miscarriage support, no EPAU route — correct-sounding endocrinology that abandons the actual consultation.',
        pass: 'Recognises pregnancy lowers the threshold and antibody-positivity warrants treatment; starts levothyroxine with monitoring and obstetric involvement; responds to distress; gives a safety-net.',
        exc:  'Responds to the grief and terror first; answers "did my thyroid kill them?" with rigorous honesty — association is not retrospective causation, but here is what we CAN do now; dismantles the self-blame with evidence; treats correctly for the pregnancy context; recognises two losses as deserving assessment, not "bad luck"; and walks beside her with concrete action, an EPAU route, honest non-false reassurance, and a follow-up that looks after her fear as much as her thyroid.'
      },
      avoid: [
        { dont:'"That TSH is only borderline — in someone your age we\u2019d normally just keep an eye on it."', instead:'"In pregnancy we aim for a lower level, and your antibodies being positive tips us toward treating — so unlike a borderline result outside pregnancy, yours is one we act on today. That\u2019s actually good news."', why:'Applying non-pregnant thresholds misses a genuinely treatable, outcome-relevant problem.' },
        { dont:'"Try to calm down and let\u2019s go through your thyroid numbers."', instead:'"You\u2019ve been up all night frightened, carrying two losses — let\u2019s breathe and go slowly, and I promise you a clear plan by the end."', why:'Leading with numbers at a sobbing, grieving patient ignores the real consultation and loses her.' },
        { dont:'"These things just happen — two miscarriages is probably bad luck."', instead:'"Two early losses deserve more than \u2018bad luck\u2019 — I\u2019ll arrange proper assessment and support. And whatever caused them, it was not something you did."', why:'"Bad luck" both dismisses recurrent-miscarriage care she\u2019s owed and leaves the self-blame intact.' }
      ]
    }
  });

})();
