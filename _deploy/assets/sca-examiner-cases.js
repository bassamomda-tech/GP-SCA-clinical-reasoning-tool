/* ============================================================
   Reasoning GP — You Be the Examiner: candidate performances
   Three ORIGINAL candidate transcripts at deliberately different
   standards. The user grades each domain 0–3, then reveals the
   examiner's marking: per-turn annotations + domain rationales +
   what was never said at all.

   turn: { who:'dr'|'pt', text, note?, kind?('good'|'miss'|'bad') }
   - note/kind annotate a DOCTOR turn in the reveal phase only.
   Educational; original content modelled on current UK guidance.
   ============================================================ */

window.SCA_EXAMINER_CASES = [

  /* ============================================================
     A. Hypertension — the "looks busy, scores little" candidate
     ============================================================ */
  {
    id:'exm-htn', caseRef:'htn-young-bp',
    label:'Candidate A', title:'New diagnosis of hypertension',
    setting:'Video · Marcus Whitfield, 32 · two raised clinic BPs (162/96, 158/94) · father had a stroke at 51',
    blurb:'A hard-working candidate who asks a lot of questions. Watch where the marks actually go.',
    turns:[
      { who:'dr', text:'Hello, Mr Whitfield. I am Dr Khan. I can see the nurse found your blood pressure raised on two occasions. I would like to ask you some questions about that, is that all right?',
        kind:'miss', note:'Functional but doctor-centred opening — the agenda is the readings, not the patient. No open question, so the golden minute is lost.' },
      { who:'pt', text:'Okay. Though honestly I feel completely fine — I think it was a fluke. I really don\u2019t want to end up on tablets for life like my dad was.' },
      { who:'dr', text:'I understand. Do you have any headache, chest pain, shortness of breath, palpitations, blurring of vision, weakness of limbs, fever, weight loss or night sweats?',
        kind:'bad', note:'The cue — "tablets for life like my dad" — is offered in the first minute and ignored. Then a recited systems template: most of these questions have no discriminating value here. This is the exam-template pattern examiners name explicitly.' },
      { who:'pt', text:'No… none of that. Like I said, I feel fine. Just tired, but we\u2019ve got a six-month-old.' },
      { who:'dr', text:'Any burning urine, blood in urine, swelling of legs?' },
      { who:'pt', text:'No.' },
      { who:'dr', text:'Do you smoke or drink alcohol?',
        kind:'good', note:'Relevant — but notice the closed staccato rhythm: the patient has stopped offering anything beyond yes/no.' },
      { who:'pt', text:'Never smoked. Maybe six pints at the weekend. And a couple of energy drinks a day to get through work, if that counts.' },
      { who:'dr', text:'Okay. And any family history of medical problems?' },
      { who:'pt', text:'My dad had a stroke at 51. He was never the same after it. That\u2019s the thing I keep thinking about, to be honest — my daughter\u2019s six months old.' },
      { who:'dr', text:'I am sorry to hear that. It must be very difficult for you. Now, can I ask about your diet and exercise?',
        kind:'bad', note:'The formulaic empathy line, delivered on a timer and immediately abandoned for the next checklist item. The fear about his daughter — the emotional centre of the case — is never explored. RTO cannot rise above borderline from here.' },
      { who:'pt', text:'Lots of takeaways. Football once a week. Look — is this going to mean tablets?' },
      { who:'dr', text:'We will come to that. First I want to explain that blood pressure of 158/94 is called stage 2 hypertension according to NICE guidelines, and at your age this needs investigation and treatment.',
        kind:'miss', note:'Direct question deflected ("we will come to that") — a missed invitation to share. Quoting guideline jargon ("stage 2", "NICE") at the patient instead of plain English. And no mention yet of confirming the diagnosis properly.' },
      { who:'pt', text:'Right. So it\u2019s definitely high, then?' },
      { who:'dr', text:'Yes, two readings above 150/90 is significant. I will arrange blood tests for kidney function, sugar and cholesterol, a urine test, and an ECG. We check these to look for any damage to organs.',
        kind:'good', note:'The end-organ work-up is correct and specific — this is a genuine Data Gathering/Management point.' },
      { who:'pt', text:'Okay…' },
      { who:'dr', text:'Also you should reduce salt, lose some weight, cut down alcohol to fourteen units, stop the energy drinks, do regular exercise five times a week, and eat more fruit and vegetables.',
        kind:'bad', note:'The shopping-list lecture: six instructions, none negotiated, none owned by the patient. Compare: "if we picked one change that would stick, what would it be?" Nothing here will survive the drive home.' },
      { who:'pt', text:'That\u2019s… a lot. I can try, I suppose.' },
      { who:'dr', text:'Good. Regarding treatment, I think we should start amlodipine 5 milligrams once daily today. It is the first-line medicine recommended for you.',
        kind:'bad', note:'The critical clinical error: committing to drug treatment on two clinic readings with no ABPM/HBPM confirmation. The drug choice is right for his phenotype — but the timing is wrong, and the right drug at the wrong time still fails the management domain. White-coat hypertension has not been excluded.' },
      { who:'pt', text:'Tablets already? This is exactly what happened to my dad. Is there really no other way?' },
      { who:'dr', text:'The tablets are very safe and effective. Most people have no side effects. It is important to control blood pressure to prevent stroke and heart attack.',
        kind:'miss', note:'Second offer of the father cue — refused again. Generic reassurance ("very safe") instead of hearing the fear. The patient is now negotiating alone.' },
      { who:'pt', text:'…Right. Okay. If you say so.' },
      { who:'dr', text:'I will also give you a leaflet about blood pressure. Do you have any questions?' },
      { who:'pt', text:'No. I don\u2019t think so.' },
      { who:'dr', text:'Okay. Please book a review in one month and see the receptionist for the blood forms. If you have any problems, come back or call 111. Thank you.',
        kind:'miss', note:'"Any problems, come back" is not a safety-net: no named symptoms, no timeframe, no 999 triggers. Follow-up exists but is administrative, not clinical. Also: snoring/OSA never screened — the secondary-cause door was never opened.' }
    ],
    missed:[
      'Never asked about sleep, snoring or daytime somnolence — the OSA screen this presentation invites (he naps at his desk most afternoons)',
      'Never confirmed the diagnosis with ABPM or home readings before committing to lifelong treatment',
      'Never explored what the father\u2019s stroke means to him, or the new baby — offered twice, declined twice',
      'Never asked his ideas or expectations — the consultation would be identical for any 32-year-old',
      'No QRISK / cardiovascular risk conversation; no number, no context',
      'No real safety-net: no 999 symptoms, no timeframe'
    ],
    expert:{ dg:1, cm:1, ro:1,
      dgWhy:'Plenty of questions, little discrimination. The end-organ work-up earns credit, but the history is a recited template: the OSA cue is never followed, the energy-drink detail never quantified, and the records (two readings, the nurse\u2019s note) are restated rather than used. Data was collected, not gathered.',
      cmWhy:'Right tests, right drug class — wrong sequence. Starting amlodipine without ABPM/HBPM confirmation contradicts the diagnostic pathway and risks treating white-coat hypertension for life. Lifestyle advice was a lecture, follow-up administrative, safety-net absent. Errors likely to impact care: this is a fail, not a bare pass.',
      roWhy:'One rehearsed empathy line, two refused cues on the father, a deflected direct question, and a plan delivered rather than shared. The patient\u2019s closing "if you say so" is the domain verdict in the patient\u2019s own words.',
      overall:'The classic near-miss candidate: industrious, polite, clinically literate — and consultation-blind. Almost every lost mark traces to the same root: the consultation ran on the candidate\u2019s script instead of the patient\u2019s story. Note how cheap the fixes are: one open question, one honest minute about Dad, one negotiated goal, ABPM before tablets.' }
  },

  /* ============================================================
     B. RIF pain / ?ectopic — the "charming but unsafe" candidate
     ============================================================ */
  {
    id:'exm-ectopic', caseRef:'rif-pain-young-female',
    label:'Candidate B', title:'Acute abdominal pain (telephone)',
    setting:'Telephone triage · Layla Ahmed, 28 · right iliac fossa pain since morning · past chlamydia, past ovarian cystectomy',
    blurb:'Warm, fluent, likeable — patients would request this doctor by name. Mark what actually happened.',
    turns:[
      { who:'dr', text:'Hello Layla, this is the duty doctor. Thanks for holding on — I can hear you\u2019re in pain, so let\u2019s sort this out together. Tell me everything from the beginning, in your own words.',
        kind:'good', note:'Genuinely good opening: warm, open, patient-led. RTO starts strongly.' },
      { who:'pt', text:'I woke up with this awful pain low down on the right. It\u2019s been building all day — cramping, constant, worse when I move or cough.' },
      { who:'dr', text:'You poor thing, that sounds miserable. Any sickness or temperature with it?' },
      { who:'pt', text:'A bit queasy. No fever I think.' },
      { who:'dr', text:'And your waterworks and bowels — all behaving?',
        kind:'good', note:'Sensible early discrimination for UTI/bowel causes, in plain language.' },
      { who:'pt', text:'All normal. I did have some light brown spotting this afternoon, which is odd for me.' },
      { who:'dr', text:'Noted. Now, appendicitis often starts like this — pain that settles on the right side, worse on movement. Did the pain start near the belly button and move?',
        kind:'bad', note:'The anchor drops: a diagnosis announced before the menstrual history is taken. The spotting — said out loud seconds earlier — is "noted" and never pursued. In a woman of reproductive age with RIF pain, the first discriminating question is the LMP.' },
      { who:'pt', text:'Not really, it\u2019s been right-sided all along.' },
      { who:'dr', text:'Okay. Any previous tummy operations?' },
      { who:'pt', text:'An ovarian cyst removed when I was 23. And I had chlamydia years ago, if that matters.' },
      { who:'dr', text:'Thank you for being so open — that all helps. When was your last period, just for completeness?',
        kind:'miss', note:'The right question, finally — but framed as "for completeness", i.e. administrative. The two biggest ectopic risk factors (tubal infection, pelvic surgery) have just been handed over and not recognised as changing the stakes.' },
      { who:'pt', text:'About six weeks ago. I\u2019m usually a 28-day clock. We actually came off the pill four months ago — we\u2019re trying for a baby.' },
      { who:'dr', text:'How exciting! Fingers crossed for you both. So — six weeks, some spotting… it\u2019s possible this is an early pregnancy niggle, or a cyst playing up given your history. Have you done a test?',
        kind:'bad', note:'"How exciting" — the single most dangerous sentence in this transcript. Late period + unilateral pain + spotting + tubal risk factors is ectopic until proven otherwise, and it has just been reframed as good news and a "niggle". The differential is said out loud WITHOUT the one diagnosis that kills.' },
      { who:'pt', text:'Not yet. I was going to test at the weekend. Should I be worried? I felt a bit faint standing up earlier, actually.' },
      { who:'dr', text:'Try not to worry — feeling faint can just be the pain, or not eating much today. Do a test tonight or tomorrow morning, that\u2019ll give us a much clearer picture.',
        kind:'bad', note:'A volunteered red flag — presyncope — is explained away in the same breath. And the plan now WAITS on a home test: in suspected ectopic the assessment must never be delayed for the urine test. Shoulder-tip pain is never asked about at all.' },
      { who:'pt', text:'Okay. And the pain itself?' },
      { who:'dr', text:'Paracetamol regularly, a hot water bottle, and rest today. I\u2019d like to see you myself rather than leave this — can you come in first thing tomorrow? I\u2019ll book you my 8.30 so you\u2019re not waiting around.',
        kind:'bad', note:'The disposition decision — the entire management mark — lands here: a possible ectopic sent to bed with a hot water bottle and a next-day routine slot. Tomorrow can be too late. This is the omission "likely to put the patient at risk of harm" in the descriptor language.' },
      { who:'pt', text:'That\u2019s really kind, thank you. And if the test is positive?' },
      { who:'dr', text:'Then bring it with you and we\u2019ll get you booked with the midwives and take extra care of that pain. One thing — if the pain gets dramatically worse overnight or you have heavy bleeding, don\u2019t wait for me, go to A&E. Okay?',
        kind:'miss', note:'A partial safety-net at last — worsening pain and heavy bleeding are named, but collapse, dizziness and shoulder-tip pain are not, and the word ectopic is never said, so the patient cannot weight the warning. Better than nothing; far below the standard the presentation demands.' },
      { who:'pt', text:'Will do. Thanks so much, doctor — you\u2019ve really put my mind at rest.' },
      { who:'dr', text:'That\u2019s what we\u2019re here for, Layla. Try to have a restful evening, and I\u2019ll see you at 8.30.',
        kind:'miss', note:'"Put my mind at rest" — the consultation achieved comfort at the price of safety. A reassured patient with an undiagnosed ectopic is a closed door.' }
    ],
    missed:[
      'Never named or excluded ectopic pregnancy — the single diagnosis this station exists to test',
      'Never asked about shoulder-tip pain; the volunteered faintness was rationalised away instead of acted on',
      'Did not connect past chlamydia + ovarian surgery to tubal risk',
      'Disposition wrong: needed same-day EPAU/A&E, not a next-day GP slot — and assessment must not wait for a home pregnancy test',
      'Safety-net omitted 999/collapse triggers and never gave the diagnosis a name the patient could act on'
    ],
    expert:{ dg:1, cm:0, ro:2,
      dgWhy:'The social history-taking is fluent and several questions are well chosen — but the discriminating data either arrived by luck (the patient volunteered the spotting, the faintness, the LMP context) or was never sought (shoulder-tip pain). Risk factors were collected and not recognised. Gathering that does not change in response to red flags is not safe gathering.',
      cmWhy:'Clear fail. The plan — analgesia, hot water bottle, home test, 8.30 tomorrow — is a competent plan for the wrong disease. With a possible ectopic the only passing management is same-day specialist assessment, explicitly not delayed for a urine test. This is the definition of an error likely to put the patient at risk of harm.',
      roWhy:'Genuinely warm, fluent, unhurried; the patient felt heard throughout — that is worth real credit. But relating includes honesty: the patient was comforted into danger, congratulated on a pregnancy that may rupture, and denied the one word that would let her judge her own symptoms overnight. Pass, not clear pass.',
      overall:'The mirror-image of Candidate A — and the more dangerous candidate. Rapport this good can carry a candidate THROUGH most stations and straight INTO a harm event in the one station where the medicine is the message. The lesson: Relating to Others marks cannot rescue a Clinical Management zero, and "the patient was happy" is not an outcome measure in an emergency presentation.' }
  },

  /* ============================================================
     C. Knee OA — the "almost excellent" candidate
     ============================================================ */
  {
    id:'exm-knee', caseRef:'knee-pain-walker',
    label:'Candidate C', title:'Sore knee in keen hill walker',
    setting:'Video · Donald Harris, 65 · months of right knee pain · recently widowed (in the notes) · charity coast-to-coast walk in 6 weeks',
    blurb:'A strong performance. Your job: find the marks this candidate left on the table.',
    turns:[
      { who:'dr', text:'Morning Donald — come in, have a seat. What\u2019s brought you in today?',
        kind:'good', note:'Clean open start.' },
      { who:'pt', text:'My right knee. Months of aching, and I\u2019ve got a big charity walk in six weeks — coast to coast. Before you say anything: I\u2019m not cancelling it.' },
      { who:'dr', text:'Understood — nobody\u2019s cancelling anything in the next ten minutes. Tell me about this walk first, actually. Coast to coast is serious — what\u2019s behind it?',
        kind:'good', note:'Excellent move: meets the declared agenda without resistance, and asks about the walk before the knee — opening the door to the real story.' },
      { who:'pt', text:'It\u2019s for the hospice. They looked after my wife Margaret last year. The walk was meant to be ours — we\u2019d planned it for her retirement. So I\u2019m doing it for her. The lads from the club are coming.' },
      { who:'dr', text:'Thank you for telling me that. So this isn\u2019t really a knee consultation at all — it\u2019s about getting you to that start line for Margaret. Let\u2019s treat it that way.',
        kind:'good', note:'Names the meaning out loud and rebuilds the whole consultation around the patient\u2019s agenda. This is what clear-pass relating sounds like.' },
      { who:'pt', text:'…Yes. Exactly that. Nobody\u2019s put it like that before.' },
      { who:'dr', text:'Right — the knee. Where exactly is the pain, and what makes it better or worse?' },
      { who:'pt', text:'Inner side, mostly. Worse after long walks and going downhill. Stiff for ten minutes in the morning, then it loosens.' },
      { who:'dr', text:'Any locking, giving way, or sudden swelling? Ever hot or red? And any night pain, fevers, or weight loss?',
        kind:'good', note:'Efficient triple sweep: mechanical symptoms, septic/inflammatory screen, and sinister features in one natural breath. Red flags covered without a recited feel.' },
      { who:'pt', text:'None of that. Puffy after a big day out, that\u2019s all.' },
      { who:'dr', text:'I\u2019d like the examination findings for that knee, please. (Reads findings.) Tenderness along the inner joint line, a small effusion, full extension, flexion just short of full with that inner ache. Ligaments feel solid. Your hip moves freely.',
        kind:'good', note:'Narrated focused examination with relevant negatives — hip screened as the referred-pain source.' },
      { who:'pt', text:'So what\u2019s the damage, doc? My mate had bone-on-bone and ended up with a full replacement. Six months off his feet.' },
      { who:'dr', text:'That\u2019s the fear, is it — that I\u2019ll find what he had? Let me be straight: everything in that knee behaves like osteoarthritis of the inner compartment — wear-and-tear arthritis. And before you ask: I don\u2019t need an X-ray to tell you that, and an X-ray wouldn\u2019t change what we do next.',
        kind:'good', note:'Hears the concern behind the question, commits to a clinical diagnosis, and pre-empts the imaging expectation with the reason. Textbook.' },
      { who:'pt', text:'No scan? You\u2019re sure?' },
      { who:'dr', text:'Sure. X-ray changes match symptoms poorly — people with awful films run marathons, people with clean films limp. We treat the knee in front of us, not the picture. If it ever stops behaving like arthritis — locking, giving way, night pain — that\u2019s when imaging earns its keep.',
        kind:'good', note:'Plain-language evidence, with the conditions that would change the plan built in.' },
      { who:'pt', text:'Fair enough. So can I still do the walk?' },
      { who:'dr', text:'My honest answer: probably yes, if we train the knee rather than just rest it. Here\u2019s the deal I\u2019d offer: daily quads and glute strengthening — I\u2019ll refer you to physio and give you the exercises today to start now; poles for the descents; topical anti-inflammatory gel regularly rather than waiting for pain; and we shorten the longest training days for the next fortnight, then build back up.',
        kind:'good', note:'Specific, staged, owned plan that says yes to the agenda — strengthening, poles, topical NSAID first-line, graded loading. Exactly the management this station wants.' },
      { who:'pt', text:'I can do all of that. What about proper painkillers for the walk itself?' },
      { who:'dr', text:'Topical gel first — it works better than people expect and spares your stomach. If we need more for the walk week itself we can talk about a short course of tablets with stomach protection then.',
        kind:'miss', note:'Right ladder, but vague at the top: "we can talk about it then" defers the decision the patient actually asked about. Naming the plan (e.g. shortest effective course of an oral NSAID with a PPI, checked against his other medicines) would have closed it. His weight — BMI 31 in the notes — is also never raised, the one long-term modifier left untouched.' },
      { who:'pt', text:'Good enough for me. You\u2019ve cheered me up, doctor.' },
      { who:'dr', text:'One more thing before you go — and tell me if I\u2019m overstepping. Training for the walk Margaret planned, with her lads alongside you… that\u2019s a lot of feelings on one route. How have the evenings been since she died?',
        kind:'good', note:'Uses the earned trust to open the bereavement door gently, with permission-seeking. The notes flagged he declined support last year; this is the right moment to re-offer.' },
      { who:'pt', text:'Long. The days are fine — it\u2019s the house at night. But the walk gives me somewhere to put it, if that makes sense.' },
      { who:'dr', text:'It makes complete sense. The walk is doing real work for you — let\u2019s protect it. And if the evenings ever get heavier than the walk can carry, the hospice runs a bereavement group that men like you actually stick with. No pressure today; the door\u2019s open.',
        kind:'good', note:'Validates his own coping mechanism, then signposts specific support without forcing it. Carer-of-the-deceased care done well.' },
      { who:'pt', text:'Noted. Maybe after the walk.' },
      { who:'dr', text:'Deal. So: exercises start today, physio referral in, gel twice daily, poles ordered, shorter training fortnight. I want to see you in four weeks — before the walk — to check the knee\u2019s on track. If it suddenly swells, locks, gives way, or you\u2019re ever feverish with it, come back straight away, don\u2019t wait for the appointment.',
        kind:'good', note:'Summary, defined review BEFORE the deadline, and a named-symptom safety-net. A clean close.' },
      { who:'pt', text:'Four weeks. I\u2019ll be there. Thanks, doc — Margaret would\u2019ve liked you.' }
    ],
    missed:[
      'Weight never addressed — BMI 31 is in the notes and is the strongest modifiable factor for knee OA progression; one kind sentence would have earned it',
      'Oral NSAID plan left vague ("we can talk about it then") — no named drug, course length or PPI cover, and no check against his atorvastatin/other medicines',
      'Mood not formally screened — the bereavement conversation was excellent, but a brief check for low mood/sleep beyond "the evenings are long" would have completed it'
    ],
    expert:{ dg:3, cm:2, ro:3,
      dgWhy:'Clear pass. Hypothesis-led from the first minute, red flags swept naturally, focused examination narrated with relevant negatives, hip excluded, and the records\u2019 bereavement flag actively used. Nothing recited, everything earned.',
      cmWhy:'Pass, one short of clear. The core plan is exemplary — clinical diagnosis without reflex imaging, strengthening + poles + topical NSAID + graded loading, review placed before the deadline, named safety-net. What holds it at 2: the analgesia ladder goes vague exactly where the patient asked for specifics, and the weight conversation — the long-term management of this disease — never happens.',
      roWhy:'Clear pass. Met the declared agenda without a fight, asked about the walk before the knee, named what the walk means, used earned trust to reopen bereavement support with permission, and let the patient keep ownership throughout. "Margaret would\u2019ve liked you" is the domain grade in one line.',
      overall:'This is what good looks like — and why "good" still isn\u2019t perfect. Note the shape: the candidate SPENT the first two minutes on the person and BOUGHT back every second of it in efficiency later, because the patient cooperated with everything. The remaining marks were cheap: one sentence about weight, one named drug with cover. Excellence is usually a finishing problem, not a talent problem.' }
  }
];
