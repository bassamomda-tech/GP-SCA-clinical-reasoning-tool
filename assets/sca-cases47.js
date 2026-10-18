/* ============================================================
   Reasoning GP — Case Library batch 47:
   "The long shadow — pain, survival, inheritance & the record"
   Four ORIGINAL cases: postherpetic neuralgia (the neuropathic
   ladder + the misery behind it); post-ICU syndrome (the survivor
   nobody followed up); polycystic kidney disease at 24 (screening
   a family, planning a life); and a request to amend the medical
   record (correction vs erasure — a professional/ethics dilemma).
   None carries a NICE NG12 cancer pathway; none is invented.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases46.js.
   ============================================================ */

(function(){

  /* ============ 181. F2F — Postherpetic neuralgia: the neuropathic ladder + the misery behind it ============ */
  const c181 = {
    id:'postherpetic-neuralgia', title:'"The shingles rash went months ago \u2014 so why does my skin still burn day and night?"', type:'video', duration:12,
    meta:{ age:74, sex:'F', setting:'Video consultation \u2014 persistent pain long after shingles healed.', system:'Neurology / Pain \u2014 postherpetic neuralgia: the neuropathic ladder & the toll', checked:'October 2026' },
    brief:'Mrs Edith Caldwell, 74, had shingles in a left T6 dermatome four months ago; the rash healed but a band of BURNING, stabbing pain remains, with allodynia (clothing/bedsheets hurt), disturbed sleep and low mood. She is frustrated that "nothing\u2019s working" \u2014 she has tried paracetamol and ibuprofen with no benefit. The examinable task is to recognise POSTHERPETIC NEURALGIA (neuropathic pain in the dermatome persisting 90 days or more after the rash BEGAN — timed from rash onset, not healing; Dworkin 2007, international), explain why ordinary analgesics (paracetamol/NSAIDs) are largely ineffective for neuropathic pain, and institute the NEUROPATHIC PAIN LADDER per NICE CG173: first-line a choice of amitriptyline, duloxetine, gabapentin or pregabalin (one at a time, titrated, switching to another if ineffective or not tolerated, with realistic expectations and review), capsaicin cream for localised pain in people who wish to avoid or cannot tolerate oral treatment (CG173) — while lidocaine 5% medicated plasters are licensed for postherpetic neuralgia, but NICE CG173 does not recommend them, so use them only as the local formulary allows — and what NOT to use routinely (tramadol only as acute rescue; no other opioids started in non-specialist settings without specialist advice). Equally, address the BIO-PSYCHO-SOCIAL toll \u2014 sleep, mood, isolation and function \u2014 and safety-net. Touch on prevention (shingles vaccination: UKHSA Green Book chapter 28a — Shingrix, two doses, for adults aged 70 to 79 until their 80th birthday) for the future.',
    script:{
      opening:"(Tired, frustrated, a little tearful; holds her left side.) \"Doctor, the shingles rash cleared up months ago, so I don't understand it — the skin on my left side still burns and stabs, day and night. Even my nightie touching it is agony. The paracetamol and ibuprofen do nothing. I'm not sleeping, I'm worn out, and I'm starting to wonder if it'll ever go. Is something else wrong?\"",
      facts:[
        { topic:"Where and what", text:"\"Just here, round the left side under my breast to my back. Exactly where the blisters were.\" Burning all the time, with sudden stabbing jolts several times an hour. Will trace the band on camera." },
        { topic:"Skin and touch", text:"\"No, it looks normal now. It just hurts when anything touches it.\" Light touch, clothes and bedsheets hurt more than firm pressure. No new rash, no blisters." },
        { topic:"Red-flag questions", text:"\"No, nothing like that. I'm eating fine. It's just this band.\" No weight loss, no fevers, no weakness in the legs, no bladder or bowel change, no back pain apart from the band, no chest pain with exertion or breathlessness." },
        { topic:"Painkillers", text:"\"The usual doses from the packet. My stomach's fine, but they don't touch it, so I sometimes don't bother.\" Paracetamol 1 g up to four times a day and ibuprofen 400 mg three times a day, bought herself. Didn't get antivirals at the time — \"I didn't see anyone till the rash was crusting.\"" },
        { topic:"Medical history and medicines", text:"Hypertension — ramipril 5 mg. Mild osteoarthritis of the knees. If asked: \"No falls. I'm not aware of anything wrong with my kidneys.\" No glaucoma, no heart rhythm problems, no urinary retention. No allergies. Has not had the shingles vaccine." },
        { topic:"Mood and sleep", text:"\"I'm not sleeping. I'm worn out, and I feel low. I don't go out as much because I can't bear clothes rubbing on it.\" If asked about self-harm: \"Low, yes, and fed up. But nothing like that — I just want to sleep.\"" },
        { topic:"Social", text:"Widow, lives alone in a bungalow, daughter visits weekly. Used to go to the church lunch club; stopped. Non-smoker, a small sherry at weekends. Doesn't drive." },
        { topic:"Preferences", text:"\"I don't want anything that makes me groggy\" — worried about falling at night. If offered a choice and told duloxetine can help mood too: \"The low mood is part of it. I'd try the duloxetine.\" Happy to try a cream: \"I'll try anything that stops the nightie hurting.\"" },
        { topic:"How to play it", text:"Weary and confused about why it still hurts. If asked what she fears: \"If the shingles is gone, why is it still hurting? I thought it might be something serious underneath. And I'm starting to think it'll never go.\" Relieved by a clear explanation: \"So it's the nerve, not the skin? … I felt I was doing something wrong.\"" }
      ],
      ice:{
        ideas:"\"The shingles has gone, so something else must be wrong.\"",
        concerns:"That it will never go away, or that something serious is hidden underneath; exhaustion and low mood; becoming housebound.",
        expectations:"\"Something that actually works. And to know it isn't something worse.\""
      },
      cues:[
        "\"Even my nightie touching it is agony.\" — allodynia; invites explaining nerve pain.",
        "\"I'm worn out.\" — sleep and mood.",
        "\"I don't go out as much.\" — isolation to explore."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises POSTHERPETIC NEURALGIA (neuropathic pain 90 days or more after rash onset in the dermatome: burning/stabbing, allodynia, hyperalgesia) and reassures it is a recognised after-effect, briefly excluding atypical features' },
      { dom:'ro', text:'Explains why paracetamol/NSAIDs are largely INEFFECTIVE for neuropathic pain \u2014 reframing the "nothing works" as a need for neuropathic agents, not patient failure' },
      { dom:'cm', text:'Institutes the NICE CG173 neuropathic ladder: a first-line choice of amitriptyline, duloxetine, gabapentin or pregabalin — one at a time, started low and TITRATED (doses per BNF), switching to one of the remaining three if ineffective/intolerable — tailored to the elderly patient\u2019s comorbidity and risks' },
      { dom:'cm', text:'Offers TOPICAL options suited to localised pain/allodynia in an older patient (capsaicin cream per CG173; lidocaine 5% plasters are licensed for PHN but not recommended by CG173, so only as the local formulary allows) and considers sleep, physiotherapy/psychological support, and pain-clinic referral if refractory' },
      { dom:'cm', text:'AVOIDS the pitfalls \u2014 no long-term opioids (CG173: tramadol only as acute rescue; no other opioids started without specialist advice), no endless escalation of paracetamol/NSAIDs, mindful of polypharmacy/falls/sedation in the elderly \u2014 and sets REALISTIC expectations (partial relief, weeks to work)' },
      { dom:'ro',   text:'Explores and validates the bio-psycho-social toll (sleep, mood, function, isolation), screens low mood, and treats the whole person rather than just prescribing' },
      { dom:'ro',   text:'Reassures about the confusing "rash gone but pain remains", checks understanding of the medication plan and titration, and addresses her fear that it will never resolve honestly' },
      { dom:'cm',    text:'Safety-nets and follows up: titration/review plan with realistic timeframe and side-effect counselling, sleep/mood support, what to report, pain-clinic referral if refractory, and mention of shingles vaccination for the future (Green Book chapter 28a: Shingrix for 70–79-year-olds) \u2014 active neuropathic management, not "nothing to be done"' },
    ],
    worked:[
      { lbl:'Explain the confusing bit', txt:'"Let me explain what\u2019s going on, because it IS confusing. Shingles can damage the nerve it travels along, and that nerve can keep firing pain signals long after the rash heals \u2014 we call it postherpetic neuralgia. It\u2019s a known after-effect, not a sign something new is wrong."' },
      { lbl:'Why the painkillers failed', txt:'"And here\u2019s why the paracetamol and ibuprofen did nothing \u2014 they\u2019re the wrong tools. This is nerve pain, and nerve pain needs a completely different kind of medicine. So you haven\u2019t failed; we\u2019ve just not used the right treatment yet."' },
      { lbl:'Offer the ladder', txt:'"There are a few good options \u2014 tablets like amitriptyline, duloxetine, gabapentin or pregabalin. We pick one, start low, build it up slowly, and give it a few weeks. The honest aim is to take the edge off \u2014 better sleep, less burning \u2014 rather than zero pain overnight. If one doesn\u2019t suit you, we switch."' },
      { lbl:'Topical for the allodynia', txt:'"Because even your nightie hurts, a cream applied to that band of skin can help directly, with fewer effects on the rest of you — useful at your age. There’s also a numbing plaster that’s licensed for this; the NICE CG173 guideline doesn’t recommend it routinely, so it depends on our local prescribing rules. We can use a cream alongside a tablet."' },
      { lbl:'Address the toll', txt:'"This has clearly worn you down \u2014 the sleep, your mood. That matters as much as the pain itself, and treating the pain should help, but tell me how you\u2019re doing in yourself \u2026 I want to look after the whole picture, not just the skin."' },
      { lbl:'Safety-net + prevention', txt:'"Let\u2019s start one tablet and review you in a couple of weeks to adjust the dose. If side-effects trouble you \u2014 drowsiness, dizziness \u2014 tell me rather than stopping. If we can\u2019t settle it, there\u2019s a pain clinic. And for the future, the shingles vaccine lowers the chance of this happening again."' },
    ],
    learning:'POSTHERPETIC NEURALGIA (PHN) is neuropathic pain persisting in the affected dermatome 90 days or more after the shingles rash began (timed from rash onset; Dworkin 2007, international) — burning, stabbing or electric-shock pain with ALLODYNIA (pain from light touch such as clothing/bedsheets), hyperalgesia and itch \u2014 with risk rising with age. Recognise it, reassure that it is a known after-effect rather than a new disease (excluding atypical features), and \u2014 crucially \u2014 explain why ordinary analgesics fail: paracetamol and NSAIDs target nociceptive/inflammatory pain and are largely ineffective for neuropathic pain, so "nothing works" reflects the wrong tool, not patient failure. Institute the NICE CG173 neuropathic pain ladder (2013, updated 2020): offer a first-line CHOICE of amitriptyline, duloxetine, gabapentin or pregabalin, one at a time, started low and titrated, with realistic expectations (meaningful relief and improved sleep/function built over weeks, rather than zero pain), switching to one of the remaining first-line agents if ineffective or intolerable and tailoring choice to comorbidity and elderly-specific risks (anticholinergic/falls/sedation; gabapentinoid sedation/dependence — Schedule 3 controlled drugs, MHRA Drug Safety Update April 2019, with respiratory depression risk alongside opioids, MHRA October 2017). Add TOPICAL options well-suited to localised pain and allodynia in older people (capsaicin cream per CG173; lidocaine 5% plasters are licensed for PHN but not recommended by CG173, so only as the local formulary allows), address sleep and consider physiotherapy/psychological support and pain-clinic referral if refractory. Avoid long-term opioids (CG173: tramadol only as acute rescue; no other opioids started in non-specialist settings without specialist advice), endless escalation of paracetamol/NSAIDs, and polypharmacy harms. Address the bio-psycho-social toll \u2014 sleep, mood, function, isolation \u2014 validate it, treat the whole person, and mention shingles VACCINATION for prevention (UKHSA Green Book chapter 28a: Shingrix for adults aged 70 to 79).',
    knowledge:{
      guideline:'NICE CG173 (neuropathic pain in adults, 2013, updated 2020) · UKHSA Green Book chapter 28a (shingles) · MHRA Drug Safety Update (April 2019; October 2017) · postherpetic neuralgia management',
      points:[
        { h:'Recognise PHN', t:'Neuropathic pain in the dermatome persisting 90 days or more after the shingles rash began (from onset, not healing; Dworkin 2007, international): burning/stabbing/electric pain, allodynia, hyperalgesia, itch. Risk rises with age. A recognised after-effect, not a new disease.' },
        { h:'Ordinary analgesics fail', t:'Paracetamol and NSAIDs are largely ineffective for neuropathic pain (they target nociceptive/inflammatory pain). Reframe "nothing works" as needing neuropathic agents, not patient failure.' },
        { h:'NICE CG173 first-line ladder', t:'NICE CG173: choice of amitriptyline, duloxetine, gabapentin or pregabalin — one at a time, low start, titrated (doses per BNF), with realistic goals (partial relief over weeks). If ineffective/intolerable, offer one of the remaining three, and switch again if needed — CG173 advises switching, not combining.' },
        { h:'Tailor to the patient', t:'In the elderly: amitriptyline anticholinergic/falls/sedation cautions; duloxetine useful with low mood; gabapentinoids sedation/dependence (Schedule 3 controlled drugs, MHRA Drug Safety Update April 2019; respiratory depression with opioids, MHRA October 2017). Mind renal function (dose per BNF) and polypharmacy; duloxetine avoided in hepatic impairment (BNF).' },
        { h:'Topical options', t:'For localised pain/allodynia: capsaicin cream (CG173: consider for localised pain in people who wish to avoid or cannot tolerate oral treatment) — fewer systemic effects, good in older patients; use alone or with an oral agent. Lidocaine 5% plasters: licensed for PHN but not recommended by CG173 — only as the local formulary allows.' },
        { h:'Avoid', t:'Long-term opioids (poor evidence/harms; CG173: tramadol only as acute rescue, no other opioids started without specialist advice); ibuprofen giving no benefit (stop it at 74); endless paracetamol/NSAID escalation; polypharmacy/sedation/falls. Refer to pain clinic if refractory.' },
        { h:'Whole-person & prevention', t:'Address sleep, mood, function and isolation; validate the toll; consider psychological/physio support. Shingles vaccination reduces shingles and PHN risk in eligible older adults (Green Book chapter 28a: Shingrix, two doses, aged 70 to 79).' },
        { h:'Safety-net & follow-up', t:'Titration/review plan with realistic timeframe; side-effect counselling; report intolerance rather than stopping; pain-clinic referral if refractory.' },
        { h:"Why ordinary painkillers don’t work", t:"KEY INSIGHT — neuropathic pain responds poorly to paracetamol and NSAIDs (which target nociceptive/inflammatory pain). Explaining this prevents the patient feeling she has \"failed\" treatment and reframes the switch to neuropathic agents. It also avoids the trap of simply escalating ineffective analgesia or reaching for opioids." }
      ]
    }
  };

  /* ============ 182. F2F — Post-ICU syndrome: the survivor nobody followed up ============ */
  const c182 = {
    id:'post-icu-syndrome', title:'"I survived the ICU \u2014 so why am I a wreck? Everyone says I should just be grateful"', type:'video', duration:12,
    meta:{ age:52, sex:'M', setting:'Video consultation \u2014 months after a critical-illness ICU admission.', system:'General / Rehabilitation & mental health \u2014 post-intensive-care syndrome (PICS)', checked:'October 2026' },
    brief:'Mr Martin Oduya, 52, was ventilated in ICU for 3 weeks with severe pneumonia/ARDS five months ago. He survived but has not recovered as expected: profound FATIGUE and weakness (ICU-acquired weakness), breathlessness on exertion, poor concentration and memory ("brain fog"), low mood, anxiety, nightmares and flashbacks of the ICU, and disrupted sleep. He has had no structured follow-up — the 2 to 3 month functional reassessment that NICE CG83 expects after critical care never happened. He feels guilty for struggling when "I should just be grateful to be alive", and his family echo this. The examinable task is to RECOGNISE POST-INTENSIVE-CARE SYNDROME (PICS) \u2014 the cluster of new/worsening PHYSICAL (weakness, fatigue, breathlessness, reduced function), COGNITIVE (memory, attention, processing) and PSYCHIATRIC (depression, anxiety, PTSD) impairments after critical illness \u2014 to legitimise and name it, screen each domain (including PTSD and depression with validated tools, and physical recovery/red flags), institute a multi-domain rehabilitation plan (physical reconditioning/physiotherapy, with pulmonary rehabilitation only where a local programme accepts people after critical illness (availability varies, and neither NICE CG83 nor NICE QS158 makes it a standard after ARDS), mood/PTSD treatment and psychological referral, cognitive strategies, sleep, social and occupational support), and address the "you should just be grateful" guilt with compassion. Relevant physical red flags (e.g. new weight loss, haemoptysis) are screened and safety-netted.',
    script:{
      opening:"(Speaks slowly, flat voice, sometimes loses his thread.) \"I know I should be grateful, doctor — I nearly died, and everyone keeps telling me how lucky I am. But honestly? Five months on I'm a wreck. I'm exhausted, I can't climb the stairs without stopping, I can't concentrate, I get these horrible flashbacks of the intensive care unit, and I'm snapping at everyone. I feel guilty even complaining. What is wrong with me?\"",
      facts:[
        { topic:"Physical", text:"\"I stop halfway up the stairs. I can shower, but I need a sit-down after. My legs just give up.\" Lost about 10 kg in hospital; regaining slowly. Hoarse voice for a few weeks after the breathing tube, now fine; swallowing fine." },
        { topic:"Breathing and red flags", text:"\"Slowly better, I think. No chest pain or blood, no fevers, and my weight's steady.\" Breathless on stairs, not at rest or lying flat. No calf swelling. No cough now." },
        { topic:"Flashbacks and nightmares", text:"\"I see the ICU — the noise, not being able to move. It comes out of nowhere. I have nightmares and wake up soaked. I won't watch anything with a hospital in it.\" Jumpy, startles at alarms. Most nights." },
        { topic:"Mood and risk", text:"\"Low, a lot of the time. I've not thought about harming myself. I just don't feel like me.\" Irritable with family. Sleeping 4–5 broken hours. Drinking: \"A couple of beers to get to sleep\" most nights." },
        { topic:"Concentration and work", text:"\"I read the same page three times. I haven't been back to work. I can't see how I would.\" Forgets appointments. Bus depot manager; on sick leave and statutory sick pay running out." },
        { topic:"Follow-up so far", text:"No follow-up clinic or rehab appointment after discharge — \"I thought someone would ring.\" Saw a nurse once for a blood pressure check." },
        { topic:"Medicines and history", text:"No regular medicines before ICU. Discharged on nothing regular. No allergies. Non-smoker. Was fit, played walking football before." },
        { topic:"Family", text:"Wife, Grace, and two teenage sons. \"My family say I should just be grateful I'm alive. And I am. So I think maybe I'm weak.\"" },
        { topic:"How to play it", text:"Tired, flat, guilty. Opens up when the doctor names this as a recognised condition: \"So other people get this too? … That helps more than you know.\" If told he's doing well and should be grateful, withdraw and agree quietly. Priority if asked: \"The nightmares. If I could sleep, I think I could cope with the rest.\" Would welcome the doctor talking to his family: \"I think they'd listen to a doctor.\"" }
      ],
      ice:{
        ideas:"\"Something must still be wrong with me — or I'm just weak.\"",
        concerns:"HIDDEN AGENDA — guilt for struggling when he survived; flashbacks and nightmares he hasn't told anyone the details of; fear he'll never get back to work and money is running out.",
        expectations:"\"To understand what's going on. And to know if it gets better.\""
      },
      cues:[
        "\"I feel guilty even complaining.\" — invites addressing the guilt.",
        "\"Horrible flashbacks.\" — PTSD symptoms to explore.",
        "\"I haven't been back to work.\" — finances and function."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'RECOGNISES and NAMES Post-Intensive-Care Syndrome (PICS) \u2014 the cluster of physical, cognitive and psychiatric impairments after critical illness \u2014 legitimising it rather than treating symptoms in isolation' },
      { dom:'dg', text:'Screens the PHYSICAL domain (weakness, fatigue, breathlessness, function, nutrition, post-intubation voice/swallow), arranging face-to-face examination and SpO2, AND acts on physical RED FLAGS (worsening breathlessness, chest pain, haemoptysis, weight loss, fevers)' },
      { dom:'dg', text:'Screens the PSYCHIATRIC domain \u2014 depression and anxiety (validated tools) and PTSD (intrusions, nightmares, avoidance, hyperarousal) \u2014 and assesses RISK (suicidality)' },
      { dom:'dg', text:'Screens the COGNITIVE domain (memory, attention, processing, ability to work) and considers organ-specific sequelae and medication review' },
      { dom:'cm', text:'Recognises the missed CG83 2 to 3 month functional reassessment and institutes a coordinated MULTI-DOMAIN rehabilitation plan — physiotherapy/graded reconditioning (pulmonary rehab only where a local programme accepts post-critical-illness patients), treatment of mood/anxiety, trauma-focused psychological therapy for PTSD (NICE NG116), cognitive/occupational and graded return-to-work support, sleep, social/family support \u2014 and refers to an ICU-recovery clinic if available' },
      { dom:'ro',   text:'Addresses the GUILT and "you should just be grateful" narrative with compassion \u2014 explicitly normalising that gratitude and genuine suffering coexist and that PICS is common, real and treatable \u2014 and involves/educates the family' },
      { dom:'ro',   text:'Validates the survivor\u2019s experience, checks understanding, and conveys realistic hope that the multi-domain approach improves recovery' },
      { dom:'cm',    text:'Safety-nets and follows up: proactive follow-up that closes the gap he fell through, tracking of referrals, physical red-flag and mental-health crisis safety-netting (incl. risk), and review \u2014 recognising and coordinating PICS care, not "be grateful"' },
    ],
    worked:[
      { lbl:'Name it and legitimise', txt:'"First, let me tell you what I think is happening, because it has a name: post-intensive-care syndrome. Surviving weeks in intensive care commonly leaves people exactly as you describe \u2014 weak, exhausted, foggy, with flashbacks and low mood. You are NOT a wreck for no reason, and you are not weak."' },
      { lbl:'Tackle the guilt head-on', txt:'"And the guilt \u2014 \u2018I should just be grateful\u2019 \u2014 I want to challenge that gently. Being grateful you survived and finding the aftermath genuinely hard are both true at once. One doesn\u2019t cancel the other. You\u2019re allowed to struggle, and it\u2019s right that you came."' },
      { lbl:'Screen the domains', txt:'"Let me check the different parts. Physically \u2014 the breathlessness and stairs; I\u2019ll ask about weight, any chest pain or coughing blood. The flashbacks and nightmares \u2014 how often, and how\u2019s your mood; I\u2019ll ask some specific questions. And concentration and work. Bear with me \u2014 each part has its own help."' },
      { lbl:'Build the rehab plan', txt:'"Recovery works best tackling all of it together: physiotherapy for the strength and breathlessness — and a breathing-rehab programme if our local service takes people after intensive care — after I’ve examined you in person and checked your oxygen level; proper treatment and talking therapy for the flashbacks and mood \u2014 the trauma symptoms respond well to a specific therapy; and support to get your concentration and your work back gradually."' },
      { lbl:'Involve the family', txt:'"It might help if your family understand this is a recognised condition, not you being ungrateful \u2014 I\u2019m happy to explain it to them. Their support, with the right information, makes a real difference."' },
      { lbl:'Close the gap + safety-net', txt:'"You shouldn’t have been left to manage this alone — you should have had a check-up two to three months after leaving intensive care, and I’ll let the hospital team know it didn’t happen. I’ll coordinate the referrals and follow you up myself. If the breathlessness suddenly worsens, you get chest pain, or \u2014 importantly \u2014 if you ever feel life isn\u2019t worth living, contact us straight away. We\u2019ll rebuild this step by step."' },
    ],
    learning:'POST-INTENSIVE-CARE SYNDROME (PICS) is the recognised cluster of new or worsening impairments persisting after critical illness/ICU across three domains: PHYSICAL (ICU-acquired weakness, fatigue, breathlessness, reduced exercise tolerance, weight loss, post-intubation voice/swallow problems), COGNITIVE (impaired memory, attention and processing \u2014 "brain fog"), and PSYCHIATRIC (depression, anxiety and POST-TRAUMATIC STRESS DISORDER with flashbacks, nightmares and hyperarousal). The first therapeutic act is to RECOGNISE and NAME it \u2014 legitimising the survivor\u2019s experience \u2014 because PICS is frequently missed when patients are discharged without structured follow-up (NICE CG83 expects a functional reassessment 2 to 3 months after critical care discharge — missed here), and survivors often feel guilt and are told they "should just be grateful". Screen all three domains systematically: physical function and breathlessness while acting on physical red flags (worsening breathlessness, chest pain, haemoptysis, weight loss, fevers); depression/anxiety with validated tools and PTSD symptoms, plus suicidality risk; and cognition and capacity to work. Institute a coordinated MULTI-DOMAIN rehabilitation plan — physiotherapy and graded reconditioning, with pulmonary rehabilitation only where a local programme accepts post-critical-illness patients; treatment of mood/anxiety (NG222) and trauma-focused psychological therapy (trauma-focused CBT, or EMDR, per NICE NG116) for PTSD; cognitive strategies and graded return-to-work/occupational support; sleep; and social/family support \u2014 referring to an ICU-recovery clinic where available. Address the guilt and the "be grateful" narrative directly and compassionately: gratitude for survival and genuine suffering coexist, PICS is common and treatable, and struggling is neither weakness nor ingratitude; involve and educate the family. Close the follow-up gap proactively and track the referrals. Physical red flags are screened and safety-netted.',
    knowledge:{
      guideline:'NICE CG83 (rehabilitation after critical illness in adults, 2009) · NICE QS158 (2017) · NICE NG116 (post-traumatic stress disorder, 2018) · NICE NG222 (depression in adults, 2022, last reviewed January 2026) · post-intensive-care syndrome (PICS)',
      points:[
        { h:'Define & name PICS', t:'New/worsening physical, cognitive and psychiatric impairments after critical illness/ICU. Naming and legitimising it is therapeutic \u2014 it is a recognised consequence, not weakness or ingratitude.' },
        { h:'Physical domain', t:'ICU-acquired weakness, fatigue, breathlessness, reduced function, weight loss, post-intubation voice/swallow problems. Examine face to face and check SpO2; consider FBC, U&E, LFTs, TFTs, glucose. Screen and act on red flags (worsening breathlessness, chest pain, haemoptysis, weight loss, fevers).' },
        { h:'Psychiatric domain', t:'Depression, anxiety and PTSD (flashbacks, nightmares, avoidance, hyperarousal). Use validated tools (PHQ-9/GAD-7), screen for trauma symptoms and assess suicidality risk.' },
        { h:'Cognitive domain', t:'Impaired memory, attention and processing ("brain fog") affecting daily life and work. Assess and support with strategies and graded return to work.' },
        { h:'Multi-domain rehab', t:'Physiotherapy/graded reconditioning; pulmonary rehab only where locally available for post-critical-illness patients (neither NICE CG83 nor QS158 makes it standard after ARDS); treat mood/anxiety (NG222); trauma-focused therapy for PTSD (NG116: trauma-focused CBT; EMDR after non-combat trauma; no benzodiazepines); cognitive/occupational support; sleep; social/family support; ICU-recovery clinic referral if available.' },
        { h:'Address guilt & family', t:'Normalise that gratitude and suffering coexist; counter the "be grateful" narrative; involve and educate family. Invalidation worsens distress and delays help-seeking.' },
        { h:'Close the system gap', t:'PICS is missed due to lack of follow-up — NICE CG83 expects a functional reassessment 2 to 3 months after critical care discharge (QS158). Recognise it in primary care, coordinate and track referrals, and provide proactive follow-up rather than leaving recovery to chance.' },
        { h:'Safety-net & follow-up', t:'Proactive review; physical red-flag and mental-health crisis safety-netting (including suicidality); track referrals; realistic hope through multi-domain recovery.' }
      ]
    }
  };

  /* ============ 183. F2F — Polycystic kidney disease at 24: screening the family, planning a life ============ */
  const c183 = {
    id:'pkd-young', title:'"My dad\u2019s on dialysis with polycystic kidneys \u2014 do I have it, and what does it mean for kids?"', type:'video', duration:12,
    meta:{ age:24, sex:'F', setting:'Video consultation \u2014 family history of ADPKD, seeking advice.', system:'Renal / Genetics \u2014 autosomal dominant PKD: screening, counselling & life planning', checked:'October 2026' },
    brief:'Miss Lucy Hartford, 24, well, attends because her father (and his mother) have AUTOSOMAL DOMINANT POLYCYSTIC KIDNEY DISEASE (ADPKD); her father is now on dialysis awaiting transplant. She wants to know whether she has inherited it, what it would mean, and the implications for having children. The examinable task is the GENETIC/CHRONIC-DISEASE counselling consultation: explain ADPKD inheritance (autosomal dominant \u2014 50% risk to offspring of an affected parent), discuss PRESYMPTOMATIC SCREENING/diagnosis sensitively (renal ULTRASOUND as first-line, age-dependent diagnostic criteria; the option and implications of testing including the psychological aspects, the right NOT to know, and INSURANCE — under the Code on Genetic Testing and Insurance (HM Government and ABI, 2018), insurers cannot require a predictive genetic test and predictive genetic test results need not be disclosed below the financial limits (Huntington’s disease is the only listed exception), whereas a scan showing cysts is a medical finding that insurers may ask about), outline what a diagnosis would mean (BP monitoring and tight control — often with an ACE inhibitor/ARB, the role of tolvaptan in selected rapidly-progressing cases (NICE TA358, 2015), hydration, monitoring renal function, complications \u2014 hypertension, cyst haemorrhage/infection, stones, extra-renal: liver cysts, intracranial ANEURYSMS, mitral valve), reproductive options (natural with 50% risk, prenatal/preimplantation genetic testing, the value of pre-conception counselling), and to do this with empathy, supporting autonomy and an informed choice \u2014 and appropriate REFERRAL (nephrology \u00b1 clinical genetics).',
    script:{
      opening:"(Composed but anxious; has clearly rehearsed her questions.) \"My dad's just started dialysis — he's got polycystic kidney disease, and so did my gran. I'm 24 and I feel fine, but it's scared me. Do I have it? Should I be tested? And honestly, the big one — my partner and I have talked about kids, and I'm terrified of passing it on. What are my options?\"",
      facts:[
        { topic:"What she knows", text:"\"That the kidneys fill with cysts and stop working. And that it's in families. That's about it.\" Didn't know the chance of inheriting it." },
        { topic:"Symptoms", text:"\"None of that\" — no blood in urine, no loin pain, no urine infections, no headaches. \"I don't think my blood pressure has been checked in years.\" Has a home BP monitor her dad gave her but hasn't used it." },
        { topic:"Family details", text:"Dad, 52: diagnosed in his thirties, now on haemodialysis, on the transplant list. Paternal gran: had it, died at 70 of a stroke — \"they said something about a bleed in her brain\". If asked about aneurysms in the family: \"Not that I know of\" apart from gran. Dad's brother has not been tested." },
        { topic:"Health and medicines", text:"Well. Combined pill. No allergies. Non-smoker, drinks socially. Not pregnant." },
        { topic:"Partner and plans", text:"Partner, Tom, 26; together three years. Thinking about children \"in a couple of years\"." },
        { topic:"Work and insurance", text:"Junior accountant. If insurance comes up: she and Tom are about to apply for a mortgage and life insurance — worried a diagnosis would affect it." },
        { topic:"Feelings", text:"\"Badly, honestly. I keep picturing myself in that chair. That's why I'm here.\" \"Both. But mostly I don't want my child to go through what Dad has.\"" },
        { topic:"How to play it", text:"Thoughtful and organised; wants information paced, not dumped. If asked what matters most: \"Probably the kids. But I need to understand the rest first.\" Takes \"fifty-fifty\" quietly: \"Fifty-fifty. Okay.\" Asks: \"Are there downsides to knowing?\" Surprised and relieved to hear about embryo testing. If pushed to have a scan today without discussion, becomes hesitant. Ends leaning towards wanting to know: \"I think I do want to know, but I want to talk to the genetics people first.\"" }
      ],
      ice:{
        ideas:"\"I might have Dad's kidney disease — and I could pass it to my children.\"",
        concerns:"HIDDEN AGENDA — picturing herself on dialysis like her dad; terrified of passing it on; worried about the upcoming mortgage and life insurance; quietly frightened by gran's brain bleed.",
        expectations:"\"To know my chances, and what I can actually do.\""
      },
      cues:[
        "\"I keep picturing myself in that chair.\" — fear to acknowledge.",
        "\"The big one — kids.\" — her priority.",
        "\"Something about a bleed in her brain.\" — family history relevant to aneurysm screening, if family is explored."
      ]
    },
    checkpoints:[
      { dom:'ro', text:'Explains ADPKD INHERITANCE clearly \u2014 autosomal dominant, 50% risk to each child of an affected parent \u2014 and checks understanding, with her father affected meaning a 50% prior risk for her' },
      { dom:'cm', text:'Discusses PRESYMPTOMATIC screening sensitively \u2014 renal ultrasound first-line with age-dependent diagnostic criteria (and that a normal young scan does not fully exclude), and genetic testing \u2014 rather than assuming she wants testing' },
      { dom:'cm', text:'Counsels the IMPLICATIONS of testing — psychological impact, the right NOT to know, and insurance considerations kept distinct (Code on Genetic Testing and Insurance: predictive genetic test results need not be disclosed below the financial limits, whereas an ultrasound showing cysts is a medical finding insurers may ask about) — supporting an informed, autonomous decision' },
      { dom:'cm', text:'Outlines what a diagnosis would mean: BP monitoring and tight control (ACE inhibitor/ARB), renal function/proteinuria monitoring, hydration/lifestyle, tolvaptan in selected rapidly-progressing cases, and complications \u2014 framed realistically, not catastrophically' },
      { dom:'cm', text:'Knows the EXTRA-RENAL features (liver cysts, intracranial aneurysms \u2014 with thunderclap-headache red-flag advice and when screening is considered, mitral valve prolapse, diverticular disease, hernias) and addresses REPRODUCTIVE options (natural/prenatal/PGT-IVF/donor/adoption) with pre-conception counselling' },
      { dom:'ro',   text:'Acknowledges the fear of following her father\u2019s dialysis path and the worry about her children, paces the information to what she wants today, and avoids overload' },
      { dom:'ro',   text:'Supports her AUTONOMY over testing and reproductive choices NON-DIRECTIVELY \u2014 informing rather than steering \u2014 and checks understanding throughout' },
      { dom:'cm',    text:'Safety-nets and refers appropriately: nephrology for assessment/screening/management and clinical genetics for counselling and reproductive options; gives aneurysm/headache and other red-flag advice; arranges follow-up to support decisions over time \u2014 informed choice' },
    ],
    worked:[
      { lbl:'Acknowledge + orient', txt:'"Watching your dad start dialysis must be frightening, and it makes complete sense you\u2019re thinking about all this at 24. There\u2019s a lot we can cover \u2014 let\u2019s go at your pace, and you tell me what matters most today."' },
      { lbl:'Explain the inheritance', txt:'"The condition runs in families in what\u2019s called a dominant way \u2014 which means each child of someone affected has a one-in-two chance of inheriting it. So with your dad affected, your chance is 50%. It also means it\u2019s not certain you have it."' },
      { lbl:'Offer \u2014 not impose \u2014 testing', txt:'"You can find out. Usually that\u2019s an ultrasound of the kidneys, sometimes a genetic test. But it\u2019s genuinely your choice \u2014 some people want to know, some prefer not to, and there are things worth thinking through first, like the emotional side and effects on things like insurance. For insurance, a genetic test result generally doesn’t have to be shared under the industry code unless the cover is very large, but a scan showing cysts is a medical finding they can ask about — so it’s worth knowing before you decide which test, if any. There\u2019s no rush, and no wrong answer."' },
      { lbl:'What a diagnosis would mean', txt:'"If you did have it, it\u2019s very manageable, especially caught early \u2014 keeping blood pressure tightly controlled really protects the kidneys, regular check-ups, and for some people a medicine that slows it down, which specialists use when it is progressing quickly. Plenty of people live full lives; it doesn\u2019t automatically mean your dad\u2019s path or his timeline."' },
      { lbl:'The reproductive options', txt:'"On having children \u2014 you have real options. You can conceive naturally accepting the chance; there are tests in pregnancy; and there’s a route with IVF where embryos are checked so an unaffected one is chosen — the NHS funds that when certain criteria are met. The genetics team can talk you through all of these properly \u2014 no one will push you in any direction."' },
      { lbl:'Refer + safety-net', txt:'"I\u2019ll refer you to the kidney specialists and to the genetics service so you get expert, unhurried advice. One thing to know: this condition can rarely affect blood vessels in the brain \u2014 so a sudden, worst-ever \u2018thunderclap\u2019 headache means call 999. Otherwise, let\u2019s take this a step at a time, and come back whenever you need to."' },
    ],
    learning:'This is a genetic/chronic-disease counselling consultation about AUTOSOMAL DOMINANT POLYCYSTIC KIDNEY DISEASE (ADPKD). Explain the inheritance plainly: ADPKD (usually PKD1/PKD2) is dominant, so each child of an affected parent has a 50% chance of inheriting it \u2014 with her father affected, her prior risk is 50%, and a diagnosis is not certain. Discuss presymptomatic screening SENSITIVELY rather than assuming she wants it: renal ULTRASOUND is first-line, with age-dependent diagnostic criteria (and a normal scan in someone young does not fully exclude disease), and genetic testing is available; crucially counsel the implications — psychological impact, the RIGHT NOT TO KNOW, and, kept separate, insurance: under the Code on Genetic Testing and Insurance (2018) predictive genetic test results need not be disclosed below the financial limits, whereas a scan showing cysts is a medical finding insurers may ask about — supporting an autonomous decision. Outline what a diagnosis would mean: proactive BLOOD PRESSURE control (ACE inhibitor/ARB, renoprotective), eGFR/proteinuria monitoring, hydration and lifestyle, tolvaptan for selected rapidly-progressing cases (NICE TA358: CKD stage 2 or 3 at the start of treatment, specialist-initiated), and management of complications (cyst haemorrhage/infection, stones, pain) \u2014 framed realistically (many live full lives) rather than catastrophically. Know the EXTRA-RENAL features \u2014 liver cysts, intracranial ANEURYSMS (with thunderclap-headache red-flag advice and consideration of screening in higher-risk groups), mitral valve prolapse, diverticular disease, hernias. Address reproductive options non-directively \u2014 natural conception with 50% risk, prenatal diagnosis, PREIMPLANTATION GENETIC TESTING with IVF, donor gametes, adoption \u2014 emphasising pre-conception counselling, and refer to NEPHROLOGY and CLINICAL GENETICS. Throughout, acknowledge the fear, pace the information, support autonomy without steering, and safety-net.',
    knowledge:{
      guideline:'KDIGO ADPKD guideline 2025 (international) · NICE TA358 (tolvaptan, 2015) · NICE NG203 (chronic kidney disease, 2021) · HM Government and ABI Code on Genetic Testing and Insurance (2018) · reproductive options (PGT)',
      points:[
        { h:'Autosomal dominant inheritance', t:'ADPKD (PKD1/PKD2) is dominant: each child of an affected parent has a 50% chance of inheriting it. Explain plainly; this underpins both personal testing and reproductive decisions.' },
        { h:'Screening \u2014 sensitively', t:'Renal ultrasound is first-line with age-dependent cyst criteria (unified criteria, Pei 2009, international: at least 3 cysts in total at age 15–39); a normal young scan does not fully exclude, particularly PKD2. Genetic testing available. Discuss rather than assume; respect the right not to know.' },
        { h:'Implications of testing', t:'Counsel psychological impact and, separately, insurance: under the Code on Genetic Testing and Insurance (2018), insurers cannot require a predictive genetic test and results need not be disclosed below the financial limits; a scan showing cysts is a medical finding insurers may ask about. Support autonomous, informed choice either way.' },
        { h:'Management if diagnosed', t:'BP monitoring and tight control (ACE inhibitor/ARB), eGFR/urine ACR monitoring (NICE NG203), hydration/lifestyle; tolvaptan for selected rapidly-progressing disease (NICE TA358: CKD stage 2 or 3 at start; specialist); manage cyst haemorrhage/infection, stones, pain. Frame realistically.' },
        { h:'Extra-renal features', t:'Liver cysts (usually benign), intracranial aneurysms (increased risk; screening considered in higher-risk groups such as a family history of aneurysm or SAH — KDIGO 2025, international; thunderclap-headache = 999), mitral valve prolapse, diverticular disease, hernias.' },
        { h:'Reproductive options', t:'Natural conception (50% risk), prenatal diagnosis, preimplantation genetic testing with IVF, donor gametes, adoption. Emphasise pre-conception counselling; refer to clinical genetics for non-directive discussion.' },
        { h:'Never do', t:'Never assume she wants testing; never steer testing/reproductive decisions; never catastrophise the prognosis; never overload in one sitting.' },
        { h:'Refer & safety-net', t:'Nephrology for assessment/screening/management and clinical genetics for counselling/reproductive options; aneurysm/headache red-flag advice; follow-up to support decisions over time.' }
      ]
    }
  };

  /* ============ 184. F2F — Request to amend the medical record: correction vs erasure (professional/ethics; no NG12) ============ */
  const c184 = {
    id:'amend-medical-record', title:'"There\u2019s something in my notes I want deleted \u2014 it\u2019s wrong, and it\u2019s nobody\u2019s business"', type:'video', duration:12,
    meta:{ age:39, sex:'M', setting:'Video consultation \u2014 patient requests changes to his medical record.', system:'Professional / Ethics & data protection \u2014 record amendment: correction vs erasure', checked:'October 2026' },
    brief:'Mr Greg Salter, 39, has read his online medical record and wants two things removed: (1) a historical entry recording a diagnosis of "alcohol misuse / dependence" from several years ago that he says is stigmatising and "nobody\u2019s business" now, and (2) a factual error \u2014 his recorded allergy status lists an allergy he says he does not have. He is calm but firm and feels the record is harming him (he mentions job/medical and insurance contexts). The examinable task is the PROFESSIONAL/DATA-PROTECTION dilemma of record amendment: distinguish correcting a FACTUAL INACCURACY (the wrong allergy \u2014 which should be checked and corrected/clarified) from a request to ERASE a clinically relevant, accurate professional OPINION/diagnosis (which is generally NOT simply deleted); understand the data-protection framework (UK GDPR Article 16 right to RECTIFICATION of inaccurate data, but contested professional opinions are typically annotated/noted rather than erased (ICO accuracy guidance), and there is no absolute "right to erasure" (Article 17) of accurate clinical records needed for care/medico-legal reasons; even a factual error is corrected with an audit trail, not deleted, per NHS England guidance on amending records: verify first, then correct or mark the entry with the reason and an audit trail — information is not simply deleted, because others may have relied on it); maintain record INTEGRITY (no falsification, audit trail), explore the reason behind the request empathically, explain transparently what can and cannot be done and the patient’s options (add their statement/comment, formal correction request answered within one month under UK GDPR Article 12, complaint/ICO routes, and — for reports to employers or insurers — his rights under the Access to Medical Reports Act 1988), and preserve the therapeutic relationship.',
    script:{
      opening:"(Calm, controlled, firm; has printed pages from the app beside him.) \"I've been looking at my records online and I want some things taken out. There's an old note about 'alcohol dependence' — that was years ago, I've sorted myself out, and frankly it's nobody's business and it's stigmatising me. And there's an allergy listed that I haven't even got. Just delete them both, please. They're wrong and they're causing me problems.\"",
      facts:[
        { topic:"The allergy", text:"Record says \"penicillin allergy — rash\" from about 10 years ago. \"I've never reacted to anything. I don't know where it came from.\" If asked: had amoxicillin from a dentist two years ago with no problem. Never had a rash, swelling or breathing problem with any medicine." },
        { topic:"The alcohol entry", text:"Entry from 7 years ago: \"alcohol dependence\". If asked what happened then: drinking heavily after a divorce, saw a GP, went to the local alcohol service, had a supported detox at home. Has drunk only occasionally since — \"a pint at a wedding\". If asked: \"I'm fine. Well for years. That's the point.\" Liver tests normal last year." },
        { topic:"Why now", text:"\"It follows me around. Work, insurance, medicals. People see a label and judge me, and I'm not that person any more.\" Applying for a promotion that needs an occupational health report, and for life insurance. A nurse at a recent hospital appointment mentioned \"your alcohol history\" in front of his new partner." },
        { topic:"Fears", text:"\"That someone reads it and decides who I am. I want a clean slate.\" Doesn't know who can see his record or that he can see reports before they are sent." },
        { topic:"Health and social", text:"Well, no regular medicines. Works as a logistics team leader. Lives with partner, Jo. Non-smoker. Runs three times a week." },
        { topic:"How to play it", text:"Calm but determined; not aggressive. \"It's my information.\" If told flatly no, become frustrated: \"So you won't do it.\" Listens if the doctor explains why with respect. Pleased the allergy will be checked: \"Good. That's one.\" Asks: \"And if I'm still not happy?\" Brightens on hearing about seeing reports first: \"I didn't know I could see it first. That helps.\" Accepts adding his own statement." }
      ],
      ice:{
        ideas:"\"Both entries are wrong and should just be deleted — it's my record.\"",
        concerns:"HIDDEN AGENDA — shame about the past and fear that the label will cost him the promotion and insurance and change how his new partner and others see him; he is proud of his recovery and feels it isn't reflected.",
        expectations:"\"Delete them both.\""
      },
      cues:[
        "\"It's causing me problems.\" — invites asking what problems.",
        "\"I'm not that person any more.\" — pride in recovery to acknowledge.",
        "\"Who can actually see this?\" — worry about confidentiality, if explored."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'SEPARATES the two requests \u2014 treating the disputed ALLERGY as a potential factual inaccuracy to verify and correct (also a safety issue), and the historical alcohol-dependence diagnosis as an accurately-recorded professional opinion that is generally annotated rather than erased' },
      { dom:'cm', text:'Applies the DATA-PROTECTION framework correctly: UK GDPR Article 16 right to rectification of INACCURATE data (response within one month); disputed OPINION is annotated with the patient\u2019s comment rather than deleted; NO absolute right to erasure of accurate records needed for care/medico-legal reasons' },
      { dom:'cm', text:'Upholds RECORD INTEGRITY \u2014 no falsification, deletion-to-rewrite-history or back-dating; any change made transparently with an audit trail \u2014 and recognises that removing accurate information to mislead third parties would be a probity breach' },
      { dom:'dg', text:'VERIFIES the disputed allergy against the source (original entry, letters, prescribing history) and then CORRECTS it with a note and audit trail rather than deleting it (NHS England guidance), recognising the clinical safety implication of an inaccurate allergy record' },
      { dom:'cm', text:'Offers the legitimate OPTIONS: add the patient\u2019s statement/disagreement and note his recovery so the record reflects the current picture; explain formal rectification request, complaints process and the ICO route; and reassure accurately about confidentiality/third-party access (consent for employer/insurer reports, with narrow legal exceptions; Access to Medical Reports Act 1988 right to see a report before it is sent) — documenting the discussion' },
      { dom:'ro',   text:'Explores empathically the REASON behind the request (stigma, specific harm, shame, privacy), validates his recovery and the harm of stigma, and maintains the therapeutic relationship despite not simply complying' },
      { dom:'ro',   text:'Explains transparently and respectfully what can and cannot be done and WHY \u2014 avoiding both blunt refusal and improper agreement to delete \u2014 and checks his understanding' },
      { dom:'cm',    text:'Safety-nets and follows up: corrects the allergy and flags it, sets out the next steps/options and timeframe for the disputed entry, documents the conversation, signposts formal routes, and offers review \u2014 lawful, transparent handling that preserves integrity and the relationship' },
    ],
    worked:[
      { lbl:'Acknowledge + take it seriously', txt:'"Thank you for raising this directly \u2014 your record matters and you have every right to question it. Let me take the two things separately, because they\u2019re actually quite different, and I want to be straight with you about each."' },
      { lbl:'The allergy \u2014 correct it', txt:'"The allergy first: if that\u2019s listed in error, that\u2019s not only unfair, it\u2019s a safety risk \u2014 so let’s check it properly — I’ll look back at where it came from, the hospital letters and your prescriptions — and if it turns out it was recorded in error, I’ll correct it, with a note explaining how we checked, so the record shows the change rather than it just vanishing. That one I can put right."' },
      { lbl:'The diagnosis \u2014 honest distinction', txt:'"The alcohol entry is different. It was a genuine record of what was happening and the care given at the time \u2014 so I can\u2019t simply erase it, because the notes have to stay a truthful account, and I\u2019m not allowed to delete accurate clinical history. I know that\u2019s not what you hoped to hear, and I want to explain what I CAN do."' },
      { lbl:'Explore the why', txt:'"Can I ask what\u2019s behind this \u2014 is it the stigma, or is it causing a specific problem, like with work or insurance? \u2026 That makes complete sense, and your recovery is genuinely something to be proud of. The label shouldn\u2019t define you."' },
      { lbl:'Offer the real options', txt:'"Here\u2019s what we can do: I can add a clear note \u2014 in your words if you like \u2014 saying you dispute it and that you\u2019ve been well and abstinent for years, so anyone reading sees the up-to-date picture. You can also make a formal correction request, and if you\u2019re unhappy with the outcome there\u2019s a complaints route and an external regulator. And importantly — an employer or insurer can’t get a report from us without your consent, apart from rare legal situations like a court order, and by law you can ask to see any report about you before it’s sent, ask for corrections, or add your own statement."' },
      { lbl:'Document + safety-net', txt:'"I’ll check the allergy against the old records and correct it with a note once it’s verified, add whatever statement you\u2019d like about the alcohol entry, and write up our conversation. Have a think about the formal request \u2014 take the information away \u2014 and come back if you want help with it. Does that feel like a fair way forward?"' },
    ],
    learning:'A request to amend the medical record is a professional/data-protection dilemma that turns on separating CORRECTION OF FACT from ERASURE OF ACCURATE RECORD. Here there are two requests: a disputed ALLERGY entry, which is a potential FACTUAL INACCURACY that should be verified first and then corrected with an audit trail (NHS England guidance on amending records) (an inaccurate allergy is also a clinical SAFETY issue); and a historical "alcohol dependence" diagnosis, which is an accurately-recorded professional OPINION/record of care that is generally NOT simply deleted even though the patient has recovered and finds it stigmatising. Under UK GDPR (Article 16)/Data Protection Act 2018, patients have a right to RECTIFICATION of inaccurate personal data (response within one month, Article 12), but a disputed professional OPINION is typically ANNOTATED with the patient\u2019s comment rather than erased (an opinion accurately recorded as having been held is not "inaccurate"), and there is NO absolute right to erasure of health records needed for ongoing care or medico-legal/public-interest reasons. The record must remain a truthful, contemporaneous account: entries are not deleted to rewrite history, any agreed change is made transparently with an audit trail, and removing accurate information to mislead third parties (insurers/employers) would be a serious probity breach. Explore empathically WHY the patient wants the change \u2014 stigma, a concrete harm, shame, privacy \u2014 validate his recovery and the harm of stigma, and offer the legitimate options: correct the factual error, add the patient\u2019s own statement and note his recovery so the record reflects the current picture, explain formal rectification/complaints/ICO routes, and reassure accurately that reports for employers or insurers need his consent (with narrow legal exceptions such as a court order) and that the Access to Medical Reports Act 1988 lets him see a report before it is sent, request corrections or attach a statement — all documented. The aim is lawful, transparent handling that preserves both record integrity and the therapeutic relationship, avoiding blunt refusal and improper deletion alike.',
    knowledge:{
      guideline:'UK GDPR Articles 12, 16 and 17 · ICO guidance on the accuracy principle · NHS England: Amending patient and service user records · GMC Good medical practice (2024) · GMC Confidentiality (2017) · Access to Medical Reports Act 1988 · ICO routes',
      points:[
        { h:'Fact vs opinion', t:'Verify, then correct factual inaccuracies with an audit trail (e.g. a wrong allergy — also a safety issue; NHS England: corrected or marked, not simply deleted). A disputed professional opinion/diagnosis accurately recorded at the time is generally annotated, not erased.' },
        { h:'Right to rectification', t:'UK GDPR Article 16/DPA 2018 gives a right to rectification of inaccurate personal data (response within one month, Article 12). Contested opinions are typically noted with the patient’s comment rather than deleted, as the opinion (as held) is not "inaccurate" (ICO accuracy guidance).' },
        { h:'No absolute erasure', t:'There is no absolute right to erasure (UK GDPR Article 17 does not apply where processing is needed for health care or public health) of health records needed for care or medico-legal/public-interest reasons. Accurate clinical history is retained.' },
        { h:'Record integrity', t:'Records must remain truthful and contemporaneous. No deletion-to-rewrite, no back-dating; changes made transparently with an audit trail. Removing accurate data to mislead third parties is a probity breach (GMC Good medical practice, 2024).' },
        { h:'Explore the reason', t:'Understand the driver \u2014 stigma, job/insurance harm, shame, privacy. Validate recovery and the harm of stigma; this preserves the alliance and may reveal the real need (confidentiality reassurance, updating to reflect recovery).' },
        { h:'Legitimate options', t:'Correct factual errors; add the patient\u2019s statement/disagreement and note recovery; explain formal rectification request, complaints process and ICO route; reassure that reports for employers/insurers need consent (GMC Confidentiality 2017; narrow legal exceptions such as a court order) and that the Access to Medical Reports Act 1988 lets him see a report first, request corrections or attach a statement. Document the discussion.' },
        { h:'Never do', t:'Never simply delete an accurate clinical entry on request; never falsify/back-date; never remove information to mislead third parties; never bluntly refuse without explanation; never ignore a genuine factual (safety) error.' },
        { h:'Safety-net & follow-up', t:'Verify, then correct and flag the allergy with an audit trail; set out next steps/options and timeframe for the disputed entry; document; signpost formal routes; offer review \u2014 lawful, transparent, relationship-preserving. No cancer pathway applies.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c181, c182, c183, c184);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'postherpetic-neuralgia': {
      ceg: ['Older adults', 'Prescribing & pharmacology'],
      stem: {
        name: 'Edith Caldwell', age: '74 years \u00b7 female',
        pmh: ['Shingles (left T6) 4 months ago \u2014 rash healed; persistent burning/stabbing band of pain', 'Allodynia (clothing/bedsheets painful); disturbed sleep; low mood', 'Paracetamol + ibuprofen ineffective'],
        meds: ['Paracetamol', 'Ibuprofen PRN', 'Amlodipine'],
        allergy: 'NKDA',
        recent: '"The rash went months ago \u2014 why does my skin still burn? Is something else wrong?"',
        reason: 'Video consultation \u2014 persistent pain after shingles.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise + reassure', d:'Burning/allodynia 90 days or more after rash onset = postherpetic neuralgia; known after-effect, not a new disease.' },
        { t:'2\u20134',  h:'Why painkillers failed', d:'Neuropathic pain doesn\u2019t respond to paracetamol/NSAIDs \u2014 reframe; needs neuropathic agents.' },
        { t:'4\u20137',  h:'Neuropathic ladder', d:'CG173 first-line choice amitriptyline/duloxetine/gabapentin/pregabalin — low, titrated, switch not combine, realistic goals; elderly cautions.' },
        { t:'7\u20139',  h:'Topical + whole person', d:'Capsaicin cream for allodynia (lidocaine plasters licensed but not CG173-recommended — formulary only); address sleep/mood/isolation; validate.' },
        { t:'9\u201312', h:'Avoid pitfalls + safety-net', d:'No long-term opioids; review/titrate; pain clinic if refractory; shingles vaccine for prevention.' }
      ],
      wordPics: {
        fail: 'Escalates paracetamol/NSAIDs or jumps to opioids; dismisses as "just shingles after-effects, nothing to do"; ignores sleep/mood.',
        pass: 'Recognises PHN, explains why simple analgesics fail, starts a titrated neuropathic agent \u00b1 topical, and addresses the toll.',
        exc:  'Recognises and reassures about PHN, reframes the analgesic failure, institutes the NICE CG173 neuropathic ladder tailored to the elderly with topical options for allodynia, addresses sleep/mood/isolation, avoids opioids, sets realistic expectations, and mentions shingles vaccination.'
      },
      avoid: [
        { dont:'"Let\u2019s try stronger painkillers \u2014 maybe some codeine or morphine."', instead:'"Ordinary and opioid painkillers don\u2019t work well for nerve pain \u2014 the right treatments are tablets like amitriptyline or gabapentin, plus a cream on the skin if you need it."', why:'Opioids are poor for chronic neuropathic pain and carry harms; the neuropathic ladder is indicated.' },
        { dont:'"The shingles is gone, I\u2019m afraid this is just something you\u2019ll have to live with."', instead:'"This is postherpetic neuralgia, and it\u2019s treatable \u2014 we have several effective options to take the edge off and help you sleep."', why:'Therapeutic nihilism abandons a patient with a treatable, miserable condition.' },
        { dont:'(Ignoring impact) prescribing and ending.', instead:'"This has wrecked your sleep and your mood \u2014 that matters as much as the pain; let\u2019s look after the whole picture."', why:'Neglecting the bio-psycho-social toll misses a core part of chronic-pain care.' }
      ]
    },

    'post-icu-syndrome': {
      ceg: ['Mental health & addiction', 'New & undifferentiated presentations'],
      stem: {
        name: 'Martin Oduya', age: '52 years \u00b7 male',
        pmh: ['Ventilated in ICU 3 weeks (severe pneumonia/ARDS) 5 months ago; no structured follow-up', '\u26a0 Fatigue, weakness, exertional breathlessness, "brain fog", low mood, anxiety, nightmares/flashbacks, poor sleep', 'Feels guilty for struggling'],
        meds: ['None regular'],
        allergy: 'NKDA',
        recent: '"I should be grateful I survived \u2014 so why am I a wreck? What\u2019s wrong with me?"',
        reason: 'Video consultation \u2014 months after a critical-illness ICU admission.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Name + legitimise', d:'Post-intensive-care syndrome \u2014 a recognised cluster; he\u2019s not weak or ungrateful.' },
        { t:'2\u20133',  h:'Tackle the guilt', d:'Gratitude and suffering coexist; struggling isn\u2019t ingratitude; involve family understanding.' },
        { t:'3\u20137',  h:'Screen 3 domains', d:'Physical (+ red flags), psychiatric (depression/anxiety/PTSD + risk), cognitive/work.' },
        { t:'7\u201310', h:'Multi-domain rehab', d:'Physio (pulmonary rehab only if locally available); mood + trauma-focused therapy (NG116); cognitive/occupational support; sleep; social; note missed CG83 2–3 month review.' },
        { t:'10\u201312',h:'Close the gap + safety-net', d:'Coordinate + track referrals; red-flag + crisis (suicidality) safety-net; proactive follow-up.' }
      ],
      wordPics: {
        fail: 'Treats symptoms piecemeal or reassures "you\u2019re lucky to be alive"; misses PTSD/risk; no rehab coordination; reinforces the guilt.',
        pass: 'Recognises and names PICS, screens the three domains incl. PTSD/risk, and sets up multi-domain rehab with follow-up.',
        exc:  'Names and legitimises PICS, tackles the "be grateful" guilt with the family, screens physical (with red flags)/cognitive/psychiatric (PTSD + suicidality) domains, recognises the missed CG83 2 to 3 month review, coordinates a multi-domain rehab plan (physio, pulmonary rehab where locally available, mood + trauma therapy, cognitive/occupational, sleep, social), and closes the follow-up gap with tracking and crisis safety-netting.'
      },
      avoid: [
        { dont:'"You nearly died \u2014 try to focus on how lucky you are to have survived."', instead:'"Being grateful and finding the aftermath genuinely hard are both true \u2014 what you have is a recognised condition called post-intensive-care syndrome."', why:'The "be grateful" message invalidates real suffering and delays help-seeking.' },
        { dont:'(Treating only the fatigue) "Let\u2019s do some blood tests for tiredness."', instead:'"There are three parts \u2014 the physical, the memory/concentration, and the flashbacks and mood \u2014 and each needs its own help."', why:'Piecemeal management misses the psychiatric (PTSD) and cognitive domains central to PICS.' },
        { dont:'(No risk screen) ending without asking about safety.', instead:'"With flashbacks and low mood, I need to ask \u2014 have you had any thoughts that life isn\u2019t worth living?"', why:'Failing to assess suicidality in a distressed PTSD/depression presentation is unsafe.' }
      ]
    },

    'pkd-young': {
      ceg: ['Gender, reproductive & sexual health', 'New & undifferentiated presentations'],
      stem: {
        name: 'Lucy Hartford', age: '24 years \u00b7 female',
        pmh: ['Father (and paternal grandmother) with ADPKD; father now on dialysis awaiting transplant', 'Well, asymptomatic; considering children with partner', 'No hypertension recorded'],
        meds: ['Combined oral contraceptive'],
        allergy: 'NKDA',
        recent: '"Do I have it? Should I be tested? And what does it mean for having kids?"',
        reason: 'Video consultation \u2014 family history of ADPKD, seeking advice.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Acknowledge + pace', d:'Watching dad on dialysis is frightening; go at her pace, ask what matters most today.' },
        { t:'2\u20134',  h:'Inheritance', d:'Autosomal dominant \u2192 50% risk; not certain she has it. Check understanding.' },
        { t:'4\u20137',  h:'Screening, sensitively', d:'Renal ultrasound (age-dependent criteria) ± genetics; implications, insurance (ABI Code vs scan finding), right NOT to know.' },
        { t:'7\u20139',  h:'Diagnosis would mean', d:'BP control (ACE/ARB), monitoring, tolvaptan in selected cases; extra-renal (aneurysms \u2192 thunderclap = 999).' },
        { t:'9\u201312', h:'Reproductive options + refer', d:'Natural/prenatal/PGT-IVF/donor/adoption; pre-conception counselling; nephrology + clinical genetics.' }
      ],
      wordPics: {
        fail: 'Orders a kidney ultrasound without discussing implications/right not to know; or dismisses her fears; ignores reproductive options/genetics referral; catastrophises.',
        pass: 'Explains 50% inheritance, discusses screening sensitively, outlines management and reproductive options, and refers.',
        exc:  'Acknowledges the fear and paces information, explains autosomal-dominant 50% risk, discusses screening with implications and the right not to know, outlines realistic management and extra-renal features (aneurysm red flag), addresses reproductive options non-directively, and refers to nephrology + clinical genetics.'
      },
      avoid: [
        { dont:'"I\u2019ll book you a kidney scan today and we\u2019ll know for sure."', instead:'"You can be tested \u2014 usually an ultrasound \u2014 but it’s your choice, and there are things worth thinking through first, like the emotional side and insurance, where a scan result and a genetic test result are treated differently."', why:'Testing without discussing implications and the right not to know ignores predictive-testing counselling standards.' },
        { dont:'"With your dad on dialysis, you\u2019ll probably end up the same way."', instead:'"A diagnosis doesn\u2019t mean your dad\u2019s path or timeline \u2014 early blood-pressure control and monitoring protect the kidneys, and many live full lives."', why:'Catastrophising is inaccurate and harmful; prognosis varies and is modifiable.' },
        { dont:'"You should really consider IVF to avoid passing it on."', instead:'"There are several options \u2014 natural, testing in pregnancy, or IVF with embryo testing \u2014 and the genetics team will go through them without pushing you either way."', why:'Steering reproductive decisions breaches non-directive counselling and patient autonomy.' }
      ]
    },

    'amend-medical-record': {
      ceg: ['Professionalism & ethics', 'Health disadvantage & vulnerabilities'],
      stem: {
        name: 'Greg Salter', age: '39 years \u00b7 male',
        pmh: ['Requests deletion of: (1) historical "alcohol misuse/dependence" diagnosis (several years ago), (2) an allergy he says he doesn\u2019t have', 'Reports recovery; abstinent for years', 'Cites job/insurance harm + stigma'],
        meds: ['None'],
        allergy: 'Penicillin allergy listed \u2014 patient disputes it',
        recent: '"Just delete them both \u2014 they\u2019re wrong and it\u2019s nobody\u2019s business."',
        reason: 'Video consultation \u2014 requests changes to his medical record.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Acknowledge + separate', d:'Take it seriously; split into a factual error (allergy) vs an accurate historical diagnosis (alcohol).' },
        { t:'2\u20134',  h:'Allergy \u2014 correct it', d:'Verify against source (letters, prescribing); if wrong, correct with note + audit trail, not deletion (also a safety issue). This one can be put right.' },
        { t:'4\u20137',  h:'Diagnosis \u2014 honest distinction', d:'Accurately-recorded opinion isn\u2019t simply erased; records must stay truthful; explain why.' },
        { t:'7\u20139',  h:'Explore + reassure', d:'Why he wants it (stigma/job/insurance); validate recovery; confidentiality — consent needed, narrow legal exceptions; Access to Medical Reports Act 1988 right to see reports.' },
        { t:'9\u201312', h:'Options + document', d:'Add his statement/recovery note; formal rectification/complaint/ICO routes; document the discussion.' }
      ],
      wordPics: {
        fail: 'Either simply deletes the accurate entry (falsifying the record) or bluntly refuses both without explanation, exploration or correcting the genuine allergy error.',
        pass: 'Corrects the factual allergy, declines to erase the accurate diagnosis with explanation, and offers to annotate plus formal routes.',
        exc:  'Separates fact from opinion, corrects the allergy (safety), explains lawfully why an accurate historical diagnosis is annotated not erased, explores the stigma/harm empathically, offers to add the patient\u2019s statement/recovery and the formal rectification/complaint/ICO routes, reassures accurately on confidentiality (including the Access to Medical Reports Act 1988), upholds record integrity, and documents \u2014 preserving the relationship.'
      },
      avoid: [
        { dont:'"No problem, I\u2019ll just delete both entries for you now."', instead:'"The allergy I can correct if it\u2019s wrong; the alcohol entry was an accurate record at the time, so I can\u2019t erase it \u2014 but I can add your account and recovery."', why:'Deleting an accurate clinical entry falsifies the record \u2014 a probity breach \u2014 and there is no absolute right to erasure.' },
        { dont:'"I can\u2019t change anything in the records, sorry."', instead:'"I can correct genuine errors like the allergy, and add your statement to the disputed entry \u2014 and there are formal routes too."', why:'Blunt blanket refusal ignores the right to rectification of inaccurate data and the duty to correct a safety-relevant error.' },
        { dont:'(Not exploring) treating it as purely administrative.', instead:'"Can I ask what\u2019s behind this \u2014 stigma, or a specific problem with work or insurance? Your recovery matters and shouldn\u2019t define you."', why:'Missing the reason and the stigma/harm damages the relationship and overlooks the real need (often confidentiality reassurance).' }
      ]
    }

  });

})();
