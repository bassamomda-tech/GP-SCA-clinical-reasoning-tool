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
    id:'hrt-counselling', title:'"I think it\u2019s the menopause \u2014 but I\u2019m scared HRT will give me cancer"', type:'video', duration:12,
    meta:{ age:51, sex:'F', setting:'Video consultation \u2014 menopausal symptoms, considering HRT.', system:'Reproductive / Menopause \u2014 HRT counselling: symptoms, options & honest risk' },
    brief:'Mrs Sandra Okafor, 51, with classic perimenopausal symptoms (hot flushes, night sweats, disturbed sleep, low mood/irritability, brain-fog, low libido, vaginal dryness) badly affecting work and relationships, considering HRT but frightened by the "HRT causes cancer" headlines. The examined skills: confirm the menopause diagnosis CLINICALLY (in women over 45, on symptoms \u2014 no routine FSH needed), assess symptom burden and impact, take a risk history (VTE, breast cancer, cardiovascular, migraine), explain HRT OPTIONS accurately (transdermal vs oral oestrogen; the need for a PROGESTOGEN if she has a uterus; vaginal oestrogen for urogenital symptoms), give HONEST, PROPORTIONATE risk-benefit information (symptom relief and bone benefit vs small, type/route-dependent risks of breast cancer and VTE), and support a SHARED decision \u2014 countering the headline fear with real numbers. The CLAUDE.md/NG12 note: any POSTMENOPAUSAL bleeding (55+) or unscheduled bleeding on HRT triggers the endometrial-cancer pathway \u2014 state it. ',
    script:{
      opening:'"I\u2019m pretty sure this is the menopause \u2014 the flushes, the sweats at night, I can\u2019t sleep, I\u2019m snapping at everyone, my memory\u2019s shot. It\u2019s affecting my work. I\u2019ve been thinking about HRT \u2026 but everything I read says it gives you breast cancer, so I keep putting it off. What should I do?"',
      facts:[
        { topic:'Diagnose the menopause clinically', text:'In a woman OVER 45 with typical symptoms, the menopause/perimenopause is a CLINICAL diagnosis \u2014 no routine FSH blood test is needed (NICE NG23). Confirm the pattern (vasomotor, sleep, mood, cognitive, urogenital, libido), the impact on her life, and her last menstrual period/contraceptive needs. Validate that these symptoms are real, common and treatable \u2014 not something to "just put up with".' },
        { topic:'Assess symptom burden & impact', text:'Quantify how the symptoms affect work, relationships, sleep and mood \u2014 this drives the treatment conversation and counters any minimisation (hers or society\u2019s). Screen MOOD specifically: low mood in perimenopause may respond to HRT, but consider depression in its own right. Identify the symptoms most bothering her so management is tailored.' },
        { topic:'Take the risk history', text:'Before recommending HRT, screen contraindications/cautions: personal history of breast cancer (contraindication), VTE/clotting risk (favours TRANSDERMAL, which avoids the oral first-pass VTE risk), cardiovascular disease/stroke, migraine with aura, liver disease, undiagnosed bleeding, and family history. The risk profile shapes WHICH HRT, not usually whether she can have any.' },
        { topic:'Explain the options accurately', text:'Outline: OESTROGEN for systemic symptoms \u2014 TRANSDERMAL (patch/gel/spray) preferred for VTE/migraine/older patients (no increased VTE risk vs oral); plus a PROGESTOGEN if she has a uterus (to protect the endometrium \u2014 e.g. micronised progesterone or an LNG-IUS), given cyclically (if perimenopausal/still bleeding) or continuously (if postmenopausal). VAGINAL oestrogen treats urogenital symptoms (dryness, urinary) with minimal systemic absorption and can be used alongside or alone. Testosterone is an option for low libido unresponsive to HRT (specialist/off-licence).' },
        { topic:'Honest, proportionate risk-benefit', text:'Give BALANCED information: HRT is the most effective treatment for vasomotor symptoms and helps mood, sleep and urogenital symptoms, and protects bone. The breast-cancer risk is SMALL, depends on type (combined > oestrogen-only) and duration, is comparable to or less than lifestyle factors (alcohol, obesity), and oestrogen-only HRT (no uterus) carries little or no increased breast-cancer risk. Transdermal oestrogen does not increase VTE risk. Below 60/within 10 years of menopause, benefits generally outweigh risks. Frame as small absolute numbers, not scary relative headlines.' },
        { topic:'The hidden agenda + NG12 note', text:'HIDDEN AGENDA \u2014 the "HRT causes cancer" fear (from headlines) is what has stopped her getting help she needs; she may also feel she should "just cope". Address the fear with real numbers and a shared decision. SAFETY/NG12: counsel that any POSTMENOPAUSAL bleeding (women 55+ \u2192 NICE NG12 urgent suspected-cancer referral / direct-access USS for endometrial cancer) or UNSCHEDULED bleeding on HRT must be reported and investigated \u2014 state this explicitly as part of safe HRT counselling.' },
      ],
      ice:{
        ideas:'It\u2019s probably the menopause; HRT might help but "gives you breast cancer".',
        concerns:'HIDDEN AGENDA \u2014 headline-driven cancer fear stopping her getting help; possible sense she should "just cope"; impact on work/relationships.',
        expectations:'Guidance on whether to take HRT. What she needs: clinical diagnosis, symptom/impact and risk assessment, accurate options, honest proportionate risk-benefit countering the headlines, a shared decision, and the bleeding/NG12 safety-net.'
      },
      cues:['Typical menopausal symptoms in a woman of 51 \u2014 clinical diagnosis, no routine FSH; validate and assess impact.','"HRT gives you breast cancer" headline fear \u2014 counter with honest, proportionate numbers (type/route/duration-dependent; transdermal no VTE rise).','Counsel the bleeding safety-net: postmenopausal bleeding 55+ or unscheduled bleeding on HRT \u2192 NG12 endometrial pathway.']
    },
    checkpoints:[
      { dom:'tasks', text:'Diagnoses menopause/perimenopause CLINICALLY in a woman over 45 (no routine FSH), confirms the symptom pattern, last period/contraceptive needs, and validates the symptoms as real and treatable' },
      { dom:'tasks', text:'Assesses symptom burden and IMPACT (work, relationships, sleep, mood) and screens mood specifically \u2014 tailoring management to what bothers her most' },
      { dom:'tasks', text:'Takes a RISK history (breast cancer, VTE/clotting, cardiovascular/stroke, migraine with aura, liver disease, undiagnosed bleeding) that shapes which HRT' },
      { dom:'tasks', text:'Explains OPTIONS accurately: transdermal vs oral oestrogen (transdermal preferred for VTE/migraine/age), a PROGESTOGEN if she has a uterus (cyclical vs continuous), vaginal oestrogen for urogenital symptoms, and testosterone for refractory low libido' },
      { dom:'tasks', text:'Gives HONEST, PROPORTIONATE risk-benefit \u2014 effective symptom relief and bone protection vs small type/route/duration-dependent breast-cancer and VTE risks (oestrogen-only/transdermal lower) \u2014 in absolute terms, countering the headline fear' },
      { dom:'rto',   text:'Addresses the headline-driven cancer fear directly and the sense she should "just cope", supporting a genuine SHARED decision' },
      { dom:'rto',   text:'Communicates risk in meaningful, non-frightening numbers and checks understanding so she can decide with confidence' },
      { dom:'gs',    text:'Safety-nets and follows up: review of efficacy/side-effects, and explicit counselling that postmenopausal bleeding (55+) or unscheduled bleeding on HRT must be reported and investigated (NG12 endometrial pathway) \u2014 a shared, safe decision (NG12 stated)' },
    ],
    worked:[
      { lbl:'Validate + diagnose', txt:'"You\u2019re very likely right \u2014 at 51 with those symptoms, this is the menopause, and we don\u2019t even need a blood test to say so. And these symptoms are real and treatable; you don\u2019t have to just grit your teeth through them."' },
      { lbl:'Tackle the headline fear', txt:'"Let\u2019s deal with the breast-cancer worry head-on, because it\u2019s stopping you getting help. The headlines overstate it. The actual extra risk is small, depends on the type and how long you take it, and is similar to things like a couple of glasses of wine a night. If you\u2019ve had a womb removed, oestrogen-only HRT barely changes breast risk at all."' },
      { lbl:'Explain options', txt:'"For the flushes and sweats, oestrogen \u2014 I\u2019d usually suggest a patch or gel through the skin, which doesn\u2019t raise clot risk. If you still have your womb, you also need a progesterone to protect its lining. For dryness, a small vaginal oestrogen works locally with almost no absorption."' },
      { lbl:'Balance the benefits', txt:'"The upside is real: it\u2019s the most effective treatment for flushes, it usually helps sleep, mood and concentration, and it protects your bones. Under 60 and within ten years of menopause, the benefits generally outweigh the small risks."' },
      { lbl:'Bleeding safety-net', txt:'"One important safety rule: once you\u2019re on HRT, any unexpected bleeding \u2014 or any bleeding after the menopause \u2014 you tell me, because we always check the womb lining to be safe. It\u2019s usually nothing, but it\u2019s a rule we don\u2019t bend."' },
      { lbl:'Shared decision + review', txt:'"There\u2019s no rush \u2014 but you also don\u2019t have to suffer. How do you feel about trying it? Whatever we choose, we\u2019ll review in a few months to check it\u2019s helping and suiting you."' },
    ],
    learning:'Menopause counselling starts with a clinical diagnosis: in a woman over 45 with typical symptoms the menopause/perimenopause is diagnosed on the symptom pattern (NICE NG23) with no routine FSH test, and the symptoms \u2014 vasomotor, sleep, mood, cognitive, urogenital and libido \u2014 are validated as real, common and treatable rather than something to endure. Assess symptom burden and impact on work, relationships, sleep and mood (screening mood in its own right), and take a risk history (breast cancer, VTE/clotting, cardiovascular/stroke, migraine with aura, liver disease, undiagnosed bleeding) that usually shapes WHICH HRT rather than whether she can have any. Explain options accurately: oestrogen for systemic symptoms, with transdermal (patch/gel/spray) preferred for VTE/migraine/older patients because it avoids the oral first-pass VTE risk; a progestogen if she has a uterus to protect the endometrium (cyclical if still bleeding, continuous if postmenopausal, e.g. micronised progesterone or an LNG-IUS); vaginal oestrogen for urogenital symptoms with minimal systemic absorption; and testosterone for refractory low libido. Give honest, proportionate risk-benefit information \u2014 HRT is the most effective treatment for vasomotor symptoms and helps mood, sleep and urogenital symptoms and protects bone, while the breast-cancer risk is small and type/route/duration-dependent (combined > oestrogen-only, which carries little or no increase), comparable to lifestyle factors such as alcohol and obesity, and transdermal oestrogen does not increase VTE risk; below 60 or within 10 years of menopause benefits generally outweigh risks. Counter the headline-driven cancer fear with absolute numbers and support a shared decision, and counsel the safety-net explicitly: postmenopausal bleeding in women 55+ or unscheduled bleeding on HRT triggers the NICE NG12 endometrial-cancer pathway and must be reported and investigated.',
    knowledge:{
      guideline:'NICE NG23 menopause \u00b7 HRT options & risk-benefit \u00b7 transdermal vs oral \u00b7 NG12 endometrial cancer (PMB/unscheduled bleeding)',
      points:[
        { h:'Clinical diagnosis >45', t:'Diagnose menopause/perimenopause on symptoms in women over 45 \u2014 no routine FSH. Validate symptoms as real and treatable.' },
        { h:'Burden & impact', t:'Assess effect on work/relationships/sleep/mood; screen mood; tailor to the most troublesome symptoms.' },
        { h:'Risk history shapes choice', t:'Breast cancer (contraindication), VTE (favours transdermal), cardiovascular/stroke, migraine with aura, liver disease, undiagnosed bleeding \u2014 usually determine which HRT, not whether.' },
        { h:'Options', t:'Transdermal vs oral oestrogen (transdermal preferred for VTE/migraine/age); progestogen if uterus present (cyclical vs continuous; micronised progesterone/LNG-IUS); vaginal oestrogen for urogenital symptoms; testosterone for refractory libido.' },
        { h:'Honest risk-benefit', t:'Most effective for vasomotor symptoms; helps mood/sleep/urogenital; bone protection. Breast-cancer risk small, type/route/duration-dependent (oestrogen-only little/no increase); transdermal no VTE rise; <60/within 10 years benefits generally outweigh risks. Use absolute numbers.' },
        { h:'Counter the headlines', t:'Address the "HRT causes cancer" fear with proportionate numbers; support a shared decision; don\u2019t let headline fear deny effective treatment.' },
        { h:'NG12 bleeding safety-net', t:'Postmenopausal bleeding (55+) \u2192 NG12 urgent referral/direct-access USS for endometrial cancer; unscheduled bleeding on HRT must be reported and investigated. State explicitly.' },
        { h:'Never do', t:'Never order routine FSH in over-45s; never deny HRT on headline fear; never give systemic oestrogen without a progestogen in a woman with a uterus; never ignore unscheduled/postmenopausal bleeding.' }
      ]
    }
  };

  /* ====== 190. VIDEO — "Does HRT give you breast cancer?": numbers that mean something ====== */
  const c190 = {
    id:'hrt-breast-cancer-numbers', title:'"Just give it to me straight \u2014 does HRT give you breast cancer or not?"', type:'video', duration:12,
    meta:{ age:54, sex:'F', setting:'Video consultation \u2014 a direct question about HRT and breast-cancer risk.', system:'Reproductive / Risk communication \u2014 HRT & breast cancer in numbers' },
    brief:'Ms Frances Liddell, 54, benefiting from HRT for severe symptoms but rattled by a friend\u2019s comment and a headline, asks point-blank whether HRT causes breast cancer. This is a RISK-COMMUNICATION station: the mark is in translating evidence into MEANINGFUL NUMBERS and supporting an informed choice, not in a yes/no. The examined skills: answer honestly (there IS a small increased risk with COMBINED HRT, type- and duration-dependent; oestrogen-only carries little/no increase), express it as ABSOLUTE risk and NATURAL FREQUENCIES (e.g. "out of 1000 women...") rather than scary relative risks, CONTEXTUALISE it against everyday risks (alcohol, being overweight, not exercising), distinguish oestrogen-only vs combined and route, acknowledge uncertainty honestly, and reconnect to HER situation (symptom severity, quality of life, individual risk factors) so she can make an informed, values-based decision \u2014 neither frightening her off nor dismissing the risk. No NG12 cancer pathway is the subject here (though bleeding safety-netting still applies).',
    script:{
      opening:'"Right, I need you to be honest with me. My HRT has genuinely given me my life back \u2014 but my friend said I\u2019m \u2018basically asking for breast cancer\u2019, and there was a big headline about it. So just give it to me straight: does HRT cause breast cancer, yes or no? Should I stop?"',
      facts:[
        { topic:'Answer honestly \u2014 but not yes/no', text:'Respect the directness, but explain that an honest answer needs a number, not a yes/no: there IS a small increased risk of breast cancer with COMBINED (oestrogen + progestogen) HRT, which increases with duration of use and reduces after stopping; OESTROGEN-ONLY HRT (for women without a uterus) carries little or no increased risk. Avoid both false reassurance ("no risk") and the headline\u2019s scaremongering.' },
        { topic:'Use absolute risk & natural frequencies', text:'THE CORE SKILL \u2014 translate into numbers that mean something. Use natural frequencies: e.g. of 1000 women in their 50s, a baseline number will develop breast cancer over a given period; combined HRT for several years adds a small number of extra cases on top \u2014 a few extra per 1000 over ~5 years (the exact figures depend on age, duration and preparation). Express it as "extra cases per 1000 women", NOT as a relative "X% increase", which sounds far scarier than the absolute change.' },
        { topic:'Contextualise against everyday risks', text:'Put it in proportion: the additional breast-cancer risk from combined HRT is broadly SIMILAR TO OR SMALLER THAN the risk from drinking a couple of units of alcohol daily, being overweight, or physical inactivity \u2014 risks people rarely lose sleep over. This isn\u2019t to dismiss it, but to let her weigh it realistically against familiar risks, and to note modifiable lifestyle factors she can also act on.' },
        { topic:'Type, route and duration matter', text:'Be specific: oestrogen-only (no uterus) \u2014 little/no increase; combined \u2014 small increase, greater with longer duration; the risk falls after stopping. Route (transdermal vs oral) chiefly affects VTE/clot risk, not breast risk. Micronised progesterone may carry a slightly lower breast risk than older synthetic progestogens. Tailoring the regimen can minimise risk.' },
        { topic:'Reconnect to HER \u2014 benefit and values', text:'Bring it back to her: HRT has "given her life back" \u2014 quality of life and symptom relief are real, legitimate benefits to weigh, plus bone protection. Factor in her individual risk profile (family history, alcohol, BMI, breast density). The decision is hers and VALUES-based: for many women with significant symptoms and average risk, the benefits outweigh the small risk \u2014 but she gets to decide with honest numbers, and can revisit it.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 she is frightened by a friend\u2019s blunt comment and a headline, and torn between relief from symptoms and fear of harm; "should I stop?" carries anxiety about having done something risky. She needs honest numbers, validation that the question is sensible, reassurance that her choice can be informed rather than fearful, and the message that she is not "asking for cancer". Support autonomy with clarity.' },
      ],
      ice:{
        ideas:'A friend/headline says HRT "causes breast cancer"; maybe she should stop despite the benefit.',
        concerns:'HIDDEN AGENDA \u2014 frightened by blunt comment/headline; torn between symptom relief and fear of harm; anxious she\u2019s done something risky.',
        expectations:'A straight yes/no. What she needs: an honest answer in meaningful absolute numbers, context against everyday risks, the type/duration nuance, and a values-based shared decision reconnected to her benefit \u2014 not a scare or a dismissal.'
      },
      cues:['Direct "does HRT cause breast cancer?" \u2014 a risk-communication station; answer in absolute numbers/natural frequencies, not yes/no or relative %.','Combined HRT: small duration-dependent increase; oestrogen-only: little/no increase \u2014 distinguish type/route/duration.','"My friend said I\u2019m asking for cancer / should I stop?" \u2014 reassure it\u2019s an informed choice, contextualise vs alcohol/BMI, reconnect to her benefit.']
    },
    checkpoints:[
      { dom:'tasks', text:'Answers HONESTLY without a misleading yes/no \u2014 a small increased risk with COMBINED HRT (duration-dependent, falls after stopping); little/no increase with OESTROGEN-ONLY \u2014 avoiding both false reassurance and scaremongering' },
      { dom:'tasks', text:'Communicates risk in ABSOLUTE terms / NATURAL FREQUENCIES ("extra cases per 1000 women") rather than relative percentages, which exaggerate the perceived change' },
      { dom:'tasks', text:'CONTEXTUALISES the risk against familiar everyday risks (alcohol, overweight, inactivity) to enable realistic weighing \u2014 without dismissing it' },
      { dom:'tasks', text:'Specifies that TYPE (oestrogen-only vs combined; micronised progesterone), DURATION and (for VTE not breast) ROUTE matter, and that the regimen can be tailored to minimise risk' },
      { dom:'tasks', text:'Reconnects to HER \u2014 the real benefit ("given her life back"), bone protection, and individual risk factors (family history, alcohol, BMI) \u2014 framing a VALUES-based, revisitable decision' },
      { dom:'rto',   text:'Validates that the question is sensible, reassures she is not "asking for cancer", and addresses the fear from the friend/headline directly' },
      { dom:'rto',   text:'Checks her understanding of the numbers and supports her autonomy to decide with clarity rather than fear' },
      { dom:'gs',    text:'Safety-nets and follows up: offers written information/decision support, reviews the decision over time, advises on modifiable risk factors, and reminds her to report unscheduled bleeding \u2014 informed choice, not a scare or a dismissal' },
    ],
    worked:[
      { lbl:'Honour the question', txt:'"That\u2019s a completely fair question, and I\u2019ll be straight with you \u2014 but a true \u2018yes or no\u2019 would actually mislead you. The honest answer is a number, and once you see it I think it\u2019ll feel very different from the headline."' },
      { lbl:'Give the number', txt:'"There is a small extra risk with the combined type of HRT, and it goes up the longer you take it. To put a number on it: out of 1000 women your age, a certain number get breast cancer anyway; a few years of combined HRT adds only a small handful of extra cases on top. If you didn\u2019t have a womb and took oestrogen alone, there\u2019s little or no extra risk."' },
      { lbl:'Make it relatable', txt:'"To weigh that fairly: that extra risk is in the same ballpark as having a couple of glasses of wine most nights, or carrying extra weight \u2014 things most of us don\u2019t panic about. I\u2019m not dismissing it; I\u2019m helping you see it in proportion."' },
      { lbl:'Tailor it', txt:'"We can also keep the risk as low as possible \u2014 using the lowest effective dose, a body-identical progesterone, and reviewing how long you stay on it."' },
      { lbl:'Back to her', txt:'"And here\u2019s the part that matters most: you said HRT gave you your life back. That benefit is real and counts. For most women with bad symptoms and an average risk, the benefits outweigh that small risk \u2014 but it\u2019s genuinely your call, and you can change your mind anytime."' },
      { lbl:'Reassure + safety-net', txt:'"You are not \u2018asking for cancer\u2019. Let\u2019s keep an eye on the modifiable things like alcohol, attend your screening, and tell me about any unexpected bleeding. I\u2019ll give you something written to look at, and we can revisit this whenever you like."' },
    ],
    learning:'"Does HRT cause breast cancer?" is a risk-communication station where the mark lies in translating evidence into meaningful numbers and supporting an informed choice, not in a yes/no. Answer honestly: there is a small increased risk of breast cancer with combined (oestrogen + progestogen) HRT that rises with duration and falls after stopping, while oestrogen-only HRT (for women without a uterus) carries little or no increased risk \u2014 avoiding both false reassurance and the headline\u2019s scaremongering. The core skill is to express risk in absolute terms and natural frequencies ("of 1000 women, a baseline number develop breast cancer anyway; a few years of combined HRT adds a small number of extra cases") rather than relative percentages, which make the change sound far larger, and to contextualise it against familiar everyday risks \u2014 the additional risk from combined HRT is broadly similar to or smaller than that from a couple of daily units of alcohol, being overweight, or inactivity \u2014 not to dismiss it but to let her weigh it realistically and act on modifiable factors. Be specific that type (oestrogen-only vs combined; micronised progesterone may be lower-risk than older progestogens), duration and \u2014 for VTE rather than breast \u2014 route matter, and that the regimen can be tailored to minimise risk. Reconnect to her: the real benefit (symptom relief that "gave her life back", bone protection) and her individual risk profile, framing a values-based, revisitable decision in which, for many women with significant symptoms and average risk, benefits outweigh the small risk. Validate the question, reassure she is not "asking for cancer", support her autonomy with clarity, offer written decision support and review, and remind her to report unscheduled bleeding. NG12 is not the subject, though the bleeding safety-net still applies.',
    knowledge:{
      guideline:'NICE NG23 menopause \u00b7 HRT & breast-cancer risk \u00b7 risk communication (absolute risk/natural frequencies) \u00b7 shared decision-making',
      points:[
        { h:'Honest, not yes/no', t:'Small increased risk with combined HRT (duration-dependent, falls after stopping); little/no increase with oestrogen-only. Avoid false reassurance and scaremongering.' },
        { h:'Absolute risk / natural frequencies', t:'Use "extra cases per 1000 women" over a defined period, not relative percentages. Relative risks exaggerate the perceived change.' },
        { h:'Contextualise', t:'The added risk is broadly similar to or less than alcohol, overweight or inactivity \u2014 enabling realistic weighing without dismissal; highlight modifiable factors.' },
        { h:'Type/duration/route', t:'Oestrogen-only little/no increase; combined small, greater with duration; micronised progesterone possibly lower-risk; route mainly affects VTE, not breast risk. Tailor to minimise risk.' },
        { h:'Reconnect to the patient', t:'Weigh real benefit (symptom relief, bone protection) and individual risk factors (family history, alcohol, BMI). Values-based, revisitable decision; for many, benefits outweigh the small risk.' },
        { h:'Address the fear', t:'Validate the question; reassure she is not "asking for cancer"; counter friend/headline narratives; support autonomy with clarity.' },
        { h:'Never do', t:'Never answer a bald yes/no; never use relative risk alone; never dismiss the risk or, conversely, frighten her off effective treatment.' },
        { h:'Safety-net & follow-up', t:'Written decision support, review over time, attend screening, address modifiable risk, report unscheduled bleeding. Informed choice, not a scare.' }
      ]
    }
  };

  /* ====== 191. F2F — No periods on desogestrel: reassurance vs the test first ====== */
  const c191 = {
    id:'desogestrel-amenorrhoea', title:'"My periods have stopped on the mini-pill \u2014 is that normal, or am I pregnant?"', type:'video', duration:12,
    meta:{ age:27, sex:'F', setting:'Video consultation \u2014 absent periods on the progestogen-only pill.', system:'Reproductive / Contraception \u2014 amenorrhoea on desogestrel: reassure, but test first' },
    brief:'Ms Megan Hollis, 27, on the desogestrel progestogen-only pill (POP), worried that her periods have STOPPED \u2014 unsure if it is a normal effect or a pregnancy. The examined skills: reassure ACCURATELY that amenorrhoea (and erratic bleeding) is a COMMON and EXPECTED effect of desogestrel \u2014 but FIRST exclude pregnancy and check for the things that would change that reassurance: missed pills, late pills, vomiting/diarrhoea, interacting medications, and any pregnancy symptoms; do a PREGNANCY TEST where there is any doubt (the "reassure, but test first" principle); review correct use and the POP rules (window, missed-pill rules), confirm STI risk/cervical screening as appropriate, and address her actual concern. The trap is BLIND reassurance ("that\u2019s normal, don\u2019t worry") without excluding pregnancy. No NG12 link.',
    script:{
      opening:'"I\u2019ve been on the mini-pill \u2014 desogestrel \u2014 for about eight months, and my periods have basically stopped. I read that can happen, but now I\u2019m paranoid \u2014 what if I\u2019m actually pregnant and don\u2019t know? Is no periods normal on this, or should I be worried?"',
      facts:[
        { topic:'Amenorrhoea on desogestrel is common \u2014 and acceptable', text:'Reassure accurately: changes in the bleeding pattern are the NORM on the desogestrel POP \u2014 roughly a fifth of users have NO bleeding, others have infrequent or irregular/prolonged bleeding, and all of these are acceptable and not harmful. Amenorrhoea is NOT a sign the pill isn\u2019t working. This is genuine, evidence-based reassurance \u2014 but it comes AFTER excluding pregnancy.' },
        { topic:'Reassure, but test FIRST', text:'THE PRINCIPLE \u2014 before reassuring, exclude PREGNANCY, because amenorrhoea could (rarely) reflect a pregnancy from imperfect use. Ask about MISSED or LATE pills (desogestrel has a 12-hour window), vomiting/diarrhoea within a few hours of a pill, interacting medications (enzyme inducers), and pregnancy symptoms; and do a PREGNANCY TEST if there is ANY doubt about adherence or any symptom. "Reassure, but test first" prevents the error of confident blind reassurance.' },
        { topic:'Review correct use & the POP rules', text:'Check how she takes it and reinforce the rules: take at the same time daily; if a pill is >12 hours late (desogestrel) it counts as missed \u2014 take the late pill, continue, and use condoms/abstain for 48 hours; vomiting within ~2 hours or severe diarrhoea means the dose may not be absorbed (treat as a missed pill). Confirm she is not relying on it incorrectly and that emergency contraception is understood if needed.' },
        { topic:'Wider sexual-health review', text:'Use the opportunity: STI risk assessment and testing where relevant, cervical screening status (due at her age per programme), and whether the POP still suits her or whether another method (e.g. LARC \u2014 implant/IUS) might fit her better, especially if bleeding is bothersome. Address any underlying concern (e.g. wanting reliable contraception, or actually wanting to know fertility status).' },
        { topic:'Address the real worry', text:'Her actual fear is an unknown pregnancy. Once the test is negative and use is correct, give clear, confident reassurance that absent periods are an expected, harmless effect, explain why, and tell her what WOULD warrant rechecking (missed pills, symptoms, a future pregnancy scare \u2192 retest). Make the reassurance land by basing it on the test and her usage, not on a brush-off.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 the dominant emotion is pregnancy anxiety ("what if I\u2019m pregnant and don\u2019t know?"). There may also be uncertainty about whether the method suits her, or unspoken questions about future fertility. The skill is to take the worry seriously, do the test that resolves it, and give informed reassurance plus a method review \u2014 not to wave it away as "that\u2019s just the pill".' },
      ],
      ice:{
        ideas:'No periods might be a normal effect of the mini-pill \u2014 or might mean she\u2019s pregnant.',
        concerns:'HIDDEN AGENDA \u2014 anxiety about an unknown pregnancy; possible uncertainty about whether the method suits her / future fertility.',
        expectations:'To know whether absent periods are normal. What she needs: pregnancy excluded first (test if any doubt), accurate reassurance that amenorrhoea is expected on desogestrel, a use/POP-rules review, and a wider sexual-health check.'
      },
      cues:['Amenorrhoea on desogestrel for months \u2014 a common, acceptable, expected effect; reassure accurately, but only after excluding pregnancy.','"Reassure, but test first" \u2014 ask about missed/late pills, vomiting/diarrhoea, interacting meds; pregnancy test if any doubt.','"What if I\u2019m pregnant and don\u2019t know?" \u2014 the real worry; resolve it with a test, then give confident reassurance + method review.']
    },
    checkpoints:[
      { dom:'tasks', text:'Reassures ACCURATELY that amenorrhoea/erratic bleeding is a common, acceptable and expected effect of the desogestrel POP (and not a sign of failure) \u2014 but only AFTER excluding pregnancy' },
      { dom:'tasks', text:'Applies "reassure, but TEST FIRST": screens missed/late pills (12-hour window), vomiting/diarrhoea, interacting medications and pregnancy symptoms, and does a PREGNANCY TEST where there is any doubt' },
      { dom:'tasks', text:'Reviews correct POP use and reinforces the missed-pill rules (late >12h \u2192 take pill, 48h condoms; vomiting/diarrhoea as missed; emergency contraception if indicated)' },
      { dom:'tasks', text:'Performs a wider sexual-health review \u2014 STI risk/testing, cervical screening status, and whether the method still suits her (consider LARC if bleeding bothersome)' },
      { dom:'tasks', text:'Addresses the REAL worry: once pregnancy is excluded and use is correct, gives confident, explained reassurance and states what would warrant rechecking' },
      { dom:'rto',   text:'Takes the pregnancy anxiety seriously rather than waving it away, and explores any unspoken concerns (method suitability, future fertility)' },
      { dom:'rto',   text:'Makes the reassurance land by basing it on the test and her usage, checking understanding' },
      { dom:'gs',    text:'Safety-nets and follows up: when to retest, missed-pill/EC advice, screening/STI follow-up, and method review \u2014 informed reassurance, not a brush-off (no NG12 link)' },
    ],
    worked:[
      { lbl:'Validate + the principle', txt:'"Good question, and I\u2019m glad you asked rather than worrying alone. The short version is: yes, no periods is usually normal on this pill \u2014 but the right thing for me to do is make sure you\u2019re not pregnant first, and then reassure you properly."' },
      { lbl:'Test first', txt:'"Have you missed or been late with any pills \u2014 more than 12 hours \u2014 or had vomiting or a tummy bug, or started any new medicines? \u2026 Let\u2019s do a quick pregnancy test now too, just so we both know for certain rather than guessing."' },
      { lbl:'Then reassure with reasons', txt:'"Test\u2019s negative, and you\u2019re taking it correctly \u2014 so I can reassure you for real: with desogestrel, about one in five women have no periods at all, and others bleed irregularly. It\u2019s expected, it\u2019s harmless, and it does NOT mean the pill\u2019s failing."' },
      { lbl:'Reinforce the rules', txt:'"Just so you\u2019re covered: take it within the same 12-hour window daily. If you\u2019re more than 12 hours late, take it and use condoms for two days. Sickness or bad diarrhoea counts like a missed pill."' },
      { lbl:'Wider check', txt:'"While you\u2019re here \u2014 are you due your smear, any need for STI testing, and is this method working for you overall? If the bleeding pattern ever bothers you, there are other options like the implant or coil."' },
      { lbl:'Safety-net', txt:'"So: not pregnant, periods stopping is normal on this. If you ever miss pills, get pregnancy symptoms, or just want peace of mind, do a test and come back. You did exactly the right thing checking."' },
    ],
    learning:'Absent or erratic periods on the desogestrel progestogen-only pill are common, acceptable and expected \u2014 roughly a fifth of users have no bleeding and others have infrequent or irregular bleeding, none of which is harmful or a sign the pill is failing \u2014 so accurate reassurance is appropriate, but only AFTER excluding pregnancy. The governing principle is "reassure, but test first": before reassuring, screen for missed or late pills (desogestrel has a 12-hour window), vomiting or diarrhoea around the time of a pill, interacting medications (enzyme inducers) and pregnancy symptoms, and perform a pregnancy test wherever there is any doubt about adherence or any symptom, because confident blind reassurance is the trap. Review correct use and reinforce the missed-pill rules (a pill more than 12 hours late is "missed" \u2014 take it, continue, and use condoms/abstain for 48 hours; vomiting within ~2 hours or severe diarrhoea is treated as a missed pill; understand emergency contraception). Use the consultation for a wider sexual-health review (STI risk and testing, cervical screening status, and whether the method still suits her \u2014 considering LARC such as an implant or IUS if the bleeding pattern is bothersome), and address her actual concern, which is anxiety about an unknown pregnancy: once the test is negative and use correct, give clear, explained reassurance and state what would warrant rechecking. The hidden agenda is pregnancy anxiety, possibly with unspoken questions about method suitability or future fertility; take it seriously, resolve it with the test, and give informed reassurance plus a method review rather than waving it away. No NG12 cancer pathway applies.',
    knowledge:{
      guideline:'FSRH progestogen-only pill \u00b7 desogestrel bleeding patterns & missed-pill rules \u00b7 "reassure but test first" \u00b7 sexual-health review',
      points:[
        { h:'Amenorrhoea is expected', t:'On desogestrel, ~20% have no bleeding and many have irregular/infrequent bleeding \u2014 acceptable, harmless, not a sign of failure. Reassure accurately after excluding pregnancy.' },
        { h:'Reassure but test first', t:'Exclude pregnancy before reassuring: screen missed/late pills (12-hour window), vomiting/diarrhoea, interacting meds, symptoms; pregnancy test if any doubt.' },
        { h:'POP rules', t:'Same time daily; >12h late = missed \u2192 take pill + 48h condoms; vomiting <2h or severe diarrhoea = missed; emergency contraception if indicated.' },
        { h:'Wider review', t:'STI risk/testing, cervical screening status, method suitability (consider LARC if bleeding bothersome). Address underlying concerns.' },
        { h:'Land the reassurance', t:'Once test negative and use correct, give confident, explained reassurance and state what warrants rechecking. Base it on the test and usage, not a brush-off.' },
        { h:'Address the real worry', t:'Take pregnancy anxiety seriously; explore unspoken concerns (method fit, fertility). Resolve, don\u2019t dismiss.' },
        { h:'Never do', t:'Never give blind reassurance ("that\u2019s just the pill") without excluding pregnancy; never skip the use/missed-pill review; never miss a screening/STI opportunity.' },
        { h:'Safety-net', t:'When to retest, missed-pill/EC advice, screening/STI follow-up, method review. (No NG12 link.)' }
      ]
    }
  };

  /* ====== 192. F2F — Recurrent stress fractures in a runner: RED-S and the eating screen ====== */
  const c192 = {
    id:'red-s-stress-fractures', title:'"That\u2019s my third stress fracture this year \u2014 just sort my foot so I can keep training"', type:'video', duration:12,
    meta:{ age:23, sex:'F', setting:'Video consultation \u2014 a recurrent stress fracture in a keen runner.', system:'MSK / Sports & eating \u2014 RED-S, the female athlete & the energy-deficiency screen' },
    brief:'Miss Orla Devine, 23, a dedicated distance runner, presents with her THIRD stress fracture in a year, wanting it fixed so she can keep training. The examined skill: look beyond the bone to the SYSTEMIC cause \u2014 RECURRENT stress fractures in an athlete (especially a young woman) are a red flag for RELATIVE ENERGY DEFICIENCY IN SPORT (RED-S, formerly the female athlete triad: low energy availability \u00b1 disordered eating, menstrual dysfunction/amenorrhoea, and impaired bone health). Sensitively screen ENERGY availability and EATING behaviours, MENSTRUAL history (amenorrhoea/oligomenorrhoea is a key clue \u2014 and combined-pill use can MASK it), training load, and other RED-S effects (fatigue, mood, recurrent illness/injury, performance plateau); examine and investigate appropriately (bloods, vitamin D, consider DEXA), and refer into a multidisciplinary pathway (sports medicine, dietitian, +/- eating-disorder services and psychology). Avoid the trap of treating the fracture and missing the eating disorder. No NG12 link.',
    script:{
      opening:'"So it\u2019s my foot again \u2014 the doctor at the walk-in thinks it\u2019s another stress fracture. That\u2019s the third one this year, which is so annoying. Look, I\u2019ve got races coming up, so can you just sort it, maybe a boot or whatever, so I can get back to training as fast as possible? I really don\u2019t want to lose fitness."',
      facts:[
        { topic:'Recurrent stress fractures = look deeper', text:'THE CORE \u2014 a single stress fracture can be training error; THREE in a year in a young female runner is a RED FLAG for an underlying systemic problem, not just a foot to fix. Resist the patient\u2019s framing ("just sort it"). The recurrent pattern mandates screening for RELATIVE ENERGY DEFICIENCY IN SPORT (RED-S).' },
        { topic:'Understand RED-S / the athlete triad', text:'RED-S arises from LOW ENERGY AVAILABILITY (insufficient calorie intake for training expenditure \u2014 intentional or not) and affects many systems. The classic FEMALE ATHLETE TRIAD is low energy availability (\u00b1 disordered eating), MENSTRUAL dysfunction (amenorrhoea/oligomenorrhoea from hypothalamic suppression), and impaired BONE HEALTH (low bone density \u2192 stress fractures). It also impairs mood, immunity, performance and cardiovascular/metabolic health.' },
        { topic:'Screen eating & energy sensitively', text:'Sensitively explore eating and energy: typical daily intake vs training volume, any restriction, weight changes, preoccupation with food/weight/body, purging/laxatives, and beliefs about thinness and performance. Use non-judgemental, curious questions (e.g. SCOFF-type screening within a supportive conversation). Recognise that disordered eating in athletes is common, often hidden behind "clean eating"/performance goals, and that she may not see it as a problem.' },
        { topic:'Menstrual history \u2014 the key clue (and the mask)', text:'Ask about PERIODS: amenorrhoea or oligomenorrhoea is a cardinal sign of low energy availability and a major bone-health risk \u2014 and crucially, the COMBINED PILL can MASK this by producing withdrawal bleeds, so ask specifically and interpret carefully. Loss of periods in an athlete is NOT normal or benign and should never be dismissed as "just from running".' },
        { topic:'Investigate & refer multidisciplinary', text:'Examine and investigate: confirm the fracture (imaging), check bloods (FBC, ferritin, vitamin D, TFTs, coeliac, hormone profile \u2014 LH/FSH/oestradiol if amenorrhoeic), and consider DEXA for bone density given recurrent fractures. Manage the energy deficiency, not just the bone: refer to SPORTS MEDICINE and a DIETITIAN, involve EATING-DISORDER services/psychology if disordered eating, optimise vitamin D/calcium, and \u2014 importantly \u2014 advise modified/reduced training and adequate fuelling, which she will resist. The bone won\u2019t heal durably without correcting the energy deficit.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 "just fix my foot so I can train" reveals that training/performance (and possibly control over eating/body) is central to her identity; she may minimise or not recognise the eating/energy problem, and fear that addressing it means losing running. There may be perfectionism, anxiety or an eating disorder beneath. The skill is to engage her gently, connect the fractures to under-fuelling in a way she can hear, and bring her toward help without shaming \u2014 framing fuelling as the route to performance and staying in her sport.' },
      ],
      ice:{
        ideas:'It\u2019s just bad luck with her foot; fix it (a boot) so she can keep training and not lose fitness.',
        concerns:'HIDDEN AGENDA \u2014 training/performance (and possibly eating/body control) central to identity; may minimise or not recognise the eating/energy problem; fears losing running.',
        expectations:'A quick fix to get back to training. What she needs: recognition of recurrent fractures as a RED-S red flag, sensitive eating/energy and menstrual screening, investigation (incl. DEXA), and multidisciplinary referral \u2014 not just the foot treated.'
      },
      cues:['THIRD stress fracture in a year in a young female runner \u2014 a RED-S red flag; look beyond the bone to low energy availability.','Screen eating/energy and MENSTRUAL history (amenorrhoea is key \u2014 the combined pill can MASK it) \u2014 sensitively, non-judgementally.','"Just fix my foot so I can train" \u2014 performance/identity (\u00b1 eating control); connect fractures to under-fuelling and refer without shaming.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises RECURRENT stress fractures (three in a year) in a young female athlete as a RED FLAG for an underlying systemic cause (RED-S) \u2014 resisting "just fix the foot"' },
      { dom:'tasks', text:'Understands RED-S / the female athlete triad (low energy availability \u00b1 disordered eating, menstrual dysfunction, impaired bone health, plus mood/immune/performance effects)' },
      { dom:'tasks', text:'Screens EATING and ENERGY availability sensitively and non-judgementally (intake vs training, restriction, weight/body preoccupation, purging) recognising disordered eating may be hidden behind performance goals' },
      { dom:'tasks', text:'Takes a MENSTRUAL history \u2014 identifies amenorrhoea/oligomenorrhoea as a key clue and recognises the COMBINED PILL can MASK it \u2014 never dismissing lost periods as "just from running"' },
      { dom:'tasks', text:'Investigates appropriately (confirm fracture; FBC, ferritin, vitamin D, TFTs, coeliac, hormone profile; consider DEXA) and refers MULTIDISCIPLINARY (sports medicine, dietitian, eating-disorder/psychology), advising fuelling and modified training' },
      { dom:'rto',   text:'Engages a performance-focused patient gently, connects the fractures to under-fuelling in a way she can hear, and explores possible eating disorder/perfectionism without shaming' },
      { dom:'rto',   text:'Frames adequate fuelling and bone health as the route to better performance and staying in her sport, addressing the fear of losing running' },
      { dom:'gs',    text:'Safety-nets and follows up: arranges investigations and referrals, monitors bone/menstrual/eating recovery, and reviews \u2014 treating the energy deficiency, not just the fracture (no NG12 link)' },
    ],
    worked:[
      { lbl:'Reframe past the foot', txt:'"I\u2019ll absolutely help your foot \u2014 but three stress fractures in a year isn\u2019t bad luck, it\u2019s your body telling us something bigger, and if we only treat the bone you\u2019ll be back with a fourth. Can we look at why this keeps happening?"' },
      { lbl:'Open the energy question', txt:'"In runners, repeated fractures often come down to not taking in enough fuel for the training load \u2014 sometimes without realising. Can you talk me through what a normal day\u2019s eating looks like against how much you\u2019re running?"' },
      { lbl:'Ask about periods (and the mask)', txt:'"Can I ask about your periods \u2014 are they regular, or have they stopped or become irregular? \u2026 And are you on the pill? Because the pill can hide this. Losing your periods with heavy training isn\u2019t normal \u2014 it\u2019s a sign your body\u2019s running low, and it weakens bone."' },
      { lbl:'Screen gently', txt:'"Some athletes get very focused on food, weight or \u2018eating clean\u2019 \u2014 sometimes it tips into restricting. Is any of that part of the picture for you? There\u2019s no judgement here \u2014 I ask because it\u2019s common and it really matters for your bones."' },
      { lbl:'Investigate + refer', txt:'"I\u2019d like some bloods including your iron, vitamin D and hormones, and a bone-density scan given the fractures. And I\u2019d bring in a sports doctor and a dietitian \u2014 and, if helpful, someone to support the eating side \u2014 so we fix the cause."' },
      { lbl:'Make fuelling the goal', txt:'"Here\u2019s the key: fuelling properly and getting your periods back isn\u2019t the enemy of performance \u2014 it\u2019s how you run faster and stay injury-free in the sport you love. Let\u2019s heal the foot AND sort the bigger picture, together."' },
    ],
    learning:'A single stress fracture can be a training error, but THREE in a year in a young female runner is a red flag for a systemic cause \u2014 RELATIVE ENERGY DEFICIENCY IN SPORT (RED-S) \u2014 not just a foot to fix, so resist the patient\u2019s "just sort it" framing. RED-S arises from low energy availability (insufficient intake for training expenditure, intentional or not) and the classic female athlete triad is low energy availability (with or without disordered eating), menstrual dysfunction (amenorrhoea/oligomenorrhoea from hypothalamic suppression), and impaired bone health (low density causing stress fractures), alongside effects on mood, immunity and performance. Screen eating and energy availability sensitively and non-judgementally (intake versus training volume, restriction, weight/body preoccupation, purging, beliefs about thinness and performance), recognising disordered eating in athletes is common and often hidden behind "clean eating" or performance goals. Take a menstrual history \u2014 amenorrhoea/oligomenorrhoea is a cardinal sign and major bone-health risk, the combined pill can MASK it by producing withdrawal bleeds, and lost periods in an athlete are never "just from running". Investigate appropriately (confirm the fracture; FBC, ferritin, vitamin D, TFTs, coeliac, hormone profile if amenorrhoeic; consider DEXA for bone density) and manage the energy deficiency, not just the bone, with multidisciplinary referral (sports medicine, dietitian, eating-disorder services/psychology), optimised vitamin D/calcium, and modified training with adequate fuelling \u2014 the bone will not heal durably without correcting the energy deficit. The hidden agenda is that training/performance and possibly eating/body control are central to her identity, with minimisation, perfectionism or an eating disorder beneath and fear of losing running; engage gently, connect the fractures to under-fuelling, frame fuelling as the route to performance, and bring her toward help without shaming. No NG12 cancer pathway applies.',
    knowledge:{
      guideline:'RED-S / female athlete triad \u00b7 low energy availability \u00b7 eating-disorder screening \u00b7 bone health (DEXA) \u00b7 multidisciplinary care',
      points:[
        { h:'Recurrent fractures = red flag', t:'Multiple stress fractures in a young female athlete signal a systemic cause (RED-S), not just local injury. Look beyond the bone.' },
        { h:'RED-S / triad', t:'Low energy availability (\u00b1 disordered eating), menstrual dysfunction (amenorrhoea/oligomenorrhoea), impaired bone health \u2014 plus mood, immune and performance effects.' },
        { h:'Screen eating sensitively', t:'Intake vs training, restriction, weight/body preoccupation, purging, performance beliefs. Non-judgemental; disordered eating is often hidden behind "clean eating"/goals.' },
        { h:'Menstrual clue & the mask', t:'Amenorrhoea/oligomenorrhoea is cardinal and a bone risk; the combined pill can mask it. Ask specifically; never dismiss lost periods as normal in an athlete.' },
        { h:'Investigate', t:'Confirm fracture; FBC, ferritin, vitamin D, TFTs, coeliac, hormone profile (LH/FSH/oestradiol if amenorrhoeic); consider DEXA for bone density.' },
        { h:'Multidisciplinary management', t:'Sports medicine, dietitian, eating-disorder/psychology; optimise vitamin D/calcium; modified training with adequate fuelling. Correct the energy deficit to heal bone.' },
        { h:'Engage without shame', t:'Performance/identity (\u00b1 eating control) is central. Connect fractures to under-fuelling; frame fuelling as the route to performance and staying in sport.' },
        { h:'Never do', t:'Never treat the fracture alone; never dismiss amenorrhoea; never miss the masking pill or a disordered-eating component; never shame.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c189, c190, c191, c192);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'hrt-counselling': {
      ceg: ['Gender, reproductive & sexual health', 'Prescribing & pharmacology'],
      stem: {
        name: 'Sandra Okafor', age: '51 years \u00b7 female',
        pmh: ['Perimenopausal symptoms: flushes, night sweats, poor sleep, low mood, brain-fog, low libido, dryness', 'Affecting work and relationships', 'Frightened by "HRT causes cancer" headlines'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"I think it\u2019s the menopause \u2014 but I\u2019m scared HRT will give me cancer."',
        reason: 'Video consultation \u2014 menopausal symptoms, considering HRT.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Validate + diagnose', d:'Clinical diagnosis >45, no FSH; symptoms real and treatable.' },
        { t:'2\u20134',  h:'Burden + risk history', d:'Impact on life/mood; screen breast/VTE/CVD/migraine \u2014 shapes which HRT.' },
        { t:'4\u20137',  h:'Options', d:'Transdermal vs oral oestrogen; progestogen if uterus; vaginal oestrogen; testosterone for libido.' },
        { t:'7\u20139',  h:'Honest risk-benefit', d:'Effective relief + bone; small type/route/duration-dependent risks; absolute numbers, counter headlines.' },
        { t:'9\u201312', h:'Bleeding safety-net', d:'PMB 55+ / unscheduled bleeding on HRT \u2192 NG12 endometrial pathway; shared decision; review.' }
      ],
      wordPics: {
        fail: 'Orders FSH unnecessarily or denies HRT on headline fear; gives oral oestrogen without a progestogen in a woman with a uterus; no bleeding safety-net.',
        pass: 'Diagnoses clinically, explains options and proportionate risk, and supports a shared decision with a bleeding safety-net.',
        exc:  'Validates and diagnoses clinically, assesses impact and risk, explains transdermal/progestogen/vaginal options accurately, gives honest absolute-risk information countering the headlines, counsels the NG12 bleeding safety-net, and shares the decision.'
      },
      avoid: [
        { dont:'"Let\u2019s do a blood test to confirm the menopause first."', instead:'"At 51 with these symptoms we diagnose it clinically \u2014 no blood test needed."', why:'Routine FSH is not indicated in over-45s and delays help.' },
        { dont:'"HRT does raise breast-cancer risk, so maybe avoid it."', instead:'"The extra risk is small and type-dependent \u2014 similar to a glass of wine or two \u2014 and the benefits are real. Let\u2019s decide together."', why:'Headline-driven denial withholds effective, appropriate treatment.' },
        { dont:'(Uterus present) prescribing oestrogen alone.', instead:'"As you still have your womb, you also need a progesterone to protect its lining."', why:'Unopposed oestrogen risks endometrial hyperplasia/cancer.' }
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
        { t:'2\u20135',  h:'Absolute numbers', d:'Extra cases per 1000 women; combined small/duration-dependent; oestrogen-only little/none.' },
        { t:'5\u20137',  h:'Contextualise', d:'Comparable to alcohol/overweight/inactivity; highlight modifiable factors.' },
        { t:'7\u20139',  h:'Tailor + reconnect', d:'Lowest dose, micronised progesterone; weigh her real benefit + individual risk.' },
        { t:'9\u201312', h:'Reassure + safety-net', d:'Not "asking for cancer"; written info; screening; report bleeding; revisit.' }
      ],
      wordPics: {
        fail: 'Gives a bald yes/no or only a scary relative percentage; dismisses or amplifies the risk; ignores her benefit and values.',
        pass: 'Answers honestly in absolute numbers, contextualises, and supports an informed decision.',
        exc:  'Reframes from yes/no to natural frequencies, contextualises against everyday risks, distinguishes type/duration/route, reconnects to her real benefit and values, reassures she\u2019s not "asking for cancer", and supports a revisitable choice.'
      },
      avoid: [
        { dont:'"Yes, HRT causes breast cancer."', instead:'"There\u2019s a small extra risk with the combined type \u2014 a few extra cases per 1000 over some years \u2014 and little or none with oestrogen-only."', why:'A bald yes/no misleads; absolute numbers inform.' },
        { dont:'"It increases your risk by [X]%."', instead:'"Out of 1000 women your age, it adds only a small handful of extra cases."', why:'Relative percentages exaggerate the perceived change; natural frequencies are clearer.' },
        { dont:'"Don\u2019t worry about it at all."', instead:'"It\u2019s a small, real risk \u2014 similar to a couple of daily drinks \u2014 worth weighing against how much HRT helps you."', why:'False blanket reassurance is as unhelpful as scaremongering.' }
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
        { t:'2\u20135',  h:'Test first', d:'Missed/late pills (12h), vomiting/diarrhoea, interacting meds, symptoms; pregnancy test if any doubt.' },
        { t:'5\u20137',  h:'Reassure with reasons', d:'~1 in 5 have no bleeding on desogestrel; expected, harmless, not failure.' },
        { t:'7\u20139',  h:'POP rules', d:'Same-time daily; >12h late \u2192 take + 48h condoms; sickness as missed; EC if needed.' },
        { t:'9\u201312', h:'Wider review + safety-net', d:'STI/screening, method suitability (LARC); when to retest.' }
      ],
      wordPics: {
        fail: 'Gives blind reassurance ("that\u2019s just the pill") without excluding pregnancy or reviewing use; misses STI/screening chance.',
        pass: 'Excludes pregnancy, reassures accurately about desogestrel bleeding, and reviews use.',
        exc:  'Applies "reassure but test first", excludes pregnancy with a test where any doubt, reassures accurately with reasons, reinforces the missed-pill rules, does a wider sexual-health review and safety-nets.'
      },
      avoid: [
        { dont:'"No periods is totally normal on that pill \u2014 nothing to worry about."', instead:'"It usually is \u2014 but let\u2019s do a quick pregnancy test first so I can reassure you properly."', why:'Blind reassurance risks missing a pregnancy from imperfect use.' },
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
        { t:'5\u20137',  h:'Menstrual clue + mask', d:'Amenorrhoea/oligomenorrhoea; the combined pill masks it; lost periods not "just running".' },
        { t:'7\u20139',  h:'Investigate', d:'Confirm fracture; FBC/ferritin/vit D/TFT/coeliac/hormones; consider DEXA.' },
        { t:'9\u201312', h:'Refer + fuel = performance', d:'Sports medicine, dietitian, ED/psychology; modified training + fuelling; review.' }
      ],
      wordPics: {
        fail: 'Treats the fracture (boot) and sends her back to training; never screens eating/energy or menstrual history; misses RED-S and the masking pill.',
        pass: 'Recognises the RED-S red flag, screens eating/menstrual history and refers multidisciplinary.',
        exc:  'Reframes recurrent fractures as RED-S, sensitively screens eating/energy and menstrual history (noting the pill mask), investigates including DEXA, refers multidisciplinary, and frames fuelling as the route to performance \u2014 without shaming.'
      },
      avoid: [
        { dont:'"Here\u2019s a boot \u2014 rest it and you\u2019ll be back running soon."', instead:'"Three fractures in a year is your body warning us \u2014 let\u2019s find why, or you\u2019ll get a fourth."', why:'Treating the bone alone misses RED-S and guarantees recurrence.' },
        { dont:'(Dismissing) "Losing your periods is normal with all that running."', instead:'"Losing periods isn\u2019t normal \u2014 it\u2019s a sign your body\u2019s under-fuelled and your bones are at risk; and the pill can hide it."', why:'Amenorrhoea is a cardinal RED-S clue, not a benign training effect.' },
        { dont:'(Shaming) "You\u2019re not eating enough \u2014 you need to eat more, simple."', instead:'"Can we look at fuelling together? Eating enough is how you run faster and stay injury-free \u2014 it\u2019s on your side."', why:'Shaming alienates; framing fuelling as performance-enhancing engages her.' }
      ]
    }

  });

})();
