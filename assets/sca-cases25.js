/* ============================================================
   Reasoning GP — Case Library batch 25: "Perinatal & adult mood — risk and what's behind it"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   Complements batch 20 (firearms duty, PTSD, benzo fork, gambling).
   Ethics/risk: perinatal risk to self+baby; explicit suicide-risk
   assessment; alcohol dependence + DVLA/occupational disclosure duty.
   No NG12 cancer link applies (correctly omitted).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases24.js.
   ============================================================ */

(function(){

  /* ============ 93. VIDEO — Postnatal depression (risk to self + baby) ============ */
  const c93 = {
    id:'postnatal-depression', title:'"I\u2019m fine, I\u2019m just tired \u2014 all new mums are"', type:'video', duration:12,
    meta:{ age:30, sex:'F', setting:'Video consultation \u2014 mother of an 8-week-old, brought by her partner.', system:'Perinatal MH / Postnatal depression & risk' },
    brief:'Mrs Aisha Rahman, 30, 8 weeks postnatal (first baby, difficult forceps delivery). Her partner urged her to book, worried she\u2019s "not herself \u2014 crying all the time, not bonding". On the call she is flat, tearful, exhausted, minimises everything as normal tiredness. If trust builds: pervasive low mood >3 weeks, anhedonia, not sleeping even when baby sleeps, poor appetite, guilt that she\u2019s "a terrible mother", feels detached from the baby, and intrusive frightening thoughts. PMH: nil. Meds: none. Breastfeeding.',
    script:{
      opening:'"Honestly I don\u2019t know why my partner made such a fuss about me booking this. I\u2019m FINE \u2014 I\u2019m just tired, all new mums are knackered, aren\u2019t they? The baby\u2019s lovely, everything\u2019s lovely. I think I just need to get more sleep and pull myself together. Can you just tell him I\u2019m okay so he stops hovering? I really don\u2019t want to be one of those mums who can\u2019t cope."',
      facts:[
        { topic:'The depression',      text:'If explored gently: persistent low mood for >3\u20134 weeks (beyond "baby blues"), tearfulness, anhedonia, can\u2019t sleep even when the baby does (not just sleep deprivation), poor appetite, profound guilt ("terrible mother"), poor concentration, and a sense of detachment / not bonding with the baby. This is postnatal depression, not normal tiredness.' },
        { topic:'The RISK \u2014 must ask',  text:'CRITICAL, on sensitive direct questioning: thoughts that the baby/family "would be better off without me", and frightening intrusive thoughts (e.g. of harm coming to the baby) that horrify her and which she\u2019s told no one about. Must assess: thoughts of self-harm/suicide (plan/intent/means), thoughts of harming the baby, and ability to care for the baby. Red flags for severe illness / puerperal psychosis must be screened (though here the picture is severe depression).' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the minimising is driven by TERROR that admitting she\u2019s struggling means social services will "take the baby away" and that she\u2019ll be judged an unfit mother. This fear is why she hides the intrusive thoughts and pushes for "tell him I\u2019m fine". Naming and dismantling this fear (honest, reassuring information about how perinatal mental health support actually works) is the hinge of the consultation.' },
        { topic:'The isolation/identity', text:'If reached: a traumatic forceps delivery she hasn\u2019t processed, no family nearby, a sense of failure against an idealised "perfect mum", shame about not feeling the bond everyone expects. Her partner\u2019s concern is the reliable signal.' },
        { topic:'What she wants',       text:'Officially: to be told she\u2019s fine so her partner stops worrying. What she needs: recognition of postnatal depression, a sensitive and explicit risk assessment (self and baby), the "they\u2019ll take my baby" fear dismantled, and a supportive treatment plan (perinatal pathway, talking therapy, breastfeeding-compatible options).' },
      ],
      ice:{
        ideas:'It\u2019s just normal new-mum tiredness; she should pull herself together and sleep more.',
        concerns:'HIDDEN AGENDA \u2014 terror that admitting she\u2019s struggling means social services will take the baby and she\u2019ll be judged an unfit mother; this is why she hides the intrusive thoughts and minimises; trauma from the delivery, isolation, and shame about not bonding.',
        expectations:'To be reassured she\u2019s fine. What she actually needs: recognition of postnatal depression, an explicit risk assessment (self + baby), the "they\u2019ll take my baby" fear addressed honestly, and a supportive perinatal treatment plan.'
      },
      cues:['"I\u2019m just tired, tell him I\u2019m fine" \u2014 minimising; the partner\u2019s concern is the reliable signal and fear is underneath.','Flat affect, tearful, "terrible mother", not bonding \u2014 postnatal depression, not baby blues (which resolves by ~2 weeks).','A flicker of shame/fear if asked about frightening thoughts \u2014 the hidden intrusive thoughts and the "they\u2019ll take my baby" terror.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises POSTNATAL DEPRESSION (pervasive low mood >2 weeks beyond the baby-blues window, anhedonia, guilt, sleep/appetite change, detachment from the baby) and does NOT accept "just normal tiredness" or advise her to "pull herself together"' },
      { dom:'tasks', text:'Conducts an EXPLICIT, sensitive RISK ASSESSMENT: thoughts of self-harm/suicide (plan, intent, means), thoughts of harming the baby or intrusive thoughts, and her ability to care for the baby \u2014 asking directly and non-judgementally rather than avoiding it' },
      { dom:'tasks', text:'Screens for and recognises red flags of SEVERE perinatal illness / puerperal psychosis (rapid onset, perplexity, mania, delusions/hallucinations, marked agitation, thoughts of harming the baby) \u2014 which would be a perinatal psychiatric EMERGENCY needing urgent specialist assessment' },
      { dom:'tasks', text:'DISMANTLES the "they\u2019ll take my baby" fear with honest information: perinatal mental health support is about helping her get well and stay WITH her baby, struggling is common and treatable, and seeking help is the protective, good-mother act \u2014 not a trigger for removal' },
      { dom:'tasks', text:'Makes a supportive, appropriate plan: perinatal/IAPT referral, psychological therapy first-line for mild\u2013moderate, breastfeeding-compatible antidepressant (e.g. sertraline) for moderate\u2013severe with discussion, health-visitor involvement, partner/social support, and follow-up matched to severity/risk' },
      { dom:'rto',   text:'Hears the minimisation as fear, treats the partner\u2019s concern as the reliable signal, and creates enough safety for her to disclose the intrusive thoughts rather than colluding with "tell him I\u2019m fine"' },
      { dom:'rto',   text:'Responds to the shame, the bonding fear and the birth trauma with warmth and normalisation, so she feels supported rather than judged' },
      { dom:'gs',    text:'Safety-nets and follows up robustly: crisis routes if thoughts of harm to self/baby escalate (urgent perinatal/crisis team, 999), close follow-up, health visitor and partner engaged, and clear documentation of the risk assessment \u2014 balancing support with safety' },
    ],
    worked:[
      { lbl:'Believe the partner\u2019s signal', txt:'"I\u2019m really glad you came, even if it was your partner\u2019s nudge \u2014 partners usually notice these things because they love us and see us up close. I\u2019m not going to just tell him you\u2019re fine, because I\u2019d rather actually check how YOU are, properly, with no rush. Is that okay?"' },
      { lbl:'Name it, gently',        txt:'"What you\u2019re describing \u2014 crying a lot, not sleeping even when the baby does, feeling detached, that horrible \u2018terrible mother\u2019 voice \u2014 that\u2019s more than tiredness, and it\u2019s not you failing. It sounds like postnatal depression, which is incredibly common and very treatable. The baby blues lift by about two weeks; this has gone on longer and deeper, and that\u2019s worth treating, not toughing out."' },
      { lbl:'Ask the hard questions', txt:'"I ask every new mum these, because they matter and you\u2019re not alone in them. When you feel this low \u2014 do you ever have thoughts that your family would be better off without you? \u2026 And sometimes mums get frightening thoughts pop into their heads, even about the baby coming to harm \u2014 thoughts that horrify them. Have you had anything like that? \u2026 Thank you for trusting me. Having those thoughts does NOT make you dangerous or a bad mother \u2014 it\u2019s a symptom we can treat."' },
      { lbl:'Dismantle the real fear',txt:'"Can I name something? I think part of why this has stayed hidden is a fear that if you admit you\u2019re struggling, someone will take your baby away. Let me be really clear: that is not how this works. Everything we do is about helping you get well and keeping you and your baby together. Asking for help is the protective, good-mother thing to do \u2014 it\u2019s the opposite of unfit."' },
      { lbl:'The plan',               txt:'"So here\u2019s what I\u2019d suggest, and we do it together: some proper support from the perinatal mental health and talking-therapy services, your health visitor more involved, and if you\u2019d find it helpful, a medication that\u2019s safe with breastfeeding \u2014 sertraline \u2014 to lift the worst of it. None of this takes anything away from you; it gives you back to yourself and to your baby."' },
      { lbl:'Safety-net + support',   txt:'"If those darker thoughts ever get stronger, or you ever feel you might act on a thought about yourself or the baby, that\u2019s when you contact us or the crisis team urgently, or 999 \u2014 I\u2019ll give you exactly who to call. I want to see you again very soon, and your partner\u2019s welcome too. You came in to be told you\u2019re fine. What you\u2019re actually getting is people who are going to help you feel like yourself again \u2014 you don\u2019t have to carry this alone."' },
    ],
    learning:'Pervasive low mood beyond the two-week baby-blues window \u2014 anhedonia, guilt ("terrible mother"), sleep/appetite change, and detachment from the baby \u2014 is postnatal depression, not normal tiredness, and must not be met with "pull yourself together". The non-negotiable task is an EXPLICIT, sensitive risk assessment covering self-harm/suicide (plan, intent, means), thoughts of harming the baby or frightening intrusive thoughts, and ability to care for the baby \u2014 plus screening for red flags of puerperal psychosis (rapid onset, perplexity, mania, psychosis, thoughts of harming the baby), a perinatal psychiatric emergency. The examinable hidden agenda is the terror that disclosure means social services "taking the baby" \u2014 which drives the minimisation and the concealment of intrusive thoughts; dismantling it honestly (help is about keeping mother and baby together; seeking help is the protective act) is the hinge. Treat the partner\u2019s concern as the reliable signal, respond to shame/bonding-fear/birth-trauma with warmth, and make a supportive plan (perinatal pathway, psychological therapy, breastfeeding-compatible sertraline where indicated, health visitor, partner) with robust risk-based safety-netting.',
    knowledge:{
      guideline:'NICE CG192 antenatal & postnatal mental health · perinatal mental health pathways · puerperal psychosis (emergency)',
      points:[
        { h:'Distinguish from baby blues', t:'Baby blues (tearfulness, lability) is common in the first ~2 weeks and self-limiting. Postnatal depression is a pervasive depressive episode (low mood, anhedonia, guilt, sleep/appetite change, poor concentration, detachment from the baby) lasting >2 weeks, typically in the first months postpartum. Use validated tools (e.g. EPDS) to support assessment.' },
        { h:'Risk assessment is mandatory', t:'Ask explicitly and sensitively about thoughts of self-harm/suicide (plan, intent, means \u2014 suicide is a leading cause of maternal death), thoughts of harming the baby and intrusive thoughts, and the mother\u2019s capacity to care for the baby. Asking does not increase risk. Document it.' },
        { h:'Screen for puerperal psychosis', t:'Rapid-onset (often days), fluctuating, with perplexity, mania, delusions/hallucinations, marked agitation, or thoughts of harming the baby = puerperal psychosis: a psychiatric EMERGENCY needing same-day specialist perinatal assessment and often admission (ideally a Mother and Baby Unit). Have a low threshold for urgent referral.' },
        { h:'Dismantle the "they\u2019ll take my baby" fear', t:'Fear of child removal is a major barrier driving concealment, especially of intrusive thoughts. Reassure honestly: perinatal services aim to help the mother recover and stay with her baby; help-seeking is protective and the mark of a caring parent. This dismantling is often the key therapeutic act.' },
        { h:'Management by severity', t:'Mild\u2013moderate: guided self-help / psychological therapy (perinatal IAPT), health-visitor support, social support. Moderate\u2013severe: psychological therapy and/or an antidepressant \u2014 sertraline is commonly used and compatible with breastfeeding \u2014 with informed discussion. Involve the partner and health visitor; consider the wider context (birth trauma, isolation).' },
        { h:'Treat the partner\u2019s concern as data', t:'A worried partner who says she is "not herself" is a reliable signal; do not collude with "tell him I\u2019m fine". Birth trauma, isolation and shame about bonding are common contributors to surface and validate.' },
        { h:'Never do', t:'Never dismiss it as normal tiredness or advise "pull yourself together"; never skip the explicit self/baby risk assessment; never miss puerperal-psychosis red flags; never let the child-removal fear go unaddressed; never collude with minimisation driven by that fear.' },
        { h:'Safety-net & follow-up', t:'Crisis/perinatal team and 999 routes if thoughts of harm to self/baby escalate; close follow-up matched to severity/risk; health visitor and partner engaged; documented risk assessment; review of treatment response.' }
      ]
    }
  };

  /* ============ 94. VIDEO — Depression first presentation + explicit suicide-risk assessment ============ */
  const c94 = {
    id:'depression-first-risk', title:'"I just need a sick note for work"', type:'video', duration:12,
    meta:{ age:26, sex:'M', setting:'Video consultation \u2014 young man requesting a fit note.', system:'Mental health / Depression & suicide-risk assessment' },
    brief:'Mr Jordan Pryce, 26, IT support worker, books for "a sick note \u2014 stress at work". Flat, avoids eye contact on camera. If explored: ~3 months of low mood, anhedonia, early waking, weight loss, can\u2019t concentrate, withdrawn from friends, stopped his football. Recently split from a long-term partner; drinking more alone. He frames it all as "just work stress" and wants the note quickly. PMH: nil. Meds: none. No prior MH contact.',
    script:{
      opening:'"Hi \u2014 cheers. I just need a fit note really, work\u2019s been doing my head in and I need a bit of time off. I\u2019m not sleeping, I\u2019m exhausted, I can\u2019t focus. If you could just sign me off for a couple of weeks that\u2019d be great and I\u2019ll be out of your way. It\u2019s nothing major, just stress, everyone\u2019s stressed aren\u2019t they."',
      facts:[
        { topic:'The depression',      text:'If explored: pervasive low mood and anhedonia for ~3 months, early-morning waking, unintentional weight loss, poor concentration, social withdrawal, stopped activities he loved (football). Meets the picture of a moderate depressive episode, not just "work stress".' },
        { topic:'The trigger & coping', text:'On gentle questioning: a painful relationship breakup ~3 months ago; drinking more, alone, to cope; feels he\u2019s "failing" and "a burden". The "sick note for work stress" reframes a depressive illness into something less stigmatised.' },
        { topic:'The RISK \u2014 must ask',  text:'CRITICAL: on sensitive, explicit questioning he discloses passive thoughts that "everyone would be better off without me" and fleeting thoughts of not wanting to wake up \u2014 but, if explored carefully, no current active plan/intent/means and some protective factors (his mum, his dog, would never want to hurt his family). Risk MUST be asked about directly \u2014 the sick-note request must not be processed without it.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 he came for a sick note as a "legitimate" reason to be seen, because he can\u2019t bring himself to say "I think I\u2019m depressed" or "I\u2019ve been having dark thoughts" \u2014 male stigma and shame. The quick note request is partly a test of whether the doctor will look past it. If the GP just signs the note and ends the consult, the depression and the risk are missed entirely.' },
        { topic:'What he wants',        text:'Officially: a quick fit note for work stress. What he needs: recognition of depression behind the request, an explicit suicide-risk assessment, validation that lets him drop the "just stress" framing, and a proper treatment/safety plan \u2014 the note being the door, not the consultation.' },
      ],
      ice:{
        ideas:'It\u2019s just work stress; a sick note and some time off will sort it.',
        concerns:'HIDDEN AGENDA \u2014 he can\u2019t say "I\u2019m depressed" or "I\u2019ve had dark thoughts" (male stigma/shame), so a sick note is his "legitimate" way in; underneath, a breakup, drinking alone, feeling a burden, and passive suicidal thoughts.',
        expectations:'A quick fit note. What he actually needs: the depression behind the request recognised, an explicit suicide-risk assessment, and a proper treatment/safety plan.'
      },
      cues:['"Just a sick note for stress, I\u2019ll be out of your way" \u2014 a legitimate door for something he can\u2019t name; don\u2019t just process it.','3 months of anhedonia, early waking, weight loss, stopped football \u2014 depression, not stress.','Avoids eye contact, "everyone\u2019s stressed" \u2014 minimising; the breakup, the drinking and the dark thoughts are underneath.']
    },
    checkpoints:[
      { dom:'tasks', text:'Looks BEYOND the sick-note request: recognises a moderate depressive episode (pervasive low mood/anhedonia >2 weeks with biological features \u2014 early waking, weight loss, poor concentration, withdrawal) rather than processing "work stress" and ending the consultation' },
      { dom:'tasks', text:'Performs an EXPLICIT SUICIDE-RISK ASSESSMENT: asks directly about thoughts of being better off dead / not wanting to wake up, active suicidal ideation, plan, intent, means, preparatory acts, and protective factors \u2014 understanding that asking does not increase risk' },
      { dom:'tasks', text:'Assesses severity and context (PHQ-9-type screen, alcohol as a worsening factor, the breakup trigger, functional impact) and screens for relevant comorbidity/risk (escalating alcohol, prior self-harm)' },
      { dom:'tasks', text:'Negotiates an evidence-based plan matched to severity: psychological therapy (referral to NHS Talking Therapies/IAPT) and/or an SSRI for moderate depression with informed discussion, the fit note used appropriately as part of care, lifestyle/alcohol, activity and social reconnection, and follow-up' },
      { dom:'tasks', text:'Addresses the alcohol as a depressant and risk factor, and gives appropriate advice/support without derailing the consultation into a lecture' },
      { dom:'rto',   text:'Creates a safe, non-judgemental space that lets him drop the "just stress" framing and disclose the real picture; treats the sick-note request as the door, not the destination, and does not collude with minimisation' },
      { dom:'rto',   text:'Handles male stigma and shame with warmth \u2014 normalising depression and help-seeking \u2014 so he engages with treatment rather than leaving with only a note' },
      { dom:'gs',    text:'Safety-nets robustly and documents: crisis routes if thoughts intensify or a plan emerges (urgent/111 option 2/crisis team/A&E), a safety plan, early follow-up (e.g. within 1\u20132 weeks given risk), and clear documentation of the risk assessment' },
    ],
    worked:[
      { lbl:'Don\u2019t just sign it',    txt:'"I can sort a fit note \u2014 but before I do, I don\u2019t want to just sign a form and miss how you\u2019re actually doing. You\u2019ve said work\u2019s doing your head in, you\u2019re not sleeping, can\u2019t focus, exhausted \u2014 that\u2019s a lot. Can I ask a bit more about how things have really been, beyond work? No rush."' },
      { lbl:'Name it without stigma', txt:'"From what you\u2019re telling me \u2014 the months of feeling flat, waking at 4am, losing your appetite, packing in the football you used to love, pulling away from mates \u2014 that\u2019s more than stress. That\u2019s depression, and I want to say clearly: it\u2019s an illness, not a weakness, and it\u2019s really common in blokes your age. You\u2019re not failing."' },
      { lbl:'Ask directly about risk',txt:'"I\u2019m going to ask you something directly, because I ask everyone who feels this low and it matters. When things are this heavy \u2014 have you had thoughts that you\u2019d be better off not here, or that others would be better off without you? \u2026 Thank you for being honest. And have those thoughts gone any further \u2014 thinking about how, or making any plans, or anything to act on it? \u2026 What stops you, on the worst days?"' },
      { lbl:'Receive it well',        txt:'"I\u2019m really glad you told me \u2014 that took guts, and saying it out loud is genuinely a step that helps. You\u2019re not a burden, and the fact you\u2019ve got your mum and your dog in your mind on the bad days matters; we build on exactly that."' },
      { lbl:'The alcohol + plan',     txt:'"One honest thing \u2014 the drinking alone, I get why, but alcohol is a depressant and it deepens this and the dark thoughts, so easing off it is part of getting better, and I\u2019ll help. For the depression itself: I\u2019d suggest talking therapy, which I can refer you to, and we can talk about an antidepressant if you want one. The fit note is part of the plan, not the whole of it \u2014 time off plus actual support."' },
      { lbl:'Safety-net + follow-up', txt:'"This matters: if those thoughts get stronger, or you find yourself thinking about how or when, I want you to ring \u2014 I\u2019ll give you the urgent numbers and the crisis line, and that\u2019s a 999/A&E thing if you ever feel you can\u2019t keep yourself safe. I don\u2019t want to leave it long \u2014 let\u2019s talk again within a week or two. You came in for a note; what you\u2019re leaving with is a plan and people in your corner."' },
    ],
    learning:'A request for "a sick note for work stress" in a withdrawn young man can be the only door he can bring himself to open. The skill is to look beyond the request: recognise the moderate depressive episode (pervasive low mood/anhedonia >2 weeks with biological features \u2014 early waking, weight loss, poor concentration, withdrawal, loss of valued activities) and NOT simply process the note and end the consultation. The non-negotiable task is an EXPLICIT suicide-risk assessment \u2014 ask directly about thoughts of being better off dead, active ideation, plan, intent, means and protective factors (asking does not increase risk) \u2014 alongside severity, the relationship-breakup trigger and the alcohol that worsens both mood and risk. The examinable hidden agenda is male stigma: he cannot say "I\u2019m depressed" or "I\u2019ve had dark thoughts", so the note is a legitimate entry point and a test of whether the doctor looks past it. Create safety so he drops the "just stress" framing, name depression without stigma, negotiate an evidence-based plan (Talking Therapies/SSRI, the note as part of care, alcohol, reconnection), and safety-net robustly with crisis routes and early follow-up.',
    knowledge:{
      guideline:'NICE NG222 depression in adults · NICE self-harm/suicide-risk guidance · NHS Talking Therapies',
      points:[
        { h:'Look past the presenting request', t:'Somatic or administrative requests ("sick note", "something to sleep", "I\u2019m just stressed") frequently mask depression, especially in men who find it hard to name low mood. Explore beyond the request; a fit note is a legitimate part of care but not a substitute for assessment.' },
        { h:'Diagnose depression', t:'Core features: persistent low mood and/or anhedonia for \u22652 weeks, with associated symptoms (sleep change \u2014 classically early-morning waking; appetite/weight change; fatigue; poor concentration; worthlessness/guilt; psychomotor change; suicidal thoughts). Assess severity and functional impact (PHQ-9 can support, not replace, clinical judgement).' },
        { h:'Explicit suicide-risk assessment', t:'Ask directly: passive thoughts (better off dead / not wanting to wake up), active ideation, plan, intent, means, access to means, preparatory acts, previous attempts/self-harm, and protective factors. Asking about suicide does NOT plant the idea or increase risk \u2014 it is essential and must be documented.' },
        { h:'Address alcohol and modifiers', t:'Alcohol is a depressant that worsens mood and disinhibits suicidal behaviour; assess and address it. Consider other contributors (relationship loss, isolation, work, finances) and comorbidity.' },
        { h:'Evidence-based management', t:'For moderate depression: offer psychological therapy (NHS Talking Therapies/IAPT) and/or an antidepressant (e.g. an SSRI) with informed discussion of benefits, side effects and the early-weeks risk period. Use the fit note appropriately, encourage behavioural activation, exercise and social reconnection, and arrange follow-up.' },
        { h:'Tackle male stigma', t:'Normalise depression as a common, treatable illness (not weakness); validate help-seeking. Reducing shame is what converts a one-off note request into engagement with treatment.' },
        { h:'Never do', t:'Never sign a fit note and end the consultation without assessing mood and risk; never avoid the explicit suicide questions; never ignore escalating alcohol; never leave a patient with passive suicidal thoughts without a safety plan and crisis routes; never under-follow-up.' },
        { h:'Safety-net & follow-up', t:'Crisis routes (111 option 2 / local crisis team / A&E / 999) if thoughts intensify or a plan emerges; a safety plan; early review (commonly within 1\u20132 weeks, sooner if higher risk); documented risk assessment; Talking Therapies referral and treatment review.' }
      ]
    }
  };

  /* ============ 95. TELEPHONE — Alcohol dependence + the DVLA/occupational duty ============ */
  const c95 = {
    id:'alcohol-dvla-driver', title:'"I just need the disulfiram, not a load of questions"', type:'telephone', duration:12,
    meta:{ age:51, sex:'M', setting:'Telephone \u2014 bus driver requesting help to stop drinking.', system:'Addiction / Alcohol dependence & the DVLA duty' },
    brief:'Mr Gordon Slater, 51, a BUS DRIVER (vocational/Group 2 licence), rings wanting "a tablet to help me stop drinking \u2014 disulfiram or whatever". If explored: physically dependent \u2014 drinks ~half a bottle of spirits daily, morning shakes relieved by alcohol, drinking before/around shifts at times. Wants to sort it quietly without "the DVLA or work finding out". He is still driving the bus. No road incident yet. PMH: hypertension. Meds: amlodipine. Frightened of losing his job.',
    script:{
      opening:'"Morning doc. Look, I\u2019ll be straight \u2014 I know the drink\u2019s got on top of me and I want to stop. I just need you to give me one of them tablets that makes you sick if you drink, the disulfiram, and I\u2019ll sort myself out. The main thing is I don\u2019t want a big song and dance, and definitely nothing going to the DVLA or my work \u2014 I drive buses, it\u2019s my livelihood. Can you just prescribe it and keep it between us?"',
      facts:[
        { topic:'The dependence',      text:'If explored: physical alcohol dependence \u2014 ~half a bottle of spirits daily, morning shakes/sweats relieved by drinking (relief drinking), tolerance, and at times drinking before or around shifts. Abrupt unsupported cessation risks withdrawal seizures/DTs; disulfiram alone "to sort himself out" is unsafe and inappropriate without a structured assessment and support.' },
        { topic:'The PUBLIC-SAFETY / DVLA crux', text:'CRITICAL \u2014 he is a vocational (Group 2) driver of a BUS, still driving, with alcohol dependence and drinking around shifts. Alcohol dependence/misuse must be notified to the DVLA and bars driving until specific criteria are met (period of controlled drinking/abstinence, etc.); a Group 2 licence has stricter rules. There is a public-safety duty. He must be advised to STOP driving and to inform the DVLA; if he continues to drive against advice and cannot be persuaded, the GMC permits breaking confidentiality to inform the DVLA to protect the public.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the "just the tablet, keep it quiet" is driven by terror of losing his job and his identity (sole earner, driving is "all he knows"), and shame. Underneath he is frightened and genuinely wants to stop, but the fear of the DVLA/work consequences is making him seek a shortcut that bypasses the very safety issue. The skill is to engage his motivation while holding the public-safety line compassionately.' },
        { topic:'The clinical danger',  text:'Beyond the licence: physical dependence needs assessment for medically-assisted withdrawal (benzodiazepine regimen + thiamine), not a solo disulfiram start. Disulfiram requires abstinence first, supervision, and caution \u2014 it is not a "sort myself out quietly" drug.' },
        { topic:'What he wants',        text:'Officially: a quiet disulfiram prescription, no DVLA/work involvement. What he needs: a proper dependence assessment and safe, supported treatment (specialist alcohol service, medically-assisted withdrawal), AND honest handling of the DVLA/public-safety duty \u2014 advise stop driving + notify DVLA, with confidentiality breakable as a last resort if he keeps driving and won\u2019t notify.' },
      ],
      ice:{
        ideas:'A tablet (disulfiram) will let him quietly stop drinking on his own, without anyone finding out.',
        concerns:'HIDDEN AGENDA \u2014 terror of losing his bus-driving job and identity (sole earner), and shame; the fear of DVLA/work consequences is driving him to seek a shortcut that bypasses the safety issue.',
        expectations:'A quiet disulfiram prescription with no DVLA/work involvement. What he actually needs: proper dependence assessment and safe supported treatment, plus honest handling of the DVLA/public-safety duty.'
      },
      cues:['Bus driver + alcohol dependence + drinking around shifts, still driving \u2014 a public-safety/DVLA duty, not a "keep it quiet" tablet.','Morning shakes relieved by alcohol \u2014 physical dependence; abrupt/solo cessation and lone disulfiram are unsafe.','"Don\u2019t want the DVLA or work finding out" \u2014 fear driving the shortcut; engage motivation but hold the safety line.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises physical ALCOHOL DEPENDENCE (relief/morning drinking, tolerance, shakes) and that this needs a proper assessment and structured, supported treatment \u2014 NOT a stand-alone disulfiram prescription "to sort himself out", which is unsafe (disulfiram requires abstinence, supervision and caution; abrupt cessation risks withdrawal seizures/DTs needing medically-assisted withdrawal + thiamine)' },
      { dom:'tasks', text:'Identifies the PUBLIC-SAFETY / DVLA issue as central: a vocational (Group 2) BUS driver with alcohol dependence, drinking around shifts and still driving \u2014 and knows alcohol dependence must be reported to the DVLA and precludes driving until criteria are met (stricter for Group 2)' },
      { dom:'tasks', text:'Advises him clearly that he must STOP driving the bus and INFORM the DVLA (and that he should not drive while dependent/around alcohol), explaining why \u2014 the risk to passengers and the public \u2014 and the occupational-health implications' },
      { dom:'tasks', text:'Knows the CONFIDENTIALITY position: if he continues to drive against advice and cannot be persuaded to stop/notify, the GMC permits disclosure to the DVLA to protect the public (after attempting to persuade and informing him of the intention to disclose) \u2014 and applies this proportionately, as a last resort' },
      { dom:'tasks', text:'Refers to specialist ALCOHOL services for assessment and medically-assisted withdrawal/relapse-prevention, gives thiamine, and addresses comorbidity \u2014 a structured plan, not a single drug' },
      { dom:'rto',   text:'Engages his genuine motivation to stop and handles the job-loss fear and shame with compassion, while NOT colluding with "keep it quiet" in a way that bypasses public safety' },
      { dom:'rto',   text:'Holds the safety/legal line kindly and clearly, framing stopping driving and notifying DVLA as the responsible path that also protects him, and supports him through the occupational consequences (sick note, OH, finances)' },
      { dom:'gs',    text:'Safety-nets and documents: withdrawal danger advice (don\u2019t stop abruptly alone; seizure/DT red flags), the DVLA advice given and the confidentiality position, specialist referral, follow-up, and clear documentation of the public-safety discussion' },
    ],
    worked:[
      { lbl:'Honour the motivation',  txt:'"First \u2014 well done for ringing and saying you want to stop. That\u2019s genuinely the hardest part, and I\u2019m going to help you do it properly. But I can\u2019t just hand over disulfiram, and I want to be honest about why, because doing this safely matters as much as doing it at all."' },
      { lbl:'Why not just the tablet',txt:'"Two things. One, your body sounds physically dependent \u2014 the morning shakes that a drink settles \u2014 and stopping suddenly on your own can cause fits or a dangerous confused state; that needs medical support, not willpower and a tablet. Two, disulfiram only works once you\u2019ve already stopped and with supervision; on its own it\u2019s not safe. So the right path is a proper assessment with the alcohol team, who can do this safely."' },
      { lbl:'The hard part: the bus', txt:'"Now the bit you didn\u2019t want to hear, and I have to be straight because it\u2019s about other people\u2019s safety as well as yours. You drive a bus, and you\u2019ve been drinking around your shifts. With alcohol dependence you\u2019re not safe to be driving passengers, and the law requires that the DVLA is told. I\u2019m asking you to stop driving the bus now and to notify the DVLA yourself."' },
      { lbl:'Hold the line, kindly',  txt:'"I know that feels like the end of everything \u2014 your job, your livelihood \u2014 and I\u2019m not waving that away; we\u2019ll get you a sick note and support, and many people get their licence back once they\u2019re well and meet the criteria. But I can\u2019t keep this quiet if it means you keep driving a bus full of people while dependent. If you carried on against my advice and wouldn\u2019t tell the DVLA, I\u2019d have a duty to inform them myself to protect the public \u2014 I\u2019d always tell you first, and I\u2019d much rather we did it together, your way."' },
      { lbl:'The real plan',          txt:'"So here\u2019s what actually helps: I\u2019ll refer you urgently to the alcohol service for a safe, supported withdrawal \u2014 medication to cover the danger and vitamins to protect your brain \u2014 and relapse-prevention after, which may include disulfiram or another medicine, properly supervised. We sort the work side honestly with a sick note and occupational health. You stop the drink AND you stop safely."' },
      { lbl:'Safety-net',           txt:'"Important: don\u2019t go cold turkey on your own before that assessment \u2014 if you get bad shakes, sweats, see things, or feel a fit coming, that\u2019s 999. I\u2019ll get the referral moving today and follow you up closely. You rang wanting to sort this quietly with a tablet; what I\u2019m giving you is the way to actually beat it \u2014 safely, and without putting anyone at risk on the way."' },
    ],
    learning:'A bus driver asking quietly for disulfiram "to sort himself out" raises two intertwined duties. Clinically: he has physical alcohol dependence (relief/morning drinking, shakes), so a stand-alone disulfiram prescription is unsafe and inappropriate \u2014 disulfiram requires established abstinence and supervision, and abrupt unsupported cessation risks withdrawal seizures/DTs; the right path is specialist assessment for medically-assisted withdrawal (benzodiazepine regimen + thiamine) and structured relapse prevention. The examinable core is the PUBLIC-SAFETY/DVLA duty: a vocational (Group 2) driver, drinking around shifts and still driving, with alcohol dependence \u2014 which must be notified to the DVLA and precludes driving until criteria are met. Advise him to STOP driving and notify the DVLA; and know the confidentiality position \u2014 if he continues to drive against advice and won\u2019t notify, the GMC permits disclosure to the DVLA to protect the public, after attempting persuasion and informing him. The hidden agenda is terror of losing his job, driving the "keep it quiet" shortcut; engage his real motivation, hold the safety line compassionately, support the occupational consequences, and safety-net the withdrawal danger.',
    knowledge:{
      guideline:'DVLA Assessing fitness to drive (alcohol) · GMC confidentiality \u2014 disclosure to protect the public / DVLA · NICE CG115 alcohol-use disorders',
      points:[
        { h:'Assess dependence; don\u2019t hand over disulfiram', t:'Relief/morning drinking to stop shakes, tolerance and escalating use indicate physical dependence. Abrupt, unsupported cessation risks withdrawal seizures and delirium tremens. Disulfiram is a relapse-prevention agent requiring established abstinence, supervision and caution \u2014 not a stand-alone "sort myself out" drug. Refer for specialist assessment and medically-assisted withdrawal with thiamine.' },
        { h:'The DVLA duty (driver)', t:'Alcohol dependence or persistent misuse must be notified to the DVLA and precludes driving until defined criteria are met (a period of controlled drinking or abstinence, with evidence, and medical review). Group 2 (vocational \u2014 buses/lorries) standards are stricter and disqualification periods longer. Advise the patient of their legal duty to inform the DVLA and to stop driving.' },
        { h:'Public-safety priority for a vocational driver', t:'A bus driver who is alcohol-dependent and drinking around shifts is an immediate public-safety concern. Advise them clearly to stop driving now, notify the DVLA, and (with consent) engage occupational health. The safety of passengers and the public is paramount.' },
        { h:'Confidentiality \u2014 disclosure as a last resort', t:'GMC guidance: if a patient with a condition affecting fitness to drive continues to drive when not fit to, you should make every effort to persuade them to stop and to notify the DVLA; if they cannot be persuaded and continue to drive, you may disclose relevant medical information to the DVLA medical adviser to protect the public \u2014 ideally after informing the patient of your intention to do so.' },
        { h:'Structured treatment', t:'Refer to community alcohol services for assessment, medically-assisted withdrawal (benzodiazepine regimen) and relapse prevention (acamprosate, naltrexone, or supervised disulfiram). Give thiamine to prevent Wernicke\u2019s. Address comorbidity, mood and social/occupational support.' },
        { h:'Engage motivation, support the consequences', t:'Honour the patient\u2019s wish to stop; handle job-loss fear and shame with compassion. Support the occupational fallout (fit note, OH, finances) and frame stopping driving + notifying DVLA as responsible and recoverable (licences are often regained once well and criteria met).' },
        { h:'Never do', t:'Never prescribe stand-alone disulfiram for unassessed dependence; never collude with "keep it quiet" in a way that lets a dependent vocational driver keep driving; never ignore the DVLA notification duty; never breach confidentiality without first attempting persuasion and informing the patient; never advise abrupt solo cessation.' },
        { h:'Safety-net & follow-up', t:'Withdrawal danger advice (no abrupt solo cessation; seizure/DT red flags \u2192 999); specialist alcohol referral and thiamine; DVLA advice given and documented, with the confidentiality position; occupational support; close follow-up; clear documentation of the public-safety discussion.' }
      ]
    }
  };

  /* ============ 96. VIDEO — Health anxiety / GAD: the serial reassurance-seeker ============ */
  const c96 = {
    id:'health-anxiety-gad', title:'"I\u2019m sure it\u2019s something serious this time"', type:'video', duration:12,
    meta:{ age:38, sex:'F', setting:'Video consultation \u2014 frequent attender convinced of serious illness.', system:'Mental health / Health anxiety & GAD' },
    brief:'Mrs Nadia Karim, 38, frequent attender. Books about headaches, palpitations, tingling and fatigue, convinced she has a brain tumour or MS. Extensive recent normal investigations (bloods, ECG, even a recent normal CT head requested privately). Constantly googles symptoms, checks her body, seeks repeated reassurance that never lasts. If explored: generalised worry, poor sleep, muscle tension, irritability for months; a friend died suddenly last year. Wants "more scans to be sure". PMH: nil. Meds: none.',
    script:{
      opening:'"Thank you for seeing me. I know I\u2019ve been in a lot, but this time I\u2019m really worried \u2014 the headaches, my heart races, I get tingling, I\u2019m exhausted. I\u2019ve read it could be a brain tumour or MS. I know my last scan was normal but that was weeks ago, things change, don\u2019t they? I really think I need another scan, or to see a neurologist, just to be completely sure. I can\u2019t relax until I know it\u2019s not something serious."',
      facts:[
        { topic:'The pattern',         text:'If explored: months of generalised, free-floating worry (not just about health), muscle tension, restlessness, poor sleep, irritability, fatigue, and somatic anxiety symptoms (palpitations, tingling/paraesthesia from hyperventilation, tension headaches). Repeated normal investigations; reassurance helps only briefly before the worry re-attaches to a new symptom/diagnosis. This is health anxiety, often with underlying generalised anxiety disorder.' },
        { topic:'The reassurance trap', text:'She seeks scans/specialists for certainty; each normal result calms her only fleetingly, then doubt returns ("things change"). Repeated testing and reassurance REINFORCE the anxiety cycle. The challenge is to redirect from "more tests" to treating the anxiety \u2014 without dismissing her or missing genuine new pathology.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the health anxiety crystallised after a close FRIEND DIED SUDDENLY last year (a brain aneurysm/"young and healthy"), and Nadia is terrified the same will happen to her, leaving her own children motherless. The bodily checking and scan-seeking are attempts to control that terror. She hasn\u2019t connected the bereavement to her symptoms. There may be guilt/grief she hasn\u2019t processed.' },
        { topic:'The relationship/cost', text:'If reached: the constant worry and checking are exhausting her, straining her marriage ("he says I\u2019m obsessed"), and she feels ashamed and out of control \u2014 but more scans feel like the only relief. Validating the distress as real (the symptoms ARE real, anxiety causes them) is key.' },
        { topic:'What she wants',       text:'Officially: another scan / a neurologist for certainty. What she needs: a confident, validating explanation linking her real symptoms to anxiety, the reassurance/testing cycle gently named, the bereavement trigger surfaced, and a shift toward treating the health anxiety/GAD (CBT, etc.) \u2014 with appropriate (not endless) safety-netting.' },
      ],
      ice:{
        ideas:'Her symptoms mean a serious undiagnosed disease (brain tumour/MS); more scans/specialists will finally make her sure.',
        concerns:'HIDDEN AGENDA \u2014 a close friend died suddenly last year ("young and healthy"); she\u2019s terrified the same will happen and leave her children motherless, and the checking/scan-seeking are attempts to control that terror.',
        expectations:'Another scan or a neurologist for certainty. What she actually needs: a validating explanation linking real symptoms to anxiety, the reassurance cycle named, the bereavement surfaced, and treatment of the health anxiety/GAD.'
      },
      cues:['Repeated normal tests + reassurance that never lasts + "things change, I need another scan" \u2014 the health-anxiety reassurance cycle.','Real somatic symptoms (palpitations, tingling, tension headache) + months of generalised worry \u2014 anxiety, not a tumour.','A friend who died suddenly last year \u2014 the bereavement trigger she hasn\u2019t connected to her fear.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises HEALTH ANXIETY (often with generalised anxiety disorder) from the pattern \u2014 repeated normal investigations, fleeting reassurance, bodily checking, catastrophic interpretation of benign somatic symptoms \u2014 rather than ordering another scan or onward referral for certainty' },
      { dom:'tasks', text:'VALIDATES that the symptoms are REAL and explains the mechanism: anxiety genuinely causes palpitations, paraesthesia (hyperventilation), tension headaches and fatigue \u2014 so she is not "imagining it" or "wasting time", but the cause is anxiety, not a tumour/MS' },
      { dom:'tasks', text:'Gently NAMES the reassurance/testing cycle: repeated tests and reassurance give brief relief but maintain the anxiety long-term, and another scan is unlikely to give lasting certainty \u2014 doing so without dismissing her or refusing all assessment of genuinely new symptoms' },
      { dom:'tasks', text:'Surfaces and addresses the HIDDEN TRIGGER (the friend\u2019s sudden death) and screens mood/risk; connects the bereavement and unprocessed grief/guilt to the onset of the health anxiety' },
      { dom:'tasks', text:'Redirects to evidence-based treatment of the anxiety: psychological therapy (CBT for health anxiety / NHS Talking Therapies), psychoeducation on the checking/Googling/reassurance-seeking maintaining factors, sleep, and consideration of an SSRI; with sensible, bounded safety-netting (clear which genuinely new red-flag symptoms would warrant review)' },
      { dom:'rto',   text:'Avoids both dismissiveness ("there\u2019s nothing wrong, stop worrying") and collusion (endless scans); holds a warm, validating, confident stance that keeps her engaged and trusting' },
      { dom:'rto',   text:'Explores the impact (exhaustion, marriage strain, shame) and the bereavement with compassion, framing treatment as getting her life back from the worry' },
      { dom:'gs',    text:'Safety-nets proportionately and follows up: which specific NEW red-flag symptoms would warrant assessment (so she\u2019s not abandoned), a referral for psychological therapy, an agreed plan to reduce checking/reassurance-seeking, and a follow-up that treats the anxiety as the diagnosis' },
    ],
    worked:[
      { lbl:'Validate the symptoms',  txt:'"First, I want to be clear about something important: your symptoms are REAL. The racing heart, the tingling, the headaches, the exhaustion \u2014 you\u2019re genuinely feeling all of those, you\u2019re not imagining it and you\u2019re not wasting my time. So let\u2019s take them seriously and work out what\u2019s actually causing them."' },
      { lbl:'Explain the mechanism',  txt:'"Here\u2019s the thing the scans have been telling us: your brain and body are fine on every test. What DOES cause exactly this combination \u2014 the palpitations, the tingling in your hands and face, the tension headaches, the tiredness \u2014 is anxiety. When we\u2019re in a constant state of worry, the body pumps out adrenaline and we over-breathe, and that produces every single one of those symptoms. It\u2019s not a tumour or MS; it\u2019s anxiety, and that is genuinely good news because it\u2019s very treatable."' },
      { lbl:'Name the cycle, kindly', txt:'"Can I gently point something out? Each scan calms you for a little while, then the worry comes back and latches onto the next symptom. That\u2019s not a failing \u2014 it\u2019s exactly how health anxiety works: reassurance feels great for a day, then fades, so we seek more. Another scan would do the same. The way out isn\u2019t more tests; it\u2019s treating the anxiety itself."' },
      { lbl:'Surface the trigger',    txt:'"Can I ask \u2014 when did all this really ramp up? \u2026 Your friend, who died suddenly last year. I\u2019m so sorry. That makes complete sense of everything. When someone young and healthy dies out of the blue, it shatters the feeling that our bodies are safe, and the mind tries to regain control by checking and scanning for danger. Your fear isn\u2019t random \u2014 it has a cause, and that\u2019s something we can work with."' },
      { lbl:'Redirect to treatment',  txt:'"So instead of another scan, what genuinely helps is a type of talking therapy designed for exactly this \u2014 it helps your mind stop sounding the alarm over normal body sensations, and gently reduces the checking and Googling that feed it. I can refer you. We can also talk about a medication that helps with anxiety if you\u2019d like. This is the path that actually gives you lasting peace, not the next scan."' },
      { lbl:'Bounded safety-net',     txt:'"And I\u2019m not abandoning you or saying \u2018never come back\u2019. If you get genuinely NEW things \u2014 like weakness down one side, loss of vision, a sudden \u2018worst-ever\u2019 headache \u2014 those I\u2019d want to see. But the day-to-day symptoms we now understand, and chasing them with scans keeps you trapped. Let\u2019s treat the worry, get you sleeping, take the strain off you and your husband, and I\u2019ll see you to follow this through. You deserve to feel safe in your own body again."' },
    ],
    learning:'Health anxiety (often with generalised anxiety disorder) presents as repeated normal investigations, fleetingly-effective reassurance, bodily checking and catastrophic interpretation of benign somatic symptoms \u2014 and the trap is to order another scan or refer for "certainty", which reinforces the cycle. The skill set: VALIDATE that the symptoms are real (anxiety genuinely causes palpitations, paraesthesia from hyperventilation, tension headaches and fatigue \u2014 she is not imagining it), explain the mechanism confidently, and gently NAME the reassurance/testing cycle (brief relief, long-term maintenance) without dismissing her or refusing to assess genuinely new red-flags. The examinable hidden agenda is the trigger \u2014 a close friend\u2019s sudden death \u2014 which shattered her sense of bodily safety; surface it, connect it, screen mood/grief, and redirect to evidence-based treatment (CBT for health anxiety/NHS Talking Therapies, psychoeducation on checking/Googling/reassurance-seeking, sleep, consider an SSRI). Avoid both poles \u2014 dismissiveness ("nothing wrong, stop worrying") and collusion (endless scans) \u2014 and safety-net proportionately with specific new red-flag symptoms so she is treated, not abandoned.',
    knowledge:{
      guideline:'NICE CG113 generalised anxiety disorder · health-anxiety (hypochondriasis) CBT evidence · NHS Talking Therapies',
      points:[
        { h:'Recognise the pattern', t:'Health anxiety: persistent preoccupation with having a serious illness, catastrophic misinterpretation of normal/benign bodily sensations, repeated checking and reassurance-seeking, and transient relief from negative tests. Often coexists with GAD (free-floating worry, restlessness, muscle tension, sleep disturbance, irritability, fatigue). Frequent attendance with shifting symptoms is characteristic.' },
        { h:'Validate \u2014 the symptoms are real', t:'Anxiety produces genuine physical symptoms via autonomic arousal and hyperventilation: palpitations, chest tightness, paraesthesia, dizziness, tension headache, fatigue, GI upset. Affirm that the patient is not imagining or fabricating; reframe the CAUSE as anxiety, not occult disease. Dismissiveness ("nothing is wrong") ruptures trust and worsens the cycle.' },
        { h:'Name the reassurance/testing cycle', t:'Repeated investigations and reassurance relieve anxiety briefly but reinforce it long-term and risk iatrogenic harm (incidental findings, more tests). Gently explain this and resist the pull to over-investigate \u2014 while still assessing genuinely new or red-flag symptoms appropriately.' },
        { h:'Find the trigger and screen mood', t:'Health anxiety often crystallises around a trigger (a bereavement, a personal/ family health scare). Surface it, connect it to the onset, and screen for depression, panic and risk. Unprocessed grief may need addressing in its own right.' },
        { h:'Evidence-based treatment', t:'CBT specifically for health anxiety is effective (addresses catastrophic misinterpretation, checking, reassurance-seeking and avoidance); refer to NHS Talking Therapies. Psychoeducation, reducing checking/Googling, sleep and lifestyle help; an SSRI can be offered for health anxiety/GAD. Agree a consistent plan (a single named clinician, bounded reviews) to reduce fragmented over-testing.' },
        { h:'Hold the middle ground', t:'Avoid the two failure modes: dismissiveness (loses trust, escalates anxiety) and collusion (endless scans/referrals, reinforces illness belief). A warm, confident, validating stance that redirects to treating the anxiety is what works.' },
        { h:'Never do', t:'Never order another scan/referral purely to provide certainty; never dismiss the symptoms as "nothing"/"in your head"; never miss the bereavement trigger or comorbid depression/risk; never give unbounded reassurance that feeds the cycle; never abandon the patient without a proportionate safety-net.' },
        { h:'Safety-net & follow-up', t:'Specify genuinely new red-flag symptoms that would warrant assessment (so the patient isn\u2019t abandoned); refer for CBT/Talking Therapies; agree to reduce checking/reassurance-seeking; arrange consistent follow-up that treats the anxiety as the diagnosis.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c93, c94, c95, c96);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'postnatal-depression': {
      ceg: ['Gender, reproductive & sexual health', 'Mental health & addiction'],
      stem: {
        name: 'Aisha Rahman', age: '30 years · female',
        pmh: ['8 weeks postnatal (first baby; difficult forceps delivery)', 'Low mood >3 weeks, anhedonia, not bonding, intrusive frightening thoughts', 'Breastfeeding'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '⚠ Partner urged her to book ("not herself, crying, not bonding"). Minimises as tiredness.',
        reason: 'Video consultation — postnatal mood, brought by her partner.'
      },
      timeMap: [
        { t:'0–2',  h:'Believe the signal',  d:'Partner\u2019s concern is reliable. Don\u2019t just "tell him she\u2019s fine" — check how SHE really is, unhurried.' },
        { t:'2–4',  h:'Name PND, gently',     d:'Pervasive low mood >2 weeks, not bonding, guilt = postnatal depression, not baby blues (which lifts by ~2 weeks). Common, treatable, not failure.' },
        { t:'4–7',  h:'Explicit risk',        d:'Ask directly: better-off-without-me thoughts; intrusive thoughts of harm to the baby; ability to care. Screen puerperal-psychosis red flags. Having the thoughts ≠ dangerous.' },
        { t:'7–9',  h:'Dismantle the fear',   d:'The "they\u2019ll take my baby" terror drives the concealment. Honestly: help keeps mother and baby together; seeking help is the protective, good-mother act.' },
        { t:'9–12', h:'Plan + safety-net',    d:'Perinatal/IAPT, talking therapy, breastfeeding-safe sertraline if moderate+, health visitor, partner; crisis routes if thoughts of harm escalate; close follow-up.' }
      ],
      wordPics: {
        fail: 'Accepts "just tired", reassures and tells the partner she\u2019s fine; never does the self/baby risk assessment, never screens puerperal psychosis, and leaves the intrusive thoughts and the child-removal fear unspoken — missing a dangerous, treatable illness.',
        pass: 'Recognises postnatal depression, does a risk assessment, screens psychosis red flags, and refers to the perinatal pathway with follow-up.',
        exc:  'Treats the partner\u2019s concern as reliable and creates safety to disclose; names PND warmly; does an explicit self-and-baby risk assessment and screens puerperal psychosis; dismantles the "they\u2019ll take my baby" fear honestly so the intrusive thoughts surface; and builds a supportive perinatal plan (therapy, breastfeeding-safe medication, health visitor, partner) with robust risk-based safety-netting.'
      },
      avoid: [
        { dont:'"All new mums are exhausted — try to rest more and you\u2019ll feel better."', instead:'"Crying for weeks, not sleeping even when the baby does, feeling detached — that\u2019s more than tiredness; it sounds like postnatal depression, which is common and very treatable."', why:'Normalising it as tiredness misses a treatable illness and the risk that comes with it.' },
        { dont:'"You\u2019re clearly a loving mum, so I\u2019m sure you\u2019d never have any dark thoughts."', instead:'"Some mums get frightening thoughts, even about the baby, that horrify them — have you had anything like that? Having them doesn\u2019t make you dangerous; it\u2019s a symptom we treat."', why:'Assuming away intrusive thoughts prevents the very disclosure that the risk assessment depends on.' },
        { dont:'"I\u2019ll just let your health visitor know and they\u2019ll keep an eye on you."', instead:'"Let me be clear this is about helping you get well and stay with your baby — not taking anything away. Here\u2019s the plan and the crisis numbers if those darker thoughts get stronger."', why:'Vague hand-off without dismantling the child-removal fear leaves her too frightened to engage and the risk unmanaged.' }
      ]
    },

    'depression-first-risk': {
      ceg: ['Mental health & addiction', 'New & undifferentiated presentations'],
      stem: {
        name: 'Jordan Pryce', age: '26 years · male',
        pmh: ['~3 months low mood, anhedonia, early waking, weight loss, withdrawn', 'Recent relationship breakup; drinking more, alone', 'No prior mental-health contact'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Books for "a sick note — work stress"; flat, avoids eye contact.',
        reason: 'Video consultation — requesting a fit note.'
      },
      timeMap: [
        { t:'0–2',  h:'Don\u2019t just sign',   d:'The note is the door. Before signing, ask how he\u2019s really doing — beyond work.' },
        { t:'2–4',  h:'Name depression',      d:'3 months of anhedonia, early waking, weight loss, stopped football = depression, not stress. Illness, not weakness — reduce male stigma.' },
        { t:'4–7',  h:'Explicit suicide risk', d:'Ask directly: better-off-dead/not-waking thoughts; active ideation, plan, intent, means; protective factors. Asking doesn\u2019t plant ideas.' },
        { t:'7–9',  h:'Alcohol + plan',        d:'Drinking alone deepens mood and risk. Talking Therapies ± SSRI; the note as part of care; reconnection.' },
        { t:'9–12', h:'Safety-net + follow-up', d:'Crisis routes/111/A&E if thoughts intensify or a plan emerges; safety plan; review within 1–2 weeks; document the risk assessment.' }
      ],
      wordPics: {
        fail: 'Signs the fit note and ends the consultation; never explores mood, never asks the explicit suicide questions, misses the depression, the breakup, the drinking and the passive suicidal thoughts entirely.',
        pass: 'Looks past the note, recognises depression, does an explicit suicide-risk assessment, addresses alcohol, and offers Talking Therapies/SSRI with a safety-net.',
        exc:  'Treats the note as the door and creates safety so he drops "just stress"; names depression without stigma; performs an explicit suicide-risk assessment with protective factors; addresses the alcohol and breakup; negotiates an evidence-based plan; and safety-nets robustly with crisis routes and early follow-up.'
      },
      avoid: [
        { dont:'"No problem, I\u2019ll sign you off for two weeks for stress — feel better."', instead:'"I can do the note — but first, let\u2019s talk about how you\u2019re really doing, because what you\u2019re describing sounds like more than work stress."', why:'Processing the note and ending the consult misses the depression and the suicide risk underneath.' },
        { dont:'"You don\u2019t seem suicidal, so I won\u2019t worry you by asking about that."', instead:'"I ask everyone who feels this low: have you had thoughts you\u2019d be better off not here? Any thoughts of how, or plans? What stops you on the worst days?"', why:'Avoiding the explicit suicide questions (for fear of "planting ideas") leaves risk unassessed; asking is safe and essential.' },
        { dont:'"A few drinks to take the edge off is understandable — focus on the time off."', instead:'"Drinking alone is understandable but alcohol deepens both the low mood and the dark thoughts, so easing off is part of getting better — and I\u2019ll help."', why:'Minimising the alcohol overlooks a key factor worsening mood and suicide risk.' }
      ]
    },

    'alcohol-dvla-driver': {
      ceg: ['Professional & ethical dilemmas', 'Mental health & addiction'],
      stem: {
        name: 'Gordon Slater', age: '51 years · male',
        pmh: ['Physical alcohol dependence (~½ bottle spirits/day; morning shakes relieved by drink)', 'BUS driver (vocational/Group 2 licence); drinking around shifts; still driving', 'Hypertension (amlodipine)'],
        meds: ['Amlodipine'],
        allergy: 'NKDA',
        recent: '⚠ Wants disulfiram "to sort himself out" quietly; "nothing to the DVLA or work".',
        reason: 'Telephone — requesting a tablet to help stop drinking.'
      },
      timeMap: [
        { t:'0–2',  h:'Honour motivation',   d:'Wanting to stop is the hard part — help him properly. But not a stand-alone disulfiram script.' },
        { t:'2–4',  h:'Why not the tablet',   d:'Physical dependence: abrupt/solo cessation risks seizures/DTs; disulfiram needs abstinence + supervision. Specialist-supported withdrawal + thiamine.' },
        { t:'4–6',  h:'The DVLA/public-safety duty', d:'Vocational bus driver, drinking around shifts, still driving = must stop driving + notify DVLA; Group 2 rules stricter.' },
        { t:'6–9',  h:'Hold the line, kindly', d:'Job-loss fear is real — sick note, OH, licences often regained when well. But if he keeps driving against advice and won\u2019t notify, GMC permits disclosure to DVLA to protect the public (tell him first).' },
        { t:'9–12', h:'Real plan + safety-net', d:'Specialist alcohol referral, medically-assisted withdrawal, thiamine; document DVLA advice + confidentiality position; withdrawal red flags → 999; follow-up.' }
      ],
      wordPics: {
        fail: 'Prescribes stand-alone disulfiram for unassessed dependence and agrees to "keep it quiet" while a dependent bus driver keeps driving; ignores the DVLA duty and the public-safety risk; advises (or permits) unsafe solo cessation.',
        pass: 'Recognises dependence and refers for supported withdrawal, advises stopping driving and notifying the DVLA, and gives thiamine with a safety-net.',
        exc:  'Engages his motivation while refusing the unsafe stand-alone disulfiram; identifies the vocational-driver public-safety/DVLA duty and advises stop-driving + notify; holds the confidentiality line (disclosure as a last resort, after persuasion, telling him first); supports the job-loss fallout; and arranges specialist-supported withdrawal with thiamine and a withdrawal safety-net.'
      },
      avoid: [
        { dont:'"Sure, I\u2019ll prescribe the disulfiram and we\u2019ll keep it between us."', instead:'"I can\u2019t hand over disulfiram on its own — your body sounds dependent, which needs supported withdrawal, and I can\u2019t keep it quiet while you\u2019re driving a bus. Let\u2019s do this safely and properly."', why:'Stand-alone disulfiram for unassessed dependence is unsafe, and colluding lets a dependent bus driver keep driving.' },
        { dont:'"As long as you\u2019re cutting down, I won\u2019t involve the DVLA."', instead:'"With alcohol dependence and driving a bus, the law requires the DVLA is told and you need to stop driving now. If you kept driving against advice and wouldn\u2019t tell them, I\u2019d have to — I\u2019d always tell you first."', why:'Ignoring the DVLA notification duty for a dependent vocational driver endangers the public and breaches GMC guidance.' },
        { dont:'"You could just stop drinking at home over the weekend before you start it."', instead:'"Please don\u2019t go cold turkey alone — with dependence that can cause fits or a dangerous confused state. We\u2019ll arrange a safe, medically-supported withdrawal."', why:'Advising abrupt solo cessation in dependence risks withdrawal seizures and delirium tremens.' }
      ]
    },

    'health-anxiety-gad': {
      ceg: ['Mental health & addiction', 'New & undifferentiated presentations'],
      stem: {
        name: 'Nadia Karim', age: '38 years · female',
        pmh: ['Frequent attender; headaches, palpitations, tingling, fatigue', 'Convinced of brain tumour/MS; recent investigations (bloods, ECG, CT head) all normal', 'Months of generalised worry, muscle tension, poor sleep; a friend died suddenly last year'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Wants "more scans / a neurologist to be sure"; constant Googling and body-checking.',
        reason: 'Video consultation — convinced it\u2019s "something serious this time".'
      },
      timeMap: [
        { t:'0–2',  h:'Validate the symptoms', d:'The palpitations, tingling, headaches are REAL — not imagined, not time-wasting. Take them seriously.' },
        { t:'2–4',  h:'Explain the mechanism', d:'Anxiety/hyperventilation genuinely cause exactly these symptoms; every scan is normal. Not a tumour/MS — and that\u2019s good news, it\u2019s treatable.' },
        { t:'4–6',  h:'Name the cycle',        d:'Reassurance/scans relieve briefly then the worry re-attaches. Another scan does the same. The way out is treating the anxiety, not more tests.' },
        { t:'6–9',  h:'Surface the trigger',   d:'The friend\u2019s sudden death shattered her sense of bodily safety. Connect it; screen mood/grief.' },
        { t:'9–12', h:'Redirect + bounded net', d:'CBT for health anxiety/Talking Therapies ± SSRI; reduce checking/Googling; specify genuinely NEW red-flags that WOULD warrant review; consistent follow-up — treat, don\u2019t abandon.' }
      ],
      wordPics: {
        fail: 'Either orders another scan/neurology referral to reassure her (feeding the cycle) or dismisses her with "there\u2019s nothing wrong, stop worrying" (rupturing trust); never validates the real symptoms, never names the cycle, never surfaces the bereavement.',
        pass: 'Recognises health anxiety, validates the symptoms, explains the mechanism, redirects to CBT/Talking Therapies, and gives a proportionate safety-net.',
        exc:  'Validates the symptoms as real and explains the anxiety mechanism confidently; gently names the reassurance/testing cycle without dismissing her; surfaces and connects the friend\u2019s-death trigger and screens mood; redirects to CBT for health anxiety; and holds the middle ground with a bounded, specific safety-net so she\u2019s treated, not abandoned.'
      },
      avoid: [
        { dont:'"To put your mind at rest, let\u2019s arrange another scan and a neurology referral."', instead:'"Another scan would calm you for a day then the worry would return — that\u2019s how health anxiety works. The lasting fix is treating the anxiety, not more tests."', why:'Ordering tests for certainty reinforces the health-anxiety cycle and risks iatrogenic harm.' },
        { dont:'"All your tests are normal — there\u2019s nothing wrong, you need to stop worrying."', instead:'"Your symptoms are real — anxiety genuinely causes the palpitations, tingling and headaches. You\u2019re not imagining it; the cause is anxiety, not a tumour, and that\u2019s treatable."', why:'Dismissiveness ruptures trust and worsens the anxiety; validation-plus-mechanism keeps her engaged.' },
        { dont:'"Let\u2019s not dwell on your friend — focus on your own health."', instead:'"When did this ramp up? \u2026 Your friend\u2019s sudden death. That makes sense of the fear — it shattered your sense that bodies are safe. That\u2019s exactly what we can work on."', why:'Skipping the bereavement trigger misses the root of the health anxiety and the chance to address it.' }
      ]
    }
  });

})();
