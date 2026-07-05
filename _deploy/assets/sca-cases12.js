/* ============================================================
   Reasoning GP — Case Library batch 12: "Type 2 diabetes journey"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   NG12 noted ONLY where a presentation genuinely maps.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases11.js.
   ============================================================ */

(function(){

  /* ============ 42. VIDEO — New diagnosis of type 2 diabetes ============ */
  const c42 = {
    id:'t2dm-new-diagnosis', title:'"It got my dad, it\u2019ll get me"', type:'video', duration:12,
    meta:{ age:49, sex:'M', setting:'Video consultation — new type 2 diabetes; first conversation.', system:'Endocrine / New T2DM' },
    brief:'Mr Errol Bennett, 49, self-employed delivery driver. HbA1c 71 mmol/mol on a check done for tiredness; repeat 69. BMI 32, BP 142/88, no symptoms of hyperglycaemic emergency. Lipids: total chol 5.9. eGFR normal, ACR normal, no retinopathy flag yet. PMH: nil. Meds: none. Smoker 10/day. Booked for "results".',
    script:{
      opening:'"So it\u2019s diabetes, isn\u2019t it. I could tell by how the receptionist said \u2018the doctor wants a proper chat\u2019. Look — I\u2019ll be honest with you, doc, there\u2019s not much point dressing it up. My dad had this. It took his eyes, then half his leg, then his heart at sixty-one. So whatever you\u2019re going to tell me to do, I\u2019ve kind of made my peace with where this goes. Just give me the tablets and I\u2019ll get on with it."',
      facts:[
        { topic:'The father',         text:'The engine of the consultation: dad diagnosed in his 40s, "never really did anything about it", went blind in one eye, below-knee amputation at 58, fatal MI at 61. Errol nursed him through the end. He has quietly decided diabetes is a death sentence on rails and that effort is futile.' },
        { topic:'The fatalism',        text:'HIDDEN AGENDA — under the breezy "give me the tablets" is despair: he believes the outcome is fixed, so why bother changing anything. This fatalism, not the HbA1c, is what will actually determine his next ten years. If unaddressed he will collect a prescription and change nothing.' },
        { topic:'The livelihood fear',  text:'If explored: he\u2019s self-employed, drives for a living, no sick pay. A second, unspoken fear — does "diabetic" mean losing his licence, his income? He\u2019s heard "they take your licence if you go on insulin." Hasn\u2019t asked because he\u2019s scared of the answer.' },
        { topic:'The lifestyle',        text:'If asked non-judgementally: lives on garage food and energy drinks between drops, sits 11 hours a day, smokes 10/day, no time to exercise "with the job". Not lazy — trapped in a pattern by the work.' },
        { topic:'What he wants',       text:'Officially: the tablets, then get on with it. Actually: to be told this is NOT automatically his father\u2019s ending; that his dad\u2019s era and untreated course are not his; that he can drive and earn; and a foothold of genuine agency rather than a leaflet.' },
      ],
      ice:{
        ideas:'Diabetes is a one-way road to blindness, amputation and an early heart attack — his father\u2019s exact path — and effort won\u2019t change the destination.',
        concerns:'HIDDEN AGENDA — fatalism/despair built on watching his father die of complications; plus an unspoken terror that the diagnosis will cost him his driving licence and his livelihood.',
        expectations:'Tablets and resignation. Underneath: to be shown that his father\u2019s outcome is not preordained for him, that he can keep driving and earning, and a realistic first step he can actually take.'
      },
      cues:['"I\u2019ve made my peace with where this goes" — fatalism, not acceptance; it is the real diagnosis to treat today.','"Give me the tablets and I\u2019ll get on with it" — disengagement dressed as cooperation; a prescription alone changes nothing.','Any flicker at the word "insulin" or "licence" — the livelihood fear he hasn\u2019t voiced.']
    },
    checkpoints:[
      { dom:'tasks', text:'Confirms and explains the diagnosis clearly (HbA1c diagnostic on two readings) without minimising or catastrophising; frames T2DM as serious but modifiable — a condition managed, not a sentence served' },
      { dom:'tasks', text:'Directly addresses the father/fatalism: his dad\u2019s untreated course in a different era is NOT Errol\u2019s fixed fate; modern management (and the very fact he\u2019s caught it now, asymptomatic) changes the trajectory — complications are largely preventable with control of glucose, BP, lipids and smoking' },
      { dom:'tasks', text:'Negotiates an initial management plan collaboratively: lifestyle as genuine first-line (realistic for a driver — food swaps he can buy at a garage, walking at drops), metformin discussion, and — importantly — frames the option of remission given recent onset and weight, rather than "tablets for life"' },
      { dom:'tasks', text:'Covers cardiovascular risk as the real killer: smoking cessation offered as the single highest-yield action, BP and lipids/QRISK and statin discussion, not just the glucose number' },
      { dom:'tasks', text:'Answers the DVLA/livelihood question accurately and reassuringly: Group 1 (car) T2DM on diet ± metformin requires no DVLA notification and no licence loss; insulin and some other agents carry specific (manageable) DVLA rules; he can keep driving — and gives him this proactively' },
      { dom:'rto',   text:'Hears the despair under the cooperation and treats it as the priority, rather than handing over a prescription into a closed door' },
      { dom:'rto',   text:'Explores the lifestyle without blame, recognising the job traps him in the pattern; builds the plan around his real day, not an idealised one' },
      { dom:'gs',    text:'Arranges the diabetes-care scaffolding and follow-up: structured education referral (e.g. DESMOND), retinal screening, foot check, bloods, and a near review — leaving him with one concrete first step and a sense of agency, not a leaflet and a tablet' },
    ],
    worked:[
      { lbl:'Meet the fatalism',     txt:'"You\u2019ve told me the ending before we\u2019ve started, and I understand why — you watched it happen to your dad. So let me be straight with you, because you\u2019ve been straight with me: what happened to him is not what\u2019s written for you. He was diagnosed in a different decade, and by his own account he never really treated it. You\u2019re sitting here with no symptoms, caught early, with everything still working. That is a completely different starting line."' },
      { lbl:'Reframe the disease',   txt:'"Diabetes isn\u2019t a countdown — it\u2019s a number we can move. The eyes, the feet, the heart your dad lost: those come from years of high sugar, high pressure and smoking left unchecked. Control those and the complications largely don\u2019t come. You\u2019re not boarding your father\u2019s train; you\u2019re standing at a junction with a switch in your hand."' },
      { lbl:'The licence, head-on',  txt:'"Let me answer the thing I suspect you haven\u2019t asked: this does not cost you your licence. On diet or the usual first tablet, you don\u2019t even tell the DVLA — you keep driving, you keep earning. If we ever needed insulin there are extra checks, but they\u2019re manageable and plenty of drivers do them. Your livelihood is safe. Take that one off your shoulders right now."' },
      { lbl:'Real-life plan',        txt:'"I\u2019m not going to tell a man doing eleven-hour shifts to \u2018eat more salmon and go to the gym\u2019. Let\u2019s be real: at the garage, the meal-deal water instead of the energy drink, the nuts instead of the pastry; a five-minute walk at every few drops. Small, repeatable, free. And the single biggest thing you could do for your heart isn\u2019t a tablet — it\u2019s the cigarettes. I\u2019ll help you with that properly when you\u2019re ready."' },
      { lbl:'Offer remission',       txt:'"And here\u2019s something your dad was never offered: because you\u2019ve caught this early and there\u2019s weight we could shift, type 2 can sometimes go into remission — the number back to normal, off medication. I\u2019m not promising it, but it\u2019s a goal worth aiming at, and it\u2019s the opposite of \u2018making your peace with where this goes\u2019."' },
      { lbl:'Scaffold + first step', txt:'"So here\u2019s the plan: I\u2019ll start you on metformin and book you proper diabetes education, eye screening and a foot check — the things that catch problems before they\u2019re problems. But the only homework today is one thing: swap the energy drinks for water this week. That\u2019s it. Come back in two weeks and we build from there. You walked in expecting your father\u2019s ending. You\u2019re walking out with a switch in your hand."' },
    ],
    learning:'The new-T2DM consultation is not a data download — the HbA1c is the easy part. The examinable core here is the hidden agenda: fatalism built on a father lost to untreated complications, plus an unvoiced terror about the driving licence and livelihood. A prescription handed into that despair changes nothing. The skill is to treat the fatalism first — his father\u2019s untreated course in another era is not Errol\u2019s fixed fate; complications come from years of uncontrolled glucose/BP/lipids/smoking, all modifiable — and to answer the DVLA question proactively and accurately (diet ± metformin: no notification, no licence loss). Then negotiate a plan built around his actual day, lead with smoking cessation as highest-yield CVD action, offer remission as a real goal given early onset, and leave him with one concrete step and genuine agency.',
    knowledge:{
      guideline:'NICE NG28 type 2 diabetes · NICE CG181 CVD risk · DVLA Assessing fitness to drive (diabetes) · DiRECT (remission)',
      points:[
        { h:'Diagnose and frame', t:'HbA1c ≥48 mmol/mol on two occasions (or one with symptoms) is diagnostic. Frame T2DM as a serious but modifiable condition; avoid both minimisation and catastrophe. Asymptomatic early diagnosis is an opportunity, not a sentence.' },
        { h:'Treat the whole CVD picture', t:'Most people with T2DM die of cardiovascular disease, not glucose itself. Address BP, lipids/QRISK and statins, and — highest yield of all — smoking cessation. Glucose is one lever among several.' },
        { h:'Glycaemic management + remission', t:'Lifestyle is genuine first-line; metformin first-line pharmacotherapy (SGLT2 inhibitor early if CVD/HF/CKD or high risk per NG28). In recent-onset T2DM with excess weight, structured weight loss can achieve remission (DiRECT) — offer it as a goal, not "tablets forever".' },
        { h:'DVLA — give it proactively', t:'Group 1 (car/motorcycle): diet-controlled or on metformin/agents not causing hypoglycaemia → no need to notify DVLA. Insulin and sulfonylureas/glinides carry specific rules (hypo awareness, glucose monitoring, notification for insulin). Reassure early — licence fear silently drives non-engagement, especially in professional drivers.' },
        { h:'Structured care scaffolding', t:'Refer to structured education (DESMOND); arrange retinal screening, annual foot checks, U&E/ACR, lipids; set individualised HbA1c target; plan regular review. Build the plan around the patient\u2019s real life and constraints.' },
        { h:'Never do', t:'Never hand a prescription into unaddressed fatalism; never deliver the diagnosis as a list of complications; never leave the DVLA/livelihood fear unspoken; never prescribe an idealised lifestyle that ignores the patient\u2019s working day; never frame it as inevitably lifelong without offering remission where appropriate.' },
        { h:'Safety-net & follow-up', t:'Hyperglycaemic emergency symptoms to report (marked thirst/polyuria, weight loss, drowsiness — DKA/HHS); one concrete first step agreed; education/screening booked; early review to build engagement; smoking cessation support offered.' }
      ]
    }
  };

  /* ============ 43. TELEPHONE — Hot swollen toe in a diabetic ============ */
  const c43 = {
    id:'t2dm-foot', title:'"It\u2019s just my gout again"', type:'telephone', duration:12,
    meta:{ age:63, sex:'M', setting:'Telephone — patient wants colchicine for a "gout flare".', system:'Urgent / Diabetic foot' },
    brief:'Mr Derek Hollis, 63, T2DM 11 years (HbA1c last 74), known gout, peripheral neuropathy noted at last foot check. Meds: metformin, gliclazide, allopurinol, atorvastatin. Rings requesting colchicine: "gout\u2019s back in my foot." On questioning the toe/forefoot is red, hot and swollen, has been 3 days, and he\u2019s "a bit run down". Full-time carer for his wife (advanced MS).',
    script:{
      opening:'"Sorry to bother you — I just need a quick prescription, save you any trouble. My gout\u2019s flared up again, big toe area, you know the drill. Last time the colchicine sorted it. If you could just pop a script through to the chemist I\u2019ll get my neighbour to fetch it. I really can\u2019t be doing with coming in — I\u2019ve got Sheila to see to."',
      facts:[
        { topic:'The foot',           text:'If properly questioned: red, hot, SWOLLEN across the toe and into the forefoot, not just the joint; been worsening 3 days; some clear-ish fluid / a small "blister or graze" he can\u2019t quite see under the foot; he has neuropathy so it doesn\u2019t hurt as much as he\u2019d expect — which he reads as reassuring. Can\u2019t recall an injury but walks barefoot at home.' },
        { topic:'Systemic clues',      text:'If asked: "a bit run down", shivery last night, hasn\u2019t checked his sugars but "they\u2019ve been all over". Possibly feverish. This is not a simple crystal flare.' },
        { topic:'The hidden barrier',   text:'HIDDEN AGENDA — he is the sole carer for his wife Sheila, who has advanced MS and cannot be left. He is minimising the foot and pushing for a phone script because being told to go to hospital is, in his mind, impossible — "who looks after her?" The downplaying is logistics-driven, not denial of symptoms.' },
        { topic:'The fear',            text:'If reached: his brother-in-law, also diabetic, lost a leg. Derek is privately frightened this is "the start of that" but cannot afford — practically or emotionally — for it to be true, so he\u2019s renamed it gout.' },
        { topic:'What he wants',       text:'Officially: colchicine over the phone. Actually: for the foot to be nothing, and for someone to solve the impossible problem of getting it seen WITHOUT abandoning his wife.' },
      ],
      ice:{
        ideas:'It\u2019s another gout flare; colchicine will fix it as before — no need to be seen.',
        concerns:'HIDDEN AGENDA — he is the sole carer for a wife who cannot be left, so "go and be seen" feels impossible; plus a buried fear, after his brother-in-law\u2019s amputation, that this is the beginning of losing his foot.',
        expectations:'A phone prescription. What he actually needs: same-day assessment of a possible diabetic foot infection AND a solution to the caring problem that makes that achievable.'
      },
      cues:['"Just pop a script through, save you the trouble" — the push to keep it remote is the red flag, not the convenience.','Red/hot/swollen + diabetic + neuropathy + run-down — this is a diabetic foot until proven otherwise, not gout.','"I\u2019ve got Sheila to see to" — the real obstacle; solve THIS or the safe plan won\u2019t happen.']
    },
    checkpoints:[
      { dom:'tasks', text:'Does NOT issue colchicine down the phone: recognises that red, hot, swollen foot in a diabetic with neuropathy and systemic upset is a potential limb-threatening emergency (cellulitis/diabetic foot infection ± ulcer, possible osteomyelitis/sepsis), not a simple gout flare' },
      { dom:'tasks', text:'Takes a proper foot and systemic history: spread beyond the joint, break in skin/ulcer he can\u2019t see, neuropathy masking pain, fever/rigors, glucose derangement — and recognises neuropathy makes "it doesn\u2019t hurt much" falsely reassuring' },
      { dom:'tasks', text:'Arranges urgent SAME-DAY assessment per the diabetic foot pathway — face-to-face today (urgent surgery slot, or referral to the multidisciplinary diabetic foot service / acute pathway if systemically unwell), with safety-netting for sepsis' },
      { dom:'tasks', text:'Surfaces and problem-solves the caring barrier: this is why the plan would otherwise fail — explores who could sit with Sheila, emergency carer/respite options, social services, family/neighbours; treats the logistics as a clinical task, not an aside' },
      { dom:'tasks', text:'Addresses glycaemic and broader diabetic context briefly: sugars likely high with infection; reinforces this is exactly why early review matters; does not get lost in long-term control while an acute foot needs assessing today' },
      { dom:'rto',   text:'Reads the push for a remote script as a danger signal and the caring crisis behind it, rather than taking the request at face value to save time' },
      { dom:'rto',   text:'Validates how impossible it feels to leave Sheila, and meets the buried amputation fear honestly — early assessment is precisely how feet are SAVED, not lost' },
      { dom:'gs',    text:'Safety-nets explicitly: red flags for sepsis/spreading infection (fever, confusion, fast worsening) → 999/A&E; confirms a concrete care arrangement is in place so the foot WILL be seen today; documents and follows up' },
    ],
    worked:[
      { lbl:'Slow the script down',  txt:'"I can hear you want this dealt with quickly and I will be quick — but I\u2019m not going to put colchicine through, and let me tell you honestly why, because it matters. A red, hot, swollen foot in someone with diabetes and reduced feeling isn\u2019t the same as gout, even if it looks similar. It can be an infection that needs looking at today, not a flare to ride out."' },
      { lbl:'Expose the false calm', txt:'"You said it doesn\u2019t hurt as much as last time and you\u2019ve taken that as a good sign — I understand why, but it\u2019s actually the opposite. Your nerves are dulled by the diabetes, so a serious foot problem can feel deceptively mild. That, plus feeling run down and shivery, is exactly the combination I can\u2019t leave on the phone."' },
      { lbl:'Name the real obstacle',txt:'"Now — the reason you really want this done remotely. It\u2019s Sheila, isn\u2019t it? You can\u2019t just walk out the door. Let\u2019s treat that as part of the medical problem, because it is. Who could sit with her for two hours today? If there\u2019s genuinely no one, I can get our team and social services to sort emergency cover — that exists for exactly this."' },
      { lbl:'Meet the buried fear',  txt:'"And the thing you haven\u2019t said — your brother-in-law\u2019s leg. I think part of why this is \u2018just gout\u2019 is that it can\u2019t be the other thing. Here\u2019s the truth that should help: feet are lost when these are left, and saved when they\u2019re seen early. Getting this looked at today is how we keep you on two feet, not the first step to losing one."' },
      { lbl:'Concrete safe plan',    txt:'"So this is what happens: I\u2019m arranging for your foot to be assessed today — I\u2019ll get you a slot and the diabetic foot team involved. We sort cover for Sheila first so you can go. While we\u2019re organising it, keep weight off that foot and don\u2019t walk barefoot."' },
      { lbl:'Sepsis safety-net',     txt:'"One more thing and it\u2019s important: if before then you feel much worse — high fever, shivering uncontrollably, confused, the redness racing up your foot — that\u2019s 999, not waiting for the appointment. I\u2019ll ring you back this afternoon to make sure you got seen and that Sheila\u2019s covered. We do both."' },
    ],
    learning:'A red, hot, swollen foot in a person with diabetes and neuropathy is a limb-threatening emergency until proven otherwise — diabetic foot infection, possible osteomyelitis, sepsis — NOT a phone-script gout flare, even with a gout history. Neuropathy makes reduced pain falsely reassuring; systemic upset (rigors, deranged glucose) raises the stakes. The unsafe path is issuing colchicine remotely; the safe path is urgent same-day face-to-face assessment via the diabetic foot pathway. But the examinable hidden agenda is WHY he\u2019s pushing for remote care: he is a sole carer who cannot leave his wife, with a buried amputation fear borrowed from a relative. Solve the caring logistics as a clinical task (emergency cover, social services), meet the fear honestly (early assessment saves feet), and safety-net for sepsis. The consultation is won by hearing the obstacle, not the request.',
    knowledge:{
      guideline:'NICE NG19 diabetic foot problems · CKS cellulitis · NICE NG51 sepsis · Carers Act (assessment/respite)',
      points:[
        { h:'Red/hot/swollen diabetic foot = emergency until excluded', t:'Differential includes cellulitis, diabetic foot infection with ulcer, septic arthritis, osteomyelitis, Charcot foot and sepsis — far beyond gout. NICE NG19: limb-threatening or severe diabetic foot problems need same-day referral to the multidisciplinary diabetic foot service / acute care.' },
        { h:'Neuropathy hides severity', t:'Reduced protective sensation means serious infection or ulceration can present with deceptively little pain. "It hurts less than last time" is a red flag, not reassurance, in a neuropathic diabetic foot. Always ask about and look for skin breaks the patient cannot see/feel.' },
        { h:'Screen for sepsis and systemic upset', t:'Fever, rigors, malaise, deranged glucose, tachycardia → assess for sepsis (NG51) and escalate to 999/A&E. Infection commonly drives hyperglycaemia; high sugars with a hot foot raise concern.' },
        { h:'Do not treat remotely as gout', t:'Even with a gout history, do not prescribe colchicine down the phone for this picture. The diagnosis cannot be made without seeing the foot; the cost of a missed diabetic foot infection is a limb.' },
        { h:'The carer barrier is a clinical problem', t:'Sole carers minimise their own emergencies because leaving the dependant feels impossible. Address it directly: emergency carer cover, respite, social services, family/neighbours, Carers Act assessment. The safe plan only works if the logistics are solved.' },
        { h:'Never do', t:'Never issue a phone script for a red/hot/swollen diabetic foot; never accept reduced pain as reassuring in neuropathy; never ignore the push for remote care; never tell a sole carer to "just get to hospital" without solving who covers their dependant.' },
        { h:'Safety-net & follow-up', t:'Same-day assessment arranged with care cover confirmed; sepsis red flags → 999; offload/no barefoot walking meanwhile; a planned call-back to confirm he was seen and the caring need met.' }
      ]
    }
  };

  /* ============ 44. VIDEO — The complications letter ============ */
  const c44 = {
    id:'t2dm-complications', title:'The letter that says it\u2019s working its way in', type:'video', duration:12,
    meta:{ age:57, sex:'F', setting:'Video consultation — patient distressed by a kidney/eye letter.', system:'Endocrine / T2DM complications' },
    brief:'Mrs Salma Iqbal, 57, T2DM 9 years. Recent review: ACR raised (early diabetic kidney disease), retinal screening shows background retinopathy. HbA1c 75 (was 58 a year ago, deteriorating), BP 150/92. Meds on record: metformin, atorvastatin, ramipril, plus gliclazide added last year. Booked after a letter mentioning "kidney changes" and "changes at the back of the eyes". Visibly upset.',
    script:{
      opening:'"I got this letter and I\u2019ve been sick about it ever since. It says my kidneys are being affected and there are changes in my eyes. So it\u2019s started, hasn\u2019t it — it\u2019s working its way in. My aunt went on dialysis, three times a week until she died. I\u2019ve done everything you people tell me and it\u2019s happening anyway, so honestly\u2026 what is even the point?"',
      facts:[
        { topic:'The despair',         text:'HIDDEN AGENDA layer one: she reads the letter as proof that effort is futile — "I\u2019ve done everything and it\u2019s happening anyway." Hopelessness, not the ACR, is what will drive the next year. If unaddressed she disengages entirely.' },
        { topic:'The secret',          text:'HIDDEN AGENDA layer two, reachable only without judgement: she STOPPED her metformin about eight months ago — it gave her relentless diarrhoea and she was too embarrassed to say, and "didn\u2019t want to be a nuisance." The HbA1c rise from 58 to 75 is the footprint of that. She feels the complications are her punishment and is bracing to be told off.' },
        { topic:'The shame',           text:'If reached gently: she\u2019s been nodding along in reviews, collecting prescriptions she doesn\u2019t take, terrified of being seen as non-compliant. Carries deep guilt; the letter has tipped it into despair.' },
        { topic:'The fear',            text:'Dialysis (the aunt) and blindness are the named terrors. She doesn\u2019t know that "background retinopathy" and "early kidney changes" are early and very actionable — she\u2019s heard only "kidneys" and "eyes" and filled the gap with her aunt\u2019s ending.' },
        { topic:'What she wants',      text:'Officially: nothing — she\u2019s here because the letter frightened her. Actually: to be told whether she\u2019s going blind and onto dialysis, permission to confess about the metformin without being shamed, and a reason to believe effort still matters.' },
      ],
      ice:{
        ideas:'The complications have "started" and are an unstoppable progression toward dialysis and blindness, like her aunt — and her own effort has failed.',
        concerns:'HIDDEN AGENDA — despair that effort is futile, PLUS a concealed reason for the deterioration: she stopped metformin 8 months ago due to GI side effects and is ashamed, experiencing the complications as deserved punishment.',
        expectations:'Bracing for bad news and a telling-off. Underneath: honest reassurance that early changes are actionable, a blame-free space to disclose the metformin, and restored agency.'
      },
      cues:['"What is even the point?" — despair is the presenting complaint; address it before the numbers.','"I\u2019ve done everything you tell me" — said by someone who stopped a medication; explore adherence with zero judgement and it may open.','HbA1c jump 58→75 — a biochemical clue that something changed; ask WHY kindly rather than just intensifying treatment.']
    },
    checkpoints:[
      { dom:'tasks', text:'Reframes the letter accurately and unfrighteningly: background retinopathy and early (microalbuminuric) kidney changes are EARLY and ACTIONABLE — not the start of inevitable dialysis/blindness; explains the difference between her aunt\u2019s late disease and her own early, reversible-trajectory findings' },
      { dom:'tasks', text:'Explores adherence WITHOUT judgement and creates space for the metformin disclosure (e.g. "lots of people find tablets hard to take, or get side effects they don\u2019t mention — how have you actually been getting on with them?") rather than assuming non-compliance or telling her off' },
      { dom:'tasks', text:'Responds constructively to the disclosure: validates that GI side effects are real and common, that stopping without telling anyone is completely understandable, and offers solutions — modified-release metformin, alternative agents, especially an SGLT2 inhibitor (renal AND cardiac protection, ideal given the kidney changes)' },
      { dom:'tasks', text:'Optimises the renal/CVD protection package: maximise ACE inhibitor (ramipril) for the kidney, tighten BP (150/92 needs action), SGLT2 inhibitor for renoprotection, statin continued, glycaemic target individualised — explains each as actively PROTECTING the kidneys and eyes' },
      { dom:'tasks', text:'Addresses the despair with genuine agency: improving control from here measurably slows or halts progression; the letter is an early-warning system that gives her time, not a verdict' },
      { dom:'rto',   text:'Hears "what is the point" and treats hopelessness as the priority; does not bury a frightened, despairing patient under a medication review' },
      { dom:'rto',   text:'Receives the metformin confession with warmth and zero shaming, explicitly removing blame, so honesty becomes safe and the partnership is rebuilt' },
      { dom:'gs',    text:'Agrees a concrete, hopeful plan with follow-up: restart/switch therapy with a side-effect-aware choice, BP and bloods recheck dated, retinal/renal monitoring explained as surveillance that catches things early, and a near review — leaving her with agency, not dread' },
    ],
    worked:[
      { lbl:'Defuse the letter',     txt:'"Before anything else — that letter is not the sentence you think it is. \u2018Background retinopathy\u2019 and \u2018early kidney changes\u2019 are the EARLIEST whispers, the kind we catch precisely so we can act. Your aunt\u2019s dialysis was end-stage disease after years. What you have is the opposite end — early, and very much still in our hands. Let me take that fear down a few notches right now."' },
      { lbl:'Open the real door',    txt:'"You said you\u2019ve done everything and it\u2019s happening anyway — and I believe you\u2019ve tried hard. But your sugar level jumped quite a bit this year, and that usually means something changed. No judgement at all, genuinely — how have you actually been getting on with the tablets? Side effects, hard to remember, anything?"' },
      { lbl:'Receive the confession',txt:'"Thank you for telling me that — really. Metformin giving you constant diarrhoea is miserable and incredibly common, and stopping it because of that isn\u2019t a failing, it\u2019s a completely human thing to do. I only wish you\u2019d felt able to tell us sooner so we could have swapped it — but that\u2019s on us for not asking, not on you. You are not in trouble."' },
      { lbl:'Turn shame into a plan',txt:'"Here\u2019s the good news hiding in this: a big chunk of the change this year is the missing tablet, not your kidneys giving up — which means it\u2019s very fixable. There\u2019s a slow-release version that\u2019s far gentler on the stomach, and there\u2019s a newer tablet that actually PROTECTS the kidneys and heart — which, given the letter, is exactly what you want on board."' },
      { lbl:'Protect, don\u2019t punish',txt:'"So everything we do now is shield-building: that kidney-protecting tablet, getting your blood pressure down because that guards both the kidneys and the eyes, keeping the cholesterol tablet, and aiming for a sugar level that\u2019s realistic for you. None of this is punishment — it\u2019s armour."' },
      { lbl:'Restore agency',        txt:'"What I want you to leave with is this: that letter bought you time, it didn\u2019t take it away. From today, every point we bring that sugar and pressure down measurably slows — often stops — these early changes. You haven\u2019t failed and it isn\u2019t too late. Let\u2019s recheck your bloods and pressure in a few weeks, and I\u2019ll see you to make sure the new tablets suit you. We do this together now — and you tell me the moment something doesn\u2019t agree with you."' },
    ],
    learning:'A complications letter lands as a death sentence when the patient hears only "kidneys" and "eyes" and fills the gap with a relative\u2019s end-stage disease. The first task is accurate reframing: background retinopathy and microalbuminuria are EARLY and actionable, the opposite end of the spectrum from dialysis. The examinable hidden agenda is two-layered: despair ("what is the point") and a concealed cause — she stopped metformin months ago for GI side effects and is ashamed, experiencing complications as punishment. The HbA1c jump (58→75) is the clue: explore adherence with genuine non-judgement, and the confession opens. Receive it without shaming, remove blame explicitly, and convert it into a plan — MR metformin or, better, an SGLT2 inhibitor for renal/cardiac protection, tightened BP and ACE inhibitor, all framed as armour. Restore agency: the letter bought time; control from here slows or halts progression.',
    knowledge:{
      guideline:'NICE NG28 type 2 diabetes · NICE NG203 CKD · diabetic retinopathy screening pathway · NICE shared decision-making',
      points:[
        { h:'Reframe early complications accurately', t:'Background (mild non-proliferative) retinopathy and microalbuminuria (raised ACR) are EARLY, monitored, and modifiable — not imminent blindness/dialysis. Distinguish explicitly from a relative\u2019s end-stage disease, which patients use to fill information gaps catastrophically.' },
        { h:'Investigate the HbA1c trajectory, don\u2019t just treat it', t:'A sharp rise (58→75) signals a change — non-adherence, a new stressor, intercurrent illness, or progression. Explore the cause (especially adherence) before reflexively intensifying; the right fix may be re-enabling a stopped drug, not adding a new one.' },
        { h:'Explore adherence without judgement', t:'Up to half of patients don\u2019t take medicines as prescribed, often from unmentioned side effects or beliefs. Ask permissively ("how do you actually get on with them?"), normalise side effects, and remove blame — shaming guarantees ongoing concealment.' },
        { h:'Renoprotection package', t:'For diabetic CKD: optimise ACE inhibitor/ARB, add an SGLT2 inhibitor (cardiorenal protection — strongly indicated with albuminuria), control BP to target, continue statin, individualise glycaemic target. Metformin: switch to modified-release for GI intolerance; review dose by eGFR. Frame interventions as organ protection.' },
        { h:'Treat the despair', t:'Hopelessness drives disengagement and worse outcomes. The honest, motivating message: early detection bought time; tightening control now measurably slows or halts progression. Agency restored is itself therapeutic.' },
        { h:'Never do', t:'Never let a frightened patient leave thinking early changes mean inevitable dialysis/blindness; never assume or accuse non-compliance; never respond to a side-effect confession with disappointment; never just intensify treatment without finding why control slipped.' },
        { h:'Safety-net & follow-up', t:'Side-effect-aware drug switch with explicit "tell me if it doesn\u2019t suit you"; BP and renal bloods rechecked and dated; retinal/renal surveillance explained as early-warning, not threat; near review to confirm tolerability and rebuild partnership.' }
      ]
    }
  };

  /* ============ 45. TELEPHONE — Unexplained hyperglycaemia: is this really type 2? ============ */
  const c45 = {
    id:'t2dm-lada', title:'"They said it was my fault for eating wrong"', type:'telephone', duration:12,
    meta:{ age:38, sex:'M', setting:'Telephone — "type 2" not responding to tablets; losing weight.', system:'Endocrine / LADA vs T2DM' },
    brief:'Mr Tomasz Wójcik, 38, slim (BMI 23), diagnosed "type 2 diabetes" 4 months ago (HbA1c 79). Started metformin, then gliclazide added. Rings because sugars are still high and climbing, he\u2019s lost ~6 kg he didn\u2019t mean to, very thirsty and passing huge amounts of urine, and "the tablets aren\u2019t working." No family history of T2DM. Recent viral illness before diagnosis. Not previously asked about ketones or autoantibodies.',
    script:{
      opening:'"I don\u2019t really know why I\u2019m still like this. I\u2019ve been taking the tablets exactly as told, I\u2019ve cut out everything — sugar, bread, the lot — and I\u2019m drinking gallons of water and weeing constantly and STILL losing weight. My family keep saying I must be sneaking food, that I brought this on myself eating badly. But honestly, doc, I barely eat now and it\u2019s getting worse, not better."',
      facts:[
        { topic:'The red-flag picture',  text:'If explored: slim build, unintentional 6 kg loss, marked polydipsia and polyuria, escalating glucose despite genuine adherence and dietary restriction, dual oral agents failing fast. If asked specifically: some nausea, occasional "fruity" breath he\u2019s noticed, more tired than ever. This is insulin deficiency, not insulin resistance.' },
        { topic:'The misdiagnosis clue',  text:'38, BMI 23, no family history of type 2, preceding viral illness, rapid failure of oral therapy — the classic profile of LADA / late-onset type 1, mislabelled type 2 on the HbA1c alone. Ketones and GAD antibodies / C-peptide were never checked.' },
        { topic:'The hidden agenda',      text:'HIDDEN AGENDA — the BLAME. His family (and, he felt, the clinician who diagnosed him) framed this as his fault for "eating wrong". He has internalised deep shame and is half-starving himself trying to "fix" what he believes he caused. He rings as much for absolution as for help — to find out whether he really did this to himself.' },
        { topic:'The fear/isolation',     text:'If reached: he\u2019s stopped eating with his family to avoid the comments, is frightened by the weight loss but assumes it means he\u2019s "still doing something wrong." No one has told him this might not be type 2 at all.' },
        { topic:'What he wants',         text:'Officially: stronger tablets / to know why the tablets aren\u2019t working. Actually: to be told this is not his fault, to understand what is really happening, and to be made safe — he is closer to DKA than anyone has recognised.' },
      ],
      ice:{
        ideas:'His type 2 diabetes is "out of control" because he\u2019s failed to eat well enough — the tablets should work and aren\u2019t, so it must be him.',
        concerns:'HIDDEN AGENDA — shame and self-blame absorbed from family/diagnosis ("you did this by eating wrong"); he is starving himself to atone and frightened by relentless weight loss.',
        expectations:'Stronger medication or an explanation. What he actually needs: recognition that this is likely NOT type 2 (LADA/type 1), urgent safety assessment for DKA, and the lifting of misplaced blame.'
      },
      cues:['Slim, young, weight-losing, oral agents failing fast — the profile that should trigger "is this really type 2?"','"Fruity breath", nausea, gallons of thirst, escalating sugars — possible evolving DKA; assess urgency now.','"My family say I brought this on myself" — the blame is central; lifting it is half the consultation.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the diagnosis is likely WRONG: a slim 38-year-old with weight loss, marked osmotic symptoms, no FH of T2DM, a viral prodrome and rapid failure of dual oral therapy fits autoimmune diabetes (LADA / late-onset type 1), not type 2 — and that sulfonylurea + diet restriction in insulin deficiency is the wrong and worsening track' },
      { dom:'tasks', text:'Assesses acute safety FIRST: checks for DKA features (thirst, polyuria, weight loss, nausea/vomiting, abdominal pain, fruity breath, drowsiness, rapid breathing) and arranges urgent capillary/blood ketone and glucose testing — same-day, with a low threshold for acute admission' },
      { dom:'tasks', text:'Acts on the suspected type 1/LADA appropriately: urgent same-day diabetes specialist contact, does NOT simply add another oral agent or tell him to restrict further; recognises he likely needs insulin and that delay risks DKA' },
      { dom:'tasks', text:'Plans the confirmatory work-up: ketones now, and GAD/islet autoantibodies and C-peptide to confirm autoimmune/insulin-deficient diabetes — while making clear treatment safety is not delayed waiting for antibody results' },
      { dom:'tasks', text:'Explicitly LIFTS the blame: this is an autoimmune condition where the body stops making insulin — it is NOT caused by eating badly and NOT his fault; the weight loss and failing tablets are the disease, not his weakness; corrects the family\u2019s narrative directly' },
      { dom:'rto',   text:'Hears the shame and self-starvation and addresses it as central, not incidental; does not reinforce the "try harder with diet" framing that is harming him' },
      { dom:'rto',   text:'Delivers the reframe with compassion: relief that there IS an explanation and it isn\u2019t his fault, balanced with honest seriousness about needing urgent assessment today' },
      { dom:'gs',    text:'Safety-nets robustly: precise DKA red flags → 999/A&E (vomiting, abdominal pain, drowsiness, breathlessness); same-day specialist/acute pathway confirmed; tells him NOT to keep restricting food; a defined who-rings-whom plan and follow-up' },
    ],
    worked:[
      { lbl:'Believe and reframe',   txt:'"I\u2019m really glad you rang, because what you\u2019re describing tells me something important: the tablets aren\u2019t failing because of anything you\u2019re doing wrong. In someone slim, your age, losing weight this fast with tablets that should work — I don\u2019t think this is type 2 diabetes at all. I think it may have been labelled wrongly."' },
      { lbl:'Lift the blame, plainly',txt:'"So let me say this as clearly as I can, because I think you\u2019ve been carrying it heavily: you did NOT do this by eating badly. The kind of diabetes I\u2019m now thinking of is where the body\u2019s own immune system stops it making insulin — nobody causes it with bread or sugar. The weight loss and the thirst aren\u2019t you failing; they\u2019re the illness. Your family mean well, but they\u2019ve got this wrong, and so, I\u2019m sorry to say, did the first diagnosis."' },
      { lbl:'Assess safety now',     txt:'"Before anything else I need to check how safe you are today. The thirst, the weight loss, the fruity smell you noticed, any nausea — together those can mean your body is running short of insulin and tipping into something we treat urgently. I need you to get a blood test today, and I\u2019m going to talk to the diabetes team straight away."' },
      { lbl:'Stop the starving',     txt:'"And please — stop restricting your food. I know you\u2019ve been trying to fix this by eating less and less, but if your body can\u2019t make insulin, starving yourself makes it more dangerous, not less. This was never a willpower problem. You can eat normally."' },
      { lbl:'The right treatment',   txt:'"What you most likely need isn\u2019t a stronger tablet — it\u2019s insulin, the thing your body has stopped making, and the specialist team will start that properly. We\u2019ll also do some blood tests to confirm the type, but we don\u2019t wait on those to keep you safe."' },
      { lbl:'DKA safety-net',        txt:'"Here\u2019s what matters most before I get you that appointment: if you start vomiting, get tummy pain, feel drowsy or your breathing speeds up — that\u2019s 999 or A&E immediately, don\u2019t wait. I\u2019ll ring you back within the hour to confirm the plan and make sure you\u2019ve been seen. You came in thinking you\u2019d failed. You haven\u2019t — you were mislabelled, and now we\u2019re going to put it right."' },
    ],
    learning:'The classic SCA diabetes trap: a slim, young adult labelled "type 2" on the HbA1c alone who is actually insulin-deficient — LADA / late-onset type 1. The flags are unmistakable once looked for: slim build, unintentional weight loss, marked osmotic symptoms, no family history of T2DM, a viral prodrome, and rapid failure of oral agents. The danger is twofold: ongoing wrong treatment (sulfonylurea + dietary restriction) and an evolving DKA that no one has screened for. Assess acute safety first (ketones, DKA features, low threshold to admit), get urgent specialist input, plan confirmatory antibodies/C-peptide without delaying safety, and recognise he needs insulin not stronger tablets. The examinable hidden agenda is the blame: family and the initial diagnosis framed it as his dietary fault, and he is shamefully starving himself to atone. Lift that blame explicitly — autoimmune diabetes is not caused by eating badly — stop the self-starvation, and deliver the reframe with both compassion and urgency.',
    knowledge:{
      guideline:'NICE NG17 type 1 diabetes · NICE NG28 (T2DM) · Diabetes UK LADA guidance · DKA recognition (JBDS)',
      points:[
        { h:'Question the "type 2" label', t:'Suspect type 1/LADA when "T2DM" occurs in a younger, slim or normal-weight adult, with weight loss, marked osmotic symptoms, ketosis, no family history of T2DM, personal/family autoimmune disease, or rapid failure of oral therapy. HbA1c diagnoses diabetes but does NOT determine the type.' },
        { h:'Assess for DKA — safety first', t:'Insulin deficiency risks diabetic ketoacidosis: thirst, polyuria, weight loss, nausea/vomiting, abdominal pain, fruity (ketotic) breath, Kussmaul breathing, drowsiness. Check blood/urine ketones and glucose urgently; vomiting, abdominal pain, drowsiness or breathlessness → emergency admission.' },
        { h:'Treat the suspicion, not just the test', t:'Do not add another oral agent or intensify dietary restriction in suspected insulin deficiency. Arrange urgent same-day specialist diabetes input; the patient likely needs insulin. Confirmatory GAD/islet autoantibodies and C-peptide can follow but must not delay safety.' },
        { h:'Sulfonylurea + starvation is harmful here', t:'In insulin-deficient diabetes, pushing a sulfonylurea on a failing pancreas and restricting food accelerates catabolism and ketosis. Stopping inappropriate dietary restriction is part of treatment.' },
        { h:'Lift the misplaced blame', t:'Autoimmune diabetes is not caused by diet or lifestyle. Patients mislabelled type 2 frequently absorb blame ("you ate wrong") from family and even clinicians. Correct this explicitly and compassionately — it is both ethically right and clinically important (shame drives harmful self-starvation and concealment).' },
        { h:'Never do', t:'Never accept a "type 2" label uncritically in a slim, weight-losing young adult; never miss evolving DKA; never just add tablets or tighten the diet; never leave the self-blame and family narrative uncorrected.' },
        { h:'Safety-net & follow-up', t:'Same-day ketone/glucose testing and specialist contact; precise DKA red flags → 999/A&E; instruction to stop restricting food; confirmatory antibody/C-peptide testing arranged; a defined call-back and follow-up to confirm he was seen and started safely.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c42, c43, c44, c45);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    't2dm-new-diagnosis': {
      ceg: ['Long-term conditions & cancer', 'Health disadvantage & vulnerabilities'],
      stem: {
        name: 'Errol Bennett', age: '49 years · male',
        pmh: ['New type 2 diabetes — HbA1c 71 then 69 mmol/mol', 'BMI 32, BP 142/88, total cholesterol 5.9', 'eGFR/ACR normal; no retinopathy flag yet'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Smoker 10/day. Self-employed delivery driver. Father: T2DM → blindness, below-knee amputation, fatal MI at 61.',
        reason: 'Video consultation — new diabetes diagnosis (results).'
      },
      timeMap: [
        { t:'0–2',  h:'Hear the fatalism',   d:'"I\u2019ve made my peace with where this goes." That despair, not the HbA1c, is today\u2019s real diagnosis. Don\u2019t hand a prescription into it.' },
        { t:'2–5',  h:'Break the inheritance',d:'His father\u2019s untreated, different-era course is not Errol\u2019s fixed fate. Caught early, asymptomatic, everything working — a different starting line. Complications come from years uncontrolled, all modifiable.' },
        { t:'5–7',  h:'The licence, proactively', d:'Diet ± metformin: no DVLA notification, no licence loss. Answer it before he has to ask — livelihood fear silently drives disengagement.' },
        { t:'7–10', h:'Real-life plan',        d:'Garage food swaps, walking at drops, smoking cessation as highest-yield CVD action. Offer remission as a genuine goal given early onset + weight.' },
        { t:'10–12',h:'Scaffold + one step',    d:'Metformin, DESMOND, retinal/foot screening, bloods; ONE concrete task (swap energy drinks for water); near review. Agency, not a leaflet.' }
      ],
      wordPics: {
        fail: 'Delivers the diagnosis as a complication list, hands over metformin and a leaflet, never touches the fatalism or the licence fear; prescribes an idealised lifestyle ignoring an 11-hour driving day; no smoking cessation, no remission offered — a technically-correct consultation that guarantees disengagement.',
        pass: 'Explains the diagnosis and CVD picture; starts metformin and arranges education/screening; covers smoking and BP; gives basic lifestyle advice and follow-up.',
        exc:  'Treats the fatalism as the priority and dismantles the father-inheritance with evidence; answers the DVLA/livelihood fear proactively and accurately; builds a plan around his real working day; leads with smoking cessation; offers remission as a real goal; and leaves him with one doable step and genuine agency — "a switch in your hand", not his father\u2019s train.'
      },
      avoid: [
        { dont:'"Diabetes can lead to eye, kidney, nerve and heart problems if it\u2019s not controlled."', instead:'"What happened to your dad came from years of high sugar left unchecked in a different era — control it and those complications largely don\u2019t come. You\u2019re at a junction, not on his train."', why:'Opening with the complication list confirms his fatalism and pushes him further into resignation.' },
        { dont:'"You\u2019ll need to eat more healthily and get more exercise."', instead:'"Doing eleven-hour shifts, let\u2019s be realistic: water not energy drinks at the garage, nuts not pastries, a five-minute walk at every few drops. Small and free."', why:'An idealised prescription a driver can\u2019t follow breeds guilt and disengagement; meet his actual day.' },
        { dont:'"Let\u2019s start metformin and see you in a few months."', instead:'"Metformin plus one thing this week — swap the energy drinks for water — and I\u2019ll see you in two weeks to build on it. And the biggest win for your heart is the cigarettes when you\u2019re ready."', why:'A tablet and a distant review misses smoking (highest yield) and gives no early foothold of agency.' }
      ]
    },

    't2dm-foot': {
      ceg: ['Urgent & unscheduled care', 'Health disadvantage & vulnerabilities'],
      stem: {
        name: 'Derek Hollis', age: '63 years · male',
        pmh: ['T2DM 11 years (HbA1c 74)', 'Gout; peripheral neuropathy on last foot check', 'Sole carer for wife (advanced MS)'],
        meds: ['Metformin', 'Gliclazide', 'Allopurinol', 'Atorvastatin'],
        allergy: 'NKDA',
        recent: '⚠ Requesting phone script for "gout". On questioning: forefoot red/hot/swollen 3 days, "run down", shivery; can\u2019t feel a possible skin break under the foot.',
        reason: 'Telephone — wants colchicine for a "gout flare".'
      },
      timeMap: [
        { t:'0–2',  h:'Don\u2019t prescribe',   d:'He pushes for a quick remote script "to save trouble". A red/hot/swollen diabetic foot is not phone-script gout — slow it down.' },
        { t:'2–4',  h:'Reframe the picture',  d:'Spread beyond the joint, possible skin break, systemic upset, neuropathy dulling pain = potential limb-threatening infection/sepsis, not a flare.' },
        { t:'4–6',  h:'The false reassurance', d:'"It hurts less than last time" is the red flag, not comfort — neuropathy masks severity. Plus shivery/run-down raises sepsis concern.' },
        { t:'6–9',  h:'Solve the carer barrier',d:'"You\u2019ve got Sheila to see to" is the real obstacle. Emergency cover, social services, neighbours — treat the logistics as a clinical task. Meet the amputation fear honestly.' },
        { t:'9–12', h:'Safe plan + sepsis net', d:'Same-day diabetic-foot assessment arranged WITH care cover; offload/no barefoot; sepsis red flags → 999; planned call-back to confirm both.' }
      ],
      wordPics: {
        fail: 'Issues colchicine down the phone for a "gout history"; accepts reduced pain as reassuring; never asks why he wants it remote, so the carer barrier and amputation fear stay hidden; a limb-threatening diabetic foot goes unseen.',
        pass: 'Recognises the foot needs same-day face-to-face assessment and refuses the remote script; screens for sepsis; arranges urgent review and safety-nets.',
        exc:  'Reads the push for a remote script as the danger sign; reframes the neuropathic foot as an emergency and explains why reduced pain is ominous; surfaces and actively problem-solves the sole-carer barrier (emergency cover/social services); meets the buried amputation fear with the truth that early assessment SAVES feet; and locks in a same-day plan with care cover confirmed and a sepsis safety-net.'
      },
      avoid: [
        { dont:'"You know your gout — I\u2019ll send colchicine to the chemist."', instead:'"A red, hot, swollen foot in someone with diabetes and reduced feeling can be a serious infection, not gout — I can\u2019t treat that down the phone. It needs looking at today."', why:'A phone script for a possible diabetic foot infection risks a limb; the gout history is a trap.' },
        { dont:'"At least it\u2019s not too painful, so that\u2019s reassuring."', instead:'"Because your nerves are dulled by diabetes, a serious foot problem can feel deceptively mild — so less pain actually worries me more here, not less."', why:'Treating reduced pain as reassuring in neuropathy is exactly how diabetic foot emergencies get missed.' },
        { dont:'"You really need to get to hospital to have this seen today."', instead:'"You can\u2019t just leave Sheila — let\u2019s solve that together. Who could sit with her for a couple of hours? If no one, I\u2019ll get social services to arrange emergency cover so you CAN be seen."', why:'Telling a sole carer to "just get seen" without solving who covers their dependant means the safe plan never happens.' }
      ]
    },

    't2dm-complications': {
      ceg: ['Long-term conditions & cancer', 'Investigations & results'],
      stem: {
        name: 'Salma Iqbal', age: '57 years · female',
        pmh: ['T2DM 9 years', 'New raised ACR (early diabetic kidney disease); background retinopathy on screening', 'HbA1c 75 (was 58 a year ago); BP 150/92'],
        meds: ['Metformin', 'Gliclazide', 'Atorvastatin', 'Ramipril'],
        allergy: 'NKDA',
        recent: '⚠ Distressed by a letter mentioning "kidney changes" and "changes at the back of the eyes". Aunt died on dialysis.',
        reason: 'Video consultation — frightened by a complications letter.'
      },
      timeMap: [
        { t:'0–2',  h:'Defuse the letter',   d:'She\u2019s read "kidneys/eyes" as her aunt\u2019s dialysis ending. Reframe at once: background retinopathy + early kidney changes are the EARLIEST whispers, caught to be acted on.' },
        { t:'2–4',  h:'Address the despair',  d:'"What is the point" is the presenting complaint. The letter bought time; it didn\u2019t take it. Effort still changes everything from here.' },
        { t:'4–7',  h:'Open the real door',   d:'HbA1c jumped 58→75 — ask WHY, with zero judgement. The metformin she quietly stopped for diarrhoea, ashamed, surfaces. Receive it without blame.' },
        { t:'7–10', h:'Shame into a plan',     d:'MR metformin or an SGLT2 inhibitor (renal + cardiac protection — ideal here); maximise ramipril; tighten BP; statin continued. All framed as armour, not punishment.' },
        { t:'10–12',h:'Restore agency + net',  d:'Recheck bloods/BP dated; surveillance explained as early-warning; "tell me the moment a tablet doesn\u2019t suit you"; near review to rebuild partnership.' }
      ],
      wordPics: {
        fail: 'Reviews the medications and intensifies treatment without exploring the HbA1c jump; never reframes the letter, so she leaves believing dialysis is coming; assumes or implies non-compliance; the stopped metformin and the shame stay hidden; despair untouched, disengagement assured.',
        pass: 'Reframes early changes as actionable; explores adherence and finds the stopped metformin; switches/adds appropriate renoprotective therapy; tightens BP; safety-nets and follows up.',
        exc:  'Defuses the catastrophic reading immediately and treats the despair as central; reads the HbA1c jump as a clue and opens an utterly blame-free door to the metformin confession; receives it with warmth, removes blame explicitly, and converts it into an SGLT2-led protective plan; and restores genuine agency — the letter bought time, and control from today slows or halts the early changes.'
      },
      avoid: [
        { dont:'"Your kidneys and eyes are showing some diabetic damage, so we need to tighten things up."', instead:'"These are the earliest, mildest changes — the kind we catch precisely so we can act. This is the opposite end of the spectrum from your aunt\u2019s dialysis. Let me take that fear down right now."', why:'Confirming "damage" without reframing leaves her trapped in the dialysis/blindness catastrophe.' },
        { dont:'"Have you been taking your medications as prescribed?"', instead:'"No judgement at all — lots of people get side effects they don\u2019t mention, or find tablets hard going. How have you actually been getting on with them?"', why:'A compliance challenge triggers defensiveness and concealment; a permissive, normalising question opens the truth.' },
        { dont:'"You really must keep taking your tablets or this will get worse."', instead:'"Metformin giving you constant diarrhoea is miserable and common — stopping it wasn\u2019t a failing. There\u2019s a gentler version and a newer tablet that actually protects your kidneys. You\u2019re not in trouble; let\u2019s fix it together."', why:'A telling-off cements shame and disengagement; a blame-free, solution-focused response rebuilds the partnership.' }
      ]
    },

    't2dm-lada': {
      ceg: ['Long-term conditions & cancer', 'Urgent & unscheduled care'],
      stem: {
        name: 'Tomasz Wójcik', age: '38 years · male',
        pmh: ['"Type 2 diabetes" diagnosed 4 months ago (HbA1c 79)', 'BMI 23 (slim); unintentional ~6 kg weight loss', 'Marked thirst/polyuria; viral illness preceded diagnosis; no FH of T2DM'],
        meds: ['Metformin', 'Gliclazide added'],
        allergy: 'NKDA',
        recent: '⚠ Sugars high and climbing despite adherence + strict diet. Notes "fruity" breath, some nausea. Ketones/GAD/C-peptide never checked.',
        reason: 'Telephone — "the tablets aren\u2019t working".'
      },
      timeMap: [
        { t:'0–2',  h:'Believe + suspect',   d:'Slim, 38, weight-losing, oral agents failing fast, no FH — this is very likely NOT type 2. The tablets aren\u2019t failing because of him.' },
        { t:'2–4',  h:'Lift the blame',       d:'Autoimmune diabetes isn\u2019t caused by eating badly. The family narrative and the first diagnosis got it wrong. Say it plainly — he\u2019s been carrying it.' },
        { t:'4–6',  h:'Assess safety NOW',    d:'Fruity breath, nausea, relentless osmotic symptoms = possible evolving DKA. Urgent same-day ketones/glucose; low threshold to admit.' },
        { t:'6–9',  h:'Right track, not stronger tablets', d:'Stop further food restriction; urgent specialist contact; he likely needs INSULIN. Confirmatory GAD/C-peptide to follow without delaying safety.' },
        { t:'9–12', h:'DKA net + call-back',   d:'Vomiting, abdominal pain, drowsiness, fast breathing → 999/A&E. Defined who-rings-whom; call-back within the hour to confirm he\u2019s seen. "You were mislabelled — we\u2019re putting it right."' }
      ],
      wordPics: {
        fail: 'Accepts the "type 2" label, adds or up-titrates another oral agent, advises tighter diet — accelerating catabolism in an insulin-deficient man; misses evolving DKA entirely; leaves the self-blame and family narrative intact while he keeps starving himself.',
        pass: 'Suspects type 1/LADA from the profile, screens for DKA, arranges urgent specialist input and confirmatory antibodies, and tells him to stop restricting food.',
        exc:  'Spots the misdiagnosis immediately and assesses acute DKA safety first; recognises he needs insulin not stronger tablets and routes him same-day; plans antibodies/C-peptide without delaying safety; and — crucially — lifts the absorbed blame explicitly and compassionately, stops the self-starvation, and delivers the reframe with both relief and appropriate urgency, plus a precise DKA safety-net and call-back.'
      },
      avoid: [
        { dont:'"Your type 2 is hard to control — let\u2019s add another tablet and tighten your diet further."', instead:'"In someone slim, your age, losing weight this fast, I don\u2019t think this is type 2 at all — and adding tablets or eating less could make it more dangerous. You likely need insulin, urgently."', why:'Intensifying oral therapy and restriction in insulin-deficient diabetes accelerates ketosis toward DKA.' },
        { dont:'"You just need to stick to the diet really strictly and keep taking the tablets."', instead:'"Please stop restricting your food — if your body can\u2019t make insulin, starving yourself is more dangerous, not less. This was never a willpower problem."', why:'Reinforcing the diet narrative deepens harm and the self-blame that is starving him.' },
        { dont:'"Your family are probably right that diet plays a big part — let\u2019s focus there."', instead:'"Let me be clear: you did NOT cause this by eating wrong. This kind of diabetes is the immune system stopping insulin — no bread or sugar causes it. Your family mean well but they\u2019ve got this wrong, and so did the first diagnosis."', why:'Endorsing the blame narrative is both factually wrong and actively harmful to a man already self-punishing.' }
      ]
    }
  });

})();
