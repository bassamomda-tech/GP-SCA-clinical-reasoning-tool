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
    meta:{ age:59, sex:'M', setting:'Video consultation \u2014 recommending insulin for poorly controlled type 2 diabetes.', system:'Diabetes \u2014 starting insulin: beliefs, hypoglycaemia & driving', checked:'October 2026' },
    brief:'Mr Sanjay Mehta, 59, taxi driver, type 2 diabetes with HbA1c 86 mmol/mol despite maximal oral therapy (\u00b1 a GLP-1), is being advised to start insulin. He is resistant, equating insulin with personal FAILURE and with his late mother\u2019s diabetic complications ("she went blind, then insulin, then she died"), and is frightened of NEEDLES and of HYPOS affecting his driving/livelihood. The examinable task is the insulin-initiation consultation done well: ELICIT and ADDRESS the beliefs (insulin is not failure or punishment but a normal, effective step; his mother\u2019s outcome reflected the era/complications, not insulin causing harm), educate practically (injection technique is easy and near-painless; the regimen — NICE NG28: NPH or a basal insulin to start, and consider basal plus short- or rapid-acting insulin from the start when HbA1c is 75 mmol/mol or higher, as his is; review the sulfonylurea), and \u2014 critically \u2014 cover HYPOGLYCAEMIA (recognition, treatment, prevention) and the DVLA/DRIVING implications of insulin (DVLA Assessing fitness to drive, November 2025 edition, and INF294: notify the DVLA if insulin will last more than 3 months; check glucose no more than 2 hours before driving and every 2 hours while driving; 5.0 mmol/L or below — eat before driving; below 4.0 or hypo symptoms — do not drive, and wait 45 minutes after recovery; carry fast-acting carbohydrate; a taxi driver holds a Group 1 car licence, but council taxi/private hire licensing authorities generally apply the stricter Group 2 medical standard, so he must contact his licensing authority too), arrange structured education/DSN support, and make a shared decision. The hidden agenda is fear (of failure, blindness, hypos and losing his licence/income).',
    script:{
      opening:"(Defensive, a bit ashamed, sitting in his taxi between fares.) \"So you're saying I need to go on insulin now. Honestly, that feels like I've failed — like I haven't tried hard enough. And insulin… my mum went on insulin, then she went blind, then everything fell apart. I don't want to end up like that. And I drive a taxi all day — I can't be having funny turns at the wheel. I really don't want needles.\"",
      facts:[
        { topic:"Why it feels like failure", text:"\"Because the tablets were meant to work. If I need injections, it means I messed up.\"" },
        { topic:"Taking his tablets", text:"\"I take them. Mostly. The odd one goes if I'm on a long shift.\" Metformin 1 g twice daily, gliclazide 160 mg twice daily, sitagliptin 100 mg daily. Tried semaglutide injections last year — stopped after 2 months due to nausea." },
        { topic:"Hypos", text:"\"No, never had that\" — no shakes, sweats or confusion so far. Doesn't test his sugar at home; has no meter." },
        { topic:"Symptoms", text:"\"Nothing I've really noticed\" — if asked specifically: thirsty, up twice a night to pass urine, tired. No weight loss. No eye or foot problems so far; retinal screening last year showed \"a few spots\" (background retinopathy)." },
        { topic:"Driving", text:"\"Council licence, yes. Long days, ten hours sometimes.\" Private hire driver, 6 days a week. Has never had to tell the DVLA anything." },
        { topic:"His mother", text:"\"Her sugar was bad for years. Then they put her on insulin, and after that her eyes went, then her kidneys. She died. So in my head, insulin is where it all goes wrong.\" She was diagnosed in her forties and rarely saw a doctor." },
        { topic:"Background", text:"Type 2 diabetes for 12 years. High blood pressure (ramipril) and cholesterol (atorvastatin). No allergies. Non-smoker, doesn't drink. Married, three children (youngest 16). BMI 29. Eats one big meal late at night after shifts." },
        { topic:"What he hoped for", text:"\"Honestly, that you'd say I can try harder with the tablets instead.\"" },
        { topic:"How to play it", text:"Defensive and frightened. If the doctor pushes insulin without exploring his beliefs, become firmer: \"I'm not doing it.\" Softens when told it isn't his fault: \"So it's not because I've been rubbish.\" Main worry: \"And the driving? That's my living.\" Accepts honest DVLA advice: \"I'd rather know now than get caught out.\" Prefers learning with a nurse: \"If I can see it, I think I can do it.\"" }
      ],
      ice:{
        ideas:"\"Insulin means I've failed — and it's what made my mum go blind.\"",
        concerns:"HIDDEN AGENDA — fear of ending up like his mother; fear of needles; fear of a hypo at the wheel and of losing his taxi licence and income.",
        expectations:"\"To stay on tablets and try harder.\""
      },
      cues:[
        "\"I've failed.\" — the belief to reframe.",
        "\"My mum went blind.\" — explore what he thinks caused it.",
        "\"I drive a taxi all day.\" — livelihood and DVLA."
      ]
    },
    checkpoints:[
      { dom:'ro', text:'ELICITS and reframes the "insulin = failure" belief \u2014 explaining type 2 diabetes is progressive (declining pancreatic insulin) so insulin reflects the natural course, not lack of effort \u2014 validating the feeling while correcting it' },
      { dom:'ro', text:'Explores and corrects the "insulin caused my mum\u2019s blindness" misattribution \u2014 complications reflect poorly controlled diabetes/era, and good control (which insulin aids) REDUCES complication risk' },
      { dom:'cm', text:'Provides practical education \u2014 reassurance re fine near-painless needles, injection technique/site rotation, the NICE NG28 regimen (basal, or basal plus short/rapid-acting from the start with HbA1c ≥75), titration and sulfonylurea review — and arranges DSN/structured-education support' },
      { dom:'cm', text:'Counsels HYPOGLYCAEMIA thoroughly: recognition, treatment with 15–20 g fast-acting carbohydrate, recheck at 10–15 minutes, then longer-acting snack, carrying carbs, risk factors (missed meals, alcohol, exercise) and when to seek help' },
      { dom:'cm', text:'Covers the DVLA/DRIVING duty for insulin \u2014 must inform DVLA (insulin >3 months), check glucose within 2 hours before and every 2 hours while driving (≤5.0 eat first; <4.0 do not drive, wait 45 minutes after recovery), carry fast-acting carbs, tell his taxi licensing authority, which applies the stricter Group 2 standard — and documents the advice' },
      { dom:'ro',   text:'Surfaces the layered FEAR (failure, his mother\u2019s fate, hypos, losing his licence) empathically and corrects misconceptions WITH the patient rather than overriding him with facts' },
      { dom:'ro',   text:'Frames the driving issue supportively (good management usually permits continued driving), checks understanding, and works toward a SHARED decision rather than coercion or capitulation' },
      { dom:'cm',    text:'Safety-nets and follows up: DSN referral/structured education, hypo and sick-day rules, the DVLA notification and driving advice documented, titration and review plan, and complication-screening reassurance \u2014 a shared, well-supported insulin start, not facts-over-fear or accepting poor control' },
    ],
    worked:[
      { lbl:'Validate, then reframe failure', txt:'"I really hear that this feels like failure \u2014 but I want to gently challenge that. Type 2 diabetes changes over the years; the body makes less of its own insulin, so needing it now is just the natural course, not you not trying hard enough. Lots of people reach this point."' },
      { lbl:'Address the fear about his mum', txt:'"Tell me about your mum \u2026 I\u2019m so sorry. Here\u2019s something important, though: it wasn\u2019t the insulin that caused her blindness \u2014 that comes from diabetes being out of control for a long time. Good control, which insulin helps with, actually PROTECTS your eyes, kidneys and nerves. We\u2019re using it to avoid her path, not repeat it."' },
      { lbl:'Demystify the needles', txt:'"The needles aren\u2019t what you\u2019re picturing \u2014 they\u2019re tiny and most people say they barely feel them. We might start with one injection a day, though with your sugar level we should also talk about adding a quick-acting one at meals from the start, and our diabetes nurse will show you exactly how and support you. We’d also look again at your gliclazide, because with insulin it adds to the hypo risk. Would it help to see one now?"' },
      { lbl:'Hypos \u2014 make it manageable', txt:'"The thing to know about is a \u2018hypo\u2019 \u2014 blood sugar dropping too low: sweaty, shaky, hungry. The fix is simple — something sugary like glucose tabs or juice, check again after 10 to 15 minutes, then a snack. You\u2019ll always carry fast sugar. Knowing this makes it very manageable."' },
      { lbl:'The driving conversation', txt:'"Because you drive for a living, two musts: you have to tell the DVLA you’re on insulin, and your council licensing team, who use the stricter lorry and bus standard for taxis. You check your sugar within 2 hours before driving and every 2 hours on shift — ‘five to drive’: at 5 or below, eat something first. Below 4, or feeling hypo, don’t drive, and wait 45 minutes after it’s back to normal. With good control, people carry on driving fine \u2014 this protects your licence, it doesn\u2019t automatically end it."' },
      { lbl:'Shared decision + support', txt:'"I don\u2019t want to push insulin on you \u2014 I want you to feel okay about it. How does it sound now we\u2019ve talked it through? Let\u2019s get the diabetes nurse involved, start gently, and review closely. You\u2019re not doing this alone."' },
    ],
    learning:'Starting insulin in type 2 diabetes is as much about BELIEFS and SAFETY as pharmacology. Elicit and reframe the common feeling that insulin means personal FAILURE: type 2 diabetes is PROGRESSIVE \u2014 the pancreas makes less insulin over time \u2014 so needing insulin reflects the natural course, not a lack of effort, and is a positive, effective step. Explore and correct the frequent misattribution that "insulin caused my relative\u2019s blindness/decline": complications such as retinopathy, nephropathy and neuropathy arise from poorly controlled diabetes (and, for older relatives, an earlier treatment era), whereas good glucose control \u2014 which insulin helps achieve \u2014 REDUCES that risk. Provide practical education (fine, near-painless pen needles; technique and site rotation; a basal-insulin start titrated to fasting glucose, or — per NICE NG28 — basal plus short- or rapid-acting insulin from the start when HbA1c is 75 mmol/mol or higher; review of a sulfonylurea; DSN/structured-education support). Counsel HYPOGLYCAEMIA thoroughly \u2014 recognition (sweating, tremor, hunger, palpitations, confusion), treatment with 15–20 g of fast-acting carbohydrate, rechecked after 10–15 minutes, then a longer-acting snack (JBDS-IP), always carrying carbs, risk factors (missed meals, alcohol, exercise) and when to seek help. Critically, cover the DVLA/DRIVING duty for insulin: the patient MUST inform the DVLA if insulin will last more than 3 months, check glucose no more than 2 hours before driving and every 2 hours while driving (5.0 mmol/L or below — eat before driving; below 4.0 — do not drive, and wait 45 minutes after recovery), carry fast-acting carbohydrate, and never drive with impaired hypo awareness (DVLA Assessing fitness to drive, November 2025 edition; INF294) — and a taxi driver, though licensed under Group 1, must also tell the council licensing authority, which generally applies the stricter Group 2 standard (no severe hypo in 12 months, twice-daily monitoring, CGM allowed since November 2025); advise clearly, document, and frame supportively because good management usually permits continued driving. The hidden agenda is layered fear (failure, a relative\u2019s fate, hypos, losing licence/income); surface and address each empathically, equip the patient with hypo and driving knowledge, involve the DSN, and reach a SHARED decision \u2014 neither overriding fear with facts alone nor capitulating to ongoing poor control.',
    knowledge:{
      guideline:'[1] NICE NG28 (type 2 diabetes in adults: management, updated February 2026) · [2] DVLA Assessing fitness to drive: a guide for medical professionals (November 2025 edition) · [3] DVLA INF294, A guide to insulin-treated diabetes and driving · [4] JBDS-IP, Hospital management of hypoglycaemia in adults with diabetes · insulin initiation · hypoglycaemia management · DVLA diabetes and driving rules',
      points:[
        { h:'Insulin is not failure', t:'T2DM is progressive (declining beta-cell function); insulin is a natural, effective step, not a failure of effort. Validate the feeling and reframe.' },
        { h:'Correct the complication myth', t:'Complications (retinopathy/nephropathy/neuropathy) reflect poor control, not insulin. Good control (aided by insulin) reduces them. Address relative\u2019s-fate fears empathically.' },
        { h:'Practical education', t:'Fine, near-painless pen needles; technique/site rotation; NICE NG28: NPH or basal insulin to start, and consider basal plus short/rapid-acting from the start if HbA1c ≥75 mmol/mol (his is 86); continue metformin, review the sulfonylurea; DSN/structured education support.' },
        { h:'Hypoglycaemia', t:'Recognise (sweating, tremor, hunger, palpitations, confusion); treat with 15–20 g fast-acting carbohydrate, recheck in 10–15 minutes, then longer-acting snack (JBDS-IP); always carry carbs; risk factors (missed meals, alcohol, exercise); seek help if severe.' },
        { h:'DVLA & driving', t:'Must inform DVLA if insulin will last more than 3 months (DVLA, November 2025). Check glucose no more than 2 hours before and every 2 hours while driving; 5.0 mmol/L or below — eat first ("five to drive"); below 4.0 — don’t drive, wait 45 minutes after recovery; carry fast-acting carbs; no driving with impaired hypo awareness. Taxi = Group 1 licence, but the council licensing authority applies the stricter Group 2 standard (CGM allowed for Group 2 since November 2025). Document advice.' },
        { h:'Supportive framing', t:'Good management usually permits continued driving \u2014 frame the DVLA step as protecting the licence and safety, not ending the job.' },
        { h:'Never do', t:'Never dismiss the failure/relative-fate beliefs; never start insulin without hypo and DVLA counselling; never omit DSN/structured education; never coerce or, conversely, accept ongoing poor control to avoid the conversation.' },
        { h:'Safety-net & follow-up', t:'DSN referral/structured education; hypo and sick-day rules; DVLA notification and driving advice documented; titration and review plan; complication-screening reassurance; shared decision.' },
        { h:"Practical education — needles and regimen", t:"Address the needle fear practically: modern pen needles are very fine and injections are near-painless; demonstrate/teach technique, rotation of sites, storage. Explain the proposed regimen: NICE NG28 offers NPH insulin once or twice daily, or a basal insulin intended for once- or twice-daily use, as initial insulin, and advises considering basal plus short- or rapid-acting insulin from the start, especially when HbA1c is 75 mmol/mol or higher — his is 86, so this option must be discussed rather than assuming once-daily basal alone; continue metformin unless contraindicated and review the other agents, particularly the sulfonylurea (hypoglycaemia risk); doses per BNF. Explain how to titrate, and that the diabetes specialist nurse (DSN)/structured programme (NG28: technique, self-monitoring, titration, diet, DVLA guidance, hypoglycaemia and acute glucose changes) will support him. Check his retinal screening is up to date before glucose is brought down. Confidence and competence reduce fear." }
      ]
    }
  };

  /* ============ 197. F2F — T2DM in a Traveller patient: health-literacy and trust, not leaflets ============ */
  const c197 = {
    id:'t2dm-traveller', title:'"I can\u2019t read your leaflets, and we move around a lot \u2014 don\u2019t just talk at me, doc"', type:'video', duration:12,
    meta:{ age:47, sex:'M', setting:'Video consultation \u2014 a man from the Traveller community with poorly engaged type 2 diabetes.', system:'Diabetes / Health inequalities \u2014 health-literacy, culture & building trust', checked:'October 2026' },
    brief:'Mr Patrick Ward, 47, from the Gypsy/Traveller community, has type 2 diabetes that has been poorly engaged with: missed appointments, a high HbA1c, little monitoring. He has low literacy, moves location frequently, and has had previous experiences of feeling judged or dismissed by services. He is wary but has come today. The examinable task is the HEALTH-INEQUALITIES / HEALTH-LITERACY consultation: recognise the well-documented health disadvantage and shorter life expectancy in Gypsy/Traveller communities (EHRC Research report 12, 2009; Romany Gypsies and Irish Travellers are protected ethnic groups under the Equality Act 2010) and the barriers (literacy, mistrust from discrimination, mobility/continuity, access), BUILD TRUST and rapport, avoid assumptions/stereotyping, communicate WITHOUT relying on written leaflets (verbal, teach-back, visual aids, simple language), co-create a realistic and FLEXIBLE plan that works with a mobile lifestyle (portable records, where to access care when moving — NHS England patient registration standard operating principles: no proof of address is needed to register, temporary residence for up to 3 months, immediately necessary treatment anywhere — prioritising the few most important things), offer an advocate if he would like one (he speaks English, so an interpreter is not the issue — literacy is), and address diabetes management pragmatically (NICE NG28: individual HbA1c target; accessible structured education), asking what he drives before giving any DVLA advice. The skill is partnership and cultural humility, NOT "talking at" him or handing over leaflets he can’t use.',
    script:{
      opening:"(Wary, arms folded, direct.) \"I'll be honest with you — I've not bothered much with all this diabetes stuff. I can't read your leaflets and forms, and we move around a fair bit so I never see the same doctor twice. Last place made me feel like a nuisance. I'm only here 'cause the wife's worried. So don't just talk at me, alright?\"",
      facts:[
        { topic:"Name", text:"If asked how he'd like to be addressed: \"Patrick's fine.\"" },
        { topic:"Past care", text:"\"Kept going on about missed appointments. Gave me forms. Looked at me like I was trouble. So I stopped going.\" Letters go to old addresses." },
        { topic:"Wife's worry", text:"\"She thinks I'll end up like people she's seen — bad feet, bad eyes. She nags me.\" His uncle lost a leg to diabetes." },
        { topic:"Tablets", text:"\"On and off. When we move I run out and don't always get more.\" Metformin — took it most days until a month ago; ran out. Doesn't know the name, recognises \"the big white ones\". No other medicines. No allergies." },
        { topic:"Symptoms", text:"\"Nothing that's stopped me.\" If asked specifically: thirsty, up at night to pass urine, tingling in his feet sometimes, a cut on his foot that was slow to heal last month (now healed). Eyesight blurry at times. Never had eye screening." },
        { topic:"Smoking and drink", text:"\"I'd rather not get into that today.\" If returned to gently at the end: smokes 20 a day." },
        { topic:"Driving and work", text:"If asked: \"Depends. Why?\" — drives a van for landscaping and tarmac work; car licence only. Not on insulin or gliclazide." },
        { topic:"Diet and life", text:"Lives on a site with his wife and four children; moves around 3–4 times a year, often in the north-west. Lots of tea with sugar, white bread, takeaways on the road." },
        { topic:"Phone", text:"Has a smartphone; his daughter reads texts to him. \"That'd help. I lose papers.\"" },
        { topic:"How to play it", text:"Guarded; tests whether he'll be judged. If the doctor makes a deal not to lecture: \"Deal.\" If handed leaflets or lectured, shut down: \"See, this is what I mean.\" Opens up when asked what matters to him: \"Something simple I can actually do. And the wife off my back.\" Engaged by plain explanation of eyes and feet: \"Nobody's told me that.\"" }
      ],
      ice:{
        ideas:"\"Diabetes care is forms and lectures — it's never been for me.\"",
        concerns:"HIDDEN AGENDA — being treated as trouble or a nuisance again; not being able to read; his wife's fear of feet and eyes (his uncle's leg).",
        expectations:"\"Something simple I can actually do.\""
      },
      cues:[
        "\"Don't just talk at me.\" — needs partnership and plain speech.",
        "\"I can't read your leaflets.\" — avoid written information.",
        "\"The wife's worried.\" — ask what she is worried about."
      ]
    },
    checkpoints:[
      { dom:'ro', text:'Recognises the health INEQUALITY (Gypsy/Traveller communities have among the worst UK outcomes/shortest life expectancy) and prioritises BUILDING TRUST \u2014 acknowledging prior poor experiences, being respectful and non-judgemental, signalling partnership' },
      { dom:'ro', text:'Communicates WITHOUT relying on written material \u2014 plain verbal language, visual aids, teach-back, no jargon, repeated understanding checks \u2014 and offers an advocate if helpful (he speaks English; the barrier is literacy, not language)' },
      { dom:'ro', text:'Avoids ASSUMPTIONS/stereotyping \u2014 asks about and tailors to his actual circumstances, diet, beliefs and priorities, respecting autonomy and countering the sense of being judged' },
      { dom:'cm', text:'Co-creates a FLEXIBLE plan for a mobile life \u2014 a portable record/summary, how to access care when moving (NHS England registration principles: no proof of address needed, temporary residence up to 3 months, immediately necessary treatment anywhere; walk-in), and prioritising the FEW most important actions rather than an overwhelming standard pathway' },
      { dom:'cm', text:'Manages the diabetes PRAGMATICALLY \u2014 highest-impact achievable steps (key medication, concrete simple dietary changes, smoking, BP, essential complication screening: eyes/feet/renal, an individual HbA1c target per NICE NG28, and asks what he drives before any DVLA advice) with feasible monitoring and continuity workarounds' },
      { dom:'ro',   text:'Earns trust through manner \u2014 warm, respectful, unhurried, explicitly non-judgemental \u2014 reading the wariness as a response to prior discrimination, and treats the wife\u2019s worry as the opening' },
      { dom:'ro',   text:'Checks understanding with teach-back throughout, shares decisions, and leaves him feeling respected and willing to return' },
      { dom:'cm',    text:'Safety-nets and follows up: a realistic, written-light plan he can actually use, a portable record, clear next steps and how to access care wherever he is, prioritised review, and an open door \u2014 partnership and accessibility, not leaflets or "talking at" him' },
    ],
    worked:[
      { lbl:'Acknowledge + reset', txt:'"Thank you for coming in \u2014 I know it took something to do that, especially if you\u2019ve been made to feel a nuisance before. That\u2019s not how this will go. We\u2019ll sort this out together, at your pace, and I won\u2019t just talk at you."' },
      { lbl:'Ditch the leaflets', txt:'"Forget the leaflets \u2014 we\u2019ll talk it through, and I\u2019ll keep it plain. Stop me any time. And now and then I\u2019ll ask you to tell it back to me \u2014 not to test you, just to check I\u2019ve explained it properly. That fair?"' },
      { lbl:'Ask, don\u2019t assume', txt:'"Tell me about your day-to-day \u2014 what you eat, how you\u2019re feeling, what gets in the way. I don\u2019t want to assume anything; you know your life best, and we\u2019ll fit the diabetes around it, not the other way round."' },
      { lbl:'A plan that travels', txt:'"Since you move about, let\u2019s do two things: I\u2019ll give you a simple card with your diagnosis and tablets on it, so any doctor anywhere can pick it up — you’re entitled to care wherever you are, and a practice can’t turn you away for not having a fixed address. And we\u2019ll keep it simple: a couple of the most important things rather than a big list."' },
      { lbl:'Prioritise ruthlessly', txt:'"If we just nail two things to start \u2014 taking this one tablet regularly, and getting your eyes and feet checked \u2014 that alone makes a real difference. We can build from there. What feels doable for you?"' },
      { lbl:'Open door + safety-net', txt:'"You can come back to me \u2014 or any practice when you\u2019re moving \u2014 and you won\u2019t get grief. If you get very thirsty, drowsy, or unwell, get seen urgently. Tell your wife we\u2019ve made a start. I\u2019m glad you came, and I mean that."' },
    ],
    learning:'This is a HEALTH-INEQUALITIES / health-literacy consultation. Gypsy/Traveller communities experience among the WORST health outcomes and shortest life expectancy in the UK (EHRC Research report 12, 2009), driven by discrimination, mistrust of services, low literacy, poor continuity from a mobile lifestyle, and access barriers \u2014 so the FIRST task is to BUILD TRUST: acknowledge prior poor experiences, be respectful and explicitly non-judgemental, thank him for coming, and signal genuine partnership, because without trust nothing else lands. Do NOT rely on written information: with low literacy, leaflets and forms are useless or alienating, so communicate verbally in plain language, use visual aids and TEACH-BACK, avoid jargon, check understanding repeatedly, and offer an advocate if helpful (for an English speaker with low literacy, an interpreter is not the need) \u2014 "talking at" him or handing over leaflets is precisely the failure to avoid. Practise cultural HUMILITY: do not stereotype or assume his diet, beliefs or willingness; ask, listen, and tailor to his circumstances and priorities, respecting his autonomy and actively countering the sense of being judged that drives disengagement. Co-create a REALISTIC, FLEXIBLE plan for a mobile life \u2014 a portable record/summary of diagnosis and medication, clarity that he is entitled to care anywhere (NHS England patient registration standard operating principles: registration without proof of address, temporary residence for up to 3 months, immediately necessary treatment; walk-in/urgent services) and how to access it when moving, and prioritisation of the FEW highest-impact achievable actions rather than an overwhelming standard pathway he cannot follow. Manage the diabetes pragmatically (key medication adherence, concrete simple dietary change, smoking, BP, and essential complication screening — eyes, feet per NICE NG19, renal — against an individual HbA1c target per NICE NG28) with feasible monitoring and continuity workarounds, asking what he drives before any DVLA advice. The hidden agenda is wariness rooted in discrimination and the practical realities of literacy and mobility, with the wife\u2019s worry the opening \u2014 earn trust this visit, make care accessible and flexible, prioritise ruthlessly, and leave him respected and willing to return, since a single good experience can transform engagement.',
    knowledge:{
      guideline:'[1] NICE NG28 (type 2 diabetes in adults: management, updated February 2026) · [2] NICE NG19 (diabetic foot problems) · [3] NHS England, Patient registration standard operating principles for primary medical care · [4] Equality Act 2010 · [5] EHRC Research report 12, Inequalities experienced by Gypsy and Traveller communities (2009) · [6] DVLA Assessing fitness to drive (November 2025 edition) · health inequalities — Gypsy/Traveller health · health-literacy and teach-back · inclusion health',
      points:[
        { h:'Recognise the inequality', t:'Gypsy/Traveller communities have among the worst UK health outcomes and shortest life expectancy (EHRC 2009; protected ethnic groups under the Equality Act 2010), driven by discrimination, mistrust, low literacy, mobility/continuity and access barriers. Building trust is the first task.' },
        { h:'Don\u2019t rely on writing', t:'With low literacy, use plain verbal language, visual aids and teach-back; avoid jargon; check understanding; offer an advocate (he speaks English — literacy, not language, is the barrier). Never depend on leaflets/forms or "talk at" the patient.' },
        { h:'Cultural humility', t:'Avoid assumptions/stereotyping about diet, beliefs or willingness. Ask, listen and tailor to the individual; respect autonomy; counter the sense of being judged.' },
        { h:'Plan for a mobile life', t:'Portable record/summary of diagnosis and medication; clarify entitlement to care anywhere (NHS England: registration without proof of address; temporary residence up to 3 months; immediately necessary treatment; walk-in/urgent); explain access when moving; prioritise the few highest-impact actions.' },
        { h:'Pragmatic management', t:'Focus on achievable high-impact steps (key medication, concrete dietary change, smoking, BP, essential complication screening — eyes/feet (NICE NG19)/renal — and an individual HbA1c target, NICE NG28; ask what he drives before any DVLA advice) with feasible monitoring and continuity workarounds, not a rigid recall he will miss.' },
        { h:'Earn trust through manner', t:'Warm, respectful, unhurried, non-judgemental; acknowledge prior discrimination; treat a worried family member\u2019s prompt as the opening; a single good experience can change engagement.' },
        { h:'Never do', t:'Never rely on leaflets/forms with low literacy; never stereotype or assume; never lecture or "talk at" the patient; never impose an overwhelming standard pathway; never let prior disengagement justify a dismissive manner.' },
        { h:'Safety-net & follow-up', t:'A simple usable plan, portable record, clear next steps and how to access care anywhere, prioritised review, urgent red flags (thirst/drowsiness/unwell), and an open, judgement-free door.' },
        { h:"Pragmatic diabetes management", t:"Manage the diabetes pragmatically within these constraints: focus on the highest-impact, achievable steps (medication adherence, simple dietary changes discussed concretely, smoking, blood-pressure and the essential complication screening — retinopathy via the NHS Diabetic Eye Screening Programme, annual foot risk assessment per NICE NG19, renal), an individual HbA1c target agreed with him (NICE NG28), arrange what monitoring is feasible, and build in flexibility and continuity workarounds rather than insisting on a rigid recall schedule he will miss. Ask what he drives before any driving advice: DVLA (November 2025 edition) — Group 1 drivers on diet or tablets that do not cause hypoglycaemia need not notify; Group 2 (lorry, bus) drivers on tablets must." }
      ]
    }
  };

  /* ============ 198. F2F — Borderline home BP: does he really need tablets at 58? ============ */
  const c198 = {
    id:'htn-borderline-tablets', title:'"My readings are only a bit up \u2014 do I really need to be on pills for the rest of my life at 58?"', type:'video', duration:12,
    meta:{ age:58, sex:'M', setting:'Video consultation \u2014 discussing borderline blood pressure and whether to treat.', system:'Cardiovascular \u2014 hypertension: diagnosis thresholds, CVD risk & shared decision-making', checked:'October 2026' },
    brief:'Mr Neil Hartley, 58, well, was found to have a raised clinic BP at a check; home/ambulatory readings average around 142/88. He is reluctant to start lifelong tablets for numbers that are "only a bit up". The examinable task is the hypertension decision done well: CONFIRM the diagnosis correctly (clinic reading confirmed by ABPM or HBPM — NICE NG136: stage 1 hypertension is clinic 140/90–159/99 with ABPM/HBPM average 135/85–149/94), then make a SHARED, RISK-BASED decision \u2014 in stage 1 hypertension under 80, NG136 says DISCUSS starting drug treatment based on overall CARDIOVASCULAR RISK (QRISK3, NICE NG238), target-organ damage, established CVD, diabetes, renal disease, and consider it under 60 even with a 10-year risk below 10% — NOT the BP number alone; for a man of 58 estimate QRISK3 and discuss (if he chooses a tablet, NG136 first line at 55 or over is a calcium-channel blocker). Emphasise LIFESTYLE first/alongside (weight, salt, alcohol, exercise, smoking, diet), explain the genuine benefits and the honest reframing that treatment is reviewed at least annually and a dose reduction can be discussed if lifestyle lowers BP (clinical practice, not an NG136 recommendation), though for many people it is long term, address his autonomy and concerns about medication, and arrange monitoring and review. The skill is neither dismissing nor railroading — a genuine shared, evidence-based decision.',
    script:{
      opening:"(Friendly, sceptical, reasonable.) \"The nurse said my blood pressure was up and I should see you about tablets. But honestly, it's only a bit high, isn't it? 142-ish. I feel completely fine. Do I really need to be on pills for the rest of my life at 58? Once you start them, that's it, isn't it — you're on them forever.\"",
      facts:[
        { topic:"The readings", text:"\"Home readings and the nurse's monitor. That was the average\" — 7 days of home readings averaging 142/88. Clinic reading was 152/94." },
        { topic:"Symptoms", text:"\"None of that. I feel fine\" — no headaches, chest pain, breathlessness, visual problems or palpitations." },
        { topic:"Risk factors", text:"\"Not that I know of. I've not had bloods for ages\" — no diabetes, kidney problems, heart disease or stroke known. Dad had a heart attack at 66. Ex-smoker (stopped 10 years ago). BMI 28. Drinks about 18 units a week. Likes salty food — adds salt at the table." },
        { topic:"Medicines", text:"\"No, nothing regular.\" Occasional ibuprofen for his back. No allergies." },
        { topic:"Lifestyle", text:"Office-based civil engineer. Walks the dog at weekends. Takeaways twice a week." },
        { topic:"His view", text:"\"I'm well. I don't want to be a patient. Once you're on pills, you're a patient.\" Wants \"Proper reasons. Not just 'the number says so'.\"" },
        { topic:"How to play it", text:"Sceptical but open to evidence. If the doctor simply prescribes, push back politely. If the doctor explains risk-based decision-making: \"So it might not need tablets at all?\" and \"And if it's high?\" Appreciates fairness: \"That's fairer than I expected.\" Will choose lifestyle changes: \"Salt, probably. And more walking.\"" }
      ],
      ice:{
        ideas:"\"It's only a bit high and I feel fine — tablets would be for life.\"",
        concerns:"HIDDEN AGENDA — doesn't want to become \"a patient\"; wants control; his dad's heart attack is in the back of his mind.",
        expectations:"\"Proper reasons\" before any tablets — ideally to avoid them."
      },
      cues:[
        "\"Once you're on pills, you're a patient.\" — what medication means to him.",
        "\"Proper reasons.\" — wants risk explained, not just the number.",
        "Dad's heart attack — only if family history is asked."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'CONFIRMS the diagnosis properly \u2014 clinic reading verified by ABPM or HBPM (NICE NG136 stage 1 = clinic 140/90–159/99 with ABPM/HBPM average 135/85–149/94) \u2014 rather than treating a single clinic reading, and recognises white-coat effect' },
      { dom:'cm', text:'Knows stage 1 treatment is a RISK-BASED decision — NICE NG136: discuss starting drugs (under 80) with target-organ damage, established CVD, renal disease, diabetes, or QRISK3 ≥10% (and consider if <60 even with lower 10-year risk), first-line calcium-channel blocker at 55 or over — NOT the BP number alone' },
      { dom:'dg', text:'Assesses the whole picture \u2014 estimates QRISK, checks for target-organ damage (urine ACR and haematuria dipstick, renal function/HbA1c/lipid bloods, ECG for LVH, fundi — arranged face to face), and considers secondary causes if features suggest' },
      { dom:'cm', text:'Emphasises LIFESTYLE (weight, salt, alcohol, exercise, diet, smoking, caffeine) for everyone, whether or not drugs start, as a meaningful BP/CVD-risk intervention' },
      { dom:'ro', text:'Reframes "tablets forever" honestly — treatment is reviewed at least annually and a dose reduction can be discussed if lifestyle lowers BP (clinical practice), though often long term; and where treatment is warranted, explains the genuine absolute benefits (stroke/MI/renal/eye protection)' },
      { dom:'ro',   text:'Reads the reluctance (feeling well, anti-medicalisation, wanting control), respects his autonomy, and makes a genuine SHARED decision \u2014 neither dismissing the raised BP nor railroading him onto lifelong tablets' },
      { dom:'ro',   text:'Explains risk and the decision in terms he can weigh, checks understanding, and supports an informed choice' },
      { dom:'cm',    text:'Safety-nets and follows up: arranges the confirmatory/assessment tests, a monitoring/review plan whichever path is chosen, lifestyle support, when to reassess (and reconsider medication), and review of QRISK over time \u2014 a confirmed, risk-based, shared decision' },
    ],
    worked:[
      { lbl:'Slow down \u2014 confirm first', txt:'"Good question, and I don\u2019t want to put you on anything you don\u2019t need. First, one raised reading isn\u2019t a diagnosis \u2014 let\u2019s make sure it\u2019s genuinely up using home or 24-hour readings, not just the clinic, because some people\u2019s rises only in here."' },
      { lbl:'Explain the real decision', txt:'"Here\u2019s the key thing: at this level, whether to treat isn\u2019t about the number alone \u2014 it\u2019s about your overall risk of heart attack and stroke over the next ten years. I\u2019ll work that out with a score, check for any early effects on your heart and kidneys, and then we decide together."' },
      { lbl:'Individualise', txt:'"Let me estimate that risk \u2014 it uses your age, cholesterol, whether you smoke, family history and so on \u2014 and arrange a urine test, some bloods, a heart tracing and a look at the back of your eyes at the surgery. If those show your risk is low and there\u2019s no damage, lifestyle alone may be reasonable. If they don\u2019t, tablets genuinely protect you."' },
      { lbl:'Lifestyle as real medicine', txt:'"Either way, the lifestyle stuff isn\u2019t a fob-off \u2014 cutting salt and alcohol, losing a little weight, regular walking can drop your pressure meaningfully, sometimes enough to avoid or reduce tablets. That puts a lot back in your hands."' },
      { lbl:'Reframe "forever"', txt:'"And ‘on them for life’ isn’t automatic — we review every year, and if your lifestyle brings the pressure down we can talk about reducing the dose, though for many people it is long term. If you do need them, they\u2019re quietly preventing a stroke years down the line, which is worth a lot even though you feel fine now."' },
      { lbl:'Shared decision + review', txt:'"So nothing\u2019s being forced today. Let\u2019s get the readings and tests, I\u2019ll show you your risk score, and we\u2019ll make the call together. We\u2019ll review it whatever we decide \u2014 this isn\u2019t a one-way door. Does that feel fair?"' },
    ],
    learning:'A borderline blood-pressure decision is made in stages. First CONFIRM the diagnosis \u2014 do not treat a single clinic reading; verify with ambulatory (ABPM) or home (HBPM) monitoring, where (NICE NG136) stage 1 hypertension is a clinic BP of 140/90–159/99 with an ABPM/HBPM daytime average of 135/85–149/94, and stage 2 is clinic ≥160/100 and ABPM/HBPM ≥150/95 — which also excludes white-coat effect. Then recognise that in STAGE 1 the decision to start drug treatment is RISK-BASED, not number-based: NICE NG136 advises discussing starting antihypertensives with people under 80 with stage 1 hypertension who have target-organ damage, established cardiovascular disease, renal disease, diabetes, or a 10-year cardiovascular (QRISK3) risk ≥10%, and considering treatment in those under 60 with stage 1 even if the 10-year risk is <10% (10-year scores underestimate lifetime risk); first line at 55 or over is a calcium-channel blocker. So estimate QRISK and assess for target-organ damage (urine ACR and haematuria, renal function/HbA1c/lipids, ECG for LVH, fundi — the examination and ECG face to face), considering secondary causes if features suggest \u2014 the number alone does not decide it. Emphasise LIFESTYLE for everyone whether or not drugs start (weight, salt, alcohol, exercise, diet, smoking, caffeine), as it meaningfully lowers BP and CVD risk and can reduce or avoid medication. Reframe "tablets forever" honestly: treatment is reviewed at least annually and a dose reduction can be discussed if lifestyle lowers BP (clinical practice rather than an NG136 recommendation), though for many it is long term, and where warranted, explain the genuine absolute benefits (stroke, MI, renal and eye protection) the patient can weigh. The hidden agenda is feeling well, dislike of medicalisation and wanting control \u2014 respect autonomy, confirm the diagnosis, individualise with QRISK/organ-damage, offer lifestyle, and make a genuine SHARED decision, neither dismissing the raised BP nor railroading onto lifelong tablets, with monitoring and review whichever path is chosen.',
    knowledge:{
      guideline:'[1] NICE NG136 (hypertension in adults, updated 2026) · [2] NICE NG238 (cardiovascular disease: risk assessment and reduction, 2023) · [3] DVLA Assessing fitness to drive (November 2025 edition) · ABPM/HBPM diagnosis · QRISK3 and stage-1 treatment thresholds · shared decision-making',
      points:[
        { h:'Confirm before treating', t:'Don\u2019t treat one clinic reading. Confirm with ABPM/HBPM (NICE NG136): stage 1 = clinic 140/90–159/99 with ABPM/HBPM 135/85–149/94; stage 2 = clinic ≥160/100 and ABPM/HBPM ≥150/95. Excludes white-coat effect.' },
        { h:'Stage 1 is risk-based', t:'NICE NG136: discuss starting drug treatment in stage 1 (under 80) with target-organ damage, established CVD, renal disease, diabetes, or QRISK3 ≥10%; consider treatment in under-60s with stage 1 and QRISK3 <10% (10-year scores underestimate lifetime risk). First line at 55+: calcium-channel blocker. The number alone does not decide.' },
        { h:'Assess the whole patient', t:'Estimate QRISK; check target-organ damage (urine ACR and haematuria dipstick, renal function/HbA1c/lipids, ECG for LVH, fundi — face to face); consider secondary causes if features suggest. This individualises and may shift the decision.' },
        { h:'Lifestyle for all', t:'Weight, salt and alcohol reduction, regular exercise, healthy diet, smoking cessation, caffeine moderation \u2014 meaningfully lower BP and CVD risk and may reduce/avoid medication, irrespective of drug decision.' },
        { h:'Reframe "forever"', t:'Treatment is reviewed at least annually; a dose reduction can be discussed if lifestyle lowers BP (clinical practice, not NG136), though often long term; where warranted, explain genuine absolute benefits (stroke/MI/renal/eye protection).' },
        { h:'Shared decision', t:'Respect autonomy; present risk and options clearly; make a genuine shared decision \u2014 neither dismissing the raised BP nor railroading onto lifelong tablets.' },
        { h:'Never do', t:'Never treat a single clinic reading; never decide stage 1 on the number alone without QRISK/organ-damage; never omit lifestyle; never imply tablets are irreversibly lifelong; never coerce or dismiss.' },
        { h:'Safety-net & follow-up', t:'Arrange confirmatory/assessment tests; monitoring/review plan whichever path; lifestyle support; reassessment timing and reconsideration of medication; QRISK review over time.' }
      ]
    }
  };

  /* ============ 199. VIDEO — Wildly variable BP readings: technique, white-coat, or postural? ============ */
  const c199 = {
    id:'htn-variable-readings', title:'"My home machine gives me totally different numbers every time \u2014 I don\u2019t know what to believe"', type:'video', duration:12,
    meta:{ age:64, sex:'F', setting:'Video consultation \u2014 confusingly variable home BP readings.', system:'Cardiovascular \u2014 interpreting variable BP: technique, white-coat & postural drop', checked:'October 2026' },
    brief:'Mrs Glenda Ferreira, 64, on amlodipine for hypertension, brings a confusing set of HOME readings ranging from 118/74 to 178/100, and is anxious and unsure "what to believe". The examinable task is to interpret VARIABLE BP readings systematically rather than react to the highest number: assess MEASUREMENT TECHNIQUE and confounders (NICE NG136: validated/calibrated machine, correct CUFF SIZE, seated and relaxed after a few minutes’ rest in a quiet setting, arm supported at heart level, no talking, no caffeine/smoking/exercise beforehand, two readings at least 1 minute apart, morning and evening for at least 4 and ideally 7 days, first day’s readings discarded and the rest averaged, same arm — both arms checked at first and, if the difference is over 15 mmHg on repeat, the higher-reading arm used), recognise WHITE-COAT and masked effects, screen for POSTURAL HYPOTENSION (ask about postural dizziness and falls — NG136 measures seated/lying then standing BP in people with those symptoms, type 2 diabetes, or aged 80 and over; with her unexplained low readings, it is checked face to face at the nurse visit, as it cannot be done on video), consider other causes of variability (arrhythmia e.g. AF making oscillometric readings unreliable — NG136: palpate the pulse first and measure manually by auscultation if it is irregular, anxiety, irregular medication adherence, pain), and standardise the approach — teach correct home monitoring, arrange ABPM/clinic confirmation, check pulse/rhythm face to face (ECG if irregular, NICE NG196), and review medication accordingly. Reassure and reduce anxiety while not missing genuinely high readings or postural drops/arrhythmia.',
    script:{
      opening:"(Anxious, flustered, holding a notebook full of readings.) \"Doctor, my home monitor is driving me mad — one minute it says 120-something, the next it's 178! I don't know what to believe or whether my tablets are working. I get myself in a state about it and then it goes up even more. Am I about to have a stroke? Should I be taking more tablets when it's high?\"",
      facts:[
        { topic:"How she measures", text:"\"Whenever I'm worried, I check. Then again if it's high. Sometimes straight after I've been rushing about.\" Sometimes over a cup of coffee, sometimes while talking on the phone. Uses either arm. Measures 6–8 times a day." },
        { topic:"The machine", text:"\"I don't know about the cuff. I bought it online a while ago\" — a wrist monitor, brand she doesn't recognise. Arm circumference: she's a size 18." },
        { topic:"Dizziness and falls", text:"\"Not that I've noticed.\" If asked specifically about standing up: \"Now you say it, I do go light-headed getting out of bed sometimes\" — the low readings were usually in the morning. No falls or faints." },
        { topic:"Pulse", text:"\"I'm not sure — I've not really paid attention.\" If asked to feel it on camera: seems regular to her. No palpitations." },
        { topic:"Medicines", text:"\"I take it every day, I don't think I've missed any\" — amlodipine 10 mg in the morning (increased 2 months ago from 5 mg). Ankles a bit puffy since. No other medicines; no NSAIDs or decongestants. No allergies." },
        { topic:"Symptoms", text:"\"No, just the panic\" — no headaches, chest pain, visual problems or weakness." },
        { topic:"Background", text:"Hypertension for 4 years. Type 2 diabetes? No. Kidneys fine at last bloods. Retired school cook, widowed, lives alone. Her friend had a stroke last year. Non-smoker, rarely drinks." },
        { topic:"How to play it", text:"Anxious: \"Every time I see a big number I think, this is it.\" Wants clarity: \"Tell me which numbers to believe, and whether I need more tablets.\" Relieved by a clear routine: \"So the 178 isn't real?\" Surprised: \"I hadn't thought about the low ones.\" Asks: \"Even if I feel funny?\" If told to take an extra tablet when high, she would (the trap)." }
      ],
      ice:{
        ideas:"\"My blood pressure is all over the place and the tablets aren't working.\"",
        concerns:"HIDDEN AGENDA — fear of a stroke like her friend's; the checking and worry feed each other; she lives alone and feels nobody to ask.",
        expectations:"\"Which numbers to believe — and whether to take more tablets when it's high.\""
      },
      cues:[
        "\"Whenever I'm worried, I check.\" — technique and anxiety.",
        "\"Am I about to have a stroke?\" — the fear to address.",
        "\"Light-headed getting out of bed.\" — postural drop, if asked."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Interprets variable readings SYSTEMATICALLY rather than reacting to the highest number \u2014 explicitly does NOT advise reactive extra dosing for single high readings' },
      { dom:'dg', text:'Assesses TECHNIQUE/confounders \u2014 validated/calibrated machine, correct cuff size, a few minutes’ seated rest, arm supported at heart level, not talking, no caffeine/smoking/exercise/full bladder, two readings a minute apart twice daily for 4–7 days with the first day discarded and the rest averaged (NICE NG136), consistent timing, higher-reading arm if the difference is over 15 mmHg' },
      { dom:'dg', text:'Recognises WHITE-COAT/situational rises and the ANXIETY cycle (worry raises readings), addressing the anxiety as part of management without dismissing genuinely elevated averages' },
      { dom:'dg', text:'Screens POSTURAL HYPOTENSION (asks about dizziness/falls; standing BP checked face to face; NICE NG136 significant systolic fall ≥20 mmHg, with the diastolic ≥10 criterion from international consensus) given her symptoms and low readings on amlodipine \u2014 recognising the low readings/over-treatment may matter as much as the high ones' },
      { dom:'dg', text:'Considers ARRHYTHMIA/irregular pulse (AF makes oscillometric monitors unreliable — palpate the pulse face to face, measure BP manually if irregular, ECG) and other causes (adherence, pain, device error), then STANDARDISES with correct home monitoring and ABPM/standardised clinic readings before changing treatment' },
      { dom:'ro',   text:'Reassures with a clear systematic explanation (variability is usually technique/physiology, not impending stroke), calming the anxiety that is itself raising readings, without dismissing real findings' },
      { dom:'ro',   text:'Gives a clear, confidence-restoring correct-monitoring routine and checks understanding (teach-back of technique)' },
      { dom:'cm',    text:'Safety-nets and follows up: ABPM/standardised readings and pulse/ECG check, review of medication on reliable data, postural-symptom and arrhythmia red flags, anxiety support, and when to seek urgent help (very high BP with symptoms) \u2014 systematic interpretation, not reactive dosing' },
    ],
    worked:[
      { lbl:'Calm + reframe', txt:'"First, take a breath \u2014 you are not about to have a stroke, and please don\u2019t take extra tablets when a reading\u2019s high; that can do harm. Wildly different numbers almost always mean something about how the readings are being taken, not that your pressure is dangerously swinging. Let\u2019s work out why."' },
      { lbl:'Sort the technique', txt:'"Tell me how you measure it … A few things matter a lot: sit quietly and rest for a few minutes first, arm resting on a table level with your heart, feet flat, don\u2019t talk, no coffee or rushing beforehand, and take two readings a minute apart, morning and evening for a week — we leave out the first day and use the average, not the one scary reading. Same arm each time."' },
      { lbl:'Name the anxiety loop', txt:'"You\u2019ve spotted it yourself \u2014 you get in a state and it goes up. That\u2019s real: worry pushes the reading up, which makes you worry more. Settling that loop is part of the treatment, not separate from it."' },
      { lbl:'Check the important things', txt:'"Two things I want to check properly when you come in to see the nurse, as I can’t do them over video: your blood pressure sitting and then standing, because the tablet you\u2019re on can make it drop when you stand \u2014 those low readings matter \u2014 and your pulse, because an irregular heartbeat can make home monitors give crazy numbers — if it is irregular she’ll measure it by hand and we’ll do a heart tracing."' },
      { lbl:'Get reliable data', txt:'"To really know your blood pressure, let\u2019s use a 24-hour monitor or a proper week of correctly-taken home readings. Then we judge your tablets on solid information, not on the alarming odd reading."' },
      { lbl:'Safety-net + review', txt:'"If you ever get a very high reading WITH symptoms \u2014 bad headache, chest pain, breathlessness, vision or speech changes \u2014 that\u2019s urgent, seek help. Otherwise, do the readings the way we\u2019ve agreed and we\u2019ll review with the monitor results. You\u2019ll feel much more in control once the numbers are reliable."' },
    ],
    learning:'Wildly variable home BP readings should be interpreted SYSTEMATICALLY, not reacted to by chasing the highest number or dosing reactively (which is unsafe and anxiety-driven). Most variability is a MEASUREMENT/technique or physiological issue: check a validated, calibrated machine and correct CUFF SIZE (too-small over-reads), ensure the patient is seated, relaxed and rested for a few minutes with the arm supported at HEART LEVEL, feet flat, not talking, with no caffeine/smoking/exercise/full bladder beforehand, follows the NICE NG136 home protocol — two readings at least a minute apart, morning and evening, for at least 4 and ideally 7 days, DISCARDING THE FIRST DAY and AVERAGING the rest — measures at a consistent time, and uses the higher-reading arm if the two arms differ by more than 15 mmHg on repeat \u2014 correcting these often resolves the "wild" swings. Recognise WHITE-COAT and situational rises and the ANXIETY cycle (worry raises readings, which raises worry), and treat the anxiety as part of management without dismissing genuinely elevated averages. Importantly, ask about POSTURAL HYPOTENSION (NG136 checks standing BP in people with falls or postural dizziness, type 2 diabetes, or aged 80 and over; here her low readings on amlodipine justify a face-to-face check; a systolic fall of 20 mmHg or more is significant, and the diastolic ≥10 criterion is international consensus) \u2014 the low readings and possible over-treatment may matter as much as the high ones \u2014 and consider an IRREGULAR PULSE/ARRHYTHMIA such as atrial fibrillation, which makes oscillometric home monitors unreliable and erratic (palpate the pulse face to face, measure BP manually by auscultation if it is irregular, arrange an ECG per NICE NG196, and note AF changes overall management). Also consider adherence, pain and device error. Then STANDARDISE: teach correct home monitoring, arrange ABPM or properly standardised clinic/home readings to get a true picture, and review medication on reliable data. The hidden agenda is anxiety (fear of imminent stroke, temptation to over-dose) that itself raises readings \u2014 reassure with a clear systematic explanation, restore confidence with a correct-monitoring routine, screen the genuinely important things (postural drop, arrhythmia, true average), and review on reliable data, calming the anxiety while not missing real pathology.',
    knowledge:{
      guideline:'[1] NICE NG136 (hypertension in adults, updated 2026) · [2] NICE NG196 (atrial fibrillation, 2021) · [3] British and Irish Hypertension Society, validated BP monitor list · correct BP measurement/HBPM · postural hypotension · AF and oscillometric monitor reliability',
      points:[
        { h:'Interpret, don\u2019t react', t:'Variable readings are usually technique/physiology, not a reason to dose reactively to the highest value. Find why before changing treatment.' },
        { h:'Technique & confounders', t:'Validated/calibrated machine (BIHS list), correct cuff size, a few minutes’ seated rest, arm supported at heart level, feet flat, no talking, avoid caffeine/smoking/exercise/full bladder; NICE NG136: two readings 1 minute apart twice daily for 4–7 days, first day discarded, rest averaged; consistent timing; higher-reading arm if the difference is over 15 mmHg.' },
        { h:'White-coat & anxiety', t:'BP varies with stress, pain and activity; anxiety about readings creates a worry\u2013rise cycle. Recognise white-coat effect; address anxiety as part of management; don\u2019t dismiss true elevated averages.' },
        { h:'Postural hypotension', t:'NICE NG136: check seated/lying then standing BP (after at least 1 minute) in people with falls or postural dizziness, type 2 diabetes, or aged 80+; a systolic drop ≥20 is significant (diastolic ≥10 is the international consensus criterion). Done face to face, not on video. Low standing readings may indicate over-treatment (amlodipine) and matter as much as high ones.' },
        { h:'Arrhythmia & monitors', t:'AF/irregular pulse makes oscillometric home monitors unreliable/erratic. Palpate the pulse before automated measurement and measure manually by auscultation if irregular (NICE NG136); ECG (NICE NG196); AF changes management (stroke risk/anticoagulation).' },
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
        { t:'4\u20137',  h:'Practical + hypos', d:'Fine painless needles, NG28 regimen (basal plus mealtime insulin considered at HbA1c ≥75), sulfonylurea review, DSN; hypo recognition/treatment/carry carbs.' },
        { t:'7\u201310', h:'DVLA/driving', d:'Inform DVLA (>3 months) and licensing authority; test ≤2 h before and 2-hourly; ≤5.0 eat first, <4.0 don’t drive, 45-minute wait; carry carbs; Group 2 standard for taxis; document.' },
        { t:'10\u201312',h:'Shared decision', d:'Surface each fear; DSN/structured education; start gently; review closely; not coercion or capitulation.' }
      ],
      wordPics: {
        fail: 'Pushes insulin with facts while ignoring the failure/blindness beliefs; omits hypo or DVLA counselling; or gives up and accepts poor control.',
        pass: 'Reframes beliefs, educates practically, counsels hypos and DVLA, and reaches a shared decision.',
        exc:  'Elicits and reframes the failure/blindness beliefs empathically, educates on near-painless needles and the regimen, counsels hypoglycaemia and the DVLA/driving duty thoroughly, involves the DSN/structured education, and reaches a genuine shared decision \u2014 neither overriding fear nor accepting poor control.'
      },
      avoid: [
        { dont:'"Insulin isn\u2019t a big deal \u2014 your sugars are too high, you just need to start it."', instead:'"I hear that this feels like failure \u2014 it isn\u2019t; diabetes changes over time and this is the natural next step. Let\u2019s talk through your worries."', why:'Overriding the failure/blindness beliefs with facts alone loses engagement.' },
        { dont:'(Skipping driving) starting insulin without DVLA advice for a taxi driver.', instead:'"Because you drive for a living: you must tell the DVLA and your licensing authority, check your sugar within 2 hours before driving and every 2 hours on shift — at 5 or below, eat first; below 4, don’t drive — and carry fast sugar."', why:'Omitting the DVLA/driving and hypo counselling on insulin is a serious safety failure.' },
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
        { t:'2\u20135',  h:'Drop the leaflets', d:'Plain verbal language + visual aids + teach-back; check understanding; offer an advocate (not an interpreter — he speaks English).' },
        { t:'5\u20137',  h:'Ask, don\u2019t assume', d:'Cultural humility \u2014 ask about his life/diet/priorities; no stereotyping; tailor to him.' },
        { t:'7\u201310', h:'Plan for a mobile life', d:'Portable record/summary; entitlement to care anywhere (no fixed address needed to register; temporary residence up to 3 months); prioritise the few highest-impact actions.' },
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
        { t:'2\u20135',  h:'Risk-based decision', d:'Stage 1 → discuss treatment (NICE NG136) on QRISK3 ≥10%/target-organ damage/diabetes/CVD/renal, or consider under 60 — not the number alone.' },
        { t:'5\u20137',  h:'Assess the whole patient', d:'QRISK3; ACR, bloods, ECG, fundi (face to face) for organ damage; consider secondary causes.' },
        { t:'7\u20139',  h:'Lifestyle + reframe', d:'Lifestyle for everyone; "forever" not automatic — annual review, dose reduction discussable if lifestyle lowers BP; explain real benefits; CCB first line at 55+.' },
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
        { dont:'"Once you start tablets you\u2019re on them for life, but that\u2019s just how it is."', instead:'"They’re not automatically forever — we review every year, and if lifestyle brings it down we can talk about reducing, though for many people they are long term."', why:'Implying irreversible lifelong treatment is inaccurate and reduces engagement.' }
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
        { t:'2\u20135',  h:'Technique/confounders', d:'Cuff size, a few minutes’ rest, arm at heart level, no talking/caffeine, 2 readings twice daily for 4–7 days, first day discarded (NICE NG136), same arm.' },
        { t:'5\u20137',  h:'White-coat + anxiety loop', d:'Stress/pain raise BP; worry\u2192higher reading\u2192more worry; treat the anxiety as part of management.' },
        { t:'7\u20139',  h:'Postural + arrhythmia', d:'Postural symptoms → standing BP face to face (NG136: falls/dizziness, T2DM, 80+); pulse/rhythm/ECG — AF makes monitors unreliable; manual BP if irregular.' },
        { t:'9\u201312', h:'Standardise + safety-net', d:'ABPM/standardised readings; review meds on reliable data; urgent if very high BP + symptoms.' }
      ],
      wordPics: {
        fail: 'Reacts to the highest number / advises reactive extra dosing; never checks technique, postural BP or pulse; feeds the anxiety; changes meds on unreliable data.',
        pass: 'Addresses technique and white-coat, screens postural/arrhythmia, and standardises with ABPM before changing treatment.',
        exc:  'Interprets variability systematically (technique/confounders), recognises the white-coat/anxiety cycle, screens postural hypotension and arrhythmia (AF unreliability), standardises with ABPM/correct home monitoring, reassures and restores confidence, and reviews medication only on reliable data.'
      },
      avoid: [
        { dont:'"When it\u2019s high, take an extra tablet to bring it down."', instead:'"Please don\u2019t dose reactively \u2014 that can be dangerous; let\u2019s find why the readings vary and judge on reliable averages."', why:'Reactive dosing to single high readings is unsafe and ignores the cause of variability.' },
        { dont:'(Ignoring the low readings) focusing only on the 178.', instead:'"The low readings matter too — let’s get your blood pressure checked sitting and standing at the surgery, as your tablet can cause drops."', why:'Missing postural hypotension/over-treatment in an older patient on amlodipine risks falls.' },
        { dont:'(No pulse check) accepting the erratic numbers at face value.', instead:'"I’d like the nurse to check your pulse by hand — an irregular heartbeat can make home monitors give wild readings, and we’d want a heart tracing."', why:'AF makes oscillometric monitors unreliable and changes management \u2014 it must be checked.' }
      ]
    }

  });

})();
