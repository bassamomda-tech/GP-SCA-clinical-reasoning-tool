/* ============================================================
   Reasoning GP — Case Library batch 8: "Chronic cough"
   Three ORIGINAL cases. Hidden agenda + full ICE in every case.
   NG12 2WW stated explicitly where the presentation maps to it.
   Pushes into SCA_CASES + SCA_EXTRAS.
   Load AFTER sca-cases9.js.
   ============================================================ */

(function(){

  /* ============ 35. VIDEO — Chronic cough in a young adult ============ */
  const c35 = {
    id:'cough-young-asthma', title:'Ten weeks and still barking', type:'video', duration:12,
    meta:{ age:29, sex:'F', setting:'Video consultation — "cough that won\u2019t shift, wants antibiotics".', system:'Respiratory / Cough-variant asthma' },
    brief:'Miss Amara Okafor, 29, primary-school teacher. Booked a video slot: "cough 10 weeks, kept awake at night, wants antibiotics — it\u2019s affecting my teaching." PMH: childhood eczema, hay fever. Meds: cetirizine PRN. Non-smoker on the record. Recent: one telephone contact 4 weeks ago — given a "delayed antibiotic" by a locum, took it, no better.',
    script:{
      opening:'"Thanks for seeing me on video. Right — I\u2019ve had this cough for ten weeks now. It started after a cold the whole class had, but the cold went and the cough just\u2026 stayed. It\u2019s worse at night, I\u2019m up at two and three coughing, and the kids have started doing impressions of me. The antibiotics did nothing. I just need something that actually works, because I can\u2019t keep teaching like this."',
      facts:[
        { topic:'The cough pattern',  text:'Dry, no real phlegm. WORSE at night (wakes her 2\u20133am), in cold air walking to school, and \u2014 if asked specifically \u2014 when she laughs or after PE with the class. A tight feeling in the chest with it sometimes. No fever now, no weight loss, no haemoptysis, no chest pain.' },
        { topic:'The atopy thread',    text:'If asked: childhood asthma "that she grew out of", eczema, hay fever every summer. Mother and brother both have asthma. Hasn\u2019t used an inhaler since she was about 12.' },
        { topic:'The vaping',          text:'Only if asked openly and non-judgementally about vaping/smoking: she vapes \u2014 started 18 months ago to quit cigarettes, "everyone said it was the healthy option". Uses it more than she\u2019d admit, including in bed. Embarrassed; assumed it was irrelevant because "it\u2019s not smoking".' },
        { topic:'The real reason today', text:'HIDDEN AGENDA \u2014 reachable when trust is built: she is 7 weeks pregnant. Found out four days ago. Hasn\u2019t told anyone, including the father. Her actual question, the one under "I need something that works", is whether the cough \u2014 and any treatment, and the vaping \u2014 could harm the baby. She\u2019s been awake at night as much from fear as from coughing.' },
        { topic:'What she wants',      text:'Officially: antibiotics or "something strong". Actually: to be told what is safe now that she is pregnant, permission to stop blaming herself about the vaping, and a plan that treats the cough without harming the pregnancy she hasn\u2019t announced.' },
      ],
      ice:{
        ideas:'A chest infection that the first antibiotics failed to clear \u2014 so she needs stronger ones.',
        concerns:'HIDDEN AGENDA \u2014 a newly-discovered 7-week pregnancy she\u2019s told no one about; terror that the cough, the vaping, or any medicine could harm the baby. Shame about the vaping (she believed it was "the healthy option").',
        expectations:'"Something that works." Underneath: a clear, safe-in-pregnancy plan, and an honest, non-judgemental steer on the vaping and what matters now.'
      },
      cues:['"The antibiotics did nothing" \u2014 the second course request is the surface; resist prescribing into it.','A flicker when asked what she\u2019s most worried about, or a deflected question about "whether medicines are safe" \u2014 the pregnancy pressing to be said.','Hesitation around smoking/vaping questions \u2014 shame, not absence; ask in a way that makes disclosure safe.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the pattern is NOT infective: 10 weeks, dry, nocturnal, triggered by cold air / laughing / exertion, on a background of childhood asthma + atopy + family history \u2014 cough-variant asthma, not a chest infection needing antibiotics' },
      { dom:'tasks', text:'Holds the differential out loud and excludes red flags: reflux (nocturnal, worse lying), post-infective/pertussis (the index cold, whooping/paroxysms), and the must-nots \u2014 haemoptysis, weight loss, fixed focal signs \u2014 screened and absent' },
      { dom:'tasks', text:'Asks about smoking AND vaping openly and without judgement, and elicits the vaping as a real, relevant exposure \u2014 without shaming her out of the consultation' },
      { dom:'tasks', text:'Creates the space that lets the pregnancy emerge (a clean "what\u2019s worrying you most?" / "is there anything else on your mind with this?") and, once known, rebuilds the whole plan around it' },
      { dom:'tasks', text:'Manages cough-variant asthma correctly AND pregnancy-safely: ICS (and SABA) are recommended and safe in pregnancy \u2014 uncontrolled asthma is the real risk to the baby, not the inhaler; arranges spirometry/peak-flow, a trial of treatment, and review' },
      { dom:'tasks', text:'Pregnancy housekeeping woven in proportionately: folic acid, smoking/vaping cessation support framed as the single biggest gift to the baby (not a telling-off), and antenatal/booking signposting \u2014 without hijacking a cough consultation' },
      { dom:'rto',   text:'Reads the worry under the antibiotic request and asks rather than prescribes; receives the pregnancy disclosure as something entrusted, not as a complication' },
      { dom:'gs',    text:'Safety-nets clearly: what would change the picture (breathlessness, wheeze worsening, blood, fever), spirometry/review dated, the inhaler-in-pregnancy reassurance written down, and a follow-up that holds both the cough and the pregnancy' },
    ],
    worked:[
      { lbl:'Resist the script',     txt:'"Ten weeks is a long time to be barking through your lessons \u2014 let\u2019s actually work out what this is, because if it were the kind of cough antibiotics fix, that first course would have fixed it. Tell me about the nights: what time does it wake you, and what does it feel like in your chest when it does?"' },
      { lbl:'Name the pattern',      txt:'"Dry, worse at 2am, worse in cold air and when you laugh, on top of childhood asthma and a houseful of hay fever \u2014 that\u2019s not an infection hanging on, that\u2019s your airways being twitchy again. The medical name is cough-variant asthma. The good news is it\u2019s very treatable. The relevant news is that the treatment is an inhaler, not antibiotics."' },
      { lbl:'Make disclosure safe',  txt:'"Two questions I ask everyone with a cough, no judgement attached \u2014 do you smoke at all, or vape? \u2026 Thank you for telling me. A lot of people were told vaping was the healthy swap, so you\u2019re not being daft \u2014 but it does irritate exactly the airways we\u2019re talking about, so it\u2019s genuinely part of this."' },
      { lbl:'Open the real door',    txt:'"Before we settle a plan \u2014 is there anything else on your mind with all this? Sometimes a cough that won\u2019t shift carries a worry that\u2019s bigger than the cough. \u2026 (receiving it) Congratulations \u2014 and thank you for trusting me with it. That changes nothing about what this cough IS, and it changes everything about how carefully we choose what to do. Let\u2019s take it together."' },
      { lbl:'The pregnancy truth',   txt:'"Here\u2019s the thing that will help you sleep: for a pregnant woman, the danger isn\u2019t the inhaler \u2014 it\u2019s the UNTREATED asthma. A baby needs a mum who can breathe. The preventer and reliever inhalers we use are well-studied and recommended in pregnancy. The one change that helps the baby most isn\u2019t stopping the inhaler \u2014 it\u2019s stopping the vape, and I\u2019ll help you do that properly, not with a lecture."' },
      { lbl:'Tie it together',       txt:'"So: I\u2019ll set you up with a preventer and reliever inhaler and check your peak flow / breathing test; start folic acid today if you haven\u2019t; let\u2019s get you booked with the midwife; and I\u2019ll see you in two weeks for the cough AND to see how you are. If you get properly breathless, wheezy, feverish or see any blood, you call us sooner. You came in for something that works \u2014 this is it, and it\u2019s safe for both of you."' },
    ],
    learning:'A 10-week dry cough, nocturnal, triggered by cold air / laughter / exertion, on an atopic background with childhood asthma and family history, is cough-variant asthma \u2014 not an infection, and a second antibiotic is the wrong reflex. The skill is twofold: hold the differential cleanly (reflux, post-infective/pertussis, and the red flags that aren\u2019t there) and treat correctly with inhaled therapy + objective testing. But the marks live in the hidden agenda: the antibiotic request masks a newly-discovered pregnancy and a terror that treatment will harm the baby. Make disclosure safe (vaping shame, then the pregnancy), then deliver the counter-intuitive truth \u2014 uncontrolled asthma harms the fetus, the inhaler does not \u2014 and weave proportionate pregnancy housekeeping (folic acid, cessation as a gift not a telling-off, booking) without hijacking the consultation.',
    knowledge:{
      guideline:'BTS/SIGN & NICE/BTS asthma guidance · NICE CKS cough · UKTIS / asthma-in-pregnancy guidance',
      points:[
        { h:'Diagnose by pattern, not duration alone', t:'Cough-variant asthma: chronic (>8 weeks) dry cough, nocturnal waking, triggered by cold air, exercise, laughter, allergens; atopic background (eczema, rhinitis, childhood asthma, family history). Often NO wheeze. Confirm with spirometry + bronchodilator reversibility, peak-flow diary, or FeNO; a treatment trial is reasonable where access is delayed.' },
        { h:'Work the differential', t:'Reflux cough (nocturnal, worse lying flat, acid brash); post-infective cough and pertussis (an index URTI, paroxysms, whoop, post-tussive vomiting \u2014 notifiable, and relevant in pregnancy); ACE-inhibitor cough (not here); and the red flags to exclude \u2014 haemoptysis, weight loss, fever, focal signs.' },
        { h:'Smoking AND vaping \u2014 ask both, ask kindly', t:'Vaping is a genuine airway irritant and a common undisclosed exposure, frequently believed to be "healthy". Ask non-judgementally; disclosure collapses if the patient feels shamed. Frame cessation as treatment, not punishment.' },
        { h:'Asthma in pregnancy \u2014 the key teaching', t:'Uncontrolled asthma harms the pregnancy (hypoxia, pre-eclampsia, growth restriction); ICS, SABA, LABA and oral steroids when indicated are considered safe and should be CONTINUED. The dangerous option is stopping treatment out of fear. Say this explicitly \u2014 it is the single most reassuring fact you hold.' },
        { h:'Pregnancy housekeeping \u2014 proportionate', t:'Folic acid 400 µg (higher if indicated); smoking/vaping cessation support; antenatal booking/midwife referral; whooping-cough and flu/COVID vaccination conversation in due course. Weave it in \u2014 do not let it swallow the cough consultation she actually booked.' },
        { h:'Never do', t:'Never issue a second antibiotic for a clear non-infective pattern; never stop or withhold asthma treatment in pregnancy out of misplaced caution; never let vaping go unasked because the record says "non-smoker"; never miss the worry under the antibiotic request.' },
        { h:'Safety-net & follow-up', t:'Escalation: worsening breathlessness/wheeze, any haemoptysis, fever, or peak-flow drop \u2192 review/urgent. Objective testing arranged; treatment trial reviewed at 2\u20136 weeks; the inhaler-safe-in-pregnancy reassurance given in writing; follow-up that holds both the cough and the pregnancy.' }
      ]
    }
  };

  /* ============ 36. TELEPHONE — Chronic cough, older adult, normal CXR ============ */
  const c36 = {
    id:'cough-older-cxr', title:'"But the X-ray was clear"', type:'telephone', duration:12,
    meta:{ age:64, sex:'M', setting:'Telephone — results call: chest X-ray normal, cough ongoing.', system:'Respiratory / NG12 lung cancer' },
    brief:'Mr Derek Halloran, 64, retired. Ex-smoker (gave up 8 years ago, 40 pack-year history). Worked 30 years as a building-trade laggard/pipe-fitter. Phoned for the result of a chest X-ray requested for an 11-week cough \u2014 reported as NORMAL. Records: weight steady, no documented haemoptysis. Booked this call expecting "the all clear".',
    script:{
      opening:'"Morning, doctor. I\u2019m ringing about my chest X-ray \u2014 the lady said it was clear, so that\u2019s good, isn\u2019t it? I just wanted to hear it from a doctor. Mind you, the cough\u2019s no better. Eleven weeks now. But if the picture\u2019s clean, I\u2019ll stop bothering you and crack on."',
      facts:[
        { topic:'The cough',           text:'Dry, persistent, 11 weeks, not really improving. If asked carefully: a little more breathless on the golf course than last year, puts it down to age. Voice a bit hoarse some mornings. No frank haemoptysis \u2014 but "maybe a fleck once, probably bit my cheek". Appetite ok; trousers "a notch looser, but I\u2019ve been trying".' },
        { topic:'The exposure history', text:'CRITICAL, only if occupational history is taken: 30 years lagging pipes and stripping old boiler insulation in the 1970s\u201380s \u2014 "blue asbestos, we used to have snowball fights with it, nobody told us". No mask. This is on no template and he won\u2019t volunteer it unless asked "what work did you do?"' },
        { topic:'Why he wants the all-clear', text:'HIDDEN AGENDA \u2014 his old workmate Tommy from the same crew died of mesothelioma three years ago \u2014 "took eighteen months, horrible". Derek has spent those three years quietly certain his turn is coming, and the "clear" X-ray is the permission he desperately wants to stop being afraid. He is fishing for reassurance, not testing.' },
        { topic:'The trap',            text:'He will gratefully accept a false all-clear and ring off relieved. The whole case turns on whether the clinician knows a normal CXR does NOT exclude lung cancer or mesothelioma and refuses to let him go on it.' },
        { topic:'What he wants',       text:'Officially: confirmation he\u2019s fine, so he can stop worrying. Actually \u2014 and against his own stated wish: to be taken seriously enough that someone won\u2019t let an asbestos-exposed ex-smoker with an 11-week cough off the hook on one normal X-ray.' },
      ],
      ice:{
        ideas:'A normal chest X-ray = the all clear = he can stop worrying and stop "bothering" the surgery.',
        concerns:'HIDDEN AGENDA \u2014 his crewmate Tommy\u2019s death from mesothelioma; three years of private dread that his own asbestos years will come for him. He wants the X-ray to end the fear, not to start an investigation.',
        expectations:'To be told he\u2019s fine and discharged. What he actually needs: a clinician who knows the X-ray\u2019s limits and acts on the persistent symptoms + the exposure he\u2019s never been asked about.'
      },
      cues:['"That\u2019s good, isn\u2019t it?" \u2014 a request for permission to stop worrying; don\u2019t grant it cheaply.','"The cough\u2019s no better" dropped in as an afterthought \u2014 the symptom that should override the normal film.','If asked about work: the asbestos pours out \u2014 the single most important fact, on no template, behind one question.']
    },
    checkpoints:[
      { dom:'tasks', text:'Does NOT issue a false all-clear: explicitly understands and communicates that a normal chest X-ray does not exclude lung cancer or mesothelioma, especially with persistent symptoms' },
      { dom:'tasks', text:'Takes the occupational history that no template prompted \u2014 "what work did you do?" \u2014 and elicits the 30-year asbestos exposure; recognises its weight' },
      { dom:'tasks', text:'Re-screens the symptoms actively and finds what the brief plays down: progressive exertional breathlessness, morning hoarseness, the possible fleck of haemoptysis, the looser trousers \u2014 i.e. unexplained persistent cough + weight change in a 40-pack-year ex-smoker' },
      { dom:'tasks', text:'States the NG12 pathway explicitly: persistent/unexplained cough, hoarseness, weight loss or appetite loss in a 40+ ex-smoker \u2192 OFFER URGENT (2WW) referral / urgent CT for suspected lung cancer despite the normal CXR; asbestos exposure + symptoms strengthens the case for CT and respiratory referral. 2WW · NICE NG12' },
      { dom:'tasks', text:'Frames further investigation (CT, respiratory clinic) honestly as the right next step \u2014 not as "just to be thorough" minimisation, and not as catastrophising' },
      { dom:'rto',   text:'Hears the fishing-for-reassurance and the dread beneath it; names Tommy gently if it surfaces and validates the fear without feeding or dismissing it' },
      { dom:'rto',   text:'Holds the difficult balance: he WANTS to be discharged; the clinician must override that wish kindly, explaining WHY the cough plus the asbestos years mean they can\u2019t simply sign him off' },
      { dom:'gs',    text:'Safety-nets and closes: the CT/2WW arranged with timescales, what the test is looking for stated honestly, red flags to call sooner (frank haemoptysis, worsening breathlessness), and a named follow-up \u2014 not "ring if you\u2019re worried"' },
    ],
    worked:[
      { lbl:'Don\u2019t sign him off',  txt:'"I can confirm the X-ray didn\u2019t show anything obvious \u2014 and I\u2019m really glad about that. But I\u2019m not going to tell you it\u2019s the all-clear, and here\u2019s why I owe you the honest version: a chest X-ray is a useful first look, but it misses things, and an eleven-week cough that\u2019s no better is exactly the kind of thing it can miss. So let\u2019s not stop here."' },
      { lbl:'The question no template asks', txt:'"Can I ask something the form never does \u2014 what work did you do, over the years? \u2026 Thirty years lagging pipes, stripping boiler insulation, in the seventies. Derek, that\u2019s blue asbestos, and that history matters enormously \u2014 it changes what I think we should do next. I\u2019m really glad I asked."' },
      { lbl:'Re-find the symptoms',  txt:'"Let me go back over a few things you skated past. The golf \u2014 more out of puff than last year? The voice, hoarse in the mornings? And the trousers a notch looser despite trying \u2014 how much, would you say? \u2026 Each one on its own is nothing. Together, in someone with your smoking and asbestos history, they\u2019re a pattern I have to act on."' },
      { lbl:'Name the pathway',      txt:'"So here\u2019s my plan, straight with you: a persistent cough, that weight, the hoarseness, in someone with your background \u2014 national guidance says I should arrange an urgent scan and a chest-specialist referral within two weeks, even with a normal X-ray. A CT sees what the plain picture can\u2019t. I\u2019m not telling you that you have something serious. I\u2019m telling you I\u2019d be failing you if I didn\u2019t look properly."' },
      { lbl:'Meet the dread',        txt:'"You came in hoping I\u2019d say \u2018all clear, off you go\u2019 \u2014 and I think I know why that mattered so much. \u2026 Tommy. Same crew, same asbestos, and you\u2019ve been carrying his ending around as your own for three years. I can\u2019t promise you what the scan shows. I CAN promise you that the way to honour that fear isn\u2019t to look away from it \u2014 it\u2019s to look, properly, now, while we have every option."' },
      { lbl:'Close with reliability', txt:'"You\u2019ll get a CT appointment and a chest-clinic date within two weeks; the surgery will chase it, not you. If you cough up any blood, or your breathing gets worse before then, you ring us the same day. And I\u2019ll personally look out for the results and call you. You haven\u2019t been bothering us, Derek \u2014 you\u2019ve been doing exactly the right thing."' },
    ],
    learning:'The whole case is a single refusal: do not convert a normal chest X-ray into a false all-clear. A plain film misses lung cancer and mesothelioma, and an 11-week unremitting cough in a 40-pack-year ex-smoker is NG12 territory regardless of that film. Two acts of clinical curiosity carry the marks: taking the occupational history no template prompts (30 years of asbestos behind one question), and actively re-screening the symptoms the patient minimises (progressive breathlessness, hoarseness, weight loss, a possible fleck of blood). State the NG12 pathway explicitly \u2014 urgent CT and 2WW respiratory referral despite the normal CXR \u2014 and do it while managing a man who is actively asking to be discharged because a dead workmate has made the truth unbearable. Override his wish kindly; meet the dread; close with reliability, not "ring if worried".',
    knowledge:{
      guideline:'NICE NG12 (suspected lung cancer) · BTS lung cancer & mesothelioma guidance · asbestos-related disease',
      points:[
        { h:'The headline: a normal CXR does not exclude cancer', t:'Plain chest radiography has meaningful false-negative rates for lung malignancy. Persistent or unexplained respiratory symptoms after a normal CXR must NOT be reassured away \u2014 they warrant reassessment and often CT. The reflex "X-ray clear, all good" is the error the station is built to catch.' },
        { h:'NG12 lung cancer pathway', t:'Offer an URGENT chest X-ray (2 weeks) in 40+ with unexplained: cough, fatigue, breathlessness, chest pain, weight loss, appetite loss \u2014 especially smokers/ex-smokers. Refer urgently (2WW) for suspected lung cancer if CXR suggests it OR if 40+ with unexplained haemoptysis. Where symptoms persist with a normal CXR in a high-risk patient, low-threshold CT and respiratory referral are appropriate.' },
        { h:'Asbestos changes the maths', t:'A significant asbestos exposure history (lagging, insulation, shipyards, construction pre-1990s) raises the index of suspicion for mesothelioma and asbestos-related lung cancer \u2014 latency is decades. It is rarely on any template; ASK "what work did you do?". Symptoms + exposure justify CT and respiratory referral even with a normal film.' },
        { h:'Re-screen actively', t:'Patients minimise: "a bit more breathless" (progressive dyspnoea), "trousers looser, but I\u2019ve been trying" (unintentional weight loss), "probably bit my cheek" (possible haemoptysis), morning hoarseness (recurrent laryngeal involvement). Aggregate the soft signs; in a high-risk patient they are a pattern, not noise.' },
        { h:'Communicate without false reassurance OR catastrophe', t:'"The X-ray didn\u2019t show anything obvious, but it can miss things, so we\u2019re not stopping here" \u2014 honest, calm, actionable. Avoid both "all clear" and "this is probably cancer". Frame CT as the right look, not as confirmation of doom.' },
        { h:'Never do', t:'Never discharge a persistent cough on one normal CXR; never skip the occupational history; never let the patient\u2019s wish to be reassured override the duty to investigate; never close with "ring if you\u2019re worried" instead of a dated pathway.' },
        { h:'Safety-net & follow-up', t:'2WW/CT arranged with timescales the patient hears; same-day triggers (frank haemoptysis, acute breathlessness); the surgery owns the chase; named clinician follow-up on results. Reliability is the antidote to three years of private dread.' }
      ]
    }
  };

  /* ============ 37. TELEPHONE — Haemoptysis in a palliative patient ============ */
  const c37 = {
    id:'haemoptysis-palliative', title:'The handkerchief', type:'telephone', duration:12,
    meta:{ age:70, sex:'M', setting:'Telephone — patient with known metastatic lung cancer, coughing blood.', system:'Palliative / Anticipatory care' },
    brief:'Mr Stanley Pike, 70, known metastatic non-small-cell lung cancer, on palliative oncology follow-up; treatment now best supportive care. DNACPR in place; community palliative team involved. Phones the surgery himself, voice steady: he has coughed up small amounts of bright-red blood three times since yesterday \u2014 "teaspoon, maybe two each time, into a hanky". No massive bleed. He is at home with his wife, Edith.',
    script:{
      opening:'"Hello doctor, sorry to trouble you. It\u2019s probably nothing to make a fuss about. I\u2019ve coughed up a bit of blood \u2014 yesterday and again this morning, just a teaspoon or so into my handkerchief. Bright red. I\u2019m not in a panic. I just\u2026 I suppose I wanted to know what it means, and what I\u2019m meant to do if it happens again."',
      facts:[
        { topic:'The bleed itself',     text:'Small volume: a teaspoon or two, bright red, three episodes in 24 hours. NOT a torrential or drowning bleed. Breathing currently no worse than his baseline. No chest pain, no fever, not light-headed. He is sitting up, talking in full sentences.' },
        { topic:'What he\u2019s read',    text:'If gently explored: he looked it up. He found the words "massive haemoptysis" and "catastrophic bleed". The teaspoon frightened him less than the search results. He has not told Edith what he read.' },
        { topic:'The real question',    text:'HIDDEN AGENDA \u2014 under "what do I do if it happens again" is the question he cannot say plainly: "Is this how I die \u2014 am I going to drown in my own blood, and will Edith have to watch?" The fear is not the volume of THIS bleed; it is the manner of the death he now believes is coming.' },
        { topic:'Edith',               text:'Only if asked who\u2019s with him and how she is: Edith is in the next room, "putting a brave face on". He is more frightened for her than for himself \u2014 the thing he most wants to prevent is her being alone with something terrifying and not knowing what to do.' },
        { topic:'What he wants',       text:'Officially: to know what the blood means and what to do next time. Actually: honesty about whether a big bleed is likely, a concrete plan so that he and Edith are not helpless if it comes, and reassurance that he will not be left to suffer or to frighten her.' },
      ],
      ice:{
        ideas:'"It\u2019s probably nothing to fuss about" \u2014 spoken, but he\u2019s read enough to fear it is the beginning of the end.',
        concerns:'HIDDEN AGENDA \u2014 the manner of his death: that he will have a catastrophic, drowning bleed, and that Edith will witness it alone and helpless. The volume of today\u2019s bleed is not the real concern; the imagined ending is.',
        expectations:'To understand what the blood means and what to do if it recurs. Underneath: honesty without abandonment, a crisis plan that protects Edith, and the promise he will not be left to suffer.'
      },
      cues:['"It\u2019s probably nothing to make a fuss about" \u2014 minimising that invites you to minimise too; don\u2019t take the bait, gently open it.','"What I\u2019m meant to do if it happens again" \u2014 the request for a crisis plan; this is the clinical heart of the call.','A pause, or a question about whether bleeds "get bigger" \u2014 the drowning fear surfacing; name it kindly and answer it honestly.']
    },
    checkpoints:[
      { dom:'tasks', text:'Assesses the bleed properly and proportionately by phone: volume, frequency, colour, trajectory, breathing vs baseline, haemodynamic symptoms (light-headedness), and whether this is small-volume (current) vs a herald/massive bleed \u2014 without medicalising a dying man into a needless admission' },
      { dom:'tasks', text:'Makes a proportionate management decision aligned with the agreed palliative ceiling of care and DNACPR: small-volume haemoptysis in advanced lung cancer is usually managed at home with the palliative team \u2014 NOT a reflex 999/2WW \u2014 while staying alert to reversible contributors (infection, anticoagulation)' },
      { dom:'tasks', text:'Activates/strengthens anticipatory care: contacts or escalates to the community palliative team and district nurses TODAY; ensures anticipatory ("just-in-case") medicines and a crisis plan are in place; reviews any anticoagulation' },
      { dom:'tasks', text:'Gives a concrete, usable crisis plan for a larger bleed: who to call (palliative line / DN, not necessarily 999), positioning, DARK towels/blankets to reduce the visual horror, crisis sedation (e.g. midazolam) available via the team, and that the aim is comfort, fast' },
      { dom:'rto',   text:'Does not collude with "it\u2019s nothing to fuss about" \u2014 gently opens the door to the real fear; names the drowning/manner-of-death dread when it surfaces' },
      { dom:'rto',   text:'Answers the unspeakable question honestly and compassionately: a sudden large bleed is possible but not certain; if it happens it is usually fast; and \u2014 crucially \u2014 he and Edith will not be left without help or pain relief' },
      { dom:'rto',   text:'Addresses Edith directly: that she will be told what to do, given the numbers to call, supported by the DN/palliative team, and not left alone and helpless \u2014 because protecting her is his actual priority' },
      { dom:'gs',    text:'Closes with a held plan: palliative team contacted today with timescale, anticipatory meds + crisis instructions confirmed, exactly what to do and who to ring for any recurrence, a named follow-up call, and the explicit promise of comfort and non-abandonment' },
    ],
    worked:[
      { lbl:'Decline the minimising', txt:'"You\u2019re not troubling me at all, and I don\u2019t think this is nothing \u2014 I think it\u2019s frightening, and you\u2019re being very calm about something that would unsettle anyone. Let me ask you a few practical things first, and then I want to answer the question I suspect is underneath the one you asked."' },
      { lbl:'Assess, proportionately', txt:'"A teaspoon or two, bright red, three times since yesterday \u2014 and your breathing right now, is it any worse than your usual? \u2026 No worse. Good. That tells me this is a small bleed, not an emergency this minute. Given everything we\u2019ve agreed about keeping you comfortable at home, this is something we manage here, with your palliative team \u2014 not a blue-light trip to a corridor."' },
      { lbl:'Open the real door',     txt:'"You asked what to do if it happens again \u2014 and I wonder if part of you has been reading about this and frightening yourself. \u2026 You found the words \u2018massive\u2019 and \u2018catastrophic\u2019. Stanley, can I ask you the question you haven\u2019t quite asked me? Are you frightened that this is how it ends \u2014 a big bleed \u2014 and that Edith will have to watch it alone?"' },
      { lbl:'The honest answer',      txt:'"Then here is the truth, because you\u2019ve earned honesty, not fog. A larger bleed is possible \u2014 I won\u2019t pretend it isn\u2019t. It is not certain, and many people never have one. If it did happen, it is usually quick, and it would not be a long, drawn-out struggle. And this is the part that matters most: you would not be left to suffer it, and Edith would not be left helpless. We plan for it so that it is never the two of you, alone, not knowing what to do."' },
      { lbl:'The crisis plan',        txt:'"So here\u2019s what I\u2019m putting in place today. Your palliative nurses will have medicine in the house \u2014 a sedative that works fast \u2014 so if a big bleed ever came, the priority is you being calm and comfortable within minutes. Practical things that genuinely help: dark towels by the bed, not white \u2014 it makes a frightening thing look far less so for Edith. One number to call, day or night \u2014 the palliative line, not 999. I\u2019ll make sure Edith knows exactly what to do and that her job is to ring and to hold your hand, nothing more."' },
      { lbl:'Hold them both',         txt:'"I\u2019m going to call your community palliative team straight after this and get the just-in-case medicines and the plan confirmed today, and the district nurse will visit. I\u2019ll ring you this evening to check it\u2019s all in place. You called to find out what to do \u2014 the answer is: nothing alone, ever. We\u2019ve got both of you."' },
    ],
    learning:'Small-volume haemoptysis in known advanced lung cancer is not a 2WW or a reflex 999 \u2014 it is a palliative crisis-planning consultation. Assess proportionately by phone (volume, trajectory, breathing vs baseline, haemodynamics), make a decision aligned with the agreed ceiling of care and DNACPR, screen for reversible contributors (infection, anticoagulation), and then do the real work: activate the community palliative team and anticipatory medicines TODAY, and build a concrete crisis plan \u2014 one number to call (not 999), crisis sedation in the house, dark towels to reduce the visual horror, positioning, comfort-first. The hidden agenda is the manner of death: the drowning fear and, above it, the terror of Edith witnessing it alone. Decline the patient\u2019s minimising, name the unspeakable question, answer it honestly (a big bleed is possible, not certain, usually fast, never unsupported), and protect the person he is most frightened for. Honesty without abandonment is the whole of it.',
    knowledge:{
      guideline:'NICE palliative care · Scottish Palliative Care Guidelines (haemorrhage) · anticipatory prescribing · ReSPECT/DNACPR',
      points:[
        { h:'Assess proportionately, decide by the ceiling of care', t:'Characterise haemoptysis: volume, frequency, colour, trajectory, breathing vs baseline, haemodynamic compromise. Distinguish small-volume (manage at home) from a herald or massive bleed. In a patient with an agreed palliative ceiling and DNACPR, the question is not "how do we investigate" but "how do we keep him comfortable and safe at home".' },
        { h:'Screen the reversible', t:'Even in palliation, check for treatable contributors: chest infection, anticoagulation (review/stop where appropriate), thrombocytopenia. Treating a reversible cause can be entirely consistent with comfort-focused care. Radiotherapy or tranexamic acid may have a palliative role \u2014 discuss with oncology/palliative specialists.' },
        { h:'Anticipatory care is the intervention', t:'Activate the community palliative team and district nurses; ensure anticipatory ("just-in-case") medicines are in the home; confirm the crisis plan and the ReSPECT/DNACPR documentation. The work of this consultation is making sure help and medication are physically present BEFORE they are needed.' },
        { h:'The crisis plan for a catastrophic bleed', t:'Concrete and humane: a single number to call (palliative line/DN, not 999, to avoid an unwanted resuscitation attempt); crisis sedation (e.g. midazolam) available in the house for rapid comfort; DARK towels/blankets to mask blood and reduce trauma for the witness; positioning (towards the bleeding side if known, or sitting); stay-with-them. The aim is rapid comfort and not dying alone or frightened.' },
        { h:'Name the unspeakable', t:'Patients minimise ("nothing to fuss about") while privately terrified of the manner of death \u2014 drowning, and a loved one witnessing it. Gently decline the minimising, name the fear, and answer honestly: a large bleed is possible but not certain, usually rapid if it occurs, and \u2014 the load-bearing promise \u2014 never unsupported or unmedicated.' },
        { h:'Care for the carer', t:'The dying patient\u2019s priority is often the person who would witness the death. Address Edith explicitly: she will be taught what to do, given the number, supported by the team, and her only jobs are to call and to be present. Reducing her helplessness is a clinical objective, not an afterthought.' },
        { h:'Safety-net & follow-up', t:'Palliative team contacted today with a timescale; anticipatory meds + written crisis instructions confirmed; clear recurrence plan and who to ring; named clinician follow-up call same day; the explicit, repeated promise of comfort and non-abandonment.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c35, c36, c37);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'cough-young-asthma': {
      ceg: ['Long-term conditions & cancer', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Amara Okafor', age: '29 years · female',
        pmh: ['Childhood asthma ("grew out of it")', 'Eczema, allergic rhinitis'],
        meds: ['Cetirizine 10 mg PRN'],
        allergy: 'NKDA',
        recent: 'Telephone 4/52 ago (locum): delayed-prescription antibiotic for "chest infection" — taken, no benefit. Non-smoker on record. FH: mother + brother asthma.',
        reason: 'Video — "cough 10 weeks, kept awake at night, wants antibiotics."'
      },
      timeMap: [
        { t:'0–3',  h:'Pattern, not infection', d:'Map the cough: 10 weeks, dry, wakes her 2–3am, worse cold air / laughing / PE. Atopy + family history. The first antibiotic failed because it was never infective.' },
        { t:'3–5',  h:'Differential + red flags', d:'Reflux, post-infective/pertussis, ACE-i (no); exclude haemoptysis, weight loss, fever, focal signs. Ask smoking AND vaping — kindly. The vape emerges.' },
        { t:'5–7',  h:'Open the real door',  d:'"What\u2019s worrying you most?" / "anything else on your mind?" — the space the pregnancy needs. Receive it as something entrusted, not a complication.' },
        { t:'7–10', h:'Pregnancy-safe plan',  d:'The key truth: uncontrolled asthma harms the baby, the inhaler does not. ICS + SABA, spirometry/peak flow, treatment trial. Folic acid, cessation as a gift, midwife booking.' },
        { t:'10–12',h:'Safety-net & close',   d:'What would change things (breathless, wheeze, blood, fever); review dated; inhaler-in-pregnancy reassurance in writing; follow-up holding cough + pregnancy.' }
      ],
      wordPics: {
        fail: 'Issues a second antibiotic for a clear non-infective cough; never asks about vaping because the record says non-smoker; misses the pregnancy entirely; or, worse, on hearing it, stops/withholds asthma treatment out of misplaced caution — endangering the very pregnancy she\u2019s frightened for.',
        pass: 'Recognises cough-variant asthma, holds the differential, treats with inhaled therapy + objective testing; asks about vaping; uncovers the pregnancy and adjusts; gives folic acid and booking advice.',
        exc:  'Names the pattern crisply and resists the antibiotic; makes vaping disclosure safe without shame; creates the exact opening that lets the pregnancy be said and receives it warmly; delivers the counter-intuitive, sleep-restoring truth that the danger is untreated asthma, not the inhaler; weaves proportionate pregnancy care (folic acid, cessation-as-gift, midwife) without hijacking the cough; closes with written reassurance and a follow-up that holds both.'
      },
      avoid: [
        { dont:'"I\u2019ll give you a stronger course of antibiotics to clear it properly this time."', instead:'"That first course did nothing because this isn\u2019t an infection — it\u2019s your asthma being twitchy again. The fix is an inhaler, not antibiotics, and I\u2019ll show you why that\u2019s good news."', why:'A second antibiotic medicalises a non-infective cough and misses the diagnosis the pattern is shouting.' },
        { dont:'"The record says you don\u2019t smoke, so we\u2019ll rule that out."', instead:'"Two questions I ask everyone, no judgement — do you smoke at all, or vape? … Thank you for telling me; vaping irritates exactly these airways, so it\u2019s genuinely relevant here."', why:'"Non-smoker" on a template hides vaping; only an open, shame-free question surfaces a real and relevant exposure.' },
        { dont:'"Now you\u2019re pregnant, let\u2019s stop the inhalers to be on the safe side."', instead:'"The danger in pregnancy isn\u2019t the inhaler — it\u2019s UNTREATED asthma. A baby needs a mum who can breathe. These inhalers are recommended in pregnancy; what helps the baby most is stopping the vape, and I\u2019ll help you do that."', why:'Stopping asthma treatment in pregnancy is the genuinely dangerous move and the exact error her fear invites.' }
      ]
    },

    'cough-older-cxr': {
      ceg: ['Long-term conditions & cancer', 'Older adults'],
      stem: {
        name: 'Derek Halloran', age: '64 years · male',
        pmh: ['Ex-smoker (stopped 8 yrs ago, ~40 pack-years)', 'Occupational asbestos exposure — NOT on template'],
        meds: ['Amlodipine 5 mg', 'Atorvastatin 20 mg'],
        allergy: 'NKDA',
        recent: 'Chest X-ray (for 11-week cough) reported NORMAL. Expecting "the all clear". Weight not formally tracked.',
        reason: 'Telephone — results call: chest X-ray normal, cough ongoing.'
      },
      timeMap: [
        { t:'0–2',  h:'Don\u2019t sign him off', d:'He wants "all clear, off you go". Confirm the film didn\u2019t show anything obvious — and explicitly refuse to call it the all-clear, because an 11-week cough is exactly what a CXR can miss.' },
        { t:'2–5',  h:'The history no template asks', d:'"What work did you do?" — 30 years lagging pipes, blue asbestos, no mask. The single most important fact, behind one question. Re-screen the minimised symptoms: breathlessness, hoarseness, weight, the fleck of blood.' },
        { t:'5–8',  h:'Name the NG12 pathway', d:'Persistent cough + weight loss + hoarseness in a 40-pack-year ex-smoker with asbestos exposure → urgent CT + 2WW respiratory referral DESPITE the normal CXR. State it plainly, honestly, neither minimising nor catastrophising.' },
        { t:'8–10', h:'Meet the dread',      d:'The fishing-for-reassurance and Tommy\u2019s mesothelioma death behind it. Validate the fear; explain that honouring it means looking, not looking away.' },
        { t:'10–12',h:'Reliable close',       d:'CT + chest clinic within 2 weeks, surgery chases; same-day triggers (frank blood, worse breathing); named follow-up on results. Not "ring if worried".' }
      ],
      wordPics: {
        fail: 'Says "X-ray\u2019s clear, that\u2019s the all-clear" and discharges him — the textbook trap; never asks his occupation, so the asbestos is never known; accepts the minimised symptoms at face value; lets a frightened high-risk man off the hook on one normal film.',
        pass: 'Knows a normal CXR doesn\u2019t exclude cancer; re-screens symptoms; arranges CT / respiratory referral; states the NG12 pathway; safety-nets with timescales.',
        exc:  'Refuses the false all-clear out loud and explains why; takes the occupational history no template prompts and recognises the weight of 30 asbestos years; aggregates the minimised soft signs into a pattern; states the NG12 2WW/CT pathway explicitly and calmly; uncovers and meets the dread behind the reassurance-seeking (Tommy); overrides his wish to be discharged kindly; closes with a dated pathway the surgery owns and a personal follow-up.'
      },
      avoid: [
        { dont:'"Good news — your chest X-ray is clear, so there\u2019s nothing to worry about."', instead:'"The X-ray didn\u2019t show anything obvious, and I\u2019m glad — but it can miss things, and an 11-week cough that\u2019s no better is exactly what it can miss. So we\u2019re not stopping here."', why:'"X-ray clear = all clear" is the precise reasoning error that lets a curable cancer walk out of the consultation.' },
        { dont:'(never asking) — accepting the symptoms and history as the template presents them.', instead:'"Can I ask something the form never does — what work did you do over the years? … Thirty years lagging pipes. Derek, that\u2019s asbestos, and it changes what we do next."', why:'The asbestos exposure is on no template and he won\u2019t volunteer it; the single most important fact lives behind one curious question.' },
        { dont:'"Try not to worry, it\u2019s very unlikely to be anything serious."', instead:'"I\u2019m not telling you that you have something serious — I\u2019m telling you I\u2019d be failing you if I didn\u2019t look properly, given your cough, your weight and your asbestos years. A CT sees what the plain picture can\u2019t."', why:'Blanket reassurance to a high-risk patient both feeds the avoidance he wants and breaches NG12 — name the action, not false odds.' }
      ]
    },

    'haemoptysis-palliative': {
      ceg: ['Older adults', 'Urgent & unscheduled care'],
      stem: {
        name: 'Stanley Pike', age: '70 years · male',
        pmh: ['Metastatic non-small-cell lung cancer — best supportive care', 'DNACPR / ReSPECT in place; community palliative team involved'],
        meds: ['MST (modified-release morphine)', 'Oramorph PRN', 'Dexamethasone', 'No anticoagulant'],
        allergy: 'NKDA',
        recent: 'Three episodes small-volume haemoptysis (teaspoon, bright red) in 24h. At home with wife Edith. Breathing at baseline.',
        reason: 'Telephone — patient phoning himself: coughing blood, "what do I do if it happens again?"'
      },
      timeMap: [
        { t:'0–3',  h:'Decline the minimising', d:'"Nothing to fuss about" — don\u2019t collude. Assess proportionately: volume, trajectory, breathing vs baseline, light-headedness. Small-volume, stable: managed at home, not blue-lighted.' },
        { t:'3–5',  h:'Decide by the ceiling',  d:'Aligned with the palliative ceiling + DNACPR: home management with the palliative team, not 999/2WW. Screen reversibles (infection, anticoagulation — none here).' },
        { t:'5–8',  h:'Name the unspeakable',  d:'He\u2019s read "catastrophic bleed". Open it: "are you frightened this is how it ends, and that Edith will watch it alone?" The manner of death is the real call.' },
        { t:'8–10', h:'Honesty + crisis plan',  d:'Honest: a big bleed is possible, not certain, usually fast, NEVER unsupported. Concrete plan: one number (not 999), crisis sedation in the house, dark towels, positioning, comfort-first.' },
        { t:'10–12',h:'Hold them both',         d:'Palliative team + DN contacted TODAY; anticipatory meds confirmed; Edith taught what to do; evening follow-up call; the promise — nothing alone, ever.' }
      ],
      wordPics: {
        fail: 'Reflexively sends a dying man with a DNACPR to A&E by ambulance for a teaspoon of blood; or coldly says "that\u2019s expected with your cancer" and rings off — colluding with the minimising and abandoning him with his real fear; no crisis plan, no anticipatory meds, Edith left helpless.',
        pass: 'Assesses proportionately, keeps him home in line with the ceiling of care, activates the palliative team and anticipatory meds, gives a crisis plan and safety-net, follows up.',
        exc:  'Declines the minimising and assesses calmly; decides by the agreed ceiling, not by reflex; names the unspeakable manner-of-death fear and answers it with honesty AND non-abandonment; builds a concrete, humane crisis plan (one number not 999, crisis sedation, dark towels, positioning); addresses Edith directly as the person he\u2019s most frightened for; contacts the palliative team today and promises a same-day follow-up — honesty without abandonment, start to finish.'
      },
      avoid: [
        { dont:'"Coughing blood is serious — I\u2019m sending an ambulance to get you checked at hospital."', instead:'"A small bleed like this, with your breathing no worse than usual, is something we manage at home with your palliative team — not a blue-light trip to a corridor, which isn\u2019t what we agreed matters to you."', why:'A reflex admission against an agreed palliative ceiling and DNACPR inflicts exactly the institutional death he\u2019s planned to avoid.' },
        { dont:'"I\u2019m afraid some bleeding is expected with this kind of cancer."', instead:'"Can I ask the question you haven\u2019t quite asked — are you frightened this is how it ends, and that Edith will have to watch it alone? … Then here\u2019s the honest truth, and the promise that goes with it."', why:'The clinically-true throwaway colludes with his minimising and abandons him alone with the drowning fear that actually prompted the call.' },
        { dont:'"Try not to think about the worst-case scenario — let\u2019s hope it doesn\u2019t happen."', instead:'"A larger bleed is possible — I won\u2019t pretend otherwise — it\u2019s not certain, it\u2019s usually quick, and you would never be left to suffer it or Edith left helpless. We plan for it precisely so it\u2019s never the two of you alone, not knowing what to do."', why:'"Don\u2019t think about it" leaves the couple unprepared; honesty plus a concrete crisis plan is what actually removes the terror.' }
      ]
    }
  });

})();
