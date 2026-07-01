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
    meta:{ age:61, sex:'M', setting:'Video consultation \u2014 a COPD exacerbation in a current smoker.', system:'Respiratory \u2014 COPD exacerbation, rescue therapy & the teachable cessation moment' },
    brief:'Mr Frank Dolan, 61, known moderate-severe COPD (FEV1 ~45% predicted), current smoker ~40 pack-years, rings in with 4 days of increased breathlessness, more cough and a change to GREEN, purulent sputum, but NO fever, no pleuritic pain, no haemoptysis, and he is talking in full sentences. He wants his "usual" rescue steroids and antibiotics and is defensive about smoking. The task is to: assess exacerbation SEVERITY and exclude a more sinister cause (pneumonia, PE, heart failure, pneumothorax), treat the exacerbation appropriately (oral PREDNISOLONE 30 mg OD for 5 days; antibiotic ONLY if increased sputum purulence/volume or consolidation \u2014 which he has; optimise inhalers/bronchodilators; rescue-pack and self-management plan), arrange follow-up and consider the NG12 LUNG pathway given he is a smoker (CXR if any red flags / persistent change), and \u2014 the examinable communication \u2014 use this as the TEACHABLE MOMENT for smoking cessation done WELL (offer, not lecture; very-brief-advice + pharmacotherapy + referral), handling his defensiveness without colluding or hectoring.',
    script:{
      opening:'"Morning doc. It\u2019s my chest again \u2014 I\u2019m more puffed than usual, coughing more, and the phlegm\u2019s gone green. I know the drill, I just need my steroids and antibiotics like last time. And please don\u2019t start on about the smoking, I\u2019ve heard it all before."',
      facts:[
        { topic:'Assess severity + exclude the sinister', text:'Before reaching for the rescue pack, GRADE the exacerbation and exclude alternatives: ask about breathlessness at rest vs exertion, ability to speak in sentences, cyanosis/confusion/drowsiness (CO2 retention), accessory-muscle use, fever (pneumonia), PLEURITIC pain/sudden onset/calf swelling (PE), orthopnoea/oedema (heart failure), sudden severe breathlessness (pneumothorax), and HAEMOPTYSIS or weight loss (lung cancer). Check obs/sats where possible. He is talking in full sentences with no fever, pain or haemoptysis \u2014 reassuring for a straightforward infective exacerbation, but the exclusion must be explicit.' },
        { topic:'Treat the exacerbation correctly', text:'Standard exacerbation management: increase short-acting bronchodilator; ORAL PREDNISOLONE 30 mg once daily for 5 days; an ANTIBIOTIC only when there is increased sputum PURULENCE plus increased volume/breathlessness or clinical/radiological pneumonia (he has purulent green sputum and increased volume \u2014 so an antibiotic per local guideline, e.g. amoxicillin/doxycycline, is justified). Ensure inhaler optimisation and consider a personalised SELF-MANAGEMENT/rescue-pack plan with clear instructions. Admit if severe (marked breathlessness, low sats, confusion, cyanosis, comorbidity, poor support).' },
        { topic:'The NG12 lung-cancer awareness', text:'He is a heavy current smoker \u2014 keep the NG12 lung pathway in mind. NICE NG12: offer an urgent chest X-ray (within 2 weeks) in people aged 40+ with symptoms such as persistent cough, breathlessness, fatigue, chest/shoulder pain or weight loss (especially smokers), and refer urgently for unexplained HAEMOPTYSIS at 40+. A COPD exacerbation that does not settle, or any haemoptysis/weight loss/persistent focal change, should prompt a CXR rather than repeated rescue packs masking a tumour.' },
        { topic:'The teachable moment \u2014 cessation done well', text:'CORE COMMUNICATION \u2014 an exacerbation is the highest-yield moment for smoking cessation, but it must be done as an OFFER, not a lecture. Use Very Brief Advice (ASK\u2013ADVISE\u2013ACT): acknowledge he\u2019s heard it before, ask permission, state plainly that stopping is the single most effective thing for his lungs and that you can make it easier, and OFFER evidence-based support \u2014 combination NRT or varenicline/bupropion (or a switch to vaping as a harm-reduction step) plus referral to a stop-smoking service. Respect autonomy; plant the seed without hectoring or moralising.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 his "just give me the usual, don\u2019t mention smoking" is partly efficiency and partly defended GUILT/shame and fatalism ("too late now / it\u2019s the only thing I enjoy"). He may fear judgement or have tried and failed before. The skill is to treat the flare competently (earning trust), then make a respectful, non-judgemental cessation offer that addresses the fatalism (stopping helps even now) rather than colluding with "don\u2019t mention it".' },
        { topic:'What he needs', text:'Officially: the usual steroids and antibiotics, no smoking talk. What he needs: severity assessment with the sinister causes excluded; correct exacerbation treatment (prednisolone 5 days + antibiotic given purulence; bronchodilator/inhaler optimisation; rescue/self-management plan); NG12 lung awareness (CXR if red flags/non-resolution); a respectful, evidence-based cessation OFFER at the teachable moment; and follow-up \u2014 not a colluding rescue-pack-and-go.' },
      ],
      ice:{
        ideas:'It\u2019s "my chest again" \u2014 the same infective flare as before; the fix is the usual steroids + antibiotics.',
        concerns:'HIDDEN AGENDA \u2014 defended guilt/shame and fatalism about smoking ("too late / only thing I enjoy"), fear of being judged or lectured, possibly prior failed attempts.',
        expectations:'A quick repeat of the usual rescue pack with no smoking talk. What he needs: severity/cause assessment, correct treatment, NG12 lung awareness, and a respectful cessation offer \u2014 not collusion or a lecture.'
      },
      cues:['Increased breathlessness + cough + green purulent sputum, no fever/pleuritic pain/haemoptysis, talking in sentences \u2014 likely infective exacerbation; grade severity, exclude PE/HF/pneumonia.','40 pack-year current smoker \u2014 keep NG12 lung in mind: CXR for non-resolution/haemoptysis/weight loss; don\u2019t let repeat rescue packs mask a tumour.','"Don\u2019t start on about the smoking" \u2014 defended guilt/fatalism; treat the flare well first, then offer cessation respectfully (VBA + pharmacotherapy + referral), don\u2019t collude or lecture.']
    },
    checkpoints:[
      { dom:'tasks', text:'Assesses exacerbation SEVERITY (breathlessness at rest/sentences, sats/obs, accessory muscles, confusion/cyanosis) and EXCLUDES alternative causes \u2014 pneumonia (fever), PE (pleuritic pain/calf), heart failure (orthopnoea/oedema), pneumothorax, lung cancer (haemoptysis/weight loss) \u2014 before treating' },
      { dom:'tasks', text:'Treats the exacerbation correctly: increased bronchodilator, oral PREDNISOLONE 30 mg OD for 5 days, and an antibiotic given increased sputum PURULENCE + volume (per local guideline) \u2014 not antibiotics reflexively for every flare' },
      { dom:'tasks', text:'Decides disposition (treat at home vs admit) on severity/comorbidity/support, and provides inhaler optimisation and a personalised self-management/rescue-pack plan with clear instructions' },
      { dom:'tasks', text:'Keeps the NG12 LUNG pathway in mind for a smoker \u2014 arranges a CXR if red flags (haemoptysis, weight loss, persistent/focal change) or if the exacerbation does not resolve \u2014 rather than letting repeated rescue packs mask a tumour' },
      { dom:'tasks', text:'Delivers the teachable-moment cessation OFFER well \u2014 Very Brief Advice (ask permission, advise plainly, act), offering combination NRT/varenicline/bupropion (or vaping harm-reduction) plus stop-smoking-service referral \u2014 addressing fatalism that it is "too late"' },
      { dom:'rto',   text:'Reads the defensiveness as guilt/shame/fatalism, treats the flare competently to earn trust, and makes the cessation offer respectfully WITHOUT colluding with "don\u2019t mention it" or hectoring' },
      { dom:'rto',   text:'Builds rapport with a defensive patient, acknowledges he has heard it before, and checks understanding of the treatment and self-management plan' },
      { dom:'gs',    text:'Safety-nets and follows up: deterioration red flags (worsening breathlessness, drowsiness/confusion, fever, haemoptysis) and when to seek urgent help/admission, review after the exacerbation, CXR/spirometry as indicated, cessation support arranged, and self-management reinforced' },
    ],
    worked:[
      { lbl:'Earn trust \u2014 assess first', txt:'"Let\u2019s get you sorted. First a few quick checks so I treat the right thing: are you breathless just moving or at rest too? Any fever, chest pain when you breathe in, calf swelling, or coughing up blood? \u2026 None of that, and you\u2019re talking in full sentences \u2014 good, that points to a straightforward flare."' },
      { lbl:'Treat it properly', txt:'"Your phlegm\u2019s gone green and there\u2019s more of it, so a course of antibiotics is justified this time, plus the steroid tablets \u2014 prednisolone 30 a day for 5 days \u2014 and step up your blue inhaler. Let\u2019s make sure your rescue pack and plan are up to date so you can act fast next time."' },
      { lbl:'Keep lung cancer honest', txt:'"One thing because you smoke: if this doesn\u2019t settle, or you ever cough up blood or lose weight, I\u2019ll want a chest X-ray \u2014 not to alarm you, just so we never put something more serious down to \u2018the usual chest\u2019."' },
      { lbl:'Open the cessation door', txt:'"Can I mention the smoking just once, not to nag \u2014 is that okay? \u2026 The single biggest thing for your breathing is stopping, and crucially it helps even now, at this stage. I\u2019m not here to judge; I\u2019m here to make it easier if you ever want to."' },
      { lbl:'Make a real offer', txt:'"If you\u2019re open to it, the things that genuinely work are a combination of nicotine patches and a quick-acting form, or a tablet like varenicline, plus our stop-smoking team who really boost your chances. Switching to vaping is also far less harmful than cigarettes. No pressure \u2014 the offer\u2019s there whenever."' },
      { lbl:'Safety-net + follow-up', txt:'"If you get more breathless, drowsy or confused, develop a fever, or cough up blood, that\u2019s urgent \u2014 ring us or 999. Let\u2019s review you after this settles to check your inhalers and lung function. And the cessation offer stays open \u2014 just say the word."' },
    ],
    learning:'A COPD exacerbation in a smoker must be treated competently AND used as a teachable cessation moment. First GRADE severity and exclude the sinister mimics \u2014 pneumonia (fever), PE (pleuritic pain, sudden onset, calf swelling), heart failure (orthopnoea, oedema), pneumothorax (sudden severe breathlessness) and lung cancer (haemoptysis, weight loss) \u2014 checking obs/sats, speech and conscious level; talking in full sentences with no fever, pain or haemoptysis is reassuring for a straightforward infective flare but the exclusion must be explicit, and admit if severe. Treat correctly: increase the short-acting bronchodilator, give oral PREDNISOLONE 30 mg once daily for 5 days, and add an ANTIBIOTIC only when sputum is increasingly PURULENT with increased volume/breathlessness or there is pneumonia (as here) \u2014 not reflexively for every flare \u2014 plus inhaler optimisation and a personalised self-management/rescue-pack plan. Keep the NG12 LUNG pathway in mind for a smoker: offer an urgent CXR (within 2 weeks) for 40+ with persistent cough/breathlessness/weight loss/chest pain, refer urgently for unexplained haemoptysis at 40+, and image rather than let repeated rescue packs mask a tumour if a flare does not resolve. The examinable communication is the cessation OFFER done as Very Brief Advice (ask permission, advise plainly that stopping is the single most effective intervention and helps even now, act by offering combination NRT/varenicline/bupropion or vaping harm-reduction plus a stop-smoking-service referral), reading the patient\u2019s defensiveness as guilt/shame/fatalism, earning trust by treating the flare well, and respecting autonomy \u2014 neither colluding with "don\u2019t mention it" nor hectoring. Safety-net for deterioration and follow up.',
    knowledge:{
      guideline:'NICE NG115 COPD \u00b7 COPD exacerbation management \u00b7 NICE NG12 (lung) \u00b7 NCSCT Very Brief Advice on smoking',
      points:[
        { h:'Grade & exclude', t:'Assess severity (breathlessness, sentences, sats/obs, accessory muscles, confusion/cyanosis) and exclude pneumonia, PE, heart failure, pneumothorax and lung cancer before labelling a simple exacerbation. Admit if severe.' },
        { h:'Exacerbation treatment', t:'Increase short-acting bronchodilator; oral prednisolone 30 mg OD for 5 days; antibiotic only with increased sputum purulence + volume/breathlessness or pneumonia (per local guideline). Optimise inhalers; provide self-management/rescue plan.' },
        { h:'Antibiotic stewardship', t:'Not every flare needs an antibiotic \u2014 reserve for purulent sputum with increased volume/breathlessness or clinical/radiological pneumonia. Avoid reflexive prescribing.' },
        { h:'NG12 lung awareness', t:'In smokers 40+, offer urgent CXR (2 weeks) for persistent cough/breathlessness/weight loss/chest or shoulder pain; refer urgently for unexplained haemoptysis at 40+. Image non-resolving flares rather than repeat rescue packs.' },
        { h:'Very Brief Advice', t:'ASK (permission/status), ADVISE (stopping is the most effective action and helps at any stage), ACT (offer pharmacotherapy + referral). Brief, opportunistic, non-judgemental.' },
        { h:'Cessation pharmacotherapy', t:'Combination NRT (patch + short-acting), varenicline or bupropion; vaping as harm reduction; refer to stop-smoking services to maximise success. Address fatalism ("too late").' },
        { h:'Never do', t:'Never reflexively issue a rescue pack without assessing severity/excluding mimics; never give antibiotics for every flare; never ignore haemoptysis/weight loss in a smoker; never collude with "don\u2019t mention smoking"; never lecture/moralise.' },
        { h:'Safety-net & follow-up', t:'Deterioration red flags (worsening breathlessness, drowsiness/confusion, fever, haemoptysis) and urgent-help advice; post-exacerbation review; CXR/spirometry as indicated; cessation support arranged; self-management reinforced.' }
      ]
    }
  };

  /* ============ 189. F2F — Poorly controlled COPD: inhaler technique & triple-therapy logic ============ */
  const c189 = {
    id:'copd-poor-control', title:'"My inhalers just aren\u2019t working any more \u2014 I need something stronger"', type:'video', duration:12,
    meta:{ age:67, sex:'F', setting:'Video consultation \u2014 a COPD review for poor symptom control.', system:'Respiratory \u2014 COPD optimisation: inhaler technique, adherence & escalation logic' },
    brief:'Mrs Coralie Beaumont, 67, COPD (ex-smoker), still breathless and having frequent flares despite being on a LABA/LAMA inhaler. She is frustrated and wants "something stronger". The examinable task is the structured COPD optimisation review: before escalating, CHECK THE BASICS \u2014 inhaler TECHNIQUE (the commonest reason for "failure"), ADHERENCE, the correct diagnosis (spirometry-confirmed; consider asthma overlap), and treatable contributors (ongoing smoking/exposure, comorbidity, deconditioning) \u2014 then apply NICE escalation LOGIC: optimise non-pharmacological care (PULMONARY REHABILITATION, vaccinations, smoking status), and for the patient on LABA+LAMA who remains breathless/has exacerbations, consider adding an INHALED CORTICOSTEROID (triple therapy) \u2014 weighing ASTHMATIC/eosinophilic features and exacerbation frequency against the PNEUMONIA risk of ICS \u2014 rather than reflexively "stronger". Also address self-management, rescue packs, and review. NG12 lung awareness if red flags (no active cancer here). The skill is resisting "just escalate" and fixing technique/adherence and offering pulmonary rehab first.',
    script:{
      opening:'"Doctor, these inhalers just aren\u2019t doing anything any more \u2014 I\u2019m as breathless as ever and I keep getting chest infections. Can you give me something stronger? Maybe one of those triple inhalers I\u2019ve read about. I feel like I\u2019m going backwards."',
      facts:[
        { topic:'Check technique before escalating \u2014 the key step', text:'CORE \u2014 the commonest reason inhalers "stop working" is poor TECHNIQUE, not inadequate drug. ASK the patient to demonstrate their inhaler(s); a large proportion of patients have critical errors (poor coordination with MDIs, insufficient inspiratory effort with dry-powder devices, not breath-holding). Correct technique, consider a spacer or a device better matched to the patient, and re-check \u2014 this alone often transforms control and avoids unnecessary escalation.' },
        { topic:'Adherence, diagnosis & contributors', text:'Also before escalating: check ADHERENCE (how often she actually uses the maintenance inhaler), confirm the DIAGNOSIS is spirometry-based (FEV1/FVC <0.7 post-bronchodilator) and consider ASTHMA\u2013COPD overlap (atopy, variability, eosinophils), and identify treatable contributors \u2014 ongoing smoking/occupational/home exposures, comorbidity (heart failure, anaemia, anxiety), deconditioning, and weight. "Going backwards" may be fixable without a new inhaler.' },
        { topic:'Optimise non-pharmacological care first', text:'NICE emphasises non-drug measures that genuinely reduce breathlessness and exacerbations: PULMONARY REHABILITATION (strongly evidence-based for breathlessness and quality of life \u2014 refer if MRC dyspnoea \u22653/functionally limited), vaccinations (influenza, pneumococcal, COVID), smoking cessation if relevant, and a personalised self-management plan with a rescue pack. These are often more impactful than escalating inhalers.' },
        { topic:'The triple-therapy escalation logic', text:'If technique/adherence are optimised and she remains breathless and/or has frequent exacerbations on LABA+LAMA, NICE supports considering an INHALED CORTICOSTEROID (i.e. LABA+LAMA+ICS, "triple therapy"), ESPECIALLY with asthmatic/steroid-responsive features (raised blood EOSINOPHILS, atopy, diurnal/variability, prior asthma) or frequent exacerbations. Counsel the trade-off: ICS reduces exacerbations in the right patient but raises PNEUMONIA risk \u2014 so it is a reasoned step, not "stronger by default", and review benefit (stop if no benefit). A single combination inhaler aids adherence.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 her "something stronger / a triple inhaler" frames escalation as the only lever, when the real issues may be technique, adherence, deconditioning or an unaddressed contributor; "going backwards" carries fear about her future and loss of independence. The skill is to validate the frustration, demonstrate that fixing the basics and pulmonary rehab can help, and escalate thoughtfully where genuinely indicated \u2014 not reflexively.' },
        { topic:'What she needs', text:'Officially: a stronger/triple inhaler. What she needs: an inhaler-TECHNIQUE check and adherence review; diagnosis confirmation and contributor screen; optimisation of non-pharmacological care (PULMONARY REHAB, vaccines, cessation, self-management plan); reasoned consideration of triple therapy weighing eosinophils/exacerbations against pneumonia risk; and review \u2014 not reflexive escalation, with NG12 lung awareness if red flags appear.' },
      ],
      ice:{
        ideas:'The inhalers have "stopped working" and the answer is a stronger/triple inhaler.',
        concerns:'HIDDEN AGENDA \u2014 fear of decline and lost independence ("going backwards"); frustration; recurrent infections wearing her down.',
        expectations:'A stronger prescription. What she needs: technique/adherence check, contributor screen, pulmonary rehab and non-drug optimisation, and reasoned escalation only where indicated.'
      },
      cues:['Breathless + frequent flares on LABA/LAMA, wants "stronger" \u2014 check inhaler TECHNIQUE and adherence first (commonest cause of "failure").','Optimise non-pharmacological care: PULMONARY REHAB (MRC \u22653), vaccines, cessation, self-management/rescue plan \u2014 often more impactful than escalation.','Triple therapy (add ICS) is a reasoned step for breathlessness/exacerbations esp. with eosinophilia/asthma features \u2014 weigh against pneumonia risk; not "stronger by default".']
    },
    checkpoints:[
      { dom:'tasks', text:'CHECKS INHALER TECHNIQUE (asks the patient to demonstrate) and corrects it \u2014 recognising poor technique as the commonest reason inhalers "stop working" \u2014 and considers a spacer/better-matched device before escalating' },
      { dom:'tasks', text:'Reviews ADHERENCE, confirms a spirometry-based diagnosis, considers asthma\u2013COPD overlap, and screens treatable contributors (smoking/exposure, heart failure, anaemia, anxiety, deconditioning, weight)' },
      { dom:'tasks', text:'Optimises NON-PHARMACOLOGICAL care \u2014 refers to PULMONARY REHABILITATION (MRC dyspnoea \u22653/functionally limited), checks vaccinations, reinforces cessation, and provides a self-management plan/rescue pack \u2014 before or alongside any escalation' },
      { dom:'tasks', text:'Applies NICE escalation LOGIC: for persistent breathlessness/exacerbations on LABA+LAMA with optimised basics, considers adding an INHALED CORTICOSTEROID (triple therapy), weighted by eosinophils/asthmatic features and exacerbation frequency' },
      { dom:'tasks', text:'Counsels the ICS trade-off (reduced exacerbations vs increased PNEUMONIA risk), uses a combination inhaler for adherence, and plans to review benefit (stop ICS if no benefit) \u2014 not "stronger by default"' },
      { dom:'rto',   text:'Validates the frustration and the fear of "going backwards", and reframes the plan around fixable basics and rehab rather than dismissing her request' },
      { dom:'rto',   text:'Explains the technique/escalation reasoning clearly, checks understanding (teach-back of inhaler technique), and supports adherence' },
      { dom:'gs',    text:'Safety-nets and follows up: review after optimisation/rehab, exacerbation action plan, NG12 lung awareness if red flags (haemoptysis, weight loss), and a clear escalation/de-escalation plan with review of any ICS benefit \u2014 fixing the basics, not reflexive escalation' },
    ],
    worked:[
      { lbl:'Validate, then reframe', txt:'"I can hear how frustrating this is, and \u2018going backwards\u2019 is a horrible feeling. Before I just add a stronger inhaler \u2014 which I will if it\u2019s the right thing \u2014 let me check a few things that very often make the difference, because a new inhaler that\u2019s used the same way may not help."' },
      { lbl:'Check technique (teach-back)', txt:'"Could you show me exactly how you take your inhaler, as if I weren\u2019t here? \u2026 Ah \u2014 I can see the breath and the press aren\u2019t quite together. That\u2019s incredibly common, and it means a lot of the medicine isn\u2019t reaching your lungs. Let me show you, and a spacer might help too."' },
      { lbl:'Cover the basics', txt:'"A few other things: are you managing to take it every day? Have you had your flu and pneumonia jabs? And the single most effective treatment for breathlessness that isn\u2019t a drug at all is pulmonary rehab \u2014 a supervised exercise-and-education programme. I\u2019d really like to refer you."' },
      { lbl:'Escalate with logic', txt:'"If we\u2019ve sorted technique and you\u2019re still breathless or getting lots of flares, then yes \u2014 adding a third medicine, a steroid inhaler, makes sense, especially as you get frequent infections. I\u2019ll check a blood test that helps predict who benefits."' },
      { lbl:'Honest trade-off', txt:'"Being straight: that steroid inhaler can cut down flares, but it slightly raises the risk of pneumonia, so it\u2019s a considered choice, not just \u2018stronger\u2019. We\u2019ll use one combined inhaler to keep it simple, and review whether it\u2019s actually helping."' },
      { lbl:'Plan + safety-net', txt:'"So: fix the technique, get you onto pulmonary rehab and up to date with jabs, and review in a few weeks \u2014 escalating then if needed. If you cough up blood or lose weight, tell me. And let\u2019s make sure you\u2019ve a rescue plan for flares."' },
    ],
    learning:'When a COPD patient says their inhalers "aren\u2019t working" and asks for "something stronger", resist reflexive escalation and CHECK THE BASICS first. The commonest reason for apparent inhaler failure is poor TECHNIQUE \u2014 ask the patient to demonstrate, correct critical errors (coordination with MDIs, inspiratory effort with dry-powder devices, breath-holding), consider a spacer or a better-matched device, and re-check; this alone often transforms control. Also review ADHERENCE, confirm a spirometry-based diagnosis (post-bronchodilator FEV1/FVC <0.7), consider asthma\u2013COPD overlap, and screen treatable contributors (ongoing smoking/exposure, heart failure, anaemia, anxiety, deconditioning, weight). Optimise NON-PHARMACOLOGICAL care, which is frequently more impactful than escalation: refer for PULMONARY REHABILITATION (strong evidence for breathlessness and quality of life; offer if MRC dyspnoea \u22653/functionally limited), ensure vaccinations (influenza, pneumococcal, COVID), reinforce cessation, and provide a self-management plan with a rescue pack. Only then apply NICE escalation LOGIC: for persistent breathlessness and/or frequent exacerbations on LABA+LAMA with optimised basics, consider adding an INHALED CORTICOSTEROID (triple therapy), especially with asthmatic/steroid-responsive features (raised blood eosinophils, atopy, variability, prior asthma) or frequent exacerbations \u2014 counselling the trade-off that ICS reduces exacerbations in the right patient but raises PNEUMONIA risk, using a single combination inhaler for adherence, and reviewing benefit (stopping ICS if none). Validate the patient\u2019s frustration and fear of decline, reframe around fixable basics and rehab, keep NG12 lung awareness for red flags, and follow up \u2014 reasoned care, not "stronger by default".',
    knowledge:{
      guideline:'NICE NG115 COPD \u00b7 inhaler technique \u00b7 pulmonary rehabilitation \u00b7 triple therapy (ICS) & eosinophils/pneumonia trade-off',
      points:[
        { h:'Technique first', t:'Poor inhaler technique is the commonest reason for apparent failure. Ask the patient to demonstrate, correct errors, consider a spacer or better-matched device, and re-check before escalating.' },
        { h:'Adherence, diagnosis, contributors', t:'Review adherence; confirm spirometry-based diagnosis (post-BD FEV1/FVC <0.7); consider asthma\u2013COPD overlap; screen contributors (smoking/exposure, heart failure, anaemia, anxiety, deconditioning, weight).' },
        { h:'Non-pharmacological optimisation', t:'Pulmonary rehabilitation (offer if MRC \u22653/functionally limited) strongly improves breathlessness and quality of life; ensure flu/pneumococcal/COVID vaccines; reinforce cessation; provide self-management plan + rescue pack.' },
        { h:'Escalation logic', t:'Persistent breathlessness/exacerbations on LABA+LAMA with optimised basics \u2192 consider adding ICS (triple therapy), guided by asthmatic features and blood eosinophils and exacerbation frequency.' },
        { h:'ICS trade-off', t:'ICS reduces exacerbations in the right patient (eosinophilic/asthmatic features, frequent exacerbations) but increases pneumonia risk. Reasoned step, single combination inhaler for adherence; review and stop if no benefit.' },
        { h:'Validate & reframe', t:'Acknowledge frustration and fear of decline; reframe around fixable basics and rehab rather than dismissing the request; support adherence with teach-back.' },
        { h:'Never do', t:'Never escalate without checking technique/adherence; never skip pulmonary rehab/vaccines; never add ICS reflexively without considering eosinophils/pneumonia risk; never ignore red flags for lung cancer; never leave ICS unreviewed.' },
        { h:'Safety-net & follow-up', t:'Review after optimisation/rehab; exacerbation action plan; NG12 lung awareness for haemoptysis/weight loss; clear escalation/de-escalation plan with ICS benefit review.' }
      ]
    }
  };

  /* ============ 190. F2F — Advanced COPD: breathlessness, anxiety and the ceiling-of-care talk ============ */
  const c190 = {
    id:'copd-advanced-ceiling', title:'"I don\u2019t want to end up on a machine \u2014 but I\u2019m frightened every time I can\u2019t catch my breath"', type:'video', duration:12,
    meta:{ age:74, sex:'M', setting:'Video consultation \u2014 advanced COPD, exploring wishes and symptom control.', system:'Respiratory / Palliative \u2014 advanced COPD: breathlessness, anxiety & ceiling-of-care' },
    brief:'Mr Albert Finch, 74, severe COPD (FEV1 <30%, MRC dyspnoea 5, on triple therapy and home oxygen, multiple admissions this year), attends \u2014 prompted by a recent frightening admission \u2014 wanting to talk about the future. He is breathless at rest, has significant breathlessness-related ANXIETY/panic, and says he "doesn\u2019t want to end up on a machine" but is frightened of dying breathless. The examinable task is the ADVANCED-DISEASE consultation: sensitive ADVANCE CARE PLANNING and a ceiling-of-care/escalation conversation (including views on hospital admission, ventilation/ITU, resuscitation \u2014 explored gently, not imposed), recognition of the breathlessness\u2013anxiety cycle and its MANAGEMENT (non-pharmacological: handheld fan, breathing/positioning, pacing, pulmonary rehab principles, psychological support; pharmacological: low-dose opioids for refractory breathlessness, anxiolytics where appropriate), optimisation and supportive/palliative-care involvement, carer support, and honest, compassionate communication that holds both hope and realism. No NG12 cancer pathway applies; this is chronic-disease palliative care.',
    script:{
      opening:'"That last admission really shook me, doctor. When I can\u2019t catch my breath I genuinely think I\u2019m dying \u2014 the panic makes it worse. I don\u2019t want to end up hooked up to machines in intensive care. But I\u2019m also terrified of suffocating. I suppose I want to talk about what happens from here \u2014 if that\u2019s alright."',
      facts:[
        { topic:'Recognise this as advance care planning', text:'A patient with advanced COPD raising "what happens from here" after a frightening admission is opening the door to ADVANCE CARE PLANNING. Seize it sensitively: explore his understanding of his illness, what matters to him, his fears (suffocation, machines, being a burden), and his wishes about future care \u2014 at his pace, with permission, not as a checklist imposed on him.' },
        { topic:'The ceiling-of-care / escalation conversation', text:'Explore, gently, his views on future ESCALATION: hospital admission vs staying home, intensive care/invasive ventilation (which he says he does not want), non-invasive ventilation (which can be appropriate and reversible in exacerbations \u2014 clarify, as "no machines" may conflate NIV and ITU), and resuscitation status (a DNACPR discussion framed around what CPR can and cannot achieve in advanced COPD). Document an emergency/escalation plan (e.g. a ReSPECT-type recommendation) and ensure it travels with him. This is shared, values-based, and revisitable \u2014 never coerced.' },
        { topic:'The breathlessness\u2013anxiety cycle', text:'CRITICAL \u2014 breathlessness and anxiety/panic form a vicious cycle that amplifies suffering; addressing it is central. Acknowledge it explicitly and normalise it. Management is both non-pharmacological and pharmacological (below). Naming the cycle and giving him control strategies is itself therapeutic and reduces the terror that drives crises and admissions.' },
        { topic:'Non-pharmacological symptom control', text:'Evidence-based measures for chronic breathlessness: a HANDHELD FAN to the face (stimulates trigeminal airflow receptors), BREATHING techniques (pursed-lip, controlled breathing), POSITIONING (forward-lean), PACING and energy conservation, pulmonary-rehab principles, anxiety-management/psychological support (CBT-based), and a written crisis plan. These give the patient agency and reduce panic-driven escalation.' },
        { topic:'Pharmacological symptom control + palliative input', text:'For REFRACTORY breathlessness despite optimised COPD therapy, LOW-DOSE OPIOIDS (e.g. low-dose oral morphine) reduce the sensation of breathlessness and are appropriate and safe when titrated carefully; benzodiazepines may help breathlessness-related anxiety/panic in selected cases. Optimise COPD treatment and oxygen, treat reversible factors, and involve SUPPORTIVE/PALLIATIVE CARE early (it is not just for cancer or the last days) for symptom control, planning and carer support. Address the CARER too.' },
        { topic:'The communication core', text:'COMMUNICATION \u2014 hold honesty and compassion together: validate both fears (machines and suffocation), explain that we can do a great deal to prevent him suffocating and to support him whatever happens, clarify what NIV vs ITU vs CPR really mean for him, and reassure he will not be abandoned. Avoid both false reassurance and bleak fatalism. Pace it, check what he wants to discuss today, and offer to continue over future visits. No NG12 cancer pathway applies.' },
      ],
      ice:{
        ideas:'He is approaching the end of what treatment can do; wants to discuss "what happens from here" and avoid intensive-care machines.',
        concerns:'Terror of suffocating/dying breathless; fear of being "hooked up to machines"; the panic that worsens breathlessness; likely fear of being a burden.',
        expectations:'A conversation about the future. What he needs: sensitive advance care planning and ceiling-of-care discussion, management of the breathlessness\u2013anxiety cycle (fan/breathing + low-dose opioids/anxiolytics), palliative-care involvement, carer support, and compassionate honesty.'
      },
      cues:['Severe COPD (MRC 5, home O2, multiple admissions) raising "what happens from here" after a frightening admission \u2014 open the door to advance care planning sensitively.','"No machines" but "terrified of suffocating" \u2014 clarify NIV vs ITU vs CPR; explore wishes, document an escalation plan; never coerce.','Breathlessness\u2013anxiety cycle \u2014 manage with handheld fan/breathing/positioning/pacing + low-dose opioids/anxiolytics for refractory breathlessness; involve palliative care; support the carer.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises and sensitively initiates ADVANCE CARE PLANNING \u2014 exploring his understanding, what matters to him, his fears, and his wishes \u2014 at his pace and with permission, prompted by his own opening' },
      { dom:'tasks', text:'Explores the ceiling-of-care/escalation views (hospital vs home, ITU/invasive ventilation, NIV, resuscitation) \u2014 clarifying that "no machines" may conflate NIV (often appropriate/reversible) with ITU/CPR \u2014 and documents a values-based, revisitable escalation plan (e.g. ReSPECT/DNACPR) without coercion' },
      { dom:'tasks', text:'Names and addresses the BREATHLESSNESS\u2013ANXIETY cycle explicitly, normalising it and giving the patient control strategies' },
      { dom:'tasks', text:'Offers NON-PHARMACOLOGICAL breathlessness management \u2014 handheld fan, breathing techniques (pursed-lip/controlled), forward-lean positioning, pacing/energy conservation, psychological/CBT support and a written crisis plan' },
      { dom:'tasks', text:'Knows the PHARMACOLOGICAL options for refractory breathlessness \u2014 low-dose opioids (titrated) \u00b1 benzodiazepine for panic \u2014 optimises COPD therapy/oxygen and treats reversible factors, and involves SUPPORTIVE/PALLIATIVE care early (not only for cancer)' },
      { dom:'rto',   text:'Holds honesty and compassion together \u2014 validating both fears (machines and suffocation), reassuring he will not be left to suffocate or be abandoned \u2014 avoiding false reassurance and bleak fatalism' },
      { dom:'rto',   text:'Paces the conversation to what he wants to discuss today, checks understanding of NIV/ITU/CPR distinctions, and offers to continue over future visits' },
      { dom:'gs',    text:'Safety-nets and follows up: documents and shares the care/escalation plan, arranges symptom-control measures and palliative-care/community involvement, supports the carer, gives a crisis plan, and books review \u2014 compassionate advance care planning with active symptom control' },
    ],
    worked:[
      { lbl:'Open the door gently', txt:'"I\u2019m really glad you\u2019ve raised this, and it took courage. There\u2019s no rush \u2014 we can talk as much or as little today as you want, and come back to it. Can you tell me what frightened you most about that admission?"' },
      { lbl:'Name the cycle', txt:'"What you describe \u2014 not catching your breath, then the panic making it worse \u2014 is a real and exhausting cycle, and it\u2019s not weakness. The good news is there\u2019s a lot we can do to break it and give you back some control."' },
      { lbl:'Clarify the "machines"', txt:'"Let\u2019s be clear about what you don\u2019t want, because \u2018machines\u2019 covers different things. Intensive care with a breathing tube \u2014 it sounds like that\u2019s not what you\u2019d want, and we can record that. But there\u2019s a gentler mask-based support, used in flares, that can help and is easily stopped \u2014 that\u2019s different. Shall we talk through each?"' },
      { lbl:'Address the suffocation fear', txt:'"Your biggest fear is suffocating \u2014 let me reassure you: we have very effective ways to ease the feeling of breathlessness, including small doses of medicine that calm both the breathing sensation and the panic. The aim is that you are comfortable. You will not be left to struggle."' },
      { lbl:'Practical control + palliative', txt:'"Some things help straight away \u2014 a handheld fan to your face, breathing and positioning techniques, pacing yourself. I\u2019d also like to involve the supportive-care team \u2014 they\u2019re not just for the very end; they\u2019re experts in exactly this, and in supporting you and your family."' },
      { lbl:'Plan + carer + safety-net', txt:'"I\u2019ll write down your wishes so any doctor who sees you knows them, and we\u2019ll keep reviewing them \u2014 nothing is fixed. How is your wife coping? Let\u2019s support her too. And we\u2019ll set up a clear plan for what to do in a crisis so you\u2019re never left not knowing."' },
    ],
    learning:'A patient with advanced COPD (MRC dyspnoea 5, home oxygen, recurrent admissions) who, after a frightening admission, raises "what happens from here" is opening the door to ADVANCE CARE PLANNING, and the skill is to seize it sensitively \u2014 exploring his understanding, values, fears (suffocation, machines, being a burden) and wishes at his pace and with permission, not as an imposed checklist. Explore the ceiling-of-care/escalation gently: hospital vs home, intensive care/invasive ventilation, NON-INVASIVE ventilation (often appropriate and reversible in exacerbations \u2014 clarify, because "no machines" frequently conflates NIV with ITU), and resuscitation status framed around what CPR can realistically achieve in advanced COPD; document a values-based, revisitable escalation plan (e.g. ReSPECT/DNACPR) that travels with him, never coerced. Centrally, name and address the BREATHLESSNESS\u2013ANXIETY cycle, which amplifies suffering and drives crises: non-pharmacological measures (handheld FAN to the face, pursed-lip/controlled breathing, forward-lean positioning, pacing/energy conservation, CBT-based anxiety support, a written crisis plan) give agency and reduce panic, while for REFRACTORY breathlessness low-dose OPIOIDS (carefully titrated) ease the sensation of breathlessness and benzodiazepines can help panic in selected cases \u2014 alongside optimised COPD therapy/oxygen and treatment of reversible factors. Involve SUPPORTIVE/PALLIATIVE care early (it is not only for cancer or the final days) and support the CARER. Communicate with honesty and compassion held together \u2014 validate both fears, reassure he will be kept comfortable and not abandoned, clarify NIV/ITU/CPR, avoid both false reassurance and fatalism, pace the discussion and offer to continue. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE NG115 COPD \u00b7 advance care planning / ReSPECT \u00b7 chronic breathlessness management \u00b7 supportive & palliative care in non-malignant disease',
      points:[
        { h:'Initiate ACP sensitively', t:'Advanced COPD with recurrent admissions warrants advance care planning. Explore understanding, values, fears and wishes at the patient\u2019s pace and with permission \u2014 not an imposed checklist; revisit over time.' },
        { h:'Ceiling of care', t:'Discuss hospital vs home, ITU/invasive ventilation, NIV (often appropriate/reversible in exacerbations), and resuscitation. Clarify that "no machines" may conflate NIV with ITU/CPR. Document a values-based escalation plan (ReSPECT/DNACPR), never coerced.' },
        { h:'Breathlessness\u2013anxiety cycle', t:'Breathlessness and panic reinforce each other and drive crises/admissions. Name and normalise it; giving control strategies is therapeutic.' },
        { h:'Non-pharmacological measures', t:'Handheld fan to the face, pursed-lip/controlled breathing, forward-lean positioning, pacing/energy conservation, CBT-based anxiety support, written crisis plan.' },
        { h:'Pharmacological measures', t:'For refractory breathlessness, low-dose opioids (titrated) reduce the sensation; benzodiazepines for breathlessness-related panic in selected cases. Optimise COPD therapy/oxygen; treat reversible factors.' },
        { h:'Palliative care & carer', t:'Involve supportive/palliative care early in advanced non-malignant disease for symptom control, planning and carer support. Address the carer\u2019s needs.' },
        { h:'Communication', t:'Hold honesty and compassion together; validate both fears; reassure comfort and non-abandonment; clarify NIV/ITU/CPR; avoid false reassurance and fatalism; pace and continue over visits.' },
        { h:'Safety-net & follow-up', t:'Document and share the care/escalation plan; arrange symptom-control and community/palliative involvement; crisis plan; carer support; review. No cancer pathway applies.' }
      ]
    }
  };

  /* ============ 191. PHONE — Breathless on the phone with known COPD: flare vs something new (PE, HF) ============ */
  const c191 = {
    id:'copd-phone-breathless', title:'"I\u2019ve got COPD and I\u2019m more breathless \u2014 it\u2019s just another flare, can you sort it over the phone?"', type:'telephone', duration:12,
    meta:{ age:69, sex:'F', setting:'Telephone consultation \u2014 increased breathlessness in known COPD.', system:'Respiratory / Urgent care \u2014 telephone triage: COPD flare vs PE / heart failure / other' },
    brief:'Mrs Ivy Marchetti, 69, known COPD, rings because she is more breathless. She assumes it is "just another flare" and wants a phone prescription. The examinable task is TELEPHONE TRIAGE that does NOT anchor on "COPD flare": take a structured history that actively distinguishes an infective/typical exacerbation from SOMETHING NEW \u2014 PULMONARY EMBOLISM (sudden onset, PLEURITIC chest pain, haemoptysis, unilateral calf swelling, immobility/recent travel/surgery, tachycardia), HEART FAILURE (orthopnoea, PND, ankle oedema, weight gain), PNEUMONIA (fever, focal symptoms, confusion), PNEUMOTHORAX (sudden, unilateral), and lung cancer (haemoptysis, weight loss \u2014 NG12). On directed history concerning features emerge (it came on suddenly, there\u2019s a sharp pain on breathing in, one calf is swollen, and she\u2019s had little exercise since a long coach trip) \u2014 a PE picture \u2014 which mandates urgent face-to-face assessment/admission, NOT a phoned-in rescue pack. The skill is structured remote assessment, recognising when a "flare" is not a flare, safe disposition and safety-netting.',
    script:{
      opening:'"Hello doctor, sorry to trouble you. You know I\u2019ve got the COPD \u2014 well I\u2019m more short of breath again. I expect it\u2019s just another flare-up. Could you call me in some of those steroids and antibiotics so I don\u2019t have to come down? I\u2019m a bit wiped out to be traipsing in."',
      facts:[
        { topic:'Don\u2019t anchor on "just a flare"', text:'CORE \u2014 the anchoring trap is accepting the patient\u2019s "it\u2019s just my COPD" and phoning a rescue pack. A known COPD patient can develop a NEW, dangerous cause of breathlessness. Telephone triage must take a STRUCTURED history that actively asks the discriminating questions, not just confirm the expected diagnosis.' },
        { topic:'Distinguish an exacerbation from a PE', text:'PULMONARY EMBOLISM red flags to ask about: SUDDEN onset (vs the gradual build of an infective flare), PLEURITIC chest pain (sharp, worse on inspiration), HAEMOPTYSIS, unilateral CALF pain/swelling (DVT), and risk factors (immobility, long travel, recent surgery, malignancy, prior VTE). Tachycardia and disproportionate breathlessness with a clear-ish chest favour PE. Her sudden onset, pleuritic pain, swollen calf and recent long coach journey are a PE picture \u2014 this is not a flare.' },
        { topic:'And from heart failure / pneumonia / pneumothorax', text:'Screen the other "not a flare" causes: HEART FAILURE (orthopnoea \u2014 breathless lying flat, paroxysmal nocturnal dyspnoea, ankle oedema, weight gain, known cardiac disease), PNEUMONIA (fever, productive cough, focal/pleuritic pain, confusion in the elderly), PNEUMOTHORAX (sudden unilateral breathlessness/pain), arrhythmia, and lung cancer (haemoptysis, weight loss \u2014 NG12). Each changes management away from a rescue pack.' },
        { topic:'Telephone-triage limits & safe disposition', text:'On the phone you can take a careful history, gauge severity (can she speak in sentences? exhaustion? confusion?), and DECIDE DISPOSITION \u2014 but you cannot examine, measure sats or do an ECG/D-dimer. A PE picture (or any concerning "not a flare" feature, or significant severity) mandates URGENT FACE-TO-FACE assessment/admission \u2014 NOT a phoned-in prescription. For a clear-cut mild infective flare with no red flags, remote management with a rescue pack and safety-netting may be appropriate, but only after the red-flag screen is negative.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 her "just call it in, I\u2019m too wiped out to come" is convenience plus exhaustion plus minimisation; she genuinely believes it is the usual flare and does not want the hassle of attending. The skill is to take the breathlessness seriously, ask the discriminating questions despite her framing, and \u2014 when red flags emerge \u2014 explain clearly and kindly why she must be seen urgently rather than colluding with the phone-prescription request.' },
        { topic:'What she needs', text:'Officially: a phoned-in rescue pack. What she needs: structured telephone triage that screens PE/heart failure/pneumonia/pneumothorax/cancer rather than anchoring on "flare"; recognition of the PE red flags; urgent face-to-face assessment/admission (not a phone prescription); clear safety-netting and arranged transport \u2014 and, had it truly been a simple flare, appropriate remote management only after a negative red-flag screen.' },
      ],
      ice:{
        ideas:'It\u2019s "just another COPD flare-up" treatable with a phoned-in rescue pack.',
        concerns:'HIDDEN AGENDA \u2014 exhaustion and not wanting the hassle of attending; minimising the breathlessness; assumes it\u2019s the usual.',
        expectations:'Steroids and antibiotics called in to avoid coming in. What she needs: a structured red-flag screen, recognition of the PE picture, and urgent face-to-face assessment \u2014 not a phone prescription.'
      },
      cues:['Known COPD + "more breathless, just a flare, call it in" \u2014 don\u2019t anchor; structured triage to distinguish flare from PE/HF/pneumonia/pneumothorax.','SUDDEN onset + pleuritic chest pain + unilateral calf swelling + recent long coach trip \u2014 a PE picture; not a flare, needs urgent face-to-face/admission.','"I\u2019m too wiped out to come in" \u2014 exhaustion/minimisation; ask the discriminating questions anyway and explain kindly why she must be seen.']
    },
    checkpoints:[
      { dom:'tasks', text:'Does NOT anchor on "just a flare" \u2014 takes a STRUCTURED telephone history that actively screens for a new cause of breathlessness rather than confirming the expected COPD exacerbation' },
      { dom:'tasks', text:'Screens PULMONARY EMBOLISM red flags (sudden onset, pleuritic chest pain, haemoptysis, unilateral calf swelling, immobility/long travel/surgery/prior VTE) and recognises her picture as a likely PE' },
      { dom:'tasks', text:'Screens the other "not a flare" causes \u2014 heart failure (orthopnoea/PND/oedema), pneumonia (fever/focal/confusion), pneumothorax (sudden unilateral), arrhythmia, and lung cancer (haemoptysis/weight loss, NG12)' },
      { dom:'tasks', text:'Gauges severity remotely (speech in sentences, exhaustion, confusion) and recognises the LIMITS of telephone assessment \u2014 cannot examine, measure sats or do ECG/D-dimer' },
      { dom:'tasks', text:'Reaches a SAFE disposition: a PE picture / concerning feature / significant severity \u2192 URGENT face-to-face assessment or admission, NOT a phoned-in rescue pack (and would only manage remotely a clear mild flare after a negative red-flag screen)' },
      { dom:'rto',   text:'Reads the "too wiped out to come / just call it in" as exhaustion and minimisation, asks the discriminating questions despite her framing, and does NOT collude with the phone-prescription request' },
      { dom:'rto',   text:'Explains clearly and kindly over the phone why she must be seen urgently, and brings a reluctant patient to agree, arranging the route to assessment' },
      { dom:'gs',    text:'Safety-nets robustly: explicit deterioration red flags and 999 advice (worsening breathlessness, chest pain, collapse, coughing blood), confirms transport/route to urgent assessment, documents the triage and decision, and arranges follow-up \u2014 urgent assessment for a possible PE, not a phoned-in prescription' },
    ],
    worked:[
      { lbl:'Take it seriously, ask precisely', txt:'"I\u2019m glad you rang, and I do want to help \u2014 but before I assume it\u2019s the usual flare, let me ask some specific questions, because being more breathless can have a few different causes. Did this come on gradually over days, or more suddenly?"' },
      { lbl:'Screen the PE picture', txt:'"Any sharp pain when you breathe in? \u2026 Yes. Have you coughed up any blood? Is one of your calves swollen or sore? \u2026 The left one. And have you been less active lately \u2014 any long journeys? \u2026 A coach trip last week. Thank you \u2014 those answers matter a lot."' },
      { lbl:'Explain honestly why not a flare', txt:'"I have to be straight with you, Ivy. Coming on suddenly, with a sharp pain on breathing and a swollen calf after a long trip, makes me worried this isn\u2019t your usual chest flare \u2014 it could be a clot on the lung. That\u2019s not something I can safely treat over the phone with steroids."' },
      { lbl:'Safe disposition', txt:'"You do need to be seen urgently today and examined, with a tracing of your heart and a blood test \u2014 most likely at hospital. I know you\u2019re exhausted and didn\u2019t want to come in, but this is exactly the situation where being seen quickly really matters."' },
      { lbl:'Arrange + don\u2019t collude', txt:'"I\u2019m going to arrange that now rather than call in a prescription \u2014 I\u2019ll sort how you get there. Is there someone who can be with you? If at any point the breathlessness suddenly worsens, you get severe chest pain, or you feel faint, call 999 straight away."' },
      { lbl:'Safety-net + document', txt:'"To be clear on warning signs while we arrange this: sudden worse breathlessness, chest pain, coughing blood, or feeling like you might pass out \u2014 999. I\u2019ll document all this and make sure you\u2019re expected. We\u2019ll get to the bottom of it today."' },
    ],
    learning:'Telephone triage of "more breathless" in a known COPD patient must NOT anchor on "just another flare". A structured history actively distinguishes a typical infective exacerbation (gradual build, increased purulent sputum) from SOMETHING NEW: PULMONARY EMBOLISM (sudden onset, pleuritic chest pain, haemoptysis, unilateral calf swelling, immobility/long travel/recent surgery/prior VTE, tachycardia, breathlessness disproportionate to a clear chest), HEART FAILURE (orthopnoea, paroxysmal nocturnal dyspnoea, ankle oedema, weight gain), PNEUMONIA (fever, focal symptoms, confusion in the elderly), PNEUMOTHORAX (sudden unilateral breathlessness/pain), arrhythmia, and lung cancer (haemoptysis, weight loss \u2014 NG12). Telephone assessment can take a careful history and gauge severity (speech in sentences, exhaustion, confusion) but cannot examine, measure saturations or perform an ECG/D-dimer, so any PE picture, concerning "not a flare" feature, or significant severity mandates URGENT face-to-face assessment or admission rather than a phoned-in rescue pack; only a clear-cut mild infective flare with a negative red-flag screen is suitable for remote management. The hidden agenda \u2014 exhaustion, inconvenience and minimisation ("just call it in, I\u2019m too wiped out to come") \u2014 must not deflect the discriminating questions; when red flags emerge (here sudden onset, pleuritic pain, a swollen calf and a recent long coach journey \u2014 a PE picture), explain clearly and kindly why she must be seen urgently, arrange the route to assessment, refuse to collude with the phone-prescription request, and safety-net robustly with explicit 999 red flags.',
    knowledge:{
      guideline:'NICE NG115 COPD \u00b7 PE (NG158) / DVT risk \u00b7 heart-failure & pneumonia recognition \u00b7 remote/telephone triage safety',
      points:[
        { h:'Don\u2019t anchor', t:'A known COPD patient with new breathlessness may have a new, dangerous cause. Take a structured history that screens alternatives rather than confirming the expected flare.' },
        { h:'PE red flags', t:'Sudden onset, pleuritic chest pain, haemoptysis, unilateral calf pain/swelling, immobility/long travel/recent surgery/prior VTE/malignancy, tachycardia, breathlessness out of proportion to chest findings.' },
        { h:'Other "not a flare" causes', t:'Heart failure (orthopnoea, PND, oedema, weight gain), pneumonia (fever, focal symptoms, confusion), pneumothorax (sudden unilateral), arrhythmia, lung cancer (haemoptysis, weight loss \u2192 NG12).' },
        { h:'Telephone limits', t:'Can take history and gauge severity (sentences, exhaustion, confusion) but cannot examine, measure sats or do ECG/D-dimer. This shapes disposition.' },
        { h:'Safe disposition', t:'PE picture / concerning feature / significant severity \u2192 urgent face-to-face assessment or admission, not a phoned-in rescue pack. Remote management only for a clear mild flare with a negative red-flag screen.' },
        { h:'Read the agenda', t:'Exhaustion, inconvenience and minimisation drive "just call it in". Ask discriminating questions regardless; explain kindly why urgent assessment is needed; do not collude.' },
        { h:'Never do', t:'Never phone in a rescue pack on the patient\u2019s "it\u2019s just my COPD"; never skip the PE/HF/pneumonia screen; never ignore sudden onset/pleuritic pain/calf swelling; never let exhaustion deflect urgent assessment.' },
        { h:'Safety-net & follow-up', t:'Explicit 999 red flags (sudden worse breathlessness, chest pain, collapse, haemoptysis); confirm transport/route to assessment; document the triage and decision; arrange follow-up.' }
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
        pmh: ['Moderate-severe COPD (FEV1 ~45%); recurrent exacerbations', '\u26a0 Current smoker ~40 pack-years', '4 days: \u2191 breathlessness, \u2191 cough, GREEN purulent sputum; no fever/pleuritic pain/haemoptysis; talking in sentences'],
        meds: ['LABA/LAMA inhaler', 'Salbutamol PRN'],
        allergy: 'NKDA',
        recent: '"Just give me the usual steroids and antibiotics \u2014 don\u2019t start on about the smoking."',
        reason: 'Video consultation \u2014 COPD exacerbation.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Grade + exclude', d:'Severity (sentences/sats), exclude pneumonia/PE/HF/pneumothorax/cancer before the rescue pack.' },
        { t:'2\u20135',  h:'Treat correctly', d:'\u2191 bronchodilator; prednisolone 30 mg \u00d75 days; antibiotic given purulence + volume; optimise inhalers + rescue plan.' },
        { t:'5\u20137',  h:'NG12 lung awareness', d:'Smoker: CXR if non-resolution/haemoptysis/weight loss; don\u2019t let rescue packs mask a tumour.' },
        { t:'7\u201310', h:'Cessation offer (VBA)', d:'Ask permission; advise it helps even now; offer combo NRT/varenicline/vaping + service. No lecture.' },
        { t:'10\u201312',h:'Safety-net', d:'Worse breathlessness/drowsy/fever/haemoptysis \u2192 urgent/999; review after flare; cessation offer stays open.' }
      ],
      wordPics: {
        fail: 'Phones in the usual steroids + antibiotics without grading severity or excluding mimics; either ignores smoking or lectures; misses NG12 lung awareness.',
        pass: 'Assesses severity, treats the flare correctly (antibiotic justified by purulence), and makes a brief cessation offer.',
        exc:  'Grades severity and excludes pneumonia/PE/HF/cancer, treats correctly (prednisolone 5 days + appropriate antibiotic + inhaler/rescue plan), keeps NG12 lung awareness as a smoker, delivers a respectful VBA cessation offer with pharmacotherapy/referral addressing fatalism, and safety-nets \u2014 earning trust, not colluding or hectoring.'
      },
      avoid: [
        { dont:'"Same as last time \u2014 I\u2019ll call in your steroids and antibiotics, off you go."', instead:'"Let me quickly check a few things first \u2014 sudden onset, chest pain, fever, coughing blood \u2014 so I treat the right problem."', why:'Reflexive rescue packs without grading/excluding mimics can miss pneumonia, PE, HF or lung cancer.' },
        { dont:'"You really must stop smoking \u2014 it\u2019s killing you, you know that."', instead:'"Can I mention it just once, not to nag? Stopping is the biggest thing for your lungs and helps even now \u2014 and I can make it easier whenever you\u2019re ready."', why:'Lecturing/moralising entrenches defensiveness; VBA as a respectful offer is more effective.' },
        { dont:'(Ignoring cancer risk) treating every flare as routine in a heavy smoker.', instead:'"Because you smoke, if this doesn\u2019t settle or you cough up blood, I\u2019ll arrange a chest X-ray."', why:'Repeated rescue packs can mask an evolving lung cancer in a smoker.' }
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
        { t:'5\u20137',  h:'Non-drug optimisation', d:'Pulmonary rehab (MRC \u22653), vaccines, cessation, self-management/rescue plan \u2014 often most impactful.' },
        { t:'7\u201310', h:'Escalation logic', d:'Persistent symptoms/exacerbations on LABA+LAMA \u2192 consider ICS (triple), guided by eosinophils/asthma features.' },
        { t:'10\u201312',h:'Trade-off + review', d:'ICS cuts exacerbations vs pneumonia risk; combination inhaler; review benefit; NG12 lung if red flags.' }
      ],
      wordPics: {
        fail: 'Reflexively prescribes a triple/"stronger" inhaler without checking technique, adherence or offering pulmonary rehab; no eosinophil/pneumonia consideration.',
        pass: 'Checks technique/adherence, optimises non-drug care, and escalates to triple therapy with reasoning.',
        exc:  'Validates frustration, checks inhaler technique (teach-back) and adherence/diagnosis/contributors, optimises pulmonary rehab/vaccines/cessation/self-management, then escalates to ICS with eosinophil/asthma-feature logic and honest pneumonia-risk trade-off and review \u2014 not "stronger by default".'
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
        { t:'10\u201312',h:'Carer + safety-net', d:'Support the carer; crisis plan; share/document wishes; review \u2014 nothing fixed.' }
      ],
      wordPics: {
        fail: 'Avoids the conversation or imposes a DNACPR checklist; misses the breathlessness\u2013anxiety cycle and symptom-control options; doesn\u2019t involve palliative care or support the carer.',
        pass: 'Initiates ACP sensitively, addresses breathlessness with non-drug + opioid measures, and discusses ceiling of care.',
        exc:  'Sensitively opens advance care planning at his pace, clarifies NIV vs ITU vs CPR and documents values-based wishes without coercion, names and manages the breathlessness\u2013anxiety cycle (fan/breathing/positioning + low-dose opioids/anxiolytic), involves palliative care early, supports the carer, and holds honesty with compassion plus a crisis plan.'
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
        { t:'5\u20137',  h:'Screen HF/pneumonia/PTX', d:'Orthopnoea/PND/oedema; fever/focal/confusion; sudden unilateral; haemoptysis/weight loss (NG12).' },
        { t:'7\u20139',  h:'Safe disposition', d:'Telephone can\u2019t examine/sats/ECG/D-dimer \u2192 PE picture needs urgent face-to-face/admission, not a phone script.' },
        { t:'9\u201312', h:'Explain + safety-net', d:'Kindly explain why she must be seen; arrange transport; 999 red flags (worse breathlessness/chest pain/collapse).' }
      ],
      wordPics: {
        fail: 'Phones in steroids/antibiotics on "it\u2019s just my COPD"; never screens for PE/HF; misses the sudden onset/pleuritic pain/swollen calf; colludes with avoidance.',
        pass: 'Screens the red flags, recognises a likely PE, and arranges urgent face-to-face assessment with safety-netting.',
        exc:  'Refuses to anchor on "flare", takes a structured history screening PE/HF/pneumonia/pneumothorax/cancer, recognises the PE picture, respects telephone limits, arranges urgent face-to-face/admission rather than a phone prescription, explains kindly without colluding, and safety-nets with 999 red flags and transport.'
      },
      avoid: [
        { dont:'"It\u2019s your COPD again \u2014 I\u2019ll call in your usual steroids and antibiotics."', instead:'"Before I assume that, did it come on suddenly? Any sharp pain breathing in, or a swollen calf?"', why:'Anchoring on the patient\u2019s "just a flare" and phoning a rescue pack can miss a life-threatening PE.' },
        { dont:'"If you\u2019re too tired to come in, we\u2019ll manage it over the phone this time."', instead:'"I know you\u2019re exhausted, but with these features you need to be seen and examined urgently \u2014 I\u2019ll arrange how you get there."', why:'Colluding with avoidance when red flags are present is unsafe.' },
        { dont:'(No 999 advice) ending after arranging a routine review.', instead:'"While we arrange this \u2014 sudden worse breathlessness, chest pain, coughing blood or feeling faint means call 999."', why:'Omitting explicit emergency safety-netting for a possible PE is dangerous.' }
      ]
    }

  });

})();
