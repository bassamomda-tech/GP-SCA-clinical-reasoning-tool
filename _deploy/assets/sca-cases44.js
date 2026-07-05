/* ============================================================
   Reasoning GP — Case Library batch 44:
   "Gut feelings — settle it, or escalate it?"
   Four ORIGINAL GI cases. Each turns on knowing when a gut
   symptom is safely managed in primary care and when it crosses
   a NICE NG12 (or acute-admission) threshold — and saying so.
   Three carry an explicit NG12 2WW / direct-access pathway; the
   UC-flare case is acute-admission territory (Truelove & Witts)
   with CRC-surveillance noted honestly, not a forced 2WW.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases43.js.
   ============================================================ */

(function(){

  /* ============ 169. F2F — Reflux that won't settle: the PPI exit strategy (NG12 upper GI) ============ */
  const c169 = {
    id:'reflux-ppi-exit', title:'"I\u2019ve been on these omeprazole for years \u2014 I just want a repeat, not a lecture"', type:'video', duration:12,
    meta:{ age:57, sex:'M', setting:'Video consultation \u2014 a long-standing PPI user wanting a repeat.', system:'GI \u2014 reflux/dyspepsia, PPI stewardship & the upper-GI 2WW (NG12)' },
    brief:'Mr Trevor Nash, 57, lorry driver, has been on omeprazole 20 mg for "about eight years" for reflux, started by another GP and repeated ever since. He has booked a medication review reluctantly \u2014 he just wants the prescription renewed without fuss. The examinable task is twofold: (1) PPI STEWARDSHIP \u2014 review whether indefinite PPI is justified, address the desire to step down/stop where appropriate, lifestyle, and H. pylori test-and-treat; and (2) the SAFETY layer \u2014 before treating chronic reflux as benign, actively screen for the NICE NG12 upper-GI ALARM features (dysphagia at any age; weight loss, upper abdominal pain/reflux/dyspepsia with weight loss in those 55+; etc.) and act on them. On directed history a red flag emerges: a few weeks of food "sticking" on swallowing and some unintentional weight loss \u2014 which converts a routine repeat into an urgent 2WW OGD referral. The skill is to not rubber-stamp a long-term repeat, and to catch the alarm symptom the patient is minimising.',
    script:{
      opening:'"Morning doc. Look, I know it\u2019s a review, but honestly I just need my omeprazole renewed \u2014 I\u2019ve been on it for years, it works, I don\u2019t want a big song and dance about it. Can we just sort the repeat so I can get back on the road? I\u2019ve got a delivery window."',
      facts:[
        { topic:'Don\u2019t rubber-stamp the repeat', text:'An 8-year PPI on repeat is a review opportunity, not a rubber stamp. Establish the original indication, whether symptoms still justify it, and whether a step-down or stop-and-see trial is appropriate. Indefinite PPIs carry real considerations (hypomagnesaemia, B12, osteoporosis/fracture risk, possible enteric infection, rebound on stopping) \u2014 but the FIRST duty is to exclude that the long-standing "reflux" is masking something sinister.' },
        { topic:'Screen the NG12 upper-GI alarm features', text:'CRITICAL \u2014 before accepting chronic reflux as benign, actively screen for alarm symptoms: DYSPHAGIA (food sticking), unintentional WEIGHT LOSS, upper abdominal pain/mass, persistent vomiting, GI bleeding (haematemesis/melaena), iron-deficiency anaemia, and worsening/treatment-resistant symptoms. These are the features that change everything \u2014 and patients frequently downplay them.' },
        { topic:'The NG12 thresholds', text:'NICE NG12: OFFER an urgent direct-access upper GI endoscopy (2-week-wait) to assess for oesophageal/stomach cancer in people with DYSPHAGIA (at ANY age), OR aged 55+ with WEIGHT LOSS plus upper abdominal pain, reflux or dyspepsia. CONSIDER non-urgent direct-access OGD in people with treatment-resistant dyspepsia, or upper abdominal pain with low Hb, or raised platelets with nausea/vomiting/weight loss/reflux/dyspepsia/upper abdominal pain. Mr Nash has new dysphagia + weight loss \u2192 urgent 2WW OGD, regardless of the repeat he came for.' },
        { topic:'The standard reflux pathway (when no alarm)', text:'For uncomplicated reflux/dyspepsia without alarm features: lifestyle (weight, alcohol, smoking, late meals, trigger foods), review/step-down the PPI to the lowest effective dose or PRN, and offer H. PYLORI test-and-treat (test off PPI where possible, ideally 2 weeks washout). Annual review of long-term PPIs is good practice. None of this applies until alarm symptoms are excluded.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 the "just renew it, no lecture, I\u2019ve a delivery window" is a busy, self-reliant man avoiding scrutiny; he has noticed the food sticking and the weight loss but is minimising them (fear, or not wanting time off work that he cannot afford). The wife may have nudged him. The skill is to gently insist on the review, elicit the alarm features he is downplaying, and convey the urgent referral without panicking him or dismissing his time pressures.' },
        { topic:'What he needs', text:'Officially: a no-questions PPI repeat. What he needs: a proper review that elicits the dysphagia and weight loss he is minimising, recognises these as NG12 alarm features mandating an urgent 2WW OGD, explains why a long-standing repeat cannot be rubber-stamped, and (had there been no alarm) addressed PPI step-down, lifestyle and H. pylori \u2014 honest about the seriousness without dismissing his work pressures.' },
      ],
      ice:{
        ideas:'The omeprazole works and has for years; this is a formality \u2014 just renew it.',
        concerns:'HIDDEN AGENDA \u2014 a busy, self-reliant man minimising new food-sticking and weight loss (fear, and can\u2019t afford time off); wants to avoid scrutiny and get back on the road.',
        expectations:'A quick repeat with "no song and dance". What he needs: the alarm symptoms elicited, recognition that dysphagia + weight loss = urgent 2WW OGD, and an honest explanation \u2014 not a rubber-stamped repeat.'
      },
      cues:['8-year PPI on repeat, never reviewed \u2014 a review opportunity, not a rubber stamp; screen alarm features before renewing.','New dysphagia (food "sticking") + unintentional weight loss \u2014 NG12 upper-GI alarm features; dysphagia at ANY age = urgent 2WW OGD.','"Just renew it, no lecture, I\u2019ve a delivery window" \u2014 minimisation under time pressure; elicit the downplayed red flags, don\u2019t collude.']
    },
    checkpoints:[
      { dom:'tasks', text:'Treats the long-term PPI repeat as a REVIEW, not a rubber stamp \u2014 establishes the original indication, current symptom control, and whether step-down/stop is appropriate \u2014 rather than simply renewing' },
      { dom:'tasks', text:'Actively SCREENS the NG12 upper-GI alarm features (dysphagia, weight loss, upper abdominal pain/mass, persistent vomiting, GI bleeding, anaemia, treatment resistance) rather than accepting chronic reflux as benign' },
      { dom:'tasks', text:'ELICITS the minimised dysphagia (food sticking) and unintentional weight loss \u2014 not allowing the patient\u2019s "just a repeat" framing or time pressure to suppress the history' },
      { dom:'tasks', text:'Applies NG12 correctly: dysphagia at ANY age (and 55+ with weight loss + dyspepsia/reflux) \u2192 urgent direct-access OGD (2-week-wait) for oesophago-gastric cancer \u2014 and acts on it now' },
      { dom:'tasks', text:'Knows the standard pathway for uncomplicated reflux (lifestyle, PPI step-down to lowest effective/PRN, H. pylori test-and-treat with washout, long-term PPI risks) and signals it would apply ONLY in the absence of alarm features' },
      { dom:'rto',   text:'Reads the "no lecture / delivery window" as minimisation under time pressure, surfaces any fear gently, and does NOT collude with the wish for a quick rubber-stamped repeat' },
      { dom:'rto',   text:'Conveys the urgent referral honestly without catastrophising \u2014 acknowledging his work pressures while being clear why this cannot wait, and checking understanding' },
      { dom:'gs',    text:'Safety-nets and follows up: makes the 2WW OGD referral promptly, explains the timeframe and what to expect, advises red flags warranting sooner help (complete dysphagia, vomiting blood, black stools), continues/maintains the PPI meanwhile appropriately, confirms attendance and arranges review \u2014 not a rubber-stamped repeat' },
    ],
    worked:[
      { lbl:'Reframe the review, kindly', txt:'"I hear you \u2014 you\u2019re busy and it works, and I\u2019m not here to give you a hard time. But you\u2019ve been on this eight years without a proper look, and a five-minute review now genuinely protects you. Bear with me on a couple of questions."' },
      { lbl:'Screen the alarm features', txt:'"Any food sticking or catching when you swallow? \u2026 A few weeks, you say. And your weight \u2014 any drop without trying? \u2026 Half a stone. Thank you for telling me, because that actually changes what I\u2019d advise today, and I\u2019m glad you came in."' },
      { lbl:'Be honest about why', txt:'"I want to be straight with you. Food sticking when you swallow, with some weight loss, isn\u2019t something I can put down to ordinary reflux \u2014 it\u2019s a symptom we always check with a camera test, urgently, to look at your gullet and stomach. I\u2019m not saying it\u2019s something serious, but we have to rule it out properly."' },
      { lbl:'Name the pathway', txt:'"So rather than just renewing your tablets, I\u2019m referring you on the urgent two-week pathway for a gastroscopy \u2014 a camera test. You\u2019ll be seen quickly. Keep taking the omeprazole for now; it won\u2019t hurt the test if you mention it."' },
      { lbl:'Hold the work worry', txt:'"I know time off is the last thing you want, and I\u2019ll write what you need for work. But your health comes before the delivery window on this one \u2014 and catching things early is exactly what keeps you working long-term."' },
      { lbl:'Safety-net + the PPI plan', txt:'"If you can\u2019t get food or fluids down at all, vomit blood, or your stools turn black, that\u2019s A&E. Once we have your result, we\u2019ll sort the longer-term plan for the omeprazole properly \u2014 most people don\u2019t need a high dose forever. I\u2019ll get the referral done today and follow it up with you."' },
    ],
    learning:'A long-standing PPI on repeat is a REVIEW opportunity, never a rubber stamp: establish the original indication, current control and whether step-down/stop is appropriate, and remember indefinite PPIs carry real considerations (hypomagnesaemia, B12, fracture risk, enteric infection, rebound). But the FIRST duty before treating chronic "reflux" as benign is to actively screen the NICE NG12 upper-GI ALARM features \u2014 dysphagia, unintentional weight loss, upper abdominal pain/mass, persistent vomiting, GI bleeding, iron-deficiency anaemia, treatment resistance \u2014 which patients frequently minimise. NG12 thresholds: offer an urgent direct-access OGD (2-week-wait) for oesophago-gastric cancer in people with DYSPHAGIA at ANY age, or aged 55+ with WEIGHT LOSS plus upper abdominal pain/reflux/dyspepsia; consider non-urgent OGD for treatment-resistant dyspepsia, upper abdominal pain with low Hb, or raised platelets with upper-GI symptoms. New dysphagia plus weight loss converts a routine repeat into an urgent 2WW OGD regardless of what the patient came for. Only in the ABSENCE of alarm features does the standard pathway apply: lifestyle, PPI step-down to lowest effective/PRN, and H. pylori test-and-treat (off PPI). The hidden agenda is a busy, self-reliant man minimising alarm symptoms under work pressure; the skill is to insist gently on the review, elicit the downplayed features, refer urgently with honesty (not panic), support his work needs, and safety-net.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer (upper GI) \u00b7 NICE CG184 dyspepsia/GORD \u00b7 PPI stewardship \u00b7 H. pylori test-and-treat',
      points:[
        { h:'Review, don\u2019t rubber-stamp', t:'A long-term PPI repeat warrants annual review: original indication, ongoing need, step-down to lowest effective dose or PRN, and the risks of indefinite PPI use (hypomagnesaemia, B12 deficiency, fracture risk, enteric infection, rebound acid hypersecretion on stopping).' },
        { h:'Alarm features to screen', t:'Dysphagia, unintentional weight loss, upper abdominal pain/mass, persistent vomiting, GI bleeding (haematemesis/melaena), iron-deficiency anaemia, and worsening/treatment-resistant symptoms. Patients commonly downplay these \u2014 ask directly.' },
        { h:'NG12 urgent OGD (2WW)', t:'Offer urgent direct-access endoscopy for oesophago-gastric cancer in people with dysphagia at any age, or aged 55+ with weight loss plus upper abdominal pain, reflux or dyspepsia.' },
        { h:'NG12 non-urgent OGD', t:'Consider non-urgent direct-access endoscopy in people with treatment-resistant dyspepsia; upper abdominal pain with low haemoglobin; or raised platelet count with nausea/vomiting/weight loss/reflux/dyspepsia/upper abdominal pain; and in those 55+ with treatment-resistant dyspepsia, or upper abdominal pain + reflux, or dyspepsia + raised platelets/nausea/vomiting.' },
        { h:'Standard reflux pathway', t:'Without alarm features: lifestyle (weight, alcohol, smoking, late/large meals, triggers), PPI step-down to lowest effective dose or PRN, and H. pylori test-and-treat \u2014 test off PPI (\u22652-week washout) and after antibiotics/bismuth washout, for accuracy.' },
        { h:'Continue PPI around endoscopy', t:'Maintain symptom control while awaiting OGD; note PPI use to the endoscopist (it can mask some findings) but do not delay an urgent referral to wash out.' },
        { h:'Never do', t:'Never renew a long-term PPI without review; never accept chronic reflux as benign without screening alarm features; never let a patient\u2019s time pressure suppress the dysphagia/weight-loss history; never miss that dysphagia at ANY age is an urgent 2WW trigger.' },
        { h:'Safety-net & follow-up', t:'Make the 2WW OGD referral; advise red flags (complete dysphagia, haematemesis, melaena) warranting emergency care; support work needs; review the result and then settle the long-term PPI plan.' }
      ]
    }
  };

  /* ============ 170. PHONE — UC flare: count the stools, decide today (acute severe colitis; CRC surveillance noted) ============ */
  const c170 = {
    id:'uc-flare-phone', title:'"I\u2019m going to the loo ten times a day with blood \u2014 can you just call something in?"', type:'telephone', duration:12,
    meta:{ age:29, sex:'F', setting:'Telephone consultation \u2014 a known UC patient flaring.', system:'GI \u2014 ulcerative colitis flare: severity triage & acute severe colitis' },
    brief:'Miss Aisha Rahman, 29, known ulcerative colitis (left-sided), usually well on mesalazine, rings on a Monday morning. Over five days she has deteriorated: now opening her bowels ~10 times a day with visible blood, getting up at night to go, with crampy abdominal pain, feeling feverish and exhausted. She wants a quick phone fix \u2014 "just call in some steroids" \u2014 and is reluctant to come in or go to hospital (work, childcare, hates being admitted). The examinable task is TELEPHONE TRIAGE of an IBD flare: objectively quantify severity (stool frequency, blood, nocturnal symptoms, systemic upset \u2014 the Truelove & Witts criteria for ACUTE SEVERE ULCERATIVE COLITIS), recognise that her picture (>6 bloody stools/day + systemic features) meets acute-severe thresholds requiring SAME-DAY assessment/admission (bloods incl. CRP, observations, not a phone steroid script), and bring a reluctant patient to safe care. Honest NG12 note: this is acute-admission territory, not a 2WW \u2014 though long-standing UC carries a colorectal-cancer surveillance need to mention for the future, not to invent an urgent cancer pathway today.',
    script:{
      opening:'"Hiya, sorry to bother you. My colitis has flared up \u2014 I\u2019m going to the toilet about ten times a day now and there\u2019s blood, and I\u2019m up in the night with it too. I\u2019m shattered and a bit shivery. Can you just call something in to the chemist \u2014 some steroids? I really can\u2019t come in, I\u2019ve got work and the little one, and I hate hospitals."',
      facts:[
        { topic:'Quantify severity objectively \u2014 don\u2019t eyeball it', text:'A UC flare must be SCORED, not guessed. The Truelove & Witts criteria for ACUTE SEVERE ulcerative colitis: \u22656 bloody stools per day PLUS at least one systemic feature \u2014 temperature >37.8\u00b0C, pulse >90, haemoglobin <105 g/L, or ESR/CRP raised. Ask precisely: stool frequency, how much blood, NOCTURNAL stools (a marker of activity), urgency/incontinence, abdominal pain/distension, fever, malaise. Her ~10 bloody stools/day, nocturnal symptoms, feverishness and exhaustion strongly suggest acute severe colitis.' },
        { topic:'Acute severe UC is an EMERGENCY', text:'Acute severe ulcerative colitis is a medical emergency with risk of toxic megacolon, perforation and venous thromboembolism; it needs SAME-DAY assessment \u2014 hospital admission for IV steroids, bloods (FBC, CRP, U&E, albumin), stool culture (exclude superimposed infection incl. C. difficile), abdominal X-ray if toxic dilatation suspected, and gastroenterology input \u2014 NOT a telephone prescription of oral steroids. Phoning in prednisolone for this picture would be a serious safety failure.' },
        { topic:'Red flags within the flare', text:'Escalate immediately for: severe abdominal pain/distension (toxic megacolon), high fever/rigors, signs of dehydration or shock (dizziness, low urine output), persistent vomiting, or marked tachycardia. Counsel that during a severe flare she is at increased VTE risk. The absence of these does not downgrade an acute-severe flare \u2014 it still needs same-day review.' },
        { topic:'What telephone triage CAN do', text:'On the phone you can: take an accurate severity history, check for danger signs, give clear safety-netting, and ARRANGE the right disposition \u2014 same-day hospital/acute medical or gastroenterology assessment via the IBD pathway (many have an IBD nurse advice line or rapid-access route). For a mild flare without systemic features you might step up therapy (e.g. optimise mesalazine, add topical/oral therapy per a shared-care plan) with close review \u2014 but only mild flares, and not blindly.' },
        { topic:'The surveillance note (honest, not invented)', text:'Long-standing colitis (especially extensive disease >8\u201310 years) raises colorectal-cancer risk and warrants enrolment in a COLONOSCOPIC SURVEILLANCE programme \u2014 worth confirming she is in one, as a future-care point. This is NOT an NG12 2-week-wait situation today: the acute flare is an admission/treatment issue. Per good practice, name the surveillance need without manufacturing an urgent cancer referral that does not apply.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 her "just call in steroids, I can\u2019t come in" is driven by real-life pressures (work, a young child, a hatred of hospitals from previous admissions) and minimisation of how unwell she is. She may be frightened of another admission or surgery. The skill is to validate those pressures, be honest that this flare is too severe for a phone fix, and bring her safely to assessment \u2014 problem-solving the childcare/work barriers rather than colluding with avoidance.' },
      ],
      ice:{
        ideas:'A flare she can ride out with a quick course of steroids called in to the pharmacy.',
        concerns:'HIDDEN AGENDA \u2014 work and childcare pressures, hatred of hospitals/previous admissions, and fear of surgery; minimising how unwell she is.',
        expectations:'A phoned-in steroid prescription and to stay home. What she needs: objective severity scoring, recognition of acute severe colitis, and same-day hospital assessment \u2014 not a phone script.'
      },
      cues:['~10 bloody stools/day + nocturnal stools + feverish + exhausted \u2014 meets Truelove & Witts acute-severe criteria; score it, don\u2019t eyeball.','Acute severe UC = emergency (toxic megacolon/perforation/VTE risk) \u2192 same-day admission for IV steroids + bloods, NOT a phoned-in oral steroid.','"Just call in steroids, I can\u2019t come in" \u2014 real-life pressures + avoidance; validate, problem-solve barriers, but don\u2019t collude with a phone fix.']
    },
    checkpoints:[
      { dom:'tasks', text:'Objectively QUANTIFIES flare severity \u2014 stool frequency, amount of blood, NOCTURNAL stools, urgency, abdominal pain, and systemic features (fever, malaise) \u2014 rather than accepting a vague "flare-up" and prescribing' },
      { dom:'tasks', text:'Recognises the Truelove & Witts ACUTE SEVERE criteria (\u22656 bloody stools/day + a systemic feature: temp >37.8, pulse >90, Hb <105, raised CRP/ESR) and that her picture meets them' },
      { dom:'tasks', text:'Knows acute severe UC is an EMERGENCY (toxic megacolon, perforation, VTE) requiring SAME-DAY assessment/admission for IV steroids, bloods (FBC/CRP/U&E/albumin), stool culture incl. C. difficile, and gastroenterology \u2014 NOT a phoned-in oral steroid' },
      { dom:'tasks', text:'Screens the in-flare red flags (severe pain/distension, high fever, dehydration/shock, vomiting, tachycardia) and advises on VTE risk \u2014 without downgrading an acute-severe flare that lacks them' },
      { dom:'tasks', text:'Uses telephone triage appropriately \u2014 arranges correct disposition via the acute/IBD pathway (or IBD nurse line) \u2014 and notes CRC colonoscopic surveillance as a future point WITHOUT inventing an urgent 2WW that does not apply today' },
      { dom:'rto',   text:'Validates the work/childcare pressures and hospital fear, problem-solves those barriers, and does NOT collude with the wish for a phone steroid fix' },
      { dom:'rto',   text:'Communicates the seriousness clearly and calmly over the phone, checks understanding, and brings a reluctant patient to agree to same-day assessment' },
      { dom:'gs',    text:'Safety-nets robustly: explicit deterioration red flags and when to call 999/go to A&E, confirms transport/route to assessment, documents the severity score and advice, and arranges follow-up \u2014 same-day care, never a phoned-in steroid for an acute severe flare' },
    ],
    worked:[
      { lbl:'Take an exact history', txt:'"I\u2019m really glad you rang. Let me get the detail so I make the right call: exactly how many times a day, and is there blood every time? \u2026 Are you getting up at night to go? \u2026 Any fever, and how\u2019s your energy? \u2026 Okay. Thank you \u2014 that gives me a clear picture."' },
      { lbl:'Name the severity honestly', txt:'"I have to be straight with you, Aisha. Ten times a day with blood, up at night, feverish and wiped out \u2014 that\u2019s not a mild flare we can settle with tablets over the phone. That\u2019s a severe flare, and it needs proper assessment today."' },
      { lbl:'Why not a phone script', txt:'"I know you want me to just call in steroids, and I understand why. But a flare this active can occasionally turn dangerous quickly, and the safe treatment is usually steroids into a vein plus blood tests and a proper look \u2014 which means being seen today, not a chemist prescription."' },
      { lbl:'Problem-solve the barriers', txt:'"Let\u2019s sort the practical bits together. Is there someone who can have the little one for a few hours? I\u2019ll ring ahead so you\u2019re expected and not sitting around. I\u2019ll also let your work know you need to be seen today if that helps."' },
      { lbl:'Safety-net hard', txt:'"Before then \u2014 if you get severe tummy pain or swelling, a high temperature with shakes, you feel faint, or you start vomiting, call 999. Keep your fluids up. And because flares raise the risk of clots, any calf pain or breathlessness, same thing \u2014 999."' },
      { lbl:'The future point', txt:'"Once you\u2019re over this, let\u2019s check you\u2019re booked into the bowel-camera surveillance that people with long-standing colitis should have \u2014 that\u2019s a separate, planned thing for the future, not today\u2019s problem. For now, let\u2019s get you seen and feeling better."' },
    ],
    learning:'A UC flare is SCORED, not eyeballed, and telephone triage must quantify it precisely: stool frequency, amount of blood, NOCTURNAL stools (a marker of active disease), urgency, abdominal pain and systemic upset. The Truelove & Witts criteria define ACUTE SEVERE ulcerative colitis \u2014 \u22656 bloody stools per day PLUS at least one systemic feature (temperature >37.8\u00b0C, pulse >90, haemoglobin <105 g/L, or raised CRP/ESR). A patient with ~10 bloody stools/day, nocturnal symptoms, fever and exhaustion meets these criteria, and acute severe UC is a medical EMERGENCY (toxic megacolon, perforation, VTE risk) demanding SAME-DAY assessment/admission for IV steroids, bloods (FBC, CRP, U&E, albumin), stool culture including C. difficile, and gastroenterology \u2014 NOT a telephone prescription of oral steroids, which would be a serious safety failure. Screen in-flare red flags (severe pain/distension, high fever, dehydration/shock, vomiting, tachycardia) and counsel on VTE risk, but do not downgrade an acute-severe flare that lacks them. Telephone triage\u2019s job is accurate severity assessment, danger-sign screening, clear safety-netting and correct disposition via the acute/IBD pathway. Long-standing extensive colitis warrants colonoscopic CRC surveillance \u2014 worth confirming as a future-care point, but this is acute-admission territory, NOT an NG12 2-week-wait today, and no urgent cancer pathway should be invented. The hidden agenda is real work/childcare pressure and hospital avoidance with minimisation; validate it, problem-solve the barriers, be honest the flare is too severe for a phone fix, and bring her safely to same-day care.',
    knowledge:{
      guideline:'Truelove & Witts criteria \u00b7 NICE NG130 ulcerative colitis \u00b7 acute severe UC pathway \u00b7 IBD CRC surveillance',
      points:[
        { h:'Score every flare', t:'Quantify stool frequency, blood, nocturnal stools, urgency, abdominal pain and systemic features. Don\u2019t treat a vague "flare" on the phone without objective severity assessment.' },
        { h:'Truelove & Witts (acute severe)', t:'Acute severe UC = \u22656 bloody stools/day PLUS \u22651 of: temperature >37.8\u00b0C, pulse >90/min, haemoglobin <105 g/L, ESR >30 (or raised CRP). Any of these with frequent bloody stools defines a severe flare.' },
        { h:'Acute severe UC = emergency', t:'Risk of toxic megacolon, perforation and VTE. Needs same-day admission for IV corticosteroids, bloods (FBC, CRP, U&E, albumin), stool culture incl. C. difficile, AXR if dilatation suspected, VTE prophylaxis and gastroenterology/surgical input \u2014 not oral steroids phoned to a pharmacy.' },
        { h:'In-flare red flags', t:'Severe abdominal pain/distension (toxic megacolon), high fever/rigors, dehydration/shock, persistent vomiting, marked tachycardia, or calf pain/breathlessness (VTE). Any \u2192 emergency (999/A&E).' },
        { h:'Mild flare (contrast)', t:'A mild flare without systemic features may be stepped up per a shared-care plan (optimise oral/topical mesalazine \u00b1 oral steroids) with close review and IBD-nurse support \u2014 but only when severity is genuinely mild and danger signs are absent.' },
        { h:'CRC surveillance (future point)', t:'Extensive/long-standing colitis (>8\u201310 years) increases colorectal-cancer risk; patients should be in a colonoscopic surveillance programme. This is planned future care \u2014 not an NG12 2-week-wait \u2014 and should not be conflated with the acute flare.' },
        { h:'Never do', t:'Never phone in oral steroids for an acute severe flare; never accept a vague flare history without scoring; never miss nocturnal/systemic features; never collude with hospital avoidance for a severe flare; never invent an urgent cancer pathway for an acute flare.' },
        { h:'Safety-net & follow-up', t:'Arrange same-day assessment via acute/IBD pathway; give explicit deterioration red flags and 999 advice; confirm transport and childcare/work barriers solved; document the score; follow up the outcome and confirm surveillance enrolment later.' }
      ]
    }
  };

  /* ============ 171. F2F — Rectal bleeding in an adult with a learning disability (adjusted consultation; NG12 colorectal) ============ */
  const c171 = {
    id:'rectal-bleed-learning-disability', title:'"He\u2019s been having blood when he goes \u2014 but he gets so anxious about the doctor\u2019s"', type:'video', duration:12,
    meta:{ age:52, sex:'M', setting:'Video consultation \u2014 a man with Down\u2019s syndrome attends with his support worker.', system:'GI / Health inequalities \u2014 adjusted consultation & the colorectal 2WW (NG12)' },
    brief:'Mr Danny Okafor, 52, has Down\u2019s syndrome and a moderate learning disability; he attends with his long-standing support worker, Maria. Over ~2 months there has been rectal bleeding (bright and sometimes mixed in stool), a change toward looser, more frequent stools, and he seems to have lost weight and become less interested in food. Danny is anxious in clinic and communicates in short phrases with Maria\u2019s help. The examinable task is the ADJUSTED CONSULTATION done well: communicate directly with Danny using accessible language and reasonable adjustments, assess CAPACITY for the specific decisions (Mental Capacity Act \u2014 presume capacity, support it, best-interests if lacking), AVOID DIAGNOSTIC OVERSHADOWING (not attributing physical symptoms to the learning disability or behaviour), and recognise that his symptoms cross NICE NG12 colorectal thresholds requiring FIT and an urgent suspected-cancer (2WW) referral \u2014 arranging it with the reasonable adjustments that make investigation actually happen.',
    script:{
      opening:'(Support worker Maria speaks; Danny sits anxiously, occasionally looking to her.) "Thanks for seeing us, doctor. Danny\u2019s support team asked me to bring him \u2014 he\u2019s been having blood when he goes to the toilet, for a couple of months now, and his pads have been looser. He\u2019s gone off his food and I think he\u2019s lost a bit of weight. He gets very anxious about appointments, so I hope it\u2019s okay that I\u2019m here to help. Danny, it\u2019s alright \u2014 the doctor\u2019s kind."',
      facts:[
        { topic:'Communicate WITH Danny, not just about him', text:'ADJUSTED CONSULTATION \u2014 address Danny directly, at his pace, in short plain sentences, checking understanding; use the support worker to facilitate, not replace, his voice. Offer reasonable adjustments (longer appointment, quiet room, easy-read information, a familiar person, avoiding jargon). This is a legal duty (Equality Act reasonable adjustments) and the core examined skill \u2014 not an optional courtesy.' },
        { topic:'Avoid diagnostic overshadowing', text:'CRITICAL ERROR TO AVOID \u2014 diagnostic overshadowing is attributing new physical symptoms to a person\u2019s learning disability or behaviour ("he\u2019s just anxious / it\u2019s part of his condition / he\u2019s always had funny bowels"). Rectal bleeding, change in bowel habit and weight loss are PHYSICAL symptoms that must be taken exactly as seriously as in anyone else \u2014 arguably more so, given the stark health inequalities and earlier mortality faced by people with learning disabilities (cf. LeDeR).' },
        { topic:'The NG12 colorectal thresholds', text:'His symptoms cross multiple NICE NG12 colorectal triggers: OFFER FIT (faecal immunochemical test) to guide referral; a FIT result \u226510 \u00b5g Hb/g warrants an urgent suspected-cancer (2-week-wait) referral. NG12 colorectal 2WW triggers include: aged 40+ with unexplained weight loss AND abdominal pain; aged 50+ with unexplained RECTAL BLEEDING; aged 60+ with change in bowel habit or iron-deficiency anaemia; and a rectal/abdominal mass. With rectal bleeding, change in bowel habit and weight loss at 52, he needs FIT and an urgent colorectal referral. Examine (abdomen, DRE if tolerated and consented) and check FBC/ferritin.' },
        { topic:'Mental Capacity Act \u2014 assess for the specific decision', text:'Assess CAPACITY for each decision (e.g. consenting to examination, to FIT, to referral/colonoscopy): presume capacity, give support to maximise it (accessible explanation, time), and assess the four elements (understand, retain, weigh, communicate). If Danny has capacity, his consent governs. If he lacks capacity for a specific decision, act in his BEST INTERESTS, consulting those who know him and any relevant others \u2014 documenting the process. Capacity is decision-specific and not assumed absent because of the learning disability.' },
        { topic:'Make the investigation actually happen', text:'Health inequality is often in the LOGISTICS. Arrange the referral with adjustments that enable it: flag the reasonable adjustments to the hospital, consider a hospital passport, plan for bowel prep and the procedure with support, pre-empt anxiety (desensitisation, familiar carer, possibly sedation), and ensure follow-up is actively tracked. A referral that the patient cannot navigate is not care \u2014 the GP\u2019s role is to make it accessible.' },
        { topic:'What is needed', text:'Officially: help with Danny\u2019s bleeding and the anxiety around appointments. What is needed: a respectful adjusted consultation centred on Danny; symptoms taken at face value (no diagnostic overshadowing); FIT, examination and bloods; an urgent NG12 colorectal 2WW referral with reasonable adjustments and capacity/best-interests handled correctly; and proactive follow-up so investigation actually happens.' },
      ],
      ice:{
        ideas:'(Support worker) Danny\u2019s had bleeding and looser stools for a couple of months and has gone off his food; the team wanted it checked. (Danny) anxious about the appointment itself.',
        concerns:'That Danny\u2019s anxiety/learning disability could lead to his physical symptoms being downplayed or to investigation being too frightening to complete; the team\u2019s worry that something is being missed.',
        expectations:'Help with the bleeding and a way through the appointments. What is needed: an adjusted consultation, symptoms taken seriously (no overshadowing), FIT + urgent NG12 colorectal 2WW with reasonable adjustments, and capacity handled per the MCA.'
      },
      cues:['Rectal bleeding + change in bowel habit + weight loss over 2 months at 52 \u2014 crosses NG12 colorectal triggers; FIT + urgent 2WW referral.','Man with Down\u2019s syndrome + learning disability, anxious, communicates via support worker \u2014 adjusted consultation, talk WITH Danny, reasonable adjustments.','Risk of diagnostic overshadowing ("just his anxiety / part of his condition") \u2014 take physical symptoms at face value; assess capacity per MCA for each decision.']
    },
    checkpoints:[
      { dom:'tasks', text:'Conducts an ADJUSTED CONSULTATION \u2014 communicates directly with Danny in accessible language at his pace, uses the support worker to facilitate not replace his voice, and offers reasonable adjustments (time, quiet space, easy-read, familiar person)' },
      { dom:'tasks', text:'Actively AVOIDS DIAGNOSTIC OVERSHADOWING \u2014 takes rectal bleeding, bowel-habit change and weight loss as physical symptoms warranting full assessment, not attributing them to the learning disability/anxiety' },
      { dom:'tasks', text:'Assesses CAPACITY per the Mental Capacity Act for the specific decisions (examination, FIT, referral) \u2014 presuming capacity, supporting it, and using best-interests with consultation if a specific decision-making capacity is lacking, documenting the process' },
      { dom:'tasks', text:'Applies NG12: OFFERS FIT (\u226510 \u00b5g Hb/g \u2192 2WW) and recognises the colorectal 2WW triggers (40+ weight loss + abdominal pain; 50+ rectal bleeding; 60+ bowel-habit change/IDA; mass) \u2014 arranging an urgent suspected-cancer colorectal referral, with examination (abdomen \u00b1 DRE if consented/tolerated) and FBC/ferritin' },
      { dom:'tasks', text:'Makes the referral ACCESSIBLE \u2014 flags reasonable adjustments to the hospital (hospital passport, longer slots, support for bowel prep/procedure, anxiety planning) and sets up proactive tracking so investigation actually happens' },
      { dom:'rto',   text:'Builds trust with an anxious patient \u2014 warm, unhurried, at Danny\u2019s level \u2014 and works respectfully in the triad with the support worker without talking over Danny' },
      { dom:'rto',   text:'Explains the plan in terms Danny and Maria can understand, checks understanding, and is honest about the seriousness without frightening' },
      { dom:'gs',    text:'Safety-nets and follows up: clear plan for FIT/bloods/referral with adjustments, what to watch for, who to contact, ensures the appointment is navigable and actively tracked, documents capacity and adjustments, and arranges review \u2014 health-equity in the logistics, not a referral that is set up to fail' },
    ],
    worked:[
      { lbl:'Centre Danny first', txt:'(Turning to Danny, gently, slowly.) "Hello Danny. I\u2019m really glad you came in today. Is it okay if I ask you a few questions, and Maria can help if you want? \u2026 You\u2019ve had some blood when you go to the toilet. That sounds worrying. Thank you for telling me \u2014 you did the right thing coming."' },
      { lbl:'Take symptoms at face value', txt:'(To both.) "I want to be clear \u2014 bleeding, looser bowels and going off your food are things I take seriously in anyone, and Danny is no different. I\u2019m not going to put this down to nerves; we need to find out what\u2019s causing it." ' },
      { lbl:'Support capacity & consent', txt:'"Danny, I\u2019d like to feel your tummy, and we can do a simple poo test at home. I\u2019ll explain each bit, and you can say stop any time. Is that okay with you? \u2026 Maria, you know Danny well \u2014 help me check he\u2019s understanding, and we\u2019ll go at his pace."' },
      { lbl:'Name the NG12 plan plainly', txt:'"Here\u2019s my plan. A poo test that looks for hidden blood, a blood test, and \u2014 because of the bleeding, the change and the weight \u2014 I\u2019m going to refer Danny to the bowel specialists urgently, to be seen within two weeks, to look properly with a camera test."' },
      { lbl:'Make it accessible', txt:'"I\u2019ll tell the hospital that Danny needs a bit more time, a familiar face with him, and easy-read information \u2014 and I\u2019ll note his hospital passport. Maria, let\u2019s think now about how we make the camera test manageable for him \u2014 preparation, support on the day, maybe some sedation."' },
      { lbl:'Safety-net + track it', txt:'"If there\u2019s a lot of blood, bad tummy pain, or Danny seems unwell, contact us straight away or go to A&E. I\u2019m going to keep an eye on this myself to make sure the appointment comes through and nobody falls through the gap. We\u2019ll see you back to go over the results together."' },
    ],
    learning:'This is the ADJUSTED CONSULTATION done well. Communicate directly WITH the patient \u2014 here Danny, who has Down\u2019s syndrome and a learning disability \u2014 in short plain language at his pace, using the support worker to facilitate rather than replace his voice, and providing reasonable adjustments (longer appointment, quiet space, easy-read information, a familiar person), which are a legal duty under the Equality Act. The cardinal error to avoid is DIAGNOSTIC OVERSHADOWING: attributing new physical symptoms to the learning disability or to anxiety/behaviour. Rectal bleeding, change in bowel habit and weight loss are physical symptoms to be taken exactly as seriously as in anyone \u2014 arguably more so, given the stark health inequalities and premature mortality faced by people with learning disabilities. His symptoms cross several NICE NG12 colorectal triggers (40+ with weight loss and abdominal pain; 50+ with unexplained rectal bleeding; 60+ with bowel-habit change or iron-deficiency anaemia; a mass): offer FIT (\u226510 \u00b5g Hb/g \u2192 urgent suspected-cancer 2-week-wait referral), examine (abdomen \u00b1 DRE if consented and tolerated), and check FBC/ferritin. Assess CAPACITY for each specific decision under the Mental Capacity Act \u2014 presume it, support it, and only if a specific decision-making capacity is lacking act in best interests with consultation, documenting the process; capacity is decision-specific and never assumed absent because of the disability. Crucially, make the investigation ACCESSIBLE \u2014 flag reasonable adjustments and a hospital passport, plan for bowel prep/procedure and anxiety, and actively track the referral \u2014 because health inequality lives in the logistics, and a referral the patient cannot navigate is not care.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer (lower GI) \u00b7 FIT (DG56) \u00b7 Mental Capacity Act 2005 \u00b7 Equality Act reasonable adjustments \u00b7 LeDeR',
      points:[
        { h:'Adjusted consultation', t:'Communicate directly with the patient in accessible language at their pace; use supporters to facilitate not replace their voice; provide reasonable adjustments (time, quiet environment, easy-read, familiar person, hospital passport). This is a legal duty, not a courtesy.' },
        { h:'Avoid diagnostic overshadowing', t:'Do not attribute new physical symptoms to a learning disability, mental illness or behaviour. People with learning disabilities face major health inequalities and earlier death (LeDeR) \u2014 take physical symptoms at least as seriously as in anyone else.' },
        { h:'NG12 colorectal triggers', t:'Offer FIT to guide referral; FIT \u226510 \u00b5g Hb/g \u2192 urgent 2WW. Triggers include: 40+ with weight loss + abdominal pain; 50+ with unexplained rectal bleeding; 60+ with change in bowel habit or iron-deficiency anaemia; rectal/abdominal mass. Examine and check FBC/ferritin.' },
        { h:'Mental Capacity Act', t:'Capacity is decision- and time-specific: presume it, take all practicable steps to support it, and assess understanding/retention/weighing/communication. If a specific capacity is lacking, act in best interests, consulting those who know the person; document the process.' },
        { h:'Make investigation accessible', t:'Flag reasonable adjustments to the hospital; plan bowel prep, procedure support and anxiety management (desensitisation, familiar carer, sedation if needed); use a hospital passport; and proactively track the referral so it actually happens.' },
        { h:'Work in the triad', t:'Build trust with an anxious patient; involve the support worker respectfully without talking over the patient; check the patient\u2019s own understanding throughout.' },
        { h:'Never do', t:'Never talk only to the carer; never attribute physical symptoms to the disability/anxiety; never assume incapacity from the diagnosis; never omit FIT/2WW where thresholds are met; never make a referral the patient cannot navigate and call it done.' },
        { h:'Safety-net & follow-up', t:'FIT + bloods + urgent colorectal 2WW with reasonable adjustments; clear deterioration advice and contacts; document capacity/adjustments; actively track the appointment and review results together \u2014 equity in the logistics.' }
      ]
    }
  };

  /* ============ 172. F2F — Unexplained weight loss with normal first-line tests (NG12; honest uncertainty) ============ */
  const c172 = {
    id:'weight-loss-normal-tests', title:'"You said the first tests were normal \u2014 so I\u2019m fine now, aren\u2019t I?"', type:'video', duration:12,
    meta:{ age:68, sex:'F', setting:'Video consultation \u2014 reviewing first-line results for unintentional weight loss.', system:'GI / General \u2014 unexplained weight loss after normal first-line tests (NG12)' },
    brief:'Mrs Eleanor Pryce, 68, retired teacher, presented a few weeks ago with ~7 kg (over a stone) of unintentional weight loss over three months, with reduced appetite and fatigue but no localising symptoms. First-line investigations were arranged and are mostly back: FBC, U&E, LFTs, bone profile, glucose/HbA1c, TFTs, CRP, coeliac serology and a CXR \u2014 all NORMAL or non-contributory. She is relieved and wants to draw a line under it. The examinable task is managing UNEXPLAINED WEIGHT LOSS when first-line tests are normal: recognise that significant unexplained weight loss is itself a NICE NG12 concern associated with several cancers, that NORMAL first-line tests do NOT exclude malignancy, and that the correct response is continued, structured investigation (broadening tests, imaging \u2014 often CT chest/abdomen/pelvis \u2014 and/or referral) with honest communication of uncertainty and robust safety-netting \u2014 NOT false reassurance that "the tests were normal so you\u2019re fine".',
    script:{
      opening:'"Hello doctor. You rang me in to go through the results \u2014 but the receptionist said most of them were normal, which is such a relief. So I\u2019m fine, aren\u2019t I? It was probably just stress, or my age. Can we leave it there? I don\u2019t really want to be poked and prodded any more if the blood tests were all okay."',
      facts:[
        { topic:'Significant unexplained weight loss is a red flag in itself', text:'Unintentional weight loss of clinical significance (e.g. >5% body weight over 6\u201312 months, or ~a stone as here) is a SYMPTOM that warrants explanation, not a finding to be reassured away. It is associated with malignancy (GI, lung, pancreatic, urological, haematological, ovarian), as well as non-malignant causes (hyperthyroidism, diabetes, depression, malabsorption, chronic infection, heart/lung/renal disease, medication, social/nutritional factors). NG12 explicitly lists weight loss as a feature prompting investigation across multiple cancer sites.' },
        { topic:'Normal first-line tests do NOT exclude cancer', text:'THE CORE TEACHING \u2014 a normal FBC, normal LFTs and a clear CXR do NOT rule out malignancy. Many cancers (pancreatic, ovarian, early GI, renal) can present with weight loss and entirely normal first-line bloods and a normal chest X-ray. Treating "tests normal" as "all clear" is the classic, dangerous error. The pre-test concern (significant unexplained weight loss at 68) persists \u2014 so investigation must continue.' },
        { topic:'What "next-line" looks like', text:'When first-line tests are unrevealing but weight loss is unexplained, escalate: a focused re-history and examination (new/evolving symptoms, lymphadenopathy, masses, breast/rectal/pelvic exam as appropriate), further targeted tests (e.g. CA-125 if any pelvic/abdominal symptoms, PSA in men, urine for blood/protein, faecal tests, ferritin), and crucially IMAGING \u2014 commonly CT chest/abdomen/pelvis \u2014 and/or referral. NG12 supports urgent investigation/referral for unexplained weight loss; many areas have a non-site-specific symptoms (NSS) / rapid diagnostic centre pathway for exactly this presentation.' },
        { topic:'Honest communication of uncertainty', text:'The skill is to convey, warmly and clearly, that "normal so far" is genuinely reassuring in part but is NOT the same as "nothing wrong", and that because the weight loss is unexplained we keep looking. This avoids both false reassurance (dangerous) and crude alarm (cruel). Name the plan, the reason for it, and the timeframe; acknowledge her relief and her reluctance honestly.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 her "so I\u2019m fine, let\u2019s leave it" is relief-driven AVOIDANCE: she is frightened of what further tests might find, possibly bereaved or living alone, and is seizing on "normal bloods" to escape the fear. There may also be a social/nutritional or low-mood contributor worth exploring. The skill is to gently hold her in the process, validate the fear, and not let relief (hers or yours) close the case prematurely.' },
        { topic:'What she needs', text:'Officially: permission to stop. What she needs: recognition that significant unexplained weight loss remains a red flag despite normal first-line tests; continued structured investigation (re-examination, targeted tests, CT imaging \u00b1 NSS/rapid-diagnostic referral per NG12); honest communication of uncertainty; exploration of non-malignant and social/mood contributors; and strong safety-netting \u2014 not "the tests were normal, you\u2019re fine".' },
      ],
      ice:{
        ideas:'"Most results were normal," so it\u2019s probably just stress or age and she is fine now.',
        concerns:'HIDDEN AGENDA \u2014 relief-driven avoidance; frightened of what further tests might find; possibly lonely/bereaved or low in mood; seizing on normal bloods to stop.',
        expectations:'To draw a line under it and avoid more tests. What she needs: continued investigation (imaging \u00b1 referral), honest uncertainty, exploration of other contributors, and safety-netting \u2014 not premature reassurance.'
      },
      cues:['~1 stone unintentional weight loss over 3 months at 68 \u2014 a red-flag symptom in itself; an NG12 concern across several cancers.','First-line bloods + CXR normal \u2014 these do NOT exclude malignancy (pancreatic, ovarian, renal, early GI can have normal first-line tests); keep investigating.','"Tests were normal, so I\u2019m fine, let\u2019s leave it" \u2014 relief-driven avoidance; hold her in the process honestly, don\u2019t let relief close the case.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises significant unexplained weight loss (~1 stone / >5% over 3 months at 68) as a RED-FLAG symptom in its own right, associated with malignancy and serious non-malignant disease \u2014 not a finding to reassure away' },
      { dom:'tasks', text:'States clearly that NORMAL first-line tests (FBC, LFTs, CXR, etc.) do NOT exclude cancer \u2014 several malignancies present with weight loss and normal first-line results \u2014 and resists "tests normal = all clear"' },
      { dom:'tasks', text:'Re-takes a focused history and re-examines for evolving/localising features (lymphadenopathy, masses, breast/abdominal/rectal/pelvic findings) rather than relying on the previous normal work-up' },
      { dom:'tasks', text:'Escalates appropriately: targeted further tests (e.g. CA-125, PSA, urinalysis, ferritin, faecal tests) AND imaging \u2014 commonly CT chest/abdomen/pelvis \u2014 and/or NG12 urgent referral, including a non-site-specific symptoms / rapid-diagnostic-centre pathway where available' },
      { dom:'tasks', text:'Considers and screens non-malignant and social/mood contributors (hyperthyroidism, diabetes, malabsorption, depression, isolation/nutrition, medication) without using them to dismiss the red flag' },
      { dom:'rto',   text:'Reads the relief-driven avoidance, validates the fear of what tests might find, and does NOT collude with the wish to "leave it" \u2014 nor let his/her own relief close the case' },
      { dom:'rto',   text:'Communicates uncertainty honestly and warmly \u2014 "reassuring so far but not the same as nothing wrong, so we keep looking" \u2014 avoiding both false reassurance and crude alarm, and checks understanding' },
      { dom:'gs',    text:'Safety-nets and follows up robustly: names the continued plan, reason and timeframe, the symptoms that warrant sooner contact, books definite review of further results, and ensures active tracking \u2014 continued structured investigation, never premature discharge on normal first-line tests' },
    ],
    worked:[
      { lbl:'Acknowledge the relief, hold the line', txt:'"It\u2019s genuinely good news that those first tests were normal, and I can see the relief \u2014 but I don\u2019t want to mislead you. \u2018Normal so far\u2019 isn\u2019t quite the same as \u2018nothing to find\u2019, and because we still haven\u2019t explained the weight loss, the right thing is to keep looking a bit further."' },
      { lbl:'Explain why normal isn\u2019t enough', txt:'"Losing a stone without trying is itself something we take seriously at any age. Some causes \u2014 including ones we\u2019d want to catch early \u2014 don\u2019t show up on the first blood tests or a chest X-ray. So a clear set of bloods is reassuring, but it can\u2019t close the door on its own."' },
      { lbl:'Re-examine + broaden', txt:'"Let me re-examine you today \u2014 your tummy, glands, and a couple of other checks \u2014 and ask whether anything new has appeared. I\u2019d also like a few more specific tests and, importantly, a scan of your chest, tummy and pelvis to get a proper look."' },
      { lbl:'Name the pathway', txt:'"Given the unexplained weight loss, I\u2019m arranging this urgently \u2014 there\u2019s a fast pathway for exactly this situation, where weight loss needs explaining and the first tests are normal. I\u2019d rather investigate properly and reassure you for real than guess."' },
      { lbl:'Explore the whole picture', txt:'"Can I also ask how things are in yourself \u2014 your mood, your appetite, eating alone, sleep? Sometimes weight loss has more than one thread, and I don\u2019t want to miss something we can help with there either."' },
      { lbl:'Safety-net + definite review', txt:'"If you notice anything new \u2014 pain, a lump, bleeding, more weight off \u2014 tell us sooner. I\u2019m booking you back to go through the scan and tests with me; I\u2019ll personally keep track so nothing slips. We do this together, and I\u2019m not leaving it half-done."' },
    ],
    learning:'Significant unintentional weight loss (e.g. >5% body weight over 6\u201312 months, or around a stone as here) is a RED-FLAG SYMPTOM in its own right, associated with malignancy (GI, lung, pancreatic, urological, ovarian, haematological) and with serious non-malignant disease \u2014 and NICE NG12 lists weight loss as a feature prompting investigation across multiple cancer sites. The core, examinable teaching is that NORMAL first-line tests (FBC, U&E, LFTs, bone profile, glucose, TFTs, CRP, coeliac, CXR) do NOT exclude cancer: pancreatic, ovarian, renal and early GI cancers can present with weight loss and entirely normal first-line bloods and a clear chest X-ray, so treating "tests normal" as "all clear" is the classic dangerous error. When first-line tests are unrevealing but weight loss is unexplained, the response is CONTINUED, STRUCTURED investigation \u2014 a focused re-history and examination, targeted further tests (CA-125, PSA, urinalysis, ferritin, faecal tests as appropriate) and, crucially, imaging (commonly CT chest/abdomen/pelvis) and/or NG12 urgent referral, with many areas offering a non-site-specific-symptoms / rapid diagnostic centre pathway designed for exactly this presentation. Communicate uncertainty honestly and warmly (\u201creassuring so far, but not the same as nothing wrong, so we keep looking\u201d), screen non-malignant and social/mood contributors without using them to dismiss the red flag, and resist the relief-driven avoidance \u2014 the patient\u2019s and your own \u2014 that tempts premature discharge. Safety-net robustly, book definite review, and actively track the further results.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer (weight loss; non-site-specific symptoms) \u00b7 unexplained weight loss work-up \u00b7 rapid diagnostic centres',
      points:[
        { h:'Weight loss is a red flag', t:'Significant unintentional weight loss (>5% over 6\u201312 months) warrants explanation. NG12 lists it as a feature prompting investigation/referral across multiple cancers, alongside non-malignant causes (hyperthyroidism, diabetes, malabsorption, depression, chronic disease, medication, social/nutritional).' },
        { h:'Normal first-line \u2260 all clear', t:'A normal FBC, LFTs and CXR do not exclude malignancy. Pancreatic, ovarian, renal and early GI cancers can present with weight loss and normal first-line tests. Never equate normal initial bloods with reassurance to stop.' },
        { h:'Escalate investigation', t:'Re-history and re-examine for evolving/localising features; broaden targeted tests (CA-125, PSA, urinalysis, ferritin, faecal tests); and arrange imaging \u2014 commonly CT chest/abdomen/pelvis \u2014 and/or urgent referral.' },
        { h:'Non-site-specific pathway', t:'Many areas have a non-site-specific symptoms (NSS) pathway or rapid diagnostic centre for unexplained weight loss/vague symptoms where no single 2WW site fits \u2014 use it for exactly this presentation.' },
        { h:'Screen other contributors', t:'Assess mood/depression, social isolation and nutrition, malabsorption, endocrine causes and medication \u2014 these may contribute or coexist, but must not be used to dismiss an unexplained red flag.' },
        { h:'Honest uncertainty', t:'Communicate that results so far are partly reassuring but do not close the case; explain the continued plan, reasons and timeframe; avoid both false reassurance and crude alarm; check understanding.' },
        { h:'Never do', t:'Never discharge unexplained weight loss on normal first-line tests; never equate normal bloods/CXR with excluding cancer; never let relief (yours or the patient\u2019s) close the case; never skip imaging/referral when weight loss is unexplained.' },
        { h:'Safety-net & follow-up', t:'Name the continued investigation plan and timeframe; advise new symptoms warranting sooner contact; book definite review of further results; actively track imaging/referral so nothing slips \u2014 continued structured work-up, not premature discharge.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c169, c170, c171, c172);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'reflux-ppi-exit': {
      ceg: ['Long-term conditions & cancer', 'Prescribing & pharmacology'],
      stem: {
        name: 'Trevor Nash', age: '57 years \u00b7 male',
        pmh: ['Omeprazole 20 mg ~8 years on repeat (reflux) \u2014 never formally reviewed', '\u26a0 New: food "sticking" on swallowing few weeks + unintentional weight loss', 'Lorry driver; smoker; overweight'],
        meds: ['Omeprazole 20 mg OD'],
        allergy: 'NKDA',
        recent: '"Just renew it, no song and dance \u2014 I\u2019ve a delivery window."',
        reason: 'Video consultation \u2014 medication review / wants a PPI repeat.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Reframe the review', d:'8-year repeat = review, not rubber stamp. Original indication, control, step-down potential.' },
        { t:'2\u20134',  h:'Screen alarm features', d:'Dysphagia, weight loss, vomiting, bleeding, anaemia. Elicit the minimised food-sticking + weight loss.' },
        { t:'4\u20137',  h:'NG12 urgent OGD', d:'Dysphagia at ANY age (and 55+ weight loss + dyspepsia) \u2192 urgent 2WW gastroscopy. Act now.' },
        { t:'7\u20139',  h:'Honest, not panic', d:'Explain why this can\u2019t be a repeat; acknowledge work pressure; continue PPI meanwhile.' },
        { t:'9\u201312', h:'Safety-net + PPI plan', d:'Complete dysphagia/haematemesis/melaena \u2192 A&E; settle long-term PPI step-down after the result.' }
      ],
      wordPics: {
        fail: 'Renews the PPI without review; never asks about swallowing or weight; misses that dysphagia at any age is an urgent 2WW OGD trigger.',
        pass: 'Reviews rather than rubber-stamps, screens alarm features, elicits dysphagia + weight loss and refers on the NG12 2WW OGD.',
        exc:  'Reframes the repeat as a review, actively screens and elicits the minimised dysphagia and weight loss, refers urgently for OGD per NG12, explains honestly without panic, continues the PPI appropriately, addresses long-term step-down/H. pylori for the future, and safety-nets.'
      },
      avoid: [
        { dont:'"You\u2019ve been fine on it for years \u2014 here\u2019s your repeat, off you go."', instead:'"Eight years without a review, let me ask a couple of things first \u2014 any food sticking, any weight loss?"', why:'Rubber-stamping a long-term PPI skips both stewardship and the chance to catch alarm features.' },
        { dont:'"Food sticking is probably just the reflux \u2014 up your omeprazole."', instead:'"Food sticking when you swallow is a symptom we always check with an urgent camera test, whatever your age."', why:'Dysphagia at any age is a NICE NG12 urgent 2WW OGD trigger \u2014 never attribute it to reflux and up-dose.' },
        { dont:'"Let\u2019s recheck in a few months if it\u2019s no better."', instead:'"This needs the urgent two-week pathway now, not a wait-and-see."', why:'Watchful waiting on dysphagia + weight loss delays diagnosis of oesophago-gastric cancer.' }
      ]
    },

    'uc-flare-phone': {
      ceg: ['Urgent & unscheduled care', 'Long-term conditions & cancer'],
      stem: {
        name: 'Aisha Rahman', age: '29 years \u00b7 female',
        pmh: ['Known left-sided ulcerative colitis, usually well on mesalazine', '\u26a0 5-day flare: ~10 bloody stools/day, nocturnal stools, crampy pain', '\u26a0 Feverish, exhausted (systemic features)'],
        meds: ['Mesalazine 2.4 g/day'],
        allergy: 'NKDA',
        recent: '"Just call in some steroids \u2014 I can\u2019t come in, work + the little one, I hate hospitals."',
        reason: 'Telephone consultation \u2014 UC flare.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Quantify precisely', d:'Stool frequency, blood, nocturnal stools, urgency, pain, fever, energy. Don\u2019t eyeball a "flare".' },
        { t:'2\u20134',  h:'Score it', d:'Truelove & Witts: \u22656 bloody stools + systemic feature = acute severe UC. Hers meets it.' },
        { t:'4\u20137',  h:'Acute severe = emergency', d:'Toxic megacolon/perforation/VTE risk \u2192 same-day admission for IV steroids + bloods, not a phone script.' },
        { t:'7\u20139',  h:'Problem-solve barriers', d:'Childcare, ring ahead, work note; validate hospital fear; bring her to safe care.' },
        { t:'9\u201312', h:'Safety-net + future', d:'999 red flags (severe pain/distension, fever/rigors, faint, VTE); confirm CRC surveillance later.' }
      ],
      wordPics: {
        fail: 'Phones in oral prednisolone for a clearly acute-severe flare; never quantifies stools/systemic features; misses the emergency and the VTE risk.',
        pass: 'Quantifies severity, recognises acute severe UC and arranges same-day assessment with safety-netting.',
        exc:  'Takes an exact severity history, applies Truelove & Witts, recognises acute severe UC as an emergency needing same-day IV-steroid assessment, problem-solves the childcare/work/hospital-fear barriers without colluding, safety-nets hard (incl. VTE), and flags CRC surveillance as a separate future point.'
      },
      avoid: [
        { dont:'"I\u2019ll call some steroids into the chemist for you \u2014 ring back if no better."', instead:'"A flare this active needs IV steroids and blood tests today \u2014 I\u2019m arranging for you to be seen, not phoning in tablets."', why:'Phoned-in oral steroids for acute severe colitis miss an emergency that can progress to toxic megacolon/perforation.' },
        { dont:'(Not counting) "Sounds like a flare \u2014 increase your mesalazine."', instead:'"Let me get exact numbers \u2014 how many bloody stools, are you up at night, any fever? That tells me how serious this is."', why:'Treating a flare without scoring severity misses the acute-severe threshold.' },
        { dont:'"If you really can\u2019t come in, we\u2019ll try managing at home."', instead:'"I understand the barriers \u2014 let\u2019s solve the childcare and I\u2019ll ring ahead \u2014 but this is too severe to manage at home safely."', why:'Colluding with avoidance for an acute-severe flare is unsafe.' }
      ]
    },

    'rectal-bleed-learning-disability': {
      ceg: ['Health disadvantage & vulnerabilities', 'Long-term conditions & cancer'],
      stem: {
        name: 'Danny Okafor (support worker Maria present)', age: '52 years \u00b7 male',
        pmh: ['Down\u2019s syndrome + moderate learning disability; anxious in clinic, short-phrase communication', '\u26a0 Rectal bleeding ~2 months; stools looser/more frequent; reduced appetite + weight loss', 'Attends with long-standing support worker'],
        meds: ['Levothyroxine'],
        allergy: 'NKDA',
        recent: '(Support worker) "Blood when he goes for a couple of months, off his food, lost weight \u2014 he gets very anxious about appointments."',
        reason: 'Video consultation \u2014 rectal bleeding, attends with support worker.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Centre Danny', d:'Talk WITH Danny in plain language at his pace; reasonable adjustments; support worker facilitates, not replaces.' },
        { t:'2\u20134',  h:'No overshadowing', d:'Take bleeding/bowel change/weight loss at face value \u2014 not "just his anxiety / his condition".' },
        { t:'4\u20137',  h:'Capacity + exam', d:'MCA: presume + support capacity for exam/FIT/referral; best interests if lacking. Examine \u00b1 DRE if consented.' },
        { t:'7\u20139',  h:'NG12 colorectal 2WW', d:'FIT (\u226510 \u2192 2WW) + urgent colorectal referral; FBC/ferritin. Multiple triggers met at 52.' },
        { t:'9\u201312', h:'Make it accessible + track', d:'Hospital passport, longer slots, prep/sedation plan; proactively track referral; review together.' }
      ],
      wordPics: {
        fail: 'Talks only to the support worker; attributes symptoms to anxiety/Down\u2019s (diagnostic overshadowing); assumes incapacity; no FIT/2WW; makes a referral Danny can\u2019t navigate.',
        pass: 'Runs an adjusted consultation, takes symptoms seriously, assesses capacity, and arranges FIT + urgent colorectal 2WW.',
        exc:  'Centres Danny with reasonable adjustments, avoids diagnostic overshadowing, assesses decision-specific capacity per the MCA, offers FIT + urgent NG12 colorectal 2WW with examination/bloods, and makes investigation accessible (passport, prep/sedation, anxiety plan) with proactive tracking and joint review.'
      },
      avoid: [
        { dont:'(To Maria, not Danny) "What\u2019s been going on with him then?"', instead:'(To Danny) "Hello Danny, is it okay if I ask you some questions, and Maria can help?"', why:'Talking over the patient breaches the duty to communicate directly and provide reasonable adjustments.' },
        { dont:'"It\u2019s probably just his anxiety or part of his condition \u2014 let\u2019s watch it."', instead:'"Bleeding, looser bowels and weight loss are physical symptoms I take seriously in anyone \u2014 we need to investigate."', why:'Diagnostic overshadowing attributes serious physical symptoms to the disability and misses cancer.' },
        { dont:'"He won\u2019t cope with a colonoscopy, so there\u2019s no point referring."', instead:'"Let\u2019s refer urgently and plan the adjustments \u2014 passport, support, maybe sedation \u2014 so the test is manageable for Danny."', why:'Assuming he can\u2019t cope denies equitable access; the GP\u2019s job is to make investigation accessible, not to ration it.' }
      ]
    },

    'weight-loss-normal-tests': {
      ceg: ['Long-term conditions & cancer', 'Older adults'],
      stem: {
        name: 'Eleanor Pryce', age: '68 years \u00b7 female',
        pmh: ['\u26a0 ~7 kg (>1 stone) unintentional weight loss over 3 months; reduced appetite, fatigue; no localising symptoms', 'First-line tests (FBC, U&E, LFTs, bone, glucose/HbA1c, TFTs, CRP, coeliac, CXR) all normal/non-contributory', 'Lives alone; widowed last year'],
        meds: ['Amlodipine'],
        allergy: 'NKDA',
        recent: '"Most results were normal \u2014 such a relief, so I\u2019m fine, aren\u2019t I? Can we leave it there?"',
        reason: 'Video consultation \u2014 reviewing first-line results for weight loss.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Acknowledge + hold line', d:'Relief is fair, but "normal so far" \u2260 "nothing wrong"; weight loss still unexplained.' },
        { t:'2\u20134',  h:'Why normal isn\u2019t enough', d:'Pancreatic/ovarian/renal/early GI can have normal first-line bloods + CXR; the red flag persists.' },
        { t:'4\u20137',  h:'Re-examine + broaden', d:'Re-history/examine for new features; targeted tests (CA-125, PSA n/a, urinalysis, ferritin, faecal); CT CAP.' },
        { t:'7\u20139',  h:'NG12 pathway', d:'Urgent investigation/referral; non-site-specific symptoms / rapid diagnostic centre for unexplained weight loss.' },
        { t:'9\u201312', h:'Whole picture + safety-net', d:'Screen mood/isolation/nutrition; honest uncertainty; definite review; track results personally.' }
      ],
      wordPics: {
        fail: 'Reassures "tests were normal, you\u2019re fine" and discharges; equates normal bloods/CXR with excluding cancer; no imaging or referral for unexplained weight loss.',
        pass: 'Recognises weight loss as a persisting red flag despite normal first-line tests and arranges imaging/referral with safety-netting.',
        exc:  'Names significant unexplained weight loss as a red flag, explains that normal first-line tests don\u2019t exclude cancer, re-examines and broadens tests, arranges CT \u00b1 NG12 non-site-specific referral, screens mood/social/nutritional contributors without dismissing the flag, communicates uncertainty honestly, and safety-nets with definite tracked review.'
      },
      avoid: [
        { dont:'"Good news \u2014 all your tests were normal, so there\u2019s nothing to worry about."', instead:'"The tests so far are reassuring, but they don\u2019t explain the weight loss \u2014 and some causes don\u2019t show on first-line tests, so we keep looking."', why:'Equating normal first-line tests with "all clear" is the classic dangerous error \u2014 several cancers have normal initial bloods/CXR.' },
        { dont:'"It\u2019s probably just stress since you lost your husband \u2014 let\u2019s leave it."', instead:'"Grief and eating alone may play a part, and I want to help with that too \u2014 but I can\u2019t let it close the case while the weight loss is unexplained."', why:'Using a plausible social/mood explanation to dismiss an unexplained red flag risks missing malignancy.' },
        { dont:'(Vague) "Come back if you lose any more weight."', instead:'"I\u2019m arranging a scan and a fast-pathway review now, booking you back to go through results, and tracking it personally."', why:'Passive safety-netting on unexplained weight loss is insufficient \u2014 active continued investigation is required.' }
      ]
    }

  });

})();
