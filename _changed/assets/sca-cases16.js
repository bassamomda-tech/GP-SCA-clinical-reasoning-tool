/* ============================================================
   Reasoning GP — Case Library batch 16: "Vaginal bleeding across the life course"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   NG12 2WW pathways stated explicitly where they genuinely map
   (postmenopausal bleeding 55+; unscheduled bleeding on HRT).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases15.js.
   ============================================================ */

(function(){

  /* ============ 57. VIDEO — Postmenopausal bleeding (NG12 2WW) ============ */
  const c57 = {
    id:'pmb-endometrial', title:'"It was only a tiny bit, probably nothing"', type:'video', duration:12,
    meta:{ age:61, sex:'F', setting:'Video consultation — one episode of vaginal bleeding, postmenopausal.', system:'Gynae / Postmenopausal bleeding' },
    brief:'Mrs Carol Easton, 61, retired teacher. Periods stopped at 51 (10 years ago). Two days ago noticed fresh red spotting on wiping, "just once". Books a video appointment, very keen to downplay it. BMI 33, type 2 diabetes, never on HRT. No PV discharge volunteered. Mother had "womb trouble". PMH: T2DM, hypertension. Meds: metformin, ramipril, atorvastatin.',
    script:{
      opening:'"Thanks, doctor — honestly I feel a bit silly even booking this. I had a tiny bit of bleeding, you know, down below, just the once when I wiped, and it\u2019s stopped now. It\u2019s probably just dryness or I\u2019ve strained something. I nearly cancelled. Can you just reassure me it\u2019s nothing so I can get on? I don\u2019t want a load of tests at my age."',
      facts:[
        { topic:'The bleeding',        text:'If asked directly: fresh red blood on wiping, postmenopausal (10 years since LMP), 2 days ago, one episode, no trauma, not on HRT, no obvious source she can identify. Even a single episode of postmenopausal bleeding is significant. If asked, a little watery/blood-stained discharge over recent weeks she\u2019d dismissed.' },
        { topic:'The risk factors',     text:'If explored: BMI 33, type 2 diabetes, hypertension, never had children (nulliparous), late menopause-ish — a cluster of endometrial cancer risk factors. Mother had "womb trouble" (possibly endometrial/ovarian).' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA — the minimising is fear-driven: she has quietly convinced herself it IS cancer (her mother\u2019s "womb trouble"), and is downplaying it precisely because she is terrified. She booked a VIDEO appointment partly to avoid an examination she dreads. She wants permission to not have it be real.' },
        { topic:'The examination dread', text:'If reached gently: she is anxious and embarrassed about an internal/speculum examination — a previous unpleasant smear experience years ago — and this is part of why she\u2019s pushing for phone reassurance. Needs this acknowledged, not bulldozed.' },
        { topic:'What she wants',       text:'Officially: to be reassured it\u2019s nothing and avoid tests/examination. What she needs: clear explanation that postmenopausal bleeding is a red flag requiring urgent (2-week-wait) referral, delivered so she accepts it despite her fear, with the examination dread handled compassionately.' },
      ],
      ice:{
        ideas:'It was a trivial one-off — dryness or a strain — and almost certainly nothing.',
        concerns:'HIDDEN AGENDA — privately terrified it is womb cancer (her mother\u2019s "womb trouble"), which is exactly why she is minimising it; plus dread of an internal examination after a bad smear experience.',
        expectations:'To be reassured over video and sent away without tests. What she actually needs: urgent NG12 2-week-wait referral for postmenopausal bleeding, accepted despite her fear.'
      },
      cues:['"Probably nothing / I nearly cancelled" — active minimising of a red-flag symptom; the fear is underneath.','Booked a VIDEO appointment and resists examination — the dread of being examined is shaping her behaviour.','"At my age" + a mother with "womb trouble" — the cancer fear she hasn\u2019t voiced.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises POSTMENOPAUSAL BLEEDING as a red flag in its own right — even a single episode, 10 years after the LMP, off HRT — and does NOT accept the "dryness/probably nothing" framing or reassure it away' },
      { dom:'tasks', text:'States the NG12 pathway explicitly: postmenopausal bleeding in a woman aged 55+ is an urgent suspected-cancer (2-week-wait) referral for suspected endometrial cancer, with direct-access transvaginal ultrasound (endometrial thickness) per the local pathway — restated as the action, tagged NICE NG12' },
      { dom:'tasks', text:'Identifies the endometrial-cancer risk factors that raise concern further: obesity (BMI 33), type 2 diabetes, nulliparity, hypertension, family history — and explains (without alarming) why she is someone to take seriously, not reassure' },
      { dom:'tasks', text:'Arranges/encourages examination appropriately: explains an abdominal and pelvic/speculum examination is needed (to look for a local cause — cervix, vagina, atrophy) and that this needs to be in person, handling her dread sensitively rather than skipping it because she booked video' },
      { dom:'tasks', text:'Screens for other relevant features and safety: any heavier/ongoing bleeding, blood-stained discharge, weight loss, and considers cervical screening history; arranges baseline as appropriate without delaying the 2WW referral' },
      { dom:'rto',   text:'Hears the fear beneath the minimising and names it gently — does not collude with "it\u2019s nothing", but does not frighten her into disengagement either; explains that urgent referral is precautionary and most PMB is benign (commonly atrophy)' },
      { dom:'rto',   text:'Acknowledges and accommodates the examination dread (the previous bad smear), offering choice, a chaperone, and control, so she accepts the in-person assessment' },
      { dom:'gs',    text:'Safety-nets and follows up: explains the 2WW timeframe and what to expect (TVUSS ± biopsy/hysteroscopy), what to do if heavier bleeding/pain occurs meanwhile, ensures she will attend, documents, and arranges to follow up the result — does not leave a frightened patient to navigate it alone' },
    ],
    worked:[
      { lbl:'Refuse the dismissal, kindly', txt:'"I\u2019m really glad you didn\u2019t cancel — and I want to be honest with you rather than just reassure you, because you matter too much for that. Any bleeding after the menopause, even a tiny one-off ten years on, is something we always check properly. It\u2019s not silly at all; it\u2019s exactly the kind of thing we want to see."' },
      { lbl:'Name the pathway',       txt:'"There\u2019s a clear national rule for this — NICE guidance says bleeding after the menopause in a woman your age needs an urgent referral to the gynaecology team, seen within two weeks, with an internal ultrasound scan to look at the lining of the womb. That\u2019s a \u2018two-week-wait\u2019 referral. It sounds scary, but it\u2019s simply how we make sure we\u2019re not missing anything."' },
      { lbl:'Honest about odds',      txt:'"Let me balance that: most of the time, this kind of bleeding turns out to be something harmless — usually thinning and dryness of the tissues after the menopause. The urgent referral isn\u2019t me telling you it\u2019s cancer; it\u2019s me making absolutely sure it isn\u2019t, quickly. Both those things are true at once."' },
      { lbl:'Meet the real fear',     txt:'"Can I gently ask — when you said \u2018at my age\u2019, and mentioned your mum\u2019s womb trouble, I wondered if cancer had crossed your mind? \u2026 Thank you for telling me. That fear is completely understandable, and it\u2019s the very reason getting this checked fast is the right thing — so you\u2019re not lying awake imagining the worst."' },
      { lbl:'Handle the exam dread', txt:'"I do need to examine you in person as well — to look directly for a simple local cause. I know from what you\u2019ve said that examinations have been horrible for you before, and I won\u2019t brush past that. You\u2019re in control: a chaperone, we stop the moment you say, and I\u2019ll talk you through every step. Shall we find a time that works?"' },
      { lbl:'Safety-net',            txt:'"So: I\u2019m making the urgent referral today, you\u2019ll be contacted within two weeks, and they\u2019ll do the scan and possibly look inside the womb with a tiny camera. If before then you get heavier bleeding or pain, ring us or use the urgent route. I\u2019ll keep an eye out for the result and we\u2019ll go through it together. You came in hoping I\u2019d say it\u2019s nothing — what I\u2019m doing instead is making sure you find out properly and fast."' },
    ],
    learning:'Postmenopausal bleeding is a cardinal red flag and a defined NICE NG12 two-week-wait pathway: a woman aged 55 and over with postmenopausal bleeding warrants an urgent suspected-cancer referral for endometrial cancer, with direct-access transvaginal ultrasound per local pathway. A single episode, years after the LMP and off HRT, counts — it must never be reassured away as "dryness". This patient stacks endometrial-cancer risk factors (obesity, type 2 diabetes, nulliparity, hypertension, family history). The examinable hidden agenda is that her minimising is fear-driven — she suspects cancer (mother\u2019s "womb trouble") and booked a VIDEO appointment partly to dodge an examination she dreads after a bad smear. The skill is to refuse the dismissal without frightening her into disengagement (state the pathway, balance it honestly with the fact most PMB is benign), name and accommodate the examination dread (choice, chaperone, control), and complete the 2WW referral with a clear safety-net and follow-up.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer (May 2025) — endometrial · NICE NG88 heavy menstrual bleeding · CKS postmenopausal bleeding',
      points:[
        { h:'NG12 2WW — postmenopausal bleeding', t:'Refer women aged 55 and over with postmenopausal bleeding using a suspected cancer (2-week-wait) pathway for endometrial cancer. Use direct-access transvaginal ultrasound to assess endometrial thickness per local pathway. CONSIDER the pathway in women under 55 with PMB. A single episode counts — do not wait for recurrence.' },
        { h:'Define PMB and never dismiss it', t:'Postmenopausal bleeding = bleeding ≥12 months after the last menstrual period (off cyclical HRT). It is the classic presenting symptom of endometrial cancer and must be investigated, even if light, single, or self-limiting. Avoid attributing it to atrophy without assessment.' },
        { h:'Risk factors raise the index of suspicion', t:'Obesity, type 2 diabetes, nulliparity, late menopause, unopposed oestrogen, tamoxifen, PCOS, and family history (Lynch syndrome / endometrial/ovarian/bowel cancer) increase endometrial cancer risk. Their presence reinforces — but their absence does not remove — the need to refer PMB.' },
        { h:'Examine, don\u2019t skip it', t:'Abdominal and pelvic/speculum examination to identify a local cause (cervical lesion, vaginal atrophy, polyp) is part of assessment, alongside cervical screening status. A remote/video booking does not remove the need for in-person examination; accommodate examination anxiety with choice, chaperone and control rather than omitting it.' },
        { h:'Balance honesty and reassurance', t:'Most PMB is benign (commonly atrophic vaginitis/endometrial atrophy), but the purpose of urgent referral is to exclude cancer quickly. State both truthfully: the 2WW is precautionary, not a diagnosis. Address the patient\u2019s unspoken cancer fear directly.' },
        { h:'Never do', t:'Never reassure PMB away as "dryness/probably nothing"; never let a video booking justify skipping examination; never delay the 2WW for baseline tests; never collude with minimisation driven by fear.' },
        { h:'Safety-net & follow-up', t:'Make the NG12 2WW referral today; explain TVUSS ± endometrial biopsy/hysteroscopy; advise on heavier bleeding/pain and the urgent route meanwhile; confirm attendance; track and discuss the result together.' }
      ]
    }
  };

  /* ============ 58. TELEPHONE — Unscheduled bleeding on HRT ============ */
  const c58 = {
    id:'hrt-unscheduled-bleed', title:'"The HRT\u2019s made me bleed again"', type:'telephone', duration:12,
    meta:{ age:54, sex:'F', setting:'Telephone — new bleeding several months into HRT.', system:'Gynae / Unscheduled bleeding on HRT' },
    brief:'Mrs Denise Wu, 54, started continuous combined HRT (estradiol patch + micronised progesterone, taken continuously) 8 months ago for severe vasomotor symptoms. Periods had stopped 18 months before starting. Now reports new vaginal bleeding for the past 5 weeks — initially light, now heavier. Rings wanting to "just stop the HRT". BMI 29. No PV pain. Smoker 10/day. Last cervical screen up to date, normal.',
    script:{
      opening:'"Hi — so I think the HRT\u2019s disagreed with me. I\u2019ve started bleeding again, like having periods back, and it\u2019s been going on over a month now. I assumed a bit of spotting was normal at first but it\u2019s getting heavier. I just want to come off the HRT, to be honest — can you stop it for me? I\u2019d rather put up with the hot flushes than deal with this."',
      facts:[
        { topic:'The bleeding pattern', text:'If clarified: she started CONTINUOUS combined HRT (intended to be bleed-free) 8 months ago — so unscheduled bleeding persisting beyond the first 3\u20136 months, and NEW heavier bleeding after settling, needs evaluation rather than simply being accepted as "normal HRT spotting".' },
        { topic:'The timeline clue',    text:'Unscheduled bleeding in the first 3\u20136 months of continuous combined HRT is common and often settles. But this is at 8 months, persisting 5 weeks and INCREASING — that pattern (new bleeding after the settling window, or persistent/heavy) is the one that prompts assessment and possible referral.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA — she wants to STOP HRT not really because of the bleeding but because a friend was recently diagnosed with breast cancer and she\u2019s become frightened the HRT will "give her cancer"; the bleeding is the excuse to quit. She hasn\u2019t voiced the breast-cancer fear. She also genuinely fears the bleeding itself means womb cancer but won\u2019t say so.' },
        { topic:'The symptom cost',     text:'If explored: her vasomotor symptoms were severe (drenching night sweats, no sleep, low mood, struggling at work) and HRT transformed her life — so simply stopping it, without addressing both the bleeding safely AND her fears, would return her to misery.' },
        { topic:'What she wants',       text:'Officially: stop the HRT to end the bleeding. Actually: reassurance about the breast-cancer fear, proper assessment of the bleeding (which she also secretly fears is cancer), and a way to keep symptom control safely.' },
      ],
      ice:{
        ideas:'The HRT has caused the bleeding and stopping it will fix the problem.',
        concerns:'HIDDEN AGENDA — a friend\u2019s recent breast-cancer diagnosis has her frightened HRT causes cancer (the bleeding is her exit excuse); plus an unvoiced fear the bleeding itself is womb cancer.',
        expectations:'For the GP to stop the HRT. What she actually needs: assessment of unscheduled bleeding (not just stopping HRT), honest breast-cancer risk information, and a plan that keeps her symptom control.'
      },
      cues:['"Just stop the HRT for me" — wanting to quit a treatment that transformed her life; an unspoken reason sits behind it.','Bleeding at 8 months on continuous combined HRT, persistent and increasing — beyond the settling window; needs assessment, not dismissal.','Reluctance/vagueness when symptom relief is mentioned — the real driver (breast-cancer fear) waiting to be named.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises that unscheduled bleeding on continuous combined HRT that is PERSISTENT beyond ~3\u20136 months, or NEW/heavier after initially settling, requires assessment — and does NOT simply stop the HRT and call it solved' },
      { dom:'tasks', text:'Knows the NG12-relevant rule: persistent or unexplained unscheduled bleeding on HRT (especially in this age group) warrants examination and consideration of the postmenopausal-bleeding/endometrial pathway — assess endometrium (TVUSS) and refer per local guidance; tag NICE NG12 where the suspected-cancer threshold is met' },
      { dom:'tasks', text:'Takes a proper bleeding and HRT history: regimen and duration, adherence (missed progesterone → bleeding/endometrial risk), the exact pattern, and arranges/encourages pelvic/speculum examination and cervical screening status check' },
      { dom:'tasks', text:'Surfaces and addresses the BREAST-CANCER fear (the real driver): gives honest, proportionate information — combined HRT is associated with a small increased breast-cancer risk that depends on type/duration and must be weighed against her severe symptoms — without dismissing or overstating' },
      { dom:'tasks', text:'Avoids the trap of simply stopping effective HRT: explains that quitting would return her to severe symptoms and would NOT remove the need to investigate the bleeding; offers to optimise the regimen safely while the bleeding is assessed' },
      { dom:'rto',   text:'Hears that "stop the HRT" carries an unspoken fear and gently explores it, rather than just actioning the request; validates the breast-cancer worry prompted by her friend' },
      { dom:'rto',   text:'Holds a shared-decision stance: respects her autonomy to stop if she chooses, while ensuring she decides with accurate information and that the bleeding is assessed regardless' },
      { dom:'gs',    text:'Safety-nets and follows up: arranges examination/endometrial assessment/referral as indicated, advises on heavier bleeding/pain, addresses smoking, and books follow-up to review both the bleeding result and her symptom control — a complete plan, not a prescription stop' },
    ],
    worked:[
      { lbl:'Slow the "just stop it"', txt:'"I can absolutely stop the HRT if that\u2019s what you decide — but before we do, two things matter. First, the HRT gave you your sleep and your life back, so I don\u2019t want to send you back to those drenching nights without thinking it through. And second, stopping it wouldn\u2019t actually answer the question your bleeding is asking. Let\u2019s do this properly."' },
      { lbl:'Explain the bleeding',   txt:'"Some unscheduled bleeding in the first few months of this kind of HRT is normal and settles. But yours is at eight months, it\u2019s gone on five weeks, and it\u2019s getting heavier — that pattern I don\u2019t just accept. It needs checking: an examination, and usually a scan of the womb lining. There\u2019s national guidance on this, and it\u2019s about making sure nothing\u2019s being missed, not about scaring you."' },
      { lbl:'Find the real worry',    txt:'"Can I gently ask what\u2019s really behind wanting to stop? \u2026 Your friend\u2019s breast cancer. I\u2019m so sorry — that\u2019s frightening, and it makes complete sense it\u2019s changed how you feel about the HRT. I\u2019m really glad you\u2019ve told me, because now we can talk about the actual numbers rather than the fear."' },
      { lbl:'Honest on breast risk',  txt:'"Here\u2019s the honest picture: this type of HRT does carry a small increase in breast-cancer risk, and it depends on the type and how long you take it. But \u2018small\u2019 genuinely means small, and it sits against symptoms that were wrecking your sleep, mood and work. It\u2019s your choice — my job is to make sure you\u2019re choosing with the real figures, not the worst-case in your head. We can also look at lower-risk options."' },
      { lbl:'Two problems, separated', txt:'"So let\u2019s separate them. The bleeding gets assessed whatever you decide about the HRT — that\u2019s non-negotiable for your safety. The HRT decision we make calmly, with the real risk in front of us, and there may be a tweak that suits you better. You don\u2019t have to trade your sleep for your peace of mind."' },
      { lbl:'Safety-net',            txt:'"I\u2019ll arrange the examination and the womb-lining scan, and refer on if needed. If the bleeding gets much heavier or you get pain, contact us sooner. Cutting down the cigarettes helps your overall risk too, and I can support that. Let\u2019s talk again once we have the scan — we\u2019ll decide the HRT together then. Does that feel okay?"' },
    ],
    learning:'Unscheduled bleeding on HRT is not automatically "just the HRT". Bleeding in the first 3\u20136 months of continuous combined HRT is common and usually settles; but bleeding that PERSISTS beyond that window, or is NEW/heavier after settling, requires assessment — examination, endometrial assessment (TVUSS), and referral per local guidance, with the NICE NG12 suspected-endometrial-cancer pathway considered where the threshold is met. The classic error is simply stopping the HRT and considering the problem solved — which both abandons the investigation the bleeding demands and returns the patient to severe symptoms. The examinable hidden agenda is that "stop the HRT" is driven by a friend\u2019s breast-cancer diagnosis and an unspoken fear that HRT (and the bleeding) means cancer. Surface it, give honest proportionate breast-cancer risk information weighed against her severe symptoms, separate the two problems (the bleeding is assessed regardless; the HRT decision is made calmly with real numbers), and keep her symptom control safe.',
    knowledge:{
      guideline:'NICE NG23 menopause · NICE NG12 (endometrial 2WW) · CKS HRT / unscheduled bleeding · BMS guidance',
      points:[
        { h:'Expected vs unscheduled bleeding', t:'Continuous combined HRT is intended to be bleed-free; some unscheduled bleeding in the first 3\u20136 months is common and usually settles. Sequential HRT produces a regular withdrawal bleed. Bleeding that is persistent beyond ~6 months, new after settling, or heavy/irregular is "unscheduled" and needs evaluation.' },
        { h:'Assess and consider NG12', t:'Evaluate unexplained/persistent unscheduled bleeding: examination, cervical screening status, review of adherence (missed progestogen raises endometrial risk), and endometrial assessment (transvaginal ultrasound). Refer per local pathway; where postmenopausal-bleeding/suspected-endometrial-cancer thresholds are met, use the NICE NG12 2-week-wait pathway. Do not simply stop HRT and discharge.' },
        { h:'Don\u2019t just stop effective HRT', t:'Stopping HRT neither investigates the bleeding nor is always necessary, and returns the woman to potentially severe vasomotor/mood/sleep symptoms. Optimise (correct regimen/dose, ensure adequate progestogen, consider LNG-IUS for endometrial protection) while assessing the bleeding.' },
        { h:'Honest breast-cancer risk', t:'Combined (oestrogen + progestogen) HRT is associated with a small increased breast-cancer risk that varies with preparation and duration; oestrogen-only HRT (post-hysterectomy) carries little or no increase. Present absolute, proportionate figures, weigh against symptom burden and quality of life, and support an informed, autonomous decision. Micronised progesterone/transdermal routes have a more favourable profile.' },
        { h:'Address the hidden driver', t:'A request to "just stop the HRT" often masks a specific fear (here a friend\u2019s diagnosis). Surface and name it; correct misconceptions with real numbers; separate the safety investigation (mandatory) from the treatment decision (shared).' },
        { h:'Never do', t:'Never accept persistent/heavy unscheduled bleeding as "normal HRT"; never stop HRT as a substitute for investigating the bleeding; never overstate or dismiss breast-cancer risk; never action "stop it" without exploring the unspoken reason.' },
        { h:'Safety-net & follow-up', t:'Arrange examination/endometrial assessment/referral; advise on heavier bleeding/pain and urgent routes; address smoking; follow up to review the result and decide the HRT together with accurate risk information.' }
      ]
    }
  };

  /* ============ 59. TELEPHONE — Heavy menstrual bleeding with fibroids ============ */
  const c59 = {
    id:'hmb-fibroids', title:'"I can\u2019t leave the house on my heavy days"', type:'telephone', duration:12,
    meta:{ age:43, sex:'F', setting:'Telephone — heavy periods; scan shows fibroids.', system:'Gynae / Heavy menstrual bleeding' },
    brief:'Ms Folake Adeyemi, 43, accountant, two children. Heavy menstrual bleeding worsening over 2 years; a recent pelvic ultrasound (arranged by a colleague) shows several intramural fibroids, largest 4 cm; normal endometrium. Hb 104 (low), ferritin 8 (low). Rings for the results. Flooding, clots, changing protection hourly on bad days, exhausted. Periods regular. No intermenstrual/postcoital bleeding. Smear up to date.',
    script:{
      opening:'"Hi, I\u2019m ringing about my scan. Someone said it showed fibroids? I sort of expected that. Look, I\u2019ve basically learned to live with my periods — I plan my life around them, I know which days I can\u2019t go into the office. But I\u2019m so tired all the time now and the bleeding\u2019s ridiculous. I suppose I just want to know what the fibroids mean and whether I need an operation, or whether I just carry on coping."',
      facts:[
        { topic:'The bleeding burden',  text:'If explored: flooding through clothes, passing clots, changing pads/tampons hourly on heavy days, taking days off, avoiding leaving home — significant impact on quality of life and work. Two years, gradually worse. Regular cycle, no IMB/PCB (reassuring re sinister causes), normal endometrium on scan.' },
        { topic:'The anaemia',          text:'If asked about symptoms: tired, breathless on stairs, "look grey", palpitations occasionally — consistent with iron-deficiency anaemia (Hb 104, ferritin 8) from chronic blood loss. She has normalised feeling exhausted.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA — reachable with gentle exploration: she is quietly grieving/anxious about fertility and "being made to have a hysterectomy". She and a new partner have talked about possibly trying for a baby; she\u2019s terrified treatment means losing her womb, so she\u2019s been AVOIDING seeking help and "coping" — minimising to dodge a feared outcome.' },
        { topic:'The coping normalisation', text:'If reached: she\u2019s endured this for years because she assumed the only option was surgery/hysterectomy; nobody told her about effective medical options. The "do I just carry on coping" is resignation, not preference.' },
        { topic:'What she wants',       text:'Officially: to know if she needs an operation. Actually: to be told there are options that DON\u2019T mean losing her womb or her fertility, treatment for the exhausting anaemia, and that she doesn\u2019t have to keep planning her life around flooding.' },
      ],
      ice:{
        ideas:'Fibroids probably mean she needs an operation (a hysterectomy), or else she just has to keep coping.',
        concerns:'HIDDEN AGENDA — fear that treatment means a hysterectomy and the end of any chance of a baby with her new partner, which has made her avoid help and "cope" for years.',
        expectations:'To find out whether surgery is needed. What she actually needs: the full options ladder (medical first, fertility-sparing), treatment of her iron-deficiency anaemia, and reassurance that hysterectomy is not the only road.'
      },
      cues:['"I\u2019ve learned to live with it / do I just carry on coping" — resignation from believing surgery is the only option.','Hb 104, ferritin 8 with hourly flooding — significant anaemia she\u2019s normalised; needs active treatment.','Hesitation around the future/partner — the fertility fear driving years of avoidance.']
    },
    checkpoints:[
      { dom:'tasks', text:'Interprets the results in context: heavy menstrual bleeding with small intramural fibroids (largest 4 cm) and a normal endometrium, regular cycle, no IMB/PCB — a benign picture; explains fibroids are common and not cancer, and that the normal lining is reassuring' },
      { dom:'tasks', text:'Actively treats the iron-deficiency anaemia (Hb 104, ferritin 8): iron replacement, dietary advice, and recheck — recognising she has normalised significant anaemia and that this is causing her exhaustion' },
      { dom:'tasks', text:'Lays out the HMB options LADDER rather than jumping to surgery: first-line LNG-IUS (Mirena) where suitable; non-hormonal tranexamic acid and/or mefenamic acid for/at periods; combined hormonal or progestogen options; and only then referral for uterine-preserving procedures (e.g. myomectomy, uterine artery embolisation, ablation) or hysterectomy — matched to her priorities' },
      { dom:'tasks', text:'Centres FERTILITY in the decision once disclosed: explains uterus- and fertility-preserving options exist (medical management, myomectomy) and that hysterectomy is a last resort and a choice, not an inevitability — directly dismantling the fear that drove years of avoidance' },
      { dom:'tasks', text:'Confirms the benign/red-flag picture appropriately: no postcoital/intermenstrual bleeding, normal endometrium and up-to-date smear lower concern; knows what WOULD change management (rapid fibroid growth, postmenopausal bleeding, abnormal endometrium) and safety-nets for it' },
      { dom:'rto',   text:'Hears the resignation and the unspoken fertility fear, and explores it gently rather than just answering the surgery question; validates years of silent coping' },
      { dom:'rto',   text:'Restores agency: frames this as her choice among real options aligned to what matters to her (fertility, work, quality of life), not a verdict imposed' },
      { dom:'gs',    text:'Agrees a shared plan with follow-up: start iron + a first-line bleeding treatment now, refer to gynaecology for fibroid/fertility-aware options, recheck Hb, and review — leaving her with relief and a route, not "carry on coping"' },
    ],
    worked:[
      { lbl:'Reframe the results',    txt:'"Good news first: your scan shows fibroids — which are extremely common, benign growths of the womb muscle, not cancer — and the lining of your womb looks completely normal, which is reassuring. The fibroids explain the heavy bleeding, and crucially, heavy bleeding from fibroids has lots of treatment options, most of which are nothing to do with surgery."' },
      { lbl:'Name the anaemia',       txt:'"There\u2019s something we need to treat right now though: all that blood loss has left you properly anaemic and short of iron — that\u2019s why you\u2019re exhausted, grey and breathless on the stairs. You\u2019ve normalised feeling awful. Let\u2019s start iron today and get that back up; you should feel like a different person."' },
      { lbl:'Surface the real fear',  txt:'"Can I check something? You asked if you \u2018just carry on coping\u2019 — and I get the sense you\u2019ve put up with this for years. Is part of that a worry about what treatment would mean — an operation, maybe losing the chance of a baby? \u2026 Thank you for trusting me with that. That changes everything about how we approach this, in a good way."' },
      { lbl:'Dismantle the fear',     txt:'"So let me take the frightening version off the table: a hysterectomy is the LAST option, and it\u2019s a choice, never something done to you. There are treatments that calm the bleeding while completely protecting your womb and your fertility — and if you and your partner might want a baby, that shapes which path we choose. You haven\u2019t been coping for nothing, but you also didn\u2019t need to suffer this long."' },
      { lbl:'The options ladder',     txt:'"Here\u2019s the menu. The lightest touch: a tablet called tranexamic acid you take only on your heavy days to cut the flooding, sometimes with an anti-inflammatory. A very effective option is a hormone coil that often makes periods light or stops them, and protects the womb. Beyond that, if needed, there are procedures that remove just the fibroids and keep the womb. We start gentle and step up only if we need to."' },
      { lbl:'Shared plan + net',      txt:'"My suggestion: start iron and tranexamic acid now for quick relief, and I\u2019ll refer you to gynaecology making it clear fertility matters to you, so they discuss womb-preserving options. We\u2019ll recheck your blood count. And do tell me if you ever get bleeding between periods or after sex, or anything new — that we\u2019d look at separately. You came in asking \u2018do I need an operation or just cope?\u2019 The real answer is: neither — you have choices."' },
    ],
    learning:'Heavy menstrual bleeding with small fibroids, a normal endometrium, a regular cycle and no intermenstrual/postcoital bleeding is a benign picture — fibroids are common and not cancer, and the normal lining is reassuring. Two clinical tasks are easily missed: actively treating the iron-deficiency anaemia (Hb 104, ferritin 8) that the patient has normalised into "just tired", and laying out the full HMB options LADDER (LNG-IUS first-line; tranexamic/mefenamic acid; hormonal options; then uterus-preserving procedures; hysterectomy only as a last-resort choice) rather than jumping to surgery. The examinable hidden agenda is a fertility fear: she has "coped" for years because she believed treatment meant a hysterectomy and the end of a possible baby with her new partner. Surfacing and dismantling that — fertility-sparing options exist, hysterectomy is a choice not an inevitability — restores agency and is the heart of the consultation. Confirm the benign/red-flag picture, safety-net for what would change management, and agree a shared, stepped plan.',
    knowledge:{
      guideline:'NICE NG88 heavy menstrual bleeding · CKS menorrhagia / fibroids · NICE NG12 (consider where red flags)',
      points:[
        { h:'Assess impact and exclude red flags', t:'HMB is defined by impact on quality of life, not a volume threshold. History should cover flooding/clots, cycle regularity, intermenstrual/postcoital bleeding, pressure symptoms, and anaemia. Regular cycles, normal endometrium and no IMB/PCB are reassuring; IMB/PCB, postmenopausal bleeding, or abnormal endometrium prompt the suspected-cancer pathway (NG12).' },
        { h:'Treat the anaemia', t:'Chronic HMB commonly causes iron-deficiency anaemia, often normalised by the patient. Check FBC and ferritin; replace iron, give dietary advice, recheck. Treating anaemia transforms symptoms independent of definitive HMB management.' },
        { h:'Options ladder (NG88)', t:'If no structural cause or small fibroids (<3 cm) without distortion: LNG-IUS first-line; alternatives tranexamic acid (antifibrinolytic, taken during menses), NSAIDs (mefenamic acid), combined hormonal contraception, or cyclical oral progestogens. For larger/symptomatic fibroids: pharmacological options, uterine artery embolisation, myomectomy (uterus-sparing), endometrial ablation (only if family complete), or hysterectomy. Match to the woman\u2019s priorities.' },
        { h:'Centre fertility in the decision', t:'Fertility wishes change the algorithm: prefer medical management and uterus-preserving surgery (myomectomy); avoid ablation (not for those wanting future pregnancy). Hysterectomy is a last-resort, fully-informed CHOICE — never the default. Many women over-anticipate hysterectomy and avoid care; correcting this is therapeutic.' },
        { h:'Examine/investigate appropriately', t:'Pelvic examination, cervical screening status, FBC/ferritin; ultrasound for structural assessment (already done here). Tailor further investigation to the picture.' },
        { h:'Never do', t:'Never jump to surgery/hysterectomy without the ladder; never miss or undertreat the anaemia; never ignore the fertility/uterus-preservation agenda; never overlook IMB/PCB/PMB red flags that change the pathway.' },
        { h:'Safety-net & follow-up', t:'Start iron + first-line bleeding treatment; refer with fertility priorities flagged; recheck Hb; review symptom control; safety-net for new IMB/PCB/PMB or rapid change.' }
      ]
    }
  };

  /* ============ 60. VIDEO — Bleeding at 9 weeks: threatened miscarriage ============ */
  const c60 = {
    id:'early-preg-bleed', title:'"I lost the last one — is this happening again?"', type:'video', duration:12,
    meta:{ age:29, sex:'F', setting:'Video consultation — light bleeding at 9 weeks pregnant.', system:'Early pregnancy / Threatened miscarriage' },
    brief:'Mrs Leila Haddad, 29, 9 weeks pregnant (much wanted). Light fresh PV bleeding since this morning, like a light period, mild cramping. No dizziness, no shoulder-tip pain, no heavy flooding, no syncope. Previous early miscarriage at 7 weeks last year. Blood group O Rh-positive. Rings frightened. PMH: nil. Folic acid. No prior ectopic; this is an intrauterine pregnancy on an early private scan 1 week ago (fetal heartbeat seen).',
    script:{
      opening:'(Anxious.) "Doctor, I\u2019ve started bleeding and I\u2019m nine weeks and I\u2019m so scared because I lost my last baby and it started exactly like this. It\u2019s not heaps of blood but it\u2019s red and I\u2019ve got some cramping and I just — please tell me what to do. Is it happening again? Is there anything I can take to stop it? I\u2019ll do anything."',
      facts:[
        { topic:'The bleeding',         text:'If explored: light fresh red bleeding, like a light period, started this morning; mild lower cramps; NO heavy flooding/clots, NO dizziness or fainting, NO shoulder-tip pain, NO severe one-sided pain. A scan a week ago confirmed an intrauterine pregnancy with a heartbeat — so threatened miscarriage is the working frame, ectopic much less likely (but bleeding+pain always prompts the question).' },
        { topic:'The previous loss',     text:'Previous miscarriage at 7 weeks last year; she is reliving it and assuming the same outcome. The trauma is driving the consultation.' },
        { topic:'The hidden agenda',     text:'HIDDEN AGENDA — guilt and a sense of agency: she believes the bleeding may be her fault (she went to the gym yesterday, had sex, carried shopping) and is desperate for "something to take to stop it", and quietly punishing herself. She needs to hear that early bleeding is common, often settles, and is NOT caused by normal activity — and that there is no tablet that changes the outcome, without that feeling like abandonment.' },
        { topic:'The need for action',    text:'She wants to DO something. The right "something" is timely EPAU assessment (scan), not bed rest myths or a useless prescription; she needs a concrete plan to hold onto.' },
        { topic:'What she wants',        text:'Officially: a tablet to stop the bleeding and to know if she\u2019s losing the baby. Actually: to be assessed quickly (EPAU), to have the self-blame lifted, honest information that bleeding doesn\u2019t always mean miscarriage, and to not be alone with the fear.' },
      ],
      ice:{
        ideas:'Bleeding means she is miscarrying again, like last time, and maybe she caused it (gym, sex, lifting).',
        concerns:'HIDDEN AGENDA — guilt that her activity caused the bleeding, and trauma from a previous miscarriage; terror of reliving it.',
        expectations:'A treatment to stop the bleeding and save the pregnancy. What she actually needs: prompt EPAU assessment, lifting of self-blame, honest information, and support — there is no tablet that alters the outcome.'
      },
      cues:['"It started exactly like this last time" — trauma reliving; respond to distress before facts.','"Is there anything I can take / I\u2019ll do anything" — desperate for agency; give a concrete plan (EPAU), not a myth.','Mentions the gym/sex/shopping — the self-blame she needs lifted with evidence.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises threatened miscarriage as the working diagnosis (light bleeding ± mild cramps in a confirmed intrauterine pregnancy) while ALWAYS screening for ectopic and significant haemorrhage: severe/one-sided pain, shoulder-tip pain, dizziness/syncope, heavy flooding, shoulder pain — none present here, but actively excluded' },
      { dom:'tasks', text:'Arranges appropriate assessment via the EARLY PREGNANCY UNIT (EPAU): explains she should be seen for a scan to check the pregnancy, gives the route, and recognises this is the meaningful "action" — not a useless prescription or unproven bed rest' },
      { dom:'tasks', text:'Gives honest, evidence-based information: bleeding in early pregnancy is common and many such pregnancies continue; a scan a week ago showing a heartbeat is reassuring; but is truthful that the outcome cannot be guaranteed and there is no medication that prevents miscarriage in this setting' },
      { dom:'tasks', text:'Addresses Rh status / anti-D appropriately: knows anti-D is not required for threatened miscarriage before 12 weeks (and she is Rh-positive anyway) — i.e. does not mismanage rhesus, and knows when it WOULD matter' },
      { dom:'tasks', text:'LIFTS the self-blame explicitly: normal activity (gym, sex, lifting, work) does NOT cause miscarriage; early miscarriage is almost always chromosomal and not the mother\u2019s doing — directly countering the guilt driving her' },
      { dom:'rto',   text:'Responds to the trauma and fear FIRST — acknowledges the previous loss and the terror of reliving it — before delivering information; does not lead with clinical facts at a frightened woman' },
      { dom:'rto',   text:'Gives genuine, non-false reassurance: cannot promise the pregnancy, but can promise prompt assessment, honest answers, and that she will not face it alone' },
      { dom:'gs',    text:'Safety-nets precisely: red flags warranting urgent/emergency care (heavy flooding, severe/one-sided or shoulder-tip pain, dizziness/collapse → 999/EPAU/A&E), the EPAU plan and timing, emotional support and follow-up, and what to expect from the scan' },
    ],
    worked:[
      { lbl:'Distress first',         txt:'"Leila, I can hear how frightened you are, and after losing your last baby this must be terrifying — of course your mind has gone straight back there. Let\u2019s take this slowly together and I\u2019ll make sure you have a clear plan by the end of this call. You\u2019re not on your own with it."' },
      { lbl:'Honest, balanced frame', txt:'"Here\u2019s the truthful picture: bleeding in early pregnancy is really common, and a lot of pregnancies with some bleeding carry on completely normally — especially as your scan a week ago showed a heartbeat, which is genuinely reassuring. I can\u2019t promise you what\u2019s happening today, and I won\u2019t pretend to. But bleeding does NOT automatically mean you\u2019re losing the baby."' },
      { lbl:'Lift the guilt',         txt:'"And I need to say this clearly, because I think you\u2019re carrying it: going to the gym, having sex, carrying shopping — none of those cause a miscarriage. Nothing you did brought this on. When early losses happen they\u2019re almost always to do with how the pregnancy first formed, decided long before today, and never the mother\u2019s fault. Please don\u2019t add blame to your fear."' },
      { lbl:'Give real action',       txt:'"You said you\u2019d do anything — so here\u2019s the thing that actually helps: not a tablet, but getting you seen. I\u2019m going to arrange for the early pregnancy unit to scan you, so we can see what\u2019s happening rather than guess. There isn\u2019t a medicine that changes the outcome at this stage, and bed rest doesn\u2019t either — but a scan gives you answers, and that\u2019s the real action."' },
      { lbl:'Safety-net clearly',     txt:'"While we sort that, watch for these: heavy bleeding soaking pads, severe or one-sided tummy pain, pain in the tip of your shoulder, or feeling faint or dizzy — any of those, ring 999 or go to A&E straight away, because just occasionally bleeding needs urgent care. What you have now — light bleeding, mild cramps, feeling otherwise okay — is the kind we assess through the early pregnancy unit."' },
      { lbl:'Hold her',               txt:'"I\u2019ll get the EPAU to contact you, and I\u2019ll follow up to make sure you\u2019ve been seen. Whatever the scan shows, you won\u2019t go through it without support — there\u2019s help either way. You came in asking if it\u2019s happening again and what you can take. The honest answers are: we don\u2019t know yet, and the best thing isn\u2019t a tablet — it\u2019s getting you that scan, today."' },
    ],
    learning:'Light bleeding with mild cramps in a confirmed early intrauterine pregnancy is threatened miscarriage — but the question of ectopic and significant haemorrhage must always be screened (severe/one-sided pain, shoulder-tip pain, dizziness/syncope, heavy flooding); here they are absent and a recent scan showed a heartbeat. The meaningful "action" is prompt EPAU assessment (a scan), not an outcome-changing tablet (there isn\u2019t one) or unproven bed rest. Rh status is handled correctly (anti-D not required for threatened miscarriage <12 weeks; she is Rh-positive regardless). But the case is really about communication: respond to the trauma of a previous loss FIRST, give honest balanced information (bleeding is common and many pregnancies continue, but no guarantees), and — the examinable hidden agenda — LIFT the self-blame: normal activity does not cause miscarriage and early loss is almost always chromosomal, never the mother\u2019s fault. Offer genuine non-false reassurance, a concrete EPAU plan, precise emergency safety-netting, and support whatever the outcome.',
    knowledge:{
      guideline:'NICE NG126 ectopic pregnancy & miscarriage · EPAU pathways · anti-D guidance (early pregnancy)',
      points:[
        { h:'Frame and screen simultaneously', t:'Light bleeding ± mild cramping in a confirmed intrauterine pregnancy = threatened miscarriage. ALWAYS screen for ectopic and haemorrhage: severe/lateralised abdominal pain, shoulder-tip pain, dizziness/syncope, heavy bleeding/clots, haemodynamic compromise → emergency. A prior scan confirming intrauterine pregnancy with a heartbeat reduces (not eliminates) concern and is reassuring re viability.' },
        { h:'EPAU is the action', t:'Refer to the Early Pregnancy Assessment Unit for ultrasound assessment per local pathway. This is the meaningful intervention. There is no medication that prevents threatened miscarriage at this stage, and bed rest is not evidence-based — do not offer false treatments; offer assessment and information.' },
        { h:'Honest, non-false reassurance', t:'Bleeding occurs in a large proportion of early pregnancies and many continue normally; convey this truthfully while not guaranteeing the outcome. Balance hope with honesty; avoid both catastrophising and empty promises.' },
        { h:'Anti-D / rhesus', t:'Anti-D prophylaxis is NOT required for threatened or complete miscarriage before 12 weeks (and is irrelevant if the woman is Rh-positive). Know the situations where anti-D matters (e.g. surgical management, later gestations, significant bleeding per guidance) so rhesus is neither over- nor under-managed.' },
        { h:'Lift the self-blame', t:'Normal activity — exercise, intercourse, lifting, work, stress — does NOT cause miscarriage. Most early losses are chromosomal and not preventable or the mother\u2019s fault. Actively counter the guilt patients carry; it is both compassionate and clinically important.' },
        { h:'Respond to trauma first', t:'A previous loss makes this acutely traumatic. Acknowledge the fear and the past loss before delivering facts; pace the consultation; provide emotional support and signpost miscarriage support services.' },
        { h:'Never do', t:'Never miss ectopic/haemorrhage red flags; never offer a tablet or bed rest as if they change the outcome; never give false guarantees or cold facts first; never leave the self-blame unaddressed; never mismanage anti-D.' },
        { h:'Safety-net & follow-up', t:'Precise emergency red flags (heavy bleeding, severe/one-sided or shoulder-tip pain, dizziness/collapse → 999/A&E); EPAU referral and timing; emotional support and follow-up; clear expectations of the scan and of support whatever the outcome.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c57, c58, c59, c60);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'pmb-endometrial': {
      ceg: ['Long-term conditions & cancer', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Carol Easton', age: '61 years · female',
        pmh: ['Postmenopausal 10 years (LMP age 51)', 'Type 2 diabetes, hypertension, BMI 33, nulliparous', 'Never on HRT; mother had "womb trouble"'],
        meds: ['Metformin', 'Ramipril', 'Atorvastatin'],
        allergy: 'NKDA',
        recent: '⚠ One episode of fresh PV spotting 2 days ago. Booked a VIDEO appointment; keen to be reassured and avoid examination/tests.',
        reason: 'Video consultation — one episode of postmenopausal bleeding.'
      },
      timeMap: [
        { t:'0–2',  h:'Refuse the dismissal', d:'"Probably nothing, I nearly cancelled." Any postmenopausal bleeding is a red flag — don\u2019t reassure it away. Glad she came.' },
        { t:'2–4',  h:'Name the NG12 pathway', d:'PMB at 55+ → urgent 2-week-wait referral for endometrial cancer; direct-access transvaginal ultrasound. Restate as the action, tagged NICE NG12.' },
        { t:'4–6',  h:'Risk + balance',        d:'Obesity, T2DM, nulliparity, family history raise concern — but most PMB is benign (atrophy). 2WW is precautionary, not a diagnosis.' },
        { t:'6–9',  h:'Meet the fear + exam',  d:'Surface the cancer fear (mother\u2019s "womb trouble"). Accommodate the examination dread (bad smear) with choice, chaperone, control — don\u2019t skip it because she booked video.' },
        { t:'9–12', h:'Refer + safety-net',    d:'2WW referral today; explain TVUSS ± biopsy/hysteroscopy; heavier bleeding/pain → urgent route; confirm attendance; follow up the result together.' }
      ],
      wordPics: {
        fail: 'Accepts "probably dryness", reassures over video and sends her away; misses that PMB is a mandatory NG12 2WW; skips examination because she booked video; never surfaces the cancer fear — a potentially fatal miss dressed as kindness.',
        pass: 'Recognises PMB as a red flag, makes the 2WW endometrial referral, arranges examination, and safety-nets; mentions the risk factors.',
        exc:  'Refuses the fear-driven dismissal without frightening her off; states the NG12 2WW pathway and TVUSS precisely and balances it honestly (most PMB is benign); names the unspoken cancer fear and accommodates the examination dread with genuine choice and control; and completes the referral with a clear safety-net and personal follow-up of the result.'
      },
      avoid: [
        { dont:'"A one-off little bleed after the menopause is usually just dryness — try not to worry."', instead:'"Any bleeding after the menopause, even once, needs an urgent check — national guidance says a two-week-wait referral with a scan of the womb lining. Most turn out benign, but we make sure quickly."', why:'Reassuring PMB away as "dryness" misses a mandatory NG12 2WW endometrial-cancer pathway.' },
        { dont:'"Since you\u2019re on video and it\u2019s stopped, we probably don\u2019t need to examine you."', instead:'"I do need to examine you in person to look for a local cause — I know exams have been hard for you before, so you\u2019re in control, with a chaperone, and we stop whenever you say."', why:'A video booking and a settled symptom don\u2019t remove the need for examination; skipping it is unsafe.' },
        { dont:'"Let\u2019s do some blood tests first and see how things go before referring."', instead:'"This goes straight onto the urgent two-week pathway today — that takes priority; we don\u2019t wait on other tests for postmenopausal bleeding."', why:'Delaying the 2WW for baseline tests is exactly the dawdling NG12 is designed to prevent.' }
      ]
    },

    'hrt-unscheduled-bleed': {
      ceg: ['Gender, reproductive & sexual health', 'Prescribing & pharmacology'],
      stem: {
        name: 'Denise Wu', age: '54 years · female',
        pmh: ['Continuous combined HRT 8 months (estradiol patch + micronised progesterone)', 'Menopausal 18 months before starting; severe vasomotor symptoms', 'BMI 29, smoker 10/day; smear up to date'],
        meds: ['Estradiol patch', 'Micronised progesterone (continuous)'],
        allergy: 'NKDA',
        recent: '⚠ New vaginal bleeding 5 weeks, initially light now heavier (at 8 months on continuous combined HRT). Wants to stop HRT.',
        reason: 'Telephone — "the HRT has made me bleed; please stop it".'
      },
      timeMap: [
        { t:'0–2',  h:'Slow "just stop it"',  d:'She wants to quit a treatment that gave her life back. Don\u2019t simply action it — an unspoken reason sits behind it.' },
        { t:'2–4',  h:'Explain the bleeding', d:'Early spotting settles; this is at 8 months, persistent and heavier — beyond the window. Needs examination + endometrial assessment, not dismissal.' },
        { t:'4–6',  h:'Assess + NG12',         d:'Examination, adherence check (missed progesterone), TVUSS; consider the NG12 endometrial pathway where the threshold is met. Stopping HRT doesn\u2019t investigate it.' },
        { t:'6–9',  h:'Find the real fear',    d:'The friend\u2019s breast cancer. Honest, proportionate risk (small, type/duration-dependent) vs her severe symptoms; offer lower-risk options.' },
        { t:'9–12', h:'Separate + safety-net', d:'Bleeding assessed whatever she decides; HRT decision made calmly with real numbers; address smoking; review the scan and decide together.' }
      ],
      wordPics: {
        fail: 'Simply stops the HRT and considers it solved — abandoning the investigation the bleeding demands and returning her to severe symptoms; never explores why she wants to quit, so the breast-cancer fear and the womb-cancer fear stay hidden.',
        pass: 'Recognises unscheduled bleeding beyond the settling window needs assessment, arranges examination/endometrial assessment, gives honest breast-cancer risk, and avoids simply stopping HRT.',
        exc:  'Slows the "just stop it" and separates the two problems; assesses the bleeding (exam, adherence, TVUSS, NG12 where relevant) regardless of the HRT decision; surfaces the friend\u2019s-diagnosis fear and gives proportionate absolute risk against her severe symptoms; offers lower-risk regimens; and keeps her symptom control while making the decision shared and informed.'
      },
      avoid: [
        { dont:'"No problem, I\u2019ll stop the HRT for you and that should sort the bleeding."', instead:'"I can stop it if you decide to — but stopping wouldn\u2019t answer what the bleeding\u2019s telling us, and it\u2019d send you back to those drenching nights. Let\u2019s assess the bleeding properly first."', why:'Stopping HRT neither investigates persistent unscheduled bleeding nor is necessarily required; it abandons a safety task.' },
        { dont:'"Some bleeding on HRT is normal, so I wouldn\u2019t worry about it."', instead:'"Early spotting is normal, but yours is at eight months, lasting five weeks and getting heavier — that pattern I do need to check with an examination and a womb-lining scan."', why:'Persistent/heavy bleeding beyond the settling window is not "normal HRT" and may meet the endometrial pathway.' },
        { dont:'"HRT and breast cancer — honestly the risk is tiny, don\u2019t give it another thought."', instead:'"There is a small increase with this type, depending on duration — small genuinely means small, set against symptoms that were wrecking your life. It\u2019s your choice with the real numbers, and there are lower-risk options."', why:'Waving the fear away (or overstating it) blocks the informed, shared decision she actually needs.' }
      ]
    },

    'hmb-fibroids': {
      ceg: ['Gender, reproductive & sexual health', 'Long-term conditions & cancer'],
      stem: {
        name: 'Folake Adeyemi', age: '43 years · female',
        pmh: ['Heavy menstrual bleeding worsening 2 years; two children', 'Pelvic USS: intramural fibroids (largest 4 cm), normal endometrium', 'Hb 104, ferritin 8 (iron-deficiency anaemia)'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Flooding, clots, hourly protection on heavy days, days off work. Regular cycle, no IMB/PCB; smear up to date. New partner; possible future pregnancy.',
        reason: 'Telephone — scan results for heavy periods.'
      },
      timeMap: [
        { t:'0–2',  h:'Reframe the results', d:'Fibroids are common, benign, not cancer; normal endometrium is reassuring. They explain the bleeding — and there are many non-surgical options.' },
        { t:'2–4',  h:'Treat the anaemia',   d:'Hb 104, ferritin 8 with hourly flooding — significant iron-deficiency she\u2019s normalised. Start iron today; that alone transforms how she feels.' },
        { t:'4–6',  h:'Surface the fear',     d:'"Do I just carry on coping?" is resignation. Gently uncover the fertility/hysterectomy fear that drove years of avoidance.' },
        { t:'6–9',  h:'Options ladder',       d:'Tranexamic/mefenamic acid on heavy days; LNG-IUS; then uterus-preserving procedures (myomectomy). Hysterectomy is a last-resort CHOICE, not inevitable.' },
        { t:'9–12', h:'Shared plan + net',     d:'Start iron + tranexamic acid now; refer with fertility flagged; recheck Hb; safety-net for new IMB/PCB/PMB. "Neither cope nor operate — you have choices."' }
      ],
      wordPics: {
        fail: 'Jumps to "you may need surgery", or tells her to keep coping; misses the iron-deficiency anaemia driving her exhaustion; never surfaces the fertility fear, so she leaves still believing hysterectomy is the only road and still avoiding care.',
        pass: 'Reads the benign picture, treats the anaemia, lays out the options ladder, and refers; checks red flags.',
        exc:  'Reframes fibroids reassuringly and actively treats the normalised anaemia; surfaces and dismantles the fertility/hysterectomy fear that caused years of silent coping; offers the full stepped ladder centred on her priorities with uterus-preserving options; and restores agency — "neither just cope nor straight to surgery" — with a shared plan and red-flag safety-net.'
      },
      avoid: [
        { dont:'"With fibroids like these you\u2019ll probably end up needing an operation."', instead:'"Fibroids this size with heavy bleeding have lots of non-surgical options — tablets for the heavy days, a hormone coil — and even if we ever needed a procedure, there are ones that keep your womb."', why:'Defaulting to surgery feeds the exact fear that made her avoid care for years.' },
        { dont:'"Your tiredness is probably just the heavy periods — nothing to worry about."', instead:'"That tiredness is real anaemia — Hb low, iron stores almost empty. Let\u2019s treat it today; you should feel like a different person."', why:'Normalising significant iron-deficiency anaemia misses an easy, transformative intervention.' },
        { dont:'"We\u2019ll get you referred and the gynaecologist will decide what\u2019s best."', instead:'"Before you might want a baby with your partner matters a lot here — I\u2019ll flag fertility in the referral so they discuss womb-preserving options, and we start relief now."', why:'Handing her to a faceless referral without surfacing the fertility agenda misses the heart of the consultation.' }
      ]
    },

    'early-preg-bleed': {
      ceg: ['Gender, reproductive & sexual health', 'Urgent & unscheduled care'],
      stem: {
        name: 'Leila Haddad', age: '29 years · female',
        pmh: ['9 weeks pregnant (much wanted); intrauterine pregnancy with heartbeat on scan 1 week ago', 'Previous miscarriage at 7 weeks last year', 'Blood group O Rh-positive'],
        meds: ['Folic acid'],
        allergy: 'NKDA',
        recent: '⚠ Light fresh PV bleeding since this morning + mild cramps. No flooding, dizziness, shoulder-tip or severe one-sided pain. Frightened, blaming gym/sex/lifting.',
        reason: 'Video consultation — bleeding in early pregnancy.'
      },
      timeMap: [
        { t:'0–2',  h:'Distress first',       d:'She\u2019s reliving last year\u2019s loss. Acknowledge the fear and the previous miscarriage before any facts; promise a clear plan.' },
        { t:'2–4',  h:'Screen while framing',  d:'Threatened miscarriage is the working frame (heartbeat a week ago), but actively exclude ectopic/haemorrhage: one-sided/shoulder-tip pain, dizziness, flooding — all absent.' },
        { t:'4–6',  h:'Honest + lift blame',   d:'Bleeding is common and many pregnancies continue; no guarantees. Gym/sex/lifting do NOT cause miscarriage; early loss is chromosomal, never her fault.' },
        { t:'6–9',  h:'Real action = EPAU',    d:'No tablet or bed rest changes the outcome — the meaningful action is an EPAU scan. Anti-D not needed (<12/40, Rh-positive anyway).' },
        { t:'9–12', h:'Safety-net + hold',     d:'Heavy flooding, severe/one-sided or shoulder-tip pain, dizziness → 999/A&E. EPAU referral + timing; emotional support; follow up; support whatever the outcome.' }
      ],
      wordPics: {
        fail: 'Leads with clinical facts at a terrified woman; offers a pointless prescription or bed rest as if it helps; misses the ectopic screen or mismanages anti-D; leaves the self-blame intact — and gives either false guarantees or cold prognostication.',
        pass: 'Frames threatened miscarriage while screening red flags, refers to EPAU, gives honest information, handles anti-D correctly, and safety-nets.',
        exc:  'Responds to the trauma and fear first; screens ectopic/haemorrhage thoroughly though absent; gives honest balanced information without false promises; explicitly lifts the self-blame with evidence; makes EPAU the real "action" rather than a myth; handles anti-D correctly; and safety-nets precisely while promising support whatever the scan shows.'
      },
      avoid: [
        { dont:'"Bleeding in pregnancy often means a miscarriage is starting, I\u2019m afraid."', instead:'"Bleeding is really common and lots of pregnancies with it carry on completely normally — your scan a week ago showed a heartbeat, which is reassuring. I can\u2019t promise, but bleeding doesn\u2019t mean you\u2019re losing the baby."', why:'Leading with the worst case at a frightened, previously-bereaved woman is both inaccurate and cruel.' },
        { dont:'"Take it easy, rest up in bed, and I\u2019ll give you something to help."', instead:'"There isn\u2019t a tablet or bed rest that changes this — the thing that genuinely helps is getting you scanned at the early pregnancy unit so you have answers."', why:'Offering bed rest/medication as if they alter the outcome is false reassurance and delays the real action.' },
        { dont:'"Did you do anything strenuous that might have brought it on?"', instead:'"Nothing you did caused this — the gym, sex, lifting don\u2019t cause miscarriage. Early losses are almost always about how the pregnancy first formed, never the mother\u2019s fault."', why:'Implying activity caused it reinforces exactly the self-blame that is tormenting her.' }
      ]
    }
  });

})();
