/* ============================================================
   Reasoning GP — Case Library batch 1: "The urine story" family
   Three ORIGINAL cases (not recalls): every case carries a real
   hidden agenda + full ICE, planted via cues, marked via RTO
   checkpoints. Pushes into window.SCA_CASES + SCA_EXTRAS.
   Load AFTER sca-cases.js / sca-cases2.js / sca-extras.js.
   ============================================================ */

(function(){

  /* ============ 13. TELEPHONE — Dysuria in a young man ============ */
  const c13 = {
    id:'dysuria-sti', title:'Burning waterworks at 24', type:'telephone', duration:12,
    meta:{ age:24, sex:'M', setting:'Telephone appointment — patient requested antibiotics.', system:'GU / Sexual health' },
    brief:'Mr Jordan Walsh, 24, has booked a telephone appointment asking for "antibiotics for a water infection" — five days of burning when passing urine. PMH nil. No medication. Lives with his girlfriend of two years. Reception note: he asked whether a prescription could be sent to a pharmacy near his work "rather than the local one".',
    script:{
      opening:'"Hi doctor — nothing major, I think it\u2019s just a water infection. Burning when I pee, few days now. Could you send some antibiotics over? Oh — and could it go to the Boots near my work, not the one by the flat? Easier to collect."',
      facts:[
        { topic:'Symptoms',        text:'Burning on urination for 5 days, worst first thing in the morning. If asked directly: a small amount of clear-whitish discharge, noticed on his boxers. No blood, no fever, no loin pain.' },
        { topic:'Background',      text:'Never had a urine infection in his life. Otherwise fit; plays five-a-side weekly.' },
        { topic:'Relationship',    text:'Girlfriend Megan, together 2 years, living together 8 months. If asked when they last had sex: not since the stag do — he\u2019s been "getting headaches".' },
        { topic:'The stag do',     text:'Only if a proper, non-judgemental sexual history is taken: stag weekend in Leeds 10 days ago; one-off unprotected sex with a woman he met that night. Condom "didn\u2019t happen". Has been sick with guilt since.' },
        { topic:'His searching',   text:'Has been googling at 3am. Asks, if trust is built: "How long would something take to show up in a test… hypothetically? Even the serious stuff?"' },
        { topic:'What he wants',   text:'A quiet prescription, collected where nobody knows him, and for this never to be spoken of again. Will initially resist testing — "can\u2019t you just treat it?"' },
      ],
      ice:{
        ideas:'It\u2019s a water infection; antibiotics will fix it quietly.',
        concerns:'HIDDEN AGENDA — he caught something at the stag do and Megan will find out. Underneath that, the 3am terror he can\u2019t say first: "could it be HIV?"',
        expectations:'A prescription sent to a pharmacy where nobody knows him, no tests, no questions, no record Megan could stumble on.'
      },
      cues:['Asks for the prescription to go to a pharmacy away from home — secrecy travelling as convenience.','A long silence when asked "any other partners?" — the silence IS the answer; let it finish.','"How long would something take to show up in a test… hypothetically?" — the HIV fear, wearing a disguise.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises that dysuria in a 24-year-old man is urethritis/STI until proven otherwise — UTIs are rare in young men — and says so without alarm' },
      { dom:'tasks', text:'Takes a complete, matter-of-fact sexual history: partners (regular + other), last UPSI with dates, condom use, sites of exposure, symptoms in partners' },
      { dom:'tasks', text:'Test before treatment: first-void urine NAAT for chlamydia/gonorrhoea + bloods for HIV and syphilis, explained with window periods — and explains WHY blind antibiotics fail (wrong drug, masked diagnosis, untreated partner)' },
      { dom:'tasks', text:'Covers partner notification and abstinence until he and any partner are tested/treated — including the hard truth that Megan needs testing if anything is positive' },
      { dom:'rto',   text:'Hears the pharmacy-swap cue and names the secrecy kindly; states confidentiality explicitly — nothing goes anywhere Megan can see' },
      { dom:'rto',   text:'Surfaces the buried HIV question and answers it properly: low single-exposure risk, 45-day window for 4th-gen testing, testing as the route OUT of the 3am googling' },
      { dom:'rto',   text:'Handles the girlfriend conversation without a flicker of moralising — the consultation is clinical, not a tribunal' },
      { dom:'gs',    text:'Safety-nets: testicular pain/swelling or fever = same-day review (epididymo-orchitis); books the GUM slot or follow-up for results, plus window-period repeat' },
    ],
    worked:[
      { lbl:'Reframe the diagnosis',  txt:'"At 24, with no history of water infections, burning like this usually isn\u2019t a urine infection at all — it\u2019s most often an infection of the water pipe itself, the kind that\u2019s passed on through sex. So I need to ask you some direct questions, and they stay between us."' },
      { lbl:'Open the door',          txt:'"You asked for the chemist near work rather than home. I\u2019m not judging that — but it makes me wonder if there\u2019s a part of this story that\u2019s hard to say out loud. This call is confidential, including from anyone at home."' },
      { lbl:'After the silence',      txt:'"Take your time. Whatever the answer is, it changes the tests I order — not what I think of you."' },
      { lbl:'Test, don\u2019t guess',  txt:'"I could fire antibiotics at this blind — but if it\u2019s the wrong bug, you stay infectious, Megan gets exposed, and we\u2019ve buried the answer. One urine sample and one blood test gives you certainty instead of 3am googling."' },
      { lbl:'The HIV question',       txt:'"You asked how long things take to show up — let\u2019s talk about that properly. From a single encounter the risk is genuinely low, and a modern blood test is reliable from about six weeks. Testing isn\u2019t the scary option; NOT knowing is."' },
      { lbl:'Safety-net',             txt:'"If you get pain or swelling in a testicle, or fever, that\u2019s a same-day call — don\u2019t sit on it. Results in a few days; I\u2019ll ring YOU, on this number, and nothing lands on a shared letter."' },
    ],
    learning:'Dysuria in a young man is urethritis until proven otherwise — UTI is rare in young men and "antibiotics without testing" is the station\u2019s trapdoor. The marks live in the sexual history taken without judgement, test-first logic with window periods, partner notification handled honestly, and finding the hidden agenda: the secrecy request and the disguised HIV question. Confidentiality, stated early and plainly, is the lever that makes honesty possible.',
    knowledge:{
      guideline:'BASHH urethritis/chlamydia/gonorrhoea guidance · NICE CKS UTI in men',
      points:[
        { h:'Diagnose the pattern', t:'Young male + dysuria + urethral discharge = urethritis (chlamydia most likely, gonorrhoea possible) until proven otherwise. True UTI in a young man is uncommon enough to need an explanation (structural, catheter, anal sex without protection).' },
        { h:'Red flags & same-day action', t:'Testicular pain/swelling/fever = possible epididymo-orchitis — same-day assessment. Systemically unwell, loin pain or haematuria changes the lane entirely.' },
        { h:'Investigate first', t:'First-void urine NAAT for chlamydia + gonorrhoea, full screen with HIV and syphilis serology. Window periods honestly: 2 weeks for NAAT after exposure; ~45 days for 4th-generation HIV testing. GUM clinic offers same-week testing and free treatment.' },
        { h:'Manage — after the result', t:'Confirmed chlamydia: doxycycline 100 mg BD for 7 days. Gonorrhoea: GUM for ceftriaxone IM and test-of-cure. Abstinence until 7 days after both patient AND partner(s) treated. No sex with the regular partner until her status is known.' },
        { h:'Refer — GUM, framed as the fast lane', t:'GUM referral is the gold standard: full screening, partner notification done professionally and anonymously, free treatment, no GP record entry if he prefers. Frame it as the discreet option, not the punishment.' },
        { h:'Safety-net & follow-up', t:'Named follow-up for results on HIS mobile; repeat HIV serology at the window; return if symptoms persist after treatment (consider mycoplasma, trichomonas).' },
        { h:'Marking edge', t:'Three cues are planted: the pharmacy swap, the silence, the "hypothetical" testing question. Candidates who answer all three — secrecy, shame, HIV fear — convert a prescription request into the consultation that probably saves his relationship and possibly his health.' }
      ]
    }
  };

  /* ============ 14. VIDEO — "Water infection" in an 87-year-old ============ */
  const c14 = {
    id:'uti-elderly', title:'A "water infection" at 87', type:'video', duration:12,
    meta:{ age:87, sex:'M', setting:'Video consultation — daughter connects the call from her father\u2019s sitting room.', system:'Older adults / Prescribing' },
    brief:'Mr Harold Finch, 87, is "not himself". His daughter Carol (68, visits daily) requested an urgent consultation: the care agency dipsticked his urine yesterday — "positive" — and Carol wants antibiotics started today. Harold: strong-smelling urine, dribbling, more muddled in the evenings for about a week. PMH: hypertension, OA shoulder. Meds: amlodipine 5 mg; co-codamol 30/500 QDS started 3 weeks ago for the shoulder. Carol connects the video call with Harold beside her.',
    script:{
      opening:'(Carol leads, Harold gazing at the screen.) "Thank you for calling back so fast, doctor. The carers tested his water and it\u2019s an infection — it\u2019s happened before and antibiotics sorted it. Can we just get them started today? I don\u2019t want this turning into anything."',
      facts:[
        { topic:'The week\u2019s story',  text:'Harold is vaguer in the evenings, "not himself" — but rousable, knows Carol, no falls. Strong dark smelly urine; dribbling small amounts often, damp patches; no burning if Harold is asked directly ("it doesn\u2019t hurt, it just won\u2019t come proper").' },
        { topic:'Bowels',              text:'Only if asked: bowels not opened for FIVE days — "they\u2019ve been lazy since the new painkillers". Belly feels "full". Harold rubs his lower abdomen when it\u2019s mentioned.' },
        { topic:'The new tablets',     text:'Co-codamol started 3 weeks ago by a locum for shoulder pain. Taking the full QDS dose. Pain better; bowels and waterworks worse since — Carol says in passing "he\u2019s not been right since those new painkillers" without connecting it.' },
        { topic:'Fluids',              text:'Drinks "two or three cups of tea a day". Avoiding drinking deliberately — "so I don\u2019t leak". Skin dry, lips dry on camera.' },
        { topic:'Carol\u2019s story',   text:'Only if her fear is noticed: her husband Derek went into hospital "with a chest" in winter 2021 and died there ten days later — she never got to sit with him. "They don\u2019t come out of there at his age, doctor." The antibiotics are her shield against the hospital.' },
        { topic:'Baseline',            text:'Two weeks ago Harold was doing the crossword and walking to the paper shop. This is a CHANGE, not his normal.' },
      ],
      ice:{
        ideas:'Carol: positive dipstick = infection = antibiotics, like before. Harold: "my works are just old".',
        concerns:'HIDDEN AGENDA — Carol is terrified of hospital admission: Derek died in hospital without her. Any plan that smells of "sending him in" will be fought. Harold\u2019s quiet fear: the damp patches mean "the end of managing on my own".',
        expectations:'Carol: antibiotics today, no hospital, no fuss. Harold: not to be talked over.'
      },
      cues:['"He\u2019s not been right since those new painkillers" — dropped in passing; the case key, unnoticed by the speaker.','Harold rubs his lower belly and winces when bowels are mentioned — on camera, wordless.','Carol\u2019s voice cracks on "you hear what happens to people his age in there" — Derek, unspoken.']
    },
    checkpoints:[
      { dom:'tasks', text:'Does not treat a dipstick: states plainly that urine dipsticks are unreliable over 65 and that smelly urine alone is not an infection — half of men this age grow bacteria harmlessly' },
      { dom:'tasks', text:'Hunts the real mechanism: five days constipated on new co-codamol + deliberate fluid restriction → retention with overflow (the dribbling) and evening confusion' },
      { dom:'tasks', text:'Acts on the drug cause: stops/steps down the co-codamol (swap to paracetamol ± topical NSAID for the shoulder), starts laxatives, sets a fluid plan that answers his leak fear' },
      { dom:'tasks', text:'Names the video\u2019s limits and arranges same-day in-person review: abdominal/PR examination and a bladder scan — said as completing the job, not escalating it' },
      { dom:'rto',   text:'Talks to Harold directly, by name, not over him — and gets his version ("it won\u2019t come proper") which unlocks the retention picture' },
      { dom:'rto',   text:'Notices Carol\u2019s cracked voice, asks, and lets Derek\u2019s story be told — then SAYS the reassurance she actually needs: "everything we\u2019re doing today is designed to treat him here at home"' },
      { dom:'rto',   text:'Reframes antibiotics honestly: the wrong treatment isn\u2019t a shield against hospital — it\u2019s a delay that makes admission MORE likely' },
      { dom:'gs',    text:'Safety-nets in plain words: cannot pass urine at all / hard swollen belly / drowsy or feverish / rigors → same-day call or 999; books tomorrow\u2019s follow-up call himself' },
    ],
    worked:[
      { lbl:'The dipstick, defused',  txt:'"Carol, that dipstick has done its job by getting us talking — but here\u2019s the thing: over 65, those sticks turn positive in half of all men with nothing wrong. At Harold\u2019s age the stick can\u2019t tell us what\u2019s happening. His story can."' },
      { lbl:'To Harold, directly',    txt:'"Harold — never mind the stick. Tell me about the waterworks in your own words. Does it burn, or does it just… not come properly?"' },
      { lbl:'Connect the dots aloud', txt:'"You said something important without noticing — he\u2019s not been right since the new painkillers. Those tablets block the bowels; five days blocked, the bowel presses on the bladder; the bladder can\u2019t empty; it overflows in dribbles and the backed-up system fogs his evenings. One cause, the whole picture."' },
      { lbl:'The fluid fear',         txt:'"Harold, I think you\u2019re drinking less so you leak less — and I understand it, but it\u2019s working against you. Concentrated urine irritates the bladder and fogs the head. Let\u2019s get the emptying fixed, and then drinking properly becomes safe again."' },
      { lbl:'Find Derek',             txt:'"Carol — when you said \u2018what happens to people his age in there\u2019, that didn\u2019t sound like a general worry. What happened?" (Then:) "Everything we\u2019re doing this afternoon — the examination, the bladder scan, the laxatives — is how we treat this at HOME. That\u2019s the whole plan."' },
      { lbl:'Safety-net',             txt:'"Three things change the plan tonight, and I want you both to know them: if he can\u2019t pass water at all, if his belly goes hard and swollen, or if he becomes drowsy, hot or shaking — ring us straight away, or 999 out of hours. Otherwise, I\u2019m ringing you tomorrow afternoon myself."' },
    ],
    learning:'In the very old, "UTI" is the label that stops people thinking. Dipsticks are unreliable over 65 (asymptomatic bacteriuria ~50% in elderly men); smelly, concentrated urine usually means dehydration, and new confusion needs a cause hunted, not a reflex antibiotic. Here the cause is iatrogenic: opioid-induced constipation causing retention with overflow. The hidden agenda — the daughter\u2019s terror of hospital after her husband died there — drives the antibiotic demand, and only naming it lets the right plan land.',
    knowledge:{
      guideline:'NICE CKS UTI (lower, men) & delirium · SIGN/PHE diagnosis of UTI in older people',
      points:[
        { h:'Diagnose the real mechanism', t:'New evening confusion + dribbling + 5 days\u2019 constipation on a new opioid + deliberate fluid restriction = retention with overflow and early delirium, not "a UTI". Asymptomatic bacteriuria affects up to half of elderly men — a positive dipstick proves colonisation, not infection.' },
        { h:'Red flags & same-day action', t:'Acute painful retention, hard distended abdomen, fever/rigors, drowsiness or rapid deterioration → same-day admission decisions. New confusion is ALWAYS a cause-hunt (drugs, dehydration, retention, constipation, infection, hypoxia) — the 4AT, not a label.' },
        { h:'Investigate properly', t:'Same-day in-person examination: abdomen, PR (impaction, prostate), post-void bladder scan; bloods (U&E, FBC, CRP, calcium, glucose); MSU for CULTURE only if genuine urinary symptoms or systemic signs — never treat the smell or the stick alone.' },
        { h:'Manage the cause', t:'Stop/step down co-codamol (paracetamol + topical NSAID for the shoulder); osmotic laxative ± stimulant for opioid constipation; structured fluid plan that answers the leak fear; treat retention per scan findings (catheterise if significant residual, urology follow-up).' },
        { h:'Never do', t:'Never prescribe "just in case" antibiotics in the elderly — C. difficile, resistance and a buried diagnosis; never accept a dipstick over 65 as proof of UTI; never manage new confusion remotely without arranging hands-on examination.' },
        { h:'Safety-net & follow-up', t:'Plain-words triggers for tonight (no urine at all, hard swollen belly, drowsy/feverish/rigors → same-day/999), written down for Carol; named follow-up call within 24 hours; medication review documented so the locum\u2019s co-codamol doesn\u2019t auto-repeat.' },
        { h:'Marking edge', t:'Two patients, two hidden agendas: Harold\u2019s ("the leaks mean I can\u2019t manage alone") and Carol\u2019s (Derek died in hospital — antibiotics are her shield). The Clear Pass finds Derek, says "we are treating him at home" out loud, and talks to Harold, not about him.' }
      ]
    }
  };

  /* ============ 15. TELEPHONE — Visible haematuria at 67 ============ */
  const c15 = {
    id:'haematuria-2ww', title:'Pink urine and a cruise', type:'telephone', duration:12,
    meta:{ age:67, sex:'M', setting:'Telephone appointment — booked "because the wife insisted".', system:'Urology / 2WW' },
    brief:'Mr Victor Aldridge, 67, retired decorator, has phoned "to put the wife\u2019s mind at rest". Twice last week his urine ran pink-red, whole stream, completely painless — gone by the next day each time. He blames beetroot and a new multivitamin. Ex-smoker: 30 pack-years, quit 5 years ago. PMH: hypertension. Meds: ramipril. No anticoagulants. His golden-wedding cruise leaves in five weeks (not in the notes).',
    script:{
      opening:'"Morning doctor — bit of a fuss over nothing, this. The wife saw a bit of colour in the bowl and won\u2019t let it go. I\u2019ve been having beetroot with my lunches, you see, and these new vitamin tablets. You know how the wives are. Quick once-over and we\u2019ll say no more about it?"',
      facts:[
        { topic:'The bleeding',     text:'Twice in the past week: urine pink-to-red through the WHOLE stream, painless, no clots. Normal colour in between. If pushed on beetroot: "well — it was red-ish… properly red, I suppose, the second time."' },
        { topic:'Urinary history',  text:'Mild slowing of stream for a year or two ("normal at my age"). No burning, no fever, no loin pain, no weight loss. Never had this before.' },
        { topic:'Smoking & work',   text:'30 pack-years, quit 5 years ago after a health scare of Stan\u2019s. Forty years as a painter-decorator — solvents and old paints, if occupational history is taken.' },
        { topic:'Stan',             text:'Only if his deflection is gently challenged: his best friend Stan died of bladder cancer two years ago — "eighteen months from the first sign to the funeral". The first sign was blood in the water. Vic has thought of nothing else since the second pink bowl.' },
        { topic:'The cruise',       text:'Revealed late, or when investigations are discussed: golden-wedding anniversary cruise, booked two years, leaves in FIVE weeks. The real question he\u2019s circling: "can all this wait until we\u2019re back?"' },
        { topic:'If trust is built', text:'"Straight question, doctor — is this what Stan had?" He wants honesty, not soothing. His wife Pam doesn\u2019t know about the second episode.' },
      ],
      ice:{
        ideas:'Officially: beetroot and the multivitamin. Actually believes neither — he saw the colour.',
        concerns:'HIDDEN AGENDA — Stan died of bladder cancer 18 months after seeing blood in his urine. Vic is terrified this is the same thing, and equally terrified that saying it out loud makes it real.',
        expectations:'To be told it can wait until after the cruise. Underneath: to be taken seriously by someone who won\u2019t panic him.'
      },
      cues:['"You know how the wives are" — deflection doing the talking; the appointment exists because HE is frightened.','A flat pause after "did you lose anyone to anything like this?" — Stan, arriving.','"We\u2019ve got this cruise, you see — five weeks" — dropped casually; it\u2019s the real consultation.']
    },
    checkpoints:[
      { dom:'tasks', text:'Pins down true visible haematuria vs beetroot: whole-stream red urine twice, painless, no clots — and does not let the beetroot story stand once the colour is established' },
      { dom:'tasks', text:'Screens the rest: UTI symptoms (none), trauma (none), anticoagulants (none — and knows that even ON anticoagulants, visible haematuria still gets investigated), smoking pack-years and occupational dye/solvent exposure' },
      { dom:'tasks', text:'States the threshold out loud: aged 45+ with unexplained visible haematuria = urgent suspected-cancer (2WW) urology referral under NICE NG12 — made TODAY, not pending results' },
      { dom:'tasks', text:'Arranges same-week MSU (exclude infection without delaying referral), U&E, FBC, BP review — and explains what cystoscopy involves in one calm sentence' },
      { dom:'rto',   text:'Challenges the deflection gently and finds Stan — then answers the real question honestly: same symptom, NOT the same story; most investigated haematuria is not cancer, and early-found bladder cancer is very treatable' },
      { dom:'rto',   text:'Surfaces the cruise and solves it concretely: 2WW means seen within two weeks — the timeline works WITH the cruise, and going investigated beats going frightened' },
      { dom:'rto',   text:'Handles the secret from Pam: encourages honesty without forcing it — "you\u2019ve carried this alone for a week; that\u2019s long enough"' },
      { dom:'gs',    text:'Safety-nets: clot retention / cannot pass urine / heavy persistent bleeding → A&E today; chase the hospital letter if nothing within a week; named GP follow-up booked either way' },
    ],
    worked:[
      { lbl:'The beetroot, retired',  txt:'"Beetroot\u2019s a fair thought — it catches people out. But you\u2019ve described proper red, through the whole stream, twice. I\u2019d be doing you a disservice if I filed that under vegetables. Let\u2019s do this properly."' },
      { lbl:'The threshold, plainly', txt:'"There\u2019s a clear rule I work to: visible blood in the urine, over 45, with no infection to explain it — that gets an urgent referral to the bladder specialists, seen within two weeks. Not because I know something bad is there, but because it\u2019s the one symptom we never sit on."' },
      { lbl:'Finding Stan',           txt:'"Vic — you keep telling me this is the wife\u2019s worry, but you rang, and you counted the days between episodes. Has blood in the water ever meant something to someone you knew?"' },
      { lbl:'The honest answer',      txt:'"Straight answer, since you asked straight: it\u2019s the same SYMPTOM Stan had — that\u2019s exactly why we move fast. But it is not the same story. Stan\u2019s was found late. Most men I refer with this have no cancer at all, and the ones who do, caught at this stage, usually keep both their bladder and their decades."' },
      { lbl:'The cruise, solved',     txt:'"Five weeks is actually comfortable. Seen inside two weeks, camera test usually around then — you\u2019d board that ship with an answer instead of a secret. The version of this where you wait until you\u2019re back is the only version I\u2019d genuinely worry about."' },
      { lbl:'Safety-net',             txt:'"Two things tonight: if you can\u2019t pass water at all, or it\u2019s running heavily red with clots, that\u2019s A&E, not a wait. And if no letter lands within a week — ring me, don\u2019t let it drift. I\u2019m booking myself to call you after the camera test either way."' },
    ],
    learning:'NICE NG12: aged 45+ with unexplained visible haematuria (no UTI, or persisting after UTI treatment) = 2-week-wait urology referral — made on the day, never deferred for convenience, holidays, or a beetroot story. Anticoagulation never explains haematuria away. The consultation\u2019s real work is the hidden agenda: a friend\u2019s death from the same first symptom, and a cruise he\u2019s scared to lose — the reframe ("investigated beats frightened; the timeline works") is what converts referral into attendance.',
    knowledge:{
      guideline:'NICE NG12 (May 2025) — bladder & renal cancer recognition · CKS haematuria',
      points:[
        { h:'Diagnose the symptom honestly', t:'Painless visible haematuria in a 67-year-old ex-smoker decorator is bladder cancer until excluded — smoking is the biggest risk factor and occupational solvents/dyes add more. Beetroot, rifampicin and myoglobin are stories to RULE OUT, not rest on.' },
        { h:'Red flags — the NG12 thresholds', t:'2WW urology: aged \u226545 with unexplained visible haematuria without UTI, or persisting/recurring after successful UTI treatment; aged \u226560 with unexplained NON-visible haematuria plus dysuria or raised WCC. Aged \u226560 with recurrent unexplained UTI: consider 2WW too.' },
        { h:'Investigate without delaying', t:'MSU (exclude infection — but a positive culture only pauses the clock if symptoms fully explain and bleeding resolves after treatment), U&E/eGFR, FBC, BP. Do NOT wait for results to refer. Anticoagulants do not exempt anyone from investigation.' },
        { h:'Refer — 2WW urology, NICE NG12, today', t:'Urgent suspected-cancer referral on the call, named out loud as such. Tell him the sequence: contact within two weeks, flexible cystoscopy (local anaesthetic gel, ten minutes, home the same day) ± upper-tract imaging (CT urogram).' },
        { h:'Manage the person', t:'Honest base rates: most 2WW haematuria referrals find no cancer; early non-muscle-invasive bladder cancer is commonly resected and surveilled, not lost to. The cruise logistics are clinical work — solving them is what makes him attend.' },
        { h:'Safety-net & follow-up', t:'A&E today for clot retention or heavy persistent bleeding; chase-the-letter rule at one week; named GP follow-up after cystoscopy regardless of result; recheck non-visible haematuria and BP at review if cystoscopy is clear.' },
        { h:'Marking edge', t:'"You know how the wives are" is armour — the candidate who treats the appointment as the wife\u2019s anxiety misses the man counting days between episodes. Find Stan, answer the Stan question straight, and the cruise becomes your ally: an answer on board beats a secret at sea.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c13, c14, c15);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'dysuria-sti': {
      ceg: ['Gender, reproductive & sexual health'],
      stem: {
        name: 'Jordan Walsh', age: '24 years · male',
        pmh: ['Nil significant'],
        meds: ['No regular medication'],
        allergy: 'NKDA',
        recent: '⚠ Reception note: "burning when passing urine, wants antibiotics — asked if the prescription could go to the Boots near his work rather than his usual pharmacy." No previous UTI on record. Lives with partner (registered at this practice).',
        reason: 'Telephone appointment — requesting antibiotics for "a water infection".'
      },
      timeMap: [
        { t:'0–1',  h:'Open & listen',        d:'He leads with the transaction and the odd pharmacy request. Bank both. "Tell me about the burning, from the start."' },
        { t:'1–5',  h:'History + the real one', d:'Symptoms (discharge — ask directly), then the sexual history, matter-of-fact and complete. The stag do surfaces here if your tone makes it safe. Confidentiality stated EARLY.' },
        { t:'5–6',  h:'Summarise & share',     d:'"Burning + discharge at 24 is usually an infection of the pipe itself, passed through sex — and the encounter ten days ago fits the timing exactly."' },
        { t:'6–10', h:'Test-first plan',       d:'First-void NAAT + HIV/syphilis bloods with window periods; GUM as the discreet fast lane; partner logic including Megan; no blind antibiotics — and why.' },
        { t:'10–12',h:'Safety-net & close',    d:'Testicular pain/fever = same-day. Results to HIS mobile. The HIV window repeat booked. "The 3am googling ends when the testing starts."' }
      ],
      wordPics: {
        fail: 'Prescribes trimethoprim/nitrofurantoin on the story given; sexual history skipped or one euphemistic question; the pharmacy cue and the "hypothetical" testing question float past; no confidentiality statement, so the truth never arrives.',
        pass: 'Recognises probable urethritis; takes a real sexual history; arranges NAAT + bloods or GUM referral before any treatment; states confidentiality; mentions partner treatment; basic safety-net.',
        exc:  'Confidentiality up front unlocks the stag do; the silence is allowed to finish; the disguised HIV question is answered with window periods and calm numbers; partner notification framed as protecting Megan rather than confessing; GUM sold as the discreet option; he hangs up with a plan instead of a secret.'
      },
      avoid: [
        { dont:'"Have you been faithful to your girlfriend?"', instead:'"I ask everyone this, and it stays in this call: any other partners in the last three months — even once?"', why:'A loaded word guarantees a defensive lie; routine framing plus confidentiality gets the truth.' },
        { dont:'"I\u2019ll give you antibiotics now and we\u2019ll test if it doesn\u2019t settle."', instead:'"Treating blind buries the answer, risks the wrong drug, and leaves Megan exposed. One sample first — then the right treatment, properly."', why:'Blind antibiotics are the station\u2019s designed trapdoor: they fail the diagnosis AND the partner.' },
        { dont:'"You\u2019ll have to tell your girlfriend."', instead:'"If anything comes back positive, Megan needs testing to be safe. There are ways to do that — including ways where the clinic contacts her without your name. Let\u2019s find the one you can live with."', why:'An ultimatum makes him disappear; options keep him — and her — in the system.' }
      ]
    },

    'uti-elderly': {
      ceg: ['Older adults', 'Prescribing & pharmacology'],
      stem: {
        name: 'Harold Finch', age: '87 years · male',
        pmh: ['Hypertension', 'OA right shoulder'],
        meds: ['Amlodipine 5 mg OD', 'Co-codamol 30/500 QDS — started 3 weeks ago (locum, shoulder pain)'],
        allergy: 'Trimethoprim — rash (recorded 2019)',
        recent: '⚠ Daughter (Carol, visits daily) requested urgent call: care agency dipstick "positive", urine strong-smelling, dribbling, "muddled in the evenings" ~1 week. Daughter asking for antibiotics today. Baseline 2/52 ago: independent, walking to shops.',
        reason: 'Urgent video consultation — daughter connecting from patient\u2019s home.'
      },
      timeMap: [
        { t:'0–1',  h:'Open & listen',        d:'Carol opens with the dipstick and the demand. Hear it out — then greet Harold by name and get HIS version: "it won\u2019t come proper" is the case in five words.' },
        { t:'1–5',  h:'Cause-hunt',            d:'Bowels (5 days!), the new co-codamol, fluids ("so I don\u2019t leak"), confusion pattern, falls. Watch the screen: the belly-rub is a finding.' },
        { t:'5–6',  h:'Summarise & share',     d:'"The painkillers blocked the bowels; the blocked bowel is stopping the bladder emptying; it\u2019s overflowing in dribbles and fogging his evenings. The stick can\u2019t see any of that."' },
        { t:'6–10', h:'Treat the cause',       d:'Stop co-codamol (swap shoulder plan), laxatives, fluid plan answering the leak fear — and the same-day in-person exam + bladder scan, framed as the home-treatment plan, not a step toward hospital.' },
        { t:'10–12',h:'Safety-net & close',    d:'Plain triggers written down for Carol: no urine at all / hard belly / drowsy / fever → same-day or 999. Named call-back tomorrow. Derek answered out loud: "everything today is designed to keep him home."' }
      ],
      wordPics: {
        fail: 'Prescribes antibiotics off the dipstick (possibly trimethoprim — against a recorded allergy); never asks about bowels or the new co-codamol; talks exclusively to Carol; Derek never surfaces so every plan sounds like "hospital by stealth"; no examination arranged.',
        pass: 'Declines to treat the dipstick with a reason; finds the constipation and the opioid; arranges same-day examination and bladder scan; speaks to Harold directly; gives concrete safety-net triggers and follow-up.',
        exc:  'The whole mechanism assembled out loud from Carol\u2019s own throwaway line; Harold\u2019s leak-fear and Carol\u2019s Derek-fear both named and answered; the in-person review sold as the home-keeping plan; the locum\u2019s repeat stopped at source; tomorrow\u2019s call booked by name. Two patients leave the call feeling seen.'
      },
      avoid: [
        { dont:'"The dipstick doesn\u2019t mean anything, we don\u2019t treat those any more."', instead:'"That stick did its job — it got us talking. But at 87 it turns positive in half of all men with nothing wrong, so let\u2019s work out what\u2019s ACTUALLY happening to Harold."', why:'Dismissing her evidence dismisses her; honouring it while replacing it brings her with you.' },
        { dont:'"He really needs to be seen — he might need to go in."', instead:'"I want hands on his tummy and a five-minute bladder scan today — that\u2019s how we treat this at home. Everything on my list is the keep-him-home plan."', why:'For Carol every unexplained "seen" means Derek; pre-answering the fear is the only way the examination happens.' },
        { dont:'(To Carol, about Harold) "Is he eating and drinking?"', instead:'"Harold — tell me yourself: what\u2019s gone in today, food and drink? And the waterworks — burning, or just not coming properly?"', why:'Talking over the patient fails Relating in one move — and Harold holds the diagnostic answer Carol doesn\u2019t have.' }
      ]
    },

    'haematuria-2ww': {
      ceg: ['Long-term conditions & cancer', 'Urgent & unscheduled care'],
      stem: {
        name: 'Victor Aldridge', age: '67 years · male',
        pmh: ['Hypertension', 'Ex-smoker — 30 pack-years, quit 5 years ago', 'Occupation (retired): painter-decorator, 40 years'],
        meds: ['Ramipril 5 mg OD'],
        allergy: 'NKDA',
        recent: 'Booked by patient "to put the wife\u2019s mind at rest — she saw colour in the bowl". No urine sample yet. Last attended 18 months ago (BP review). NHS health check declined twice.',
        reason: 'Telephone appointment — discoloured urine.'
      },
      timeMap: [
        { t:'0–1',  h:'Open & listen',        d:'The beetroot-and-wives routine is armour. Let it play once, note that HE booked and HE counted the episodes — then start pinning down colour, stream, pain.' },
        { t:'1–5',  h:'Pin the symptom',       d:'Whole-stream, properly red, twice, painless, no clots — beetroot retired. Then the risk history: pack-years, four decades of solvents and paint, LUTS, weight. Ask what blood in the water has meant to people he knew.' },
        { t:'5–6',  h:'Summarise & share',     d:'"Visible blood, over 45, nothing to explain it — that\u2019s the one symptom we never sit on. Urgent referral today; most men referred get the all-clear, but it has to be proper."' },
        { t:'6–10', h:'Refer & reframe',       d:'2WW urology named out loud + MSU/bloods without delaying it. Cystoscopy in one calm sentence. Stan answered straight. The cruise solved with arithmetic: seen in two weeks, answer on board.' },
        { t:'10–12',h:'Safety-net & close',    d:'Clots/retention/heavy bleeding → A&E today. Chase-the-letter at one week. Named follow-up after the scope. "Tell Pam tonight — you\u2019ve carried it alone long enough."' }
      ],
      wordPics: {
        fail: 'Accepts beetroot/multivitamin and arranges "a sample when convenient"; never asks smoking or occupation; Stan and the cruise never surface; referral deferred until after the MSU "to be sure"; he hangs up relieved, unreferred, and boards the cruise with a secret.',
        pass: 'Establishes true painless visible haematuria; knows the NG12 threshold and makes the 2WW urology referral today; orders MSU/bloods without delaying it; touches the fear; gives A&E triggers and follow-up.',
        exc:  'Deflection gently dismantled using his own behaviour (he booked, he counted); Stan found and the Stan question answered with honest asymmetry — same symptom, different story; the cruise turned from obstacle into motivator; secrecy from Pam addressed; chase-the-letter, A&E triggers and a named post-scope call close it watertight.'
      },
      avoid: [
        { dont:'"It\u2019s probably the beetroot, but let\u2019s do a sample to be safe."', instead:'"Properly red, whole stream, twice — that\u2019s past what beetroot does. This gets the urgent pathway, and the sample runs alongside it, not instead of it."', why:'"Probably + sample" is how 2WW referrals die in telephone notes; the MSU must never gate the referral.' },
        { dont:'"Try not to think about what happened to your friend — every case is different."', instead:'"It\u2019s the same first symptom Stan had — I won\u2019t pretend otherwise. But Stan\u2019s was found late. This referral exists so yours is found early or found absent. That\u2019s the whole difference."', why:'Dismissing Stan dismisses the fear that brought him; honest asymmetry uses it.' },
        { dont:'"The referral might clash with your cruise — we could look at dates after you\u2019re back."', instead:'"Five weeks is comfortable: seen within two, camera around then — you board with an answer. Waiting is the only plan I\u2019d genuinely worry about."', why:'Colluding with delay on a 2WW is the probity-and-safety fail the station is built to catch.' }
      ]
    }
  });

})();
