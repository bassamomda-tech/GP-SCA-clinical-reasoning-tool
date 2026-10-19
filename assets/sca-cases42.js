/* ============================================================
   Reasoning GP — Case Library batch 42:
   "The lump, the bruise & the swelling you never wave away"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   The recurring lesson: a lump / petechiae / enlarging swelling is
   taken seriously, examined, and routed down the correct NICE NG12
   suspected-cancer (referral / direct-access) pathway — never reassured
   away from a photo, a phone call, or a wish for it to be nothing.
   Each case names the precise NG12 threshold and the action.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases41.js.
   ============================================================ */

(function(){

  /* ============ 161. VIDEO — Breast lump in a woman of 34 (NG12 breast suspected cancer pathway) ============ */
  const c161 = {
    id:'breast-lump-2ww', title:'"It\u2019s probably just a cyst \u2014 I\u2019m too young for anything bad, aren\u2019t I?"', type:'video', duration:12,
    meta:{ age:34, sex:'F', setting:'Video consultation \u2014 a breast lump she found herself.', system:'Breast / Suspected breast cancer', checked:'October 2026' },
    brief:'Mrs Priya Kaushal, 34, marketing manager, mother of two. Found a firm lump in the upper-outer quadrant of the right breast ~3 weeks ago in the shower; thinks it may be slightly bigger. No pain. No skin or nipple change that she has noticed. She is breastfeeding-experienced but not currently feeding. She is keen to be told it is "just a cyst" and is frightened of an examination and of the word cancer. The task is to take ANY unexplained breast lump seriously, examine (with a chaperone), and \u2014 because she is 30 or over \u2014 refer on the NICE NG12 suspected cancer pathway to the breast clinic for triple assessment (the lump must be examined face to face, as this is a video consultation), while handling her fear and the "I\u2019m too young" misconception.',
    script:{
      opening:"(Bright and brisk, a bit too cheerful; nervous underneath.) \"Thanks for seeing me. I found a lump in my right breast a few weeks ago — it's probably nothing, isn't it? I'm only 34, I keep telling myself I'm too young for anything serious. It doesn't hurt, which is good, right? I'm sure it's just a cyst. Can you just tell me it's fine — I really don't want a big fuss or hospitals.\"",
      facts:[
        { topic:"The lump", text:"Upper outer part of the right breast, towards the armpit. Found it in the shower about three weeks ago. \"It feels firm — like a frozen pea, maybe a bit bigger.\" If asked about size change: \"I think it might be a bit bigger. I keep checking it, so maybe I'm imagining it.\" Can point to the spot on camera." },
        { topic:"Other breast symptoms", text:"If asked: no pain at all. No nipple discharge, bleeding or the nipple pulling in. No skin dimpling or redness she has noticed. No lumps in the armpit she can feel. Left breast normal." },
        { topic:"Periods and hormones", text:"Regular periods, last one 10 days ago; the lump hasn't changed with her cycle. Has a copper coil, no hormones. Not pregnant." },
        { topic:"Pregnancies", text:"Two children, aged 4 and 7. Breastfed both — \"not for a while now\". No breast problems then." },
        { topic:"Family history — sensitive", text:"If asked about family: first deflects — \"Can we not go there right now? I just want to know about mine.\" If gently asked again: her mum's sister had breast cancer in her fifties and is alive. No ovarian cancer in the family that she knows of." },
        { topic:"General health", text:"If asked: feels well, no weight loss, no bone pain, no cough. No regular medicines, no allergies." },
        { topic:"Social", text:"Marketing manager, married to Raj. Non-smoker, a couple of glasses of wine a week. Mother-in-law can help with the children." },
        { topic:"Examination", text:"Hates being examined: \"I suppose so. I hate being examined.\" Will agree to come in to be examined, with a female chaperone, if the doctor explains why it matters." },
        { topic:"How to play it", text:"Cheerful and dismissive at first, pushing for \"it's a cyst\". If the doctor asks what worries her, pause, then let the fear out. If the doctor says \"it's probably a cyst\" without examining or referring, look relieved and thank them (the trap). If the doctor explains clearly that she needs a quick hospital check and most lumps are not cancer, accept: \"I'd rather know than keep poking at it every night.\"" }
      ],
      ice:{
        ideas:"\"It's a cyst. I'm too young, and it doesn't hurt — I thought pain was the bad sign.\"",
        concerns:"HIDDEN AGENDA — (Pause.) \"That it's cancer. I've got two little ones. I can't even say the word without feeling sick. If you tell me it's a cyst, I don't have to think about it.\" Her aunt's breast cancer is in the back of her mind.",
        expectations:"\"Just tell me it's fine — no fuss, no hospitals.\""
      },
      cues:[
        "\"I'm too young for anything serious, aren't I?\" — invites gentle correction.",
        "\"Can we not go there right now?\" — when asked about family; a sign of fear.",
        "\"I keep checking it every night.\" — the worry she is not saying out loud."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Takes ANY unexplained breast lump seriously regardless of age/pain, and characterises it on history (duration, change in size, skin/nipple change, family history, hormonal/risk factors) rather than reassuring from the story' },
      { dom:'dg', text:'EXAMINES both breasts, axillae and regional nodes face to face (it cannot be done on video) — offering and documenting a CHAPERONE (GMC Intimate examinations and chaperones) \u2014 assessing site, size, consistency, mobility/fixity, skin tethering/dimpling, peau d\u2019orange and nipple change' },
      { dom:'cm', text:'Knows and applies the NICE NG12 threshold: aged 30+ with an unexplained breast lump → SUSPECTED CANCER PATHWAY referral for TRIPLE ASSESSMENT \u2014 and does NOT let a "benign-feeling" exam override referral' },
      { dom:'ro', text:'Corrects the "I\u2019m too young / painless means it\u2019s safe" misconceptions accurately (age does not exclude it; most breast cancers are painless) without frightening' },
      { dom:'ro', text:'Explains triple assessment (clinical exam + mammogram/ultrasound \u00b1 biopsy) and the realistic message that MOST referred lumps prove benign \u2014 referral is precautionary, not a cancer diagnosis' },
      { dom:'ro',   text:'Recognises the reassurance-seeking as fear, surfaces the worry about cancer/hospitals/her children gently, and does NOT collude with the wish to be told it is nothing' },
      { dom:'ro',   text:'Handles the examination sensitively (consent, dignity, chaperone) and balances honesty (this needs urgent checking) with calm reassurance so she engages rather than avoids' },
      { dom:'cm',    text:'Safety-nets and follows up: the suspected cancer pathway timeframe (NHS England Faster Diagnosis Standard: diagnosis or ruling out within 28 days) and what to expect at the breast clinic, what change would warrant sooner contact, ensures she will attend, acknowledges the fear, and arranges to review the outcome \u2014 examination + correct NICE NG12 referral, not collusive reassurance' },
    ],
    worked:[
      { lbl:'Take it seriously, kindly', txt:'"I\u2019m really glad you came \u2014 and I\u2019m not going to just reassure you and wave you off, because that wouldn\u2019t be fair to you. A new lump deserves to be taken properly seriously, whatever your age. Let me ask a few things, and then I need to examine you carefully in person — I can’t do that over video, so I’d like you to come in to the surgery today."' },
      { lbl:'Gently correct the myths', txt:'"Two things I want to be honest about, because they\u2019re common and they matter: being 34 doesn\u2019t mean you can\u2019t have something that needs checking, and a lump being painless isn\u2019t reassuring \u2014 in fact most breast lumps that turn out to be important don\u2019t hurt. So \u2018it doesn\u2019t hurt\u2019 doesn\u2019t let us off looking."' },
      { lbl:'Examine with dignity', txt:'"When you come in, I’d like to examine both breasts and under your arms. I’ll have a chaperone in with us, you can stop me at any point, and I\u2019ll talk you through it. Is that okay?"' },
      { lbl:'Name the pathway honestly', txt:'"Here\u2019s the plan, and I want to be straight with you. Because you\u2019re over 30 with a new lump, the right and safe thing — whatever it feels like to me — is to refer you to the breast clinic on the suspected cancer pathway — you should be seen quickly and get an answer within 4 weeks (28 days). I’ll send that today; it doesn’t wait for the examination. They do what\u2019s called triple assessment: an examination, a scan or mammogram, and a tiny sample if needed, all usually in one visit."' },
      { lbl:'Reassure with reasons', txt:'"This is NOT me telling you it\u2019s cancer \u2014 the large majority of lumps sent this way turn out to be completely benign, often a cyst exactly as you hoped. But the only way to KNOW is to have it properly looked at, and going quickly is what keeps you safe and gets you your answer fastest."' },
      { lbl:'Surface the fear + safety-net', txt:'"Can I gently ask \u2014 what\u2019s the worry underneath this for you? \u2026 Your little ones. Of course. That fear makes complete sense, and it\u2019s exactly why we get a clear answer rather than guess. If anything changes \u2014 the lump grows, skin or nipple changes, you feel unwell \u2014 come back sooner. I\u2019ll make sure the referral goes today and I\u2019ll follow up the result with you."' },
    ],
    learning:'A new, discrete, unexplained breast lump is taken seriously and EXAMINED face to face (both breasts, axillae and nodes, with a chaperone offered and documented; this cannot be done on video) regardless of the patient\u2019s age, the absence of pain, or how well she feels \u2014 "painless" is not reassuring (most breast cancers are painless) and "too young" does not exclude it. The NICE NG12 (Suspected cancer: recognition and referral, last updated April 2026) threshold is explicit: people aged 30 AND OVER with an unexplained breast lump (with or without pain) are referred using a SUSPECTED CANCER PATHWAY referral for TRIPLE ASSESSMENT (clinical examination + imaging ± biopsy); under 30 with an unexplained breast lump, consider a non-urgent referral; aged 50 and over with discharge, retraction or other changes of concern in one nipple only are also referred; and a suspected cancer pathway referral should be CONSIDERED for skin changes that suggest breast cancer, or at 30 and over with an unexplained axillary lump (NICE NG12). A benign-feeling examination does NOT override referral. The examinable hidden agenda is that "it\u2019s probably just a cyst / I\u2019m too young / just tell me it\u2019s fine" is FEAR \u2014 of cancer, hospitals and the impact on young children \u2014 half-hoping to be told it is nothing; colluding with that wish to spare distress is a serious error. Correct the misconceptions, arrange a face-to-face examination with dignity, refer on the NG12 breast pathway with the honest, reassuring message that most referred lumps prove benign, surface and hold the fear, and safety-net and follow up.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer: recognition and referral · GMC Good medical practice (2024) · GMC Intimate examinations and chaperones · NHS England Faster Diagnosis Standard · breast cancer recognition and referral · triple assessment',
      points:[
        { h:'Any unexplained breast lump \u2192 assess', t:'Take a new discrete unexplained breast lump seriously regardless of age, pain or wellbeing. Characterise on history (duration, change, skin/nipple change, family history, hormonal factors) and examine both breasts, axillae and regional nodes with a chaperone — face to face, because a lump cannot be examined over video; the referral does not wait for, or depend on, the examination.' },
        { h:'NICE NG12 breast thresholds', t:'Refer using a suspected cancer pathway referral: aged 30 and over with an unexplained breast lump, with or without pain; aged 50 and over with discharge, retraction or other changes of concern in one nipple only. Consider a suspected cancer pathway referral: skin changes that suggest breast cancer; aged 30 and over with an unexplained lump in the axilla. Under 30 with an unexplained breast lump → consider a non-urgent referral.' },
        { h:'Triple assessment', t:'The breast clinic performs triple assessment: clinical examination + imaging (mammography and/or ultrasound, ultrasound generally for younger/denser breasts) \u00b1 needle biopsy \u2014 usually at a single visit. A benign-feeling exam does not replace referral in those meeting the threshold.' },
        { h:'Painless and young are NOT reassuring', t:'Most breast cancers are painless; pain alone is usually benign but does not exclude cancer if a lump is present. Younger age lowers but does not remove risk \u2014 hence the explicit age-30 threshold. Correct these common misconceptions sensitively.' },
        { h:'Don\u2019t collude with reassurance-seeking', t:'Patients frightened of cancer may seek to be told it is nothing. Recognise this as fear, surface it gently, and avoid colluding \u2014 the duty is to examine and refer, framed with warmth and the honest message that most referred lumps prove benign.' },
        { h:'Examination dignity & chaperone', t:'Always offer and document a chaperone, gain consent, preserve dignity, explain each step and allow the patient to stop. Sensitive examination supports engagement with referral.' },
        { h:'Never do', t:'Never reassure a breast lump from the history or a photo without examination; never let "painless / too young / benign-feeling" override the NICE NG12 30+ referral; never omit the chaperone; never collude with the wish to be told it is nothing; never frighten with cold delivery.' },
        { h:'Safety-net & follow-up', t:'Make the suspected cancer pathway referral (NICE NG12) promptly, the same day; explain the clinic and triple assessment; advise what change warrants sooner contact; confirm attendance; acknowledge the fear; review the outcome \u2014 examination + correct NG12 referral, reassuring but never collusive.' }
      ]
    }
  };

  /* ============ 162. VIDEO — Persistent neck lump in an adult of 49 (NG12 head & neck suspected cancer pathway) ============ */
  const c162 = {
    id:'neck-lump-2ww', title:'"It\u2019s just a gland up from a cold \u2014 it\u2019ll go down, won\u2019t it?"', type:'video', duration:12,
    meta:{ age:49, sex:'M', setting:'Video consultation \u2014 a lump in the side of the neck.', system:'Head & neck / Suspected cancer', checked:'October 2026' },
    brief:'Mr Derek Mahoney, 49, publican and 25-pack-year smoker who drinks heavily. A firm lump in the right side of the neck for ~5 weeks; he assumed it was "a gland up from a cold" but it has NOT gone down. On directed history: it is painless, firm and a bit bigger; he has a mildly hoarse voice for a few weeks and some throat discomfort; smoker + heavy alcohol. The task is to take a persistent (>3\u20134 week) unexplained neck lump seriously, examine it and the head/neck, recognise the high-risk profile (smoking + alcohol + hoarseness), and refer on the NICE NG12 head and neck suspected cancer pathway — with a face-to-face examination, as this is a video consultation — while screening the broader differential (reactive, lymphoma/haematological, thyroid) and handling his minimisation.',
    script:{
      opening:"(Gruff, in a hurry, slightly hoarse voice.) \"Morning doc. It's probably nothing — I've got a lump on me neck, here on the right. I reckon it's just a gland up from a cold I had a while back. It'll go down on its own, won't it? The wife made me ring. I haven't got time to be poked about, the pub doesn't run itself. Can you just tell me it's nothing to worry about?\"",
      facts:[
        { topic:"The lump", text:"Right side of the neck, under the angle of the jaw. \"Five weeks, maybe. It hasn't gone down. If anything it's a bit bigger. Doesn't hurt though. Feels hard.\" Can point to it on camera — the doctor may see a visible swelling. The cold was about six weeks ago and settled in a few days." },
        { topic:"Voice and throat", text:"If asked: \"Now you mention it, it's been a bit rough for a few weeks. I put it down to shouting last orders.\" Throat feels raw on the right. If asked: no trouble swallowing, food doesn't stick, no earache, no mouth ulcers or patches he has seen, no coughing blood." },
        { topic:"General symptoms", text:"If asked: no night sweats, no fevers, no itch. \"Not that I've noticed\" to weight loss — trousers no different. Appetite fine. No other lumps in armpits or groin." },
        { topic:"Smoking and alcohol", text:"\"About twenty a day, since I was a lad\" (about 25 pack-years). Drink: \"More than I should. Comes with the job\" — 4–5 pints most nights plus whisky at weekends (around 60–70 units a week). No early-morning drinking or shakes. Never tried to stop smoking." },
        { topic:"History and medicines", text:"Rarely sees a doctor. No known illnesses, no regular medicines, no allergies." },
        { topic:"Social", text:"Self-employed publican, runs the pub with his wife, Sue. \"No work, no money. And I don't do doctors. Never have.\"" },
        { topic:"Family", text:"If asked what he is worried about: his dad died of throat cancer in his sixties — \"he smoked like a chimney too\"." },
        { topic:"How to play it", text:"Gruff and impatient; minimise everything. Admit the hoarse voice if asked. If asked what worries him, pause: \"Same as me dad, probably. Cancer. With the smoking. I'd rather not know, if I'm honest.\" If the doctor says it's just a gland, agree quickly and try to leave. If the doctor is straight but calm, ask \"When?\" and accept: \"The wife can run it for a day or two.\" Lukewarm about stopping smoking: \"Maybe. Let me get this sorted first.\"" }
      ],
      ice:{
        ideas:"\"Just a gland up from a cold. It'll go down.\"",
        concerns:"HIDDEN AGENDA — his dad died of throat cancer and he smokes and drinks the same way. He has noticed the voice and that the lump is growing and is scared, but would rather not know. Worried about the pub and money if he's ill.",
        expectations:"\"Tell me it's nothing — and no poking about.\""
      },
      cues:[
        "\"The wife made me ring.\" — someone else is worried; why?",
        "\"Put it down to shouting last orders.\" — the hoarse voice, played down.",
        "\"I'd rather not know.\" — the fear, if invited."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises a neck lump persisting beyond ~3\u20134 weeks as UNEXPLAINED (a reactive gland should settle) and does not accept "just a gland from a cold" \u2014 characterising it and ELICITING the downplayed hoarseness, throat symptoms, smoking and alcohol' },
      { dom:'dg', text:'Identifies the HIGH-RISK head & neck profile (smoker + heavy alcohol + persistent neck lump + hoarseness) and screens lymphoma B symptoms (night sweats, weight loss, fevers, itch, generalised lymphadenopathy)' },
      { dom:'dg', text:'EXAMINES face to face (not possible on video) the neck lump, oral cavity/oropharynx, thyroid and regional nodes (and looks for hepatosplenomegaly/other nodes), characterising the lump (site, size, consistency, fixity)' },
      { dom:'cm', text:'Applies NICE NG12: refers on the head and neck SUSPECTED CANCER PATHWAY for an unexplained neck lump/persistent hoarseness at 45+ (laryngeal; oral for a persistent unexplained neck lump; thyroid if a thyroid lump), considers lymphoma, arranges an FBC as a baseline, and a CHEST X-RAY because he is 40+ with persistent cervical lymphadenopathy' },
      { dom:'cm', text:'Addresses the modifiable risk \u2014 offers smoking cessation and alcohol brief intervention \u2014 without lecturing, and considers the broader differential (reactive, haematological, thyroid, benign) rather than labelling it benign from the chair' },
      { dom:'ro',   text:'Reads the "no time / tell me it\u2019s nothing" as avoidance, treats the wife\u2019s push as the reliable signal, surfaces the worry gently and does NOT collude with the wish to be reassured' },
      { dom:'ro',   text:'Balances honesty (a lump this persistent, with your background, needs urgent checking) with calm reassurance so a reluctant man engages with examination and referral' },
      { dom:'cm',    text:'Safety-nets and follows up: the suspected cancer pathway and what to expect, FBC/CXR results, red flags warranting sooner review, cessation/alcohol support, confirms he will attend, and reviews the outcome \u2014 examination + correct NICE NG12 referral, not "it’ll go down on its own"' },
    ],
    worked:[
      { lbl:'Refuse the "just a gland"', txt:'"I\u2019m glad your wife nudged you \u2014 and I’m not going to just tell you it’s a gland over a video call, because a gland from a cold goes down in a couple of weeks, and yours has been there over a month and isn\u2019t shifting. That earns a proper look, not a brush-off."' },
      { lbl:'Elicit the downplayed bits', txt:'"Few quick questions. Has your voice been husky or hoarse at all? \u2026 A few weeks, yes. Any soreness swallowing? And the smoking \u2014 how much, and how\u2019s the drink? \u2026 Thank you for being straight with me; that all matters and it\u2019s exactly why I asked rather than assumed."' },
      { lbl:'Name the concern honestly', txt:'"I\u2019ll be honest with you, because I think you\u2019d want that. A lump in the neck that\u2019s hung around, with a hoarse voice, in someone who smokes and drinks a fair bit \u2014 that\u2019s a combination I need a specialist to check quickly. It can be a problem in the voice box or throat. I\u2019m not telling you it IS \u2014 but it has to be ruled out fast."' },
      { lbl:'Examine + the right tests', txt:'"I need to examine your neck, mouth, throat and your thyroid in person, and feel for other glands — I can’t do that on video, so can you come in today? I’m going to arrange a blood count and a chest X-ray too, because a neck gland that has stayed this long at your age needs a chest X-ray, and the blood count helps me cover the other possible causes."' },
      { lbl:'Urgent referral', txt:'"Given all of it together, I’m referring you on the urgent suspected cancer pathway to the head-and-neck specialists \u2014 you\u2019ll be seen quickly. That\u2019s the safe, right step, and getting it looked at fast is exactly what gives the best outcome whatever it turns out to be."' },
      { lbl:'Risk + safety-net, no lecture', txt:'"I\u2019m not here to give you a hard time about the fags and the pints \u2014 but cutting down would genuinely help, and I can support that whenever you\u2019re ready. If the lump grows, the voice worsens, or you feel unwell before the appointment, contact us sooner. I\u2019ll chase the bloods and X-ray and make sure that referral goes today."' },
    ],
    learning:'A neck lump persisting beyond about 3\u20134 weeks is UNEXPLAINED \u2014 a reactive node from a cold settles within 2\u20133 weeks \u2014 and must be taken seriously, examined and routed, not assumed to be a post-viral "gland". The examinable danger here is the HIGH-RISK head & neck profile: a heavy smoker and drinker (synergistic risk factors for head & neck squamous cell cancer) with a persistent neck lump PLUS a few weeks of hoarseness/throat discomfort. NICE NG12 (Suspected cancer: recognition and referral, last updated April 2026): consider a suspected cancer pathway referral for laryngeal cancer in people aged 45 and over with persistent unexplained hoarseness OR an unexplained lump in the neck; consider one for oral cancer (persistent unexplained neck lump) and thyroid cancer (unexplained thyroid lump); consider one for lymphoma with unexplained lymphadenopathy, taking B symptoms and alcohol-induced node pain into account (an FBC is a baseline, not the NG12 route); and consider an urgent chest X-ray at 40 and over with persistent cervical lymphadenopathy (lung). Arrange a face-to-face examination of the neck, mouth, oropharynx and thyroid; screen the broader differential (reactive, haematological, thyroid, benign) rather than labelling it benign from the chair; and address smoking and alcohol with brief intervention, not a lecture. The hidden agenda is avoidance \u2014 a self-employed man who never attends, doesn\u2019t want to lose the business or hear bad news, minimising a lump and a hoarse voice he has half-noticed, with the spouse\u2019s push the reliable signal. Elicit the downplayed symptoms, refer urgently with honesty but no panic, support the risk factors, and safety-net and follow up.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer: recognition and referral (head and neck; haematological; lung) · NICE NG209 Tobacco (2021) · NICE PH24 Alcohol-use disorders: prevention (2010) · NICE CG115 Alcohol-use disorders: diagnosis, assessment and management of harmful drinking and alcohol dependence (2011) · neck lump assessment',
      points:[
        { h:'Persistent neck lump = unexplained', t:'A reactive node settles within ~2\u20133 weeks. A neck lump persisting beyond ~3\u20134 weeks, particularly if firm, painless and not resolving, is unexplained \u2014 examine, characterise and route to the correct pathway rather than labelling it a post-viral gland.' },
        { h:'NICE NG12 head and neck thresholds', t:'Consider a suspected cancer pathway referral for laryngeal cancer in people aged 45 and over with persistent unexplained hoarseness or an unexplained lump in the neck. Consider one for oral cancer with unexplained oral ulceration lasting more than 3 weeks or a persistent and unexplained lump in the neck (a lump on the lip or in the mouth, or a red or red-and-white patch, goes first for urgent dentist assessment), and for thyroid cancer with an unexplained thyroid lump. Examine mouth, oropharynx, neck and thyroid.' },
        { h:'High-risk profile', t:'Smoking and alcohol are major synergistic risk factors for head & neck squamous cell carcinoma. A persistent neck lump with hoarseness/throat symptoms in a smoker-drinker is a red-flag picture demanding urgent referral, not reassurance.' },
        { h:'Screen haematological causes', t:'A neck lump may be lymphadenopathy from lymphoma/leukaemia. Screen B symptoms (drenching night sweats, unexplained weight loss, fevers, pruritus), look for generalised lymphadenopathy/hepatosplenomegaly, and check FBC (and film) as a baseline — NICE NG12: consider a suspected cancer pathway referral for Hodgkin lymphoma in adults with unexplained lymphadenopathy, taking into account fever, night sweats, shortness of breath, pruritus, weight loss or alcohol-induced lymph node pain (non-Hodgkin: lymphadenopathy or splenomegaly, same symptoms except alcohol-induced pain).' },
        { h:'Chest X-ray at 40 and over', t:'NICE NG12: consider an urgent direct-access chest X-ray (within 2 weeks) to assess for lung cancer in people aged 40 and over with persistent cervical (or supraclavicular) lymphadenopathy — the criterion is age plus the persistent node, not smoking; his smoking adds to the concern. Arrange it alongside the head and neck referral, as cervical nodes may reflect thoracic disease.' },
        { h:'Address modifiable risk', t:'Offer smoking-cessation and alcohol brief intervention/support \u2014 framed supportively, not as a lecture \u2014 as part of holistic care (very brief advice and referral to stop-smoking support, NICE NG209; an alcohol brief intervention using AUDIT, NICE PH24; if he may be alcohol-dependent, no abrupt stopping — planned withdrawal per NICE CG115), while not letting risk-factor counselling delay urgent referral.' },
        { h:'Never do', t:'Never accept "just a gland from a cold" for a lump persisting >3\u20134 weeks; never miss the smoker+drinker+hoarseness red-flag profile; never skip examining the mouth/throat/thyroid; never omit FBC/CXR where indicated; never collude with avoidance.' },
        { h:'Safety-net & follow-up', t:'Face-to-face examination + NICE NG12 head and neck suspected cancer pathway referral (± thyroid/oral/lymphoma); FBC as a baseline; CXR at 40+ with persistent cervical lymphadenopathy; cessation/alcohol support; advise sooner review if the lump grows/voice worsens/unwell; confirm attendance and review the outcome.' }
      ]
    }
  };

  /* ============ 163. FACE-TO-FACE — Unexplained petechiae & bruising in a toddler (NG12 very urgent FBC, leukaemia) ============ */
  const c163 = {
    id:'child-petechiae-leukaemia', title:'"He\u2019s covered in little spots and bruises \u2014 and he\u2019s just not himself"', type:'video', duration:12,
    meta:{ age:3, sex:'M', setting:'Video consultation \u2014 mother brings her 3-year-old with a spotty rash and bruising.', system:'Paediatrics / Suspected leukaemia & the unwell-child screen', checked:'October 2026' },
    brief:'Leo Whitfield, 3, brought by his mother Hayley. Over ~2 weeks he has developed scattered tiny red-purple spots (petechiae) on his legs and trunk and several unexplained bruises, and he has been pale, tired, off his food, irritable and "just not himself", with a couple of low-grade feverish episodes. The mother is anxious and exhausted. The examinable priorities are: (1) SAFETY FIRST \u2014 a non-blanching rash in a child means actively excluding MENINGOCOCCAL SEPSIS (if febrile/unwell \u2192 999/emergency); and (2) the NICE NG12 children & young people pathway \u2014 unexplained petechiae and/or hepatosplenomegaly require IMMEDIATE specialist referral for leukaemia, and a constellation of pallor, fatigue, unexplained fever/infection, bruising, generalised lymphadenopathy or bone pain warrants a VERY URGENT FBC (within 48 hours). This is a structured unwell-child assessment with safeguarding-mindful, parent-centred communication \u2014 not reassurance as a viral rash.',
    script:{
      opening:"(Worried, tired; Leo is on her lap, pale and grizzly.) \"Doctor, I'm probably overreacting, but Leo's come up in these little red spots all over his legs, and he's got bruises I can't explain — he hasn't banged himself. He's gone really pale, he's shattered all the time, off his food, and he's just not himself. He's had a couple of temperatures too. My mum says it's probably just a virus going round nursery — is it? I couldn't settle until I'd spoken to someone.\"",
      facts:[
        { topic:"The spots", text:"Tiny red-purple dots on both legs and his tummy, more over the last few days. If asked to do the glass test: \"No… they're still there. They don't fade.\" Will show them on camera. Not spreading fast today." },
        { topic:"Bruises", text:"Bruises on his shins, back and one on his tummy, appearing over two weeks. \"He hasn't banged himself — I'd know, he's not been running about.\" No nosebleeds, bleeding gums or blood in his wee or poo." },
        { topic:"How he is right now", text:"\"He's awake — he's here on my lap, just clingy and grizzly.\" Pale. Doesn't feel hot right now; last temperature 38.1°C two nights ago, settled with paracetamol. If asked: no neck stiffness, not bothered by light, no fits, not floppy, breathing normally, hands and feet warm. Responds to her and watches the screen." },
        { topic:"Over the last two weeks", text:"\"Gradually. Over about two weeks.\" Very tired, naps a lot more. \"Off his food. He's drinking a bit\" — wet nappies/wees about four today. Two low temperatures. Lost a little weight — trousers loose." },
        { topic:"Pain and lumps", text:"\"He hasn't said anything about pain, he's just miserable.\" If asked: doesn't want to walk much and wants to be carried, cried when she lifted him under the arms. She thinks she felt lumps in his neck. Tummy looks a bit bigger." },
        { topic:"Background", text:"Born at term, healthy, all immunisations up to date including MenB. No medicines (paracetamol only), no allergies. No recent new medicines. Goes to nursery three days a week; a few colds going round." },
        { topic:"Family and home", text:"Lives with Hayley (28, works in a café) and her partner, Leo's dad, Jamie. No family history of bleeding problems or blood disorders. No social worker involvement. Mum can drive and has a car." },
        { topic:"How to play it", text:"Anxious and apologetic. Volunteer the spots, bruises, pallor and tiredness; give the other details when asked. Keep saying \"Everyone keeps saying virus. But he's not right.\" If the doctor dismisses it, push back once: \"But he's never been like this.\" If told he needs to be seen at hospital today, be shocked (\"Today? Right now?\") then practical: \"Yes, I can get him there now.\"" }
      ],
      ice:{
        ideas:"\"My mum says it's a virus from nursery — maybe it is.\"",
        concerns:"HIDDEN AGENDA — she has been lying awake and has googled bruising and spots; she is frightened it is something serious like leukaemia but scared of being told she's overreacting. \"Everyone keeps saying virus. But he's not right.\"",
        expectations:"\"To know whether it's serious — and for someone to take it seriously.\""
      },
      cues:[
        "\"I'm probably overreacting.\" — wants her instinct validated.",
        "\"He's just not himself.\" — a parent's strongest warning sign.",
        "\"You mean leukaemia?\" — if the doctor mentions blood tests or the blood count."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'SAFETY FIRST: recognises a non-blanching rash in a child and actively excludes MENINGOCOCCAL SEPSIS \u2014 assesses fever, toxic appearance, irritability/drowsiness, neck stiffness, perfusion/obs, glass test (the parent can do this on camera; obs and examination need a same-day face-to-face assessment) — and would arrange EMERGENCY (999) admission if febrile/unwell with a non-blanching rash, ahead of any cancer work-up' },
      { dom:'cm', text:'Knows the NICE NG12 trigger that unexplained PETECHIAE (or hepatosplenomegaly) requires IMMEDIATE specialist assessment for leukaemia \u2014 not watchful waiting or "review in a few days"' },
      { dom:'dg', text:'Identifies the constellation (pallor, persistent fatigue, unexplained fever, unexplained bruising/bleeding, generalised lymphadenopathy, bone pain) warranting a VERY URGENT FBC (within 48 hours) to assess for leukaemia' },
      { dom:'dg', text:'EXAMINES fully and systematically: pallor, rash distribution/blanching, bruising pattern, lymphadenopathy, HEPATOSPLENOMEGALY, bone/joint tenderness, infection signs, and overall illness (NICE NG143 traffic-light system) — face to face, because the rash, nodes, liver and spleen cannot be examined on video' },
      { dom:'dg', text:'Considers the differential (leukaemia, ITP, HSP, meningococcal sepsis) and keeps SAFEGUARDING/non-accidental injury in mind for unexplained bruising \u2014 without prematurely assuming either a benign or a sinister non-cancer cause' },
      { dom:'ro',   text:'VALIDATES the mother\u2019s instinct (a child who is "not himself" is a powerful safety signal), explicitly does not dismiss her as overreacting, and counters the "just a virus" message compassionately' },
      { dom:'ro',   text:'Communicates a serious, urgent plan to a frightened parent clearly and kindly \u2014 honest about the need for urgent tests/assessment without catastrophising or falsely reassuring, and checks her understanding and support' },
      { dom:'cm',    text:'Safety-nets robustly: explicit meningococcal/sepsis red flags and 999 advice, the immediate referral/very-urgent FBC arranged with clear timing, who to contact and how, ensures transport/attendance, documents, and follows up \u2014 sepsis excluded first, then immediate leukaemia pathway, never reassurance as a viral rash' },
    ],
    worked:[
      { lbl:'Validate her first', txt:'"You are absolutely not overreacting \u2014 you know Leo, and you\u2019ve noticed he\u2019s not himself, and that instinct is exactly what I want to hear about. You did the right thing bringing him in straight away. I can see him on the screen, but I can’t examine him properly on video, so let me check a couple of things with you now and then get him seen in person today."' },
      { lbl:'Check safety out loud', txt:'"First I need to check a few urgent things. These little spots — can you press the side of a clear glass firmly against them and hold it up to the camera: do they fade? … And his temperature, how alert he is, his breathing and colour. I\u2019m making sure there\u2019s nothing that needs a hospital this very minute."' },
      { lbl:'Examine thoroughly', txt:'"He needs someone to feel his tummy for his liver and spleen, check the glands in his neck, armpits and groin, look at his colour and the bruises, and see how he is in himself — that has to be done in person, today, and I’m arranging it now. Bear with me — I’m being careful on purpose."' },
      { lbl:'Be honest about urgency', txt:'"I want to be straight with you, calmly. These spots \u2014 little ones that don\u2019t fade \u2014 together with him being pale, tired and off-colour, are things we never sit on in a child. They can have several causes, including something with the blood cells that we must rule out urgently. I\u2019m not saying that\u2019s what it is \u2014 but we get it checked today, not in a few days."' },
      { lbl:'Name the plan', txt:'"So here\u2019s what I\u2019m doing now: because of these spots I\u2019m arranging for Leo to be seen by the children\u2019s specialists urgently, with an urgent blood count, today. I\u2019ll organise that straight away and tell you exactly where to go and what to expect."' },
      { lbl:'Sepsis safety-net', txt:'"While we sort this, if Leo becomes drowsy or floppy, the rash spreads quickly, he gets a high fever, cold hands and feet, or you\u2019re frightened by any change \u2014 call 999 and say there\u2019s a child with a rash that doesn\u2019t fade. Trust yourself. You\u2019ve done everything right, and I\u2019m going to stay with you through this."' },
    ],
    learning:'A non-blanching (petechial/purpuric) rash in a child is a SAFETY-FIRST presentation: actively exclude MENINGOCOCCAL SEPSIS/meningitis (fever, toxic/ill appearance, irritability or drowsiness, neck stiffness, poor perfusion, rapidly spreading or purpuric rash) \u2014 a febrile, unwell child with a non-blanching rash needs EMERGENCY (999) admission, which takes precedence over any cancer work-up. Once acute sepsis is excluded, the NICE NG12 (Suspected cancer: recognition and referral, last updated April 2026) children & young people pathway governs: unexplained PETECHIAE or HEPATOSPLENOMEGALY require IMMEDIATE specialist assessment for leukaemia, and a constellation of pallor, persistent fatigue, unexplained fever, unexplained persistent infection, generalised lymphadenopathy, persistent/unexplained bone pain, unexplained bruising or bleeding warrants a VERY URGENT FBC (within 48 hours) \u2014 in practice, petechiae plus systemic features usually means same-day assessment. Examine fully (pallor, rash blanching/distribution, bruising pattern, lymphadenopathy, hepatosplenomegaly, bone tenderness, NICE NG143 traffic-light system — in person, as video cannot do this), hold the differential (leukaemia, ITP, HSP, meningococcal sepsis) and keep safeguarding/non-accidental injury in mind for unexplained bruising without assuming. The communication core is a frightened, exhausted mother told by family it is "just a virus" yet who knows her child is "not himself": validate that instinct as a powerful safety signal, do not dismiss her, and bring her through a serious, urgent plan honestly and kindly. Safety-net robustly (meningococcal red flags + 999, clear referral timing and contacts) and follow up \u2014 sepsis excluded first, then the immediate leukaemia pathway, never reassurance as a viral rash.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer: recognition and referral (2015, last updated April 2026) Suspected cancer — children and young people (leukaemia) · NICE NG143 Fever in under 5s (2019) · NICE NG254 Suspected sepsis in under 16s (2025) · NICE NG240 Bacterial meningitis and meningococcal disease (2024) · NICE CG89 Child maltreatment (2009)',
      points:[
        { h:'Safety first \u2014 exclude meningococcal sepsis', t:'A non-blanching rash in a child mandates active exclusion of meningococcal disease. Assess fever, toxic appearance, irritability/drowsiness, neck stiffness, perfusion (cap refill, cold peripheries), tachycardia, and a rapidly spreading/purpuric rash; do the glass test and full obs. Febrile + unwell + non-blanching rash → emergency 999 admission, ahead of any cancer work-up (a non-blanching rash is a red feature in NICE NG143; possible meningococcal disease or sepsis per NICE NG240 and NICE NG254; parenteral antibiotics before transfer only as NICE NG240 directs, dose per BNFC).' },
        { h:'NICE NG12 immediate leukaemia referral', t:'Refer children/young people for IMMEDIATE specialist assessment for leukaemia if they have unexplained petechiae or hepatosplenomegaly \u2014 not watchful waiting.' },
        { h:'NICE NG12 very-urgent FBC', t:'Offer a very urgent FBC (within 48 hours) to assess for leukaemia in children/young people with any of: pallor, persistent fatigue, unexplained fever, unexplained persistent infection, generalised lymphadenopathy, persistent/unexplained bone pain, unexplained bruising or unexplained bleeding.' },
        { h:'Examine systematically', t:'Assess pallor, rash distribution and blanching, bruising pattern, lymphadenopathy (multiple sites), hepatosplenomegaly, bone/joint tenderness, infection signs and overall illness severity (NICE NG143 traffic-light system). Document findings carefully. This needs a same-day face-to-face assessment: the rash, nodes, liver and spleen cannot be examined on video.' },
        { h:'Differential & safeguarding', t:'Consider leukaemia, ITP (isolated thrombocytopenia, well child), HSP / IgA vasculitis (palpable purpura on extensors/buttocks, well child, often post-infective), and meningococcal sepsis. Keep non-accidental injury in mind for unexplained bruising (NICE CG89: consider maltreatment when bruising is unexplained or doesn’t fit the history or the child’s mobility) — assess pattern against history without prematurely assuming abuse or a benign cause.' },
        { h:'Validate parental instinct', t:'A parent reporting their child is "not themselves" is a recognised, powerful safety signal (NICE NG143 Fever in under 5s). Validate it explicitly, counter dismissive "just a virus" messaging, and never make a worried parent feel they are overreacting.' },
        { h:'Never do', t:'Never reassure a non-blanching rash as viral without excluding sepsis; never delay/watchful-wait on unexplained petechiae or hepatosplenomegaly in a child; never miss hepatosplenomegaly/lymphadenopathy on exam; never dismiss the mother\u2019s instinct; never overlook safeguarding for unexplained bruising.' },
        { h:'Safety-net & follow-up', t:'Exclude sepsis first (999 if febrile/toxic with non-blanching rash); then immediate paediatric referral for leukaemia + very-urgent FBC with clear timing; give explicit meningococcal red flags and 999 advice; ensure transport/attendance; document and follow up the outcome.' }
      ]
    }
  };

  /* ============ 164. VIDEO — Enlarging deep lump on the thigh (NG12 soft-tissue sarcoma, urgent USS) ============ */
  const c164 = {
    id:'soft-tissue-sarcoma-lump', title:'"It\u2019s just a fatty lump on my leg \u2014 it\u2019s only got a bit bigger"', type:'video', duration:12,
    meta:{ age:42, sex:'M', setting:'Video consultation \u2014 a lump on the thigh that is growing.', system:'MSK / Suspected soft-tissue sarcoma', checked:'October 2026' },
    brief:'Mr Connor Bates, 42, warehouse supervisor. A lump in the front of his right thigh for ~4 months; he assumed it was "just a fatty lump" but it has clearly GROWN, and feels firm and deep (he can\u2019t easily move it under the skin). It is painless. He wants reassurance it is a harmless lipoma and is reluctant to make a fuss. The task is to recognise the features that distinguish a benign lipoma from a possible SOFT-TISSUE SARCOMA — size over 5 cm, deep to the deep fascia, firm/fixed (British Sarcoma Group 2024 features), and crucially INCREASING IN SIZE (the NICE NG12 trigger) — to examine it face to face (not possible on video), and to arrange an urgent direct-access ULTRASOUND (within 2 weeks) per NICE NG12, rather than reassuring it as a lipoma from the chair or telling him to "keep an eye on it".',
    script:{
      opening:"(Easy-going, a bit sheepish.) \"Cheers for seeing me. I've got a lump on me thigh — it's just a fatty lump, isn't it? My mate's got loads of them. It doesn't hurt. It has got a bit bigger over the last few months, I'll admit, but it's probably nothing. Can you just tell me it's harmless so I can stop my missus going on at me about it? I don't want to waste anyone's time.\"",
      facts:[
        { topic:"The lump", text:"Front of the right thigh, about four months. \"It's definitely grown\" — started \"like a golf ball\", now \"about the size of a tangerine — maybe a bit more\" (about 6 cm). Can hold his hand over it on camera." },
        { topic:"What it feels like", text:"If asked: \"Firm. And it doesn't really move. It feels quite deep\" — in the muscle rather than just under the skin. Not soft or squashy like his mate's." },
        { topic:"Other symptoms", text:"If asked: painless. No injury — \"No knock I can think of.\" Skin over it normal colour, not hot. No numbness or weakness in the leg. Feels well: no weight loss, night sweats, fevers or cough. No other lumps." },
        { topic:"History and medicines", text:"Nothing significant. No regular medicines, no allergies. Never had lumps removed." },
        { topic:"Social", text:"Warehouse supervisor, lives with his partner, Gemma, and her two kids. Smokes 5 a day, drinks at weekends. Plays five-a-side." },
        { topic:"Family", text:"If asked: nothing relevant. No family cancers he knows of." },
        { topic:"How to play it", text:"Relaxed and minimising. Admit growth straight away if asked. If asked what Gemma thinks: \"She reckons it shouldn't be growing.\" (Pause.) \"To be fair, it's been bugging me too. I just didn't want a fuss.\" If told it's a lipoma and to keep an eye on it, accept happily (the trap). If told it needs a scan within two weeks, ask \"So what could it be?\" and \"Can't you just cut it out here?\" — then agree: \"I can swap a shift.\"" }
      ],
      ice:{
        ideas:"\"It's a fatty lump, like my mate's. It doesn't hurt, so it can't be bad.\"",
        concerns:"HIDDEN AGENDA — it has been bugging him too: he knows it has grown and feels different from his friend's lumps, but he doesn't want a fuss or bad news.",
        expectations:"\"Tell me it's a fatty lump and that's that — so the missus stops going on.\""
      },
      cues:[
        "\"It has got a bit bigger, I'll admit.\" — growth, offered in passing.",
        "\"My missus keeps going on at me.\" — someone else is worried.",
        "\"It's been bugging me too.\" — only if his own worry is explored."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Characterises the lump on history and a face-to-face examination (it cannot be judged on video): SIZE (>5 cm), DEPTH (deep to fascia / fixed vs superficial mobile), CONSISTENCY (firm/hard), and crucially whether it is INCREASING IN SIZE \u2014 and recognises painlessness does not reassure' },
      { dom:'dg', text:'Distinguishes a benign lipoma (soft, mobile, superficial, small, stable) from SARCOMA-suspicious features (large, deep, firm, enlarging) rather than diagnosing a lipoma from the chair' },
      { dom:'cm', text:'Applies NICE NG12: an unexplained lump INCREASING IN SIZE in an adult warrants an URGENT direct-access ULTRASOUND (within 2 weeks) to assess for soft-tissue sarcoma (very urgent / 48 hours in children/young people)' },
      { dom:'cm', text:'Plans onward management: consider a suspected cancer pathway referral to a sarcoma/specialist service if the ultrasound suggests sarcoma, or is uncertain with persisting clinical concern (NICE NG12) \u2014 and does NOT default to "watch and wait" for an enlarging lump' },
      { dom:'cm', text:'Avoids both over-reassurance ("just a lipoma, keep an eye on it") and unnecessary alarm \u2014 explaining that imaging is the safe next step and most lumps prove benign' },
      { dom:'ro',   text:'Reads the "just a fatty lump / don\u2019t want a fuss" as minimisation, treats the partner\u2019s concern as the reliable signal, surfaces any quiet worry, and does NOT collude with the wish to be reassured' },
      { dom:'ro',   text:'Balances honesty (a lump that\u2019s growing needs imaging to be sure) with calm reassurance so a reluctant attender engages with the scan and any referral' },
      { dom:'cm',    text:'Safety-nets and follows up: arranges the urgent ultrasound with clear timing, explains what happens next and when results return, advises what change warrants sooner review, confirms he will attend, and reviews the outcome \u2014 image the enlarging lump, never reassure it as a lipoma from the chair' },
    ],
    worked:[
      { lbl:'Take the growth seriously', txt:'"I\u2019m glad you came in \u2014 and the bit that matters most is what you just told me: it\u2019s got bigger. A lump that\u2019s growing is one we always check properly rather than guess at, however likely it is to be harmless."' },
      { lbl:'Examine and explain', txt:'"I need to feel it in person — I can’t judge it on video, so I’d like you to pop in to the surgery today so I can measure it. I’ll be checking its size, whether it sits just under the skin and moves freely \u2014 which fatty lumps usually do \u2014 or whether it\u2019s deeper and firmer and fixed. From what you describe it sounds firm and quite deep, and you’ve noticed it growing, so I don\u2019t want to just label it a fatty lump and send you off."' },
      { lbl:'Why not just reassure', txt:'"Here\u2019s my honesty: most of these ARE harmless fatty lumps. But a few firmer, deeper, growing lumps are something else \u2014 and they can look just like a fatty lump from the outside. The only way to tell them apart safely is a scan, not my fingers and a hopeful guess."' },
      { lbl:'Name the pathway', txt:'"So because it\u2019s enlarging, I\u2019m arranging an urgent ultrasound of the lump \u2014 within two weeks. If the scan\u2019s reassuring, great, we can both relax. If there\u2019s any question, it goes straight to the specialists who deal with this. That\u2019s the safe route."' },
      { lbl:'Don\u2019t collude', txt:'"I can\u2019t in good conscience tell your missus it\u2019s definitely harmless today \u2014 and honestly, she\u2019s right to have nudged you. What I CAN tell her is we\u2019re getting it scanned quickly so you\u2019ll have a proper answer rather than a guess."' },
      { lbl:'Safety-net + follow-up', txt:'"If it grows faster, becomes painful, or you\u2019re worried before the scan, contact us sooner. I\u2019ll organise the ultrasound now and make sure we go through the result together. You\u2019re not wasting anyone\u2019s time \u2014 this is exactly what we\u2019re here for."' },
    ],
    learning:'Most soft-tissue lumps are benign lipomas (soft, freely mobile, superficial, small and stable), but the features that distinguish a possible SOFT-TISSUE SARCOMA are large SIZE (>5 cm), DEEP location (fixed, deep to fascia, not freely mobile), FIRM/hard consistency and \u2014 most importantly \u2014 INCREASING IN SIZE; painlessness does not reassure. NICE NG12 (Suspected cancer: recognition and referral, last updated April 2026) sets an explicit threshold: consider an URGENT direct-access ultrasound (within 2 weeks) to assess for soft-tissue sarcoma in ADULTS with an unexplained lump that is increasing in size (VERY URGENT / within 48 hours in children and young people), with a suspected cancer pathway referral to a sarcoma/specialist service if the scan suggests sarcoma, or is uncertain and concern persists. The size over 5 cm and deep-to-fascia features come from the British Sarcoma Group (2024), not NG12; do not excise or biopsy an enlarging deep lump in primary care. The classic error is confidently diagnosing a lipoma from the chair and advising "watch and wait" \u2014 sarcomas frequently masquerade as lipomas and delay costs outcomes, so a deep, firm, large or enlarging lump is IMAGED first, even when it looks benign. The examinable hidden agenda is minimisation \u2014 a practical man avoiding doctors, not wanting a fuss or bad news, seeking permission to ignore it, with a partner\u2019s concern as the reliable signal and a quiet awareness that it has grown. Characterise the lump, recognise the increasing-size trigger, arrange the urgent ultrasound (avoiding both over-reassurance and alarm), refuse to collude with the wish to be reassured, and safety-net and follow up the result.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer: recognition and referral (2015, last updated April 2026) Suspected cancer — soft-tissue and bone sarcoma · British Sarcoma Group UK soft tissue sarcoma guideline (2024) · GMC Good medical practice (2024) · lump assessment',
      points:[
        { h:'Lipoma vs sarcoma features', t:'Benign lipoma: soft, mobile, superficial, small, stable. Sarcoma-suspicious (British Sarcoma Group 2024): size >5 cm, deep to fascia (fixed/not freely mobile), firm/hard, pain and recurrence after excision; and — key, the NICE NG12 trigger — increasing in size. These need a face-to-face examination and measurement, not a video look. Pain is variable and painlessness does not reassure.' },
        { h:'NICE NG12 soft-tissue sarcoma threshold', t:'Consider an urgent direct-access ultrasound (within 2 weeks) for soft-tissue sarcoma in adults with an unexplained lump that is increasing in size. In children/young people, consider a very urgent ultrasound (within 48 hours) for the same finding. After the scan (adults): consider a suspected cancer pathway referral if it suggests soft-tissue sarcoma, or if findings are uncertain and clinical concern persists (NICE NG12).' },
        { h:'Image, don\u2019t label from the chair', t:'Do not confidently diagnose a lipoma and "watch and wait" for a deep, firm, large or enlarging lump \u2014 sarcomas frequently mimic lipomas. Imaging first is the safe step; suspicious imaging, or uncertain imaging with persisting concern → sarcoma-service referral on the suspected cancer pathway. Do not excise or biopsy an enlarging deep lump in primary care: an unplanned excision can compromise later surgery.' },
        { h:'Bone sarcoma analogue', t:'For suspected bone sarcoma, NICE NG12 advises considering a very urgent direct-access X-ray (within 48 hours) in CHILDREN AND YOUNG PEOPLE with unexplained bone swelling or pain; the 48-hour X-ray is not an adult recommendation. In adults, NG12 advises considering a suspected cancer pathway referral if an X-ray suggests the possibility of bone sarcoma. (Different from the soft-tissue ultrasound pathway.)' },
        { h:'Avoid alarm and over-reassurance', t:'Frame imaging as the safe, precautionary next step \u2014 most lumps prove benign \u2014 while being honest that a growing firm/deep lump needs a scan to be sure. Balance reassurance with clarity.' },
        { h:'Read minimisation', t:'A reluctant attender minimising an enlarging lump ("just a fatty lump / don\u2019t want a fuss"), often prompted by a partner, may be quietly worried. Surface the concern, treat the partner\u2019s prompt as a signal, and do not collude with the wish to be reassured.' },
        { h:'Never do', t:'Never diagnose a lipoma without imaging for a deep/firm/large/enlarging lump; never "watch and wait" an increasing-size lump; never treat painlessness as reassurance; never collude with minimisation; never delay the urgent ultrasound.' },
        { h:'Safety-net & follow-up', t:'Arrange the urgent ultrasound (within 2 weeks) with clear timing; consider a suspected cancer pathway referral to a sarcoma service if imaging is suspicious, or uncertain with persisting concern; advise what change warrants sooner review; confirm attendance; review and communicate the result.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c161, c162, c163, c164);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'breast-lump-2ww': {
      ceg: ['Gender, reproductive & sexual health', 'Long-term conditions & cancer'],
      stem: {
        name: 'Priya Kaushal', age: '34 years \u00b7 female',
        pmh: ['Self-found firm lump, upper-outer right breast, ~3 weeks; ? slightly bigger', 'Painless; no skin/nipple change she has noticed', 'Mother of two; not currently breastfeeding'],
        meds: ['Combined oral contraceptive'],
        allergy: 'NKDA',
        recent: '"Probably just a cyst \u2014 I\u2019m too young, it doesn\u2019t hurt"; wants reassurance, fears examination and the word cancer.',
        reason: 'Video consultation \u2014 a breast lump she found herself.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Take it seriously', d:'Any new unexplained breast lump \u2014 examine and route, don\u2019t reassure from the story. Characterise + family history.' },
        { t:'2\u20134',  h:'Correct the myths', d:'"Too young" and "painless = safe" are both wrong; gently corrected without frightening.' },
        { t:'4\u20137',  h:'Examine w/ chaperone', d:'Both breasts, axillae, nodes; chaperone offered/documented; consent, dignity.' },
        { t:'7\u20139',  h:'Name the NICE NG12 pathway', d:'30+ with an unexplained lump → suspected cancer pathway to the breast clinic for triple assessment; benign-feeling exam does not override.' },
        { t:'9\u201312', h:'Reassure + surface fear', d:'Most referred lumps are benign; surface the cancer/children fear; safety-net + follow up.' }
      ],
      wordPics: {
        fail: 'Reassures it\u2019s "probably a cyst" without examining, or examines and calls it benign and discharges; misses the NICE NG12 30+ suspected cancer pathway threshold; colludes with the wish to be told it\u2019s nothing.',
        pass: 'Examines with a chaperone and refers on the suspected cancer pathway to the breast clinic for triple assessment (examining face to face), correcting the misconceptions.',
        exc:  'Takes any unexplained lump seriously, corrects the too-young/painless myths kindly, examines with dignity and a chaperone, refers on the NICE NG12 30+ suspected cancer pathway for triple assessment without letting a benign-feeling exam override it, reassures that most referred lumps prove benign, and surfaces and holds the fear \u2014 examination + correct referral, never collusive reassurance.'
      },
      avoid: [
        { dont:'"You\u2019re young and it\u2019s painless \u2014 it\u2019s almost certainly just a cyst, try not to worry."', instead:'"Being 34 and pain-free doesn\u2019t let us off checking \u2014 most breast cancers are painless. Let me examine you and arrange the right scan."', why:'Age and painlessness do not exclude cancer; reassuring from the story risks missing it and breaches the NICE NG12 threshold.' },
        { dont:'"It feels benign to me, so I wouldn\u2019t bother with hospital \u2014 just keep an eye on it."', instead:'"Even though it feels benign, because you\u2019re over 30 with a new lump the safe route is a two-week breast-clinic referral for triple assessment."', why:'A benign-feeling examination does not override the NICE NG12 30+ referral; "keep an eye on it" loses time.' },
        { dont:'"Try not to think about cancer \u2014 I\u2019m sure it\u2019s fine."', instead:'"Can I ask what\u2019s worrying you underneath? \u2026 Your children. That fear makes sense, and it\u2019s exactly why we get a clear answer rather than guess."', why:'Colluding with the wish to be reassured dismisses real fear and abandons the duty to examine and refer.' }
      ]
    },

    'neck-lump-2ww': {
      ceg: ['Long-term conditions & cancer', 'New & undifferentiated presentations'],
      stem: {
        name: 'Derek Mahoney', age: '49 years \u00b7 male',
        pmh: ['Firm, painless right neck lump ~5 weeks \u2014 not settling, ? bigger', '\u26a0 25 pack-year smoker; heavy alcohol; few weeks of hoarseness/throat discomfort', 'Rarely attends; self-employed publican'],
        meds: ['None regular'],
        allergy: 'NKDA',
        recent: '"Just a gland up from a cold \u2014 it\u2019ll go down"; "the wife made me ring"; wants reassurance, no "poking about".',
        reason: 'Video consultation \u2014 a lump in the side of the neck.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Refuse "just a gland"', d:'A cold-gland settles in 2\u20133 weeks; 5 weeks + not shifting = unexplained. Take it seriously.' },
        { t:'2\u20134',  h:'Elicit the red flags', d:'Hoarseness, throat discomfort, smoking + alcohol \u2014 the high-risk head & neck profile; screen lymphoma B symptoms.' },
        { t:'4\u20137',  h:'Examine', d:'Neck lump, mouth/oropharynx, thyroid, regional + other nodes, hepatosplenomegaly — examined face to face today, not on video.' },
        { t:'7\u20139',  h:'NICE NG12 referral + tests', d:'Head and neck suspected cancer pathway (45+ neck lump/hoarseness); FBC as a baseline; CXR at 40+ with a persistent neck node.' },
        { t:'9\u201312', h:'Risk + safety-net', d:'Cessation/alcohol brief intervention (no lecture); surface avoidance/fear; sooner review if worse; follow up.' }
      ],
      wordPics: {
        fail: 'Accepts "just a gland from a cold" and reassures over the phone; never examines mouth/throat/thyroid; misses the smoker+drinker+hoarseness profile, the FBC and CXR, and the NICE NG12 head and neck suspected cancer pathway.',
        pass: 'Recognises a persistent neck lump as unexplained, examines, and refers on the head and neck suspected cancer pathway with FBC/CXR.',
        exc:  'Refuses the "gland" label for a 5-week lump, elicits the downplayed hoarseness/smoking/alcohol and the high-risk profile, screens lymphoma B symptoms, examines neck/mouth/thyroid/nodes, refers on the NICE NG12 head and neck suspected cancer pathway with FBC and a CXR, addresses smoking/alcohol supportively, and reads the avoidance \u2014 honest urgency without panic.'
      },
      avoid: [
        { dont:'"It\u2019s just a gland from your cold \u2014 give it time, it\u2019ll go down."', instead:'"A gland from a cold settles in a couple of weeks; yours has been there over a month and isn\u2019t shifting \u2014 that needs a proper look, not more waiting."', why:'A persistent (>3\u20134 week) neck lump is unexplained and must be examined and routed, not assumed post-viral.' },
        { dont:'"As long as it doesn\u2019t hurt, I wouldn\u2019t worry."', instead:'"Has your voice been hoarse? How\u2019s the smoking and the drink? \u2026 Those, with a lasting lump, change things and need urgent specialist checking."', why:'Missing the hoarseness + smoking + alcohol red-flag profile overlooks the very features that flag head & neck cancer.' },
        { dont:'"Let\u2019s see how it is in a month."', instead:'"Given the lump, the hoarse voice and your background, I’m referring you on the urgent suspected cancer pathway now and arranging a blood count and chest X-ray \u2014 not waiting."', why:'Watchful waiting delays urgent investigation of a possible head & neck (or haematological/lung) cancer.' }
      ]
    },

    'child-petechiae-leukaemia': {
      ceg: ['Children & young people', 'Urgent & unscheduled care'],
      stem: {
        name: 'Leo Whitfield (mother Hayley present)', age: '3 years \u00b7 male',
        pmh: ['\u26a0 Unexplained petechiae (legs/trunk) + unexplained bruises ~2 weeks', '\u26a0 Pale, persistently tired, off food, irritable; a couple of low-grade fevers', 'No trauma to explain bruising'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Mother anxious/exhausted; told by family it\u2019s "just a virus"; "am I overreacting? He\u2019s just not himself."',
        reason: 'Video consultation \u2014 spotty rash + bruising in a 3-year-old.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Validate + safety first', d:'Validate her instinct; glass test + obs \u2014 exclude meningococcal SEPSIS (999 if febrile/toxic with non-blanching rash).' },
        { t:'2\u20135',  h:'Examine fully', d:'Pallor, rash blanching/distribution, bruising pattern, lymphadenopathy, HEPATOSPLENOMEGALY, bone tenderness, traffic-light.' },
        { t:'5\u20137',  h:'Recognise NICE NG12 triggers', d:'Unexplained petechiae \u2192 IMMEDIATE leukaemia referral; pallor/fatigue/fever/bruising \u2192 very-urgent FBC (48h).' },
        { t:'7\u20139',  h:'Honest, urgent plan', d:'Calmly name the urgent same-day paediatric assessment + urgent blood count; safeguarding kept in mind, not assumed.' },
        { t:'9\u201312', h:'Sepsis safety-net', d:'Explicit meningococcal red flags + 999; clear contacts/transport; bring the frightened mother along; document + follow up.' }
      ],
      wordPics: {
        fail: 'Reassures it\u2019s "just a virus"; never does the glass test or excludes sepsis; misses that unexplained petechiae mandate immediate leukaemia referral; no FBC; dismisses the mother as overreacting.',
        pass: 'Excludes sepsis, examines fully, recognises the petechiae/leukaemia trigger and arranges urgent referral + FBC, validating the mother.',
        exc:  'Validates the mother\u2019s instinct, excludes meningococcal sepsis FIRST (999 if febrile/toxic), examines for organomegaly/nodes, recognises unexplained petechiae as the NICE NG12 immediate-leukaemia-referral trigger with a very-urgent FBC, keeps safeguarding in mind without assuming, and brings a frightened parent through a serious urgent plan with honesty and warmth and a robust sepsis safety-net.'
      },
      avoid: [
        { dont:'"It\u2019s probably just a virus going round nursery \u2014 try not to worry."', instead:'"Spots that don\u2019t fade, with him pale and off-colour, are things we never sit on in a child \u2014 let me check him properly right now."', why:'Reassuring a non-blanching rash as viral risks missing meningococcal sepsis AND leukaemia.' },
        { dont:'"Let\u2019s see how he is in a few days and come back if he\u2019s worse."', instead:'"Because of these unexplained spots I\u2019m arranging for Leo to be seen by the children\u2019s specialists urgently today, with an urgent blood count."', why:'Unexplained petechiae mandate immediate referral for leukaemia \u2014 watchful waiting is unsafe.' },
        { dont:'"You\u2019re probably just being an anxious mum."', instead:'"You know Leo, and you\u2019ve noticed he\u2019s not himself \u2014 that instinct is exactly what I want to hear, and you did the right thing bringing him."', why:'Dismissing a parent who reports their child is "not themselves" ignores a powerful safety signal.' }
      ]
    },

    'soft-tissue-sarcoma-lump': {
      ceg: ['Long-term conditions & cancer', 'New & undifferentiated presentations'],
      stem: {
        name: 'Connor Bates', age: '42 years \u00b7 male',
        pmh: ['Lump in front of right thigh ~4 months \u2014 clearly GROWN', 'Feels firm and deep (not freely mobile); painless', 'Rarely attends; partner pushed him to come'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"It\u2019s just a fatty lump \u2014 tell the missus it\u2019s harmless"; reluctant, "don\u2019t want to waste your time".',
        reason: 'Video consultation \u2014 a thigh lump that is growing.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Take growth seriously', d:'The key fact: it\u2019s got bigger. A growing lump is imaged, not guessed at, however likely benign.' },
        { t:'2\u20135',  h:'Examine + characterise', d:'Size (>5 cm?), depth (deep/fixed vs superficial mobile), firmness, growth — examined and measured face to face, not on video. Firm + deep + enlarging = red flags.' },
        { t:'5\u20137',  h:'Why not just reassure', d:'Sarcomas mimic lipomas; only a scan tells them apart safely. Don\u2019t label a lipoma from the chair.' },
        { t:'7\u20139',  h:'NICE NG12 urgent ultrasound', d:'Adult + enlarging lump \u2192 urgent direct-access USS within 2 weeks; sarcoma-service referral if suspicious.' },
        { t:'9\u201312', h:'Don\u2019t collude + safety-net', d:'Won\u2019t call it harmless today; partner\u2019s nudge was right; sooner review if faster growth/pain; follow up result.' }
      ],
      wordPics: {
        fail: 'Confidently calls it "just a lipoma" without imaging and says keep an eye on it; misses that an enlarging deep lump meets the NICE NG12 urgent-ultrasound threshold; colludes with the wish to be reassured.',
        pass: 'Recognises the enlarging firm deep lump as suspicious and arranges an urgent ultrasound, with referral if suspicious.',
        exc:  'Characterises size/depth/consistency/growth, distinguishes lipoma from sarcoma features, arranges the NICE NG12 urgent direct-access ultrasound for an increasing-size lump (referral to sarcoma service if suspicious), avoids both over-reassurance and alarm, refuses to label a lipoma from the chair, reads the minimisation, and safety-nets and follows up the result.'
      },
      avoid: [
        { dont:'"That\u2019ll just be a fatty lump \u2014 nothing to worry about, keep an eye on it."', instead:'"Because it\u2019s firm, deep and \u2014 importantly \u2014 growing, I can\u2019t safely call it a fatty lump from feel alone; I\u2019m arranging an urgent scan to be sure."', why:'Sarcomas mimic lipomas; labelling an enlarging deep lump benign without imaging and "watching" loses crucial time.' },
        { dont:'"It doesn\u2019t hurt, so it\u2019s almost certainly harmless."', instead:'"Painless doesn\u2019t reassure with these \u2014 size, depth and growth matter more, and yours is growing, so it needs imaging."', why:'Painlessness does not exclude soft-tissue sarcoma; the discriminators are size, depth and increasing size.' },
        { dont:'"I\u2019ll tell your partner it\u2019s definitely harmless."', instead:'"I can\u2019t promise that today \u2014 and she was right to nudge you; what I can do is get it scanned quickly so you get a real answer, not a guess."', why:'Colluding with the wish to be reassured abandons the NICE NG12 imaging duty for an enlarging lump.' }
      ]
    }

  });

})();
