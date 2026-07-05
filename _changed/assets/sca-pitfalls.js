/* ============================================================
   Reasoning GP — The Hot Seat: examiner failure points (per case)
   The behaviours RCGP examiner feedback most often attaches to
   failed stations, written as fail → why → fix. Differential-
   attainment evidence (GMC/RCGP) shows these patterns dispropor-
   tionately catch internationally-trained candidates; each maps
   to a published SCA feedback statement. Original wording.
   Loaded AFTER sca-cases.js; attaches c.pitfalls at the bottom.
   ============================================================ */

window.SCA_PITFALLS = {

  /* ============ 1. Hypertension — Marcus Whitfield ============ */
  'htn-young-bp': {
    intro: 'This station is rarely failed on drug knowledge — it is failed on formulaic consulting, a missed cue, and a management plan that doesn’t follow NICE NG136. Every pattern below is taken from recurring SCA examiner feedback and is fixable.',
    items: [
      { dom:'rto',
        fail:'ICE delivered as a checklist — “What are your ideas? Any concerns? What were you expecting?” asked back-to-back, ticked off, then never mentioned again.',
        why:'Maps to the feedback statement “the consultation appeared formulaic; questions seemed rehearsed rather than responsive”. ICE only earns marks when it visibly shapes the plan.',
        fix:'One natural opener — “What went through your mind when the nurse said your pressure was up?” — then USE the answer: “Because your real worry is ending up like your dad, let me show you exactly how we stop that happening.”' },
      { dom:'rto',
        fail:'Hearing “I don’t want tablets for life like my dad” and replying “don’t worry, we’ll sort that out” — then moving straight to salt and alcohol questions.',
        why:'“Does not identify or respond to the patient’s cues.” The father’s stroke at 51 is the hinge of this station; brisk reassurance reads as dismissal and forfeits the Relating domain.',
        fix:'Pause the clinical agenda: “Tell me about your dad — what did you see happen to him?” Thirty seconds here buys you the rest of the consultation.' },
      { dom:'tasks',
        fail:'Starting amlodipine today on two clinic readings — or the opposite: refusing to discuss any treatment “until the tests are back”.',
        why:'Many health systems diagnose and treat on clinic readings; NICE NG136 does not. “Management plan not in line with current UK best practice” is the commonest Tasks feedback for internationally-trained candidates.',
        fix:'Offer ABPM/HBPM to confirm, explain why one reading can mislead, AND outline the conditional plan — “if the average confirms it, here is exactly what we’ll do”. A conditional plan scores; a deferral doesn’t.' },
      { dom:'tasks',
        fail:'Reflex ramipril as first-line, because that is the habit from previous training.',
        why:'For a man of Black African/African-Caribbean family origin without diabetes, NICE first-line is a CCB — and if a RAS blocker is added at step 2, an ARB is preferred over an ACE inhibitor (higher angio-oedema risk with ACEi).',
        fix:'Name the personalisation out loud: “For someone of your background the evidence says a different tablet works best — and it isn’t the one your dad would have been given.” That sentence scores Tasks and Relating together.' },
      { dom:'gs',
        fail:'Unexplained abbreviations and memorised empathy — “We’ll arrange ABPM and check your QRISK for end-organ damage… I understand this must be very difficult for you.”',
        why:'“Language not easily understood by the patient” plus “responses appeared rehearsed”. Examiners specifically flag stock empathy lines delivered flat at the wrong moment.',
        fix:'Plain English — “a blood-pressure cuff you wear for a day”, “your personal heart-risk score” — and respond to what HE actually said, not the phrase you prepared.' },
      { dom:'gs',
        fail:'Eight minutes of exhaustive systems review, then diagnosis, drug choice, lifestyle and safety-netting crammed into the final 90 seconds.',
        why:'“Poor time management — the management plan was insufficiently developed” is the single most cited reason for failing a station. Data gathering here is focused, not a full clerking.',
        fix:'Be sharing your working analysis by minute 6–7. This station needs four things gathered: confirm the reading plan, risk factors + family history, the OSA screen, and his ICE.' },
      { dom:'rto',
        fail:'Closing without checking anything has landed — “any questions? come back if you feel unwell” — and no booked follow-up.',
        why:'“Does not confirm the patient’s understanding of the plan” and non-specific safety-netting are both standard failing feedback statements.',
        fix:'Teach-back plus named symptoms: “When your partner asks tonight what the doctor said, what will you tell her?” … “Sudden severe headache, vision change, weakness, chest pain — 999. And I’m booking you in with your readings in four weeks.”' }
    ]
  },

  /* ============ 2. RIF pain — Layla Ahmed (telephone) ============ */
  'rif-pain-young-female': {
    intro: 'Candidates do not fail this station on gynaecology knowledge — they fail on slow prioritisation, false reassurance, and forgetting that a telephone consultation has its own craft.',
    items: [
      { dom:'tasks',
        fail:'A full SOCRATES, bowel and urinary screen before asking the one question that changes everything — “when was your last period, and could you be pregnant?”',
        why:'“Fails to prioritise data gathering.” In any woman of reproductive age with abdominal pain, pregnancy status is the pivot; reaching it at minute eight reads as unsafe.',
        fix:'LMP, contraception and the possibility of pregnancy inside the first three minutes, signposted: “Some quick but really important questions first…”' },
      { dom:'tasks',
        fail:'Arranging a pregnancy test and a review “once we have the result” — running it like a routine query.',
        why:'“Does not recognise urgency / unsafe management plan.” A 6-week LMP with unilateral pain and dizziness is a same-day EPAU presentation; the test must never delay the referral.',
        fix:'Refer same-day while the test happens in parallel: “I’m arranging for you to be seen today either way — the test fine-tunes what they do, it doesn’t decide whether you go.”' },
      { dom:'tasks',
        fail:'Never opening the record — missing the treated chlamydia and the ovarian-cyst surgery sitting in the notes.',
        why:'“Did not use information already available.” The SCA penalises ignoring the record as much as re-asking it — and both items raise ectopic risk.',
        fix:'Use the stem aloud: “I can see you had chlamydia treated years ago and an operation near the tubes — that makes me extra careful today.”' },
      { dom:'rto',
        fail:'Hearing “we’ve been trying for a baby” and responding with a protocol line, then continuing the checklist.',
        why:'“Does not respond to cues at the moment they are offered.” Hope and dread arriving together is the emotional substance of this station.',
        fix:'Name both sides before moving on: “So this pain has come at a moment of real hope — I can hear how frightening that makes it.” Then act decisively.' },
      { dom:'rto',
        fail:'False reassurance to soften a phone call — “I’m sure it’s nothing, probably a little cyst.”',
        why:'Examiners punish false reassurance harder than bluntness: “did not share concerns honestly”. If this is an ectopic, “it’s nothing” is dangerous.',
        fix:'Honest and contained: “It may well turn out fine — but the one thing I must rule out today is a pregnancy in the wrong place, because that can become serious quickly.”' },
      { dom:'gs',
        fail:'No telephone craft — never establishing where she is, who is with her, or how she will get to the unit; no call-back number agreed.',
        why:'The SCA marks skills appropriate to the modality. Remote stations fail on “did not establish the practical context or a safe transfer”.',
        fix:'Location, company, transport: agree exactly where she is going, who is taking her, that the unit expects her — and what she does if anything changes en route.' },
      { dom:'gs',
        fail:'Safety-netting with “call us back if it gets worse”.',
        why:'“Safety-netting non-specific.” For suspected ectopic the net is 999-level and must be spelt out.',
        fix:'“If you collapse, the pain suddenly worsens, your shoulder tip starts hurting or the bleeding gets heavy — that is 999, not the surgery.” Then check back what she will do now.' }
    ]
  },

  /* ============ 3. Knee pain — Donald Harris ============ */
  'knee-pain-walker': {
    intro: 'This station is failed on the scan negotiation and lecture-mode lifestyle advice — almost never on osteoarthritis knowledge.',
    items: [
      { dom:'tasks',
        fail:'Ordering an X-ray “to confirm” typical OA — or an MRI — because that is what the patient came for.',
        why:'NICE NG226: activity-related pain at ≥45 with stiffness under 30 minutes is a clinical diagnosis. Routine imaging is a classic habit from systems where scans are defensive practice — “investigations not in line with UK practice”.',
        fix:'Diagnose clinically with confidence and explain the why: “When the picture is this typical, an X-ray doesn’t change what we do — and it can’t measure pain.”' },
      { dom:'rto',
        fail:'Dismissing the scan expectation flat — “you don’t need one” — and moving on.',
        why:'“Does not address the patient’s expectation.” Refusing without negotiating throws away the Relating marks the expectation exists to test.',
        fix:'Acknowledge, explain, and leave the door open: “If we’ve strengthened that leg for six weeks and you’re no better, an X-ray is absolutely still on the table.”' },
      { dom:'rto',
        fail:'“You need to lose weight and exercise more” delivered as a verdict.',
        why:'“Management plan generic and not negotiated” — and weight raised as blame is the most common Relating failure in lifestyle-heavy stations.',
        fix:'Anchor everything to his identity: “My job is to get you back up the hills. Strengthening the muscle around the knee is the best treatment we have — and a little weight off is a lighter rucksack on every step.”' },
      { dom:'tasks',
        fail:'Paracetamol-and-rest as the plan — or reaching for codeine.',
        why:'NG226 de-emphasises paracetamol and weak opioids, and rest worsens OA — “management not in line with current best practice”.',
        fix:'Topical NSAID first-line for the knee; a short oral NSAID course with PPI cover for flares (respecting age, renal and CV risk); exercise prescribed as the treatment, not the fallback.' },
      { dom:'gs',
        fail:'“Wear and tear… bone on bone” — the harmful imagery used by the doctor, or left unchallenged.',
        why:'“Explanation likely to increase anxiety.” His fear of a knee replacement comes from exactly that picture.',
        fix:'Reframe it: “Joints are built to be used — think tread on a well-loved boot, not bone grinding on bone. Most people with this never need surgery.”' },
      { dom:'gs',
        fail:'Pain discussed, life not — no functional goal, no review, no red flags.',
        why:'“Plan lacked follow-up or a measurable outcome.” Examiners want a goal the patient cares about.',
        fix:'Set it together — “a comfortable five-mile walk in six weeks” — refer physio/ESCAPE-pain, book the review, and name the hot-swollen-joint red flags.' }
    ]
  },

  /* ============ 4. Home visit confusion — Edith Saunders ============ */
  'home-visit-confusion': {
    intro: 'The two ways to fail this visit: accept “her dementia has got worse”, and spend twelve minutes talking to the daughter about a patient sitting in the same room.',
    items: [
      { dom:'tasks',
        fail:'Accepting the family’s framing — worsening dementia — and consulting about long-term care.',
        why:'“Failure to generate the correct hypothesis.” A two-week, fluctuating change with poor attention is delirium until proven otherwise; missing it is a patient-safety-level error.',
        fix:'Name the distinction early and out loud: sudden + fluctuating + inattentive = delirium (use the 4AT) — “and delirium has a findable, treatable cause”.' },
      { dom:'tasks',
        fail:'Dipstick says leucocytes, so it’s “a UTI” — trimethoprim prescribed, visit over.',
        why:'“Managed the dipstick, not the patient.” UK guidance is explicit that urine dips mislead in the over-65s — while the real precipitants (a four-week-old co-codamol, constipation, dehydration) sit in the stem.',
        fix:'Work PINCH ME aloud — Pain, INfection, Constipation, deHydration, Medication, Electrolytes — and review the drug chart first: the co-codamol is the prime suspect.' },
      { dom:'rto',
        fail:'The entire visit conducted with June while Edith is talked about in the third person.',
        why:'“Did not involve the patient.” Deferring to family is respectful in many of the systems candidates trained in — in the SCA, the patient is addressed directly whatever her cognition.',
        fix:'Sit at her level, introduce yourself to Edith first, direct questions to her, and signpost the collateral: “I’ll check some details with your daughter — but I want to hear from you.”' },
      { dom:'tasks',
        fail:'Capacity handled by assumption — either “she’s confused, so the daughter decides”, or asking Edith to hold complex decisions she cannot.',
        why:'“Did not address capacity correctly.” The MCA is decision-specific: assume capacity until assessed otherwise, then best interests and the least-restrictive option.',
        fix:'Assess capacity for each specific decision (bloods, staying home tonight), narrate your reasoning, and involve June in best interests rather than as the decision-maker.' },
      { dom:'rto',
        fail:'June’s “I can’t do this much longer” answered with “you’re doing a great job” — and nothing else.',
        why:'“Cue acknowledged but not acted on.” Carer strain is a scored item; the Care Act carer’s assessment exists for exactly this moment.',
        fix:'Offer the concrete thing: a carer’s assessment, respite options, and a named follow-up — “you’re a patient in this too, not just the help.”' },
      { dom:'gs',
        fail:'The visit ends with bloods sent and no judgement on whether home is safe tonight.',
        why:'“Management plan incomplete / no safety-netting.” Delirium at home demands an explicit home-versus-admission decision with escalation triggers.',
        fix:'State the judgement and the triggers: who stays with her, what June watches for — drowsiness, not drinking, falls, seizure — and exactly when it is 999 versus the surgery.' }
    ]
  },

  /* ============ 5. Teenage acne — Sophie Edwards ============ */
  'acne-teen': {
    intro: 'A triadic consultation in disguise: the marks live with the 16-year-old, not the parent — and with the mood screen, not just the prescription.',
    items: [
      { dom:'rto',
        fail:'Consulting entirely with the mother — Sophie answers two questions in twelve minutes.',
        why:'“Did not engage the young person.” The station exists to test adolescent consulting; every minute spent on Karen’s agenda is a minute of Relating marks unscored.',
        fix:'Address Sophie by name from the first minute and make her space explicitly: “Mum, I’ll come to you — but first I’d really like to hear this in Sophie’s words.”' },
      { dom:'rto',
        fail:'Never offering time alone — so mood, bullying and self-harm are asked in front of mum, or not at all.',
        why:'“Did not offer a confidential space / apply Gillick.” Sensitive disclosure in front of a parent yields nothing; examiners credit the offer even when it is declined.',
        fix:'“Sophie, it’s routine for me to chat with people your age on their own for a couple of minutes — shall we do that now?” Then screen mood directly.' },
      { dom:'tasks',
        fail:'Treating the skin and never screening the mind — no questions about mood, school or self-harm despite “I hate how I look”.',
        why:'NG198 places psychological impact inside the severity assessment — “failed to assess impact” is a scored Tasks miss, and the cue is scripted to be found.',
        fix:'Ask directly and normalise: “Skin like this grinds people down — how has your mood been? Any thoughts of hurting yourself?”' },
      { dom:'tasks',
        fail:'An oral antibiotic alone — or a topical antibiotic stacked on an oral one — out of habit from elsewhere.',
        why:'NG198 is specific: a 12-week fixed topical combination first-line; never antibiotic monotherapy; never topical plus oral antibiotic together. “Prescribing not in line with UK guidance.”',
        fix:'Adapalene + benzoyl peroxide for 12 weeks with expectations set (“often worse before better — we judge it at twelve weeks”), stepping up to lymecycline + topical for moderate–severe disease.' },
      { dom:'rto',
        fail:'“The strong tablets” handled badly at either extreme — a flat “you can’t have isotretinoin”, or a same-day referral to make the consultation easy.',
        why:'“Expectation not negotiated.” Isotretinoin is the scripted expectation; both gatekeeping and capitulation lose the negotiation marks.',
        fix:'Map the honest path: “That drug exists and it works — it’s specialist-only with serious safeguards. Here’s what has to happen first, and scarring or two failed courses moves us straight there.”' },
      { dom:'gs',
        fail:'A plan whose irritation peak lands in GCSE week — exams never factored in.',
        why:'“Plan not tailored to the patient’s context.” Psychosocial information must shape the plan, not decorate the notes.',
        fix:'Start low or alternate days through the exams and review after; signpost Kooth; book the 12-week review with Sophie herself, not her mother.' }
    ]
  },

  /* ============ 6. Third-party call — Andrew re Helen ============ */
  'third-party-meno': {
    intro: 'This station is failed in the first two minutes — either by breaching confidentiality, or by hiding behind it so coldly that the consultation dies. The pass lives between.',
    items: [
      { dom:'tasks',
        fail:'Discussing Helen’s records or likely diagnosis with her husband — or agreeing to “just start her on something”.',
        why:'Disclosure or prescribing for a competent adult without consent is a straight professionalism fail (GMC Confidentiality) — and no amount of warmth afterwards recovers it.',
        fix:'Hold the line early and kindly: “I can listen to everything, and I can give you general information — what I can’t do is discuss Helen’s own care without her.”' },
      { dom:'rto',
        fail:'Reciting the confidentiality rule like a recorded message and letting the call end there.',
        why:'“Hides behind policy / doctor-centred.” IMG feedback often shows the law applied correctly but coldly — the station tests doing both: boundary AND alliance.',
        fix:'Boundary, then bridge: “You’re clearly worried, and calling was the right thing to do — let’s work out together how Helen gets the help she deserves.”' },
      { dom:'tasks',
        fail:'The safeguarding layer missed — a row that frightened a child, “she doesn’t want me near her”, marital strain — none of it explored.',
        why:'“Failed to recognise safeguarding cues.” Those lines are scripted precisely to be noticed; domestic-abuse and child-welfare screening is a duty, not an intrusion.',
        fix:'Gently and directly: “When things get heated at home, does anyone ever feel unsafe? How are the children doing with all of this?”' },
      { dom:'tasks',
        fail:'No usable knowledge offered — the husband leaves with “she has to come in herself” and nothing else.',
        why:'“Did not share appropriate general information.” You may give non-personal information, and NG23 content is expected: clinical diagnosis over 45, HRT first-line, alternatives.',
        fix:'Give the general picture plus resources both can read: the NHS menopause pages, Women’s Health Concern, the Balance app.' },
      { dom:'rto',
        fail:'Strategising a covert booking — “tell her it’s for a blood-pressure check and we’ll take it from there”.',
        why:'Collusion in deception fails professionalism even when well-meant.',
        fix:'Coach an honest conversation instead: what he might actually say to her, the offer of a joint or double appointment if SHE chooses it.' },
      { dom:'gs',
        fail:'Low mood mentioned in passing and no risk plan given — the call ends without a crisis route.',
        why:'“Did not assess or act on risk conveyed by a third party.” You cannot assess Helen — but you must equip Andrew.',
        fix:'“If she ever talks about harming herself, that is same-day: the duty doctor, 111 option 2, Samaritans 116 123. Here’s exactly what you’d do.”' }
    ]
  },

  /* ============ 7. Persistent cough — Raymond Powell ============ */
  'cough-smoker-2ww': {
    intro: 'Two ways to fail: collude with “just antibiotics”, or arrange the right urgent test while hiding why. NICE NG12 and honest language carry this station together.',
    items: [
      { dom:'tasks',
        fail:'Prescribing the antibiotics — or “one more course and we’ll see” — to close the consultation comfortably.',
        why:'“Colluded with the patient’s agenda / unsafe plan.” NG12: a three-month unexplained cough in an ever-smoker aged over 40 means an urgent CXR within 2 weeks — amoxicillin treats the wrong problem.',
        fix:'Decline with the reason and replace with the better offer: “An antibiotic treats the wrong thing. The right test, urgently, is what actually gets you back on site safely.”' },
      { dom:'rto',
        fail:'The throwaway “coughed up a bit of blood once, probably nothing” rushed past on the way to the systems review.',
        why:'“Cue missed at the moment it mattered.” Unexplained haemoptysis at 40+ is itself a suspected-cancer (2WW) referral trigger under NG12 — the casualness of the mention IS the test.',
        fix:'Slow right down: “Tell me about that blood — even once matters to me.” Then act on it explicitly and visibly.' },
      { dom:'rto',
        fail:'Hiding the word cancer entirely — “we’ll do a routine X-ray just to be thorough”.',
        why:'“Not honest about the reason for urgent referral.” Patients on urgent pathways must understand why; soft-soaping breeds DNAs and fails the honesty descriptor.',
        fix:'Honest, proportionate, hopeful: “Most of these X-rays come back clear — but with 35 years of smoking I want it urgently, to rule out anything serious, and that includes cancer.”' },
      { dom:'tasks',
        fail:'The second pathway missed — three months of hoarseness documented, nothing done about it.',
        why:'Persistent unexplained hoarseness in a smoker over 45 warrants the suspected laryngeal-cancer pathway (NG12) — “incomplete management of co-existing red flags”.',
        fix:'Name both tracks out loud: the urgent chest X-ray for the cough, and an urgent ENT referral for the voice.' },
      { dom:'gs',
        fail:'A smoking lecture at minute three — before the diagnosis conversation has even happened.',
        why:'“Mistimed health promotion” reads as not listening; under the bravado this man is frightened.',
        fix:'Cessation belongs inside the plan, offered not preached: “You quit for four months once — so you can do it. Want help making it stick this time?”' },
      { dom:'gs',
        fail:'Results left to chance — “we’ll write to you if anything shows up”.',
        why:'“Inadequate follow-up arrangements.” A possible cancer result must come with a named, booked, in-person follow-up.',
        fix:'Book the results appointment now; safety-net massive haemoptysis or breathlessness at rest as 999; confirm he can repeat the timeline back.' }
    ]
  },

  /* ============ 8. Diabetes & Ramadan — Imran Shah ============ */
  'insulin-ramadan': {
    intro: 'The trap has two doors: forbid the fast and lose the patient, or bless it unchanged and endanger him. The pass is a negotiated, faith-literate plan — with the DVLA never forgotten.',
    items: [
      { dom:'rto',
        fail:'“With diabetes like this, fasting Ramadan isn’t safe for you” — prohibition, case closed.',
        why:'“Did not respect the patient’s values / no shared decision.” Prohibition guarantees covert, unplanned fasting — the most dangerous outcome of all.',
        fix:'Risk-stratify WITH him (IDF-DAR), adjust the regimen for fasting, and use the faith framework itself: Islam permits — indeed prefers — breaking the fast for illness or hypoglycaemia.' },
      { dom:'tasks',
        fail:'The opposite collusion: “of course, fast as you wish” — with gliclazide unchanged through 16-hour fasts.',
        why:'A sulfonylurea through prolonged fasts is a hypoglycaemia plan — “unsafe management” — and in a taxi driver it becomes a public-safety issue.',
        fix:'A pre-Ramadan medication plan: reduce/move the sulfonylurea or switch to a low-hypo agent, redistribute doses to iftar and suhoor, agree glucose-monitoring rules and the thresholds for breaking the fast.' },
      { dom:'tasks',
        fail:'Reflex “you need insulin now” for an HbA1c of 84 — because insulin was the only next step where you trained.',
        why:'NICE NG28 supports intensifying with an SGLT2 inhibitor and/or GLP-1 RA — cardio-renal protection and weight benefit — before insulin in most T2DM. “Management not current UK practice.”',
        fix:'Offer the modern options first; if insulin is ultimately needed, frame it as treatment, never punishment: “your pancreas needs help, not blame.”' },
      { dom:'tasks',
        fail:'A taxi driver on a sulfonylurea — possibly starting insulin — and driving is never mentioned.',
        why:'“Missed a medicolegal obligation.” Hypoglycaemia and Group 2/taxi licensing rules are a scored item, and among the most commonly omitted.',
        fix:'Address it explicitly: glucose ≥5 to drive, test before driving and two-hourly, fast sugar kept in the cab, and the duty to notify the DVLA if insulin starts.' },
      { dom:'rto',
        fail:'“Why haven’t you come for review in eighteen months?” — the consultation opens with reproach.',
        why:'“Judgemental tone destroys rapport in the first minute.” Engagement is the problem to solve, not attendance to punish.',
        fix:'Curiosity, not blame: “Eighteen months is a long gap — what made it hard to come in?” The answer (work, fear, fatalism) shapes the entire plan.' },
      { dom:'gs',
        fail:'A plan announced today with no pre-Ramadan review, no structured education and no sick-day rules — and Ramadan starts in five weeks.',
        why:'“Incomplete plan.” The five-week timeline is the test inside the test.',
        fix:'Book the pre-Ramadan review now, arrange structured education, give sick-day rules and hypo treatment, and agree a contact point during the fast itself.' }
    ]
  },

  /* ============ 9. Abnormal LFTs — Charles Bennett ============ */
  'lft-alcohol': {
    intro: 'This station is failed on tone and on three dangerous words — “just stop drinking”. The medicine is straightforward; the conversation is the exam.',
    items: [
      { dom:'rto',
        fail:'Opening with unit arithmetic and the word “alcoholic” — an interrogation about drink before he has told his story.',
        why:'“Judgemental approach / failed to establish rapport.” His scripted defensiveness is triggered by exactly this; once he shuts down, the station is unrecoverable.',
        fix:'Results first, neutrally: “Some of your liver tests are up — there are several possible causes and I’d like to work through them with you.” Let the drinking emerge inside the story.' },
      { dom:'tasks',
        fail:'Accepting “a few beers, socially” and writing down “alcohol excess” — no numbers, no pattern.',
        why:'“Data gathering lacked precision.” Weekly units, the pattern, morning drinking and the features of dependence are the scored substance — AUDIT-C exists for this.',
        fix:'Walk a typical week drink by drink, without flinching; AUDIT-C, then the dependence screen — and notice the scripted cue of the “jittery dry week”.' },
      { dom:'tasks',
        fail:'The fatal advice: “you must stop drinking completely, starting today.”',
        why:'In probable dependence, abrupt cessation risks withdrawal seizures and delirium tremens — “unsafe advice” at automatic-fail level. The jittery dry week in the script is there to be caught.',
        fix:'Name the risk and plan a supported reduction: “Stopping suddenly could actually be dangerous for you — we do this gradually, with proper help alongside.”' },
      { dom:'tasks',
        fail:'“Repeat LFTs in three months” as the entire plan.',
        why:'“Inadequate investigation.” An alcohol fingerprint (AST:ALT >1, raised GGT, macrocytosis) needs a fibrosis assessment (FIB-4/ELF), a non-alcohol screen — hepatitis serology, ferritin, autoimmune profile — and follow-through.',
        fix:'Order the panel and explain it plainly: “a scarring score for the liver, and tests to be sure nothing else is going on” — with the review booked.' },
      { dom:'rto',
        fail:'The life context untouched — passed over for partnership, the stress, what the drink actually does for him at 9pm.',
        why:'“Managed the LFTs, not the man.” The psychosocial drivers are both the levers of change and the Relating marks.',
        fix:'“You mentioned being passed over — tell me about that. What does the drink give you at the end of those days?”' },
      { dom:'gs',
        fail:'No bridge to help — a leaflet, “cut down”, and good luck.',
        why:'“Plan lacked concrete support.” A brief intervention plus named services is the UK standard of care.',
        fix:'Brief intervention now; local alcohol service referral if he is willing; Drinkline 0300 123 1110; withdrawal danger signs named; review in the diary.' }
    ]
  },

  /* ============ 10. Child who won’t sleep — Aaron & mum ============ */
  'sleep-paeds': {
    intro: 'The classic two-patient station. Candidates fail it by treating the wrong patient — twelve minutes of toddler sleep hygiene while the exhausted, tearful mother goes unexamined.',
    items: [
      { dom:'tasks',
        fail:'A masterclass on bedtime routines while “I’m on my knees, I can’t do this any more” passes without a single follow-up question.',
        why:'“Failed to identify the real presenting problem.” The scripted cues — tearfulness, hopelessness — make the mother’s mood the can’t-miss issue of the station.',
        fix:'Pivot openly: “Aaron sounds healthy — right now I’m more concerned about you. How low have things actually got?” Then screen mood and thoughts of self-harm directly.' },
      { dom:'tasks',
        fail:'Reaching for melatonin — or promethazine — “because the family needs sleep tonight”.',
        why:'Melatonin is not for otherwise-healthy young children outside specialist neurodevelopmental use — “prescribing outside UK practice” — and it validates the wrong model of the problem.',
        fix:'Commit to the behavioural diagnosis with confidence and offer the method that works: a consistent wind-down, put down sleepy-but-awake, gradual retreat — and honest expectations of one to two hard weeks.' },
      { dom:'tasks',
        fail:'The behavioural label applied without earning it — no screen for snoring, apnoea, growth or development.',
        why:'“Premature closure.” The behavioural diagnosis is correct here, but it must be earned with a brief, targeted organic screen, stated aloud.',
        fix:'Three quick screens narrated: breathing in sleep, growth and development, daytime behaviour at nursery — then commit.' },
      { dom:'rto',
        fail:'Behavioural advice delivered as a parenting verdict — “he’s learned bad habits; you have to be consistent.”',
        why:'“Advice perceived as blame.” An exhausted parent hears criticism, disengages, and the Relating marks die in that moment.',
        fix:'De-blame first: “He’s learned to fall asleep with you there — completely normal, very fixable, and none of it is your fault.”' },
      { dom:'rto',
        fail:'A plan that needs a second adult she doesn’t have at bedtime — feasibility never checked.',
        why:'“Plan not feasible for this patient’s circumstances.” Psychosocial reality must shape the method chosen.',
        fix:'Tailor it to a solo parent; recruit the Health Visitor, ICON and The Sleep Charity; ask directly who else could take a night.' },
      { dom:'gs',
        fail:'Closing with a sleep plan and no risk net for mum — low mood noted, nothing arranged.',
        why:'“Inadequate safety-netting for the identified risk.”',
        fix:'Her own appointment booked this week (PHQ-9 there), explicit routes if things darken — 111 option 2, Samaritans 116 123 — and a two-week review of Aaron’s plan.' }
    ]
  }

};

/* Attach to case objects */
(function(){
  if (!window.SCA_CASES) return;
  window.SCA_CASES.forEach(function(c){
    if (window.SCA_PITFALLS && window.SCA_PITFALLS[c.id]) c.pitfalls = window.SCA_PITFALLS[c.id];
  });
})();
