/* ============================================================
   Reasoning GP — Case Library batch 55:
   "Uncontrolled asthma & undifferentiated breathlessness"
   Filling 4 live-linked gaps: SABA overuse / the MART conversation;
   the post-A&E asthma review and the adherence truth; breathlessness
   in a young adult where anxiety is a diagnosis of EXCLUSION; and
   snoring + daytime sleepiness (OSA, Epworth, the DVLA duty).
   No NG12 cancer pathway genuinely applies to these; none invented
   (red-flag safety-netting included instead).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases54.js.
   ============================================================ */

(function(){

  /* ============ 192. F2F — SABA overuse: the 7th salbutamol & the MART conversation ============ */
  const c192 = {
    id:'asthma-saba-overuse', title:'"I just need another blue inhaler \u2014 I get through them, but they sort me out"', type:'video', duration:12,
    meta:{ age:24, sex:'F', setting:'Video consultation \u2014 a reliever-inhaler request flagged on records.', system:'Respiratory \u2014 asthma control: SABA overuse as a risk marker & MART', checked:'October 2026' },
    brief:'Miss Tanya Brooks, 24, asthmatic, requests another salbutamol \u2014 records show she has ordered her SEVENTH in 12 months and rarely collects her preventer (inhaled corticosteroid). She feels "fine" because the blue inhaler "sorts me out". The examinable task is to recognise SABA OVERUSE as a RED-FLAG marker of POORLY CONTROLLED asthma and increased risk of death (MHRA Drug Safety Update, April 2025: 3 or more SABA inhalers a year is associated with more exacerbations, and anyone needing a reliever more than twice a week needs review; the National Review of Asthma Deaths, RCP 2014, found many of those who died had been prescribed more than 12 relievers in the year before death), not a benign request: ASSESS control (NICE NG245, 2024: prescription records for reliever, preventer and oral-steroid issues, a validated questionnaire such as the Asthma Control Test or Asthma Control Questionnaire, symptom frequency, night waking, activity limitation, exacerbations/oral-steroid courses, prior attacks/admissions), screen risk factors and the SMART/MART rationale, CHECK adherence and inhaler TECHNIQUE and the real reason the preventer isn\u2019t used, and \u2014 the modern station \u2014 the marks are in RECOGNISING RISK and OPTIMISING the regimen (NICE NG245: after adherence and technique are addressed, low-dose ICS/formoterol MART as both preventer and reliever for someone aged 12 or over not controlled on low-dose ICS plus as-needed SABA) rather than just adding drugs. Personalised asthma action plan, triggers, smoking, follow-up. Honest handling of the "I feel fine" framing.',
    script:{
      opening:"(Breezy, in a hurry, slight wheeze when she laughs.) \"Hiya, can I just grab another blue inhaler? I do get through them, I'll admit, but they work — a couple of puffs and I'm grand. I don't really bother with the brown one, I only take that when I remember and I feel fine anyway, so it can't be that bad, can it?\"",
      facts:[
        { topic:"Reliever use", text:"\"Most days, if I'm honest. I don't really count\" — 2–3 times a day, more when cycling to work or in cold air. Gets through an inhaler roughly every 6–7 weeks." },
        { topic:"Night symptoms", text:"\"Sometimes I wake up coughing. I just use the blue one and go back to sleep. I'm used to it\" — 2–3 nights a week." },
        { topic:"Attacks", text:"\"I don't think so. Not that I remember\" — no A&E or hospital. If asked about steroid tablets: one course from an out-of-hours doctor last winter with a chest infection." },
        { topic:"The preventer", text:"Beclometasone (\"the brown one\") twice daily on repeat — collected twice this year. \"I thought it was for when it's bad. And I forget. It doesn't do anything when I take it, not like the blue.\" No concerns about steroids when asked." },
        { topic:"Triggers", text:"\"Not sure really. I don't pay much attention.\" If asked specifically: cold air, cats at her friend's, colds. Vapes occasionally at parties; doesn't smoke cigarettes. No ibuprofen problems." },
        { topic:"Technique — demonstrate on camera", text:"If asked to show: \"Like this… shake, puff, breathe in\" — fires the puffer then breathes in quickly afterwards; no breath-hold; no spacer." },
        { topic:"Background", text:"Asthma since childhood, eczema as a child. Hay fever. No other medicines; combined pill. No allergies. No asthma review for 2 years. Flu jab: no." },
        { topic:"Social", text:"Hairdresser, cycles to work. Lives with her boyfriend. Drinks at weekends." },
        { topic:"How to play it", text:"Cheerful and dismissive: \"Okay, as long as I get it.\" If told SABA overuse is a danger sign: \"Serious? It works though.\" Then: \"Nobody's really explained it like that.\" Likes the idea of one inhaler: \"So one inhaler instead of two? That's easier. Would I still have a blue one?\" If lectured, becomes defensive. If simply given the blue inhaler, leaves happy (the trap)." }
      ],
      ice:{
        ideas:"\"The blue inhaler works, so my asthma can't be that bad. The brown one is for when it's bad.\"",
        concerns:"She doesn't think there is a problem; she just doesn't want to run out. She has got used to symptoms as normal.",
        expectations:"\"Just the blue one so I don't run out.\""
      },
      cues:[
        "\"I do get through them.\" — reliever overuse, offered early.",
        "\"I'm used to it.\" — night symptoms normalised.",
        "\"It doesn't do anything when I take it.\" — the preventer misunderstanding."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises SABA OVERUSE (7th in 12 months) as a RED-FLAG marker of poorly controlled asthma and increased risk of severe attacks/death \u2014 not a benign reissue request' },
      { dom:'dg', text:'Assesses CONTROL properly — prescription records, a validated questionnaire (Asthma Control Test or Asthma Control Questionnaire), symptom/reliever frequency, night waking, activity limitation, exacerbations/oral-steroid courses, and prior attacks/A&E/admissions/ICU \u2014 rather than accepting "I feel fine"' },
      { dom:'ro', text:'Explains the PREVENTER (ICS treats underlying inflammation, reduces attacks/deaths; reliever only masks) and explores WHY it isn\u2019t taken (beliefs, technique, benefit, access), correcting the "fine on the blue" misconception' },
      { dom:'cm', text:'Optimises the REGIMEN per NICE NG245 — having addressed adherence and technique, moves her from low-dose ICS plus SABA to low-dose ICS–FORMOTEROL MART — reducing SABA reliance, rather than simply issuing another reliever' },
      { dom:'dg', text:'Checks inhaler TECHNIQUE, identifies triggers (smoking/allergens/NSAIDs/occupational), provides a PERSONALISED ASTHMA ACTION PLAN, checks flu vaccine eligibility (Green Book chapter 19), and arranges proactive review (spirometry/FeNO/step-up as indicated)' },
      { dom:'ro',   text:'Reframes SABA overuse as a danger signal clearly but without frightening her into disengagement, and reads the "I feel fine" as normalised risk/misconception rather than dismissing the request outright' },
      { dom:'ro',   text:'Explains the preventer/MART rationale in accessible terms, checks understanding (and technique teach-back), and supports adherence' },
      { dom:'cm',    text:'Safety-nets and follows up: red flags of an attack and when to seek emergency help, the action plan, regimen change with review of SABA use and control, and proactive recall \u2014 recognising and treating risk, not reissuing a reliever' },
    ],
    worked:[
      { lbl:'Use the request as an opening', txt:'"Of course we\u2019ll make sure you\u2019ve got a reliever \u2014 but can I be honest? Getting through seven blue inhalers in a year actually tells me your asthma isn\u2019t as well controlled as it feels, and that\u2019s worth a proper look, because it matters for your safety."' },
      { lbl:'Assess control', txt:'"Let me ask: do you wake at night coughing or wheezy? Does it stop you exercising or affect work? Have you needed steroid tablets or A&E in the last year? \u2026 Okay. Even though you feel \u2018used to it\u2019, those answers tell me there\u2019s room to feel a lot better."' },
      { lbl:'Correct the preventer myth', txt:'"Here\u2019s the key thing: the blue inhaler only relieves symptoms in the moment \u2014 it doesn\u2019t treat the inflammation underneath. The preventer does, and that\u2019s what reduces attacks and keeps you safe. \u2018Feeling fine on the blue\u2019 is exactly the trap, because it hides the problem."' },
      { lbl:'Offer the modern regimen', txt:'"The modern way makes this easier: one inhaler you take regularly that also works as your reliever \u2014 so every puff you take when wheezy also delivers the preventer. It cuts down attacks and means you\u2019re not relying on the blue alone. Shall we set that up?"' },
      { lbl:'Technique + plan', txt:'"Show me how you use it \u2026 let\u2019s tweak that. I\u2019ll give you a written action plan so you know what to do if it worsens, and we should look at triggers \u2014 smoking, allergies. Are you vaping or smoking at all?"' },
      { lbl:'Safety-net + recall', txt:'"If you\u2019re ever using the reliever more and more, breathless at rest, or it\u2019s not lasting, that\u2019s a warning \u2014 seek help, and 999 if you can\u2019t speak in sentences. Let\u2019s review you in a few weeks to see how the new inhaler\u2019s working and check your control properly."' },
    ],
    learning:'Frequent reliever (SABA) use is a RED-FLAG marker of poorly controlled asthma and increased risk of severe attacks and asthma DEATH \u2014 not a benign request: using 3 or more SABA inhalers a year is associated with more exacerbations and a reliever needed more than twice a week needs review (MHRA Drug Safety Update, April 2025), and the National Review of Asthma Deaths (RCP, 2014) found that many of those who died had been prescribed more than 12 relievers in the previous year, with preventer under-use. So a 7th salbutamol in 12 months with little preventer use demands ASSESSMENT, not a quick reissue. Assess control rather than accept "I feel fine" (NICE NG245: prescription records and a validated questionnaire such as the Asthma Control Test): symptom and reliever frequency, night waking, activity limitation, exacerbations and oral-steroid courses, and prior attacks/A&E/admissions/ICU (the strongest predictors of future risk) \u2014 frequent SABA use IS uncontrolled asthma even when normalised. Explain that the inhaled CORTICOSTEROID preventer treats the underlying airway inflammation and reduces attacks and deaths whereas the reliever only masks symptoms, and explore why the preventer is not taken (steroid beliefs, "only when bad", no perceived benefit, poor technique, access) \u2014 correcting the dangerous "fine on the blue" misconception. Optimise the regimen per NICE NG245: after addressing adherence, technique and triggers, move someone not controlled on low-dose ICS plus SABA to low-dose ICS–FORMOTEROL MART (a single inhaler used daily and as reliever, so every reliever puff delivers anti-inflammatory ICS; as-needed ICS/formoterol alone is the starting point for new diagnoses), reducing SABA reliance and exacerbations \u2014 the marks are in recognising risk and optimising, not adding another blue inhaler. Check inhaler technique, identify triggers (smoking/allergens/NSAIDs/occupational), provide a personalised asthma action plan, check flu vaccine eligibility (Green Book chapter 19), and arrange proactive review (moderate-dose MART, then objective tests and specialist advice, if still uncontrolled). Reframe SABA overuse clearly but without frightening the patient into disengagement, and safety-net for attacks.',
    knowledge:{
      guideline:'[1] NICE NG245 (asthma: diagnosis, monitoring and chronic asthma management, 2024, joint with BTS and SIGN) · [2] MHRA Drug Safety Update (April 2025): SABA overuse in asthma · [3] RCP National Review of Asthma Deaths, Why asthma still kills (2014) · [4] NICE QS25 (asthma, 2013, updated 2018) · [5] UKHSA Green Book chapter 19 (influenza) · [6] NICE NG209 (tobacco, 2021) · SABA overuse and NRAD · MART / anti-inflammatory reliever · personalised asthma action plan',
      points:[
        { h:'SABA overuse = risk', t:'3 or more SABA inhalers/year is associated with more exacerbations, and a reliever needed more than twice a week needs review (MHRA Drug Safety Update, April 2025); more than 12/year was common among those who died (NRAD, RCP 2014). Treat frequent reliever requests as a danger signal, not a reissue.' },
        { h:'Assess control', t:'Symptom/reliever frequency, night waking, activity limitation, exacerbations/oral-steroid courses, and prior attacks/A&E/admissions/ICU. Frequent SABA use is uncontrolled asthma even if normalised (NICE NG245: reliever on 3 or more days a week, night waking weekly, or any oral-steroid exacerbation). Use prescription records and the Asthma Control Test or Asthma Control Questionnaire.' },
        { h:'Preventer vs reliever', t:'ICS preventer treats airway inflammation and reduces attacks/deaths; SABA only relieves symptoms. Explore and correct under-use (beliefs, technique, benefit, access).' },
        { h:'MART / AIR', t:'NICE NG245 moves away from SABA-alone: after adherence and technique, a person aged 12+ not controlled on low-dose ICS plus SABA moves to low-dose ICS-formoterol MART (single inhaler, maintenance + reliever), so every reliever puff delivers ICS — reducing exacerbations. As-needed ICS-formoterol (AIR) is for new diagnoses.' },
        { h:'Technique & triggers', t:'Check/correct inhaler technique; identify triggers (smoking/vaping, allergens, NSAIDs, occupational); address smoking (NICE NG209); check flu vaccine eligibility (Green Book chapter 19).' },
        { h:'Action plan & review', t:'Provide a personalised asthma action plan (recognise deterioration, step-up, seek help); arrange proactive review within a few weeks (NICE QS25); if still uncontrolled, moderate-dose MART, then objective tests and specialist advice (NICE NG245).' },
        { h:'Never do', t:'Never reissue SABA without assessing control; never accept "I feel fine" at face value; never ignore preventer under-use or poor technique; never miss prior attacks/admissions; never frighten into disengagement.' },
        { h:'Safety-net & follow-up', t:'Attack red flags and emergency advice (can\u2019t speak in sentences \u2192 999); action plan; regimen change with review of SABA use/control; proactive recall.' },
        { h:"The MART / anti-inflammatory reliever shift", t:"Modern asthma management has moved AWAY from SABA-alone reliever use. NICE NG245 (2024, joint with BTS and SIGN): first address adherence, inhaler technique, alternative diagnoses and triggers; then, for people aged 12 and over not controlled on regular low-dose ICS plus as-needed SABA (her prescribed regimen), move to low-dose ICS–FORMOTEROL as MART (Maintenance And Reliever Therapy) — a single inhaler used both daily and as the reliever, usually with no separate SABA, so every reliever puff also delivers anti-inflammatory ICS; as-needed ICS/formoterol alone (the anti-inflammatory reliever, AIR) is NG245’s starting point for newly diagnosed asthma, not the next step for her. Device, dose and maximum daily puffs per BNF. This reduces SABA over-reliance and exacerbations. The examined skill is moving her onto a regimen that fixes the inflammation, not handing over another blue inhaler." }
      ]
    }
  };

  /* ============ 193. F2F — Asthma review after an A&E attendance: the adherence truth ============ */
  const c193 = {
    id:'asthma-post-attack', title:'"I only ended up in A&E because I had a cold \u2014 I\u2019m back to normal now, no need to fuss"', type:'video', duration:12,
    meta:{ age:31, sex:'M', setting:'Video consultation \u2014 post-A&E asthma review.', system:'Respiratory \u2014 the post-attack review: risk, adherence & the action plan', checked:'October 2026' },
    brief:'Mr Kwame Boateng, 31, attends for a post-attendance asthma review after presenting to A&E with an acute attack 10 days ago (given nebulisers and a course of oral prednisolone). He minimises it ("just a cold", "back to normal"). The examinable task is the high-value POST-ATTACK REVIEW: recognise that a recent attack/A&E attendance is a MAJOR risk factor for a future life-threatening attack (so this review matters), establish what actually happened and WHY (the ADHERENCE TRUTH \u2014 was he taking his preventer? technique? running out? SABA over-reliance? triggers? delayed seeking help?), reassess control and risk, OPTIMISE treatment in the NICE NG245 order (first adherence, technique, triggers and alternative diagnoses; then, if not controlled on regular low-dose ICS plus SABA, low-dose ICS/formoterol MART), co-create a PERSONALISED ASTHMA ACTION PLAN, address triggers/smoking and vaccination, and arrange STRUCTURED FOLLOW-UP (NICE QS25 statement 4: general practice follow-up within 2 working days of emergency care — so this review at 10 days is already late and should be acknowledged, with the recall system checked). The communication skill is eliciting the honest adherence story non-judgementally and converting a minimised event into engagement \u2014 not colluding with "no need to fuss".',
    script:{
      opening:"(Relaxed, slightly dismissive, keen to keep it short.) \"Morning. I know I'm booked in after the A&E thing, but honestly it was a one-off — I just had a bad cold and my chest flared. I'm completely back to normal now. I don't really think there's much to discuss; I don't want to make a big deal of it.\"",
      facts:[
        { topic:"The attack", text:"\"The cold started, I got wheezy, and I kept using the blue one. When it stopped helping, I went in.\" Three days of worsening wheeze; on the night, couldn't finish sentences, used the blue inhaler \"loads, maybe 20 puffs\". Partner drove him to A&E at 3 am. Nebulisers, steroids, discharged after 6 hours." },
        { topic:"How it felt", text:"If asked gently: \"Yeah… it was scary, to be fair. I didn't want to make a fuss.\"" },
        { topic:"Preventer — the honest answer", text:"If asked non-judgementally: \"Honestly? On and off. When I felt fine I didn't see the point.\" Fluticasone preventer — collected 3 times in the last year." },
        { topic:"Reliever use", text:"\"Now and then. I didn't really keep track\" — about 3–4 times a week before the cold; 2 inhalers in the last 3 months." },
        { topic:"Past attacks", text:"\"Not that I remember\" — no previous admissions or intensive care. One previous course of steroid tablets 2 years ago." },
        { topic:"Steroids and now", text:"\"Yeah, I finished them\" (5 days prednisolone). Now: no night waking, mild wheeze running for the bus." },
        { topic:"Triggers", text:"\"Colds, mainly. I don't really notice anything else.\" Doesn't smoke; works in a bakery (flour dust) — hasn't noticed a pattern. No pets. No NSAIDs." },
        { topic:"Background", text:"Asthma since age 10. No action plan. Not had flu or COVID vaccine this year. No allergies. Lives with partner, Ama." },
        { topic:"How to play it", text:"Minimising: \"If you think it's worth it.\" If asked what being asthmatic means to him: \"I don't want to be one of those sickly people with inhalers everywhere. I'm 31. I just want to get on with things.\" Sobered by the risk: \"So it could happen again.\" Open to a single inhaler: \"One inhaler I could live with.\" Technique if asked to show: \"Shake, puff, breathe\" — fires and inhales out of sync. Admits: \"I didn't really know when to go last time.\"" }
      ],
      ice:{
        ideas:"\"It was a one-off caused by a cold.\"",
        concerns:"HIDDEN AGENDA — it frightened him more than he admits; embarrassed about not taking his preventer; doesn't want to see himself as \"sickly\".",
        expectations:"\"A quick review — no fuss.\""
      },
      cues:[
        "\"It was a one-off.\" — minimising a serious attack.",
        "\"I didn't want to make a fuss.\" — he waited too long.",
        "\"When I felt fine I didn't see the point.\" — the adherence truth, if asked kindly."
      ]
    },
    checkpoints:[
      { dom:'cm', text:'Recognises that a recent ATTACK requiring A&E/oral steroids is a MAJOR risk factor for a future severe/fatal attack \u2014 treating the post-attack review as high-value and countering the minimisation' },
      { dom:'dg', text:'Reconstructs the attack and elicits the ADHERENCE TRUTH NON-JUDGEMENTALLY \u2014 preventer use before the attack, technique, running out, reliever over-reliance, and any delay in seeking help' },
      { dom:'dg', text:'Reassesses current control and documents RISK FACTORS (previous severe/ICU attacks, multiple A&E/admissions, high SABA use, poor adherence, no action plan, smoking, allergy/anxiety, social factors)' },
      { dom:'cm', text:'OPTIMISES treatment in the NICE NG245 order — adherence, inhaler TECHNIQUE and triggers first, then low-dose MART if not controlled on low-dose ICS plus SABA — confirms the steroid course completed (dose per BNF), addresses reliever over-reliance' },
      { dom:'cm', text:'Co-creates a PERSONALISED ASTHMA ACTION PLAN, addresses triggers (viral illness, smoking, allergens, occupational) and vaccination, and arranges STRUCTURED post-exacerbation follow-up (NICE QS25: within 2 working days of emergency care, so acknowledges this review is late; then a review a few weeks after any change) plus ongoing review' },
      { dom:'ro',   text:'Validates that he feels well now while gently countering the "just a cold/no fuss" minimisation, and surfaces the adherence story without judgement so he engages honestly' },
      { dom:'ro',   text:'Explains why the review matters (future-attack risk) in a way that motivates rather than frightens, and checks understanding of the plan and technique' },
      { dom:'cm',    text:'Safety-nets and follows up: attack red flags and emergency advice, the action plan, optimised regimen with review of adherence/control, structured post-exacerbation recall, and engagement secured \u2014 not a colluding "nothing to discuss" review' },
    ],
    worked:[
      { lbl:'Reframe the "one-off"', txt:'"I\u2019m really glad you came, and I get that you feel fine now \u2014 that\u2019s good. But I want to be honest: needing A&E and steroids means your asthma was genuinely dangerous that day, not just a cold. Understanding why is the best way to make sure it doesn\u2019t happen again."' },
      { lbl:'Get the honest story', txt:'"Talk me through it \u2014 how did it build up, and how long before you got help? \u2026 And in the weeks before, were you taking the preventer regularly, or had it slipped? Honestly \u2014 loads of people drift off it when they feel well, it\u2019s really common, I\u2019m not telling you off."' },
      { lbl:'Surface adherence, no blame', txt:'"So the brown inhaler had been on and off. That\u2019s really useful to know, because that\u2019s often the thread behind an attack \u2014 the inflammation builds up quietly while you feel okay, then a cold tips it over. We can fix that."' },
      { lbl:'Optimise + technique', txt:'"Let\u2019s get you on a regimen that\u2019s easier to stick to \u2014 ideally one inhaler that\u2019s both preventer and reliever \u2014 and check your technique now. Did you finish the steroid course? Good."' },
      { lbl:'Action plan', txt:'"I\u2019ll write you a personal action plan: what your normal is, the early warning signs, when to step up, and exactly when to get emergency help. Having this in writing genuinely reduces the risk of another bad attack."' },
      { lbl:'Follow-up + safety-net', txt:'"I’d like to see you again soon to check how you’re doing on the new inhaler, in a few weeks — these reviews after an attack really matter, and ideally we’d have spoken within a couple of days of A&E, so I’m sorry it’s been ten. And if you\u2019re ever breathless at rest or can\u2019t speak in full sentences, that\u2019s 999. Deal?"' },
    ],
    learning:'The post-attack asthma review is high-value because a recent ATTACK requiring A&E or oral steroids is one of the STRONGEST predictors of a future severe or fatal attack \u2014 so the patient\u2019s "it was just a cold, I\u2019m fine, no fuss" minimisation must be gently but clearly countered: needing A&E and steroids means the asthma was dangerously out of control, and understanding why prevents the next event. Reconstruct the attack (how it built, what he did, any delay in seeking help \u2014 common and dangerous) and elicit the ADHERENCE TRUTH NON-JUDGEMENTALLY \u2014 whether the preventer was being taken regularly, technique, running out, reliever over-reliance \u2014 normalising that many people drift off the preventer when well, to get the real rather than defensive story. Reassess current control and document risk factors for future attacks (previous near-fatal/ICU attacks, multiple A&E/admissions, high SABA use, poor adherence, no action plan, smoking, allergy/anxiety, social factors). OPTIMISE treatment in the NICE NG245 order — address adherence, inhaler technique, triggers and alternative diagnoses first, then move from regular low-dose ICS plus SABA to low-dose ICS-formoterol MART (moderate-dose MART and specialist advice if still uncontrolled), confirm the steroid course completed (dose per BNF), and address reliever over-reliance (MHRA, April 2025: no SABA without an ICS). Co-create a PERSONALISED ASTHMA ACTION PLAN (recognise deterioration, when to step up, when to seek emergency help \u2014 written plans reduce attacks and deaths), address triggers and flu vaccine eligibility (Green Book chapter 19), and arrange STRUCTURED post-exacerbation FOLLOW-UP (NICE QS25: general practice follow-up within 2 working days of emergency care, then a review a few weeks after any treatment change, with ongoing annual review). The communication skill is validating that he feels well now, surfacing the adherence story without judgement, and converting a minimised event into engagement and a concrete plan rather than colluding with "nothing to discuss".',
    knowledge:{
      guideline:'[1] NICE NG245 (asthma: diagnosis, monitoring and chronic asthma management, 2024, joint with BTS and SIGN) · [2] NICE QS25 (asthma, 2013, updated 2018) · [3] RCP National Review of Asthma Deaths, Why asthma still kills (2014) · [4] MHRA Drug Safety Update (April 2025): SABA overuse in asthma · [5] UKHSA Green Book chapter 19 (influenza) · post-exacerbation review · NRAD risk factors · personalised asthma action plan',
      points:[
        { h:'Recent attack = high risk', t:'An attack needing A&E/oral steroids strongly predicts future severe/fatal attacks. The post-attack review is high-value; counter minimisation.' },
        { h:'Elicit the adherence truth', t:'Reconstruct the attack and ask non-judgementally about preventer use, technique, running out, reliever over-reliance and delayed help-seeking. Normalise to get the real story.' },
        { h:'Risk-factor inventory', t:'Previous near-fatal/ICU attacks, multiple A&E/admissions, high SABA use, poor adherence, no action plan, smoking, allergy/anxiety, social factors \u2014 document and act on these.' },
        { h:'Optimise treatment', t:'NICE NG245 order: adherence, technique, triggers and alternative diagnoses first; then low-dose ICS/formoterol MART if not controlled on low-dose ICS plus SABA; confirm steroid course completed (dose per BNF); address reliever over-reliance.' },
        { h:'Action plan', t:'Co-create a personalised written asthma action plan (normal state, early warning signs, step-up, emergency help) \u2014 reduces attacks and deaths.' },
        { h:'Structured follow-up', t:'NICE QS25 statement 4: general practice follow-up within 2 working days of emergency care (a 10-day review is late — check the recall system); review again a few weeks after any treatment change; ongoing annual review; address triggers and flu vaccine eligibility (Green Book chapter 19).' },
        { h:'Never do', t:'Never treat a post-attack review as a formality; never accept "just a cold/no fuss"; never blame the patient for non-adherence; never miss preventer under-use/technique; never omit the action plan/follow-up.' },
        { h:'Safety-net & follow-up', t:'Attack red flags and emergency advice (can\u2019t speak in sentences \u2192 999); action plan; optimised regimen with adherence/control review; structured recall; engagement secured.' },
        { h:"Optimise treatment & technique", t:"OPTIMISE in the NICE NG245 sequence: first address adherence, CHECK inhaler technique (demonstrate), triggers and alternative diagnoses; then, for someone aged 12 or over not controlled on regular low-dose ICS plus as-needed SABA, move to low-dose ICS/formoterol MART, stepping to moderate-dose MART and then specialist advice if control stays poor. Do not prescribe a SABA without an ICS (MHRA Drug Safety Update, April 2025). Confirm the oral prednisolone course was completed as directed and ask about side effects (dose per BNF — for an adult attack usually 40–50 mg once daily for at least 5 days); more than one course a year is a marker for review, and repeated courses raise bone-health concerns. Address reliever over-reliance. The attack is an opportunity to get the maintenance regimen right." }
      ]
    }
  };

  /* ============ 194. VIDEO — Breathlessness in a young adult: anxiety is a diagnosis of exclusion ============ */
  const c194 = {
    id:'breathless-anxiety', title:'"I keep getting breathless and tingly \u2014 I think it\u2019s panic, but what if it\u2019s my heart?"', type:'video', duration:12,
    meta:{ age:26, sex:'F', setting:'Video consultation \u2014 episodic breathlessness in a young adult.', system:'Respiratory / Cardiology / Mental health \u2014 breathlessness: anxiety as a diagnosis of exclusion', checked:'October 2026' },
    brief:'Miss Hollie Vance, 26, has recurrent episodes of breathlessness with chest tightness, peri-oral/finger TINGLING, palpitations and a sense of dread, often at stressful moments, settling over 20\u201330 minutes. She suspects panic but fears a heart or lung problem. The examinable task is to hold the principle that ANXIETY/PANIC and HYPERVENTILATION are diagnoses of EXCLUSION in breathlessness: take a careful history and actively EXCLUDE organic causes appropriate to a young adult \u2014 ASTHMA (triggers, diurnal/exertional wheeze, atopy), ARRHYTHMIA (palpitations, syncope, family history of sudden death), ANAEMIA, THYROID disease (hyperthyroidism), PE (if risk factors), and rarer cardiac/respiratory disease \u2014 with a focused examination arranged FACE TO FACE (pulse, oxygen saturation, heart and chest cannot be assessed on video) and proportionate tests (obs/sats, ECG, FBC, TFTs, objective asthma tests per NICE NG245 ± D-dimer if indicated per NICE NG158); recognise the features that DO fit hyperventilation/panic (tingling, perioral paraesthesiae, carpopedal spasm, situational onset, rapid full recovery); and THEN, having excluded the dangerous, validate and manage the anxiety/panic positively (explain the physiology, breathing techniques, CBT/psychological therapy per NICE CG113, with no benzodiazepines for panic disorder, address triggers) — making a POSITIVE diagnosis, not a dismissive "it’s just anxiety".',
    script:{
      opening:"(Slightly embarrassed, speaks quickly, a little breathless with nerves.) \"This is going to sound silly — I keep getting these episodes where I can't catch my breath, my chest goes tight, my lips and fingers tingle and my heart races, and I feel like something awful's about to happen. I think it might be panic attacks… but a bit of me is terrified it's my heart or my lungs. Can you tell me it's not something serious?\"",
      facts:[
        { topic:"The episodes", text:"\"Usually when I'm stressed. They build up, then settle in about twenty minutes to half an hour. Afterwards I feel wiped out but normal.\" Two or three a week for 2 months. Hands sometimes cramp into a claw. Heart races but regular, she thinks." },
        { topic:"Exercise and asthma", text:"\"No, not with exercise. No wheeze that I've noticed.\" Runs twice a week without problems. No night cough. No childhood asthma." },
        { topic:"Cardiac questions", text:"\"No blackouts. Not that I know of in the family\" — no sudden deaths under 40 in the family, no chest pain on exertion." },
        { topic:"Other questions", text:"\"No, nothing like that\" — no weight loss, heat intolerance, tremor, heavy periods. \"None of that\" — no leg swelling, recent travel, surgery; not on the combined pill (has a copper coil); not pregnant." },
        { topic:"Caffeine and substances", text:"\"I've never really thought about it\" — 4–5 coffees and two energy drinks a day. Doesn't smoke or vape, drinks at weekends, no drugs." },
        { topic:"Medicines and history", text:"No regular medicines, no allergies. No previous anxiety diagnosis, though she was \"a worrier\" at university." },
        { topic:"Life now", text:"\"There's a lot on at the moment, I suppose. I don't really want to get into it all today.\" If gently invited later: started a new job as a junior solicitor 3 months ago and split from her boyfriend. Sleeping badly. No low mood or thoughts of self-harm." },
        { topic:"Can do on camera", text:"Can show the doctor her hands and breathing; has no pulse oximeter or BP machine." },
        { topic:"How to play it", text:"Anxious but articulate. If the doctor says \"it's just anxiety\" without questions or tests, she feels dismissed: \"That's what everyone says.\" Relieved when tests are offered: \"That would put my mind at rest.\" Understands once the physiology is explained: \"So the tingling is from the breathing? I thought it meant something awful.\" Prefers therapy to tablets." }
      ],
      ice:{
        ideas:"\"Probably panic attacks — but maybe my heart or lungs.\"",
        concerns:"HIDDEN AGENDA — \"That I'll have a heart attack in one of them and nobody will take it seriously because I'm young.\" A new job and a break-up she doesn't want to discuss yet.",
        expectations:"\"To be told it's not something serious — properly.\""
      },
      cues:[
        "\"This is going to sound silly.\" — fear of being dismissed.",
        "\"Something awful's about to happen.\" — the sense of dread.",
        "\"A lot on at the moment.\" — stressors to return to gently."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Holds the principle that anxiety/panic/hyperventilation is a diagnosis of EXCLUSION \u2014 not labelling breathlessness as anxiety before excluding organic causes' },
      { dom:'dg', text:'Actively EXCLUDES organic causes relevant to a young adult \u2014 asthma (peak flow/spirometry), arrhythmia (palpitations/syncope/FAMILY HISTORY of sudden death; ECG), anaemia (FBC), hyperthyroidism (TFTs), PE if risk factors — with a focused examination arranged face to face (obs, sats, heart, chest, thyroid), as these cannot be done on video' },
      { dom:'dg', text:'Recognises the POSITIVE features of hyperventilation/panic (situational onset, peri-oral/peripheral tingling, carpopedal spasm, doom, rapid full recovery, normal exam) without using them to skip exclusion' },
      { dom:'dg', text:'Makes a POSITIVE diagnosis and EXPLAINS the physiology (over-breathing \u2192 low CO2 \u2192 tingling/light-headedness/chest tightness \u2192 more fear \u2014 a self-perpetuating cycle), destigmatising it' },
      { dom:'cm', text:'Manages anxiety/panic positively \u2014 breathing/relaxation techniques (not paper-bag), psychoeducation, CBT/psychological therapy (self-referral/NHS Talking Therapies), addressing triggers/stressors and lifestyle (caffeine/sleep), an SSRI licensed for panic disorder if preferred or significant (NICE CG113), no benzodiazepines — and screens mood/severity' },
      { dom:'ro',   text:'Takes the fear (heart/lungs) seriously rather than dismissing, and lands reassurance on the back of genuine exclusion \u2014 a confident positive diagnosis, not "it\u2019s just anxiety"' },
      { dom:'ro',   text:'Explores any underlying stressor empathically, validates the distress, checks understanding, and supports engagement with psychological treatment' },
      { dom:'cm',    text:'Safety-nets and follows up: which NEW/atypical features warrant review (exertional/positional symptoms, syncope, true wheeze, weight loss), results of any tests, the psychological-therapy plan and review \u2014 a positive diagnosis after exclusion, not a dismissive label' },
    ],
    worked:[
      { lbl:'Take the fear seriously', txt:'"It doesn\u2019t sound silly at all \u2014 those episodes are genuinely frightening, and it\u2019s sensible to want to be sure it\u2019s not your heart or lungs. So rather than just say \u2018it\u2019s anxiety\u2019, let me properly check the things that matter, and then we\u2019ll know."' },
      { lbl:'Exclude the dangerous', txt:'"A few questions: are you ever breathless or wheezy with exercise or at night? Any blackouts, or family members who died suddenly young? Any weight loss, tremor, feeling hot? \u2026 I can’t check your pulse, oxygen or listen to your chest over video, so I’d like you to come in so we can do that, with a heart tracing and some bloods — thyroid and blood count."' },
      { lbl:'Name the positive features', txt:'"Now \u2014 the tingling round your lips and in your fingers, the racing heart, the sense of dread, coming on with stress and settling in half an hour: those are very typical of panic and over-breathing, which is reassuring once we\u2019ve checked the rest."' },
      { lbl:'Explain the physiology', txt:'"Here\u2019s what\u2019s happening: when anxiety makes you breathe too fast, you blow off carbon dioxide, and that causes exactly these symptoms \u2014 tingling, light-headedness, tight chest. They feel alarming, which makes you breathe faster still. It\u2019s a loop, not a heart attack \u2014 and that\u2019s genuinely good news because we can break it."' },
      { lbl:'Positive management', txt:'"The most effective treatment is a talking therapy called CBT \u2014 you can refer yourself \u2014 plus some breathing techniques I\u2019ll show you to use in the moment. Cutting caffeine and improving sleep help too. If the panic’s frequent and disabling, an SSRI antidepressant can also help — though not tranquillisers like diazepam, which aren’t recommended for panic."' },
      { lbl:'Validate + safety-net', txt:'"This is real and treatable, not \u2018all in your head\u2019. Once the tests are back I\u2019ll confirm everything\u2019s clear. But if you ever get breathless on exertion, blackout, or symptoms that don\u2019t fit this pattern, come back \u2014 we\u2019d look again. Is there anything stressful going on we should talk about?"' },
    ],
    learning:'Attributing breathlessness to ANXIETY/PANIC or HYPERVENTILATION must be a POSITIVE diagnosis made AFTER excluding organic causes \u2014 it is a diagnosis of EXCLUSION, never a lazy first label \u2014 and, even when the story sounds typically panic-like, genuine exclusion is both safer and more therapeutic, because a confident "I\u2019ve checked and these are clear" reassures far better than a dismissive "it\u2019s just anxiety". In a young adult, take a careful history and examination and exclude the relevant causes: ASTHMA (episodic/nocturnal/exertional wheeze, triggers, atopy \u2014 peak flow/spirometry \u00b1 FeNO), ARRHYTHMIA (palpitations, syncope/pre-syncope, exertional symptoms, family history of sudden cardiac death \u2014 ECG), ANAEMIA (FBC), HYPERTHYROIDISM (weight loss, tremor, heat intolerance \u2014 TFTs), PE (only if risk factors), and rarer cardiorespiratory disease, with focused examination arranged face to face (obs, sats, heart, chest, thyroid/anaemia signs — none of which can be done on video). Recognise the features that POSITIVELY fit hyperventilation/panic \u2014 situational/stress onset, peri-oral and peripheral tingling, carpopedal spasm, a sense of doom, light-headedness, rapid full recovery and a normal examination \u2014 without using them to skip exclusion. Then make a positive diagnosis and EXPLAIN the physiology in a destigmatising way: over-breathing lowers CO2, producing tingling, light-headedness and chest tightness, which feel frightening and drive more over-breathing \u2014 a self-perpetuating cycle, not a heart attack \u2014 because understanding the mechanism is itself therapeutic. Manage positively: controlled/diaphragmatic breathing techniques (not paper-bag), psychoeducation, CBT, an SSRI licensed for panic disorder or CBT-based self-help according to preference (NICE CG113; self-referral to NHS Talking Therapies), with no benzodiazepines, sedating antihistamines or antipsychotics, addressing triggers/stressors and lifestyle (caffeine, sleep), screening mood and severity. Take the fear seriously, land reassurance on real exclusion, validate and treat the anxiety, and safety-net for new/atypical features.',
    knowledge:{
      guideline:'[1] NICE CG113 (generalised anxiety disorder and panic disorder in adults, 2011, updated 2020) · [2] NICE NG245 (asthma, 2024, joint with BTS and SIGN) · [3] NICE NG145 (thyroid disease, 2019) · [4] NICE NG158 (venous thromboembolic diseases, 2020, updated August 2023) · [5] NICE CG109 (transient loss of consciousness in over 16s, 2010) · breathlessness differential in young adults · hyperventilation physiology · anxiety as diagnosis of exclusion',
      points:[
        { h:'Exclusion, then positive label', t:'Anxiety/panic/hyperventilation is a diagnosis of exclusion. Exclude organic causes first, then make a confident positive diagnosis \u2014 reassurance lands because the exclusion was real.' },
        { h:'Exclude the dangerous', t:'Asthma (eosinophils or FeNO, then spirometry with reversibility — NICE NG245), arrhythmia (ECG; ask palpitations/syncope/family history of sudden death — NICE CG109), anaemia (FBC), hyperthyroidism (TFTs — NICE NG145), PE if risk factors (NICE NG158). Examine obs/sats/heart/chest/thyroid face to face.' },
        { h:'Positive panic features', t:'Situational/stress onset, peri-oral/peripheral tingling, carpopedal spasm, doom, light-headedness, rapid full recovery, normal exam. Supportive \u2014 not a substitute for exclusion.' },
        { h:'Explain the physiology', t:'Over-breathing lowers CO2 (respiratory alkalosis) \u2192 tingling, light-headedness, chest tightness \u2192 more fear \u2192 more over-breathing. A self-perpetuating cycle, not a heart attack. Destigmatising explanation is therapeutic.' },
        { h:'Positive management', t:'Controlled/diaphragmatic breathing (not paper-bag), psychoeducation, CBT, an SSRI licensed for panic disorder, or CBT-based self-help by preference (NICE CG113; self-referral to NHS Talking Therapies); no benzodiazepines, sedating antihistamines or antipsychotics; address triggers/stressors and lifestyle (caffeine, sleep); screen mood.' },
        { h:'Take the fear seriously', t:'The patient fearing a heart/lung cause needs genuine exclusion and a confident positive diagnosis, not dismissal. Explore underlying stressors empathically.' },
        { h:'Never do', t:'Never label "just anxiety" without exclusion; never ignore exertional/positional symptoms, syncope or family history of sudden death; never dismiss the distress; never advise paper-bag rebreathing.' },
        { h:'Safety-net & follow-up', t:'Review for new/atypical features (exertional/positional symptoms, syncope, true wheeze, weight loss); communicate test results; psychological-therapy plan and review.' }
      ]
    }
  };

  /* ============ 195. VIDEO — Snoring + daytime sleepiness: OSA, Epworth and the DVLA ============ */
  const c195 = {
    id:'osa-epworth-dvla', title:'"My wife says I stop breathing in my sleep \u2014 but I just need something for the snoring"', type:'video', duration:12,
    meta:{ age:52, sex:'M', setting:'Video consultation \u2014 snoring and daytime sleepiness.', system:'Respiratory / Sleep \u2014 obstructive sleep apnoea: assessment, Epworth & the DVLA duty', checked:'October 2026' },
    brief:'Mr Raj Malhotra, 52, lorry driver (Group 2 licence), BMI 34, attends because his wife is fed up with his SNORING \u2014 and mentions she has noticed he STOPS BREATHING and gasps at night. He admits to being exhausted, dozing off during the day, and recently nearly nodding off at the wheel. He wants "something for the snoring". The examinable task is to recognise the picture of OBSTRUCTIVE SLEEP APNOEA (snoring + witnessed apnoeas + excessive daytime SLEEPINESS + obesity), assess it (symptoms, witnessed apnoeas, the EPWORTH Sleepiness Scale and STOP-Bang — NICE NG202: the Epworth score alone must not decide referral — neck circumference/BMI, comorbidities — hypertension, AF, type 2 diabetes), refer for RAPID SLEEP STUDY/sleep-clinic assessment (NG202 prioritises vocational drivers such as him), advise lifestyle (weight loss, alcohol/sedative avoidance, sleep position) and that treatment (CPAP for moderate or severe OSA, and considered for mild OSA with symptoms affecting daily life) is highly effective; and \u2014 the critical, examinable SAFETY/PROFESSIONAL duty \u2014 address DRIVING: advise him not to drive while sleepy (DVLA Assessing fitness to drive: with suspected OSA and excessive sleepiness he must not drive until the sleepiness is satisfactorily controlled), explain his legal obligation to inform the DVLA if control is not achieved within 3 months, or once moderate or severe OSA with excessive sleepiness is confirmed, and the implications (the same medical standard applies to his Group 2/HGV licence, which is then reviewed at least annually). The hidden agenda is he wants the snoring fixed and is minimising the sleepiness/driving risk because his livelihood (HGV licence) depends on it.',
    script:{
      opening:"(Jovial, big laugh, yawns once during the call.) \"Doc, my wife's threatening to sleep in the spare room — my snoring's that bad. She also reckons I stop breathing and gasp, but I think she exaggerates. I'm a bit knackered in the day, sure, but who isn't. Can you just give me something for the snoring — a spray or strips or something? I just want a decent night's sleep.\"",
      facts:[
        { topic:"Night-time", text:"\"She says I go quiet, then gasp and snort like I'm choking. She's been nudging me.\" Loud snoring for years, worse over 2 years. Gets up to pass urine twice a night. \"I wake up feeling like I haven't slept.\" Morning headaches some days." },
        { topic:"Dozing (Epworth)", text:"If asked when he dozes: \"TV, definitely. Reading, yes. Traffic… sometimes.\" Epworth answers if the doctor goes through them: reading 2, TV 3, sitting in a public place 2, passenger for an hour 3, lying down in the afternoon 3, talking 0, after lunch 2, stopped in traffic 1 — total 16." },
        { topic:"Driving — the near-miss", text:"Only if asked directly about driving: \"(pause) Once, recently. I caught myself drifting. Scared me, to be honest\" — on the motorway last week, drifted onto the rumble strip. Drives HGVs 50 hours a week, often nights." },
        { topic:"Alcohol and sedatives", text:"\"A drink in the evening now and then. No tablets\" — 2–3 pints most evenings to unwind." },
        { topic:"Health", text:"\"Not that I know. Collar size — I'd have to check\" (it's 18 inches). BMI 34 at last check. BP was \"a bit high\" at a DVLA medical last year; not on treatment. No diabetes known. No regular medicines. No allergies. Smokes 10 a day." },
        { topic:"Social", text:"Married to Sunita, two teenage children, mortgage. Self-employed HGV driver for a haulage firm." },
        { topic:"Fears", text:"\"Honestly? The job. If this is something, am I going to lose my licence? I've got bills.\"" },
        { topic:"How to play it", text:"Cheerful and minimising; laughs off the gasping. Gives the near-miss only if asked straight about driving. When told he must not drive: \"Not drive at all? That's my living.\" Becomes more accepting when told treatment usually works and he can get back on the road: \"So it's not forever.\" Asks for a note for work. If given a snoring spray, accept happily (the trap)." }
      ],
      ice:{
        ideas:"\"It's just snoring — my wife exaggerates. Everyone's tired.\"",
        concerns:"HIDDEN AGENDA — terrified of losing his HGV licence and income, so he has been playing down the sleepiness and the near-miss.",
        expectations:"\"A spray or strips for the snoring.\""
      },
      cues:[
        "\"She reckons I stop breathing.\" — witnessed apnoeas.",
        "\"A bit knackered in the day.\" — invites the Epworth questions.",
        "\"Am I going to lose my licence?\" — the fear behind the minimising."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises the OBSTRUCTIVE SLEEP APNOEA picture (snoring + witnessed apnoeas/gasping + excessive daytime sleepiness + obesity) rather than treating it as simple snoring' },
      { dom:'dg', text:'Assesses properly — quantifies daytime sleepiness with the EPWORTH scale and considers STOP-Bang (not using Epworth alone to decide referral, NICE NG202), documents witnessed apnoeas, neck circumference/BMI, and screens associated conditions (hypertension, AF, type 2 diabetes, cardiovascular risk)' },
      { dom:'dg', text:'Asks DIRECTLY about sleepiness while DRIVING and near-misses/accidents (he has volunteered a near-miss at the wheel)' },
      { dom:'cm', text:'Refers for a SLEEP STUDY/sleep-service assessment to confirm and grade OSA, flagged for rapid assessment as a vocational driver (NICE NG202), and advises lifestyle measures (weight loss, avoid alcohol/sedatives, side-sleeping, smoking) and that CPAP is highly effective for moderate-severe OSA (and considered for mild OSA with symptoms affecting daily life)' },
      { dom:'cm', text:'Addresses the DVLA DUTY clearly: advises NOT to drive while sleepy, explains the LEGAL obligation to notify the DVLA if the sleepiness is not controlled within 3 months or once moderate/severe OSA with sleepiness is confirmed (same medical standard for GROUP 2/HGV, with at least annual licence review), that it is the patient’s responsibility, and documents the advice' },
      { dom:'ro',   text:'Recognises the minimisation driven by fear for his livelihood, takes the snoring complaint seriously while conveying the genuine danger, and does NOT collude with "just give me a spray"' },
      { dom:'ro',   text:'Handles the driving/DVLA conversation honestly but supportively \u2014 explaining that effective treatment usually allows a return to driving \u2014 and checks understanding' },
      { dom:'cm',    text:'Safety-nets and follows up: sleep-study referral and timeline, the driving advice documented (and GMC route if he continues to drive against advice), lifestyle plan, comorbidity review, and follow-up \u2014 OSA assessment + DVLA duty, not a snoring remedy and a wave-off' },
    ],
    worked:[
      { lbl:'Take it seriously, widen it', txt:'"I\u2019ll absolutely help with the snoring \u2014 but what your wife describes, the stopping and gasping, plus you being shattered and nearly nodding off driving, points to something we need to take seriously: a condition called sleep apnoea, where the airway collapses in sleep. That\u2019s more than snoring."' },
      { lbl:'Assess', txt:'"Let me ask how sleepy you really are \u2014 I\u2019ll use a quick scoring scale: how likely are you to doze watching TV, sitting reading, in a meeting, stopped in traffic? \u2026 And your collar size — and I’d like your blood pressure checked at the surgery, as I can’t measure it over video and apnoea often pushes it up. There’s a second short questionnaire too, because the sleepiness score alone doesn’t decide things."' },
      { lbl:'Refer + treatment hope', txt:'"I’m going to refer you for a sleep study to confirm it, and I’ll mark it as a priority because you drive for a living. The good news: it\u2019s very treatable. Losing some weight and cutting alcohol in the evening help a lot, and a machine called CPAP \u2014 a mask at night \u2014 is brilliant for this; most people feel like a new person and the daytime sleepiness goes."' },
      { lbl:'The driving conversation', txt:'"Now I have to be straight about driving, because it matters most. You\u2019ve nearly nodded off at the wheel \u2014 you must NOT drive while you feel sleepy. And the DVLA rules apply: you mustn’t drive while you’re sleepy, and if it isn’t under control within 3 months, or the study confirms moderate or severe apnoea, you have a legal duty to tell them. The rules are the same for your HGV licence, but it’s reviewed at least every year."' },
      { lbl:'Support, not just bad news', txt:'"I know that\u2019s frightening with your job \u2014 but here\u2019s the important part: once it\u2019s treated and the sleepiness is controlled, people usually get back to driving, including professionally. Sorting this protects your licence long-term, and protects you and others now."' },
      { lbl:'Document + safety-net', txt:'"I’ll write down that I’ve advised you not to drive while sleepy and when you must notify the DVLA. Please don\u2019t drive to the sleep study sleepy \u2014 get a lift. If anything changes I\u2019m here, and we\u2019ll review once the study and treatment are sorted."' },
    ],
    learning:'Snoring with WITNESSED APNOEAS (partner-observed pauses/gasping), excessive daytime SLEEPINESS and obesity is the classic picture of OBSTRUCTIVE SLEEP APNOEA \u2014 not simple snoring \u2014 with supporting features of unrefreshing sleep, morning headaches, nocturia, poor concentration, reduced libido and a large neck circumference. Assess properly: quantify daytime sleepiness with the EPWORTH Sleepiness Scale and consider STOP-Bang (NICE NG202, 2021: the Epworth score alone should not decide referral, because not everyone with OSA is sleepy), document witnessed apnoeas, neck circumference and BMI, and screen the associated/consequent conditions (often resistant hypertension, atrial fibrillation, type 2 diabetes, cardiovascular risk) \u2014 and ask DIRECTLY about sleepiness while DRIVING and any near-misses. Refer to a SLEEP SERVICE for a diagnostic SLEEP STUDY to confirm and grade OSA — prioritised for rapid assessment in vocational drivers and safety-critical workers (NICE NG202) — advise lifestyle measures (WEIGHT LOSS often substantially improves or resolves it, avoid ALCOHOL and SEDATIVES, side-sleeping, smoking cessation), and explain that CPAP is highly effective for moderate-severe OSA and transforms daytime sleepiness (NICE NG202 also advises considering CPAP for mild OSA with symptoms affecting daily life; mandibular advancement splints are an option for mild OSA or if CPAP is declined or not tolerated). The critical, examinable point is the DVLA/DRIVING duty: advise the patient NOT to drive while sleepy, explain the LEGAL obligation to notify the DVLA where the condition affects driving — DVLA: with suspected OSA and excessive sleepiness, no driving until the sleepiness is controlled, notification if not controlled within 3 months, and notification of confirmed moderate or severe OSA with excessive sleepiness; the medical criteria are the same for GROUP 2 (HGV/bus) drivers, whose licences are then reviewed at least annually — that it is the patient’s responsibility to notify, document the advice, and (per GMC Confidentiality: patients’ fitness to drive, 2017) be prepared to inform the DVLA promptly if a patient continues to drive against advice and cannot be dissuaded, telling the patient first where possible. This conversation cannot be skipped because the patient\u2019s livelihood is at stake \u2014 handle it honestly but supportively (effective treatment usually allows return to driving), recognising the minimisation driven by fear of losing the licence, and do not collude with "just give me something for the snoring".',
    knowledge:{
      guideline:'[1] NICE NG202 (obstructive sleep apnoea/hypopnoea syndrome and obesity hypoventilation syndrome in over 16s, 2021) · [2] DVLA Assessing fitness to drive: a guide for medical professionals (respiratory and sleep conditions) · [3] GMC Confidentiality: patients’ fitness to drive and reporting concerns to the DVLA or DVA (2017) · [4] NICE NG136 (hypertension in adults, 2019, updated 2023) · [5] NICE NG28 (type 2 diabetes in adults) · [6] NICE NG196 (atrial fibrillation, 2021) · Epworth Sleepiness Scale and STOP-Bang',
      points:[
        { h:'Recognise OSA', t:'Snoring + witnessed apnoeas/gasping + excessive daytime sleepiness + obesity is OSA, not simple snoring. Other clues: unrefreshing sleep, morning headache, nocturia, poor concentration, large neck.' },
        { h:'Assess with Epworth', t:'Quantify daytime sleepiness with the Epworth Sleepiness Scale and consider STOP-Bang; do not use the Epworth score alone to decide referral (NICE NG202); document witnessed apnoeas, neck circumference/BMI; screen hypertension (often resistant), AF, type 2 diabetes, cardiovascular risk.' },
        { h:'Ask about driving', t:'Directly ask about sleepiness while driving and near-misses/accidents \u2014 a critical safety and legal trigger.' },
        { h:'Refer & treat', t:'Refer for a sleep study to confirm/grade OSA (rapid assessment for vocational drivers and safety-critical roles, NICE NG202). Lifestyle: weight loss (can resolve OSA), avoid alcohol/sedatives, side-sleeping, smoking cessation. CPAP is highly effective for moderate-severe and is considered for mild OSA with symptoms affecting daily life (NICE NG202); mandibular advancement splints for mild OSA or if CPAP is declined or not tolerated.' },
        { h:'DVLA duty', t:'Advise not to drive while sleepy: with suspected OSA and excessive sleepiness, no driving until controlled (DVLA). Legal duty to notify if not controlled within 3 months, or once moderate/severe OSA with excessive sleepiness is confirmed. Same medical standard for Group 2 (HGV/bus), with at least annual licence review once relicensed. Patient’s responsibility to notify; advise clearly and document.' },
        { h:'Driving \u2014 supportive framing', t:'Effective treatment (CPAP) controlling sleepiness usually permits return to driving, including professionally. Frame the DVLA step as protecting licence and safety, not just bad news.' },
        { h:'Never do', t:'Never treat the picture as simple snoring; never skip the Epworth/driving assessment; never omit the DVLA advice because the livelihood is at stake; never collude with "just a spray"; never fail to document driving advice.' },
        { h:'GMC route if needed', t:'If a patient continues to drive against advice and cannot be persuaded to stop or notify, the doctor should inform the DVLA promptly (GMC Confidentiality: patients’ fitness to drive, 2017), telling the patient first where possible.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c192, c193, c194, c195);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'asthma-saba-overuse': {
      ceg: ['Long-term conditions & cancer', 'Prescribing & pharmacology'],
      stem: {
        name: 'Tanya Brooks', age: '24 years \u00b7 female',
        pmh: ['Asthma; \u26a0 ordering 7th salbutamol in 12 months; rarely collects ICS preventer', 'Feels "fine"; normalised symptoms', 'Smoking status to check'],
        meds: ['Salbutamol (frequent)', 'ICS preventer (rarely collected)'],
        allergy: 'NKDA',
        recent: '"Just need another blue inhaler \u2014 they sort me out. I don\u2019t bother with the brown one."',
        reason: 'Video consultation \u2014 reliever-inhaler request.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Reframe the request', d:'7th SABA/year = red flag for poor control + death risk, not a benign reissue.' },
        { t:'2\u20135',  h:'Assess control', d:'Night waking, activity limit, oral-steroid courses, prior attacks/A&E/ICU \u2014 "fine" is normalised risk.' },
        { t:'5\u20137',  h:'Correct preventer myth', d:'ICS treats inflammation/reduces death; reliever masks. Explore why ICS not taken.' },
        { t:'7\u201310', h:'Optimise regimen', d:'Low-dose ICS-formoterol MART per NICE NG245 (reliever doubles as preventer); technique teach-back; triggers/smoking.' },
        { t:'10\u201312',h:'Plan + safety-net', d:'Personalised action plan; attack red flags (can\u2019t speak \u2192 999); review control + SABA use.' }
      ],
      wordPics: {
        fail: 'Hands over another salbutamol without assessing control; ignores preventer under-use and technique; misses SABA overuse as a death-risk marker.',
        pass: 'Recognises SABA overuse as a red flag, assesses control, corrects the preventer myth and optimises to low-dose MART (NICE NG245) with a plan.',
        exc:  'Reframes SABA overuse as a danger signal, assesses control and risk, corrects the preventer misconception, optimises to low-dose MART (NICE NG245) with technique teach-back, addresses triggers/smoking, provides an action plan, and safety-nets \u2014 recognising risk, not reissuing a reliever.'
      },
      avoid: [
        { dont:'"Sure, here\u2019s another salbutamol \u2014 glad it works for you."', instead:'"Getting through seven a year tells me your asthma isn\u2019t well controlled \u2014 that\u2019s a safety issue worth sorting, not just a reissue."', why:'Reissuing SABA without assessing control misses a marker of poor control and asthma-death risk.' },
        { dont:'"As long as the blue works, you don\u2019t really need the brown one."', instead:'"The blue only masks symptoms; the preventer treats the inflammation underneath and keeps you safe \u2014 that\u2019s the one that matters."', why:'Endorsing reliever-alone use reinforces the dangerous misconception behind asthma deaths.' },
        { dont:'(No technique/plan) just switching the prescription.', instead:'"Show me how you take it, and I\u2019ll give you a written action plan for when it worsens."', why:'Skipping technique and an action plan leaves the core risks unaddressed.' }
      ]
    },

    'asthma-post-attack': {
      ceg: ['Urgent & unscheduled care', 'Long-term conditions & cancer'],
      stem: {
        name: 'Kwame Boateng', age: '31 years \u00b7 male',
        pmh: ['\u26a0 A&E asthma attack 10 days ago (nebs + oral prednisolone)', 'Minimises it ("just a cold, back to normal"); ?preventer adherence', 'Booked post-attendance review'],
        meds: ['ICS preventer', 'Salbutamol PRN', 'Recent prednisolone course'],
        allergy: 'NKDA',
        recent: '"It was a one-off, I\u2019m back to normal \u2014 I don\u2019t want to make a big deal of it."',
        reason: 'Video consultation \u2014 post-A&E asthma review.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Reframe the "one-off"', d:'A&E + steroids = dangerous attack and a major future-risk marker; this review matters.' },
        { t:'2\u20135',  h:'Adherence truth', d:'Reconstruct the attack + delay in seeking help; non-judgementally elicit preventer use/technique.' },
        { t:'5\u20137',  h:'Risk + optimise', d:'Risk-factor inventory; adherence and technique first, then low-dose MART (NICE NG245); confirm steroid course done.' },
        { t:'7\u201310', h:'Action plan', d:'Personalised written plan (warning signs, step-up, emergency help) \u2014 reduces attacks/deaths.' },
        { t:'10\u201312',h:'Follow-up + safety-net', d:'Post-exacerbation follow-up (NICE QS25: within 2 working days — this one is late); review after any change; attack red flags → 999; engagement secured.' }
      ],
      wordPics: {
        fail: 'Treats the review as a formality, accepts "just a cold", never explores adherence, leaves the regimen and lack of action plan unchanged.',
        pass: 'Recognises the attack as a risk marker, elicits adherence, optimises treatment and gives an action plan with follow-up.',
        exc:  'Counters the minimisation, reconstructs the attack and elicits the adherence truth non-judgementally, inventories risk factors, optimises treatment in the NICE NG245 order (adherence and technique, then MART), co-creates a personalised action plan, and arranges structured post-exacerbation follow-up \u2014 converting the event into engagement.'
      },
      avoid: [
        { dont:'"Glad you\u2019re better \u2014 nothing much to do then, see you at your annual review."', instead:'"Needing A&E and steroids means it was dangerous, not just a cold \u2014 let\u2019s understand why so it doesn\u2019t happen again."', why:'Treating a post-attack review as a formality ignores the strongest predictor of a future fatal attack.' },
        { dont:'"You really should have been taking your preventer \u2014 this is your own doing."', instead:'"Lots of people drift off the preventer when they feel well \u2014 I\u2019m not telling you off; let\u2019s just get it working for you."', why:'Blaming the patient shuts down the honest adherence conversation needed to reduce risk.' },
        { dont:'(No action plan) ending after a chat.', instead:'"I\u2019ll write you a personal action plan and see you again soon \u2014 these post-attack reviews really cut the risk."', why:'Omitting the action plan and structured follow-up misses interventions proven to reduce attacks/deaths.' }
      ]
    },

    'breathless-anxiety': {
      ceg: ['Mental health & addiction', 'New & undifferentiated presentations'],
      stem: {
        name: 'Hollie Vance', age: '26 years \u00b7 female',
        pmh: ['Recurrent breathlessness + chest tightness + peri-oral/finger tingling + palpitations + dread, stress-related, settle ~20-30 min', 'Suspects panic; fears heart/lung disease', 'No exertional symptoms/syncope volunteered'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"I think it\u2019s panic\u2026 but what if it\u2019s my heart? Can you tell me it\u2019s not serious?"',
        reason: 'Video consultation \u2014 episodic breathlessness.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Take the fear seriously', d:'Not "just anxiety"; check properly so reassurance is real.' },
        { t:'2\u20135',  h:'Exclude organic', d:'Asthma, arrhythmia (ECG + family sudden death), anaemia (FBC), thyroid (TFTs), PE if risk; exam/obs/sats face to face (not on video).' },
        { t:'5\u20137',  h:'Positive panic features', d:'Situational, peri-oral/peripheral tingling, doom, full recovery, normal exam \u2014 supportive, not a shortcut.' },
        { t:'7\u20139',  h:'Explain physiology', d:'Over-breathing \u2192 low CO2 \u2192 tingling/light-head/tight chest \u2192 more fear \u2014 a loop, not a heart attack.' },
        { t:'9\u201312', h:'Positive management', d:'Breathing techniques, CBT/NHS Talking Therapies, triggers/caffeine/sleep, SSRI if significant (NICE CG113; no benzodiazepines); safety-net atypical features.' }
      ],
      wordPics: {
        fail: 'Labels "just anxiety" without excluding organic causes, or over-investigates endlessly; dismisses the fear; gives no positive explanation or management.',
        pass: 'Excludes organic causes, makes a positive panic diagnosis with explanation, and arranges anxiety management.',
        exc:  'Holds anxiety as a diagnosis of exclusion, genuinely excludes asthma/arrhythmia/anaemia/thyroid/PE with focused exam and proportionate tests, recognises positive panic features, explains the hyperventilation physiology, manages positively per NICE CG113 (breathing/CBT/SSRI, no benzodiazepines), takes the fear seriously, and safety-nets atypical features.'
      },
      avoid: [
        { dont:'"It\u2019s just panic attacks \u2014 nothing to worry about, try to relax."', instead:'"It does sound like panic, but I\u2019ll properly check your heart, lungs, thyroid and blood count first so we can be sure \u2014 then the reassurance really means something."', why:'Labelling anxiety without exclusion is unsafe and lands as dismissive, undermining reassurance.' },
        { dont:'(Over-testing) ordering echo/CT/repeated bloods for a classic panic story.', instead:'"A heart tracing and a couple of bloods are proportionate \u2014 endless scans would just feed the worry."', why:'Over-investigation reinforces health anxiety and is not proportionate to a typical panic presentation.' },
        { dont:'(No mechanism) just prescribing without explaining.', instead:'"Let me explain why over-breathing causes the tingling and tight chest \u2014 understanding the loop is half the treatment."', why:'Without the physiological explanation, the catastrophic interpretation persists and panic continues.' }
      ]
    },

    'osa-epworth-dvla': {
      ceg: ['Long-term conditions & cancer', 'Professionalism & ethics'],
      stem: {
        name: 'Raj Malhotra', age: '52 years \u00b7 male',
        pmh: ['Loud snoring + \u26a0 witnessed apnoeas/gasping; excessive daytime sleepiness; \u26a0 near-miss at the wheel', 'BMI 34; large neck; ? hypertension', 'HGV driver (Group 2 licence)'],
        meds: ['None regular'],
        allergy: 'NKDA',
        recent: '"My wife says I stop breathing \u2014 but I just need something for the snoring."',
        reason: 'Video consultation \u2014 snoring + daytime sleepiness.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise OSA', d:'Snoring + witnessed apnoeas + sleepiness + obesity + near-miss = OSA, not simple snoring.' },
        { t:'2\u20135',  h:'Assess', d:'Epworth scale plus STOP-Bang (not Epworth alone), neck/BMI, comorbidities (HTN/AF/T2DM); ask directly about driving sleepiness/near-misses.' },
        { t:'5\u20137',  h:'Refer + treat', d:'Rapid sleep-study referral (vocational driver); weight loss, avoid alcohol/sedatives, side-sleeping; CPAP highly effective (considered even for mild with symptoms).' },
        { t:'7\u201310', h:'DVLA duty', d:'Don’t drive while sleepy; notify DVLA if not controlled within 3 months or moderate/severe confirmed (same standard for Group 2, annual review); patient’s responsibility; document.' },
        { t:'10\u201312',h:'Support + safety-net', d:'Treatment usually allows return to driving; document advice; GMC route if drives against advice; review.' }
      ],
      wordPics: {
        fail: 'Treats it as simple snoring and offers a spray/strips; never uses Epworth or asks about driving; omits the DVLA duty entirely.',
        pass: 'Recognises OSA, assesses with Epworth and refers for a sleep study, and raises the DVLA/driving issue.',
        exc:  'Recognises OSA, assesses (Epworth, apnoeas, neck/BMI, comorbidities) and asks directly about driving, refers for a sleep study with lifestyle/CPAP advice, and handles the DVLA duty clearly and supportively (don’t drive sleepy; notify if not controlled in 3 months or moderate/severe confirmed; same standard for Group 2 with annual review) with documentation \u2014 not a snoring remedy.'
      },
      avoid: [
        { dont:'"I\u2019ll give you a nasal spray and some strips for the snoring \u2014 that should help."', instead:'"The gasping and daytime sleepiness point to sleep apnoea \u2014 more than snoring \u2014 so let\u2019s assess it and refer for a sleep study."', why:'Treating it as simple snoring misses OSA and its serious consequences, including driving risk.' },
        { dont:'(Avoiding driving) not mentioning the DVLA because of his job.', instead:'"I have to be straight about driving: don’t drive while sleepy, and there’s a legal duty to tell the DVLA if it isn’t controlled within 3 months or the study shows moderate or severe apnoea — the same rules cover your HGV licence."', why:'Skipping the DVLA/driving duty because the livelihood is at stake is a serious safety and probity failure.' },
        { dont:'"You\u2019ll probably lose your licence \u2014 not much I can do."', instead:'"Once treated and the sleepiness is controlled, people usually return to driving, including professionally \u2014 sorting this protects your licence and everyone\u2019s safety."', why:'Fatalistic framing discourages engagement; the supportive, accurate message aids both safety and adherence.' }
      ]
    }

  });

})();
