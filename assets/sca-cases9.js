/* ============================================================
   Reasoning GP — Case Library batch 7: "Chest pain & the ECG"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   Pushes into SCA_CASES + SCA_EXTRAS.
   Load AFTER sca-cases.js / 2\u20138 and sca-extras.js.
   ============================================================ */

(function(){

  /* ============ 31. TELEPHONE — Acute chest pain, the HGV licence ============ */
  const c31 = {
    id:'chest-acute-hgv', title:'Chest pain, engine running', type:'telephone', duration:12,
    meta:{ age:58, sex:'M', setting:'Telephone — urgent same-day slot, patient calling from his lorry cab.', system:'Cardio / Urgent' },
    brief:'Mr Barry Quinn, 58, HGV driver. Urgent telephone slot, booked 40 minutes ago: "bad indigestion, wants something strong". PMH: type 2 diabetes (metformin), smoker 20/day, BMI 33. Last seen 11 months ago. Reception note: "sounded breathless, said he\u2019s parked up in a layby on the A38".',
    script:{
      opening:'(Engine noise. Breathing audible.) "Doctor — sorry about the racket, I\u2019m in a layby. Look, it\u2019s just heartburn, but it\u2019s a bad one. Started about an hour ago, middle of me chest, heavy like. I\u2019ve had me Rennies, no joy. I\u2019ve got a delivery in Plymouth by four and points on a late load, so — can you send something strong to a chemist down the road? That\u2019s all I need."',
      facts:[
        { topic:'The pain',          text:'Central, heavy, "like a strap pulled tight", started ~1 hour ago while winding the trailer legs down. Goes into the left arm "a bit" and the jaw "if I think about it". Sweaty — "it\u2019s warm in the cab". Slightly sick. Still present NOW, 6/10.' },
        { topic:'On exertion',       text:'Looking back, if asked: three or four "heartburn" episodes over a fortnight — always loading or climbing into the cab, always settling with rest in minutes. Never told anyone.' },
        { topic:'Risk',              text:'Diabetic 8 years, smoker since 16, father had "heart trouble" in his 60s, no idea of his own cholesterol. Carries no GTN — never prescribed.' },
        { topic:'The licence',       text:'The hidden engine, reachable if the resistance is explored: he knows EXACTLY what this might be. His mate Tony "had a stent and the DVLA had his Group 2 licence off him for months". Mortgage, two car finances, a daughter mid-divorce living back at home. "If I ring 999 from a layby, that\u2019s me finished, isn\u2019t it?" The indigestion story is a wall against losing the wheel.' },
        { topic:'Right now',         text:'Alone, parked safely, engine on for the air-con. Hauler\u2019s office number to hand. Aspirin: there\u2019s a packet in the glove box from his wife\u2019s handbag.' },
        { topic:'What he wants',     text:'A strong antacid and to make Plymouth by four. What he needs: 999 now, aspirin now, the licence fear named and answered honestly — and the dispatcher called so the load stops being his problem.' },
      ],
      ice:{
        ideas:'Officially heartburn. Actually — he\u2019s watched the adverts, he knows. "Knowing" and "admitting" are different rooms.',
        concerns:'HIDDEN AGENDA — the Group 2 licence. Tony\u2019s stent cost him his HGV entitlement for months; Barry\u2019s whole financial house sits on the wheel. He is minimising a heart attack to protect a payslip.',
        expectations:'A prescription to a chemist en route. Needs converting, fast and warmly, to: ambulance to the layby, aspirin chewed, dispatcher told, and the truth about what the DVLA actually does — and doesn\u2019t — take.'
      },
      cues:['"Heavy, like a strap" + sweating + nausea, narrated as heartburn — the words diagnose what the patient won\u2019t.','"I\u2019ve got a delivery in Plymouth by four" — the deadline doing the deciding; whose voice is really setting the plan?','"That\u2019s me finished, isn\u2019t it?" — the licence terror surfacing for one unguarded second; this is the consultation.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises ACS on the story within minutes — central heavy pain >15 min with radiation, sweating, nausea, in a diabetic smoker — and does NOT let the "heartburn" frame or the antacid request slow the call' },
      { dom:'tasks', text:'Harvests the crescendo history (exertional episodes over a fortnight, rest-relieved) and says what it means: unstable pattern, today is the day it declares itself' },
      { dom:'tasks', text:'Acts down the phone: 999 arranged from THIS call (or stays on the line while he calls), exact location pinned, aspirin 300 mg chewed now, engine off, cab door unlocked, sit — not lie flat — and nobody drives anywhere' },
      { dom:'tasks', text:'Solves the practical chain that\u2019s blocking him: the dispatcher/hauler called (by Barry or the GP\u2019s offer), the load and the lorry made someone else\u2019s problem in two sentences' },
      { dom:'rto',   text:'Hears the resistance as fear, not stubbornness — explores what an ambulance would cost him, and finds Tony and the licence' },
      { dom:'rto',   text:'Answers the licence fear with honest specifics: yes, Group 2 has rules after a cardiac event — typically a suspension with REINSTATEMENT after assessment (commonly ~6 weeks post-event/treatment if tests are satisfactory), not the end of his career; a dead or disabled driver loses the licence permanently' },
      { dom:'rto',   text:'Keeps the tone alongside him, not against him: no lecturing about smoking or sugar mid-crisis — that conversation is named for AFTER, deliberately' },
      { dom:'gs',    text:'Safety-nets the next ten minutes concretely: if he becomes more breathless, faint or the pain escalates while waiting — back on the phone with 999; confirms the ambulance ETA, stays reachable, and books his own follow-up commitment ("when the dust settles, you and I talk about the fortnight you didn\u2019t ring")' },
    ],
    worked:[
      { lbl:'Rename it, kindly',      txt:'"Barry, I\u2019m going to be straight because you\u2019d see through anything else: what you\u2019re describing — heavy, strap-tight, into the arm, sweating, in a man with diabetes who smokes — that\u2019s not a Rennies problem. I think your heart is struggling right now, and the next hour matters."' },
      { lbl:'The fortnight',          txt:'"And those \u2018heartburn\u2019 turns every time you load up, settling when you rest — that\u2019s a heart asking for help for two weeks. Today it stopped asking politely."' },
      { lbl:'The licence, honestly',  txt:'"You said it yourself — \u2018that\u2019s me finished\u2019. Let me give you the actual rules, not Tony\u2019s version: after a heart event the DVLA pauses a Group 2 licence and gives it BACK after the checks — for most men that\u2019s weeks, not forever. You know what does end a driving career? Not pulling over. The licence has a comeback. You might not."' },
      { lbl:'The load, solved',       txt:'"Plymouth is not your problem any more — it\u2019s your dispatcher\u2019s, and that\u2019s one phone call: \u2018driver\u2019s been taken unwell, lorry\u2019s secure in a layby at [location]\u2019. Want me to stay on while you make it, or shall we do 999 first? Either way, both calls happen in the next five minutes."' },
      { lbl:'The instructions',       txt:'"While we wait: engine off, door unlocked, sit upright in the seat. That aspirin from the glove box — chew one whole 300, don\u2019t swallow it down with water, chew it. It thins the blood at the exact spot that\u2019s struggling. The crew will want to know the time you took it — 999 now, on this line, I\u2019m not hanging up."' },
      { lbl:'After, promised',        txt:'"And Barry — when this settles, you and I are having the unhurried version of this conversation: the smokes, the sugar, the two weeks of warnings. Not today. Today you did the right thing by ringing ANYONE — even if you did try to order antacids for a heart attack."' },
    ],
    learning:'Telephone chest-pain triage is diagnosis by ear: central heavy pain with autonomic features in a high-risk patient is ACS regardless of the word the patient chooses — and a crescendo of exertional episodes is the two-week warning. The clinical actions are scripted (999 from the call, location, aspirin 300 mg chewed, nobody drives); the consultation\u2019s real work is the hidden agenda — here the Group 2 licence, answered with honest DVLA specifics (pause-and-reinstate, not career death) and the practical chain (dispatcher, load, lorry) solved so the patient can afford to say yes to the ambulance.',
    knowledge:{
      guideline:'NICE CG95 chest pain · MI: secondary care pathways · DVLA Group 2 cardiac standards',
      points:[
        { h:'Diagnose with your ears', t:'Heavy/tight central pain >15 minutes + radiation + sweating/nausea in a diabetic smoker = ACS until proven otherwise; "heartburn" is the commonest costume. Crescendo angina (new exertional pain, increasing frequency, on minimal exertion) is unstable — same lane. Diabetics may have muted or atypical pain; weight the autonomic features.' },
        { h:'Red flags & same-day action', t:'Ongoing pain now = 999 from this call — not "make your way to A&E" (he must not drive; a layby arrest at the wheel kills). Aspirin 300 mg chewed unless true allergy. Location pinned, door unlocked, upright. Stay on the line or confirm the handover.' },
        { h:'The DVLA answer — honest specifics', t:'Group 2 (HGV/PCV): after ACS/stent, licence is suspended and can be re-licensed after a satisfactory assessment — typically \u22656 weeks post-event with adequate LV function and a negative/low-risk functional test per current DVLA standards. It is a pause with a documented route back. Group 1 rules are gentler (typically 1 week post-successful PCI). Never bluff the details — name the route, promise the specifics in writing.' },
        { h:'Manage the blockers', t:'The deadline, the load, the lorry, the dispatcher: each is one sentence and each is louder than chest pain to a man whose mortgage rides the wheel. Solve them explicitly IN the call — disposition advice that ignores the patient\u2019s economics gets politely ignored.' },
        { h:'Never do', t:'Never prescribe the antacid "to see if it helps" (the test of treatment costs the myocardium its hour); never accept "I\u2019ll drive myself, it\u2019s ten minutes"; never deliver the smoking/diabetes lecture mid-crisis — name it for later, deliberately.' },
        { h:'Safety-net & follow-up', t:'Worsening pain/breathlessness/faintness while waiting → 999 again immediately; ETA confirmed; aspirin time logged for the crew; the GP\u2019s after-the-dust follow-up promised — the fortnight of warnings he sat on is the relapse-prevention conversation, and it belongs to a calmer day.' },
        { h:'Marking edge', t:'Three cues: the strap-and-sweat description wearing a heartburn costume, the Plymouth deadline, and "that\u2019s me finished, isn\u2019t it?" The Clear Pass diagnoses past the costume in minute two, answers Tony\u2019s licence myth with real DVLA architecture, solves the load in one sentence — and gets a frightened man to say yes to the ambulance while the engine\u2019s still warm.' }
      ]
    }
  };

  /* ============ 32. VIDEO — Exertional tightness in the builder ============ */
  const c32 = {
    id:'angina-builder', title:'Tight chest on the third floor', type:'video', duration:12,
    meta:{ age:47, sex:'M', setting:'Video consultation — booked for "chest muscle strain".', system:'Cardio / Stable chest pain' },
    brief:'Mr Marek Dolan, 47, self-employed builder. Booked a video slot for "pulled chest muscle". PMH: nil on file — has attended twice in 15 years. Smoker 15/day. BP unrecorded for 6 years. Reception note: "wants a quick one, on a job". He joins from a half-renovated kitchen, dust sheet behind him, kettle on a workbench.',
    script:{
      opening:'"Won\u2019t keep you, doctor — I\u2019ve pulled something in me chest, carrying plasterboard up to a third floor. Gets tight across here (draws a flat hand across the sternum) when I\u2019m on the stairs with a load, eases off when I have a breather. Three weeks now. I just need to know what to rub on it, because I\u2019ve got this job running over and I can\u2019t be stopping."',
      facts:[
        { topic:'The pattern',       text:'Tight band across the chest, comes ON with exertion (stairs + load, wheelbarrow runs, the cold morning start), eases within 2\u20133 minutes of rest. No pain at rest, ever. Three weeks, getting easier to bring on — "used to take three flights, now it\u2019s one and a bit".' },
        { topic:'Not muscular',      text:'If examined verbally: no tender spot, not worse on twisting, pressing or deep breath. Sometimes a bit breathless WITH the tightness, occasionally "a heaviness" up the throat. Never sharp.' },
        { topic:'Risk',              text:'Smoker since 15. Bacon-roll-and-Monster-energy breakfasts. Father: "heart attack at 52, dead at 61". Uncle: bypass. Never had BP or cholesterol checked "since the wife was pregnant". No diabetes known.' },
        { topic:'The economics',     text:'Self-employed, two labourers paid weekly out of his invoices, a kitchen client already complaining about delays, no income protection. "If I\u2019m signed off, three families don\u2019t eat. Simple as."' },
        { topic:'The fear',         text:'Buried, reachable through the father: he was 18 when his dad had the heart attack at 52 — "watched him become an armchair". Marek is 47. He has been doing the same arithmetic as every man with a dead father does, and booked it as a muscle strain because the other word makes it real. "I called it a strain because I wanted you to agree with me."' },
        { topic:'What he wants',     text:'Deep Heat and dispensation. What he needs: the honest name (angina until cleared), urgent rapid-access chest pain clinic, GTN + aspirin + statin started, a clear can-work/can\u2019t-do line that keeps his crew running, and the 999 rules.' },
      ],
      ice:{
        ideas:'Officially a pulled muscle. He has noticed it\u2019s the EXERTION pattern his father described at the kitchen table thirty years ago.',
        concerns:'HIDDEN AGENDA — his father: MI at 52, "became an armchair", dead at 61. Marek is 47 and counting. He named it a strain so the doctor would agree and the arithmetic could stop. Second layer: three families eat off his invoices — being "signed off" is the disaster scenario he\u2019s pre-refusing.',
        expectations:'A liniment recommendation and permission to crack on. Needs replacing with: a referral he\u2019ll actually attend (because the work question is answered), tablets that start today, and an honest line between "keep working" and "the symptoms that stop everything".'
      },
      cues:['"Eases off when I have a breather" — the effort-relief signature, offered as evidence of a muscle; it\u2019s the diagnosis.','"Used to take three flights, now it\u2019s one and a bit" — the threshold falling; crescendo hiding in a throwaway.','"I called it a strain because I wanted you to agree with me." — the confession, if trust is built; the consultation\u2019s hinge.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises classic stable angina from the story — constricting exertional discomfort, relieved by rest within minutes — and says the word rather than colluding with "strain"; spots the FALLING threshold and weighs it honestly (heading toward unstable; lowers the bar for urgency)' },
      { dom:'tasks', text:'Excludes the muscle properly and visibly (no tenderness, not positional/pleuritic) so the reframe is earned, not asserted — and screens the rest-pain question explicitly because its answer changes the lane' },
      { dom:'tasks', text:'Refers urgently to the rapid-access chest pain clinic and starts treatment TODAY: aspirin 75, statin, GTN spray with teaching (sit down, one spray, repeat at 5 min, 999 if pain persists after second spray/15 min), BP + bloods + HbA1c + ECG arranged this week' },
      { dom:'tasks', text:'Gives a usable work prescription, not a vague sick note: keep ground-level supervising and light work; STOP the heavy-load stair carries and solo wheelbarrow runs until the clinic clears him; the labourers carry, he points — framed as protecting the business, not pausing it' },
      { dom:'rto',   text:'Finds the father behind the booking — asks what chest pain means in his family — and receives the armchair story and the arithmetic without flinching' },
      { dom:'rto',   text:'Answers the arithmetic with the 2026 difference: his father\u2019s generation got the diagnosis at the infarct; Marek is getting his at the WARNING — stents, statins and clinics exist precisely so 47 doesn\u2019t become 52' },
      { dom:'rto',   text:'Treats the economics as clinical content: the three families named, the can-do list built around keeping the job alive — because a plan he can\u2019t afford is a plan he won\u2019t follow' },
      { dom:'gs',    text:'Safety-nets in plain builder\u2019s terms: pain at REST, pain lasting >15 minutes, pain not settling after GTN \u00d72, new sweating/sickness with it — 999, from the scaffold if necessary; clinic referral timescale named; GP review booked for results + the smoking conversation he\u2019s now actually ready for' },
    ],
    worked:[
      { lbl:'The earned reframe',     txt:'"I\u2019ve listened and I\u2019ve checked the muscle story properly — no sore spot, no catch on twisting or breathing. So I owe you honesty: tightness that comes with effort and melts with rest isn\u2019t a strain. That\u2019s the heart\u2019s own warning signal — angina — and the good news hiding in that sentence is that warnings come BEFORE damage."' },
      { lbl:'The falling threshold',  txt:'"One thing you said matters more than the rest: three flights three weeks ago, one and a bit now. The bar is dropping. That\u2019s the heart telling us the timetable isn\u2019t leisurely — so neither will we be."' },
      { lbl:'The father, answered',   txt:'"You were eighteen when your dad had his at fifty-two — and you\u2019re forty-seven doing that maths on every stair run. Here\u2019s the difference you\u2019re not counting: he got his diagnosis the day the damage happened. You\u2019re getting yours at the warning shot. The clinic, the tablets, the camera test if they want one — that whole machine exists so your kids never watch you become an armchair."' },
      { lbl:'Treatment today',        txt:'"Three things start today, before the clinic even sees you: a baby aspirin to keep the blood slippery, a statin to calm the artery walls, and a little spray for under the tongue. The spray\u2019s rules are simple: tightness comes — sit down, one spray, five minutes; not settled — second spray; still there at fifteen — that\u2019s 999, no debate, even from a scaffold."' },
      { lbl:'The work prescription',  txt:'"I\u2019m not signing you off — I\u2019m re-deploying you. You point, the lads carry. Ground floor runs the job fine for a few weeks; what it can\u2019t survive is you face-down in a stairwell with a sheet of plasterboard. Protecting the foreman IS protecting the three families."' },
      { lbl:'Safety-net',             txt:'"Hard lines, write them on a fag packet if that\u2019s what\u2019s handy: pain at rest, pain past fifteen minutes, pain the spray can\u2019t shift, or sweating and sick with it — 999. The clinic letter will land within the fortnight; bloods and a tracing this week; you and me again when the results are in. And bring the rollies to that one — we\u2019ll have something to talk about."' },
    ],
    learning:'Classic stable angina is a story, not a test: constricting exertional discomfort relieved by rest within minutes, in a smoker with premature paternal CAD — name it, don\u2019t collude with "strain". A falling exertional threshold is crescendo physiology and compresses the timetable. Management starts in the consultation (aspirin, statin, GTN with the \u00d72-then-999 teaching, RACPC referral, BP/bloods/ECG) — and the work prescription is clinical content: a self-employed man follows the plan that keeps his crew paid ("re-deployed, not signed off"). The hidden agenda is the father — MI at 52, the armchair, the arithmetic — answered with the warning-vs-damage distinction that makes attendance feel like winning, not surrendering.',
    knowledge:{
      guideline:'NICE CG95 / NG185 stable chest pain & angina · CKS angina · RACPC pathways',
      points:[
        { h:'Diagnose by anatomy of the story', t:'Typical angina = 3 of 3: constricting discomfort (chest/neck/jaw/arms), brought on by exertion, relieved by rest or GTN within ~5 minutes. Marek scores 3/3 with risk factors (smoking, FH <55 in father). Non-anginal features he lacks: positional, pleuritic, tender, seconds-long stabs.' },
        { h:'Red flags — the lane changes', t:'Pain at rest or >15 minutes, rapidly falling threshold, new pain on minimal exertion, autonomic features = unstable territory → same-day assessment/999 coaching, not routine RACPC. His "three flights to one and a bit" sits at the urgent end of stable — say so and act accordingly.' },
        { h:'Investigate', t:'RACPC referral (CT coronary angiography is the NICE first-line anatomical test for typical angina); this week in primary care: ECG, BP, lipids, HbA1c, FBC, U&E, weight. Do not wait for results to start secondary-prevention basics.' },
        { h:'Manage from today', t:'Aspirin 75 mg, high-intensity statin, GTN spray WITH the teaching (sit, spray, 5 min, repeat, 999 at 15), beta-blocker or CCB as first-line antianginal per pathway; smoking cessation offered with timing chosen kindly; the work prescription specific enough to follow (no loaded stairs; supervise).' },
        { h:'Never do', t:'Never collude with the muscular label to preserve the mood; never sign him fully off when a re-deployment keeps both income and adherence alive; never hand over GTN without the \u00d72-then-999 script — the spray without the rules is a delay machine.' },
        { h:'Safety-net & follow-up', t:'999 lines in his own register (rest pain, 15 minutes, spray-proof pain, sweat-and-sick); RACPC timescale named; results review booked; the cessation conversation scheduled for when the fear is working FOR him — post-diagnosis is the most quit-receptive week of a smoker\u2019s life.' },
        { h:'Marking edge', t:'The hinge is "I called it a strain because I wanted you to agree with me." Agree, and the station fails in one sentence. The Clear Pass earns the reframe (checks the muscle properly first), converts the father\u2019s armchair into the reason to attend, re-deploys rather than signs off — and sends him back to the kitchen job with a spray, three tablets, and hard 999 lines he\u2019ll actually obey.' }
      ]
    }
  };

  /* ============ 33. TELEPHONE — Incidental AF, the warfarin ghost ============ */
  const c33 = {
    id:'af-incidental', title:'The watch that wouldn\u2019t settle', type:'telephone', duration:12,
    meta:{ age:72, sex:'F', setting:'Telephone — results discussion: ECG confirms atrial fibrillation.', system:'Cardio / Anticoagulation' },
    brief:'Mrs Sylvia Beech, 72, retired florist. Her grandson\u2019s Christmas-gift smartwatch flagged an "irregular rhythm" repeatedly; practice ECG last week confirms ATRIAL FIBRILLATION, rate 88. She feels entirely well — "not a flutter". PMH: hypertension (amlodipine), no diabetes, no prior stroke/TIA. BP 138/82. You are ringing with the result. Records: husband Gordon died 2021 — on warfarin for a metallic valve; fatal intracranial bleed after a fall on the ice.',
    script:{
      opening:'"Hello doctor — yes, I\u2019ve been expecting your call. Before you start: I feel perfectly well. The only thing wrong with me is a watch my grandson set up that won\u2019t stop tutting at me. If you\u2019re ringing to tell me my heart\u2019s skipping about a bit at my age — well, whose isn\u2019t? I\u2019ve buried a husband and kept a shop for forty years; a wobbly tick doesn\u2019t frighten me."',
      facts:[
        { topic:'Symptoms',          text:'Genuinely none: no palpitations, breathlessness, chest pain, dizziness or blackouts. Walks the dog 40 minutes daily, gardens, drives to the garden centre. "Fit as a flea, bar the blood pressure."' },
        { topic:'The numbers',       text:'If discussed: AF confirmed on 12-lead, rate 88, BP 138/82 on amlodipine. CHA\u2082DS\u2082-VASc: age 72 (+1... actually 65\u201374 = 1), female (+1), hypertension (+1) = 3. ORBIT/bleeding: no anaemia, no renal disease, no falls history herself, no antiplatelets.' },
        { topic:'Gordon',            text:'The buried layer, surfacing the moment anticoagulation is mentioned: Gordon was on warfarin for his valve. January 2021: slipped on ice outside the butcher\u2019s, "a silly little fall, didn\u2019t even break his glasses" — dead in three days from a bleed on the brain. "The blood thinner killed him, doctor. The fall was nothing. It was the warfarin. And now you want to put ME on it."' },
        { topic:'Her plan',          text:'Polite refusal, pre-loaded: "I\u2019ll take an aspirin if it makes you happy." Has already mentioned it to her neighbour ("Eileen says her cardiologist swears by aspirin").' },
        { topic:'What she doesn\u2019t know', text:'That untreated AF\u2019s strokes are typically LARGE (a third die, a third are left dependent); that aspirin gives near-zero AF protection with real bleed risk; that DOACs are not warfarin — no INR clinics, lower intracranial bleed rates, and her risk profile is favourable.' },
        { topic:'What she wants',    text:'To be left alone with her dog and her garden. What she needs: the stroke maths made personal and honest, Gordon\u2019s death respected AND distinguished, the aspirin myth retired, and a decision SHE owns — possibly not today.' },
      ],
      ice:{
        ideas:'"A wobbly tick at my age" — normal wear, over-monitored by a fussy watch. Aspirin would be a reasonable compromise.',
        concerns:'HIDDEN AGENDA — Gordon. Warfarin, the ice, the bleed, three days. In her ledger the anticoagulant is the murder weapon, and the doctor on this phone is proposing it for her. She has already decided to refuse; the call is her being polite about it.',
        expectations:'To decline nicely and get back to the garden. Needs: unrushed honesty, the distinction between Gordon\u2019s situation and hers made precisely, the aspirin escape-hatch closed kindly, and genuine permission to take time — a second call, the grandson involved if she wishes.'
      },
      cues:['"Whose isn\u2019t, at my age?" — normalisation as armour; the watch is tutting at something real.','The temperature drops the instant "blood thinner" is said — Gordon arriving before his name does.','"I\u2019ll take an aspirin if it makes you happy" — the compromise offer; accepting it fails her, refusing it bluntly loses her.']
    },
    checkpoints:[
      { dom:'tasks', text:'Explains AF in plain pictures (the top chambers quivering, blood eddying in a pouch, clots forming and travelling to the brain) and why FEELING well and BEING at risk coexist — the watch caught what symptoms never would' },
      { dom:'tasks', text:'Does the stroke maths transparently and personally: CHA\u2082DS\u2082-VASc 3 \u2192 roughly a 1-in-25-to-30 per-year stroke risk untreated, compounding yearly; AF strokes are characteristically large and disabling; anticoagulation cuts the risk by ~two-thirds' },
      { dom:'tasks', text:'Retires the aspirin myth explicitly and kindly: near-useless against AF clots, with real bleeding risk — "the worst of both worlds"; Eileen\u2019s cardiologist is either misquoted or out of date' },
      { dom:'tasks', text:'Distinguishes DOACs from warfarin precisely: no INR clinics or food rules, shorter action, and — the sentence that matters — substantially LOWER rates of the exact bleed that killed Gordon; her own bleeding-risk screen is favourable and will be optimised (BP, falls review, no NSAIDs)' },
      { dom:'rto',   text:'Hears the temperature drop and goes to it: "Tell me about Gordon" — the ice, the three days — received in full before any pharmacology is offered' },
      { dom:'rto',   text:'Honours the ledger AND corrects it: Gordon\u2019s warfarin was non-negotiable (metal valve), unmonitorable luck, and a different drug class; grieving the warfarin is fair — sentencing her own brain to unprotected AF in his memory is not what he\u2019d sign' },
      { dom:'rto',   text:'Hands the decision back with structure, not pressure: a thinking week, written information, the grandson welcome on the next call, the door explicitly open — refusal documented as today\u2019s decision, never the final one' },
      { dom:'gs',    text:'Safety-nets regardless of her decision: FAST symptoms = 999 said plainly; rate/symptom triggers (breathless, faint, fluttering) named; bloods (U&E, LFT, FBC) arranged to keep the DOAC option live; the second call BOOKED — and the watch, reframed: "let it keep tutting; it\u2019s the best cardiology nurse you\u2019ve ever had"' },
    ],
    worked:[
      { lbl:'The picture, plainly',   txt:'"Let me draw what the watch found. The top chambers of your heart have stopped beating and started quivering — like a washing machine stuck on shimmer. The blood in one little pouch up there stops moving briskly, and still blood clots. If a clot breaks loose, the next stop is the brain. That\u2019s the whole story — and you can feel completely well through every chapter of it except the last one."' },
      { lbl:'The maths, hers',        txt:'"Your particular numbers — age, blood pressure, being a woman — put you at roughly a one-in-twenty-five to one-in-thirty chance of a stroke THIS year, and the dice get rolled again every year. And AF strokes aren\u2019t the small kind — they\u2019re the ones that take the speech or the side. The tablet cuts that risk by about two-thirds. That\u2019s the trade on the table."' },
      { lbl:'Gordon, heard',          txt:'"Sylvia — when I said blood thinner, everything went quiet. Tell me about Gordon. … Three days. From a fall that didn\u2019t break his glasses. I understand completely why, in your ledger, the warfarin is what killed him — and on the ice that day, it played its part. I\u2019m not going to argue with your grief. I\u2019m going to ask permission to show you what\u2019s different — about the drug, and about you."' },
      { lbl:'The distinction',        txt:'"Three differences, counted on fingers. One: Gordon had a metal valve — warfarin or nothing, no choice, no modern option allowed even today. Two: warfarin is the old drug — the new ones don\u2019t need blood-test clinics, leave the body quickly, and crucially have markedly LOWER rates of the exact bleed that took him. Three: you\u2019re not Gordon — no ice-skating valve, good kidneys, steady on your feet, and a doctor who\u2019ll tune your blood pressure and ban ibuprofen before we start anything."' },
      { lbl:'The aspirin, retired',   txt:'"And the aspirin olive branch — I\u2019m handing it back, kindly. Against AF clots, aspirin is a paper umbrella: nearly no protection, and it still makes you bleed easier. It\u2019s the worst of both worlds, which is why the guidelines retired it years ago. Eileen\u2019s cardiologist either treats something different or got quoted over a fence."' },
      { lbl:'The decision, hers',     txt:'"Here\u2019s what I\u2019d like, and notice it isn\u2019t a prescription: take the week. I\u2019ll post you the plain-English version of everything I\u2019ve said. Bring your grandson onto the next call if you want a second pair of ears — he started all this with that watch, he can finish it. And whatever you decide, two things hold: any face-drooping, arm-weakness or jumbled words is 999 that minute — and that watch stays on. It\u2019s the best cardiology nurse you\u2019ve ever had."' },
    ],
    learning:'Incidental, asymptomatic AF is a stroke-prevention consultation in disguise: explain the quivering-pouch mechanism (well-feeling and high-risk coexist), personalise CHA\u2082DS\u2082-VASc into honest annual odds, retire aspirin explicitly (near-zero AF protection, real bleed risk), and distinguish DOACs from warfarin — no INR monitoring, lower intracranial-bleed rates. The hidden agenda is the warfarin ghost: a spouse\u2019s fatal bleed makes the anticoagulant the villain of the family story. Hear the grief in full BEFORE the pharmacology, honour the ledger while correcting its categories (valve = forced warfarin; she = neither), and hand the decision back with structure — a thinking week, written information, a booked second call. Refusal is today\u2019s decision, never the final one.',
    knowledge:{
      guideline:'NICE NG196 atrial fibrillation · CHA\u2082DS\u2082-VASc / ORBIT · stroke association data',
      points:[
        { h:'Diagnose & frame', t:'Wearable-flagged irregularity needs 12-lead (or \u226530s single-lead trace) confirmation — done. AF with rate 88, asymptomatic: the consultation is about the clot, not the rhythm. Rate control and symptoms are non-issues here; anticoagulation is the whole game.' },
        { h:'The stroke maths', t:'CHA\u2082DS\u2082-VASc = 3 (65\u201374, female, HTN) → anticoagulation recommended (NG196: offer if \u22652 in women, \u22651 in men; note sex adds no indication alone). Annualised stroke risk ~3\u20134%, compounding; AF strokes are larger and more disabling than average. DOAC reduces risk ~64%.' },
        { h:'Bleeding risk — assess and optimise, don\u2019t veto', t:'ORBIT/HAS-BLED logic: her profile is favourable (no anaemia, renal disease, falls, antiplatelets). Optimise the modifiables out loud — BP tuned, NSAIDs banned, alcohol checked, falls review — because visible risk-management is what makes a frightened patient consent.' },
        { h:'The aspirin myth', t:'Aspirin is NOT recommended for AF stroke prevention (NG196): minimal efficacy against cardioembolic clots, retained bleeding harm. Saying this explicitly matters — half the neighbourhood still believes otherwise, and the polite "compromise" offer must be closed kindly, not accepted.' },
        { h:'DOAC vs warfarin — the distinctions that matter', t:'DOACs: no INR clinics, fixed dosing, fewer food/drug interactions, faster offset, and roughly HALVED intracranial haemorrhage rates vs warfarin. Warfarin survives for metallic valves and some severe mitral stenosis — which is precisely why Gordon had no choice and why his story doesn\u2019t transfer.' },
        { h:'Safety-net & follow-up', t:'FAST = 999 regardless of her decision; symptom triggers (breathlessness, presyncope, fast palpitations) named; baseline bloods done now to keep the option live; written information posted; the second call booked with the grandson invited; declines documented as decision-today with the door explicitly open and revisited at every review.' },
        { h:'Marking edge', t:'The temperature drop at "blood thinner" IS the consultation. Pharmacology offered before Gordon is heard will be politely declined forever. The Clear Pass hears the three days in full, separates valve-warfarin from her choices on fingers, hands back the aspirin olive branch without taking the relationship with it — and converts "no" into "not yet, and tell me more Tuesday".' }
      ]
    }
  };

  /* ============ 34. VIDEO — New heart failure, the man giving things away ============ */
  const c34 = {
    id:'hf-four-pillars', title:'The man who cancelled the caravan', type:'video', duration:12,
    meta:{ age:66, sex:'M', setting:'Video consultation — post-echo review: new HFrEF diagnosis.', system:'Cardio / Heart failure' },
    brief:'Mr Trevor Mott, 66, retired postman. Six weeks of breathlessness and ankle swelling → raised NT-proBNP → echo last week: LVEF 33%, "heart failure with reduced ejection fraction". Cardiology letter recommends GP initiation/titration of standard therapy and community HF nurse referral. Current meds: ramipril 2.5 mg (started at triage), furosemide 40 mg. Today\u2019s booked review: discuss diagnosis and plan. His wife Lynne usually attends everything with him; today he has logged on alone, fifteen minutes early.',
    script:{
      opening:'(Sitting too upright, a notepad squared in front of him.) "Afternoon, doctor. Before we start — Lynne doesn\u2019t know I\u2019m on this call alone, and I\u2019d like to keep what I ask you between us as much as you can. I\u2019ve read the letter. Heart FAILURE. I\u2019m not a fool, I know what failure means. So I\u2019d like the truth, man to man: how long have I got? Because there are things I need to organise."',
      facts:[
        { topic:'Symptoms now',      text:'Breathless on the second flight and on the bowling green slope, two pillows (was one), ankles better since furosemide, no chest pain, no blackouts. Sleeping poorly — but that\u2019s the 3am thinking, not the breathing.' },
        { topic:'The organising',    text:'If the opening is followed: he has cancelled the caravan (booked for their ruby anniversary tour of Scotland in September); quietly asked his brother about "taking on" his allotment; started a folder of passwords and policies for Lynne; was pricing funeral plans on Tuesday when the tab "felt like admitting it".' },
        { topic:'Where it comes from', text:'His sorting-office colleague Des: "heart failure, retired at Christmas, dead by Easter". And the word itself — "failure means the engine\u2019s gone, doesn\u2019t it? You don\u2019t un-fail."' },
        { topic:'The withheld part', text:'He hasn\u2019t told Lynne the diagnosis name — she thinks it\u2019s "a bit of fluid". "Forty years she\u2019s worried about me on the rounds in the ice. I\u2019m not handing her a death sentence with her tea."' },
        { topic:'What he doesn\u2019t know', text:'That EF 33% with modern quadruple therapy has a transformed outlook; that the medicines IMPROVE the pump (remodelling), not just mask symptoms; that titration is a project with the HF nurse; that the caravan in September is, on current evidence, entirely plausible.' },
        { topic:'What he wants',     text:'A number of months, privately, to plan around. What he needs: the word "failure" dismantled, the four-pillar project explained as treatment that CHANGES the heart, the prognosis question answered honestly without a fake number, Des distinguished, the caravan un-cancelled — and help telling Lynne.' },
      ],
      ice:{
        ideas:'"Failure" = the engine is finished; medicine can only ease the descent. Des proved the timeline: months.',
        concerns:'HIDDEN AGENDA — he is mid-way through quietly closing down his life: caravan cancelled, allotment reassigned, password folder, funeral-plan tabs. And he\u2019s protecting Lynne from the diagnosis itself — carrying it alone, badly, at 3am.',
        expectations:'A private number of months, man to man. Needs: honest prognosis WITHOUT a number, the remodelling story, the titration project with named nurse, the September caravan as a clinical goal — and a route to the Lynne conversation he\u2019s been dreading more than the diagnosis.'
      },
      cues:['Logged on alone, fifteen minutes early, notepad squared — a man preparing for a verdict, not a review.','"There are things I need to organise" — the shutdown project, announced in administrative camouflage.','"I\u2019m not handing her a death sentence with her tea" — the Lynne secret; carrying it alone is the second illness.']
    },
    checkpoints:[
      { dom:'tasks', text:'Dismantles the word first: "failure" means the pump is UNDERPERFORMING, not finished — and at EF 33% with treatment the heart can genuinely improve (reverse remodelling), which is why the plan is a building project, not palliative comfort' },
      { dom:'tasks', text:'Explains the four pillars as a named project: ACE-I/ARNI, beta-blocker, MRA, SGLT2 inhibitor — each independently shown to extend life and strengthen the pump; titrated stepwise over weeks with the community HF nurse; furosemide is the symptom-tap, the pillars are the rebuild' },
      { dom:'tasks', text:'Answers "how long" honestly without a fake number: untreated, this was a serious disease; ON modern quadruple therapy, large numbers of people with his picture live many good years and some normalise their EF — and HIS trajectory gets measured (repeat echo, symptoms, NT-proBNP), not guessed' },
      { dom:'tasks', text:'Covers the living-with logistics: daily weights (2 kg in 3 days = call), fluid/salt sense without obsession, flu/COVID jabs, alcohol moderation, driving fine for Group 1, bowls positively encouraged — activity is treatment' },
      { dom:'rto',   text:'Spots the shutdown project behind "organising" — asks what he\u2019s already cancelled, and receives the caravan, the allotment, the folder, the funeral tabs without alarm or mockery' },
      { dom:'rto',   text:'Distinguishes Des specifically: unknown EF, pre-pillar era or untitrated, different disease stage — "you\u2019ve diagnosed yourself with Des\u2019s heart; let\u2019s treat yours instead"; the caravan reinstated as a shared clinical goal with a review milestone before September' },
      { dom:'rto',   text:'Addresses the Lynne secret directly but at his pace: forty years of partnership has survived worse than honesty; offers the practical route — she joins the next call, the GP does the explaining, he holds her hand; names the cost of the secret (his 3am, her exclusion)' },
      { dom:'gs',    text:'Safety-nets concretely: sudden breathlessness at rest/orthopnoea spike/2 kg-in-3-days = same-day call; chest pain = 999; bloods + BP for titration booked, HF nurse referral named with timescale, next GP review dated — and the homework set gently: "the folder can wait; the caravan deposit can\u2019t"' },
    ],
    worked:[
      { lbl:'The word, dismantled',   txt:'"Let\u2019s start with the word, because it\u2019s been mugging you for a week. \u2018Failure\u2019 is a terrible name — it means the pump is underperforming, not that it\u2019s finished. Yours is pushing out about a third with each beat instead of a half. And here\u2019s the part the word hides: with the right medicines, hearts like yours don\u2019t just stop getting worse — a good number genuinely RECOVER strength. You can un-fail. We watch it happen on the scans."' },
      { lbl:'The four pillars',       txt:'"The plan is four families of medicine — I call them pillars because the heart gets rebuilt on them. One calms the hormones flogging the pump, one slows and strengthens the beat, one stops scarring, one — oddly enough, born as a diabetes drug — protects heart and kidneys together. Each one, on its own, proven to help people live longer. You\u2019ll start low and build up step by step with a heart-failure nurse whose actual job is you."' },
      { lbl:'The question, answered', txt:'"You asked man to man, so man to man: I won\u2019t give you a number of months, because any number I gave you would be a guess wearing a suit. What I CAN tell you honestly: untreated, this disease was serious — and you are not going to be untreated. On modern therapy, people with exactly your scan live many good years; plenty are still annoying their wives a decade on. Your version gets measured, not guessed — repeat scan after the build-up, and we\u2019ll know which road you\u2019re on."' },
      { lbl:'Des, retired',           txt:'"Now Des. You\u2019ve quietly diagnosed yourself with Des\u2019s heart — but you don\u2019t know his scan, his stage, or whether anyone ever built his pillars; Christmas-to-Easter sounds like a disease found at the end. Yours was found at the beginning, by a blood test and a scanner, in a man still bowling. Stop treating his timeline. We\u2019re treating your heart."' },
      { lbl:'The caravan',            txt:'"Which brings me to September. Un-cancel it. I\u2019m serious — ring them back this week. On every piece of evidence in front of me, a ruby-anniversary tour of Scotland is not just possible, it\u2019s the right goal to build the medication around. We\u2019ll set a review in August as the checkpoint. The folder of passwords can gather dust; the caravan deposit can\u2019t."' },
      { lbl:'Lynne',                  txt:'"Last thing, and it\u2019s the heaviest on your list even if it\u2019s not written down: Lynne. Forty years, and she\u2019s currently worrying about \u2018a bit of fluid\u2019 while you price funerals at 3am. That secret is costing you sleep and her the right to stand next to you. Here\u2019s my offer: she joins our next call. I\u2019ll do the explaining — the pump, the pillars, the un-failing — and all you have to do is sit there and hold her hand while she finds out her husband is being rebuilt, not buried."' },
    ],
    learning:'A new HFrEF diagnosis is a prognosis consultation wearing a medication review\u2019s clothes. Dismantle the word first (underperforming, not finished; reverse remodelling is real), explain the four pillars as a build project (ACE-I/ARNI, beta-blocker, MRA, SGLT2i — each with independent mortality benefit, titrated with the HF nurse), and answer "how long" honestly without a fake number: measured, not guessed. The hidden agenda is the quiet shutdown — cancelled plans, reassigned allotments, password folders — driven by a colleague\u2019s timeline and the word itself; reinstate a concrete future goal (the caravan, with an August checkpoint) as clinical treatment. And find the protected spouse: a secret diagnosis is a second illness — offer to do the telling.',
    knowledge:{
      guideline:'NICE NG106 chronic heart failure · ESC HF guidelines (quadruple therapy) · CKS HF',
      points:[
        { h:'Diagnose & stage honestly', t:'HFrEF: EF 33%, NYHA II\u2013III, six weeks of congestion now diuresed. The consultation\u2019s diagnosis is double: the ventricle, and the prognosis-belief ("failure = finished", calibrated on one colleague\u2019s death). Treat both or the tablets get taken by a man living in a countdown.' },
        { h:'The four pillars — what to actually say', t:'ACE-I (→ARNI per pathway), beta-blocker, MRA, SGLT2 inhibitor: each independently reduces mortality; combined effect is transformative. Start low, titrate stepwise (typically 2-weekly) with bloods (U&E pre/post each step), BP and pulse checks; community HF nurse named and referred TODAY. Furosemide = symptom control only; distinguish it or he\u2019ll think the water tablet is the treatment.' },
        { h:'The prognosis answer', t:'No invented numbers. Honest architecture: modern quadruple therapy has roughly halved mortality vs the untreated path; reverse remodelling (EF improvement, sometimes normalisation) is common in newly-diagnosed, promptly-treated HFrEF; HIS trajectory is measured — repeat echo post-titration, NT-proBNP trend, symptom class. "Measured, not guessed" is both true and the antidote to Des.' },
        { h:'Living-with content', t:'Daily weights (same scales, after the loo, before breakfast; 2 kg/3 days = call); fluid sense without obsession; salt down, alcohol modest; vaccinations; sex and bowls both endorsed — activity and cardiac rehab improve outcomes; driving unaffected for Group 1 at this stage.' },
        { h:'Red flags & same-day action', t:'Breathless at rest, orthopnoea jump, weight spike, syncope → same-day review (decompensation); chest pain → 999; new palpitations with breathlessness → ECG promptly (AF complicates HF and changes the plan).' },
        { h:'Safety-net & follow-up', t:'Titration bloods/BP booked; HF nurse timescale named; GP review dated; the August pre-caravan checkpoint set as a shared milestone; the Lynne call scheduled — the secret\u2019s end given a date, gently, with the GP carrying the explaining.' },
        { h:'Marking edge', t:'The cues are the empty chair, the squared notepad, and "things I need to organise". The Clear Pass finds the cancelled caravan behind the admin language, retires Des with specifics, refuses the fake number while giving real hope architecture — and ends with the deposit re-paid, an August checkpoint, and Lynne invited to the next call where the doctor does the telling.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c31, c32, c33, c34);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'chest-acute-hgv': {
      ceg: ['Urgent & unscheduled care', 'Long-term conditions & cancer'],
      stem: {
        name: 'Barry Quinn', age: '58 years · male',
        pmh: ['Type 2 diabetes — 8 years', 'Smoker 20/day', 'BMI 33', 'Occupation: HGV driver (Group 2 licence)'],
        meds: ['Metformin 1 g BD'],
        allergy: 'NKDA',
        recent: '⚠ Urgent slot booked 40 min ago: "bad indigestion, wants something strong sent to a pharmacy". Reception: "sounded breathless — parked in a layby on the A38". Last seen 11 months ago (diabetes review — QRISK high, statin declined).',
        reason: 'Telephone — urgent: chest pain presenting as "heartburn".'
      },
      timeMap: [
        { t:'0–1',  h:'Listen & locate',      d:'Engine noise, audible breathing, "heavy like" — the words diagnose past the heartburn costume. Get the layby location pinned EARLY; everything else can move, the address can\u2019t wait.' },
        { t:'1–4',  h:'The two-minute history', d:'Pain anatomy (radiation, sweat, nausea, duration), the fortnight of exertional warnings, risk stack. This history is fast because the disposition is already forming.' },
        { t:'4–5',  h:'Name it & turn the call', d:'"This is your heart, and the next hour matters." The resistance arrives here — don\u2019t fight it yet; ask what an ambulance would COST him. Tony and the licence surface.' },
        { t:'5–9',  h:'Solve the blockers',     d:'The DVLA truth (pause-and-reinstate, weeks not forever); the dispatcher call scripted in one sentence; aspirin chewed; engine off, door unlocked, upright.' },
        { t:'9–12', h:'999 & stay',             d:'999 made from this call with the GP on the line; ETA confirmed; worsening = re-ring rules; the after-the-dust follow-up promised. Nobody drives. Nobody hangs up first.' }
      ],
      wordPics: {
        fail: 'Prescribes omeprazole/Gaviscon to a layby ("try this and ring back if no better") — the designed catastrophe; or wins the argument and loses the patient: lectures him about smoking while he\u2019s deciding whether to drive on; the licence fear never explored, so he politely agrees to "go to A&E later" and makes for Plymouth.',
        pass: 'Recognises ACS through the heartburn frame; gets location, aspirin and 999 arranged; addresses the work pressure at least practically; gives waiting instructions and worsening triggers.',
        exc:  'The costume seen through in two minutes with the crescendo fortnight harvested as confirmation; the resistance treated as economics, not idiocy — Tony\u2019s myth replaced with the real DVLA architecture; the dispatcher problem dissolved in one scripted sentence; aspirin, engine, door, posture all done while the line stays open; and the relationship preserved for the conversation that prevents the next one — booked, by name, for after.'
      },
      avoid: [
        { dont:'"It does sound like it could be cardiac — I think you should get yourself to A&E to be safe."', instead:'"This needs an ambulance to that layby, now — not because I\u2019m dramatic, but because if your heart\u2019s struggling, the treatment starts when the crew arrives, not when you park. And you driving anywhere with this is the one outcome with no comeback."', why:'"Get yourself to" a man in a 44-tonne vehicle with chest pain is the lethal sentence of telephone triage.' },
        { dont:'"Your licence is the least of your worries right now."', instead:'"The licence fear is real, so here\u2019s the real answer: the DVLA pauses it and gives it back after the checks — weeks, usually, with a documented route. What ends careers is the untreated version. Protecting the heart IS protecting the licence."', why:'Dismissing the fear that\u2019s blocking the yes guarantees the no; answering it precisely is what unlocks the ambulance.' },
        { dont:'"While I\u2019ve got you — you really need to address the smoking and your diabetes control."', instead:'"When the dust settles, you and I are having the unhurried conversation — the smokes, the sugar, the fortnight of warnings. Not today. Today has one job."', why:'Risk-factor lecturing mid-emergency burns trust and time; naming it for later keeps both.' }
      ]
    },

    'angina-builder': {
      ceg: ['Long-term conditions & cancer', 'New & undifferentiated presentations'],
      stem: {
        name: 'Marek Dolan', age: '47 years · male',
        pmh: ['Nil on file — 2 attendances in 15 years', 'Smoker 15/day since age 15', 'BP not recorded for 6 years'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Self-booked video: "pulled chest muscle, wants a quick one — on a job". FH not on file. No bloods on record since 2019.',
        reason: 'Video consultation — exertional chest tightness, presented as muscle strain.'
      },
      timeMap: [
        { t:'0–1',  h:'Open & listen',        d:'The strain story, told briskly with a hand drawn flat across the sternum — a textbook gesture narrated as a pulled muscle. Let the whole story land; the pattern is already declaring itself.' },
        { t:'1–5',  h:'Anatomy of the story',  d:'Exertion-on, rest-off, the falling threshold ("three flights… now one and a bit"), the muscle checked properly (no tenderness, not positional) so the reframe is EARNED. Risk stack: smoking, the father at 52.' },
        { t:'5–6',  h:'The earned reframe',    d:'"This isn\u2019t a strain — it\u2019s the heart\u2019s warning signal." Then straight to the asset hidden in it: warnings come before damage.' },
        { t:'6–10', h:'Treat & re-deploy',     d:'Aspirin + statin + GTN with the \u00d72-then-999 script; RACPC referral named with timescale; ECG/bloods/BP this week; the work prescription — he points, the lads carry. The father\u2019s armchair answered with the 2026 difference.' },
        { t:'10–12',h:'Safety-net & close',    d:'Hard 999 lines in his own register; results review booked; the smoking conversation scheduled for the week the fear works for him. The kitchen job survives; so does he.' }
      ],
      wordPics: {
        fail: 'Agrees it\u2019s muscular ("sounds like you\u2019ve overdone it — try ibuprofen gel") — the one-sentence fail; or names angina but sends him away with only a referral letter: no GTN, no aspirin, no work guidance, so he carries plasterboard up stairwells for six more weeks while the letter crawls; the falling threshold never weighed; the father never found.',
        pass: 'Recognises typical angina and says so; excludes the muscular story properly; refers to RACPC and starts aspirin/statin/GTN with teaching; arranges ECG and bloods; gives work limits and 999 rules.',
        exc:  'The reframe earned by visibly checking the muscle first; the falling threshold named as the urgency-setter; treatment started in-consultation with the GTN rules in builder\u2019s English; the re-deployment framing that keeps three families eating AND him off the loaded stairs; the father\u2019s armchair converted into the reason this story ends differently; and the cessation conversation booked for the most quit-receptive week of his life rather than bolted onto the worst ten minutes of it.'
      },
      avoid: [
        { dont:'"It\u2019s probably muscular, but let\u2019s get an ECG just to be on the safe side."', instead:'"I\u2019ve checked the muscle story and it doesn\u2019t hold — no sore spot, no catch on movement. Effort-on, rest-off IS the heart\u2019s pattern. So we treat it as angina from today, and the tests confirm rather than decide."', why:'"Probably muscular + ECG to be safe" reverses the logic and licenses six more weeks of loaded stairwells.' },
        { dont:'"You\u2019ll need to stop work until the clinic has seen you."', instead:'"I\u2019m re-deploying you, not signing you off: you point, the lads carry, the job keeps moving at ground level. The only thing that stops everything is ignoring the hard lines I\u2019m about to give you."', why:'A blanket stop is economically impossible for him — he\u2019ll ignore all of it; a buildable plan gets built.' },
        { dont:'"With your father\u2019s history, you really can\u2019t afford to smoke."', instead:'"Your dad got his diagnosis the day the damage happened; you\u2019re getting yours at the warning shot — that\u2019s the difference between his story and yours. And when you\u2019re ready to make the difference bigger, the quit conversation has my name on it. Next visit."', why:'Guilt-leverage on the worst day entrenches; the warning-vs-damage frame plus a scheduled door does the work shame can\u2019t.' }
      ]
    },

    'af-incidental': {
      ceg: ['Older adults', 'Investigations & results'],
      stem: {
        name: 'Sylvia Beech', age: '72 years · female',
        pmh: ['Hypertension', 'Widowed 2021 — husband died of intracranial haemorrhage (on warfarin, metallic valve)'],
        meds: ['Amlodipine 5 mg OD'],
        allergy: 'NKDA',
        recent: '⚠ Smartwatch flagged recurrent "irregular rhythm" → practice 12-lead last week: ATRIAL FIBRILLATION, rate 88. BP 138/82. Asymptomatic. Booked telephone call to discuss result. CHA\u2082DS\u2082-VASc 3.',
        reason: 'Telephone — results discussion: new AF, anticoagulation decision.'
      },
      timeMap: [
        { t:'0–1',  h:'Open & listen',        d:'She arrives pre-armoured: "whose heart isn\u2019t wobbly at my age?" Let the armour speak, agree she FEELS well — then earn the right to explain why that isn\u2019t the whole story.' },
        { t:'1–4',  h:'The mechanism & maths', d:'The quivering-pouch picture; her personal numbers (CHA\u2082DS\u2082-VASc 3 → ~1-in-25\u201330/year, compounding; AF strokes are the big ones). Watch for the temperature drop at "blood thinner".' },
        { t:'4–7',  h:'Gordon, in full',       d:'Stop the pharmacology. "Tell me about Gordon." The ice, the three days, the ledger — heard completely before any counter-argument exists.' },
        { t:'7–10', h:'The distinctions',      d:'Three fingers: the valve (warfarin was forced), the drug (DOACs halve the bleed that took him), the patient (her favourable profile, optimised out loud). The aspirin olive branch handed back kindly.' },
        { t:'10–12',h:'Her decision, structured', d:'The thinking week; written info posted; grandson invited to the booked second call; bloods done to keep the option live; FAST = 999 regardless; the watch reframed as her best nurse.' }
      ],
      wordPics: {
        fail: 'Opens with "your watch was right and you need a blood thinner" — Gordon arrives furious and the call is over in spirit by minute three; or capitulates to the aspirin compromise ("better than nothing") — clinically wrong and falsely reassuring; the husband\u2019s death never asked about; refusal recorded as final with no second call.',
        pass: 'Explains AF and the stroke risk personally; recommends a DOAC with the warfarin distinction; uncovers and acknowledges the husband\u2019s death; declines the aspirin offer with reasons; arranges information, bloods and follow-up.',
        exc:  'The armour respected and then gently opened; the maths made hers, not generic; Gordon\u2019s three days heard in full silence before a single distinction is offered; the three-finger separation (valve, drug, patient) that lets grief and treatment coexist; the aspirin returned without bruising Eileen or her; and the decision handed back with real structure — a week, a letter, a grandson, a booked call — so that "no" can safely become "tell me more Tuesday".'
      },
      avoid: [
        { dont:'"The good news is we caught it early and there\u2019s a very effective tablet."', instead:'"You feel completely well, and I believe you — that\u2019s the strange cruelty of this condition: the quiver makes no noise until the day it does. Can I show you what the watch was actually seeing?"', why:'Leading with the tablet detonates Gordon before the mechanism has earned any hearing.' },
        { dont:'"Warfarin has come a long way — the modern versions are much safer."', instead:'"The new tablets aren\u2019t better warfarin — they\u2019re a different family altogether: no blood-test clinics, out of the system in a day, and the bleed that took Gordon happens at around HALF the rate. And Gordon never had the choice — his metal valve locked him to the old drug. You aren\u2019t locked to anything."', why:'Calling DOACs "modern warfarin" welds her husband\u2019s fate to her prescription; the family-distinction unwelds it.' },
        { dont:'"If you won\u2019t take anticoagulation, at least take the aspirin."', instead:'"I\u2019m going to hand the aspirin back, kindly: against this kind of clot it\u2019s a paper umbrella — almost no protection, and it still makes bleeding easier. I\u2019d rather you took a week and decided properly than took the wrong tablet feeling settled."', why:'The aspirin "compromise" delivers bleed risk without stroke protection — the worst of both worlds, retired from guidance years ago.' }
      ]
    },

    'hf-four-pillars': {
      ceg: ['Older adults', 'Long-term conditions & cancer'],
      stem: {
        name: 'Trevor Mott', age: '66 years · male',
        pmh: ['New HFrEF — echo last week: LVEF 33%', 'NT-proBNP 1,840 ng/L (6/52 ago)', 'Hypertension'],
        meds: ['Ramipril 2.5 mg OD (initiated at triage)', 'Furosemide 40 mg OM'],
        allergy: 'NKDA',
        recent: '⚠ Cardiology letter: "GP to initiate and titrate standard HF therapy; community HF nurse referral recommended; repeat echo post-titration." Booked review to discuss diagnosis & plan. Note: wife usually attends all appointments; patient has joined alone, 15 min early.',
        reason: 'Video consultation — new heart failure diagnosis review.'
      },
      timeMap: [
        { t:'0–1',  h:'Open & listen',        d:'Alone, early, notepad squared, "keep this between us", and the question: "how long have I got?" A verdict is expected. Don\u2019t answer yet — find out what\u2019s already been decided at 3am.' },
        { t:'1–4',  h:'The shutdown audit',    d:'"What have you already organised?" The caravan, the allotment, the folder, the funeral tabs — and Des, the timeline he\u2019s borrowed. Symptoms checked briskly in parallel (orthopnoea, weights, the diuresed ankles).' },
        { t:'4–6',  h:'The word, dismantled',  d:'Underperforming, not finished; reverse remodelling as the headline he\u2019s never heard; "you can un-fail — we watch it on the scans."' },
        { t:'6–9',  h:'The pillars & the answer', d:'Four pillars as a build project with the HF nurse named; the how-long question answered honestly without a fake number — measured, not guessed; Des retired with specifics.' },
        { t:'9–12', h:'Re-open the future',     d:'The caravan un-cancelled as a clinical goal with an August checkpoint; daily-weights rules; same-day/999 triggers; titration bloods booked; and the Lynne call scheduled — the GP does the telling, he holds her hand.' }
      ],
      wordPics: {
        fail: 'Gives a number ("most people manage a few years") that he writes on the notepad and lives by; or pure pharmacology — four drug names and a titration schedule delivered to a man who has already cancelled September; the empty chair never asked about; the secret from Lynne never found; he leaves with a plan for his tablets and a finished plan for his death.',
        pass: 'Corrects the "failure" misunderstanding; explains the four pillars and titration with the HF nurse; declines a fake number while giving honest grounds for hope; covers weights and red flags; notices the distress and books follow-up.',
        exc:  'The shutdown project excavated item by item and reversed item by item — deposit re-paid, allotment kept, folder shelved; Des distinguished with surgical specificity; the prognosis answer that gives architecture instead of arithmetic ("measured, not guessed"); the pillars taught as rebuilding, with furosemide demoted to symptom-tap so he values the right tablets; September installed as a clinical milestone; and the Lynne secret ended with an offer he can accept — the doctor carries the words, he carries her hand.'
      },
      avoid: [
        { dont:'"Heart failure is a serious diagnosis, but people can live with it for some years."', instead:'"The name is the worst thing about it. Your pump is underperforming, not finished — and on the right medicines a good number of hearts like yours genuinely regain strength. We don\u2019t guess which you\u2019ll be; we measure it, scan by scan."', why:'"Serious but some years" reads as a sentence with a range; rebuild-and-measure reads as a project with a future.' },
        { dont:'"I can\u2019t give you a prognosis — everyone\u2019s different."', instead:'"I won\u2019t give you a number, because every number would be a guess in a suit — but I\u2019ll give you what\u2019s true: untreated, this was a dangerous disease; treated the modern way, people with your exact scan live many good years, and your own trajectory shows up on the repeat scan after we build the medicines up. We\u2019ll know which road you\u2019re on by autumn."', why:'The bare refusal leaves him alone with Des\u2019s timeline; refused-with-architecture replaces it.' },
        { dont:'"You really should tell your wife — she\u2019s going to find out anyway."', instead:'"Forty years says Lynne can carry truth better than she\u2019s carrying exclusion. So here\u2019s my offer: next call, she\u2019s on it, and I do every bit of the explaining — the pump, the rebuild, the September checkpoint. Your only job is the hand-holding. Deal?"', why:'An ultimatum adds shame to his load; a concrete offer with the labour transferred is acceptable to a proud man.' }
      ]
    }
  });

})();
