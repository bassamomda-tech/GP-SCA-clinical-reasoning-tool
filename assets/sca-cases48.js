/* ============================================================
   Reasoning GP — Case Library batch 48 (final unscripted batch):
   "Saying no safely, saying yes kindly"
   Three ORIGINAL cases: a methotrexate early-repeat request that
   is really a monitoring-and-safety gate; an anaphylaxis survivor
   needing a management plan + adrenaline auto-injector teaching;
   and a weight-management consultation done kindly and in line
   with 2026 options. None carries a NICE NG12 cancer pathway and
   none is invented.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases47.js.
   ============================================================ */

(function(){

  /* ============ 185. F2F — Methotrexate early request: the monitoring gate (prescribing safety; no NG12) ============ */
  const c185 = {
    id:'methotrexate-early-request', title:'"I\u2019ve run out of my methotrexate early \u2014 can you just print me another script today?"', type:'video', duration:12,
    meta:{ age:58, sex:'F', setting:'Video consultation \u2014 early request for a methotrexate repeat.', system:'Prescribing & pharmacology \u2014 methotrexate safety, shared care & the monitoring gate', checked:'October 2026' },
    brief:'Mrs Bridget Nwosu, 58, has rheumatoid arthritis on weekly oral METHOTREXATE 17.5 mg (with folic acid) under rheumatology shared care. She requests an early repeat \u2014 she has "run out" sooner than expected \u2014 and wants it printed quickly. The examinable task is to treat this not as a clerical request but as a PRESCRIBING-SAFETY gate: clarify WHY it ran out early (dosing error/confusion, taking it more than weekly, hoarding, lost tablets, or someone else taking it?), actively exclude METHOTREXATE TOXICITY and the catastrophic DAILY-dosing error (methotrexate is WEEKLY \u2014 inadvertent daily dosing causes fatal toxicity), check that blood-test MONITORING is up to date (FBC, LFTs, U&E per shared-care schedule) before re-prescribing, screen for toxicity red flags (mouth ulcers/stomatitis, sore throat/infection \u2014 ?marrow suppression, breathlessness/dry cough \u2014 ?pneumonitis, nausea, jaundice), reinforce safety counselling (weekly dosing on a named day — MHRA Drug Safety Update, September 2020; a single 2.5 mg tablet strength — NPSA oral methotrexate alert, 2006; folic acid; avoid trimethoprim/NSAID interactions and alcohol excess, per BNF; sick-day/illness rules; methotrexate is teratogenic, but at 58 CoSRH guidance (Contraception for women aged over 40 years, 2017, amended 2019) says contraception can stop at 55 because the chance of pregnancy is extremely low, so at 58 contraception/teratogenicity counselling is unlikely to apply — check rather than assume), and adhere to shared-care/quantity safeguards \u2014 rather than reflexively printing a script.',
    script:{
      opening:"(Friendly, in a hurry, coat on.) \"Hi doctor, sorry — I've run out of my methotrexate a bit early and I just need another prescription. Could you print one off quickly? I've got the bus to catch. It's just my usual, nothing's changed, so it should be straightforward, shouldn't it?\"",
      facts:[
        { topic:"How she takes it", text:"If asked: \"Seventeen and a half milligrams, once a week, same day every week. And the folic acid on another day.\" Takes seven tablets every Monday morning; folic acid on Thursdays. If asked about daily use: \"No. Just the once a week.\"" },
        { topic:"Why it ran out", text:"If asked to check the box on camera: \"Hang on… it says 2.5 milligrams. There are none left. I honestly don't know why — I thought I had another box.\" If asked if anyone else could take them: \"Not that I know of. I might have miscounted at the pharmacy.\" Lives with her husband; no children or visitors with access. Next dose due in 3 days." },
        { topic:"Toxicity questions", text:"If asked: \"No, none of that. I feel fine\" — no mouth ulcers, sore throat, fevers, infections, bruising or bleeding, new cough or breathlessness, nausea, diarrhoea, yellow skin or dark urine." },
        { topic:"Other medicines", text:"\"No, nothing new.\" Takes paracetamol occasionally. No trimethoprim or other antibiotics recently, no ibuprofen or naproxen, no over-the-counter remedies. No allergies." },
        { topic:"Blood tests", text:"If asked when her last blood test was: \"Er… a few months? Before Christmas, I think\" — about four months ago. Has a yellow monitoring booklet but hasn't been filling it in. Rheumatology review was 6 months ago." },
        { topic:"RA and health", text:"Rheumatoid arthritis for 6 years, well controlled. Joints fine at the moment. Post-menopausal (periods stopped at 51). No lung or liver disease known. Drinks a glass of wine at weekends." },
        { topic:"Social", text:"Works part-time in a school canteen. Married. Non-smoker. Gets the bus everywhere." },
        { topic:"How to play it", text:"Polite and rushed; sees this as admin. If asked what she's worried about: \"My joints flaring. And I didn't think a repeat was a big deal.\" Surprised to learn why it matters: \"I didn't know it was that serious.\" Agrees to a blood test: \"As long as I don't miss a dose, a blood test is fine.\" If the doctor refuses flatly without a plan, become upset about missing her dose." }
      ],
      ice:{
        ideas:"\"It's my usual — just a quick repeat.\"",
        concerns:"Missing a dose and her joints flaring; catching the bus. She hasn't realised the safety reasons behind the checks.",
        expectations:"\"A script printed today.\""
      },
      cues:[
        "\"I've run out a bit early.\" — the question is why.",
        "\"Nothing's changed.\" — invites checking how she takes it.",
        "\"Before Christmas, I think.\" — overdue monitoring, if asked."
      ]
    },
    checkpoints:[
      { dom:'cm', text:'Treats the early methotrexate request as a PRESCRIBING-SAFETY gate, not a clerical task \u2014 actively clarifying WHY it ran out early (dosing error/confusion, more-than-weekly dosing, hoarding, lost tablets, diversion)' },
      { dom:'dg', text:'Excludes the catastrophic DAILY-DOSING error \u2014 confirms methotrexate is taken ONCE WEEKLY on a named day \u2014 and recognises inadvertent daily dosing as a toxic emergency requiring urgent assessment/bloods/folinic acid rescue, not a reprint' },
      { dom:'dg', text:'Screens TOXICITY red flags: mouth ulcers/stomatitis, sore throat/fever/infection (marrow suppression), new breathlessness/dry cough (pneumonitis), nausea/vomiting, abdominal pain/jaundice (hepatotoxicity), unusual bruising/bleeding \u2014 and would hold the drug and escalate if present' },
      { dom:'cm', text:'Checks that blood-test MONITORING (FBC, LFTs, U&E) is up to date per shared care BEFORE re-prescribing, and addresses overdue/abnormal results first rather than prescribing blind' },
      { dom:'cm', text:'Reinforces safety counselling — weekly dosing + folic acid on a different day, avoid trimethoprim/co-trimoxazole and NSAID/alcohol cautions, illness awareness, report toxicity symptoms — and knows that although methotrexate is teratogenic, contraception can stop at 55 (CoSRH), so checks rather than assumes it applies at 58; confirms the monitoring booklet' },
      { dom:'ro',   text:'Handles the "just print it, I\u2019ve a bus" pressure courteously but firmly \u2014 explaining WHY methotrexate cannot be reprinted without these checks \u2014 without being dismissive of her time' },
      { dom:'ro',   text:'Explains the reasoning so the patient understands the safety rationale (not bureaucracy), checks understanding of weekly dosing and red flags, and maintains rapport' },
      { dom:'cm',    text:'Reaches a SAFE disposition: corrects any misunderstanding and issues an appropriate quantity per shared care with monitoring confirmed, OR escalates urgently if toxicity/daily-dosing found; documents; arranges bloods/review and reinforces who to contact \u2014 safe care over speed' },
    ],
    worked:[
      { lbl:'Slow it down, kindly', txt:'"I know you\u2019re after a quick reprint and you\u2019ve a bus to catch \u2014 but methotrexate is one of the few medicines I can\u2019t just print without a couple of safety checks, because getting it wrong can be genuinely dangerous. Two minutes now keeps you safe. Bear with me."' },
      { lbl:'Clarify why it ran out', txt:'"Can you talk me through exactly how you\u2019ve been taking it \u2014 how many tablets, and how often? \u2026 Just so I\u2019m sure: it\u2019s once a WEEK, on the same day, isn\u2019t it? \u2026 Good. And do you know why it ran out early \u2014 lost some, or taking them differently?"' },
      { lbl:'Exclude toxicity', txt:'"A few quick safety questions: any mouth ulcers, sore throat or feeling feverish? Any new breathlessness or a dry cough? Any nausea, tummy pain or yellowing? \u2026 None \u2014 that\u2019s reassuring. Those are the things that would make me stop the drug straight away."' },
      { lbl:'Check the monitoring gate', txt:'"Let me check your blood tests are up to date \u2014 the count, liver and kidneys \u2014 because we keep an eye on those with methotrexate. \u2026 They\u2019re due/over due, so let\u2019s sort that as part of this rather than prescribe blind."' },
      { lbl:'Reinforce the safety rules', txt:'"While we\u2019re here \u2014 weekly on your set day, folic acid on a different day, and importantly avoid the antibiotic trimethoprim and go easy on anti-inflammatories and alcohol, as they don\u2019t mix well. Mouth ulcers, sore throat or breathlessness — contact us promptly. It’s also a medicine that mustn’t be taken in pregnancy — have your periods stopped for good? … Then that part won’t apply to you."' },
      { lbl:'Safe disposition + document', txt:'"Here\u2019s the plan: I\u2019ll arrange your bloods, issue the right amount per your shared-care plan once I\u2019m happy, and make sure your booklet\u2019s up to date. If anything I mentioned crops up, contact us the same day. I\u2019d rather get this right than rushed \u2014 thank you for bearing with me."' },
    ],
    learning:'An early methotrexate repeat is a PRESCRIBING-SAFETY gate, not a clerical task. Methotrexate for rheumatoid arthritis is a high-risk, narrow-margin drug taken ONCE WEEKLY, and "ran out early" must trigger the question WHY \u2014 a dosing error or confusion, taking it more than weekly, hoarding, lost tablets, or diversion. The catastrophic, sometimes FATAL error to exclude is inadvertent DAILY dosing (patient, dispensing or prescribing error): if present, it is a toxic emergency (mucositis, marrow suppression, GI/hepatic toxicity) needing urgent assessment, bloods, folinic acid rescue and specialist input \u2014 not another prescription \u2014 so always confirm weekly dosing on a named day (MHRA Drug Safety Update, September 2020; NPSA oral methotrexate alert, 2006). Actively screen toxicity red flags: mouth ulcers/stomatitis, sore throat/fever/infection (marrow suppression), new breathlessness or dry cough (methotrexate pneumonitis), nausea/vomiting, abdominal pain or jaundice (hepatotoxicity), and unusual bruising/bleeding \u2014 any of which mean hold the drug and escalate. Before re-prescribing under shared care, confirm MONITORING (FBC, LFTs, U&E; BSR csDMARD 2025: about 3-monthly once stable) is current and act on overdue/abnormal results first, because re-prescribing blind bypasses the safety system shared care maintains. Reinforce safety counselling \u2014 weekly dosing with folic acid on a different day, avoidance of trimethoprim/co-trimoxazole and caution with NSAIDs/alcohol (dangerous interactions/hepatotoxicity), illness awareness, prompt reporting of toxicity symptoms, and, because it is teratogenic, contraception for women who could conceive (CoSRH: contraception can stop at 55, so at 58 it is unlikely to apply — check rather than assume) — and confirm the monitoring booklet. Resist the "just print it, I\u2019ve a bus" pressure courteously but firmly, explaining the safety rationale, and reach a safe disposition: correct any misunderstanding and issue an appropriate quantity with monitoring confirmed, or escalate urgently if toxicity/daily-dosing is found. Safe care over speed.',
    knowledge:{
      guideline:'MHRA Drug Safety Update (September 2020) · NPSA oral methotrexate alert (2006) · BSR csDMARD guideline (2025) · CoSRH Contraception for women aged over 40 years (2017, amended 2019) · high-risk prescribing',
      points:[
        { h:'Early request = safety trigger', t:'An early methotrexate repeat is not clerical. Establish why it ran out early (dosing error/confusion, more-than-weekly dosing, hoarding, lost tablets, diversion) before prescribing.' },
        { h:'Weekly, never daily', t:'Methotrexate for RA is once weekly on a named day, recorded on the prescription (MHRA Drug Safety Update, September 2020), with a single 2.5 mg tablet strength (NPSA 2006). Inadvertent daily dosing is a classic, potentially fatal error \u2014 a toxic emergency needing urgent assessment, bloods, folinic acid rescue and specialist input, not a reprint.' },
        { h:'Toxicity red flags', t:'Mouth ulcers/stomatitis, sore throat/fever/infection (marrow suppression), new breathlessness/dry cough (pneumonitis), nausea/vomiting, abdominal pain/jaundice (hepatotoxicity), unusual bruising/bleeding \u2192 hold and escalate.' },
        { h:'Monitoring gate', t:'Confirm FBC, LFTs and U&E are up to date per shared care before re-prescribing (BSR csDMARD 2025: about every 3 months once stable, more often after dose changes); act on overdue/abnormal results first. Renal impairment and interactions raise toxicity risk.' },
        { h:'Dangerous interactions', t:'BNF: avoid trimethoprim/co-trimoxazole (profound marrow toxicity); caution with high-dose NSAIDs/aspirin and significant alcohol (hepatotoxicity). Reinforce folic acid on a different day.' },
        { h:'Counselling & teratogenicity', t:'Weekly dosing, folic acid, illness awareness, prompt reporting of toxicity symptoms. Teratogenic: effective contraception and avoidance in pregnancy/conception for women who could conceive — but CoSRH (2017, amended 2019): contraception can stop at 55, so at 58 check rather than assume it applies. Confirm the monitoring booklet.' },
        { h:'Never do', t:'Never reflexively reprint methotrexate; never assume "nothing\u2019s changed"; never skip the daily-dosing/toxicity check; never prescribe with overdue/abnormal monitoring; never bypass shared-care safeguards under time pressure.' },
        { h:'Safe disposition & follow-up', t:'Correct misunderstandings and issue an appropriate quantity with monitoring confirmed, or escalate urgently if toxicity/daily-dosing found; document; arrange bloods/review; reinforce red flags and contacts. Safe care over speed.' }
      ]
    }
  };

  /* ============ 186. F2F — After an allergic reaction eating out: anaphylaxis plan + auto-injector teaching (urgent care; no NG12) ============ */
  const c186 = {
    id:'anaphylaxis-epipen', title:'"My face and throat swelled up at the restaurant \u2014 A&E sent me to you for a \u2018plan\u2019"', type:'video', duration:12,
    meta:{ age:27, sex:'M', setting:'Video consultation \u2014 follow-up after an anaphylactic reaction.', system:'Allergy / Urgent care \u2014 anaphylaxis aftercare, plan & adrenaline auto-injector teaching', checked:'October 2026' },
    brief:'Mr Daniel Foster, 27, had a reaction eating out 5 days ago: within minutes of a Thai meal his lips and tongue swelled, his throat felt tight, he became wheezy and lightheaded with an urticarial rash. Paramedics gave intramuscular ADRENALINE; he recovered and A&E discharged him with a short course of antihistamine and "see your GP for a plan", and a suspected trigger of PEANUT — but with NO adrenaline auto-injector and NO specialist allergy referral, which is a gap in care: NICE NG258 says people who have had emergency treatment for suspected anaphylaxis should be offered auto-injectors as an interim measure and referral to a specialist allergy service. The examinable task is structured anaphylaxis AFTERCARE: confirm this was ANAPHYLAXIS (acute onset, airway/breathing/circulation involvement \u00b1 skin) and reinforce its seriousness; identify the likely allergen and arrange ALLERGY CLINIC referral (specific IgE/skin-prick testing, dietetic input) that A&E did not make; ask about ASTHMA and CO-FACTORS (alcohol, exercise, NSAIDs, intercurrent illness) that raise the risk of a severe reaction; PRESCRIBE and TEACH the use of an ADRENALINE AUTO-INJECTOR (technique, carry TWO at all times, when to use it — early — and that adrenaline is first-line, call 999 and lie flat/legs raised, a second dose at 5 min if no improvement; MHRA Drug Safety Update June 2023, Resuscitation Council UK 2021), with brand-specific training (NICE QS119) — on video if he has a trainer device, otherwise face to face with the practice nurse or pharmacist; provide a written personalised emergency ACTION PLAN; counsel on AVOIDANCE (label-reading, cross-contamination, informing restaurants, MedicAlert); address the biphasic-reaction risk and the psychological impact/anxiety; and ensure follow-up.',
    script:{
      opening:"(Calm on the surface, a bit shaky as he describes it.) \"So I had a scary do at a restaurant last week — my lips and tongue swelled up, my throat went tight and I went wheezy and faint within minutes of eating. The paramedics gave me an injection in my thigh and it settled. A&E gave me antihistamines and said come to you for 'a plan'. They reckon it was peanuts. Honestly I'm a bit shaken — what do I actually do if it happens again?\"",
      facts:[
        { topic:"The reaction", text:"\"Within a few minutes my lips and tongue swelled, my throat felt tight, I was wheezy and went really lightheaded. There was a rash too. The paramedics injected my thigh and it settled.\" Ate a Thai noodle dish with satay sauce. Stayed in A&E about 6 hours. No second reaction after going home." },
        { topic:"Before this", text:"\"Nothing like that before.\" Has eaten peanut butter as a child but avoided it since his teens because it made his mouth tingle. Cashews give him an itchy mouth too. No other food reactions." },
        { topic:"Co-factors", text:"\"I don't think anything else was going on\" — but if asked specifically: had two beers with the meal and had been to the gym beforehand. No ibuprofen. Not unwell that day." },
        { topic:"Asthma and history", text:"If asked: \"I had an inhaler as a kid\" — asthma as a child, no inhaler for 10 years, occasional wheeze with colds. Hay fever. No regular medicines. No drug allergies. Not on beta-blockers." },
        { topic:"What A&E gave", text:"\"No, just antihistamines and 'see your GP'.\" No adrenaline pen, no allergy clinic referral." },
        { topic:"Fears and impact", text:"\"That next time it'll be worse and nobody will be there. I've not eaten out since. I just don't know what I should carry or do.\" Checking every label, anxious at work lunches." },
        { topic:"Social", text:"Graphic designer, shares a flat with two friends. Cycles to work. Drinks socially. Non-smoker." },
        { topic:"Practical", text:"No trainer pen at home. Can pick one up from the pharmacy. Will try the technique with a pen or similar object on camera if asked: \"Cap off, outer thigh, press hard, hold it. Like that?\"" },
        { topic:"How to play it", text:"Shaken but keen to learn. Asks: \"So I shouldn't wait to see if the tablets work?\" and \"What about eating out? I love Thai food.\" Responds well to clear steps and a teach-back. If given only more antihistamines, look uncertain and ask again what to do if it happens." }
      ],
      ice:{
        ideas:"\"It was probably peanuts. The injection fixed it — I need to know what to do next time.\"",
        concerns:"HIDDEN AGENDA — he thought he was dying (\"this is it\"); now anxious about eating out and being alone when it happens; worried about not having the right kit.",
        expectations:"\"A plan — what to carry and what to do.\""
      },
      cues:[
        "\"I'm a bit shaken.\" — invites exploring the fear.",
        "\"I've not eaten out since.\" — impact on life.",
        "\"I had an inhaler as a kid.\" — asthma risk factor, if asked."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Confirms the episode was ANAPHYLAXIS (acute onset, airway/breathing/circulation involvement \u00b1 skin) and reinforces its life-threatening nature and that future reactions can be worse' },
      { dom:'cm', text:'Teaches that intramuscular ADRENALINE is the FIRST-LINE, life-saving treatment given early \u2014 and that antihistamines/steroids are NOT a substitute for it' },
      { dom:'cm', text:'PRESCRIBES and TEACHES the adrenaline auto-injector \u2014 technique (outer mid-thigh, hold in place, can be through clothing), carry TWO at all times, check expiry/replace, train household/partner \u2014 with teach-back using a trainer device' },
      { dom:'cm', text:'Provides a personalised WRITTEN ACTION PLAN \u2014 recognise \u2192 adrenaline early \u2192 call 999 ("anaphylaxis") \u2192 lie flat/legs raised (don\u2019t stand) \u2192 second dose at 5 min if no improvement \u2014 and counsels the BIPHASIC reaction risk' },
      { dom:'cm', text:'Recognises that discharge without an auto-injector or allergy referral was a gap against NICE NG258, arranges ALLERGY CLINIC referral (specific IgE/skin-prick testing, dietetics), asks about asthma and co-factors (alcohol, exercise, NSAIDs), and counsels AVOIDANCE (label-reading, cross-contamination, informing restaurants, allergy card/MedicAlert)' },
      { dom:'ro',   text:'Acknowledges that he is shaken, normalises post-anaphylaxis anxiety/hypervigilance, and offers reassurance and support \u2014 framing the plan and device as restoring control' },
      { dom:'ro',   text:'Explains clearly and checks understanding (teach-back of when and how to use the pen), pacing the information so a shaken patient retains the key actions' },
      { dom:'cm',    text:'Safety-nets and follows up: ensures he has two in-date auto-injectors (prescription sent today) and the written plan, confirms competence, arranges allergy-clinic referral and review of device/anxiety, and reinforces 999/lie-flat/second-dose \u2014 a complete anaphylaxis aftercare package' },
    ],
    worked:[
      { lbl:'Confirm + validate', txt:'"What you had was anaphylaxis \u2014 a severe, whole-body allergic reaction affecting your throat, breathing and blood pressure. It\u2019s serious, and the paramedics did exactly the right thing. It\u2019s completely understandable you\u2019re shaken \u2014 and the good news is we can give you a solid plan so you\u2019re in control if it ever happens again."' },
      { lbl:'Adrenaline first \u2014 the key message', txt:'"The single most important thing: if it happens again, the treatment that saves lives is adrenaline \u2014 your pen \u2014 used EARLY, not antihistamines. Antihistamines are for mild itch; they don\u2019t fix a swelling throat. Pen first, then 999."' },
      { lbl:'Teach the pen (teach-back)', txt:'"Let me show you on a trainer, then you show me. Cap off, press firmly into the outer thigh \u2014 through clothing is fine \u2014 hold it there. You carry TWO at all times, because you may need a second and pens can fail. Show me how you\u2019d do it \u2026 perfect."' },
      { lbl:'The action plan', txt:'"Here\u2019s your written plan: use the pen, call 999 and say \u2018anaphylaxis\u2019, then lie flat with your legs up \u2014 don\u2019t stand or walk, that\u2019s important. If you\u2019re no better after 5 minutes, use the second pen. And even if it works, you still need 999, because reactions can come back a few hours later."' },
      { lbl:'Find the trigger + avoid', txt:'"You should really have been given pens and an allergy referral when you left hospital, so I’m putting that right today. I’m referring you to the allergy clinic to confirm exactly what caused it — likely peanut, possibly other nuts — with testing and a dietitian. Do you have asthma, and had you been drinking, exercising or taking anything like ibuprofen that day? Those can make reactions worse. Meanwhile: read every label, assume cross-contamination, tell restaurants clearly, and I\u2019d get a medical-alert bracelet."' },
      { lbl:'Support + safety-net', txt:'"I’m sending a prescription for two pens to your pharmacy today, and you’ll have this plan; if you don’t have a trainer pen to practise with on camera, the nurse or pharmacist will go through it with you in person. It\u2019s normal to feel anxious after something this frightening \u2014 carrying the pen and knowing the plan usually helps a lot, and if the worry lingers, come back. Let\u2019s review once the allergy clinic\u2019s seen you. Any questions?"' },
    ],
    learning:'Anaphylaxis aftercare is a structured, examinable package. First, confirm the episode was ANAPHYLAXIS \u2014 acute onset with AIRWAY (throat tightness/swelling), BREATHING (wheeze/dyspnoea) and/or CIRCULATION (lightheadedness/hypotension/collapse) involvement, usually with skin/mucosal changes \u2014 and reinforce that it is life-threatening and that future reactions can be worse, which justifies the plan and auto-injector. The critical teaching is that intramuscular ADRENALINE into the outer thigh is the FIRST-LINE, life-saving treatment given EARLY, and that antihistamines and steroids are NOT a substitute. PRESCRIBE and TEACH the adrenaline auto-injector \u2014 technique (cap off, firm injection into the outer mid-thigh, held in place, through clothing if needed), carrying TWO devices at all times (a second dose may be needed and devices can fail), checking expiry and replacing, and training household/partner \u2014 using a trainer pen with teach-back. Provide a personalised WRITTEN ACTION PLAN: recognise \u2192 adrenaline early \u2192 call 999 (state "anaphylaxis") \u2192 lie FLAT with legs raised (do not stand or walk \u2014 risk of fatal hypotension; sit up only if breathing is easier) \u2192 SECOND dose at 5 minutes if no improvement \u2192 stay with help \u2014 and counsel the BIPHASIC reaction risk, so 999/observation is needed even if the pen works. Recognise that A&E discharge without an auto-injector or specialist referral is a gap against NICE NG258, which advises offering auto-injectors as an interim measure and referral to a specialist allergy service after emergency treatment; arrange ALLERGY CLINIC referral for confirmatory specific-IgE/skin-prick testing, trigger identification (likely peanut \u00b1 cross-reactive tree nuts) and dietetic advice, and counsel AVOIDANCE (label-reading, cross-contamination, informing restaurants, allergy card/MedicAlert), asking about asthma and co-factors (alcohol, exercise, NSAIDs) that raise the risk of a severe reaction. Finally, acknowledge and address the psychological impact \u2014 anxiety and hypervigilance are common after a near-fatal event \u2014 ensure he leaves with two in-date devices and the written plan, confirm competence, and follow up.',
    knowledge:{
      guideline:'NICE NG258 (2026, replaced CG134) · NICE QS119 · Resuscitation Council UK anaphylaxis guideline (2021) · MHRA Drug Safety Update June 2023 (adrenaline auto-injectors)',
      points:[
        { h:'Recognise anaphylaxis', t:'Acute onset with airway/breathing/circulation compromise \u00b1 skin/mucosal changes. Life-threatening; future reactions may be worse. A response to adrenaline supports the diagnosis.' },
        { h:'Adrenaline first-line', t:'IM adrenaline into the outer thigh, given early, is the life-saving treatment. Antihistamines/steroids are adjuncts at most and do not treat airway/circulatory compromise \u2014 never a substitute.' },
        { h:'Auto-injector teaching', t:'Prescribe and teach (MHRA Drug Safety Update June 2023; NICE QS119 brand-specific training): technique (cap off, firm outer-thigh injection, hold, through clothing OK), carry TWO at all times, check/replace by expiry, train household/partner, demonstrate with a trainer (teach-back).' },
        { h:'Written action plan', t:'Recognise \u2192 adrenaline early \u2192 999 ("anaphylaxis") \u2192 lie flat, legs raised (don\u2019t stand/walk) \u2192 second dose at 5 min if no improvement \u2192 stay with help. Provide a personalised plan.' },
        { h:'Biphasic reaction', t:'Reactions can recur hours later; 999/observation is required even after a successful auto-injector use. Counsel explicitly.' },
        { h:'Identify trigger & avoid', t:'NICE NG258: offer specialist allergy referral after emergency treatment for suspected anaphylaxis (A&E did not — a gap the GP closes) for specific IgE/skin-prick testing and dietetics; ask about asthma and co-factors (alcohol, exercise, NSAIDs); avoidance (label-reading, cross-contamination, informing restaurants, allergy card/MedicAlert). Likely peanut \u00b1 tree-nut cross-reactivity.' },
        { h:'Psychological impact', t:'Anxiety/hypervigilance is common after a near-fatal event; acknowledge, normalise, and support. Competence with the plan/device reduces fear; offer review if anxiety persists.' },
        { h:'Never do', t:'Never rely on antihistamines for anaphylaxis; never discharge without an in-date auto-injector ×2 and a written plan (NG258 — the gap in this A&E discharge); never omit teach-back; never advise standing/walking; never skip allergy-clinic referral.' }
      ]
    }
  };

  /* ============ 187. F2F — Weight management consultation, said kindly (2026 options; no NG12) ============ */
  const c187 = {
    id:'weight-management-2026', title:'"Every doctor just tells me to eat less and move more \u2014 I\u2019ve heard about the jab, can I have it?"', type:'video', duration:12,
    meta:{ age:44, sex:'F', setting:'Video consultation \u2014 a patient seeking help with weight.', system:'Metabolic / Lifestyle \u2014 weight management done kindly, with 2026 options', checked:'October 2026' },
    brief:'Mrs Deborah Achebe, 44, BMI 36, with prediabetes and hypertension, comes \u2014 having steeled herself \u2014 to ask for help with her weight, specifically "the jab" (a GLP-1 receptor agonist) she has read about. She has dieted repeatedly, lost and regained, and feels judged by past consultations ("just eat less and move more"). The examinable task is the weight-management consultation done WELL and KINDLY in line with 2026 practice: use NON-STIGMATISING, person-centred language and acknowledge that obesity is a complex chronic condition (not a willpower failure); assess holistically (causes/contributors \u2014 diet, activity, sleep, mood, medications, endocrine e.g. hypothyroidism/PCOS, social determinants; weight history; comorbidities; readiness); set the foundation of structured LIFESTYLE/behavioural support and tiered weight-management services; discuss PHARMACOTHERAPY honestly — GLP-1 receptor agonists (e.g. semaglutide/liraglutide; the dual agonist tirzepatide) including realistic eligibility/criteria (for her the SPECIALIST route: NICE TA875 (semaglutide: BMI ≥35 with at least one weight-related comorbidity, within a specialist weight-management service, for a maximum of 2 years) and NICE TA664 (liraglutide: BMI ≥35 with non-diabetic hyperglycaemia and high cardiovascular risk, in a specialist tier 3 service); NICE TA1026 (tirzepatide) with NHS England interim commissioning guidance phases primary-care access by cohort — from June 2025, BMI ≥40 with at least 4 of 5 qualifying conditions (type 2 diabetes, hypertension, dyslipidaemia, established cardiovascular disease, obstructive sleep apnoea); from June 2026, BMI 35–39.9 with at least 4 — and with hypertension as her only one of the five (prediabetes is not on the list), she does not yet meet a primary-care cohort), how they work, benefits, side-effects (GI; pancreatitis and gallbladder disease as recognised risks), the need to combine with lifestyle, weight regain on stopping, pregnancy and contraception (MHRA Drug Safety Update June 2025: GLP-1 medicines are not for use in pregnancy, when trying to conceive or while breastfeeding — use effective contraception, and with tirzepatide oral contraception may be less reliable, so a non-oral method or an added barrier method is advised), cost/availability/specialist-service routes, and orlistat (NICE NG246, 2025) — and BARIATRIC SURGERY referral criteria (NG246); manage expectations and shared decision-making; and address the comorbidities.',
    script:{
      opening:"(Guarded, a little defensive, arms folded.) \"Right, I've psyched myself up to come in about my weight — I find these conversations humiliating, to be honest. Every doctor just says 'eat less, move more' like I haven't tried. I've lost weight loads of times and it always comes back. I've read about the weight-loss jab — can I just have that? I feel like it's my last hope.\"",
      facts:[
        { topic:"Weight history", text:"\"I've done all the diets. I lose weight, then it creeps back on, and I feel like a failure every time.\" Slimming clubs three times — lost 2 stone once, regained within a year. Weight went up after her second baby and again during the menopause transition. Current BMI 36 (nurse, last month: weight 98 kg, height 1.65 m)." },
        { topic:"Eating", text:"\"Nothing I'd call out of control. I just always end up back where I started.\" Skips breakfast, snacks in the afternoon, big evening meal. No bingeing or making herself sick." },
        { topic:"Activity and sleep", text:"Walks the dog 20 minutes a day. Knee aches on stairs. Sleeps 6 hours; snores — her husband says she sometimes stops breathing. Tired in the daytime." },
        { topic:"Health and medicines", text:"High blood pressure — amlodipine 5 mg. Told she has \"pre-diabetes\" last year. \"No other medicines.\" No steroids or antipsychotics. Periods irregular, last one 3 months ago. No thyroid problems known. No allergies." },
        { topic:"Contraception and pregnancy", text:"If asked: \"I'd have to check what I'm using\" — condoms, inconsistently. Not planning pregnancy. Not breastfeeding." },
        { topic:"Mood", text:"\"I'm just fed up with it all, to be honest.\" Low about her weight but enjoys things; no thoughts of self-harm." },
        { topic:"Social", text:"Care home administrator, married, two teenagers. Non-smoker, drinks a little at weekends. Her mum had type 2 diabetes and lost a toe." },
        { topic:"Goals", text:"\"Not dreading these appointments. Feeling well. Not ending up with diabetes.\"" },
        { topic:"How to play it", text:"Defensive at first. Softens noticeably if the doctor asks permission, avoids blame and acknowledges how hard it is: \"Okay. That's already different.\" If asked what she knows about the jab: \"That people lose loads of weight and it just works. I'm scared you'll say no and I'm back to square one.\" Asks directly: \"So can I have it or not?\" If lectured, shut down and give short answers. If told \"not a no — here's the route\": \"So it's not a no?\"" }
      ],
      ice:{
        ideas:"\"Diets don't work for me — the jab is the answer.\"",
        concerns:"HIDDEN AGENDA — feeling humiliated and judged by doctors; fear of being refused and \"back to square one\"; fear of getting diabetes like her mum.",
        expectations:"\"To be prescribed the jab.\""
      },
      cues:[
        "\"I find these conversations humiliating.\" — needs a non-judgemental approach.",
        "\"Like I haven't tried.\" — acknowledge her efforts.",
        "\"My mum lost a toe.\" — fear of diabetes, if family history is asked."
      ]
    },
    checkpoints:[
      { dom:'ro', text:'Uses NON-STIGMATISING, person-first language, asks permission to discuss weight, acknowledges her courage and the unhelpfulness of past messaging, and frames obesity as a COMPLEX chronic relapsing condition (not willpower)' },
      { dom:'dg', text:'Assesses HOLISTICALLY before prescribing \u2014 weight history/attempts, diet/eating patterns, activity, sleep, mood, medications, secondary/endocrine causes (hypothyroidism/PCOS) where indicated, and social determinants \u2014 and assesses comorbidities (prediabetes, hypertension), BMI/waist and readiness' },
      { dom:'cm', text:'Establishes the LIFESTYLE/behavioural foundation and tiered weight-management services as the basis, with realistic health-focused goals (modest, sustained weight loss improves blood pressure and blood glucose (a clinical goal rather than a guideline figure); NHS Diabetes Prevention Programme for prediabetes) — framing drugs/surgery as adjuncts, not replacements' },
      { dom:'cm', text:'Discusses GLP-1 pharmacotherapy HONESTLY \u2014 mechanism and efficacy as an adjunct; eligibility (NICE TA875/TA664 via a specialist service; NICE TA1026 primary-care cohorts, which she does not yet meet with 1 of 5 conditions); side-effects including pancreatitis and gallbladder disease; need to combine with lifestyle; weight regain on stopping; pregnancy avoidance and contraception (MHRA Drug Safety Update June 2025); cost if private — and mentions orlistat (NG246) as an alternative' },
      { dom:'cm', text:'Outlines BARIATRIC SURGERY referral criteria as part of the tiered approach for those meeting thresholds, and manages expectations that the "jab" is a tool, not a magic cure or "last hope"' },
      { dom:'ro',   text:'Responds to her feeling judged with genuine empathy and respect, builds trust, and avoids any shaming or dismissive language throughout' },
      { dom:'ro', text:'Makes a SHARED DECISION aligned to her values/circumstances, addresses the prediabetes and hypertension, and conveys realistic hope rather than stigma or over-promising' },
      { dom:'cm',    text:'Safety-nets and follows up: agreed plan (lifestyle + referral to tiered/specialist service \u00b1 pharmacotherapy route as eligible), comorbidity monitoring, realistic expectations and regain-on-stopping counselling, and review \u2014 a kind, evidence-based, person-centred plan' },
    ],
    worked:[
      { lbl:'Set the tone, undo the shame', txt:'"Before anything else \u2014 thank you for coming in; I know these conversations can feel horrible, and I\u2019m sorry past ones have felt like blame. \u2018Eat less, move more\u2019 ignores that weight is genuinely complex \u2014 biology, hormones, life, mood all play a part. This isn\u2019t a willpower failing, and we\u2019ll approach it as a health issue, together."' },
      { lbl:'Take it seriously \u2014 assess', txt:'"To help properly, let me understand the whole picture \u2014 what\u2019s worked and not before, your eating and activity, sleep, mood, any medications, and how things are at home. And I\u2019ll check a couple of things like your thyroid. Your blood pressure and the prediabetes matter here too."' },
      { lbl:'The honest bit on the jab', txt:'"Now, the jab \u2014 the GLP-1 medicines are genuinely effective and a real advance, and they may well be an option for you. But honest truths: they work best ALONGSIDE changes, not instead of them; on the NHS, for someone in your situation, access is through a specialist weight-management service — I can’t start it here today, but I can refer you; they have side-effects, mostly tummy upset, and more rarely inflammation of the pancreas or gallstones; they mustn’t be used if you might become pregnant, so contraception matters, and with one of them the pill may not work as well; and the weight tends to return if you stop, so it\u2019s a longer-term commitment. It\u2019s a powerful tool, not a magic wand or your last hope."' },
      { lbl:'The full menu', txt:'"So here\u2019s the range: structured support through a weight-management service as the foundation, orlistat, which I can prescribe, or a GLP-1 medicine through the specialist service where you’re eligible, and for some people weight-loss surgery, which is very effective \u2014 and given your BMI and prediabetes, that could be on the table too. We choose together what fits you."' },
      { lbl:'Goals + comorbidities', txt:'"A realistic first goal isn’t a magazine figure — even a modest loss you can keep off makes a real difference to your blood pressure and your diabetes risk, and there’s a diabetes prevention programme I can refer you to. Let\u2019s aim for health and something sustainable, and treat the blood pressure and sugar alongside."' },
      { lbl:'Plan + follow-up', txt:'"Let\u2019s agree a start: I’ll refer you to the specialist weight-management service, which is the route to the medication for you, check those bloods, and review your blood pressure — a home reading or at the surgery, as I can’t measure it on video. Come back and we\u2019ll keep adjusting \u2014 you\u2019re not on your own with this, and there are real options now."' },
    ],
    learning:'A weight-management consultation done well hinges first on LANGUAGE and FRAMING: weight is stigmatised, so use non-judgemental, person-first language, ask permission to discuss weight, acknowledge the patient\u2019s courage and the unhelpfulness of past "eat less, move more" messaging, and frame obesity as a COMPLEX, relapsing-remitting chronic condition with biological, psychological and social drivers \u2014 not a willpower failing. Assess HOLISTICALLY before reaching for "the jab": weight history and previous attempts, diet/eating patterns (including emotional/binge eating), activity, sleep, mood (the bidirectional link with low mood/self-esteem), medications causing gain, secondary/endocrine causes where indicated (hypothyroidism, PCOS, rarely Cushing\u2019s), and social determinants, alongside comorbidities (here prediabetes and hypertension), BMI/waist and readiness. Establish structured LIFESTYLE and behavioural support plus tiered weight-management services as the foundation, with realistic health-focused goals (modest, sustained weight loss improves blood pressure and blood glucose (a clinical goal rather than a guideline figure); NHS Diabetes Prevention Programme and Digital Weight Management Programme), framing pharmacotherapy and surgery as adjuncts. Discuss GLP-1 receptor agonists (semaglutide/liraglutide; the dual agonist tirzepatide) HONESTLY \u2014 effective appetite-reducing adjuncts, but for her a SPECIALIST route (NICE TA875 semaglutide and TA664 liraglutide are specialist-service drugs; under NICE TA1026 and NHS England’s phased cohorts, primary-care tirzepatide needs at least 4 of 5 qualifying conditions and she has 1), GI side-effects plus pancreatitis and gallbladder risks, the need to combine with lifestyle, likely weight regain on stopping (a long-term-use question), pregnancy avoidance with effective contraception (MHRA Drug Safety Update June 2025; oral contraception may be less reliable with tirzepatide) and cost if private — and mention orlistat (NG246); outline BARIATRIC SURGERY criteria for those meeting thresholds (NICE NG246: BMI ≥40, or 35–39.9 with a significant condition weight loss could improve, such as her prediabetes) as part of the tiered approach. Manage expectations that the jab is a tool, not a magic cure or "last hope", make a shared decision aligned to her values, address the comorbidities, and convey realistic hope rather than stigma or over-promising, with follow-up.',
    knowledge:{
      guideline:'NICE NG246 (2025) · NICE TA875 (semaglutide) · NICE TA1026 (tirzepatide) · NICE TA664 (liraglutide) · NHS England interim commissioning guidance for TA1026 · MHRA Drug Safety Update June 2025 (GLP-1 medicines, pregnancy and contraception) · non-stigmatising care',
      points:[
        { h:'Language & framing', t:'Use person-first, non-judgemental language; ask permission to discuss weight; acknowledge courage and past unhelpful messaging; frame obesity as a complex chronic relapsing condition, not willpower failure. This is central to the consultation.' },
        { h:'Holistic assessment', t:'Weight history/attempts, diet/eating patterns, activity, sleep, mood, medications, secondary/endocrine causes (hypothyroidism/PCOS), social determinants; assess comorbidities (prediabetes, hypertension), BMI/waist, BP (surgery or home reading), HbA1c, lipids, readiness.' },
        { h:'Lifestyle foundation', t:'Structured behavioural/dietary/activity support and tiered weight-management services underpin all treatment; realistic health-focused goals (modest, sustained weight loss improves blood pressure and blood glucose (a clinical goal rather than a guideline figure)); NHS Diabetes Prevention Programme and Digital Weight Management Programme. Drugs/surgery are adjuncts.' },
        { h:'GLP-1 pharmacotherapy \u2014 honestly', t:'Semaglutide/liraglutide and dual agonist tirzepatide reduce appetite and produce significant loss as adjuncts; counsel eligibility — NICE TA875 (semaglutide) and TA664 (liraglutide) via specialist services; NICE TA1026 (tirzepatide) phased NHS England primary-care cohorts (BMI ≥40 with ≥4 of 5 conditions from June 2025; BMI 35–39.9 with ≥4 from June 2026) — GI side-effects, pancreatitis and gallbladder risk, combine-with-lifestyle, weight regain on stopping, pregnancy avoidance and contraception (MHRA Drug Safety Update June 2025), and cost if private. Orlistat (NG246: BMI ≥30, or ≥28 with comorbidity) is an alternative.' },
        { h:'Bariatric surgery', t:'Outline referral criteria (NICE NG246: BMI ≥40, or 35–39.9 with a significant condition weight loss could improve, after specialist assessment); highly effective for sustained loss and metabolic disease. Part of the tiered spectrum.' },
        { h:'Shared decision & expectations', t:'Choose options with the patient per values/circumstances; the jab is a tool, not a magic cure or "last hope". Address comorbidities; convey realistic hope, avoid stigma and over-promising.' },
        { h:'Never do', t:'Never use shaming/"eat less, move more" dismissal; never prescribe pharmacotherapy without holistic assessment and lifestyle foundation; never over-promise the "jab" or omit regain-on-stopping.' },
        { h:'Safety-net & follow-up', t:'Agreed plan (lifestyle + tiered/specialist referral \u00b1 eligible pharmacotherapy/surgery route); comorbidity monitoring; realistic expectations; review and ongoing support.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c185, c186, c187);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'methotrexate-early-request': {
      ceg: ['Prescribing & pharmacology', 'Long-term conditions & cancer'],
      stem: {
        name: 'Bridget Nwosu', age: '58 years \u00b7 female',
        pmh: ['Rheumatoid arthritis on weekly oral methotrexate 17.5 mg + folic acid (rheumatology shared care)', '\u26a0 Requesting early repeat \u2014 "run out early"', 'Reason for early run-out unestablished'],
        meds: ['Methotrexate 17.5 mg weekly', 'Folic acid', 'Naproxen PRN'],
        allergy: 'NKDA',
        recent: '"Just print me another script quickly \u2014 nothing\u2019s changed, I\u2019ve a bus to catch."',
        reason: 'Video consultation \u2014 early methotrexate repeat request.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Safety, not admin', d:'Early methotrexate request = safety gate; courteously slow it down despite the bus.' },
        { t:'2\u20134',  h:'Why + daily-dose check', d:'How taken? Confirm WEEKLY on a set day; exclude catastrophic daily dosing; why ran out early.' },
        { t:'4\u20136',  h:'Toxicity screen', d:'Mouth ulcers, sore throat/fever, breathlessness/dry cough, nausea, jaundice, bruising \u2192 hold + escalate if present.' },
        { t:'6\u20138',  h:'Monitoring gate', d:'FBC/LFT/U&E up to date? Address overdue/abnormal first; don\u2019t prescribe blind.' },
        { t:'8\u201312', h:'Counsel + safe disposition', d:'Weekly + folic acid; avoid trimethoprim/NSAID/alcohol; contraception only if relevant (CoSRH: can stop at 55); issue appropriate quantity or escalate; document.' }
      ],
      wordPics: {
        fail: 'Prints the repeat reflexively as "nothing\u2019s changed"; never asks how it\u2019s being taken; misses daily dosing/toxicity; ignores overdue monitoring.',
        pass: 'Clarifies the early request, excludes daily dosing/toxicity, checks monitoring, and reaches a safe disposition.',
        exc:  'Treats it as a safety gate, establishes why it ran out early and confirms weekly dosing (excludes the fatal daily-dose error), screens toxicity, verifies monitoring before prescribing, reinforces interactions counselling (and knows contraception is unlikely to apply at 58 — CoSRH), and reaches a safe disposition (appropriate quantity or urgent escalation) with documentation.'
      },
      avoid: [
        { dont:'"No problem, nothing\u2019s changed \u2014 I\u2019ll print it now so you catch your bus."', instead:'"Methotrexate is one I can\u2019t just reprint \u2014 let me quickly check how you\u2019ve been taking it and that your bloods are current; it keeps you safe."', why:'Reflexively reprinting a high-risk weekly drug risks missing daily-dosing errors, toxicity and overdue monitoring.' },
        { dont:'(Never asking) assuming weekly dosing.', instead:'"Just to be sure \u2014 you take it once a WEEK, on the same day, yes? Any chance it\u2019s been more often?"', why:'Failing to exclude inadvertent daily dosing misses a potentially fatal error.' },
        { dont:'"Your last bloods were a while ago but I\u2019ll prescribe anyway."', instead:'"Your monitoring is overdue \u2014 let\u2019s sort that as part of this rather than prescribe blind."', why:'Prescribing methotrexate with overdue/abnormal monitoring bypasses the shared-care safety system.' }
      ]
    },

    'anaphylaxis-epipen': {
      ceg: ['Urgent & unscheduled care', 'New & undifferentiated presentations'],
      stem: {
        name: 'Daniel Foster', age: '27 years \u00b7 male',
        pmh: ['Anaphylaxis 5 days ago (Thai meal): lip/tongue swelling, throat tightness, wheeze, lightheaded, urticaria \u2014 IM adrenaline by paramedics', 'A&E: short antihistamine course + "see GP for a plan"; suspected peanut', 'Shaken; no auto-injector yet'],
        meds: ['Antihistamine (short course)'],
        allergy: 'Suspected peanut (under investigation)',
        recent: '"What do I actually do if it happens again?"',
        reason: 'Video consultation \u2014 follow-up after an anaphylactic reaction.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Confirm + validate', d:'This was anaphylaxis (A/B/C \u00b1 skin); serious; future reactions can be worse; acknowledge he\u2019s shaken.' },
        { t:'2\u20134',  h:'Adrenaline first', d:'Pen first, not antihistamines; use early + 999; antihistamines don\u2019t treat airway/circulation.' },
        { t:'4\u20137',  h:'Teach the pen', d:'Outer thigh, hold, through clothing; carry TWO; expiry; train partner; teach-back on trainer.' },
        { t:'7\u20139',  h:'Action plan + biphasic', d:'Recognise\u2192adrenaline\u2192999\u2192lie flat/legs up\u2192second dose at 5 min; 999 even if pen works (biphasic).' },
        { t:'9\u201312', h:'Refer + avoid + support', d:'Allergy clinic (IgE/skin-prick, dietetics) — the NG258 referral A&E missed; asthma + co-factors; label-reading/cross-contamination/MedicAlert; address anxiety; 2 pens prescribed today.' }
      ],
      wordPics: {
        fail: 'Reassures and relies on antihistamines; doesn\u2019t prescribe/teach an auto-injector; no written plan; no allergy-clinic referral; ignores the biphasic risk and anxiety.',
        pass: 'Confirms anaphylaxis, prescribes and teaches an auto-injector with a written plan, and refers to allergy clinic.',
        exc:  'Confirms anaphylaxis and its seriousness, teaches adrenaline-first, prescribes and teaches two auto-injectors with teach-back, gives a written action plan (incl. lie-flat and second dose) and biphasic counselling, names and closes the NG258 gap (no pen, no referral at discharge), refers to allergy clinic with avoidance advice, asks about asthma and co-factors, and addresses the psychological impact \u2014 a complete aftercare package.'
      },
      avoid: [
        { dont:'"Keep taking antihistamines and you should be fine if it happens again."', instead:'"If it happens again, adrenaline \u2014 your pen \u2014 used early is what saves lives, then 999. Antihistamines won\u2019t fix a swelling throat."', why:'Relying on antihistamines for anaphylaxis is dangerous; adrenaline is first-line.' },
        { dont:'(Prescribing without teaching) "Here\u2019s a script for a pen."', instead:'"Let me show you on a trainer and have you demonstrate \u2014 and you carry two at all times."', why:'An untaught device and only one pen lead to failure in a real emergency.' },
        { dont:'"If the pen works, you don\u2019t need to bother with hospital."', instead:'"Always call 999 even if the pen works \u2014 reactions can come back hours later."', why:'Ignoring the biphasic-reaction risk can be fatal.' }
      ]
    },

    'weight-management-2026': {
      ceg: ['Long-term conditions & cancer', 'Mental health & addiction'],
      stem: {
        name: 'Deborah Achebe', age: '44 years \u00b7 female',
        pmh: ['BMI 36; prediabetes; hypertension', 'Repeated diet attempts with loss and regain; feels judged by past consultations', 'Requesting GLP-1 "jab"'],
        meds: ['Amlodipine'],
        allergy: 'NKDA',
        recent: '"Every doctor says eat less, move more \u2014 can I just have the jab? It feels like my last hope."',
        reason: 'Video consultation \u2014 seeking help with weight.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Tone + reframe', d:'Thank her; person-first language; obesity is a complex chronic condition, not willpower; undo the shame.' },
        { t:'2\u20135',  h:'Holistic assessment', d:'Weight history/attempts, diet/activity/sleep/mood/meds, endocrine (thyroid/PCOS), social; comorbidities (prediabetes/BP).' },
        { t:'5\u20137',  h:'Lifestyle foundation', d:'Tiered weight-management service + behavioural support; realistic health goals (modest sustained loss); NHS DPP; adjunct framing.' },
        { t:'7\u201310', h:'Honest on the jab', d:'GLP-1/tirzepatide: adjunct, specialist route (TA875/TA664; TA1026 cohort not met), side-effects incl. pancreatitis, MHRA contraception advice, regain on stopping, cost; orlistat; NG246 bariatric criteria.' },
        { t:'10\u201312',h:'Shared decision + follow-up', d:'Choose together; treat prediabetes/BP; realistic hope, no over-promise; refer + review.' }
      ],
      wordPics: {
        fail: 'Either lectures "eat less, move more" or hands over a GLP-1 with no assessment/lifestyle foundation and no honesty about limits/regain; uses stigmatising language.',
        pass: 'Uses kind language, assesses holistically, sets a lifestyle foundation, and discusses GLP-1/surgery options honestly with shared decision-making.',
        exc:  'Leads with non-stigmatising person-first language and reframes obesity as a complex chronic condition, assesses holistically (incl. mood/endocrine/social) and comorbidities, sets the lifestyle/tiered-service foundation, discusses GLP-1 (specialist-route eligibility, side-effects incl. pancreatitis, MHRA contraception advice, regain), orlistat and bariatric criteria honestly, makes a shared decision, and conveys realistic hope with follow-up.'
      },
      avoid: [
        { dont:'"You just need to eat less and move more \u2014 try harder before we talk about medication."', instead:'"\u2018Eat less, move more\u2019 ignores how complex weight is \u2014 let\u2019s treat this as the health issue it is and look at all the options together."', why:'Shaming, simplistic advice alienates the patient and ignores obesity as a complex chronic condition.' },
        { dont:'"Sure, I\u2019ll start you on the jab today \u2014 that\u2019ll sort it."', instead:'"It may well be an option, but for you it would come through the specialist service; it works alongside changes, has criteria and side-effects, and weight returns if you stop — let’s assess properly and decide together."', why:'Prescribing a GLP-1 with no assessment/lifestyle foundation and over-promising sets up failure and ignores eligibility.' },
        { dont:'(No comorbidity action) focusing only on the scale.', instead:'"Even a modest loss you can keep off really helps your blood pressure and diabetes risk — let’s aim for health, and treat those alongside."', why:'Ignoring the prediabetes/hypertension misses the medical drivers and a realistic, health-focused goal.' }
      ]
    }

  });

})();
