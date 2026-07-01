/* ============================================================
   Reasoning GP — Case Library batch 63:
   "Prevention, mental health & skin" (NEW themes; final batch)
   Vaccine hesitancy (a worried parent declining the MMR \u2014 explore,
   don't lecture); an abnormal cervical screening / high-risk HPV
   result (explaining colposcopy, allaying cancer fear); emotionally
   unstable (borderline) personality disorder presenting in crisis
   (validation, risk, boundaries); and chronic plaque psoriasis (more
   than skin \u2014 the treatment ladder, comorbidity & PsA). No NG12
   cancer pathway is the driver; none invented (cervical-screening
   pathway is screening, not 2WW).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases62.js.
   ============================================================ */

(function(){

  /* ============ 224. F2F — Vaccine hesitancy: the parent declining the MMR ============ */
  const c224 = {
    id:'vaccine-hesitancy-mmr', title:'"I\u2019ve read things about the MMR \u2014 I\u2019m not sure I want my daughter to have it"', type:'video', duration:12,
    meta:{ age:32, sex:'F', setting:'Video consultation \u2014 a mother hesitant about her child\u2019s MMR vaccine.', system:'Population health / Prevention \u2014 vaccine hesitancy: explore, inform, respect autonomy' },
    brief:'Mrs Lauren Hill, 32, has come about her 13-month-old daughter\u2019s due MMR vaccine; she is HESITANT, having "read things" online linking it to autism and worrying about "overloading" the immune system. She is a thoughtful, anxious parent, not a hardened refuser. The examinable task is the VACCINE-HESITANCY consultation done well: EXPLORE her specific concerns and where they come from (without judgement), ELICIT her understanding and fears, then provide CLEAR, ACCURATE, BALANCED information \u2014 the discredited autism link (the original study was fraudulent/retracted; extensive evidence shows NO link), how the vaccine and immune system work (the "overload" myth), the real RISKS of the diseases (measles \u2014 serious complications, encephalitis, death; mumps; rubella in pregnancy) and of falling herd immunity \u2014 using motivational-interviewing-style, non-confrontational communication, NOT lecturing or shaming; CHECK understanding, address each concern, and RESPECT her AUTONOMY and the decision (offer time, written info, a follow-up, and leave the door open if she declines today), while being clear and honest about the recommendation. The skill is building trust and informing without coercion or dismissiveness \u2014 hesitancy is engaged, not lectured. No NG12 cancer link.',
    script:{
      opening:'"I\u2019ve come about Mia\u2019s jabs, but honestly I\u2019m not sure about the MMR. I\u2019ve read quite a bit online \u2014 there\u2019s stuff about it being linked to autism, and about overloading their little immune systems with so many vaccines. I\u2019m not anti-vaccine or anything, I just want to do the right thing for her. What do you think?"',
      facts:[
        { topic:'Explore first \u2014 don\u2019t lecture', text:'CORE \u2014 vaccine hesitancy is best met by EXPLORING, not lecturing. Elicit her SPECIFIC concerns, what she has read and where, her underlying fears (harming her child either way), and her current understanding. A thoughtful, anxious parent shut down by a lecture disengages; one whose concerns are heard and addressed is far more likely to vaccinate. Use a respectful, motivational-interviewing-style approach.' },
        { topic:'Address the autism myth accurately', text:'Address the AUTISM concern directly and accurately: the original claim came from a study that was found to be FRAUDULENT and was RETRACTED, its author struck off; SUBSEQUENT large, robust studies involving millions of children show NO link between MMR and autism. Explain this clearly and non-defensively \u2014 acknowledging why the fear persists \u2014 rather than dismissing her for raising it.' },
        { topic:'The "overload" myth & how it works', text:'Address the "overloading the immune system" worry: a child\u2019s immune system handles vast numbers of antigens daily, and the few in vaccines are a tiny fraction; combined vaccines like MMR are safe and effective and reduce the number of appointments/injections. Explain simply how the vaccine primes immunity. Reframe "more vaccines = overload" as a misconception.' },
        { topic:'The real risks of the diseases', text:'Balance the discussion with the REAL risks of the diseases the vaccine prevents: MEASLES is not trivial \u2014 it can cause pneumonia, ENCEPHALITIS, deafness, and death, and rare late SSPE; MUMPS can cause meningitis/orchitis; RUBELLA in pregnancy causes congenital defects. Falling uptake leads to OUTBREAKS (loss of herd immunity protecting the vulnerable). The decision is not "risk vs no risk" but the small vaccine risk vs the real disease risk.' },
        { topic:'Respect autonomy \u2014 leave the door open', text:'CRITICAL \u2014 respect her AUTONOMY: give clear, honest information and your recommendation, but do not coerce or shame. If she is not ready today, that is okay \u2014 offer reliable written information, time to consider, a follow-up appointment, and make clear the door is always open (vaccination can be caught up). A respectful, trust-preserving encounter is more likely to lead to vaccination than pressure. Document the discussion.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 she is not an ideological refuser but an anxious parent terrified of making the wrong choice, seeking trustworthy guidance ("what do you think?"). The skill is to engage her concerns genuinely, inform accurately and warmly, respect her autonomy, and build trust \u2014 not to lecture, shame, or dismiss, which would entrench hesitancy.' },
      ],
      ice:{
        ideas:'MMR might be linked to autism / might "overload" the immune system; wants to do the right thing for her child.',
        concerns:'HIDDEN AGENDA \u2014 fear of harming her child (by vaccinating OR not), influenced by online content; wants trustworthy guidance, not a lecture.',
        expectations:'Honest guidance on whether to vaccinate. What she needs: her concerns explored and addressed accurately (autism myth, "overload"), the real disease risks, respect for her autonomy, and an open door \u2014 not coercion or dismissal.'
      },
      cues:['Thoughtful, anxious parent hesitant about MMR (autism/"overload" worries) \u2014 explore concerns, don\u2019t lecture.','Address myths accurately: fraudulent/retracted autism study + no link in large studies; the immune system isn\u2019t "overloaded".','Balance with real disease risks (measles encephalitis/death, rubella in pregnancy, herd immunity); respect autonomy, leave the door open.']
    },
    checkpoints:[
      { dom:'tasks', text:'EXPLORES her specific concerns, sources and underlying fears, and elicits her understanding FIRST \u2014 using a non-judgemental, motivational-interviewing-style approach rather than lecturing' },
      { dom:'tasks', text:'Addresses the AUTISM myth accurately (fraudulent, retracted original study; no link in subsequent large studies) clearly and non-defensively, acknowledging why the fear persists' },
      { dom:'tasks', text:'Addresses the "immune overload" myth and explains simply how vaccines/combined MMR work and are safe and effective' },
      { dom:'tasks', text:'Balances the discussion with the REAL risks of the diseases (measles \u2014 pneumonia/encephalitis/death; mumps; rubella in pregnancy) and the importance of herd immunity/outbreaks \u2014 framing it as vaccine risk vs disease risk' },
      { dom:'tasks', text:'RESPECTS her AUTONOMY \u2014 gives a clear recommendation and honest information without coercion/shaming, offers written info, time, a follow-up, and an open door if she declines today \u2014 and documents the discussion' },
      { dom:'rto', text:'Reads her as an anxious, thoughtful parent (not an ideological refuser), builds trust, and engages her concerns warmly rather than dismissing or pressuring' },
      { dom:'rto',   text:'Checks understanding, addresses each concern, and maintains a respectful, trust-preserving relationship throughout' },
      { dom:'gs',    text:'Safety-nets and follows up: reliable information sources, a follow-up/catch-up plan, an open door, and clarity on the recommendation \u2014 informing and respecting autonomy, not coercing or lecturing' },
    ],
    worked:[
      { lbl:'Explore, don\u2019t lecture', txt:'"I\u2019m really glad you\u2019re asking rather than just deciding \u2014 that\u2019s a caring parent. Before I share what I think, tell me what you\u2019ve read and what worries you most about it? I\u2019d rather understand your specific concerns than just reel off facts."' },
      { lbl:'The autism worry, honestly', txt:'"The autism link is the one that scares a lot of parents, so I understand it. Honestly: it came from a single study that was later found to be fraudulent and was withdrawn, and the doctor lost his licence. Since then, studies of millions of children have found no link at all. The worry is understandable, but the evidence is really clear."' },
      { lbl:'The "overload" myth', txt:'"On overloading \u2014 it feels logical, but a baby\u2019s immune system deals with thousands of germs every day; the few in MMR are a tiny drop. Combining them into one jab is safe and means fewer needles for Mia, not more strain."' },
      { lbl:'The other side of the scales', txt:'"It\u2019s worth weighing what we\u2019re protecting against: measles isn\u2019t a mild rash \u2014 it can cause serious chest and brain infections and, rarely, death, and rubella in pregnancy can harm a baby. As fewer children are vaccinated, we\u2019re seeing outbreaks again. So it\u2019s really small vaccine risk versus real disease risk."' },
      { lbl:'Respect her choice', txt:'"My honest recommendation is the MMR \u2014 but it\u2019s your decision, and I won\u2019t pressure you. If you\u2019d like time, I can give you reliable information to read and we can talk again. The offer stays open \u2014 we can catch up the jab whenever you\u2019re ready."' },
      { lbl:'Keep the door open', txt:'"Whatever you decide today, you\u2019re welcome back to talk it through again \u2014 no judgement. Would written information and a follow-up chat help? I\u2019ll note our conversation so we can pick it up easily."' },
    ],
    learning:'Vaccine hesitancy is best met by EXPLORING rather than lecturing: elicit the parent\u2019s specific concerns, what they have read and where, their underlying fears (harming their child either way), and their current understanding first, using a respectful, motivational-interviewing-style approach \u2014 because a thoughtful, anxious parent who is lectured or shamed disengages, while one whose concerns are genuinely heard and addressed is far more likely to vaccinate. Address the AUTISM myth accurately and non-defensively: the original claim came from a study found to be FRAUDULENT and RETRACTED (its author struck off), and subsequent large, robust studies of millions of children show NO link between MMR and autism \u2014 acknowledging why the fear persists rather than dismissing the parent for raising it. Address the "immune overload" worry (a child\u2019s immune system handles vast numbers of antigens daily; the few in vaccines are a tiny fraction, and combined MMR is safe, effective and reduces injections) and explain simply how vaccination primes immunity. Balance the discussion with the REAL risks of the diseases \u2014 measles (pneumonia, encephalitis, deafness, death, rare SSPE), mumps (meningitis/orchitis), rubella in pregnancy (congenital defects) \u2014 and the importance of herd immunity and the outbreaks that follow falling uptake, framing the choice as small vaccine risk versus real disease risk. Crucially, RESPECT the parent\u2019s AUTONOMY: give a clear, honest recommendation without coercion or shaming, and if she is not ready, offer reliable written information, time, a follow-up and an open door (vaccination can be caught up), documenting the discussion \u2014 a trust-preserving encounter is more likely to lead to vaccination than pressure. The hidden agenda is an anxious, thoughtful parent seeking trustworthy guidance, not an ideological refuser; engage, inform warmly, respect autonomy and build trust. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Vaccine hesitancy / motivational interviewing \u00b7 MMR safety & the discredited autism claim \u00b7 immunisation (Green Book) \u00b7 herd immunity (no NG12 link)',
      points:[
        { h:'Explore, don\u2019t lecture', t:'Elicit specific concerns, sources, fears and understanding first, non-judgementally (MI-style). Lecturing/shaming entrenches hesitancy; engaging concerns builds trust and uptake.' },
        { h:'Autism myth', t:'The original study was fraudulent and retracted, the author struck off; large subsequent studies show no MMR\u2013autism link. Explain clearly, acknowledge the fear, don\u2019t dismiss.' },
        { h:'"Overload" myth', t:'Children\u2019s immune systems handle vast antigen loads daily; vaccine antigens are a tiny fraction. Combined MMR is safe/effective and means fewer injections.' },
        { h:'Real disease risks', t:'Measles (pneumonia, encephalitis, deafness, death, rare SSPE), mumps (meningitis/orchitis), rubella in pregnancy (congenital defects); falling uptake \u2192 outbreaks/loss of herd immunity. Vaccine risk vs disease risk.' },
        { h:'Respect autonomy', t:'Give a clear recommendation and honest information without coercion/shaming; offer written info, time, follow-up and an open door (catch-up possible). Document the discussion.' },
        { h:'Build trust', t:'Treat the hesitant parent as caring, not adversarial; warmth and respect preserve the relationship and the chance of future vaccination.' },
        { h:'Never do', t:'Never lecture, shame or dismiss a hesitant parent; never misstate the evidence defensively; never coerce; never close the door if they decline today.' },
        { h:'Safety-net & follow-up', t:'Reliable information sources, follow-up/catch-up plan, open door, documented discussion; revisit at future contacts.' }
      ]
    }
  };

  /* ============ 225. F2F — Abnormal cervical screening: high-risk HPV and colposcopy ============ */
  const c225 = {
    id:'abnormal-cervical-screening', title:'"My smear came back abnormal \u2014 do I have cancer? I\u2019m terrified and I don\u2019t understand the letter"', type:'video', duration:12,
    meta:{ age:29, sex:'F', setting:'Video consultation \u2014 explaining an abnormal cervical screening result.', system:'Gynaecology / Prevention \u2014 abnormal cervical screening: HPV, dyskaryosis & colposcopy' },
    brief:'Miss Carla Nunez, 29, has had a CERVICAL SCREENING (smear) result of high-risk HPV POSITIVE with borderline/low-grade DYSKARYOSIS, and a letter recommending COLPOSCOPY; she is frightened she has cancer and does not understand the result. The examinable task is to explain an abnormal cervical screening result clearly and reassuringly: what cervical screening DOES (detects high-risk HPV and pre-cancerous CELL CHANGES \u2014 it is SCREENING, not a cancer diagnosis), what HPV is (a common, usually transient sexually-transmitted virus \u2014 not a reflection of promiscuity/blame, often cleared by the immune system), what DYSKARYOSIS/CIN means (abnormal but PRE-cancerous cell changes that are NOT cancer and are highly treatable), why COLPOSCOPY is recommended (a closer look \u00b1 biopsy/treatment of any significant changes to PREVENT cancer developing), and to allay the cancer FEAR with honest, accurate reassurance while explaining the process; address emotional impact, relationship/HPV questions sensitively (HPV can be long-dormant \u2014 not evidence of infidelity), reinforce the importance of attending colposcopy and continued screening/HPV vaccination, and safety-net. The skill is translating a frightening letter into understanding, distinguishing screening abnormality from cancer, and supporting an anxious patient. NG12 note: this is the cervical SCREENING pathway (colposcopy referral), not a 2WW \u2014 unless frank symptoms/suspicious findings, which would change the pathway.',
    script:{
      opening:'"I got this letter about my smear test \u2014 it says something about HPV and abnormal cells and that I need a \u2018colposcopy\u2019. I\u2019ve been in bits since it arrived. Do I have cancer? What does it all mean? And does the HPV thing mean my partner\u2019s cheated, or that I\u2019ve done something?"',
      facts:[
        { topic:'Screening detects risk/pre-cancer \u2014 not a cancer diagnosis', text:'CORE \u2014 reassure first on the central point: cervical screening is SCREENING, designed to detect high-risk HPV and PRE-CANCEROUS cell changes EARLY so they can be treated before any cancer could develop. An abnormal smear is NOT a diagnosis of cancer. This reframing is the most important thing for a terrified patient.' },
        { topic:'Explain HPV without blame', text:'Explain HPV simply and NON-judgementally: human papillomavirus is a VERY COMMON sexually-transmitted virus that most sexually active people encounter; it is usually cleared by the immune system, can lie DORMANT for years, and finding it does NOT imply promiscuity or that a partner has been unfaithful. Address the relationship question sensitively \u2014 this is a frequent, distressing worry \u2014 and remove blame.' },
        { topic:'Dyskaryosis/CIN = treatable pre-cancer, not cancer', text:'Explain that DYSKARYOSIS (or CIN on biopsy) means abnormal cell changes that are PRE-cancerous \u2014 NOT cancer \u2014 and that low-grade changes often resolve on their own, while changes that need treatment are highly treatable with simple procedures, effectively PREVENTING cancer. The whole point of the programme is to catch and treat these changes early.' },
        { topic:'Why colposcopy', text:'Explain COLPOSCOPY: because high-risk HPV with cell changes is present, she is referred for a closer look at the cervix with a magnifier (colposcope), possibly with a small biopsy and, if needed, treatment of any significant area (e.g. LLETZ). It is usually quick, done awake in a clinic, and is about prevention. Explain what to expect to reduce fear and improve attendance.' },
        { topic:'Reinforce attendance, screening & vaccination', text:'Reinforce the importance of ATTENDING colposcopy (non-attendance is a key risk), continued routine screening, and HPV VACCINATION (which prevents the high-risk types). Note that this is the cervical-SCREENING pathway (colposcopy referral), distinct from an urgent suspected-cancer 2WW \u2014 but if she has SYMPTOMS (abnormal/post-coital/intermenstrual bleeding, a suspicious-looking cervix), those change the assessment and warrant prompt/urgent referral on their own.' },
        { topic:'The communication core', text:'COMMUNICATION/HIDDEN AGENDA \u2014 her dominant emotions are FEAR of cancer and possible relationship distress/blame around HPV. The skill is to lead with accurate reassurance (screening abnormality, not cancer), explain HPV without blame, demystify colposcopy, validate her fear, check understanding, and ensure she attends \u2014 translating a frightening letter into a clear, supported plan.' },
      ],
      ice:{
        ideas:'An abnormal smear means cancer; HPV means a partner cheated or she did something wrong.',
        concerns:'HIDDEN AGENDA \u2014 terror of cancer; distress/blame about HPV and her relationship; not understanding the letter.',
        expectations:'To know if she has cancer and what the letter means. What she needs: reassurance that this is screening/pre-cancer not cancer, a blame-free explanation of HPV, demystification of colposcopy, and support to attend.'
      },
      cues:['High-risk HPV + dyskaryosis on screening with colposcopy referral \u2014 screening abnormality/pre-cancer, NOT a cancer diagnosis; lead with reassurance.','HPV is common, often dormant for years \u2014 not evidence of infidelity/promiscuity; explain without blame.','Colposcopy = closer look \u00b1 biopsy/treatment to PREVENT cancer; reinforce attendance, screening, HPV vaccination; symptoms would change the pathway.']
    },
    checkpoints:[
      { dom:'tasks', text:'Leads with the key reassurance \u2014 cervical screening detects high-risk HPV and PRE-cancerous cell changes early; an abnormal smear is SCREENING, NOT a cancer diagnosis' },
      { dom:'tasks', text:'Explains HPV simply and WITHOUT BLAME \u2014 a very common virus, usually cleared, can lie dormant for years, not evidence of promiscuity/infidelity \u2014 addressing the relationship question sensitively' },
      { dom:'tasks', text:'Explains that DYSKARYOSIS/CIN is PRE-cancerous (not cancer), that low-grade changes often resolve, and that changes needing treatment are highly treatable \u2014 preventing cancer' },
      { dom:'tasks', text:'Explains COLPOSCOPY (magnified look \u00b1 biopsy/treatment such as LLETZ, usually quick and awake) and what to expect, framing it as prevention to reduce fear and improve attendance' },
      { dom:'tasks', text:'Reinforces ATTENDING colposcopy, continued screening and HPV VACCINATION, and recognises this is the screening pathway (not a 2WW) while noting that symptoms/suspicious findings would change the assessment' },
      { dom:'rto',   text:'Validates her FEAR of cancer and relationship distress, leads with reassurance, and explains a frightening letter in clear, accessible terms' },
      { dom:'rto',   text:'Checks understanding throughout and ensures she leaves reassured, informed and committed to attending \u2014 not more frightened' },
      { dom:'gs',    text:'Safety-nets and follows up: the importance of attending colposcopy, what symptoms (abnormal/post-coital bleeding) warrant prompt review, continued screening/vaccination, and support \u2014 translating screening abnormality into an understood, supported plan' },
    ],
    worked:[
      { lbl:'Lead with reassurance', txt:'"Let me put the most important thing first, because I can see you\u2019re terrified: this does NOT mean you have cancer. A smear is a screening test \u2014 it\u2019s designed to catch early changes long before they could ever become cancer, so they can be sorted. This is the system working as intended."' },
      { lbl:'Explain HPV without blame', txt:'"The HPV part \u2014 that\u2019s a really common virus that most people who\u2019ve ever been sexually active will have had. It usually clears by itself and can sit silently for years. So finding it does NOT mean your partner\u2019s cheated or that you\u2019ve done anything wrong \u2014 please don\u2019t blame yourself or him."' },
      { lbl:'Pre-cancer, not cancer', txt:'"The \u2018abnormal cells\u2019 are pre-cancerous changes \u2014 not cancer. Mild ones often go away on their own, and any that need treating are very treatable with a simple procedure. The whole point is to deal with them early so cancer never gets a chance."' },
      { lbl:'Demystify colposcopy', txt:'"Colposcopy just means a closer look at the cervix with a magnifying camera in a clinic \u2014 you\u2019re awake, it\u2019s usually quick. They may take a tiny sample, and if there\u2019s an area that needs it, they can treat it there or soon after. It\u2019s a preventive step, not a scary one."' },
      { lbl:'Encourage attendance', txt:'"The single most important thing is to go to the colposcopy appointment \u2014 that\u2019s what keeps you safe. Keep up your routine smears too, and the HPV vaccine protects against the risky types. Does that make the letter make more sense?"' },
      { lbl:'Safety-net', txt:'"If you ever get bleeding between periods or after sex, or any new symptoms, tell me \u2014 that\u2019s a separate reason to be checked. But for now: this is reassuring news caught early, and going to the appointment is the key. I\u2019m here if more questions come up."' },
    ],
    learning:'An abnormal cervical screening result terrifies patients, so lead with the central reassurance: cervical screening is SCREENING, designed to detect high-risk HPV and PRE-CANCEROUS cell changes EARLY so they can be treated before any cancer could develop \u2014 an abnormal smear is NOT a diagnosis of cancer. Explain HPV simply and WITHOUT BLAME: it is a very common sexually-transmitted virus that most sexually active people encounter, usually cleared by the immune system, able to lie DORMANT for years, and finding it does not imply promiscuity or partner infidelity \u2014 a frequent, distressing worry to address sensitively. Explain that DYSKARYOSIS (or CIN on biopsy) means abnormal but PRE-cancerous cell changes (not cancer), that low-grade changes often resolve spontaneously, and that changes needing treatment are highly treatable with simple procedures that effectively PREVENT cancer. Explain COLPOSCOPY \u2014 a magnified look at the cervix \u00b1 a small biopsy and, if needed, treatment (e.g. LLETZ), usually quick and done awake \u2014 framing it as prevention and describing what to expect to reduce fear and improve attendance. Reinforce the importance of ATTENDING colposcopy (non-attendance is a key risk), continued routine screening and HPV VACCINATION, and recognise that this is the cervical-SCREENING pathway (a colposcopy referral), distinct from an urgent suspected-cancer 2WW \u2014 though symptoms (abnormal, post-coital or intermenstrual bleeding, a suspicious cervix) would change the assessment and warrant prompt/urgent referral on their own. The communication core is fear of cancer and relationship distress; lead with accurate reassurance, explain HPV without blame, demystify colposcopy, validate the fear, check understanding, and ensure she attends.',
    knowledge:{
      guideline:'NHS cervical screening (HPV primary screening) \u00b7 dyskaryosis/CIN \u00b7 colposcopy \u00b7 HPV vaccination (screening pathway, not 2WW unless symptomatic)',
      points:[
        { h:'Screening, not cancer', t:'An abnormal smear detects high-risk HPV and pre-cancerous changes early \u2014 it is screening, not a cancer diagnosis. Lead with this reassurance.' },
        { h:'HPV without blame', t:'HPV is very common, usually cleared, can lie dormant for years; not evidence of promiscuity or infidelity. Address the relationship worry sensitively and remove blame.' },
        { h:'Dyskaryosis/CIN', t:'Pre-cancerous cell changes, not cancer. Low-grade often resolves; changes needing treatment are highly treatable \u2014 the programme prevents cancer.' },
        { h:'Colposcopy', t:'Magnified look at the cervix \u00b1 biopsy/treatment (e.g. LLETZ), usually quick and awake. Explain what to expect; it is preventive.' },
        { h:'Attendance, screening, vaccine', t:'Attending colposcopy is the key safety step; continue routine screening; HPV vaccination prevents high-risk types.' },
        { h:'Pathway note', t:'This is the cervical-screening pathway (colposcopy referral), not a 2WW. Symptoms (abnormal/post-coital/intermenstrual bleeding, suspicious cervix) change the assessment and warrant prompt/urgent referral.' },
        { h:'Never do', t:'Never let the patient believe an abnormal smear = cancer; never imply HPV means infidelity/blame; never under-stress the importance of attending colposcopy; never ignore symptoms that change the pathway.' },
        { h:'Safety-net & follow-up', t:'Attend colposcopy; report abnormal/post-coital bleeding or new symptoms; continued screening and vaccination; emotional support; check understanding.' }
      ]
    }
  };

  /* ============ 226. F2F — Emotionally unstable (borderline) personality disorder: crisis, validation & boundaries ============ */
  const c226 = {
    id:'eupd-crisis', title:'"Nobody helps me, I can\u2019t cope, and I\u2019ve been hurting myself \u2014 you\u2019re my last hope, you have to fix this now"', type:'video', duration:12,
    meta:{ age:26, sex:'F', setting:'Video consultation \u2014 a distressed patient in crisis with self-harm.', system:'Mental health \u2014 emotionally unstable (borderline) personality disorder: crisis, risk & therapeutic boundaries' },
    brief:'Miss Robyn Easton, 26, known emotionally unstable (borderline) personality disorder (EUPD), attends in CRISIS \u2014 intensely distressed, recent SELF-HARM (cutting), feelings of emptiness/abandonment after a relationship breakdown, idealising the GP ("you\u2019re the only one who understands / my last hope") and demanding an immediate fix. The examinable task is the EUPD-in-crisis consultation: respond with genuine VALIDATION and empathy (not dismissal) while assessing RISK carefully (current self-harm, suicidal ideation/intent/plan, protective factors, safety), avoiding both over-reaction and under-reaction; recognise the patterns of EUPD (emotional dysregulation, fear of abandonment, impulsivity, idealisation/devaluation, recurrent self-harm) WITHOUT being dismissive or stigmatising; maintain CONSISTENT, COMPASSIONATE BOUNDARIES (you cannot "fix it now" or be the sole rescuer \u2014 explain this kindly, avoid splitting, model reliability within limits); make a collaborative SAFETY/crisis plan (crisis-team/contacts, coping strategies, follow-up), reinforce the EVIDENCE-BASED treatment (structured PSYCHOLOGICAL therapy \u2014 e.g. DBT/MBT \u2014 is the mainstay; medication is not first-line for EUPD itself, though comorbid depression/anxiety is treated); involve the wider team (crisis/CMHT) appropriately; and look after continuity. The skill is holding empathy + risk assessment + boundaries together, and not being drawn into an unsustainable rescuer role or dismissing the distress. No NG12 cancer link.',
    script:{
      opening:'"You\u2019re the only one who actually listens \u2014 everyone else has given up on me. I can\u2019t cope, my partner\u2019s left, I feel completely empty, and I\u2019ve been cutting again. I need you to fix this right now, today. Please, you\u2019re my last hope. If you can\u2019t help me I don\u2019t know what I\u2019ll do."',
      facts:[
        { topic:'Validate first \u2014 and assess risk', text:'CORE \u2014 respond with genuine VALIDATION and empathy (her distress is real and overwhelming), NOT dismissal \u2014 while carefully ASSESSING RISK: the recent self-harm (method, intent, escalation), current SUICIDAL ideation/intent/plan/means, protective factors, support, and immediate safety. "If you can\u2019t help I don\u2019t know what I\u2019ll do" must be explored directly (sensitive, specific suicide-risk questioning). Hold empathy and risk assessment together.' },
        { topic:'Recognise EUPD without stigma', text:'Recognise the patterns of EMOTIONALLY UNSTABLE (BORDERLINE) PERSONALITY DISORDER \u2014 intense emotional dysregulation, fear of ABANDONMENT (the relationship breakdown as trigger), chronic emptiness, impulsivity, recurrent self-harm, and IDEALISATION/devaluation (you as "the only one who understands") \u2014 WITHOUT being dismissive or stigmatising. Understanding the pattern guides a measured, compassionate response rather than either panic or rejection.' },
        { topic:'Avoid over- and under-reaction', text:'BALANCE \u2014 avoid BOTH extremes: under-reacting/dismissing ("she always does this") risks missing genuine elevated risk; over-reacting (e.g. reflexive admission, escalating medication) can be unhelpful or harmful and reinforce unhelpful patterns. Assess each presentation on its merits, take the risk seriously AND respond proportionately, recognising that self-harm in EUPD is often a way of coping with unbearable emotion.' },
        { topic:'Compassionate, consistent boundaries', text:'CRITICAL SKILL \u2014 maintain CONSISTENT, COMPASSIONATE BOUNDARIES: you cannot "fix it right now" or be her sole rescuer, and saying so KINDLY (while not rejecting her) is therapeutic, not cruel. Avoid being drawn into idealisation/SPLITTING (being the "good" clinician against "everyone else who gave up"); model reliability within clear limits (what you can offer, the plan, the team), and avoid promises you cannot keep. Boundaries + warmth, not warmth without limits or limits without warmth.' },
        { topic:'Safety plan + evidence-based treatment', text:'Make a collaborative SAFETY/CRISIS plan: agreed coping strategies, crisis-line/crisis-team contacts, who to call, removing/limiting means, follow-up, and involving the CRISIS team/CMHT as risk dictates. Reinforce the EVIDENCE-BASED treatment for EUPD \u2014 structured PSYCHOLOGICAL therapies (e.g. DBT, MBT) are the mainstay; medication is NOT first-line for the disorder itself, though comorbid depression/anxiety/sleep may be treated, and avoid commencing/escalating sedatives or polypharmacy reflexively in crisis. Ensure continuity.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 beneath "fix this now / you\u2019re my last hope" is unbearable emotional pain, fear of abandonment, and a need to feel heard and held safely \u2014 not an actual expectation of an instant cure. The skill is to validate and contain the distress, assess and manage risk, hold compassionate boundaries (no instant fix, not the sole rescuer), make a safety plan, signpost the right (psychological) treatment and team, and preserve continuity \u2014 neither rejecting nor rescuing.' },
      ],
      ice:{
        ideas:'The GP can and must "fix it right now"; the GP is the only one who understands/can help.',
        concerns:'HIDDEN AGENDA \u2014 unbearable emotional pain, fear of abandonment after the relationship breakdown, feeling let down by services, needing to be heard and kept safe.',
        expectations:'An immediate fix / rescue. What she needs: genuine validation, careful risk assessment, compassionate consistent boundaries (no instant fix/sole rescuer), a collaborative safety plan, the right psychological treatment/team, and continuity \u2014 not rejection or rescue.'
      },
      cues:['EUPD in crisis: intense distress, recent self-harm, abandonment trigger, idealisation ("only you understand", "last hope") \u2014 validate AND assess risk.','Avoid both under-reaction (dismissal) and over-reaction (reflexive admission/medication); assess risk on its merits, respond proportionately.','Hold compassionate, consistent boundaries (no instant fix, not sole rescuer; avoid splitting); safety plan + crisis team + DBT/MBT (meds not first-line).']
    },
    checkpoints:[
      { dom:'tasks', text:'Responds with genuine VALIDATION/empathy AND carefully ASSESSES RISK \u2014 recent self-harm (method/intent/escalation), current suicidal ideation/intent/plan/means, protective factors, support and immediate safety \u2014 exploring "I don\u2019t know what I\u2019ll do" directly' },
      { dom:'tasks', text:'Recognises EMOTIONALLY UNSTABLE (BORDERLINE) PERSONALITY DISORDER patterns (emotional dysregulation, abandonment fear, emptiness, impulsivity, recurrent self-harm, idealisation/devaluation) WITHOUT stigma or dismissal' },
      { dom:'tasks', text:'Avoids BOTH over-reaction (reflexive admission/medication escalation) and under-reaction (dismissal) \u2014 assessing this presentation on its merits and responding proportionately' },
      { dom:'tasks', text:'Maintains COMPASSIONATE, CONSISTENT BOUNDARIES \u2014 kindly explaining there is no instant fix and that the clinician cannot be the sole rescuer, avoiding splitting/idealisation and promises that can\u2019t be kept, while not rejecting her' },
      { dom:'tasks', text:'Makes a collaborative SAFETY/CRISIS plan (coping strategies, crisis-line/crisis-team contacts, means safety, follow-up, CMHT/crisis-team involvement as risk dictates) and reinforces the evidence-based treatment (psychological therapy \u2014 DBT/MBT \u2014 mainstay; medication not first-line for EUPD itself)' },
      { dom:'rto',   text:'Holds empathy and containment together \u2014 making her feel genuinely heard and safe \u2014 while not being drawn into an unsustainable rescuer role' },
      { dom:'rto',   text:'Communicates boundaries with warmth (not warmth without limits, nor limits without warmth), checks understanding, and preserves the therapeutic relationship and continuity' },
      { dom:'gs',    text:'Safety-nets and follows up: a clear crisis/safety plan with named contacts, when/how to seek urgent help, crisis-team/CMHT involvement proportionate to risk, follow-up and continuity \u2014 validation + risk management + boundaries, neither rejecting nor rescuing' },
    ],
    worked:[
      { lbl:'Validate genuinely', txt:'"I can hear how much pain you\u2019re in, and I\u2019m really glad you came to me with it rather than being alone with it. Losing your partner, feeling empty, hurting yourself \u2014 that\u2019s a huge amount to carry. I\u2019m taking it seriously."' },
      { lbl:'Assess risk directly', txt:'"I need to ask you some direct questions to keep you safe. When you cut, were you trying to end your life or to cope with the feelings? Right now, are you having thoughts of ending your life \u2014 any plan, anything you\u2019d use? What\u2019s kept you going so far?"' },
      { lbl:'Compassionate boundary', txt:'"I want to be honest and kind with you: I can\u2019t fix all of this today, and it wouldn\u2019t be fair to pretend I can be the only person who helps you \u2014 because you deserve a proper team around you, not just me. What I CAN do is make sure you\u2019re safe today and get the right help in place."' },
      { lbl:'Avoid splitting, stay warm', txt:'"It sounds like others have let you down, and that\u2019s painful \u2014 but I don\u2019t want to be your only lifeline and then let you down too. Let\u2019s build something more reliable: you, me, and the crisis and mental-health teams working together."' },
      { lbl:'Safety plan + right treatment', txt:'"Let\u2019s make a plan for when it feels unbearable \u2014 things that help you cope, who to call, the crisis line, and keeping yourself safe from means. The treatment that genuinely helps this in the long run is a talking therapy like DBT \u2014 not just tablets \u2014 and I\u2019ll get that moving with the team."' },
      { lbl:'Follow-up + safety-net', txt:'"I\u2019m going to arrange close follow-up and involve the crisis team given how you\u2019re feeling. If your thoughts of harming yourself get stronger or you feel unsafe, call the crisis line or 999 / go to A&E \u2014 that\u2019s exactly what they\u2019re there for. You\u2019re not a burden, and I\u2019m not giving up on you."' },
    ],
    learning:'The EUPD-in-crisis consultation requires holding genuine VALIDATION/empathy and careful RISK ASSESSMENT together: the patient\u2019s distress is real and overwhelming and must not be dismissed, while the recent self-harm (method, intent, escalation), current suicidal ideation/intent/plan/means, protective factors and immediate safety are assessed directly \u2014 statements like "I don\u2019t know what I\u2019ll do" explored with sensitive, specific suicide-risk questioning. Recognise the patterns of EMOTIONALLY UNSTABLE (BORDERLINE) PERSONALITY DISORDER \u2014 emotional dysregulation, fear of ABANDONMENT (here a relationship breakdown), chronic emptiness, impulsivity, recurrent self-harm, and IDEALISATION/devaluation (the clinician as "the only one who understands") \u2014 without stigma, because understanding the pattern guides a measured response rather than panic or rejection. Avoid BOTH extremes: under-reacting/dismissing risks missing genuinely elevated risk, while over-reacting (reflexive admission, escalating medication) can be unhelpful or harmful and reinforce unhelpful patterns \u2014 assess each presentation on its merits and respond proportionately, recognising self-harm as often a way of coping with unbearable emotion. The critical skill is maintaining COMPASSIONATE, CONSISTENT BOUNDARIES: you cannot "fix it now" or be the sole rescuer, and saying so KINDLY (without rejecting) is therapeutic; avoid being drawn into idealisation/SPLITTING ("the good clinician versus everyone who gave up"), model reliability within clear limits, and avoid promises you cannot keep \u2014 boundaries with warmth, neither warmth without limits nor limits without warmth. Make a collaborative SAFETY/CRISIS plan (coping strategies, crisis-line/crisis-team contacts, means safety, follow-up, CMHT involvement per risk) and reinforce the evidence-based treatment \u2014 structured PSYCHOLOGICAL therapies (DBT, MBT) are the mainstay, while medication is NOT first-line for EUPD itself (treat comorbid depression/anxiety, avoid reflexive sedatives/polypharmacy in crisis) \u2014 ensuring continuity. The hidden agenda is unbearable pain, abandonment fear and a need to be heard and held safely, not an expectation of an instant cure; validate and contain, manage risk, hold boundaries, signpost the right treatment/team, and preserve continuity \u2014 neither rejecting nor rescuing. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE CG78 borderline personality disorder \u00b7 self-harm (NICE NG225) \u00b7 risk assessment \u00b7 DBT/MBT \u00b7 therapeutic boundaries (no NG12 link)',
      points:[
        { h:'Validate + assess risk', t:'Respond with genuine empathy (not dismissal) AND assess risk: recent self-harm (method/intent/escalation), current suicidal ideation/intent/plan/means, protective factors, safety. Explore "I don\u2019t know what I\u2019ll do" directly.' },
        { h:'Recognise EUPD', t:'Emotional dysregulation, abandonment fear, emptiness, impulsivity, recurrent self-harm, idealisation/devaluation. Understand the pattern without stigma to respond in a measured way.' },
        { h:'Avoid both extremes', t:'Under-reaction/dismissal risks missing real risk; over-reaction (reflexive admission/medication) can harm and reinforce patterns. Assess on merits; respond proportionately.' },
        { h:'Compassionate boundaries', t:'No instant fix; not the sole rescuer \u2014 say so kindly without rejecting. Avoid splitting/idealisation, model reliability within limits, don\u2019t over-promise. Warmth with boundaries.' },
        { h:'Safety plan', t:'Collaborative crisis/safety plan: coping strategies, crisis-line/crisis-team contacts, means safety, follow-up, CMHT involvement per risk.' },
        { h:'Evidence-based treatment', t:'Structured psychological therapy (DBT, MBT) is the mainstay; medication is not first-line for EUPD itself (treat comorbid depression/anxiety; avoid reflexive sedatives/polypharmacy in crisis).' },
        { h:'Never do', t:'Never dismiss as "attention-seeking"; never over-react reflexively; never become the sole rescuer or make promises you can\u2019t keep; never start/escalate sedatives reflexively; never reject the patient.' },
        { h:'Safety-net & follow-up', t:'Clear crisis/safety plan with named contacts and when to call crisis line/999/A&E; proportionate crisis-team/CMHT involvement; follow-up and continuity; validation + risk + boundaries.' }
      ]
    }
  };

  /* ============ 227. F2F — Chronic plaque psoriasis: more than skin deep ============ */
  const c227 = {
    id:'chronic-plaque-psoriasis', title:'"These scaly patches keep coming back and creams barely help \u2014 it\u2019s ruining my confidence"', type:'video', duration:12,
    meta:{ age:38, sex:'M', setting:'Video consultation \u2014 recurrent scaly plaques affecting quality of life.', system:'Dermatology \u2014 chronic plaque psoriasis: the treatment ladder, comorbidity & psychosocial impact' },
    brief:'Mr Daniel Okafor, 38, has recurrent well-demarcated, red, SCALY plaques on his elbows, knees and scalp (\u00b1 nail changes), present for years, worsening, with significant impact on confidence/mood and some joint stiffness in the mornings. The examinable task is to recognise CHRONIC PLAQUE PSORIASIS and manage it holistically: confirm the clinical picture (well-demarcated salmon-pink plaques with silvery scale at extensor sites/scalp, nail pitting/onycholysis), apply the topical TREATMENT LADDER (emollients plus potent topical CORTICOSTEROID + vitamin D analogue \u2014 e.g. combined products \u2014 first-line, with scalp/flexural-appropriate preparations, and the need to review/rotate), know when to STEP UP/refer (extensive/severe, unresponsive, significant impact \u2192 dermatology for phototherapy, systemic agents, biologics); screen for PSORIATIC ARTHRITIS (his morning joint stiffness/pain \u2014 a key associated condition needing rheumatology), recognise the CARDIOVASCULAR/metabolic comorbidity (psoriasis associates with cardiovascular risk, metabolic syndrome \u2014 address smoking, weight, alcohol) and triggers (stress, infection, drugs e.g. beta-blockers/lithium, skin trauma), and \u2014 critically \u2014 take the PSYCHOSOCIAL impact seriously (confidence, mood, stigma, relationships \u2014 screen low mood). The skill is treating psoriasis as MORE THAN SKIN: the ladder, the arthritis screen, the comorbidity, and the psychological impact. No NG12 cancer link.',
    script:{
      opening:'"I\u2019ve had these scaly patches on my elbows, knees and scalp for years \u2014 they flare up, the creams barely touch them, and they\u2019re back worse than ever. Honestly it\u2019s wrecking my confidence; I cover up even in summer. And lately my fingers and lower back are stiff and achy in the mornings. Can you give me something stronger that actually works?"',
      facts:[
        { topic:'Recognise chronic plaque psoriasis', text:'CORE \u2014 well-demarcated, red/salmon-pink PLAQUES with SILVERY scale at EXTENSOR sites (elbows, knees), the SCALP, and sometimes the lower back/umbilicus, often with NAIL changes (pitting, onycholysis) and a chronic relapsing course, is CHRONIC PLAQUE PSORIASIS. Confirm the clinical picture and assess extent, severity and the sites involved (scalp, flexures, nails).' },
        { topic:'The topical treatment ladder', text:'Apply the topical LADDER: generous EMOLLIENTS as a base, then a potent TOPICAL CORTICOSTEROID + VITAMIN D ANALOGUE (often as a combined once-daily product) first-line for plaques, with site-appropriate preparations (scalp formulations; milder/appropriate agents for flexures/face; coal tar/vitamin D as alternatives). Review and ROTATE/rest steroids appropriately, and explain realistic use (it controls, not cures, and needs consistent application). "Creams barely help" is often under-treatment/incorrect potency or application.' },
        { topic:'When to step up / refer', text:'Know when to STEP UP or REFER to dermatology: extensive or severe disease, failure of optimised topical therapy, significant functional/psychological impact, or difficult sites \u2014 for PHOTOTHERAPY, systemic agents (methotrexate, ciclosporin, acitretin) and BIOLOGICS. Refer urgently for erythrodermic or generalised pustular psoriasis (rare emergencies). His worsening, impactful, topical-resistant disease may warrant referral.' },
        { topic:'Screen for psoriatic arthritis', text:'CRITICAL \u2014 screen for PSORIATIC ARTHRITIS, a key associated condition: his morning JOINT STIFFNESS/PAIN (fingers, lower back \u2014 possible inflammatory/axial involvement), dactylitis, enthesitis or nail disease suggest it. Use a screening approach (e.g. PEST questionnaire), examine joints, and refer to RHEUMATOLOGY if suspected \u2014 early treatment prevents joint damage. Do not treat the skin and miss the joints.' },
        { topic:'Comorbidity, triggers & lifestyle', text:'Recognise psoriasis as a SYSTEMIC condition: it associates with increased CARDIOVASCULAR risk and METABOLIC SYNDROME (and other comorbidities), so assess and address cardiovascular risk \u2014 smoking, weight, alcohol, blood pressure/lipids/glucose. Identify TRIGGERS (stress, infection \u2014 e.g. streptococcal/guttate, skin trauma [Koebner], certain DRUGS such as beta-blockers, lithium, antimalarials, and alcohol). Manage the whole person.' },
        { topic:'The psychosocial impact + hidden agenda', text:'CORE \u2014 take the PSYCHOSOCIAL impact seriously: psoriasis profoundly affects confidence, mood, body image, relationships and work, with stigma and real risk of DEPRESSION/anxiety \u2014 screen low mood and validate the impact (he covers up, his confidence is "wrecked"). HIDDEN AGENDA \u2014 "something stronger that works" is partly about the visible skin and partly about the distress and now the joints; the skill is to optimise treatment, screen the arthritis and comorbidity, and address the emotional impact \u2014 treating MORE THAN the skin.' },
      ],
      ice:{
        ideas:'He needs "something stronger" because the creams don\u2019t work; sees it mainly as a skin nuisance.',
        concerns:'HIDDEN AGENDA \u2014 the impact on confidence/mood (covering up, stigma); the new joint stiffness; frustration at recurrence.',
        expectations:'A stronger cream. What he needs: optimised topical therapy (correct potency/application) \u00b1 referral, a psoriatic-arthritis screen and rheumatology referral, cardiovascular/metabolic risk and trigger review, and the psychosocial impact addressed \u2014 more than skin.'
      },
      cues:['Well-demarcated silvery-scaled plaques on elbows/knees/scalp \u00b1 nail changes, chronic/relapsing \u2014 chronic plaque psoriasis; optimise the topical ladder.','Morning joint stiffness/pain \u2014 screen for PSORIATIC ARTHRITIS (PEST), examine joints, refer rheumatology; don\u2019t treat skin and miss joints.','Psoriasis is systemic \u2014 cardiovascular/metabolic risk + triggers (drugs/stress/infection); take the psychosocial impact (confidence/mood) seriously.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises CHRONIC PLAQUE PSORIASIS (well-demarcated silvery-scaled plaques at extensor sites/scalp \u00b1 nail changes, chronic relapsing course) and assesses extent/severity/sites' },
      { dom:'tasks', text:'Applies the topical TREATMENT LADDER \u2014 emollients + potent topical corticosteroid + vitamin D analogue (combined products) first-line, site-appropriate preparations, with review/rotation \u2014 recognising "creams don\u2019t work" is often under-treatment/incorrect application' },
      { dom:'tasks', text:'Knows when to STEP UP/refer to dermatology (extensive/severe, topical-resistant, significant impact \u2192 phototherapy/systemics/biologics) and the urgent emergencies (erythrodermic/generalised pustular)' },
      { dom:'tasks', text:'SCREENS for PSORIATIC ARTHRITIS (morning stiffness/joint pain, dactylitis, nail disease; PEST/joint exam) and refers to RHEUMATOLOGY if suspected \u2014 not treating skin and missing joints' },
      { dom:'tasks', text:'Recognises the CARDIOVASCULAR/metabolic comorbidity (assess/address smoking, weight, alcohol, BP/lipids/glucose) and identifies TRIGGERS (stress, infection, skin trauma, drugs \u2014 beta-blockers/lithium/antimalarials)' },
      { dom:'rto',   text:'Takes the PSYCHOSOCIAL impact seriously \u2014 confidence, mood, body image, stigma, relationships \u2014 screens low mood, and validates the distress rather than treating it as merely cosmetic' },
      { dom:'rto',   text:'Explains the treatment plan and realistic expectations (control not cure), checks understanding (including correct application), and supports adherence' },
      { dom:'gs',    text:'Safety-nets and follows up: optimised topical therapy with review, rheumatology referral for suspected psoriatic arthritis, cardiovascular/metabolic risk management, trigger advice, mood support, and dermatology referral if needed \u2014 treating more than the skin' },
    ],
    worked:[
      { lbl:'Recognise + reframe', txt:'"Those silvery, well-defined scaly patches on your elbows, knees and scalp are classic psoriasis \u2014 and importantly it\u2019s more than a skin problem, so I want to look at the whole picture, not just hand you a stronger cream."' },
      { lbl:'Optimise the creams', txt:'"Often \u2018creams don\u2019t work\u2019 because the strength or how they\u2019re used isn\u2019t quite right. The mainstay is a strong steroid combined with a vitamin D cream \u2014 and a proper scalp preparation \u2014 used consistently, with emollients underneath. Let\u2019s get that right and review; if it\u2019s still not controlled, the skin specialists have light therapy and tablets/injections."' },
      { lbl:'Screen the joints', txt:'"The morning stiffness in your fingers and back is important \u2014 psoriasis can come with a linked arthritis, and treating it early protects the joints. I\u2019ll ask a few screening questions and examine them, and refer you to rheumatology if it fits."' },
      { lbl:'Whole-body health', txt:'"Psoriasis is also linked with heart and metabolic risk, so I\u2019d like to check your blood pressure, cholesterol and sugar and support things like smoking, weight and alcohol. And some triggers matter \u2014 stress, infections, even certain blood-pressure tablets can flare it."' },
      { lbl:'Address the impact', txt:'"You said it\u2019s wrecking your confidence and you cover up \u2014 that matters as much as the skin itself. It\u2019s really common for psoriasis to affect mood. How have you been in yourself? We can support that too, and good control usually helps the confidence."' },
      { lbl:'Plan + safety-net', txt:'"So: optimise the treatment and review, screen and refer for the joints, check your heart/metabolic risk, and look after your mood. Come back if it spreads dramatically, your skin goes red all over or you feel unwell \u2014 those rarer severe forms need urgent care. We\u2019ll tackle this properly, not just paper over it."' },
    ],
    learning:'CHRONIC PLAQUE PSORIASIS \u2014 well-demarcated, red/salmon-pink plaques with SILVERY scale at extensor sites (elbows, knees), the scalp, and sometimes the lower back/umbilicus, often with NAIL changes (pitting, onycholysis) and a chronic relapsing course \u2014 must be managed as MORE THAN SKIN. Confirm the clinical picture and assess extent, severity and sites, then apply the topical TREATMENT LADDER: generous emollients plus a potent topical CORTICOSTEROID + VITAMIN D ANALOGUE (often a combined once-daily product) first-line, with site-appropriate preparations (scalp formulations; appropriate agents for flexures/face) and review/rotation \u2014 recognising that "creams don\u2019t work" is often under-treatment or incorrect potency/application. Know when to STEP UP or REFER to dermatology (extensive/severe, topical-resistant, significant functional/psychological impact, difficult sites \u2192 phototherapy, systemics such as methotrexate/ciclosporin/acitretin, biologics) and the rare emergencies (erythrodermic or generalised pustular psoriasis). Critically, SCREEN for PSORIATIC ARTHRITIS \u2014 morning joint stiffness/pain, dactylitis, enthesitis, axial symptoms or nail disease (use a tool like PEST, examine joints) \u2014 and refer to rheumatology if suspected, because early treatment prevents joint damage; do not treat the skin and miss the joints. Recognise psoriasis as a SYSTEMIC condition associated with increased cardiovascular risk and metabolic syndrome (assess and address smoking, weight, alcohol, BP/lipids/glucose) and identify TRIGGERS (stress, infection \u2014 e.g. streptococcal/guttate, skin trauma/Koebner, and drugs such as beta-blockers, lithium, antimalarials, plus alcohol). Above all, take the PSYCHOSOCIAL impact seriously \u2014 psoriasis profoundly affects confidence, mood, body image, relationships and work, with stigma and real risk of depression/anxiety \u2014 so screen low mood and validate the distress rather than treating it as merely cosmetic. The hidden agenda is the visible skin plus the distress and now the joints; optimise treatment, screen arthritis and comorbidity, and address the emotional impact. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE CG153 psoriasis \u00b7 topical ladder (steroid + vitamin D) \u00b7 psoriatic arthritis (PEST) \u00b7 cardiovascular/metabolic comorbidity & psychosocial impact',
      points:[
        { h:'Recognise it', t:'Well-demarcated silvery-scaled plaques at extensor sites/scalp \u00b1 nail changes (pitting, onycholysis), chronic relapsing. Assess extent, severity, sites.' },
        { h:'Topical ladder', t:'Emollients + potent topical corticosteroid + vitamin D analogue (combined products) first-line; site-appropriate (scalp/flexures); review/rotate. "Creams don\u2019t work" often = under-treatment/incorrect application. Control, not cure.' },
        { h:'Step up / refer', t:'Extensive/severe, topical-resistant, significant impact, difficult sites \u2192 dermatology (phototherapy, methotrexate/ciclosporin/acitretin, biologics). Urgent: erythrodermic/generalised pustular psoriasis.' },
        { h:'Screen psoriatic arthritis', t:'Morning stiffness/joint pain, dactylitis, enthesitis, axial symptoms, nail disease \u2192 screen (PEST), examine, refer rheumatology. Early treatment prevents joint damage.' },
        { h:'Systemic comorbidity & triggers', t:'Increased cardiovascular risk/metabolic syndrome \u2014 address smoking, weight, alcohol, BP/lipids/glucose. Triggers: stress, infection (strep/guttate), trauma (Koebner), drugs (beta-blockers, lithium, antimalarials), alcohol.' },
        { h:'Psychosocial impact', t:'Profound effect on confidence, mood, body image, relationships, work; stigma; depression/anxiety risk. Screen low mood; validate; good control aids confidence.' },
        { h:'Never do', t:'Never treat psoriasis as merely cosmetic; never give a "stronger cream" without optimising the ladder/application; never miss psoriatic arthritis or cardiovascular comorbidity; never ignore the psychological impact.' },
        { h:'Safety-net & follow-up', t:'Optimise topicals + review; rheumatology referral if arthritis suspected; cardiovascular/metabolic risk management; trigger advice; mood support; dermatology referral if needed; urgent review for erythroderma/generalised pustular.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c224, c225, c226, c227);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'vaccine-hesitancy-mmr': {
      ceg: ['Children & young people', 'Population & planetary health'],
      stem: {
        name: 'Lauren Hill (mother of Mia, 13 months)', age: '32 years \u00b7 female',
        pmh: ['Hesitant about daughter\u2019s due MMR \u2014 "read things" online (autism link, "immune overload")', 'Thoughtful, anxious parent; not an ideological refuser', 'Wants to do the right thing'],
        meds: ['\u2014'],
        allergy: 'NKDA',
        recent: '"I\u2019ve read things about the MMR \u2014 I\u2019m not sure I want my daughter to have it. What do you think?"',
        reason: 'Video \u2014 mother hesitant about her child\u2019s MMR.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Explore, don\u2019t lecture', d:'Elicit specific concerns, sources and fears; she\u2019s a caring parent, not adversarial.' },
        { t:'2\u20135',  h:'Address myths accurately', d:'Autism: fraudulent/retracted study, no link in large studies; "overload" myth; how vaccines work.' },
        { t:'5\u20138',  h:'Real disease risks', d:'Measles (encephalitis/death), rubella in pregnancy, herd immunity/outbreaks \u2014 vaccine vs disease risk.' },
        { t:'8\u201310', h:'Respect autonomy', d:'Clear recommendation without coercion; written info, time, follow-up; door stays open (catch-up).' },
        { t:'10\u201312',h:'Build trust + document', d:'Warm, non-judgemental; preserve relationship and future chance; document discussion.' }
      ],
      wordPics: {
        fail: 'Lectures/shames the parent, dismisses her concerns, or simply demands compliance \u2014 entrenching hesitancy; or capitulates without giving accurate information.',
        pass: 'Explores concerns, corrects the myths accurately, balances with disease risks, and respects autonomy with an open door.',
        exc:  'Explores her specific concerns non-judgementally, addresses the autism and "overload" myths accurately and warmly, balances with real disease/herd-immunity risks, gives a clear recommendation while respecting autonomy (info, time, follow-up, open door), and builds trust.'
      },
      avoid: [
        { dont:'"That autism stuff is nonsense \u2014 you just need to get her vaccinated, end of."', instead:'"I understand the autism worry \u2014 it came from a study later found fraudulent and retracted; huge studies since show no link. Let\u2019s talk it through."', why:'Dismissing/lecturing a hesitant parent entrenches hesitancy and damages trust.' },
        { dont:'(Capitulating) "Okay, skip it if you\u2019re worried."', instead:'"My honest recommendation is the MMR, and here\u2019s why \u2014 but it\u2019s your choice, and I\u2019ll give you reliable info and time."', why:'Failing to give accurate information and a clear recommendation abandons the duty to inform.' },
        { dont:'(Pressuring) refusing to let her leave without consenting.', instead:'"If you\u2019re not ready today, that\u2019s okay \u2014 the offer stays open and we can catch up the jab whenever."', why:'Coercion breaches autonomy and reduces the chance of future vaccination.' }
      ]
    },

    'abnormal-cervical-screening': {
      ceg: ['Gender, reproductive & sexual health', 'Investigations & results'],
      stem: {
        name: 'Carla Nunez', age: '29 years \u00b7 female',
        pmh: ['Cervical screening: high-risk HPV positive + borderline/low-grade dyskaryosis; colposcopy recommended', 'Terrified she has cancer; doesn\u2019t understand the letter', 'Worried HPV means partner unfaithful'],
        meds: ['Combined oral contraceptive'],
        allergy: 'NKDA',
        recent: '"My smear came back abnormal \u2014 do I have cancer? Does HPV mean my partner cheated?"',
        reason: 'Video \u2014 explaining an abnormal cervical screening result.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Lead with reassurance', d:'Screening detects pre-cancer early \u2014 NOT a cancer diagnosis; settle the terror first.' },
        { t:'2\u20135',  h:'HPV without blame', d:'Common virus, often dormant for years \u2014 not infidelity/promiscuity; address the relationship worry.' },
        { t:'5\u20137',  h:'Dyskaryosis = pre-cancer', d:'Abnormal but pre-cancerous cells; low-grade often resolves; treatable \u2014 prevents cancer.' },
        { t:'7\u20139',  h:'Demystify colposcopy', d:'Magnified look \u00b1 biopsy/treatment (LLETZ), quick/awake, preventive; what to expect.' },
        { t:'9\u201312', h:'Attendance + safety-net', d:'Attend colposcopy; continue screening + HPV vaccine; report abnormal/post-coital bleeding.' }
      ],
      wordPics: {
        fail: 'Leaves her believing she has cancer, or implies HPV means infidelity; fails to explain colposcopy or stress attendance.',
        pass: 'Reassures it is screening/pre-cancer not cancer, explains HPV without blame, and demystifies colposcopy with attendance advice.',
        exc:  'Leads with accurate reassurance (screening, not cancer), explains HPV without blame and addresses the relationship worry, clarifies dyskaryosis as treatable pre-cancer, demystifies colposcopy, stresses attendance/screening/vaccination, and validates her fear.'
      },
      avoid: [
        { dont:'"You\u2019ve got abnormal cells \u2014 we need to check it\u2019s not cancer" (leaving the fear hanging).', instead:'"This is a screening result showing early, pre-cancerous changes \u2014 not cancer \u2014 caught so they can be treated before they ever could be."', why:'Leaving the cancer fear unaddressed causes needless terror and misrepresents screening.' },
        { dont:'"HPV is sexually transmitted, so someone\u2019s been unfaithful."', instead:'"HPV is extremely common and can lie dormant for years \u2014 it doesn\u2019t mean infidelity or that you did anything wrong."', why:'Implying infidelity is inaccurate and harmful to the patient and relationship.' },
        { dont:'(No attendance emphasis) ending without stressing colposcopy.', instead:'"The key thing is to attend the colposcopy \u2014 that\u2019s what keeps you safe."', why:'Non-attendance is the main risk; emphasising attendance is essential.' }
      ]
    },

    'eupd-crisis': {
      ceg: ['Mental health & addiction', 'Health disadvantage & vulnerabilities'],
      stem: {
        name: 'Robyn Easton', age: '26 years \u00b7 female',
        pmh: ['Known EUPD; in crisis \u2014 \u26a0 recent self-harm (cutting), emptiness/abandonment after relationship breakdown', 'Idealising GP ("only you understand", "last hope"); demands immediate fix', '\u26a0 "If you can\u2019t help I don\u2019t know what I\u2019ll do"'],
        meds: ['Sertraline (for comorbid depression)'],
        allergy: 'NKDA',
        recent: '"Nobody helps me, I can\u2019t cope, I\u2019ve been hurting myself \u2014 you have to fix this now."',
        reason: 'Video \u2014 distressed patient in crisis with self-harm.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Validate', d:'Genuine empathy \u2014 the pain is real; glad she came; take it seriously (not dismissal).' },
        { t:'2\u20135',  h:'Assess risk directly', d:'Self-harm intent/escalation; suicidal ideation/intent/plan/means; protective factors; safety.' },
        { t:'5\u20137',  h:'Compassionate boundary', d:'No instant fix; not sole rescuer \u2014 said kindly; avoid splitting; don\u2019t over-promise.' },
        { t:'7\u20139',  h:'Safety plan + right treatment', d:'Coping strategies, crisis line/team, means safety; DBT/MBT mainstay (meds not first-line for EUPD).' },
        { t:'9\u201312', h:'Follow-up + safety-net', d:'Crisis-team/CMHT per risk; named contacts; 999/A&E if unsafe; continuity \u2014 not rejecting/rescuing.' }
      ],
      wordPics: {
        fail: 'Dismisses ("she always does this") missing real risk, OR is drawn into rescuing/over-promising/reflexive admission; no risk assessment or safety plan.',
        pass: 'Validates and assesses risk, holds compassionate boundaries, and makes a safety plan with the crisis team.',
        exc:  'Holds genuine validation + careful risk assessment together, recognises EUPD without stigma, avoids over- and under-reaction, maintains compassionate consistent boundaries (no instant fix/sole rescuer, avoids splitting), makes a collaborative safety plan, reinforces DBT/MBT, and ensures continuity \u2014 neither rejecting nor rescuing.'
      },
      avoid: [
        { dont:'"You always come in like this \u2014 there\u2019s not much I can do."', instead:'"I can hear how much pain you\u2019re in and I\u2019m taking it seriously \u2014 let me ask some direct questions to keep you safe."', why:'Dismissal risks missing genuinely elevated risk and is anti-therapeutic.' },
        { dont:'"Don\u2019t worry, I\u2019ll personally sort all of this out for you, just rely on me."', instead:'"I can\u2019t fix everything today or be your only support \u2014 you deserve a proper team; let\u2019s build that together."', why:'Becoming the sole rescuer/over-promising feeds splitting and is unsustainable and harmful.' },
        { dont:'(No risk assessment) reassuring without asking about suicide.', instead:'"Are you having thoughts of ending your life \u2014 any plan or means? What\u2019s kept you safe so far?"', why:'Failing to assess suicide risk in a self-harm crisis is unsafe.' }
      ]
    },

    'chronic-plaque-psoriasis': {
      ceg: ['Long-term conditions & cancer', 'Mental health & addiction'],
      stem: {
        name: 'Daniel Okafor', age: '38 years \u00b7 male',
        pmh: ['Years of well-demarcated silvery-scaled plaques: elbows, knees, scalp \u00b1 nail changes; worsening', '\u26a0 Morning joint stiffness/pain (fingers, lower back) \u2014 ?psoriatic arthritis', 'Significant impact on confidence/mood; covers up'],
        meds: ['Emollient', 'OTC topical steroid (intermittent)'],
        allergy: 'NKDA',
        recent: '"Scaly patches keep coming back, creams barely help, it\u2019s wrecking my confidence \u2014 give me something stronger?"',
        reason: 'Video \u2014 recurrent scaly plaques affecting quality of life.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise + reframe', d:'Classic plaque psoriasis; more than skin \u2014 look at the whole picture, not just a stronger cream.' },
        { t:'2\u20135',  h:'Optimise the ladder', d:'Emollients + potent steroid + vitamin D (combined); scalp prep; correct application/review; refer if resistant.' },
        { t:'5\u20137',  h:'Screen psoriatic arthritis', d:'Morning stiffness/joint pain \u2192 PEST + joint exam \u2192 rheumatology; early treatment protects joints.' },
        { t:'7\u20139',  h:'Comorbidity + triggers', d:'Cardiovascular/metabolic risk (smoking/weight/alcohol/BP/lipids/glucose); triggers (drugs/stress/infection/trauma).' },
        { t:'9\u201312', h:'Psychosocial + safety-net', d:'Screen low mood; validate impact; control aids confidence; urgent if erythroderma/generalised pustular.' }
      ],
      wordPics: {
        fail: 'Just gives a stronger steroid for the skin; misses the psoriatic-arthritis screen, the cardiovascular comorbidity, and the psychological impact.',
        pass: 'Optimises topical therapy, screens for psoriatic arthritis, and addresses comorbidity and mood.',
        exc:  'Recognises chronic plaque psoriasis and treats it as more than skin \u2014 optimises the topical ladder (correct potency/application/site), screens and refers for psoriatic arthritis, addresses cardiovascular/metabolic comorbidity and triggers, and takes the psychosocial impact seriously with mood screening.'
      },
      avoid: [
        { dont:'"Here\u2019s a stronger steroid cream \u2014 that should sort the patches."', instead:'"Let\u2019s optimise the right combination and how you use it \u2014 but psoriasis is more than skin, so I also want to check your joints and general health."', why:'Treating only the skin misses psoriatic arthritis, comorbidity and the psychological impact.' },
        { dont:'(Ignoring joints) not asking about the stiffness.', instead:'"Morning stiffness in your fingers and back matters \u2014 psoriasis can come with an arthritis we should screen for and refer early."', why:'Missing psoriatic arthritis risks preventable joint damage.' },
        { dont:'(Dismissing impact) "It\u2019s just a skin condition."', instead:'"It\u2019s wrecking your confidence \u2014 that matters as much as the skin, and low mood is common with psoriasis; let\u2019s support that too."', why:'Treating psoriasis as merely cosmetic ignores its significant psychosocial burden.' }
      ]
    }

  });

})();
