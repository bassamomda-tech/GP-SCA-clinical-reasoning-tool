/* ============================================================
   Reasoning GP — Case Library batch 39: "Dependence-forming requests"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   Professional/ethical dilemmas: opioids, OST bridging, prison-release
   continuity, benzodiazepine policy. No NG12 link applies.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases38.js.
   ============================================================ */

(function(){

  /* ============ 149. VIDEO — Opioid escalation in chronic back pain ============ */
  const c149 = {
    id:'opioid-escalation', title:'"The tramadol\u2019s not touching it \u2014 I need something stronger"', type:'video', duration:12,
    meta:{ age:48, sex:'M', setting:'Video consultation \u2014 request to increase opioids for chronic back pain.', system:'Pain / Opioids in chronic pain' },
    brief:'Mr Craig Hollis, 48, ex-warehouse worker. Chronic non-specific low back pain ~4 years; on escalating opioids (now tramadol + codeine), requesting "something stronger \u2014 morphine". No new red-flag features. On exploration: the opioids barely help the pain but he\u2019s frightened of being without them; he\u2019s low in mood, off work, isolated, and there are signs of tolerance/dependence. He\u2019s also lost his sense of purpose since the injury ended his job. The request is for escalation; the need is a whole-person pain and mood plan.',
    script:{
      opening:'"Doc, I\u2019m at the end of my tether. The tramadol and the codeine just aren\u2019t touching this back pain anymore \u2014 I need something stronger, morphine or whatever it takes. I can\u2019t live like this. Just up the dose or give me the strong stuff, please. I\u2019m not a drug seeker, I\u2019m in genuine pain and nobody\u2019s helping me."',
      facts:[
        { topic:'Opioids in chronic pain', text:'Long-term opioids are largely INEFFECTIVE for chronic non-cancer pain and carry real harms (tolerance, dependence, hyperalgesia, sedation, falls, hormonal/mood effects, overdose). Escalating because "it\u2019s not working" usually reflects tolerance/dependence, not under-treatment \u2014 and higher doses rarely improve function. The honest message: stronger opioids are unlikely to help and may harm; the plan is a whole-person approach and a careful, supported reduction \u2014 NOT escalation.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 beneath "give me morphine" is FEAR of being left in pain and without the tablets he\u2019s become dependent on, plus profound loss: the injury ended his job and identity, he\u2019s low/depressed, isolated and purposeless, and the opioids have become a way of coping with emotional as well as physical pain. "I\u2019m not a drug seeker" reveals his fear of being judged. The real work is the mood, the loss, and a supported pain plan \u2014 not the prescription.' },
        { topic:'What actually helps', text:'Evidence-based chronic-pain management: supported self-management, physical activity/physiotherapy, psychological approaches (pain is real but the nervous system amplifies it), addressing mood/depression and sleep, social/occupational support, and a structured, agreed opioid REDUCTION with support \u2014 framed compassionately, not as abandonment. Validate that the pain is real while being honest that opioids aren\u2019t the answer.' },
        { topic:'The trap',            text:'Both poles fail: simply escalating (collusion \u2014 more harm, more dependence) OR a flat refusal/"it\u2019s all in your head" that ruptures trust and abandons him. The skill is honest, validating partnership: name the dependence and the futility of escalation kindly, treat the mood and the loss, and offer a real plan he doesn\u2019t have to face alone.' },
        { topic:'What he needs',        text:'Officially: stronger opioids. What he needs: validation that his pain is real; an honest explanation that escalating opioids won\u2019t help and may harm (and that needing more reflects tolerance/dependence); a whole-person plan (activity/physio, psychological support, mood treatment, social/occupational help) and a supported opioid reduction; the fear of abandonment and being judged addressed; and follow-up \u2014 not a bigger prescription.' },
      ],
      ice:{
        ideas:'His pain is under-treated and a stronger opioid (morphine) will finally control it.',
        concerns:'HIDDEN AGENDA \u2014 fear of being left in pain and without the tablets he depends on; loss of job/identity since the injury, low mood, isolation and purposelessness, with opioids coping for emotional as well as physical pain; fear of being judged a "drug seeker".',
        expectations:'A stronger opioid / dose increase. What he actually needs: validation, an honest explanation that escalation won\u2019t help and may harm, a whole-person pain + mood plan, a supported opioid reduction, and the fear of abandonment addressed.'
      },
      cues:['"It\u2019s not touching it, give me morphine" \u2014 needing more usually reflects tolerance/dependence, not under-treatment; escalation rarely helps.','"I\u2019m not a drug seeker, nobody\u2019s helping me" \u2014 fear of judgement + abandonment; the loss and low mood underneath.','Off work, isolated, low since the injury \u2014 the emotional pain the opioids are also medicating; the real work.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises that long-term opioids are largely INEFFECTIVE for chronic non-cancer pain and carry real harms, and that needing "something stronger" usually reflects TOLERANCE/DEPENDENCE rather than under-treatment \u2014 so does NOT simply escalate to morphine/increase the dose' },
      { dom:'tasks', text:'VALIDATES that the pain is real (avoiding "it\u2019s all in your head") while honestly explaining why escalation won\u2019t help and may harm \u2014 holding the line without abandoning him' },
      { dom:'tasks', text:'Explores and addresses the WHOLE picture: mood/depression, sleep, the loss of job/identity, isolation and purpose, and function \u2014 recognising the opioids are coping with emotional as well as physical pain' },
      { dom:'tasks', text:'Offers an evidence-based chronic-pain PLAN: supported self-management, physical activity/physiotherapy, psychological approaches (e.g. pain-management programme/CBT), treating mood, and social/occupational support \u2014 rather than a pharmacological-only approach' },
      { dom:'tasks', text:'Proposes a STRUCTURED, SUPPORTED opioid reduction (not abrupt withdrawal), framed as reducing harm and often improving pain/function \u2014 with the patient as a partner and clear support, not as punishment or abandonment' },
      { dom:'rto',   text:'Hears the fear of abandonment and being judged ("I\u2019m not a drug seeker") and responds with warmth and partnership, neither colluding with escalation nor rupturing trust with a flat refusal' },
      { dom:'rto',   text:'Surfaces the loss/low mood with compassion and frames the plan as helping the whole person, so he feels supported rather than dismissed' },
      { dom:'gs',    text:'Safety-nets and follows up: the agreed plan (physio/psychological/mood support, supported reduction), what help is available, mood/risk review, and a clear follow-up \u2014 partnership over a prescription, with the patient not left to cope alone' },
    ],
    worked:[
      { lbl:'Validate the pain',    txt:'"First \u2014 I believe you. Your pain is real, I\u2019m not for one second saying it\u2019s in your head, and you\u2019re not a drug seeker. Four years of this would grind anyone down. So let\u2019s work on it honestly together, because I don\u2019t think you\u2019re getting the help you deserve."' },
      { lbl:'The honest truth on opioids', txt:'"Here\u2019s the hard, honest bit though: the reason the tablets aren\u2019t touching it isn\u2019t that the dose is too low \u2014 it\u2019s that strong painkillers like these mostly DON\u2019T work for long-term pain like yours, and the body gets used to them so you need more for less benefit. Going up to morphine is very unlikely to help your pain and quite likely to harm you \u2014 the sleepiness, the falls, the way it can actually make pain worse over time. I\u2019d be failing you to just hand it over."' },
      { lbl:'Surface the real load', txt:'"Can I ask how things are beyond the pain? Since the injury ended your job \u2026 \u2026 That\u2019s a huge loss \u2014 your work, your routine, your sense of purpose \u2014 and being stuck at home, low and on your own. I think the tablets have been carrying some of THAT too, not just the back. And that part we can really help with."' },
      { lbl:'What actually works',   txt:'"The things that genuinely help long-term pain aren\u2019t stronger drugs \u2014 they\u2019re keeping moving with the right physio, a pain-management approach that retrains how the nerves fire, treating the low mood and sleep, and getting some purpose and people back into your days. I know that sounds less immediate than a tablet, but it\u2019s what actually changes things."' },
      { lbl:'Supported reduction, not abandonment', txt:'"And rather than more, I\u2019d like to help you GENTLY come down on what you\u2019re on \u2014 slowly, at your pace, with support, never cold turkey. People are often surprised that as the opioids come down, the fog lifts and the pain is no worse, sometimes better. I\u2019m not taking anything away and leaving you \u2014 I\u2019m walking it with you."' },
      { lbl:'Plan + safety-net',    txt:'"So: let\u2019s sort physio and a pain programme, treat your mood properly, look at getting you some support and structure, and make a careful plan to ease the tablets down together. I\u2019ll see you regularly through it \u2014 you\u2019re not on your own with this. You came in wanting something stronger; what I want to give you is something that actually works, and a doctor who\u2019s in your corner."' },
    ],
    learning:'Long-term opioids are largely ineffective for chronic non-cancer pain and carry real harms (tolerance, dependence, hyperalgesia, sedation, falls, overdose), so a request for "something stronger" usually reflects tolerance/dependence rather than under-treatment \u2014 and escalation rarely helps and often harms. Both failure modes must be avoided: simply escalating (collusion) and a flat refusal/"it\u2019s in your head" (abandonment and ruptured trust). The skill is honest, validating partnership: affirm the pain is real, explain why escalation won\u2019t help and may harm, and pivot to an evidence-based whole-person plan \u2014 supported self-management, physical activity/physiotherapy, psychological approaches, treating mood/sleep, and social/occupational support \u2014 plus a STRUCTURED, supported opioid reduction (never abrupt), framed as reducing harm and often improving pain/function. The examinable hidden agenda is fear of abandonment and being judged ("I\u2019m not a drug seeker") plus profound loss of job/identity and low mood the opioids are also medicating; surface and treat that, hold the line with warmth not coldness, and walk the plan with him.',
    knowledge:{
      guideline:'NICE NG193 chronic primary pain · Opioids Aware (FPM/PHE) · NICE depression · supported opioid tapering',
      points:[
        { h:'Opioids don\u2019t work for chronic pain', t:'There is little evidence of benefit from long-term opioids in chronic non-cancer/primary pain, and clear evidence of harm that increases with dose and duration. NICE NG193 advises AGAINST initiating opioids for chronic primary pain. "It\u2019s not working" usually signals tolerance/dependence, not under-dosing.' },
        { h:'Harms of escalation', t:'Higher-dose/long-term opioids cause tolerance, dependence, opioid-induced hyperalgesia (worsening pain), sedation, falls/fractures, cognitive impairment, hypogonadism/low mood, constipation, and overdose risk. Escalation rarely improves pain or function and increases all these harms.' },
        { h:'Validate without colluding', t:'Affirm the pain is real and the patient is not a "drug seeker"; avoid both collusive escalation and dismissive "it\u2019s in your head"/flat refusal. Honest partnership \u2014 naming the dependence and the futility of escalation kindly \u2014 maintains trust.' },
        { h:'Whole-person plan', t:'Offer supported self-management, physical activity and physiotherapy, psychological approaches (CBT/ACT, pain-management programmes), treatment of comorbid depression/anxiety and sleep, and social/occupational support. Address loss of role/identity and isolation \u2014 often central drivers.' },
        { h:'Supported tapering', t:'Reduce opioids gradually and collaboratively (never abruptly), with support; many patients find pain unchanged or improved and function/mood better as opioids reduce. Frame as harm reduction and self-empowerment, not punishment or abandonment.' },
        { h:'Mood and risk', t:'Screen for depression and suicidality (chronic pain + opioids + loss carry real risk); treat mood and provide support. The emotional pain is part of the picture and part of the treatment.' },
        { h:'Never do', t:'Never escalate to/increase strong opioids for chronic primary pain "because it\u2019s not working"; never dismiss the pain as imaginary or refuse flatly and abandon the patient; never withdraw opioids abruptly; never ignore the mood/loss driving the request; never leave the patient without support and follow-up.' },
        { h:'Safety-net & follow-up', t:'Agreed whole-person plan (physio/psychological/mood/social support) and a supported, paced opioid reduction; mood/risk review; regular follow-up through the change; partnership over prescription.' }
      ]
    }
  };

  /* ============ 150. TELEPHONE — New patient needs methadone continued today: safe bridging ============ */
  const c150 = {
    id:'methadone-bridging', title:'"I\u2019ve just moved here and my methadone runs out today \u2014 I need a script now"', type:'telephone', duration:12,
    meta:{ age:35, sex:'M', setting:'Telephone \u2014 new patient requesting urgent methadone continuation.', system:'Addiction / Opioid substitution & safe bridging' },
    brief:'Mr Danny Boyd, 35, recently moved area, newly registered, rings because his methadone (opioid substitution therapy) "runs out today" and he\u2019ll be "in bits"/at risk of relapse without it. He cannot immediately verify his dose or current prescriber/pharmacy. He is anxious and pressured. The safe approach: do NOT prescribe methadone blind (overdose risk if dose unverified/not tolerant), but do NOT simply abandon him to withdrawal/relapse either \u2014 verify urgently and bridge safely via the local drug service.',
    script:{
      opening:'"Hello, I\u2019ve just registered with you \u2014 I moved here last week. Look, I\u2019m on methadone, 60ml a day, and my script runs out today. If I don\u2019t get it I\u2019ll be climbing the walls by tonight and honestly I\u2019m scared I\u2019ll end up using again. I just need you to write me a methadone script now, today. Please, I can\u2019t be without it."',
      facts:[
        { topic:'Why not prescribe blind', text:'Prescribing methadone to a new patient WITHOUT verifying the current dose, prescriber and that they are genuinely tolerant is DANGEROUS \u2014 methadone has a narrow safety margin and a long half-life; an unverified/excessive dose, or a dose given to someone who has lost tolerance (e.g. a gap in treatment), can be FATAL. So a GP should NOT issue a methadone script on an unverified phone request. But equally, leaving him to abrupt withdrawal/relapse is unsafe and unkind.' },
        { topic:'The safe bridging path', text:'The safe approach: urgently VERIFY \u2014 contact his previous drug service/prescriber and dispensing pharmacy to confirm the regimen, dose and last pick-up \u2014 and route him rapidly to the LOCAL specialist drug/substance-misuse service (often same-day) to assess and continue OST safely. Most areas have a fast-track for transferring OST patients. The GP\u2019s job is to facilitate safe, verified continuity, not to prescribe blind.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 his pressure and fear are genuine: he is frightened of withdrawal and, more, of RELAPSE and losing the stability he\u2019s fought for (he may have a job, kids, a recovery he\u2019s proud of). There may be shame and an expectation of being judged/dismissed as "just an addict". He needs to be treated with respect and taken seriously, and to be helped urgently \u2014 the worst outcome is feeling abandoned and using again. Some may also test for an unverified script, which is exactly why verification (not suspicion-as-refusal) is the route.' },
        { topic:'Harm reduction',       text:'Treat him with dignity, take the relapse risk seriously, act with genuine urgency to verify and bridge, and provide harm-reduction safety-netting (relapse/overdose risk, naloxone, not topping up from illicit sources) while continuity is arranged. Refusal-without-action is unsafe; prescribing-blind is unsafe; verified urgent bridging is the answer.' },
        { topic:'What he needs',        text:'Officially: a methadone script today. What he needs: NOT a blind prescription, but urgent verification (previous service/pharmacy) and rapid routing to the local drug service for safe same-day continuation; to be treated with respect not suspicion; harm-reduction advice (overdose risk, naloxone) meanwhile; and reassurance he won\u2019t be abandoned \u2014 safe continuity, fast.' },
      ],
      ice:{
        ideas:'The GP can just write him a methadone script today to tide him over.',
        concerns:'HIDDEN AGENDA \u2014 genuine fear of withdrawal and, more, of relapse and losing hard-won stability (job/kids/recovery); shame and expectation of being judged/dismissed as "just an addict".',
        expectations:'A methadone prescription today. What he actually needs: NOT a blind script, but urgent verification + rapid routing to the local drug service for safe same-day continuation, treated with respect, with harm-reduction advice and reassurance he won\u2019t be abandoned.'
      },
      cues:['Unverified methadone dose/prescriber in a new patient \u2014 do NOT prescribe blind (overdose/tolerance risk); verify first.','"I\u2019ll relapse if I don\u2019t get it" \u2014 take the relapse risk seriously and act urgently; refusal-without-action is unsafe too.','Fear of being judged/abandoned \u2014 treat with respect, not suspicion; verified urgent bridging is the safe middle path.']
    },
    checkpoints:[
      { dom:'tasks', text:'Does NOT prescribe methadone blind on an unverified phone request \u2014 recognising the fatal overdose risk of an unverified/excessive dose or lost tolerance \u2014 while also NOT simply refusing and abandoning him to withdrawal/relapse' },
      { dom:'tasks', text:'Acts with genuine URGENCY to VERIFY: contacts his previous drug service/prescriber and dispensing pharmacy to confirm the dose, regimen and last pick-up' },
      { dom:'tasks', text:'Routes him rapidly to the LOCAL specialist drug/substance-misuse service for same-day assessment and safe continuation of OST (using local fast-track/transfer arrangements), rather than managing it as a routine GP prescription' },
      { dom:'tasks', text:'Provides HARM-REDUCTION safety-netting while continuity is arranged: the risks of relapse and overdose (especially with lost tolerance), advice not to top up from illicit sources, and naloxone provision/availability' },
      { dom:'tasks', text:'Takes the RELAPSE RISK and the patient\u2019s wider stability (work, family, recovery) seriously as part of the urgency, and documents the verification/bridging steps' },
      { dom:'rto',   text:'Treats him with RESPECT and dignity \u2014 not suspicion-as-dismissal \u2014 hears the fear of withdrawal/relapse and of being judged, and reassures he will not be abandoned' },
      { dom:'rto',   text:'Holds the safety boundary (no blind script) WITHOUT rupturing trust, framing verification/urgent routing as the way he gets his treatment safely and fast' },
      { dom:'gs',    text:'Safety-nets and follows up: the verification + same-day drug-service route confirmed, harm-reduction/overdose advice and naloxone, what to do meanwhile, and follow-up to ensure continuity happened \u2014 safe, verified bridging, treating him as a person' },
    ],
    worked:[
      { lbl:'Take it seriously, with respect', txt:'"Thank you for ringing, and for being upfront \u2014 you\u2019ve done exactly the right thing, and I\u2019m going to take this seriously and help you. I can hear you\u2019re frightened of withdrawal and, more than that, of slipping back when you\u2019ve worked hard to be stable. I\u2019m not going to judge you or leave you stuck."' },
      { lbl:'Why I can\u2019t just write it', txt:'"Here\u2019s the honest reason I can\u2019t simply write a methadone script down the phone today: methadone is genuinely dangerous if the dose isn\u2019t confirmed \u2014 it\u2019s long-acting and the safety margin is narrow, and if anything about the dose or your tolerance were off, it could be life-threatening. That\u2019s not me doubting you; it\u2019s me keeping you safe. So we do it the safe, fast way instead."' },
      { lbl:'The fast, safe route', txt:'"What I\u2019m going to do right now is contact your previous drug service and pharmacy to confirm your dose and when you last picked up, and get you straight in to the local drug team \u2014 they can usually see transfers the same day and continue your script safely. That\u2019s the proper, quick way to keep you covered."' },
      { lbl:'Harm reduction meanwhile', txt:'"While I sort that, a couple of important things: please don\u2019t top up from anywhere else to get through \u2014 that\u2019s where the real danger is. If you\u2019ve got naloxone, keep it to hand; if not, the drug service will sort that. And tell me \u2014 are you safe right now, anything else going on I should know?"' },
      { lbl:'Reassure, no abandonment', txt:'"I want to be really clear: you are not being fobbed off and you\u2019re not being left to relapse. The opposite \u2014 I\u2019m treating this as urgent because your stability matters. We\u2019re going to get your treatment continued safely, today if at all possible."' },
      { lbl:'Confirm + safety-net', txt:'"I\u2019ll ring the drug service and your old pharmacy now and call you straight back with the plan and where to go. If you start feeling really unwell, or you\u2019re ever at risk of overdose, that\u2019s 999. You rang asking me to write a script; what I\u2019m doing is the safer thing \u2014 getting you continued properly and fast, and standing by you while I do it."' },
    ],
    learning:'A new patient asking for urgent methadone continuation is a safe-bridging dilemma. Prescribing methadone BLIND on an unverified phone request is dangerous \u2014 methadone has a narrow safety margin and long half-life, and an unverified/excessive dose, or one given to someone who has lost tolerance after a gap, can be fatal \u2014 so a GP should NOT issue a methadone script on an unverified request. But the opposite failure, refusing and abandoning him to withdrawal and relapse, is also unsafe and unkind. The safe path is verified, urgent continuity: contact his previous drug service/prescriber and pharmacy to confirm dose/regimen/last pick-up, and route him rapidly to the local specialist drug service for same-day assessment and safe continuation (using transfer fast-tracks), with harm-reduction safety-netting (relapse/overdose risk, don\u2019t top up illicitly, naloxone). The examinable hidden agenda is genuine fear of withdrawal and, more, of relapse and losing hard-won stability, plus shame and expectation of being judged; treat him with respect not suspicion, take the relapse risk seriously, hold the no-blind-script boundary without rupturing trust, and reassure he won\u2019t be abandoned \u2014 safe continuity, fast.',
    knowledge:{
      guideline:'Orange Book (Drug misuse & dependence: UK clinical management) · OST transfer/continuity · naloxone provision',
      points:[
        { h:'Never prescribe OST blind', t:'Do not initiate or continue methadone/buprenorphine for a new patient without VERIFYING the prescriber, dose, regimen and current tolerance. Methadone is long-acting with a narrow therapeutic index; an unverified or excessive dose, or a dose given after lost tolerance (treatment gap), can cause fatal respiratory depression \u2014 including overdose deaths in induction/transfer.' },
        { h:'But don\u2019t abandon either', t:'Refusing and leaving the patient to abrupt withdrawal and relapse is also unsafe (relapse to illicit use carries high overdose risk, especially with reduced tolerance). The answer is neither a blind script nor a flat refusal, but VERIFIED, URGENT continuity.' },
        { h:'Verify and route urgently', t:'Contact the previous drug/substance-misuse service and dispensing pharmacy to confirm dose and last pick-up. Route the patient rapidly to the LOCAL specialist drug service \u2014 most have same-day/fast-track transfer arrangements to continue OST safely. Treat as urgent, not routine.' },
        { h:'Harm reduction', t:'Advise against topping up from illicit sources (the main acute danger); provide/ensure naloxone; counsel on overdose risk especially if any gap/lost tolerance; assess immediate safety. Continuity of OST is itself a key harm-reduction and life-saving intervention.' },
        { h:'Respect and engagement', t:'Treat the patient with dignity, not suspicion-as-dismissal. Fear of withdrawal and relapse, and the expectation of being judged, are real; a respectful, urgent, problem-solving response retains engagement and protects recovery (and family/occupational stability).' },
        { h:'Hold the boundary kindly', t:'Explain WHY a blind script is unsafe (for the patient\u2019s protection, not from distrust), and frame verification + rapid routing as the fast, safe way to get treatment continued \u2014 maintaining trust while keeping them safe.' },
        { h:'Never do', t:'Never prescribe methadone/OST on an unverified phone request; never refuse and abandon the patient to withdrawal/relapse; never treat the request with suspicion-as-dismissal; never omit harm-reduction/naloxone; never manage it as a routine, non-urgent matter.' },
        { h:'Safety-net & follow-up', t:'Verify with previous service/pharmacy; same-day local drug-service routing for safe continuation; harm-reduction and naloxone; immediate-safety check; documented bridging steps; follow-up to confirm continuity occurred.' }
      ]
    }
  };

  /* ============ 151. TELEPHONE — Just out of prison, medications stopped at the gate ============ */
  const c151 = {
    id:'prison-release-continuity', title:'"I got out yesterday and they stopped all my meds \u2014 I\u2019ve got nothing"', type:'telephone', duration:12,
    meta:{ age:41, sex:'M', setting:'Telephone \u2014 recently-released prisoner with no medication.', system:'Health inequality / Continuity after prison release' },
    brief:'Mr Lee Marwood, 41, released from prison yesterday, newly registered, rings because he\u2019s been left with NO medication. On exploration: he was on a mix \u2014 an antipsychotic (for a psychotic illness), an antiepileptic, and was on opioid substitution. He has nowhere stable to stay, no money, and is anxious. The first weeks after release are a period of EXTREME risk (overdose death, relapse, mental-health crisis, self-harm/suicide). Continuity of medication and rapid wrap-around support are urgent, life-saving priorities.',
    script:{
      opening:'"Hi, I got out of prison yesterday and I\u2019ve registered with you. The thing is they stopped all my medication at the gate \u2014 I\u2019ve got nothing. I was on tablets for my head, for my fits, and I was on a methadone script in there. I don\u2019t know what I\u2019m doing, I\u2019ve got nowhere proper to stay, no money, and I\u2019m starting to feel rough. Can you help me? I don\u2019t want to end up back where I was."',
      facts:[
        { topic:'Post-release is extreme-risk', text:'The first weeks after prison release carry markedly elevated risk of DEATH \u2014 especially drug-related OVERDOSE (lost tolerance after enforced abstinence/reduction), and elevated suicide, relapse and mental-health crisis. Continuity of essential medication and rapid support are URGENT, potentially life-saving. Being left with "nothing" is a dangerous gap to close fast.' },
        { topic:'The medication priorities', text:'Several medications, each with urgency: the ANTIPSYCHOTIC (stopping risks psychotic relapse), the ANTIEPILEPTIC (stopping risks seizures \u2014 sudden withdrawal is dangerous), and OPIOID SUBSTITUTION (methadone \u2014 with the same not-blind, verify-and-route-urgently rule as the bridging case, plus overdose risk from lost tolerance). Each needs verifying (prison healthcare/records) and continuing safely/urgently \u2014 don\u2019t prescribe blind, but act fast.' },
        { topic:'The social emergency', text:'He is effectively homeless, penniless and unsupported \u2014 a social emergency intertwined with the medical one. Housing, benefits/finance, and substance/mental-health service linkage are core. Many areas have specific prison-release/RECONNECT-type liaison and homeless-health pathways. Addressing the destitution is part of preventing the bad outcomes.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 beneath the practical request is fear of relapse and of "ending up back where I was", shame, low self-worth ("I don\u2019t know what I\u2019m doing"), and an expectation of being judged/turned away. He may be close to a mental-health or substance crisis. He needs to be met with respect and genuine urgency \u2014 treated as someone whose life matters \u2014 not processed as a difficult registration. Continuity-as-care is the message.' },
        { topic:'What he needs',        text:'Officially: his medication back. What he needs: urgent verification of his prison medications (prison healthcare/records) and safe, rapid continuation of the antipsychotic and antiepileptic (and OST via the drug service, not blind), wrap-around support for housing/finance and substance/mental-health services, a mental-health/risk assessment, harm-reduction (overdose/naloxone), and to be treated with dignity and urgency \u2014 continuity as life-saving care.' },
      ],
      ice:{
        ideas:'He needs his medications restarted and some help, having been left with nothing.',
        concerns:'HIDDEN AGENDA \u2014 fear of relapse and "ending up back where I was", shame and low self-worth, and expectation of being judged/turned away; possibly close to a crisis; homeless, penniless, unsupported.',
        expectations:'His medication back. What he actually needs: urgent verified continuation of antipsychotic/antiepileptic (and OST via the drug service), wrap-around housing/finance/substance/mental-health support, a risk assessment, harm-reduction, and to be treated with dignity and urgency.'
      },
      cues:['Just released, all meds stopped, on antipsychotic + antiepileptic + methadone \u2014 extreme post-release risk; urgent verified continuity.','Homeless, penniless, "feeling rough" \u2014 a social + medical emergency; wrap-around support and overdose risk.','"I don\u2019t want to end up back where I was" \u2014 fear of relapse/crisis and being judged; treat with respect and genuine urgency.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the post-release period as EXTREME risk (drug-related overdose death from lost tolerance, suicide, relapse, mental-health and seizure risk) and treats continuity of essential medication and support as an URGENT, potentially life-saving priority' },
      { dom:'tasks', text:'Prioritises and acts on each medication with appropriate urgency: verifies prison medications (prison healthcare/records) and safely continues the ANTIPSYCHOTIC (relapse risk) and ANTIEPILEPTIC (seizure risk \u2014 not to be stopped abruptly), and routes OST/methadone via the drug service (verify, don\u2019t prescribe blind)' },
      { dom:'tasks', text:'Addresses the SOCIAL emergency: housing/homelessness, finance/benefits, and linkage to substance-misuse and mental-health services \u2014 using prison-release liaison/RECONNECT-type and homeless-health pathways where available' },
      { dom:'tasks', text:'Carries out a MENTAL-HEALTH and RISK assessment (psychotic relapse, suicide/self-harm, substance relapse) and provides HARM REDUCTION (overdose risk/lost tolerance, naloxone)' },
      { dom:'tasks', text:'Acts with genuine URGENCY/continuity rather than deferring \u2014 obtaining records and bridging essential medication safely the same day where possible, and not leaving him with "nothing"' },
      { dom:'rto',   text:'Treats him with RESPECT and dignity \u2014 not as a difficult registration \u2014 hears the fear of relapse and being judged, and reassures him his health matters and he will be helped' },
      { dom:'rto',   text:'Holds the safety boundaries (verify OST, don\u2019t prescribe blind) while conveying genuine urgency and care, so he engages rather than disengages' },
      { dom:'gs',    text:'Safety-nets and follows up: urgent verified medication continuity, wrap-around support arranged (housing/finance/substance/MH services), risk plan and crisis routes, harm-reduction/naloxone, and a close follow-up \u2014 continuity-as-care through a high-risk window' },
    ],
    worked:[
      { lbl:'Meet him with urgency + respect', txt:'"I\u2019m really glad you rang \u2014 you\u2019ve done exactly the right thing, and I\u2019m going to treat this as urgent, because the first days after getting out are when people most need looking after, not least. You matter, and I\u2019m not going to leave you with nothing. Let\u2019s sort this together."' },
      { lbl:'Triage the medications', txt:'"Let\u2019s take the medications one at a time, because some can\u2019t safely just stop. Your epilepsy tablet \u2014 stopping that suddenly can cause fits, so that\u2019s a priority to continue. Your tablet for your head \u2014 stopping risks you becoming unwell again, so that too. And the methadone I have to continue the safe way through the drug team rather than write blind \u2014 but I\u2019ll get that moving today. I\u2019ll pull your prison records to confirm everything."' },
      { lbl:'The social emergency', txt:'"Just as important \u2014 you said you\u2019ve nowhere proper to stay and no money. That\u2019s not separate from your health, it\u2019s central to it, and there\u2019s help I can connect you with today: housing support, sorting some money, and the teams who help people just out of prison. You shouldn\u2019t be facing this with nothing."' },
      { lbl:'Risk + harm reduction', txt:'"Can I check how you are in yourself \u2014 your mood, any thoughts of harming yourself, how the cravings are? \u2026 Thank you. One really important safety thing: your tolerance will have dropped inside, so using like before could be an overdose. Please don\u2019t \u2014 and we\u2019ll get you naloxone to be safe. If you\u2019re ever at risk, that\u2019s 999."' },
      { lbl:'Continuity, not a brush-off', txt:'"I want you to hear this clearly: you\u2019re not being passed around or judged. The opposite \u2014 I\u2019m going to chase your records, get your essential medication continued safely today, link you with the drug team, and get you support for housing and money. We\u2019re doing this now."' },
      { lbl:'Confirm + follow-up',  txt:'"So: I\u2019ll get your prison medication records, continue what can\u2019t safely wait, fast-track the methadone through the drug service, and connect you with release and housing support \u2014 and I\u2019ll ring you back today with the plan. I want to see you again very soon to keep you safe through these next weeks. You rang frightened of ending up back where you were; my job is to make sure you don\u2019t."' },
    ],
    learning:'The first weeks after prison release are an extreme-risk window \u2014 markedly elevated drug-related overdose death (lost tolerance after enforced abstinence/reduction), suicide, relapse, mental-health crisis and seizure risk \u2014 so being left with "nothing" is a dangerous gap to close urgently, and continuity of medication plus rapid wrap-around support is potentially life-saving. Triage each medication: continue the ANTIEPILEPTIC (abrupt stopping risks seizures) and ANTIPSYCHOTIC (stopping risks relapse) safely and urgently after verifying prison records, and route OST/methadone via the drug service (verify, don\u2019t prescribe blind \u2014 same rule as bridging, plus overdose risk from lost tolerance). Address the intertwined SOCIAL emergency (homelessness, finance, substance/mental-health service linkage) via prison-release/RECONNECT-type and homeless-health pathways, carry out a mental-health/risk assessment, and provide harm reduction (overdose/naloxone). The examinable hidden agenda is fear of relapse and "ending up back where I was", shame and low self-worth, and an expectation of being judged/turned away; meet him with respect and genuine urgency \u2014 his life matters \u2014 hold the OST boundary while conveying care, and deliver continuity-as-life-saving-care with close follow-up.',
    knowledge:{
      guideline:'Continuity of care after prison release · post-release mortality (overdose) · RECONNECT / liaison · naloxone',
      points:[
        { h:'Post-release is high-mortality', t:'Recently-released prisoners have sharply elevated mortality in the first weeks, especially from drug-related overdose (tolerance falls during custody), plus elevated suicide and relapse. Treat continuity of medication and support as urgent and potentially life-saving \u2014 do not defer or leave gaps.' },
        { h:'Triage essential medications', t:'Antiepileptics (abrupt withdrawal risks seizures) and antipsychotics (stopping risks relapse) need safe, urgent continuation \u2014 verify via prison healthcare records and bridge. OST (methadone/buprenorphine) follows the verify-and-route rule: do NOT prescribe blind; confirm regimen and route rapidly to the drug service (overdose risk if dose/tolerance unverified).' },
        { h:'Verify, don\u2019t guess', t:'Obtain prison medication records/discharge information to confirm what was prescribed and doses. Bridge what can be safely continued; route controlled drugs/OST through specialist services. Act the same day where possible.' },
        { h:'The social emergency', t:'Homelessness, no money, and disrupted service links are intertwined with the clinical risk. Connect to housing support, benefits/finance, substance-misuse and mental-health services, and prison-release liaison (e.g. RECONNECT) and homeless-health pathways. Addressing destitution helps prevent the bad outcomes.' },
        { h:'Risk and harm reduction', t:'Assess mental-health (psychotic relapse, suicide/self-harm) and substance-relapse risk. Provide harm reduction: counsel that lost tolerance makes pre-custody doses potentially fatal, supply naloxone, and give crisis routes. Continuity of OST is itself life-saving.' },
        { h:'Dignity and engagement', t:'Treat the patient with respect and genuine urgency, not as a difficult registration. Fear of relapse, shame and expectation of being judged are real; a respectful, problem-solving response retains engagement at a critical moment.' },
        { h:'Never do', t:'Never leave a recently-released patient without essential medication or a plan; never abruptly stop antiepileptics/antipsychotics; never prescribe OST blind; never treat the destitution as "not medical"; never miss the overdose/suicide risk; never process it as routine/non-urgent.' },
        { h:'Safety-net & follow-up', t:'Verify prison records and continue essential meds urgently; fast-track OST via the drug service; arrange housing/finance/substance/MH support; risk assessment and crisis routes; naloxone and overdose advice; close follow-up through the high-risk window.' }
      ]
    }
  };

  /* ============ 152. TELEPHONE — Flight-anxiety diazepam request: the policy and the alternative ============ */
  const c152 = {
    id:'flight-anxiety-diazepam', title:'"I just need a few diazepam for the flight \u2014 my old GP always gave them"', type:'telephone', duration:12,
    meta:{ age:38, sex:'F', setting:'Telephone \u2014 request for diazepam for fear of flying.', system:'Prescribing / Benzodiazepines & fear of flying' },
    brief:'Ms Bianca Foster, 38, rings two weeks before a long-haul flight requesting "a few diazepam" for her fear of flying \u2014 "my old GP always gave me them". She is otherwise well. There are several specific reasons GPs generally decline benzodiazepines for flight anxiety (sedation/paradoxical effects, VTE risk with immobility, impairment in an emergency, legality at some destinations, dependence, and that they hinder, not help, treating the phobia). The task: decline kindly with the reasons, validate the fear, and offer genuinely effective alternatives.',
    script:{
      opening:'"Hi, I\u2019ve got a long-haul flight in a couple of weeks and I\u2019m terrified \u2014 I really struggle with flying. My old GP used to just give me a few diazepam to get me through it, and it really helped. Could you do me a small prescription, like five tablets? I\u2019m not after them for anything else, just the flight. It\u2019s the only thing that gets me on the plane."',
      facts:[
        { topic:'Why GPs decline benzos for flights', text:'There are well-recognised reasons GPs generally do NOT prescribe benzodiazepines for fear of flying: (1) benzodiazepines cause SEDATION and can cause PARADOXICAL agitation/disinhibition; (2) sedation + immobility increases VENOUS THROMBOEMBOLISM (DVT/PE) risk on long flights; (3) reduced alertness IMPAIRS the ability to respond in an EMERGENCY/evacuation; (4) benzodiazepines are ILLEGAL or controlled in some destination countries (possession risk); (5) DEPENDENCE/misuse potential and they\u2019re not licensed for this; (6) they hinder rather than help OVERCOMING the phobia (avoidance/safety-behaviour) and aren\u2019t a treatment. "My old GP gave them" doesn\u2019t make it appropriate.' },
        { topic:'The effective alternative', text:'What actually helps fear of flying: FEAR-OF-FLYING COURSES (many airlines run them, often with CBT and pilot input \u2014 highly effective), CBT/psychological techniques for the phobia, breathing/relaxation and grounding skills, and self-help resources. These TREAT the problem rather than sedating through it. Validate the fear as real and common, and signpost these.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 her fear is genuine and the flight may matter enormously (a wedding, a dying relative, a job) so the stakes feel high; she may also feel embarrassed, or anxious more broadly, and the "my old GP gave them" is partly an expectation and partly a worry she\u2019ll be left unable to travel. There may be an underlying anxiety disorder worth exploring. The skill is to decline the benzodiazepines kindly WITHOUT dismissing her or the importance of the trip, validate the fear, and offer real help \u2014 not a flat "no".' },
        { topic:'The trap',            text:'Both poles fail: caving and prescribing (against good practice and unsafe) OR a curt refusal that leaves her feeling dismissed and stuck. The skill is the kindly, well-reasoned decline plus genuine, effective alternatives and validation.' },
        { topic:'What she needs',       text:'Officially: a few diazepam for the flight. What she needs: a kind, well-reasoned explanation of why benzodiazepines aren\u2019t prescribed for flight anxiety (the safety/legal/dependence/efficacy reasons), validation that the fear is real and the trip matters, and genuinely effective alternatives (fear-of-flying course, CBT/psychological techniques, breathing/relaxation, self-help) \u2014 plus exploring any broader anxiety \u2014 not a benzodiazepine and not a flat refusal.' },
      ],
      ice:{
        ideas:'A few diazepam will get her through the flight, as her old GP provided.',
        concerns:'HIDDEN AGENDA \u2014 genuine fear and a trip that may matter enormously; embarrassment and possibly broader anxiety; worry she\u2019ll be left unable to travel; "my old GP gave them" as an expectation.',
        expectations:'A small diazepam prescription. What she actually needs: a kind, reasoned decline (safety/legal/dependence/efficacy), validation of the fear and the trip\u2019s importance, and genuinely effective alternatives (fear-of-flying course, CBT, breathing/self-help), with broader anxiety explored.'
      },
      cues:['"My old GP always gave me diazepam for flights" \u2014 expectation, but not appropriate; decline kindly with the reasons.','Genuine fear + an important trip \u2014 validate it and offer effective alternatives, not a flat "no".','Possible broader anxiety behind the flight phobia \u2014 worth exploring and addressing.']
    },
    checkpoints:[
      { dom:'tasks', text:'Declines benzodiazepines for fear of flying and can give the REASONS: sedation/paradoxical effects, increased VTE risk with immobility, impaired response in an emergency/evacuation, illegality in some destination countries, dependence/misuse potential and not licensed, and that they hinder rather than treat the phobia \u2014 rather than prescribing because "the old GP did"' },
      { dom:'tasks', text:'VALIDATES that the fear is real and common and acknowledges the trip may matter greatly \u2014 declining the drug WITHOUT dismissing her or the importance of travelling' },
      { dom:'tasks', text:'Offers genuinely EFFECTIVE alternatives: fear-of-flying courses (often airline-run, CBT-based), CBT/psychological techniques for the phobia, breathing/relaxation/grounding skills, and self-help resources \u2014 treatments that address the problem' },
      { dom:'tasks', text:'Explores any BROADER anxiety disorder behind the flight phobia and considers appropriate management/support if present' },
      { dom:'tasks', text:'Avoids both failure modes: does NOT cave and prescribe (unsafe/poor practice) and does NOT issue a curt refusal that leaves her dismissed and stuck \u2014 holds the boundary kindly with alternatives' },
      { dom:'rto',   text:'Handles the request with warmth: validates the fear and the importance of the flight, explains the decline as care/safety not bureaucracy, so she doesn\u2019t feel judged or abandoned' },
      { dom:'rto',   text:'Engages her in the alternative plan and explores what the trip means/any wider anxiety, so she leaves with help rather than just a refusal' },
      { dom:'gs',    text:'Safety-nets and follows up: signposting to a fear-of-flying course/CBT and self-help, breathing techniques to practise, an offer to explore broader anxiety, and a route back \u2014 a kind decline plus effective help, not a benzodiazepine and not a bare "no"' },
    ],
    worked:[
      { lbl:'Validate first',       txt:'"I completely get it \u2014 fear of flying is real and horrible, and it sounds like this trip matters a lot to you. So I want to help you actually get on that plane. Let me be honest with you about the diazepam, though, and then let\u2019s find something that works better."' },
      { lbl:'The kindly decline + reasons', txt:'"GPs have moved away from giving diazepam for flights, and there are good reasons I\u2019d want you to know \u2014 it\u2019s not me being awkward. It makes you drowsy and occasionally has the opposite effect and makes people agitated; sitting sedated and still on a long flight raises the risk of a clot in the leg or lung; it dulls you so you couldn\u2019t react well in an emergency; it\u2019s actually illegal to bring into some countries; and it can be habit-forming. On top of all that, it doesn\u2019t treat the fear \u2014 it just masks it, so the fear stays for next time."' },
      { lbl:'What actually works',  txt:'"Here\u2019s the genuinely good news \u2014 there are things that really DO help, much more than a tablet. Lots of airlines run fear-of-flying courses, often with a pilot and a psychologist, and they\u2019re brilliant. There\u2019s a type of talking therapy (CBT) for exactly this, and some simple breathing and grounding techniques I can teach you and you can practise before you go. These actually shrink the fear rather than papering over it."' },
      { lbl:'Explore the wider picture', txt:'"Can I ask \u2014 is it just flying, or do you find anxiety crops up in other areas too? \u2026 If there\u2019s a broader anxiety going on, that\u2019s very treatable and worth us looking at properly, separate from the flight."' },
      { lbl:'Hold the boundary kindly', txt:'"So I\u2019m not going to prescribe the diazepam \u2014 not to leave you stuck, but because it\u2019s genuinely not the safe or effective answer. What I AM going to do is set you up with things that work. I\u2019d hate for you to just white-knuckle it again next time."' },
      { lbl:'Plan + safety-net',    txt:'"Let me point you to a fear-of-flying course and some self-help, teach you a breathing technique now, and \u2014 if you\u2019d like \u2014 sort some proper anxiety support. Come back and we can go further if you want. You rang for five diazepam to survive the flight; I\u2019d rather give you the tools to actually feel okay on it \u2014 this time and every time."' },
    ],
    learning:'GPs generally do NOT prescribe benzodiazepines for fear of flying, and the examinable skill is to decline KINDLY with the reasons while offering genuinely effective help. The reasons: benzodiazepines cause sedation and can be paradoxically disinhibiting; sedation plus immobility raises VTE (DVT/PE) risk on long flights; reduced alertness impairs response in an emergency/evacuation; they are illegal/controlled in some destination countries (possession risk); they carry dependence/misuse potential and aren\u2019t licensed for this; and they hinder rather than treat the phobia (a safety behaviour that maintains avoidance). "My old GP always gave them" does not make it appropriate. The effective alternatives are fear-of-flying courses (often airline-run, CBT-based), CBT/psychological techniques, breathing/relaxation/grounding skills and self-help \u2014 which treat the problem. The hidden agenda is a genuine fear and a trip that may matter enormously, plus possible broader anxiety and worry about being left unable to travel; validate the fear and the trip\u2019s importance, explore any wider anxiety, and avoid both caving (unsafe) and a curt refusal (dismissive) \u2014 a kind, reasoned decline plus real, effective help.',
    knowledge:{
      guideline:'Benzodiazepine prescribing guidance · fear-of-flying management · CKS generalised anxiety / phobias',
      points:[
        { h:'Why not benzodiazepines for flights', t:'Common reasons GPs decline: sedation and possible paradoxical agitation/disinhibition; increased VTE (DVT/PE) risk from sedation + immobility on long flights; impaired ability to follow safety instructions/evacuate in an emergency; benzodiazepines are illegal/controlled in some countries (possession risk on arrival); dependence and misuse potential; not licensed for this; and they hinder rather than treat the phobia (a safety/avoidance behaviour). Prior prescribing by another GP does not justify continuation.' },
        { h:'Validate, don\u2019t dismiss', t:'Fear of flying is real, common and distressing, and the trip may matter greatly. Decline the drug without dismissing the patient or the importance of travelling \u2014 a curt refusal fails as much as caving does.' },
        { h:'Offer effective alternatives', t:'Fear-of-flying courses (many airlines run them, often combining CBT and pilot input \u2014 effective), CBT/psychological therapy for specific phobia, breathing/relaxation and grounding techniques, graded exposure, and self-help resources/apps. These treat the phobia rather than sedating through it.' },
        { h:'Explore broader anxiety', t:'Flight phobia may sit within a wider anxiety disorder. Explore and, if present, manage/support it appropriately (psychological therapy \u00b1 SSRI per anxiety pathways) \u2014 separate from the flight.' },
        { h:'If pharmacological at all', t:'Benzodiazepines are best avoided; where any short-term option is considered it is generally discouraged, and non-sedating, non-dependence-forming approaches and behavioural techniques are preferred. The default answer for fear of flying is non-pharmacological.' },
        { h:'Hold the boundary kindly', t:'Explain the decline as safety/care and offer alternatives, so the patient leaves with help and understanding rather than feeling judged or stuck. Avoid both collusion and a bare "no".' },
        { h:'Never do', t:'Never prescribe benzodiazepines for fear of flying just because "the old GP did"; never dismiss the fear or the trip with a curt refusal; never omit the effective alternatives; never miss an underlying broader anxiety disorder; never leave the patient with neither the drug nor a plan.' },
        { h:'Safety-net & follow-up', t:'Signpost a fear-of-flying course/CBT and self-help; teach a breathing/grounding technique; offer to explore and treat broader anxiety; provide a route back \u2014 a kind, reasoned decline plus genuinely effective help.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c149, c150, c151, c152);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'opioid-escalation': {
      ceg: ['Mental health & addiction', 'Long-term conditions & cancer'],
      stem: {
        name: 'Craig Hollis', age: '48 years · male',
        pmh: ['Chronic non-specific low back pain ~4 years; no new red flags', 'On escalating opioids (tramadol + codeine); signs of tolerance/dependence', 'Off work since injury; low mood, isolated, loss of role'],
        meds: ['Tramadol', 'Codeine'],
        allergy: 'NKDA',
        recent: 'Requesting morphine / a dose increase; "I\u2019m not a drug seeker".',
        reason: 'Video consultation — request to increase opioids.'
      },
      timeMap: [
        { t:'0–2',  h:'Validate the pain',   d:'Believe him; he\u2019s not a drug seeker. Four years grinds anyone down. Work on it honestly together.' },
        { t:'2–4',  h:'Honest truth on opioids', d:'Strong opioids mostly don\u2019t work for chronic pain; needing more = tolerance, not under-dosing. Morphine likely to harm, not help.' },
        { t:'4–6',  h:'Surface the real load', d:'Lost job/identity, low mood, isolation — the opioids carry the emotional pain too. The real work.' },
        { t:'6–8',  h:'What actually works',  d:'Physio/activity, pain-management/CBT, treat mood/sleep, purpose and people. Less immediate than a tablet, but real.' },
        { t:'8–12', h:'Supported reduction + net', d:'Gentle, paced, supported taper — not cold turkey, not abandonment. Mood/risk review; regular follow-up.' }
      ],
      wordPics: {
        fail: 'Either escalates to morphine/ups the dose (collusion, more harm and dependence) or refuses flatly / implies "it\u2019s in your head" (abandonment, ruptured trust); never explores the mood and loss driving the request; no plan.',
        pass: 'Validates the pain, declines escalation with honest reasons, offers a whole-person plan and a supported taper, and screens mood.',
        exc:  'Holds honest, validating partnership — affirms the pain is real, explains why escalation won\u2019t help and may harm, surfaces and treats the loss/low mood the opioids medicate, pivots to an evidence-based whole-person plan and a paced supported reduction, and walks it with him rather than abandoning or colluding.'
      },
      avoid: [
        { dont:'"Okay, let\u2019s try you on some morphine and see if that helps."', instead:'"Going up to morphine is very unlikely to help your pain and quite likely to harm you — needing more usually means the body\u2019s got used to them, not that the dose is too low. Let\u2019s do what actually works."', why:'Escalating opioids for chronic primary pain increases harm without improving pain or function.' },
        { dont:'"There\u2019s nothing physically wrong — it\u2019s really a mental thing." (dismissive)', instead:'"Your pain is real — I\u2019m not saying it\u2019s in your head. And the low mood and losing your job are part of the picture too, which we can help with."', why:'A dismissive "it\u2019s psychological" ruptures trust and abandons the patient; validate AND address the whole picture.' },
        { dont:'"We\u2019ll just stop the opioids — they\u2019re not helping anyway."', instead:'"Rather than more, I\u2019d like to help you come down gently, at your pace, with support — never cold turkey — and people often feel better as they reduce."', why:'Abrupt withdrawal is unsafe and feels punitive; a paced, supported taper is the safe, engaging approach.' }
      ]
    },

    'methadone-bridging': {
      ceg: ['Mental health & addiction', 'Professional & ethical dilemmas'],
      stem: {
        name: 'Danny Boyd', age: '35 years · male',
        pmh: ['Newly registered (moved area); on methadone OST, "runs out today"', 'Dose/prescriber/pharmacy not yet verified', 'Fear of withdrawal and relapse'],
        meds: ['Methadone (unverified)'],
        allergy: 'NKDA',
        recent: '⚠ Pressured phone request for a methadone script "today".',
        reason: 'Telephone — urgent methadone continuation.'
      },
      timeMap: [
        { t:'0–2',  h:'Serious + respectful', d:'Take it seriously, no judgement. Hear the fear of withdrawal and, more, of relapse and losing stability.' },
        { t:'2–4',  h:'Why not write it blind', d:'Methadone is dangerous if the dose/tolerance isn\u2019t confirmed — could be fatal. Not distrust; safety. So do it the safe, fast way.' },
        { t:'4–6',  h:'Verify + route urgently', d:'Contact previous drug service + pharmacy to confirm dose/last pick-up; fast-track to the local drug team (often same-day).' },
        { t:'6–8',  h:'Harm reduction',       d:'Don\u2019t top up illicitly (the real danger); naloxone; check immediate safety.' },
        { t:'8–12', h:'No abandonment + net', d:'Not fobbed off, not left to relapse — urgent because stability matters. Ring back with the plan; 999 if at risk.' }
      ],
      wordPics: {
        fail: 'Either prescribes methadone blind on the unverified request (potentially fatal) or refuses flatly and abandons him to withdrawal/relapse; treats him with suspicion; no verification, no harm reduction.',
        pass: 'Declines a blind script, verifies with previous service/pharmacy, routes urgently to the drug team, provides harm reduction, and reassures.',
        exc:  'Treats him with respect and genuine urgency; explains why a blind script is unsafe (for his protection, not distrust); verifies and fast-tracks same-day continuation via the drug service; gives harm-reduction/naloxone and checks safety; and holds the boundary while reassuring he won\u2019t be abandoned.'
      },
      avoid: [
        { dont:'"Okay, I\u2019ll put a methadone script through to tide you over."', instead:'"I can\u2019t write methadone safely without confirming your dose — it can be fatal if anything\u2019s off. Let me verify with your old service and get you continued the safe, fast way today."', why:'Prescribing methadone on an unverified request risks fatal overdose (dose/tolerance unknown).' },
        { dont:'"I can\u2019t help with that — you\u2019ll have to sort it with a drug service yourself."', instead:'"I\u2019m not leaving you stuck — I\u2019ll contact your old service and pharmacy now and fast-track you to the local drug team today."', why:'A flat refusal that abandons him to withdrawal/relapse is unsafe; the GP must facilitate urgent verified continuity.' },
        { dont:'"How do I know you\u2019re really on it?" (suspicion-as-dismissal)', instead:'"I believe you — and the safe way to protect you is to verify your dose and get you continued properly, which I\u2019ll do right now."', why:'Treating the request with suspicion-as-refusal disengages the patient; verification (not distrust) is the route.' }
      ]
    },

    'prison-release-continuity': {
      ceg: ['Health disadvantage & vulnerabilities', 'Mental health & addiction'],
      stem: {
        name: 'Lee Marwood', age: '41 years · male',
        pmh: ['Released from prison yesterday; left with NO medication', 'Was on antipsychotic + antiepileptic + methadone (OST)', '⚠ Homeless, penniless, "feeling rough"; fears relapse'],
        meds: ['(all stopped at the gate)'],
        allergy: 'NKDA',
        recent: 'Just registered; needs medication and help urgently.',
        reason: 'Telephone — recently released, no medication.'
      },
      timeMap: [
        { t:'0–2',  h:'Urgency + respect',   d:'Right thing to ring; treat as urgent — first days post-release are highest-risk. He matters; won\u2019t be left with nothing.' },
        { t:'2–4',  h:'Triage the meds',     d:'Antiepileptic (seizure risk) + antipsychotic (relapse) continue safely + urgently; methadone via the drug team (verify, not blind). Pull prison records.' },
        { t:'4–6',  h:'Social emergency',    d:'Homeless, no money — central to his health. Housing, finance, release-liaison and substance/MH services today.' },
        { t:'6–9',  h:'Risk + harm reduction', d:'Mood/suicide/cravings assessment; lost tolerance = overdose risk; naloxone; 999 if at risk.' },
        { t:'9–12', h:'Continuity + follow-up', d:'Not a brush-off — chase records, continue essential meds, fast-track OST, wrap-around support. Ring back today; close follow-up.' }
      ],
      wordPics: {
        fail: 'Leaves him with nothing / defers as a routine registration; abruptly continues nothing (seizure/relapse risk) or prescribes OST blind; ignores the homelessness and overdose risk; treats him as a difficult case.',
        pass: 'Recognises the high-risk window, verifies and continues essential meds, routes OST via the drug team, arranges social support, and assesses risk/harm reduction.',
        exc:  'Meets him with urgency and dignity; triages each medication (antiepileptic/antipsychotic continued safely, OST verified via the drug service); treats the homelessness/finance as central with wrap-around support; assesses mental-health/overdose risk with naloxone; and delivers continuity-as-life-saving-care with close follow-up.'
      },
      avoid: [
        { dont:'"You\u2019ll need to book a routine appointment to get your medications sorted."', instead:'"This is urgent — the first weeks out are high-risk. I\u2019ll pull your prison records and continue what can\u2019t safely wait today, and fast-track your methadone through the drug team."', why:'Deferring continuity in the high-mortality post-release window risks seizures, relapse, overdose and crisis.' },
        { dont:'"I\u2019ll restart your methadone now to keep you going." (blind)', instead:'"The methadone I have to continue the safe way through the drug service after confirming your dose — but I\u2019ll get it moving today."', why:'Prescribing OST blind risks fatal overdose, especially with lost tolerance after custody.' },
        { dont:'"Housing and money aren\u2019t really things I can help with here."', instead:'"Nowhere to stay and no money are central to keeping you safe — I\u2019ll connect you with release and housing support today."', why:'Treating destitution as "not medical" abandons a social emergency that drives the post-release risk.' }
      ]
    },

    'flight-anxiety-diazepam': {
      ceg: ['Prescribing & pharmacology', 'Mental health & addiction'],
      stem: {
        name: 'Bianca Foster', age: '38 years · female',
        pmh: ['Fear of flying; long-haul flight in 2 weeks', 'Otherwise well; "old GP always gave diazepam"', 'Possible broader anxiety'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Requesting "a few diazepam" for the flight.',
        reason: 'Telephone — diazepam request for fear of flying.'
      },
      timeMap: [
        { t:'0–2',  h:'Validate first',      d:'Fear of flying is real and the trip matters. Goal: actually get her on the plane. Then be honest about the diazepam.' },
        { t:'2–5',  h:'Kindly decline + reasons', d:'Sedation/paradoxical; VTE risk with immobility; impaired in an emergency; illegal in some countries; dependence; and it doesn\u2019t treat the fear.' },
        { t:'5–7',  h:'What actually works',  d:'Fear-of-flying courses (airline/CBT), CBT for phobia, breathing/grounding, self-help — treat it, don\u2019t mask it.' },
        { t:'7–9',  h:'Explore wider anxiety', d:'Just flying, or anxiety elsewhere too? Treatable and worth addressing separately.' },
        { t:'9–12', h:'Boundary + plan + net', d:'No diazepam — not to leave her stuck, but because it\u2019s not safe or effective. Signpost course/CBT, teach a breathing technique; route back.' }
      ],
      wordPics: {
        fail: 'Either caves and prescribes diazepam "because the old GP did" (unsafe/poor practice) or issues a curt refusal that leaves her dismissed and stuck; never validates the fear or offers effective alternatives.',
        pass: 'Declines benzodiazepines with the reasons, validates the fear, and signposts a fear-of-flying course / CBT / breathing techniques.',
        exc:  'Validates the fear and the trip\u2019s importance; declines kindly with the full reasoning (sedation/VTE/emergency/legality/dependence/efficacy); offers genuinely effective alternatives (airline course, CBT, breathing/self-help); explores broader anxiety; and holds the boundary warmly so she leaves with real help, not a bare "no".'
      },
      avoid: [
        { dont:'"Okay, I\u2019ll do you five diazepam just for the flight then."', instead:'"I\u2019m going to be honest about why GPs don\u2019t give diazepam for flights — and set you up with things that actually work much better."', why:'Prescribing benzodiazepines for flight anxiety is unsafe and poor practice, regardless of prior prescribing.' },
        { dont:'"We don\u2019t prescribe that — you\u2019ll have to manage without." (curt)', instead:'"I won\u2019t prescribe it — not to leave you stuck, but because it\u2019s not safe or effective. Here\u2019s what genuinely helps, starting now."', why:'A curt refusal leaves the patient feeling dismissed and stuck; the decline must come with validation and effective alternatives.' },
        { dont:'"Just try to relax and have a drink on the plane." (dismissive)', instead:'"There are proper tools — a fear-of-flying course, a breathing technique I\u2019ll teach you, and talking therapy for the phobia — that really do help."', why:'Glib advice trivialises a real phobia and misses the effective, evidence-based options.' }
      ]
    }
  });

})();
