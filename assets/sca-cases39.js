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
    meta:{ age:48, sex:'M', setting:'Video consultation \u2014 request to increase opioids for chronic back pain.', system:'Pain / Opioids in chronic pain', checked:'October 2026' },
    brief:'Mr Craig Hollis, 48, ex-warehouse worker. Chronic non-specific low back pain ~4 years; on escalating opioids (now tramadol + codeine), requesting "something stronger \u2014 morphine". No new red-flag features. On exploration: the opioids barely help the pain but he\u2019s frightened of being without them; he\u2019s low in mood, off work, isolated, and there are signs of tolerance/dependence. He\u2019s also lost his sense of purpose since the injury ended his job. The request is for escalation; the need is a whole-person pain and mood plan.',
    script:{
      "opening": "\"Doc, I'm at the end of my tether. The tramadol and the codeine just aren't touching this back pain anymore — I need something stronger, morphine or whatever it takes. I can't live like this. Just up the dose or give me the strong stuff, please. I'm not a drug seeker, I'm in genuine pain and nobody's helping me.\"",
      "facts": [
        {
          "topic": "The pain (if asked)",
          "text": "Low back pain since lifting a pallet at work four years ago. Constant ache across the lower back, 7–8/10, sometimes into the buttocks. Worse with sitting long or standing."
        },
        {
          "topic": "Red-flag questions (if asked)",
          "text": "No numbness around the bottom or genitals, no bladder or bowel problems, no leg weakness, no fever, no weight loss, no night sweats, no history of cancer. Nothing new — \"it's the same pain, it's just the tablets don't work\"."
        },
        {
          "topic": "Tablets (if asked)",
          "text": "Tramadol 100 mg four times a day and codeine 60 mg four times a day. If asked honestly: you sometimes take an extra tramadol \"on bad days\" and run out early. If you miss doses you get sweaty, restless and achy, and \"the pain's worse\". You have never bought tablets off the street."
        },
        {
          "topic": "What you have tried (if asked)",
          "text": "Physio once, three years ago — \"six sessions, they gave me a sheet\". Never had a pain clinic referral or psychological support."
        },
        {
          "topic": "Mood and life — only if asked",
          "text": "Lost your job a year ago. Sit at home most of the day. Low mood, poor sleep, irritable with your partner, stopped seeing mates. \"I feel useless.\" If asked about suicide: no thoughts of ending your life. Drinking \"a few cans most nights\" to help you sleep."
        },
        {
          "topic": "Other medicines",
          "text": "Sertraline was started once but you stopped it after two weeks. No allergies."
        },
        {
          "topic": "Social",
          "text": "48, used to work in a warehouse. Lives with partner Lisa and her son, 15. Smokes 15 a day."
        },
        {
          "topic": "Hidden fear — hold back",
          "text": "You are frightened that if the tablets are reduced you will be \"left in agony\" and that the doctor thinks you are an addict. Say this only if asked what worries you about changing the tablets."
        },
        {
          "topic": "How to play it",
          "text": "Frustrated and defensive. If the doctor refuses flatly or implies you are an addict, get angry: \"So you think I'm a junkie?\" If they believe your pain is real, explain honestly why more opioids will not help, and ask about your life and mood, you calm down and engage. You agree to a slow, supported reduction only if there is a real plan to help the pain and your mood."
        }
      ],
      "ice": {
        "ideas": "\"The tablets have stopped working so I need stronger ones.\"",
        "concerns": "\"Being left in pain, with nobody helping me.\" Underneath: being labelled an addict, and feeling useless since losing your job.",
        "expectations": "\"Morphine or a higher dose.\" You will consider another plan if you feel believed and supported."
      },
      "cues": [
        "\"I'm not a drug seeker.\" — say in the opening.",
        "\"I run out early sometimes.\" — say only if asked how you take them.",
        "\"Since I lost my job I just sit at home.\" — say if asked about your life."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises that long-term opioids are largely INEFFECTIVE for chronic non-cancer pain and carry real harms, and that needing "something stronger" usually reflects TOLERANCE/DEPENDENCE rather than under-treatment \u2014 so does NOT simply escalate to morphine/increase the dose' },
      { dom:'ro', text:'VALIDATES that the pain is real (avoiding "it\u2019s all in your head") while honestly explaining why escalation won\u2019t help and may harm \u2014 holding the line without abandoning him' },
      { dom:'dg', text:'Explores and addresses the WHOLE picture: mood/depression, sleep, the loss of job/identity, isolation and purpose, and function \u2014 recognising the opioids are coping with emotional as well as physical pain' },
      { dom:'cm', text:'Offers an evidence-based chronic low back pain PLAN (NICE NG59): supported self-management, an exercise programme/physiotherapy, support to return to work or normal activities, treating mood in its own right (psychological therapy for depression per NICE NG222 — not a pain-management programme/CBT for the back pain, whose NG59 recommendations were withdrawn in July 2026), and social/occupational support \u2014 rather than a pharmacological-only approach' },
      { dom:'cm', text:'Proposes a STRUCTURED, SUPPORTED opioid reduction (not abrupt withdrawal), framed as reducing harm and often improving pain/function \u2014 with the patient as a partner and clear support, not as punishment or abandonment' },
      { dom:'ro',   text:'Hears the fear of abandonment and being judged ("I\u2019m not a drug seeker") and responds with warmth and partnership, neither colluding with escalation nor rupturing trust with a flat refusal' },
      { dom:'ro',   text:'Surfaces the loss/low mood with compassion and frames the plan as helping the whole person, so he feels supported rather than dismissed' },
      { dom:'cm',    text:'Safety-nets and follows up: the agreed plan (physio/psychological/mood support, supported reduction), what help is available, mood/risk review, and a clear follow-up \u2014 partnership over a prescription, with the patient not left to cope alone' },
    ],
    worked:[
      { lbl:'Validate the pain',    txt:'"First \u2014 I believe you. Your pain is real, I\u2019m not for one second saying it\u2019s in your head, and you\u2019re not a drug seeker. Four years of this would grind anyone down. So let\u2019s work on it honestly together, because I don\u2019t think you\u2019re getting the help you deserve."' },
      { lbl:'The honest truth on opioids', txt:'"Here\u2019s the hard, honest bit though: the reason the tablets aren\u2019t touching it isn\u2019t that the dose is too low \u2014 it\u2019s that strong painkillers like these mostly DON\u2019T work for long-term pain like yours, and the body gets used to them so you need more for less benefit. Going up to morphine is very unlikely to help your pain and quite likely to harm you \u2014 the sleepiness, the falls, the way it can actually make pain worse over time. I\u2019d be failing you to just hand it over."' },
      { lbl:'Surface the real load', txt:'"Can I ask how things are beyond the pain? Since the injury ended your job \u2026 \u2026 That\u2019s a huge loss \u2014 your work, your routine, your sense of purpose \u2014 and being stuck at home, low and on your own. I think the tablets have been carrying some of THAT too, not just the back. And that part we can really help with."' },
      { lbl:'What actually works',   txt:'"The things that genuinely help long-term pain aren\u2019t stronger drugs \u2014 they\u2019re keeping moving with the right physio, understanding how the nerves amplify pain so you can pace and build activity, treating the low mood and sleep (talking therapy can help with that), and getting some purpose and people back into your days. I know that sounds less immediate than a tablet, but it\u2019s what actually changes things."' },
      { lbl:'Supported reduction, not abandonment', txt:'"And rather than more, I\u2019d like to help you GENTLY come down on what you\u2019re on \u2014 slowly, at your pace, with support, never cold turkey. People are often surprised that as the opioids come down, the fog lifts and the pain is no worse, sometimes better. I\u2019m not taking anything away and leaving you \u2014 I\u2019m walking it with you."' },
      { lbl:'Plan + safety-net',    txt:'"So: let’s sort physio and an exercise programme, treat your mood properly, look at getting you some support and structure, and make a careful plan to ease the tablets down together. I\u2019ll see you regularly through it \u2014 you\u2019re not on your own with this. You came in wanting something stronger; what I want to give you is something that actually works, and a doctor who\u2019s in your corner."' },
    ],
    learning:'Long-term opioids are largely ineffective for chronic non-cancer pain and carry real harms (tolerance, dependence, hyperalgesia, sedation, falls, overdose), so a request for "something stronger" usually reflects tolerance/dependence rather than under-treatment \u2014 and escalation rarely helps and often harms. Both failure modes must be avoided: simply escalating (collusion) and a flat refusal/"it\u2019s in your head" (abandonment and ruptured trust). The skill is honest, validating partnership: affirm the pain is real, explain why escalation won\u2019t help and may harm, and pivot to an evidence-based whole-person plan \u2014 supported self-management, physical activity/physiotherapy, psychological approaches, treating mood/sleep, and social/occupational support \u2014 plus a STRUCTURED, supported opioid reduction (never abrupt), framed as reducing harm and often improving pain/function. The examinable hidden agenda is fear of abandonment and being judged ("I\u2019m not a drug seeker") plus profound loss of job/identity and low mood the opioids are also medicating; surface and treat that, hold the line with warmth not coldness, and walk the plan with him.',
    knowledge:{
      guideline:'NICE NG59 Low back pain and sciatica in over 16s (2016, updated July 2026; recs 1.2.13 and 1.2.14 withdrawn) · NICE NG215 Medicines associated with dependence or withdrawal symptoms (2022) · Faculty of Pain Medicine Opioids Aware (online resource) · MHRA Drug Safety Update, September 2020 (opioids: risk of dependence and addiction) · NICE NG222 Depression in adults (2022, updated December 2025) · NICE NG193 Chronic pain (2021; for chronic primary pain, not low back pain) · supported opioid tapering',
      points:[
        { h:'Opioids don\u2019t work for chronic pain', t:'There is little evidence of benefit from long-term opioids in chronic non-cancer/primary pain, and clear evidence of harm that increases with dose and duration. For chronic low back pain, NICE NG59 advises NOT offering opioids (NICE NG193 likewise advises against initiating opioids for chronic primary pain, but NG59 is the guideline for back pain). "It\u2019s not working" usually signals tolerance/dependence, not under-dosing.' },
        { h:'Harms of escalation', t:'Higher-dose/long-term opioids cause tolerance, dependence, opioid-induced hyperalgesia (worsening pain), sedation, falls/fractures, cognitive impairment, hypogonadism/low mood, constipation, and overdose risk. Escalation rarely improves pain or function and increases all these harms. MHRA Drug Safety Update (September 2020): opioids carry a risk of dependence and addiction even at therapeutic doses — review regularly. Two concurrent opioids (here tramadol and codeine) add harm without clear benefit; rationalise to one before tapering.' },
        { h:'Validate without colluding', t:'Affirm the pain is real and the patient is not a "drug seeker"; avoid both collusive escalation and dismissive "it\u2019s in your head"/flat refusal. Honest partnership \u2014 naming the dependence and the futility of escalation kindly \u2014 maintains trust.' },
        { h:'Whole-person plan', t:'Offer supported self-management, physical activity and physiotherapy (NICE NG59: an exercise programme, manual therapy only within a package with exercise, support to return to work; NG59 also advises against SSRIs, SNRIs and tricyclics for the back pain itself), treatment of comorbid depression/anxiety (NICE NG222, e.g. NHS Talking Therapies) and sleep, and social/occupational support. NG59 withdrew its psychological therapy and combined physical-psychological programme recommendations (1.2.13/1.2.14) in July 2026 because they partly rested on retracted evidence. Address loss of role/identity and isolation \u2014 often central drivers.' },
        { h:'Supported tapering', t:'Reduce opioids gradually and collaboratively (never abruptly), with support (NICE NG215: an individualised, agreed reduction with regular review; one medicine at a time, step size and pace per BNF); many patients find pain unchanged or improved and function/mood better as opioids reduce. Frame as harm reduction and self-empowerment, not punishment or abandonment.' },
        { h:'Mood and risk', t:'Screen for depression and suicidality (chronic pain + opioids + loss carry real risk); treat mood and provide support. The emotional pain is part of the picture and part of the treatment.' },
        { h:'Never do', t:'Never escalate to/increase strong opioids for chronic primary pain "because it\u2019s not working"; never dismiss the pain as imaginary or refuse flatly and abandon the patient; never withdraw opioids abruptly; never ignore the mood/loss driving the request; never leave the patient without support and follow-up.' },
        { h:'Safety-net & follow-up', t:'Agreed whole-person plan (physio/psychological/mood/social support) and a supported, paced opioid reduction; mood/risk review; regular follow-up through the change; partnership over prescription.' }
      ]
    }
  };

  /* ============ 150. TELEPHONE — New patient needs methadone continued today: safe bridging ============ */
  const c150 = {
    id:'methadone-bridging', title:'"I\u2019ve just moved here and my methadone runs out today \u2014 I need a script now"', type:'telephone', duration:12,
    meta:{ age:35, sex:'M', setting:'Telephone \u2014 new patient requesting urgent methadone continuation.', system:'Addiction / Opioid substitution & safe bridging', checked:'October 2026' },
    brief:'Mr Danny Boyd, 35, recently moved area, newly registered, rings because his methadone (opioid substitution therapy) "runs out today" and he\u2019ll be "in bits"/at risk of relapse without it. He cannot immediately verify his dose or current prescriber/pharmacy. He is anxious and pressured. The safe approach: do NOT prescribe methadone blind (overdose risk if dose unverified/not tolerant), but do NOT simply abandon him to withdrawal/relapse either \u2014 verify urgently and bridge safely via the local drug service.',
    script:{
      "opening": "\"Hello, I've just registered with you — I moved here last week. Look, I'm on methadone, 60ml a day, and my script runs out today. If I don't get it I'll be climbing the walls by tonight and honestly I'm scared I'll end up using again. I just need you to write me a methadone script now, today. Please, I can't be without it.\"",
      "facts": [
        {
          "topic": "Your treatment",
          "text": "On methadone for three years with the Leeds drug service, 60 ml once a day, supervised at the pharmacy at first, now picking up twice a week. Last dose collected yesterday — \"that was my last one\"."
        },
        {
          "topic": "Details for verifying — if asked",
          "text": "Your keyworker is Sam at \"Forward Leeds\"; you have the number on your phone. Pharmacy: Boots on Kirkstall Road. You will happily give consent for the doctor to call them."
        },
        {
          "topic": "Why no transfer",
          "text": "\"I moved in a hurry — my mum got ill and I came to look after her. I didn't sort the transfer. Stupid, I know.\""
        },
        {
          "topic": "Drug use (if asked honestly)",
          "text": "Clean from heroin for 18 months. No other drugs. No benzodiazepines or alcohol to excess. Urine tests at the old service were clean."
        },
        {
          "topic": "Health",
          "text": "Hepatitis C treated two years ago. No other medicines. No allergies. You do not have naloxone with you — \"it's in a drawer back in Leeds\"."
        },
        {
          "topic": "Social",
          "text": "35, staying with your mum, who has just had a stroke. You were working part-time in a warehouse in Leeds. Your daughter (8) lives with her mum in Leeds and you see her at weekends — \"I'm not losing that again\"."
        },
        {
          "topic": "Feelings",
          "text": "Anxious and pressured, fear of withdrawal and, more, of relapse: \"If I score once, that's it.\""
        },
        {
          "topic": "How to play it",
          "text": "Polite but urgent; you will push for a script \"just for today\". If the doctor refuses outright and offers nothing, get desperate: \"So I'm just meant to go and score then?\" If they explain why they cannot safely prescribe without checking, but promise to ring your old service and the local drug service today and keep you safe meanwhile, you accept, give consent and contact details, and agree a time to be called back."
        }
      ],
      "ice": {
        "ideas": "\"A GP can just write me a methadone script today.\"",
        "concerns": "\"I'm scared I'll end up using again.\" And losing contact with your daughter.",
        "expectations": "\"Write me a script now.\" You will accept an urgent verification and same-day plan if you are not left with nothing."
      },
      "cues": [
        "\"I'm scared I'll end up using again.\" — say in the opening.",
        "\"My keyworker's number is on my phone.\" — say when the doctor talks about checking.",
        "\"I'm not losing my little girl again.\" — say if asked about family or what keeps you going."
      ]
    },
    checkpoints:[
      { dom:'cm', text:'Does NOT prescribe methadone blind on an unverified phone request \u2014 recognising the fatal overdose risk of an unverified/excessive dose or lost tolerance \u2014 while also NOT simply refusing and abandoning him to withdrawal/relapse' },
      { dom:'cm', text:'Acts with genuine URGENCY to VERIFY: contacts his previous drug service/prescriber and dispensing pharmacy to confirm the dose, regimen and last pick-up' },
      { dom:'cm', text:'Routes him rapidly to the LOCAL specialist drug/substance-misuse service for same-day assessment and safe continuation of OST (using local fast-track/transfer arrangements), rather than managing it as a routine GP prescription' },
      { dom:'cm', text:'Provides HARM-REDUCTION safety-netting while continuity is arranged: the risks of relapse and overdose (especially with lost tolerance), advice not to top up from illicit sources, and naloxone provision/availability' },
      { dom:'dg', text:'Takes the RELAPSE RISK and the patient\u2019s wider stability (work, family, recovery) seriously as part of the urgency, and documents the verification/bridging steps' },
      { dom:'ro',   text:'Treats him with RESPECT and dignity \u2014 not suspicion-as-dismissal \u2014 hears the fear of withdrawal/relapse and of being judged, and reassures he will not be abandoned' },
      { dom:'ro',   text:'Holds the safety boundary (no blind script) WITHOUT rupturing trust, framing verification/urgent routing as the way he gets his treatment safely and fast' },
      { dom:'cm',    text:'Safety-nets and follows up: the verification + same-day drug-service route confirmed, harm-reduction/overdose advice and naloxone, what to do meanwhile, and follow-up to ensure continuity happened \u2014 safe, verified bridging, treating him as a person' },
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
      guideline:'Department of Health Drug misuse and dependence: UK guidelines on clinical management (2017, the "Orange Book") · NICE TA114 Methadone and buprenorphine for the management of opioid dependence (2007) · Human Medicines (Amendment) Regulations 2015 (naloxone supply) · OST transfer/continuity · naloxone provision',
      points:[
        { h:'Never prescribe OST blind', t:'Do not initiate or continue methadone/buprenorphine for a new patient without VERIFYING the prescriber, dose, regimen and current tolerance (Orange Book, 2017). Methadone is long-acting with a narrow therapeutic index; an unverified or excessive dose, or a dose given after lost tolerance (treatment gap), can cause fatal respiratory depression \u2014 including overdose deaths in induction/transfer.' },
        { h:'But don\u2019t abandon either', t:'Refusing and leaving the patient to abrupt withdrawal and relapse is also unsafe (relapse to illicit use carries high overdose risk, especially with reduced tolerance). The answer is neither a blind script nor a flat refusal, but VERIFIED, URGENT continuity.' },
        { h:'Verify and route urgently', t:'Contact the previous drug/substance-misuse service and dispensing pharmacy to confirm dose and last pick-up. Route the patient rapidly to the LOCAL specialist drug service \u2014 most have same-day/fast-track transfer arrangements to continue OST safely. Treat as urgent, not routine.' },
        { h:'Harm reduction', t:'Advise against topping up from illicit sources (the main acute danger); provide/ensure naloxone (drug services can supply it without a prescription under the Human Medicines (Amendment) Regulations 2015); counsel on overdose risk especially if any gap/lost tolerance; assess immediate safety. Continuity of OST is itself a key harm-reduction and life-saving intervention.' },
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
    meta:{ age:41, sex:'M', setting:'Telephone \u2014 recently-released prisoner with no medication.', system:'Health inequality / Continuity after prison release', checked:'October 2026' },
    brief:'Mr Lee Marwood, 41, released from prison yesterday, newly registered, rings because he\u2019s been left with NO medication. On exploration: he was on a mix \u2014 an antipsychotic (for a psychotic illness), an antiepileptic, and was on opioid substitution. He has nowhere stable to stay, no money, and is anxious. The first weeks after release are a period of EXTREME risk (overdose death, relapse, mental-health crisis, self-harm/suicide). Continuity of medication and rapid wrap-around support are urgent, life-saving priorities.',
    script:{
      "opening": "\"Hi, I got out of prison yesterday and I've registered with you. The thing is they stopped all my medication at the gate — I've got nothing. I was on tablets for my head, for my fits, and I was on a methadone script in there. I don't know what I'm doing, I've got nowhere proper to stay, no money, and I'm starting to feel rough. Can you help me? I don't want to end up back where I was.\"",
      "facts": [
        {
          "topic": "Where you were",
          "text": "HMP Leeds for 14 months. Released yesterday morning with a discharge grant and \"a bit of paper\" — you have lost it. You were told an appointment with the drug service \"would be sorted\" but nobody has rung."
        },
        {
          "topic": "Your tablets (if asked)",
          "text": "\"Olanzapine — 10, I think, at night — for my head. Something for my fits, levetiracetam, twice a day. And methadone, 50 ml every morning.\" Last doses were the morning before release, about 30 hours ago."
        },
        {
          "topic": "How you feel now (if asked)",
          "text": "Sweaty, yawning, stomach cramps, runny nose, aching — \"starting to rattle\". Sleeping badly. No fits since about two years ago; last one was when you stopped the tablets before. You are not hearing voices at the moment \"but I can feel myself getting wound up\"."
        },
        {
          "topic": "Drugs (if asked honestly)",
          "text": "Used heroin for years before prison. Clean inside. \"I've had a mate offer me some already. I said no. For now.\" You know your tolerance is low."
        },
        {
          "topic": "Mental health — only if asked directly",
          "text": "Diagnosed with schizophrenia at 25; two admissions, last one six years ago. If asked about suicide: \"Some days I think what's the point.\" No plan; you have not harmed yourself since prison; you would ring your sister if it got bad."
        },
        {
          "topic": "Living situation",
          "text": "Sleeping on a friend's sofa for now, \"but he uses, so it's not great\". No money until benefits come through. Probation officer, Sarah, is expecting you on Thursday."
        },
        {
          "topic": "Medical history",
          "text": "Epilepsy since childhood. Hepatitis C — \"they treated it inside\". No allergies. Smoke 20 a day."
        },
        {
          "topic": "How to play it",
          "text": "Anxious, a bit jumpy, trying hard. If the doctor sounds like they will just \"wait for your records\", you panic: \"I can't wait, I'll be using by the weekend.\" If they take you seriously, get the prison healthcare details, explain what can be sorted today (fits tablets, mental-health medicine, urgent drug service, naloxone) and help with housing, you calm down and cooperate — giving consent to contact the prison, probation and the drug service."
        }
      ],
      "ice": {
        "ideas": "\"They've stopped my meds and I need them back today.\"",
        "concerns": "\"I don't want to end up back where I was\" — using, unwell, or back inside. Underneath: having a fit or \"losing it\".",
        "expectations": "\"Can you help me?\" You want your tablets and somebody to sort things with you."
      },
      "cues": [
        "\"I don't want to end up back where I was.\" — say in the opening.",
        "\"A mate's already offered me some.\" — say if asked about drugs.",
        "\"Some days I think what's the point.\" — say only if asked about your mood directly."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises the post-release period as EXTREME risk (drug-related overdose death from lost tolerance, suicide, relapse, mental-health and seizure risk) and treats continuity of essential medication and support as an URGENT, potentially life-saving priority' },
      { dom:'cm', text:'Prioritises and acts on each medication with appropriate urgency: verifies prison medications (prison healthcare/records) and safely continues the ANTIPSYCHOTIC (relapse risk) and ANTIEPILEPTIC (seizure risk \u2014 not to be stopped abruptly), and routes OST/methadone via the drug service (verify, don\u2019t prescribe blind)' },
      { dom:'dg', text:'Addresses the SOCIAL emergency: housing/homelessness, finance/benefits, and linkage to substance-misuse and mental-health services \u2014 using prison-release liaison/RECONNECT-type and homeless-health pathways where available' },
      { dom:'cm', text:'Carries out a MENTAL-HEALTH and RISK assessment (psychotic relapse, suicide/self-harm, substance relapse) and provides HARM REDUCTION (overdose risk/lost tolerance, naloxone)' },
      { dom:'cm', text:'Acts with genuine URGENCY/continuity rather than deferring \u2014 obtaining records and bridging essential medication safely the same day where possible, and not leaving him with "nothing"' },
      { dom:'ro',   text:'Treats him with RESPECT and dignity \u2014 not as a difficult registration \u2014 hears the fear of relapse and being judged, and reassures him his health matters and he will be helped' },
      { dom:'ro',   text:'Holds the safety boundaries (verify OST, don\u2019t prescribe blind) while conveying genuine urgency and care, so he engages rather than disengages' },
      { dom:'cm',    text:'Safety-nets and follows up: urgent verified medication continuity, wrap-around support arranged (housing/finance/substance/MH services), risk plan and crisis routes, harm-reduction/naloxone, and a close follow-up \u2014 continuity-as-care through a high-risk window' },
    ],
    worked:[
      { lbl:'Meet him with urgency + respect', txt:'"I\u2019m really glad you rang \u2014 you\u2019ve done exactly the right thing, and I\u2019m going to treat this as urgent, because the first days after getting out are when people most need looking after, not least. You matter, and I\u2019m not going to leave you with nothing. Let\u2019s sort this together."' },
      { lbl:'Triage the medications', txt:'"Let\u2019s take the medications one at a time, because some can\u2019t safely just stop. Your epilepsy tablet \u2014 stopping that suddenly can cause fits, so that\u2019s a priority to continue. Your tablet for your head \u2014 stopping risks you becoming unwell again, so that too. And the methadone I have to continue the safe way through the drug team rather than write blind \u2014 but I\u2019ll get that moving today. I\u2019ll pull your prison records to confirm everything."' },
      { lbl:'The social emergency', txt:'"Just as important \u2014 you said you\u2019ve nowhere proper to stay and no money. That\u2019s not separate from your health, it\u2019s central to it, and there\u2019s help I can connect you with today: housing support, sorting some money, and the teams who help people just out of prison. You shouldn\u2019t be facing this with nothing."' },
      { lbl:'Risk + harm reduction', txt:'"Can I check how you are in yourself \u2014 your mood, any thoughts of harming yourself, how the cravings are? \u2026 Thank you. One really important safety thing: your tolerance will have dropped inside, so using like before could be an overdose. Please don\u2019t \u2014 and we\u2019ll get you naloxone to be safe. If you\u2019re ever at risk, that\u2019s 999."' },
      { lbl:'Continuity, not a brush-off', txt:'"I want you to hear this clearly: you\u2019re not being passed around or judged. The opposite \u2014 I\u2019m going to chase your records, get your essential medication continued safely today, link you with the drug team, and get you support for housing and money. We\u2019re doing this now."' },
      { lbl:'Confirm + follow-up',  txt:'"So: I\u2019ll get your prison medication records, continue what can\u2019t safely wait, fast-track the methadone through the drug service, and connect you with release and housing support \u2014 and I\u2019ll ring you back today with the plan. I want to see you again very soon to keep you safe through these next weeks. You rang frightened of ending up back where you were; my job is to make sure you don\u2019t."' },
    ],
    learning:"The first weeks after prison release are an extreme-risk window — markedly elevated drug-related overdose death (lost tolerance after enforced abstinence/reduction), suicide, relapse, mental-health crisis and seizure risk — so being left with \"nothing\" is a dangerous gap to close urgently, and continuity of medication plus rapid wrap-around support is potentially life-saving. Triage each medication: continue the ANTIEPILEPTIC (abrupt stopping risks seizures) and ANTIPSYCHOTIC (stopping risks relapse) safely and urgently after verifying prison records, and route OST/methadone via the drug service (verify, don’t prescribe blind — same rule as bridging, plus overdose risk from lost tolerance). Address the intertwined SOCIAL emergency (homelessness, finance, substance/mental-health service linkage) via prison-release/RECONNECT-type and homeless-health pathways, carry out a mental-health/risk assessment, and provide harm reduction (overdose/naloxone). The examinable hidden agenda is fear of relapse and \"ending up back where I was\", shame and low self-worth, and an expectation of being judged/turned away; meet him with respect and genuine urgency — his life matters — hold the OST boundary while conveying care, and deliver continuity-as-life-saving-care with close follow-up. He is effectively homeless, penniless and unsupported — a social emergency intertwined with the medical one. Housing, benefits/finance, and substance/mental-health service linkage are core. Many areas have specific prison-release/RECONNECT-type liaison and homeless-health pathways. Addressing the destitution is part of preventing the bad outcomes.",
    knowledge:{
      guideline:'NICE NG57 Physical health of people in prison (2016) · NICE QS156 Physical health of people in prisons (2017) · NICE NG66 Mental health of adults in contact with the criminal justice system (2017) · NICE NG217 Epilepsies in children, young people and adults (2022, updated January 2025) · NICE CG178 Psychosis and schizophrenia in adults (2014) · NICE TA114 Methadone and buprenorphine for opioid dependence (2007) · DHSC Drug misuse and dependence: UK guidelines on clinical management (Orange Book, 2017) · Homelessness Reduction Act 2017 · continuity of care after prison release · post-release mortality (overdose) · NHS England RECONNECT care after custody · take-home naloxone',
      points:[
        { h:'Post-release is high-mortality', t:'Recently-released prisoners have sharply elevated mortality in the first weeks, especially from drug-related overdose (tolerance falls during custody), plus elevated suicide and relapse. Treat continuity of medication and support as urgent and potentially life-saving — do not defer or leave gaps. NICE NG57 and QS156 (statement 5): people leaving prison should go with at least 7 days of prescribed medicines or an FP10 prescription, with complex needs planned before release; leaving with nothing is a care gap to fix, not his fault.' },
        { h:'Triage essential medications', t:'Antiepileptics (abrupt withdrawal risks seizures and status epilepticus — NICE NG217) and antipsychotics (stopping risks relapse — NICE CG178) need safe, urgent continuation — verify via prison healthcare records and bridge, doses per BNF and the prison record. OST (methadone/buprenorphine) follows the verify-and-route rule: do NOT prescribe blind; confirm regimen and the time of the last supervised dose with the prison and route rapidly (same day) to the drug service (overdose risk if dose/tolerance unverified). NICE TA114 supports methadone or buprenorphine as maintenance options; the DHSC Orange Book (2017) sets out safe induction and continuation.' },
        { h:'Verify, don\u2019t guess', t:'Obtain prison medication records/discharge information to confirm what was prescribed and doses. Bridge what can be safely continued; route controlled drugs/OST through specialist services. Act the same day where possible.' },
        { h:'The social emergency', t:'Homelessness, no money, and disrupted service links are intertwined with the clinical risk. Connect to housing support (local authority housing options team under the Homelessness Reduction Act 2017), benefits/finance (Universal Credit with an advance), substance-misuse and mental-health services, and prison-release liaison (e.g. NHS England RECONNECT) and homeless-health pathways. Addressing destitution helps prevent the bad outcomes.' },
        { h:'Risk and harm reduction', t:'Assess mental-health (psychotic relapse, suicide/self-harm) and substance-relapse risk; NICE NG66 (2017) stresses continuity of care and liaison with probation and community mental health teams. Provide harm reduction: counsel that lost tolerance makes pre-custody doses potentially fatal, supply take-home naloxone (drug services and many pharmacies supply it without a prescription), advise not using alone or with alcohol, benzodiazepines or gabapentinoids, and give crisis routes. Continuity of OST is itself life-saving.' },
        { h:'Dignity and engagement', t:'Treat the patient with respect and genuine urgency, not as a difficult registration. Fear of relapse, shame and expectation of being judged are real; a respectful, problem-solving response retains engagement at a critical moment.' },
        { h:'Never do', t:'Never leave a recently-released patient without essential medication or a plan; never abruptly stop antiepileptics/antipsychotics; never prescribe OST blind; never treat the destitution as "not medical"; never miss the overdose/suicide risk; never process it as routine/non-urgent.' },
        { h:'Safety-net & follow-up', t:'Verify prison records and continue essential meds urgently; fast-track OST via the drug service; arrange housing/finance/substance/MH support; risk assessment and crisis routes; naloxone and overdose advice; close follow-up through the high-risk window.' }
      ]
    }
  };

  /* ============ 152. TELEPHONE — Flight-anxiety diazepam request: the policy and the alternative ============ */
  const c152 = {
    "id": "flight-anxiety-diazepam",
    "title": "“I’ve got a long-haul flight on Saturday and I can’t do it without a few diazepam — my old GP always gave them”",
    "type": "telephone",
    "duration": 12,
    "meta": {
      "age": 36,
      "sex": "F",
      "setting": "Telephone — a medication request before a flight.",
      "system": "Women’s health / Prescribing — a benzodiazepine request for flying in early pregnancy: safe decline, travel and VTE advice in pregnancy, and acute grief",
      "checked": "October 2026"
    },
    "brief": "Bianca Foster, 36, office manager, rings asking for “a few diazepam” for a long-haul flight from Manchester to Toronto on Saturday (about 8 hours). Her previous GP in another area gave her diazepam for flights twice, years ago. She does not mention that she is pregnant; her record shows an antenatal booking at 10 weeks, a normal dating scan, now about 15 weeks, BMI 32, first pregnancy after IVF. If asked why she is travelling: her father died suddenly three days ago in Canada and the funeral is next week. They had not spoken for three years after an argument, and she feels overwhelming guilt. Since the news she has had panic attacks, has barely slept or eaten, and has been crying at work. No thoughts of harming herself. She has not told the midwife about the trip and has not checked her travel insurance. The task: notice the pregnancy and ask about it; explain kindly why diazepam is not advised (pregnancy, sedation and immobility increasing clot risk, impaired response in an emergency, airline and safety issues, it does not treat the fear); give practical non-drug strategies for the flight and for panic; give travel advice for pregnancy (VTE risk on flights over 4 hours with her additional risk factors — individual assessment and possible thromboprophylaxis via the midwife or obstetric team; mobilising, hydration, compression stockings; insurance; carrying maternity notes; when to seek care abroad); and respond to the bereavement and guilt with compassion, with support and follow-up.",
    "script": {
      "opening": "“Hi, I just need a quick prescription. I’ve got a long-haul flight on Saturday and I can’t do it without a few diazepam. My old GP always gave them. Five would do.”",
      "facts": [
        {
          "topic": "The request",
          "text": "Flight on Saturday, Manchester to Toronto, about 8 hours. Terrified of flying since turbulence 10 years ago. Previous GP gave diazepam twice (2018 and 2019). Has never had psychological help for the fear."
        },
        {
          "topic": "Pregnancy (only if asked)",
          "text": "About 15 weeks. First pregnancy after two rounds of IVF. Booked with the midwife, dating scan normal. Some nausea. No bleeding or pain. “I didn’t think it mattered for this.”"
        },
        {
          "topic": "Why she is travelling (if asked)",
          "text": "Her father died suddenly of a heart attack in Toronto three days ago. Funeral next Thursday. Staying with her aunt for 10 days."
        },
        {
          "topic": "Grief (only if explored)",
          "text": "They had not spoken for three years after an argument about her mother. “I kept meaning to call.” Overwhelming guilt. Panic attacks since the news: racing heart, can’t breathe, shaking, lasting about 15 minutes. Barely sleeping or eating. Crying at work. No thoughts of harming herself; “I have the baby to think about.”"
        },
        {
          "topic": "Travel preparations (if asked)",
          "text": "Has not told the midwife. Has not checked whether her travel insurance covers pregnancy. No previous clots. No leg swelling. Her mother had a DVT after surgery years ago."
        },
        {
          "topic": "How to play it",
          "text": "Brisk and practical at first; irritated when diazepam is questioned: “It’s only five tablets.” Becomes tearful when asked why she is travelling. Accepts the decline if it is explained in terms of the baby and her safety and if she gets real help instead."
        }
      ],
      "ice": {
        "ideas": "“Diazepam knocks me out, I sleep through it, problem solved.”",
        "concerns": "HIDDEN AGENDA: guilt and grief after her estranged father’s sudden death; panic attacks since; fear of not getting to the funeral. Also a hidden worry that stress will harm the pregnancy.",
        "expectations": "“A prescription for five diazepam today.”"
      },
      "cues": [
        "Antenatal booking in the record — ask about pregnancy before any prescribing.",
        "“A long-haul flight” at short notice — why is she going?",
        "Tearfulness or a catch in her voice when the trip is mentioned — grief.",
        "“My old GP always gave them” — expectation to negotiate kindly."
      ]
    },
    "checkpoints": [
      {
        "dom": "dg",
        "text": "Notices the pregnancy in the record and confirms gestation and wellbeing before discussing any medicine"
      },
      {
        "dom": "dg",
        "text": "Explores the reason for travel and responds to the bereavement; assesses mood, panic, sleep and risk"
      },
      {
        "dom": "cm",
        "text": "Declines diazepam with clear, kind reasons: pregnancy, sedation and immobility increasing clot risk, impaired ability to respond in an emergency, airline safety, and that it does not treat the fear"
      },
      {
        "dom": "cm",
        "text": "Gives practical non-drug strategies for the flight and for panic (slow breathing, grounding, telling the crew, an aisle seat, distraction, self-help resources)"
      },
      {
        "dom": "dg",
        "text": "Assesses VTE risk for a flight over 4 hours in pregnancy (BMI 32, age over 35, IVF pregnancy, family history) and arranges same-week advice from the midwife or obstetric team on thromboprophylaxis"
      },
      {
        "dom": "cm",
        "text": "Gives travel advice for pregnancy: mobilise and do calf exercises, hydrate, avoid alcohol, graduated compression stockings, carry maternity notes, check insurance covers pregnancy, and know when to seek care abroad"
      },
      {
        "dom": "cm",
        "text": "Offers grief and panic support (bereavement services, NHS Talking Therapies self-referral, follow-up after return) and safety-nets for mood"
      },
      {
        "dom": "ro",
        "text": "Holds the boundary on diazepam without damaging rapport, and checks understanding of the plan"
      }
    ],
    "worked": [
      {
        "lbl": "Before any prescribing",
        "txt": "“Before I think about medicines, I can see from your notes you’re pregnant. How far along are you, and how are you both doing?”"
      },
      {
        "lbl": "Why the trip",
        "txt": "“It sounds like this trip was arranged quickly. Can I ask what it’s for?”"
      },
      {
        "lbl": "Respond to grief",
        "txt": "“I’m so sorry about your dad. And carrying the guilt of not having spoken makes it so much heavier. That’s a lot to hold, especially while pregnant.”"
      },
      {
        "lbl": "The decline",
        "txt": "“I’m not going to prescribe diazepam, and I want to explain why. In pregnancy we avoid it where we can. It makes you sleep still for hours, which raises the risk of a clot, and that risk is already higher in pregnancy. And if anything happened on the plane, you’d need to be alert.”"
      },
      {
        "lbl": "Instead",
        "txt": "“Let’s plan the flight: an aisle seat, get up every hour, calf exercises, lots of water and no alcohol, flight socks. Tell the crew you’re a nervous flyer. And a breathing technique for the panic, which I’ll talk you through.”"
      },
      {
        "lbl": "Clot assessment",
        "txt": "“Because the flight is long and you have a few other risk factors, I’d like the maternity team to check today or tomorrow whether you need blood-thinning injections for the journey.”"
      }
    ],
    "learning": "Requests for benzodiazepines for flight anxiety are common. Many GPs decline them because of sedation and paradoxical reactions, impaired ability to respond in an emergency, increased risk of venous thromboembolism from prolonged immobility while sedated, legal restrictions in some countries, and because they do not treat the phobia. Pregnancy adds weight: benzodiazepines are avoided where possible in pregnancy (check the SPC), and pregnancy itself raises VTE risk. RCOG guidance on reducing the risk of VTE in pregnancy treats long-distance travel (over 4 hours) as a transient risk factor; with additional risk factors such as age over 35, BMI 30 or more, an IVF pregnancy or a family history of VTE, an individual assessment is needed and thromboprophylaxis may be advised by the maternity team. General travel advice in pregnancy: mobilise and do calf exercises, stay hydrated, avoid alcohol, wear well-fitted graduated compression stockings, choose an aisle seat, carry maternity notes, and check that travel insurance covers pregnancy; airlines may ask for a letter later in pregnancy (often after 28 weeks). Non-drug approaches to flight anxiety include slow breathing, grounding, distraction, telling the crew and, longer term, CBT-based courses. The hidden agenda is acute grief complicated by guilt after an estranged parent’s sudden death, with panic attacks: acknowledge it, assess mood and risk, offer bereavement support and NHS Talking Therapies, and follow up on return. Holding a prescribing boundary is easier when the patient feels heard and leaves with a better plan than the one she came for.",
    "knowledge": {
      "guideline": "[1] RCOG Green-top Guideline No. 37a Reducing the risk of venous thromboembolism during pregnancy and the puerperium (2015) · [2] RCOG Scientific Impact Paper: Air travel and pregnancy (check current version) · [3] NICE CKS Benzodiazepine and z-drug withdrawal / Generalized anxiety disorder (check current versions) · [4] NICE CG192 Antenatal and postnatal mental health (2014, updated 2020) · [5] Product SPC for diazepam (use in pregnancy) · [6] NHS Talking Therapies for anxiety and depression (self-referral) and national bereavement support services",
      "summary": "A request for diazepam for an 8-hour flight from a woman who is 15 weeks pregnant after IVF, BMI 32, age 36, with a family history of VTE, travelling to her estranged father’s funeral with acute grief and panic attacks. Decline diazepam kindly with reasons, give non-drug strategies, arrange urgent maternity assessment of VTE risk for the flight, give pregnancy travel advice, and support her grief.",
      "points": [
        {
          "h": "Why not benzodiazepines for flying",
          "t": "Sedation and paradoxical agitation, impaired response in an emergency, immobility increasing VTE risk, possible legal issues abroad, dependence, and no effect on the underlying phobia."
        },
        {
          "h": "Pregnancy",
          "t": "Avoid benzodiazepines in pregnancy where possible; check the SPC [5]. Always ask about pregnancy before prescribing for a woman of reproductive age."
        },
        {
          "h": "VTE risk with travel in pregnancy",
          "t": "Long-distance travel over 4 hours is a transient risk factor. With other risk factors (age over 35, BMI 30 or more, IVF, family history), an individual assessment is needed; the maternity team may advise LMWH [1]."
        },
        {
          "h": "Travel measures",
          "t": "Aisle seat, walk regularly, calf exercises, hydration, avoid alcohol, graduated compression stockings, carry maternity notes [2]."
        },
        {
          "h": "Insurance and airlines",
          "t": "Check travel insurance covers pregnancy. Airlines often require a letter later in pregnancy, usually after 28 weeks; not needed at 15 weeks [2]."
        },
        {
          "h": "Flight anxiety without drugs",
          "t": "Slow breathing, grounding techniques, distraction, telling the crew, and longer term CBT-based fear-of-flying courses."
        },
        {
          "h": "Grief and panic",
          "t": "Acute grief with guilt after estrangement is common. Assess mood, sleep and risk; offer bereavement support and NHS Talking Therapies self-referral; consider perinatal mental health input if symptoms persist [4,6]."
        },
        {
          "h": "Holding the boundary",
          "t": "Decline clearly and kindly, explain the reasons in terms of her and the baby’s safety, and offer a concrete alternative plan."
        }
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
        { t:'6–8',  h:'What actually works',  d:'Physio/exercise programme, treat mood/sleep (talking therapy for the depression), purpose and people (NG59). Less immediate than a tablet, but real.' },
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
      "ceg": [
        "Gender, reproductive & sexual health",
        "Mental health & addiction"
      ],
      "stem": {
        "name": "Bianca Foster",
        "age": "36 years · female",
        "pmh": [
          "Pregnancy: antenatal booking at 10 weeks (IVF pregnancy); dating scan normal",
          "Anxiety (2019)"
        ],
        "meds": [
          "Folic acid 400 micrograms daily"
        ],
        "allergy": "None recorded",
        "recent": "Antenatal booking: BMI 32. Previous practice records show diazepam issued in 2018 and 2019 “for flights”.",
        "reason": "Telephone request: “a few diazepam for a flight”."
      },
      "timeMap": [
        {
          "t": "0–1",
          "h": "Open",
          "d": "Identity. Hear the request. Raise the pregnancy before medicines."
        },
        {
          "t": "1–6",
          "h": "History",
          "d": "Why the trip: father’s death, estrangement, guilt. Panic, sleep, risk. The flying fear. ICE."
        },
        {
          "t": "6–8",
          "h": "Decline",
          "d": "No diazepam: pregnancy, clot risk, alertness, doesn’t treat fear. Hold the boundary kindly."
        },
        {
          "t": "8–11",
          "h": "Plan",
          "d": "VTE risk factors; maternity assessment before Saturday; travel measures; breathing and grounding; notes and insurance; grief support."
        },
        {
          "t": "11–12",
          "h": "Close",
          "d": "Teach-back; urgent care abroad; crisis numbers; follow-up."
        }
      ],
      "wordPics": {
        "fail": "Prescribes diazepam without noticing the pregnancy, or refuses curtly without reasons or alternatives; never asks why she is travelling.",
        "pass": "Notices the pregnancy, declines diazepam with reasons, gives non-drug strategies and travel advice, and responds to the bereavement.",
        "exc": "All of the above, plus: links the decline to her and the baby’s safety; identifies multiple VTE risk factors and arranges maternity assessment before the flight; practical panic techniques; insurance and notes; acknowledges the guilt with compassion; follow-up after her return."
      },
      "avoid": [
        {
          "dont": "“Sure, five won’t hurt.”",
          "instead": "“Before any medicine, I can see you’re pregnant. Let’s talk about that.”",
          "why": "Benzodiazepines are avoided in pregnancy where possible and sedation increases clot risk."
        },
        {
          "dont": "“We don’t prescribe that for flying. Anything else?”",
          "instead": "“I’m not going to prescribe it, and here’s why. Let’s plan the flight another way.”",
          "why": "A bare refusal damages trust and leaves her without help."
        },
        {
          "dont": "(Not asking why she is travelling)",
          "instead": "“It sounds like this came up quickly. What’s the trip for?”",
          "why": "The bereavement is the hidden agenda."
        }
      ]
    }
  });

})();
