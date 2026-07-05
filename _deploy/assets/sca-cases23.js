/* ============================================================
   Reasoning GP — Case Library batch 23: "Joints, bones & connective tissue"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   Emergencies: septic arthritis; GCA (sight-threatening); cauda equina.
   No NG12 cancer link applies to these presentations (correctly omitted;
   the myeloma/back-pain 2WW picture is covered separately in Results).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases22.js.
   ============================================================ */

(function(){

  /* ============ 85. TELEPHONE — Hot swollen knee: septic arthritis ============ */
  const c85 = {
    id:'septic-arthritis', title:'"My knee\u2019s blown up — it\u2019s just my arthritis"', type:'telephone', duration:12,
    meta:{ age:67, sex:'M', setting:'Telephone — acutely hot, swollen, painful knee.', system:'Urgent / Septic arthritis' },
    brief:'Mr Stan Whitcombe, 67, retired joiner. Rings about his right knee, which over ~36 hours has become hot, swollen, red and so painful he can\u2019t bear weight or bend it. Known OA both knees; had a steroid joint injection 10 days ago. On the call he feels "a bit shivery and rough". T2DM, on metformin. Wants stronger painkillers and to "wait it out". Minimises the systemic upset. PMH: OA, T2DM. Meds: metformin, occasional ibuprofen.',
    script:{
      opening:'"Sorry to ring — it\u2019s my dodgy knee again, the arthritis one. It\u2019s blown up like a balloon over the last day or so, red hot and I can\u2019t put any weight on it. I had one of those steroid injections in it last week. I just need some stronger painkillers really, and I\u2019ll rest it and wait for it to settle like it usually does. Don\u2019t want to make a fuss over a bad knee."',
      facts:[
        { topic:'The joint',           text:'If explored: a SINGLE knee, acutely HOT, SWOLLEN, RED, exquisitely painful, unable to weight-bear or move it — over ~36 hours. This monoarticular, hot, acutely painful joint is septic arthritis until proven otherwise — a joint-destroying emergency.' },
        { topic:'The risk factors',     text:'On questioning: a STEROID JOINT INJECTION 10 days ago (direct portal for infection), DIABETES (immunocompromise), age, pre-existing joint disease — all major risk factors for septic arthritis. He frames the injection as reassuring ("it\u2019s been seen to") rather than a risk.' },
        { topic:'The systemic clue',    text:'If asked: feeling shivery, rough, possibly feverish; hasn\u2019t checked his temperature; sugars "all over the place". Systemic upset raises sepsis concern. He minimises all of this as "just feeling run down with the pain".' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA — the "don\u2019t want to make a fuss / wait it out" is partly stoicism and partly FEAR of hospital: his wife was recently admitted and died in hospital after a fall, and he is frightened of going in himself ("people don\u2019t come out"). He is downplaying genuinely emergency features to stay home. The grief and fear must be heard, or he won\u2019t go.' },
        { topic:'What he wants',        text:'Officially: stronger painkillers and to wait it out at home. What he needs: recognition that a hot, swollen, non-weight-bearing single joint (post-injection, diabetic, systemically unwell) is a septic-arthritis emergency requiring same-day hospital assessment for joint aspiration — with his hospital fear and grief handled so he agrees to go.' },
      ],
      ice:{
        ideas:'It\u2019s just a bad flare of his knee arthritis; painkillers and rest will settle it.',
        concerns:'HIDDEN AGENDA — fear of hospital after his wife died there following an admission ("people don\u2019t come out"); he\u2019s minimising emergency features to avoid going in, framing the recent injection as reassurance rather than a risk.',
        expectations:'Stronger painkillers to wait it out at home. What he actually needs: urgent same-day hospital assessment for possible septic arthritis (joint aspiration), with his hospital fear and grief addressed.'
      },
      cues:['Single hot, swollen, red, non-weight-bearing joint over ~36h — septic arthritis until proven otherwise; not "just arthritis".','Steroid injection 10 days ago + diabetes + feeling shivery — stacked risk factors and systemic upset.','"Don\u2019t want to make a fuss / wait it out" — hospital fear (wife died there) driving dangerous minimisation.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises a SINGLE acutely hot, swollen, red, painful joint with inability to weight-bear as SEPTIC ARTHRITIS until proven otherwise — and does NOT accept the "just an arthritis flare" framing or prescribe painkillers to wait it out' },
      { dom:'tasks', text:'Weights the major risk factors: recent intra-articular STEROID INJECTION (portal of entry), DIABETES (immunocompromise), age and pre-existing joint disease — and recognises the recent injection raises, not lowers, concern' },
      { dom:'tasks', text:'Screens for systemic infection/sepsis (fever, rigors, malaise, deranged glucose) and recognises that septic arthritis can be present even without florid systemic features; does not require fever to act' },
      { dom:'tasks', text:'Arranges URGENT same-day hospital assessment (acute/orthopaedics/ED) for joint ASPIRATION (before antibiotics where possible) and management — recognising septic arthritis is a joint-destroying emergency that cannot be diagnosed or excluded by phone' },
      { dom:'tasks', text:'Considers the differential without false reassurance (gout/pseudogout, reactive, crystal flare) but knows that septic arthritis MUST be excluded by aspiration first — a crystal/OA history does not exclude infection (they can coexist)' },
      { dom:'rto',   text:'Hears the hospital fear and the grief about his wife, and addresses them with compassion — using them to bring him TO assessment rather than dismissing or overriding him' },
      { dom:'rto',   text:'Conveys urgency clearly without panic, and does not collude with "wait it out"; explains why same-day matters (a joint can be destroyed in days, sepsis risk)' },
      { dom:'gs',    text:'Safety-nets and acts: arranges the same-day pathway and confirms he will go; what to watch (worsening, high fever, confusion → 999); does not give a prescription-and-wait plan; documents and follows up to ensure he was seen' },
    ],
    worked:[
      { lbl:'Refuse "just arthritis"', txt:'"I\u2019m really glad you rang, Stan — but I have to be honest, because this matters: a knee that\u2019s suddenly hot, red, swollen and that you can\u2019t weight-bear on, all in a day or so, isn\u2019t a normal arthritis flare. That picture can mean an infection IN the joint, and that\u2019s something we treat as an emergency, not something to wait out."' },
      { lbl:'Name the injection risk', txt:'"And the steroid injection last week — I know it feels like the knee\u2019s \u2018been seen to\u2019, but actually that\u2019s one of the things that makes me MORE concerned, because any injection into a joint can occasionally let infection in. With your diabetes on top, your body\u2019s less able to fight it. So those two things push me towards getting it checked today, not reassuring you."' },
      { lbl:'Ask about sepsis',       txt:'"You said you feel shivery and rough — have you been hot and cold, sweaty, any shaking chills? Have you taken your temperature? \u2026 Feeling like that, with the knee, tells me the infection might be affecting more than just the joint, which is another reason this can\u2019t wait."' },
      { lbl:'Hear the real fear',     txt:'"Can I gently say something? You\u2019ve said twice you don\u2019t want to make a fuss or go in. After what happened to your wife in hospital, I completely understand why the thought of going is frightening \u2014 that fear makes total sense. But I\u2019d be failing you if I let that stop me being honest: this is exactly the kind of thing where going in quickly is what protects you."' },
      { lbl:'Why same-day matters',   txt:'"Here\u2019s the thing about an infected joint: left even a couple of days, it can damage the knee permanently, and the infection can spread. The hospital will take a sample of fluid from the joint with a needle \u2014 that\u2019s how they tell infection from a flare \u2014 and treat it fast if needed. That\u2019s why it\u2019s today, not waiting to see."' },
      { lbl:'Act + safety-net',       txt:'"So I\u2019m going to arrange for you to be seen at the hospital today \u2014 I\u2019ll sort the referral so you\u2019re expected. Is there someone who can take you, or shall I help with transport? Keep the leg rested and don\u2019t eat in case they need to do anything. If you become more unwell \u2014 high fever, shaking, confused \u2014 that\u2019s a 999 call. I\u2019ll check you got seen. You rang not wanting a fuss; going today is how I keep your knee, and you, safe."' },
    ],
    learning:'A single, acutely hot, swollen, red, painful joint with inability to weight-bear is septic arthritis until proven otherwise — a joint-destroying emergency that cannot be diagnosed or excluded by phone and must NOT be managed as "just an arthritis flare" with painkillers. The risk factors here stack damningly: a recent intra-articular steroid injection (a portal of entry that raises, not lowers, concern), diabetes (immunocompromise), age and pre-existing joint disease; and systemic upset (shivery, feverish, deranged glucose) raises sepsis concern — though septic arthritis can be present without florid fever. The action is urgent same-day hospital assessment for joint aspiration (ideally before antibiotics), recognising that a crystal/OA history does not exclude infection (they coexist). The examinable hidden agenda is hospital fear driven by grief — his wife died after a hospital admission — making him minimise emergency features to stay home. Hear the fear and grief with compassion and use them to bring him to assessment, convey urgency without panic, refuse "wait it out", and confirm he goes.',
    knowledge:{
      guideline:'BSR/BOA septic arthritis · CKS acute monoarthritis · NICE NG51 sepsis',
      points:[
        { h:'Hot acute monoarthritis = septic until excluded', t:'A single acutely hot, swollen, painful joint (especially with inability to weight-bear) is septic arthritis until proven otherwise. It is a medical emergency: untreated, it destroys the joint within days and carries significant mortality. Diagnosis requires urgent joint aspiration (synovial fluid for urgent Gram stain, culture, crystals, cell count) — ideally before antibiotics.' },
        { h:'Risk factors raise the stakes', t:'Recent intra-articular injection or joint surgery, pre-existing joint disease (RA/OA), diabetes and immunosuppression, prosthetic joint, skin breaks/cellulitis, IV drug use, and age. A recent steroid injection is a portal for infection — it heightens, not allays, concern.' },
        { h:'Don\u2019t rely on systemic features', t:'Fever and raised inflammatory markers support the diagnosis but their absence does NOT exclude it. Screen for sepsis (NG51), but act on the joint picture and risk factors regardless of how systemically well the patient seems.' },
        { h:'Crystals don\u2019t exclude infection', t:'Gout/pseudogout and septic arthritis can coexist; a crystal or OA history does not rule out infection. Aspiration is required to distinguish and to exclude sepsis — never attribute a hot joint to a flare without it when red flags/risk factors are present.' },
        { h:'Act same-day', t:'Urgent same-day referral to acute/orthopaedic services for aspiration and management (IV antibiotics, washout/drainage as indicated). Do not prescribe analgesia and "wait it out" in primary care. Prosthetic-joint infection needs orthopaedic involvement.' },
        { h:'The patient\u2019s fear', t:'Hospital avoidance (often grief- or trauma-driven) leads to dangerous minimisation. Surface and validate the fear, then use it to bring the patient TO assessment with honesty about why same-day matters (joint destruction, sepsis).' },
        { h:'Never do', t:'Never label a hot, non-weight-bearing single joint as "just a flare"; never treat with analgesia/wait-and-see; never be reassured by a recent injection or by absence of fever; never let crystal/OA history exclude infection; never let hospital fear defer same-day aspiration.' },
        { h:'Safety-net & action', t:'Same-day hospital assessment for aspiration; nil by mouth in case of intervention; sepsis red flags (high fever, rigors, confusion) → 999; arrange transport; confirm attendance and follow up.' }
      ]
    }
  };

  /* ============ 86. TELEPHONE — PMR with the GCA (sight-threatening) warning ============ */
  const c86 = {
    id:'pmr-gca', title:'"Stiff every morning — and now this headache"', type:'telephone', duration:12,
    meta:{ age:72, sex:'F', setting:'Telephone — shoulder/hip girdle stiffness, new headache.', system:'Rheumatology / PMR & GCA' },
    brief:'Mrs Eleanor Vance, 72. ~6 weeks of severe shoulder- and hip-girdle pain and morning stiffness lasting hours, struggling to get out of bed / lift her arms. Rings for "something for the stiffness" — sounds like polymyalgia rheumatica. On direct questioning she mentions, in passing, a new one-sided headache and tender scalp this week, and aching in her jaw when she chews. No visual symptoms YET. PMH: hypertension. Meds: amlodipine. Wants a steroid she\u2019s read helps.',
    script:{
      opening:'"Hello doctor. I\u2019ve been so stiff and sore in my shoulders and hips for weeks now \u2014 mornings are dreadful, I can barely lift my arms to brush my hair or get out of bed, it takes a couple of hours to loosen up. My friend had something similar, polymyalgia, and steroids sorted her right out. Could I have a course of those? Oh, and I\u2019ve had a bit of a headache this week but that\u2019s neither here nor there."',
      facts:[
        { topic:'The PMR picture',     text:'If explored: bilateral shoulder- and pelvic-girdle pain and prolonged morning stiffness (>45 min, often hours) for ~6 weeks, age >50, difficulty with overhead tasks and rising — a classic polymyalgia rheumatica presentation, typically steroid-responsive.' },
        { topic:'The GCA red flags — KEY', text:'CRITICAL, on direct questioning (she dismisses these): NEW unilateral headache, SCALP TENDERNESS (hurts to brush hair / rest head on pillow), and JAW CLAUDICATION (aching in the jaw on chewing). These are giant cell arteritis features. GCA can cause sudden, irreversible BLINDNESS — it is a medical emergency. ~15\u201320% of PMR patients have or develop GCA.' },
        { topic:'No visual loss YET',    text:'If asked: no visual loss, blurring or double vision so far — but this is the window to prevent it. Visual symptoms (amaurosis, diplopia) would be a same-day sight-threatening emergency. She treats the absence of visual symptoms as reassurance; it is the chance to act before they occur.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA — she is downplaying the headache/jaw symptoms partly because she\u2019s fixed on the PMR/steroid answer her friend had, and partly STEROID FEAR: she\u2019s heard steroids cause weight gain, brittle bones, "moon face" and is privately reluctant to take a long course, hoping for a short one. She also cares for her husband with dementia and can\u2019t afford to be unwell. The jaw/scalp clues nearly go unspoken.' },
        { topic:'What she wants',       text:'Officially: a short steroid course for the stiffness. What she needs: recognition that the new headache + scalp tenderness + jaw claudication signal GCA — a sight-threatening emergency needing HIGH-dose steroids immediately and same-day specialist referral — plus honest steroid counselling and carer support.' },
      ],
      ice:{
        ideas:'She has polymyalgia like her friend; a course of steroids will fix the stiffness.',
        concerns:'HIDDEN AGENDA — steroid fear (weight gain, bones, "moon face") so she\u2019s hoping for a short course; and she\u2019s a carer for her husband with dementia and can\u2019t afford to be ill, so she\u2019s minimising the headache/jaw symptoms.',
        expectations:'A short steroid course for the stiffness. What she actually needs: recognition of GCA red flags, urgent HIGH-dose steroids and same-day referral to prevent blindness, plus honest steroid counselling and carer support.'
      },
      cues:['Girdle pain + prolonged morning stiffness >45min at 72 — classic PMR.','"A headache, but that\u2019s neither here nor there" + scalp tenderness + jaw ache on chewing — GCA red flags she\u2019s dismissing; sight-threatening.','Fixed on a short steroid course / steroid fear — and a carer who can\u2019t afford to be ill; the reasons she\u2019s minimising.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the PMR picture (bilateral girdle pain, prolonged morning stiffness >45 min, age >50) AND — critically — actively asks about and identifies the GIANT CELL ARTERITIS red flags: new unilateral headache, scalp tenderness, and jaw claudication' },
      { dom:'tasks', text:'Recognises GCA as a SIGHT-THREATENING EMERGENCY: explains it can cause sudden irreversible blindness, and that the absence of visual loss now is the window to PREVENT it, not reassurance' },
      { dom:'tasks', text:'Starts HIGH-dose corticosteroid IMMEDIATELY for suspected GCA (e.g. prednisolone ~40\u201360 mg daily — higher/IV if any visual symptoms) WITHOUT waiting for tests, and arranges urgent same-day specialist referral (rheumatology / ophthalmology if visual) and urgent bloods (ESR/CRP) + temporal artery biopsy/US pathway — treatment must not be delayed for investigations' },
      { dom:'tasks', text:'Distinguishes from isolated PMR (which uses lower-dose steroids, e.g. ~15 mg) and knows that visual symptoms (amaurosis fugax, diplopia, visual loss) escalate to a SAME-DAY ophthalmology emergency with IV steroids' },
      { dom:'tasks', text:'Counsels steroids honestly and safely: necessity here (sight preservation) vs the patient\u2019s fears, the prolonged taper GCA requires, and steroid safety-netting (bone protection, PPI, glucose, steroid card, sick-day rules, not stopping abruptly)' },
      { dom:'rto',   text:'Picks up the dismissed headache/jaw clues rather than accepting the PMR self-diagnosis, and explores them actively; addresses the steroid fear and the carer pressure with empathy so she accepts urgent treatment' },
      { dom:'rto',   text:'Conveys the seriousness (possible blindness) without inducing panic, and supports her as a carer — recognising she needs to stay well for her husband, which is a reason TO treat, not avoid it' },
      { dom:'gs',    text:'Safety-nets emphatically: start steroids now; if ANY visual symptoms (loss, blurring, double vision) develop → same-day eye emergency/999; urgent referral and bloods arranged; steroid safety-net and carer support; documents and follows up' },
    ],
    worked:[
      { lbl:'Confirm PMR, then pivot', txt:'"You\u2019re right that the shoulder and hip stiffness sounds like polymyalgia, and yes, steroids help that hugely. But before I prescribe \u2014 you mentioned a headache as if it were nothing, and I need to take that seriously. Can I ask: is the headache on one side? Is your scalp tender, say when you brush your hair? And does your jaw ache when you chew? \u2026"' },
      { lbl:'Name the danger',        txt:'"Thank you \u2014 those answers matter a great deal. Polymyalgia sometimes comes with a related condition affecting the blood vessels around the temple, called giant cell arteritis. The reason I can\u2019t treat it as \u2018just stiffness\u2019 is that, untreated, it can cause sudden loss of sight \u2014 and that can be permanent. The fact you can still see fine is exactly why we act NOW, to keep it that way."' },
      { lbl:'Treat immediately',    txt:'"So I\u2019m not going to wait for tests. I want you to start a higher dose of steroid today \u2014 straight away \u2014 because protecting your sight can\u2019t wait for blood results or scans. I\u2019ll arrange urgent blood tests and a same-day specialist review as well, but the steroid starts now. This is the one situation where we treat first and confirm after."' },
      { lbl:'The eye safety-net',   txt:'"And this is the most important thing I\u2019ll say: if you get ANY change in your vision \u2014 blurring, loss, a curtain coming down, double vision \u2014 that is a 999 / eye-emergency, the same day, no waiting. Don\u2019t \u2018see how it goes\u2019 with your eyes, ever, with this."' },
      { lbl:'Address steroid fear', txt:'"I know steroids worry people \u2014 the weight, the bones, the moon face \u2014 and I won\u2019t pretend there are no downsides on a longer course. But weigh that against your eyesight: this is a clear case where the benefit massively outweighs the risk. I\u2019ll protect your bones and stomach, give you a steroid card, and we\u2019ll bring the dose down slowly and safely over time. You won\u2019t be on high doses forever."' },
      { lbl:'Carer + safety-net',   txt:'"You also told me you look after your husband \u2014 which is even more reason to keep yourself well and your sight intact, so let\u2019s treat this properly. I\u2019ll sort the urgent referral and bloods today, and some support so you\u2019re not doing it all alone. Start the steroid now, never stop it suddenly, and ring 999 for any visual change. I\u2019ll follow this up closely with you."' },
    ],
    learning:'Polymyalgia rheumatica (bilateral girdle pain, prolonged morning stiffness, age >50, steroid-responsive) carries a sight-threatening companion: giant cell arteritis. The examinable skill is to actively ask about and act on the GCA red flags — new unilateral headache, scalp tenderness, jaw claudication (and visual symptoms) — even when the patient dismisses them, because GCA can cause sudden, irreversible blindness. The absence of visual loss now is the window to PREVENT it. Suspected GCA is treated with HIGH-dose corticosteroid IMMEDIATELY (≈40\u201360 mg prednisolone, higher/IV if any visual symptoms) WITHOUT waiting for ESR/CRP or temporal artery biopsy, plus urgent same-day specialist referral; any visual symptom is a same-day ophthalmology emergency. This contrasts with isolated PMR (lower-dose steroids ≈15 mg). The hidden agenda is steroid fear (hoping for a short course) and carer pressure driving her to minimise the headache/jaw clues; counsel steroids honestly (necessity for sight, prolonged taper, bone/GI protection, steroid card, sick-day rules), support her as a carer, and safety-net visual symptoms emphatically.',
    knowledge:{
      guideline:'BSR giant cell arteritis & PMR guidelines · NICE CKS GCA / PMR',
      points:[
        { h:'Recognise PMR', t:'Age >50, bilateral shoulder and/or pelvic girdle pain with morning stiffness >45 minutes, often abrupt onset, raised ESR/CRP, dramatic steroid response. Treat isolated PMR with prednisolone ~15 mg daily and a slow taper; reassess the diagnosis if poorly responsive.' },
        { h:'Always screen for GCA', t:'~15\u201320% of PMR patients have/ develop giant cell arteritis. Ask every PMR patient about GCA features: new (usually temporal/unilateral) headache, scalp tenderness, jaw (or tongue) claudication, visual symptoms, and systemic features. A prominent temporal artery may be tender/thickened/pulseless.' },
        { h:'GCA is a sight-threatening emergency', t:'Untreated GCA can cause sudden, irreversible visual loss (anterior ischaemic optic neuropathy). The absence of visual symptoms is the window to prevent blindness — not reassurance. Treat on clinical suspicion immediately.' },
        { h:'Treat first, confirm after', t:'Start high-dose corticosteroid at once for suspected GCA: prednisolone ~40\u201360 mg/day (no visual symptoms), and IV methylprednisolone / same-day ophthalmology if any visual symptoms or amaurosis. Do NOT delay steroids for ESR/CRP or temporal artery biopsy/ultrasound — arrange these urgently but treat now. Refer urgently (rheumatology; ophthalmology if visual).' },
        { h:'Steroid safety & honest counselling', t:'GCA needs a prolonged, slowly-tapered course. Provide bone protection (assess fracture risk / bisphosphonate + calcium-vitamin D), gastroprotection, glucose monitoring, a steroid treatment card, sick-day rules, and never stop abruptly. Address steroid fears by weighing them against sight preservation.' },
        { h:'Address the hidden agenda', t:'Patients may minimise GCA clues (fixation on a benign PMR self-diagnosis, steroid fear, caring responsibilities). Elicit the red flags actively, validate the fears, and frame urgent treatment as protecting both sight and the patient\u2019s ability to keep caring for others.' },
        { h:'Never do', t:'Never treat girdle stiffness as PMR without screening for GCA; never wait for tests before starting steroids in suspected GCA; never treat absence of visual loss as reassurance; never under-dose suspected GCA at PMR doses; never omit the visual-symptom emergency safety-net.' },
        { h:'Safety-net & follow-up', t:'Start steroids now; ANY visual change → same-day eye emergency/999; urgent referral + ESR/CRP + biopsy/US pathway; steroid safety-net and bone protection; carer support; close follow-up and structured taper.' }
      ]
    }
  };

  /* ============ 87. TELEPHONE — First gout attack: "the strong ones" + prevention pivot ============ */
  const c87 = {
    id:'gout-flare', title:'"Just give me the strong anti-inflammatories"', type:'telephone', duration:12,
    meta:{ age:49, sex:'M', setting:'Telephone — acute painful big-toe joint.', system:'Rheumatology / Gout' },
    brief:'Mr Tony Briggs, 49, self-employed builder. Rings with a sudden, exquisitely painful, red, swollen left big-toe joint since the early hours — "can\u2019t even have the duvet touch it". Second such attack this year. Wants "the strong anti-inflammatories" and to get back to work. Drinks ~40 units/week, loves red meat, BMI 31, BP a bit high at last check, on no meds. Family history of gout. Doesn\u2019t want "to be put on tablets for life". PMH: nil recorded. Meds: occasional OTC ibuprofen.',
    script:{
      opening:'"Morning doc \u2014 I\u2019ve got the gout again, the big toe, came on in the night and it\u2019s agony, I can\u2019t even put a sock on. I had this a few months back too. I just need you to prescribe me the strong anti-inflammatories so I can get back on site \u2014 I\u2019m self-employed, every day off is money. Just the tablets and I\u2019ll be out of your hair, none of the lifestyle lecture if that\u2019s alright."',
      facts:[
        { topic:'The acute attack',     text:'If explored: rapid-onset (overnight) severe monoarthritis of the first MTP joint, red, hot, swollen, exquisitely tender (allodynia to bedsheets) \u2014 classic acute gout. Second attack this year (recurrent). Need to exclude septic arthritis if atypical, but this is a classic recurrent gout picture.' },
        { topic:'The cardiometabolic picture', text:'On questioning: ~40 units alcohol/week, high purine diet, BMI 31, borderline-high BP, family history of gout. Gout is a flag for cardiovascular/metabolic risk \u2014 an opportunity to assess BP, lipids, glucose and CKD, not just treat the toe.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the "just the tablets, no lecture" deflects from real distress he won\u2019t name: the recurrent attacks are stopping him working (and earning), he\u2019s frightened about money and about "becoming his father", who had terrible gout, ended up barely able to walk, and drank heavily. There\u2019s shame about the drinking and a fear he\u2019s heading the same way. The bravado masks worry.' },
        { topic:'The prevention pivot',  text:'A second attack in a year is the trigger to discuss URATE-LOWERING therapy (allopurinol) \u2014 but he resists "tablets for life". The skill is the acute-relief-now PLUS the prevention conversation, handled so he engages rather than dismissing it.' },
        { topic:'What he wants',        text:'Officially: strong anti-inflammatories and no lecture. What he needs: effective acute treatment AND a non-judgemental prevention conversation (urate-lowering therapy offered for recurrent gout, alcohol/diet support, CVD risk check), framed around keeping him working and not becoming his father.' },
      ],
      ice:{
        ideas:'Gout is just a painful toe that needs strong anti-inflammatories each time it flares.',
        concerns:'HIDDEN AGENDA \u2014 recurrent attacks threatening his livelihood, shame about his drinking, and fear of "becoming his father" who was disabled by gout and drank heavily; the bravado masks money and health worry.',
        expectations:'Strong anti-inflammatories and no lifestyle lecture. What he actually needs: effective acute treatment plus a non-judgemental prevention conversation (urate-lowering therapy, alcohol/diet, CVD risk), framed around staying able to work.'
      },
      cues:['Sudden severe red hot first-MTP monoarthritis, second attack this year \u2014 recurrent gout; consider the prevention pivot.','"Just the tablets, no lecture" \u2014 deflection; livelihood fear and shame about drinking underneath.','Family history / "becoming his father" \u2014 the worry driving the bravado; an opening for prevention if handled kindly.']
    },
    checkpoints:[
      { dom:'tasks', text:'Treats the ACUTE attack effectively and safely: offers an NSAID (with gastroprotection) OR colchicine OR a short oral steroid course \u2014 chosen with regard to his comorbidities (BP, renal, GI) \u2014 and gives clear dosing and rest advice; does not simply hand over "strong ones" without tailoring' },
      { dom:'tasks', text:'Considers and excludes SEPTIC ARTHRITIS where features are atypical (single hot joint) \u2014 but recognises this as a classic recurrent gout picture; if any diagnostic doubt or systemic upset, escalates for aspiration' },
      { dom:'tasks', text:'Makes the PREVENTION PIVOT: recognises a second attack in a year (recurrent gout) as an indication to OFFER urate-lowering therapy (allopurinol, titrated to a target urate; start after the acute flare settles, with flare prophylaxis cover) \u2014 framed as a choice, not imposed' },
      { dom:'tasks', text:'Uses gout as a CARDIOMETABOLIC flag: checks/plans BP, lipids/QRISK, HbA1c, renal function and urate level; addresses alcohol and diet as modifiable factors; recognises the cardiovascular/CKD associations of gout' },
      { dom:'tasks', text:'Addresses alcohol and diet WITHOUT a shaming lecture: offers support and honest information (alcohol, especially beer, and high-purine intake drive attacks), framed around his goals (working, not becoming his father)' },
      { dom:'rto',   text:'Hears the bravado as worry and gently surfaces the livelihood fear and the father story; does not collude with "just the tablets" by ignoring prevention, nor lecture him into disengagement' },
      { dom:'rto',   text:'Handles the drinking shame with compassion, and frames urate-lowering therapy and lifestyle change as the route to staying on the tools, not as moralising' },
      { dom:'gs',    text:'Safety-nets and follows up: acute-treatment advice and what to do if no better / systemic features (?septic), arranges the cardiometabolic checks and a follow-up to discuss/start urate-lowering therapy, alcohol support, and urate monitoring \u2014 a plan, not just a prescription' },
    ],
    worked:[
      { lbl:'Relieve the pain first', txt:'"Right, first things first \u2014 let\u2019s get that toe sorted, because gout is genuinely one of the most painful things going. I\u2019ll get you something strong to settle it fast. Given your blood pressure and stomach, I want to pick the safest option for you rather than just any anti-inflammatory \u2014 give me thirty seconds to do that properly."' },
      { lbl:'The deal, gently',     txt:'"I heard you say \u2018no lecture\u2019 \u2014 and I\u2019m not going to lecture you. But this is your second attack this year, and I\u2019d be doing you a disservice if I just kept patching the toe each time it flares. Can I have two minutes to talk about stopping them coming back? You can take it or leave it."' },
      { lbl:'Surface the real worry', txt:'"Can I ask \u2014 these attacks, they\u2019re costing you work, aren\u2019t they? \u2026 And you mentioned having it like your dad. How was his? \u2026 Ah. So part of this is a worry you\u2019re heading the same way \u2014 the toes, the walking, all of it. That\u2019s not a small thing, and it\u2019s exactly what we can change."' },
      { lbl:'The prevention pivot', txt:'"Here\u2019s the good news: there\u2019s a daily tablet, allopurinol, that lowers the uric acid causing this and, taken regularly, stops the attacks almost completely. I know you said no tablets for life \u2014 but think of it as the thing that keeps you ON the tools, not off them, and stops you going the way your dad did. We start it once this flare settles, with a bit of cover so it doesn\u2019t trigger one."' },
      { lbl:'Lifestyle, no shame',  txt:'"On the drink and the diet \u2014 no judgement, genuinely. But honestly, the alcohol, especially beer, is one of the biggest triggers, and cutting down would help the gout AND your blood pressure. I\u2019m not telling you to stop everything; I\u2019m offering to help you cut back in a way that fits your life, if you want it."' },
      { lbl:'Whole-person + net',   txt:'"One more thing: gout often travels with raised blood pressure, sugar and cholesterol, so while we\u2019re here let\u2019s check those \u2014 it\u2019s a chance to look after your heart, not just your toe. Take the tablets for the pain, rest the foot. If it gets worse, you feel feverish, or it\u2019s not settling in a few days, ring back \u2014 occasionally a hot joint is an infection, not gout. Come and see me to start the prevention and do those checks. You came for strong tablets; what I\u2019m offering is never having this morning again."' },
    ],
    learning:'Acute gout (sudden severe red, hot, swollen first-MTP monoarthritis, allodynia to bedsheets) is treated promptly with an NSAID + gastroprotection, colchicine, or a short steroid course — tailored to comorbidities (BP, renal, GI) rather than handing over generic "strong ones" — while staying alert to septic arthritis if the picture is atypical or systemic. The examinable move is the PREVENTION PIVOT: a second attack within a year is an indication to OFFER urate-lowering therapy (allopurinol, started after the flare settles, titrated to a urate target, with flare prophylaxis cover), and to use gout as a cardiometabolic flag (BP, lipids/QRISK, HbA1c, renal function, alcohol, weight). The hidden agenda is that "just the tablets, no lecture" masks livelihood fear and shame about drinking, and a dread of "becoming his father" who was disabled by gout. Surface that gently, frame urate-lowering therapy and lifestyle change as the route to staying on the tools, address alcohol/diet without moralising, and safety-net (including the septic-joint caveat) with follow-up to start prevention and do the metabolic checks.',
    knowledge:{
      guideline:'NICE NG219 gout · BSR gout guideline · CKS gout',
      points:[
        { h:'Treat the acute attack', t:'First-line acute options: an NSAID (with PPI cover), colchicine (lower-dose regimens reduce toxicity), or a short course of oral corticosteroid — choose by comorbidity (avoid NSAIDs in CKD/PUD/heart failure; colchicine caution in renal impairment). Rest, ice and analgesia. Treat early; continue urate-lowering therapy through a flare if already established.' },
        { h:'Exclude septic arthritis', t:'A single hot, acutely painful joint can be septic arthritis. With systemic upset, atypical features or diagnostic doubt, arrange urgent aspiration rather than assuming gout — especially in the immunosuppressed or those with prosthetic joints.' },
        { h:'The prevention pivot (urate-lowering therapy)', t:'Offer urate-lowering therapy (first-line allopurinol; alternative febuxostat) to patients with recurrent flares (≥2/year), tophi, joint damage, CKD, or urate stones. Start ~2\u20134 weeks after a flare settles, "start low, go slow", titrate to a target serum urate (<360, or <300 µmol/L if tophi/severe), with NSAID/colchicine flare prophylaxis during initiation. Don\u2019t stop ULT during an acute attack.' },
        { h:'Gout as a cardiometabolic flag', t:'Gout strongly associates with hypertension, obesity, dyslipidaemia, type 2 diabetes, CKD and cardiovascular disease. Use the consultation to check BP, lipids/QRISK, HbA1c, renal function and serum urate, and to address modifiable risk.' },
        { h:'Lifestyle without shaming', t:'Alcohol (especially beer/spirits), high-purine foods (red meat, seafood, offal), sugary drinks, and obesity drive attacks. Offer support and honest information framed around the patient\u2019s goals (staying able to work), not moralising — shame causes disengagement.' },
        { h:'Address the hidden agenda', t:'Bravado ("just the tablets, no lecture") often masks livelihood fear, shame about drinking, and dread of inherited disease. Surface it, and frame ULT/lifestyle change as the route to control and continued work rather than a verdict.' },
        { h:'Never do', t:'Never hand over generic "strong" NSAIDs without regard to comorbidity; never miss possible septic arthritis; never treat recurrent gout without offering prevention; never deliver a shaming lifestyle lecture; never ignore the cardiometabolic risk gout signals.' },
        { h:'Safety-net & follow-up', t:'Acute-treatment and septic-joint safety-net (fever/worsening → review/aspiration); arrange cardiometabolic checks and urate level; follow-up to start/ titrate ULT with prophylaxis; alcohol/diet support; urate monitoring to target.' }
      ]
    }
  };

  /* ============ 88. VIDEO — Inflammatory vs mechanical back pain + cauda equina ============ */
  const c88 = {
    id:'back-inflammatory', title:'"It\u2019s just my back from the gym"', type:'video', duration:12,
    meta:{ age:28, sex:'M', setting:'Video consultation — chronic low back pain in a young adult.', system:'Rheumatology / Inflammatory back pain & red flags' },
    brief:'Mr Aaron Kelly, 28, warehouse worker and keen gym-goer. ~9 months of low back and buttock pain he blames on heavy lifting/the gym. On the call: pain and stiffness WORSE in the morning (>30\u201345 min stiffness) and at night (wakes him in the second half of the night), BETTER with movement/exercise and worse with rest. Alternating buttock pain. He minimises it as "mechanical". If asked: an episode of a painful red eye months ago (?uveitis). No current red-flag neurology. PMH: nil. Meds: OTC ibuprofen.',
    script:{
      opening:'"Hi \u2014 it\u2019s just my back really, I\u2019ve had it for the best part of a year. I lift heavy at work and I train a lot, so I\u2019m sure I\u2019ve just done it in. It\u2019s annoying but I push through. I think I just need a referral for some physio or maybe a scan to check I haven\u2019t slipped a disc. The weird thing is it\u2019s actually worse when I rest and loosens up once I get moving \u2014 but that\u2019s just stiffness, isn\u2019t it?"',
      facts:[
        { topic:'The inflammatory pattern', text:'If explored: this is INFLAMMATORY back pain, not mechanical \u2014 onset <40, insidious, >3 months, morning stiffness >30 min, night pain (waking in the second half of the night), improvement WITH exercise and worsening with rest, alternating buttock pain. This pattern suggests axial spondyloarthritis (e.g. ankylosing spondylitis), not a gym injury.' },
        { topic:'The extra-articular clue', text:'On direct questioning: a past painful RED EYE (possible anterior uveitis) \u2014 an extra-articular feature of spondyloarthritis. May also have a family history of "arthritis of the spine" or psoriasis/IBD if asked. He dismisses the eye as unrelated.' },
        { topic:'The cauda equina screen \u2014 MUST ASK', text:'CRITICAL safety screen (currently negative but must be asked): no saddle anaesthesia, no bladder/bowel dysfunction (retention/incontinence), no bilateral leg weakness/numbness, no progressive neurological deficit. These would be a SURGICAL EMERGENCY (cauda equina syndrome) needing emergency MRI/referral. Asking and documenting this is essential even when the story is inflammatory.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 his "it\u2019s just mechanical, I push through" masks anxiety he won\u2019t voice: the night pain and fatigue are wearing him down, affecting his mood and his relationship, and he\u2019s quietly frightened it\u2019s "something serious / I\u2019ll end up disabled" (an uncle has bad ankylosing spondylitis and is stooped). He\u2019s also worried about his physically demanding job and being unable to work. He downplays to avoid bad news.' },
        { topic:'What he wants',        text:'Officially: physio or a scan for a presumed disc/mechanical injury. What he needs: recognition of the inflammatory back-pain pattern → appropriate work-up (inflammatory markers, HLA-B27, imaging) and rheumatology referral for suspected axial SpA, a documented cauda equina screen, and his fears about disability and work addressed.' },
      ],
      ice:{
        ideas:'It\u2019s a mechanical back injury from lifting and the gym; he needs physio or a scan for a disc.',
        concerns:'HIDDEN AGENDA \u2014 the night pain and fatigue are grinding him down (mood, relationship), and he\u2019s quietly frightened it\u2019s "something serious / I\u2019ll end up disabled" like an uncle with ankylosing spondylitis, and worried about his physical job; he downplays to avoid bad news.',
        expectations:'A physio referral or a scan for a disc. What he actually needs: recognition of inflammatory back pain, the right work-up and rheumatology referral for suspected axial SpA, a cauda equina screen, and his disability/work fears addressed.'
      },
      cues:['Back pain WORSE with rest / BETTER with exercise + night pain + morning stiffness >30min, onset <40 \u2014 inflammatory, not mechanical.','A past painful red eye \u2014 possible uveitis; an extra-articular spondyloarthritis clue he dismisses.','"I push through / just mechanical" \u2014 minimising; fear of disability (uncle with AS) and his physical job underneath.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the INFLAMMATORY back-pain pattern (age <40, insidious onset >3 months, morning stiffness >30 min, night pain, improvement WITH exercise and worse with rest, alternating buttock pain) and does NOT accept the "mechanical/gym injury" self-diagnosis' },
      { dom:'tasks', text:'Performs the CAUDA EQUINA / serious-pathology red-flag screen explicitly: saddle anaesthesia, bladder/bowel dysfunction, bilateral/progressive leg neurology \u2014 and knows these would mandate EMERGENCY MRI/referral (and screens other red flags: weight loss, fever, history of cancer, etc.)' },
      { dom:'tasks', text:'Elicits extra-articular/associated features of spondyloarthritis: uveitis (the past red eye), psoriasis, inflammatory bowel disease, enthesitis, dactylitis, family history, and good response to NSAIDs' },
      { dom:'tasks', text:'Arranges the appropriate work-up and referral: inflammatory markers (ESR/CRP), HLA-B27, and imaging (X-ray sacroiliac joints / MRI for sacroiliitis), and refers to RHEUMATOLOGY for suspected axial spondyloarthritis \u2014 rather than only physio/disc imaging' },
      { dom:'tasks', text:'Manages symptoms and function meanwhile: regular NSAIDs (first-line, with gastroprotection) and exercise/physiotherapy (which genuinely helps inflammatory back pain), explaining the diagnosis is treatable' },
      { dom:'rto',   text:'Hears the minimisation as fear and gently surfaces the disability worry (the uncle with AS) and the impact on mood/relationship/work, rather than accepting "I just push through"' },
      { dom:'rto',   text:'Gives realistic, hopeful information: axial SpA is treatable (NSAIDs, exercise, biologics if needed) and early diagnosis improves outcomes \u2014 countering the "I\u2019ll end up disabled" fear without false reassurance' },
      { dom:'gs',    text:'Safety-nets clearly: cauda equina red flags (saddle numbness, bladder/bowel change, progressive leg weakness) → emergency same-day/A&E; arranges bloods, imaging and rheumatology referral; addresses work and mood; documents the red-flag screen and follows up' },
    ],
    worked:[
      { lbl:'Reframe the pattern',    txt:'"Can I pick up on the thing you called \u2018weird\u2019 \u2014 that it\u2019s worse when you rest and eases when you move? That\u2019s actually really important. A simple mechanical or disc problem is usually the opposite: worse with activity, better with rest. Pain that wakes you in the night and is stiff for ages in the morning but loosens with exercise points to an INFLAMMATORY kind of back problem, which is a different thing entirely \u2014 and one we can treat well."' },
      { lbl:'The safety screen',      txt:'"Before we go further, I need to check a few safety things, and I ask everyone these. Any numbness in the saddle area \u2014 where you\u2019d sit on a bike? Any change in controlling your bladder or bowels, or going numb or weak in both legs? \u2026 Good, none of that. If any of those ever happen, that\u2019s a 999 / A&E emergency the same day, because of the nerves at the base of the spine. Worth you knowing that."' },
      { lbl:'Join the dots',        txt:'"You mentioned a painful red eye a while back \u2014 I don\u2019t think that\u2019s unrelated. This kind of inflammatory back condition can come with eye inflammation, and sometimes psoriasis or gut problems, and it can run in families. Does anyone in the family have arthritis of the spine? \u2026 Your uncle. That fits the picture I\u2019m thinking of."' },
      { lbl:'Surface the real fear',txt:'"Can I gently ask \u2014 watching your uncle, stooped and struggling, has part of you been frightened that\u2019s where this is heading, and that with your job you\u2019d not be able to work? \u2026 That makes complete sense, and I\u2019m really glad you said it. Here\u2019s the important bit: catching this early, like now, is exactly what changes that outcome. The picture for people diagnosed today is very different from your uncle\u2019s generation."' },
      { lbl:'The plan',             txt:'"So rather than just physio for a disc, I want to do this properly: some blood tests, a specific gene test, and the right scans of the lower spine, and refer you to the joint specialists \u2014 rheumatology \u2014 for what we call axial spondyloarthritis. Meanwhile, regular anti-inflammatories and \u2014 counter-intuitively \u2014 keeping up exercise and physio genuinely help this, so don\u2019t stop training, we\u2019ll just guide it."' },
      { lbl:'Hope + safety-net',    txt:'"To be straight: I can\u2019t promise what the tests show, but inflammatory back pain is treatable \u2014 anti-inflammatories, exercise, and if needed there are very effective modern treatments that didn\u2019t exist in your uncle\u2019s day. Early action is on your side. And remember the emergency signs \u2014 saddle numbness, bladder or bowel changes, weak legs \u2014 that\u2019s straight to A&E. Otherwise, let\u2019s get the tests and the referral moving, and I\u2019ll see you to go through them. You came thinking gym injury; what we\u2019re doing is catching something early enough to stay ahead of it."' },
    ],
    learning:'Chronic low back pain in a young adult that is WORSE with rest and BETTER with exercise, with night pain and prolonged morning stiffness, onset <40 and alternating buttock pain, is INFLAMMATORY back pain (suggesting axial spondyloarthritis), not a mechanical/gym injury — and must not be accepted as such. The work-up is inflammatory markers, HLA-B27 and imaging (sacroiliac X-ray/MRI) with rheumatology referral, plus first-line NSAIDs and exercise/physiotherapy (which genuinely help). Extra-articular clues — a past painful red eye (uveitis), psoriasis, IBD, family history — support the diagnosis. Crucially, even when the story is inflammatory, the CAUDA EQUINA red-flag screen must be performed and documented (saddle anaesthesia, bladder/bowel dysfunction, bilateral/progressive leg neurology → emergency MRI/A&E). The hidden agenda is fear masked by "I just push through": dread of disability (an uncle with ankylosing spondylitis), impact on mood/relationship, and worry about a physically demanding job. Surface it, give realistic hope (early diagnosis transforms outcomes; effective treatments exist), and safety-net the cauda equina emergency clearly.',
    knowledge:{
      guideline:'NICE NG65 spondyloarthritis · NICE NG59 low back pain & sciatica · cauda equina emergency guidance',
      points:[
        { h:'Inflammatory vs mechanical pattern', t:'Inflammatory back pain features: onset <40, insidious, duration >3 months, morning stiffness >30 min, night pain (especially second half of night), improvement WITH exercise and NOT with rest, alternating buttock pain, good NSAID response. Mechanical pain is typically worse with activity and better with rest. Recognising the inflammatory pattern is the key pivot.' },
        { h:'Always screen cauda equina / serious pathology', t:'Red flags mandating urgent action: saddle anaesthesia, bladder/bowel dysfunction (retention, incontinence), bilateral or progressive leg weakness/numbness (cauda equina → emergency MRI/A&E same day); plus night sweats/weight loss/fever, history of cancer, IV drug use, immunosuppression, significant trauma, age extremes. Document the screen even when the story is benign/inflammatory.' },
        { h:'Look for spondyloarthritis features', t:'Extra-articular/associated: acute anterior uveitis (painful red eye), psoriasis, inflammatory bowel disease, enthesitis (e.g. Achilles/plantar), dactylitis, peripheral arthritis, family history, and good response to NSAIDs. These support axial SpA.' },
        { h:'Investigate and refer', t:'ESR/CRP, HLA-B27, and imaging (plain X-ray sacroiliac joints; MRI sacroiliac joints for active sacroiliitis when X-ray normal). Refer to rheumatology for suspected axial spondyloarthritis (NG65). Don\u2019t default to disc imaging/physio-only for an inflammatory pattern.' },
        { h:'Manage and give hope', t:'First-line: regular NSAIDs (with gastroprotection) and structured exercise/physiotherapy (genuinely effective in axial SpA). Biologics (anti-TNF/IL-17) for inadequate response under specialist care. Early diagnosis improves outcomes — counter "I\u2019ll end up disabled" fears with realistic optimism.' },
        { h:'Address the hidden agenda', t:'Minimisation ("just mechanical, I push through") often masks fear of disability (a stooped relative with AS), mood/relationship impact and worry about physically demanding work. Surface these, validate them, and frame early diagnosis and modern treatment as changing the trajectory.' },
        { h:'Never do', t:'Never accept a mechanical/gym self-diagnosis when the pattern is inflammatory; never skip the cauda equina red-flag screen; never miss extra-articular clues (uveitis); never default to disc imaging/physio-only; never leave the disability/work fears unaddressed.' },
        { h:'Safety-net & follow-up', t:'Cauda equina red flags (saddle numbness, bladder/bowel change, progressive leg weakness) → same-day A&E; arrange ESR/CRP, HLA-B27, SI imaging and rheumatology referral; NSAIDs + exercise; address work/mood; document the red-flag screen; follow up results.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c85, c86, c87, c88);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'septic-arthritis': {
      ceg: ['Urgent & unscheduled care', 'Older adults'],
      stem: {
        name: 'Stan Whitcombe', age: '67 years · male',
        pmh: ['OA both knees; steroid joint injection 10 days ago', 'Type 2 diabetes (metformin)', 'Right knee: hot, swollen, red, non-weight-bearing over ~36h'],
        meds: ['Metformin', 'Occasional ibuprofen'],
        allergy: 'NKDA',
        recent: '⚠ Feels shivery and rough; sugars "all over". Wants stronger painkillers to wait it out.',
        reason: 'Telephone — acutely hot, swollen, painful knee.'
      },
      timeMap: [
        { t:'0–2',  h:'Refuse "just a flare"', d:'Single hot, swollen, non-weight-bearing joint over 36h = septic arthritis until excluded. Not painkillers-and-wait.' },
        { t:'2–4',  h:'Weight the risks',     d:'Steroid injection 10 days ago (portal in), diabetes (immunocompromise), age. The injection raises, not lowers, concern.' },
        { t:'4–6',  h:'Screen sepsis',         d:'Shivery/feverish/deranged glucose — but absence of fever doesn\u2019t exclude it. Act on the joint + risk factors.' },
        { t:'6–9',  h:'Hear the fear',         d:'Hospital dread after his wife died there. Validate the grief; use it to bring him TO same-day assessment.' },
        { t:'9–12', h:'Same-day + safety-net', d:'Urgent hospital for aspiration; nil by mouth; transport; sepsis red flags → 999; confirm he goes.' }
      ],
      wordPics: {
        fail: 'Accepts "just my arthritis", prescribes stronger painkillers to wait it out; is reassured by the recent injection and the lack of high fever; never surfaces the hospital fear — and a salvageable joint (and the patient) is endangered.',
        pass: 'Recognises possible septic arthritis, arranges urgent same-day assessment for aspiration, screens sepsis, and safety-nets.',
        exc:  'Refuses the flare label and names the emergency; weights the injection/diabetes/age as raising concern; screens sepsis without relying on fever; surfaces and validates the grief-driven hospital fear and uses it to secure same-day aspiration; and confirms transport, nil-by-mouth and a 999 safety-net.'
      },
      avoid: [
        { dont:'"Sounds like a bad flare of your knee arthritis — I\u2019ll send stronger painkillers."', instead:'"A single hot, swollen knee you can\u2019t weight-bear on, coming on this fast, can be an infection in the joint — that\u2019s an emergency we check today, not wait out."', why:'Treating a hot non-weight-bearing joint as a flare risks a destroyed joint and sepsis.' },
        { dont:'"You\u2019ve had it injected recently, so it\u2019s probably just settling down."', instead:'"The injection actually worries me more — any joint injection can occasionally let infection in, and with your diabetes that\u2019s a real concern. Let\u2019s get it checked today."', why:'A recent injection is a portal for infection; it raises, not lowers, the index of suspicion.' },
        { dont:'"If you\u2019re really set against hospital, let\u2019s try antibiotics at home first."', instead:'"After what happened to your wife, I understand the fear of going in — but this needs a sample taken from the joint to diagnose, which only the hospital can do today. That\u2019s how I keep your knee and you safe."', why:'Septic arthritis needs urgent aspiration; home antibiotics without diagnosis is unsafe and lets hospital fear override the emergency.' }
      ]
    },

    'pmr-gca': {
      ceg: ['Older adults', 'Urgent & unscheduled care'],
      stem: {
        name: 'Eleanor Vance', age: '72 years · female',
        pmh: ['~6 weeks bilateral shoulder/hip girdle pain, morning stiffness for hours', 'Hypertension (amlodipine)', 'Carer for husband with dementia'],
        meds: ['Amlodipine'],
        allergy: 'NKDA',
        recent: '⚠ New unilateral headache + scalp tenderness this week; jaw aches on chewing. No visual loss yet. Wants a short steroid course.',
        reason: 'Telephone — girdle stiffness, mentions a headache in passing.'
      },
      timeMap: [
        { t:'0–2',  h:'PMR, then pivot',     d:'Confirm the girdle/stiffness picture — but actively ask about the headache she dismissed.' },
        { t:'2–4',  h:'Elicit GCA red flags', d:'New unilateral headache, scalp tenderness, jaw claudication, any visual symptoms. These mean GCA — sight-threatening.' },
        { t:'4–6',  h:'Treat first, test after', d:'Start HIGH-dose prednisolone NOW (40–60mg; higher/IV if visual); don\u2019t wait for ESR/CRP or biopsy. Urgent same-day referral.' },
        { t:'6–9',  h:'Eye safety-net + steroid fear', d:'ANY visual change → same-day eye emergency/999. Counsel steroids honestly: necessity for sight, prolonged taper, bone/GI protection, steroid card.' },
        { t:'9–12', h:'Carer + follow-up',    d:'Frame treatment as keeping her well for her husband; arrange referral, bloods, bone protection, support; close follow-up + taper.' }
      ],
      wordPics: {
        fail: 'Treats it as PMR and prescribes low-dose (or a short course) steroids without screening for GCA; accepts "the headache is neither here nor there"; waits for ESR before treating — risking irreversible blindness.',
        pass: 'Recognises PMR, screens and identifies GCA red flags, starts high-dose steroids urgently, refers same-day, and gives the visual safety-net.',
        exc:  'Confirms PMR then actively elicits the dismissed GCA red flags; names the sight-threatening emergency and starts high-dose steroids immediately without waiting for tests; gives an emphatic visual-symptom safety-net; counsels steroids honestly against the patient\u2019s fears; and supports her as a carer with urgent referral, bone protection and follow-up.'
      },
      avoid: [
        { dont:'"That sounds like polymyalgia — here\u2019s a course of steroids, the headache\u2019s probably tension."', instead:'"Before I prescribe — is that headache one-sided, your scalp tender, your jaw aching when you chew? Those can mean a sight-threatening condition, and we treat it differently and urgently."', why:'Dismissing the headache misses GCA, which can cause sudden permanent blindness.' },
        { dont:'"Let\u2019s get your inflammatory blood tests back before starting the steroids."', instead:'"With these symptoms I\u2019m starting a high-dose steroid today, straight away — we never wait for tests when sight is at risk; the bloods and scan follow."', why:'Delaying steroids for ESR/CRP or biopsy in suspected GCA risks irreversible visual loss.' },
        { dont:'"You can stop the steroids once the stiffness settles in a week or two."', instead:'"This needs a higher dose and a slow, supervised taper over many months — never stop abruptly — and I\u2019ll protect your bones and stomach. Any visual change is a 999 eye emergency."', why:'Short-course/abrupt-stop steroids are wrong for GCA and omitting the visual safety-net is dangerous.' }
      ]
    },

    'gout-flare': {
      ceg: ['New & undifferentiated presentations', 'Mental health & addiction'],
      stem: {
        name: 'Tony Briggs', age: '49 years · male',
        pmh: ['Acute first-MTP gout (2nd attack this year)', 'Alcohol ~40 units/week; BMI 31; BP borderline-high; FH of gout', 'Self-employed builder'],
        meds: ['Occasional OTC ibuprofen'],
        allergy: 'NKDA',
        recent: 'Wants "the strong anti-inflammatories", "no lifestyle lecture", back to work.',
        reason: 'Telephone — acute painful big-toe joint.'
      },
      timeMap: [
        { t:'0–2',  h:'Relieve the pain',    d:'Effective acute treatment tailored to comorbidity (NSAID+PPI / colchicine / short steroid) — not generic "strong ones".' },
        { t:'2–4',  h:'Earn the prevention chat', d:'Second attack this year — ask for two minutes on stopping them coming back; offer, don\u2019t impose.' },
        { t:'4–6',  h:'Surface the worry',    d:'Attacks costing work; "becoming his father" (disabled by gout, drank). The bravado masks money + health fear.' },
        { t:'6–9',  h:'The prevention pivot', d:'Allopurinol after the flare settles, titrated to a urate target, with flare prophylaxis — framed as staying ON the tools.' },
        { t:'9–12', h:'Lifestyle + CVD + net', d:'Alcohol/diet support without shaming; check BP/lipids/HbA1c/renal/urate; septic-joint caveat; follow-up to start ULT.' }
      ],
      wordPics: {
        fail: 'Hands over generic strong NSAIDs with no regard to BP/GI, treats the toe and stops; never makes the prevention pivot despite a second attack, never checks cardiometabolic risk, and either ignores or lectures about the drinking.',
        pass: 'Treats the acute attack safely, makes the prevention pivot (offers allopurinol), checks cardiometabolic risk, and addresses lifestyle supportively.',
        exc:  'Relieves pain with a comorbidity-tailored choice; earns and makes the prevention pivot for recurrent gout (ULT to target with prophylaxis); surfaces the livelihood fear and the father story behind the bravado; uses gout as a cardiometabolic flag; addresses alcohol/diet without shaming; and keeps the septic-joint caveat and follow-up.'
      },
      avoid: [
        { dont:'"Here\u2019s a strong anti-inflammatory, take it till it settles." (no tailoring)', instead:'"Let me pick the safest strong option given your blood pressure and stomach — and because this is your second attack this year, let\u2019s also talk about stopping them for good."', why:'Generic NSAIDs ignore comorbidity, and treating only the flare misses the prevention indication.' },
        { dont:'"You\u2019ll just have to lay off the beer and red meat." (lecture)', instead:'"No judgement — but cutting down the alcohol, beer especially, would really help the gout and your blood pressure. I\u2019ll support you to do it in a way that fits your life, if you want."', why:'A shaming lifestyle lecture causes disengagement; supportive, goal-framed advice keeps him on side.' },
        { dont:'"It\u2019s definitely gout, no need to worry about anything else."', instead:'"It does sound like gout — but if it gets worse, you feel feverish, or it doesn\u2019t settle, ring back, because occasionally a hot joint is an infection, not gout."', why:'Closing off the septic-arthritis possibility entirely removes an important safety-net.' }
      ]
    },

    'back-inflammatory': {
      ceg: ['New & undifferentiated presentations', 'Mental health & addiction'],
      stem: {
        name: 'Aaron Kelly', age: '28 years · male',
        pmh: ['~9 months low back/buttock pain; worse with REST, better with exercise', 'Morning stiffness >30–45 min; night pain (2nd half of night); alternating buttock pain', 'Past painful red eye (?uveitis); warehouse worker + keen gym-goer'],
        meds: ['OTC ibuprofen'],
        allergy: 'NKDA',
        recent: 'Blames it on lifting/the gym; "pushes through". Wants physio or a scan for a disc.',
        reason: 'Video consultation — chronic low back pain.'
      },
      timeMap: [
        { t:'0–2',  h:'Reframe the pattern', d:'Worse with rest, better with exercise + night pain + long morning stiffness, onset <40 = inflammatory, not mechanical.' },
        { t:'2–4',  h:'Cauda equina screen', d:'Saddle anaesthesia, bladder/bowel change, bilateral/progressive leg neurology — document it; emergency if present.' },
        { t:'4–6',  h:'SpA features',         d:'Past uveitis (the red eye), psoriasis/IBD, family history (uncle with AS). Join the dots.' },
        { t:'6–9',  h:'Surface the fear',     d:'Dread of disability (stooped uncle), mood/relationship impact, physical job. Early diagnosis changes the trajectory.' },
        { t:'9–12', h:'Work-up + hope + net', d:'ESR/CRP, HLA-B27, SI imaging, rheumatology referral; NSAIDs + exercise; cauda equina red flags → A&E; follow-up.' }
      ],
      wordPics: {
        fail: 'Accepts the "gym injury/disc" self-diagnosis, refers for physio or a disc scan only, never screens cauda equina, misses the uveitis clue and the inflammatory pattern, and leaves the disability/work fear unaddressed.',
        pass: 'Recognises inflammatory back pain, screens cauda equina, elicits SpA features, arranges bloods/HLA-B27/imaging and rheumatology referral, and manages with NSAIDs/exercise.',
        exc:  'Reframes the rest-worse/exercise-better pattern as inflammatory; performs and documents the cauda equina screen; joins the dots with the uveitis and family history; surfaces the disability/work fear and gives realistic hope (early diagnosis + modern treatment change outcomes); and sets up the full SpA work-up, referral and emergency safety-net.'
      },
      avoid: [
        { dont:'"Sounds like you\u2019ve strained it at the gym — I\u2019ll refer you for physio." ', instead:'"The fact it\u2019s worse with rest and better with exercise, with night pain, points to an INFLAMMATORY back problem, not a gym strain — that needs blood tests, a gene test, the right scans and a rheumatology referral."', why:'Treating an inflammatory pattern as mechanical delays diagnosis of axial spondyloarthritis.' },
        { dont:'"It\u2019s clearly not serious, so let\u2019s just get you a scan for a disc."', instead:'"Quick safety check first — any saddle numbness, bladder or bowel changes, or weakness in both legs? Those would be an emergency. None? Good — but always know those signs."', why:'Skipping the cauda equina screen risks missing a surgical emergency, even when the story sounds benign.' },
        { dont:'"Try not to worry — it\u2019s probably nothing like your uncle\u2019s arthritis."', instead:'"I think your uncle\u2019s condition is relevant, and I understand the fear of ending up like him — but catching this early is exactly what changes that. Today\u2019s treatments are a world away from his generation\u2019s."', why:'False reassurance that dismisses the family link misses the diagnosis and the chance to address his real fear honestly.' }
      ]
    }
  });

})();
