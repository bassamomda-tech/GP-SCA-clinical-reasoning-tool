/* ============================================================
   Reasoning GP — Case Library batch 35: "The abnormal blood result, interpreted"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   Result-interpretation skill: NAFLD, non-specific inflammatory
   markers, isolated macrocytosis, very high cholesterol / FH.
   No NG12 link forced (raised markers prompt a structured search).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases34.js.
   ============================================================ */

(function(){

  /* ============ 133. VIDEO — Incidental raised ALT: NAFLD, not just "a liver wobble" ============ */
  const c133 = {
    id:'nafld-result', title:'"My liver test was up \u2014 but I barely drink, so it can\u2019t be my liver"', type:'video', duration:12,
    meta:{ age:49, sex:'M', setting:'Video consultation \u2014 incidental mildly raised ALT.', system:'GI / Non-alcoholic fatty liver disease' },
    brief:'Mr Gary Hollis, 49, accountant. Bloods for tiredness show a MILDLY raised ALT (~80), confirmed on repeat; bilirubin/ALP normal, INR normal. Non-drinker (a few units/week). BMI 33, central obesity, BP 142/90, HbA1c 44 (pre-diabetes range), raised triglycerides. Viral hepatitis screen negative, ferritin/autoimmune screen unremarkable. This is almost certainly NAFLD/MAFLD (metabolic fatty liver). He is fixated that "barely drinking" means it can\u2019t be his liver, and wants reassurance it\u2019s "nothing".',
    script:{
      opening:'"Thanks doctor. So my liver blood test came back a bit high, which baffled me \u2014 I barely touch alcohol, maybe a couple of beers at the weekend. So surely it can\u2019t be a liver thing? I figured it\u2019s just one of those blips, or maybe a paracetamol I took. Can you just reassure me it\u2019s nothing and we move on? I haven\u2019t got a drink problem, if that\u2019s what you\u2019re thinking."',
      facts:[
        { topic:'It\u2019s metabolic, not alcohol', text:'The cluster \u2014 mildly raised ALT (hepatocellular), central obesity (BMI 33), hypertension, pre-diabetes (HbA1c 44), raised triglycerides, with a negative viral/autoimmune/iron screen and minimal alcohol \u2014 points to NON-ALCOHOLIC FATTY LIVER DISEASE (NAFLD/MAFLD): fat in the liver driven by metabolic syndrome/insulin resistance, NOT alcohol. "I barely drink so it can\u2019t be my liver" is the misconception to correct.' },
        { topic:'Why it matters (and the fibrosis question)', text:'NAFLD is common and often benign, but a subset progress to non-alcoholic steatohepatitis (NASH), fibrosis and cirrhosis. The key is to assess FIBROSIS RISK (e.g. FIB-4 score, or an enhanced liver fibrosis/ELF test per NICE NG49) rather than just reassure or re-check the ALT \u2014 and crucially, the ALT level does NOT reflect fibrosis severity (you can have advanced fibrosis with near-normal ALT).' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 his defensiveness ("I haven\u2019t got a drink problem") masks a wish to close the conversation down and avoid facing his weight/lifestyle, plus a quiet fear that "liver" means something serious or that he\u2019ll be judged/blamed. There may be relief available: this is common, named, and largely reversible with the SAME changes that help his weight, BP, sugar and heart. The reframe from "is it the booze?" to "this is your metabolism, and it\u2019s a fixable warning" is the consultation.' },
        { topic:'It\u2019s a CVD/metabolic flag too', text:'NAFLD is a marker of metabolic syndrome and raised cardiovascular risk \u2014 so this is also a prompt to address weight, BP, glucose, lipids and overall CVD risk, not just the liver number. Managing the metabolic syndrome treats the liver and the heart together.' },
        { topic:'What he needs',        text:'Officially: reassurance it\u2019s "nothing". What he needs: the accurate explanation (NAFLD, metabolic not alcohol), a fibrosis-risk assessment (FIB-4/ELF, ultrasound) rather than just re-checking ALT, management of the whole metabolic/CVD picture (weight, BP, glucose, lipids) framed positively and without blame, and follow-up \u2014 not a brush-off.' },
      ],
      ice:{
        ideas:'He barely drinks, so a raised liver test "can\u2019t be his liver" \u2014 it must be a blip; he wants reassurance it\u2019s nothing.',
        concerns:'HIDDEN AGENDA \u2014 defensiveness ("I haven\u2019t got a drink problem") masking a wish to avoid facing his weight/lifestyle and a fear that "liver" means something serious or that he\u2019ll be judged.',
        expectations:'Reassurance it\u2019s nothing and to move on. What he actually needs: the NAFLD explanation, a fibrosis-risk assessment (not just re-checking ALT), management of the whole metabolic/CVD picture, framed positively, and follow-up.'
      },
      cues:['Raised ALT + obesity + pre-diabetes + raised triglycerides + minimal alcohol \u2014 NAFLD (metabolic), not alcohol.','"I barely drink so it can\u2019t be my liver" \u2014 the misconception; liver fat is driven by metabolic syndrome.','Defensive "I haven\u2019t got a drink problem" \u2014 avoidance of the weight/lifestyle conversation; reframe without blame.']
    },
    checkpoints:[
      { dom:'tasks', text:'Corrects the misconception and explains NAFLD: a mildly raised ALT with central obesity, pre-diabetes and raised triglycerides (and a negative viral/autoimmune/iron screen, minimal alcohol) is non-alcoholic fatty liver disease \u2014 metabolic, NOT alcohol \u2014 so "I barely drink" does not exclude a liver cause' },
      { dom:'tasks', text:'Assesses FIBROSIS RISK rather than just re-checking the ALT or reassuring: calculates a non-invasive fibrosis score (e.g. FIB-4) and/or arranges an ELF test per NICE NG49 and a liver ultrasound \u2014 recognising that the ALT level does NOT reflect fibrosis severity' },
      { dom:'tasks', text:'Manages the WHOLE metabolic/CVD picture: weight/lifestyle (the key treatment \u2014 even modest weight loss reduces liver fat), blood pressure (142/90), the pre-diabetes (HbA1c 44), lipids/triglycerides and overall cardiovascular risk \u2014 recognising NAFLD as a metabolic-syndrome/CVD-risk marker' },
      { dom:'tasks', text:'Excludes the other causes appropriately (already largely done: viral hepatitis, autoimmune, haemochromatosis/iron, drugs) and confirms alcohol intake honestly, without making it the focus' },
      { dom:'tasks', text:'Frames management POSITIVELY and hopefully: NAFLD is common and largely reversible with the same changes that improve weight, BP, sugar and heart risk \u2014 a fixable warning, not a verdict \u2014 and refers to hepatology if significant fibrosis is found' },
      { dom:'rto',   text:'Hears the defensiveness and the avoidance, reframes without blame or a "drink problem" implication, and engages him in the metabolic conversation rather than colluding with "it\u2019s nothing"' },
      { dom:'rto',   text:'Addresses the fear that "liver" means something sinister with honest, proportionate reassurance balanced against the need to assess fibrosis' },
      { dom:'gs',    text:'Safety-nets and follows up: the fibrosis assessment (FIB-4/ELF/ultrasound) and re-check plan, weight/BP/glucose/lipid management and review, hepatology referral if fibrosis, and a follow-up that treats the metabolic picture \u2014 not a one-off reassurance' },
    ],
    worked:[
      { lbl:'Correct the misconception', txt:'"I can see why a raised liver test is baffling when you barely drink \u2014 but here\u2019s the key thing: alcohol is only ONE cause. By far the commonest reason for exactly your pattern is fat in the liver driven by your metabolism \u2014 we call it non-alcoholic fatty liver. So \u2018I barely drink\u2019 doesn\u2019t rule out a liver cause; it actually points us to this one. And I\u2019m genuinely not sitting here thinking you\u2019ve got a drink problem."' },
      { lbl:'Join the dots',        txt:'"Look at the bigger picture from your bloods: your weight\u2019s carrying some around the middle, your blood pressure\u2019s up a bit, your sugar\u2019s in the pre-diabetes range, your triglycerides are high. Those all travel together \u2014 it\u2019s called metabolic syndrome \u2014 and the liver is just showing it on a blood test. The liver is the messenger."' },
      { lbl:'Assess properly, not just recheck', txt:'"Now, rather than just re-checking the number and hoping, I want to do this properly: a simple calculation and a specific blood test to estimate whether there\u2019s any scarring in the liver, and an ultrasound scan. Importantly, the liver NUMBER doesn\u2019t tell us how much scarring there is \u2014 so we check that directly rather than guess."' },
      { lbl:'The hopeful reframe',  txt:'"Here\u2019s the good news, and it\u2019s real: this is common, it\u2019s a warning rather than a disaster, and it\u2019s largely reversible \u2014 with the SAME changes. Losing even a bit of weight melts fat out of the liver, brings your sugar and blood pressure down, and cuts your heart risk, all at once. You\u2019d be treating five things with one plan."' },
      { lbl:'No blame, real plan',  txt:'"This isn\u2019t about blame \u2014 it\u2019s a really useful early heads-up. Let\u2019s make a realistic plan: some weight loss, sort the blood pressure and keep an eye on the sugar, look at the cholesterol. I\u2019ll help, not lecture. Done together, your liver test usually improves and so does everything else."' },
      { lbl:'Safety-net + follow-up', txt:'"So: I\u2019ll do the scarring assessment and the scan, sort the metabolic side, and we\u2019ll recheck. If the scarring test flagged anything, I\u2019d involve the liver specialists \u2014 but most people at your stage do really well. Let\u2019s book a proper follow-up. You came in wanting me to say it\u2019s nothing; what it actually is, is a fixable warning that\u2019s worth acting on."' },
    ],
    learning:'A mildly raised ALT (hepatocellular pattern) with central obesity, pre-diabetes and raised triglycerides, minimal alcohol and a negative viral/autoimmune/iron screen is non-alcoholic fatty liver disease (NAFLD/MAFLD) \u2014 metabolic, not alcohol \u2014 so "I barely drink so it can\u2019t be my liver" is the misconception to correct. The examinable clinical point is to assess FIBROSIS RISK (FIB-4 score, ELF test per NICE NG49, ultrasound) rather than merely re-checking the ALT or reassuring \u2014 because the ALT level does NOT reflect fibrosis severity (advanced fibrosis can occur with near-normal ALT). NAFLD is a metabolic-syndrome and cardiovascular-risk marker, so manage the WHOLE picture (weight/lifestyle as the key, largely-reversible treatment, plus BP, glucose, lipids, CVD risk), refer to hepatology if significant fibrosis. The hidden agenda is defensiveness masking avoidance of the weight/lifestyle conversation and a fear of being judged or that "liver" means something sinister; reframe without blame ("a fixable warning, treating five things with one plan"), give honest proportionate reassurance balanced with proper fibrosis assessment, and follow up.',
    knowledge:{
      guideline:'NICE NG49 NAFLD · FIB-4 / ELF fibrosis assessment · NICE CG181 CVD risk · metabolic syndrome',
      points:[
        { h:'Recognise NAFLD', t:'NAFLD/MAFLD is the commonest cause of abnormal LFTs \u2014 a mildly raised ALT (hepatocellular pattern), often incidental, in someone with features of metabolic syndrome (central obesity, type 2 diabetes/pre-diabetes, hypertension, dyslipidaemia) and minimal alcohol. Confirm by excluding other causes (viral hepatitis B/C, autoimmune, haemochromatosis, drugs, alcohol) \u2014 a "non-invasive liver screen".' },
        { h:'ALT does not equal fibrosis', t:'The degree of ALT elevation does NOT reflect the degree of liver fibrosis \u2014 significant fibrosis/cirrhosis can occur with normal or near-normal ALT. Do not reassure (or simply re-check the ALT) without assessing fibrosis risk.' },
        { h:'Assess fibrosis risk', t:'Use non-invasive fibrosis assessment: FIB-4 score (age, ALT, AST, platelets) as a first step, and the ELF (Enhanced Liver Fibrosis) test per NICE NG49 to identify advanced fibrosis; liver ultrasound confirms steatosis. Refer to hepatology if advanced fibrosis is indicated (e.g. ELF \u22659.5 / high FIB-4) for further assessment (e.g. transient elastography).' },
        { h:'Manage the metabolic syndrome', t:'Lifestyle/weight loss is the cornerstone \u2014 even ~7\u201310% weight loss reduces hepatic fat and can improve/resolve NASH. Optimise diabetes/pre-diabetes, blood pressure, and lipids; address overall cardiovascular risk (the leading cause of death in NAFLD). Managing the metabolic syndrome treats the liver and the heart together.' },
        { h:'Largely reversible \u2014 frame positively', t:'NAFLD is common and, at the fatty-liver stage, largely reversible with metabolic improvement. Frame it as a fixable early warning that one plan addresses multiple risks \u2014 motivating rather than blaming.' },
        { h:'Correct the alcohol misconception', t:'"I barely drink so it can\u2019t be my liver" is a common, mistaken belief. Explain that metabolic fatty liver is distinct from alcohol-related liver disease; confirm alcohol intake honestly without making it the focus or implying a drink problem.' },
        { h:'Never do', t:'Never reassure a raised ALT away as "a blip" or just re-check it without a fibrosis assessment; never assume normal/near-normal ALT excludes fibrosis; never treat it as a liver-only issue and miss the metabolic/CVD risk; never frame it with blame; never miss the advanced-fibrosis referral threshold.' },
        { h:'Safety-net & follow-up', t:'Fibrosis assessment (FIB-4/ELF/ultrasound) and re-check plan; weight/BP/glucose/lipid management and review; hepatology referral if advanced fibrosis; positive, blame-free follow-up that treats the metabolic picture.' }
      ]
    }
  };

  /* ============ 134. VIDEO — Raised inflammatory markers: the non-specific result + the can't-miss ============ */
  const c134 = {
    id:'raised-inflammatory-markers', title:'"My inflammation markers are up \u2014 what\u2019s causing it?"', type:'video', duration:12,
    meta:{ age:72, sex:'F', setting:'Video consultation \u2014 incidentally raised ESR/CRP.', system:'Investigations / Non-specific inflammatory markers' },
    brief:'Mrs Margaret Doyle, 72. Bloods for fatigue show a markedly raised ESR (88) and raised CRP, mild normocytic anaemia. She is worried something is "eating away" at her. On careful, directed history (the key): NEW bilateral shoulder/hip girdle pain and morning stiffness for weeks (?polymyalgia rheumatica), AND \u2014 crucially, if asked \u2014 a recent NEW temporal headache, scalp tenderness on combing her hair, and jaw ache when chewing. This raises GIANT CELL ARTERITIS \u2014 a sight-threatening emergency. She hasn\u2019t connected these. No visual loss yet.',
    script:{
      opening:'"Hello doctor. My blood test showed my inflammation levels are really high, and I\u2019ve read that can mean something serious, like a hidden cancer. I\u2019ve been so worried something\u2019s eating away at me. I AM exhausted, and achy, but I put that down to age. Can you tell me what\u2019s causing the inflammation? I just want to know it\u2019s not cancer."',
      facts:[
        { topic:'Markers are non-specific, but directed', text:'Raised ESR/CRP are NON-SPECIFIC \u2014 they indicate inflammation but not its cause (infection, inflammation/autoimmune, malignancy, etc.). A markedly raised ESR in an older person needs a STRUCTURED, DIRECTED history and examination rather than either panic about cancer or a random scatter of tests. The clinical context, not the number alone, drives the work-up.' },
        { topic:'The PMR picture',     text:'New bilateral shoulder/pelvic-girdle pain with morning stiffness in someone over 50 with raised inflammatory markers fits POLYMYALGIA RHEUMATICA \u2014 common, treatable, and itself a clue.' },
        { topic:'The GCA emergency \u2014 KEY', text:'CRITICAL \u2014 directed questioning reveals NEW temporal headache, scalp tenderness (combing hair), and jaw claudication (ache on chewing). With raised inflammatory markers in someone over 50 (and PMR overlap), this is GIANT CELL ARTERITIS until proven otherwise \u2014 a SIGHT-THREATENING emergency. It requires URGENT high-dose corticosteroids (do NOT wait for biopsy/results) and same-day specialist (rheumatology/ophthalmology) referral, because untreated GCA can cause irreversible blindness.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 her stated fear is hidden CANCER ("something eating away at me"), and she has NOT volunteered or connected the headache/scalp/jaw symptoms (she normalised the aches as "age"). The skill is to address the cancer fear honestly AND \u2014 through directed history \u2014 uncover the GCA red flags she didn\u2019t think to mention, then act urgently. Reassurance about cancer must not eclipse catching the sight-threatening emergency.' },
        { topic:'What she needs',       text:'Officially: to know what\u2019s causing the inflammation and that it\u2019s not cancer. What she needs: a directed history/exam that uncovers the GCA red flags (and the PMR picture), URGENT treatment of suspected GCA (high-dose steroids now, do not wait) with same-day specialist referral, an appropriate structured work-up for the raised markers, and her cancer fear addressed proportionately.' },
      ],
      ice:{
        ideas:'High inflammation markers mean a hidden cancer is "eating away" at her; she wants to know it\u2019s not cancer.',
        concerns:'HIDDEN AGENDA \u2014 fixated on hidden cancer; has NOT connected or mentioned the new temporal headache, scalp tenderness and jaw ache (normalised her aches as "age").',
        expectations:'To be told the cause and that it\u2019s not cancer. What she actually needs: a directed history uncovering the GCA red flags, URGENT treatment of suspected giant cell arteritis (steroids now), same-day specialist referral, a structured work-up, and her cancer fear addressed.'
      },
      cues:['Markedly raised ESR/CRP \u2014 non-specific; needs a DIRECTED history, not panic or a random test scatter.','New shoulder/hip girdle pain + morning stiffness over 50 \u2014 polymyalgia rheumatica; a clue worth following.','NEW temporal headache + scalp tenderness + jaw claudication \u2014 giant cell arteritis (sight-threatening); ask for these specifically and act NOW.']
    },
    checkpoints:[
      { dom:'tasks', text:'Understands raised ESR/CRP are NON-SPECIFIC and works them up with a STRUCTURED, DIRECTED history and examination (guided by the clinical context) rather than panicking about cancer or ordering a random scatter of tests' },
      { dom:'tasks', text:'Actively elicits the GIANT CELL ARTERITIS red flags by DIRECTED questioning \u2014 new temporal headache, scalp tenderness, jaw claudication, visual symptoms \u2014 which the patient did not volunteer, and recognises GCA as a sight-threatening emergency in an over-50 with raised markers (\u00b1 PMR)' },
      { dom:'tasks', text:'Acts URGENTLY on suspected GCA: starts (or arranges immediate) HIGH-DOSE corticosteroids WITHOUT waiting for temporal-artery biopsy/results, and refers SAME-DAY to rheumatology/ophthalmology \u2014 because delay risks irreversible blindness' },
      { dom:'tasks', text:'Recognises the POLYMYALGIA RHEUMATICA picture (bilateral girdle pain, morning stiffness, raised markers, age >50) and its overlap with GCA, managing/ referring appropriately' },
      { dom:'tasks', text:'Plans a proportionate structured work-up for the raised markers (history/exam-directed: e.g. examination, urinalysis, further bloods/imaging as indicated, myeloma/malignancy consideration if the picture warrants) \u2014 without letting it delay GCA treatment' },
      { dom:'rto',   text:'Addresses the patient\u2019s CANCER fear honestly and proportionately, while NOT letting reassurance eclipse the directed search that catches the sight-threatening emergency' },
      { dom:'rto',   text:'Explains the urgency of the GCA concern clearly and calmly so she accepts immediate treatment/referral, and validates that she was right to be worried by the result' },
      { dom:'gs',    text:'Safety-nets emphatically: any visual symptoms (blurring, double vision, transient or actual visual loss) \u2192 emergency same-day ophthalmology/A&E; starts steroids and arranges same-day specialist review; explains steroid safety; and follows up the broader work-up \u2014 sight preserved, cause pursued' },
    ],
    worked:[
      { lbl:'Name the marker honestly', txt:'"Let me explain what those inflammation markers mean: they tell us there\u2019s inflammation SOMEWHERE, but not what\u2019s causing it \u2014 they\u2019re a smoke alarm, not the fire. So rather than jump to the scariest cause or fire off random tests, I want to ask you some specific questions to find the actual source. And yes, we\u2019ll make sure it\u2019s not something sinister."' },
      { lbl:'Directed history',     txt:'"You mentioned aches \u2014 tell me, is it both shoulders and hips, worse and stiff in the mornings? \u2026 That fits a treatable condition called polymyalgia. Now some specific questions, and these really matter: any new headache, especially at your temples? Is your scalp tender when you brush your hair? Any ache in your jaw when you chew? \u2026 You have. That\u2019s very important, and I\u2019m really glad I asked."' },
      { lbl:'Name the emergency',   txt:'"Putting that together \u2014 the headache, the tender scalp, the jaw ache, with your raised markers \u2014 I\u2019m concerned about a condition called giant cell arteritis: inflammation of the arteries around the temple. I have to be straight with you about why it matters: untreated, it can affect the blood supply to the eye and threaten your sight. So this is something we treat URGENTLY, today, not wait and see."' },
      { lbl:'Treat now, don\u2019t wait', txt:'"Because of that sight risk, I\u2019m going to start you on a high dose of steroid tablets straight away \u2014 we do NOT wait for further tests, because protecting your vision can\u2019t wait \u2014 and refer you to the specialists to be seen today. The steroids usually settle it quickly and protect your eyes."' },
      { lbl:'Address the cancer fear', txt:'"On your worry about cancer \u2014 I haven\u2019t forgotten it, and we WILL make sure there\u2019s nothing else going on with the right checks. But the most pressing thing your symptoms point to is this artery inflammation, which is treatable, and your instinct that the result mattered was absolutely right."' },
      { lbl:'Safety-net (vision)',  txt:'"This is crucial: if you get ANY change in your vision \u2014 blurring, double vision, a curtain coming down, loss of sight in part of your eye \u2014 that is an emergency, go straight to A&E or eye casualty, do not wait. I\u2019m starting the steroids now and arranging the urgent specialist review, and I\u2019ll follow up the rest of the work-up. We protect your sight first, and chase everything else properly."' },
    ],
    learning:'Raised ESR/CRP are NON-SPECIFIC \u2014 a "smoke alarm, not the fire" \u2014 indicating inflammation but not its cause, so a markedly raised ESR in an older person needs a STRUCTURED, DIRECTED history and examination guided by the clinical context, not panic about cancer or a random scatter of tests. The examinable core is using directed questioning to uncover what the patient did not volunteer: here, new bilateral girdle pain with morning stiffness fits polymyalgia rheumatica, but the new temporal headache, scalp tenderness (combing hair) and jaw claudication, with raised markers in an over-50, signal GIANT CELL ARTERITIS \u2014 a sight-threatening emergency that demands URGENT high-dose corticosteroids WITHOUT waiting for biopsy/results and same-day rheumatology/ophthalmology referral, because untreated GCA causes irreversible blindness. The hidden agenda is the patient\u2019s cancer fear plus her failure to connect/mention the GCA symptoms; address the cancer fear honestly and proportionately but do not let reassurance eclipse the directed search, act urgently on the GCA, plan a proportionate work-up for the markers, and safety-net visual symptoms to emergency ophthalmology.',
    knowledge:{
      guideline:'BSR giant cell arteritis · NICE CKS GCA / PMR / raised ESR-CRP · sight-threatening emergency pathways',
      points:[
        { h:'Inflammatory markers are non-specific', t:'ESR and CRP indicate inflammation but not its cause (infection, autoimmune/inflammatory disease, malignancy, tissue injury). A raised marker is interpreted in clinical context via a directed history and examination \u2014 not as a stand-alone "cancer test" and not as a trigger for an undirected battery of investigations.' },
        { h:'Giant cell arteritis \u2014 the can\u2019t-miss', t:'In a patient \u226550 with raised inflammatory markers, ASK directly about new headache (often temporal), scalp tenderness, jaw claudication, and visual symptoms; examine the temporal arteries. GCA is a sight-threatening emergency \u2014 untreated it can cause sudden, irreversible visual loss (anterior ischaemic optic neuropathy).' },
        { h:'Treat GCA immediately', t:'If GCA is suspected, start HIGH-DOSE glucocorticoids (e.g. prednisolone; higher/IV if visual symptoms) IMMEDIATELY \u2014 do NOT wait for temporal-artery biopsy, ultrasound, or specialist review \u2014 and refer urgently/same-day to rheumatology (and ophthalmology if any visual symptoms). Biopsy/ultrasound can follow within days; treatment must not be delayed.' },
        { h:'Polymyalgia rheumatica overlap', t:'PMR (bilateral shoulder/pelvic-girdle pain and morning stiffness, age >50, raised ESR/CRP, steroid-responsive) commonly coexists with GCA. New girdle pain with raised markers is a clue; always screen for GCA features in PMR, and vice versa.' },
        { h:'Structured work-up for raised markers', t:'Guided by history/examination: consider infection screen, urinalysis, further bloods (FBC/film, U&E, LFTs, calcium, immunoglobulins/electrophoresis for myeloma, TFTs), and imaging where indicated. Pursue malignancy/serious causes proportionately \u2014 but never let this delay GCA treatment.' },
        { h:'Address the cancer fear proportionately', t:'Patients often fear a raised marker means hidden cancer. Acknowledge and address this honestly with an appropriate work-up, while ensuring reassurance does not eclipse the directed search for treatable, urgent causes like GCA.' },
        { h:'Never do', t:'Never treat a raised ESR/CRP as a stand-alone cancer test or order an undirected scatter of tests; never miss the GCA red flags by failing to ask directly; never wait for biopsy/results before treating suspected GCA; never let cancer-fear reassurance eclipse the sight-threatening emergency; never miss visual symptoms.' },
        { h:'Safety-net & follow-up', t:'Suspected GCA \u2192 high-dose steroids now + same-day specialist referral; ANY visual symptom \u2192 emergency ophthalmology/A&E; steroid-safety advice; structured work-up for the markers followed up; review.' }
      ]
    }
  };

  /* ============ 135. TELEPHONE — Isolated macrocytosis: the result that opens a hidden door ============ */
  const c135 = {
    id:'macrocytosis-result', title:'"My blood test said my cells are big \u2014 is that bad?"', type:'telephone', duration:12,
    meta:{ age:46, sex:'F', setting:'Telephone \u2014 incidental raised MCV.', system:'Haematology / Isolated macrocytosis' },
    brief:'Mrs Lisa Brennan, 46. Bloods done for tiredness show a raised MCV (105) with normal Hb (i.e. macrocytosis without anaemia), normal white cells/platelets. She rings for the result, anxious it means "something with my blood/leukaemia". Common causes to work through: alcohol, B12/folate deficiency, hypothyroidism, drugs, liver disease, (and marrow causes). On gentle, non-judgemental exploration, her alcohol intake has crept up substantially since a recent bereavement/relationship stress \u2014 the likely cause, and the real consultation.',
    script:{
      opening:'"Hi, I\u2019m ringing about my blood result \u2014 the receptionist said my red cells are \u2018large\u2019 or something? I immediately panicked and googled it and now I\u2019m terrified it\u2019s leukaemia or something with my blood. I feel mostly okay, just tired. What does it mean that my cells are big? Should I be worried?"',
      facts:[
        { topic:'Macrocytosis \u2014 a finding, not a diagnosis', text:'Raised MCV (macrocytosis), especially WITHOUT anaemia and with normal white cells/platelets, is usually NOT sinister \u2014 leukaemia is not the typical cause. It is a finding to WORK UP through its common causes: ALCOHOL (very common), B12/FOLATE deficiency, HYPOTHYROIDISM, certain DRUGS (e.g. methotrexate, anticonvulsants), LIVER DISEASE, reticulocytosis, and (less commonly) primary marrow disorders \u2014 a structured panel rather than a leap to cancer.' },
        { topic:'The work-up',         text:'Appropriate tests: B12 and folate, TFTs, LFTs (incl. GGT), reticulocytes, blood film, and an honest alcohol history; review medications. Most isolated macrocytosis has a benign, identifiable cause. A blood film and FBC trend help; marrow investigation is reserved for unexplained/progressive cases or other cytopenias.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 the likely cause is rising ALCOHOL since a recent bereavement/relationship stress, which she is ashamed of and reluctant to disclose; she has framed the call around a leukaemia fear partly to avoid the alcohol conversation she half-expects. The result is a door into a sensitive, important issue \u2014 her drinking and the grief/distress behind it. The skill is to reassure about leukaemia, take a non-judgemental alcohol/lifestyle history that lets her disclose, and address the underlying distress \u2014 not just label "macrocytosis, recheck".' },
        { topic:'Why it matters',      text:'Catching rising alcohol early (the macrocytosis is a useful biological flag) and addressing the bereavement/low mood is genuinely valuable \u2014 the abnormal result is an opportunity, not just a number to recheck. Done well, it opens help she might not otherwise have sought.' },
        { topic:'What she needs',       text:'Officially: to know what "big cells" means and that it\u2019s not leukaemia. What she needs: honest reassurance that isolated macrocytosis is usually not sinister, a structured cause work-up (B12/folate, TFTs, LFTs, film), and \u2014 the real consultation \u2014 a gentle, non-judgemental space to disclose the rising alcohol and the grief/distress behind it, with support offered.' },
      ],
      ice:{
        ideas:'"Large cells" means leukaemia or something serious with her blood.',
        concerns:'HIDDEN AGENDA \u2014 rising alcohol since a recent bereavement/relationship stress that she\u2019s ashamed of; she\u2019s framed the call around a leukaemia fear partly to avoid the alcohol conversation she half-expects.',
        expectations:'To be told what "big cells" means and that it\u2019s not leukaemia. What she actually needs: reassurance it\u2019s usually not sinister, a structured cause work-up, and a non-judgemental space to disclose the rising alcohol and the grief behind it.'
      },
      cues:['Raised MCV without anaemia, normal WCC/platelets \u2014 usually not leukaemia; work up the common causes.','Common causes: alcohol, B12/folate, thyroid, drugs, liver \u2014 take a non-judgemental alcohol history.','Recent bereavement/stress + the leukaemia framing \u2014 the result is a door to a hidden alcohol/grief issue.']
    },
    checkpoints:[
      { dom:'tasks', text:'Reassures accurately that isolated MACROCYTOSIS (raised MCV without anaemia, normal WCC/platelets) is usually NOT sinister and leukaemia is not the typical cause \u2014 it is a finding to work up, not a diagnosis \u2014 without dismissing it' },
      { dom:'tasks', text:'Plans a STRUCTURED cause work-up: B12 and folate, TFTs, LFTs (including GGT), reticulocytes/blood film, and a medication review \u2014 covering the common causes (alcohol, B12/folate, hypothyroidism, drugs, liver disease)' },
      { dom:'tasks', text:'Takes a NON-JUDGEMENTAL ALCOHOL history that creates space for honest disclosure (recognising alcohol as a very common cause of macrocytosis), and so uncovers the rising intake' },
      { dom:'tasks', text:'Recognises and addresses the underlying DISTRESS: the recent bereavement/relationship stress driving the drinking \u2014 screening mood and offering support \u2014 treating the result as a door to a sensitive, important issue rather than just a number' },
      { dom:'tasks', text:'Knows when to escalate/refer: unexplained macrocytosis, associated cytopenias, abnormal film, or progression warrant haematology/marrow consideration \u2014 distinguishing this from her likely benign, identifiable cause' },
      { dom:'rto',   text:'Reassures about the leukaemia fear genuinely, then gently opens the alcohol/lifestyle door without judgement, so she feels safe to disclose rather than shamed into hiding' },
      { dom:'rto',   text:'Responds with compassion to the bereavement/distress, framing the result as an opportunity for help, and engages her in addressing both the drinking and the grief' },
      { dom:'gs',    text:'Safety-nets and follows up: the cause work-up (B12/folate/TFTs/LFTs/film), alcohol-reduction support and mood support/bereavement help, recheck of the FBC/MCV, escalation criteria if unexplained, and a follow-up that treats the person, not just the result' },
    ],
    worked:[
      { lbl:'Reassure the big fear', txt:'"Let me take the scariest thought off the table first: large red cells, especially with the rest of your blood count completely normal and no anaemia, is almost never leukaemia. So please breathe. It\u2019s a finding we look into, not a diagnosis \u2014 and the common causes are all pretty ordinary and fixable."' },
      { lbl:'Name the common causes', txt:'"The usual reasons red cells run a bit large are things like low vitamin B12 or folate, an underactive thyroid, certain medications, the liver, or alcohol. So rather than worry, we just check through those with a few blood tests and sort whatever we find."' },
      { lbl:'Open the door gently', txt:'"Can I ask a few honest questions, no judgement at all \u2014 it just helps me find the cause? How are things with alcohol at the moment \u2014 has it crept up recently? \u2026 Thank you for being straight with me. That\u2019s really useful, and it\u2019s likely the explanation for the result \u2014 which is good, because it\u2019s very fixable."' },
      { lbl:'Reach the real issue', txt:'"It sounds like the drinking has gone up since you lost\u2026 \u2026 I\u2019m so sorry. That makes complete sense \u2014 a lot of people lean on a drink to get through grief, and it\u2019s nothing to be ashamed of. But your body\u2019s quietly showing the effect, which is actually a helpful early nudge. How have you been in yourself, with the grief and everything?"' },
      { lbl:'Make it an opportunity', txt:'"So this blood test, weirdly, might be a useful thing \u2014 it\u2019s flagged the drinking before it\u2019s caused harm, and it lets me help you with both the alcohol and how you\u2019re coping. We can cut the drinking back with support, and get you some help with the grief if you\u2019d like. The blood usually settles once the alcohol eases."' },
      { lbl:'Plan + safety-net',    txt:'"I\u2019ll do the full set of tests \u2014 B12, folate, thyroid, liver \u2014 to be thorough, and we\u2019ll recheck the count. If anything were unexplained or other parts of the blood changed, I\u2019d involve a specialist \u2014 but I don\u2019t expect that. Let\u2019s book a proper follow-up for the drinking and the grief. You rang terrified of leukaemia; what this really is, is a chance to look after you."' },
    ],
    learning:'Isolated macrocytosis (raised MCV without anaemia, normal white cells/platelets) is usually NOT sinister \u2014 leukaemia is not the typical cause \u2014 and is a finding to work up through its common causes: ALCOHOL (very common), B12/folate deficiency, hypothyroidism, drugs, and liver disease, with a structured panel (B12, folate, TFTs, LFTs/GGT, reticulocytes/film, medication review) and haematology/marrow referral reserved for unexplained, progressive or multi-lineage abnormalities. The examinable hidden agenda is that the likely cause \u2014 rising alcohol since a recent bereavement/relationship stress \u2014 is something the patient is ashamed of and has framed the call around a leukaemia fear partly to avoid; the result is a DOOR into a sensitive, important issue. Reassure genuinely about leukaemia, take a non-judgemental alcohol/lifestyle history that enables disclosure, and address the underlying distress (screen mood, offer bereavement and alcohol-reduction support) \u2014 treating the abnormal result as an opportunity to help, not just a number to recheck.',
    knowledge:{
      guideline:'NICE CKS macrocytosis / anaemia · CKS alcohol-use disorders · bereavement & low mood',
      points:[
        { h:'Macrocytosis is a finding, not a diagnosis', t:'A raised MCV (macrocytosis), particularly without anaemia and with normal WCC/platelets, is usually benign and not due to leukaemia. Work up the cause with a structured approach rather than leaping to malignancy or simply rechecking.' },
        { h:'Common causes', t:'Alcohol (very common), B12 and folate deficiency, hypothyroidism, drugs (e.g. methotrexate, hydroxycarbamide, anticonvulsants, some antiretrovirals), liver disease, reticulocytosis (haemolysis/bleeding), pregnancy, and \u2014 less commonly \u2014 myelodysplasia/primary marrow disorders. A megaloblastic picture (B12/folate) vs non-megaloblastic (alcohol, liver, thyroid) is helpful.' },
        { h:'Structured work-up', t:'Check B12, folate, TFTs, LFTs (including GGT), reticulocytes and a blood film; review the FBC trend and medications; take an honest alcohol history. Most isolated macrocytosis has an identifiable, benign cause.' },
        { h:'When to refer haematology', t:'Refer/investigate further (including marrow) for: unexplained macrocytosis after the above work-up, associated cytopenias (low Hb/WCC/platelets), an abnormal blood film (e.g. dysplastic features), or progressive change \u2014 where myelodysplasia or another primary marrow disorder is a concern.' },
        { h:'Alcohol \u2014 the door to open', t:'Alcohol is a leading cause of macrocytosis and is frequently underdisclosed. Take a non-judgemental alcohol history; the result is a valuable, early biological flag. Explore the drivers (bereavement, stress, low mood) and offer support \u2014 brief intervention, alcohol services, and mood/bereavement help as appropriate.' },
        { h:'Treat the result as an opportunity', t:'An abnormal incidental result can open a conversation about a hidden, treatable problem the patient might not otherwise raise. Reassure about the feared diagnosis, then use the opening to address the real issue compassionately.' },
        { h:'Never do', t:'Never alarm the patient toward leukaemia for isolated macrocytosis; never just label "macrocytosis, recheck" without working up the cause; never skip a non-judgemental alcohol history; never miss the underlying distress/mood; never overlook escalation criteria (cytopenias, abnormal film, unexplained/progressive).' },
        { h:'Safety-net & follow-up', t:'Cause work-up (B12/folate/TFTs/LFTs/film) and FBC recheck; alcohol-reduction and mood/bereavement support; haematology referral if unexplained/cytopenias/abnormal film; a follow-up that treats the person behind the result.' }
      ]
    }
  };

  /* ============ 136. VIDEO — Cholesterol 9.2: spotting familial hypercholesterolaemia ============ */
  const c136 = {
    id:'familial-hypercholesterolaemia', title:'"My cholesterol\u2019s really high \u2014 but I\u2019m fit and slim, it must be a mistake"', type:'video', duration:12,
    meta:{ age:38, sex:'M', setting:'Video consultation \u2014 a very high cholesterol result.', system:'Cardiovascular / Familial hypercholesterolaemia' },
    brief:'Mr Daniel Okonkwo, 38, runs marathons, slim (BMI 23), eats well, non-smoker. A routine cholesterol is strikingly high: total 9.2, LDL 6.8 (confirmed on repeat, fasting). He is baffled and wants to "fix it with diet" / thinks it\u2019s an error. KEY clues if asked: his FATHER had a heart attack at 44 and a paternal uncle died suddenly young; he may have tendon xanthomata (thickened Achilles)/corneal arcus. This is likely FAMILIAL HYPERCHOLESTEROLAEMIA \u2014 genetic, needs statin + family cascade testing, NOT just diet.',
    script:{
      opening:'"Doctor, I think there must be a mistake with my cholesterol result. It\u2019s really high apparently, but I run marathons, I\u2019m slim, I eat really healthily, I don\u2019t smoke \u2014 it makes no sense. Can we just re-do it? Or I\u2019ll tighten up my diet even more and we recheck in a few months. There\u2019s no way someone as fit as me needs cholesterol tablets, surely?"',
      facts:[
        { topic:'Why diet won\u2019t fix it', text:'A markedly elevated LDL (e.g. total >7.5 / LDL >4.9), confirmed and fasting, in a young, fit, slim, healthy-eating non-smoker, points to FAMILIAL HYPERCHOLESTEROLAEMIA (FH) \u2014 a GENETIC condition where the body handles LDL poorly, NOT a lifestyle problem. "I\u2019m fit and slim so it must be wrong / I\u2019ll fix it with diet" is the misconception: diet and exercise help only modestly; FH needs a STATIN (often high-intensity) and specialist input \u2014 lifestyle alone is insufficient.' },
        { topic:'The family history & signs', text:'KEY \u2014 ask about premature cardiovascular disease in the family: his FATHER\u2019S heart attack at 44 and a young sudden death strongly support FH (Simon Broome/Dutch criteria use LDL level + family history + clinical signs). Examine for tendon xanthomata (thickened Achilles/knuckle tendons) and corneal arcus under 45. These clinch the suspicion.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 his disbelief ("it must be a mistake") is partly identity-threat: his fitness is core to who he is, and a "heart risk" diagnosis at 38 feels impossible and frightening; he\u2019d rather it be an error or fixable by trying harder. There may also be a buried fear linked to his father\u2019s early heart attack (will he die young too?). The skill is to validate his healthy lifestyle, explain this is GENETIC not a failure, surface and use the family history, and motivate treatment by reframing it as protecting him from his father\u2019s fate.' },
        { topic:'The cascade',         text:'FH is autosomal dominant \u2014 first-degree relatives (his children, siblings, parents) should be offered CASCADE testing. Identifying his FH protects the whole family. This is a key part of the consultation, not an afterthought.' },
        { topic:'What he needs',        text:'Officially: a re-test / to fix it with diet. What he needs: recognition that this is likely FH (genetic, not lifestyle), the family history elicited and examination for FH signs, a STATIN started (high-intensity) with specialist/lipid-clinic referral and genetic testing, family CASCADE testing arranged, and his identity-threat/father-fear addressed \u2014 not "try harder with diet and recheck".' },
      ],
      ice:{
        ideas:'It must be a lab error, or fixable by tightening his already-healthy diet \u2014 "someone as fit as me" can\u2019t need cholesterol tablets.',
        concerns:'HIDDEN AGENDA \u2014 identity-threat (fitness is core to who he is, a heart-risk label at 38 feels impossible/frightening) and a buried fear from his father\u2019s early heart attack (will he die young too?); he\u2019d rather it be an error.',
        expectations:'A re-test or to fix it with diet. What he actually needs: recognition this is likely FH (genetic, not lifestyle), a statin + lipid-clinic referral + genetic testing, family cascade testing, and his identity-threat/father-fear addressed.'
      },
      cues:['Very high LDL, confirmed, in a fit/slim/healthy-eating young non-smoker \u2014 familial hypercholesterolaemia, not lifestyle.','Father\u2019s MI at 44 + young sudden death \u2014 premature CVD family history; ask for it and examine for xanthomata/arcus.','"It must be a mistake / I\u2019ll fix it with diet" \u2014 identity-threat + father-fear; reframe as genetic and as protection.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises that a markedly elevated, confirmed LDL/total cholesterol in a young, fit, slim, healthy-eating non-smoker suggests FAMILIAL HYPERCHOLESTEROLAEMIA (genetic) \u2014 NOT a lifestyle problem or a lab error \u2014 and that "fixing it with diet" alone is insufficient' },
      { dom:'tasks', text:'Elicits the PREMATURE CARDIOVASCULAR family history (father\u2019s MI at 44, young sudden death) and examines for FH clinical signs (tendon xanthomata, corneal arcus <45), applying FH criteria (Simon Broome/Dutch) in spirit' },
      { dom:'tasks', text:'Starts appropriate TREATMENT: a STATIN (typically high-intensity) \u2014 explaining lifestyle alone won\u2019t control FH \u2014 and refers to a lipid clinic/specialist for confirmation, genetic testing and further management (e.g. ezetimibe/PCSK9 if needed)' },
      { dom:'tasks', text:'Arranges FAMILY CASCADE testing: FH is autosomal dominant, so first-degree relatives (children, siblings, parents) should be offered testing \u2014 framing this as protecting the whole family' },
      { dom:'tasks', text:'Assesses overall cardiovascular risk appropriately while recognising standard risk calculators (QRISK) UNDERESTIMATE risk in FH and should not be used to decide treatment in suspected FH \u2014 FH itself mandates treatment' },
      { dom:'rto',   text:'Validates his genuinely healthy lifestyle and reframes the result as GENETIC (not a personal failure or an error), addressing the identity-threat so he doesn\u2019t reject the diagnosis' },
      { dom:'rto',   text:'Surfaces and addresses the buried fear linked to his father\u2019s early heart attack, motivating treatment by framing it as protecting him from that fate rather than a slight on his fitness' },
      { dom:'gs',    text:'Safety-nets and follows up: statin started with monitoring, lipid-clinic/genetic referral, family cascade testing arranged, lifestyle optimised (as adjunct), and a follow-up that holds the diagnosis and the family implications \u2014 not "diet and recheck"' },
    ],
    worked:[
      { lbl:'Validate, then reframe', txt:'"First \u2014 everything you\u2019re doing is genuinely brilliant: the running, the diet, not smoking. So let me explain why your cholesterol is high DESPITE all that, because it\u2019s important: this almost certainly isn\u2019t a mistake, and it isn\u2019t something you\u2019ve done wrong. It looks like a GENETIC condition called familial hypercholesterolaemia, where the body can\u2019t clear cholesterol properly no matter how healthy you are."' },
      { lbl:'Why diet won\u2019t fix it', txt:'"That\u2019s the key thing: because it\u2019s in your genes, diet and exercise only nudge it a little \u2014 they can\u2019t fix it. You could eat perfectly and run every day and it would still be high. So this is one situation where, however fit you are, a tablet really is needed. It\u2019s not a failure of your lifestyle; it\u2019s your biology."' },
      { lbl:'The family clue',      txt:'"Can I ask about your family \u2014 any heart attacks or sudden deaths young? \u2026 Your dad at 44, and an uncle. That\u2019s really important and fits exactly: this condition runs in families and causes early heart problems. Knowing that actually makes the diagnosis clearer \u2014 and it\u2019s the key to protecting you."' },
      { lbl:'Reframe as protection',txt:'"Here\u2019s how I\u2019d like you to see this: untreated, this is what caused your dad\u2019s heart attack at 44. Treated \u2014 with a statin \u2014 we can bring your risk right down and very likely give you a completely different story from his. So the tablet isn\u2019t an insult to your fitness; it\u2019s the thing that lets your fitness actually pay off and protects you from his fate."' },
      { lbl:'Treat + refer + cascade', txt:'"So my plan: start you on a statin now, and refer you to a lipid specialist to confirm it, do a genetic test, and fine-tune treatment. And because it\u2019s inherited, your children, your brothers and sisters, and your parents should all be offered testing \u2014 by sorting yours, you protect them too."' },
      { lbl:'Safety-net + hold the fear', txt:'"We\u2019ll check the statin suits you and monitor things. I know a heart-risk label at 38, with your dad\u2019s history, is frightening \u2014 but you\u2019ve found this EARLY, which your dad never got the chance to. That\u2019s the opposite of his story. Let\u2019s book a proper follow-up. You came in thinking it was a mistake; what it actually is, is the most useful result you could have had."' },
    ],
    learning:'A markedly elevated, confirmed LDL/total cholesterol in a young, fit, slim, healthy-eating non-smoker is familial hypercholesterolaemia (FH) \u2014 a GENETIC condition, not a lifestyle problem or a lab error \u2014 so "I\u2019m fit so it must be wrong / I\u2019ll fix it with diet" is the misconception: diet and exercise help only modestly and FH needs a STATIN (usually high-intensity) plus lipid-clinic/genetic referral. The clinching clues are a premature-cardiovascular family history (father\u2019s MI at 44, young sudden death) and FH signs (tendon xanthomata, corneal arcus <45), per Simon Broome/Dutch criteria \u2014 and standard QRISK UNDERESTIMATES risk in FH and shouldn\u2019t be used to decide treatment. FH is autosomal dominant, so family CASCADE testing of first-degree relatives is a core part of the consultation. The examinable hidden agenda is identity-threat (fitness is core to him; a heart-risk label at 38 feels impossible) plus a buried fear from his father\u2019s early heart attack; validate his healthy lifestyle, reframe as genetic (not failure), surface and use the family history, and motivate treatment as protecting him from his father\u2019s fate \u2014 not "diet and recheck".',
    knowledge:{
      guideline:'NICE CG71 familial hypercholesterolaemia · Simon Broome / Dutch Lipid criteria · cascade testing',
      points:[
        { h:'Suspect FH', t:'Suspect familial hypercholesterolaemia with markedly raised cholesterol \u2014 e.g. total cholesterol >7.5 mmol/L or LDL >4.9 in an adult (higher thresholds raise suspicion further) \u2014 especially in a young person without lifestyle explanation. Confirm on a repeat (fasting) sample and exclude secondary causes (hypothyroidism, nephrotic, cholestasis).' },
        { h:'Use diagnostic criteria', t:'Apply the Simon Broome or Dutch Lipid Clinic Network criteria: LDL/total cholesterol level PLUS family history of premature coronary heart disease (e.g. MI <55 in a male first-degree relative, <60 female) and/or clinical signs \u2014 tendon xanthomata (Achilles/knuckles), corneal arcus <45 \u2014 and/or a causative mutation. Take the family history and examine for signs.' },
        { h:'Diet alone is insufficient', t:'FH is genetic \u2014 lifestyle measures help only modestly. High-intensity statins are first-line; ezetimibe and PCSK9 inhibitors are added/used per specialist input. A fit, slim, healthy patient with FH still needs pharmacological treatment; do not defer for "diet and recheck".' },
        { h:'QRISK underestimates in FH', t:'Standard cardiovascular risk calculators (QRISK) are NOT valid in FH and underestimate risk \u2014 do not use them to decide whether to treat suspected FH. The diagnosis itself mandates lipid-lowering treatment and specialist referral.' },
        { h:'Cascade testing', t:'FH is autosomal dominant. Offer cascade testing (lipid \u00b1 genetic) to first-degree relatives (and beyond) to identify and treat affected family members early. Identifying the index case protects the whole family \u2014 a core part of management.' },
        { h:'Address identity-threat & family fear', t:'A heart-risk diagnosis in a fit young person threatens identity and is often rejected ("it must be wrong"). Validate the healthy lifestyle, reframe as genetic (not failure), and use a parent\u2019s premature event to motivate treatment as protection \u2014 the patient found it early, unlike the affected relative.' },
        { h:'Never do', t:'Never dismiss a markedly high cholesterol in a fit young person as an error or "fixable by diet"; never omit the premature-CVD family history or examination for FH signs; never use QRISK to withhold treatment in suspected FH; never forget cascade testing; never leave the identity-threat/family-fear unaddressed.' },
        { h:'Safety-net & follow-up', t:'Start a high-intensity statin with monitoring; refer to a lipid clinic for confirmation/genetic testing and intensification; arrange family cascade testing; optimise lifestyle as adjunct; follow up holding the diagnosis and family implications.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c133, c134, c135, c136);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'nafld-result': {
      ceg: ['Investigations & results', 'Long-term conditions & cancer'],
      stem: {
        name: 'Gary Hollis', age: '49 years · male',
        pmh: ['Mildly raised ALT (~80), confirmed; bilirubin/ALP/INR normal', 'BMI 33, central obesity, BP 142/90, HbA1c 44, raised triglycerides', 'Minimal alcohol; viral/autoimmune/iron screen negative'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Baffled ("I barely drink"); wants reassurance it\u2019s nothing; defensive about alcohol.',
        reason: 'Video consultation — incidental raised ALT.'
      },
      timeMap: [
        { t:'0–2',  h:'Correct the misconception', d:'Alcohol is only one cause — your pattern fits non-alcoholic fatty liver, driven by metabolism. "Barely drink" doesn\u2019t rule out the liver.' },
        { t:'2–4',  h:'Join the dots',        d:'Weight, BP, pre-diabetes, triglycerides travel together (metabolic syndrome); the liver is the messenger.' },
        { t:'4–6',  h:'Assess fibrosis',      d:'FIB-4 / ELF + ultrasound — not just re-checking ALT. The ALT level doesn\u2019t show scarring.' },
        { t:'6–9',  h:'Hopeful reframe',      d:'Common, largely reversible; weight loss melts liver fat and cuts BP/sugar/heart risk — five things, one plan. No blame.' },
        { t:'9–12', h:'Plan + safety-net',    d:'Metabolic management + recheck; hepatology if advanced fibrosis; positive follow-up that treats the whole picture.' }
      ],
      wordPics: {
        fail: 'Reassures the ALT away as "a blip", or just re-checks it, or chases only alcohol; never assesses fibrosis (assumes mild ALT = mild liver); misses the metabolic/CVD risk; frames it with blame or lets the patient close it down.',
        pass: 'Explains NAFLD, assesses fibrosis (FIB-4/ELF/ultrasound), manages the metabolic picture, and follows up without blame.',
        exc:  'Corrects the alcohol misconception and names NAFLD as metabolic; assesses fibrosis rather than re-checking ALT (knowing ALT \u2260 fibrosis); manages the whole metabolic/CVD picture; reframes it positively as a fixable warning treating five things with one plan; and follows up, referring if advanced fibrosis.'
      },
      avoid: [
        { dont:'"You barely drink, so it\u2019s probably just a blip — we\u2019ll recheck it in a few months."', instead:'"Alcohol is only one cause — your weight, sugar and triglycerides point to fatty liver from your metabolism. Let\u2019s assess it properly, including for any scarring, not just recheck the number."', why:'Dismissing a raised ALT as a blip and re-checking misses NAFLD and the need to assess fibrosis.' },
        { dont:'"Your liver number is only mildly up, so there\u2019s no real concern."', instead:'"The liver NUMBER doesn\u2019t tell us about scarring — you can have significant scarring with a near-normal level — so I want to check fibrosis directly with a score and a specific test."', why:'Assuming a mildly raised ALT means mild liver disease misses advanced fibrosis, which the ALT doesn\u2019t reflect.' },
        { dont:'"You\u2019ll need to cut down your drinking and lose weight." (blame tone)', instead:'"This isn\u2019t about blame — it\u2019s a useful early warning. Losing a bit of weight treats the liver, the blood pressure, the sugar and your heart risk all at once. I\u2019ll help, not lecture."', why:'A blaming framing (and assuming alcohol) makes the patient disengage from the real metabolic conversation.' }
      ]
    },

    'raised-inflammatory-markers': {
      ceg: ['Investigations & results', 'Urgent & unscheduled care'],
      stem: {
        name: 'Margaret Doyle', age: '72 years · female',
        pmh: ['Markedly raised ESR (88) + CRP; mild normocytic anaemia', 'NEW bilateral shoulder/hip girdle pain + morning stiffness (?PMR)', '⚠ NEW temporal headache, scalp tenderness, jaw claudication (?GCA)'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Fixated on hidden cancer; hasn\u2019t connected the headache/scalp/jaw symptoms.',
        reason: 'Video consultation — incidentally raised ESR/CRP.'
      },
      timeMap: [
        { t:'0–2',  h:'Markers are non-specific', d:'A smoke alarm, not the fire. Inflammation somewhere, not the cause. Directed questions, not panic or a random test scatter.' },
        { t:'2–4',  h:'Directed history',     d:'Girdle pain + morning stiffness → PMR. Then ASK specifically: new temporal headache? scalp tender combing hair? jaw ache chewing?' },
        { t:'4–6',  h:'Name the emergency',   d:'Headache + scalp + jaw + raised markers over 50 = giant cell arteritis until proven otherwise — sight-threatening.' },
        { t:'6–8',  h:'Treat now, don\u2019t wait', d:'High-dose steroids immediately (don\u2019t wait for biopsy/results) + same-day rheumatology/ophthalmology referral.' },
        { t:'8–12', h:'Cancer fear + vision net', d:'Address the cancer worry proportionately with a structured work-up; ANY visual change → emergency eye/A&E. Steroid safety; follow up.' }
      ],
      wordPics: {
        fail: 'Treats the raised ESR as a "cancer test" and either panics or fires off random investigations; never asks the directed GCA questions, so the temporal headache/scalp/jaw symptoms and the sight-threatening GCA are missed; reassures about cancer while the real emergency goes untreated.',
        pass: 'Recognises markers are non-specific, takes a directed history that uncovers GCA, starts steroids and refers same-day, and addresses the cancer fear.',
        exc:  'Explains the non-specific marker and works it up with a directed history; actively elicits the GCA red flags the patient didn\u2019t volunteer; starts high-dose steroids immediately without waiting and refers same-day; recognises the PMR overlap; addresses the cancer fear proportionately without letting it eclipse the emergency; and safety-nets vision to emergency ophthalmology.'
      },
      avoid: [
        { dont:'"A high ESR can mean cancer, so let\u2019s arrange a load of scans to look for it."', instead:'"Raised markers just mean inflammation somewhere — let me ask some specific questions to find the source. And we\u2019ll check for anything sinister properly, not at random."', why:'Treating a raised ESR as a cancer test and scattering investigations misses the directed search that finds treatable, urgent causes.' },
        { dont:'"Your aches are probably just age — try some paracetamol."', instead:'"New shoulder and hip stiffness with raised markers could be polymyalgia — and I need to ask about headache, scalp tenderness and jaw ache, because those point to something sight-threatening."', why:'Dismissing the aches as age skips the directed GCA/PMR questions that change everything.' },
        { dont:'"Let\u2019s arrange a temporal artery biopsy first and start treatment once it\u2019s confirmed."', instead:'"Because your sight is at risk, I\u2019m starting high-dose steroids NOW — we don\u2019t wait for the biopsy — and getting you seen by the specialists today."', why:'Waiting for biopsy/confirmation before treating suspected GCA risks irreversible blindness.' }
      ]
    },

    'macrocytosis-result': {
      ceg: ['Investigations & results', 'Mental health & addiction'],
      stem: {
        name: 'Lisa Brennan', age: '46 years · female',
        pmh: ['Raised MCV (105) with NORMAL Hb; normal WCC/platelets', 'Tiredness; otherwise well', 'Recent bereavement/relationship stress; alcohol crept up'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Panicked it\u2019s "leukaemia"; reluctant to discuss alcohol.',
        reason: 'Telephone — incidental raised MCV.'
      },
      timeMap: [
        { t:'0–2',  h:'Reassure the big fear', d:'Large cells with a normal count is almost never leukaemia. A finding to look into, not a diagnosis.' },
        { t:'2–4',  h:'Name common causes',   d:'B12/folate, thyroid, drugs, liver, alcohol — ordinary, fixable. Check with a few tests.' },
        { t:'4–6',  h:'Open the door gently', d:'Non-judgemental alcohol history — has it crept up? Lets her disclose; likely the cause (and fixable).' },
        { t:'6–9',  h:'Reach the real issue', d:'The bereavement/stress behind the drinking; screen mood; nothing to be ashamed of.' },
        { t:'9–12', h:'Opportunity + safety-net', d:'Full panel + FBC recheck; alcohol + grief support; escalate if unexplained/cytopenias/abnormal film. Treat the person.' }
      ],
      wordPics: {
        fail: 'Alarms her toward leukaemia, or just labels "macrocytosis, recheck" without working up the cause; never takes a non-judgemental alcohol history, so the rising drinking and the grief behind it stay hidden.',
        pass: 'Reassures about leukaemia, plans the cause work-up, takes an alcohol history, and addresses the distress with support.',
        exc:  'Genuinely reassures about the leukaemia fear, then opens a non-judgemental alcohol door that lets her disclose; reaches the bereavement/distress driving the drinking and screens mood; frames the result as an opportunity for help; and plans the work-up with escalation criteria — treating the person, not just the number.'
      },
      avoid: [
        { dont:'"Large cells can sometimes be a sign of a blood cancer, so we should be thorough."', instead:'"With your blood count otherwise normal, large cells is almost never leukaemia — it\u2019s usually something ordinary like B12, thyroid or alcohol. Let\u2019s find which."', why:'Amplifying a leukaemia fear for isolated macrocytosis is inaccurate and frightening.' },
        { dont:'"It\u2019s macrocytosis — I\u2019ll recheck it in a few months."', instead:'"Let\u2019s actually find the cause now — B12, folate, thyroid, liver — and have an honest, no-judgement chat about alcohol, which is a common reason."', why:'Labelling and re-checking without a cause work-up misses a treatable, often-hidden issue.' },
        { dont:'"Are you drinking too much?" (judgemental tone)', instead:'"No judgement at all — has alcohol crept up lately, maybe with everything you\u2019ve been through? It really helps me find the cause."', why:'A judgemental approach makes the patient conceal the drinking that is likely the cause and the real consultation.' }
      ]
    },

    'familial-hypercholesterolaemia': {
      ceg: ['Investigations & results', 'Long-term conditions & cancer'],
      stem: {
        name: 'Daniel Okonkwo', age: '38 years · male',
        pmh: ['Total cholesterol 9.2, LDL 6.8 (confirmed, fasting)', 'Marathon runner, BMI 23, healthy diet, non-smoker', 'Father MI at 44; paternal uncle sudden death young; ?tendon xanthomata/arcus'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Thinks it\u2019s a lab error / wants to fix it with diet; "someone as fit as me" can\u2019t need tablets.',
        reason: 'Video consultation — very high cholesterol.'
      },
      timeMap: [
        { t:'0–2',  h:'Validate, then reframe', d:'Your lifestyle\u2019s brilliant — and this is high DESPITE it because it\u2019s genetic (familial hypercholesterolaemia), not a mistake or a failure.' },
        { t:'2–4',  h:'Why diet won\u2019t fix it', d:'Genetic — diet/exercise only nudge it; FH needs a statin however fit you are. Not a lifestyle failure; your biology.' },
        { t:'4–6',  h:'The family clue',      d:'Father\u2019s MI at 44 + young sudden death + ?xanthomata/arcus — fits FH (Simon Broome/Dutch). Examine.' },
        { t:'6–8',  h:'Reframe as protection', d:'Untreated, this caused your dad\u2019s heart attack; treated, we change that story. The tablet lets your fitness pay off.' },
        { t:'8–12', h:'Treat + cascade + net', d:'Start a statin; lipid-clinic/genetic referral; family cascade testing (children/siblings/parents); QRISK invalid in FH; follow up.' }
      ],
      wordPics: {
        fail: 'Treats the result as a likely error or agrees to "fix it with diet and recheck"; never takes the premature-CVD family history or examines for FH signs; uses QRISK to withhold treatment; misses the FH diagnosis and the family cascade.',
        pass: 'Recognises likely FH, takes the family history and examines, starts a statin with lipid-clinic referral, and arranges cascade testing.',
        exc:  'Validates the healthy lifestyle and reframes the result as genetic FH (not error/failure); elicits the premature-CVD family history and examines for signs; starts a statin and refers for genetic confirmation; arranges family cascade testing; knows QRISK is invalid in FH; and motivates treatment by reframing it as protection from the father\u2019s fate, addressing the identity-threat.'
      },
      avoid: [
        { dont:'"That seems too high for someone so fit — let\u2019s repeat it and you tighten your diet."', instead:'"It\u2019s high DESPITE your great lifestyle because it\u2019s likely genetic — familial hypercholesterolaemia. Diet can\u2019t fix that; it needs a statin, however fit you are."', why:'Dismissing it as an error or diet-fixable misses FH, where lifestyle alone is insufficient.' },
        { dont:'"Your heart-risk score is low because you\u2019re young and fit, so we can hold off treating."', instead:'"Those risk scores don\u2019t work in this condition — they underestimate it. FH itself means you need treatment now, regardless of the score."', why:'Using QRISK to withhold treatment in suspected FH is a recognised, dangerous error.' },
        { dont:'"Don\u2019t worry about your dad\u2019s heart attack — that\u2019s a separate thing."', instead:'"Your dad\u2019s heart attack at 44 is actually the key clue and the reason this matters — untreated this is what caused it; treated, we give you a different story, and we should test your family too."', why:'Dismissing the family history discards the diagnostic clue, the motivation, and the cascade-testing duty.' }
      ]
    }
  });

})();
