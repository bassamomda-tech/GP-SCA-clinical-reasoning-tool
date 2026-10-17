/* ============================================================
   Reasoning GP — Case Library batch 49:
   "HRT, honest numbers & the hormones in between"
   Four ORIGINAL cases: HRT counselling (symptoms/options/risk),
   the "does HRT cause breast cancer?" risk-communication station,
   no periods on desogestrel (reassurance vs test first), and
   recurrent stress fractures in a runner (RED-S + eating screen).
   NG12 vigilance is stated where a red flag genuinely maps
   (e.g. postmenopausal/unscheduled bleeding); otherwise none is
   invented.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases48.js.
   ============================================================ */

(function(){

  /* ====== 189. F2F — HRT counselling: symptoms, options, honest risk ====== */
  const c189 = {
    "id": "hrt-counselling",
    "title": "“My periods are all over the place, I’m not sleeping and I can’t think straight — is this the change, or something worse?”",
    "type": "video",
    "duration": 12,
    "meta": {
      "age": 46,
      "sex": "F",
      "setting": "Video consultation — irregular periods, poor sleep and difficulty concentrating.",
      "system": "Women’s health — perimenopause at 46: clinical diagnosis, HRT with contraception (HRT is not contraceptive), non-hormonal and CBT options, cognitive symptoms, and support at work",
      "checked": "October 2026"
    },
    "brief": "Nicola Grant, 46, police sergeant, has had a year of irregular periods (cycles 21–60 days, last period 7 weeks ago), night sweats, hot flushes at work, poor sleep, irritability, joint aches and “brain fog”: losing words and forgetting tasks. She is in a relationship and uses condoms “most of the time”. Non-smoker, BMI 29, BP 124/78, no migraine, no personal or family history of VTE or breast cancer. She asks whether this is the menopause and whether she needs a blood test. Hidden agenda, only if explored: she made two paperwork errors at work and is now on an informal performance review; her mother developed dementia at 68, and Nicola is frightened she has early dementia and that she will lose her job. She would like HRT but assumed it would also be her contraception. Mood: low at times, no anhedonia, no suicidal thoughts. The task: make a clinical diagnosis of perimenopause without FSH testing (NICE NG23, over 45 with symptoms); check pregnancy is excluded given the late period; explore the cognitive symptoms and the dementia fear, screen mood, and explain that brain fog is common in perimenopause and will be reviewed after treatment; explain HRT options (oestrogen with endometrial protection; transdermal or oral) and that HRT is not contraception; offer the 52 mg LNG-IUS as both progestogen and contraception (check the SPC), or other suitable contraception until it is no longer needed (FSRH: until 55, or after 2 years of amenorrhoea under 50); mention CBT and non-hormonal options; give proportionate risk information; and support her at work (adjustments, occupational health, a fit note if helpful).",
    "script": {
      "opening": "“My periods are all over the place, I’m not sleeping, I’m drenched at night and I can’t think straight. Is this the change? Do I need a blood test to find out?”",
      "facts": [
        {
          "topic": "Periods and symptoms",
          "text": "A year of irregular cycles (3 to 8 weeks). Last period 7 weeks ago. Hot flushes several times a day, worse in uniform; night sweats most nights; waking at 3am. Irritable, aching joints, low libido, vaginal dryness. No postcoital or intermenstrual bleeding."
        },
        {
          "topic": "Contraception and pregnancy (if asked)",
          "text": "Condoms most of the time with her partner of three years. Could she be pregnant? “Surely not at 46.” Willing to do a test. Does not want a pregnancy."
        },
        {
          "topic": "Risk history (if asked)",
          "text": "Non-smoker. No migraine. No clots in her or her family. No breast cancer in the family. Mother had dementia from 68. Last cervical screening up to date."
        },
        {
          "topic": "Only if asked about the brain fog and work",
          "text": "Losing words, walking into rooms and forgetting why. Two paperwork errors at work led to an informal performance review. Frightened: “Mum started like this.” Hasn’t told work about menopause symptoms."
        },
        {
          "topic": "Mood (if asked)",
          "text": "Low and tearful at times, more irritable; still enjoys walking the dog and her nieces. Sleep poor. No thoughts of self-harm. Alcohol: a glass of wine most nights “to sleep”."
        },
        {
          "topic": "What she wants",
          "text": "Wants to know what this is and to feel normal. Open to HRT; assumed it would “cover contraception too”. Worried about breast cancer “a bit”. Would consider a coil."
        },
        {
          "topic": "How to play it",
          "text": "Brisk and organised, uses humour. Becomes quiet and tearful when the brain fog and her mother come up. Relieved when the cognitive symptoms are explained and taken seriously, and when the doctor offers to help with work."
        }
      ],
      "ice": {
        "ideas": "“It’s probably the change, but I need a blood test to prove it.”",
        "concerns": "HIDDEN AGENDA: fear of early dementia like her mother, and of losing her job after a performance review. Also a belief that HRT will act as contraception.",
        "expectations": "“A blood test, and HRT if it’s the menopause.”"
      },
      "cues": [
        "“Can’t think straight” — explore cognitive symptoms and what she fears they mean.",
        "Last period 7 weeks ago and condoms “most of the time” — pregnancy test and contraception.",
        "A police sergeant with symptoms at work — workplace impact and support.",
        "Wine most nights to sleep — sleep, mood and alcohol."
      ]
    },
    "checkpoints": [
      {
        "dom": "dg",
        "text": "Takes a menstrual and symptom history and makes a clinical diagnosis of perimenopause without FSH testing (NICE NG23: over 45 with symptoms), checking for red-flag bleeding"
      },
      {
        "dom": "dg",
        "text": "Excludes pregnancy (late period, inconsistent condom use) and asks about contraception"
      },
      {
        "dom": "dg",
        "text": "Explores the cognitive symptoms, uncovers the fear of dementia and the work review, screens mood and alcohol, and explains that brain fog is common in perimenopause, to be reviewed after treatment"
      },
      {
        "dom": "cm",
        "text": "Explains HRT options: oestrogen with a progestogen for endometrial protection because she has a uterus; transdermal or oral oestrogen; vaginal oestrogen for genitourinary symptoms"
      },
      {
        "dom": "cm",
        "text": "Explains that HRT is not contraception and offers the 52 mg LNG-IUS as both the progestogen part of HRT and contraception (check the SPC), or other suitable contraception, continued until no longer needed (FSRH: until 55, or 2 years’ amenorrhoea if under 50)"
      },
      {
        "dom": "cm",
        "text": "Mentions CBT for vasomotor and mood symptoms and non-hormonal options, and gives proportionate, honest risk information"
      },
      {
        "dom": "cm",
        "text": "Supports work: discusses telling her manager, reasonable adjustments, occupational health referral and a fit note with adjustments if helpful"
      },
      {
        "dom": "ro",
        "text": "Uses shared decision-making, checks understanding and arranges review (bleeding pattern, symptom response, cognitive symptoms) with a safety-net for abnormal bleeding"
      }
    ],
    "worked": [
      {
        "lbl": "No blood test needed",
        "txt": "“At 46, with irregular periods, flushes and night sweats, this is very likely the perimenopause. The guidance says we don’t need a blood test to diagnose it, because hormone levels jump around and a single test can mislead.”"
      },
      {
        "lbl": "Pregnancy first",
        "txt": "“Your last period was seven weeks ago and condoms aren’t always used, so let’s do a pregnancy test before we start anything.”"
      },
      {
        "lbl": "Explore the fear",
        "txt": "“You said you can’t think straight. What worries you most about that?”"
      },
      {
        "lbl": "Brain fog",
        "txt": "“Losing words and forgetting tasks is really common in the perimenopause, especially with broken sleep. It usually improves with treatment. If it doesn’t, we’ll look into it properly, I promise.”"
      },
      {
        "lbl": "HRT is not contraception",
        "txt": "“HRT doesn’t stop you getting pregnant. A hormonal coil can do two jobs: it protects the womb lining as part of HRT and gives contraception. Then you’d add oestrogen as a patch or gel.”"
      },
      {
        "lbl": "Work",
        "txt": "“Would it help to tell your manager it’s menopause? Occupational health can suggest adjustments, like uniform, breaks or ventilation, and I can write a fit note with suggestions if useful.”"
      }
    ],
    "learning": "NICE NG23 (Menopause: identification and management, updated 2024) advises diagnosing perimenopause clinically in women over 45 with vasomotor symptoms and irregular periods, without FSH testing. Exclude pregnancy where periods are late and contraception is inconsistent. HRT for a woman with a uterus needs oestrogen plus a progestogen for endometrial protection; transdermal oestrogen does not increase VTE risk above baseline and suits women with risk factors. HRT is not contraception. The 52 mg levonorgestrel intrauterine system can provide both the progestogen component of HRT and contraception (check the SPC for licensed duration of use for each purpose). FSRH guidance on contraception for women over 40 advises continuing contraception until age 55, or stopping after 2 years of amenorrhoea if under 50 (1 year if over 50) when not using hormonal methods. NG23 also recommends offering CBT as an option for vasomotor symptoms and for low mood associated with menopause, and vaginal oestrogen for genitourinary symptoms. Cognitive complaints (“brain fog”) are common in perimenopause and often improve with treatment of vasomotor symptoms and sleep; screen mood and alcohol, and reassess if symptoms persist, especially with a family history of dementia. Work matters: many women do not disclose menopause symptoms at work; occupational health, reasonable adjustments and a fit note with suggested adaptations can help. Risk communication should be balanced and proportionate; for women in their 40s the absolute risks of HRT are small. The hidden agenda here is fear of inherited dementia and of losing her job.",
    "knowledge": {
      "guideline": "[1] NICE NG23 Menopause: identification and management (2015, updated 2024) · [2] FSRH Clinical Guideline: Contraception for women aged over 40 years (2017, amended) · [3] FSRH and British Menopause Society guidance on LNG-IUS for endometrial protection (check current SPC/licence) · [4] NICE CKS Menopause (check current version) · [5] DWP fit note guidance; Equality Act 2010 (sex, age and disability) and employer menopause guidance · [6] Product SPCs for HRT preparations and the 52 mg LNG-IUS",
      "summary": "A 46-year-old police sergeant with a year of irregular cycles, vasomotor symptoms, poor sleep and brain fog. Diagnose perimenopause clinically, exclude pregnancy, explain HRT and that it is not contraception, offer the 52 mg LNG-IUS for endometrial protection and contraception with transdermal oestrogen, mention CBT, uncover and address the fear of dementia and the work review, and support her at work.",
      "points": [
        {
          "h": "Diagnosis",
          "t": "Over 45 with vasomotor symptoms and irregular periods: perimenopause, without FSH testing [1]."
        },
        {
          "h": "Exclude pregnancy",
          "t": "Late period with inconsistent contraception: pregnancy test first."
        },
        {
          "h": "HRT components",
          "t": "Oestrogen plus a progestogen if she has a uterus. Transdermal oestrogen does not increase VTE risk above baseline [1]."
        },
        {
          "h": "HRT is not contraception",
          "t": "Contraception is needed until 55, or 2 years’ amenorrhoea under 50 (1 year over 50) [2]."
        },
        {
          "h": "LNG-IUS",
          "t": "The 52 mg LNG-IUS provides contraception and endometrial protection with oestrogen; check the SPC for licensed duration for each purpose [2,3,6]."
        },
        {
          "h": "Other options",
          "t": "CBT for vasomotor symptoms and low mood; vaginal oestrogen for genitourinary symptoms; non-hormonal options if HRT is unsuitable [1]."
        },
        {
          "h": "Cognitive symptoms",
          "t": "Common in perimenopause and with poor sleep; screen mood and alcohol; review after treatment; assess further if persistent."
        },
        {
          "h": "Work",
          "t": "Disclosure, occupational health, reasonable adjustments, and a fit note with suggested adaptations if helpful [5]."
        }
      ]
    }
  };

  /* ====== 190. VIDEO — "Does HRT give you breast cancer?": numbers that mean something ====== */
  const c190 = {
    id:'hrt-breast-cancer-numbers', title:'"Just give it to me straight \u2014 does HRT give you breast cancer or not?"', type:'video', duration:12,
    meta:{ age:54, sex:'F', setting:'Video consultation \u2014 a direct question about HRT and breast-cancer risk.', system:'Reproductive / Risk communication \u2014 HRT & breast cancer in numbers', checked:'October 2026' },
    brief:'Ms Frances Liddell, 54, benefiting from COMBINED HRT (oestrogen with a progestogen, as she has a uterus) for severe symptoms but rattled by a friend\u2019s comment and a headline, asks point-blank whether HRT causes breast cancer. This is a RISK-COMMUNICATION station: the mark is in translating evidence into MEANINGFUL NUMBERS and supporting an informed choice, not in a yes/no. The examined skills: answer honestly (there IS an increased risk with all systemic HRT, largest with COMBINED HRT, type- and duration-dependent — MHRA Drug Safety Update August 2019: of 1000 women aged 50–69 who never use HRT, about 63 are diagnosed with breast cancer over those 20 years; five years of HRT from age 50 adds about 5 (oestrogen-only), 14 (sequential combined) or 20 (continuous combined) extra cases per 1000 over the same 20 years, and ten years of use roughly doubles these; some excess risk persists for more than 10 years after stopping (MHRA 2019); oestrogen-only carries the smallest increase, which NICE NG23 describes as little or no change), express it as ABSOLUTE risk and NATURAL FREQUENCIES (e.g. "out of 1000 women...") rather than scary relative risks, CONTEXTUALISE it against an everyday risk with a sourced comparison (BMS Fast Facts 2025: the excess with 5 years of combined HRT at 50–59 is of a similar size to that linked with obesity), distinguish oestrogen-only vs combined and route, acknowledge uncertainty honestly, and reconnect to HER situation (symptom severity, quality of life, individual risk factors) so she can make an informed, values-based decision \u2014 neither frightening her off nor dismissing the risk.',
    script:{
      opening:"(Direct, slightly agitated, wants a straight answer.) \"Right, I need you to be honest with me. My HRT has genuinely given me my life back — but my friend said I'm 'basically asking for breast cancer', and there was a big headline about it. So just give it to me straight: does HRT cause breast cancer, yes or no? Should I stop?\"",
      facts:[
        { topic:"Before HRT", text:"\"Awful. The symptoms were severe. Now I'm sleeping, I'm working, I feel like me again.\" Had 20 flushes a day and was nearly signed off work." },
        { topic:"Her HRT", text:"Oestrogen gel and micronised progesterone continuously (no bleeds). \"I'd have to check exactly when I started\" — about two years ago, at 52. Bleeding: none for over a year." },
        { topic:"Risk factors", text:"\"Not that I know of, no changes, and yes, I go for screening\" — no family history of breast or ovarian cancer, no breast lumps or changes, mammogram 8 months ago normal. BMI 29. Drinks about 14 units a week. Non-smoker. Had two children, breastfed both." },
        { topic:"Medicines and history", text:"HRT only. No allergies. No clots, migraine with aura or liver disease." },
        { topic:"Social", text:"Office manager, divorced, two adult children. Her friend's sister had breast cancer last year." },
        { topic:"Feelings", text:"If asked how the comment made her feel: \"Guilty, honestly. Like I've been reckless for feeling better.\"" },
        { topic:"How to play it", text:"Wants a yes/no and gets impatient with waffle. If the doctor explains with absolute numbers: \"So out of a thousand, most women on it don't get breast cancer because of it.\" and \"That's so different from the headline.\" Wants to keep going: \"I want to keep going. But I want to keep an eye on it.\" Asks: \"And if I change my mind?\" If told a flat \"no, it's safe\", she pushes back: \"That's not what the paper said.\"" }
      ],
      ice:{
        ideas:"\"Maybe my friend is right and I'm asking for breast cancer.\"",
        concerns:"HIDDEN AGENDA — guilt at feeling better, as if she has been reckless; torn between the life HRT has given back and the fear of harm; her friend's sister's cancer is on her mind.",
        expectations:"\"A straight answer — and whether I should stop.\""
      },
      cues:[
        "\"Yes or no?\" — wants honesty, not reassurance.",
        "\"Given me my life back.\" — the benefit side of the balance.",
        "\"Like I've been reckless.\" — guilt to address."
      ]
    },
    checkpoints:[
      { dom:'ro', text:'Answers HONESTLY without a misleading yes/no — an increased risk with COMBINED HRT (duration-dependent; falls after stopping but some excess persists more than 10 years, MHRA 2019); smallest increase with OESTROGEN-ONLY (NG23: little/no change) — avoiding both false reassurance and scaremongering' },
      { dom:'ro', text:'Communicates risk in ABSOLUTE terms / NATURAL FREQUENCIES ("extra cases per 1000 women") rather than relative percentages, which exaggerate the perceived change' },
      { dom:'ro', text:'CONTEXTUALISES the risk with a sourced comparison (BMS Fast Facts 2025: similar in size to the risk linked with obesity) to enable realistic weighing — without dismissing it or using unsourced alcohol comparisons' },
      { dom:'ro', text:'Specifies that TYPE (oestrogen-only vs sequential vs continuous combined) and DURATION matter, that ROUTE matters for VTE rather than breast risk, and that any lower breast risk with micronised progesterone is uncertain (MHRA 2019 found the increase with any progestogen)' },
      { dom:'ro', text:'Reconnects to HER \u2014 the real benefit ("given her life back"), bone protection, and individual risk factors (family history, alcohol, BMI) \u2014 framing a VALUES-based, revisitable decision' },
      { dom:'ro',   text:'Validates that the question is sensible, reassures she is not "asking for cancer", and addresses the fear from the friend/headline directly' },
      { dom:'ro',   text:'Checks her understanding of the numbers and supports her autonomy to decide with clarity rather than fear' },
      { dom:'cm',    text:'Safety-nets and follows up: offers written information/decision support, reviews the decision over time, advises on modifiable risk factors, and reminds her to report unscheduled bleeding \u2014 informed choice, not a scare or a dismissal' },
    ],
    worked:[
      { lbl:'Honour the question', txt:'"That\u2019s a completely fair question, and I\u2019ll be straight with you \u2014 but a true \u2018yes or no\u2019 would actually mislead you. The honest answer is a number, and once you see it I think it\u2019ll feel very different from the headline."' },
      { lbl:'Give the number', txt:'"There is a small extra risk with the combined type of HRT, and it goes up the longer you take it. To put a number on it: out of 1000 women in their fifties and sixties who never take HRT, about 63 get breast cancer over 20 years. Five years of the combined type from 50 adds about 14 to 20 more over that time — so roughly 77 to 83 instead of 63. Ten years roughly doubles the extra. After stopping, the extra risk falls, but a little of it lasts more than ten years. Oestrogen alone, for women without a womb, adds about 5."' },
      { lbl:'Make it relatable', txt:'"To weigh that fairly: the British Menopause Society puts that extra risk at about the same size as the extra risk that comes with being obese — something we talk about, but don’t panic about. I’m not dismissing it; I’m helping you see it in proportion."' },
      { lbl:'Tailor it', txt:'"We can also keep things under review — using the lowest dose that controls your symptoms, and reviewing at least once a year how long you stay on it. You may read that body-identical progesterone is safer for the breast; honestly, that isn’t proven, so I won’t promise it."' },
      { lbl:'Back to her', txt:'"And here\u2019s the part that matters most: you said HRT gave you your life back. That benefit is real and counts. Only you can weigh that benefit against those numbers — there’s no single right answer for every woman — so it’s genuinely your call, you can change your mind anytime, and we’ll look at it again at every review."' },
      { lbl:'Reassure + safety-net', txt:'"You are not \u2018asking for cancer\u2019. Let\u2019s keep an eye on the modifiable things like alcohol, attend your screening, and tell me about any unexpected bleeding. I\u2019ll give you something written to look at, and we can revisit this whenever you like."' },
    ],
    learning:'"Does HRT cause breast cancer?" is a risk-communication station where the mark lies in translating evidence into meaningful numbers and supporting an informed choice, not in a yes/no. Answer honestly: there is an increased risk of breast cancer with combined (oestrogen + progestogen) HRT that rises with duration and falls after stopping but persists in part for more than 10 years (MHRA Drug Safety Update, August 2019), while oestrogen-only HRT (for women without a uterus) carries the smallest increase (about 5 per 1000 for 5 years from 50; NICE NG23: little or no change) \u2014 avoiding both false reassurance and the headline\u2019s scaremongering. The core skill is to express risk in absolute terms and natural frequencies ("of 1000 women aged 50–69 who never use HRT, about 63 develop breast cancer over 20 years; five years of combined HRT from 50 adds about 14–20 extra cases" — MHRA 2019) rather than relative percentages, which make the change sound far larger, and to contextualise it with a sourced comparison — British Menopause Society Fast Facts (2025): the excess risk with 5 years of combined HRT at 50–59 is similar in size to that linked with obesity — not to dismiss it but to let her weigh it realistically and act on modifiable factors (weight, alcohol, activity). Be specific that type (oestrogen-only vs sequential vs continuous combined; any lower breast risk with micronised progesterone is uncertain, as MHRA 2019 found increased risk with any progestogen), duration and — for VTE rather than breast — route matter, and that the regimen can be tailored to minimise risk. Reconnect to her: the real benefit (symptom relief that "gave her life back", bone protection) and her individual risk profile, framing a values-based, revisitable decision, reviewed at least once a year, in which she weighs the benefit she actually feels against the honest absolute numbers. Validate the question, reassure she is not "asking for cancer", support her autonomy with clarity, offer written decision support and review, and remind her to report unscheduled bleeding. NICE NG12 (Suspected cancer: recognition and referral, last updated April 2026) is not the subject, though the bleeding safety-net still applies.',
    knowledge:{
      guideline:'MHRA Drug Safety Update August 2019 (HRT and breast cancer) · NICE NG23 (2015, updated April 2026) · British Menopause Society Fast Facts: HRT and breast cancer risk (2025) · risk communication (absolute risk/natural frequencies) · shared decision-making',
      points:[
        { h:'Honest, not yes/no', t:'Increased risk with combined HRT (duration-dependent; falls after stopping but some excess persists >10 years, MHRA 2019); smallest with oestrogen-only (NG23: little/no change). Avoid false reassurance and scaremongering.' },
        { h:'Absolute risk / natural frequencies', t:'Use "extra cases per 1000 women" over a defined period, not relative percentages. MHRA 2019: baseline about 63 per 1000 women aged 50–69 over 20 years; 5 years from 50 adds about 5 (oestrogen-only), 14 (sequential combined) or 20 (continuous combined); 10 years roughly doubles this. Relative risks exaggerate the perceived change.' },
        { h:'Contextualise', t:'BMS Fast Facts (2025): the added risk with 5 years of combined HRT at 50–59 is similar in size to that linked with obesity — enabling realistic weighing without dismissal; highlight modifiable factors (weight, alcohol, activity).' },
        { h:'Type/duration/route', t:'Oestrogen-only smallest increase; combined larger, greater with duration (continuous > sequential); lower risk with micronised progesterone is uncertain (MHRA 2019: any progestogen); route mainly affects VTE, not breast risk (MHRA 2019: all systemic routes); no increase found with low-dose vaginal oestrogen. Review at least yearly.' },
        { h:'Reconnect to the patient', t:'Weigh real benefit (symptom relief, bone protection) and individual risk factors (family history, alcohol, BMI). Values-based, revisitable decision in which she weighs her benefit against the honest numbers.' },
        { h:'Address the fear', t:'Validate the question; reassure she is not "asking for cancer"; counter friend/headline narratives; support autonomy with clarity.' },
        { h:'Never do', t:'Never answer a bald yes/no; never use relative risk alone; never dismiss the risk or, conversely, frighten her off effective treatment.' },
        { h:'Safety-net & follow-up', t:'Written decision support, review over time, attend screening, address modifiable risk, report unscheduled bleeding. Informed choice, not a scare.' }
      ]
    }
  };

  /* ====== 191. F2F — No periods on desogestrel: reassurance vs the test first ====== */
  const c191 = {
    id:'desogestrel-amenorrhoea', title:'"My periods have stopped on the mini-pill \u2014 is that normal, or am I pregnant?"', type:'video', duration:12,
    meta:{ age:27, sex:'F', setting:'Video consultation \u2014 absent periods on the progestogen-only pill.', system:'Reproductive / Contraception \u2014 amenorrhoea on desogestrel: reassure, but test first', checked:'October 2026' },
    brief:'Ms Megan Hollis, 27, on the desogestrel progestogen-only pill (POP), worried that her periods have STOPPED \u2014 unsure if it is a normal effect or a pregnancy. The examined skills: reassure ACCURATELY that amenorrhoea (and erratic bleeding) is a COMMON and EXPECTED effect of desogestrel \u2014 but FIRST exclude pregnancy and check for the things that would change that reassurance: missed pills, late pills, vomiting/diarrhoea, interacting medications, and any pregnancy symptoms; arrange a PREGNANCY TEST where there is any doubt — on video she does a urine test at home (or at the surgery) and reports the result at an agreed call-back, and a urine pregnancy test is reliable from 3 weeks after the last unprotected sex, so a negative result sooner than that needs repeating (FSRH POP 2022) (the "reassure, but test first" principle; FSRH Progestogen-only Pills guideline, August 2022, amended April 2026); review correct use and the POP rules (window, missed-pill rules), confirm STI risk/cervical screening as appropriate, and address her actual concern. The trap is BLIND reassurance ("that\u2019s normal, don\u2019t worry") without excluding pregnancy.',
    script:{
      opening:"(Anxious, talking quickly.) \"I've been on the mini-pill — desogestrel — for about eight months, and my periods have basically stopped. I read that can happen, but now I'm paranoid — what if I'm actually pregnant and don't know? Is no periods normal on this, or should I be worried?\"",
      facts:[
        { topic:"Bleeding pattern", text:"First four months: light, irregular spotting. Last four months: nothing at all. No bleeding after sex." },
        { topic:"Pill-taking", text:"\"Mostly in the morning. I think I've been good, but I can't swear I've never been late.\" Uses a phone alarm. Has she missed any? \"Not that I remember, but I couldn't be certain.\" Last possibly late pill: a weekend about two weeks ago — maybe 4–5 hours late, within 12 hours." },
        { topic:"Illness and medicines", text:"No vomiting or diarrhoea. \"No, nothing like that\" — no antibiotics, St John's wort, epilepsy medicines or other new medicines. No allergies." },
        { topic:"Pregnancy symptoms", text:"\"Not really. I'm just anxious.\" No nausea, breast tenderness or tiredness. Last unprotected sex: regular sex with her partner on the pill only; last sex 4 days ago. No pregnancy test done." },
        { topic:"Sexual health", text:"Partner of 6 months, Kieran. No STI test since they got together; previous partner a year ago. No discharge, pain or pelvic pain. Cervical screening: \"I'd need to check on the smear\" — had one at 25, normal." },
        { topic:"History and social", text:"Well. Non-smoker. Retail supervisor. Chose the mini-pill because the combined pill gave her migraines with flashing lights." },
        { topic:"Plans", text:"\"It's not the right time. I just want to know the pill's actually working.\" Wants children in a few years; worries a bit whether no periods will affect fertility." },
        { topic:"How to play it", text:"Anxious, wants reassurance — but if the doctor simply says \"that's normal\" without asking about pills or suggesting a test, stay worried: \"But how do you know I'm not pregnant?\" Happy to do a test: \"I can get one from the chemist on the way home.\" Calms when the plan is clear." }
      ],
      ice:{
        ideas:"\"It might be the pill — or I might be pregnant.\"",
        concerns:"HIDDEN AGENDA — fear of an unplanned pregnancy; quietly wondering whether having no periods could affect her fertility later.",
        expectations:"\"To know whether no periods is normal — and that the pill is working.\""
      },
      cues:[
        "\"I can't swear I've never been late.\" — invites checking pill-taking.",
        "\"I'm paranoid.\" — the anxiety to take seriously.",
        "\"Will it affect having kids later?\" — only if her worries are explored."
      ]
    },
    checkpoints:[
      { dom:'ro', text:'Reassures ACCURATELY that amenorrhoea/erratic bleeding is a common, acceptable and expected effect of the desogestrel POP (and not a sign of failure) \u2014 but only AFTER excluding pregnancy' },
      { dom:'cm', text:'Applies "reassure, but TEST FIRST": screens missed/late pills (12-hour window), vomiting/diarrhoea, interacting medications and pregnancy symptoms, and arranges a PREGNANCY TEST where there is any doubt (home urine test reported back, as it cannot be done on video; repeated if within 3 weeks of unprotected sex)' },
      { dom:'cm', text:'Reviews correct POP use and reinforces the missed-pill rules (late >12h → take pill, 48h condoms; vomiting/diarrhoea within the FSRH time limit as missed; emergency contraception if indicated)' },
      { dom:'dg', text:'Performs a wider sexual-health review \u2014 STI risk/testing, cervical screening status, and whether the method still suits her (consider LARC if bleeding bothersome)' },
      { dom:'cm', text:'Addresses the REAL worry: once pregnancy is excluded and use is correct, gives confident, explained reassurance and states what would warrant rechecking' },
      { dom:'ro',   text:'Takes the pregnancy anxiety seriously rather than waving it away, and explores any unspoken concerns (method suitability, future fertility)' },
      { dom:'ro',   text:'Makes the reassurance land by basing it on the test and her usage, checking understanding' },
      { dom:'cm',    text:'Safety-nets and follows up: when to retest, missed-pill/EC advice, screening/STI follow-up, and method review \u2014 informed reassurance, not a brush-off' },
    ],
    worked:[
      { lbl:'Validate + the principle', txt:'"Good question, and I\u2019m glad you asked rather than worrying alone. The short version is: yes, no periods is usually normal on this pill \u2014 but the right thing for me to do is make sure you\u2019re not pregnant first, and then reassure you properly."' },
      { lbl:'Test first', txt:'"Have you missed or been late with any pills \u2014 more than 12 hours \u2014 or had vomiting or a tummy bug, or started any new medicines? \u2026 I’d like you to do a pregnancy test too, just so we both know for certain rather than guessing — you can do a urine test at home today and I’ll ring you back this afternoon for the result. When did you last have sex without a condom? … More than three weeks ago — good, then a negative test is reliable."' },
      { lbl:'Then reassure with reasons', txt:'(At the call-back.) "Your test’s negative, and you’re taking it correctly — so I can reassure you for real: with desogestrel, about one in five women have periods that become infrequent or stop altogether, and others bleed irregularly. It\u2019s expected, it\u2019s harmless, and it does NOT mean the pill\u2019s failing."' },
      { lbl:'Reinforce the rules', txt:'"Just so you\u2019re covered: take it within the same 12-hour window daily. If you\u2019re more than 12 hours late, take it and use condoms for two days. Being sick soon after a pill, or bad diarrhoea, can count like a missed pill — the leaflet gives the exact time limit."' },
      { lbl:'Wider check', txt:'"While you\u2019re here \u2014 are you due your smear, any need for STI testing, and is this method working for you overall? If the bleeding pattern ever bothers you, there are other options like the implant or coil."' },
      { lbl:'Safety-net', txt:'"So: not pregnant, periods stopping is normal on this. If you ever miss pills, get pregnancy symptoms, or just want peace of mind, do a test and come back. You did exactly the right thing checking."' },
    ],
    learning:'Absent or erratic periods on the desogestrel progestogen-only pill are common, acceptable and expected \u2014 about 1 in 5 users have infrequent or absent bleeding (desogestrel SPC) and others have more frequent or irregular bleeding, none of which is harmful or a sign the pill is failing \u2014 so accurate reassurance is appropriate, but only AFTER excluding pregnancy. The governing principle is "reassure, but test first": before reassuring, screen for missed or late pills (desogestrel has a 12-hour window), vomiting or diarrhoea around the time of a pill, interacting medications (enzyme inducers) and pregnancy symptoms, and arrange a pregnancy test wherever there is any doubt about adherence or any symptom (a home urine test reported back when the consultation is by video; reliable from 3 weeks after the last unprotected sex), because confident blind reassurance is the trap. Review correct use and reinforce the missed-pill rules (a pill more than 12 hours late is "missed" \u2014 take it, continue, and use condoms/abstain for 48 hours; vomiting soon after a pill (within the FSRH POP time limit) or severe diarrhoea is treated as a possible missed pill; understand emergency contraception). Use the consultation for a wider sexual-health review (STI risk and testing, cervical screening status, and whether the method still suits her \u2014 considering LARC such as an implant or IUS if the bleeding pattern is bothersome), and address her actual concern, which is anxiety about an unknown pregnancy: once the test is negative and use correct, give clear, explained reassurance and state what would warrant rechecking. The hidden agenda is pregnancy anxiety, possibly with unspoken questions about method suitability or future fertility; take it seriously, resolve it with the test, and give informed reassurance plus a method review rather than waving it away.',
    knowledge:{
      guideline:'FSRH Progestogen-only Pills guideline (August 2022, amended April 2026) · FSRH Emergency Contraception guideline (2017, amended) · FSRH Problematic Bleeding with Hormonal Contraception (2015) · desogestrel SPC · BNF · "reassure but test first"',
      points:[
        { h:'Amenorrhoea is expected', t:'On desogestrel, about 20% have infrequent or absent bleeding (SPC) and others have more frequent or irregular bleeding \u2014 acceptable, harmless, not a sign of failure. Reassure accurately after excluding pregnancy.' },
        { h:'Reassure but test first', t:'Exclude pregnancy before reassuring: screen missed/late pills (12-hour window), vomiting/diarrhoea, interacting meds, symptoms; pregnancy test if any doubt — reliable from 3 weeks after last unprotected sex; by video, a home test reported back (FSRH POP 2022).' },
        { h:'POP rules', t:'FSRH POP (2022): same time daily; >12h late = missed → take pill + 48h condoms; vomiting soon after a pill (within the FSRH time limit) or severe diarrhoea = possible missed pill; emergency contraception if indicated (sex after a missed pill before 48 hours of correct use).' },
        { h:'Wider review', t:'STI risk/testing, cervical screening status, method suitability (consider LARC if bleeding bothersome). Address underlying concerns.' },
        { h:'Land the reassurance', t:'Once test negative and use correct, give confident, explained reassurance and state what warrants rechecking. Base it on the test and usage, not a brush-off.' },
        { h:'Address the real worry', t:'Take pregnancy anxiety seriously; explore unspoken concerns (method fit, fertility). Resolve, don\u2019t dismiss.' },
        { h:'Never do', t:'Never give blind reassurance ("that\u2019s just the pill") without excluding pregnancy; never skip the use/missed-pill review; never miss a screening/STI opportunity.' },
        { h:'Safety-net', t:'When to retest, missed-pill/EC advice, screening/STI follow-up, method review.' }
      ]
    }
  };

  /* ====== 192. F2F — Recurrent stress fractures in a runner: RED-S and the eating screen ====== */
  const c192 = {
    id:'red-s-stress-fractures', title:'"That\u2019s my third stress fracture this year \u2014 just sort my foot so I can keep training"', type:'video', duration:12,
    meta:{ age:23, sex:'F', setting:'Video consultation \u2014 a recurrent stress fracture in a keen runner.', system:'MSK / Sports & eating \u2014 RED-S, the female athlete & the energy-deficiency screen', checked:'October 2026' },
    brief:'Miss Orla Devine, 23, a dedicated distance runner, presents with her THIRD stress fracture in a year, wanting it fixed so she can keep training. The examined skill: look beyond the bone to the SYSTEMIC cause \u2014 RECURRENT stress fractures in an athlete (especially a young woman) are a red flag for RELATIVE ENERGY DEFICIENCY IN SPORT (RED-S — the IOC consensus statement on REDs, 2023 (international), describes a syndrome wider than the older female athlete triad, affecting men too and reaching bone, hormones, mood, immunity, heart and performance; the triad components remain low energy availability ± disordered eating, menstrual dysfunction/amenorrhoea, and impaired bone health). Sensitively screen ENERGY availability and EATING behaviours, MENSTRUAL history (amenorrhoea/oligomenorrhoea is a key clue \u2014 and combined-pill use can MASK it), training load, and other RED-S effects (fatigue, mood, recurrent illness/injury, performance plateau); arrange a FACE-TO-FACE assessment, as she cannot be examined on video (if eating is significantly restricted: weight/BMI, lying and standing pulse and BP, temperature, sit-up–squat–stand test, ECG and electrolytes if indicated — RCPsych MEED CR233, 2022), and investigate appropriately (in amenorrhoea a pregnancy test first, then LH, FSH, oestradiol, prolactin and TFTs; bloods and vitamin D; consider DEXA — NICE NG69, advises DXA earlier than usual with recurrent fractures), and refer into a multidisciplinary pathway (sports medicine, dietitian, +/- eating-disorder services and psychology — NICE NG69: refer immediately to the community eating-disorder service if an eating disorder is suspected), knowing that the combined pill does not protect bone in hypothalamic amenorrhoea. Avoid the trap of treating the fracture and missing the eating disorder.',
    script:{
      opening:"(Upbeat, determined, a little impatient.) \"So it's my foot again — the doctor at the walk-in thinks it's another stress fracture. That's the third one this year, which is so annoying. Look, I've got races coming up, so can you just sort it, maybe a boot or whatever, so I can get back to training as fast as possible? I really don't want to lose fitness.\"",
      facts:[
        { topic:"The foot", text:"\"It hurts walking now. It started as just a niggle on long runs and I kept going.\" Top of the left foot, three weeks. Walk-in centre gave a walking boot and crutches. Previous fractures: right shin (6 months ago), left heel bone (10 months ago)." },
        { topic:"Training", text:"\"I've been building my mileage for the season. I train most days\" — about 90 km a week plus gym. Club runner aiming for a half-marathon qualifying time." },
        { topic:"Eating — sensitive", text:"\"I eat healthily. I'm careful, that's all — you have to be at my level.\" If asked gently with screening questions: \"I don't really want to get into all that. I'm not ill. I just watch what I eat.\" Cuts carbs, skips meals on rest days, weighs herself daily. If asked kindly and directly: has occasionally made herself sick after a big meal \"a couple of times\". Lost about 5 kg this year." },
        { topic:"Periods", text:"\"I don't really keep track. Isn't that normal for runners anyway?\" Came off the combined pill 18 months ago; periods since then \"few and far between\" — last one about 5 months ago. Not sexually active at the moment." },
        { topic:"Other symptoms", text:"\"I'm tired, but everyone's tired. I do get stressed about races.\" Feels cold a lot, dizzy when standing quickly, frequent colds this year. No palpitations or fainting." },
        { topic:"Medicines and history", text:"No regular medicines; takes a multivitamin. No allergies. No previous eating disorder diagnosis. Mum has osteoporosis? — \"No, but my gran broke her hip.\"" },
        { topic:"Social", text:"Final-year sports science student, lives in a shared house. Doesn't drink much, non-smoker. Coach \"wants me lighter for racing\"." },
        { topic:"Feelings", text:"\"Running is basically everything. If I can't train I don't really know who I am. That's what scares me.\"" },
        { topic:"How to play it", text:"Bright and focused on getting back to running. Becomes guarded if eating is raised bluntly or in a judging way. Opens up a little if the doctor links eating to performance and bone health rather than weight: \"So you think I'm not eating enough? … I hadn't thought of it like that.\" Agrees to a dietitian; hesitant about eating-disorder services: \"A dietitian's fine. The other bit… maybe. Not yet.\" Does not want her coach or parents told: \"No, keep it between us for now.\"" }
      ],
      ice:{
        ideas:"\"Bad luck with my foot — I just need a boot and to get back running.\"",
        concerns:"HIDDEN AGENDA — running is her identity; she restricts food tightly and is frightened of losing control of her weight and fitness; she doesn't see herself as ill.",
        expectations:"\"A quick fix so I can get back to training.\""
      },
      cues:[
        "\"Third one this year.\" — invites asking why.",
        "\"I'm careful, that's all.\" — the eating she plays down.",
        "\"If I can't train I don't really know who I am.\" — the fear to acknowledge."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises RECURRENT stress fractures (three in a year) in a young female athlete as a RED FLAG for an underlying systemic cause (RED-S) \u2014 resisting "just fix the foot"' },
      { dom:'dg', text:'Understands RED-S (IOC 2023, international: wider than the female athlete triad and affecting men too) (low energy availability \u00b1 disordered eating, menstrual dysfunction, impaired bone health, plus mood/immune/performance effects)' },
      { dom:'dg', text:'Screens EATING and ENERGY availability sensitively and non-judgementally (intake vs training, restriction, weight/body preoccupation, purging — using any tool such as SCOFF only as a prompt, never the sole basis, NICE NG69) recognising disordered eating may be hidden behind performance goals' },
      { dom:'dg', text:'Takes a MENSTRUAL history \u2014 identifies amenorrhoea/oligomenorrhoea as a key clue and recognises the COMBINED PILL can MASK it \u2014 never dismissing lost periods as "just from running"' },
      { dom:'cm', text:'Arranges a face-to-face examination and investigates appropriately (confirm fracture; FBC, ferritin, vitamin D, TFTs, coeliac; in amenorrhoea a pregnancy test first, then LH/FSH/oestradiol and prolactin; consider DEXA, NICE NG69) and refers MULTIDISCIPLINARY (sports medicine, dietitian, eating-disorder/psychology), advising fuelling and modified training, and knowing the combined pill does not protect bone' },
      { dom:'ro',   text:'Engages a performance-focused patient gently, connects the fractures to under-fuelling in a way she can hear, and explores possible eating disorder/perfectionism without shaming' },
      { dom:'ro',   text:'Frames adequate fuelling and bone health as the route to better performance and staying in her sport, addressing the fear of losing running' },
      { dom:'cm',    text:'Safety-nets and follows up: arranges investigations and referrals, monitors bone/menstrual/eating recovery, and reviews \u2014 treating the energy deficiency, not just the fracture' },
    ],
    worked:[
      { lbl:'Reframe past the foot', txt:'"I\u2019ll absolutely help your foot \u2014 but three stress fractures in a year isn\u2019t bad luck, it\u2019s your body telling us something bigger, and if we only treat the bone you\u2019ll be back with a fourth. Can we look at why this keeps happening?"' },
      { lbl:'Open the energy question', txt:'"In runners, repeated fractures often come down to not taking in enough fuel for the training load \u2014 sometimes without realising. Can you talk me through what a normal day\u2019s eating looks like against how much you\u2019re running?"' },
      { lbl:'Ask about periods (and the mask)', txt:'"Can I ask about your periods \u2014 are they regular, or have they stopped or become irregular? \u2026 And are you on the pill? Because the pill can hide this. Losing your periods with heavy training isn\u2019t normal \u2014 it’s a sign your body’s running low, and it weakens bone. And the pill won’t protect your bones — it just hides the signal."' },
      { lbl:'Screen gently', txt:'"Some athletes get very focused on food, weight or \u2018eating clean\u2019 \u2014 sometimes it tips into restricting. Is any of that part of the picture for you? There\u2019s no judgement here \u2014 I ask because it\u2019s common and it really matters for your bones."' },
      { lbl:'Investigate + refer', txt:'"I’d like to see you in person to look at your foot and check your weight, pulse and blood pressure, and do a pregnancy test and some bloods including your iron, vitamin D and hormones, and a bone-density scan given the fractures. And I\u2019d bring in a sports doctor and a dietitian \u2014 and, if helpful, someone to support the eating side \u2014 so we fix the cause."' },
      { lbl:'Make fuelling the goal', txt:'"Here\u2019s the key: fuelling properly and getting your periods back isn\u2019t the enemy of performance \u2014 it\u2019s how you run faster and stay injury-free in the sport you love. Let\u2019s heal the foot AND sort the bigger picture, together."' },
    ],
    learning:'A single stress fracture can be a training error, but THREE in a year in a young female runner is a red flag for a systemic cause \u2014 RELATIVE ENERGY DEFICIENCY IN SPORT (RED-S) \u2014 not just a foot to fix, so resist the patient\u2019s "just sort it" framing. RED-S arises from low energy availability (insufficient intake for training expenditure, intentional or not) and — while the IOC 2023 consensus (international) describes REDs as wider than the older female athlete triad, affecting men too — the triad’s core is low energy availability (with or without disordered eating), menstrual dysfunction (amenorrhoea/oligomenorrhoea from hypothalamic suppression), and impaired bone health (low density causing stress fractures), alongside effects on mood, immunity and performance. Screen eating and energy availability sensitively and non-judgementally (intake versus training volume, restriction, weight/body preoccupation, purging, beliefs about thinness and performance — a tool such as SCOFF only as a prompt, never the sole basis, NICE NG69), recognising disordered eating in athletes is common and often hidden behind "clean eating" or performance goals. Take a menstrual history \u2014 amenorrhoea/oligomenorrhoea is a cardinal sign and major bone-health risk, the combined pill can MASK it by producing withdrawal bleeds, and lost periods in an athlete are never "just from running". Examine face to face (not possible on video; physical risk assessment if eating is restricted, RCPsych MEED CR233) and investigate appropriately (confirm the fracture; FBC, ferritin, vitamin D, TFTs, coeliac; in amenorrhoea a pregnancy test first, then LH, FSH, oestradiol and prolactin; consider DEXA for bone density, NICE NG69) and manage the energy deficiency, not just the bone, with multidisciplinary referral (sports medicine, dietitian, eating-disorder services/psychology), optimised vitamin D/calcium, the knowledge that the combined pill does not protect bone, and modified training with adequate fuelling \u2014 the bone will not heal durably without correcting the energy deficit. The hidden agenda is that training/performance and possibly eating/body control are central to her identity, with minimisation, perfectionism or an eating disorder beneath and fear of losing running; engage gently, connect the fractures to under-fuelling, frame fuelling as the route to performance, and bring her toward help without shaming.',
    knowledge:{
      guideline:'IOC consensus statement on REDs 2023 (international) · NICE NG69 Eating disorders: recognition and treatment (2017, updated 2020) · RCPsych Medical emergencies in eating disorders (MEED) CR233 (2022) · BNF · RED-S (wider than the female athlete triad) · low energy availability · eating-disorder screening · bone health (DEXA) · multidisciplinary care',
      points:[
        { h:'Recurrent fractures = red flag', t:'Multiple stress fractures in a young female athlete signal a systemic cause (RED-S), not just local injury. Look beyond the bone.' },
        { h:'RED-S / triad', t:'Wider than the old female athlete triad and affects men too (IOC 2023, international). Core: low energy availability (± disordered eating), menstrual dysfunction (amenorrhoea/oligomenorrhoea), impaired bone health \u2014 plus mood, immune and performance effects.' },
        { h:'Screen eating sensitively', t:'Intake vs training, restriction, weight/body preoccupation, purging, performance beliefs. Non-judgemental; SCOFF only as a prompt, not the sole basis (NICE NG69); disordered eating is often hidden behind "clean eating"/goals.' },
        { h:'Menstrual clue & the mask', t:'Amenorrhoea/oligomenorrhoea is cardinal and a bone risk; the combined pill can mask it. Ask specifically; never dismiss lost periods as normal in an athlete. Pregnancy test first, then LH/FSH/oestradiol, prolactin, TFTs.' },
        { h:'Investigate', t:'Face-to-face assessment (not by video; MEED CR233 risk checks if restricting). Confirm fracture (MRI most sensitive); FBC, ferritin, U&E, bone profile, vitamin D, TFTs, coeliac; in amenorrhoea a pregnancy test first, then LH/FSH/oestradiol and prolactin; consider DEXA (NICE NG69: earlier with recurrent fractures).' },
        { h:'Multidisciplinary management', t:'Sports medicine, dietitian, eating-disorder/psychology; optimise vitamin D/calcium (dose per BNF); the combined pill does not protect bone; modified training with adequate fuelling. Correct the energy deficit to heal bone.' },
        { h:'Engage without shame', t:'Performance/identity (\u00b1 eating control) is central. Connect fractures to under-fuelling; frame fuelling as the route to performance and staying in sport.' },
        { h:'Never do', t:'Never treat the fracture alone; never dismiss amenorrhoea; never miss the masking pill or a disordered-eating component; never shame.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c189, c190, c191, c192);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'hrt-counselling': {
      "ceg": [
        "Gender, reproductive & sexual health",
        "New & undifferentiated presentations"
      ],
      "stem": {
        "name": "Nicola Grant",
        "age": "46 years · female",
        "pmh": [
          "Nil significant"
        ],
        "meds": [
          "None"
        ],
        "allergy": "None recorded",
        "recent": "Pharmacy BP last month 124/78. BMI 29. Cervical screening up to date.",
        "reason": "“Periods all over the place, not sleeping, can’t think straight.”"
      },
      "timeMap": [
        {
          "t": "0–1",
          "h": "Open",
          "d": "Hear the symptoms and the blood test question."
        },
        {
          "t": "1–5",
          "h": "History",
          "d": "Cycles, last period, bleeding red flags, contraception and pregnancy, risk history."
        },
        {
          "t": "5–7",
          "h": "ICE",
          "d": "Brain fog: dementia fear and performance review; mood; alcohol."
        },
        {
          "t": "7–11",
          "h": "Explain and plan",
          "d": "Clinical diagnosis without FSH; brain fog plan; HRT components; not contraception; LNG-IUS plus transdermal oestrogen; contraception duration; CBT; work support."
        },
        {
          "t": "11–12",
          "h": "Close",
          "d": "Teach-back; pregnancy test; review at 3 months; bleeding safety-net."
        }
      ],
      "wordPics": {
        "fail": "Orders FSH; starts HRT without excluding pregnancy or mentioning contraception; ignores the brain fog or dismisses it; never discovers the work review or her mother’s dementia.",
        "pass": "Diagnoses perimenopause clinically, excludes pregnancy, explains HRT is not contraception and offers suitable options, and addresses the brain fog.",
        "exc": "All of the above, plus: uncovers the dementia fear and work review with empathy; proportionate reassurance with a review plan; offers the LNG-IUS for both roles and transdermal oestrogen; CBT; practical work support; clear safety-net."
      },
      "avoid": [
        {
          "dont": "“Let’s check your FSH to confirm it.”",
          "instead": "“At 46 with these symptoms we can diagnose it without a blood test.”",
          "why": "NICE NG23 advises against FSH testing in women over 45 with typical symptoms."
        },
        {
          "dont": "“HRT will sort everything.”",
          "instead": "“HRT isn’t contraception. A hormonal coil can protect your womb and prevent pregnancy.”",
          "why": "Unplanned pregnancy risk in the perimenopause."
        },
        {
          "dont": "“Brain fog is just the menopause, don’t worry.”",
          "instead": "“It’s very common now and usually improves; we’ll review it and look further if not.”",
          "why": "Dismissing it ignores her fear and the need to reassess."
        }
      ]
    },

    'hrt-breast-cancer-numbers': {
      ceg: ['Gender, reproductive & sexual health', 'Investigations & results'],
      stem: {
        name: 'Frances Liddell', age: '54 years \u00b7 female',
        pmh: ['On HRT for severe menopausal symptoms \u2014 "given me my life back"', 'Rattled by a friend\u2019s comment + a headline', 'Considering stopping out of fear'],
        meds: ['Combined HRT'],
        allergy: 'NKDA',
        recent: '"Just give it to me straight \u2014 does HRT give you breast cancer or not? Should I stop?"',
        reason: 'Video consultation \u2014 a direct question about HRT and breast-cancer risk.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Honour, not yes/no', d:'A true answer needs a number; honest, not scaremongering or false reassurance.' },
        { t:'2\u20135',  h:'Absolute numbers', d:'Extra cases per 1000 women (MHRA 2019: baseline 63; +14–20 for 5 years combined from 50; +5 oestrogen-only); duration-dependent; some excess persists after stopping.' },
        { t:'5\u20137',  h:'Contextualise', d:'Similar in size to the risk linked with obesity (BMS 2025); highlight modifiable factors.' },
        { t:'7\u20139',  h:'Tailor + reconnect', d:'Lowest effective dose, yearly review (micronised progesterone benefit unproven); weigh her real benefit + individual risk.' },
        { t:'9\u201312', h:'Reassure + safety-net', d:'Not "asking for cancer"; written info; screening; report bleeding; revisit.' }
      ],
      wordPics: {
        fail: 'Gives a bald yes/no or only a scary relative percentage; dismisses or amplifies the risk; ignores her benefit and values.',
        pass: 'Answers honestly in absolute numbers, contextualises, and supports an informed decision.',
        exc:  'Reframes from yes/no to natural frequencies, contextualises against everyday risks, distinguishes type/duration/route, reconnects to her real benefit and values, reassures she\u2019s not "asking for cancer", and supports a revisitable choice.'
      },
      avoid: [
        { dont:'"Yes, HRT causes breast cancer."', instead:'"There’s an extra risk with the combined type — about 14 to 20 extra cases per 1000 women over 20 years for five years’ use from 50 — and less with oestrogen-only."', why:'A bald yes/no misleads; absolute numbers inform.' },
        { dont:'"It increases your risk by [X]%."', instead:'"Out of 1000 women, about 63 get breast cancer anyway over 20 years; five years of combined HRT adds about 14 to 20."', why:'Relative percentages exaggerate the perceived change; natural frequencies are clearer.' },
        { dont:'"Don\u2019t worry about it at all."', instead:'"It’s a real risk, about the same size as the risk linked with obesity — worth weighing against how much HRT helps you."', why:'False blanket reassurance is as unhelpful as scaremongering.' }
      ]
    },

    'desogestrel-amenorrhoea': {
      ceg: ['Gender, reproductive & sexual health', 'New & undifferentiated presentations'],
      stem: {
        name: 'Megan Hollis', age: '27 years \u00b7 female',
        pmh: ['Desogestrel POP ~8 months \u2014 periods have stopped', 'Worried she might be pregnant', 'Otherwise well'],
        meds: ['Desogestrel (progestogen-only pill)'],
        allergy: 'NKDA',
        recent: '"My periods have stopped on the mini-pill \u2014 is that normal, or am I pregnant?"',
        reason: 'Video consultation \u2014 absent periods on the progestogen-only pill.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Validate + principle', d:'Usually normal \u2014 but exclude pregnancy first, then reassure properly.' },
        { t:'2\u20135',  h:'Test first', d:'Missed/late pills (12h), vomiting/diarrhoea, interacting meds, symptoms; home pregnancy test if any doubt (reliable 3 weeks after last UPSI), result by call-back.' },
        { t:'5\u20137',  h:'Reassure with reasons', d:'~1 in 5 have infrequent or no bleeding on desogestrel (SPC); expected, harmless, not failure.' },
        { t:'7\u20139',  h:'POP rules', d:'Same-time daily; >12h late → take + 48h condoms; sickness within FSRH time limit as missed; EC if needed.' },
        { t:'9\u201312', h:'Wider review + safety-net', d:'STI/screening, method suitability (LARC); when to retest.' }
      ],
      wordPics: {
        fail: 'Gives blind reassurance ("that\u2019s just the pill") without excluding pregnancy or reviewing use; misses STI/screening chance.',
        pass: 'Excludes pregnancy, reassures accurately about desogestrel bleeding, and reviews use.',
        exc:  'Applies "reassure but test first", excludes pregnancy with a test where any doubt (home test reported back, with the 3-week caveat), reassures accurately with reasons, reinforces the missed-pill rules, does a wider sexual-health review and safety-nets.'
      },
      avoid: [
        { dont:'"No periods is totally normal on that pill \u2014 nothing to worry about."', instead:'"It usually is — but let’s get a pregnancy test done first, at home today, so I can reassure you properly when you tell me the result."', why:'Blind reassurance risks missing a pregnancy from imperfect use.' },
        { dont:'(No use review) reassuring without checking adherence.', instead:'"Any missed or late pills, sickness or new medicines? Those change things."', why:'Adherence and interactions determine whether reassurance is safe.' },
        { dont:'(Missed chance) not offering screening/STI.', instead:'"While you\u2019re here \u2014 are you due a smear or any STI testing, and is this method still right for you?"', why:'A contraception visit is an opportunity for holistic sexual-health care.' }
      ]
    },

    'red-s-stress-fractures': {
      ceg: ['Mental health & addiction', 'New & undifferentiated presentations'],
      stem: {
        name: 'Orla Devine', age: '23 years \u00b7 female',
        pmh: ['\u26a0 Third stress fracture in a year \u2014 keen distance runner', '? amenorrhoea (? masked by combined pill)', 'Focused on training/performance; wants a quick fix'],
        meds: ['? combined oral contraceptive'],
        allergy: 'NKDA',
        recent: '"Third stress fracture this year \u2014 just sort my foot so I can keep training."',
        reason: 'Video consultation \u2014 a recurrent stress fracture in a keen runner.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Reframe past the foot', d:'Three fractures/year = systemic red flag (RED-S), not bad luck; look deeper.' },
        { t:'2\u20135',  h:'Energy + eating screen', d:'Intake vs training, restriction, weight/body focus \u2014 sensitively, non-judgementally.' },
        { t:'5\u20137',  h:'Menstrual clue + mask', d:'Amenorrhoea/oligomenorrhoea; the combined pill masks it; lost periods not "just running"; pregnancy test, then prolactin/LH/FSH.' },
        { t:'7\u20139',  h:'Investigate', d:'Face to face; confirm fracture; pregnancy test, FBC/ferritin/vit D/TFT/coeliac/hormones incl. prolactin; consider DEXA.' },
        { t:'9\u201312', h:'Refer + fuel = performance', d:'Sports medicine, dietitian, ED/psychology; modified training + fuelling; review.' }
      ],
      wordPics: {
        fail: 'Treats the fracture (boot) and sends her back to training; never screens eating/energy or menstrual history; misses RED-S and the masking pill.',
        pass: 'Recognises the RED-S red flag, screens eating/menstrual history and refers multidisciplinary.',
        exc:  'Reframes recurrent fractures as RED-S, sensitively screens eating/energy and menstrual history (noting the pill mask), examines face to face and investigates including DEXA, refers multidisciplinary, and frames fuelling as the route to performance \u2014 without shaming.'
      },
      avoid: [
        { dont:'"Here\u2019s a boot \u2014 rest it and you\u2019ll be back running soon."', instead:'"Three fractures in a year is your body warning us \u2014 let\u2019s find why, or you\u2019ll get a fourth."', why:'Treating the bone alone misses RED-S and guarantees recurrence.' },
        { dont:'(Dismissing) "Losing your periods is normal with all that running."', instead:'"Losing periods isn\u2019t normal \u2014 it\u2019s a sign your body\u2019s under-fuelled and your bones are at risk; and the pill can hide it."', why:'Amenorrhoea is a cardinal RED-S clue, not a benign training effect.' },
        { dont:'(Shaming) "You\u2019re not eating enough \u2014 you need to eat more, simple."', instead:'"Can we look at fuelling together? Eating enough is how you run faster and stay injury-free \u2014 it\u2019s on your side."', why:'Shaming alienates; framing fuelling as performance-enhancing engages her.' }
      ]
    }

  });

})();
