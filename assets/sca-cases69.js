/* ============================================================
   Reasoning GP — Case Library batch 69:
   "MSK & men's lower-genital" (NEW themes, verified absent)
   de Quervain's tenosynovitis (new-mother wrist pain, Finkelstein);
   plantar fasciitis (first-step heel pain, conservative care);
   balanitis/phimosis (the sore foreskin \u2014 diabetes/hygiene/BXO,
   refer if pathological phimosis); pilonidal sinus/abscess (the
   natal-cleft pain \u2014 incise abscess, refer for definitive care).
   No NG12 cancer pathway applies. Load AFTER sca-cases68.js.
   ============================================================ */
(function(){

  /* ===== 248. de Quervain's tenosynovitis ===== */
  const c248 = {
    id:'de-quervains', title:'"Since the baby came my thumb-side wrist is agony when I lift her \u2014 it catches and it\u2019s swollen"', type:'video', duration:12,
    meta:{ age:32, sex:'F', setting:'Face-to-face \u2014 radial wrist pain in a new mother.', system:'MSK \u2014 de Quervain\u2019s tenosynovitis: recognition, Finkelstein & conservative care' },
    brief:'Mrs Priya Sandhu, 32, 10 weeks postnatal, has pain and swelling over the RADIAL (thumb) side of the wrist, worse lifting/holding the baby and on thumb/wrist movement, with a tender swelling over the radial styloid and a positive FINKELSTEIN test. Recognise DE QUERVAIN\u2019S TENOSYNOVITIS \u2014 inflammation of the first dorsal extensor compartment tendons (APL/EPB) at the radial wrist \u2014 classically in NEW MOTHERS/repetitive thumb use; confirm clinically (Finkelstein), distinguish from thumb-base (CMC) OA, scaphoid pathology, intersection syndrome and inflammatory arthritis; MANAGE conservatively (activity modification/baby-handling advice, a THUMB SPICA splint, analgesia/NSAIDs, relative rest), with a local CORTICOSTEROID INJECTION if not settling and referral for refractory cases (surgical release). Reassure (self-limiting/treatable), give ergonomic advice for childcare, and safety-net. No NG12 cancer link.',
    script:{
      opening:'"Since having the baby, the thumb side of my right wrist has become really painful \u2014 especially when I scoop her up or feed her. It\u2019s a bit swollen there and sometimes it catches. It\u2019s making looking after her hard. What\u2019s going on?"',
      facts:[
        { topic:'Recognise de Quervain\u2019s', text:'DE QUERVAIN\u2019S TENOSYNOVITIS is inflammation of the first dorsal extensor compartment tendons (abductor pollicis longus/extensor pollicis brevis) at the RADIAL wrist: pain and swelling over the radial styloid, worse with thumb/wrist movement and gripping/lifting, classically in NEW MOTHERS (lifting the baby) and with repetitive thumb use. Her postnatal radial wrist pain/swelling fits.' },
        { topic:'Confirm with Finkelstein', text:'Confirm clinically with the FINKELSTEIN test (thumb tucked into the fist, wrist ulnar-deviated reproduces the radial-styloid pain) and tenderness/swelling over the first compartment. Examination is usually sufficient \u2014 imaging is not routinely needed.' },
        { topic:'Differential', text:'Distinguish from thumb-base (first CMC joint) OSTEOARTHRITIS (older, base-of-thumb pain), SCAPHOID pathology (trauma, anatomical snuffbox tenderness), intersection syndrome (more proximal), and inflammatory arthritis (other joints, systemic features).' },
        { topic:'Conservative management', text:'MANAGE conservatively: activity modification and BABY-HANDLING/ergonomic advice (lift with the forearm rather than thumb-abducted scooping), a THUMB SPICA SPLINT (rest the thumb/wrist), analgesia/NSAIDs (topical or oral, considering breastfeeding), and relative rest. Most settle with these measures.' },
        { topic:'Escalation', text:'If not settling, a local CORTICOSTEROID INJECTION into the first compartment is effective; refer to hand/orthopaedics for refractory cases (surgical decompression/release). Reassure it is treatable and usually self-limiting with the right measures.' },
        { topic:'Hidden agenda', text:'She is struggling to care for the baby and wants a diagnosis and relief. Recognise de Quervain\u2019s, confirm with Finkelstein, give splinting/ergonomic advice and analgesia (breastfeeding-aware), offer steroid injection if needed, and support her.' },
      ],
      ice:{ ideas:'Something\u2019s wrong with her wrist from looking after the baby; wants relief.', concerns:'Pain limiting baby care; the swelling/catching; whether it\u2019s serious.', expectations:'A diagnosis and treatment. What she needs: recognition of de Quervain\u2019s, Finkelstein confirmation, splint + ergonomic/baby-handling advice + analgesia, steroid injection/referral if refractory.' },
      cues:['Radial wrist pain/swelling worse lifting the baby + positive Finkelstein in a new mother \u2014 de Quervain\u2019s tenosynovitis.','Differential: thumb-base OA, scaphoid pathology, intersection syndrome, inflammatory arthritis.','Conservative first: thumb spica splint + ergonomic/baby-handling advice + analgesia; steroid injection/referral if refractory.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises DE QUERVAIN\u2019S TENOSYNOVITIS \u2014 radial-wrist pain/swelling over the first compartment, worse with thumb/wrist movement and lifting, classically in new mothers/repetitive thumb use' },
      { dom:'tasks', text:'Confirms clinically with the FINKELSTEIN test and first-compartment tenderness, recognising imaging is not routinely needed' },
      { dom:'tasks', text:'Distinguishes it from thumb-base (CMC) OA, scaphoid pathology, intersection syndrome and inflammatory arthritis' },
      { dom:'tasks', text:'Manages conservatively \u2014 activity modification/baby-handling ergonomic advice, a THUMB SPICA splint, analgesia/NSAIDs (breastfeeding-aware), relative rest' },
      { dom:'tasks', text:'Knows escalation \u2014 local corticosteroid injection if not settling, hand/orthopaedic referral (surgical release) for refractory cases' },
      { dom:'rto',   text:'Acknowledges the impact on baby care, reassures it is treatable, and checks understanding of splinting/ergonomics' },
      { dom:'rto',   text:'Gives practical, supportive advice tailored to a new mother and confirms the analgesia is breastfeeding-appropriate' },
      { dom:'gs',    text:'Safety-nets and follows up: review if not improving, steroid injection/referral for refractory pain, ergonomic measures, and red flags (significant trauma/scaphoid concern) \u2014 conservative-first management' },
    ],
    worked:[
      { lbl:'Name it', txt:'"This is de Quervain\u2019s \u2014 inflammation of the tendons on the thumb side of your wrist. It\u2019s really common in new mums because of all the lifting and scooping of the baby. There\u2019s a simple test \u2014 tucking your thumb in and bending the wrist \u2014 which reproduces your pain and confirms it."' },
      { lbl:'Reassure', txt:'"It\u2019s not dangerous and it usually settles well with the right measures \u2014 we don\u2019t need scans."' },
      { lbl:'Splint + ergonomics', txt:'"The mainstays are resting the thumb with a thumb splint, and changing how you lift her \u2014 scoop with your forearms rather than spreading your thumb out. I\u2019ll show you. Painkillers help too, and I\u2019ll pick ones that are fine with breastfeeding."' },
      { lbl:'Escalation', txt:'"If it doesn\u2019t settle over a few weeks, a small steroid injection into the area works really well, and rarely we\u2019d refer for a minor op to release the tendons."' },
      { lbl:'Support', txt:'"I know how hard this makes caring for her \u2014 these measures should ease it so you can manage more comfortably."' },
      { lbl:'Safety-net', txt:'"Come back if it\u2019s not improving with the splint, or if it gets much worse \u2014 we\u2019ll step up to the injection. And if you ever hurt the wrist in a fall, let me know, as that\u2019s different."' },
    ],
    learning:'DE QUERVAIN\u2019S TENOSYNOVITIS is inflammation of the first dorsal extensor compartment tendons (abductor pollicis longus and extensor pollicis brevis) at the RADIAL wrist, presenting with pain and swelling over the radial styloid that is worse with thumb/wrist movement and gripping/lifting \u2014 classically in NEW MOTHERS (repeated lifting of the baby) and with repetitive thumb use. Confirm it clinically with the FINKELSTEIN test (thumb tucked into the fist, wrist ulnar-deviated reproduces the radial-styloid pain) and first-compartment tenderness/swelling; imaging is not routinely needed. Distinguish it from thumb-base (first CMC joint) osteoarthritis (older patients, base-of-thumb pain), scaphoid pathology (trauma, snuffbox tenderness), intersection syndrome (more proximal) and inflammatory arthritis (other joints/systemic features). Manage conservatively first: activity modification and baby-handling/ergonomic advice (lift with the forearm rather than thumb-abducted scooping), a THUMB SPICA splint to rest the thumb/wrist, analgesia/NSAIDs (topical or oral, breastfeeding-aware), and relative rest \u2014 most settle with these. If not settling, a local corticosteroid injection into the first compartment is effective, and refractory cases are referred to hand/orthopaedics for surgical decompression. Reassure it is treatable and usually self-limiting with the right measures, give practical ergonomic advice tailored to childcare, and safety-net. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'de Quervain\u2019s tenosynovitis \u00b7 Finkelstein test \u00b7 thumb spica splint + ergonomics \u00b7 corticosteroid injection / surgical release',
      points:[
        { h:'Recognise', t:'Radial-wrist pain/swelling over the first compartment, worse with thumb/wrist movement and lifting; classically new mothers/repetitive thumb use.' },
        { h:'Finkelstein test', t:'Thumb in fist, ulnar-deviate the wrist \u2192 reproduces radial-styloid pain. Clinical diagnosis; imaging not routinely needed.' },
        { h:'Differential', t:'Thumb-base (CMC) OA, scaphoid pathology (trauma/snuffbox), intersection syndrome, inflammatory arthritis.' },
        { h:'Conservative care', t:'Activity modification/baby-handling ergonomics, thumb spica splint, analgesia/NSAIDs (breastfeeding-aware), relative rest.' },
        { h:'Escalation', t:'Local corticosteroid injection if not settling; hand/orthopaedic referral (surgical release) for refractory cases.' },
        { h:'Reassure', t:'Treatable and usually self-limiting with the right measures; tailor advice to childcare.' },
        { h:'Never do', t:'Never image routinely; never overlook the ergonomic/baby-handling cause; never ignore a scaphoid/trauma differential.' },
        { h:'Safety-net & follow-up', t:'Review if not improving; injection/referral for refractory pain; red flags (trauma/scaphoid concern).' }
      ]
    }
  };

  /* ===== 249. Plantar fasciitis ===== */
  const c249 = {
    id:'plantar-fasciitis', title:'"My heel is agony for the first few steps in the morning, then eases \u2014 it\u2019s been weeks"', type:'video', duration:12,
    meta:{ age:47, sex:'M', setting:'Face-to-face \u2014 chronic heel pain.', system:'MSK \u2014 plantar fasciitis: recognition & conservative management' },
    brief:'Mr Carl Denton, 47 (on his feet at work, recent weight gain, new running), has weeks of PLANTAR HEEL pain that is WORST on the FIRST STEPS in the morning (or after rest) and eases with walking, with tenderness at the MEDIAL CALCANEAL plantar fascia origin. Recognise PLANTAR FASCIITIS \u2014 the commonest cause of plantar heel pain, classically "first-step" pain, related to overuse/weight/footwear/tight calf; confirm clinically, distinguish from calcaneal stress fracture (trauma/point bony tenderness), fat-pad atrophy, tarsal tunnel/nerve entrapment (numbness/tingling), Achilles/insertional pathology, and inflammatory/seronegative arthropathy (enthesitis \u2014 ask about other joints, back, psoriasis); MANAGE conservatively (it is self-limiting over months) \u2014 relative rest/activity modification, calf and plantar-fascia STRETCHING, supportive footwear/orthoses/heel cushioning, weight loss, analgesia/NSAIDs; escalate (physiotherapy, steroid injection cautiously, specialist) only if refractory. Reassure about the long but favourable course, and safety-net. No NG12 cancer link.',
    script:{
      opening:'"My right heel\u2019s been killing me for a few weeks. The worst bit is the first few steps when I get out of bed \u2014 it\u2019s like stepping on a stone or a knife \u2014 then it eases off as I get going, but comes back after I\u2019ve been sitting. I\u2019ve started running and I\u2019m on my feet all day. What is it?"',
      facts:[
        { topic:'Recognise plantar fasciitis', text:'PLANTAR FASCIITIS is the commonest cause of plantar heel pain: classically "FIRST-STEP" pain (worst on the first steps in the morning or after rest, easing with walking, returning after prolonged standing), with tenderness at the MEDIAL CALCANEAL tubercle (plantar-fascia origin). Risk factors: overuse/new running, prolonged standing, raised weight, poor footwear, tight calf/Achilles. His picture fits.' },
        { topic:'Confirm clinically', text:'Diagnosis is clinical \u2014 the typical first-step history plus localised tenderness at the plantar-fascia origin (\u00b1 pain on dorsiflexing the toes). Imaging is not routinely required.' },
        { topic:'Differential', text:'Distinguish from CALCANEAL STRESS FRACTURE (recent increase in load/trauma, point bony tenderness, squeeze test), FAT-PAD atrophy (central heel, older), TARSAL TUNNEL/nerve entrapment (burning/tingling/numbness), Achilles/insertional pathology, and INFLAMMATORY/seronegative arthropathy with enthesitis (ask about other joints, back pain, psoriasis, eye/GI symptoms).' },
        { topic:'Conservative management', text:'MANAGE conservatively \u2014 it is usually SELF-LIMITING over months: relative REST/activity modification (reduce/adjust running), calf and PLANTAR-FASCIA STRETCHING, supportive FOOTWEAR/orthoses/heel cushioning, WEIGHT loss, and analgesia/NSAIDs. These are first-line and effective for most.' },
        { topic:'Escalation', text:'For refractory pain, escalate: PHYSIOTHERAPY, a corticosteroid injection (used cautiously \u2014 risk of fat-pad atrophy/fascia rupture), and specialist referral (extracorporeal shockwave therapy or other options) in persistent cases. Set realistic expectations about the recovery timeline.' },
        { topic:'Hidden agenda', text:'He wants to know what it is and to keep active. Recognise plantar fasciitis, reassure about the favourable but slow course, give stretching/footwear/activity advice and weight/load modification, and escalate only if refractory \u2014 while excluding a stress fracture given his new running.' },
      ],
      ice:{ ideas:'A heel problem from being on his feet/running; wants a fix and to keep active.', concerns:'The pain and its impact on work/running; how long it\u2019ll last.', expectations:'A diagnosis and treatment. What he needs: recognition of plantar fasciitis, conservative care (stretching, footwear, load/weight modification, analgesia), realistic timeline, and escalation if refractory.' },
      cues:['"First-step" plantar heel pain easing with walking, tender medial calcaneal origin, overuse/new running \u2014 plantar fasciitis.','Differential: calcaneal stress fracture (point bony tenderness/new load), tarsal tunnel (tingling), fat-pad atrophy, enthesitis/seronegative arthropathy.','Conservative first: stretching + supportive footwear/orthoses + load/weight modification + analgesia; physio/injection/specialist if refractory.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises PLANTAR FASCIITIS \u2014 "first-step" plantar heel pain (worst in the morning/after rest, easing with walking) with tenderness at the medial calcaneal plantar-fascia origin and typical risk factors' },
      { dom:'tasks', text:'Confirms clinically (typical history + localised tenderness) and recognises imaging is not routinely required' },
      { dom:'tasks', text:'Distinguishes it from calcaneal stress fracture (new load/point bony tenderness), tarsal tunnel/nerve entrapment, fat-pad atrophy, Achilles pathology and inflammatory/seronegative arthropathy (enthesitis \u2014 asks about other joints/back/psoriasis)' },
      { dom:'tasks', text:'Manages conservatively \u2014 relative rest/activity modification, calf and plantar-fascia stretching, supportive footwear/orthoses/heel cushioning, weight loss, analgesia/NSAIDs' },
      { dom:'tasks', text:'Knows escalation \u2014 physiotherapy, cautious corticosteroid injection, specialist referral (e.g. shockwave) for refractory cases \u2014 and sets realistic timeline expectations' },
      { dom:'rto',   text:'Reassures about the favourable but slow (months) course, acknowledges the impact on work/running, and checks understanding of stretching/footwear advice' },
      { dom:'rto',   text:'Engages the patient in load/weight modification without being dismissive of his wish to stay active' },
      { dom:'gs',    text:'Safety-nets and follows up: review if not improving, escalate if refractory, and red flags warranting reconsideration (point bony tenderness/stress fracture, neurological symptoms, systemic/inflammatory features) \u2014 conservative-first management' },
    ],
    worked:[
      { lbl:'Name it', txt:'"This is plantar fasciitis \u2014 strain of the band of tissue along the sole, where it attaches to the heel bone. That classic \u2018stepping on a stone\u2019 pain on the first steps, easing as you move, is the giveaway. The new running and being on your feet all day have set it off."' },
      { lbl:'Quick check', txt:'"Just to be safe \u2014 the pain isn\u2019t from a specific injury, and the tenderness is along the fascia rather than a pinpoint on the bone, so I\u2019m not worried about a stress fracture. Any tingling or numbness? \u2026 No. Good."' },
      { lbl:'Conservative plan', txt:'"The mainstays are stretching \u2014 your calf and the sole \u2014 which I\u2019ll show you, supportive cushioned footwear or insoles, easing back the running for now, and anti-inflammatories. Losing a little weight also takes load off it."' },
      { lbl:'Set expectations', txt:'"I\u2019ll be honest \u2014 it can take a few months to fully settle, but it does get better with these measures, and most people don\u2019t need anything more."' },
      { lbl:'Escalation', txt:'"If it\u2019s stubborn, physiotherapy helps, and there are options like a steroid injection (used carefully) or specialist treatments such as shockwave therapy."' },
      { lbl:'Safety-net', txt:'"Come back if it\u2019s not improving, if you get a sharp pinpoint pain on the heel bone (especially after upping your running), or any numbness or pins and needles \u2014 those would make me think again."' },
    ],
    learning:'PLANTAR FASCIITIS is the commonest cause of plantar heel pain, recognised by classic "FIRST-STEP" pain \u2014 worst on the first steps in the morning or after rest, easing with walking, and returning after prolonged standing \u2014 with tenderness at the MEDIAL CALCANEAL tubercle (plantar-fascia origin); risk factors include overuse/new running, prolonged standing, raised weight, poor footwear and a tight calf/Achilles. Diagnosis is clinical (typical history plus localised tenderness, \u00b1 pain on dorsiflexing the toes) and imaging is not routinely required. Distinguish it from a calcaneal STRESS FRACTURE (recent increase in load/trauma, point bony tenderness, positive squeeze test), fat-pad atrophy (central heel, older), tarsal tunnel/nerve entrapment (burning/tingling/numbness), Achilles/insertional pathology, and inflammatory/seronegative arthropathy with enthesitis (ask about other joints, back pain, psoriasis, eye/GI symptoms). Manage conservatively \u2014 it is usually self-limiting over months: relative rest/activity modification, calf and plantar-fascia STRETCHING, supportive FOOTWEAR/orthoses/heel cushioning, WEIGHT loss, and analgesia/NSAIDs, which are first-line and effective for most. For refractory pain, escalate to physiotherapy, a cautious corticosteroid injection (risk of fat-pad atrophy/fascia rupture), and specialist referral (e.g. extracorporeal shockwave therapy). Reassure about the favourable but slow course, set realistic timeline expectations, give stretching/footwear and load/weight advice, and safety-net for features that would prompt reconsideration (stress-fracture point tenderness, neurological symptoms, inflammatory/systemic features). No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Plantar fasciitis \u00b7 first-step heel pain \u00b7 conservative care (stretching/footwear/weight) \u00b7 escalation (physio/injection/shockwave)',
      points:[
        { h:'Recognise', t:'First-step plantar heel pain (morning/after rest, eases with walking) + tenderness at medial calcaneal plantar-fascia origin; overuse/standing/weight/footwear/tight calf.' },
        { h:'Clinical diagnosis', t:'Typical history + localised tenderness (\u00b1 pain on toe dorsiflexion). Imaging not routinely required.' },
        { h:'Differential', t:'Calcaneal stress fracture (new load/point bony tenderness), tarsal tunnel/nerve entrapment (tingling/numbness), fat-pad atrophy, Achilles pathology, inflammatory/seronegative arthropathy (enthesitis).' },
        { h:'Conservative care', t:'Relative rest/activity modification, calf and plantar-fascia stretching, supportive footwear/orthoses/heel cushioning, weight loss, analgesia/NSAIDs. Self-limiting over months.' },
        { h:'Escalation', t:'Physiotherapy; cautious corticosteroid injection (fat-pad atrophy/rupture risk); specialist referral (shockwave) for refractory cases.' },
        { h:'Set expectations', t:'Favourable but slow course (months); reassure most don\u2019t need more than conservative measures.' },
        { h:'Never do', t:'Never image routinely; never miss a stress fracture (new load/point tenderness) or nerve entrapment; never overlook inflammatory enthesitis clues.' },
        { h:'Safety-net & follow-up', t:'Review if not improving; escalate if refractory; reconsider for point bony tenderness, neurological symptoms or systemic/inflammatory features.' }
      ]
    }
  };

  /* ===== 250. Balanitis / phimosis ===== */
  const c250 = {
    id:'balanitis-phimosis', title:'"The end of my penis is red, sore and itchy under the foreskin, and it\u2019s getting hard to pull back"', type:'video', duration:12,
    meta:{ age:54, sex:'M', setting:'Face-to-face \u2014 a sore, inflamed glans/foreskin.', system:'Urology / Men\u2019s health \u2014 balanitis & phimosis: causes, diabetes & when to refer' },
    brief:'Mr Brian Okafor, 54, has a red, sore, itchy GLANS with foreskin inflammation and discharge, recurrent over months, and increasing difficulty RETRACTING the foreskin (developing phimosis). Recognise BALANITIS (inflammation of the glans \u00b1 balanoposthitis with the foreskin) and PHIMOSIS (non-retractile foreskin), screen the CAUSES \u2014 candidal/infective (and the important link with DIABETES \u2014 recurrent candidal balanitis can be a presenting feature, so check glucose/HbA1c), irritant/contact dermatitis and hygiene, bacterial/STI, and the key dermatosis LICHEN SCLEROSUS (BXO \u2014 a white, scarring change causing pathological phimosis and a meatal-stenosis/SCC-risk that needs dermatology/urology and sometimes circumcision); MANAGE per cause (hygiene advice, topical antifungal/steroid/antibacterial as appropriate, treat diabetes), and REFER for pathological phimosis, suspected lichen sclerosus/BXO, recurrent/refractory disease or any suspicious lesion. Avoid forcible retraction; counsel hygiene; check glucose. No NG12 unless a suspicious penile lesion (then urology). NG12 caveat noted, not invented.',
    script:{
      opening:'"This is awkward, doctor. The end of my penis keeps getting red, sore and itchy under the foreskin, with a bit of discharge \u2014 it\u2019s happened a few times over the last few months. And now the foreskin\u2019s getting tight and hard to pull back. Can you sort it?"',
      facts:[
        { topic:'Recognise balanitis \u00b1 phimosis', text:'BALANITIS is inflammation of the glans (balanoposthitis if the foreskin is also involved): red, sore, itchy glans with discharge; recurrent episodes and progressive difficulty RETRACTING the foreskin suggest developing PHIMOSIS (non-retractile foreskin). Examine the glans/foreskin (don\u2019t forcibly retract).' },
        { topic:'Diabetes link \u2014 check glucose', text:'IMPORTANT \u2014 recurrent CANDIDAL (thrush) balanitis is strongly associated with DIABETES (and can be a presenting feature) \u2014 so CHECK glucose/HbA1c in recurrent balanitis. Candidal balanitis: red glans, soreness/itch, white/curd-like material; commoner with diabetes, antibiotics, immunosuppression.' },
        { topic:'Screen the other causes', text:'Screen other causes: irritant/contact DERMATITIS and poor (or over-zealous) hygiene; bacterial infection; STI (consider GUM screen if at risk); and dermatoses \u2014 psoriasis, lichen planus, and crucially LICHEN SCLEROSUS (balanitis xerotica obliterans, BXO).' },
        { topic:'Lichen sclerosus / BXO \u2014 the key dermatosis', text:'LICHEN SCLEROSUS (BXO) causes a WHITE, atrophic, SCARRING change of the glans/foreskin leading to PATHOLOGICAL PHIMOSIS and meatal stenosis; it needs dermatology/urology involvement (potent topical steroids, sometimes circumcision) and carries a small increased penile SCC risk \u2014 so a white scarred foreskin/phimosis or any suspicious/non-healing lesion warrants referral (urology; NG12 penile pathway if a suspicious lesion).' },
        { topic:'Manage & when to refer', text:'MANAGE per cause: hygiene advice (gentle washing, dry, avoid irritants/soaps), TOPICAL antifungal (\u00b1 mild steroid) for candidal, treat bacterial/STI appropriately, and OPTIMISE diabetes. REFER for: pathological PHIMOSIS, suspected LICHEN SCLEROSUS/BXO, recurrent/refractory balanitis, or any suspicious lesion (urology), and consider circumcision in pathological phimosis/recurrent disease. Never forcibly retract a phimotic foreskin.' },
        { topic:'Hidden agenda', text:'He is embarrassed and wants it "sorted"; recurrent disease and tightening foreskin are clues. Recognise balanitis/phimosis, CHECK GLUCOSE (diabetes), screen causes including BXO, treat per cause with hygiene advice, and refer for phimosis/BXO/refractory disease \u2014 handling it sensitively.' },
      ],
      ice:{ ideas:'A recurrent sore/infection of the penis; wants it cleared up.', concerns:'Embarrassment; recurrent soreness; the tightening foreskin; whether it\u2019s serious.', expectations:'Treatment/a cure. What he needs: recognition of balanitis/phimosis, glucose check (diabetes), cause screen including lichen sclerosus, cause-directed treatment + hygiene, and referral for pathological phimosis/BXO/refractory disease.' },
      cues:['Recurrent red, sore, itchy glans + foreskin inflammation + increasing difficulty retracting \u2014 balanitis with developing phimosis.','CHECK GLUCOSE/HbA1c \u2014 recurrent candidal balanitis is linked to (and can present) diabetes.','White scarring/pathological phimosis = lichen sclerosus/BXO \u2192 refer (dermatology/urology; small penile SCC risk); never forcibly retract.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises BALANITIS (\u00b1 balanoposthitis) and developing PHIMOSIS (non-retractile foreskin) from the recurrent sore/itchy glans and increasing retraction difficulty, examining without forcible retraction' },
      { dom:'tasks', text:'CHECKS GLUCOSE/HbA1c \u2014 recognising recurrent candidal balanitis\u2019s strong link with (and possible presentation of) DIABETES' },
      { dom:'tasks', text:'Screens the CAUSES \u2014 candidal/infective, irritant/contact dermatitis and hygiene, bacterial/STI (GUM if at risk), psoriasis/lichen planus, and lichen sclerosus/BXO' },
      { dom:'tasks', text:'Recognises LICHEN SCLEROSUS (BXO) \u2014 white scarring causing pathological phimosis/meatal stenosis with a small penile SCC risk \u2014 needing dermatology/urology referral' },
      { dom:'tasks', text:'Manages per cause (hygiene advice, topical antifungal \u00b1 steroid/antibacterial, treat diabetes) and REFERS for pathological phimosis, suspected BXO, recurrent/refractory disease or a suspicious lesion \u2014 never forcibly retracting' },
      { dom:'rto',   text:'Handles an embarrassing problem sensitively, reassures and explains the diagnosis/cause, and checks understanding' },
      { dom:'rto',   text:'Communicates the diabetes check and referral reasoning clearly without alarming' },
      { dom:'gs',    text:'Safety-nets and follows up: glucose result, response to treatment, referral for phimosis/BXO/refractory or suspicious lesions, hygiene advice, and review \u2014 cause-directed care + diabetes check + appropriate referral' },
    ],
    worked:[
      { lbl:'Reassure + examine', txt:'"There\u2019s no need to be embarrassed \u2014 this is common and we\u2019ll sort it. Let me examine you gently \u2014 I won\u2019t force the foreskin back. The redness and soreness is balanitis, and the tightening you describe is the foreskin becoming harder to retract."' },
      { lbl:'Check for diabetes', txt:'"Because it keeps coming back, I want to check your blood sugar \u2014 recurrent soreness like this can be linked to diabetes, and occasionally it\u2019s the first sign. So a glucose/HbA1c test is important here."' },
      { lbl:'Find the cause + treat', txt:'"The commonest cause is a thrush (yeast) infection, which responds to an antifungal cream, sometimes with a mild steroid, plus gentle hygiene \u2014 wash and dry, avoid harsh soaps. If there\u2019s any STI risk we can screen for that too."' },
      { lbl:'Flag lichen sclerosus', txt:'"One thing I\u2019m checking for is a skin condition called lichen sclerosus, which causes whitish scarring and tightening \u2014 if that\u2019s what\u2019s tightening your foreskin, it needs a specialist, and sometimes a steroid ointment or a circumcision."' },
      { lbl:'Refer if needed', txt:'"If the foreskin stays tight, it looks scarred, or it keeps recurring despite treatment, I\u2019ll refer you to urology. Please don\u2019t force the foreskin back, as that can cause harm."' },
      { lbl:'Safety-net', txt:'"Come back if it\u2019s not settling, the foreskin won\u2019t move or gets stuck, or you notice any persistent lump, white patch or non-healing sore \u2014 that I\u2019d want looked at promptly."' },
    ],
    learning:'BALANITIS is inflammation of the glans (balanoposthitis if the foreskin is also involved), presenting as a red, sore, itchy glans with discharge; recurrent episodes and progressive difficulty retracting the foreskin suggest developing PHIMOSIS (non-retractile foreskin) \u2014 examine without forcibly retracting. Importantly, recurrent CANDIDAL balanitis is strongly associated with DIABETES and can be a presenting feature, so CHECK glucose/HbA1c in recurrent balanitis. Screen the causes: candidal/infective (red glans, itch, white curd-like material \u2014 commoner with diabetes, antibiotics, immunosuppression), irritant/contact dermatitis and hygiene (too little or too much), bacterial infection, STI (GUM screen if at risk), psoriasis/lichen planus, and crucially LICHEN SCLEROSUS (balanitis xerotica obliterans, BXO) \u2014 a white, atrophic, scarring change causing pathological phimosis and meatal stenosis that needs dermatology/urology involvement (potent topical steroids, sometimes circumcision) and carries a small increased penile SCC risk. Manage per cause: hygiene advice (gentle washing, drying, avoiding irritant soaps), topical antifungal \u00b1 mild steroid for candidal disease, appropriate treatment of bacterial/STI causes, and optimisation of diabetes. Refer for pathological phimosis, suspected lichen sclerosus/BXO, recurrent/refractory balanitis, or any suspicious/non-healing lesion (urology; the NG12 penile pathway applies for a suspicious lesion), and consider circumcision in pathological phimosis/recurrent disease \u2014 never forcibly retracting a phimotic foreskin. Handle an embarrassing problem sensitively, check glucose, screen for BXO, treat by cause, and safety-net. No NICE NG12 cancer pathway applies unless there is a suspicious penile lesion.',
    knowledge:{
      guideline:'Balanitis & phimosis \u00b7 candidal balanitis & diabetes (check glucose) \u00b7 lichen sclerosus/BXO referral \u00b7 hygiene & cause-directed treatment',
      points:[
        { h:'Recognise', t:'Red, sore, itchy glans \u00b1 foreskin (balanoposthitis); recurrent episodes + difficulty retracting suggest developing phimosis. Don\u2019t forcibly retract.' },
        { h:'Check for diabetes', t:'Recurrent candidal balanitis is strongly linked with (and can present) diabetes \u2014 check glucose/HbA1c. Candidal: red glans, itch, white curd-like material.' },
        { h:'Screen causes', t:'Candidal/infective, irritant/contact dermatitis and hygiene, bacterial/STI (GUM if at risk), psoriasis/lichen planus, lichen sclerosus/BXO.' },
        { h:'Lichen sclerosus / BXO', t:'White, atrophic, scarring change \u2192 pathological phimosis/meatal stenosis; dermatology/urology (potent topical steroid, sometimes circumcision); small penile SCC risk.' },
        { h:'Manage', t:'Hygiene advice; topical antifungal \u00b1 mild steroid for candidal; treat bacterial/STI; optimise diabetes.' },
        { h:'Refer', t:'Pathological phimosis, suspected BXO, recurrent/refractory balanitis, or any suspicious lesion (urology; NG12 penile pathway for a suspicious lesion); consider circumcision.' },
        { h:'Never do', t:'Never forcibly retract a phimotic foreskin; never miss the diabetes link; never overlook lichen sclerosus/BXO or a suspicious penile lesion.' },
        { h:'Safety-net & follow-up', t:'Glucose result; treatment response; referral for phimosis/BXO/refractory/suspicious lesion; hygiene advice; review.' }
      ]
    }
  };

  /* ===== 251. Pilonidal sinus / abscess ===== */
  const c251 = {
    id:'pilonidal-sinus', title:'"I\u2019ve got a really painful swelling at the top of my bum cleft that\u2019s started leaking \u2014 I can\u2019t sit down"', type:'video', duration:12,
    meta:{ age:26, sex:'M', setting:'Face-to-face \u2014 a painful natal-cleft swelling/discharge.', system:'Surgery \u2014 pilonidal sinus & abscess: recognition, acute drainage & definitive care' },
    brief:'Mr Jordan Reilly, 26 (hairy, desk/driving job, overweight), has a painful, red, swollen lump in the midline NATAL CLEFT (top of the buttock crease) with some discharge, and a history of intermittent discharge/pits there \u2014 a PILONIDAL SINUS now with an ACUTE ABSCESS. Recognise PILONIDAL DISEASE (a sinus/cyst in the natal cleft, typically with midline pits, related to hair/friction, commonest in young hirsute men) and distinguish the ACUTE ABSCESS (painful, red, fluctuant, may discharge) from a chronic/quiescent sinus; MANAGE the acute abscess \u2014 it needs INCISION AND DRAINAGE (urgent surgical drainage for an acute abscess; analgesia; antibiotics only if surrounding cellulitis/systemic features), and for the underlying sinus, REFER to general/colorectal surgery for definitive treatment (excision/various procedures) once settled; advise on PREVENTION/hygiene (hair removal, keeping the area clean/dry, weight); and consider the differentials (perianal abscess/fistula, hidradenitis, infected cyst). The skill is recognising pilonidal abscess, arranging drainage, referring for definitive care, and prevention advice. No NG12 cancer link.',
    script:{
      opening:'"I\u2019ve got this really painful swelling right at the top of my bum crease \u2014 it\u2019s red, hot and now it\u2019s started leaking a bit of fluid. I can\u2019t sit down properly, and it\u2019s been building up over a few days. I\u2019ve had a bit of discharge there on and off before. What is it?"',
      facts:[
        { topic:'Recognise pilonidal disease', text:'PILONIDAL DISEASE is a sinus/cyst in the midline NATAL CLEFT (top of the buttock crease), typically with one or more midline PITS and related to hair/friction; it is commonest in young, HIRSUTE men and those who sit a lot/are overweight. Intermittent discharge/pits with a now painful red swelling indicates a PILONIDAL ABSCESS.' },
        { topic:'Identify the acute abscess', text:'Distinguish the ACUTE ABSCESS (painful, red, hot, fluctuant swelling, may discharge pus) from a chronic/quiescent sinus. An acute abscess is the urgent issue \u2014 it needs drainage; the chronic sinus needs definitive treatment later.' },
        { topic:'Manage the acute abscess \u2014 drainage', text:'An acute PILONIDAL ABSCESS needs INCISION AND DRAINAGE \u2014 arrange urgent surgical drainage (in primary care if competent/appropriate, or refer to surgery/same-day emergency surgery); provide ANALGESIA. ANTIBIOTICS are not a substitute for drainage \u2014 reserve them for surrounding CELLULITIS or systemic features. An undrained abscess will not settle on antibiotics alone.' },
        { topic:'Refer for definitive treatment', text:'For the underlying SINUS (the recurrent problem), REFER to general/colorectal SURGERY for definitive management once the acute episode settles \u2014 options range from conservative/minimally invasive procedures to excision (various techniques). Recurrence is common, so definitive care matters.' },
        { topic:'Prevention & differential', text:'Advise PREVENTION/hygiene: keep the area CLEAN and DRY, HAIR removal/management around the cleft, and weight management. Consider differentials: perianal abscess/FISTULA (closer to the anus), HIDRADENITIS suppurativa (other flexures involved), and an infected sebaceous cyst.' },
        { topic:'Hidden agenda', text:'He wants relief from a very painful, embarrassing swelling. Recognise the pilonidal abscess, arrange drainage (not just antibiotics), refer for definitive sinus treatment, and give hygiene/hair/weight prevention advice \u2014 handling it sensitively.' },
      ],
      ice:{ ideas:'A painful infected lump/abscess; wants it drained and relieved.', concerns:'The pain (can\u2019t sit); the discharge; recurrence; embarrassment.', expectations:'Relief/treatment. What he needs: recognition of pilonidal abscess, incision and drainage (not antibiotics alone), referral for definitive sinus treatment, and prevention advice.' },
      cues:['Painful red fluctuant midline natal-cleft swelling with discharge + history of pits/discharge in a young hirsute man \u2014 pilonidal abscess on a sinus.','Acute abscess needs INCISION AND DRAINAGE \u2014 antibiotics are not a substitute (reserve for cellulitis/systemic features).','Refer to surgery for definitive sinus treatment once settled; prevention = hygiene, hair removal, weight; differential perianal abscess/hidradenitis.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises PILONIDAL DISEASE (midline natal-cleft sinus/pits, hair/friction-related, young hirsute men) and identifies the ACUTE ABSCESS (painful, red, fluctuant, discharging)' },
      { dom:'tasks', text:'Arranges INCISION AND DRAINAGE for the acute abscess (urgent surgical drainage in primary care or via surgery/SDEC) with analgesia \u2014 recognising antibiotics are not a substitute for drainage' },
      { dom:'tasks', text:'Reserves ANTIBIOTICS for surrounding cellulitis/systemic features rather than treating the abscess with antibiotics alone' },
      { dom:'tasks', text:'REFERS to general/colorectal SURGERY for definitive treatment of the underlying sinus once the acute episode settles (recurrence common)' },
      { dom:'tasks', text:'Advises PREVENTION/hygiene (keep clean/dry, hair removal/management, weight) and considers the differential (perianal abscess/fistula, hidradenitis, infected cyst)' },
      { dom:'rto',   text:'Handles a painful, embarrassing problem sensitively, explains the diagnosis and the need for drainage, and checks understanding' },
      { dom:'rto',   text:'Communicates the referral and prevention reasoning clearly and supportively' },
      { dom:'gs',    text:'Safety-nets and follows up: urgent drainage and analgesia, antibiotics only if cellulitis/systemic, surgical referral for definitive care, prevention advice, and return for spreading infection/systemic features \u2014 drainage + definitive referral, not antibiotics alone' },
    ],
    worked:[
      { lbl:'Recognise + explain', txt:'"This is a pilonidal abscess \u2014 an infection in a little pocket at the top of the buttock crease, which forms around trapped hairs. They\u2019re common in younger men, especially with a lot of sitting. The on-off discharge you\u2019ve had before is the underlying sinus, and now it\u2019s flared into an abscess."' },
      { lbl:'Drainage is the key', txt:'"The important thing is that an abscess needs to be drained \u2014 letting the pus out is what relieves it. Antibiotics alone won\u2019t fix it. I\u2019ll arrange that drainage urgently, with good pain relief, and we\u2019ll only add antibiotics if the surrounding skin is spreading-red or you\u2019re feverish."' },
      { lbl:'Definitive treatment', txt:'"Once this settles, I\u2019ll refer you to the surgeons to deal with the underlying sinus properly, because otherwise it tends to recur. There are different procedures and they\u2019ll advise what suits you."' },
      { lbl:'Prevention', txt:'"To reduce recurrence: keep the area clean and dry, manage the hair around the cleft (hair removal helps), and losing a little weight reduces friction. These genuinely cut the chance of it coming back."' },
      { lbl:'Sensitive support', txt:'"I know this is sore and a bit embarrassing \u2014 it\u2019s a very common problem and we\u2019ll get you comfortable."' },
      { lbl:'Safety-net', txt:'"If the redness spreads, you get a fever or feel unwell, or the pain becomes severe before drainage, contact us urgently. After drainage, we\u2019ll arrange the surgical follow-up."' },
    ],
    learning:'PILONIDAL DISEASE is a sinus/cyst in the midline NATAL CLEFT (top of the buttock crease), typically with one or more midline PITS and related to hair/friction, commonest in young, hirsute men and those who sit a lot or are overweight; intermittent discharge/pits with a now painful, red, fluctuant swelling indicates a PILONIDAL ABSCESS. Distinguish the ACUTE ABSCESS (painful, red, hot, fluctuant, may discharge pus) from a chronic/quiescent sinus \u2014 the abscess is the urgent issue. An acute pilonidal abscess needs INCISION AND DRAINAGE: arrange urgent surgical drainage (in primary care if competent, or via surgery/same-day emergency surgery) with analgesia, recognising that ANTIBIOTICS are NOT a substitute for drainage and should be reserved for surrounding cellulitis or systemic features \u2014 an undrained abscess will not settle on antibiotics alone. For the underlying SINUS (the recurrent problem), refer to general/colorectal surgery for definitive management once the acute episode settles (options range from conservative/minimally invasive procedures to excision; recurrence is common, so definitive care matters). Advise prevention and hygiene \u2014 keep the area clean and dry, hair removal/management around the cleft, and weight management \u2014 and consider the differential (perianal abscess/fistula closer to the anus, hidradenitis suppurativa with other flexures, infected sebaceous cyst). Handle a painful, embarrassing problem sensitively, arrange drainage rather than antibiotics alone, refer for definitive treatment, and safety-net for spreading infection/systemic features. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Pilonidal sinus & abscess \u00b7 incision and drainage for acute abscess \u00b7 surgical referral for definitive care \u00b7 prevention (hygiene/hair/weight)',
      points:[
        { h:'Recognise', t:'Midline natal-cleft sinus/pits with hair/friction; young hirsute men/sitters/overweight. Painful red fluctuant swelling with discharge = pilonidal abscess.' },
        { h:'Acute abscess', t:'Distinguish the acute abscess (painful, red, fluctuant, discharging) from a chronic/quiescent sinus. The abscess is the urgent issue.' },
        { h:'Drainage', t:'Acute abscess needs incision and drainage (urgent surgical drainage, primary care if competent or surgery/SDEC) with analgesia. Antibiotics are not a substitute.' },
        { h:'Antibiotics', t:'Reserve antibiotics for surrounding cellulitis or systemic features \u2014 not the abscess alone.' },
        { h:'Definitive referral', t:'Refer to general/colorectal surgery for definitive sinus treatment once settled (excision/various procedures); recurrence is common.' },
        { h:'Prevention & differential', t:'Keep clean/dry, hair removal/management, weight management. Differential: perianal abscess/fistula, hidradenitis suppurativa, infected sebaceous cyst.' },
        { h:'Never do', t:'Never treat a pilonidal abscess with antibiotics alone; never miss the underlying sinus needing definitive care; never overlook spreading cellulitis/systemic features.' },
        { h:'Safety-net & follow-up', t:'Urgent drainage + analgesia; antibiotics only if cellulitis/systemic; surgical referral for definitive care; prevention advice; return for spreading infection/fever.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c248, c249, c250, c251);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'de-quervains': {
      ceg: ['Gender, reproductive & sexual health', 'New & undifferentiated presentations'],
      stem: {
        name: 'Priya Sandhu', age: '32 years \u00b7 female',
        pmh: ['10 weeks postnatal; radial-wrist pain/swelling worse lifting/holding the baby', 'Positive Finkelstein; tender over radial styloid (first compartment)', 'Breastfeeding'],
        meds: ['None regular'],
        allergy: 'NKDA',
        recent: '"Since the baby came my thumb-side wrist is agony when I lift her \u2014 it catches and it\u2019s swollen."',
        reason: 'Face-to-face \u2014 radial wrist pain in a new mother.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise + Finkelstein', d:'Radial-wrist pain/swelling lifting the baby + positive Finkelstein = de Quervain\u2019s.' },
        { t:'2\u20134',  h:'Differential', d:'Thumb-base OA, scaphoid (trauma/snuffbox), intersection syndrome, inflammatory arthritis.' },
        { t:'4\u20137',  h:'Conservative care', d:'Thumb spica splint + baby-handling ergonomics + analgesia (breastfeeding-aware) + relative rest.' },
        { t:'7\u20139',  h:'Escalation', d:'Steroid injection if not settling; hand/ortho referral (surgical release) if refractory.' },
        { t:'9\u201312', h:'Support + safety-net', d:'Acknowledge impact on baby care; review if not improving; red flags (trauma/scaphoid).' }
      ],
      wordPics: {
        fail: 'Imaging-first or vague "wrist strain"; no Finkelstein, splint or ergonomic advice; ignores breastfeeding for analgesia.',
        pass: 'Recognises de Quervain\u2019s with Finkelstein, gives splint + ergonomics + analgesia, and knows escalation.',
        exc:  'Recognises de Quervain\u2019s, confirms with Finkelstein, excludes scaphoid/OA, manages conservatively (thumb spica + baby-handling ergonomics + breastfeeding-aware analgesia), offers steroid injection/referral if refractory, and supports the new mother.'
      },
      avoid: [
        { dont:'"Let\u2019s get an X-ray and see."', instead:'"This is a clinical diagnosis \u2014 the Finkelstein test confirms de Quervain\u2019s; we don\u2019t need imaging."', why:'Routine imaging is unnecessary for a clinical diagnosis.' },
        { dont:'(No ergonomics) just giving painkillers.', instead:'"Changing how you lift her \u2014 forearm scoop, a thumb splint \u2014 is half the treatment."', why:'The ergonomic/baby-handling cause must be addressed to recover.' },
        { dont:'(Ignoring breastfeeding) prescribing without checking.', instead:'"I\u2019ll choose painkillers that are fine with breastfeeding."', why:'Analgesia choice must be breastfeeding-appropriate.' }
      ]
    },

    'plantar-fasciitis': {
      ceg: ['New & undifferentiated presentations', 'Long-term conditions & cancer'],
      stem: {
        name: 'Carl Denton', age: '47 years \u00b7 male',
        pmh: ['Weeks of plantar heel pain \u2014 worst first steps in the morning, eases with walking', 'Tender medial calcaneal plantar-fascia origin; new running, on feet all day, recent weight gain', 'No numbness/tingling; no specific injury'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"My heel is agony for the first few steps in the morning, then eases \u2014 it\u2019s been weeks."',
        reason: 'Face-to-face \u2014 chronic heel pain.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise', d:'First-step heel pain easing with walking + tender medial calcaneal origin + overuse = plantar fasciitis.' },
        { t:'2\u20104',  h:'Differential', d:'Stress fracture (new load/point tenderness), tarsal tunnel (tingling), fat-pad atrophy, enthesitis.' },
        { t:'4\u20107',  h:'Conservative care', d:'Stretching (calf + fascia), supportive footwear/orthoses, load/weight modification, analgesia.' },
        { t:'7\u20109',  h:'Expectations + escalation', d:'Months to settle; physio/cautious injection/shockwave if refractory.' },
        { t:'9\u201212', h:'Safety-net', d:'Review if not improving; reconsider for point bony tenderness/neuro/inflammatory features.' }
      ],
      wordPics: {
        fail: 'Images routinely or mislabels; no stretching/footwear/load advice; misses a stress fracture or enthesitis.',
        pass: 'Recognises plantar fasciitis, gives conservative care and realistic timeline, and screens the differential.',
        exc:  'Recognises plantar fasciitis (first-step pain), excludes stress fracture/nerve entrapment/enthesitis, gives stretching/footwear/load-weight advice with realistic expectations, and escalates (physio/injection/shockwave) only if refractory.'
      },
      avoid: [
        { dont:'"Let\u2019s X-ray/scan the heel."', instead:'"This is a clinical diagnosis from your first-step pain and the tender spot \u2014 imaging isn\u2019t routinely needed."', why:'Imaging is not routinely required for plantar fasciitis.' },
        { dont:'(No stress-fracture check) ignoring his new running.', instead:'"Any pinpoint pain on the heel bone after upping your running? That would make me think stress fracture."', why:'A calcaneal stress fracture is an important mimic with new load.' },
        { dont:'(No timeline) implying a quick fix.', instead:'"It can take a few months to settle \u2014 stretching and footwear are the mainstays."', why:'Unrealistic expectations lead to dissatisfaction; the course is slow but favourable.' }
      ]
    },

    'balanitis-phimosis': {
      ceg: ['Gender, reproductive & sexual health', 'Long-term conditions & cancer'],
      stem: {
        name: 'Brian Okafor', age: '54 years \u00b7 male',
        pmh: ['Recurrent red, sore, itchy glans + foreskin inflammation + discharge over months', '\u26a0 Increasing difficulty retracting the foreskin (developing phimosis)', 'Check glucose/HbA1c; consider lichen sclerosus/BXO'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"The end of my penis is red, sore and itchy under the foreskin, and it\u2019s getting hard to pull back."',
        reason: 'Face-to-face \u2014 a sore, inflamed glans/foreskin.'
      },
      timeMap: [
        { t:'0\u20102',  h:'Recognise + examine', d:'Recurrent sore glans + difficulty retracting = balanitis with developing phimosis; don\u2019t forcibly retract.' },
        { t:'2\u20104',  h:'Check glucose', d:'Recurrent candidal balanitis linked with (and can present) diabetes \u2014 check glucose/HbA1c.' },
        { t:'4\u20107',  h:'Screen causes', d:'Candidal/infective, irritant/hygiene, STI (GUM if at risk), psoriasis/lichen planus, lichen sclerosus/BXO.' },
        { t:'7\u20109',  h:'BXO + treat', d:'White scarring/pathological phimosis = lichen sclerosus \u2192 refer; topical antifungal \u00b1 steroid + hygiene; treat diabetes.' },
        { t:'9\u2012-12', h:'Refer + safety-net', d:'Refer for phimosis/BXO/refractory/suspicious lesion; never force retraction; return for stuck foreskin/lesion.' }
      ],
      wordPics: {
        fail: 'Treats recurrent balanitis without checking glucose; misses lichen sclerosus/pathological phimosis; forcibly retracts; no referral.',
        pass: 'Recognises balanitis/phimosis, checks glucose, treats by cause, and refers for phimosis/BXO.',
        exc:  'Recognises balanitis with developing phimosis, checks glucose (diabetes link), screens causes including lichen sclerosus/BXO, treats by cause with hygiene advice, refers for pathological phimosis/BXO/refractory/suspicious lesions, and never forcibly retracts.'
      },
      avoid: [
        { dont:'"Here\u2019s an antifungal cream \u2014 that should clear it."', instead:'"I\u2019ll treat the likely thrush, but because it keeps recurring I also want to check your blood sugar and look for scarring."', why:'Recurrent candidal balanitis warrants a diabetes check and a cause screen, not just a cream.' },
        { dont:'(Forcible retraction) pulling the tight foreskin back to examine.', instead:'"I won\u2019t force the foreskin back \u2014 that can cause harm; we\u2019ll examine gently."', why:'Forcible retraction of a phimotic foreskin can cause injury/paraphimosis.' },
        { dont:'(Missing BXO) ignoring white scarring/pathological phimosis.', instead:'"White scarring tightening the foreskin can be lichen sclerosus \u2014 that needs a specialist."', why:'Lichen sclerosus/BXO needs referral and carries a small penile SCC risk.' }
      ]
    },

    'pilonidal-sinus': {
      ceg: ['Urgent & unscheduled care', 'New & undifferentiated presentations'],
      stem: {
        name: 'Jordan Reilly', age: '26 years \u00b7 male',
        pmh: ['Painful, red, fluctuant midline natal-cleft swelling + discharge; can\u2019t sit', 'History of intermittent discharge/pits there; hirsute, desk/driving job, overweight', 'Acute pilonidal abscess on a sinus'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Painful swelling at the top of my bum cleft that\u2019s started leaking \u2014 I can\u2019t sit down."',
        reason: 'Face-to-face \u2014 a painful natal-cleft swelling/discharge.'
      },
      timeMap: [
        { t:'0\u20102',  h:'Recognise', d:'Painful red fluctuant midline natal-cleft swelling + pits/discharge in a young hirsute man = pilonidal abscess.' },
        { t:'2\u20104',  h:'Acute abscess', d:'Distinguish acute abscess from chronic sinus; the abscess is the urgent issue.' },
        { t:'4\u20107',  h:'Drainage', d:'Incision and drainage (primary care if competent or surgery/SDEC) + analgesia; antibiotics not a substitute.' },
        { t:'7\u20109',  h:'Definitive referral', d:'Refer surgery for definitive sinus treatment once settled (recurrence common).' },
        { t:'9\u2012-12', h:'Prevention + safety-net', d:'Hygiene, hair removal, weight; return for spreading cellulitis/fever; differential perianal abscess/hidradenitis.' }
      ],
      wordPics: {
        fail: 'Treats the abscess with antibiotics alone and no drainage; no surgical referral or prevention advice; misses perianal differential.',
        pass: 'Recognises pilonidal abscess, arranges drainage and surgical referral, and gives prevention advice.',
        exc:  'Recognises pilonidal abscess on a sinus, arranges incision and drainage (antibiotics only for cellulitis/systemic), refers to surgery for definitive treatment, advises hygiene/hair/weight prevention, and considers the perianal/hidradenitis differential.'
      },
      avoid: [
        { dont:'"I\u2019ll give you antibiotics for the abscess and review in a week."', instead:'"An abscess needs draining to relieve it \u2014 antibiotics alone won\u2019t fix it; I\u2019ll arrange drainage urgently."', why:'Antibiotics are not a substitute for incision and drainage of an abscess.' },
        { dont:'(No definitive referral) draining and discharging without follow-up.', instead:'"Once this settles I\u2019ll refer you to the surgeons for the underlying sinus, as it tends to recur."', why:'The underlying sinus needs definitive treatment to prevent recurrence.' },
        { dont:'(No prevention) omitting hygiene/hair advice.', instead:'"Keeping the area clean and dry, managing the hair, and losing a little weight reduce recurrence."', why:'Prevention advice meaningfully reduces recurrence.' }
      ]
    }

  });

})();
