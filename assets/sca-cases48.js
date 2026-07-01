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
    meta:{ age:58, sex:'F', setting:'Video consultation \u2014 early request for a methotrexate repeat.', system:'Prescribing & pharmacology \u2014 methotrexate safety, shared care & the monitoring gate' },
    brief:'Mrs Bridget Nwosu, 58, has rheumatoid arthritis on weekly oral METHOTREXATE 17.5 mg (with folic acid) under rheumatology shared care. She requests an early repeat \u2014 she has "run out" sooner than expected \u2014 and wants it printed quickly. The examinable task is to treat this not as a clerical request but as a PRESCRIBING-SAFETY gate: clarify WHY it ran out early (dosing error/confusion, taking it more than weekly, hoarding, lost tablets, or someone else taking it?), actively exclude METHOTREXATE TOXICITY and the catastrophic DAILY-dosing error (methotrexate is WEEKLY \u2014 inadvertent daily dosing causes fatal toxicity), check that blood-test MONITORING is up to date (FBC, LFTs, U&E per shared-care schedule) before re-prescribing, screen for toxicity red flags (mouth ulcers/stomatitis, sore throat/infection \u2014 ?marrow suppression, breathlessness/dry cough \u2014 ?pneumonitis, nausea, jaundice), reinforce safety counselling (weekly dosing, folic acid, avoid trimethoprim/NSAID interactions and alcohol excess, sick-day/illness rules, contraception/teratogenicity), and adhere to shared-care/quantity safeguards \u2014 rather than reflexively printing a script. No NG12 cancer pathway applies.',
    script:{
      opening:'"Hi doctor, sorry \u2014 I\u2019ve run out of my methotrexate a bit early and I just need another prescription. Could you print one off quickly? I\u2019ve got the bus to catch. It\u2019s just my usual, nothing\u2019s changed, so it should be straightforward, shouldn\u2019t it?"',
      facts:[
        { topic:'Treat "ran out early" as a safety question, not admin', text:'KEY \u2014 an early methotrexate request is a SAFETY trigger, not a clerical task. Methotrexate is a high-risk drug with a narrow margin; "ran out early" must prompt: WHY? Possibilities include a dosing error (taking it more than once weekly), confusion over the regimen, hoarding, lost/spilt tablets, or diversion. Establish the actual recent dosing before anything is printed.' },
        { topic:'Exclude the catastrophic daily-dosing error', text:'CRITICAL \u2014 methotrexate for RA is WEEKLY. The classic, sometimes FATAL, error is inadvertent DAILY dosing (patient or dispensing/prescribing error). If she has been taking it daily, that is a medical EMERGENCY of methotrexate toxicity (mucositis, marrow suppression, GI and hepatic toxicity) requiring urgent assessment, bloods, folinic acid rescue and specialist input \u2014 NOT another prescription. Always confirm she knows and is taking it ONCE WEEKLY on a named day.' },
        { topic:'Screen for toxicity red flags', text:'Actively ask about toxicity: MOUTH ULCERS/stomatitis, SORE THROAT/fever/infection (possible neutropenia/marrow suppression), new BREATHLESSNESS or dry COUGH (methotrexate PNEUMONITIS \u2014 can be life-threatening), nausea/vomiting, abdominal pain or JAUNDICE (hepatotoxicity), and unusual bruising/bleeding. Any of these \u2192 hold methotrexate, check urgent bloods and assess/escalate, not re-prescribe.' },
        { topic:'Check monitoring is current \u2014 the gate', text:'Before re-prescribing under shared care, confirm MONITORING is up to date: FBC, LFTs and U&E/renal function at the schedule agreed (e.g. regularly, more often after dose changes). If bloods are overdue or abnormal, that must be addressed first. Renal impairment and interacting drugs raise toxicity risk. Re-prescribing blind, off-schedule, bypasses the safety system shared care exists to maintain.' },
        { topic:'Reinforce safety counselling & interactions', text:'Use the moment to reinforce: WEEKLY dosing on a set day; FOLIC ACID on a different day; AVOID TRIMETHOPRIM/co-trimoxazole (and high-dose NSAID/aspirin caution) \u2014 dangerous interactions increasing toxicity; limit alcohol (hepatotoxicity); illness/"sick-day" awareness; report sore throat/mouth ulcers/breathlessness promptly; effective CONTRACEPTION (teratogenic) and avoidance in pregnancy/conception. Confirm she has the methotrexate monitoring booklet.' },
        { topic:'The hidden agenda + safe disposition', text:'HIDDEN AGENDA \u2014 her "just print it, I\u2019ve a bus to catch" frames a high-risk drug as routine; the real reason it ran out early is the consultation. Be courteous but firm that you cannot safely print methotrexate without understanding the early request and confirming monitoring/safety. Depending on findings: clarify and correct a misunderstanding and issue an appropriate quantity per shared care; or, if toxicity/daily-dosing is found, treat as urgent. What she needs is safe care, not speed. No NG12 cancer pathway applies.' },
      ],
      ice:{
        ideas:'It\u2019s a routine, clerical repeat \u2014 "nothing\u2019s changed" \u2014 that can be printed quickly.',
        concerns:'(Surface) catching the bus / convenience. (Possible underlying) a dosing misunderstanding, lost tablets, or unrecognised toxicity she has not connected to the drug.',
        expectations:'A quick reprinted script. What she needs: clarification of WHY it ran out early, exclusion of daily-dosing/toxicity, confirmation that monitoring is current, safety counselling, and an appropriate, safe prescription \u2014 not a reflexive print.'
      },
      cues:['"Run out early" of WEEKLY methotrexate \u2014 a safety trigger, not admin; establish actual recent dosing before printing.','Exclude the catastrophic DAILY-dosing error and toxicity (mouth ulcers, sore throat, breathlessness/cough, jaundice) \u2014 emergency if present.','"Just print it, nothing\u2019s changed, I\u2019ve a bus" \u2014 high-risk drug framed as routine; check monitoring (FBC/LFT/U&E) is current first.']
    },
    checkpoints:[
      { dom:'tasks', text:'Treats the early methotrexate request as a PRESCRIBING-SAFETY gate, not a clerical task \u2014 actively clarifying WHY it ran out early (dosing error/confusion, more-than-weekly dosing, hoarding, lost tablets, diversion)' },
      { dom:'tasks', text:'Excludes the catastrophic DAILY-DOSING error \u2014 confirms methotrexate is taken ONCE WEEKLY on a named day \u2014 and recognises inadvertent daily dosing as a toxic emergency requiring urgent assessment/bloods/folinic acid rescue, not a reprint' },
      { dom:'tasks', text:'Screens TOXICITY red flags: mouth ulcers/stomatitis, sore throat/fever/infection (marrow suppression), new breathlessness/dry cough (pneumonitis), nausea/vomiting, abdominal pain/jaundice (hepatotoxicity), unusual bruising/bleeding \u2014 and would hold the drug and escalate if present' },
      { dom:'tasks', text:'Checks that blood-test MONITORING (FBC, LFTs, U&E) is up to date per shared care BEFORE re-prescribing, and addresses overdue/abnormal results first rather than prescribing blind' },
      { dom:'tasks', text:'Reinforces safety counselling \u2014 weekly dosing + folic acid on a different day, avoid trimethoprim/co-trimoxazole and NSAID/alcohol cautions, illness awareness, report toxicity symptoms, contraception/teratogenicity \u2014 and confirms the monitoring booklet' },
      { dom:'rto',   text:'Handles the "just print it, I\u2019ve a bus" pressure courteously but firmly \u2014 explaining WHY methotrexate cannot be reprinted without these checks \u2014 without being dismissive of her time' },
      { dom:'rto',   text:'Explains the reasoning so the patient understands the safety rationale (not bureaucracy), checks understanding of weekly dosing and red flags, and maintains rapport' },
      { dom:'gs',    text:'Reaches a SAFE disposition: corrects any misunderstanding and issues an appropriate quantity per shared care with monitoring confirmed, OR escalates urgently if toxicity/daily-dosing found; documents; arranges bloods/review and reinforces who to contact \u2014 safe care over speed' },
    ],
    worked:[
      { lbl:'Slow it down, kindly', txt:'"I know you\u2019re after a quick reprint and you\u2019ve a bus to catch \u2014 but methotrexate is one of the few medicines I can\u2019t just print without a couple of safety checks, because getting it wrong can be genuinely dangerous. Two minutes now keeps you safe. Bear with me."' },
      { lbl:'Clarify why it ran out', txt:'"Can you talk me through exactly how you\u2019ve been taking it \u2014 how many tablets, and how often? \u2026 Just so I\u2019m sure: it\u2019s once a WEEK, on the same day, isn\u2019t it? \u2026 Good. And do you know why it ran out early \u2014 lost some, or taking them differently?"' },
      { lbl:'Exclude toxicity', txt:'"A few quick safety questions: any mouth ulcers, sore throat or feeling feverish? Any new breathlessness or a dry cough? Any nausea, tummy pain or yellowing? \u2026 None \u2014 that\u2019s reassuring. Those are the things that would make me stop the drug straight away."' },
      { lbl:'Check the monitoring gate', txt:'"Let me check your blood tests are up to date \u2014 the count, liver and kidneys \u2014 because we keep an eye on those with methotrexate. \u2026 They\u2019re due/over due, so let\u2019s sort that as part of this rather than prescribe blind."' },
      { lbl:'Reinforce the safety rules', txt:'"While we\u2019re here \u2014 weekly on your set day, folic acid on a different day, and importantly avoid the antibiotic trimethoprim and go easy on anti-inflammatories and alcohol, as they don\u2019t mix well. Mouth ulcers, sore throat or breathlessness \u2014 contact us promptly. And it\u2019s vital to avoid pregnancy on it."' },
      { lbl:'Safe disposition + document', txt:'"Here\u2019s the plan: I\u2019ll arrange your bloods, issue the right amount per your shared-care plan once I\u2019m happy, and make sure your booklet\u2019s up to date. If anything I mentioned crops up, contact us the same day. I\u2019d rather get this right than rushed \u2014 thank you for bearing with me."' },
    ],
    learning:'An early methotrexate repeat is a PRESCRIBING-SAFETY gate, not a clerical task. Methotrexate for rheumatoid arthritis is a high-risk, narrow-margin drug taken ONCE WEEKLY, and "ran out early" must trigger the question WHY \u2014 a dosing error or confusion, taking it more than weekly, hoarding, lost tablets, or diversion. The catastrophic, sometimes FATAL error to exclude is inadvertent DAILY dosing (patient, dispensing or prescribing error): if present, it is a toxic emergency (mucositis, marrow suppression, GI/hepatic toxicity) needing urgent assessment, bloods, folinic acid rescue and specialist input \u2014 not another prescription \u2014 so always confirm weekly dosing on a named day. Actively screen toxicity red flags: mouth ulcers/stomatitis, sore throat/fever/infection (marrow suppression), new breathlessness or dry cough (methotrexate pneumonitis), nausea/vomiting, abdominal pain or jaundice (hepatotoxicity), and unusual bruising/bleeding \u2014 any of which mean hold the drug and escalate. Before re-prescribing under shared care, confirm MONITORING (FBC, LFTs, U&E) is current and act on overdue/abnormal results first, because re-prescribing blind bypasses the safety system shared care maintains. Reinforce safety counselling \u2014 weekly dosing with folic acid on a different day, avoidance of trimethoprim/co-trimoxazole and caution with NSAIDs/alcohol (dangerous interactions/hepatotoxicity), illness awareness, prompt reporting of toxicity symptoms, and effective contraception given teratogenicity \u2014 and confirm the monitoring booklet. Resist the "just print it, I\u2019ve a bus" pressure courteously but firmly, explaining the safety rationale, and reach a safe disposition: correct any misunderstanding and issue an appropriate quantity with monitoring confirmed, or escalate urgently if toxicity/daily-dosing is found. Safe care over speed; no NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Methotrexate safety (NPSA/MHRA) \u00b7 DMARD shared-care monitoring \u00b7 high-risk prescribing (no NG12 link)',
      points:[
        { h:'Early request = safety trigger', t:'An early methotrexate repeat is not clerical. Establish why it ran out early (dosing error/confusion, more-than-weekly dosing, hoarding, lost tablets, diversion) before prescribing.' },
        { h:'Weekly, never daily', t:'Methotrexate for RA is once weekly on a named day. Inadvertent daily dosing is a classic, potentially fatal error \u2014 a toxic emergency needing urgent assessment, bloods, folinic acid rescue and specialist input, not a reprint.' },
        { h:'Toxicity red flags', t:'Mouth ulcers/stomatitis, sore throat/fever/infection (marrow suppression), new breathlessness/dry cough (pneumonitis), nausea/vomiting, abdominal pain/jaundice (hepatotoxicity), unusual bruising/bleeding \u2192 hold and escalate.' },
        { h:'Monitoring gate', t:'Confirm FBC, LFTs and U&E are up to date per shared care before re-prescribing; act on overdue/abnormal results first. Renal impairment and interactions raise toxicity risk.' },
        { h:'Dangerous interactions', t:'Avoid trimethoprim/co-trimoxazole (profound marrow toxicity); caution with high-dose NSAIDs/aspirin and significant alcohol (hepatotoxicity). Reinforce folic acid on a different day.' },
        { h:'Counselling & teratogenicity', t:'Weekly dosing, folic acid, illness awareness, prompt reporting of toxicity symptoms, effective contraception and avoidance in pregnancy/conception (teratogenic). Confirm the monitoring booklet.' },
        { h:'Never do', t:'Never reflexively reprint methotrexate; never assume "nothing\u2019s changed"; never skip the daily-dosing/toxicity check; never prescribe with overdue/abnormal monitoring; never bypass shared-care safeguards under time pressure.' },
        { h:'Safe disposition & follow-up', t:'Correct misunderstandings and issue an appropriate quantity with monitoring confirmed, or escalate urgently if toxicity/daily-dosing found; document; arrange bloods/review; reinforce red flags and contacts. Safe care over speed.' }
      ]
    }
  };

  /* ============ 186. F2F — After an allergic reaction eating out: anaphylaxis plan + auto-injector teaching (urgent care; no NG12) ============ */
  const c186 = {
    id:'anaphylaxis-epipen', title:'"My face and throat swelled up at the restaurant \u2014 A&E sent me to you for a \u2018plan\u2019"', type:'video', duration:12,
    meta:{ age:27, sex:'M', setting:'Video consultation \u2014 follow-up after an anaphylactic reaction.', system:'Allergy / Urgent care \u2014 anaphylaxis aftercare, plan & adrenaline auto-injector teaching' },
    brief:'Mr Daniel Foster, 27, had a reaction eating out 5 days ago: within minutes of a Thai meal his lips and tongue swelled, his throat felt tight, he became wheezy and lightheaded with an urticarial rash. Paramedics gave intramuscular ADRENALINE; he recovered and A&E discharged him with a short course of antihistamine and "see your GP for a plan", and a suspected trigger of PEANUT. The examinable task is structured anaphylaxis AFTERCARE: confirm this was ANAPHYLAXIS (acute onset, airway/breathing/circulation involvement \u00b1 skin) and reinforce its seriousness; identify the likely allergen and arrange ALLERGY CLINIC referral (specific IgE/skin-prick testing, dietetic input); PRESCRIBE and TEACH the use of an ADRENALINE AUTO-INJECTOR (technique, carry TWO at all times, when to use it \u2014 early \u2014 and that adrenaline is first-line, call 999 and lie flat/legs raised, a second dose at 5 min if no improvement); provide a written personalised emergency ACTION PLAN; counsel on AVOIDANCE (label-reading, cross-contamination, informing restaurants, MedicAlert); address the biphasic-reaction risk and the psychological impact/anxiety; and ensure follow-up. No NG12 cancer pathway applies.',
    script:{
      opening:'"So I had a scary do at a restaurant last week \u2014 my lips and tongue swelled up, my throat went tight and I went wheezy and faint within minutes of eating. The paramedics gave me an injection in my thigh and it settled. A&E gave me antihistamines and said come to you for \u2018a plan\u2019. They reckon it was peanuts. Honestly I\u2019m a bit shaken \u2014 what do I actually do if it happens again?"',
      facts:[
        { topic:'Confirm this was anaphylaxis \u2014 and that it\u2019s serious', text:'ANAPHYLAXIS is a severe, life-threatening, generalised hypersensitivity reaction: ACUTE onset with AIRWAY (throat tightness, swelling), BREATHING (wheeze, dyspnoea) and/or CIRCULATION (lightheadedness, hypotension/collapse) problems, usually with skin/mucosal changes (urticaria, lip/tongue swelling). His rapid post-food reaction with airway/breathing/circulation involvement and a response to adrenaline confirms anaphylaxis. Reinforce that this is potentially fatal and that future reactions can be worse \u2014 which justifies the plan and auto-injector.' },
        { topic:'Adrenaline is first-line \u2014 not antihistamine', text:'CRITICAL TEACHING \u2014 in anaphylaxis, intramuscular ADRENALINE (into the outer thigh) is the FIRST-LINE, life-saving treatment, given EARLY; antihistamines and steroids are NOT a substitute and do not treat airway/circulatory compromise. He must understand to use the auto-injector at the first sign of a serious reaction and call 999, rather than reaching for antihistamines and waiting.' },
        { topic:'Prescribe and TEACH the auto-injector', text:'Prescribe an ADRENALINE AUTO-INJECTOR and TEACH it: device technique (remove safety cap, firm injection into the outer mid-thigh, hold in place per device instructions, can be through clothing), carry TWO devices AT ALL TIMES (a second dose may be needed and devices can misfire), check EXPIRY and replace, and that household/partner/work should know how to use it. Use a trainer pen and have him demonstrate (teach-back). Ensure he has them before leaving.' },
        { topic:'The written emergency action plan + when to use', text:'Provide/explain a PERSONALISED WRITTEN ACTION PLAN: recognise reaction \u2192 use adrenaline auto-injector EARLY \u2192 call 999 (say "anaphylaxis") \u2192 lie FLAT with legs raised (sit up only if breathing is easier; do not stand/walk \u2014 risk of fatal hypotension) \u2192 SECOND dose at 5 minutes if no improvement \u2192 stay with help. Counsel on the BIPHASIC reaction risk (recurrence hours later) \u2014 hence 999/observation even if the pen works.' },
        { topic:'Identify the allergen, refer, and avoidance', text:'Arrange ALLERGY CLINIC referral for confirmatory testing (specific IgE/skin-prick), trigger identification (likely peanut \u00b1 cross-reactive tree nuts) and DIETETIC advice. Counsel AVOIDANCE: meticulous label-reading, awareness of CROSS-CONTAMINATION (especially eating out \u2014 inform restaurants of the allergy), carrying an allergy card/MedicAlert, and the law/practicalities of declaring allergens. Review any future use of high-risk situations.' },
        { topic:'Psychological impact + follow-up', text:'COMMUNICATION \u2014 he is "shaken"; a near-fatal event commonly causes ANXIETY/avoidance and hypervigilance. Acknowledge this, normalise it, and offer support; confidence with the plan and auto-injector itself reduces fear. Ensure follow-up to confirm allergy-clinic attendance, device competence and replacement, and to address ongoing anxiety. No NG12 cancer pathway applies.' },
      ],
      ice:{
        ideas:'It was probably peanuts; he survived with an injection; now he needs to know what to do if it recurs.',
        concerns:'Fear of a worse/fatal reaction next time; feeling shaken/anxious; uncertainty about how to protect himself and what to carry.',
        expectations:'A clear "plan". What he needs: confirmation it was anaphylaxis and that adrenaline is first-line, an auto-injector prescribed and taught (carry two), a written action plan, allergy-clinic referral, avoidance advice, and support for the anxiety.'
      },
      cues:['Rapid post-food airway/breathing/circulation reaction + skin changes, responded to IM adrenaline \u2014 confirmed anaphylaxis; future reactions can be worse.','Adrenaline is FIRST-LINE, not antihistamine \u2014 teach early auto-injector use + 999 + lie flat; carry TWO devices; second dose at 5 min.','"What do I do if it happens again?" + shaken \u2014 written action plan, allergy-clinic referral, avoidance, and address the anxiety.']
    },
    checkpoints:[
      { dom:'tasks', text:'Confirms the episode was ANAPHYLAXIS (acute onset, airway/breathing/circulation involvement \u00b1 skin) and reinforces its life-threatening nature and that future reactions can be worse' },
      { dom:'tasks', text:'Teaches that intramuscular ADRENALINE is the FIRST-LINE, life-saving treatment given early \u2014 and that antihistamines/steroids are NOT a substitute for it' },
      { dom:'tasks', text:'PRESCRIBES and TEACHES the adrenaline auto-injector \u2014 technique (outer mid-thigh, hold in place, can be through clothing), carry TWO at all times, check expiry/replace, train household/partner \u2014 with teach-back using a trainer device' },
      { dom:'tasks', text:'Provides a personalised WRITTEN ACTION PLAN \u2014 recognise \u2192 adrenaline early \u2192 call 999 ("anaphylaxis") \u2192 lie flat/legs raised (don\u2019t stand) \u2192 second dose at 5 min if no improvement \u2014 and counsels the BIPHASIC reaction risk' },
      { dom:'tasks', text:'Arranges ALLERGY CLINIC referral (specific IgE/skin-prick testing, dietetics) and counsels AVOIDANCE (label-reading, cross-contamination, informing restaurants, allergy card/MedicAlert)' },
      { dom:'rto',   text:'Acknowledges that he is shaken, normalises post-anaphylaxis anxiety/hypervigilance, and offers reassurance and support \u2014 framing the plan and device as restoring control' },
      { dom:'rto',   text:'Explains clearly and checks understanding (teach-back of when and how to use the pen), pacing the information so a shaken patient retains the key actions' },
      { dom:'gs',    text:'Safety-nets and follows up: ensures he leaves WITH two in-date auto-injectors and the written plan, confirms competence, arranges allergy-clinic referral and review of device/anxiety, and reinforces 999/lie-flat/second-dose \u2014 a complete anaphylaxis aftercare package' },
    ],
    worked:[
      { lbl:'Confirm + validate', txt:'"What you had was anaphylaxis \u2014 a severe, whole-body allergic reaction affecting your throat, breathing and blood pressure. It\u2019s serious, and the paramedics did exactly the right thing. It\u2019s completely understandable you\u2019re shaken \u2014 and the good news is we can give you a solid plan so you\u2019re in control if it ever happens again."' },
      { lbl:'Adrenaline first \u2014 the key message', txt:'"The single most important thing: if it happens again, the treatment that saves lives is adrenaline \u2014 your pen \u2014 used EARLY, not antihistamines. Antihistamines are for mild itch; they don\u2019t fix a swelling throat. Pen first, then 999."' },
      { lbl:'Teach the pen (teach-back)', txt:'"Let me show you on a trainer, then you show me. Cap off, press firmly into the outer thigh \u2014 through clothing is fine \u2014 hold it there. You carry TWO at all times, because you may need a second and pens can fail. Show me how you\u2019d do it \u2026 perfect."' },
      { lbl:'The action plan', txt:'"Here\u2019s your written plan: use the pen, call 999 and say \u2018anaphylaxis\u2019, then lie flat with your legs up \u2014 don\u2019t stand or walk, that\u2019s important. If you\u2019re no better after 5 minutes, use the second pen. And even if it works, you still need 999, because reactions can come back a few hours later."' },
      { lbl:'Find the trigger + avoid', txt:'"I\u2019m referring you to the allergy clinic to confirm exactly what caused it \u2014 likely peanut, possibly other nuts \u2014 with testing and a dietitian. Meanwhile: read every label, assume cross-contamination, tell restaurants clearly, and I\u2019d get a medical-alert bracelet."' },
      { lbl:'Support + safety-net', txt:'"You\u2019ll leave today with two in-date pens and this plan. It\u2019s normal to feel anxious after something this frightening \u2014 carrying the pen and knowing the plan usually helps a lot, and if the worry lingers, come back. Let\u2019s review once the allergy clinic\u2019s seen you. Any questions?"' },
    ],
    learning:'Anaphylaxis aftercare is a structured, examinable package. First, confirm the episode was ANAPHYLAXIS \u2014 acute onset with AIRWAY (throat tightness/swelling), BREATHING (wheeze/dyspnoea) and/or CIRCULATION (lightheadedness/hypotension/collapse) involvement, usually with skin/mucosal changes \u2014 and reinforce that it is life-threatening and that future reactions can be worse, which justifies the plan and auto-injector. The critical teaching is that intramuscular ADRENALINE into the outer thigh is the FIRST-LINE, life-saving treatment given EARLY, and that antihistamines and steroids are NOT a substitute. PRESCRIBE and TEACH the adrenaline auto-injector \u2014 technique (cap off, firm injection into the outer mid-thigh, held in place, through clothing if needed), carrying TWO devices at all times (a second dose may be needed and devices can fail), checking expiry and replacing, and training household/partner \u2014 using a trainer pen with teach-back. Provide a personalised WRITTEN ACTION PLAN: recognise \u2192 adrenaline early \u2192 call 999 (state "anaphylaxis") \u2192 lie FLAT with legs raised (do not stand or walk \u2014 risk of fatal hypotension; sit up only if breathing is easier) \u2192 SECOND dose at 5 minutes if no improvement \u2192 stay with help \u2014 and counsel the BIPHASIC reaction risk, so 999/observation is needed even if the pen works. Arrange ALLERGY CLINIC referral for confirmatory specific-IgE/skin-prick testing, trigger identification (likely peanut \u00b1 cross-reactive tree nuts) and dietetic advice, and counsel AVOIDANCE (label-reading, cross-contamination, informing restaurants, allergy card/MedicAlert). Finally, acknowledge and address the psychological impact \u2014 anxiety and hypervigilance are common after a near-fatal event \u2014 ensure he leaves with two in-date devices and the written plan, confirm competence, and follow up. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Resuscitation Council UK anaphylaxis \u00b7 NICE CG134 anaphylaxis aftercare \u00b7 adrenaline auto-injector (MHRA) (no NG12 link)',
      points:[
        { h:'Recognise anaphylaxis', t:'Acute onset with airway/breathing/circulation compromise \u00b1 skin/mucosal changes. Life-threatening; future reactions may be worse. A response to adrenaline supports the diagnosis.' },
        { h:'Adrenaline first-line', t:'IM adrenaline into the outer thigh, given early, is the life-saving treatment. Antihistamines/steroids are adjuncts at most and do not treat airway/circulatory compromise \u2014 never a substitute.' },
        { h:'Auto-injector teaching', t:'Prescribe and teach: technique (cap off, firm outer-thigh injection, hold, through clothing OK), carry TWO at all times, check/replace by expiry, train household/partner, demonstrate with a trainer (teach-back).' },
        { h:'Written action plan', t:'Recognise \u2192 adrenaline early \u2192 999 ("anaphylaxis") \u2192 lie flat, legs raised (don\u2019t stand/walk) \u2192 second dose at 5 min if no improvement \u2192 stay with help. Provide a personalised plan.' },
        { h:'Biphasic reaction', t:'Reactions can recur hours later; 999/observation is required even after a successful auto-injector use. Counsel explicitly.' },
        { h:'Identify trigger & avoid', t:'Allergy-clinic referral for specific IgE/skin-prick testing and dietetics; avoidance (label-reading, cross-contamination, informing restaurants, allergy card/MedicAlert). Likely peanut \u00b1 tree-nut cross-reactivity.' },
        { h:'Psychological impact', t:'Anxiety/hypervigilance is common after a near-fatal event; acknowledge, normalise, and support. Competence with the plan/device reduces fear; offer review if anxiety persists.' },
        { h:'Never do', t:'Never rely on antihistamines for anaphylaxis; never discharge without an in-date auto-injector \u00d72 and a written plan; never omit teach-back; never advise standing/walking; never skip allergy-clinic referral; no invented cancer pathway.' }
      ]
    }
  };

  /* ============ 187. F2F — Weight management consultation, said kindly (2026 options; no NG12) ============ */
  const c187 = {
    id:'weight-management-2026', title:'"Every doctor just tells me to eat less and move more \u2014 I\u2019ve heard about the jab, can I have it?"', type:'video', duration:12,
    meta:{ age:44, sex:'F', setting:'Video consultation \u2014 a patient seeking help with weight.', system:'Metabolic / Lifestyle \u2014 weight management done kindly, with 2026 options' },
    brief:'Mrs Deborah Achebe, 44, BMI 36, with prediabetes and hypertension, comes \u2014 having steeled herself \u2014 to ask for help with her weight, specifically "the jab" (a GLP-1 receptor agonist) she has read about. She has dieted repeatedly, lost and regained, and feels judged by past consultations ("just eat less and move more"). The examinable task is the weight-management consultation done WELL and KINDLY in line with 2026 practice: use NON-STIGMATISING, person-centred language and acknowledge that obesity is a complex chronic condition (not a willpower failure); assess holistically (causes/contributors \u2014 diet, activity, sleep, mood, medications, endocrine e.g. hypothyroidism/PCOS, social determinants; weight history; comorbidities; readiness); set the foundation of structured LIFESTYLE/behavioural support and tiered weight-management services; discuss PHARMACOTHERAPY honestly \u2014 GLP-1 receptor agonists (e.g. semaglutide/liraglutide; the dual agonist tirzepatide) including realistic eligibility/criteria, how they work, benefits, side-effects (GI, the need to combine with lifestyle, weight regain on stopping, cost/availability/specialist-service routes), and orlistat \u2014 and BARIATRIC SURGERY referral criteria; manage expectations and shared decision-making; and address the comorbidities. No NG12 cancer pathway applies.',
    script:{
      opening:'"Right, I\u2019ve psyched myself up to come in about my weight \u2014 I find these conversations humiliating, to be honest. Every doctor just says \u2018eat less, move more\u2019 like I haven\u2019t tried. I\u2019ve lost weight loads of times and it always comes back. I\u2019ve read about the weight-loss jab \u2014 can I just have that? I feel like it\u2019s my last hope."',
      facts:[
        { topic:'Language and framing first \u2014 the whole consultation', text:'CORE SKILL \u2014 weight is a sensitive, stigmatised topic; the FRAMING determines whether the consultation helps. Use non-judgemental, PERSON-FIRST language ("a person living with obesity", ask permission to discuss weight), acknowledge her courage in coming and the unhelpfulness of past "eat less, move more" messaging, and frame obesity as a COMPLEX, RELAPSING-REMITTING chronic condition with biological, psychological and social drivers \u2014 not a personal failing. Getting this right is most of the marks.' },
        { topic:'Assess holistically before prescribing', text:'Take a proper history rather than jumping to "the jab": weight history and previous attempts, DIET and eating patterns (incl. emotional/binge eating), physical activity, SLEEP, MOOD (depression, low self-esteem, the bidirectional link), MEDICATIONS that cause gain, and screen ENDOCRINE/secondary causes where indicated (hypothyroidism, PCOS, Cushing\u2019s rarely), plus social determinants (food environment, finances, caring). Assess COMORBIDITIES (her prediabetes and hypertension), measure BMI/waist, and gauge readiness/goals. This both guides treatment and shows her she is taken seriously.' },
        { topic:'Lifestyle/behavioural foundation & tiered services', text:'All pharmacological/surgical options are ADJUNCTS to, not replacements for, structured LIFESTYLE and behavioural support. Offer/refer to tiered weight-management services (multidisciplinary, behavioural, dietetic, activity), set realistic, health-focused goals (5\u201310% loss meaningfully improves prediabetes/BP), and frame success as sustained change and health, not just the scale.' },
        { topic:'Pharmacotherapy \u2014 honest about the "jab"', text:'Discuss GLP-1 receptor agonists honestly: drugs like semaglutide/liraglutide and the dual GIP/GLP-1 agonist tirzepatide reduce appetite and produce significant weight loss AS AN ADJUNCT to lifestyle; but counsel ELIGIBILITY/access (NICE criteria, typically BMI thresholds with comorbidity, and often via SPECIALIST weight-management services/specific NHS routes \u2014 availability and funding vary), SIDE-EFFECTS (nausea/GI, gallbladder, others), the need to COMBINE with lifestyle, likely WEIGHT REGAIN if stopped (raising the question of long-term use), pregnancy avoidance, and COST if private. Mention ORLISTAT as an alternative. Be honest it is a tool, not a magic cure or "last hope".' },
        { topic:'Bariatric surgery & the bigger picture', text:'Outline BARIATRIC SURGERY referral criteria for those who meet thresholds (e.g. higher BMI \u00b1 comorbidity such as her prediabetes, after specialist assessment) as part of the tiered approach, and that it is highly effective for sustained loss and metabolic disease. Place all options on a spectrum and make a SHARED DECISION aligned to her values and circumstances.' },
        { topic:'Comorbidities + hope, not stigma', text:'Address the prediabetes and hypertension (the medical drivers to act), and convey realistic HOPE: she is not out of options or to blame, effective treatments exist, and you will support her over time. Avoid both stigma and over-promising. Arrange follow-up and referral as agreed. No NG12 cancer pathway applies.' },
      ],
      ice:{
        ideas:'Past advice ("eat less, move more") has failed; the GLP-1 "jab" is the answer and possibly her "last hope".',
        concerns:'Feeling judged/humiliated in weight consultations; repeated loss-and-regain; fear of being dismissed again.',
        expectations:'To be prescribed "the jab". What she needs: a kind, non-stigmatising consultation; holistic assessment; lifestyle/behavioural foundation + tiered services; honest discussion of pharmacotherapy eligibility/limits and surgery; comorbidity management; shared decision and follow-up.'
      },
      cues:['BMI 36 + prediabetes + hypertension, repeated loss-regain, feels judged \u2014 frame obesity as a complex chronic condition, use kind person-first language.','"Just give me the jab, it\u2019s my last hope" \u2014 discuss GLP-1 honestly: adjunct to lifestyle, eligibility/specialist routes, side-effects, regain on stopping; not a magic cure.','Assess holistically (diet/activity/sleep/mood/meds/endocrine/social) + comorbidities; offer tiered services; consider bariatric criteria; shared decision.']
    },
    checkpoints:[
      { dom:'tasks', text:'Uses NON-STIGMATISING, person-first language, asks permission to discuss weight, acknowledges her courage and the unhelpfulness of past messaging, and frames obesity as a COMPLEX chronic relapsing condition (not willpower)' },
      { dom:'tasks', text:'Assesses HOLISTICALLY before prescribing \u2014 weight history/attempts, diet/eating patterns, activity, sleep, mood, medications, secondary/endocrine causes (hypothyroidism/PCOS) where indicated, and social determinants \u2014 and assesses comorbidities (prediabetes, hypertension), BMI/waist and readiness' },
      { dom:'tasks', text:'Establishes the LIFESTYLE/behavioural foundation and tiered weight-management services as the basis, with realistic health-focused goals (5\u201310% loss improves prediabetes/BP) \u2014 framing drugs/surgery as adjuncts, not replacements' },
      { dom:'tasks', text:'Discusses GLP-1 pharmacotherapy HONESTLY \u2014 mechanism and efficacy as an adjunct; eligibility/NICE criteria and specialist-service/NHS access; side-effects; need to combine with lifestyle; weight regain on stopping; pregnancy avoidance; cost if private \u2014 and mentions orlistat as an alternative' },
      { dom:'tasks', text:'Outlines BARIATRIC SURGERY referral criteria as part of the tiered approach for those meeting thresholds, and manages expectations that the "jab" is a tool, not a magic cure or "last hope"' },
      { dom:'rto',   text:'Responds to her feeling judged with genuine empathy and respect, builds trust, and avoids any shaming or dismissive language throughout' },
      { dom:'tasks', text:'Makes a SHARED DECISION aligned to her values/circumstances, addresses the prediabetes and hypertension, and conveys realistic hope rather than stigma or over-promising' },
      { dom:'gs',    text:'Safety-nets and follows up: agreed plan (lifestyle + referral to tiered/specialist service \u00b1 pharmacotherapy route as eligible), comorbidity monitoring, realistic expectations and regain-on-stopping counselling, and review \u2014 a kind, evidence-based, person-centred plan; no invented cancer pathway' },
    ],
    worked:[
      { lbl:'Set the tone, undo the shame', txt:'"Before anything else \u2014 thank you for coming in; I know these conversations can feel horrible, and I\u2019m sorry past ones have felt like blame. \u2018Eat less, move more\u2019 ignores that weight is genuinely complex \u2014 biology, hormones, life, mood all play a part. This isn\u2019t a willpower failing, and we\u2019ll approach it as a health issue, together."' },
      { lbl:'Take it seriously \u2014 assess', txt:'"To help properly, let me understand the whole picture \u2014 what\u2019s worked and not before, your eating and activity, sleep, mood, any medications, and how things are at home. And I\u2019ll check a couple of things like your thyroid. Your blood pressure and the prediabetes matter here too."' },
      { lbl:'The honest bit on the jab', txt:'"Now, the jab \u2014 the GLP-1 medicines are genuinely effective and a real advance, and they may well be an option for you. But honest truths: they work best ALONGSIDE changes, not instead of them; access is through specific criteria and often a specialist service; they have side-effects, mostly tummy upset; and the weight tends to return if you stop, so it\u2019s a longer-term commitment. It\u2019s a powerful tool, not a magic wand or your last hope."' },
      { lbl:'The full menu', txt:'"So here\u2019s the range: structured support through a weight-management service as the foundation, medication like the GLP-1 or orlistat where you\u2019re eligible, and for some people weight-loss surgery, which is very effective \u2014 and given your BMI and prediabetes, that could be on the table too. We choose together what fits you."' },
      { lbl:'Goals + comorbidities', txt:'"A realistic first goal isn\u2019t a magazine figure \u2014 even 5\u201310% off makes a real difference to your blood pressure and your diabetes risk. Let\u2019s aim for health and something sustainable, and treat the blood pressure and sugar alongside."' },
      { lbl:'Plan + follow-up', txt:'"Let\u2019s agree a start: I\u2019ll refer you to the weight-management service, sort the eligibility for medication, check those bloods, and review your blood pressure. Come back and we\u2019ll keep adjusting \u2014 you\u2019re not on your own with this, and there are real options now."' },
    ],
    learning:'A weight-management consultation done well hinges first on LANGUAGE and FRAMING: weight is stigmatised, so use non-judgemental, person-first language, ask permission to discuss weight, acknowledge the patient\u2019s courage and the unhelpfulness of past "eat less, move more" messaging, and frame obesity as a COMPLEX, relapsing-remitting chronic condition with biological, psychological and social drivers \u2014 not a willpower failing. Assess HOLISTICALLY before reaching for "the jab": weight history and previous attempts, diet/eating patterns (including emotional/binge eating), activity, sleep, mood (the bidirectional link with low mood/self-esteem), medications causing gain, secondary/endocrine causes where indicated (hypothyroidism, PCOS, rarely Cushing\u2019s), and social determinants, alongside comorbidities (here prediabetes and hypertension), BMI/waist and readiness. Establish structured LIFESTYLE and behavioural support plus tiered weight-management services as the foundation, with realistic health-focused goals (5\u201310% loss meaningfully improves prediabetes and BP), framing pharmacotherapy and surgery as adjuncts. Discuss GLP-1 receptor agonists (semaglutide/liraglutide; the dual agonist tirzepatide) HONESTLY \u2014 effective appetite-reducing adjuncts, but with eligibility/NICE criteria and often specialist-service/specific NHS access, GI and other side-effects, the need to combine with lifestyle, likely weight regain on stopping (a long-term-use question), pregnancy avoidance and cost if private \u2014 and mention orlistat; outline BARIATRIC SURGERY criteria for those meeting thresholds (high BMI \u00b1 comorbidity such as her prediabetes) as part of the tiered approach. Manage expectations that the jab is a tool, not a magic cure or "last hope", make a shared decision aligned to her values, address the comorbidities, and convey realistic hope rather than stigma or over-promising, with follow-up. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE obesity management (CG189/NG246-era) \u00b7 GLP-1 RAs & tirzepatide \u00b7 tiered weight-management & bariatric criteria \u00b7 non-stigmatising care (no NG12 link)',
      points:[
        { h:'Language & framing', t:'Use person-first, non-judgemental language; ask permission to discuss weight; acknowledge courage and past unhelpful messaging; frame obesity as a complex chronic relapsing condition, not willpower failure. This is central to the consultation.' },
        { h:'Holistic assessment', t:'Weight history/attempts, diet/eating patterns, activity, sleep, mood, medications, secondary/endocrine causes (hypothyroidism/PCOS), social determinants; assess comorbidities (prediabetes, hypertension), BMI/waist, readiness.' },
        { h:'Lifestyle foundation', t:'Structured behavioural/dietary/activity support and tiered weight-management services underpin all treatment; realistic health-focused goals (5\u201310% loss improves prediabetes/BP). Drugs/surgery are adjuncts.' },
        { h:'GLP-1 pharmacotherapy \u2014 honestly', t:'Semaglutide/liraglutide and dual agonist tirzepatide reduce appetite and produce significant loss as adjuncts; counsel eligibility/NICE criteria and specialist-service/NHS access, GI/other side-effects, combine-with-lifestyle, weight regain on stopping, pregnancy avoidance, and cost if private. Orlistat is an alternative.' },
        { h:'Bariatric surgery', t:'Outline referral criteria (higher BMI \u00b1 comorbidity, after specialist assessment); highly effective for sustained loss and metabolic disease. Part of the tiered spectrum.' },
        { h:'Shared decision & expectations', t:'Choose options with the patient per values/circumstances; the jab is a tool, not a magic cure or "last hope". Address comorbidities; convey realistic hope, avoid stigma and over-promising.' },
        { h:'Never do', t:'Never use shaming/"eat less, move more" dismissal; never prescribe pharmacotherapy without holistic assessment and lifestyle foundation; never over-promise the "jab" or omit regain-on-stopping; never invent an NG12 cancer pathway.' },
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
        { t:'8\u201312', h:'Counsel + safe disposition', d:'Weekly + folic acid; avoid trimethoprim/NSAID/alcohol; contraception; issue appropriate quantity or escalate; document.' }
      ],
      wordPics: {
        fail: 'Prints the repeat reflexively as "nothing\u2019s changed"; never asks how it\u2019s being taken; misses daily dosing/toxicity; ignores overdue monitoring.',
        pass: 'Clarifies the early request, excludes daily dosing/toxicity, checks monitoring, and reaches a safe disposition.',
        exc:  'Treats it as a safety gate, establishes why it ran out early and confirms weekly dosing (excludes the fatal daily-dose error), screens toxicity, verifies monitoring before prescribing, reinforces interactions/teratogenicity counselling, and reaches a safe disposition (appropriate quantity or urgent escalation) with documentation.'
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
        { t:'9\u201312', h:'Refer + avoid + support', d:'Allergy clinic (IgE/skin-prick, dietetics); label-reading/cross-contamination/MedicAlert; address anxiety; leave with 2 pens.' }
      ],
      wordPics: {
        fail: 'Reassures and relies on antihistamines; doesn\u2019t prescribe/teach an auto-injector; no written plan; no allergy-clinic referral; ignores the biphasic risk and anxiety.',
        pass: 'Confirms anaphylaxis, prescribes and teaches an auto-injector with a written plan, and refers to allergy clinic.',
        exc:  'Confirms anaphylaxis and its seriousness, teaches adrenaline-first, prescribes and teaches two auto-injectors with teach-back, gives a written action plan (incl. lie-flat and second dose) and biphasic counselling, refers to allergy clinic with avoidance advice, and addresses the psychological impact \u2014 a complete aftercare package.'
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
        { t:'5\u20137',  h:'Lifestyle foundation', d:'Tiered weight-management service + behavioural support; realistic 5\u201310% health goals; adjunct framing.' },
        { t:'7\u201310', h:'Honest on the jab', d:'GLP-1/tirzepatide: adjunct, eligibility/specialist routes, side-effects, regain on stopping, cost; orlistat; bariatric criteria.' },
        { t:'10\u201312',h:'Shared decision + follow-up', d:'Choose together; treat prediabetes/BP; realistic hope, no over-promise; refer + review.' }
      ],
      wordPics: {
        fail: 'Either lectures "eat less, move more" or hands over a GLP-1 with no assessment/lifestyle foundation and no honesty about limits/regain; uses stigmatising language.',
        pass: 'Uses kind language, assesses holistically, sets a lifestyle foundation, and discusses GLP-1/surgery options honestly with shared decision-making.',
        exc:  'Leads with non-stigmatising person-first language and reframes obesity as a complex chronic condition, assesses holistically (incl. mood/endocrine/social) and comorbidities, sets the lifestyle/tiered-service foundation, discusses GLP-1 (eligibility/side-effects/regain), orlistat and bariatric criteria honestly, makes a shared decision, and conveys realistic hope with follow-up.'
      },
      avoid: [
        { dont:'"You just need to eat less and move more \u2014 try harder before we talk about medication."', instead:'"\u2018Eat less, move more\u2019 ignores how complex weight is \u2014 let\u2019s treat this as the health issue it is and look at all the options together."', why:'Shaming, simplistic advice alienates the patient and ignores obesity as a complex chronic condition.' },
        { dont:'"Sure, I\u2019ll start you on the jab today \u2014 that\u2019ll sort it."', instead:'"It may well be an option, but it works alongside changes, has criteria and side-effects, and weight returns if you stop \u2014 let\u2019s assess properly and decide together."', why:'Prescribing a GLP-1 with no assessment/lifestyle foundation and over-promising sets up failure and ignores eligibility.' },
        { dont:'(No comorbidity action) focusing only on the scale.', instead:'"Even 5\u201310% off really helps your blood pressure and diabetes risk \u2014 let\u2019s aim for health, and treat those alongside."', why:'Ignoring the prediabetes/hypertension misses the medical drivers and a realistic, health-focused goal.' }
      ]
    }

  });

})();
