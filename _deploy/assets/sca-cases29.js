/* ============================================================
   Reasoning GP — Case Library batch 29: "Sexual & reproductive health"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   Safeguarding (Fraser/UPSI), partner notification, fertility stakes.
   No NG12 cancer link applies (correctly omitted).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases28.js.
   ============================================================ */

(function(){

  /* ============ 109. TELEPHONE — PID: treat empirically, protect fertility ============ */
  const c109 = {
    id:'pid-young-woman', title:'"It\u2019s probably just a water infection again"', type:'telephone', duration:12,
    meta:{ age:23, sex:'F', setting:'Telephone \u2014 lower abdominal pain + discharge.', system:'Sexual health / Pelvic inflammatory disease' },
    brief:'Miss Demi Carter, 23. Rings about lower abdominal pain (several days, both sides), an abnormal vaginal discharge, deep pain with sex, and \u2014 if asked \u2014 some intermenstrual/post-coital bleeding and a low-grade fever. She blames "another water infection" and wants antibiotics for that. Recent new partner, inconsistent condoms. LMP ~3 weeks ago. No contraception. She is keen to keep it quick and "not make a thing of it". No syncope/shoulder-tip pain.',
    script:{
      opening:'"Hiya \u2014 I keep getting these water infections, I think I\u2019ve got another one. Bit of pain low down in my tummy and some discharge. Could you just put me a prescription through for some antibiotics like last time? I\u2019m at work, I don\u2019t really want a big fuss or to come in for tests and all that. It\u2019s just a UTI, isn\u2019t it?"',
      facts:[
        { topic:'Why it\u2019s not a UTI',  text:'If explored: BILATERAL lower abdominal pain, abnormal vaginal DISCHARGE, DEEP DYSPAREUNIA, intermenstrual/post-coital bleeding, low-grade fever \u2014 in a young woman with a new partner and inconsistent condoms. This is pelvic inflammatory disease (PID), not a UTI (which gives dysuria/frequency without discharge or dyspareunia). The "water infection" label is a misattribution.' },
        { topic:'Exclude pregnancy/ectopic', text:'CRITICAL: any young woman with lower abdominal pain needs a pregnancy test \u2014 to exclude ectopic pregnancy (and because management differs in pregnancy). Screen the ectopic red flags (severe/unilateral pain, shoulder-tip pain, syncope, amenorrhoea) \u2014 absent here, but must be asked.' },
        { topic:'Why empirical treatment matters', text:'PID is a CLINICAL diagnosis treated EMPIRICALLY and PROMPTLY \u2014 a low threshold is recommended because delay risks tubal damage, chronic pelvic pain, ectopic pregnancy and INFERTILITY. Waiting for swab results before treating is the wrong approach; take swabs (NAAT for chlamydia/gonorrhoea) but start treatment.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the "just a UTI, keep it quick" is partly avoidance/shame: she suspects it might be sexually transmitted (her new partner has been unreliable and she\u2019s worried he\u2019s been unfaithful), is frightened of the words "STI" and of being judged, and dreads the partner-notification conversation. There\u2019s also an unspoken fear about her future fertility. Surfacing this gently is central.' },
        { topic:'What she needs',       text:'Officially: antibiotics for a "UTI". What she needs: recognition of PID, a pregnancy test, sexual-health assessment (swabs/NAAT, examination), PROMPT empirical PID treatment, an HIV/STI screen offered, partner notification handled without shame, and the fertility stakes addressed.' },
      ],
      ice:{
        ideas:'It\u2019s just another water infection; antibiotics for a UTI will sort it.',
        concerns:'HIDDEN AGENDA \u2014 she half-suspects it\u2019s sexually transmitted (unreliable new partner, fears infidelity), is frightened of the "STI" label and of being judged, dreads telling the partner, and has an unspoken fear about her fertility.',
        expectations:'A quick antibiotic prescription for a UTI. What she actually needs: recognition of PID, a pregnancy test, prompt empirical treatment, an STI screen, non-judgemental partner notification, and the fertility stakes addressed.'
      },
      cues:['Bilateral pelvic pain + discharge + deep dyspareunia + IMB/PCB + new partner \u2014 PID, not a UTI; treat empirically.','Any young woman with abdo pain \u2014 do a pregnancy test; screen ectopic red flags.','"Just a UTI, keep it quick, no fuss" \u2014 shame/avoidance about a possible STI and the partner conversation; surface it gently.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises PELVIC INFLAMMATORY DISEASE from the picture (bilateral lower abdominal pain, abnormal discharge, deep dyspareunia, IMB/PCB, fever, sexual risk) and does NOT treat it as a UTI with a quick antibiotic for cystitis' },
      { dom:'tasks', text:'Excludes PREGNANCY/ECTOPIC: arranges a pregnancy test and screens the ectopic red flags (severe/unilateral pain, shoulder-tip pain, syncope, amenorrhoea), recognising abdominal pain in a young woman always needs this' },
      { dom:'tasks', text:'Treats PID PROMPTLY and EMPIRICALLY (low threshold): starts recommended empirical antibiotic therapy (e.g. ceftriaxone + doxycycline + metronidazole per BASHH) without waiting for swab results \u2014 because delay risks infertility, chronic pain and ectopic \u2014 while taking swabs (NAAT for chlamydia/gonorrhoea) and arranging examination' },
      { dom:'tasks', text:'Offers a full sexual-health assessment/screen (chlamydia, gonorrhoea, HIV, syphilis), advice on abstaining until treated, contraception review, and considers sexual-health-clinic involvement \u2014 rather than a phone antibiotic alone' },
      { dom:'tasks', text:'Handles PARTNER NOTIFICATION/contact tracing: explains current and recent partners need testing/treatment to prevent reinfection and onward spread, offered supportively and confidentially (clinic/provider options), without shame' },
      { dom:'rto',   text:'Hears the avoidance/shame and the fear of infidelity/judgement, surfaces it gently, and does NOT collude with "just a UTI"; normalises the situation and reduces stigma' },
      { dom:'rto',   text:'Addresses the unspoken FERTILITY fear honestly: prompt treatment protects future fertility \u2014 which is exactly why acting now matters \u2014 with reassurance balanced by honesty' },
      { dom:'gs',    text:'Safety-nets and follows up: red flags that mean urgent/emergency review (severe pain, high fever, vomiting, pregnancy/ectopic features \u2192 same-day/A&E), treatment plan and follow-up to confirm response and results, partner-notification support, and documentation' },
    ],
    worked:[
      { lbl:'Refuse the UTI label', txt:'"I\u2019m glad you rang \u2014 but I don\u2019t think this is a water infection, and I don\u2019t want to just send the wrong antibiotic. Pain low down on both sides, the discharge, pain deep during sex, a bit of bleeding \u2014 that points to an infection higher up, in the womb and tubes, which we call PID. It\u2019s common, it\u2019s treatable, but it\u2019s a different thing from a UTI and it matters that we get it right."' },
      { lbl:'Pregnancy first',      txt:'"First, an important check: any chance you could be pregnant? I ask everyone with tummy pain, because we always need to rule out a pregnancy in the wrong place. Any severe one-sided pain, pain in the tip of your shoulder, or feeling faint? \u2026 Good. We\u2019ll still do a pregnancy test to be sure."' },
      { lbl:'Treat now, don\u2019t wait', txt:'"Here\u2019s why I want to act quickly rather than wait for tests: with this kind of infection, treating promptly protects you \u2014 left too long it can affect the tubes and your fertility down the line. So I\u2019d start you on antibiotics today, take some swabs at the same time, and arrange to examine you \u2014 not wait around for results first."' },
      { lbl:'Open the real worry',  txt:'"Can I gently ask \u2014 is part of you worried this might be something caught from a partner? \u2026 You\u2019re not in any trouble, and there\u2019s no judgement here at all. It\u2019s really common, and the kind thing to do for yourself is just to test for everything and treat it. We can check for the common infections including HIV, all confidentially."' },
      { lbl:'Partner notification', txt:'"One part that feels awkward but really matters: your recent partner (or partners) would need testing and treating too \u2014 otherwise it can bounce straight back to you. The sexual-health clinic can even do that anonymously on your behalf if telling them yourself feels too hard. You don\u2019t have to do that part alone."' },
      { lbl:'Fertility + safety-net', txt:'"On the worry I suspect is underneath \u2014 your fertility \u2014 the honest, reassuring thing is that treating this promptly is exactly how we protect it, and most women who are treated quickly go on to have completely normal pregnancies. If meanwhile the pain becomes severe, you get a high fever, vomiting, or any of those one-sided/shoulder-tip pains \u2014 that\u2019s same-day, go to A&E. I\u2019ll start the treatment, sort the tests, and follow up your results with you."' },
    ],
    learning:'Bilateral lower abdominal pain with abnormal discharge, deep dyspareunia and intermenstrual/post-coital bleeding in a sexually-active young woman is pelvic inflammatory disease, NOT a UTI \u2014 and the cardinal rules are: always exclude pregnancy/ectopic (pregnancy test + red-flag screen), and treat PID PROMPTLY and EMPIRICALLY with a low threshold (recommended antibiotic regimen per BASHH), taking swabs/NAAT but NOT waiting for results, because delay risks tubal damage, chronic pelvic pain, ectopic pregnancy and infertility. Offer a full STI screen (incl. HIV), abstinence until treated, and contraception review. The examinable hidden agenda is shame/avoidance \u2014 she suspects a sexually transmitted cause, fears judgement and infidelity, dreads partner notification, and carries an unspoken fertility fear. Surface it gently without colluding with the "just a UTI" label, normalise and de-stigmatise, handle partner notification/contact tracing supportively (clinic/provider options), and address fertility honestly \u2014 prompt treatment protects it. Safety-net the PID/ectopic red flags.',
    knowledge:{
      guideline:'BASHH PID guideline · NICE CKS PID · BASHH partner notification · ectopic exclusion',
      points:[
        { h:'Diagnose PID clinically', t:'PID: lower abdominal/pelvic pain (often bilateral), abnormal vaginal/cervical discharge, deep dyspareunia, intermenstrual/post-coital bleeding, fever; signs include cervical motion tenderness and adnexal tenderness. It is a clinical diagnosis \u2014 distinguish from UTI (dysuria/frequency, no discharge/dyspareunia) and appendicitis.' },
        { h:'Always exclude pregnancy/ectopic', t:'Do a pregnancy test in any woman of reproductive age with abdominal/pelvic pain. Screen for ectopic red flags (severe/unilateral pain, shoulder-tip pain, syncope, amenorrhoea, bleeding) and refer urgently if suspected. Management differs in pregnancy.' },
        { h:'Treat promptly and empirically', t:'Have a LOW threshold to treat PID empirically WITHOUT waiting for swab results \u2014 delay causes tubal damage, chronic pelvic pain, ectopic pregnancy and infertility. Use a recommended regimen (e.g. ceftriaxone IM stat + oral doxycycline + metronidazole for 14 days per BASHH; adjust for severity/pregnancy/allergy). Severe PID (high fever, signs of pelvic abscess/peritonism, pregnancy, unable to tolerate oral) needs admission.' },
        { h:'Investigate without delaying treatment', t:'Take endocervical/vulvovaginal NAAT for chlamydia and gonorrhoea and a full STI screen (HIV, syphilis); examine where possible. Results guide tailoring but do not delay starting treatment.' },
        { h:'Partner notification', t:'Current and recent sexual partners need testing and treating (empirically for chlamydia, and per results) to prevent reinfection and onward transmission. Offer this supportively and confidentially; sexual-health services can perform provider/anonymous partner notification. Advise abstaining from sex until the patient and partner(s) have completed treatment.' },
        { h:'Address shame & fertility', t:'Stigma and fear (of an STI label, judgement, infidelity, the partner conversation, and fertility) drive minimisation ("just a UTI"). Surface gently, normalise, and address fertility honestly: prompt treatment protects future fertility, and most promptly-treated women conceive normally.' },
        { h:'Never do', t:'Never treat PID as a UTI with a cystitis antibiotic; never omit the pregnancy test/ectopic screen; never wait for swab results before treating; never skip the STI screen and partner notification; never let shame/avoidance go unaddressed or collude with the "just a UTI" framing.' },
        { h:'Safety-net & follow-up', t:'Severe pain/high fever/vomiting or ectopic features \u2192 same-day/A&E; review at 72 hours and after results; confirm partner notification and abstinence; contraception review; document the clinical diagnosis and plan.' }
      ]
    }
  };

  /* ============ 110. TELEPHONE — Emergency contraception request (+ safeguarding) ============ */
  const c110 = {
    id:'emergency-contraception', title:'"I need the morning-after pill \u2014 quickly, please"', type:'telephone', duration:12,
    meta:{ age:16, sex:'F', setting:'Telephone \u2014 request for emergency contraception.', system:'Sexual health / Emergency contraception & Fraser' },
    brief:'Caller: a 16-year-old, "Aimee", rings requesting the morning-after pill after unprotected sex. She is rushed, embarrassed, wants it sorted fast. On sensitive questioning: the UPSI was ~3 days (72 h) ago, mid-cycle; no regular contraception. She is 16. If gently explored, her partner is 25 and they "met online" \u2014 a potential safeguarding/CSE concern. She is competent and articulate. Wants the pill without "loads of questions". No features of pregnancy/STI symptoms volunteered.',
    script:{
      opening:'"Hi, um \u2014 I need the morning-after pill please. We didn\u2019t use anything and I really don\u2019t want to be pregnant. Can I just get it sorted today, like at the chemist or whatever? I\u2019d rather not go through a load of questions if that\u2019s okay, it\u2019s a bit embarrassing. How quickly can I get it?"',
      facts:[
        { topic:'The timing/method choice', text:'If clarified: the UPSI was ~72 hours ago, mid-cycle (higher conception risk). Method matters: the COPPER IUD is the most effective EC (up to 5 days after UPSI or earliest estimated ovulation) and should be offered/recommended; oral options are ulipristal acetate (ellaOne, up to 120 h, more effective than levonorgestrel, especially mid-cycle/later) and levonorgestrel (up to 72 h). At ~72 h mid-cycle, ulipristal or the copper IUD are preferable to levonorgestrel.' },
        { topic:'The Fraser/competence assessment', text:'She is 16 \u2014 generally presumed competent, but the consultation must still assess understanding and best interests, and crucially screen for COERCION/abuse and ongoing contraception/STI needs.' },
        { topic:'The SAFEGUARDING red flag', text:'CRITICAL \u2014 on gentle questioning, her partner is 25 and they met online. A significant age gap (and online grooming pattern) in a 16-year-old raises CHILD SEXUAL EXPLOITATION / abuse concerns that must be sensitively explored and may require safeguarding action \u2014 even though 16 is the age of consent, exploitation, power imbalance and coercion still need assessing. This must be handled without alienating her.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the "just give it to me quickly, no questions" is embarrassment AND a wish to avoid scrutiny of the relationship she half-knows others would worry about; she may be minimising the partner\u2019s age or controlling behaviour. The skill is to meet her practical need promptly (she IS entitled to EC) while gently, non-judgementally exploring the safeguarding picture and her ongoing needs \u2014 keeping her trust.' },
        { topic:'What she needs',     text:'Officially: the morning-after pill, fast, no questions. What she needs: prompt, effective EC (offer copper IUD as most effective; ulipristal given timing) provided without unnecessary barriers, a sensitive Fraser/safeguarding assessment of the older-partner/online concern, STI screening, ongoing contraception, and support \u2014 balancing prompt access with safeguarding.' },
      ],
      ice:{
        ideas:'She just needs the morning-after pill quickly and would rather skip the questions.',
        concerns:'HIDDEN AGENDA \u2014 embarrassment plus a wish to avoid scrutiny of a relationship (25-year-old partner, met online) she half-knows others would worry about; possible minimisation of his age/control.',
        expectations:'Fast EC with no questions. What she actually needs: prompt effective EC, a sensitive Fraser/safeguarding assessment of the older-partner concern, STI screening and ongoing contraception \u2014 access balanced with safeguarding.'
      },
      cues:['~72 h post-UPSI, mid-cycle \u2014 method choice matters (copper IUD most effective; ulipristal over levonorgestrel here).','16-year-old + "no questions" \u2014 provide EC promptly but assess Fraser/competence and ongoing needs.','Partner is 25, met online \u2014 a safeguarding/CSE red flag to explore sensitively without alienating her.']
    },
    checkpoints:[
      { dom:'tasks', text:'Provides EMERGENCY CONTRACEPTION promptly without unnecessary barriers, AND advises on the most effective method: the COPPER IUD is the most effective EC (offer/recommend, effective up to 5 days), with oral options ulipristal acetate (up to 120 h, preferred over levonorgestrel at ~72 h/mid-cycle) and levonorgestrel \u2014 chosen by timing/cycle and patient preference' },
      { dom:'tasks', text:'Assesses FRASER competence/best interests appropriately for a 16-year-old and ensures understanding, while not creating barriers to a time-sensitive treatment she is entitled to' },
      { dom:'tasks', text:'Screens for SAFEGUARDING/CSE: gently explores the relationship (partner age 25, met online), coercion/control, capacity to consent, and other exploitation indicators \u2014 recognising the significant age gap and online pattern as red flags requiring sensitive assessment and possible safeguarding action per local pathways' },
      { dom:'tasks', text:'Addresses ONGOING contraception (so she\u2019s not back in the same position) and STI risk (testing/screening), and gives advice on what to do if her period is late / a pregnancy test is needed afterwards' },
      { dom:'tasks', text:'Knows the practical points: ulipristal vs levonorgestrel interaction (don\u2019t mix; quick-starting hormonal contraception differs after ulipristal), to repeat the dose if vomiting occurs, and that EC does not protect for the rest of the cycle' },
      { dom:'rto',   text:'Meets her need promptly and non-judgementally so she stays engaged, while gently raising the safeguarding questions in a way that doesn\u2019t feel like interrogation or alienate her' },
      { dom:'rto',   text:'Balances her autonomy and confidentiality with the duty to safeguard \u2014 being honest about limits if a serious safeguarding concern requires sharing information, ideally with her involvement' },
      { dom:'gs',    text:'Safety-nets and follows up: pregnancy test if period >7 days late or lighter than usual, STI screen and ongoing-contraception plan, safeguarding referral/discussion as indicated, sources of support, and a route back \u2014 prompt access AND safeguarding both delivered' },
    ],
    worked:[
      { lbl:'Meet the need first',  txt:'"Of course \u2014 and well done for sorting this quickly, that\u2019s the sensible thing. I can absolutely help you get emergency contraception today. Let me ask just a few quick things so I give you the option that works best for you, not to make it awkward \u2014 is that okay?"' },
      { lbl:'Pick the right method', txt:'"When exactly was the unprotected sex? \u2026 About three days ago, and roughly mid-cycle. That matters: there\u2019s a tablet called ellaOne that works better than the standard morning-after pill at this point, and there\u2019s also a small coil that\u2019s actually the most effective option of all and can go in up to five days after \u2014 it also then keeps protecting you. I\u2019ll talk you through both so you can choose."' },
      { lbl:'Open the door gently', txt:'"Can I ask a bit about your partner, just so I\u2019m looking after you properly? \u2026 He\u2019s 25, and you met online. Okay. I\u2019m not judging you at all \u2014 I ask because when there\u2019s a bigger age gap, I just want to make sure you feel completely in control and that everything\u2019s happening because YOU want it to. How did things start between you?"' },
      { lbl:'Safeguard without alienating', txt:'"You\u2019ve handled this really maturely. The reason I gently ask is part of my job is making sure no one\u2019s taking advantage or pressuring you \u2014 and if anything ever didn\u2019t feel okay, I\u2019d help, not judge. Most of what you tell me stays private; the only time I\u2019d need to involve anyone else is if I were worried about your safety, and I\u2019d talk to you first."' },
      { lbl:'Ongoing needs',        txt:'"Two more useful things: shall we sort some regular contraception so you\u2019re not back here stressed again \u2014 there are options that are very reliable and easy. And because no condom was used, it\u2019s worth a quick check for infections too, all confidential. None of that has to be a big deal."' },
      { lbl:'Safety-net',           txt:'"So \u2014 I\u2019ll get you the emergency contraception today and explain the choices. If you\u2019re sick within a couple of hours of the tablet, ring back as you may need another. Do a pregnancy test if your period\u2019s more than a week late or seems different. And you can come back to me about ANYTHING \u2014 the relationship, contraception, infections, anything at all. You\u2019re not in trouble and you\u2019re not on your own."' },
    ],
    learning:'An emergency-contraception request from a 16-year-old must deliver TWO things at once: prompt, barrier-free access to effective EC, AND a sensitive safeguarding assessment. On method, advise by timing/cycle \u2014 the COPPER IUD is the most effective EC (up to 5 days, and provides ongoing contraception), ulipristal acetate is preferred over levonorgestrel at ~72 h/mid-cycle (effective up to 120 h), and levonorgestrel up to 72 h; mind the practical points (don\u2019t mix ulipristal and levonorgestrel, repeat if vomiting, EC doesn\u2019t cover the rest of the cycle, quick-start ongoing contraception). Assess Fraser competence and ensure understanding without obstructing a time-sensitive treatment she is entitled to. The examinable core is the SAFEGUARDING red flag \u2014 a 25-year-old partner met online \u2014 which, despite 16 being the age of consent, raises CSE/exploitation and coercion concerns to be explored gently and acted on per local pathways, balancing her autonomy/confidentiality with the duty to safeguard (honest about limits, ideally involving her). Address ongoing contraception and STI screening, and meet her need non-judgementally so she stays engaged.',
    knowledge:{
      guideline:'FSRH emergency contraception · GMC 0\u201318 / Fraser competence · CSE safeguarding guidance',
      points:[
        { h:'Offer the most effective EC', t:'The COPPER INTRAUTERINE DEVICE is the most effective emergency contraception (can be inserted up to 5 days after UPSI or up to 5 days after the earliest estimated ovulation) and provides ongoing contraception \u2014 offer/recommend it. Oral options: ulipristal acetate (up to 120 h; more effective than levonorgestrel, particularly mid-cycle/later) and levonorgestrel (up to 72 h, less effective and weight/enzyme-affected). Choose by timing, cycle and preference.' },
        { h:'Practical pitfalls', t:'Do not give ulipristal and levonorgestrel together. Quick-starting hormonal contraception is delayed after ulipristal (wait 5 days) but immediate after levonorgestrel (with extra precautions). Repeat the dose if vomiting occurs within 2\u20133 hours. EC does NOT protect for the rest of the cycle \u2014 advise ongoing contraception and barrier use.' },
        { h:'Fraser competence', t:'A 16-year-old is generally presumed competent for treatment decisions; for under-16s apply Fraser criteria. Either way, assess understanding and best interests and do not create barriers to time-sensitive EC, while exploring confidentiality and safeguarding.' },
        { h:'Safeguarding / CSE', t:'Age of consent is 16, but exploitation, coercion and power imbalance still need assessing. A significant age gap, online grooming pattern, gifts/secrecy, substance involvement, or controlling behaviour are CSE red flags. Explore sensitively; act per local safeguarding pathways; balance autonomy/confidentiality with the duty to protect, sharing information (ideally with the young person\u2019s involvement) where serious risk exists.' },
        { h:'Ongoing contraception & STI', t:'Use the consultation to arrange reliable ongoing contraception (LARC ideal) so she isn\u2019t back in the same position, and to offer STI screening (no condom used). Advise on pregnancy testing if the period is late/abnormal.' },
        { h:'Engagement', t:'Meet the practical need promptly and non-judgementally to retain trust; raise safeguarding questions gently, not as interrogation, so the young person stays engaged and discloses.' },
        { h:'Never do', t:'Never obstruct/delay time-sensitive EC with unnecessary barriers; never default to levonorgestrel without considering the copper IUD/ulipristal; never ignore the older-partner/online safeguarding red flag; never breach confidentiality without cause, nor ignore a genuine safeguarding risk; never skip ongoing contraception/STI needs.' },
        { h:'Safety-net & follow-up', t:'Repeat EC if vomiting; pregnancy test if period >7 days late/abnormal; STI screen and ongoing-contraception plan; safeguarding referral/discussion as indicated; clear route back for the relationship, contraception or any concern.' }
      ]
    }
  };

  /* ============ 111. VIDEO — PCOS named kindly (metabolic + fertility + body image) ============ */
  const c111 = {
    id:'pcos-named', title:'"Why can\u2019t I lose weight and why am I so hairy?"', type:'video', duration:12,
    meta:{ age:27, sex:'F', setting:'Video consultation \u2014 irregular periods, hirsutism, weight.', system:'Endocrine / Polycystic ovary syndrome' },
    brief:'Miss Bethan Lloyd, 27. Attends about irregular/infrequent periods (every 2\u20133 months), unwanted facial/body hair, acne, and difficulty losing weight despite trying. Bloods/USS (arranged previously) fit PCOS. She is distressed about her appearance and, if explored, has just got engaged and is privately terrified she "won\u2019t be able to have children". Low mood about her body. BMI 31. Family history of type 2 diabetes. Wants "something to fix the weight and the hair".',
    script:{
      opening:'"Thanks for seeing me. I just feel like my body\u2019s against me \u2014 my periods are all over the place, I\u2019ve got hair growing where I really don\u2019t want it, my skin\u2019s bad, and no matter what I do I can\u2019t shift the weight. I feel disgusting, honestly. I read it might be polycystic ovaries? I just want something to fix the weight and the hair. Is there a tablet or something?"',
      facts:[
        { topic:'The PCOS picture',     text:'If reviewed: oligomenorrhoea, clinical hyperandrogenism (hirsutism, acne), and polycystic ovaries/biochemistry \u2014 fitting the Rotterdam criteria for PCOS. Named kindly and explained as a common, manageable hormonal condition (not a personal failing).' },
        { topic:'The metabolic dimension', text:'PCOS carries insulin resistance and raised risk of type 2 diabetes, dyslipidaemia and (with prolonged amenorrhoea/unopposed oestrogen) endometrial hyperplasia \u2014 so management isn\u2019t just cosmetic: weight/lifestyle, metabolic screening (HbA1c), and ensuring regular endometrial shedding matter. Family history of T2DM is relevant.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 beneath "fix the weight and hair" is a recently-engaged woman terrified she\u2019s "broken" and won\u2019t be able to have children, and significant body-image distress/low mood (she said "I feel disgusting"). The fertility fear and the mood/self-esteem are the real consultation; the cosmetic request is the entry point. There may be shame she hasn\u2019t voiced to her fianc\u00e9.' },
        { topic:'The reassurance available', text:'If reached: PCOS is one of the most common and most manageable causes of subfertility \u2014 many women conceive with weight management and, if needed, ovulation-induction treatments; symptoms (hair, acne, cycles) are treatable; and the weight difficulty is partly the condition, not just willpower. This reframes self-blame into a manageable plan.' },
        { topic:'What she needs',     text:'Officially: a tablet for weight and hair. What she needs: PCOS named kindly and explained, the metabolic risks addressed (lifestyle, HbA1c, endometrial protection), symptom management (cycle regulation/COCP, anti-androgen/cosmetic options for hirsutism, acne treatment), honest and largely-reassuring fertility information, and her body-image/mood addressed.' },
      ],
      ice:{
        ideas:'Her body is "against her"/she\u2019s failing; she wants a tablet to fix the weight and the hair.',
        concerns:'HIDDEN AGENDA \u2014 recently engaged and terrified she\u2019s "broken" and can\u2019t have children; significant body-image distress and low mood ("I feel disgusting"); possible shame she hasn\u2019t shared with her fianc\u00e9.',
        expectations:'A quick fix for weight and hair. What she actually needs: PCOS named kindly, metabolic risks managed, symptom treatment, honest reassuring fertility information, and her mood/body-image addressed.'
      },
      cues:['Oligomenorrhoea + hirsutism/acne + weight difficulty \u2014 PCOS; name it kindly, not as a failing.','Recently engaged + "can\u2019t shift the weight, feel disgusting" \u2014 the fertility fear and body-image/mood underneath.','"Just fix the weight and hair" \u2014 cosmetic request as the entry point to the real (fertility + mood) consultation.']
    },
    checkpoints:[
      { dom:'tasks', text:'NAMES PCOS kindly and explains it as a common, manageable hormonal condition (Rotterdam: oligo/anovulation, clinical/biochemical hyperandrogenism, polycystic ovaries) \u2014 NOT a personal failing \u2014 and that the weight difficulty is partly the condition, reducing self-blame' },
      { dom:'tasks', text:'Addresses the METABOLIC dimension: insulin resistance and raised type 2 diabetes/CVD risk (screen with HbA1c, lipids, BP), the importance of weight/lifestyle, and ensuring regular endometrial shedding to reduce endometrial hyperplasia risk with prolonged amenorrhoea' },
      { dom:'tasks', text:'Offers SYMPTOM management: cycle regulation/endometrial protection (e.g. combined hormonal contraception or cyclical progestogen), hirsutism options (COCP \u00b1 anti-androgen, cosmetic measures, eflornithine), and acne treatment \u2014 with realistic timeframes' },
      { dom:'tasks', text:'Gives honest, largely REASSURING fertility information: PCOS is a common, very treatable cause of reduced fertility; weight loss improves ovulation, and ovulation-induction options exist \u2014 directly addressing the "I\u2019m broken/can\u2019t have children" fear once surfaced' },
      { dom:'tasks', text:'Addresses MOOD and body-image: screens for low mood/depression (PCOS carries higher rates), validates the distress, and offers support \u2014 recognising the psychological impact as part of care, not an aside' },
      { dom:'rto',   text:'Hears the cosmetic request as an entry point and surfaces the deeper fertility fear and body-image distress gently, rather than just prescribing for weight/hair; counters the self-blame ("feel disgusting") with compassion' },
      { dom:'rto',   text:'Frames the plan as collaborative and hopeful, and explores whether she has support (the fianc\u00e9) and how she\u2019s coping emotionally' },
      { dom:'gs',    text:'Safety-nets and follows up: metabolic screening and monitoring plan, symptom-treatment review, pre-conception/fertility pathway when relevant (folic acid, weight, referral threshold), mood support, and a follow-up that holds the whole picture \u2014 not a one-off cosmetic fix' },
    ],
    worked:[
      { lbl:'Name it kindly',       txt:'"First, let me give this a name, because I think it\u2019ll help: what you\u2019re describing fits polycystic ovary syndrome, PCOS. It\u2019s really common, it\u2019s a hormone imbalance \u2014 not anything you\u2019ve done wrong \u2014 and crucially it\u2019s manageable. And the bit about not being able to shift the weight however hard you try? That\u2019s partly the condition itself, not a lack of willpower. Please don\u2019t carry that as a personal failing."' },
      { lbl:'It\u2019s more than cosmetic', txt:'"There\u2019s a tablet question, and we\u2019ll get to the hair and skin \u2014 but I want to look after the whole of you. PCOS can nudge up the risk of things like type 2 diabetes over time, so I\u2019ll check a few bloods and we\u2019ll think about lifestyle in a realistic way. And because your periods are infrequent, I want to make sure the womb lining sheds regularly \u2014 there\u2019s a simple way to sort that."' },
      { lbl:'Surface the real fear', txt:'"Can I gently ask \u2014 you mentioned you\u2019ve just got engaged. Is part of what\u2019s frightening you whether you\u2019ll be able to have children? \u2026 Thank you for telling me. That fear is so common with this, and here\u2019s the honest, reassuring truth: PCOS is one of the most treatable causes of difficulty conceiving. Lots of women with it have babies \u2014 weight loss helps ovulation, and if needed there are very effective treatments to help you ovulate. You are not broken."' },
      { lbl:'Treat the symptoms',   txt:'"For the hair and skin and cycles: a combined pill can regulate periods, calm the acne and reduce the unwanted hair, sometimes with an added anti-androgen, plus there are creams and cosmetic options for the hair. It takes a few months to see the benefit, so we\u2019ll be patient and review."' },
      { lbl:'Mind and body',        txt:'"You said you feel disgusting \u2014 and I want to gently push back on that, because this is a medical condition, not a verdict on you. How have you been in yourself, mood-wise? \u2026 PCOS can drag the mood down, and that matters as much as the rest. If things are low, we\u2019ll support that too \u2014 you don\u2019t have to white-knuckle it."' },
      { lbl:'Plan + safety-net',    txt:'"So: I\u2019ll do the metabolic bloods, sort cycle regulation and start on the hair/skin side, and we\u2019ll make a realistic plan for weight together. When you and your fianc\u00e9 are thinking about a baby, come back and we\u2019ll plan it properly \u2014 folic acid, and a clear path including referral if you need help ovulating. And let\u2019s book a follow-up just to see how you\u2019re doing, in yourself as well. You came in feeling your body\u2019s against you; what you\u2019ve actually got is something common, named, and very workable."' },
    ],
    learning:'Oligomenorrhoea with clinical hyperandrogenism (hirsutism, acne) and weight difficulty fits PCOS \u2014 and the first task is to NAME it kindly, as a common, manageable hormonal condition and not a personal failing, explicitly noting that the weight difficulty is partly the condition (reducing self-blame). Management is not cosmetic: address the metabolic dimension (insulin resistance, type 2 diabetes/CVD risk \u2014 HbA1c/lipids/BP, weight/lifestyle) and ensure regular endometrial shedding to reduce endometrial hyperplasia risk; treat symptoms (cycle regulation/COCP, anti-androgen and cosmetic options for hirsutism, acne treatment) with realistic timeframes. The examinable hidden agenda is a recently-engaged woman\u2019s terror that she is "broken" and cannot conceive, plus significant body-image distress and low mood ("I feel disgusting"). Surface the fertility fear and deliver the honest, largely-reassuring message (PCOS is a common, very treatable cause of subfertility; weight loss improves ovulation; ovulation-induction exists), screen and support mood, counter the self-blame with compassion, and make a collaborative plan with a pre-conception/fertility pathway and follow-up that holds the whole person.',
    knowledge:{
      guideline:'NICE CKS PCOS · international PCOS guideline (Rotterdam) · pre-conception care',
      points:[
        { h:'Diagnose with Rotterdam criteria', t:'PCOS = 2 of 3: oligo/anovulation (irregular/infrequent periods), clinical and/or biochemical hyperandrogenism (hirsutism, acne, raised free androgens), and polycystic ovaries on ultrasound \u2014 after excluding mimics (thyroid, prolactin, congenital adrenal hyperplasia, Cushing\u2019s). Name it as a common, manageable condition.' },
        { h:'Metabolic risk is central', t:'PCOS is associated with insulin resistance and increased risk of type 2 diabetes, gestational diabetes, dyslipidaemia and metabolic syndrome. Screen with HbA1c (and lipids/BP), and prioritise weight management/lifestyle \u2014 even modest weight loss improves cycles, symptoms and ovulation. The weight difficulty is partly intrinsic, not just behavioural.' },
        { h:'Protect the endometrium', t:'Prolonged amenorrhoea/anovulation means unopposed oestrogen and endometrial hyperplasia risk. Ensure regular withdrawal bleeds (combined hormonal contraception, or cyclical progestogen at least every 3\u20134 months) \u2014 an easily-missed but important task.' },
        { h:'Symptom management', t:'Hirsutism: combined hormonal contraception \u00b1 anti-androgen (e.g. co-cyprindiol or spironolactone), cosmetic measures, topical eflornithine \u2014 with realistic timeframes (months). Acne: standard acne pathway. Cycle regulation with COCP. Set expectations about gradual benefit.' },
        { h:'Fertility \u2014 honest reassurance', t:'PCOS is a leading, very treatable cause of subfertility. Weight loss restores ovulation in many; ovulation-induction (e.g. letrozole) and specialist pathways help others. Most women with PCOS can have children. Provide pre-conception care (folic acid, weight, screening) and a referral pathway when trying.' },
        { h:'Mood & body image', t:'PCOS carries higher rates of depression, anxiety and body-image distress and disordered eating. Screen mood, validate the distress, counter self-blame, and offer support \u2014 the psychological impact is part of the condition, not an aside.' },
        { h:'Never do', t:'Never treat it as merely cosmetic (a tablet for weight/hair) and miss the metabolic, endometrial, fertility and mood dimensions; never frame the weight as pure willpower; never leave the fertility fear or low mood unaddressed; never set unrealistic symptom-timeframe expectations.' },
        { h:'Safety-net & follow-up', t:'Metabolic screening and monitoring; cycle/endometrial protection and symptom treatment with review; pre-conception/fertility pathway when relevant; mood support; a holistic follow-up rather than a one-off cosmetic fix.' }
      ]
    }
  };

  /* ============ 112. TELEPHONE — Chlamydia-positive result: contact tracing without shame ============ */
  const c112 = {
    id:'chlamydia-positive', title:'"My test was positive \u2014 does this mean he\u2019s cheated?"', type:'telephone', duration:12,
    meta:{ age:25, sex:'F', setting:'Telephone \u2014 giving a positive chlamydia result.', system:'Sexual health / STI result & partner notification' },
    brief:'Miss Orla Devine, 25. A chlamydia NAAT (done at a routine pill check / after some IMB) is POSITIVE. She is in a 2-year relationship and is upset and angry \u2014 "does this mean he\u2019s been cheating?" She is otherwise well; if asked, some IMB and mild pelvic discomfort. She wants to know how she got it and what it means for her relationship and fertility. No severe pain/systemic features. On combined pill.',
    script:{
      opening:'"You said my result was back? \u2026 Positive? For chlamydia? But \u2014 I\u2019ve been with my boyfriend two years, there\u2019s been no one else for me. So that means HE\u2019S cheated, right? I\u2019m so angry, and also \u2014 oh god \u2014 is it serious? Can it stop me having kids? I don\u2019t even know what to think right now."',
      facts:[
        { topic:'The result & treatment', text:'Chlamydia is common, easily treated (e.g. doxycycline 7 days per BASHH; azithromycin where doxycycline unsuitable, e.g. pregnancy), and usually asymptomatic. The management: treat her, treat the partner, screen for other STIs (HIV, gonorrhoea, syphilis), advise abstaining until both treated, and arrange a test of reinfection/follow-up as indicated.' },
        { topic:'The "has he cheated?" trap', text:'CRITICAL communication point \u2014 chlamydia can be present silently for months to YEARS, so a positive test does NOT prove recent infidelity. The GP must NOT confirm or fuel the "he cheated" conclusion; explain honestly that the timing of acquisition often can\u2019t be determined, avoiding both false reassurance and inflaming the relationship. This is the examinable nuance.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 her distress is really about the RELATIONSHIP (trust, betrayal) and a deeper fear about FERTILITY, more than the infection itself. There may also be shame/embarrassment and worry about how to even raise it with her partner. The consultation is as much about supporting her through a relationship shock and partner notification as about prescribing antibiotics.' },
        { topic:'Partner notification reframed', text:'She needs the partner tested and treated \u2014 but framed not as "confronting a cheater" but as a health necessity to prevent reinfection and protect them both; the clinic can do anonymous provider notification if she prefers. Handling the emotional charge so partner notification actually happens is the skill.' },
        { topic:'What she needs',     text:'Officially: to know if he cheated and whether she can have children. What she needs: treatment, an honest explanation that timing of acquisition is uncertain (don\u2019t confirm infidelity), partner notification and STI screening handled supportively, accurate fertility reassurance (single treated infection rarely causes infertility; untreated/recurrent PID is the risk), and emotional support.' },
      ],
      ice:{
        ideas:'A positive chlamydia test means her partner has definitely cheated, and it might stop her having children.',
        concerns:'HIDDEN AGENDA \u2014 the real distress is about the relationship (trust/betrayal) and a deeper fertility fear, more than the infection; plus shame and dread of raising it with her partner.',
        expectations:'To be told whether he cheated and whether she can have kids. What she actually needs: treatment, an honest "timing is uncertain" (not confirmation of infidelity), supportive partner notification/STI screening, accurate fertility reassurance, and emotional support.'
      },
      cues:['"Does this mean he\u2019s cheated?" \u2014 chlamydia can be silent for years; don\u2019t confirm infidelity, explain timing is uncertain.','"Can it stop me having kids?" \u2014 the deeper fertility fear; reassure accurately (single treated infection rarely causes infertility).','Anger/distress about the relationship \u2014 the real consultation is emotional support + getting partner notification to happen.']
    },
    checkpoints:[
      { dom:'tasks', text:'Treats the chlamydia correctly (e.g. doxycycline 7 days per BASHH; alternative if contraindicated/pregnant), advises ABSTAINING from sex until she and her partner have completed treatment, and arranges follow-up/test of reinfection as indicated' },
      { dom:'tasks', text:'Handles the "has he cheated?" question HONESTLY and carefully: explains chlamydia can be carried silently for months to years, so a positive result does NOT prove recent infidelity and the timing of acquisition often cannot be determined \u2014 avoiding both confirming infidelity and false reassurance' },
      { dom:'tasks', text:'Arranges PARTNER NOTIFICATION supportively: the partner needs testing and treating to prevent reinfection and protect them both; frames it as a health necessity (not confronting a cheater) and offers clinic/provider/anonymous options' },
      { dom:'tasks', text:'Offers a FULL STI screen (HIV, gonorrhoea, syphilis) and considers/asks about PID features (pelvic pain, IMB, deep dyspareunia, fever) \u2014 treating/escalating if PID is suspected' },
      { dom:'tasks', text:'Gives accurate FERTILITY information: a single, promptly-treated chlamydia infection rarely causes infertility; the risk comes from untreated or recurrent infection causing PID/tubal damage \u2014 which is exactly why treatment and partner notification matter \u2014 reassuring without dismissing' },
      { dom:'rto',   text:'Recognises the consultation is largely emotional \u2014 supports her through the relationship shock and anger, validates her feelings, and does NOT take sides or speculate about the partner\u2019s behaviour' },
      { dom:'rto',   text:'Helps her with the practicalities and emotional difficulty of telling her partner (or using anonymous notification), reducing shame and stigma' },
      { dom:'gs',    text:'Safety-nets and follows up: PID red flags (worsening pelvic pain, fever \u2192 review), completion of treatment and partner treatment before resuming sex, STI-screen results, contraception/condom advice, and emotional support/follow-up' },
    ],
    worked:[
      { lbl:'Steady + treatable',   txt:'"I can hear this has hit you hard, and I\u2019m sorry it\u2019s landed like this over the phone. Let me start with the reassuring bit: chlamydia is really common and very easily treated \u2014 a short course of antibiotics clears it. So the infection itself is the straightforward part. Let\u2019s take the rest gently."' },
      { lbl:'The cheating question, honestly', txt:'"On the question I know is burning \u2014 does this mean he\u2019s cheated? Here\u2019s the honest truth, and I won\u2019t pretend otherwise: chlamydia can sit in the body silently for months, even years, with no symptoms at all. So a positive test today genuinely does NOT prove anyone\u2019s been unfaithful, and I can\u2019t tell you when or where it was caught \u2014 no test can. I don\u2019t want you jumping to a conclusion the result doesn\u2019t actually support."' },
      { lbl:'The fertility fear',   txt:'"And the other big worry \u2014 your fertility. Reassuring news: a single chlamydia infection, caught and treated like yours is being now, very rarely affects fertility. The risk comes from infections left untreated for a long time or coming back repeatedly. So treating it promptly, and making sure it doesn\u2019t bounce back, is exactly how we protect your fertility \u2014 which is the whole point of what we\u2019re doing."' },
      { lbl:'Partner, reframed',    txt:'"Your partner does need testing and treating \u2014 but try to think of it as a health thing for both of you, not an accusation: if he\u2019s not treated, it just comes straight back to you. If telling him feels impossible, the sexual-health clinic can notify him anonymously on your behalf. You get to choose how that\u2019s done."' },
      { lbl:'Screen + support',     txt:'"While we\u2019re here, it\u2019s sensible to check for the other infections too \u2014 all routine and confidential. And can I ask \u2014 any pelvic pain, bleeding between periods, pain with sex? \u2026 We\u2019ll keep an eye on that. Mostly, though \u2014 how are YOU doing with all this? It\u2019s a lot to take in, and the relationship side is allowed to be hard."' },
      { lbl:'Safety-net',           txt:'"So: antibiotics today, no sex until you\u2019ve both finished treatment, partner tested and treated, and a check for the other infections. If you get worsening pelvic pain or a fever, come back \u2014 that needs looking at. Whatever you decide about the relationship, that\u2019s yours to work through, and I\u2019m not here to judge any of it. Come back any time \u2014 for the result, the relationship, or just to talk it through."' },
    ],
    learning:'A positive chlamydia result is clinically simple \u2014 common, usually asymptomatic, easily treated (doxycycline 7 days per BASHH; alternatives in pregnancy) \u2014 with partner notification, an STI screen and abstinence-until-treated. The examinable communication nuance is the "has he cheated?" question: chlamydia can be carried silently for months to YEARS, so a positive test does NOT prove recent infidelity and the timing of acquisition usually cannot be determined \u2014 the GP must avoid BOTH confirming infidelity and giving false reassurance, stating the honest uncertainty. The hidden agenda is that the real distress is the RELATIONSHIP (trust/betrayal) and a deeper FERTILITY fear, not the infection: give accurate fertility reassurance (a single treated infection rarely causes infertility; untreated/recurrent infection causing PID is the risk \u2014 which is why treatment and partner notification matter), support her through the relationship shock without taking sides, and reframe partner notification as a shared health necessity (with anonymous provider options) so it actually happens. Screen for PID, offer a full STI screen, and safety-net.',
    knowledge:{
      guideline:'BASHH chlamydia guideline · BASHH partner notification · NICE CKS chlamydia',
      points:[
        { h:'Treat and advise', t:'Chlamydia: doxycycline 100 mg twice daily for 7 days (first-line per BASHH); azithromycin 1 g then 500 mg daily for 2 days where doxycycline is unsuitable (e.g. pregnancy/breastfeeding). Advise abstaining from sex (including with the regular partner) until both have completed treatment. Test of cure is not routine except in pregnancy, rectal infection, or persistent symptoms; consider re-testing for reinfection at ~3 months.' },
        { h:'The acquisition-timing truth', t:'Chlamydia is frequently asymptomatic and can persist for months to years. A positive test cannot date or locate acquisition and does NOT prove recent infidelity. Communicate this honestly \u2014 do not confirm or fuel a "they cheated" conclusion, and do not give false reassurance about the relationship; be clear that timing is unknowable.' },
        { h:'Partner notification', t:'Notify and treat current and recent partners (look-back per guidance) to prevent reinfection and onward transmission \u2014 treat partners empirically. Offer patient or provider (including anonymous) notification via sexual-health services. Frame as a shared health step, not an accusation.' },
        { h:'Screen for co-infection and PID', t:'Offer a full STI screen (HIV, gonorrhoea, syphilis). Assess for PID (pelvic pain, IMB, deep dyspareunia, fever, cervical motion tenderness) \u2014 if present, treat as PID and escalate.' },
        { h:'Fertility \u2014 accurate reassurance', t:'A single, promptly-treated chlamydia infection rarely causes infertility. Tubal damage/infertility risk comes from untreated or recurrent infection progressing to PID. Frame prompt treatment and partner notification as protecting fertility \u2014 reassuring without dismissing the fear.' },
        { h:'Emotional & relationship support', t:'The result often lands as a relationship crisis. Stay neutral, validate feelings, avoid speculation/taking sides, reduce shame, and support the practical and emotional difficulty of partner notification. The consultation is as much emotional support as prescribing.' },
        { h:'Never do', t:'Never confirm or imply infidelity from a positive result; never give false relationship reassurance; never treat without partner notification and an STI screen; never miss PID; never leave the fertility fear or the emotional impact unaddressed.' },
        { h:'Safety-net & follow-up', t:'Treatment + abstinence until both treated; partner notification (offer anonymous option); STI screen; PID red flags \u2192 review; reinfection re-test ~3 months; contraception/condom advice; emotional support and an open follow-up.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c109, c110, c111, c112);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'pid-young-woman': {
      ceg: ['Gender, reproductive & sexual health', 'Urgent & unscheduled care'],
      stem: {
        name: 'Demi Carter', age: '23 years · female',
        pmh: ['Bilateral lower abdo pain + abnormal discharge + deep dyspareunia', 'IMB/PCB; low-grade fever', 'New partner, inconsistent condoms; no contraception'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Blames "another water infection"; wants quick antibiotics, "no fuss".',
        reason: 'Telephone — lower abdominal pain + discharge.'
      },
      timeMap: [
        { t:'0–2',  h:'Refuse the UTI label', d:'Bilateral pelvic pain + discharge + dyspareunia + IMB + new partner = PID, not a UTI. Don\u2019t send a cystitis antibiotic.' },
        { t:'2–4',  h:'Pregnancy first',      d:'Pregnancy test + ectopic red-flag screen (severe/unilateral pain, shoulder-tip, syncope) in any young woman with abdo pain.' },
        { t:'4–6',  h:'Treat now, swab too',  d:'Low threshold: start empirical PID antibiotics today (don\u2019t wait for swabs); NAAT + full STI screen; arrange examination.' },
        { t:'6–9',  h:'Surface shame + partners', d:'Gently open the STI worry without judgement; partner notification (clinic/anonymous) to prevent reinfection.' },
        { t:'9–12', h:'Fertility + safety-net', d:'Prompt treatment protects fertility (most conceive normally). Severe pain/fever/vomiting/ectopic features → same-day/A&E; follow up results.' }
      ],
      wordPics: {
        fail: 'Sends a cystitis antibiotic for a "water infection"; never excludes pregnancy/ectopic; waits for swabs or doesn\u2019t treat PID empirically; misses the STI screen and partner notification; leaves the shame and fertility fear unaddressed.',
        pass: 'Recognises PID, excludes pregnancy, treats empirically with swabs/STI screen, arranges partner notification, and safety-nets.',
        exc:  'Refuses the UTI label and names PID; excludes pregnancy/ectopic; treats promptly and empirically without waiting for swabs; surfaces the shame and the fertility fear; handles partner notification supportively (anonymous option); and reassures on fertility while safety-netting the PID/ectopic red flags.'
      },
      avoid: [
        { dont:'"Sounds like another UTI — I\u2019ll send antibiotics for that."', instead:'"Pain on both sides, discharge and pain during sex points to an infection higher up — PID, not a UTI. That needs the right antibiotics today and some swabs, not a cystitis tablet."', why:'Treating PID as a UTI gives the wrong antibiotic and risks tubal damage and infertility.' },
        { dont:'"Let\u2019s wait for the swab results before starting treatment."', instead:'"We don\u2019t wait — treating promptly protects your fertility, so I\u2019ll start antibiotics today and take swabs at the same time."', why:'Delaying PID treatment for results risks tubal damage, chronic pain and ectopic pregnancy.' },
        { dont:'"You\u2019ll just need to tell your partner he might have given you something."', instead:'"Your recent partner needs testing and treating so it doesn\u2019t bounce back to you — the clinic can even do that anonymously if telling him feels too hard. No judgement at all."', why:'A blaming framing increases shame and makes partner notification less likely to happen.' }
      ]
    },

    'emergency-contraception': {
      ceg: ['Gender, reproductive & sexual health', 'Children & young people'],
      stem: {
        name: 'Aimee', age: '16 years · female',
        pmh: ['Requesting emergency contraception after UPSI ~72 h ago, mid-cycle', 'No regular contraception', 'Partner is 25, met online (safeguarding flag)'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '⚠ Rushed, embarrassed; wants it fast "without loads of questions".',
        reason: 'Telephone — emergency contraception request.'
      },
      timeMap: [
        { t:'0–2',  h:'Meet the need first', d:'Entitled to prompt EC. Validate sorting it quickly; ask a few questions to pick the best option, not to obstruct.' },
        { t:'2–4',  h:'Right method',         d:'~72 h mid-cycle: copper IUD most effective (up to 5 days, ongoing cover); ulipristal preferred over levonorgestrel. Offer choice.' },
        { t:'4–6',  h:'Open the door gently', d:'Partner 25, met online — explore the relationship, control and consent sensitively. No judgement; confidentiality + its limits.' },
        { t:'6–9',  h:'Safeguard',            d:'Age gap + online pattern = CSE red flags; assess coercion; act per local pathway balancing autonomy and protection.' },
        { t:'9–12', h:'Ongoing needs + net',  d:'Reliable ongoing contraception + STI screen; repeat EC if vomiting; pregnancy test if period late; clear route back.' }
      ],
      wordPics: {
        fail: 'Either obstructs time-sensitive EC with barriers, or hands it over with no Fraser/safeguarding assessment; defaults to levonorgestrel without considering copper IUD/ulipristal; never explores the 25-year-old/online safeguarding red flag; no ongoing contraception or STI screen.',
        pass: 'Provides EC promptly, advises the most effective method, assesses Fraser, raises safeguarding, and arranges ongoing contraception/STI screening.',
        exc:  'Meets the practical need promptly and non-judgementally while advising the most effective method (copper IUD/ulipristal by timing); assesses Fraser/competence; sensitively explores and acts on the older-partner/online CSE red flag balancing autonomy with safeguarding; and sorts ongoing contraception, STI screening and a clear route back — all without alienating her.'
      },
      avoid: [
        { dont:'"You\u2019re 16, so I\u2019ll need to involve a parent before I can help with this."', instead:'"You\u2019re entitled to emergency contraception and I\u2019ll help you get it today — let me just check a few things so I give you the most effective option."', why:'Creating barriers to time-sensitive EC for a competent 16-year-old is wrong and risks an unwanted pregnancy.' },
        { dont:'"I\u2019ll send the standard morning-after pill to the chemist."', instead:'"At three days and mid-cycle, there\u2019s a more effective tablet than the standard one, and a coil that\u2019s the most effective of all and keeps protecting you — let me explain both."', why:'Defaulting to levonorgestrel without considering the copper IUD/ulipristal gives a less effective option when it matters most.' },
        { dont:'"As long as you consented, the age gap isn\u2019t my business."', instead:'"Can I ask a bit about your partner — he\u2019s 25 and you met online? No judgement; I just want to be sure you feel fully in control and no one\u2019s taking advantage."', why:'Ignoring a significant age gap and online grooming pattern misses a child sexual exploitation safeguarding concern.' }
      ]
    },

    'pcos-named': {
      ceg: ['Gender, reproductive & sexual health', 'Mental health & addiction'],
      stem: {
        name: 'Bethan Lloyd', age: '27 years · female',
        pmh: ['Oligomenorrhoea (every 2\u20133 months), hirsutism, acne, weight difficulty', 'Bloods/USS fit PCOS; BMI 31; FH type 2 diabetes', 'Recently engaged'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Distressed about appearance ("I feel disgusting"); privately terrified she can\u2019t have children.',
        reason: 'Video consultation — irregular periods, hirsutism, weight.'
      },
      timeMap: [
        { t:'0–2',  h:'Name it kindly',      d:'Fits PCOS — common, hormonal, not a personal failing. The weight difficulty is partly the condition, not willpower.' },
        { t:'2–4',  h:'More than cosmetic',   d:'Metabolic risk (T2DM/CVD): HbA1c, lipids, BP, realistic lifestyle. Protect the endometrium with regular shedding.' },
        { t:'4–6',  h:'Surface the fertility fear', d:'Recently engaged — "can I have children?" PCOS is a very treatable cause of subfertility; weight loss helps ovulation; treatments exist. "Not broken."' },
        { t:'6–8',  h:'Treat symptoms',       d:'COCP ± anti-androgen + cosmetic options for hair; acne treatment; cycle regulation. Realistic months-long timeframes.' },
        { t:'8–12', h:'Mind + plan + net',    d:'Screen/support mood and body image; metabolic bloods; pre-conception pathway when trying; holistic follow-up.' }
      ],
      wordPics: {
        fail: 'Treats it as cosmetic — a tablet for weight/hair — and misses the metabolic, endometrial, fertility and mood dimensions; frames weight as willpower; never surfaces the fertility fear or the low mood; sets unrealistic expectations.',
        pass: 'Names PCOS kindly, addresses metabolic risk and endometrial protection, treats symptoms, reassures on fertility, and screens mood.',
        exc:  'Names PCOS kindly and lifts self-blame; addresses the metabolic and endometrial dimensions; surfaces the fertility fear and reassures honestly; treats symptoms with realistic timeframes; screens and supports mood/body image; and makes a collaborative plan with a pre-conception pathway and holistic follow-up.'
      },
      avoid: [
        { dont:'"You just need to lose weight and the rest will sort itself out."', instead:'"PCOS makes weight genuinely harder to shift — it\u2019s partly the condition, not willpower. Weight loss does help, and we\u2019ll make a realistic plan together, alongside treating the symptoms."', why:'Framing it as willpower deepens self-blame and misses that the difficulty is partly intrinsic.' },
        { dont:'"Let\u2019s not worry about babies until you\u2019re actually trying."', instead:'"I sense the fertility worry is a big part of this since you got engaged — and the honest, reassuring truth is PCOS is one of the most treatable causes of difficulty conceiving."', why:'Deferring the fertility question leaves the deepest, largely-reassurable fear unaddressed.' },
        { dont:'"I\u2019ll give you a pill for the hair and that should help how you feel."', instead:'"We\u2019ll treat the hair and skin — but you said you feel disgusting, and I want to check how your mood\u2019s been, because PCOS can drag it down and that matters as much as the rest."', why:'Treating only the cosmetics misses the significant body-image distress and low mood that are part of PCOS.' }
      ]
    },

    'chlamydia-positive': {
      ceg: ['Gender, reproductive & sexual health', 'Investigations & results'],
      stem: {
        name: 'Orla Devine', age: '25 years · female',
        pmh: ['Chlamydia NAAT POSITIVE (done at pill check / after IMB)', '2-year relationship; some IMB + mild pelvic discomfort', 'On combined pill'],
        meds: ['Combined oral contraceptive'],
        allergy: 'NKDA',
        recent: 'Upset and angry — "does this mean he\u2019s cheated?"; frightened about fertility.',
        reason: 'Telephone — positive chlamydia result.'
      },
      timeMap: [
        { t:'0–2',  h:'Steady + treatable',  d:'Common, easily treated (doxycycline 7 days). The infection is the straightforward part — take the rest gently.' },
        { t:'2–4',  h:'Cheating, honestly',   d:'Chlamydia can be silent for months/years — a positive test does NOT prove infidelity; timing is unknowable. Don\u2019t confirm or falsely reassure.' },
        { t:'4–6',  h:'Fertility reassurance', d:'A single treated infection rarely affects fertility; risk is untreated/recurrent PID. Prompt treatment + partner notification protect it.' },
        { t:'6–9',  h:'Partner + screen',     d:'Partner tested/treated (anonymous option) to prevent reinfection; full STI screen; assess PID; abstain until both treated.' },
        { t:'9–12', h:'Support + safety-net', d:'Stay neutral on the relationship; emotional support; PID red flags → review; reinfection re-test ~3 months; open follow-up.' }
      ],
      wordPics: {
        fail: 'Confirms or implies infidelity ("he must have cheated") or falsely reassures the relationship; treats without partner notification or STI screen; misses PID; leaves the fertility fear and emotional impact unaddressed.',
        pass: 'Treats correctly, explains timing is uncertain, arranges partner notification and STI screening, reassures on fertility, and supports her.',
        exc:  'Treats and advises abstinence; answers "has he cheated?" with honest uncertainty (silent for years; can\u2019t date it) — neither confirming nor falsely reassuring; reassures accurately on fertility; reframes partner notification as a shared health step (anonymous option); screens for PID/other STIs; and supports her through the relationship shock neutrally with a clear safety-net.'
      },
      avoid: [
        { dont:'"Since you\u2019ve only been with him, he must have given it to you — he\u2019s cheated."', instead:'"Chlamydia can sit silently for months or even years, so a positive test today doesn\u2019t prove anyone\u2019s been unfaithful — no test can tell us when it was caught. I don\u2019t want you concluding something the result doesn\u2019t actually show."', why:'Confirming infidelity from a positive result is factually wrong and can wrongly destroy a relationship.' },
        { dont:'"Don\u2019t worry, it definitely doesn\u2019t mean he\u2019s strayed."', instead:'"I honestly can\u2019t tell you either way — the timing is unknowable. What I can do is treat you both and protect your health."', why:'False reassurance about the relationship is as misleading as confirming infidelity; state the honest uncertainty.' },
        { dont:'"It can cause infertility, so you\u2019ll need to be careful."', instead:'"A single, promptly-treated infection like yours very rarely affects fertility — the risk comes from infections left untreated or coming back, which is exactly why we treat it and your partner now."', why:'An alarming, imprecise fertility statement amplifies the deepest fear; give the accurate, reassuring picture.' }
      ]
    }
  });

})();
