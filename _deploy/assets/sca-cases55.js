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
    meta:{ age:24, sex:'F', setting:'Video consultation \u2014 a reliever-inhaler request flagged on records.', system:'Respiratory \u2014 asthma control: SABA overuse as a risk marker & MART' },
    brief:'Miss Tanya Brooks, 24, asthmatic, requests another salbutamol \u2014 records show she has ordered her SEVENTH in 12 months and rarely collects her preventer (inhaled corticosteroid). She feels "fine" because the blue inhaler "sorts me out". The examinable task is to recognise SABA OVERUSE as a RED-FLAG marker of POORLY CONTROLLED asthma and increased risk of death (\u22653 SABA inhalers/year signals poor control; \u226512/year is high risk), not a benign request: ASSESS control (RCP3/symptom frequency, night waking, activity limitation, exacerbations/oral-steroid courses, prior attacks/admissions), screen risk factors and the SMART/MART rationale, CHECK adherence and inhaler TECHNIQUE and the real reason the preventer isn\u2019t used, and \u2014 the modern station \u2014 the marks are in RECOGNISING RISK and OPTIMISING the regimen (regular ICS or ICS-formoterol MART as both preventer and reliever) rather than just adding drugs. Personalised asthma action plan, triggers, smoking, follow-up. Honest handling of the "I feel fine" framing. No NG12 cancer link.',
    script:{
      opening:'"Hiya, can I just grab another blue inhaler? I do get through them, I\u2019ll admit, but they work \u2014 a couple of puffs and I\u2019m grand. I don\u2019t really bother with the brown one, I only take that when I remember and I feel fine anyway, so it can\u2019t be that bad, can it?"',
      facts:[
        { topic:'SABA overuse is a red flag, not a benign request', text:'CORE \u2014 frequent reliever (SABA) use is a marker of POOR CONTROL and increased risk of severe attacks and asthma DEATH. Rules of thumb: ordering \u22653 SABA inhalers a year suggests poorly controlled asthma; \u226512 a year is a HIGH-RISK marker (the National Review of Asthma Deaths highlighted SABA over-reliance and preventer under-use as key avoidable factors). Her 7th in 12 months with little preventer is a warning sign demanding assessment, not a quick reissue.' },
        { topic:'Assess control properly', text:'Assess asthma control rather than accept "I feel fine": daytime symptoms and reliever use frequency, NIGHT waking, activity/exercise limitation, time off work/study, number of exacerbations and ORAL STEROID courses in the last year, and any previous severe attacks, A&E attendances, admissions or ICU (the strongest predictors of future risk). Frequent SABA use IS uncontrolled asthma even if she feels "used to it".' },
        { topic:'Why the preventer matters \u2014 and why it isn\u2019t taken', text:'The inhaled CORTICOSTEROID preventer treats the underlying airway inflammation and reduces attacks and deaths; the reliever only masks symptoms. Explore WHY she doesn\u2019t take it: beliefs (steroid fears, "only when bad"), not feeling benefit, poor technique, regimen complexity, cost/access, or simply not understanding its role. Correcting beliefs and technique is central \u2014 "I feel fine on the blue" is exactly the dangerous misconception to address.' },
        { topic:'The MART / anti-inflammatory reliever shift', text:'Modern asthma management has moved AWAY from SABA-alone reliever use. Options to optimise control: ensure REGULAR ICS, or use ICS\u2013FORMOTEROL as MART (Maintenance And Reliever Therapy) \u2014 a single inhaler used both daily and as the reliever, so every reliever puff also delivers anti-inflammatory ICS; or an anti-inflammatory reliever (ICS-formoterol PRN) approach. This reduces SABA over-reliance and exacerbations. The examined skill is moving her onto a regimen that fixes the inflammation, not handing over another blue inhaler.' },
        { topic:'Technique, triggers, plan, follow-up', text:'Check inhaler TECHNIQUE (demonstrate), identify TRIGGERS (allergens, smoking/vaping, NSAIDs, occupational), address smoking, provide a PERSONALISED ASTHMA ACTION PLAN (recognising deterioration, when to step up/seek help), ensure vaccinations, and arrange proactive FOLLOW-UP/annual review. Spirometry/FeNO and step-up per guideline as needed.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 her "I feel fine, the blue works, I don\u2019t bother with the brown" is genuine misconception plus the convenience of a quick fix; she underestimates her risk because the reliever masks symptoms and she has normalised breathlessness. The skill is to take the request as an opportunity, gently but clearly reframe SABA overuse as a danger signal, correct the preventer misconception, and optimise the regimen \u2014 without frightening her into disengagement or simply refusing the inhaler.' },
      ],
      ice:{
        ideas:'The blue inhaler works and she feels fine, so her asthma "can\u2019t be that bad"; the preventer is optional.',
        concerns:'HIDDEN AGENDA \u2014 normalised breathlessness and underestimated risk; possible steroid/preventer beliefs; wants a quick reissue.',
        expectations:'A quick blue-inhaler reissue. What she needs: recognition of SABA overuse as a risk marker, a control assessment, the preventer misconception corrected, and regimen optimisation (regular ICS/MART) with a plan \u2014 not just another reliever.'
      },
      cues:['7th salbutamol in 12 months + rarely uses preventer \u2014 SABA overuse is a red flag for poor control and asthma death, not a benign request.','"I feel fine, the blue sorts me out" \u2014 dangerous misconception; the reliever masks inflammation the preventer treats; assess control properly.','Optimise the regimen \u2014 regular ICS or ICS-formoterol MART (reliever doubles as preventer) \u2014 the marks are in recognising risk, not adding a blue inhaler.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises SABA OVERUSE (7th in 12 months) as a RED-FLAG marker of poorly controlled asthma and increased risk of severe attacks/death \u2014 not a benign reissue request' },
      { dom:'tasks', text:'Assesses CONTROL properly \u2014 symptom/reliever frequency, night waking, activity limitation, exacerbations/oral-steroid courses, and prior attacks/A&E/admissions/ICU \u2014 rather than accepting "I feel fine"' },
      { dom:'tasks', text:'Explains the PREVENTER (ICS treats underlying inflammation, reduces attacks/deaths; reliever only masks) and explores WHY it isn\u2019t taken (beliefs, technique, benefit, access), correcting the "fine on the blue" misconception' },
      { dom:'tasks', text:'Optimises the REGIMEN per modern practice \u2014 ensures regular ICS or moves to ICS\u2013FORMOTEROL MART/anti-inflammatory reliever \u2014 reducing SABA reliance, rather than simply issuing another reliever' },
      { dom:'tasks', text:'Checks inhaler TECHNIQUE, identifies triggers (smoking/allergens/NSAIDs/occupational), provides a PERSONALISED ASTHMA ACTION PLAN, ensures vaccinations, and arranges proactive review (spirometry/FeNO/step-up as indicated)' },
      { dom:'rto',   text:'Reframes SABA overuse as a danger signal clearly but without frightening her into disengagement, and reads the "I feel fine" as normalised risk/misconception rather than dismissing the request outright' },
      { dom:'rto',   text:'Explains the preventer/MART rationale in accessible terms, checks understanding (and technique teach-back), and supports adherence' },
      { dom:'gs',    text:'Safety-nets and follows up: red flags of an attack and when to seek emergency help, the action plan, regimen change with review of SABA use and control, and proactive recall \u2014 recognising and treating risk, not reissuing a reliever' },
    ],
    worked:[
      { lbl:'Use the request as an opening', txt:'"Of course we\u2019ll make sure you\u2019ve got a reliever \u2014 but can I be honest? Getting through seven blue inhalers in a year actually tells me your asthma isn\u2019t as well controlled as it feels, and that\u2019s worth a proper look, because it matters for your safety."' },
      { lbl:'Assess control', txt:'"Let me ask: do you wake at night coughing or wheezy? Does it stop you exercising or affect work? Have you needed steroid tablets or A&E in the last year? \u2026 Okay. Even though you feel \u2018used to it\u2019, those answers tell me there\u2019s room to feel a lot better."' },
      { lbl:'Correct the preventer myth', txt:'"Here\u2019s the key thing: the blue inhaler only relieves symptoms in the moment \u2014 it doesn\u2019t treat the inflammation underneath. The preventer does, and that\u2019s what reduces attacks and keeps you safe. \u2018Feeling fine on the blue\u2019 is exactly the trap, because it hides the problem."' },
      { lbl:'Offer the modern regimen', txt:'"The modern way makes this easier: one inhaler you take regularly that also works as your reliever \u2014 so every puff you take when wheezy also delivers the preventer. It cuts down attacks and means you\u2019re not relying on the blue alone. Shall we set that up?"' },
      { lbl:'Technique + plan', txt:'"Show me how you use it \u2026 let\u2019s tweak that. I\u2019ll give you a written action plan so you know what to do if it worsens, and we should look at triggers \u2014 smoking, allergies. Are you vaping or smoking at all?"' },
      { lbl:'Safety-net + recall', txt:'"If you\u2019re ever using the reliever more and more, breathless at rest, or it\u2019s not lasting, that\u2019s a warning \u2014 seek help, and 999 if you can\u2019t speak in sentences. Let\u2019s review you in a few weeks to see how the new inhaler\u2019s working and check your control properly."' },
    ],
    learning:'Frequent reliever (SABA) use is a RED-FLAG marker of poorly controlled asthma and increased risk of severe attacks and asthma DEATH \u2014 not a benign request: ordering \u22653 SABA inhalers a year suggests poor control and \u226512 a year is a high-risk marker, and the National Review of Asthma Deaths identified SABA over-reliance with preventer under-use as key avoidable factors. So a 7th salbutamol in 12 months with little preventer use demands ASSESSMENT, not a quick reissue. Assess control rather than accept "I feel fine": symptom and reliever frequency, night waking, activity limitation, exacerbations and oral-steroid courses, and prior attacks/A&E/admissions/ICU (the strongest predictors of future risk) \u2014 frequent SABA use IS uncontrolled asthma even when normalised. Explain that the inhaled CORTICOSTEROID preventer treats the underlying airway inflammation and reduces attacks and deaths whereas the reliever only masks symptoms, and explore why the preventer is not taken (steroid beliefs, "only when bad", no perceived benefit, poor technique, access) \u2014 correcting the dangerous "fine on the blue" misconception. Optimise the regimen per modern practice: ensure regular ICS or move to ICS\u2013FORMOTEROL MART (a single inhaler used daily and as reliever, so every reliever puff delivers anti-inflammatory ICS) / anti-inflammatory reliever approach, reducing SABA reliance and exacerbations \u2014 the marks are in recognising risk and optimising, not adding another blue inhaler. Check inhaler technique, identify triggers (smoking/allergens/NSAIDs/occupational), provide a personalised asthma action plan, ensure vaccinations, and arrange proactive review (spirometry/FeNO/step-up as indicated). Reframe SABA overuse clearly but without frightening the patient into disengagement, and safety-net for attacks. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'BTS/SIGN & NICE/GINA asthma \u00b7 SABA overuse & NRAD \u00b7 MART / anti-inflammatory reliever \u00b7 personalised asthma action plan',
      points:[
        { h:'SABA overuse = risk', t:'\u22653 SABA inhalers/year suggests poor control; \u226512/year is a high-risk marker for severe attacks and death (NRAD). Treat frequent reliever requests as a danger signal, not a reissue.' },
        { h:'Assess control', t:'Symptom/reliever frequency, night waking, activity limitation, exacerbations/oral-steroid courses, and prior attacks/A&E/admissions/ICU. Frequent SABA use is uncontrolled asthma even if normalised.' },
        { h:'Preventer vs reliever', t:'ICS preventer treats airway inflammation and reduces attacks/deaths; SABA only relieves symptoms. Explore and correct under-use (beliefs, technique, benefit, access).' },
        { h:'MART / AIR', t:'Modern practice moves away from SABA-alone: ensure regular ICS or use ICS-formoterol as MART (single inhaler, maintenance + reliever) / anti-inflammatory reliever, so every reliever puff delivers ICS \u2014 reducing exacerbations.' },
        { h:'Technique & triggers', t:'Check/correct inhaler technique; identify triggers (smoking/vaping, allergens, NSAIDs, occupational); address smoking; ensure vaccinations.' },
        { h:'Action plan & review', t:'Provide a personalised asthma action plan (recognise deterioration, step-up, seek help); arrange proactive review; spirometry/FeNO and guideline step-up as indicated.' },
        { h:'Never do', t:'Never reissue SABA without assessing control; never accept "I feel fine" at face value; never ignore preventer under-use or poor technique; never miss prior attacks/admissions; never frighten into disengagement.' },
        { h:'Safety-net & follow-up', t:'Attack red flags and emergency advice (can\u2019t speak in sentences \u2192 999); action plan; regimen change with review of SABA use/control; proactive recall.' }
      ]
    }
  };

  /* ============ 193. F2F — Asthma review after an A&E attendance: the adherence truth ============ */
  const c193 = {
    id:'asthma-post-attack', title:'"I only ended up in A&E because I had a cold \u2014 I\u2019m back to normal now, no need to fuss"', type:'video', duration:12,
    meta:{ age:31, sex:'M', setting:'Video consultation \u2014 post-A&E asthma review.', system:'Respiratory \u2014 the post-attack review: risk, adherence & the action plan' },
    brief:'Mr Kwame Boateng, 31, attends for a post-attendance asthma review after presenting to A&E with an acute attack 10 days ago (given nebulisers and a course of oral prednisolone). He minimises it ("just a cold", "back to normal"). The examinable task is the high-value POST-ATTACK REVIEW: recognise that a recent attack/A&E attendance is a MAJOR risk factor for a future life-threatening attack (so this review matters), establish what actually happened and WHY (the ADHERENCE TRUTH \u2014 was he taking his preventer? technique? running out? SABA over-reliance? triggers? delayed seeking help?), reassess control and risk, OPTIMISE treatment (ensure/step-up ICS or MART, correct technique), co-create a PERSONALISED ASTHMA ACTION PLAN, address triggers/smoking and vaccination, and arrange STRUCTURED FOLLOW-UP (post-exacerbation review within ~48h\u20132 weeks is recommended). The communication skill is eliciting the honest adherence story non-judgementally and converting a minimised event into engagement \u2014 not colluding with "no need to fuss". No NG12 cancer link.',
    script:{
      opening:'"Morning. I know I\u2019m booked in after the A&E thing, but honestly it was a one-off \u2014 I just had a bad cold and my chest flared. I\u2019m completely back to normal now. I don\u2019t really think there\u2019s much to discuss; I don\u2019t want to make a big deal of it."',
      facts:[
        { topic:'A recent attack is a major future-risk marker', text:'CORE \u2014 a recent asthma ATTACK requiring A&E/oral steroids is one of the STRONGEST predictors of a future severe or fatal attack. This review is therefore high-value, not a formality. Gently but clearly counter the minimisation: the fact he needed A&E and steroids means his asthma was, at that point, dangerously out of control \u2014 understanding why is what prevents the next one.' },
        { topic:'Establish what happened \u2014 and the adherence truth', text:'Reconstruct the attack: how it built up, what he did, how long before he sought help (delayed presentation is common and dangerous), and crucially the ADHERENCE TRUTH \u2014 was he taking his PREVENTER regularly before the attack, or only the reliever? Had he run out? Technique? This must be elicited NON-JUDGEMENTALLY (normalise that many people drift off the preventer when they feel well) to get the real story rather than a defensive one.' },
        { topic:'Reassess control and risk factors', text:'Assess current control (symptoms, night waking, reliever use, activity), and document RISK FACTORS for future attacks: previous near-fatal/ICU attacks, multiple A&E visits/admissions, high SABA use, poor adherence, no action plan, smoking, comorbid allergy/anxiety, and socioeconomic factors. The recent attack itself flags him as higher-risk and warrants closer follow-up.' },
        { topic:'Optimise treatment & technique', text:'OPTIMISE: ensure he is on and TAKING a regular ICS (or ICS-formoterol MART), step up per guideline if control is poor, and CHECK inhaler technique (demonstrate). Treat any ongoing inflammation, complete/confirm the steroid course was finished, and address reliever over-reliance. The attack is an opportunity to get the maintenance regimen right.' },
        { topic:'Action plan, triggers, follow-up', text:'Co-create a PERSONALISED ASTHMA ACTION PLAN (recognise deterioration, when to increase treatment, when to seek emergency help \u2014 having a written plan reduces attacks and deaths), address triggers (viral illness planning, smoking, allergens, occupational), ensure flu/other vaccination, and arrange STRUCTURED FOLLOW-UP \u2014 a post-exacerbation review is recommended (ideally within ~48 hours of discharge and again within ~2 weeks), with ongoing annual review.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 his "it was just a cold, I\u2019m fine, no fuss" minimises a frightening event, perhaps from embarrassment about not taking his preventer, a wish not to be a "sick person", or genuine under-appreciation of the danger. The skill is to validate that he feels well now, non-judgementally surface the adherence truth, and convert the minimised attack into engagement and a concrete plan \u2014 not collude with "nothing to discuss".' },
      ],
      ice:{
        ideas:'The attack was a one-off caused by a cold; he\u2019s back to normal and there\u2019s little to discuss.',
        concerns:'HIDDEN AGENDA \u2014 minimising a frightening event; possible embarrassment about preventer non-adherence; not wanting to be a "sick person"; under-appreciating the risk.',
        expectations:'A quick, dismissive review. What he needs: recognition that a recent attack is a major risk marker, the honest adherence story elicited, treatment/technique optimised, an action plan, and structured follow-up.'
      },
      cues:['A&E attack + oral steroids 10 days ago \u2014 a recent attack is one of the strongest predictors of a future severe/fatal attack; high-value review.','"Just a cold, back to normal, no fuss" \u2014 minimisation; non-judgementally elicit the ADHERENCE truth (preventer use, technique, delayed help-seeking).','Optimise (regular ICS/MART + technique) + personalised action plan + structured post-exacerbation follow-up \u2014 convert the event into engagement.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises that a recent ATTACK requiring A&E/oral steroids is a MAJOR risk factor for a future severe/fatal attack \u2014 treating the post-attack review as high-value and countering the minimisation' },
      { dom:'tasks', text:'Reconstructs the attack and elicits the ADHERENCE TRUTH NON-JUDGEMENTALLY \u2014 preventer use before the attack, technique, running out, reliever over-reliance, and any delay in seeking help' },
      { dom:'tasks', text:'Reassesses current control and documents RISK FACTORS (previous severe/ICU attacks, multiple A&E/admissions, high SABA use, poor adherence, no action plan, smoking, allergy/anxiety, social factors)' },
      { dom:'tasks', text:'OPTIMISES treatment \u2014 ensures/steps up regular ICS or MART, checks and corrects inhaler TECHNIQUE, confirms the steroid course completed, addresses reliever over-reliance' },
      { dom:'tasks', text:'Co-creates a PERSONALISED ASTHMA ACTION PLAN, addresses triggers (viral illness, smoking, allergens, occupational) and vaccination, and arranges STRUCTURED post-exacerbation follow-up (≈48h and ≈2 weeks) plus ongoing review' },
      { dom:'rto',   text:'Validates that he feels well now while gently countering the "just a cold/no fuss" minimisation, and surfaces the adherence story without judgement so he engages honestly' },
      { dom:'rto',   text:'Explains why the review matters (future-attack risk) in a way that motivates rather than frightens, and checks understanding of the plan and technique' },
      { dom:'gs',    text:'Safety-nets and follows up: attack red flags and emergency advice, the action plan, optimised regimen with review of adherence/control, structured post-exacerbation recall, and engagement secured \u2014 not a colluding "nothing to discuss" review' },
    ],
    worked:[
      { lbl:'Reframe the "one-off"', txt:'"I\u2019m really glad you came, and I get that you feel fine now \u2014 that\u2019s good. But I want to be honest: needing A&E and steroids means your asthma was genuinely dangerous that day, not just a cold. Understanding why is the best way to make sure it doesn\u2019t happen again."' },
      { lbl:'Get the honest story', txt:'"Talk me through it \u2014 how did it build up, and how long before you got help? \u2026 And in the weeks before, were you taking the preventer regularly, or had it slipped? Honestly \u2014 loads of people drift off it when they feel well, it\u2019s really common, I\u2019m not telling you off."' },
      { lbl:'Surface adherence, no blame', txt:'"So the brown inhaler had been on and off. That\u2019s really useful to know, because that\u2019s often the thread behind an attack \u2014 the inflammation builds up quietly while you feel okay, then a cold tips it over. We can fix that."' },
      { lbl:'Optimise + technique', txt:'"Let\u2019s get you on a regimen that\u2019s easier to stick to \u2014 ideally one inhaler that\u2019s both preventer and reliever \u2014 and check your technique now. Did you finish the steroid course? Good."' },
      { lbl:'Action plan', txt:'"I\u2019ll write you a personal action plan: what your normal is, the early warning signs, when to step up, and exactly when to get emergency help. Having this in writing genuinely reduces the risk of another bad attack."' },
      { lbl:'Follow-up + safety-net', txt:'"I\u2019d like to see you again soon to check how you\u2019re doing now and again in a couple of weeks \u2014 these reviews after an attack really matter. And if you\u2019re ever breathless at rest or can\u2019t speak in full sentences, that\u2019s 999. Deal?"' },
    ],
    learning:'The post-attack asthma review is high-value because a recent ATTACK requiring A&E or oral steroids is one of the STRONGEST predictors of a future severe or fatal attack \u2014 so the patient\u2019s "it was just a cold, I\u2019m fine, no fuss" minimisation must be gently but clearly countered: needing A&E and steroids means the asthma was dangerously out of control, and understanding why prevents the next event. Reconstruct the attack (how it built, what he did, any delay in seeking help \u2014 common and dangerous) and elicit the ADHERENCE TRUTH NON-JUDGEMENTALLY \u2014 whether the preventer was being taken regularly, technique, running out, reliever over-reliance \u2014 normalising that many people drift off the preventer when well, to get the real rather than defensive story. Reassess current control and document risk factors for future attacks (previous near-fatal/ICU attacks, multiple A&E/admissions, high SABA use, poor adherence, no action plan, smoking, allergy/anxiety, social factors). OPTIMISE treatment \u2014 ensure and step up a regular ICS or ICS-formoterol MART, check and correct inhaler technique, confirm the steroid course completed, and address reliever over-reliance. Co-create a PERSONALISED ASTHMA ACTION PLAN (recognise deterioration, when to step up, when to seek emergency help \u2014 written plans reduce attacks and deaths), address triggers and vaccination, and arrange STRUCTURED post-exacerbation FOLLOW-UP (recommended ≈48 hours after discharge and again ≈2 weeks, with ongoing annual review). The communication skill is validating that he feels well now, surfacing the adherence story without judgement, and converting a minimised event into engagement and a concrete plan rather than colluding with "nothing to discuss". No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'BTS/SIGN & NICE/GINA asthma \u00b7 post-exacerbation review \u00b7 NRAD risk factors \u00b7 personalised asthma action plan',
      points:[
        { h:'Recent attack = high risk', t:'An attack needing A&E/oral steroids strongly predicts future severe/fatal attacks. The post-attack review is high-value; counter minimisation.' },
        { h:'Elicit the adherence truth', t:'Reconstruct the attack and ask non-judgementally about preventer use, technique, running out, reliever over-reliance and delayed help-seeking. Normalise to get the real story.' },
        { h:'Risk-factor inventory', t:'Previous near-fatal/ICU attacks, multiple A&E/admissions, high SABA use, poor adherence, no action plan, smoking, allergy/anxiety, social factors \u2014 document and act on these.' },
        { h:'Optimise treatment', t:'Ensure/step up regular ICS or MART; check and correct technique; confirm steroid course completed; address reliever over-reliance.' },
        { h:'Action plan', t:'Co-create a personalised written asthma action plan (normal state, early warning signs, step-up, emergency help) \u2014 reduces attacks and deaths.' },
        { h:'Structured follow-up', t:'Post-exacerbation review recommended ≈48 hours after discharge and again ≈2 weeks; ongoing annual review; address triggers and vaccination.' },
        { h:'Never do', t:'Never treat a post-attack review as a formality; never accept "just a cold/no fuss"; never blame the patient for non-adherence; never miss preventer under-use/technique; never omit the action plan/follow-up.' },
        { h:'Safety-net & follow-up', t:'Attack red flags and emergency advice (can\u2019t speak in sentences \u2192 999); action plan; optimised regimen with adherence/control review; structured recall; engagement secured.' }
      ]
    }
  };

  /* ============ 194. VIDEO — Breathlessness in a young adult: anxiety is a diagnosis of exclusion ============ */
  const c194 = {
    id:'breathless-anxiety', title:'"I keep getting breathless and tingly \u2014 I think it\u2019s panic, but what if it\u2019s my heart?"', type:'video', duration:12,
    meta:{ age:26, sex:'F', setting:'Video consultation \u2014 episodic breathlessness in a young adult.', system:'Respiratory / Cardiology / Mental health \u2014 breathlessness: anxiety as a diagnosis of exclusion' },
    brief:'Miss Hollie Vance, 26, has recurrent episodes of breathlessness with chest tightness, peri-oral/finger TINGLING, palpitations and a sense of dread, often at stressful moments, settling over 20\u201330 minutes. She suspects panic but fears a heart or lung problem. The examinable task is to hold the principle that ANXIETY/PANIC and HYPERVENTILATION are diagnoses of EXCLUSION in breathlessness: take a careful history and actively EXCLUDE organic causes appropriate to a young adult \u2014 ASTHMA (triggers, diurnal/exertional wheeze, atopy), ARRHYTHMIA (palpitations, syncope, family history of sudden death), ANAEMIA, THYROID disease (hyperthyroidism), PE (if risk factors), and rarer cardiac/respiratory disease \u2014 with focused examination and proportionate tests (obs/sats, ECG, FBC, TFTs, peak flow/spirometry \u00b1 D-dimer if indicated); recognise the features that DO fit hyperventilation/panic (tingling, perioral paraesthesiae, carpopedal spasm, situational onset, rapid full recovery); and THEN, having excluded the dangerous, validate and manage the anxiety/panic positively (explain the physiology, breathing techniques, CBT/psychological therapy, address triggers) \u2014 making a POSITIVE diagnosis, not a dismissive "it\u2019s just anxiety". No NG12 cancer link.',
    script:{
      opening:'"This is going to sound silly \u2014 I keep getting these episodes where I can\u2019t catch my breath, my chest goes tight, my lips and fingers tingle and my heart races, and I feel like something awful\u2019s about to happen. I think it might be panic attacks\u2026 but a bit of me is terrified it\u2019s my heart or my lungs. Can you tell me it\u2019s not something serious?"',
      facts:[
        { topic:'Anxiety/panic is a diagnosis of EXCLUSION', text:'CORE PRINCIPLE \u2014 attributing breathlessness to anxiety/panic or hyperventilation should be a POSITIVE diagnosis made AFTER excluding organic causes, never a lazy first label. Even when the story sounds typically panic-like, a careful history, examination and proportionate investigation to exclude the dangerous causes is both safer and more therapeutic (a confident "I\u2019ve checked X, Y and Z and they\u2019re clear" reassures far better than a dismissive "it\u2019s just anxiety").' },
        { topic:'Exclude the organic causes relevant to a young adult', text:'Screen and consider: ASTHMA (episodic wheeze, nocturnal/exertional symptoms, triggers, atopy \u2014 peak flow/spirometry \u00b1 FeNO); ARRHYTHMIA (palpitations, syncope/pre-syncope, exertional symptoms, FAMILY HISTORY of sudden cardiac death/inherited conditions \u2014 ECG); ANAEMIA (FBC); HYPERTHYROIDISM (weight loss, tremor, heat intolerance \u2014 TFTs); PE (pleuritic pain, calf swelling, risk factors \u2014 only if indicated); and rarer cardiac/respiratory causes. Examine: obs, sats, heart and chest, signs of thyroid disease/anaemia.' },
        { topic:'Recognise the features that fit hyperventilation/panic', text:'Features SUPPORTING panic/hyperventilation: situational/stress-related onset, peri-oral and peripheral TINGLING/paraesthesiae (respiratory alkalosis), carpopedal spasm, a sense of impending doom, light-headedness, rapid full recovery, normal exam/obs between and during typical episodes, and association with anxiety. These are positive pointers \u2014 but they coexist with, and do not replace, exclusion of organic disease.' },
        { topic:'Make a POSITIVE diagnosis and explain the physiology', text:'Once organic causes are reasonably excluded, give a POSITIVE diagnosis of panic/anxiety with hyperventilation, and EXPLAIN the physiology in a destigmatising way: over-breathing blows off CO2, causing the tingling, light-headedness and chest tightness, which feel frightening and fuel more over-breathing \u2014 a self-perpetuating cycle, not a heart attack. Understanding the mechanism is itself therapeutic and breaks the catastrophic interpretation.' },
        { topic:'Manage the anxiety/panic positively', text:'Management: breathing/relaxation techniques (controlled/diaphragmatic breathing; the older paper-bag advice is discouraged), psychoeducation, and evidence-based PSYCHOLOGICAL THERAPY (CBT for panic disorder \u2014 self-referral to NHS Talking Therapies), addressing triggers and any underlying stressors, lifestyle (caffeine, sleep, exercise), and SSRIs where panic disorder is significant/persistent. Screen mood and severity. Provide a safety-net for new/atypical features.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 she suspects panic but is FRIGHTENED it is her heart/lungs, and may also be seeking permission to take the anxiety seriously or to discuss an underlying stressor. The skill is to take the fear seriously (not dismiss), genuinely exclude the dangerous, give a confident positive diagnosis with explanation, and validate and treat the anxiety \u2014 the reassurance lands because the exclusion was real.' },
      ],
      ice:{
        ideas:'She suspects panic attacks but fears a serious heart or lung problem.',
        concerns:'HIDDEN AGENDA \u2014 genuine fear it\u2019s her heart/lungs; possibly wanting permission to take the anxiety seriously or to discuss a stressor; fear of being dismissed.',
        expectations:'To be told it\u2019s not something serious. What she needs: genuine exclusion of organic causes, a confident POSITIVE diagnosis of panic with physiological explanation, and validated, evidence-based anxiety management \u2014 not a dismissive "it\u2019s just anxiety".'
      },
      cues:['Episodic breathlessness + chest tightness + peri-oral/finger tingling + palpitations + dread, stress-related, full recovery \u2014 fits hyperventilation/panic, but it\u2019s a diagnosis of EXCLUSION.','Exclude asthma, arrhythmia (ECG, family history of sudden death), anaemia (FBC), thyroid (TFTs), PE if indicated \u2014 with focused exam/obs/sats before labelling.','"Tell me it\u2019s not serious" \u2014 take the fear seriously; confident positive diagnosis + physiology explanation + CBT/breathing, not a dismissive label.']
    },
    checkpoints:[
      { dom:'tasks', text:'Holds the principle that anxiety/panic/hyperventilation is a diagnosis of EXCLUSION \u2014 not labelling breathlessness as anxiety before excluding organic causes' },
      { dom:'tasks', text:'Actively EXCLUDES organic causes relevant to a young adult \u2014 asthma (peak flow/spirometry), arrhythmia (palpitations/syncope/FAMILY HISTORY of sudden death; ECG), anaemia (FBC), hyperthyroidism (TFTs), PE if risk factors \u2014 with focused examination (obs, sats, heart, chest, thyroid)' },
      { dom:'tasks', text:'Recognises the POSITIVE features of hyperventilation/panic (situational onset, peri-oral/peripheral tingling, carpopedal spasm, doom, rapid full recovery, normal exam) without using them to skip exclusion' },
      { dom:'tasks', text:'Makes a POSITIVE diagnosis and EXPLAINS the physiology (over-breathing \u2192 low CO2 \u2192 tingling/light-headedness/chest tightness \u2192 more fear \u2014 a self-perpetuating cycle), destigmatising it' },
      { dom:'tasks', text:'Manages anxiety/panic positively \u2014 breathing/relaxation techniques (not paper-bag), psychoeducation, CBT/psychological therapy (self-referral/NHS Talking Therapies), addressing triggers/stressors and lifestyle (caffeine/sleep), SSRIs if significant \u2014 and screens mood/severity' },
      { dom:'rto',   text:'Takes the fear (heart/lungs) seriously rather than dismissing, and lands reassurance on the back of genuine exclusion \u2014 a confident positive diagnosis, not "it\u2019s just anxiety"' },
      { dom:'rto',   text:'Explores any underlying stressor empathically, validates the distress, checks understanding, and supports engagement with psychological treatment' },
      { dom:'gs',    text:'Safety-nets and follows up: which NEW/atypical features warrant review (exertional/positional symptoms, syncope, true wheeze, weight loss), results of any tests, the psychological-therapy plan and review \u2014 a positive diagnosis after exclusion, not a dismissive label' },
    ],
    worked:[
      { lbl:'Take the fear seriously', txt:'"It doesn\u2019t sound silly at all \u2014 those episodes are genuinely frightening, and it\u2019s sensible to want to be sure it\u2019s not your heart or lungs. So rather than just say \u2018it\u2019s anxiety\u2019, let me properly check the things that matter, and then we\u2019ll know."' },
      { lbl:'Exclude the dangerous', txt:'"A few questions: are you ever breathless or wheezy with exercise or at night? Any blackouts, or family members who died suddenly young? Any weight loss, tremor, feeling hot? \u2026 And let me check your pulse, oxygen and listen to your chest, and I\u2019ll arrange a heart tracing and some bloods \u2014 thyroid and blood count."' },
      { lbl:'Name the positive features', txt:'"Now \u2014 the tingling round your lips and in your fingers, the racing heart, the sense of dread, coming on with stress and settling in half an hour: those are very typical of panic and over-breathing, which is reassuring once we\u2019ve checked the rest."' },
      { lbl:'Explain the physiology', txt:'"Here\u2019s what\u2019s happening: when anxiety makes you breathe too fast, you blow off carbon dioxide, and that causes exactly these symptoms \u2014 tingling, light-headedness, tight chest. They feel alarming, which makes you breathe faster still. It\u2019s a loop, not a heart attack \u2014 and that\u2019s genuinely good news because we can break it."' },
      { lbl:'Positive management', txt:'"The most effective treatment is a talking therapy called CBT \u2014 you can refer yourself \u2014 plus some breathing techniques I\u2019ll show you to use in the moment. Cutting caffeine and improving sleep help too. If the panic\u2019s frequent and disabling, a medication can also help."' },
      { lbl:'Validate + safety-net', txt:'"This is real and treatable, not \u2018all in your head\u2019. Once the tests are back I\u2019ll confirm everything\u2019s clear. But if you ever get breathless on exertion, blackout, or symptoms that don\u2019t fit this pattern, come back \u2014 we\u2019d look again. Is there anything stressful going on we should talk about?"' },
    ],
    learning:'Attributing breathlessness to ANXIETY/PANIC or HYPERVENTILATION must be a POSITIVE diagnosis made AFTER excluding organic causes \u2014 it is a diagnosis of EXCLUSION, never a lazy first label \u2014 and, even when the story sounds typically panic-like, genuine exclusion is both safer and more therapeutic, because a confident "I\u2019ve checked and these are clear" reassures far better than a dismissive "it\u2019s just anxiety". In a young adult, take a careful history and examination and exclude the relevant causes: ASTHMA (episodic/nocturnal/exertional wheeze, triggers, atopy \u2014 peak flow/spirometry \u00b1 FeNO), ARRHYTHMIA (palpitations, syncope/pre-syncope, exertional symptoms, family history of sudden cardiac death \u2014 ECG), ANAEMIA (FBC), HYPERTHYROIDISM (weight loss, tremor, heat intolerance \u2014 TFTs), PE (only if risk factors), and rarer cardiorespiratory disease, with focused examination (obs, sats, heart, chest, thyroid/anaemia signs). Recognise the features that POSITIVELY fit hyperventilation/panic \u2014 situational/stress onset, peri-oral and peripheral tingling, carpopedal spasm, a sense of doom, light-headedness, rapid full recovery and a normal examination \u2014 without using them to skip exclusion. Then make a positive diagnosis and EXPLAIN the physiology in a destigmatising way: over-breathing lowers CO2, producing tingling, light-headedness and chest tightness, which feel frightening and drive more over-breathing \u2014 a self-perpetuating cycle, not a heart attack \u2014 because understanding the mechanism is itself therapeutic. Manage positively: controlled/diaphragmatic breathing techniques (not paper-bag), psychoeducation, CBT/psychological therapy (self-referral to talking therapies), addressing triggers/stressors and lifestyle (caffeine, sleep), and SSRIs for significant panic disorder, screening mood and severity. Take the fear seriously, land reassurance on real exclusion, validate and treat the anxiety, and safety-net for new/atypical features. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Breathlessness differential in young adults \u00b7 panic disorder (NICE) \u00b7 hyperventilation physiology \u00b7 anxiety as diagnosis of exclusion',
      points:[
        { h:'Exclusion, then positive label', t:'Anxiety/panic/hyperventilation is a diagnosis of exclusion. Exclude organic causes first, then make a confident positive diagnosis \u2014 reassurance lands because the exclusion was real.' },
        { h:'Exclude the dangerous', t:'Asthma (peak flow/spirometry/FeNO), arrhythmia (ECG; ask palpitations/syncope/family history of sudden death), anaemia (FBC), hyperthyroidism (TFTs), PE if risk factors. Examine obs/sats/heart/chest/thyroid.' },
        { h:'Positive panic features', t:'Situational/stress onset, peri-oral/peripheral tingling, carpopedal spasm, doom, light-headedness, rapid full recovery, normal exam. Supportive \u2014 not a substitute for exclusion.' },
        { h:'Explain the physiology', t:'Over-breathing lowers CO2 (respiratory alkalosis) \u2192 tingling, light-headedness, chest tightness \u2192 more fear \u2192 more over-breathing. A self-perpetuating cycle, not a heart attack. Destigmatising explanation is therapeutic.' },
        { h:'Positive management', t:'Controlled/diaphragmatic breathing (not paper-bag), psychoeducation, CBT/psychological therapy (self-referral/NHS Talking Therapies), address triggers/stressors and lifestyle (caffeine, sleep), SSRI for significant panic disorder; screen mood.' },
        { h:'Take the fear seriously', t:'The patient fearing a heart/lung cause needs genuine exclusion and a confident positive diagnosis, not dismissal. Explore underlying stressors empathically.' },
        { h:'Never do', t:'Never label "just anxiety" without exclusion; never ignore exertional/positional symptoms, syncope or family history of sudden death; never dismiss the distress; never advise paper-bag rebreathing.' },
        { h:'Safety-net & follow-up', t:'Review for new/atypical features (exertional/positional symptoms, syncope, true wheeze, weight loss); communicate test results; psychological-therapy plan and review.' }
      ]
    }
  };

  /* ============ 195. VIDEO — Snoring + daytime sleepiness: OSA, Epworth and the DVLA ============ */
  const c195 = {
    id:'osa-epworth-dvla', title:'"My wife says I stop breathing in my sleep \u2014 but I just need something for the snoring"', type:'video', duration:12,
    meta:{ age:52, sex:'M', setting:'Video consultation \u2014 snoring and daytime sleepiness.', system:'Respiratory / Sleep \u2014 obstructive sleep apnoea: assessment, Epworth & the DVLA duty' },
    brief:'Mr Raj Malhotra, 52, lorry driver (Group 2 licence), BMI 34, attends because his wife is fed up with his SNORING \u2014 and mentions she has noticed he STOPS BREATHING and gasps at night. He admits to being exhausted, dozing off during the day, and recently nearly nodding off at the wheel. He wants "something for the snoring". The examinable task is to recognise the picture of OBSTRUCTIVE SLEEP APNOEA (snoring + witnessed apnoeas + excessive daytime SLEEPINESS + obesity), assess it (symptoms, witnessed apnoeas, the EPWORTH Sleepiness Scale, neck circumference/BMI, comorbidities \u2014 hypertension, AF, type 2 diabetes), refer for SLEEP STUDY/sleep-clinic assessment, advise lifestyle (weight loss, alcohol/sedative avoidance, sleep position) and that treatment (CPAP) is highly effective; and \u2014 the critical, examinable SAFETY/PROFESSIONAL duty \u2014 address DRIVING: advise him not to drive while sleepy, explain the legal obligation to inform the DVLA (especially as a Group 2/HGV driver), and the implications. The hidden agenda is he wants the snoring fixed and is minimising the sleepiness/driving risk because his livelihood (HGV licence) depends on it. No NG12 cancer link.',
    script:{
      opening:'"Doc, my wife\u2019s threatening to sleep in the spare room \u2014 my snoring\u2019s that bad. She also reckons I stop breathing and gasp, but I think she exaggerates. I\u2019m a bit knackered in the day, sure, but who isn\u2019t. Can you just give me something for the snoring \u2014 a spray or strips or something? I just want a decent night\u2019s sleep."',
      facts:[
        { topic:'Recognise the OSA picture', text:'Snoring + WITNESSED APNOEAS (partner sees pauses/gasping) + excessive daytime SLEEPINESS + obesity is the classic picture of OBSTRUCTIVE SLEEP APNOEA. Don\u2019t treat it as simple snoring. Other pointers: unrefreshing sleep, morning headaches, nocturia, poor concentration/irritability, reduced libido, and a large NECK circumference. His exhaustion, daytime dozing and near-miss at the wheel are major flags.' },
        { topic:'Assess properly \u2014 including the Epworth scale', text:'Assess severity and impact: quantify daytime sleepiness with the EPWORTH SLEEPINESS SCALE (situational dozing score), document witnessed apnoeas, neck circumference and BMI, and screen the associated/consequent conditions \u2014 HYPERTENSION (often resistant), atrial fibrillation, type 2 diabetes, and cardiovascular risk. Crucially, ask DIRECTLY about sleepiness while DRIVING and any near-misses/accidents \u2014 he has volunteered a near-miss.' },
        { topic:'Refer for sleep study + manage', text:'Refer to a SLEEP SERVICE for diagnostic SLEEP STUDY (e.g. overnight oximetry/limited polysomnography) to confirm OSA and grade severity (AHI). Advise lifestyle measures \u2014 WEIGHT LOSS (often substantially improves or resolves OSA), avoiding ALCOHOL and SEDATIVES (worsen airway collapse), sleeping on the side, and smoking cessation. Explain that CPAP is a highly effective treatment for moderate-severe OSA and transforms daytime sleepiness; mandibular advancement devices help selected milder cases.' },
        { topic:'The DVLA duty \u2014 the examinable safety point', text:'CRITICAL \u2014 SLEEPINESS and DRIVING. Advise him NOT to drive while he feels sleepy. There is a LEGAL duty to inform the DVLA where a condition affects driving: OSA causing excessive sleepiness must be notified, and the threshold and consequences are stricter for GROUP 2 (HGV/bus) drivers like him \u2014 he should stop driving until the sleepiness is controlled and the DVLA/medical assessment permits. It is the patient\u2019s legal responsibility to notify; the doctor must advise this clearly, document it, and (per GMC guidance) if a patient continues to drive against advice and cannot be persuaded, may ultimately need to inform the DVLA. This conversation cannot be skipped because his livelihood is at stake \u2014 safety comes first.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 he wants the snoring fixed and is MINIMISING the apnoeas, sleepiness and driving risk, partly to keep his wife happy and partly because his HGV LIVELIHOOD depends on his licence and he fears losing it. The skill is to take the snoring complaint seriously while recognising the OSA and the genuine danger, handle the driving/DVLA issue honestly and supportively (treatment usually allows return to driving), and not collude with "just give me a spray".' },
        { topic:'What he needs', text:'Officially: something for the snoring. What he needs: recognition of likely OSA; assessment including the Epworth scale, witnessed apnoeas, neck/BMI and comorbidities; referral for a sleep study; lifestyle advice and explanation that CPAP is effective; and a clear, honest DRIVING/DVLA conversation (don\u2019t drive while sleepy; legal duty to notify, stricter for Group 2) handled supportively \u2014 not a snoring remedy and a wave-off.'
      }
      ],
      ice:{
        ideas:'It\u2019s just bad snoring that needs a spray/strips; the "stopping breathing" is his wife exaggerating; daytime tiredness is normal.',
        concerns:'HIDDEN AGENDA \u2014 fears losing his HGV licence/livelihood, so minimises sleepiness and driving risk; wants to placate his wife.',
        expectations:'A snoring remedy. What he needs: OSA recognised and assessed (Epworth/apnoeas/comorbidities), sleep-study referral, lifestyle + CPAP explanation, and an honest DVLA/driving-safety conversation \u2014 not just a spray.'
      },
      cues:['Snoring + witnessed apnoeas/gasping + daytime sleepiness + obesity + near-miss at the wheel \u2014 classic OSA; assess, don\u2019t treat as simple snoring.','Quantify with the Epworth scale; screen hypertension/AF/T2DM; refer for a sleep study; lifestyle (weight, alcohol) + CPAP is highly effective.','DVLA duty: don\u2019t drive while sleepy; legal obligation to notify (stricter for Group 2/HGV) \u2014 don\u2019t skip this because his livelihood is at stake.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the OBSTRUCTIVE SLEEP APNOEA picture (snoring + witnessed apnoeas/gasping + excessive daytime sleepiness + obesity) rather than treating it as simple snoring' },
      { dom:'tasks', text:'Assesses properly \u2014 quantifies daytime sleepiness with the EPWORTH scale, documents witnessed apnoeas, neck circumference/BMI, and screens associated conditions (hypertension, AF, type 2 diabetes, cardiovascular risk)' },
      { dom:'tasks', text:'Asks DIRECTLY about sleepiness while DRIVING and near-misses/accidents (he has volunteered a near-miss at the wheel)' },
      { dom:'tasks', text:'Refers for a SLEEP STUDY/sleep-service assessment to confirm and grade OSA, and advises lifestyle measures (weight loss, avoid alcohol/sedatives, side-sleeping, smoking) and that CPAP is highly effective for moderate-severe OSA' },
      { dom:'tasks', text:'Addresses the DVLA DUTY clearly: advises NOT to drive while sleepy, explains the LEGAL obligation to notify the DVLA (stricter threshold/consequences for GROUP 2/HGV), that it is the patient\u2019s responsibility, and documents the advice' },
      { dom:'rto',   text:'Recognises the minimisation driven by fear for his livelihood, takes the snoring complaint seriously while conveying the genuine danger, and does NOT collude with "just give me a spray"' },
      { dom:'rto',   text:'Handles the driving/DVLA conversation honestly but supportively \u2014 explaining that effective treatment usually allows a return to driving \u2014 and checks understanding' },
      { dom:'gs',    text:'Safety-nets and follows up: sleep-study referral and timeline, the driving advice documented (and GMC route if he continues to drive against advice), lifestyle plan, comorbidity review, and follow-up \u2014 OSA assessment + DVLA duty, not a snoring remedy and a wave-off' },
    ],
    worked:[
      { lbl:'Take it seriously, widen it', txt:'"I\u2019ll absolutely help with the snoring \u2014 but what your wife describes, the stopping and gasping, plus you being shattered and nearly nodding off driving, points to something we need to take seriously: a condition called sleep apnoea, where the airway collapses in sleep. That\u2019s more than snoring."' },
      { lbl:'Assess', txt:'"Let me ask how sleepy you really are \u2014 I\u2019ll use a quick scoring scale: how likely are you to doze watching TV, sitting reading, in a meeting, stopped in traffic? \u2026 And your collar size, and let\u2019s check your blood pressure \u2014 apnoea often pushes that up."' },
      { lbl:'Refer + treatment hope', txt:'"I\u2019m going to refer you for a sleep study to confirm it. The good news: it\u2019s very treatable. Losing some weight and cutting alcohol in the evening help a lot, and a machine called CPAP \u2014 a mask at night \u2014 is brilliant for this; most people feel like a new person and the daytime sleepiness goes."' },
      { lbl:'The driving conversation', txt:'"Now I have to be straight about driving, because it matters most. You\u2019ve nearly nodded off at the wheel \u2014 you must NOT drive while you feel sleepy. And there\u2019s a legal duty to tell the DVLA about this, which is stricter for your HGV licence."' },
      { lbl:'Support, not just bad news', txt:'"I know that\u2019s frightening with your job \u2014 but here\u2019s the important part: once it\u2019s treated and the sleepiness is controlled, people usually get back to driving, including professionally. Sorting this protects your licence long-term, and protects you and others now."' },
      { lbl:'Document + safety-net', txt:'"I\u2019ll write down that I\u2019ve advised you not to drive while sleepy and to notify the DVLA. Please don\u2019t drive to the sleep study sleepy \u2014 get a lift. If anything changes I\u2019m here, and we\u2019ll review once the study and treatment are sorted."' },
    ],
    learning:'Snoring with WITNESSED APNOEAS (partner-observed pauses/gasping), excessive daytime SLEEPINESS and obesity is the classic picture of OBSTRUCTIVE SLEEP APNOEA \u2014 not simple snoring \u2014 with supporting features of unrefreshing sleep, morning headaches, nocturia, poor concentration, reduced libido and a large neck circumference. Assess properly: quantify daytime sleepiness with the EPWORTH Sleepiness Scale, document witnessed apnoeas, neck circumference and BMI, and screen the associated/consequent conditions (often resistant hypertension, atrial fibrillation, type 2 diabetes, cardiovascular risk) \u2014 and ask DIRECTLY about sleepiness while DRIVING and any near-misses. Refer to a SLEEP SERVICE for a diagnostic SLEEP STUDY to confirm and grade OSA, advise lifestyle measures (WEIGHT LOSS often substantially improves or resolves it, avoid ALCOHOL and SEDATIVES, side-sleeping, smoking cessation), and explain that CPAP is highly effective for moderate-severe OSA and transforms daytime sleepiness (mandibular devices help selected milder cases). The critical, examinable point is the DVLA/DRIVING duty: advise the patient NOT to drive while sleepy, explain the LEGAL obligation to notify the DVLA where the condition affects driving \u2014 stricter threshold and consequences for GROUP 2 (HGV/bus) drivers \u2014 that it is the patient\u2019s responsibility to notify, document the advice, and (per GMC guidance) be prepared to inform the DVLA if a patient continues to drive against advice and cannot be dissuaded. This conversation cannot be skipped because the patient\u2019s livelihood is at stake \u2014 handle it honestly but supportively (effective treatment usually allows return to driving), recognising the minimisation driven by fear of losing the licence, and do not collude with "just give me something for the snoring". No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'OSA assessment & CPAP (NICE NG202) \u00b7 Epworth Sleepiness Scale \u00b7 DVLA fitness-to-drive (OSA, Group 2) \u00b7 GMC confidentiality/driving',
      points:[
        { h:'Recognise OSA', t:'Snoring + witnessed apnoeas/gasping + excessive daytime sleepiness + obesity is OSA, not simple snoring. Other clues: unrefreshing sleep, morning headache, nocturia, poor concentration, large neck.' },
        { h:'Assess with Epworth', t:'Quantify daytime sleepiness with the Epworth Sleepiness Scale; document witnessed apnoeas, neck circumference/BMI; screen hypertension (often resistant), AF, type 2 diabetes, cardiovascular risk.' },
        { h:'Ask about driving', t:'Directly ask about sleepiness while driving and near-misses/accidents \u2014 a critical safety and legal trigger.' },
        { h:'Refer & treat', t:'Refer for a sleep study to confirm/grade OSA. Lifestyle: weight loss (can resolve OSA), avoid alcohol/sedatives, side-sleeping, smoking cessation. CPAP is highly effective for moderate-severe; mandibular devices for selected milder cases.' },
        { h:'DVLA duty', t:'Advise not to drive while sleepy. Legal duty to notify DVLA when OSA causes excessive sleepiness \u2014 stricter for Group 2 (HGV/bus). Patient\u2019s responsibility to notify; advise clearly and document.' },
        { h:'Driving \u2014 supportive framing', t:'Effective treatment (CPAP) controlling sleepiness usually permits return to driving, including professionally. Frame the DVLA step as protecting licence and safety, not just bad news.' },
        { h:'Never do', t:'Never treat the picture as simple snoring; never skip the Epworth/driving assessment; never omit the DVLA advice because the livelihood is at stake; never collude with "just a spray"; never fail to document driving advice.' },
        { h:'GMC route if needed', t:'If a patient continues to drive against advice and cannot be persuaded to stop or notify, the doctor may need to inform the DVLA (per GMC confidentiality guidance), having advised the patient first.' }
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
        { t:'7\u201310', h:'Optimise regimen', d:'Regular ICS or ICS-formoterol MART (reliever doubles as preventer); technique teach-back; triggers/smoking.' },
        { t:'10\u201312',h:'Plan + safety-net', d:'Personalised action plan; attack red flags (can\u2019t speak \u2192 999); review control + SABA use.' }
      ],
      wordPics: {
        fail: 'Hands over another salbutamol without assessing control; ignores preventer under-use and technique; misses SABA overuse as a death-risk marker.',
        pass: 'Recognises SABA overuse as a red flag, assesses control, corrects the preventer myth and optimises to regular ICS/MART with a plan.',
        exc:  'Reframes SABA overuse as a danger signal, assesses control and risk, corrects the preventer misconception, optimises to regular ICS/MART with technique teach-back, addresses triggers/smoking, provides an action plan, and safety-nets \u2014 recognising risk, not reissuing a reliever.'
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
        { t:'5\u20137',  h:'Risk + optimise', d:'Risk-factor inventory; ensure/step-up regular ICS/MART; check technique; confirm steroid course done.' },
        { t:'7\u201310', h:'Action plan', d:'Personalised written plan (warning signs, step-up, emergency help) \u2014 reduces attacks/deaths.' },
        { t:'10\u201312',h:'Follow-up + safety-net', d:'Post-exacerbation review (~48h & ~2 weeks); attack red flags \u2192 999; engagement secured.' }
      ],
      wordPics: {
        fail: 'Treats the review as a formality, accepts "just a cold", never explores adherence, leaves the regimen and lack of action plan unchanged.',
        pass: 'Recognises the attack as a risk marker, elicits adherence, optimises treatment and gives an action plan with follow-up.',
        exc:  'Counters the minimisation, reconstructs the attack and elicits the adherence truth non-judgementally, inventories risk factors, optimises ICS/MART with technique, co-creates a personalised action plan, and arranges structured post-exacerbation follow-up \u2014 converting the event into engagement.'
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
        { t:'2\u20135',  h:'Exclude organic', d:'Asthma, arrhythmia (ECG + family sudden death), anaemia (FBC), thyroid (TFTs), PE if risk; exam/obs/sats.' },
        { t:'5\u20137',  h:'Positive panic features', d:'Situational, peri-oral/peripheral tingling, doom, full recovery, normal exam \u2014 supportive, not a shortcut.' },
        { t:'7\u20139',  h:'Explain physiology', d:'Over-breathing \u2192 low CO2 \u2192 tingling/light-head/tight chest \u2192 more fear \u2014 a loop, not a heart attack.' },
        { t:'9\u201312', h:'Positive management', d:'Breathing techniques, CBT/NHS Talking Therapies, triggers/caffeine/sleep, SSRI if significant; safety-net atypical features.' }
      ],
      wordPics: {
        fail: 'Labels "just anxiety" without excluding organic causes, or over-investigates endlessly; dismisses the fear; gives no positive explanation or management.',
        pass: 'Excludes organic causes, makes a positive panic diagnosis with explanation, and arranges anxiety management.',
        exc:  'Holds anxiety as a diagnosis of exclusion, genuinely excludes asthma/arrhythmia/anaemia/thyroid/PE with focused exam and proportionate tests, recognises positive panic features, explains the hyperventilation physiology, manages positively (breathing/CBT/SSRI), takes the fear seriously, and safety-nets atypical features.'
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
        { t:'2\u20135',  h:'Assess', d:'Epworth scale, neck/BMI, comorbidities (HTN/AF/T2DM); ask directly about driving sleepiness/near-misses.' },
        { t:'5\u20137',  h:'Refer + treat', d:'Sleep-study referral; weight loss, avoid alcohol/sedatives, side-sleeping; CPAP highly effective.' },
        { t:'7\u201310', h:'DVLA duty', d:'Don\u2019t drive while sleepy; legal duty to notify DVLA (stricter for Group 2); patient\u2019s responsibility; document.' },
        { t:'10\u201312',h:'Support + safety-net', d:'Treatment usually allows return to driving; document advice; GMC route if drives against advice; review.' }
      ],
      wordPics: {
        fail: 'Treats it as simple snoring and offers a spray/strips; never uses Epworth or asks about driving; omits the DVLA duty entirely.',
        pass: 'Recognises OSA, assesses with Epworth and refers for a sleep study, and raises the DVLA/driving issue.',
        exc:  'Recognises OSA, assesses (Epworth, apnoeas, neck/BMI, comorbidities) and asks directly about driving, refers for a sleep study with lifestyle/CPAP advice, and handles the DVLA duty clearly and supportively (don\u2019t drive sleepy; notify; stricter Group 2) with documentation \u2014 not a snoring remedy.'
      },
      avoid: [
        { dont:'"I\u2019ll give you a nasal spray and some strips for the snoring \u2014 that should help."', instead:'"The gasping and daytime sleepiness point to sleep apnoea \u2014 more than snoring \u2014 so let\u2019s assess it and refer for a sleep study."', why:'Treating it as simple snoring misses OSA and its serious consequences, including driving risk.' },
        { dont:'(Avoiding driving) not mentioning the DVLA because of his job.', instead:'"I have to be straight about driving: don\u2019t drive while sleepy, and there\u2019s a legal duty to tell the DVLA \u2014 stricter for your HGV licence."', why:'Skipping the DVLA/driving duty because the livelihood is at stake is a serious safety and probity failure.' },
        { dont:'"You\u2019ll probably lose your licence \u2014 not much I can do."', instead:'"Once treated and the sleepiness is controlled, people usually return to driving, including professionally \u2014 sorting this protects your licence and everyone\u2019s safety."', why:'Fatalistic framing discourages engagement; the supportive, accurate message aids both safety and adherence.' }
      ]
    }

  });

})();
