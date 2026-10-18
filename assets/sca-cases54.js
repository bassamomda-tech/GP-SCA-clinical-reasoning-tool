/* ============================================================
   Reasoning GP — Case Library batch 54:
   "COPD across its course" (filling 4 live-linked gaps)
   The same disease at four points: an acute flare + the cessation
   window; poor control + inhaler technique/triple-therapy logic;
   advanced disease + the ceiling-of-care conversation; and a
   telephone call that must separate a COPD flare from something
   new (PE, heart failure, pneumothorax, lung cancer). NG12 lung
   pathway is stated where genuine (smoker, haemoptysis, new CXR
   change); not invented elsewhere.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases53.js.
   ============================================================ */

(function(){

  /* ============ 188. VIDEO — COPD flare in a current smoker: rescue pack + the cessation window ============ */
  const c188 = {
    id:'copd-flare-smoker', title:'"I just need the steroids and antibiotics I usually get \u2014 don\u2019t start on about the smoking"', type:'video', duration:12,
    meta:{ age:61, sex:'M', setting:'Video consultation \u2014 a COPD exacerbation in a current smoker.', system:'Respiratory \u2014 COPD exacerbation, rescue therapy & the teachable cessation moment', checked:'October 2026' },
    brief:'Mr Frank Dolan, 61, known severe COPD (FEV1 ~45% predicted — NICE NG115 grades an FEV1 of 30–49% as severe), current smoker ~40 pack-years, joins a video consultation with 4 days of increased breathlessness, more cough and a change to GREEN, purulent sputum, but NO fever, no pleuritic pain, no haemoptysis, and he is talking in full sentences. He wants his "usual" rescue steroids and antibiotics and is defensive about smoking. The task is to: assess exacerbation SEVERITY and exclude a more sinister cause (pneumonia, PE, heart failure, pneumothorax), treat the exacerbation appropriately (oral PREDNISOLONE 30 mg OD for 5 days; an antibiotic on NICE NG114 judgement — weighing sputum colour change with increased volume or thickness, previous exacerbations and admissions, risk of complications and previous sputum results — which here supports amoxicillin, doxycycline or clarithromycin for 5 days, dose per BNF; optimise inhalers/bronchodilators; rescue-pack and self-management plan), arrange follow-up and consider the NICE NG12 LUNG criteria given he is an ever-smoker aged 40 and over (urgent chest X-ray within 2 weeks for 1 or more UNEXPLAINED symptoms — cough, fatigue, breathlessness, chest pain, weight loss, appetite loss — so a CXR if symptoms persist once the flare should have settled; suspected cancer pathway referral for unexplained haemoptysis), and \u2014 the examinable communication \u2014 use this as the TEACHABLE MOMENT for smoking cessation done WELL (offer, not lecture; very-brief-advice + pharmacotherapy + referral), handling his defensiveness without colluding or hectoring.',
    script:{
      opening:"(Gruff, a bit breathless between phrases but speaking in full sentences; cigarette packet visible on the table.) \"Morning doc. It's my chest again — I'm more puffed than usual, coughing more, and the phlegm's gone green. I know the drill, I just need my steroids and antibiotics like last time. And please don't start on about the smoking, I've heard it all before.\"",
      facts:[
        { topic:"This flare", text:"\"Four days. Worse walking. I'm alright sitting.\" Can walk to the kitchen but not the shops. Talking in full sentences." },
        { topic:"Sputum", text:"\"Loads more. Thick and green\" — usually a bit of white in the mornings." },
        { topic:"Red-flag questions", text:"Fever: \"No.\" Chest pain on breathing in, sudden onset, calf swelling: \"None of that.\" \"No blood. Not that I've noticed with the weight.\" Swollen ankles or needing more pillows: \"No, no.\" Not confused or drowsy. Has no home oximeter." },
        { topic:"COPD background", text:"Diagnosed 6 years ago. Two rescue courses last year, no admissions. Last spirometry: FEV1 about 45%. Uses tiotropium/olodaterol inhaler daily and salbutamol — using salbutamol 6–8 times a day now. Previous sputum sample: none sent. Has had flu and pneumococcal jabs; not sure about COVID booster." },
        { topic:"Medicines and allergies", text:"Inhalers only. No allergies (has had amoxicillin and doxycycline before without problems)." },
        { topic:"Smoking", text:"20 a day since 15 — about 40 pack-years. Tried to stop twice with patches, lasted a fortnight each time. If asked permission to discuss it: \"Go on. You will anyway.\" Then: \"It's too late now. And it's the only thing I enjoy.\"" },
        { topic:"Social", text:"Retired bus driver. Lives with his wife, Pat, who smokes outside. Two grandchildren he looks after on Fridays. Drinks 2 pints on a Saturday." },
        { topic:"How to play it", text:"Defensive, keen to get the prescription. Relaxes if the doctor deals with his chest properly first. If lectured about smoking, shut down: \"Told you.\" If the doctor asks permission and makes a brief, respectful offer, accept a referral grudgingly: \"Send them. No promises.\" Will come in today if needed: \"I can pop in.\"" }
      ],
      ice:{
        ideas:"\"Same as always. My chest. It's what happens.\"",
        concerns:"HIDDEN AGENDA — guilt and fatalism about smoking (\"too late now\"); tired of being lectured; quietly worried about not being around for his grandchildren.",
        expectations:"\"Just want it sorted. And not the lecture.\""
      },
      cues:[
        "\"Don't start on about the smoking.\" — defensiveness; ask permission later.",
        "\"It's too late now.\" — fatalism to gently challenge.",
        "\"The only thing I enjoy.\" — what smoking means to him."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Assesses exacerbation SEVERITY (breathlessness at rest/sentences, sats if he has a home oximeter, accessory muscles, confusion/cyanosis — with a same-day face-to-face assessment if in doubt, as he cannot be examined by video) and EXCLUDES alternative causes \u2014 pneumonia (fever), PE (pleuritic pain/calf), heart failure (orthopnoea/oedema), pneumothorax, lung cancer (haemoptysis/weight loss) \u2014 before treating' },
      { dom:'cm', text:'Treats the exacerbation correctly: increased bronchodilator, oral PREDNISOLONE 30 mg OD for 5 days, and an antibiotic on NICE NG114 judgement (sputum colour change with increased volume, previous exacerbations, complication risk, previous sputum results) — here amoxicillin, doxycycline or clarithromycin for 5 days — not antibiotics reflexively for every flare' },
      { dom:'cm', text:'Decides disposition (treat at home vs admit) on severity/comorbidity/support, and provides inhaler optimisation and a personalised self-management/rescue-pack plan with clear instructions' },
      { dom:'cm', text:'Keeps the NICE NG12 LUNG criteria in mind for an ever-smoker aged 40+ — urgent CXR within 2 weeks for 1 or more unexplained symptoms, so a CXR if the exacerbation does not resolve or there is weight loss or appetite loss, and a suspected cancer pathway referral for unexplained haemoptysis \u2014 rather than letting repeated rescue packs mask a tumour' },
      { dom:'cm', text:'Delivers the teachable-moment cessation OFFER well \u2014 Very Brief Advice (ask permission, advise plainly, act), offering combination NRT/varenicline/bupropion (or vaping harm-reduction) plus stop-smoking-service referral \u2014 addressing fatalism that it is "too late"' },
      { dom:'ro',   text:'Reads the defensiveness as guilt/shame/fatalism, treats the flare competently to earn trust, and makes the cessation offer respectfully WITHOUT colluding with "don\u2019t mention it" or hectoring' },
      { dom:'ro',   text:'Builds rapport with a defensive patient, acknowledges he has heard it before, and checks understanding of the treatment and self-management plan' },
      { dom:'cm',    text:'Safety-nets and follows up: deterioration red flags (worsening breathlessness, drowsiness/confusion, fever, haemoptysis) and when to seek urgent help/admission, review after the exacerbation, CXR/spirometry as indicated, cessation support arranged, and self-management reinforced' },
    ],
    worked:[
      { lbl:'Earn trust \u2014 assess first', txt:'"Let\u2019s get you sorted. First a few quick checks so I treat the right thing: are you breathless just moving or at rest too? Any fever, chest pain when you breathe in, calf swelling, or coughing up blood? \u2026 None of that, and you’re talking in full sentences on the video — good, that points to a straightforward flare. If anything changes, or I’m unsure, I’ll get you seen in person today so we can listen to your chest."' },
      { lbl:'Treat it properly', txt:'"Your phlegm\u2019s gone green and there\u2019s more of it, so a course of antibiotics is justified this time, plus the steroid tablets \u2014 prednisolone 30 a day for 5 days \u2014 and step up your blue inhaler. Let\u2019s make sure your rescue pack and plan are up to date so you can act fast next time."' },
      { lbl:'Keep lung cancer honest', txt:'"One thing because you smoke: if this doesn\u2019t settle, or you ever cough up blood or lose weight, I\u2019ll want a chest X-ray \u2014 not to alarm you, just so we never put something more serious down to \u2018the usual chest\u2019."' },
      { lbl:'Open the cessation door', txt:'"Can I mention the smoking just once, not to nag \u2014 is that okay? \u2026 The single biggest thing for your breathing is stopping, and crucially it helps even now, at this stage. I\u2019m not here to judge; I\u2019m here to make it easier if you ever want to."' },
      { lbl:'Make a real offer', txt:'"If you\u2019re open to it, the things that genuinely work are a combination of nicotine patches and a quick-acting form, or a tablet like varenicline, plus our stop-smoking team who really boost your chances. Switching to vaping is also far less harmful than cigarettes. No pressure \u2014 the offer\u2019s there whenever."' },
      { lbl:'Safety-net + follow-up', txt:'"If you get more breathless, drowsy or confused, develop a fever, or cough up blood, that\u2019s urgent \u2014 ring us or 999. Let\u2019s review you after this settles to check your inhalers and lung function. And the cessation offer stays open \u2014 just say the word."' },
    ],
    learning:'A COPD exacerbation in a smoker must be treated competently AND used as a teachable cessation moment. First GRADE severity and exclude the sinister mimics \u2014 pneumonia (fever), PE (pleuritic pain, sudden onset, calf swelling), heart failure (orthopnoea, oedema), pneumothorax (sudden severe breathlessness) and lung cancer (haemoptysis, weight loss) \u2014 checking speech, breathing effort and conscious level on video (sats only with a home oximeter), with a same-day face-to-face assessment if in doubt; talking in full sentences with no fever, pain or haemoptysis is reassuring for a straightforward infective flare but the exclusion must be explicit, and admit if severe. Treat correctly: increase the short-acting bronchodilator, give oral PREDNISOLONE 30 mg once daily for 5 days, and decide on an ANTIBIOTIC by NICE NG114 judgement — sputum colour change with increased volume or thickness, previous exacerbations and admissions, complication risk and previous sputum results (here supporting amoxicillin, doxycycline or clarithromycin for 5 days) — not reflexively for every flare — plus inhaler optimisation and a personalised self-management/rescue-pack plan. Keep the NICE NG12 (Suspected cancer: recognition and referral, last updated April 2026) LUNG criteria in mind: an urgent CXR (within 2 weeks) for anyone aged 40 and over who has ever smoked with 1 or more unexplained symptoms (cough, fatigue, breathlessness, chest pain, weight loss, appetite loss), and a suspected cancer pathway referral for unexplained haemoptysis at 40 and over, and image rather than let repeated rescue packs mask a tumour if a flare does not resolve. The examinable communication is the cessation OFFER done as Very Brief Advice (ask permission, advise plainly that stopping is the single most effective intervention and helps even now, act by offering combination NRT/varenicline/bupropion or vaping harm-reduction plus a stop-smoking-service referral), reading the patient\u2019s defensiveness as guilt/shame/fatalism, earning trust by treating the flare well, and respecting autonomy \u2014 neither colluding with "don\u2019t mention it" nor hectoring. Safety-net for deterioration and follow up.',
    knowledge:{
      guideline:'NICE NG115 Chronic obstructive pulmonary disease in over 16s (2018, updated 2019) · NICE NG114 COPD (acute exacerbation): antimicrobial prescribing (2018) · NICE NG12 Suspected cancer: recognition and referral (2015, last updated April 2026) · NICE NG209 Tobacco: preventing uptake, promoting quitting and treating dependence (2021) · NCSCT Very Brief Advice on smoking · COPD exacerbation management',
      points:[
        { h:'Grade & exclude', t:'Assess severity (breathlessness, sentences, sats/obs, accessory muscles, confusion/cyanosis) and exclude pneumonia, PE, heart failure, pneumothorax and lung cancer before labelling a simple exacerbation. Admit if severe.' },
        { h:'Exacerbation treatment', t:'Increase short-acting bronchodilator; oral prednisolone 30 mg OD for 5 days (NG115); antibiotic on NICE NG114 judgement (sputum colour change with increased volume/thickness, previous exacerbations/admissions, complication risk, previous sputum results) — first choice amoxicillin, doxycycline or clarithromycin for 5 days (dose per BNF). Optimise inhalers; provide self-management/rescue plan.' },
        { h:'Antibiotic stewardship', t:'Not every flare needs an antibiotic — NICE NG114 is a judgement weighing sputum change, severity, past exacerbations and admissions, complication risk and previous sputum results, not a fixed rule. Avoid reflexive prescribing.' },
        { h:'NICE NG12 lung awareness', t:'NICE NG12: ever-smokers 40+ with 1 or more unexplained symptoms (cough, fatigue, breathlessness, chest pain, weight loss, appetite loss) → urgent CXR within 2 weeks; unexplained haemoptysis at 40+ → suspected cancer pathway referral. Image non-resolving flares rather than repeat rescue packs.' },
        { h:'Very Brief Advice', t:'ASK (permission/status), ADVISE (stopping is the most effective action and helps at any stage), ACT (offer pharmacotherapy + referral). Brief, opportunistic, non-judgemental.' },
        { h:'Cessation pharmacotherapy', t:'NICE NG209: varenicline, cytisinicline (cytisine), combination NRT (patch + short-acting) or nicotine-containing e-cigarettes, with behavioural support; bupropion is another option; vaping as harm reduction; refer to stop-smoking services to maximise success. Address fatalism ("too late").' },
        { h:'Never do', t:'Never reflexively issue a rescue pack without assessing severity/excluding mimics; never give antibiotics for every flare; never ignore haemoptysis/weight loss in a smoker; never collude with "don\u2019t mention smoking"; never lecture/moralise.' },
        { h:'Safety-net & follow-up', t:'Deterioration red flags (worsening breathlessness, drowsiness/confusion, fever, haemoptysis) and urgent-help advice; post-exacerbation review; CXR/spirometry as indicated; cessation support arranged; self-management reinforced.' }
      ]
    }
  };

  /* ============ 189. F2F — Poorly controlled COPD: inhaler technique & triple-therapy logic ============ */
  const c189 = {
    id:'copd-poor-control', title:'"My inhalers just aren\u2019t working any more \u2014 I need something stronger"', type:'video', duration:12,
    meta:{ age:67, sex:'F', setting:'Video consultation \u2014 a COPD review for poor symptom control.', system:'Respiratory \u2014 COPD optimisation: inhaler technique, adherence & escalation logic', checked:'October 2026' },
    brief:'Mrs Coralie Beaumont, 67, COPD (ex-smoker), still breathless and having frequent flares despite being on a LABA/LAMA inhaler. She is frustrated and wants "something stronger". The examinable task is the structured COPD optimisation review: before escalating, CHECK THE BASICS \u2014 inhaler TECHNIQUE (the commonest reason for "failure"), ADHERENCE, the correct diagnosis (spirometry-confirmed; consider asthma overlap), and treatable contributors (ongoing smoking/exposure, comorbidity, deconditioning) \u2014 then apply NICE NG115 escalation LOGIC: optimise non-pharmacological care (PULMONARY REHABILITATION, vaccinations per the UKHSA Green Book, smoking status), and for the patient on LABA+LAMA who remains breathless/has exacerbations, consider adding an INHALED CORTICOSTEROID (triple therapy) on the NG115 criteria — after 1 severe exacerbation needing hospital or 2 moderate exacerbations within a year, or, for day-to-day symptoms still affecting quality of life, a 3-month trial with a return to LABA+LAMA if there is no improvement — counselling the PNEUMONIA risk of ICS, rather than reflexively "stronger" (asthmatic features, including a higher blood eosinophil count, steer towards ICS-containing treatment, but NG115 sets no eosinophil cut-off); beyond triple therapy, specialist options include azithromycin prophylaxis, roflumilast (NICE TA461) and, since 2026, dupilumab for raised eosinophils (NICE TA1142). Also address self-management, rescue packs, and review. NICE NG12 lung awareness if red flags (no active cancer here). The skill is resisting "just escalate" and fixing technique/adherence and offering pulmonary rehab first.',
    script:{
      opening:"(Frustrated, a little breathless, inhaler in hand.) \"Doctor, these inhalers just aren't doing anything any more — I'm as breathless as ever and I keep getting chest infections. Can you give me something stronger? Maybe one of those triple inhalers I've read about. I feel like I'm going backwards.\"",
      facts:[
        { topic:"Breathlessness", text:"\"I have to stop more than I used to when I'm out walking. It's getting me down.\" Stops after 100 metres on the flat (MRC 3). Can still dress and wash herself." },
        { topic:"Flares", text:"\"More than once this year, I know that. I'd have to check about hospital.\" If asked to think: two courses of steroids and antibiotics from the surgery this year (January and May), no hospital admission." },
        { topic:"Inhaler technique — demonstrate on camera", text:"If asked to show: \"Like this…\" — opens the dry-powder inhaler, doesn't breathe out first, takes a short, gentle sniff of a breath, no breath-hold, breathes out straight away. \"Nobody's ever watched me do it.\"" },
        { topic:"Adherence", text:"\"Most days. Sometimes I forget if I'm feeling alright.\" Uses her blue inhaler 3–4 times a day." },
        { topic:"Red-flag questions", text:"\"No, nothing like that\" — no blood in sputum, no weight loss, no chest pain, no ankle swelling, no waking breathless at night." },
        { topic:"History", text:"COPD diagnosed 5 years ago with spirometry. Ex-smoker — stopped 3 years ago (35 pack-years). No childhood asthma, no hay fever or eczema. High blood pressure (amlodipine). Never offered pulmonary rehab. Flu jab yes; not sure about pneumonia or RSV jabs. No allergies." },
        { topic:"Social", text:"Widowed, lives alone in a first-floor flat (stairs). Daughter does her big shop. Used to love walking to the park." },
        { topic:"How to play it", text:"Frustrated: \"I feel like I'm going backwards.\" If asked what worries her: \"Ending up stuck indoors. Not being able to manage on my own.\" Sceptical about rehab: \"Exercise? I can barely walk.\" — then \"Alright, I'll try it\" if it's explained as supervised and built for people like her. Pleased by the plan: \"That feels like a proper plan.\" If simply given a new inhaler without checking, accept happily (the trap)." }
      ],
      ice:{
        ideas:"\"The inhalers have stopped working — I need a stronger one, like the triple.\"",
        concerns:"HIDDEN AGENDA — fear of losing her independence and being stuck indoors; worn down by repeated chest infections.",
        expectations:"\"A stronger inhaler, I suppose.\""
      },
      cues:[
        "\"Nobody's ever watched me do it.\" — technique has never been checked.",
        "\"I feel like I'm going backwards.\" — the fear to explore.",
        "\"Sometimes I forget.\" — adherence."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Checks INHALER TECHNIQUE (asks the patient to demonstrate) and corrects it \u2014 recognising poor technique as the commonest reason inhalers "stop working" \u2014 and considers a spacer/better-matched device before escalating' },
      { dom:'dg', text:'Reviews ADHERENCE, confirms a spirometry-based diagnosis, looks for asthmatic features (NG115: prior asthma/atopy, higher eosinophils, FEV1 or PEF variability), and screens treatable contributors (smoking/exposure, heart failure, anaemia, anxiety, deconditioning, weight)' },
      { dom:'cm', text:'Optimises NON-PHARMACOLOGICAL care \u2014 refers to PULMONARY REHABILITATION (MRC dyspnoea \u22653/functionally limited), checks vaccinations against UKHSA Green Book eligibility, reinforces cessation, and provides a self-management plan/rescue pack \u2014 before or alongside any escalation' },
      { dom:'cm', text:'Applies NICE NG115 escalation LOGIC: on LABA+LAMA with optimised basics, considers adding an INHALED CORTICOSTEROID (triple therapy) after 1 severe (hospital) or 2 moderate exacerbations in a year, or a 3-month trial for symptoms affecting quality of life with a return to LABA+LAMA if no improvement — asthmatic features and eosinophils inform, with no set cut-off — and knows the specialist options beyond it (azithromycin, roflumilast, dupilumab per TA1142)' },
      { dom:'ro', text:'Counsels the ICS trade-off (reduced exacerbations vs increased PNEUMONIA risk), uses a combination inhaler for adherence, and plans to review benefit (stop ICS if no benefit) \u2014 not "stronger by default"' },
      { dom:'ro',   text:'Validates the frustration and the fear of "going backwards", and reframes the plan around fixable basics and rehab rather than dismissing her request' },
      { dom:'ro',   text:'Explains the technique/escalation reasoning clearly, checks understanding (teach-back of inhaler technique), and supports adherence' },
      { dom:'cm',    text:'Safety-nets and follows up: review after optimisation/rehab, exacerbation action plan, NICE NG12 lung awareness if red flags (haemoptysis, weight loss), and a clear escalation/de-escalation plan with review of any ICS benefit \u2014 fixing the basics, not reflexive escalation' },
    ],
    worked:[
      { lbl:'Validate, then reframe', txt:'"I can hear how frustrating this is, and \u2018going backwards\u2019 is a horrible feeling. Before I just add a stronger inhaler \u2014 which I will if it\u2019s the right thing \u2014 let me check a few things that very often make the difference, because a new inhaler that\u2019s used the same way may not help."' },
      { lbl:'Check technique (teach-back)', txt:'"Could you show me exactly how you take your inhaler, as if I weren\u2019t here? \u2026 Ah \u2014 I can see the breath and the press aren\u2019t quite together. That\u2019s incredibly common, and it means a lot of the medicine isn\u2019t reaching your lungs. Let me show you, and a spacer might help too."' },
      { lbl:'Cover the basics', txt:'"A few other things: are you managing to take it every day? Have you had your flu jab this year and your one-off pneumonia jab? I’ll also check whether you’re eligible for this season’s COVID booster. And the single most effective treatment for breathlessness that isn\u2019t a drug at all is pulmonary rehab \u2014 a supervised exercise-and-education programme. I\u2019d really like to refer you."' },
      { lbl:'Escalate with logic', txt:'"If we\u2019ve sorted technique and you\u2019re still breathless or getting lots of flares, then yes — adding a third medicine, a steroid inhaler, makes sense if you’ve had two flare-ups needing treatment, or one hospital stay, in the past year, or as a three-month trial for your breathlessness that we stop if it doesn’t help. I’ll also check a blood count, because a raised level of one type of white cell can point to who benefits most."' },
      { lbl:'Honest trade-off', txt:'"Being straight: that steroid inhaler can cut down flares, but it slightly raises the risk of pneumonia, so it\u2019s a considered choice, not just \u2018stronger\u2019. We\u2019ll use one combined inhaler to keep it simple, and review whether it\u2019s actually helping."' },
      { lbl:'Plan + safety-net', txt:'"So: fix the technique, get you onto pulmonary rehab and up to date with jabs, and review in a few weeks \u2014 escalating then if needed. If you cough up blood or lose weight, tell me. And let\u2019s make sure you\u2019ve a rescue plan for flares."' },
    ],
    learning:'When a COPD patient says their inhalers "aren\u2019t working" and asks for "something stronger", resist reflexive escalation and CHECK THE BASICS first. The commonest reason for apparent inhaler failure is poor TECHNIQUE \u2014 ask the patient to demonstrate, correct critical errors (coordination with MDIs, inspiratory effort with dry-powder devices, breath-holding), consider a spacer or a better-matched device, and re-check; this alone often transforms control. Also review ADHERENCE, confirm a spirometry-based diagnosis (post-bronchodilator FEV1/FVC <0.7), look for asthmatic features (NICE NG115), and screen treatable contributors (ongoing smoking/exposure, heart failure, anaemia, anxiety, deconditioning, weight). Optimise NON-PHARMACOLOGICAL care, which is frequently more impactful than escalation: refer for PULMONARY REHABILITATION (strong evidence for breathlessness and quality of life; offer if MRC dyspnoea \u22653/functionally limited), ensure vaccinations (influenza and pneumococcal, and COVID-19 only if she meets current UKHSA Green Book eligibility), reinforce cessation, and provide a self-management plan with a rescue pack. Only then apply NICE NG115 escalation LOGIC: on LABA+LAMA with optimised basics, consider adding an INHALED CORTICOSTEROID (triple therapy) after 1 severe exacerbation needing hospital or 2 moderate exacerbations within a year, or as a 3-month trial for day-to-day symptoms affecting quality of life with a return to LABA+LAMA if there is no improvement (asthmatic features, including a higher blood eosinophil count, inform the choice, but NG115 sets no cut-off) — counselling the trade-off that ICS reduces exacerbations in the right patient but raises PNEUMONIA risk, using a single combination inhaler for adherence, and reviewing benefit (stopping ICS if none); beyond triple therapy, specialist options include azithromycin prophylaxis, roflumilast (NICE TA461) and, since 2026, dupilumab for raised eosinophils (NICE TA1142). Validate the patient\u2019s frustration and fear of decline, reframe around fixable basics and rehab, keep NICE NG12 (Suspected cancer: recognition and referral, last updated April 2026) lung awareness for red flags, and follow up \u2014 reasoned care, not "stronger by default".',
    knowledge:{
      guideline:'NICE NG115 Chronic obstructive pulmonary disease in over 16s (2018, updated 2019) · NICE TA1142 Dupilumab for uncontrolled COPD with raised blood eosinophils (March 2026) · NICE TA1166 Mepolizumab for uncontrolled COPD with raised blood eosinophils (June 2026) · NICE TA461 Roflumilast for treating chronic obstructive pulmonary disease (2017) · NICE NG12 Suspected cancer: recognition and referral (2015, last updated April 2026) · UKHSA Green Book (chapters 14a, 19, 25) · inhaler technique · pulmonary rehabilitation · triple therapy (ICS) and pneumonia trade-off',
      points:[
        { h:'Technique first', t:'Poor inhaler technique is the commonest reason for apparent failure. Ask the patient to demonstrate, correct errors, consider a spacer or better-matched device, and re-check before escalating.' },
        { h:'Adherence, diagnosis, contributors', t:'Review adherence; confirm spirometry-based diagnosis (post-BD FEV1/FVC <0.7); look for asthmatic features (NG115: prior asthma/atopy, higher eosinophils, FEV1 variation ≥400 ml, diurnal PEF variation ≥20%); screen contributors (smoking/exposure, heart failure, anaemia, anxiety, deconditioning, weight).' },
        { h:'Non-pharmacological optimisation', t:'Pulmonary rehabilitation (NICE NG115: offer if functionally disabled, usually MRC ≥3) strongly improves breathlessness and quality of life; ensure flu and pneumococcal vaccines, and COVID-19 if eligible this season (UKHSA Green Book); reinforce cessation; provide self-management plan + rescue pack.' },
        { h:'Escalation logic', t:'NICE NG115, on LABA+LAMA with optimised basics: consider adding ICS (triple therapy) after 1 severe (hospital) or 2 moderate exacerbations in a year; for symptoms affecting quality of life, a 3-month trial and back to LABA+LAMA if no improvement. Asthmatic features/eosinophils inform; no cut-off. Beyond: azithromycin, roflumilast (TA461), dupilumab (TA1142) via specialists.' },
        { h:'ICS trade-off', t:'ICS reduces exacerbations in the right patient (eosinophilic/asthmatic features, frequent exacerbations) but increases pneumonia risk — discuss and document it (NG115). Reasoned step, single combination inhaler for adherence; review and stop if no benefit.' },
        { h:'Validate & reframe', t:'Acknowledge frustration and fear of decline; reframe around fixable basics and rehab rather than dismissing the request; support adherence with teach-back.' },
        { h:'Never do', t:'Never escalate without checking technique/adherence; never skip pulmonary rehab/vaccines; never add ICS reflexively without considering eosinophils/pneumonia risk; never ignore red flags for lung cancer; never leave ICS unreviewed.' },
        { h:'Safety-net & follow-up', t:'Review after optimisation/rehab; exacerbation action plan; NICE NG12 lung awareness for haemoptysis/weight loss; clear escalation/de-escalation plan with ICS benefit review.' }
      ]
    }
  };

  /* ============ 190. F2F — Advanced COPD: breathlessness, anxiety and the ceiling-of-care talk ============ */
  const c190 = {
    id:'copd-advanced-ceiling', title:'"I don\u2019t want to end up on a machine \u2014 but I\u2019m frightened every time I can\u2019t catch my breath"', type:'video', duration:12,
    meta:{ age:74, sex:'M', setting:'Video consultation \u2014 advanced COPD, exploring wishes and symptom control.', system:'Respiratory / Palliative \u2014 advanced COPD: breathlessness, anxiety & ceiling-of-care', checked:'October 2026' },
    brief:'Mr Albert Finch, 74, severe COPD (FEV1 <30%, MRC dyspnoea 5, on triple therapy and home oxygen, multiple admissions this year), joins a video consultation — prompted by a recent frightening admission — wanting to talk about the future. He is breathless at rest, has significant breathlessness-related ANXIETY/panic, and says he "doesn\u2019t want to end up on a machine" but is frightened of dying breathless. The examinable task is the ADVANCED-DISEASE consultation: sensitive ADVANCE CARE PLANNING and a ceiling-of-care/escalation conversation (including views on hospital admission, ventilation/ITU, resuscitation — explored gently, not imposed; NICE NG142, 2019, on identifying people approaching the end of life and sharing their plans; recorded in a ReSPECT plan, with an advance decision to refuse treatment valid under the Mental Capacity Act 2005 only if written, signed, witnessed and stating it applies even if life is at risk), recognition of the breathlessness\u2013anxiety cycle and its MANAGEMENT (non-pharmacological: handheld fan, breathing/positioning, pacing, pulmonary rehab principles, psychological support; pharmacological: low-dose opioids for refractory breathlessness, anxiolytics where appropriate — NICE NG115: opioids, when appropriate, to palliate breathlessness in end-stage COPD unresponsive to other therapy, with benzodiazepines also an option; dose per BNF), optimisation and supportive/palliative-care involvement, carer support (for anyone who supports him — his home circumstances are explored, not assumed), a HOME-OXYGEN SAFETY check (any smoking or naked flames in the home; a fire-service home safety visit — BTS guideline for home oxygen use in adults, 2015), and honest, compassionate communication that holds both hope and realism. This is chronic-disease palliative care.',
    script:{
      opening:"(Slow, breathless between short phrases; nasal oxygen tubing visible; pauses to catch his breath.) \"That last admission really shook me, doctor. When I can't catch my breath I genuinely think I'm dying — the panic makes it worse. I don't want to end up hooked up to machines in intensive care. But I'm also terrified of suffocating. I suppose I want to talk about what happens from here — if that's alright.\"",
      facts:[
        { topic:"The last admission", text:"Three weeks ago, 9 days in hospital. Had the tight face mask (NIV) for two nights. \"Not being able to breathe. Thinking that was it.\" Third admission this year." },
        { topic:"Breathlessness now", text:"\"Breathless even sitting here. Any little thing sets it off, then the panic comes.\" Needs to rest while washing. When an attack comes: \"Put the oxygen up and hope it passes.\"" },
        { topic:"Anxiety", text:"\"Worried all the time, if I'm honest.\" Doesn't sleep well, dreads nights. No thoughts of ending his life. Mood low at times but enjoys his grandchildren's visits." },
        { topic:"Understanding", text:"\"They're not getting better. I know that.\" Didn't know NIV (mask) and intubation (tube) are different: \"I didn't know the mask was different. The tube, no. The mask — maybe.\" On CPR, if explained honestly: \"Then I wouldn't want it. I'd rather be comfortable.\"" },
        { topic:"What matters", text:"\"Being at home. Not being hooked up to things. And not dying fighting for breath.\"" },
        { topic:"Medicines", text:"Triple inhaler, salbutamol nebuliser, home oxygen 2 L/min 16 hours a day, carbocisteine, a standby rescue pack. No allergies. Has never had morphine: \"Morphine? I thought that was for the end.\"" },
        { topic:"Home and oxygen safety", text:"Lives with his wife, Joan (72), who has arthritis and is tired. Daughter visits most days. Gave up smoking 8 years ago; no one smokes in the house now. Gas hob in the kitchen. Hasn't had a fire-service visit." },
        { topic:"Legal and plans", text:"No advance care plan, ReSPECT form or lasting power of attorney. Has a will." },
        { topic:"How to play it", text:"Breathless, frightened, thoughtful. Needs short questions and time to answer. If rushed or pushed onto DNACPR too fast, close down: \"I'll think about that.\" Responds to honesty with warmth. Brightens at practical help: \"How?\" and \"If it helps, yes.\" Ends: \"That makes me feel less trapped.\"" }
      ],
      ice:{
        ideas:"\"I'm getting worse and the treatments aren't working like they did.\"",
        concerns:"HIDDEN AGENDA — terror of suffocating and dying in a panic; fear of being kept alive on machines; worried about the strain on Joan.",
        expectations:"\"To talk about what happens from here\" — and to feel less trapped."
      },
      cues:[
        "\"I genuinely think I'm dying.\" — the panic cycle to name.",
        "\"Hooked up to machines.\" — explore what he means (tube vs mask).",
        "\"Terrified of suffocating.\" — needs reassurance he won't be left to suffer."
      ]
    },
    checkpoints:[
      { dom:'cm', text:'Recognises and sensitively initiates ADVANCE CARE PLANNING \u2014 exploring his understanding, what matters to him, his fears, and his wishes \u2014 at his pace and with permission, prompted by his own opening' },
      { dom:'ro', text:'Explores the ceiling-of-care/escalation views (hospital vs home, ITU/invasive ventilation, NIV, resuscitation) \u2014 clarifying that "no machines" may conflate NIV (often appropriate/reversible) with ITU/CPR \u2014 and documents a values-based, revisitable escalation plan (e.g. ReSPECT/DNACPR, shared with ambulance and out-of-hours services — NICE NG142) without coercion, knowing that a legally binding advance decision to refuse life-sustaining treatment must be written, signed, witnessed and state it applies even if life is at risk (Mental Capacity Act 2005)' },
      { dom:'ro', text:'Names and addresses the BREATHLESSNESS\u2013ANXIETY cycle explicitly, normalising it and giving the patient control strategies' },
      { dom:'cm', text:'Offers NON-PHARMACOLOGICAL breathlessness management \u2014 handheld fan, breathing techniques (pursed-lip/controlled), forward-lean positioning, pacing/energy conservation, psychological/CBT support and a written crisis plan' },
      { dom:'cm', text:'Knows the PHARMACOLOGICAL options for refractory breathlessness \u2014 low-dose opioids (titrated; NICE NG115, dose per BNF) ± benzodiazepine for panic — optimises COPD therapy/oxygen and treats reversible factors, and involves SUPPORTIVE/PALLIATIVE care early (not only for cancer)' },
      { dom:'ro',   text:'Holds honesty and compassion together \u2014 validating both fears (machines and suffocation), reassuring he will not be left to suffocate or be abandoned \u2014 avoiding false reassurance and bleak fatalism' },
      { dom:'ro',   text:'Paces the conversation to what he wants to discuss today, checks understanding of NIV/ITU/CPR distinctions, and offers to continue over future visits' },
      { dom:'cm',    text:'Safety-nets and follows up: documents and shares the care/escalation plan, arranges symptom-control measures and palliative-care/community involvement, supports any carer, checks home-oxygen fire safety (smoking, naked flames, fire-service visit), gives a crisis plan, and books review \u2014 compassionate advance care planning with active symptom control' },
    ],
    worked:[
      { lbl:'Open the door gently', txt:'"I\u2019m really glad you\u2019ve raised this, and it took courage. There\u2019s no rush \u2014 we can talk as much or as little today as you want, and come back to it. Can you tell me what frightened you most about that admission?"' },
      { lbl:'Name the cycle', txt:'"What you describe \u2014 not catching your breath, then the panic making it worse \u2014 is a real and exhausting cycle, and it\u2019s not weakness. The good news is there\u2019s a lot we can do to break it and give you back some control."' },
      { lbl:'Clarify the "machines"', txt:'"Let\u2019s be clear about what you don\u2019t want, because \u2018machines\u2019 covers different things. Intensive care with a breathing tube \u2014 it sounds like that\u2019s not what you\u2019d want, and we can record that. But there\u2019s a gentler mask-based support, used in flares, that can help and is easily stopped \u2014 that\u2019s different. Shall we talk through each?"' },
      { lbl:'Address the suffocation fear', txt:'"Your biggest fear is suffocating \u2014 let me reassure you: we have very effective ways to ease the feeling of breathlessness, including small doses of medicine that calm both the breathing sensation and the panic. The aim is that you are comfortable. You will not be left to struggle."' },
      { lbl:'Practical control + palliative', txt:'"Some things help straight away \u2014 a handheld fan to your face, breathing and positioning techniques, pacing yourself. I\u2019d also like to involve the supportive-care team \u2014 they\u2019re not just for the very end; they\u2019re experts in exactly this, and in supporting you and your family."' },
      { lbl:'Plan + carer + safety-net', txt:'"I\u2019ll write down your wishes so any doctor who sees you knows them, and we\u2019ll keep reviewing them \u2014 nothing is fixed. Who’s at home with you, and who helps you day to day? If someone supports you, let’s make sure they get support too. And with the oxygen — does anyone smoke at home, or are there any open flames? The fire service can do a free safety visit. And we\u2019ll set up a clear plan for what to do in a crisis so you\u2019re never left not knowing."' },
    ],
    learning:'A patient with advanced COPD (MRC dyspnoea 5, home oxygen, recurrent admissions) who, after a frightening admission, raises "what happens from here" is opening the door to ADVANCE CARE PLANNING, and the skill is to seize it sensitively \u2014 exploring his understanding, values, fears (suffocation, machines, being a burden) and wishes at his pace and with permission, not as an imposed checklist. Explore the ceiling-of-care/escalation gently: hospital vs home, intensive care/invasive ventilation, NON-INVASIVE ventilation (often appropriate and reversible in exacerbations \u2014 clarify, because "no machines" frequently conflates NIV with ITU), and resuscitation status framed around what CPR can realistically achieve in advanced COPD; document a values-based, revisitable escalation plan (e.g. ReSPECT/DNACPR) shared with ambulance and out-of-hours services (NICE NG142), never coerced — and if he wants a legally binding refusal, an advance decision under the Mental Capacity Act 2005 must be written, signed, witnessed and state that it applies even if life is at risk. Centrally, name and address the BREATHLESSNESS\u2013ANXIETY cycle, which amplifies suffering and drives crises: non-pharmacological measures (handheld FAN to the face, pursed-lip/controlled breathing, forward-lean positioning, pacing/energy conservation, CBT-based anxiety support, a written crisis plan) give agency and reduce panic, while for REFRACTORY breathlessness low-dose OPIOIDS (carefully titrated; NICE NG115, dose per BNF) ease the sensation of breathlessness and benzodiazepines can help panic in selected cases \u2014 alongside optimised COPD therapy/oxygen and treatment of reversible factors. Involve SUPPORTIVE/PALLIATIVE care early (it is not only for cancer or the final days; NICE NG115: access to palliative and hospice care), support any CARER, and check home-oxygen fire safety (smoking, naked flames; BTS 2015). Communicate with honesty and compassion held together \u2014 validate both fears, reassure he will be kept comfortable and not abandoned, clarify NIV/ITU/CPR, avoid both false reassurance and fatalism, pace the discussion and offer to continue.',
    knowledge:{
      guideline:'NICE NG115 Chronic obstructive pulmonary disease in over 16s (2018, updated 2019) · NICE NG142 End of life care for adults: service delivery (2019) · Resuscitation Council UK ReSPECT process · GMC Treatment and care towards the end of life (2010) · Mental Capacity Act 2005 · BTS guideline for home oxygen use in adults (2015) · advance care planning / ReSPECT · chronic breathlessness management · supportive and palliative care in non-malignant disease',
      points:[
        { h:'Initiate ACP sensitively', t:'Advanced COPD with recurrent admissions warrants advance care planning. Explore understanding, values, fears and wishes at the patient\u2019s pace and with permission \u2014 not an imposed checklist; revisit over time.' },
        { h:'Ceiling of care', t:'Discuss hospital vs home, ITU/invasive ventilation, NIV (often appropriate/reversible in exacerbations), and resuscitation. Clarify that "no machines" may conflate NIV with ITU/CPR. Document a values-based escalation plan (ReSPECT/DNACPR), shared with ambulance and out-of-hours services (NG142), never coerced. A binding advance decision to refuse life-sustaining treatment must be written, signed, witnessed and say it applies even if life is at risk (MCA 2005).' },
        { h:'Breathlessness\u2013anxiety cycle', t:'Breathlessness and panic reinforce each other and drive crises/admissions. Name and normalise it; giving control strategies is therapeutic.' },
        { h:'Non-pharmacological measures', t:'Handheld fan to the face, pursed-lip/controlled breathing, forward-lean positioning, pacing/energy conservation, CBT-based anxiety support, written crisis plan.' },
        { h:'Pharmacological measures', t:'For refractory breathlessness, low-dose opioids (titrated; NICE NG115, dose per BNF) reduce the sensation; benzodiazepines for breathlessness-related panic in selected cases. Optimise COPD therapy/oxygen; treat reversible factors.' },
        { h:'Palliative care & carer', t:'Involve supportive/palliative care early in advanced non-malignant disease (NICE NG115: access to palliative and hospice care; NG142: identify and plan) for symptom control, planning and carer support. Address any carer’s needs; check home-oxygen fire safety (BTS 2015).' },
        { h:'Communication', t:'Hold honesty and compassion together; validate both fears; reassure comfort and non-abandonment; clarify NIV/ITU/CPR; avoid false reassurance and fatalism; pace and continue over visits.' },
        { h:'Safety-net & follow-up', t:'Document and share the care/escalation plan; arrange symptom-control and community/palliative involvement; crisis plan; carer support; review. No cancer pathway applies.' }
      ]
    }
  };

  /* ============ 191. PHONE — Breathless on the phone with known COPD: flare vs something new (PE, HF) ============ */
  const c191 = {
    id:'copd-phone-breathless', title:'"I\u2019ve got COPD and I\u2019m more breathless \u2014 it\u2019s just another flare, can you sort it over the phone?"', type:'telephone', duration:12,
    meta:{ age:69, sex:'F', setting:'Telephone consultation \u2014 increased breathlessness in known COPD.', system:'Respiratory / Urgent care \u2014 telephone triage: COPD flare vs PE / heart failure / other', checked:'October 2026' },
    brief:'Mrs Ivy Marchetti, 69, known COPD, rings because she is more breathless. She assumes it is "just another flare" and wants a phone prescription. The examinable task is TELEPHONE TRIAGE that does NOT anchor on "COPD flare": take a structured history that actively distinguishes an infective/typical exacerbation from SOMETHING NEW \u2014 PULMONARY EMBOLISM (sudden onset, PLEURITIC chest pain, haemoptysis, unilateral calf swelling, immobility/recent travel/surgery; a fast pulse can only be confirmed when she is examined), HEART FAILURE (orthopnoea, PND, ankle oedema, weight gain), PNEUMONIA (fever, focal symptoms, confusion), PNEUMOTHORAX (sudden, unilateral), and lung cancer (haemoptysis, weight loss — NICE NG12: suspected cancer pathway referral for unexplained haemoptysis at 40 and over). On directed history concerning features emerge (it came on suddenly, there\u2019s a sharp pain on breathing in, one calf is swollen, and she\u2019s had little exercise since a long coach trip) \u2014 a PE picture — which mandates same-day face-to-face hospital assessment (NICE NG158: with PE likely, an immediate CTPA, or interim therapeutic anticoagulation if the scan is delayed), NOT a phoned-in rescue pack. The skill is structured remote assessment, recognising when a "flare" is not a flare, safe disposition and safety-netting.',
    script:{
      opening:"(On the phone, breathless, apologetic, speaking in short sentences.) \"Hello doctor, sorry to trouble you. You know I've got the COPD — well I'm more short of breath again. I expect it's just another flare-up. Could you call me in some of those steroids and antibiotics so I don't have to come down? I'm a bit wiped out to be traipsing in.\"",
      facts:[
        { topic:"Onset", text:"If asked how it started: \"Now you mention it, it came on quite suddenly. Not like my usual.\" Yesterday afternoon, over an hour or so." },
        { topic:"Chest pain", text:"If asked about pain: \"Yes, a sharp catch when I take a breath in\" — left side of the chest." },
        { topic:"Cough and sputum", text:"\"No blood. Phlegm's about the same as normal\" — no change in colour or amount." },
        { topic:"Legs — only if asked", text:"\"Oh… the left one is bigger. It's been a bit sore. I thought I'd knocked it\" — calf swollen for 3–4 days." },
        { topic:"Risk factors", text:"\"We went on a long coach trip last week\" — 9 hours to Scotland and back. \"I've hardly moved since, I've been that tired.\" No recent surgery, no previous clots, not on HRT." },
        { topic:"Other questions", text:"\"No fever. Nothing like that with my ankles or at night. I haven't fainted.\" Talking in short sentences; slightly dizzy standing. If she has a pulse oximeter: no. Can count her pulse if helped: about 110." },
        { topic:"Background", text:"COPD for 8 years (moderate), usual flares come on gradually with green phlegm. Inhalers: LABA/LAMA and salbutamol. No anticoagulants. No allergies. Ex-smoker." },
        { topic:"Social", text:"Lives with her husband, who doesn't drive. Daughter works nearby and could drive her. Neighbour has a car." },
        { topic:"How to play it", text:"Tired, minimising: \"Go on, if you must.\" Answers honestly when asked specific questions. If asked why she didn't want to come in: \"I just thought it was the usual and I didn't want the fuss of coming in. I'm that tired.\" On a clot: \"A clot? I thought it was just my chest.\" Reluctant: \"Hospital? I really don't want all that fuss\" — agrees if the doctor helps with transport. If the doctor sends a rescue pack, she is relieved (the trap)." }
      ],
      ice:{
        ideas:"\"It's just another COPD flare.\"",
        concerns:"HIDDEN AGENDA — exhausted and doesn't want the fuss of going in or the bother of arranging transport; hasn't connected the sore leg and the coach trip.",
        expectations:"\"Steroids and antibiotics called in to the chemist.\""
      },
      cues:[
        "\"Not like my usual.\" — the flare is different.",
        "\"I thought I'd knocked it.\" — the swollen calf, if asked.",
        "\"I'm a bit wiped out.\" — exhaustion and reluctance to attend."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Does NOT anchor on "just a flare" \u2014 takes a STRUCTURED telephone history that actively screens for a new cause of breathlessness rather than confirming the expected COPD exacerbation' },
      { dom:'dg', text:'Screens PULMONARY EMBOLISM red flags (sudden onset, pleuritic chest pain, haemoptysis, unilateral calf swelling, immobility/long travel/surgery/prior VTE) and recognises her picture as a likely PE' },
      { dom:'dg', text:'Screens the other "not a flare" causes \u2014 heart failure (orthopnoea/PND/oedema), pneumonia (fever/focal/confusion), pneumothorax (sudden unilateral), arrhythmia, and lung cancer (haemoptysis/weight loss, NICE NG12)' },
      { dom:'dg', text:'Gauges severity remotely (speech in sentences, exhaustion, confusion) and recognises the LIMITS of telephone assessment — cannot examine, take a pulse, measure sats or do an ECG; knows that with PE likely the next step is same-day CTPA, not a D-dimer (NICE NG158)' },
      { dom:'cm', text:'Reaches a SAFE disposition: a PE picture / concerning feature / significant severity \u2192 URGENT face-to-face assessment or admission, NOT a phoned-in rescue pack (and would only manage remotely a clear mild flare after a negative red-flag screen, with an antibiotic only on NICE NG114 judgement)' },
      { dom:'ro',   text:'Reads the "too wiped out to come / just call it in" as exhaustion and minimisation, asks the discriminating questions despite her framing, and does NOT collude with the phone-prescription request' },
      { dom:'ro',   text:'Explains clearly and kindly over the phone why she must be seen urgently, and brings a reluctant patient to agree, arranging the route to assessment' },
      { dom:'cm',    text:'Safety-nets robustly: explicit deterioration red flags and 999 advice (worsening breathlessness, chest pain, collapse, coughing blood), confirms transport/route to urgent assessment (not driving herself), documents the triage and decision, and arranges follow-up \u2014 urgent assessment for a possible PE, not a phoned-in prescription' },
    ],
    worked:[
      { lbl:'Take it seriously, ask precisely', txt:'"I\u2019m glad you rang, and I do want to help \u2014 but before I assume it\u2019s the usual flare, let me ask some specific questions, because being more breathless can have a few different causes. Did this come on gradually over days, or more suddenly?"' },
      { lbl:'Screen the PE picture', txt:'"Any sharp pain when you breathe in? \u2026 Yes. Have you coughed up any blood? Is one of your calves swollen or sore? \u2026 The left one. And have you been less active lately \u2014 any long journeys? \u2026 A coach trip last week. Thank you \u2014 those answers matter a lot."' },
      { lbl:'Explain honestly why not a flare', txt:'"I have to be straight with you, Ivy. Coming on suddenly, with a sharp pain on breathing and a swollen calf after a long trip, makes me worried this isn\u2019t your usual chest flare \u2014 it could be a clot on the lung. That\u2019s not something I can safely treat over the phone with steroids."' },
      { lbl:'Safe disposition', txt:'"You do need to be seen urgently today and examined, with a tracing of your heart, blood tests and probably a scan of your lungs — at the hospital, not at the surgery. I know you\u2019re exhausted and didn\u2019t want to come in, but this is exactly the situation where being seen quickly really matters."' },
      { lbl:'Arrange + don\u2019t collude', txt:'"I\u2019m going to arrange that now rather than call in a prescription \u2014 I’ll sort how you get there — please don’t drive yourself. Is there someone who can be with you? If at any point the breathlessness suddenly worsens, you get severe chest pain, or you feel faint, call 999 straight away."' },
      { lbl:'Safety-net + document', txt:'"To be clear on warning signs while we arrange this: sudden worse breathlessness, chest pain, coughing blood, or feeling like you might pass out \u2014 999. I\u2019ll document all this and make sure you\u2019re expected. We\u2019ll get to the bottom of it today."' },
    ],
    learning:'Telephone triage of "more breathless" in a known COPD patient must NOT anchor on "just another flare". A structured history actively distinguishes a typical infective exacerbation (gradual build, increased purulent sputum) from SOMETHING NEW: PULMONARY EMBOLISM (sudden onset, pleuritic chest pain, haemoptysis, unilateral calf swelling, immobility/long travel/recent surgery/prior VTE, with tachycardia and breathlessness disproportionate to a clear chest found only on examination), HEART FAILURE (orthopnoea, paroxysmal nocturnal dyspnoea, ankle oedema, weight gain), PNEUMONIA (fever, focal symptoms, confusion in the elderly), PNEUMOTHORAX (sudden unilateral breathlessness/pain), arrhythmia, and lung cancer (haemoptysis, weight loss — NICE NG12 (Suspected cancer: recognition and referral, last updated April 2026)). Telephone assessment can take a careful history and gauge severity (speech in sentences, exhaustion, confusion) but cannot examine, take a pulse, measure saturations or perform an ECG, and with PE likely (Wells more than 4) NICE NG158 moves straight to an immediate CTPA or interim anticoagulation rather than a D-dimer, so any PE picture, concerning "not a flare" feature, or significant severity mandates URGENT face-to-face assessment or admission rather than a phoned-in rescue pack; only a clear-cut mild flare with a negative red-flag screen is suitable for remote management (prednisolone per NICE NG115; an antibiotic only on NICE NG114 judgement). The hidden agenda \u2014 exhaustion, inconvenience and minimisation ("just call it in, I\u2019m too wiped out to come") \u2014 must not deflect the discriminating questions; when red flags emerge (here sudden onset, pleuritic pain, a swollen calf and a recent long coach journey \u2014 a PE picture), explain clearly and kindly why she must be seen urgently, arrange the route to assessment, refuse to collude with the phone-prescription request, and safety-net robustly with explicit 999 red flags.',
    knowledge:{
      guideline:'[1] NICE NG115 (COPD in over 16s, 2018, updated 2019) · [2] NICE NG158 (venous thromboembolic diseases, 2020, updated August 2023) · [3] NICE NG114 (COPD exacerbation: antimicrobial prescribing, 2018) · [4] NICE NG106 (chronic heart failure, 2018, updated September 2025) · [5] NICE NG250 (pneumonia, September 2025; partly replaced CG191) · [6] NICE NG12 Suspected cancer: recognition and referral (2015, last updated April 2026) · [7] GMC Good practice in prescribing and managing medicines and devices (2021) · PE / DVT risk · heart-failure and pneumonia recognition · remote/telephone triage safety',
      points:[
        { h:'Don\u2019t anchor', t:'A known COPD patient with new breathlessness may have a new, dangerous cause. Take a structured history that screens alternatives rather than confirming the expected flare.' },
        { h:'PE red flags', t:'Sudden onset, pleuritic chest pain, haemoptysis, unilateral calf pain/swelling, immobility/long travel/recent surgery/prior VTE/malignancy; on examination, tachycardia and breathlessness out of proportion to chest findings. PE likely (Wells more than 4) → immediate CTPA or interim anticoagulation (NICE NG158).' },
        { h:'Other "not a flare" causes', t:'Heart failure (orthopnoea, PND, oedema, weight gain), pneumonia (fever, focal symptoms, confusion), pneumothorax (sudden unilateral), arrhythmia, lung cancer (haemoptysis, weight loss → NICE NG12).' },
        { h:'Telephone limits', t:'Can take history and gauge severity (sentences, exhaustion, confusion) but cannot examine, take a pulse, measure sats or do an ECG. This shapes disposition: the PE work-up is at hospital the same day.' },
        { h:'Safe disposition', t:'PE picture / concerning feature / significant severity \u2192 urgent face-to-face assessment or admission, not a phoned-in rescue pack. Remote management only for a clear mild flare with a negative red-flag screen (prednisolone 30 mg for 5 days, NICE NG115; antibiotic only on NICE NG114 judgement).' },
        { h:'Read the agenda', t:'Exhaustion, inconvenience and minimisation drive "just call it in". Ask discriminating questions regardless; explain kindly why urgent assessment is needed; do not collude.' },
        { h:'Never do', t:'Never phone in a rescue pack on the patient\u2019s "it\u2019s just my COPD"; never skip the PE/HF/pneumonia screen; never ignore sudden onset/pleuritic pain/calf swelling; never let exhaustion deflect urgent assessment.' },
        { h:'Safety-net & follow-up', t:'Explicit 999 red flags (sudden worse breathlessness, chest pain, collapse, haemoptysis); confirm transport/route to assessment (she should not drive); document the triage and decision; arrange follow-up.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c188, c189, c190, c191);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'copd-flare-smoker': {
      ceg: ['Long-term conditions & cancer', 'Mental health & addiction'],
      stem: {
        name: 'Frank Dolan', age: '61 years \u00b7 male',
        pmh: ['Severe COPD (FEV1 ~45%; NG115: 30–49% = severe); recurrent exacerbations', '\u26a0 Current smoker ~40 pack-years', '4 days: \u2191 breathlessness, \u2191 cough, GREEN purulent sputum; no fever/pleuritic pain/haemoptysis; talking in sentences'],
        meds: ['LABA/LAMA inhaler', 'Salbutamol PRN'],
        allergy: 'NKDA',
        recent: '"Just give me the usual steroids and antibiotics \u2014 don\u2019t start on about the smoking."',
        reason: 'Video consultation \u2014 COPD exacerbation.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Grade + exclude', d:'Severity (sentences/effort on video; sats if home oximeter; face to face if in doubt), exclude pneumonia/PE/HF/pneumothorax/cancer before the rescue pack.' },
        { t:'2\u20135',  h:'Treat correctly', d:'\u2191 bronchodilator; prednisolone 30 mg \u00d75 days; antibiotic on NG114 judgement (purulent, increased sputum here); optimise inhalers + rescue plan.' },
        { t:'5\u20137',  h:'NICE NG12 lung awareness', d:'Ever-smoker 40+: CXR within 2 weeks if unexplained symptoms, non-resolution or weight loss; haemoptysis → suspected cancer pathway; don\u2019t let rescue packs mask a tumour.' },
        { t:'7\u201310', h:'Cessation offer (VBA)', d:'Ask permission; advise it helps even now; offer combo NRT/varenicline/vaping + service. No lecture.' },
        { t:'10\u201312',h:'Safety-net', d:'Worse breathlessness/drowsy/fever/haemoptysis \u2192 urgent/999; review after flare; cessation offer stays open.' }
      ],
      wordPics: {
        fail: 'Phones in the usual steroids + antibiotics without grading severity or excluding mimics; either ignores smoking or lectures; misses NICE NG12 lung awareness.',
        pass: 'Assesses severity, treats the flare correctly (antibiotic justified on NG114 judgement), and makes a brief cessation offer.',
        exc:  'Grades severity and excludes pneumonia/PE/HF/cancer, treats correctly (prednisolone 5 days + appropriate antibiotic + inhaler/rescue plan), keeps NICE NG12 lung awareness as a smoker, delivers a respectful VBA cessation offer with pharmacotherapy/referral addressing fatalism, and safety-nets \u2014 earning trust, not colluding or hectoring.'
      },
      avoid: [
        { dont:'"Same as last time \u2014 I\u2019ll call in your steroids and antibiotics, off you go."', instead:'"Let me quickly check a few things first \u2014 sudden onset, chest pain, fever, coughing blood \u2014 so I treat the right problem."', why:'Reflexive rescue packs without grading/excluding mimics can miss pneumonia, PE, HF or lung cancer.' },
        { dont:'"You really must stop smoking \u2014 it\u2019s killing you, you know that."', instead:'"Can I mention it just once, not to nag? Stopping is the biggest thing for your lungs and helps even now \u2014 and I can make it easier whenever you\u2019re ready."', why:'Lecturing/moralising entrenches defensiveness; VBA as a respectful offer is more effective.' },
        { dont:'(Ignoring cancer risk) treating every flare as routine in a heavy smoker.', instead:'"Because you smoke, if this doesn’t settle I’ll arrange a chest X-ray, and if you cough up blood I’ll refer you urgently."', why:'Repeated rescue packs can mask an evolving lung cancer in a smoker.' }
      ]
    },

    'copd-poor-control': {
      ceg: ['Long-term conditions & cancer', 'Prescribing & pharmacology'],
      stem: {
        name: 'Coralie Beaumont', age: '67 years \u00b7 female',
        pmh: ['COPD (ex-smoker) on LABA/LAMA; persistent breathlessness + frequent exacerbations', 'Wants "something stronger / a triple inhaler"', 'Inhaler technique not recently checked'],
        meds: ['LABA/LAMA inhaler', 'Salbutamol PRN'],
        allergy: 'NKDA',
        recent: '"My inhalers aren\u2019t working any more \u2014 I need something stronger. I feel like I\u2019m going backwards."',
        reason: 'Video consultation \u2014 COPD review for poor control.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Validate + reframe', d:'Acknowledge frustration/fear; check basics before escalating \u2014 a new inhaler used the same way may not help.' },
        { t:'2\u20135',  h:'Technique + adherence', d:'Ask her to demonstrate; correct errors; spacer/device match; check adherence + diagnosis + overlap.' },
        { t:'5\u20137',  h:'Non-drug optimisation', d:'Pulmonary rehab (MRC ≥3), vaccines per Green Book eligibility, cessation, self-management/rescue plan \u2014 often most impactful.' },
        { t:'7\u201310', h:'Escalation logic', d:'On LABA+LAMA: 1 severe or 2 moderate exacerbations/year → consider ICS (triple); symptoms → 3-month trial, step back if no benefit (NG115).' },
        { t:'10\u201312',h:'Trade-off + review', d:'ICS cuts exacerbations vs pneumonia risk; combination inhaler; review benefit; NICE NG12 lung if red flags.' }
      ],
      wordPics: {
        fail: 'Reflexively prescribes a triple/"stronger" inhaler without checking technique, adherence or offering pulmonary rehab; no eosinophil/pneumonia consideration.',
        pass: 'Checks technique/adherence, optimises non-drug care, and escalates to triple therapy with reasoning.',
        exc:  'Validates frustration, checks inhaler technique (teach-back) and adherence/diagnosis/contributors, optimises pulmonary rehab/vaccines/cessation/self-management, then escalates to ICS on the NG115 exacerbation/trial criteria and honest pneumonia-risk trade-off and review \u2014 not "stronger by default".'
      },
      avoid: [
        { dont:'"Let\u2019s put you on a triple inhaler \u2014 that\u2019s the strongest, it should fix it."', instead:'"Before escalating, show me how you take your inhaler \u2014 technique is the commonest reason they seem to stop working."', why:'Escalating without checking technique/adherence wastes the intervention and misses the real problem.' },
        { dont:'(Skipping rehab) "There\u2019s not much else besides inhalers."', instead:'"The most effective non-drug treatment for breathlessness is pulmonary rehab \u2014 I\u2019d really like to refer you."', why:'Omitting pulmonary rehabilitation neglects a strongly evidence-based, high-impact intervention.' },
        { dont:'(No trade-off) adding ICS without counselling.', instead:'"A steroid inhaler can cut flares but slightly raises pneumonia risk \u2014 so it\u2019s a considered choice, and we\u2019ll review if it helps."', why:'Adding ICS without the pneumonia-risk trade-off and review is poor prescribing.' }
      ]
    },

    'copd-advanced-ceiling': {
      ceg: ['Older adults', 'End-of-life & palliative care'],
      stem: {
        name: 'Albert Finch', age: '74 years \u00b7 male',
        pmh: ['Severe COPD (FEV1 <30%, MRC 5); triple therapy + home oxygen; multiple admissions this year', '\u26a0 Breathless at rest with breathlessness-related anxiety/panic', 'Recent frightening admission; raising "what happens from here"'],
        meds: ['LABA/LAMA/ICS inhaler', 'Home oxygen', 'Salbutamol PRN'],
        allergy: 'NKDA',
        recent: '"I don\u2019t want to end up on machines \u2014 but I\u2019m terrified of suffocating."',
        reason: 'Video consultation \u2014 advanced COPD, exploring the future.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Open gently', d:'Seize the ACP opening at his pace; explore the frightening admission, values, fears.' },
        { t:'2\u20134',  h:'Name the cycle', d:'Breathlessness\u2013anxiety cycle is real, not weakness; much can be done to break it.' },
        { t:'4\u20137',  h:'Clarify the "machines"', d:'Separate ITU/invasive ventilation from reversible NIV and CPR; explore wishes; document plan, no coercion.' },
        { t:'7\u201310', h:'Symptom control', d:'Fan, breathing/positioning, pacing; low-dose opioids \u00b1 anxiolytic for refractory breathlessness; palliative care.' },
        { t:'10\u201312',h:'Carer + safety-net', d:'Support any carer; oxygen fire safety; crisis plan; share/document wishes; review \u2014 nothing fixed.' }
      ],
      wordPics: {
        fail: 'Avoids the conversation or imposes a DNACPR checklist; misses the breathlessness\u2013anxiety cycle and symptom-control options; doesn\u2019t involve palliative care or support the carer.',
        pass: 'Initiates ACP sensitively, addresses breathlessness with non-drug + opioid measures, and discusses ceiling of care.',
        exc:  'Sensitively opens advance care planning at his pace, clarifies NIV vs ITU vs CPR and documents values-based wishes without coercion, names and manages the breathlessness\u2013anxiety cycle (fan/breathing/positioning + low-dose opioids/anxiolytic), involves palliative care early, supports any carer, checks oxygen fire safety, and holds honesty with compassion plus a crisis plan.'
      },
      avoid: [
        { dont:'(Avoiding it) "Let\u2019s just keep going with your inhalers and see how you do."', instead:'"You\u2019ve raised the future and I\u2019d like to honour that \u2014 can we talk about what matters to you and what you\u2019d want if things got worse?"', why:'Dodging an opened door to advance care planning abandons the patient\u2019s need and a key skill.' },
        { dont:'"So you don\u2019t want any machines \u2014 I\u2019ll put a DNACPR in place."', instead:'"Let\u2019s separate things: intensive care with a tube, a gentler reversible mask used in flares, and resuscitation are different \u2014 shall we talk through each?"', why:'Conflating NIV/ITU/CPR and imposing decisions ignores nuance and patient values.' },
        { dont:'"There\u2019s nothing more we can do for the breathlessness."', instead:'"There\u2019s a lot we can do \u2014 a fan, breathing techniques, and small doses of medicine that ease both the breathlessness and the panic."', why:'Therapeutic nihilism abandons effective symptom control and worsens the terror.' }
      ]
    },

    'copd-phone-breathless': {
      ceg: ['Urgent & unscheduled care', 'Long-term conditions & cancer'],
      stem: {
        name: 'Ivy Marchetti', age: '69 years \u00b7 female',
        pmh: ['Known COPD; rings "more breathless \u2014 just another flare"', '\u26a0 SUDDEN onset + sharp pleuritic chest pain + left CALF swelling; recent long coach trip', 'Wants a phoned-in rescue pack'],
        meds: ['LABA/LAMA inhaler', 'Salbutamol PRN'],
        allergy: 'NKDA',
        recent: '"Just call me in the steroids and antibiotics \u2014 I\u2019m too wiped out to come in."',
        reason: 'Telephone consultation \u2014 increased breathlessness in known COPD.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Don\u2019t anchor', d:'Take it seriously but ask discriminating questions \u2014 not just confirm "flare".' },
        { t:'2\u20135',  h:'Screen PE', d:'Sudden onset? pleuritic pain? haemoptysis? calf swelling? recent travel/immobility? \u2014 PE picture emerges.' },
        { t:'5\u20137',  h:'Screen HF/pneumonia/PTX', d:'Orthopnoea/PND/oedema; fever/focal/confusion; sudden unilateral; haemoptysis/weight loss (NICE NG12).' },
        { t:'7\u20139',  h:'Safe disposition', d:'Telephone can’t examine/pulse/sats/ECG → PE picture (Wells >4) needs same-day hospital assessment for CTPA, not a phone script or a D-dimer.' },
        { t:'9\u201312', h:'Explain + safety-net', d:'Kindly explain why she must be seen; arrange transport; 999 red flags (worse breathlessness/chest pain/collapse).' }
      ],
      wordPics: {
        fail: 'Phones in steroids/antibiotics on "it\u2019s just my COPD"; never screens for PE/HF; misses the sudden onset/pleuritic pain/swollen calf; colludes with avoidance.',
        pass: 'Screens the red flags, recognises a likely PE, and arranges urgent face-to-face assessment with safety-netting.',
        exc:  'Refuses to anchor on "flare", takes a structured history screening PE/HF/pneumonia/pneumothorax/cancer, recognises the PE picture, respects telephone limits, arranges urgent same-day hospital assessment rather than a phone prescription, explains kindly without colluding, and safety-nets with 999 red flags and transport.'
      },
      avoid: [
        { dont:'"It\u2019s your COPD again \u2014 I\u2019ll call in your usual steroids and antibiotics."', instead:'"Before I assume that, did it come on suddenly? Any sharp pain breathing in, or a swollen calf?"', why:'Anchoring on the patient\u2019s "just a flare" and phoning a rescue pack can miss a life-threatening PE.' },
        { dont:'"If you\u2019re too tired to come in, we\u2019ll manage it over the phone this time."', instead:'"I know you\u2019re exhausted, but with these features you need to be seen and examined urgently \u2014 I\u2019ll arrange how you get there."', why:'Colluding with avoidance when red flags are present is unsafe.' },
        { dont:'(No 999 advice) ending after arranging a routine review.', instead:'"While we arrange this \u2014 sudden worse breathlessness, chest pain, coughing blood or feeling faint means call 999."', why:'Omitting explicit emergency safety-netting for a possible PE is dangerous.' }
      ]
    }

  });

})();
