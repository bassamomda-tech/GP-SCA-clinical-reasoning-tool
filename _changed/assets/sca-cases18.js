/* ============================================================
   Reasoning GP — Case Library batch 18: "The unwell or worrying child"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   NG12 paediatric red flags stated explicitly (non-blanching rash /
   petechiae / hepatosplenomegaly / lymphadenopathy + fever -> very
   urgent FBC + immediate paediatric referral for leukaemia; meningococcal).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases17.js.
   ============================================================ */

(function(){

  /* ============ 65. TELEPHONE — Febrile child + non-blanching rash ============ */
  const c65 = {
    id:'febrile-child-rash', title:'"He\u2019s burning up and now there\u2019s a rash"', type:'telephone', duration:12,
    meta:{ age:3, sex:'M', setting:'Telephone — mother of a feverish 3-year-old; a new rash.', system:'Paediatrics / Febrile child — safety-netting' },
    brief:'Caller: mother of Leo, 3, febrile 2 days (up to 39.4°C), now "off", not himself, drinking less. She mentions, almost in passing, a few new "spots" on his tummy that appeared today. Younger sibling at home. The mother is exhausted, second-guesses herself, and apologises for "probably overreacting". Reduced wet nappies today. No known unwell contacts. Immunisations up to date per her.',
    script:{
      opening:'"Hi, sorry to bother you, I\u2019m sure it\u2019s nothing — Leo\u2019s had a temperature for a couple of days, the calpol brings it down a bit but he\u2019s just not himself, really flat. And he\u2019s come up in a few little spots on his tummy this afternoon. My health visitor friend said it\u2019s probably just a viral thing going round. I just wanted to check I\u2019m not being one of those neurotic mums. Should I just keep an eye on him?"',
      facts:[
        { topic:'The rash — the key',  text:'CRITICAL — if asked to do the GLASS/TUMBLER test or describe the spots: they do NOT fade/blanch when pressed; small red-purple pin-prick spots (petechiae) spreading. A non-blanching rash in a febrile, unwell child is a meningococcal/sepsis emergency until proven otherwise (and an NG12 paediatric red flag).' },
        { topic:'The "off" child',      text:'If explored using traffic-light thinking: drowsy/flat, harder to rouse than usual, drinking much less, reduced wet nappies (only one today — dehydration), mottled/pale at times per mum, breathing a bit faster. These amber/red features matter as much as the number on the thermometer.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA — the mother is MINIMISING out of fear of being judged "neurotic" (a previous clinician once made her feel she\u2019d wasted their time), so she\u2019s downplaying genuinely red-flag features and seeking permission to "keep an eye". Her instinct that something is wrong is the reliable signal; her apology is hiding it.' },
        { topic:'The parental instinct', text:'If reached: she actually thinks he "looks really wrong" and is frightened, but is talking herself out of it. Parental gut feeling that a child is more unwell than usual is an evidence-based red flag in itself.' },
        { topic:'What she wants',       text:'Officially: reassurance to keep an eye on him at home and not be a nuisance. What is needed: recognition that a non-blanching rash + an unwell, drowsy, under-drinking febrile child is an emergency requiring immediate assessment (999/ED), with her instinct validated, NOT a "safety-net and review".' },
      ],
      ice:{
        ideas:'It\u2019s probably just a virus going round (per a friend); maybe she\u2019s overreacting.',
        concerns:'HIDDEN AGENDA — frightened that something is really wrong but minimising to avoid being judged "a neurotic mum" after a previous dismissive experience; downplaying red-flag features and her own accurate instinct.',
        expectations:'Permission to keep an eye on him at home. What is actually needed: emergency assessment for a non-blanching rash / possible meningococcal sepsis, with her instinct validated.'
      },
      cues:['"A few spots that came up today" mentioned in passing — must be characterised with the glass test; a non-blanching rash is an emergency.','Flat/drowsy, drinking less, fewer wet nappies — amber/red traffic-light features beyond the temperature.','"Am I being neurotic?" / "probably nothing" — fear of judgement masking an accurate parental instinct; the apology is the red flag.']
    },
    checkpoints:[
      { dom:'tasks', text:'Actively characterises the RASH as the priority: asks the mother to do the glass/tumbler test and recognises a NON-BLANCHING rash (petechiae/purpura) in a febrile, unwell child as a meningococcal sepsis emergency until proven otherwise' },
      { dom:'tasks', text:'Assesses the child with traffic-light/sepsis thinking, not just the temperature: level of alertness/rousability, fluid intake and wet nappies (dehydration), colour (pale/mottled), work of breathing, and the duration of fever — eliciting the amber/red features' },
      { dom:'tasks', text:'States the NG12 paediatric red flags where relevant: unexplained petechiae and/or hepatosplenomegaly → very urgent FBC and immediate referral (leukaemia); and recognises meningococcal disease as the immediate concern here, not a watch-and-wait' },
      { dom:'tasks', text:'Arranges IMMEDIATE emergency assessment (999/ambulance to ED) for this picture — non-blanching rash + systemically unwell febrile child — rather than a GP appointment, a routine review, or home safety-netting' },
      { dom:'tasks', text:'Knows the pre-hospital action where appropriate: if meningococcal disease is strongly suspected and transfer is delayed, urgent benzylpenicillin per guidance — and at minimum does not delay the 999 call for anything' },
      { dom:'rto',   text:'VALIDATES the mother\u2019s instinct and explicitly counters the "neurotic mum" fear: parental gut feeling that a child is seriously unwell is taken seriously, and she was absolutely right to call' },
      { dom:'rto',   text:'Communicates urgency clearly without inducing panic that paralyses; gives the mother concrete, doable actions and reassurance that she is doing the right thing' },
      { dom:'gs',    text:'Safety-nets unambiguously: call 999 now; what to watch en route (worsening drowsiness, more spots, fitting, breathing trouble); keep him cool/comfortable; do not wait for Calpol to work; documents and ensures the call is made' },
    ],
    worked:[
      { lbl:'Seize on the rash',     txt:'"Before anything else — those spots. Can you press a clear glass against them firmly and tell me, do they fade and disappear under the glass, or do they stay? \u2026 They stay. Okay. That\u2019s really important, and I\u2019m so glad you mentioned them. A rash that doesn\u2019t fade like that, in a child with a fever who\u2019s not himself, is something we treat as an emergency."' },
      { lbl:'Validate her, hard',    txt:'"And let me say this clearly: you are NOT being a neurotic mum. The opposite. You phoned because your gut told you something\u2019s wrong with Leo — and that instinct is one of the most reliable warning signs there is. Whoever once made you feel like a nuisance was wrong. You\u2019ve done exactly the right thing."' },
      { lbl:'Name the concern',      txt:'"Putting it together — the fever, him being flat and drinking less, fewer wet nappies, and now a rash that doesn\u2019t fade — I\u2019m worried this could be a serious infection, the kind that can affect the blood, and it can move fast. That\u2019s why we don\u2019t keep an eye on this at home; we get him seen straight away."' },
      { lbl:'The action, now',       txt:'"I need you to call 999 for an ambulance now — tell them it\u2019s a young child with a fever and a rash that doesn\u2019t fade under a glass, and that you\u2019re worried about meningitis or sepsis. That phrase gets the fastest response. Don\u2019t wait for the Calpol, don\u2019t wait to see if more spots come. I\u2019ll make sure it\u2019s flagged from our end too."' },
      { lbl:'While you wait',        txt:'"Keep him with you, keep him comfortable, and watch for him getting more sleepy or hard to wake, more spots appearing, any jerking or a fit, or his breathing getting harder — but you\u2019re not waiting at home, the ambulance is coming. Is there someone for your little one so you can focus on Leo?"' },
      { lbl:'Hold her',              txt:'"You\u2019ve done everything right, and help is on its way. If anything changes before they arrive — he becomes floppy, won\u2019t wake, or has a fit — ring 999 straight back. You trusted your instinct and called, and that may be the most important thing you do today. Go and be with him."' },
    ],
    learning:'A non-blanching rash (petechiae/purpura) in a febrile, unwell child is a meningococcal sepsis emergency until proven otherwise — the single most important action is to characterise the rash (glass/tumbler test) and, with the systemic picture, arrange immediate emergency assessment (999/ED), never home safety-netting. Assess the child with traffic-light/sepsis thinking (alertness, hydration/wet nappies, colour, work of breathing) rather than fixating on the temperature, and know the NG12 paediatric red flags (unexplained petechiae and/or hepatosplenomegaly/generalised lymphadenopathy → very urgent FBC and immediate referral for leukaemia). The examinable hidden agenda is the mother\u2019s minimising, driven by fear of being judged a "neurotic mum" after a previous dismissive experience — she downplays red-flag features and her own accurate instinct. The skill is to validate parental gut feeling explicitly (an evidence-based warning sign), counter the judgement fear, and convey urgency clearly without paralysing panic, with unambiguous 999 action and safety-netting.',
    knowledge:{
      guideline:'NICE NG143 fever in under-5s (traffic-light) · NICE NG51 sepsis · NICE NG12 (paediatric red flags) · meningococcal guidance',
      points:[
        { h:'Non-blanching rash = emergency', t:'A non-blanching (petechial/purpuric) rash with fever suggests meningococcal disease/sepsis and is a medical emergency. Use the glass/tumbler test. Do not wait for the classic full picture (neck stiffness, photophobia may be absent, especially in young children). Immediate transfer (999) to hospital.' },
        { h:'Traffic-light assessment, not the thermometer', t:'NG143: assess colour, activity/alertness, respiratory effort, hydration (wet nappies, drinking) and other features. Red features (pale/mottled/blue, unrousable/not waking, weak/high-pitched cry, grunting/tachypnoea, reduced skin turgor, non-blanching rash, bulging fontanelle, focal neurology/seizures) → urgent/emergency. The height of fever alone is a poor guide.' },
        { h:'NG12 paediatric red flags', t:'Unexplained petechiae and/or hepatosplenomegaly → very urgent FBC and immediate specialist referral for leukaemia. Generalised lymphadenopathy or persistent unexplained features likewise warrant urgent investigation. Fever plus these signs is never "just a virus".' },
        { h:'Pre-hospital antibiotics', t:'If meningococcal disease is strongly suspected and hospital transfer will be delayed, give parenteral benzylpenicillin (or cefotaxime) per guidance — but never let this delay the 999 call/transfer. In primary care the priority is immediate emergency transfer.' },
        { h:'Parental instinct is evidence', t:'A parent\u2019s sense that their child is more unwell than with previous illnesses is an independent red flag and predicts serious illness. Validate it; never dismiss a worried parent as "neurotic" — that fear causes dangerous under-reporting and delayed presentation.' },
        { h:'Dehydration & systemic signs', t:'Reduced fluid intake and wet nappies, lethargy, mottling and tachypnoea indicate a child who is systemically unwell and needs urgent assessment regardless of a "treatable-looking" source.' },
        { h:'Never do', t:'Never let a non-blanching rash be safety-netted at home; never judge fever by temperature alone; never dismiss parental instinct; never delay 999 for analgesia/observation; never miss the NG12 leukaemia red flags.' },
        { h:'Safety-net & action', t:'999 now with the right phrasing; nil delay; watch for deterioration (drowsiness, more petechiae, seizures, respiratory distress) en route; arrange care for siblings; validate and support the parent; document and flag.' }
      ]
    }
  };

  /* ============ 66. VIDEO — The limping child ============ */
  const c66 = {
    id:'limping-child', title:'"He woke up and won\u2019t put weight on it"', type:'video', duration:12,
    meta:{ age:5, sex:'M', setting:'Video consultation — mother of a 5-year-old refusing to weight-bear.', system:'Paediatrics / The limping child' },
    brief:'Caller/parent: mother of Finn, 5, who woke this morning limping and is now refusing to walk on the right leg. Had a cold last week. On the call the mother reports he feels "a bit warm". She is keen for reassurance it\u2019s "growing pains" or a sprain. If asked: she\u2019s not sure he had a temperature, hasn\u2019t checked. He is otherwise eating, no obvious injury witnessed. No rash. The leg/hip: she can show the child on video.',
    script:{
      opening:'"Morning — so Finn woke up limping and now he won\u2019t walk on his right leg at all, he just wants to be carried. He had a cold last week. I\u2019m hoping it\u2019s just growing pains or he\u2019s twisted it playing. He\u2019s normally never still. Can you maybe just tell me what to do for a sprain? I don\u2019t want to drag him to A&E if it\u2019s nothing."',
      facts:[
        { topic:'The key discriminators', text:'On careful history: refusing to weight-bear at all (a red flag — different from a mild limp), woke with it. Crucially — if she checks/has a thermometer — he may be FEVERISH; if febrile + refusing to weight-bear, septic arthritis/osteomyelitis must be excluded urgently. Recent viral illness raises transient synovitis, but that is a diagnosis of exclusion.' },
        { topic:'The can\u2019t-miss',     text:'Septic arthritis of the hip is the diagnosis you cannot miss: fever + non-weight-bearing + raised inflammatory markers (Kocher criteria thinking). Other serious causes by age: Perthes, slipped upper femoral epiphysis (SUFE, older/heavier child), malignancy (leukaemia/bone tumour), NAI, reactive/juvenile arthritis. "Growing pains" never cause a limp or non-weight-bearing and are never the safe label here.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA — the mother is anxious about TIME and judgement: she is a single parent juggling work and the younger child, an A&E trip is genuinely hard (no childcare, no car), and she\u2019s had a previous "wasted" A&E visit. She\u2019s steering toward a home label not from neglect but from real practical barriers — which must be solved, not ignored.' },
        { topic:'The temperature gap',   text:'She "hasn\u2019t checked" his temperature — a critical missing piece. The consultation hinges on establishing whether he is febrile, and on the refusal to weight-bear, both of which she has glossed.' },
        { topic:'What she wants',       text:'Officially: home advice for a sprain to avoid A&E. What is needed: recognition that a child refusing to weight-bear (especially if febrile) needs urgent same-day assessment to exclude septic arthritis — with the practical barriers to getting there actively problem-solved.' },
      ],
      ice:{
        ideas:'It\u2019s growing pains or a twist from playing; home treatment should do.',
        concerns:'HIDDEN AGENDA — a single parent with no easy childcare/transport and a previous "wasted" A&E trip, steering toward a home label because getting to hospital feels impossible; not neglect but real barriers.',
        expectations:'Advice for a sprain at home. What is actually needed: urgent same-day assessment to exclude septic arthritis (especially if febrile), with the practical obstacles solved.'
      },
      cues:['"Won\u2019t put weight on it at all" — refusal to weight-bear is a red flag, not a sprain; do not accept "growing pains".','"He feels a bit warm / I haven\u2019t checked" — establish the temperature; fever + non-weight-bearing = septic arthritis until excluded.','"I don\u2019t want to drag him to A&E" — practical barriers steering her to a home label; solve them rather than collude.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises that a child REFUSING TO WEIGHT-BEAR is a red flag requiring assessment, and rejects "growing pains/sprain" as a safe label — growing pains never cause a limp or non-weight-bearing' },
      { dom:'tasks', text:'Establishes the missing critical data — IS HE FEBRILE? — and recognises that fever + refusal to weight-bear means SEPTIC ARTHRITIS/osteomyelitis must be excluded urgently (Kocher-type reasoning), not managed at home' },
      { dom:'tasks', text:'Considers the age-appropriate serious differential out loud: septic arthritis/osteomyelitis, transient synovitis (diagnosis of exclusion, post-viral), Perthes, SUFE, malignancy (leukaemia/bone tumour), reactive/juvenile arthritis, and non-accidental injury' },
      { dom:'tasks', text:'Arranges urgent SAME-DAY assessment (paediatric/ED) for examination and investigation (inflammatory markers, imaging/USS hip) — does NOT give sprain advice and review; uses video to observe but does not substitute it for examination' },
      { dom:'tasks', text:'Screens for associated red flags and safeguarding: systemic features (fever, lethargy, bruising/pallor suggesting malignancy), the mechanism/consistency of history (NAI), and other joints/rash' },
      { dom:'rto',   text:'Surfaces and PROBLEM-SOLVES the practical barriers (single parent, transport, childcare, previous "wasted" trip) as part of the clinical plan, rather than colluding with a home label or dismissing her' },
      { dom:'rto',   text:'Validates that getting there is genuinely hard and avoids judgement, while being clear why same-day assessment is necessary — bringing her with him' },
      { dom:'gs',    text:'Safety-nets and coordinates: arranges the pathway (and transport/childcare help where possible), what to watch for (worsening, fever, spreading), ensures the child WILL be seen today, documents, and follows up' },
    ],
    worked:[
      { lbl:'Reframe "growing pains"', txt:'"I know \u2018growing pains\u2019 is what we all hope for — but here\u2019s the thing: growing pains never stop a child walking. A child who won\u2019t put any weight on a leg is telling us something real is going on in that leg or hip, and that always needs checking properly. So let\u2019s work out what it is rather than treat a sprain."' },
      { lbl:'Get the missing fact',  txt:'"The single most important thing right now — do you have a thermometer? Can you take his temperature while we talk? \u2026 Because if he\u2019s got a fever AND won\u2019t weight-bear, there\u2019s an infection in the joint we have to rule out today; that\u2019s the one we never sit on. Even if he\u2019s not feverish, refusing to walk still needs same-day eyes on him."' },
      { lbl:'Name the stakes plainly',txt:'"I\u2019m not trying to frighten you, but I\u2019ll be honest: an infection in a child\u2019s hip joint can damage it quickly if it\u2019s missed, so it\u2019s a same-day assessment, not something to watch at home. The cold last week might mean it\u2019s a harmless irritable hip that settles — but the only safe way to tell those apart is to have him examined and have some bloods and maybe a scan."' },
      { lbl:'Solve the real barrier', txt:'"Now — you said you don\u2019t want to drag him to A&E, and I suspect getting there isn\u2019t simple. Tell me honestly: is it transport, childcare, work? \u2026 Let\u2019s sort that together, because it\u2019s part of the medical plan. I can help arrange the right place to go and, if needed, look at transport. You\u2019re not being difficult; these are real problems and we solve them."' },
      { lbl:'No judgement',          txt:'"And the last A&E trip that felt like a waste — I\u2019m sorry it felt that way. This is different: there\u2019s a clear reason to be seen, and no one will think you overreacted for a child who can\u2019t walk. You\u2019re doing right by Finn."' },
      { lbl:'Confirm + safety-net',  txt:'"So the plan: he\u2019s assessed today — I\u2019ll arrange where. Carry him, keep him comfortable, no running off to play on it. If he spikes a high fever, becomes floppy, or you see any bruising or a rash, that\u2019s more urgent still. Tell me the temperature now and how you\u2019ll get there, and I\u2019ll make sure it\u2019s set up. We do this together."' },
    ],
    learning:'A child REFUSING TO WEIGHT-BEAR is a red flag — "growing pains" never cause a limp or non-weight-bearing and are never the safe label. The can\u2019t-miss diagnosis is septic arthritis (and osteomyelitis): the consultation hinges on establishing whether the child is FEBRILE, because fever plus refusal to weight-bear mandates urgent same-day assessment to exclude joint infection (Kocher-type reasoning), with the age-appropriate serious differential (transient synovitis as a diagnosis of exclusion, Perthes, SUFE, malignancy/leukaemia, NAI) considered out loud. The examinable hidden agenda is practical: a single parent with no easy transport/childcare and a previous "wasted" A&E trip is steering toward a home label out of real barriers, not neglect — these must be actively problem-solved as part of the plan, not ignored or judged. Use video to observe but not to substitute for examination; arrange urgent assessment (inflammatory markers, hip ultrasound), screen for safeguarding, and safety-net clearly.',
    knowledge:{
      guideline:'NICE CKS limping child · BSCOS/ paediatric orthopaedic guidance · Kocher criteria · NICE NG12 (paediatric malignancy)',
      points:[
        { h:'Non-weight-bearing is a red flag', t:'A child who refuses to weight-bear (or has an acute limp) needs assessment — never label as "growing pains" (which are bilateral, nocturnal, never cause limp/limitation and never daytime non-weight-bearing). Acute limp in a child is a serious-until-proven-otherwise presentation.' },
        { h:'Exclude septic arthritis first', t:'Fever + refusal to weight-bear + raised inflammatory markers (and inability to bear weight) — the Kocher criteria for septic arthritis of the hip. Septic arthritis is an emergency: delay risks permanent joint destruction. Urgent same-day assessment with FBC, CRP/ESR, blood cultures and hip ultrasound ± joint aspiration.' },
        { h:'Age-structured differential', t:'0\u20133y: septic arthritis, DDH, NAI, malignancy. 3\u201310y: transient synovitis (post-viral, diagnosis of EXCLUSION), septic arthritis, Perthes, malignancy. 10\u201316y: SUFE (especially overweight/adolescent — can present with knee pain), septic arthritis, malignancy. Consider reactive/juvenile idiopathic arthritis and always NAI.' },
        { h:'Don\u2019t miss malignancy', t:'Leukaemia and bone tumours can present as limp/bone pain. Pallor, bruising/petechiae, lethargy, lymphadenopathy, hepatosplenomegaly, night pain or systemic upset → urgent FBC/blood film and referral (NG12). Persistent unexplained bone pain warrants imaging.' },
        { h:'Transient synovitis is a label of exclusion', t:'Post-viral irritable hip is common and self-limiting, but it is diagnosed only after septic arthritis and other serious causes are excluded clinically/with investigation — not assumed over the phone because there was a recent cold.' },
        { h:'Solve the access barriers', t:'Parents may steer toward home management because of transport, childcare, work or prior negative experiences. Treat these barriers as part of the clinical task — arrange the right setting, help with transport/childcare, and remove judgement — so the child actually gets assessed.' },
        { h:'Never do', t:'Never label non-weight-bearing as growing pains/sprain; never skip establishing fever; never assume transient synovitis without exclusion; never miss SUFE (knee pain in an adolescent) or malignancy; never collude with a home plan because getting to hospital is hard — solve it instead.' },
        { h:'Safety-net & follow-up', t:'Urgent same-day assessment with bloods/imaging; observe (video) but examine in person; safeguarding screen; arrange transport/childcare support; clear deterioration advice; confirm attendance and follow up.' }
      ]
    }
  };

  /* ============ 67. TELEPHONE — Viral-induced wheeze vs asthma ============ */
  const c67 = {
    id:'viral-wheeze-child', title:'"He only wheezes when he\u2019s got a cold"', type:'telephone', duration:12,
    meta:{ age:2, sex:'M', setting:'Telephone — recurrent wheeze with colds in a 2-year-old.', system:'Paediatrics / Viral wheeze & inhaler coaching' },
    brief:'Caller: father of Reuben, 2, who wheezes and coughs with every cold (4th episode this winter), settling between colds. A&E gave salbutamol last time. Currently mild — wheezy with a cold, feeding okay, no recession at rest, talking/playing. Father wants to know if it\u2019s asthma and "whether he should be on a brown inhaler". Struggles with the spacer/mask technique. Smoker (tries to smoke outside). No PICU admissions.',
    script:{
      opening:'"Hi, it\u2019s about my little boy Reuben. Every time he gets a cold he goes all wheezy and chesty — this is the fourth time this winter. A&E gave him the blue inhaler last time and it helped. My question really is: has he got asthma? My sister\u2019s lad is on a brown preventer inhaler and I\u2019m wondering if Reuben should be too. And honestly, half the time I\u2019m not sure I\u2019m even getting the inhaler into him properly."',
      facts:[
        { topic:'The pattern',         text:'If explored: wheeze/cough ONLY with viral colds, completely well and symptom-free between episodes, no interval symptoms (no night cough or exercise/play wheeze when well), age 2. This is the classic picture of episodic VIRAL-INDUCED WHEEZE, not (yet) diagnosable as asthma — a label generally avoided this young without interval/atopic features.' },
        { topic:'Severity now',         text:'If assessed: currently mild — feeding/talking/playing, no marked recession or tracheal tug at rest, not distressed, sats presumably fine. Safety-net for the features that would mean urgent review (working hard to breathe, not feeding, drowsy, blue, salbutamol not lasting).' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA — the father carries GUILT about his smoking: he half-knows it\u2019s contributing, feels judged, and the "is it asthma / should he be on a preventer" is partly a wish to fix it with a medicine instead of facing the smoking. He may also be anxious because his own childhood asthma was frightening. The smoking and the guilt need handling without shaming, or he\u2019ll disengage.' },
        { topic:'The inhaler technique', text:'He struggles to give the inhaler — likely poor spacer/mask technique (not held to the face, not enough breaths, no spacer, or pressing multiple puffs). Inhaler technique with a spacer and mask is the highest-yield practical intervention and is being missed.' },
        { topic:'What he wants',        text:'Officially: a yes/no on asthma and possibly a preventer inhaler. What is needed: explanation of viral-induced wheeze vs asthma (and why a preventer isn\u2019t automatically indicated), correct spacer/mask coaching, a written action plan, smoking-cessation support offered without shame, and clear safety-netting.' },
      ],
      ice:{
        ideas:'Reuben probably has asthma (like his cousin) and should be on a brown preventer inhaler.',
        concerns:'HIDDEN AGENDA — guilt about his smoking contributing (and feeling judged), plus anxiety from his own frightening childhood asthma; hoping a preventer inhaler fixes it instead of facing the smoking.',
        expectations:'A diagnosis and a preventer inhaler. What is actually needed: explanation of viral wheeze vs asthma, correct inhaler/spacer technique, an action plan, non-judgemental smoking support, and safety-netting.'
      },
      cues:['"Only wheezes with colds, fine in between" — episodic viral wheeze, not interval asthma; shapes whether a preventer is indicated.','"Not sure I\u2019m getting the inhaler into him properly" — technique is the highest-yield fix and is being flagged.','Mentions trying to smoke outside / sister\u2019s child on a preventer — the smoking guilt and the medicine-instead-of-facing-it wish.']
    },
    checkpoints:[
      { dom:'tasks', text:'Distinguishes EPISODIC VIRAL-INDUCED WHEEZE (wheeze only with colds, symptom-free between, very young) from asthma (interval symptoms, nocturnal/exertional, atopy), and explains why an asthma label and a regular preventer are generally not applied at this age without interval/atopic features' },
      { dom:'tasks', text:'Assesses current severity by phone and safety-nets it: feeding, talking/playing, work of breathing (recession, tracheal tug), colour, alertness, and salbutamol response/duration — knows what would mean urgent/emergency review' },
      { dom:'tasks', text:'Optimises the ACUTE management correctly: salbutamol via a SPACER with a face mask (not nebuliser routinely), correct dosing/frequency, and a clear when-to-step-up/when-to-seek-help plan — rather than reflexively starting an inhaled steroid' },
      { dom:'tasks', text:'Identifies and corrects the INHALER TECHNIQUE problem: coaches spacer + mask use (seal on the face, one puff at a time, tidal breaths/multiple breaths per puff), recognising this is the highest-yield practical intervention; arranges a technique check' },
      { dom:'tasks', text:'Addresses the SMOKING as a major modifiable trigger without shaming: offers smoking-cessation support, explains second/third-hand smoke worsens wheeze, and frames it as the most powerful thing he can do for Reuben\u2019s chest' },
      { dom:'rto',   text:'Hears the guilt and anxiety beneath the asthma question; handles the smoking with compassion not judgement, and validates his own frightening childhood-asthma experience, so he stays engaged' },
      { dom:'rto',   text:'Partners with him on a plan and checks understanding (teach-back of inhaler technique), rather than just issuing instructions' },
      { dom:'gs',    text:'Safety-nets and follows up: a written action plan, exactly when to give salbutamol and when to seek urgent help (increased work of breathing, not feeding, drowsy, blue, reliever not lasting 4 hours → 999/ED), smoking-cessation referral, and a technique/review appointment' },
    ],
    worked:[
      { lbl:'Name the pattern',      txt:'"From what you describe — wheezy only when he\u2019s got a cold, and completely fine, running around, in between — that\u2019s what we call viral wheeze. Lots of little ones get it because their airways are small; their colds go to the chest. The good news is most grow out of it by school age."' },
      { lbl:'Asthma vs not',         txt:'"On the asthma question: at two, with symptoms only during colds and nothing in between, we usually don\u2019t label it asthma yet or put him on a daily preventer — that\u2019s really for children who get symptoms between colds too, like night-time coughing or wheezing when they play. We watch the pattern. If interval symptoms appear, we rethink. So your instinct to ask was right, even if the answer is \u2018not a preventer for now\u2019."' },
      { lbl:'Fix the technique',     txt:'"Honestly, the most useful thing today is the bit you flagged — getting the inhaler in. With a toddler it\u2019s the blue inhaler through a spacer with a mask: seal the mask gently over his nose and mouth, ONE puff into the spacer, then let him take five or six normal breaths from it, then the next puff. Not several puffs at once. Done well, a spacer works as well as the machines in A&E. Shall I watch you do it, or book a nurse to check?"' },
      { lbl:'The smoking, kindly',   txt:'"Can I raise something gently, and I\u2019m not here to give you a hard time? Smoke — even smoking outside, on clothes and breath — is one of the biggest things that tips these little airways into wheeze. I say it because stopping would do more for Reuben\u2019s chest than almost any inhaler. I\u2019d really like to help you with that properly, no judgement, whenever you\u2019re ready."' },
      { lbl:'Meet his own fear',     txt:'"And — your own asthma as a kid sounded frightening. It makes total sense you\u2019re watchful with Reuben. The difference is we can give you a clear plan so you\u2019re never guessing in the middle of the night."' },
      { lbl:'Action plan + net',     txt:'"So: I\u2019ll give you a written plan. When he\u2019s wheezy with a cold, the blue inhaler through the spacer, this dose, this often. Get urgent help — 999 or A&E — if he\u2019s working hard to breathe with his ribs sucking in, can\u2019t feed or talk, goes drowsy or blue, or the inhaler doesn\u2019t last four hours. Right now he sounds mild. Let\u2019s book a technique check and a review, and sort the smoking support. You\u2019re doing a good job — let\u2019s make it easier."' },
    ],
    learning:'Episodic viral-induced wheeze (wheeze only with colds, symptom-free between, very young child) is distinct from asthma and generally does NOT warrant an asthma label or a regular inhaled-steroid preventer at age 2 without interval or atopic features — the right answer to "should he be on a brown inhaler?" is often a well-explained "not for now". The highest-yield practical intervention is INHALER TECHNIQUE: salbutamol via a spacer with a face mask (one puff, several tidal breaths, good seal), which works as well as a nebuliser when done correctly and which the father flagged he was getting wrong. The examinable hidden agenda is parental guilt about smoking (and feeling judged) plus anxiety from his own childhood asthma; the smoking is a major modifiable trigger that must be addressed with compassion and cessation support, not shame, or he disengages. Assess and safety-net current severity, give a written action plan with explicit escalation criteria, and arrange a technique check and review.',
    knowledge:{
      guideline:'NICE/BTS-SIGN asthma & wheeze in children · NICE NG143 context · CKS preschool wheeze · smoking cessation',
      points:[
        { h:'Viral wheeze vs asthma', t:'Episodic viral wheeze: wheeze/cough only with viral URTIs, asymptomatic between episodes, typically <5 years, often no atopy. Asthma is suggested by INTERVAL symptoms (nocturnal cough, exertional wheeze when well), atopy (eczema/allergic rhinitis), family history, and response to treatment. A firm asthma diagnosis is difficult and usually deferred in the very young.' },
        { h:'Don\u2019t reflexively start a preventer', t:'Regular inhaled corticosteroids are not routinely indicated for pure episodic viral wheeze without interval/atopic features at this age. Manage episodes with a reliever; consider a trial of preventer or specialist input only with frequent/severe episodes or interval symptoms. Avoid labelling "asthma" prematurely.' },
        { h:'Inhaler technique is the intervention', t:'Salbutamol via a SPACER with an age-appropriate face mask is first-line for acute wheeze and as effective as a nebuliser in non-life-threatening cases. Technique: good mask seal, ONE actuation at a time, 5\u201310 tidal breaths per puff. Poor technique is a leading cause of "treatment failure" — check and coach it directly.' },
        { h:'Assess and safety-net severity', t:'Urgent/emergency features: marked recession/tracheal tug, inability to feed/talk, drowsiness, cyanosis, silent chest, SpO2 <92%, reliever not lasting ~4 hours. Provide a written action plan with explicit when-to-give-reliever and when-to-seek-help instructions.' },
        { h:'Tackle smoking without shame', t:'Parental/household smoking (including second- and third-hand) is a major modifiable trigger for childhood wheeze and admissions. Address it compassionately, frame cessation as the most powerful intervention for the child\u2019s chest, and offer cessation support — judgement causes disengagement.' },
        { h:'Address parental anxiety', t:'Parents with their own asthma history may be especially anxious. Validate this and replace uncertainty with a clear, written plan and teach-back, reducing middle-of-the-night guesswork.' },
        { h:'Never do', t:'Never label asthma or start a preventer reflexively in a 2-year-old with pure viral wheeze; never skip inhaler-technique assessment; never default to nebulisers over a spacer for mild-moderate wheeze; never address smoking with shame; never omit the written action plan and escalation criteria.' },
        { h:'Safety-net & follow-up', t:'Written action plan with reliever dosing and escalation (999/ED features); technique check and review; smoking-cessation referral; reassess the pattern over time for emerging interval/atopic features.' }
      ]
    }
  };

  /* ============ 68. VIDEO — Febrile convulsion: parent terror ============ */
  const c68 = {
    id:'febrile-convulsion', title:'"I thought he was dying in my arms"', type:'video', duration:12,
    meta:{ age:2, sex:'M', setting:'Video consultation — after a first febrile convulsion (child now recovered).', system:'Paediatrics / Febrile convulsion' },
    brief:'Parents of Musa, 18 months, who had a brief generalised convulsion this morning during a febrile illness (otitis media diagnosed yesterday). The seizure lasted ~2 minutes, self-terminated, he was sleepy afterwards and is now alert, playing, feeding, back to himself. Seen and assessed earlier; this is a follow-up/reassurance call. Parents traumatised, terrified of recurrence and of epilepsy/brain damage. First child. No family history known.',
    script:{
      opening:'(Mother, shaken.) "Doctor, this morning Musa just went stiff and started jerking and his eyes rolled back and I genuinely thought he was dying in my arms. It was the most terrifying thing of my life. He\u2019s okay now, back to normal, but I\u2019m petrified it\u2019ll happen again, and — does this mean he\u2019s got epilepsy? Has it damaged his brain? I can\u2019t stop shaking. I don\u2019t want to ever leave him alone again."',
      facts:[
        { topic:'The event',           text:'If clarified: brief (~2 min), generalised, self-terminating convulsion during a fever, in a child aged 6 months\u20136 years, with full recovery — a classic SIMPLE febrile convulsion. He has a clear infective source (otitis media) and is now well, alert, feeding, neurologically normal.' },
        { topic:'The reassurance facts', text:'Simple febrile convulsions are common (~1 in 20 children), benign, do NOT cause brain damage, do NOT mean epilepsy (small increase in risk but the large majority never develop it), and most children grow out of them by ~5\u20136 years. Recurrence is possible (about a third) but does not change the benign outlook.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA — beneath the epilepsy/brain-damage questions is acute trauma and a specific terror: the mother witnessed something she thought was death, feels she "failed to protect him", and is developing hypervigilance (won\u2019t leave him, won\u2019t sleep). There may also be guilt that she "didn\u2019t bring the fever down fast enough" — a misconception that antipyretics prevent febrile convulsions (they do not). These need addressing or she\u2019ll be paralysed by fear.' },
        { topic:'The practical fear',    text:'She doesn\u2019t know what to DO if it happens again — the not-knowing fuels the terror. Concrete first-aid (recovery position, time it, when to call 999) restores some control.' },
        { topic:'What she wants',       text:'Officially: to know if it\u2019s epilepsy/brain damage and how to stop it recurring. What is needed: clear, warm reassurance about the benign nature, correction of the antipyretic/guilt misconception, concrete what-to-do-next-time first aid and safety-netting, and acknowledgement of the trauma.' },
      ],
      ice:{
        ideas:'The convulsion may mean epilepsy or brain damage, and she should have brought the fever down faster to prevent it.',
        concerns:'HIDDEN AGENDA — trauma from witnessing what looked like her child dying, guilt at "failing to protect him", and developing hypervigilance/insomnia; terror of recurrence and of not knowing what to do.',
        expectations:'To be told whether it\u2019s epilepsy/brain damage. What is actually needed: warm reassurance about the benign nature, correction of the guilt/antipyretic myth, concrete first-aid for any recurrence, and acknowledgement of the trauma.'
      },
      cues:['"I thought he was dying in my arms" — acute trauma; respond to the distress before the facts.','"Does it mean epilepsy / brain damage?" — the specific fears to address directly with clear reassurance.','"I should have brought his fever down faster" — the guilt and the antipyretic misconception to correct gently.']
    },
    checkpoints:[
      { dom:'tasks', text:'Identifies this as a SIMPLE febrile convulsion (brief <15 min, generalised, single in 24h, full recovery, child 6mo\u20136y with fever and an identified source) and conveys that it is benign and common' },
      { dom:'tasks', text:'Reassures accurately on the specific fears: simple febrile convulsions do NOT cause brain damage and do NOT equate to epilepsy (only a small increase in epilepsy risk; the large majority never develop it); most children outgrow them by ~5\u20136 years' },
      { dom:'tasks', text:'Corrects the antipyretic/guilt misconception: antipyretics (paracetamol/ibuprofen) treat discomfort but do NOT prevent febrile convulsions, and nothing she did or didn\u2019t do caused it — directly lifting the self-blame' },
      { dom:'tasks', text:'Gives concrete FIRST AID for any recurrence: protect from injury, do not restrain or put anything in the mouth, place in the recovery position when jerking stops, TIME the seizure, and call 999 if it lasts >5 minutes, is the second in 24h, focal, or there are concerning features (breathing difficulty, not recovering)' },
      { dom:'tasks', text:'Knows what would make it COMPLEX/atypical and warrant different management/referral: prolonged (>15 min), focal, recurrent within 24h, incomplete recovery, age outside 6mo\u20136y, or diagnostic uncertainty/meningitis features — and that the underlying fever source still needs appropriate treatment' },
      { dom:'rto',   text:'Responds to the TRAUMA first — acknowledges how terrifying it was, validates the "I thought he was dying" experience — before delivering reassurance; paces the consultation to her distress' },
      { dom:'rto',   text:'Addresses the hypervigilance and guilt with compassion, normalising her reaction and gently heading off paralysing over-protection, offering support if the trauma persists' },
      { dom:'gs',    text:'Safety-nets and supports: written information on febrile convulsions and first aid, explicit 999 criteria, advice on the current infection, who to contact with worries, and follow-up — leaving her informed, equipped and calmer rather than terrified' },
    ],
    worked:[
      { lbl:'Trauma first',          txt:'"Before any medical explanation — what you went through this morning sounds genuinely terrifying. Watching your baby go stiff and jerk and thinking he was dying is one of the most frightening things a parent can experience, and it\u2019s completely understandable that you\u2019re still shaking. You did not do anything wrong. Let\u2019s take this gently."' },
      { lbl:'The reassurance',       txt:'"Here\u2019s what happened, and it\u2019s genuinely reassuring: Musa had what we call a febrile convulsion — a seizure triggered by a fever in a young child. They look horrifying, but they are common, around one in twenty children have one, and the important part: they do NOT cause brain damage, and they are NOT epilepsy. He is not brain-damaged and he almost certainly does not have epilepsy."' },
      { lbl:'Lift the guilt',      txt:'"And this matters — you said you should have brought his fever down faster. Please hear me: nothing you did or didn\u2019t do caused this. Calpol and ibuprofen help a child feel more comfortable, but they do NOT prevent these convulsions — that\u2019s a really common belief and it\u2019s simply not true. You did not fail to protect him. This was not your fault."' },
      { lbl:'What it means ahead',   txt:'"Most children grow out of these by around five. It can happen again with another fever — roughly a third do — but that doesn\u2019t change the good news: still benign, still not epilepsy, still no harm to him. Knowing it might recur isn\u2019t meant to frighten you; it\u2019s so you\u2019re prepared rather than blindsided."' },
      { lbl:'Give her control',    txt:'"So here\u2019s exactly what to do if it ever happens again, because not knowing is half the terror: keep him safe from knocking into anything, don\u2019t hold him down and don\u2019t put anything in his mouth, and when the jerking stops, roll him onto his side. Look at a clock and time it. Call 999 if it lasts more than five minutes, happens twice in a day, or he doesn\u2019t come round properly. Most stop on their own within a couple of minutes, like this one did."' },
      { lbl:'Support + safety-net',txt:'"I\u2019ll send you written information so you\u2019re not relying on memory. Keep treating his ear infection as we discussed. And it\u2019s okay if you don\u2019t sleep well for a few nights — that\u2019s the shock. But you don\u2019t need to watch him every second; he\u2019s well now and back to himself. If the fear is still gripping you in a week or two, come back and we\u2019ll help with that too. You handled something terrifying and your boy is absolutely fine."' },
    ],
    learning:'A brief, generalised, self-terminating convulsion during a fever in a child aged 6 months\u20136 years with full recovery and an identified source is a SIMPLE febrile convulsion — benign, common (~1 in 20), NOT brain damage, and NOT epilepsy (only a small increased risk; most never develop it), with most children outgrowing them by ~5\u20136 years. The clinical tasks are to confirm the simple pattern, know what makes it complex/atypical (prolonged >15 min, focal, recurrent in 24h, incomplete recovery) and warrant referral, and treat the underlying infection. But this is overwhelmingly a COMMUNICATION case: respond to the parent\u2019s trauma first ("I thought he was dying"), correct the pervasive guilt-laden misconception that antipyretics prevent febrile convulsions (they do not — nothing she did caused it), and give concrete recurrence first aid (protect, don\u2019t restrain, recovery position, time it, 999 if >5 min/second in 24h/incomplete recovery) so the not-knowing terror is replaced by control. Acknowledge the hypervigilance, offer follow-up, and provide written information.',
    knowledge:{
      guideline:'NICE CKS febrile seizure · NICE NG143 fever in under-5s · epilepsy/seizure first-aid guidance',
      points:[
        { h:'Define simple febrile convulsion', t:'Generalised, brief (<15 min), single within 24 hours, with full recovery, in a child 6 months\u20136 years during a febrile illness, without CNS infection or prior afebrile seizures. Complex = focal, prolonged (>15 min), or recurring within 24 hours/the same illness — these warrant assessment/referral.' },
        { h:'Reassure on the real fears', t:'Simple febrile convulsions do NOT cause brain damage and do NOT mean epilepsy — the absolute increase in later epilepsy risk is small (most never develop it). Most children outgrow them by ~5\u20136 years. Recurrence occurs in roughly a third but does not alter the benign prognosis.' },
        { h:'Correct the antipyretic myth', t:'Antipyretics relieve discomfort but do NOT prevent febrile convulsions and should not be given solely for that purpose. Crucially, parents commonly blame themselves for "not controlling the fever" — explicitly lift this guilt; nothing they did caused it.' },
        { h:'Recurrence first aid', t:'Protect from injury, do NOT restrain or place anything in the mouth, place in the recovery position once convulsing stops, and time the seizure. Call 999 if it lasts >5 minutes, is a second seizure in 24 hours, is focal, the child does not recover, or there are breathing/colour concerns. Rescue medication only for specific high-risk children under specialist guidance.' },
        { h:'Exclude serious causes', t:'Ensure the fever source is benign and exclude meningitis/encephalitis (non-blanching rash, neck stiffness, drowsiness, bulging fontanelle, prolonged/incomplete recovery). Atypical features or an unwell child change the pathway to urgent assessment.' },
        { h:'Address the trauma', t:'Witnessing a convulsion is acutely traumatic; parents may develop hypervigilance and insomnia. Respond to the distress before facts, validate the experience, normalise the reaction, gently temper over-protection, and offer follow-up/support if trauma persists.' },
        { h:'Never do', t:'Never imply brain damage/epilepsy for a simple febrile convulsion; never reinforce the antipyretic-prevention myth or the parent\u2019s self-blame; never omit concrete recurrence first aid; never miss complex features or meningitis; never deliver facts before acknowledging the terror.' },
        { h:'Safety-net & follow-up', t:'Written information and first-aid leaflet; explicit 999 criteria; treat the underlying infection; contact route for worries; follow-up for the child and for parental trauma if needed.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c65, c66, c67, c68);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'febrile-child-rash': {
      ceg: ['Urgent & unscheduled care', 'Children & young people'],
      stem: {
        name: 'Leo (mother calling)', age: '3 years · male',
        pmh: ['Febrile 2 days up to 39.4°C; "flat", drinking less', 'New "spots" on tummy appeared today', 'Reduced wet nappies; immunisations up to date'],
        meds: ['Paracetamol'],
        allergy: 'NKDA',
        recent: '⚠ Mother apologetic, "probably overreacting", friend said "just a virus". Younger sibling at home.',
        reason: 'Telephone — feverish child with a new rash.'
      },
      timeMap: [
        { t:'0–2',  h:'Seize on the rash',   d:'Glass/tumbler test now. Non-blanching + febrile + unwell = meningococcal/sepsis emergency. This is the priority over everything.' },
        { t:'2–4',  h:'Traffic-light the child', d:'Alertness, drinking/wet nappies, colour (mottled/pale), breathing — amber/red features, not the temperature number.' },
        { t:'4–6',  h:'Validate her instinct', d:'Counter the "neurotic mum" fear explicitly — parental gut feeling is an evidence-based red flag. She was right to call.' },
        { t:'6–9',  h:'Name it + 999',         d:'Possible serious blood infection; non-blanching rash. Call 999 now with the right phrasing; don\u2019t wait for Calpol or more spots.' },
        { t:'9–12', h:'While-you-wait net',    d:'Watch for drowsiness/more petechiae/seizure/breathing; care for the sibling; flag from the practice; support her — she did right.' }
      ],
      wordPics: {
        fail: 'Accepts "probably a virus", reassures and advises home safety-netting; never does the glass test, so a non-blanching rash and an evolving meningococcal sepsis are missed; dismisses the mother\u2019s instinct as overreaction.',
        pass: 'Does the glass test, recognises the non-blanching rash and unwell child, arranges 999, and validates the mother.',
        exc:  'Makes the rash the immediate priority and characterises it with the glass test; traffic-lights the child beyond the temperature; explicitly validates the mother\u2019s instinct and counters the "neurotic mum" fear; names the meningococcal/sepsis concern and gets a 999 ambulance with the right phrasing and no delay; and safety-nets the wait while supporting her.'
      },
      avoid: [
        { dont:'"It\u2019s probably just a viral rash with the fever — keep an eye and use Calpol."', instead:'"Can you press a glass on the spots — do they fade? They don\u2019t. With his fever and being so flat, a rash that doesn\u2019t fade is an emergency. Call 999 now."', why:'Home-safety-netting a non-blanching rash misses meningococcal sepsis, which can kill within hours.' },
        { dont:'"You\u2019re probably just being an anxious mum, but ring back if he\u2019s worse."', instead:'"You are not being neurotic — your gut said something\u2019s wrong, and that instinct is one of the best warning signs we have. You were absolutely right to call."', why:'Dismissing parental instinct (and reinforcing the "neurotic mum" fear) causes dangerous under-reporting and delay.' },
        { dont:'"Give the Calpol time to work and see if the spots spread before deciding."', instead:'"Don\u2019t wait for the Calpol or for more spots — this is a 999 call right now; every minute matters with this kind of infection."', why:'Waiting to "see how it evolves" squanders the narrow window in meningococcal disease.' }
      ]
    },

    'limping-child': {
      ceg: ['Urgent & unscheduled care', 'Children & young people'],
      stem: {
        name: 'Finn (mother calling)', age: '5 years · male',
        pmh: ['Woke limping; now REFUSING to weight-bear on right leg', 'Cold last week; mother thinks he "feels a bit warm" (not checked)', 'Otherwise eating; no witnessed injury, no rash'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Single parent; wants sprain advice, reluctant to go to A&E (transport/childcare; previous "wasted" trip).',
        reason: 'Video consultation — limping child refusing to walk.'
      },
      timeMap: [
        { t:'0–2',  h:'Reframe growing pains', d:'Growing pains never stop a child walking. Refusal to weight-bear is a red flag needing assessment — not a sprain label.' },
        { t:'2–4',  h:'Get the temperature',   d:'The missing critical fact. Fever + non-weight-bearing = septic arthritis until excluded. Even afebrile, non-weight-bearing needs same-day eyes.' },
        { t:'4–6',  h:'Differential out loud',  d:'Septic arthritis/osteomyelitis, transient synovitis (exclusion), Perthes, SUFE, malignancy, NAI. Name the stakes plainly without frightening.' },
        { t:'6–9',  h:'Solve the barriers',     d:'Single parent, transport, childcare, prior "wasted" trip — problem-solve as part of the plan; no judgement; bring her with you.' },
        { t:'9–12', h:'Same-day + safety-net',  d:'Urgent same-day assessment (bloods, hip USS); carry/comfort; escalate if high fever/floppy/bruising; confirm attendance and route.' }
      ],
      wordPics: {
        fail: 'Gives sprain/growing-pains advice and review; never establishes whether he\u2019s febrile; misses septic arthritis; colludes with the home plan because A&E is hard for her — risking a destroyed joint.',
        pass: 'Rejects the growing-pains label, establishes fever status, considers septic arthritis, and arranges same-day assessment with safety-netting.',
        exc:  'Reframes non-weight-bearing as a red flag and gets the missing temperature; reasons through the can\u2019t-miss septic arthritis and the age-structured differential out loud; actively problem-solves the single-parent transport/childcare barriers as part of the clinical plan without judgement; and secures urgent same-day assessment with a clear safeguarding-aware safety-net.'
      },
      avoid: [
        { dont:'"Sounds like growing pains or a little sprain — rest it and give Calpol."', instead:'"Growing pains never stop a child walking. Refusing to weight-bear needs checking today — and first, does he have a temperature?"', why:'Labelling non-weight-bearing as growing pains/sprain misses septic arthritis, which destroys a joint if delayed.' },
        { dont:'"As long as he doesn\u2019t have a fever, you can manage it at home."', instead:'"Even without a fever, a child who won\u2019t walk needs same-day assessment — and IF he\u2019s febrile it\u2019s urgent, because of joint infection. Let\u2019s check his temperature now."', why:'Fever status is the hinge; assuming afebrile without checking, and home-managing, is unsafe.' },
        { dont:'"I know A&E is a hassle, but you\u2019ll just have to take him in."', instead:'"Getting there clearly isn\u2019t simple — is it transport or childcare? Let\u2019s solve that together; it\u2019s part of the plan, and I can help arrange where to go."', why:'Ignoring real access barriers means the child may not be assessed; solving them is part of safe care.' }
      ]
    },

    'viral-wheeze-child': {
      ceg: ['Children & young people', 'Prescribing & pharmacology'],
      stem: {
        name: 'Reuben (father calling)', age: '2 years · male',
        pmh: ['Wheeze/cough with every cold (4th this winter), well between', 'A&E gave salbutamol last time; no PICU admissions', 'Currently mild — feeding/playing, no recession at rest'],
        meds: ['Salbutamol inhaler (struggles with spacer/mask technique)'],
        allergy: 'NKDA',
        recent: 'Father smokes (outside); own frightening childhood asthma. Asks if it\u2019s asthma / needs a preventer.',
        reason: 'Telephone — recurrent wheeze with colds.'
      },
      timeMap: [
        { t:'0–2',  h:'Name the pattern',    d:'Wheeze only with colds, well between = viral wheeze, not interval asthma. Most outgrow it by school age.' },
        { t:'2–4',  h:'Asthma vs not',        d:'At 2, no interval symptoms → usually no asthma label or daily preventer yet. Watch the pattern; rethink if interval/atopic features appear.' },
        { t:'4–7',  h:'Fix the technique',    d:'Highest-yield: salbutamol via spacer + mask — good seal, ONE puff, 5\u20136 tidal breaths. As good as a nebuliser. Watch him / book a nurse check.' },
        { t:'7–9',  h:'Smoking, kindly',      d:'Biggest modifiable trigger (incl. on clothes/breath). Frame cessation as the most powerful thing for Reuben\u2019s chest; offer support, no shame. Validate his own asthma fear.' },
        { t:'9–12', h:'Action plan + net',     d:'Written plan: reliever dose/frequency; 999/ED if hard work of breathing, not feeding, drowsy, blue, reliever <4h. Technique check + review; smoking referral.' }
      ],
      wordPics: {
        fail: 'Labels it asthma and starts a brown preventer reflexively in a 2-year-old with pure viral wheeze; never checks the flagged inhaler technique; addresses smoking with shame (or not at all); no written action plan.',
        pass: 'Distinguishes viral wheeze from asthma, manages with reliever via spacer, coaches technique, addresses smoking, and gives a safety-net.',
        exc:  'Explains viral wheeze vs asthma and why a preventer isn\u2019t indicated yet; makes inhaler/spacer technique the high-yield fix with teach-back; tackles the smoking compassionately as the most powerful intervention and offers cessation support; validates the father\u2019s own asthma anxiety; and leaves a written action plan with explicit escalation and a review.'
      },
      avoid: [
        { dont:'"It does sound like asthma — let\u2019s start him on a brown preventer inhaler."', instead:'"At two, with wheeze only during colds and nothing in between, we usually don\u2019t label asthma or start a daily preventer yet — we watch the pattern. The big win today is getting the blue inhaler in properly."', why:'Reflexively labelling asthma and starting ICS in pure viral wheeze over-treats and mislabels.' },
        { dont:'"Just give the inhaler whenever he\u2019s wheezy and he\u2019ll be fine."', instead:'"Let\u2019s get the technique right — spacer and mask, good seal, one puff then five or six breaths, then the next. Done well it works as well as the hospital machine. Can I watch you do it?"', why:'Without correcting technique the reliever underperforms and "treatment failure" is misattributed.' },
        { dont:'"You really need to stop smoking — it\u2019s causing his wheeze." (shaming)', instead:'"Can I gently say — smoke, even outside, is one of the biggest triggers for these little airways. Stopping would do more than any inhaler, and I\u2019d love to help you, no judgement, when you\u2019re ready."', why:'A shaming approach makes the father disengage; compassion plus support is what changes behaviour.' }
      ]
    },

    'febrile-convulsion': {
      ceg: ['Children & young people', 'Urgent & unscheduled care'],
      stem: {
        name: 'Musa (parents present)', age: '18 months · male',
        pmh: ['First febrile convulsion this morning (~2 min, generalised, self-terminating)', 'Otitis media diagnosed yesterday; now alert, playing, feeding', 'Assessed earlier; neurologically normal'],
        meds: ['Paracetamol; otitis media management'],
        allergy: 'NKDA',
        recent: '⚠ Parents traumatised; terrified of epilepsy/brain damage and recurrence; mother "can\u2019t stop shaking".',
        reason: 'Video consultation — reassurance after a first febrile convulsion.'
      },
      timeMap: [
        { t:'0–2',  h:'Trauma first',        d:'"I thought he was dying." Acknowledge the terror and that she did nothing wrong, before any explanation. Pace to her distress.' },
        { t:'2–4',  h:'The reassurance',      d:'Simple febrile convulsion: common (~1 in 20), benign, NOT brain damage, NOT epilepsy. Most outgrow by ~5\u20136 years.' },
        { t:'4–6',  h:'Lift the guilt',       d:'Antipyretics do NOT prevent febrile convulsions — nothing she did or didn\u2019t do caused it. Correct the myth explicitly.' },
        { t:'6–9',  h:'Give her control',      d:'Recurrence first aid: protect, don\u2019t restrain/nothing in mouth, recovery position after, TIME it, 999 if >5 min/2nd in 24h/incomplete recovery. Most stop in minutes.' },
        { t:'9–12', h:'Support + safety-net',  d:'Written info; keep treating the ear infection; meningitis red flags; it\u2019s okay not to sleep for a few nights; follow up if trauma persists. "He\u2019s absolutely fine."' }
      ],
      wordPics: {
        fail: 'Leads with clinical facts at a traumatised parent; leaves the epilepsy/brain-damage fears half-answered; reinforces (or fails to correct) the antipyretic-prevention guilt; gives no concrete recurrence first aid, so she leaves terrified and hypervigilant.',
        pass: 'Confirms a simple febrile convulsion, reassures on epilepsy/brain damage, gives recurrence first aid and a safety-net, and acknowledges the fear.',
        exc:  'Responds to the trauma first and validates the "I thought he was dying" experience; reassures clearly on the benign nature (not brain damage, not epilepsy, outgrown by ~5\u20136); explicitly lifts the antipyretic-prevention guilt; hands back control with concrete recurrence first aid and 999 criteria; and supports the hypervigilance with written info and follow-up.'
      },
      avoid: [
        { dont:'"It was a febrile convulsion — they\u2019re common, so there\u2019s nothing to worry about."', instead:'"What you saw was terrifying and it\u2019s okay that you\u2019re shaking. It was a febrile convulsion — common and benign — and crucially it\u2019s not brain damage and not epilepsy."', why:'Jumping to "nothing to worry about" without acknowledging the trauma dismisses the parent and doesn\u2019t land.' },
        { dont:'"Make sure you keep his fever down with Calpol to stop it happening again."', instead:'"Calpol helps him feel comfortable but it does NOT prevent these convulsions — and nothing you did caused this. Please don\u2019t carry that guilt."', why:'The antipyretic-prevention myth fuels parental self-blame and false expectations; it must be corrected.' },
        { dont:'"If it happens again just bring him straight to A&E."', instead:'"If it happens again: protect him, don\u2019t hold him down or put anything in his mouth, roll him on his side after, and time it — call 999 if it lasts over five minutes, happens twice in a day, or he doesn\u2019t come round. Most stop on their own."', why:'Vague advice leaves the parent powerless; concrete first aid and clear 999 criteria replace terror with control.' }
      ]
    }
  });

})();
