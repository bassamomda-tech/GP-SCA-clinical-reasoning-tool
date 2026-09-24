/* ============================================================
   Reasoning GP — Case Library batch 42:
   "The lump, the bruise & the swelling you never wave away"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   The recurring lesson: a lump / petechiae / enlarging swelling is
   taken seriously, examined, and routed down the correct NICE NG12
   suspected-cancer (2WW / direct-access) pathway — never reassured
   away from a photo, a phone call, or a wish for it to be nothing.
   Each case names the precise NG12 threshold and the action.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases41.js.
   ============================================================ */

(function(){

  /* ============ 161. VIDEO — Breast lump in a woman of 34 (NG12 breast 2WW) ============ */
  const c161 = {
    id:'breast-lump-2ww', title:'"It\u2019s probably just a cyst \u2014 I\u2019m too young for anything bad, aren\u2019t I?"', type:'video', duration:12,
    meta:{ age:34, sex:'F', setting:'Video consultation \u2014 a breast lump she found herself.', system:'Breast / Suspected breast cancer (NG12)' },
    brief:'Mrs Priya Kaushal, 34, marketing manager, mother of two. Found a firm lump in the upper-outer quadrant of the right breast ~3 weeks ago in the shower; thinks it may be slightly bigger. No pain. No skin or nipple change that she has noticed. She is breastfeeding-experienced but not currently feeding. She is keen to be told it is "just a cyst" and is frightened of an examination and of the word cancer. The task is to take ANY unexplained breast lump seriously, examine (with a chaperone), and \u2014 because she is 30 or over \u2014 refer on the NICE NG12 two-week-wait breast pathway for triple assessment, while handling her fear and the "I\u2019m too young" misconception.',
    script:{
      opening:'"Thanks for seeing me. I found a lump in my right breast a few weeks ago \u2014 it\u2019s probably nothing, isn\u2019t it? I\u2019m only 34, I keep telling myself I\u2019m too young for anything serious. It doesn\u2019t hurt, which is good, right? I\u2019m sure it\u2019s just a cyst. Can you just feel it and tell me it\u2019s fine \u2014 I really don\u2019t want a big fuss or hospitals."',
      facts:[
        { topic:'Any unexplained breast lump is taken seriously', text:'A new, discrete, unexplained breast lump warrants proper assessment regardless of age, pain or how well the patient feels. "Painless" is NOT reassuring (most breast cancers are painless), and "young" does not exclude it. The history points described \u2014 a firm lump, possibly enlarging \u2014 mandate examination and referral, not reassurance from the story alone.' },
        { topic:'The NG12 two-week-wait threshold', text:'NICE NG12: refer people aged 30 AND OVER with an unexplained breast lump (with or without pain) on a SUSPECTED-CANCER pathway (2-week-wait) for TRIPLE ASSESSMENT (clinical exam + imaging \u00b1 biopsy). She is 34 \u2014 so she meets the 2WW threshold. (Under 30 with an unexplained lump \u2192 consider non-urgent referral, or 2WW if other concerning features.) Also 2WW: skin changes suggestive of breast cancer (any age), or unilateral nipple changes/discharge/retraction in those 50+.' },
        { topic:'Examine properly \u2014 with a chaperone', text:'Examine both breasts and the axillae and nodes with a CHAPERONE offered and documented: characterise the lump (site, size, consistency, mobility, fixity), look for skin tethering/dimpling, peau d\u2019orange, nipple change/discharge, and axillary/supraclavicular nodes. Examination findings do NOT replace referral \u2014 even a "benign-feeling" lump in someone 30+ is referred for triple assessment.' },
        { topic:'The hidden agenda \u2014 fear, not reassurance-seeking', text:'HIDDEN AGENDA \u2014 the "it\u2019s probably just a cyst / I\u2019m too young / just tell me it\u2019s fine" is FEAR talking: she is terrified of cancer, of hospitals and of what it would mean for her two young children, and is half-hoping the doctor will agree it is nothing so she can avoid the fear. There may be a family history or a friend\u2019s diagnosis driving it. Colluding with the wish for reassurance to spare her distress would be a serious error.' },
        { topic:'What she needs', text:'Officially: to be told the lump is just a cyst. What she needs: an examination (with a chaperone) that takes the lump seriously, correction of the "too young / painless = safe" misconceptions, an honest explanation that ANY unexplained lump at her age is referred on the 2-week breast pathway for triple assessment (most prove benign), and warm handling of the fear \u2014 not collusive reassurance, and not cold alarm.' },
      ],
      ice:{
        ideas:'It\u2019s "probably just a cyst"; being painless and young means it can\u2019t be serious.',
        concerns:'HIDDEN AGENDA \u2014 real terror of cancer, hospitals and what it would mean for her two young children; half-hoping to be told it\u2019s nothing so she can avoid the fear; possibly a family history or friend\u2019s diagnosis behind it.',
        expectations:'To be felt and reassured it\u2019s fine, with no "fuss". What she actually needs: an examination with a chaperone, correction of the too-young/painless misconceptions, and an honest 2WW breast referral for triple assessment, delivered with warmth.'
      },
      cues:['A firm, possibly-enlarging, painless breast lump for ~3 weeks \u2014 unexplained; examine and refer, don\u2019t reassure from the story.','"I\u2019m too young / it doesn\u2019t hurt, so it\u2019s fine" \u2014 misconceptions to correct gently; age and painlessness do not exclude cancer.','"Just tell me it\u2019s a cyst, no fuss" \u2014 fear, not genuine reassurance-seeking; don\u2019t collude.']
    },
    checkpoints:[
      { dom:'tasks', text:'Takes ANY unexplained breast lump seriously regardless of age/pain, and characterises it on history (duration, change in size, skin/nipple change, family history, hormonal/risk factors) rather than reassuring from the story' },
      { dom:'tasks', text:'EXAMINES both breasts, axillae and regional nodes \u2014 offering and documenting a CHAPERONE \u2014 assessing site, size, consistency, mobility/fixity, skin tethering/dimpling, peau d\u2019orange and nipple change' },
      { dom:'tasks', text:'Knows and applies the NICE NG12 threshold: aged 30+ with an unexplained breast lump \u2192 SUSPECTED-CANCER (2-week-wait) referral for TRIPLE ASSESSMENT \u2014 and does NOT let a "benign-feeling" exam override referral' },
      { dom:'tasks', text:'Corrects the "I\u2019m too young / painless means it\u2019s safe" misconceptions accurately (age does not exclude it; most breast cancers are painless) without frightening' },
      { dom:'tasks', text:'Explains triple assessment (clinical exam + mammogram/ultrasound \u00b1 biopsy) and the realistic message that MOST referred lumps prove benign \u2014 referral is precautionary, not a cancer diagnosis' },
      { dom:'rto',   text:'Recognises the reassurance-seeking as fear, surfaces the worry about cancer/hospitals/her children gently, and does NOT collude with the wish to be told it is nothing' },
      { dom:'rto',   text:'Handles the examination sensitively (consent, dignity, chaperone) and balances honesty (this needs urgent checking) with calm reassurance so she engages rather than avoids' },
      { dom:'gs',    text:'Safety-nets and follows up: the 2WW timeframe and what to expect at the breast clinic, what change would warrant sooner contact, ensures she will attend, acknowledges the fear, and arranges to review the outcome \u2014 examination + correct NG12 referral, not collusive reassurance' },
    ],
    worked:[
      { lbl:'Take it seriously, kindly', txt:'"I\u2019m really glad you came \u2014 and I\u2019m not going to just feel it and wave you off, because that wouldn\u2019t be fair to you. A new lump deserves to be taken properly seriously, whatever your age. Let me ask a few things and then examine you carefully."' },
      { lbl:'Gently correct the myths', txt:'"Two things I want to be honest about, because they\u2019re common and they matter: being 34 doesn\u2019t mean you can\u2019t have something that needs checking, and a lump being painless isn\u2019t reassuring \u2014 in fact most breast lumps that turn out to be important don\u2019t hurt. So \u2018it doesn\u2019t hurt\u2019 doesn\u2019t let us off looking."' },
      { lbl:'Examine with dignity', txt:'"I\u2019d like to examine both breasts and under your arms. I\u2019ll have a chaperone in with us, you can stop me at any point, and I\u2019ll talk you through it. Is that okay?"' },
      { lbl:'Name the pathway honestly', txt:'"Here\u2019s the plan, and I want to be straight with you. Because you\u2019re over 30 with a new lump, the right and safe thing \u2014 whatever it feels like to me \u2014 is to refer you to the breast clinic to be seen within two weeks. They do what\u2019s called triple assessment: an examination, a scan or mammogram, and a tiny sample if needed, all usually in one visit."' },
      { lbl:'Reassure with reasons', txt:'"This is NOT me telling you it\u2019s cancer \u2014 the large majority of lumps sent this way turn out to be completely benign, often a cyst exactly as you hoped. But the only way to KNOW is to have it properly looked at, and going quickly is what keeps you safe and gets you your answer fastest."' },
      { lbl:'Surface the fear + safety-net', txt:'"Can I gently ask \u2014 what\u2019s the worry underneath this for you? \u2026 Your little ones. Of course. That fear makes complete sense, and it\u2019s exactly why we get a clear answer rather than guess. If anything changes \u2014 the lump grows, skin or nipple changes, you feel unwell \u2014 come back sooner. I\u2019ll make sure the referral goes today and I\u2019ll follow up the result with you."' },
    ],
    learning:'A new, discrete, unexplained breast lump is taken seriously and EXAMINED (both breasts, axillae and nodes, with a chaperone offered and documented) regardless of the patient\u2019s age, the absence of pain, or how well she feels \u2014 "painless" is not reassuring (most breast cancers are painless) and "too young" does not exclude it. The NICE NG12 threshold is explicit: people aged 30 AND OVER with an unexplained breast lump (with or without pain) are referred on a SUSPECTED-CANCER (2-week-wait) pathway for TRIPLE ASSESSMENT (clinical examination + imaging \u00b1 biopsy); under 30 with an unexplained lump warrants consideration of non-urgent referral (or 2WW with other concerning features); skin changes suggestive of breast cancer (any age) and unilateral nipple change/discharge/retraction in those 50+ also meet 2WW. A benign-feeling examination does NOT override referral. The examinable hidden agenda is that "it\u2019s probably just a cyst / I\u2019m too young / just tell me it\u2019s fine" is FEAR \u2014 of cancer, hospitals and the impact on young children \u2014 half-hoping to be told it is nothing; colluding with that wish to spare distress is a serious error. Correct the misconceptions, examine with dignity, refer on the NG12 breast pathway with the honest, reassuring message that most referred lumps prove benign, surface and hold the fear, and safety-net and follow up.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer \u00b7 breast cancer recognition & referral \u00b7 triple assessment',
      points:[
        { h:'Any unexplained breast lump \u2192 assess', t:'Take a new discrete unexplained breast lump seriously regardless of age, pain or wellbeing. Characterise on history (duration, change, skin/nipple change, family history, hormonal factors) and examine both breasts, axillae and regional nodes with a chaperone.' },
        { h:'NG12 breast 2WW thresholds', t:'Refer on a 2-week-wait pathway: aged 30+ with an unexplained breast lump (\u00b1 pain); aged 50+ with unilateral nipple discharge/retraction or other concern of one nipple; skin changes suggestive of breast cancer (any age). Consider 2WW in 30+ with unexplained axillary lump. Under 30 with an unexplained lump \u2192 consider non-urgent referral (2WW if other concerning features).' },
        { h:'Triple assessment', t:'The breast clinic performs triple assessment: clinical examination + imaging (mammography and/or ultrasound, ultrasound generally for younger/denser breasts) \u00b1 needle biopsy \u2014 usually at a single visit. A benign-feeling exam does not replace referral in those meeting the threshold.' },
        { h:'Painless and young are NOT reassuring', t:'Most breast cancers are painless; pain alone is usually benign but does not exclude cancer if a lump is present. Younger age lowers but does not remove risk \u2014 hence the explicit age-30 threshold. Correct these common misconceptions sensitively.' },
        { h:'Don\u2019t collude with reassurance-seeking', t:'Patients frightened of cancer may seek to be told it is nothing. Recognise this as fear, surface it gently, and avoid colluding \u2014 the duty is to examine and refer, framed with warmth and the honest message that most referred lumps prove benign.' },
        { h:'Examination dignity & chaperone', t:'Always offer and document a chaperone, gain consent, preserve dignity, explain each step and allow the patient to stop. Sensitive examination supports engagement with referral.' },
        { h:'Never do', t:'Never reassure a breast lump from the history or a photo without examination; never let "painless / too young / benign-feeling" override the NG12 30+ referral; never omit the chaperone; never collude with the wish to be told it is nothing; never frighten with cold delivery.' },
        { h:'Safety-net & follow-up', t:'Make the 2WW referral promptly; explain the clinic and triple assessment; advise what change warrants sooner contact; confirm attendance; acknowledge the fear; review the outcome \u2014 examination + correct NG12 referral, reassuring but never collusive.' }
      ]
    }
  };

  /* ============ 162. VIDEO — Persistent neck lump in an adult of 49 (NG12 head & neck 2WW) ============ */
  const c162 = {
    id:'neck-lump-2ww', title:'"It\u2019s just a gland up from a cold \u2014 it\u2019ll go down, won\u2019t it?"', type:'video', duration:12,
    meta:{ age:49, sex:'M', setting:'Video consultation \u2014 a lump in the side of the neck.', system:'Head & neck / Suspected cancer (NG12)' },
    brief:'Mr Derek Mahoney, 49, publican and 25-pack-year smoker who drinks heavily. A firm lump in the right side of the neck for ~5 weeks; he assumed it was "a gland up from a cold" but it has NOT gone down. On directed history: it is painless, firm and a bit bigger; he has a mildly hoarse voice for a few weeks and some throat discomfort; smoker + heavy alcohol. The task is to take a persistent (>3\u20134 week) unexplained neck lump seriously, examine it and the head/neck, recognise the high-risk profile (smoking + alcohol + hoarseness), and refer on the NICE NG12 head & neck suspected-cancer (2WW) pathway \u2014 while screening the broader differential (reactive, lymphoma/haematological, thyroid) and handling his minimisation.',
    script:{
      opening:'"Morning doc. It\u2019s probably nothing \u2014 I\u2019ve got a lump on me neck, here on the right. I reckon it\u2019s just a gland up from a cold I had a while back. It\u2019ll go down on its own, won\u2019t it? The wife made me ring. I haven\u2019t got time to be poked about, the pub doesn\u2019t run itself. Can you just tell me it\u2019s nothing to worry about?"',
      facts:[
        { topic:'A persistent neck lump is not "just a gland"', text:'A reactive node from a cold settles within 2\u20133 weeks. A neck lump persisting beyond ~3\u20134 weeks, especially if firm, painless and not resolving, is UNEXPLAINED and must be taken seriously \u2014 not assumed to be a post-viral gland. His has been present ~5 weeks and is, if anything, bigger.' },
        { topic:'The high-risk head & neck profile', text:'CRITICAL \u2014 he is a heavy smoker AND heavy drinker (the major synergistic risk factors for head & neck squamous cell cancer) with a persistent neck lump PLUS a few weeks of HOARSENESS and throat discomfort. This constellation is a red-flag head & neck cancer picture (laryngeal/oropharyngeal with nodal spread) and needs urgent referral, not reassurance.' },
        { topic:'The NG12 thresholds', text:'NICE NG12: consider a SUSPECTED-CANCER (2-week-wait) referral for laryngeal cancer in people aged 45+ with persistent unexplained HOARSENESS or an unexplained neck LUMP. Consider 2WW for oral cancer and for THYROID cancer (unexplained thyroid lump). For an unexplained lump consistent with lymphadenopathy, also consider haematological causes \u2014 check FBC. Because he is a smoker, an unexplained neck lump also warrants a CHEST X-RAY (lung). Examine the head, neck, mouth and thyroid and refer urgently.' },
        { topic:'The broader differential to screen', text:'Differential for a neck lump: REACTIVE/infective node (but should settle), HAEMATOLOGICAL (lymphoma \u2014 ask B symptoms: night sweats, weight loss, fevers, itch, generalised lymphadenopathy; check FBC/film), THYROID nodule/goitre, salivary gland, and benign (lipoma, sebaceous cyst, branchial cyst). The skill is examining and routing to the correct urgent pathway, not labelling it benign from the chair.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 his "it\u2019s just a gland / no time / tell me it\u2019s nothing" is partly genuine and partly AVOIDANCE: a self-employed man who never sees a doctor, doesn\u2019t want to lose the pub or hear bad news, and is minimising a lump and a hoarse voice he has half-noticed. The wife\u2019s push is the reliable signal. The skill is to take it seriously, examine, elicit the downplayed hoarseness/smoking/drinking, and refer \u2014 honestly but without panic.' },
        { topic:'What he needs', text:'Officially: to be told the gland is nothing. What he needs: examination of the neck, mouth, throat and thyroid; recognition of the high-risk profile; an NG12 head & neck 2WW referral (plus FBC for haematological causes and a CXR as a smoker); the smoking/alcohol risk addressed; and the avoidance/fear handled \u2014 not "it\u2019ll go down on its own".' },
      ],
      ice:{
        ideas:'It\u2019s "just a gland up from a cold" that will go down on its own.',
        concerns:'HIDDEN AGENDA \u2014 a self-employed man who never attends, doesn\u2019t want to lose the pub or hear bad news, minimising a persistent lump and a hoarse voice he has half-noticed; the wife\u2019s push is the real signal.',
        expectations:'To be told it\u2019s nothing, with no "poking about". What he actually needs: examination, recognition of the smoker+drinker+hoarseness red-flag profile, an NG12 head & neck 2WW referral (+ FBC + CXR), and the risk factors and fear addressed.'
      },
      cues:['A firm, painless neck lump for ~5 weeks that has NOT settled \u2014 unexplained; not "just a gland", examine and refer.','Smoker + heavy drinker + a few weeks of hoarseness/throat discomfort \u2014 a red-flag head & neck cancer profile; urgent referral.','"No time / the wife made me come / tell me it\u2019s nothing" \u2014 avoidance; the spouse\u2019s push is the reliable cue, elicit the downplayed symptoms.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises a neck lump persisting beyond ~3\u20134 weeks as UNEXPLAINED (a reactive gland should settle) and does not accept "just a gland from a cold" \u2014 characterising it and ELICITING the downplayed hoarseness, throat symptoms, smoking and alcohol' },
      { dom:'tasks', text:'Identifies the HIGH-RISK head & neck profile (smoker + heavy alcohol + persistent neck lump + hoarseness) and screens lymphoma B symptoms (night sweats, weight loss, fevers, itch, generalised lymphadenopathy)' },
      { dom:'tasks', text:'EXAMINES the neck lump, oral cavity/oropharynx, thyroid and regional nodes (and looks for hepatosplenomegaly/other nodes), characterising the lump (site, size, consistency, fixity)' },
      { dom:'tasks', text:'Applies NG12: refers on the head & neck SUSPECTED-CANCER (2WW) pathway for persistent unexplained neck lump/hoarseness at 45+ (laryngeal/oral; thyroid if a thyroid lump), arranges FBC for haematological causes, and a CHEST X-RAY as a smoker' },
      { dom:'tasks', text:'Addresses the modifiable risk \u2014 offers smoking cessation and alcohol brief intervention \u2014 without lecturing, and considers the broader differential (reactive, haematological, thyroid, benign) rather than labelling it benign from the chair' },
      { dom:'rto',   text:'Reads the "no time / tell me it\u2019s nothing" as avoidance, treats the wife\u2019s push as the reliable signal, surfaces the worry gently and does NOT collude with the wish to be reassured' },
      { dom:'rto',   text:'Balances honesty (a lump this persistent, with your background, needs urgent checking) with calm reassurance so a reluctant man engages with examination and referral' },
      { dom:'gs',    text:'Safety-nets and follows up: the 2WW pathway and what to expect, FBC/CXR results, red flags warranting sooner review, cessation/alcohol support, confirms he will attend, and reviews the outcome \u2014 examination + correct NG12 referral, not "it\u2019ll go down on its own"' },
    ],
    worked:[
      { lbl:'Refuse the "just a gland"', txt:'"I\u2019m glad your wife nudged you \u2014 and I\u2019m not going to just tell you it\u2019s a gland over the phone, because a gland from a cold goes down in a couple of weeks, and yours has been there over a month and isn\u2019t shifting. That earns a proper look, not a brush-off."' },
      { lbl:'Elicit the downplayed bits', txt:'"Few quick questions. Has your voice been husky or hoarse at all? \u2026 A few weeks, yes. Any soreness swallowing? And the smoking \u2014 how much, and how\u2019s the drink? \u2026 Thank you for being straight with me; that all matters and it\u2019s exactly why I asked rather than assumed."' },
      { lbl:'Name the concern honestly', txt:'"I\u2019ll be honest with you, because I think you\u2019d want that. A lump in the neck that\u2019s hung around, with a hoarse voice, in someone who smokes and drinks a fair bit \u2014 that\u2019s a combination I need a specialist to check quickly. It can be a problem in the voice box or throat. I\u2019m not telling you it IS \u2014 but it has to be ruled out fast."' },
      { lbl:'Examine + the right tests', txt:'"Let me examine your neck, mouth, throat and your thyroid now, and feel for other glands. I\u2019m going to arrange a blood count and a chest X-ray too, because they help me cover the other possible causes."' },
      { lbl:'Urgent referral', txt:'"Given all of it together, I\u2019m referring you on the urgent two-week pathway to the head-and-neck specialists \u2014 you\u2019ll be seen quickly. That\u2019s the safe, right step, and getting it looked at fast is exactly what gives the best outcome whatever it turns out to be."' },
      { lbl:'Risk + safety-net, no lecture', txt:'"I\u2019m not here to give you a hard time about the fags and the pints \u2014 but cutting down would genuinely help, and I can support that whenever you\u2019re ready. If the lump grows, the voice worsens, or you feel unwell before the appointment, contact us sooner. I\u2019ll chase the bloods and X-ray and make sure that referral goes today."' },
    ],
    learning:'A neck lump persisting beyond about 3\u20134 weeks is UNEXPLAINED \u2014 a reactive node from a cold settles within 2\u20133 weeks \u2014 and must be taken seriously, examined and routed, not assumed to be a post-viral "gland". The examinable danger here is the HIGH-RISK head & neck profile: a heavy smoker and drinker (synergistic risk factors for head & neck squamous cell cancer) with a persistent neck lump PLUS a few weeks of hoarseness/throat discomfort. NICE NG12: consider a suspected-cancer (2-week-wait) referral for laryngeal cancer in people aged 45+ with persistent unexplained hoarseness OR an unexplained neck lump; consider 2WW for oral and thyroid cancer; check FBC for possible haematological causes (lymphoma \u2014 screen B symptoms); and arrange a chest X-ray in a smoker with an unexplained neck lump (lung). Examine the neck, mouth, oropharynx and thyroid; screen the broader differential (reactive, haematological, thyroid, benign) rather than labelling it benign from the chair; and address smoking and alcohol with brief intervention, not a lecture. The hidden agenda is avoidance \u2014 a self-employed man who never attends, doesn\u2019t want to lose the business or hear bad news, minimising a lump and a hoarse voice he has half-noticed, with the spouse\u2019s push the reliable signal. Elicit the downplayed symptoms, refer urgently with honesty but no panic, support the risk factors, and safety-net and follow up.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer (head & neck; haematological; lung) \u00b7 neck lump assessment',
      points:[
        { h:'Persistent neck lump = unexplained', t:'A reactive node settles within ~2\u20133 weeks. A neck lump persisting beyond ~3\u20134 weeks, particularly if firm, painless and not resolving, is unexplained \u2014 examine, characterise and route to the correct pathway rather than labelling it a post-viral gland.' },
        { h:'NG12 head & neck thresholds', t:'Consider a 2-week-wait referral for laryngeal cancer in people aged 45+ with persistent unexplained hoarseness or an unexplained neck lump. Consider 2WW for oral cancer (persistent unexplained ulcer/lump, red/white patch) and for thyroid cancer (unexplained thyroid lump). Examine mouth, oropharynx, neck and thyroid.' },
        { h:'High-risk profile', t:'Smoking and alcohol are major synergistic risk factors for head & neck squamous cell carcinoma. A persistent neck lump with hoarseness/throat symptoms in a smoker-drinker is a red-flag picture demanding urgent referral, not reassurance.' },
        { h:'Screen haematological causes', t:'A neck lump may be lymphadenopathy from lymphoma/leukaemia. Screen B symptoms (drenching night sweats, unexplained weight loss, fevers, pruritus), look for generalised lymphadenopathy/hepatosplenomegaly, and check FBC (and film) \u2014 persistent unexplained lymphadenopathy may warrant haematology referral.' },
        { h:'Chest X-ray in smokers', t:'In a smoker with an unexplained neck lump, arrange a chest X-ray (NG12 lung pathway) alongside the head & neck referral, as cervical nodes may reflect thoracic disease.' },
        { h:'Address modifiable risk', t:'Offer smoking-cessation and alcohol brief intervention/support \u2014 framed supportively, not as a lecture \u2014 as part of holistic care, while not letting risk-factor counselling delay urgent referral.' },
        { h:'Never do', t:'Never accept "just a gland from a cold" for a lump persisting >3\u20134 weeks; never miss the smoker+drinker+hoarseness red-flag profile; never skip examining the mouth/throat/thyroid; never omit FBC/CXR where indicated; never collude with avoidance.' },
        { h:'Safety-net & follow-up', t:'Examination + NG12 head & neck 2WW referral (\u00b1 thyroid/oral); FBC for haematological causes; CXR in smokers; cessation/alcohol support; advise sooner review if the lump grows/voice worsens/unwell; confirm attendance and review the outcome.' }
      ]
    }
  };

  /* ============ 163. FACE-TO-FACE — Unexplained petechiae & bruising in a toddler (NG12 very urgent FBC, leukaemia) ============ */
  const c163 = {
    id:'child-petechiae-leukaemia', title:'"He\u2019s covered in little spots and bruises \u2014 and he\u2019s just not himself"', type:'video', duration:12,
    meta:{ age:3, sex:'M', setting:'Video consultation \u2014 mother brings her 3-year-old with a spotty rash and bruising.', system:'Paediatrics / Suspected leukaemia & the unwell-child screen (NG12)' },
    brief:'Leo Whitfield, 3, brought by his mother Hayley. Over ~2 weeks he has developed scattered tiny red-purple spots (petechiae) on his legs and trunk and several unexplained bruises, and he has been pale, tired, off his food, irritable and "just not himself", with a couple of low-grade feverish episodes. The mother is anxious and exhausted. The examinable priorities are: (1) SAFETY FIRST \u2014 a non-blanching rash in a child means actively excluding MENINGOCOCCAL SEPSIS (if febrile/unwell \u2192 999/emergency); and (2) the NICE NG12 children & young people pathway \u2014 unexplained petechiae and/or hepatosplenomegaly require IMMEDIATE specialist referral for leukaemia, and a constellation of pallor, fatigue, unexplained fever/infection, bruising, generalised lymphadenopathy or bone pain warrants a VERY URGENT FBC (within 48 hours). This is a structured unwell-child assessment with safeguarding-mindful, parent-centred communication \u2014 not reassurance as a viral rash.',
    script:{
      opening:'(Worried, holding the child.) "Doctor, I\u2019m probably overreacting, but Leo\u2019s come up in these little red spots all over his legs, and he\u2019s got bruises I can\u2019t explain \u2014 he hasn\u2019t banged himself. He\u2019s gone really pale, he\u2019s shattered all the time, off his food, and he\u2019s just not himself. He\u2019s had a couple of temperatures too. My mum says it\u2019s probably just a virus going round nursery \u2014 is it? I couldn\u2019t settle until I\u2019d brought him in."',
      facts:[
        { topic:'Safety first \u2014 is this sepsis?', text:'IMMEDIATE PRIORITY \u2014 a non-blanching (petechial/purpuric) rash in a child mandates active exclusion of MENINGOCOCCAL SEPSIS/meningitis. Assess for fever, how unwell/toxic the child looks, irritability/drowsiness, neck stiffness, cold peripheries, tachycardia, rapidly spreading or purpuric rash. A child who is febrile and unwell with a non-blanching rash needs EMERGENCY admission (999) \u2014 this takes precedence over any cancer work-up. Do the glass/tumbler test and a full set of obs.' },
        { topic:'The NG12 leukaemia trigger \u2014 immediate referral', text:'NICE NG12 (children & young people): refer children/young people for IMMEDIATE specialist assessment for leukaemia if they have unexplained PETECHIAE or HEPATOSPLENOMEGALY. Leo has unexplained petechiae \u2014 so once acute sepsis is excluded/managed, this is an immediate paediatric referral, not watchful waiting.' },
        { topic:'The NG12 very-urgent FBC', text:'NICE NG12: offer a VERY URGENT full blood count (within 48 hours) to assess for leukaemia in children/young people with any of: pallor, persistent fatigue, unexplained fever, unexplained persistent infection, generalised lymphadenopathy, persistent or unexplained bone pain, unexplained bruising or unexplained bleeding. Leo has pallor, fatigue, fevers and unexplained bruising \u2014 multiple triggers. (In practice, with petechiae + systemic features, this often means same-day assessment.)' },
        { topic:'Examine fully', text:'Examine for: pallor, the rash (petechiae/purpura distribution, whether non-blanching), bruising pattern (and consider whether it fits the history \u2014 safeguarding-mindful), LYMPHADENOPATHY (cervical/axillary/inguinal), HEPATOSPLENOMEGALY, bone/joint tenderness, signs of infection, and overall how unwell he is (NICE traffic-light). Differential: leukaemia, ITP (immune thrombocytopenia), HSP (Henoch\u2013Sch\u00f6nlein \u2014 typically extensor/buttock palpable purpura, well child), meningococcal sepsis, and non-accidental injury (kept in mind, not assumed).' },
        { topic:'The hidden agenda \u2014 a frightened, dismissed mother', text:'HIDDEN AGENDA / communication core \u2014 the mother is frightened and has been told by family it is "just a virus"; she feels she may be overreacting yet KNOWS her child is "not himself". Validate her instinct (parental concern about a "not right" child is a powerful safety signal), do NOT dismiss it, and bring her with you through a serious, urgent assessment without either terrifying her or falsely reassuring her.' },
        { topic:'What this child needs', text:'Officially: is it just a virus? What is needed: a structured unwell-child assessment that FIRST excludes meningococcal sepsis (999 if febrile/toxic with a non-blanching rash), then \u2014 for unexplained petechiae \u2014 IMMEDIATE specialist paediatric referral for leukaemia per NG12 (with a very-urgent FBC), full examination for organomegaly/nodes, safeguarding kept in mind, and a frightened mother validated and guided \u2014 not reassurance as a viral rash.' },
      ],
      ice:{
        ideas:'It might be "just a virus going round nursery" (as the grandmother suggested); she fears she\u2019s overreacting.',
        concerns:'HIDDEN AGENDA \u2014 a frightened, exhausted mother who has been told she\u2019s overreacting but KNOWS her child is "not himself"; she needs her instinct validated, not dismissed.',
        expectations:'To be told whether it\u2019s serious. What this child actually needs: sepsis excluded first (999 if febrile/toxic with a non-blanching rash), then immediate paediatric referral for leukaemia (NG12 petechiae trigger) with a very-urgent FBC, full examination, safeguarding-mindful, and the mother brought along compassionately.'
      },
      cues:['Non-blanching spots + bruising + pale, tired, feverish toddler \u2014 exclude meningococcal SEPSIS first (999 if febrile/unwell), then leukaemia.','Unexplained PETECHIAE \u2014 NG12 trigger for IMMEDIATE specialist referral for leukaemia; pallor/fatigue/fever/bruising \u2192 very-urgent FBC.','"My mum says it\u2019s just a virus / am I overreacting?" \u2014 validate the mother\u2019s instinct that her child is "not himself"; don\u2019t dismiss.']
    },
    checkpoints:[
      { dom:'tasks', text:'SAFETY FIRST: recognises a non-blanching rash in a child and actively excludes MENINGOCOCCAL SEPSIS \u2014 assesses fever, toxic appearance, irritability/drowsiness, neck stiffness, perfusion/obs, glass test \u2014 and would arrange EMERGENCY (999) admission if febrile/unwell with a non-blanching rash, ahead of any cancer work-up' },
      { dom:'tasks', text:'Knows the NG12 trigger that unexplained PETECHIAE (or hepatosplenomegaly) requires IMMEDIATE specialist assessment for leukaemia \u2014 not watchful waiting or "review in a few days"' },
      { dom:'tasks', text:'Identifies the constellation (pallor, persistent fatigue, unexplained fever, unexplained bruising/bleeding, generalised lymphadenopathy, bone pain) warranting a VERY URGENT FBC (within 48 hours) to assess for leukaemia' },
      { dom:'tasks', text:'EXAMINES fully and systematically: pallor, rash distribution/blanching, bruising pattern, lymphadenopathy, HEPATOSPLENOMEGALY, bone/joint tenderness, infection signs, and overall illness (NICE traffic-light)' },
      { dom:'tasks', text:'Considers the differential (leukaemia, ITP, HSP, meningococcal sepsis) and keeps SAFEGUARDING/non-accidental injury in mind for unexplained bruising \u2014 without prematurely assuming either a benign or a sinister non-cancer cause' },
      { dom:'rto',   text:'VALIDATES the mother\u2019s instinct (a child who is "not himself" is a powerful safety signal), explicitly does not dismiss her as overreacting, and counters the "just a virus" message compassionately' },
      { dom:'rto',   text:'Communicates a serious, urgent plan to a frightened parent clearly and kindly \u2014 honest about the need for urgent tests/assessment without catastrophising or falsely reassuring, and checks her understanding and support' },
      { dom:'gs',    text:'Safety-nets robustly: explicit meningococcal/sepsis red flags and 999 advice, the immediate referral/very-urgent FBC arranged with clear timing, who to contact and how, ensures transport/attendance, documents, and follows up \u2014 sepsis excluded first, then immediate leukaemia pathway, never reassurance as a viral rash' },
    ],
    worked:[
      { lbl:'Validate her first', txt:'"You are absolutely not overreacting \u2014 you know Leo, and you\u2019ve noticed he\u2019s not himself, and that instinct is exactly what I want to hear about. You did the right thing bringing him in straight away. Let me have a proper look at him now."' },
      { lbl:'Check safety out loud', txt:'"First I need to check a few urgent things. These little spots \u2014 do they fade when I press this glass against them? \u2026 And his temperature, how alert he is, his breathing and colour. I\u2019m making sure there\u2019s nothing that needs a hospital this very minute."' },
      { lbl:'Examine thoroughly', txt:'"I\u2019m going to feel his tummy for his liver and spleen, check the glands in his neck, armpits and groin, look at his colour and the bruises, and see how he is in himself. Bear with me \u2014 I\u2019m being careful on purpose."' },
      { lbl:'Be honest about urgency', txt:'"I want to be straight with you, calmly. These spots \u2014 little ones that don\u2019t fade \u2014 together with him being pale, tired and off-colour, are things we never sit on in a child. They can have several causes, including something with the blood cells that we must rule out urgently. I\u2019m not saying that\u2019s what it is \u2014 but we get it checked today, not in a few days."' },
      { lbl:'Name the plan', txt:'"So here\u2019s what I\u2019m doing now: because of these spots I\u2019m arranging for Leo to be seen by the children\u2019s specialists urgently, with an urgent blood count, today. I\u2019ll organise that straight away and tell you exactly where to go and what to expect."' },
      { lbl:'Sepsis safety-net', txt:'"While we sort this, if Leo becomes drowsy or floppy, the rash spreads quickly, he gets a high fever, cold hands and feet, or you\u2019re frightened by any change \u2014 call 999 and say there\u2019s a child with a rash that doesn\u2019t fade. Trust yourself. You\u2019ve done everything right, and I\u2019m going to stay with you through this."' },
    ],
    learning:'A non-blanching (petechial/purpuric) rash in a child is a SAFETY-FIRST presentation: actively exclude MENINGOCOCCAL SEPSIS/meningitis (fever, toxic/ill appearance, irritability or drowsiness, neck stiffness, poor perfusion, rapidly spreading or purpuric rash) \u2014 a febrile, unwell child with a non-blanching rash needs EMERGENCY (999) admission, which takes precedence over any cancer work-up. Once acute sepsis is excluded, the NICE NG12 children & young people pathway governs: unexplained PETECHIAE or HEPATOSPLENOMEGALY require IMMEDIATE specialist assessment for leukaemia, and a constellation of pallor, persistent fatigue, unexplained fever, unexplained persistent infection, generalised lymphadenopathy, persistent/unexplained bone pain, unexplained bruising or bleeding warrants a VERY URGENT FBC (within 48 hours) \u2014 in practice, petechiae plus systemic features usually means same-day assessment. Examine fully (pallor, rash blanching/distribution, bruising pattern, lymphadenopathy, hepatosplenomegaly, bone tenderness, NICE traffic-light), hold the differential (leukaemia, ITP, HSP, meningococcal sepsis) and keep safeguarding/non-accidental injury in mind for unexplained bruising without assuming. The communication core is a frightened, exhausted mother told by family it is "just a virus" yet who knows her child is "not himself": validate that instinct as a powerful safety signal, do not dismiss her, and bring her through a serious, urgent plan honestly and kindly. Safety-net robustly (meningococcal red flags + 999, clear referral timing and contacts) and follow up \u2014 sepsis excluded first, then the immediate leukaemia pathway, never reassurance as a viral rash.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer \u2014 children & young people (leukaemia) \u00b7 NICE NG143 fever/sepsis \u00b7 meningococcal disease',
      points:[
        { h:'Safety first \u2014 exclude meningococcal sepsis', t:'A non-blanching rash in a child mandates active exclusion of meningococcal disease. Assess fever, toxic appearance, irritability/drowsiness, neck stiffness, perfusion (cap refill, cold peripheries), tachycardia, and a rapidly spreading/purpuric rash; do the glass test and full obs. Febrile + unwell + non-blanching rash \u2192 emergency 999 admission, ahead of any cancer work-up.' },
        { h:'NG12 immediate leukaemia referral', t:'Refer children/young people for IMMEDIATE specialist assessment for leukaemia if they have unexplained petechiae or hepatosplenomegaly \u2014 not watchful waiting.' },
        { h:'NG12 very-urgent FBC', t:'Offer a very urgent FBC (within 48 hours) to assess for leukaemia in children/young people with any of: pallor, persistent fatigue, unexplained fever, unexplained persistent infection, generalised lymphadenopathy, persistent/unexplained bone pain, unexplained bruising or unexplained bleeding.' },
        { h:'Examine systematically', t:'Assess pallor, rash distribution and blanching, bruising pattern, lymphadenopathy (multiple sites), hepatosplenomegaly, bone/joint tenderness, infection signs and overall illness severity (NICE traffic-light). Document findings carefully.' },
        { h:'Differential & safeguarding', t:'Consider leukaemia, ITP (isolated thrombocytopenia, well child), HSP (palpable purpura on extensors/buttocks, well child, often post-infective), and meningococcal sepsis. Keep non-accidental injury in mind for unexplained bruising \u2014 assess pattern against history without prematurely assuming abuse or a benign cause.' },
        { h:'Validate parental instinct', t:'A parent reporting their child is "not themselves" is a recognised, powerful safety signal (per NICE fever guidance). Validate it explicitly, counter dismissive "just a virus" messaging, and never make a worried parent feel they are overreacting.' },
        { h:'Never do', t:'Never reassure a non-blanching rash as viral without excluding sepsis; never delay/watchful-wait on unexplained petechiae or hepatosplenomegaly in a child; never miss hepatosplenomegaly/lymphadenopathy on exam; never dismiss the mother\u2019s instinct; never overlook safeguarding for unexplained bruising.' },
        { h:'Safety-net & follow-up', t:'Exclude sepsis first (999 if febrile/toxic with non-blanching rash); then immediate paediatric referral for leukaemia + very-urgent FBC with clear timing; give explicit meningococcal red flags and 999 advice; ensure transport/attendance; document and follow up the outcome.' }
      ]
    }
  };

  /* ============ 164. VIDEO — Enlarging deep lump on the thigh (NG12 soft-tissue sarcoma, urgent USS) ============ */
  const c164 = {
    id:'soft-tissue-sarcoma-lump', title:'"It\u2019s just a fatty lump on my leg \u2014 it\u2019s only got a bit bigger"', type:'video', duration:12,
    meta:{ age:42, sex:'M', setting:'Video consultation \u2014 a lump on the thigh that is growing.', system:'MSK / Suspected soft-tissue sarcoma (NG12)' },
    brief:'Mr Connor Bates, 42, warehouse supervisor. A lump in the front of his right thigh for ~4 months; he assumed it was "just a fatty lump" but it has clearly GROWN, and feels firm and deep (he can\u2019t easily move it under the skin). It is painless. He wants reassurance it is a harmless lipoma and is reluctant to make a fuss. The task is to recognise the features that distinguish a benign lipoma from a possible SOFT-TISSUE SARCOMA \u2014 size (>5 cm), deep to fascia, firm/fixed, and crucially INCREASING IN SIZE \u2014 and to arrange an urgent direct-access ULTRASOUND (within 2 weeks) per NICE NG12, rather than reassuring it as a lipoma from the chair or telling him to "keep an eye on it".',
    script:{
      opening:'"Cheers for seeing me. I\u2019ve got a lump on me thigh \u2014 it\u2019s just a fatty lump, isn\u2019t it? My mate\u2019s got loads of them. It doesn\u2019t hurt. It has got a bit bigger over the last few months, I\u2019ll admit, but it\u2019s probably nothing. Can you just tell me it\u2019s harmless so I can stop my missus going on at me about it? I don\u2019t want to waste anyone\u2019s time."',
      facts:[
        { topic:'Lipoma vs sarcoma \u2014 the discriminators', text:'Most soft-tissue lumps are benign lipomas: soft, mobile, superficial (in the fat just under the skin), small and stable. SARCOMA-suspicious features are: large SIZE (>5 cm, roughly bigger than a golf ball), DEEP to the fascia (fixed, not freely mobile under the skin), FIRM/HARD consistency, and \u2014 most importantly \u2014 INCREASING IN SIZE. Pain may or may not be present (painless does not reassure). His lump is firm, deep-feeling, and clearly growing \u2014 these are the red flags.' },
        { topic:'The NG12 threshold \u2014 urgent ultrasound', text:'NICE NG12: consider an URGENT direct-access ULTRASOUND scan (within 2 weeks) to assess for soft-tissue sarcoma in ADULTS with an unexplained lump that is INCREASING IN SIZE. (For children/young people with an unexplained increasing-size lump, the ultrasound is VERY URGENT \u2014 within 48 hours.) If imaging is suspicious or uncertain, refer on the suspected-cancer pathway to a sarcoma service. A growing lump is therefore imaged, not reassured away.' },
        { topic:'Don\u2019t diagnose a lipoma from the chair', text:'A confident "that\u2019s just a lipoma" without imaging is the classic error \u2014 deep, firm, large or enlarging lumps need an ultrasound first, because sarcomas are frequently mistaken for lipomas and "watch and wait" loses crucial time. Even if it looks/feels benign, an increasing-size lump meets the imaging threshold.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 his "it\u2019s just a fatty lump / don\u2019t want to waste your time / tell the missus it\u2019s harmless" is minimisation: a practical man who avoids doctors, doesn\u2019t want a fuss or bad news, and is hoping for permission to ignore it. His partner\u2019s nagging is the reliable signal. He may also be quietly worried (he HAS noticed it growing) but is downplaying. The skill is to take the growth seriously, image it, and not collude with the wish to be reassured.' },
        { topic:'What he needs', text:'Officially: to be told it\u2019s a harmless fatty lump. What he needs: examination characterising the lump (size, depth, consistency, mobility, growth), recognition that an enlarging, firm, deep lump meets the NG12 threshold for an urgent (2-week) ultrasound to exclude soft-tissue sarcoma, onward sarcoma-service referral if imaging is suspicious, and honest handling of the minimisation \u2014 not "it\u2019s just a lipoma, keep an eye on it".' },
      ],
      ice:{
        ideas:'It\u2019s "just a fatty lump" (lipoma) like his friend has; painless means harmless.',
        concerns:'HIDDEN AGENDA \u2014 a practical man who avoids doctors, doesn\u2019t want a fuss or bad news, hoping for permission to ignore it; partner\u2019s nagging is the real signal; quietly aware it has grown.',
        expectations:'To be told it\u2019s harmless so his partner stops worrying. What he actually needs: examination, recognition that an enlarging/firm/deep lump meets the NG12 urgent-ultrasound threshold for soft-tissue sarcoma, and onward referral if suspicious \u2014 not "it\u2019s just a lipoma".'
      },
      cues:['A firm, deep-feeling thigh lump that has clearly GROWN over months \u2014 an increasing-size lump meets the NG12 urgent-ultrasound threshold.','"It\u2019s just a fatty lump, painless, like my mate\u2019s" \u2014 misconception; growth/depth/firmness distinguish sarcoma from lipoma, image don\u2019t reassure.','"Don\u2019t want a fuss / tell the missus it\u2019s harmless" \u2014 minimisation; the partner\u2019s concern is the reliable cue, don\u2019t collude.']
    },
    checkpoints:[
      { dom:'tasks', text:'Characterises the lump on history and examination: SIZE (>5 cm), DEPTH (deep to fascia / fixed vs superficial mobile), CONSISTENCY (firm/hard), and crucially whether it is INCREASING IN SIZE \u2014 and recognises painlessness does not reassure' },
      { dom:'tasks', text:'Distinguishes a benign lipoma (soft, mobile, superficial, small, stable) from SARCOMA-suspicious features (large, deep, firm, enlarging) rather than diagnosing a lipoma from the chair' },
      { dom:'tasks', text:'Applies NG12: an unexplained lump INCREASING IN SIZE in an adult warrants an URGENT direct-access ULTRASOUND (within 2 weeks) to assess for soft-tissue sarcoma (very urgent / 48 hours in children/young people)' },
      { dom:'tasks', text:'Plans onward management: refer to a sarcoma/specialist service on the suspected-cancer pathway if imaging is suspicious or uncertain \u2014 and does NOT default to "watch and wait" for an enlarging lump' },
      { dom:'tasks', text:'Avoids both over-reassurance ("just a lipoma, keep an eye on it") and unnecessary alarm \u2014 explaining that imaging is the safe next step and most lumps prove benign' },
      { dom:'rto',   text:'Reads the "just a fatty lump / don\u2019t want a fuss" as minimisation, treats the partner\u2019s concern as the reliable signal, surfaces any quiet worry, and does NOT collude with the wish to be reassured' },
      { dom:'rto',   text:'Balances honesty (a lump that\u2019s growing needs imaging to be sure) with calm reassurance so a reluctant attender engages with the scan and any referral' },
      { dom:'gs',    text:'Safety-nets and follows up: arranges the urgent ultrasound with clear timing, explains what happens next and when results return, advises what change warrants sooner review, confirms he will attend, and reviews the outcome \u2014 image the enlarging lump, never reassure it as a lipoma from the chair' },
    ],
    worked:[
      { lbl:'Take the growth seriously', txt:'"I\u2019m glad you came in \u2014 and the bit that matters most is what you just told me: it\u2019s got bigger. A lump that\u2019s growing is one we always check properly rather than guess at, however likely it is to be harmless."' },
      { lbl:'Examine and explain', txt:'"Let me feel it. I\u2019m checking its size, whether it sits just under the skin and moves freely \u2014 which fatty lumps usually do \u2014 or whether it\u2019s deeper and firmer and fixed. Yours feels firm and quite deep, and you\u2019ve noticed it growing, so I don\u2019t want to just label it a fatty lump and send you off."' },
      { lbl:'Why not just reassure', txt:'"Here\u2019s my honesty: most of these ARE harmless fatty lumps. But a few firmer, deeper, growing lumps are something else \u2014 and they can look just like a fatty lump from the outside. The only way to tell them apart safely is a scan, not my fingers and a hopeful guess."' },
      { lbl:'Name the pathway', txt:'"So because it\u2019s enlarging, I\u2019m arranging an urgent ultrasound of the lump \u2014 within two weeks. If the scan\u2019s reassuring, great, we can both relax. If there\u2019s any question, it goes straight to the specialists who deal with this. That\u2019s the safe route."' },
      { lbl:'Don\u2019t collude', txt:'"I can\u2019t in good conscience tell your missus it\u2019s definitely harmless today \u2014 and honestly, she\u2019s right to have nudged you. What I CAN tell her is we\u2019re getting it scanned quickly so you\u2019ll have a proper answer rather than a guess."' },
      { lbl:'Safety-net + follow-up', txt:'"If it grows faster, becomes painful, or you\u2019re worried before the scan, contact us sooner. I\u2019ll organise the ultrasound now and make sure we go through the result together. You\u2019re not wasting anyone\u2019s time \u2014 this is exactly what we\u2019re here for."' },
    ],
    learning:'Most soft-tissue lumps are benign lipomas (soft, freely mobile, superficial, small and stable), but the features that distinguish a possible SOFT-TISSUE SARCOMA are large SIZE (>5 cm), DEEP location (fixed, deep to fascia, not freely mobile), FIRM/hard consistency and \u2014 most importantly \u2014 INCREASING IN SIZE; painlessness does not reassure. NICE NG12 sets an explicit threshold: consider an URGENT direct-access ultrasound (within 2 weeks) to assess for soft-tissue sarcoma in ADULTS with an unexplained lump that is increasing in size (VERY URGENT / within 48 hours in children and young people), with onward referral to a sarcoma/specialist service on the suspected-cancer pathway if imaging is suspicious or uncertain. The classic error is confidently diagnosing a lipoma from the chair and advising "watch and wait" \u2014 sarcomas frequently masquerade as lipomas and delay costs outcomes, so a deep, firm, large or enlarging lump is IMAGED first, even when it looks benign. The examinable hidden agenda is minimisation \u2014 a practical man avoiding doctors, not wanting a fuss or bad news, seeking permission to ignore it, with a partner\u2019s concern as the reliable signal and a quiet awareness that it has grown. Characterise the lump, recognise the increasing-size trigger, arrange the urgent ultrasound (avoiding both over-reassurance and alarm), refuse to collude with the wish to be reassured, and safety-net and follow up the result.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer \u2014 soft-tissue & bone sarcoma \u00b7 lump assessment',
      points:[
        { h:'Lipoma vs sarcoma features', t:'Benign lipoma: soft, mobile, superficial, small, stable. Sarcoma-suspicious: size >5 cm, deep to fascia (fixed/not freely mobile), firm/hard, and \u2014 key \u2014 increasing in size. Pain is variable and painlessness does not reassure.' },
        { h:'NG12 soft-tissue sarcoma threshold', t:'Consider an urgent direct-access ultrasound (within 2 weeks) for soft-tissue sarcoma in adults with an unexplained lump that is increasing in size. In children/young people the same finding warrants a very urgent ultrasound (within 48 hours).' },
        { h:'Image, don\u2019t label from the chair', t:'Do not confidently diagnose a lipoma and "watch and wait" for a deep, firm, large or enlarging lump \u2014 sarcomas frequently mimic lipomas. Imaging first is the safe step; suspicious or uncertain imaging \u2192 sarcoma-service referral on the suspected-cancer pathway.' },
        { h:'Bone sarcoma analogue', t:'For suspected bone sarcoma, NG12 advises a very urgent direct-access X-ray (within 48 hours) in those with unexplained bone swelling/pain; persistent/worsening unexplained bone pain in children/young people also warrants very urgent assessment. (Different from the soft-tissue ultrasound pathway.)' },
        { h:'Avoid alarm and over-reassurance', t:'Frame imaging as the safe, precautionary next step \u2014 most lumps prove benign \u2014 while being honest that a growing firm/deep lump needs a scan to be sure. Balance reassurance with clarity.' },
        { h:'Read minimisation', t:'A reluctant attender minimising an enlarging lump ("just a fatty lump / don\u2019t want a fuss"), often prompted by a partner, may be quietly worried. Surface the concern, treat the partner\u2019s prompt as a signal, and do not collude with the wish to be reassured.' },
        { h:'Never do', t:'Never diagnose a lipoma without imaging for a deep/firm/large/enlarging lump; never "watch and wait" an increasing-size lump; never treat painlessness as reassurance; never collude with minimisation; never delay the urgent ultrasound.' },
        { h:'Safety-net & follow-up', t:'Arrange the urgent ultrasound (within 2 weeks) with clear timing; refer to a sarcoma service if imaging is suspicious/uncertain; advise what change warrants sooner review; confirm attendance; review and communicate the result.' }
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
        { t:'7\u20139',  h:'Name the NG12 pathway', d:'30+ with an unexplained lump \u2192 2WW breast clinic for triple assessment; benign-feeling exam does not override.' },
        { t:'9\u201312', h:'Reassure + surface fear', d:'Most referred lumps are benign; surface the cancer/children fear; safety-net + follow up.' }
      ],
      wordPics: {
        fail: 'Reassures it\u2019s "probably a cyst" without examining, or examines and calls it benign and discharges; misses the NG12 30+ 2WW threshold; colludes with the wish to be told it\u2019s nothing.',
        pass: 'Examines with a chaperone and refers on the 2WW breast pathway for triple assessment, correcting the misconceptions.',
        exc:  'Takes any unexplained lump seriously, corrects the too-young/painless myths kindly, examines with dignity and a chaperone, refers on the NG12 30+ 2WW pathway for triple assessment without letting a benign-feeling exam override it, reassures that most referred lumps prove benign, and surfaces and holds the fear \u2014 examination + correct referral, never collusive reassurance.'
      },
      avoid: [
        { dont:'"You\u2019re young and it\u2019s painless \u2014 it\u2019s almost certainly just a cyst, try not to worry."', instead:'"Being 34 and pain-free doesn\u2019t let us off checking \u2014 most breast cancers are painless. Let me examine you and arrange the right scan."', why:'Age and painlessness do not exclude cancer; reassuring from the story risks missing it and breaches the NG12 threshold.' },
        { dont:'"It feels benign to me, so I wouldn\u2019t bother with hospital \u2014 just keep an eye on it."', instead:'"Even though it feels benign, because you\u2019re over 30 with a new lump the safe route is a two-week breast-clinic referral for triple assessment."', why:'A benign-feeling examination does not override the NG12 30+ referral; "keep an eye on it" loses time.' },
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
        { t:'4\u20137',  h:'Examine', d:'Neck lump, mouth/oropharynx, thyroid, regional + other nodes, hepatosplenomegaly.' },
        { t:'7\u20139',  h:'NG12 referral + tests', d:'Head & neck 2WW (45+ neck lump/hoarseness); FBC for haematological causes; CXR as a smoker.' },
        { t:'9\u201312', h:'Risk + safety-net', d:'Cessation/alcohol brief intervention (no lecture); surface avoidance/fear; sooner review if worse; follow up.' }
      ],
      wordPics: {
        fail: 'Accepts "just a gland from a cold" and reassures over the phone; never examines mouth/throat/thyroid; misses the smoker+drinker+hoarseness profile, the FBC and CXR, and the NG12 head & neck 2WW.',
        pass: 'Recognises a persistent neck lump as unexplained, examines, and refers on the head & neck 2WW with FBC/CXR.',
        exc:  'Refuses the "gland" label for a 5-week lump, elicits the downplayed hoarseness/smoking/alcohol and the high-risk profile, screens lymphoma B symptoms, examines neck/mouth/thyroid/nodes, refers on the NG12 head & neck 2WW with FBC and a CXR, addresses smoking/alcohol supportively, and reads the avoidance \u2014 honest urgency without panic.'
      },
      avoid: [
        { dont:'"It\u2019s just a gland from your cold \u2014 give it time, it\u2019ll go down."', instead:'"A gland from a cold settles in a couple of weeks; yours has been there over a month and isn\u2019t shifting \u2014 that needs a proper look, not more waiting."', why:'A persistent (>3\u20134 week) neck lump is unexplained and must be examined and routed, not assumed post-viral.' },
        { dont:'"As long as it doesn\u2019t hurt, I wouldn\u2019t worry."', instead:'"Has your voice been hoarse? How\u2019s the smoking and the drink? \u2026 Those, with a lasting lump, change things and need urgent specialist checking."', why:'Missing the hoarseness + smoking + alcohol red-flag profile overlooks the very features that flag head & neck cancer.' },
        { dont:'"Let\u2019s see how it is in a month."', instead:'"Given the lump, the hoarse voice and your background, I\u2019m referring you on the urgent two-week pathway now and arranging a blood count and chest X-ray \u2014 not waiting."', why:'Watchful waiting delays urgent investigation of a possible head & neck (or haematological/lung) cancer.' }
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
        { t:'5\u20137',  h:'Recognise NG12 triggers', d:'Unexplained petechiae \u2192 IMMEDIATE leukaemia referral; pallor/fatigue/fever/bruising \u2192 very-urgent FBC (48h).' },
        { t:'7\u20139',  h:'Honest, urgent plan', d:'Calmly name the urgent same-day paediatric assessment + urgent blood count; safeguarding kept in mind, not assumed.' },
        { t:'9\u201312', h:'Sepsis safety-net', d:'Explicit meningococcal red flags + 999; clear contacts/transport; bring the frightened mother along; document + follow up.' }
      ],
      wordPics: {
        fail: 'Reassures it\u2019s "just a virus"; never does the glass test or excludes sepsis; misses that unexplained petechiae mandate immediate leukaemia referral; no FBC; dismisses the mother as overreacting.',
        pass: 'Excludes sepsis, examines fully, recognises the petechiae/leukaemia trigger and arranges urgent referral + FBC, validating the mother.',
        exc:  'Validates the mother\u2019s instinct, excludes meningococcal sepsis FIRST (999 if febrile/toxic), examines for organomegaly/nodes, recognises unexplained petechiae as the NG12 immediate-leukaemia-referral trigger with a very-urgent FBC, keeps safeguarding in mind without assuming, and brings a frightened parent through a serious urgent plan with honesty and warmth and a robust sepsis safety-net.'
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
        { t:'2\u20135',  h:'Examine + characterise', d:'Size (>5 cm?), depth (deep/fixed vs superficial mobile), firmness, growth. Firm + deep + enlarging = red flags.' },
        { t:'5\u20137',  h:'Why not just reassure', d:'Sarcomas mimic lipomas; only a scan tells them apart safely. Don\u2019t label a lipoma from the chair.' },
        { t:'7\u20139',  h:'NG12 urgent ultrasound', d:'Adult + enlarging lump \u2192 urgent direct-access USS within 2 weeks; sarcoma-service referral if suspicious.' },
        { t:'9\u201312', h:'Don\u2019t collude + safety-net', d:'Won\u2019t call it harmless today; partner\u2019s nudge was right; sooner review if faster growth/pain; follow up result.' }
      ],
      wordPics: {
        fail: 'Confidently calls it "just a lipoma" without imaging and says keep an eye on it; misses that an enlarging deep lump meets the NG12 urgent-ultrasound threshold; colludes with the wish to be reassured.',
        pass: 'Recognises the enlarging firm deep lump as suspicious and arranges an urgent ultrasound, with referral if suspicious.',
        exc:  'Characterises size/depth/consistency/growth, distinguishes lipoma from sarcoma features, arranges the NG12 urgent direct-access ultrasound for an increasing-size lump (referral to sarcoma service if suspicious), avoids both over-reassurance and alarm, refuses to label a lipoma from the chair, reads the minimisation, and safety-nets and follows up the result.'
      },
      avoid: [
        { dont:'"That\u2019ll just be a fatty lump \u2014 nothing to worry about, keep an eye on it."', instead:'"Because it\u2019s firm, deep and \u2014 importantly \u2014 growing, I can\u2019t safely call it a fatty lump from feel alone; I\u2019m arranging an urgent scan to be sure."', why:'Sarcomas mimic lipomas; labelling an enlarging deep lump benign without imaging and "watching" loses crucial time.' },
        { dont:'"It doesn\u2019t hurt, so it\u2019s almost certainly harmless."', instead:'"Painless doesn\u2019t reassure with these \u2014 size, depth and growth matter more, and yours is growing, so it needs imaging."', why:'Painlessness does not exclude soft-tissue sarcoma; the discriminators are size, depth and increasing size.' },
        { dont:'"I\u2019ll tell your partner it\u2019s definitely harmless."', instead:'"I can\u2019t promise that today \u2014 and she was right to nudge you; what I can do is get it scanned quickly so you get a real answer, not a guess."', why:'Colluding with the wish to be reassured abandons the NG12 imaging duty for an enlarging lump.' }
      ]
    }

  });

})();
