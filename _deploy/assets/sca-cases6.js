/* ============================================================
   Reasoning GP — Case Library batch 4: "Palliative care calls"
   Three ORIGINAL telephone cases. Hidden agenda + full ICE in
   every case. Pushes into SCA_CASES + SCA_EXTRAS.
   Load AFTER sca-cases.js / 2 / 3 / 4 / 5 and sca-extras.js.
   ============================================================ */

(function(){

  /* ============ 22. TELEPHONE — Pain crisis and the unopened envelope ============ */
  const c22 = {
    id:'pall-pain', title:'The pain and the envelope', type:'telephone', duration:12,
    meta:{ age:71, sex:'M', setting:'Telephone — wife calling about her husband (palliative register).', system:'Palliative care' },
    brief:'Mr Ronald Hayes, 71, metastatic prostate cancer with bone metastases (spine, pelvis, femora), on the palliative register, hospice community team involved. Meds: MST 30 mg BD, oramorph 5 mg PRN (using 5\u20136 doses daily for 3 days), senna. His wife Brenda rings: severe right thigh pain since yesterday — "he went white getting off the commode". A hospice letter "about resuscitation" arrived four days ago. It is still unopened on the mantelpiece.',
    script:{
      opening:'"Doctor, it\u2019s Brenda Hayes — Ronnie\u2019s wife. The pain\u2019s got on top of him. The little bottle of morphine barely touches it now and he\u2019s having it five, six times a day. Last night he cried, doctor. Forty-three years and I\u2019ve never seen him cry. I don\u2019t know what I\u2019m allowed to give him — I\u2019m frightened of doing something wrong with all these bottles."',
      facts:[
        { topic:'The pain',          text:'Right thigh, severe, much worse on ANY weight-bearing since getting off the commode yesterday — he went white and nearly fell. At rest it grumbles; movement makes him cry out. Different from his usual back ache.' },
        { topic:'The doses',         text:'MST 30 mg twice daily, regular. Oramorph 5 mg used 5\u20136 times a day for three days — "barely touches it for half an hour". Senna most days. Bowels opened yesterday.' },
        { topic:'How he is',         text:'Eating little, drinking fair, mind clear, no new drowsiness or twitching. Passing urine. No fever. "He\u2019s still Ronnie — he\u2019s just in pain."' },
        { topic:'The envelope',      text:'Only if the hesitation is heard: a hospice letter "about resuscitation" arrived four days ago. Neither of them has opened it. "If we open it, it\u2019s real, isn\u2019t it?" Ronnie pretends not to see it; Brenda dusts around it.' },
        { topic:'Brenda\u2019s terror', text:'Her mother died of cancer in 1998 "screaming for help that never came". Her secret vow: Ronnie will not die in pain. Every escalation of morphine feels like both rescue and surrender — "and I\u2019ve heard it\u2019s the morphine that finishes them, at the end".' },
        { topic:'What she wants',    text:'Officially: permission on doses. Actually: someone to take command of the pain TODAY, and — though she can\u2019t ask it directly — someone to help them open the envelope.' },
      ],
      ice:{
        ideas:'The cancer is "in his bones now and that\u2019s the worst pain there is". The morphine is failing because "you get used to it".',
        concerns:'HIDDEN AGENDA — two-layered: the unopened DNACPR letter on the mantelpiece ("if we open it, it\u2019s real"), and her mother\u2019s 1998 death in uncontrolled pain — plus the half-believed myth that morphine escalation is "what finishes them".',
        expectations:'Clear, written-down dose instructions she can\u2019t get wrong; someone clinical to see Ronnie soon; and not to be left alone with the bottles, the pain, or the envelope.'
      },
      cues:['"I\u2019m frightened of doing something wrong with all these bottles" — dose confusion AND the morphine-kills myth, braided together.','"He went white getting off the commode" — new severe weight-bearing pain in a femur full of metastases; the clinical alarm of the call.','A pause, then: "There\u2019s a letter from the hospice we haven\u2019t… we haven\u2019t got round to opening." — the envelope, arriving sideways.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the red flag: NEW severe weight-bearing pain in a femur with known metastases = impending/actual pathological fracture until excluded — same-day assessment and urgent imaging arranged, gentle handling advice now (no weight-bearing, transfers supported)' },
      { dom:'tasks', text:'Fixes the arithmetic out loud: total daily morphine 60 mg + ~25\u201330 mg PRN; the PRN dose should be 1/6 of the regular daily dose (10 mg, not 5) — and the pattern of 5\u20136 failed PRNs means the background dose needs review with the hospice team today' },
      { dom:'tasks', text:'Uses the adjuncts bone pain actually responds to: considers NSAID/dexamethasone per hospice advice, flags single-fraction palliative radiotherapy for bone pain, keeps laxatives stepped up WITH the opioid' },
      { dom:'tasks', text:'Checks opioid safety before escalating: no drowsiness/myoclonus/confusion, renal function known, bowels moving — and gives Brenda written-down, idiot-proof instructions (her word) for the next 24 hours' },
      { dom:'rto',   text:'Hears the bottles fear and splits it into its two parts: the dosing confusion (solved with a written plan) and the morphine-kills myth — answered honestly: properly titrated morphine treats pain, it does not shorten life; her mother\u2019s 1998 is not Ronnie\u2019s 2026' },
      { dom:'rto',   text:'Catches the sideways envelope cue and goes toward it: asks what they imagine is in it, and reframes — the letter is not a verdict, it\u2019s a protection; opening it WITH someone (GP visit, hospice nurse) is on offer' },
      { dom:'rto',   text:'Honours the 43 years in the room: acknowledges what watching him cry cost her, and that ringing today was the right call, not a failure of coping' },
      { dom:'gs',    text:'Safety-nets concretely: leg suddenly deformed/unable to move/numb, new confusion or twitching, no urine output → urgent same-day call/999; today\u2019s plan timed (visit/imaging/hospice call-back) and the GP\u2019s evening call-back promised' },
    ],
    worked:[
      { lbl:'Command, taken',         txt:'"Brenda — you\u2019re not going to be alone with this by tonight. Here\u2019s what happens today: I\u2019m worried about that thigh, so he gets seen and pictured today; I\u2019m speaking to the hospice team within the hour about his doses; and before we hang up you\u2019ll have tonight\u2019s plan written down in your own handwriting. One thing at a time."' },
      { lbl:'The thigh, honestly',    txt:'"The pain that made him go white on standing — I have to take that seriously. When cancer sits in a thigh bone, the bone can crack. If that\u2019s what\u2019s happened there are real fixes — a stabilising operation or a single dose of radiotherapy can transform the pain — but it needs a picture of the bone today, and until then he doesn\u2019t put weight through that leg."' },
      { lbl:'The arithmetic, aloud',  txt:'"And here\u2019s something fixable I can hear down the phone: his top-up dose is half what it should be. The rule is the top-up matches a sixth of the whole day\u2019s dose — for Ronnie that\u2019s ten milligrams, not five. He\u2019s been ringing a doorbell with half a finger. No wonder it barely touches it."' },
      { lbl:'The myth, retired',      txt:'"You said you\u2019ve heard it\u2019s the morphine that finishes them. I want to take that fear off you properly: morphine matched to pain does not shorten life — that\u2019s been studied to death, forgive the phrase. What it does is give him back the hours the pain is currently stealing. What happened to your mother in 1998 was a failure to give enough, not a consequence of giving it."' },
      { lbl:'The envelope',           txt:'"Now — the letter on the mantelpiece. Can I tell you what\u2019s almost certainly in it? Not a verdict. A protection: it makes sure that if his heart stops from the cancer, no stranger breaks his ribs trying to drag him back for a worse death. You don\u2019t have to open it alone. When I visit, we can open it together — the three of us — and I\u2019ll translate every line."' },
      { lbl:'Safety-net',             txt:'"Tonight\u2019s rules, written down: top-ups are TEN milligrams, up to every two hours if he needs them, and you note the times. If the leg suddenly looks wrong, won\u2019t hold him at all, or goes numb — 999, tell them about the cancer in the bone. New confusion or twitching: ring straight away. And I\u2019m ringing YOU at six o\u2019clock either way. You\u2019re not on your own with the bottles any more."' },
    ],
    learning:'New severe weight-bearing pain in a metastatic femur is a pathological fracture until imaged — same-day assessment, handling advice, and the surgical/radiotherapy options named with hope. The opioid arithmetic is examinable: PRN = 1/6 of total daily background (here 10 mg, not 5), and \u22653 failed PRNs/day means the background needs review — with safety checks (sedation, myoclonus, renal function, bowels) before escalation. The hidden agenda is double: the morphine-kills myth (answer it: titrated opioids treat pain, they don\u2019t shorten life) and the unopened DNACPR envelope — reframed from verdict to protection, opened together, never alone.',
    knowledge:{
      guideline:'NICE NG31 care of the dying adult · CKS palliative pain · PCF/hospice opioid titration',
      points:[
        { h:'Diagnose the change', t:'Bone-metastasis pain that suddenly becomes severe, focal and weight-bearing-dependent ("went white off the commode") is mechanical until proven otherwise: impending or actual pathological fracture. Distinguish from his chronic background ache — the PATTERN change is the finding.' },
        { h:'Red flags & same-day action', t:'Pathological fracture suspicion → same-day review + urgent imaging; no weight-bearing meanwhile. Also screen: spinal cord compression (his spine is involved — legs, saddle, bladder), opioid toxicity (drowsiness, myoclonus, pinpoint pupils), and hypercalcaemia (confusion, thirst, vomiting) — all phone-detectable.' },
        { h:'Investigate proportionately', t:'Same-day X-ray of femur (orthogeriatric/palliative pathway per locality); bloods if toxicity or hypercalcaemia suspected (U&E, calcium); none of it delays analgesia — treat while arranging.' },
        { h:'Manage — the titration', t:'PRN oramorph = 1/6 of total daily background morphine: on MST 30 BD that is 10 mg, not 5. Using \u22653 PRNs/day → increase background (add average PRN use, typically with specialist input here given the fracture question). Bone-pain adjuncts: NSAID or dexamethasone (hospice advice), single-fraction radiotherapy referral, bisphosphonate consideration. Laxatives escalate WITH the opioid.' },
        { h:'Refer — today, named', t:'Hospice/palliative community team contacted same day for titration and the radiotherapy question; orthopaedics if fracture confirmed (prophylactic fixation for impending lesions transforms remaining quality of life). Tell Brenda who is ringing whom, and by when.' },
        { h:'Safety-net & follow-up', t:'Written PRN plan in her handwriting (dose, interval, what to record); 999 triggers (deformed/useless/numb leg); same-day triggers (new confusion, twitching, no urine); the GP\u2019s own evening call-back promised and kept — palliative families remember who rang back.' },
        { h:'Marking edge', t:'Two hidden agendas hide behind a dosing question: the morphine-kills myth (rooted in her mother\u2019s 1998 death — answer it with evidence and kindness) and the unopened envelope. The Clear Pass goes toward the envelope, reframes DNACPR as protection from a worse death, and offers to open it together at the visit. Command taken, arithmetic fixed, nobody left alone with the bottles.' }
      ]
    }
  };

  /* ============ 23. TELEPHONE — Confusion near the end, family divided ============ */
  const c23 = {
    id:'pall-confusion', title:'The drip her brother wants', type:'telephone', duration:12,
    meta:{ age:88, sex:'F', setting:'Telephone — daughter calling; brother in the background.', system:'Palliative / End of life' },
    brief:'Mrs Iris Caldwell, 88, end-stage heart failure (EF 15%, two admissions this year), on the palliative register with a ReSPECT form completed three months ago: priority comfort, preferred place of death HOME, DNACPR in place — completed with Iris while she had full capacity. Her daughter Wendy (61, lives with her) rings: two days of increasing confusion, barely drinking, sleeping most of the day, picking at the bedclothes. Wendy\u2019s brother Alan arrived from Aberdeen last night and is demanding "a drip and the hospital — we can\u2019t just let her fade".',
    script:{
      opening:'"Doctor, it\u2019s Wendy — Iris Caldwell\u2019s daughter. Mum\u2019s… she\u2019s gone somewhere these last two days. Muddled, sleepy, hardly a sip of anything. (Voice drops.) My brother got here last night and he\u2019s — Alan, I\u2019m ON the phone — he\u2019s saying we\u2019re starving her, that she needs a drip, that I should never have promised her she could stay home. Doctor, am I doing something terrible?"',
      facts:[
        { topic:'The two days',      text:'Progressively sleepier, muddled about time and faces, picking at the bedclothes, occasional clear moments ("she knew me this morning — squeezed my hand"). Taking sips only. Peaceful between times; not distressed, not in pain.' },
        { topic:'The checklist',     text:'If asked: no fever, no new cough, passing small amounts of dark urine, bowels opened two days ago, no retention discomfort, no new medications, no fall. Furosemide and ramipril stopped by the heart-failure nurse a month ago; on small-dose oxycodone for breathlessness, unchanged.' },
        { topic:'The ReSPECT form',  text:'Done three months ago at the kitchen table — Iris, both children invited (Alan "couldn\u2019t get away"), the GP and the heart-failure nurse. Iris\u2019s words, written on it: "No more hospitals. I want to go from my own bed, with the garden out the window."' },
        { topic:'Alan',              text:'Arrived last night after three months away. Shocked by the change — the mother on the phone a fortnight ago "sounded fine". His guilt is arriving as fury: drips, hospitals, second opinions, "Wendy\u2019s given up". He missed the ReSPECT conversation and feels ambushed by a form he never agreed to.' },
        { topic:'Wendy\u2019s promise', text:'Only if her guilt is heard: she promised Iris at the kitchen table — "you\u2019ll not die in a ward, Mum, not while I\u2019m breathing". Now Alan\u2019s accusation has her doubting whether keeping the promise is killing her mother.' },
        { topic:'What\u2019s needed',   text:'A doctor to say out loud what is happening; to arbitrate WITHOUT making it a battle Wendy wins; to explain what a drip would and wouldn\u2019t do; and to get the dying-phase support in place (visit today, anticipatory medicines, hospice number, mouth care).' },
      ],
      ice:{
        ideas:'Wendy half-knows her mother is dying. Alan believes she\u2019s treatably dehydrated and being "given up on".',
        concerns:'HIDDEN AGENDA — Wendy\u2019s kitchen-table promise, now reframed by her brother as the thing killing their mother. She isn\u2019t asking for clinical facts first; she\u2019s asking "am I doing something terrible?" Alan\u2019s fury is three months of absence converting to guilt.',
        expectations:'Wendy: the truth, said kindly, and backup against Alan that doesn\u2019t humiliate him. Alan: to be heard, to "do something". Both: not to carry this decision as theirs — it was Iris\u2019s, and it\u2019s on the form.'
      },
      cues:['"Am I doing something terrible?" — the promise and the guilt, in six words; this question must be answered directly before any clinical content lands.','Alan\u2019s voice in the background — the consultation has three people in it; ignore him and the plan collapses by suppertime.','"She knew me this morning — squeezed my hand" — offered as hope; it\u2019s also the lucid-interval pattern of dying, and how you teach the family what to treasure.']
    },
    checkpoints:[
      { dom:'tasks', text:'Runs the reversibility screen by phone before concluding: infection signs, retention, constipation, new drugs, opioid toxicity, recent falls — finds none, and recognises the picture (days of withdrawal, minimal intake, terminal restlessness, lucid intervals) as the dying phase of end-stage heart failure' },
      { dom:'tasks', text:'Arranges today\u2019s visit to confirm clinically — saying honestly that examination completes the judgement — and uses it to set up the dying-phase infrastructure: anticipatory medicines, district nurses, hospice number on the fridge, mouth-care kit' },
      { dom:'tasks', text:'Answers the drip question with evidence, not policy: in the dying phase IV/SC fluids rarely ease thirst (mouth care does), can worsen secretions and oedema in heart failure — offered as trial only if distress suggests dehydration, per NG31, not as a default' },
      { dom:'tasks', text:'Anchors the plan to the ReSPECT form as IRIS\u2019S decision: reads her own written words back to the family — comfort, home, the garden window — and confirms DNACPR remains in force' },
      { dom:'rto',   text:'Answers Wendy\u2019s actual question first and directly: "No. You are doing the opposite of something terrible — you are doing the hardest version of keeping your word"' },
      { dom:'rto',   text:'Brings Alan INTO the call rather than defeating him: acknowledges the shock of three months\u2019 distance, translates his fury as love with nowhere to go, gives him jobs (the mouth care, the music, the call rota) — the cure for helplessness is a task' },
      { dom:'rto',   text:'Teaches the family what they\u2019re seeing: the sleepiness, the picking, the lucid squeezes — named gently as the body\u2019s way of leaving, so each change stops arriving as an emergency' },
      { dom:'gs',    text:'Safety-nets for dying at home: distress, pain, agitation or rattling breathing → district nurse/hospice line (numbers given twice), anticipatory medicines in the house TODAY; what to do at the end (no 999, ring the surgery/111 — the ReSPECT form by the bed); GP\u2019s next call booked for tomorrow morning' },
    ],
    worked:[
      { lbl:'Her question, first',    txt:'"Wendy — before anything clinical, your question deserves a straight answer: no. You are not doing something terrible. You are doing the hardest thing there is — keeping a promise when it would be easier to break it. Now let me tell you what I think is happening to your mum."' },
      { lbl:'The truth, named',       txt:'"From everything you\u2019ve described — the sleepiness, the sips, the muddle with clear moments breaking through — I believe your mum has begun dying. Not from thirst, and not from anything anyone has failed to do. Her heart is finishing a long story. I\u2019ll come today and confirm that with my own eyes."' },
        { lbl:'Alan, brought in',     txt:'"Alan — I can hear you, and I\u2019m glad you\u2019re there. You\u2019ve come home to a different mother from the one on the phone a fortnight ago, and no one prepared you for that. Your \u2018do something\u2019 instinct is love — so let me give it real work, because there IS plenty to do for her. It just isn\u2019t a drip."' },
      { lbl:'The drip, honestly',     txt:'"Here\u2019s the honest science on drips at this stage: they don\u2019t ease the dry mouth — gentle mouth care every hour does that better. And in a failing heart, fluid we put in tends to pool — in the lungs, in the legs — and can make her last days harder, not softer. If I see signs she\u2019s suffering from dryness itself, a trial of fluid under the skin is on the table. But as a routine, it serves our feelings, not hers."' },
      { lbl:'Iris\u2019s own words',   txt:'"Can I read you both something? Three months ago, at your kitchen table, your mum said — and we wrote it in her words — \u2018No more hospitals. I want to go from my own bed, with the garden out the window.\u2019 This isn\u2019t Wendy\u2019s decision, and it isn\u2019t yours, Alan. It\u2019s Iris\u2019s. Your job — both of you — is to be her honour guard while she does it her way."' },
      { lbl:'Safety-net',             txt:'"Today: I visit, the nurses set up the just-in-case medicines, and the hospice number goes on the fridge — any distress, any hour, that\u2019s the call. The clear moments, like the hand-squeeze this morning — treasure them; say what needs saying in them. And when the time comes: no 999, no blue lights — ring us or 111, the form by her bed does the rest. I\u2019m ringing you tomorrow at nine, and I\u2019m coming today."' },
    ],
    learning:'New confusion near end of life still earns a reversibility screen (infection, retention, constipation, drugs, opioid toxicity) — but days of progressive withdrawal, minimal intake, terminal restlessness and lucid intervals in end-stage heart failure is the dying phase, and naming it kindly is the treatment. NG31: clinically assisted hydration is not routine in the dying — mouth care relieves thirst better; in heart failure fluids can add harm — though a trial is offered if dryness itself causes distress. The hidden agenda is the promise: answer "am I doing something terrible?" first, anchor every decision to the patient\u2019s own ReSPECT words, and convert the angry absent sibling with inclusion and tasks, not victory.',
    knowledge:{
      guideline:'NICE NG31 care of dying adults · ReSPECT process · CKS palliative care (last days)',
      points:[
        { h:'Diagnose the phase', t:'Recognising dying is a clinical skill: progressive drowsiness, minimal oral intake, withdrawal, terminal restlessness (bedclothes-picking), lucid intervals, dark scanty urine — over days, in end-stage disease, with reversible causes screened out. Naming it changes everything the family does next.' },
        { h:'Red flags — the reversibility screen', t:'Even on the palliative register: sepsis, urinary retention, constipation, opioid accumulation (renal decline), hypercalcaemia, new drugs. Phone-screen them all; examine same-day to complete. The register is not a reason to stop thinking — it\u2019s a reason to think faster.' },
        { h:'Investigate proportionately', t:'At this stage tests serve comfort decisions only: examination (chest, bladder, bowel, hydration, toxicity signs); bloods only if a finding would change the comfort plan. No routine observations cascade — each measurement must buy comfort or stop.' },
        { h:'Manage the dying phase', t:'Anticipatory medicines in the house today (opioid, midazolam, antiemetic, antisecretory); district nursing and hospice-line activation; mouth care hourly (better thirst relief than fluids); CAH per NG31 — not routine, trial only for distressing dryness, review against secretions/oedema in HF; stop non-comfort medications.' },
        { h:'The family is the unit of care', t:'Answer the guilt question directly before clinical content; bring the absent-angry sibling in with acknowledgement and TASKS (mouth care, music, rota); teach the signs so changes stop being emergencies; read the patient\u2019s ReSPECT words aloud — the decision belongs to the patient, which releases both children from carrying it.' },
        { h:'Safety-net & follow-up', t:'Hospice/DN crisis line given twice and stuck on the fridge; what-to-do-at-the-end said plainly (no 999; surgery/111; form by the bed); lucid intervals flagged as the time to say what matters; named GP call tomorrow plus today\u2019s visit — the dying-at-home promise is kept by infrastructure, not sentiment.' },
        { h:'Marking edge', t:'Three people are on this call. The Clear Pass answers "am I doing something terrible?" in the first minute, converts Alan from adversary to honour guard by giving his love a job, and lets Iris\u2019s own written words carry the decision — so neither child has to win, and neither has to carry it.' }
      ]
    }
  };

  /* ============ 24. TELEPHONE — The patient who wants the form ============ */
  const c24 = {
    id:'dnacpr-request', title:'"I want the form, doctor"', type:'telephone', duration:12,
    meta:{ age:79, sex:'M', setting:'Telephone — patient calling on his own behalf.', system:'Ethics / Capacity / End of life' },
    brief:'Mr Stanley Kerr, 79, severe COPD (FEV1 28%, on home nebulisers, two admissions last winter) and moderate heart failure. Independent at home, sharp as a tack, widowed. He has booked a telephone appointment himself. Reception note: "wants to discuss resuscitation paperwork — was very specific it\u2019s the doctor he speaks to, not the nurse." His son Michael (52, solicitor, visits Sundays) is not aware of the call.',
    script:{
      opening:'"Doctor Kerr — I mean, Mr Kerr, you\u2019re the doctor. Stanley Kerr. I\u2019ll come straight to it because I\u2019ve rehearsed this twice in the mirror: I want one of those do-not-resuscitate forms. The proper one, signed, in the house. And I want to know — this is the important part — whether my son can have it torn up. Because he\u2019ll try, doctor. He\u2019ll try."',
      facts:[
        { topic:'His reasoning',     text:'Lucid and specific: two winters of admissions, each one "a little less of me comes home". He\u2019s watched the trajectory. "I\u2019m not done living — I\u2019m done being dragged back."' },
        { topic:'Walter',            text:'Only if asked what\u2019s behind the timing: his brother Walter, 81, arrested in February; resuscitated in A&E; three weeks on ICU, tube down his throat, hands tied "so he wouldn\u2019t pull it out"; died anyway, "looking like a crash test dummy". Stanley visited daily. "Nobody asked Walter. I\u2019m asking for me while I still can."' },
        { topic:'Michael',           text:'His son. Loving, controlling, frightened — "fights everything, it\u2019s how he grieves in advance". Has already said "don\u2019t you dare sign anything, Dad". Stanley hasn\u2019t told him about this call and half-intends to keep the form secret — which he knows is a flaw in the plan.' },
        { topic:'Mood screen',       text:'If screened properly: sleeps well, eats well, tends his pigeons, laughs at the snooker, looking forward to his granddaughter\u2019s graduation in July. No anhedonia, no hopelessness, no death wish — "I want more life, doctor, just not THAT ending". The request is values, not depression.' },
        { topic:'His understanding', text:'Partially right: knows DNACPR covers resuscitation. Doesn\u2019t know it does NOT affect antibiotics, admissions, nebulisers or anything else; fears "they\u2019ll stop trying altogether once it\u2019s on file". This fear has delayed the call by a year.' },
        { topic:'What he wants',     text:'The form, properly done; certainty about whether Michael can overturn it; and — unsayable until trust is built — for the doctor to help him TELL Michael, because the secret version "would break the boy worse, after".' },
      ],
      ice:{
        ideas:'A DNACPR form is something you "get signed and keep in a drawer like a will" — and once it exists, doctors might "stop trying altogether".',
        concerns:'HIDDEN AGENDA — Walter\u2019s ICU death is the engine ("nobody asked Walter"), and the Michael problem is the cargo: he plans to keep the form secret from his son, knows it\u2019s wrong, and what he actually needs is help having the conversation he\u2019s avoiding.',
        expectations:'A signed form, legal certainty that his son cannot overturn it, and — beneath everything — an ally for the hardest conversation of his remaining life.'
      },
      cues:['"I\u2019ve rehearsed this twice in the mirror" — the request is enormous to him, however briskly delivered; match its weight.','"He\u2019ll try, doctor. He\u2019ll try." — the Michael problem stated in the first breath; the form is the easy half of this consultation.','"A little less of me comes home" each winter — trajectory awareness most doctors never elicit; he\u2019s done the prognostic work himself.']
    },
    checkpoints:[
      { dom:'tasks', text:'Confirms capacity through the conversation itself (understands, retains, weighs, communicates) and says so — and screens mood properly, distinguishing a values-based refusal from depression (pigeons, graduation, "more life, not that ending")' },
      { dom:'tasks', text:'Corrects the scope honestly: DNACPR covers CPR only — antibiotics, admissions, nebulisers, every other treatment continues; names his "they\u2019ll stop trying" fear and retires it, ideally by proposing the fuller ReSPECT conversation it deserves' },
      { dom:'tasks', text:'Is accurate about the law: a DNACPR is a clinical decision recorded with patient agreement — for a capacitous patient, his refusal of CPR is decisive and his son cannot overturn it; family are informed (with consent), never asked permission' },
      { dom:'tasks', text:'Gives honest CPR-outcome context for his conditions (survival to discharge from out-of-hospital arrest with severe COPD/HF is very poor, often with deficits) — information, not persuasion in either direction' },
      { dom:'rto',   text:'Finds Walter — asks what\u2019s behind the timing, lets the ICU story be told in full, and honours it: "nobody asked Walter; you\u2019re asking for yourself while you can — that\u2019s not giving up, that\u2019s the opposite"' },
      { dom:'rto',   text:'Surfaces the secret plan and challenges it kindly: a form Michael discovers AFTER is the version that breaks him; offers the three-way conversation — GP, Stanley, Michael, same room — as the alternative he actually came for' },
      { dom:'rto',   text:'Translates Michael for Stanley without taking sides: "fights everything" is grief rehearsing; the conversation gives his fight somewhere useful to go' },
      { dom:'gs',    text:'Closes with process, dated: the ReSPECT/DNACPR discussion booked as a proper face-to-face this week; the form completed there, copy in the house, flagged on the record and to OOH/ambulance systems; the Michael conversation offered and scheduled; review promised whenever he wants — "the form obeys you, not the other way round; you can change your mind any Tuesday you like"' },
    ],
    worked:[
      { lbl:'Match the weight',       txt:'"You rehearsed it in the mirror, so let me answer with the same seriousness: yes. This is your decision to make, you\u2019re clearly the man to make it, and by the end of this call you\u2019ll know exactly how it gets done properly — not a form in a drawer, but a decision the whole system respects at 3am."' },
      { lbl:'The Michael answer',     txt:'"Your direct question gets a direct answer: no. Michael cannot have it torn up. While you have your wits — and you audibly do — this is yours alone. We INFORM family out of decency; we do not ask their permission. The law is on the side of the man whose chest it is."' },
      { lbl:'Scope, corrected',       txt:'"Now the misunderstanding that\u2019s cost you a year: this form switches off ONE thing — the chest-pumping, rib-cracking restart at the very end. Everything else stays switched ON. Antibiotics, admissions if you want them, your nebulisers, all of it. Nobody stops trying. They just stop one specific thing you\u2019ve seen up close and don\u2019t want."' },
      { lbl:'Walter, honoured',       txt:'"Tell me about February. … What you watched with Walter — the tube, the tied hands — that\u2019s not rare, and at 79 with lungs like yours, surviving a restart at all is the exception, not the rule. Nobody asked Walter. You\u2019re asking for yourself while you still can. For the record, doctor to patient: that\u2019s not giving up. That\u2019s the most alive decision in this whole conversation."' },
      { lbl:'The secret, challenged', txt:'"One part of your plan I won\u2019t help with: the drawer. If Michael finds that form AFTER — at the worst hour of his life — it will break him in a way that never heals. So here\u2019s my counter-offer: he comes with you on Thursday. I do the talking, I take the heat, you hold the decision. He doesn\u2019t get a vote — but he gets to hear it from you alive, not from paperwork after. That\u2019s the version a father leaves behind."' },
      { lbl:'Safety-net',             txt:'"So: Thursday, face to face, the full conversation — what we do, what we don\u2019t, all of it in your words on a ReSPECT form, copy by the biscuit tin, flagged to the ambulance service so 3am strangers obey it. Michael invited, me as referee. And hear this last: the form obeys YOU. Change your mind any Tuesday you like and we tear it up together. Deal?"' },
    ],
    learning:'A capacitous patient\u2019s request for DNACPR is theirs to make: capacity is confirmed through the conversation, mood screened (values-based refusal \u2260 depression), the scope corrected (CPR only — everything else continues; the "they\u2019ll stop trying" fear delays these requests for years), and the law stated plainly — family are informed with consent, never asked permission, and cannot overturn it. Honest CPR-outcome data for severe COPD/HF is information, not persuasion. The hidden agenda is double: the brother\u2019s ICU death driving the timing, and the secret-from-the-son plan — the real consultation is converting the drawer into a three-way conversation, with the GP volunteering to take the heat.',
    knowledge:{
      guideline:'GMC end-of-life guidance · Resuscitation Council UK / ReSPECT · Mental Capacity Act 2005 · Tracey/Winspear case law',
      points:[
        { h:'Diagnose the request', t:'Three things to establish: capacity (understand/retain/weigh/communicate — demonstrable in the conversation itself), mood (a values-based treatment refusal with intact pleasures and future plans is not depression), and the driver (here: a witnessed ICU death — "nobody asked Walter").' },
        { h:'Red flags — when the request IS a flag', t:'New hopelessness, anhedonia, active death wish, recent losses, or a request that\u2019s really a suicide note → mood pathway first, decision deferred. Stanley screens clean: pigeons, snooker, July graduation, "more life, just not that ending".' },
        { h:'The law, exactly', t:'DNACPR is a clinical decision recorded with the patient; a capacitous patient\u2019s refusal of CPR is determinative. Family are informed (with consent — Tracey requires consultation on DNACPR decisions made by clinicians; a capacitous patient controls his own), and cannot overturn it. Without capacity later, the documented decision stands.' },
        { h:'Scope & honest outcomes', t:'DNACPR governs CPR only — antibiotics, admission, NIV, nebulisers all continue unless separately decided (which is why ReSPECT, covering the whole picture in the patient\u2019s words, beats a bare DNACPR). Outcome honesty: out-of-hospital arrest with severe COPD/HF — survival to discharge is very poor; what survival looks like matters as much as whether.' },
        { h:'Manage the process', t:'Proper face-to-face this week; ReSPECT completed in his words; copy in the house (visible, not a drawer), record flagged, OOH/ambulance notified — a decision the system can\u2019t see at 3am doesn\u2019t exist. Review on request, always reversible: "it obeys you."' },
        { h:'Safety-net & follow-up', t:'Explicit reversibility ("change your mind any Tuesday"); the form\u2019s location agreed; winter plan reviewed while he\u2019s here (rescue packs, when HE wants admission); the Michael conversation scheduled with the GP volunteering to take the heat; door left open for either man to return alone.' },
        { h:'Marking edge', t:'The form is the easy half. The hidden agenda is the drawer — a secret DNACPR his son discovers after the funeral. The Clear Pass answers the legal question with total clarity (no, Michael cannot overturn it), then refuses the secrecy and converts it into the three-way conversation Stanley actually rang for — "he doesn\u2019t get a vote, but he gets to hear it from you alive."' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c22, c23, c24);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'pall-pain': {
      ceg: ['Older adults', 'Prescribing & pharmacology'],
      stem: {
        name: 'Ronald Hayes (caller: wife)', age: '71 years · male',
        pmh: ['Metastatic prostate cancer — bone mets: spine, pelvis, both femora', 'Palliative register; hospice community team involved'],
        meds: ['MST 30 mg BD', 'Oramorph 5 mg PRN (using 5\u20136/day \u00d73 days)', 'Senna', 'Enzalutamide (oncology)'],
        allergy: 'NKDA',
        recent: '⚠ Wife rings: severe NEW right thigh pain since yesterday — "went white getting off the commode". Hospice letter re: resuscitation sent 4 days ago (per hospice correspondence). Last GP contact: 3 weeks ago, stable.',
        reason: 'Telephone — urgent: palliative pain crisis.'
      },
      timeMap: [
        { t:'0–1',  h:'Open & listen',        d:'Let Brenda empty the night out — the crying, the bottles, the fear of "doing something wrong". The commode detail is the alarm; log it, don\u2019t interrupt for it.' },
        { t:'1–5',  h:'Pain + safety screen',  d:'Pattern change (weight-bearing, focal, new), the dose arithmetic, toxicity screen (drowsy? twitching? urine?), bowels. The envelope will arrive sideways near minute 4 — leave the door open.' },
        { t:'5–6',  h:'Summarise & share',     d:'"Two problems: a thigh that needs a picture TODAY, and top-up doses half what they should be. Both fixable, both starting this afternoon."' },
        { t:'6–10', h:'Command & arithmetic',  d:'Same-day review/imaging, no weight-bearing, hospice rung within the hour, PRN corrected to 10 mg with written plan, radiotherapy flagged. Then the envelope: verdict → protection → "we open it together".' },
        { t:'10–12',h:'Safety-net & close',    d:'999/same-day triggers; tonight\u2019s plan in her handwriting read back; the 6 pm call-back promised. "You\u2019re not alone with the bottles any more."' }
      ],
      wordPics: {
        fail: 'Doubles the MST over the phone without screening the thigh (the fracture goes unimaged and he\u2019s found on the floor); or refuses to change anything "until the hospice rings back" leaving them another night; the morphine myth unanswered; the envelope cue ignored — it stays on the mantelpiece until the ambulance crew ask about it.',
        pass: 'Spots the pathological-fracture pattern and arranges same-day assessment; corrects the PRN arithmetic; screens toxicity and bowels; contacts the hospice; answers the morphine fear; gives written instructions and a call-back.',
        exc:  'Command taken in the first two minutes with a timed, owned plan; the arithmetic taught so Brenda understands it rather than obeys it; the 1998 story heard and the myth retired with evidence; the envelope approached, reframed as protection, and an opening-it-together visit offered; radiotherapy and fixation named as hope, not paperwork. She ends the call with a plan in her own handwriting and a doctor who rings at six.'
      },
      avoid: [
        { dont:'"Just give him an extra dose of the oramorph and see how he goes overnight."', instead:'"His top-ups have been half-strength all along — we fix the dose to ten milligrams now, AND that new thigh pain gets a picture today. Pain that changes its character in a leg full of cancer is never just \u2018more of the same\u2019."', why:'Phone-titrating past an unimaged pathological fracture is the station\u2019s catastrophic miss.' },
        { dont:'"Don\u2019t worry — the morphine is perfectly safe."', instead:'"You\u2019ve heard morphine is what finishes people. Studied properly, it isn\u2019t true: matched to pain it doesn\u2019t shorten life — it returns the hours pain steals. What happened to your mother was too little, too late. We are doing the opposite."', why:'A pat reassurance leaves the 1998 ghost in charge of every future dose decision.' },
        { dont:'"You should really open that letter — it\u2019s important."', instead:'"You don\u2019t have to open it alone. When I come, we\u2019ll open it together and I\u2019ll translate every line. I think you\u2019ll find it\u2019s not a verdict — it\u2019s a protection."', why:'Instructing them to face it alone is why it\u2019s been on the mantelpiece four days; companionship is what was actually being asked for.' }
      ]
    },

    'pall-confusion': {
      ceg: ['Older adults'],
      stem: {
        name: 'Iris Caldwell (caller: daughter; son present)', age: '88 years · female',
        pmh: ['End-stage heart failure (EF 15%) — 2 admissions this year', 'Palliative register', 'ReSPECT completed 3/12 ago: comfort priority, preferred place of death HOME, DNACPR in place'],
        meds: ['Oxycodone 1 mg PRN (breathlessness)', 'Furosemide & ramipril stopped by HF nurse 1/12 ago'],
        allergy: 'NKDA',
        recent: '⚠ Daughter rings: 2 days increasing confusion, drowsiness, minimal intake, bedclothes-picking. Son arrived from Aberdeen last night, demanding "a drip and the hospital". ReSPECT form in the house. Anticipatory medicines NOT yet issued.',
        reason: 'Telephone — urgent: end-of-life deterioration, family conflict.'
      },
      timeMap: [
        { t:'0–1',  h:'Open & listen',        d:'"Am I doing something terrible?" arrives in the first thirty seconds — answer it DIRECTLY before any medicine, or nothing else you say will be heard.' },
        { t:'1–5',  h:'Screen + recognise',    d:'Reversibility screen by phone (infection, retention, constipation, drugs, toxicity) — negative; the pattern (withdrawal, sips, picking, lucid squeezes) named for what it is. Alan\u2019s interjections logged, not fought.' },
        { t:'5–6',  h:'Summarise & share',     d:'"I believe your mum has begun dying — not from thirst, not from neglect. Her heart is finishing a long story. I\u2019m coming today to confirm with my own eyes."' },
        { t:'6–10', h:'The drip + the form',   d:'NG31 honesty about fluids in HF; mouth care as the real thirst treatment; Iris\u2019s written words read aloud to BOTH children; Alan converted with acknowledgement and tasks.' },
        { t:'10–12',h:'Infrastructure & close', d:'Today: visit, anticipatory meds, DN/hospice line on the fridge. What-to-do-at-the-end said plainly (no 999). Lucid intervals flagged as treasure. Tomorrow-at-nine call booked.' }
      ],
      wordPics: {
        fail: 'Either capitulates to Alan (admission arranged against the documented ReSPECT wish — Iris dies in a corridor) or "wins" against him (he\u2019s overruled, not included — and dials 999 himself at 2am); the reversibility screen skipped in both directions; Wendy\u2019s question never answered; no anticipatory medicines, so the first crisis becomes an ambulance.',
        pass: 'Screens reversible causes; recognises dying; explains assisted hydration honestly; anchors to the ReSPECT form; arranges today\u2019s visit, anticipatory medicines and crisis numbers; answers Wendy\u2019s guilt; includes Alan.',
        exc:  'The guilt question answered in minute one, word for word; the screen done fast and shown to the family (so "we checked" is true, which disarms Alan honestly); the drip answered with HF-specific evidence plus a conditional trial offer — rigour without dogma; Iris\u2019s kitchen-table words read aloud as the decision neither child has to carry; Alan given the mouth care, the music and the rota; the end-of-life logistics (no 999, form by the bed, numbers on the fridge) installed before the call ends.'
      },
      avoid: [
        { dont:'"There\u2019s nothing more we can do for her now."', instead:'"There is a great deal left to do for her — comfort, mouth care, music, the right medicines within reach, and the two of you beside her. What\u2019s finished is the part where hospitals make her better. The caring part is just beginning."', why:'"Nothing more to do" is both untrue and the sentence families quote angrily for years.' },
        { dont:'(To Alan) "Your mother signed a form — the decision\u2019s been made."', instead:'"Alan, you missed that kitchen-table conversation through no fault of yours, so let me read you your mum\u2019s own words now… Your job isn\u2019t to agree with the form. It\u2019s to be her honour guard while she does this her way."', why:'Wielding the form as a trump card converts grief into appeal-and-911 behaviour; reading it as her voice converts him into a guardian of it.' },
        { dont:'"A drip would just be cruel at this point."', instead:'"Honestly: drips at this stage don\u2019t fix the dry mouth — hourly mouth care does that better — and in a failing heart the fluid pools where we don\u2019t want it. If I see her suffering from dryness itself, a trial under the skin is on the table. I\u2019ll look today."', why:'"Cruel" moralises and inflames; mechanism plus a conditional offer is honest, defensible, and lands.' }
      ]
    },

    'dnacpr-request': {
      ceg: ['Older adults', 'Professional & ethical dilemmas'],
      stem: {
        name: 'Stanley Kerr', age: '79 years · male',
        pmh: ['Severe COPD — FEV1 28%, home nebulisers, 2 admissions last winter', 'Moderate heart failure', 'Widowed 2019'],
        meds: ['Trelegy', 'Salbutamol nebs PRN', 'Bisoprolol 2.5 mg', 'Ramipril 2.5 mg'],
        allergy: 'NKDA',
        recent: '⚠ Reception note: "Wants to discuss resuscitation paperwork — very specific that he speaks to the DOCTOR, not the nurse. Booked himself." No ReSPECT/DNACPR on file. Brother died Feb 2026 (hospital bereavement letter on record). Son is his registered next of kin.',
        reason: 'Telephone — patient-initiated: resuscitation decision.'
      },
      timeMap: [
        { t:'0–1',  h:'Open & listen',        d:'He\u2019s rehearsed it in the mirror — receive it with matching weight. Both halves of his opening matter: the form, AND "he\u2019ll try, doctor."' },
        { t:'1–5',  h:'Capacity, mood, driver', d:'Capacity shows itself in his sentences — say so. Mood screened properly (pigeons, snooker, July graduation). Then the timing question: "What happened in February?" — Walter arrives.' },
        { t:'5–6',  h:'Summarise & share',     d:'"Three answers: yes, it\u2019s your decision; no, Michael cannot overturn it; and the form does far less than you fear — it switches off one thing only."' },
        { t:'6–10', h:'Scope, law, the drawer', d:'CPR-only scope + honest outcome data for his lungs; ReSPECT offered as the fuller version; then the counter-offer on the secret: Thursday, three chairs, GP takes the heat.' },
        { t:'10–12',h:'Process & close',        d:'Face-to-face ReSPECT discussion booked; copy-by-the-biscuit-tin, record flagged, ambulance service sighted; reversibility promised in his own register ("any Tuesday you like"); door open for Michael to ring too.' }
      ],
      wordPics: {
        fail: 'Deflects ("we\u2019ll discuss it at your next review") — the request that took a year of courage is filed; or signs it off transactionally with no mood screen, no Walter, no scope correction — and the secret form is found in a drawer after the funeral; or worst: "we\u2019d need your son\u2019s agreement", which is legally wrong and confirms his exact fear.',
        pass: 'Confirms capacity and screens mood; corrects the CPR-only scope; states the law accurately (family informed, not asked); finds Walter; books the proper face-to-face ReSPECT discussion; flags reversibility.',
        exc:  'The rehearsed-in-the-mirror weight matched from the first sentence; the Michael question answered with total legal clarity; the "they\u2019ll stop trying" misunderstanding excavated and retired — with the year it cost him acknowledged; Walter\u2019s ICU story heard in full and honoured ("the most alive decision in this conversation"); the drawer plan refused and converted into the three-chair meeting with the GP volunteering to take the heat; the system plumbing (copy visible, record flagged, OOH/ambulance sighted) named so the decision works at 3am.'
      },
      avoid: [
        { dont:'"That\u2019s a big decision — why don\u2019t we involve your son and discuss it together first?"', instead:'"It IS a big decision — and it\u2019s yours. Michael gets informed, with care, ideally by you with me beside you. What he doesn\u2019t get is a vote. The law and I are both clear on that."', why:'Making the son sound like a required signatory confirms Stanley\u2019s worst fear and is legally wrong — capacitous patients\u2019 refusals are theirs alone.' },
        { dont:'"Are you feeling low? Sometimes these requests are a sign of depression."', instead:'"I have to ask some mood questions — not because your decision sounds depressed, but because it\u2019s my job to prove it isn\u2019t. Sleep? Appetite? The pigeons? … That\u2019s what I thought: a man planning his granddaughter\u2019s graduation isn\u2019t asking me to help him die. He\u2019s asking me to help him live on his own terms."', why:'Screening is mandatory; pathologising the request is insulting. Frame the screen as due diligence that protects the decision.' },
        { dont:'"Once it\u2019s signed, that\u2019s it sorted — you won\u2019t need to think about it again."', instead:'"Last thing, and it matters: this form obeys YOU, not the other way round. Change your mind any Tuesday and we tear it up together. Decisions you can\u2019t take back are traps; this one stays in your hands for life."', why:'Permanence framing deters the ambivalent and is false; explicit reversibility is both true and what makes the decision safe to make.' }
      ]
    }
  });

})();
