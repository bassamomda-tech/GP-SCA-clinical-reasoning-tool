/* ============================================================
   Reasoning GP — Case Library batch 15: "Headache"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   Built to test which headaches are NOT benign.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases14.js.
   ============================================================ */

(function(){

  /* ============ 53. TELEPHONE — Migraine with aura on the combined pill ============ */
  const c53 = {
    id:'headache-aura-pill', title:'"Zigzag lights, then the headache"', type:'telephone', duration:12,
    meta:{ age:31, sex:'F', setting:'Telephone — new visual symptoms with headache, on the COC.', system:'Neuro / Contraception safety' },
    brief:'Ms Robyn Carter, 31, on the combined oral contraceptive pill (Rigevidon) for 6 years. Rings about "weird zigzag lights in my vision, then a thumping one-sided headache" — three times in the last two months, each aura lasting ~20\u201330 minutes before the headache. PMH: heavy, painful periods (the reason she\u2019s on the pill). Migraines without aura in her teens. BMI 24. Getting married in 7 weeks. Wants "something stronger for the headaches".',
    script:{
      opening:'"Hi \u2014 so I keep getting these horrible headaches, but the weird thing is they start with my vision going funny, like flickering zigzag lines down one side, for about twenty minutes, and THEN the headache hits. It\u2019s happened three times now. I\u2019m getting married in seven weeks and I can\u2019t be doing with this on my honeymoon, so I really just need something stronger to knock them on the head. Can you sort me out a prescription?"',
      facts:[
        { topic:'The aura',           text:'If explored: clear visual aura \u2014 zigzag/flickering lines, one side of vision, ~20\u201330 min, fully reversible, FOLLOWED by a typical one-sided throbbing headache with nausea and light sensitivity. This is migraine WITH aura \u2014 new for her (her teenage migraines had no aura).' },
        { topic:'The pill',            text:'On the combined pill (oestrogen-containing) for 6 years. Crucially \u2014 migraine WITH aura + combined pill substantially raises ischaemic stroke risk; this is a hard contraindication (UKMEC 4). She has NOT connected the aura to the pill and assumes the pill is irrelevant.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 reachable when the plan to stop the pill emerges: she relies on the pill to control heavy, painful periods AND, far more pressingly, she is getting married in 7 weeks and is terrified of an unplanned pregnancy / bleeding or pain ruining the wedding and honeymoon. "Just stop the pill" lands as a catastrophe to her, so she may resist or downplay the aura.' },
        { topic:'The smoking',         text:'If asked openly and non-judgementally: she\u2019s started smoking again with wedding stress (~5/day), hasn\u2019t mentioned it because she\u2019s embarrassed \u2014 another stroke risk multiplier with the combined pill.' },
        { topic:'What she wants',      text:'Officially: stronger painkillers. Actually (and needs): recognition that the aura makes her current pill genuinely dangerous, a SAFE alternative contraception sorted before the wedding so she\u2019s not exposed, period-pain control, and migraine treatment \u2014 without her honeymoon plans collapsing.' },
      ],
      ice:{
        ideas:'She just has worse headaches now and needs stronger painkillers; the visual stuff is part of the headache and nothing to do with her pill.',
        concerns:'HIDDEN AGENDA \u2014 getting married in 7 weeks: terror that stopping the pill means unplanned pregnancy and that heavy/painful periods will wreck the wedding/honeymoon; embarrassment about smoking again.',
        expectations:'A stronger painkiller prescription. What she actually needs: to understand the aura\u2013pill stroke risk, a safe alternative contraceptive sorted promptly, period and migraine management, and smoking support.'
      },
      cues:['"Vision goes funny THEN the headache hits" \u2014 textbook migraine WITH aura; the contraception flag is the whole consultation.','"I\u2019m getting married in seven weeks" \u2014 the real anxiety; stopping the pill feels like a wedding catastrophe.','Hesitation if asked about smoking \u2014 embarrassment, not absence; ask so disclosure is safe.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises this as migraine WITH aura (reversible visual aura preceding a typical migraine) \u2014 NEW for her \u2014 and does not treat it as just "worse headaches" needing stronger analgesia' },
      { dom:'tasks', text:'Identifies the critical safety issue: migraine with aura + combined (oestrogen) pill is a hard contraindication (UKMEC 4) due to substantially increased ischaemic stroke risk \u2014 the combined pill must be STOPPED' },
      { dom:'tasks', text:'Does NOT just stop the pill and leave her exposed: arranges a safe alternative contraceptive promptly (progestogen-only pill, implant, injection, or IUS \u2014 all UKMEC-compatible with migraine + aura), explicitly protecting her before the wedding' },
      { dom:'tasks', text:'Addresses the period-control need the pill was meeting (heavy/painful periods): e.g. the levonorgestrel IUS, POP, tranexamic/mefenamic acid for menorrhagia \u2014 so she is not left with the problem that put her on the pill' },
      { dom:'tasks', text:'Manages the migraine itself appropriately: acute treatment (triptan ± NSAID, antiemetic), lifestyle/trigger review, headache diary, and consideration of prophylaxis if frequent \u2014 and screens stroke/secondary red flags (this aura is typical and reversible; flag atypical/persistent neurology)' },
      { dom:'tasks', text:'Asks about smoking non-judgementally and addresses it as a compounding stroke risk with oestrogen; offers cessation support' },
      { dom:'rto',   text:'Hears the wedding anxiety beneath "something stronger" and frames the contraception switch around protecting her wedding/honeymoon, not disrupting it \u2014 so she accepts stopping the pill' },
      { dom:'gs',    text:'Safety-nets clearly: stop the combined pill now and use condoms until the new method is reliable; stroke warning signs (FAST, sudden focal/persistent neurology, thunderclap headache) \u2192 999; arranges prompt contraception review and migraine follow-up before the wedding' },
    ],
    worked:[
      { lbl:'Name the aura',          txt:'"That flickering zigzag in your vision before the headache \u2014 that\u2019s called an aura, and it tells me these are migraines with aura. They\u2019re not dangerous in themselves, and we can absolutely treat them. But the aura changes one really important thing, and it\u2019s not the painkillers."' },
      { lbl:'The pill, honestly',     txt:'"Here\u2019s the thing I have to be straight with you about: migraine WITH aura and the combined pill together raise the risk of stroke enough that we don\u2019t use them in combination. So the most important thing today isn\u2019t a stronger painkiller \u2014 it\u2019s coming off this particular pill. I know that\u2019s not what you rang for, so let\u2019s sort it properly."' },
      { lbl:'Protect the wedding',    txt:'"And I can hear the wedding in your voice \u2014 you are NOT going to be left unprotected or facing your old periods on your honeymoon, I promise. We just swap to a method without the oestrogen: a progestogen-only pill you could start today, or an implant or coil that also tends to make periods lighter. We\u2019ll have you covered well before the day."' },
      { lbl:'Keep the periods sorted', txt:'"You went on the pill for heavy, painful periods, so I\u2019m not going to ignore that. The hormonal coil in particular is brilliant for that \u2014 lighter, less painful periods AND contraception, no oestrogen. If you\u2019d rather not, we can use the mini-pill plus tablets for the period pain and bleeding. You won\u2019t be back to square one."' },
      { lbl:'Treat the migraine',     txt:'"For the migraines themselves: a triptan taken when the headache starts, with an anti-sickness tablet, plus an anti-inflammatory \u2014 and a headache diary so we spot triggers (wedding stress is a big one right now). If they keep coming we can add a daily preventer."' },
      { lbl:'Smoking + safety-net',   txt:'"One gentle question \u2014 any chance you\u2019ve picked the cigarettes back up with all the stress? \u2026 No judgement \u2014 but with the migraines, stopping smoking really cuts the stroke risk, and I\u2019ll help. Practical bits: stop the combined pill now, use condoms until the new method is working, and if you ever get sudden face droop, arm weakness, slurred speech or the worst headache of your life \u2014 that\u2019s 999. I\u2019ll book you in this week to set up the new contraception properly."' },
    ],
    learning:'Migraine WITH aura is the single most important contraception-safety flag in general practice: combined with an oestrogen-containing pill it substantially raises ischaemic stroke risk and is a UKMEC 4 (absolute) contraindication \u2014 the combined pill must stop. The classic exam trap is to hear "worse headaches, wants stronger painkillers" and miss that the visual aura changes everything. But stopping the pill is only half the task: the examinable skill is NOT leaving her exposed \u2014 arrange a safe alternative (POP, implant, injection, IUS) promptly, and address the period problem the pill was treating (the IUS is ideal). Here the hidden agenda is a wedding in 7 weeks and terror of unplanned pregnancy / ruined honeymoon, so frame the switch as protecting the wedding. Treat the migraine (triptan + antiemetic, diary, prophylaxis if frequent), ask about smoking (a compounding oestrogen-stroke risk) non-judgementally, and safety-net for stroke.',
    knowledge:{
      guideline:'UKMEC 2023 \u00b7 NICE CG150 headaches \u00b7 FSRH contraception guidance \u00b7 CKS migraine',
      points:[
        { h:'Aura + combined pill = UKMEC 4', t:'Migraine WITH aura is an absolute contraindication (UKMEC 4) to combined hormonal contraception at ANY age, because of substantially increased ischaemic stroke risk. Stop the combined pill. Migraine WITHOUT aura is UKMEC 2 (≤35) / 3 (initiation ≥35).' },
        { h:'Recognise aura', t:'Aura = fully reversible focal neurology preceding/accompanying headache \u2014 most commonly visual (zigzag/fortification spectra, scotoma), typically 5\u201360 min, then a migrainous headache. New aura in a long-standing migraineur is a red flag for the pill.' },
        { h:'Don\u2019t leave her unprotected', t:'Switch to a non-oestrogen method, all UKMEC-compatible with migraine + aura: progestogen-only pill, implant, DMPA injection, or LNG-IUS. Arrange promptly and bridge with condoms until the new method is effective. Quick-starting a POP is often possible.' },
        { h:'Address the original indication', t:'She was on the pill for menorrhagia/dysmenorrhoea \u2014 the LNG-IUS treats both AND contracepts; alternatives include POP plus tranexamic acid (bleeding) and mefenamic acid (pain). Don\u2019t return her to the untreated problem.' },
        { h:'Treat the migraine', t:'Acute: triptan + NSAID ± antiemetic; limit analgesic frequency (medication-overuse headache). Headache diary and trigger management; prophylaxis (e.g. propranolol \u2014 avoid in asthma; amitriptyline; topiramate \u2014 teratogenic/contraceptive-interaction caveats) if frequent/disabling.' },
        { h:'Compounding risks', t:'Smoking, hypertension, age ≥35, obesity and migraine all multiply oestrogen-related stroke risk. Ask about smoking non-judgementally and offer cessation.' },
        { h:'Never do', t:'Never treat new aura as "just worse headaches" needing stronger analgesia; never continue the combined pill with aura; never stop the pill and leave her without contraception or period control; never miss compounding smoking; never omit stroke safety-netting.' }
      ]
    }
  };

  /* ============ 54. TELEPHONE — Thunderclap headache ============ */
  const c54 = {
    id:'headache-thunderclap', title:'"Worst headache of my life"', type:'telephone', duration:12,
    meta:{ age:34, sex:'M', setting:'Telephone — sudden severe headache, minimising.', system:'Urgent / Subarachnoid haemorrhage' },
    brief:'Mr Luke Brennan, 34, accountant. Rings late morning: a sudden, severe headache that "came out of nowhere" while at the gym ~3 hours ago \u2014 "like being hit on the back of the head", peaked almost instantly, the worst he\u2019s ever had, with neck stiffness and one episode of vomiting. It\u2019s eased a little since. He\u2019s playing it down, asking for "strong co-codamol" so he can "get back to work". Was at a party last night. PMH: nil. Meds: none.',
    script:{
      opening:'"Sorry to bother you \u2014 I\u2019ve got a stinker of a headache. Came on really suddenly at the gym this morning, like someone smacked me round the back of the head, properly floored me for a minute. I\u2019ve been a bit sick and my neck\u2019s stiff. It\u2019s settled a bit now though, so I reckon it\u2019s just a bad migraine or I overdid the weights. Could you just put me through some strong co-codamol so I can crack on with work?"',
      facts:[
        { topic:'The headache',        text:'If explored carefully: SUDDEN onset, peaked within seconds ("hit on the back of the head"), the worst he\u2019s ever experienced, occipital, with neck stiffness and vomiting, came on during exertion (lifting). This is a THUNDERCLAP headache \u2014 subarachnoid haemorrhage until proven otherwise. The fact it has "eased a bit" does NOT exclude it.' },
        { topic:'The minimising',       text:'He keeps reframing it as a migraine / gym strain and pushing for a phone prescription so he can stay at work \u2014 he has a deadline and doesn\u2019t want a day in A&E.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 reachable only with a calm, non-judgemental drug history: he took cocaine at the party last night. He is frightened and embarrassed to admit it and is downplaying the whole thing partly to avoid that conversation. Cocaine is directly relevant \u2014 it can precipitate subarachnoid haemorrhage and reversible cerebral vasoconstriction \u2014 and matters for his emergency care.' },
        { topic:'The fear',             text:'If reached: a colleague\u2019s father "had a brain bleed" recently; some part of Luke is terrified that\u2019s what this is, which is exactly why he\u2019s trying to rename it something harmless.' },
        { topic:'What he wants',        text:'Officially: co-codamol and to get back to work. What he needs: immediate emergency assessment (999/A&E) for possible subarachnoid haemorrhage \u2014 recognised through the thunderclap onset \u2014 with an honest, non-judgemental account of the cocaine.' },
      ],
      ice:{
        ideas:'It\u2019s a bad migraine or a gym strain that\u2019s already settling; strong painkillers and back to work.',
        concerns:'HIDDEN AGENDA \u2014 took cocaine at a party last night and is frightened/embarrassed to admit it (and it\u2019s directly relevant); plus a buried terror, after a colleague\u2019s father\u2019s "brain bleed", that this is the same.',
        expectations:'A phone prescription for strong painkillers. What he actually needs: emergency assessment for subarachnoid haemorrhage and an honest drug history.'
      },
      cues:['"Like being hit on the back of the head", peaked instantly, worst ever, neck stiff, vomited \u2014 textbook thunderclap; emergency until excluded.','"It\u2019s settled a bit now" \u2014 do NOT be reassured; SAH headaches can ease and still be catastrophic.','Pushing for a phone script "to crack on with work" + a party last night \u2014 minimising that may hide a relevant drug history.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises a THUNDERCLAP headache (sudden, maximal within seconds/minutes, "worst ever", occipital, neck stiffness, vomiting, onset on exertion) as subarachnoid haemorrhage until proven otherwise \u2014 a medical emergency' },
      { dom:'tasks', text:'Is NOT falsely reassured by partial improvement or the patient\u2019s "just a migraine" reframe: the onset profile, not the current severity, defines the risk; refuses to issue analgesia and send him to work' },
      { dom:'tasks', text:'Arranges EMERGENCY assessment now: 999 / immediate A&E for urgent CT head (and lumbar puncture if CT negative and within the appropriate window) \u2014 not a GP appointment, not a phone prescription' },
      { dom:'tasks', text:'Takes a calm, non-judgemental substance history and elicits the cocaine use \u2014 recognising it is directly relevant (cocaine can precipitate SAH/RCVS) and important for the receiving team, framed as care not condemnation' },
      { dom:'tasks', text:'Screens briefly for other thunderclap causes/associated features (focal neurology, reduced consciousness, photophobia, fever \u2014 meningitis) without delaying transfer' },
      { dom:'rto', text:'Overcomes the minimising without alarming him into refusing care; names the concern honestly and enlists him in acting now rather than negotiating a prescription' },
      { dom:'rto',   text:'Reaches the buried fear (the colleague\u2019s father) and uses it to motivate acceptance \u2014 the way to address that fear is to be assessed now, not to rename it' },
      { dom:'gs',    text:'Safety-nets emphatically: 999 now; if he collapses, has a seizure, becomes drowsy or develops weakness/speech problems before the ambulance, that is an even greater emergency; advises someone stays with him; documents and follows up that he was seen' },
    ],
    worked:[
      { lbl:'Take the onset seriously', txt:'"Stop me if I\u2019ve got this wrong \u2014 it came on absolutely suddenly, like a blow to the back of the head, hit its worst within seconds, the worst you\u2019ve ever had, with a stiff neck and being sick? \u2026 Okay. I need to be honest with you: that particular pattern is one we never take a chance with."' },
      { lbl:'Refuse the reframe',      txt:'"I know it\u2019s eased and you\u2019re hoping it\u2019s a migraine or the weights \u2014 but a headache that explodes to maximum in seconds can be a bleed around the brain, and it can ease off and still be exactly that. That\u2019s why I can\u2019t send painkillers and let you work. The onset is what matters, not how it feels right now."' },
      { lbl:'Act \u2014 emergency',        txt:'"This needs a hospital today, as an emergency \u2014 a brain scan, and possibly a further test if the scan\u2019s clear. I want you to call 999, or I\u2019ll arrange the ambulance now. Not a GP appointment, not co-codamol \u2014 the scan is the only thing that can safely tell us this isn\u2019t serious."' },
      { lbl:'Safe drug history',       txt:'"One question I ask everyone with this, no judgement and it stays between us as medical information \u2014 you mentioned a party last night; did you take anything, any cocaine or other drugs? \u2026 Thank you for being honest, genuinely. That\u2019s actually important for the hospital because it can be linked to this kind of headache \u2014 telling them helps them look after you properly, it\u2019s not about getting you in trouble."' },
      { lbl:'Meet the fear',           txt:'"I suspect part of you has been frightened this is like your colleague\u2019s dad \u2014 and renaming it a migraine felt safer. The way to face that fear isn\u2019t to hope; it\u2019s to get the scan that settles it. Most of the time these scans are reassuring \u2014 but we get it precisely because we can\u2019t take the chance."' },
      { lbl:'Safety-net',              txt:'"While you wait for the ambulance: someone stays with you. If you become drowsy, have a fit, your vision or speech goes, or one side weakens \u2014 that\u2019s a 999 update, tell them it\u2019s worse. Don\u2019t drive yourself. I\u2019m documenting all of this and I\u2019ll follow up that you were seen. Ringing today was exactly the right thing to do, Luke."' },
    ],
    learning:'A thunderclap headache \u2014 sudden onset reaching maximum intensity within seconds to a minute, often "the worst ever", classically occipital with neck stiffness and vomiting, frequently triggered by exertion/straining/sex \u2014 is subarachnoid haemorrhage until proven otherwise and is a medical emergency. The two classic traps are both present here: being falsely reassured by partial improvement ("it\u2019s settled") and accepting the patient\u2019s "just a migraine" reframe \u2014 the ONSET profile defines the risk, not current severity. The action is 999/A&E for urgent CT (then LP if CT negative within window), never a phone analgesic. The examinable hidden agenda is the cocaine taken last night, minimised from embarrassment \u2014 directly relevant (it can precipitate SAH/RCVS) and elicited only through a calm, non-judgemental drug history framed as care. Reach the buried fear (a relative\u2019s "brain bleed") to motivate acceptance, screen briefly for meningitis features, and safety-net emphatically.',
    knowledge:{
      guideline:'NICE CG150 headaches \u00b7 SIGN/− subarachnoid haemorrhage guidance \u00b7 CKS headache (thunderclap)',
      points:[
        { h:'Define thunderclap', t:'Sudden, severe headache reaching MAXIMUM intensity within seconds to ~1 minute. Often occipital, "worst ever", with neck stiffness, photophobia, nausea/vomiting, ± transient loss of consciousness or focal signs; frequently on exertion, straining, coughing or sexual activity.' },
        { h:'SAH until proven otherwise', t:'Subarachnoid haemorrhage is the must-exclude diagnosis; others include RCVS, cerebral venous sinus thrombosis, arterial dissection, pituitary apoplexy, meningitis. Emergency pathway: urgent non-contrast CT head; if negative and within the window, lumbar puncture (xanthochromia) per local protocol.' },
        { h:'Improvement does NOT exclude it', t:'A sentinel/SAH headache can partially settle. Never be reassured by easing symptoms or a "migraine" self-label \u2014 the onset profile, not the present severity, drives the decision to investigate emergently.' },
        { h:'Non-judgemental drug history', t:'Cocaine and other sympathomimetics can precipitate SAH and reversible cerebral vasoconstriction syndrome. Ask about recent drug use calmly and confidentially; it changes the differential and management and must reach the receiving team \u2014 framed as care, not judgement.' },
        { h:'Don\u2019t manage in the community', t:'No phone analgesia, no "GP review tomorrow". Immediate 999/A&E. Screen briefly for meningism/fever and focal neurology but do not delay transfer.' },
        { h:'Never do', t:'Never issue painkillers and send a thunderclap headache to work; never accept partial improvement as reassurance; never miss a non-judgemental drug history; never let a minimising patient talk you out of emergency assessment.' },
        { h:'Safety-net & follow-up', t:'999 now; someone stays with him; deterioration (drowsiness, seizure, focal deficit) \u2192 escalate; don\u2019t drive; document and follow up that he attended and was assessed.' }
      ]
    }
  };

  /* ============ 55. VIDEO — New headache at 34 weeks: pre-eclampsia ============ */
  const c55 = {
    id:'headache-preeclampsia', title:'The headache at 34 weeks', type:'video', duration:12,
    meta:{ age:29, sex:'F', setting:'Video consultation — 34 weeks pregnant, new headache, minimising.', system:'Urgent / Pre-eclampsia' },
    brief:'Mrs Nadia Hassan, 29, 34 weeks pregnant (first pregnancy after a previous traumatic emergency-section loss is in her history note \u2014 actually a previous emergency CS with a frightening HDU stay). Booked a video slot for a "headache that won\u2019t shift" for two days, frontal, not helped by paracetamol. On gentle questioning: some flashing lights/blurred vision, a bit of upper-tummy pain she\u2019s blamed on indigestion, and her rings feel tight. Reluctant to "make a fuss" or go to hospital.',
    script:{
      opening:'"Thanks for seeing me on the screen \u2014 I didn\u2019t want to take up a proper appointment. It\u2019s just a headache really, across my forehead, had it a couple of days, paracetamol\u2019s not touching it. I\u2019m sure it\u2019s nothing \u2014 probably not sleeping, or my hormones. I really don\u2019t want to be sent up to the hospital and be a nuisance when they\u2019re so busy. Could you just tell me which painkillers are safe in pregnancy?"',
      facts:[
        { topic:'The red-flag cluster', text:'If gently elicited: a persistent frontal headache for 2 days unrelieved by paracetamol, PLUS visual disturbance (flashing lights, blurring), PLUS epigastric/right-upper-quadrant pain she\u2019s called "indigestion", PLUS new swelling (tight rings, puffy face/ankles). At 34 weeks this cluster screams pre-eclampsia.' },
        { topic:'No BP/urine yet',      text:'She hasn\u2019t had her BP or urine checked recently; assumes the headache is benign. She has no home BP monitor.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 reachable with warmth: her first birth was a terrifying emergency caesarean with a spell in HDU; she is quietly traumatised and is AVOIDING the hospital and maternity unit, minimising symptoms because going back there is the thing she dreads most. The "don\u2019t want to be a nuisance" is fear, not stoicism.' },
        { topic:'The deeper fear',      text:'If reached: she\u2019s terrified both of the hospital AND of something being wrong with the baby; the two fears are pulling against each other, and avoidance is winning.' },
        { topic:'What she wants',       text:'Officially: which painkillers are safe. What she needs: urgent same-day obstetric assessment for pre-eclampsia (BP, urine protein, bloods, fetal assessment) \u2014 and to be helped past the hospital-avoidance with compassion so she actually goes.' },
      ],
      ice:{
        ideas:'It\u2019s just a tension/hormone headache of pregnancy; she needs to know which painkillers are safe.',
        concerns:'HIDDEN AGENDA \u2014 a previous traumatic emergency caesarean and HDU stay; she is avoiding the hospital/maternity unit and minimising symptoms because returning there terrifies her, alongside fear for the baby.',
        expectations:'Reassurance and safe painkillers. What she actually needs: urgent same-day obstetric assessment for pre-eclampsia, and compassionate help to overcome the hospital avoidance.'
      },
      cues:['Persistent headache + visual flashes + epigastric pain + new swelling at 34 weeks \u2014 the pre-eclampsia cluster; do not treat as a tension headache.','"I don\u2019t want to be a nuisance / sent to hospital" \u2014 avoidance driven by a previous traumatic birth, not genuine reassurance.','"Which painkillers are safe?" \u2014 the request masks a dangerous presentation needing assessment, not analgesia advice.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the pre-eclampsia cluster at 34 weeks: new persistent headache + visual disturbance + epigastric/RUQ pain + new oedema \u2014 and does NOT treat it as a benign tension/hormonal headache or simply advise paracetamol' },
      { dom:'tasks', text:'Knows the assessment cannot be done safely by video: arranges urgent SAME-DAY assessment \u2014 BP measurement, urinalysis for proteinuria, bloods (FBC, LFTs, urate, renal) and fetal assessment \u2014 via maternity day unit / obstetric triage' },
      { dom:'tasks', text:'Treats it as potentially serious and time-critical: explains pre-eclampsia can progress to eclampsia (seizures), HELLP and fetal compromise, and that the only way to assess it is BP/urine/bloods today \u2014 not painkillers' },
      { dom:'tasks', text:'Elicits and addresses the hospital-avoidance hidden agenda: gently explores the previous traumatic birth, validates the fear, and problem-solves to get her assessed (named contact, support person, what to expect) rather than letting avoidance win' },
      { dom:'tasks', text:'Screens for immediate danger signs that would mandate 999 rather than day-unit (severe headache, visual loss, severe RUQ pain, vomiting, reduced fetal movements, any fitting) and checks fetal movements' },
      { dom:'rto',   text:'Hears "I don\u2019t want to be a nuisance" as fear, not stoicism, and responds with warmth \u2014 making it safe to disclose the trauma rather than accepting the minimisation' },
      { dom:'rto',   text:'Balances honesty about urgency with reassurance: takes the fear of the hospital seriously while being clear that going today is how she protects herself and the baby' },
      { dom:'gs',    text:'Safety-nets emphatically and ensures she actually goes: arranges/【confirms the maternity assessment today, names the danger signs requiring 999, checks she has transport/support, and follows up that she attended' },
    ],
    worked:[
      { lbl:'Reframe the headache',   txt:'"I\u2019m really glad you rang, even on a quick slot. A headache at 34 weeks that won\u2019t shift with paracetamol \u2014 especially with the flashing lights, the pain under your ribs and your rings feeling tight \u2014 isn\u2019t just tiredness or hormones. Together those can be a sign your blood pressure is rising in a way that pregnancy sometimes causes, and that\u2019s something we check the same day."' },
      { lbl:'Why not painkillers',    txt:'"So the honest answer to \u2018which painkillers are safe\u2019 is: painkillers aren\u2019t the issue here \u2014 the issue is checking your blood pressure, your urine and some bloods, today. Those are the only things that can tell us whether this is the condition I\u2019m thinking of, and we can\u2019t do them over a screen."' },
      { lbl:'Name the avoidance',     txt:'"Can I gently ask \u2014 you said you don\u2019t want to be sent to hospital or be a nuisance. Was your first birth frightening? \u2026 (receiving it) That was clearly traumatic, and I completely understand why the maternity unit is the last place you want to go. That fear is real and I\u2019m not going to brush past it. But I think it\u2019s part of why you\u2019ve been talking yourself out of being seen."' },
      { lbl:'Make going bearable',    txt:'"Here\u2019s how we make this as un-scary as possible: I\u2019ll ring the maternity day unit myself and give them your name so you\u2019re expected; take someone with you if you can; it\u2019s likely a blood-pressure check, a urine pot and some bloods, and very possibly you\u2019re home again reassured. Going isn\u2019t a nuisance \u2014 it\u2019s the bravest, most protective thing you can do for you and the baby today."' },
      { lbl:'Check the baby + danger',txt:'"Quick important things: is the baby moving normally today? \u2026 And if before you get there you get a severe headache, lose part of your vision, get bad pain under your ribs, start vomiting, the baby moves less, or you feel a fit coming \u2014 that\u2019s 999 immediately, not the day unit."' },
      { lbl:'Lock it in',             txt:'"So the plan: I\u2019m arranging your assessment at the maternity unit today and I\u2019ll confirm they\u2019re expecting you. How are you getting there \u2014 have you got someone? I\u2019ll check later that you made it. You came on worried about being a nuisance; what you\u2019ve actually done is exactly right."' },
    ],
    learning:'A new, persistent headache in the second half of pregnancy is pre-eclampsia until proven otherwise \u2014 and here the full cluster is present: headache unrelieved by paracetamol, visual disturbance, epigastric/RUQ pain (mislabelled "indigestion") and new oedema at 34 weeks. The trap is treating it as a tension/hormonal headache and answering the literal "which painkillers are safe?" question; the right action is urgent SAME-DAY assessment \u2014 BP, urine protein, bloods (FBC/LFTs/urate/renal) and fetal assessment via the maternity unit \u2014 because pre-eclampsia can progress to eclampsia, HELLP and fetal compromise. The examinable hidden agenda is hospital-avoidance born of a previous traumatic birth: "I don\u2019t want to be a nuisance" is fear, not stoicism. Elicit it with warmth, validate it, and actively problem-solve to get her assessed (named contact, support, what to expect), check fetal movements, and safety-net the 999 danger signs \u2014 ensuring she actually goes.',
    knowledge:{
      guideline:'NICE NG133 hypertension in pregnancy & pre-eclampsia \u00b7 RCOG \u00b7 CKS pre-eclampsia',
      points:[
        { h:'Recognise pre-eclampsia', t:'After 20 weeks: new hypertension + proteinuria and/or maternal organ dysfunction. Symptomatic red flags: severe/persistent headache, visual disturbance (flashing lights, blurring), epigastric/RUQ pain, vomiting, rapid oedema (face/hands), reduced fetal movements. Any of these warrants urgent assessment regardless of a "normal-feeling" patient.' },
        { h:'It cannot be assessed remotely', t:'Diagnosis needs BP, urinalysis (protein), and bloods (FBC for platelets/haemolysis, LFTs, urate, renal function) plus fetal assessment. A video/phone call cannot exclude it \u2014 arrange same-day maternity day-unit/obstetric review.' },
        { h:'Know the trajectory', t:'Pre-eclampsia can progress to eclampsia (seizures), HELLP syndrome, placental abruption, stroke and fetal compromise. It is time-critical; symptomatic pre-eclampsia is an emergency, not a routine review.' },
        { h:'Decide day-unit vs 999', t:'Most go urgently to the maternity day unit/triage today. Escalate to 999 for severe headache with visual loss, severe RUQ pain/vomiting, signs of impending eclampsia, reduced/absent fetal movements, or any seizure.' },
        { h:'Address the avoidance', t:'A previous traumatic birth (emergency CS, HDU) commonly drives avoidance and symptom-minimisation in a subsequent pregnancy. Elicit it, validate it, and actively reduce barriers (named contact, expectation-setting, support person) so the patient attends \u2014 trauma-informed, not dismissive.' },
        { h:'Never do', t:'Never treat a third-trimester headache cluster as benign; never answer only the "safe painkillers" question; never attempt to exclude pre-eclampsia by phone/video; never let hospital-avoidance go unaddressed; never omit fetal-movement enquiry and 999 safety-netting.' },
        { h:'Safety-net & follow-up', t:'Same-day maternity assessment arranged and confirmed; fetal movements checked; explicit 999 danger signs; transport/support sorted; follow up that she attended.' }
      ]
    }
  };

  /* ============ 56. VIDEO — Coital headache: primary or sentinel? ============ */
  const c56 = {
    id:'headache-coital', title:'The headache he can\u2019t talk about', type:'video', duration:12,
    meta:{ age:42, sex:'M', setting:'Video consultation — vague "headaches", deeply embarrassed.', system:'Neuro / Sexual (coital) headache' },
    brief:'Mr Martin Otieno, 42, teacher. Booked for "headaches", visibly awkward on camera, keeps deflecting. With careful, permission-based questioning it emerges the headaches occur ONLY during sex, building as he approaches orgasm \u2014 three episodes over a month, each a severe bilateral throbbing lasting up to an hour, no sudden "explosion", no neurology. He\u2019s mortified, has started avoiding intimacy, and his wife thinks he\u2019s "gone off her". BP slightly raised today. PMH: nil.',
    script:{
      opening:'"Sorry, this is\u2026 a bit awkward. I\u2019ve been getting headaches. Just\u2026 headaches. (deflects) At certain times. You know. I don\u2019t really know how to\u2026 look, is there just a tablet I can take? I\u2019d honestly rather not go into the details if that\u2019s alright."',
      facts:[
        { topic:'The real history',     text:'With gentle, normalising permission-seeking: the headache happens ONLY during sexual activity, building as arousal increases and peaking around orgasm; bilateral, throbbing, severe, lasts 20\u201360 min, eases with rest. Three times in a month. No thunderclap "explosion to maximum in a second", no vomiting, no neck stiffness, no focal symptoms, no collapse. This fits PRIMARY sexual (coital) headache.' },
        { topic:'The discriminator',     text:'Crucial safety point: a FIRST or thunderclap-quality sexual headache (instant explosion to maximum) can be a sentinel subarachnoid bleed and is an emergency. His are recurrent, build gradually, and lack thunderclap features \u2014 reassuring \u2014 but the first-ever episode warranted exclusion, and any thunderclap quality would change everything.' },
        { topic:'The hidden agenda',     text:'HIDDEN AGENDA \u2014 two layers behind the embarrassment: (1) he is terrified it means a brain aneurysm \u2014 his brother had one clipped \u2014 and (2) the avoidance of sex has damaged his marriage; his wife feels rejected and he\u2019s too ashamed to explain. The headache is half the problem; the silence and the fear are the rest.' },
        { topic:'The shame',            text:'If met without awkwardness: he\u2019s never said the word "sex" to a doctor, assumed it was something shameful or that he\u2019d be judged; the embarrassment has stopped him seeking help for a month and is straining his relationship.' },
        { topic:'What he wants',        text:'Officially: a tablet, no details. Actually: to be asked about it without shame, to know it isn\u2019t a brain aneurysm about to burst, treatment so he can be intimate again, and permission to tell his wife what\u2019s really going on.' },
      ],
      ice:{
        ideas:'Something is wrong that he\u2019s too embarrassed to name; possibly a serious brain problem; he just wants a tablet and no questions.',
        concerns:'HIDDEN AGENDA \u2014 terror it\u2019s a brain aneurysm (his brother had one clipped), plus shame and a marriage strained by his avoidance of sex, which his wife has read as rejection.',
        expectations:'A tablet and to avoid the embarrassing details. What he actually needs: a shame-free history, exclusion of sinister causes, effective treatment, and help to talk to his wife.'
      },
      cues:['Deep embarrassment + deflection + "a tablet, no details" \u2014 the consultation\u2019s success depends on safe, normalising permission-seeking.','Headache only during sex, building to orgasm, recurrent, no thunderclap \u2014 primary sexual headache; but probe hard for any instant-explosion (sentinel bleed).','"My wife thinks I\u2019ve gone off her" \u2014 the relationship damage and the unspoken aneurysm fear are the real agenda.']
    },
    checkpoints:[
      { dom:'tasks', text:'Creates a safe, non-judgemental, permission-based space that lets the true history emerge \u2014 normalising the topic so a mortified patient can describe a sexual headache rather than leaving with "just a tablet"' },
      { dom:'tasks', text:'Takes the discriminating history: recurrent, gradually-building, bilateral headache peaking at orgasm WITHOUT thunderclap features fits PRIMARY sexual headache \u2014 and actively excludes the dangerous mimic by asking about instant "explosion to maximum", the first-ever attack, neurology, neck stiffness, collapse' },
      { dom:'tasks', text:'Recognises the red-flag rule: a FIRST or thunderclap-quality sexual headache is a possible sentinel subarachnoid haemorrhage / RCVS and would require emergency assessment (CT ± LP) \u2014 states this clearly even while reassuring about his current recurrent pattern' },
      { dom:'tasks', text:'Manages primary sexual headache appropriately: explains the (benign) diagnosis, lifestyle factors, the option of preventive treatment (e.g. propranolol; a triptan or indometacin taken before activity), notes the slightly raised BP for review, and arranges follow-up/neurology if atypical or not settling' },
      { dom:'tasks', text:'Addresses the aneurysm fear directly and accurately given the family history: explains why his pattern is reassuring, while being honest about when imaging/referral is warranted \u2014 neither dismissive nor alarmist' },
      { dom:'rto',   text:'Meets the embarrassment with matter-of-fact warmth and zero awkwardness, so shame doesn\u2019t end the consultation; explicitly normalises that sexual headache is a recognised, treatable condition' },
      { dom:'rto',   text:'Surfaces and addresses the marriage strain: helps him see the avoidance has been misread as rejection, and supports him to explain it to his wife \u2014 treating the relationship harm as part of the problem' },
      { dom:'gs',    text:'Safety-nets precisely: if he EVER gets a sudden "worst-ever, instant-explosion" headache (during sex or not), or any neurology/collapse \u2192 999; arranges BP review and headache follow-up; offers to support the conversation with his wife' },
    ],
    worked:[
      { lbl:'Make it safe to say',    txt:'"I can see this is uncomfortable to talk about, and I want to make it easier: there is genuinely nothing you could tell me that I haven\u2019t heard, and no judgement here at all. Headaches that happen at specific times \u2014 including during sex \u2014 are a recognised medical thing with a name and a treatment. So you can say it plainly; it helps me help you."' },
      { lbl:'Get the key detail',     txt:'"Thank you \u2014 that took courage. Let me ask the things that matter most: when it comes on, does it build up as you get more aroused and peak around climax? Or does it ever hit you like an instant explosion, worst possible in a single second? \u2026 Building up, not exploding \u2014 that\u2019s important and reassuring."' },
      { lbl:'Name the diagnosis',     txt:'"What you have sounds like \u2018primary sexual headache\u2019 \u2014 a real, recognised, and crucially BENIGN condition where the exertion and blood-pressure surge of sex triggers a headache. It is not your heart, and the pattern you describe is not the dangerous kind. There IS effective treatment, so you don\u2019t have to choose between headaches and intimacy."' },
      { lbl:'The honest safety line', txt:'"I do have to be straight about one thing, because it matters: the very FIRST time something like this happens, or if it ever hits as a sudden explosion to maximum in a second, that needs emergency assessment to rule out a bleed \u2014 because your brother\u2019s aneurysm is on your mind, and rightly so. Your recurrent, building pattern is reassuring, but you\u2019ll always know the one symptom that means \u2018A&E now\u2019."' },
      { lbl:'Treat it',               txt:'"Treatment-wise: we can either take the edge off blood-pressure surges with a daily tablet like propranolol, or use a tablet taken shortly before sex to prevent the headache. Your blood pressure was a touch high today too, so I\u2019d like to recheck that. Most men get this well controlled."' },
      { lbl:'Rescue the marriage',    txt:'"Last thing, and maybe the most important: you\u2019ve been avoiding intimacy and your wife thinks you\u2019ve gone off her. She hasn\u2019t a clue you\u2019ve been frightened of a headache and a brain bleed. That silence is hurting you both. Would it help if I gave you the words \u2014 or even saw you together \u2014 so she understands it\u2019s a treatable headache, not rejection? You can have your marriage and your sex life back; this is fixable."' },
    ],
    learning:'Coital (primary sexual) headache is a recognised, benign, treatable condition \u2014 a bilateral throbbing headache that builds with arousal and peaks at orgasm \u2014 but it sits beside a lethal mimic: a FIRST or thunderclap-quality sexual headache (instant explosion to maximum) can be a sentinel subarachnoid haemorrhage or RCVS and is an emergency. The discriminator is the onset (gradual build vs instant explosion) and whether it is the first-ever attack. The whole consultation hinges on a skill rarely tested elsewhere: making it safe for a mortified patient to disclose a sexual symptom through normalising, permission-based questioning \u2014 without which he leaves with "just a tablet" and an undiagnosed problem. The hidden agenda is double: terror of a brain aneurysm (family history) and a marriage damaged because his avoidance of sex has been misread as rejection. Reassure accurately (state the emergency rule honestly), treat (propranolol or pre-coital triptan/indometacin, review the BP), and \u2014 crucially \u2014 help him break the silence with his wife.',
    knowledge:{
      guideline:'NICE CG150 headaches \u00b7 IHS classification (primary headache associated with sexual activity) \u00b7 CKS headache',
      points:[
        { h:'Recognise primary sexual headache', t:'Headache precipitated by sexual activity, typically bilateral, building with arousal and peaking at orgasm (or a sudden severe orgasmic type), lasting minutes to hours, recurrent, with NO underlying intracranial cause. More common in men; associated with migraine and exertional headache.' },
        { h:'Exclude the sentinel bleed', t:'A FIRST sexual headache, or any with thunderclap quality (explosion to maximum in seconds), must be investigated as possible subarachnoid haemorrhage or reversible cerebral vasoconstriction syndrome \u2014 emergency CT ± LP. Recurrent, gradually-building attacks without thunderclap or neurology are reassuring, but the first episode warrants exclusion.' },
        { h:'The consultation skill: enable disclosure', t:'Sexual symptoms are massively under-reported through embarrassment. Use normalising, permission-based, matter-of-fact questioning ("headaches at specific times, including during sex, are a recognised condition") \u2014 without it, the real history never emerges and the diagnosis is missed.' },
        { h:'Treat it', t:'Reassurance about the benign nature; address modifiable factors (the BP surge \u2014 check/treat hypertension). Preventive options: beta-blocker (propranolol) as background, or a triptan/indometacin taken shortly before sexual activity. Refer to neurology if atypical, frequent, treatment-resistant, or any red flags.' },
        { h:'Address the family-history fear and the relationship', t:'A relative with an aneurysm makes the fear concrete \u2014 explain honestly why the recurrent pattern is reassuring and the precise rule for when to seek emergency care. Recognise that avoidance of intimacy is often misread by a partner as rejection; supporting open communication (or a joint consultation) treats real relationship harm.' },
        { h:'Never do', t:'Never let embarrassment end the consultation with "just a tablet"; never assume benign without excluding a first/thunderclap sentinel bleed; never dismiss the aneurysm fear or, conversely, over-alarm; never ignore the marital impact and the silence driving it.' },
        { h:'Safety-net & follow-up', t:'Explicit rule: any sudden "worst-ever, instant" headache or neurology/collapse \u2192 999; BP review; headache follow-up/neurology if atypical or persistent; offer support for the conversation with his wife.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c53, c54, c55, c56);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'headache-aura-pill': {
      ceg: ['Gender, reproductive & sexual health', 'New & undifferentiated presentations'],
      stem: {
        name: 'Robyn Carter', age: '31 years · female',
        pmh: ['On the combined pill (Rigevidon) 6 years \u2014 for heavy, painful periods', 'Teenage migraines WITHOUT aura', 'BMI 24'],
        meds: ['Combined oral contraceptive (ethinylestradiol-containing)'],
        allergy: 'NKDA',
        recent: 'Three episodes in 2 months: visual aura (zigzag lines, ~20\u201330 min) then one-sided throbbing headache. Getting married in 7 weeks.',
        reason: 'Telephone \u2014 wants stronger headache painkillers.'
      },
      timeMap: [
        { t:'0\u20132', h:'Hear the aura',        d:'"Vision goes funny THEN the headache." That\u2019s aura \u2014 and the contraception flag, not the painkillers, is the consultation.' },
        { t:'2\u20134', h:'The pill must stop',   d:'Migraine WITH aura + combined pill = UKMEC 4 (stroke risk). Stop it. Be honest this is the priority, not stronger analgesia.' },
        { t:'4\u20137', h:'Protect the wedding',  d:'Don\u2019t leave her exposed: POP/implant/injection/IUS sorted promptly. Frame around protecting the wedding \u2014 her real fear is pregnancy + ruined honeymoon.' },
        { t:'7\u201310', h:'Periods + migraine',   d:'Keep the menorrhagia treated (IUS ideal). Treat the migraine (triptan + antiemetic, diary, prophylaxis if frequent). Ask about smoking kindly.' },
        { t:'10\u201312', h:'Safety-net',          d:'Stop combined pill now + condoms until new method works; FAST/stroke signs \u2192 999; prompt contraception review before the wedding.' }
      ],
      wordPics: {
        fail: 'Hears "worse headaches, wants stronger painkillers" and prescribes a triptan while continuing the combined pill \u2014 missing that aura makes it UKMEC 4; OR stops the pill but leaves her with no contraception and her old periods weeks before her wedding; smoking never asked; stroke risk unaddressed.',
        pass: 'Recognises migraine with aura, stops the combined pill, arranges an alternative method and migraine treatment, asks about smoking, and safety-nets for stroke.',
        exc:  'Names the aura and the UKMEC 4 stroke risk clearly; stops the pill AND sorts a safe alternative promptly, framed around protecting the wedding; keeps the menorrhagia treated (IUS); treats the migraine and offers prophylaxis; elicits the smoking non-judgementally; and safety-nets stroke \u2014 so she leaves protected, treated and reassured.'
      },
      avoid: [
        { dont:'"I\u2019ll prescribe you a triptan for the migraines \u2014 carry on with your pill as normal."', instead:'"Because these migraines come with an aura, the combined pill now raises your stroke risk too much \u2014 we need to switch it today. That matters more than the painkiller."', why:'Continuing the combined pill with aura is a UKMEC 4 contraindication \u2014 a genuine stroke risk.' },
        { dont:'"You\u2019ll need to stop the combined pill \u2014 we\u2019ll sort other contraception another time."', instead:'"We stop the combined pill now AND set up a safe alternative straight away \u2014 a mini-pill you can start today, or an implant/coil \u2014 so you\u2019re never unprotected, especially with the wedding coming."', why:'Stopping the pill without immediate alternative cover leaves her exposed to unplanned pregnancy \u2014 her central fear.' },
        { dont:'"The coil or mini-pill will sort your contraception."', instead:'"The hormonal coil is ideal because it also makes your periods lighter and less painful \u2014 the very reason you went on the pill \u2014 so you\u2019re not back to square one."', why:'Ignoring the original menorrhagia indication leaves her untreated for the problem the pill was managing.' }
      ]
    },

    'headache-thunderclap': {
      ceg: ['Urgent & unscheduled care', 'Mental health & addiction'],
      stem: {
        name: 'Luke Brennan', age: '34 years · male',
        pmh: ['Previously well', 'Sudden severe headache ~3 h ago at the gym \u2014 "hit on the back of the head", peaked instantly, worst ever', 'Neck stiffness + one episode of vomiting; eased slightly since'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '⚠ At a party last night. Pushing for "strong co-codamol" to get back to work. Reframing it as a migraine/gym strain.',
        reason: 'Telephone \u2014 wants strong painkillers.'
      },
      timeMap: [
        { t:'0\u20132', h:'Pin the onset',       d:'Sudden, instant-maximum, worst-ever, occipital, neck stiff, vomited, on exertion = thunderclap. SAH until proven otherwise.' },
        { t:'2\u20134', h:'Refuse the reframe',  d:'"It\u2019s settled / just a migraine" \u2014 don\u2019t be reassured. Onset defines risk, not current severity. No phone analgesia, no work.' },
        { t:'4\u20136', h:'Emergency now',        d:'999/A&E for urgent CT (± LP). The scan is the only safe arbiter.' },
        { t:'6\u20139', h:'Safe drug history',   d:'Calm, confidential: the cocaine at the party. Directly relevant (SAH/RCVS) \u2014 framed as care, for the receiving team.' },
        { t:'9\u201312', h:'Fear + safety-net',   d:'Reach the colleague\u2019s-father fear to motivate going. Someone stays with him; deterioration \u2192 escalate; don\u2019t drive; follow up attendance.' }
      ],
      wordPics: {
        fail: 'Accepts "bad migraine / gym strain", is reassured it\u2019s "settled", and phones through co-codamol so he can work \u2014 missing a thunderclap SAH; never takes a drug history, so the relevant cocaine use is lost.',
        pass: 'Recognises thunderclap headache, refuses analgesia, arranges emergency CT via 999/A&E, and takes a drug history.',
        exc:  'Pins the onset profile and refuses to be reassured by improvement or the migraine reframe; gets him to 999/A&E for urgent CT±LP; elicits the cocaine through a calm, non-judgemental history and explains why it matters; reaches the buried aneurysm fear to secure acceptance; and safety-nets emphatically with deterioration advice and follow-up.'
      },
      avoid: [
        { dont:'"Sounds like a bad migraine \u2014 I\u2019ll send some co-codamol, take it easy today."', instead:'"A headache that explodes to maximum in seconds is treated as a possible bleed around the brain, even when it eases. That needs an emergency scan today, not painkillers."', why:'Phoning analgesia for a thunderclap headache risks a missed, fatal subarachnoid haemorrhage.' },
        { dont:'"Well, it\u2019s settling, so let\u2019s see how you go and call back if it\u2019s worse."', instead:'"It easing off doesn\u2019t make it safe \u2014 SAH headaches can settle and still be serious. I want you assessed as an emergency now, while it\u2019s the right window for the scan."', why:'Partial improvement falsely reassures; the onset, not current severity, determines the risk.' },
        { dont:'"Did you take anything illegal last night?" (judgemental)', instead:'"No judgement, and it stays as medical information \u2014 did you take any cocaine or other drugs at the party? It\u2019s relevant to this kind of headache and helps the hospital look after you."', why:'A judgemental tone suppresses a drug history that is directly relevant to SAH/RCVS and the patient\u2019s care.' }
      ]
    },

    'headache-preeclampsia': {
      ceg: ['Gender, reproductive & sexual health', 'Urgent & unscheduled care'],
      stem: {
        name: 'Nadia Hassan', age: '29 years · female',
        pmh: ['34 weeks pregnant', 'Previous emergency caesarean with HDU stay (traumatic)', 'Frontal headache 2 days, not relieved by paracetamol'],
        meds: ['Pregnancy multivitamin'],
        allergy: 'NKDA',
        recent: '⚠ On questioning: flashing lights/blurred vision, epigastric pain (blamed on indigestion), tight rings/puffy face. Reluctant to "be a nuisance" or go to hospital.',
        reason: 'Video consultation \u2014 wants safe painkillers for a headache.'
      },
      timeMap: [
        { t:'0\u20132', h:'Reframe the headache', d:'Headache + visual flashes + epigastric pain + new swelling at 34/40 = pre-eclampsia cluster. Not tiredness or hormones.' },
        { t:'2\u20134', h:'Not painkillers',      d:'The answer to "safe painkillers" is BP, urine and bloods TODAY \u2014 can\u2019t be done over a screen.' },
        { t:'4\u20137', h:'Name the avoidance',   d:'Was the first birth frightening? The traumatic CS/HDU drives the "don\u2019t want to be a nuisance". Validate; don\u2019t accept the minimisation.' },
        { t:'7\u201310', h:'Make going bearable',  d:'Ring the day unit, give her name, support person, what to expect. Check fetal movements. Going is the protective, brave thing.' },
        { t:'10\u201312', h:'Danger signs + lock', d:'Severe headache/visual loss/RUQ pain/vomiting/reduced movements/fitting \u2192 999. Sort transport; confirm she attends.' }
      ],
      wordPics: {
        fail: 'Answers the literal "which painkillers are safe?", reassures it\u2019s a tension/hormone headache, and arranges nothing \u2014 missing pre-eclampsia; the traumatic-birth avoidance never surfaces, so she doesn\u2019t go; no fetal-movement check, no 999 safety-net.',
        pass: 'Recognises the pre-eclampsia cluster, arranges urgent same-day maternity assessment (BP/urine/bloods/fetal), checks fetal movements, and safety-nets.',
        exc:  'Reframes the cluster as time-critical pre-eclampsia and explains why painkillers miss the point; gently elicits and validates the traumatic-birth avoidance and actively reduces the barriers so she actually attends; checks fetal movements; gives precise 999 danger signs; and confirms transport and attendance \u2014 trauma-informed and safe.'
      },
      avoid: [
        { dont:'"Paracetamol is the safe one in pregnancy \u2014 try that and rest."', instead:'"Painkillers aren\u2019t the issue \u2014 a headache like this with the visual flashes, the pain under your ribs and the swelling needs your blood pressure, urine and bloods checked today. That\u2019s the only way to know it\u2019s safe."', why:'Answering the literal painkiller question misses a time-critical pre-eclampsia presentation.' },
        { dont:'"It\u2019s probably just a tension headache from not sleeping \u2014 nothing to worry about."', instead:'"At 34 weeks, that combination isn\u2019t just tiredness \u2014 it can be your blood pressure rising in pregnancy, which we must check the same day."', why:'Mislabelling the cluster as benign risks progression to eclampsia, HELLP and fetal compromise.' },
        { dont:'"If you\u2019d rather not go to hospital, we can keep an eye on it at home."', instead:'"You said you don\u2019t want to be a nuisance \u2014 was your first birth frightening? I understand the dread, and going today is the bravest, most protective thing for you and the baby. I\u2019ll make it as easy as I can."', why:'Colluding with hospital-avoidance born of birth trauma leaves a dangerous condition unassessed.' }
      ]
    },

    'headache-coital': {
      ceg: ['New & undifferentiated presentations', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Martin Otieno', age: '42 years · male',
        pmh: ['Previously well', 'Headache ONLY during sex, building to orgasm \u2014 3 episodes in a month, up to 1 h, no thunderclap/neurology', 'Brother: cerebral aneurysm (clipped)'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Very embarrassed; deflecting. Avoiding intimacy; wife feels rejected. BP slightly raised today.',
        reason: 'Video consultation \u2014 vague "headaches".'
      },
      timeMap: [
        { t:'0\u20132', h:'Make it safe to say', d:'Mortified and deflecting. Normalise: headaches at specific times \u2014 including sex \u2014 are a recognised, treatable condition. Permission-based questioning.' },
        { t:'2\u20135', h:'The discriminator',   d:'Builds to orgasm, recurrent, no thunderclap = primary sexual headache. Probe hard for any instant-explosion / first-ever (sentinel SAH).' },
        { t:'5\u20137', h:'Name + reassure',      d:'Primary sexual headache \u2014 benign, treatable. State the honest emergency rule (instant explosion / first time \u2192 999) given the brother\u2019s aneurysm.' },
        { t:'7\u201310', h:'Treat + BP',          d:'Propranolol background or pre-coital triptan/indometacin; recheck the raised BP; neurology if atypical/resistant.' },
        { t:'10\u201312', h:'Rescue the marriage', d:'The avoidance is misread as rejection. Offer the words \u2014 or a joint consult \u2014 so his wife understands. Safety-net the thunderclap rule.' }
      ],
      wordPics: {
        fail: 'Lets the embarrassment win and hands over "a tablet" without ever establishing the sexual trigger; OR diagnoses primary sexual headache without excluding a first/thunderclap sentinel bleed; the aneurysm fear and the marriage strain go unaddressed.',
        pass: 'Enables disclosure, diagnoses primary sexual headache while excluding thunderclap features, reassures about the family-history fear, treats it, and safety-nets.',
        exc:  'Creates a genuinely shame-free space so the real history emerges; takes the discriminating history and states the honest sentinel-bleed rule; reassures accurately about the aneurysm fear without dismissing it; treats (propranolol/pre-coital triptan, reviews BP); and \u2014 crucially \u2014 surfaces the marriage damage and helps him break the silence with his wife.'
      },
      avoid: [
        { dont:'"I\u2019ll give you something for the headaches \u2014 we don\u2019t need to go into the details."', instead:'"Headaches that happen at specific times, including during sex, are a recognised and treatable condition \u2014 there\u2019s no judgement here, and the details genuinely help me help you."', why:'Accepting "a tablet, no details" leaves a sexual-headache history untaken and the diagnosis (and its dangerous mimic) unassessed.' },
        { dont:'"It only happens during sex and keeps happening, so it\u2019s harmless \u2014 nothing to worry about."', instead:'"Your recurrent, building pattern is reassuring \u2014 but I must be honest: a first-ever or sudden \u2018explosion\u2019 headache during sex needs emergency assessment for a bleed. You\u2019ll always know the symptom that means A&E now."', why:'Labelling it benign without excluding a first/thunderclap sentinel SAH risks missing a fatal bleed.' },
        { dont:'"Try not to worry about your brother\u2019s aneurysm \u2014 this is different."', instead:'"Your brother\u2019s aneurysm makes this frightening, understandably. Let me explain exactly why your pattern is reassuring \u2014 and the precise warning sign that would change that \u2014 so you\u2019re not guessing at 2am."', why:'A breezy dismissal of a concrete family-history fear neither reassures nor gives the safety rule he needs.' }
      ]
    }
  });

})();
