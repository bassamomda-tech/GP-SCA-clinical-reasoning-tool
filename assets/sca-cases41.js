/* ============================================================
   Reasoning GP — Case Library batch 41: "Skin & hair — what it means to them"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   The recurring lesson: hair/skin change is investigated properly AND
   its meaning to identity/self-esteem is addressed.
   Fills library cards already in the Skin & hair family.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases40.js.
   ============================================================ */

(function(){

  /* ============ 157. VIDEO — Diffuse hair loss in a young woman ============ */
  const c157 = {
    id:'hair-loss-young-woman', title:'"My hair\u2019s coming out in the shower \u2014 am I going bald?"', type:'video', duration:12,
    meta:{ age:28, sex:'F', setting:'Video consultation \u2014 diffuse hair shedding.', system:'Dermatology / Telogen effluvium & the work-up', checked:'October 2026' },
    brief:'Miss Carys Hughes, 28, teacher. ~3 months of increased DIFFUSE hair shedding (handfuls in the shower, hair on the pillow), thinning all over rather than a bald patch. On history: a stressful house move and a flu-like illness ~3\u20134 months ago, heavy periods, vegetarian diet, recent crash diet. She is highly distressed about her appearance, avoiding social events. Most diffuse shedding is TELOGEN EFFLUVIUM (a reactive, reversible shed after a trigger) \u00b1 iron/thyroid contributors \u2014 needs a structured work-up AND the emotional impact taken seriously.',
    script:{
      opening:"(Tearful, speaks quickly.) \"Thanks for seeing me. My hair is falling out — properly, handfuls of it in the shower, it's all over my pillow, and it just looks thinner everywhere. I'm 28, I'm terrified I'm going bald. I've been crying about it, I don't want to go out. Is something seriously wrong with me? Please, I just need it to stop — can you give me something for it?\"",
      facts:[
        { topic:"The hair loss", text:"About three months of heavy shedding: \"handfuls in the shower, hair all over my pillow and my jumper.\" It is thinner all over, not in patches. If asked: \"No bald spots — it's just everywhere.\" Ponytail feels much thinner." },
        { topic:"Scalp and nails", text:"If asked: scalp feels normal — no itch, soreness, redness, scaling or flaking. No broken-off hairs she has noticed. Nails fine. Happy to show her parting and hairline on the camera if asked." },
        { topic:"What happened before it started", text:"Only if asked about the months before: \"Loads, actually. We moved house — it was a nightmare — then I had a flu-type thing and was in bed for a week with a temperature. And I went on a really strict diet to lose weight.\" All of that was about three to four months ago." },
        { topic:"Diet", text:"\"I'm vegetarian anyway, and I cut right down on everything for a couple of months — mostly salads and soup.\" Lost about half a stone on the diet, on purpose. Eating normally again now." },
        { topic:"Periods", text:"If asked: \"They're really heavy. I've always had heavy ones\" — 7 days, flooding through a super tampon and pad on the heaviest days, regular cycle. Not pregnant — she and her partner use condoms; last period 2 weeks ago. Did not know periods could affect hair." },
        { topic:"General health", text:"\"I'm exhausted, but I thought that was the stress.\" If asked: no palpitations, no heat or cold intolerance, no weight change apart from the diet, bowels normal. No rashes, joint pains or mouth ulcers." },
        { topic:"Medicines and history", text:"No regular medicines, no supplements, no contraceptive pill. No allergies. No previous hair or skin problems. Has not changed hair products; does not dye or tie it tightly." },
        { topic:"Family", text:"If asked: \"Mum's hair is fine. My nan went a bit thin on top when she was old.\" No family thyroid disease she knows of." },
        { topic:"Social", text:"Primary school teacher, lives with her partner. Doesn't smoke, drinks a glass of wine at weekends. Has stopped going out with friends: \"I don't want anyone to see it.\"" },
        { topic:"Mood", text:"Only if asked kindly: \"I get through work. But evenings I just feel low and check my hair constantly.\" Sleep is poor. No thoughts of self-harm — \"No, nothing like that.\"" },
        { topic:"How to play it", text:"Anxious, tearful at the start; calms if the doctor takes her seriously. Volunteer the shedding and the distress; hold back the house move, illness, diet and heavy periods until asked. If told \"it'll grow back, don't worry\" without explanation, become more upset: \"You're not the one losing it.\" If given a clear reason and a timeline, ask \"So it'll grow back? Months though… that's hard\" and then relax." }
      ],
      ice:{
        ideas:"\"I think I'm going bald — or something is really wrong with me inside.\"",
        concerns:"HIDDEN AGENDA — \"It's silly, but it's me — it's how I feel like myself.\" Her hair is central to how she sees herself; she has stopped going out, feels low in the evenings and is quietly scared it means a serious illness. She only says this if the doctor asks what it means to her.",
        expectations:"\"Something to make it stop. And to know it's not something awful.\""
      },
      cues:[
        "\"Sorry, I've been crying about it all week.\" — said early; she opens up about mood if this is picked up.",
        "\"It's just everywhere, not patches.\" — answers the pattern question if asked.",
        "\"I've stopped going out.\" — only expands on the identity and low mood if invited."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises DIFFUSE shedding ~3 months after a trigger as likely TELOGEN EFFLUVIUM (reactive, usually reversible) and distinguishes it from androgenetic/patterned thinning, alopecia areata (discrete patches) and scarring alopecia (which needs prompt dermatology referral)' },
      { dom:'dg', text:'Identifies the TRIGGER(S) (stressful move, flu-like illness, crash diet) and explains the delayed-shed mechanism (shedding starts about 2–6 months after the trigger, PCDS 2024)' },
      { dom:'dg', text:'Checks reversible CONTRIBUTORS with appropriate tests: FERRITIN/iron studies (heavy periods + vegetarian/crash diet), THYROID function (TFTs), and considers nutrition, recent drugs and pregnancy \u2014 and treats deficiencies found' },
      { dom:'cm', text:'Gives REASONED reassurance (not a brush-off): explains telogen effluvium recovers once the trigger resolves and contributors are corrected, with an HONEST timeline (regrowth over months), rather than "don\u2019t worry, it\u2019ll grow back"' },
      { dom:'dg', text:'Screens for and addresses MOOD/psychological impact and knows when to refer (scarring alopecia, diagnostic uncertainty, patterned loss wanting treatment, no recovery) \u2014 avoiding both over-investigation and dismissal' },
      { dom:'ro',   text:'ACKNOWLEDGES what the hair means to her \u2014 identity, self-esteem, the distress and social withdrawal \u2014 and validates it, rather than minimising; treats reassurance as a skilled, empathic task' },
      { dom:'ro',   text:'Engages her in the plan and the timeline so she feels heard and hopeful, and supports the emotional impact and any low mood' },
      { dom:'cm',    text:'Safety-nets and follows up: the ferritin/TFT results and contributor treatment, the expected regrowth timeline and what would prompt review/referral (patchy/scarring loss, no recovery), mood support, and a follow-up \u2014 structured work-up + reassurance + emotional validation' },
    ],
    worked:[
      { lbl:'Acknowledge what it means', txt:'"Before anything medical \u2014 I can see how much this is upsetting you, and I want to say your hair matters and this is NOT vain or silly. Crying about it, not wanting to go out \u2014 that\u2019s a real and understandable response. So I\u2019m going to take it seriously and we\u2019ll work it out together."' },
      { lbl:'Name it + reassure with reason', txt:'"The good news, and I mean it with reasons not just to comfort you: hair that thins ALL over like this, a few months after a stressful or unwell patch, is almost always something called telogen effluvium. A shock to the system \u2014 your illness, the move, the crash diet \u2014 tips lots of hairs into their resting-then-shedding phase a couple of months later. It looks alarming, but it\u2019s reactive and it RECOVERS. You\u2019re not going bald."' },
      { lbl:'Check the contributors', txt:'"To help it bounce back fastest, let\u2019s check a couple of things that can keep it shedding \u2014 your iron levels, especially with heavy periods and being vegetarian and the diet, and your thyroid. If your iron\u2019s low, topping it up genuinely helps the hair as well as your energy."' },
      { lbl:'Honest timeline',      txt:'"I\u2019ll be straight about timing so you\u2019re not disheartened: the shedding usually settles within about six to nine months of starting, and the regrowth then comes through gradually over the months after that \u2014 you might even see little new short hairs at your hairline. It\u2019s not instant, but it does come back."' },
      { lbl:'Rule out the other kinds', txt:'"I’d like to have a proper look at your scalp in person — I can’t examine it properly on video, so let’s book you in at the surgery when you come for the blood test — just to be sure it’s this even shedding and not a patchy type or anything affecting the scalp itself, which we’d handle differently. From what you describe, it sounds like the reversible kind."' },
      { lbl:'Support + safety-net', txt:'"And how are you in yourself with all this \u2014 mood-wise? \u2026 This kind of thing can really get you down, and that\u2019s worth supporting too. So: I\u2019ll check your iron and thyroid, we\u2019ll treat anything low, and I\u2019ll see you to follow the regrowth. If it ever became patchy, or the scalp looked scarred, or it\u2019s not recovering, we\u2019d look again \u2014 but I\u2019m expecting your hair back. You\u2019re not losing it for good."' },
    ],
    learning:'Diffuse hair shedding all over (not a discrete patch) ~2–6 months after a trigger (PCDS Hair Loss Pathway 2024) \u2014 illness/fever, childbirth, surgery, crash diet, severe stress, certain drugs \u2014 is the classic picture of TELOGEN EFFLUVIUM, a reactive, usually self-limiting and reversible shed. Identify the trigger and check reversible CONTRIBUTORS (ferritin/iron \u2014 here heavy periods + vegetarian/crash diet; TFTs; nutrition; drugs; pregnancy), distinguish it from androgenetic/patterned thinning, alopecia areata (discrete patches) and scarring alopecia (prompt dermatology), and treat deficiencies. The reassurance (recovery) is true and central \u2014 but delivered as a brush-off ("it\u2019ll grow back") it dismisses real distress; give REASONED reassurance with an honest regrowth timeline (months). The examinable hidden agenda is that the consultation is as much about IDENTITY and self-esteem as the scalp: at 28 her hair is central to how she sees herself, the shedding has caused distress, social withdrawal and possibly low mood. Acknowledge what the hair MEANS to her, validate it, support mood, and combine structured work-up + reassurance + emotional validation.',
    knowledge:{
      guideline:'PCDS Hair Loss Pathway (November 2024) · British Association of Dermatologists (BAD) patient information: telogen effluvium · BSG iron deficiency anaemia guideline (2021) · NICE NG88 Heavy menstrual bleeding (2018, updated July 2026) · NICE NG145 Thyroid disease (2019) · NICE NG222 Depression in adults (2022, last reviewed January 2026) · telogen effluvium · iron and thyroid in diffuse alopecia · psychological impact of hair loss',
      points:[
        { h:'Recognise telogen effluvium', t:'Diffuse, non-scarring shedding (handfuls, all over), typically starting 2–6 months after a trigger and usually settling by 6–9 months (PCDS Hair Loss Pathway 2024); positive hair-pull test, no discrete bald patches. Triggers: febrile illness, childbirth (postpartum), surgery, severe stress, crash dieting/rapid weight loss, iron deficiency, thyroid disease, and certain drugs. Usually self-limiting and reversible.' },
        { h:'Check reversible contributors', t:'Check FBC, FERRITIN/iron studies (PCDS advises FBC, ferritin and thyroid function for diffuse hair loss; ferritin is the most useful marker of iron deficiency, BSG 2021; heavy periods warrant an FBC in their own right, NICE NG88; low iron worsens/prolongs shedding \u2014 common with heavy menses, vegetarian/restricted diet) and THYROID function (TFTs). Review nutrition, recent illnesses/surgery, medications, and pregnancy/postpartum status. Treat deficiencies found (oral iron dose per BNF; manage abnormal thyroid function per NICE NG145).' },
        { h:'Distinguish the alopecias', t:'Androgenetic (patterned thinning \u2014 vertex/temples/part-line; treatable with topical minoxidil etc.); alopecia areata (discrete round patches, exclamation-mark hairs \u2014 may need dermatology); scarring/cicatricial alopecia (loss of follicular openings, redness, scale or pain — PROMPT dermatology referral to prevent permanent loss, PCDS 2024); tinea capitis in children. Diffuse even shedding after a trigger = telogen effluvium.' },
        { h:'Reasoned reassurance, not a brush-off', t:'Explain the mechanism and the realistic timeline (PCDS Hair Loss Pathway 2024: shedding usually settles by about 6–9 months; regrowth is gradual after that, often with short regrowth hairs at the hairline; topical minoxidil is not a routine treatment for telogen effluvium). Avoid the dismissive "don\u2019t worry, it\u2019ll grow back" \u2014 reassurance must be reasoned and paired with validating the distress.' },
        { h:'Address the meaning & mood', t:'Hair loss has a major psychological impact on identity, self-esteem and social function. Acknowledge what the hair means to the patient, validate the distress, screen mood, and offer support. This is central, not an aside.' },
        { h:'When to refer', t:'Refer to dermatology for: scarring alopecia (urgent), diagnostic uncertainty, suspected alopecia areata needing treatment, patterned loss wanting treatment, or failure to recover. Avoid both over-investigation of clear telogen effluvium and missing a scarring process.' },
        { h:'Never do', t:'Never dismiss diffuse shedding with "it\u2019ll grow back" without a work-up and validation; never miss iron deficiency/thyroid contributors; never mistake scarring alopecia for telogen effluvium; never ignore the identity/self-esteem impact and mood.' },
        { h:'Safety-net & follow-up', t:'Ferritin + TFTs and treat contributors; reasoned reassurance with an honest regrowth timeline; mood support; review regrowth and refer if patchy/scarring/non-recovering; structured work-up + reassurance + emotional validation.' }
      ]
    }
  };

  /* ============ 158. VIDEO — Postpartum hair loss: telogen effluvium + the new-mother context ============ */
  const c158 = {
    id:'postpartum-hair-loss', title:'"My hair\u2019s falling out since the baby \u2014 on top of everything else"', type:'video', duration:12,
    meta:{ age:33, sex:'F', setting:'Video consultation \u2014 hair loss 4 months postpartum.', system:'Dermatology / Postpartum telogen effluvium', checked:'October 2026' },
    brief:'Mrs Lauren Mbeki, 33, 4 months postpartum (first baby). Distressing hair shedding for a few weeks \u2014 clumps when brushing, a thinning hairline/temples. This is classic POSTPARTUM TELOGEN EFFLUVIUM (the post-delivery shed, very common, self-limiting). BUT the real consultation is the exhausted, overwhelmed new mother: the hair loss is "the last straw" on top of sleep deprivation, possible postnatal low mood, body-image change and feeling she\u2019s "falling apart". The hair is benign; the maternal wellbeing is the case.',
    script:{
      opening:"(Tired, flat, slightly tearful.) \"I know this probably sounds trivial with everything else going on, but my hair is falling out in clumps since I had the baby — my hairline's going thin and I look awful. It's just the last straw, honestly. I'm exhausted, I feel like I'm falling apart, and now I'm losing my hair on top of it all. Is this normal? Will it stop? I just feel like nothing about my body is mine any more.\"",
      facts:[
        { topic:"The hair", text:"Started a few weeks ago, about three months after the birth: \"clumps in the brush and in the shower.\" Thinnest at the front and the sides (temples). No bald patches — \"just thin all over at the front.\" Scalp not itchy or sore. Will show the hairline on camera if asked." },
        { topic:"The birth and baby", text:"First baby, a girl, Maya, now 4 months old, healthy and growing well. Vaginal delivery with \"a fair bit of bleeding afterwards — they said I lost a lot\"; not transfused. Breastfeeding, which has been hard work." },
        { topic:"Energy", text:"\"I'm tired all the time. I can't tell what's normal tiredness with a baby.\" Up two or three times a night feeding. If asked: no palpitations, no feeling hot or shaky, weight has dropped back to pre-pregnancy." },
        { topic:"Mood — only if asked directly", text:"If asked about low mood and enjoyment: \"Yes to both, honestly. I don't really enjoy anything. I love the baby, I do, but I feel flat.\" Has felt like this for about 6–8 weeks. If asked about anxiety: \"Worrying all the time. Whether I'm doing it right. Whether something will happen to her.\"" },
        { topic:"Risk", text:"If asked about thoughts of harming herself or the baby: \"No. Nothing like that. I just want to sleep.\" No intrusive thoughts of harm. Bonding is there: she feels love but no joy." },
        { topic:"Support", text:"Partner, Dan, works long shifts as an electrician. Her mum lives two hours away. \"Not as much help as I'd like. I don't want to be a burden.\" Has not told the health visitor how she feels: \"I thought I'd be judged.\"" },
        { topic:"Body image", text:"\"Everything's changed — my stomach, my boobs, and now the hair. I don't recognise myself.\"" },
        { topic:"History, medicines, social", text:"No previous depression or anxiety. No thyroid problems. Takes a pregnancy multivitamin, nothing else. No allergies. Non-smoker, no alcohol while breastfeeding. Marketing assistant, on maternity leave." },
        { topic:"How to play it", text:"Start with the hair; say \"it sounds trivial\". If the doctor only reassures about the hair and moves to close, go quiet and say \"Okay… thanks\" without raising the mood. If asked how she is really doing, pause, then tearfully share the flat mood and worry. React with relief to \"lots of mums feel this, and it's treatable\": \"I didn't want to say it. I thought I'd be judged.\"" }
      ],
      ice:{
        ideas:"\"I suppose it's the baby hormones — but nobody told me it would be this bad.\"",
        concerns:"HIDDEN AGENDA — she feels flat, anxious and \"not me\" and is frightened of being judged as a bad mother. The hair is the last straw that got her to book. She only talks about her mood if invited.",
        expectations:"\"Tell me if the hair will stop. And… I suppose I needed to say the rest to someone.\""
      },
      cues:[
        "\"It's just the last straw.\" — said early; invites \"what else is going on?\"",
        "\"Nothing about my body is mine any more.\" — body image and identity.",
        "\"I don't want to be a burden.\" — explains why she hasn't asked for help."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises POSTPARTUM TELOGEN EFFLUVIUM (synchronous post-delivery shed peaking ~3\u20134 months postpartum, hairline/temples) as common, benign and self-limiting, and gives strong, accurate reassurance of recovery over ~6\u201312 months' },
      { dom:'dg', text:'Checks appropriate reversible contributors given the postpartum context: FERRITIN (delivery blood loss/breastfeeding) and TFTs (postpartum thyroiditis can cause hair/mood/energy symptoms) \u2014 without over-investigating' },
      { dom:'ro', text:'Recognises the hair loss as the PRESENTING TICKET and opens the door to the REAL issue \u2014 how she is coping as a new mother \u2014 rather than reassuring about the hair and ending the consultation' },
      { dom:'dg', text:'Screens for POSTNATAL DEPRESSION/anxiety and explores exhaustion, body image, support and risk \u2014 and offers appropriate support/treatment (perinatal pathway, health visitor, talking therapy) where indicated' },
      { dom:'ro', text:'Validates the body-image change and loss of identity ("nothing about my body is mine") as a real and common postpartum experience, and frames support around the whole person' },
      { dom:'ro',   text:'Responds to the exhaustion and emotion with warmth, does not dismiss the hair concern as trivial, and treats the hair reassurance as the gateway to caring for the mother' },
      { dom:'ro',   text:'Creates a safe space for her to talk about how she\u2019s really doing, validating the "falling apart" feeling without judgement' },
      { dom:'cm',    text:'Safety-nets and follows up: ferritin/TFT results, the hair-recovery timeline, postnatal mental-health support and follow-up (health visitor/perinatal/crisis routes if needed), and a review of HER \u2014 the hair is benign; the mother\u2019s wellbeing is the priority' },
    ],
    worked:[
      { lbl:'Reassure the hair, warmly', txt:'"First, the hair \u2014 and this is genuinely reassuring: losing hair a few months after having a baby is incredibly common and completely benign. In pregnancy your hormones keep your hair growing, and afterwards a big batch sheds together \u2014 that\u2019s what you\u2019re seeing, often at the hairline. It settles and grows back over the next six months to a year. You are not going bald."' },
      { lbl:'It\u2019s not trivial',   txt:'"And please don\u2019t call it trivial \u2014 you said it\u2019s the last straw, and I heard that. When you\u2019re running on empty, one more thing that feels out of your control is a lot. So I don\u2019t want to just tick off the hair and move on."' },
      { lbl:'Open the real door',   txt:'"Can I ask how YOU are actually doing \u2014 not the baby, you? You said you feel like you\u2019re falling apart, and that nothing about your body feels like yours anymore. That\u2019s a really honest thing to say, and it\u2019s so common after a baby. Tell me more about how things have been."' },
      { lbl:'Screen mood gently',   txt:'"With the exhaustion and feeling this low \u2014 how\u2019s your mood most days? Are you able to enjoy anything, sleeping (when the baby lets you), and have you had any thoughts that worry you? \u2026 Thank you for trusting me. This sounds like more than just tiredness, and it\u2019s very treatable \u2014 you don\u2019t have to white-knuckle it."' },
      { lbl:'A couple of checks',   txt:'"I\u2019ll also do a quick blood test \u2014 iron, because birth and breastfeeding can drop it, and thyroid, because that can wobble after a baby and affect both your hair AND your mood and energy. So we cover the physical side too."' },
      { lbl:'Plan + support',       txt:'"So: your hair will recover, I\u2019ll check your iron and thyroid \u2014 and most importantly, let\u2019s get you some support. I\u2019d like to loop in your health visitor and the perinatal mental-health team, and see you again soon. You came in about your hair; what I really want to look after is YOU. You\u2019re not falling apart \u2014 you\u2019re exhausted and doing a hard thing, and you don\u2019t have to do it alone."' },
    ],
    learning:'Hair shedding a few months after childbirth (peaking ~3\u20134 months postpartum, often at the hairline/temples) is POSTPARTUM TELOGEN EFFLUVIUM \u2014 the synchronous post-delivery shed, very common, benign and self-limiting, recovering over ~6\u201312 months \u2014 warranting strong, accurate reassurance plus a ferritin (delivery blood loss/breastfeeding) and TFT (postpartum thyroiditis) check. But the examinable core is that the hair loss is the PRESENTING TICKET for an exhausted, overwhelmed new mother for whom it is "the last straw": behind it sit sleep deprivation, possible postnatal depression/anxiety, body-image change and loss of identity ("nothing about my body is mine"), and a sense of falling apart. Reassuring the hair alone misses her; the skill is to give the hair reassurance AND open the door to how she\u2019s really coping, screen mood and risk, validate the body-image/identity change, and support maternal mental health (perinatal pathway, health visitor, talking therapy) \u2014 the hair is benign; the mother\u2019s wellbeing is the case.',
    knowledge:{
      guideline:'PCDS Hair Loss Pathway (November 2024) · NICE CG192 Antenatal and postnatal mental health (2014, updated 2020) · NICE NG194 Postnatal care (2021) · NICE NG145 Thyroid disease (2019) · BSG iron deficiency anaemia guideline (2021) · postpartum telogen effluvium · postpartum thyroiditis',
      points:[
        { h:'Postpartum telogen effluvium', t:'High oestrogen in pregnancy prolongs the hair growth phase; after delivery hairs synchronously enter shedding, peaking around 3\u20134 months postpartum (often hairline/temples). It is very common, benign and self-limiting, with recovery over ~6–12 months (PCDS Hair Loss Pathway 2024: shedding typically starts 2–6 months after the trigger and settles by 6–9 months; full regrowth is gradual). Reassure strongly and accurately. The Regaine for Women (minoxidil) licence excludes hair loss due to childbirth, and it is not advised when breastfeeding.' },
        { h:'Check postpartum contributors', t:'Given the context, check FBC and ferritin (peripartum blood loss, breastfeeding; ferritin is the most useful iron marker, BSG 2021) and TFTs (manage per NICE NG145) \u2014 postpartum thyroiditis is common and can cause hair changes alongside mood/energy symptoms. Treat deficiencies; otherwise minimal investigation is needed.' },
        { h:'The hair is the presenting ticket', t:'A new mother presenting with hair loss as "the last straw" is often signalling exhaustion and distress. Don\u2019t reassure about the hair and close the consultation \u2014 open the door to how she is really coping.' },
        { h:'Screen postnatal mental health', t:'Assess for postnatal depression/anxiety (low mood, anhedonia, guilt, sleep/appetite beyond normal newborn disruption, detachment), and explicitly ask about thoughts of self-harm, harm to the baby and intrusive thoughts (NICE CG192: consider the Whooley questions and GAD-2; if positive, assess further). Mild to moderate symptoms: facilitated self-help or psychological therapy via NHS Talking Therapies (perinatal referrals prioritised) with health visitor support; severe symptoms, rapid deterioration or significant risk: urgent perinatal mental health team referral, and same-day assessment for suicidal thoughts, thoughts of harming the baby or psychotic symptoms (NICE CG192). Use the consultation to validate and support, not just diagnose.' },
        { h:'Body image and identity', t:'Postpartum body-image change and loss of identity ("nothing about my body is mine") are common and distressing. Validate them as normal and worth support \u2014 part of looking after the whole person.' },
        { h:'Support and follow-up', t:'Where mood is affected, involve the health visitor, perinatal mental-health/NHS Talking Therapies and (per severity) further support, with follow-up. Frame the plan around HER wellbeing, with the hair as the reassured, benign part.' },
        { h:'Never do', t:'Never dismiss postpartum hair loss as trivial; never reassure the hair and miss the exhausted/depressed mother behind it; never skip the mood screen and body-image validation; never omit the ferritin/TFT check in the postpartum context.' },
        { h:'Safety-net & follow-up', t:'Strong hair reassurance + recovery timeline; ferritin/TFT check; postnatal mental-health screen and support (health visitor/perinatal/NHS Talking Therapies, crisis routes if risk); follow-up centred on the mother\u2019s wellbeing.' }
      ]
    }
  };

  /* ============ 159. VIDEO — Vitiligo: the condition and what it means ============ */
  const c159 = {
    id:'vitiligo-meaning', title:'"These white patches are spreading \u2014 everyone keeps staring"', type:'video', duration:12,
    meta:{ age:24, sex:'M', setting:'Video consultation \u2014 spreading depigmented patches.', system:'Dermatology / Vitiligo & psychosocial impact', checked:'October 2026' },
    brief:'Mr Anand Sharma, 24, of South Asian heritage. Well-demarcated WHITE (depigmented) patches on the hands, around the eyes/mouth, spreading over months. He is otherwise well. This is VITILIGO (autoimmune depigmentation). The dermatological tasks are real (confirm, screen associated autoimmune conditions e.g. thyroid, discuss treatment options and sun protection, manage expectations) \u2014 but the dominant issue is the PSYCHOSOCIAL impact: against darker skin the patches are very visible, he faces staring/comments, cultural stigma, and it\u2019s hitting his confidence, relationships and identity hard.',
    script:{
      opening:"(Frustrated, embarrassed; keeps hands out of view at first.) \"Doctor, these white patches keep appearing and spreading — my hands, around my eyes and mouth. Against my skin they really show, and people stare, they ask what's wrong with me, some won't shake my hand. My family are worried what people will say. I feel like a freak, honestly. I just want to know what it is, whether it's catching, and can you make it go away?\"",
      facts:[
        { topic:"The patches", text:"Started about five months ago on the backs of both hands, then around the eyes and mouth. \"They're getting bigger.\" Completely white, flat, sharp edges. If asked: no itch, pain, scaling or numbness — \"They don't feel any different.\" Will show his hands and face on camera if asked." },
        { topic:"Triggers and other symptoms", text:"No rash or burn beforehand. A few white hairs in his eyebrow. If asked: no tiredness, weight change, palpitations, thirst or passing more urine. Feels well in himself." },
        { topic:"Medical and family history", text:"Nothing significant. If asked about family: \"My aunt in India has thyroid tablets, I think.\" Nobody in the family has white patches that he knows of. No medicines, no allergies." },
        { topic:"Social", text:"Works in a mobile phone shop, customer-facing. Lives with parents and younger sister. Doesn't smoke, drinks occasionally. Has been wearing long sleeves and avoiding handshakes at work." },
        { topic:"Impact", text:"Only if asked what it is like for him: \"I hide my hands. I don't want to meet people. When someone won't shake my hand I just want to disappear.\" A customer asked if it was catching. His mum has been trying home remedies and worries about \"what people will say\" — he is meant to be meeting a family friend's daughter with a view to marriage." },
        { topic:"Mood and risk", text:"If asked: \"I'm avoiding people. I feel low, but I'm not going to do anything stupid.\" Sleeping okay. No thoughts of self-harm." },
        { topic:"Sun", text:"If asked: the patches burn quickly in the sun; he hasn't been using sun cream." },
        { topic:"How to play it", text:"Guarded and embarrassed at first. Volunteer the patches and the staring; hold back the marriage pressure and low mood unless the doctor asks about the effect on his life. If the doctor only talks about creams, ask \"But is it catching? My family need to know.\" When told clearly it isn't infectious and isn't his fault, relax: \"That would help. They'd believe it from a doctor.\"" }
      ],
      ice:{
        ideas:"\"I was scared it was catching, or something serious inside.\"",
        concerns:"HIDDEN AGENDA — the staring, being refused handshakes, his family's worry about what people will say and a possible marriage introduction. He feels like \"a freak\" and has started to hide away.",
        expectations:"\"To know what it is, that it's not catching — and something to make it go away.\""
      },
      cues:[
        "\"Some won't shake my hand.\" — the stigma; opens up if picked up.",
        "\"My family are worried what people will say.\" — the cultural pressure and marriage worry.",
        "\"I feel like a freak.\" — invites a question about mood."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Diagnoses VITILIGO confidently (well-demarcated depigmented macules, characteristic sites, spreading) and reassures FIRMLY that it is NOT contagious, NOT dangerous to physical health, and not his or anyone\u2019s fault \u2014 correcting the contagion myth' },
      { dom:'dg', text:'Screens for associated AUTOIMMUNE disease \u2014 especially THYROID (TFTs/antibodies) \u2014 and is alert to others (pernicious anaemia, T1DM, alopecia areata)' },
      { dom:'cm', text:'Discusses TREATMENT realistically: topical corticosteroids/calcineurin inhibitors, phototherapy and specialist options via dermatology, cosmetic camouflage, and SUN PROTECTION of depigmented skin \u2014 with honest expectations (variable, slow, some areas respond poorly), avoiding false promises of a "cure"' },
      { dom:'cm', text:'Refers to DERMATOLOGY appropriately (for treatment/phototherapy, diagnostic confirmation if needed, rapidly spreading disease) and signposts cosmetic camouflage services' },
      { dom:'ro', text:'Recognises and addresses the dominant PSYCHOSOCIAL impact: validates the stigma, staring, family/cultural pressure and identity distress, screens mood, and offers psychological support and patient support groups/charities' },
      { dom:'ro',   text:'Acknowledges what the condition MEANS to him \u2014 the stigma, the "freak" feeling, the relationship/identity impact \u2014 and validates it as the central issue, rather than treating it as a purely dermatological problem' },
      { dom:'ro',   text:'Responds with warmth and without minimising; equips him (and his family) to counter the contagion myth and stigma, restoring some agency' },
      { dom:'cm',    text:'Safety-nets and follows up: thyroid/autoimmune results, dermatology referral and camouflage/sun-protection advice, psychological and peer support, mood review, and follow-up \u2014 treating the person and the meaning alongside the skin' },
    ],
    worked:[
      { lbl:'Name it + kill the myth', txt:'"Let me give you the name and the most important fact first: this is vitiligo \u2014 the skin loses its colour in patches because the immune system stops the colour-making cells working. The crucial thing, and please tell anyone who needs to hear it: it is absolutely NOT catching. No one can get it from you, shaking your hand is completely safe, and it\u2019s not dangerous to your health. It\u2019s not your fault and nothing you did caused it."' },
      { lbl:'Acknowledge the real weight', txt:'"And I\u2019m not going to pretend this is just a skin thing \u2014 because what you\u2019ve described, the staring, people pulling their hand away, feeling like a freak, your family worrying what others will say \u2014 THAT is the hardest part, and it\u2019s completely understandable. That matters to me as much as the patches themselves."' },
      { lbl:'The medical checks',   txt:'"There are a couple of things I\u2019ll check \u2014 vitiligo can come along with an underactive or overactive thyroid, so a blood test for that. Otherwise you\u2019re physically well, and this is about the skin and, just as much, about how you\u2019re coping."' },
      { lbl:'Honest about treatment', txt:'"On making it go away \u2014 I\u2019ll be honest with you rather than over-promise. There are treatments that can help: creams, and special light treatment through the skin specialists, which can bring some colour back or stop it spreading \u2014 but they work slowly and unevenly, and some areas respond better than others. There\u2019s also excellent skin-camouflage make-up that matches your tone really well if you want to cover patches. And the white skin burns easily, so sun protection matters."' },
      { lbl:'Support the person',   txt:'"Most importantly \u2014 how is this affecting you in yourself? Your confidence, your mood, relationships? \u2026 You\u2019re not a freak, and you\u2019re far from alone \u2014 it\u2019s common, including in people of South Asian heritage. There are support groups of people living well with vitiligo, and if it\u2019s getting you down I can help with that too. You don\u2019t have to carry the stares on your own."' },
      { lbl:'Plan + follow-up',     txt:'"So: I\u2019ll check your thyroid, refer you to the skin specialists for treatment options, point you to camouflage and a support group, and we\u2019ll keep an eye on your mood. Take that one fact with you for the doubters \u2014 it isn\u2019t catching. Come back and see me; I want to know how YOU are doing, not just the patches."' },
    ],
    learning:'Well-demarcated depigmented (milk-white) macules/patches at characteristic sites (hands, periorificial face, friction sites), spreading, in an otherwise-well young person is VITILIGO \u2014 autoimmune loss of melanocytes. The dermatological tasks are real: confirm the diagnosis and reassure FIRMLY that it is NOT contagious, NOT dangerous and not anyone\u2019s fault (correcting the contagion myth); screen for associated autoimmune disease, especially THYROID; discuss treatment realistically (topical steroids/calcineurin inhibitors, phototherapy and specialist options via dermatology, cosmetic camouflage, sun protection of depigmented skin) with HONEST expectations (variable, slow, no guaranteed cure). But the examinable core \u2014 the hidden agenda \u2014 is the PSYCHOSOCIAL and identity impact, intensified on darker skin and by cultural stigma: staring, comments, refusal to shake hands, family concern about "what people will say", and devastation of confidence, relationships and self ("I feel like a freak"). Acknowledge what it MEANS to him, validate it as central, equip him and his family to counter the contagion myth and stigma, screen and support mood, and signpost camouflage and peer support \u2014 treating the person and the meaning, not just the macules.',
    knowledge:{
      guideline:'British Association of Dermatologists guidelines for the management of people with vitiligo (2021) · NICE NG222 Depression in adults (2022, last reviewed January 2026) · vitiligo associated autoimmunity · skin camouflage / psychological support',
      points:[
        { h:'Recognise vitiligo', t:'Acquired, well-demarcated depigmented (not merely hypopigmented) macules/patches, often symmetrical, favouring hands, periorificial face, and extensor/friction sites; may spread (and koebnerise at trauma sites). Wood’s lamp accentuates depigmentation (a face-to-face examination; on video, arrange to see the skin in person). Differentials include pityriasis versicolor, post-inflammatory hypopigmentation and pityriasis alba. Autoimmune loss of melanocytes; not contagious, not physically dangerous.' },
        { h:'Reassure: not contagious, not your fault', t:'Firmly correct the common misconception that vitiligo is contagious or due to poor hygiene/wrongdoing \u2014 a key, dignity-restoring intervention to share with the patient and their family/community.' },
        { h:'Screen associated autoimmunity', t:'Vitiligo is associated with other autoimmune conditions \u2014 most importantly THYROID disease (BAD 2021: check thyroid function and thyroid antibodies to identify people more likely to develop autoimmune thyroid disease), also pernicious anaemia, type 1 diabetes, Addison\u2019s, alopecia areata. Screen and monitor as indicated.' },
        { h:'Treatment \u2014 honest expectations', t:'Options (BAD 2021): a potent or very potent topical corticosteroid for limited non-facial disease, topical tacrolimus 0.1% ointment as an alternative particularly on the face (unlicensed use, dose per BNF), phototherapy (narrowband UVB for more extensive or active disease) and specialist treatments via dermatology, and cosmetic camouflage. Repigmentation is variable, slow and incomplete; some sites (e.g. hands/lips) respond poorly. Sun-protect depigmented skin (burns easily). Avoid promising a cure.' },
        { h:'Psychosocial impact is central', t:'Vitiligo can profoundly affect self-esteem, mood, relationships and identity, with stigma and staring \u2014 often greater on darker skin and where cultural stigma exists. Acknowledge and validate this as the dominant issue (BAD 2021 highlights the psychological burden); screen mood and, if low, assess and support per NICE NG222; offer psychological support and patient support groups/charities; signpost skin-camouflage services.' },
        { h:'Refer appropriately', t:'Refer to dermatology for treatment/phototherapy, diagnostic uncertainty, or rapidly progressing/widespread disease. Signpost camouflage services and peer support.' },
        { h:'Never do', t:'Never treat vitiligo as a purely cosmetic/dermatological problem and ignore the psychosocial impact; never leave the contagion myth uncorrected; never miss associated thyroid/autoimmune screening; never over-promise a cure; never dismiss the stigma and identity distress.' },
        { h:'Safety-net & follow-up', t:'Thyroid/autoimmune screen; dermatology referral and camouflage/sun-protection advice; psychological and peer support; mood review; follow-up that addresses the person and the meaning alongside the skin.' }
      ]
    }
  };

  /* ============ 160. VIDEO — Drenching night sweats in a young adult: anxiety, thyroid, or lymphoma? ============ */
  const c160 = {
    id:'night-sweats-young', title:'"I keep waking up drenched \u2014 it\u2019s probably just stress, right?"', type:'video', duration:12,
    meta:{ age:26, sex:'M', setting:'Video consultation \u2014 night sweats for several weeks.', system:'Haematology / Night sweats & the lymphoma screen', checked:'October 2026' },
    brief:'Mr Tomas Vidal, 26, who has DRENCHING NIGHT SWEATS (changing the sheets) for ~6 weeks. He attributes it to stress at work and wants reassurance/something to help sleep. The task is to take a structured approach to night sweats and ESPECIALLY to screen the can\u2019t-miss causes \u2014 notably LYMPHOMA (B symptoms: drenching night sweats, unexplained weight loss, fevers, plus itch, lymphadenopathy) \u2014 alongside thyroid, infection (TB, HIV), and anxiety. On directed history he has lost weight, has an itch, and noticed a lump in his neck/armpit. This is not "just stress".',
    script:{
      opening:"(A bit embarrassed; casual tone, keen to play it down.) \"Hi doc. This is a bit embarrassing — I keep waking up absolutely drenched in sweat, soaking the sheets, most nights for over a month. It's probably just stress, work's been mad, or maybe my room's too warm. Could you give me something to help me sleep, or is it just one of those things? I'm sure it's nothing serious.\"",
      facts:[
        { topic:"The sweats", text:"About six weeks, most nights. \"Yes, sometimes twice a night\" — has to change his T-shirt and the sheets. Room temperature hasn't changed. No hot flushes during the day." },
        { topic:"Weight", text:"If asked: \"Yeah, actually. My clothes are looser. I thought it was the stress.\" About 5 kg (nearly a stone) over two months without trying." },
        { topic:"Fever and itch", text:"\"I haven't measured a temperature.\" Feels hot and shivery some evenings. If asked about itch: \"I've been really itchy, all over, for a few weeks\" — no rash." },
        { topic:"The lump — only if asked about lumps", text:"Pause, then: \"…There is a lump in my neck. I didn't really want to mention it.\" Left side above the collarbone, \"about the size of a grape\", painless, there for about three weeks, not getting smaller. Hasn't checked his armpits. Can point to it on camera. No pain with alcohol." },
        { topic:"Other symptoms", text:"If asked: tired. No cough, breathlessness or coughing up blood. No sore throat or recent infection. No diarrhoea. No palpitations or tremor." },
        { topic:"TB, HIV and travel", text:"No travel outside Europe; no known TB contacts. Sexual history if asked sensitively: one female partner for a year, condoms not always used; never had an HIV test. No injecting drugs." },
        { topic:"History, medicines, social", text:"Fit and well before. No medicines, no allergies. Software tester, long hours, lives with his girlfriend. Smokes socially at weekends, drinks 8–10 units a week. No recreational drugs." },
        { topic:"Family", text:"Nothing significant he knows of." },
        { topic:"How to play it", text:"Laid-back and minimising. Volunteer only the sweats and \"stress\". Give the weight loss and itch if asked; give the neck lump only if asked directly about lumps or swellings. If the doctor asks what he is worried about, admit: \"I googled it at three in the morning. Night sweats and a lump — it says cancer. I didn't want it to be that.\" If simply reassured, accept it happily — that is the trap. If told it needs checking soon, go quiet, then: \"Okay. What happens now?\"" }
      ],
      ice:{
        ideas:"\"It's stress — work's been mad. Or the room's too warm.\"",
        concerns:"HIDDEN AGENDA — he has found a lump in his neck and lost weight, googled it at night and read \"cancer\". He is frightened and has been telling himself it's stress so he doesn't have to face it.",
        expectations:"\"Honestly, for you to say it's nothing and give me sleeping tablets.\""
      },
      cues:[
        "\"I'm sure it's nothing serious.\" — reassurance-seeking that hides fear.",
        "\"My clothes are looser.\" — weight loss, said in passing.",
        "\"…There is a lump. I didn't really want to mention it.\" — only if asked about lumps."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Takes DRENCHING night sweats persisting for weeks seriously and works them up structurally \u2014 rather than reassuring them away as stress/overheating or just offering a sleep aid' },
      { dom:'dg', text:'Screens explicitly for LYMPHOMA "B symptoms" and constellation: unexplained WEIGHT LOSS, FEVERS, drenching night sweats, PRURITUS/itch, fatigue, and LYMPHADENOPATHY \u2014 and ELICITS the red flags he is downplaying (the weight loss, itch and lump)' },
      { dom:'dg', text:'EXAMINES appropriately, face to face because this is a video consultation: lymph nodes (cervical/axillary/inguinal — painless, rubbery), hepatosplenomegaly, and general examination \u2014 and arranges urgent BLOODS (FBC/blood film, ESR, LDH, etc.)' },
      { dom:'dg', text:'Considers the broader differential \u2014 THYROID (hyperthyroidism), INFECTION (TB: travel/contacts/cough; HIV: risk assessment and test; other), medication/substance \u2014 and treats anxiety as a diagnosis of EXCLUSION, not the opening assumption' },
      { dom:'cm', text:'Acts on the red flags: arranges a suspected cancer pathway referral (NICE NG12: unexplained lymphadenopathy, taking into account the drenching night sweats, weight loss and itch), with urgent bloods \u2014 not watchful waiting or a sleep aid' },
      { dom:'ro',   text:'Recognises the "just stress" minimisation as possible avoidance, surfaces the noticed lump and the fear gently, and does not collude with the reassurance-seeking' },
      { dom:'ro',   text:'Balances honesty (this needs proper checking) with calm reassurance (many causes are benign/treatable) so he engages with examination and referral rather than fleeing' },
      { dom:'cm',    text:'Safety-nets and follows up: urgent bloods and examination, urgent referral pathway and what to expect, red flags warranting sooner review, the fear acknowledged, and follow-up of results \u2014 structured work-up of the can\u2019t-miss causes, not a sleep aid and "probably stress"' },
    ],
    worked:[
      { lbl:'Take it seriously',    txt:'"I\u2019m glad you came, and this isn\u2019t embarrassing at all. Soaking the sheets with sweat, most nights for over a month \u2014 that\u2019s a proper symptom, and I don\u2019t want to just wave it away as stress or a warm room without checking it out properly. Let me ask some specific questions."' },
      { lbl:'The B-symptom screen', txt:'"A few important ones: have you lost any weight without trying? \u2026 Any itching of your skin? \u2026 Any fevers? And \u2014 have you noticed any lumps anywhere, neck, armpits, groin? \u2026 You have, a lump. Okay. Thank you for telling me \u2014 that\u2019s important, and it\u2019s exactly why I asked rather than assumed stress."' },
      { lbl:'Name the concern honestly', txt:'"I\u2019m going to be straight with you, because I think part of you already is worried: drenching night sweats, losing weight, itching and a lump together are a combination I need to check urgently \u2014 they can be signs of a problem with the lymph glands, including a type of lymph-gland cancer called lymphoma. I\u2019m not telling you that\u2019s what it is \u2014 but it has to be ruled out quickly, and the good news is, if it were, it\u2019s one of the most treatable."' },
      { lbl:'Examine + bloods',     txt:'"So I need to examine you in person — I can’t do it on video — so please come in to the surgery today and I’ll feel those lymph glands and your tummy, and arrange urgent blood tests today. I\u2019ll also check your thyroid and a couple of infections that can cause sweats, so we cover the other possibilities too."' },
      { lbl:'Urgent referral',      txt:'"Given the lump and the weight loss with the sweats, I\u2019m going to refer you urgently to the specialists \u2014 seen quickly \u2014 to look at that lump properly. That\u2019s the right, safe step. I know it\u2019s frightening, but getting it checked fast is exactly what gives the best outcome whatever it turns out to be."' },
      { lbl:'Acknowledge the fear + safety-net', txt:'"I suspect you\u2019d noticed that lump and been scared \u2014 you did the right thing coming, even framing it as a sleep problem. If you get worsening symptoms, high fevers or feel really unwell before the appointment, contact us sooner. I\u2019ll chase your bloods and the referral and go through everything with you. You\u2019re not facing this alone."' },
    ],
    learning:'Drenching night sweats (soaking nightclothes/sheets) persisting for weeks must be taken seriously and worked up structurally \u2014 NOT reassured away as stress/overheating or met with a sleep aid. In a young adult especially, drenching night sweats are a classic LYMPHOMA "B symptom": screen the constellation \u2014 unexplained weight loss, fevers, drenching night sweats, pruritus/itch, fatigue, and lymphadenopathy (painless rubbery nodes) \u2014 and elicit the red flags the patient may be downplaying. Examine (lymph nodes, hepatosplenomegaly), arrange urgent bloods (FBC/film, ESR, LDH), and consider the broader differential (thyroid/hyperthyroidism; infection \u2014 TB, HIV; drugs), treating anxiety as a diagnosis of EXCLUSION, not the opening assumption. Given an unexplained lump with drenching sweats, weight loss and itch, arrange a suspected cancer pathway referral under NICE NG12 (Suspected cancer: recognition and referral, last updated April 2026), which is triggered by unexplained lymphadenopathy (or splenomegaly for non-Hodgkin lymphoma) with these symptoms taken into account. The examinable hidden agenda is "just stress / something to help me sleep" as AVOIDANCE masking a noticed lump and real fear; surface it gently without colluding, balance honesty with calm reassurance (lymphoma is highly treatable; many causes are benign), and act \u2014 structured work-up of the can\u2019t-miss causes, not a sleep aid.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer: recognition and referral (lymphoma/haematological) · NICE NG60 HIV testing (2016) · NICE NG33 Tuberculosis (2016, updated 2019) · NICE NG145 Thyroid disease (2019) · night sweats work-up · TB/HIV consideration',
      points:[
        { h:'Work up persistent night sweats', t:'Drenching night sweats for weeks warrant a structured assessment, not reassurance as stress. Characterise (drenching vs trivial, duration), and screen the differential rather than assuming a benign cause.' },
        { h:'Lymphoma B symptoms', t:'In a young adult, drenching night sweats are a classic lymphoma "B symptom". Screen for: unexplained weight loss (the lymphoma staging definition of a B symptom is more than 10% in 6 months — this is not an NG12 threshold), fevers, drenching night sweats, plus pruritus, fatigue, alcohol-induced node pain, and LYMPHADENOPATHY (painless, rubbery, firm nodes — cervical/axillary/inguinal) and hepatosplenomegaly. B symptoms alone are not the NG12 trigger: NICE NG12 advises considering a suspected cancer pathway referral for Hodgkin lymphoma in adults with unexplained lymphadenopathy, and for non-Hodgkin lymphoma with unexplained lymphadenopathy or splenomegaly, taking into account fever, night sweats, shortness of breath, pruritus or weight loss (and, for Hodgkin, alcohol-induced lymph node pain). NICE NG12 also advises considering a very urgent FBC (within 48 hours) in adults with features that could suggest leukaemia, such as generalised lymphadenopathy or hepatosplenomegaly.' },
        { h:'Examine and investigate', t:'Examine lymph node areas and abdomen (hepatosplenomegaly). Arrange urgent bloods: FBC and blood film, ESR, LDH, U&E/LFTs; consider CXR. Unexplained lymphadenopathy (or splenomegaly for non-Hodgkin lymphoma), with the B symptoms taken into account, warrants consideration of a suspected cancer pathway referral under NICE NG12. On video, arrange the node and abdominal examination face to face the same day.' },
        { h:'Broader differential', t:'Also consider hyperthyroidism (TFTs; NICE NG145), infection — TUBERCULOSIS (travel/contacts/cough/weight loss; sputum and chest X-ray per NICE NG33) and HIV (lymphadenopathy with systemic symptoms is an HIV indicator condition — offer a test, NICE NG60), other chronic infection/endocarditis; medications and substances; menopause (not here); and only after exclusion, anxiety/idiopathic. Anxiety is a diagnosis of exclusion.' },
        { h:'Don\u2019t collude with avoidance', t:'Patients may minimise ("just stress / help me sleep") to avoid a feared diagnosis, sometimes despite having noticed a lump. Elicit the red flags they downplay, surface the fear gently, and do not offer a sleep aid in place of a work-up.' },
        { h:'Honest, calm communication', t:'Name the concern honestly when red flags are present, balanced with reassurance (lymphoma is among the more treatable cancers; many causes are benign). Urgent referral is precautionary and improves outcomes.' },
        { h:'Never do', t:'Never reassure persistent drenching night sweats as stress without a work-up; never miss the lymphoma B-symptom screen and lymphadenopathy examination; never overlook TB/HIV; never treat anxiety as the default; never offer a sleep aid in place of assessment; never collude with avoidance of a noticed lump.' },
        { h:'Safety-net & follow-up', t:'Face-to-face examination + urgent bloods (FBC/film, ESR, LDH); suspected cancer pathway referral (NICE NG12) for unexplained lymphadenopathy, taking the B symptoms into account; explain why, what happens next and what to do if the appointment does not arrive; consider TB/HIV/thyroid; acknowledge the fear; review results and worsening symptoms \u2192 sooner.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c157, c158, c159, c160);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'hair-loss-young-woman': {
      ceg: ['New & undifferentiated presentations', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Carys Hughes', age: '28 years · female',
        pmh: ['~3 months diffuse hair shedding (handfuls, all over), no bald patch', 'Stressful house move + flu-like illness 3\u20134 months ago; crash diet', 'Heavy periods; vegetarian'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Highly distressed, crying, avoiding social events; "am I going bald?"',
        reason: 'Video consultation — diffuse hair shedding.'
      },
      timeMap: [
        { t:'0–2',  h:'Acknowledge meaning', d:'Validate the distress — not vain or trivial. Take it seriously, work it out together.' },
        { t:'2–4',  h:'Name + reason',       d:'Diffuse shed ~3 months after a trigger = telogen effluvium; reactive and reversible. Not going bald.' },
        { t:'4–6',  h:'Check contributors',  d:'Ferritin (heavy periods + vegetarian + crash diet) + TFTs; treat anything low.' },
        { t:'6–8',  h:'Honest timeline',     d:'Shedding usually settles by ~6–9 months (PCDS 2024); regrowth is gradual after that. Not instant, but it returns.' },
        { t:'8–12', h:'Rule out + support',  d:'Examine the scalp in person (not possible on video) to exclude patchy/scarring loss; screen mood (NICE NG222 if low); follow up regrowth and refer if patchy/scarring/non-recovering.' }
      ],
      wordPics: {
        fail: 'Brushes it off with "don\u2019t worry, it\u2019ll grow back" and no work-up; misses iron deficiency/thyroid; never acknowledges the identity/self-esteem distress; or over-investigates clear telogen effluvium.',
        pass: 'Recognises telogen effluvium, checks ferritin/TFTs, reassures with a timeline, and acknowledges the distress.',
        exc:  'Acknowledges what the hair means to her first; names telogen effluvium with reasoned reassurance and an honest regrowth timeline; checks and treats iron/thyroid contributors; excludes patchy/scarring loss; and supports mood — structured work-up plus reassurance plus emotional validation.'
      },
      avoid: [
        { dont:'"Don\u2019t worry, it\u2019s just stress — it\u2019ll grow back."', instead:'"It IS likely the reversible kind, telogen effluvium — and I can see how distressing it is. Let me explain why it recovers, and check your iron and thyroid to help it bounce back."', why:'A bare "it\u2019ll grow back" dismisses real distress and skips the iron/thyroid work-up.' },
        { dont:'"Hair loss in women is usually just genetic — nothing to be done."', instead:'"Yours is diffuse shedding after a trigger, not patterned thinning — that\u2019s the reversible reactive type, and we\u2019ll treat any iron or thyroid issue feeding it."', why:'Mislabelling reactive shedding as androgenetic misses reversible contributors and the correct prognosis.' },
        { dont:'"Try not to let it upset you so much, it\u2019s only hair."', instead:'"Your hair matters and this isn\u2019t vain — crying and avoiding going out is a real response, and I\u2019m taking it seriously."', why:'Minimising the emotional impact ruptures trust and misses possible low mood.' }
      ]
    },

    'postpartum-hair-loss': {
      ceg: ['Gender, reproductive & sexual health', 'Mental health & addiction'],
      stem: {
        name: 'Lauren Mbeki', age: '33 years · female',
        pmh: ['4 months postpartum (first baby)', 'Hair shedding in clumps, thinning hairline/temples', 'Exhausted; ? postnatal low mood; body-image distress'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"The last straw"; "I feel like I\u2019m falling apart / nothing about my body is mine".',
        reason: 'Video consultation — hair loss 4 months postpartum.'
      },
      timeMap: [
        { t:'0–2',  h:'Reassure the hair',   d:'Postpartum shed (peaks ~3\u20134 months), benign, self-limiting, recovers over 6\u201312 months. Strong, accurate reassurance.' },
        { t:'2–4',  h:'Not trivial',         d:'"The last straw" — heard. Don\u2019t tick off the hair and move on.' },
        { t:'4–6',  h:'Open the real door',  d:'How is SHE doing? The exhaustion, the "falling apart", body image. The hair is the presenting ticket.' },
        { t:'6–8',  h:'Screen mood',         d:'Postnatal depression/anxiety screen incl. risk/intrusive thoughts; very treatable; she shouldn\u2019t white-knuckle it.' },
        { t:'8–12', h:'Checks + support',     d:'Ferritin + TFTs (postpartum thyroiditis); loop in health visitor/perinatal team; follow up HER.' }
      ],
      wordPics: {
        fail: 'Reassures the hair will recover and ends the consultation; never opens the door to the exhausted, possibly-depressed mother; no mood screen, no ferritin/TFT check; dismisses it as trivial.',
        pass: 'Reassures re postpartum telogen effluvium, checks ferritin/TFTs, screens mood, and offers support.',
        exc:  'Gives strong hair reassurance but treats it as the gateway to the mother; opens the door to her exhaustion/mood/body-image, screens postnatal depression and risk, validates the loss of identity, checks ferritin/TFTs, and mobilises perinatal/health-visitor support — the hair is benign, the mother is the case.'
      },
      avoid: [
        { dont:'"It\u2019s just normal postpartum hair loss — it\u2019ll settle, nothing to worry about."', instead:'"Your hair will recover, yes — but you called it the last straw, and I heard that. How are YOU really doing?"', why:'Reassuring only the hair misses the exhausted, possibly-depressed mother who is the real consultation.' },
        { dont:'"You\u2019ve got a new baby — of course you\u2019re tired, it\u2019s normal."', instead:'"Some of this sounds like more than normal tiredness — how\u2019s your mood, can you enjoy anything, any thoughts that worry you? It\u2019s very treatable."', why:'Normalising everything as "just tiredness" can miss postnatal depression.' },
        { dont:'"Try not to worry about how your body looks right now."', instead:'"Feeling like nothing about your body is yours is so common after a baby, and it\u2019s worth support — you\u2019re not vain or failing."', why:'Dismissing the body-image/identity distress misses a key part of her wellbeing.' }
      ]
    },

    'vitiligo-meaning': {
      ceg: ['Ethnicity, culture & diversity', 'Mental health & addiction'],
      stem: {
        name: 'Anand Sharma', age: '24 years · male',
        pmh: ['Well-demarcated white (depigmented) patches — hands, periorificial face, spreading', 'South Asian heritage; patches highly visible', 'Otherwise well'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'People stare / won\u2019t shake his hand; family worried "what people will say"; "I feel like a freak". Asks if it\u2019s catching.',
        reason: 'Video consultation — spreading depigmented patches.'
      },
      timeMap: [
        { t:'0–2',  h:'Name it + kill the myth', d:'Vitiligo — autoimmune loss of colour cells. NOT catching, not dangerous, not his fault. Tell anyone who needs to hear it.' },
        { t:'2–4',  h:'Acknowledge the weight', d:'Staring, refused handshakes, "freak", family stigma — THAT is the hardest part and matters as much as the patches.' },
        { t:'4–6',  h:'Medical checks',       d:'Screen thyroid/associated autoimmunity. Otherwise physically well.' },
        { t:'6–8',  h:'Honest treatment',     d:'Creams, phototherapy via dermatology, camouflage make-up, sun protection — variable/slow, no guaranteed cure.' },
        { t:'8–12', h:'Support the person',   d:'Screen mood; support groups/charities; camouflage services; refer dermatology; follow up HOW HE is.' }
      ],
      wordPics: {
        fail: 'Treats it as a purely cosmetic/dermatological problem; leaves the "is it catching?" myth uncorrected; misses thyroid/autoimmune screening; over-promises a cure; ignores the stigma and identity distress.',
        pass: 'Diagnoses vitiligo, reassures it\u2019s not contagious, screens thyroid, discusses realistic treatment + camouflage, and acknowledges the impact.',
        exc:  'Names vitiligo and firmly kills the contagion myth (for him and his family); makes the psychosocial/identity impact and stigma the central issue and validates it; screens associated autoimmunity; gives honest treatment expectations + camouflage/sun protection; and supports mood and peer connection — person and meaning, not just macules.'
      },
      avoid: [
        { dont:'"It\u2019s just a skin pigment condition — cosmetic, nothing serious." (dismissive)', instead:'"Physically it\u2019s harmless and not catching — but the staring and the \u2018freak\u2019 feeling are the hardest part, and that matters to me as much as the patches."', why:'Treating it as merely cosmetic ignores the dominant psychosocial/identity impact.' },
        { dont:'"We can treat this and get your normal colour back." (false cure)', instead:'"There are treatments — creams, light therapy, camouflage — that can help, but honestly they\u2019re slow and variable and some areas respond poorly. I won\u2019t over-promise."', why:'Promising a cure sets up disappointment; vitiligo treatment is variable and incomplete.' },
        { dont:'"Don\u2019t worry what other people think." (minimising)', instead:'"People refusing to shake your hand because they think it\u2019s catching is real and unfair — let\u2019s arm you and your family with the facts, and get you support and camouflage if you want it."', why:'Telling him not to worry dismisses genuine stigma; equipping him to counter the myth restores agency.' }
      ]
    },

    'night-sweats-young': {
      ceg: ['Long-term conditions & cancer', 'New & undifferentiated presentations'],
      stem: {
        name: 'Tomas Vidal', age: '26 years · male',
        pmh: ['Drenching night sweats ~6 weeks (soaking the sheets)', '⚠ Unintentional weight loss + itch; a neck/axillary lump', 'Otherwise attributes it to work stress'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Wants "something to help me sleep"; "probably just stress, nothing serious".',
        reason: 'Video consultation — night sweats for weeks.'
      },
      timeMap: [
        { t:'0–2',  h:'Take it seriously',   d:'Drenching sheets most nights for weeks is a real symptom — work it up, not a sleep aid and "stress".' },
        { t:'2–4',  h:'B-symptom screen',    d:'Weight loss? itch? fevers? lumps (neck/axilla/groin)? — he has weight loss, itch and a lump. Lymphoma constellation.' },
        { t:'4–6',  h:'Name it honestly',    d:'Drenching sweats + weight loss + itch + lump need urgent checking — possibly lymphoma; highly treatable if so. Not telling him it IS, but ruling it out fast.' },
        { t:'6–8',  h:'Examine + bloods',    d:'Nodes + hepatosplenomegaly examined face to face today (not on video); urgent FBC/film, ESR, LDH; also thyroid + TB/HIV consideration.' },
        { t:'8–12', h:'Urgent referral + net', d:'Suspected cancer pathway referral (NICE NG12) for the unexplained lump, given the red flags; acknowledge the fear; worsening/high fevers → sooner; chase results.' }
      ],
      wordPics: {
        fail: 'Accepts "just stress", offers a sleep aid and reassurance; never does the B-symptom screen or examines nodes; misses the weight loss, itch and lump — a lymphoma not investigated.',
        pass: 'Takes the sweats seriously, screens B symptoms, examines, arranges urgent bloods, and refers urgently given red flags.',
        exc:  'Refuses the "just stress" framing and does the structured night-sweats work-up; elicits the downplayed weight loss/itch/lump and screens the lymphoma B-symptom constellation; examines nodes/organomegaly and arranges urgent bloods; considers thyroid/TB/HIV; refers on the suspected cancer pathway (NICE NG12); and surfaces the avoidance/fear with honest, calm reassurance.'
      },
      avoid: [
        { dont:'"It\u2019s probably just stress or a warm room — here\u2019s something to help you sleep."', instead:'"Soaking the sheets for weeks is a real symptom — let me ask some specific questions and check you, rather than treat it as stress."', why:'A sleep aid and "stress" without a work-up risks missing lymphoma and other serious causes.' },
        { dont:'"As long as you feel otherwise okay, I wouldn\u2019t worry."', instead:'"Have you lost weight, any itching, any lumps in your neck or armpits? \u2026 Those change things and need urgent checking."', why:'Not screening the B-symptom constellation misses the very features that flag lymphoma.' },
        { dont:'"Let\u2019s see how it goes over the next month or two."', instead:'"With the sweats, weight loss, itch and that lump together, I\u2019m arranging urgent blood tests and a fast specialist referral now, not waiting."', why:'Watchful waiting delays urgent investigation of a possible haematological malignancy.' }
      ]
    }
  });

})();
