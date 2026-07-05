/* ============================================================
   Reasoning GP — Case Library batch 14: "Collapse, dizziness & funny turns"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   No NG12 cancer link applies to these presentations (correctly omitted).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases13.js.
   ============================================================ */

(function(){

  /* ============ 49. VIDEO — Vasovagal syncope & the brain-tumour fear ============ */
  const c49 = {
    id:'syncope-vasovagal', title:'"What if it\u2019s a brain tumour?"', type:'video', duration:12,
    meta:{ age:24, sex:'F', setting:'Video consultation — recurrent fainting, very anxious.', system:'Neuro / Vasovagal syncope' },
    brief:'Miss Casey Doyle, 24, junior nurse. Three faints in four months: once giving blood, once standing in a hot ward handover, once after rising fast from bed with a viral illness. Each preceded by feeling hot, nauseated, "tunnel vision", quick recovery. No tongue-biting, no prolonged confusion, no incontinence. ECG done last week: normal. Lying/standing BP normal in clinic. PMH: nil. Meds: none. Visibly tense.',
    script:{
      opening:'"Thanks for fitting me in. I\u2019ll just say it — I\u2019ve fainted three times now and I\u2019ve convinced myself something\u2019s seriously wrong. I keep reading that fainting can be a brain tumour or your heart stopping, and I\u2019ve barely slept. I\u2019m a nurse, so I know just enough to terrify myself. I think I need a brain scan, honestly. I just need to know it\u2019s not something that\u2019s going to kill me."',
      facts:[
        { topic:'The faints',          text:'If explored: every one had a classic prodrome — hot, clammy, sick, vision greying/tunnelling, sometimes ringing ears — then a brief faint with rapid full recovery. Triggers: venepuncture, prolonged standing in heat, standing up quickly when unwell. No exertional faints, no palpitations beforehand, no faints lying down, no chest pain.' },
        { topic:'No red flags',         text:'If asked: no faints during exercise, no sudden collapse without warning, no family history of sudden/young cardiac death, no epilepsy features (no aura-then-jerking, no tongue-biting, no post-ictal confusion, no incontinence). The story is textbook vasovagal.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA — reachable when her fear is explored: a patient on her ward, a woman her age, was recently diagnosed with a brain tumour that "started with funny turns". Casey has mapped that story onto herself. The health anxiety, not the faints, is the real presentation — she\u2019s been avoiding driving, cancelling plans, and catastrophising at 3am.' },
        { topic:'The avoidance',        text:'If reached: she\u2019s stopped going to the gym, won\u2019t drive in case she faints, sleeps badly, checks her pulse constantly. The faints are benign but her LIFE is shrinking around the fear.' },
        { topic:'What she wants',       text:'Officially: a brain scan and to be told she isn\u2019t dying. Actually: a confident, credible explanation of what IS happening, genuine reassurance that doesn\u2019t feel like a brush-off, and her life back from the anxiety.' },
      ],
      ice:{
        ideas:'Fainting means something sinister — a brain tumour or her heart stopping — and she needs a scan to rule it out.',
        concerns:'HIDDEN AGENDA — a ward patient her age recently diagnosed with a brain tumour that "started with funny turns"; Casey has mapped that onto herself. Health anxiety with real life-shrinking avoidance is the true presentation.',
        expectations:'A brain scan and to be told she\u2019s not dying. Underneath: a confident positive diagnosis that doesn\u2019t feel dismissive, and relief from the anxiety that has taken over her life.'
      },
      cues:['"I\u2019m a nurse, I know just enough to terrify myself" — health anxiety signposted; the worry is the presentation.','Every faint has a textbook prodrome and trigger — the positive diagnosis is right there; use it confidently.','Mentions a patient "her age" / avoidance of driving and the gym — the specific fear and its cost, waiting to be asked about.']
    },
    checkpoints:[
      { dom:'tasks', text:'Makes a CONFIDENT POSITIVE diagnosis of vasovagal syncope from the history — prodrome (hot, nauseated, tunnel vision), classic triggers (venepuncture, prolonged standing, heat, postural on illness), rapid full recovery — rather than an open-ended "let\u2019s scan to be safe"' },
      { dom:'tasks', text:'Actively excludes the red flags out loud and explains why they reassure: no exertional/no-warning syncope, no palpitations, no syncope lying down (cardiac); no aura-jerk-tongue-bite-postictal pattern (seizure); no family history of young sudden death — and a normal ECG' },
      { dom:'tasks', text:'Explains why a brain scan is NOT indicated in a way that reassures rather than dismisses: brain tumours don\u2019t cause classic faints-with-warning; a normal scan wouldn\u2019t treat the anxiety and would likely fuel it; the diagnosis is made from the story, which is textbook' },
      { dom:'tasks', text:'Identifies and addresses the HEALTH ANXIETY as the real problem: explores the ward-patient trigger, validates the fear, and offers genuine help (psychoeducation, the avoidance/driving/gym, sleep, reassurance-seeking cycle, and a route to anxiety support if it persists)' },
      { dom:'tasks', text:'Gives practical vasovagal self-management: recognise the prodrome and lie down / counter-pressure manoeuvres (leg crossing, hand grip), hydration and salt, avoid triggers/quick standing; and gives sensible, accurate driving advice for simple faints with warning' },
      { dom:'rto',   text:'Hears the signposted health anxiety and treats reassurance as a skilled task — specific, evidence-based, and warm — not a dismissive "it\u2019s just a faint"' },
      { dom:'rto',   text:'Explores the specific fear (the ward patient) and the life-shrinking avoidance, so the reassurance is targeted at what she actually dreads' },
      { dom:'gs',    text:'Safety-nets precisely so reassurance is safe: what WOULD change the picture and warrant review (faints without warning, during exertion, palpitations-then-collapse, injury) → come back; offers follow-up for the anxiety; leaves her with a diagnosis, a self-management plan, and her life back' },
    ],
    worked:[
      { lbl:'Diagnose with confidence', txt:'"I want to start with the answer, because you\u2019ve been carrying the question at 3am: what you\u2019re describing is a classic simple faint — vasovagal syncope. I\u2019m not guessing or being kind; the story fits it perfectly, and that confidence is the most useful thing I can give you today."' },
      { lbl:'Show your working',         txt:'"Here\u2019s why I\u2019m sure. Every faint gave you warning — hot, sick, tunnel vision — and a quick recovery. They happened giving blood, standing in a hot ward, getting up fast when ill. That\u2019s the textbook trigger list. The faints that worry me are the OPPOSITE: no warning, during exercise, or a racing heart first — and you\u2019ve had none of those, your ECG\u2019s normal, and there\u2019s no young sudden death in your family. I\u2019ve actively looked for the dangerous version and it isn\u2019t here."' },
      { lbl:'The scan, reframed',        txt:'"On the brain scan — I understand the instinct, but let me be straight as one clinician to another: brain tumours don\u2019t cause faints-with-warning like yours. A scan wouldn\u2019t change this diagnosis, and an incidental finding would give us something new to worry about for no reason. The honest, evidence-based answer is that your story IS the test, and it\u2019s reassuring."' },
      { lbl:'Find the real fear',        txt:'"Can I ask what specifically frightened you into a brain tumour? \u2026 The patient on your ward, your age — that makes complete sense. You\u2019ve seen how a serious illness can start, and your brain did the cruel thing of writing you into her story. But her funny turns and your faints are genuinely different things, and I can tell you why with confidence."' },
      { lbl:'Treat the anxiety',         txt:'"Here\u2019s what I think is actually happening to your life: the faints are harmless, but the FEAR of them has you not driving, off the gym, checking your pulse, not sleeping. That\u2019s health anxiety, it\u2019s incredibly common, and it\u2019s treatable. The constant Googling and pulse-checking actually feeds it. Let\u2019s get your life back, not just label the faints."' },
      { lbl:'Self-help + safety-net',    txt:'"For the faints: when you feel that hot, tunnel-vision warning, get down — sit or lie, cross your legs, clench your fists; keep well hydrated, a bit more salt, don\u2019t spring up. For simple faints with warning you\u2019re fine to drive. Come back if anything changes — a faint with NO warning, during exercise, or a thumping heart before you go. And I\u2019d like to see you about the worry itself, because that\u2019s the bit stealing your sleep. Deal?"' },
    ],
    learning:'Vasovagal syncope is a POSITIVE clinical diagnosis from the history — prodrome (hot, nauseated, tunnel vision, ringing ears), classic triggers (venepuncture, prolonged standing, heat, postural on illness), rapid full recovery — not a diagnosis of exclusion that requires scanning. The skill set is twofold. Clinically: make the diagnosis confidently while actively excluding (out loud) the red flags that mandate cardiac or neurological work-up — exertional/no-warning syncope, palpitations-then-collapse, syncope lying down, family history of young sudden death, seizure features. Communicationally: the real presentation is HEALTH ANXIETY, signposted and triggered by a ward patient her age with a brain tumour. Reassurance here is a skilled task — specific, evidence-based, warm — not "it\u2019s just a faint". Explain why a scan would harm not help, find and address the specific fear and the life-shrinking avoidance, give vasovagal self-management and accurate driving advice, and safety-net precisely so reassurance is safe.',
    knowledge:{
      guideline:'NICE CG109 transient loss of consciousness · ESC syncope guidance · NICE CG113 (health anxiety / GAD)',
      points:[
        { h:'Vasovagal is a positive diagnosis', t:'Diagnose from the 3 Ps pattern: Posture (prolonged standing), Provoking factors (pain, venepuncture, heat, emotion), and Prodrome (hot, nauseated, sweaty, visual greying/tunnelling), with rapid full recovery. A typical history needs no imaging.' },
        { h:'Red flags that change everything', t:'Refer/investigate: syncope during exertion or supine, sudden collapse with NO warning, palpitations preceding syncope, family history of sudden cardiac death <40 / inherited cardiac conditions, abnormal ECG, syncope causing serious injury. Seizure pointers (aura→rhythmic jerking, lateral tongue-bite, prolonged post-ictal confusion, incontinence) point to epilepsy, not simple faint.' },
        { h:'Why NOT to scan', t:'Brain tumours do not present as classic faints-with-warning; neuroimaging is not indicated for typical vasovagal syncope. A scan won\u2019t treat health anxiety and risks incidental findings that amplify it. Explaining this well IS the treatment.' },
        { h:'Reassurance is a skill, not a brush-off', t:'Effective reassurance: name the diagnosis confidently, show the reasoning, explicitly state the dangerous features you looked for and didn\u2019t find, find the SPECIFIC fear, and address the avoidance. "It\u2019s just a faint" without this fails.' },
        { h:'Manage health anxiety', t:'Validate, psychoeducate, identify reassurance-seeking and checking (pulse-checking, Googling) as maintaining factors, tackle avoidance (driving, gym), address sleep, and offer CBT/anxiety support (CG113) if persistent. The faints are benign; the anxiety is the morbidity.' },
        { h:'Self-management + driving', t:'Recognise prodrome → sit/lie, physical counter-pressure manoeuvres (leg-crossing, hand-grip, arm-tensing), hydration and modest salt increase, avoid triggers/rapid standing. Simple faints with warning generally permit driving (check current DVLA rules; recurrent/unexplained or no-warning syncope has restrictions).' },
        { h:'Never do', t:'Never order a brain scan to placate; never diagnose by exclusion when the story is textbook; never deliver flat "it\u2019s just a faint" reassurance; never miss exertional/no-warning syncope or a family history of sudden death.' }
      ]
    }
  };

  /* ============ 50. VIDEO — Exertional syncope, family history: the one you refer ============ */
  const c50 = {
    id:'syncope-cardiac-fh', title:'"It only happens when I play"', type:'video', duration:12,
    meta:{ age:19, sex:'M', setting:'Video consultation — faints during football; minimising.', system:'Cardiology / Red-flag syncope' },
    brief:'Mr Deniz Aydin, 19, semi-professional footballer (academy contract pending). Two episodes of collapse DURING matches in the last season — once "blacked out chasing a ball", once felt his "heart going mad" then went down; both witnessed, quick recovery, attributed to "heat/dehydration". Booked by his mother. On screening he reveals a cousin died suddenly in his sleep aged 23. ECG not yet done. PMH: nil. Meds: none. Wants this "signed off" so his trial isn\u2019t affected.',
    script:{
      opening:'"Honestly, doc, I think my mum\u2019s overreacting. I went down a couple of times on the pitch last season but it was a scorching day and I hadn\u2019t drunk enough — happens to loads of lads. I\u2019ve got an academy trial coming up and I really just need you to say I\u2019m fine to play, because if a doctor starts poking around they\u2019ll pull me from the squad and that\u2019s my whole life gone. So\u2026 I\u2019m fine, right?"',
      facts:[
        { topic:'The episodes',         text:'If pressed past the minimising: both collapses happened DURING exertion (mid-match), one with palpitations ("heart going mad") immediately before going down, both with little/no typical faint warning. Not after standing in heat off the pitch — DURING running. This is exertional syncope: a major red flag.' },
        { topic:'The family history',    text:'Reluctantly: a cousin (father\u2019s side) died suddenly in his sleep at 23, "heart thing, no one really explained it". An uncle has "a pacemaker young". This is a family history suggestive of an inherited arrhythmia/cardiomyopathy (HCM, long QT, Brugada, ARVC).' },
        { topic:'The hidden agenda',     text:'HIDDEN AGENDA — the minimising IS the agenda: football is his entire identity and route out; an academy trial is imminent. He is terrified that being investigated means being pulled from the squad and losing everything, so he is actively downplaying genuinely dangerous symptoms to get "signed off".' },
        { topic:'The fear underneath',   text:'If reached gently: he\u2019s actually frightened too — he KNOWS the cousin story, has wondered, but cannot afford for it to be real this close to his trial. Bravado over fear.' },
        { topic:'What he wants',         text:'Officially: to be cleared to play immediately. Actually (and what he needs): to be kept ALIVE — exertional syncope with a family history of young sudden death is potentially life-threatening — handled in a way that takes his career and his fear seriously rather than just slamming a door.' },
      ],
      ice:{
        ideas:'It was heat and dehydration, normal for footballers; he just needs a doctor to clear him to play.',
        concerns:'HIDDEN AGENDA — terror that investigation will end his football career/academy trial, driving active minimisation of dangerous symptoms; underneath, a real buried fear about the cousin who died at 23.',
        expectations:'To be "signed off" fit to play today. What he actually needs: recognition that exertional syncope + family history of young sudden death is a potential emergency requiring urgent cardiac work-up and temporary cessation of high-intensity sport.'
      },
      cues:['"It only happens when I play" — exertional syncope is a cardinal red flag; do NOT accept the heat/dehydration reframe.','A cousin who died suddenly at 23 + an uncle with a young pacemaker — inherited cardiac disease until proven otherwise.','"Just say I\u2019m fine so my trial isn\u2019t affected" — the pressure to clear him is exactly the trap; safety must override.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises EXERTIONAL syncope as a cardinal red flag and refuses to accept the heat/dehydration reframe: syncope DURING exercise, ± preceding palpitations, is potentially life-threatening and demands urgent cardiac assessment — not reassurance' },
      { dom:'tasks', text:'Elicits and weights the family history: young sudden cardiac death (cousin at 23) and a young relative with a pacemaker strongly suggest an inherited cardiac condition (HCM, long QT, Brugada, ARVC, catecholaminergic VT)' },
      { dom:'tasks', text:'Arranges urgent appropriate work-up: 12-lead ECG promptly (today), urgent cardiology referral (echo, exercise testing, rhythm monitoring, family screening per inherited-cardiac-conditions pathway) — and does NOT clear him to play' },
      { dom:'tasks', text:'Gives clear, safety-critical advice to STOP high-intensity exertion/competitive sport until assessed — explaining honestly that the next exertional episode could be fatal — while acknowledging the enormity of that for him' },
      { dom:'tasks', text:'Holds the professional line against the pressure to "sign him off": does not provide false clearance to protect his trial; documents clearly; communicates appropriately (with consent, and given he is 19) and involves his mother/support as he wishes' },
      { dom:'rto',   text:'Does not collude with the minimising to keep him happy; names the danger plainly but compassionately, and reaches the fear beneath the bravado (the cousin)' },
      { dom:'rto',   text:'Takes his career and identity seriously — frames assessment as protecting his future and his life, exploring how to support the trial situation honestly rather than dismissing what football means to him' },
      { dom:'gs',    text:'Safety-nets emphatically: ECG today, urgent cardiology, NO competitive/high-intensity sport meanwhile, what to do if it happens again (and that bystanders should call 999/CPR), family-screening implications, and a defined urgent follow-up — a coordinated, life-protecting plan' },
    ],
    worked:[
      { lbl:'Refuse the reframe',     txt:'"I hear you that it was hot and you were dehydrated — but I have to be really straight with you, because it matters more than your trial: the thing that worries me isn\u2019t that you fainted, it\u2019s WHEN. You went down while running, mid-match, one time with your heart racing first. Fainting DURING exercise is the one kind doctors never wave through, because of what it can mean."' },
      { lbl:'Weight the family story', txt:'"And what you told me about your cousin — dying suddenly in his sleep at 23 — plus an uncle with a pacemaker young: I can\u2019t un-know that. Together with your collapses, it points to the possibility of an inherited heart-rhythm condition. These often hide in fit young athletes and announce themselves exactly like this."' },
      { lbl:'The hard truth, kindly', txt:'"So I\u2019m not going to do the thing you asked and sign you off, and I want to tell you why with total honesty, because you deserve that: if this is what I\u2019m worried about, the next time you sprint for a ball it could stop your heart for good. I would never forgive myself for clearing you, and I don\u2019t think you\u2019d want me to once you really hear it."' },
      { lbl:'Reach the real fear',    txt:'"Can I say something? I think part of you has wondered about this since your cousin — and being this close to your trial, you couldn\u2019t afford for it to be real. That\u2019s completely human. But the bravest, most footballer thing you can do right now is get this checked, because a heart that\u2019s sorted can often get back to sport safely — and an ignored one doesn\u2019t get the chance."' },
      { lbl:'The urgent plan',        txt:'"Here\u2019s what happens now: an ECG today, and I\u2019m referring you urgently to a heart specialist for a scan and rhythm tests — and because it can run in families, they\u2019ll look at relatives too. Until you\u2019ve been assessed, no competitive football and no flat-out training. I know that\u2019s the hardest sentence I could say to you. I\u2019ll help you handle the trial situation honestly with the club\u2014 a real medical reason, managed properly, is not the end of your career."' },
      { lbl:'Safety-net',             txt:'"If you collapse again before the appointment, whoever\u2019s with you calls 999 and starts CPR if you\u2019re not responding — tell your mum and your mates that. I\u2019ll chase the cardiology appointment myself and see you straight after. You came in wanting me to say you\u2019re fine. I\u2019m doing something better: I\u2019m trying to make sure you get to be."' },
    ],
    learning:'Exertional syncope is a cardinal cardiac red flag — syncope DURING exercise, especially with preceding palpitations, is potentially life-threatening and must never be accepted as "heat and dehydration". Add a family history of young sudden cardiac death (a cousin at 23) and a young relative with a pacemaker, and the concern is an inherited cardiac condition (HCM, long QT, Brugada, ARVC, CPVT) that classically kills fit young athletes. The plan is urgent: ECG today, urgent cardiology (echo, exercise/rhythm testing, family screening), and — critically — STOP competitive/high-intensity sport until assessed. The examinable hidden agenda is the minimising itself: football is his entire identity and an academy trial looms, so he actively downplays dangerous symptoms to be "signed off". The skill is to hold the professional line (no false clearance), refuse to collude, name the danger plainly but compassionately, reach the buried fear of the cousin, and take his career seriously by framing assessment as the route back to sport and to staying alive.',
    knowledge:{
      guideline:'NICE CG109 transient loss of consciousness · ESC syncope · inherited cardiac conditions / SADS family-screening pathways',
      points:[
        { h:'Exertional syncope = red flag', t:'Syncope occurring DURING exertion (not after) is a cardinal warning of structural or arrhythmic cardiac disease and mandates urgent cardiac assessment. Palpitations preceding collapse, syncope when supine, and no prodrome are further high-risk features.' },
        { h:'Family history is decisive', t:'Sudden cardiac death in a relative <40, unexplained drowning/single-vehicle deaths, young pacemaker/ICD, or known inherited cardiac conditions massively raise concern. Conditions: hypertrophic cardiomyopathy, long QT, Brugada, ARVC, catecholaminergic polymorphic VT — many present in fit young athletes.' },
        { h:'Investigate urgently', t:'12-lead ECG promptly (look for LVH/HCM, QT prolongation, Brugada pattern, pre-excitation, T-wave changes), urgent cardiology referral for echo, exercise testing, ambulatory/loop monitoring, and inherited-cardiac-conditions family screening. A normal resting ECG does NOT exclude these — refer regardless.' },
        { h:'Stop the trigger', t:'Advise cessation of competitive and high-intensity sport until specialist assessment — the next exertional event can be fatal. Counsel bystander 999/CPR if recurrence. Balance honesty about risk with acknowledgement of what sport means.' },
        { h:'Hold the professional line', t:'Do not provide false "fit to play" clearance under pressure; document clearly. He is 19 — manage consent and family involvement appropriately, and support an honest conversation with his club rather than a cover-up.' },
        { h:'Never do', t:'Never accept the heat/dehydration reframe for exertional syncope; never clear an athlete with this history to play; never miss or under-weight the family sudden-death history; never collude with minimisation to keep rapport.' },
        { h:'Safety-net & follow-up', t:'ECG today; urgent cardiology; NO high-intensity sport meanwhile; recurrence → 999/CPR; family-screening implications explained; GP-led chasing of the referral and early review — a coordinated, life-protecting plan.' }
      ]
    }
  };

  /* ============ 51. TELEPHONE — Acute vertigo: BPPV vs posterior-circulation stroke ============ */
  const c51 = {
    id:'vertigo-bppv-stroke', title:'The room won\u2019t stop spinning', type:'telephone', duration:12,
    meta:{ age:61, sex:'M', setting:'Telephone — sudden severe vertigo since this morning.', system:'Neuro / Acute vertigo (central vs peripheral)' },
    brief:'Mr Gordon Whitfield, 61, retired electrician. Rang because the room "won\u2019t stop spinning" since waking, with vomiting. Hypertension, type 2 diabetes, ex-smoker, on amlodipine + metformin + atorvastatin. Wife in the background says he\u2019s "not right" and "walked into the doorframe". He plays down a "couple of funny dos" in the past fortnight — words coming out wrong, a clumsy hand — blamed on tiredness. Wants "a tablet for vertigo".',
    script:{
      opening:'"Sorry to ring, the wife made me. Everything\u2019s spinning, has done since I woke up, and I\u2019ve been sick a couple of times. I had this years back, it was my ears, some crystals thing — so I reckon it\u2019s that again. Can you just send down whatever tablet stops the spinning? I don\u2019t want to be making a fuss or sat in A&E all day at my age."',
      facts:[
        { topic:'The vertigo now',      text:'If explored carefully: the spinning is CONSTANT (not brief seconds with head-turns), been going for hours, severe, with vomiting. He CANNOT walk unaided — "I go sideways", "walked into the doorframe". This is not the brief, positional pattern of BPPV.' },
        { topic:'The red-flag clues',   text:'On direct questioning (he minimises): in the past 2 weeks, two episodes of slurred/jumbled speech and a clumsy right hand lasting a while, dismissed as tiredness — possible TIAs. Today he may have subtle other signs (new headache/neck ache, double vision, numbness) if asked. Wife says his face "looked a bit off" earlier.' },
        { topic:'The vascular risk',     text:'Hypertension, type 2 diabetes, ex-smoker, on a statin — a high vascular-risk man. Sudden, constant vertigo with gait failure in this context is posterior-circulation stroke until proven otherwise.' },
        { topic:'The hidden agenda',     text:'HIDDEN AGENDA — the minimising: he is frightened of hospital ("at my age"), doesn\u2019t want to be a burden, and is anchoring on the old "ear crystals" diagnosis because it\u2019s safe and familiar. He\u2019s downplaying the speech/hand episodes precisely because, deep down, he suspects they were "mini-strokes" and can\u2019t face it. His wife\u2019s alarm is the real signal.' },
        { topic:'What he wants',        text:'Officially: a vertigo tablet, no fuss, no A&E. What he needs: emergency assessment for a posterior-circulation stroke/TIA — recognised through the constant vertigo, the gait failure, the preceding focal episodes and his vascular risk — handled so he accepts going in.' },
      ],
      ice:{
        ideas:'It\u2019s his old "ear crystals" (BPPV) back; a vertigo tablet will fix it; no need for hospital.',
        concerns:'HIDDEN AGENDA — fear of hospital and of being a burden "at my age", and a buried suspicion that his recent speech/hand episodes were mini-strokes, which he can\u2019t face — so he anchors on the safe old ear diagnosis.',
        expectations:'A tablet and to be left alone. What he actually needs: urgent stroke pathway assessment, communicated so he accepts it rather than refusing care.'
      },
      cues:['Constant spinning for hours + vomiting + CANNOT walk (going sideways) — this is NOT brief positional BPPV.','"A couple of funny dos" — jumbled speech, clumsy hand in the past fortnight — possible TIAs he\u2019s minimising.','The wife in the background ("not right", "walked into the doorframe", face "looked off") — collateral history is the red flag; heed it.']
    },
    checkpoints:[
      { dom:'tasks', text:'Distinguishes central from peripheral vertigo and does NOT accept the BPPV self-diagnosis: CONSTANT (not brief positional) vertigo, inability to walk / truncal ataxia (going sideways), and vomiting in a high-vascular-risk patient point to a central (posterior-circulation) cause' },
      { dom:'tasks', text:'Actively seeks and weights red flags: associated neurological symptoms (dysarthria, limb clumsiness/weakness, diplopia, numbness, new headache/neck pain), gait failure, and — crucially — the preceding episodes of slurred speech and clumsy hand suggestive of recent TIAs' },
      { dom:'tasks', text:'Heeds the collateral history: the wife\u2019s account ("not right", walked into the doorframe, face looked off) is given appropriate weight rather than dismissed in favour of the patient\u2019s minimising' },
      { dom:'tasks', text:'Arranges EMERGENCY assessment: this is a suspected stroke — 999 / hyperacute stroke pathway NOW (not a vertigo tablet, not a routine TIA clinic), recognising posterior-circulation strokes are frequently missed as "labyrinthitis/BPPV"' },
      { dom:'tasks', text:'Does not mislabel or treat as benign: avoids prescribing prochlorperazine and reassuring; recognises that "vestibular sedatives + reassurance" for a central cause is a dangerous, classic error' },
      { dom:'rto',   text:'Overcomes the minimising without alarming him into refusing care: names the concern honestly and enlists his wife, framing assessment as the sensible, not the dramatic, choice' },
      { dom:'rto',   text:'Gently surfaces the buried fear (that the recent episodes were mini-strokes) and uses it to motivate acceptance — early assessment is how strokes are prevented/treated' },
      { dom:'gs',    text:'Safety-nets and acts now: confirms 999/emergency route and that he will go, what to watch for while waiting (worsening, FAST signs), keeps the line/contact, documents, and follows up — ensuring the patient actually accepts emergency care' },
    ],
    worked:[
      { lbl:'Take the history properly', txt:'"Before any tablet — let me get this exactly right, because the treatment depends on it. Is the spinning coming in short bursts when you move your head, or is it constant, there the whole time? \u2026 Constant for hours, with being sick, and you can\u2019t walk straight — you\u2019re going sideways. Okay. That\u2019s important, and it\u2019s different from the ear-crystal thing you had before."' },
      { lbl:'Chase the red flags',       txt:'"Your wife mentioned you walked into the doorframe and you\u2019ve not seemed right. And those \u2018funny dos\u2019 the last couple of weeks — the words coming out wrong, the clumsy hand — tell me about those. \u2026 I\u2019m really glad you\u2019ve told me, because those matter a great deal more than you\u2019ve let yourself think."' },
      { lbl:'Name it honestly',          txt:'"Gordon, I\u2019m not going to send a vertigo tablet, and I need to be honest about why. Spinning that\u2019s constant, that stops you walking, in someone with your blood pressure and diabetes, plus those speech and hand episodes — that can be a stroke affecting the back of the brain. It often gets mistaken for the ears, and that mistake is dangerous. This needs assessing as an emergency, today, now."' },
      { lbl:'Enlist the wife, meet fear',txt:'"I can hear you don\u2019t want a fuss — but your wife\u2019s instinct that you\u2019re \u2018not right\u2019 is exactly the instinct I trust. And I suspect part of you has wondered whether those funny turns were little strokes; that fear is precisely why we act now, not later. Getting seen quickly is how we treat this or stop a bigger one — not making a fuss, the opposite."' },
      { lbl:'Act now',                   txt:'"So this is what\u2019s going to happen: I want you to call 999, or I can arrange the ambulance — you need the stroke team, not a GP tablet. Don\u2019t eat or drink anything for now in case they need to act fast. Your wife stays with you and tells them about the doorframe, the speech, the hand. This isn\u2019t me overreacting; it\u2019s me taking it as seriously as it deserves."' },
      { lbl:'Safety-net',                txt:'"While you wait: if your face droops, an arm weakens, or your speech slurs — that\u2019s the stroke test, and it means push them to hurry. I\u2019m documenting all of this and I\u2019ll follow up. You rang not wanting to bother anyone, Gordon — ringing today might be the most important thing you do this year."' },
    ],
    learning:'The classic and dangerous SCA/clinical trap: acute vertigo mislabelled as benign "ear crystals/labyrinthitis" when it is a posterior-circulation stroke. The discriminators: BPPV is brief and positional; a central cause is CONSTANT, with inability to walk / truncal ataxia, vomiting, and — critically — associated neurology (dysarthria, limb clumsiness, diplopia, numbness, new headache). Here the man is high vascular risk (HTN, T2DM, ex-smoker) with preceding TIA-like episodes (jumbled speech, clumsy hand) he is minimising, and a wife whose collateral history ("not right", walked into the doorframe, face looked off) is the real red flag. The action is emergency 999/hyperacute stroke pathway — NOT prochlorperazine and reassurance, the very error that kills. The hidden agenda is his fear of hospital and a buried suspicion the episodes were mini-strokes; overcome the minimising by heeding the collateral history, naming the concern honestly, enlisting his wife, and using his own buried fear to motivate acceptance of emergency care.',
    knowledge:{
      guideline:'NICE NG128 stroke/TIA · HINTS exam principles · CKS vertigo · posterior-circulation stroke recognition',
      points:[
        { h:'Central vs peripheral vertigo', t:'Peripheral (BPPV: brief, positional, fatigable; vestibular neuritis: severe but improving, gait preserved enough to walk). Central (stroke/TIA): often CONSTANT, with inability to stand/walk (truncal ataxia), direction-changing or vertical nystagmus, and associated brainstem/cerebellar signs. Inability to walk unaided is a key red flag.' },
        { h:'Hunt associated neurology', t:'Dysarthria, dysphagia, diplopia, facial/limb weakness or numbness, ataxia, new severe headache or neck pain (dissection). The 5 Ds (dizziness, diplopia, dysarthria, dysphagia, dysmetria). Preceding focal transient episodes = TIAs needing urgent action.' },
        { h:'Weight vascular risk and collateral history', t:'Hypertension, diabetes, smoking, AF, age raise stroke probability. A witness/collateral account ("not right", bumping into things, facial asymmetry) often outperforms the minimising patient — heed it.' },
        { h:'Posterior-circulation strokes are missed', t:'They frequently masquerade as "labyrinthitis/BPPV" and are under-recognised. A high index of suspicion for central causes in acute, constant vertigo with gait failure or any focal signs is essential. HINTS exam (head-impulse, nystagmus, test-of-skew) helps in trained hands but does not delay emergency referral when central features exist.' },
        { h:'Act — emergency, not a sedative', t:'Suspected stroke → 999/hyperacute stroke pathway immediately; suspected recent TIA → urgent specialist assessment and aspirin per pathway. Prochlorperazine/cyclizine "for vertigo" plus reassurance in a central cause is a dangerous, classic error.' },
        { h:'Never do', t:'Never accept a patient\u2019s BPPV self-diagnosis without testing the pattern; never ignore inability to walk or collateral history; never prescribe vestibular sedatives and reassure when central features or TIA history exist; never let a minimising patient talk you out of emergency assessment.' },
        { h:'Safety-net & follow-up', t:'Confirm 999/emergency transfer and that he will go; nil by mouth pending assessment; FAST safety-net while waiting; enlist the wife; document; follow up to ensure care was accepted and delivered.' }
      ]
    }
  };

  /* ============ 52. TELEPHONE — Dizzy spells in an older adult: meds, postural drop, falls ============ */
  const c52 = {
    id:'dizzy-older-postural', title:'"Just a bit lightheaded, dear"', type:'telephone', duration:12,
    meta:{ age:82, sex:'F', setting:'Telephone — recurrent light-headedness; minimising.', system:'Older adults / Postural hypotension & falls' },
    brief:'Mrs Edith Marsh, 82, lives alone. Rings (prompted by her daughter) about "dizzy spells" on standing for some weeks. Light-headed, "things go dim", once "had to grab the worktop". Recently started on a second blood-pressure tablet; also on amitriptyline (old, for sleep), bendroflumethiazide, ramipril, and tamsulosin (for "waterworks"). Eats little, lives alone since her husband died. Adamant she\u2019s "fine" and "doesn\u2019t want any fuss". Daughter worried she\u2019s "not safe".',
    script:{
      opening:'"Oh, I don\u2019t want to be any trouble, doctor — it\u2019s my daughter who made me ring, she does fuss. It\u2019s just a bit of light-headedness when I get up, everyone gets that at my age, don\u2019t they? I\u2019m perfectly fine on my own. I really don\u2019t need anyone coming round or any of that carry-on. Could you just tell my daughter I\u2019m alright so she stops worrying?"',
      facts:[
        { topic:'The symptoms',         text:'If gently explored: light-headed and vision dimming on STANDING (from bed, from a chair), lasting seconds, several times a day; worse in the mornings and after meals. Once "grabbed the worktop", once "sat down quick on the floor". Classic postural (orthostatic) hypotension.' },
        { topic:'The hidden falls',     text:'HIDDEN AGENDA — reachable only with trust: she has actually FALLEN twice (once getting up in the night, once in the bathroom), bruised her hip, couldn\u2019t get up for a while one time. She has told NO ONE because she is terrified that admitting falls means being "put in a home" and losing her independence. The minimising is fear, not denial.' },
        { topic:'The medications',       text:'A perfect storm of culprits: a newly-added second antihypertensive, ramipril, a thiazide (bendroflumethiazide), tamsulosin (alpha-blocker), and amitriptyline (anticholinergic, hypotensive) — heavy contributors to postural drop in an 82-year-old eating and drinking little.' },
        { topic:'The wider picture',     text:'If reached: eating very little ("can\u2019t be bothered cooking for one"), poor fluid intake, low and lonely since her husband died, sleeping badly (hence the old amitriptyline). Frailty, under-nutrition and isolation sit behind the dizziness.' },
        { topic:'What she wants',        text:'Officially: to be told she\u2019s fine so her daughter stops fussing. Actually (and needs): a proper falls/medication review that REDUCES her risk while PROTECTING the independence she\u2019s terrified of losing — the fear of "a home" is the barrier to care.' },
      ],
      ice:{
        ideas:'A bit of dizziness on standing is just normal ageing; she\u2019s fine and doesn\u2019t need fuss.',
        concerns:'HIDDEN AGENDA — she has had unreported falls and is terrified that admitting them means being "put in a home" and losing her independence; that fear drives the minimising. Plus loneliness, poor eating/drinking since widowhood.',
        expectations:'To be reassured and left alone. What she actually needs: medication review, postural-hypotension and falls assessment, and support that keeps her safe AT HOME — the opposite of what she fears.'
      },
      cues:['"Everyone gets that at my age" — ageing used to dismiss treatable postural hypotension; don\u2019t accept it.','"Grabbed the worktop" / "sat down quick" — near-falls leaking out; the real falls are hidden behind fear.','"Tell my daughter I\u2019m fine so she stops fussing" — the daughter\u2019s worry is the reliable signal; the request to be silenced is the red flag.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises postural (orthostatic) hypotension from the history (light-headedness/visual dimming on standing, worse mornings and post-meal, near-collapse) rather than accepting "normal ageing"; plans to confirm with lying/standing BP' },
      { dom:'tasks', text:'Performs a proper MEDICATION review and identifies the polypharmacy storm: newly-added second antihypertensive, ramipril, thiazide, tamsulosin (alpha-blocker), and amitriptyline (anticholinergic/hypotensive) — and plans deprescribing/rationalisation (e.g. stop/reduce the culprit antihypertensive, review the diuretic, stop amitriptyline) as the highest-yield intervention' },
      { dom:'tasks', text:'Gently uncovers the HIDDEN FALLS and addresses the fear behind them: creates safety to disclose, and explicitly reframes — a falls review is how we KEEP her independent and at home, not how she loses it' },
      { dom:'tasks', text:'Carries out a multifactorial falls assessment in spirit: the meds, postural BP, eating/hydration, vision, footwear, home hazards, the night-time trips (and the tamsulosin/nocturia link), bone health/fracture risk given a bruised hip — and arranges appropriate review/falls service/OT' },
      { dom:'tasks', text:'Recognises the wider frailty picture: under-nutrition, dehydration, low mood and isolation since widowhood — and addresses these (eating/fluids, mood, social support) rather than treating dizziness in isolation' },
      { dom:'rto',   text:'Hears the fear ("a home") beneath the minimising and the daughter\u2019s worry as the real signal; builds trust so the falls can be disclosed, rather than colluding with "tell her I\u2019m fine"' },
      { dom:'rto',   text:'Frames every intervention around PRESERVING independence and dignity, partnering with her (and, with consent, her daughter) rather than imposing' },
      { dom:'gs',    text:'Safety-nets and follows up concretely: medication changes with a plan and recheck, postural BP arranged, falls service/OT referral, eating/hydration and mood/social support, what to do if she falls and can\u2019t get up (pendant alarm), and a defined review — risk reduced, independence protected' },
    ],
    worked:[
      { lbl:'Disarm the dismissal',   txt:'"I promise I\u2019m not going to descend on you with \u2018carry-on\u2019, Edith — but I can\u2019t quite tell your daughter you\u2019re fine yet, because the kind of dizziness you\u2019re describing isn\u2019t just age, and the good news is it\u2019s usually something we can actually fix. Will you let me ask a few things so I CAN reassure her honestly?"' },
      { lbl:'Pin the diagnosis',      txt:'"It comes on when you stand up, your vision dims, it\u2019s worse in the mornings and after meals — that\u2019s your blood pressure dropping as you rise. It\u2019s common, it\u2019s treatable, and a big part of it is often the tablets. We\u2019ll check your blood pressure lying and standing to be sure."' },
      { lbl:'Find the real story',    txt:'"Can I ask you something, just between us, and I\u2019m not going to whisk you off anywhere — when you\u2019ve felt like that, have you ever actually gone down? Had a fall? \u2026 Thank you for trusting me. That took courage, and you were right that it matters. I think you\u2019ve kept that quiet because you\u2019re frightened it means a home. Let me tell you the opposite is true."' },
      { lbl:'Reframe the fear',       txt:'"Sorting this out is exactly how we keep you in your own house, on your own terms. The falls service, a check of your home, the right tablets — those aren\u2019t the road to a home, they\u2019re what stops you needing one. My whole aim here is your independence, not the end of it."' },
      { lbl:'The medication fix',     txt:'"Here\u2019s the powerful part: several of your tablets push your blood pressure down and can make you woozy — the newer blood-pressure one, the water tablet, the waterworks tablet, and that old sleeping one. We can safely trim those back, and I\u2019d expect the dizziness — and the falls — to improve a lot. We\u2019ll do it carefully and recheck."' },
      { lbl:'Wrap-around + safety-net',txt:'"And I\u2019d gently say — eating and drinking properly matters here, and it\u2019s hard cooking for one since your husband; that\u2019s worth us sorting too, and I\u2019d like to make sure you\u2019re not too on-your-own with things. Practical bit: an alarm pendant so if you ever do go down you can get help fast. If you fall and can\u2019t get up, that\u2019s a 999 call, never a wait. I\u2019ll change the tablets, arrange the falls check, and ring you in a week. Does that feel alright?"' },
    ],
    learning:'"Just a bit lightheaded at my age" in an 82-year-old is postural hypotension until proven otherwise — not normal ageing — and the highest-yield intervention is almost always the MEDICATION review: here a storm of culprits (a newly-added second antihypertensive, ramipril, a thiazide, tamsulosin, and amitriptyline) in a frail woman eating and drinking little. The examinable hidden agenda is the concealed falls: she has fallen twice and told no one because she is terrified that admitting it means being "put in a home". The minimising — and the request to "tell my daughter I\u2019m fine" — is fear, and the daughter\u2019s worry is the reliable signal. The skill is to refuse the ageing dismissal, build trust to uncover the falls, and reframe every intervention around PRESERVING independence (falls assessment and deprescribing are how she STAYS home), then address the wider frailty (nutrition, hydration, mood, isolation, bone health) and safety-net concretely (pendant alarm, "can\u2019t get up = 999"). Risk reduced, dignity protected.',
    knowledge:{
      guideline:'NICE CG161 falls in older people · NICE NG56 multimorbidity / STOPP-START deprescribing · CKS postural hypotension',
      points:[
        { h:'Postural hypotension, not "ageing"', t:'Light-headedness/visual dimming on standing, worse in mornings and post-prandially, with near-syncope, suggests orthostatic hypotension. Confirm with lying-and-standing BP (a drop of ≥20 systolic or ≥10 diastolic, with symptoms). It is treatable — do not dismiss as age.' },
        { h:'Medication review is the highest-yield fix', t:'Culprits: antihypertensives (especially newly added/combined), diuretics (thiazide), alpha-blockers (tamsulosin), and anticholinergic/hypotensive agents (amitriptyline — also falls-risk via sedation/confusion). Rationalise/deprescribe (STOPP-START): often the single most effective intervention. Amitriptyline for sleep in an 82-year-old is rarely justified.' },
        { h:'Uncover hidden falls — and the fear', t:'Many older people conceal falls, fearing loss of independence / care-home placement. Ask directly and safely; treat the fear explicitly by reframing falls assessment and home support as the route to STAYING independent. The worried relative is usually the reliable historian.' },
        { h:'Multifactorial falls assessment', t:'NICE CG161: gait/balance, medication, postural BP, vision, cognition, continence/nocturia (tamsulosin link), footwear, home hazards, bone health/fracture risk (a bruised hip warrants osteoporosis/fracture-risk assessment). Refer to falls service/OT/physio.' },
        { h:'Treat the whole frail picture', t:'Under-nutrition ("cooking for one"), dehydration, low mood and isolation since widowhood drive both the physiology and the risk. Address eating/fluids, screen mood, and arrange social support — not just the dizziness.' },
        { h:'Never do', t:'Never accept "normal ageing" for postural symptoms; never miss the polypharmacy contribution; never collude with "tell my daughter I\u2019m fine"; never overlook concealed falls or the fear driving them; never medicalise without protecting independence.' },
        { h:'Safety-net & follow-up', t:'Deprescribe with a plan and BP recheck; falls service/OT referral; nutrition/hydration and mood/social support; pendant alarm and "fall + can\u2019t get up = 999"; defined GP follow-up — risk reduced while dignity and independence are preserved.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c49, c50, c51, c52);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'syncope-vasovagal': {
      ceg: ['New & undifferentiated presentations', 'Mental health & addiction'],
      stem: {
        name: 'Casey Doyle', age: '24 years · female',
        pmh: ['Three faints in 4 months — all with prodrome + classic triggers', 'ECG normal; lying/standing BP normal in clinic', 'No epilepsy/cardiac features; no FH of young sudden death'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Junior nurse. A ward patient her age recently diagnosed with a brain tumour. Requesting a brain scan; sleeping badly, very anxious.',
        reason: 'Video consultation — recurrent fainting, wants a scan.'
      },
      timeMap: [
        { t:'0–2',  h:'Hear the anxiety',    d:'"I know just enough to terrify myself" — health anxiety signposted. The worry is the presentation.' },
        { t:'2–5',  h:'Positive diagnosis',   d:'Classic vasovagal: prodrome + triggers + rapid recovery. Say it confidently; show your working; state the red flags you looked for and DIDN\u2019T find.' },
        { t:'5–7',  h:'Scan, reframed',       d:'Tumours don\u2019t cause faints-with-warning; a scan wouldn\u2019t change the diagnosis and an incidental finding would fuel the anxiety. The story IS the test.' },
        { t:'7–10', h:'Find + treat the fear', d:'The ward patient her age. Validate, then name the health anxiety and its cost (no driving, no gym, pulse-checking, no sleep) as the real, treatable problem.' },
        { t:'10–12',h:'Self-help + net',       d:'Prodrome → lie/counter-pressure; hydration/salt; driving advice; precise safety-net (no-warning/exertional faint, palpitations → review); follow-up for the anxiety.' }
      ],
      wordPics: {
        fail: 'Orders a brain scan to placate, or gives a flat "it\u2019s just a faint" with no working shown; never finds the ward-patient trigger or the avoidance; the health anxiety — the actual morbidity — goes untreated and the scan (if done) amplifies it.',
        pass: 'Diagnoses vasovagal confidently, excludes red flags, explains why a scan isn\u2019t needed, gives self-management and a safety-net, and acknowledges the anxiety.',
        exc:  'Treats reassurance as a skilled task — names the diagnosis with confidence, shows the reasoning, states the dangerous features actively excluded; reframes the scan so it reassures rather than dismisses; finds the specific ward-patient fear and the life-shrinking avoidance and addresses the health anxiety directly; and leaves her with a diagnosis, a self-management plan, accurate driving advice and her life back.'
      },
      avoid: [
        { dont:'"To be on the safe side and put your mind at rest, let\u2019s arrange a brain scan."', instead:'"A scan would actually work against you here — tumours don\u2019t cause faints-with-warning, it wouldn\u2019t change the diagnosis, and a chance finding would give the worry something new to grab. Your story IS the test, and it\u2019s reassuring."', why:'"Scan to reassure" feeds health anxiety and risks incidentalomas; confident explanation is the real treatment.' },
        { dont:'"It\u2019s just a simple faint, nothing to worry about."', instead:'"It\u2019s a simple faint — and I can prove it to you: every one had warning and a trigger, and the dangerous kinds (no warning, during exercise, racing heart first) you\u2019ve never had, with a normal ECG."', why:'Flat reassurance without shown reasoning doesn\u2019t touch health anxiety; the working is what convinces.' },
        { dont:'"Try not to read things on the internet."', instead:'"What specifically frightened you into a brain tumour? \u2026 A patient your age on your ward — that makes total sense, and I can tell you exactly why her funny turns and your faints are different things."', why:'Dismissing the Googling skips the specific fear that must be named and addressed for reassurance to land.' }
      ]
    },

    'syncope-cardiac-fh': {
      ceg: ['Urgent & unscheduled care', 'New & undifferentiated presentations'],
      stem: {
        name: 'Deniz Aydin', age: '19 years · male',
        pmh: ['Two collapses DURING football matches last season (one with preceding palpitations)', 'Cousin died suddenly in his sleep aged 23; uncle with a young pacemaker', 'ECG not yet done'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Semi-pro footballer; academy trial imminent. Attributes collapses to "heat/dehydration". Wants to be "signed off" to play.',
        reason: 'Video consultation — booked by his mother.'
      },
      timeMap: [
        { t:'0–2',  h:'Refuse the reframe',  d:'"It only happens when I play." Exertional syncope is a cardinal red flag — do NOT accept heat/dehydration.' },
        { t:'2–4',  h:'Weight the family',    d:'Cousin dead at 23, uncle with a young pacemaker — inherited cardiac condition until proven otherwise.' },
        { t:'4–6',  h:'The hard truth',       d:'No false clearance. Honestly: the next sprint could stop his heart. Name it plainly but with compassion.' },
        { t:'6–9',  h:'Reach the fear',       d:'He\u2019s wondered about the cousin and couldn\u2019t afford it to be real. The brave move is getting checked — a sorted heart can often return to sport.' },
        { t:'9–12', h:'Urgent plan + net',     d:'ECG today; urgent cardiology (echo, rhythm, family screening); NO competitive/high-intensity sport meanwhile; recurrence → 999/CPR; support the club conversation honestly.' }
      ],
      wordPics: {
        fail: 'Accepts "heat and dehydration", under-weights the family sudden-death history, and signs him off to play (or defers without stopping sport); no urgent ECG/cardiology; colludes with the minimising to keep rapport — a potentially fatal miss.',
        pass: 'Recognises exertional syncope + family history as red flags, orders ECG and urgent cardiology, advises stopping sport, and declines false clearance.',
        exc:  'Refuses the heat/dehydration reframe outright; fully weights the cousin/uncle history; holds the professional line with no false clearance while reaching the bravado-masked fear; frames assessment as the route back to sport AND to staying alive; and locks in ECG today, urgent cardiology with family screening, a clear no-sport instruction, 999/CPR safety-net, and honest support for the club situation.'
      },
      avoid: [
        { dont:'"It was probably just the heat — footballers faint, drink more and you\u2019ll be fine to play."', instead:'"Fainting DURING running, one time with your heart racing first, is the kind doctors never wave through. That\u2019s not heat — it needs urgent heart checks before any football."', why:'Accepting the heat reframe for exertional syncope risks sudden cardiac death.' },
        { dont:'"I\u2019ll sign you off so your trial isn\u2019t affected, and we\u2019ll keep an eye on it."', instead:'"I can\u2019t clear you — and I\u2019d be failing you if I did. Until you\u2019re assessed, no competitive football. A real medical reason, handled properly, isn\u2019t the end of your career; an ignored heart can be."', why:'False fitness clearance under pressure is a potentially lethal abdication of the professional line.' },
        { dont:'"There\u2019s probably nothing in the family thing, lots of people have relatives with heart problems."', instead:'"A cousin dying suddenly at 23 and an uncle with a young pacemaker, alongside your collapses, points to a possible inherited heart-rhythm condition — exactly the kind that hides in fit young athletes."', why:'Minimising a young-sudden-death family history discards the most important diagnostic clue.' }
      ]
    },

    'vertigo-bppv-stroke': {
      ceg: ['Urgent & unscheduled care', 'Older adults'],
      stem: {
        name: 'Gordon Whitfield', age: '61 years · male',
        pmh: ['Hypertension, type 2 diabetes, ex-smoker', 'Two recent episodes of slurred speech / clumsy hand (dismissed as tiredness)', 'On amlodipine, metformin, atorvastatin'],
        meds: ['Amlodipine', 'Metformin', 'Atorvastatin'],
        allergy: 'NKDA',
        recent: '⚠ Constant vertigo + vomiting since waking; cannot walk straight ("goes sideways", walked into doorframe). Wife says he\u2019s "not right", face "looked off". Wants a vertigo tablet, no A&E.',
        reason: 'Telephone — sudden severe vertigo.'
      },
      timeMap: [
        { t:'0–2',  h:'Test the pattern',    d:'Brief positional bursts (BPPV) or constant for hours with vomiting and can\u2019t walk? Constant + gait failure = NOT BPPV.' },
        { t:'2–4',  h:'Chase red flags',      d:'The "funny dos" — slurred speech, clumsy hand (possible TIAs); new headache, diplopia, numbness; the wife\u2019s collateral account.' },
        { t:'4–6',  h:'Name it honestly',     d:'Constant vertigo + gait failure + focal episodes + vascular risk = posterior-circulation stroke until proven otherwise. Not a vertigo tablet.' },
        { t:'6–9',  h:'Overcome minimising',  d:'Heed the wife; surface his buried fear the episodes were mini-strokes; frame emergency assessment as sensible, not dramatic.' },
        { t:'9–12', h:'Act now + net',        d:'999 / hyperacute stroke pathway NOW; nil by mouth; FAST safety-net while waiting; document; follow up to ensure he goes.' }
      ],
      wordPics: {
        fail: 'Accepts the "ear crystals" self-diagnosis, prescribes prochlorperazine and reassures; ignores the inability to walk, the TIA-like episodes and the wife\u2019s account — the classic, dangerous miss of a posterior-circulation stroke.',
        pass: 'Distinguishes central from peripheral vertigo, recognises red flags and vascular risk, and arranges emergency stroke assessment rather than a vertigo tablet.',
        exc:  'Refuses the BPPV self-diagnosis after testing the pattern; elicits and weights the TIA-like episodes and the collateral history; names the stroke concern plainly; overcomes the minimising by heeding the wife and using the patient\u2019s own buried fear; and gets him onto the 999/hyperacute pathway now with nil-by-mouth and a FAST safety-net, documented and followed up.'
      },
      avoid: [
        { dont:'"Sounds like your crystals again — I\u2019ll send a vertigo tablet down."', instead:'"Constant spinning for hours, vomiting, and you can\u2019t walk straight — that\u2019s different from the ear-crystal thing. With your blood pressure and diabetes, this can be a stroke, and it needs emergency assessment now, not a tablet."', why:'Prochlorperazine-and-reassurance for a central cause is the classic lethal error.' },
        { dont:'"Those funny turns last week were probably just tiredness."', instead:'"Words coming out wrong and a clumsy hand can be mini-strokes — warnings. Together with today, that\u2019s exactly why we act as an emergency, not later."', why:'Dismissing TIA-like episodes throws away the warning that could prevent a major stroke.' },
        { dont:'"If you\u2019d rather not go to A&E, let\u2019s see how you are in the morning."', instead:'"Your wife\u2019s instinct that you\u2019re \u2018not right\u2019 is the one I trust. This is 999 now — the stroke team, not a wait. Getting seen fast is how we treat it or stop a bigger one."', why:'Letting a minimising patient defer emergency stroke care can cost brain or life within the treatment window.' }
      ]
    },

    'dizzy-older-postural': {
      ceg: ['Older adults', 'Prescribing & pharmacology'],
      stem: {
        name: 'Edith Marsh', age: '82 years · female',
        pmh: ['Light-headedness on standing for weeks; near-collapses', 'Recently started a 2nd antihypertensive', 'Lives alone; widowed; eating/drinking little'],
        meds: ['Ramipril', 'Bendroflumethiazide', 'Amlodipine (recently added)', 'Tamsulosin', 'Amitriptyline (old, for sleep)'],
        allergy: 'NKDA',
        recent: 'Rang at daughter\u2019s insistence. Adamant she\u2019s "fine", "doesn\u2019t want fuss", wants the GP to tell her daughter she\u2019s alright.',
        reason: 'Telephone — recurrent light-headedness.'
      },
      timeMap: [
        { t:'0–2',  h:'Disarm the dismissal',d:'"Everyone gets that at my age." Don\u2019t accept it — but don\u2019t threaten "carry-on" either. Ask to ask, so you CAN reassure the daughter honestly.' },
        { t:'2–4',  h:'Pin the diagnosis',    d:'Dimming vision on standing, worse mornings/post-meal, near-falls = postural hypotension. Plan lying/standing BP.' },
        { t:'4–6',  h:'Uncover the falls',    d:'Gently ask if she\u2019s gone down. The hidden falls surface only with trust. Name and reframe the "a home" fear.' },
        { t:'6–9',  h:'The medication fix',   d:'The polypharmacy storm — new antihypertensive, thiazide, tamsulosin, amitriptyline. Deprescribe carefully: the highest-yield intervention.' },
        { t:'9–12', h:'Wrap-around + net',     d:'Falls service/OT, nutrition/hydration, mood/isolation, bone health (bruised hip), pendant alarm, "fall + can\u2019t get up = 999"; recheck dated. Independence protected.' }
      ],
      wordPics: {
        fail: 'Accepts "normal ageing", reassures, and tells the daughter she\u2019s fine; misses the polypharmacy, never uncovers the concealed falls, leaves the "a home" fear and the frailty (nutrition, mood, isolation) untouched — and the next fall is a fractured hip.',
        pass: 'Recognises postural hypotension, reviews and rationalises the medications, asks about falls, arranges a falls assessment and follow-up.',
        exc:  'Refuses the ageing dismissal warmly; pins postural hypotension and targets the polypharmacy as the high-yield fix; builds the trust that uncovers the hidden falls and reframes the care-home fear (assessment KEEPS her independent); addresses the whole frail picture — nutrition, hydration, mood, isolation, bone health — and safety-nets concretely with a pendant alarm and clear escalation, protecting both safety and dignity.'
      },
      avoid: [
        { dont:'"A bit of dizziness on standing is normal at your age — nothing to worry about."', instead:'"That kind of dizziness usually isn\u2019t just age — it\u2019s your blood pressure dropping when you stand, and it\u2019s often the tablets, which we can fix. Let me check a few things so I can reassure your daughter honestly."', why:'"Normal ageing" dismisses treatable postural hypotension and a serious falls risk.' },
        { dont:'"As long as you haven\u2019t had any falls, we\u2019ll just keep an eye on it."', instead:'"Can I ask, just between us — have you ever actually gone down? \u2026 Thank you for trusting me. I think you\u2019ve kept it quiet for fear of a home — and sorting this is exactly how we keep you in your own house."', why:'A closed question lets the concealed falls — and the fear driving them — stay hidden; ask safely and reframe.' },
        { dont:'"I\u2019ll tell your daughter you\u2019re fine so she stops worrying."', instead:'"Your daughter\u2019s worry is the instinct I trust most here — so instead of telling her you\u2019re fine, let\u2019s actually make you safer at home, which is what you both want."', why:'Colluding with "tell her I\u2019m fine" silences the reliable historian and abandons a treatable, dangerous problem.' }
      ]
    }
  });

})();
