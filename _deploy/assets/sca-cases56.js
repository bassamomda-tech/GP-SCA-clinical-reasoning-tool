/* ============================================================
   Reasoning GP — Case Library batch 56:
   "Diabetes journey & blood-pressure decisions"
   Filling 4 live-linked gaps: starting insulin (beliefs, hypos,
   driving); type 2 diabetes in a Traveller patient (health-literacy
   & trust, not leaflets); borderline home readings ("does he really
   need tablets at 58?"); and wildly variable readings (technique,
   white-coat, or postural?). No NG12 cancer pathway genuinely
   applies; none invented (new-diabetes + weight loss \u2192 pancreatic
   awareness noted only where relevant).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases55.js.
   ============================================================ */

(function(){

  /* ============ 196. F2F — Starting insulin: beliefs, hypos, driving ============ */
  const c196 = {
    id:'insulin-start-beliefs', title:'"Insulin means I\u2019ve failed, doesn\u2019t it? And I\u2019ll go blind like my mum \u2014 I don\u2019t want needles"', type:'video', duration:12,
    meta:{ age:59, sex:'M', setting:'Video consultation \u2014 recommending insulin for poorly controlled type 2 diabetes.', system:'Diabetes \u2014 starting insulin: beliefs, hypoglycaemia & driving' },
    brief:'Mr Sanjay Mehta, 59, taxi driver, type 2 diabetes with HbA1c 86 mmol/mol despite maximal oral therapy (\u00b1 a GLP-1), is being advised to start insulin. He is resistant, equating insulin with personal FAILURE and with his late mother\u2019s diabetic complications ("she went blind, then insulin, then she died"), and is frightened of NEEDLES and of HYPOS affecting his driving/livelihood. The examinable task is the insulin-initiation consultation done well: ELICIT and ADDRESS the beliefs (insulin is not failure or punishment but a normal, effective step; his mother\u2019s outcome reflected the era/complications, not insulin causing harm), educate practically (injection technique is easy and near-painless; the regimen), and \u2014 critically \u2014 cover HYPOGLYCAEMIA (recognition, treatment, prevention) and the DVLA/DRIVING implications of insulin (must inform DVLA; specific rules for Group 1 and stricter for Group 2; glucose monitoring before/while driving; carrying fast-acting carbohydrate), arrange structured education/DSN support, and make a shared decision. The hidden agenda is fear (of failure, blindness, hypos and losing his licence/income). No NG12 cancer link.',
    script:{
      opening:'"So you\u2019re saying I need to go on insulin now. Honestly, that feels like I\u2019ve failed \u2014 like I haven\u2019t tried hard enough. And insulin\u2026 my mum went on insulin, then she went blind, then everything fell apart. I don\u2019t want to end up like that. And I drive a taxi all day \u2014 I can\u2019t be having funny turns at the wheel. I really don\u2019t want needles."',
      facts:[
        { topic:'Elicit and reframe the "failure" belief', text:'CORE \u2014 many people experience insulin as personal FAILURE or punishment. Address it head-on: type 2 diabetes is a PROGRESSIVE condition in which the pancreas makes less insulin over time, so needing insulin reflects the natural course, NOT a lack of effort or willpower. Reframe it as a positive, effective step to protect his health \u2014 validating the feeling while correcting the belief is central to engagement.' },
        { topic:'Address the "blindness/my mum" fear', text:'His mother\u2019s blindness and decline likely reflected POORLY CONTROLLED diabetes and its complications (and an earlier treatment era), NOT insulin causing harm \u2014 in fact good glucose control, which insulin helps achieve, REDUCES the risk of those very complications (retinopathy, nephropathy, neuropathy). Explore the family experience empathically and correct the causal misattribution that "insulin led to blindness".' },
        { topic:'Practical education \u2014 needles and regimen', text:'Address the needle fear practically: modern pen needles are very fine and injections are near-painless; demonstrate/teach technique, rotation of sites, storage. Explain the proposed regimen (commonly a once-daily basal insulin to start, titrated against fasting glucose), how to titrate, and that the diabetes specialist nurse (DSN)/structured education will support him. Confidence and competence reduce fear.' },
        { topic:'Hypoglycaemia \u2014 recognition, treatment, prevention', text:'CRITICAL with insulin \u2014 counsel HYPOGLYCAEMIA: recognise symptoms (sweating, tremor, hunger, palpitations, confusion), treat with FAST-ACTING carbohydrate (e.g. glucose tablets/juice) then a longer-acting snack, always carry fast-acting carbs, the risk factors (missed meals, alcohol, exercise, over-dosing), and when to seek help. This is essential for safety and especially for a driver.' },
        { topic:'The DVLA / driving duty', text:'ESSENTIAL for a taxi driver \u2014 starting insulin has DVLA implications: he MUST inform the DVLA (and, for a taxi, the licensing authority/his Group 2 status if applicable). Driving rules on insulin include: check blood glucose before driving and regularly on long journeys (generally glucose must be above a set threshold, e.g. >5 mmol/L to drive, "5 to drive"), do not drive if hypo or recently hypo until recovered, carry fast-acting carbohydrate, and never drive if hypo awareness is impaired. Group 2 (HGV/PCV/taxi where applicable) rules are stricter. Advise clearly, document, and frame supportively \u2014 with good management he can usually keep driving.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 his resistance is layered FEAR: of failure, of his mother\u2019s fate (blindness/death), of hypos, and of losing his licence and income. The skill is to surface each fear, correct the misconceptions with empathy, equip him with hypo and driving knowledge so the risks feel manageable, involve the DSN/structured education, and reach a SHARED decision \u2014 not to override his fears with facts alone or to give up and accept poor control.' },
      ],
      ice:{
        ideas:'Insulin = personal failure; insulin caused his mother\u2019s blindness/decline; needles are to be feared; hypos will end his driving.',
        concerns:'HIDDEN AGENDA \u2014 layered fear: failure, following his mother\u2019s fate, hypos at the wheel, and losing his taxi licence/income.',
        expectations:'To avoid insulin. What he needs: the failure/blindness beliefs reframed, practical needle/regimen education, thorough hypo and DVLA/driving counselling, DSN/structured-education support, and a shared decision.'
      },
      cues:['T2DM HbA1c 86 on maximal orals \u2014 insulin is the natural next step of a progressive disease, not a failure of effort.','"Mum went blind then on insulin" \u2014 correct the misattribution: poor control causes complications; good control (insulin) reduces them.','Taxi driver fearing hypos \u2014 cover hypo recognition/treatment AND the DVLA duty ("5 to drive", inform DVLA, carry carbs, stricter for Group 2).']
    },
    checkpoints:[
      { dom:'tasks', text:'ELICITS and reframes the "insulin = failure" belief \u2014 explaining type 2 diabetes is progressive (declining pancreatic insulin) so insulin reflects the natural course, not lack of effort \u2014 validating the feeling while correcting it' },
      { dom:'tasks', text:'Explores and corrects the "insulin caused my mum\u2019s blindness" misattribution \u2014 complications reflect poorly controlled diabetes/era, and good control (which insulin aids) REDUCES complication risk' },
      { dom:'tasks', text:'Provides practical education \u2014 reassurance re fine near-painless needles, injection technique/site rotation, the basal-insulin regimen and titration \u2014 and arranges DSN/structured-education support' },
      { dom:'tasks', text:'Counsels HYPOGLYCAEMIA thoroughly: recognition, treatment with fast-acting carbohydrate then longer-acting snack, carrying carbs, risk factors (missed meals, alcohol, exercise) and when to seek help' },
      { dom:'tasks', text:'Covers the DVLA/DRIVING duty for insulin \u2014 must inform DVLA, check glucose before/while driving ("5 to drive"), do not drive if hypo/until recovered, carry fast-acting carbs, stricter Group 2 rules \u2014 and documents the advice' },
      { dom:'rto',   text:'Surfaces the layered FEAR (failure, his mother\u2019s fate, hypos, losing his licence) empathically and corrects misconceptions WITH the patient rather than overriding him with facts' },
      { dom:'rto',   text:'Frames the driving issue supportively (good management usually permits continued driving), checks understanding, and works toward a SHARED decision rather than coercion or capitulation' },
      { dom:'gs',    text:'Safety-nets and follows up: DSN referral/structured education, hypo and sick-day rules, the DVLA notification and driving advice documented, titration and review plan, and complication-screening reassurance \u2014 a shared, well-supported insulin start, not facts-over-fear or accepting poor control' },
    ],
    worked:[
      { lbl:'Validate, then reframe failure', txt:'"I really hear that this feels like failure \u2014 but I want to gently challenge that. Type 2 diabetes changes over the years; the body makes less of its own insulin, so needing it now is just the natural course, not you not trying hard enough. Lots of people reach this point."' },
      { lbl:'Address the fear about his mum', txt:'"Tell me about your mum \u2026 I\u2019m so sorry. Here\u2019s something important, though: it wasn\u2019t the insulin that caused her blindness \u2014 that comes from diabetes being out of control for a long time. Good control, which insulin helps with, actually PROTECTS your eyes, kidneys and nerves. We\u2019re using it to avoid her path, not repeat it."' },
      { lbl:'Demystify the needles', txt:'"The needles aren\u2019t what you\u2019re picturing \u2014 they\u2019re tiny and most people say they barely feel them. We\u2019d usually start with one injection a day, and our diabetes nurse will show you exactly how and support you. Would it help to see one now?"' },
      { lbl:'Hypos \u2014 make it manageable', txt:'"The thing to know about is a \u2018hypo\u2019 \u2014 blood sugar dropping too low: sweaty, shaky, hungry. The fix is simple \u2014 something sugary like glucose tabs or juice, then a snack. You\u2019ll always carry fast sugar. Knowing this makes it very manageable."' },
      { lbl:'The driving conversation', txt:'"Because you drive for a living, two musts: you have to tell the DVLA you\u2019re on insulin, and you check your sugar before driving \u2014 the rule is \u2018five to drive\u2019, above 5 \u2014 and on long shifts. Don\u2019t drive if you\u2019re hypo. With good control, people carry on driving fine \u2014 this protects your licence, it doesn\u2019t automatically end it."' },
      { lbl:'Shared decision + support', txt:'"I don\u2019t want to push insulin on you \u2014 I want you to feel okay about it. How does it sound now we\u2019ve talked it through? Let\u2019s get the diabetes nurse involved, start gently, and review closely. You\u2019re not doing this alone."' },
    ],
    learning:'Starting insulin in type 2 diabetes is as much about BELIEFS and SAFETY as pharmacology. Elicit and reframe the common feeling that insulin means personal FAILURE: type 2 diabetes is PROGRESSIVE \u2014 the pancreas makes less insulin over time \u2014 so needing insulin reflects the natural course, not a lack of effort, and is a positive, effective step. Explore and correct the frequent misattribution that "insulin caused my relative\u2019s blindness/decline": complications such as retinopathy, nephropathy and neuropathy arise from poorly controlled diabetes (and, for older relatives, an earlier treatment era), whereas good glucose control \u2014 which insulin helps achieve \u2014 REDUCES that risk. Provide practical education (fine, near-painless pen needles; technique and site rotation; a once-daily basal-insulin start titrated to fasting glucose; DSN/structured-education support). Counsel HYPOGLYCAEMIA thoroughly \u2014 recognition (sweating, tremor, hunger, palpitations, confusion), treatment with fast-acting carbohydrate then a longer-acting snack, always carrying carbs, risk factors (missed meals, alcohol, exercise) and when to seek help. Critically, cover the DVLA/DRIVING duty for insulin: the patient MUST inform the DVLA, check glucose before and during driving ("5 to drive"), not drive while hypo or until fully recovered, carry fast-acting carbohydrate, and never drive with impaired hypo awareness \u2014 with stricter rules for Group 2 (and taxi/PCV) drivers; advise clearly, document, and frame supportively because good management usually permits continued driving. The hidden agenda is layered fear (failure, a relative\u2019s fate, hypos, losing licence/income); surface and address each empathically, equip the patient with hypo and driving knowledge, involve the DSN, and reach a SHARED decision \u2014 neither overriding fear with facts alone nor capitulating to ongoing poor control. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE NG28 type 2 diabetes \u00b7 insulin initiation \u00b7 hypoglycaemia management \u00b7 DVLA diabetes & driving rules',
      points:[
        { h:'Insulin is not failure', t:'T2DM is progressive (declining beta-cell function); insulin is a natural, effective step, not a failure of effort. Validate the feeling and reframe.' },
        { h:'Correct the complication myth', t:'Complications (retinopathy/nephropathy/neuropathy) reflect poor control, not insulin. Good control (aided by insulin) reduces them. Address relative\u2019s-fate fears empathically.' },
        { h:'Practical education', t:'Fine, near-painless pen needles; technique/site rotation; usually start once-daily basal insulin titrated to fasting glucose; DSN/structured education support.' },
        { h:'Hypoglycaemia', t:'Recognise (sweating, tremor, hunger, palpitations, confusion); treat with fast-acting carbohydrate then longer-acting snack; always carry carbs; risk factors (missed meals, alcohol, exercise); seek help if severe.' },
        { h:'DVLA & driving', t:'Must inform DVLA on insulin. Check glucose before/while driving ("5 to drive", >5 mmol/L), don\u2019t drive if hypo/until recovered, carry fast-acting carbs, no driving with impaired hypo awareness. Stricter Group 2 (HGV/PCV/taxi) rules. Document advice.' },
        { h:'Supportive framing', t:'Good management usually permits continued driving \u2014 frame the DVLA step as protecting the licence and safety, not ending the job.' },
        { h:'Never do', t:'Never dismiss the failure/relative-fate beliefs; never start insulin without hypo and DVLA counselling; never omit DSN/structured education; never coerce or, conversely, accept ongoing poor control to avoid the conversation.' },
        { h:'Safety-net & follow-up', t:'DSN referral/structured education; hypo and sick-day rules; DVLA notification and driving advice documented; titration and review plan; complication-screening reassurance; shared decision.' }
      ]
    }
  };

  /* ============ 197. F2F — T2DM in a Traveller patient: health-literacy and trust, not leaflets ============ */
  const c197 = {
    id:'t2dm-traveller', title:'"I can\u2019t read your leaflets, and we move around a lot \u2014 don\u2019t just talk at me, doc"', type:'video', duration:12,
    meta:{ age:47, sex:'M', setting:'Video consultation \u2014 a man from the Traveller community with poorly engaged type 2 diabetes.', system:'Diabetes / Health inequalities \u2014 health-literacy, culture & building trust' },
    brief:'Mr Patrick Ward, 47, from the Gypsy/Traveller community, has type 2 diabetes that has been poorly engaged with: missed appointments, a high HbA1c, little monitoring. He has low literacy, moves location frequently, and has had previous experiences of feeling judged or dismissed by services. He is wary but has come today. The examinable task is the HEALTH-INEQUALITIES / HEALTH-LITERACY consultation: recognise the well-documented health disadvantage and shorter life expectancy in Gypsy/Traveller communities and the barriers (literacy, mistrust from discrimination, mobility/continuity, access), BUILD TRUST and rapport, avoid assumptions/stereotyping, communicate WITHOUT relying on written leaflets (verbal, teach-back, visual aids, simple language), co-create a realistic and FLEXIBLE plan that works with a mobile lifestyle (portable records, where to access care when moving, prioritising the few most important things), use interpreters/advocates if needed, and address diabetes management pragmatically. The skill is partnership and cultural humility, NOT "talking at" him or handing over leaflets he can\u2019t use. No NG12 cancer link.',
    script:{
      opening:'"I\u2019ll be honest with you \u2014 I\u2019ve not bothered much with all this diabetes stuff. I can\u2019t read your leaflets and forms, and we move around a fair bit so I never see the same doctor twice. Last place made me feel like a nuisance. I\u2019m only here \u2019cause the wife\u2019s worried. So don\u2019t just talk at me, alright?"',
      facts:[
        { topic:'Recognise the health inequality \u2014 and start with trust', text:'CORE \u2014 Gypsy/Traveller communities experience some of the WORST health outcomes and shortest life expectancy of any group in the UK, driven by discrimination, mistrust of services, low literacy, poor continuity (mobility), and access barriers. The FIRST task is to BUILD TRUST: acknowledge his previous poor experience, thank him for coming, be respectful and non-judgemental, and signal partnership ("we\u2019ll work this out together") \u2014 because without trust nothing else lands.' },
        { topic:'Don\u2019t rely on written information', text:'CRITICAL \u2014 with low literacy, LEAFLETS and forms are useless or alienating. Communicate VERBALLY in plain language, use VISUAL aids/pictures/teach-back ("just so I\u2019ve explained it well, can you tell me back what we agreed?"), avoid jargon, and check understanding repeatedly. Offer an advocate/interpreter if helpful. "Talking at" him or handing leaflets is exactly the failure to avoid.' },
        { topic:'Avoid assumptions and stereotyping', text:'Cultural HUMILITY \u2014 do not stereotype or make assumptions about his lifestyle, diet, beliefs or willingness to engage; ask, listen, and tailor to HIS circumstances and priorities. Respect his autonomy and expertise about his own life. Discrimination and feeling judged are key drivers of disengagement \u2014 actively counter that in your manner.' },
        { topic:'Build a plan that fits a mobile life', text:'Co-create a REALISTIC, FLEXIBLE plan that works with frequent moving: ensure he holds a PORTABLE record/summary of his diabetes and medications (so any service can pick it up), explain how to register/access care when in a new area (and that he is entitled to care anywhere, including as a temporary patient or via walk-in/urgent services), prioritise the FEW most important actions (e.g. key medication, a realistic monitoring approach, foot/eye checks), and avoid an overwhelming standard pathway he cannot follow.' },
        { topic:'Pragmatic diabetes management', text:'Manage the diabetes pragmatically within these constraints: focus on the highest-impact, achievable steps (medication adherence, simple dietary changes discussed concretely, smoking, blood-pressure and the essential complication screening \u2014 retinopathy, feet, renal), arrange what monitoring is feasible, and build in flexibility and continuity workarounds rather than insisting on a rigid recall schedule he will miss.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 his wariness and "don\u2019t talk at me" come from prior DISCRIMINATION and being made to feel a nuisance, plus the practical reality of low literacy and mobility; the wife\u2019s worry is what brought him. The skill is to genuinely earn trust this visit, make care accessible and flexible, prioritise ruthlessly, and leave him feeling respected and willing to come back \u2014 a single good experience can change engagement. Not "talking at" him, not leaflets.' },
      ],
      ice:{
        ideas:'Diabetes care is leaflets, forms and lectures he can\u2019t use, from services that don\u2019t see him as a person; "not bothered much" because it hasn\u2019t worked for him.',
        concerns:'HIDDEN AGENDA \u2014 prior discrimination/feeling a nuisance, low literacy, no continuity from moving; the wife\u2019s worry brought him.',
        expectations:'Not to be "talked at". What he needs: trust built, verbal/visual communication (no leaflets), no stereotyping, a flexible plan that fits a mobile life with a portable record, prioritised pragmatic management, and respect.'
      },
      cues:['Poorly engaged T2DM + low literacy + frequent moving + prior feeling judged \u2014 a health-inequalities consultation; Travellers have among the worst UK health outcomes.','"I can\u2019t read your leaflets, don\u2019t talk at me" \u2014 communicate verbally/visually with teach-back; never rely on written information or lecture.','Build trust + a flexible plan (portable record, access when moving, prioritise the few key things); avoid stereotyping; the wife\u2019s worry is the opening.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the health INEQUALITY (Gypsy/Traveller communities have among the worst UK outcomes/shortest life expectancy) and prioritises BUILDING TRUST \u2014 acknowledging prior poor experiences, being respectful and non-judgemental, signalling partnership' },
      { dom:'tasks', text:'Communicates WITHOUT relying on written material \u2014 plain verbal language, visual aids, teach-back, no jargon, repeated understanding checks \u2014 and offers an advocate/interpreter if helpful' },
      { dom:'tasks', text:'Avoids ASSUMPTIONS/stereotyping \u2014 asks about and tailors to his actual circumstances, diet, beliefs and priorities, respecting autonomy and countering the sense of being judged' },
      { dom:'tasks', text:'Co-creates a FLEXIBLE plan for a mobile life \u2014 a portable record/summary, how to access care when moving (entitlement anywhere, temporary registration/walk-in), and prioritising the FEW most important actions rather than an overwhelming standard pathway' },
      { dom:'tasks', text:'Manages the diabetes PRAGMATICALLY \u2014 highest-impact achievable steps (key medication, concrete simple dietary changes, smoking, BP, essential complication screening: eyes/feet/renal) with feasible monitoring and continuity workarounds' },
      { dom:'rto',   text:'Earns trust through manner \u2014 warm, respectful, unhurried, explicitly non-judgemental \u2014 reading the wariness as a response to prior discrimination, and treats the wife\u2019s worry as the opening' },
      { dom:'rto',   text:'Checks understanding with teach-back throughout, shares decisions, and leaves him feeling respected and willing to return' },
      { dom:'gs',    text:'Safety-nets and follows up: a realistic, written-light plan he can actually use, a portable record, clear next steps and how to access care wherever he is, prioritised review, and an open door \u2014 partnership and accessibility, not leaflets or "talking at" him' },
    ],
    worked:[
      { lbl:'Acknowledge + reset', txt:'"Thank you for coming in \u2014 I know it took something to do that, especially if you\u2019ve been made to feel a nuisance before. That\u2019s not how this will go. We\u2019ll sort this out together, at your pace, and I won\u2019t just talk at you."' },
      { lbl:'Ditch the leaflets', txt:'"Forget the leaflets \u2014 we\u2019ll talk it through, and I\u2019ll keep it plain. Stop me any time. And now and then I\u2019ll ask you to tell it back to me \u2014 not to test you, just to check I\u2019ve explained it properly. That fair?"' },
      { lbl:'Ask, don\u2019t assume', txt:'"Tell me about your day-to-day \u2014 what you eat, how you\u2019re feeling, what gets in the way. I don\u2019t want to assume anything; you know your life best, and we\u2019ll fit the diabetes around it, not the other way round."' },
      { lbl:'A plan that travels', txt:'"Since you move about, let\u2019s do two things: I\u2019ll give you a simple card with your diagnosis and tablets on it, so any doctor anywhere can pick it up \u2014 you\u2019re entitled to care wherever you are. And we\u2019ll keep it simple: a couple of the most important things rather than a big list."' },
      { lbl:'Prioritise ruthlessly', txt:'"If we just nail two things to start \u2014 taking this one tablet regularly, and getting your eyes and feet checked \u2014 that alone makes a real difference. We can build from there. What feels doable for you?"' },
      { lbl:'Open door + safety-net', txt:'"You can come back to me \u2014 or any practice when you\u2019re moving \u2014 and you won\u2019t get grief. If you get very thirsty, drowsy, or unwell, get seen urgently. Tell your wife we\u2019ve made a start. I\u2019m glad you came, and I mean that."' },
    ],
    learning:'This is a HEALTH-INEQUALITIES / health-literacy consultation. Gypsy/Traveller communities experience among the WORST health outcomes and shortest life expectancy in the UK, driven by discrimination, mistrust of services, low literacy, poor continuity from a mobile lifestyle, and access barriers \u2014 so the FIRST task is to BUILD TRUST: acknowledge prior poor experiences, be respectful and explicitly non-judgemental, thank him for coming, and signal genuine partnership, because without trust nothing else lands. Do NOT rely on written information: with low literacy, leaflets and forms are useless or alienating, so communicate verbally in plain language, use visual aids and TEACH-BACK, avoid jargon, check understanding repeatedly, and offer an advocate/interpreter if helpful \u2014 "talking at" him or handing over leaflets is precisely the failure to avoid. Practise cultural HUMILITY: do not stereotype or assume his diet, beliefs or willingness; ask, listen, and tailor to his circumstances and priorities, respecting his autonomy and actively countering the sense of being judged that drives disengagement. Co-create a REALISTIC, FLEXIBLE plan for a mobile life \u2014 a portable record/summary of diagnosis and medication, clarity that he is entitled to care anywhere (temporary registration/walk-in/urgent services) and how to access it when moving, and prioritisation of the FEW highest-impact achievable actions rather than an overwhelming standard pathway he cannot follow. Manage the diabetes pragmatically (key medication adherence, concrete simple dietary change, smoking, BP, and essential complication screening \u2014 eyes, feet, renal) with feasible monitoring and continuity workarounds. The hidden agenda is wariness rooted in discrimination and the practical realities of literacy and mobility, with the wife\u2019s worry the opening \u2014 earn trust this visit, make care accessible and flexible, prioritise ruthlessly, and leave him respected and willing to return, since a single good experience can transform engagement. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Health inequalities \u2014 Gypsy/Traveller health \u00b7 health-literacy & teach-back \u00b7 inclusion health \u00b7 NICE NG28 (pragmatic application)',
      points:[
        { h:'Recognise the inequality', t:'Gypsy/Traveller communities have among the worst UK health outcomes and shortest life expectancy, driven by discrimination, mistrust, low literacy, mobility/continuity and access barriers. Building trust is the first task.' },
        { h:'Don\u2019t rely on writing', t:'With low literacy, use plain verbal language, visual aids and teach-back; avoid jargon; check understanding; offer advocate/interpreter. Never depend on leaflets/forms or "talk at" the patient.' },
        { h:'Cultural humility', t:'Avoid assumptions/stereotyping about diet, beliefs or willingness. Ask, listen and tailor to the individual; respect autonomy; counter the sense of being judged.' },
        { h:'Plan for a mobile life', t:'Portable record/summary of diagnosis and medication; clarify entitlement to care anywhere (temporary registration/walk-in/urgent); explain access when moving; prioritise the few highest-impact actions.' },
        { h:'Pragmatic management', t:'Focus on achievable high-impact steps (key medication, concrete dietary change, smoking, BP, essential complication screening \u2014 eyes/feet/renal) with feasible monitoring and continuity workarounds, not a rigid recall he will miss.' },
        { h:'Earn trust through manner', t:'Warm, respectful, unhurried, non-judgemental; acknowledge prior discrimination; treat a worried family member\u2019s prompt as the opening; a single good experience can change engagement.' },
        { h:'Never do', t:'Never rely on leaflets/forms with low literacy; never stereotype or assume; never lecture or "talk at" the patient; never impose an overwhelming standard pathway; never let prior disengagement justify a dismissive manner.' },
        { h:'Safety-net & follow-up', t:'A simple usable plan, portable record, clear next steps and how to access care anywhere, prioritised review, urgent red flags (thirst/drowsiness/unwell), and an open, judgement-free door.' }
      ]
    }
  };

  /* ============ 198. F2F — Borderline home BP: does he really need tablets at 58? ============ */
  const c198 = {
    id:'htn-borderline-tablets', title:'"My readings are only a bit up \u2014 do I really need to be on pills for the rest of my life at 58?"', type:'video', duration:12,
    meta:{ age:58, sex:'M', setting:'Video consultation \u2014 discussing borderline blood pressure and whether to treat.', system:'Cardiovascular \u2014 hypertension: diagnosis thresholds, CVD risk & shared decision-making' },
    brief:'Mr Neil Hartley, 58, well, was found to have a raised clinic BP at a check; home/ambulatory readings average around 142/88. He is reluctant to start lifelong tablets for numbers that are "only a bit up". The examinable task is the hypertension decision done well: CONFIRM the diagnosis correctly (clinic reading confirmed by ABPM or HBPM \u2014 stage 1 hypertension is clinic \u2265140/90 with ABPM/HBPM average \u2265135/85), then make a SHARED, RISK-BASED decision \u2014 in stage 1 hypertension, offer treatment based on overall CARDIOVASCULAR RISK (QRISK), target-organ damage, diabetes, renal disease or age, NOT the BP number alone; for a man of 58 estimate QRISK and discuss. Emphasise LIFESTYLE first/alongside (weight, salt, alcohol, exercise, smoking, diet), explain the genuine benefits and the reframing that "lifelong" is not necessarily fixed if lifestyle improves, address his autonomy and concerns about medication, and arrange monitoring and review. The skill is neither dismissing nor railroading \u2014 a genuine shared, evidence-based decision. No NG12 cancer link.',
    script:{
      opening:'"The nurse said my blood pressure was up and I should see you about tablets. But honestly, it\u2019s only a bit high, isn\u2019t it? 142-ish. I feel completely fine. Do I really need to be on pills for the rest of my life at 58? Once you start them, that\u2019s it, isn\u2019t it \u2014 you\u2019re on them forever."',
      facts:[
        { topic:'Confirm the diagnosis properly first', text:'CORE \u2014 don\u2019t treat a single clinic reading. Confirm hypertension with ABPM or HBPM: a clinic BP \u2265140/90 with an ABPM/HBPM daytime average \u2265135/85 indicates STAGE 1 hypertension; \u2265160/100 clinic (or \u2265150/95 ABPM/HBPM) is stage 2. His home average ~142/88 (clinic) / corresponding home readings put him around stage 1. Excludes white-coat effect. Getting the diagnosis right precedes any treatment decision.' },
        { topic:'Stage 1 = a RISK-BASED, shared decision', text:'KEY \u2014 in STAGE 1 hypertension, the decision to start drug treatment is based on overall CARDIOVASCULAR RISK and other factors, NOT the BP number alone. NICE: offer antihypertensive treatment to people with stage 1 hypertension who have target-organ damage, established CVD, renal disease, diabetes, OR a 10-year cardiovascular risk (QRISK) \u226510%; also consider treatment for those under 60 with stage 1 and QRISK <10% (where the lifetime risk is high). So estimate his QRISK and assess for target-organ damage \u2014 the number alone does not decide it.' },
        { topic:'Assess the whole picture', text:'Before deciding: estimate QRISK (age, sex, smoking, lipids, diabetes, BMI, family history, ethnicity), check for TARGET-ORGAN DAMAGE (urine ACR for proteinuria, bloods incl. renal function and HbA1c, ECG for LVH, fundi), and screen for secondary causes if features suggest. This individualises the decision and may itself shift it (e.g. evidence of organ damage favours treatment).' },
        { topic:'Lifestyle first and alongside', text:'Emphasise LIFESTYLE for everyone, irrespective of whether drugs start: weight loss, reduce salt and alcohol, regular exercise, healthy (e.g. DASH-style) diet, smoking cessation, and caffeine moderation \u2014 these can meaningfully lower BP and CVD risk and sometimes obviate or reduce medication. This also addresses his autonomy and the wish to avoid pills.' },
        { topic:'Reframe "tablets forever"', text:'Address the "on pills for life" belief honestly: medication is not necessarily permanent \u2014 if lifestyle changes substantially lower BP, treatment can sometimes be reduced or stopped under review; and where treatment IS warranted, explain the genuine benefit (reduced risk of stroke, heart attack, kidney and eye damage) in absolute terms he can weigh. The goal is an informed choice, not coercion.' },
        { topic:'The hidden agenda + shared decision', text:'HIDDEN AGENDA \u2014 his reluctance reflects feeling well, a dislike of medicalisation/"pills forever", and wanting to retain control. The skill is to CONFIRM the diagnosis, individualise with QRISK/organ-damage assessment, offer lifestyle, explain benefits and the non-permanence honestly, and make a genuine SHARED decision respecting his autonomy \u2014 neither dismissing the raised BP nor railroading him onto lifelong tablets. Arrange monitoring/review whichever path is chosen.' },
      ],
      ice:{
        ideas:'The BP is "only a bit up", he feels fine, and starting tablets means being on them forever.',
        concerns:'HIDDEN AGENDA \u2014 dislike of medicalisation and "pills for life"; wanting control; scepticism that treating a small number while feeling well is worth it.',
        expectations:'To avoid lifelong tablets. What he needs: diagnosis confirmed (ABPM/HBPM), a risk-based (QRISK/organ-damage) shared decision, lifestyle emphasis, honest reframing of "forever", and respect for his autonomy.'
      },
      cues:['Borderline readings (~142/88) in a well 58-year-old \u2014 confirm with ABPM/HBPM (stage 1 = clinic \u2265140/90, ABPM/HBPM \u2265135/85) before deciding.','Stage 1 = treat on overall CV risk, not the number: QRISK \u226510%, target-organ damage, diabetes, renal/CVD (and consider if <60 with high lifetime risk).','"Pills forever?" \u2014 lifestyle first/alongside; medication isn\u2019t necessarily permanent; make a genuine shared, risk-based decision, neither dismissing nor railroading.']
    },
    checkpoints:[
      { dom:'tasks', text:'CONFIRMS the diagnosis properly \u2014 clinic reading verified by ABPM or HBPM (stage 1 = clinic \u2265140/90 with ABPM/HBPM average \u2265135/85) \u2014 rather than treating a single clinic reading, and recognises white-coat effect' },
      { dom:'tasks', text:'Knows stage 1 treatment is a RISK-BASED decision \u2014 offer drugs with target-organ damage, established CVD, renal disease, diabetes, or QRISK \u226510% (and consider if <60 with high lifetime risk) \u2014 NOT the BP number alone' },
      { dom:'tasks', text:'Assesses the whole picture \u2014 estimates QRISK, checks for target-organ damage (urine ACR, renal function/HbA1c bloods, ECG for LVH, fundi), and considers secondary causes if features suggest' },
      { dom:'tasks', text:'Emphasises LIFESTYLE (weight, salt, alcohol, exercise, diet, smoking, caffeine) for everyone, whether or not drugs start, as a meaningful BP/CVD-risk intervention' },
      { dom:'tasks', text:'Reframes "tablets forever" honestly \u2014 medication is not necessarily permanent if lifestyle lowers BP; and where treatment is warranted, explains the genuine absolute benefits (stroke/MI/renal/eye protection)' },
      { dom:'rto',   text:'Reads the reluctance (feeling well, anti-medicalisation, wanting control), respects his autonomy, and makes a genuine SHARED decision \u2014 neither dismissing the raised BP nor railroading him onto lifelong tablets' },
      { dom:'rto',   text:'Explains risk and the decision in terms he can weigh, checks understanding, and supports an informed choice' },
      { dom:'gs',    text:'Safety-nets and follows up: arranges the confirmatory/assessment tests, a monitoring/review plan whichever path is chosen, lifestyle support, when to reassess (and reconsider medication), and review of QRISK over time \u2014 a confirmed, risk-based, shared decision' },
    ],
    worked:[
      { lbl:'Slow down \u2014 confirm first', txt:'"Good question, and I don\u2019t want to put you on anything you don\u2019t need. First, one raised reading isn\u2019t a diagnosis \u2014 let\u2019s make sure it\u2019s genuinely up using home or 24-hour readings, not just the clinic, because some people\u2019s rises only in here."' },
      { lbl:'Explain the real decision', txt:'"Here\u2019s the key thing: at this level, whether to treat isn\u2019t about the number alone \u2014 it\u2019s about your overall risk of heart attack and stroke over the next ten years. I\u2019ll work that out with a score, check for any early effects on your heart and kidneys, and then we decide together."' },
      { lbl:'Individualise', txt:'"Let me estimate that risk \u2014 it uses your age, cholesterol, whether you smoke, family history and so on \u2014 and do a urine test, some bloods and a heart tracing. If those show your risk is low and there\u2019s no damage, lifestyle alone may be reasonable. If they don\u2019t, tablets genuinely protect you."' },
      { lbl:'Lifestyle as real medicine', txt:'"Either way, the lifestyle stuff isn\u2019t a fob-off \u2014 cutting salt and alcohol, losing a little weight, regular walking can drop your pressure meaningfully, sometimes enough to avoid or reduce tablets. That puts a lot back in your hands."' },
      { lbl:'Reframe "forever"', txt:'"And \u2018on them for life\u2019 isn\u2019t fixed \u2014 if your lifestyle brings the pressure down, we can review and sometimes reduce or stop. If you do need them, they\u2019re quietly preventing a stroke years down the line, which is worth a lot even though you feel fine now."' },
      { lbl:'Shared decision + review', txt:'"So nothing\u2019s being forced today. Let\u2019s get the readings and tests, I\u2019ll show you your risk score, and we\u2019ll make the call together. We\u2019ll review it whatever we decide \u2014 this isn\u2019t a one-way door. Does that feel fair?"' },
    ],
    learning:'A borderline blood-pressure decision is made in stages. First CONFIRM the diagnosis \u2014 do not treat a single clinic reading; verify with ambulatory (ABPM) or home (HBPM) monitoring, where stage 1 hypertension is a clinic BP \u2265140/90 with an ABPM/HBPM daytime average \u2265135/85, and stage 2 is clinic \u2265160/100 (ABPM/HBPM \u2265150/95) \u2014 which also excludes white-coat effect. Then recognise that in STAGE 1 the decision to start drug treatment is RISK-BASED, not number-based: NICE advises offering antihypertensives to people with stage 1 hypertension who have target-organ damage, established cardiovascular disease, renal disease, diabetes, or a 10-year cardiovascular (QRISK) risk \u226510%, and considering treatment in those under 60 with stage 1 even if QRISK is <10% (high lifetime risk). So estimate QRISK and assess for target-organ damage (urine ACR, renal function/HbA1c, ECG for LVH, fundi), considering secondary causes if features suggest \u2014 the number alone does not decide it. Emphasise LIFESTYLE for everyone whether or not drugs start (weight, salt, alcohol, exercise, diet, smoking, caffeine), as it meaningfully lowers BP and CVD risk and can reduce or avoid medication. Reframe "tablets forever" honestly: treatment is not necessarily permanent if lifestyle lowers BP (it can be reviewed and sometimes reduced/stopped), and where warranted, explain the genuine absolute benefits (stroke, MI, renal and eye protection) the patient can weigh. The hidden agenda is feeling well, dislike of medicalisation and wanting control \u2014 respect autonomy, confirm the diagnosis, individualise with QRISK/organ-damage, offer lifestyle, and make a genuine SHARED decision, neither dismissing the raised BP nor railroading onto lifelong tablets, with monitoring and review whichever path is chosen. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE NG136 hypertension \u00b7 ABPM/HBPM diagnosis \u00b7 QRISK & stage-1 treatment thresholds \u00b7 shared decision-making',
      points:[
        { h:'Confirm before treating', t:'Don\u2019t treat one clinic reading. Confirm with ABPM/HBPM: stage 1 = clinic \u2265140/90 with ABPM/HBPM \u2265135/85; stage 2 = clinic \u2265160/100 (ABPM/HBPM \u2265150/95). Excludes white-coat effect.' },
        { h:'Stage 1 is risk-based', t:'Offer drug treatment in stage 1 with target-organ damage, established CVD, renal disease, diabetes, or QRISK \u226510%; consider treatment in under-60s with stage 1 and QRISK <10% (high lifetime risk). The number alone does not decide.' },
        { h:'Assess the whole patient', t:'Estimate QRISK; check target-organ damage (urine ACR, renal function/HbA1c, ECG for LVH, fundi); consider secondary causes if features suggest. This individualises and may shift the decision.' },
        { h:'Lifestyle for all', t:'Weight, salt and alcohol reduction, regular exercise, healthy diet, smoking cessation, caffeine moderation \u2014 meaningfully lower BP and CVD risk and may reduce/avoid medication, irrespective of drug decision.' },
        { h:'Reframe "forever"', t:'Treatment is not necessarily permanent \u2014 review and possible reduction/stopping if lifestyle lowers BP; where warranted, explain genuine absolute benefits (stroke/MI/renal/eye protection).' },
        { h:'Shared decision', t:'Respect autonomy; present risk and options clearly; make a genuine shared decision \u2014 neither dismissing the raised BP nor railroading onto lifelong tablets.' },
        { h:'Never do', t:'Never treat a single clinic reading; never decide stage 1 on the number alone without QRISK/organ-damage; never omit lifestyle; never imply tablets are irreversibly lifelong; never coerce or dismiss.' },
        { h:'Safety-net & follow-up', t:'Arrange confirmatory/assessment tests; monitoring/review plan whichever path; lifestyle support; reassessment timing and reconsideration of medication; QRISK review over time.' }
      ]
    }
  };

  /* ============ 199. VIDEO — Wildly variable BP readings: technique, white-coat, or postural? ============ */
  const c199 = {
    id:'htn-variable-readings', title:'"My home machine gives me totally different numbers every time \u2014 I don\u2019t know what to believe"', type:'video', duration:12,
    meta:{ age:64, sex:'F', setting:'Video consultation \u2014 confusingly variable home BP readings.', system:'Cardiovascular \u2014 interpreting variable BP: technique, white-coat & postural drop' },
    brief:'Mrs Glenda Ferreira, 64, on amlodipine for hypertension, brings a confusing set of HOME readings ranging from 118/74 to 178/100, and is anxious and unsure "what to believe". The examinable task is to interpret VARIABLE BP readings systematically rather than react to the highest number: assess MEASUREMENT TECHNIQUE and confounders (validated/calibrated machine, correct CUFF SIZE, seated and rested 5 minutes, arm supported at heart level, no talking, no caffeine/smoking/exercise beforehand, multiple readings/averaging, same arm \u2014 check the higher-reading arm), recognise WHITE-COAT and masked effects, screen for POSTURAL HYPOTENSION (lying/standing BP \u2014 especially on amlodipine and at her age, with symptoms of dizziness/falls), consider other causes of variability (arrhythmia e.g. AF making oscillometric readings unreliable, anxiety, irregular medication adherence, pain), and standardise the approach \u2014 teach correct home monitoring, arrange ABPM/clinic confirmation, check pulse/rhythm, and review medication accordingly. Reassure and reduce anxiety while not missing genuinely high readings or postural drops/arrhythmia. No NG12 cancer link.',
    script:{
      opening:'"Doctor, my home monitor is driving me mad \u2014 one minute it says 120-something, the next it\u2019s 178! I don\u2019t know what to believe or whether my tablets are working. I get myself in a state about it and then it goes up even more. Am I about to have a stroke? Should I be taking more tablets when it\u2019s high?"',
      facts:[
        { topic:'Don\u2019t react to the highest number \u2014 interpret systematically', text:'CORE \u2014 hugely variable readings are usually a MEASUREMENT/technique or physiological-variability issue, not evidence she needs more tablets for the highest value. Reacting to single high readings (or dosing reactively) is unsafe and anxiety-driven. Take a systematic approach to find WHY the readings vary before changing treatment.' },
        { topic:'Assess technique and confounders', text:'Most variability is TECHNIQUE/conditions. Check: a VALIDATED, calibrated machine; correct CUFF SIZE (a too-small cuff over-reads); seated and RESTED ~5 minutes; back/arm supported with arm at HEART LEVEL; feet flat, not talking; no caffeine, smoking, exercise or full bladder beforehand; MULTIPLE readings a minute apart and AVERAGED (discarding the first); consistent time of day; and checking which arm reads higher (use that arm). Correcting these often resolves the "wild" variation.' },
        { topic:'Recognise white-coat / situational rises and anxiety', text:'BP genuinely varies through the day and rises with stress, anxiety, pain and activity \u2014 and her own anxiety about the readings creates a vicious cycle (worry \u2192 higher reading \u2192 more worry). Recognise white-coat effect and situational spikes, and address the anxiety itself as part of management, while not dismissing genuinely elevated averages.' },
        { topic:'Screen postural hypotension', text:'IMPORTANT \u2014 at 64 and on amlodipine, screen for POSTURAL (orthostatic) HYPOTENSION: measure lying/sitting and standing BP (drop of \u226520 systolic or \u226510 diastolic, especially with dizziness, light-headedness or falls). Low standing readings or symptoms may indicate over-treatment or autonomic issues and change the medication plan \u2014 the "low" readings in her set may be as important as the high ones.' },
        { topic:'Consider arrhythmia and other causes', text:'Consider an IRREGULAR PULSE/ARRHYTHMIA (e.g. atrial fibrillation), which makes oscillometric (automatic) home monitors UNRELIABLE and erratic \u2014 check the pulse/rhythm manually and consider an ECG; AF would also change overall management (stroke-risk/anticoagulation). Also consider irregular medication adherence, pain, and device error. Then STANDARDISE: teach correct home monitoring, arrange ABPM or standardised clinic readings to get a true picture, and review medication on reliable data.' },
        { topic:'The hidden agenda + reassurance', text:'HIDDEN AGENDA \u2014 her anxiety ("am I about to have a stroke? should I take more when it\u2019s high?") is itself driving readings up and risks reactive over-dosing. The skill is to reassure with a systematic explanation (variability is usually technique/physiology, not impending catastrophe), give her a clear correct-monitoring routine to regain confidence, screen the genuinely important things (postural drop, arrhythmia, true average), and review on reliable data \u2014 calming the anxiety while not missing real pathology.' },
      ],
      ice:{
        ideas:'The wildly different numbers mean her BP is dangerously unstable / her tablets aren\u2019t working; maybe she should take more when it\u2019s high.',
        concerns:'HIDDEN AGENDA \u2014 fear of imminent stroke and anxiety that itself pushes readings up; uncertainty "what to believe"; temptation to dose reactively.',
        expectations:'To know what to believe and whether to take more tablets. What she needs: systematic interpretation (technique/confounders), white-coat/anxiety recognition, postural and arrhythmia screening, standardised monitoring/ABPM, and reassurance \u2014 not reactive dosing.'
      },
      cues:['Home readings 118/74 to 178/100, anxious, unsure what to believe \u2014 interpret systematically; don\u2019t react to the highest number or dose reactively.','Check technique/confounders (cuff size, rest, arm at heart level, averaging) + recognise white-coat/anxiety cycle (worry raises readings).','Screen postural hypotension (lying/standing, on amlodipine at 64) and irregular pulse/AF (makes home monitors unreliable) \u2014 the low readings matter too.']
    },
    checkpoints:[
      { dom:'tasks', text:'Interprets variable readings SYSTEMATICALLY rather than reacting to the highest number \u2014 explicitly does NOT advise reactive extra dosing for single high readings' },
      { dom:'tasks', text:'Assesses TECHNIQUE/confounders \u2014 validated/calibrated machine, correct cuff size, 5-minute rest, arm supported at heart level, not talking, no caffeine/smoking/exercise/full bladder, multiple averaged readings, consistent timing, higher-reading arm' },
      { dom:'tasks', text:'Recognises WHITE-COAT/situational rises and the ANXIETY cycle (worry raises readings), addressing the anxiety as part of management without dismissing genuinely elevated averages' },
      { dom:'tasks', text:'Screens POSTURAL HYPOTENSION (lying/standing BP, drop \u226520/10, dizziness/falls) given her age and amlodipine \u2014 recognising the low readings/over-treatment may matter as much as the high ones' },
      { dom:'tasks', text:'Considers ARRHYTHMIA/irregular pulse (AF makes oscillometric monitors unreliable \u2014 check pulse/rhythm, ECG) and other causes (adherence, pain, device error), then STANDARDISES with correct home monitoring and ABPM/standardised clinic readings before changing treatment' },
      { dom:'rto',   text:'Reassures with a clear systematic explanation (variability is usually technique/physiology, not impending stroke), calming the anxiety that is itself raising readings, without dismissing real findings' },
      { dom:'rto',   text:'Gives a clear, confidence-restoring correct-monitoring routine and checks understanding (teach-back of technique)' },
      { dom:'gs',    text:'Safety-nets and follows up: ABPM/standardised readings and pulse/ECG check, review of medication on reliable data, postural-symptom and arrhythmia red flags, anxiety support, and when to seek urgent help (very high BP with symptoms) \u2014 systematic interpretation, not reactive dosing' },
    ],
    worked:[
      { lbl:'Calm + reframe', txt:'"First, take a breath \u2014 you are not about to have a stroke, and please don\u2019t take extra tablets when a reading\u2019s high; that can do harm. Wildly different numbers almost always mean something about how the readings are being taken, not that your pressure is dangerously swinging. Let\u2019s work out why."' },
      { lbl:'Sort the technique', txt:'"Tell me how you measure it \u2026 A few things matter a lot: sit and rest five minutes first, arm resting on a table level with your heart, feet flat, don\u2019t talk, no coffee or rushing beforehand, and take two or three readings a minute apart and use the average \u2014 not the one scary reading. Same arm each time."' },
      { lbl:'Name the anxiety loop', txt:'"You\u2019ve spotted it yourself \u2014 you get in a state and it goes up. That\u2019s real: worry pushes the reading up, which makes you worry more. Settling that loop is part of the treatment, not separate from it."' },
      { lbl:'Check the important things', txt:'"Two things I want to check properly: your blood pressure lying and then standing, because the tablet you\u2019re on can make it drop when you stand \u2014 those low readings matter \u2014 and your pulse, because an irregular heartbeat can make home monitors give crazy numbers. I may arrange a heart tracing."' },
      { lbl:'Get reliable data', txt:'"To really know your blood pressure, let\u2019s use a 24-hour monitor or a proper week of correctly-taken home readings. Then we judge your tablets on solid information, not on the alarming odd reading."' },
      { lbl:'Safety-net + review', txt:'"If you ever get a very high reading WITH symptoms \u2014 bad headache, chest pain, breathlessness, vision or speech changes \u2014 that\u2019s urgent, seek help. Otherwise, do the readings the way we\u2019ve agreed and we\u2019ll review with the monitor results. You\u2019ll feel much more in control once the numbers are reliable."' },
    ],
    learning:'Wildly variable home BP readings should be interpreted SYSTEMATICALLY, not reacted to by chasing the highest number or dosing reactively (which is unsafe and anxiety-driven). Most variability is a MEASUREMENT/technique or physiological issue: check a validated, calibrated machine and correct CUFF SIZE (too-small over-reads), ensure the patient is seated and rested ~5 minutes with the arm supported at HEART LEVEL, feet flat, not talking, with no caffeine/smoking/exercise/full bladder beforehand, takes MULTIPLE readings a minute apart and AVERAGES them (discarding the first), measures at a consistent time, and uses the higher-reading arm \u2014 correcting these often resolves the "wild" swings. Recognise WHITE-COAT and situational rises and the ANXIETY cycle (worry raises readings, which raises worry), and treat the anxiety as part of management without dismissing genuinely elevated averages. Importantly, at 64 and on amlodipine, SCREEN POSTURAL HYPOTENSION (lying/standing BP, a drop of \u226520 systolic or \u226510 diastolic, with dizziness/falls) \u2014 the low readings and possible over-treatment may matter as much as the high ones \u2014 and consider an IRREGULAR PULSE/ARRHYTHMIA such as atrial fibrillation, which makes oscillometric home monitors unreliable and erratic (check the pulse manually, consider an ECG, and note AF changes overall management). Also consider adherence, pain and device error. Then STANDARDISE: teach correct home monitoring, arrange ABPM or properly standardised clinic/home readings to get a true picture, and review medication on reliable data. The hidden agenda is anxiety (fear of imminent stroke, temptation to over-dose) that itself raises readings \u2014 reassure with a clear systematic explanation, restore confidence with a correct-monitoring routine, screen the genuinely important things (postural drop, arrhythmia, true average), and review on reliable data, calming the anxiety while not missing real pathology. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE NG136 hypertension \u00b7 correct BP measurement/HBPM \u00b7 postural hypotension \u00b7 AF & oscillometric monitor reliability',
      points:[
        { h:'Interpret, don\u2019t react', t:'Variable readings are usually technique/physiology, not a reason to dose reactively to the highest value. Find why before changing treatment.' },
        { h:'Technique & confounders', t:'Validated/calibrated machine, correct cuff size, 5-min rest, arm supported at heart level, feet flat, no talking, avoid caffeine/smoking/exercise/full bladder, multiple averaged readings, consistent timing, higher-reading arm.' },
        { h:'White-coat & anxiety', t:'BP varies with stress, pain and activity; anxiety about readings creates a worry\u2013rise cycle. Recognise white-coat effect; address anxiety as part of management; don\u2019t dismiss true elevated averages.' },
        { h:'Postural hypotension', t:'In older patients/on vasodilators (amlodipine), check lying/standing BP (drop \u226520 systolic or \u226510 diastolic, with dizziness/falls). Low standing readings may indicate over-treatment and matter as much as high ones.' },
        { h:'Arrhythmia & monitors', t:'AF/irregular pulse makes oscillometric home monitors unreliable/erratic. Check pulse manually, consider ECG; AF changes management (stroke risk/anticoagulation).' },
        { h:'Standardise the data', t:'Teach correct home monitoring and arrange ABPM or standardised clinic readings to obtain a true picture; review medication on reliable data, not single readings.' },
        { h:'Never do', t:'Never advise reactive extra dosing for single high readings; never react to the highest number; never ignore postural drops or an irregular pulse; never dismiss the anxiety; never change treatment on unreliable data.' },
        { h:'Safety-net & follow-up', t:'ABPM/standardised readings + pulse/ECG; medication review on reliable data; postural/arrhythmia red flags; anxiety support; urgent help if very high BP with symptoms (severe headache, chest pain, breathlessness, neuro/visual changes).' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c196, c197, c198, c199);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'insulin-start-beliefs': {
      ceg: ['Long-term conditions & cancer', 'Prescribing & pharmacology'],
      stem: {
        name: 'Sanjay Mehta', age: '59 years \u00b7 male',
        pmh: ['Type 2 diabetes, HbA1c 86 mmol/mol despite maximal oral therapy (\u00b1 GLP-1)', 'Mother: diabetes \u2192 blindness \u2192 insulin \u2192 death (his framing)', 'Taxi driver; needle-averse'],
        meds: ['Metformin', 'Gliclazide', '\u00b1 GLP-1 agonist'],
        allergy: 'NKDA',
        recent: '"Insulin means I\u2019ve failed \u2014 and I\u2019ll go blind like my mum. I can\u2019t have hypos at the wheel. I hate needles."',
        reason: 'Video consultation \u2014 recommending insulin.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Reframe failure', d:'T2DM is progressive \u2014 insulin is the natural step, not failure; validate the feeling.' },
        { t:'2\u20134',  h:'Address the blindness fear', d:'Complications come from poor control, not insulin; good control protects eyes/kidneys/nerves.' },
        { t:'4\u20137',  h:'Practical + hypos', d:'Fine painless needles, basal regimen, DSN; hypo recognition/treatment/carry carbs.' },
        { t:'7\u201310', h:'DVLA/driving', d:'Inform DVLA; "5 to drive"; don\u2019t drive hypo; carry carbs; stricter Group 2; document.' },
        { t:'10\u201312',h:'Shared decision', d:'Surface each fear; DSN/structured education; start gently; review closely; not coercion or capitulation.' }
      ],
      wordPics: {
        fail: 'Pushes insulin with facts while ignoring the failure/blindness beliefs; omits hypo or DVLA counselling; or gives up and accepts poor control.',
        pass: 'Reframes beliefs, educates practically, counsels hypos and DVLA, and reaches a shared decision.',
        exc:  'Elicits and reframes the failure/blindness beliefs empathically, educates on near-painless needles and the regimen, counsels hypoglycaemia and the DVLA/driving duty thoroughly, involves the DSN/structured education, and reaches a genuine shared decision \u2014 neither overriding fear nor accepting poor control.'
      },
      avoid: [
        { dont:'"Insulin isn\u2019t a big deal \u2014 your sugars are too high, you just need to start it."', instead:'"I hear that this feels like failure \u2014 it isn\u2019t; diabetes changes over time and this is the natural next step. Let\u2019s talk through your worries."', why:'Overriding the failure/blindness beliefs with facts alone loses engagement.' },
        { dont:'(Skipping driving) starting insulin without DVLA advice for a taxi driver.', instead:'"Because you drive for a living: you must tell the DVLA, check your sugar before driving \u2014 \u20185 to drive\u2019 \u2014 and carry fast sugar."', why:'Omitting the DVLA/driving and hypo counselling on insulin is a serious safety failure.' },
        { dont:'"If you really won\u2019t have insulin, we\u2019ll just leave your sugars as they are."', instead:'"I won\u2019t force it, but let\u2019s keep talking \u2014 your eyes and kidneys are exactly what good control protects."', why:'Capitulating to poor control abandons the duty to manage a high-risk HbA1c.' }
      ]
    },

    't2dm-traveller': {
      ceg: ['Health disadvantage & vulnerabilities', 'Ethnicity, culture & diversity'],
      stem: {
        name: 'Patrick Ward', age: '47 years \u00b7 male',
        pmh: ['Type 2 diabetes, poorly engaged: missed appointments, high HbA1c, little monitoring', 'Low literacy; moves location frequently; prior experiences of feeling judged', 'Gypsy/Traveller community'],
        meds: ['Metformin (variable adherence)'],
        allergy: 'NKDA',
        recent: '"I can\u2019t read your leaflets, we move around, last place made me feel a nuisance \u2014 don\u2019t just talk at me."',
        reason: 'Video consultation \u2014 poorly engaged type 2 diabetes.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Build trust', d:'Acknowledge prior poor experience; respectful, non-judgemental; signal partnership; thank him for coming.' },
        { t:'2\u20135',  h:'Drop the leaflets', d:'Plain verbal language + visual aids + teach-back; check understanding; offer advocate.' },
        { t:'5\u20137',  h:'Ask, don\u2019t assume', d:'Cultural humility \u2014 ask about his life/diet/priorities; no stereotyping; tailor to him.' },
        { t:'7\u201310', h:'Plan for a mobile life', d:'Portable record/summary; entitlement to care anywhere; prioritise the few highest-impact actions.' },
        { t:'10\u201312',h:'Pragmatic mgmt + open door', d:'Key medication, simple concrete changes, eyes/feet/renal; flexible monitoring; judgement-free return.' }
      ],
      wordPics: {
        fail: 'Hands over leaflets/forms, lectures, stereotypes or makes assumptions, imposes a rigid recall he\u2019ll miss; reinforces mistrust.',
        pass: 'Builds trust, communicates verbally with teach-back, and co-creates a flexible prioritised plan.',
        exc:  'Recognises the health inequality and builds genuine trust, communicates without written material (verbal/visual/teach-back), avoids stereotyping, co-creates a flexible plan for a mobile life (portable record, access anywhere, prioritised actions), manages pragmatically, and leaves him respected and willing to return.'
      },
      avoid: [
        { dont:'"Here are some leaflets on diabetes and diet \u2014 have a read and we\u2019ll book the full review."', instead:'"Forget the leaflets \u2014 let\u2019s talk it through plainly, and I\u2019ll check I\u2019ve explained it by asking you to tell it back."', why:'Relying on written information with low literacy alienates and fails the patient.' },
        { dont:'(Assuming) \u201cPeople in your community don\u2019t usually stick with this, do they?\u201d', instead:'"Tell me about your day-to-day and what gets in the way \u2014 we\u2019ll fit the diabetes around your life."', why:'Stereotyping/assumptions entrench mistrust and disengagement.' },
        { dont:'"You need to come to all your appointments and follow this full plan."', instead:'"Since you move about, let\u2019s keep a card you carry and nail just two key things \u2014 you can get care anywhere you are."', why:'A rigid pathway ignoring mobility/literacy sets the patient up to fail.' }
      ]
    },

    'htn-borderline-tablets': {
      ceg: ['Long-term conditions & cancer', 'Prescribing & pharmacology'],
      stem: {
        name: 'Neil Hartley', age: '58 years \u00b7 male',
        pmh: ['Raised clinic BP; home/ambulatory average ~142/88 (stage 1)', 'Well, asymptomatic; reluctant re lifelong tablets', 'No known target-organ damage yet'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"It\u2019s only a bit up and I feel fine \u2014 do I really need pills for life at 58?"',
        reason: 'Video consultation \u2014 borderline blood pressure / whether to treat.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Confirm first', d:'One clinic reading isn\u2019t a diagnosis \u2014 confirm with ABPM/HBPM; exclude white-coat.' },
        { t:'2\u20135',  h:'Risk-based decision', d:'Stage 1 \u2192 treat on QRISK \u226510%/target-organ damage/diabetes/CVD/renal, not the number alone.' },
        { t:'5\u20137',  h:'Assess the whole patient', d:'QRISK; ACR, bloods, ECG, fundi for organ damage; consider secondary causes.' },
        { t:'7\u20139',  h:'Lifestyle + reframe', d:'Lifestyle for everyone; "forever" not fixed \u2014 review/reduce if lifestyle lowers BP; explain real benefits.' },
        { t:'9\u201312', h:'Shared decision + review', d:'Genuine shared decision; monitoring/review whichever path; reassess QRISK over time.' }
      ],
      wordPics: {
        fail: 'Either starts lifelong tablets on a single clinic reading/the number alone, or dismisses the raised BP entirely; no QRISK/organ-damage assessment; no lifestyle.',
        pass: 'Confirms with ABPM/HBPM, makes a risk-based shared decision, and emphasises lifestyle.',
        exc:  'Confirms the diagnosis with ABPM/HBPM, individualises with QRISK and target-organ-damage assessment, emphasises lifestyle, reframes "forever" honestly, and makes a genuine shared, risk-based decision with monitoring/review \u2014 neither dismissing nor railroading.'
      },
      avoid: [
        { dont:'"Your BP\u2019s up \u2014 you\u2019ll need to be on a tablet from now on, I\u2019m afraid."', instead:'"Let\u2019s first confirm it with home/24-hour readings, then decide based on your overall heart-attack/stroke risk, not the number alone."', why:'Treating a single clinic reading on the number alone ignores diagnosis confirmation and risk-based stage-1 thresholds.' },
        { dont:'"142 is nothing \u2014 don\u2019t worry about it, you feel fine."', instead:'"It\u2019s borderline and worth taking seriously \u2014 we\u2019ll check your risk and any early effects on heart and kidneys."', why:'Dismissing stage-1 hypertension misses those who genuinely benefit from treatment.' },
        { dont:'"Once you start tablets you\u2019re on them for life, but that\u2019s just how it is."', instead:'"They\u2019re not necessarily forever \u2014 if lifestyle brings it down we can review and sometimes reduce or stop."', why:'Implying irreversible lifelong treatment is inaccurate and reduces engagement.' }
      ]
    },

    'htn-variable-readings': {
      ceg: ['Long-term conditions & cancer', 'Investigations & results'],
      stem: {
        name: 'Glenda Ferreira', age: '64 years \u00b7 female',
        pmh: ['Hypertension on amlodipine; \u26a0 home readings 118/74 to 178/100 \u2014 highly variable', 'Anxious about readings; tempted to dose reactively', '?postural symptoms / ?irregular pulse'],
        meds: ['Amlodipine 5 mg'],
        allergy: 'NKDA',
        recent: '"My machine gives totally different numbers \u2014 I don\u2019t know what to believe. Am I about to have a stroke? Should I take more when it\u2019s high?"',
        reason: 'Video consultation \u2014 variable home BP readings.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Calm + don\u2019t react', d:'Reassure; don\u2019t dose reactively to the highest number; variability is usually technique/physiology.' },
        { t:'2\u20135',  h:'Technique/confounders', d:'Cuff size, 5-min rest, arm at heart level, no talking/caffeine, average multiple readings, same arm.' },
        { t:'5\u20137',  h:'White-coat + anxiety loop', d:'Stress/pain raise BP; worry\u2192higher reading\u2192more worry; treat the anxiety as part of management.' },
        { t:'7\u20139',  h:'Postural + arrhythmia', d:'Lying/standing BP (amlodipine, age 64); check pulse/rhythm/ECG \u2014 AF makes monitors unreliable.' },
        { t:'9\u201312', h:'Standardise + safety-net', d:'ABPM/standardised readings; review meds on reliable data; urgent if very high BP + symptoms.' }
      ],
      wordPics: {
        fail: 'Reacts to the highest number / advises reactive extra dosing; never checks technique, postural BP or pulse; feeds the anxiety; changes meds on unreliable data.',
        pass: 'Addresses technique and white-coat, screens postural/arrhythmia, and standardises with ABPM before changing treatment.',
        exc:  'Interprets variability systematically (technique/confounders), recognises the white-coat/anxiety cycle, screens postural hypotension and arrhythmia (AF unreliability), standardises with ABPM/correct home monitoring, reassures and restores confidence, and reviews medication only on reliable data.'
      },
      avoid: [
        { dont:'"When it\u2019s high, take an extra tablet to bring it down."', instead:'"Please don\u2019t dose reactively \u2014 that can be dangerous; let\u2019s find why the readings vary and judge on reliable averages."', why:'Reactive dosing to single high readings is unsafe and ignores the cause of variability.' },
        { dont:'(Ignoring the low readings) focusing only on the 178.', instead:'"The low readings matter too \u2014 let\u2019s check your blood pressure lying and standing, as your tablet can cause drops."', why:'Missing postural hypotension/over-treatment in an older patient on amlodipine risks falls.' },
        { dont:'(No pulse check) accepting the erratic numbers at face value.', instead:'"Let me check your pulse \u2014 an irregular heartbeat can make home monitors give wild readings, and we\u2019d want a heart tracing."', why:'AF makes oscillometric monitors unreliable and changes management \u2014 it must be checked.' }
      ]
    }

  });

})();
