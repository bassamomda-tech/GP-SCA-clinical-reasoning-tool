/* ============================================================
   Reasoning GP — Case Library batch 58 (final unscripted batch):
   "Men's health below the belt" (filling 4 live-linked gaps)
   Blood in the semen (haematospermia \u2014 reassure the young,
   investigate the older / NG12 prostate); penile curvature
   (Peyronie\u2019s \u2014 function, honesty & self-esteem); abnormal semen
   analysis (fertility news delivered to one half of a couple, +
   testicular-cancer awareness); and tiredness in a young man
   (testosterone myths vs real causes). NG12 stated where genuine
   (haematospermia \u2192 prostate; semen analysis \u2192 testicular exam),
   not invented elsewhere.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases57.js.
   ============================================================ */

(function(){

  /* ============ 204. VIDEO — Blood in the semen: haematospermia (NG12 prostate where relevant) ============ */
  const c204 = {
    id:'haematospermia', title:'"There was blood when I ejaculated \u2014 I\u2019ve convinced myself it\u2019s cancer"', type:'video', duration:12,
    meta:{ age:33, sex:'M', setting:'Video consultation \u2014 blood in the ejaculate.', system:'Urology / Men\u2019s health \u2014 haematospermia: reassure the young, investigate the older', checked:'October 2026' },
    brief:'Mr Daniel Ofori, 33, noticed BLOOD in his ejaculate once or twice over the past week and is frightened it is cancer. He is otherwise well, no urinary symptoms, no trauma, no fever, no weight loss. The examinable task is to manage HAEMATOSPERMIA correctly by AGE and red flags: in a YOUNG man (<40) with a single/short episode and no red flags it is almost always BENIGN and self-limiting (idiopathic, inflammatory/infective \u2014 prostatitis/urethritis, post-procedure e.g. after a prostate biopsy, minor vessel) \u2014 needing an in-person examination arranged from this video call, basic checks (urine dip/MSU, first-void NAAT STI screen if any sexual risk, BP, examine genitalia face to face, and DRE/PSA guided by age and findings — PSA not within 48 hours of ejaculation or vigorous exercise, per the GOV.UK Prostate Cancer Risk Management Programme) and strong REASSURANCE with safety-netting; BUT recognise the situations that warrant investigation/referral \u2014 age \u226540 (especially persistent/recurrent), associated haematuria, abnormal DRE or raised PSA, or systemic features \u2014 which raise concern for PROSTATE cancer or other urological pathology (NICE NG12: suspected cancer pathway referral if PSA is above the age-specific range — 40–49 above 2.5, 50–59 above 3.5, 60–69 above 4.5, 70–79 above 6.5 µg/L — or the prostate feels malignant on DRE; the bladder/kidney and testicular routes also apply if haematuria or a testicular change is found). The skill is to address the cancer FEAR proportionately (most cases are benign, especially when young) while not missing the older/persistent/red-flag patient.',
    script:{
      opening:"(Embarrassed, avoids eye contact, speaks quietly.) \"This is really embarrassing, doctor, but — there was blood when I ejaculated, a couple of times this week. I've been up at night googling it and I've completely convinced myself it's cancer. I'm only 33 but I'm terrified. Is it? I haven't been able to think about anything else.\"",
      facts:[
        { topic:"The episodes", text:"\"Twice this week. Pinkish-red, I suppose.\" If asked: \"Yes, it was definitely the semen\" — not in the urine. First time ever." },
        { topic:"Urinary symptoms", text:"\"No, none of that\" — no pain or burning passing urine, no blood in urine, no frequency or difficulty, no discharge." },
        { topic:"Testes and trauma", text:"\"No lumps, no injury, nothing like that.\" No pain in the testicles, perineum or back. No recent procedures." },
        { topic:"General health", text:"\"No. I feel completely fine otherwise\" — no fever, weight loss, night sweats, bruising or bleeding elsewhere. No blood thinners. No regular medicines, no allergies. BP never checked." },
        { topic:"Sexual history", text:"If asked sensitively: \"Nothing I'm worried about. But test me if it helps.\" One female partner for 3 years, monogamous; condoms not used. No partner symptoms." },
        { topic:"Background", text:"Accountant, lives with his partner, Esi. Non-smoker, drinks 8 units a week. Cycles to work. Dad is 64 and well; no family history of prostate cancer." },
        { topic:"Fears", text:"\"Prostate cancer, mainly. Every page seemed to mention it. I haven't slept properly for days.\"" },
        { topic:"How to play it", text:"Anxious and embarrassed. Relaxes if the doctor normalises it. Wants a straight answer: \"Yes. That's all I want.\" Surprised: \"Really? The websites made it sound so serious.\" Asks: \"And if it keeps happening?\" Happy to come in tomorrow for an examination and urine tests. If dismissed without any assessment, stays worried." }
      ],
      ice:{
        ideas:"\"Blood in semen means cancer.\"",
        concerns:"HIDDEN AGENDA — terror of prostate cancer from late-night googling; embarrassment; not sleeping.",
        expectations:"\"To be told whether it's cancer.\""
      },
      cues:[
        "\"This is really embarrassing.\" — normalise it.",
        "\"I've been up at night googling.\" — ask what he read.",
        "\"I'm only 33.\" — age matters; use it in reassurance."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises that in a YOUNG man (<40) with a short episode and no red flags, haematospermia is almost always BENIGN/self-limiting \u2014 and reassures proportionately after assessment rather than over-investigating' },
      { dom:'dg', text:'Takes a targeted history (duration/recurrence, urinary symptoms, haematuria, STI risk/discharge, recent procedures, trauma, anticoagulants, fever, weight loss/bone pain) and considers the benign causes (idiopathic, prostatitis/urethritis, STI, post-procedure)' },
      { dom:'dg', text:'Examines appropriately — arranges an in-person examination (not possible on video): BP, urine dip/MSU, STI screen if indicated, external genitalia — with DRE/PSA guided by age and findings (more selective in a low-risk young man; PSA not within 48 hours of ejaculation)' },
      { dom:'cm', text:'Knows the features warranting INVESTIGATION/REFERRAL \u2014 age \u226540 (especially persistent/recurrent), haematuria, abnormal (hard/nodular) prostate or raised PSA, systemic red flags \u2014 and that NICE NG12 uses a suspected cancer pathway referral for a PSA above the age-specific range or a malignant-feeling prostate, with separate haematuria and testicular routes' },
      { dom:'cm', text:'Manages the low-risk patient: treats any identified infection, gives clear reassurance, and SAFETY-NETS for persistence/recurrence, haematuria, urinary/systemic symptoms or age threshold prompting later investigation' },
      { dom:'ro',   text:'Addresses the cancer FEAR directly and proportionately \u2014 acknowledging the anxiety/embarrassment and the googling \u2014 with honest reassurance grounded in assessment, neither dismissive nor falsely alarming' },
      { dom:'ro',   text:'Normalises the symptom, explains the reasoning in accessible terms, and checks understanding so the reassurance lands' },
      { dom:'cm',    text:'Safety-nets and follows up: which features warrant return/investigation (persistence, haematuria, systemic symptoms, age), treatment of any cause, and review \u2014 proportionate reassurance for the young/low-risk, clear threshold to investigate the older/red-flag patient' },
    ],
    worked:[
      { lbl:'Normalise + take seriously', txt:'"There\u2019s no need to be embarrassed \u2014 this is a common thing to come about, and I\u2019m really glad you did rather than worrying alone. Let me ask a few things, and arrange to examine you in person, and then I can give you a proper, honest answer rather than the internet\u2019s worst-case version."' },
      { lbl:'Assess', txt:'"Any pain passing urine, blood in your wee, discharge, recent injury, or new sexual partners? Any fevers, weight loss? \u2026 None. I can’t check your blood pressure or examine you over video, so let’s book you in to do that and test your urine — and depending on that, possibly a prostate check, though at your age that’s less likely to be needed."' },
      { lbl:'Reassure proportionately', txt:'"Here\u2019s the honest reassurance you came for: in a man of 33, with no other symptoms, blood in the semen is almost always harmless and settles on its own \u2014 often from a tiny blood vessel or mild inflammation. Cancer is a very uncommon cause at your age."' },
      { lbl:'Treat any cause', txt:'"If your urine test or swabs show an infection, I\u2019ll treat that. Otherwise there\u2019s usually nothing that needs doing \u2014 it tends to clear by itself over a few weeks."' },
      { lbl:'Be clear when it WOULD matter', txt:'"So you know where the line is: I\u2019d want to look further if it keeps happening over several weeks, if you see blood in your wee, get urinary symptoms or feel unwell \u2014 or, in older men, it\u2019s checked more thoroughly. But none of that applies to you right now."' },
      { lbl:'Safety-net the anxiety', txt:'"Try to step away from the 2am googling \u2014 it\u2019s feeding the fear. If it persists, recurs, or any of those warning signs appear, come back and we\u2019ll investigate properly. But I\u2019m genuinely reassuring, not fobbing you off."' },
    ],
    learning:'Haematospermia (blood in the ejaculate) is managed by AGE and red flags. In men UNDER 40 with a single or short episode and no red flags it is almost always BENIGN and self-limiting \u2014 commonly idiopathic, or due to inflammation/infection (prostatitis, urethritis, STI), recent instrumentation/prostate biopsy, vigorous sexual activity, or minor vessel bleeding \u2014 with cancer an uncommon cause, so strong, honest reassurance is appropriate after a sensible assessment. Take a targeted history (duration/recurrence, urinary symptoms, haematuria, STI risk/discharge, recent procedures, trauma, anticoagulants, fever, weight loss/bone pain), check BP (severe hypertension is associated), dip the urine/MSU, screen for STIs if indicated, and examine the external genitalia in person (a video consultation cannot do this), with DRE and PSA guided by age and findings (important in the older/persistent patient, more selective in a low-risk young man; PSA not within 48 hours of ejaculation or vigorous exercise, per the GOV.UK Prostate Cancer Risk Management Programme). Recognise the features that warrant INVESTIGATION/REFERRAL: age \u226540 (especially persistent or recurrent), associated visible/non-visible haematuria, an abnormal (hard/nodular) prostate, a raised age-adjusted PSA, or systemic red flags \u2014 these raise concern for PROSTATE cancer or other urological pathology, and NICE NG12 (Suspected cancer: recognition and referral, last updated April 2026) uses a suspected cancer pathway referral for a PSA above the age-specific range (40–49 above 2.5, 50–59 above 3.5, 60–69 above 4.5, 70–79 above 6.5 µg/L) or a malignant-feeling prostate, with separate routes for visible haematuria at 45+ (or non-visible at 60+ with dysuria or raised white cells) and for a testicular change. For the low-risk young man, treat any identified infection, give clear proportionate reassurance, and safety-net for persistence/recurrence, haematuria, urinary/systemic symptoms or reaching the age threshold. The communication core is the cancer FEAR fuelled by googling: acknowledge it, reassure honestly and proportionately (usually benign, rarely cancer in the young), and keep the threshold to investigate clear for the older/persistent/red-flag scenario \u2014 neither dismissive nor falsely alarming.',
    knowledge:{
      guideline:'[1] NICE NG12 Suspected cancer: recognition and referral (2015, last updated April 2026) · [2] EAU Sexual and Reproductive Health guidelines, haemospermia section (international) · [3] GOV.UK Prostate Cancer Risk Management Programme: PSA testing guidance for primary care · [4] NICE NG110 (prostatitis, acute: antimicrobial prescribing, 2018) · haematospermia · prostate — raised age-specific PSA/abnormal DRE suspected cancer pathway · age-based assessment and reassurance',
      points:[
        { h:'Young = usually benign', t:'In men <40 with a short episode and no red flags, haematospermia is almost always benign/self-limiting (idiopathic, prostatitis/urethritis, STI, post-procedure, minor vessel). Cancer is uncommon \u2014 reassure after assessment.' },
        { h:'Assess sensibly', t:'History (duration/recurrence, urinary symptoms, haematuria, STI risk, procedures, trauma, anticoagulants, systemic features); BP; urine dip/MSU; STI screen if indicated; examine genitalia in person (not on video); DRE/PSA guided by age/findings.' },
        { h:'Who to investigate/refer', t:'Age \u226540 (esp. persistent/recurrent), associated haematuria, abnormal (hard/nodular) prostate, raised age-specific PSA, or systemic red flags → urology (EAU, international). NICE NG12: suspected cancer pathway referral for PSA above the age-specific range (40–49 >2.5, 50–59 >3.5, 60–69 >4.5, 70–79 >6.5 µg/L) or a malignant-feeling prostate; haematuria and testicular routes as well.' },
        { h:'Manage the low-risk patient', t:'Treat identified infection; otherwise reassure (self-limiting over weeks); no routine imaging needed in young, low-risk men.' },
        { h:'Address the fear', t:'Cancer fear (often google-fuelled) is the dominant emotion. Reassure honestly and proportionately, grounded in assessment \u2014 neither dismissive nor falsely alarming.' },
        { h:'PSA counselling', t:'If checking PSA, counsel appropriately (transient rises with ejaculation, instrumentation, infection — GOV.UK PCRMP: no ejaculation or vigorous exercise for 48 hours before, not within 6 weeks of a biopsy, defer during urinary infection); interpret with the NICE NG12 age-specific thresholds and DRE findings.' },
        { h:'Never do', t:'Never over-investigate a low-risk young man; never dismiss without assessment; never miss the \u226540/persistent/haematuria/abnormal-DRE/raised-PSA patient; never reassure falsely where red flags exist.' },
        { h:'Safety-net & follow-up', t:'Return/investigate if persistent/recurrent, haematuria, urinary/systemic symptoms, or age \u226540; treat any cause; review; reduce anxiety-driven googling.' }
      ]
    }
  };

  /* ============ 205. F2F — Penile curvature: Peyronie's, sex and self-esteem ============ */
  const c205 = {
    id:'peyronies-curvature', title:'"My penis has started bending and it hurts \u2014 I\u2019m too embarrassed to even say it out loud"', type:'video', duration:12,
    meta:{ age:54, sex:'M', setting:'Video consultation \u2014 acquired penile curvature.', system:'Urology / Men\u2019s health \u2014 Peyronie\u2019s disease: function, honesty & self-esteem', checked:'October 2026' },
    brief:'Mr Stephen Hargreaves, 54, has noticed his erect penis has developed a CURVE over a few months, with PAIN on erection and a palpable lump along the shaft; intercourse has become difficult and he is distressed and embarrassed. The examinable task is to recognise PEYRONIE\u2019S DISEASE (acquired penile curvature from fibrous plaque in the tunica albuginea \u2014 active phase: pain, evolving curvature; stable phase: curvature/plaque, often with erectile difficulty), take the history sensitively, arrange a face-to-face examination with a chaperone offered (the plaque cannot be examined on video), and counsel HONESTLY about its course and options: pain usually settles over the first year or so, but the curve is unpredictable — untreated, about 1 in 8 improve, 4 in 10 stay the same and about half worsen (Mulhall et al, J Urol 2006); conservative options and that surgery is reserved for STABLE disease causing functional problems (EAU Sexual and Reproductive Health guidelines, international: stable = pain settled and deformity unchanged for about 3 months, usually around a year or more from onset); associations (erectile dysfunction — screen and address, with the BSSM (2017, published 2018) cardiovascular and endocrine work-up: HbA1c or fasting glucose, lipids, morning testosterone, QRISK3 per NICE NG238, and — at 54 with ED — NICE NG12 advises considering PSA and DRE after counselling; Dupuytren’s); safety-net for PENILE FRACTURE (a snap during sex with sudden loss of erection, swelling and bruising — same-day emergency assessment); and refer to UROLOGY. Crucially, manage the EMOTIONAL/relationship impact and self-esteem with sensitivity (asking, not assuming, whether he has a partner) and a non-judgemental, dignity-preserving manner, and screen mood. The skill is creating safety to discuss an embarrassing problem, honest realistic information, and addressing the psychosexual impact — not brisk reassurance. NICE NG12 is relevant only through the PSA/DRE consideration for ED; Peyronie’s itself is not a cancer pathway.',
    script:{
      opening:"(Very embarrassed, hesitant, looks down, almost whispering.) \"I'm sorry, this is mortifying — I almost cancelled. Over the last few months my… my penis has started to bend when it's erect, there's a lump I can feel, and it hurts. Sex has become really difficult and honestly it's knocking me for six. I didn't know who else to talk to.\"",
      facts:[
        { topic:"The bend", text:"\"A few months ago. It seems to be getting worse\" — about 5 months; curves upwards and to the left. \"I'm not sure how to describe it. Enough that it's hard to… you know.\" Can take a photo of the erection to show at a later appointment if asked." },
        { topic:"Pain and lump", text:"\"Mostly with erections.\" Firm lump on the top of the shaft. No pain when flaccid." },
        { topic:"Erections", text:"\"Honestly, I don't know if it's the bend or the erections. Everything's just got harder to manage.\" Erections less firm for about a year; morning erections less often." },
        { topic:"Red flags and history", text:"\"No, I don't think so\" — no injury or snap, no bruising. No urinary symptoms (\"No\"). Hands: one finger has a tight cord in the palm (Dupuytren's, if asked). No previous surgery or catheters." },
        { topic:"Health and medicines", text:"No regular medicines. No allergies. BP and cholesterol never checked. Smokes 10 a day. Drinks about 20 units a week. Overweight. Father had a heart attack at 60. No family prostate cancer." },
        { topic:"Relationship", text:"If asked (not assumed): married to Julie for 25 years. \"It's been hard. I feel like less of a man, if I'm honest. I've been avoiding intimacy altogether.\" Hasn't explained to Julie what's wrong." },
        { topic:"Mood", text:"\"A bit low. Not terrible. Mostly about this.\" No thoughts of self-harm." },
        { topic:"Fears", text:"\"I didn't know. Part of me wondered if it was something terrible. And whether it can be fixed at all.\"" },
        { topic:"Work", text:"Warehouse manager." },
        { topic:"How to play it", text:"Mortified; slow to start. Relaxes a lot if the doctor thanks him for coming and stays calm and matter-of-fact: \"Okay. Thank you. That helps.\" If the doctor is brisk or jokey, he clams up. Never heard of Peyronie's. Disappointed: \"So it won't go back to normal?\" but values honesty." }
      ],
      ice:{
        ideas:"\"Something's badly wrong — maybe something terrible.\"",
        concerns:"HIDDEN AGENDA — shame; feeling \"less of a man\"; avoiding intimacy with his wife; fear it can't be fixed.",
        expectations:"To be listened to without embarrassment and to know if it can be fixed."
      },
      cues:[
        "\"I almost cancelled.\" — acknowledge how hard it was to come.",
        "\"Knocking me for six.\" — emotional impact to explore.",
        "\"Everything's just got harder to manage.\" — erectile difficulty too."
      ]
    },
    checkpoints:[
      { dom:'ro',   text:'Creates psychological SAFETY first \u2014 thanks him for coming, normalises an embarrassing problem, and maintains a calm, non-judgemental, dignity-preserving manner throughout' },
      { dom:'dg', text:'Recognises PEYRONIE\u2019S DISEASE (acquired curvature from a tunica plaque, active vs stable phase) from the evolving curvature, pain on erection and palpable plaque' },
      { dom:'dg', text:'Takes a sensitive history (onset/progression, pain, curvature degree/direction, effect on intercourse, erectile function) and arranges a face-to-face examination with a chaperone offered (palpates the plaque — not possible on video), recognising erect/photographic assessment is often via urology' },
      { dom:'dg', text:'Screens ASSOCIATIONS — erectile dysfunction (common, treatable; BSSM work-up of HbA1c, lipids, morning testosterone; QRISK3; NICE NG12 PSA/DRE consideration after counselling), Dupuytren’s contracture, and cardiovascular/diabetes risk factors' },
      { dom:'cm', text:'Counsels HONESTLY on course and options — active phase allowed to stabilise (pain usually improves; the curve improves in only about 1 in 8 and worsens in about half untreated — Mulhall 2006); conservative/medical measures; surgery reserved for STABLE disease with functional problems \u2014 with realistic expectations, and refers to UROLOGY' },
      { dom:'cm', text:'Addresses ERECTILE DYSFUNCTION if present and the PSYCHOSEXUAL/relationship impact \u2014 validates distress, screens mood, asks rather than assumes about a partner, considers partner involvement/psychosexual support' },
      { dom:'ro',   text:'Manages the emotional impact and self-esteem with sensitivity, checks understanding, and ensures he feels heard rather than given brisk physical reassurance' },
      { dom:'cm',    text:'Safety-nets and follows up: urology referral, realistic information on phases/timeline, ED treatment and psychosexual support, mood review, penile-fracture emergency advice, and an open door — honest, dignified, whole-person care' },
    ],
    worked:[
      { lbl:'Make it safe', txt:'"I\u2019m really glad you didn\u2019t cancel \u2014 that took courage, and there\u2019s absolutely nothing to be embarrassed about. This is a recognised medical condition, I see it, and we\u2019ll talk about it calmly and sort out a plan together."' },
      { lbl:'Name it', txt:'"What you\u2019re describing \u2014 a curve developing over months, pain with erections, and a lump you can feel \u2014 sounds like Peyronie\u2019s disease. It\u2019s scar tissue forming in the wall of the penis, and it\u2019s genuinely common. Knowing what it is usually helps."' },
      { lbl:'Explain the course honestly', txt:'"It tends to go through two stages: an early phase, where you are now, with pain and the curve changing; and a later, settled phase. The pain usually eases. I’ll be honest that the curve is less predictable — it improves in some men, stays the same in many, and gets worse in about half. We don\u2019t rush to fix it surgically early \u2014 we let it settle, generally about a year, before considering an operation if it\u2019s still causing problems."' },
      { lbl:'Screen ED + associations', txt:'"Can I ask honestly \u2014 how are erections themselves, firmness-wise? \u2026 That often goes hand in hand with this and is very treatable, so we\u2019ll address it. I’ll also check a couple of things like your blood pressure, sugar, cholesterol and testosterone, which are linked — and we can talk about a prostate blood test too. I’d like to see you in person to examine you, with a chaperone if you’d like one."' },
      { lbl:'Refer + realistic hope', txt:'"I\u2019m going to refer you to the urology team who specialise in this. I\u2019ll be honest \u2014 it may not go back to exactly as before, but there\u2019s a lot that can be done to improve function and intercourse, including treatments and, if needed later, surgery."' },
      { lbl:'Address the impact', txt:'"This clearly hits more than the physical \u2014 your confidence, maybe your relationship. That matters just as much, and it\u2019s normal to feel low about it. If you have a partner and it would help, we can involve them, and there’s psychosexual support too. And one emergency to know about: if you ever feel a snap during sex with sudden swelling and bruising, go to A&E the same day. How are you doing in yourself with all this?"' },
    ],
    learning:'Peyronie\u2019s disease is acquired penile curvature caused by a fibrous PLAQUE in the tunica albuginea, with an ACTIVE/inflammatory phase (pain on erection, evolving curvature, developing plaque over months) and a STABLE phase (curvature/plaque settle, pain usually resolves, but erectile function and intercourse may be affected). The first and most important task is to create psychological SAFETY for a deeply embarrassed patient \u2014 thank him for coming, normalise a problem men commonly find hard to raise, and maintain a calm, non-judgemental, dignity-preserving manner \u2014 because the consultation fails without it. Recognise the condition from the evolving curvature, pain and palpable plaque, take a sensitive history (onset/progression, pain, curvature degree/direction, effect on intercourse, erectile function) and examine face to face with a chaperone offered, as a video consultation cannot (erect/photographic assessment is often via urology), and screen ASSOCIATIONS — erectile dysfunction (common and treatable; BSSM 2017/2018 cardiovascular and endocrine work-up; QRISK3 per NICE NG238; and NICE NG12 (Suspected cancer: recognition and referral, last updated April 2026) PSA and DRE consideration, after counselling, in men with ED), Dupuytren’s contracture, and cardiovascular/diabetes risk. Counsel HONESTLY on course and options: in the active phase the priority is usually to let it stabilise (pain usually improves, but untreated the curve improves in only about 1 in 8, stays the same in 4 in 10 and worsens in about half — Mulhall et al, J Urol 2006); conservative/medical measures exist, and surgery is reserved for STABLE disease (EAU, international: pain settled and deformity unchanged for about 3 months) with significant functional problems — not the active phase — with realistic expectations (function can often be improved even if not fully "normal"), referring to UROLOGY. Crucially, address coexisting ERECTILE DYSFUNCTION and the major PSYCHOSEXUAL/relationship and self-esteem impact: validate the distress, screen mood, ask rather than assume whether there is a partner, consider partner involvement and psychosexual support, safety-net for penile fracture (a same-day emergency), and preserve dignity throughout \u2014 the emotional management matters as much as the physical, and brisk physical reassurance that skips it is a failure. Peyronie\u2019s itself is not a cancer pathway; NICE NG12\u2019s PSA/DRE advice for ED is considered at 54.',
    knowledge:{
      guideline:'[1] EAU Sexual and Reproductive Health guidelines, penile curvature (international) · [2] BSSM guidelines on the management of erectile dysfunction in men (2017, published 2018) · [3] NICE NG12 Suspected cancer: recognition and referral (2015, last updated April 2026) · [4] NICE NG238 (cardiovascular disease: risk assessment and reduction, 2023) · [5] Mulhall et al, natural history of Peyronie’s disease, J Urol 2006 · active vs stable phase · associated ED and cardiometabolic risk · psychosexual care',
      points:[
        { h:'Create safety first', t:'For an embarrassed patient, normalise the problem and maintain a calm, non-judgemental, dignified manner \u2014 essential for the consultation to succeed.' },
        { h:'Recognise Peyronie\u2019s', t:'Acquired curvature from a tunica albuginea plaque. Active phase: pain, evolving curvature, developing plaque. Stable phase: curvature/plaque settle, pain resolves, function may be affected.' },
        { h:'History & exam', t:'Onset/progression, pain, curvature degree/direction, effect on intercourse, erectile function; palpate the plaque face to face with a chaperone offered (not on video); erect/photographic curvature assessment often via urology.' },
        { h:'Associations', t:'Erectile dysfunction (common, treatable), Dupuytren’s contracture and other fibroses, and shared cardiovascular/diabetes risk — screen and address (BSSM: HbA1c, lipids, morning testosterone; QRISK3 per NICE NG238; NICE NG12: consider PSA and DRE in ED after counselling).' },
        { h:'Course & options', t:'Active phase: allow stabilisation (pain usually improves; untreated curvature improves in ~1 in 8, is unchanged in 4 in 10, worsens in ~half — Mulhall 2006). Conservative/medical measures; surgery reserved for stable disease with functional problems (EAU, international: stable ~3 months), not the active phase. Refer urology. Penile fracture (snap, sudden detumescence, swelling) = same-day emergency.' },
        { h:'Psychosexual impact', t:'Major effect on self-esteem, mood and relationships. Validate distress, screen mood, ask (don’t assume) about a partner and involve them if wished, consider psychosexual support \u2014 as important as the physical management.' },
        { h:'Never do', t:'Never rush or dismiss the embarrassed patient; never offer surgery in the active phase; never miss coexisting ED or cardiometabolic risk; never skip the psychosexual/emotional dimension; never give false "it\u2019ll be fine" reassurance.' },
        { h:'Safety-net & follow-up', t:'Urology referral; realistic phase/timeline information; ED treatment and psychosexual support; mood review; open door for the relationship/emotional impact.' }
      ]
    }
  };

  /* ============ 206. F2F — Abnormal semen analysis: fertility news to one half of a couple ============ */
  const c206 = {
    id:'abnormal-semen-analysis', title:'"My sperm test came back abnormal \u2014 does this mean we\u2019ll never have kids, and is it my fault?"', type:'video', duration:12,
    meta:{ age:34, sex:'M', setting:'Video consultation \u2014 results of a semen analysis in a couple trying to conceive.', system:'Men\u2019s health / Fertility \u2014 abnormal semen analysis: interpretation, the couple & testicular awareness', checked:'October 2026' },
    brief:'Mr Tom Whitfield, 34, and his partner have been trying to conceive for ~14 months; his SEMEN ANALYSIS shows oligozoospermia (low count) with reduced motility. He attends alone, anxious and blaming himself. The examinable task is to interpret and communicate an abnormal semen analysis sensitively: explain that a single abnormal sample should be CONFIRMED with a REPEAT (NICE NG257, March 2026: ideally 3 months after the first, so a full cycle of sperm production can pass, or as soon as possible if the deficiency is gross) before conclusions; take a male-factor history and address MODIFIABLE factors (smoking, alcohol, recreational drugs/anabolic steroids, obesity, medications, timing/frequency of intercourse, occupational exposures; raised scrotal temperature is associated with poorer semen quality, though it is uncertain whether looser clothing improves fertility); arrange a separate FACE-TO-FACE EXAMINATION with a chaperone offered, since the testes cannot be examined on video (testicular volume, varicocele, absent vas, signs of hypogonadism) and — importantly — use it for TESTICULAR awareness (examine for a mass; subfertile men have a somewhat higher testicular-cancer risk; NICE NG12: consider a suspected cancer pathway referral for a non-painful enlargement or change in shape or texture of the testis, and consider direct-access ultrasound for unexplained or persistent testicular symptoms); arrange relevant tests (hormones \u2014 FSH/LH/testosterone, etc.) and refer to FERTILITY services as a COUPLE now (NG257: couples who have not conceived after 1 year of regular unprotected intercourse are offered assessment and investigation together — at about 14 months they already qualify; fertility is a couple issue — his partner needs assessment too). Handle the BLAME/guilt and relationship/emotional impact with sensitivity, and avoid false despair (many options exist, from lifestyle change and treating a cause through to IVF with ICSI), offering counselling (NICE QS73: before, during and after investigation and treatment; licensed clinics must offer it under the HFEA Code of Practice). The skill is delivering fertility news to one half of a couple compassionately and accurately.',
    script:{
      opening:"(Quiet, tense, rubbing his face.) \"I came in on my own — my partner's at work, and honestly I wanted to hear this by myself first. The sperm test came back abnormal. Does that mean it's my fault we haven't got pregnant? Does it mean we'll never have kids? I feel like I've let her down.\"",
      facts:[
        { topic:"The sample", text:"If asked how it was collected: \"Not that I know of. I just did what the form said\" — 3 days' abstinence, at the lab within an hour, all collected. Had a cold with a fever about 6 weeks before the test." },
        { topic:"Lifestyle", text:"\"I'll go through all of it with you. I just want to know what actually matters.\" Smokes 10 a day. Drinks about 20 units a week. BMI 31. Long hot baths most nights; laptop on his lap. If asked: used a \"testosterone booster\" from the gym for a few months last year — not injected steroids. No cannabis." },
        { topic:"Health", text:"\"Nothing I can think of\" — no undescended testes, mumps, groin surgery, chemotherapy or STIs. No regular medicines. No allergies." },
        { topic:"Testes", text:"\"No, nothing I've noticed\" — no lumps, pain or heaviness. Has never checked himself." },
        { topic:"Trying to conceive", text:"About 14 months of regular unprotected sex. \"It's become a bit of a chore, if I'm honest. We're tracking everything.\" Partner, Lucy, 32 — regular periods, no known problems, has had no tests yet." },
        { topic:"Feelings", text:"\"She's wanted this for ages. If it's me, then I'm the reason. I haven't told her the result yet.\" \"I'm not sleeping great. I keep reading stuff online.\"" },
        { topic:"Work", text:"Bus driver. Sits for long shifts." },
        { topic:"How to play it", text:"Anxious and self-blaming. Asks: \"Does that make a difference to sperm?\" about lifestyle. Lifted by hearing one test isn't final: \"So it might be fine next time?\" Ready to talk to Lucy if encouraged: \"I think I need to. I just didn't know what to say.\" If told plainly it's his fault or that IVF is the only option, he becomes tearful and withdrawn." }
      ],
      ice:{
        ideas:"\"It's my fault, and we'll never have kids.\"",
        concerns:"HIDDEN AGENDA — guilt at letting Lucy down; hasn't told her; worried she'll see him differently.",
        expectations:"\"Just to know if it's my fault and whether we can have kids.\""
      },
      cues:[
        "\"I wanted to hear this by myself first.\" — he hasn't told his partner.",
        "\"I feel like I've let her down.\" — blame to address.",
        "\"A bit of a chore.\" — strain on the relationship."
      ]
    },
    checkpoints:[
      { dom:'ro', text:'Explains that a single abnormal semen analysis must be CONFIRMED with a REPEAT (ideally at 3 months, given the ~72-day sperm cycle; as soon as possible if grossly abnormal — NICE NG257) before drawing conclusions \u2014 avoiding catastrophic interpretation of one result' },
      { dom:'dg', text:'Takes a male-factor history and addresses MODIFIABLE factors (smoking, alcohol, anabolic steroids/recreational drugs, obesity, possible scrotal heat (association only), medications, occupational exposures, intercourse timing/frequency)' },
      { dom:'cm', text:'Arranges a face-to-face EXAMINATION with a chaperone offered (testicular volume, varicocele, absent vas, hypogonadism signs — not possible on video) and PALPATES FOR A TESTICULAR MASS — recognising subfertile men’s higher testicular-cancer risk and that NICE NG12 advises considering a suspected cancer pathway referral for a non-painful enlargement or change in shape or texture of the testis, or direct-access ultrasound for persistent symptoms' },
      { dom:'cm', text:'Arranges relevant tests (FSH/LH/testosterone \u00b1 prolactin, genetic/specialist if severe) and refers to FERTILITY/andrology services now (NICE NG257: the couple already meets the 1-year criterion)' },
      { dom:'ro', text:'Frames fertility as a COUPLE issue \u2014 ensures his partner is assessed in parallel, and that a male abnormality does not mean the cause is solely his \u2014 referring them as a couple' },
      { dom:'ro', text:'Avoids false despair \u2014 explains that abnormal results do not mean "never", that optimisation may improve natural conception, and that assisted options (IVF, IVF with ICSI) exist \u2014 with realistic, honest hope' },
      { dom:'ro',   text:'Addresses the SELF-BLAME/guilt compassionately (fertility issues are common and not a personal failing or matter of fault), manages the emotional/relationship impact, and encourages involving his partner as they face it together' },
      { dom:'cm',    text:'Safety-nets and follows up: the repeat test and timeline, lifestyle optimisation, face-to-face examination/testicular safety-netting and any suspected cancer pathway referral, couple-based fertility referral, hormone results, and emotional support including counselling (NICE QS73; HFEA) — accurate, compassionate fertility care, not cold facts or false reassurance' },
    ],
    worked:[
      { lbl:'Address blame first', txt:'"Before anything clinical \u2014 please hear this: this is not your fault, and you haven\u2019t let anyone down. Fertility difficulties are really common, they\u2019re usually nobody\u2019s \u2018fault\u2019, and they\u2019re often about the couple together, not one person. I\u2019m really glad you came."' },
      { lbl:'One test isn\u2019t the verdict', txt:'"Crucially, one sperm test doesn\u2019t give us the full picture \u2014 the numbers vary a lot, and things like a recent illness can affect it. Sperm take about three months to be made, so we repeat the test after a few months before drawing any firm conclusions."' },
      { lbl:'Modifiable factors + exam', txt:'"There\u2019s plenty we can work on that genuinely improves things \u2014 smoking, alcohol, weight, possibly keeping the area cool, though the evidence there is weaker, and any supplements or gym products like steroids, which really affect sperm. And I’d like to examine you in person — I can’t do that on video, so we’ll book a separate appointment, and you’re welcome to have a chaperone. It’s a good chance to check the testicles are healthy too."' },
      { lbl:'Testicular safety-net', txt:'"When I examine you I’ll be checking for any lumps — men with lower counts have a slightly higher chance of testicular problems, so it’s worth being thorough. If I ever found something, I’d arrange a scan or refer you quickly, but that’s being careful, not expecting it."' },
      { lbl:'Couple + realistic hope', txt:'"Two important things: I’ll refer you both to fertility services now — after more than a year of trying you already qualify — because your partner needs checking too, and this is a team effort. And an abnormal result absolutely does NOT mean never: many couples conceive after some changes, and there are treatments like IVF and ICSI that work even with low numbers."' },
      { lbl:'Emotional support', txt:'"This is a lot to carry, especially alone. Would it help to bring your partner next time? You\u2019re in this together, and facing it as a couple usually helps. How are you feeling in yourself with all this?"' },
    ],
    learning:'An abnormal semen analysis must be interpreted and communicated carefully. A single abnormal sample should be CONFIRMED with a REPEAT before drawing conclusions \u2014 sperm parameters vary widely and are affected by recent illness/fever, abstinence period and collection \u2014 and because spermatogenesis takes about 72 days, NICE NG257 advises the repeat ideally 3 months after the first (as soon as possible if grossly abnormal/azoospermic). Take a male-factor history and address MODIFIABLE contributors (smoking, alcohol, recreational drugs \u2014 notably anabolic steroids, which suppress sperm production \u2014 obesity, medications, occupational exposures, and intercourse timing/frequency; raised scrotal temperature is associated with poorer semen quality, though benefit from looser clothing is uncertain), which can meaningfully improve borderline results. EXAMINE face to face (not on video; chaperone offered) testicular volume, varicocele, absent vas and hypogonadism signs, and — critically — PALPATE FOR A TESTICULAR MASS, because subfertile men have a somewhat increased testicular-cancer risk and NICE NG12 (Suspected cancer: recognition and referral, last updated April 2026) advises considering a suspected cancer pathway referral for a non-painful enlargement or change in shape or texture of the testis (and direct-access ultrasound for unexplained or persistent testicular symptoms); do not miss this while focused on fertility. Arrange hormonal tests (FSH, LH, testosterone \u00b1 prolactin; genetic/specialist tests if severe) and refer to fertility/andrology services now (NICE NG257: after 1 year of trying the couple is assessed together — at 14 months they qualify), framing fertility as a COUPLE issue \u2014 the partner must be assessed in parallel and a male abnormality does not mean the cause is solely his. Avoid false despair: abnormal results do not mean "never", many men with low counts conceive (especially after optimisation), and assisted options (IVF, and IVF with ICSI — which can fertilise with very few sperm) exist, with counselling offered (NICE QS73; HFEA Code of Practice). The hidden agenda is self-blame and guilt, with the patient choosing to hear it alone; address the blame compassionately (fertility issues are common, multifactorial and not a personal failing or matter of fault), correct the catastrophe, manage the emotional/relationship impact, encourage involving the partner, and deliver accurate information \u2014 neither cold facts nor false reassurance.',
    knowledge:{
      guideline:'[1] NICE NG257 Fertility problems: assessment and treatment (March 2026) · [2] NICE QS73 Fertility problems (2014) · [3] NICE NG12 Suspected cancer: recognition and referral · [4] HFEA Code of Practice (counselling in licensed clinics) · [5] GMC Intimate examinations and chaperones (2024) · semen analysis interpretation/repeat · testicular cancer suspected cancer pathway · couple-based fertility care',
      points:[
        { h:'Confirm with a repeat', t:'A single abnormal semen analysis should be repeated before conclusions \u2014 parameters vary and are affected by illness/abstinence/collection. Spermatogenesis ~72 days, so NICE NG257 advises a repeat ideally at 3 months (as soon as possible if grossly abnormal).' },
        { h:'Modifiable factors', t:'Smoking, alcohol, anabolic steroids/recreational drugs, obesity, scrotal heat (an association; benefit of looser clothing uncertain), medications, occupational exposures, intercourse timing/frequency (every 2\u20133 days). Optimising these can improve sperm quality.' },
        { h:'Examine + testicular cancer', t:'Face to face with a chaperone offered (not on video): testicular volume, varicocele, absent vas, hypogonadism signs, and palpate for a mass. Subfertile men have higher testicular-cancer risk; NICE NG12: consider a suspected cancer pathway referral for non-painful enlargement or change in shape or texture of the testis; consider direct-access ultrasound for persistent symptoms.' },
        { h:'Investigate & refer', t:'Hormones (FSH, LH, testosterone \u00b1 prolactin); genetic/specialist tests if severe oligo-/azoospermia; refer to fertility/andrology — at 14 months the couple already meets the NICE NG257 1-year criterion.' },
        { h:'Fertility is a couple issue', t:'Assess the partner in parallel; a male abnormality does not mean the cause is solely male. Refer and manage as a couple.' },
        { h:'Realistic hope', t:'Abnormal results don\u2019t mean "never": many conceive after optimisation; assisted options (IVF, IVF with ICSI) work even with low counts; offer counselling (NICE QS73; HFEA). Honest, hopeful framing, not despair.' },
        { h:'Never do', t:'Never diagnose from one sample; never miss the testicular examination/mass; never frame fertility as solely the man\u2019s problem or "his fault"; never induce despair or give false reassurance; never ignore the emotional/couple dimension.' },
        { h:'Safety-net & follow-up', t:'Repeat test and timeline; lifestyle optimisation; testicular safety-netting/suspected cancer pathway referral considered if a mass; couple-based fertility referral; hormone results; emotional support and partner involvement.' }
      ]
    }
  };

  /* ============ 207. VIDEO — Tiredness in a young man: testosterone myths vs real causes ============ */
  const c207 = {
    id:'tiredness-testosterone-myths', title:'"I\u2019m knackered and my gym mate says it\u2019s low testosterone \u2014 can I just get a T boost?"', type:'video', duration:12,
    meta:{ age:32, sex:'M', setting:'Video consultation \u2014 fatigue with a request for testosterone.', system:'Men\u2019s health / Endocrine \u2014 fatigue & testosterone: myths, real causes & safe assessment', checked:'October 2026' },
    brief:'Mr Ryan Forsythe, 32, gym-goer, feels persistently TIRED with low energy and reduced libido, and \u2014 influenced by online "low-T" content and a gym friend \u2014 wants TESTOSTERONE ("a T boost") to fix it. The examinable task is to resist the "just give me testosterone" request and instead: take a structured FATIGUE history and screen real causes (sleep/insomnia/OSA — NICE NG202 suggests Epworth or STOP-Bang; mood/depression with a direct question about self-harm — NICE NG222; stress, diet, overtraining, alcohol, anaemia, thyroid, diabetes, etc. — as in any TATT), specifically assess for genuine HYPOGONADISM symptoms and confirm it CORRECTLY if suspected (BSSM guideline on adult testosterone deficiency, Hackett et al 2023: two MORNING total testosterone samples, 7–11am and ideally fasting, on separate occasions, with LH/FSH, prolactin, SHBG and FBC — not a one-off random level), and \u2014 critically \u2014 counsel the MYTHS and HARMS: testosterone is NOT a fatigue tonic; inappropriate testosterone (and especially ANABOLIC STEROID use from gyms/online) suppresses the body\u2019s own production, causes INFERTILITY (impaired spermatogenesis), testicular atrophy, polycythaemia, mood/cardiovascular effects, and is not a shortcut. Explore whether he is already using gym/online supplements or steroids (ask non-judgementally), and offer harm reduction if he is (NICE PH52, 2014: needle and syringe programmes include people who inject image- and performance-enhancing drugs). Manage the actual cause, and only consider testosterone replacement if genuine, confirmed hypogonadism (ideally specialist/endocrine input). The hidden agenda is fatigue + body-image/online influence; the skill is honest education without dismissiveness.',
    script:{
      opening:"(Confident, gym clothes on, slightly sheepish under the bravado.) \"Doc, I'm just constantly knackered — no energy, my sex drive's dropped, my gym gains have stalled. My mate at the gym reckons it's low testosterone, and I've seen loads online about it. Can you just test it and give me a testosterone boost? Or honestly, where's the harm in just trying some?\"",
      facts:[
        { topic:"Tiredness", text:"\"A few months. More just flat and drained\" — about 4 months. Not sleepy in the day, more no energy." },
        { topic:"Sleep", text:"\"I don't sleep brilliantly, if I'm honest. I don't know about snoring.\" Bed at 1 am after gaming; up at 6 for the gym. Lives alone." },
        { topic:"Mood", text:"\"Bit flat, yeah. Nothing massive.\" If asked directly: no thoughts of self-harm. Stressed about a job change and a recent break-up." },
        { topic:"Training and diet", text:"\"I train most days. I push it hard\" — 6–7 days a week, no rest days, plus 5 km runs. Eating \"clean\", cutting carbs to get lean; lost 4 kg in 2 months. Pre-workout supplements with lots of caffeine." },
        { topic:"Libido and erections", text:"\"Mainly just not in the mood.\" Morning erections still present. No breast swelling, no testicular problems." },
        { topic:"Steroids — ask non-judgementally", text:"\"I've looked into it. That's partly why I'm asking you. I'd rather do it properly.\" Has bought a \"natural test booster\" online; hasn't injected anything. Gym mate has offered him some." },
        { topic:"Health", text:"No regular medicines, no allergies. No past illnesses. Drinks 15–20 units at weekends. Non-smoker. Planning children \"one day\" with a future partner." },
        { topic:"Work", text:"Estate agent; recently changed jobs; long hours." },
        { topic:"How to play it", text:"Keen on the quick fix but genuinely wants to do it properly. Challenges: \"But what if it is low T?\" and \"And the harm in just trying some?\" Taken aback by fertility risk: \"I didn't know about the fertility thing.\" Agrees to ease off training. If lectured or mocked, becomes defensive and says he'll \"just get it online\"." }
      ],
      ice:{
        ideas:"\"It's low testosterone — a boost will fix it.\"",
        concerns:"HIDDEN AGENDA — doing \"everything right\" and going backwards; body image; a recent break-up and work stress he hasn't linked to the tiredness; tempted by a friend's offer of steroids.",
        expectations:"\"A test and a testosterone boost.\""
      },
      cues:[
        "\"Where's the harm in just trying some?\" — the risk conversation.",
        "\"I'd rather do it properly.\" — invites asking about gym products.",
        "\"Going backwards.\" — overtraining and under-eating to explore."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Resists the "just test it and give me testosterone" request and works up the FATIGUE structurally \u2014 screening sleep/OSA (NICE NG202), mood/depression with a self-harm question (NICE NG222), stress, diet, overtraining, alcohol/drugs, anaemia, thyroid, diabetes — as for any TATT' },
      { dom:'dg', text:'Assesses for genuine HYPOGONADISM symptoms and, IF indicated, tests CORRECTLY per BSSM 2023 — two MORNING total testosterone samples (7–11am, ideally fasting) on separate occasions, with LH, FSH, SHBG ± free testosterone, prolactin and FBC — not a single random level' },
      { dom:'ro', text:'BUSTS THE MYTH that testosterone is a fatigue/energy/performance tonic, and that "where\u2019s the harm in trying" is safe \u2014 it is not for men with normal levels' },
      { dom:'cm', text:'Spells out the HARMS of inappropriate testosterone/anabolic steroids \u2014 suppression of endogenous production, INFERTILITY and testicular atrophy, polycythaemia/thrombosis risk, gynaecomastia, mood/cardiovascular effects, unregulated products \u2014 especially the fertility risk' },
      { dom:'dg', text:'Asks NON-JUDGEMENTALLY about current/considered gym/online testosterone, anabolic steroid or "booster"/SARM use \u2014 recognising it may be causing his symptoms and matters for safe management/harm reduction (needle and syringe programme per NICE PH52 if he injects)' },
      { dom:'ro',   text:'Takes the fatigue and low libido seriously, reads the body-image/online influence, and educates honestly WITHOUT being dismissive or preachy \u2014 not simply refusing or simply complying' },
      { dom:'cm', text:'Manages the ACTUAL cause found, and only considers testosterone replacement for genuine, correctly-confirmed hypogonadism (usually with specialist/endocrine input)' },
      { dom:'cm',    text:'Safety-nets and follows up: appropriate fatigue investigations and review, correct testosterone testing only if indicated, harm-reduction/steroid-cessation support if relevant, treatment of the real cause, and review \u2014 honest education, not handing over testosterone' },
    ],
    worked:[
      { lbl:'Take it seriously, reframe', txt:'"Being constantly knackered with a low sex drive is genuinely worth sorting \u2014 so I do want to help. But I\u2019d be doing you a disservice if I just tested testosterone and handed you a boost, because in a young man that\u2019s actually an uncommon cause, and there are several more likely ones we\u2019d miss."' },
      { lbl:'Work up the real causes', txt:'"Let me ask properly: how\u2019s your sleep \u2014 snoring, waking unrefreshed? Your mood and stress — and if you’ve been feeling flat, any thoughts of harming yourself? Drinking, diet, how hard you\u2019re training and recovering? \u2026 I\u2019ll also do bloods \u2014 thyroid, blood count, sugar \u2014 because these are the usual culprits for this kind of tiredness."' },
      { lbl:'Test T correctly if needed', txt:'"If your symptoms point to genuinely low testosterone, we test it properly \u2014 two morning samples between 7 and 11, ideally before eating, on different days, plus some related hormones \u2014 not a random one-off, because levels swing about and a single low reading can mislead."' },
      { lbl:'Bust the myth honestly', txt:'"Here\u2019s the honest bit: testosterone isn\u2019t an energy tonic. If your level is normal, taking it won\u2019t fix the tiredness \u2014 and \u2018no harm in trying\u2019 really isn\u2019t true here."' },
      { lbl:'Spell out the harms', txt:'"Taking testosterone or gym steroids when you don\u2019t need them shuts down your own production \u2014 which can make you INFERTILE and shrink the testicles \u2014 thickens the blood and raises clot and stroke risk, and the gym/online stuff is unregulated. The fertility one catches a lot of young men out."' },
      { lbl:'Ask + support', txt:'"Can I ask without any judgement \u2014 are you taking, or thinking about, any gym or online testosterone, steroids or boosters? \u2026 That\u2019s really useful to know, because it can actually cause exactly these symptoms, and I can help you do this safely. Let\u2019s find and fix the real reason you\u2019re so tired."' },
    ],
    learning:'Fatigue with low libido in a young man has many causes, and testosterone deficiency is an uncommon and heavily over-attributed one \u2014 so resist the "just test it and give me a T boost" request (driven by online "low-T" content and gym culture) and work the fatigue up structurally, screening sleep/insomnia/OSA (NICE NG202), mood/depression with a direct self-harm question (NICE NG222) and stress, diet, overtraining/under-recovery, alcohol/drugs, anaemia, thyroid disease and diabetes, as for any "tired all the time" presentation. If symptoms genuinely suggest HYPOGONADISM (low libido, erectile dysfunction, reduced morning erections, low energy/mood, reduced muscle mass, gynaecomastia, small testes), confirm it CORRECTLY (BSSM guideline, Hackett et al 2023): two MORNING (7–11am, ideally fasting) total testosterone samples on separate occasions (levels vary and fall with acute illness and through the day), with LH, FSH, SHBG (± calculated free testosterone), prolactin and FBC — not a single random level — with a confirmed low result needing explanation (primary vs secondary) and usually specialist/endocrine input. Crucially, bust the MYTH that testosterone is a fatigue/energy/performance tonic and that "where\u2019s the harm in trying" is safe: giving testosterone to a man with normal levels (or self-sourced anabolic steroids) is harmful, suppressing endogenous testosterone and sperm production to cause INFERTILITY (the most underestimated harm in young men) and testicular atrophy, plus polycythaemia (thrombosis/stroke risk), gynaecomastia, mood/cardiovascular effects, with unregulated, potentially contaminated gym/online products. Ask NON-JUDGEMENTALLY about current/considered gym or online testosterone, anabolic steroid, "booster" or SARM use, as it is common, may itself be causing his symptoms (post-cycle hypogonadism), and matters for safe management and harm reduction (needle and syringe programmes include people who inject image- and performance-enhancing drugs — NICE PH52, 2014). Take the fatigue and low libido seriously, educate honestly without being dismissive or preachy, treat the actual cause, and reserve testosterone replacement for genuine, correctly-confirmed hypogonadism with specialist input.',
    knowledge:{
      guideline:'[1] BSSM guideline on adult testosterone deficiency (Hackett et al., World J Mens Health 2023) · [2] NICE NG202 Obstructive sleep apnoea hypopnoea syndrome and obesity hypoventilation syndrome in over 16s (2021) · [3] NICE NG222 Depression in adults (2022, last reviewed January 2026) · [4] NICE PH52 Needle and syringe programmes (2014) · [5] BNF testosterone monographs · testosterone testing (two morning samples 7–11am + LH/FSH/SHBG/prolactin) · anabolic-steroid harms · fatigue work-up',
      points:[
        { h:'Work up fatigue first', t:'Fatigue + low libido has many causes; low testosterone is uncommon/over-attributed in young men. Screen sleep/OSA (NICE NG202: Epworth or STOP-Bang), mood including self-harm (NICE NG222), stress, diet, overtraining, alcohol/drugs, anaemia, thyroid, diabetes before attributing to testosterone.' },
        { h:'Test testosterone correctly', t:'If hypogonadism suspected (BSSM 2023): two morning total testosterone samples (7–11am, ideally fasting) on separate occasions, with LH, FSH, SHBG ± free testosterone, prolactin and FBC — not a single random level. Confirmed low \u2192 explain (primary/secondary), usually specialist input.' },
        { h:'Testosterone is not a tonic', t:'For men with normal levels, testosterone does not fix fatigue/energy/performance, and "no harm in trying" is false \u2014 it is harmful.' },
        { h:'Spell out the harms', t:'Inappropriate testosterone/anabolic steroids suppress endogenous production \u2192 infertility and testicular atrophy; polycythaemia (thrombosis/stroke), gynaecomastia, mood/cardiovascular effects; unregulated gym/online products. Emphasise the fertility risk.' },
        { h:'Ask about steroid use', t:'Non-judgementally ask about current/considered gym/online testosterone, anabolic steroids, SARMs or boosters — common, may be causing the symptoms (post-cycle hypogonadism), and key for harm reduction (needle and syringe programmes, NICE PH52).' },
        { h:'Treat the real cause', t:'Manage the actual cause found; reserve testosterone replacement for genuine, correctly-confirmed hypogonadism, usually with endocrine input.' },
        { h:'Never do', t:'Never give testosterone for fatigue without confirmed deficiency; never test with a single random level; never omit the harm/infertility counselling; never skip the non-judgemental steroid enquiry; never be dismissive or preachy.' },
        { h:'Safety-net & follow-up', t:'Appropriate fatigue investigations and review; correct testosterone testing only if indicated; harm-reduction/steroid-cessation support; treat the real cause; specialist referral for confirmed hypogonadism.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c204, c205, c206, c207);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'haematospermia': {
      ceg: ['Long-term conditions & cancer', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Daniel Ofori', age: '33 years \u00b7 male',
        pmh: ['Blood in ejaculate once or twice over a week', 'No urinary symptoms, haematuria, trauma, fever or weight loss', 'Convinced it is cancer (googling)'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"There was blood when I ejaculated \u2014 I\u2019ve convinced myself it\u2019s cancer."',
        reason: 'Video consultation \u2014 blood in the semen.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Normalise + take seriously', d:'Reduce embarrassment; assess properly to give an honest answer, not google\u2019s worst case.' },
        { t:'2\u20135',  h:'Assess', d:'Urinary symptoms, haematuria, STI risk, procedures, trauma, systemic features; BP, urine dip, examine genitalia in person.' },
        { t:'5\u20137',  h:'Reassure proportionately', d:'Young + no red flags \u2192 almost always benign/self-limiting; cancer uncommon at 33.' },
        { t:'7\u20139',  h:'Treat any cause', d:'Treat infection if found; otherwise typically self-limiting over weeks.' },
        { t:'9\u201312', h:'Threshold + safety-net', d:'Investigate/refer if ≥40, persistent/recurrent, haematuria, abnormal DRE/raised age-specific PSA (NICE NG12 suspected cancer pathway); reduce googling.' }
      ],
      wordPics: {
        fail: 'Either over-investigates a low-risk young man, or dismisses without any assessment; fails to set the threshold for when it WOULD matter; leaves the cancer fear unaddressed.',
        pass: 'Assesses sensibly, reassures the young/low-risk patient proportionately, and safety-nets the red flags.',
        exc:  'Normalises and assesses (urine, exam, red-flag screen), reassures proportionately that it is almost always benign in the young, treats any cause, clearly sets the ≥40/persistent/haematuria/abnormal-DRE thresholds (NICE NG12 prostate), and addresses the cancer fear honestly.'
      },
      avoid: [
        { dont:'"Blood in the semen — we’d better do lots of tests and an urgent cancer referral to be safe."', instead:'"In a man of 33 with no other symptoms this is almost always harmless \u2014 let me arrange to examine you in person and test your urine, and I’ll explain when it would need more."', why:'Over-investigating a low-risk young man causes harm and anxiety and misuses the suspected cancer pathway.' },
        { dont:'"It\u2019s nothing, don\u2019t worry about it" (without assessing).', instead:'"Let me check a few things first so my reassurance actually means something \u2014 then I can be confident."', why:'Dismissing without assessment risks missing the occasional red-flag case and doesn\u2019t land as genuine reassurance.' },
        { dont:'(No threshold) failing to say when it would matter.', instead:'"It would need looking into if it persists, you see blood in your wee, or in older men \u2014 but none of that applies to you now."', why:'Without a clear safety-net threshold, the older/persistent/red-flag case can be missed later.' }
      ]
    },

    'peyronies-curvature': {
      ceg: ['Gender, reproductive & sexual health', 'Mental health & addiction'],
      stem: {
        name: 'Stephen Hargreaves', age: '54 years \u00b7 male',
        pmh: ['Acquired penile curvature over months + pain on erection + palpable shaft plaque', 'Intercourse difficult; distressed/embarrassed', '?erectile dysfunction; cardiometabolic risk to check'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"My penis has started bending and it hurts \u2014 I almost cancelled, it\u2019s mortifying."',
        reason: 'Video consultation \u2014 acquired penile curvature.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Create safety', d:'Thank him; normalise; calm, non-judgemental, dignified manner \u2014 essential before anything clinical.' },
        { t:'2\u20134',  h:'Recognise Peyronie\u2019s', d:'Plaque + pain + evolving curve = active-phase Peyronie’s; explain the two phases honestly (curve worsens in about half).' },
        { t:'4\u20137',  h:'History/exam + associations', d:'Curvature/pain/intercourse/erectile function; palpate plaque face to face; screen ED, Dupuytren’s, CV/diabetes risk; PSA/DRE consideration (NICE NG12).' },
        { t:'7\u20139',  h:'Honest course + refer', d:'Let active phase stabilise; surgery only stable disease; realistic expectations (curve unpredictable); urology referral; penile-fracture safety-net.' },
        { t:'9\u201312', h:'ED + psychosexual', d:'Treat ED; validate self-esteem/relationship impact; screen mood; ask about a partner; psychosexual support.' }
      ],
      wordPics: {
        fail: 'Brisk/embarrassed handling; offers surgery in the active phase or false "it\u2019ll be fine"; ignores ED and the psychosexual/self-esteem impact.',
        pass: 'Creates safety, recognises Peyronie\u2019s, gives honest phase-based information and urology referral, and addresses ED/mood.',
        exc:  'Creates psychological safety, recognises active-phase Peyronie\u2019s, takes a sensitive history/exam and screens associations (ED, Dupuytren\u2019s, cardiometabolic), counsels honestly on phases/timeline and that surgery awaits stable disease, refers to urology, and addresses ED and the psychosexual/self-esteem impact with dignity.'
      },
      avoid: [
        { dont:'(Brisk) "It\u2019s Peyronie\u2019s \u2014 I\u2019ll refer you to urology, next." ', instead:'"Thank you for raising something so hard to talk about \u2014 let\u2019s go through it calmly; this is common and there\u2019s a lot we can do."', why:'Failing to create safety and address the emotional impact fails an embarrassed, distressed patient.' },
        { dont:'"They can just operate to straighten it."', instead:'"Surgery is generally only once it’s settled and stopped changing, often around a year on — in the painful, changing phase we let it stabilise first."', why:'Operating in the active phase is wrong; honest phase-based counselling is needed.' },
        { dont:'(Ignoring ED/mood) focusing only on the curve.', instead:'"How are erections themselves, and how\u2019s this affecting you and your relationship? Both matter and are treatable."', why:'Missing coexisting ED and the psychosexual/self-esteem impact neglects core management.' }
      ]
    },

    'abnormal-semen-analysis': {
      ceg: ['Gender, reproductive & sexual health', 'Long-term conditions & cancer'],
      stem: {
        name: 'Tom Whitfield', age: '34 years \u00b7 male',
        pmh: ['Trying to conceive ~14 months; semen analysis: low count + reduced motility (single sample)', 'Attends alone; self-blaming', 'Modifiable factors + testicular exam to assess'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"My sperm test came back abnormal \u2014 is it my fault, will we never have kids?"',
        reason: 'Video consultation \u2014 results of a semen analysis.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Address blame', d:'Not his fault; fertility is common, multifactorial, a couple issue; glad he came.' },
        { t:'2\u20134',  h:'One test isn\u2019t the verdict', d:'Confirm with a repeat (ideally at 3 months, 72-day cycle — NICE NG257); parameters vary; illness affects it.' },
        { t:'4\u20137',  h:'Modifiable + exam', d:'Smoking/alcohol/steroids/heat (association)/weight; examine face to face with chaperone offered — varicocele/volume AND palpate for a testicular mass.' },
        { t:'7\u20139',  h:'Testicular safety-net + couple', d:'NICE NG12: consider suspected cancer pathway referral if a non-painful enlargement or change in shape or texture (higher risk in subfertile men); refer BOTH to fertility now (1-year criterion met); partner assessed too.' },
        { t:'9\u201312', h:'Realistic hope + support', d:'Not "never" — optimisation, IVF/ICSI; involve partner; counselling (NICE QS73); screen mood/relationship impact.' }
      ],
      wordPics: {
        fail: 'Treats one sample as a verdict; frames it as solely his fault; skips the testicular exam; induces despair or false reassurance; ignores the couple/emotional dimension.',
        pass: 'Advises a repeat, addresses modifiable factors, examines (incl. testes), refers the couple, and gives realistic hope.',
        exc:  'Addresses self-blame compassionately, explains one sample needs repeating (72-day cycle), tackles modifiable factors, arranges a face-to-face examination including palpating for a testicular mass (NICE NG12 suspected cancer pathway awareness), refers both partners to fertility, gives realistic hope (IVF/ICSI), and supports the emotional/couple impact.'
      },
      avoid: [
        { dont:'"Your sperm test is abnormal \u2014 so that\u2019s why you\u2019re not conceiving."', instead:'"One sample isn\u2019t the full picture \u2014 we repeat it after about three months, and fertility is a couple issue, not just you."', why:'Diagnosing from a single sample and pinning it on the man is inaccurate and harmful.' },
        { dont:'(Skipping exam) referring on the result alone.', instead:'"I’d like to examine you in person — it’s also a chance to check the testicles, as men with lower counts have a slightly higher risk of testicular problems."', why:'Missing the testicular examination/mass overlooks the NICE NG12 testicular-cancer awareness in subfertile men.' },
        { dont:'"It\u2019s unlikely you\u2019ll have children naturally, I\u2019m afraid."', instead:'"This doesn\u2019t mean never \u2014 many conceive after some changes, and treatments like IVF/ICSI work even with low counts."', why:'Inducing despair is inaccurate and damaging; realistic hope is warranted.' }
      ]
    },

    'tiredness-testosterone-myths': {
      ceg: ['Mental health & addiction', 'New & undifferentiated presentations'],
      stem: {
        name: 'Ryan Forsythe', age: '32 years \u00b7 male',
        pmh: ['Persistent tiredness, low energy, reduced libido, "stalled gains"', 'Wants testosterone ("a T boost") from online/gym influence', '?gym/online steroid use to ask about'],
        meds: ['Various gym supplements'],
        allergy: 'NKDA',
        recent: '"My gym mate says it\u2019s low testosterone \u2014 can you test it and give me a boost? Where\u2019s the harm?"',
        reason: 'Video consultation \u2014 fatigue with a testosterone request.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Take seriously, reframe', d:'Fatigue/low libido worth sorting; low-T uncommon/over-attributed \u2014 don\u2019t just test and boost.' },
        { t:'2\u20135',  h:'Work up fatigue', d:'Sleep/OSA, mood (ask about self-harm), stress, diet, overtraining, alcohol; bloods (thyroid, FBC, ferritin, HbA1c).' },
        { t:'5\u20137',  h:'Test T correctly if needed', d:'Two morning total testosterone samples 7–11am, ideally fasting (BSSM 2023) + LH/FSH/SHBG/prolactin — not a one-off random.' },
        { t:'7\u20139',  h:'Myth + harms', d:'Not a tonic; inappropriate T/steroids \u2192 infertility, testicular atrophy, polycythaemia; unregulated products.' },
        { t:'9\u201312', h:'Ask use + treat cause', d:'Non-judgemental steroid enquiry; harm reduction (needle and syringe programme if injecting); treat the real cause; specialist if confirmed hypogonadism.' }
      ],
      wordPics: {
        fail: 'Tests a random testosterone and/or prescribes a "boost" without working up fatigue; ignores the harms/infertility; never asks about gym steroid use; or just refuses dismissively.',
        pass: 'Works up the fatigue, tests testosterone correctly only if indicated, and counsels the myths/harms.',
        exc:  'Takes the symptoms seriously, works up fatigue structurally, tests testosterone correctly (two morning samples 7–11am + LH/FSH/SHBG/prolactin, BSSM 2023) only if indicated, busts the tonic myth and spells out harms (esp. infertility), asks non-judgementally about gym/online steroid use, and treats the real cause \u2014 honest, not dismissive.'
      },
      avoid: [
        { dont:'"Sure, let\u2019s check your testosterone and we can try a boost if it\u2019s on the low side."', instead:'"Low-T is actually an uncommon cause in young men \u2014 let\u2019s find the real reason for the tiredness first, and test testosterone properly only if it fits."', why:'Jumping to testosterone skips the work-up and risks inappropriate, harmful prescribing.' },
        { dont:'"There\u2019s no harm in trying a bit of testosterone."', instead:'"There genuinely is \u2014 it can make you infertile, shrink the testicles and thicken the blood. It\u2019s not a tonic."', why:'\u2018No harm in trying\u2019 is a dangerous myth; the harms (especially infertility) must be spelled out.' },
        { dont:'(Not asking) ignoring possible steroid use.', instead:'"Without judgement \u2014 are you taking any gym or online testosterone, steroids or boosters? It can cause exactly these symptoms."', why:'Failing to ask about anabolic-steroid use misses a likely cause and a harm-reduction opportunity.' }
      ]
    }

  });

})();
